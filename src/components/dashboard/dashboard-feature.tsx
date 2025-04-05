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
    "5T998LPDYQvf2YMD2n2mFozxFT3oLLCyN3b5j4hmRrRjUjvb5VDv2sQYaipJBwcgHtmdfrVsvo1rSqVpxDxRxUz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KmvReaMxH2FXYZ5VhbZPC3RQdg7FfvkNWhqTvMEEtFNpYnHZNFKP4kU59wcWhEn7EiwrG8P65mmB6GUpbp7VdXt",
  "key1": "2Hh8aY6N5BhcRhdcahUpWiSLtrpQUCvyW1MATEmbanhatwWksFa4XrwTTzmR2CUSQ83ykEArrxV1S1N4bMZd1yZX",
  "key2": "2ASG8rJWuQG1m4JTdtA9cZdGcNQiVQP1St6EjJhoE7WGSPxy5syrAANECmVs1C9gesTpJaMWb44ny9kadug1YPJt",
  "key3": "5w31wZY6ZkkFb7tDRADznXMTtHi3HktJwnNBxUCKZPEAfZamHKMWgFLd7ZbLdcDGqHCkeYYQ17yvvHBKuJ9NoLBp",
  "key4": "2x4zi6Wus8osmPLQgg3eNsm3eq5vBGDkLL5TAToPztYPSGXKFBxibvT4RQYG2E7f4NRCdvVFbE4qQig5d5B3VBZZ",
  "key5": "2JXoMb11cVjAgm29zHNAQT5Ar9Ns11kEoQHDALF5p9hWNFzhH8BgemedAinLhdFwigbW2fGakfgWnXriVHhoSJCg",
  "key6": "po23BXtaxNamZhYVvqoC32KPz5PSFy1WQVZxPTjxFvATQdApkvgqT2eqeLNoYCyEAwZSyc2RD4YTVTjw3EAy81a",
  "key7": "4PtTxqhc4VyengUrvkbiK9mesgYzLsmD5B2df3FWw9QKTBiWJ1KiyYEBKEuypgLbCpsXajjv3eXpN4GWFmjAZJau",
  "key8": "w2DSh3iuYgzotY99pwTGbc8ZXJSzg3QNfE6oPsmd5orJjBMxPA9GECTxcXskp52kMfvS1JbMyLfLusdPWHUFdDn",
  "key9": "3Dp6WN7Ha6vtCvYX114xy8n7tiPYuT27TXz9yLT6rzymjUVsNTkGupD76DnsTixcUQFariHauASybp4vGUq4FkaN",
  "key10": "5E9uzoCV86ivdGND8FjmUPwM41t82uaYPnrT3hS86RCHV6h2wXkXgJPLTsaKbNtZ5WFq7VxQ7h3NJq6oNVDvFyoZ",
  "key11": "2A54VBQWZJXbmiGAC4Pig3ci7hAEtUBugsr3m1BLGHEZ9Vp9ZYFqbuqwWVKZaRnbhyk2K4VNQZnqc9U7exTuRVzm",
  "key12": "2mnX3vTNPU3X4fXKsRJmqfPxJYP8HgcSBRqEPsfXdH1d7gLtL8iAeqFAUU4uY5PeV9qBRSTk4JCg2ALAAYPZ2LrP",
  "key13": "C8uf5j8g7NKLR8nH5jZ8zeNWKc3dct3MpSuV86ohSncNBHGVnV5kFJJSpiPS9TWvzC9Cu5cDEB5RqxHZnWoCGsQ",
  "key14": "nbMM6qFb9o3NDXYxCM1PJ6CUGLqq4FcLcyXc8HA3nKsdbpekdH7Qpywq8CCN9Ket4mHsW5bRygNZjAzfTmQrDC8",
  "key15": "oT4xFfkGMhN9rcUiJnJcmFQfV8V3TKNaciU3RYQgmrsDKjqSRh7AnZaLgcMWwjT7VbVANQznFcDKzeTUiYEzFP5",
  "key16": "3dhyGMMcXtQr8hnunzGHVSvN3CrqjzGq8ENyxCJyiTNwzDhua5orhNZthMgmzSf6VpnhVmwBE9otyvKjKvcxHbVE",
  "key17": "5xRsiB9qdmoYUY7DdSwnywJgCra82qC9gRxzU89LL6hunKoVrqvoxy2TpVEfdTpiBgEdSERPZW52NsP31FfTBrPJ",
  "key18": "5jMLwZ6RGSp26zBWZ8p81CRuKRCsuzaZpCpnfhrdhQGLfEfCXhTAPTXGFtRoR13yBJwiyUdjMAo4R6Yrk6yQfBXv",
  "key19": "5wDWUSNZ69JQ3ZiSCzLSvwp1MeqNBBg4W71VQoA5xdo2k2377GUmjbjCayp787KNmKC2FLcpab1ArTNJRDG31v2T",
  "key20": "2AGmd8Ggg4DBeRvDM44nNXuLZYbHvkctm1NmemkTvTmXxUF3aJm9UNjhrCdudEK7mYuwaM6VAMLrziRR9k2vpJ24",
  "key21": "2VPYqxVLWazJ9PMsb2G8syrnvxsVSUr1ChNvZzTdLbhz2DsPnuqi7d88p9EuJvdmcG8MTkwYQDmZTcKJLR5mpJoG",
  "key22": "3YUFNZdG9u8ft4MmS6WsYvu6Vg858j1BmBS9QWLfMvx3iQD3YFx4roLkqWabD4oY7c5AHb6vB1wAC3pTCMK6tiWt",
  "key23": "5BbCPKqkwfptJ6bmJEK6Cr9xYbmcJayVrpaRtGv1T4WYJCY5JPCqmPcUG3REDABY19ZtF7iFuq7wWgBgE7SZcN6U",
  "key24": "5SwP2VXKnBZXRYSPrRzkSE2fwAGpD9W6Xo85wKwwCnsqEJAh1sZ1jHXyEfUi7W5PTpZe4LWsVZBzfBZTCNbPbvef",
  "key25": "5ZqEN3fpcKxFyLwwhcqwAe7GiuRZLjpVGwKLnBg4uc3MwiyJXJDivJ2rG9RpQ4AfWWwaoyLArcK5L24bsf9e9kXM"
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
