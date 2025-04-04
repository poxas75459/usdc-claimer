/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2RJ39rWX33Q3eLqLGPTsHGeqL23SL3W3rQhCr5wrPbnrPgHUTT3zLLFVncz6b2TLVgsMQWTP3VqgjDQhhM1HL3Lp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JVd2ukTHypjWqsmpvRf7zFss7XdVtppv5EmWht9mstsVVyHZmyUjteHNyBEfxSMhaYzhHtbn46Tn6hTFL6Tkwbz",
  "key1": "WEXCoXrzoAHqNx91nWJf5zKZPNgTsSxYqunVKGWUbEX33uCwkBLxnDRnFoDbUBeXbkNxinKLxZxWiWX1TGCyYZX",
  "key2": "266cNmNgHpAig3Mrzcx72wC1ejLdH9j4tweiS4u6ngdvFRT9ZM4GtbV3wjjU4ADQ7XZCkbuWtL7trwGfPbQZgEFC",
  "key3": "55kzM8KiDBJ9gXvD41G8Dfxg8SMaYZLWnKbubiPPLPQNtqQbeLfpoiUqVaYEaRwcEm1UJHWvRbbUdsfmbKRzo4Sw",
  "key4": "5WSnht9yo9LeBUh7Xyw6jBAJLLrt47p9DBUmcyod384J3otkProg8KpTKCJRQuW1FQcH8NuUdKyV8qdC1vZpyY9U",
  "key5": "jftbeM5TLxunCWbizXUoYef2MaQxY4BrKRWRyprcaenKkzoic8gq4zpQyHZ2Hn5e43gHip2p8bUkc3Cmz1FPmiA",
  "key6": "2TQRZnQw8BvXQMjwzymcnGT3hqvCaoGZALWxZf5ZDLRnFyuyz8TjYuj5En3Si1GUywCoGE4VB2a6hCV2S38RtkXR",
  "key7": "3NeMxAQXzeqJFeLJio6eioN4GKRvGgrVhCvNSGh2LVkcMbwWNGj38DUHHRKN2PZKppNSAN53V9UdANSbex1cgkiS",
  "key8": "4NH8eBsNvMvNsrCoodDvAHTSKT9bypmhQNMcMYSmgB1MSmhTacbFo1hZDAzZ5s5LPLXTerGoNUN117zx7irDXXHx",
  "key9": "5wNDLxadunk2hd5XWVvGv4xZNbWXtHKoYc5he7sV8vV4ZUyjzeRNSZZicxJnf6PTK7pR1y2meVrdmpDx1gAEMxDi",
  "key10": "3nGACMYi4GfKwHmgBep2tWrDJYC1v4cCucn32k9oFqRSbH4pKVtVca4R6ga3nZAt7niPDgcFbdW61MZWfPfLYodw",
  "key11": "5qU29yL7w1jx7YXJuPCrgk33xEB2SpKomBQMC8Ju3Un3owyFCgYxF9A9oxJr4i411qfHmUk6VbDYMHZDbHybXkbd",
  "key12": "4hWaR18rEk4MeZdnVbVQozMHF3LfdKsgErTNYDtePiitbboUGbdYrF9eK7xPuHP816RPZUcSi1sw843JbNDK31dj",
  "key13": "5NBvo8G9dQzHoUo8LNcsbt5PZwUFnRNMWKeFrN1YYTj5iHLctW4UZ5rHNc6DwHV4LQ66Wwo3MoLJ5Qb1oX62R7AL",
  "key14": "f6b6xqzGTcj3BpX3bW3azTDujHNJhfGKkQUAgSfHXtCzsEQScw1zByaBFUBHEa2sxnUiC8NAJb88mzWe9CkzLVB",
  "key15": "5uUVAWHG5zsdWnNtyhDrnt9oa5C7qicyfMtR8aSHMoDPHFqzZ5Epu8tJsgmHc3gSvZboRTMNLEHgeekKkjngnGRc",
  "key16": "NcKSdUEzKPno1P6Jpnha4EBCZMnjTAUZzcN3fC5HxyYzJaTHSwPWTMwqu5ZacXiJMNcf85mB5pVaUyxa41hd1ku",
  "key17": "5rZB9DPGnR59C8rF1P6NwGYrT16vVf65hFsSewcwFxpPLknUnPYNr9VyvqvRNhFXU2rgR6XXzCF7j36KtnL5zdNm",
  "key18": "2PPtcNmgzo1sHwaLKMXG8oeBMUK5wYJ53ZNDAiMa8NRcMq4hd5ypJWmgxrj3dZvVFFvS7c7fUpsmC2W3FbDLHYVd",
  "key19": "5AEjkQVuQNRWBnna8zZN5HmoZ98AgT8ycDDcCnmW73BbKwkogDyZtJqVC4BmcwuD4p6g23cbDEGCTg7oTtggpBxC",
  "key20": "44y6zFUcAeejY5JpLxDpa61QoHGyPKLvpNUSirkumuZob7pr3qpjyoFtRMxSesvD8Mr1NdTimvtHMrNNgx256FhT",
  "key21": "34XdmgZf3usyEjBuytmB8W2eMqqspVcpkhPDZ318gG954GsGj9tr889XFqCc3jk8zgGjR8qaJLVmP8z51jtFu9xQ",
  "key22": "K8SpDRBhdQjiyGWpK9h4CNvnuxG2o1S4xFvLPogVUhVntyTLfCHk2nwJsguFQa6oykoqXmwbscENGcbE7T9Gtgm",
  "key23": "2ZW6rci9yZcw8F8EvSzVMGooAktz41CNPHFnUXc5Q2YNdWGPCzFMD2BNyH73P3jnJ1mFKb3aTPo41iE1mX2dZLRK",
  "key24": "23icggARQ46Y9ktUkqiDYScvL7cmBCnerJtUL1ib2n4xqYQUTgTP4PhLdivwLFzkUKUF9dAMEJPLAJR14cuwE8TY",
  "key25": "2vBA1rni4H2okxC7DSR643AtrLsgN9PZwTiVwN9pVPyJeBPidjPZ6BC2bV1L4mVHzVn3Yh3KZA8WWf9huu7mJ7D4",
  "key26": "4zyRD2aYZRhRAsWhDsVy3uVCZn5BHugenepQTHGB4vP156XKYsT7L6irhSA8G8rpmC9dANDe2ZBTBKEvR5CwDcHt",
  "key27": "3zaJMhRzZMHpxdD4wyGLTrSAgy4uDBTSfFjnSHHnf3kjaZ5LKNWzQxvjgHRpHyGGNmmymdfehVrtZiBVA7uhPXSv",
  "key28": "Sr8ztEFb4rmgUgjVvpcwWwrH2Kuw51suMDKmciAr8bFoNudzN7oaFqz7rVK7niMDCXfkn34ZEC6HJzdzwpTEgEv",
  "key29": "24gG3J3KNynigxVJWYgqjbaAprXqfSFgnaMzwABxmTkC6MfPkmkfbzJ2bAZrRupQ93yq6hmo4P6gbPHS98QwT97R",
  "key30": "5MhimFxqcvxH23akPpsgDhvTXDFJMeKvVbfFXMd3sXA7SvN942CuQymfcCWxo5tUUJ8DSrkW3tFEtPjq2tgFbWHg",
  "key31": "5naq12iVva5EBhAWU68NR7szQDV99AdQNVLL7KPXW53BL3NFJnqd2rf5BDAT7RPSUwCCHeHhE15gSWfmo1oFP3xM",
  "key32": "31TUnLkeia8TPjANQVVDALYua38jsg2pu52MghXUKiDZYm26ZbRUfCXG5SKKxZTTfZ4ToMVKJoyxRegS39gEFUMU",
  "key33": "4MpcWXLdBtrnP7sFKvT9qyZEPdxi8bC7y2CH2nEH1LMQP4Tf2qXyQvSbSGX8BfmrKx22aHdY5nxRUN2tw9eEnsWH",
  "key34": "4vbQpGjxtR1JiTNyAbUtfczGZ7po35aaCnxEbNC6ivQoCAtpo7t5ZwuQGriV4CceMit2ZHBWExRN3f9vJHzALQA1",
  "key35": "25CxT7pC5dTULbGLekChh7v7mmx7cHGuDWdyz4vcMpvhYpgAGRAL7sTebXHKcseRUhn4HfkGeoF4uxNmU8Q4Zrya",
  "key36": "2icZ9MEEaPoTXfiAjYKtkN3YCPtKaJhTAJrYrcwUbB5topAwQYNhboJJ15XpiymrWBMVv3RBKA5j6MWpjGgkoT8f",
  "key37": "3dTxhcUhWxqkLBuLtqLPhUt1hboPTnsJdHrf4BeTmz3biq79orXRw2BnKvKZ1HvcsnnmXeHwVBR7WLyP34UmbdE4",
  "key38": "43SXP7sunFiD2MdZ8dQUJux3EtjXUA7MnvhYj3PLUEn86VSP9YTRYAXouGw4mM4hHV7zr1eAAWMuqGMKwJvu4Dk",
  "key39": "5SDz24jLWQatbbuyH7JGVXJRNwL5VuovCvKU6NGgktHFzuygh7C6SgA4ZHSEeHYSUYsV1L7Vjbrd8VXfq348dcm7",
  "key40": "byX2w9iP1yp3KTKhu4mPJwcdE8By2FqdrYLpDTLGzn479PaELX34rCgVLFxtgS5vkfDgfCFmmob23jzmyUPA4My",
  "key41": "2gMrHgR2GKaXZRfGP8j59Q9rt4QNuE1niEVFTa7K5ZXy1SJu4rkCptARGSRUWSSAwGWEA59hrJt72dVq2eoAs2DS",
  "key42": "2v8Hd7L9biSc7ohQquvtq9tJ5ejeud7zRL9RrcYLL6wFa74BSATrR9rbq2hSudmcpUR5x2A8Q19RRNUANHKD2oLq",
  "key43": "4DWyxsTqgjKTzXrn8yzkw9jfeaMuA8FfPwpdkdHQcSkLWn8sBRMtqe5ATTHiNHtu8w2UGwa8uZ1evWpLzsj9JqgZ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
