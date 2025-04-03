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
    "mxzWQKVfnUyprLmQp3hi2kqdw9FJAsCBQCWG1vvp8N51KfYc89FHjX6q7ybHB7Axw4kmkxPVbcPCLNjqFWDhAkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nkuM7WUJk2VKTqYx26yXwwSainzXv9iUr492gpY897NgkuX1KYZYCzKvfdgND1a8d2LYyipL6CvMRmkFmcDkPa9",
  "key1": "2QimE1wGYAu5BxFK7bMvmNPF5827oMMBmDpydUA7wWnfuDC7me1PbYGW7FQJKrbuj4metw1yvxn7NmuSrjkwhkd",
  "key2": "UMUonikmTB9EWxPg2sUX2oAzRJtimMtgfSQtb9uaoaVtUyJtGcWRwMCQZFuyq2XidgMTRgwTFCGbQgt663FpJZb",
  "key3": "4sv61gS4kbma3au1PBuerAMHEjjLZyGTGUeduUXnedeTo5RLgUHvmSA8WsP6fQowYjeRxbLsmempvHJE5ZhH6u6e",
  "key4": "5y8YRWkMPc5zDhhPzE9nP4oCN46oNMxx9QyDQHrKsHcoSspVDjqPQgLCZsVQW4erZ7aPxHsAWQZTm4ok54kyMJ8i",
  "key5": "2Z9sETQiLj8cs3Q4GMTMkPm26yWGQnrP4aiBrPo82Wfibc8jtxosnBaTTybLW1M6N2b9npbJug4ZzRUs3Bb9og2w",
  "key6": "3HDSxZJZ2JkrE8SZyradaGFfoQLHDAPLuRkYyBLUoHnU7j5iKfqpNt2ixh5J6YRssQG5kaNHLwCmhyMAycucd4AE",
  "key7": "UdbYuEc1k861cuYYS9gx6dhhRN4uvjAKChg1nKuXYcjdteeYhyCYxLdjoCa9gCA9heCjubamqJcX2449cA83Bje",
  "key8": "2bu4GvCoYbwtaYEfPYahLvFqWAQhuvCGPTy8zSkxr8mifUBxqCVtCLiqT3reZwruBzkwvNVZGPkY9afPv37B8z4x",
  "key9": "4mnveM21vMzztoDnVMPp3Twaw5sJVbZ3NYQunERYi9eCwRz5E4fNHCKB1tWTauca3XvobZFEiGZdAHywSi8vNtZz",
  "key10": "2Hte5q9DUqSigXmsxz1m57XHw2SfT9dcf1bdAkvLn73HQuWAADmadVkCHEm3w2SDwpzM5URaW7wFxeZwX6Kwexx2",
  "key11": "3KciTtiDK2w5sYZoK66ebXhMe8icwAStSPwiL6iEUoQXNFnrGFeeepPtg4ge78qvB6UDPARByQcNqKQ6QxMkAKc3",
  "key12": "3eMYnZPdy6XjGT1k9GKpyziPx4sf8QaDKXtqaz5cS7Yh5okUmyout93u7FLFLUxhoNZq5etUUCFJngsvAjKwtWmp",
  "key13": "4xD1oGXWy5V7NXfnwiGbke7kCuz5EQAZPZ841F2XPtY448NhAp1Zww8UhFZ7euZf6eN3xkTw8kFHqZwWHqnVAHa2",
  "key14": "5UZV2jW4CUXYgCT2ddzz1awo9czfCaJGPSbUdCvLiaE1kxP2owUAvnpCjF6EkiPiUJPSuXpz3pU9cHqDDYbAZKKD",
  "key15": "21h8cSbycCcLfHRZY2k1xdCLvjQKEb2bBVsZ72dpus3uoC2Kf4GXctg3oWpRMPq6LED2Lfe7F6FWWePDSZ96zBRD",
  "key16": "BeyPuVC6UGFfReqRsYHTR5gc3WdwciAcY31Ly9XuCdjPmGnEZ1AdGGDtMUoqDvjHntRo1AeDny268Ba6dhv3oRU",
  "key17": "2aXJxKhkEF4RQ9jwsAEiF39QtgY592qbxBkZmyXG9X91sTKkXitUmMPGBqYZPWQASiomMx2Q3se6ZezhjWifLPzZ",
  "key18": "4R4qtSgAd2qbFJ1ervKmHmuVVs51qmvigHp2Pq7G1NrTNga11t3xGmRhBwdLjPph6j7yvu2usA9H1DmTxy6CLuVG",
  "key19": "2Zjxs8E2Zyu9DydfPawocxRZytNgtQk6egeBK4raR4iVRgFaUb4XoQxQ6wCvZYzGQnJCFrC1SEXWH7hV3cK5NVnZ",
  "key20": "pg5YxC8yn7wFu3qEWAr5Ew5dQYew1xuYT4rShe4Y12sgDbAkUQNJWCKFcX7ZHrnmDJFJiLMadAsNQtk8uEaUmxX",
  "key21": "MgzHKqPwiWecDobWkffycUiBhpbhs33vFLgRp5t8qgmybMD8ujrULo5WLwG8M4TweymxfY1xKjjijtirPh35RZE",
  "key22": "2g1obaXPAhgrfMhbDfVcu3AjtqumcDyZFkeXjiV9HqkBM7PHTSWibv9eMLV6E8zHWHwvmBoTN4Arepd45nxPefC",
  "key23": "kq3MnkRczqmneoiBMHcjWRbzwGiG6PCZZfF5cddjoGTc2CkBKwXpqRH9L98KYEkucFcKXqYWz8UVCmdDhsZTTSd",
  "key24": "2ZfpirAFea7gSSzALeCGfrMgDPEbHGto7my15Pei6TP1vN9uEFvqLwGxuHMjyZmrr7KKbAvTD8KMCCE1ZHShAmVb",
  "key25": "5G9Bv1wnmMGgC7jeFBfxUnKBNC1Z7dG1q5j7KLPaprdY6Qw6im7Ee5Ba4kdUVw9XACUneQeDRxB2eaJkQEEkpEBU",
  "key26": "vY34YfodYv1x7zPTy8hEbKSbYsv7o1sLAL9PZgEug3EgrshZ2mou7stFGxxTGTfgvpfgpkqWsLWRp3fT4BBfSSd",
  "key27": "JVf2oPgEvMHCHW1f4e3KXbz9XnM993sBRTutxjGD423TTjyoaHXtPtax14kSSpMQJipZBRtPcknYSSGiKNWssYV",
  "key28": "4WnDUDJaHCZNgBApJjwkxoTjCKY456Dj9P6kQxPuxhyGhW5xPshQAwUYkRMofjmFN9ggjhg8vzp2Czm1KJkSSK5g",
  "key29": "4UTNxCn6y5TBY9VL1pCcUGJR7mRGqdcLTfjF8PTjp3zbUWVvoQnhuDn5jW1K4v8tDKsnUhxECLSx8SKVu7P8kAFy",
  "key30": "4KMX8DGLBEuv7ibNXSv3EAYvZSKtXEqn7oKDkmc2crua6W3TvbsPUh7K2XZvJuxLjMdSS95fTQB9X6LDQN1wzctM",
  "key31": "3nNBf5GJ3L6gpKQzMxLcWi4kASxSCeLydiJrYDvHoKQq67Ta1PZN5XNe3FXGvpk5xWkwgB9jgPfciu2PBAq4B6Ue",
  "key32": "23aBkqeoFgyKsvS5deqwPJbhzqZcXNbJqsVZrptJUSuAom7YXn1BRgTJ2oUzNM7UraAo1mGuiU3DR1C3AsZMdLgx",
  "key33": "2h1bpaC2kEDugHEZAoGTqFU6CZAcELYh7PqHXdgzGyTTGxSnqMfFrpLgbXJ9dTuA5K8KrLR9tkxCAzkMHw2ZC6CC",
  "key34": "u9HdVCCYAQydMQwZmJjMXsM8v6M9ErHRCfa6hadcFWLuKgL56csgS2waRYMXzsmMev1oZDnjHSq1KkgR3aC7tQ1",
  "key35": "4nCFjwHQ6H77rqFumoCmeT9V42uSk3rumGCeNKHB36CF9cDPx8UJLFeb1XLrLaizfcNxK7xJ7tS6ZMy2dRrjM71f"
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
