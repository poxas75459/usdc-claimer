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
    "42X2QsJ8iHwqZPfZphwc98QdYssUtAzGriamX9NrE76yB12H5brVYahRq54krA3FHmr5Msg4NmuapTLfLZJESWxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npNfEXHqNdPZ6M85pJz9uBHDjz3D4MfsvWuxQpNojWY8x7LQyJvVThfQ5K2PULnDUFEzy3ZrR3RjCBc9oGRbR8F",
  "key1": "AhDJFy6yTWYQNK3GnyfWQgrRKtAZzBggAg8MF8X5ixh3BjJCxJ4scawy4KAjK5J5kTndqiyu8HVvB8VQdL9J8J5",
  "key2": "2qrj6bTCcYTho9tMdgoSPm1iLAfe4vYwGV92yXvhhxyZ5Li8CQtNJJzJ4GBvKcFsFQXBFNtqk43vbCgLEewxQXqG",
  "key3": "3cQGz5zs7baVoYLMfbpUqpxBZnxnYnSb7NGMLShR5GGtikoNmD9D4UGaQ4xuZx1ihFpuoE4oc3bgKqjzXHm78rcF",
  "key4": "2ez8osMu6uZmwujfHs4L26t6RCDumRwQDesBDckhC4QHPaaGQtCjk2yJ3VP1fjAyJ4rtz1mPtbyNvrJKee4ADFTV",
  "key5": "5cdMBu2TJApgBcumqvRwfygZViKRLizHCNNdNePEHM8ypYmqnpPEGY1yUXYRcA5snKF2mLcruGXSq2GzQGGe3Dzk",
  "key6": "5af6GNEJyfB2XRkHWhgmzbDeB1haMvNLb3cYTiShJ3cZFWYhn9xvgCLa7bqNVCyEQzVmXgyUiFC1zRzFrybod68Z",
  "key7": "gRvoq6CPon2zQojy9nwUr39eeRiSrWjsvLaayiAmKqU5FEhzhy1D8nDyC3zxPSpQF6KPejDykkAq4ZfLqmgphho",
  "key8": "4HdqiWpYBByYhJSVrhMNGVPwa2Un5fDMS1ZagdmmDkwcdEMwg12RSSntEpSANA4Q1vuu6tceN5DLJKyJz448yosq",
  "key9": "2GFz52tGLioAAJx7SAsUUTsqkmcumAQ9kmTo6nTe2xKwgqEe364QJN2p16fiNsPpnpBbEHCPT8Zq1RJFMbCzGmxp",
  "key10": "3gzrQz91rHcPT98xR6fzdMB3tQZctP1TC19zWUyWcLLWWo6B6Dm1GvEaGQdosgcPDmFFQHKZGCdLpATL479AFLgh",
  "key11": "4HvD6RftaJJrNDxF3DWPoBCvF4ijEGbJDteJ6FhS1UJGXzkgU15RutCdJGqiJ4CR3WzCkYEE2MovL8eXyZ3gAev5",
  "key12": "3PupNytc4eyKwEni6nBUWWKhdxZnBHwXhhR5XKtegGukxyxfACpAi1pcaR9j3dv2d9jbV69pgrg95F25WQXG4ZUT",
  "key13": "2wGF4hWXn6Cef6DU7nwZYfrJpaecBgieCzcN2SzqKb3SHZseX3tHkTFiqv7RH59XJ6mUJGQvbjonWrqqDXo2xCWC",
  "key14": "3n98wjk5wJZ3MCSDjx76pGrzFXwxDJB3WtQGg859E7smYRX9WfJ3vx4wsx5zh2dbecr5FjQF4jc1EigcGKW4os7w",
  "key15": "3RzR2UHM67rcCJaGKnhp6LuKrvcssYKMjbtDapxmKHYAUXQPJdZsU29278cgy5E1KVdbEE1V4fcnh2pvGSt6A7Kk",
  "key16": "3ZWBW6ZS1CSmoaHGkH8rxfAtk9pbWqhakXrnQ9yEjxu12X5bUgKgFz2VEchJUnDw6vFA5WEEuTfDdmiQNB9Nc9zV",
  "key17": "5oLRVJsFTSL4HxGNRnpkDSP4Rf9aKsWCzr3w7sZQ2XMLW5SKQEnSR8YyHQKBAMyjVhkHDtjXFzkE7Nx2CewrCzmS",
  "key18": "3CuKM3xpzudcjfhVPKZcv1A1Nk4fYyHZz6Nmw7dgUb67rZSuCQDoUkPWVDmbtZ2Zw8xEqNK3XE5xmPsh2NhGdbhu",
  "key19": "VZVjJbpVUkBTNK99QonuFVJvwwJBBtE25zt8vDmSGMLsX2h9DAwUMRi6Pc1z78CyeQFYrhT31WCNkcJ1AL2thYT",
  "key20": "2ixrZMjuEScD9jSnjySMDfCC88k44JXqHDDgebZdouMqkRqEQTPFDKGwiU94yYKdTAe45mXwL6HeeBBcALnCytEz",
  "key21": "CPPi8qPSF3xug3tXpPAwnULS9AbPX2XfLzE2at75asuXabug25VjeiMfP5WHag639oqXyqU3YCaxdBzFLuZ5cvB",
  "key22": "5M1vaQikYYh2H3ihMMuC5LBwAcp8Lq9MjfhnquCFqrnM48hM2rehXWoDY2vr1gVGjuUL2UbnugDAU8E57WjzNqo9",
  "key23": "5JsxerqcV1jBd2yGwNgwmuHNkfyPK6ndndZXunKz4jRSMQWGsCBaBnoJdzQ2b1npvn1T4mD7JHh1UJNFYDojaQ5i",
  "key24": "34Mb8QugoniH2jPsRMkvZsMLzi13wo2GodxURR3BDuWhnGD1GKxw8cnkpN54uKBKEeNPyefshVEHQP6bZzu33W8M",
  "key25": "4g5LHy9XSez6x8Uzy22o237FFwczMWRmwMWwTxvdW88fUJF21rdyfgW6a6Ju4DtUayz5wL1Qz9yGthwe2fjULH9b",
  "key26": "2HWHruUGAFFB7bT7LyyVZCCx2NWkUi4Br87yzh4ZN9QydrbwceMWkdRNKih8jno78iThzEnnVtB5snkfNqMLjPSR"
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
