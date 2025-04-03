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
    "5QNv8iu9SaK4A23CQWrQfUbutn54ExGciMzAZrT1szrXDiqtxfoTiUdkQzo5zLSyDwAHTmWMHCnhs3egGxXvKMZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38QXM88XMw4tafeRF1PHcoai1wx5mdbgYAEw8bx79yZ83yqC1LLqyH1hsdDSYxgwNxvxQTBPf2NyUptz7RHhBypX",
  "key1": "4rPDACA2M1xqx6CeN5ckM4wznfNCvNyJD9xSDLDv5HTMx9ZRaiiYU6etvxuKfqtnubW2fUJGTuxAFuTX5xbVp8Fz",
  "key2": "8PAGjoLndnTBfRj2s42Ez4k2mX7D5XMq4GVmFpvpVR7KUqnt3dy3S7XNjb6bCzUpTJhTTz4pcsXSqFc1VE2u9La",
  "key3": "Y29eAXJQoB1mRjSR7DBra7XEmf1cDhwdHrsBLzWmWycrdYs9GpE3vJe8iVJxRiuh2Qw52w5yH2tuNeMnf95Q16M",
  "key4": "3tvcue3ZYQWmxWKQBCFJWNKbjzwTHJtATRAK4G8CLZoMWjmJoJqcLbgLFKacUVUsbf7Zaw7co92xF3zH8B9ft3U2",
  "key5": "5nW4mdgk37b1rJcxrwqM2szdKrkVvNVaiGf3bJL3xkCwYdHvYPKzpcSdRY3DGZz5XrJ5WA1fUZMik3uL9G1P1gbq",
  "key6": "3azw7SJqK3tWc8FZZs6BMis3aonUCwBb6MHXtYrgLVSYwHiJ5EtsQqkd3jRQP2Psfi82Edgr3x7b15tXumCx7ykG",
  "key7": "4nrYXGmtNwrn9vwvAirQiLyESBenuVJkikXsMcMkmZ48FXXYSKrwMbukpqwLPuz8yqkYr6bprLJebM5SvrDNBAGC",
  "key8": "MrsJv6JTDDjYaDrGS2GNFDNHdD8Y5GTR3BVKZ7iazjoznqQ1YRygor18P4mYhuZxRWb4LBs3rkuXN5pqy6feXhB",
  "key9": "5YvBP3r6qmMuTNgDeHGx3j6KPRf73z4EMdEmSt9CEnpDKq4d5GX13oaHaPgLopQKjjzPqqkbLgutJsoukE8UatV4",
  "key10": "2KJAEHu8HixRSepnpfGrjesWM3D9fkN9QUabvExLq1kdUoRpyXidLNBB9X3QVuLfFXCS7zRVreBD6DB7u6Kqo4ah",
  "key11": "5mJZ3shXUG5eockrM9SZcPDKfy3QpWpocmtPLw3TovhN6ZAV9nALqdHSjr58SCsbdf5ifrKgQeLC5nt3LMiiiE1e",
  "key12": "563C5nHnqZ8ydfJSDJvkfZBmLgL2nCWnqTWgu59dadBieV3WsFdPzqNtJuPGkagr1GxUC2gtKdFVJXogugeRvPVP",
  "key13": "WSPahCoGyNMhQV7jFjUN74QtuuMwNZQMSDFBDgfYNGPgLR89Ab32zU5bMhgpqhucicFNDnPXCV1dfKWKmEDNuCg",
  "key14": "3M2An9t1w2zmaXXoAZmA94fb3pjaGn1MHFpaFtvDFPcPSpNjwfLEUQs8z2tFht6q7EcWCdgXj77pkowmXJTzB6Xq",
  "key15": "3AdvZ9wi8ctLGNVJbSrQGsVycgnCtFvrcfJ3PZDr95xAT3hCM5ZXnFKwkyRjKu16dSovjfR6afv5uRJaZZs2VHkF",
  "key16": "43c2ewvSn3TjzVedHosQvMRUbwsRyTprS44PGnXSmZEZPmLEn3ZLVr8p5bdTHNnewkfUqrSQEhiXdWHv4djff62o",
  "key17": "3gdtsBA1d5P68gHsYwrMWhQ2C4pRf1vfUqp8nVYrGM1b13Pj1qvqpQsixnKeVfwytfUh55sUQgQtXi44adpyBxtC",
  "key18": "3QiGG4rkdeaP3MabJU4Bqc9K1h86CSyGbuLGkZkkuM89wwviyVYVyLWMhgdWEZdQrUc3JMiaU9n2taCPJvzZGAZk",
  "key19": "o71pVQC8kPGdjDae4qcT7k6AmoKtKLW2oNvPmQDj6mUey3opobyX61AU13qXJK6dULcoqfewce9u7jaLJTaPd5e",
  "key20": "46WC5A3KHYjZgEGgzqJXEyv6r5UrKqPii8LgTsAbRB6rpvKWDAeVJ1nUPcZbwdnFgspcQnG755MdVcKhbqgTtRY4",
  "key21": "67aqNqbLMVyZ3gqc6EJKk1A2iwyBgh6f6DDB1CnxX8YU1HQC5J4VQ5tLkJM7xMVt1mmbZ8A85t3TvgBm1bREdii8",
  "key22": "Y1Php4ReH8B81gVDd6SRcdKqzB1QQ9UB2F64hgQyKCifWdcHiETYuLos8iVSbxfEBdWSeZpYRgnrJfdmcJV5vMg",
  "key23": "PQDRooK8Qn9kQr5ZLJsC89fKK214JHju21Foifw25cjgL1XpSjD12LMqHh2YHpevjC87rYPqpG4V2LSDJZ13jJg",
  "key24": "ZpnaCZa7P5zBM2zRPLPvMNRWzgpmCt5uFNT9BzfLy8qeSWpAD1adXzbKTrY95TZFWoKZeLG9EjQqyZDAM7mNhro",
  "key25": "668LoZ3Fw4APR4yjSEwW6qWUD38eFe5VVh29e72yzzcgeRfCGS2GYLwMBLhmH7Hogu7gnthBceTyevqLX4pTAQ8m",
  "key26": "5gsrnd73oHTQQuUWTNP38wJPKJAUV4VZ8zwvvCGEYD9bxCknHHxh78Aj2qS9oENS1a84z5iZjvuhy1PfJGmYKDSz",
  "key27": "4qc2bv57KCbcer2z5re5oYn3oCzSfuDHkxvDdL1VdYcHpZYgPJbPvvd9adZwj7SEQXwAj2cpowWhZKdeEgXUHa74",
  "key28": "3NArpW7zSPCHdGkDee5pY1dR5eiYJbyg4zevqEaVYmM38kBC5VwwLkeZG4QETXWtNEJpPZVZUDtMRPfBhAgAgB2a",
  "key29": "3caqc7Kbp7nf8DLeqJZb19jQFwiBAt7bE35F25hZ9wPUgbFV7Zj55L3zkaHurKAhKNqmMZc31SMdh8WRxZQTLPS8",
  "key30": "2HksnnjUQDZUTCFZfjRYrA6sZSnSBSNnigAmPR1SfuY9TRjbiq5b984VWBKz19rVPqVYrrPNGc8m1fJMEcfmED9q",
  "key31": "3Did5qfipsvnYMHnVyyL8RP5e4Vs7gehshAiSsyt1LUxGKASHfSLFzFsE6meDhKnd8hQmrdwV4RmR5J1m5wKy48A"
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
