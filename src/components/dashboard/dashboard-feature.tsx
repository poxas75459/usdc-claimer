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
    "66MpxAASWtYdikhUkV79CwmyqvtBPF8ygMFijKBt8GZeLFCVwA4kkbrzAArLCUm8tzeSkc53758xtnJZnNk2freR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41aAcGMLaf4BUixX4518xFqE6sXjzDWcUt4EBCKFox3jGyvKVAtZbfMaD5y37QL4fuXJXAVn6gU9oYqTXYT4c14U",
  "key1": "YGFjq3haKsJ5y76zRTm7qrDbJpxKu6m1ao6N41FXoqQVa2GNBN661ja5E31CPsd8YmYPwp7ptKrCmoBBXjHHfBB",
  "key2": "3sYtn3STmGPWyqayCUS76eXXxv2Ce2GQUmUyyjmj6h2YN8FsLLFiUjtP3FM7ojcK59BWMgtZeL1Se79YFPGwaMKo",
  "key3": "3kd44YWsdndbFUDTucAAuteKb16fwMX4Czr5TaQkJpVodDkZwwERLuyRX1kaJKLN3aBxKYhUqxkUrriQkAFoAy9Z",
  "key4": "3jsowNabr2StYFjRRT2ghBezmfy8CqKeKyiwcUdDAtRcXum5MRDmvA1wkbHJGesd9ZBQuxCfetnhXYVg69duTt1H",
  "key5": "3JVMEjsNdUiC4zEe6h1JSqo3bHvpfMRZFGxbNxCZUR5QHFtDCh3mftXReMMS6d3kS5ayN3nx57QG1edqXSgfb8rz",
  "key6": "1KacFnQZT6sLEM5mTBi7L1S28afAk7cDpBJSChUR9vGQDCpyQ6C8PWfo7QMzPABcf41HNwbu1uxJS6vjC5n55x2",
  "key7": "5gpjaNESnNiepmPEAA6QsGSdBPzAAoqTcyiQvXJkt6FFk3Uf54hCm82hmZ3JzGp4KjTsBNRhZzHjFjzWLBTCJj2s",
  "key8": "4AGYgyeJNNxBiRHQwTQxarKZ2TJobkndLQiaLiBTabgsZAR2cNhEYrRT1NdkjhvjVfdivvEdgif5YiANyRtM28Gf",
  "key9": "4X3F988YjCwKkgCBGYv4qykRD1rBUzDAxR4TThBXVgDQNYdTdUVm3LSNpcwtptqdMmq8JNH5h2kSNhMyA7EADSW2",
  "key10": "61SyZjw7kTBqQ1uWnVmrYVHbSRxtAzLcc8tAJRvWDx1PACdjzpoJwaFqhEhuxMRTQyeW5dc78hmGY7X5TjB1ynW2",
  "key11": "3ghviRyXtNRqDTwnfsjVy4gpr6SXHDe45gfN3y7oaAddbv1bEpnv4eUHHmxmwAagVRgXQF6eKjdx37bghbXzu5Cf",
  "key12": "3KY14tbpvDFzzYPHddo8KmznyU8nvgHcJWKUjM9a4UZz2uBmPbvchKYJQNDeDzYB15QS5Fsuqg77AdddtAiQDon7",
  "key13": "57GBFyzHoBV14LHyXJ1XB8hPe92UnGvTnfvM8MAqhciPt2tfS1sx3Y6gPdZ535NaYYaBM2hi46ULR17GGGwy47QN",
  "key14": "d1tLsejFkWVX86LvrpKE2o3zhYnnbZuSoyaVWQu2P7Q7Wib9TPNrNCK5NAXwtSGpYZf9dVnENvajH45G1T73CoM",
  "key15": "4s7xxrLiAxpyADtXuPzPF3mErb65ikow3vxUSdbV6eu5XeLDc4EuU12jUVUQ7BrfJadntzzzZUWiSHNGSqVFk3iM",
  "key16": "5LFLE38K4VZdbkZ6NDVjKMowk7tr7GwguFn73SY2NbpqSzb7xbPe4DtATZaNXZ5EQHsoyVNHw2rrAPvtBdwcEcir",
  "key17": "35678iBw45ui2FzPSrtuK6jQ7TdZhr43qw4VdPCZucnhK9G2ygTrwVNibEUmwq1XmrVv9y7MC44JveatcSgFMPH1",
  "key18": "63odZjZo8hJ4iwSPP4gBn7DBJxjJJp5L5nydwA3QYn3JhTtCXNADgNjB4Ssgn1UZkACeEPkY8P2rteCBqipgma1E",
  "key19": "5yk8HY1o5ugcvbGKXhV8qX6bozRV4n2kbXuUVFtABYuZpkGTBDFkVLrXE1eKfebLEacUjN4eWKbRwVztkmLiNPW7",
  "key20": "27b1g9cuppvYJtqoYpJz4TDhKv3TrdCe5kQ1vVo8VeCE2qj8m3WUTiZSJZ1z7LbBCk8EbX7nhrqiQAM8Bw2x8Cuv",
  "key21": "2d9VAeYhntRWsDUYCmHx39ogj92XGgR4PVHeEbEp5LC3j8dnqT6e9h99zQ6LoNxriGZuDvHqYSGs4Cq2HXDxX7hF",
  "key22": "4J4LuY21Q6yv1LHRzLHYMoZ8H2fHiJtWHc4FMv3wP3aBKdGppzUs6koPCsadqCVb46NNkjA4pBfqZFAbfcvTnHy",
  "key23": "2VhHayU7Qi8KstTmjzVn5gi32iSS2D9p8jru4m5R6x7yxdvfBqhMMCSScv6RqgHE1yVqg8KHjmGvZbjC9RhQFKz8",
  "key24": "UHmdtwuQzWfJzYRUUxzDbG59Bscp9YvxS8JfyLfqFfVr62hmQSa3U6NjdwBP1hgoC5yP4faKS9GokGXzy4y7Ufm",
  "key25": "31sYc8azLRXcKWRPsqjoNVy14pcxJcVJZLeyCuEUNwjgcUoHJjt9ANJb5DEjxuU9vNvnj62FpWKhvNtFjnTDYU8M",
  "key26": "3PY6V6RA6V3qBEJH8P8qfQjkhoGww2BmtNFxDeUY1g8TMwydrMYAZLvZVej6E6WvKCJtSMuhq1MYhiuFydk5BynP",
  "key27": "617iESv3cBxtPQW4hSC7nPECRkQMm6SgYEkff9vtPVzvQrExBeW9K5qXRx4xMFFeBquQvky85FVdaNNyTu9mZFYj",
  "key28": "xzkWmsujypzyhgLyraNxw8sFTYa6tKBt9zEcpihdBq47wQuzqNoeDUSxChnhHELgYFoJbQfqj8ndexVmW7cvejn",
  "key29": "2MMugrqyUxSyX6zVdXxVKcmRfA7cNrGy1Qmmr6msQ9eeP2gYPt2iscnmdpeTRCF5vACDMw2m18WpWsUsrzCfBVXd",
  "key30": "5FAJRK2KiT1PKpbphu99hnRgjHDc7CFUBtwjrxAFkP2nKrviDH2HJxECdY9tMciZ6yrwhSQPSiRT3xZMw7ztyxfB",
  "key31": "3R1WnREU7D56gh2YoKsCzpGbR9DT87pcmnJs6UC9Jn2AZKNvHbNt6R7pHFTzD2dCk2mahXG5trPeNucgFS3Zca6m",
  "key32": "4hQjp88GcBuvb4VX1MrJPjpiLbKH6VYEXDeH5EHggCG3sEWsNBUjCUb2gNQHfEFaqt6onKKqqhT7YpLUhHDJ5YHx",
  "key33": "26HTYeXyfWjddvPAg5QmBJCkHw9iRW6mBDQhTVx8rp8B2nMTiAX3sEFvGSTNHJCsvx36vkgyY6qfjF4F18x7ZSMm",
  "key34": "5VuVExTeo4ZRwYGDGKuyNfYc2V4AuUYGNY6rMXxrPg5dbs5bkBHqBkY8BTszZvGJCz3UZFWv8nfiFywrM6BPjJN3",
  "key35": "4BaaHUSGAvp5nArCokm3cdCR5zYxh2cxoFPhFmYt1msHsjhM3C4bj5devtSNaPXWjMWVzm9XbFr9dgcq7v5sLB5e"
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
