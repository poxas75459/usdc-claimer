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
    "67oT2dHvBkGS3iPBzmszjf4v4ET4p1ibqq4WR1gq8z1E1J2zs2YcDYoUQSkDhu9pvNuiJvGdsVutfLN7Dw2PLRvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PhMv7xS226P2uxtJLuikdt7LgGYRApbA7wwRAHTqVvjmpK3jqJHtvY2DcYtEtRofGSVLygdBbf4NhYRyHHGTBm1",
  "key1": "46q85XCdDs7SjmF296AxVe2qVaEKakGfZC2SQj63fFTZzYCHrJoTEbYyaiXNtbhQ9g7h1j2ApdTjqQvm5F6PjjgA",
  "key2": "2PXthTN6m2M3ckKStURMvYSFN9vZniFq2mDJKBVyk49rYuFYRvfvCxyUvY93rBzXN4ujyFZni62qoNi1ThYMu5qF",
  "key3": "33Y9SbcXPKhey2sfo6PaKHvtG2a4grJLRH4c2WMBoxnkCsVo3VTSAN1Hx8mp3LdBg5r9bFV2kgHoEBbJbMRMg8n7",
  "key4": "5gvL9kwFjiMfPSPnEbTu4XrLyLgzYvjGmPLmzvXEa9Dt7DUNQgSiY4hBM8A89VdriFzLyJQsAu1uu5rP8AmsuFLC",
  "key5": "2XQxBXw73xxNsikEn6HWpiXCEUVJsjePGcMbbfBm1hPC87LifCZWkKZdAuLF7DLvMaPAk2MueKEdbeUXGwpeMQi3",
  "key6": "9wzJFA6dXVs8pP5PmVLxoPH93hfReNGCLa8nozsG2DZtbM7P4tmZ5NxuXyJUCo854YsBcr5MLDzk3oShMsBGYxF",
  "key7": "4bWiVp3YoqWyjgFR3z6wdwc7bDL5VsBECLDzzETgxexVWG7MDkPY752LdnWDansvqNKk7RbjxLwdtPsf6Qz9dU8H",
  "key8": "2BNdVCCAiR6xohmumtvizwjSrbBw2NUDCjJuxQpVtZ1zzQdcWgonRyZDWjjZQKuXXd43QybAqpP1M6SSsnR3KK6L",
  "key9": "51r7RD9BZPgNd9f1tvMDLbT7msmzHrKzJV4pUiC1LAfeSWszTGm2npYXF4voHRBMaSReNaW3wERKgFSANLA6e2GY",
  "key10": "otEfp5em3eJK1R16teDX5id2zA1bzESKjwFuBfKKo4Wg6K87xFnoRMhYH2o7CidvAAJoTkw33YcGjrXqtyEAwyi",
  "key11": "4ePC7boaizExjbGWPpsTUejvYvQ8hyzkUv8x9B2WvyTAEdcr7LQ8Ze3F5J9P9DpYfD2xN3fbVAC6xDRAUc1hpUw5",
  "key12": "63Ss9ui71h2XEvz1MievZxim9C4KttGVW4NBfX5Uytnjatc4jwYeLLa8AYS8i8oB3R8QHGrY53by2YdLhm6LiqQB",
  "key13": "3MvJCMeHca2Hte5GffSBNehhqVsUps3r2c23SRQgjDpheAjYqywkExHZ7a9waQ7mYwVmP88fnoYMVzhVEikEvxGP",
  "key14": "2Xp9ErGGCQ4yRb4HRr2bYiMk8asj7KdTvVjAFG8SfT5eJ8p3CV3fDi95BHejtUGmvavEBBLJUiULsTjkAL6mJeah",
  "key15": "4Bvhp5juqBnpAfkyUyL65MWUkUxPRK9DhfrR3aXA7qfuWyM2K535XvqY5aXkYHh53txD6HWWP21CSE8VaKZyENVZ",
  "key16": "4qnf7iLe153yYxwVr2ergRsWQK2NyfcJ1DpJeZ6mr9kN5P4g819Yjf1y1UkQyidbQvzUuTwH6BUztRXjwJ4HStZx",
  "key17": "KdfKZFYBb5AQHt2P2FefiHZje5ozbJvJSBugfRJ9xgL4PHNiK2oAxkwpgKJcH4mzNyZ5Cc6qdekiwVavjpPyPxd",
  "key18": "vDsJfv2GvnfMtLZU8iyYMX32fnpfnxLERmjEznAv6i74DtvddUxjRz4gUtRgMTjSVE1SsJAbHHF32K3qbRBcw1j",
  "key19": "44xx5UELFqLr71upR1QCeypoKmZBqkDHCUUpDbf9A5Dj5G2ZGHwSyXwhneqrkDviuyJji9nFrLrP8LePR9rgsuTs",
  "key20": "4DxfYHcgPhGiEieJUWTZmkxsvxpAe34x84iLfwmUaH59D6s3hW8kTb7Y864YoHt5JKnQn3cqyjv49Ceju4ax74Xa",
  "key21": "3PncNncyHfASmfJtLPnnixUuJ9MUZCYSpf4ZfkYjY5xXELagfUEkRfcjsqcB3b1zK6Sv6pj1SpFCFKJAcV3e7tHi",
  "key22": "4ib6nThGhX83QsGfLu9EyzTSXvny7Q4XA5EYw9swJ93kf17p43Yy47hx2xSHdEFsmhuYYRZGBvttzUDkBcyqHGDj",
  "key23": "4oTBqzQ5Uz9ubasMB7aEqsrHJznorw783thyqTY8mLdvorpAzuNt5QgsGmYQnsoxSnzQsafSLTomVnv1koMbnBn2",
  "key24": "3WzWYJ8HYCvoS6TJAzcZaYzvzvcYQyMuHeFW76WY9Xf34h642NoKt56vcVmixUCC14a5yBiTuZWtuhgNb3JLqbr7",
  "key25": "3XsEERdx87JzLzQ9NbNHXpGd53gUYqNZcCtMp8ZR9fMpHbrzf7DMiskZi7nQDZygEXjuBuT6dUWcpA1TYcszHhx4",
  "key26": "5UExsrDPtV1esYHAv6KxysmuWzqQoV2aEfmmnqKXamufnvYryzy9daxZtRK9R69gz9AZ1AyN7J1JckijxdQxQtJT",
  "key27": "48LwuBAca5MKXPUgVi9ay9tDw6J9Pkirawt73VToHUNd1ejeFiPqdsd8F9zSuWxNP8UKL9EfqKb4T9ezopV4njRt",
  "key28": "5axbyzBohPAU88p4jDCSUbwDFW7bosqjS9rJZuFez2qnUhPnS4acPQTCuLQBvgjVrUj4bcGpoJYWvCDYrML1ucMT",
  "key29": "5uuaTPEV9jtCNqUDCbe6fVxAA5h1tV74bJBP423TgsstDz4MNKDkwFnwMafnXN5veUUkuyNLXM1pgYL3SNEBJnQW",
  "key30": "3DhaVEPDR8ESUtV496gmYLnMWgChTcC1eEswB6ZcaQSwJPayppBZmraUqNWaiyqz8pq7HVQzv5Bd1bFTEdPvGZT5",
  "key31": "X4heXQf8prYDVY3Wi6qQ9Zhc1SoLaL7fHkXjzwUQwHXvY26ZkqToMvHhh9g4QXYk9UStnTEhDKBGGwRxKKBiQXw",
  "key32": "37u2YX7RwwfS7BHPF6JoVDtruBYWSkyNpJj8dhVRxT7DZdXbiSPe19ZJh3VqfC2eraCHcihvwacDQs4A5Mac8h4g",
  "key33": "4s89DpZiPtthL5nPj2TE1dGGQwpx4FRewRrokPs8ZXuaagmnG4tugpYSjadgUtKUKCUAiaF6pEJUW1ENF643ubNA",
  "key34": "nttLKeU3HHrZB3xozudwN6AUEvyNeYQRxPVVgQkocZFWj2BA2pcUCzXvt8FFuthoKi5Z3poFfL4K2xP3XvQnnUZ",
  "key35": "2aSiSHmRY2sXM8VJVmN9YRJkTKGvWUhxCNzNyHombjmHFamBXRhb1MUrc3nGNpUaHrQZ3FM8ffNJS39fm2nEN6Ru",
  "key36": "45tbGswz2ikrDduW9HXnXvK5tM3513CKG5tUJT6b2f87TNeLKjhq2utA7tvMLgLYnEGHKhzA1S1GoA7PA44HsNBS",
  "key37": "2wqsG8HqCrwrbw4jma4HGCYL1EZPHoUNnxt5mybiWXENhH2ef3Jpbs14EZEVRdY7WvB4USwmxwhXVEHLT5ds4FbX",
  "key38": "3b4hsYhf3c1DnnacM9C9sSkbbLz6MGD7baFmkkTbcZsrJrFpw766D66f2JDSEtVuNx2H7pKBk5N37TM4yzGEdEuN",
  "key39": "4vY7RqquoQJyY5SsmW25aPP7m62gWKUE7pqA9Ye6dZ41WxCD8JM95KDNyApxuKLcYRLN7L5L2jfx2zBY81xoXWWj",
  "key40": "5fhHfj4LBKiTR3Euux2wcCKAjTsdmCqmYgDd57rTcA77JnUtkniEEoZwucYSHBxhuXcWngLN1kj9paYG4zaRowkc",
  "key41": "4APF51PjfABLaVxUG6K41F7nP44w66HPD54t8jgDw4qmQK7EjaMgUtmRfRqzKN1DX7tQrrwtCyVsV49EzbDQaD2F",
  "key42": "3qMDbcyzZK2fEa6fUab2qn1gKmyxDg4bw3T4xBH2GayqAFUyJrD3GWWtJYeSjnF3yeUmeLubodru4nGChp6CHyX6",
  "key43": "245SxpKDFzRbe8sazdDHqV5EhSSqmrXj8vevXzRfSnKyuQ3DfVoEEvqxBv94i6caqxgNHfgVavRmZqUzgTfrRMpx",
  "key44": "5UFvkuYCdcPV6NJ2dCgVQfcNucNwABpUb6NJmKkYcjNJQS21DmjfYjJ38HYsFRD7cDFTk4XBhxX8n4ugw3oz3naQ"
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
