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
    "3NzYvRLea1y4h1axYvEg5hqcmEimWtrcZrhAP6JPEd8HHkWLpK6qBrv53J7WZQWEhH5o3Y3YTo6yzw2ZQpJGRn3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nB2dbEXi6cFjvDYLUJKtpQKTPrrgDdF7AyfpT42g4K884r5uQgqHehoJCBTpUuTrnn4stQRwEVF3pteCeysgyQZ",
  "key1": "Xjm9Wj91dKby4Fr1KHkvHgxezLLyGrsaF1vQUeUzyEiBeXsk6phDirer6DDbQeaaofRErQsznMMNY1iTfj2NLSB",
  "key2": "3Gch3xNJ6wSrqFEN5QcenR5XChmEMcJWVu9JEn82Lq6fhjuUvPKuWGy53ocoA4nhHCefnZ7DCPhvuALrAnsf2g7V",
  "key3": "3gFGQix83j7xGVEFjSnKL8iBow1pLog4R7asiUrWwackssNmmrZjewcNA1FdpAEsY3eA3uQKvhkxHkGYT1BTMgob",
  "key4": "4VXYkhJbHk5bpcwJMPCgZPmGETdRAoMCzN6FMpLPmTM9XHYanLe96XQb9YS2Ew2F6XiyRXfB1WQDzKXmjiDisKkX",
  "key5": "4yP4LqUK4C55e2ND2apQxwkof8PxopCkU53UeMawZ4SjBjgg9UKALHof6abrTFdgGHMB6uCXVPpqGdfReFUVTH2n",
  "key6": "4hxHctcBm6cTxCEFucp1CcVcCaW8312dzCtM5jk4dUF4rGeg4d5wqPPL2iyj8cb5zQDxgNoprEYCuzR3PNvmfR9R",
  "key7": "4ryGcpn2mwmVTTsR9MEqKE2S2xRy96S8cb58EGuhznZg1oAfKvQw7pNpgxy14f9sUsU3tzdKwVQL4w7ok66k2bt6",
  "key8": "2WoHKYsgafueGaRbxSXkpvHxSJr1bMrBBGb3Ld1wJXQf8ECDvx7C5acYEhhTADojEveWV4DdYizjt3J2tVpdPhLe",
  "key9": "t5J3kEL5zZXWj5714jg2LT7pGcFmz5HHQ1rvSrNh7cKa95VDNENEQJi4jU7WuKujWM15EXDBYexpPdApbXcRT1d",
  "key10": "4gQcy2rDroRyQB1UjPsPeJXxEpo8JSZ1Q8gAiikDGWNq1wRjqWFHxhbre99wDxNgXHgJRqTdKnKPiU6Atk2XUTDW",
  "key11": "2gYE8Q3JQDqpBLrmp539XhuvMLGuWkn5b6CvJJNWT5beQkB7jBwkyNckJDZbxjwTyd4sVs14e5oLowUAuZ9YfhPE",
  "key12": "5Txuvv2eazLun2WsaQJPzQUPntsXYET4U3c4UDYh38Uuzqi36kgS3k1cFgH22DhF2V86tipwBENhFmsLSqesJqcf",
  "key13": "4pWUigDMX8uRCqo6yHzFv77dsuksTA6BvrRVXtqvYkKvGvswPbjbZcPHpFHFQH6AFz9SL3f2LDHLY9stYcByfVLi",
  "key14": "3hiRqbm5BdAnbLZK4FrBnVeo59MDcNws9E7MVLLyWjxZ1ySR22XA7n3TPeMDLXT4DXnNbpUGCWRw7fg8MuP8fuSZ",
  "key15": "4ckaG7nqrSsSRVhYKfWtf7AF4jioVYB1TqDZ4yGxnxeLZP6GcE8NxQ6QyWQu5N1Saue42TorRkmZEPnAs9y26dLU",
  "key16": "3t6fe54xGj8ad219M2uFdjMFesboQASa91cx8v3RxuyhKpuhRDw3sunMcdbqt3rKcEkCx3TuKy1v8ALczS4zt1Rs",
  "key17": "263Zgg5PjEwPKhrdRfegUdAdygpJRw6YNe12g8bgVK5iAVtUN2ajLzgK7qaSem8cQTi8kFxiL7oBiNGxGB7XxX6E",
  "key18": "8MSepA93vrzpmxpADHhq5e9h2SpFarmp5AdvFtqqMUjWZ7w1rGPikMMNum1j5NX9oytUM6KqmDny5cSoPdLAw89",
  "key19": "4cXJj5SRgvCeazE5QtzzwTaNBhqwC29KNXF7iuXu8UdkciyUBZmNZGgd68ybJEsbrxC4i2J4yDJBwEkn1Nsza6f2",
  "key20": "3DY8ejxEQc25njXpPmShTXuPNLfihQY9amTDJy5afoE9Rxmh35XiubzSANqSzsSgh3qxiGZ9fvtnjBkiY7jjGznR",
  "key21": "26k1KgovATDxxPep2QtUFcKs1xAoDQdkaYnE37BmpA8y9tiUzqyBx4h1vza8N5DbWBWZrG6kMjHLisBonrgGrfXd",
  "key22": "4QqeFwcohTtnaw11jVWZ1rTg3ModtnZfU9ercY54epHsbBL1cAqVS6pxLBQ5mNCtF76NwRYNDgzxpMJ4e6mo2Kwc",
  "key23": "3AgnC8yzXEvvPGb3PgQ9W1jyNWBZKcPcqyTfTsgtPfBNHeDfJMi5zoJpT3kiUHSPXQgpExtmW2J6Z5ajQgrEwhu1",
  "key24": "2WTErmBcfvqUCWMjjTuYJTKJPi2QTWkxPpE6srrk3GCqTgALDsf4Z2t5sC6cGFYPMZfyj8LWRKFqdwXMZ5HTopSB"
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
