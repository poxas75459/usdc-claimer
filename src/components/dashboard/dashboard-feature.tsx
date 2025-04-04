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
    "3iavqNp9mND6AgMSBT49cZZ9BnntUVM5HaXmbqFPPF2ERfss7U5m8mGxNkoD33fEmSzb28ueWfZyoo6ZHJYKSFgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XgXqP4JLb66CrCAjtvMet5fiAWvm35Ju6c6GAUUVtXqfM3QjVEaXiHbtML7WEiAAvBbwztpwcefiNrHtTMy5a3i",
  "key1": "5RdVBdPVCqdkp4mZCwRVjbYhLQn6NUXTBLqXPXRBURDLZNizMGRHNgViATpSQys1TG56GUdUrkkkQCCeyWBxhd3P",
  "key2": "32LnJhasaLZZpCYRhc6RdTAR1SfyArrjgPMDgatw7LkB9BzETd3zQwwVvCqY9d81yqxHEkDPbnfQMKLwp1aaVAuH",
  "key3": "56opHNCXpp6rHbXMhxQquGGCJqBKk52EkZZnyFBjbkFotSnyMwytLtWD2RJ9wjg5uwFqKDG5SZjJ3GBDLi6wcE4F",
  "key4": "pubxJf2cDNPJgmSrUCX1AGrBoBXQeyGocASJX9hQLyk4zigKrvPJe3UwBax1GwX33Nk1G8aF7MghWsdksc3nTfm",
  "key5": "yFftEA2hJgP2bF9kUzA9NjhKadPGUyw928xvZG9n8rbZbcXsuoRB3Mj9rbcepYB4qZLoBSFR1s41ZXapTLAonWP",
  "key6": "cy2bHQZGrytnT3HKYE4faSBRJecoJsvVzwbjRJ2VHJzLELEdQizf5p6MQV4NxLbTubff98mb2cyxssiXYxWHgQo",
  "key7": "5hJdTFC3Y4q8f4VRoSSgB2Yfos8E4fGzWvg4fMNNpi6LsVKRvmocnJ6gpjHErCgfoewPWZ5MPc4dfsxGreXzAjKR",
  "key8": "3eTV6G3Ekgenwp7FGRzzPf8Ge46GBhCnZfVifaeZdZpXxVKy3Eb2nSVBiVgbvkn99ErLroBcAWMzbi3hhL1X2y57",
  "key9": "5VTXvrVJtCvUrbbntj3xZs2M4AqjaTEGswFWWQ3jmGGYLhKN5FtWzECT4oeFWpB98xjTQG13xVfJ19mR8AGr871S",
  "key10": "3nrA7K4VtP2mmcdcUrtrngcGLSCDRGo3rCEYX9kfVMCbDpNF8pzwxVEXexoXGYjMzA98D8fi4Nfb7P9uHuQo8g7j",
  "key11": "LiFQ4B7LQFKE1bg6urKjbVsBSeHc4vRcpzGCdcQRLwUTTLhCHWiwEpwRvm1mqAUYvraZZ6wMn3T2g6UYjem7FJY",
  "key12": "yUCXAV6WecHTB5Kbyygr6BgY4hA7qyJxFuH3H3S7pWXMm5tV84hX6nptYzXfohZnRNahqdDRYT1HCVP7dyxbUjL",
  "key13": "42gUgzUeRLakqM7EMpJa8E3Pd2kzFKrVtvEQWpHjomUvefceReTVjp5Dy1W5LoMGDZ4tP4xZ4TtmB91afFp57Wnx",
  "key14": "2criJQYyMn4ejUtjwFuQYCtvigWfTYZCefY1vDW69hTuazEMTz8y9h3hRiNRfnDbgYXduzA6A1rCcMD4KHsgzTKK",
  "key15": "24zTon4fXRdWt1PM2H5dLkNjg5SCFVvudzYMfpiPFSdUJsTy6NE4c9vkjBNuNxAWA8ZhkgyM65rZ5Tittq4GCBwD",
  "key16": "3n1xjZaHFGz5HFH4912apqMWi5XuTqG9dyCtyYZ9tHKBkbWznbZK2BUvKW1oKELaLaAeUXBny1HJLPtBxCfHcJ9A",
  "key17": "2Gc8YnMv6Hk9K5gLUuHXf2tsc8tpEmnCQxWoSMsaSNCEgt42hmv1my641TgxafgpYdHPtFkAx2gzjC1gwRfuPPdH",
  "key18": "3nE59qWc5kZyTJdMq2VE2mGWsDsnucSaqJJ46FX4VPtzg6AQAS5ivGoZ8iVd7MUxFbnyhhP6UwL188qJA1KBQsgw",
  "key19": "48NjJyYfaoLLfV7PDAwXkLEMMsgFcu8fwgPYUUb8FGvYNaqZNUWRrnp59P2qWFiWTipMi9EHJzsgpYVQSjnYP4kh",
  "key20": "MRHtXXwUuZ9TdPcCxJpFXUZq1UZKoVbFBMSXy13N4LKK3s6VeAaR2aMcTBnymhw7QXdag4gVk3uyZt4Da5cgKxL",
  "key21": "hsfx7NPUUxm5uDszF2XtXAT5VRF7dbFeeKb1mfMR92RiCiDmQHuLe8xnp7n1tEBG2bzics4CKJfzyT59j4fnj6F",
  "key22": "335JEVouaUo9AaKvmYS5i9Lsa6Gc7NpUjTGYFBf67WzuTuZgDwqjnaqv3pNbMtLpvYeCwfd2oBh3adtdxWoJQ2KP",
  "key23": "5HtLr8Vn74dU6wpU16tP2UTzZnG7ifLYww9jGJ1e7CsQysVkVYmV63VWENYe3T6P6UGerRy15sk7NNMp2JScFLYo",
  "key24": "3HViS7PHdu6qdPmwknf6iKbax26gyoWpR5oa4eDsoseovTBZXNLtV34jm75YeJ8Wv8GQX3VMMMFWniFnX3Lj61Ev",
  "key25": "2WBnmPy4rxcu5CvB2myuwGLHcd4hMECqgiFYXDtWUEzTC8EjP7WGEwnKDqpUKgoEBYQ8mbsV54VE5VA4oU767cJW",
  "key26": "5x2EDpx4cYYsSyzduoYDLZkSuJSihsziug8DGXS2UZFMFs9cctQVbGzgA1X5JebN5woTRg71zAhfWQ8jpy6GuN8S",
  "key27": "4x3NPkY64ZrdRwLKgzATBhk3b2XhC4oaKH1QiuZ8e2czzSUExNxzMk4bVRqnBHsdARgKMqVxUzaeUvSregmRMY65",
  "key28": "guvwVRNQiLygM5pR3qVTjmkaqKAnfwC7TaVtxSomy85sybUHyrYkDHc8fvGgkCq38kU367fPTPQeG8JE8Be4gfK",
  "key29": "TtTd6ZZbH6euqHhn56F9YR9CH1P4ne9vHWRSzvje1P6wYhcqsDN23AjTXwuZYxJQN3LH9AwcPiWsY6NGhPzkLRt",
  "key30": "4CPpZGkamvhuP8ubRqwJuXzSqQRbFTysyhrHdH61bKMbzAqX5dWE86LyGYg2xacmN5UpHac4VbGuR1NnqbHVJJrn",
  "key31": "5p11TwfH1ZcJbvWgcmv7wHmLYkdJehT7ZDqLcbdxb3E1p5yic6W5tjnQv2sVpaZkiRAS4XFhJsUHBBNF95rSfivV",
  "key32": "2XmMNhgynX2rUAR1zDtog5Rfaj3cNgX3EN4XWh3h3Y4XcWEqKgRqm8ZNWmPe8DEvnFGU8yG8EcVx5mbiYrQ3diAs",
  "key33": "tBqzotesLfGJBiTrhTdcoUVD8twF5G5pPHU9AiHWv9V6gPQGgMKxCBo6HmgG33y7m3wf1oth7Wcb5B9DZ43wSBP",
  "key34": "4kjEuro28ENxVFj9YNBC5aHFxYoPAGzipqVjQPvzxFWc16xQ9AWM3w5HgV3gnztnWQBE48TQ6Xyh2U8URb236CCy",
  "key35": "W2tJTo86WJ1YKshptARnbDXpd6XLEctRiSvvnA9htDP5EpJ8zMurxzGiJNJ2Xpyv2Vcdxwray6oTSu5yzXLahwY",
  "key36": "3o5mUeM38KUgHDD5vcbRCaQVSkLdNdW1XEAbw3rdrv9o24uDPao65UmduTrZEjj5tMn4nHoSZNuyGJHScevw7RBZ"
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
