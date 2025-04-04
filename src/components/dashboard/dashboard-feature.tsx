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
    "4QePW4uozbJU5pfCyYqFdv2jZ6CjxNEGTeJmkHPgKdLsEub6cdAix47QBUNqrUyXbJkbgwzUTs7LqRUKwEN2quju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vTr4KoGLgTwbsXCu3VCeonCXovBfmyhGGTzFRqSPt5FyMPFZrE5fGgtzXYgsNngH5yNHmXFC5zmDKNimP8bGFHe",
  "key1": "SAYJaDo8rLkdocD5yzDP28EfMfpPjxMzLG8Axdjo9RbR417496Q1HqbN5Y8AEm2wcBfYwZydXjNyxGqzpFvnHwm",
  "key2": "2EnxG12pMZbfEytBuyeyK5T84tec33u4UcSa2PEZpLwBNh9ykkthaNk1uKRCQd5h1WZgp2iqmpN7uWz2c15Zh6zk",
  "key3": "4XaTdWgvoFfGa6XmtoLEFQfwGH4T5Po4Qo5518FzGWuLu7prktjCZr3wWsQbcYxmCouDfXJJq9g8QE1ctu541zQD",
  "key4": "4RDNy5ighVEJnMp5hRzZLTPqtBc6TzvZAvtX4izyanz3Z3pWk6GKKhcSahePMKEV5MwLys2w3WicGkZjQcyPXddj",
  "key5": "22x76gPXspUATpK8h6CgJUW2ErppiBKgEvLbzQuahAfDUCgjFVooL7vJqkrktQekiL3xm6xMfdLzwh2zNju9B2bn",
  "key6": "44cmpAtMC8eMPDKNt4BdQxCuxthRWeT3siBzyeqVFNSuTVpLMo9H4jRq9a9Go6KhzNzEzrRhBYxCoVnMxepqqTTp",
  "key7": "54t3NXeji6EMKkYG9PGymKNL5TpXRxxhiTq2CPo6VUnuHaSMeXX2PCVqR2AhLzdCaHAG1r7vGAYxiv5TBu49nv7L",
  "key8": "2ioiwynC4d2W2yxhEJtEn9Hur2ukmBh92iKjc2GFQ5c8YbeEbfPUKJ7pbfZNPGQooAxptPBxErKPjx9quHNrJTkz",
  "key9": "4vPp1ghx6zQyD7VzyyWcSUAFDJT9tDzsyejfqMzZJLbsXe3UAVEfX8wVkTxNSQVeEgsCf9F8DLCjwXPqEAjg7Psv",
  "key10": "3BRo4kwbiGHjQu3GBWtC8wcsAZjVXFcJJpuUopHLe4cJcgVwdkw55TPAmU2LXgm6me1fV8caREtoupdSXkNemomw",
  "key11": "26jCZJMaW3JT7zMUkpyfgprpPYCB5xs14MQ3SJqpdyNKbsbdyUmC2de8aSbu1PdyBb9FBsRhX8k9T7HaPwtLf6kr",
  "key12": "7cQvYQLBcqHewAuYw7Kn1TBLUthWzhRy4YCwS6vQ4FcVmDFDr63b2D3RzzcqmbFoJ9By8uoNCYXD1VGzjwQUDRw",
  "key13": "2FhZzaX5Ypgmz7vBzQ5hGmNdJne9NCWMj2Wuj2sA63JwmbpnnDpACnfEojK45Y8GV3qfhpkaP6z6bybujw7HCirX",
  "key14": "4CT8RNTEAkBCaW2jyJzBjW3p7PZnR5D4bWvG1F97kMqZ7eFPZM64AZDT74NMJckT5qnnAAxjtujuKaNtXKps78Xe",
  "key15": "5WfJVLghoGD5iBPxkGfCAMYv8x3b5ZPULgv2ARhwo9GzpLcHfnz7pEfyr8QDfBkCw37D6pydiiagcuMiecnM7vcW",
  "key16": "3D3vMuACUNnus3fLZrhgDe4nBXsVbr7vTUqwD54dKdSy27cgVMQKvMxJrqenZwdCgjMjwPq2TwJMafSzz4Nv6KB8",
  "key17": "5uhpRZ8CN4HELj37bYZshkQTn22ZuFygQbRfi8Eo6sGvHruKf24euu2PqDXHvsb1yWMRmb9a81Wv9MqMBk4xGTVK",
  "key18": "3YNwmTcE8NMzwXjThyNEF8rRtVcjT24qfWMR5wmCSn74CNYMKBGrGqK99LGQ6KHVYpZbTLrtJjrm7ErRFmS7uPxG",
  "key19": "2ePMsQgC5owhmVjs8GtMRd6RMUTkoa7Rfwr2oVfRNvURCMUWg6hSyjNoC8N7RbDjhgUYDCtz4p657WN2CGFm72Th",
  "key20": "3AZv38PuiBLRDVU2Av6Pyfq9sU1rRoG6etucQjcMRQwscSRwaJFPfp1zpH6XV1MSUka6Bbmg655CAmGMyb4sRMu1",
  "key21": "Ng9CH9U9TXsK2fVmVsNjWhNMR3SbH8U2ttNxAdGzy3kJVKEuye358RDWieodEpXizrVAegje5XtRZDL6LE3ycs2",
  "key22": "2JqsQcywrDYPQoo9t9FR1puyZhTyKm44X6pUBAZuqCDFCsYUJSwqCG4FL5YEfnqm4FrzCLnWfm1MiwyQywpUNGpM",
  "key23": "5UU8ygrA9toNZGGc2TkSCf68KrU61mvtG3i5YqjkTdR5eQDLdwBeqfCeE5VETjykFw7nFMS4nLcNtcKPongaAgR2",
  "key24": "3kfJrZKwETC3A7UkTVjXQhHC7o5vsj1ti6gUSVzLfgXVY7AtANTDGEoRv63dEpc3gxxazouW4semGxFb39pwxZSL",
  "key25": "2rvjk9Da2cfSWTpFDgfGYvJ5ELjQqc6tkkH1bpbfYzoTnyzYMRrP297Bh5BiKoJ1P7AiUTSaiZLkwu23xNQM97aY",
  "key26": "2oqh6BL8Zre1xs9yqSu1KtXh6ZNwhFVe9RyJLzejsb79e2PEUwNb4jXBGhRPCpCh4BSV1oS3krzQfRd9hYFeFBmW",
  "key27": "4CJaQYNQguz28spGhDJFwqNxWYac4yJZebexfDiBkG6ngWsfKZzawhY6vRgEQ2QtF29nYQ4tiSdP5SbxpA6kzbmo",
  "key28": "cePZTiaPdwY7pZs1UKLBMRN6zRVf6XHGB4n4EUAGiacz44qsRqPpb2CpbpQgY4Syy9DjXxxKBYxYbasFaoskQpp",
  "key29": "5m358JGj7BGMi64a6N9JzwGDYTDsmKeTgkftmBh9dTzdkvYsu636MmfmpFdrDAGodfJ8Jv5Bz8MJwYk4zAaCVdFx",
  "key30": "3M48fwuoyEgSua5Zhy2xF3dX1oBzq1UnyABn5ZGcRyqniyc2Ueeeq7V1CpAVCighBNbWzR1dKYdiaveU6Q7shWDN",
  "key31": "5rnYa4sVSY3JteXV8ksqWYuEAYQiyJicHV5w57sNNRdBZmAehfE4zLHCoVoMKsmVavDgDcRXRyRzkod3tTamfQJP",
  "key32": "58jGgoWqecwBjzFQP8SJwXUYCo8QBwsVW9N4JmDvsm5qUXL1nfDRTqkcKUxFf7oTNKJbtn2EuPA3StFQSdFmuP8h",
  "key33": "4NgbNaDgeCbMJeNwmmmsfqxeDjHcEeSeBTHdi9p658543EtsyPNwxPckindeawKy75WTjkJSMvJeV1sWSmDjBQhm",
  "key34": "5gy4KtjdfehsEjwTGsuinz4ZagEmM4SWsdM7x8evwExHbnNrRd3BiM5Ug1d5HgT9AdV1Qg1AV2X2LQT3tdnAfbZi",
  "key35": "3WzVDEB7kY5rUSgKVpHjPkTjWEtb7NZZiWPHqt8yKvnX4DUaNWZRQtnqfXjR2fCoxufbtrpShaHigQYnwLm5HeDB"
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
