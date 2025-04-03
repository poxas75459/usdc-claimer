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
    "WJYUuiyKVg3P9maiBTemwyi5EESv12h7YpDoJdDy9UaA77EWEET4d3MU8paJLViQvTnjVd57tnsaDF2bDxUCiAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jy7GQ3h9Yo8vN56hddcJQsonuGnPxp9aLFKLLWYoqjTtgpq8m5jorhcjDn8DKDkKzxoXWSJV7eAXCMGg8LUDzym",
  "key1": "5eKqXNo1wac2oc3nPaqyVUpVuAJEpC5fUDioXHt65Cd6QwMDVbbEJqC2vcUGv2BW5xuZVbUgspeA6WyCUx3skbHr",
  "key2": "3CFg6fBiQGSf4hRZgV5qz1g2GBZ2YSDKdpVPHmt4jB8imjezGMuc8shXMCx8jxVUUL2TGahmEbjsLpaskco2F4R3",
  "key3": "YLMAmetdW9Uc4nyCY6ULDVqZevh39sxC6nXC1M1D4Syhpua8hv5Xu1P6kaRK85r6UgYGww6S3vpfxkqVB5AZeKZ",
  "key4": "3ot4kumX4rcsC7CFbCvaEnf5Yx8yy2m4AxEErSgfhp1t7ChQ5DozQAbi4Uc4eUGYLsaGV9bak37cwo1ugaBG1anJ",
  "key5": "4FHemAWeTARszBwGoHwKM3Le4QGfQN9GXZ6kLaU4HhLLovbXswuav9a58cuiigvWBELRkX3fz7t9UwFNyxUiEJD1",
  "key6": "4m7KQhqyekA2uzW2wckaHMzgUExiRfaoo7kRCuv2zQR83TRGgxHBfvCRt2FowiBBVrdVxcnCfutPxYZ5wTeYWK4E",
  "key7": "3FpCvMKNA29nuPzq1BuYeWzAsRVb76sUoPiS1bsLMauWkQ8HUsnBs3KVhFdKFbuSFTzXodR24LHWagJxVi7JDKd2",
  "key8": "5KyT9k6mjNN6KN4ccjMhzbsMXJF2SDE2ESXwL9eA4nJzA2pU4sDVxDjb79sKuyRLJiwupyUVUbKL3EUbmEvNY6Nr",
  "key9": "2vSK3xxFDRCyBw4wZT6jfGrqvuEVMmsFg12WNJrDEuRRxK9ETr4NEWM9Wpe5yxX9sCdWeeyAhUsWXpTGhYnwPGDB",
  "key10": "469CWBpSyTk2EYJGbqd2KE5ACjPqmtCNijE9mVPHkcu1iRwLqrYiv2yGu1Y5rKow7Zgf2EYa1DghS1vGREpYSKrb",
  "key11": "4HGw4qrdsFtcGQBYKLLZrKnHZmBTPGbFG5UfcNmTcGn9KpRHgio29e56kGnMZ1xgMcj1mJx5xAYEy1rbHuqLVnTY",
  "key12": "5i6tSqNBCcMygGcWhrn7AjfcvdTvtUF7Rw6ckAUd2uWjBrUH93tHZEymn1pWcZz2krC2rMRiPGMn9eVvAP6HgMLu",
  "key13": "5qZWhRRTvfo53cFhdYGKWjB4bkGMYpDyHiSLmhaJa1KGfMUuo9qxHuH4adGBKEVVj1aiw8rHdvWGDgN8pPKq15fo",
  "key14": "Q65kzacXx7bGwqwDiFKwUMbmb7czqhx9bd6C8SmFNgxYjfDeUByBej9J8kpeXNytLmEvb7sVkBHjmuYG7C86U5M",
  "key15": "3FhdPTZidLsrasoB6QAojLzQa3CrwvxUE8H4sAo9ee4KZkBSYMxpmrTqMQBiJJhW4qr1Z9oKbebM7UdbdMms3E8y",
  "key16": "4Pb8Mgr6PKSAqHA8SVoLM3hVz5wBRm69s23QNh1PKXXYoRkjzkryvtmAnpoFMCDJh49Uc7bo6HafC8nATkg5xNoq",
  "key17": "x9eQG8Fq1V1VcXEuhRzX6T7Zcu8gh9SW2BDXfjn14xJKJ6X8SEEJg1UTDK5ENWazD4Mu8G5PbYPUQFQWuSeDvES",
  "key18": "4pKpoawJvyUX82vkk6fkHeeiGtcUd2opUtijPAicqzBJqCpbu192zbU1FVT2AHYw79UmuUKWkfWa6wgb8wTYa9rB",
  "key19": "4WNoFyTjV1wDcQDMPNzoRbQj7VECA835QksVC2XVfkyEBHeFH5cSfZXKaKqbtVMDoUXp5vkBw9uHepJsdcRmoGGg",
  "key20": "5aGYRw9JCYAgGL6AdqmPeNFsYByoAuaDgzf4yogDGXfH8KxWBwgjA5pjh1rYSWsics3A8jx9CAo4nLX1RUALc1Mn",
  "key21": "2qe13Gqp1fawsE1Qf8x9WvVRrtC82DBNR92qbK2CZ2GRXofA1CDPwjHDWaebKpffzqCDWEf4yMo5B9JAqU4C6gZe",
  "key22": "5DgPvYEyLazHuZqFeAQhnfwgTgBWRhzmdRPku4syfPGbXeEBDAKt9fgSuU2EepqTSaA4hLL811xKqGfqjL65HyLu",
  "key23": "55d4jiGvb3mDMPvdYRdT85MgmVDdBXQiubnThLmKoYfi8UqJLigjCC2vye7U5RakwvzSUifd38XzcWtHCkThg1Tp",
  "key24": "3WYiFW1XxEwLxJMoRiLudT2uj9u4a4vAkuoM8GY7sa8KDwsQYoTgojH5sgnkkAuxpUrUH6fksxhuS7YTxSbqn1NG",
  "key25": "3P7gpwYhRjC38WB8k8c2SykYk7Qpxhfa3Jyi1HqmGXKnjZz2fP7ZpNctJKsBPuvSKXDymHjoJDumCUFKyQc3Spwk",
  "key26": "4kLAmUHXnyMNXFT2E3jk3ucnM3KU4tYenfEZmk6YhN7bP6yAophjGojBdNU1oxk3cYb1PR4xxYvF9uZY8aeU8d3q",
  "key27": "4ewdbAkXfo6KNNBP7EMB64rUTPmBv8yF2bP1c5zgJkaZ3EES9jroipkvYjn4zyXvodb38gNF9GWJBtBRRhhNDKQM",
  "key28": "5fWj6H5h1trYz5grJN9Rrtoj5jfh6YwL7J6xFRJRY322JaxZDcte5wmChsTo6MkAvSeX3PxhqETgbAjUWejE7jyj",
  "key29": "2j12T7m4YYDHpzFDLgRRSpiq7hpk6pGT2PkEyTH3gmg316dYSudJc3kd8NANUuFx3TFWVcRvJErpjq4serYp6bgr",
  "key30": "53PDZ18boQPdkUYJeXoedVhboTDksKQccFAUTvTBrTnXrYbtU9AZwZp92BuH3eA5GGQx9PUXQ2ViNt9pLmRhMTK3"
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
