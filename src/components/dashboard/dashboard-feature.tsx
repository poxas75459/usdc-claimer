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
    "zmwGrSQwPrBAibL3xJRvmKPfkqBWpLTNe3hszNxrodcn3jVQX1rghoVQwL3CNHrGswUVrtvZuBGXM5SmMYaJ9j1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H5uLeZu4Yzifj255ZLMxuDLG58i1f8J9HJrKvA5HDyai1tEzpk9feNXfkYDSKCUNH1HRo8UTb9ovRavnMXYeMjn",
  "key1": "2xDyAHVwBpBJt4rJEgAriPcRgzHDGQuM6n1GrzdcWurremEWNGxBymQreuFrMBFGVorhjs3k2ywWWcqSUbiWJGYe",
  "key2": "2xmUsjfyaz8qjFKWB27AfZwUNe18C3AcUYjnCMghExU5Gy4DAsKGrzFdPsQcFbbeaYTGDJsiHKkR4NyVqhBrZG67",
  "key3": "2kMbuD6TMW5aVsNx8p3phHTWF1ExQZ1KyBsC3UvfqdqKTtmWwQtr3D7GBDJ15fyyj3PVfmp2Nd38bqrCNBLp3ZmA",
  "key4": "2xVSQetJMJmjF36R8qpvTgUu3wbGcQyzL7gmEvzaxgzLaN5iDYfhCyBtpWki5YuBn7jQZtGiBotM9vTvWsqK27xQ",
  "key5": "2NgN1K91XazMTZixRdmiMKgyRLDKCcjgMFe2V4WCLT62Qt78PxZfMmRcCk1Z1gUpqSUx2nR2f5KYvGe2H7st1vPo",
  "key6": "5vWEtvNZ6uAxh9JBGuU19Yv5wk5DjFbqMDfcKExBHsXTSc1mo32TE5pnZaXAtkJ5CtPowCHHWLyJEDQk9nNTScMb",
  "key7": "2izhqPeY2LVrNBhhkto9HWMqR5JjUVbbjFuAfpSRWRrV49SATyNnUmu8hFvAXzGavETGgnbnq7F7L9atUYXVJq2d",
  "key8": "53edn5kZb3tVPGuALxPMWmYmnUhVzYMoznRVv2q8aJR5YDqMZVKBYRoDWYJENqXGeDbFPh8JaEEumCiFAYhiMWNP",
  "key9": "3cHfM4yFV8SZCmrE6Z1DDponzXWRVud57y8i3o6dxeDBCkhuUUqvaCarVyFroUMDkkiAzFnF7mrb5embSDBaYJxu",
  "key10": "3mSPB5cjcCdXfMj9Fxww4PQhfNvxrTiEYcgWXRvAx7ZEUDigrtPjePYg2HD77iQcj861B1wqqDRv5RvntR9gGm7R",
  "key11": "3xdhHM937SdEhLcvm6HspUy3Vp4XXoLToFWmPm8thYTzCacsA4jnFD4ZvSCTADvDis65mtC5fS6v7NgAn7HGvmpU",
  "key12": "NB2gTtAcHN1KKQE9tpbeD1DvE2pXG3m6TBWARPWuXYoWomoyxN9zt8YXeSPphYrN5V5gDRaa5iSe45JcyVG3RoW",
  "key13": "4Hf5CLH43inR6ayjSMFLgFXzs6WnxEppUxnotHU9ZXUgxtfQLcAPBopXGuVRsdUPcERr4rdC3XDWvWbeGxLUhq46",
  "key14": "5jHZqRhc8n5Vk44nDs96YHAcQrG3F3tKwVV64dXigfvGbziPjXjRnEdEkBWXrYBZrKqPz49CuA99Hf4kiQhQmXq8",
  "key15": "9vx6461DJVJhWMjXEgUVxkwhKhBdr9Wx8p4QyoDSHCQ8GtVtDmff7PGPXag6SPa7LWrfoVHCRLU5Nw5BsBUPm1S",
  "key16": "59MzNjmxpJQsFETVrjZ74N5fJ65RVhnqJS4NuY3r5v7zPsH6N37dEDKDomGA46pLZiqzPPsx8kit3JV2bGNEbwmk",
  "key17": "1s3cC3ZroPyZc4Gpb1Ph29dBnNjcFvtX38e1iR4yQvn9GqQ5SyhfU3NTkRq6iooLiqo4F1cu43cPNdh5M8snqrz",
  "key18": "34iMz95pHutEiU14xTkrJ6FevSibrP6Pvzb5FABLodhmHWVodhFrRUATCdtqqtnXzeijsRj6QXUErtupvYDLkJJi",
  "key19": "3BquS2iVekANk2NSeAUCULnVyMHfqnrnEShEJ8z33b6myGGdvGiFgwb5o1P6rBvbHCDcqufvhAe76SweMTqPA1Ha",
  "key20": "5tF1NEuJfwt2eAq8VbHPJAXJdREybJfL59yBbQkGi29pekYyrJiUES4GyM9dYvdRzPKyGn6TAZKKgbRmtKZBh979",
  "key21": "YySoxNktekdQSHpGb5j9Pw2X8zRgJtCxWjii8aAXRiwr1ARF465wMjpNSsdsdJE2Tfw6aUJFwimEKUYCJYxvTkM",
  "key22": "C9JXhuvqjxUL89JSJbzSewRsFnBDxpFEKdEbLEvi3r7aYWDpqpsJEc2e8XxGmS5ouBnjxRc3ACDCJSBjMFbyM13",
  "key23": "3FXQrridFNH3wQk9LqnbWfky76Y4EUwbMLp6WdsRKA2GQVZvwu7M8ZwRKnV1XGtnRkXw8AGW5DnQRmp6F4exL2qW",
  "key24": "62NCkAvF3GqJyLJqupQHnmeE1v5hs6koaKRNXGS4F7SiWDfqdqhFcP6X4EsseNixdCKXhatJLr9BR5zmZTQsrDN4",
  "key25": "4iHj8YkWgzU1H9kdE7qVbxKEgX8cvCt4oryjzP31Sxkz3HV31dfNXUmtMiA5AyjPMMBW7qgBpdrQ6sNZRhN1gRyS",
  "key26": "2q1gJ3d3kfno4J5iNfTu29Ab4JAJ7SrmzznYpGV26imWdpCb6Q4LVCnXhCQ8wekm8eUyXR5Xha9YZ2REsVMY1uVX",
  "key27": "3PhBtnEqCZE52i3k8ecHvtEpu4p49yTmDy9LFmQ34mRr3k1WA4NoMM1HPJ77eSbdS3GAzvCWohtxanMLBp7CAVjU",
  "key28": "3tNwQHLjqwc3Re6TDCGiRnmo8rQjXJHSJcsrCC3sQTfyqeMG4gMraof51XsJmkjrf9XsqCbQ7spjzihP8har6Ee5"
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
