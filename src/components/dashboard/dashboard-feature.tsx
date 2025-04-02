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
    "5rZX2bsJB8vqsxeYq57HSCFgSpabd2KnmtLdDZKjXy1hTVzxCQBm7A7yuFUSjoyWrE5qHg1g74YpxNd8qfLMRc9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uNfwCdrVvfbj8DciYzz2Jsb9bW9RHF7im7Cd1bz6WwjgRNcHvoucJX1H7yi71TuWWHVJir1p9BU8DJYC6Zigcum",
  "key1": "5fmjYDLrxp7Bk4VxLwWh3rdX3jcmNhCtQaREDdoA5NeDAy4Uysg3dng47eVQekyuuzTtkAqB56m2VGbvduzxPn53",
  "key2": "3z9JzU2dzNdbjR3vdvCd9jk5yEHfyrWixdqrwpb6tB8KaBu9nwxB8EisMAU4rdhsRXYc12NnqiJWzLEuHjwM1XSh",
  "key3": "4NfBVUxk3VUagkSnutEo7YSFfd2VE2Z7f8UNk2cqQefVsV27SzkHa6H5dBy1e22XvQN19bhXaBA1hQ3v6tFYYo1S",
  "key4": "5SzEZjPKXUXDDexpJgqvmPT5RHFntHFwZJkuBHYRDBut924jANS2GbEB5pVWX3FnaX1WrxGd54SDrz5tSCaLtpLJ",
  "key5": "3wM51CeASkMF5ekScwA8c38Thn6o1ZXMXQ63WtpKhMJuGxgE97KVih3QnzrSeWjJRH8LUs7Qy1ngWLStP1npFjeq",
  "key6": "5ff6D9A2Se6iJfkBKL1iZYGkmvH7mwd1bGhk1PwvEQa15D1oNmcaURs6jBknqDHbw6KzpFk1nLtArRjLLchrbEFm",
  "key7": "5tLo62X7dyj7cS984f81DN8UefPZEpbtTm7Ppde43eaLh5qGaLxnhz9QjSFgEQ8YEeS6g494PSJCtWsYAZhG8PtY",
  "key8": "5hygKbFawrTNaBZjm7spgPtNezcLuxrBdPZPdxLetpZkRkhuhHXJqrroTNdpSUe4TXSxWNMSXZczpssGVGUREzj8",
  "key9": "5TxGaNjzNWyULgPjJpo96YzTW7zfcwSYr8TeSaWy2DouzZY16zrn78royXkBYoZZbDxSGw5nhanrDALb2pjzdR7o",
  "key10": "4jmKjqZw7dLKUcxsMK5ZQj4J6wEp6W8F88VodqJhQVDWfKjb41imKmR9gsUeH6Ct2BweJqLuB2RaFMrnSaDCTMrx",
  "key11": "gKzk72QNfKYMYY29kiTZqoBNHXL9XxXe2sATcQETfXeUGW5Az3i3mAbe9baFEnRcAaHkdh62ChS9V3kRY8pPXqD",
  "key12": "3CjFib8wxb3WGcrdeWY4vuM5GqJDBFWY1LrsZ5i9UHCxenxBvauSzDzxSm6XpuKtVdJ3j8UAwodjV46KDtwR6RSS",
  "key13": "fXSDDpeFLeyRiS9KsSSifee72CMVAKmtsftoPXfnscugNnjbrHik61gP2y1DwzvHT25iPFeCt2baBEFk7gVfzBK",
  "key14": "3xBbhPDqLmabxiVChLfZCpAtL6FnMRhgGck4zAwpxU2uG9NY1JfFQ25W8Cq9rtPXBhWvs27C3jLPP3nG4fB78Lkf",
  "key15": "2e9ZAMVVt13KABkyv4Ye3sroiqxPsxW9sZU6CSJszZc8GNHFvdiAPm6SJzTbxmRmKqzKt15WCPWTiDirUiinqVZn",
  "key16": "5hJQVQ1shbmpoJ9UteLfTEsAEtHAUw3kvYLDc4QFL9xCe7FNLgdhe6FqxKYtpK3xJNfJqBwzHUDEfiWigcJytaLL",
  "key17": "GY6JzV9Ld3kg3LAYL9Q4j1E9J42TjvuSS589PswHhSnnicAZWb4HD3uNUfTyTRyXLusApQrKymyjXPkp39dkGZ7",
  "key18": "2iee39cfT3w4ACpWpBXbLtv7RSvG8LWW8uvhoFN1Dkiw75HMFX9QNdsgDJD1r3W6qt9Zv8rAtbA9XKW6sAXzUfQY",
  "key19": "ryExz2VaU9r35aecG658MaCYS3jpQoh6psT8H9zy4f8ACK1JTbCNaVxxHzWKsSnZuv4Q1MVcJjChkiToAen5VgV",
  "key20": "3wVDqswGLTj87tHBeZpYQaP7R4ativrff6Y6z5KZTcQj5exzyzRebVgZwVtc8SFjEbT9BzZLjZqZtpUFCUXb7LpR",
  "key21": "2pg2dLkVAFVom27dmQM9jnmpL2j6xyqCSbUN2YmgeW4F5evB2oTjsWW1zzkph7LXJaDZGjM3eQFud9qGMV4cidKb",
  "key22": "28MxQMyd23eZpwTXYN1EXwEN4LtfGkSyZuMabhvGJxuZt1DTFCAARm8B42GXo6RFW2Ak9vchZcZCSSxAJ8wEYq3t",
  "key23": "52cnMkdY34dSyU6pKoovjsxdJDnSXPEBmaLpUMy4eccg24dtZQiRSrNCfSXYibdRSGLioBhV9zxsi2mbMmZAf7Z1",
  "key24": "3VJ3zkVYAxKXvWPfy9k59sF1FmWdqkdTgHmVeb4GH2tN65mCwiwRBf3tYTXEnAN81No8rn5Z3VkKaRGudCeAhbXn",
  "key25": "5FQ3P2KFYbKmpR2eRMQoLK78Yc3bEtDQfMsXZEEvP36ieueByehcttjhD5YvPXYSbhQA4LvKVwCZVWVJqHD9v8C1",
  "key26": "XkY98w2NdZ5jpV7wmX36Tic7knwFw4JQXdvzeo73Lq11UejhMwdFbq1fMBLRJ9LYG6TunatLD9ktobHNqgEZPij",
  "key27": "5TBo1CuZQUEahCL2KaJ8nF9bFb8yZGEDgVFM8PQ5wyf9Joom7McCFKjj4zRgWpidaRepgsRu8DK3wnYAfHVByAUx",
  "key28": "4HY8YUyuJ8L8QTbyQeEbNfeppGSzGxDkuC335G7hz1hybYS2Zpk1wz3J195bYRePXATJdS5Zb6a8SafVTyn3DJNi",
  "key29": "3Q7PrC7Gko7Fj2qSSf5xHPYWyQdLmDRMFP7VGWdajiQ4LmuqP3Swb1YQed3qzMHdJaQ2XQJa6zrHbTU3ABx2KmUt",
  "key30": "26TvrXMoTveWirFfkNSUe1sdnLEKctdswQzm1twk5bLxJECiR41ewi5uBBGGnYoUEe1jR1Ed9V59ypSHqwzdwmtW",
  "key31": "5dxExK6N8uFeLWfgnGXJgNmRp9dmyVXm3Tg5KYeBh1GxQdSKbpfzCkS42515ajpmebKvT6xdxWwZyz84Mcw69KHu",
  "key32": "4WP9N72kTRGHhs71gMnpcpttKXkRPddr4peeGdmC6vJi4yDRGgHGaR3XJWscEE3ha1Zb9H4EhfpJxwKnVoGF6vqt",
  "key33": "d7Es3EYvrVxTVSyRx5Yfc4B2MPyyKaxXpXWTfPEYMrfTcXQxaR2rxM9ecsXfJjEnTbNMiCwPea8A4GA2C1UNxyg",
  "key34": "2Nod275Ez9cTUbX4inPXAvE9ERZL4FQRHtcgkMagpJrB92mQtFrB48Aged7S7mBL6kESixPFBjCJgWTNv4C2k6jt"
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
