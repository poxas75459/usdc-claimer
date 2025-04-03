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
    "3aQtaDWD1AbwUfWoTxcc9kbAnoNeujApCThQBqin3KNtUjRL1WAK3ZHqtof5AQaEFVnGx32XWP6YFF5fq8H9ch7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jnEJnFzspzKbDVTQjN3B578TwVLTMPQzRTCVUV7zQFSgA6o2ZnSoVLA3pEuQmU6SchinP66geAK3Ck551fiQmHA",
  "key1": "7K2B2AXDuwsVCVBhJceEQw6M92VUjjcejARdkcxFavfU2EPEMccn89HyBcwrLpNpLWMB1jcrGu6Zdo2a8Y1zvz9",
  "key2": "23iZvbzqaaGtGdDaZbMJtseyMqhjmcNFV5vLRfEcf5d6S2KDUweB6whrfmyRmBJLncZXSKmPfheDb4A8Ag9vJJC9",
  "key3": "5UF2gfZWHvor2r8i5frcVyMnpqMiAe2s9nMCRKg6gF7SGK3Hv1kJx9LmeriAzKMJoGq3tU7GtyMTMGxqnXESbobL",
  "key4": "2GVKLbgFifBmKpQYJnu6nj7XYXEe22DA4RwwfW7x5L5zmwpYWXhXfcz9dxrWF13Cyvwhh7owVzCGqGSZEapDTGeR",
  "key5": "5zgrfZtSxDcfu6GrMyv9B7yde1DdWERkH7r1vmPSzGrdkzL8Nuh6MmP3Jor9TSvRB2JmXUoxbZpTdKYrvUuD2syL",
  "key6": "2TzWspgvzsm3iHh6cJyGoZbC448oaURdtT8zDu7PGEwBQp4U9b7cHvMd4ktqe9ohUcpicp5hsa9Rj2WSVF1pjDQo",
  "key7": "33arA2XkG8ZpKNnYTodY9tgJg51aF2kbYRWP5k5yoXpogHK51PKj5st6bnUppurQtyPQqtrZs4ZBPngrECB4vvri",
  "key8": "21taGobbmfkQPTgnaR2rm2UpepFgLduD3ni4zqhn8eatsKSBngECZNxE3VReSkRCW3t83uxhMNDZFTK9HPbB3K8s",
  "key9": "5ya2anE7Co4cGeCDAPyqhyfWYngsWauQ5a3TWgZpHfZu4QUaATxGAm6LpYC5RpXbpgmPykrKBfbYbEypwBxDUdhf",
  "key10": "22ZMYHLjPLtF3trWbURsGcogS6kntnb99CtAsREN42v5Yn122yiyF5Di1SzYduaW9jMgXZnUu6VSMaZ9Co3Ja5JR",
  "key11": "4LmqPR7yHmNDumqH2vkYYTrb88GEox3PUFhzhxGCqaCDBEL6ZCfYDZNKYm5ZbKGYgGb5VCrRxYykmdT2ZZMoUWVT",
  "key12": "3bPmMGdjrium2ZiCdR2W6oTSwNWBuEZSw7GWq5sgkNBApcjCcv5K6ZePVsmMMrWH4HDbZf9ZdEVPQXzkJjcXvwNC",
  "key13": "51YT3TE3jt1UXfqa8zSbHLNM5C8VHhgHC7QwPotPX55i1e6GpapodtgT1UpxnRWr3AFyfNvPAcmT65q3wtTv4tof",
  "key14": "3azBVnmqoCzzhEQWsVRB8z8BoLC8Xy8puAVgKSk1sMhJVZB3N5odwTPf76JctzPdKJ2EkZCVgYwU7qZSuFdSGoQd",
  "key15": "31snJd5DiTKqdzZottyv235LQevBhh235yJtjupGonCc6VN3HWfCWPoEKGf49wgwyxzVKcx674PbBZHFvbz5oqj7",
  "key16": "jrzKFzpiz9Nstp76wJ7mwcMDhtsmYbjKGYFzryioHEBsMnXXEKJfBdVw4u8EQAnfaD3bdaxkKrs99y4X7XtSw65",
  "key17": "Z95t4K23LxG6Nc2aPw32iYCd24dKp7HQdCKxQRAdwLDv7tfgNFSWJK8joCtWhR3w7tEzQC2dxuqUQNCyBdiCVWZ",
  "key18": "3TDxj8ruPCWBizFoWJ55mxbsfoVNpPqz3L38xqy8KvjoNo1LRHAswCjoexMFkPCDqxVRrWyrX2wijr14Mwaq9i3Y",
  "key19": "5xJ1HWqgU2HZ9gqnrSwXYT3FUQeDNiojqFBusKCMdRyPVg9Kh2XHfj6iR5wxGy1xraN3iNyLmYYi44DTG7JbFHb9",
  "key20": "2DNbuNdaCeKBM8nW3BzG6LQyGisxAb45NruDUJNGDebZcMZe8rQwZy1LqratrXRhmaSLAYCBteMtEe3y3Yhz42fd",
  "key21": "2K8WCX5XXngqMN8L6ZaUhAPVhmngJ2BNKDc3EySj2cJfwPp1G5dhCEYs1Ey5zsAJTFW5C8Mumv6P1Gbu4C59qCZe",
  "key22": "zUxK64vZNYrRqQBDhxQtynJsiuHjR2B2xKn437iB1AmTZjYGWufWNeRc8oAf8oDsUmirdjeD5WRmmhfrJawc66m",
  "key23": "29HWe55UciQoehdT19TeSLsq58rdxy75yQgPxJtgMypurs1MGmbDBjWz9e9zJasN8iFHuqbmiBaF7Uf6C14PrbJq",
  "key24": "5JZC7Jiv6aHUbRHBobRe22GjpQ9SRFdhQUsDvTtW9H3RWbstMC3CkfPu35qw48jyTtZy8Qu34Msj1J1KpokZDAfV",
  "key25": "3VkKk1WP4Sxo3eLPf1KhXTrGKnUiPBi8oxViHoE14EHFAESPNWwD9Xbzat1c61jRRqcvnKSXEKPgkgEg9iPFuQTm",
  "key26": "3STexGznudZWLuGJCNmwmWA4f1Crr16GQfsTTk7UYN5Y2x9uKYgyGAffjFRZThSzjrfnoGcix9PzSDhqudoKPA8q",
  "key27": "3EkPgE6zZniWJNJmkzJZeiBBofxHH9ZPMGe6oLBGuyvRTYwTn5s6jymBBB97p2SLA3oBkrYzw5yW9zeLS6DXjPc5",
  "key28": "242ZAwtT9iUXtWCHRXr5Ue28AfdAQ9buAvEPSJYQEirdNGTVc4bCgvT8wYKVviZJwtpZJwRT9njajttvV4eTd9vj",
  "key29": "2GyjRsNhFCqiRhVsRtCB3xZE5BvqgAADct5zcGzxWszP8xKee4EvGFYs9ykASjtUD3mEhtQfUWJ64zPFP4pX8YD1",
  "key30": "2a9rAXQmEvDyEpVuwyekwR5m8kZzhTQamcy8vY9X3KvYbNvMb5fXkZMxn16TN3KS5axNpxLKjEtccGqjS3fUZcRe",
  "key31": "4C6pGLrzF8SLrxYzMNowXP6xtvA4px5BZPD1Z9x8p9LjnLADKD4gMsK8xnkoBsWLjAvZu87UenYq3ZUo7udopW2Q",
  "key32": "2zFxszMGJpp93ojhrJGbje1U4T5doMfU7SbxJDMAnKeS6tLFdY8MR8HGfW9hEoh9AvgPBLu5Zuq1soS2tLmYssHr",
  "key33": "3brTgfdwBQd2iqh9EqrtFVoW6UBP1Cqhux59k4pgFuyXS9kVwv7CdkLZESBkRkrtJkSyY6UCetE8JQtTv2wJuH73",
  "key34": "582CMr9bHUwj5Zf97r9Ri76HpNzJQqLYeNKFdwW27Jmn3sfj9tPrqnhf8MtmxoGgfh1b5Qs2Gk5wVfh7AV6zcpJQ",
  "key35": "65vjoKWKm4DdWBGSGduyLwYkyLVUBfWnXkKo4LGHUAB9NCKU9bVbuV9eCu5mcTduZQk2fxk1CK12F6FULDVsNgRP",
  "key36": "5AvSDUkAyBFUS2enkrc5oW2nXSLxzXhTgsATxpow6C2uMiPwR5CRkf5AJgsd67Uqd4zYn6ie5KgF2iTvFB8NtuMM",
  "key37": "43MxKGwHuE1f36j6NxvoTPsHxJQSfZUf8HvB9otL93BfqVNoMGwQg4iejSeagV6soyCvS8m1EbRsJLUffc46U9TH",
  "key38": "QbFNCDqZCwL7qzgBP2y85R17YvjGS1bWAgxFx4i5gVoVGqgGizDC8rJAjFgA9SEmYBjWN2sfvs8hoiejL7hp7Bo",
  "key39": "4PBYXq3iqDfWGiBLpaSj8xMoewJEeL2DrXH1fmHc78XEBf1dVwupV79m66pjLLHYSGEvTt1GrFQKT2yzeekwKJSQ",
  "key40": "xtdbWt4iREKkM3RXosWiKaipPHZkjNLfcrVXnRcD7okKMfTciPUKZPVd1aZaxMjkBLC5jD9Vzhhs8Xzu2tdwH1i",
  "key41": "4q2FQonFwsn8hD37GvCHdgTjfj9yqLpqUJpuWQFEefxzb5bdm4iEUqvFMnvCXRcYjCM6Qe9g4ujDM1ZtSmyvZiep",
  "key42": "2JmU5nix4Pp3jLdsYVSbFTh8agLTvZezL2MYbdPZ3LPMzcr3KZBrwzhyHMmcZtZg3daY2rn4tKnkergr3Eavfd2",
  "key43": "5o2Xb6JtihvJnzT6aRMCpeo6Fsc5kPkhV6xSaEyyw3UcT9CnGQnG9EPva6bxsxgcqe7MxjnLsEV2oTThpjKRj6eh",
  "key44": "3iHo1DeQzMNXT8aAimgfwPMJhC54fKEYHJtCffYyWWGpASk1s5FUQXRG7v57yaBjm8WVUBbF9zXTkjUEtihxq9zm",
  "key45": "ddTmq6tBrqNCDufoYzjMrX5TS9G1jcH9tqdBJks3NZvVxvZ3YfcDNoWdkzTa6G7gt8e7Pv9PmByobpHhe7jxLR9",
  "key46": "g7VhFFpvKE9QxJFrURWM7mxHrVNK97Eo6tAiqH9H9yo1ABMbEraDnrYh4NhZTPPmAyZFa69c1kdaEGrVVno8cYG",
  "key47": "61D7hVXjA6haCaHudnDKeVxEcZUA4VM7BBD2XwB7q2WqvzDVvdXoijRhJjCmgs3hEEbP8jRkeCHAnNgcdAQcH7U7"
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
