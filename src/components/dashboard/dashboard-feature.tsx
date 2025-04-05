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
    "5eegBueUekR6QSWGdTWv3MTwNYYcBm43Hpd8tVhXGnW3bC4utaSwCKmSJMi6yJ7Wfwf3m84rTEFNyZ9nU5fpP2un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zXeBm7VG4uDFN4PFd7XbcGLiqcFHkP4roEYLeuQJmKRLxCXFFu8fAqccumVwmGh2xrpKmEomZs2GgZqCCStdN6H",
  "key1": "47SXHSfy3St4KwHhLTVnLCgF2Z5RzHVRPBr6ovBLQFQSkjaNWXrFdQ21MkNNVDUXEUta7HRjBRb3U9t4bAv3KCUQ",
  "key2": "3Mvxu29Uim9cs3ZV9Z6kzcDy95FdGPHbjoS4KU9LFXsqkkSYB22hrghGUGexyDBTpMCyCNqpaeoAK9U2dMKcTVJz",
  "key3": "vvG7dg7vhCPwRm6f2TjgGQKJKqRyysQwaqzuYCBJtFw3xTmUEjzxmQDwPr8NE2bK4x4RZoLq8whb3yC3jJbn2hH",
  "key4": "2uSue3ba8jeZkABTfz9J5D72qB5qcxXUXwgVz6zuwXLZnrnmaYHbYYVmqwU5v9YcxRdC7TB7TWa8qjsHrCioBNbi",
  "key5": "4aQrVL48SZyjYTAfmR5vQaeX5zQVR4SmHSdK4UEe2M9Ly28Wv9eZ14UF1fNMmmUTF6iAuP6jLyj8rivVycjPg3hM",
  "key6": "4WZQbVcYXwmWRHccaGHGYMnueWzWRry6dV3MmYnsdvmQZUaZbfrzwVa7FwowwisS3aNBaUDD4BTMGVYdrXAnQnTP",
  "key7": "4kiexmNVRXrRaTsnjFRqgRHnmVUf5zKJV9oeeC5arWAfnF2mmvSQCqoEknmPKnZ4QoHuJo5a29yNyDfVaQmV556n",
  "key8": "2t4tN1awDZhLxFrXfLNq221GnGUEy1trWp4Si6ETHiYQg1YDaBo8jBcPfgDdhCDnyxMvK7cVc2uWVxy9CRhT3Qvn",
  "key9": "4pDRNUF4RS2MGrWAb8kQunnzK6b7m4ceWah3m2e2PWEXeWy9wUpEe96wYsGVHV2ycJQidDh4NJ249DYiTvBcNHiA",
  "key10": "xtYfv1a6fmSsoyvGHYhbHJGYY5otV7as9jFo9tJ6qUbKynt1SgXDm51QU4tCdPtPgGoqwSew9ag56uWDZQhBhPW",
  "key11": "5KfSdAzJUeiM3u5HLQx4r1wG6z6ARHNupWTJ7rhXudPKJg93VJKmuuKn1vQpKgzZo6CrswDFiz1ujd87p2nZHYFK",
  "key12": "5JsKfrUjXKPbKKCMz63j6dX6hNCMNtxM26F6JYc8xVmA78AHoP85Y4hCktgq5RKqkex4S2yP2KtVV7VBHbzckW8Z",
  "key13": "3x57HpGKhpZbw15WcN1WtePdffUvoBMjeHRdmdnGWJvQzspkHfEB8W4YS1nDQcLGJxRBxWnXg4XoZCgrZ1Pz3ZD",
  "key14": "5AoWwDyqqNfGkSg1V3xCn6oafyYA5gnS2haK1oW2ymhwmVeAs2xLxkT4ikvbxfy2EQ1xb5acS1PXupraTavYfUmw",
  "key15": "nVzgu5gX744yADLLw6RRs5cqbfLqHqsJ7VzxuRiERLvsNXyr2qkHUPRGLf1ffFqrxBYzSirMT9CRG1M7U6yamrn",
  "key16": "4Xr7jCeHr9oKpwV6b7e21KDDrhN7icE7EuzXRHjnVfcov4EEDZHCtJNMvsCPvPcXh8K8ByFBvcu3Wqj98qe5769b",
  "key17": "2v7iNQGaoxKoUVmnWXsug5V71EvuCVDfc833UaicqSwNU9SNPA6jEpfvCqmTW4YdtKdpBLDDe7PUqdxKzTPUGSWf",
  "key18": "57unshWTUEM2jTDHCHZubFJCLacD6K39q2MDLjMsuProsVM3cJmBoiZ6Ysb6UpVtL6RF7hCRt5vAfsV4ioXANiXw",
  "key19": "4eCANZNCPrQUSfx3bmR3xMnUdQaW7qa3UVdRumGv8xnSts1wiRSro1Jf4UHbeWKs4gc5oMt8gov5fs35bbQbvasM",
  "key20": "3SV6M56yBR9hMjSFQvJUqJpiLQzKwAmK1zUnLc3qRVBj5QjwJ28pCSE9DLcjoNm72apCoDmPGFkmjvNtw6MDvj1V",
  "key21": "5vT7NYeeSyXcBxEexAYHMLwkiawHU38CiM7fk7WbKZfj8Sbjo4JxEWot9ysiGFpp4psnP326fCHtTbYgJxLgviKt",
  "key22": "26zaUcRFzX26rnkyoaM79Ar3DAXweRPGvkfXckcjpffJdfma1cPqx2oVHHrsYbAT5W1g5rEeHqfUBfaSQHpwoayV",
  "key23": "RezhvQqqVfke6AcaUNCZoV6iuZZGdD2E2MsMiR9JqqjNPJ1omahratftQhH74vkeqFxrwk2sE2Jrx8VV5fD4xdn",
  "key24": "3mYNA4zu7hDnDj8JQccpugudYmUjxRVTAh35SAm7t3ZAzCkoQQysjpYt2w2Egnxih9nTWH6F53BN8g5wH83iJLHG",
  "key25": "2V957ojKKuLkVyckdtCCbKo9LbU1azVcJKd4neGi7qpSRhsvF5CRFQwgdHAbLm1PXvQhzGLSjMRX4AdzGp7oNpjk"
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
