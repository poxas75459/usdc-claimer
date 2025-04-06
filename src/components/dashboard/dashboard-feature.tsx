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
    "Bzp6zcsKDYhodnzCb1eMsvdQvqL3QThQYqFwiUAABwFbzoYysNbrmMniDcdu9Br6Xzs3HgQdsL47gB5Db1g6dNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4241XqCKusSsFQkW7Gb32x7RchieCkqPv7NMPHd7LMLVELCFQrbU5vp2gzWeCuHJ8VgKa3TZzepspwngAt6qFuqh",
  "key1": "6gQAaktJusA4iy9W8fWz9xZ4Ak5ooPQMK4aLKxdiX3NyQS8Z7mm8mdz9mHoPJjfeShmBtNhAmok5SnoRNk7wiZ4",
  "key2": "4YVcrRMh7Gq42bKgZZWw8W5SjyaWdCpnfRL5tXCbDbMobEwMZkYeQPkfPdwRCn3m1jeM5uFCtiC5rmXC77NK1EwY",
  "key3": "5aCsTMhdwV2rPk22s1r3eHGZCPyNRDaXWLQ7o4p21L48UoAkngp7BYtYQUKkqkKDGtNZ3xBmeba1G8d32Vnh558G",
  "key4": "3238Z9CBe7fNknPcoKG4644qLtbQpjQidKxZUhG3NuQTRq4DECWrgpfhdaLxogvRKd4c4Cqxy7kkNW6gGoA9jGqc",
  "key5": "4gK4XhFE1YBX26nU5QFETJBuHhTUv5DwkWnRtHfoGkQE6gjvcguez2RdS6Gsm1v7XuSrSoQjxF9La1JU5zTLbdP6",
  "key6": "4PZHkjd2ScmtmLfa56TKRnmgTXZY3LxiNi5NSCTk4gi2o85mbKmV8rYz4a3NN9AV1xrqcY3T8fYqdc2n1hcWPk5V",
  "key7": "3dPd8sgnvoQAkYSeq9aQT1e6uTf7vqbQng9XNrjTro2sRokFCHRgvazz6rEdb8QiNvb6WS9V9j9d4QN3y363kMUj",
  "key8": "4BeUiNcttHngQGxnnHEL39Bkb9BGCDtBDMypwLMpbRWJ6jd5iReRs7ZAgKecac7qB6pzo34BHTPbPrxq8GgiwUpr",
  "key9": "2nbawAGvF5opLDAZGv7iY5JJ5DDd4eBVLhnLcvvqLA6nEYoTRHTeXPfS7L2bHdSdVVYFtgNCgp5V85EvKNtFUihb",
  "key10": "5omzNG3z8GcuALJ4ytiZ8ixQgje3jgkk6TEDMeoncn48fLngEBbw29oURpJiHeEAqgPq8JyM6w3mr5tbtzuqwEbt",
  "key11": "47ZVc1fpuM6LLr4K9H4TS2SFcmabiqQYmiFSwgxJWGGb5vRYFUqpsZh85dqVuc7d8zNBsBdCf1ZDNm3CH6faJ7RM",
  "key12": "4aeMaNb75FBZMVV86vpmrWCcJC6kbKJvZPAJVRT3wkKnRpSyRwVR5VSByxcYTEqch8NkRzkbHxXmAiLoVUWrxphb",
  "key13": "32XXwBvNytjuXpnXPqKZseBUuFtjhrbz8qbGhQdGnHm5P6wXRHciZRRmNWnuwMZosNG42Cw5qte8hyERbovrCy7K",
  "key14": "3fAoWXwxrtR6bjij5uEguKyrCx2Hb2YADMfvCELzfgQCXsW6474Lh52fWngNapFj86gVNCJi7SY1aUVZ4HUZuvyJ",
  "key15": "3DRDnLgoTzjoe96NGGLqxiuJ6XAvAAz2QqZnhfRfYSxz4LTbjjvEkqvmFbLonRvu88ZQrUSWwGGMznqF9ArxEqN2",
  "key16": "4RjD8cJfP4b2temFU2Pg4CQLRAi5fkH4ieperL7xAKYJ8MHCgAvGVY3FoAHBB2VC2d2LVbX33AQHi1gWwDVFdWZh",
  "key17": "4x8gj2CbmQg7JiRMgACPgxhDobJt7YTtBTJBBvq6tj7W7NdzfXmBa7owcw668PrLywy6sjMqeLEy6nToZrk4kyQy",
  "key18": "2XgegNdXMqDNjahvnWBwNtB9CfeBtPbCpFjfFhticDDB82tbRX6MMAZkNon5baKC1LHnFHjQVbY5RoWUoi7ykWQe",
  "key19": "2733D3enyUUgvMEpWrsizsYAnT3waih4h5J2o2TdfH1wrvQwMC8TkTRwx3isWDHN14VW4m1trfZw6cSieUPkU34s",
  "key20": "3bAA4fEjjU4eCtxu2XK3CDqNZZHxxQNjTzXMkREW95vBft9vy36sGhQthA9THy7TKTTZQyjZ65D8VHrCjTrXy96n",
  "key21": "5fXaZdRtKt4N8RyEgbJZNsQFZxAG6sWH8gysmbsBgmpbmBRKMZyywcXqPGp3yd6i1nMf87zzgg5Rk8Yvh9Rionrq",
  "key22": "3Mp9aH98mBoeaQVhNykLpGmG55ySyuTSDWUWCNcY3MAQ7Vmes4kcxDMq8CjGsnUgvTStZmjzMCPxUYSnm8DLfpVB",
  "key23": "N9UyXXALZZDTinBL1WsxBaU92y8kfZqybE9YJmCXqAw5avyz7yZfREtTH9iRWvvAqaxuwwoRdGXTx8N9qUP9Jqd",
  "key24": "4vTL2hTmVE3FLZugnD55v3Db5qBBGLuPuJawXgRPgdezo54UorwpgW3ic32xbd8L3ezDhRHrVNszFEASXE3mxbfa",
  "key25": "4E55DnYzTjfat329gL6XTdqZFG9LuL6Wxd1QoPjMKRciFGiRoFVriRX3m2MM29o2QKFKBQypM7CVBLLjYfBaANSg",
  "key26": "4t9j6DsSJKbL3NLL1BkQQXbEaJHg3un4a2BCgULRQQExdbMuxdCGopV6iMbzeYShrUAYrxxTWkwDqWoCyBXwd32C",
  "key27": "3AyRFKD9d76qqGfua16P29kYAno4Y78ewRTA6FSUMpqmF8ZCr39uYcyWLoSfypUMDp7yqTdpSU57ei7Ete3WVbVd",
  "key28": "3NdRJVWELehYNuvWGwDu5wkJapcmQmiVKY74auG1GCQAu6d4rrLWZDKfLrT8q77YhG5arSAhomFHoEijtZYDRMsV",
  "key29": "DDbHNqLXE958iqgPX4NGxPXPAS7CEdmFKdnBCFMkbsRjeSwYtMaHPwXTGWd57kk2JSnKdamoX9CXPoXqZkP5KJp",
  "key30": "4PhKpq5gwqk9fCbMsphAGtyj7Y3WLYvHoadJHLQ3eX2YXFrQq4nnVA7P5ffgzBiTKHgiG7QC8Sj4ztQFNcpqMHKy",
  "key31": "37ydRVJg5p2BsQmVDYCgxTxJBMuQahALNnSwjYygYsEWS6VegroNpcYkRGNMpCnNxXWXjTDzmniCeMEYwYPrG9VT",
  "key32": "5hytsjerZUtE9S57tLpxCCFo6DyXpvZp6uh6mTi3oJZV9pSnFc4rBNZ9ixe48A75XVVXn7vj4zXGsZpad6EL3313",
  "key33": "5w1qa6BCHAaaVCb2WzhVQKFuZg2uNbRvyFvHSC2apN45SZbVMDBfoSobc9Ruy1PGjZgE42q8dM8Jghb6CRxfb1zD"
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
