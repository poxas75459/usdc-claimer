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
    "2mTGaSoyGW3M64mCstaqAvxgS9k6s9ZHmjoAmfefYWNQareFW8UvSUiZBjyfabUZifg8ZkTsKHbjhUetjzs3JzRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j7LvLcDAvUfbr7P39FtDh31wHx4vtYHLewDFRfqHh6TWkczkNPhsxbM3GCV3LNTMkXqWG8RAPXCnb9Gwm43ZxTf",
  "key1": "5Kehx352T484wt5bnhTarYfAfE4K1uUdiodw1drJy9rxiquoGjtRyuMuw2YYaDhk3qKH4ovxx9U1rWi2ZxTN2Eqb",
  "key2": "2b3hLNpCrRLTAeZ2YeQGiLPayHRFZBPcvb3j2qAhjaBT1hRgzwSRH9QRsCEvUc8pM6e8iPSfDMaTG1iTccfoMtpM",
  "key3": "4udEtRrb17yRm53Af3YLx9D7bGu3XXRY3u2NaRmYznR7Qb2PJcxFhPURurgeKhUWzV1Us8qag4VjvMWZq32RsDid",
  "key4": "BEFS6j2QNbFfmbL6Ei2XYSq2UAvL96bth8nmnAsxqLDzLLchCB7JERhUGYCiXRHXCLDYu6riTNYssAfEZtC1ys9",
  "key5": "2EbN4ph5w57vJEd4g2p1AghCuqhTew6oav4MuWsq2ZvUQdXzAvGoYPnJrecRBLG4zXeJtrmThHwd2M6bmxWhnDk3",
  "key6": "5Tub7QPjQbV8t9rEAEN2AyvUaSUM4miv3s4vkJSmt52F6QDbRM8WypRSJLcveRt4nBJKJ2uCh1roJP6cc4vErbVK",
  "key7": "39VnYNuzqUHtE8A3VkPihbMBNyuQ7GkCKWKQpJM6EHzN8pkMXV6JY9tm6PjGgTgvMnr7oFnoDXbGX3dJmFf6JUxp",
  "key8": "3wHeVunZKU2MhxkMTK3RnNzTWdYwfUBQCbneJc24zW2t11ft7DtqyvSUkaCY2gjKDYBhaLt8MG92Q9gWqWY2piV",
  "key9": "65uBhgXgxRyzrD12HmbtcXRv5DD1KiiUk5sQPBbZfgnZ23mEyKfRsynf62EfkrSgYiNCqLyaGEKRWxhWZUzKJbEt",
  "key10": "UaKvcXFi5Jr2etdtFQibHCzScHKRQy5pecP6E6StKziudG8C1GksNpgA7ysW1rjrmVoVmgjJsQK2cS47xhvuK8i",
  "key11": "56hL6fwjV8y2pMHg23Zd5WE4mN5Ma5inCz4R7XCB1rXcAxTKdkvzGR1LDqtasvUMCAGCEKMNaABdjewmEyaA4rgs",
  "key12": "2ASkFG3ctjqHqnAb4h5b1qiwQtnXNC24ATJp8Qdpm34e9hduCwFnPKaD77NAJXkKdPmVbhW5cELhzw2RLAneyyvE",
  "key13": "RiQ9BPNZDqoTmb5t9QQq81i3E3Cfu9eZerBmfLrDf3A8BGSPrenXdkEsd2fZCQBvMbyzYvTD8RDKrK6KPQaGZPk",
  "key14": "5tvGRZyrJsEoKJKLT6kfq74nwemDp7AbFDakKovDL1XAtoUK5u1HJ1hdD9HB73dCxdjNcWuNFzzwXwK1uPcCRXFF",
  "key15": "7MsGCdtLgsW1xS3oL4NDnvaV1PJ5sXmaGsBRrjzwBn5uhBd5zsag29o4iKf8YkJa84BY8TbuD1kU6E8fJEFQu3Q",
  "key16": "4J1evbg1B7h235vXwk73eBWoC2TkLk1Fmti5hH9BLwJhsYZSfw9DwQEYsFYapqprRnuu4YEYLJ38sU4pb6wwr3rs",
  "key17": "2MzzcUXcVkRHEYska1QmaFS1dLrSc68F3GsEwHvdnZ6aYXGD6LyJFYNzT6EnjEdMCFF1zcYd4tBoZUPqk8kusG8d",
  "key18": "2QqnADDsoGxM5r2JwHK3QBfpwcbjh7G2e8siA4jB3wiAFVP58RvXPeWx5esgWBqsNiswgT5r9Lv79Psjpkxr85VJ",
  "key19": "5Yz66QDcKbN672APymfzZcBqunZ3mzPXoWwCRhre5rt5Z5pw7EbqZ2SC8bM9A2hJNYxXi9sLnxQa2QWTfJQ4Ay6M",
  "key20": "rBCmPEEKV8AwHbTvy53QbZr5M9Qp2gn3kTzsZNqPA7kfPjWToXWKt4LKDhSF9oUjniSg7ZVADdpkzGD1s61JmGB",
  "key21": "PKTcPjCeGNK29EPgMYLSStJmUWw5nRsfmrbHnJshYDgxnMP47r1fZCFHnDP1dq11GtKDVjhoLYSTTrGR4hgYsis",
  "key22": "2AxgQo7M8aVQUg74phz5UBP6zoCE2dUh4yC4EkjjumU6W2TXba7VW6oK2N12xdBzNVZp3gDRWd2iMyvSC22FaE7D",
  "key23": "Vg8WdAx8PGJ8M5KiXFp15d5SnGxnCKu3mwY29mhawdQ58cGwMFbznua5Gq8EaoqpmCFetwngJ2zLRazx8upELK8",
  "key24": "4TvKKZ8UCJn7CochSnH94YjCzszEr8eZEtXunNUh2nqwWXnsWt6BTBqCkAGRGLiawpdTYWHYUuZg187STs9Mkx6C",
  "key25": "fLqrEcENrUB7s9Pezup5oJPu9dPZD4BhhYfR9RJtxowtw2GE7GCPhCyHumhXtsmG95WZMbvSBcA9maYF2PFAurw",
  "key26": "gVoiMm1GZQnE8GGfCqmu2WuU7GcUjg8r1gwk6SpYcZBubXnMBbuH12CZnpSgHchn2UGVqXAi2RFEyWUVuNjb4NH",
  "key27": "3pKjxyj2Y7omUG7R4TNmKzCgBk63fMPoh6QSDLUKbmAefGuLb6KTXyhHoYPfez3b2KPqKtVWJzXBdrNsTX8sKbyb",
  "key28": "2J6bZT3CrKgL82QbzpmYqziyfKAoNCeh4Pwc1LxBmwcrdWPs6BJAJTDdvYsnpBD6xGKqpStxjX2Np4Dwr6G9jXY9",
  "key29": "2k6tnm847r2ebUZkwx1DMLYSzuz3sxSjFwTPE6JhooVU4YvRbeNdnmG9DVC7M88TmWyxvNAWZVmHRzXYZYQjLgxC",
  "key30": "4mCZZzgT5pARZmvxUTZh2s4zKQs94AXj89RTY3iKbD1YXFKq3urU9z6sV3J5MyRHYwZJTjLhxqRUV2boWQ2zzDHe",
  "key31": "4E2Vs1UXMJowV2zxbPX8ATatdpgff5DicRuDzu4qXJjwSFDR5VmwvuvGH3yBQChQcFyDoo1W6dthwizxLLtWqAup",
  "key32": "5nw1mSNvZz8SUivgfZf1djwo1XJ9kFzEhSdZGLZrnw2cdXwrRpGhFW95cTrLeG1bJWFeCo4rUhccs4JVQ7pkUcVc",
  "key33": "gq1UbC6bQG7ekSge5wfzuXcraUtzbu9NQ6jaUh8ZQ16EaLWqSAWzADUDnMDGghHVaTduCUvMKbQzxsuMiwndVo5",
  "key34": "5ThuUSLCVY9PgYQxxrkx59X5DJr8ASvoWbC2wBUpHGseocRx6GCixrbCYkoVxJGDx2cqgbU25AHc4h9FyEHF3WoB",
  "key35": "KenCQELhmZpeoRiYsadBiAcvE22zA7mak1j5XZcci5jrAdi7TangnYrjS8C4Q5TrXojcvHg6YbwRwcmHz8GE4aD",
  "key36": "4A3hMChAdNk8h76Hwj8jr9qRhbM6tMkmrvYaCbQLuAQ5Uu3Qq5io2NFtquG2gdGSLy45C251JdQPXjGzvnJ3FFsm",
  "key37": "5ib3WPDXBw6RXfQQdmZhBS8jmawE44ftazJtcp9NrqZ4vaB4PGp6UZiL61TMPiDqnJipPYfKuUe1iwyMuN1Fp2gq",
  "key38": "4qgx9cs6YM62nLGabwAe2SWBo28p1W6XjnDT26nNTbDRafZ57LZ46rnSXr6gZNwEE7ZoiuX12YgwhxNGWEsrVpkc",
  "key39": "3S7VRNU6W1qTuziWXyX4LdRjhg9i37rtQaVEv8tfLEy2uP5mybYzrQ5UL1Dhnwu8GFBFPU1b8uBBHQDM6gkAHHDw",
  "key40": "quKcLBsXE5EeJwTxZ1wpYhzk1pNtHuXvCLciAvVUVb4i5U6N1NPhm3fBqXtTVYr8dbQ9hBkn1ndZe3zxTDTMm3L",
  "key41": "2JfbphuiHofF7A6RRhEdvWy6hwonQsD1dD7kouDBhqJ8y2g8HgKyfXHhar3ncPzXFHrpon8iH3c5nFPeyBxRvBoT",
  "key42": "57b2tc1ecaib85pAboBrVP8Sjnpm9CMtm4dBrujs7tkMYJfQxeUXuqQfi5TTVQsxYAHbk3VJeNVN3brAfcgBjTVC",
  "key43": "4stbh5M7hFR79Dwp9aSmbzwxnpckXxzXw2izFQbrebxZbtkPMKgWLVU8pmd5RgLvgEibzNZBafS2mmDJjRu9fRZb",
  "key44": "HFC3a2A8D7H7fPFRQAKyFFnu1UQAvDGdGvuJye3ZdNXe2RQ5DgvSkGRVrm97tTjDu1wHXD1TYYW7XBoUGqrB6En",
  "key45": "2jBtCkUm4xYnieohJbsnrvE6EC2KnY7GLDBsSHNJbVLjvAAPB6UN5RUuNaNvwoKZozGLUm2kAViK7QnKwY5MLaLJ",
  "key46": "4EeWffDUQtmUc7LQrqLgfvtxXYrFfvbFzga5tYhdSy7RyHzjMeXafsJJHMBKFcWWf2FGDYDvRXkajm8Jh2pwMKqD"
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
