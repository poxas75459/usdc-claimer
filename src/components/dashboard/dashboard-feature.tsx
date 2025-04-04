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
    "33suu8oUxJTQonpJEf2tCALzA1ZjQktEkjp43yjZWLRTPoinUdTppYs2TYbJGmy4uVVRggKumiMbM34dH6u5vExK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iAwT88t4hQCijcEzCfFSYJTFkhsrscdBkpVYXto4boSQwdMDg1LtBgiQxWoh6Hpezib7BLQeV1xYrzDFuVWjbyN",
  "key1": "4pLTXyy4Rtn13Fc24S5euHVZhR6akgmr4hCdjXR84w4PhHx9rh7rJTwRxBSVh72gBuMgp7xQezBewgV82UwcuWMw",
  "key2": "4nppUVEQbjYmFkdojmsQ4ZXfS2tz6vkGH9NNJKs25qqqB9rphsNrTvLrrU6K2nAQ3SwsybQXDxmfU39NavVZrcra",
  "key3": "4uwtWPX4rgwEhUYAygP5fjEkTsiUJ3JJsBN8YUBdLDYufg2cxV78snkoh4HDtN944e5y1Proxp9XRnB48Xj1wERk",
  "key4": "3qs69YM7tVDmb1zi3JPU6AQT8YCab7gTBJ2Qs4q1NdCvm7tSvjTCTMniZZfYa6YaT12hzmhYRpfVoYBwQqFpGP1w",
  "key5": "55C46DBzWaXqXrRBMoaJb3a7nhPDQsGKez6remxwpZoZw7iV95edYgcqyWMYoLQ7K75fvEeXHGTh5jHQ9BVfGUFm",
  "key6": "214qQC4AcBr5CNRxXHWfiCmwPnNngbMK2DueX8HF5keeXTrEjGjExdfpsz7XjCZhx74ZbpvYzthB9NZDuJjUGXcy",
  "key7": "3vcKtue7WPfU9AHJRqdD4nN1Ehhj4mBpDK9oe8cMkB8SeoqM2AViGGUz5aWn87gdF3rRFtEvMxRdVfQTY8zCUSFD",
  "key8": "oQ9weJDDGofK8HeeLrYW9gwdTu8rn8sYj6tvGKDx8iY1hGSUopGRifFxxeK8Y9YJBFX43iQn7TKkuRsenRNgyrf",
  "key9": "gFqLQkQ9pvQ7jSXWaZTuL6qEepJLDhxho3gm2zYKhAa7bEVXk4zPHpbsQxuhxJdosqXL9Dx6DaRUn3kxG7T4Nb6",
  "key10": "MbbLNkhU1DLAWZKjHQuZEZWfXT5EWmtbdk4jZZUhdjvHvwk7rtTUde3E6KMfu91zzVrjernhJcAcHaU7WEksbSZ",
  "key11": "53Kd6pm9WDpcT78Q9BFB31AKTvqQm89dnCzAo9YafNbgeDEjgWa8V5UsAbTopxBxV26tuPbLKSEYomfU3oTyYz4p",
  "key12": "51PuZEdzkUe49Y2nNdrAYGoFzSdXKt7Szc4YS1vNSxpCtrTrjCGCuC2ZimYMRXmodiPxnFB7B5ZN85dh4Re3mAiZ",
  "key13": "4V8fxrmxSvduFL8xAw4P4w5cGiUSJLmfm2R7u9UdQeQWUAatUiZffpcvT6Jmj5g9VYJhE3ZLTjetcaFvaEm3cWXg",
  "key14": "26F45tzrs7Uh3idDQsRx9jj1AJabusK2tWetcqKLC4ie8kJRH8TmPFocTzswrsbVmUNg9cubmHyzzYZc1KxNPvAE",
  "key15": "4fXivYbws5CVExg8SUE4yraRtuFjdQoCF9RgoQcZASj99wa9XpJRNp3QzGM7dwMZthNwYb19XVHmzzVaPzmyzuDk",
  "key16": "3Cdm9QqvVKpWKceJZsVgACLJMjPfowaNMh33caR3rHk1dYAzC42EhocNmzBQiy5ExFUGXcBFAhWt9BYLgxY3MJ8V",
  "key17": "g3GyEhskgh7L9b3ncY9xMZfjsjd1PXxa64vChGrcAwTW3zao3fEmH6cYWhAcTgcv9q3z2X6p8NYLnF7ihWowLoC",
  "key18": "5XvXcRb9AxiFYEigEMXCs9oo4DYCRdB1XQZCeGZfaGjGGb1g2FvHEoMiAzFD8xYh3Jt44xVr1xL4KKNVc1p2jFfh",
  "key19": "domTPSFkbisuDGA5fdXNxHyM8S3xQXu4C4SetLDdCFKLoZLmMg4bz9PNdk1xieRQ8MfBoTX5ey2GbWy55cqwo13",
  "key20": "5Yi94rTgpSKF5HLZQjNRDE9EaxxiCaXPJUbFGEsDDK8kggGqVgN67UNbDH1SM7F7gKd2rNQcd9HssMY8TKTGuoUN",
  "key21": "475ZnNshpT5uPoYy11TiMbBSgeSh2yqXjxgz5KS9Rh9eBCvshPCbumSUyMgkezA9wu8v2Yh8XJm7D1uC51L1aew5",
  "key22": "48hwdtkQHVBYQAjTVKFbzCgXfUCgCg2feCnF37YRu3cex5QMPbamRSAMpyVfFGcenBD58gALKWpKYUGn1w3xWwV2",
  "key23": "31f64hKvK4EWRWjc2jArtZLua1C3Xe5WB6FAS8drXuzHKbK7Fhz2Ka3gLKsv4uenkVnxPCnkCfBq2cgkLj2epnVf",
  "key24": "41HG2WmE8nEtqHQ9WMVkaboXu5GAHDcCgympT2f4ZgNbx2rR6XHnUF7ccUBWSGWHRMgKtf1PzhqKtKyhuu12vqUd",
  "key25": "3Qv5UH1t3ZGjg9KvU15dCho8HwD9b5qMJBPvXP7E7uF4kxxGdHaU1YMBJjVu8bmVrjdsQNqLzXNfAXZevkLpzJaj",
  "key26": "2waqrZjWMPshT82Wpep55h8osQ3zYUzBdkBTtSzXxeWMjj9r1k2Mp6S8AnZiwktvi3LYVRgsxbG5gBibL3sWuyG1",
  "key27": "5PbxmPDp77aZBddFs7CL3v54ggSFDqf1Pki8megzKYDadTXgd6fKCXpypNi8j39RZEKB9RsQx7JfD7X2r8xu8TLH",
  "key28": "3Hs5pTnW1trbeBh8PpF9YrqVECXc4VJNFebRBHxwBH26r4HagBsqUzxs66MkS1wRVgm6m4U6uMTt7CwnEwUsdByU",
  "key29": "2yapZPJBTJDBbSHScj9kR3SNfeNv6iQD937qNDTiGVnWgfQUq6BdkdJUtimXFftMuHfUTj9WnPC6xX4amUsQmxR5",
  "key30": "35mD2RpRKuvZbR7NKDPt7pke3K9uLhqimwGXswdNPvEX4RLZdtXhkXxJ1WLMgAG8HPBy6LnR9KkpziHTpUdkgKWm",
  "key31": "hxDUrms6pUHQTfrGKDGVo74LaGhnQaF2K6jnp9TUrDj1cHD5Lk1tmC5Wuwafn4feozZ3ocEguBe7W2zhYxRwxk8",
  "key32": "5ioD1QQzQUmQzr5i2h2GnqN2Gp19Ar9MwMQWToA6o9sMChzsJSf7aQFtq4RmKqC8ESfVKpbJTKuVUj9bAcwRAYUV",
  "key33": "3YsSCWuWhAZgRWT2LvY8Ekz2eHsEYHSt9LM4JJgHTD6yDahAMgdSnTAL4D4XNZigdoeJzLg7bcpGCurh49XAjjYH",
  "key34": "FzmH85fgaaUGjDpeiSej5Dedio2ThBwUM14fZSwYxQ1gDKpZKgCb7Yt59QM4fJsm2ETFGc8DKaiyP1rYPbmDydt",
  "key35": "2PK8TEE8x9L1KRKuwpKauFrGNfoKQo8Bz2wf5oX1v9ggoNEt11VGHs14o8VDUj8AUuCFHhQrwCXqwHcGSLfZVbSp",
  "key36": "5TrYMEdkLk8pit246bXBB1rVZSgrJWbqpWeYjh3KKdrXawAe3UbwVi5eB16xbdTTCfRw9UWKkFezwPrzsrde6yN6",
  "key37": "1F3bLevPJz5VxfTQvxiAQoXcVw2Bn1WGcS5DXrESzCzW92DUF18qtzpYr1ST2xrj1FVu2PWqsoeNSW4cGoCH98Y",
  "key38": "53e7uj4uPzNgpwQmnm4CuLTCE1MFMdESTLzkLEM97TaryJY8BCSQTiC6pf3tu5BzDToEs7cqf4kxbfbVnqXjNKkr",
  "key39": "2qekqCMGNwJ6SZACSeSDfm3YYzotQe9FenB6zv2uWP1cFR6CRaDYdbtYmLwrYXAa3wpJrgwYDDBgUvkjiA3FRsDd",
  "key40": "icmhrjdQcebp54tDZBfEwbg2c1G5M5eiZv3Wxrj56ARxKK5VgSzhM8sWonrLEDi34BRyDAMBKZYK7L8RrsJSfmC",
  "key41": "2NKemPyiMPAAVeR7Hr6aJxRJ9hewU8fhw6Dtm3ujXP4NFjsQ21nfdNqwLP76v4zmVsWJfXUZpbNnickXeVoEerj8",
  "key42": "66VScsvf7PU8qKQKytCahJBUGiChF68fdk8w6w3cxQJDr3pu6aSHd6WKCnQSuBwftNcYxeL8aZGv67UTsQ9avMxW",
  "key43": "2XN7Rhe5FqZ5njU5HpFG2hnFqZ717jPnVUBK8BFB5um3tJ4AN1uPQWZ31z1LEDmVzE8b2e6q39XBYixuo5XrWviz",
  "key44": "4DudwN5i8jZZNvV2VwxERJRQwpfutubm264CKgXUgzejjQTaz1atU5cXfvnmJhZpPm4YU4NfyqxWxUVAckAx4qPj"
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
