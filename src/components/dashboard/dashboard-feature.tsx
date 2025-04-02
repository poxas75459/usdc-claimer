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
    "2cxdQjLVHuJziBJv89wdqiZZacCVcdR787SsC7igftwEahJ6753QmUxZmdUVd1vCY2s5p88yEcL3SUwskGqdcshd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QFW6YDDHHq3CQ3Q4rBxfFV36RKCMX1pMomCrvfhy1nK98jqEkEFFXGFG3s9LntYAKFdbLSK2PDYKuHaUpcRw7NS",
  "key1": "3UnReS8F5wbTEbroP3PHbT6nscrXrFr3MzTYRAXjtwhnuczx1wDskNYVSBceRqRR2CWxoL2PkJoggFkdJpGuATtD",
  "key2": "64ipzQ3yTckaZpjRHz7A1qa8xiUYmF9Ve6bwteHEAPFB92P8SunJAXfNopZnQtgJRBvT1gX2DaT23dCZdLzKvMAB",
  "key3": "2ZPXxtc2RQ8g4ucsSJNCp6MZ2FaPWkjRgEp9tS89WnJ4HE6Gs2wAqbhzBtYMKrvAHcFmkhoebEVbWzzaBDbKBvx",
  "key4": "36YzS7hPvbCMes59x57AE53Xpq72Hu4152U1Z44L1Dj61XXXjmPMSTzyobJE32TMd7NstQ5aHVwEBpSrBUMpL4d9",
  "key5": "2XAgGESPgNi6P37T5KoT34kDhAJ29S5wPFSNXqmEoa2HmJten4ZAxd9eb5ff97cN3R1kvn7n5SniWEGi9H6kNiY4",
  "key6": "3vthFP83S1sD4GZHUswNAnqnXJNrX47GiKLMULfwZE9FzNtnzZwgT7mirwZSY9BSMzpDtwsXNYLkVCiif3FpwTYY",
  "key7": "3Xwu3NpscsAgjsYTVx14Fc2uXoj9ri4JW4P9tewsdzMxs2gV5GS3d2hbnm3E5ioXaeLRZmomKkFJyg6E6YABUoaW",
  "key8": "2JbfdHnRcyYEdaGbtVYDRYUdpP5vHWEPRZ9hdUUKzQ5fv87aQRSgx5dHtXUxmyhQkhvFFRxbs4piC9SBNgviosDA",
  "key9": "3yXBKcywhdfvuDbiyAbokuE5Paxj41tbgqMzUPtxXXNRhMH8nNWWL6UCKqVjzUrh8DCvENP71Mj8wp4RhEcZCPSi",
  "key10": "4gRCTvJUDRgNY7f9ipHAQD3U1sd9ZmNeQ4HTSEgffqriTTfaMYsjrD7CYwHkVyb2dHGcntF5YGZvuyNgvgKPnyMh",
  "key11": "4M9S6wr7KBZmtLBjvz1VGeWrMMxXHJF1xj2i4hFHqpLMAwq7srodDa3f5k647H6BjzqHhs83H5uUhGiHDReg8yHU",
  "key12": "3SJmSP7SwZGsAetD3KdESCK51aQ3gdy9Zp2Bw96ruT8ZYwZsvsd2Dw4kWHrfCNXgz6H5NFT6fhGkw3m4DqjLzHwz",
  "key13": "5sjVfWhgqVKvjNgWMnShzjfwVt3JrNfrZVZ1M5mYsaqLCoccD7HYNqRDr4xGbXHakzQdzFUM8Gwr2tzzj6UazKFR",
  "key14": "2YacjwgPVnD4qeZjfUCLFEEg1kaG8mhBsfoAjxj6TM5kvREuw6ceUhHgaEM6AGaJpLKsgftMQiPEPCZf5P7SQPbk",
  "key15": "2HRN8UHp3ZUSGfkEzQ3PukoxSCjQpudMvpxYD8yub6fDGfJXZrN66dkmDG5noPLZzushJbDRtturLHgw25V4N4Wv",
  "key16": "3FASzKXZGgesXZju73QToj1j8kC78S1HS5kYvmTSkJqVdtALhQhNG6bXozYDqmzFppKT8mprbKAwARYNmeNRpJQD",
  "key17": "5RwMZ7Rt4VTodNtfqvmjUTiHSQMRGi31nLUAjXsLJByT7F3dNzFS29k8uXVsHRNYYH6MbWjFF9ddoFn4LLkHyyrB",
  "key18": "3eYFr269TgYsWqRy85AxM3GmzE6PRnHKQxp4Lky9ExnteUK29QcNJeFDCuLz3UActsFV67TXRzDo4n1CuVsoqh8F",
  "key19": "3b9qdSRPUxVoa6R2U8VkdPrrhYqVR2f3nqXkv2UuDDVZCVxUnTE27kA11Ur6pUZhVbzGSQA71RmsGzuzEa9aKni8",
  "key20": "5FYF261xAimWpKsyGcD6h9WkQSgfLDqNdHW69L18gxPE55erRcFDa5H5xbrtXLLPeNTCEdkMqkU8crqygGgDmjEp",
  "key21": "3rN5MhGULq9b95deXeCzeZm4ogUQj3ptAULubSAdGA7rYPbNHKz9j1H5JvYC1UdGJMAXdoYPQCSNwkzX7B9gc4gi",
  "key22": "2wpVz3i49RjdnpTSFkFyhWxmH8dd2CnrPp8dMhJmBQwbiAszLCY4XXUVy4GmaBZ8CVYEk51mXLZUsMfVLKaYBgbw",
  "key23": "4Z9o6Y3vXFR9QpYRyBsK4gGeuWq1Y6UMhYjEApgjLZK2ebKDuh5rquDCnb2ZJ3MBDJb15CwppULuqjK4Dt7fPbmb",
  "key24": "32Wxqru3hGLhrreciTTj3bpBSUTWHeTTK1Nu6xTE1cmP1xxzYG8EAJYdQhrcwkHURZW9eet5PuyMw8YsYjodBGdq",
  "key25": "4vbDENmGKgoqhCrurhYwumxnQJd2Tv3qRQuTQ4p89iPPQ86y3Dtqkxrd3D5dbbQR5S2jsKHQJURnjK8y8Aiz2ZHc",
  "key26": "4BY6moy3vgfbw1ch8DS9hnfHgHRZJhYRB7eHVGwKurEW9y1iE2rPygVZesDZ2q3txh9C8RR42qrZ6T9MjFiAXW2D",
  "key27": "3anMNiqut7G8qU39M6VX2ChjcUWuhHtCp9DQfKDCfSBdZeLC7WCMy1CrstWEMbrvqATZ38YFbCpNwhk6okLVeFwQ"
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
