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
    "5BSgzmgbc1hA6x68iqmLmuFr7NBA4qGpuubpq5qmpJZ5sFytAYuCmdpPMcYbRb4fb3mS5cKoxww3TzXL3awmgUpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5478poZqU9WJ6YxndZHrMTCJfnSqXrJxWJdd4hHN9o2AuiYojnV5aHwQNEJQdKYfP6cymWaQAKfvRuQ8xjesf5Va",
  "key1": "29v89NZUPRxr3LZHAnax9nJrWqGs83TXXq9DvpABZ9jb4cngSsNqZd3LXvh7eZUPgH1kygCgY6yAiTYMEw2NwvuN",
  "key2": "qKz61wY4afYMboiRjt8vp3fJx7TFkDW9KFfLtXbqFeN2pSuQSHo7d3az4K8LrmtjmpdYHa4nQAkUXPRHGznN6UM",
  "key3": "44QpnEfcPbiwC8GXuwKjiR76J4bAyq3NS7H5uAvRp3Dm3VJh3AdcbawJXsqfkiF16BrAt3pGAjAgnDJW1QLBnDyJ",
  "key4": "2WRc9tVZAPqZPyyoRcK85JZVULRpQ21uphsNdYKAjQBSjJiwv5vdyc7yZkz8CVXz52abERvHLqXU4pnZjtNZg1ku",
  "key5": "5oQdj2BVjEYAR3hMdUMGdbDAWrh5UVdCPpvvR1L4187zSsfcuHmXZnkiDdFhGLob449zXVGwqdU2o3ZVZeXr9Wrz",
  "key6": "66ypXvShNBN1dXJB3t1Fx2fUK36g6MjxVuPmDvaJgeGChHK6WAtzsFHUqoCMQcDEYnt36oJoEa4SvFomXQhy1otX",
  "key7": "F4jDa4ovpuY93mcJ4tZyJEaDkAX7b447zh5msL7p2fiGcxYRYg3mmdPvAcmAtsGqYcQHy1DsF1Vn1ftixVQwCN2",
  "key8": "5omFoLj7JKUytmDHwN3a1EhpFgdNHUo9WdScUPxQfDXtR1Hu2MjAPt4FoVXNsQaVnEYLe9bGLDFvT5zR8pKT4trt",
  "key9": "42SXHgfK3i5UcaG9NohDV1yc94t4YfnJDwBs7YiMa9j5UfCEXPGJtSBgKn2K1FS7qoMPUWkfkChSRDDqLwbSNnNg",
  "key10": "5Dag2UZxESRvrtPYuvrNQHvm6QaLW3bvRSpgXW1AMf3fZ9TTF2G4TGVKhMYAdnqGLji8QPP22awbsQh37hmhYssu",
  "key11": "4tC9qAFeaWV7bbcCkosrGtj5bYNpNtm2X854rx6GMKBvSsYWsnKKWkUn1WmrNsDHvLDZ5kqYN2KXKK4EcgRHgDAV",
  "key12": "3qv27aqQQCHApdXWZu9fkv5RQmVdWRoXBRue56uqtgLW8NQSBGLZexeqpwPM5FjJTScn9Q82SsX19PkuY3bopG5z",
  "key13": "4bdZY1ANuLFi4NDHnQ4zFabjB3TffrEg8Sk4y4j2sfGWW2XCoBCBKzkTxddjLdNwRFaPH1AXsdzbnQnnf3kLdYsm",
  "key14": "3VzA5qk9M4HtRz2WMzWcyLGmzuXtcSV3YkynAGu1r3RFsyUcJ7phaDR5z58Uk3Z2AthCgNGmuVjGt51ukLJ11LaU",
  "key15": "3WXPHdpq14TeXudMQjXcDr1jBJmGDgWxCPsvRWVF8K3RooBWdx4Sr3zaKuhi8t3mT2NHUhvCcEUcLueMzW2JBrUs",
  "key16": "3PSVomzMfnaQXbbg6R1vtevr3FTuPVYpffiyjeutUUATTZMvAHGDxoi1LaoNpg65BuojeiGp6qjvu65wHCYom5KH",
  "key17": "2mhKJzsSxvmnDh93nrAWy2WhgegiBSFKcSgqdEHdJjtmEfcSdSoMyuniwhkpZP4kTf28r35S2Cj412g7WRrMmMM4",
  "key18": "3RMNjFvvjkafVj8wupMNs7b1AdnZAa1ZJYu1s65jZg6QifAXRDF3NzX5CVrSHPmaWLuKPpprCbFUQJYzYXePDp7u",
  "key19": "5L8GX78kCXPeAhTkQgW1r6uz7woZBTh3NqY9Vx13p7tpso6xjzSiPV9P7J7dk4GJA52KwyTr6z4Eq2vmUk4wRcpk",
  "key20": "wwMDJnWmYQByTSis3WJh3Y3tJYt2x4Tp6WwwcBcXx59Cia4TKUwKCKby7Kh2HLy373nPDcQ1mYa6ZJmvnCS72A3",
  "key21": "4RgP9KbWU5HhJE8SENLWRjGFeFGXd5nMHE7ijSYgi67UPQ9Gg5gqY9yDrDXXpT34aonwakbR9G2bPxuxeujDosC5",
  "key22": "5d6dCgMpPQ5jdV2NnLDvExwQBYAS2dH3mS7YzoBCuUwswRiMgp72nhCAC28No2uK25caVpGiZk33ETrPiNZicgER",
  "key23": "3PK5zetdnNyZKSr4CMTpWqSf17uzTUdGuBZTPvxrFdW77f7hTZDoF17L2c3vNynBuYhxUmc6XRrM1yXyEzQJT6qS",
  "key24": "43VbdkUaV6tQ3B6g9NCjxoSPtWHsMMYoWcjbKDVz1ubmZbRvZPhDaRn8KYifqF3J1KkvjfXq8QWWRk2DU1w9GwGE",
  "key25": "3bAEkoCKCpvtYbv71rkyHgYpRE8LHADTgm7yHSfyG6XbidjCc8EuLGpQC17jhZBfJyT7Co4T8PgnZvcXHKvoU9GX",
  "key26": "5wT3kWXQKrNeiKNNZA4HkXKxh5FbznSK7yavU7xNBWdwUaxUKz67bWB4yHQ8magBgJK8j5D9NthhV7xheSvTyvUA",
  "key27": "fVWWyVr1QbGJpsDYwfH7YANHhWhSCwjWhELJ7zbjStcnNRNhxC9xqXCKYNPnSogm334QF99BYLtJQKT8jiMUnJB",
  "key28": "4yU38nrh5BfVhF4J4yj6MKBSsbUoUD4hiijtFrARmXuiJXLirCcUPWV512rm83RSRwvobYMU4PcTL6YUzohjXN2D"
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
