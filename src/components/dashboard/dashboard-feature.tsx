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
    "4vDJwj5Zpy7Zq6yEZqR9dTdzAgdhcMHHYEk4ikR8CinhfS9pzvpkVj9rbGPhF4zrr5h5ZLzhmg7ShAZqNFd8saek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCzvukuTLVRrzpXMUh6o667xezjz4iUodz36zMrgYzauBftEYhdSvg4Twy6sqbccDr8QXRmr7CBdwfLTNTYtpRN",
  "key1": "k1rJDA8JaMh6h7zkBLjpjCTFC1RPF72dUMhASFXT87MAPAn3xqnosFrEPcgnQaDQ3Wh6iMMfiRURmP5RyZ11UY8",
  "key2": "YRpm8NmFC3xPzEsTTCVjJASKwLz4N5kBWeNEiD36tyv9pKcP7XzTkC3G9wSC717gV1M1T9YJDW4VXUFbsCnhN3f",
  "key3": "2dhWY1QEshSxFcusZcYZPBSm8UZvA8BuFbitvTjGfXxQzJQuKDJfckGfVTzhPeyXfA3mrckrKDGMZREunqtN5ANJ",
  "key4": "4HhSYPxpZk9nVxgjTh1muQTJzdYGzZvXQ2jh5rMAXdbLKX3uDvRReKuTGrY8a5htQkzmY1hGaJCFU7fAJuxKV8Y",
  "key5": "2GoK7Cb4wL9hKPXn8mwoEX65cbPbCvSUc1JREPbtzQQh9WLy6aSKtqA4EaXysBt1hReqezChnT1vYVtZCpkMVUVr",
  "key6": "3jLeJiTok7xLWYWGiTRd2JtYUUy7TYCNnBayBkgLrmVUfHX8uWgEcA5a4CcnA4Z4CMfPjRWxfbA3hsmcPgpLrFJk",
  "key7": "5LKmKMpoD1ArWG4ECwgq9DjbWDrp9fDPyzoymciaW3brr9YzpZimFpxKF1EQXNBwriFW6x4YKeNh9ZWkEgLToRHd",
  "key8": "5nvBDudR4aKgnSDWzGmaZ68AggDm4ZiwRDYoth72ZmYaygZqaHHLQPb2h2DWx8KV2ZMpsxr8wqZnGH2nXYJfDzPx",
  "key9": "Ci5SqmL8YFrYwuAJ3VTY3H5vzJaivSa9Rd6d4qyffeEfvhkVYTpjTHwfeNbPuyjguF7HA4iK4LpeKVFt3zvktyX",
  "key10": "5BYcsN4EKcf1CB749RQ6qrSD2HfaUXDgwaqBrwM7eobkMuQX6ApLFJSkbkhCmFMD9YhueupawMvLGZi2yAUVMsgN",
  "key11": "4ei6LK8dyva7BeMVLku58f43D56ph8dVMtJq13Ep17y1MZT2EQewwbZ412UwLU1VTApya5n9ttzExFiJUmQWUFZC",
  "key12": "4J2evhWLVsAhxfoaQMEWa7stzh5kNJJhPZcS9HsJ2i7jVxAdzmiJahZSqBhU2HwK4Nrprs2ZTJH2fF2kNBi3tS5D",
  "key13": "59eFyjktv6B11ndLn5ny3MpcqtG2ftHmRnXRoJmXSQScY4YbNH8GrYxLBedL7wZ8nAUpeHq3EYFJPgc98V6w1sY9",
  "key14": "2RBfsZwDNAbXm7xtSGJLJYY4qoMFYxyj5G4XAjuSdnnFJPrxZodKYxTyR3NTLX8kvNcmRKMuyaW5xs1PjfqTjgNk",
  "key15": "HJBzrToquD2vQERyckcRjUk3X9Dmz6yQpZkHjF98pFMRQsZvnkBMLvmYiKF7z6sNo4jwSX3HqDkKD1m3x1J6KTa",
  "key16": "5pTyB81ZVU6qrzPRHruutujxiZF2GhWXq8esu5iYCrNnEnKWVidSga33U7VbPXJgXNqAUJ9BXnXTpYCZCqGbUZd9",
  "key17": "3118DJNfTe6a73UwJVu9vBurh81a8Nk4t2zPaPjgLSKjYT33A1SBXgxL2H8YjByFG2c6eALvP6sgfR15EHAHYRn9",
  "key18": "5ubyW2EyGcg7qRUZjzGcUHPZSzXfS7oqDmYzD1V3zE5Mgw5Tr9rSJzvAS4NRfJY88TG4KmSdnm37VzpNSW6dFZjm",
  "key19": "2psrbNuMnFGjo5UvW366mU3LiTGKbdQaodo2EUrrezf2aFgvZdxicaJM66K7QaVBZdNTFnyBjsy2UDhfbqd7tgR4",
  "key20": "2ycK2UYUdiNYkdNyg6QJc9J1SY9C9A8LCLgktg3yXDqHCe56SSZSKcaGA9vmT2MhYM2FyPQK5Br1Dbw2Y9vhFmVp",
  "key21": "2XwXjuupcaUAJieZA7uqT7sRRAC7vkRDYcCW8m9im3EZ5d2qj8QC87rf1XiTjksQUqezXYhBSVsq8xSGP7h5An6e",
  "key22": "3m7Vkpzq6sQojNHyfr8vzh7j1Br8tQaNXacbJGWFEHGC2PQjWT1xhCNMfWadD8LwqzJtWk2CeBzK2izvLuEWpu2g",
  "key23": "3u47QK7dMDuGdBEc24HofXLo4mzNUebmuJ5bw1sJoEf2U3ThZA381k4enbvM1HrGgGcaU25BPbkemUashqPJzE89",
  "key24": "uFBCo3Fy42yrayXMLGLQqwecLfeMDT3V2E7moGTmJ3jyGfitaC38dyz51jTdbBipek5tXGvWwjtnv4tuEXrc51Z",
  "key25": "5n1MYNY3VhAX4jPnm362inVfw5DLg7biRp8pUCKrzV7KoUtBdXdUbPB2svNsdSacDqFeDBoxnG7wuwLEcMcvsEWE",
  "key26": "2HVKhFfNNcWu7ChFfyFqfPdppP6mNsfFLZYQQnaRaQNbQvbeX8XccCqqvZaPMBPxxkgN9gGCyEUe65Lug8dQyrii",
  "key27": "4c2TPRuKCoNfjmF5yWkXhT9mLMFqvhde22X1odzWpACDbCefjEwkrH4uxJDBP2bFp3YP1GFMGcg5ocvNbgduGjt8",
  "key28": "3Wnaciqn5SRJvPumxYYzkCZQp4LhW8nzgzWf81KA9ekNtZbjJZJfDpwDcNgDG3VJ7bX7P94EReVmMzg1BA2V9x64",
  "key29": "vDgmmtACP8qGWKFHm4jJ2Sr88ap3Y6HJ2sxPqMJsV17LTKouoUeCA7XRDHjRfiWUtCQY7rTdCNn2q6wpoThCHfz",
  "key30": "61cY3ZjaDatSyF5N325MGyfd5ZzjTYdnCrpWBpKssxsNik7QDRLGrDEjRRQ3UyLpBspkfSd6ka8iPYXYSFgndUYs",
  "key31": "274cJtwwwGb646oBT64ytrhwDFKyZG2e4NjFVGBd3BWN3VRB6EHhtJGXtd6Tv6wEPKEVT64DucQpNU8ub4wwU56E",
  "key32": "3th9VYS8rqmgs4nbcXEN12DCHV2un3H2UNdjkCfw6KtyWJBqQBh2eYNdwCreCnuhPpaCcxhckY3Vk4Pa8B4WNqv",
  "key33": "3zMsjVzih452tB3CUQ7Jh4AJUZJZqhP6GnaL9sdBKvjrYfkFrf9P9VBrUeyCzv6s7qd6Vj4Z2WMe7qmwYYCErsaD",
  "key34": "6kkN2igDddZHmXqcwtRF3SCNYbLGxJZkdoqkCHWBQQmSeQZfKz2rErPdovKEjYmbypQHvPvrauwHVZWJFHmAFk3",
  "key35": "2HSpwnVNXnsdgzDqtybVsExsFpQBS3j9RS8HqQ2a5sMzZh8sDRrUoGpfWLYSf8chTVMFtREpCbHQpbRresF7bG12",
  "key36": "43GEgVgcKcw1LBct6ZihUCUxzZyfTtXdk4q9ViPK2y9qzNUVi1HdUfEBn6pjt3dFxGw7WyfnJtJPY6L7QoEWRPXG",
  "key37": "526Ue6agCQkDgqYcFkN7e37FdhTqC5txWhKDtvPLK1q4pyCm4AkcRfrGZ85gX856xF5zjHdJY9rW89oiwXPT7Pe5",
  "key38": "5TNGx5wkL6LU8DrhgU6G86o4ovJpj6JYVgeK4SuifCKEtDgE287HXDxiXs7uh3o4Qcirfk5yeoHDdsTeeqCLwq3Y"
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
