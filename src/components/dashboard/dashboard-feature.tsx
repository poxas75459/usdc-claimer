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
    "2cwNnxe4JNbAqzhReaMWSDjajx5cQmAuKbAHnrVWEcQ6zJSdFyTQcrpuQGySPqRfNHQhPWnvLJyAbsNMCpTWHVhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RwUNkQF8EBo317brkQktumjFkUbMgHaWgc7TLcoPxw8xcShibrY1g8un75znUG2daTa43BxJ1zexqaWhdJLoN7z",
  "key1": "5qXcF3GjrWxHQ1BbjueoeSp4XYjS9ZrbFiZfuApt2U2pdaE4UL9w159wxr82whsKVTwGTVM6zmmRdS8EaCp2LmRq",
  "key2": "HSXazvnCcXQV8RU3nLU6HJDSFs2VrBomyWsNyrKPFFqR7FhWeSavXnCNMwJDXupYdVhQtFxH5EihKuS58Bm9XMy",
  "key3": "4ZHjqDYq5SRLd49eJwhuzCgWX7wTvZR1UfMEi7DvmWidDeAVjYopevzQJeNUWHctg6Gb3MwBKNvGezYdtKxRL6N2",
  "key4": "2S8zGr3dpiqkeukRvfdXtUqmQV3k5Ka1e5hsYGVvoKFsvYn2hic6RymjPkHKD1DjkiLbtAxbvucxJbkdjLCf9VBS",
  "key5": "2BBc4EDCtNR2vW5SxvH5QPF4HypboxrLrSXrFkhGxeQVdxsFtZHP2qtHN7yqF8WbHkSgVF6VGz85J33WoqZhEnLV",
  "key6": "3zxkftCUDWhLmAiFAAac3RCaHmWSRdCmChy2pggtzC9JTWpGNvuRr7j65D3anHieKe8aku9P9ZsR7Zo2predcBKK",
  "key7": "zd6L6tW397X2dMuYcsa1HeRj6Px6DzFwEucofjP4Sh5Z8nB5jgfhpfsMhHavrTqBK5hFTnVEuXY4sHjwRs7uZa3",
  "key8": "5aGfmToYtfp72mpegADQWKoHk5zEVKF9wLvT9i5URoS8oMG93Gc3bQGQUYqiDr5KYEwLAX6rMYZTcG71mDCNcF3e",
  "key9": "4ptE1Kvhm87mpx1HGLkx2YAhbPqfM7cJSFk5F34zRThvKkyaajKK4XxsP6AggggFruUYf3AC4YvPVBUyjqxmP4J8",
  "key10": "2oEr746xU5UG4sRiXep9vwnQbgCLiMqBUUgCCFRbAthUWWa4XnKwVJdALe79sQGtVs6yCN9rijibBysV3YrkS7J1",
  "key11": "5fhzDthd8C97MNx9MG1J3VFo63NC46t3XcLxCFBGbqbKbv6yB875QLfyYSmzqtkffRLtWSqvBjYZ2KW387Hm1uEN",
  "key12": "3d5whC3kjqmqAbtoEJ9AwANBG6Z32YwAEdUE8WS4oAmUsYi3yQGCMN9WUxS3A3oTTqN4tp7onxWpEgHy4wJ8XtKn",
  "key13": "5Vtgu9enST52mypLXtu14RvMtst2WGwvq98Rqsz8TokMbcxt4u6hqCQVCQELvzJMUzJonnFh12H1FCtQwkktb2ZV",
  "key14": "3ojBictyHPCJf4KreqiAQRuEjaThsFZdD3zrbhZE3XdNf2tTDZ6LQ32vqSzojevw8PcMkwCF448fMzkuBreQ8s6a",
  "key15": "2RAJDotQ3EnyUpxANdhX4EVyoo7iH9HnF4TYsCvWq1d2F39vQP32ZCbN5FaRHb4UygqitGMfCp8GeLtMasE2MD9K",
  "key16": "d8huy7GzopQXK84z775bgNFLkRag7ou6ELTiVFcMVGC6KPnvhSvjvLxKa2zjxGwiMfBKWAx9qNh3cmp1Zbc3do3",
  "key17": "4h5HFkkHHScxkEp7CLy2tdyG3JV3iLdmEAfFb5gh8FAQB5kpFoJKYY44JW1PX2jG9tJ4fohbaG47SxgNnf61qXvD",
  "key18": "4r5eothHUE9jgGtDEQJuCNvnARbSS39zLaqDsLGiLYxcETRnYzyZX2JGUas12mPYKUD5ns1dTZZeqKkbo5MkqrsZ",
  "key19": "45Vt348raxE26RHWRWpchBR8z43wFNHHF1FHJyZhJmKQdYNgTnsQNgbBWhCkRr7ifA4LswHBdKh7ZWgM3nWxzLao",
  "key20": "5RwCVD6hjN5NrAVJD8zxdpiFTddvMrvmWtoT9umzaHiVNcW23tGh7jw4rJNfb2JCTwcA5a1G3W4XqFtmzNGGFHA4",
  "key21": "25fMp73gLiYuwNYvkMEijSwya8PaMt8QjyXnSAH4cRsQFQgJFJH1r462YPtnkiSts9zGLCu1DFAsFsN8U9REidLS",
  "key22": "Y4poUgLXryYCG2L77nR1cBLnobHs675b9ksyUhxVXfmGFrVajAUHboobAzQic7H4pmapL4VsoqTt1821njALrau",
  "key23": "5uFdPFhhjzQ8JNEFyccd45j3pFHGG3ZCYwaDv18R4HG4qsABsvRrJ12sVeYHT6hNbnce53QGC3XC9PjUWsdXxZm7",
  "key24": "4jySwDLSkCqZRK8hkGHLqBuzBV3xvj5ApTgfz6dmWWRkPoKaRbG7B98k2g8YPPeYU6Pe1YuopXDkqSQeewiGpBKu",
  "key25": "3mPaQEG3B29UxgTaXJq8825kJNcL159b5oku6HDbnhF4K95uzbJatKCBoGckjscr7uPjxkNseN7epvMkYhBbBCVH",
  "key26": "2ACS5XwCbkb47bmr1fFYx48BMmtH9dfLTSbCpyBAjSxbprvZrTwr73sfz1gD7SLjNZDScgdKayRg8qAGUqffbrX9",
  "key27": "4jbFE6XDDr39s2SLcMGHMNvAc5VEHSE8wW9FhotiXHDL8BGSSoY57f98ELm1mUmSRZUFhL15NTvtjuqLMGKgVJSo",
  "key28": "669ypFtgrHF55reKfJ9CpdVABasZMQd12Ls1SPibmeaP2FU5x78J78miXHFB1YxZvXfzB8j1RyGVzsRrVhPMPT8K",
  "key29": "ddgCp7NiRKcZ4R4FT7soYLoMzQytREjThGtiBEdKiWKcH7EMpdFMuEsuAyCTrqqUQDpqUQwx4QgV2Hofv6mLSkT",
  "key30": "3s3spNhhz2NxStTmctSTkCQb9rFF98B4by1SyfGSBRLwxifYW4XkXopjAjhhkUuqQw1iGWyLXFrJBYnahzowQUsW",
  "key31": "5N8zPnE1u9si9mFM65DVPhgRLh8NdCKoLFRC3vHrWZk9YQt69tnrGgZbkoRUhcMKsjtCdVUNAN8s3m31HE9XCYgi",
  "key32": "5KGBx5M2gyRFGSHH15yDxRaWvpV5QXCsa6SDADW79bWsLzTQU5UDTHoCEHPttGmN72bDe2NzDaiXiWdFRenCeU6j",
  "key33": "1mYdQbxmsmbjJVyUtaR5dtUpAygNpM6MBuGFjAZXSqLGdjr8H1m9minJP1ti3R9E1nnYF8HZqESnagAAmqt3WVk",
  "key34": "qh5UR8fPh2DsAp3z4ZiyeL5vrXZULxKWSWTgzpwZUVC11e3H7CCgJYczMWCAEQ3UuDER8d31YShq33xnQuq6aSy",
  "key35": "6YkdK1Z3dh77k6WKcxVq9Fx2PAe33msn6zTgubgd1kY8WGCzFYh1TarsLed44KzvGj6ZmD53q7cQWqFjLwcxGwu",
  "key36": "4Ktcu9yHkSE7u2rTtgSgo2dfEzztLhbgbX3gC5e2YqfJwU5fiy3Jm5DdiJkNJcZrtvTwnVCZBxJir4mzCcsqJZJH",
  "key37": "5MMLgK4KakeXFCGUP81eJSnzg2vCATExSxxY7rDj2BVWf5wehwZ2rbtWBU6dCKkwZUHV2zPdpQo8hMNaGFd7rVji",
  "key38": "33jFigG8d7XeWhcP8uCvMJAzjGfGRrY6pK3CJeNHQnfgqi4tjnsQtQkZRrVRvnfrqjY9U5VRy6LvYwTvVYwEh9cz",
  "key39": "36ECHUa7FWwjuyfcXMHHnXpwBUa8ydVAcxjX6jRMYLyDc9wpZJNDTAaFZECgbQJB2uuoZ7W7S7USubJSv8st2LgF",
  "key40": "5UsDGAPTRNcsBGaUgHdKJZ5hF4tmATcw522eBj4jrGKYshosuPF4ku1khVA5W7GRT6aQo8uy2DZs7kJYu7gxwGLW",
  "key41": "SjFEV9zUmzjHURqY8VF2C6kGjkpsdDSg7EzdX4BSPcL6xuuow1ugXmjdL8tT3Mqw8tKCGgcNtsBiZ6RNXTbLpa1",
  "key42": "4f4RSAtzPF4hLGfgXbgdqtA3tcAoAzpvzsWWExTTHLwsXj9fWXPyZQiVp6TKGcA95X1Lnh9tqCf8pRMc1hDRbmSG"
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
