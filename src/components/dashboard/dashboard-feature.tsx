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
    "4diwPvj5mSeKK4ZMDpdXnNDnk4X3Fmqhwk8XP5vaSU29kDKPUrdM5P4fxRyRxdWwvfxnmkV433KBbeLp1rZnHYsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "445UHqq3ZADWC9P7yVxrZVxBZgBFXXQS2dREB2ZLAFy9uGU7mP1WTjNzquf2G2pHZc4UxphjwBN8MrGfbPfzBbJW",
  "key1": "2oUtVR371Szb5id1K618uZ1nrBULGVU4o4m3S8XsNcGCoqjPP6KAhoHGB34QQGPhUnVhUcWeEsFwBqoD8rGWzizs",
  "key2": "KDsZ9rDNNzY7c7BwqpygKWWM6sSiEiNvGpRxDi8aYtoBF5RSTJdUmWSTt2vgWTBh8eRtXuCk8Tjz7dSLwjz7McL",
  "key3": "Y1XywBh7HwXf6y4GMcedLthHJntaRpCJDeq5wyhSmwJyR99NLzADxDMmxU6D9VgxjQRcFUFMRniVr5CiWSrDyGs",
  "key4": "gx2zXxNbUsA7sR1DPXt4DdQkh1tJgW9tTxWVrRX4LVgmVynZEjY5hiWs5f7SddJkuBEtSU23WCFXXUpL4j7FSCc",
  "key5": "4TtEMQSZzsZPLbaN58cpinJiaiBcZo7rSe3j1CgMRd3rWgWBK9EZFvcefAAWnswBSgwmTB8yRSXyCn5e2f2vMwPZ",
  "key6": "3aCctLfBEnb2Jam3tZJfek7XAzUx5Na2vKQin2Qur8Uf2q3YVXsV9ZTPVLvAPKLCKTkGBmzfJMFXHdKyZ5PBptdP",
  "key7": "2kqiu2UdxCgZTonB3sUoeqFN7hM7aZKn5A9bj5MTxFAegSWztjE1CmxvaR6URhRGWVTxuAS91WAbZaYaribEsFMc",
  "key8": "mjMvYBfAroBch72NwH1K694SJ61iAB4vKckBbEqAuKcp2CaYz5mBp9iFs8aLnBg1ge9S5cisLTUAYzd9oVSBR4g",
  "key9": "2brxCeAfk8f6oj6pmkXTNZ6PiVG2DfXSYH8oh4cjyMn3y6x9EkSj36qGAV2gCC3bUBvQTs6VhSzCYwtPf72JN78y",
  "key10": "3oNj3FJyFUThP5FFFsHJtubMZzu1dvhARCWLpCRu6HKLZZnt8koiDvNCo6fNvxTMEdub8t1YwW2hPiF8pMHNPZTr",
  "key11": "yAX3dyL2nvMEpEBHL3f9oEzCQxF1eY73D32TBGhKxaa6TdkHHAEGF4RmwVvYZqtQ6ZnVq5VM37E9f5w1LRXXV8X",
  "key12": "3dzSSoYZpjxJBmkSgXzvPHCs1qTdN1QfLmfyyHfxZeX54c3SgHukFBTnhRxPLD7gvrysqMApaGTCycu53ksWYswy",
  "key13": "23twNiaeN6D4dHvTA6D8DXy4GmPCJSkLBvyUp82PVUapqtSgXrrKpJ2taohfRhK12YtboEc9xy1BK5Nhhkvcm84S",
  "key14": "4UqdMGFNb6pcvGkh6Xr7mXSgctpdUge6zGWZCmBe4fJfqpGSG52fipLYPbkZxX1byEpuJr6eaE3rw8vyVzstGZgK",
  "key15": "3ggVsL2h9umrtSqiCQPUBCpVzHDy36iJ3p16ZBc1MfR7h7Z7fyuMaxSV8P3FD6npMM4pwRYzvpBQMKtynKJ6fK8f",
  "key16": "2k4Br2TdKpjhxdVmT22F7Gn8cmHvTpnEdtL1YqG4DXREncFjbMVTx8drtymyzhQ74CugCfU9ehCrECRfSPTXnsWp",
  "key17": "51UzraSW6njw51VxMw5hfDTnyNVZicgW4JrCjuFMQR3rbtR5hwbJM5UFz1pRU3icbHULVMouBp4DLQmbJbDbkP7y",
  "key18": "52bkimoZEScHkc7RAYq1pStjMCDF8VVh5jXBUu4d65VrmqsZuWndzkP5dT2MBKSG7JPm45y8tbESGQ6TQUY3fmNC",
  "key19": "558beZpv584FmrUwLfEL9M5ZgmaJGQiY1212SnouDDN8cWqPiG4uERBLupTtqWHuSY1616FW3GM3zc6W8S6DBhVK",
  "key20": "2EACdoqW36abVxXuzM3ikugVN4HdogwsKDS8H1zmv9s3MZmzxB8FDK9KLvwFZC9faHmAgYR9dXHnW51ECBFVVVr5",
  "key21": "4yHBoz3AVZKZ4GEkcuyzNzavvT1WUhW3rtU8wrKpyCQtJ634eH8zGKkNSjWpvHgtvAFfhbRXLV4ZAywWzqYaZXZ8",
  "key22": "2f4ijH6H3RBdPwn26BMuVmA83Sv5hemJvR2pjAsW3sBwPNJvv8KgFe8YE2585NC2LQNGbFXThdCLu3igHUMLLckk",
  "key23": "2Q6myFotW6oBQEzYjzsTgoJo5syc6UbiuhhVzRWJAjnUzQfHs7Z1fr9H3DPe9iT2w7fes8o44qLQUySwPw9ZTEo3",
  "key24": "VASHZpXCxShna3Sn1aTkyZkTCf1QnjuM3nE2mbL7oyNCtp8Az25r6pRCBE9CTpU5v34Gj2QGtsN9NDKC95mQoaS",
  "key25": "5aYKRGXhKeLo1BhMQ7jXSstfZ2Ccnp4RieGnPkghCcGjU7foDJR6cphBBgdsD1jETQdJnrkmC2M8V1CosCYvxmAr",
  "key26": "3FjefNxQ7Ah5aSxx1zzJdVkzTxPR47kcNuGZjbJbhe2r5FoCB8sCV5WYhsL95g956QDELgxEbXgZ9hP3WrbFoEU4"
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
