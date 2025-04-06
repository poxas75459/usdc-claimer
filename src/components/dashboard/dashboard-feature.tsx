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
    "5LgtdrowtnbBGNzag85mxWrk4uLE9u31yhauJNLvMamkGyJPu3iq7YzGbYpSnSrm5HvoNBu3xwvYdY1Cf43X8WR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fGx2Cet55FAshw3yErJvWQqxxJrgmkrK5NdSKPiXDKgcM2uLfB9oyViqwM1dj1A6jDiRh9ux7izEQYzaqUEdJuL",
  "key1": "4mMBB7nukqT1PHdySii31hRUNwcv3ETSQrsKxcHhEv993phjBsRemedZFgSJKRBUWHnRS8568paHC2w6mWV7MY25",
  "key2": "2qgb7Bhi7G5Rsuiymjprb3TMr8BSwDUQXR1QE7uECsEu1Hj1pHmceu5ULneCLahrZhQWkqfgYBjZ1vNXWa7BmawD",
  "key3": "3QTqjKcDQLkcRGbJHPHzRBW11Sh9AKcQTx5iPyWbmrywEKVwpHZ1BGy3jWy9kdMzeWgvcru4ByuHocoymodFNJ3j",
  "key4": "5a66EBndSVLnKrV4iJpK6UuYhRsroMyJADZ6NeYjL9t4Ccnw2Yq6WVBAceYQiuJHGCkhZi7f6MpLdEwR3FRLw9LM",
  "key5": "5vEbAPfogn2D8s6RBVrqgJojSzThpDtkf86jg1oQ8WHUaWrB8AgZ1FXZWFTMwzeYwVj4uP1gSzU7qCAjFbHHvBxV",
  "key6": "2qshBv7oa9EwDB2CbyUE6maEnGrqWLcSuLMMUY1Z9c3r2TfH1SAhnGoh7ufbsTNBaR2UpbRsigsuYta3pEAEMZb4",
  "key7": "gVQBzMJ2TuP2AbfK19YGvFLDopLKF6QPSUkAs7FsFvZZUWaQuGmSLvX37x7R3iVXme7Uzu67tzeupaiLimToBAV",
  "key8": "3JyEQLCjZcjbfQH8XoQTUykiSGzo4cnyLfJdTc37nbJJLmK8mZyD33Nern8KEMSxXnoKRTDD65dx2E1DQNodBvRx",
  "key9": "mABrhQJGhrK58s9XoEJqQxyUetpWxU6P2hjMaKqkHs4PZq2q9PeEYDaiVhbrmy5GHw5g5uFgqSUkUPjcaJoenAa",
  "key10": "3jBVyWmPD8TvJQEx2rnHrtQY5osqcUiALdWUKN5sjt1PEV9zqhDaubdphqgGjMbweuEQBu3XntzG2XbmfacFLQYC",
  "key11": "2nPFoi81Ds5KDkM8dKuJqt4BZXcJVyrqdSSDANK1LrbiJhxSmKBtuym46RXFRWJ3PZh2cn8n3Yji8Wqi1h5iqrzA",
  "key12": "3c4hcGYHHpuwe4UTXC5CvJohwNKcxKAXT81n2jEYFjbgk5QwtP8EdGpWcemr59sxHAQUQPv2o9YASDcGhdD51xBs",
  "key13": "3gwiChzZTwY4p9ZV8t9iy8QjdgtpHp9HQg3a1PV1Lu69hny2PPwuKcCvp8JvczrGSVR21bSwCh7WtmCAQnC6LDUa",
  "key14": "4TwZ8PQm9qFcc6YETomHwDAsMBg5uhpzq6V1LPBm93iwws9ezatTkMCiwusyctFKxnP9W16UuXTrbZfxvn4AmndF",
  "key15": "4iT99ZiY3wqHa8NgHByiaXGWBoQXh9tNHc8xpwdorDQkppYngg3jbQxHJdpb2Az54YfFU8bD2MwMmsMsNV29jYDg",
  "key16": "3SXmeLkWfZqZdYeAB9H7TQJ3TD9Y8Ni9skj2C7W8Aeh6ugw6Hz2oaWw8EigZ1ueUdjEpXpVKfDpK7RNFaRSCDkse",
  "key17": "3LWRB21Pt2RdKBDNqxbXCwaCAYQZis1gJXHgsvUfwmKE8iRTnsxqXvChcakaXZoPnwRjEFBUFBpaH9jAsaUNy4Ro",
  "key18": "4cfcf2oqKXh3LzfzyMee77b4LdWKmdgamA1oYW13dj4GwrcrDAxQ4xrUDxXw4RWRwYCdzvdUsuYJV6kHWCruuxoh",
  "key19": "34dgKmjW5AR4zTkdj3GRErnWUePFP8a1c368aWfUGChTj9m21tgCuvhCEmxk7dRo5HpGhzhdDjUMwckJwceFfkB1",
  "key20": "4GuG8YRqkmAr4PuNbZVnbJ6oPe6vGfBwQ8SiwCjpF6g53spAbVF2csF7xKyuX91SRFgFGgRAE1nuUjeCDTkgGPvi",
  "key21": "2UBfXomKkqxoHFK4bhhS9R19vXzdRtvpTARbTHhJqa3SRh4hfK186hHB9wR2NAHmxd5EBRtWyTxGuydcZqNc8VU9",
  "key22": "5xJFFB9m1BYSNM3FpkuR1augqmZWECcrjZJM9gNY5HhxAJBWx5eGhJgeM8higy1L6M6NoKTTUoHntJttudXEKbQA",
  "key23": "6odSWiHPPoPtMvRuCzfLuaY759Y8gqGtCNmSThCesmvXim9sLxgnFGLPYE3BVhqM459U5HmUhXCQ8W98aBXg1CN",
  "key24": "4HNNnxD1z9dVmKtTRooemKK45BSeh3Mg7Jj3EHgrQE77rkt69MsXDNw3FFvrSnbAKsKEzMVDR77E7vPCjR1b2MJk",
  "key25": "qyGFpxam2v2BS2QWunPWchAWgEfkWyeP5YkBJXcYeLQ5GuTtaNjNb8RtdFk626BpsMuRW36grjw7VnZs4Ezyqmp",
  "key26": "2yneFRXwhP97iiR8WaZBkUkEALEhBcfyTHUh1cz8ftEaUn87Z4nFAoeDdoRzpaTD1QiDXi8cu54gQUiJt6LdAR1q",
  "key27": "4TJQhKNDzcsNqNnn3Pc5oAz6oiRxzdzg6v2eADdgGsUt8h2DXC71s47JjfPa3g2xmfksZHsaAZK2abDQgwXWfDRq"
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
