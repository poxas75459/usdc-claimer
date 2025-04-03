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
    "2bHn9DcKTE6XjXgkwkFfz7q4csUqfNHPU5rz2DohWyN9CpZWDqcxHE9ifrrhK39q5nSFbdcYNFtFRWrBDGLapmXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rLfxXSs88ZGZy5qyW6U5VG6UgvdftHwPCgBwXBnFaHs9EyaVTgR9Nz1bKUVq4FD2HpJssXFsgPs16SXfa1jH1C5",
  "key1": "nSxXBjiegkifDQMB5LiXPw3dZQqMTimvUhzB6NygAh2wvhfp7dqPQFoGjUFisRcWz1XS8qufUrgbzDuZ2Q8UKoe",
  "key2": "4MeHjqTXhm8No694FsJ1qrHxnjx8kr3zJEhdRqnL7ypHqmPuJEesbxEnDoVWURav1xrykD2fQcmzMno85sjnMs4m",
  "key3": "h6qcjGzQ8Tp6S6SG9K9mVAvR8xxb9YFpMBd6P7kyo2LCQhCdD4UoVKjuZduwpjqVAvSoau7RppEP1BJ1TDj5m5M",
  "key4": "4NBPVCtnbVfo8f71Mj3H9NQQf2Kw7Qurw1ZEXqEMUC44qvaiQ9o3PrSLNfpSvSwk2F3PFgkvryyoLUASmRgcTCC1",
  "key5": "4GCqU7wA8TNLoDzoUA3zbK6hBwp12uxiiU971rZupa77Mgvn72Fnzgq94heVHnU3pkgyFEX9hTX6aucGVmhJADtV",
  "key6": "5z6GcHcdbr8Y6m8au5PwmudLWCkyaekZrEGVi2bt4Z7PbZaS43LzWrGn7YBv9xAv3UnQTwQdq2knrh1UJtvYfi7b",
  "key7": "61KNNUpNim4DQk39hGjKsfC2g9MaB2Kp3oUh1rHxXri1yi7XqjRDqEtqALjnworNDso6geLkhKxL7xHwwCShT99y",
  "key8": "2woktRdrtCK8sfKw36k4XzFDEkimTWd5dBhzdZ39tDubC6i6wSVB6MCXNnL3MBtNnN7RJHfZVwnyYPUnveQrgBrr",
  "key9": "2qUamfkpBDPsQbhHkA3yVotxgq4C6TP71uMgR7hwvf78y1JNwbmAkNhhoySKTxRG5mCpSGynoHaRkDrx4UmWMxVC",
  "key10": "2pcSou2tAvSUYF4TmjyVF8N81Njebp9NerHBQuCLMjbHkSR4cBU4K8NYzMZECgHmxPnuERzqxqU1EPz39wZH2wkw",
  "key11": "4TpRpNrM6wu1AHcdnU2aeazZjHVP4ezTCC756QDEA8AYEJxmo2hpiJgGw5asirUzeU8S7jn2HmEH439FdvdwBgG9",
  "key12": "2NtA5YNBFTEZX1vaa4qTnT2gpXZHJLE4CaZnHkqSzCzZ9joSrs7vCVkXot6wPNFY3FjsVPDYr1krSehiz2FmnqRm",
  "key13": "4DGNpcx7eyLSL615uQ6LWLaYvHvRjVSMWgyNyM4wu4V3ombr5VQPdQiMZXMsnjmSPx2QHTheDkU4kMmf9rJQQxow",
  "key14": "2PAmTZFTTaRToDfbAoCBqGGbPEm2v95Ky9t6WB2K1VdRUioYDBxqW5aNPr5rphuqNcojGrniT6j4uhKxLB5KPDDS",
  "key15": "hffYBj7mUUkTFRfXJUFfGU2oeZ7zKYzhXoztFUYExptmdybDmGKA9cttRxSMV3pS16No8d8p9JqWHqPMJ3MSBGq",
  "key16": "4waPEiqzAhHLf8nE6Lfq7rCFEPS1yikaaEcXKyQqSPMBQhdLzKdaLHMYGUm9gKAyxTRS1YK8JGfPG76GDx6LFWHo",
  "key17": "5KWetRrGbwgEo9Bkbx46Us11iMio9K6K6sNemyBTRjyaUvAgxPddpCxcWKjt38KUdBFJazn7D8AJPc8RhvNYrZBK",
  "key18": "2CmhbDNz1DESozDyNj6p3g21pJjiSTvsrJchP4CrmL1eefZoMfjJmyYKRVwZYP8R6G29PFTZFcozYcS63iiJucyF",
  "key19": "5hcFr8wAsjavxQBpiLWDBnTjn3vHa5wzy7zA4wwrnB8gLSuL3Sk8t4ym47qfR8HZLGpeiV5Avd4ZzXfLbGZxsuS3",
  "key20": "65ucJ9ucnXQ2Cg3N7TwpUak36zvSNB6HMhV6wykAANhjSjTsoAKNahxJWECzxyDYgrVR87ikuS2oU4zA98ND6nWP",
  "key21": "58JQaDV3cmFty6tWjDEcgzDomUZ5iKdLjixxdvt6Q1GXkXGPWgv1X7sYUqBJAEHZ65yhuUA687RYZBD2KxgsPF29",
  "key22": "5pwcuFM9TJyWE1JVMbgWBrEBuDTAP59bhofXjWrTiaaBhT6e91E3WVPD1gRGntXJ8PbY76Re1a2sRTk4hggp1112",
  "key23": "2URdSTKHkVMXDtDfmNNpzSbqPR7EKud5cyBAZyKoSFsgR995Jv1dzAgexcnVYTBKL41kQGsUvi4ityDpbm8uYNVi",
  "key24": "3FBHfYc2fi9qPLEGKvAAw9WPf9sKz76LW7aZALxBF9aHMYuMxLPcmWzRtBbmi3sGnSUPnnFRTTqrpEppinvsm9NV",
  "key25": "4Y8XjxUjsMC1Nz797EPmpbetQBoLyrdcBUguAVq2Ytxc3mwYacnEGWtZ4GBVvuetk4E1fwgquzr9GGRqgop94Gr5",
  "key26": "4DAWa8zHpTGT5YYveUcxvg3bnJUj3NUfycJ7iw5sHQ7LFeBC9wWMVcWTW8PNJaNPt2vYzTQnAbEs7AnzgWTUYHaQ",
  "key27": "4sH9Z7HBFkeUDLwHj29AcrkES63Ep1ssaF91cD1xk2bpnSJ35za19MQaCNe1yTBVfvQXHCnP9UTAYVzBMCF5vnnR",
  "key28": "2y6jCGQxNXC2tcGiGLse57tERiE4JFxemLnmog6c5Ab8HHvdHWwXdwG1uXnRk1zaj1NRmgi63pD4KFxtBzkRRr44",
  "key29": "3zVSgmaUyHmQRFaPQQy5pEcS3MCcPa8kNCCmQuaMVYbsyJ1D95GocKuRwawxc3dZpcc4imWocHKyqieA8T3yYpL3",
  "key30": "3YkcY7RWWpy7Sh3cMRdNXDLMCSrikWrxN9RrRsoNQTjeGHH29XssN6mxAmdbXv4bz2aBrGBtLXtPEFhsGSQMCGxM",
  "key31": "3dPMpnCVkPb6JLGSkCYDgWbRxdg19JrKCJ9GYaknAjcuYuf3a5VKQGWJJdcqfcCFjJU1B438K6F42vYA8jXyLDP9",
  "key32": "4RQxeNFyRMnq7a6SD4ZW1dLbAjyEiQt67pU7deSPqZVZqEQW97YZDeVioTUY2NLnW8DSZ45ggCz63MUZ3QLWeumM",
  "key33": "3Qw9NvyJMmjkvexE9p1DwXvDC3KDVuJiQNiL1c8MF5jxWeHJMNR99vmQp19fx54eCtESW8QFvE3cncdebvtYz5J5"
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
