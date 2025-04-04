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
    "Nw6LsdmP9RoM3vnKDrcpmZAnVpaxhcSoQzEJRHcwvEYFC7frFAhKRiENLzB5fqo7UvA6fzhP8936ZR75h68ojLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UxGUWAbCrYLsxc7wZWVXvWJMSNjEny9aAweDPAJpuWBZpgmy9bHRHpKkz1ya2yBxEsFFsZgHNTc7QhWgTzJNF54",
  "key1": "4vQHpddK2vJLbUHc34RdmrwfkGGLuiX6kCrqR45M8pP6Mr4smRhZy1f5Vy27TqK8Es1WtjvQ8tb2NxvsDThUxEij",
  "key2": "3UXteg75Lo57uEYJ67pMa6SQfr5YiguF9qHyV7ZUEFQiuvRdmqqqvYum3cRUMHCJdDBj78MYRQ8abGaS9NMExqtf",
  "key3": "495YYpwff325kw4GbyaeW5PaAPRrA8np8UoNymNrJNMYfaeGHvCVh251Jnwyu4Lg7bffXJTFPmfRq75LLRcfRfTh",
  "key4": "3Z2itjqna12rh4ZbLmnmBvXewPyskeAxJh8qMUPvSb7jhPkjZvMcr3kYY2x9EtNW4jgVXte9ZKZ671qVZTDSJuVb",
  "key5": "2EouJnvubcJ8bTwVdbCMruZoYRckXKo7QvpQfYKzGwB7ALfDLjVtsFqnmyvNG6np5CD78rpifZPsHWY5xhtoLh4i",
  "key6": "3q9y2HecxJdqeU9zjSqx17gPXDpDH5sS3SW6Kzv1hCz82EW5VkccwTwmPmax57yoBv17HESXKUhBkmSRQkSNEeSZ",
  "key7": "3MEuYkaeWuQB4qfRtZGEy9KJsxm9cHfe1Zno1DS9qk5mvBkQvPWp58219ZXZ3W3YNr1ojHhbyN83pM6kixzmh2J",
  "key8": "3XYcYZvfZLtGU371nbe6wLVQ3aQZ9V9wMZ3uk8T2sbtiDpuQDe7qtY92kkVTmbPRHPGp5xVp4BwY7g7eUbZQ3voA",
  "key9": "53cQJkmp6DqK4uCB5bjPhX4CpPn7RaVqwDydfesTRBJ6BZn2YqwcE1SiGsweu4zVxwd3AKR7dHsDN7AjbYwDCtNJ",
  "key10": "4ci658HUvzTUk3PBrHFtqrkHgaAPA3Q4pK36y43wbM7Cv6Kc1R1pwY7A5fsyby8MRT4927L6ZWkbZA7MrYQDGRdM",
  "key11": "4oWqGegxQk8m3icvrmyf56Y8iptHKThzUaee3eR8LCbBPQy9EWaP8zBr3MhPT1dfyo8AFfJ4wuxppDL421QUknEi",
  "key12": "5quewib86wi81JPF6ptnSJfpnESfMhta3z9Ttk38p2N4nofTjFDSgWv4NyhTN2q2uoLmP1LfhxVcHYrg4Z6JTx7C",
  "key13": "5AQ9nTmApg3t35dQfnbqggzehajospChXjKZXuCr8Z2xfF9esGA5vwZbtaXBTFUS2uePFQEHhXX4QnCxYXd8BSAS",
  "key14": "3tpEy5MfEr4LoNJgERVALtmFm61uR9nhGCYGwdTK2Cv9jXX5KX7S5ECQQNbuQtfo1vUy7Hxq62rdTF4LdvwVi5Rz",
  "key15": "3eaZ9CaXt79mzZkTBACPbJPyoE3Qr9SvwqTEBhLuAR3QiYbChQtJt8y1xskdzyYAy52Bzrt47n5kyHvwtQd5dEoq",
  "key16": "3dauj6dJgwkpuNVnoP86RcjVY4r2BHWeXHL2YUwEQwtLxxkugMzDgaTwn1YUcVYdVsJMDYRP9Z2DRw4xkGBY52o",
  "key17": "225dTYFaonpRqPAbpYKxG8cTMNKCbivbunSjRoSEJ9BXEHqRYXDqtXohPhVX4Za5JXPrWCKmk5bssvPy7pZ42cxY",
  "key18": "3nqMvkeaAr4y7xqSq35krSCg5zTXfh5cUqVPLSzF4pkaKuDfdhweCBSkN2FkXNYcKvrr4rAKyg1nUz8u88g8EgNW",
  "key19": "2PPdHWtrRrjn4zHqDnveCqJVPSEnQh7WPzuKgfpP2HeAK2zcAJz7kf3php6FDyry8FUaVkeTi5QcsE1a3uUpeJjF",
  "key20": "Zh6Exqkns982C5DvYwdy5VBToLgU3gN3tcQxgqj6mhfvXoPANj59WB67DtBPbZosy64Qvv9Y6KioVFSoQyNNJ4W",
  "key21": "2Q4HJNvmF2dxHNoLtCaKwLRUFBUah61GxmH2qi9Qh5F75G2m6YkmW3qHf4xY9R7LrJAQyYZYMbUrLkuQVABPgX9v",
  "key22": "3euZYgkSMLw3Zyn3dxf2Br1GZzeJWLTWmudTK4uq1kd4ueEXdKUixH38JC8fXtPjpHeifFhraEGNrCzZ9t1niona",
  "key23": "4F3y4xVstxg6Z4AT1j1oGxuJwLUSryZXs6X63S18QDdwKLWxXQLV4Qwny8unrCRP8xVjMq31pmYZeu7GSkxigrah",
  "key24": "4WVJVYwphwnbB4rpQeQ6q14BA1EWqsd52C4utrPLPkWYroYLry1bZo1TbGDGrL4My3y4shUouqXmbvtpXnArcHFk",
  "key25": "3K4bTqY4ZvR8tZaa6rRfNTyccbFfsiRoPYXMngLTuV5hVrjQ59C1u8b8CrqurJ2HUjsvvGNNKgwwBcuYTC2SwWLy",
  "key26": "653pL4cU4YBCrQ9drPxLPu2cXbfjkFuzUDnTGMmV3ARtB3y6QLEkaevhthDQZE8MmUizRBrKZsPmZjeD68MBGtMQ",
  "key27": "3MZLtSDu5sfX9MfSn9pLx9azWZvPLJjYqosgFcd9wiPcR294VLq1FWL8eKQhBTvdJsUJpPUASch3y1hnFWM7ddHo",
  "key28": "2q59hDoCbbA9pNPcFPYZ1x5GsAbiZ5tYjpTqr5V3ZMDbDGAj2jRA3X9a2X5pX551HZdSbwgAh5TsgYGCrgZjrbZu",
  "key29": "rQXm1dv8tk2gsFuhMBJYdtnbf7mAC2pCrTEenNK8v6SiWB1ARRxJKBZ3yTUZRKyKDqcWEwdCENg7At2ALmXQ9yy",
  "key30": "2HKy7soh5qewModchsWXeXuMR7CXH7HrXZi5nCSx5Bdfhck6CBFyBUEQYaUXH9pCdaF3vgSYcK7n7vuLUcq8nMVM",
  "key31": "3KQHbFKDiEzAP18HuYHEyJ7xHxqbEaV1gJFX8UpnLMeYEwnt17DvY7oyu7XDSzZiYj43H3d1U3G7gYxo3j8TeFhR",
  "key32": "3m3FX9oyTeeQsXH1xEqNpCTd7tMCo75GYnXhKNsc6ahDayB5a8dWpoUybn5t5VjCigYFqX969o4mg1cpx3ecPehv",
  "key33": "5Cdub3RYsbsmWz83SAGBt3M3zkq1uRmdSvW4TLk3sR9XdNn6J32DGHZkEdKiNetnzZkvQH7JkXVx4J29RFqvjASR",
  "key34": "oyuHRopEjAcTdL2vfRqudau67AaZwcP57YSWeJ9ooRrqHaQDRvMRxBxrUndg4emUCRDgV7GE2VE3Fi9CeZYfbgQ",
  "key35": "4istYFSesjsf2LJmKsa9f3bp3NRd4Dvx4Y3zA287N9PCEHbQ8pJKB6JJbqj4y1Wo8f8UnPdg7L51EUeXoDXNVokD",
  "key36": "4V1UyeVNjSpuYG2xGBSEBXrTT3L3Kc6MvYbmkkSYhVEJJaEk3RD65wN2CGGwdS7d9ohjqnXYyqD5tfrFKuPPwfvc",
  "key37": "pwudkPq1gSg3f5U4Bsdyj6mQrKKs8dBnLCvZEWyun67aqxwGp1XrGttmNNk83vnkqsuV148bcNncXVK18jR4i3s",
  "key38": "5prqyvtbPrffeoCidF8Xm56q7NPCh13YguZcC4hkm6jEDDZr95jgKCLkN8j2h52H4UTWxiXpLVozAnSi7Mb9yev3",
  "key39": "2Y5awqE6SHY959NdmYjjHAv2cJaVj4xVsisF3Vqb35sQfwVFVHsCxjZsL7Nf2ZNjRg6NDJ2WyuxQQbjLdCNAGcyQ",
  "key40": "5phgTCzxmxPGZ1XGh4CXNm69cejiEExSYUFXu9wXCZZmNbhL8HqiPamS4UjB2FKBDJUVpkavibDzdgLMqhP7u8cb",
  "key41": "5dndkYYkdgfW9BPEHv76gRusTBBwgWfUoKxLhWJpZbbTqqqoDgNdRMB7GFMp2X9cU4YUF2jyR8qFkSQEdh3dizUF",
  "key42": "5JptiSVP6DT63TThNM42xkzDK5EXjveem84EJ72n9kw1YKanVgka88dfyJfojnN4ZRP3nvc83KJ7k8rUVBnfFfhr",
  "key43": "b78sEX2SSR4wGHsaKYMPwGaYmDrTE3qjhHvTM5SwutQNhZmv3RhsBjeGaX1yYukCE78vC7N56sBFMmWYvTPauH2",
  "key44": "4WorJmATKYSFqjMdyBuAdWhSiaCjTyfSca4CvCNHawuhjX5BtUB27FEqydWu9UaCv918yFcsoanCPHXYvTafwfM1"
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
