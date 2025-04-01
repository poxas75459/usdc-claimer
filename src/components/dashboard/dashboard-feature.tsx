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
    "ikJ14AJ4uqesmAWNebGX7BYe4MjqxnGtgAHaqyC6PUrqx1Em8LD6x9JVXkCxUx8VCj9C7AV2Kf437xvcYw89nDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H4Nr2ryt32FoxmiGDQdg4Q7WpyybbeUPxxrB4gYoV2DcxWnBScVmVa4J4Kn1EcauJwwS1WtqeQyuLCoFzDtoo4v",
  "key1": "MgtZPSdUKt3pfVDVJ8hBJmZKMqwkKDZ2V8wGkVE4uimyHmiUrSdNitVnmhuvr8Nh8JXF24RiiM8xucedRebCVjm",
  "key2": "CGVUBDaF4wVK23wSbzR3u5d45t84fubJRj9NyZK95ZKf5WUvvsKNJreY9BbzQwBJM55Pu7n9UWt9n36upH4NznF",
  "key3": "3jqiPmZUHPzgSXwgq5wrncL8oXa3A5CNfi3PPCwJoqeWWd3LkwepkSToQ6s1J1Yu1uaybdN78b4eEt8VhjhCMvaN",
  "key4": "2tDZFRvqttBv6Gn8Xso2KaFix7gJEYiC4RF58RbHpq6wwWYpG8NGWDSdskfm3fzf2AEgZiuZHtq7uZ9JPnZhJiv5",
  "key5": "36dBCQvJtdPqY8rNeaJVMzgH7SU8RYBQTkK6qUFYh1aEP2f7u13dusWJW3YZrYcResLSFobzaZ5MTy2K3S4JL7vi",
  "key6": "RzdiVALAHzj4by1Vdh7GscSeTRLdwAVxbKwRA5WM2kTYEp5PwgYvprjZWjzdMkWST1JrWwFVUj4uLnzEkNyTWUo",
  "key7": "2CmFiQp3ficmVZU4EMcfaBrxmctB9gNkLeURfmvmL7gBMDLPJZVY2SFWQdgBsDTN5JkYYmxhRKUhhu1yT87794Sk",
  "key8": "2an3x1FCSTTUAPW9DK7Unw7nLVvF6D11fggEo8nvZAyM3JBVJXjLB3Nb21TxTCmjTxT2V5z4Q5b9q94buAbtqNAg",
  "key9": "2XSmCwTdVvLeL2b4EXfKwimFJsAczkp43aWnatKFTcEJ76subs1cMa9NyDK62bcvtD76Aoi9CkXT5jWeyhS2y2wt",
  "key10": "2GtTetoRJTQzZD8PdFRTppCUmHcG2ZibeqsB3X2eobWBCMMuK9nemdsCjVY9k1GdpbE9BbyPYj67JrABudM3uzhb",
  "key11": "pKTTbxHSG5XvuvsDEkPZwEwpasoWjtZ1z4JzEysfV4v5Ef6xMy5StfxRZupsj4VdX87XPiZpBzEAfdREa5kX1tm",
  "key12": "2mJyLqLBHPB7WKG2AaUXB8YTjHx4fBXZeqEukP4m5dMDiUAzpwgCTodSqstruVYpzWqVpdFGEwNnCFWhRcZ5KADa",
  "key13": "4ftCjCUM2HLqaXJSTYvBBgBkzHpGnUfKbGD5ejszPEUqTzRFJ9hXTAdk8eQ1md7bzHyXcVpyQkYUhQApG5QVjK6Z",
  "key14": "32NihZg7wSr2Fg7aQ8zQ4v15rqbWtv8KMrmKMTDAzWrErsgfSA8eDx1avQZrGKUgThcuZbuoopGkEtJa3qgbUVDb",
  "key15": "Nhg63n4dXPdoGSEsd6NrZutq71Xv5KJWYoKgQFGYoGGGPj4b3CxudZpqwfYG7N7RPkA3GCxP6K93QW33GPJ1vbo",
  "key16": "5AxuByoxm751cVDrYdHBCXZsWTSSUFkMnuPdvGT6uzMjWbSzkJH74JotiGTDN4sw7zATehguUvj1W2VTSAesdsDU",
  "key17": "5hXm7J8hDJcn7dqcRv8NygDdiaFFH9WM5wKeckkVJhbZooYdQR3QWMDVVVxM9YHofU7tx3xfd3CrJCiB2hhyL4rn",
  "key18": "m9AoPg1Ybq3achci832dAycAvXYUA4F4T6fMDP4Padpst8HPNTdT826V7XxXwo1JHB6NgoccAEdX6oBaLNZDEoN",
  "key19": "3h9dxdLEvPtXpJwKCLHEK75sDirFMrWcRWe2Hf1e2r9e2LwmH4Kkf3f5Wzjc1z8ZeHbiKJNfBfxyDsBmgamdRzwm",
  "key20": "2HmSMa5zLMTWeXZd7wsZCHPxD2YxNFQ9zFUUNZ8q6aYKPZDo1VMtdvyZT76Je5nnpd1vKTBxUkDRiUVHqi6Th7gL",
  "key21": "2vJgoLP4bgCZm77KJpKj5hReeGEQpLV6eL92hv3s9cfdmA7V5w5cJg7K4ufFapvseTwYgTgrmBPuQdWiPbo7kn67",
  "key22": "TYDLpZc9m2NgTTJj188dHbVrjYuYf3D7arz7Tei4XQZqeQBziBPgDibnQ8FTrXzwKP1ho4dJCdePJfxbDmLYU38",
  "key23": "52qNXMjopPN5zBSzztDt643LWniP2PishVWJYP2EWHJWNmxiFcDhNrXXLHhsKe8KnJDSxpSNheXPJ9VK6Ej1eQZg",
  "key24": "TXkh9drzfkp2S1oVijyVZRnoUSMRyVDRwR1u6KwcQmpaScRuooaumabbJjqsJP7sL4AqMf7WD9XwiCxfiXfaGSW",
  "key25": "4n4duobxbCZvC8AsfQXiCfasK9YGbESYprMU1527qjDer5oahE4LQiFbKUdeApcatDFWDfKrr5bZ6MvySDtVgATp",
  "key26": "4eatT6k6GUwJCFjkp39EdERXH9NNdq1HBfhWr514dLh9QQwiYQcKbWiP2uRacPEQKGuQV5CZHZCym4PCHDA8sjFx"
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
