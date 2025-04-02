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
    "BwM19owtT6kryd723F63khh9PYCDCta4J7Y5LPivC9sz7CZ8xwjSwJTqohzUyHynHVdAcQghkfDuP4Emt7Vp2Wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aRmYAwu2doBbWbHqMdR1eGDs5ET3fGvhJQjdp6WJikR4ZhmYqL6eNyHV8yKj5rTeVbnCchxYKKEtekDSSuKkkhW",
  "key1": "orwL8C1Kdi6dMb2yZWPkTAeBxWXB5scWynHNEaUy6UfECWnv5MVynbsS7meDAXfWBuj1ZkqLMYpLveF9HhiExvZ",
  "key2": "3LDDmiz2WSnK7Po2pGSsUotadKazGKvW2gwASihWGHsz66QbacFudwMdeAQxADnKUexAnLjafTmT9iLVFkzRkpvJ",
  "key3": "PnANDfav6m1u4cKeL2BDezEvxAHhezrECJ52RH25xotYC5FX7gay3fqZz6DVbGa1dJx63cUiicuyNTxQqmbF1Pi",
  "key4": "3qjetqKJVuEe1DTMR6gmdnZJJzmKZ5uKs6au9wvSAe29BVmvyVXnN48f5zURbThnuvCNvuYJA7TdfP1iSvmVZFzi",
  "key5": "2MfFYXFb2VHraWAyNjBwFPfMpra7k7qvuXRZvCUD9fFvvAT1iR25NP92sWHhhzaMeALn9TaMZEcuXu1qPmF4vNhb",
  "key6": "45bkwHn58T8ST9TdYcgsakWLZhrcFkmhXtjH4TssMGfnU2CynuYfy3zvZs3QVvkdXM41mtGhDtZyXXBFpFDyQG1",
  "key7": "3pQtVitExT7ZmW75WkT1sFM2u5FjzcMF64h23B4bZ5A5s1ecjKjuyrMHJ3BwnsQVEuAtLmAVfSN325YmqBFJM2Zs",
  "key8": "2hMNqQZWH6erU4if5mMpNcUQgpZUmid4JLq5bQZwchLPrd5Xo9iGBnk7Smp5GCHBuKLgwafguWeHqfcZrk4PDrfC",
  "key9": "tj9poXRaR8GfpwE57wqcqKv7hQ7RoiUY9tSLxNX3aqA4oLmCjmoJPTi6kBvR8s3WD9Cp29UUBwgZqwCxGVcYomg",
  "key10": "sSroE4chCEDPzB3okZaHErSSz4MuRNBtySR83FdzNWzQTbbiJcxnJZHYhgrJdMk4xPgzJXHxjEwwRLThc3i8MyH",
  "key11": "4xRcHNNSK1cjn73ZYnGQxZxPpb3y7MsKRVV32BLdpa486NisoVnPCmho1BwYL7jz1FbmrEuFqVz2QDfyk6D2uYW7",
  "key12": "3bUqZ8QTUnH9evrGeASRer52vy9ERp4q2TSXqcrURBA1aZUinc863jDR498tBZJxzbKWpCJS3qJasFQq9pn2x2kF",
  "key13": "5h6dBTeLZbmuSLiXr13yGp2pETewFV47hct6NyTKRiPHEDabWWZSNhv7bKaeGbXDkgKTpaz2GS4cBvirFuDKs1fu",
  "key14": "5Ws5AecyAGywnZ3pH7JWoETPN5J235Di9GEnB9TUJ7zyMFXiupGVbUp9ye7hsyDhW5GktnCEcpmrP9nyEFHHoGBQ",
  "key15": "3ybqcmeNbr5BTKN6wEgzzoEyzMQRxpi9QsjweJDZE4hq1rud7Nwvh9CiiNUTMUWJoVz9AoUKf3nwbyfcuQSznAcW",
  "key16": "3kFzK34BFgeXPqZ8dxZ4woVhwwoaP2JLhSFF1dQ96FodBLAbNEMteXf4iwvk5WBCimj9WXdvGH5t9XNkmx7kfePN",
  "key17": "C7qZowCmebYrdWSFBtTiUbnACHGmaGukH5LzYJ1ZfFv1UTjxADShGrXJn9RsiRiBfRnYK6QeP85kAH8GjGk52Qi",
  "key18": "2nGqyLvSgnirJGQ4bTSQH88iMm6uj2vwjRXWrDtnugUeGfDsypumyAxGjbWWfxXofg4ykVjmtgP7YuX6kwzAC1L",
  "key19": "2Kt576SLTsSTiGnt6NcbNTBbQuHMxkLb3vkDTE9k77Gsx7qFJgDxznzn8FzNi4AQanwonedACE6hfHC3AXbzujQd",
  "key20": "66HUFVYaaRZXqVrPtGmPLtv14anM5zoN5VH2pcuCei2i7fcGjJ3tSdNTtoUDwndDfzGXNsPizGgoFUYGfQ7P9tNU",
  "key21": "3bfEYD2TpLza62LJ1zVNcdebaR8S7RQwptHmf4QRVXZpvyymfQLg2XjEYHUxV6BJGQpFgDDmsBiU2h2ukK4GDgGV",
  "key22": "3Lbs3eKDoUkVAvfBECV1QjMitf3qnJRssWwbbdiKZyiFKbaUdPVfBi6NuwEHMhZf2h7Ryi9sqZFDuydrMGykewc8",
  "key23": "54r3eKEELcS5qJFcud6VWbzsF6YPjcZyQnJEoXYLipcRiMmVNndh7NPtuKSK3WwYDQmudfyFuFNzUsThKVz35Mxc",
  "key24": "2j3c4VmfLJTkciHEL2ovAbGVCPKtBX3RdtQNLsfWzN9RaCHyPZGT3Tk8CPhrirHhdf163HdSVX6eRVB3oBf9s2kA",
  "key25": "vBcJmq3oLLNEoFye65TfbPf95FoxCxyMDmpyQwVTFxWTWmsR7XYrkzgLn9rGAQz3hpdtNgYqCyCNXj2gLStcZ2U",
  "key26": "3xmJUJudvwNhrp6srWyZHCMnVFK4zeNPdAcRX7n8xRA3bUZq4GfbDNnn58GxauDpFAh7CT2rLpS7Bi8DxNoTY81H",
  "key27": "5y96r3hxMt4hubofcdfKjSaQpFMF1xDofwBXBpeMNdeqB2gt4U3JPWf8fkKJsHC9Q6PponsBCC39ZnkwpVYVotsT",
  "key28": "uwCkGB3r4i8jPURnJon9E3dwkX5QtKxcxqz2PC4BFjGLijqboTisddyLgupDFQvUGLk5hrPazmw6VgrDmQQuLYs",
  "key29": "5uXSsCqvvaoKQVefu3WrqZxjd7CEZF4KVJ3NhaYryZwdwdr75PKKRhCp7GGtcVtbaCP4DxfivpNoQEqS8imhwSZg",
  "key30": "rQcByhs5NKDPaqSjRhvTYD6nHTujudGqL8dsAp2jhieHWLrmzF37EdKScY7om9BW2t5fvtZxHuSGi28whjBsK6r",
  "key31": "2UeL7A5ZsUjCzB5QWXyigzucrgb47F537zVYXSM7E2jMTLP33pn8VPgWpyKLevYi5vKzf6MeEnXNrhB2E9YhrxXR",
  "key32": "2nV2R3HmrJ6TD9UYarGamjKy5r6XfETWCjznp2B2ZxDZXBxHiHsheUfhy3dRPXaexwpiWhASsExRvUWtmyqFW8tP",
  "key33": "5q3C1gmnfFR9f6ap2TaJBV8GUcDRqWb7sLECXr4whKSurgm6GaXZRZgRpbJd4PpuAsJpAuJXdUgRxWfHtFu7S9WV",
  "key34": "5iVk37pTciPQZPhxqeyT9tcFfcm4C8QP8pjfjAejmNU7mBKZMnspiPkP4eyAGzxWLc43UVfMEW8hWzezc87KYfbN",
  "key35": "63mQYKwH3C94Av47ywuKg9Pw3yhqNQLUdMpj32REDhDPQSVEvW4JJDw3DEXZxHAXzbheDdaWRPendEnvCrGQwdU1",
  "key36": "58YnKYFx7vMzp4mLSnSthnsXwMdyBm3Mcp7ANjnjukB46LveyqgPPVhxekad5GaQBdkQ7xqw5PeWuLzhng4hvG3b",
  "key37": "wa2zARaxE5F1HgHHdfh1ByqNMC9WUDRyqr6W9iaiY5sfqyxG5wQdAX1PwpsLAV8btcyyoh5Md5waVDY4gTdPCJt"
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
