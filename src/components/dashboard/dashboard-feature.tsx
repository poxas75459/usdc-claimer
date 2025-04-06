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
    "5LmnvifhYWBf7h6niKUfEMJr5WBMZRMDjnGkSXUvJVw9V5BNQ24BdDJQu54CsA2Ys4VgxAtnkcrd6awAQpMtSLpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oav3gLQGSwtu1MfJpeBNYmpw6ANYcAa4vrutPC3PBg4Aya1J6QRkjPHJcRQ5444SStpTCdXEwzYiRTyLZ7kXsFF",
  "key1": "4gK2ta2LHFbyL4axR57GBfzjmtfX3jFotAuTdY2KhA3VVMURXnRdduTRY53GXrk5UJgmiDufavoGvmyy4ry75fjF",
  "key2": "5KZayD5A7yf6BVKRhN9d1a2T5KsJwswP7d7hDCVp58J2qFu33h7PDNaFqJYSd8UhxVPLmszBarBbyPTS4BMdVWPE",
  "key3": "3oZDm1wbk7MYBxr7Dwv6rsR6HXUFV1UJ8Z16MufVpZLXqjBKSuLaCJFt4UeoAmnyjKX17uRrKENVTYwgZe9i4SEP",
  "key4": "3af2z5j3DKFMA14WLHGJ8BMMKk9HPwYsdX3wCZXuSPt1pcrfeQoU5Ef5koVxqV6o8YCFgHVNGKh71XVy5JjmTqAp",
  "key5": "5RrTLZ5WFZQC5986qubJy4LWwxCRMtUjYWk6mz7JFsw3SjGGsPsQUr6LJ1FDJA19hhDybdV9P3V2143KQo4yaucT",
  "key6": "3uzPCLHauKeZLeqSvMHMrzqLqQkTNQy6GnyKPACYTi24TRKfgyDxGTjnikqCgSjxtqFb3fa3fdMeAB7NCEbRZAyF",
  "key7": "2Xx1KoX44E1JoWbXYLRU1vw7aAkJ6X3ngbzybzfhB896xNhBm6G5S2qenfBfpESMZqTXyX7U91ew4PMrHzm7ib3d",
  "key8": "2GsNvLxAXTi5iTQciKWHDTEHJgnpYktbNHGfBySNi9ntKSpjByWkyXcMerddkSw6Ae6hMHeYKdrJmpFkR7QJS6ix",
  "key9": "379trZ7R7ESwWAYRRQAWwfcyTezN3HyU2LUAZQTTKMyfLiur3QM48A23eqjLdq3uft59nqCb6u8f1AJ3UkVeXRxU",
  "key10": "3qf83pduambV5m4bhWZgDtBZRLLbnBHhttnCTNbsXarxCn75yEJQiWBEKQr2uVu3BW1fJjsshM4Zb9zc3faPJmSs",
  "key11": "wv7bEgXP41KV2j2vsVxmW74PffyWAyLBKTQrhWLhzyB9rZtBYPS75sjT41jRaZ9KinHrj9CnpT251B4rVBcurAg",
  "key12": "yeaTT3qZN2jwziBB6yHkCHoJrC7efVbMFpF97mp8BXfAvcmXVXgvUeGRSEihvuQaD9eRQM94X6JC7hsjDBFXUtp",
  "key13": "3rUtiJzg5DnF7cM42XHayheptKE4bNWBJcAYgfbnXX8hARPaUfUNCNESE1zyhbHvEcdhUwUVKWST7s6U9P9oZvqK",
  "key14": "4pV7pDwPRHxzatq3anVYhQcdNzs4LnsDEsxbCce3QB9mhwP8NdkSjxP4bP5LYZ2GXYHb8EjaZAWwD7hTjkK8aCtW",
  "key15": "33AfXbBy7QGsvFyJ2QnTE9kBWtu9yXfrmru7yAR66WNkGDjPycZzQv6QPhqnzaD6fux2iK29Ly5CN6qm8gydg4tH",
  "key16": "4oaudMGvWgnjEiWY6PPpfUL9rdaPpGZGMX3afv4uu7FS2PWuj8gmhAJvmHGahbFLY7RGNdU8UN1kuUjeWq8qWqw8",
  "key17": "4SVPBPimXyjwozZ76ZNRQcuDbVFaETpD3wDTFgg4S4EbaKH8br7RrCD3k6T9NpTFntDL5NzLQXWckue5cqwfj45F",
  "key18": "57CpZ8M1KZraWH5TUsPAWc3t64PUkVdsPRmEjv6S9H9v378nsQ4tTTCB6Ki1Um1CqZ7wsKpuA8FtwE5ka4rQyPQe",
  "key19": "4fQZeHNag91jPofVEo2kSDFHBSoAgnbqJs6PfgHMwo6UkDqaBR6w3WPameQvMRVZXA7NL53h3s2PAEF1pGoRMJUy",
  "key20": "4vJ52GL3SBsGMg3ACP2oYTgMxHSUf1Y9QGgxREW2eDGvKvzsmzF6noJ8E6NL3FyTaKvhhpTyqHYdGrBBfwi98RdL",
  "key21": "2rf3fFt8rRiRSvgKUoZKLqnUEVo2zGGV5y8gKzcW6nErxVssHRY3VdF8UwgYqxXggA1AoVa9DqRqkJ2PfdMCFJ8Q",
  "key22": "5bPgSvrpRSNBsFZ7ykgP9f79mH94qXtDqLMagR5qYh7J4t9hECADs44NrjEHnsrqAT6QzMcHGHNw1bADxuFW3DAC",
  "key23": "4QMAxzyxqDwRMBTNQNb92x9eBq3ATJ3wFXw8MkLJVHmmV5mKYmUXVprHacqmPqo9AAi5pwKSzu467DYHCiVGubnd",
  "key24": "WN6UTFhVjhwWSDZ8QEqjGFJt4qSjhatiFzUbwM8L6XmeeuWH2BFmL7DHJeohjLbpR4k8WjZFRvwpFPxobKyJYRP",
  "key25": "JPhkgbMRenmgC4uhbxwScTCDkstpyHLVzN6wWpo2eey1t7fhrhQxp7qGXxmj5CgrjmA4L3FNCGwJCt2LN1j1pmA",
  "key26": "55MoFKcUmbcvinn2RNiiXVRgMaYMAQsoYr8mG6yV31kWvznnv3BsyGB8uBSQKZ2nedDk9xJjcficRZEjRSbgpckf",
  "key27": "3ycqDyuHuLmG1mMUrHvJTX6QLqujd4AwPxVzEZ2k6b2p93TW5UyFp6ufD2QzHiJ8TY9djhi5drw9s7ybUGLzhHvk",
  "key28": "3cxrgjgVY3pbcdXMxZxP9SJ3y582PDEfE5L9eT2ca9zreDjQPuxwFizEiFiFdYF8RqZo5m8eQEGNKiLF6f4RZ3Ks",
  "key29": "2tUSndwDmosejJU1bNPnYx3yyDJZ526FUw9vyJB2qhbF7UG2AkBCv3DK6eV3K2ZQNcjZDTTfSe7W4FREBDBBVSzP"
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
