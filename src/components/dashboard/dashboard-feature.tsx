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
    "2wLhzugMSMbrTHKxFPEJpa2YVgJmYFSGwhxNEbdPbgfAKfTxNeWk3ZkxhodL29JCv22tEcQyUjhPyP7zzQweZtUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WyxLBayA4NPr3x86RPsnKt1X646eVWpduLumLh8ExBEG6BkPXpadjjSmWCXmCrqqSp32KijT4YLfFXxwGLWywpd",
  "key1": "5G9869uj9o4Fi8WM7PXS62sLtBJsVkF5o81644xvNFcAxNBmkTWcef8x9JiSVFzEtfBvz7e21tiE6HSnuxoFHQYs",
  "key2": "4669NVTQzLiqiUSFF3JQVTpEJUR8C1pKbDumSAY2TGR51gL9kp2ygcmmoyCt3hiPpeJaTxQukEQcdN5jRQEv14rH",
  "key3": "3sFtp8R8d4AbJACd2zxGDav3fT4j6a2oh1AaM4dtXt6cDs3ookBCqyBdSmNveCtp2qkYig4smnCcW9xC8uQ5cVvn",
  "key4": "4xMsJfgfZsWF4H4WPMkGPk7w6GR7N1Y9b1ZuHtm2pEBQC6VgWqQujtZnEb3Ls6tS2Tz3bYcM1M47esqQcimKVMrN",
  "key5": "54y1HZN572DaUbyGysT3DrwrZXwxuLmLcRMmBKYGrk1LKqcTzjVrrtHvg4YE1FygvY7awv4b7LJjSUB4dg3CvjJS",
  "key6": "5WhpybzwggWsnhnnUu9jd4sZTfD7BemsZ6GDaZknZPC98hsBvf2ADerKAY5xYgdbXbzgzNuEeFoUM6gMUVatf8rd",
  "key7": "2Ef8uUJjgaFELXQhyLsj7jNrXyNZBwoidEPXCB5kLk4knBYiBRFvbKoSqCbyXhb3Yu8A4CL7fv17KbRfH8CVYBoM",
  "key8": "5M24ThR5tbto2WuUK2X7W9zH642CMMv1GB4kc4qTiL22fLMZ3XTxwkrPKzExv8iAAtWDvRv766t5N6L1CRuSKbzV",
  "key9": "mp5vk5mGEjTvoqQq3Kj9Ejbn4q6XVBtyWa4MdXgtyCtb5xg8DLijKFeBNmaRGW1zK61kMSurvhJaWgbJXUC3Er3",
  "key10": "23YX2FMoSWrsr9rAVpEKe3Af4CJu88iuXLATGRujphbvAmuhY3bZhPW22jVxNnuPCt2Z9zK4zpdLnEGuYTXuAx6q",
  "key11": "3fpEj8ygfopWUkoHyXrbJe36WbSnrJZHDbzwwbiJTTV1ww9oHX4GqEehg6ANkTqwb6B1D3Q3YtumaULiXYr4ytv7",
  "key12": "3hDW8UfFcnh8DjWCAbwZRUC78EAZTP7rPyUobE6TMp3TV4Ra5ticzsdzPueo1MTf8fbJoHKZpbYK9wpayf7hgdsP",
  "key13": "5uKHzqGFdEraL5QkesR9bca4iuoY8fjAhwyMW7dzrmLF1K26Z9W37MnexdWajDExJvJc3D9TRhARubfMopUZV3wb",
  "key14": "2UvHkPCBywNrPDaE49WVLVG1f7KSrbTfwqTpSLfHPL4veqb6EAREvjQmJRQa71NUpASmX3qDy748FohxGBbMprNb",
  "key15": "5A2jcxGRtwgWPN7HxZfu8dmvXKp4QPoBFxNNKpAXyvZkf3eTBDYRWmdc53K29vFCnJtsx2HpnL29YzXFwagGDMBc",
  "key16": "DWYAXZhEzbSMXLp2ze1i8tp6HJsgujKauNZFtu3EYnaZ8h3x6snmu7aVrrZx87L8xdKFfNYoGzgjmvJHtqbVctG",
  "key17": "4sMpRbgUCoMpgKebZbMcAC3Srg2HUv8JgYFRYPdUqqWkddqZEXPZBYkvfryYmWE3cPaBX4hXBMbZLAANdSHvKyHg",
  "key18": "eYVzS23KUoj3d2c42VpSSYkFKJvTZ6gE6FmsmRBtbwncY8FjdHqMKYEb3Uqymk2H4dfXaqXGojFfxChp1aKBBjo",
  "key19": "3aMtQbZx9NbhZwjynKA5D5TAv1DEBHHpakk8Gmkp344ozsKt7W3yfGDr7UGTST1373KTuA95VpwNeXssKfb7wA65",
  "key20": "26pWcqqcJPVVvu9ShzpHCFbButWKg6siUWMKta6SyNneJhEfLoEebogxZPCKMjgncdJwmG8KHBu3w2ewYi3Fu1xC",
  "key21": "4em9R9nULyiVbu1ejNaSP5cv4kymFUtCFXmdXwh7FusSkukd5159PmGwKcX7xAsaSkJnkU39nwiDEnmq74NrArvm",
  "key22": "iYNwNPaTP15mVxNjJXx1CVxrrM5VmaegSQph4tgKDuLvEVi8wmzFhqBvF7W4nBMPEXcF9TuybmspoHu73teGrur",
  "key23": "a3CzLua8CVvmFibAfVsyLxvwX9jD5wfPovEZpfnfFE7PFAvkPXft6JV3hxxoAHQoZmvfqGwTtzrkdX3teS6RS66",
  "key24": "28NnfkdxmhxRgduMg18grvUfGLmoY4nqGeTLMG1iG1zVPeDcmL6bFJxDH5226L7eXKdab6iH8E16VEoZ6LJbrovn",
  "key25": "3Y6ApCPUyvGsH52y6waP8q6J81M7kfL79ChrU2gX2KFyL57s41qXktb8LyKiQ2YUDTz3YeNgALMurv6NWR8pBobL",
  "key26": "cFH1H8gzbjPxb5L6JEasRv3E2L2kYGhBqsuiNBpR7MMU42rgf8g6YkrAkMfhVQt8WhZKVmJ7vChyRFyB1nzGgUr",
  "key27": "w2sdY3sUqftNTsME9ehTx2eYMzxkf1Puvunqf5RosAgZKrW9uLzerSU24ScdaFfQY5sp2KjVVMe4QUtN6YDdFgA",
  "key28": "5CqEnd6LDVWojYeCaZT6SEtrCcaCvrWtxMxbsMUaxdr69FTBWq7CrZF2ddQMeB2Pr1c5msRqTFBaYUTv7Tqpanpt",
  "key29": "2cfM53fv1NaXKmz1ixyh3qyYKaUBJjdTyQNk7muRFkP68TVH5R5Z3cSy5baBDEZPFedZHYf4Q9jtYQGvkShHhfWZ",
  "key30": "4R2eChf887cQ3hvmLae63XBh91fELKS5ETYXuY2o688ds3c7GmJdTFvH3qX7sRpbsb76HhHFvqSGDYrxhu2AC14G",
  "key31": "3vqBjj8QzMdAn2e4cmUUUZ2aohE47hcg3bMn9b6TK96g2ifu6FQUh4xJj8ScCaVXwS9uQzG4tuQM5CCZRZf2ou1F",
  "key32": "5HfywUxQb46HGsGZYFFN1x72sHFGsUzo3ULD4zpjM3jUZsLEyfzz2RHA4EFmVLj8tgRB3kEXBDMocrjqUPWLoNBD",
  "key33": "642N2iu3PCMHRu5J2CHoB8YP3TMbEVTBnEAsSrV53FqJbVmRe24nvASkE7rAP8roifJNggNibEivDkrw5pwpRaeG",
  "key34": "4TRDpXf5T4qxxRaHU7ecR7F9VBbtXjZYUY2BvJCicytrN5bixpFe5VGE4KViDZaWKSPLGoAyRQ7rjnxpknyqqxp2",
  "key35": "5oHWrLWxfqJmiSEqZrkjB1L8FsEUYVtqFFuqjrQ1mAKPNmg6QbtHetpjsUJDVaJN69qJDxZyfNiDZqkRUrBh2szL",
  "key36": "5tkun7zMXxgTYJL3GS2T5vDfi7c2rWqN2vMJVqttETK5SyGWknF2pGNhfTPnGan7PSYTrdCcXGay6hV5Ds7RLVww",
  "key37": "2WGyQ9Try6h9PTCL1uESq8oWHm4H44e8Bj1kdR6oSTDwJG1bpBYeDveA3S3FvFRrFh6F7qTECHhWsDU6nUznFnvS",
  "key38": "4czPCBfALfgsGECZyA8zHReSMi5GxEyHnnkEC2K6wmzmMVbaXp4dRrhYtkuphLG1b9TcH2fpthyn6rmwWXWZz1gX",
  "key39": "3tg2NYkLWXLeHua7MGviEfWWnAUR5F3SFHGf1y1dGYkaN1W76ZNK5TrBWByYsySgRJHrXsvDG8Hsz4PHXvwNz6y3",
  "key40": "5o7hCNYUaNv9xWd3EuDiX7Ba3U8XcUxKwSXMDBikdPgiK9joFvaCAoHQnd26NmGobEi6fLRmyBPtmju2sLqyUcXN",
  "key41": "xiXwscaZKAwv1iZWZuhFsLWmEU1gDFymMQrKqojxPeSZPDSNkwumFakTg4NFbhWapwoNNZ1ra5Zdk1Kn6GS8jYa"
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
