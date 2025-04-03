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
    "4b5MmnykmLgpH2veGP3iqvcFFMAEPVduGnAGrCUTcAnW275bbPpZkQWAPyQ6NRB9pgt98ZWbbsBmWtNcWUxhLUje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314KCepsGZzrdxKF5ZtPxvcjkLz58FPpiVBpA3N65sUaGu3QEgpPeZVryPWqwa3SzV6vNfjB582hZjCNpPFAx96q",
  "key1": "qM1HHoZmjsMW5p1eFkNcCpXxECiyGNVga6xeAJ57tPbVyL325odCSL9U2Mnyg1dwXbXfBYfWi5vwFrvDGfpimgw",
  "key2": "banNWhbmbxHqyG92RSSPfMM2XU2D81h1aQus7G6EQx8RL2Tn2vXZec4SDJtJsUMoSb9wozeAaVFVS8269K7RnBg",
  "key3": "67RaCfS1ZozbY9nzjUkePq1Cf9841oBWcUouXTajBzoVocUUBuiYmD5rxQMyveMSr62H3xpHBqNLSVHmh6uuqJnQ",
  "key4": "2dnRRtwNAzEpDE9xnMXKr4ja55o9PN457FXsBSyjqwSpBNGE3qCn99gAzbwWykYhSRzPKah73kjSHhpYxCQ8awmz",
  "key5": "R3prgpWzxQ3RHqLn51TArz49V4ZLEm5wukgwrBLUEnpTEa4YkMJ9DYrYLoFoDKHK2FHDsAn82ZKaYnXg1d7r4Rk",
  "key6": "3pWZfqfLbz9GBSpLe4nv7rQxHTBRM3rvYu2LN4U6Ct9eo3Yj5k3eNeAU2pjpm8n2NJP3jeCeQ9nyx59H7vAcTXB5",
  "key7": "3NMqtJSuztLYF4ton2bZMDux5XqDq2f6FaqDn9GHemLbgcttJ5XiKAgLkCxjJL8gE69c6SNAvmcaQLoJSYY8to33",
  "key8": "42LYSN17TqeLNkmLB4BQgHyPX3NeLGfLGS4WRq9JCffe3R1gwyZL759KLs8kPe7Lei55kJqvEhhWxrXFevJWqoHc",
  "key9": "ioJJLa9MbxHkChDhX71BhhiyYwSP2f1ShjyowCxdMdnTes211BCjZMA1QAy8HV53mTBcLkZ9tPTGDbFHdnqmNph",
  "key10": "55BaEKRatTBTswEKfgD4QknmcucMW2suEsASmYDVesRwRSED6BTK8pSG8Rj7zUQsXdbJNHHfKngv3xS8HkRMqRg1",
  "key11": "yjCtYseMjG136FFv1jjcbWhmyLMkqKFQcEMjtpYiSFryj5c6cYnc6EPz9WeBrGSdtivDiN6L1brsYSYNMztzWGv",
  "key12": "G4q3BBmG5tY7TR9KuByyvtkPCyVjjJLF1rz71bkgyLh9vJCJ1AEDpWTPS5q6yPxet6J8AdjcBWUVwpnWAMDjfhS",
  "key13": "5nCWzTSxfzibpS6sC5BNGnn8nKq42fD48rNLp1K8iwxj7gkybSnjsMwc1Wm5sHCUzLRpQGpGc2sD9Bshxg5scFZ5",
  "key14": "22Rfmhqhh9zs4vEow55azXqFgJwJMcqQFeQBs8YtPp4RQmbmEh9eenqDy946tkti94mxSULw78am9WYUhGYCMeHF",
  "key15": "5KfVi9F7YitMPQeH4jc4853wM5uCYTZV4qbTXtg2BgXTThfkKUW4Caizoc4wEDJ2B7fodx19Eoe3Y1rZQxyf4Uvc",
  "key16": "3zmMx8M1GW9oWqPiMsMtzQpKQFub5raN9dai9E3oArxRieqxgYgvXVQ23eQXjiTBmWi88pNcgGzfgPsDJp1z5T8E",
  "key17": "3hmKFoHMogi2t8e48uVkU3uT4hXm2nAuJjvDxLNtszhRpJTeeBWBKpZVCb7XF11dXiGjmGANrJkH1HEgZPKAK2B3",
  "key18": "yyD4eHG3RFNpef36woSP8PWRrwByYhXuPQ6GWTdxeZwEYJf4yx5ShFVR7vwcgBaRZ4WKQsXXkyM8YmhsV1kfeQG",
  "key19": "4wR2HnNSDUzVw79hq6QYriuGhYod4um4feTdzTofwy6Fhs4Jc25Ht6NcHfrkk79vBdYsxGyQeyyzeifg8izYiGA6",
  "key20": "38PYXNKiitYXHFuXpRwo19gscLjBBX5vLjNnzhus9uaRKSDj5PTTAA1M26fbk9ZMq9cRcsWSLQtMuJfXNswTbCSM",
  "key21": "4g24PFUo7c8MLNTjZA8dYtuBAsNG2JdfqjanE8pHD7uTTTTCQUkUpzKufBcAe5iCE4UFmxHVZuK4YXhJ4a62BX3K",
  "key22": "1eKLUrNJRKYCE8685Bxk9s74TcdVAtUW8aAzvvC9HFfSjc2PuP58TN7oVzqtEXFgrtbhcBRA2qkWhwtJ1nvehWr",
  "key23": "AZjAEgGA5dPjUvvMmjS2bB53iv5GAzfVdpLRnXLfBCyppynNU5KWiu5fMmpQcSRxCkbwkZwwMeP58VrCMJy5xCR",
  "key24": "4MFNgcx66XwNxN8scL1FnefhHnX7g6UTRzEqczBAHKX3mHLcfzihKvusTBc6bYT7A5yjVNaQjXyNJ33X9Pah9dw",
  "key25": "34mE7GZCqdMHsA2Jmfe1xsGP3W6VrNGKiQaqG1CzpTtAAbJbB1Rwz14Zz2HiWg8KymiiA4kbQz3zBJJizrgYwgtq",
  "key26": "2Kb5719Y1ArVSeUNw5J2paNZRZXSFvmGkKSteVUcKfB6BoqhWefzLM3RzRMLHKWSwXHfqYnBzj34dW4eAUMBTy8m",
  "key27": "hXnUZvk8niN9DLGFzViUKwwipDazd9BmDJqdwhUx1NXSxqX3x7ajKyxhaShYMRs4EucpZgE2HrVC7ENYEShx54P",
  "key28": "4ReCx6nZJz3aiJ3Lk1oKDSjfY4Jbe3QPZGL1YkqyKVDCCWq5gjwU7c4bFmuBWxT27QaYPV59oNczWvBrhwezSQwZ",
  "key29": "5cBprK6pJjbNjVCzmfwfDG4sgVtn7wnzRw7ApKdvpx5j694gzLKFe9F8eHbvMaq1bv8384kVFosmBzcQibgbE5RD",
  "key30": "3rG15THSWMqmisrsH2gB1CkrT93m6LW5CyMWm9qknYyFKdUjUZKTW5tmLtd2VCh6ZaeojgQwrsZk1daHNwwbsia",
  "key31": "5S98UfJXZ4b5FKJKuBzU1F1436V4CSj2wMf7cFHoNaGasFn79ieHAxrB3rP7puWvE6h5dq77XGXguz96v6Ecm77c",
  "key32": "QANVrJDQGnaA3XzjwXFG2esEzAw8s678Dp5GnwwgEwfKzPbZ15VWxh3Fisc8wqq8R5B8SDG2pmsvNg5AisFzNN6",
  "key33": "2qCofuN5axYss7mXVu25AcRVjp4utCNqGkCkbnTHNRE9RtXYPnEBUPwuyqY17MAWZYNBS1ACGj4aWyMqkpZW8adq",
  "key34": "2icdPAZJscqCN79WLrANM9tNvu39Vrv3sVDTgqh6BdgLEzLbwVMUMWLCKCb8DVKYWb2PJJSKAN3T9owX6HodzsLW",
  "key35": "3o4Ybsn6HFcWtDfUSSWn2CYtLGFefke5SG8Ftrt6rbCwADrAmh4WdZjBauGAe4mQZbMTMykhrUbtSpiJvg1wbeAf",
  "key36": "3uUNj39sNUaUZgAG2r9snUdJrARSSshDRM5Ysn5d7pbNkbUXeKQmHrTSdNzKyhJtiWB6FRhTfu1cmNwcoy1FJ39w",
  "key37": "5gJD85Reh27oAQZ3RaFNLfdFsG2m7qSX3LgNKMtH7XzLFzAizUmbA5yszNRr1cSuGR984muFHhaKTbUcuBFxZH1m",
  "key38": "5DECBstepCCxeYYhmdKu9NKNKPxsdYVj8pgDfByeXuf8MkTLbuC3yJpu4Rigryq51UgFEYnHCchNTPReoyaoEWzR",
  "key39": "4a5GaESBgajCrMHJmEDtWnxTqbzfTFksTodNofT1JkXAi8Wr2wc7JLfFRbvZrLLSqaSGsnDMyAkzjMGocsNE7JHG"
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
