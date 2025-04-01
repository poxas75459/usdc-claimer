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
    "5nxSwb7fy2AZ8aBtfvhHsrqC5gKqGjM1WgBhoqetN6q8Ptf1eoiVcK8KzGHeVT7RzU1BP7weKzVpYf18BqVFrhxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SKEgsnSmU9hgPoujaXx1CNtNQUzjohSeBhb4YQF72sPfpcSa8znYioLGrLM6ZfB4Vc9q6tXXq7VZMVvQuoEC69s",
  "key1": "dqphiUGCyn2mdVG1oFSwYZKSziV4eBoAthjVmsWKrok1TwDJcXtZeezuMbDUqHhKwBP4ggN3Kr8hMQqyvwD4LTx",
  "key2": "397BNWmFhAmyi1RtZecveEtLsw2QQg4u9Usnaw6t8RTj3MZ2YDYn11gJrbPvK7mRX5F8uUdsjDPXmZADJ4doLxXw",
  "key3": "5Wnec3v7EviqJYd6BcdkFiy2virTYMfNexVmRxJPAB6QMLwNUYqHKUjmsCEskGiSjmaXm2Nr4vC3mJFgVQLEHqJP",
  "key4": "2vJj3UVAJNHKrYcLLoQTUaoXK5qq87GXeeQkjCGxiMTSQSCP1aaJQztFfm29b7hTmavUZXKrN8ezK7qp4zdWS6qc",
  "key5": "2NnK9He3PdRspNyT6vaUPQN5Vcx8wQpXU8WCyMEbTZnGubxkF3RbN1ajGRasvmmahTFxaQ3AHRyawgZEMichzmCS",
  "key6": "415do4AagPSVatYLvXGtdGDRkkMg3eeyaKiYswHnJYRyevTv52wiYBRhqs7QsZ1ZjFrAxDh2YkE2rN7QnQPS1gsN",
  "key7": "4jw1qdmDyDGNp5NzieeieoJy8ysyJPdoye5As2Rqv7E9hYrrSP7hzEECE2qybtqVsrxgN1JSNgQ5VUJf2FbEiwe8",
  "key8": "K43RqdPmttsbiYtyBtY9sTtVxDuSVhR4Rvdvt2Uyk42e5eMGYcUb87SH9inYTiHvzBxpaUjKjW3cnRKqWkJAxoy",
  "key9": "ym9Ttu23ZNvwchi3A6AVE5sbjEE9GrChdjSVTgRgxQEeC1sGfSHApJGRg4ABPVQmUgehFLkcme4LZ2Ed9BRcSuu",
  "key10": "2YNn7pkKQPn26hbG9N2ZnCK6S1TPnXjzv8Sb6ZpQHxseByVhVja27nG9LKHv2CJ8DUNuLKLdNgDBrm72ZWdadHcx",
  "key11": "m1H9dB9y1hQKWeXVcvAVM2YH9KyPALNsWfpMbhqofr3AWtMnjFWgLqubPvEHoZPREUCKWxUzo2sgxjtH35FgZLk",
  "key12": "4rFucFTKb91Wrhx55oi9nphzAi63jXRVxf6MCfjnwiL8bNpD2vikebFKXoUEaGjhRE8mvB4GpSx2jKLoF2U8GEHq",
  "key13": "3174NdqiGkfiXUFQ3fVcDSYL8rBn9iNGMcc4eXxKZeQn2Kwy6FfyNJPTJMPxhgTSS6sqeZiBwiUtJiGUBs1Qghsd",
  "key14": "2KG4WiX7PP4mMYUnWP61nACTvwc1QEGfZu6pbihpEepWzSJrgpSCYeDv1iusc37pUTDsxhKUkEc55jp8bkSe6Ufw",
  "key15": "5XaddwZ28fXC5KvkRdEEjzS3xb4eNVMY4hNQKbfdDtPL2aatzDT7VBF4d1wgPyo6cM3VwABsmRZEeTw1QVTp3SSi",
  "key16": "2a7umKswVzWgY9yWLcXq8L9gM8GrbTnQDeMcBUY8psuJVFsAt6LyFkCnqSoqzAc2DJWysvrpGdwijSU8P443iHUX",
  "key17": "5Mm1VtQ7Ke61iqumqThD3xBMeoXXiUtHSndWQDVpN7FNzhjEuMQSjtt4qhiShAVEzXcRiWZpb2A9YaK3QuDKmYV5",
  "key18": "Rw9RUK3Epzom6Tc36PwL7xpL7wiYxdYwjM2VjXgeb9mvC1gGrZWdwpyj2yGGsoTeWu14f5bBftQ5ksmhqm6jyC3",
  "key19": "2CWPkh4ZUrvTfNCPWvEWHjDt6EcFaQVxzPEAJZuhyzLSAZAiNup6h5b8HG8Dh2gFmLvz8prvyDFDLqotSB7EFiHv",
  "key20": "3YpAL3SzyASyafkjvasdrAgeUncuV94MMez7FWA1VhRwFe6VcKZoEoPBZMf6U3KrxN2Vxooi69zRG6W8oHh4fhPm",
  "key21": "2i7QUY39PTWgduRjoYSPGWDFdvFGUKMbueKBGypAWt5B5PGBa9NeubzLczLnWrLaEzVeCd51RPGxv57BGkSL6iV1",
  "key22": "5Ta6qjW8FgJ9qoZk5k65yEwFA8kPtzn9n6jrVkjd9shDZJcShkYS7kPqe2NjC19G2sQU9kvuQogBLyNRMAnwGnRK",
  "key23": "2BoLKbwtvELxH6VTXMfxmfDRRShwXA1GZgDpRC1AKBzKvc1fzLtZGNmZHB3tAWeWcCgDZFi2arSxsKAkjx4zndNS",
  "key24": "2hYqEUU4udCWPddQXZ8GGGXmsvpcnNXYiZDKNkiGh3ZPoFxGSQpWkdGtUWvoCbonTr4DavFhRw9RcdwUokcGpqX1",
  "key25": "3gFo5JRnHnCkVSpZMVEiaBJEnnXAqDfyWMnWg8mQjGax5tYWrQi5vxrkBu6VXrQN9qGic2171k4hoq33eFEkvGSV",
  "key26": "EVthiSrySsUUBLqWHijXByFJS9nv718VwEQmSdYjCSMxNDnfiBx7854FMrH2TVCqpndZ2Tb7tmaJrDygHJScPnC",
  "key27": "8t3XD8h8vsYcb8edX24jCK9HGJRWzM9gGZXBC1TaeA4tLYyBcbgU8kkxVJX87WfrueeABepcHUksfcFHzSoFynH",
  "key28": "5TtNGFXk1aTF88RgnJUbtrovFDby8tqzurhYJr5uyWHa6MMC4FpUsrKjudVauo7N6D71jqhHGAZp36ESjuJQ9zRq",
  "key29": "5WRRYDabNbM4nK3xixDRSQXrThYa8uqwZdrPvKfuukh5hZSH14W36USufK2nSKBzTeHaeKpfX9W4b7PG9rx831ca",
  "key30": "2KcKAjHDrrTduSDVwT95a2rHvZZaDUMEVhMpfnf5zjMLMSvAQQmaAK6YMxBdCwvfTExFSWKrbFaaz8kikjzcXQib",
  "key31": "36KvVVwLxcPGa2QtR6mKu4ngxyF5HTHJRb8qyW2fUYJxf2EjsxPXtEF5YUV3nigt6ZA49QShkJoHKRsaetC6o8Qs",
  "key32": "3K6TUFjZG2pzuN8ZtzfSHCMGoCjBjK4E9C1iQXTxvAYXkhEdqCpnUkuPwZsXjwF2sNF5cuHGWMBca2A57UVqaDeJ",
  "key33": "2ZNHjy5LofVfoW9JENpcEoKNtyvvsyabnfXUDe4ADECD45SZ6GZ8uWz5ddMctVjDaVkJqH1FWeyKEorC436TnJ1W"
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
