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
    "3vmF7tAQEaALKXkn7JHRpzLLThwNv6kkJTUhaESMCogChmCZycc4dSkBgXhgxnV45DAhmVAkUiZKzPR1mn5J8AR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mok74f9yZ21sXDh6yNM3mf7GuT2CGVmCmzpJsjBJDJMftp61ESsrvz2nhcZxfeo5tSQE7YcEDGAXHTm9b5i3PQw",
  "key1": "4ApCQVfv816ZfXX7JQ9M1t2Uqp7NiZJjN72bLWJ1QTd4d4XKGerKfTExKwR5XPnxgrGfZpAk7Xt5bQmLQKZDf2h5",
  "key2": "5qxhJ5mn1CitYKeP7JYE8E1wiQ183bnXEVhQUtWGETAZW6wwkF2k57vP6RMyNHPKdPrF4mhFZfmQp5aFFTE3Nh16",
  "key3": "4J5FZBKUKTHnDFbRHvLJ776ZYQXZbKcM4S9miBWs84XDTpddNVcS5RYndtaNsQYE8oMynKQC1N4f6dn4Ay9mn3Hz",
  "key4": "5axSTjiZam5C2otpuyPFMbzaswdSF98iLGTCQc1AMV2AvmhJ7JsVHvH1Y3tyVQWHUSz9hkAS1GToU6DrvcZduSM9",
  "key5": "w4hu1aGGUi1itE9R1xtNDUsWwvAihDkrNHJ8prrQQZvFaaQFiUA1UwggwKRApULCgtCwtUKE8Z19CwdgBTfXQFA",
  "key6": "ZxT6Sc3u9Ukm9ZxWtSKvaMnVDA8ccMuLmWzcuH8zW6FCmZ3VBigSdBykGbMZeUmtmV7ADCuZVBQqChhB1oZDYjh",
  "key7": "5ichmtLUvFkh2vEKVjwUUDyCt59XJyDs2fu9cL2KuWkHBio4JGt7Sp9xeVd6ugR6QXBnRfTkWV4mPU6qDdyNHE9F",
  "key8": "55G8vgPVdRrZLaM8pdFZNyYsBEMd8yTWVK1MfSeFCTGuT3iwZZjFnrXoCT6hwxXTvFvfdZ7KVz7SknQrursCPpDN",
  "key9": "3CQbDVzDKoBjU3834ZaN9cLqU6sWkDzjEy2JfrY6McHGTZL9rRSemtZcYtsZ68YV49urQ4xzLtHXeCNGVUxA9uxs",
  "key10": "2RunUEHkCNVRNxx4DgJHra8kzqt8qxomDP42WAbsyjpLRCR3rXwKdawWnffZWhX382kB6DVAk8U3gMdcA6bCWfEU",
  "key11": "4B4RxM1CVcXp2xwYPiQ2PbZErsZHzG5ek3GUauhs9g1kyAEoizZyuZJ6iNSJx8C6CsnJZBiH8bhvKfNrMQwKKpnx",
  "key12": "4yBHHk8MPFyig66HS4HUToao8aPiEV2L7g7vyA8yzpW7WpwFEu9qHWTF7irNZeYXtKdCEHFLtfXxA5NVJ3UFCmfX",
  "key13": "2CNbEKxhLdh9oFrrZwhnVPg97tVpRia1a4vjZzeU4BByLYvA6dFVEYfSqTQK34heH193WQhNPVS3prQH6a81a2cq",
  "key14": "3ihAz7mxfxJkREKH3WKPfK9tARs3BAjLNG5XWyBS5G4PBr7ajEcWaindL2Tya9trbJsJxYXNMCJuxSUk9JPvZhVK",
  "key15": "5vNgrGPCSQmYy9RwWhHN9sUSo6LkGJgzcEh1zVUD9omVM79NfgmmD4Hed5BkhYL11K3nrNrpvfUscumAWz7LzS4z",
  "key16": "HKQfykFKo8S9Dwrs2pKjH2GNYzvAks889RmVPA7UzEQhmzcVYVFW1fsdNeTc9NZ961ns4hS77xch4UcgJfrLVje",
  "key17": "5ho1nAaZgNp5Wzbga6xewZYsFUbtNawouRkQLGM8yAGgKMfBBQmigACscrb4rG4NcsRThDNhcBvt2fgz56BJaReo",
  "key18": "42EZZwDz56gD6eUgdyakFcK5TE3mvrPaBcQkmLfGuy2BH7FuW8dXSHCUc3tjoxvYd7LprNKMyipQefXj1K1kRLGK",
  "key19": "4LQ1U9AK56bFuQrP7DiH1BYKXmGjAcnEcKEf4cXjLrHP1jNYQ933iHr4wDACmdVBKP7rpn3YtfEdF3JvUoaARCfY",
  "key20": "21EdV8w1dH5AUVbu1n5BZYdGnvVNfAgGXvnpPt5M2UvszJW8txqGmLHCWm7PZUkwP36pBgZyZdKrMHQ4dJqyrHYn",
  "key21": "4StDFULffBRvGkeFmAYGzqQhiHFhsuXc9PP6nvJSUr4Kcro5nzNiPBe1DK45mRLkwfUG8NzKQnvwRca2DHKKFym",
  "key22": "5a6aqms3wuzert5BfDQzmTNTJp8EQWX3FPGesdNEmJNawu7bfJqA4QqrubxwnEtWDAgwczc5scUfoQx5m6RkfbeX",
  "key23": "5VTREGm8LZuYdp7LvP6YSEtpEXxGUaZnZDPr3D5QKLBzZu56DscSVCZfaBanx86CHkfFS3YXyzESmf5fuUpNXiDf",
  "key24": "Tg5YgxQ117XiEvwgLrrUBosXrSpj6gxQUyKDsXMtodoKSAxohG2FRb4he4mSEj3LbCqxSe8CGcnkducBJebNfDV",
  "key25": "4FNtFMzTaETsikuMtMMN6wUQeTbXctpdDvohZzExFevLU1jYwK4N7jjGZKNtsPsRcRNtNv1tvty5TiEFUiRoWAcZ",
  "key26": "5Lcti39PK44FirrSaqeLXmsc6Kb1AasB7iFZWbg4LxHVqoopbmVAN1mvpkvvPAsfKpUbjABXvifkJu5N2bKh7wVC",
  "key27": "3nefJuQC5Qdc7reESyt73wv5JDytWt784d1Uv7C5FonhrUkwYVkubLtEqMhNUtKKbEyLYhX5jREmyHrfWU9twdRB",
  "key28": "56GFk25Lk6xK763y3fZB2aFejsnddcEGxiEQwanJzaYEVfP3JKjx9jfyXNjgVjVmqA2cBqMzskRrj9QdC6t2pfuC",
  "key29": "43k1rzEAZ7kTgzFMxUtYfZW7nVsmSttWckJsvoXTQ7pBgywRHTrMThmZ1fR7Hr9gA86pZL5L6XANmJHU5u3diGwW",
  "key30": "2ZsjznRpjzKQpn4rvdvHNycmdS2dnNa2aoSb8Zw8P4XNbqTRBSumSTyjdokKwWesvDFf81AxcAnkWofxCzAawMJv"
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
