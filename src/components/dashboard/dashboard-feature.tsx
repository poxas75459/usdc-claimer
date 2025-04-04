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
    "5GFkQAu6Up59D3DaiGUzD6KQFqzp7zbswXrBxAnBacLou3uTWSCg2X9pXi1yjUKBJcCrEnGmhkCkZtLD8J4vhbGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BGFwJNcBcWMzR5yz8xvipuEnjEfDZt624qy6nXrCfmk83r5f3y4xVSKcCFdFz7uVcmj1eWti7SBuhVXm2K8E5dv",
  "key1": "5hEVMrKfxGgE8uixcU6EeyRZgAyU4wieFJPYayAF4xZTBSbzxkj9gjR6nWNsL8eJRWfZiPFAaxyZAqV2aGaQjnUw",
  "key2": "xyXozuKVPUKbKaGvKMNwFhmhXCEXiUbpAQAkEcCB4RYSFCHPSVqNjT7d7HxLFaAR3NagWX521kNySqBKFNa4xyK",
  "key3": "5pgtHYomCKA9mzxBn4Dyt4b2ZAojDa9ZPz4Aps9wx25NQskGJpxika192VJr2NTrQ6abrLukNKsavju9rsBpNpV4",
  "key4": "64FtsNH4zCuu1oaPyVwCAXYAuzri6S9vZgQWRHj9sD5TtvRHFxaxhzVdCCVcBGJPEKEpSkB7oeksTLen65wdDetk",
  "key5": "5HFL9wTikyjwaC35fVSRJNHfQypr3Y4FYvq5gFKVYygJRGH4EViCPqFfmGSpiaWwLzRefWnKDom86bmCkqizRinc",
  "key6": "4B5ZvQpxNcUvNYmsDG1NH2LGj2tY9GraRSZ3wmkS1boTRRtoqr6S6J9hf2N13YXmGnKeYhQgF8qwwJHLLkGC6bjq",
  "key7": "4CHB6LcsRFzuic1AfTTHnagUGRui7jcemGGPzQmnGrqhvxnHz3w3phX4LK7YMBBKd4GpkGn1H5pEQywg7wk6snKM",
  "key8": "57LdNAWUG69oLrDyW47AbYhM93QtzmKAiLkjgpjzb7fsRTkpddmDeyEZH1aKGfNLymzW6qjrt8cHMoUBtMgmHf1j",
  "key9": "4YaaQsmUa84UAuZTPt8PvBtitCpuDseLuvZcG44tNDJfoMWfDTHSgD4Ti1CcWsAgLoxcu3zerZT8YyjZcxTb6MW8",
  "key10": "3aUvz12HMq6wp7PE4FTkpv7zhMgwWbFepEw937g3DhtaHCiJ94kw4LfM6Nhj9AopgfJZgooRDnvmKxBfaxGv9NB9",
  "key11": "Np3bMcobCa6aj5yJhttdrf2JkVTfz8XJL5qqFUKf8CcmiNSqVzipZDXvDJrM1ELETwVUzDUppKAafFsjNmJoksL",
  "key12": "2U2ESCjgsLH2dqMTfxUkueoq3K8ZGtM8Jb4jpNX51UonBqmaBHBGkBwydVmmfiEaaBJPWKqJZ4a8YsZ4wwzbMpXv",
  "key13": "2qDXFUBk6Sb9D9GLAvBvS8PGcyB3spADayYHW7vYNvDQHgNQBFyi4Qmssfv3rB4HapcPXRZPxUKBGgcMxFk3J3gf",
  "key14": "9pUBukkyadepvHqv5wpZfTxPBb2u8GkLfTPaqfuSxMEjZD8MM1w29gZYypwb3uzhJGRComiGQTLyA6MBTSMVZFF",
  "key15": "4dB7uJMneL8oULpT6fkVbJzEAc3V1ZrVcABywQUhgiL8r6uhwzXPLkNFLXjp6FZZaA3BUEA3ghKW8pfDDmWeZUF4",
  "key16": "5gXDA5KiQ5kikf1MCJXHvHEzTL7Jk6D4Wb9aWdePxH1qdb8KgfwAPjeAuzfehGcDDYqoP6hqrpi3pyjdSR2FMDUx",
  "key17": "29WKJwmgpNPakgYYSiTkcUTLKrFu9ekPD1bsL31Y1KZ8XbRC1zJKGZ8XujtGCGBUomRyey2cPUWsNLKUwNMR8otk",
  "key18": "36CYY9YEvDua5rUNNxSA2ThKNxJYZZ89ksRA7BwrM6jgi7KvVo89VjiDjMV9myKP4ByXT2eMMgEpyV4AN5Xk3RUN",
  "key19": "3fUyYVCqZ5MqgNumGhsbipzbnihDhAxS6YkGmt2HYp2TdU63YkAhVfyDB9nRf7UkRbngMKADCh7onrbK12zNsapm",
  "key20": "4Dwk6GEJ2CGv3mnV8bnRND3hn62Q6kM39SLUHL3rKgVMSMmUPgSe3xX7j9CdNuK1c59QfonTeqk62b3sJSSgbGig",
  "key21": "5KSsh12VhqpPH9xb52URRDfyPyH8e6H1FKURvm2jR5CgJjRb1DXLuj3S1XQ3Dh1Kv4rnXMQnkszBAHUXZ3dML11g",
  "key22": "q3iX6xKDc1eG785gs2WTHJPyNZpLATWoud96PVPXQHwX5f9dkFcBkJrohdk69562XthGNjp75aZwn6BkwWw1LPT",
  "key23": "63BDW4tyvYbd1rtunwvU3WNS3PCVNMrHYdAruvon4XnFh61WpcCwFEhLVPj7TiZq8fm3SVwrL4yJ6JKjJDpHdTaH",
  "key24": "4rw6pWEsgUvb1tmG1Gar53MunyqtsM54RCPYKdWmBc9Uc6j5j2Pms1L2HfZtvSxWirnCudRaxQvAu1oyT2fbGwUH",
  "key25": "5VzczKyvFrtYnzv766Gt3YPPdnAmUPtHbreiMW9Wm6Wgf3NYziZTZkYeVmQCf1hNi71YNJd3Fde1PYqwQx1eMQkn"
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
