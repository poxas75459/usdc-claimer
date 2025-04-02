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
    "tC9QFqziRhAWpuqL9ANZrBpqYRvYBqQbCzzHpkKHn3LmiwPM4rFyL8fQ9Cpb7jdarNqsyrbhorxcYrVLjEo8sJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PibnwXFKgiJj25rBCAoAm5CyA5UHCbvdPFnRJxd5KWGhquNbegfopJvE92UJsNz9KNxHAk2UCc2RwxG7s2eFWiK",
  "key1": "3b7kStyiYwPHZ8tkcAcLeSeGdHAdz8AmUKjMXN2Qky71j5NVeEJPtgaPJ5PrgjtKW53XnRvtzYMZJMef6XxncbQF",
  "key2": "syoeZoHgcJBEMfsr8bHQKS4Hf9x2RdRvRFJLHD1Jj6REK4H5F7u3z3tcqHHw19WfH2Bre6HAnFJkq5Kzv3mUvts",
  "key3": "57ojpGFvsS5PxATj64p5GBc4Xm5BVAiRVtBFkMuPdTHE2dBDnbXRF3L5QU1LivKDXHqGEf1ERSKcGakVmG47KR1m",
  "key4": "pd5g7uiuEqUJ8zx9GBrf78q1iJyrCDqhvzSyCRaSMZ8dJvRkEMHwPL2iJERdQCcSq8qX6bCPDJZt3F4bFqrkEJ1",
  "key5": "5CCP6Eb8P5fFjDzyxwosZGpirDdG5C9QGvPeyXEpVpjy6do1HtkcC8zHbungNjz2h2aUZVmE2K5KkU2SBrJBgj91",
  "key6": "5DaFyCWVJ9NAsZTaetQbRVjrJbGDaeEC6sKXkARxDCq8cBYVWg9nUvEoHDMbdfmnwTXYgXg4DBkfhyrWkEGhewFw",
  "key7": "3ZE9d3Zk4buMtX4vMWn68kAjRkHe2SXgKWkMC2LU9h1VLuQQwbP2m9hNtmrC8hdMFmpDsHGwN74eSdbLc8UsKbXR",
  "key8": "2hMLip1syoU3uKCvpXx2DgsMUvsn4LTNvEdHEgbcrSfQWtCUqRQQZMDQyHK4PLhGNrF1JZFvDoN46kLTyNjNoNWR",
  "key9": "2HZb417tcT7RSamZjeuwC4CJ2RiSR8M1HZZck26vg1v91asf6V4LN8kxKJcJJewLBmWxZdnuGbuxt6G7Sv8zzrbp",
  "key10": "5kEAJZqrbmbzgDJEiWp84Yq6ird6pcBLPAPgz7WNbVTiDc2h3vk4zbQPt86bnDPDyRV4Kfy4E2Bhof8heUU5bAvk",
  "key11": "443zDv6yX5LseR9DGpvCsS7GMzwZGJ9mF3wijFqRXUr5tw6zJXeoKAyZ2i8iawnTAhGxeoRc8wndXQGAZHbmRmZP",
  "key12": "3wj4xNgCFisFZZEaVundpmvz8YCZsqcEq7PgrwkxGDPQFaHfHXadSLWQdmn52xNBZfaYG9cnXi8vj6fa36x1dkr1",
  "key13": "FMhgN165Jwhz9cdcS8dKx5EPqpPhc2WtBF5jP3zDNZuqaWT1pczt9u66pEx8sSg6YZYPi2mYgXaqKKgkqoDDgj5",
  "key14": "3ChGncWLqUf87m4ePxvKd4W2V4qKRzeKJtRugZY6SvFkFpPphMVwixf7ViPb4LLrBrDncmdNQDd1ch716VexTboe",
  "key15": "3YyMYTQFR1SQWBC24o8kKVM1HAHphpXp1tWZQqtL5Wy5UoPdAB6RFzNywBtWXvMwPrqyDAR3GCSTqLB6t4zGCrzN",
  "key16": "21GZhcqCrNypzDi9S5hBzJV8ZBeaRovhw5Z4fy55iqpPvWEtXFnAEWE6Aff8794tp3LY915H7hQxy2MrXuUskocx",
  "key17": "2NxZxwCoN7wf4VshXRLZh3uCfAqEJAnBGbbAwv7uywjMA1YFsT6WmtVruH9xwM58g22qfB7ZL2Tue3dAhcoJypUR",
  "key18": "2pCjZmfrdJvBZKCauE9TvB5bzPuTH8sz56m97NR5WMu66q47b8AHAdzviVNvCyK3n3KQ7dxX8zYP94oDfCCqwRHw",
  "key19": "5S5rcbvL5JR2nzYmA5kjZ5JjBfWhRAJPTdqAnEjrnKMW1wMuHbudqUh5xzxGCUqodRiJdY26xYJTme1BJ52AdfXz",
  "key20": "39wX7eu9yt3iuyeb4waCBTxLds6rJJZFLMUfPzcj4d8PzRGK9FfZg2pUWZbGmBTEEWiQGU14auHrSZyy4J3oSmjX",
  "key21": "2vUHVvbebatye36qnJUfGUhE2Bz5kC4HhXuKvjtcz6pLmLHQK4gi5c7NpyNHFbfXeQahpVezpoLxAvRQeS3pqwUU",
  "key22": "2BDepr5BBRcNbJHC3zNe4eGb2JtnGZsVvmHUS6mEZjbXEtDLqpm3NFaGR18jBLSmi3nZKQU9cKdpR3wFSTu75QdC",
  "key23": "5ihAZYr1FVJqEtxKiemTvx7TgcHQzu3ptXinEWoty3kRBSkhVJr6jGsnS9oAx9tfmLFVH4nZD422NB6gcdxffr4B",
  "key24": "5JeBgs8PV3JNmVXLkDB7D78Ju6f5mmwjsbX9zFYsxvA1pzjSHbuadMNxt4m4417hfCcVtWqJUprteZcDHfaJzMJm"
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
