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
    "4JLfsvySMpab41oJuQvpXCs4YReWmXLCGZ54cb8nXZodhsoPirbe3BaU8uJVp57ax3tgYiqRGZWjHJ2vJjPs3UPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GK9sfj4GTkQQW1XgeCV8nrKmw9dMnZpzcTcRY32TG2TxU9foG59KyJzpeVBtuJxYfwKepBoJswofNukefXux6A4",
  "key1": "vZW98USNpALN99aQecSastDvJQGPPvvpz7yF3Fc5RhR1PfHsYa7ToSqTeGPZ8pkU8T8NFdWAqgKiVF2ovGrBCQG",
  "key2": "ZDQGQ7pUaEFtuBdkZnR825q2jmPvE9jKzsd1mL69iDoDYo6JXBeNCqEY41MBPmDkRd49cAws5J6xCiScoW32DJR",
  "key3": "2EKvrWxyFVK8s14RPbmqmG4bnRaKpSdNNjaGtknHycWKXmSsb8iBNDE7oGGjXxzoNXpHqhbHBGMJQSqt7UEPuSXc",
  "key4": "d4vKuYUzHCAh4RBzypXC6xQiGgHvJsKEPENfTGgVc441xs7Tq8koqjkoNZYGTaQcAiEC7yF1a6vFbBGdkZedmHH",
  "key5": "3aEpyRbQbtdTED9AL5YwTk6ysQhpRvVd1cqW5LZC1hQiTUgFcWGJwVHHLv7aitxU4KpXt21SBJXY5WsDp6QFYbh6",
  "key6": "Qd6bxJuSWs6PrEtEQD9YvocpA4SHgfwakSzrvhYKMxyRQ6wbzryV728Hc1WoiDEzm1nzzH1x1wvPQUWXve3CeH2",
  "key7": "4Dc1YqipyjhrGUeAeZ1uQDP6VHQPRodjeumKReXo5s8F1poexrGvWvGmNM3NwuJJuzLfkiE8Gvd9vzWK84SaKKbL",
  "key8": "2cPLXwsPQFKufx7gZvskiYdxgr3ZHmk4WvHGiw7ykkhjX5BVNWU64mQwzJWHa1ZhKzahU5Ay2rb7bBZJNfmrU7MS",
  "key9": "5EEpP4V6xUR78UMvaNDFhP2vkTMNASrtxpP9SRjTXESfvztZqN9dCSnuTZonGMkt6A33DM6qkMLLuE6YonxGgXH9",
  "key10": "2WMPPwx7kBGsRLodqZVVa1i3rFs2WaCAXNXbaKfLAtKLMjzkx2onQzXkkFiPJRB3uN1FokZbpuRWYS6veLfL2b2w",
  "key11": "3XY3ahfRnkocEj5D2V5AQqdGo8mLPKxaNxKxvn7gcWoEdBi8jUHU3Pw14pfPi4FwjFc5ET6KvPk1ZUz8raV9HAY3",
  "key12": "4HeJy5nGGe222pf3eAFjs8xE5qaD7Yqb1AE3oyixdMPmtMnJSmyNtXT8rXuJhVe7XUzDDcUu2aYy8XNMBRb9HZjF",
  "key13": "56KTtZV5Qs7FiiEDvkg1K9L4pWapBLzFnprVxQbDak7GJ6iffC7wi6BanDTRvCm4Et7UqMLU2t1gsVpJyZpBhbqZ",
  "key14": "3FhEgdgeKz4muZgA7vdGShZBWbYSFe6Nx8eZbMK4Am7WzJSwdE9BjfJRJNmpU8JxPm2suaMRqeYVuSDbNrkXv19z",
  "key15": "62whRCJpg4EC1j2Zo2kapgekrFhBVBausWrZ86G265ejG12QhD22c3Tb5hursMd8boMedrfup8wG8V9coijHruSf",
  "key16": "4Pqyt26thsT7ho8ZHHAyEx1v6s462A7gWhReRJ28fDAwYzRDoyuuuP33xNc6D9ET45hRGQRkvoqPziEk8kPJiT9u",
  "key17": "2JpBgVuLnTMaoDq2Bvg3pXpTzEbiHHmQraq3hsSAybyW4Pv8xDMNuMUfQ9yCBaibQZq4ZByT9BqrUma8fRfesNJC",
  "key18": "2taReC29ggmTnnz2Yuhuec8iXrYaFxKUpUgdqjcrh5RqtKU9FK8BHxubEu17CaBpKSHmVoaUFQq229qMXPfwX87S",
  "key19": "3wbdZW7EUxsGJyALPft8JBhAhvRvRtHGmpzRqiTugFnTj4EoYUYGk9YWJiHUovbV8DFQTwoZymRzgFuwi2Q15baY",
  "key20": "4FKaJTVuNtQyfjTkjYBYmyJFjuQu8Wi6toBmxEs3e8Un2gsC1G6qbPZw3oC3rXnb6UaZXu9XtEeq3y3ZWYXi4i9q",
  "key21": "3P7Fip8TpoyxvYyW2QUSogxUBEkTF334CFCKSPzrbfdyZe2qDWPumtGwBCPqe2tkQiiFpC6FHr1BSA4mVRr6sRWr",
  "key22": "2Sm2ytMoTc4dAjAGZUMuQxircjp4gzJigNbmWUoGuSgyunKbYbRcX75YHMzbTfHeCHPjiXHpZyhpAVsrVPGrb9Le",
  "key23": "2LUw3YJGC6XDjWgHtxBWrA3yC2ncazj6JZEYVPesWydygcNB4Ya36YemH8nUpPQQjWBDfEtAKrryXZLBApLd1WJq",
  "key24": "5ixALvEz6G5k5v2jVTiN9ciRwdSZhNHXYqDzBAhFcmLiejP3Wzt5vxCJU7Kwza9gnBWxwopUEcmN4UD7VJY1mbfk",
  "key25": "Sp6DDuV48cLY4QKJ4xUbwEDL9mnhBKeGJbei1accSGh98VME6odznhYjLMrdurdzW6YEZtm1rNn2mnBeeo7JWnP",
  "key26": "cFgPLJfkZcb1JAVboSn1iGNr1z5o6xgvwTmJUiZzeitA6zMsnS5bMc4vSXQz7rqiqX3MzzCN39TqTD2Vmas5yix",
  "key27": "4fSrKEpxZZ96kw11jU5xBR2wib1sS9ZVmufmxebyuwarVdGgMtuPf9TXr2nqeP6qVGKEBqXCwJSYXBvoxVQix3Ks",
  "key28": "3VT8o8SjWL3XdrfrUBLd1rNXbiKrpUrrAh3riS3QKCLUgzEXM9UddeAcMbhJfPD2Pctz82pNHd36D6BuHapcj8U9",
  "key29": "5d8Qq9rkwb9J3ajaTEc4syDXFPmZqde6cbDCdHeXjukdVAxThkSwtiHdxXkcf2VTGqDRWGQ4TZ1kpqevp6CMy6oj",
  "key30": "5C3a6a8aFJu9x7TFxk9b7QQ1cobjeZDWfyF9kVnyLpnCqwMjiui5wRcLqJLHFaTExzbaGLv7npFFiPBKar6NpUKB",
  "key31": "5TwqrGDpW1DwZdGWE7bcVre2ReAahqqcGVDsUAXnHVnAGv38y43nj4hAqfaV6qnYeHDJUB8rTaKC1pBXY7Cna3vq",
  "key32": "ehqRd8e3KaYswk6EBE5qZoH8PyNk8SRrHJookLD9vQtvoCkdsvT3tDTBqw2uvaroAuWwURTwofhJxswcFb5xtMu",
  "key33": "v1oqhMBWMv3KXtiWnDm56PaYCoDy9XxBTrLLHuGu9x3k8m3ho7cnPenPGhj7iJ7KAXx6WLEbwGUWPohzZGc2bS7",
  "key34": "2bXJbc3SCXTJVdUqtKBQhSixEBDJ2dZBb1BLS3GT1FBVjamknH4pEqvM7x2JRsEf1EFjTvbTyZjNuHbsmxeM4uAD",
  "key35": "5aeBLt3zGJzD94FBqYzkL8iV3rV8HfzY5f6pbTsYZeTSMVNtEXzYFFtjSND1uGRJW78NmfZGkhvNLMAwttaNHcjT",
  "key36": "3cuZmQczT1vfdwXMehyb8zSvZxtsLYR5E6G8kyFcQVY1jChhmQ2TAt19Hj8Zq9UpNrDg9VzLHBvX2Euk2ZM9r1NF",
  "key37": "3N7YSbpq2qTyUibdaeDuLFNzUYPjoKzgs48sWcc1xgMdPLocFEsBVXnc7jdkGyCxurw1n4rSy5FecBycJRhgpfsi",
  "key38": "5jwPxouFHQcGMZAUcGGsrgeP7s5FwEtKkssSgEVnQdmiQedHgBoi5uATfAPajCR4xa9B65QP6tVaPkD7PrK6A8Js",
  "key39": "4XJ6RLiNFzPcqKZcBX3YVkjsvcGXNYUZV9h5YjvGK7Yg3ESKiNgfUxaBEV5gimW1iDaB7zpoQHh76L7swmV2GQNF",
  "key40": "4c48DUzWoN1tVuWWUFqEYRjyzEzGkK9rQhEXKgqjBVySsxGMULXn56VKPHMeVAuZ8LWjwiKNRQzAb1qDKJZ9J4mP",
  "key41": "2UaaPS5Hu72DrqaJSpAGH69oHXKuKTVTt8Jqo65uTomFJsZrq5NDmSUyd1WF1nVfhhAewME84QNBo9uCq1BUW1PQ",
  "key42": "36uCEkC5hfmDeHkWfLdaipujm52AT7gydT7wrVGGsDX1B6S9272GR1kSmPWTvFW9PMNVXB3JPy24AnCjyMMY8jKE",
  "key43": "PQnJBTCxM1FmjJkQxnontmyxHsie4BogqHRpmsbXjbVuDWcq168F8dPuuRXqgrU5WJ1op1xDiupkJvHvogTzpq3",
  "key44": "3eJZecCH2MFEsKnS2u2MuA7CLKAMNJyGZoCUmdPddDjpC8Br8wJAsNpsDJmQDwPosimVFyMpaBteHUnG9pUBB23x",
  "key45": "3ULzCSf88GhwD8HGk1ms4nJxKPHMjg1LjjnyGTRaPFAqN1LPnbvD4Zwu1BeV4irqXVsVc48pNhJd6KZXimdWJMMe",
  "key46": "3f9NJU6HcmxJCEeidhb7v9Vgz8xPbUoXSnzBBmkivtjnKAStX3XsxiPktRZpEqojnWHL1pnSiYqqUpXKvma8Sigp"
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
