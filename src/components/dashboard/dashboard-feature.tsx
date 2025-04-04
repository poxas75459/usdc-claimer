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
    "5JfNnXW97vbEy7pJgEqjJ5C8Dyq9pQuwHAhsbonU9heUnvvsYmZ5wMNSCn1RikY4kFM3241MUMwvCYpyaY838jQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQNhVtPaNWU4GbZFXmxow9mFMkc77AZxErm3zyTs2fEfMxnCStV1eozHBGzmUkbsWzLtH3VBce3b7HwYqykAdWv",
  "key1": "4vrDfX9xKyPWh3Fnynt5nnreeu8LpXwFRw9oiKNtwv6wb8cT1mbMuBg6PWP3dXPDXrHHTUsZ8gFMvUR1ngJeQdeP",
  "key2": "nJuxpskLDHxBunbejbZjsK2mnn5V6A6aX1GrCc3cjwxeKWc1Sotz1yjeRT7V9um1RFxbEZ3T1ftnak5hyjrwC9q",
  "key3": "37pAyp2Y4ca7mSyAp3kjqEGSX3RX6wFcmREUY7UCEQaLEYLZLj5CwmpsGQdM9ZFhKax2JEWQAqscESqTWKwo9Tyd",
  "key4": "3iY6KVK67tr1EBpmn2jVoWR1XxDMgK8LNyCJ9NpJcv9nMPLG5D1muU8PvgKzrobQnvxpchSoSQhFWUsH72c7AJTP",
  "key5": "5uoK5MBF1uEgqRRsHcZeXkJTBEGczhuNt7XKVWbE3ySBPeDUaXnNLySbyFngRnANdsUiJQwqabBQE4bpYFNefuSG",
  "key6": "Ex4J18TMo49NH3MRcJjwuEnHNhwCUgcpyvUE7fXshudX7htQzN4A5bkQgxuerbo3Z99LBVaDuv14rTR5d9vEKQb",
  "key7": "4KsauuM1eDsEHUpwZfv7vPGQLuoMBVBfSiaSBXVqEQ1gZqnv8bqrnmqUcaiJ9XDSPhxjfRjY3Qspm3TR3sDSGmPe",
  "key8": "2cbB6pae4TARZtcGhHEwLgRpYaJKEW1ANdNDLJTXmSumWnr54torjpgFpBbejTdtgwbLJyNEwBgzF7FxLYUbMYbC",
  "key9": "KqxoD73iGWKHeAq357Fnpcv4eJ7FZkrR3vKnZ6L9rZzsjVNibwVGVvMAAfKzXRdGykZEFpQnF17UVHkaPjZqCem",
  "key10": "2xAZMtaovR4MiDgrfPtg4Jx1bN9yKzSPnXRu2RzNpmXJ3Rb5vcPPSf8enPR9xjCv4hGGNppzWCY1erqSeis8u4rZ",
  "key11": "23kDud2A1b3DtuGsw4QFcFqAsWN8pB5QrCbLeXrc599JWsaD3jN5oHSJdLsqtRXZ4N25hzD3DYQDTL4ZDE62BaSe",
  "key12": "Mh2JKXqHr1xj1iV16cGBTeASQn9CbBFZgsctW3HNYo6XGhTf87tW5Ybodd3tgzCemM4A9nAttrxWbfTyLKGjCq7",
  "key13": "466NgqXP4Lo2TWD2HxuHmAusgaugxszSbrctDpCPVu9FAvQ7Tczs1oFY28s1pv8q5YApMqC7vpLUUNeJhh6z7EcM",
  "key14": "2LjDKPUFedtFB17SCcpWcXcEBXWQA7UcZHYSaAEgKWzdiFjGYN6fzsNsJg6kbHe87sWNRp6t5VmddXc2qkzq3KXf",
  "key15": "61aydaWBCUNkZz7tEm3yW2nXWdUVWPQSV21LrRNU9grxrrxVSREWDcBoUZJoeLdrqcsAmZVnFoULPJ7puhu7KgXE",
  "key16": "3VyrnLwar6aXwkXb8nZAdcTKNRQDTfDxpVLZZpY6gf9HVYxhMLCX2UH8a1FxNu5qeScwWXNU3G2faUJa8GJ8joEr",
  "key17": "rfEf2UGMEQ8LRuwoqmnp4s6yJdLNVTwW5CKUP9hgTWph1HawTp8bMkF132Z6wMGrNVn9G4Hn7Cs7gKQHnajVFRC",
  "key18": "2dCLXLYgW5sXvLN9g1dXyV1pD557qw3DLZx8RS2TEMvTa7YDmg6ytNmVziNX1Tf4mRZRYGcuremTe1zzFLXguCHV",
  "key19": "5vMXiMbea6TsFQUrPCGZnoEyUNccJGGqvp8bdJBYWuDvvNH5kY9wfw2VGpyRUqR6sSYt29HhRHvTeELVqkDVGhvf",
  "key20": "5gpDZpNwVZEJd5Uc99f3w4fU9eGQ1b8GxvzqM76bZMCDEqso3yQRnfaasW5YHdP1gyeqvrV9hWis9ATtejyF8Zpo",
  "key21": "4hhKY5U7ayYa1G5Z6UqCsRpbmskcTFgeeC73ZzAsoKxcsLPXeWcytw4vHMCQRTyJhNSCZQGsRGG8Jcpd9BFmrRGk",
  "key22": "4gxh8AN7RYUwUQXxQJBXpibxwLNRgBCB2E4yXRA6XHPqF7m95wNDGMRcEKdN1Nv683Bn9FaeWb5JABdvdmf9fQjp",
  "key23": "4tJ44ZxMftFpw7Bfu8W8e66A7nvS9FS4wycfGssK65VYVsBjXfgHdSiDL3CZkHp8qEXG4apGgsuufLmxpaCeenWH",
  "key24": "5Aagm5XMerABQccFCmXXffu3CH6MxjuixHNEogkgQvVc87NatYvajHtbvXVab7E94NwDTSowJXug6dH5Epoj45JA",
  "key25": "qSPb3R9XqN8MNQTK4T3DH4EwmyFbR9QMoFgbyYFvGwsB6xXQ2GCQF2wxvHAiwHXcaFqTgA7JA7f8vbLQ5PszGxA"
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
