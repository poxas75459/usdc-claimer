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
    "4LiP5AppJH6h7J4qGp8SUa1snRu6TknMgWCe1T4GFLJ9SCnTNYwYNyzkCEDqB9eFQJntvoa8J88xEv1vZ2PEDK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SaZme3yR6qjECRoyU9cXLsGqJYaPoNFf4Lf2XpQBxpiF1xbFgwaP2iPXZTsMWwZrZG2MiNKqQCzrCnAaSBifUKt",
  "key1": "64jYLQvppjEry4T1Ni6o51MPGmKYSZKiu6cGCrwenC8G8d9ztwvfEdmK1wrrbHdHWVpjUkTYMr6Xs6nPVQ96J4vW",
  "key2": "22zYNPQGVnbmvZ77K44rmYVRM3D9i1WxoUstEH77pDXG3xyTV5tAGeF2YvScyKeqJdW9m8fZ3qFUHhYdzV3Ac9wd",
  "key3": "3LtFe6EF8zruH3CP2DzNQJeSqfFho6FeyovwUQ7faUTva8Fn9ms6aUH4HtAzDscAG63EUC17CWF7krYuZpqyB9Ua",
  "key4": "1YqaYr6aH5D5e3kyHHABZJqTKk3dTbimMHP8QKhpJ6GBvMkvXR8qoZzvkX8VWZSthPBzhfaNa97UEbptWfDVvv4",
  "key5": "5TYfRX73GgHEGsU6UoKpBmvNwfUM1USPAR5cF5y4uhj38TJor81dvAy2VLCwrmxfMc196GskfLAAcPfHi2xER2iS",
  "key6": "2vtQrjbkhuHc44crsF96xsuizGLtfo7ZyA9yRhi7ybkFgMHaVygYRG6xAuA347K1XCns48BMstKD6cTR2Yo6Trvf",
  "key7": "3n2XSWXzZzK8QrTmss4WqbPmTj7dwbdR2FuqibNQ9PMxH1hj7bQRgCkyhEj2vsnAMprC6hoBsHPchcy6RS8TJN2B",
  "key8": "31NvZ57Nc5vcc3B5pc6JPwA2mmsfmFbFhWpfTdTz9dmZev6CQJtQ27PdfFpL9uZuYCspys4wV1tCbcNW9o52yZrp",
  "key9": "3rLbExFkFCCzAXn72oNCA5aWCaVhMD8NtSr1F8xreT5b8QLKediYjib4aQ4ohdShTyuXGF9GV7YqAEB3A2YGgPts",
  "key10": "5RCrMjDLNAoRdY9t9b9oJqo4DN59uob9Dq6YWSD6y2V7WsrqPZRBzadRSRGvgEG4mP7keXu7yzg5mQHv3jE9bByn",
  "key11": "3XQ7y1tQnpi4UtoHhj6xuoj1br3mRmjgxK35vuT3zeLCvgcMzpzrZdnwH9fjgVDh5PrqxBBzeHQQUejQ5qTyCQj8",
  "key12": "8ZUs8Hp2vsghGXFGSCJvzARE8UiUhTba3V3aiZkq1yrTE8gMpEJHNN7MVMZZ88ZrRjZKoHAMZXk61jvsJb4JsLs",
  "key13": "4kvwkCTEw77UF8t1dX5V7bXYAYz1psDycJqgByUsdmLwH45SJnZKcFcyxxtA9iRzKWsJzaV2pPWF8Vjj9DEsTfvo",
  "key14": "2Q94Bpc6o8y2KQJS6ntF3rCoTzv1YfA6Fy1Px4FGcrg6EsxjPAXEZorWKJXHF6pGaKRRj6qhPt82QktizavMqiSM",
  "key15": "4QhLTMC8rgNjJWw17fKiL3J8DFzDT2om9VxyHbM9Wg8ZH528fRe7CXQdShxaGWvfGHpkThGeaUbmmtJYHRS8nm9P",
  "key16": "3bqJ4hQNMHVbRz6U63zsVjwbP1Ls5NqTWfFF4uPYDprv1tybKfUk32oNcJPnLF9Zs7jCRrAw2pJiVV7FLbqwHnbw",
  "key17": "4117gJLoESxuruKoy45UV4UqXVCB7oEvFYJLaRY1jDoaDkekqoNigoqqGDQenF7jAJBH9o6H16DEQ3gYeWNURhtd",
  "key18": "L5GsULEUWe1ZX3s8NuTkxo5FuAXFYex56b2jAWn7xbSryRRP9hxCAQWVnejhYNbYQDq35igL4GvHL8iz1wYhf1B",
  "key19": "H4hu2UmhRjkC5ZBBkUXtdHawviQ61aRgGSHAyjGekVmkLFLF6FqseGgNtunfqaDwzT78ZzXanJV5n9n1qqDq1y5",
  "key20": "2Vn7Va5Qo4YNySAcpktnzVkBC3GGKFp8KaLirdBC5FJgT4Qo53PctYs1qvwEpyfiQEeDnibpByZWi4gXuei5R2vg",
  "key21": "5cwTTzMxy3GGaA8mfmb1osmh9vYWbQXJJnbGwShRzy1RDRQpMnupY4LPtTVUACwVYqpm917UKTaZZnUgKVvJ8tzL",
  "key22": "2idVbjkiuGKyEYpHyNKQN9MxeVTh6STVRK9jP2hevXoMtiNqR7opvqexTRsKZtTXauubPK2wPNmVxRrMaVvUTruR",
  "key23": "22u3EwKPLMcByc51nhUV1BW2BvgQUTPooTxyrhTmNZybmPMde8EZLM6AGqGbnXB9vKWFaK2V4Dq4QQAu7QHFUt8f",
  "key24": "49NgH9eWo3c2Ky9yLeiy4JXFvycSQd867qw14vDutxXFTHSP171bKdEV7C8DnUE9T8ubrDGHHzmQoUsmovE9reCi",
  "key25": "3jopztNkpSAHLA69Gw1BHPGQtBdzKRqXWwMfCAeUjjVeASfmX1buYJV1AYHvA4U7svCPmWEud8HnrSGauxX9LQRh",
  "key26": "5YuMc2qAgxFkeKwLMwNVZKBrTJPoXGekrg5sYMMypkKJTAVYATwm8uaNh6zSCHYK1e6AjQ1jwhksxDrbwxDb7GeK",
  "key27": "5Fg945uN5CwQJAkm3dRKJfrHpDAdwat55vVTENzGL37vmhwNdRL19EtNxsyN3VoJ9gKvP7bejofKFXzRo1E3qq5r"
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
