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
    "8p4KBqeRSUb5yYuqbSiHWh9STKoe2fafhAQBfePgW8pGWo7ZEKptNbimmQ4W9GNH6tawD5kRRyDEFgQNGRVck3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yz9ZJFo2qqYHssqmbucp9wSjSYMohhMeVT4GQyiDPwBhBE6tN6b7KX8dji9iD6bQJ7HiT4DoaqGyHQYzsifuJEB",
  "key1": "3eDVuH8WKD2LgUc3oo9D6v79z7uM4A76q4JMacmLm8L2THfLQbPCtTJHi44xiDjxhJYbVQFkFoqJK5WpQDNADU51",
  "key2": "jD33jvvpiDEhRSHUWzfE8pUYYzi6BPgwCDZGzPEdHFXZoK1Auap7iu7NK2osmhju53eZn4ZgntKURoN9jNQpFKS",
  "key3": "5bLB6jNvWL42eptHjGESD2RfUSg2je1RHZMNcDGBSHNiKSEZ7FfEwY84miX7MqsL2b35NzYqoS58jZ64YfUhzm2D",
  "key4": "2jViqvnswG3HvXDi4V89UTdovh4Fr7geQcQgsyw6vDoJCTaLJnocMqkPejuXLEZ9MnAgbdxbqFJBjBWj1tcC7uxh",
  "key5": "3FPa8up4kpCAZzsUVX3uHHvQmykDhumjjg5J82caPmeUkv4jGSRppAsZWdihpWETnicfJFoxgdZYzTu195fynRxX",
  "key6": "4bdDq1a61KfSyQzhNFeD1YHcJTDTnrgZEK6hd2Fuz3Lrwk2rMdjp3DwU665m9qyxYPzJv5iX4CuDjgQt6UGqSLzm",
  "key7": "5St1YZf4A3hLq3CrKc54874Zu5z5TNehu2w3AFZSMwSxFNqwREDvocJNCPr4EvrPh5s55sS4iRTphRY5mBsu5dBW",
  "key8": "2U8vv92ZArcWMMvbLFdrn3WD7EzooygjSQY3UEhC67YYoiEy6pQtajYe7qETi6gezuoDJdndAAVkyaXPuniEUmpW",
  "key9": "5pwMukpur71znhXcrSgta9Cd6DgHcLXYSJgqL6QB8aCXY2UR1BxHDbo3bUKmSfLscTRVzrjv9amSLBp8ndUvMRwu",
  "key10": "4ggYGwadBVYdqZisxbdz5KJzTdBzSbxQ8JjiSoFQpWHhJi32hWTeNYJTw86iDpimfLfENT1rEq2ak23TBpvuBiQA",
  "key11": "5NcDW6KM3JUYXGCekcSNdTsY7rrUCQfJGMnr9dv3raLjiB6jZkkCv2rgEiS9JnD1bLGBXLezDLAHeH8McHdLBren",
  "key12": "2XmDsMUAsnKVqEsLSog4qDZZEp5kjpRW7pL3Hqx3sHftTy37SF6V27zUmyPQxYZ73HRJHkQ3ZNRvKByyBBhqtY5d",
  "key13": "TPvJCTa62BEtqJeQFF97XMHAZhquedWgGXpNpJkiR5YHxkzrFAYJJmJSeWL9ecZVtVtKct8yJoohqum8iumLADw",
  "key14": "3a4jxjdFvfBuEqkcGXLv5DavwqQ29ocgSzyMpm76M3fcGt5FcjNFHYUuuUySNjHGTJ1hRgijwEJWofSNihwerqyy",
  "key15": "2YCVPXUWFL7offkEFuMje3CASK9Z2hPEVPaVDM6WibCJdroPXeKAhpePyeeK5BNy16vjfyQbxD6UA8xh5nJWKXzS",
  "key16": "5dqHcCuWJ8KZkaD6ECsaEXDniUFHD6v1Z4TuDzQwzRd9mm8yAxe2rZZmmdTsRrwWwGUDQCDxVP63ENiF4k2gH1Qs",
  "key17": "ZY7ybNgkW9FeXhDyT7p3KRGpqfjU5NRDuJz8jvkBP1CAZ2VWxxd2nH5tfwkXYyHmQPFHsU3R76H6UyMJUXSscP7",
  "key18": "R5YSq4yrYbybJShkf188VcjjKgJbi7WuBJbTfrHWHyuSTgpe9XZDTcbiEmjFwJnKHcuzvdzmag49KfWtmPMH6Wz",
  "key19": "2jGnMoPMuN1RjjY213y3gtRkuVNd38vLf7pbgVmU9Sf3DrWQNeeGsesnXZYRLQBGqoMQxKyEHNgyp3p8wo4Ai6dp",
  "key20": "AXYn11Ev5RBqcfwKBJ93qHph6FP2hCCfZ1rA5SVF92tJA6sbT4wvMWAmSnhMBjay9ReHbGByJrcJqnkZDYW2TjA",
  "key21": "31DeT7BmMrQkjKW6rc9C4fGTiDtBh8r1TAMtbctwWXftXfoWnhoTJrWHCRuqefHYE9MpekY5TrETrG3ud7QafSTj",
  "key22": "2wdCwUCqMYUTZWVZQTptMWtSQCM1fsaRwt3KA8wBmT3oEhr1cYU3SNLXNHb5cM2TUUSoZH5oxRCy64a2xHzgBVWc",
  "key23": "5CnShezkC4FXWm9j1nqLsy5iAhQYZEjFn83c8t8YAAK4yPDVNRt5vvdnGw5dAbp58TnM3gKaVJ66RirHvctaXCtR",
  "key24": "53w3cH9TK3deazsSgboKsuUwihAQozrEwxuYrEvmLAxVG2tz7yraosDb72UvdST2uY21Qvab4jty2E9ECw9FVDxE",
  "key25": "2k29DiFhEiNdN7oBpZLR9HdbhkwihYeMzwWzmSEtbjTBrzpo65qRxZDWZed4x9ximuqMfSFZpTWJpfeCzDdUKth4",
  "key26": "2xh6HxNEQTSMDV7iSEiQxY4V38KCXGkWHhjMRSfmFxeZiM1GbjRPBTM8oqX15Zk54MsoXodN3JW5GRS8Pip3bZRF",
  "key27": "2ZZgRBExYjNr8PgBRCkyA9kYLFKKsjTPrYaysCtpUcBR3aABFLS9YygEfGanruuf9Ze7zX89h6q38fZCuFuWYZeH",
  "key28": "hSCSqiq9kS6XdCh15z6nr6sQ3Z7e1ftTjKkCpxUpPdqYYCyuPYbUZtREC6LLAuq23wCK7UUdC8d2z9kLYjafypn",
  "key29": "21dFWvii6dVM4eTjBjGR7cQQJZw2QqhNAHbqSWgjDH6cvFMTDSwy7eELUUjhdnkPzuJbdeMXHiC69TXQFD5LPkbd",
  "key30": "E5E5GVzmPg3Z76pHqq8WUJE3RmRA76SqnCCzDhCJ6h1btJhqLLnSdvsKYXtPbLvDhN9cUpBNu1eBj6NV2bqj5Cy",
  "key31": "34Zu52GbQmq6U8hdCwQUTL6WCKbrEK3t11jNSUhWtTDRqzgzNDh7WkPoTNyM2niuBXY8TNLmMLnfAkanYRRd9Qpa",
  "key32": "471ixXEmbVov35rT5DARSnw1L3Dwh2Wg9PrLEMbv2Nt7zibYQFJ35E9HvDgR7G4eDFkthuhKhAkv3T9cTAhtVcbw",
  "key33": "4Mo8RzsNpqBxNdgqDsxTkS6rMiom5HfZD6uhoHVFtDbN6Hv9YL1sk3fk6M1QkcRL2thDEWZeQvbrZ5No4SUYJs9i",
  "key34": "4gmkgwons38khXpYCstw5hrdSYSqiaM67NzEjYgbVGiifgrV15UbKebQb8YdLyQxkegHLEur8gXoYXCXrPEKv1uQ",
  "key35": "24eo86UV3QyheLxUyMspG9syGqjGmdENYpV8hTWa69j2jHLvj4WG4yy1662xhRJGS6dHG3CZWj1yu2Cknua7ZWs4",
  "key36": "3uorRfswB7LcjhL2iKW65ogExZcEePNP9WU5K7zcejaZE5yQwWWmWFBWdh8oNJjPdPbK3RhYdWcsA9SiQuWYKBPm",
  "key37": "4p56zYcQhQPZoWxe7wgfQXwXJfXQF7JBjBStZ2jjvoHHiGHgmvHFBqFmVgZzhmtKyEUJqsTWw6D1dB2LmCBQdHSc",
  "key38": "3yY9t33M7uEQbzTKGJRWmQnisC2gMUqMCW9qNmoaKYQdYdYFvTb8JuGgrPukHvFVqPhy7sdzZVD6H23tU5NBAjcs",
  "key39": "4EjxogxnSWFdmX6kLrqqetzdhDcgmGT8krhY9t3KkLQYDpdYLGzjeHxFXzvYw3nBMeWAGgCzouLmzu619J34PYdQ",
  "key40": "3J5tu5v3a5WbCcdhg7XGkg64g1rSVBncvggXNubSyPcx2nZhL1wMhhrShh8nd2uMAsfTeHjdppCQsyy2CgBCKCTY",
  "key41": "63tJqZGPXsoyYDSCfSwNcA8PKFyBtvVNLX6UyW7AvTaLD5xNQCbXsxstvYdwZNQr19u8HA9ua2AzBYmkK5wYidJ",
  "key42": "5yNgXE5P75y4Pf3TBie1rGverokG3GkF4EherXxVYsUfwBFUYATQHLV8zcxaa7AjWM2VdnrzaYKooMzpt3MznPsB",
  "key43": "21XCz1BTtqhqNmmJdHv9B9zdM4uT4ULa7MbRZTYDmFHjZKotfVqZbrM44EU9db8tdzy2Vtgk83jfkyN96jqUSfj9",
  "key44": "2hYpUi4q8JRtERPZgwk9MdFUoDfM6fBrNC2y4WZ1vPyeCfZGZtNQ38rCsLSCwT6YKNnbKT5d9BuxnZeoCsJDfMev"
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
