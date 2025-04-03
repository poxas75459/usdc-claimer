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
    "5nzycN2kpb9paXrkLVjWy4MjoqaWQwwnj2NwrcWBvwi2Rzg2ta3aYEkCdvSZ97TN9N1AFcXpxNj7icy9Uus1aUUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PLFnGbm4ugvsbj1FHa8iGEvVgT3twEEQmi4mSzGk5g8gXYCEtwWebDrEwAuCDQ1VrG5giMM6pRUNJnGa88nTT4h",
  "key1": "56i3AXePq5xuMmFFbgvMu1imM8YYMwS4WgYjYoPfZ8BfK1pTmEdmCCyZMzb26HqG33trPoAMbqKRqAPFc9xrMWFR",
  "key2": "5GwHzKdT3TFeNRoe1JJu1kAxPHKBGestUnwHj1Jj2ivnzTMQLKuJJ4sVH9CeHy8uVEgHAUfyAp5oHSF1g3Jf1zqt",
  "key3": "4d1FYcssMEQad3PCc2Lw6kgqhsDGBzJE3DqdYb6z2hkrZMyNfz1xxq87B6csgUqtiZ3uXZSZpgN86vUgWBT9CvBU",
  "key4": "5HQmsYE3ic4Unsfw4PUfiP1WJRwzcvQwsmEZVwqNSdNGab4X6pwHA7L9zNVVoF2ih3qX22RP8DzMgsTUSqhw3ADe",
  "key5": "5bsio6JipoUaiLZxfWCo3GCpBB4yf5WMT92w2JoJztw4cVoffFdevkpmLdujZQJE9GKwVaCb3RtYsuzuL8buztF4",
  "key6": "4EofE4m4ViTwgVTxjpGM3fP9n1Nu2hvZRCNNzTbsiQTYuwxLxGCSkpkLwauyvqvRvianpYK5ENqDt3EDVaC4xD8e",
  "key7": "3PS61Qtbb9vxp6JRKwriGJ45smSbQgVD6ts9Dm6YbZDufk8TEpL2zhcoHQ457MZ61uGGcJT4BVhKLyiK4Y3wpmnh",
  "key8": "4rW46RKaHby43bx1GFFirmAmrvnxtrSyhVxLHJigbG5VSQsX9AeTCmmySx5N2ft4UQqhPMTZ2S5fA9ZQbVpzZoef",
  "key9": "25arz9bpao2jyKtRdKy72qhWVtzjSbCXdhQYvT7wUbKUsUcs4gXJSYHz86muAmAvSsntT1mXKkZTVRhaGYoGojm9",
  "key10": "4tC5yCp1G4N2oEwtCrBHAgcpPCDN2rGCD8DeJFyDrCb3pUdpMR5EHUy2HBKWB4uoxfxM9Ck4nRfCk2eYCV3YcfeT",
  "key11": "4dwaRiDj14dHmLvPugvXmxrHUwSHhQKdQtcpAZsPEA57JE3asnrRYAD5h9EsrdmTLqNQZLzmiXQeFJBLyAhubsYH",
  "key12": "3av7Y1jPynYpPES5Qk2yeudFTXZi3C54MgN7T2QE844Vh5Bcei3S2ec5SU1w7SG1DawTiqtSnSi3tDjifDx4jFAK",
  "key13": "3C6k4RfuSwjSXPp7jbzYCfhQ6a2ShUHeZJU6wMG4X4caZ7oAUiF8DVEkk486eC9dLMVNqKVcvEVJcHcdChghmqrj",
  "key14": "4LrEJc3bNHG53XEBjDq7x8gYkyE1wb94MgEGrmkhcf6QRwEdYKxD7rWQcYaA4X2qyDncyrdahUUjFS6unUEC2n5T",
  "key15": "24iNJuecCUHJ2XKvXhqkj1u1ZY1zwUDSW5CqHw8NGVkeNYuZbRfJjC1QHbn9ToiJqFWThGBEKPFXH8LDkmK1rKc5",
  "key16": "pHwcyzNg89RYYBGMEJEqri8GC47vnQtCDFSrBohGL2QP2SQUuHCGrtqFL6qxckn5RwzZGaXL3riegrDpZGXnMmB",
  "key17": "pHX97m2NVMytHgsm4sbPiA9qNphmJCB3vJzkLvskVUC5rR2BGss4B24pU4FfSw23R68NgYSePuyLVzJGG2ocuQ7",
  "key18": "2DboaUhPGVhMVg7ZUGGfz5DjiMu2RfUhdwN76A6TREequ7KKGHc6y2MK6eW6htMeWvVXBptCKmQDcVc6i9HjJYJ9",
  "key19": "2dAQZFojAPWyHZCVLNRj3skraKSsdCL6GPQL9unYqQAxjoirZVTsjAY5ZGqvsF4mLCWrhgrECpyhq9nVPdZEyLdh",
  "key20": "5cPJgmFZPYBYGS6bDMsTzY2DMDtznQh9hadWw3Wg2VgC4z5ZSnzWYYp6hsm7vYyxaLPj1r2dJcTMoZuA3LgEGpk1",
  "key21": "66qJFp32QGsNM3fpPptN3RUpKiehbwHtdzMQoNTLTJ9mtmCKMEQf8MwoWyxQvv4HvFYG4ZYdWmxiYvk8WM4fqs9n",
  "key22": "5NNUwSkkpEnU8e7sPfUFTAareZsUpDBy5WH1X2GzLqnRymfGerAp4tCsMDjTK2dQ1ZwuRqhoKm2eUgW1gGRfuAyC",
  "key23": "3Yregndueex2zyYNET7xJSn2fP7QrLvfzqUddkbs3v7ZDAzf9tR2eF5GXhs2v36VrnhxRsa3CNyYXvUgeXbsDCGh",
  "key24": "3Vhj1T6JeARxZPeBe85upb6mEram2bWktVU9wSN8sAxEDDtYrh3GnemRnFMpkp546aNHZbpBNqoyWEaMTBKK9jGS",
  "key25": "2KxGD5jhLcuykvmx1JzySqJaLcaap13qnGwc2NY4cHwauaGR1ozSRJSNN6vYk8ujwJzWDCTpUj4p2nAvfKV4Xooz"
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
