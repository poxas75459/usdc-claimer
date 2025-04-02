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
    "M56NynUQZryepYfca7JEGyd5QZMG6ApuT6YaQGjmtqKq7EEvvJqneKHJ4zkc3JNSb1eoG5TiMTbbEFK9GZebM5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iER4gVfit3Xx47czYu2EdSnsANK92GaswTRQRJinXtigav1GijUVLyP8xt4jF7UvLMGDMy3kTKbwnrTEKrhRkak",
  "key1": "2NbEhKTRMtSGncBhFmZetUCrcAABvyu5WM9TCSr3Vk4qdf3uqD7JEgDF38q4kKZ3aM4FJx5Fv7CA3WU7wVVR4Xb6",
  "key2": "28L2qeouRBygPSztJFCeLz9Verr4iife3ZcBz7VfWWj415PCoTZYz9SYe4hfxUhiX1Gaxr6iAmWLjZaPuaMhJagv",
  "key3": "iL692oxVn4SPvDKZy4uL6J6PnEhBvCSqvkb124HH5NiezxTuM57sfXxwSHzwQVWyzVw7eW2Y6icG48B3Jr4SjX3",
  "key4": "VD95NwWZSCVG5roiQtrumBcGaPSeBeawSV7PjawSw862Cjo2gT1pkQvbVjp5DxP8DSUysTiCX7wCu1HowKHUjmj",
  "key5": "61WZonUeAcBm45k2GfRbLX3oA1j9pNNosuVE3q2vbg1sJe2UpnSqUET66d6MFrcGmtkEbbo8RMBU1vrC3dwKiWag",
  "key6": "4dg4oWjSP4dLxsMM51eo8wmGstwjzuhp4CvJDHn9kcmr6W1tYpJi7Zq8ukuUouycKpvefTPaEuTSxmRApQg8FQA8",
  "key7": "3Uikfem53KgTxENnKndBhYsKudYB4yqhNxssey62fGW4zZfXUApmhM66CyRfRCNgHdQ2BVDohJEkHeTZcyWTRvyu",
  "key8": "3L8YANXAn2qsNStf3FZHLkpXh3J8W4kWXc1wzy9hNBpRAm7zxL7uC89wDWCRCx9iPyWzfgorUfpQWUxsqUfNv3mL",
  "key9": "3Ycu3H7rvkyVz8YK6ViJ5Pvu2GubKV1pvydrqMLX7bWzTzVRJAabqERDcNPXx2mXqCWrNbtYDN59LngR69CQAA22",
  "key10": "PLHaguymRXmqVUX4uo7jMymCi34x71gv5yYm4zBbEaQJzVwwGPgRc1egf8GUA9hnDghQeWDhMiqkbYovNF4f38A",
  "key11": "5hoLJiHj1UAFigu95zkNLvVMV1Wm93pz3MTyexZpH8AVjPqgXEuwHWU3EzFVj9GNbSiMGdvQckEdC2GicrJRPMB",
  "key12": "3aGHh4RZtR7sn76cTMWv4hgCtv12C89DW37zvVB4KpsNh5yM7rtQSN3qkaPZ8xtCPHmap2Uj2wxz6PS4FvsQArH9",
  "key13": "5uVKVmuqnNZJ1emoDvoe8hoPQ9Z6pWPwv5mBdZFzowpnXQfiTDQn9fygbTSBxGjbQCdno4TXgbYj7ou62cx2wQbh",
  "key14": "2nw4ya7Tgf9Bm7GYKN8nk6qV32Y4F2BiKWAeA7GD29y5UthwsTrFe3p9XsaQWkEGuVL33dy7BXr7LttYuf3KMvwy",
  "key15": "h8ty5KsPoLRzXgUccr8FN1cGMFQ7u7X3w5N7xEuXZxmTMLXfX2U9vrUyqMzv6onuJvDc3SqLmdVu6nVFKJsW1dV",
  "key16": "4jnxvJPju4HHvEATB6xg8kh8oFFFFa4RXsB8nLKUh2wXWgRLGr5gxWtzmBcbfHjKrixH2Pe2XUwnKwzSheAAEenJ",
  "key17": "5KmwRZrupZ51siQvJ2JkgZmmDqFx7K2MAaD22FX5gTZNcHAryNBk39yNAH8GMQ5AR9rcBrNvCLrPUuyjPEMVAR3q",
  "key18": "5tWKfxovZmKqNTnfiQiS4meedvH9eR1pfKzXPvKb2ByH8tfcAzpZQNWMzM9ScpHihm5RwXtBD2BNSja4aBhQRMXY",
  "key19": "2L4Lz28974DW6NWeXy2LW8E7ygSgZke128hSXpPRfmUkCD5bzfk95TbLcPZZ4oFeWZZeZKJBfMHULDFmfawDywe7",
  "key20": "5G5bzuSsWkm9V9ALpDPfuKZh7eDDGneSjuMTGVWaCARWzGJjyJVicdzFERPjaaLY1q9f6H6TF1mgkNAUkKdeFW9u",
  "key21": "mjn7QtRcKfYo9NFPSrGvD7dE2Wg63jpnVB5iATFZS3Y4bMYD5A6SieKJgU7xFRxnwrcE8fo2hxTFaiKeQAiQ6Lh",
  "key22": "4bcEf4Ymvw1prv4FFsu8KqGxdczBvCvNTRWE1ECwYX6MK5vafy6od1RFB4HWemKuGYxFEfrNiNAMQzP5XkijKDGY",
  "key23": "3KERZM43HFCckw8TVysxDzZgH8oeYVRRHNNW5Eu9fmeig6xgQUiciKWUMW9c3HogiLqa5D5v8swCwVyhUJFesJuC",
  "key24": "2KHvnyMZHN8kLxxiMFVB4AiYDgcfjw7nYZeAnpSqpNr5UciM9Ner6GSA4gs5f6CB6UJmVcMyoW9hFJzeoaezJaae",
  "key25": "56VHSAoWBw22BuYsJmMb7UKiUcuTHtf23ujP4fPgVvSpE82HZz31iakG2ByGhT3DUqeyLzmKzjuXvakXWKdVPEtb",
  "key26": "2StNf72Csb3qqjtZARdjxPq23uMfnVDvDnWJLCKReUhfDw3VqeEaGXGJm3wwNvyiKeNeJmi1Mn3zY3noopkKVXJS",
  "key27": "5jSHBpGvRLtGcZ9VEBCHL85Y8DSctBgM335Qbsm5C1ti8waw4eEoYdt57YrZJZspVJVJR6Rv6uHAnXmVjauvTyrP",
  "key28": "5k45XE2XEYtzDhR6CZ9X1EJQKnofTMxTewL86Zm4kT5K82wKTZExN1wyk4cZV6x46yy3jgMUiob492hJjNWTWKEU",
  "key29": "4z1nUkY8L9SLzhZe2zMVccxoeYgQ2V1fwvDP6wyHLTxXRW8wxURwdgo8t2SavCG28HA2aSD1VYkRVRxMhvE3cHTE",
  "key30": "3ngpkwLQR7tJUQvtBFjsBBKLkQU73UbDKBdHkCJMGDUSWAjLJ7ZsxyVryac5AXxx54FkYRLakUmNaSGP26GMSD6a",
  "key31": "5v53bWoJatFfZYxkcG4UFX5rAAjnZrdQUuJrasrcxaj7tMJ3CYymNnodpLGPjkr56PFkvy5vwc9D8mWRq1eaARLL",
  "key32": "4smvm6347q4Tq9jcuj1ZGQBzUYVrpSZr4zrhpfrTTJce9SfMiGRjyfK1enwchnBabvUrGeEp8rzgPPXYrVKoLaDw",
  "key33": "3Rw2oiKb6J6hxTX8YTTRL2DEd834512WhHJTa2Exd6MxcGgGxSfk467To8npv4dqCV6eM1tDWRcqgqUcRH9pbsDr",
  "key34": "3WemGNk3UdTB1f8nPKUveU93q2wtz1wBEYyf6W17SCuKQX4rA5NLm7hEQN8nazT8AXrjo4bsqusfXGqbLveQpya",
  "key35": "5nhKPYqwGCkJaWkHZ4uSj6crQxnrYgy5nuYtaJb6VmGB2LgxNYmgRtqMYD1eCy8gbytCps3GMXsz6ojni68B81MR",
  "key36": "39ad7wMBzDwWYLnAaStDsZf2SM3onkz1MkwbGwAokoCAYb7nj5QBgrRr3gQWLhQFoToWyD92UVcFjo7tvkLKm4F6",
  "key37": "5PSXV8ahS2tpaqM1GfoEyUtXTjoFXaTguFV1mReJgNTYfSXar6b6qowxpy5bpr9NAGBiLYfeSFsYrkb7MmCBsrqR",
  "key38": "cnAbLj3htMEqPb9kQgeBwFeMYxB8sVEGDTN1CshCUA8AZfEx7KGAowpFGhchsJsSkn9VjY7X7HHJxwbErr96oj8",
  "key39": "2omTJ1a2TRkCe9gMdjACEuP9BgUmZyWyGFk4KVLJanQ51s7zz1tpSLC8zuiAztuPiwEDw6Wm2qmruBos8Q1HrZ93",
  "key40": "4xii4VuxX5wGJy1FjW5XjjmiknqcGBJwPWRiYovoVixuATde8xtMwusPBW6AKACccKgEJ7ZrdzvqE9LcfxTSBJgG",
  "key41": "36SMgbovBvHZd7gj9i1bhgJQ2gaiRhzYMcF8kpt7sJqmbvw5WV1WDc7YPs1VDRLqtUsa1CqfBRvQ8aU44vSr4Sri",
  "key42": "3Q3shqxdafyQYBmPHarnrsQLCH3enR2fnsoi2UG6KSGyGV6BpR7CGSi1yvY2fLyqnw8Knk5KLypf97EXMgjVL53h",
  "key43": "7X3b6MRWAAA9kJkcceN9oiPo2iPVdHsqqSW1QbrbJp7nfkqLFijsbzUhiphpJabBwyuXWikyySgWLz2X9yCD2SZ",
  "key44": "kKBT7kmjkLfJpSxRDDvkCtW7bCNyVZR1RB9Ue7eSenvmhe5Nxd6soJgEK8ZutB1cDFXBSwiHRcKewW53jkiAr3j",
  "key45": "54cNMnQSno9NXE1oxSymucv2b2eLb2Mhb6ygYTGrTGUb7NVoTqF71GXksvbdGarLUaCTt5uzMLe3biNioQpX3uGc",
  "key46": "5zHsX21kxBYKiQ7whuBmjtbf7CzpksVukCra5g8nraaL1xBCpRZvrq3sFBfJZHyeLsEHFdkMF6uQBoSb4ncDq2gX",
  "key47": "2AJqETi92Y35rmjJhTRMYKCmhRMnMVAQjBEfgjeDisztR85jxHQpQyGmHpSSmBWpXx9NvrX5RbH1GoLE4tuKZmPE"
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
