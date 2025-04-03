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
    "5yTAQ2tFxgw1DvMWRei6MU4qh9uzYEzy3maRKbvaNVMo8d9nB35bFnpx5LH99CxQdtcGC2EAw36JqSQAh8wKvKZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JkpTBDerqXeHFpqJPrAPubbgMS49Vvr2sECE9QBswF227NZjZJfczEiVRXdSKA2UVJtM4Lpe7PAJhHK4Qcq2fjV",
  "key1": "PBQMMYeTZZxjqk6235SykrodMBSePyDpFSkVhoMgbonZdScTHSCJsQTFQ9THghyzJ8f9ZALNSCBkfkVDqsTNgE7",
  "key2": "4UD9NhQjEXBGrfRdXZYgupTsNUK1Tt3BF3vfq4kyrvtVi9tjN2M3KSYKV7RkqJUPtvJXSC2Gxza4mqcHyWVPqpYY",
  "key3": "3wMVnNaSA6MrS9fJ2U5qu3N3HiPZ8nUxiZtHCFpS1aMNKVJ8qzMTNkH54wnZ8AGf7yB21XrPXEBengmzJj5515Pm",
  "key4": "24A4mgFdDcV5RPbpC1PFm7xk6fniNgJaTgHCPG1C6SoavBj1EyjQ4Szx3x6qQnAVFq5dLSTaoFWew9q6BDc6JMkx",
  "key5": "2jt6JcDSsB3FK9cCse1KvernYemaS8AijybC71f9Fxktdemz6ardR6dfipCbo878UeAavQ4wzqReBFzWk4DCAXvs",
  "key6": "57jKryWeEtaDKgk1EXSXdkBht4McDk7igAaQ5bUkZmxw8NodsmiDHZ24vggrfcViVpKesFWDQEpvFp9WLKSw3cU",
  "key7": "2Tywny1zvjFGDnWH53zJb6LmwKMV76YvFfWyC1wTKniVB9buvHbhbmtzb2Ard6UeJRcFMSjiCeWZZYYY9rJ8sgbG",
  "key8": "5W71NmeTvQz8THUer7dxKvBkLowoJHpVgYwp4DmAWw6RV3D1t7zeqrY3TR2XKVEz9DRUFEhTbxZ2j2G8inTJxXtf",
  "key9": "2CrJciXSxW9d5TP1gZmqaCzhSAQcoXBn6AFDLM18ygkLaKrP9czuvLYCjYJxok7ye7CmDbsQNBD4tbHmC48eESho",
  "key10": "cFkq5y4o6cNZ8z8NJfk5ad4iiGJRoXcy1tiwzxMLP2warf3ceJwPYGwiVh9sXKXbVppuxf4XqRAtWJqYXQhZEYU",
  "key11": "218ZChVDCn2EWynAStp4KgiHzgDCQ2mtnfVfKCYQNAScNZ94EmLB9U6LYd3mJZ68QoxYknp7FDvY7FQ8Ty68Jegm",
  "key12": "2Rz3vFDKLr4vYTrBjirt5XopfwAqQggR6daeArgtWoXDMf77KcmXnnNjGVDb8UxjKY4u6AQiLXhS9QNCd1ndsp3q",
  "key13": "2K3FQJMus2CqA2oW9saxyBMX9yXW48h9NsR21u8Ex3SmGMz2AqGdexn5uDuZ97ebnPrgausEHkxHKEEijt6PKGag",
  "key14": "3WKXeG6JcEiKek8LWLxLZMQoNAB7K4rU51SPWEEtvXpaoJfY9sVghhstQ63U8khCqaqjY9GFLzTaHteAiVtVB8Fs",
  "key15": "3HnoaGuiL8zehnCJn2BpTnfeqFF3xwWPi9TJ86K89BS1tYG8M1hDbow2P3iXTCRAjn5Uqw4CQWaotYBAM1J7C9vb",
  "key16": "2821fNX7sSzDUZxC8MZNSimriHLZdjVud4d4xC77vP9SSqG4Wbu7gMRXb6WtULwW3h75acakyWYB93dWtSmTRNb1",
  "key17": "5pzPzhQn9ukscxyThk8Tv5YmRvmoxSy1TZdCobTzuExNPYz1U33JnfyG41snigr1Bn7LuDsJkATWdYozqE3rTBWk",
  "key18": "5c6evoAXiFDqDurfZxXyw5iHjK18G4x15WNSGCrdsuCWyEKFfc85iX9CDAhKD1jwG14YBU3So86KoRxXsW9fWc4z",
  "key19": "41HnihfwFVyYtcH2v6FH57LFVmrrkL3oowQSgahuuovnxdttKbxY3BYPPrtudowjhKnQshhExmZUgNYJvds7rVz1",
  "key20": "2UjJagneU2F3zLMJqRjzFSbXqU9UbmtnuH35Cb3r3oT7VxFPA7w1bgtRGWhazZUNosJRUkAyCHeToAbbyzPYDsfZ",
  "key21": "62C6HL1rVBN7hWoFcWFgSUB8H5eb5nmqPw2bH7yEYKRg19wWpXb9V8eztPjURTt7XQDvPEmrY82KUFZQVZA7W3R9",
  "key22": "27Q9cFnZ21EkEnKVDgptdTsPsvJtsWawxkkmje2Vjt3nw1XHtLd3hhSfhhkNPbpDPr6aRky2WQzqNGsSzEQB2unW",
  "key23": "44q9BU5w3cLABWiN7WfbyXYa1qkQjHQ1PAZ9KjtixgxKpzBd9HcuRrtcLyd9wR4S6aeKj29vfh9QZmcVWSW3GGJo",
  "key24": "2XNS3xPJNz3Pp7THhb11o2gAgCFSJBE13UHAJ7H9q6xpdYVwiaWTX25DRBzis2YCGwERFB1q8tTxmCTYBPonmmhB",
  "key25": "2z8ZcYRevyHBZVNEbokH2LDAR45jXGh5esXLQ23oG1j1zW4oHZtNLD3MgkeEbBa63bjnSEb4kcjJVem7tPcTT2XM",
  "key26": "2xcUDdsBEdFP4ES6ssYWD2qQqV91Ux7TumMo3g8g4qmaJCFhvCFfFB6g3o1GqoR7FN3SFSG4jfdR7H9Th2ZA1oWD"
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
