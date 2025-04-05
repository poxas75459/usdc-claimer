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
    "2QmZr7gkaAEppZXZCq7tMvNbNvXmF9HYSU4dLj1LnBzDr3FcBEfJeYBMBY7CdBvczfxhVuBUQvi8N4QaSCZ6t3ax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJE2rXXCFZwdsdvF8v4LTGBvdZqjdxPPs5u8VkYymDDfYngqncvTCrJasLdf93D7iXJAAvVFEFjqzYfWiCkuq7Y",
  "key1": "5cwC8DDAFq3sW7jxYiV6moEipyEqu7SaXHXCBXFFHKoRekas2K2rC4Z8nKH93D2ViVWPuF1AmvZxi3ZPLcsN7qqK",
  "key2": "2zDNG4u1jSjFeevxo6wMbD9HLQkP49ZQa3FLJumDBvdYCnWXCrXAFKuS3Z6fNHC1nva6uHd2maXWAu59tegRHqkc",
  "key3": "2RQavmQhAUAZFTXqHm6ituEiW3q6hGo5B611goMw7PDkyiCTV7ZjnkkwWNb1BjePwNt6yXht6LvBAuYB2BjcQpw9",
  "key4": "naBRkELK8ZHKpqwuSa3GsWQZxH9dDJ5z7q97gDkEp7LRgad4iLyNgZEYbPZzSdjkZnSJuqKPZuC918FU4nqzvsn",
  "key5": "5Qw1jVadFby9MB13Xs36V2EdnUbzu5S9bspZ8xhr4UcMCN1XfMComYBpSByPNLr5qAs5mqWqi9mN7ffAiibw2L68",
  "key6": "YhefHZ91btnZKVwurTSYc7ac3jmRDMj7Qn5oGX2fzohNTxYFHUswadyAjAFjEruK4tP6sdgxSDNDGTNyrfjioYZ",
  "key7": "3KzdD8Y4u4kSzKcyt8q21UTQTth2tr4uPiGDuJL6bLdEk8TamWGW2GgXYnnwyNhCmoacwMw9S4jfa8CYqf1mRnb",
  "key8": "3GPCBLPjDEPJoYSEAfNWMbiVAbbjpbukDCdRybzgXQsp7kSdZgbSfaSrr48R2SQZhv4hoKbGh6k7AkjDKkGDZ2nf",
  "key9": "215cAQqB3Z94uuynmpTFJYTXMa2SdyfqgDGNzmjAWJqYFTyNLasPEp5mioNh9fWzhJG5wZA6zXouVQSZUn7BDEEL",
  "key10": "5JeoL2AcatkPzkK39dz8ZVufNJnNXrLEy2LS9pFFmYEeJQQA6omGERn7WXU1A7FDgAHE9NLAsUTN34Yhp18ZgWm2",
  "key11": "4RfdeBamQCheJLGrsyLrABciPCtGghFZGJEEhCGvt2KiMRtjUqMgRzXGmUgkxq98hj2kE9wfYVQn4JQ1MoTriqHw",
  "key12": "DLpRttP7JJ3gXH8MocBB3gtSpd4gbfSwb8x7cJuvAxeqkPrbhXMMrC4WRAb1dxYwqpNrCUbFsKq9osGdYjquyEQ",
  "key13": "3aMhv7fWuADF4jY2ip3W4emedyeNYzmj3WnzqaGDLnGFzptF9UMaq1Sxd5rSzRBuki2B1zNTuZeeRjpVBeeHjejT",
  "key14": "2JTDyTpF4kdZNU2mdjgUwqwyxjKX7qgPVE2wRY1jqkDaBYpWtyDJFc9uvLHHt78oZd7TKF7BkHPX9W5rJRD5iPsJ",
  "key15": "4QAwx9Pk6Ti9Pq4PEuViGFPrCierDN5t955zLEYnBbNXWjkSvoZGcS9b5uXZNEX2gXXhW6TEPfxuiJEEf6hvcXfW",
  "key16": "5nek37sPbq2EEogd5mEgzHiuja1TS6MqKKUtpVnsjrwf14qAciQdLd6e1WB4MLeAhX5NZtv8uUdCjmeoxz5sZ3Zn",
  "key17": "eWsihkV2RTZDV88VQ2uM6obBLvNxD3rdE9tmdzdwd65QaJBH1zFG7CtPDrujQ1X8SzPAwjy38QSq8HPUf4Vw9rN",
  "key18": "3tv22WB6QYuVwmGJybwtZSGGBULAWM3MUEz4craXbPRzMCun1DV67DpTwNRhaUXKyoxMsaX3MuGKMC2eQ3eN9ts5",
  "key19": "3v3tApxWnnHg6ZMCPAJBGmKMTSBh3KGaVMherCZt5yQKZF4mUxa4UPbU3VW5wcP6Mmo8cT2fqreYBe3bgQpR2dEZ",
  "key20": "VLB9wvA2WK38tQHMPs73kCw4nDAqa5Gr5Wu7B1mDexc32oUxFPArfyCD85PsLJ1Ai2rib87Ef54HJ8XQfpH247F",
  "key21": "424tXTkdJgZ1CwcDgFyo6uToGRU29YgEPqVbm7oXjEwL8VKm8MJwGaL3i53mRAQHDvkv8G1LpRqtDSa2ELtCrwqh",
  "key22": "3fWjFwmqNsw2xXG1JnTHbDyah5D9YiGJh6Vz1zQPR5ck1t5K2qNn3YZcmYBrqr2DBfn7PJkpQryFAs5AgHexBJS5",
  "key23": "2gHbgmLykgZMwGhkyQPdkf3fM4LpjEc7qoCmomZFfJurKNEhbhYSmgFedR3YKyx8weJD8XfWaxN35y9KqhGadvhg",
  "key24": "34AJWCFkHBKET5WecxJRw2b9id21DGGSwZ76vsBhmFPSfenFiekkY4EojAtYrk8AKCRHJvcFkUzCyqveEKtushK2",
  "key25": "2wmnBXbEFaDApGJKKfH2QcQkNk2W5HoLv2Ha6c3URiSLVRejoj6YStRg7xdAoA5o5xS8wHQqoJUFq3KVLE5PP6im",
  "key26": "5iRWoa5zxMCLex7vCLxCGbrRfHLcx9E75BVnY2YzbpKXZotYRcPyC4MFKKJdtk9TJ1sbMZgeiynSsJUAkLJMkSVT",
  "key27": "64a6VPnAi9pEfLhxxu6hZmMqGeWNPeiNhcK8T1CsxRY5Cy7NJoVRw7Y3vjfkPvC7segf7eHSu5dq4TtokksQ7sVU",
  "key28": "5UggWQ7Mdp59wUwiJUmEQhn1g6tkriEXKVxFb69co2M5mWh6Snswgc3MVc3Vau45gba9qutVa3Fw2ao7iHBdB65x",
  "key29": "5uGA8BWBN93k6vVfuhi3WNWXMWkxtjBGVA7mJwjGaoYvZhb2DHesx39jGigVKPqKFVH62SzyCGp5GHrJBxCvJnBx",
  "key30": "7YbNE3S3zdZJmgstVm7AJEbbcpNyRydjmoGpg8tfJqDpB7gS8DFnfQzuhQcy7Zft9shw1h51NMzMsGYaCJFeUz5",
  "key31": "5LRiwDBGnpN8Q3k19JeiXF6NhGQm5RqXKXfR3igPceNemkuqq9sDhAjkNWgcr9687j7i1nPbmw5A9nyUV3VpvYKz"
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
