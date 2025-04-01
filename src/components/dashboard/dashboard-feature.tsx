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
    "3jTUCxsJAaFe18RZS11h1MTjPjD9N6rRvSHZGXxbNmhCwhkWAbitRpKhiS68KGjVt1igASpbQemdeW1CgAETsEFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y4pP4Xt8KyTmHubB9rSABUv7Vxan99yE7AxuTQ19bTNGw75nrLcpeMzMhxFtLYEhyb1pDoavBEYw58MTRUMdxPR",
  "key1": "5x6Q2mfqid2M8hQPnLokLyMskzMEpcTLWK78svNM4WAs7GT37VXbvf5sVWhsgvyhHbNfVLQJ7tNF8Mm6Lfg61u23",
  "key2": "5tX2GjXGARyya51uYAwnypGu87UFcLGKDnZwnGtbrFn6LCmyEdebfXKxspcntvifSwUW6dhaVZrUSmbm2uPVg2Fd",
  "key3": "4M1Kt323WZckhoBbnGp2MNQxW5eCh3wSGcpjdYdeNQ4ss3ijisiFGnRfC2oFWKaniUULCXu757Edjd8Grxpat6LJ",
  "key4": "3xUUYJRbFfFGaJtffTrtgiHNJ94F7cjKeapcW36kSvHteWz5bZd1dp9KVGDbvmfYfLgD98txUsGNtKoxfXx2i3F3",
  "key5": "2mTB844SAvRS62JsDqboXdU13yDFpJkr6DoTzLECdfterKDuvKdZ3GDBQnk6JZ1QAy1FMme3YEtMHcPFi86CrbaE",
  "key6": "5MoRXbt1rJGXeiiGEXmvqn4zdBwherHFsSm8QGUaCHMKbuwP4K3hMZVe86ioXZRYaHSkvoyVtM42gJ8Q4pgBLYhM",
  "key7": "633dA8tGCKV9HQopE4NgZPTLU6LxX6xHNcEZPaJqig5zgHX4BSCBE4sHXup6HZ6W9TKTAH5Mim8zPJdwWxfKs6QS",
  "key8": "28npZ8amgNw1AbanCfZ3fE4Shkvunx8AtuvF2wxTPiUB7cmr4vbY2utZg3aXQTLreRBXeYZEdDidLhHJ4iakomMv",
  "key9": "5FSQxnnHN4q3jAg4i3YFMKi1Tk9yPSBHQMDzMk9vzhCABhJWkJBS55T4xNBvh5jaBUjyXA5Uho3Wn3VvFPpBFCaM",
  "key10": "4ELJsV9FhiQfhAU3N1xAxuWkgDY3w7wwgRcLTuXbwDw5iE7bMLhKPKx59PfjXv1HzFWhuph5Af8MhWdkEs4ggg2X",
  "key11": "4nfLUfaedhkQrUVjgRZRbjA39XE2AbPMFgdnVgk2oNjBHjFMjrMHxRaVXdkHiTUWEdDxHpskVEVSdPLd2cJAPepz",
  "key12": "5Fs3fEXpQkkFELjrMm3HdmzA9T6URpyxgng6yXcndCDeVrhmLNgfVw8t4MJwfhh9UVBfeqLMA4VtcBBGdKzS2fKP",
  "key13": "dYka7tfHMhAQGWps3EAMAC2N9j9DSp63owLZDBvTwWgNsYRR1UiS68SS1eKCEPRzsC2wkVS5SXkibxzzpHnJjxf",
  "key14": "4HpeYxq3Veascu1p5cQczfTueumU2pJYUgAS1eVSchNBVU8z3QFP86YBz4PwNmEDx9b55m5JpsZBadpwTeTdTmoq",
  "key15": "3BgtjD2pa62317jLsbBHfRfBgPHMsokXPJaK6xZ1zorU2G77Fxt13A2fFUcuegJ2XDx19WN8PVSQCyA6CrMbMZtv",
  "key16": "2zTBBfqiKExdEBQoEmrSd9wz14CZxryosr6ToACjvqrnZECcxwVTR61iJGQXeNZvxBVZrDqhKdqoHqB9SwEFAxWV",
  "key17": "5Nhgo62JDKbHMsVuYk5Ms3NAKmTp6MXH3ADoW17GWAHkRfeqKXgEz45dpEcdAUHTDiR1sAptt1wni41eZrQiiW7o",
  "key18": "UWjnnaQ2nePnx5KSQd15aBbWXyMde1njyX5K5yTEtDGEzqZMkapYhjBVDF1LP2KgXrWhEDX9jr7aAAigYS6JUby",
  "key19": "jQzTV7pfdHHMHAnnK6FjdXMFM82BgqKm6JW7NNEJqWTwLJZfNYRPA9QA5JUGpMWXBSeAg4MQKfsqC3FbTXht9VL",
  "key20": "64R2rjKh73x2ofE2P4AKk37cXiskEiKNMxCC9ZhWPjz5uRjGF2iGfxSoHDSM2pQyrF3Ys2EpF558o3j55E2Vb8rV",
  "key21": "3C1A2Nc62nKnvMTbBX6vVLJV4iQJrN9YsBZwDYxXgpesVXQ6R7LAipVPxHYUD2gSwnMidGWdYiLfar3qCa6tgCVg",
  "key22": "48vtyt8cK5Kcr1wz2ogkUZAWDEUN1eeqivH7ZqCohpH1htt5QGytMsCXT6ZpHkRu3jmQ4NmegE1BEU6XoJj8AoTQ",
  "key23": "3MoyHiSqkxhsvrWUszpMCgaZoB8s8PJujTHydv9yaJDEekwdC4CEXVFiGLavZ6pUf5nsThY69ntoTojWnUMrmb9g",
  "key24": "5SBaWEBSDhtNhZDUbjh3nRuEKfnToLN9CHKv6XLgL8VQCPRuJVkmVivBQEakwroYM2Lysdm4uXywe7qqB3e6tTPU",
  "key25": "TAFpRQiYVYgJV9XAhH7DunpxAQcycYCnBNPAmiSfECdk6CfejMCKyyGyiNMy1Jop3EnuJ1N8Xb5WvRP8uxNgKPm",
  "key26": "5xdkJqoDr9g4g1RtLtJ9RpiL3zL4MopH6vE7wm65Lrqo6HA2xPcoR6z32CCy7Yvt6nMkAGbmFh8sYVJsqZhj4uNh",
  "key27": "126BHcP5GthWzVfRg5tW1QXkN6sRZJ6wsvtKJGyrKiCMRMShuWfXp1TXoDiwLQ5D2uXFraipjmm5VrQyvxTawCZw",
  "key28": "5DorUqdWRUPdQNQ4uaN915DoaHs3kE54Eh2UvAndE11sYP59WDKha5Y7eDo1dretTCpTaNn8MmmMWBnWzaSzBFz8",
  "key29": "21a9yNgBNamHiwpWfCin8LRHGMERRvetVfHzM86CXmuS8oayFjkZpfGje18GNjJCDwWniEjMFAZ4znsRCM1ceFR9",
  "key30": "5btDGk3SeoXWDtsgtk1T3XMNfohr8LKgS45i7ai9FHkogW38qcACFvLA7zwD4SUsxkMp71HytQ8xbT5gX7VZwJfM",
  "key31": "3EpH3DHwfmZMv5rvjnRhQxpmohRTMdhkNK9Rjp7wFWnaWsk792b1ku8yiRF9Du2uyusJTaJUn4ZiTPsyg4FPWQkj",
  "key32": "4UYUJ1gBncACnf77tsKpXDapTNkSDrF4Y5LoHLcLTqSA7C8puKJtn44wpvPZqyLZU95T6yA2LzwBbX7NmLyzK3dj",
  "key33": "4EYeo8pvYSmi2adKDtMR7LcfzfhJCTg4zmtV6UUcvNUd49QdQFpp3s4sRz2CwicNEQLVeQhXVCbTnwFCdWafScBF",
  "key34": "2Bdxfu3aqxmSq9ZoyRWkChCLtfyLJb8ZYBP9Vp2775myx9pVb9aBH7iQ7354i2AETWcma31M2Pd2CJp6S3T7zwz2",
  "key35": "4zYrvqeo5CxKaziBp79FKDXW7TXHTWjJFsjcTDEsDRjJCsz1cbkm8k7qyR7jNpa9nA4JnRqBwbRKV238L1xARNpP",
  "key36": "3JWktmiBVTdpHG46YDdS9UHTu3H6zcYNg1d353h7NdJzit5zgK1ZgKqqvzF5uzwXhjCHbAs89f3kV4gam2g6FJ3R",
  "key37": "4avrDqv3uJx9ZAuf7XLMhm6W6AUmdYwK3qaV4FARxSd49Wu71ggD7d47Zi6LXuAEs6guqy381iiqsmNy6aZHGtQB",
  "key38": "2fCzenjw9saJx9yMovuNUtG8csmPo2VWJ7fdbKWkUkVXUPu6Q8TfkusbJWgkHBD7pNudqgaZXkQHY4S2nxwdTmQq"
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
