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
    "5cGr8BcD7BnzgRsYce3dtXwdta9Ufxuime9XSoh3snbpM5jW9LSv3XBLgzDDhgKpt7hjHHzLxwvoaU5nJNGZ3g2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oig5L8yUoXr4cQ63ryRv69jHcJp8FJx4kecxV3HrZpe2jfKoTHvGS1HWAEEBobfwVSPxQSHen1kxQskEmkSE9GW",
  "key1": "hKm8u1rwQAXNWZseTFrzBj7Bc8pGWpuoZ2wJpFDjWRpdS5SYNCPFHDDnMiiEjqqWD7nYuiQWSvQnJ1yeuGxq59y",
  "key2": "5Yo9WYFCdGNXVkKSvveY9wjP81JT9F1rjc2psh53xw8cz6FMd6MsxTRSXu3vqhKBAhHZRrGfg1bVTEpbB7rNqPzV",
  "key3": "4kq5sJxxRtjfjGfyyRN1YKDXm72cqYZJEsCNBd1vtGSUGzioYjTTp2RPGdNhF3bBkbzv3LxGJoHW55BfgAEsey7C",
  "key4": "2bEvy9MvqcxqMxXh25cb4Br3NLFjaLgpZC1BZeDKsQ7PX7R6o3RJYgJaZejWUdjZxwc6qYrDb8gXcYJJ8khsuxdZ",
  "key5": "3FzNvNhaSB1oRnE1L1sC7DSPjbwh5tvHttJJqaS2MXEMUbManvwvQSLw45RAsvHyAn6LSvq1Q2hN8fkC7ozH2yog",
  "key6": "2b2A2NvdMQPSnwj6JPNZJBYCThsrZyKhJ3Q5FzwLDCY4Lg5Mo7n1br7yzHFJFyzsGd9bQ9HwYSMCLQbLxE8iqUev",
  "key7": "CWR5eTWgGXtTNVbrcKcLfF57D69LHN3nMDCUVpm64w9TxNaAUPDQUH8gS8nBAS4rqN7jC3NFLJrNBi2F3E3LzCu",
  "key8": "2azs2kPYYs2gWhexP1ePj4eaaewnA23TNjErKZFBEkfbMPTVqoMwSLnYdnA3pxXThNdPt9dNBzzurULv5PXFC2S7",
  "key9": "P5gtSJFT2GZBGH345zfmf5DF6dkLd9KjYap5CqApCvTojGTXx2uqqAjqResNWqsitCQLdHHSbd5ZozpZqbEhCgQ",
  "key10": "4LgvcJNKp7YxoqY1bmNjsZwyJey14mVUmaZnR73cvZsRFPDCAhG3EUspWp6jkXwjfZ3JrXuw1xqseMXRwS2CGVoz",
  "key11": "2SeHYtkGfEmxuvPobWzThmp6HnyFbdjPVrUC9SShgdh464peWdXfGWYk4jL6xwQKKNY6g2TXmF4Xg7Pa77DhBnUP",
  "key12": "VeyxC8W4GUur2DESxNRxPhz1mmoQMTGUheHLou8iPtqtjq199DAFdFDWPKfoLnT8giv3UM5eKQDvjscqpHFuYL8",
  "key13": "3nqhRx2DNHS7Kua2Bh6rQuiGbBLMtSt9bCUAYnV5pTGowJVjU1SJViB9MJ2GeQr1XJVnNJqQDBTxuBB6A3rZsRYf",
  "key14": "2bUPtvroG52fJgyNKpE6fM6vYXDbwXRsh5quS5cNzcQuZdbs378TVKYnHeRQrjbymhLth5V3MrKqB9n3Zi7tqJEH",
  "key15": "5xyDeH3gyKvRxrVY2aaMKUirUTCBXjTFvh3GppdP1irhoQ8U9H31APtP81EseHhXCTNVpEPurMjJcKwTvjinuZKn",
  "key16": "2DWZLzKcBtj7uE514vRAVqWsvHj2y9ytST4UuQwho6XJQ92NBYz5g36Q75j5ZzMqqkBJRJWmefARvqxVz3J6aYKK",
  "key17": "5CLi5jPtxoQbY65oEMiektiWe2kFZoAD9mojUREEDhNCkAvjHRLk388dug7ax6RuygWYZhYNV2VxvZbLQLZHZ9dg",
  "key18": "5WhXcchrYhy4Ftb6Y5f7jiMKAzRmTYMcWNdPZRYUXJfx31W1ZPuwRZq7eVzwXkUSGm1EE1a4sx3rLbUHqDafHzpH",
  "key19": "5XPzdd8Rsfm8pvQjPdyUWWKP4v7rmMjjLvgegVmEne5Rv12DHFznquZcyscFCHNcnAuZzkwTLmQ6K9BiTBpQz2gz",
  "key20": "zJRsEapQrWbTrT3Rze7JmSGEV7eFfCsvycxzBFrEr2JKaANYCHyi76eFXfjeLYQvXsWj4LKeMmFQhsrHxyEKBUe",
  "key21": "3LHEkHCXEJ2iTjXtuZnPJW2iEJDUUSHbEZMw1ccDf8BacrBZJjmDiotcDGAfJUmEmKoKBywR8Vty2YVFb4NBJoh4",
  "key22": "552LDdcigNEPVHHhqK7yHWiBPjjrDo7WV6YwRECNr9ShK7wz26NbQyhguticXAtmd3oq7VSLBgP2vWTGxB9mc6Yi",
  "key23": "46xnPVZCWtGX4CbHZbUoUpfkGK7o1XymGT1YheKRgxAXM3jfjpwrG8wwLLHpKHMKTvvPopFJJRGeUwvdHotMBMxZ",
  "key24": "2G5SdQZbSvTRSti3PyajchBmVmSqnj3c4mhzA28KSqshMKkg8zKwmDvbvJ1r2VLH5AGwXGoNsd6nDNRkEZ9cv9Tw",
  "key25": "5YvTyWsNbfnCDGtfyjsLfA3uVwCvATPJGQ1s1NpDPGgJNQxJaKQUvSPbsDr5ctHLMSTH8d6D5cBetikdyzCJtfX5",
  "key26": "zDWYevGNpSgfFqyp2hUxQUZBXk7TBDsFbLvWTrwHhMPmHdYg3yzDGerHkEcztjGAXGjpk2roKouyegCaPevFAeA",
  "key27": "tuKbMBcNghTTRBNTXW2jNKtt6N5zSRHpBu42uMv3Y6HDUCLGPGVqvGSwxT9nMSsjpv1yg2Qgz9QU5isitJfBauY",
  "key28": "5LEUePi1SmJWHwEcnbqVeBi21xauS7uZtZiYPeZctfeANi2p5Wpr3Z9PxPJGH2EN6c98WKxC6PKYrZkLgpSrzgko",
  "key29": "xiebAeRwW6ib4oAjrpt8ktRXU3uN9QS1YBgKffPj3wQT7ZFCjMaJEQTycj4fMnnXEawAVUCDZjHMvmWWhydLuiy",
  "key30": "4Rps8YGsahcBh464tzkqVQNoQADzsvUs4Yt5Wq8hBjeYr8noEeESydJhwwo8QB9Xf5hP68GVY21YEeKxBDAJKd7S",
  "key31": "4AFuWg8AbDYTdLGpB78FqiGmofQDVhcmP7oHZC8QA4JAQvLAbkecykJXMMYUAd6Gv3LeXnx8ZFtBrCdnbv7z5PuP",
  "key32": "5w6uaRFfBBapUHK7uE6WrHxhb3BpRZ3Y8ja4hLuJR9P2Pm2nLSNXet23Kf4vESy6FvDLngNzYR55nopcpBv9Y9iJ",
  "key33": "5BV5s5drttX6ciRhnVWXKYEDTRt9JzBpMnJipnyjT31weYAe6cHW2kVFZFAKsrz2xoAzTEnGFx1RPuzvPusAuSHw",
  "key34": "5a9yj1wTJGPoo1RwY5QySsdv6kpenMhvjYYrTrsxrU2htXY7ChJsZNcQmkta9YSmtB953xPZaPpMxB1GDaTVxhyS",
  "key35": "2Mj2ATAV9XgAbN9Jvv3nViL1nm7AB9AE9Z7U3K4RtSBGcwZQ4HsbdThJJcLCYaT8euQ2PczH5i5tK16V9f5W9Xox",
  "key36": "bxUriNyTButVsj4KojAsoCWZSncAHrRzi3WAoAwyKY92P6nw3KZjCDmnsdqQeB1dQvTVS2qiaK47RekkRaGvfeB",
  "key37": "3MFd1aJRVzdNePFAqj8QU14VTVuCFMJo9ct5pTW8ShN2iZbEpN38AQtR2MvVJejzw2oQJgKcLY72H6Wcdyg5BQwB",
  "key38": "2ZXc6KxHQt8oak3ju4dWE38MZj4zoZK9LqUpCVzHFmjVdpZhaNbXN4Xe4N4LwAkZ3AndkkKhxTRVRsNTVK4Wrq2B",
  "key39": "JsnsCECZ9jXwnbFVMJ3rNC1xtuo5e4D6T7W6TR92Z9aTowPF537UfTGpxRyhdZRj3iWKb4LrPHnWCa9gAnHMWt1",
  "key40": "3qJY9BthijWiDzZNRwFfATEzfCriw1sxJmSqUDS7hdEnwKWneg5Axp37TgbmXUypsEYPf2gTg4AwHVGUPhTzxmd6",
  "key41": "66y8pcmNPwe9ZCt73FJtGjWNWSQCvqXDvTsCx91bQrXkraoMZbQ8n8M3WkSxH9MkQU1mULnQqmCYYBQNZ2tKNXwX",
  "key42": "4WkLg1zNFuGxfDdrCvPbZvJGzQj1uv8WmRUzF8kSRCD6oCRU2SP59ihrvfeWfccHT9WoJ2YeCBZFuU8HzRbdV92z"
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
