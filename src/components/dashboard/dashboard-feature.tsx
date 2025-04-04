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
    "39pGaCYmZA1KnhLyGxpJE89xNCErSq9kie7ntvkkPAJynmus6gioVn8kvwjKk4PouPGyLk5YpoL1WSLmWcA8zB7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2enx5TmzPL3JRuXYoG6tDi1AmMuzUaMUCp8HdMETzkp3JZTAVVkbod5or8EsGmb4hzhZJhxHvVzzxzmPCSfRYdhh",
  "key1": "3ZEjiPR2YJXRpW47MeNCrxLwei5Z7aYh6UWtas9dphhvSW8jiTUmqbdUumnMbpJsHZ37oSKL7yWJ4dUSdiqyDBvy",
  "key2": "2pNVHn5zv7rvhVNneLPcXXE7PYymxQdz6q32FzD1nQ8hQQjnjbBamXbtjkibSFf6fSZcMem86We6k617y8AyT5Dh",
  "key3": "2iFuj3HcLgCRqNZPN1rb6pVnkzVJ5h1rSCircuZfFN4jfgWG1MYs3XmSnt5JJNYZhAqn42KMUeK4ww1R5XB2rBHH",
  "key4": "2aAXphFAjpU2b7peUEtserHTnyWyoBhSTbgAJXaS7bFZ4RHt3Vxf7dzPfw2AVYydfbYzaJFsCLS983W3Ez2iQDU5",
  "key5": "3qqFZrZTp7ATPjEtAH4miTR26C7bkgcZRPVNRM5hKsZmqb3McaoEdsbXVFJbzguTmcmi99GmAFJrgPu6VK98wsg",
  "key6": "brWZ76x92NspfNQXjMP6sGDYxVh1sak5VgJGp5tU4XX15B1eyJDufEkn5DrL18WDnWJmH8myG3PU7tfncrP9ym1",
  "key7": "5At6sR5AbCj3LJbtJiBBKPF7nm1ELs9g5MxZbvm3iqkzxNg6q9taHyCSdb5aattX6XrjnWZ4u6Hd2TUq3G3zEKap",
  "key8": "217N7HSRzc76aYDeKum2mwyAYcoaPdj4Fd8t1YgzCcHQcPPSKPdYu9yK8y4L5ACEoYBN9XcvevJPJgjXURkywfRb",
  "key9": "3LWwMo1UUXEycQgz7AeaiQ6K8WCBnc46pTMJZgMMDuT3dxo7pGw8CJdtPjXfh9BtmyRLzCw1bHu4XK1q8U4Nm2K5",
  "key10": "s6EiBzxA8wUsLhL2cJwgbQk1m6kt83vT1EdLrfs3Utof4vysUJcvNYmeeyerrBeQGJFfJHkhbwMsYpt6yXtBQK8",
  "key11": "4uF6TXePjWT55d9VFdKDyTub4sn2cWJVk121xrFevC3pUa5Z3L91RKZpYriSktbLcocGCCLkPKnLSALH8QH9RrvS",
  "key12": "5wt9C5kyuypVnx98x7Gq2913er9XNeZZAhxdpUDQweKMLv8kV8z2QpVdQMLwxCpKJN5Buic6GA9CivbQxZyuEbBx",
  "key13": "3LP8fGxcCtV665P6uQ6G9zmN1rrSqpMwVvZY51haNrHNv1QTR6TBUcaWh7szo98UVos3UrpNWKG81akSxbui262J",
  "key14": "3z3BuosNXTzjAZ5hXiuyqaAfuXjWY7wvE9VrtQJ2FfSqcjy52FKu7f6u67wRQjorh3AEY2EiDhydoxUsKFefQadM",
  "key15": "26Egfh1ugqasApruCYBhn6YxTP6sYLT3nmZ2LNmjnJHXPhgZmae9WNCoqh2dEEYP2xhoQSeWsSp6qhDHbdgqURXw",
  "key16": "5MjWg8HRwjPbuoFoCpgmv89Xa5cYxyGrM78LnEtYnR7XS3emTjT2sdnBHRNF5UjWK7WtA8U9fPst4eFYXFWcMacb",
  "key17": "36TJMKuNTwtVL6i34bnpi8qh5yiSfkfjzvz7hX7HnmbhkauLVsp1MYnuBxpdEJK7nmfdfsWpsD4AFPLJuAKn5xZ5",
  "key18": "5jNzn4NJPGHB83FvrHaNjB1o88VwFefakFDcm5vkYD9jQdJcbJxEaHhtCmNxTi1fHRZ6XUsMxoYNUZw7ooEL5488",
  "key19": "55nBiDFPtX7UTRXJQ4MZVxtskDHiuFukmH6R9u5mdNASqtMud2HDJ7nzEnzFRSmrAAREbdAsLnKEWsHGRHe5NGn4",
  "key20": "4xuWPaRzDWVkHFAvLckMn7gdqn7CcLsTAWGRcMtDvnGTtpKuNUBB84oiH6ieqo3LSmngLVmU7wePJqc8gn2DwmNX",
  "key21": "5kD79ZvBKJ7WoG7GK5ujU5Y1v7WJcaQ2LpsVsbPUxHTniXx34t4L7LPMwUqvRj1gg1duZzX1aFSC8avwQYSjqbzo",
  "key22": "3GAqXjJcPNXu7P5Z5pPtgpZoPeXDCL7rhB8jdc219JeSY2EMDroVL9V3UbzyDQFP8zT3ByRwFnwJPVPn3u9J3fuj",
  "key23": "5BJkybgjWW9JUwpk37CL4pUVRQDDG3sT3wei1t17Gi7JwC5NzdDhUh1yyut6HCCB53mvpouLYVU754vfq1KeEpZ6",
  "key24": "3mnpcXzYGvAbYhtoR3d8bY4dDAVYTosGBGhPmZ5eQBBigsqPFtDYQHepMX2xqQoXVH5HhkzABeEJS6stj4KETNiT",
  "key25": "2HeP6ZYAbRQh5ZWRmSnYjQG9qK7dGXGYYNEY59qRxy6L2rkSxzD5U3XfXdvhr2pP48U9NZvFeo2nDry6AJpAQxcL",
  "key26": "5kSxwqqm3dvnX4uPuFwd56AF5NLHbKCShrdaZtkKUmqAetwcnLgMSdTrMkJ8uAxoNrQczgpfy3FsfiP7VuLY91vs",
  "key27": "32tdEAmj9qE1qNinSsMh9UdJLq9efcRNcqEneHQ1s53jE6FMdvKJzPJTKZ5R7ArBh1ZC7cAKeFhTdRRPp2hyYqvC",
  "key28": "46qTbvFnheQS6LkUuncum2r4bvsMCdP5DmYKy6jLotfakHtm7A4C1BhptSDmbQBMsXpB92b6eiPFv4yzo8KRmBYN",
  "key29": "5vqpjCEyjXkTUcSHfLmjcn1US4N3KvoQJeWsvqgTSv1jauVfqDDbDt783wgPFt3X8PQA3V9jvsR2BhSexfB4yhXu",
  "key30": "56HBp8G6T3ayhiEVhbDCfLxazqR1BVnXDQjMV7XJhAeLaDhHwGq16BSffFW5pR6uYNXquvCK6EhfQ9Nxu9Xa2Ddh",
  "key31": "58FpayHAGB4uFvzBb1TZYDDXpDtfbuWW1ikDUSb2scs5aJ2DfCDLzeQjahpjvPFfaLG7LggkLzM44VVR9TFuYXF3",
  "key32": "5YhkiXfXp8Gq7TJQTNAjDwPCDpf4eRRLLtmNyNNjWVCtdRxUf29o6sgxEshLDSyMWf4E9gCGNPb75n7d5mCYuYHz",
  "key33": "2Ba4XDSAj6eHn49wVUMs6pdPZpcKRYCVpfcrEwV1EdAbkHTfxtuaRySU8ZqgC6WS4qCe6mRKaqSp37zhAWMqMUp1",
  "key34": "4A5FesgviNsY9V6EsP4NWkgPUqBy36UxNn8WDuHQ8NYSNitjPjah2dKWumr9PacFuKCtk4wahnRo28ZNpU4kAhZg",
  "key35": "4msGvjtw2B2ZkcqHt9unPTpd85EAZgBQSQ3fTurCpvfUA3w7D7huDtgDBHe6X7jf7rUfFSkUUDL5REcCfYNWi9AC",
  "key36": "5waiHp1hDJ3rfhVDXVHR4XCCmqvt2kKXZiFsYHpRt8ahnayjsCwTYR2w9CRPpHPQVL3hLa1zvry2HZ2arxbugoie",
  "key37": "43fLbAKeoJomXw3hAQTrNRCA54YbBPq57yAhmR1ySE4i13FTnjmbaGLnmuSXpjtm8dDxBY1rybpFKnjgwnrsy4dQ",
  "key38": "5RQDta9UvEp8zpXPhh4BaE154sQWT3qj2wpPE8eTzCeBW7xpdPZyYRzqUxnkbv1fMFDGyKeGTzvnQj5PkHNFaBoE",
  "key39": "5HTmFiw7KQwsNmpErjVjw41xDEkof8N8VqtVYrVXJat7fczczZHoapKTzmyjFPb6AFdZrWAp74uYeBaDy2Gek43D",
  "key40": "2nYMFeGEPFFax8nBpAPePwbSbye4KLTyqD2a1LZorHx2RhRg5yhYouQa1ep4BF7fLotum6rQVSSGztsArV65FvN3",
  "key41": "5c15UnAztMReADStqEfM4eBFoC6RCGZxVvifAMBeESGWGszBBueqFea9QbP1LakYitQTuTPAmTV42KQxQSScDfGX",
  "key42": "61ZPv6vKXF7WxktvnJpmFMzW4FheCaxgdy1Ebyx7RY3t5BvG14AiUSXniC4scEG3fp73AmBMthnPCEQK9JJRhUoX",
  "key43": "5EV6Dsh6AcFFZfQNaULwqaJWa92G7hwLYqutQ3bPVo1H2k9DgNsVT4or7UXVKSUJ1pdT9ZaeNt2yjcw3F4sc3MTV",
  "key44": "vWdDmZhuKq5fAXZiRMoxtW4SSKYT3ApUhVhHH5xqb99nGKYB39KRJU1xDoskgbenEVYMUr4ibtYF2WcEt442rub"
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
