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
    "YsM8itaZ697D1Bj8A7yL7B6xHrvZN7YmSUF4sdyJcCy2S8UeK84cADRq2VQm14bcGE75QHygz4U5BiJ8P6X7vCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JYt48VPMij5vP7wjJMycvsD7scEac5HyzVunbWatePYw3fTzKZwDBT8teapb772Ebk1M5pGmxCUMMxmJGG2tg7C",
  "key1": "58yRFyCoDif9db1WaW2F5gd32C8KUPDAPWbGZvznRFrtbB8F2uzmHaZhHTXx5LXfQW3Tj3akFxREDtPBgTqMV39c",
  "key2": "3dCU4kXcneaayfDCFQXavuDpkfKLrAQP3ANfLbGJmEqFJ4Ya5CLVWLFYyXiFJaEjvsFcmHsyi4omQibL2Q1RZBmS",
  "key3": "51nsYUkpHuREsGiPqdmCcRxpj3W32FJrikJswHkPW9pJqRorpVLYCAf1eBS8PaQuHsSm3U1nJ2Ua3n4HCxCad7WF",
  "key4": "5Tz2s5CuhxeVna3utM1osgqQ7gdHmmBt1r1v1rccyQXP1kLaGdbe3CAuHd3gp9RQdHvTzaEv8nmAu3JpKyuGYPR3",
  "key5": "3o9rLKxip4BQZiKsCugL9DFue53AZLVKXVgX7aJ8R9hQ3BNkX9E9wFazbsnPTt9Wf2xd9W1GULumb4wGQ1SEdoVC",
  "key6": "66wPfMvMAGwbL2JbtfzkCnXSMtS4qp9JRdH2jqEKb89KvushV1A22gHY4rHBLhdv5mYWBzib6HQ16w8ax5pMXdAk",
  "key7": "5UEBsX3QNzAQoSMweHVjo2LffLU3Ywt5hjnrEFmScVTuKxKaNPDpYaEfRapuppQg9LWEvGXWKyBKGj5WerJsGevC",
  "key8": "2WGjNBtPaa2yPSZt5Dgr8LLeGgwixL7GD1AGFGaHxwcvMKvLSMeZZVQeCprjsDnZp826cXnj22XE8hgAyHEyWVRx",
  "key9": "3ZVzEXMoJNQBzg85daSrRcnugHaJxNiRpCgDwdrS9NoKLqVbFHKrse1UK6JLiyT2QZDFQ9LFUwxPKzHzahSsoJG",
  "key10": "w8AbY6NGvEvhtXmCNk9djKjK4yQK874jExzH7Rk19GaDwJ3sEECeqXTTBKuMRri89AocmPk1cWvBauGVhvPGaZA",
  "key11": "5FAguDi3qr8xbdZMSQVJDgbvQdzW6zNCRcQRjS2jXrYMDk23uSRJXAGg6zzLVfqh4wCQwBvfLDfxybAggtQv7DeC",
  "key12": "goA7dX7VfYa6hj4uTxd7xp72yTtLzgUNc6EqHzA7AZULMM5k3umWH1PubysjYMx1CDsjXmSz2K8fAkbnSpxoU1J",
  "key13": "48DdS9f3ipPMya7skiM2C1JR9ALecPdRrSjUJGU2G2yLvaW4nPqBX6qdd7N7TdUwyxvVsuNrqfPMEcb8yUmxYy6Y",
  "key14": "3Vi6X95Y4K8QwWHPsDscsv52cWotsauww3aFAfkVvEtoY4iwohxVPBCrMq11C7Y4hz2C9xEFQwoBzZUHKEKom1Cw",
  "key15": "53YnmnrFLrXouWB85Qek3fWY7Wdfoua9gf67dcc2TuBrEhber9u6r4AcMEETJvCYheL4k3H5PKzeM4HqBh9y8Qs5",
  "key16": "3NBu4VkJvvQMVqmxzGYuG589vrz3VaRS7uyp4PoVXVcLPKTRfQCK9PXzPKWUvGnPBFGpaDmGoY11inDHCA46V8Rk",
  "key17": "2bzocwKfFf2Vd42Qx9niSySc9jYP8KfEnH513rgThDUJhAXGMwhZ12cbLzFNQ6C95JcuAgYHRUdF3epAwL49v4dv",
  "key18": "55yPhLLLpj8fjJye6BeRFxiKDdksG88bvE8qoC9jXdDQD32WnJQmKNhbyjkqdCJTz2tHCwKt8mvxmnzwYRNURAgX",
  "key19": "5jyKd8E2Y4CpJE2U8tUynCT68oqRJC6HAXujRTRCHP88kEThibHYZGFFDX6P5HFiCNKH3yTVEPA5nYHU8KafxUVc",
  "key20": "4ZBWcn718ihM1tCQWG8VHjA4vmAaiyDHGjmkjX9vwwZnWnCB9LNQeWEKR5capw9j8mpB6cykWALA9NtihWYuKfP4",
  "key21": "GD8KM9dwJ7NrquLp1adLpYjva7C3KveMdQig3ejmjJhodJ8U2c8Se1KDXpjjN6vEm6YMk6UBZPDrkfX8dGiiLTS",
  "key22": "c4tDizqcagYPoVdtboGtke8pUuCJFSqomrZR4fmTzFDfUVdB32pBNvayCkGDr4HBvxzUWfpF2oJ3N5VgYYgwxST",
  "key23": "3ipBoYjymNwqr4NQLVQBBU2N4yxBKXmidwii5ZhaUeDt8BH8TVSsfYPypjAEq8s34isTVw73rTaQTzeE3p6ENZLw",
  "key24": "edaubXGRahQVz7YS3j5qHCX6aDJ1Qh4ADKLcJkUAKHPZMQFTk2fSFrsFw1jyFeZa4ufJZqS4zGiJfLHghUH7szG",
  "key25": "2WEyzEGdQ52MkWTkAntESnmeFMCFdEq6ioKMAu6aqiza3SG85JVHwqwWbYU98RtxCSY4qPyPsZsc2hKD4NV2o36Q",
  "key26": "kScbMbHoirWj8HxphPX4sm1cXnfkRF18j4afAh86vfRbCep8qXUqtEa1WxDz36BDfj8cEfiVJcqpSddUXe1HunU",
  "key27": "4JMyf8T1mJfeysKRy7oifoi25bDLcrNeWEtrY7YD6pu3ft9azAJmYLUNaMdKeKuZiTr1vwtuNN38QNYFUtuFypXv",
  "key28": "5x3mwmevbwh16PvaUZio4XszgJFKNGt8KCuWejxrMmgnmhEFg5JRDU2x618E9k1e1Wipvo67pcJqFWKfMq6FE1TW",
  "key29": "4F8HKQYaBC4mh9gpBUYteLncGvTjCSjKQzoo2iBJsEjuwZBfFrixqFrR4gxKBJTdtZJneSRdZBDjEuM9B1VARADp",
  "key30": "5hjN4bcFa28YYCcYkFpW54u68WxFurftCeaMXWNZCzXS39T3VJpc9ekR9AjK6oxUVfaztZspLxYbHYujDjKqvBcS",
  "key31": "37kgMGpX5pNW6YzCyHDWVCRcmnkbQVLedSXNRU1sYaWkDhzNMdC16qtf1LvDN3aLZra29JDGb9AAtZn3ZgmtDTtP",
  "key32": "4QMJ4CjMiBThTMfRfmkJvRYZUSscsVLrzk6M1guuYS76Csdp3iGuUerJTpc6DewL4SZxgKST16F23R6jhxQYESJH"
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
