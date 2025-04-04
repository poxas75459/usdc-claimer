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
    "b5Xzz7rgeqYsxs8FZwDokfHGRHTqXhWR2V9G1VYqoJ6uPSq6UhS4CxCNJAeSbdnf9aW1ASk7hLmnYD7QY4oLLhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGsRh7wSkMpyDdtmTjNJSZxXBeSvzKHvbQXwLszX84T7Hf5rL6j6T3rdv7qovq4DTr24uHTQXGuYUQjNQT2Dujo",
  "key1": "2caJeZLT1fhyRm2ERYKZi45GkiZThMNWxcR3WLUVVuR43h59k5ZpeVKB4sSomsU6JeWuyqQt5HymZecwEX32uWoP",
  "key2": "3nqoak4vqheSmP5WRdFsHXZxWizaSurtxfmEeZU3CFuE49HdUbTJHcRzhs9TtTK6H5zGYCVvPXbmQsvumQiS6jAk",
  "key3": "2endvjrBhVSwgPoW4yE6rPzHw3cnyfn42cbW5QMVWRP9QP4Q47G8mZ3yVBBkMSomRJttKAU7CDUELaCtfcSZeHho",
  "key4": "2ESkFMKLzog3sTLna9XMHUnLxwKZ9FQE22mtgvWdfJ4DTXwGMVK68KYEDfZuGwGjnb6DcsR9BZayz2xHPY8B2YP8",
  "key5": "5m3w9ygXFE7cdW9B99h4PMnnh6QJpbL4TDDEVSrrpEpYYfnjFwyAJdg3EJ3d9uBpfF9KtdwHg6FXWWcbpQ5YzUs9",
  "key6": "46bJjiDTAufTgUpbqp98uWZCU9ey4Qe4asFQAbxju8TGPrZiqCH1q4k22Srf7aYaMSLGNe9BDn5PXGWzAGsaT9Kw",
  "key7": "5KXqDGuoMs3anTSnXsbYtCVUKHqmxHEH2a4mEJNx4VYgmLYWta1jJKJK5ppZm7qGVQXG8bcygvCDnqLAJ2kbDgsY",
  "key8": "4H4kNFrx8Y8YPDvzvV8rdp79x7GL1AfHDbJPH9vNB2t1ZQsTHApJbf7cLjqkivELFCUd2C6m9fD8n9p6MF52UXsT",
  "key9": "4z7Fk1ANLEHDbdtJ3pb31HD9Ue8SkxvqseTcN1ZukLK9L5L731h7KtaBrTWMLnbxfS6CkqQYRGjRGC3isY3fGLGh",
  "key10": "2fSF3H4nqDJ2LxwTQQWLKMdm1nwcQLihiDJnEuCNV4SjxtHxpY5jcm8shFAnonqandfpLCpRyJNN9j2wwGRT2573",
  "key11": "hiKZ9pDmJmCasSerHpQcJMLxj9fYmxJLFuQP4mTd9uc8voj1nDehyaZqPnyFJ7UR6UXNG5ay7NKjL6pMNJGdZvN",
  "key12": "3uG8vJbWWBPmDW358WuSNfkmpQaiS8X4bb7gvMebwfvmWvq6QxUGmELmpfexnTjF1QrGVZRkRCzLaeKY8ErUM7C5",
  "key13": "5FruCSnJsVecfrEnnk4WLFmEetQ1vEKN82kjxMjyW6xdCspRmruhEEGDnBUHP7dFVFDzihLfc7kj7hvvx3y9oND4",
  "key14": "33Qeemk5Vj1A5QXxAQ8uZYA1Z3dobUVEbdHhnddZkbpRjfEiHKR9bGtAp2FATrSzYqJ5Zjv7B1ndPGfAv5Cu9FrD",
  "key15": "3E2KWzuQFhvbTFqCyC58EnvA2xq8pk1ivg7LtHRgZcNBcuT4iP8zk9d5ogcVd1FCfzyVtkyzrY2jA6iKL7fs1VNe",
  "key16": "5NX6h2pwQeQGp2fCE7RzJxjWqe2ssG6wMM8WLtFhB6dZdaCKq9fMinPUqfxxY3HkW8HffpZJYqwHzFRHLwnspcxc",
  "key17": "4x9o6SJWrEwKULpfJFE5eZynKSJ6bDShRaFEDs8r4kNqsAQZ8uWdtimDgRa5J2hDqgoH3zFrbtxftcH2xp1S6awL",
  "key18": "4BikYh4KryFiHVEgtwqkixAjndhRr5CQYgAz5S8i44SJ48zo4Xdin4go9bYxHgBhRZosyG5bSUsmhVWm3gFvRMMf",
  "key19": "5NJGxropShbdwxUZNA2hgV3VDtDujwv7FMjRyAe4bg7fpzY7d8pBqeSrebT5umP6MCWZiJjxZF1w2NYyfNi4bFCM",
  "key20": "5LX6vEf2WcoU1Txrs2MsWwKTMJMJdLFESwciwdPDq29m7KpHpbcGsy5avkTWSkEcLfNwtLyufhq1J2znK92F9weY",
  "key21": "4pzvrgV8jyTNVHezwoeGWGEdXWuBnZouW5hV5R4ZtmPC4r6aGBKFNaU8CWogH3jaHkiES2rEcLaB89m43rX65J8D",
  "key22": "2Yc9dFMVVJyProTGUt6hVDrQc3FNSwjYnrBt5g9kJPo1XnfnLvXWZvQKveAmqPxgikcK3ieJnmPZ2Ypym7tQ5St",
  "key23": "3qR2s3mihATnGBYCXtN8FyK82SoysX8qtRHEm7Y98V6PvYpJrxCYpLNjJu1DXicFVvrHATPnRQ9eUCv1Dnoxim5m",
  "key24": "5VddF6kS7wWJBYyJR2t3ksnu859qHkpXuudFo1tsMMcik2BNjUY2KGSQh4427j2i3c7X96wz8w1ry8akjpz2dr4y",
  "key25": "yVnYPS6AtjMy3mAJfj1TdRLXHsytrc5FvAHM3nrZZsgM6zfjVy3Grb4Q7ALAue6ziR5egQLofDkQioGoksh1Za2",
  "key26": "4hSKxDfo7N96cbCu2BYqbNwNWaCBLetwUoRLcDbQRxqk2m3GsZUaEB2mv9QkxkVngya1kRAvzm75upx2fJK7mdjG",
  "key27": "5DzSemUBgCsDvgmXQ7jx67zei2oPdefE4Lx5f513GDag6c9JATEdq7yqKPnxCE2TvYKMqRoWRK6358mJRgpxBZSk",
  "key28": "4rRjuMLErR3SzFuvBAWmJ7s3yhWLVvocYYEdVFmfK5GceSFPszTSMnuCGEyds3sDBJQcWnYX9iLWo7wSH6qCQ6sb",
  "key29": "euafL9hmUgEbrkuzbizLGEieKvPjYJEhT6wpEP4u6J6yuySHafryL8JRGWQxVSbAkz8u85CzR8QjG3Lmz3c2KUu",
  "key30": "5VrVeGQyMJpYjWGECvEjvjCh8JYxYJiV92qC5LpYHKuf5qvipNXNKiQTcGpPQdhEHR3kzmigDSXa9sm61i6DuAeF",
  "key31": "4JDN4BtrD3hb3eahHy4V5dEY3J5EY3wJYsRNCSwMMKKfcwducuZq2wtvWGCYayg395XGqbmuz2MXymDAWcqxktGG",
  "key32": "4gHx46EkeEngpFoCZiFGeXr1t9hR37e4xVEsmPTKUwKoGrss3UEW2y44nQHPtXM8ERt973ssP3DuMZaoP44uioM6",
  "key33": "4AhHP44BJh6AchQc5uEhKptfTq3yqJJSfkya9fFYXwaAt47dxhvfsbiGcK5c9aQmeAfLmHhowoUXJg1zyAdCrKTP",
  "key34": "2BcZSEkgW966v9HCYToBAydrqAAgokRVb3gpvXWAS3bChhQboaa2CwmP9sNAx84ZPc1kQbaiZC5ixRBCCU5QTiGR",
  "key35": "35yJwdiuRq4WExdgEP94ZtMggk5prifBU4m7auWRS81edzRWjHrdvn2A5PizmyPYp58L7ZtiCN6eKhU7PuaC2cNi",
  "key36": "5HfYczKfrz6priHUsXfD8ZJ536MXdJSrFvKmprcYq3WSXihE4DqRPDYy24jm6HMscR9j4NHxHLGChFsHpBSQWKP",
  "key37": "2oTtuChjJbX5TxFuBV997rkj95VYu9mb5Df8PUn2QGoLKMtN5G652mMkkgk3oYaCoVH1HkPx9u8hZknnNwDohZs8",
  "key38": "52kqEH7zeMsHAMafG59cHprMiEo1TZwTqy523kd9U8gcYiMoDkf4fhJEZabvYjXaDf56S29BHGCZ2hZD1x7J2c3N",
  "key39": "4dBcXbdV6Yw2b5rv7Mo9kZSNYuMurbUZufbMERBLjRQnX7TR8EX1di2NfNT1iFFU6i3PFEgjjTdefdSWH1oxK4Yk",
  "key40": "21sj2zBCykyY3b6g6gbRtQ3stMyAQp9kCvrgsYL5tnFwvBpetoAarPszY8gQrsavQhFSuhDv77AmxW9tRrikthzK",
  "key41": "5gM44dNzBKbwtoRsnytMQQpUrrBaLnz58hgJxXcuVgL4nvXFL8RuwCj89yH6zVJZTU5rjUWYiGTsYVsp15RHHKgm",
  "key42": "3sZLaNBfcc2Pvo5hPpXBR7776WQNJmqhvX77q8MitoeptGXXV3X2bFpiuovfBoQqPz5xwBcjDczusVYv4F5EbYfe",
  "key43": "61rJgHGoGMVWFesmawdktUGwubV5V7Lv2cvvmwV78K8Q4bPhdD6gn2NJVBfhRvoCkvr7uYe4s37fa847QcDkfnDt",
  "key44": "2MsGYeheKCQdMEoxRFfatWBa1G2eU51MzWLS7yZm4m5BmT1S4CBwTk5RuPiaXM5B3wctDrLoYR2C6bStevLJUReW",
  "key45": "2zaQR3QLiZFwNQvhkYdMQP5iuAb9WWQHMUrhBwBmrRxZZWrKiJ2HcdZoS1YpQ6x6qcXnPimecjMqxUFokbupHnJv",
  "key46": "2wvGMjsEjMSNuWLAVWhZs6LdbUR4XeTJAaHgT22dT9AwzwjQNAXCXZV2chuvNH3V8X9bRHvfTqVBx93jKvQM4hhv",
  "key47": "4bzgJdm9CASCb5YquzoD8iYYuLt1Zd5oaxkJwfuSgjYmimi1ogFTU91iQBs9K5nmdxzAePp21LAwnJ3YJpFGgLzB",
  "key48": "34FMdPUAYd3JCpiVn4CjG3wDzPX9AwrXXCtLHS3msnEofACmBfpZ1x2eBmkvV6AioRbX4SZUuPmbrQ5bPXN8SBrV"
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
