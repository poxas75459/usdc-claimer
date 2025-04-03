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
    "4bZSahFnhLz8pMC9qpm6tNutwL9EKQKV2JZQz8F3DgWd2F6V9PPVp236cQwAuBWjpniauqhC55dxaNJn9iVjs2Xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MFt2wC4GvSQQURJiSpNodMA4CsfiUVTtj2MwztMyWhCUstXEY4dpEXpSjDHaGT2dcM1ZRxSstoeDPYGbw6XkUq",
  "key1": "2hBX8X9xf6rJJXMKqoDs7VCzFCC7vzzR3Z6wsH3nSmu4RnwQBdNRrSiTanHmKu8azjWeArqXZkTC53aXfbp5xLzw",
  "key2": "G59pLyEodqMPjy9xLkz2AhVMbanpUvmtZnLZ9QtSmn8ZZ4zk4h98NRXK9MnEHQCnzp76pE679P233WZKofrpekJ",
  "key3": "3WRUj31h3fKm6Wq3PnvncyawNueWzUiVE2qgnrsWQbYMhR6XZGayHnDBkx4WEWAS2mMz4UUTgFPtGTZSkhsh2DoQ",
  "key4": "2vtpHUAY5FBEuDy4B6GevjQj3pyncfimS4CaTYwkqamqBKKyUP8tbV8Ue76sMr4jU7e6mYsTYZCaY4rr6DzsV9ai",
  "key5": "cLQZqaC3ossnibKggHYSzhJEAVb4bShkvja92PR7K95FB6mHgKaTbSPcT9ZkCHz2wAVHQXmSXAm4AnpqpUt16uj",
  "key6": "4Esn46sceqvCfwGnESRD4P7cYkCsw6BrSCcdUC2c7WqUwynRFBcGvgNYaTqULnCxFdUUSZjkCf2kUQ46ueo8aXWf",
  "key7": "5tQMYoY6URaByXDuvrBMFhDm5swRHBXuj4kouxsxwuJwbaftLkaCK8T1bYAL9Z8p7dSzQaWSznAcRDthhKq2bsEk",
  "key8": "T9oWAcHpBUUsGi7EprQ83iooEkuqtmDXtJ2ua4iyhPSk1zD47Lq85RGyG5RqzRA1quWhy34q1zngKK2HqBM2tg2",
  "key9": "5v6P3533FkncuHDmiVPNKdvnv42b4gH3hjbuVcTKbTPPirhZC1B6bE3BC7uyPGDJDfnZUyxwYVWMm3SdrUr85haD",
  "key10": "4rREU6MFDScX1VxXjuTF34Hh9MfJvaKQhjfET4hfwCVJS8wS4TbojYUzoud2abfXxywgCVpHy4wCYJaNhBT86GhC",
  "key11": "H41DcMmFxdnodXmgG7KbTx9mYJUNcgVLzN1tzrPGFmUvo65fXTQifDCvLHmA8T1Go6PrfvdWyftafWHs8RVV7yY",
  "key12": "2LMvWo6ZtYkfpZshRGuzwT8DRdQoavJHXfifc3Z5XiBqjnKQme9FZmJeTBy6KRBK3gDo2bxbaszzYXV2Bouh176m",
  "key13": "qEQZrWXgyqDodw6bMGhgGwrNT8AYxeBhyn6EFuHt7dvTzHG8GQfiESvHdaboGBwYP6XEhe3Dsvb6fgQkV9FUHwJ",
  "key14": "3SUqFkZxZhGjciavPkunSdB6tqjfxKnibmCFN9nZjTu2YeaPCsxqZaT33D3rrzGY9ap4cWfJH2xU7CxB57MKywXj",
  "key15": "2gguXYRJ6jNYfpkxxJSieQjz1sDUaX7YDgHiHJiQDebVv3cZ4xXk2nttBUJGT7HsCyHa9BSA54mfhzR6kK46u6BR",
  "key16": "5vW7Aa5p4aBErzWxz3GFNVGzDgsrURPPXS5BbP8nFZVxDSCtECWF2rmcR1VjkoAwReN6HUYsXQ9rP898zV4TMA4Y",
  "key17": "2AtwAWZwPiPdHWez9VTCWuES2zzde2NKMGeh15xF75mCiSmvaZkVKEdiuuceHNpBK9a8iYXNHJzm4cUVfZtAhrhR",
  "key18": "4EkhErFWyyoAd9PQxxTwMc1cv1q4M5MfxpbW7Brcfsg4VJbbBFfNFHrFU531T74KCaP1QWRS7jNCMjg2Q1ptf4YH",
  "key19": "4DmEMQwC3Y2cg8R8tAf5xboesSNhaKpRRykiPLpYpkiAMAMpGw4rJg1UjxL5rtBGyWSmBHx17sHwQjPUPSMR2JJa",
  "key20": "5PekC9cog3LAskaEpNmyaRaovT4ivgTGU7mkJnexmADWZgkyDY8Vb3wSsCtmiMjaTdQnKGjoMsfizciYnSZh3TSh",
  "key21": "4ivHbzoTEWcLBW4mBcd8jSDDPnNYMe7gMhyPajVH6qrbXWhbpjJJidUbqyw82iYmdV8Vr6t7p4Tz3qfR6b5dHpRz",
  "key22": "5igsEGaUtrwUQJMKf3C648RqnmDhEXVtdyutGHH7FRsoJEBgTAA81mJG4hKM7GHK5NS1FwdWsekkaMarj17Sia91",
  "key23": "2u3QP689rX4gnRY4omHe3N7k3a97WNqbBSeFnLscmjuGSzqHWVouEhVXm2CEuEvWfS9TV6D8Evf1p3WUCWfkA8XL",
  "key24": "5zKTxieGd7KkJD7UfjafxYxGJo7Wn6hbqR9n48hkeDk4H8qTspczE5KB53yE2UVzniKM6VnZGPanKmVWnwMLko6P",
  "key25": "uAvHMLi81MfztJn9fV2vXjXaJX7YvZwSS7gTrBXjFZbTkWhFhQZzWy6nHSLiq2zKkAga59ATfySkc5ew4Tci4Ea",
  "key26": "5pjdkyBvnNDBAefHF65yHMd15acfv5F8B7jTfPrbrQwaZBskXwzSJX4Q3L28ofN5E9cMxoZ7gPeYi7wc3KqDJSKc"
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
