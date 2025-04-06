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
    "3HsiQDQZQK2BhxzRPLUTn45mqHYgJrGZov546UUn6rAhDn2DjciqAYTgLqEbsm4FVU8b2jCsJMJtJw5dnA45uGdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wybYQx2He3aoJVyBvBybWJaa3S7XQZ6SRuDF9XbHn9jqPr2f5zYVUUT6L56fBDkc9vwqjqHn78GzHCiyS8SbcwG",
  "key1": "5jLNRPsFZbsFTsgekYf9d3hqWHLEFV52J3F3LtonCZemTKv2jzs2EwKrH7Ccm5WHn6qZybutBjMNRAVugkyRefCo",
  "key2": "5vie5oGR9xXF7CndEoFaxfqBXJbRcMPxbbAsY1iB4qAjfypsXTtjn63Q8MNtyfqXuxhCfoU44URdnjxz9AtnwQha",
  "key3": "27pkSPwRKd9xaY3RH6uSo173EpZBuNZzkTqAfEfdjb8i1oBMo3jQWxxWiw59JoYVJYCbCUhAAhFSRgLPm1Ymn6Hk",
  "key4": "5TUb9mxrYUGEZGLitB3KbNwwotW2guLqbSaAZhEQNHwkXw94Fo55XVburgodYLyDRmZx1D6ur1bzVM5FV5WJaSFA",
  "key5": "39rNbWrTEN6snjtzLK6XsNN5hB1RdewiiLskRgJjyRoqtYnb52KzH7sjEe7jdiAyaiWYYF5m6B9hjXwcFe2Aou43",
  "key6": "2ULrJ48ewTshxDpCbNPxdVUWB8QxNhJEBq5DirLj39nMqxAV7MZe9wpqLk92zoKn1v7GWwutPhNp6eh1Rtkaxtsa",
  "key7": "kZN1baZcRpSp5RQBHe4LaHBbWw8bBE8NdBcEYaidZbttcQ9Mih99GaRS5RmwubbX6men3St73UU6iLQfSpsFGbJ",
  "key8": "ddnk3fEjXRvxmjJgUXbPSmwCGQEisgTaj7N5KPQXfyF8aQtpme5kta4V3AZBK1PghUXUoNSMpQBy8dyhmYKqGdG",
  "key9": "3PTL3yAALwJukw6LgcrqQWJaKYcHVyCx28WwcU3r2gXnTbExMo379QJAGuZYt7APhV2emH6FDwtcgYqqK6h2emYD",
  "key10": "2MdiwRJAnmquZ4skJNFpJ1AK3WSxsAsWzu2nKhi1WxyPzAUMEdZzrzq8PHg49rp9sP2JmNnhiqjJfyvVPu1vjH8s",
  "key11": "5XxE51Pk66Tr9CnNDQoqbjfbBVniVi9cagHLCw5mD5SQ81w7PkJQYTUnQyW5gEVdz5BF5ivtJLm317y2aDNd8ZtX",
  "key12": "2vB4m23LaLridYZy64VeBD5pbhDoWmpnzBarxyoUgGA8CFFusYwRwxeVJP9hEN7XQycZdufy9UPX3JwDrtfjqMRm",
  "key13": "3pHEA3T3jwPXSv58xktJgBaV5kqfpuCkd4maT188zQRYhLMrX2e4wPMXxmjE2jMrFDbdQgh5NqkqzQzfRm8xeyix",
  "key14": "9QUjHTsJpUfsYCu3yA2Uhm4KudyZ2iaT5kCgkaUBrSXdYxv65pkduqGuWejyGE63wkMXT8TBzTubApr8WusvprE",
  "key15": "2y1H9Vp8BfAER8GwvyLWA9zqaW4QvqVM4DAboq1hQTFLTWLnKGhw1723fptk1fHLjr4wt3ZUyw7QKYF7wGzLbVqv",
  "key16": "57puNr6AZUUb5gQEJqTUtGcS7FBhdcWjQvuSm11kVdQq5HxNCJSvqQHSzSXouyajjzWVk2q8GbePt7twRrwW7X9E",
  "key17": "2Rjxi2Tj9DkDcHs7P3FZDBCsKrJ4spGmR2o1eqHZWUxDZFpRVPKFxPzHhm1PG8NZJ4DYjoUXgrncVKvHpaPrqTeQ",
  "key18": "S171UZ7W5rBz8cP3yt6YVycNaYFLxp4aknpf6kygoe6NHc2AVBpyCk2b8vseQ5hscYWg6YmHohiZ9E54o9M2qDg",
  "key19": "4ugjnrxVCRoSkwTzKBmAkxmTJDxMYtmPxeRGH1yFNWkk5NtndCW19hz7XdMvhZLkNimVuCnA8zJrjH2YNuCa9wVG",
  "key20": "4YTfmiXNJR26LnPj6BtE93ZSKEvQf1bpsipec3Gu9WXgBSvXC2EvcZy2xZX1yk1bpiyLyUJ2DE8HxFt3Dey8Q1cC",
  "key21": "VEKmNqpcAwBhc1iLwFegVHkNvCRv4XUuoXM6DdqjgW3FowD8fBtVK15sSWQgm1c3fuJyEhTTmvc1wTvCKjifaAx",
  "key22": "Nor3zf5s7kJPdqfE2eFXasKau7jk8RF2aMGVRAT9HweykAYh7WdN4XZu8Su6ufLtFATLmsf7FayQzxFP5BBL1kj",
  "key23": "4mbN5edPxNf2R8nrpsmLEucavzog3dPiG1TPU7jzdt1GfbNcytyAuAqZHW3HMWJnbbGcCs6dUQQFFf62MUvWQadv",
  "key24": "4k5J7Un3L4B9WE16fw3qz2x289pGv4kJ3TwCNLFAdjBbSHgt1S13WwgontWSg7MuXB4gQqDVnymG6LTqmfuLKn2k",
  "key25": "KZmHMeeSV1FzikuLM8ttMka1gYPysmgWo5uxMvnVXi5FjkP1wYKFCeYND8n47ArvSKcjCtv78kARco2mgmRai2U"
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
