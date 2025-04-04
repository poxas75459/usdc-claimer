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
    "4WMScSgCYNHBtjTHSU9X96fH7i33fxBVFH6rk6qKTq1WRbNeauP33YXVLUwXv2HVXgAzz81sghGzt8oLMKKeTyUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jAmdbZq3FYTVtBsP14tamTQn9G5oBRyjNEoCWsYwAAJMH5mKAXkjKzdFomS4MbpJ3CGh6jhFTPzbbtBU4N6cQE5",
  "key1": "5AhfRdyUCwNRJmpvPX5NAdVbVgK6Zmhar4vPSRfPKs74ZQyUd8br6bcGaEgQf4in4MwmAQBLfsErCrU7uJgPCa14",
  "key2": "4DsP8q771ADku3GnLYeMazdJKSurtY8q6GsvGFMYdqBxdNzQPj6n6hfPpNaK4DGkLaEuckhm5SiKa1ZrFvqdzpcw",
  "key3": "2iSMmF9o8oZ4SJhvGMwU7DZ6LkKi4sMsM48U97d6oeKra75YNnwaczQ57SHkTkazgBXXq2LzysJBcgUFX3Rg1YQh",
  "key4": "3M6AiZjfQTqtvyVUfsFAb8T992b4SNWaA67YEC71fDMfUoYbZ1sNLZ96UiSYGTg6rpCyRWJiMUvGDewvrmXpGVdt",
  "key5": "3wmqt3RKSm1iZjWnnfK4NaSNwtUKLrXLwHda113ygFpffCrhUbnrU3V21vjdwfs5kBbiDGsbdZeBRsxPAziyjTfC",
  "key6": "4veoqDE8EHQg7JpGas2fCu9P2NdngjN26Nd3mbb5bp9SGz1CDpgHBsRxr5QFjm75GPWrwA2pUgGhLrYWwLsNjn7",
  "key7": "4qmW6vdCfvGNuJteU1rHSX7bKe6sxJwNZNLByKGLRBgWJL2ePqRyTopyiCDF3mcPXx7gd1aD31431UN3pqkVR44N",
  "key8": "5hjxjh4VcvncrHipQEWKt68PEs44HVkywZsJfqbzUk5gCvgHuZfPmhXHVFHVkNo23Bx4Ag87PARDZjCxArRhX5K",
  "key9": "4kSNP6HVg8mTQ1cs5gHKR6ck1hHs6Gr1CbGZGUwifH4ZtiSUJNYWnngR1TCxBe38dpycog1YhAk4Vw3Jbz4oGxjr",
  "key10": "37A4tXaJGzcRHq96qhExvsPaDDuZ1oeGPxk1iZNTzJ7sRiAZeaAGjehYE3C1G8jD5bMJ2g2SLuCuQdKWUQHP5KK9",
  "key11": "3HXti1vGk4VGxJMMzmktLYQK4DhHRcjvuYh4joKdMoAqCApDkk3QRRqXnU8jnAbcHJAKVuHvSHDb19n8u3TfFVMW",
  "key12": "4W5Nw1VEAe7195Le47itA7UaMWmbM8ZsKTzkABhJ9ATWz7TbGm3zEva2Yp6s8J3TVdtZo5Jk9G5DuhLsgXrv5WUk",
  "key13": "XR9kqanwhaSWbLmixwppn1D9ea3Pf5UZ1aBov3MXXtkNxvTytZn1pQBRqtkKTmg5Y3vHemNQf9okTPDwmgQcJCT",
  "key14": "3RjivM7xaxtsyTwcKqjesbogYJdSigLBmMTjrehPBHto4Lucy8pWM3RGEv4bcpqv49SMxcdbzdK34AeHFkyhiVKZ",
  "key15": "3eDeP4CC1yLKKTr2UxNdAvuwA6kErv3hwknJE8B1mJv14tBS3Vu6hEp3z3pHSJpBBLAqcLHQDs4SJczxV4D7mqmh",
  "key16": "3jEFu238W3mDn2nycnKMv2NMRSf4jU5SkGUpk27baJe47tubtZcs8qd2GbVujFfPyTD6rbUodfSz8LXi7ssRkoJ6",
  "key17": "2Pwh5gPAjMJJZ14XeAa74Bvbm2suZ2udX3UwYTSBN28GeHB6EXeqCXgFq1UGEgYtGvJevA7PdpABsN7aQu5J1XWj",
  "key18": "9n9CQeXzSqeyzqfYam4p6nEGxQEKdtY5NuAjZ6W9qn3YxTLkv6U2jxVo2rUcX6W6uie7AuG3vnmJ5ktmxJKx6Nn",
  "key19": "3hfCXGAYXcqQbR61eioLWNMBhWHjbXqT13AMtmpbX8c248rhZMUwWR6nzDp8eFokVCrkhJzVHRhnXG575huziRze",
  "key20": "5Z7RAqPXdS7NZM7zuQgfqFqtyH2Ki6Jm9mwDuEG7VKRB6iH9G413Q7jExcyHiHWd6cY2LhGaoBA3RPGtSXNPVd9t",
  "key21": "5RDNrA7q5HABpodmtsQLpNgniU5uAZk9VPAzibDuDCUf7ucT42mKZFWCiZkWk2qz9armaVk1hRKnjqCDq5nyaGW",
  "key22": "4s1Q3dr9ragPgwirTAKfmL6BQq8a6PzG3cahhTJB5EF9XKET8wHkSYL7qFzPkaiUmGDugs7tGLMjhmnez6xc8mPq",
  "key23": "4DJ4Nh9zRJSUKbtrfErUWxxd1oqy9cRPGL8g7PKFDwsZV1iztMx9NNWTNkakbtLdWF7YHVBprp4ifrnggTbdH2LX",
  "key24": "28AtdyNkM2U9uax4MMALAztnFtTts2ghfEQLQq3VUtSAvuNkudTjTws1JxhtawtaLtr2d5wR6VeRb2gXvtQEhBnT",
  "key25": "4fbGRpKrhaS74ySvpAozvVcv8dUzK9JK5xMAmsAPZm1VPeA29LPu19i44yUKgQEjnFP5nzSWmSpyVrMXiPFL8hyh",
  "key26": "i6MfinvUtXdNLVLuwoZGNzhVGDucnQNX9sNK95LNBjbp2Sc4D5k5jPfjby3fgzYxL515BFnvj3y2SP8phS7vSQT"
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
