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
    "4iY7pQENTXKVK7Kydv1WmX3hTcweU4xFzeU2nPvVikXUqtSDkG2A3PmBSicqyNs13vEzJP26XZhBpqKCf7DqVHpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FZddhZvoDr8tG8kdWAHLS8BWXuY17zAsMCAPae6Mz2MLac3Jj4PKiLTVF4yLNjqoucca3nMYc36i57eaaUDijAy",
  "key1": "YiE539DQwC6J2xqxBQebp15QpwjeyLyzHTFAfapREZHKtmDKbcLcmXqCu7m2tLkwUHG1TazWxpcFi9SrFaHMNLU",
  "key2": "1esN7Y274sG6ok2TBvkP4FZJ2K21qzm9vn5cJfcnNcPJpSGmr3gfDMJozMqmax5bxTJjrHz2g1ATse73YqScqvo",
  "key3": "317g1zGf5FFQH4y2kejMXsv8LX51hW35g4UGQwZYH5zxjwedWF2r1BGiM1S2XR6r6uB64AMuraHDPDEjNvtgKNrA",
  "key4": "5bBVeRgMGu49P6GVnUWBiADBYbXv6G4NpVVBc9Sn4NBEsMdp9atCCmPwqN4FtTNmrmUVMnmJ5miFneVJMhmwnjRM",
  "key5": "MS5uLZuZbwHixj38vrxHCZnPiG6LV1TsBV2cqy5PL1jPgkinfFw1zrxvc6xAAtgmtgGbxaToKYonVdvWzdiqXfH",
  "key6": "4gkvHwX9MBMkdR2S3MGQa5DYV4HKPKaXvauMHeXCPXG5VoADUYinMhj5p36hUGLksh74bWHKPMBGoPn7VegdMvx8",
  "key7": "647G5BjCb3KrGuH8CStbVGGNdVxkscFf1SNCNtpM2TWSWNLMSbuQ3TTG7pcqhnaqiGpyCdP6nmXcR2FiAte1AvtY",
  "key8": "5iiUJfFPD5eUQubJ7Xp3DbdFuzZNCHgVeEgwgWh1sryfcyvpUm2UkgqVoYMfEUBkkaNKBc5vygkZMs4biPLN6bLz",
  "key9": "2Agq1yLQuZ4CH1eUjjxA7jzZYvvDy4NupqdPsVaEbiLgwGGsdCzQJc2ZYP5EdPctBhfbXJabbuPfQjDageBNXHhs",
  "key10": "4Vpv689bv58hfcWskRzko5XbJNh4yYKRF7dicYyWRHSV9kjwSG4B9ssePdpztanpeghhkgZdLVNiUonfHgZQMeLG",
  "key11": "4FRyyS2pkttJTv9QsjTC1AWTsSudVbKGXHCSXTt15FZARV4ShVWHMrcLjfAfnjahsBgNuTXoStahgetJ2khf2nEL",
  "key12": "9oQ3k2KMqy7zi8AKy23qDcAkdxXVrwyfViykropFH38Kg1vQifpVNhQSHpdnHVhzvWod7K8LARLDTpUuiXitonM",
  "key13": "5hz4qzWNLnzNGDcJUhkbnzFwP9pCZAS8mhtPrj6XsTYDHBzYDdriP5eqHWYLwjjEqYxiKu6obVBrhDWoC8zhCAXK",
  "key14": "46zTYJ8GXFL3AKdSEPBrjzDYjmM4A6DgoFy6v1muXk4vi4EFnFsaXfp73cia9U1bfbVEBbR8FrdXnXg3LwqDsxoE",
  "key15": "4jtnU64rW1dXuJq9pFcL1EU4Xi77aFbsxRzERpddTBroSwnkDy6MbKSNw7VjNdehtkxz9sLbVEcZH5EVxGgpjLfY",
  "key16": "3mai6aq2zNbufQq1sveqiVof6MSSGLvaV2N5AvoGj9nPxHrhW8kP2DnpH7YLADDpAx3kN1k7cZoUvQszj5bybbwa",
  "key17": "637eZ9Ue2D2K9rVySvsuGZJKGHiyF8xATmqSixqQVpT1q9tTCVXGkoyAFX8f8kjWc1h5qZTVeu1wki7vKXQnzw1z",
  "key18": "2uQ5CvZFf6K3nPMbvsET6Skj1at5mGcLnLR129FbBrxtfHJdobJvdHcnWanvDYvuVjQKYTkDt2eKGDYfREuA9Lc",
  "key19": "JvuC2kEmW2CFKAdEQSkTN6MocHRLStGCHF9jN7mh5SEasSBLyr4XngGL9PAt5GfLi78XmUzJt8qe9ip46ctya7u",
  "key20": "1psvJKDjHcjKADoCrDeYP4YeQveTHuPwm51mJnLjvhXHrZXnFLdRJtNNDqMbz9ndey2yE1e9qSnexZfwLB1EaMG",
  "key21": "3DrRB7sLfNhvbA94PHRPAqPb32LGmsADb1V2ra1WJbm3wyk7Zf77ZvJxe1yvsPZ9qvbCfTCEBcfe9pBmXNH4qy7w",
  "key22": "24R8UEjP7YSL6Q6yNfzUyVZEFS35huo47kmJVo9UL9NUqpZToSWGjVfoQUFDUZakegaUp7aeCZFyyrp77RQfWXup",
  "key23": "3u4JeKogo1w6dvVm5dXfoSfw6netEseZbu4ce56AVVEhugZLv73axdcHGsmcux9xaainNuHhNeC62WkG4pJU1xm7",
  "key24": "3MNYJjoQkbMWTUrTWktQnsFdUuD16jABAzCu6TgLRn2zVm9NJLU3TnUdHaEkvoaviaCfDw4B7tK2EQQzuyjsCH5V"
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
