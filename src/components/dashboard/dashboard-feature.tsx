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
    "2Wr4AZE2X86fkYreYqjsseaSKWcvChCwSMkF9v1Qvx37KRkGpWtyZef7FHX94grcjat2Ut2accX9FCHpoDRTVhs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45GXxKhUzbty81FjP6MJFQQyeq8XfWoG96hp3MUQPdKCuKiwpDG7HeaqoeX4Zu7iNxQsD6gFfk6F6Y99qdqTbjyk",
  "key1": "gZdE6JRxc6M2netcE9pphQJBWUg7ejFiR5kYU7bWDoTQ2WbwYCavViKzbAoYpFrxwYqUFQmCxBBXftY6t1EWiH3",
  "key2": "3KhDgW25VZA1FzJXEMXUzB2Q5N3nNC5LzApyK8y8RAGv9jV4Zv2vsvhh9uGV8JhNryDrJKDy3fPa1jH4hvoS5QXN",
  "key3": "57UUtUyaBRMgLJZyGNDw6p9RRczotnBJA3jQCqZ4szTeHMqcGukWneyzcjAtqBx8vLHrRTSSf5hmnu8N9Q7PBBMh",
  "key4": "5ztuBjavESdJkxkM6w5WGmfxccAeYWJqHmYVYnwe1Nbe137ZJbqVwhpmNThUQfdyg4HiZ5Bp7U63K4Gzcy1n7vVU",
  "key5": "2nqEM9PTT3RzETrwSGEZsqRyq93qWM1nLruHpoC9u8qKdaWWPrRhY6r9s2cwg9Y4ZZaw9MuiHsSrzFrSfLhm1Ahm",
  "key6": "5nhVgFYvdLxxgCbgXnLtwf7jxrKsS4ZwRrFrBdZRLA5g3Dq9obG49xj4Rb1i7MdorZC5GKZtfDV1BwPcJLsupgBL",
  "key7": "FquN3YNH8BcQQCKUZpfPNs3S7J7zmBPje5hvB4Txytw5gPpY8a8ZT3qeJ1k9pUw1Tzn1zkU7mWLcXExGLxrMKFD",
  "key8": "f8vT2vt9G7QKJtdcKjhCZJpFw9BKeMvdV3jpaiwR1LTeLgopV8caY3EDUvjEDaG1x7gACxKaerrXWxSwrpC6NnL",
  "key9": "4U62YhwfkgkvVXST2oZuuJTJwL1vH1KT1LnRX4PBjGNLr1W7N9xhrSHS5ZHfGfZ5Ybi8kqwBEh4DEjwPDgP3oREJ",
  "key10": "5jiAHYasQmfhzDmvjZFkTYPQd1t1bMpoZP1Bh6PrryTshaMe548VnHccDwNjkdmREvj9Dx2opF72uFyAL8Wpq8CV",
  "key11": "AfJKUtGtELVoeduGaprvfK5xhJ3KP1z3jSVZ17N2cxA6YrE3EvJjdgGFQgT1tcRmp6yG4nWzhLdYqBGjxUFnFnq",
  "key12": "4mf79DZDv4Gp985oTjyDZ96F6K9yWi7gMPxxSwLiY2BSASPJWNYdfC1nJo3PtoF9Px4xy8HC84pJBM7uomHgb4D",
  "key13": "zkj5bchQ3Ud574ddfkiqmRzEnnqBqm7JBnqQzAm2q8a8DmNPy5g2wrLzqBRLqDGHAxN8UefaHh8kEiX3K7X9Jbd",
  "key14": "31Vnct5t46myBGtvLj6bnAmG6QieQcFjTPpuonMzCGbBmcXWwoTuvXzMvFxjRGpthWnEdWfNn87MnqoPhvQiVYEt",
  "key15": "4J3xu3qCH7fr8mfRwVy2G6vk6GQ3JjQD7BkgJau6nZ9MtfiCekof7jLrDkBUsoBsw4VNS28bAYzQuEbNbYzjHdzW",
  "key16": "4PFTtF2DrBsM9Rhnvy4tYnHt3ciqroCPUWMTBtVSXytQ8SeU6Ec7Dtet8tZp4uvBwxsmCySSbGEoiV1D5URWDhGx",
  "key17": "3zypebCce5dTmynptgmxBUH6zkqmzsasm7BdMKYoH3qyw7fcfxuKEgG6Ef7jwYzZezrrDUm5sXTAuj3zubRfCSZA",
  "key18": "2VEbW13nReq8a318mSaM2MQ9ty4KesBoatAq66B7FgktD8i8kNkkttnHtxWsMV5qFrU3NmrRsEThzYCEas9SU88k",
  "key19": "292eJh54yRzEhYbA6MsQKgBcGmSQJVZXa9rN6bFWShzqPXFuNBpb18Nvuu1Z2nveitiTC3ePsjn1tLvymP59DVE7",
  "key20": "4RJxVLS1JeRjkoWyYuXLqVLgueHV1rSWerrvuvVGMwGRaLuUp1oeY1wojHdk6TdfzhcEjLiZR6a7rmU73HcUHypU",
  "key21": "5Qagxr2PzWpBnR6Z2gWVx4LXtX7cRJzuMmFSwMPdnnrEh4Mp8f1fZfoyj46wDhVpUw4gRvcSsQVEt45bxoXFHN5Q",
  "key22": "23eDjVeD6CmgK8NP5JWNHHtb8dEHHvckBTKA5uTquEWNRSJG7XGkxHfbJt1WsijM9N2hZnVk7xpXsCbX5Tdgi6Ud",
  "key23": "2xagyhkmzqwqFHiofSfQMgbzapGmkMbhPVAjk4SmtGgyEBFwzA63by2PNXohFDmPZhxX7F24eAZArE2FnJH3srAg",
  "key24": "xvktKxLRLgJpzGotWcg58vKn6yt7ke8PE8dg9ts3tHcJYQPfMgGrhJUcYLssZu9xk6RfkQVkBEbNqFXq8oWTKst",
  "key25": "2M9weqzGGcTPu6Uh7zNaTJ8Ghmz54V9YrgqBcQUUjVy5Ti9w5aUFsooSXnSb3zQXbcSm5kP8VqSN48i6K5Qzpw3R",
  "key26": "aywwmgHHhWQazHixq76CYiYqUcuwWmuHSpxfNUEHABkDebratFmcG8MThyULA2sWexKhmMNLHL9kTYXho4ZYCcJ",
  "key27": "3RUeHxBmgTmf1EUTZuHgya5Q4RSRrpdaDJpttTJQ3wrE3LGU9e6R6vkiiFqpvqKvATbzGfYVp82XhgZxNkyArUpB",
  "key28": "581dikPcQUMjAQrvDjLdvDF36kULuUVbLctrsQhHkX55YCUcEosGotsKafsjAMjym8HpuPVzRZaxcX2vcRg2cqkc",
  "key29": "5ZF4mW7tU5hDCVFDCp6weanhaHfsvdEN4R3sq5JNVvh2K4vC5VhDYmuMEbZ5XKgDbbgTQeZceTcDARXvuN5pF7kG",
  "key30": "4qzHGT4zhRceFKJ8VvZsinaV9yYk9rS9EdQvEEAM7cPHYuM5ZrjdKHmVmdMw9Urt2F9EnDBPypVK7zt8mCzvAApM",
  "key31": "4swkxQ76Tgir1X4uUqmzM8HiRn99bfs8Zhtc8A7soPiYG7WKEnZjRJXSSESraXXo5N5YztPKFevaMymdJKSJJeEd",
  "key32": "2jBbbMrQzBTfcz5bsVqDenYEBrJLjUQJrrDXrUVridW5RMp6ivjXGKffREgVTMzqsvaC8CiBK2ZZsjbX2R6EeMTT",
  "key33": "4fEEtqTYWsZxRxCAJGCsHQcDWVm9LBRTHC78GtD3thWAoNqn4MnDUuqNx6nDBDAAutYnWFehs7fuRwS3Xq25XjmK",
  "key34": "oXMbKSMWwCt7UUUAxqyVddeNhbqBqQFGpxBjWS1pVmm6jHo2bjsQM2Kg2Nk5JgZrJUJ2b28ULhaMNpxKXWnzVeM",
  "key35": "2c3piyjGD8d3gbRU6rTcGVvQnERiwQd4LXuNzd1wRxjbR5vpSCgSigLwCr2Z4d3L7WfnKYCaa1nqJBNP9YDy7N2y",
  "key36": "2eXSctVfKEYVSxEjELYyZUZ47Ya2Athdo7wabkar2Am5gfTPqXHSUBPjETdgz6xauvJWjUiFtJnpYZ6kQgqnTVfF",
  "key37": "4RunVkawivjxT5aKkTTVNGk3kgsonwa2QgNPsxze1GFETbgqogp74FCCufEbMJA6UerRVraEGnJk3DMmeBFPNSet",
  "key38": "B5WyAzgT2BAg3EsAiK1SAoCfYqBptiS5zKddLpxyWQ7c8NiKX5MHiJfLmzKsZF1nd7L8bVHF6YfnM49Ky7fapX4",
  "key39": "3LHUZTigMwpqPRrAEYbtTMXsoUPJboBzMdjyJ3coHxd3JxDcfVuQMU53WdV2bbjjvr6oJMWdcSmC9Qgjn4EKDZXx",
  "key40": "277cxdiD5xfuxSkKgVMX8S2XMZhiGVTXD27cDAbu7PqND4TdFdv8WUMcNfKXeSddCxa7bcPUNqd5oYvC4CKmmgnE",
  "key41": "tQ8iMkcuU99Kf6cQZiVTRLQJpot2VrdJyn39cJfe4JmavjNLizQJWv59MfxHPKLM1DYDJhrqVEQyNNS2D3v4vT9",
  "key42": "4ejNucEeYkQVjgpMgH5PPyYUyf83cw79DtpP33rzysmEfZF5cRU7tYj9NrrKNBiFkuF3jjSw2iNJEbVn8Wq27QC7",
  "key43": "3mABuorRWE6ULqwBLxNDRkaAvEg8qx4eXNTiAZB17u5J1nrukXkuzhWxuruaq4T4prvyFDCoRLhoQusJzXNTNXUG",
  "key44": "5q3QLWVXTvEBjqECgdojLdZFXhKDJKyxdEPtpFtM9B7GvJYs3NugotJjdezFiQGCq9kfyk6UoogipXG9EHpD9rxM",
  "key45": "4zJSfb32Jn6rH5hDFtXNkutwPSSgvA9yrd3G3JPwMHWQffiLWk8vv6KqygHkmfcVsighWrdrcjxqaSrAnbtXCxYw",
  "key46": "4T2BPMEmVKQUzQukbyKRdwD3yaHXtNsQey8j7Nd2V6BcNbiaQ8rphHDxNppBj2MGZYZUyLVwSCySu8ZUPgfWPtVs"
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
