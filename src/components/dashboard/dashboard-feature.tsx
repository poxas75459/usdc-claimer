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
    "3BapjWQDf1WUbAtsaiZHjbqNYqU4D5b9PSG757bzNr2tFoi6RS51vLSrhRMGJSGYyX23PGEWigW2CyQFHjarN7pF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cKXKh8WxTCzCh1h2fDUWg3QqLbkpGcpyWnZbGi1Cb8dA53v3FmFCZN5RXYfue6tRm7m4ciTn579Z8Xu83S6sQnn",
  "key1": "2UDi69nbEJhzABsfY3pFAFEtwM9iHDXiLBcKcd7ox5naGXYLWViDrEYiYkgUVNMJkHMWWJ26E2r24yCjdZAZVrmq",
  "key2": "3bfcyNG7ocZu9RNmQ8nFXR556rmDuXvywDeaEZ76DFbnwVrQKyBzJa6ytuKr7rGYinVEFGULNhPTzvvrvrK7Jfuz",
  "key3": "XrLoUX3kj7ST9ke1PFr9YZ6vQybVUyJe6WUC7eZMXL38hR5VxGFCUxcdydEK2nyPuHuxUsusubXvHcBHy8eF6hG",
  "key4": "2Tnn2xSihUCUehLQBzzXvcUn1ceNGG9bGiMpz4Lvhn9Rr3yXKChsoVPiybiquweWnnW3VHzi6CheaLXCw2Jb5GFR",
  "key5": "2sqTDfdpLHnHQA3Wf2Y8ofPgdX1mXQGbmKgcvMW18pGp8s955FwLGWehHumaXqCmBrVZhn5yeqPsZAiCqpPT6K1h",
  "key6": "4GWNHNKBnPyjeUx3ch55XdcBQJfprgG3sckuR7mzMALg1jpAq4ANb8d8scrM7Byp3KpHnDTb7y3j5jmCnAtmwWd",
  "key7": "2u4pfzPKbny4TSV1LfnS1iPe2XoBo6VM2LSkrdR32zjbV1HW8iHMWDeuEvG6WHc1RYnxKYfLfKZ9RxPsWYekPGj9",
  "key8": "2FJg5x97mK6rwVxf1MivzK5onxNJ6nE5CjKTfQBNze3Torf39JqBaarbjqExpuAAEpZp18pMmaLvFX38ASDLS1AY",
  "key9": "uGYZBH2m1j6E88EixMPaqwoEVkVwMRNRumagYVHVGxoRrDVqFSdzaXEhCNidaZ2aXbP2xAjJgkRVNEnDZZS5xbA",
  "key10": "41AzSmDd9ip5z8cBcS4A4mNMBirKty35ZGRxHC35RJ5jooCUPLeQPzq1BquYcaJR26UXnQDcYfu93HwbGugvJSx7",
  "key11": "2pnyCZKoJpYrDGRpoVfhJATDS8VbuQoqssgowBvJBtDf9LPL2uTjxgTtjG4EzU5BGazmmiiab5Z9pcJUsa32bKvA",
  "key12": "4HMvb5F8y32jPwdwdqrs5wb3id664qaDqAYsSBDVt2FifHdDqGnrSWBTSTXoGW2drT8Mhn4RGJ8axnW5hPPLzGoD",
  "key13": "krZ8nSjbdexyxWuYWNanKnXemUfe9mnm3vTLoveTf7H2B6pdSE2N8Za7XXm4WqqkAmVkHBY4pFbWP8HChnWUAZ7",
  "key14": "5FEKgm2PQmnZQQCpjHUevf1apubeYtK5EZEaTSZ6WmCmZ6ivLSVucxbum4fmEFJgUN7b9VNvnGxMPhk4PKVgAziA",
  "key15": "2xcjhU4CGFPhzCR548wwrLj5LP7pDPneCwGz3L3PN12MpZKtnDMpskfCigVH4tRAQEJtnbWtC5pPyUhx9KBvuMvg",
  "key16": "5FYBHKWr1otmQYBmme2wQ3aparpDGGNhYcJV2G3X5q1rtPkHfJBK1J7UpeqpJarMXjD8UU29FuVe75xAiUPekEi8",
  "key17": "4FM968fhkFTj5SYX7Ez96kd97WLxqAzjF8gvu8muL1cft4pk1btDDzDvM7QPccrN8RBHrzpJAdNvpc59zyMs33wC",
  "key18": "4NmoJsA9ssjDeRL8FmdDjyXS2vzgmAorDWWmu8abfsFjpC3VfH3ZMWCsyMNGBVy4nKmSBNoQDJAN2qAuBXyNs9NP",
  "key19": "dwPxMuE2xcXfCwYmap4hs5Fk73HAQEw3dzpbb6nJ16MEccLKmsmE538KYWZJ3EeGhpeght1XzWvGSNtE4rYYo3C",
  "key20": "2Pj3KJhe95kwEkKaVeiM8t5cCCNaNHtv44Pw2RGbsQawtBjRAfHb4YFfsYoYBnH6qB6y8CNW74kMWFYj1FjSaMZt",
  "key21": "4k9ALjmUCp7D4ARHwb3BsxntJozWMFG1SBfpJUdUrGnNFcGwYS6PnczcoUjAX4wSJus1rpTSS2xMjXHg5LtrvkPy",
  "key22": "2i8Ys9mMNvKBARiTUMCeQEcZPaPv3EViugzaErVCGpkmUEkDVHeizyR3mZffEJyvPUjvDbHiL1fcLHW6LQ3UyMkS",
  "key23": "4yhhR5VXgwDKXJYpMpJDePn4BU7FfNGiDUjfGU8o4XfYPepWn7aZb6k3pTEpQGJpsJEXaKZN1Z16WShTB5tcpiup",
  "key24": "2imwC16JJ1CP68Fi4ZKjV7en9fvqfBECXcxGHiEG3Mx7y2gZ4ZDUqkmHUd1EVt4pdEQgB8MmwueU2KSKEvdpBz8z",
  "key25": "5PD8LuKquqGZaU5prujsocMr4nAknTJhNcZU17i7yzQ1a66oJ14tD1hcCZtNWr17WUwb7zixrnjoht524XVZab3j",
  "key26": "4MFn6cvQUQwMZG343ZwcCkvb2KKMtirKXvAxcSNibh1iKGAyJTCFnxYo1AB2Y2GNevifq5Pv3Bcgk8Vqd5uy39LF",
  "key27": "2FSSG8VMSDT6qoXVsQFSQXwNya9WzXGsnkTWAbPBxwkhJCK6tgmo82Ed24TC7wYLfKEvDsmrvGRhdPcnLwfjPEMe",
  "key28": "3j9gz6yP1o8v4YmiVxZKAWu9XRfoAbAN1ebVm56QuRN8v542WA8d6ZQecUq5zTgemYGu8DtVJ6GAiXWpcwKLuWax",
  "key29": "4bM4MaezRKq1rDwE8hMCjibeTZi3Wpx8FR3BEtp2xmpVej1Hrv6mmmfjdK5E6Wxw2J8pSdJjeGCwESrwY3jMSwyg",
  "key30": "hvwfNhjLDRvGEYsgsigNdcB3393BxzB97c29nJ1cWcJRGkng9rC6w7ztut6R2zcUf5jZA9Qszt9vM3NZgzwYRNf",
  "key31": "2FxYi4262ddzJNYRYCGLFZb8Ao6sJBF5RYTCvvFj1B816FfYdhpReR7iFzhR6uKfnC3ekdU9LhnBat1qpGv3xYjK"
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
