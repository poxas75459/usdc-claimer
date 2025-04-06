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
    "qxwXaJoARCevQh6jCVPbaQSSAyxwDrfTPKBsH6pLvZsDMwaAinq95JEGebhQ9TiQx9GSBL2GKjzEidfZddV3Sn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vRo1LZKvEiQavTtqHkUTvwvF5Mx7kuWHyoxnNCpZini4sEmVqbdFedpt9RKwQfkiymPnE5UHtQYr37MR7k9aRMW",
  "key1": "25sXJgJT3pvWP13mCVEAgwanyRL36anbkCFNgputy514mhQgKUgwqJZXDRVYqvvVWi1N1yAJxF6B61dPzZvJNiyd",
  "key2": "3fFJxrs2czdJPA5gStNcX7W34M1NGgGjjCzYecGGFKc3bkCbBZYxQLPfPYLcdU1dkZZzPy6Q2nzF56GKhYWa8nuv",
  "key3": "4d9icztBMMcun99EpMVBFj4Jrfvwfhwr8nzczqXKM9CXWGUFsnrmQzxd9U72nYMgrWHXGYfEVfWVucPCz6VLaQ4q",
  "key4": "3ivP6p31veXuYh3DhA1cRF484MCpEcY8WCGYqsmDicMnAPnAhuTs3aVdkVSprbJdABicdJe69HntMQyf3z3SMAPH",
  "key5": "38sdqzcPnYs9UvjU37uFy1PfZ9b5KXBQ4YJfPeLRexctMvr9CR8BJfP61NM9Ym8w8s84WGk2dzLcaDMGtRe9brwW",
  "key6": "4se9Pbt5yg7hj9jkmgMKwvycRosx28ww9GvxYue9YveWRKf7sge16VWh4e5WxbJvX9J47QxyA8kaBq7YcgVqG4dJ",
  "key7": "4EDgvqnKTPgF2iPUzjo7NzPy41eRekSAer4ecJnqQVkaY8GfcAtWnieLJWZwbiDgfdXrjW8je41qDCWtA88xnYPR",
  "key8": "3p2rgk6ZUQqPiwnun2prLCHTy6f7wtMxzFdB76hLT5TCoHHzXEgBAGHDG8mA3zHsPESv1fQYGmftRsuSgdLAWJDG",
  "key9": "5NYaZQmjm8RXrmUnnqJT5tauckSenEadhWizmxvAQcCd9MHiuThvmHmqfrEwPjGhnS2EKXLCXrFFpQo3kKUxMmbi",
  "key10": "3BAL5mzNFF3jF6PbVQGppQX5NHiQJGXTH3nEB1zjEApkTZeF3z3YbMUTp3sN93fCvuH5gUjfQZfFraVjAB6BTMaT",
  "key11": "2wScTncQSU1fdPc7isthr9hPXZaR8r9Gtp3RQwsgbPVH8ZeMwc3jbLi6PT6GGtfBdZscXBpcmcqNoMeJAaQhovni",
  "key12": "4WU6DCA1GKnzczKLUyFLZaa3SyWERRiC4qGQ1hXCvPz31Ky1kV7AAbB6Mc3QZsjRtdkLVK9TKd2SkuX5JpfrxX2G",
  "key13": "2VrmdXipqXDUun6r16eEJSyJNureqXirHrMWzuiFkasyrfTtnNuxgwVtbhdGum32KyEphXNKcKKNDU6X7QSMdCZA",
  "key14": "SY9NzxTE99a8AM4FrbeU2eZRLrGysspDujfoads9wY8pARw3B4uqsFETDMQmhr3b9R6AWJvUUUMKbi1MNaE7BUV",
  "key15": "5SyAH23Xpjhf5yV4F5zxWivbzaCcqLMw4GecEsUS3jyLMQCnWUFDcBVn4gnZP4WMucVpnjFThrjhAAEnYpT45HJM",
  "key16": "4XzbfkkAQroNpBN2T8Xz4UzmL6ZWdDEyqdMakmUQfeKC14o4B4otrwuHHycjQivxJ8wbmixMpm3q2f6QL7F8hyJr",
  "key17": "2NK5oLgb6dfU9cvqt5EZ4RZaanQz6DNiQzzJaKe9vXREYT1ieCkrGaeQRTpbFZKmefmhkxnNsXNM15L3qTn8NHb7",
  "key18": "38ugSJChmTz9tUx2XgzMjeroR4YFZnNDJBj1JkDw42xfJX7CF2b23fz74j5KJTbBhBUgNsH2opruusLwLYhEuorJ",
  "key19": "mHgMD6dsCpiXBHeWJYHtpRFkBK2pstMMmXBTmcgeYAvzx9AfNWQ42BvawoF2GQGVZi5CMU3ExyLwcGBWuW4S41b",
  "key20": "67HtjGQB6u4EHnSGDAYpJAeynasQFxV3yboRp49LQ3t6MWXyLoCkvNo9Ya1AqpwmLgLinhopyEMjei4mhGFzbWL2",
  "key21": "3XFVbiAkntwyifeTZWehxapVp4yS5xTfWpXKF3ZTFk9kd4iFxPV48ABhtCjkn5zUHDT9FbjfK5eEZQD7mG9DJrHu",
  "key22": "262MhzZ6gHHyxubLd1CpgrQRWXLvb7Tmt4f7wZh9sVWRESYESaY7L2uWu6eEPRap8vmPfV9barvaAWuVgQHfdDpZ",
  "key23": "5gPFniUnZmaU3HrqCDmrWYy4XixCAjNySB69hVHY64kMv6ZttNA9iMvhnDMzZtNKcogwC1XaRjzr6JBBsiu3QSmL",
  "key24": "4BDu2LBgCDvzVvhw768wiAL665yCCn67DqZH2PiWfqmuqhGuYfMxxi1KttDN766f3KJe5xmSU6C3goLfzdJmpEuE",
  "key25": "J4TehhFKDstoBgboNYb1utx5PgX5WnhxF7vd8VMSWs7MRadibsQKRmi1WtvkiPxGBc3hC6mvJaZ4fRWBmaEVbMC",
  "key26": "4BSPMSwZZPnwyxpDYrzQH1Ftkrs6thsXDBaKMLT4gy2C3ye11oPRBc6cxhPKn4Qu7cVsK9mXn8i1FhWngcWKqCJS",
  "key27": "2piVf3AsXHqF2QT6yyFq5JoE5ogiNiaQMukQ7VL42Pmf3H2f5ZV5fEswyCshbrcZtVBV1afpZEuhdeko2bkN3Te9",
  "key28": "4ikHF1tcnDG7w2oiBpQdcEWc1MHvgXUdbC9bbvofhi6z6bH3fWZyrtwPn7R8HgkLX4t8nisLyGv4N8R8msQYzumL",
  "key29": "3TnCNGvbz69VEVFZLpETyvwcyriawEDozXYSZMUFR5jBdxRL3424oMSVfuv6pP8PwU5RywTZ8NDqGXMU3vTQnVYf",
  "key30": "5ixEk93iEXL5TC23PGEUVCWEYbHKSrp2ttUV5pxxHfWADFHjhhcMXFwzkvBDAkvxABdQ8ZdjFZWmYmv3s9abyEBq",
  "key31": "2FXCCJhae8BZi5LmDsZRDbm15SU1zNSESnJz7u1uxxwk7X85WMN2JZ34wrZwVZ9nMH21K8arGBMaPmhvDdf7UiT3",
  "key32": "QecGziMwBJoSLKNv7LpfGroyQtinvBa24ZtMbWwYDgKow2FrsrJtgLRzNya14ngAGpy99xNsVmvkkJvY1jcDYYJ",
  "key33": "2iyqo2yExtu43FXxvhCzBvQ4assvBP6GNMR55PLzRqxTtxiq9w1EzeBbxrX8Nq6sFr347uzSKKNEDZBFg8tc2hk4",
  "key34": "3yhM4ueY3kYY2xkkzRHFxGzZ3wPM55Zu26CyQU8gmJaq6r6KygDeBLMuWf2nGaynmz6PzSt7rb2Vgwr3QxDPuGpq",
  "key35": "3YRVGRwChj6apcNGRnYu7478dvAwtMPwSz8dd6KeymVEtEthmrb8XGaX34mfwFuDgfF7ACiADBPbA57CUSW2tUnd",
  "key36": "5ZJ2T25nafJVXrWYE1WV9pwMvmbS6uVG8HP63kWucB3uRxebFgbkoktYNf7AG3DYP4GKYQaMFvC8a86M1i5qUust",
  "key37": "3V2LYwUZn7QvA5ixtnmV5GyhHsAXNWk69bHZzcHR6XdgBvGEmz3HoDCzweUmEr2g47yRvRDEsHK7jsHoCya16AXE",
  "key38": "V4wLWMtL3z97AB6qRNZv6e94eeQCY1ThUB1fCdb6CnnvGzv6C28hN6AQtPD4J4nXKiQZJP6dacZgEDXdj7oEjcj"
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
