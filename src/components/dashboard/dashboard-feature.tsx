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
    "2mZkWwAedd4RibZNB2xoZ5tyUvKbnc9oc4q3bT2YBprccxyvhTeKsd6mGiQ4WGcM7VhSvDvsZfRgG1Lg92p8s68U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k6jqkt6UKCimnN2xvegTmLsnDu5VDf9S1AkhamejjhN4KhDrneRd2wE1YXo7ms28bqnBQLcZCEm3WhyyEQgky4E",
  "key1": "4BxzAfE4nyNdfyEgLpLEtGttnnAwknDJw3txS8BKePR9ruHTmGNfjp8urCDVEPb48FX5mFsXV2Tr8hvDSzJxHR9y",
  "key2": "5pcDA642mqCEWvEkwRCbYSJPQKpuRpPTYjQ64bdib2P9eNWArG99oaHsQR24tPeNDUgABLWrKoZUqPiFTr2DJWtZ",
  "key3": "3n5Fqqgf82vNeRyLdqDqFQ5cowVLqbHaCSTPfczip3rrSpz2TqrPkzB1rUgeu4PFPk4bB7TFTpKnHu4FQFTiQh9V",
  "key4": "4TMni71gujHashiVt8BBHuDXLqUrfvjUQK1YLseowqmGggBScAT6V8kv2zWWKiaBpGAPpphUxUfWMpg92ooCZzQt",
  "key5": "5vk82CuKPVHkCXXvoAhrszc7BSEMJu28Fo2Vcd6SYwv3g3jb43AghMbmHzHfzQMm39budToZrVemBcZ8FRnht1Bh",
  "key6": "47AA7mYrAUBvqjN5MR4KvVeZ5for667crRDNK8SxqYELWBqqUScmf2aF8Mt6424kK8vwHv3NUndbtvc7cN3AMPyj",
  "key7": "9LddFeJaba3FFgbSNNM2ZjWhnBufHcdqxQDJLPhv3LP79pMFG4w8AhB1gEKE8o8PKQnQYRcFpiqhRGjb2xAc138",
  "key8": "4mE5XbnMTvqzi3UtFoaVwCYZrXyN3qvTLf947BHWgQPUvkbgnb4q7FWNzhFVJXjTBr1wZFXf7zgENqhrDypVwUQp",
  "key9": "5c2DzyEehC8igHqJrBhB3L3Binbfh7CUbsfmrKxSDbV91p212QPD64ZTsbQefoa5H6GBfV9TkL67CoHYpMjz662d",
  "key10": "36hizcT5F5f89Yvdq1xaKVdfLRgCfqBTkw3cHKQmvMqjaxkitDmdTwoTQWLwTEwHDV1oSwh35GNs7Jrmpsde5ci5",
  "key11": "4uG1TscskGFPsBYx8bvfR2kYcf7tvXSNbS8nQ3BXRcCZsTr86DTQdXTzSGAWdo1Kxp9ToxCJptJnCBo5UwfuB92G",
  "key12": "47evMKwBZUpLoHsbTcqvjUikD6okxev8XemfQV6jcFFCz1w9CLbBm5sDWrid4Yi27YnggLKk2D3XTA2XmGRFrvKS",
  "key13": "3nUUwxw3N4sm74sDfxmQ1w2nKv47kLXXCL1f9JrqFZ8fso4BsUx5icZZ4tW5MJUWY2LXKkZDzvuTix5ZpdFCLYBZ",
  "key14": "2xjkhd3aLAwTAZH16nkZ6a25ELiD8MueoYiEyXJSwRdyssSubcCqs6fAXdYLSLavuBt2GkDue2RnixChuQKysKJx",
  "key15": "4LuKhngNigiZVRbGepDeyNxdxrEecXTXMGap5iiacrPsHuNZEKfyVH278Qe7mpJTkambHEZsN3jjaTkb3ynmRV1N",
  "key16": "48Sn9EGx9FX7gnJYLwoF38v4yZrq2gsGSvAZQ95FGeZRuh5wNp3qLvDuvaAYLT7q6yVfkXRrAAsAaNCrf6zgrGo1",
  "key17": "5oD535TmoHa2GLDVfQfkiwfJpeFbHuSK3dK8aduBPGZEwVU8dEHFUipZkVQ1TX2iC62gCcV9yRgB8mFXH5Jh7vKf",
  "key18": "2fAGmtT58uVr29NvGZymCpjhQQgMKQf2vTo91nPotzLcEULFrrrJ5RmhQRG6m4hJFgzksxfjg7f3f9iAkRbNZ5JR",
  "key19": "2fZzEpLrZkQg6WdvHx4ZdM8R9yUKs5L9kjEfZaaXLDxfqozs9vwgMXaMhLA1m9G7u5ebZdEkXwbgs2nRS7XQG3KD",
  "key20": "66hf7LntUoVDYiLoW5Lq3CMS99m64i8egf2HeRhEa1urYiVYvYx922ipKBZ8W7TnqxLWcBqcNhkEv4gXuPHzh3FB",
  "key21": "bFqZB7z4VspZrf2iX4112q4wfm3cFD7CDWcfYJSoDdC9LzPw2KBPbUsa7riKVo2ujsqGfyy5BusFQWhgGzbK35R",
  "key22": "67GAUKRPCHwC66oqqTSNd47nKrscDamkaWJZKChEczEWXs7a1nPbpGTAkF4W4sFggH5SY7st1Jrymt8stzJoYD4z",
  "key23": "4YTxpFMzUiQ22JApzziaHNfxfqWJdzkzqbDWJixViBxkbPLK3YC7Jzc7jk687zwBZ6bedKjhLxCkn2FCPXzc4tdf",
  "key24": "3rHrCfFyXPE6hRWhRWujEenULizCV1Gwm75zQ3Szt4QM7afFLNE7S7yaXZRiYGoMf13VmzVpULubeXVLVaeTPF8k",
  "key25": "2omXsEF9uRibD86YA5t4Wk8bH3YeC6BfKu62EwVftEdXbifUruFuKyPNk3GKwCGQWyoRPxUMpqjyvpNRGS6pD3rU",
  "key26": "26azuhMAejApTUnyhtjsvTAfKj3WQoiJdsJM3fzkAXVmuW3ajoEYH3RfbdH7wYnYdB9RdFtKoyDsKh4sW2tspAJu",
  "key27": "5Tth6dMy1HdMw8moYcUKKczzwrkJnwi74KK2foS94ktA1jVzaXCT88ExVgc843cZmLiYeB7Z3bsaekPbzjLiyWgD",
  "key28": "3qVeGbBzfkPiDqU42gQstgu7t9vyaoWX8JAC46nNqkyj2VYFuQGTFVS42sJpJtJwFieNRzH8um9ZRG7wrXG7vAM4",
  "key29": "2qhjx9wQfykjBPULbY4HRZUJN4cW4tHCSh8qG1dtXGH8YQp4MhrMRJuHyN6zcCyTmwU5pciE4id55463pxMKccao",
  "key30": "xYaLDEFQWrW4d9mkK3KLcN7QGWgTkYDqGVd1xk4UhY8trKDUmxYAkJfFDQWBTQziNxCzMiCS7Dth5LpxN1PGi37",
  "key31": "31tL2pHAezChUrxWArG6fcdWjz2Zm3bc1RYhtGjmxgVbeQCFasFAs7VEUATtBsZDYuX38PjQq449HAZoh8UpZrMX"
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
