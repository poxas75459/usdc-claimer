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
    "4pG2o38XB9yaap2namHLCY2NT9UDgMXLodisfFdP5KVEGMTKCjEnjNjGZHg1NENWwV7xsmMvHZYicsyuKz2yPyow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a3Qt3CXFUm7NjLUjYR9VtABurQ3Pd9RtE1etDuDD831fqAeJzTkr8h5CjCJDGsCq3voyYoQTZSMFCAhX2wwoaa7",
  "key1": "3sRmKA9thJ3T68qQGLs6bEUjbPN9kcnNhkXFhSubB9Pd5MvjmmJeH8FV2jNPp9fj2jkNpNxD2gLkoUeDTzjbtFSr",
  "key2": "4HvNTGjVeBwidKNaDzmnHsCsvJYYKLdNGknJwqmvjroQJ6YFt2EKu8yQfEsLquDu7bJ9t7XdXTzgQrxgBbMmfj92",
  "key3": "3GwUGeGtURjLpTH4fyfnDP6it8A58DGoeHbdH8poZB1mT7HTaMZ5Sbk6aHunJEESknqCNpiMYv122QvJfdUcjF9d",
  "key4": "3t1naEtQFwYwXBmXbypGn1G2cLKB3H1QPRqeZzib872DrQpEdW5Tvudit2W7VtsnHNGW1CZ7z4NuX4bVCMmkDEaz",
  "key5": "5rgGXZo2gyxGjvQFhhQWvbemYwQB4LhtQuLYwaCXmxF4wTx33gmVFgFJDLUcqPD9UUu9CGKkHJSaQ2JwuP98ErTV",
  "key6": "3pkni6biQ8imKcQzScThB5PmaAWWekEnRruneHubfFQQebJYhJGN8M1J7QJ8cFggdqaoSpEc7QjbkxpftQdBytrK",
  "key7": "zW42wsaeURC11x7rx8jB1nXfXafjrzHsLdXiC9EeWrEf4itE9ywC221CzJnqvi5VNFyGwAZYJ8h97tSKWNuke6K",
  "key8": "3YX6Pv8kuHzEeUXtGtnNv8q8tfCgUFjtRdVbdmBomg4CaD8bhJY1PBPfCkfZLD4pZw8ZJ26jPNSGEBVw9MdBUUVB",
  "key9": "4yp1FjYmRmofgJZB652faecXHJxRU8NLEYJNyxmZRv2uBdkLAP8FEKSLFbLqxkXyuUF3x5WFSZMrSSrf6HwhJBW7",
  "key10": "4e8cbjPPxvtXVTE5LojddygdBTnXoqw2n26rin5hZ4o4c3JpecqBtmpME56hExQWBVM2KcvVmm9vxYDA4RHuM48W",
  "key11": "3pJQQnWQWjPiyqrHiVsmq33otYqvZfcWoJULzybTGH7j33r86h9y8VNT4FdvKe4f29n26NQNzGDRXe4ae4CaXxxL",
  "key12": "3P7ytHnxFcxrrmohKqZF56nrqjN9oi9Kixvd4vedn6KhSaPMDAj1KbJgMhoSkGG2qFqu8oKkX8jgmLoSKQ4xY8bX",
  "key13": "vn98BFyK2zpmUrvNFyUBNkGwk1VRSboc4NrdkWoGTuUsKNafF2QCzmsjwXbBxUcjMY3Gi1mT4ah2DMrV9WH6BXR",
  "key14": "yewEwgNw4ZJRzcnq4r2wgw9iqdr7DmYnit6xRzQqg2KtdwTQN9ovzfBVk6QNrQGQrLd4W5YhwyD61yi7VnsBQMY",
  "key15": "5rHnXwigo4o4oMEw2YY3Nyhk1821p1ZWNqLkBDmXNwsiSwBoAtoeYRDw6aQK3PCh21f9kMMyDjLz9cHgfMezNqFQ",
  "key16": "2QEdYYnyo66DRdGKmV24zY9zvaedoRSU8in2EjsQuxD4D583hacLLZPYfBUMcuqW5jfwGn1iXzyWHuD5GyXz38YY",
  "key17": "5VhBqgrjofQgVduAXLLyApDSmL5QXuiCjYG3x7yCqv2RDbJhM5VAZTxtXgCKDHupupGFYkC3NhAUeLt5R5PS4R3W",
  "key18": "2zNq46uWJzVpbNyLz6CHYLyNpnf8U4Ht48ufnnK5YrQQXJmBTqhE4RUkpBuSQbkRNUMw4Hypxzf4b867CLQxHvDG",
  "key19": "2p8SLWqHc1DenHtL9NVuPPjx3nCtmAdHkQymPzLvphKJp2zYtXhvg54KWM8PsUUMgUU5i8TDkBvcJojkreghJemd",
  "key20": "5Lcm67k2S1xVR6Rb8t98ojjR8G5XFs5KUN7eKkoPEVA79BQao9rwN2E5cjDfSn9DqGh26LLmnoTas8MKrGUfc7YQ",
  "key21": "3WDbXhMVF7d3ob7tc5i2cC4xAe2pohkHNy59TGMwRXh1QuDYhnoRmXffBT9zp2W4cEJzsAHzy7PHZK66a6wnob5b",
  "key22": "2PDBZPC47ZYaY6d8fhERS8ixMb7xv9eb1Mkqn48YpaDFBSn8snxQfzTWW6g8MiEF4Tac5q2x9zvSnJTq5vaYpz8C",
  "key23": "2ZdCiwAukd5mYtTpHF2ZVytMpzVojjhwciY6KFdqwRPzajEbQda2NA5eMbnNVoZxcmL2v12ewXDMEZJiSEK9sJ11",
  "key24": "46N1VjYKVaxrq6csJKjrz7T7rppoE611aRKntEbo7jj9ZtGQy8uZLrShQmzLjbSLQwtFTZnj9sDEHxTvhimkkzV8",
  "key25": "4pmsur7kRatQyiJDVMFAjZoVx82gG6RpjtzogpgTyyQk54zcphbkZ2y4DgRPjUH3KQ4GSoEqHZjdcivu6HYfrPMD",
  "key26": "5AfXGu9zY63EAkH9YmBibEgfk2FNx3bpLgaLz3DbvdBHgFLxbAgGkF1rhHHEyna26BkyPRWzdYteD1JtGwDLi88Q",
  "key27": "4tmSYWfTzHLrQwyqZM3rbft8xQqx9QJX4BdbhfY46QmX1s9kAWiEx1jagsoF7yQj1awu3JABcHXn5Hk58wqmQ6vV",
  "key28": "bio7pAHcFy1YYX73aEouwacZwmxXTAuxqT22mwsHUj9kT6ae3YgbqfkTp19HpZiF8CcjN7sW28gje1Ej5AhUky9",
  "key29": "4qyxij1LZjXc9XzkaKv1dt5WTSbnskMy2vtGKNiP9WB2vUf8nQmKeHSWxzg97sy1ypKWPh6NWf33fbcFPAHgH14M",
  "key30": "4oaaJNrbtcBMYbNf7ud86LZNgp8MFMHPLE3mABd2s9qKZ2QU7q4nVdaxhxVnhhH3VnZ455J32QNYytBV7k4SxTg9",
  "key31": "3F7Fi4zK7yZkYTAckN6GK3j8CgtEYh5DW81QvkggTDZSLCN1NLvQ1K2PVdb7Q2RB1Ja7mTqCP7VV7yQGoteHhV6y",
  "key32": "HEqtrHDHxmimTgFzphTFiELgzWhsztPvTxWL75YNpoWV37NWufFfMjQMHCswRPC9j2Domhnbp3HAKbTkAU1GJco",
  "key33": "2W9sNBaV6WLFUrGEUaouhBJhJAnWS3fuqS9wbW7QXJUTSWWT4dySuLBvnwtsudsJPNbSgGC4TDLKwFBnFxCm9Ggn",
  "key34": "x1sDpd9pfTdmhJGSAm4A7dmFUtTDm5i5e9p4a38k2f3itvbWmriFWqyXG6ozM721NsT2DLnnLW4dYi1NJYwdfcW",
  "key35": "2aY6Ti5VXCriLqNATpEuGyMjQhqnUCsWfsiP7Zxg25yiPHJ75dxC4KLwFJVX7NdC9jGfipEm1HZg49RDkrLKQc2L",
  "key36": "5XQToSuEVJRPtkYx6uaahKsMVqRzChsWEvf6Qs47e2CbwnGbbidkNcEy5rZUs7PV5qsCSWL8ti5vDD5kgyzBziUJ",
  "key37": "4Ur53JHBVbfuRv4Wq3gZdeWckVSkCBr2GiaifbVjZfdL1YtFf3k9F6zq2cyG1fZqeMgou6TgQT2XiDAV7e449MAK",
  "key38": "2TLc7NUM6BEq4JRUTGhSbNjt1aHupAXR44ciYLdY1CDjgwWjmJeWbaCChAnduciFNJG61WvbW9CdvhDPwZd4DaHp",
  "key39": "4T9Gp9uX2qWy35VyQ2xgTQg9qfRM1SPDhkLzUrmv8UTaPn4DrpWKXqfWZZMRBnSdKGWEZJZg9tQZ8dQ5VHJBACMq",
  "key40": "qJNFUqbNnEd1AB28exfLf1oFV1P776D1NLJ3z4qAqQBurh1suvQ34P5eadmDSkmjdrnQNBadoZMP9rtU8LUhNei",
  "key41": "2zB2w7S6AUL35Hv3QWsmp1vTGwexRs6KuVVQw2SBQwQFXxbA5sat1BkaoVZMuLvoHPXBWgVFQcjV3nmEwdVeEpL6",
  "key42": "2iW3h5BT9zguq3DEUKeeDsEKRLTv86gFeRPbewVVSKMiMNhRt92aCJA5VPF1Z7oBihJXzC72iv4gtsPjLxeeUsWy",
  "key43": "ijVFX8VMU4nJD2buAu7DqnJYA8yeDjEwyP7niKKzKWtLe5hEk6nzSpbuqzf7MMFMY47GtcSLYj5ZMa2m5ehLpqk",
  "key44": "2BXTr5DHzcuz2GK2nFnRNDMhqoB8vUCEXdqGFLXvR1RUB6U2T6UAMjagC8Lu4niexZVskkV8AHygRz7ZNztSN6UD",
  "key45": "3YJdtVyJU43XThX3sWfMUDwHjv3k3tiLXfgr9gr8DFZUoadAmPZNbES6e8Fhbtf8KYiqZbnt6ackeENtfhW5EbjB",
  "key46": "2AAhLhgxkTqBVJVJZgLF7xjwhzuKUycGMKqhiR2kCx2WYn1jCvuRCFwxGVSmTbq826EZXLGC1cyUWGNL5HoZYtv8",
  "key47": "3cjSjWu3xbJ75HiG2ZG9eFWzsnpFfqFECzX1bKvQ9CEeGw4arbz5nGFHueBMa7QLJ5vby2NWTLoP7GndQApkVbBJ",
  "key48": "2sMt7hZrpWSymq9X4UEG8RnBW7nMwtc4DuGKHH5ARWJpa8WjyYT5ZRLuDjbaMQqjHyCcsqa4KPMfAthAHXjEL5q1"
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
