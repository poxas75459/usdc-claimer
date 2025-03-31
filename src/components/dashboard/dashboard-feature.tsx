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
    "5v137SYWxrqWZKZsxXtaf6QyvSw5862EAB4jrkBtnnAHaWuAQjNKty4hbSnGtXvnxd8gsEJ8sb1m922hYMbY5nGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UyNsvkxQNtEAATSQoAqb2f8neqNiVM8kETGmjs9xGd7HAanif82vGEuGPpBaBSWLb1iKQ8FfhacSSEj41rwejKZ",
  "key1": "4vuJ49KHZ5aGJMToUkD3avmBU6k1yYzZhT17xUx5nAXZiGyu6TWLRvYseZMsM5XZMGfdvcunFwoK2tVmvwDEU4gg",
  "key2": "26AwtW5RLW7VAeozMYT5LzJ2Hj6Dc6yvNwgwwZhyEkDmFHcgXUkAmqciBAgFk8rwPkgK5p4E91iq6uQ7e3PBHPHW",
  "key3": "2WZqqzYyFXkjiTH23SYyusAnZRqu4D1Tak6FoWVqNG8JcsPbUrN1HEAoccRJkX8QkBmb7soAzNHKeCP4hjx4mCni",
  "key4": "W8KjbZc6AMRpopKsMfsGt7fAftd258iPiiejQkgWH8BQnHSVRFAoKmLer1FVj9XZnJwkJ11DzpbnDiFzyzTdTgZ",
  "key5": "2YsrWZL95WBY5Us3iq7WeBA6f1hNm8YjvjCibS6gDA3Z94xnNjxvof9cLKwR7xmBNXtUbYQBJGhjaXZtGzXYzEXc",
  "key6": "3dP5wsftSzC4idaiz9qXKY1xh6uKzz7YUfz27PhHVuEEfmBmYRuyTgydo7DFmzMU6igynQvaaKKGFzoHKGM6dcjf",
  "key7": "z6FfTZ1DJdvuVggdWzcVMWm1awm9sSMfy7Kh7R3zjjC93JMFS9PRHqswb6VGpnfKGAEWLvbdUtyByqghbAZDaR3",
  "key8": "MGbHbtLkBoKiayssUCb5i8gasW8GoFDVYBSTeNkBGXx37s1PKM3xmSuNywtpG31MK7PoETdy47VwrHPzoB6yF1y",
  "key9": "51EjwDeCJWvf7G8X49r8eN7wHTkdGfaU5ri7aY9jJ7HiT8farfHX34nxk778jxLUEDDy4VFCBtNDwCXZ6TAkVLVF",
  "key10": "48d6TeyqmMbesnUGcRVxQs6ARDASmB8VQZkYESK1Un5sMhJ6AMLPE6fWQ8QMgB9QFf2oyUvVqpSL2JVFrp7cjq5w",
  "key11": "3wFQGzXgSKeAu293W75ybadrqpP3MFzAvvc6kiiD2VVdtrxvQtNhVE5ZChfJ8nDGA5MSyCC5YRuymPY89iwpstrG",
  "key12": "3D2zMWre9u2bjRno9pm6SKjxW9XsiPKZ7YmUxecrmj8rShSvxFCfQJsSHME5BWAgSMPDeCMDM8bBKWd85hcRokzY",
  "key13": "5VCXqtuMaZw7DNr2u9DPNaDfFHs5CFd7mPexaQ8GMbYrLpqv9F3nfpvUTgB8JmYxLPsZcnKzanctcEwvg7MX2yE",
  "key14": "3yY9xoiUGAQLDYL8rZxwndLQkkBZxZk953NJ8wKwjz64qJySiQYKF4Ev3MZvgjkJf2oXCHj1APySRi74SYHJTdmh",
  "key15": "49qKQWHFPibgdeehwde2ej6eFR2MkXXhwRrKpvbpH5v975ayxe4GTeWX9Uo13VmQpZ9U9kjNp5ed5dJfidTqGUZS",
  "key16": "4gHuXREhSGRNDeZpvVBccoHRf5MFZ3dnSGUNPj7MyVVgA5827imPP4cLw37conVEZNLqzvsjURgBcm5Ft7JjXLQY",
  "key17": "3ENNTVSg7ZD9r3QgGuRsLmoFHt7XUQXKXLtYuf2yppa7boBofFnKcHC1a7o7h4CXB1AAEgPn2QJxcvTaAg4QiSXG",
  "key18": "3zhzGFizAp84qRXwRACyFeJzbsMrRCNPvYkgKMsShXPxAKuJxq1yeVDnhwty4F3kg8GYbhn2G5ztizmtxkftahnL",
  "key19": "PCNPpje9cvdgo2pguJcBAuynuYYhWpSQGEzUcCqL8qT8S7M3ACSGk7V9tYqHJ7BuYaE2ZD8aCkynMKm747BebtQ",
  "key20": "3BkZhHnVQtPyHjJpjAuNCE7W2kezz6UjZF3q6Bf4D7DSRnThN54iuFFiXXRdCMtSPDv2TWmzsJmjgbMf7uMFfYR7",
  "key21": "52or7UQT2ERh2JQyZPqjrxnHr877qEdwXorj2rQ5p5odk3GUq6WCGZWw9WyqD3Zw5DiJWqUqgnZp9ikkWKETamAh",
  "key22": "67mZY1x5qhvCScpJLZ597anAp9bn2HD5vpxntymd4qCMmYXTyfZ1hGq3rxxz7RV59R6kautHyHcisyvSzMrjdxij",
  "key23": "3SSqSPVZhBMALKYRExM4UQenzJbBdHCvhJ7wG5ZKJ1eAL9DQMXLKJWEw4RbggE6ktht1dS6xCZmDrmX7QCSMXnAE",
  "key24": "3oo56Qw9nyP6paXhBTKUgLYgwPTp7Bm5HM8mN1n8j3C99ctTatW14pRYxRsazme2WvmMzPsHbW1cSrAZpcD6hEVA",
  "key25": "gCRJf9ue8qzHy4Zwu9ZDjB7J3Tc3caGwdn2bsFV2mJMJMDf6EgNiY3QRB6gzE8DrczhLxpmt9uWyWz8FYY3q8rT",
  "key26": "efiJSTKYV3E7RSsG8ssy2VSRZtKpLt4XRnWXwgxgFZ3UeqVqe5UFMYBb2wKTMPqfcDKRp5yyss8TJMCu5BAg1Ao",
  "key27": "9eocrAK4EC4s7JyRyMcTTvgptRxa5af5aq5nszy4EKtj646QsA5hC3MPAceK51eDqQp5XJULtfmxfQN5PoDuQSZ",
  "key28": "3dzU7b5yLtU6dcExha5cTwyBqBik7GAcFcxQoBc6yGkQirxtUbKx1PkrR6vsjDmFUPjHnhL3CqkavZQxfDdhtzxn",
  "key29": "4SvoRrqd4nryg4s8xyyCATRYPczXZZ2cxnEjY18AoEQJaHQTQxJVpACVUx4DpFNr7i3GBjDbV7onPZLYqEq2cjRg",
  "key30": "tFiqa6WZ71VwFXGyDih9CwaZA4D9qi6SnWEfE4rcbjF4oTXC2nH1KcFfGJhuqutSdmyG5mjwg8hVZizAWFWZ8RP",
  "key31": "4FA6xdUfqgeGSRRn5LHijPiMGw99nP6sN9HKcKNjD1Kf76xKaEEd67NZW91KQ4qcn8c19MuDUVkMs7rVAff7UVbp",
  "key32": "4wm9D4FVoSafLjjium4jrT6ULM5nhzgTaVinL3A9XWdVy15rX8w5DW13Eaf3FpxZAEirf1VkAoHVwu85wBhWSBf9",
  "key33": "5hay9hq5YBn3ZspeXBuVtNi9bVqfNUX8MwdY4LYtmwhNok7skRr7Xj7GtxmgYxD4SGon9WpdK4EWkB6XdtkczUK7",
  "key34": "3A2ZVXSgsQbqCvxRgh65MZbQ6xpGVxd8rEDK86qGEBr4JmJYQNfaZioo5yNowPVnqA9WfvdwXVpCdhqt4NpLUoza",
  "key35": "2AvCD4kzYgdXEzJLFEo6PzACTQhtphc5KgzzPeLwuWxspDcKnxDWZPCXjP2FnWgZKvGXqMhion3zocPofBUfruRS"
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
