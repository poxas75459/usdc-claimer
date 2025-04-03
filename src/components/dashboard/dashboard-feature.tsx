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
    "E4NCf7HKNDv9HgABCNKiewfb6JEKrYa1Ywp8ivev9gmSjDa3HoYoS2YBXdByq5Rpd4JaHA71EuaY4k52x4KJf5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dGH7sFSG1N8vomAXyU7fumWS4Rm7hsY3sFoJPrnbFsMzbownRWQrCMitZVfmaEFg3kxVrJ5he2C8YDffmk54bNw",
  "key1": "59BXiurTi6wJCEQ82RHDns2ZaRdxKW7SH5TVpqkN8GGBGDxbSQLjzv1EDMdKpr6c86FU6hYyxjbhKhEfJV5eNHmW",
  "key2": "4TNkuTqjRDccwRMGYzwuYhPo8z9S3h41QiwoBfnEtiDiyGckUCKvoi9kbcsZSLdmYHo8WpJVTCbnnAJTsjGCHJgz",
  "key3": "3R2Md7LfvxSB8PkbN7ba3y7B3xiWwzamgcYCnRYnhrXTU8GiPKL1QscE65stzQUsHMY3xLbFedN6pNAfifLeRDqC",
  "key4": "5FSf1EfPLz1kMubhGjK8oBpdmdY9v49T4oRhrt93oa3MvRvZCKuFPcx65LVsnJao1R7m9YLr6rHVsTyGXyNq3q34",
  "key5": "tMrtpRcLj8oUPwf1BGnvTqAevis6R2ZD3VZegBH8wpH2nWh4mSD1w5iSbgrVPxmG5wTAtMbauQKtrorxL2WpLgb",
  "key6": "67G4Fgi537g2STT5SLyWVmrkXvpbnBGwBCiH2dHxvtVdipJTkpGj4CmoWxd4Nj7gfekH1TCxqA1euBeDG1LFGqKi",
  "key7": "4Xmra9JJazUXRzQyhYGbojzZWgqgoM3v98tDJnGPWv5pe1p4a651jCJvxLdLDXNjgJUgLrjU7MtTeCcwpMpa7KK3",
  "key8": "3tg41BMBDHRsgvZ7tVbMs4iyx7S9iykp9nh4Mt24TrgzxdFTLiaQ9pr6RT3R1yDfRMcsB7BZHLK34tDGFdGRRDzR",
  "key9": "3nRHAxsVVkFks6Mjs2fvouiPrsaua7hafSnRcA4S5UKcLuzMxqPr5wVhuY4zTLmv7vL6UzyJXTP12L1mJevi99fy",
  "key10": "9fn5KdKyrat1FzhRiU3xFE8AWRFp9CMAyGnTiAfw88TN9Ej4rAmDn8kvieEb9urFdHj8V5aGogFqH9MYbrKtMLB",
  "key11": "4MJkciaM32BPnQEnuLcknNx5eebyHfXDU24sV6DDH5aSEieKoSF924ycy512jBbJGvCiTzYpnWJ7Wp53Li7YgMgT",
  "key12": "2rREtR4fBu1Ekcg8BW4LhUa3AiUrqVbHYgQawQuay2Ze2jWYf2H6JH8pqKLwxFMurCJzhEn7PhXbd522d3CRjGXa",
  "key13": "F9YWdREys1BnR4kokAYAkqBiD8L7iwaJTWqHBZoXUNkQMgS4v4f8KwTxMjEQHebgVaw1mmjQrfu55PxP8ozLapC",
  "key14": "5TxSbNSKGAZcQ6mEWtnPZ9YBZBzNbvQM4Hac1ouvSmQhoBVnbyrJzwgDBAYhBrneyz1ck9iBwZUJMbvTSXZnHK5y",
  "key15": "ZUsjh7WaEme7D8AmvGDtub89Lw3AqEvWLjnVkip2e5ZgDQfWqidcbP87UDEJ9pGcnJx4e4VanLiALptiFfNoUVB",
  "key16": "42rwc2wmHvTcehhwRSaaQUxte5Gp8kv1cvSZRPRySqWrKgVPGbCcwdEcWYZa1NhJvKD6TmvfxTHRf7YdSAyMzsnR",
  "key17": "rX32USLnw3jQDrdi8cMQufegPM5sVXJbi7Z3M4K53Rm1mzRodV6CvFfD4vJsSJeN7MiGXNzE5hvuL6A9iZFzvgk",
  "key18": "4AdvY3oDUkaTBqpuuwq183wuVo8mM4QgVn2yhhdoJC9kos32Hy6H5WH4aFk4KzqMHhEuwEoYqkdDhG5qFQHchX9n",
  "key19": "jbbkJVuB6tFyAj2kV1dHiYHAwGPP9C3UZK7aP9RGKZbEjz6Qk2QHTtfcymejpesCudodaXGEgDAymUM6jaPZNZU",
  "key20": "5UcvcTjd2afaorrEvdrP5Zt9m3zRxCpU7CWjJfbWvQ3VJDJdGLwDoWe4x75TzRBmbbqqnX7gv4Bp2umjXKgmf9pE",
  "key21": "3GwAuGv47hokSU8uFeA2aEwG1Zzb4XJCEoHrug19JtEAh1bpr4jMtxVtPVTjLqWix5whK1bxL4UEYUbhFP3sp3Ff",
  "key22": "4euq2ki6yHsJ62KpKBrhogaF6uLUiTEkkaSjip18B8pMgmcwzAAqx1F7AuQo7qDrkRUa9rJMqnp42UXcT4KGFmBJ",
  "key23": "3zs9v6MrwhwM4GbHh2sTPeKR6KNJa8QnJGFTPwNBQjxrkmmbGmRS7ZbLLj5USjzLZT6JBcrsPWz9v8iXSG2iJ44D",
  "key24": "5dBENLDUuPyikf6xGf6A9Zm6g22vzLSnBGapsUtSgtCGmxRTuYoMR2zzTppe74BVm2XEE2uGUi2aTAJMH9VwsMpr",
  "key25": "4khrqTtwGt8bXCr8UFGNGv5uyp39oPwzEMzndEDZKWn3v3u1u42xKPHtoLDeynNvBsuapiTg3CRFp5kLbkeYixjR",
  "key26": "64M5D5sUzB3epFUK5skQh6mB74iAT28N9LNrNq2CcozT71rJQorE4nXg4U5rgb3D8ygSgxKzHCD4ijRsbCERpJZb",
  "key27": "57cCSMWzGm2c1EeLQPFheA5LpL6BpMFyboZ2wBFnhwt421W6cGxyJ3Hg5pyk8yJ8eHGBuQg9NBsPzQYmomzRx8LF",
  "key28": "4BMF1BoEh58dVdc8Yaqze2X9GCf6cGHtsd9twMnr2nDKoiH9PdiT7q76Jv4D5aPqgg6hFx7PLqhsdYdhCSxDiC8q"
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
