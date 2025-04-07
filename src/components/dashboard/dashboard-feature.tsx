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
    "5TcWaKqj5NJ4aLqJTZBYuYP6axkMFq3BfSVJgEbFwGRM3pY3YUU3LtBtSCK9KMrqbijobt4p3ZC8XQUEB3B6JpGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JgWbd8jPKkAiJcAHWWCQBNY7EoQMmBiNT3xwGd1dvAcU8L9T7fZECp5DcugVr2qHS9x3SeRds75mu2vpSe1Vb4V",
  "key1": "2hb4CE7iDyyhqad6S6jHKEPV1uGF54QUFqXMnN7Kw16eN9hBznk1zQQ1GAgSKFHSYdXojtPwC1LmuU69UdUtiE9d",
  "key2": "563hqz7TLMDQor2AZdRARje4n8j8ERNVG3iVEfuaSR86RV4y84FbXLhmLPbHZrdTdWx7AvgEszx4ReiEgMqtAko5",
  "key3": "5q1GSNurDMzNfRWCerUNUceLRLekF8YDfVwYCE634FD5zZCHPydjqjx9rD1e5vMQjmdxKFr7stL8YWH6V7jSkWgL",
  "key4": "4ayH1f7CDseqNjsnBjeNvBWUphFgni3ycsY43srtkRY8DaxmMYXg5asD6U59c9J4mvxQrqg9vBcrPGuQH4VSPprP",
  "key5": "ftJjBT7n2jx1QSShMiNE6c2FvXjc77dJ46rrZnftwAPG2UVYiKcsJmKBQmJmMBSdBZLrd5rTik7auAfC2rKjYd6",
  "key6": "4vwH2mzadgbcVwHYzTWeU6kEw9YW7vLgxfXJ52ErmmejtnegTsRiZavqBBt8kBq1drGdxsLsWEaeTS8ddMX3CJc1",
  "key7": "v3anttWmu6Zj6MzEYUCdzwCqch2F1SKrkcbhbgQYKXYvsKaZkxgJJbJ3VR4yMrVxGsEnX3TpuWqrotkXza8GNpX",
  "key8": "4wkKhkZLDqLZLjwTvF26mf37ptch1WTPgVXrdqVhSzmHJm34qWMKUTsMQMh9BgvDe15bLBCGmSysdP6VarTkCGVh",
  "key9": "TvkojsZxxvGqs61BowkbaSDQAr3ojd16xDEW7tzCNkJbqxmv124HkRBbWD7FyuLUgJNb15cXhDEpkQu5CK1zrp8",
  "key10": "2kjj4Ejo51wX4tfGSpjqy4peG6EBgiStVwVxbkMgWPagZF3Cv9FC37wWSwiLnAKgB13Ak1rRDLiWnXpoAGE3jJmW",
  "key11": "27aNcBUjhAQMh7W2iNVy2Po1oxA9EBEVXs31UaaiTD7S17xkaPKSpsoHddcaW2SxYSeTyXaLP8XSuq7operuUZpH",
  "key12": "m6FfrwWf5ahE1eeffp2yvSPoSMChPEdFXyPdKhf7s8KywQmjkdyRuSQx2kkzeDtLS1asL9Rnwte8ZkqHZ6xTPBH",
  "key13": "4ooee5r86WsFrQ9zFNB8Lob5CVN9LV7BFA82vLX3rgf5dEDpM96ASx3BpteZyZorcXMEdaXgNZgQJRzmmjYLZma5",
  "key14": "MbQbDDwLhh41kUwkqjEUUdKWBBeqhfhSzunuSAyqjh1ZtUf71Pt1yvEQKXxrBF4zY9ANZTrSahUSUG7hxNb429a",
  "key15": "4PUarsHeenpda1SfCtBdNCCh4LrSutEV4N8u4vg9nzr3GNTdf1vmeMtWHBMxMc5Ajpn5ULhRdGekjwVD2nccjziu",
  "key16": "5UmbGTPqaNRqPAPbiSvSbXRuxp7AuDwwLpL6jWGDJ6ZyMhchfq3ey9CuqB3Z5u1TKdRJcBShM1hAnD7PZ8VDv9J3",
  "key17": "3Jgi3A1boKZdan7u2wcbML2e9dAzKBRuZ6QRMDNcHCwyCdnM86VUQ7XEKYisRcCg7eMAwhfJHJUF2YvkAG3MuNyD",
  "key18": "2QqHnsrFUzteLJnpZggT7pBZFmSAi7bE6yPvCyu5mRRLtmnhT1P8WUV6NpdSft9EnxHPqVvikAc4F5aDdwRJW5AB",
  "key19": "4fVrhbeoRzNqT6wiuE4ZMjLxVuvTpN5kTLXgAWmpGsYfbykc4quBx3mEL7KFf5GRnS1BPgVMvKyn3CkotyXPkVWQ",
  "key20": "67H6yZpUbLVqUnwcMVXcNRE3JYGDbefEf24wVLFFPzG4TDaZnoXqAtaU9CAt9DaEteoEBLQ8cz4W2a3ew7eBhVy2",
  "key21": "24m7gL7W3KTHJvScaAZUFCaj9BKtaRE548EuhqctqTUvv9c2wWKQEp1qdeS1cmieZrpYmGQumLtT8H76MpJNZTA4",
  "key22": "43QmEeC1W3fTktCdguRd51jkjKcszbXGjGYrQa2PTby3w26JGcrq1HrgitZLYK12pNR4WmCLKWqzTRn2GmFwBfJZ",
  "key23": "2nd4anRyCKBrJdFXxX1ScTjJQA8wchjohqQDyfZJ8AbdBgcND4nXW9EAD9Psho2aKJuusQC1RJzzzhbmeBpbYFcx",
  "key24": "8trSwbZTWQfhBNwYtT5qgBVEZKtpykfkULLJN5VspHheTBfQQF4NS4To8MCWir8Y8VCQch4Qej3m8c89StZAgLF",
  "key25": "5fvgWRcQZ6geqi3qdC3dvHmb3jjZCoKFiYfPzKsj242qf1BVwYNNjVukQ44RPHbkcpJN5h9UA4YnoTFtwpJeFqAW",
  "key26": "3AiTFFrNzgcRWDYhufkQxEwzg3niLcGsxaAS4i1FuwwuYGqBAdQ1adFo2VLxM73qbxpnt6E7BEABJNwbkCZKCFH8",
  "key27": "2t5ea5N2JD4gECMrNmM72W1t8c1QFKi9WfqRjryoFNxgU8iDecsHmcBvNf8pxdagjonAJHuW242bL8etEMiMmYYb",
  "key28": "2GsPu7cU5dqwuKtHoGtPZfwu69q2ZPUZHLY9JvUSsFUUzE8RkaPorCxTE7HphLs7pwhA1QwsjbLVxDSvyThNthSX",
  "key29": "25fyRhR7KhSQX6QcEornkwGPMUWMbUAvYBAecyKRmn91NvnumcMTTxp4w18Up3rdvGkKGDru89hgDSoBrpDHZ657",
  "key30": "5guZCFnKVMXc6j4nbkjBoUyJJ1vBwBveqFauRuAE62nTreM43SmsCsG1VCzA6EEZxpKEUu94s1TvSKrYjiNLhuGw",
  "key31": "456Wy4p3rSQhNjhxFdhqzkUEoyDAY9ZauVFJ2WhwcZh2u553NQwr3qZxTDD7QyZs2MwYbBScZwFRQXVA9y8qc7tj",
  "key32": "4tEqGUNidtMjEG6FCqxWQMyav9EeFZwNqZyzbCAgFxk8PtbWPgaDT4kKUQvuiktBz89drWtXpUbpjuHjyGSmJ89Q",
  "key33": "5Q73kCKmZbry3SqE6Y5j99zyL9hheL7PCmws7wJq9z3BmwAyX3rLYEHfQSk3qDEokJVmUGiP67uHhoUjFkVPW7YZ",
  "key34": "sG8vH5Ei6jZMzSio9fHd3oJu5CJ6A1vP2djPjXyarsBbTjBjgJPxRXapxG8rJq94Ah2Q5KJK4eFsvKGwfycU8h5",
  "key35": "7zPyp351fEKEYCqn115DW9Bg1Bq7mQxf1asQC91ecAqxBY2WTEV9ctUtns5TYzXjwuwEduVLA1iUtGqCtBzxtrF"
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
