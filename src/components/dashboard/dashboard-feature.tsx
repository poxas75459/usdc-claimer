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
    "5DuEpqyY1cV62ybyCJmNwGWxgxwrjFg63sagKq5xMWBs8AZH59ocvaX2HqQ2EKTmGqsGMiQrP2bhrLXAMLBLyvmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gjPgZPKZUZwJPBXr2kKcZAdw7JWzf8fj3JaVffRBS3rjkj9EeoBWNEvceHTMdphSZhLkFG5i5Xu9Evsgar6FLJa",
  "key1": "3WWEn7P1qxCJD3f1UeFEz2gnxPgY8YjFUXuN57VrG5RM3y7KyeVqrcJX2puWtPsjWoQkpRJvRYULyM1chM7kbuyL",
  "key2": "4LkeRQAD7UtGwzj7JNjrzq14ftZvFryDmYv6K63oqoLCNVTMiwEMFi8GJXR2FLM7avfSDLM1yaRYpo9d2BHDiBHC",
  "key3": "SajxuqhsEQbTqkuGZ5epkmUEpaQ1aQ3ZsZ96ZhVLgqR1HE9u8RS7dvjSqQAHFcZaQgdXSGpvNUwGrsZ2SQAffKx",
  "key4": "4Mbwft6iewa5yRfvNru4nV219yDYMygFBmBafwX5DxhzAtFxd6sk3qwE6ZdsxoNc7peoZD6pDB6Ltw1gbjvfj9ak",
  "key5": "SDUg5daFa8pdBtRRxYbEfhqgv7sviykUeDjdsHkoxjH8ZnJNEQgEhzrbjcyK6UqxTGcEeXW33cWKmaf9FbJtSyy",
  "key6": "2Q5hgcdsRJSUkKYQXfJGpkvuERZDdjLVPMg3RGxhcdGrmARnNEdnB9ULNiBiD17sjKJFpB8iCF3jbr4q89P2kK4L",
  "key7": "U18k7qWf3Znz5B7W4s9LepNmBstP9zCGNDwYrAqnkn67p5Fh9CNyL5AqKKAy8xijzHUrRUt4WT7Bi7VZDmnfbta",
  "key8": "5mvw88VNj8KNKhEukcTADJodgUUzJjWoHb8S8G4Ge58VAz9RaiY6Zm8Ys34bEwnEvWKN7ksTMyvgxYCUGQypZEz5",
  "key9": "2HzFkim6tvZN3QHa1gmHNDRQ1Nu2Ac98i1g1fX639vPcojLNA9Ef9p4Sbq5dzvsDL7nbuw7SxX5ZAdnNCLszcKc3",
  "key10": "28CdJctKMGyeyzFcg9XNmFGbptrvXELN4pFhRs8pEzAahALuK2JeG16pDY8J8vWqBBf5xZKti2iGctx87GtBKAmf",
  "key11": "46tFUb1sFXsCaAf818ZnDEWs8c35D3bNfXYp7EpF3ZtuHq5cENgdLEbYPnDWe7MpLfcoDR88noYGXGEKGeKeXgVa",
  "key12": "4LD5DYHLE4kRimkyAPj1DMM7CBaXXC9rEmQ14yoyPe7V3AQW1kQGkwiKGkSyPNrauqS3eaNcGeAkXchwdNZVYqgJ",
  "key13": "3GoWiUhK8tVD474cuVnNPdsw5whZugeF5b5cyfKaAjWj7TXxvJo9fRVZAEhGZfN2zedmDAB69GEG2G2aZikDVHno",
  "key14": "2KN5zbMXZwACUTfch7HA8x12Zb2gApTrksYM2CTTCt3cJ8oRAYXAzT8xLeGS5R3AhichpYM8rFouA9zcRw4Zh6oY",
  "key15": "3xwwwu6vNEXcqNzxMsS9hUp1XYi6QDRPyRqNbizBRxkBc4VFB9ChSuWA4CH6YmFRvajhdJ1CcTW79WV2aN9z23CL",
  "key16": "4HrbPpnuBCz51A4g2543KSrQBUSeKCzyJangJhzzinSSyyf24sQ3CpmtZTvvwQKXFEqWMz2WqxCfQ3LzHCbVDEBr",
  "key17": "3A8zs2iRmfV77JscYocbxMj4arB1f1Lse7465PX4BxgtGyvDdf9piMxV5AFiKJocWngAvAhkdTkTLweGfWnHahzv",
  "key18": "2wUaJ3XTfrx5xZq8eCkgguP1EMEmvMtqgACuuA9EUXBnyx1M6tG5pkwcLS22BAzi5e9DDwZSSHHhh2bkRkR7yXnA",
  "key19": "5gW6o76E83Tp6kRovUDau1gD5mppinxQAx2Yf6htRdwgUBtaohnQT8aYirtbgBrh9fHhZU69GipFSyimMdcoKXGu",
  "key20": "28kcb9uNGVrBSBLhX9oEpQ1xBh36y9nu8XgfXr953GupbjKMhEmY7rvxQEgZHPnhq9crG5qZfgbK5WGj1KzvR4uC",
  "key21": "4MFdcug3PyrHiZ43qpSYgkCwWWgutfXJ9y5cz1YFiccKhv2cbjXV4xaZf6rBYpySotom65L2c4G4j4LtFKJEbyWt",
  "key22": "3dyPERpC69LcMEEtLYzcvgANW6SBsR9F2nbtWTKFqoMLH1LV3WLeCPJxKZN8LVcTqTTFw5K86VG41yikmurb4vAt",
  "key23": "5KPf1SC6QtTSafW5Pk21FgQ6PMepEkuZknDUP9nkBNXKoBqh1SEMPd1aUVfUcFBqwfpmwChbqoyoaJ9GHdGCbfU8",
  "key24": "fzVG6Zr8B4PNrMGGsMusU5GzEXJxJn9tapqNd8FYX84nVBy7csb9XmZZMxsXUoCS3pYQGKntRauBNuR2HbtL7BY",
  "key25": "2ZSUpmYbfe237xMpDWPNQFt7qJYWJvsgYgrGiBF85zZsWJQczojPu9ymTSLTxN1DvmHnn3DPHvkBGsNzU7YScSkW",
  "key26": "5pmftgFyxHirB79g1nfd8ha34xCkN4xbtErgLuu7PDmiU7YE5hfXgfqC4waoxafjGKWbMC1zoEecHWyNaQTWfqq5",
  "key27": "1aJ2xdP4Qf6NRuVNgkrCDSx4SbZTz2R44Agp37p9cUJZpkjvqP7mEUnHpTLT39m7CkA2PqrhTmqwd9e3XNcLmoa",
  "key28": "4wBwnsocoqCn4LP43to73FaZNHm1MH6TimixYdAiLTdzMHmiPcLmmD41Mcw9e8zPFtXfaiJWaFVFucscy7YLYihj",
  "key29": "47N3KKEpjUnDPgj7YpMtszvzWBN1tPy8d7N2uyS6DCZwSwYteyBFe4dFV5QvDhnGQ9MM8MhTMB45QxJw884zsJsx",
  "key30": "468sqhNbVq6UR5VgSX6tJL91CjLcxUnyXtjkFeiGaRppoM1qqUSSmxv9t9MRum7khg2G49egd2X4HU1iyxnWdugP",
  "key31": "3oG4fXQVbA43Vkr6ZpdXegcTcjfMK3S5ijseG9bwFABricxEKhj1heiDJAQixf7abrKAX7EawBPiCjmwtKSieD68",
  "key32": "4SdPX3nMhLmZUpL4CWactfxe5ixh4NyCGVYuR4DxjfKu1Z7BNXQoGUf64sxHLRi6e6Bktt5scSLXVSMoVZ9tjjBr",
  "key33": "54NYzoz2yCCDWBkppyLd5WEuytcv51YRRdCbsEHCWHQvbdr6BfnXBvGTYmnMgs8vxjC8krQgPz7mUBZ1w97cr6fY",
  "key34": "5GLQVPofK6aNCC1hdkkXGTerns9YZ2gmAT94SKWBfqSXurCgep11CqP3E1rTQgHVQWtS4Cy6LEtEBUneEKvXUNcC",
  "key35": "3P9eydEPTWsujRT1m9sHMuZKx8yfqLCTgx9yaF2J2f4yfAyCXTWiZCPMcuZSYuu5o4pGLyW8WQW3ArYjPB1um9Ah",
  "key36": "5uDrEokgQKC7Dn4LNRiJD9ZfkHM56txcN6AzvxMWAiJmNBK9rmk1nWCiueDmN11xHdGpcRkXqKc52yhRCa9YHgSw",
  "key37": "53vbgzrsHVF1UmAKMQm3NEBePf5rHBiSDAf4e87LBhkRFGjjvrpiZSMeJfTWkAZNstFk2nTuQvCJXaHsXaVGxCFN",
  "key38": "5s48K4ZEV5BYe1oHch8Cf2jTDZMoPFCgFjKkVocqmWt3ZPcPsxUgXeRLKCawxZ98r2Y2TiXUb1TU8qLBdKMcYegg",
  "key39": "4LrDUhs1WZKbAxJSWSVD4kXy42RkcWNFxf5zguRrpqmif4jFr8dF3itSkCtk3o1FHfqBntGSYgg5SJ2n4Aen3LyP",
  "key40": "JK4Y9qDQvbki7hpzsRaY9puY7ntc5CNPRUmgJuqEBp1EiuZTtj2pwStz5WVpXsap3dbtxEDQG7qBvrmqPdp6yPP"
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
