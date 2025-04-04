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
    "2hQnb8trV6jNGRxqPYNxQx7h8KURSuKxEPhWTtNefnYzHxgmSuYqbo5W1GKdFuNM5K3hVpTDC6yU5a7vkgfD7bez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a8gKNYaV4TEmni8fUPrXVeaXiw88cqEqA3tVKqtCDy8yp3oDZfNC8HyThtbNUZfiJqAfcKJuLc1xNnjauxnHT4t",
  "key1": "4M9GxRNq2NYqH53ughEA7gVaAbXxLvixqmPRezrSjLFaVpnyf9nXkSGgkPdZEjnQgjv4iey3FDvUp42DbKRCT4Xg",
  "key2": "2XJfexY2PkNDWysjDBcAT5Uvn2cdeRgxA6bNYqiTNCG3Vg2dUx5uYoeMVVAZ9yAK5Aiv3bzyJkRN23MqitGPzdpg",
  "key3": "5AntKFQAKQJP3p6eS54HmNMgenDpdQoKhC1n6UgeYqP3we8kCn3N92zsozybvCMBRBHFBoGA7irZTBAyUDk6Cfo",
  "key4": "3qF1QWwoWo7fE1UcJPDUVyNaSfck2nzygnnFqSK2HnSvYnBgLwBMuRVgj6maoAuAw9VTo3PLg2LyfHa1pjdvqo4W",
  "key5": "5fe9CaYak5mbBdksfdQRtzGK3tKJrpLMtMNvUfghP5NSuzgtShAFaXLUuwXbBPVaSwcLjMqmsQavypfT84NgQGaf",
  "key6": "3tprd1x7vRPYSS6WmxEn2bog9gX8QrCa91XgHwmoGgBEVxPh2ZVDDTaLB5Ri2dsaufpA8NkyDS5N2Cur7HfHE31n",
  "key7": "3oXzH4irfL6ERE6NKReEr3uGaD46Mf3uQ3cbfT8c9Ev8PJ6EdphNFyN6fPpGaikJJZbLfHZbn2og7yM8T1grLrcp",
  "key8": "4sNfBV4zuMg85GStbP769ng61j31MMTFCXVYZ85dhLfYzQzsUnbR3J8PMygrXSUk2obBC2S8xitgEw1s3ymPRLWP",
  "key9": "3u4xx1gy7s6qQYFyJggvnAjCHBAabDhvSWRhjpus4WfB25jisRdXRgCjSdGU4bphykg6WGjKqXapt8PwHHSUBbt6",
  "key10": "5u4i7CtUC4pkJreMpmhyL8gq59TDgMbZVnSA5QADkGoe88dFvScnC172n8EWzJFN11Ee3ocBkp6z7aRS7mYBR94r",
  "key11": "jGCzXi5CZ1AQmBrvReyvK2oT8L5xXcJSaU1T581w3hX2HJSDAzCv1aUAHzQUruGRbZec5jm6VN4u2aVamFqCZPj",
  "key12": "3LwzqhQkBQJ5kMFau71be6dV1ijf52cmG3a3gk7ySxqBmrwwG6JpQxL9w1EWJrSvsdtnvVbazFDJWeuQqComHHaY",
  "key13": "4nt5XStgb9RKkeiJsikDv97bw9FRMTxScVsC3i27GNLXLfC8AUHEXLGGPWbcB3uaSVVx4NGyUiJXpKhWEJ4Zrkqx",
  "key14": "4tojPzzMzKwPnVeXzaSPVo4Kt6DAQy7rCj2CVn7D4mUwsFT7Qs1bgkCWAqcbpJknKSsZSJwmYA68LQZ8ypxx4Whb",
  "key15": "krzGCHMhKQain7apx9WcUUWBKHkky3rZLAHTgDUYUPNik9SdUrxjURHzAF97SfCLAtG3oD94zeKjsfdxCWH3x2Y",
  "key16": "2iM7EYWbABzAbKkhM8GVpTRkRMEVAJpLiFe9Q5xddWBgKW9FY4yaWsikUaEhbJeVZu8a7TFyFbzyKvswvVA2U314",
  "key17": "YoCvKUhTwcpArzWxc17AAktEwN2prMHBmhbThYb4rJtdJHhGCFLZ2SERJjjuRsGsTaVHTTzpcsyRMJJag51U8g4",
  "key18": "3u9J1xqyKv7S5N6ZYmz84r18yxCQkXKenQ8VSJWLFhpy2RagE4zdNrdAsYVJ94T4Awydmd8x71YTKuEKMT1duX6h",
  "key19": "5iqxaUakr2iQRvA3TuBxisL2NXD98dHNNNtWXtBwFGYMuwokeJ8DnpNefaQdYNHAqtyFMFzmcxjMnVu5g5HaKq35",
  "key20": "2PkdMdrtMaDi7HsweKM4XiaMV7MjEiXzSKua3brsN7bRjPZAfwjtEEVWyQ2eWiCQnFybKArWDw4kww73t8noJebf",
  "key21": "39QPTxTW3NfBDxwacxd2o6ru2PnMMbj6uGnyXnSeYtg3ooFvr1ppXYfTBq6xXUo5j8tMLXg26fQyQHAAVNP6uKaM",
  "key22": "5ShXazhkS6HMMNuuDoLCAvMrFqcB3dsRXoXKfkm1VNcopNAz8kAHrWxbAXhmcnnHeKkDR4JuMdbfYJJBZucLgoY1",
  "key23": "Lvh7eDjDJsdP9QcWV8X8YrYMuuExTnYUR4yYhSyGW8UFiQLRMp5CuUEv1FeT13jYEmx4Zazd4wqTsuuvu9idvws",
  "key24": "3WuFKvJLe5ro6mQZrvySRrjijg3ATN36iqoT59ptYGhJWM5JzSdbzTdvXu8bvJhtSpzZMox3yPVERnguaZZGrS3A",
  "key25": "wUt2HYvtbFELCmjgs4LF6Cp9w8EzJL7ZTFbm14pnRHMkBtVZcMrRphtk1sQoiCrMaBSzHsPh5xTaC8kXQQmcGZq",
  "key26": "2gsKzXmoYPSQwR9hXryE38Mt8ryHx2FTUoR4SRtTDDtzhfgGDBuc1DjMkgxSrSKc8dCJtmEt5AfuBkDMsCvTetac",
  "key27": "2SJxprsM1PSR2Lrhe7wTrsnmJ3mN9uaGR9H53tJ2C2hMNtoGvopHe8pQ7eke8AXweNGGhstpYUXcw1gZknoLiWHH",
  "key28": "44kzUUftG27k33oukZGS21fFsDdwVzZ5AhBaCdWgv35HJZrPpMf2tr9qe99nxzivTxxkSbbhUbYbAqaHouneEb4z",
  "key29": "56vgkdk16T3NrnCC8XdKxDZmPZDChD5nDQGAUiU1Vnut8ZnvBVkNwP6GnWuiDWTZeQry6JbiUpk2e9Xd4kH8b1aC",
  "key30": "5PU2pPzjdCW4xZxwnVcEfVGbtNzLvDmU34wz2GKh8ViWwEDVhv6tHodyU3SHaVoN445qQbJMEqpamVQA7NdVdKT8"
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
