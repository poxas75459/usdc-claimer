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
    "3K4mSHD7mHjZ7Kx8WKvV46N9s19923jWbXDmL3aZQ7mZwXJNEFYu13TWiCKZW4DMazXureTQ7egYpdQSNorJ41wP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "chrSiRQbFMzdCjfsTB5cHthCbY2QdLaSuFuQzpiBEWHe9qku9i5Kghcn7Yj8qM5BdMEKkzWeg6b7Su4B3shTRZa",
  "key1": "4emN8AGpfzPEwy4TqctCebAN1GdXyb4deiPQac9THNxbpY1AQBwehukKLD328AZX7KtFg5KeAWA7cbXTnNXf5HWB",
  "key2": "3E2CdkMLLuEDvCFtBoUkqqHtNy1a1ALthHzVqU9y3zECTXEKGMfZep1asXbu852VML8q91QEV6AWSLrJB3jm9fLW",
  "key3": "27TUXL1BgrzzHUTHoPpDNyNf12Xc8bWS6z4HoHRBsSxLTxoGSNxcKZCtcZUQtHBUo8FWYd2RTAYUZ18Wm5Rpxmva",
  "key4": "5amJ421gdJKQYkGm2aFXcXyYBChD7nKNfmtGGcwCq8uwnrT9uHgmysJBJE75a1RiutL8UbH7Ko81DKDSmrhpcwUq",
  "key5": "AK5ZCsWhegsCZbi9pfa1FZgnReFPf5JXTCAR2wgRoChshkACSNmE1R9gaEFygwSywU9FXqXrMixP4YFMWGVfX6G",
  "key6": "63KYvxpyTEupWoyfN31S4PwvmZCEpiee6d3KwWEH5LnnNE9qwoYAaChxZtfb41vfpFspjSKDbwUziuW7dGZ8Zsvq",
  "key7": "32BpFvRqBfp4CeiHbLZ3gAisXVeKNAdP2P4FmCUE1u5m5ZNDQowDuD8jonMjcWQLoDmU1TRCkqCKyX9CaLhjFMQU",
  "key8": "LtdKcD86wgL7cBKfbPT7rXFJAtL73cPLbFoxoswx1VNdHru7urxasPLPe6MnCmGbrqgpxQ9RwcndQnqGRcDXf7K",
  "key9": "64o2hRQw8iQsaodZ1mKGJM3u1RCod6Q99N3aonNSZXnV5KmT6ySaRB2FZ3bj6mTVspJKPNHYqe7SME6t5KqZu6VP",
  "key10": "2VtskbK5QayjpVKknfjr4GhEhRYG8bGv6dyz5itoposozbdS1HBuWiPMJcTCDJ16tRwE3QGGK2rv8R98aog8ZS5r",
  "key11": "3nWYRbLuRPNyT5K69fW4Cm7J3oqcGf3mRv5xVeZhHvBLqGtuoUAhD8STsEa2pZrPYKEUeoW8PydJ2sKf6BoAuyYW",
  "key12": "2bvjYn3o7A4yDpwc3X4crypQcamFjSredPxnMYSHBe1Jtw5V4THRsbYNpTCaMCRy5gM7SpENGU5qdAWepzvnUtZz",
  "key13": "24J8FfqYgxzUtV5kzWuqvrJn5EAgBkjn17ah8CKe9usC5vzL5bDCHdYJB8cgqd8orUgxxoQnNv9kPVAhtCr3bUxz",
  "key14": "2gVmtXdWQ3jDd8WWETbwzhMamy1DXSU9yR7RFhW4a6uEYJtv3dLfC3Y2QiADsNx7j4vWBxodsy88TxLzBcB4QwVE",
  "key15": "3SN11NmczBBReaygZ4B1mEoTLMpCkspcxDQAtYf5J5GyzeSTSQiUJYkJSGe4bJUgZxcT8PNahRXvmyTNo7GvJQd",
  "key16": "3p74xrBEm1dYZPjtpnAKHfM1aShAuTMVRpcKeuxEqYYXG2QxvvDU4fWuUAnSHPfVRyD4ZUjMwswgmJAwYZpza5iE",
  "key17": "3egoMpKA3tkLL8FQpqACR3Y5YxCSqocL8S3rsNZQc1tjzqAwCBki6W56qKuxu8QsEGCrZcifADFkjFKgdwmfLxyf",
  "key18": "5YMN4j1RgTHDz5S6SQNhcUBzomJZDJLa2q9kYXnt3RK91RZUEo8sdcBmTzb2m2Xxz5gjAaCkDDhNt3wUeN2Bx4D7",
  "key19": "3m77ZHTk5vEtfo64zjjxyMV1b3yw4e1TD7FfJEzbi6Zw2JWgmC4FJ5JyVdqCiAhnFA8hvSPzwhMZpUVEmD3o4XJP",
  "key20": "3KhqPgrXnZBGpYTYUeQqZtXaBytKuLkpuArdzB7bT1rS2LzGhMfL7kySBkEAjwqbzXStQFGWQEE3JHrUAwXqzwDs",
  "key21": "3VsQt8yNCuMtTzHdLZRZY4SAP25q3PgijQxqLyGzSyHVAZFJtduwg24PX33VoMMxxdNwigEAR71MQzAYCijUK6v3",
  "key22": "2o3mw47LbuTaL8nqdAUyuvDB8VjZEHabNwiUtoAJSs4idfLfM5voJv3J144BEt2c5oU88tquGaE3BKbR5zAtJSpW",
  "key23": "5oZDePxYVAk4Fgpqh7VFzR7R9wr5dTivNNtx5U1ZM7dFsvXyYdomTDXQHpmsN6qw8F1snZCedXk6z7etFViexHPV",
  "key24": "Q7fr2tQmb6rtSjkbrBLCP5vtsawN57dkJzonS16XhRQhccWUMxYrVvf6qHd7tCPZsvJsnwNQstsgrKbJxeDxtkR",
  "key25": "2cetTQDdbTqWREywuoBkiXU8idShoM2pPf7uyZDfozT15earyDTsFxT2hfV8cSrvKmuK8GVpUoUsGME8Uakj3aG1",
  "key26": "3BWcnLm5geaA7fWGjP6YwcijKxXDXcb5kssa6Z5ivapU6UhShHLisWQztaYUtQJRbVQd8Ur8AHjnQTQWh1mobVWE",
  "key27": "3PADf1GtTfC28dhGzvZKHcntRwZLFNcGQMpBMYGcss3XmXRqkrxqxbwzuXK81ZYFiQfCsGMNHdvTsV8QWZAdiGdX"
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
