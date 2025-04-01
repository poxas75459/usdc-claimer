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
    "dsvZszCz6Y7k48t9S4fcHjvqpx42qLktXRDknX4fRTVcNAdmxQRfghq3KDseEjB3NEYk5euYxeWm4YWGw1CJynz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Y3TaMeqgiVt2xpAxVYJ9sEr8NAdHkpXW72dt92t6T148UT3ny319M9mGdeZLfrrbXL5DnLCf66w5sn6kewkMs2",
  "key1": "2W4G1itRn2oTGiW3NcA1wM3HEMAEoDLHpdKoytjx5uXWt4qX1x1bFeJET8NgTCGAg59G5affCFNGkhKJq3zD5uNx",
  "key2": "HQBjdxwh65AAbfYsG3y1G18QZWwaziT8WyTxCh2gaRkRc5Dzh3UivZJSi68pnzu2MYqCnLr4yvr4yy2o9H3aY8p",
  "key3": "5TXHa7coUEUsLVvroZVn5egMPYjr6i2fwf4yPEHH4bgQsNkCShzGQnJPSj7uKqaGXSz265dKA2Ey8CFjT3UNhd1z",
  "key4": "UAtq86rgRj1HwRmiNvorQVzwhYMHDUbW8sjDDPCpAtCE2DBiaNmw76HeCABosFbuH8gwmQgd5ETkNW1CPyQPb1e",
  "key5": "5se9r3gfRc4wDSCDuPVpWcQiGvBG8pejhPoxoHWHmDPGTibJYVZ4FyUMfeBjaCZCW2ZzdsAL5K47uGmfkur5wrS8",
  "key6": "3WjtwNzhQtGXjumjxxkD1UYHkTtnr6XQbfAJ5qHp2kmw7JXriHHz3jQdhGnkfvQSWJ6qx9n1TNzBeKuHUKDcANPm",
  "key7": "LT4vGuZuQVojsAjiA1ahUjaH67A2oe6Y8rb1KG96aMr74VMfmUNVJSk57r9Hu9thN9gHY98Nm5BRkyjoxVEsmGp",
  "key8": "mGSVepxmZgaz4fbAemxCzaNyJDxR6WMb2MaPargKyzG4J5JRs1KAvwPstWCcbgpG3szBKFGA5JcKuZt3Uz559Mf",
  "key9": "5d4ZFqyxqWzFtbA8qKRiSeYGbPChuWH2emGBCsZvXi1QXAMxBsCgfryk8usSzhZqEBFe3hBf6GRLrzXg3LxpAnyp",
  "key10": "4Bhc6TZuUv8EoLfGSiM5KgnW8FiC8DM9LKbcbC5TYBwwcKdpjSU4defLkrEmL7i4aGNhfqGYwgyWmzzjmt7nN1au",
  "key11": "5bmToCefNyKZdYeCUa9jLYtWeZ1xhVRLZJ9VeuGLrYpSvta9iQVjKkrLF8hZuM9N2LdvCGd5673dv2dK7hhxkqDM",
  "key12": "2goEKisYPw1tJd3VkRP7UCmTc6sjgPvdK1hsfqCB2mT5QYMxXsm6cGcGH7giZK6L7js1A6dQoVvX513DLUC1JUdG",
  "key13": "4nNS4ktZtyY35E71Cd3QBSUEPVtzASL3MPLmaFpatGqZd7oDYmh72Z6XNLfJbnkGr1zEcDFYvufDnsSmvPsz74sV",
  "key14": "46SZbxQcfNjSu2KXihF2UJM1bd7Lae1oJ6F7fHCv4khPh2yH7mzNmCDT7TR6fpvEoajF82ARDM3CbYm9myWgP57F",
  "key15": "4eBJnE83sgM5gDo6Xo5kARiyXpd7GZr2MLNHtBxkjrMc25zPjKnnyHU5FqU1G3fLQBuqGEAmQcrGnQhgXeSKFU2z",
  "key16": "eZMLk7RRk5QECMcHceVsGKjSyD6m9HANaHQP8JEh6JAX4424cxkTBMK6jrzFtLvsyMn1zW1CcwXy6ukY8W9M4vH",
  "key17": "5dkzdo1fJNpGfsfok5KFavydgqcH51YFAkxQgFJFvdqqGpasqW8rLBGYX78rMSdUJp9kt3ACx1p1mbyudGvQVQG5",
  "key18": "4H1iHWt2Y3QXPGvdqku1RxG9nfTEkX8GfZHVuVmuW9VfXdDwK9psu4v2ecPfdtTwDmaTuJApoAJhqKqqcTjJKHDG",
  "key19": "34FTRK2KYVSJ2VcfQy789e25w9f24RQ5TJPwKds8aGAsWhqp63a4ULG32qtShZ6hB1XAYfAh7oXbVL5anQnE9Y6t",
  "key20": "3XsJJMdgrwznnxVE5dt7Znbwb8gqPTMr992dax1UdMhQMaVejZh3txdcaym9gKwJhjsyd1HrDm2nBBzXGDoMnLbc",
  "key21": "ozb4NNVtrQB9uVzWazHrSLxKPg6uX78Dts7rXFiW2ChAfKXAGNVJDyuJchyth6rh1pCgCHEfxjJK9rez3b5jguh",
  "key22": "4vXs2xkmuVgbkYh62FiBUCQV9LacXoWWsiJrsHvXKF1MLz6eBd4m9KGk3kCzWgemaoeU91wBkFJ1tP3q1d5tTZCT",
  "key23": "4FzYRA6WiTkTN6oXYMaGSUKPBsyaoTWfcm2tBTrmhN4VHoE6pcdTYWjwC3yGT4R22HkfSw6pv6jzKongmhw4kSxZ",
  "key24": "4Mv7LD3yF5dpxQDEd4pnM5wfoLTbLfkp1rx6QH7w4qKXZFoNaRquXu5Sq6kcdexDVXeEF51md7vP6LT3ny7FaWTJ",
  "key25": "2ktVzHMgGCqCY6CD9KUruXgxxQez8ccinWUmwjjWWwNprQWftSqC8L3bFvJfyoEkHJWBpu7NcancmTUfsQsh8rVE",
  "key26": "5vH7HzQc798UYefjo4538xoK8FQQewkqmC141UcTzzVkiWLkRX8C6UDJckjp9Er77DPdkVtMS2VyCiAmxoepwKA8",
  "key27": "5sLaKZaJDQtyDL7LTGXaXWk6DM7rXQFjqdkiYafu9rGu66EHuzgvmionKG95RHZ9MEWCwcNs1g2TMWqkUazeKJgy",
  "key28": "26z8gvnJfUuMdWe4zAFJMbjUqqEUnwjXnqPszxKinjMjvq9WFWLmMSYjt9t6CBRxS2XzW3yosarwTQ9MJUfsQnsD",
  "key29": "5CKCMunFVYWqHY9zmB5MEFfemTrHwGK4EJoHGQTYsjJeXD5BrtZprdzPhgE11gvkNY5wAQSBdszZzi27ZcupNTVb",
  "key30": "24tVmXRWkLTWFxfyMk3bqCCN1waU1nh5odS19M2KiA4d5nsHdMWGAmSyMkmokYzh2KiXPXW6CpwhBkPb491BrzRC",
  "key31": "5uPxAaJXajE7BhJv7jP51M3tueExA1Nrc2Nh8Zr9r6eqczkyPkeAawC5g4nkmdqrGgJLQHa7qBexX8pPHgzG3hav",
  "key32": "A5vTDbza9QLwE5eZ3muC76bwccUN2UrYGKQYuxn7Mk1dS65r5FMpdvNtHP7Q6LKmCxjpfiUxNJ3jatNauWWi267",
  "key33": "2AtLhcs9mdRbP7rPUxsAdKQNZVzcvtyeFhqa8oyzJzsJ6NSWtKWht8sW5Q8WgN3pqS1Bqu3fFMqSTuWYQtLsuvqS",
  "key34": "5g4C8yko9tQTFn73jEF1miLriFqx2aDSfA7wh9UQ6bkDQvHnJJs4VsWMe6X4vRh3CGSoJSERLZEUtCuJbzs6z5e4",
  "key35": "2VMtRpZ7HvknVM8QQXY5LKHB6hVW1Lz17oqH7eBQJq757AMACH9zHhrNVNjJnfkSzvTCoD4DRVxGyFvw96LuZAyR",
  "key36": "21g9jT9HPVHnU1G1aBnY4Bv9DhHWghmGskvYDSPhthWf3PJi49H16XakVxQoWDbCQuu2aicqEu6TNuYdM5xHzbhf"
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
