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
    "3PXu48x4Q6QtKrtAnRUoQMn45tXuPTdGnuM4n5d3gaeYVKA6tV8PEHMfVgDarJmyfxLPYADDsqV5YPiEXpZQj8WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M6XYABQpHRTpfGktCqBGACq7XPedy2yvpfrVomtwmKiK11WDUxFxSxvwsF1EjM1i7QMorpVg2R4zaxDuPsZsiMc",
  "key1": "3jRWUcG3DLX3cjYtqL9edwqwoFypc9iDfmTxx5ApeAs6iwLnXu7ZFaXCpDDnEcodGsn652k83xBFmqsndazJZJVx",
  "key2": "5QiHwAkAYbYhKF6kbMtUsbhd914Pp6xSKrVJBirwXpPQJLDtmg8LcBau7UNE4nEZASpYdgaGAuwQhVhSDDSqpph4",
  "key3": "XXmpkLGxnMz1Q958C11V5ydtEy6L6BYf9EuZEsmn7gk97aD6eiwfpJMQYeaeKG2mdQbBQggyhV57e9KmQoKzAsb",
  "key4": "5CqrrMgaFQ27X4TbTjr4m1B16LV6B6HePgGJUBNqS8Jp4vfj5CPDEhDozVDD63MiNZ6RraDbBgxUNwfnJuhU5kbv",
  "key5": "2guXM1t2JS9WZo55P8QvMipFQEG4hi6yFinCXJHmx8ujZaMXiiFQ4sLoM7wxovTKQGESvWCVtbKrNsfAoi8ikPwd",
  "key6": "3YsoH2HFpZECQpn31oYAgNytPMcrfqCLCHneuhHoraYNq2M45djNieN7K3RMDQNN6GJF2KqhvwSX3XVW7RdC27b2",
  "key7": "3kzDo3SkAN1NKAPfpAD5ULm9rsuJqeb1U5ZUtDe2LvU6NGzEXC5RmTmBe6yiwgbjqMe2gEKWKddfmkkAvdoEoLqq",
  "key8": "2iHmD3aHCiu5rhgzepmPe4BfinYsUwhyrTFgo4tnWCFsKHChjUcXeppGNUUiTRSxuybAwGXkssJBrTYPxaHviM2j",
  "key9": "AoRWRQvrexS93fV5zkFF2ueksk2aPK1AQKJDx4AhmyPuLzYCA6JhDZrGus9e2MSeztXRpBeThyXu2kFBMgQCo6y",
  "key10": "3JMTHCwbe8so1Mh4UFbk3mnBgREMZQNqNrLyr6ynwGhfmksrM4SjAqzx59TopMTVUkF4gdUpfMpizKd3tMTRezAB",
  "key11": "2GVc1m7FQ4AZatE8LUKbdKKgV9NJsLCH7V9gS1WuKJoMoBHH3SgBnNtBSDN5BnnkJwPhkyUYdauMgoqsyMbGLu7K",
  "key12": "36TsnQxiXadiAMJTwePMFFWAPpdfDmzmdiuHmRUpsxgJehmRAFnkbRDLaR8JPvsZRxEBMSr91RPY7dxDGn5nYKg2",
  "key13": "2fgdfCpeQuxUrHuowtxxLuJnBjRTJAQv3wKZT5JwP1v6GD9JJQkXuusaTkjVfFaxbbwkXzDhSnc8VuHfRt7pNa3w",
  "key14": "tPogmFQm1wmF2FtGhNA4hMzVzjT52D8AFKEcc71yTtXuBqpwWer28Awk1VQ39wCUD2ndXJQ6GGQcrWt4RYahU3z",
  "key15": "5vgC8sDC8aTjPc4JoqL9CUXpFrfPBWfiE899enDNYjTpjXdJrcfd185KbbYYqp5Vpur56pcCZZ3PvupsUXqzm59i",
  "key16": "5hUKS88VQRzC5RJn2Bee7SSuzvmyvYJqY7UubUF7wMGAvAe3dwkdJKDRWvNtmA9z3Bc2g9PGvmR9MTdmp98YhR5m",
  "key17": "64fwUZsvFZGR5Yd5NUpbMQMkNGGkkD6kCDJrFwQtU8CGt3o77f8kPLoUGbotDrCNPR5JAKNZMama67f2QUmcsLfd",
  "key18": "3xtGruG7Vr9hNS8f9aJmQ9YcmEaMvWe552FReH5jRUTfBz6awZZiiDu1aVgw73iMtgsaybWv7PwggRMShu2xkrY7",
  "key19": "X9AdmdvfmG9cDENYZj8k4dabAPFfnryCsGmf6qkFzgTrnA6NTMexanXnspWaSRqiuQcMqt7YA8eQeX2fgH5kXRd",
  "key20": "CY3eR1HjoZBmSKGFwFa1CpXz99CkBLEqjymf2cT38Z7Gih5HzNptgYwgj6BemxBdPtiB8xizDRVGgXqrqBAax4Y",
  "key21": "4m69PVftcsiTEiaxLZWF1pq8xz4wQz4yiwJ6RGV9NM6pEwmx6NEKGegzeTcDn9bPMSoxwhMVN8LRzqLYcUsUT2dq",
  "key22": "4LWMi3KV2mHzya5Ks46WdfejzTLHgDvhLg4fJNM1fTBcxiCyKcX6SQpnaZFkxmdvKQgvHx8CiVG4yuqpCPJAGP2F",
  "key23": "3pe3tuL7RbiGA7esYVdos3nhU44xjGXS3aaVjgh6FuTB1sDUm6KnQErp2tQQC1XaU6E9AVyXKT8yAzHy75sT2UuV",
  "key24": "LE5cw8JG9QTzvhDzojyz8nPnhZs18G26czEr7YkGKAg7Kme53XGH9ifFowDgfw7Y2SPtnuHdsnimpn23WbEbe5k",
  "key25": "4Vu4ETqoWadJtRurCjtbxHXNCQmzqmpttAsNnLCQy3hLw6utv5A4XckJtBdkBHG2JEjFRUJ9RFQZaf14D2JDPMXH",
  "key26": "5T9NAE33sDWmiKzr8P3Wr49NSpWegKL8LPkMtVxkVyHDzLzEPrYyNU8Xg6txfPAdtgT6p5ANcqBVeDyK7L2ucyYY",
  "key27": "5UP2eARiCMUYARhAeYTNhUTcrcMSpHDK6AapCnD8qbbSw6MPbK1KZAZiTMEdhcecxTp57q35DHqD6ccWoaoUnrY4",
  "key28": "5w65ArCw5XX9ofC5QQp8R9L3tAMiUtWxWEwr66dnhEZ85TVPDePqA5PQ8n7cUh4C7vBcx2MoK4FBR7Cnhn8GqxYP",
  "key29": "2hL65Nr36AgWrUGxNgeB2QnA6h4u5zrZmdsFPPYwSU4W79DGh3Ya9QWgCo5Co3SeoNppJNkzjpB54TPnjGeo9ACy",
  "key30": "38GVxeor84zc3gcYLUoNCm3xxUwmsTtETXSo8AFyg5GT3WPH6Zxqckwt2phaEzNcUPuoDVNAtEVap4gkgcLQQpBA",
  "key31": "38i9MPVmZ3CK9ndTzbUT7LHtaR3kuDwHV4ATMgNrZD5Cn9n5dm7N449aJE61TSYKSZ2TS5vd6EckSG3EV7rkQuLv",
  "key32": "4YBascNPbKW4fEUyR8ghosJVKZd2N5ifeTH24azWj6mh7T7VsR9Ta8CJueEzV32XuHNqXtwfFRjHck9U7qQmRn35",
  "key33": "3NrJcrHQeLHH6acG4o8i7EFBN2NsSjLDnh8WUoGNrx6A5KpnTBWdCu9Dg5PQhRExXSNibqEtCdBPSVQCM8cghahj",
  "key34": "2EXjk2vLnq4PJccUXgpTtFyD8TPSFirsMehWS9nt2XEh9fb2iA4SEaUNu3pkMFxdqsLKtPMNRRkg3z1xpBr8F2hj",
  "key35": "28oSE5qtSee7yJChYHqDUobbRGMDmZxheN3TbRyhmRceCix19bg4HcdGSpxyMnPMxuErCfbhANrwTrrQxur3rDjK",
  "key36": "58HNswg7pU5mKtBq2srgX5b6qZ1Y6Hx1M7BHhfMtoZUUjg4BT34LLgVFYT3y5NjUQjxG3JXKn12LKFSAap6gk6hz",
  "key37": "3pVwP6LcizcAggFr1JEMTapfzM12SXYwS7f1tkBwn79dbgKt4P558tkrwN83KKeG4HzHsDmbKdDHM51urYPJXLP",
  "key38": "5Sdnrg2Vs6vBb1YENf7jzbMSPZ4Xg34L96BG2LwyQfVg8FutUFBxzZdBbeMzjbAsgyHBbJ9F6QAkeJzqCStTAAKB",
  "key39": "BhGi1qp86z5QtmKpLQTmXt5JicuYijjAPV8rZS2soRh4SbYriAuEkJQkBeKXLUZLPuz91EZpbPokicRfyXoRx8H",
  "key40": "wkCM7spTGFrJAUgDP8ypk9fUDmBfGoZQuf53JCfNDSC8s9vcQng9NQarZRqiZtnfYfmx2qLvXYYamTm6xt9sqz3",
  "key41": "4rjyWXWiQGXTFGNTSxrF4oeNJ3aYSKLjJoNoPhftyub53ARqYqT6eECayvut61MUm5ksbqiLRDXBThuzLKmzf1Xq",
  "key42": "5bcNhMUKNJCcDGd7eSd4Zu4pJRXPrrGtM18c8bZkjhLQJrZBGqZjZKkjvXf1KEusL3rCpeg4fjKszFPLRdL6VteY",
  "key43": "59HskDHuaVCq5vEUz1PukfEgbmhpxBeAoxdsetrDkktdLQZ6EVJFfBrRvRLKBuXVUJy8ioXaLeRprK8P365etxks",
  "key44": "28yxR3mJW2y9rbZTRteCnouzEweww6Ug3y9itcTCqWk5bDB8VqMrYG6LEsUVfUhf4XMgXNA6Lsx42tZTWqkSKm9M",
  "key45": "3zEjJQ2oDGacsBmCyzjmtetyx7jvL6Uu2g7doY1ATiC7EfHtc9UP8pKWE5A3G827ssKA6MiMxwQNNBdFzv7ofMt8",
  "key46": "mpChadpF42fDN75dDoMd9LiHqHZyrcoMRZxKkgn9c3uVm6ijKpziBVhCcK3okuw2GFLmFxJD7X7SR3UwkYFkAMR"
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
