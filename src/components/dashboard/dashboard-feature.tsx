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
    "4WuNerRT4jvi25cgeZkHt61xUzNe8cfeqvoTtRJRCrgyfQQU8yKuJyLk7CK24MzWX6QghC1cWyep5SYiVP4qoGHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xgHX932kFDhjCfw1jq6MvkGPxakSbe6uC9ZHdfj1z2eyRwP5pYhSDStvRk5xkTo3jazmh1ABe53u5TtizdBwHQG",
  "key1": "27cQNJG6WxuFP9LoComf8TnjUB5aX8GCrViyaCWUdw6wP4zeuh97i4kQs4rkU7riX63CHqLP2DzKnGic42qiSEcb",
  "key2": "yANaGnRCJWfQtKPMtEancMV2j2MLHUzd55drckRG7KXnb6hJ8oCRz4Mt18HTvEz4SMahi1RyPx4R3bhHk5rP5Yg",
  "key3": "4WkgLEdmX12YdvsikTSoXLLAPkqUFTdTefpdYNsAWMXdtbHHw9p16scEVRaRKcDw9xMgSaL8VNnduS7WsUM8S42",
  "key4": "3bhSv53Ax55i97JB45CHTHKzDp3GGpP2JALWhUYJmPGRw1NiEHX94efYwvXfq5uqAUcwspD7oVqQzfU4FnJpNHde",
  "key5": "5vE8JcYmcQkWi267rSszu8h9DauR14yvksCvwLSyXt9NeET8E6SCzJvVjf2UGX6fPxNCmPjqx1wq8x4HCF31svhq",
  "key6": "5ELT7ZvzwvaXN9xqqaveJqu38T45isgrzBpRRkRVACkKjV8Tpnz6AEoo4g5cxfekYrvh28wQgdqVa7pgiEaNQ43T",
  "key7": "ZdnqJR8c7crPeeF23HnmLUuvb7Bjp7QwoG8x9vcia4gbjbJP766VDFUCbFr5zVnMy7RRqdjkWBkeV91K94d3S8S",
  "key8": "65ToRqbqFRxiqbDNXXhaaPhUm2HaJ2VUAwiev1Zrt5C6GxSjHAcLXQzEEgQ9ou1qRjGZk74NW7nMT9QyVmtTpnnQ",
  "key9": "5hdk8C2qmvVX9jdU4twGiCFXDyaryCQDwUncEm1W7v8dJY2KPwGPNvzpguca3AwmMSKkwiqbf8kGivhoATT5ztMv",
  "key10": "4s8Qqqtccp9uEiVp9e3i8Bvy9oPf8X8zG3RAxmFZutERk6EZDG4M717BNge7zcZPUApLH6EzdwopqTetiC9Q6rdv",
  "key11": "4SmatQ1ZF4siYZkdkakfmdVZmy9NFpBM4QJh3pRyWqrzvjeq3kF6ZdixwsLmJVhaUmAG8M5Ke4dXfuNqJSQmWRRC",
  "key12": "2zdSVvT5a94h8peUgUWcqdfcMsfXPK4zUrUHqxwLUWFoWK4MXJXpyazxTsAsw94LnJEaXtVqej7AvzyiQPAxcytb",
  "key13": "5zWMiNTUidwM3h1HcopfAe5eu7SecDk6j7VYFRVM1KNuzdw93YyJJ3VsM5uFVa87E8edz7gYGGpjYuPVYyuZYmmZ",
  "key14": "7kaM9afo12vm1F7WtU8HVF5C456k2F5pxtXhJXmL7CDQkhLzMnkJ2s1rcqsAjG8LQ3hptSon9qmLo5n7NqwBRAr",
  "key15": "77HemhCxf7h2c3QVKQtsq6gJvQaG4stLamyMoqX25wh8m4rbSPgv5AKMua3ZbvU3gJ9p3PfJe6gmupW4GabVbMy",
  "key16": "PJgyT1YTYe5LRZrKbP9kBYwaXjArkUqB9aYjNvoZKNxfEZCHRFgKRD5xaxujMnnKxwQ3Xtd8yWXwgNR85SAvT4S",
  "key17": "2kWBpkGw84Rm1dj1odrrix6XbEai2pvn6ivArG38wkYhU3PCqoG717wFQmCbkBVr5LHnZchtc6Mue84fQmBtDETR",
  "key18": "45WVe3GvHXTwVzfD1KsreMAAsWmQMM37wc4aSRKG35jZaifrenmMyLoJ4ffnUGtaRKmQ93BzSzyxH1kFg1JYqCEN",
  "key19": "27LNjsBxrzJQVjM1NtADbNVx49m7nxiTzFVTVcRJb8GcAaHpXotak9uFcHLCASXHzit4RgqJnDxv53LXf4ybjB6p",
  "key20": "32TeLS6UXrKzj5Epq5RP8xDf495ZfhiVBscqDfQxVWaBmfhv3vHYyi6MKyX17ZXGpfQoMW398TRMPCP1SzkZnNEV",
  "key21": "2AcwRLUq2VFTNSKsMrEyDRpygP4gRfB7NttqDhrZZnPT73rSzN8Vp8qMsX4Fw1aAoV6WeXPy2EDt8xmWUPNTskVL",
  "key22": "2K5nwqbPCEqE5RVXZ1BYDKyTgZm2gn6AykUbEcdEaje7MXKxaTPAoHvsRPAyvQk4KKiK2xAkve6ykkbF9PVroV4X",
  "key23": "abhoAE9HUzAwUu8uR5BLFsw319qzxFrLwp4n7vRYF2Dy2as4cZsPXHKfsM82UF4QAGo9zMoFpfR9fHbfzpmCBt2",
  "key24": "4FLuL3sFhWdqJxfAvzqdnpsYQgQvd1coCHWfRUhrbXSeH67GAWcZfCuw6KvPjFSGHjf6RnQLqmdmS56sVCmmPRvp",
  "key25": "5MLxaMDu8bDKMRJKYcFTfBLBf1RqMq21cm3rDHBXLevy4nTgBkUULqL7XhtTQmTy7ZVTWzVzQkkBsVLGKNjFiZz5",
  "key26": "63t8Nc7LNuNnTX68fikwHhWoEbGwedrVDBR5kqoFpkWkRaGBG7LgBFmVPTjatWkNN29t9GjrQR73uEztbKyV4cQ",
  "key27": "5AMZQJ6KAU9E8b2VqKyF7KugohZnFgAUKtypkwm6hFa5K7wjwtZwPMpPrYaWH8AuCXpvYGji3SB5AV7JxQQTC5ES",
  "key28": "2jK6vqiu6P11k7D9W2hzpu2S6cfSiK6tzfwVrzphXCVVBbMVmuF4HLGLK2HLovCrQEqCNUr7vF1QwZEHMJ9TnhQh",
  "key29": "5h4VBrf6hBXjYpKdvkTK39PcYUZiSVgHE2xD56ekzFYCLBDtDZFYhKFvj2tm5UD5mmwEXaqPrcnahBCvubxpcxRm",
  "key30": "2mGvHy9YEqSjcKTdS9vaJTa6Eyn971Uz5fgt9EABPEC1G97uGbt2AkNFdMrop4LPbj2z6eBv25cXVn1JivPhxLzr",
  "key31": "2NwF8PPtmSN2KGaPfDh7gAWb9ojJaGwE43RQpXUxZ93PxnK8WMA525uCVBiKPZmFoPVGrDt14CiErj369naMMnPA",
  "key32": "5T8BFScaJy7mbM2Beh3jboWL5ZtUiYE2Ss1qDDZjZWAK6HZGYzqyEr59ALbN2NhhM69USdNZPwkZHXu8xmBhPVx5",
  "key33": "2Yb7XzrZBTC1RNLzxBpVQ9nNaRxMkv1kYf9RYt1a56VdR6jtFAQpHV93CtGX6NPHG1dPPhVMd4HAKW18e8TXTx9w"
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
