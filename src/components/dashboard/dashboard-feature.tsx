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
    "3fUo4aD15JpPpiMs4dm8LZYvryEeiMLnKEDiGgRqP9XtH6M7j6XHF1Z6MRivX7urStCEyhEnRtXhzduSDukA88Sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bph326zaxfiTLCfms3NTxe1fK9BVfqkYysyGUMZLcYEmRVgmdNZkFVFnHPXVEHKWnCJct4H1WtPb2Yx1V4fU7AB",
  "key1": "4p26xrx7arJZ88ykLaV3X42N3JydFSSY4EK7VwQhVYatLYtckR5kYVAmp735CyhZuqCM2FAQKxPBH5gYGuBk5TnQ",
  "key2": "xJQ5gV1FgmRk6eb1PVVQBLaS81jnREcbp3KRb1pA7CWEm5mnnrZ89pfQrciNprpMmstCYjJECiVjj2s2rQ7odyA",
  "key3": "2mY8pyizXWpXzQ1zqY4ScWhsEWPGUaQQCG9FV6XxCAPhBoSyyPJaU89FSysXmdE8f6vBkXMqeeVTBfxBxJGz59Bm",
  "key4": "64i4kGHbrU3GvPynBQko8GS7NTabyW1zvUT6jHffr1FjTkNYPcZhNYdaLwGcSUo7Drft8Udw2nctwAoSAyXD5Txc",
  "key5": "2vV8znYChu86cjQmyaUU2dhi5FjSYmgaCYaTd1Ywzr8Z3brZy2hDbfPHQiATPAQcQdJHK729K9h9fwqhvzii6zpE",
  "key6": "5CQCyhNzQ3KprA8wbatdykQXq3n3bni6C6E5qTg2qx4CWaiZs5fK2PW9Hmp1GYCPyVbQsUK4Gzq6w3tQmCpqqdNA",
  "key7": "fERRPkbkYTBoQHxAgerxP9jrCsBr5rUFuPFGJRqmqUsD8jH6bg4DsGG9gw1ZBdbBWjC7RU8WxQRd6gHcKgNiUAD",
  "key8": "wKxwMA8aspYfcubR8EEbjnhgpi1dML4rpB1kDYgaHr6qFgnaVNcFZ6Fknhh8e11dvzGP29rn2jKp81vSr6GJnFD",
  "key9": "56VVPTSS7Fa831NTCh38QkBq9EoiBBqxYWtakdbiGyxPQViLtU7N7XzPpNbXrNbj7WDJguSMV89zmEukRGc8gnTK",
  "key10": "5xjnmGE9cSLjhHsqTw247idSnh2dAd44BdmS9AdcFfABYEGtU2XqYc32Q6cN9qZqbAFJ1oGuEWLWsfbgkfGFWmfm",
  "key11": "Bav2Jb7GwbVJoNVgSRvF68fsjjGnSBKX24sKhYJ54LUr2tvTgke3ogsXkLCMGnqrkdWB9mS3szrNkTgiDgw1G5g",
  "key12": "g5kRJbiHQc49K3irL5itH57mCYx3hTqz4YNnKDEuAmVSEru48zhuJZUETbzhkxqyHRVHjRMfddmVMsyArF8xgit",
  "key13": "4F18ZU1XoGqcnmGcMNYPN9qumGCs1rJZuuHgfWcy7G2CCK7SnPs7WGnqiMaSoUQLmkaTS6AdkNXo3sDvBonSoPBC",
  "key14": "4YWARotjCMbzT7RYLrcTGm5CF14tK4k6xLV2JrXHBAAZbFd5dR188U6rEe5XQTff9modRcpJV4maV4aJmLWdWoyE",
  "key15": "zRAg3qndA5vm8kFssGdtAaUWS2g6eQACRiERZFsuD15Ui4T5AforY1FcwdsAgsMEUWB9STFAcAiiFfCm4qdj4Zi",
  "key16": "3cRZ2i8g1mE9S9SLBs9aqKuNxUp7v8HpUM9jUkqe6STeqJnVebkQSgkZYUSpk1mJgvAoVXmUfLtRVh3UUddxUHCY",
  "key17": "ngYJi3JXhG2NUpZRyzREcRNcmNLhCsbwprECustPy2YW8U5ogHEw9nNpZ1uzGorkC8Lr7KYPnGPorP59sr2Qef9",
  "key18": "3bXbgaXBdKE9zrfzPf1WJ3zLLSA9KGr363ajAdZjWsH6mWr7EQxdDmT9Dv6T6TKvggjHnVVMSSVXcxVdTzRFwuV1",
  "key19": "5DM4XKPeh2oR7DFj1X3VbZKkWJxCfDNjLgxNo54eTS1La1tG1pxHvKNKRysCDtHrRijoEZHZqJU5U1aFzw3nv4um",
  "key20": "5U4iag3FGTPPA1hTQj3ZAWk16mJz6ZQaXyFXxNP8Cnfhr3xZ9R7QAnKNhvcx8qYSwBaactKam4v7AwVSDtdBkGPA",
  "key21": "2TvigB2exUixPRSJxE18VxJgNWzsT2EBP5HEcEX9fEF7ALrEoUok8My13UcShsoBX837QtD8NV3G5C77hCzPDcga",
  "key22": "3TMTimu4pWZacch4KEZZsKV3QD6V5Pn9paKY5eerMW4mKqs9bG8WG3bwMcZLpi9G1aQzB9GnG4HWfRXZnBnUPAQi",
  "key23": "5F6mui5HZbbT4ndCQmNRamVnhdy2pyQUUDy1G7p6q57kQ62QL5Wptbz6RFynJ32mCLbVdsi1hud7qxUo5b4ryLSv",
  "key24": "MfQcGmyyXEdu2qJeQKCrJiVxfiwySE2U16oLwE3Jimb2TuRw1ucSfGySce4B3zM2EPkrj5tJZ2iR1NsUjqs3HYc",
  "key25": "3dfJ9duH9egaP1SHN4L74eNLjHUPYUB73rEs2TbzgKqCJUV2HscvXMZX8ek4BYz25NyChfq9t1s1kZEUFB96FkFF",
  "key26": "2BkZBaD6jE6uuwDj1QvGY4DokLZfHkrUdBmHyb7hpt5CmDLYnmEa1L6bY4qQmXW5bS4XjmtgkNKBKx9orFRb1Ek8",
  "key27": "4xEfmUvUB3aSqDbYeYhFk6XnbPEV2eK2DZdT9iMAWuvdXAtYSwzhXdNBQhkgvfTdPEhnzCDtTSoXQ7uBNqyTwjnc",
  "key28": "4yr3iYugbERoLLbjckxhZdvWp9KXvzx8havQSYAf2xW3NqbXnzQicSW13si6KnQ4TW7U9hSSwEjVXXGQsHfXoFRR",
  "key29": "5gKo58gZ7DFYKZi2fkBLzvmJ3wUftyN9du71S6YfjygssVV1DrmWbswARXitn6gBjNvbnwJdS6KJw8M89fSqjSEo",
  "key30": "4v5HMxzVtMQBK9TG1seXN7ToUAKGKXXoBHdRwJV2XXHWq2BMxhwN4EMjDB2hEPF4WGWpuPNsPUPuU3ZJZ1qr4hSR",
  "key31": "3ivyE1nuvFxjhu5XSsQNjRpyP4AHV4Hp7mcjUpwGJo66YQcAb9UkvhkJqdFFnThbDCa2sLrqBo1K9RrJfxtTUfk6",
  "key32": "483Knm7oXHrmz1JpbSN9swnPmJzgQ1dKBBvMttz18TuvcfDgmoauSLTAXwZf1C4EBMEoHijt2omKJqNM7EmRjpTV",
  "key33": "4pRgiLa569fgtYWQDZ3uyR1U6ChXR2GfSw7HwR2A6jRFTziJgCvMvNu53Ek1mRrHJYSEd7wga4nNVZSsZk7dMwNV",
  "key34": "593uCBXavJcWHgzE79vpX9bd7wqH5TdjssjAwiA4Pn6y2cESdE4Yp2gKW8u1N2SKaLcVXwbC2TdhJdyR7qgEWXvh",
  "key35": "3uAw6sUsTDSMqUkh399UXa5fwCngHbm4kEv9mwXG2q1AhKAnq2ZJnJXqCotq3eNYjAu949K2DY5agwovzuY3WA1a",
  "key36": "5RJHKREZdZzWRGKA8R5a21CNYLrhdLDqw6qEixtndoaaFEiPrKMBtAM3EzGwZE6H8hEjbvQKemyxbRnw1RtA4Xt6",
  "key37": "5pjYWdLk31ZfVuSSV8PLudhb5GssAJwaZ1GHUHf5YgSVj8etiJ22YZ9y3ZiP73bJgvEJ5EkvTdwq8xtgh3vbbCb8",
  "key38": "BKwHnkK3LckhdWhGPCFPzNk37hhMn9auB7dEputPEWGYqms6YtUsb2ctVKNaRqQqiAHUk3Ben1YKJvd8Tqxx6wB",
  "key39": "3zdmSCWWPULozyjLMtX76zUxsvXLvVvWfhSGgSm9yf5DJKA5QmYCw341FNA1FcTj8BHvY8f4z5hY2TzuvPeRbGMv",
  "key40": "59i6RFpZ9tjbanzPERLF2foXXvHx6wh12S4pdWEztquHm2AzUhfzWmcDm1ysv7qXyWAPCR5jobF4PfSb8G3biXR1",
  "key41": "8Gc8wanLqwtBHZbZjxPWFVs474vKTnLEdFcAMSQnFnNJ46LYnr2rsnup82gb5NeANog583RUuqYtkr9iEQhjJze",
  "key42": "2Rq3to9D6ZD69fR94ti8r6WPtmvNjRURQguZNDcuDdRNZ4UbEnxJQwyo8ZfqjDz28qsnSzskdC7wWtky3439ctKV"
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
