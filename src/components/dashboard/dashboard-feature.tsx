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
    "61DKWeLbPSX1yWkseJB1YkyThK9xpgDvQWrF8aNj7Gkw2mK56UKiApPeZLAQVrTsKbGGqKJ5RTQhxS2zN6TZiciv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hq6F2W46bYsKzdgtkiQSgiizn3i6zSsGpqN2yLZND5jMKbMjDkQrn2SpFKHLB8Dy7ptxDdsRykEDKjM5eQ4Gv6r",
  "key1": "3KMXh3ReBproBpgMkHH8jdpjEnuYb51wx2wJHWoQY9aMfT98S7FS7DxGgFQvSjdF7djM3PqgpxfXPQ88pM3PSuvY",
  "key2": "5um7ZvvtF5McNwBYmXTtMNQSDyQeuSD9ER7gf293mpDtaJstFqfFq76jbs3XvUPHKjHfLd2nAe9cVXQwij3Gc22a",
  "key3": "FhGdoC3NUyCxwKTTrsdWVD5ocXyKxLvZVULdwLmu1obfrAfZvx4poWqQX7YGaw8ncwUEE91zBzVyr2kNEEvq8pB",
  "key4": "uTxN9KDRA6x1DLyCTUv5csDUYS7agXKUYFQ3fr8bv3nr7DENdedeL7S33QBkSF6dyjgdb8s6e7LZDXAuTNybbFm",
  "key5": "2B6iR7xzV4EMdm7TRosv1vHPYnz59q2Ru5xXrrNHuPVFMQgXmGD5rhTtk43nZsWrfyBmLeo1jexhHzzV94Xwsdzx",
  "key6": "ru773NeTP5XMJzY4LKczzMbz5SkcnJyeetueTg5u8dJPDaBv77dHa45rfeB1Qv9Eqcp2jdS8mHVj5qXEhtEs2Sy",
  "key7": "BfBuJTmZx2eJCRPKj64Airrq8qEBReB8UWS138oVnnwy3WzcgjsFAsjkaScNkGyeaWzuyzuPm5TuoQA2z3Z8uU9",
  "key8": "JBzJ25jZEjjEwh4DaC9NcjFJMQEwn9X8vRe3P9GfVaXcXSS5BfbWsFhRhPAFscf76MWFR3ADFomVniGvigXFwUK",
  "key9": "4juvgjeXGibfdUYiohaXgKa2GGaqBj67hBcDG8nu2wt8MdM4HAmwmLMCTDVTNcb2ewQ9DSgMJXF3Z7svPA62MhLs",
  "key10": "56718hmX9mg1szmoFmFbPkdXKrBXjo8mXLyHsyi5eaHw1Tt2HW7Fz7b1uyVbNBEqW9bq27uDV53wjV6BRQWqtL7R",
  "key11": "5QLvsGQNU5TS7r3taGY1zrJw9TCa8JXiZDHY76syrrCpYq7TTMtHQGd4Z19dPBHFn38LzXRB58SpdjSzwc2Wo3wG",
  "key12": "2MM3pEbF1cFGuU7uTKVR2b8FFD9YW6eeQJVznaydm1Un9WjNfyCN9CaD1JnERKL6dMCST9GhtqaTpkWxR4mmDrKq",
  "key13": "3hzWoPZbcmAE9At8mbjinYQrMzxXVjgwPUPeVfG4PEBTdUmS4hgkBxZgojwLpuyWg3cLPguHDg9aBaJJH8k7dE2W",
  "key14": "66cWhQXxou6h77VCJix1tyThTXH3CTxGRTGPm7CG5XCPkWcyqaJJGhMJdmtUE6CzokU6eEQwsGQQq9TpQDPKaPJz",
  "key15": "2MYp1SG91tNUM1weajASbzEmioRrvRKUJxeHF2quDueNPuHq1DLRzTsM8s4bSttzrJifw2Jq41hhj4PgTGb17suB",
  "key16": "2e9sQppvJBXzDbD2UWeQfW4KquSmd33LgT2FxaCTPZ6gbiuiTYPxACwSfVeos22BFaft79oF4dk2aJqVQfLuwKao",
  "key17": "2vf4EbqfNWPRSgoBb8aKQYPHNpXNUzFHhr7xWjZTfiUEpiicbDf14gD1baxkxFW2GkWhxjK4ABtojZf4wn26ccZq",
  "key18": "4eFV3PutMr4zMhMf1RGHKvYCsLkyBtaburWrS6D4NsX23Wmb1UtHNHafHmjDs9izm1DV725RuPzZqNQMZLThMhB4",
  "key19": "21YkFDW2rkhkZSSh7Fwd6MFY9ca8aemdcqsVi7SiWY49Brt5g4Cg2ok76An9UQcz2R9nxyrQvtvkudtRw5HLUPcp",
  "key20": "55De6g379GWQm1SfDQjgGpBvp1ELFX5qMCvidwdujAXFq1mQgcbWgmYRLJHtX3xig8rc3fG3e2poRDHcoFdbRs4N",
  "key21": "KRgMcARhfU2m5qSmBQsus4fLcG6rnpXQT7SJ82N29dMtBHxC48cNgBHigFL2jAjynBKoxmKGFHWyKCucxysn5cc",
  "key22": "4qd3XXsuZUgjXWMt9MwdD565TnbFaJGDgq4Tmy4RuzEWamcCFenTCPAwnhiuWxf2fJiJp6nidPGzvmBceMaiEBqM",
  "key23": "5Vwc7S28afMu2jPTa81FuAxqM8RkLmdoHj7VpKtzL8S5Bj4NmHMgmoeHCK78Fndx5nRc365LtREMJjf9djxBi1yE",
  "key24": "2wCV4MUe9EbhgFoXZhYCGB9uKD8yjyp3gJQULjAYG97CTU8DGXkDkraFxL1madtCcAVWmFCUpnotbzRmuKaj1LGT",
  "key25": "5HxUU2nLgd8DeYiq6M3oTZwexE7VyM5zBe6mwoNNHzPf5ztBLCmExSwd9H9JBjfNtjb1vz6RMTusifrY2o9nwKmA",
  "key26": "41ZSHpu4kUQHQcmnM2ocGHs88ZvdQTUdXhwR6JC1LprPd9Lw7sCfZ9XWtbMTARZB7nLaG5tUSTn5ziunKaDx4rzX",
  "key27": "3cnDvukDgc9EZELeHztDfGC4UBxHnA6HWumESks9isQpw865mQRC9vdeYgNi2fGo8y1fyW2wH95ddMjWbZtgzU5K",
  "key28": "jRGpM4YaChttQ1PFhyEzkEuYJp7myhMdA9n71RX22Xfv2FsPTXY9begkivdYTbLEdM2vsvvAnRgeuK7DtrBoxR7",
  "key29": "44KJTuQbWSF9KwyNZCFDdDhGjnFRrSPQtyPQYEzmeiHTTS2hQrcz4UQXi7od3pcfxr4VZqFDKmAUjZ7W7auaSqYH",
  "key30": "4182VfiWXa5yyxHb2L2oFvtEUyJa86kqVu1YoxNtmEc9rj9HvCwvRZ3UAH4t3SMg25FqZhWv6UdMUzWK48XAaBnA",
  "key31": "t46Lv6bRGE1TfT2HYxESQrtLBLzA9o4955xT4CBu97x2uvWug5ikiV5uNqVf8Q786QhkhxJ4b6tXbPeZZK8HeRx",
  "key32": "EkPFKVbf4sh7oxZAksxseGd4Jqaat3mgghXc3wTyJB13FV5Mv4AzNuVTKCwkbvTmRxv9YZfPHgzfphj5R1WLLPp",
  "key33": "2EwyFyaXFcnxJRs4ab65xVoczY375uHXMQVK3yTJCeViD8cPTd7773VaNiXmiXYYcgh4hwmNVGpV8BXnQ4TDyr9a",
  "key34": "5qWeUp7tsC7dvpsAetVyQF2Gt4LwvSGDg7kZJqNZyRVZtdQwjXUZAvZUTFVNCo1qVyUdzsXzyodxMdApFfMYqtQv",
  "key35": "3vPCMYSxf2uBYAV52UWXQS7k4nFg67umoLqAom1kYLXYBvitYDmrEuPXoAREYH4zur6hd6mBwgX42SNqtCVkLyHX",
  "key36": "5zYjz4rt61cga4YzCqrZEGA57UD2LqBRCau6w3AULsEXMnhgr6WD8q356qSVAF5ZfCmAbi3xUvkUpseA9HJkdQgY",
  "key37": "3hY7UKemFEYyHtrLBnyEEXvfafRGcTjYR6p7MSd71pyv87ScWxYdTw1HzNzV2LLeUbgVB9rSWFPigVZYBDRVfnKD"
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
