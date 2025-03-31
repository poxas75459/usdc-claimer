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
    "55SFgEg4qh1N9ApYLFsfj7AwSqxNEYh1tmDhn6GgcbjC8Ug4xyPXNoy2zUB88twfQSXcwHDFWqFxqwaab2kWcvij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54iShZWymoUFkcuy5PAmM2cUdD8CQ3oP6JyEacn9QkSDszvowx3ga8WwoMKtohy8jVJdV9vodPsTP9iR3EBvqXUr",
  "key1": "5t8pc4ydDy8xBfnHWUTS1K866PRwt7BkDJEPwmop7TuDtYhUe5TxZxiN6j3r6SV888KyLmrtutcfuuvrDfe8Cggn",
  "key2": "6i3qZFgXEpSFb7y5BGXXyeHcBmj1gQ98avsZKcVapeixLdrTsopMEU7Ezv7XdrZ6E3S4HtXWGkyWgxW21wqVDRh",
  "key3": "5xWVMTQDvh3i7Be9dCmGzAxt5gRQUWrb2Dq397Rcr2XU5quNV1AbsBJdVQFGFvwFq8492STiX5bKAm7xD2gzqygt",
  "key4": "3f399JqGohkdf43VLzqW1Ee4wZkEMMQjCcL4rgx4PpkTmqjbkH34JYeqj5SQyDJY8Ciq1pdDEAAem9mSYG3Z3y6U",
  "key5": "3r4dkvSM9vRXzyrqhetdq4RcSx9ugGUGxqueP3qpQPynSRJ5yKMBGbbJe25X1bJVQRHBjzf71Xq6cGYSi4AJoW7g",
  "key6": "2VqXQV4id8y92DuauPXXyKv6nyR3rF8F3NNsye2Dj8S2c3Xg8KPkvhnKEkeGXEEuegMAKEdEgR1J3sgvm8bvguKQ",
  "key7": "5aEaZ8SQNcw3L1cabY87CY5f332U2WiF3o4oNGiNdS9FwrK6WbFnb7S67oVarxT3dat1MTwbGmCh11mtFP2hLiSu",
  "key8": "3U7Dhy46cMepgaPRGGxyELXNUVNEknQivETtGGpgCa5t4bWi5jeYAg7BgnucPNqvMm9raQKNj5WUpYAYuv1VP7dr",
  "key9": "5dAR2nuTNrSwHmQ5xPULUEXNQGc4wHqGFBkFT4ouBamJGiJ2Nv84QaB7tfUVdSwA4qPRW6r4JM7QKdZbmgbasDjB",
  "key10": "673imvgVUuZdYfdPpgLZfQQPb2dZnbBnWbnW1fBaVCYqnpFCpg1GpwKZ9nAt7BUiqUv98TX1hmUzNLBkfAdS8BBf",
  "key11": "2cuUm4T9ptR4bpiLG2SK8LWKTQykWYg3QszJTf8aZpWE2FJy5p9etLtZVNQa2EJoPA5kqWntBnnL8mHu3T7cYAgN",
  "key12": "1Vxi5Ddhvhg4MXWi6K2gCoSXo3jpt34RppJq2o92QZtBJjbKWeJf4gJNLQfAzKBuSYCtHY7orUHL6zzLqNyApor",
  "key13": "5SutK61BoQF3WxSqfW6aNhevsGhv4uT5PQyNAD5sZMAnx7aH6UaeEjQ4q2kxkwYMLtXy6LNjd8Y76xrmuAkiY1Jd",
  "key14": "66QdNvjka9q74BEnCNpkCxSFDx3RCCqgRShWXJPqZp4VNHyYSTgguxVAtVtUgqeNUJWoSdLesVNT2cpY5EEAT3TX",
  "key15": "4Ak4McymqScSoqhqc84fnTKpm648YchcFRNux3hraHST9GtBLfij34ei9NrxkfnpVKuaFFq7b3eGgmLqkHZNBciP",
  "key16": "43PXvDUEW7Ht3dJ81RQdeTq1zcJu7W5HgjJnPmSc9gKLFGZnoFf5bf3scNXe5NckuX3rvCCnxcSeDCxDdQrg1Knj",
  "key17": "Aq82DHJxk6nnLDaVc8DWEw1afs9BgKxq6bxFoGEJWjRjw5oJc6RS6nSBif9amAK5hmy8UEnsDi9jW7MFd9Em7Tr",
  "key18": "3CQfMw2nJ1mzQ8AecybicHoHZ8Uaawpza6Q2toWhQo4ZGyWAPNXHyZUMvChR8xMHgWUdwEMfEFD74KVLcfRKr1HE",
  "key19": "3Whd8udBs6NWEyjg7zhkJxAV4AX7icdG4XY7mNQAYLcSMcxNKhnKaSe2HnMiQLiZfFPoJ1i8c5eQgAiX8bWm91zY",
  "key20": "5k6usVQ3t7C5a2isriy8fxXkwKCKW9LjaiVGvDhqGL14EBxpLmpRmHW2NewJqPDRicC4Mi6ZGCGbsQbA23fnEZwt",
  "key21": "3RuSeiVgf4B4BB8YfZKYbymJG5AaWGN2b5ZwiT5x9wR4gnJn6QXUyrDtkQoBujT4BXaeWH148jkgoWHYnmKkfKnm",
  "key22": "2fc2oZuk7AGVvxiYb48zgZaJLvNwyBoV9TrYjsSPGvutcdHieqHv8cS36QdzxjSiWH49yWKN4pT7QHxqyhFm9an",
  "key23": "rJzLLEvnceM5PQgGgQzyktYVh5cgUAPV2cYgktFj4gf4aR3jLiNuzR6HiGw6KtXawPp1QuzADD1iksCJfTm2mBE",
  "key24": "5cnfQSMDetdV6P4zsecAu6cFpdcHNTmjitK1zHnSvxgvFb2Ny4UmsWXxCo8RZFz4mBrrLbSqiJYdtCi6F7cHcUsa",
  "key25": "4UbsxUmEFDE2sb3fFLddGXHnEUzYHiQPntC1UUw2iS8iGXwneLJQfUrH1xHALSGfWknKp67cHXUBTb8jp2HdCG2F",
  "key26": "4dcmPQBgcWWpPVEip9U1ruMokiCWa3LUDtkimXbS5Lmqua6tW9ubnHtpF9YfCDc8kTpjexpKoLfzEALFG26Ty4oZ",
  "key27": "Eeh9P3dpgkEaobTQpkfZda4UfQ9APXS4Aq2xNipjCFFEThKrHh5EMyNTSEcJautwDMuXnu1Xt4n2b227UdNspXf",
  "key28": "4CNECrK46yjPxk3dLiotNz42vsUXpPyKKSk4t36qqpky6WXww2tZnWq1ypbXTrhkMrFmNDBAinsgy7dZyYApJ5q3",
  "key29": "3u9y7N3imWnFrjseoe6UDEYKdBSXbAtknBUDGpkEdGXjTCiAWyVxYC9z2JKazuXRVHzZ6D38Uw72UTk5i7uDFuyL"
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
