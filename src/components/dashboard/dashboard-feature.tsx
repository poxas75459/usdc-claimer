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
    "FT3yuG1tgPyj9Er3wNXFPZBhjH6UL8koYY8oMAa9ACKhExZLaSE6DD8JpgShTHT1MzvgWMxn1bNBRmZUgAs6jYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VCn5WxiHzH3qRikBFRN4jppk27hwBXjg5cu9nHLi6BipQJM4RUreYjsSSeGP8NZCerumo3CP2C8zrNtiuwdaSnp",
  "key1": "HYDQotwv9mLNBHcaB9dpDqXnFKK4fQ5twSrqyTZxNv2e65gvprSzFs1mEkqUVmAyEvpRKKXGuf6feBP9r99MXMu",
  "key2": "4K5MFogjADFjYfudRsbuXzTqqbK3sKZ13197L8p93qG54N3p1wTdFUbAnWQjDNEFhzyGM5g8ZzaWFjBRYpe8XGvr",
  "key3": "KBVtgneFvWQ5jRyUVDfP4BBPSGxA3Q2sqF2hQuYEkffhzrpPcxsCoLmdMNpFiBoFgwFPnTeUnFL6hunrccgbkMw",
  "key4": "352pTCZLzikUaiNdZw6dPR3tLZEogpfFJHaCLLBgFdX3SRRuRSupHy86sndLfFcKCY6RFGVqAzYYUFfhm1iV2UWm",
  "key5": "2SojnPCSdNFmtGrKq7bJR6Jemr6TANRoW88t2eEzhssrVcRkXLMVKG2HnzxxLmDgmudfcb2YesZbDCHVh381YBpe",
  "key6": "2WAXRHMJKXDa2rM6QVnKMgBob3xcZpTTGq2SnSomFAtKCAG7fCQhUR6taifQb8rheyCa54SgSQ7e3hKWFM93CjUC",
  "key7": "5sJ5STairJWFxH4yLC6azFRE79mMspkbY9hCNfAyCBUvgHuebek4TdVVLNrPrEHg9KwX2c2G1reMrndvV778KZGr",
  "key8": "2eujstHhnBCiWdLrarn75DxVgJwqegubvnChVUz7KSpqH999yrYFiwZQPy3WqwhnfH1V64ZF7E7A3j2kmtd1kfN9",
  "key9": "5qZ7fSsnkhiypurRTAiUM2kDRexXy1SvapaFRnUdLPRXmZryQapNRWg9LCTEycgY3m6X4XzFeAjVeaaQ1piUCbFf",
  "key10": "V4zTg4NC1wmzDu4xkNKBmaT55nj1cNPkYNqg11DC7WfSAjF9yCejqKWxA8N9HFQVkRev2f2wLhJGRJmZ8fTUG7e",
  "key11": "5SgomR2p1mHBYFT8eeJs6VpfVMzegXHBvdKKetTnDivUurFqYDDMXMXbETvXuChToBDhzwt7NNMkjEUye2c1fTjd",
  "key12": "5MXqoyXKVBW8JmPk7hZuz7N29wcSLSQyp7KhzXzUpUqVTv5E2ppiWkyJJK6fX3rKixG25xgdWvXLcggT1urJwVa8",
  "key13": "3GtPyEgEYjKM6nwBo5KQXvKmjD5b3DN649uunzqouffj6SFWFXEbyqzdHtJwz5sg23sPAXHpq3enKnbxYE5XkKJe",
  "key14": "5SV65fMkm1ZavdxpKxNoDDNZmS9Ru6KeNgGWWsgtv9EE4VxUTPsjRfjLnEaVhuQ8iPF7ugSuGVtv5TjfDBDrTqkv",
  "key15": "4S7vohsZKW6XAbeb5nS1bP89LDVaXaCy6vytrWSbQ1hd1Mvn2v1HEdiYrS6iSYnAF3647GTbJp8N7AQo67PJFAug",
  "key16": "49rtPwAS2yiqWDdgvr8Yxjs2aXpW5Qc23Aj2pryUr36CCLsoRbrfd63E65juuSisvzV83So5Q97sHpLVzFBYtiQg",
  "key17": "xTWpjpwQDWtUmoR7aoSg1AKRcXiMM1QDnimqkUqadsfcX1qP4g14XD94EAv4QvitSuufVzTMHSUNXWVvRc7ko23",
  "key18": "d52o2PBMPiLmqTsUQDbsMJAk4vjsmGAe8sTcdKUR3TmNVUp2mGRprsnYDKEnjcfQC4yDkcxTwuLAMr5qyTPhi46",
  "key19": "3PHBibAhWvBLnXsoDTN6paL82F5m9V3aCQ9ofJaFtHUkaPQQ1hMZopbvUtzMqseNWuuMrMv7GFyEGEXLg47Vvy3U",
  "key20": "5nTc8z4Y5oG48shjXHyQjkcfvUTYvRv9n2r5PYv64PixG9M8vRd3Sb2ytTKGcxUtzc9tDcFLyCtnaaXd9x3SLCCA",
  "key21": "263ir7kaqu9GA7k6AUs5dMvV5p3NQ9qhYi2TgvgnYnAnWc8ag7UWMn9hPYwJ6enqr16k8BrDrLwjjyPhpRwSkr91",
  "key22": "9aaiqzEXYejpNr952GhpN5NBjJNGQGuAj8JVkMqmQGunKifnnV6oc7vvVy7KkYgi5oQG2fenNRVq9FGYkPgi5DB",
  "key23": "3nwdK57bYJRvByRJEpfgBeg8FFXfzG6sndRF8draPErQvftCcbkvzyPsnjg2tymvoX7ccjoMRmEowBzLcdMUabAg",
  "key24": "4bqm21tyo2vsiaw6x1zComPVDgdwW56PHtaptXmvHxHs6bBRfeG4epU6JWG3mLSFAHmy4nZ9CDy6qT1novQUnJuF",
  "key25": "3ZxE1KqRGdcJxQ5ePwRuhRDscEzBF5FwX4c8MujkhPfjencSP3yShDk2sbsooBWLRLeqgCkaQF94qRtzSBCRuanN",
  "key26": "Amr1tbcAynfUovmnzQDwbA7wNtZ9cnGW5x2xyVkL5woA9WfHWrRY4hwpjJiouMd5MjVsc4w1PRqQBk2sa6i2K3R",
  "key27": "5zY4yjEFszAeFyEWCMPCRdJCEnKsRoZ7E3RktvDfU1yT16GpTUVWN156eUuHPqrKMEg9Bh5oN5sNPiVD63E9ykE5",
  "key28": "DxFgqZ6jPFe9kXoqqgheTNVSvY9wb4yPEaDt8weurofST1aPWkwsXQuVMmYgNEKCe8jGmGHGuxtStzZ2JqL2DvT",
  "key29": "2JXof2WVLt5Mu7RkHBqHPHKzGRnxLtTVTYZ7AtMbdwMfj7pmzXi4Xn968yvQZgtGJsqc7QyVoTudi8Tf5ZMVTQ6B",
  "key30": "w2SWzmA4fTWuQoypuujUVH5wXq1cVXwPEuhgLH6RK2vHd6dCrPKDYFVkVPPW8R6C26eD7m6C78N1qkoN2iSx4dH",
  "key31": "5s9DXS4iKrB7PTT8gCexiAWUcRmQJdSKSEpECYCL4MuB9vyQ928zCBET4MKWhMbtNeqXQ11MShVfY2vRFUcot7V9",
  "key32": "39GuFCn1PGsh26GmM9pf5wYT3sW8E6QdpgWpVcEei8Z7VmE5LCtfdvMnfgoEk5MxRiX9PGa2ToTmXCZVbV4oePC3",
  "key33": "1d3kWKi4eBuZoWeUM8kW2uDUYXvbMCvY2rESj6MNKf5FYXAhUn1D4mV8JHrLZ6yaKj13rnDtVYrzxoSxnS6UGzV",
  "key34": "5fvtAj9govjhLF4rF21nYfYwFfatzeZBDLRxJfHiS13jiZpXTq2sUboscP8Z4ncDdRpFr9H32HJmPjF6hqrFnmnh",
  "key35": "615Gjoo6fq15ycRuoRFLFsFf7VxgV42S6bKF2hPNHCe3xNum3sYBgHmi9iw8FVtBhMfBh9kNFbVh2cqb6Zwjf1SL",
  "key36": "59oDf5XmzD4hj5vycrPce3fiHpqLAM62rhpzzrLauA4rXFqkhA2h2uJVcJ1LNS6WHDkuZX2c58bmTopL7WQ5cGHZ"
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
