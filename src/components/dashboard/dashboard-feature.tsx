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
    "fCZFtGNq5QPuxpvv4eeNLAzaw5NjEU98DCTwxwExyUuoQ6agP7wbLyZ5HmtyK3FJ5GqBJns9fAgwLBMpXg6Fg6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pA7nfxqMZySX5XVFhCn7GhwogLcoboZriAsFXF7ydzEzCaaPTyUFCAhcVNT3zFtaQKJSzwzfVBbVArJXuE4mstc",
  "key1": "H61msnoSAbGDy4dG3GNqjBFurkVoNTie5p3NiKjh5e3cuxKDkLdDAuHgopRkqadAtNQhnNJ8D1kETqXZeRRXgiA",
  "key2": "2HMSvLsoMK4xVFzoAZNFDbwZtcRub543FQ1WTPxaMC7pp9Y6tAaqaNuXX2oX2BQgqncJHRr6dZSoccrGRrKyMjc",
  "key3": "5qSqSfrvMmWFPPFu676k9tYesQ7Aug47AcHL69pa4f3wvtKHvn4PC1NyDLYKcCN1n1iFktD61LhjSb1473JsRYAs",
  "key4": "5YHdQBdk2iEpDnsBRcybQh4qAvMBX7v8JHtKB3KxDXd6cNyVyFvaBkrM3mwhEz531w94LmqSGoXcF5qmcEmkA172",
  "key5": "2bzMMbiYhxjCYWpfpa5XhNnTTLbJDRjRj2Nd6zFwHm16XfEYg2kbpAxDycLvTKe1Zv42uVTwFtKsBRohrZfqSwtp",
  "key6": "e79wyMYKEuXCMqjiwneE2B7oqF4ZZDo2Meu4kJDX1rcLHceDCThWZaDmT7hECVMMg9QVk6QptnyTP19yj4oWJ6k",
  "key7": "3FBtdtLUPiuA1AWrdnGvHRwbvHk6U85JuL7xrsuZDpfJz3N22z9jDXsiJ985FhTGY43m2R4YJJc88mn4MYVCu4QR",
  "key8": "4C2jyZSjMr2GDc5qtjqqMvbXAJ3rXjXHeyK1dnHb9pb6u8CND9JA9pmnnxxy4JaWF9KypQyWqhwjHMR2StsfRjEx",
  "key9": "2sjxwNzm73Qe6RCzuBovEjp6LdEAJo9sL5fzwxbkH6NhXMLYGFuZaTyfs6nbtKekcYivqHMvFkWm5w83ZZ7Attya",
  "key10": "3RYDhXkowQoN19NAnGG2VUAXN6H6VP3wYgYdYjKRLLuoP4kDPTeCYmNU3iMBZumSAvGn3L3o123n83JvbfKv5GvR",
  "key11": "2oG1LcAe14CGah1Ta35C4c9rcuzvhjcGqQavFr8z3qt4NGKYs6E9QkXK59GMnGGMXBrvU4L8jJwL4m2JRRjMrfab",
  "key12": "2Tmxn7dtyqz5LA5512nHtA7RoDDfx3nD7hg8KvJsf9WaB3C6BhPqskGNHKKmtaNPmbSSbcb578EeFbTKQc3Axvga",
  "key13": "5HNVVULQrFyv7aLcLYVng1F1knD1gB4zHxcDemAajVYUQM3Szn1XnHYKYhsUmspWo5XfryZ2hbJ8Exp98PQbkkk4",
  "key14": "5JoFDBqBCGCFbHj2tfv1rA4cmGgvovXUqwfJxYuC5Vhuw2PFAF9gsZxjQGD9tfA18rviD2qJFUUJ9tywsRdg7bL6",
  "key15": "5QBaQjvTS2fZL8qbwhav1pEaVYJXQj2Ak2m2kCWCpwKMXgZfJdx2MzGhPyhtzMHiZkawiGmXFsPAtRcqYTp3Wu32",
  "key16": "4opSLJGe2aqYup7jzCHox3CMxSnfhFP11hvTJFuc7GL39BavqCxEVHSkftTarj9mPFfnkkkPLvgGbnzPgevLvqYH",
  "key17": "5LwF57xb7jBSVDVHN28GoSviWKib1E9EWVLLG54nzpZ1RzEatpoigpm9Uu8QYEZhd85exvZdApjcvbQ1rRkgEAMS",
  "key18": "2rBqh7jWgk9C7MNyZFM6dxAwEZu2FsBGduMBvUGUo7HLCUNVkQYwwEVCsr9EcLGZhshkzasjY2TivUZCcPX3BpKS",
  "key19": "2UqDVLdAiRp1Pd4rmNXr5fc2FYHq3mPeGSQcSn49Gsq9SbwYBVLronT6LnaSEppFbHkZAaqoqbZzoSu4RsAHq3pB",
  "key20": "fQgkBdoKgiddzSkoE7T2DQefcRyYRZUDczC1iz4RgeZaSTaCTP7S5H2mnzsSavsiboNjQoA8a2RmahugfcutUWz",
  "key21": "3tJTYJzdqKuha8gh74ixZgGUsQbts2BJwjdGj99Y3rJKXnavwCcMkVgvFtqtirVvfRwsGkANh1EEMeQEjw2N8Y73",
  "key22": "5XTmGDHPbSvPbaygeptuuHoxPVjBjMKW2ubUGyqeRWtzhfF2W8WcsXoSXbrbxpBHXm1wboKtiVMnxEsTSVffY1DK",
  "key23": "8zP7nH56Yg3mP9swjaxLgn1sqtZbnptRY9C2Ng7eNmBAiQ6jE1p6JWBFK2PCiZV85GeF1cG493LeT4fQiLtkVVq",
  "key24": "3U6U2bpJjnK6S7vbj4efc7kenmsbJq29UVfLRDXVD6gsTHnEkHW4vx34nDBJBthjjkJjfY3F5c96o1nqGkzaqtZH",
  "key25": "5ZWHnjsdknbb4NowE6pJojknPHdgs8UReuubLVhDRMNFK9kpdDJsUb6RBxBUo2yhvDtytdfLrRRdsnQKRoZ61QAM",
  "key26": "3EmxfESBQx5Gq8ByTqWgjtmyiYBmWjHtVkuivC7HHhpYKFiSTCTyV2rxLF6eZeVe9RNywLS9s2pQdvLC1DNaatG6",
  "key27": "rFwT8jVriaNuP4yWNJZqTJnfmNjcz3WxNTG6QqX7rnjQr7Z1zBMY4KYNmQFQnBgctYWE4PYD4on872jupdKVsnw",
  "key28": "6533cXV8riWuMfgkxmxso3SnXtE5eQpa1iYjkd5XVyVA95Zy1LdemzKCMK7S7qB8wYdfhNb57nvJrx477x6xdzHf",
  "key29": "4hE1NzH5sQicKtWf8yQrVStV9Prc1rA5YmtBmfdxs3rB8qsPsxmMrvZL6s34wov1CyxyvMQqJb12QN2qudpkP8ev",
  "key30": "5eua2VkhLoARbt7Y542gNqFNUFpwsECvPa8s7VcMEpDyY5AeoaeYfi8iTVgE7iKHbsPiMU9QmJSUdwYoJu2f9fEg",
  "key31": "4YwPQBNhnauFsGSVamcQSWY4hrRPXy4apZ6uUJ9vkY3TUZdBuvEAvyrXM7cn2W7bDz7VCSPo9NbApfAjjwDgU1Z7",
  "key32": "5X21X7zHd7tkyKChyDHwKpg2gMdBgxeKw5QyZKT6LkXyuWGjGkGpaeKXn6tas7FhKcSWjF8ZV47DTSi92GofiMTQ",
  "key33": "4ASNEwBmtAP8J7P1zBDJCbdJXpRCr1mKVDbtqWQSXC9kYPmFYJXVUyxSULGB2gajgvxzfhtkW3MgbjQzZ8k59NUt",
  "key34": "3yEg9xMHA6AZewriFQhgmuXXVoBxauVS4AbPUESh9bS4vi4hL6HGbFp7Ph1xbQomtWjBWtf5mBwhzvsPR7X1iz1W",
  "key35": "555SESekedae4eLgffvsSxgvH5r6ecgcEcfN8DPMnzZuyAUZA7ZNb9g1BsE98u5tbZNRyizhGB8363DxUp2Q2Fnx",
  "key36": "4qMpM3buEWk5EDKrV2K4EHuTRACK2e9PAT7yt5HZ7Q6LB4ZU4b9yXQWEV3zuPteWB6eEqYSC2kba1c1ZD9wyVgYj",
  "key37": "5GU566eYaNJpchWu8KnbhmKuFBTgioPND9gYZzFst5pBdgvoZaoC6ABEC3A21KoHgjjGqKLYRHm9o6f77dFmAW88"
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
