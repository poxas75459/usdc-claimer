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
    "5tuDtbXRMAeYUP1Px4bw1681FwRaSKHnXnDcFsbEJDfqCuyDv2g2e9Tx52hZopF8P3kB4rzHF7mxXCJPbPHfw8Wv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htLLRLRVBQDSQ2SW7pudsA3A5ttuFgifzcxJ2mKyxAsvU7f39V1Kiu47VksNXogh2Fy4eAvEQVEF6AXtdV9D33",
  "key1": "DNckQS2KZVesJZWoGpfa9CJwEgiVBv9qxDLpRiTmgx1PbhvTDDCBaGj6jU4AjWHQG6EtHAJfoZ9FuEsHR561t7R",
  "key2": "5fwvniTtBNt175HpTr8iZqDNtYtzALcLvyku7W478g8r6C6mJKdKdiqsWojWmHEdGMEqkJ3wQ7nopFaijVQraYph",
  "key3": "2aqzcVJC9oSNWWUCN7YzA9abrZiXnnK7UuPsCvEpvSB9MsPr1bH9p1gLQsQqNcbMPxjFbxLtgd7tGg7P2YAinLPB",
  "key4": "44NLyytkQsGaTZdwDc7jKDZFpakF9XpjmcQRw8c5oUjKaHY2Ubpx5QCQRZPqBGx5SzjNQF5JbDyRt4PDDtr6N4Td",
  "key5": "2LPSN3T46kBNkcGutva98FHzx9mVWXvmbcZG5XMqz6CFPNYLyaMQFLk5ovTg2dK438Hrx7oodmpt1yjGSaUEugJM",
  "key6": "4pkVoTedCAqBJ8UNeF3vAaGGuKJW4eYhNWdznR3Qo8B9iP4fGiViFy94BAwa638JckHhyH8L8mMzTZ4q4g5jRT4n",
  "key7": "3rejfRx7vsKiGrfRoiUitz6foXfZhDm5jtpzemVUzzSkLRinhjEPLW2dhxR6tyNnk9Yy5BRbb6zQYjUneApxVF1y",
  "key8": "c72xaKQwNhKxGroeD6V4h17cwzVJH7pWMbcTdjFLqbCYgigSgUiegAtc2pgaj2Zcf4htBZmUYW2p4pc6mtprqkK",
  "key9": "3sh5mdx3nr98JCzwCekgNoBBN9FufTRfG9Wnw4dPxA2hckrVF84mWwq9LnEX6JjPPdFmrPMuv9bZAagwTMqLy7Ef",
  "key10": "WNio2myB8zrNKj7M7msc3TaEL4jcvfbFHVDePcXsDdGeHo4dKdNzgMCsW5ScDMA25exAVEc3BULE3DCPyCjnQ6H",
  "key11": "2WniwJJ9nUQc9TcxzdPRgt4jhahaTfExENEXsha9xEaceYB5pomQ6LQGUkvnaecKM1uYfLS7fNbEMjnGU4U8wa3B",
  "key12": "5AX77iFVSpyhxjmR8aKsTFfPm8d6Seu57fzZwfhxt44DsNorzw7zKRFRpRqgGkfFyynoBmze3ST2aEwdRgBSFWBk",
  "key13": "66NEwTZY6hZDwAesFk7pV3vb1hxtjEcc3KaWNqXSrBFFoZC4iHNExifgw6SXNos5jz2WzfR6LiCto37SBdKY5ER6",
  "key14": "3wDLr3QadyyqGo62PijGakgoEUavePadEbBc8xNi3uTasRwB5mqjJhmhoe1WKMjJeNsbS8ELzP1mxqKo4CRJxCBn",
  "key15": "2XC8ss4GmG8jTAHi7XAyStGp6K3RkznHWTa8KeWYXgu2zw37oEa46Uoovok8MVLGFNAUVKAPh3wJ9gzqE3wXZeQ2",
  "key16": "g3ksRz7Z8QnoM1dkBhXk2oqUcawMdZQ4tbDUELoQgqMRUxabo7WXHwZeiENWZBP3Fw3Y7pc4xPYe17xzm5ThH3V",
  "key17": "EdgCGSk3TJ56KNyw6LFCbhpW7X7keDx7T8FhAaMMMN7ncYATW7X33jMP6hXhQdWNWoS3Yc2gmnSBeM5xdbN2QR7",
  "key18": "brUtwfb9gfpb1C6LSTALzLrvKpgrNsgortESBpu5bJtHPpVPSC2v5bBstAnk3579zdj3g6wQmzh1D8DxwgTzF7W",
  "key19": "4jnfD5VfWPK3eT8wmtUQyk5uZhJMShg5SUg2kue2TWgeLECm6iNpthVZtHqV6HdaKHtDWszqQbwhdw37mVroq83L",
  "key20": "2J4Q8vbDEYDwnMU1udoRb8QyAACP4AFYcnKuh8z3ZJJtHSLUyNwxikYAsE5PqG3SVeDaXTTjHyXjG7mP3rjcqq54",
  "key21": "3qMMGDGwH6f7Cvr6MYmpnE3Q8v5UK3kxq2Jd89ziWid2d54UMTdrxUmWn7gANk54YhwUyry9kVSqzTYyVd5nkb3N",
  "key22": "4bSbmK6vE2GKEsgxJQMz3JzdsM6xBBwKv5QRPVwXi56Y81v2EYWSBmNon12fcrhNZSorgiBKbGoBbd4xkS5zK2pr",
  "key23": "JdWp2jEdwPVAmtDHRLTLCyJx5sHV86MXc1n8gN7eiW9ycnEvtNXwYYXWJMJmsVKMnj2TzKeGpVED3idcV5uDEQH",
  "key24": "38hM6vWvfmnBtBGg3d1E5QDMzSj6mn5oLymd8ycYkJzcRS1KUBGf8hrGwrG4RmVCdg8ctigfNABcJ1ZNaytBduA2",
  "key25": "5DCXzmM6szfVNGLxX6sStm6qHajpgMdrK3QK9J5eZBbEB66SRqmPyqoRKTxV98VspDAZjCkCewkyHu9JgYP9bq7n",
  "key26": "fDessDAci2v7ZdSQSybZwnUqTZAxdHjgBSnq7LtAHdxL8HVhYsyHYdRdp79bCeFAw9DHuX9KhbiHUEzoviTytS9",
  "key27": "3YABcf1zbF23Hi6dVDkuUUsQ4MErGSEDVYxucoPFGG5zgJbvsZSSKdrbuYQcWAyXqU1R2nCgPRFkx733CQqnC6sa",
  "key28": "TqVeDqcpcKvvLnZ3wYZqCvhYFmErtijDCAGKBa2HqV574ruC8szSyGJXU8Er1TxWr8x9GHHByjiDL2B5XcCySGm",
  "key29": "2kBCJUoqP47UPAw5VPcCe3saBnB494cn5qhmGaEUQSSQPpVv1ihD2VvcQaPketEPhkwrnHQLSYP8bohbKo9wGp5A",
  "key30": "5ShLpBvgA6itpoo84sfMAp8v6MDj7iPHn8msqViMZTuJmmVdXXSEky8arekG9J6iSwN4HnuKoMSVyBcvygEECzaX",
  "key31": "46hXCiHx8sBjckaWAjX55JxQVF981N6Y24b1EDe2hohhVsLQ5utZS2QUhJyMWa6vN9uc8Qto4rQG5NjEGiNXBuLS",
  "key32": "5aE2xskNJkrb8BXqFR9ZgCRZaA4qHBXQPNjKAKVJAPq1q4Z9ZKBctddqpkdKLb3aSrt1TcuTxQgxGqEYNRrav2hq",
  "key33": "2GZPBCGpoLna6aauqpg5ZDUUomSmvSye2riXWz25krtns7QWKhfZ4zEsHkVcDXyfJsntCrCkGzsGWtVcyocx1HM5",
  "key34": "5JgKv3pskreAA8HMA53hA1VabZ3z8eTFGCGNduPJngtV36H81F978gZ9zKXHZrJ5PdXW9dxFej5xd6GiuGDTo2bb",
  "key35": "39J6VhjPDGx7R4bwfGixzPkM3txftdVumrX7dJZuR2zay8Yiwa68S3Qsc3TUnva887fyvVFs8WiWGLG4kCdh2vq2",
  "key36": "679F3aBPPEV6xJweFzf1FCRoaBuQVNN61q4CaikSZShCNkXpmhCJF9ZU8iSqx3aeL8QWLeAng6WAn4TAXLFeTi9y",
  "key37": "5CgUF3rhRtWLNxjYK9ibrLwNeTeRp1TBxC6Uv8mbf9da5NYpghagAHmued9qXiKvMTy7RAhvCmPtXYoAbLF48Rsa",
  "key38": "Gu7GT1NjYZXVwhnHBpDvKXUACFYNKDr8bzPf32uTb1tpd3qc1Dy3XVRDruNQSmwxLnZu3U4HesMmsupQAVWYSzD",
  "key39": "5Thd9VWAtCHDmCy4K5ACxVeVCW4g9VXu6aXd1MuULP3Yc1kciSECdTDz3uogWEetLNXYRxMxmXQLfMwscondJgkz",
  "key40": "4BkUPjrH4Zbwv2TLKf7uPGVQBcqnG8nUF7ND4xihDmqxrM65wDmUmoxG31H7UBtrnQxBPfBwLNh9pWDHHyzv5cQ4",
  "key41": "24VNWVvb6K75tGebCujb8nFHdeAvvF3roscCG7ui6v1rFwpucNrQpLTfmkBBQ5gGANdg49YaV4wxWt7jy1hEZUJ3",
  "key42": "2LWUrYdUoiNt3hLZAhXS5wajmiXVuJfQeA7U67jfepXKZnxdAc4dYEhsKcPbZoPFkLSAURw6oQeDpCgJsu9LuERs",
  "key43": "4LcDDCasngtiRsgqVwFN5BD5TJvShSwWLqn2NzWuchPMmm7ELcmmhnk754z4hzFw3SvKvrwqKLWX3uaxQoBgtdo3",
  "key44": "62v7p1PVtDvfnNrckhjauKixkTNVsypZHNFnpxnYELrbSBg2ULF5h1Au4g2FnNgZ5mnv3JALnsnG4cVkNdGbLzwh",
  "key45": "5u2P9Fguf3pLCrVFU4EoWVfeMmtGrUWjyjjhgw4tuCvyiPNpcUnZPdmprUE1behyQBcsBC8mkFhu7AVq2roQYhQA",
  "key46": "3Kcf5G2HPkbbmjPAxdXRJWbta1qqLiAy196D9sfjJNKesqrmW21vjv3Z7MUJEVBShGRRXRQPNCaztsSQW4rDTr56"
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
