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
    "44Wkk7g9ANKE8e9RVtCBJ5dV234z1tVNzkV8ms2PHqp4EaS1YShcAUVbHbrmEMRp4XVpoaU6wzLxjUtk6M8gV44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZFGEocabuDqxs8H9jGUaNQ85gAHoRgJNg676pfxCyMBe9KwGw2p4KEhdavr2hXbvPMBsNSsbF64ZGskmmPackBE",
  "key1": "c17YkzLkWb5mWP6CNSs2fDD5XnnEzeqP2mVcZYG2maELfKwHy9KUm3h6rMLeZ5JJ4Fxe6bUi9yuaR4Te8T58tup",
  "key2": "4GKL5UVVGanWnhKorB2tMKbGQXi3FaSY2AcGB8twZSez1qMez8uducG6Ax8LNKiQTojdzHtUjF63bni6TspzqomN",
  "key3": "4e1SHKVLkwk6svkpxdMf2FRg6MyLuJnTynxo6pcKdaU4UdZ268Gr5hLRh2sYH6uarMKEBtgn8pFfcAkAundTcQeQ",
  "key4": "2xVCf8MM5p2fWiHx7PvewzabE1RvZKvxKNBW3Wb41G5Sq52qKrs6r3GNTX1QFvubD4h2sFfqLTn8trQPZ3SDfKLj",
  "key5": "P5QWhvix1H7fxA8r6oAvQhqRHpE2dmGWojKVVZecd7zcsF885MGTJDYYAqgdHeQd7Ke7vDS2Szzg5b3kCqcR9AK",
  "key6": "4Zs2RtTm4mD6VaA431ntG411RjySrifUVD5ZzMEXFL1aEyArJ62yJiaPTubsz3HobKbS5XpN1MtdHYLgvy7RNmfZ",
  "key7": "2o6u74ow8h7ExR2uikNtqhVLWFoBJQBnLbunvs7qQBGkJ5fD2mYMXSsZZjeC8nyknMt1CytSonCLbjnSw6TopSTE",
  "key8": "44XiU37KWJUZkLL4yVGCMH49M9tiAJorpgLJQZQVirHJnv95srs1GzB7usSKzbBxd1R8pJsdwAtEPzJaQ5a3UHBc",
  "key9": "5zFimDUwkiSJ3NoLqRtYGVRgx4Triti2sY7T66ZWqExJbYy3RibgaikiPZqcT1suQ9K9wqz4bBV81uA2cPf5wA7q",
  "key10": "366BV4ni8Jc6W5FDJgnFVckR2gfbHHFKXhEgWsmbbf8DhuW2Z1cEbFcRiBxTy7Swvt9HBPsDMuieXQPp3eKnKwR6",
  "key11": "2A7N2qoCaeEgRfTf6QowcZkTQcw7PFBi7X71DJXZLvDdbowqrxH6pUFGayFMYG1bXGxDdLC5qwkr5hSAMR5BJpXs",
  "key12": "2hveQ54ELRghrtzNnbqsyc69XcDEtEWojtxeD5cAhbjWjY5vn98keHY2NP3fCuJgQyQjdaP52GZNZP9YT1Kq6e19",
  "key13": "3muCQSK2VpvChx1p8UuNGXzwFuSX3E5R6VDJeLrARXqoQABksUNtboqDpiv1tNoXWTyBCYnRUmbXdRpTnJbVvRwZ",
  "key14": "41zaXizuwGphBa4RQeJ8fChMTAgrzBqSRtZ5V74A7sYT1cKZRdUnttxF4EnSd6kY7doQ7ZsCdFKkg7pAvtq4F86r",
  "key15": "pUa3CzbKcwWQwtgZSfUZq6KfdTHEMNDvvc9eEY79q9ndi6w7d4a5GdoAnzQ9HJSDuoP3yVUpnHwGTQAhrCNSNAA",
  "key16": "5hqnBXgkKD8pzr65QLqu75pb4SXVX2PzTDcxVVcC98e53WsoUJpHAit16cXAY9efaRdiabLPULBHjgsdT3x5LUNv",
  "key17": "ycZNMjjQtZdtFiRhkpefkBhtyhBJMQNBn2mcMBnqty1VmLShtSBrXNYuhWEfo1nUuzbuMMqAQip3ExAoeejAf3g",
  "key18": "25mCk15QRd62fuW1TxRMmR8PjbGHse7ciuriPSy5YoFSLusGrgVDs7See26RJTj6sdyRhefv6u7iLEyyQd7XTdGd",
  "key19": "3LehqQFQhiwc6j35RKn54FDDCF6EurLPziG5TR4VLfNXaFAXXPVJgEWmLpJEE3vSpEnQ9HpcnGoM3mR7fZ7kGnxs",
  "key20": "62SvJDvkSBrC8hDwKCZuRH1HcDCQb6dLVZcizzjDWB8ddTnhuAhBkzHG3uRLUShvXFxWRMdxUP2azxvj7QBhMsBw",
  "key21": "2ghH5FbGsgkguP3YsCn7hivcpccXvnHfApfsw9G39GN6CFyGELCbbaNH6fh5SA641nNcBvWQdrtYbKxyFiHzvsuw",
  "key22": "5UuXfZZZpTdD7qWUJ1k9j8pxAexSqAGiE43uciVTZcpu5HRKmjWt4CBUtaw4kwpe12xWvxdtnctnoCWf5TCZQEKo",
  "key23": "2na5sWG8RoAXTPxaVHaa2LwwJX9oF7UYZsqPvX3TxoBMdMuG5Nwvoa688DRQNBtpurbRTn2DNxHCwELieGkP6tmD",
  "key24": "4bf8u2zuu9RKk28xpRvsyjEzqD1o5uEKPSB67J368XNebJMGMpH1vMvBwzJSLrcZCxCw1QJEqiBvFTZqgYFyg2Ar",
  "key25": "ZwDjfGKbGG8fGjNJS6EZD4k7Wonj7pQqWBWFz6fGa59EK3kJUbWWV5atibozfajmU47AnhL3PW53bEfzn8b26Jy",
  "key26": "2MqQZiRoyPAtdeq3iXPkc1xTUc8TzFFUapVFfEG2QxbRs7o1GBrCCJpRDEh9MQf7dmwUTxy71PJXz4jhEFhnCi9i",
  "key27": "3fZVKCbdv4YPTuWafjApQEP9nCNM9KN5sGvCA3swfvVY7X7FsDHV7hdBKuQB1nX9XfN5KZrYQk9uqxf29vtoG9Hb",
  "key28": "5hvXoSxHxBmktiyXhcLaHuTy2R8x6rE2Qk4ZHgTzVHYcYRfmkpCyqMZSyeFqgZE3CREQw4H8HyKimeNzdbtyQ6NJ",
  "key29": "2fn33pk2t2T3znjxRWnqGQ66yVNgptcqNeGEDAd4LQaJJDLGKNw7mWuWDKfBDbi4vVvuxjgVAHd4RTv9UZzfjq5G",
  "key30": "67BCcBtr3q4rYEk6YHGiUtsh1WpuYE2L7ALL92QyFLgdbNS8hgNAwE6yjz9veg55gUS7tLMtCfWEzNhkf3A9twwh",
  "key31": "3w7tYaXWjkpGhd2Dkd7PvwumutCcA2ZhT16FwXxL5eHhWNCrpFTcGHrZ37MufgznJmYjFyr9B61TrAwnNNNLg6qZ",
  "key32": "21aQ9Yr3iKWH1qMjME6WNx9ZXbqtpTdv3KpA3iRRjBwaKEpmbmGBXJutPuKr9kjvav36LDQLVZXm5rYS58yWW14D",
  "key33": "62DJxFiMWryPRkpbQY2SJUCgYMPwvxCoLnBEHS3nTy7iDCJYZuEw5MV8qoa6pAFWUYcjsaxcdbjSkt8gj6aS1m6",
  "key34": "28Hj7ure8Qz97vsHZGihrGzCK1kvdMS6HsuJ12QrQBv5ozRH2Zx71n5n76aTwKNvSjgwfMGKpTXx4biA3ULn2MhV",
  "key35": "2cm8j6RXNGvUfCSWJ55rnP6nSDwBxT8nkFSPGJz1FcxeGmE4Ds6oQ3hMVZtAvCNQDaMnHVhMs6nVgLqo3QPKsxCn",
  "key36": "fBASJ18JBC8MWpp2tcb2JoxVFZkZRASbgzzXr72psJokg2A9JQsDVNa3NmrHzss5gUoLmPvkvn3qKx3EM8JVmhW",
  "key37": "2dz39DdiKfzHegRzBY6dGr2CoPz98Ps9BNSnfETeg6G34Xsd6wURJvTtDu18W3zRjMfRD8XSGqnE716DKsNfsDxq",
  "key38": "5mNjVaiQ3rtAY6U9QuMtszE7E8Dc9KJrhnYYQPAtXAYkJfbaYmEoScn8ybAtb1YrtKPguCWqtGcznQAQcJCHmDfo",
  "key39": "2FAPF7qxQZq9MgqwFqH8FDVnpgJnXG87a1GYiUyXGxufyY6vnAdEF8uWsV8Dmh1BA6Buors74pr1SX3UvfLDW2qT"
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
