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
    "3nJTsHXNPdWhdE4NJFC4rB9syDD6EFNQSycFuSwMR75qw8AFQvPiTCkV23ASJT2JbydS6uTv9NUh1nesE73Syddg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cme8VmUviArcV8cJn8b3UfoSMf3UooUPBPmCsiHWXVncbDPwV8JHYcGWZf8WzPLjd6z3DvgZT8QGKebppy7PC3Q",
  "key1": "5Qf7poVzfG7FT7x3e3SpL6GxhytjAFuj1T62n71YHUCxTyCZX8DGtrbQbM5dw3FgopPNUbX9vvnkCjxMk8fpzDS8",
  "key2": "4S5shP1gMYitSTLo9HWex7PFS8uWy8iZagJJEH8yUJGLukdqmkWgSTDVVUPNnUcVoZ53TTPxQzoCAcjagEy6kwEx",
  "key3": "2EsN7ucV15HNybx8oSYFEr6yKcK1PS4A9ZsCpcSMPDP879WAWPkZEfUKobr38ZhvLiqYjbkwjD8j7mPm7r7wz65x",
  "key4": "3joRrLkrnLjXwAahFD1zRrecWs4KUa4BKbdULdxayQDa7X8vfqUJ2p2pVWnDRRMQ6dCMXGpKSCmYkEPitNsm8Kzu",
  "key5": "3mokEC56XUseDWPe9CFQQqFuuwi1t2vm3DMkL6DDPShoJYQ9Yj5s87YVgqjk1F6ppcb2NdjjRHVvttrA9S3QWcsR",
  "key6": "oR3MiSZ18yzBAJCG93yjeUj7vbdNL7VfmCBVniytvgyap8AT8Qqzsqc8znuh7e4gVniDV74poKGukmTdQc3LQJc",
  "key7": "5HYHp4VuAXtV2AW6REdJgFJqvagLJhvjEikXTqYcv4qmyRa3YM98BCf46Fxsk9mhgEx6qK8HYP1T1BgQ3BSV5J9b",
  "key8": "3nwaG5akDt22jyvGTxo4PY2ybAbrTCgngPDbtp67tz3pe8ydKaFL7mDKU3jH9cL8DfwDMVxKHTXTuVYf9nP34mXU",
  "key9": "3QNPdVJAZURNJhGjoVeMr63rEMu4NLRAxMNhrrYUAdPVHpkKtZRFqWhKkdKbSCyS6t3t7LpokECq4kouzKBQB4v8",
  "key10": "2ZFiVGThtHvD7L9RJsf2wdKJc4LfKNqAdiSHgRCm5eSKLV4ZioVjZGzJCsj8gqJzrbJxVvnXWSQQQ2PkuKqwFNEZ",
  "key11": "5cge6WYgGjYim9ApNx8uHKqQsFnhX7ge7nmvx5zViX6GfCjxfsJwEbuG4V4SX3puEtiFjywkUk73rc3Rzc4FUjkN",
  "key12": "WFMUw73iwdVkBE8uwRooMLNiUQYv19TAz9zHcgHbPh3DDr3om8VgwYip98UPwujRmEQj2hohq8Ax8d37qYMLFQx",
  "key13": "4wmmcwtU9RhQpKxmvMoVCLZXQaiGYmZhsMKWuA8L8emcHqWxsCCzAfB7bL6fRMBqhiLASw68EeuR6eKAy1WaukWy",
  "key14": "3fGJBbi4T2MmRJ1JfjvZHjxzdmVJHPt9tBCyZJ82p8Y83PXMXjxf4tYRVfWcppveTbBqvbcsBEAXHmYuh9nmPwtb",
  "key15": "3cunK1WLyKKLDb2bmZ6j65aih5mVb3Vi7EteUmHg5GvnCB5MhFCb3adkkkZgcc7FxBgBxq5SXVFCHbE7rJ1ERfKP",
  "key16": "uk2fYzoV6jDznFtrxmezExRFF6ZUpajWeDvtk2c8WKWxJ3wMLsfXbrnCequHbcsjgW8bYaLSVgd9czpE3wqmrTQ",
  "key17": "51tWBjwcccDByvYinxC1qKFxhwH8246BqzMP9SV4kpjX732gQ975XaMBDrXWTVVLXBX6A9jfh12r6fKWW3Y7Kkfu",
  "key18": "2ncTaveMYoGMizPyvS1Rqmapixn6zwgbQmhQKHrLzS3vZdC2MsDwAKajb5UogD5MML95RnUN1crYd4KTZCcKk3fj",
  "key19": "3t153WcfqhFeAmHuuPriiMUz4nFbZpLCqwSpXESekb6NA4JkNaeFcA9heK4H9e8rnnT2CzKQkZKC9kw16KNy1NeB",
  "key20": "49RoKoBbUbvoBJXPy92m4SnvmXe2CmQv5tdSBsnfxntJiJV24xFuxJz1WBnHzRboZ6g1EX1jEJzC5WWoefCLZS7v",
  "key21": "5Xo3w3z1a5VUYUwsNcFzwdKDqXSwG9i9vFUMgkpop5wMJVYgqoxG5qGnRwA2sczoHYJPxNAXHxb58ivGq2GuA98f",
  "key22": "3tq1Ue6NbqS5XirDMhq6cAp8frx5n5pwfeB7Ah5Y9MRtitLQzCyhAprzoGhR3kiRsJxmXzmQwWbbtpQX8AbnnFVo",
  "key23": "5MdtxGeTG9A1DT62yauydCAGQbUE4hSxJDhiNoMppeX4k9dNy6ea3tsVtaEmBjSSY6yrX4xFLFW7jUT15ixfhJ1i",
  "key24": "7pGZ9wBmPAfpXmotrvjoYRxYbmGvrt9pytuFqDSwFyrBUxbpBiFzzQ38z6uJDn9NeFpYNwnaXkuM3kbE1a8t9cS",
  "key25": "5Js8tdC643uzwWgqCJMmSz6szmYwkzwS4BPz3z66YUo8sJgHdkzek4jmDP28b5dCXGAQXXnadAPzrh8wteZ2nkyL",
  "key26": "2teoUE1M9pJb3QCM5LY3z6oHgS5KzKF3FWbRrRocNfus8YAkxSE5efZtiychgqnhvroZUNoLUdF4AHUiRaZUbvtq",
  "key27": "4TWjh8UBVWaqdFGSgaF7rsDceopsaQcr5mnHgxfTDK1PWuVLkJoZyLDysPrenLWcruZj3VmicFJgRFKGo1VEgAbS",
  "key28": "5eo5GyBuZyCpTuAZDLHajB1FJMo4EHpZdrdi2bYUyBnmuWVADGRiBT8ECnJRvv3EVECS7ezxj8obEqr1wzbiEQCV",
  "key29": "3prPFRw1z1rutiHEGrTxr8imu2zPCXXDGr17H8zL2v4NdbyJeAbFSFH7eztJPbwHFHFDVEdHpJDR6noSnTYwjicp",
  "key30": "2H2yAzikb7skWwmBmRfVxUxvfGdFVi68oZ5EX4y3UvuSFwhGnBE7tyE9PHfYL7yrpvJEwrXrqicziwjAZ5n7eNUQ"
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
