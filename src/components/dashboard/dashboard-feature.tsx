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
    "3MBKVc4Wyz4T9BcUAA6gafpc5S4CriPxEqqjU4hRSAPVRCKkWyLSciUZY8x6ctuCsPDiGp6aSBenwmLJijDxyx2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PyFH81aJXmBkgrvbS2WUDTJMKGhfRWD23BnyDLW4THweHwQ3wHxt7epj1eCvb6szPTcoNmLV4rqxBk5MdZdAYct",
  "key1": "5pFYHtt7LNnNWsrkwXViEshueQAUtZSiujq2LhgAs6hMFzm5b4JBW15PJE7h5ggzfhFSyPW1AVSTvWKjj1YFoi6u",
  "key2": "3WAr437odt6pMrNroHVrC7aLVtLZfbbpXYCSBRmS6YwABYfr4HC3eZGWez5XRkTEoeH4wpdkdjdbGaeC6kWeYmeX",
  "key3": "5wJh7mKrA7Tr5U5WzVSghmRuhiinceyhqaF7s5uNN6iGCrUDGopfa8G1EhbMyYRSbctzjtt81FLaKZ4GBmJB3YjL",
  "key4": "4w2mxtJnHJDWY8GGGaByGMFwsnEcMqhtRSqXVmdvUL4vGU22QgAnidXwZLY2StbST1UpLko4Mnc1yZNFPwJxxRdV",
  "key5": "5y2FrudUx5zhy3zc2avNehdmfK6KnHRReCdtaNDNK3JomifUnRAV55md4qgfiQGsAYXJar85mnfVCBc8qMt5rszu",
  "key6": "5M2tVqyz1XLqKBTumHSiPkY3FDzeQruyFg8rfsf2vnACDRjooj93j5jxBPc5VeAkuddgGRQL9w862a9jH4Q7EyVw",
  "key7": "3pjvgJHARuAZe7w6f6Ji8CDeGHHTjdTuQGKH5JZTzso97D6NyDrGdWpxaJzHqBAnF8tevxmsasDq4Q24pEDqPUW3",
  "key8": "5ncH8qyvSEaPafKFSLKX9RGN5KHF3Ac8D69oGbjoCSJWDr8MYHfSW75eU8ZgpLV2pw5c1FwSQgToe8QxPpo5GyAF",
  "key9": "2yChs2AaMALxMGyEBrscEPP1csEujQhnLyD29PgoU9BnQK7yB8NXtmjG8EK1nfhEsoeT2i7UNBXMY1NqJArZjMQh",
  "key10": "4sDaZLtoJuYDrxTD81gFewzewugdEoy8X8xfXj5iSW8NGKCEagKjPPy5RjATA6Acv7yhUZbJoxTjkV4KP1EjiNXn",
  "key11": "3APLVgLQ4Jfs2opZXqt8Rt5ebPZi2NwDp5A6SUhgxUxx1xodMPmmAWyJydceCMsxDX4rAz4Xkbeaze61nMmpJGxm",
  "key12": "5ojRm367qLBTz8aXSHexnTNePrF6VmywUDsK8MwwTsp3S5J7CBQyNwfFKTrUEeFZpoZMY6cBqvqjSGc7kAwd7kvT",
  "key13": "3Vr45fvuEV1GSDgtcK1UhFYGMFtmC8McvfyJe9P2RhRkxegnVEzhfyFnT1zSisW2xNUnw8fEcfkrswJDtZHgbuV2",
  "key14": "qBuifpgZZdiyV4mRhT42TkL1goZsJrJY9CTspocThwT4WCfXi5MH5Kitdh8ttryzssxTDwTsnyjYRxtZcFryoY4",
  "key15": "8L7VX5Ke8h8k6RgyjKJtR8PLNwRJi9FR4NtsvfvjwgbaVvTCXXhLiN3aUxGceu4z3ichSK4kepWzvpNtAbYL9jn",
  "key16": "2QRqBtAbVGodztLNFxbzaJBWFJ9VQ9kzxs4BiDzm1DsQAcfiHv6rmyr6PMX6yoWYJBNJE5FnwCAxFaSavgKxkiks",
  "key17": "31VNnYcGFyQzjTDXAZhoiiA3Wsvhb7bCEqCkJiscqZB84gpgTiFNscMqU7DF1N6TVvpyTVT4wYvsNZnTBHheKrF2",
  "key18": "5vKuu6kjgJY9XEBJgUPBF1C26EnVZA64eiJND6T89QnqiB5g8jeH2HWsk2kcx5qqizSdTsbf1RoUgedUZs9ZAGK6",
  "key19": "3foraF1qofCcgFLVDeASdeNTVCBjbdwHhTZZQ9RHmD2iKYdS6Y4WcNRKmYiKc2L3HoTqpuzAvSeYafFNhaqAoX3U",
  "key20": "4vMSJg3uNKAViyTPV5wEoC99EV5erCky34vDo7GquDuWde1wNjsA3UymveTTBt56ujUabRT1najeJZDiTBesa5oF",
  "key21": "2x26HjZ431DEz9VjnRxKJtYb4fJzmci7KzrGQQoonSAm6bp29D65NcJseCZRvykNWGUr2k8Chz7Xk94CVq2wy1Qw",
  "key22": "4AGqAZyXY325wL2nQhmt4Gsx8w4WTWquAnMPqnckHc7QbSrkoTFmZfauRJrEKCgZEia7TeFacadA5mQvswWMttJo",
  "key23": "3SNWabAKscuC5fimv8SHyKHABkAhmKmRZfEmhDxy5iMR9KwHSQ8EM5CBMvAvrtZ3jAoMebngroxM74NgS4GxKfJG",
  "key24": "4V3zwy9WUy5kaozxu5HT9e1biWumqW2moZ7qxtqphmru7RdczgZ8QDk531h48PoijYZp79kSVj7ANg1nBnRChpCP",
  "key25": "2ZqFF7Mf6a3UrhEe7BdymFcBNgHwDKThFpvHWDTy32LNp9EF4fn793R95zgYdgAboYqPFPNtfs2WdKeX4JfR5oEx",
  "key26": "66DvWBn3FgaEkJFGHByuBbMT7YaYbTDqEQPCmbg9Q7gVRwDV3h1Ukn3nccrxZSVLYzJZF4ne217Li9wXJM78otxN",
  "key27": "2c68iKsFkcrcnG7NqGwTLPKPxG38Eot1EzD6j7ootrDisS2F6TW8zyzFdWPhoEo1FCw8XGxUMBVGJFVDE3UWdd2J",
  "key28": "2dUV6N8xceLhNh1rtP2ayBXQW6hjtLQpdpY4RVFGniAkMpVft6rV81gDHbFkVNYuZSHMknGqgAFXJNSgoKW12ngD",
  "key29": "4sv7sUgURVQxQYrdmj7TCchWApgA2mi1uP67xDfoNUbUBQPX3fJfyXaU88vj6LtxYH4CEVW3LAYVdBbgnbf43WNh",
  "key30": "vTtui7BjJeqzrN8iwfKaz7TVmcseGSJvHoPpcDQ1mtT5U6HAHMcig4SNhw8BM6de8AoiFDFCerJgWMUTKRVEijZ",
  "key31": "1BhLf4MGj27eSi2GMgRoqCYoj6cqpqjhfQAcDJYE9h9CkmNLhXseCKgNoifTsDbiyabRDfjWKeXiJM7zMi3jRHt",
  "key32": "ZMvxhUs6hohTbd9ZXNKF48bCFGX3ECN6NdbWAGVzr5Ygt2oSXSheAqp1FdThZXgjRHFXZccc4exUBxetgAqUZvh",
  "key33": "346qAbPa1XccK6E2kNzChEfJjbgB5Yuzk1vo88WPjxoVUQD3niyFbcqaEqQWt5BEi7ocDRZVauFypmk4jxy7xzUq",
  "key34": "ooVRAMshd8SqyfEBKomfPmAVFtX7tA1zvmHnkUdFZyfn8WEGbCuWtFmgU5tH2K8TLbDqJxcWvpeietDNfSaLxbV",
  "key35": "4PwK2txNkTT1RjzZSA7ky3REJoJnDr1swprkHNkRuKKVCxPzsWo5H3Bcg4pbwZCya4eFmSWxHWPJX1YkJ5ACSq2R",
  "key36": "2StZhzwwWgLsFqny1FZEf6AFkkeycmBk9SDPHPbpUyy9Bm9bzdHw1VZ7W4qGJ1BSgLcpn8TY6XFACcJskAeGHVL9",
  "key37": "ntWQ166RM7H3Yarkc8ax91w1qGp5p2N9JtCVuCDeR3idtBEUzq9tkoLVRawJus1koQjAkSJnWtctvSChEF9KBTj",
  "key38": "5fRwP1GnGBKjM3iohzvcERKB6qbpFVnwiEVDzpfWzUeW1b4iFFAEn6nZDfiSiq4v2mVBT8WAAMHKuvvYJufm3y7",
  "key39": "3UzbJpJdjtNv6EiQYgT9CVX44uUPM28KUwZRNHvk96AEroDPiWWiKFC6G1bcnM2WUeD85b2X3hU2sf19dfy3p4QT",
  "key40": "v5euR6HADZPbxs1tn5aEWXAmjk12QxNnqop5pSMu6YgMMnSsjbcitufvoR28huUQLiVhQ26ogh96PBynbJwwuqn",
  "key41": "icv4doj7sUvWQ3o2jyEu1rCYkF3KmxXB3KHL9sNgpkPZbyATqCATNAU5AW6BnQVyxGQABDHG9TpHHiXQJTj4qHT"
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
