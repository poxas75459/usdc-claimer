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
    "319kqnoMGofhgXRbfF93HyokmhjsfYimvY3vZZXexL8JNu3CWS4xxx6BcgP67ja9H1LPinf2aM8cHpMt7fbg1Rp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61h8R7wZsyePv732XADEkw7RrjUP8geiD5RmujhLmwhjWUgvw9sXPyfaP5M7GnV329ATX81qcS1wcWWerpzmjbm2",
  "key1": "23poNJR6pJef5JE2jqHA5xq7uUw6H78KToRsR1yaQXYi91Ss8nTJ2cLkgSoXE7aRNRAzjq1FsLMJjE5KbRnZBkhS",
  "key2": "2NmyNdYwWGyvJoyUp7jqvb67CoWr9Rs9CBKMZ8MN7412uk1BpB7e2tTzuDnmXBN2h9hsKrWxNtfQiHvRuL3VN2FX",
  "key3": "QgGMSYmb1d6wdfQZWHHAboexg3pPeCNxy4PYQDQsJMXxCLWpMBviyw12cgPcUTbLcDpxnim8j9GLunMa7Gk4iwn",
  "key4": "35MCtm7BzytgYZqqgEJ6VYJQPNCZjNAmsDLwQtUrPmy94YhR5easjMqvNNTACzWyjRFg2k8Gk3UmL1YWs3uLvyPh",
  "key5": "39bemv2rqU4FoF9cKihbNzuQjmKWE82JJn3xgPTPbgEdsotcMPG3z6FM9x6LFr1kRq3chtP7fajvPTjFQ5h84Xc9",
  "key6": "3Y5FPvwpjw2KVoEj5wVYWuwZC3nuCTo76rV82QbDq2kMMGnz9D8i5qPD1gKidww9viBkYPzNioqRJaKAtZ4bNzSv",
  "key7": "2iPVFDnTJGqT99aGFv3TnWYM7Q25q21FdH5FQFg3fFX8B2NHL8bKQMuexKGEPW1TJ7ZhoKiNwV3XnrBLm13LKb1X",
  "key8": "26WhtQTbmKjNQjHzFLhsLu3JQhAYkqRqkCugWxciewnXV4w5gvoujrLAhCRwfvHTvVCrsTKFMrS8g7YVQzzFaFJk",
  "key9": "8ohFXUBwPQs3HSmznL2bSy6hxcDqpCUqguAWAEaGhUoH5M4kmSuSfj75w9D6gGTr8MBvEqoddof5E1ENngEb2fQ",
  "key10": "4nUUd37GEBrDENFjeLcZLKj7rM6yNrk3R1NE7QnySxpp86R3sGtBtzrN1KdZECJmrZdR45dADVEPn8GBv15S6Qwp",
  "key11": "5viaQcTgQr64iK1ybqQYsmmomnsXPf5dhALvZQm9WKbwiLf1ahh9kbzskPFokFEWvgRQfK4Lav8XMdSdZkRHCN1V",
  "key12": "SxqbDhhL59VQVCs5FC9VxRidYkrXhAuDGQDRbk9vUps5oaQwbJzjXKK31iDHxEjFDdoE9qHJwxVjV2UMKGc7Fzi",
  "key13": "4ZC33vSVSHdeo8U6pBL611mMGHwATiNtSoUY1RukKMFcjojD9sDHMBktaogmzLhaveo33iFgzxCr9j8zoKqvbWp9",
  "key14": "4268iJTLGPBvogZYMu8i3tHRJwLhWiggcbQbrDh9EudykT5tBJnMze3URccDfkvuFZaxLjMTe4KHKWmsttKCTwtC",
  "key15": "2iT8GAqaBreJoia83NJUKWDfsh5Y28V3ZNSjtkrXPkhFb3zEiJnm89GweYRqEDX55p4RXCYE9GgJJTmp9hoY3R7",
  "key16": "3si1H2qfAUgUxXFuVNYvgZzvWXqpx3ZWyHV7ofP4M1uygeHsnjXmnVnZtPgxSgjFsymNQKVKBJvCWyqWfU8T7uXj",
  "key17": "Ch5Hr9xwAec2BAt5kjB4XjAdRx5q2521BADXa2SV4phGyJ7QwJL8cCnDTcDJc4fw2JmizS1yVHZKJfgbXWMAumC",
  "key18": "4shotKvfqstNZtfEwaXzpPFMUgeCSE9nDkmEpRPFPG24QfrZqYNEWmPrnT6deEt8ytmPH7YGtvxoBPUXZyJXSzuG",
  "key19": "mUBwvPKJXyQ4T1U69HsRrcj4foXwctSMoDJmRdiwa6aR1wy4vWYvMkQGutJzE4PvDdFtphr2ynMhiri3mkiFMuk",
  "key20": "jv7fgHn6rGqJFpghAKXb9wBgERoDjK2PFrKYNU9cHpXs2R2fHxXt5uN6anAeLxTJrzmaTLWfF4ACEk9kDzbMuEJ",
  "key21": "2sR5SYaKP8bieaVJFPQg64GR1u7jmXBoF5aqab2MeFQLNUenB9Zy1ZPFcsnwyVWGLZsUgHn29PUnGukvd8ic6ysx",
  "key22": "2nSSZfCQGxBw7DoDfhv4F3u6brVX8d7orYgDXFZgviBhcJRsSUsG3gJjvChxixtNsgLU7NqZdJ7pPiYVnm2pAFxe",
  "key23": "5UFtiWNtbDNhY2QRZ7qARJ9wS7vZB6tc5TQHZ8RecVEkFUZ5ztxt8JfMjaa1LparYyXKmg4F8Y7MjAvDkzei6RpK",
  "key24": "2nDvt6hBmvvReFEnArPcM3JiTjGWwHJBP3gbX9cam1VeCxw19C8zt2nxSpsXgx9hGQghjWPYNAxm6WuRo85ivk4i",
  "key25": "64hUouNomZfK77e5aUijNaSszjJ9ZEoAKzcyqFdTAtZW23JKxcWnQvp58n6zEo4aXuRGvp2vwu58Qvfxqo84oXmp",
  "key26": "4wW3ZzsUxmR4Aj5SgbotUg9hCy4gy3vatr2NAy1xsjjqs8zVDs6PbhuLCXJqJwncmnMzYmzhFkSWwVqqi5N55fcw",
  "key27": "2K1HKQdFcogTYd3WbmtRFhzZRzQbQ1DTkfxJ4BfCZV6xPXC1v2jzizizzFK9U3TjX5peTtCKr7SD2GNqubd76B2R",
  "key28": "2YqtTEgQ3uQYRNx8efiMZJLMfUS9gcBAoLCQGhbSXfvjFYnkk3htw3EJVsAP7HMBTxnEL8tHJsEsvFF21GY8Cywc",
  "key29": "4PfkMMfCjzeg1F2VQEVVYiQrKtzVvST92JJhkqCWXP9pcVdEPsQXD4qi4BVnRHFbxxnRKzmBJTBCLrBrMSFcYmXa",
  "key30": "3taeyvDNTUeGsZMsvVKuoCrC9c54vkSTCDwE1NSfkeaqdGnA4pzxsWAc67TM9KC6gu3EbDcME1yvXYFCYtsgWSsq",
  "key31": "53JM2AcYUborbftnEXXTRvBcr5AA7rF43Jp55rW1cmf1fG5GyEGgDBj2WQEMdYCLWPmXF6emNB6PEaNmKxKgf9wu",
  "key32": "4FSQz3pq32YnwvouUK9hbqvCDARfaZgHMxPkGJrxHZqUuptSBNSjz8CywixLoJVgBUXbZHBcZNyZhGgsBM9iJc6W",
  "key33": "4FG1U6vrDbjshUDyjVpMPdRiiz11JRn4fh1TV8ENP1zKFYYDnX2wB72coFU5PqCr7itknCcBkS18FdAcQUDdHi3D",
  "key34": "47cAiAnqkD5xid4EhEZanEfJjpLYbkPi9yzLy4hXvSDuWakH5vita7BjjUaRxmz9Hb8tRruZLSnU7p4byza6U89A"
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
