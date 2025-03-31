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
    "xSyccCyZX6GJsE8KJgsMTpbC9dQQEQHGGFhExhZvss59pdnGCXHiDx5meejjWsdspvx7saGsCb5D3BNRBaz4BN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E9bBhWoPhoBRG3RDBnu9D1UwuDQosAfwLKQgN6n3Mwc85ComSCXVEiXmo2QukPCgWKbqtLAntjzen4VWTbFTsRg",
  "key1": "GvChuHpqKE1dRtqKw4K7U7Yg2jdPxgFtZmsppeD8ZgW2NFTgqgSKCrVqyadbTnNXYBSLvbJRo18gkGrJb32iSHD",
  "key2": "4AsRiMBmKaWWrK9fionFMid7KeWEi6MnWGhreaE2n6vrTvzsaDugDeWYhFf8nNdLKirUh8umeK4uwF69nby9y3DY",
  "key3": "2QzTiFZyp4LbBfKH1vzMrHwXova189HKH4CnfZHui2hpc429fpUprCBQ3jebP6nFBDdwDBX2SXGiqM7g2U3coDna",
  "key4": "587uiSW9NXCmZtvZFp4TEZAHoGAUwkRWUSKcryPJp6h8r5FnABrfCKfUfL5JkeYVGc2riwFS9BKYmGAfZ4bfAvey",
  "key5": "5wGabpwTqhppM5A96yH7VApJSQvfF9PwM1Qv2HTuR2GiutWbHQWtB7JZBgr4cDoeNpoVDkjVf9j23ugqZAcSWg1P",
  "key6": "53cNAb3FuC6CywZg27x3QWbkJv84itp6Ni4c9xCfm1f887m8Q5JYkn6BB6AHLTcWwHPy2RFAoNQZ8W2wsketB2cc",
  "key7": "5LnUCzcaCKmPRHjbsT2pRjauTsGUdCidVykZ9sQs6RQitaX3rsuUq8dmcqvjQdGBmnxPEGePes9brwAWRJuCZw4x",
  "key8": "5ykiBwc95CkYDiM7hhi1Nc7MnGQUeFS2VvhmzeFYhbedbDugynGDHj94rf415LCEKiqwcvvR8ewEMdbXZnF6uf6S",
  "key9": "4B2ZsHUAxYLptGk6YgT6BjJwE1priWx1r3txWESt852rvjz11P9JCHcCudTT9Vdg84Pk6Vb47qCy5VQASCBsm5Y9",
  "key10": "3BDND5at9U5K48faoHa1RN6RfSoU8z3ZZywom6BUFMEgkRZmW77mPBdzE7Nao7dkVrkHc5L1H78RVDyrDLH2acFx",
  "key11": "5kVpwkepyF6GxYcNpTcVKr621tszqERshRW99b2AQVA63uX4Hd2hZYaPW14YYupTvhLTVo2Niiqe7fns1KhvaZ2H",
  "key12": "Nx9sE42P4C1YfTqWWb3vGBzfwtg3SkfVMYP3pL7rwyQeJieuqmRg6Ud2nVt6ev15Z8QKccWL76wxQNciZijD9f6",
  "key13": "2uGVoSK3fvqiLbaZkwiD7oVx9xrTBWFuvhrNE8MCMy4FUHeKAY73j4iuEYtQHtMV5gjejMUJgidSBqkaq9hUpKXQ",
  "key14": "4YssL5zrfpUEojpZumSNU21oL8jTpdFpzy9BxPtcJLbyPMb5wonSJFkhni7mdEExU1pQ6whaAav7WDU56gum36gk",
  "key15": "5FShAANRscXizyK1EzQW1inBVhXjjXs7CWjUTGX6PY8R2Y8sMaHm3MgjofRbREm7BjRYqYAa8kfZsC5dcv4d5iBU",
  "key16": "4KZSx9RfDiz8phDux3LQgFRmVwxQPzxKRayQSB8eYLofdNmaFPhmNGuLLbaCzfqHiqfWt7yiqxcz3UM6UmX51V6k",
  "key17": "3TMFTcEHaS9f64LhRzCp1dxk1V83uxqaLXwg9yit1MvyYyEeLWGQPMJXh3eMqfVMHGNy6m46FuKC5HJutbA8fDL2",
  "key18": "3kpYL2TyCVaABZvQy5fVoxyE95cDsJDS7a6fCZ9n1Lx4ftxeBFePXDQoVGBPKtD2CdRzuPUJBbndiMiUhdMURtR",
  "key19": "2tBTPRQGiGodAbZUAsujLYm3vEeTdKi3MXRibFh9sm5t9Z482EKxqEtv6PP5UiGpegAzGW1Q6jcLR5jaKGEkd1Qm",
  "key20": "Nb9HyW3iWHXgcGrdyvu8vx8FJqnJXcvs6XoJnbriVBjVmB1o1TeU2Va4G497sHgUx1ryUZojDYB6tqh2HnMjc1V",
  "key21": "5zuzLDqLxhPvQCL5cP4UsHnj28x5z2WLNYqpM2A8jXKKgTFYcqHgzGJ5459Tn5k1CaraUHoMYwUB4rMc2oei5MLA",
  "key22": "5ByPa18D48AadVycQGK4nriKuAsYuYt5apfq2RVvgF1RSFhoUzgT5GMfG6yN3gFKQ1mmDKfeCeJjPyEj317GXc9n",
  "key23": "2DxRG35Z4pF94SBAmTghLzi56RkQPZSNabQfxk6R55HU2pUG7W5CR8SWhSXs5j5osZfo6h1XvFP2j3MUNYoqVEHN",
  "key24": "3dtVSyhyWsC3r7grnDsndbbqprbx4nzafkNjozkzkCG39nty1Wr4VEmquYYtm7zGPcCs5vx424uBytehgxAAUHQa",
  "key25": "5NBzRHbFjPgJYBBuwqMBinT7YGxSn7guaL7S1Bcc15zB9PZcS2UKmeH2f2UHRQEtv8f5hkZShMUFRn7PgteCTN7a",
  "key26": "5TSb92yhvk9ZAfveskbDGbouzHFVGbn6nFMgExpMSvjZ7JB9nd5eCwgh13PpDs5n5LmaaCByYdFABZfzAowvsj14",
  "key27": "B4ZQbLyxCZfxP6Vx7yGY7GzD91dDdRetDKbrFTGbL3emVobVF7yBQBLz7MfC9msvLRV4seGEm9nzCH6f4QpouBj",
  "key28": "U7AXnpQKSUdhen3riMeTtEkkGJjAcWA6L1ZuFvLXmaRFYEvthwaHbMEQpVriLbc6pjk4dA3cQKyN1XGKkSyhXpX",
  "key29": "9oqG1fdXWYntaFbXVnP6XhNViA6uYCdKLhSBisxirS5EhkVPLUaTyhcwEhxgaQ35WHpcghDdaPHqrLfY2mtz1n8",
  "key30": "49jqkBU3kkcPpviS1caCVEbxvJStc7ZeosP5jZtEHUtVRviDk4woBFtpubHtgZGwqAVJSGpU6Pceq4jA7h7SeC9J",
  "key31": "3n1zQiXciBjyh2KwU4zNjTuYKXYP3pYWEkQsioZgzhy24vb9CVTFAimPb9mn3jXpRxiZXwG6vhDCirdD4ytDEHLR",
  "key32": "4YgdYcDEcZZLnHvFca8cn8DFZWMaN189cPhmPwcEQJmu8Fa3dsB9CwSmATYoz7CaNp4pVqgCuDHXMpqGXaTJpxZB",
  "key33": "37eYt51RFd7ppXQ8nTguPd1LLb4HtxtAuaSirvRCXgiefvFtxYtUUv5KhxVduq7SejYQCM372SoEugh11uAC5WGh",
  "key34": "4h18RXi8My8sAsHau5vMdEKyvS5fgDaAzGgmeFwPER4qXPb9iHXj9fEd4thx5LSSnjj6btpKCqyPpJ3rRep59UQ3",
  "key35": "5tEjyvNN6VqeRTQVfosZfXSXkSeS1CEP4bWJKe3ZypGBeeJ5gqtaduki1kqRppnTUt5bevpqPXmjT2bWQp8xWXRQ",
  "key36": "2oHTVvt8zMdwTJp32Lg2Xp4J67mNTwdDa5jUWUSXN8Zr5usZq1Noy3hiPqhBRe1hZc6qJWACTdoT5fkWZh4UPq6p",
  "key37": "447TNhGnzjUU3cJccc9vjVCH3u9hNxQCAoYNMSfErvFmqcipnFsKGE6eahGGM3thnU98S8JvoZ3cXRu29EGs8TVJ",
  "key38": "3swFExwDAWiXCeqK9rdAitvxsPA5q2CKGUgAiQ8yCfTyC4wgqoQ2xGh541AYocjWZzp2xU3e9dSgjdTexvKpq8Si",
  "key39": "3RHDDE63PTmPS5FXniKJLUAa9BYstrdZvuPBkzS6uDEukUg7sig6nYKDvyfCSPQJ8Au6dSgRRZ9CqAhTmDkLJhr7",
  "key40": "3bGTPp5k8FFyAfFGePLhZjVHnhRcaSCfE7xQs3NjAFGyh1gsRwWRtdmoWqxPzV5qbke5Pwo22WCw5BSoFXsFGpXM",
  "key41": "31hXnoS8SKPBzuZAPh5Hq4ryDn7uWrUq2FTmGFsBVqkWuTz8F9z4tjtD3M8dC4j53Q7Es6y2XqikrowaJhhNjxZ3",
  "key42": "WmJVeC4KNwnT9JXpovVuzNuAo13jyBzwJSnM8xCHtGUTcfy7KZPdUTiYwY4oYJYrErVeMkUuL59mfXCPA1u8DsW",
  "key43": "2mSyjfyRoJt7MjfsbmtWoF9baXb8g2KWhPQLJQhXyku9hescVBrAxXEo8chhhU89ECppr6BouvUWS1d7iVxj5aNo",
  "key44": "ZD9bVKRtCR2uuxKxJxQPBpNMjrodu8bp2x854RyXQnQbapqCESgLALvyUh7ZFdKvSEU7jo3J2KoYd8qyuC6JYBf",
  "key45": "3kBuLCcQGBhzJjL4x3F9qaKgZa2buguQXjrJyTEzRDZuWdnLPT8qDJYPSsTTgALpXzixgJte6McmhDsEFeEMGyRJ"
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
