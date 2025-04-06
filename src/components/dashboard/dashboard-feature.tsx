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
    "31zGYm5WzfMxF2jkUvMqZSsQWqPikqJcfGsV5ABowwksf93NmGrnJod7cusV7NoAT8VpmjA2cPvJ18t9pZ5RSrn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FwBxK1qKX1e4JArEsi6kb7aqQRwLPSZPSxsuZjL6fMo9LDk5adk5zjwbz2G58XT1cHAFNHe5fN4vkjHA5a43f3s",
  "key1": "cmBHVEeCeamdFPrQYUonLto4K8BL44LnxwwLqrALph5c2MXy6v2cEDk9EaUsJ5MDbJrkg1QerNN1kx17aYxk61R",
  "key2": "eoMqAC7mFnvBnT7bLNQ1dnynoAVuw5S7CP8xh9EX3a7CYWCkHSSx36BtU3PQhTvdMeiKgxTd7wjQRe5oQrMkR9G",
  "key3": "5Ja4Bum6TCPyu8nS4deNcHjdGHyVfnBZZtwQAo4Dsh6sMnxP7onLKUo8AUMjohS8SAoc1JebGEBffVSNURS4u4ze",
  "key4": "3DTnDAyjVvwNApBaSjjeBQWxmb3zA5BMWZhXcHrmT7jyjji3YUe1j1LK8KEcbP3zRhijjWKdgkhUSaPmkHAhoQJq",
  "key5": "3DV7HCRYbqbSdM3e3Ec424GLsHuAEE8Y4SaYoZA79aa5R7PGJYtPAjfNHpvbE9JEN6qY5AD2rTAMMSoCAVCYMSHG",
  "key6": "PVAQ6Zw4hzD9bfFJMsY8kCcZC6Fi6YrbKbAxsCf6JtErLKw9kDPh9cWoPU9BWkPUhnmHUCjApKmxQi8GA17XFnD",
  "key7": "48S2pwZ512FKGsANBV67mBhaHQPeiQRJN8r7fHbKV7qHYz9q2aG1jzUH92v8jjksKSzm4CViepMbxMw1UVCw1fYt",
  "key8": "2iTcKMMD7A7NXwAmq7AvFVnpz45Q9G1tzeJJbpKzBXdVLB3KUU53THhERBEVjLiQHspszg7Kbk6j4crmCQQHuLMu",
  "key9": "gymEyh1sNpeZgUuk9UdbC2NcgCJ9g7JRStTA1gyFdbMb39CpNB6m5VMxQ4jU1sXYWAt9Rg6zSzeG6tJFqi9cWvd",
  "key10": "2DmvUyKaHKUqcEyh7a37cK33uKdDak6ZGd2fG21Vo3a1TRLKE8dAjuRh6Z8f5k9XxZAVadw52Y953Um4bcnt28H5",
  "key11": "3u5jgqeWRArVhXvvgu78JPu7QQYJz7P1gDQGHUG7jvRV8t2N5ybz9uWkvNpmwrmLJyxpsdz49LsCBrRFecX77tEB",
  "key12": "4ABueqeUQn1bqvtYXxzE2ymYJE9xntmbszhamAz1eiKPe1Q8sDy4TWdQPC5cAhncwbWnCXem2mXefZZVmSH4WNE1",
  "key13": "5K5vW5LYyiJJLBEKiG4GLSzWFYmwc9hWTj2DHgEzm9LNcx5od3Wms7sHFNXuM5uy8pUbwGEkaiwkV9jiiavHV199",
  "key14": "448ZidWuxT9j782RfbJ7QU6MsFoKeB4BRxNY5zo6LR7wCq2QpU5iJLHSdAfvpj2FpuD5qDGGkHPNKh8BzR5S4bWF",
  "key15": "5Z8MVA14gVHXobiLxPgLQcvqZPkhNSCKAWHvUDBo827riJB6XiSLp3Nd6GLeuxM7DMSTt81Rr4niu29YjbEEtkH",
  "key16": "3DXXWWaK7H32z6inr6Ee2k9hcaNqxgyckKwccKv4pQ7dT2TL6KiPK89Z1Zx3PDq7PvcwUCcBkgU7ZwCSW1Yrap6o",
  "key17": "5Z9hkbHzH64r7vJXEesMkxqJkGxSAy2qWaQEm3VbqGiPJvUcD7iTJZEbQyyG3uATpsfshtV8ZNTVyAcYEZqqm68b",
  "key18": "23qCvf47rCfmHa1guyZeCQfM9Bcd6au5bXsUZWMG41CHc1FgEcvF2skCJmgat13q7mndXvW1u2aWqgxekwGj75Po",
  "key19": "4UXbbKB7U5SPcDrH3vuUB9NZXkoEDHTFhr62vVJHs6sVERQTiRfCrEzb8gfHwEANTRr8JP18np3GfMhB11r1Zy3Y",
  "key20": "2L7vFYaGPVq7zEkfvjAGrMo7gUps6co7KriKa85MMheS1EstJ2AJa2VsLeM5fvZaUxdi38YbgT3Z2qBLaS3x1WK5",
  "key21": "4SQKUozqpmtAmo5dG1qg2ux2a9cmgHgLnotuUCqvLhV3YPDwNAtb4MRmZ3ny219PR3VWGmue68EreJU9VpFicS2U",
  "key22": "kJvUF7shD7ifs7Km3uiYTWjswbi9N74fyDZkC7a55PxrvkSmWFgGpM75xukyLYe8aJ8NFzs38Qvy2rnKcKfbUyE",
  "key23": "3uS1Rj95AanXYAiPYsv6ZGUmWQ9QY8p3YEpE4MitxAfZopHdcrnP6UvCdTtHTz98cpSi5CqfRPrhzYs18q8Gtmd8",
  "key24": "4FRf3vR5hZBYf3y4ApmgmHDsmiErgWswXVNofrPAdZjhGpT2T69T3jPD5gnsRxtCHtJRZww6FF6iVqY7UihY2UB7",
  "key25": "5xTNvMdwVnoLxxTbniSu1jVwuia4sJMWLQVEMFXhaefEu2jhEWzQYhn7p8BAyQ2qDDt5f5gt6zoQVNZZR2JDWGR",
  "key26": "45gpjMAf247btsFDZE8toesBcpwtAcGJF49rwvUkwqGhAKUHYv4KnEyFBt1ogbtJC3mHjzjkrXukfduJLK6RA59W",
  "key27": "5bSZbkx42jUxdEnay1xetfnCdmJ8s5TPG1r1LxP41u6kQ6A43ksz8Z6R1qgc92GZNyUKuFAs2BDh1YhkrMTQJP67",
  "key28": "5Aw8HmohEEhtfLcREKXmauCVGiDdt5uBuzL1Peev93ELNhXBCNZ7mqAj5jbs85Nvh2EobiLCA7yiQodmj9gkUv4t",
  "key29": "SMnY2cP9ST6gaBkcXg3AW2rPmdWXXTuJR83VvRygw6tXK4ZfqVHv98JxNusBN9wfMGuBbD3jqALb7h6n294dkG7",
  "key30": "2NeAE6L35msVHxUea9udrmf52xTaVbZLQJdfte1ZfE3JZW5M9mTZ3NKcYwEAyd4Wo7nc5qezCNp2nUd7D43Ch2Qs",
  "key31": "2YD3EP3JtzecJ9X9dfR8Bjpw8Y9C5jnuc2unRuKSFsVw7R36pkS6gUrHXEbxsqZPeUpVHGwwyVuVATUUdvUVNcvF",
  "key32": "5HhgVujxTaZJFmeo5brEGXaYTCJtUVncZQuzQPJ5b6yEYkSXS2rUJhiNM8WaUkKQbCczpJL6fBrThTTwKzyP9NzF",
  "key33": "3jstst2X3vXqp4E9sratc5AkgtoXWMJdgFWAHm3ViycbfsfXEbFbzqxSN76koSsUBVd3zGWiyFZ7dpxgZPqDSnCr",
  "key34": "TMhPb1MvpTNDgXhmH88zdCu6KRFrwqwVSXqCcGmkfybboj1kd2dgBPAvd86ZpQdFaHmdQUj4Gvb96QZNX4knS5Q",
  "key35": "4nMrkgzwmCF1pTpVyuWaK524Wpxw2eaf9ToBQdBoiHBofvVV7dBWWQw8bbzpAFVEiyQYzYHhXXU1n2kt8UZqVEn1"
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
