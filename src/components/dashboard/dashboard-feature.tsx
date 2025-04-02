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
    "1owtbupTbBBKcxyq8YHy8PfWACPXyG8GeMFU5mizoD3U4XYqeugVBfJzS2nJZ8Hy5vJXYqJmKe9abqYEpHMgrkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ZY7pMvGaAmib8SxkX5T4ixeWA1L7cvR4j35GA2cioCz9b9RqVoxFaoYFgXg18YSUCVv3JEk1CGTsQ1YHSLT666",
  "key1": "nNVeTbtSfX3To3TyZoyj6qQB51Mmmw7yeQY7vjYVPjrhnGsrdgmVCYvg9JCPpMRzDgtR6bzLDukyg11sdSZZCa2",
  "key2": "T8paNDWopmazTjk37PGvgiC47r2r6Uc85j8A3ytwTFU9hgqHXrGfDZYA3bN7LcGUDkwRu9hoGu72Evtz4BFMXnE",
  "key3": "24iEfiMuBwXNgfxehFJ8cuPYfvBv3fsQAwJbbqtQ8UWBEYKucMDKG8zQNNz8FuBdgLnx9ZxJo3Xjb5tDn8CxrtdT",
  "key4": "4TeVjYc1HU5VoMeGk1J5injyYpkLsJkMFytbpJ8VvXkMELw8JfdESxNeKehX9bQtHW4pRRG5dZP8CNH5UfryX8cK",
  "key5": "4d9W6z2nfxmWckeAVnnKKkSKzedzTHLsQMxHmqMM6BTT7W5VqaLnwHhB8tgNchqnaLHPxgYzdYpLqSXxMGA4HavR",
  "key6": "ZY2FSHFjcECq29JL7FakGetQ56WEKkhP3WuVvUM9X9S14EDJTitWEJXutQbCrZgEdyHXtzMCmYYrnJp7YqxSstV",
  "key7": "3RYGexck3ByeAjhFpAqLtQ2SXqLUSJ69afpeC1FCk4vZu4f6Hamv9M6unVJ2kB4QKcuUf5xhfgyfJneeHqJuDN1w",
  "key8": "4cqKX2YHAqGXFD5jBDGgfzVDhKtWfcL7bBr8bUX8VrUwYckss6aHt5Nb5UyBQiTNswUsMHkPkf34oFtcJ9FtTmGF",
  "key9": "2dtkxsxVBTutgNEdhoATj8fhS2a5JctFzT2376szyfQZbSrRiCxP2FqzYWRMfzgcvbfXGzf6M2njj1taBsX9fxNG",
  "key10": "3WRTxqRg78zuctcpwdGWdT65HyzKUUsGb8aPpdSozHvmYBtrrYKDbaFDtgMhoQABDQKmhdZCELMS9pRHdGzK3RVw",
  "key11": "46ooMsNp8WiNEJhNjLwCqHJ8vjCS4BnZCivqYWZ17VddFZHBh5R89U7ePs2X3dexJ1M37dRy3nWpboSid1EYPw4D",
  "key12": "5e52VbQUNXrbcVgXfhL6sySPkNhaaK4Y2bfWTv89gz7XkDR52o95AhjR7QJtyPahv3PWZQTQbgX3NMx3JrsjJfZy",
  "key13": "4BXWVC1dxcPShAJnLuCGbYtFkPevk5ZJn3KahEsZmZViKDNaDovvafcswpHuqNHkLm7RLPV25vmbJZX5p4QBYt7h",
  "key14": "2K12qtmn6C9mnAeto42zB7VRuRa62fhXHADmwXuJutDGpsizwahjJcoS7iXaDgobi6UWgdFb7GK38ukt8TTjPhFJ",
  "key15": "23qF8EV58DCwNz2wN98sLUEws3D92gvMsXNWHsDgmEKRQsQwxG8nw2xD27JdYv8fZYq8hnSJzmhuKoDJkHbN1pM1",
  "key16": "3xo5Mvz1w8wEewgCd44FzWm4uWvWvhu3mecZKGGH85BD7tScjM7Y9wp5V17k8fDUW3v2cmSJVjEFMLMg71d4LgXe",
  "key17": "5JtXEmn8d5pwuvjJq5jYy22RqXycFwj9mdLzja8TV2CgkEyKv9QMT1a5TvJLbb5iPX8nzTozGPqVJQ6bWDZbDGed",
  "key18": "2pcLunWtWKHqZoKkfidb4HwxNE8FpvDsmJnVLnh7z7Y1HTB6SYxucDT7Gx2czo8JdxL1EfAEhdCKEWvBqFxpPmhA",
  "key19": "5PhFbZPErAEnU1HS6qfMJUhvMEK83jNGBnMEx57iGhtYTMhGhYVJ4dSYS3LpkVeSxU8469Z9CF6aB1JfY9nm9yBw",
  "key20": "bYmzeJvYBUwMSwwCmoRr6cexgEBhcDZXLuGqu1YvxK8Kp3zsa8ehUNH27P6WKo98MMqT7bWmCTubECgZHwWaZXP",
  "key21": "xepR8QQSsXZEee9fkEiN8NmPywgBZqjhULaxmqXKyRohyifPonaQxQqZaKMK7XbJeVVgCQz4NzeGChEJWW2isCN",
  "key22": "HGA4b4uBs7YmDFkEp6tHzJTPmKeV9QT1EnqivhiCnAMmPjcXHbmKiM9RLyZQcX4GXkXaNjNgbPqSH98Zxa9YcNU",
  "key23": "3FfrQVumNNkFXwrGB8GrqiWtNwzznonbn6ACLrZ4zbi32gWaASQU5ES4VGYWKULjRVpoNfKjD1AXtgtASQrko2vU",
  "key24": "2Nw1ZiBUfJejVfeTSe3Ko9BaEwztpwhQRf8K2cEFi9MZwe8Kq35Q4M2prUyLaeV3nvjKgU5p7HZJYzuNXhux86pY",
  "key25": "5rPF4ftTpGj3cbFtHQvyQJv4DFJuswyp9Mmnjx7gfkVC1rg2TXahjfsTQU4K5nbQ6M2sYMRZPfz5SsNSW8ZBUsB7",
  "key26": "LuWkozLsnKv7tKuZV1CFSuwPb8yK1TaHRN9DFox6cKQbbWEFVBi3Sq4XeX9ovjqLz83mP1pmdiEDFQ4LgHUGVcW",
  "key27": "4AiigBB4w5zWi99PMyNQDMPEifTpGvsMzzVbyqozg6FbaikC9AkXoV4eBi5tpTnixWzxfxseegN7CLBGMoFoFqKm",
  "key28": "2Hw5WpydZR9uCRAqden4hpf2La59QbfxBZoN2XdPT3cExYGo4L1kTC9EeSufKZfTwjhQg8GLLhcjEsa64AGyu5PC",
  "key29": "uXjBw6YQgd4oFwtbVe1zY9bYYSM657CMg8z5kS4LpfoJAx2UYeuFb6JEFvYkP1ehZWT9jAFWyM2bpV97PYFP9fH",
  "key30": "3tCUpP8qBoEEPE3aCzb2ZaBnnaG3d9VVWz5oDTzdPCbcy5qayowNUC5new5xSU44QBoLVaseh7FYHQUatz4N6QTn",
  "key31": "4KPMVAV2TpunPcU6CVUafM7w7KchNcq7fbW2fiaDTS4yzUNJaT1UDiDcPAoGjs9NPAA4EUPfsjwBu9GFZx9TAQg6",
  "key32": "4DL7tzAz7G2XX7iCrf4e2fncWuFYFdZzn7wTFgGncxvFDpSt167drJpa34K6vou1oGN6uEjNXoEFYhZ4FQXBS7n1",
  "key33": "PpZQCk7mZbRG4ma1deVfWmB7rSvxs6vVFFsC2TcF8RuqFQ4gMzzAGekMik79YRvCXV1gM1anjGmHx4dvuQtYL68",
  "key34": "YboupwaXQsKgaCxd3iZLnM2WiHcRLJbR8m1VuFGha81RMVUwxH3XnXREqntpED3onRLR9iW5k7gd81AFE5pJJkE",
  "key35": "3A14ewPVy5zoopK3QkBugMMMUM2C7KpQB1pJvoVrMncwgevr7Agx4PY1Q7HiV6o3ybCZ4nRS617yLXxL2NmHzSPn",
  "key36": "4VubrxxVhshLCjzmGNipAnFopGCzhm2m2LyFe6ZZgREiNTd28yMZvpoLrWwTFimVimn9c3g6prUeq6wLr2rAPTEt",
  "key37": "2opNMyrHtngaeKxiztEvPWW1AQv5QPGErLdETDVMNARwsR2pCstgYmK4fEkFErc5GwLS7jcwfCc4ndShDWfzBRXY",
  "key38": "5YmNma5pY3qHZNjFDFp9ePQW8fCeV3U4FMFWSi7YPB8GVZ29fS9TAXKcXLsdo1fLDp8emUsxavy5jGdVDt65K2wn",
  "key39": "4Hrhw7egFipdE4wRcpMhDmPEGzF2Ub4xb9xqvEr6zxsPEvyz4DjcoNwSEV6WpCR79UKhbj5qyyNh2yTx8MdQb5cm",
  "key40": "7NNoT8D1JwsWbnx2FQJqDgDSj8WR2uv7BCuDEimMcpRFetKVsrnLLJfnr1ebar2bED1ccenoNCQyQGsD2RJXvDf",
  "key41": "28MzFawh6hUHWc7nt2fSGE7fovA5FXbBC9GBF6FSgKyJ7oBkw2cyAbhmdHLn81NJ4FgksdpJs3UKT9zSGKXhvtPa",
  "key42": "5aVzN3vFCS3pqAAe5XSUyPMM74ag2vVy9mk8FPrp25BKFLPPJBkDzcLkfDeuoZwuevQGzDKh1kLRM2tcXBQ4urgn",
  "key43": "4giCkrMu5aSyWvmaJW6Gok9GYDvZpNbgWpcb2PPWnV84qtHhWtEymzTXbktgDExJwnSbKukWyU8KrHmvVjjzuzgR",
  "key44": "4Kk7q4AZZEPLzQCjQaJkR9oQqeFcWpLu4AxucKmQ9LVfGEqcqJcjQbMEF2r26THqMPVRwBUykLKKUEuXsXCEjv1",
  "key45": "3uWpmV2eUtG3SW1ifJNvGWnZvGmDXkshHMxzfzSeFKDGtCJmQAW9rQ5TLJHepYheuJ87B1eAuzMJx9TwBL3Dvi6A"
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
