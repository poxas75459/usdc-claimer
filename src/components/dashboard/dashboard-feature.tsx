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
    "67ioxMbzuucx91aogG4fM3XTae3rgS3cXjrR75pjh1yPq45zptaa3qJCzwRZX4NPrPwSBsuHLE3qvrncpyKWUhY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b2rCB82TSxArzT78cYD9gBAGDt6167UDrK1HazXVa9JkHfrS5hyri1r21QthGkcbz62f7geuTaKgws1pyLBEtjv",
  "key1": "28vCQbrdtGYJeSJKgWkK8UrZGEohKpfnUEesBQnqxUT6wQknMtaPiyAmrFczbHEm24dLUWkZJpDbPCU3obpEXZE5",
  "key2": "5poEzZh77SRMkX5tEJQnD1CH41CZv9fMscS7q49eYYo7hMXSc4zQKibbsrxkWsB9CpYmUuMnTMGSA2LRKY71WG3r",
  "key3": "4GnWuEU5GVfvBBNabmxyeBCpnXzjKYgQcbfeqbSkQ9tmxtM7WVP4EN8UNt4nDPt6UXtgvPdKUpbWwhHJcoe9X6iB",
  "key4": "493UqaniE4T8AJSmP4LT4xqRmjoWZRauZiW9piztUrSsaXjWuTvdGhr1W35XPLSXS3LMfez8qsSQtipRLetodToe",
  "key5": "3MvvzfSTA43Dt9XJe6wjMoeCp7U83d4ZEtU8kn1igBAvoRBHKyQ678MW6bBdW9NMeyz6EPfg1ufzHSMutdkdAkPn",
  "key6": "2gxYZedQhSG6kDDdKF9EwaMrNUh9hC5cBD3KV3CYjcohCU16gmwwweYEywe87ep1YNVJ3YnGo4vyj6Z2o6x2ehdA",
  "key7": "23pH2KYiqb33MmMjX2RdVtbQmdXcM6YftAFr4RDsMUpCmWTzmsCsAgZgoMWuxuVVhUA8r6rQ8on539D3LbcaCa5Q",
  "key8": "55d4FT8AbKh75jABUtqMQuvcyhQmv4UT34HkjwREizi8CxEuE9t8UT5YMTFcktoRVQios4a2ebkeECSDW7EXsHUB",
  "key9": "4kRv1xSHoKxYrKuQU2uhtbm4eZDehTdXL2QQSvCbdfK2HH12rVEEjmXregrDEH3MEjwARnzJXN6B8EgWeTA2WiNL",
  "key10": "TWnNvWF7tSoEy9LDEDvtbLkMddZbCTZmYqYhJARWFrGhgAHu66HDASxmRQ9y5gN5tAZoHm4FSjypAroHn3isxdu",
  "key11": "5cjtQEhF9XzT1PcMjjVKNBGdP3Wvx1NXZDrZxfxGti4NxZN6fh86M5X7ALM49HyGtvyyE2ZHLx6e8kbQzfnhrtHK",
  "key12": "49SXk6m7t6UvwZHFN3Y588yTfFLyHeVmVvDnVmUv3vNVaaStgg171zJSSPLE7UFHqXY6pR6QCG44uZcLr4AdRqh7",
  "key13": "2aqoz4YwTAGz9gEaKP5C8TwbC9dmXfaqJt2J7uCuQNnHiU6JZwNwizt3UgkLQ2idZqFHQ8AmHCQ8XL7qFD5bCuSh",
  "key14": "5xdBjv7U3aMiV5FnFYGXt3fLghrpqpScxm4sbZu2NVaysaQWmZrmokLbvU9stxFrxw8wUiZ7pvMrvAe5rSoCR3bQ",
  "key15": "3Fymgjg36Nmr1f53vxounHu3Jz29CjFQpk9zm1F2qyJCeyuzv9ZJHLk8AdCDMU9NBmQdn6zBEdPxex6WEZ4eeuUa",
  "key16": "ZZvcw8CvDijrBM53hxLvQaBAC6VCmDSFTWsgkgMzhAwswv3JKUSpGsypMFpSKjqYWiyb5PkxEpAmtZaY9fRpRno",
  "key17": "3LER4M9GbzqLVsjsq1h8yiCm1cttifCTtwFTcoCULRkeBjnZpT8pJdcMeoKALrVwfqXJsNcv6wqhaMGdwLmsA3jz",
  "key18": "iVSPMRSDi4VLvEx5v2opUkiEVd9ksnPpdiSH65DTATYpGj5Kmh8pBjCFXhq9hQrNrxAABkoyU6LzZpuumZcEFxD",
  "key19": "4Gh72UKxThjcHqFYNtLVqkp2CthZLaXrjQ1gmvWfW5KTjLdDMtn2zNwn2TLNyBNkaci2DZEq2T9AFZgso6CFEGPj",
  "key20": "58Wiou21ZzLENpoZBWbiKq5vU1Mcwrzt4b2sRi8naBZHst7S2AynjH2i8sdBJUKRb5q2wHXuM9LHTdVDNpMR5FsT",
  "key21": "PMKf6Nu9578GrKicYg8qXvQHXA6fUteTN1ZUHfS2MT7sK71XanhhXmaRCaSki9w4DrY2QyghH6xxEyMu9pNpBXL",
  "key22": "4cA6gf1JToNfdZWcvbaRSx7bDjo4qT41fgad3zuvgCJRZ9rwvomVzGn5qLWqCXKT99HeGcx49oVqPEZgLMMYeDWh",
  "key23": "2wtoXpuY2iB2EFRqDUENzFM5CcXPSGv16PLMibH6mx1HMKAbso25cuArKKWtNmqTGCvzhNjsSEfeGbNXaptkusMb",
  "key24": "2C78xGft3etUgWHhRVsbMGs3FDbfCucQLM9mB7xqrd31dk9UKpMJqsRfgvkpSFe4rxHbuKskh7Pw8E99PLua498R",
  "key25": "3R3arhvtK9V4ask6nKxchUL7JeZHgQv1oEQNnDwgFSTmGt9WC2KS41LU2z48DopCdHf26qMVU9fAPtvRhenv2mmr",
  "key26": "7SUV8yYetCF9yKvRkWPrktat2ciMk8uZSgz3UgGQPyddvepRJNUJsYUKVX8WhiJYquB8RhBjSaEVwNxBDyT5SqY",
  "key27": "4uhH9ZktBbKw1SGYH3JdAzxqfMWHBGdW4NTis5aQS2NCGKedcCKur5WhGDjzMFHDZee6YRFo2JS9SMMgorfCdZbc",
  "key28": "3cCpHzKREaPaQbY8kPomUvsoBhHFfrtP2UAvFv5rwjfokeSkRBhboeSLb81VzFsoErHaBpF5obhz4FkKLHLs3VFs",
  "key29": "3WpMz47E4CuWGYinxSktVtrUrRfUdTb1CEEQYmJoTCsVo42HE37FfMx9xWupD2NndJF4WJVLSopqkkSMzbnGfMyf",
  "key30": "p2iUPBVQprm9RSb11Z7rWxwBkJs1C1CrDLnQCmk9qattwRe5JXdxntbGt1Y3NHiA3DGBTV5SLgxeGFWM4HQVdS3",
  "key31": "4KPiApUnKyKE4j7wZBzUXkX5yCKJDLjpKnW4pLKtK6SxJfVnmX2a1AJUkWLtBeKAp8emkppVmg3DwCmbuCVJ2PGi",
  "key32": "3U7EqfxrHhxdW24Gmrn3Ehdh26Fhpcv4NHJ1PWcch7wfoxUgRLvsbre6ZLzuYBGMF5tsoua6mVV2BzpQcBzMmKzN",
  "key33": "5kbU56tYMez94rhXg9HSg8Ud6ggif51PaVNbLKv61TvTPjxQJ8hEdYZKpAxRXPAMTdCA11op98L3Bvbgustvf8Yr",
  "key34": "56C5jCQ8iKVW54CxdH5xvMBT8ZodjbjMjX9ZPx7CBLTRTma5Bd5Nfk5rD8Z58CqZBp7ddbcKDpohFAnPStghuEj2",
  "key35": "4rgmR4QtzvtYyCQdhzEYNdGytoNXvsgciNH3nKx7a76NHMtDgFqajqbiDrDPQBT2H2oRhBBnm6t6upPUikKFobTB"
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
