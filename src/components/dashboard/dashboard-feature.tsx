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
    "3ma2fCRK8YXW6JUwddDbwDmezCxn9fUDf2wxcxp3k4TaQ2obdX28pj7oRTE63RKmUMk9rJKSNuNtM3gP8jyTF4CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33UY1XSGKPDMGnK4quwqXtpASwCf3hF2smc9uoJasnaeDEMtsXjDWTUs8d4SwJ7dXi498FQ9EQxAvTXCWRKSRrgZ",
  "key1": "5kwdZKaz3nYy1E1wqadSUxhtCFoH1zk1Q7QzZYAGWa29ZafK2vKa4pQMPLmGD4ugiy6J3Aq8x275hkCbEpDQzz1B",
  "key2": "3caAQPdUCsEY9RaVNZvsFWgxcuF4VCzNes44LeWUDiZf2U9quuqe3VeSoT3wpiDowLknZ4s6iuKDTRR5HsVpxyzo",
  "key3": "3piypXcU4SvYkAuTqyXqd2JcESVodqAjjw2RZqpMpBDtJ4Aagx8npyTZj8vUD1MfBgE6ua3skh9Yu9y9nkNAuTFx",
  "key4": "44EhyQb3cNHrtuRU4kFonUCk56tnKMzcYgs7eSibJWv61ExPJwaxbPYPU81n5hMwor6uLXEjgvNZvem3bbVR3RWC",
  "key5": "3Z3qyd9CfoYGVMbhNVXqi65Ez2YwRUXcLAEnXt8zKjD1zfpn7auh3dj42QSzFhAHAvjk2kKd43oSpcYGQHqhh2bj",
  "key6": "5Be794ZqpjULw4qxLJbuQSMuhKAbaJg31u9exLtW9GBM4JEiBoue8yBN6j6TJ2qmDR47D7HPYmHSwC3H5xJKCfXx",
  "key7": "2R5qq1zqcNhfmzhhRsrgDNYvbEydF4mEE6rEFCdRvPqunyWBcMk2HRbiqdujB54cbiiArbPsgM6kgu5LEPxGQwKh",
  "key8": "4gVpxNhP1zcpnMz9rYeydvpRnSTyRFhDBNbHC2dzLZ1BvFsieiA2WwNg4e3NRVhGgLReqsDKGQjVxphKUVQaz6C6",
  "key9": "2DC5FZNa6cfuarBZpuQ4Q4AwdbTpgUFiNB6x4Gdhbfjz3rQiHvsVJmJUUjhrb4xjrTnCEcvWweb9N12NHov7aXeS",
  "key10": "2bJ3v43vf2CDjAZHoJjU6pNSaTTvH3o98JJ2bfZGqmdbiMPvmrbhCZVjVqhxDjjfsvpd3pGAeA9y5ZNDknyyW5Py",
  "key11": "AE5vQmmFh2MJJVcduFcSEJsgqBTN8ZXRVFVputxnSrMapGqk4RXW8aQW4Puo13V89mSBUNfNfndpJj3wDRXrwmw",
  "key12": "4aD3pJbD3CQB6wFYfLQDCGcNjsG1K5Qm8fxYVzucjz9yBLAMcjhWYf6kecpbqqan768HG6cXSXpuTbPNbhxq4mTq",
  "key13": "2fsmr3F1YZvQdcHBDQDo4todJjuHHoEEHJBN1Z11UiUBLbiT1NQ3SQTsuHg9KVGJGwwEa6KXCaw2Zej774kFS9Q8",
  "key14": "5FLonb8pzSDQ2LtwqfqWRthU9U5RYDUYQ4wvV9S3A8JNVLDU8PW12m4LPSw9FrsT8eLZtx3Q5Lwg6nSNSt3GRUFS",
  "key15": "65VtcgJkuCUkMBUpFBNFH7qh1WPZqnkuyecowcWVVTD63Dm4SxtG2qysUG43EceNTH37MKcPL4B7y5rQAFygYAG6",
  "key16": "37ZTNCK78qa8yfFUeKU3SQgCoEw69jirVaP7kdoVQqcZZ4eLoimjafQ3W6C1HKMahfNuptPbczJpqkaJNAFr3maq",
  "key17": "qZdZYXzYCcVJfAnb5wK5xe5xeo1i1xNJmTncfsLHJtajnLFxb7jqspKMPCqjQHB6wmVt9oCQ6enrHEkx4Ay95mF",
  "key18": "WLqiRmy8RJHbC9zvJLXC37V13Mp2GKrNtLs72ar3A6zdWRELEazEGghw6itYhhmscg3zEw9C7vHguSMNMC6CJSo",
  "key19": "4t3nc4pmnV4FrxjkmYekzyXwetbMQyvMJCqNmGDwgM3aREN3w5oRj4CycTMFS5bvKSX9cgLx1oxA1YwsADNb3inH",
  "key20": "2gaHC5yA3DzL2kNQvad61HeZYPDHJhzWi15UHURg5NfLAwbB7nHoeCrko7u1wiuAkJMWjsNeJqe8wcxPEpL7YEaU",
  "key21": "35JCdx4UpAJJbHddxs3oiEDf1bqVQKXjPXY98weK6TPsrBjiNNaNH4Go8RpSJkYTjo1rP3jokdus6Bubpa3bqupz",
  "key22": "2zcbq1fPNNXiwpPENjoXvsYdr9zcSasriMPmk5QHNPuVsUJDA3bnZftAbs5ASE2SvVRnZAv9Pr3z7BLVTfPAGdWG",
  "key23": "cnrsxxd1egLjASumeirtzRy9eBRmEUcRVtUhmdXwNbyZ6oqhPnEFUYBu7qjD7J22L1xage1MMkGxrWcdcR29uHn",
  "key24": "33rX1bQyoNVp98J7aPy85hyuctHFQ2KJPUwDFJNDmYM9QdGWKwSXMCn8XmBTZNsYR2DU7b993ynYW5pGfPfyLar1",
  "key25": "5yUypGgnzCjEKdkqTGks5W9wzGeRfTN56VXUepuaRAcX9kHC9rv5ENKe85v1FtCMybFvNaaDh1H6usURnpQ7EU1W",
  "key26": "4TNf9vvJzamS4wxykESBAZt1fVKqXLeZyctfsyN9MmXYJxRMAdwaUvUeVizTzAEpeUsCTqe5p39cEQnVhwkMMQiH",
  "key27": "kX6rsBN8uvUTMSDGvpXRvtaUfpQghcepr3RshX1yZFqWSceT7acYb45Gjwkf9UYCbfRjdi9hZcFZWLEJtg3KqRK",
  "key28": "64CaTNFEAzwsJTMhhAA9jctjLvB4WdMa54wuQYnLsHBmXWLaGL988DN87jpac2zVMGFpBLpwQuZbaR7vjcE5kaiM",
  "key29": "5NqMfPaq4AQoDeo8Sd6pDJd7dZ4bmuTWeZ4mxvXhiqkq7EaycobF4bdpgbd14FV6s2d7pF6rJzFRvnNGa4recHtB",
  "key30": "5YymGdU7SHTxpQrxVFRFEWUry3bSBxZrRFyj613kkLfnuJbodzUdveKK9TAF5477JmcLU5NTpHDpanG6PQULoVM5",
  "key31": "4hS6xJuoC8JPwfE5aTR49wPY53vFNibLYamLYJNTZYdbRpkU5xeZ4b5VRq7JeHHHfpgCbDdXQKjV82BPN8nBaSMG",
  "key32": "5GQmZ4qg6jWvT4dWSnCGQEztnWmGjJw9az8jKSkaPqp3faojBm8a9XYszmiP1Y5L8mWxwpE3mW49VNJ7842o7xoo",
  "key33": "4hbj9SHpYMQmEULpCy1utr5pbTY7hXedzsP1iyStu2Sr341ET9BG81XvoSwJJXFF8fE7MmhoSfsLX4Ab3x2tp7X3",
  "key34": "2VLvm3Gf2M3WjM8TxLSAbsdw3PwYiPLLryob7ZjZxzXq7iUeYnVquus3A7nEdLjhrutBepcGcfKYYxwvS4RRToHS",
  "key35": "ZUFFUh6w2oMyhhdVYFr8FG3tRznFmgDM5VLypnwJXxsU3HpzhvBhCzj6A3ghpEqk5vMLajjjGPqxtpzaJqsS5bT",
  "key36": "5ebTeYRfdeDm2X5xebD1EJrrmLErAt76qkSqU8nKrx2Bwjv2Qo7UffWWgrJxWBJTmoLEMwnoywYob1vRgtBxbLqu",
  "key37": "53A8Eh4PB2yyM1h2ykeKQhMhbYXm9KxkQ7CLJL4eRg56vaupkQVCP9ifUUw7gwuzrcGiJfhWLHBGvLLfQ8NVfnez",
  "key38": "G5iWXRsWNYRhNhdw9r54inaWb8Js7HHUaLckxMUH39Bz1A2VtSz5n5hwNZtW7w2KTjEKwtXra6X9r121CSE5b45",
  "key39": "2VDJxX6otthf1eriSESA83t3xzmAuZrTQ7bwM8h74g14hTKbCJ4n99387xWeyFzzzQNCknoZPD47wUFADyFWVtB1",
  "key40": "ZvVfrR7Y84Hd2vNh3Zd4sQAmNdhoeJrGFDTvvKtd3XUPbQgF39y4F3bW3itn32tBBmSJvQmh6WhzgVVL8QY7pLs",
  "key41": "4buFpnY2aRYttLc13sP9ehByVam4tjaeHiN7DDcYEywAQa6evsBqwnb1tzj6ftufehWkUgF8Qe1GvBzqRs1NhaBv",
  "key42": "5Zvsk9456zSzcNdZoSJmLBw5C1ZxjF1cmpygNnnWq93pSxmdA5431qWYYj1Vr9yDu6LB8XE9TYFfTw527XpvmGM",
  "key43": "2bkyL5mHq7RSYiB2z6DtqJs6z4LKNGwzMnPzizD97UCwboCh9AfwJAq1JrHNi5p84jieWMLBW4zB2kvcoNqqgVrR",
  "key44": "5AA3fLjoJuWeviRWgWztQcuewVKzAA4yALWoS9WUKUipuaLfzLoqStYggWo8mb7Wu5mJjbQTsYNk2G3uXhYtLXVW",
  "key45": "4TfbEmod5LVMCgDzYQkKG3a5jzM17v65kWhB2ypFsFBCuFA87ozJEqt5qzHwcWKrofEtrEAEcbzKM3feAoP2raJx"
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
