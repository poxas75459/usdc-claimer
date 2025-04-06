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
    "3RATRihBzn4ny3o24nEiKKhTS5ExjcU8vxVfXgrVSN6HRJ77MsBZSFUtjmgnHDQU2twXSdXQKUMLgiEMbeNGty1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zxav9Dyqc7DZcckPyEjxnqhYqJ29UrcU4YfnJqNmo7hEMyUkum1DTxsmZYmjgRoVPJb3tczZioWwkUMnMXQCv67",
  "key1": "3q3xvii2vo2f7PECppudqv3TbAbPnZgS8XreEKNjWY37Atdv6PoNHw5VU88HieKWSJBeJkzMEbSMYhcKFEM65Jkq",
  "key2": "64AYZ8HhUFRFYMu9xyajVJdDfvKcAWLopEhukBkohx7gua6VSVsN8vV6Xi3rDxoa6vJcHpa64B5fKKRe8cBuTuUG",
  "key3": "4d7beUFfnpr1NzwFxsDkZRc1q83BgntyCMyWUpx3neGXA76N1UKQHCSxgLLhopxbdhSzzWZe8Hej81MpzHinPKkX",
  "key4": "35mfxCT6eBqgKULm1dVxExhq6PNziXAsFehZ4D2CoKH5uP1dRAsksWMWYeJMzZzB9K3kreuZqMT96X6Tf7xh86oQ",
  "key5": "5KwK9w88er9EAwWbV17BVcFA9PkXXGxzkqtRnGuiJm7idnHZA1jPUfDqaQLNBgbUNzqQF5Q55qQ8X6c77hG51cnM",
  "key6": "47XuxCatAJsfuMRVF2k4CjRgCTwp1yEwfmn8npcLmcXZpnTpiazKUPwm5uYJ8NX5Ky1VUw4UXXpPo2Xjahbuuy7",
  "key7": "2Ev8LRDPs8mGgqEHKTKPC66QjGNE63BbVXsBDXDaKko1jMSREoDpHvze31eengYRDTe8R6cXegUzQHsfqG7YmQsr",
  "key8": "63hW1LV5WEyTCfkL9LCajutTj5JQP7netYQm1sxCjEkqHpNSPqUQGM9JgimSMX6fNcjt3CFf7zcoMXuVoC3rt33D",
  "key9": "5uixNPh5KjTsi1MTEYtUD9H42zbeUNkBJcg8m2KBqeYXCBcvDnEg8pM4xX3vHxaxzmqSAVsUcmgzRkoMXUohDMoG",
  "key10": "4nhrYFN6CTjWQYrRoKHDXG3eJZbnkTFKJvLomXoHWd9AhWtckSHTKqw9JLBxukzD2eUujzGL3XDnvNNCT7VFAzuE",
  "key11": "rvtd8g52aNUxxvN7A1VuW76Bc2Xps3ZRsYpvchweywpHzXMVr7YcZtMbhFQXe7Lj2Z88N34F2JCFpxJZmLrM3HM",
  "key12": "5hW4Qjc6uYmkcw7S9tJEMf45GR3ZMBuN5yZVV2j8hcV1nqTwGjGsuedyzQiLRaSfTxB1PZ1LKuLBY6C5GGMDwxR3",
  "key13": "2NTDsbM9MDwNqVWGjCPatDvo27mi5XwvS1hky2xPY2XGXiVFh8W8zxDcvNCgFNkD6v1CiisMywN1W3kazEApeADm",
  "key14": "2X8sqnBzxVvF2GQGHtNY7A9XVjBmDD7hU7wKshp8t4jccz4XnzpNANfvmKENRSRbLX1eXhcdfStn9v4EzcveJ3os",
  "key15": "3vTHNv9ZoX6iXkfjGpQ9SqzqGrPkn8wH52j6KaS4X8AyNYp5zQo9iemPwxC7TSYr8Nb2X9svv7hFHg2DaYBUBk86",
  "key16": "5nSUKJcw7a4JRqbMTao22qo514GqE14bmxk8xkb2V911PUgEpFRJcNVUuZM4Ys1eDk15sv7hbuweCkPoLfhFfESd",
  "key17": "3jgMHEuadELnxhAN4t8uMp7WXMQknLQ2daMdKRcv6i84Xm6Xe2dABkEHt9k6bYNHL5s1sEsboMebGWcabvjGnwvw",
  "key18": "DiXgWHdKWN15kEX73WuSopuE2HsJdWzkhqJTyaTEckisK9iEtXeXLDrDCzrRcfSiiJyGwYJ4LuXN1m81G1Hi8gH",
  "key19": "2VJ9dr3rjdpCvPzYQbxevVZQCNKZja1gJz3QpjQ4LdsNCVX9dGfpLTncRzchyThwT74Zu2RVoXGvGcGV2orvYzeM",
  "key20": "3wh8fdR15mmxiX47AcCSL4SsyBDt3otikBFyHiADQmBLBkHjJD9iasPLyEG9gLv5Zcwjs1FfJef5X3mdQjDjWjY4",
  "key21": "5mjmCm2PM5sAXKvkkVqKj3owGCCWRjk9cEYnfZcYZLvxazvhTDTiwTGCZwjAArUesq4TrPrgM4hnJzdskDyzMwRC",
  "key22": "5BQ7TQ3Xv7V18w1xLFUrvtiTPnRrBZjfE8ZkxKCTcB1ee1ZBpJDThpbgPUFZNnrpjRMcWdNQdtam8iU1qnbxtHTp",
  "key23": "2tabDcuxp8NzZQQ6smZ6oLReQc3FTbs5fFdyf3APBi41BscrKjhqVeuWMdMjE7MrfoPpYu8PabbZiU4SwZCthpYH",
  "key24": "5gr24cyUxAAkQiwv1f7HTAokJSvS3pMver3LKjAH3ZX8Yv1spasjz9E58Ndcp5LtVYbyisi3FPEeQ6Z9Wp9ZMRZg",
  "key25": "X4VFCML8jE9Ux2spKzCmggrCDPQ14S53kHr8ZsMrNqcfa1Jb2x2XaT61TcGYH2aS5LU3ioBkJsDc5aavSCwg8Vk",
  "key26": "67HWLs96Zctr25zdzDVkUJf4mPfyPv7J4iEGaTySQ19vKAxtW2BttXWccaSHQTkespn3Kv438FoioSLGhnGi7aLZ"
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
