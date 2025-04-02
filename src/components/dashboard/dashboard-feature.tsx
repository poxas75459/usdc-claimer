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
    "3hS88QyApHKZRZuTWwFYkXzBbN4wAkcYGtiS1x1zgUXFKbQCHGH7UPLUVYHG9tJKw99cXmNK1oepzNDKwCSTewFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48q9uLtdyrqgRL1mowWsuvZgFDBnJ7j4kBKFYGJYHwR9eCKCrJjMhh1yDoB49oza5TiCfZtaGKYa6GNWEhE1gZcj",
  "key1": "2wtbPyo6nmkVAxEti4eRnoRA8P61GGtzxkkYuBXTSgd2NN12rUwCyqJT2YiySJ2Ss6NfM9dU1odRb5N76BL3FAoa",
  "key2": "56E2CT8Q5KXw4fChc67Rxay6r7GSyVxVtXJDQWeHtNtZ7uxsusv9ycovC2hhKoF8kmWUvXUeKCTNTnQJEiXbRtwL",
  "key3": "fCjxrvnpnXoTvECPTy3a9767yBuNd6xCEnnEmy8gZQzYy7Q7QZJzWrCy2ogbmdSLpr5LuWKUL4wwehrFvY1MTrB",
  "key4": "62rSctqmtDjiTpFWXyKxv4KnyWs1wHcEGGiG1iMr2vLHdLSTbPRQx5qVmfShCNzyjStaBfW7RrvbSMzHGUUPWdZ6",
  "key5": "3MWie3dXpCZjSp68YaJqQuWY4BFkcioH7SXth4rouqu3CUxxgtaXf61FPg7ekgbVm2tUP6Na5GsucADKL4V6ntAb",
  "key6": "4AGbyYfbNdSW8ZVbN3agGWH4MeXGqQ864tsFXUn4m18iEic8HyECPiGnfbcBTkWMwpijonTpjzQfswzphVfbmu2X",
  "key7": "enzWBwNKtmo7qMmEHZwdLgUELPSA5BFcwyPwa3C5Myvvuz44tfHHm6qVbjNer5WwSXswHAwM4te3jT7uNJRgvCP",
  "key8": "3LPgfL7jyHXeZhnme1jbEEjq9yB1vkg7dhy2JjQ6vbViYcTp8166FWLDqHWFNHyqqJpPZWrDPg3ig8AT15gaHNAt",
  "key9": "65M3b29LJhzSGhhvmzsFWzwAvcsUMpEh5DrjpMkmTAjiJZ2NUws8jzUQJCzruaDHxhpMLXv9GNiKa41Mgw56XquW",
  "key10": "3C1isAveCjnpBESwYkS3MNa5wAgB73u4Db3fX9JgnBHgB8fVBRkqLkMY7w2APnstAVbrTSZfPqbPsUzWTn9MxJfa",
  "key11": "HhsYG5ouwEFpbAs4H2bcBF6RiPN6xgs75oZeoExE179oVMQhmDZPEbX2w657mZgPbghMSfMrVj9UwCx55R2n8HJ",
  "key12": "45X7MGX6RSdvADH9cyP3Ljhacmib6kSgGCuf1CRAzEyFirNf96SC1KwMZtbfvpi5RHoZHhve2S7m3dePQXKoBG4p",
  "key13": "38epxufY28zZNqfBdM9mcANJmLHqbsY5LTCttodDiVvHF7FgKdXkjrkX7e9SPoYM9BQoHVJ5hf3pBXQM3xBkVPWk",
  "key14": "3qvta4ACWUfM78tpdqS7a2ePqUoBiVLDuzbN2zZAZScWHPvbWqh4BCZN6Q23PiZULXnTPYgjkteDDEvjkAeoq6jP",
  "key15": "4b8heBVwE7BBqaVS9Q8QuwQ5WCWktFJqMW16297A9QUfkbTFqY8N8E3kiYj2ADZQAbZTM1XS7y2M4gmd9iDHfE4c",
  "key16": "4Ufh86icSDYqLK4WhnYhjvkGjWSHBV2DuzwnXNZitLemrGRSCgJwP4QtiQQzH4aiq3tM7A8GNAjRJPX5iMvaoJyH",
  "key17": "2p4TH5EpGLPev5ombnuzyWHw2q5azo9i4MtM1kJYueX7dvJ7T7CEq113bVEGq5PndXa87KiCrsYKSBFpYnyX63wx",
  "key18": "2KgPvVZcE44MuU1WUPGc74wZVTkGSksxKjdq1BeFFeALfeeYqp4DuafVCFtGBwtZe869g8QApXscsTovxUsyt7sv",
  "key19": "4zFVUbo62dLFDxAi7gBgSa6VK1ZqRozrkiwbt2Tr84ZaBuR3aWhUwdisWhiSwzwYR4V1urot5B8BHdhCLmNxQrBN",
  "key20": "5cowervCJ1R1EN5auA7cAukDcdspiRs9TeeoRFaXN9s4f8GFkSMUKsyNDCcE81S77ypKMUKH5S6LXQGXvynqk8Zd",
  "key21": "4o3MN4Qij5Kv5rovF9yN5x78Rgqyg1MESbKFbBXbaiFa5HZi7MDC6jozfLshFADXW25SDf33gqrqH2PLKzBHhPy3",
  "key22": "2XxyBrJsEmiHi83DJmNiA7k7yHfhx5qZUyFgKA3U43t5bJH16jks9NFKWx7UrdhnA8MCLgnVLBmnWZvmze2qyggU",
  "key23": "qehjfBU8hZPbt1q4TYCkRbhG8b1mQEQLNRHssb9h8C3WL4F2dWEdrBmcm9T9X7PQ1tUfYPEqU56B46XFZssYhNU",
  "key24": "48ZWRQ23sj89ReVNYdgzUEUUNheR6PJYeVw6HiERksTWV5ge4rg3AAAXhvfdSgW2rG1ABPAPdJZMMz1dwF4W5uRE",
  "key25": "5yD6UU4bp1RhKLKqvkDAW58Qg84DfUijRjSQ5imn91mKS8Yg2QHGvoqRDwmbUnjBQCpgvJsVuFGZYwQdRxRsJBvN",
  "key26": "3J2JC5Q7CAs9mazSZMfei6XpLYAacwsX7zaxS9spW8eTbHeJ8M2KbEMQwCd2WGB93dK4PGQPs5L2MCLjBL968CYc",
  "key27": "63iVD6BhTYtxWoiephN24ZTVdGmyaPXokU3ZfNokbq9CoRjzkeybtoEqywqi8fKVUA8KQba4STKe5xjpkVJgroi6",
  "key28": "5Hiy7UDZCkQZshLiJJBUxsUG5SQ5SqURnKrsyCcJNvo3Ea3C5sz64KZs6NCFD3UrE7tn9j9WB2GrNnJ6pmmEAeyg",
  "key29": "5ksd1DVQwqQMnh6m47dRzadAU9ER1rKumbv9LdztLoagwhwigY43HeBUYNRAaNcU6k5z66mbTpepkfXRtYUuELGF",
  "key30": "4H1qNEen1vrhbRre6aATQqikX16WGJvCatTQUT8VdNEy2ghtybpZYsFeSqHipQ3Sp87xVsCx6FciDn3gcnD8eZL1",
  "key31": "2wSoyTCkkxzbPdmtbXbPeBCUCYpWE1rwkihnEtYo1YccnSPgWs8wkrkR9gD6nySzqgsTMR9GJkmp8p6FBET4Geoz",
  "key32": "4PkYKWXqnFh3QiS9jbvjJ2M9dWv69jyTJUQTh878AwXYrUYsAtbaR8gLR2DeLEdSWz3NE7Ko71dYcqm6LjoLeRG2",
  "key33": "3qNKmESHwM3i6C3W36TeYAGTnh9inAuAW2ufLm38n4KCwG64c2gtjFb9ThvGtkuAYJQ95aNDfDn5iZ9MjEcmJoYQ",
  "key34": "4S6dYfFXmXM1ccK6vPzByUKESPdbBBVoHVuP8uApnN2Re1XPnu6FPkGm5eV4Yg5Sjr1UYbHnxXmnTgMCfHWWWVxG",
  "key35": "3iZ5Y79peP9uoeonnbVgHYGJCw4RsUs4JtCq83mR8UdJk83VW4xT6bHWQePuynFMPy54jCijcrXcPqKmc6RHWU15",
  "key36": "4U4Xv7oLdYDr5xYt3WnyCL91T5rTSEHrMRUPVbJoF1VHE65ou3QKd25vjxHaKJdsV4HyPtTq4X4EiADJBWn2n8wr",
  "key37": "4KQhTQjGJ8VkrukqcwLxz8iLovczGkf3CrRxB3LMEu1hvA4BmTBV2epntzN71oMtot6dy5Wkk7Sbm6ZVXgK4DA1v"
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
