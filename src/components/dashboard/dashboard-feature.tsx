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
    "37bTR8inMkRKZ8dgo3gmetBfhudzGVpBGxVxTzLa2dh4wRpkuy3rDbXS2oguHjDH2d5k8NuUDkgX4XbVgHeyU913"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G72WPxyJfBExuqR9Fw46exEbXXRwDPhQtirnfCFNNZ4F1YypA2HpPSbjXNvVWgSaaivs5HEpGokEis3WxKjfoRy",
  "key1": "QezQizv2qK3qB4K37CNVuqxtMc1z4ZbecMqJPh8q7UkxDHrxLMDfdHUsANgzgX5QzBXDUYDCtuXfnncim54AyJo",
  "key2": "4gSqcKCbwFNudXMG3MddFy6WtFa9q8ftBENq8tzcghrGFrERnDqnbtrNrCQNo7isB792YzpyYtqnZKCT3YD71kYe",
  "key3": "2j7jqUL3nXFcvf2xiCr8RdWXW7BQm6W3kKh9stw8mVer3uuypdFCn3a3ueZDgBtGLijHvfh1p7RsiNcq2rEMNFrA",
  "key4": "2p4k8sFn2fTvumtq6MaKRsnB6wuQCPWGTCApu96gGPxKkPgWQCsFcPTPUmLc26vUfGNntc2GHNm7A8B9RR9zQ3Fe",
  "key5": "66JFByLp5ZcBcV6WKenW1ZHLdNkNWX4LmGomDjAWE9A56txrUw1CsRNfXKjH5coisVrRPDC9qZJoC585DsNmnVT4",
  "key6": "4u9mZejNkPaNudvQTYQwr2GHMFmR1FspS5PpMjsaWkdkYuyhVtRHXx54nM7ZwZX6LbcpcE195tmckVY6uSVxDDhU",
  "key7": "5KfZFCZE3WgdzNnGknbdHAVzXpY1YYtpNetU1u6UcdKwukMjpYt9sdSr7gRc8d5P9gZgF91PtKrg2LMzE57mZYqv",
  "key8": "XNA36vnQF2PxKVXvMAjFrfpKmi9SryaXTNqU9SyNyqzrzJqW7QEKXQsiDVDqgW3YzjcoZ1EfwMN2W8SXi3B7AET",
  "key9": "4pKUZVhJNr6sHg4ieiJEq6Bakg8XiwQw6W3X2WruV6VAzyb2wEmpiQ3FxoPkycoFypoMiA52CDQQmCUqyAeds7sA",
  "key10": "59UD7rZhW76NFVFRztrqRNJp6QtpK5jscHbu4qyKrLESbSc1gekGXJtV3TtdgYK3QyuGNd1M2cL7pPbTrVinnD6q",
  "key11": "FWqxxzDA16nYGxXKFyG87Biz91i5ECJTLu1NwExeU727QFAhwvqLaStjGRbV1yhMW7V6CRhVLRQ8FRTDye3gYgo",
  "key12": "5sz4BJEDDBNx7pLs1DuPreN4u8z95jEqGWVHG3vokR1XsNZeHijYBPUbX1jcnNJffHp8Abgti7yg3XEzd52h4r19",
  "key13": "5mVhvdmZYsnMuvyASpDnEhEHTPb4mRirZYM8KDfT1RFrhbTVWYxy2yE3UBBPqozXBC8nPkptrEjrkuPpYqZz4cfb",
  "key14": "DSmcm5FANPsvWiLk4np48Bcoyrmd9HSySeWG2yUoAi2JdgRzpYTvkAGGoTDxGcn9NAdTRLB1ZfbRrbWjK6pkQti",
  "key15": "3hmtZzfotQX4vjUAL9Kwg9CWmiYG2VT869uUHPmaKZLx3yQ8VHe5xFdjCnNou2mCm8XBPydGKGgJUioFuwvpoS9e",
  "key16": "68SgUhz7aohUyc8tBvibfNcK2hoBTRxCV6i1fH6Gta5N149qwKaBjaRQZKEd5e8rcUZApnUT2S9JqAFyt8LxCPP",
  "key17": "27MejvxfrNdZC2fp8qfbaxY95hZzohg5TxoPvcijsyv6SELudn1tZoRW8uUCt7Pnqvkqxak9PQoQpVfL9qSPeMSg",
  "key18": "3zAt6HdBZeSYGWMWTcPkqGvmKvaU3HwReRv64AcyE6gvtXkqQJeBtrycboiEDVHBoKNW6wKzCw9LMSSe1QYuPeha",
  "key19": "oVamr5eJtoxwmuqsAMTFx2aNJS3KFYgYk7rSFWScMRSTgfqK2bkGBFZYqy2iNAUbEzR9XQyWZk1DgcWUpv6v3tk",
  "key20": "437AegcYSuip9TkAZWDPQ3CqRBAp8NZmBZoudjVv4EpVN9sQ59wb3a5w5u3fzvEchyFL1Jctf5jV5pwFzCdDBMub",
  "key21": "4YcqT2PRDexfo6dPt4mzbmnshwJdWEFmwqqkZLyEqPsvc9Gkvhh5fnRkQqNQJ1gRxEWFMqJDmJEWoBdnCcfXMUvg",
  "key22": "5kDPMJz3VaHtTRSfys7wR4Do8nw1hsygtdWwpcpyiVNk6xu6iwSqyb2qa9Z5qJUREFsTFjbdbgHPkfczhYo3sXWu",
  "key23": "4zYsj11eXg2wBhQyA8CeDYzYvcMeYUymKGe463gnifu7ZJ5CdeTMSWo1Pu8Awqiq9amGtEVZvrBcMR6Z9q7DJN8r",
  "key24": "5FEo83GTKjA2CV9RDxZMi4GwKXxZwpDHVEGZeNcCCT9jQU5KNi3PAVUZRqw8y4THfXTXntt9LjeuTptuQc4pTQAe",
  "key25": "26AkQTT98fzGVZmf9zT59jWADQVgjMAjiT4LLp5QtC6bzXfVxEawq91AVZghW5XFDk94gbqDED2nWHjL1ycef1fW",
  "key26": "2UtL3ZMcQ28r5Udw3WMe7fDHZBbfjbmauaw5b7Eirot3uWEvBN6iRK6zqbsCp3hqrFuFXB1ixuoFqGCfSag2t2x5",
  "key27": "4dXiVpCsqrWiJDnfj9CfpZ4qes3FqC2w3zbqgLucmZME4dxbvJ18s7KxyQpAZMMjmFmCZq2c8WryEbeh7MK7Kord",
  "key28": "4rMuetvMwum4KC5iuCyrwCzPWGWNiFfVax3NXWAAQYRez8Vx3vuCPGs5qdJRAyMq8Xny2bZrEXTD8c6J5CRqDoeQ",
  "key29": "wrf5H5EqFume2ryu3KU4NwwDaSrKx4JvvzAUMYNCTSxnNaW3EKBQHZGh4YV7KQz6rZPP99gMS6JsSiTUxb7GbGv",
  "key30": "3Mwnb9Nbz75QPXUswwJqZpqDWEhUABM7cX4d8FC7oKgLVDbMvuTAuxkupDaeLAZrGF3oiYodixroey2UtHmqiPJf",
  "key31": "22H4Tt3BDsJxpYFtG7a3EsxfvUKBUKjxXr82MnF7RzrLHXbpmQJm9RhKW5q6eckxaZ5kxtar1Aw5oVSkcnKj57JG",
  "key32": "2FE87ArqTiwsyzWVpsDkN3N4poK4NYHQ2S48j1Dj2FBaPjMsQDH4Vvscs2YARpEjaBjAZiSG8euBgDpn2Vq3bB3p",
  "key33": "4sBTYhsDjNRSaMu7vJpHigCJhjKPfPLfzJZLtKz7kH8RyLijZPiidLyp9Ug9zY7eTZPWgNdj5K4Quj74RCFe76uF"
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
