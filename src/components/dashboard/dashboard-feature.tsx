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
    "2HnWmDH1T4Uxpn6pAVKc1V6f3haqkYVfWwY6yE3jEBsfbFEqAnh8ehezzk7bm2m9fRt5X59TPkjyj33q3fMLFGyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CH5tJkc1prAziDzUGU2m1ugTysniZZMb8UTr7XQjwLknJxoo93AXLTr1vv2x74Nzu1voKi93Wr1u5toqjNdYEeT",
  "key1": "3cf33Hrcywh2mLLZH9yU3UWirXaF6BKEQknniYSLy5FjyygU52Ah4jBKqytpUiUpAbHp6EuaMosUJ5dfohRUvRF5",
  "key2": "3CRYto4eorsXMxmf5AfTj7SdxNcoYst8QSrgqpM8hhChWfcyzdz6mFKETU3YAddXv5N14y3qVRjWEzjXZxDQ38wK",
  "key3": "3aH9Xo2CqeLnsoJqEkbJ8wabxDts6DHoEFWgYc6qHTh8t5BdoAtpZuS8aqvc3DFG3nLbRMP1jW2pm8PEiG5oENPz",
  "key4": "4qxhBGZy7e7bijQZGcD6BGB59sGLMmZqV19Km4Lmowoqx9AsSL8vVJGMAGdbfBGVEXZtF4KLLLF6ryRgigrnGrkw",
  "key5": "6m2CGT4zhMr5wvYLZ6LRLJ98fpspGkmAr2KAEkydTqWDDLazzFuE4KX2CK1Y1rLR5dCg2QrAXyk8eR3sDGMagfT",
  "key6": "3FRxszDGgk6dMpcG9tb6dhaYx5ZzHNx9Zv7yzKQVxgc3emwdFznCRGg23PdXTmkC8yENExcifXdRPNcN88JXuM4B",
  "key7": "4wLXWqCYftU7jhutivdkPhjijoaP52q5wjgPzXFY85cftoWLp3dUyJMtFQuE5nAzS4q1R8bFbUCZmHqddMTDNYH8",
  "key8": "hYGvJFdadaXN5tihTYQqTcMGXzSAnyKxPdUGFuUmrH8tzHYNNxZDPgnbh4LMf5cYSu5rBZFjXpm6orURVSEPidg",
  "key9": "331yKq3gGNGPg3qMGv1JEruM2KyrsKoKu4ByaLCSvrrD1WV4cetxWuPcGCutY6D8kYm7ZmaKWHZRP22zevYWEfoq",
  "key10": "2wUceuaSQJsqwadWPvqeVRntoNhGwcVg9V9CUsCLissHinonSEnFZEbe3smb1F7u993axPT6i655wemeDdKo1H1T",
  "key11": "4N3rHEw4mpwFV9bPjhgC5hoMGbvNdBUCdoymrocXrkqrZFM3gHj2DxHthFourv2rMT1W35XaiVuSYiddiMBVBJBW",
  "key12": "3QNyKdW9cSZstE36gGp95dAQkmvKqf991ekBTfW4UfFq1takVm7F5GomUKvv48ZoKWri1LVJAfkixiPynxhuU4bY",
  "key13": "3WozAMeUdZQwfxy7vwv9JAiizFHh89TE5j55gQS8wW9Lu4eYqWmWRTQa2GicsRQKix7FrM8yBxM9tz6wsuUgWg7h",
  "key14": "3GKKXgZpr4WM7UzyW5Y7ABUvuxuDJXXZriqWVNozmYdNRPzQRJ2kNH31aQiE9T5Lczgwi9UDMPFGj2f5xz73ADDT",
  "key15": "4YLni8hBUNF7UfhRmHjrssmq2KUbL356v6NHLio19Y6dcAbt61YHvsNgNXJ7WFufrAFPbxMXiyikKrygq4mcaTNN",
  "key16": "Z2W7JDDGfGjiafBuAGDaYow8pnC7zN3BDd32yT86F7h7teDxcmtsvbYmTShGd7S4N88fn6eB9MVnfQiKfQjRkrt",
  "key17": "2pFi8U8NZ83gBU5e7Wx3svGGkmHXUXPYbqxkrfRLiTrHynginY6kfwBpCphsJLvendac8aNu5rGJxTgTFGSZvVNW",
  "key18": "5hvvJi3t5KUyPdb4voZDrUgE8JMKrcyYe4NuERbUAZ34dCaZvkCYhNV6QWBeeZaV57heQhUxUcCnRAtTfXfrB13w",
  "key19": "z6Ucv3T3hNqZaRPy8RA7UwN4WKzWA6bav2qbHuL67yizakM4L1TuPmh5XFUzWYezgVZ4zCV59vdkqtgcetC1Uqk",
  "key20": "URC3RPYJbmeTq5QaPo56tNU5CYJttMyKU3BEF5xF26DyLKcdXESZ62upABXDNbxoCYgPjWpQWvSCB15jKL65dSG",
  "key21": "3DdfG4Xm1Eb9fggzdb4VYwjndQE3VmTg1A3dty4V24nyNu9eijY7FLuZGcConjseGRyMmNsiJnngpCmxqtE1Q3kC",
  "key22": "4joTzpCkUhtLbwUkkiivtabMwdDMsa72f59jZMj3GtuqFFqVzEQnY1uhkPYTi31qbCgzxRR1EGULrNyqrZdkNgn9",
  "key23": "39Jmt662V3SrzQJMgmsNqvPfP4X9Bt3j8JJ4WB67ePgydMTt1ahmaeh5DMYtGyUvBqEz2aDVwkHv5CmPjiUR8nwB",
  "key24": "NYjV5DjF4E6VBMaPWqB1Xm2jEKmujgo2CToum8doGamKL5UYdLXWHAwcDcHMUrqUdqNLhdvM4c24Fu7rrMs6ewT"
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
