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
    "UwUiJQfm5EybrJwqWDG1C4YiUE4NkFKrcYLKcuvm6mStB4N3nwJp1tf7yJM5MDuVpW5mUpD9nmHwhtWZkKhr6Wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ocNufxYqLA2Pen2MrvUWf4ibt7SqdfZbSkDuzrc8qf5AHaW4oVSc9pjcS1KF9gvQ7cx5qcYmzdsiCBhCXcQ39kE",
  "key1": "5swnh7rpfgwSw7jrwPTNc1fqDj5iaRiydk6FZ9EgVQ68mb9oNDXd4zXmzASFT1TLxeivZz5Zo9fab81bwuq3Veym",
  "key2": "4EqKWx3fx5odeLspcC2MD4iNLLk3xoTTCLc9QiQzabnRYr6TVX9VkFzyUUWHqvcEEZtLBWxCuYRR3Ge28QdGbS6Z",
  "key3": "2DZ73NKCj4k1xB1ZTDAm1uJEwdcENtdYhVTdiN2ABV8F7ppu1N6eBERkbyiQM3armbX6382H3u2USe6V7qinccav",
  "key4": "65mW91EFnzpdffJsTcAsA2XQS4A2dVzRJZUQ24E3RS8vagHFFrANNYVr18YG9VZsxuYcwnhpgDwdNDdeuoBxyrAS",
  "key5": "5HErbjWLaZoHx7GUgZj9XAcqsQV8qRdNQXQvfa52U3dVU7A293LN69VW5W4TJkziry3gNodmb1NbdSxaKcimTqiM",
  "key6": "2FBp8x2hRhf5k5Jm35KKhg4Tp1GZB8hARnWnnHuJjHDMqA9ygbbUXyu8eNGtWMEXLdECYiX9Wnz8DrpJQpYcT7PD",
  "key7": "abddt8rqzy8iaKgsZAWEAvDcZy63vemTTrVWzrujBH4728jQaYa5M8i8jWxFreCDuZYTszf6wbZ1ZiMDcUdPdWw",
  "key8": "3niVGaVj2Zn1C7pwAc6TNpUdWMC4ABLocrZZZ6vmVega6XTuABV9DPo5ELR14FiUifFUQaKzxvi44MzHS3WyEFRo",
  "key9": "45R6eNw4GS3x1XHMijCQa7qFWCWLWZUZoPSpi3ZZ8xRStYxZ5sLfA7jTedhCNybqEmNzPxy9wimvYHSkypMFdkW8",
  "key10": "3YHKq9t3bNXSyKD3572HVHJC4a4PvvEUXJYHsJvn7aNTCe2vTDrG1hkU8RPKMNnosbCqX3V5xLz3df5LkGSQJ5W8",
  "key11": "mtYrryNMygEFn3fyeVYiZ3c138QqneZVjm91RrjzvFG3oizxuc8oHWZk3HZ3hofXMaGsdTj4G8C6gCScGfbJqgn",
  "key12": "4WUNwbjw6GeDfo8fD1s7KLU7eKdcLieMq9fUeWQKX7NmLRR2SizkQDPZZkmthB7eeovJ61jTRa88Hk5NRHwLdH4p",
  "key13": "3RdBGHGGVw7tpTg3VDptScz4xiVycHUTwmM4dSCoC9xPpirKyqGCqXDttTajGQRFvHSQL2UEm74wrfJyDZDSGLDR",
  "key14": "5ewWXh8hcLaeobK8E7vgfUv1nVpzCLLxK5TFW4hsdyTK7o1btghveobNKCYDkTe3LUjsEFZLy5GA9Xzii1rB9WAB",
  "key15": "3QnCcPPFGxzzgpU1HLEbJJ4suT4RQkytsf1Jf1dCyjqBQ7avcuwnzZQCW6FLs9HhGHReNGx3ZDDJScpcvxEDvrQf",
  "key16": "ozFx1q9kHFhWPtynw6SzNpPRJgQuwuM8ZeNqPrf5wCqUQhf679BuDszis8jSVtuBfwRUEKwXbpEbYKauGnznazt",
  "key17": "4xUw8Fo4bLfSNAdkrYZ3E6eW4FNsg2tgQ469gf7DjjkFMefnFatbUPABdBhrSBafMeLRSbG96dbAkDvJBgv9SwBM",
  "key18": "3Xm2x7umAA1oGsDgSMTHS7yc6Nidua8Vt5Gu9E2eeumA6EtcomCgcS7Nk42HoFiGn4d2bEV8BzGZjZGVgZ6cesZd",
  "key19": "45gmzXu8BCg4RnQj1wLrgUpzFEAufQ9Z4b5eD1WQwnKrbnxm34YAdraojAegRjRaV2K3jqbfh8JxpCe3RAcKFPPG",
  "key20": "AHL7eowsrbkMXoyXFaBhXkfVWLKnPBkUuKVGajUzzvz5gkxvQPHAZZHEDvysBnMi1MQdnu791Jr8K9FhaoYHZKv",
  "key21": "3wFEoDkPWBVzNjpy4WgmaH5ZEqhhBiqFUSXNcBjepn5dPKbYzzyHDAguSUyWkUZvXrfACMr91PCmMxYs1x5md48o",
  "key22": "5eYBMQuPUcVe4xA57TNhqsYPDvGhWMZmxoWrDKfb4iHQ7nVwL9CivHUqZjRUwdyDjoksw8wEinbgrZph89m1QQ6B",
  "key23": "4cW7xSTKSVAY4DpHB1yUqhm4V9ymVsH75wFmoNAgVtuXQxVfyjLpqS5r7rNpGgyuHxrNKmtx5xGFmDwH2ZCCfFhB",
  "key24": "3eaS669YkEJJwd8ZMmZL7oyi4wdcLpFFV4AVMweZzL11foSMr7TX44oYxs8giuwLSZWtaLTJp9BK1cdp6m7HAUw3",
  "key25": "3fiGBKGa2yj5o2MN3RHLCvTAV1qb7tZPcyXWZPfHiXg4VPJa8qw74maW14FwU4cZLgYUDKT68qGCHcHys7H5JmpJ",
  "key26": "61mqG7smJuf71JVK7zHcCbwr7MDABnJPJfDTqvKb6DEZgovR4b447Zb6L6aYmRTPXV1773fNBYvCe6rifbCGaBkm",
  "key27": "261ER1CQx98xoNUvsdLZH7ib6uXmPuzhsfNNDeNrwckVqnYK7FowXr6Xz7P3JMHjQczMSMqi1mCWyB6SiFkkGZkX",
  "key28": "3oyNYYfnMVunooWk1YaJi3nhePeW24e6fEt8ek5JhYFaEM4dymmoMeiGoHewXfSTJdXQyrP3tPpQWgryiHSnQs45",
  "key29": "AP1UBFzjb1eGdbBzA99tVomtUMa21guwXPNprasJbqymNi7Q1GtAkE3sGbDVdVAku3XLyEEnGjJTg6Ei6bJJsuN",
  "key30": "5a3aByttJFdAUTQFmesSRGqQ3ihY56UqfeW1GKt59Duse6imap6wm7UdMs79cb59d6tE8DxM9aQ7bFdT7d1aW2Z8",
  "key31": "4KiH6E6Y2yT8kq8VX2WMse4Bz2C8ux1vJmt4rf2Lh6xm1P5gSmYenc2Ksne1ZnGFN2dsZpKMAtup1HxLgx5rYUpB",
  "key32": "3A4mUDQkC2xc2Y4xUzXjhKBF6FQPnmQu4Ktjr9oXFPKHSHkFBwwLd312nTSsaoGyPFhZrugonV8bTHseVF85GRww",
  "key33": "4yEnFd6uEGeNFxLqM8HpiRQxxuBnEe73gotnoKDzE8pbm1TCpkrk9oswcA85hNLDTGZqZY39Km3e4i8wLDhJzwVN",
  "key34": "4yCb53gwd4bD4Adi8CPCaCkmDnqs4jsh58gwfYKSVnLgjZdSzptDejF5SjhHYMxgTEWRKdNM8Gbf97qVxhzynxei",
  "key35": "2tgSK63EUvSKPUKdV9SW5G4Fa9ZhF1wcrCYC7CLoNAJGLEroBQt9bXqSpjtkyXnHLAhU7ELkKK81KYi9oceHk6ZL"
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
