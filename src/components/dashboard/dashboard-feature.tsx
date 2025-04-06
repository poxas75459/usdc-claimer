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
    "2DkQDCc1piZ8J5r3wom63XiCSPAKn5C1DNRdPnxBE7YEYF7HyVLiwuJrWhAxQWyoLPtvqBfvT6i4PWi6ourFKQ9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YxRxXDhSxyiwz8Kd8KjepQecvUEKQN2FWTNGp6PTn3Q4xonDHnRjuTYgfi3XxSQSYfojvSoTEXMmKkQirJAmHwe",
  "key1": "3vMqCbqJEL52qEUtfoEqkup6k2WQwyyBXiUK2t5hwSoJmX33mh4E59uTzWfeM3L6Ry5DWd5nT4mZotE5eqhVWQ3n",
  "key2": "5iFdF4SAmxWSyTKEsvVdGU8yn7QQckgVCUDjpKCHApB34ozuYr2inqSRENB7rnkDmkyjgr6SqYxgrqBQPsh8o9q4",
  "key3": "42nmrkE6ZT4Ahn7evDgw4Y1PyWFSW9dREcmYshqErAsVPLirjeNwjahB5JTNG6M64YXiy9BybtSsLrL9WkUWGySY",
  "key4": "2Tzp4RZKBGe1LP1UhsJ2D3ckeHdEriHsPa6XK8SPbqGb1KeLWUT7ZTu68Pojoo1LmegZVw5WEN5MoK3tqEoT2BBy",
  "key5": "33zxiSwChgUHhyEhYVqTLUxPkQNzQz2WMvX4ruLBajdxvoNpiyN9oaMd7NDNGSieEiRmLGhgWLVUVfjrcExarNg5",
  "key6": "45uuELXwSQfZae3yxxtEh1PFMPSyc8KRwjLQC9gQx7q4TYsPY8RfAtjZoJDSYzzAewyKgKr6T9TujQ1jqANZUuXu",
  "key7": "QbAfSGiWP8UYCcfnGU5Zk8YT3LcEziVzo9JPNMky41B7GLwCw4Po8cZCYKfBWZnS3tx4JeD3qZEjN1Nr1BiyehR",
  "key8": "2DaQhVTMno5yytPZiB8mhDA27m6nkiZZf7VXN1soZuxRBKe3oM2bCjBT93NHofMypAkdtKbFsUeWQhZS15tGo1De",
  "key9": "4u6zNGEfQRiAdt9oEQDTapzNEHhhV6Gir3hVsAHu9unvqMC4zNY7fzg7nxjfzBi1e7G2HYDNbMc6mwT9GQSzV95p",
  "key10": "3QC2wsJJsiAyPyFnpn4kEoW3PJL99GaMCR5LpxbEmTqGNukvFoXd6MnXQ1RGLPHpjHU5icD2CnQEgGDefTXTuXrj",
  "key11": "nKeyeCTAEU2oS8e1JT8Pp5n3pJfKdnkcDFrvyoXGVG77dK7jXVj9WeUHJtpznc9Q25r41RAyrBKY1APM78PFqK8",
  "key12": "29FV6wUPJsf91598EanQSbtyzNTVNqtB2qSiHAeiJrBw61Ub56ePS1pEYpZK7HwFqUUcoCUU8U4oJjpW4ASMEbFm",
  "key13": "51HZN3zU3D2m1zBjPYPewLgMs38dKt8hEYZgLV5evK3BLmdUxkHf3bhvVtZ2nzAzrNMVuTxq2mAuXojSTCtTLkg1",
  "key14": "3jxRtMzRhmVQEr73NuqmZcpEPM9ViNigrEzftpbPnSkRFaYqXReFoXqDtgjtwq7YVwUwCLFV62rGkbGwLcbgx4R5",
  "key15": "5C1fN9jGe1ZHT61rCbu99i6prmr2NoHNzA2c9q7Yb32kp72a1wNANQbx8zHhWpgMjFYcfP6SgdnDrhF1pjT7ur7n",
  "key16": "354SAa2ni61cPEgMzqyqxduqhzBL5gTKTGtknrYhVAmX5YAi56K7eRm7c5U7Z3HQaYdZX1aTHg5B5ZjVrBFhfZVL",
  "key17": "4w8PhAp398AaxXYb6u58ECpHmfqV86VBamKtYT85L4svFTFn1VhRgo2HyPq6ps4hJrUYLRARpy4Max4pbekgtCiE",
  "key18": "2vGhHurMNwwgbNnhTokEwQM5anPowx4bNg5FJ2Lu53M3UNC1JAspS4ubtVyMRbWbnhM2icg9XFepnfRHWeuk1dR3",
  "key19": "3HKs8C4d4nZnLQD1NCJ622RMUZrZGTvxPRRsdWfPgYKpVwzkaZ1bwoMP8TWwoiCf19XBDEL4T7jxNKVywfYis8cL",
  "key20": "3TytY1fRYmDnDdVWK78De9rypVv7XAyGzdBo5PUBZLG4CjwDmbLNnNGa1nS26BqH2QTLgrn3XLjpxnwoBJyH3J3p",
  "key21": "4VphwXnRCGrYArVvxLNAoURDpQse1boR9npsUriu5P8SsDLRyqfgr4N8PuWzfZGpgoaqQD9TLoCTuGjzpsTBbm3n",
  "key22": "2JQEe6bv7qNhxLmSBWxKZGtDVCHFgqkxFmW5JfFiD1ui1TxsjDw6q7RKmN4WDbTiN4GAoYnhK3nxQKwRVGQoQtaF",
  "key23": "2Xw2MgNQVBHqc78WafNhpRdABqURBfkJK97X9WF33rYnzBj8cybpg5LwQJ8BtaySxNf9SFje8BQFLHUgVaDafWog",
  "key24": "4qpWRbzNMoUrMcxjXfWVHaAYRoTJJMi9rYYKnWZ221zFzvJVWqbCux8gbGRibtLFXk2VMPaX8Tz3FYNtvYemUiNh",
  "key25": "3LAVt4yYTWWvkcDqjf9M262u5C4hm4vTNNpkfodnpG4rJDsNpQTrTH43KvY5x7fpHh3CErmGGM8htAL36NkkZtQK",
  "key26": "3sgvJNidaoAZJZvMgVMJF5SQY7FDzoyvK58GBUU5RxhchKGQV445Law3DkWQ1CxJsdg458U8aS2iQawLJore7PmX",
  "key27": "4i6TSyECCaqKNENue1WpZysWkNMWTngcPHhv5PFvKrG3kTkR6w7YnBVkgkcA2BRrJ4YJ4vWSa42pYZjE5D63b1e9",
  "key28": "5y5n6SiFxw5Lnup1yZU4p9QktbX42t4D16xkmxSvq8bvksXq5ULYxNHpTgmLNEHwDkiKiCZVGWrMBm4yMRAsyMGP",
  "key29": "36sqY5LmbGZstr2gYwpFXyfoKoHHA26NKFAge4iuVH2ytNnLXfPgCDMxohzmqfsfUsoMvtdRR83PuqMqdpS3Ntuh",
  "key30": "4Kdpm6ZGf54ezWBYRJNrTotePRwT1oqNzzUGGZMDMvtaD4A2ie9CXc9qju43Rctpkd2xn6JMBZPH3Xz8QR2Xe87i",
  "key31": "281n5vFYi8UstsyotSGzEhDfVteiPmrHsG3VhtnxfXn7PmaaJFxxxzMf2pP7AzT6sHV4mu71CR8vEXT6Et5kv5GM",
  "key32": "wVV1xQC69L5QVFyF6Zf2CbdULzZ1VwoN8Ff7F9L8FLUQXbcxeHPefaJNMvbQqi3dTzonyZqUzGZDXF1znHACofQ",
  "key33": "9Yd7Xe95Xa72mt8sY5j9VMc4Cur2KMjbtxepyMdEgzFTgFxiRCRk76D9busJNEobyeNa6K5MyujgQ6skanaz63G",
  "key34": "23ccFu5KdmrBLLdhgy8LNtGDegppSSuSPBTtkzoCdPP69dFxLecR382XxBpxKKaRorabQmjEx6hakGeCbH1revEM",
  "key35": "2YynxJyWUbFxFjPKdanHP7CaA6fAZcUq66ag4pJwsCVeXvRApp7YZCehWc2bQQCasMvsdnrzZdTBDYR4ae9P8M1Q",
  "key36": "3LzvRjvyDiUm1tQibyfLkQWkTB5MGhA2bYxAdPHq1kP6VkgTjMJh12nnuSKJJgUNbaomoHnSAvvngTnZZyY7G2s9",
  "key37": "2JJAwSuLTViHnSdgQx3H1jfSgGN1et4eQ4ximS2HcUixmvMyzVTLRWPzM122X3ibQ6CeUoAQvp4Bp7iLieDfNneY",
  "key38": "65dqSP8Z9bcR3N4fLZqfMSE1BsuJpTDvn5hsGu5t4byiAkmSiGuMcbWfwKUf8f7CXHfZqANcunnnHGj55tbXPQMz",
  "key39": "5RzF3h4cmwkgFwW6uYmf9F6UaaU1udxS9NTq8nq8FsYv8GbGGHMehdZJeQC1VwyD3wLbZofRe7kq7Q7Hkd15pDsT",
  "key40": "4iWiRcqcDL5kPoZVmc3LikMEzGXAzdMiAiLu72wqEqq1UJrHNFY9PKuXKaYjYXoQwmB4gHigxRHGBZr8t2f8pAeW",
  "key41": "4h7YzRdmEGyk79X7baVb2sJkmuTXizP49uUqsVF3SgMS72FABgpVdCyAEc4nusKwvnKmqCkro9npRuHGtApZvzgp",
  "key42": "4Z5Be5sX8beMKYMKCDgsMrFT9hFNuoiHQeeDuUGKogKDu8ZyvQWwwtPYcmZFDvAiJnC6nweLfN9yiwhsZLSrjVNh",
  "key43": "3DVhMLe3jxxxcHpecskLLSqZZePo1FD7TqqjGa9rLM3ZVEawidWpDTabf7dgooxhHLZHcQdhNzpj5uURBVBsaFQ1"
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
