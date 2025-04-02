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
    "38S8MQi22stbW4X218AkQNg3Tvc1hMBCLyCiuuaq7ryaTMPatFdKsVqRxzaCb2QVcKthehKEUdX1UyJWqx4EwhMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o8dq51EHQnCxXjmWpNevtAN1VaPC3EtPzaAESs2Zv2NWn1d12UeTEsUM9xa5zyVawJquZG5VbDVWG7YXXuMt9UM",
  "key1": "3dvXMQnGF4j9YAuKi1kAkUCBXv3BPNpsbNKgJ4G2D7ZSv2qxHuHusSLWHHy1hMBVFCsfefRUPCkvvmTuscqhUzc7",
  "key2": "5aqf99VURpUHLAPmUSUXRqyBLEv4epJEMWnZy22pS3bqjQTQiCiShHU4Lx5PcL1tvifoAV9xu49SwHBPq9cFBswA",
  "key3": "4bgb1aWnqobBh6FUELgz1ScWx775KSUKnKvSMCq2iJSeva1hFLuRNd3YtHV8JcnwvHN5TVXd37d398MXgm5QGQPf",
  "key4": "22nmf2X2uzGUVs1tvfRttEEvrEM3spDZpEfzwmPfY48ubiw2Dw67fHZBpGKAyTK6HgWYfA5PpxDyn46uGgzVbRUi",
  "key5": "5BhNmoT9DpzUAqHtabW6BZri5F83ZtQFhgJ6xVLQYLxbmMnnXy2GWj8pFMTC7GLGGWmeJsezZXcKgDMCpTF8HJ7Y",
  "key6": "4QnZELcvR2PpEXb52Vd9stfdgwfTMXHFezjtUkUQNsE8pmLR4RKwcxSr9gdPvbjcvMtCqtEZgtbHLsBTYJpw2Msx",
  "key7": "sWWhsY5QhgxTv2k9dxZpVAwPLEBuqtNeCJRaTZny8eiLex1ZYufvw95R22TP3vGg7eP3jB17VtiqY4bsH1DftFm",
  "key8": "2mxF4ZDDP5Jz7zCL6D85fRXAAschcV7kXypYgEomDio8wWtQ6CmoVVnK2RaKbu3qLuuZLFLchpUZnvvUqZCnyxu1",
  "key9": "4R6BuYj24rcyYfsM7q8tVg7GSCVSVq74ekWgWqjd6FRLM7NW4oYjJGTt31ccPcioGxcznEfe4fqKPkimeeKJMq9F",
  "key10": "2cc4vbJRrJcRcdwSbZ3ue2jtP1dA1Fom1Eo41SYAGB51SsGcSckm36YNc7iAeqJHZsTXKb9Dw1m2o53wM3qH4eLC",
  "key11": "3DCk84ypUd5MrEKn4NefmHJnNLFL5rahA4DKAgYpGCPouUYxQz9UnbonmFsKMaJdsy8GmxqqV1GFvwGogtkKey47",
  "key12": "3VUdnx8kdCgdQHuPaiqM9rB5jstax39iwFKA24mtqrfQXkqjtd712faq4igorVVBxU6pNjPQVdncmxfRdC9Ax9yD",
  "key13": "2nnaEcNCmcKU8pkhhCWdwjfPn8fWy3Np1cs1TpZdvp3RmzpUdLP4sPqM9uDkwtCTHbAkqFSHKWY48ZpAauTPhENC",
  "key14": "2TNabCUPzAiKjPHC5pNJxRe7gm1c7NoxQQgnRY439ZAY11UCQkjzQ5FKXPSy6Gw5hGdysQQUdXx8bpgbHeVYLHpU",
  "key15": "51cnSW2f9a8bLqfh914yHTcEBFyZZBeoY1EtyaiDVdsSd2TC6GKW94CwGVHCQ1GHmnEsiBYzZ7ybmxLbhVtr6UR2",
  "key16": "3ukMLbufDqZG4Hyz5yf3AmoULrkPyj3J2WcoEeFho9BuenoiWRcnUp7zt7kZVZWPuCMoabtYRLGhiPaxPCoYmkHv",
  "key17": "5Zn9VN9n7QrU7phx7rkbCuRCCa4tUdmTsz1m6xWGq42mywxM1sASJ76ke9gpHwoqL2ohYfmEhSxtmdg7L9Tdtzio",
  "key18": "4ggevMtEewnXkvk5mz7rg46BLiSoK2VLMCVR1keKrMoxHFJaAwvdX7HmMFu27vks4xCWGCX7yrr8DqhAcdbSrP3c",
  "key19": "5q71rUFWjGjQLaHhn2tMhnwXpTctEkSueDEK6sirGQgKXtbWitjDWf6NZRjfeyM4vTVp5XJzB6UvNcWiTwFN979g",
  "key20": "59xYyDpDQBXkq5YXSqymVNZVhw2KiP5GssQoqdaNV8PsumrknByhHoozuLNCTQSgqreWoy5PtWftyDdPWEaiXQhh",
  "key21": "y6sm4BpExopsVthDp6yMPUi6f4LdXy1ZvmTdMKda5kKca9fW5tHaw7vD7AehqkmKs9F4s6wW2nk1p2YQfRsD22z",
  "key22": "3VTbLatJ5FLEBvZL2ZtDP9mJLWuQkaMyrfjFj3QtGq4jNgd3UDi8m8svt5f3JXdRPEhNv2e4qUT5szn2rdUvpvSd",
  "key23": "41EPwi7PzN9mQz2TdnCAKSCi86WSKar8YrU8JpyvYB2dHXDgenjRMdmnTgCa92ZtTq1y41YJ5JfXeH1EyfHdRQ8X",
  "key24": "3R9EDqauTkottao2dV14b6wXVJYUcYgxowX99ziha4tPbNDR7RUzDShfozQExrQmUTw32Cy5oGPdYtEPrZcnXuqX",
  "key25": "2inU5PAgX5WkpcbozLjyoXpTvFrRWdmdkDLA1sxXsxAQi9tDUxGNGE7NnXZFS5YmtsY8eEzJceBNs7nQ8UP7oY9s",
  "key26": "4XbaDX4Py92cYfp6bR44M9vNUno5LPUwGECCaGFFNNYNWneLgLhzp3MfNjUtQXB5FdgTBoZ7ZKq1VKAF6exfGmCa",
  "key27": "3JcsDo3TrwAqT6LHuNPsspHrNokKPxrH49V8938cDtUFBWeKrt1JTEmC1F3mRWubPxEY5wYxEH9ePQMxZ1K9dFfa"
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
