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
    "463zngeknYFDAE9emhhVN7cnDv3MKSauwmL2upGghCLBLVgDZ6HfwRWDLioBT9NmmCvzKHruHnQHqvjvUeQjDGhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rqKbXy6EN9nxLH8SUH28xCo9tB3U9Chpz4zrYKeF4YvFBfJXLKsFWMpzSL4YqZNaRvWj1Z8GKCfgr7NVrtVZLXJ",
  "key1": "2UXX9oNq5xeKY6oYM2VpQgyLDyCUtVoztAWSiRJjqQJCJYz7jKsdSxND6P6PXgCWjQfNY6j2MRfVxBSWbhuaFUR8",
  "key2": "675dpsJZsTh9cbpUBzcnj75NDJoFCzU2pxoSEtmxJMNJXsEdt9Tjbv6ecSzKry8eH6UqcFS3zLYbvVqKfw5sEmFB",
  "key3": "2G5Bgj13Q5hj2hiqbBuhNLWD93a1hDqgWrgfpRpKEtKAMj9BWhnn2uSVUZXCDicCQF7KGLmPHhUEk8KNx3XXEY66",
  "key4": "5CW6Tjg5uHVcyUFGmYLRbBA1ivwQpSXyqD64McWxMuCPnghfaLq92DWushoya6b8J5gs9Fynv7d71qVCX2zDumpx",
  "key5": "2Rr7JK2eUUchd13u15nMnqH6K84kEdPWumH7hvu9P7YmbiDX4e71KFtTj872CZxAPqMqHr2yfejQv7rDBMDEEuR8",
  "key6": "47v66u5BFJYqCuitV3vYpF2iBVqg8RJgP6pbh7ikGNNqpL1EQHPAgc289TZiqyhaGBcUKYtL5uzdNUC693zrBJLM",
  "key7": "3dv1wwmmASRenFGrcdVLBNG3wNS3XuArHEd1vg7SBbC9WAHVrGjKPEG5gWK1Qtb8p9AobTA3nyALbNBQBnggUHye",
  "key8": "4u6TxWgAf48BcoaCfBX2ig1bhTsN8x82qAwkiobDFGvHU4GwfJ8dt2J5yaTTV9xNcD5oM7MNUGXDF4HK4cASmE1f",
  "key9": "4WHfwsx24jBTHBV215AzyPvDezEjRprEb4VXrEdcqHDjSR87grqxrx3N3N6JJUJq6ksJuD7oFbhvuKNqenLtyqtx",
  "key10": "MRaJZEUaf3frzJkznuQWXdLJsiuwfwgqamXjWFa2sw6XGq1HaVGwL5soq2Y9spMWmXXzKCGQvgxYxtAQBrNuwiH",
  "key11": "h2ePAaE2fGeBVBVk6gjWmcHbEXUnaf9FGH2RM1RCB6gV5RTYMcc48iA2LCHwCsg5LeYpcF8kzNKskvho7wYvSq3",
  "key12": "3TyFRUxtgj7vPSevFZg2cT1N1Dyq4wzGtEUH6R69DjWkAHJ1HtpyVK5ZwGvpGzwPAo44LexB27hq62Az7rWaz1zb",
  "key13": "44T64MdaL9hp8qxskgBRtDy2K8fxAkhEGTtrNyZK9MnXrRPgi4y9jhmP1ydWa337s3T2akhCZNsK2c5W1SDFuZhR",
  "key14": "UUSvr7sxHBUAGTupEpbdBP8kNC1BifSYUbCMBsswhA77x4U6GrRuHP4YxQV3Wx2q7K1awdDJ3o4X3RacJX7aw2H",
  "key15": "5jyWBy9L3E38C2QU5eJjpup5fVFkgrwFms2jD418p7Z1XAZV5M89qopHLA1yQ2hGDNDPPtDtJfgUJ4jGXhqStWbM",
  "key16": "31fLUCTPiphtj5wxSKQfXRzKuahw5gGzyYYLvR96CQ1LzVbkfGYxsrSb9QQv9rs3vjHoGmFrzUkuZGAszFGPU3V4",
  "key17": "67NWfGgFyF5rLTAbm3nENmNAo4pS64EgUVcx5HS8HnsUmmXWzT1yNq5PH2NimpjuizY7znL7me2t4GD5NoeRggCU",
  "key18": "4DmR2E3BHcap3KrPu4kErpRNEypWvAo6gfkGJuMGTstvSLYREs173pTRoj7ZobGVFtJkyG3oamnGygUjohF5VLte",
  "key19": "3HDsFSBTmrhzH2nVERD2kAhgHGfUvAETKvzDYENUjyjNkhfcJmFnNyhTUpvQjwBhb6TRok5Z6oUMhL4MrTgrgq2P",
  "key20": "2yhJEMXthpHBtFff5LNSbtkVbdXESyK4h5fMcUFTgjWRBS4GDJPKuUahX1Xd4CF31euSHMKmwWKw6CzWwzBfTBGf",
  "key21": "5g7BMDPnvxeZiBUDHz6xy4vtBSnDD6DhaUish88burKn1gezgvbRCaQB3zxJDU7TqEFzNoKJeXArdJwUD4nBVMLz",
  "key22": "3yL6tmieJpykucHEBYvXVi2vjqwHmUwHkWp7MR3RC3B3psgbwgw5qh7uxx9Vac9cHvJeS2vRBHF7HHEARfLRwaSu",
  "key23": "2wRj3F2sz67yVKhvmw1MckcCxJZkdLtXEnCeQG79Xo1qGhjQix5zkTecYCTcYNcyPp9PqoGw9TN5SGQr9GXnW2Jt",
  "key24": "9AmHukUCMzeawqPtoBCMcJW41TJxmsrViDFqA1zsaRVPZv6stJLDvrgfzfa8jXif5GXTuQbQp9mid2XdYxZvxba",
  "key25": "3p99zUPZCqznLa8hZkULV3Lr4SkEv541PJCicoWt522SKLN2rMD6tuDS4KwvoeKMbC4S9ZE94fFowFEjydZ7yYbB",
  "key26": "3wae4pnUCuT7CEUgcv2QbEVheaivYhRqBqRUPLQMGX4gUX4wL38iYHpf5Kg1Sjz6mSEs5eGfs7GfM3QJ1vf1fXSx"
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
