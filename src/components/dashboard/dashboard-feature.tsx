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
    "4kVT5qV4c8h4gKR8po8SrJCj3Qfs66s5ZF7hwnF2DXQfsYYxJVe1fKWqfzxhREbuXncxk8QpCj2iz74L6kGWFB5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EtUpzxAX4473HEHyVt8SpRetqjGrwN91zMLHMjaNjMJ1ixgxNFNhzNRoSc26c434vz7SNNXDQFWdTzHHh4roskd",
  "key1": "5tRqE6cvuCLt1K8V1yohx5ZGkkk4VQrguWRFTnzAsfZTsZfa2MZKBxRw35TjWdU24NCew4L2AYfb6uqyYAgp8sgL",
  "key2": "P951r45voqNLKB7PpjPTzRPhYwT73585nXiWJheUSi2vWskASbdKbE5SpRbMCPTcNpo4LfT3TyYdM3QGRNHLAK8",
  "key3": "5sQ4wBLF4esNUJeA88DdRwLw9uRgzaHELeCLWTo6SZ1yGQ48kwkoPCuSPY98R3xQnkKHtEJdWzBehqRMCkEBf1Fg",
  "key4": "WcMirfqHbkokvCiMGaLKNqMpy3gc7YfYzompeC8jXjYZ3sfXMCF1MssKMYL7cJDNQ3HbNu6emHvwoWzie9EyZm8",
  "key5": "44tAZespfZ3gLGZX8HhZYAxmvNcg2TRW8bNrrbxsMj22kvJf8edFWWwmbc3WqiMQdWhKR4pMkULZbS8ecM8K9Qdn",
  "key6": "4qur5bbugRThT2VTfTXhWbiBZ4x4dFvpY7jufFBHsrdtm79XX8jMRbVkGaHHy5YERzHsk7MfcVr9QiRMnC9moQNi",
  "key7": "5eaptAJs9rQg6JkNjWTP4mxQdcp4wq8kBQQZBAVFekipVh8W37k3z4BW9cXAiuyVo9Bh3KYpMTFMKfLZNNUkTyTU",
  "key8": "4mvBtUGXsfGhANeBu4pZ7igGq2muyk8JrGQysushLWBNUZK62CnD1mdeWh9QsxS85gF8ywoV2SC7woCSByoruiea",
  "key9": "5eEJttK1h62EPp6Q1YuPLmBmBsR6iJN8F6UQf38QNkfNtsrFf5smXmZ7sfD89Yjyh8EqWXXFGuHnEsjJj3GVdVkV",
  "key10": "mbV9rwrctPGchAvV8sHXyAuvz3kfhv4ayRq6xA7197YcKK2g1X2gX5A4kXy8ECic8A4g7Y2VfcWYXxvy7cV9q75",
  "key11": "3dUvp4fj9NE5KQwUPxh9f7zBbHoJiBN2p48bwqMVNa4HsrCDMUkWpp1QQHT139UDoSsqCqBXotwCU756RXr5Eskw",
  "key12": "3ACeGudcPUj68ujZFWgj4JJb2VsCcc296L8EmhwP5eyo4i7WET2EWDRdGZZD7tFrP4jUEYzH7hZsJf3wwRDg1kV5",
  "key13": "2WSYqc26Ri8mm2HGuxtvpJtnGP3RBM3sPTtGgqv3YwbyH3uA6eArbmQwSbsRczncwm7zXkVcFTN42PeBuHDMcJGt",
  "key14": "3bFqY5pNJw3ZHxDGZfhGMMsY3Q3QfJJ1tCL7kn8ictFeN7ziZ8LWouKZ4k8zz6nDm4Nku3q5Lup9ZBdTJjsKkAXQ",
  "key15": "3eFoncK5FULGgEeS27XBPgyraf4pe1Ju2A7qkvnw16Sad6zmLJEwVoo7v3qxgXMv4sN2YCtv5mCXzG6TXiSXrv1B",
  "key16": "5riB6wWd6ptLZpckTiu4JhWB4wgUM9FMiN7qaQUDjAnNHp9UETjf3LdaokEf8gCTNBfoUmzHhiVt9CGuwtMsMGoZ",
  "key17": "4meymDSa2MeSHPjrtMkj7dU1aooPQAz1r4hfKufgYp9K7arLNiAPsV4soc3HyptpAHiq8us5oQhTrtj3NN3K7Dr1",
  "key18": "52FyfPij84dRHNmRB6KPPoJwwMe7imiU8WGtcUqEzmPyAg54FAUHfAWPXQTcKvoVzsVLxafJ8JgjUWFntFrAiPG4",
  "key19": "3RYxgj64coST7cewLy5kS2LnuWfQ7xjRY3zMrSdAP2FEn2FL9B5SNnRTtFKLxjJas61v1wv9jRasLtR6v86YqiLR",
  "key20": "4UMxEnam5Ebqv9rB1c9c63j52uY4KmEiJQ7bYN5NeSs5XWuyYiVvtYTYXe9tnXB9FWTLLcrNHuhDCcgo4aYchWe7",
  "key21": "BLUzsGQTbw6TZPStTbUVRzoqDipdpqCok6u4u2UfLSTjPFT7FqR8LBSPBMvBnDHrYepjshascp3drxYwuk7cRki",
  "key22": "47LieeqsFZuGEgF8NQesY1WcP4HPFmMELHAxbnm9E7FzxVbShkQGefjWtnwqiPY2zWED85FAgsL1s7sAsGW3AF8D",
  "key23": "4dUJLTp41RE8ZCatNitfwckGYiBWiiBow7zRdg54gwhtZ8zuXpUundnb4jQiaYoKC9MTNWRexSMNqsQLVxNngWDB",
  "key24": "XPYmRk7haPAFHiESMeFNRkDRMGJjfhPn82pDUtLSrDpo5EMhKmtg4jfRei2WAc5qt3omhCgsqmELKVtTBEGfD3n",
  "key25": "3FHCGWZ8ntBSZ4q7gCqkTUXj5AV9S7gMS8W9XGCuW26ivPc6ygkjP5kFSkKWvytBUsgFodHAtWg8DMnPd3nDxKc3",
  "key26": "jBgp8KtnPd4Dut2BDrnpx34577uR6i29nLRqMhfS24EG2PrXcMhP7TbChiieAhSb9DAuxRyE3ud2zyx9QewdqvW",
  "key27": "2J3mxSwvGkmmVqe8nHV1U157xLJfobDrcC9WabnCQqZcP3qvd8a223QjgVkacYiX2eYQ6dx6WZUxbkHnHr38iLv5",
  "key28": "22sgRJFd6NBP97KvRq2kigkiP96V3jpt3xznD7AHCoSQe7J94M22JiWhNrhqobaoDv3gcCjJXwuXnBeFoEHZUc7h",
  "key29": "57xZSCZEaY9cjo3ZsRftUVX86M3wgHNRdgnhbj5Lwu7PAFw7vHLkbMtrC76UNs6dAuBijUraQMKqgNTR4jE72rcc",
  "key30": "4JNy4DBdu9Yvzmmn9gdDWyiZ2tqSPFCaRBwnaPU1xPTCqTvVk8PMeGyFVaMgZzJj12ouUH62PDndbg8VrbrshDJz",
  "key31": "3pVBzwKRonNbZFdncHA6NbxxgsBEk1pL78iQW4raAhxiiTaoWP5jt3VyZgSVUG3XYuJRBvoBjkjSHN3hD1MzN6Fa",
  "key32": "jQN6eLmg8xFzXQZwAev3SRmn2Cp1DipvfNKgAKHtfFRMPfRS8iNn5R5M2hAKMM8ivKzQKpHcpGNJrBCgXzjNRDp",
  "key33": "5PSdPk2bN3N5H7GbkcCXx3GBWrBXKcmJkvvHHkLeuiwUCZEuCfRxHjDspSqE5wEW3wtCnqgj9VHUFU4b7Ru2HvMa",
  "key34": "5vFQC1j4NL4Nby3XK74v87wXp8ZVta6o9UPUwSYFbiYUsMyLvoHkLuycteKN68o94wiAPRBkBN2euANCHwna4Aoe",
  "key35": "5dVroLamba4igrX5FJP126VcD3U61LFhr5U9y88Qy7caDzp8U71bujE7wTfDVYbvXjxhaUZt2rwSNcG9DJWmvpbb",
  "key36": "2aRMYhjhTimE5Ajj7RkYt8ASJeRiKFggGKMRdkbyx2FeWt9oSWt2bJ5Xk5n66rUraDBL8aSYgALkRSvhAtNzcj45",
  "key37": "KfX4bMBt1ADFKQttKRWFW29C7oGRpYKrQJYh358HFaVfpwoUmC3qLk2YZw9ouaqRuusSyWjkSfQhs2sXyRhq5bP",
  "key38": "5WyUKBtNro3UfQo2oZHyroCnRGdBEwXMQ6DiyUocYDfnZUpU5VpBRg9QweZs6Zj5evreh69nGjjbwxtHaaLcbjbE",
  "key39": "3HcjNzpBDCkzXTNhnXj8RCx85hoG2jUbsgDP23TTMvPMPninfDF1HMV4ZEZfJwESLQBFo1AVQeSzV2qywJFu1PF4",
  "key40": "4C4EJ8ZUNt1pyYmq28FRRvBfLFs55Prh2EVF198ScZB9nYw2UJQks5Xq74FiTapWVZpy7z8adtfcLfGggnyVKKkQ",
  "key41": "2JQ7sSAGFhdL9fbyBZkK9iLF3sSVUJCit71wt6BjmepZp4Uey7chptF9ysaVbPJ75ccwgNVoBAJTA3zEqkt4Lvqm",
  "key42": "4t65k9J2RCuFDQ6q9qyiYTJFY9EQ1hxcXqp7y1Ra4SH52UhjjNpbEeJ7fVdPrh3LzSMWWM7MujCwZKcSSmueQzKv",
  "key43": "6cMh54zHY2wGRjjgxj7v4Xnf2oLzxAzpBiNsJZaxVA1kHZzvt8hpqbfV1uPvX3yKShS6hNYQ49cn3L1uu2BS6GB",
  "key44": "59gW6WfN11m9hTwzCzKkSbyWSUQGQNkwKXFwFz69nkQMWm8ZWU5GrtjcBxqvDZKckj7GCY2FmA7g7ygh81CCurJM",
  "key45": "3WN5Yqk1MqNeGn6x568pYPbJZAHNBveHfpmh2yWMmsLfp5BwKuF7giBarcGUz7zuf6M8yFjBW2AcHnhhDLKYB1ym",
  "key46": "3a5GWe8teetKFZrYGfLyL9DbZ3ttRkQ5rffeWDaCS9CQuqHwitwr9pEMSu7kLrwej6RY9QeZtTGCDy8RbPwZTCcn",
  "key47": "63Jdk4adpCreDfzTu7p33Eqe9gEw4PsGDrSGZGPSDfZ6xcWV7C6r9EfeRQnqUM7g2D7cNABYNSsF4EdCBorP42V8"
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
