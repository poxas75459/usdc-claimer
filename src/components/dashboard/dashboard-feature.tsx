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
    "29ghv8oSbGb9uPzEjmtmwysherobDKt6iTuFUehXjxkHzfqGY2JsZ4HJakXwzSrgEB18SMEuDyVkHLXNKBTCY9GP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37P9JNzjrgP1ZVVa2DpRkwEziVzJB7sZTQz3PgnbrmdVMBc5qMuSLDdQAE1g3JQ9EfvN2J24UZzhkYtazA6wBtSK",
  "key1": "wwsKicwkzjEntEnLGkK12dqXqRUJ4bP7Jehr5pcaqsdWbXN4wYwtsYvWhC31hnw4LXdGcJUMeAFNuX6TT1deq6k",
  "key2": "qwohKD7eEnZiyFhFyBJBcTxNtdjAkqBa3H14xnun1VL1Nq7ZfkYz9dvFqvuv2xNeV36F7qreW9uC1YikoKmJZ9E",
  "key3": "2fztYhRQZ5mKd9Yj6hcGtvZPDHDJiSEkju8XYsfLXBTD5ozshwrnpJiDn24741b45yVRfYFRk1Y7fTa65FxTZDcE",
  "key4": "48E9LupzUqvs4QSoNxGeZjDBwCGZJQjZe81WqZA7rjxqFmJDto8xzB8KeWBRMZcXQ8jenPS7782nF9oZPpuGhcRx",
  "key5": "4QmQPDhhfNccL66vRfzrFZzuVrBcWUoBoGSjBVpkEzpteVM9jyRLY5ZqwCX4rx1N9nYiXMukbg3fw5BAhQXYD4bB",
  "key6": "4xMRrWLHY7yMZC9KeAkc21koqPXZbZijsyJ9GhhjrvsGy4JqNiroXVb8sEQSSoyt94TECQDYaP4gkoYsrz54eHJQ",
  "key7": "25ia2gB1KcBHz6WJSFPmh9aRa8NobPFga9mRzocTbUDZetwfTH5cYYv9h7XCoFqhyCEN3MNLXCsW3DntkDSJHbv2",
  "key8": "56gZGXBRfbYBQ1NPc7aKdZHn5t1dwxc4ZvEjMbSNtYQQUCXcGgJYHv7EaoYvKv3G618f4nXNQ7LpV5oNcqjrWwn1",
  "key9": "u6Vj4ZCPZnY5J7FDTCVHz2qkeQsQUvP2CgStHDJJ4krvMZcAbNsVsmBJtEWLzMEM7vticg7mnTW33Sj59koYvBu",
  "key10": "4tosawyxfhR7jvxC1VQTpGLffEG2K8xwnPhyAoN28ts7qmg383SBHTHwZcLfv8kC97sKFB4UkFrCfVNBhQfZQ65w",
  "key11": "4Nv5NG1wWF8qxTVbVKu2c3JtUh8wpTrSAmihD2Jx97q4312Zqad2MUkhXcQ9R4R6u9q6Nke4kCyHUyV4PGfpyDuX",
  "key12": "F5vdNMGSA6d3bDLjCjD7D4oohwJM21t9zUZRzyZ5kcx4vsVJNk96XgX1DG2Sh4epcHaEVZj2YjjLAky8jaY9N5c",
  "key13": "5ejPQc8DaLtt3KYjnYqiMDaCV8V5bP22GbjCjAQSTqbEn89ovg3xJSNJaJ35vSQDxkkjU7VHsFWJthU34T3ydXLb",
  "key14": "4w7HCqh3mVi8Kvd1baqCfv3yr9xjjoVYc1iruHnJkSQYwwMaW44jBJrM7m4NVbZqFsnHxKxy5tshQ8VCcDaxt9h4",
  "key15": "2PwoHG25ZPVUX6u5EbXvZH9TCxhi9Vk7oHYZUNCDDVGrVqrtnbRPfFn7JYxPgVZ9p8Q1nPkKnGUXScBuGHS9SaP1",
  "key16": "2B2eTLmQxvmGUbtT9FixP4sai9nYGfmkBzxb7SXobbdzwWyUxFQa6esDWG6Dc9Qqeo8ASLPz4Sr1bTh5KiGf3nqa",
  "key17": "3DsijqKsrLW3hCVciNmDoiAdXv9n46BBJfDqyvu7WFsG49LtYKoLVRhJSyA9kNUkzG5jjeG7bi3rT9Y3NKr2MrWy",
  "key18": "5h86nFSmZYNWBb4P51nzRnmqVEFjyzoshbFWq8DJAQyiqf3XHSSTJ1NtfDBX5Szg9oaY9icTCmu5H7EkUUVhNS8u",
  "key19": "3tGm9EbNJcj2SLBmaE51jWgmAhUKkaHiTt3GRqtQy7u4YGJnPYqcnSAmcWbEqFgNuw2KQHEL8aa2roK4WbiAGKsx",
  "key20": "kW6Lnimt8P8Ef5sseg27dTV7mZxURYyi75RpNn5qDVBNg9fk1s1vgki1zzYEARMUFsXSJF95s2h3Utfhc28ALk8",
  "key21": "4NdEaS9Mk5M76JCbHHsZqqieuMVJdDcKW4yiVoFxj6VkWAemziWGuk2iTF7tVyYGBjaZyaiDJqsqwxPo9tnEUMJU",
  "key22": "5TbxD9y6JwyGYnPndo34ZQ2baHQVUb8SMXqzoh5StngKPyikFv2QcTgePjPDEFBFaK4fABUohtWxfTnoJNmv64ng",
  "key23": "3DDVU3rSehPaL98swJoJSb1VrSiFZeToKFJbq18BYgAR3yBMdVL8mbZwWsxuKJSxCnhReFSQXUJ2ciYDqD3w7tJc",
  "key24": "424S2o5zhQnHFMmU274wcKxwMY8if1CD6JrR8T8VWRGSaNpF7AiYQH2ZUShR4dL7FATPDwaKwfTsb4nb9AER1XiZ",
  "key25": "2wQ8ppGfy523LuPJt1GhTY9EBvTpo9GKTvVGCX1dSuorJ7NNJGLivn22MTnc1PvW53TRv8KWAJw5tfcyNM49tdLD",
  "key26": "2DEga8WNqitw9rbjSo3QDM7Wv5Z2nCQB5WZYGgsYyTewVD3hy52ZQVHVCb5EeezdhAT59oPnFiU8bBC9BTFHVLDQ",
  "key27": "2Z8KbjusNSTB29zN5m272LPofEv2zcKrBsWx5QTDmZwQjZhxtEvXwpDYK69WBgsjm8psACostTYsZPH1ZxRN1WG1",
  "key28": "514KDJMS6991g2CyiMsyf495HacNBz76CQYbKdZx6UcVw9rxY6AXpMs3NCjERqgaowhP43xikU95ypcKUUUb9QER",
  "key29": "4cArXpJmxn8PC6iHBbZkvtnFj9MBVC19HxqVJMAZxLm65QRBVTmAcDKDAxZaGTp3Nh2H2iEc83vscQDhGYrQCE6D",
  "key30": "FGE8CSp9MrnZD3qpDbdBkruRvMjwgyz2GkdLDRtPpzQeFsenWQTUz7BMpNh2cyywiHVvMxUVs3hPAfw5EgANNse",
  "key31": "2XaZygE3W9N4ZHgXhKJJDrCeeehNvMHx7WW1KMZHmPoQhLDPhEKtc6yEHNfVWxZeCAA5CmMJXMDcnZepaAunHsp7",
  "key32": "65K2an9DSaxvieVJcM25FnrJ3AbCpCoHnzymb4eXf1j2zjR68XkbwsZXTJE8JP66QcB3aAvQ6ieBJC7bf5z3Rpkz",
  "key33": "34s5LmS7y341kcMff94MHbUVX3dGFnFYA8xoR8tfZeTFSkKoqMpymCq37J37vhxtsPfTS19Q32i7aLJ4CwDi6HCm",
  "key34": "5RVLwkecEWXodzaH4DMQTi15N4Sk6rdgHrsoNm8Ad9k9nLNUbaKDDmwE8MuTZNoRqNNk9uEn2DnrKjiNh9nxpMYR",
  "key35": "45foPLDqP6BmVtyc3iivYegtMHM1BRfQeXiUuXz4bL9Qc9qnG3P6N1bTSTbvL1E34vtdQTv9NyvHoAv6bn2u46pw",
  "key36": "Jjr4VSYWQUbwfKdXPFxRfxUX6QKctyfzQw2q5kWDwZW6dzsBfmaMwDJzkcSgCtFUL9GBZNAaZbpdp8bFZXRSQL9",
  "key37": "fcLNQPZkBwGH7EQoghVbDzM9eay9v9naKvVbdUWW1MeG9Q96L9sKmQ6LPrLGgoXAJrbt6Au5akufjxH7QXpDy6k",
  "key38": "5NiH5TXX3gQLowLpdFqEQqtsyTBS85kEMRNfV7yrHAXMqVLnMUUNT83PawUNeKY59MPw29QfjnTPiNfWc7Ja9VXQ",
  "key39": "2TrHSmGYrDY8RuoGMbF6928wydtcrr4Acezd7LXq2LQQDEZ96yop1t8TQpUzbo9LQeNuhHxhLB64McWzhzfwY4wP",
  "key40": "3AvG5Q7YxByuXyYtoQWEpCemkcCenh4WdK2N1PBs2LyEyCimdgdNsTAMW2FfhKcQnjJdSkfuSCKsPiLPb1zuJrab",
  "key41": "2Uuew7jFAejHxpeQJTavv3Q8itQFjMu3ixHUwCSiWYEsxtixYDRcRY7RrWimy2R5jK6BvfhJ7XzUSyyXXN8Gg2QG",
  "key42": "2nyWUj4uT9SCZAiY3FwQGd7mK2SecMDiGo2xfwHWbfrN9UypzjCX6ATwQa2u8o22fDYRfRAnvnvUivPgEnDi7fAa",
  "key43": "2bSkPjoptVzeb7R77y4Te4jZ1SKgC5iCsi38bi6cAe7vKPDbZh4nsx4KB5qLUYrZKBTqrhodRxxEhiLMFjJVoneo",
  "key44": "225qBAKv7gJaqvh4xXLzpbVWjs8tb9CceKz9UjkE4gUjAnf3zjH1f7skybRM8xDQV7nD8efMNjKyAZwzCknzznBK",
  "key45": "3xxHdJna63qRZHGiogBnZSiHQSrXoYvAKyeCRriAQfTJMQDcbK9tvG1sDmpefEypAEaT6kiR2orM4f4KnzdJwM7M",
  "key46": "2KGUVJcmFuKi7Qnjygykz5wJzCn78hKXjuhfSWREEWZpPJJky4zRQnFw1W9bVFr2ZkBivwJejKpDeFTvQuKaANS3",
  "key47": "2hMv71Agzd9p4sb8j5b25rPVZmVKXNoC7Vqqf9kDtneJnR6QY256hRJBy8FzNywU11G5JrMYAwFEwXDVCde7myqa"
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
