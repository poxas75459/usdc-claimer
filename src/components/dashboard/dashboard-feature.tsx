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
    "399ptUxAZsHteSatFSvgmgDibmZH2eSnSYZGWbqhcLgfvwucNRA7m4SryNmAopNujj8NPWHkhvVVXBfcrVfvHMT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qYfQHMyF3UgTxspk5caupnT14NEcMxY2geGbMXvRYXu2rufu5KGPpQXhnWf9apEZZbWkWubCo29SabYuKdGVh7U",
  "key1": "WGGnvUvVeEXR6R7ox6mpNtBe5xGXmDfmnQymchZSxpSFLUMjxrArzCPkrWk7bVg95dhYcr7sLXbjeThtpJUceHd",
  "key2": "64eDhubewntqBUBSqnt4jJq9cZ4HJKFKAQBXmtsCZBmoLiXkvicKfQrfQvHfPwJ55brqEgQWLW3F97Rbzb9V9Yur",
  "key3": "FRLYwLjs8vv9BEPPoMS1aVFpxADTRJ8ZR2P7YtMULgzJg9j8yDL9p3LGu7wQNyGkU7JRb6SjZwQjFgFjGfA3VbT",
  "key4": "FJHEP4nchp73Tx69ncH2oAeBDvtzwXP498AgVpRp5KpVvEXVqjPNdEGAhY53PVDd3pxxD7Dpwc54FNt9PnDX6A2",
  "key5": "3Fwik6CQZKs3VAbC3V3D3EarPdwZwxMp3x2BVJNkLv5XmW7FvWZK1wRFby1RyzNiqQP8y3XF2r18F6NNwKmpC9JT",
  "key6": "dY1VQ9zZUVrbH5mBs62i6EzDDF4xsSqFNWeXgZKumn9iAK1tNHbbZpRGgpoYDot6b3Y8C61CfFDkLSnH37aD8Rn",
  "key7": "5Ujbr1uS41r4kZA7HfutkCa95Tb6yHYztuNasbndURXyzdf5SjFwoTiCKWH9sQxL7n1knw8S5rTGSG76WypHMqVk",
  "key8": "5Wyc4spcw5wH7hoLG9Mevscwo4cmL3sUMF1RgKedZxq75cTTL4dqrhvF4G2p2hE4Qgnbi4rzm3arVUPKwgJpa3Z2",
  "key9": "9ErmMgDAduNRVGkbxJ53qnKcpM5uo8hkzjHJFTq3rJgA7spaVBLoaZptkciNZDToiZiLBeTjdTDX9aVwjSpMojq",
  "key10": "58Zf8WpBQHHnRm496oJdt2kpKdkNpEpWuJebJr688EL7DepQf5SoxUGgMTpMncotDyR9hhC3DjVu5BW5yAeDpazy",
  "key11": "4eUii1epSgiu5B9Hq76sVX69zPVb2xPhFBceYwcHJzkurToyuSDGuZhCViR8UHece5ujizLb1VZhFHYih3KunSsC",
  "key12": "4NzT19eQbkF3TenQHbKatTGqwHuJPFkFHnoXTVX4BAf9hYmFTFQmiRy2UsPfesJLzyRXc7VjL2JUuyPettW2UxK3",
  "key13": "2DoSR4w4xgyyomCk7n3msn9ihfu2DZobS4fNCexcF9ya3E9XzMZBtz5R4kULwaCgBfehrNuPnraduXqyedoW6gj7",
  "key14": "4HBVdmXx8CowHnjnZpg3usmLhdWBeohVGPXtzwGZ8nygbmukzy2KtfXuriTXtQP5mouztgskEB3Egi8TnvExNer3",
  "key15": "2vrXYFqsysXPLAQLLc7p6wVNZRjYEyd5Ziu1xQvcSw2C1ZSZyztuySM3PEvfRFsTH3TvShj6dbSxH3GCb6Mskpyg",
  "key16": "5rMbqHao9yQkSipDSKvvbMVWXT5mXEpTq86ThyebSoisu56JoUvT8hQpmdSNYnVhZvYvMt4kgSwEN2KyYMiCiMbP",
  "key17": "4HzE6brMB4bqZD73xPmj8BUzzCoDrRkgEmsuyqkZV4zr2HVkwJ8a1zZxGXhAsZnYJBS2CWQF5ZUE6N3wyAoU4A3V",
  "key18": "2BHtnLaRHGPSoC4ieN46oYEYez14pRDMVgygoH9xx8e1BV736RhF5W62DqUGzDxbDyj9CfVki7GFrzuDeHTrdgPr",
  "key19": "3WvWDyACFWut6QXQ5nHcZJoNyWQauY8gQgrBeZ3jn5eskNnwsEA3h3HXohWshySfLYQWuYWAqVSdNQJYyr7wdRgA",
  "key20": "34b9s7AiGRbJmA8exSigqJ97mM8Qr7qPtNcWJQu7qweoGd8GJU3Vc1aoM3fsWJhHMp2d4SW6GNAhqykZxj2dmJew",
  "key21": "58W62QNxdUWu1yorNjUiWHgLnaxkRq8bPcxks1J1xw37WDUgnxhBroVF8VKPXCdqz6oeLSUjXPHDUbpmx5nSL2ey",
  "key22": "3KchVuTwgLZ9NwjpJwUqFmrALJVsPNgprM7YCrGW8FNfP49wz7Jhawtc2qQ6mes4ZZepZjpmvQciBo8NFYw3KAqZ",
  "key23": "2CtLtcrUoyXCzCL1VVXjuzHoXvmhdcppbnGjQSssdXpGc7hHwtr5USCZvBjhaAYLzBg4tkMK6VTPMrqCV3ct55gx",
  "key24": "2Li9NK8zn37CdYNquhppEHob48wuEKv1JCir7YSmBgkdw2K5X7dAmNYDRV1s4bDSWC7rb4yQeVs1gphLqKsyZUU5",
  "key25": "66AycfcNGJwu99GwaBKJeobjicZ4xMqZvtfbijQKek63K2dPyKX4c9TVNQhQPcoNADjZ5sx9DCHXhz4VBmY8Syhq",
  "key26": "3BtbQowwoo3wgHzaW5LDRzf9p2FzbgMAK8kYm3YBJoBRXkiZY8GDNDzwcZx6vfwU9i8oPaRKQFc6EQ7QVfrvW4VU",
  "key27": "2PCnrXKNeQ1z121PRLcv6yudeQBimiWanCZ5b1SnbV374i8in9KiC3Em4v3Rz8ghg95vfQ8fnNs6Tg7vv8z7YfkD",
  "key28": "5cFPR6FwuGX5fQY9a7pSxaCiJ3VuzFy26P9GjfT4zeFq52ozQ5xior8R5qxfVhohPAzJcqEPQccK3qNqcCpAtnoE",
  "key29": "2FUFEbH3Nmr7A2yUDQdkRznvDsjjQjLxFVuoXVRbRyg3K6gNgZiADYwGAzAiL2Ji9MvcvQmSRGZxFrRuzvcnXcgJ",
  "key30": "dyMioGAVJXJo7RbpXrT8edKZdcg7t3JmQqXRdHSsFvJmA62x5TTQfoh6gbq5zfXN3eisMQiYd7gfAEZj3WPGx2b"
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
