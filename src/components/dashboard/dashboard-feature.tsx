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
    "2tRPuuvWQwCJdAAKi7QaPsYX3TnFmaS1VcFpbxXUT9A8kBF5JPm2XRZa1KUEM2VJyEKu4HR3a2musySZ5stMHxzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "669Ffs5epiVZewyyeHEgMnQojaShAJXkWZ97zpzBALSHeHYmZrNu6mqbQ8zqHfyhzcQfWRcGDqS9cRu1bXVyJQGT",
  "key1": "2m3QX5h6aT3xNE2PhgM3rtZZN1FMdVxfSuDhKybYMEPi6N6wMgoPJiSo3jBUmNDBVkpoQuvxHCzSjzUXasLon4g3",
  "key2": "3pvAY32PiaHReh9UkQu2kLm87SeFpVvizSoRjTThxeAUTfTEMn3MDZcgtqMqZAaNVGuxn4GdingrLDpAonNSboh6",
  "key3": "2BTTYvYV6RraAtRLnN5w5zeScbNcUD3o6FbrY5XXxEbyxnXkdQGXyHrjVUojkxA3vcEn9yMuupVgNJTTeB5XnwWZ",
  "key4": "2j1TwDn4prnVVKp4V93zMXf6Yj3jCgx37sDVkQCRbus2cYGLaUhRyueKRYcvJGqEu2C7DTdMBePRWcg5QBtyynNx",
  "key5": "5QgKmPVLU5W3qKM45U6KEoso8fEwsoRq9hprezoguHCb5ubj4RYSnN9QqA8xiGhuYrj9BMuEYyHtbNv8Hvgx3THN",
  "key6": "5FLNzeg1LUuQTRcJq5iCpr4ReT7AtDs3mBD8mKFbCRkhJkEGbs93rAzFdoU5NknzBsZ9Nk4TwaDVnrHh9yqpoNcb",
  "key7": "2EtLXxXEHmpk6dwyCCHJVi6Bgv8Xm1DUu9VTM8ANb4qcdTwUMLMg2AFfQJV11j4PPHwu49HrzjdrE3feUXfg9sS1",
  "key8": "MfuyWWsjyxg1wPR4wZCbdKGEsUmTXSwEaMRC74rvbeGiHHKpH7KbHMhhVv8pv8Ng2aiBxnh9AtZ3kYRdmrGKNpy",
  "key9": "5qy6r4hdZXtUC4BSwTeAmT2cSGw43fxRDKywBcdBof4CngzARCc1RQvndFJE7kXJYPPQkoh5MPt8UrBRGXt8EFye",
  "key10": "3QY1FN4e8Und8W5f3shVBVDSxoMjncgmuWqMNjMoZqkgVBQRBftB8uz8FAvs8EAmXVVREx1p2YpWggmDXPwpvBqt",
  "key11": "269MKrMRvHNZZzsr288LTWesmmYkN4VhMhPqXfLakQUVAeDN35vAQUwX2nMod2326CKx1pBmjcY4gKhcSsThwHVA",
  "key12": "epjfWdv8BUqfsa6KQX5LTkRM1BBzkn3aMEQ63pEUSgVyG2nSJNZ2s41DsPk3VGPWPUMuZyHcos73mf847Qixaud",
  "key13": "3PwfLUeYpVm5bXiGnogdPEArANuuX6iBrJZZQ4uwX251iv8wwHsyGtQ9AJWHQBC1NhVmZqsBXRTCPoAgAGxGWgv5",
  "key14": "25Z8RqQNiUWnBtKDMCH5GNBRXicX2wzqfdNNB9BkrrQeuZ8kaweApFNdGRu7P6ex48uMUtmwVmsj2qcj4Fpoh4N9",
  "key15": "3uRXfHnpwJY8rXumnrQ3588EFPtqa7aHgtfYpYxiFUkAeqMXmjnUsEaVQtmTjALjBbLyZHvtUhvNYxEGUh1GaXVg",
  "key16": "5hkYgPUQiY7XoSgaGa6y2scLNPy3SwCbMJkGEodNBVaTkfgRw7oAqMgatXvvmZbcDxWPNzq8t1zc6KD5YpXkozVw",
  "key17": "2QT271kkEN3tRfSMP43LY9UQDpSYSmoDuNZV3pR8kErqXSm3CRLhZYNohUeQ7esfrSCA7G8UsiuG1mqv5uPGdWxs",
  "key18": "5DuEjH6uhRrvFub6hBcb4Nx7DVyDjHWoEKj4ZNtQ2mf118Fkjvz2hxVwdzDskEqezgVUd9g3sKan4tbbNsY8SGhY",
  "key19": "6ZceEPMEcsbh6HV4uvS6fpLmEWQGNY5Qc6JsfzMRy9q781esRqMqXmuL7apkpJKbodZX49T8UeJ9YZFiPYwWe59",
  "key20": "22t4hRjXRu5dJK2rfaboby4C13BqaxNJzC42YdhiQhhKCPdo4bu3P5aqRhdDuWTsY4K1o6HGhqnTx2vZa7iD2dM6",
  "key21": "65LSiV4rgT914Ri4Z4ccEnVDvTA5aMMwuZY77PxPSk91okQnnmwSYLvG4tym9TTxjU4vzrTUA2nCRkDKmFU6n4hU",
  "key22": "5ASGswnpQCB1w4LPPR2fJKymAWd8HQU9d4DAJcuYFzHhCQkyTwkk52fqWT3D7yXrawTTCYpTKkc6nmHjVtPaQgVP",
  "key23": "2Lj9wVn3RH4mCngL2dBbpAWp88VvKvn12Cpv9WZn6xUEmvezA63k8PKkPPKyjbAKUCc76NYvvh4DN3BZrTYbkPQe",
  "key24": "3qqgfcJe2dE9pDhsXnyU4KtnXrxmp6zszLvHfPEj5xHNiNCfPVVcfnjZSRj7vQpfZzFEvMu63Mvh7Tg3E4Fsik2U",
  "key25": "3VNXyGRRcbG19xGkxBfw97byhMVXrG7NehQ92WiEnk2pAAvM5R4yH1v3ZasgL4gZwhywyL4VUyZT6sQEYimVsnSV",
  "key26": "34pi9ufLGthbVw9B4V6VuNysyU722ns2MARXvj6aAUTjADcXekrsKJuHmnxZXbRtm3CSpkmCN6LEaWXdoHaxxjqX",
  "key27": "bPP1W6EYkxfFwSq5bRR4YW4efVtNLtR4rKbuH5DNbPxmfd4SRGQ3u5RVxwBZ4yubsqmazsxfVS6sPV5dQcd6AG6"
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
