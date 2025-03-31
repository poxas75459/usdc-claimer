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
    "3bCVD2NxJYLNCRUJSiGrnBTBWieNokesqperR97KatzU5gNYe7Bc6E2ao2vBwm3HW58fBykKq463Wyys1NrUgBYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aST1P8x4WyKXkv5HHv5psJusCCCwY1TQFC1j6srRyyUp8DQiSWXXnhw6uTEcnuTGyguNbmiq4mZNJZpVo9WbQXs",
  "key1": "5YxBMc3GzqQfyXyvHM8uMyc6wXbEcB6gej6YmxXWKf4k8rpDReM2Uxt8BskAsftGnUzNvB9LYSD1TwfttsZ9vJC1",
  "key2": "bGsaNmHipk5im5ujzxYE2iNyDnE9p5ihnUverDE6oPbYrPE3Mp6PTq2bi1JqptPEoJE8aNyvJhs5dRcEZZND3Fs",
  "key3": "3D8Xz5LX3rreLb2A2w2xjJYNUj2AG4ejhcvcs8tQjCvQNxM2EDXpycvyxyyqk5GM7bMWq5ApCZotAjcey8ML6rsZ",
  "key4": "3eugAD1ijyV9Th4ivAdkK6usLddXKJgBP7sNabTdun9Hy1eTpjaCcmK1nS1gyi38TEhcwJn49Bxh7VSFDbeQFZaj",
  "key5": "fbhZ9n1C1zFNDwva9pHLSyjHp2Uw3eGdspQQ8tGVYZ5YQ11f1pZFck5K23ZZr1capVB5Zmaf9tucbLqf3mRL7wD",
  "key6": "5FBask9yQx2Pbf7RwGTzokzZBrP2hijFg6RDR5ewDzhTiZ7YTTgYAodezQ6XQArcDN7DZUshxnte5sjCKCoJjuye",
  "key7": "67C5ZuA4sEvPToX4up9Nd2YhY7ytH8H7U1YcvXdAw81yjZ58cKwVeBHYUsz3oPTFAbkNVAn8iGKQ8JtYzvwyQD1u",
  "key8": "67DwzhVeNifLXpvigE2HWtEkDXE4qMStMNpGz7Ai2fN3whYmHaoWD12L2ZBfWbQuBfDV7fyg6NLVyg9ydXKvaSgA",
  "key9": "48sK5Y3hpiSpfu8qF3CQ3HxHs9UGRmeKqAESoXMw6afngvygxtKaJwS6Em334eZMymv8ABBfV4eDeaVjyyaeyb9C",
  "key10": "3KbCGRpAGuPxiFYUWqvfWnWvbadQNFfxvdwPzR8AQp393Ek3VfWj5PY11sfWmDXfmSkjaJxQMmLfRdWo8DprNxCR",
  "key11": "2ymT6GyD3oDuKQ9jzHKsC4J3HqQgPnvERTmMbftRhqKwyS6RXFMvcXE8oNRxH3fkUDY4AXnymZsK24n7KYbVKfuN",
  "key12": "5DKGk7CiVk6M7zQ977SfGHcUApi2qefpK1SLAag37JAMAb63kk1X59KbCS7ixMrgCLJCQaeuRjJRGKae9vfBBQrr",
  "key13": "5GdPGSq8LU999BbZ8Evy335x7k7ppPnaibcDgQU7wvxCzAPstQ9zCgpqcjWg4azWTGwsd2SYuAC4ZMVhKTXWqpGd",
  "key14": "nhiuaLv1VEn37RtVPDfyK7HD3FnV227zFUAKNfxrFxsQvvf8wrQVQy7PFX4taCSAqecVT27QWBfNWA7381R2YXt",
  "key15": "4xY1N1qHiWHMEXecVwq8qtriF3axqXkufZNsrV2ubKJi8VLUa7iWtTcP8mj4W9JvwXzK41gkzwCpLjA5LJ2py6Le",
  "key16": "5h6kjnQZRrVbZ27HUaayXi6xqXxRoYxTJxCANBjK4Ggv6m76nYXurv5tWWDtnwdZ6hCUvw9ixZgMrwpxdupM62bz",
  "key17": "PrWZcmZcQxzNmX5mLu8WuQrdDv8mLf4STAtfXYuyUTGxbAwR9LGMDsdrSwQ3EdLFgSZrBnUX1yRe5jmdsHwYLiH",
  "key18": "5aA6k5cSmAQoKUND5bp9a6X4pN7NiMwx97ddAmkNmBD2Qbtgjd2JhF3anm2pfurm9DkBb2z9n7TSWezsWNuwSuZi",
  "key19": "4QSXXW1D3zWnTQRUyBiuxGdW91bMoP36ZXnfPEPx1d6ohkVzuor1aEfdPN2e3gLq6kAnN9BYS2kruyLqDx8UDBbA",
  "key20": "Yy6CEe81E5N2hD5uGMpTyETZMbM2Pi3FwVxFB23XGEXnHaVTrdqbDjtfULU1awiXeeKjXpvTBehpSXGFfjq1yxq",
  "key21": "MJ26dBczm2JfwC2kJ89yuwJjAFKyt6uNUrLJBjMYpkSrzjdMqaZ7qxDXzuf9epgVPpNxJKZpvHijSHrijMNgmJD",
  "key22": "kUQi12E1yfcDPJ7dMeFVZ1r1XpkjQSvX3T5g15C3gtQprDTKBk2GbRSXNKBXPeGujGy1iCjfNrKNz81saxxrt8U",
  "key23": "3dKcfw2VoBPj33jvbdcb5C1CbG7W3xKGoso63QpGST1SsPPhQEfWntxCVkLZG4cJ1j5efMrNX6QeKDzxYyzkhRaV",
  "key24": "5KdXfXPavZfKQZ38VLz4TaVLnoqTqbgt3Y4PLbvbmyPtNf5V1LjacTrG2weXZ7dvX41MDTCbaL34gWMwMUAWWQo2",
  "key25": "4qB5dWD3dgCNrux3AVQ4uw7Kqc5Qh9t7yVyb4d4MtLvxnaWm7eALvDzJNtNWGXA4TYPrssDv9NyvWzEKQsg131PE",
  "key26": "G3oaxbGNkB3vdDMDo1sD8oRLEiz1tAr5oe47twdZ9pqGaYt1mbvi6DqXGpFvnoELagaeteGTwmHZihNedF1mUwQ",
  "key27": "5mQawkjTdJSDfb4jJka8eA5NunzLgw1JeowxDBrn1J6i9ZeSh16eVgdn2N1PfjzX6tVtMgZcKqp8ciYR1t4XkfWs",
  "key28": "PPmwfKrZ6DVHdzvpqhnrmpq8wBJBrBiMk2rCeaQVCvQfjZvvYAKNVqtSfEXfSRVwV34pMZFWrof82ccry6Qy6DX",
  "key29": "3CktgCXPyq2cJSdWQY7wHAaJtHbS5zEfoR4tf6iZNwLLkH11b3ADmwo7rTgxcDEnkYt6S83SfTEPXG1nbDkCSioT"
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
