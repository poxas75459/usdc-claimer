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
    "3min62NsKHU2s4HPupDkFGTy6pdqZkLdxD3ejEK8cLyH2JQPQMUVuPHeGavjnGmdPTvxvB2idT4ocW2wpq5SG2yN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qvadcCfB4V9hwxo7FCw4ay5sRpg6etovLDFmoq97es9h4cGZzZxJb9mX1DV6VGwob6ACoH63WGcrhdr4LmA7wLB",
  "key1": "4tDKQcKmRyyANJKzdz8sf3pAPJnGunJNAdeG6puxYbeNzfqRuuu8qULAo2qUztdi2zwVJP93zd291Souafu94Ygp",
  "key2": "2UqaLvRSLcSsdx5h1SAwYWTufyAggksv3bjk1Gu8dmsB6uQoN6pNxf5gR9FXRnL3SUGtqVuvodiV5cKHUBCsZLn4",
  "key3": "4ksGGQveoeeyKypkBDjP216XXWvGHhmCh5W4eMMp4iFvcdrAbrX6ZD3sLy3ZDPmedgkFBePcG9oET4AYgx65FwwA",
  "key4": "4fGPRxaveqpqogWuFDjXYHmxa2aLSnkKZbfqWjgPkRUNuEu4vdMHWPU1vHJxLwuDHuDUHdULWWLJrxMsH5NdvULv",
  "key5": "3bzX2oE6gdy9WzaKLE81wMeo7JBvw4ah7mEaNjA3VkFFSLoMtiQgWoXhshuVYrbp5aT1MXY1k1SjtyHnWPM1ymo4",
  "key6": "3HbLYZ5pzPG5YNMzynSGRCoLSia6YMBR7cFz2vMzG1iyx6pxLwyhDztd46NxFceFmpMppqyQbGbtwiVWmPtmnJT4",
  "key7": "4ecUSZ2RjzfowXadfSqpf1cFemcYjgLGMajiUUKZx2rkjiHje7EyQyiYwqgCnvA8yPMRKyQPjnhU4KtQvj25RbxD",
  "key8": "4XLfx5rsayBdkpe9J2cgSTZ7i3hH2ZExT5NhwXEjYUXirL7phBnaSTsXABB47s3M4WcrfR5tGsgtMKts2LQkwRX9",
  "key9": "4zLAum8bwt5HknwecWaCe2J7zPufLuBQCrGLqWeNXxvFZLvCit8So4BZQoy9tC6hfNP97aQ43X7JGMNjxC1fJsvp",
  "key10": "2RykXB3Ls5dwaeciPQgw2tVrC9TiQvgQWq15hWZB4sLJgNJUe7fmMimCEauBs6gR6doiX8yKRJAACN9oWucqreAP",
  "key11": "1fBPogR3V5GJaVgMvHzR17LYx2eudvLKyZY1CyzYQbJ1MjQnRRykhLzQPTGqBRsutGUfeJXBLw4pxF9giX4dqM6",
  "key12": "2vgxhYkB5vP8omRN2KCRFq8rnsj5zNrnurnpE9cajEVmvd9Da7i4GtD6mEYMX1RZV1XzbGq9YQxp4UiczzdbxsDF",
  "key13": "47V4SS6NVfe5WoTw9bn1iimzVpmRGa1q9Lxkg2cVYyorBiZ8TAcQ2NcvTj9d7b52aMRs1JtvEoY6kxYH2w9ChP9w",
  "key14": "4FPbrfSmC2k8gMBrpcU2yEpq6oczZJrLYheCuTa91VLpXLMJeF75L1houVV7yS21HuiAWx68R66B77FTZ2kmV9nW",
  "key15": "5DhhN1Us57ZsBYD6EbyEDTM5m95Q8k9gZ2W1xZba4S2qH9MX6M65CzA9emvCdsejZQqCRi5hXHHdpLmr62YcFZiP",
  "key16": "WmqkWGodvNzZCfY9BaKfexNsKAeFSjtHSyMNQ75ZHsttxq8gSYsmZz3fpn3dxyPe3d2ETAZk8Vm4CrEv153RCqo",
  "key17": "5LdSV5A7abNHkQJxm3zqHWkRQctQGdj4Z5War52qgPwUm4XDCXVnSeZttFBWkD27tcmhqHNnvWTF7LEynXLTNiyc",
  "key18": "3aFcPHiNNHhWQphhFcrxZSpqp3fegLQuZF4X8HqUuWZEqnpQM6bRA1oNqo6rzfFyCtfnazZRgs4oUx5Y7994QHDP",
  "key19": "4qnkDkvsg3mwAYkwiXyjmiG4a5j72RE2ESdEvvLoqaKqCKxZUVrAjL1hgZBhfJTZCMpWiqJ2nHVJ4t74xr8SKRJD",
  "key20": "aPNAZ6RoKWyW1vKhPqVvdTMQqePWzbJmGaRfP5XeYx9iEuTFHnXSidbq1XCKvXX5ZRTsqzNPJqMaTzVpz1PV6JC",
  "key21": "3ZvP4SX8gkKbehNNr85KRWG3GmSa5kQU1xbSNak6EjdQrJ2TzsYLBT4na7cqbBFVXs5qnd7t8hRw1M4u81UdM7gE",
  "key22": "5CLqgrCZ3m4vbPEg6Zp422jFGkp7DAeMcdT8AyipqnDD2XKctVUmRNHUGFghLGDB6ceiafCe2Ni4gEuBxPhuX2Zt",
  "key23": "4sHU1FZgVPmp3KZsXcFDHJ6S6gQKu8jgjX7LyCS5mJu2y6rNuWjHcCwhJcq89XNTnQnjm3coFZhPh5Gx4TnBBFot",
  "key24": "4jA8ay9xGxnMyxSN4YikgPAT3ajUh92KLwzq7rhxAhUhFXoGvqtDMCAL4j2n2aJQRbQWhw7brY6vzc2Ph8vaSrV8",
  "key25": "4rtfxkjffTJx4cYb7SViHJTXUsh1vggxWVBQePS5chTvbNwYjgCNW2cWWcS8P6otSHxCzWayZno1dDcN9AecavGH",
  "key26": "3ypci8wCAMgeKza7NPiCLNf4QRFcqikUiru2exH1Jmy8vUtmXgficwaxJNQHFtpmwy1NLEzuz7cZLHEK1tWsjoVj",
  "key27": "5rTSfDPYcRpTfGjJaTgf56fr75BHyX2ASi1xboWae177v4RNkeN8VkEfMdr4T9PeufRVo71AdXoY3GR1ysdfjg3A",
  "key28": "2yQF5PdA1yptuGKKNbc5SHvGXgMhAwZjALHAjY9V5tusyoxgvgBiUC5AdiuoZs76dgoxReDB9MFpHemaUcTNjMrM",
  "key29": "38bfM95bV783FLQ65yAvaDnevEvL4UN2N7XCGiXgyc9RFPvZUg9itVkT1U29gBwfsZUndiSo1xy6HkdAWHrUUUvj",
  "key30": "3KoUHUXHPdMNWkbmRaffrxevC3e2XeWminLQuCs7z1CrezC19muxdnefjy9yRUVrzk3skzrG8EnjskEXgXGJX8tU",
  "key31": "3poPyaREtXuKtvms5hWzVgvMwqysedQfEXBSWh9JqZq6gAEFRzXxcs1pjmktKtGHc9MLuYVgBenHJGwkRNoN3Rou",
  "key32": "3e8pWUuJmh32zmxjXG34YAFGUdyLfu2zc5EUMsbqg843oeTX9rUr3Ec1hGwEYcT4g39ZY3nK1rLPtqZqdTSoupP1"
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
