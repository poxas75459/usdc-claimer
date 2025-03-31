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
    "5sJtcK4DFpspGAL7FpLvN8tAXZRj18zqNKepbAmK52pk4quGBeTwmqjVe5VgqVcE73uTdRMpXsRX93ipa6tHAFQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jMWGkfMpK3rq584cigfRqX7e6z79QRmkC3kcupCoBGhqtNJeq3t1u3JqwyKJUkvF8orZyUwEgqaZBaH13GD6gKY",
  "key1": "39xNCSsJnYY7imt9RecvB4Mv2HfEeRYfoaXbukL4mwGy94Gw12KsfVCFToSc6DvbU7uxLMRz4nLEKygfyMD69fjD",
  "key2": "4SdQwHuhsB98z8DJowRhRu1ctw2fde96PWuHaB1nmR6DeFyPps1BbN81ZaztyTJUPfjxnGLnBbsoLQGwEzqFmEmn",
  "key3": "4Ckz5LbUKPtMyiASuJvKvZXcWmPVircDYSpY2CmmAVaYjjYzoiFcTJqUq3N4BUjGPWG5cf6VCT3HJWNZruA4Mtpe",
  "key4": "5y9xoBu6Z7JUtwLaf2ncJTokasb22BhgNjrqU9UPf4omEKY8jJRuU8UVYfab7igmxW4cWfQpS271hqvMcMrGmJ3P",
  "key5": "dWY7TCcrV7xDhrBh67X43HAGVXANZBPozff17n5BAA4onaJAnVhaEdBT9hB3MFrSD7b1Uwe8SDkNdpZHkZKZv3z",
  "key6": "5qeF9rjwGPZLkx7rBL38oERQUn3xCJ2WndihGL3HhFT5MrcnGNh8wuvJee99tdNgGzhtTWZLgQyF4WpxAwsg8JEz",
  "key7": "dSWQczbywT1MHnkjEtq1Ak4qKDshkMbH9TB4QMbUN8x6M5maGQ9B6ADE9VPBDZ2w6zvHDU9GnkHnKQ5dQ7pWNbL",
  "key8": "5bRKp7iww9zDKuG15ogrbaDi2WLAXVFfELt9WHEGwcAM1bbocsuT5R4tiyHTNCa9dNiQ9JL6AMJgFuQmhSqCR8gB",
  "key9": "66q8gpgwdAUD3t6nTfNiqREEXRtqiYbS6mzUWvjY5YFPp6ernMcjtxsUdk6jMkXzpqk6UF1jtzYNgp5urFBkGw2k",
  "key10": "5247a4WFUD6Lhi93dhrFLQMR6vmb8o4kgKdw4bmdvuyHPWkJefwas6QR1wcGZHNBe1xKDxwSuc2nnNwg4hhdHc3G",
  "key11": "2smg1eUtz7qMF94QSMdte2wXPmPCE9aZqmc4FMTrDLZhUdYr861RJHS56MexgWHJSm5SJi1MUVa28L9FPu6Wvmn5",
  "key12": "3xnUprQ3ZEgvDS1HJGNNPqW2D9Hni8BR87yWtpzShH33hnjoq3ge9uX2xap8iUsGiQmfpVDDqoj7zYm5zyz5yShK",
  "key13": "5SkAJ6AnEk4aqWN1ScQ7gvXNxSYSdav8VixzDiLXCYPEwmoS1XKxp6r6J7n6bECutX6s3jAMyLt18RxknGbZgT66",
  "key14": "vdN6mvXoqeoSaTkQAKTNJbqeEyZ6YhWCZcGJDEwGvrm6YP3x1v1afzvWHrikKZz6H1SULGGKLsQL4QghnnnFhhG",
  "key15": "5NzRzJKUFgwyzz9riTRhjvvjef3Gf7PUinhtQP6k4P2XL4fJnrqCJJ4w1jbJ3s3ehdu1GiBEpnBZar4UuN2H63KF",
  "key16": "B6pUU6mTSN67j4zHNmCdM3edbN99iurCvRRnoVJyEvLMAbZVL1QzDn7JhaugRgo8UJyxpd43Kj8w5LUhdgo1j9y",
  "key17": "2gBPu9gBJXFz38Nw6Bn51K24e3iX66Ex9tBPHsTmDJ5Kf28krRenTVNj6UoBDQc1LHWVDsvcVr7VPBcvfKCQBmUv",
  "key18": "2csycJ29z6vmXRjoJoSfvX6nCg22ABKhLB6kANXJB4uCGMPj6NcKMHYknwuuK7bJVCBCjjDxsZSX8nSJHCZhvdxr",
  "key19": "zhR693PGxcwQb6ZbdeB1uAoM3hfYdjM7pJppf2LDAAzKehkbBC19eEMaDCMa9ANJnheAv4KFKt6QctqQokZp1HA",
  "key20": "KvLRANtjh7mC8F514nHhDRfFHF4n4Qq427P9UDd3fDNNACsD9t1Bukash6KBpqh8sMz6bFkYy2dDQR245MDXYxA",
  "key21": "4RbEuGz3E8rutujj9Btp886m7S47naacfPyMYt7Ye8dWctM4PG4XVfb5a8dqUBq9BPNVFqc6nZzPMyrkepRPBcEz",
  "key22": "DRWEESMVXLfbFU3opjTyYjNMyKH7Y3D8L5tDHJripwbfbpoq6qtxD3xXQ7GKapKVeVishWaKJz3BdfT9RerLpof",
  "key23": "3iHE5Vzc6jEuvw8fgzvGb9yZMzckQwULmx4zxATyiYHwzNTAASe9zwNw9T8QHd5XcL5SqYb8whvhk5CrgjF6S4yz",
  "key24": "bk23Zp2MWBVFsHQeRyS4MVhjoxL71rZ4Atbb9gGmBEALmZSN28FeMXsBPtHtv8MFjrwPCLs4G4HxSGDzXh6j98j",
  "key25": "2UTgpgrHuXWpKaCMfJHCmvusb3A7GhQEr1T8W3TVVv6DXy5wHBxZ2Q83bC1MFoBVREjawVxr5jEZRkBFEAx3Z1p4",
  "key26": "2LQiamcAqZbcCLyQMpDkArGiw6K69GLbdac8cGqkicxTaCLSGLRu2x1ytMaY4NSxSvjcK5NmnDMhWBaXPCRLdYuv",
  "key27": "4sAFzcD1oQDt28tAzWP3q4WnNhezZ5ZHPejb7eymdmtL38DJGYFuaeTsT8t7w9FLjauaeC6A4ARHczvMaheNhFUw",
  "key28": "4YqRyB75jsVNyojGb7Dkw5VZRejKpLXtAeZQ69r8jVQT7d9ds1nDCjTbGFLicmPXUHLbkHKBAGsQgfpsPhz3Qc2r",
  "key29": "49J9dGtBpaGdbT6KhRCPWtaZQB1tWMq6hc5ho7HDEbSPf4b6Ehb9zAprdsC4ztLQN4ASnyRP1xpbJijys4YramZm",
  "key30": "2ue7ZhLycMjqWjd8skn6GFBoZYPYjnThWSTEDPvzfZ4HDYmAQszRXz7bMfNHtNfSbNhYstKer7e1CktoEdwLTuy6",
  "key31": "3dVSQQ3Y2gqJFmX3SWRoPTEk6jQMC3h87V6SFL3fxXsjj79s5oG41JtxhmKHqwtPJjFHAMQ8AiVUkoEkyxD7gT6N",
  "key32": "3UFqAC38Zt7dnmdcQJehm3TRxksy9b2q8QCyxoogRZxkiD8TCtXKKDdks8kTjpBMzWkp8E8AbrPhZajsezXLxRRu",
  "key33": "2FtwnQUCs75ddmbqBq8UYQw1dD81dr5JqENUPdfr92qCBmE5GuRoo91D1c2dzGLDTDEX1Jjht39S5DX8W3Ar3mU8",
  "key34": "St8uWH6dWx7hBTSEPb6CCVsknEPVzkFxaZU65u4iAHuViXG5BFLauR5Z7dxSH45TndprfSieqAqPE6DC17pA8n4",
  "key35": "65ZHQF7u7WzUoJsuZNQmgnqV66MXWUAK7vh4fVHaqSPsWgUxpFMzof3HHsrNGcbh84VUtRzBBrSE5JxfMnk4kv6f",
  "key36": "3fz3C5wVCRdYSw6SmNAPm4drUGsGNr1WsGivFR3f3yYvBE8nqiVpAd6agvs1m7ZcDxfofb2EemzZwphY3Q1Y2XeM",
  "key37": "66AVStSWKCDrA6K3hNb439h2hrumMXPMyM4vasdvDXXQPwfux1cPrMq1UUjSYtubCE91uZmbtbkkcsGmgzxVkUZz",
  "key38": "52wkE2XadQWWcsRYqGTrsaEXSDGbqnAyafdGYcXFxMeht8cnJrr7rreQUGaUDBVGperZHtWRsZnJx5UWn7FKAUmL",
  "key39": "3JTWKtLnRHWBKBrGKSNZdPtXFu49UScWitYkEL1h7vrEte1odacxQL9mb9MhxnQvm7uez7m2wnKFmYfiuxg8s6Bx",
  "key40": "4A6MvE5z8SQCic4ijNwca4Ws5JUhsXEC7z2w7MVdZkf22veRBDPg4VbteGq4F1m6M137XDtTLi1aPZmXBSpmdDkg",
  "key41": "qKWmQPLeTKm4r1edjpPjohnTyWB1mqzztw6J6niontTuVh37jcAoc2hZXu5qsxNtne7PghBp6Z9tYiWQEMXhygF"
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
