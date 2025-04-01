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
    "2hYcfSinf53qiYMHSWt3NggEJsJKm3csWJSG5rJu4BeuRvnamCUByVVUsYEBpYg4S73rsS89rk9WPRiK4PDyrF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vnRERaU9fmidPjrSupo58B4Jk6v2cFyXr7yRtxxTEViAbEu2iYfDsm46krc37iXRHdhq5az5xSV588omxAmMY7Q",
  "key1": "2uDCut4DnyYVWx1G4xRpdzJwAzbe9M8io5QngSujbTRrF76dCCdQdfpF9c8ebt2B6Vv9mRWbRQP4eutMEigw8PeY",
  "key2": "UMvgASZ8DoEuUrUw3tTsUtgYDEXuTbnEM76ViHkULa7CLtn5MYd5pw5eQid7Pe46gG5mZoxLra7gW4FxEepi5S1",
  "key3": "4EkPX8yThs8sDiRqHYb3xEtsX2j2uDojVVjrskPgEZ1YGSZtKbnXa5X9diwKZiPwxtJFTjwTRpadWjnMUUfiYBJ",
  "key4": "59gpjYFPi3h2ZxuJk7Y8qjyHXVEWnYS3uouWRF2wci2Wzr4NvPR7i3ARQwq93Szv4VH2vHimZ7ni66qt6pCvbPwZ",
  "key5": "4L4DxpiQnjfkWA4F9FTJCAUV4oeQRnts4mBXTRZ1HyCkA9WkrQrv1QkcbctJ8UHZbf4cb5aj71bbnpVP6JuExfmR",
  "key6": "3BbE2AjYJn1RFhmAHdsm9RskgmYeKZzyZt67pUMGy5UrgWkh9s9oaTP87AG75gydoXH8w9cEdy9sSJHuiAaKS74m",
  "key7": "4XKCcmXq2AjVBMLwNLoX4sPhX15YoYjrU2a8XExcj6rCdipo4FzVEWBPA7fb3vFY9PHza2JxqZyyfbXdpVGYkB9w",
  "key8": "4mTEKW7JgtSxMxjdjpvA6G56Sy3x68AJeKzEWwYydZiHpZXMAhuDWQFhnfpqhCZDh4QBcG7LvBdbzZ8ps6pK1SMN",
  "key9": "7CkwKrj6oCGL8DcrFZoXNPmVtqWRMxTSkunoxft3qrgsYthFdCGdAPTcQ1XdDzLeiQ6n3vKapTUtJu7HSc2cXb9",
  "key10": "3PSLSN1rjUHsZ55W3KLLPgSJGG8rwYvLcpEkgDAcFBhViuUzXKCe4Rg1hNM3RahcujqWR4jNUmacQTzLtR6uxkLT",
  "key11": "5v8CRyh9VE9X2rapK3NZQpHsPNUceASwVp9ztKRfBykDXjj6r4sk5zLq19PsH4EUDVAqz8hH4KP1DqytPTh3mfmd",
  "key12": "59NNW4NGoKmvkRmr5bkZuYyKvjf2AYH9Yyv44JWFsd7jDyvPBwnjvakdUmrks1jDqXTfwyPzZiPgBE4qszBFDQWJ",
  "key13": "2wjcGBSrQqSUx9eptaKDvipjxNGYhJobKUnWQB1Q1b31hCeiSaGZwZ3Q6GYGTyJ91rzu4bMahvdMskBpJthNaYsJ",
  "key14": "2KQ3XVVLzC7EaX6jM7JjgXioURciYFcFRYxZriTPY8mjZNYwqCsGXhecmXV3ZthudsdQMFFt9g53sfwBrebt7mLb",
  "key15": "576BtN1hKXQLhSivGxj9Jjx7X4TEXHCiqSajD4P78ENQtUqJEEHTLycusAWRaYyogz2hrvntpkx3J2yJmspSXTZu",
  "key16": "5rUNUD2BgFUmz4ooerZVXbc3e76dbQxc47avpxZK9ULNbswvgoxgTFL61fsPDLRRfeY3PhubYTBWM9naTV4CfYeH",
  "key17": "3bAZndHz8KSBgt4yEYf7gxFdCaVtkRnT1pBaQcrz8javnz7F8wFex2QTiYCXhoUKTtrS6ni4zofuAByq531aYdWe",
  "key18": "AZ6LQsnZA2oP7NZNP19bF1M6uQsbD7kjTb3Dqcozdepan96cHQpjRFiuLNabAxp6cpiqsMoKFW2S2GzDbsGC3VR",
  "key19": "37JLYX6kcoXFjHKggryJY29rtFX5zQGuX4zSHgsyan5gMPbkXmWCxB9RaeCXiv8phN8t2tt7vBrxBiwHdo8jbcTx",
  "key20": "2ncKVtgPPQbZKZTm55iH6W8rfKuDzrTXcKQAwJTyYcHL1yrge14f9oXMzCwaqiZBs7eRK822wvC574mdFkTih3vC",
  "key21": "5C4u3jRQ5naKzMDHULPWKtiTJa4QoZBEZSYnk8CWuruJKGNzhmiHgDDpgxsG1mQHpQFytd3PUEJ5G4MmvBzFPm6",
  "key22": "2ZfTUxAC8xLTkiXbtVC6bLwHK9dpudyeX9TJFp66SFD6SqK9or1wKVaLuFrYP48B1zGaCsDqGxnzEDVPkn6w3xMi",
  "key23": "2kpJ8PL25EJ8vzz2EckwtfzZRyf3KUAeiXWaJM1TyTVwaidsaYCaGcbaWMK6kiFZGa7DctNUShJZiuMEzq7gTJm6",
  "key24": "5cE9bMg58jxSoEsNMzvJwkzJLtfankidbB4DP2cUvmQUZnJ7wFJMeaXUoAVAKWkY85V3TmDPhH4TgVgEaDSheL52",
  "key25": "4E2hJZFLhg1k2fjNAqE1z2TYWGEH1MiUjyvLVtHvXa3vA7LvLtaUDYhnpTxb9gC2u16pPyvppYBu5iNJeyExFDua",
  "key26": "2oUGVjhWh1xZjkfnZgeBrMQtLQUr499PHRHNwrwjJESPvzHSw9hH85j2NBCA1cpp3JmyKgcAfku7LqLReXm8XQE2",
  "key27": "2FomzRDCDzkyTi584gmgqrF5ZvUpzEhqEQ3eaGLaeBTSUCX3aUgGgo5TSL8rX9S5yNFVWNNpwTGz3EuCezMEZ9jv",
  "key28": "3Je4GzVNmgpmXP52rgxKMfA6mvwqj9sQuoDSakazcxXmkpqji3sBxdn6bVPrXNuQaqEoqSzqcbHaTEBR1wsioBn8",
  "key29": "2yW9vuhK9pw43hvbFu3PV4AU61nxvYCP35F63J2SdhuZXMEpNrhkkeuEs4TtdLWjLzApEZVE327ohK1WKdeC79jy",
  "key30": "4PdAUCK55wkocEPJ2RwwRt5BB2cg5ySsKQ8ooX8Ga5vgdFLkvmWo99bg2D7RXj7tGMxhZ4Zc1eKzAo8AY6VNLE7R",
  "key31": "2YJh2yvUdDX15L8WVw7Tgu3VoVWs4safJuBEWJVFZAAu8CYfoKVXJyNvJsvrAC6omb8f1nCe19YA7o69cPtXBZdG",
  "key32": "5XQGiYcyeyZpGAo5gaHWTCAp3ZfbUuqgnQPg4fAHcb4GQjW5mhdaCX1aA5Y8euWTQom5NwcPWuptGCmLsfVDYsZo",
  "key33": "4PAMnQ7ZLvGK6vN9nczAFkmWDFV8F9TsxTLWxRvAXAfZBu4eQYUVY1gmHSxS68pcHHtX5jMGihz58nRL61C5Fv1b"
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
