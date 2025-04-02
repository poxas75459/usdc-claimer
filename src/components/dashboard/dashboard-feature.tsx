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
    "3TgaThoEvj4Ab2cr8r9DypTAnLscY2RzNbmDXgViQAT8vwNaQGCCNzG89LtRztngZrzrP7nwJGCApGZKJdDBcdBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ubUMibp9ShVjbdPuJ28AmsXcF341MptCuyzXvMYzMZNU9njn8MZW4QAJQKZJJZnR673vcSSptspLBo1bkrbPrBJ",
  "key1": "2duMmKhrYjwEueUrTwdyPbZ5ST331BVSjsu3HizeMVXGyDSJ4pi7NDsLv2VNzWV2Pw6vnnUeb6BTZLyzUxPhdZLY",
  "key2": "3ziEhyGpgF152Hraw2pWUjPTk9KWQ6yVcgq9af2Kdc94y8L4tNvGGUtcAPm5cdUHSDU74tFUie575c4TKVZiBRj2",
  "key3": "BMyTRVnQyUZpKnkGiMxnTt52s7hdyBmGqBGt7dkRh5Ffft2rmw9qcxtH8VdPRrPeK1hks2sKNhSAFW8mihmHEuA",
  "key4": "4XdKnMqwrTmUHBC4PzCbDx6bfs9fhPocfNpk4Df7GhZHast1kwRASzcGBDj4JYHywWUjDDUY5sbeuUQk6vYZ3G1m",
  "key5": "gnD2kBhpz763VkUrMY72Lf7kFaez9GKSzfJ37xFJjmkcd71ySs1gBWtTiUpvXkubx8nP6g83VxboXeoaFXoNjLR",
  "key6": "2UHkrKw8qjU3xfi755HbBk93xZ3RbGAA5wGaSG2tTbaWr6xE6wzHN4uDXKfmx6ob8ft1UwbPQQfZocp7GCZVg8dw",
  "key7": "5UMV9ee7KV8EhgnZf2AAFXZkFxH3aFr2pxTndpUySacVF9k5t5dymmKbwojJZyRBBGoFFjc4XAxWQHGZTfL6mSM5",
  "key8": "28ExD8z2DuqF2oYTZUj2z8PwXyHgVKE6oaq4sppxXbTcBA5dxWSrg32DBRzcx8Sfe4WpQGQfZV2nu4GCsmQRDq1N",
  "key9": "242rtZPgBLdTqnHTGcyFkP914SdCNWEKn7iZ2J7VFS82HbyT6xAurfYK7VFSkSJzqZnbjb3uLBoWMNFxvvDRufDX",
  "key10": "31Pm3tMwnH9T3eH1pAa1G8UXiK7Tgy136hzx9ukUJuAQZKjjF4FkeAQiVtKU7A8fE3qGXQnkwKgqjyEzpy9YNesp",
  "key11": "36yjKW6FkAnHfM1yho2PSzTHAHgC9WNxRrtNRFverdCrHWhS2iSJLkxNicanWrK1t9fpjyCV31EmtbnfVdMpoBRK",
  "key12": "5ATZNoRudYuVKx5LooRJL3YkJ1gQ4CRVqSJbvPU6qELqqN3h3oD1GRubRbwfn9chN1QNKnCfWx45jd2C61tbJyNw",
  "key13": "5dDrWrimMsf6DKNQV2pjzZ9ZHU96hfFgjxbAmVLRuotT6Xb2J9U7rSAzVUoNQTNyMHLfDAkJWHwRksGBRhCwNtb1",
  "key14": "YbppE4345Dhv84qrjxj1tE2UcZrGpRNBYiVv9Q1iRNCt1SUtpcCNh7NmpPc5e6zXhC4u84ycWUxp3x5N6Gf6T2u",
  "key15": "2qrb7RVCkpx1QKcDa8TCS4NT1eJ65fNpEuwQDSczskCPb68bnbz8VjrkUcg7eKDors9EWcNZUVfLYEukWE2R3WaU",
  "key16": "48HnbTRuGoGWd4QbmxFQ7nKx9vw3EguqsefjzVWwh9eJ9cnPVr2d2tx8STMmzVvdpKig7JtrxwwVsu4EBQZRa6xd",
  "key17": "2nQHLJaY3BmaDNcmvghfXovaVjcqyw8AaKv2RPN5AsP7KhP9X4xVkDWQQguPHSdS76492EsqdAQSxeCDo9JxqE9G",
  "key18": "4uuXaUaeRLKiDGS29APtUMBki8dVBgSfwJhcqgAt1vBn3Vrcw7nhqgsQw1LLgpDRwoZwJChugq6scLZhWsUBnwKM",
  "key19": "e3eZS7SQNhyDpgPEXAP8iKorGewAsbiqdupXpP43L856oHYDB1qEM8ZC6pAs3MFZ3NfVLWeMRmNQWmGeVtYG5vz",
  "key20": "2N63X74gornE2BKR89PpuzD5xeZNhZS1xQfsoeYKiLE3Ni6WgGN6aGuQbFNCEuY2p1Qs7twhANQMuR4DK6E9KNAY",
  "key21": "tTBsfZ8vX5ii4a84xgagebsyLWBChsMi6YNVsEN5CFp47PwStja8aT2E9KSWTS7G4GaBFMvkbniu17YemYkSFwK",
  "key22": "5rWXM357rjZ65gZfEYyJxNBvfTXH2GiT2pKUD9T5A1CEydr3hqBDgUtys7Q9sdyKpAaARaZxzUTvVNhTqV6MmsDr",
  "key23": "3zwbDSirvD6y1jqPrtUEBpPEQueTqiXw1t5goDGChVWX71Vnsu4MwsfPrgeH3VrrHT9th7GX8aag5cxyzH4FKVjt",
  "key24": "2cSiKSsk1Qo9sKyJg6f7du9kKPuHdoshHE3FoKuPMHRrufHNgJyhzVzoemW6SdAvCv4XxGAAAkpF1Zh6Ef91PZ6F",
  "key25": "2H2tZbKMnrRgY3JXihthqrL22jZTDX2GD4M34GPNbvdJu5pRn9cY1VUnjnAEZQEWj2dJhPUYfK8kpqY6aevCErqp",
  "key26": "2Wtyps29oHqB69GFaKY2iyVqy1iAg4V95wUsXQgAL2HWHLT6xkDcMbmVYTtzMnLASSCz9F25KwVyD8ctHAGcZsEh",
  "key27": "5TZ36wircxycyMtkGGDNTwW6U4bjWfWVC4BkaamM14CMvgwGRYt2x7oLwU7DWaKTictU7V7amrAL9FVMfrK5J5bh",
  "key28": "2X8zwVBvSxrYFXvwVLXH7Y2Kro9d3JURo1RdTZzJCgMoAbNey7xV77fYKfzM3dFLTHYLJ72wDm9bjhadHTDwumCt",
  "key29": "658ozbP66Atorq2Eo3vxPzU3VGnv8HXN5do9HMYdHLxQCY46mULkjbwdkeboS2bgeCouFXVLgEPBo4nscLR5RKdM",
  "key30": "XvPMmCUjj6qaa8PEGpX764SqP4Xaryk1pccgJNPSFZunRf2ivtt3o7frX8p5JNzZnHJj7H3Bw4rzJi276ZT1hfv",
  "key31": "4JHkmJh5KAA5xNPG4vAZp2ocaqtdR7qZzcGX6QuEh9EGpXDKsBWpqTEvZYevCASDXSLTmq1aZDjZ3z7n4RYWjnoB",
  "key32": "3DQjkbpeip7Q7qt2cVfbXhbZB1DfBktUxS6sfZieipZqBZtcrGbjmbdvbt3SsHesSMRcxMqpvTc2MfkGZQqUQM8J",
  "key33": "48RBTFFBnShjiBHTbk3vuosnbrnGNua2kx5PGQmkSonBWWQcdeLVdtvSiQHwx7EyFdZ1nyedjsG1AiJni56vXzDn",
  "key34": "36TG72eVArbBgAuxMADVcZ2WkXKgH7m8Hxuxvz8qAhopNeTwe8donf2PUHVpoqZ6dDyDHRf1GErGncHp8ThXy7AZ",
  "key35": "3SvUTVQCHA8CXfHtJWUiFG1yKz653bkdmdyo256jp1Ze6aqkhJxxreHcWoSN7XW9ZrYrFUNkT3hD8VxwD3HyC2Hy",
  "key36": "3STCWNEwTTbYJkv1m9q7HVigvCYP99pZPAgv1A3QA1HdjmndDjS49qrwFqJcYzSWGLa8PBYaJqhgMsBbNgNVnP21",
  "key37": "5xG5sWMhP8kv2MdQ84vFCioYsCYLDDNtmJbb25yNTLhFMxtZyt1XAEZL3TWA6AjnMsBKDZD5QgrqTMHG9v1NkdsZ",
  "key38": "4FyPShxGN7K4VRZA2S9KzM7FkAu2k7bS99CK2uNjV1ymc9R2nQuVfWKueALJPu93oQY1wVtwB6bHrokw4MReR9HH",
  "key39": "YZxtYPKpj9g5Pp82GW1rPdjddWEbDG3X3B5r8xrHJUB2X3xqo7gTHshZBquinunww9DfegEtTdurpb7vhLfjmZG",
  "key40": "5Q9v2ib1UUmxEG1D9hdnTLXPyC7KXED128pBZsV9oY4jEmWFBtPMqkZrNQ7kiQLVeUayCaja36KxzyMX4xMXAB9p",
  "key41": "56ZxcrzjQXjkhCjnH9BHn3CCpXYEUUyG1Cmep5zEp72gSE1jvxgMm3DnLRh41F2rciMAnLUoJKVoZSXifqtp4HeW",
  "key42": "34PLspg73pu7pN2QWjiQyRQefGNQkadxz2M1AEY6TELoLCAvmm9VcxwxkCBsCPkavVHUnRTt9YFcqwZY4qztoiXu",
  "key43": "kxepDDBES2sP8ybtErYXhSdPoZynGwCPdPJSbSLR9JpXMCbc6ugwah5ud1zYpKtTi5dh9aqZkRi2ZW7hZSYxkT2",
  "key44": "5YHtYrFvY56CdsVqv71FL6pHBdvK93xRaqfdbSomiM4b5tGHSwKCVuBV7Y8UJtvvnqmMF5Vg7THx2UjNfXVQ8Lth",
  "key45": "27LwvsNgWtbhqbWo7RxJjxPWZ2pfXgSkVz3DSQD51q8BaM72Q35fGAom61A6KxaaeXKwrbuLhvh9cbYtJJFcagni",
  "key46": "4RgQqcSCuNZYztqfpG5fB2KHAU8LiqynAv75fY7Lb2yThBMmAy5bXcoFU1rLbbcnzQR4DwjYV9H3xkt1HC79byXn"
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
