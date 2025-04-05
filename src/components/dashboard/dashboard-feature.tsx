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
    "5qVzPbsPsQ8q5td1t3X1LcwyWvGwTF8hGLPkNGogpiYBe4rhfGKt8MPeXn5p5jZESvyJz9rut9qbWGumAVeJNdmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yt16xs8Qrttz9YEZjjrq4NcBUvm8Ptiq7dtCxpinUaqb8hdbaGX7u8tbdm124N675mefPLMJQCFQVkQ3yKJAq7C",
  "key1": "2iYTpNR9mz8UpjcEPoyeeWnxG4Bf8W6HG8u44sxDhpCfAmkUV8fVrphXhZTjbaKF8v9YJNevvicu7Qgmfd6vBDR6",
  "key2": "3Cxs8Q8LtE7TqXYetovGdgVV4k7Gw3CvRj5tF2GB28Jq5DK3XFjaKeBD7SVoZYvWur9sE8tcNVeJ1VADfRSi1sJ9",
  "key3": "2zo9cruCKayFQ8BKFUVSSKrTutrwxa6M7qKch2w9Yhm5YPtj4HAXDi1c2RqZeZrqYMGiTB2F2uKbb4hMBDku1ct",
  "key4": "3RWg8j1tjCxf7d9vmyMzVu7ta3D94KJukWPkSibQiZzCi5CEiTmBGBGdmUbTzXkd4rDzpWTChi29Wu35eXyL3EHg",
  "key5": "3ocmivJBPvXJMxmgTxjmvKGDq8FG6uNxZzQcPSQpf2QFzfUTpbJBMyMbzms7L9yWqhBkHtn8nFcKmccxb6PCBXf9",
  "key6": "9xGdYVWAGshHNUQCgZkSphoVuJ8LU71df3AE3myyBq1N81oYt2cKobcBkuWCJcGuhG3tiveB5gngFA9ia7f9CkL",
  "key7": "JsT1B27FZYvJAiAth2CioRbZKWVTPJ97F2YmF6n5utUeD4XywTs92s1Gjpq4dErrK6FfVba5QojW4Fw2PWUhXe7",
  "key8": "5B1GNLexarZVet5X8fagZyDjyTSqDY5KqsyKT4GEsv48YvT1M5cFoAnGSCQEJLajfrYPy1cJWCt95aCXvx3kN5eD",
  "key9": "2sz4EDQgKR7y7N5P6GhV9H29bsmzx3JykutcxsetUVUjDpKba1EjeW1dxs9QLi5MRzazPGP35hnJVh6qCFo8Ygjv",
  "key10": "4ePdoeuHFkskpXwPyWFmpQqTPCzaR7G2XG78eXP2uX4zY5wuzAycnhVp5rgri4AkXiSa7mw6L2ceSq3k9a6WCtFA",
  "key11": "25X1AxdhpgN6jyHnbTCNr3NwK9xqBaYMuZEZtre58MmCXcn85wEC5p8BSkaUfXNG6j1WcUD5jMQb6Nx8giDeSMCC",
  "key12": "uqBpuS1xBxHuKiwkWHtCa8tRuA4W4E9SkVrEFaqg7zR4kxoyUKchxgSHoBiwJZybxtTMHB2pMKFs5dQWdFWHCbJ",
  "key13": "39v37hpiYa9YnASCNYb6MZJ8BNnUADUaohySCXuxSdg2WpA5Q742Jha88MsoPEeWawpY3uTrf1k459FzGtD1ACpB",
  "key14": "WcYtkBjiwb8SCBvZs3bPpBSFuVLw6AUQ4yraxAMD2wF61cnCRZHebRBPz3FPEqwJfytFHu7TPok4zRn7dej6zsq",
  "key15": "vUcukZ7q2qY38eje9k48WCRchZhNynRA943j7qpFUzffkVuzPX48xsJ8TLZhAf9QD27qC26Fp8NYyrFyJYR2zwf",
  "key16": "5gSLjj5B9j5skQtFquCpBb68XMCNRmGRaAPQoMgHHmCFyNujNzvn4YAowPTAvmreDZ1M9ZRyb8gCCxYv5LqdnBjb",
  "key17": "2dCkFMbLhcXdJyCHdsWX1NkrDnGSXHfxf9Cb56ay1ovuqERvD7RAyYNoFS9gf7wPz4VudtjwEfaN1s53fL9gPsQU",
  "key18": "2Vn7amrWzFxZRNjBqKzAxujDxMuGoxuDiYYW18UAx5iemYTjRmFiaRUVrFLeqf6CjSu7zUmLiZS3C3XmT5U4d3vZ",
  "key19": "4JdajXTYw2uiSbv7GczFsXWoX325kkRwM33bWpDsxS7yavBqFK6ZxiBM1oqwrj9gC9ngumUquSopnVBardNQpHEc",
  "key20": "5b2TDYQ7oqxKyfd2aeVLCJ97HcSvhX1XnyQWYf31xm4fGck9wfyV9oCUgVHi8NUSt5YpuStyCzXeoDKUYe183fwU",
  "key21": "REDbuwcHhzJ5Mn75yDFQHNn5dsdgprJt1xzQZTEPGbjfHJjBNt2uoiBssRfnbgZkzsg2zrAR73qPCpw8yz9K4Qn",
  "key22": "2BbfERxFWmcuwjX9fEyyUJKnX2xFz4562jhMQpA8a6Y6CFCbKrrvcyPtn4hH8Ban17JQbh54uaX7toYAHnthjuRm",
  "key23": "2sXgtmBhZ9dR1dz5m9jMK5RW8fhJ4GPhrjJTkQDa6AvoSRNtDK4f2JktT71Cjq3VN9HYdhqwqXhjg2p1FYQ24iZv",
  "key24": "2syteuEb2mdubZUVB82X8gWBwa29tPLigtaUJebWjijz1viq39aiHHvN6yoiro6Q7zbBBfoNHmhM6MH3q3jR6gfJ",
  "key25": "2Ft2sfY9JThq6eUz8jPpu8K2hkfAsF88ycsByENooYx6x4cgjvEeiCz3C8eBZLgTQzcN6tTKnLpA2n3BsjHPuTQv",
  "key26": "5zmq9dvvwPz2KHtDJtCsHA4skzZEJe25ZNq1vBpchx3c24JpSe94zmAdYCJigQvvEGaovmXJ2Lrm4EL87z1La2yd",
  "key27": "2EGq61ZZ19ndPT97CGAx6HfvcUeoi8bSSZUrSE7jRLWUHw3CCFMvXq4BMdRjToRfxbusBzC2S9xBV5GKwYFWL2op",
  "key28": "uUnREtEyqjDDWubihpeHirxD1WvwchmaHbBLVLiNK69F3EbFZEJdfHkYN7BJCvvHKJyzS67trizMtftrSYd7uwE",
  "key29": "38toHMwatiGYWpAD1oMPKdwLXbLkS9BSyGqC9qR4cTUJTp49vq6hoDpphRN4VZrARkRefaQTykBAMkAcVBmKMz3K",
  "key30": "6425tWaNQsSjtY77UFayBHPUUin3DaFjq89fa4X6pnqV7rXGHLm4NFVKYpJNzDao6WfiWoKYQqqmZrbHAKamVZwX",
  "key31": "5C7YLg3yVPThb2jugPehhLNQnbt75AZsp5zEvUzVoAR9W7NH31QptxCcefx3EQjifKzyfoT3FSwWaV5okwjVGsaS",
  "key32": "4GBJ2oNLv9WrRGw11fRLHACqi9rzwAAF26rqDnHtQGGLRD2ymrPTcQASkNgky2KCtH8rLbNRv3WBnc2S1KXVE5TC",
  "key33": "2WkPCP8fRRDhvMsP2UDQkdVv2kxmHnEkAKouxSp5GenbaPfMhZBj78rXzMExQpxdqfsGQDqYLjS7YxRFazUxuoUU",
  "key34": "4VSS45qQJZsTiHoagdqPxNGAoFZ7BtmDJoayGLJ9LSa8ozTMGEvYVARMqZP5ura6H7aaUX6h4uhRzU3zmEE9D9ke",
  "key35": "5Lds6g74YNi3dBDgnmBMFTc4kpgT9RLmfaP6EyN2yNMq1Wg2gv2sEhLPrr2H7fYjA6M4AdD2m1XSFiWoWrppCfP4",
  "key36": "A2uq3ysTmXD6QmrFg6V7p85w8RUikUMXTVNUBnc4p7aBvnZFCne1Bcg9G4DFconMXWYqNWGkmwNJFgyWJpGHNgf",
  "key37": "mvGHPz1aAMfXkFsPi6d8DaviRxzp69bCNSzFxRw9BAHgADZM4fk7D8D5m3JrRZwfPPGQ3yqyry1UL8h3pnk17UN",
  "key38": "5TFSViyCM3UFy5yUiwh5MRKGvHds6hKXYK8fHRshwzd6BB9vd5EQjGQXQAW5NyghuR1rDKqW1UdxGHZHJ9gjDYjU"
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
