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
    "5nuDZ258d6tcoWNaE4nCE4FHPqvhcJcSfYC7hYvQjYHyRRBaJdqhSHj27mquDVQ48eYCv9jcXkTg8FjgohCgaAWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SdkwfkMjgYes6LntU6n59FvEoQnqwepEUw6UV7bwLXL8rph8EpnZyDThPDTT6Qd8fE4AsNuXPvTMJVx8M88LzbN",
  "key1": "3uxCf6C2jmUSFVnrNsWGAv8wLhx3DvX1MgHLCeky2vLDUSa3YsCA7krfm2WS7RdXNv8L2zRqdjaFVQS1Bsk7WGwL",
  "key2": "484ciVaRcjzHUA78db88ucJLewTSDe2wSNjhPKKN6HSiG4ZtcMBWjGrUryFK8N1fHQaSdvTC774ZbfV6zUMApUGb",
  "key3": "ArtDtdgYH9nz3iQSysreXfcJjZVjU29uGgkYdsKiunLWZourdW6KCyV4L76qRQMvvCJpTfyW7pKEUW6RM1Fcwu7",
  "key4": "3M7jC1q19wkz8tsZAPQDTmKsz1JZcwZBRbBGkbjv8QYfG9yxDzquim1zZfFWNKuGqRsUXcxnAXeZLthb2QaEoeZm",
  "key5": "22BngraqhyT8WdTDVrfni7hitNaWZ1Cr8Cx3EQaPMMGoCbpkWJFxsHJ4RCVbMA6av35vRTu1smzyM4PxFJ8Xaafv",
  "key6": "bwEYoc7J8P7WGA1ei324xDQsW5Aq4iUtxTukhHjbMPsdWLD2hi4sF9SRG59RzDothArdi4N4fBRpSMSSkSXUjr8",
  "key7": "2fhFXQSo8wzz7DGnd1GHKWu4mQhmykdLaXM9vEZG4AjdvZVrjmN5g78FDtatUeAfBakwyzuWHffh2GkE3BQWEo2F",
  "key8": "4z9GncHGApKA7BZsgrye7wfhCyZqLpCCkqTw2oTUvD1VzYaNhKe94FBSqWRDPa4gYqDZ5VLRy1PXQaY84FcknPx",
  "key9": "58Bqwna55hppud53jkkg1mQx2T8ReNQc4SE2i5cz51NpRFmZH4cPS4HBzfPhNnHGdCdkdCPsHLeuvSgQuvaNFVAu",
  "key10": "2beT6Xg7QbU7WZ2UcGXw7xcdv1fFeH3PDvvBR9LRJ1suTe8kPeQu7XRhcNRWDYfSkQuNMaxYFNEDuyTW8auN5V9J",
  "key11": "2fYLxKgMwYcYagxNbZTAMmjnhAvQTZAyucrRWZF8SvqV2pjv7obxdYYWUEXFoXW3u7goie9oRfvyAKhqnsWCKiND",
  "key12": "muDbZBipCZ6bw22avY9BLHfdzQictGvKPDscjkheVohySTCgneg7E2c1VZKoD4KerfXEokbiH5XYSMFQaUdmfq1",
  "key13": "5BtKqFCZY584RjmvnqEB2jCy3rwvDu8BLpgLjk3Sz9jnRUkVtMduXdtchRzyfs4rWEGsg47GgaCWxgn3ziW6fpvK",
  "key14": "4kdGvHkVLLzP4xu8JuA3MBjZZTkoS4MN5EBQNxTnVQjKDnBDWPgwxdjUKJiJsW3oMiEf4EN4UCW88ZfTQpuKVqqf",
  "key15": "41JS1KyyaA6LXcGnQJQ9YDe1skSLGYGAzUvEqyVNufwUM4kKcBJjPquxY8gkFTbmWa9h6PHrNeQcGxfXyMRRayYX",
  "key16": "tSUmgYaT9SL4KwQnN6pZ7XtL8Gb9wcZfoDH1Z7fjKxPQxwnxYuqhfvXDqoqgFnrt1yLfsAPYszN5VHhqokk9Abq",
  "key17": "WLK5QSvxomcWiU3KvgRHfyJL2Q3xRM9RuYPXYGLHKCeVFCwqNESynCS3nMKD9hfAw5CFmcH9bND2rvwgmfsxUxD",
  "key18": "5US6FS1BGUPA5BxgsX8wF8B9D88pW1RwYioUwHH2SBcLYdArCFt9ZS5HUFpS7suyrM7SqKuuCbPKfGs81J1BJdLF",
  "key19": "5zHaayMBY2GeZodC58VsqTACFAkLzenbvQm8Aykt34xrxZc8rZxGXF7RJokgE2GMSYv3V9HDHntRfCrDZDaWcngA",
  "key20": "4q5emupv6pGaSCC5K22gdLQJorbiSHawGE5c7oF7ZUUPBiukrF9FaoTp4vS66Uryihq4Vg8nVxyZkDGBGbZFyniU",
  "key21": "3YsHWgFMYqdpiRPino15s1sU6rKbQaS9J6Sb7uv2mKUmS1X8bQa1MNpPjeK31sQPFySCwRavhjP7NMMDHqYhm5MC",
  "key22": "5hsf53RTrBR88PBQkbyRjp4PWPmueKpAZ3zZCm8haxLXLXDFbWDcnRcSEdzZsw3yBo9uss8w4MWdM2XVzXWXqvHE",
  "key23": "3RjjtLbzWNnS4dLevWi2QwTsZu2e5ga3qwNpEsbJ7d6iLUDm36kFmWXgtSYWpWja2aQJGa1Ya4Be311eouFQEmZQ",
  "key24": "3PdjXKZfz61bGDHJZS3sAXgSszrQfuBLh1fi4LvPXALJC7DpoERY9KFtGRiZNbvgstF4j4P3pVQoN3i4Jq9ANkwM",
  "key25": "pqaAm7JjDsiet4ufzwqiBdt5WS6Zx5C52J6nytsU8bNj5R64km3sEenNcTRm9zouSZh8PFkvrtYKQJ8d1s6hbE3",
  "key26": "4LzUim9WnQLMHBpPaxTJvuZ1HS48At7gpXDtoFMT7i37cacb3tquGstHooR7ZpPi5mAdsLp7PuZmWSGYiMrpXXqw",
  "key27": "hacz7KE7mcZHcsAxxbrLJoD2MaoL8YgNPt9Mx1DGAPgna99LUvQQmPtuZkZGgVG9diDK3aoyENjEHsd3VQBd7aY",
  "key28": "2ZoXGnnWe1mwDbogtCb726GDKheh9x88uhSxShv6NWzGtQXnfGhPuAaLstpU1cqqWZZ9TRUkNUdX4sbkmmBzdZfc",
  "key29": "2ctQMGevW6pSeUkc897TXwS6xPvKVXSa2wGnuEWfM4MpHB2iboVeF5qq9hZth3yUTdMfsUawt1SrUUkKQ7CjFLjW",
  "key30": "5tdUb98LJMB4GRtq4ki6W7eZ7bxKNjWDnPMVAA5dFVXxWytbKeXhNhZfE8DSfeRPPQjGQEekph43veu2JRgYwWYL",
  "key31": "4KftEugoqNfuEojjZMPSHDtniJPWdnExPwhab6pLWgj7Y2kJrCHyEi7GAW7eS52E1UWTZbg7kuD5YaEFAuMsgAP9",
  "key32": "5o2oGxq3ESx59sXa5EuGQFPJfdbaNj7QJpqbF3W6NKxbXWPp4jphZrcbYAxsSSMNkj24Hp9ztNjm8sHjCKmc8qKm",
  "key33": "NF3SGc5H1pPMEk9s9NGw7gaBpLdwnNjEvS5wEPkNmtNP6M1EKZdpz3evEywHWus5k7Nd23WbetV87v6285mP5H7"
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
