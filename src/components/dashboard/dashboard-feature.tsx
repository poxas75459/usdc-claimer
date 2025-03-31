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
    "A2T9Hy5Y8yLxfEXC7QAu6t6uzqquctwP4inSpx5kYaZSkQkjY5wEfRzws7h8FHdxrxDa2eb1qNswEe1PuxBqQkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RA38SvzeWrhugeqdcWRSa4xLp4ZNzZMUNhaznJqeZDE5i9GB5wrGUsmPScH2pafzowZUtBHMgNLCSBLAZqyVfpM",
  "key1": "XUrwUYmowacpGwChkF62XCLgb5Ksc6JFAuqU7Us5arVA2qfAw2q8jXB2BDUiL13fhuBbZuYUVqz1fowavQQT7nM",
  "key2": "4VzMNsBJSDT8CNBQ6SzLm1RSizZuCfFKntNSZj25aLAqNLhSgAneDAJgvagUJTFap2EEggmpYzD6dtyvTBeNHz9S",
  "key3": "2zUvu6hkthTsXpaQtfGw8PBkVvs1oRoLQfTy6WQKnK9S2SW3URr76mri5hghpSXQy8gzZqkEwvvieM8AXAAYFo1p",
  "key4": "4CCYPrHQqpHgGBsb7mm4AamvrYqfjkr38Ygdm8iTuQcCTAeeeiPJpZXnU2ptcY2prRDqgBrbZe3tc32RdHs2opAo",
  "key5": "5z6c9okQajBWVyrhFoMUVPFjoNjSE2B6gWnySgvQythkUjXawNPtYty99vJQG5SeFNWkMnig29sNfsVQtkfV2mZs",
  "key6": "3XmV1tc7NGEwcn5Vpt7SePodU9tKZcevtCzs7wRqwuGUkLWPtsJb1AaUo2mhSpKiZpdTGNRqeg26yHp768HRS3V2",
  "key7": "NT8cxZLA8R2gybA6ZcvajaPBwVbB2iggTNF6nryFbnbLHnwdGVtoSPY8W7sdPEcbXnpBP7aEJ8scy5KZixtFpvK",
  "key8": "5NHn4KF9AWAEzeQTsyQgrntC9UB7dCQAEFLBXxDKF12nBbb8meVXinNuVqbs8B8LnRZqmKYS6bvdSuZktXmNruvn",
  "key9": "RdjtJH4rqKenUYKS4dkPjhPXfQuu1f8fEAVxD8qfa5xJVGhzQsCx7WwaroZhNN8CLTDqjvZy3bpxvPEqE37baFX",
  "key10": "fuMswD9aUsMFpvngnkq35VQcBJn8H2bvVBBhSTcgTH4fWuMWBW3STc663MeRizD7goX1wZTrbCC88v7s8t4Lyqg",
  "key11": "2RsngCTFk4CZkbywNRMYz7Hghxd9Zo2DeYaAEzYwv3bKmxPLRQDuqDgYuyj64SCRexJ3d5o3nZTDnGorsgg5xq8F",
  "key12": "3uKjx3xaqryPE4qjjnEpmFAtdD4oAQwnNDFywTD7E6L6YivmPxQcJ9KkEpEyXFE78TUDJeTP83GiZX9iiA5a7QR7",
  "key13": "5ZLXeQpiPN4eaLNfZpMDXnj5FMJhE57z2L3ziJ2JhcsWex82NhTMoN35eukQjcESUqQkxMY2kZG4N9H5B8SyD75y",
  "key14": "2kL3X55fQ48kKa24B9bgGmEQJiT9BiNh6brtUUpmKm6i2mw4d5jQeSWxMuBjf7j9abt1MAbUxHLWrdkzpck2Vzkm",
  "key15": "mGXme91HFic6evKWJCp3zVjniRsZmsU1A7ypLb57gyqBoouPcbJYpPGLkYCNjJ7HQZz4Fe67wD41V1rQr1SBo3T",
  "key16": "56gh82tRkvfQmZM9YR31yC8iqU4SWAAA44vYHBTqwyZm2T3zeLHH3qnCvR5yB5xxJemW5sEDF5z9rcwjffQv37ez",
  "key17": "5YgFSfnQuuY772yZ4zBb9UfGGqmsVSY7Yjv9m8PPTSdm9eKY4nCnhJb5fJhZBjXppzTj3pigA7JbjxXZ3bLp6xTV",
  "key18": "5bxj6WjfKRUcUHuHDyCJbdZDYEqJgpK3wwe23WDMtuSBU2biZFy3ZRjn793hWZbsabRnesirwDZvVqqLkcZJiEsr",
  "key19": "22FYCv4FoZBy8sRqRh2nq3aBiVsXTMevqWAc4jraWZ2DhUg1jZBSb2Uxss466G1D1gCWR9khPwGi949uR5ExtDQK",
  "key20": "2rK65GkeYDBKyexdicde92FRuvuNdwLWoxB6z7f3JD8BaE15wJZepPac3ZSEqanffqyWdf6BqtVqnRpCGJ8kd7kB",
  "key21": "4jNQYgvdEFkmFMowM2Ltcobm6tnUUAjViYdvjcZwzWHQPL3DrMFnKWgSeeH6vGpHXM5PBGAjytmSHqj6rdUnrKUH",
  "key22": "hKxmm1tTiqRN6YWZbX9PKPFdweRutC5PVbN85bxTuiJ7HeXEweb37F1S3F27KCiV9CpDHLi9nHtw5Aua81gxsJh",
  "key23": "5KJKJtbAGjFg2W6LiL2XnP88vrBB79QpSAjQnPJhoAb2Gi3dLeC2uLFYEFzNkzfkjKMNqYVV5DSkRJm9eviHvApA",
  "key24": "5Dyq9MBaJiAETPtV6bqEnDbkKHTCy4v85tuBqNEQphKgx2UiTxbcrWesdEskVJLhqF7gJLrTEQbGLrfcC1Qocdz7",
  "key25": "59uC6ff9385SL6Q1Y3vPFEAcRN7Jr4a5Tg8No6QttHTdNcmSw3Mnq4VcXh5EGJQw3ZBCVxTdGVkyhzsecZBpR7SD",
  "key26": "56KiHd5NnnZXk5N9v1QrWVH2EDMnokaCAouzZnSCQ7fmTVCogKKqAJnJQi58zKGv7h64ELwW4uc2CXduVS16rbSe",
  "key27": "46yx79s6qPFbSga8jW5r6dCi4vh6kLiXsshybnmahKHdeLcLCk5NLpyzWJiR55HrkjoB5FPwnmpgWwDB9QB4QD3i",
  "key28": "XdFQgeEBrNkHe9X5hu7NnH5i5rVH6JvbnW3u9HkibfWFsA7n1cFuPQcXw8Dy33uGD9amkzEGDCkJSdeZcJypvPJ",
  "key29": "7Pw9nfG7iiDMkNXrwCSe2RxLQsKP27Eke9eGZxCrLCjJHdgEMv8j7GY36nizYva4QYmVBL2mhsTi49Phj5tz7H5",
  "key30": "3BXu4D2ANP3jj9XrLUb76v5cGDT2q3V21UVAU7wgS6prh8NHpFsRJMSQD2hXX1Bhzq3BgzzJH48EbuouvEZhGsrZ",
  "key31": "3VLcArVssNYEjW7FiNNqvz7mwfYd3zeAA4JBKGEJcNd7L4pKGdW1gU3ggfbvwrSn91vuJC3LLr8xYAMn57YxRQki",
  "key32": "4q7o4Mby47Y2iCEXPE3xCM6EcE9g62gAUSucDTvfoC7r6Emr3mdbSpCBsJRzr9EYDw31f2SYdr8tLJyMGDV13znm",
  "key33": "SCfGvX9YEFSibz9Z6bodHmXMxvxj6oSGUChxMpXE2v4U4Jn4ytfSDHMepRxt24M3jDzJVzV2JHAPezif5BxHrQ3",
  "key34": "DQSCTV15iiaaNejCvZE4BhTKKW75w3nGTyMSNTqqHQABYB6qVSFCVe65THz8GEP9uPyHmCZLVKwW64Pb8CKni5a",
  "key35": "5gHxojhNP7d9XWyborghqHg7srqks7ZQJcKsotzhdUJKyiXoAcnJmNCtCRgmw4Mbo9KerRfvpMDPKS9DNUBGqeA1",
  "key36": "4iHd7Sbf4EDNXvCn5EZN3cki2AzKqYa8tCWhMGmQULuEgWuJ5JMebDs7S9ktcHDiKPPCRPZsPinzBvJJbQ6qkDJ5",
  "key37": "57HtbKH9pSQuprjFmG14S2icxPKT6iPUbM1DLxeAd8WN4x7G4AukbmKhMPknXqpLD6AweRgFmBn6v8rQVVPw4uvJ",
  "key38": "5d1tpXefMbQgzXz2gqtXvKJDL5jnoYDCW9TL9qUKN3yhWt5evZvhrJN2d3epUy6Av13AbPeCfVwwEQH4Ymseju3C",
  "key39": "4eEQuYprVkLi8XGjoKeSqnNpvLMqegfAu3A2vsB1xfvGR7FVckcp33ZggPDu2dFuBG5wJnQ3tgZqw5RHfqaFFN22",
  "key40": "5d2Zc6SL7ggy54gfbNsapDv6bRrhVyWAjXrdGYV2P2Ut7z1P4pUXhSBjAMFtLNV8p1P9MvXuMnQYQkFyn615AAC6",
  "key41": "5HCjTcNTBMRPGf3sXbpoxRRaM2j29k8HBBDHaBrcwC3BxJzYrTCgCpYfDu3wepRKGcp7QQebjzWvNmjkmt3QrY3B"
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
