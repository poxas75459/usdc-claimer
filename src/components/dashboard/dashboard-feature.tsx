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
    "5kno6EnQDLPR1j5ZQF9AyQNQr7ubqEWiTQW4RLUAG3L9Mn97DRi8T8XmGCh2svZBgYk3wgTJpNgxPQAqPNnPCuZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zy8vwAGuGUTUVp6qsTqPYZLq75P45xzj6rikVBTEaYLxu9htJHW1v3xkDSMVTJ1hLtYWuuQf3QyWnhiPHsF8UJY",
  "key1": "3KNEBQudJPtFQVK2DRb9nvT3TPbPcSEihjMd5XcMwX7mcp2Vi1S27zZizLn9BhSP7VLmVVFK3cy1kceGeEMWy9W",
  "key2": "3Hy9ZfdMZo7YdSGca6h2ihVcwtF94sSop6FSVUeoGSrv31Q4Z8czxskdb7odxaVxN6dsNpEp9uNtbJV7ycZyAr9t",
  "key3": "4fCBfsrVmywsoqdkV7pVvfUvwZopuPWdpMDHY7v5X5Uiw6WyNqZ7ccWpkeYXCAsmMgw99oFRNh7awkGfedNyTNvF",
  "key4": "5NdRyQw3j56MCPwqPeDhHW4zuGnyo2AQoeUAYoXaDwtmRXiyvx1jmzPxPWZPjk9EorvdgF63ZKV2W7eiijgRGyK8",
  "key5": "3pzwTtTrspzxpQ197PHkjdoXQjVDDCd9nhawaf9uETMA4FFc5NhmCL8GCAV74rWHL3q16y5aHtGecoFta89krGtj",
  "key6": "XHQRQmafh4qpYowQ9sF6wYBnJU2RAiHhW14TQig2Lutd4spQbQD8aG6HXyFxA2D4gaH61kyTfYGSqoVEYCBj5tv",
  "key7": "5cJpfa2aE5Qy57CSPiNcKq64AMaS8RPPbvWrcEVJVRrfzXSWVxQwXCFbKv2NeYjTJQYQ4aUgZb8Gy2HJWy1jpuEU",
  "key8": "5it3ao673wkidWGoQb7CMfs8QHcVXxWWHnGyZZr6BFMX1agsyZLXi54AvbtV7hTMUJZ15jtZEqFhWvdUKek82NXh",
  "key9": "4VHWrUP9YfMubWJk1Jx7tBg149FwyzbydJQzYhtzmoT5EFHq4YMMmmvhThx2p3vdkQTWAYqyY1pNaTQUoHunnAN8",
  "key10": "c2wSrddAuj5vW86nEVL9tp8cMjSqwgrKWu5k78ECqXXwyHDRFwfRCRr2FzsG7dMXPPDDLBeXkE6e7EeN79BMPAD",
  "key11": "qxdWvbTiFr4KoLZfsgJwHiE6my4zyni52iwQY8XNNKYGtaL4KFvNDRKUL8YYppE3iNaCK84N3RG1dNRmbN6mXY6",
  "key12": "4mLEdM3E8BzKjT5v6BaYdXaninwnuNjtKHzsQGjFUacGK8g8tL2PvKyip1LUdeQB9nK49Mb5imtRG8eSHaRnBEEs",
  "key13": "2pLPvSs1dhvmBwpsf9QKfV6W1ZAvCe1f5Ao14Fw8mTEoKPeb95oS8GceeNsTYZ9gD74ZqCHjS25r2ixf4QURUcVa",
  "key14": "MakS4yUuovy4qu3TKz2DorbGrZjDWBgN2soL2oCt6ug6xvV5uYUxAf13pNC3Nd8J8XH38SMTsh9NMrrKPBNJdwt",
  "key15": "3AqegjDk73X31aznsF2WkPBpf1YeKQyiAuczKpXYsivXaKmrg6vQQCMvMhVZCi2Wmmc4tSxUciJkkKaMvsiYjMgd",
  "key16": "4Lct4eL61dVwLq4vL6pZwJYsSDgcwX2ADjF7GDcsSiH36QawGGM4PGq7FXTdpbRN491r5LRu7JqQyan1q2p91TGh",
  "key17": "45e91SQXiZUAk2uzjwuEYwhuhjomdJXqHVNJ5otHxQ6u9YVDkvamNqg8YG6H3v7T3qN1RLTPCzEersi95HF4JLKR",
  "key18": "416BgfystpTrAxoyKChSQJDJX4Yog56G1at1HUoQywktQaAV7PzhpowTyhVrdPGZoUyTHAKhvUmvCeuV3boEzwGh",
  "key19": "56wYwGnsMWasTwH5d6ofrQXr2o7FHPwvCjWiphQTCYCDkpHHBELzG4KFE4ocXQJoaGDgmwCQ1rCctxGFjBqaN5vL",
  "key20": "3xV6tV6fMLqF1949fWGVdgYM1WwD8wS1zxuz9s39sKYgsChDwvRDM1sFXTJ1onBFcyoN95117JYyVhKAVbSFMNFK",
  "key21": "3eJt5YRG8VyCXrtn1vyCv8HPMT6Upi2de4H35yXeeN2H9F3KZHzYDc1oaZy9LHUVqmic3F4S6izmXS3ZYyrsm8jz",
  "key22": "5aW1zKoayuvbUcyTEazDRtcbnSWGMLb5KSEyTYw2vQyCkiaJR7LKwH7eN9djvgKsAbzafzoT33FUPddy5xHdAVox",
  "key23": "2jbaav6L3NoTxxvUfhD8BXpxyQcVxpTfoNYfxNVFRYNBySRnewcQ2X9HNZUaLTaPtbtW8vWLn9jfjNsF5qMtmmuP",
  "key24": "2VTMBf4AsjFfFdidNfc9UzsgHXS5EBAdNcahsUMUHNHvx1wrT5GDpLwRGr54Y2yAjZrF66WmZDd9jdLmhx8fbJtW",
  "key25": "2BkMXH4MekZg2AxesT4vdxZhdjCSF9mJVv1nzf2p4pWmo4QPr5zr4iu7bsFToHaQ6fxLzKbB13WmgXecBEpJ14tt",
  "key26": "NPdsGkSJsysb7xxQkW7vUN4mu5Zjy5w4ZvHxZQLjLoaCeE4Q4nWwL2sxUJqpoBSqsn52KicWN3CmUgq54KKx9dc",
  "key27": "4EDyEFr1PY7V2yofNYS2toeun1PSLFJb1P1rAids4up4dp9v7ajaZp1NqbjvL4hkDEsHTJQNBVogfBhUrWQqQ3vZ",
  "key28": "5Y1Mmd6dCBBFHxJZnihYmZRKiJPeZR8VuY4cmKC6AN9N1yXdfNmVRAhsNZu48epLMefuNGMNkMew9csXZvqyFu6M",
  "key29": "FwJQ3iNHJrUQfPzPQHxbCQjvk5iGKcj9vZeUxnfsbHxBQzeMksvWqFSsXEbLCEn1jDNv7xwDoL1EYZr1hMAwXby",
  "key30": "Ya8mQjm6p5mEVteotURcWNECdhueSr5nzDaRnSqa8XdeJKZTeuw13iMUaD76erUwthXrYFKYDLavjdcTsfeMsAZ",
  "key31": "2zcxnAPxhnHqUEdJZUnN9PoMPzh34GeVnq3HtWMHkTfGZJ51Y7VeLMFiCvnGnNkYCUT2jQtcPDkZaM1oUmSoXCag",
  "key32": "2urmoocqfzvceh1R5Ah1Qv87VRXLVZR5ufRr6Mm9aSUb1MjBT6epNUef1hPTSTQFAyWCzcoAG6c9VPD2VayW13C4",
  "key33": "fCFM7aEpAnjBg798uKxknw52wbBhdrNV11VbuQRaj3B8gZn43meBHzUGoKP7sg63Zvd6G7UNusaLsBLToutm8pz",
  "key34": "46MKRotqhGvL6g2G4XFwrtKePCyQerPqvjGaeEATV3h6N9bNqQCed5wy5Vabath1YthEg7zMGWvKQjA4JD6njamK",
  "key35": "5r2nn1TneD6Ct5WX8gX5qG4v52rgaTYHfrLzxYXcuaX6PegMFiJ3ho31PxSTrVSrfbZtzkSdVbTY9X3bxHa83UHV",
  "key36": "3pdJC7z52Bw2dsJTZb6PE511eGa6S9pheVSSybquXwAdd9uPJKSmGXmnsRXVT5244smYizvMM7UCPaQEskAR9mNQ"
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
