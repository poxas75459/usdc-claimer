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
    "5zA9RrHaNWu6MfNSZTGfpxGjHTgLaTFBtRyWsCNFd74KLunL9iwEn1poV3iX5fjp9bH53a5vo4WtzsVASNE4iVh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zFsaREEZKFxCDeCnJA6pp465WYo9Pa68ggitkmosMmsTpivHRqFwZeM4ogSMKsWEMwAgYUXvAuAPcez7qs6v9Y5",
  "key1": "5rsf1qtzZhi9VS1yndyBoAJ7QJVzzYEpgy7ioh5c35gscH9hC2GzxQgPB1egyXR9P1eJeWuivDvxA2UMEfJJ7vEB",
  "key2": "5v1tNeWNtQRr4vp71PpPtjKjVXXjUe4Ki7WWLa8RJC1jB5otPfMXYCxr5k5NmUhZfSvdUfpn95j33NNCG1gFz34A",
  "key3": "4VCHaRJcFDMpanSXPgEiJ9dunxvVL1LMkQoEDDbYnAYyqEymwSDK92jAmjzwV5AYLJkd2pGayDRtDQyoNLJVXVCn",
  "key4": "qqcGg2ZS5KPWpwDz2EmnkSp68NgmABtUWDgGsqgsFjJ9MbLjj4k8sUpNF7o8gQsKQBVRzRWMezEJR9xKiQpWQ2s",
  "key5": "sZEGtuDVBFvmh17qJXPmZow7Kr5jzqpF5tzVCUuDNvd3z2auUy3hDVNVBPLjmVZ5XrgTtTApbzZURsWse5riPKC",
  "key6": "dkf8UPig3hKAbSwipyb3LMdMnzZHfNoYc9jLDfkSD5NpbQiH43v4inc5CcN2dK8AmCotFyNReFtmR9ycR26SdJ5",
  "key7": "3tn2vRAo5mvPgR76QaQurLn4xxWe7EXpT9URX5a4BaS1QqR6uyB4pFZCd4UR7UU6w6GhqMdLb3FicQBAmjKgSUgb",
  "key8": "2rafpiXEAUKkiY2LNDnAnhLMVfxppMivTpLsPT2EZzk9i8Dz54qhkfZe5QVvKUrccvE1ACwF1UuR8942QdaumKMm",
  "key9": "4mzWfDxtz8yEpjnKJBkbLb4mVTxYpsWgY7kYZwp8YddbVib23gyqzPxHSUQoCgS5pBgFCfr5h7VN9s14YvgKqrh3",
  "key10": "5eSrWXyS47VuYP9EG5KZGrQCp6CD5BtJwBupA7dUNYS56tTjpuk5TnMh6o51mk5yHi85BwPfNT8XK8LyNgor6gee",
  "key11": "y8HLw6Hw1ddsS7JraFia6tHSDnNcCRXYSRtgfzFte5F2W2FoS1VfVLxaMJTxdgemzpyjGcKL5muynfjxKW7kZfE",
  "key12": "2Z4h5KKJAvFh1XmbV3VDzxZevQMr6uUDQ9poEYeqShGDAAWDyZNSNFrpqAyPxKLXxE98WgCTawj4dL2UtU7Ffhzd",
  "key13": "3KtniMT9BFrQJm4pJcxAj8DDeDLH4EXAigdgqprWL7dGPtBqeH2UfP7GNqYUAYHmsAmLZfjfv3qN35DCN2PfcUj",
  "key14": "Ewj5mA6mJBDXNEH5QNrS5PWZVB3Uns7TAF5vtfUkrACG6QcKkDe4ZQRmUdcSukEN6vQBQmTP75cQwZQs5EnnEXq",
  "key15": "UpxarknBTN3xKEjGa6RPqiE1Z3rzE7tynUuapogMbhRUnTmpArnJWGNAM5FgMqPi5ZgaLCSHZ6mqc7Coj3ATezh",
  "key16": "vcNkM9PF7XtKAmx7py99wMSNKcCQa6zoq8LQSK5on2TY2bTxAoDW397tRvU73dSP211VA1RZzguJtKL7B2AKZvm",
  "key17": "KYecP2LWoqAFKqWXC5xcsw3WnPBsNm1F5Hsw1U3y5sSsrctKRSuV8xcELFFYPehniCLkmdMGJVpP56khrfBKMS2",
  "key18": "3nW4h14jHowr9qmfkKLPuwiQtJjQ3Uu554pZKEeAKkzj2N4Uw5pnynQGFhDjjh3fGPMsPoBiCYPyX9Gw7J1iFZQv",
  "key19": "54kshtqVF646oiFTpKT6AnfXrXm5APYjfvxxd9hVtmfgyxeKt6aWxxnJQxP9M7GcGV6xb7ejzNJqPzJ65VcJKWiq",
  "key20": "5YwJTWA4DKPEpH8DgsnpkmwNuGL3LRkswHZUzoAdV5PBo1SMDM9neRrQNrf582ScFcFsMr4GGuJ4zj2sBmvWAzwo",
  "key21": "2sUsk4HChUkXDEJdZTKfrCg6tF4cNa2kBmKUb5NznDSdXbRfq1bezBB8JcaMAdLE5v3Cy2tyTuB7NQmYkcfwTHn1",
  "key22": "2rU678VK2WHEaYMzaSWrFn1o1Z56QcWNy6zW3emmLmXavGZf6jm2YbMG3Mptztbyqq1eMRTG9ziukEm1Kb8jZPNU",
  "key23": "2r3JCFFWkmDY6PArejbosTSDZmnUEr2vy5fC86SHBSt5U5SuoXbbzruUoqDaamqWxyoWHAhArcHnddENyCwtYNSE",
  "key24": "rUucgyhZfAEW811KwvnXudZR3gJDRPvSUUHiwuTPTkEFaHTCjg2WKxYGRAsLiYKLgN2TLPhNazonXBkYeJ5WUoT",
  "key25": "4ngG9mre4bMNGc8onSYcNq77ZfrheChovbafuoUkgqozabgeQuXsJLhpQwmvrxDfF43WKLQmQbqes3LA1cQJouSD",
  "key26": "3P2ox9FiVirFuaPj1zGCHDMcDE27dQXRrcji8H1ZvMZeUFmqdduB1Yf9wGz8AhG86LDJLKdvSN9u3A9uDqZjGSL9",
  "key27": "5LpiwVTzUNg327tGNZDuUrhUpsE6v38VhuHcFwRcGMwtTdQtBGnddiEqxtPUnVAwVxvFkcio8D1gKZRcmVonQ2jP",
  "key28": "4NNWog7NwZmsJZQjxcKsqqBv5pNUTMSY9QutNNJVrjFntD3TMxdDMamQY1Zm3Wzh8WMbmv1eRDBEkx9Y2zHMzU1B",
  "key29": "5q3UcoDghvaNy3PwKxjch7HADhpMgTjqukCzKMcNnB8MQt9hGtxXAbnMRdAffgys9qcbyQU4GfzDjxW9VFNXxM9k",
  "key30": "5JehWh8NjSz7NdPUiDY1HM6vJ8BeyCse6SqjDBWJU5hm5otL6Yy2i6xsZmga7qajrB1LwmDrP2ScPA5rWZKdL6jg",
  "key31": "4tSfHTBYJmgodwAew3HWkwjnmv2iv52m4p2ye636RhXA3Q6pPUGyTCuRb9pvE2cfgC2nvEkFt64XeCWVwJ3umNaZ",
  "key32": "66QqfXhom5buvi6imp9cKBeaKR4hbaz5HZV13uGYL3YUqkvyAD3Fi3A7FmKKVU15BNn1dEPgjZbTi9a1jUbqcERG",
  "key33": "2x9DxVuwKiQdWvbaoQogo3UhPmemkiGqnrVK1YrSondfzcgaUqkit7GgYtC2y2M84DzXz19bis6FNBjYhMfjSXyw",
  "key34": "2TVPAKR2Gk5hbzWPTzF4iE1sPXKsWEsgC8KNLmHx1GFVK4hkf1Wijbhz6WPqjWUFMz3n3rSqVmtJzy3dRJW8x9Vn",
  "key35": "5TtCqRxXfWcYkTesEtytqxp63iqqmwCKGfpDSxi2xCCyqHkBzNRrPZXXL2zPDGXbC2vhdzku8dLGiCs2iG9PXFtt",
  "key36": "5AhBCvNfJqhvwp12pxkEfWrTzJHShNLTnqQSFxHpck9KEhdsKma5VBeNLe5f1sYaZWoqW8MjTgCj8FBDA7M2grvX",
  "key37": "2XSMNBpBq2ZoCq4qQavXs4SinSJeVyWnN2GUdJ8PkoEM51Vb3srUhgaebhNtpJ1WY2UcWpKpmpjgApLG7Qmu9j1B"
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
