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
    "5eea5aHJhxCMeHFLJXoSDXarPSsM5oUe6RCTktqHxC59GGnndKqE9YUAikmjk4e5Z3G5KmmRdBjta1ku7p3dZfBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsWpqFmqpRpRamc7sfzDcWNN3pkNCWYPDEUCvXasVp79kEtFLgwMgppbH7BFFiRAZ8meTrCEeFfGduhUXRKcmDZ",
  "key1": "4GZGrAW5NVa5pBsK8635ETzby2Q1w88FPEE6ApeebLdYNMd48RywKv1ByWY7kC2aqeN8jn8iEMNmDQFse1cqx6Xq",
  "key2": "izULD7EQoZJm2DUjbtqnJgWqTY81kbJ75LMAH8EpxpNqvrRpAqYB54k2kNkNbwMDxzdkij4zyuEQjFzenARnPbD",
  "key3": "3F5YoU4HKnF5KYwtgjcaj9Co2xj6qsKayjfrQGuRwG6LzjEUdx1MGR28Gb9KJ7akTZsRn3PvmJwafHr24GKZbtPg",
  "key4": "L3v6wiMwQF8GbGq9jsQNEN9h8nH4mQ2fQHhRm4quKLgQjDS3GW49UnhHvbyPX6bAPP6GXtrksuSneab5Jtw1iKc",
  "key5": "4uJF4ZQJ1648aKL1MT41MYCY1yKubeNW4AzCpRiNKq7JypYQvEAvopCt9zbZbWerb4Ufpdkt7pqHd86yvkcgQ2Vx",
  "key6": "5B9wuE8iSQqSJ9BXrNgyyPaBq3HjDihJsNxdB6eUiwqqpr8fb8RCgAgcaZRe4NS343xEfwWEEbK8MHN6j9uteRVm",
  "key7": "4LJCCMhhJBzjsU45vGWA22rnxdSLoEdYf56oJCRXk5BJ6WShNtkFyc62NKRA2q9DwaMQcT8aAVVbstavAJ6ax7TU",
  "key8": "2EZNzo55tTWy512jCTxuG991TtPwHTWTE1DivQX5UwAypFXMq3Pb4NTM283VjBKhGtJzp638N3MaKykdmzyHYWhM",
  "key9": "51c1wMbWqK26L6oJb1me7EKPdn3Np3X8n3DRFpLRPtMneUph6Z6JnyQB7yN4oabztW41dXezCu5go6GMgDHU3DMm",
  "key10": "56bkYTyFa9smgAY95FjpuswVBH1TFA7zAHQKs8pXJxf76podBi3h96rsmeExSaHVjsHMHqbt9KqGqaAhBacPifeK",
  "key11": "5PBKqhrXqFNawbdBgQgAPWGUbSUChtZMAvFAy6uefjk8tgYo9wC6CUPsmq2DQxyW1iAo3VsTXYyaHCzqADRA4krJ",
  "key12": "kPSngcT2KMYBjXrs7sLCM7XWyos7Uz8P9LpgVdbbbvoF1cTxxm16tnkuAQykUpDMjq9PyBQn6ezce5oZgppRH2s",
  "key13": "49ixh8mETDQEZ6W8nun43iADhrfhaTWZKMb7toBeZTdcbRmXcxNjVoZGLAJu38WaHA5pSJxymSLMq5U9M88pjYm2",
  "key14": "c6LGWFi2D1LR1EVkfNfpREr9wo6q17Vn7ZDurfsTZD7fDo3yfQLYDwqtU5C4N8e9a46aUvd4FvQ5jHetZ7YdhNZ",
  "key15": "KT9of5D5AuhHDS427UJXJxEVkPh2d2PDVbT4uPKJcug8z6RBQKvfL4yeDdttWanqnXg29egpiEd4cQ5bTZCaf85",
  "key16": "2JBLFKkhFuTFRK27iSQtGZkQ6zoPxsWCTn2EKjG5ncj1UqNqQqq5CdB79MjdjNB8d8BshrssEE5haZAwFAVGuSFq",
  "key17": "4HfGW9mDxmgEA82R1ZdZVKLmBJSBvWst91TpRzqwgYfWEQ8cJNDkkSKxQyqAyZJu9EqqLhK5pppg9p6L64gC8sxp",
  "key18": "4qVb6qDx2WNg5GM5AVsUa4SCTPkVFuNkQTNoD1npyWGmqnSNye3nLmw6YHB2rQCBLK9HQKLhmdADDv6kqrq4rxyJ",
  "key19": "LaYxsCJTPrsEyaw37eXHLHSchezra8H5vcWiFtKzBbXXMMWFEYccAcPbACVJjqEWsUQ7vpe2JR8eSb1SyQjLtVg",
  "key20": "2b7HVjZUaV4iHqVRbxJom38N1Tvr9j8uwtZ8GdVW74FJMmbbQpLgTCw8EykkhuaSdVv9BRVvtbKkynNJ5RckXubj",
  "key21": "34duc2yJHxiZ3gGcNBAJCR8EVZVpn4Jj9ebiMqgS6dTLV1deU1x6JBCQQCJBBexGm2njmTDG4jz35YWftV3aN2iY",
  "key22": "4YniEBTL8LZrPyCioJQKDqX7dozhd2AbZ3xQsuKBjt3nc3kopMvvxZyJLZ3DfyMJt9aPiFptpXqV9yyGcJv6cGXK",
  "key23": "2abQYX1R1Gti1LrWQZeAVpWjV5XoxuhcxjScBjpPMbjvDtx9ZzCSvyP6D1LapNHML5Ljm2BBcEcFSYAtjQb4pdCQ",
  "key24": "4MK4RhZV7SATccFf4CJcjNvc9mQthE97gjjRfyTPa7eBiLReWwkPtjptZJnYQq38uov9wwg5fyLNxFkTdshdXG24",
  "key25": "4DH5t9ZZ1jsNkjVpGrNjjz5fe8yAX4taoSLWMByzuKMCNcViYfopi8amZVMoH3hkKh6QTTuMtr3Qx6LdqcfaxuJW",
  "key26": "3K1yVAZtXHtWbPiPBacQkeVphrthC1LoXsvCgPxURQHmCy82LNeLfGFLghG8zzfoHdewdtJ1pbE8pW7tMcrcrxv7",
  "key27": "5MmSQpQzUSiYVFfskRdJcWbAZ7QXiqm98o4rrqa2KbSjRczJvUbtgRL8QJNdYNF4QSPLErC4hr12nusRTB1bSqjd",
  "key28": "3k2JGY8jahRsTxyUsr2tUZhre8o66rsK5wzNrbof1Bv8vVq54daXDmxGwWWE8cCqo6t3FtAQa6LUkhQSurLVPGx2",
  "key29": "5s73bNT49NVfLzHpTHPCotpYat5hPFLHcrPq9QhXqLStAQ4cZxS77E7hbuLBFp2scBy4NtRkMC4yrDX89QoF8i3g",
  "key30": "bJ8EY5tZcyVKxgyGEdomQicQquq9pX3baVyQQFckGen5yB7zSoRFYwp3Pv2nsa8wsZnziB4Z6AJVYMSz9R5wi2h",
  "key31": "33DnvvgrmbbXfrQTLR5uyA5bn1eSfYPgE5LzHDaLt3NLuagXANh31s1GQYqnMGE4vxsMju35ZbasFyRhtcYZ2TMH",
  "key32": "4qosbRYRxzHqHBrKgDXw3kbmxKuyMuLhKbS89RbLLCnj2MdbrEv58Cnc2VSuzAAgv3dXENbmjP9J58HjCR9ipcF5",
  "key33": "2XPhKF8aWNCphEZkRYScm3khNovcgYK7eqxNT1inYcAkKySA66cnzmYSfRg55DfNHAPYBsEVRNM4atohppMpRZ4B",
  "key34": "3zPTqjAnYXNScQyepj7z5JsRcgNr7tsTpTXfs1m6qZ79yLSYr6qS9Dcm2gKHCvA4jYURPG2U1Gm9dkSeDUtk4YDx",
  "key35": "2wQNuQvVvjDuULKCQhiNnxejVTm1jvDvSkz5LGzExTZPKKjW7YEqRQGR5UTgCLnf6C11iJH4Bceaair29uzD4a58",
  "key36": "47P7b8UtWfyUxMKCkjYt8dRXLs4fqZoktWHQWTYJXyBeGn9fXHxAUxoD31L92oBEnYtpX9eLP7L85s9XMLEELDhD"
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
