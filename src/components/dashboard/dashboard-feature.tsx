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
    "f2RYErWoDp35MwRRVBaTD9Q7H4NbAe3jGjEZDbkoCnGJHMSdNEKXakLfdHteyKFbbn8dLdCmasKca6EXTbuBShK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RbqK5buehYn2SrLTThgWAQTmmJ5Lci316ZtEMRdsM5qUpc2cm3CbFzQ3cPvEzUWYqGzEp8WwjD5wfrWpyLnALLE",
  "key1": "2TJVASZjghgkYRPfXbT8K6ZFDdwqqzXMyp27JH8Uqypi7NDpSgEEaZVcLrBfgMGnYLXZ9FEPugJEwGdjEAeD3Zpi",
  "key2": "2xhicFCvarrcCNmmWLDSo2fEb7S8JJJuZWZQMd9vXLvX2wAvj2HDnnu3K838krYGz9gh6vY79MCthPVZ2XyWG9qy",
  "key3": "7WKsF8149KkfMgdvwX47MbSQZbdqvJMVZGupPxHpTwuSSCYat7Z1o3jPJzM5BgSBhT7hijMgxQdDRcwGzhKXF4a",
  "key4": "5gotEAANK2yrrkJAvhKWaSBPXc3pRAgUScmEuNigFq9S5oybQKSRaPevXvxsBhM54jx71DNMaNGTQeVLCbcBj6g3",
  "key5": "9xHkit1Q9vaREBD6N3BPbMiumbEyoyWpcq64cRJQ2AcsoqDNDSUbsQyesRwuGC1hGRh7CaW7tShH1Q8amKP9kfP",
  "key6": "43X1AdvGR57W6zZHhUcmmNZwq2D7Ww2k55x8UyWKp8HKRWRKo1ALsXZ37ckffzCefXsvb4KJSaBKLtJ2pm1oQ2mB",
  "key7": "Fi1Cikbynwmm2iQibK7Q3DNwTLU1oFGRYiTFLu25a89BanxiRJgdHGwHckgDyaD8gjmeyrgs6dbLN4aM8nLbcDL",
  "key8": "3mR4B6UXeLCruvLpK33oEhkByUajQMVj9baK2cKgo9wbCGiCNxPCihGP6Xi3eqAdHEPYnwzrtW9JBvqF5aBdvm91",
  "key9": "5N8pspVNYhiDtNeeeYYef5V7yoRDFCmnerv2FyjuhxXZSjr6fzDnRxZccyJ9FfNEyyb4rLq2LsWmJqMHTeJpf9X3",
  "key10": "5jCFBstwR7ydCDGevaMQstgiVmmMebezLus6xMKZD4oyVF5Yg1UnpbRR7Uhd7v2GxECbw15uQv8NYm35wNyZ96Ds",
  "key11": "2i22fE68HqM1YjPp87ipRBJkBTNsA4oUuMtXDxSQsYK6UQCNwcdcQRQ5aVbWFUvMPwXhn2hhkcojJ8YuEbFQ23Lh",
  "key12": "2VjGqVknmAkBWLbEg6CVprKqymzVfnLsZTDWLUvKPm2U3Pbp3cfrjia3T9pFK8phCovp7ZuAMr2fQ1U4XEYbwh8K",
  "key13": "2Mi9grWJ5cBNo1ZZuSYXHWzD2qy81uoSTHyRybHun3Vquz4Wa94NwsHGkHk8RwJZp86DGdGasTAxaetwzacd3q8m",
  "key14": "4otmehMwdeUaWFAh3ZVH6BTNoXZHahk7xoVor13nL88WxyVKDKr26sCkBxsbREYwe7nShS53Mzae2cXyLsp85LjM",
  "key15": "4fx4qVJkpHu88tV8HiLjHmSZjg91GdvN34Df3Rbe6WSG8wfeqLBxZzq2vMuiCJtpDaXk9vB5ZLrCSgfEzWbZn2jy",
  "key16": "5xm6EuAG9C1i51cTH5u9Rev8Pmiedvh294zPMvQmp1Gww4L5svZ6Z4X1oyPfM6EJTnT1dKYkQRBWJK9QPeNqJ6rD",
  "key17": "5xRhKYwD34bqq3M44bYAxXQrX4R96eognCVgZ9tXuTSzWS7yMzPAuAG1zQjqF8Qf2GDtXj6zmcPPKv7GwiRYfQZN",
  "key18": "2xmmQjDKBnmAJM7a5SX7vTHf2iTpPAga6HdwHNsWf14KrjNPar5TbHkXUe7Q9nQHABwaTsYGR3MtHQJQXv1tZCFe",
  "key19": "4eTobY1gBMFXbwhWGru8dVDM77nZsfvj8JuuE5nYJRMAgy5gN5PdsM2fkhYapoxMjJzHkas7wC2VvMc8rnXgS67Y",
  "key20": "3HdWT2dLhscpdJuKmr29jWnQzDgatgZri6WDSxHYVjv8s4sssSaKFaU7YCJfascV4tbp4bXikUqRAMd8h3ofpqh4",
  "key21": "2YtcYVTkCqCcj7MQ9yXi613QXB8adJNS37sbSvHAHufeSKVKtycbegbtu3CCrvkPvkQ53A6Cv3mdan84DjWf9x2f",
  "key22": "VW19RCshQEMsGtj9YshupcA3rprvnmR7shgdbN4aeHCq4SnF2Zxx3PDq4X6ZMfTmpk392HWvXhur5bxvdTmZQgz",
  "key23": "5Hu7ikpPvLTctYDu4sUtm4p75kozBDiorAXsACEUBhv4eSSL5mh57ZY6vhMSz2mEn5zvsxLq645PMmmr755Tz7t8",
  "key24": "5gFzbxvqTf29qscSFWkrqkgMf9DwgRKuafnh3gz2H46aCCCBUgp8juBMLpdjjD5exru6hUnyZJKNLetrbYhmb8sS",
  "key25": "2td28Y26vL9xDVRAy2PC7UgXJbpsHCNJPGooHwLC7BDAeDYR4f69Qyo88sK2ZSSXtbMYGyvjM8EgNpjmTH3uUhen",
  "key26": "56asacx2udz5t2QwTgbk6gY3eixtwZSUcUWYv3tMSmFJwtm9ZctiUe8XVeiNgoFPYQRfLz8rFHqvaGM9xj4SFgFR",
  "key27": "3iWMt51JXJp5D9XPhupj5WWPgos3aPAWhVYkgTE2rgmAmAcPzwV2kAPtnaHSAmAKdzD8GxghRRswva1nMbuSp7ri",
  "key28": "5wr4at8zfoc2SGN4W7P3ECBGoddLxMToHDigvtKFZHbC8pmCQfUuPhQMFqNVcMLobomLASbcJNGkctyrXF1zpdmA"
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
