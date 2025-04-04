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
    "64EbcTsRkjyh4NpJYPCgexNxfeUe1GaHvog4qCgitAJDrtYDirGVwZZvCPwjmyvFHydHB6NXWAjt5GMC8jCT4H6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51xmJu1jTvjWJZPWi5KWA4LC7ZNDQaz8ZkVVetUsFP93d5x2FWQ2MWBbPiW8WHT1nJLSMC6AfXd1EMY5QqnKFnEX",
  "key1": "62fTjCZ7bFvqU2oJkZSBAeUBLu1imnVG2UjjF6qYBgzrong9qPi8dVKiGKQNMHhDNBwEkkMsji2DsENcB3i9tSDh",
  "key2": "2GoCNjBmvThZenHMX2ZvW8vFzQSoNizcjrNPJeGQJhnvxCZerr7qq9LzUtbSYNKVUqwFosFAQJtK4xZKFtGNVBFz",
  "key3": "4xDx9RjVZbz2E4LoK9LZvJaCZKEiETmdNnvaBsH9n3FJbuNG31jQJPkC7rzaBZA2cUBpMLYt2zoBG1PypT9XwUE8",
  "key4": "2j2pT2rHxWZFqtbsFgCg8pu3Jd7ByApPweXxFJuVDzCZyr1S9zR1Z37CRjAET6c7fb8Z6VFm6WXDYUiWDCYYQx8U",
  "key5": "2Dd2i7J4y4mbe9TsN1a8m5C6JBPMvjKmgR94DjiQFZnSRfPqUvbJuiYnhNmQZbazwGUzdUsSuxqDnapFFopbnnb7",
  "key6": "2o4XB6nwNptMpuYJWbMFAn8QbZbLjY7tgNuENcYxFZcAXTgQQheodSqP6CMtQHqgWTxsgVeJWKf3cs8S1WseWQsU",
  "key7": "4MBJnCEnKJW7vESRu4tsaCmAktEWsaZUDXKgXqaBQFQN89NP6LmfXYMtRjnF3YnVMQXdPLx4AQF49HMTm6rRaPPM",
  "key8": "4p76wQLBwAmzCrr881QJALEQRY9G7H1Mf5mVvVGCXT6feqeJMGEsQV3nqmUGpYkDFrWJ4tXpmwSUwnXM4itHeHUt",
  "key9": "2y9hb6pyYWkK4SusL6hpX8siTSeNUQep8pBt6f2ksdetjeRhMVVeq1PnysmJjeh5MZwZK6x5B4erRdK5w5h7fhoY",
  "key10": "4PPmYQ3QC5gWvi6Y7mA6tPe6RVSvSHeu81FiA88dgAgnfu8yLhM6GtfmSweKyMPJtcTrTzxTZZd4C96eEBRZ7dkJ",
  "key11": "hfrMZpmtgppM4CxmBx82QDX3q2wCpukDUAGUN8gkSbE1FbTU8esZYT5oTeATi4yNNUcegoufuUn4qBj5Dz5emwb",
  "key12": "2mteqRFUeRFCTFnMR5gHTuNpjqkpCWwdCbERsbZVNHTKUZNskF1K1zo5wABWfe7RRx648Sb9GDoAxkY4CSNQhQx2",
  "key13": "1PzLttXd76vGgXi4oMaHoiobd25yoTSTVMnxRLzthAjoN8EzmezxNUjwiUrV4GFb5M3fVmtzYh4fefYYwxHnhre",
  "key14": "3cKpAQwRbddgZ63nWX4Fd7YBBrPmZjarktxWaAeiScw7KyLDpnLYCXrKYL3N7RRH6aUMDbX8GzdwfUmtYmMKMJXY",
  "key15": "66tX2KQRZrucko7W3CAEBg6Gd7CjYpxKABw5d7wsYveNbFC63xAnBVK1DsGwaLFdqKvrMdazvaLzd1aiPaY5uBgb",
  "key16": "5XCTNuud7HNDVSRjjDE3VvWXcwrtdktweuz9Cakjm9nK9PmixJmTBG5dxqRJQi9tL9wQ4HgR1eKFahLqCn2KyVDD",
  "key17": "zPzfwG57bg3EctA4yBUgYsAyK5sg5aZ7haV1C2Bdit4dmTnVXo4j2h29NDkwSUhyuHm68zxC58TjbMgKPEtZukb",
  "key18": "4EJYgusW6LqCfwRTDkXxKMY5MzBttDG7mExZkioq9FuXFNEbn2fjFdmBtmUzR1QsM3ks3uUr24kutgb4dGYu7T9q",
  "key19": "2NdAtDF6mci8f2uSYiyxLKkwTR6ioe4TzzfEhsRe5SaRD9Vn8sZnJGeJuhXdKLG7p9xJnen1o4pg2q6EdJCDmH7P",
  "key20": "34WCd2qZC7MGh6dMPTeXx1SEyB2wNKX4B4Q9eg4mgDHFsWdfbhdKwhhGZyr6NWpEiEz25DiHhDwzh5w2b77Z34N4",
  "key21": "4XT6UhB72DrM1FhkGuDQcifrtWP3EU71SD3wr7MYJuNhjNhuwGJoDjYV1iqRS3uYGx5yMdtJvaskgGw8N4uZbKDe",
  "key22": "54qwjFAYKFcAYQ7PEEQiL1X6VXyjS76mvtyQUUCrWvphktaEfT2TioDYDMx4vkDAnbCcWgZaKtskYSPY7SNo6bwt",
  "key23": "55JgxyDCEygcQEyoyNTm9rTBSHMcCgZ2sD3MiTqhzA3uUmSX3PxAeMQF1VQvZDNMX3oJq1bixxuiEJBoUE7GU9Jf",
  "key24": "KA8A72Rkvaty1igmdKNHtdzoyeS15qZMbvotDzu4xQdGL7w1A8bAy6jyhcvj4TaH1qs3CXaZLsg8wy75H48QgJY",
  "key25": "5F6y1W8dnWrHqbhjrdwFY6wYMZL8FiTqe8mkDVpVPU6kUo6VdbgbwzFNgkdECTFxfRaTpUJdunKweEMkZWRuwo4P",
  "key26": "5AMvQRda4NookLpXJEJS2NDZWY5xEwwY9GW6bZHQg95STqg8GVcvF8Xv12BqyWRZneYJJT4UXuvrypt42P8Y4ibP",
  "key27": "2pVmSuYa4CK5kzhH9VdngXpTrSLVC7UXupCNB8L4AJv9DyhaMughnMtdX2MZ1VkEAij2EViYt1rhHeKX6Pwx1W3",
  "key28": "4RqRVokdrpbR5tsQTNo57C2fXL7HwC6oHnYkMGTZLBsLbyrsZBfeJyfq9mJATESVu5vnMsj4V95CHi7inkwWh6FL",
  "key29": "5CewiTHted5Co8FoMPCrPh3hagXMDGRPPpySwCmfQPWs97nJSoFayLnu2Nap8MSbYBZLJg2FHHfuUshNAnigpWZn",
  "key30": "2hB6XK1s4eNVFcQUXPoAuMmSi4jSX2AfumwUdWWGLSuNvNefeXdkqw377BJWmjzkzRDmvsNsHGkSynDSguF2jw2v",
  "key31": "kN1D2xFpFBzKGgzFMr6gHKtaLp7kotjUrNWwjnEwE7yRUXiNXMUzPU3ooqA9exYNbpni6vD5KEpUSR2sHgaUvBU",
  "key32": "3sE5NYnCLQPvXtjLGNYCCJGsvZ92crRJb59KSRxPSeZ1vWGyBBwAZYm9Si3ZdFngCiptGyYmLaNFFDnZxzZSE6ed",
  "key33": "2gzKs6Te86641q2RA1mK1h9Ypk3Cdx9ANrTLWY3YHy9sjxuiK7eF6K4FxwyZyhPtwoTwmtXRdZbtbgqRc1U5t4Cf",
  "key34": "3cSZk73XbCqZsJZAnFQvHfgmhQg3uhqc2k2Y6uHdk2RwrtoPBSjWfU3phxh6e1TZipPLBP8uqU3bHnPbGfrFjmvG",
  "key35": "W7z2zuVYV8m7ceyxrBGFi1vq4i1zvm9zAWF1k2Guo4eWYzUue9wn8nTQGdaaBfFmXUvFkfn5D8FbmqFTFPAbaAw",
  "key36": "45z8ipMqQUULxAkUpXohQWCgn4pfJnjTASFyyvUYDMFSyPVDXZcK5CoxZVh4i4yHBvXNf5oeMtwfH1NzBK4cEzv6",
  "key37": "3kFprPykCzUc5QMV2MttykpZPPkGTBqCG3M4PHouLrxGaGLksoRepem2sa1VCx1dHTC8b7xJT3RBvHT9vD7vV77P",
  "key38": "3Hhz7rhmdVYxK5bF4GZZJ29iGfcrk2AMiP2TGNdPSw9NLQa93tusvhYrrWnNQ73eJkiXTXHq3i1a59ictD7voVVF",
  "key39": "JKBgoN1oLpGVPaGhLc6Ejqq7TNh9JTmpqUTUoEXFrBKPk8aYNmjPBy3VwFjb4XuC1htxZVuFPrDjL8fKudDMDRJ",
  "key40": "4qGFvZkzr11CbjoFmpAy2szXjVwTvhtrGL46ZTUjPRihSsCyZf8RriLNf7ycaCAijMfx324cEheQiQAvkoRoDMU3",
  "key41": "3nRLzRYqVx5TotJg57UskyTbDn4EnJPgnpTCtcFKUJguKwh9NWGovW7Mdj2sordEBQ3pqoXZMyGHBW2RNgXsUJZf",
  "key42": "25QGtiDNcva7zk1EfpLZsehRTQbWLxt62z94JAGFgnpy1o9KBLHrjYf6FyR1eQzLatEFUYgG2Y4bEoRhhKPiSi7J",
  "key43": "62mmrLKiG4cDuAWn63ZVG8wKD7GjNTC939yVvr3XoqNCUKCvKr7yPjJQb98A9xpwbKbJXsy7rAzcuwBwTVVkBitr",
  "key44": "wSz7WicLj4SGcxNtDKXEjcxpsP4X2Yro17BM2rj4t9UxqHye5x5Hr6XhJvg3YKsbKqFg7kXs4MHQ2mciR3cLfSN",
  "key45": "55vFyWdViSLKTjv6i59yYaSazdmxMjjAq3Qo8sUc31Gnb8PjeEhBez4TBBCQHRUF8Ba47rdZt9BGTZrKTNoivntg"
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
