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
    "3oN1jzhkMWupJdURCKi6WQ52HE6yTizQewhCci65Y9hUMDzvKRBwu4CSrjR9A9TFxXgbWDwrooYcXbzKWUw8i7dw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AzAXZciC7PetBJqVm9BKTAfJFvu7anz91YVxVusxTGu9FLeZHRNcZtyY97yK4ErKzyHPpMXPZYagytSZU6Q8wAF",
  "key1": "2qJF5VTU8m3vGdtcNCVvjkxvo5eNQZzxToJQx5c6ZGr6NTPsTxCL8yiwz2Uj4phZMVqMm5oFBKs7DGqtBAWQW1Nc",
  "key2": "4sAhVFm2uq9Y4iWZndFHZGGsRcCiSX5iWzjhXw2e5tEgmHKEbgQtfdzjVQWTG8qHP62CTowKoRKhasVS11SAMHVh",
  "key3": "3V3WMqSJbYiNkvTwKxqhoq9sdiYW37pnx7d7DJNvuLNLX4gwoem1WnMT2Jexbnfv77WoZdD75vsFktSUb2fF8AEd",
  "key4": "3za1648zxSyL79VYfpcvsymTaykb2eMUGZiNTgJwc6KaBYGqxAz3tVM31TXyRBkT1qoLbrxLx7YsrX3XvJuK85LE",
  "key5": "K6QTv7cF1CQrTZmoe1PCXvkVhEzMkferUWpGctbWCn5iRKsBDwS7VCCfv5XgFrK5waVUZxZFgx6HfQHmHEtTstK",
  "key6": "GqoiecQNUp94GoDFbHAnADKApi94onhYAYQqsnL43p4cmrECMqCF2PvT1y5UMZz7XTZsreomtyudB4MzMG2SL9w",
  "key7": "5JUdusnxLgK7auA4hMJAd6nAxuKHFsfcHwtZki1hiUxRdmmWAtAkhu8d2JBKcXAx87XdkQPp6ZByuUS6pfSirhNe",
  "key8": "4vKJN1MsCty4xt6GP8ckZUw7b21pit5NSzCeYLHRWqdxxzerQAB2UP4kX2fgrSxP8vFMzojRTeWgvQ2zo4hE8mVx",
  "key9": "2XQR69vcobSzin5Jwm9E3XFzFFJccDe3UQ7bpEP6tfsEnDtD6q3o7LhHjMAoCHc7mmC2s4sAuncr4BXHSubtGuo8",
  "key10": "29cXowAY1bc7Xo5oapVkV5yu4XeE4pMBcm38QcKkfQFLqM43MaJdZBGhWMuFw9cd3LXPm9JuY5tyLg5GSyoNEhb5",
  "key11": "3KWNA3Gm4Fk7EzLmk9JW9m3em7YEMKihKtfCzGARx7wHZNmW1hGJmd9SmHYEoLptycAStfPzNHChUR9vvtpRDUWy",
  "key12": "N3WMrYsKHbjgkJpZ5ER12VUEemN9r92TBcdZVkwZ1wzFx3EnQcgkrAYKrS46j74mfV55UiPY5bfyNpTN9E7fNe3",
  "key13": "3RAjWyitmAg9u8vC4kvVF79yfgRHnsNErnvvveeGkn78xSXFpb7Qv5ow8FqWEFAo2DQLZsVo3ixyUa3m7FgcR2Wm",
  "key14": "4GH2nE7MKGhMvKpomNDsALSt3PxfyEFCTQX3DFTXvGSTcF5bTBX1gnjtmhBfGj6d4dWsKDqxcANwKRMR7RMDkDqa",
  "key15": "2rDFT8KarMPSWcqgvqrK3FAkmy8LZRSCvLvBGZ1VjL8QibCbGje41bw3bbwZreJ2fQ92bpEUncW4bCHDmrqDbWV3",
  "key16": "YYYXw5iA4NrKcnnNjc7QEjrJe1445YBs9DfH2HXwnaUDNrgJQJUMgNLCkfa76rsSKmAj6orqUaL5KJm9h8NJpg6",
  "key17": "3VR2WSV7pxbBQZ2HekBo6v5dCQs1TEeTGJB5kggdLRs845T4or5S9pFzQgXN65YEWrBja1juKHtzqn8kdaM5veXm",
  "key18": "5z76shekb7PWfE4NwyoQXQQaHYDWJvs8q2V4DG1rnzbJy86FJibWKTj5EpVH1v8oTiDAfLoeSPuHHMtBhLnXeccH",
  "key19": "3MC5WQSJPk9DzVQ6Q2tySGaVmrP54XwQ75Tm32NxfT81bEtdUUgbrW1Zyte2cJcaReBvgi6JkBNYjv55c6BYeb3B",
  "key20": "545ZzcF8rs5gjNeSCfdeHyB3q1qNBu54UQxoAG65CVFqpPGcQUpLpk4xJVYkbzm14ni47LucFoC7w1zejTrdCtWy",
  "key21": "2nVsGrfwX1XcBn5pkq2MP1AZygyKMzgdLnQteirLXNwttZzc1BzJ8kDUKXbYuhM98yBNiv3PuewC7DUoXnu8hucC",
  "key22": "4TETMokhd7uM4cJyc6qDpupzyoxHm37m8aLczhMeHSxNFjCj5Y15tmBrCiKvbepa7HB471Uv1pg8idjFFGRTyMSz",
  "key23": "4TbtrJ15vRJPnyCjcsKYgxxmi787agnu5XWRWM3c4cocyCwggVj3wX1KYtr58sZioRPCzHuVbreVK25FXC5Jgtu8",
  "key24": "5EJVUMaekXXDNWVxxLRt7dwAYidKFpp1KtFe1tv112y4db4yVZbtu9x1a9fSjdHN32mbVmyWeZGCVFc1fEokBji1",
  "key25": "5J5eydKkMb8fUoMcifey5fxk88gYctGg9Bqf4szUNJHnCDvYdf5S2bwVALzAbd9yeVbp4L8HtDZtkNbyTQgCbpdi"
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
