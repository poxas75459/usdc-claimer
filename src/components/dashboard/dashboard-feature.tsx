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
    "JEzrbi2CS8Zzk315hnDtVPyL5s1oXRofHXe83o4rihhNeY5dff49vnuQ2vaBa8FXWhUWtRZPApVQQbSSooSWCLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4uvJ2wq88Q6RGCbQwQEN4ZMLHrwioVbbnQb69tuZKwsoMAeUu4QtksxWmVwgtNYRzVHsrVQSukg6HWPwqWp5kZ",
  "key1": "mn6xPk2S3bKi9TTdwGP3VxNTnQRb5MRUhFuH18J3ALNmEJfGXdC4HtqFQAdPFRuFF5tehQjzjWJWdiCxogTw5Lr",
  "key2": "FLGNL1aH4vkkUxYhavFr9FJmwG19Z9WwJvtY7cbNBHMXeWNVZNr1WAPBBQ8Z8hH9YcZbV7RAZcGBimT5ALYNXxx",
  "key3": "AXBkeMU8Fhk2UMYmdUcRPKLDgmekXzXkpBjvCcqcK7a1YNqsjcKH9tbVc3vs8nrTB7u9tS2HrG8HE46utiBgCb3",
  "key4": "4R6Jd3ZKvkGnqNRPLyeJP9GYR5bvL46M5vu97RR2D7HTJWSY76TP63QnyVNzYXFwuavsYMdkGK7LqjNKFeg1wQKC",
  "key5": "22fU6jKVt7UstCQXfturz3KDoNMkChVnMENe2CsDPdd1vdPmaY6SLw9ceR7hhQMcjoVDx6diUCmW49b79RC2WYHT",
  "key6": "44Y7jRbqcjLhRsp3qxzEGNZoaCcg1W9hDgU7Y5FajNyu99r3sfcke9GqmmfdmPogcx4iYYbAmSLC6Toc8c45KPKS",
  "key7": "Ejs7VEXWR7T9ZFThhGB4EstdqypDiN27GjUWxsy6itvAngQ1qEmEUUnKTezCCcciEtWwj8UzVjZw9kgbMCPzY5b",
  "key8": "49VTNpPQf2FoPgbWkWogdS9A4UJB2nZJfb64nvk9GTKjxjGEtfejBPkMP7K6ZwvRJ5QaJFWetiGfXidttx39L6sn",
  "key9": "4RfJvcYqSsxLLNLpBcYJhGaEiYjpJLnUnNKZ7DhbF5nMZ8iMGEiJGao6zcgDjRbXHsiJcjb5Q9eKVVfPaZJgQowa",
  "key10": "246WuEB5zwDnLkfmrKeQDu73uEV3yFb2zskr5Avinsyv2U1psdGi98L8ce6RpwnbRbY5yBJPQugyH89HSeq6BE7R",
  "key11": "4XqY8guyCg6t7rHihjrT9yciCcXfC25RcoWXqmtWDEr2ncxWrD1rsqorhUa2PUsXa6htVvPhVsLqxGFgu9YzDbUU",
  "key12": "4WyKqdyrSwTqBK99AhEP2QYuSCKqw5oPxAMCAY39aiedX7E6427Vs6GPRnqVYA8GJM7BVAMFkWJWoPqUFCHz2hVV",
  "key13": "3D7PWxWH7id4WZBj5EHyv775XFJ4a1V71AJgG7R1TpdE8qUuieL4N9vXZzviWCJcBqjXjjxBQJ9txPdpfw3TYkq7",
  "key14": "tFDTb77dBe8DAXZri41BkbfoX4dYJCCgb1NrHo2yXhZaFh9Dn7XeqQpWagdDEsKrcuR12BNn1yj4DrxA7CNx4Hc",
  "key15": "28T95Cwb5PTf9u8Gvt6YLxoChbp7xGhuXJJfsXqXWGkVnmYTWQzT8mm4adDsMpxaonkNvnT5CRH7og6cZ3JFY5pP",
  "key16": "3h2sEysQzraCXUbQPDnGEQRUPHiw6bM5J2r1wNGt7Yrwt2tij4fBMRegqWpe6GwGPEVPFCfVxprCx64s6rE1KBdo",
  "key17": "DU5Tx8Sqs6tXo4iV1JHdzgMnoptCZ52hPCwivPjR7a24CZHZJ3M32D2NNRELLHYzBktZ5oJxkHC9PU8iWp9GzgE",
  "key18": "3aMt25JamaBnGCunc8upnp1d8vNWzawCPtzV6bssAYv53vL4dD2nM5K4u798UKQ8zXTDumJDbDu6imYq7KJrDRY7",
  "key19": "55cX9X5FihZhyPxWs6dAMAmGDF2GnTHwNCLRuiaSqoGfQA5vbGbERdAET3oMpFmJ6A6Y8Pybf2Y4o9bKQEuy3cq",
  "key20": "2VDFBGTyyyNwaDKiHMYzaphrkqJHCzqZNTYYVfr54wQHRSum1sPqRdUrnx4p9FTV9954KZ1fs25aCAXCGLJWFuSd",
  "key21": "2mEeiyEoRz8VWXkA2XXN8LoYkshC5bxiYSCzwGWpYgHzEZKSCX7opFbKVuBmvtD18sXoVnQsSabsjAK6QpSyiHJU",
  "key22": "3mhb6KJhTBG1EKvaBFnAMrYrKMVyN3AQV4DiwEpLx74WfzMHSgbMpjbp6u4CX9RXPrHTVWKJt4MFgjxrFSRMkQX6",
  "key23": "24GW4NM51FmK9S1QXh8JEga3oF542Cqq54EsH8NMLt3eb3o7zeFoM1tcNU9E9MDMwpjDQX6kxUQA469Co2cLFdKy",
  "key24": "4sugdSHt1juuRT8UdHzbYzik63zTYiU51pxzLH2jWdRo3yqZoU8S2yYNnmwdbBJK5sYTkuXKvhuUNeYaqpTXs2Cm"
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
