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
    "4vFzn5ccEN6k1vBQrn6WUJdi1nURCsVSdDFfQDUB4NA8dZ2QTHfgxGtsw3UfBDT7FTbeJiWPFF2D7vCKzG1PEE2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GGWPTm1zZM91UBkGTPnzV5irSkZ4FfBxmyARsXcPYNa6XGV4JbpfN69Xv6dJ88Q3a97JxREotDatruXnrossoDK",
  "key1": "uTaQv29YHZZGD3bdikmJ5YiLrQH5Ur9dah7LS1CMsVCGtiqCwy5QugKDh98TN1wSoxTERcCot8TVPYRU6Ejr8nV",
  "key2": "2wT3gFwJruHPYHFdEZf9PpzWS7vZeR68FMP5YPVSWciHq83ac24xoo6RS9vXZLUcZUKMEiqJhHxY4f7ttqFoyrjx",
  "key3": "5a3X9MvFJkdm5QsiY35m8eGpc9GzQSMiB35rof4Wj2EqB9xdMWrF5YFqZVWczse4mqdgCvseCCcMMVrVYXsDAwuQ",
  "key4": "2gscMhPS83oSft8YQr2GfknKj4cQzXK7mbzreTCem4smZqUGwTz3qMqhc4jLx8hgGLhxUBJG8QMv5GTheBGGnXnh",
  "key5": "5aeSJxqrwfRnmuJ8FopkR9egJkBKiqPQQRUp8UfwS8RSULjeS5QZxbh7BFEq454nMYSrvXTsNNfMfn5zxPz172jX",
  "key6": "3TNErhu2aUprUdcu6HCJb4CApTVCZ2noAyhtpAR1wJhDRrEDPufdwjLvW2WvziMjSyRRsemSPV5SjeQ6Xkz66vsw",
  "key7": "2S4W7qtNrMTgujQoxA3jQXn5FgSjexizECHx3Ehiy5tE6cbXRoXTiuC6rKKPCLu3Q4v49Z75nA6q2K81481EqmUp",
  "key8": "3uuRKAwt57s9JD893cW9KHhD3ELCaJoGYp14wTYMTrrsvqcbK53kcAHC7aSdaxoyjwipgNsHXmLyZXVep52pX45L",
  "key9": "2A4ehPAfS3W8tPovXCDzkkgkbF2bMvVWd59c6Je4VdjYZ16yx3YuYfMwUoSmKfBgXLPBeMu2oSMMaHuAMwWYEam2",
  "key10": "2CuVXJ4hasHu7HThPwzWTSx1qDFxEtrwLURoN4rDimh99gzWDR6vnkBN4UXSnHbBN8vAUsUUSu16o3SQnBh6owyc",
  "key11": "2iTnrvG4MuQbEuwDtfLyEwFfujtzFCZuhVfyx8NcUfRobvNhGBha1GeVDfoJjrVNxNxRtQA8d3RL2z1SUcWzK8oN",
  "key12": "3vsNnXLx84mwrrCYpER5Ruwhy1yLGwNiR4rhRrigwfQ4o9BwYCi6yry7Td3b5d98tzp2nmH8skRcd61ZJLUGqAQ1",
  "key13": "3JPJjysoazrCVZRpQ17V9jF8vxuLKgbLCNbcaDmhaMeUMivvM3btetXQSYVkn7qwqWf4FyYNMYEHdXo6EaCjJnVK",
  "key14": "62Zi161HhcRFeza9Jg5QKsu3nkNQWXja92VQ5BoPYzi9mhT3gnWKsJrC4LTe6QD4VW849ojYGrezNMip7EVwebag",
  "key15": "2s8xVtr3N7CbbcwB5dDtmYjnBDQGUCEE5xwV8kM3QdKaxeMYio3sDoDEAmsk6ohMkseErZiw5TE2WGAy3xmwGFWD",
  "key16": "4rNqyURMisk6xzMc32WiAUFunYwyLijf6pRRQY9YyZDa1PNqnD444EtcfLZ6doRVg7ntve18aZJ3dqo68XstujoD",
  "key17": "tFWbFWwN4TQ7svZFkB91MEMcF7D6nbwwYK1a6caXyrtACecT7zvZPYfHqFsDrrjqwYLHS8Z9XUbWVdNu6wAK2uM",
  "key18": "35LmkqLoSjC81AZwzw8Xg3YJRxofLv8XF4RCKEPbuvnD1H3QokSQRYbSjzP2wZrkCibYEKVWgA6XLqduvab43wLh",
  "key19": "5X641k8gy2KEQx98yH7JsKKgMHLyN4Xfz9F5znnqRJSUe6yQERQ7cQY3BqneYp31yPyGg47Ydh4kzxL8LVmN7s8F",
  "key20": "6iPRaoShN5KUQm3rXuCb58PVYpNTJmpfjKcBhzKy4xiGq5F84yxBNXRt54i4Q5U4wjb11fP9W5TMrvFKi6mGkDU",
  "key21": "4cAt1pmttchermJSLUos8F5BAYUmBoKnk6vnS5ASLPEh3t3kuRF2vWqfXjFNfhBj38Hv1jmvDDsMMQy65CCwPMAA",
  "key22": "66CJSCtdN31jT9gK8WstJKAKKNE4BbhC4gPL6wJS1qZdSXg2eA8KoJKXBYbFiY7V4ygYSZWKv2xMuXghtaBwwEuJ",
  "key23": "3uYDnSVBYNSdXhoS7zEQ5CLWY8soEq1x964JEU4QGM9fHFMcdSGgLkaYDTGvXhJJn63FMPLgzhXGzTDa2ww2tWy7",
  "key24": "121pDQp2HH8GmZCX7W6DdF2V5297VZHvPaHDL8qcUursE8bmSJue7FfX5eeRy4TkRN5MnCWYDu46a23M73bW47Lo",
  "key25": "2VfxDzhrfbxM8Vs1rRv8XGcsk73UN1hJCsALtNoGZsTQZUvrpuznfxrgqFLj2iEUpUsSkZ7EDU1BFAccKTmDc8iX",
  "key26": "4LqE1yBxjNnogLYRVk8skwYmscY9QrUoGoXUExtNQXZQC3bgt7n6XA64rjFhTr4r9M6btY3k5sr2nBXU1qZEYYnw",
  "key27": "5Y7LFpQQbRX4SBRAyzYM9AjYTcHQWQ7eg4sndHXcBRRD3EzLeA7sXbfm6VmQQEkUANwZpGH2H5PEGJf4oXNN2gkJ",
  "key28": "4hzLEBiZLmLiBTQWAt3uXoFaGA8ED8TXcRqrjbSEULvqJQzTKoXG44npY2fx2XnfBu5aDBy19RqwZFNpfG8K4Uo9",
  "key29": "3ah7Kp6ij3tKiqgAeDZvfTuhqzE2VUExz2X2LXzpFmJZntT29qD7hTWPDJbu7zfzaJHpKHGi44H1V4hH9ZmrVw7s",
  "key30": "5FcQjPMQQXwtDvhwXJs9ggLm3pzUtPnyXVwApdChk51LBZpMpLnnVsZCAaiJczH3LKT1EGSVJYFWTBm9XoFQdnqJ",
  "key31": "3hn99wUbUAhvMD5Nbb4U7UvRS7ceB4KM1ToXQWpH2xDWTrJgshEcKSWoBNXG9Uya47Cwqw9fSSNK3oaumYK5WFQK",
  "key32": "2is61aHW8BLsQGz7tDSoedAS49dsU511s6weYSPkybDDT8qiNFo6J18opHP6fVCytyRNyp5UJCWPCXzbEewetMyr",
  "key33": "66CWQ1onc72xyTJv2NXMgU6YWmiXBmpzU6tHFwuFUTivSgDDHtZycpWYQrwkFUxCWm5UBhzShTvSjynFR7jfh4Uq",
  "key34": "HRMVHi1rg7rLW4WQJaY3DZRUKRYoyPLCsGBbhNmqLeFAnQdZpT4odAaWCbBPNMNcRh34W41ZKUhm3QFoCz8i2QG",
  "key35": "BbS5xFwN7XivDNxL7AJqM48VktyXxNhZbH7qVHUY3q2mvPvYpXjTjAqo5nkxWne1uXcKbqboQeMztUFTV2CUTjV",
  "key36": "4jj6Ti5xCGNpv7pJK1dKKAVMJHdUyYjGn3o7PZQd13JWD4U1paULTESJSiAbPtaBtjxqvPSAwcBPe47AeXYjpYvV",
  "key37": "bXKL8jAC1rQ7HwS1Z8CozeFXc1W4yrhwH6UUfjJN5vHDnzMQHdV1mLR5UoXCXqvS5qoE5JhEtyr1r9uQ9S4fyVF",
  "key38": "4vmfY9A5vWr8AzK64AJ5ZN7DUGtDBfDYp1vwyFFktpRUeofzzJy7WhsrFYWs1m3drFnwTPmMih3piTMP7egfx9jr",
  "key39": "4CMdPcJNpxTzpaCMH9N32JYRqNfdJ88uiTWngvk7gGMaTyqaHejgqDSw3RKtRce5uoT5SKJMgEHdPEXAZ9SSe6Wi",
  "key40": "3g72guizVgbcsWudM1uHZVsHhkoaBHCRkmmFME1NvB8rmUnkxY6rkazoYRXVQY55h2NtuumzNKRLQmTVgU8pUcyC",
  "key41": "4SH2uUnC7TrTL56Y3AMosjTsKrDBN63SeRXLpXaoHumWf5qQWkB9xRNtRccmr6QjLLRfpXjtXTtqi4PBFNMtao7m",
  "key42": "3ydjh4G3YrNvmVANUa8TcXjRMS1gqKMwVcF2hMF3i1BcWCpZXjx2wVHJsuycJBGDu7uTAw7h9remEZiqD9EB42VG",
  "key43": "2ek7Qb6Vnym9wGpMaovH8xPpjBTw2yY8mxDDWsbSTTBXyMJXuVBf4utv8QjXcBMBuKT3Fff46HPnB3R7vWyZNsG7",
  "key44": "3GUvT6w5KEDxFD3ovEUgu4b3PWdPagMB9AFKfs7hAdrgQesstpEWXxM2WeVdRRxJPRTiaYXFM3ADQg3RMbxZmsVy"
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
