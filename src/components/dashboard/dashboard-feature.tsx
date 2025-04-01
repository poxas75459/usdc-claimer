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
    "3knvZVNSvE4bZDbqpDgWHtXoGweDDoJct8yC5gGFRTc8Y57ZKmkYUdcAv9pMq5W97bjdWLYc5VQNu8XG15c3xq1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jXCp1VpUMuWxDpnnZ5GHjJWmnYAmwZJwbbjfHcXCBBty3mGRsjjNhxvJfMpd6isNohFMPNDXRSyCRvaaPbywuX",
  "key1": "2xJRhpCHd3uQiVL21NGaiV4xP2CnVLxZ8fhY6wj5fhaQxt5CwQXAfbp3kAGEiUZpDAHz9L7w6LpZ7CQzuQTf6zts",
  "key2": "5fENiQdUG1BoorQvocwnZUuZjYetL1wsr4a1hr1FswYNBQJfGdQs1Hrxs5kGx6UgQVNpKCpiKywYQyKiB76Vp4Yu",
  "key3": "5k5TM3uiFQiRqZcnLX7dbBDCsX3ByXU4JTuKVndtJzAAwvARxXwujaTrKqdPCdSQ7AFDkhT7NpyQUbHjM8WV1uJJ",
  "key4": "5yX38C8XLkaQtqyLqYJVCmS74cZL7fqmKEgAjSYnkTAfqkSrcNMXuv64jXRe4amoMFHKvtDMx9d9QM1v77tyM1Qv",
  "key5": "3WwZmva7wUg6TpUGaVzRWuxkGVAneswJsqiDNpYx5W3GN6McauXDNefwrc5HXYQFEoEWX2bmQGEmCif6ZMdE5Uwo",
  "key6": "5UTBHnpNQX3Ve9M5VWcKHYMV2c4RGL8KGpG3wkoYeg7r9gCcFdoW5aaWw9TsUVGHWCXaaxhdmrK5k7e4X7zoafU3",
  "key7": "5kgBjnCDb2ZQqBgRoLyCkw65rvv8GWH9sFNgq8j2FAsE2CmtiHKyxuRMkBtBuUnh7HnDy2YsVRC3BuSfy1XGtH74",
  "key8": "G3V1jt2XH5aB1mFtY98rGdDz7KNspXpMPWqmXfZvdomrmfs3uYi7DyA1cP5PKcBcbAtT8pE4Hv93c2Ftu69NVg1",
  "key9": "5ezTs4g1kWbAKxSWpoU7NDZBMybx2UsTQdAoNCefYn3jLU5rV4YEVrpMDhCJgGcWuTR9fZHSy1z8nxTvDV9U7hkh",
  "key10": "5QAcfVW3eqojqQCcdRvYmje3iGTtPVc66SnZ6tNQcjqjpZk5aQYqQ6yaYATuJjEbMsuziUWR5JBAo5msPWrzBdTn",
  "key11": "63xD1cNjBjWSQeLQUnfR11au5eozCjFV6zhjbzbFn6mpak5HTemNn6r9hGPz3ZfrZrmj2KPGCbGJiyfqNM21iBEv",
  "key12": "5ieC95TbVAvcTXvryoD5UB8gYJNVnhKA5VUxs1TwjvVUU9FV4LXEJMTe5yv3x8NXhoRJnFsdBSWsoZ36sahCXyXZ",
  "key13": "4eUrmNvmSNocTX2jSM2115wtz7ZLwYDT1GPL85v2Ki7DBMAXKBgxzPVPfrdxBnox2qC2TSooR6Mf7fXKgZ5JxDuG",
  "key14": "5ZX6hHuEDvj24WCUUycGHb5B9uvNXNsJ1q9xa13PtokQuZnm27x5WHVw9tBF25MCvDf8vzWqNm5NByavwU1FKLbq",
  "key15": "E7LKj7ctyTTEwszxgfTzNvzRcU8dNuPZYfX7eKmBWYo36CwfaGFwV23FcN5dKD3oj4WoZgxRH4YTgNhokxWtdUQ",
  "key16": "654dSLy7HMB6rfKMP499xBz9ozVwPfLyYqtJwa9SPCa1o9NE3EHxD4u8aScrJT89qgBDiWjEYDcAUtyLDvbnLrzB",
  "key17": "3rqVcLsyFhcfBos8K3CutBYCZDB7ajgWGTcz5BhnYSn2mW5ENckD8EFvWht3zQJ9xV5N5mrs9wMwYK2ipjrE1nV1",
  "key18": "5aZe1FmqXfbnMU36npfw6VZ4gvgoQhEp2sN9ZYS1C2gUa4jT2Gvjh4kKhmxPPpboiAF572jnK1zocpsx1NpJVNrb",
  "key19": "387wiBZqspm2EL4FMr6sXiR4xYXkHYu5mg8AYVofowqu2RH5XzHLpLV1SCEmo4CMHnSpotqVAUv9PUpchvt8AP3B",
  "key20": "3SvT61ds8dSaMe8BpExaWt1yrbTNnXKvqp6Ueo7iMqy4FEoXMMaAWuoi3vQETwZaVwofhsLnTyQ2TS925ZqdpD9k",
  "key21": "2k8BqPR2Dm2ZYDRKRHkd7NtQc8QKEFqQEZyLwbyRCVHoGNexU2GdmwDnM2XnNPvBuF2K5Zqmub6WA7H7HknHiceT",
  "key22": "2peUXVcme31fondWSfJaW2WDVPC39bPmSPid3bxT5xnm8AbBJ1SBcUzaVDcnnaJP3ZsjH5UCNybMGJjZZyFaWLPs",
  "key23": "3sErtdSGsbH1GbXDQViiQSbBnEtrcBwjaBZr1Zrbssri5hLfxqYYTSnY237oq9n8Hh8qcpCPiU9kPuCFRP6SPGZX",
  "key24": "4obx8j9pkqwLFJRzC4Sn3eBUF9WaUX5tCrW7k9XCfMa9DHr8XqPXvW3jEtzTQTtW28BxojhixYHDZApT8G9tkYEp",
  "key25": "3vEmphWFwTsvTovkxRZpo8Geh5nbXji1Q6RzgBVrc7R7NoQNWB5Wbkd3MnyEb7z3eRPJbRDQTLypKhRNbt6CRDg"
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
