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
    "2w8k7fyvg4782svUsTL2p17ZQWdn61hU8ACTaFTPZV9FjoMYP78Lz5uow4JMFrtUYu8CXPeNCWTehwDFP6p65gEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gw1Cvs9c3ncvQvKoEWu49uKo2NSt5apZLxmwGvfPK3KHaqjB1s1nWsWxT4C7RmUYr6VchVijrPG3TJfTDjfza4A",
  "key1": "4wTEtGygWpDkFEgyDrmHAfKSrz2pc1Et947trbVSBoKzWyhMTBKgZ8BavdaJf3ZVBkMBs1dmem9pUpW3gZ2kyEbh",
  "key2": "4VPYUoeffKg6cGNmzCQxpEfESN4bVXWDbni4tS2PvLXC7DKSaMTu5xnQYWFriFA7YxFruwMGK462dm36Mfqom7ux",
  "key3": "2TAmYzXxo2i3qJhCyid1bccmK3r9Wo2WismWymw1SRhTcitYbUJdNFwJ5JnFCmt5unnsduigzJ1vdW6rmWMvjDSv",
  "key4": "5jDzVF7YtU9c1wsq4TfQHtcG4s5R6JjKX6cHKq3UdfKa8CEgGcQjSFiK94DUuc1pmZVUwXDoQ8gfm7rbQWthKUZF",
  "key5": "5tNfgG5FkCDAzbyZGK4QQFSbN7DcCQt81TQA43YTieLg56WxuqRnuyLK1vbxQzRaMSwoPybeN4swF2QYHN93p4uK",
  "key6": "4MzevDexPFKEDYgaBpNdvzJ9mSdJvp73X3WXbb9haC7dQm6gqSqkyXfjSuESYs6ZdHBTLPdi3qqjdbUbK7f2DvPJ",
  "key7": "srfBHz1kSdbFkscjUtFCeBTnPZ7xLc7MW266kGMzhKjvzF9nh9nAoj7Mbt72nzbog9nEQSw98uWUJQKXGEKxNa4",
  "key8": "xaDQ44fV3YGhB4dpEYigHATSzD3LZQWk784p6gqSJrGybSY7NAVy6V5n5ruuiyxg6UBvrZ1fKhqHhfuUcDZTSNn",
  "key9": "2xFy9s8HLahqS7vQb1GZu5JVtCdXenGrLqMd4PCFPCStcrCdUEy83jmCpD8baSJUdeDowD4YzYtBf9wfk84Y3R4v",
  "key10": "4LqefMZ2LgMVjmhKTL2opru7wSxNKzPm7qobeLoe1ubS1sc75Sk66gjdpu1M2KPyw92nbBckLcJkR6WKQAD8ha9b",
  "key11": "5WnD4pCiAucJCHEQmyw73sVcNVSVsdry156J5o1v1aFqA4jLeGw7tetyd2v85z3hS5PqaAy7gmKmdc2HHoketmZG",
  "key12": "4zjLvfrQb8FMC9dzfVVEKym3KCn9Lnn4HEywzwipz9YfSzd5NzVwtYCLoyMG7Y92vD3Kh2LZ6nq3wqjL7wSJbq4y",
  "key13": "VGvMyR6Qm6ucqbZgXw21gqmHb2igEvWqN3GdJ6U8g8uSwB1xXkjxVi6yPvifWdZFbRGg2jUKbP9YZLvVHUT4rPE",
  "key14": "5kxMnYQ5Kj9QGrSJEHSF33y5KTjDgvvHuBQziYGXsPwLDkKQ5jFdCcvrVQutDHqoYmGPUQQ9piog97btuMxTaMTX",
  "key15": "27b6CX2Abtq5PQsAJTzwWBELKLUqTwkeE9u6z7FKeSUCo4xPbDumQqVxwuQn5tJGqbgXDGNCpmVH1Rtg7RCFm4md",
  "key16": "56x92uxMDv6ta4zv3FnGJQ2ftugpFFM2VMPxCBGF77zMXe65rkS5J9CSsMLySxNhDcW67MH5K2wf5xN2gt3z7bUf",
  "key17": "3ZT1WVRV3xHJYkYKv3RZ5SnDNPKZZodfd977GdGXXQrtMBP66KwjiD4jmJPTHp1FNz637NwDxVMmoQpmuQN8jPS8",
  "key18": "5sZ7g6goAndYoQa6dY9wZjwqwS6SE5ubkts6fCi3YmPTsAiXjFFig2BFmcr8LBsRHN9C93jxNLGxNBUKb1b4gZwA",
  "key19": "4ojHEEjsxCAWJkMXwC6mddJmWsMtWoCbtHy33J4sZU1srzicrvp3gAHfBSVKvrt6HhvEFJwQ15U9UAh2BDoxErQM",
  "key20": "bVhFfSVhD6mDtfKUs8XnfLWhMCJNq8UPC7VkMF3MjMtpugSxgn5o1CNBQx2EHNnquTBk6vR8kCyNBYv47ka73tJ",
  "key21": "46kKQeyYWfVVcey1R8xdcsQrpV2wkZSgX7gErM7jc3VxpLie2SVaTN2XFZejLUNB9RQuHc83FjCicvtZG6eXAXqc",
  "key22": "3pV65gd47Kg8gQV1KzHvwF1aCWhTBjbx4dGaxadxRBadi1ruHzxhANa7C2CquvQA3GjzQXDKMBB29h59ZnZLuRDw",
  "key23": "4MoLW38PS9U4G2LqNSVnhaCSiDJByTCPwWnG7pHEMX2X9xQ6WkcPY2pJMABoQr3uqzVTAP1dz8aXefkCnam6ewv",
  "key24": "ZQJfBUmQQVEAqD2zPJRL6m4DxpidJNo1ouJmbDYKjoTEUMJGpmu2er4XE33R2ChrHXH25UdePDgfxEynfWuqUqS",
  "key25": "3SamBFJLRqgjaYuYBZaMAxR3vcLdsv8jvQfBuLEeU9kw17JowHzTawC8McqjF3Wuu7DZ7y997CDkfNRxvesrx1jz",
  "key26": "5M1PS1cAMpivHs2cpWLnrj8EWUsRpSLfQmHT1ucrTp26FGSACLgYjHpg6KSp6CJvSTdD4qHzu4oEWQj2NbTaXwyG",
  "key27": "3sUVMeQGYSDEnCnYHMnqu2H6NRQ4yShAPzdSqGi2dY3kJFSg8BHY1VUvpBaGPvms13FitDUVD3AqrPhyUyuRdT9K",
  "key28": "2B67RefAarD8TV2KU4fcRYgXdVFpA3b48tHRpe8thHGMKvGvkaruFzF7UpqRErH6bxde1vT9mVJ9WdbbVXc7Qq9d",
  "key29": "4QrprDYvdUddP3tnnD8YWSaSfDbghuy6m2BSpmDFETJmCGwQmPb1Y4LxFENdC52U5kA6ADK1YyAFZrdrj4oM4ACv",
  "key30": "5PjR4DmZiJeYZVQBvPmwhAzbau3oy6oS4hXjdeSoN5FdiYQXJhRpuLUyVPxh2iSJjnWMX1zLoGZTaKPq8KsK5DDk",
  "key31": "2ZiyYLUubYQFFpbpm5n2x4JsFrBvyHMAwqG1TCygPi1kPVF8npPXRbzGoDAsYNJnuJqkMsrHBN65XR9RaGYN5nUV",
  "key32": "3bgSimGvm9JuonGV6TzqjDfZargcmuFrLE2iKCGj3EqyTwjXfjeQw1LEkgPK4WGB6AQoA9gqTpxfSvi5zacNeYsg",
  "key33": "5pRuJ3JBwvSgmsnDhfY1wFy7jq8obGp1vZxi9aLMvxLjPgBnKUVEYvJJWbq7iqn2JGrpKH9EGMS5qj6T7BzLfCNy",
  "key34": "2ZK4tx5XNAqUPTfz5jdWcNrtN9sA6gYPHdNWQsrJ8w1mpaci7G11MbpWF2MKJfvVfzSVs4ua3QNUyESieX3FuKJC",
  "key35": "2ojxXwwghfiZigDJ6ovzQC5RLzKBr8GFAFG35vLM6EWJxJFS2nEHonCfTMnpNk32QzDdHtQAK6DF1ZwmKRcZVkv2",
  "key36": "2pNhQUvStcJKEYvMKJP1TrxtfXDJEn1qEhtELXRQ5s9FCqwj4rCPEfEVTBbkKobt55WQV8PEL6VZtgJaZEnsi4sP",
  "key37": "2k8d7WTuFguDAUwq9FpYb7sMe4fdcLzKvFKCdgGw4tv4Tm9y85oSVwMjGEdGgjkWnRaV4FVcX3av5oKiTJ1hGS6c"
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
