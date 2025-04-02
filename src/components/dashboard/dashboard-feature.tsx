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
    "2KXN35WXBAjVFPLTk5frrgmzKhrU7FZGrbGkCEoSrR6rPMAJoTYBMV62pouWyJMDjed84dFK5GNWWva19wNFEm4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q5vagGa9m4Gjymqw2uQ517VTp1XJjNNnWz9Ng7QHiN9cbkq6SFPdYgkNa8J81PR4CT9k5TqVG9Wr3rh393tHSbZ",
  "key1": "2yEBcNaouAREiE3o9bVd5NQuafEqXaP6Mz7H6f2UPGJx3fKTqoKiJZSw5bQ9vdS9mRefbsNMt1Vy3ftbkpaMXm8q",
  "key2": "4pYR8SjmSa4WVnNHj2m6FNAPCdVkfRerQgWB9jTYEGMYH46sdPG7dDdqE2eK2KbqgMi4o8y4dcnqjJJkaemCbiwN",
  "key3": "3wxMs91Be2srvbQjsd7Qe6o4fnWrFN6MigrdGk4tW5PZScr5NRqjeX4hQ5YcBVjb6pLhfjrVKmzR6WYusMhFZ7KL",
  "key4": "8mT8d2kSrGLx18xfjyu6e8tNyT2k1nWceSR6ozFg35Xsv4keyL58RJH37srSixaMmirgxDFLymTmvfr4269defZ",
  "key5": "3ZLxdKfs8FCPoX245PaiY19H4Nkw7Kkd3nkz91cxwvdmzySQ67dG1Bf97aU4WUAJerkqLgJJLKAnRjy8qR2Sciq",
  "key6": "ZRRtkVz3Nptv1Jfr1tnydZKVb22FtWiqgWdEQn1cRpcbF8sjy1jks73CD5WQMte3Fz9NZXsVefLytqwD8G12oBM",
  "key7": "5zqz4WjDZSDpgJfqaA5LmCtUBTyxGoGP9Nm6MnLsppCDStsRYHwLYMLuzUy9Li3JstrURZ1maQ3RWj3bwiSHW9jG",
  "key8": "4Ma4kaocJVQjkkpXPYmkSsfpnfzL5fVC2LBTai1NE8UcsQqWxsgq6JUwgvPQRtAjGSKsEk4gUbSy5VuVA7ot7zhS",
  "key9": "5aDCVAFGjRkMsA8E43x7SU2Kbm2a1rY5ym6bsRsgWnGmyZZ9hQ5etq4YwAWUuhTniCU8s5zvBQKt5rB74QroWKXR",
  "key10": "4WxvjVJfme4Shk93ufnswK6GxNSkESxGQgv2gYD5aAQUW1wbo2eiwFeo8CDLQgDT34wuNa1g53S87SebjJXqWtXH",
  "key11": "FeahWQMwc8ndFzhLsDnnSkdCYd6LpGYRUHMk6w8qcr8gNbH1Kn4msQNtbPZdGRyJM6ckqsyVjeaLcyBL74Uv3aA",
  "key12": "5eQFQihiaZX6Mzf3d9BDyt4pG3MAvyNWPodX6UdQqitX7EDjnAszL7eFTJ7bsMQyVDfFmnLKwsQs61TsuJHeusgh",
  "key13": "4hKNnNP8ijnTZKsMXdvFGSbsMB6Z6smMm6XxFGDYzjEzijiTHab44raDVRCiUMfsjEFczPG1WgfDuJrPgTvLn2pG",
  "key14": "4DDcJPWTxQB1w81GbswYdD2GX4yxd6mCb1TvJrFGQTxWWAyiAPfY6GYtiq9PkyCbtU9SiV43uqYUe7FA7AajeHfQ",
  "key15": "562FQz8tPZccSJ2w5gEQcCWzA6x7YcpZJ62NZ1SuDu3NvbACyx36CNE14KX1JUWhjRZnKazKuW1EpizX6ozzz8UE",
  "key16": "36qe8veARVXZ6RErDGhMhc2twkAQ5Wh2sjRmFmS2KCc8KfpGWXEKtegxF4GRmtT3reDNnWa3eBgGW5FnKpc4VDwD",
  "key17": "2GFYzDoWioXN9H9DSe7C3X4kLfeZJkQjZnCxiDqti9xTKFAag2ZEdwjHj27FTAVQDV6w3x4mHj5gtb9pe9S9D6aU",
  "key18": "YKuucpgYSmMpXwVjt8RRs8GRXuYgVK95bA3f1DD1psARzJfYb32bhKQj2o9NJsAj7JYnakNPG4DhsuAiisZF1Pf",
  "key19": "s5bdpiAn51qj2gAukMs1GFeGN9RatLJn6Zah9d35FnY5KaR6JwoAoGV8efixiLwpVkQ86Jn7yRKEjKrpVTck2Yf",
  "key20": "5XcwobLUz8TpKxMCCxcXRnad4u3qrWfiwxvFYSGwVnF3PYhD748tvd8xb5NaWxnnkZSZm7G8f55X9Km1EgZfSCR4",
  "key21": "28gNF112C7rTCWju9HqUPJgKVRpT8cHmyE1x2e9XPvXLgQod3NDiytC7Suy2GDEA3rGSy6GBP4AGcCLjeotTX65b",
  "key22": "2Byb93RoXSGxiMykcfp4TrXMtL9mygSUB35ebZf6PbkKNhoCHo6DjhWnHorJ9AEuMiwc3yHBzTCFD22iwJ9i3Bxt",
  "key23": "3PkfUabiwGmeyDZmu9xYCmRB3oeedh3LBZjbDFW4LcSG2vT4x2g9GKvhdQyHjSdE5aQ7PhSs4imNQvRpctr3cz7f",
  "key24": "4crrKFQNDVXDeetG1bdazyhtGRdemwvTEA745bn67seH4s7o2PF6vxSEh77RHsEo1hjL7X8zFb6BktXVMDpYA8en",
  "key25": "5i6KvEGW6UxLLkLcZeNFbfo6doyJuVqXXJBuE8jmvwtKvLDT6ArA4JqGwPVEpaUUKcXcNyzAjm4iUQ5stDoTUipx",
  "key26": "5CSrN8omJMtMJgeP5ixYSmPDP15Tx3S4zVP8PK7xwjrGvWyxrYVeKLQk7X3N6tvHA6YqcSZUPFvvk4L6fLHpqVNE",
  "key27": "2DSgACsqz2ACkggjf7DPzFR9VZCqpBNo81y4FdbBGCSVBiG3V82uoqDWGbXy44bboKpdEivAYQv4bXwBKMK8rbuF",
  "key28": "tHpqsdw81EwRkXGKcmdd3KgEf1MGrkx6Tq8VNXFT1woeiscKfpXFEAcrmR1tch9brkWqmVEb67LSr7pTnSKnqpg",
  "key29": "328AZHWhNWo8SBo5udZUScdGMPKTFa5FcWCqguDehSU4CVVZDC8Nz3B28cGeC2RaSG3aD5zboT3eu3wHne8pMiDA",
  "key30": "29mTRx2SeMrr3ZBVA38UQcbUHhEgj7BqW3RDh5rx5U3rnNFXg4qxEQuqisu34ynVQXxoJUinmhhvyP5aMgwCJ92D",
  "key31": "5d5mLjjuVWupBGLGAF6uRTerDfNwjeUBA84dLTXukqpVwnSoPCkqWbMcj6KWBPBgKMd9Wuo9Bw16TD3a9WNS5TUE",
  "key32": "2n9YUk78a9yY87W4emTp9Z9jTi6qezJYcUHu1QjPvzroaNbfdhgu9qaKvV1Gvi3JPtLo4rknvmLPZgiPrM5oxkCU",
  "key33": "5o8LtGTbqpzufWU8LsJ7PbVsVJVifSvWqovX285WDdGmnwTgU8xzipXpN9QAYXZssZ4qJvgjJc3FmpgDPCSFG73c",
  "key34": "4MEHKuQzuEzU5PxgVkAEm9QhJd1R1D9yQUdMazhsFTAmvfRAbAjkbEE1c8NGtJTaXd2Z8UWdYidMDNxnMwCpS11f",
  "key35": "oHU5nMqCV24XEE18zATxGzPxWwMttunWLpQhEZ58wSopXFR6Tw6VQBCxwi2FP3wJHtohiUL4UBKQJL8idarQ4sQ",
  "key36": "4YVXh2pA6ftonDqWdA6UZeH4hpTWsk2rf6wkyNtJRHUJmnDPsaNve5BEfvTWB1cs515fmEp4XLpV56maqTEW2G4t",
  "key37": "4n7uToidf2PmWdv47SM7xG4rsSnqBUacnCFtymXAM8uBUmphwCyPSgCwuoT4jLBgKkHoEMM6tFhwB4UKHfFSw1sy",
  "key38": "4YyZWfpKFr1R4LBvEgMV5jwRGgc9VF49pQHTgFuKPAttE5w7iDTjGuWZU92xbeies3THvxeaKiHLgEfWjdhtTotW",
  "key39": "UQ467Wykms5nzMWoSPsoWhG8MTsdF7pLUTNJpWeJ5XBXjMa1jyMd6F3MxjPrR7yJ8CWoQ5riHxdkp2W2kbLD81z",
  "key40": "4zuizeTghWiHqjjBnnPt9f6HKY8CSoA2g9PRJydBJ6N4Z2EhJGwBcdxrhD7EXedhFjyUNwHXRfVNH1VEDMBx4895",
  "key41": "4LP2QhKhBVtqgN5msF3Eu3GMdJ5E3Uog4UykdH7FBBAysqLhpb1AVCPeUoonuQJuyACELnE7va6UYrxi7ydvECws",
  "key42": "5qY6ADLDBFMkbDV5yDF4U48vW5A8k8CFZe4Z2MooTLmj1NKByT1n7mKXwATDBofpb1Du8PbzeY1ntf1pLXe8E12g",
  "key43": "2sHSXjDeanYjG2BokPxVLmKX2bRxMa3EZEUzahV8ibRHT6PHXXo474hVASaRHF4wSCYKf5MJTwPJrNdsydwKToUr"
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
