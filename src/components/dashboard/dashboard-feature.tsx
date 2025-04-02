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
    "349AXbjsEhKmX36xaKfw8CtXiQWqDdNy6ycW5E6ybwBRE4r79aC1vdM5SK7fA5jgkmbuH1HK1oNN95i7eY74x99J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zaQ2sx5BeNjaXihj3BopuLnX3E9XsMMgEu9z7pn9qr4adsDTLugAPJakfeheXN316rCamjYDnwDhmhhGSad58PQ",
  "key1": "Di1UXb9u3fqk5i7guTt8Kbwz3vqf4pDBvu3oP99tVZqU8KH3tx46Znfv94M24fWKCjozcNQmwHLujREtQ8yHYPA",
  "key2": "3jz75zY8dUFM5tLgJ6WLNsxi5VkCLdU4nPnr7ZGumNS3jSSjqiYSiJcfyTHk6cpKn52cu4J4MwL5gvYpd5zdiY6X",
  "key3": "odWtWDfAJ6fUUkqhnZ4APsDowk6TxRhPmhkaxh1LqMMXqkCJnRueoBf3eEDDWBZcSTdGyJs6p72hKW69WXKqTc4",
  "key4": "4R71Z7omxBSDoyvH16hkc4Gqzz9hu6Ft1yt4UtehijfavFoGakpkKAZy5qVBU7yXW1SWYJtiRhBvR7GU1xW6ShuR",
  "key5": "2qtK62Kx4z7HcR57VETMNGrMrggdPwuxpAokBg9Tu78WyebcW29evVbFLKC7dGsRHGfppoUviA3nGY9r9M6oFjb6",
  "key6": "5AegGgb9grx7CdcinZPAZp26RMhCqsRZmiqQEZEq1t1gR69eVyxst5dMJfgyDkcZcFrnaKT6apikNLE1xM99R7BF",
  "key7": "38P32NUX2KWwM19qZpDcwvonTbYyXhPJpP64S6TWDgCLei7Rm4SQKvUJktEvWMSHGfiQ2he6hgWQB4Dp6nyimPzc",
  "key8": "2wLk3J39nEN6As6Jzzrt8Jmi73MtkRdgt4qY1jzLUofcGfCAqw1uyuUh5yD4YRRRcadyNy9pE85jdPw5Dda8Bjxv",
  "key9": "2RXLjB13DiBbb4QoKFqT8dVBr2LJYhmXmUWKcUHg5Ev7XwfSkt8k5prJtRVpqszmWxa6TywNuBwkRsVe6ino9A4Q",
  "key10": "2CWmVT2NrTjtUT3zaybhUhAQ3Uhy2Q5Kpt3N8Wip6U58nNyGzfQvuqRFSXeAY5n2Z8YiyYkSh2cRNthtHNpWEysT",
  "key11": "2nRjuP8CLcfJwNvDSjHoHmWtT7Uor6RJQg7DNFDgZieyjryttiQFPURwqnHQrjNxVZyshicCe4Q4SJVKJwyctbrb",
  "key12": "nhaYyRXLRDsBXxNi1R8rzwev5jsaCm9YgbCegEpy5hpYnesXkVxb34bu6tdPpYpaB6JriEnG8HgmRDq5QxfzAic",
  "key13": "2LAAx4XWryyHipLDfUK3JthrsZd4CTi1NiATrUKir26C24N75GAPb8RavPZxk1cyWRqgZdh9RfJiREYPt2eDsWPC",
  "key14": "2aYsMXf7GqvwLGepnCWe6qrFXCUFcWpUYbg4jaBmpKXpPLvyZMggtbxsBbLY7oYV8DZwpRSh6GDQgubSwZooz8EP",
  "key15": "XUCicgSnhXxp4ubTyDz1NPTtAaD5rfytEZDvaQeVDX4Pahfj5vQPsZgtasyz642xPTnu3STNNtexXog9CsTVj5L",
  "key16": "3cqaRjzkChADtJDaBt2WtG7BrCj5gCNFyv4YWiuHcdFvKDjBtC6CCbgvRwDAZ2yYPEESShdPLkN3yUp8VjTTtSUS",
  "key17": "3UcR4WRi3p1XyoeCyGGAUm3hHG7XuSzQ4s2xvxfT4eXVhzWTDuNf9a75dQvfCm2K81R4Wb5QvqXDBLNdaNn9Stwi",
  "key18": "2jbVW5XscRMKZTSYRKPH1tR9i9MdVbE4ZN8QQ6C1oPLBkdYE512mvRTdDmfV3VAx8SQqrvUvGHYBYmL1D1SeZJ7G",
  "key19": "5E5s9uh1ztELU5MDu9kLuPcno5QoFCNeSwM2Tk9EqT34tpojsmjwfNesYdfirLEZ6EiXdbG4o7GcCx1KhjsChjNC",
  "key20": "54ybM8PUnP8raoRsfuGJ4Q83ZVdQGFiuL8bbx63SJuHraoAaX6xzkqv9mKPL18zFMrTNt5GruKVvj5gEvwFLvXML",
  "key21": "2HdKknVQkVCuMhSK1Bd8C1XfJ3WuJ8841nDDG5EhDKQsciJWKVFo6XG39SrwMCSUnpyTHKY7zSMqZttDCgweayYd",
  "key22": "2Q9nwLHYsW2x1xLkmmaDcGe8HUgLLMPQfwP3VJwR46gNwGqw2DugtXYRcwjG9LNgj5JQzKHMTbXtsQVnT4ArHqdh",
  "key23": "3yUcuwj5kV735SmzaujfZu2HJpBY42Bkoe16KG3m3udZAQSPpKGDWSL9SGzFB9sMAZiSbMmvASxSWNuq2YF9Rq7Y",
  "key24": "3jZaAcoPzurygrNfJYRzgJQbeKsMQZWW3iKHDcj6nWN353H2XDsm1w7xHe6kcuqAJ1TQcepZoJZUTYYQMX3JjJng",
  "key25": "38wmuFZ1hKcL4qmug6TkchwbHYT1R8Lu5J5PR6SHsaP27NBeVQuVfgMEMgAS9yUzLJRqGsfYHi693dB2rUZ1tyPL",
  "key26": "5KikbXCKy2nUkYRhbz3aB78oxZXQs32SUEek2D7GYAtrdaCSqqHxg7yusjcmiWKtLehn8xHjokAik9CDTY3XfHQ4",
  "key27": "5Ao1JFQPFGfLCSaYdptp9UFcrnG1CtYJPoQt4hfRCoiNnSLiTeWX22arzZjRwS7PLxp9sbaqkp4a4a21JPoXZANg",
  "key28": "YSiH3ghz4dos6dGonSHXDSLNU6SQe6fWpvCridyXGbpcSNWy3AptjcUZkJmxZhQ2mt5SQHwdACaKdd2afvQGkmF",
  "key29": "3kMBw9Sg751HjddnnVjBs6HmN1uou42geCZnz2qLphj8KbxqAxvXbyJc4KXA7Ddy3bKz4LJbdNVpTCbdyJhAryRt",
  "key30": "2aDKUNov1n6Z4SL8oxqH8q6TtifqCc8t1Rgmn5KTyaGS2YcMsKTtwdFTrgpAc6fVwKngvngDunXteLtwYuZYdC39",
  "key31": "29jicBPe3BWidBCw7rqxhWi376HqoZnq2Es1YaqNMFTwU4qbCqgVu7bET6pJ7QGTc1V99VEqRnsMs3Ndery3xWxb"
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
