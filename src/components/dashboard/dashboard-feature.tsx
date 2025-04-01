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
    "5wwmWD9LqHKNhrUmUjShoy8H4yUb4giGoCjrjzPmhUc2z2YjQPsRnaaVzv2D2npsaz37m6boD86LxqcYEVRjvf9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21UD7YYJ9NTPNWmnjtMwHgPbA6FBWhiCmuccqB19MkE7XHLzNGvPoDBjVeyaa1c5tsXoP7Lyr8X5dq6ZrF6tauSj",
  "key1": "2zMDWKzdWUhePr44vwNY1oQ5hRuVo6fZYusA6mmkRoZ7uzsM5UhJgDfcfVcQqqcgt1ij3WrtJFZ1HQvbU4kM4Sib",
  "key2": "4wLkMsLrqUsTSaCbXfF6EBVnbpvATrWBM875D8ehP7vpsbYtAiv8eHDMvf41kKnJgR6fLLifRySAH9RTvaHxYPi7",
  "key3": "3XJGE9iUXsQV45LrHBsz9vkts8Vs6L92xY8cZ8mqRp31B1Bxs1HbrP6q1LEfgB6iEScfWaLJoGNsre37tTvZwDrJ",
  "key4": "Kg5DkhtVqwnHN4epV4TNFnHUprzd48pYe7hfQG8bfbRZaDxUC6Jbi5VB9hYtQyQkudJRcDaG6WaMz3SFgZECzCd",
  "key5": "4VmRsJEM3nGYEgPGU2dKz1jg795tzZT69cdjro1p6VBJTw9ZSxHHHaSYEi8ePn68p5oHgZ7AirXtybsWwmBsabqX",
  "key6": "32seCNFbKYdTuEWgpmAboDnq4qsnL5nuCnu54RJA8YdHspmKZRPDJBaGgfJANZ5GmarbccsY7iLsDzS9TEXRt9kD",
  "key7": "5QPLe7ffjndS3wGDuohneZb6k4b1juSbdN9J9ZVsgJSbsoYRjCf2HDN3E9phPuKN2HqY8ocDGg8vEVwN3rtjGq1M",
  "key8": "1xwpD6UpQiYJivmk2n9y6oX9xzh9fXEKkA9BKjqP6ChLZxjZTYxXhA19M2KFAfEL9BTRrFC7cjQUZAVEoo6FBQC",
  "key9": "ay8rnkFgc1cvgxFUUiCUumwaVmGqmgb1ivzm8QLcBjf68DfxiEV5Ls28s7CzNMqK6LBCkG5XkpGiqPAMBBL3tHu",
  "key10": "35jzGRWoaAWznqnWZZnnAxH2cK5JpQMg2Fob1bSWYxFWfBYomt9rn9UvrXUECHfBDPqMofoC6dLsV7ABxwWZ5Rd5",
  "key11": "2Ngh2iLTW2av7Zuhg25ES47g1fEsZR3iWCWwLDkRGDxt1CuqkqDGRG4WD4kckDRuZNgrXoHaf8EwarjBLKBwN5wf",
  "key12": "4i8s5xdKcjSmcp4ZH6FTZKKr3TH2f8vTcw7B6rPgApj4vBaP4cPAXSsPDNJ2Xy5xtrZNS6eP2YoNivM78wxeuXC1",
  "key13": "4gcxPeGAEikFZsM6PqQwrbacVJcUamkkHSBH9EUEX32kRvEmS9XYbyw6pyLWV5UnyW7QHdMFSUgJWWNoDbR2jxn1",
  "key14": "21NA9hK1tocMz3D9vEVAmX5GcrSxxZEhJXYGKLPdYodYXfKzkT495TFqiRbppMnUbUH2iRWEx1R8pZXmhzmmZJXM",
  "key15": "3murXsW8BQA3ecoHD3riY4pJk18XBBnweRBVozX8vXhXY4HqCewuhGc5aUPAhVjsGZsAsntupnJwpHREmzEmq3dq",
  "key16": "XnRE4AZbQkWSgPbiWnSunSMyNwiuw2LUe7heSfof2tjKQq9kRd46aNYoMpczZmSG6ZftstdYpPiDstyLyqNE6vJ",
  "key17": "5zv8jFFPM3Wzuvwx3fuZv7rX6dA1ATNVibNWtk3ctYL4Hs13zCPw6Af6hmpay2TMhzBZ7fTU7whAAwnZs3atQfLr",
  "key18": "54ZactZBaFmn9PJyQ1zhGk8edB5miZ8Y5uz8qnd9q7maHGU9bpi9CyjsJNwmzqbWkMwfJ7rZUaj44zG15c1o2qqG",
  "key19": "2SkicWT1BU4A8DtznFuCJQvWizSkLMsbfYePhUtX7QeSjwZPCQRr1MAXMUEauWLE3LdwRZf6jASwXyN8Js7dbRaM",
  "key20": "pGxunfPwFEAh2VgzZdY6DqszYG5do2DAaHJrSHXKdhArCytJdB2qbD5ZASHRnfu2Y1LhkVXaskHDCEZDmSrDSZ3",
  "key21": "3CDk6M5uF7uCZdvyYR6FdzvQwwbfoXwreCWjmWWWrDrNVGt5jFXFheYQXwjGhMH3m6vsHFA5wxmQoJ7z13HRFEXU",
  "key22": "3xKKSgSXWC2Txdwvi4xnigy4XKfF3k13JuMXWPe9CbM5YLJvfGjRRLhDh7MpeAL9epfkWoWcDNYDsedB6qPCXfP8",
  "key23": "5pfi9RZievJmFGcWHy4uduoBbZMhzLZwEXgyQWY9VHzFP9KEPUYptqNCkCf7ie437EApbXtymQmfFVKraLxQksPv",
  "key24": "35jr5yZ2ZV9LMxkGfFDpgWFim9E7YTojr8a91raLUrBaR2rG6DDDuBd9JqCRV7yfKHWfoatK3oD5rDxefeA8B58Z",
  "key25": "4a1f4LzjhFmjs7jcu4PG2MTQuKFjghnQwDXYbCvsh2ybZQqhkzUBsaeR4cAut7UvBmpg6rnroqEkEs5QLrZWoUZy",
  "key26": "5Tp69nPFzPtZLTJFT2Es7W3YYQSHUDDuV969xxwUgjM1yjQH3KvxpR8bGkENbGKBSoFZnJsFn5EVMeZXS2Ytmr6Z",
  "key27": "3ES68pmDxTfTngDrQLMF7hjX4YUGUrFtsUo1evEbwTDKpfDg1zKodMwjNEgRH67tDSNhLv2nUUHQAw38xNLqKKCB",
  "key28": "3XqKb7TBk8oWUnvfKNExEFHsLfMUtyptv9NNU8TY9a1V9ogvo8y9GAUsscwWQEAPTGk5FPkSHTE2GH5J7nf5TZmS",
  "key29": "3RDgnW5Z9sbnrRhLmTahMK4zKAZccCsEU5A2rsQm7duPpF2DjJCmXZZogewyKVbW6mvi71vjeHKQiwYCfA7JMbYy",
  "key30": "3Jvrf7bMCAgwX2cCBzJ76Av18As1TaRf6q1mvQhS264Bheu83jRF53TBaBoMkgKp72XrkwZf9Za1nYKEzDE8hnQ3",
  "key31": "4NznYoye1Qe5oPFHRXAMZrPRCySFk2CxvvkLV4wnyQH5y3SeNfe65QFfghwaL3DNd3h5vA2J4rewmBUQKz4nE4id",
  "key32": "4JoFHpBqfGPpissnFQvZVRTPU3ma9AEBn5sWdia32JTnX76Zys6j1hxTg5W7b5RbcUDpqnp8ovC7673VCgT3thWy",
  "key33": "52rUpH8Z9FHSfgyT6qsKzreB4N6PoBwjtZUG6CvrfhrZRrkW8rxLYb5egDwUwwCMHShso359i21qm6qDU9CUNh4D",
  "key34": "99Q3GqADXdoeD3pWevpCKpjCt7pQ6PmbpmGdp8LiVWrTN3fW2gVkdNPQ1Tp5qV4mkpMYgnAYvxc268saqWppQFT",
  "key35": "3NrL3Ui8zPjzDHvgXZYQzuEy9o2jwMjvkfoWyaptwurqKF4TZDfqKFYYTWaPfxMm7otETJc8LfbL1JYG584CkFpU",
  "key36": "ZecPcQYoy2PStMyoe1KwLQCbH5Zj8LNmw3aiNKoMxVSAqd5MBGe8zPtXaghHWbzj7tpwLps5yn2Pz8WS6VZQLKo",
  "key37": "63mczLye4XWR6KnwrRxXySNLHCFPR4adscodW65MC7bwbbJFLHiakpWPi63gxCWz3T5jyuWmuFGeEqJ3dNiDCC9D",
  "key38": "5tiFTggCtEU1cu2x3dufbCtq2ZHFDPnazLQUdXjC5BmUMktiBArv1rfpAn6FFDsMgfLpbgGXRtNoHXBLzDvRpPch",
  "key39": "34fcCwfP5NnJipKorY989QsbLnerPHvXSuR8jcfMJjqAiP2akcCYFmCsLW6CMx22iXygjByo5cPxaPj4sd2vMVf1",
  "key40": "5x2ELD2TpnEwsgQqzXE2EXbFbv82AYjjijrsTyBWZKxkZTJusmQw1ZGcSanUKF8M8E1nSwARshrFDpsHGae1CzXU",
  "key41": "TRTJfyTpEFNj2nYtuFMU7vfMgipVtNNWpf3x2cZ8WSbJN5ePKMJDywBXqcQrvQR6wjw8iDMAav6xZKCvaAAY7xZ",
  "key42": "3SQvpEfyme4vwpqBdDMCUcVCfbE87kfHgHEYReFm7JV35djijgWmvQdaKqxWhJhFPm5Jb3tD4pkZzTVPSKTXyL8y",
  "key43": "4QiGzEw9De95EN5S8RV263AntaZNgvKcdxHVT3HfREcC6xXmPDAEyms3gtv7J1nE75CXyD1vxU2wAXNZN9vuEUVu",
  "key44": "Z7FfNqq1xNck4iEXDPGG7WvJ8NLRhHpE8Jez6hkz6RxMaE6ak4wK2x4TE7MPk7HWecEM9bzbsNeAm3Uw7J2uSzS",
  "key45": "5xCZ2eoqF3njJ6vuH1fgnhWy1asRgconr9U5c7HCuFDxsdgmTrfuyadTrLjpotgTt7FoCLVD4zyWCHNmAZL178j7",
  "key46": "5iCxu68ikCXYdCuVocbACV9LF9UGqSrQHfmTtusPtoDAKNjHeskpDSZwQ9HPiGnVFwyzXPehsvcsQx6LzHSxcerr",
  "key47": "2EA8h1Q73RKUdNY1oJ7HHR1kUu1cUSgrVZbYpmNzb4EY7SidjBz4ZV1kwwS7CWMZuHQ8XKYVBcfzU17z9SEFDUcU",
  "key48": "2HsFeMd9NDYzQjCirRUgZNbc8K6U9t57E1jdXZMKfvr4VjKQXoCPGx2rv14PxeZT8V7nsL1Chz8mmFbGrDf6Uq3v",
  "key49": "2odp1e4o5UA6uk8dWSmGnQD1NSZT3QuvwpS17cTkEvKt4mK5kkWmj4s5S9gzFipCn65NFNP6XZPHvvNjrfXPNZiu"
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
