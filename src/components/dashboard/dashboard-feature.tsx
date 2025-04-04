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
    "46EigYxDzmtZE61n4EWfaBoouYcar1bcEBTc7PNUR1JGBZnZFjPqgnHcTHRsTjF6BZwHoGPd9qoDeKi6ujqx1THW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34rEb8yMxXiwtsj6btXmTB6D782ENkqogQvtVjy68NbJsQvmECeVjuDsC8zEosNhhhWukdBgYH1z78khgwEiSrkn",
  "key1": "5XLjAXgBMhomTV51g6dECb8T95zCmVmgtuwmKDuPdBgZ3r1bvBMF5iyEjPqTQx2BHjqrr5M3hYg1YMrbrmRUL2i7",
  "key2": "25uSK4gGArYdavtHD3X3XaxzdsLjoGwdPpKjTeNdX9Cye7GgfwGvKPydGSgaC6B41LErGtPHRL9DMkzWrzJCBciT",
  "key3": "3iBcSvM8jpHYXN6n3kE2nTmLsC469eWoSmt5gYGJahR3rH8GZrrK9EqXLyy9vA4BUr2XmCLPc9bNbXeuyLqKiavJ",
  "key4": "2624oDD8NLPEBjiJUsZ3gqwqUv91LYmbUWjefNskcgTdYy3m4NbixYzdRjTKJxL8ndNeD1DrXBnWA64K3W3hg7r7",
  "key5": "xeJxwr7gUkSJX5wmD2wJJVDuv7seJuD7XE7cSGQ3hBgVuVqQGCUzDNnFHuJk16sUvJLk7z9fsFmFDke9izEcDgs",
  "key6": "8UB56xts8WxXug5is3HeLr3A1MydjqBjGTRnK2WMSYXqg2F5B74MVnXZW66KYtnQwe36Zu5YLcon3Ex8qeC2Tnx",
  "key7": "FstKyzsB9AtPrdgG5MFXtAQq6M2UQ6XJHAT5GP3MFEmbd9rMpoEqSnJCu1imcLWLTs4vEvqWrxr8FHRYuboaMDw",
  "key8": "5FJp1rirN6eNndLoRJvHh9EDWV7FH5uCMCaaggf1rsyk5WmAFpYMXy9oCMYTUruKto44vXQLewi8chWkVPCNtgH4",
  "key9": "4fViTHxfJLYx1h5zLYs2uEwKW1NgyvaRGW2oajikRqTfwek2fc6mg92icgSY6gzHswpQoQuoiZYyar8KazQXiXZk",
  "key10": "5enjSC8XHzr7nretBBinhUP2dcieQWSqjUM2VPTr39iSWdTWowRuGmpeUusTEzSLQNjHVx7BRNmwfU52oFuKWao3",
  "key11": "Kp7PdcinUXuFggiowr6tcSepcbq2q72q57zWMjhbSpSoFpLNAht4wmSbk8tWW8z93nEMW1LvSmoHiMQzWzJiWiy",
  "key12": "5YayjvHhUFr9ZPCrmyjquGoaTi33HpYJwysog1hdWqDfoKMay4Tg3HBJQ13xqyv6DiEUgXLjg7uvAobvsh5gBa8d",
  "key13": "4ywkTgw1Kbf3cCavuzNPxeP9TwJJSxS8CoRoZun5Njt1x13Z2iyB8MtSo4ucCev1E8PHxMYPEEdYJnV2B5C9swHG",
  "key14": "4CGLy2dPLWdDL3MuVYRX7qs3tLJWC1T1W1LLLrUp2jYGgo5TRtyjwPQKtxoGQUASLitENMPpysWRxUmrr3CgPXL1",
  "key15": "54xQzY6sDWpUk5jLbicZBg8J1MNiG2csdfJeHtGjsq6VyU2C9voyiVBBxaFzLVNw4ahfZqbjzQPwxDPQ75wsqmnG",
  "key16": "LSwHfTJiaguUuMHcYiq46cLXdReA1LDihMaSA8JvT7t4VgHRy96gaKCitD1A1gNgXySP2YgUmyHER6AD1EvGht2",
  "key17": "47L12orCkk6oxq9HPJhtRmyCK2cHLhaaafuyoXH2WpwrKRhZ7tUzGCRJn5idHeqoJYxaNK5d8rfpgZjhTh7mbCwG",
  "key18": "4Rj4qYF4CMFgWCKmRfrniotVVq4hpoftGNrLfZw8cu3KjHpbyn1i7i6zxvv2HBgqdV7H2U72VBepXoU68QxhDasY",
  "key19": "4MusD4GmNHqwsdni95v9ZbStA83KfGUisFiCpem3ve33wHB44sKSMfM5VuimRH3ZNSBuX3v2F4DzVunwiGodAanj",
  "key20": "z6LYSCccPs89orqxxnHptfSujaMDoAF1HnMMvm57pQTZzCfkeAMLXVtuY3VPkGxLANH3LD9uXLYoftvrvF1Ypak",
  "key21": "24MijE471D7qXDHhjQFu4HG7DnbHxa5A2Yj3hunQ4r8VqNnwNf6iptdzWSBYXJr5XcZ3qFT9hTgmV8tk2Ln7MeYF",
  "key22": "4yER84Nkr29SUnj7sx3dFgw4wH28G5aWuGLzfJMEwHr5wgotCTUnNWyxvgDPJ6hAEhhC2GRLFBtYhgN5VmWUPTbd",
  "key23": "31WzXa4E2UCqfRhzLbw7rwXTvKo9VYAJzDWv16aV6JFnDuPwmin9LWqSMt4x9C3kLXN2wMqhx2yNeQ8au74wEFRD",
  "key24": "kX8GJWAXyRpTsCLZEqMCz5Zwx3Lfyvy3CNX7hoZhGhBJ5yePGZabBJQHtn2Ev1dDpUJDMyTRGGZv4qG4md9hFVp",
  "key25": "3D5WqZkQeuneahvDNyAkQoLmcKBvqNRK1RYMRfaVcua1pjJVx8rhTYEnWx67NtHuepQBgJEUX5pjFRCaUJFrsdwq",
  "key26": "55e3MRFjULxoEjHng4sajgqaWxSCDRFH3XgFGcdUvHSvhkpYtuhBHL4wjDgkE1vwe91vPbE2KpETXpvofWAVnU9s",
  "key27": "5q5wryftsMizNetEM8RK45bDmoMZtzHNh9Lk4ck68MVLwhyLue2qLFKhNF4ALy7cgccJ64vPrYM2QMTfvAbkB32",
  "key28": "3QnSizFE6FSNbhdXGMoa9BqPFGomCqQnWhApvfEnnxwKivAxgTJqnMHEjjB5nKFn9uQqLzFTWZDzMW5xQTEp3aSp",
  "key29": "JU1yJT2iNaLqhct3jUHrwyWnsqTEszS4UMNznbJiQ7Xx8sxwEZzsQsxcTK44mynToc2azAPBaHACNFU6JDy3x8R",
  "key30": "3pcf74YCjZyMaK9sjGtUvTM8gnPcTyscMPkr6ns95PkmCE8DiDi7iKdNCpVbeEV4G53n7XX3nXiYup51EAHqYvK9",
  "key31": "2vSPKn3vzAEA1arYyznoqNgA3ooSP4hs36va7jtPKZpTej7q3gb7hZq2EVfYYBoykxFk1fJpSFW8oYRuqssVjaeQ",
  "key32": "2e6oRUYxjbKG8StVZX8i1cHboUdoPcPQqddy2WmDZdzo6JfQXGQqenaS2YNupLvoe9XgRsmqYWXGgySWdWYZmDJw",
  "key33": "2Nm5jdijpc5J2cjdgEjtGrwxdd4KczZhepgemjjC8dyr3aGnj4ybTJm1HvmrtLt46JHs5t8xdnEbJBENxvvCfyYk",
  "key34": "5zK1NWr1h8kVHipsjMVfBZ8KNRJsEYFiX6vvuKjQWsiKtrh6PStjC5NowAuY53DJL8uPJEWPhXYZ5CokTEHAnEHg",
  "key35": "4NQH1q47WG34PMvpTumjYqgFWWbC2PjGR3sgQCaD1kfBr2oFEX3JoQNcHNyTmeeMJeyiYCW2BoNYPgREgK1RdBzj",
  "key36": "4sjY3okrNRUKxamKCJaMF3kRSuNnQYLXAum82xyNmYEFAwfm8qxWRK6EwHmcCgTkGY5RKX7FXxwduUee2hmHdHZC",
  "key37": "4TxXCUwXzr6KbsyULbeLt7tw4paRgqKfcQoYYWWbyzvjXeAcqke5uzwE3Ds7a84w6aocUJEB9MuGVk264PRvKtYR",
  "key38": "2FPMNjZJ9YNQMKXZasCNXxcWjSs2pb44qx6GQ7xEyFGyNj86TWkvDFWssjasjGZ9tNqu1Trc7Smy6YqNEkr3SW9G",
  "key39": "2VCPwArrf48ZnAeHR4AMd9S3cZVvWATW6yDkKSGq9fSbxjAssZiUMfSW1dQrEBGn3kpehGnhwvwiUJabXiLv8psn",
  "key40": "2GyQbEeyG2Jp4eMPxxT2cHDxFQvRwbvikpmii4Ty8XKRNP5mBkbwsUNAfde4o3n8qbsXaAPuyfcZFezsWau3weKL",
  "key41": "3spT1pQ8sFcA8ejp3WNyefvKwEB6kJ4ehfGJx8iRb8TaxbrzCymBCKmviqr8rjrbVTPJeCFtiHeeyc5QsmKybTop"
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
