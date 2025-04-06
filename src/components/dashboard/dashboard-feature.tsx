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
    "2VE4mqKHFATAKU26yk6Hf3vAqqzkV8rH1BtYX5ppHr9SjHSPPJLm15PtcTpBTAvbZguiSGbQSFKbw5XxfTR8sEd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LeFDxiiEpTY8MRYauj9evdwg2mBz6RyTB7CMPj8WRE4rC5n1x11QxumHjZX9FShXmV1oJ68vDAxowoxQbFUVdKu",
  "key1": "Dnm1nfjRvX3sHtPkc9XAXkxTzV1Hwu7S99c5FjTVZRioMT1k2E1mS2pDgjHXEZhLSDdQyfUfP73eEJJtAMeqGJe",
  "key2": "36h6ZjDMPcNi8vuAb1YRHeWuTrfHTVyqEWdnc8VYaHZtKm6o68Z3JmuCz7Dw26v6ca4ZmVTkPrdq8WWga8jUHM95",
  "key3": "3Gpk1njhH6czzKrXHgs7vsM8YzMFBrigjayAouEDW1VQxBrmY4re52ASKfec1Rvf478WCyBR4bNVMZ8n1wqVqnsp",
  "key4": "3veKU91HWjcWNGnyFd5vntNwgsQq6rBnrej8Wnz9WrFWkwNspWoEHQcA8XYGqknMzAFno3jsuQ3zkBYfL4tLRB1k",
  "key5": "4uAHsjJ3hUgSVpdJCyXLAxvwNmiC4CohgorKDnQGM6uJWTvZbrqYQyVH85fMPdFHAobkvXUvfTM6diCgAAezwEdf",
  "key6": "5Q9Y8CHrBpZkCzVpV6MeuqsvGCTbiLWndUrsVVKDsM1AydrDStibDsxRV4UUuBfpeYcMncz1NLLWaY4MwuAq74Xr",
  "key7": "28V69EkuamTFYV22DmTiTq1yj1zCBX4BW1umFBtUM8ogRqqeAFKLzdtEC92NzxtaXWHJtP1TvGha2sMfuM4vv28J",
  "key8": "3ef9eJ7kYsqRzTCqRtWKWBTfxAHpcESAM5jLachs2kYppcyhPuJ7kvRmwg8mzpLGXnHbdMVwECyATciryULW3JSz",
  "key9": "sjoFxjHZDpQMcXQk1istv2xkhEciEAgV1Mnsf1w83fqseqsNjcqC9QSFa1Y7Vs4KXMVvWVbCZqvfmCNRN8bzUJf",
  "key10": "64mKv3Wk4AAntCpCS7w7Jx72BtJq5K4TERvM7GNGAW64eSnKeXYd78kEuU1pSuXRZvsSuYH8b9W4FqhHTFucx8ry",
  "key11": "5UrpTX5cPrfhZtcKjMaTPNB3eLTHrXp4vt2eUuQ4c5GxAzSYwpP1mcguRGT8fLMTdaEPJ8dyKgS8kfECmfXGg8qF",
  "key12": "3PUH9bZPANtZXfwdnFfWpXAZKPgnr5NsMuvhbP5csV1wjBqarmF2oiC9ve4xfkPySVmTWBqCmYwnsX58bi1e1evg",
  "key13": "4VqcxoJN1utYTzB4GezTx6RgEZ3SDr31AV6jHUy2DRUMrr2iDu33PRcU2A5kciseSTkvr6cK8zF3VpaBikXQNKqE",
  "key14": "8DjKbPm44VpsGN553AMY1XJNAuWPyt7oGiEiMjUHjZLAdDU8NQuPvs8FUyumCDR1e5FLoFLujj2WhvkUpnnfpTr",
  "key15": "5Wco9dwtmvpEFsKzX9Gd4KewQ2eHzq91wtmMCcgYCFAEibJCWeQMMc4vGG89jQFmHGcvKQ3yGmGSD8XapXjd9mkv",
  "key16": "2Yu1mQEi6VNbY1LiEP4y56woBubdrAi46o9jc1T2nFbesn6mXkimo297hHNWifnEFcyZ7ooQzyX9F8teoxQUprN4",
  "key17": "5dQnqjsHF8AcEXQFoin7PTLunm6zGcRmEtSVSFYYZihRVcwDygKi3NEnFeNgzJZMhkgnBadFVGdrBTy3GHqzf7at",
  "key18": "67YvqbqHEnNGDcwbfG69tvi5t9jYrKd26ANyADoKR3fAqUihRiYeVFjHPMoYVfHMqxG8ibmfBX8gsB3HkQczsntk",
  "key19": "qrqc8NQigdLaZqzBeoqpAv5tpqMm2cmuKfQxbiReKEXWtownGbGNpYiV417XY9m23DtrHAUs3XaJfokKBvG8FhZ",
  "key20": "4idWFhFgEf9mEgBiYUdSRcaiHoGxrHfByfRDm1dwMJtyQJC3BSVQHSdEcfmYAWUp9W5DQZt2CZpjxQDCpt5LeaWz",
  "key21": "5JeWsBm5DTWxypkMJ6eUwUzbuhysYW2mYbqNPRR7Ag5LfoGHzAdGzCtQYkwt83t5kigPMkNyVYeXXL9uSTZvrhu4",
  "key22": "5VqX9V8ja39RVr5iPvXsVf7qJUoH4HKeLfGgezn67KAJSAtDLC7eHZwHrEMUio1dKrk1EJEpwWt6mTTheMvb8L4P",
  "key23": "sV6q5kJcUKReMXJWfwNDmRBfAKLFpb49nDLp1CwE2X7PHQLcFZRBe9p922tZpyPV5yR2oS2RRSwscgmsBiCoZ4s",
  "key24": "2oGFNTFsifqGvtzRYEV5Jtfq9L1y9VDmyptr9B5e5DsUmR2pjV5uBxejbtUjo5zaoeQKzTP3wrmeMERQKxJN82pW",
  "key25": "5sdhD6CKaJABMKk5B8RFwNtKYN6K8Z5T5wfBtLZ6pQ9avapmCcLJQTSbkAVoy5QSZbS2kLmG1ArXBo85AxM5fjdC",
  "key26": "3QnB7eH2a5uTA2w6YitNxvbD8EXgqrGvQ8vWBAvp8BMFoKYrhf8CwG7jLKxqszTGYiMY3DCmZ1R2oN2sZ3aJHSkj",
  "key27": "9c2Tt4jiYrKdtaibJPBYV3wcS1vAd81atenQEs2n9j5LoVqDbHz63wX8vwvQaLn798D9mPP8Dmj5rCzDPMJcoTN",
  "key28": "4dTNCXk8D7V1R41mgNo7uzyyYmj9sxGrswNUJbn89WK2kedYJfaVvjz6HAFhcKS2XfpCre4MsSuFsZHXDLNMecYm",
  "key29": "4MUnEABxL9ASV3H1ajBAj8EfXoNUrwu1WeLaNBhJtdJGkzLG4dAfVWq39TLDT8kX8H8DDV8jWqC4yUWdgGbvLr9u",
  "key30": "3CYtqPdS4kS1zHUrsHwztPqdfq8b1dmJjTJTDNovhPnkcGnYWeyJjEpHioBm5m7fYVAxXcrAsrSNo428QABXWNjj",
  "key31": "uWFwDZ9BJ7LJCWw5opXujovxmHs13MPVBv5A7Ee66DzCNvqCrydSn2SD1qUknnSKuBWYwAPL4b4AbzWZUjtyGKK",
  "key32": "4vGqJcVHYbi5iTFEzZDruk53pHof2ui9JKxdgJ5bQT6vbPL2kXCHqQuKJdgCcGQAD3LaC6UsC3oTX8VcvKShM2QU",
  "key33": "2mkrpAMJ4bMAV5Y9RrdRzQ2YmQyPTypykAWjBqXWSNJnCns3fJtBTV7oZcSP1s39nEsyA2tw8SdM24ZHXuictoLG",
  "key34": "TzvUbFG31RMWxxXCLng3aS6AUTXYo7QoLfy34uhNUUMGbC7EVfNKR9SHyjrbAeHZgvfcUx6z13yG6ZQDdX3K53q"
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
