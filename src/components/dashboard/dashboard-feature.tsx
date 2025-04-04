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
    "3UedDVoy3AvJ7M8JsYr7LuLhzDXgEuhSXcJ2mmwRytfpXuVTU2mPqPiJUWH7Fz7ATxT3BFjtS3K4yE1mP2anPcA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vt3LP84f5Gf6tSHmvE1rG4tZtfAXLWzxw9ToBBWa1NYhkWXvhpoMpXLicPCvdf5EFdqVXqShX3LV4wCofyHdyHU",
  "key1": "63PEJMQjfVKo3jnHrEPJkbPfdQYU3Z2qeRuZyJ84J11SeF17qLeAHYmw2Kf4JaEGJpsSHPBXQagjamLhf8misbyB",
  "key2": "5VwuQkQM9trT5ata7yYKySKqawkTzGr5oJKQLum8dUXmYSHCBQfkfAiM3bfScVHgfdjLDft6PpErNENgEjJLnaMD",
  "key3": "23X6M3p44Xsnn1UPeQdgk7AyTgnwDeKSKrmGHwvxWP7K9a1YuonotXzksywxah6AKWNbgGTBGwu7YCjqnEWGn76h",
  "key4": "4KkR8yKLY2xBB4runZyLEfmhnH2RiNzWt27jvobePxEz7D7GRB9JL8QZX1hNrnChn9pNxYDL4zuEpugLuYLz6gPA",
  "key5": "5yAJ5uDvkGt2Tm8H4NVmweHsMaGCN1VgBvbN7SNoPXmGyHY7cDxBag1ZcXRdyxPxEdwN774DqMbCtfvxm13YonT4",
  "key6": "4KHqbCntxWeHaLR55zpR6DhwiM3u6eErEnC68JdvQLprJJZQQRv5BsgeDT5qUYvUACYwWedqCjvhfdy1py48aJoo",
  "key7": "REdRLFBVwrvTCgnMbB7VkaYstrGAGPPg74uxqHUmReZeLa4BAXNwNkm79wXYqW32SX2yQmVgG2sgPnDpPijGRus",
  "key8": "2DgdGHjnMt74XL3EMDGwwzs3Rm7xDpREe3oG2NBZwP8CF1bxJD1cHWuzxVMJiFFgkPErgfYmhV5HAR2N9ULJ7XCi",
  "key9": "3zPBjoEoZVLWRDSNoUagvGYvi5mfSibk8B6pnj5k4RKhxhBNvFR39NeLsGbJRxGDcXJ9XDzbdfEAcnBGSA9x7K6u",
  "key10": "decUfg5rfcU6vjWnH1NKwE9BWfKSuVZVaWw9AEQKt16QS5H6o8uXwNVEh7qocSgoeWgvHr66gKfzZiHVJNA316G",
  "key11": "9uBNXnzXfJWakUBQqq2TL3neYEJmBN2iCjpp48V1d7a3JCKHCqN1F7SPyVa3a3kF6JcEJAc5ekVQEgcF8Q15PKp",
  "key12": "NbNaHqmexHWwWvLzETsFg9yGCnE5m5mjPGCpxY9CsJC72fQ7yk6WFobJA6YAcQ9AufcXmhUrwFCoaG6yCiXc4jA",
  "key13": "5oVQsWmX6xAH1kiix3HTVquTZBq7p4WejDuonwqven5f3hXC84DzfNz2rUTVtH777vGL3hqEvnDstc7p9t7P4ApJ",
  "key14": "43DzdSPR4RfDS8s18JY9GMzxDrpYuedukTaFzjMZKZDMNGPZn5KQhcGzhN71CAXAuTsSery1sFkkwYXcDrqvwaPQ",
  "key15": "43CrkmSD7XCeY18bjAxapZHyLATowCkUhofjP7Rvbt6SnZo5VP6NHT6PoVpP7tAKqWgJMZuECYcBZ92v8c91QcA1",
  "key16": "3bE661eWojNn6eqhXkEWEMsU8V8QBvb94v4AvKzAnQtzsaLoLetHmGxktaTk8wyjYGEJGR5r3dLW4qje3183vf16",
  "key17": "wcUN4PuKe62K2Wic2fiSFfbK1u6yKtZCfm9SKXd6WaX5Tqe3BwHCQKaWFzRJAmu3eRRCFaMnyChi9yrZBcRusFH",
  "key18": "4ZNmP6m8x2vZ9AZg2p9fpuC15z4uXo7QLofF1A3NQqVHK7egZocess9PbbkKrhkyGDcSxBhJH4pu6iRCN4qqC9z6",
  "key19": "2jwUh1miXz8YMcD4dij3LX4b4SrLJcByFUqoCJAsx6M5pKfjWWbyFaFD1gRAFMtJkM5PrXpDVeae3Fan76gK7uQB",
  "key20": "4t6cQ9M8PDacyK9RfZS97WbCTdhUNYczocN2x7nsMu3M2oNurGmPwHVy6YEchk3KoLdPMskB8zx4X2Bnv1mLv2MA",
  "key21": "5zTVUo7duStyn1Q8MhRk4A1VgX1FyYfdS9EPmnZRvKb8yCfC3uzgeG69VkPLUdSd7TEKsXMqoYzf7KiknAtirh9D",
  "key22": "29g8NzYQQ8h7hDMvcvRbred1Q5nCL5Zusg2FRhEKUWwGG665u9ZaDpZHs9TghGtqgDNsAJXAwBQCF8m7mJPc6Qdu",
  "key23": "VSL6XFmr5sAJmtgVLGsr14wNoYwFi1BMqhxD6roG5d5JyHBWHmR3Hy7v7FPKqFSjBzTRvw5Gj2sztk2MGv5B2NV",
  "key24": "3VKrCNpVNDg7i11ndyrxenZzk2QJyBEXasv3MtcpdbqkzmHbb2MXkmjGouDJtWcstAzeT13XgDMdyqTqNY8eda3c",
  "key25": "5FcSk9Jmjb9LAxonw8iGtiCvb6meVGXjpt1ADZRB5gC6VdgX6k9NiSUKpR1fZfoqfSmeRed3xR2M2iEPEf96SvCS",
  "key26": "3xXnfNBKVUWFwaNwrqJX6Z356xKMF9CJwhuSamLNfQorKysZduhaRa36wYcJ6jydBp16773V5FH6PSPFGgZoeHZ6"
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
