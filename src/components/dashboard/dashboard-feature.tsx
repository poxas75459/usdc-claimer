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
    "3SZNmdM1k128wBn7S1upT648sCXSJbFBdPULfsFQwdZkSZeMWDTJtyePnQLJXhnfFCnYRyWL79W8hTvoFPvLD8pN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GhoTL4BAQ51WWyjF98CPrpTk6bLrqq6UsjF6ePbnHRA5iZQTRi1E16gxeuGNXHze1FN55TDr9MapKAtVVBSYmZu",
  "key1": "4DhFjh8G7wntpZcqdUJtfeLnue3esNrADxadvC66dRDbJkyt18gD1F5phvQzBUqJanxTt6doVBdeQGWCdHzs3wC",
  "key2": "5Gx8KafYkuaiZ1U8s3HxADjdNoxkoK6REVbKw6kW2UqeDMmV6W1dxrUDTgyaFgfn32zDZRYzojvWPKWCcjJQJJcy",
  "key3": "4FGyMccicXbSSsMk8GmWbCJbWvEFs4eMDZTw6ZEMdLvkg9mB7tr76Gm615srSdQEe2HRN14y2At94ydNLGFoa52i",
  "key4": "RiPLkDQ8R7gvE8fxTG7MP5DrGzJGuJM31XsiWvqFkoA98FNLLLE1mDywUqE5aT5sLwGuVhu2gFzFVsg17gNn7aa",
  "key5": "vUKDN2oxrAhsXUiRZmYbvivhzU7TqxbikAjQywZyKLdhR767GjVNPpDHkGSYhiBpXX9cZaBuUSnJoL1RXZ1nHcg",
  "key6": "59bEPzNnoedVrDCtHrRyKVk3c9ZHukqQp773iwoanvjhmv9NxoB1H6KU1tRHXJMxHcvQJufHPVb3gWgsPriz2ecq",
  "key7": "3to5EK6CFKgTko8Jd5sAf336hyHwJdD4z2qVUeV8sSamKHaiqzEgi3ag6YFF2fwfKHf32wfTXQLp855EXD1RqaqK",
  "key8": "4J5mGVcDp9a7zQia6VFa4LCBJXDFpjEigLiub4mrr5J641c3v8WHMmPzGbKJLy2aMa33s7WxhjVezk2yxcbysqdQ",
  "key9": "2jC7Y5H2WxevufAyqdTHtznoZPsZuKuMLu4psG7artgHXVhG9XwPwGbHUdnykLxQHBPEkkFHTAcTH473eZu9G9ZQ",
  "key10": "2RGdrJudqUePMqt8M46678qprVYcSvFYSqMip4TRT1iRbD5XhYZQSdwVnoKmo8pBky1T6gaBKuQa2ePm3tjrKevs",
  "key11": "4zS1TKyNcrYZfga2d2TzVBgWdHsASiqJ172dkCBH2VrKnGmAQ4vtPecydBdNa1MoJdkHH2QTv6UDnZsXPzLnDTGf",
  "key12": "288rDH4G5RHVyS9fXdo5ecKPxsqtV1BtoCSksA27Gg81xkUqx9dk45dckpqzt9a7oC3dmMEDMdoh6fnR4np6EhYJ",
  "key13": "3ywAGTsNXn9ikKgFZRPCss7H9AQs46cVt1jwVUSxcw1oqBR7u4p98Z1mjmKbvnCqrxftpYzD5dv6NB5MBTbgJUpT",
  "key14": "4xfTxy6Yg8pyXm3YnH4u2iypQ66RkQoZmqQ7e68wYrxJHtecqweatqs5wmgMtoKMQnNMWJmh1S27iXTvXvAEad3w",
  "key15": "3hGaJDCmg8ioNAJACdqwCoTnyjz3fG4uDSuGyRtj7WLCoZnWD74k1Ba8ST4VPJMatmpARz3WVgm4Mk2pzz9nCPTJ",
  "key16": "2Tmyy8aYjmoYHrBywTW953deJVVZx6RStPfPPpPwcLR7ppyWVsYHG9eHcR7mfcbd2srT5FuAQwtBLK81cfnQDAYR",
  "key17": "37TNpTNrsqhxC1pTHBYbV3W2TDowK3a3QE9F11VXmFg2tQ43p4LbfuXqyJVLu4Vb4Kxy4qo4VfCZXPeP8pQE1q9a",
  "key18": "3sTx7YUuoHMEGfNsqNAuwXY9z9huF5Qdwtf5sqEE7dUQ4fZkZaptTbDG6jQLyVVxdD97KAhankGUfUTL77EqkSnD",
  "key19": "3VmvkBvKC6xzQcGyJ6sXmBxC27Eer4WAq7wiud1VDvu8a1t6THykdAjDovDq8PyAYB5TyyYpSNUonka8sQpxLKpn",
  "key20": "2V4KyZzNn4ikLuzocESurKL4NsBUwDgWjBKvtksEgZ9tvFbh4zNcYQp9vRtWPXmkMVZ55Ds5jxS9kkV93wUdhJwk",
  "key21": "5QGWAzEEzs8dSeV8kRXyNsjhRykvATQeg9SkX1YUDQZkpn4RSf4YY2cVjFscvn1jSxPTjcVsZxBFMY7kbGQbyi5X",
  "key22": "ZikzdepVNQVpy6NRvUrmPiQm9t2QZg9Fdc7bnLDibCKcJapXgi1v3Bj2ZSFDG5bbm6G7w23n9GNFkTiNs8sw1t9",
  "key23": "5xQNBGDpsWAFgkWZxT9cZTcqTZHkYEz6ojVxaJdVDvKet3vfw23CWsfXxJw36SFvgfzX2F4KtU5BxgGEApfMvRv1",
  "key24": "3xEPMhqFzi8f6ac3RVh96NBrDJ1zDDynHksxB5Z1iNUYu4fhzPnWcSKkMcyWCTGxcUQU8B3KzTNbhwAovbfQze72",
  "key25": "5Xm4AK5PGq8wx3T1Z9DhG9S4gjH2DzH7waZoBQy9SdKMbn3hkQdpHsqmpKWDAVg9KPkFyfyx3Bcn99DYPpQAGpZG",
  "key26": "3fA2kCeR7VbZxZTWtq5et3qpR7VHLJEe13CYVqWtnFD32sadK2H4a5ehTrJPKnMaGj3CGXgCp6MW4c13knUiHDhp",
  "key27": "5tnScYjgJ1G1qGTmK7tVnQfexfqGS45m2pL4HTbphJrn4DiXq8DdXMNhsnABJRx4A8zQqzkuxWhZtbMnzuZkxeFN",
  "key28": "5JTQEpNySD5eRQYbvGE9bgE5y8BtJkrsb4KWP7tD2qdbZfppePGpwU4n8Fq9QVd7G5g8Jx9TXJ3noYQJnMLiauzn",
  "key29": "CehCNHbHZdL4cQWDZpznMGpMFFtbL5HQB9hLhWTetV3R3TNJLCKfWxRe7bnYzYGJn31zoV5FbQXu5hQUrVaNoWF"
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
