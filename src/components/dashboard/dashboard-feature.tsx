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
    "vYYczwwccE83h6kxeKmN5V5jmFhWhHjVwrCG8utmyacLxqhYSdX6j1iJauDSuyfVHQJhw2MZYGPvEDgovmGScY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8sUvP6DLoDns5ayhpLrorL7XK9geVqoEWk4Y2BijUWeZjVHqPzew5sM9VYj4yUfgHmUbDFVNZQq1mwZ9SahnG4",
  "key1": "5CHiCsXvEGzU98E5UpKHfuqVPHm4DwPE422pZms69feyWnXzQh8zZc8ERP2raz5TzpXVxC6yVYnJp1BrbQjy7XKn",
  "key2": "2JcJzknpvJaB2J8jB34UrZm2wJxuCBYHGKY8bAQah7fq4dRaQCsrEuSTREviYpbVJbXyz5JV5WKz7BhCXb5Svabg",
  "key3": "4rCNT98kum3qE67RAEwYFeDGR5mPLjpeZ19JmDNHVGQrT3WQwmt5VkmRLRL4t7PCDKq26KXZVp6FbKPWnznRjo9H",
  "key4": "4FAb2gAMHBbuYNZ2GYv9udvHRiFF2fUXeBexe8SSvynBNggZ9Z1HziDUEopTQxh1iRJ1JY7pud5J4P9zCpvjSZah",
  "key5": "3KEXWbScQ66fPC6rtVKEtuMAs63eV2K8xonbESAkXHq7GByaqtznMuv7TDstXaF4ds3jgjsaWtPMDviib6arGW5b",
  "key6": "5kk9NcBwEZnNNJhBR3W7fxHZRkUepu9q7VYN1NDWkjMh8gqPChCu4A8WZQMuwisEQgj8LbMhhavkep9L5NmMBatv",
  "key7": "4ANU5unMDq9RfKUWGbKZuQvSuRHdi5c6GxzthJgmfUdiXbjoXXf5K8F9gXttj9SVE6dfso7pvSGR92sAn3zeJds5",
  "key8": "iusscUVzMjPH2m43DXhDdCKNB7PGNZk7kYMBMoRFVz1YRXvA1CrSKHXj4jYQgT4jBDj66TmybwLno4ysi2cUY1F",
  "key9": "45muK7KJKETktTrFwkan4s8kaxfPfz7GeaeZWt6HBtSFt1bA4EaTDDK5Ls5qJrYrBbDrE8kbKEumRDoycWJEcaoo",
  "key10": "3SgEybSNWfTzJWUNqLj98dDTS5zdaiWKiG9Ate4XkYDq6ET4SxNhbVUoXowH8gFU9uCra198xmpR4uWWfzKs98L9",
  "key11": "2sx6cmkoesBBap7sVchzGeG7yorwGbUT3wTSZLD1VLA4QrXUdvPRpnutwJ6TD2vXnLUSgu9QHTjK6WtAxQL1XqER",
  "key12": "5dPrWP3hoVJaUfCe7ZhmWwzfkwCfh8vQPZSg5o3ba4QcuBuWk4mQJ1MpgmwVuoBKimN9j9Hv8xKE69Uasncc5hLn",
  "key13": "wA1Jfb4G24zRgBMaSZ96tp6MmgDiQ9ffKQra3N2ZijSvaVQaXSjrbgS7Hz6ipF77TPDFh8pYJFDct6qXUz9Azp4",
  "key14": "38uXJfzRJ3myCc1ui37XDvpH7uHxnT5WM1Hr2vyB9UxQAMhMim8rG1GdfWBTDsrMVC1LVY8f8duLo15FQtYSLVGT",
  "key15": "4mfCciVujeWQxZaQJZkuKqCspRndz8A8MqMVkywiyQk94VCR6iKkk1QByfdDvvYPCJBqTXS6Wen2eyZDeawNtAcf",
  "key16": "oZUJ69GsuNVg2S12YfL3oLV3NKvSaQhPR4B5FnL5qsYnPY3wkMbjKTyfcCrSTp3woLCgzSMDnCin19EGqVPpW8k",
  "key17": "4jAGCJZtvtJkfWGvfoiMsEyW75SWtEbz2YRDRWdZNHHAMtY8rDA5ZHnrBNsgUWAMANJLVajXq7wCJjRmwG3X7Wwf",
  "key18": "2RU7hfPCg2u1K52R5e3h2dnBGNPUeWmDocMYaGWAGSd4t4R8QPtNQ5SrLRwxqdcDraugbeYCgSUfbCXu8hKUErPA",
  "key19": "2yB2bJpsRfPQrHTbfVZGqRtPAt1hyiiHMkfff9WmLMgGzF5UxeG4spN9rnM3rVHbVQ3QNa98cw7BuybVj9pyifwv",
  "key20": "2EpSRGpGo6LNiQ7HaQpw83goo961rB5tu2PyXdY1Jd8kY5FQ1NoAnZ5jKC4nMQ8hDxWoh9y7pKYjAcU3qUB33FR5",
  "key21": "M9LTEH5kZPvpHwT2KvyUjKMUs4PYV8ZWfmeuQ1XEzaw6yNK7hQRwP8Cc3gb3yREzq1U4xB35zG75CoLQMz753vq",
  "key22": "43x2ky9yeMbQGy3pMLe4jyioVb5tkxoyNrQJEsxPnULN7KQFjY3T6KdoFMBejx6fAmcoerHJwEwGpipotvn1FXay",
  "key23": "9Wm1Px2Rvm191GUnD19rD6NmPpbdYSQTLZqt5rjtJSkFjn5hvNubtkm3rWpafdMq56EtLz2QFaCSaYvKApYfj4D",
  "key24": "3MxcXNH9v4En6wsK5kiT2M8xY9Luvu5gc9fXZzFGKmECjz4BCk3qay17WwSGyJHgk9U5Nsxwi6vcpVpNTfPyNAzY",
  "key25": "htiCzWSP18Ta5Gdh1MkxqNfsXDV66p1137Gv5NgfU8gtMNeH7xg6BzJELoRATVymNue7jSF5zrmTZWHuMB6XGrZ",
  "key26": "4t4X93DtFL9F2g6or99rTwyz99GRU7112AuZgFkVFNEmoVnpCEVjKrrVpvw4yssdkKuym61Vtt4uL2wrMyu97Mpk",
  "key27": "47fgbCR4q4c3k46k81xetgWVPDTXAHjnrDj6eSHSNDJ4Wk9jk8HMvDP9TxaBwVbgFhrjjGb2QcRj9NnYEJaPs9Cn",
  "key28": "jsuBdSH2gvXxyME8D72TAqeqDzUoQfv4Xfx1YKm86n8bNqcEbpw8793atVv7wtLFitfWQNcN6RdCu2qfxT766mK",
  "key29": "4JBBsXekgJ5TRGbCEZqn6UVs9zZ2UxB8iJr1Mm1YGStxhZiGAJt13x14NZzhfhbTL3Pkd8Ym55jdCvnxnY3VVqpP",
  "key30": "41Rk99fcJAnwBUbfbVfYuuFBJhiSRt9kvnUv63YHSatAsugmecLCLLC7j8g14DDajtdiAmFMvgzKh3BSFijN1UUD",
  "key31": "4HKzjgfbnEoXvhhti3stMfCLaRNabhGH7gVFrJmbs9fdzJNEtW8Yqka2Awyyivytxo1We3nKL81EkfWv25rZxejf",
  "key32": "RJSQn3BfreEF2kQTYyF3cgk3rFb1yk8vfjNm3CTn7irpDQMCqEdiYfpVYQS1dhHj1K8g8rqobKp2noR4ZHehsqb",
  "key33": "5HNpjTt41dpWkZHtb3CHaibMejkxkzVx5yh2BPydUesrWgbfAh17cfFJMa8m8pJ258DwMRJ3Gyvcz93iHTJ4Jo8E",
  "key34": "3xavu6SzYBMczruHCx3uHex18zWwuT5STRZBEgKoTvXh6AbX4W5w9oByW6PNZNLkj46Kv3SNDnhmaV7Xjy2Y685q"
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
