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
    "5TfehqhiYenz2b67uax9JAjQjRQQSQ9EhDHcKvTb1KrxYNosDpWfppLshvzKzDVGA6zbR5GVEJo9N9e7cjzjv4gE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sSqjgGCdKiXmgwmFypsVAH36ZVvaAj4LA3sLkSuhueeeUQbGNFg7znUGU2FGCLZoCpUoBma7QkqLgCJJMH1LcxF",
  "key1": "55WwscixcVTKCA2JsJN6unywJ8SemhrrjXPZjag5yjYiNNd7ZBfpVaJGh2q9D8C1AVs77k7ZnMDyba7E32Z91cVk",
  "key2": "2J8TwWL3csVeKBWKx1fZZShRf5Xj6b9caUQzBGMTX2taNJyU96ZZyxKPYkRZvpDCx2igRtjM1vr7iPSbe62iNMku",
  "key3": "35tKMtYafUAZGN7PzNN1gqKbsTZnRuKY7AhTp7yArok8uoES4agbQRPzN9zvFiia6xhkBT1heTnrkhK7YAi9B45V",
  "key4": "NK8ev2aFgftEA2ogUWFhgv55wmcUMoc8BoWeAeE1khjS5KUVUTwwieak3frw13KqvTqc2ezbdWSX7cwXqCpGjxz",
  "key5": "4BbhkpK2QztXJp3AqhUQtCR91QewxBEW6G5jxVK3uLw7qPGbZHfQ3j9tBKiSkBrzZgvTJjq77LqFVQus1VuEdqZ9",
  "key6": "46rmMEdgwYkYNmMr4bJuzQEqRs2H4RGzTqBBr5rE9R9DXZTZFY7SMYQUeAZyDoqxWKYZF9doepZ3YnvYUsgetQvk",
  "key7": "4i1RvkGgKbBqgX9GEkUWABKv6XPFPnpDV3er1Tt4vnB2B5Q5GKi6DToP9rMrMKSMmvD7CgQrUKgVMbTjg9gVRkoj",
  "key8": "3nLUJCX513mQScKnBVs1v2BDrXaiHatUXo8KTwW458B7BhaP4gFXdZ38YmtNCp5iHBbhAfzfimLAQsjaq6XbM2hZ",
  "key9": "qJBmkK9Pirpp8n7Nj4iyCguUKjXdtrQVqEcoNFzNXP4fSS1y7Cyyd4WvjYchHDuuoXrpi2s1DSvMM945x3s9XLZ",
  "key10": "2ZEn8apboe4Ty8rQeeny9Uk3LXYVZi4kHLRAByd1Fx5uxRJtLyBmpihdYgWLHUh2hiGtCdPC5Ti5ba7QjpbAJ1AZ",
  "key11": "5TAZULWGjUeYJEa2e5KZYEJE3XdoyfTyV6oYer5bCs3S2XCnwtEe4Lyp75nid5o1gLjxLFS11P8Z9AA2XznaBJ9U",
  "key12": "5y6RZkV8YNy6MjwKAz4PUvj4izREUdLkd3QxiGRH6QZ7L2Ko4hU26nNavPLRreCCuLcfWCXLCziUqzudNYDgRSEB",
  "key13": "oAYJBcMPpEiUJSsyS518U9juDE2z85AP2rF3W8ep83nnuq2hbj7mbAGAgtZuGLBCpp2iUbTgSnSRjbTAS5r37bq",
  "key14": "hNL8XfeoaF9AGJAR7W8idMWgvdm7qzySMxBdNnWkbkxkXU3HhZ3GgaMxxPrSD8JGf9RqyUeCU16GPdCagYFYSQu",
  "key15": "4anTWBWP36xot7ojpkdhbcss9HjATdeuH2EH1pbvSQiauCpdma4rUVuAsttxifJ4gE7NdciYbkH5m3UANKf7PXkj",
  "key16": "GnfWrf7HW12Edxv7s67Qy54H9EvW2hhuoWk1pGTTjnU64RhMf75rWM39LtuohnkrxfXsCrt8jbeXGuiRhRpN5Ym",
  "key17": "5Ukxk6N7RjB45mcHi3pUYvtdfUkoFbYuigNEazK3shr2CQgLcwVdEjAZWCQNXn178icUh2XquygSkedgYx4WKYEv",
  "key18": "Aktnfb7CYRYsc6P2AGEugdk822JKFXYEerJXcHDRYPS4nz6G2YsrXxdMRhJyemozvFSRWx1mAy3tnndFjgW9RgF",
  "key19": "xeTpzSdSxsRf4qphyMxTs4pa7mBrXaBs3v9wey9SRxxCCLnx2P5tWpLMJGVPnygZpb13eFT2xFTW9uTk9S9Sq8p",
  "key20": "3xoXq5F38bALWhyiEaJPQT1iygsZy2fg8jVBQfi7cfX3WxbDpNbFYjGgMxd4pJT3JDsZAHcz5swPPkayVBntcBuu",
  "key21": "2a21PZWHSvkaJM9hnW8Nca2HvzBdb6anMygiqZWBSRjzxbjPNxiUJYa8suowxdy7wQAu2YEKvcbGnxcQN6MHQmec",
  "key22": "5dxsiZ3gCM5FVbBT4UorS38VoprsWN2sQ1B7b645ddQizrtStX4A3xZbFdLyHTi6meYtxRJeierv3fNkSvB5dUJG",
  "key23": "5ut9yniACjz4wdBnJ6n3DYhGsFE1T1yifMEpBFB7uN141TfJCtTRyJcTQRnaxsGJPuGg2BGykLobR4T4cueGBUX1",
  "key24": "3CJewqvBQzRpbCoY3tJnXfaChYYjUq3vrwG3z5BntuAb6hD7J7jDs6qCTKZqYBHiVsjRqP287YM4RzYgNcmTLVpK",
  "key25": "2bP9PtAJG1iYayRDs3WvmHRaxZcv7A6RYuiUWDr8MgTZcYjGyzUSgZcXM8mTqii9yxKHjNyD7K9CDr7dAruMikcL",
  "key26": "3k2nkZvrfrLPaUcH2qc9seP5Wb3uHpVXYjNpV8JfapSU6XXW71ukJrYKqtCCujPvWCMdBDKa7yq73FTQYnvJrgEZ",
  "key27": "Qb3mdYKHmRVg8pmkXqdBQXMbzhwD9dSMD9zVK1ez5T66DJh16DGP2S2mnMZyyYXAzwhs7whaHWDmkwERojGQABw",
  "key28": "5bryTx9CjC5nXdgZUwUMLG3ZcLPhqqbgQJEp4v2arkgEpfCMDYtr6SNWfhMxEAbvLedwEELnqwrdp8ePEjzFD9LQ",
  "key29": "5sSCpeP5CwuGq3StX7Ra7VS3qc4mor98N1Do4YAKSKUrKqxxdjQuyv6C9adCAKYipAUa84Pq88otnuyDBjBc5VQZ",
  "key30": "5WLXCppt4TwB2cV1ZNEBHWVh9fY9tngo1ZoUFkndJdFtvyemmSRgQUaBnTviDDpPxC42MD7ifzT3N8R3FCizqJNF",
  "key31": "5ULccZkR9q1qFxizTQhe49CVHfTP32mGsk69EdTxEF9iDoDAAGqBTZV8ttwMWS2LPDojej1twmgxC813ReUbaBCv",
  "key32": "2TERt9PfpL4g2x6DRfbWpNBd75YvFW2vDztiuRddfiwJKDBxziWWBBqHyTDbEQ6WEBX4oRUA211VLCTa3iL1NbR1",
  "key33": "pDQh747i55JBdbjrKmzYuYWPtQvY1NrBzn2f2gzqSqzpJykJKvGpw7hSWrBVhJM8zngHYbWQm612dcnW8fYK8tc",
  "key34": "3wRcztcc2CRjW9jc8cEpzu9QRgVpYnMsso61Fcf3fLZVv21H4ApiqbVQBgRCpPuxZyhrWYd6REzy2ijURfo32jJc"
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
