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
    "28BZtAJDhU18woZmUGRfCDFHq7SbHw9VQDYcfoLysn6wkrC93k5rwoViyek2cW2vbGYDLo3Ui4Utq5QWdaxa4DXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BLK857gbq8D37J3RTZaQrQrP4DTUUi1yXLHaSsY6PUEWB2GuXMAgaGZtYZrthMHin1s4tas4C57qqx7W91iNxxi",
  "key1": "2iAFc2R6cMjoCmRSjueJjmoEKoP22HTsKiKrnrn4ZN2uwwXStosrrypF2vc7ey4jJj21RVRXyxnMKDCvuyQ1ekJe",
  "key2": "4pptftMjQ5LWCE9VeWKTArNYF8Zao5CJfedHd5zL8W5Dw5NAv3HaRkeiCDf1Tt67BhtHYpWrCVvfn7ve8aUDqT4B",
  "key3": "CHc7Tc877EteFu7kts3dkAcpfz696nJfpS8qHjtamdezEdbtg3XrFPo6NcPqgww3B8aWc3Sh6bRux3KVv1Cmzcf",
  "key4": "3vvbbxN6RUcPM52DSP9z7WRZQsop3E6AdTuGyewio4tciQhgJFxmESrTCt3PofUbwYiHbx9P1q2QTN7uR7mzNus4",
  "key5": "2JnXQbKC1QxG8Bxk7NwfzRz2rHdX3bHpVCCDiSYFLu9rH3B8DpxaWZjUfSBEnfNv4VaaDWHDmQfzaCeuNxTLQB9Z",
  "key6": "349NDgJWotyAm2zMiqMBTQ6mfUMXkTfKY45DFa9tybGeN3dqnnCZKP8GAmCMnB9LgVQrUq2UTX4461EswWnJMG5q",
  "key7": "26zFi6e5ydgRx7ZXkTWd6vFtCFSPs4HK9ygCymki15eLTZt1zyu8jZzapr97ERWHewUsrmo8NfcaunFWGx7iFaVr",
  "key8": "3ExBoNswRpQr7XCAfrgzQ3UA6o84T2sdbTedSZ1yCWShBon9UZReahBuSAD8ANcGXtU5chMCoAbXYFy3vXQyWKvU",
  "key9": "58b1h42FNeEQ18hK9s5gUZPpBdWfuBaBXWLtHovcYYfw3WkZt2LFd48qVJAsbd5a5NUmEBMvrFcnvkBoNDVkEXxC",
  "key10": "VzS8TLsjSUgUEBA6L1kwUPVyBJhJuueGFh7tDkb4XfxLgUSTHwD3BrrjhdHFB4MDYNSmvXo1p8A6rgkKGfxPhDN",
  "key11": "3A9xfPJwLNpNrsuBiLbydLKqXQ3xUY4q1m5gqFVLh1JCJsYvP2JjSmicKqFQUznbYr27HjM8Urffg1oY6nU4hmYM",
  "key12": "3iMofAPQWEdTeVkbf3Lwu8ijR2Yu9bHxgZGGYnxwvKUEvnw4YqqcoDNWWSYtXMaM6NsRyFJ4mH75Fex44xom3EU8",
  "key13": "4Mp975nn4gejtuNNyRHwdYpUUaXXaozmeFp4SXLUPqk17WmXCunfpQ2RtfBAvqg7nsMhkWeiUFAfKxUL5Httio3",
  "key14": "5e5paspWxgFsxw4QWg7QxBDAn9CpmLwtDB8C2s9SQdcBuyp83ntcrvaDSkPqDnULkT9axUPW7mfdeCkaP1fPrTRM",
  "key15": "3dsD9bJK82fzoayKXPa5SbT3XUQcjBQ6NH6wdDKpWGuuuJawcMLRuSAmZNeB5ejKDjjcvgujQs3TwaqreA5dwpTk",
  "key16": "KUGbanGvZcYueVK1jF244HfNGLR98XeK12RmWEJRFVmpqXWQS1JeNEQqnn3juVaBhmToh86ZWcMpyLn2MJBd8o4",
  "key17": "PFHJSfymPc2w1MRQjejKpSZqsLRZnmTop4dzoNP8STP5JuF4iM6ibtVJ7NkSNLfH9HC3aKhDfTHxSEmW8Xz48Y3",
  "key18": "2saYsY6AJYg9g8zVhTaxMxz16ujV382DQrLj13xPaAhZ6pFnMswmH2Pa3yz2YuGZyXNXEZ2jLZPngUszfHYPNFtk",
  "key19": "4bRpVkorXJTLuTzFwDMxqBsVNGFm8hppv5U3cXne9TC9mME11fUnvgCd1pwhbF3bZduWHfnyY8KpZX6WBSQXASy",
  "key20": "5kPbrtR16oREvtuJevwPvmMZG3NYE8XamCSHQLqZBcHy4LuszEV7j5oLrMgJ6cXv2XfPB83j3zdwo5JpHqsjUDgK",
  "key21": "4futtiBM2LaYrngBf6sEAWsNS35GY1uy8yC7ygyF8XhcAXr5ZaSFNu8qrp5RHJ6pMXZo4vWfTHCNK3DUfdyoV9cj",
  "key22": "39XgSueEtn9mWcWSNQxUFJYyfYmBnKz1eb5Za5txTJZsLDWAQePB4a3HyWAgBK8Mi1fxvywoboTLHDmn7skwCXmF",
  "key23": "4cRPEFfs88zbPVNG2aGScXT2hEn1AfghYBcmsCUMCPL3U2FuiD6kqefDbz77ZNzUwLAcrwptN2ZUgrzKqsBuFgpq",
  "key24": "5SBPo2CVoPix665Xr7tiayrpUVegDNUX6gGCyiL3nQmSiSkPBjFFHar9iDCweGSBRGYXgyzTT9cuPWvK37WZfTeZ",
  "key25": "3WypFMJK9s435ut2airbweQmtCwpSnpt5BzPV3v7Y9HDW9RAKE6kvVJQj5G3Ke1TijPgm5diyZdQnS9Xhh15John",
  "key26": "5zcip3aB5hJkGj9MbhqhLo4aSPk7K7qUEaCnJxTjmyKvt1qik6PGdmdn7EgmXVr733tWUDnFwaxwmLhb4M8nAZDz",
  "key27": "3tEE9DieLNrFxRdJJdvSWtv1fPhuLu9eerJ5azjQ6tf3knopfBpUFmr1CPNm1uNvXdT81yueAcYeaQY1H4sJtxv1",
  "key28": "2xfNegS17PLVmUxrUAU1u3nm9J5mbF8d7cXhCBM2nQsdyCJsjw139CeqTtx99gHSY4ZaHU3A9dfo5PUttKbXc9LB",
  "key29": "3xvs4QfzEWCB7Eiuvo4jY3LrMJjN1bdUC3BpiSuXhPdx5eL9ATvLqWWmju9Yw5L7AWPzWaF38rXNN7DNTS8xMKnY",
  "key30": "3tNaQd2gkMmVLoc1faiNxwRbWDM6VnnpAvhopCqTp5KxB7EyroYXGNNVQS4mtrR3eXXrC22TSvJckEJm2zWpGASD",
  "key31": "3mKRvz6G1vNTW3cYTuojZh3CxUGkcTb7Xgxi21cGCpoq34r8849jNEbyTBSXQctmsoGLbBM8mCYsRusuGi1KEN7t",
  "key32": "AjZ3UjafnKCDQGb4KuZQKP1ehNaLctBs9LLqeNN8wrzK139HP65bF6MGzj1tw7SUR8ubAUksSgNvxb9Gm9vM6U9",
  "key33": "KnaqfuY7Gupwg9SF6WZYpK6J5dp5o27JUE9BYrus2sJoAci1CD3r84qwaHnYyiygTjwmCWnoouKUjw7yETxYo75"
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
