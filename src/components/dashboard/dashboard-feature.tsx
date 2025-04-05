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
    "3hEKuoRnB8FmFN55tNcTV9iTpdLbcS1yWNRoKFdqZQZd7vpg2n4DSz4f4hf159mYgRyfK8RLvEyLigJ5nEtPRD7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5srDx9mFqN1PDtbeozBNAtZSEoztKsvWJTcUBPSnYG6bsfJ6iSehx1p2wQh6R5vcArXHhxXQjw8AkjYXMjFEBCYB",
  "key1": "66Hj74XpN1nUQF1g1ft7uqzsuyAqeJrd8Qgupsb6cwwAa6wUncUFK9s2Q7RwCdP1hrqaE2TESE6Yq37FCwndDPaT",
  "key2": "4KdbB7Sqy37khWvmrAqHu1S6Dq8WqRAy9uDeSLtvXL5jSCNTRhsZkUPv91AC9Xzg7V8YZYa7atkV12ckJa33wdkX",
  "key3": "57HED3C5DUVhYVVnpyWDcQKmb1sYmcnQeRQjWw5JAsjwPt96KHUdbj9LqGjfMQuf35dp8A2q5895xHM5vjufYMdC",
  "key4": "3wmKutaVtpJkVpDz1E7Qr3NmNoE77sNeZN8bs2EKz82nGCEjPGX8zE3M1Q2gzndGdF2on8PbVHhzDoEJ1hfbWvC",
  "key5": "4fHAWMf4dcNMQg8BQyn1Luw6xePHNvyVHpByFvaCpFmoenqkk8CiWtbnMmdtjMsa24whjgytY1pZq51woWSjV1cv",
  "key6": "4B95qvkZVJfHXzt8NibkgLtXiTcVrNRb54FDG4Umi85rZ5VPPCnwk4HPttFPpwatNDhMYbDCCHoKYuXM3CwwWY5e",
  "key7": "63f8m3ch7LvqcGLiXfWHmCJZ5VswV3V1mxRYeZcaH1apACCesknMXLuthwCv178k8Ak5j2oSwNBeDAX65hXLdqTg",
  "key8": "4iYpaRYyJMGntJhb69vcW3f7ndwZaVqRTjrA1CZaS2L45247UTLuuNMBERMEwhDxg1HTQpQHTwEUBhywT8aZqWaU",
  "key9": "zMpyUyoMZyUbfSubVmirMUwtLdVjUvoXw5qZgFucY38VhvLYGRXNrKAdtnKaxQzdjUiCE1aH4m1oL7dVsYQrvJL",
  "key10": "48Y4ZpNCgsMkPLneDaDGYZMrdPGtCWyMaGfQeai33jU9A4VfymDzCaQwHAjst4pmbfkXWhhXCPhBjWrpkAJJNq8p",
  "key11": "3RxebBmxtDKsxUTBDGNs5QfnUc9J8HeyuhZf2SksHjhKyBBpmP2dpa4FJTQktD9eMYUSrs3j7YXFsLHgU612KdL7",
  "key12": "4barZKy8Q6W3joUbBzpHkbGUkpZXFcfEaUMLDJSJgtww18qqcJzXtatEfXUrCkCuPuVwb14Bxzv6KdmYouXVEMUo",
  "key13": "2dJ1u3HtEL8J4rGz92ChVFakiA68E6VcwHijLqKEpUubYGgJ4aD8L4fX7czi7dTKVoPD5eCCxjWR613hso8VmHTu",
  "key14": "4aKVVQiKrLLzpdfZiFNheZrMySYzu1ChoJxEZVciPGDPbwZoCnxKBdXbMECGZ7S32tPwM5r8YKvSCZyC5C858sCe",
  "key15": "TXvxrp22JqPRLUoMceSvTSvSDupjmAtqYQ4VosyoUJ44EtpyK5k4b6uNPk4bVMvM7NEWHfQe8rgMfuZFKQ8mdhY",
  "key16": "5jHnaq2HyqWAfwHLN3bedoqdvUnUKvmjJcKbeexqxPsfZ4v35UrhHJtkiVA6L1ZJtnmpFkxEobWB77DAQJBdLQH9",
  "key17": "4zN27s9dRKi4qn9tf7vbXUfBxi2t9zyMnZx7af5rQ9sCVeeUk1S1pidTEnLHUzLYMGFWS1MpPRsCUR86pcSf9bxm",
  "key18": "5CRdqGVZtLrKoXj7wiggSVU3a3AqYHSJGtwBs9PeMu8dogLREhKpzv3HXGs8dYXSAPo3EabZagGPwBoErMEFnBW3",
  "key19": "bpuKmjmn72R3NbPonAfojendxgQYcT6wjJPT7Cn6qYD3NJYBhj1Q3K9bmt1vrrq692pdxszaiSNB3tT7cKWKZPP",
  "key20": "3jzKfwXvttZ78z6hVVRzCTK7qjnEGe52CYLptoLxTP1QBJ2Njm5RARdRx4L3KcHiF9u2iqkMdZa5yAVhXZ2i9Aa2",
  "key21": "4JQcj9bUCBUfx3FYwAou3RENYjd9GzcSATJituMafu89Pv26CLD27guKRzZFZNDsyq5dfk44RadxTjm9RsG1fuwY",
  "key22": "8otbFVdujCcApWA9wZSWCQQsnTz7xNoNHkRBk4Z2XyBCT4vacByAsmv4vxu48H85Dtr1gAaNMruVjo2rBKnyf5u",
  "key23": "2CVxXeBe2CQgc2kTJRqEBBfwgy9fJfWd7GMpnoMagKzUsnkgfoPr5V3FLUZp1FYpJEMQzs98vkgCxjS6kCKvC5Gb",
  "key24": "2u6mACNvuPN9xKRrZMbhEQmLKQkhVXC26CLNiBmY5ZXCpA2zYR46gjEETbsQJMD9U8vaKvLbpS24wkARjFYHxgU6",
  "key25": "2ACHxhCRPybWBV8W2JRiVYVfE2FNuCs5CEr6WpZxXn4xQ7rY9KcDNVAS6WomjmxBAT2Z8FpyfenjHD3wH1YyEjDg",
  "key26": "22m8QGJjh8LzryJuemBaGmqMvxrLkckibEo1PMvHLLdvwrwCgs5VvAF9GEBgt3sFqL7wXP5nWvMV7m8nRDBhEk99",
  "key27": "L4QnsZeQ5sShM9HeumTWm4xRfj1dpikQoqP2Bd9ZwpneeSzn6FoFDhWwtcAo5UeNYVaPKrawWHXyWkHUvwDdQqh"
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
