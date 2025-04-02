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
    "3Uc4YwYPnTH6cwcDAMbcNeBRnCPj8hoqehCmcpGxZgTMPkU7NMTZQcp3WAqm3gHFnr1dVqYBdw18pCdjiwxY9BGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PoRYLCpSNYCtTDYTaFTVuNDULdPqP7gKqYGTgVonhDcg4EGqXk5sGk9ZtosvNobkAB6yGdMio4fDhVhq2gMdoEE",
  "key1": "3G8xQLaft7FCK1tn3v8rnYF5RXe8twhgsTrXj8v5FAbTRZKRcCRBKeFtsSTnHFud17hWdXMjDX38UHTQ1DwzjUGF",
  "key2": "3GGqgxr5zeXFeCtUWMwPN5C7BGbeiL6RNss1TuZMGTPPeiqbT1CV5Q6LbVuXAezgYQS6sxhan8KpFwbowjggDv1K",
  "key3": "34eRzXPFi1RBHnmq6Mdo1mL9vAUj956vvGZbMAMkrbdycq326LCR2M6FXkKjduphfzZPwW53kcA8M4wqiGVkLHyX",
  "key4": "uAthwag8N2BrFz4KRoREqrjJpttMau2Lmzu48DiQi6jwuN7EqywJhVvdbCayQRSRfuB1iewyyFBZ58JWxMr1Srh",
  "key5": "4PDhE7nxtq2vhHQQwouPYC9k9s3gbYZSWcdjJSx9jA4Pi5H1pJWDcTHNjWi1n4Vg1yn5eHJgWHQJLe5BmCBVPJVZ",
  "key6": "43RwXdCc4whAbraQ2F4edSAJAiqKvwZWQweTjHjCiWES3zCYt6MhvZLyfpVFMcxsUmRFNKLDPPvWEidZ1Sv93tkR",
  "key7": "4pmBQF5WnnNdozsEqEtkG9zWqzeF4UMVQ87JZbhPYxkP7Cwc5piKZS59znWHjdRktSMQ16iGpss4DNR1T4LcuLyL",
  "key8": "KUzZ3WEwBXFsFCaY2GX1zH4rWHjhAjAp5MAS1VQmoTE7hE9ts3aUTMptrbVTQH2qGkoN7u4Mykvmi8EsLDeGbgd",
  "key9": "5NQAHTEXdbxZbWP7CMFopoP8HCifSQbheXBmiXerprEgEhmtcKKWnBjrTQFuxTMnuq5bdjB1v97sQU6dVWHTRLzc",
  "key10": "2Q3nnvdrLHNZ3oQ8Kygv8UTS4G2ybuV8oHBucCabUx6R9LSWRAZofVPZ8BQxi4b7gt2t61RF1sKtu91vECHChv4Z",
  "key11": "2vSqTfasYy8EgfqCnuH7gkwEswNAsUTmyUuu3N1H5xAHtdbYtY8GzYkCZK1Kfxa6RuQUn9GwugK7Tw4dr4nqHeLo",
  "key12": "TAV1e3Z119YtRAiHUbYGuPZUncgXTYAB6HMtWJQyvt94xzTZywi8nsUg1Q8fc8kX931sKAKJvBA8ANkSF97TzkP",
  "key13": "55gnuNXgRku6HcU7TUyRByg9H3Xfnjy5XnfNW4eGYFoxNK292iKaQbq7VjoeTE1iK3LfJLQRZ5m4u3pkr74A7oJL",
  "key14": "yCVMuCs8UWdczVqBa8JqmLBduK8Q8yHJnjShGGrgmAktb67dsqao5L7NnPh16HE7i4UZY3gek3vFoJKVGV1oWc6",
  "key15": "2LeQU9UVPWfit1DtQ7maLxtHVpqYKLH8yAVirjVBHmXTqi5TTNUuct331TRe7dtoe5yvaDdFn2CG9H4sQrLoTCqp",
  "key16": "5Nin79zwfgq27UZ2aeug7M2GYJApVpzhL7yFGKYrq7A3k6YqHYUwuK9JKdkWVBWPkfhkMG1nN2H9XRUFynz2vvC8",
  "key17": "2JMbQRYiXAL9ALKJ4bNvNzbUr5wtrBzqJpova8JBEbUuhx9xjUb2UkDSzLouHdi41nc7FXGzGCNZomZZBqPBzySf",
  "key18": "3PXqJSqcPbULwddNQ8Q4dk2gsVvv6KS36J6gAwSAHLdyt4k25EKcQ83CMPeDMLS5GJ6Tc9dweLHjJ4oJV914eAax",
  "key19": "4kSKhFkh9s1mNx7Kh72zA4CmVW4mMBQbrVpftZfhqiCd9jLCTfLNxEKDWojexaGgmAtbVZvxWvnJ7WUkNHfddEM5",
  "key20": "RxaCked98uqRkkNcW6mRv3C6UqyJUyEep73XkhL1bt3hYpuEV5MG3hR9rnMNSTJLQz9qdEDAr5WXi1GiAyPP5CM",
  "key21": "46ueYmkHNx42DEeCuWCoTtSpHXHxnAeBAUVUhDZY6HH9EbXVUcSwz2XL71UrG2zDAP6xpbLo3yiomm25EENFb7Ry",
  "key22": "3KzxVU6u5qmKDPf4YxHDnJk4QV4pVjXJtap8AbVj1GZMer2uiSmLF62GxdjCUghDSLVnnPuy7UtuaX9Pcpkhh86H",
  "key23": "2qQLay4JgdXbruoQbiA1BH6nhrw4iL6782VspfS6CBRxxFBXN1asEKTp6tcFatnqbEQQvhb5jRN6pcQLEgNTnWzi",
  "key24": "2XXzE9mE66zkxd6oxyzFv9EDj3ys2R7fqkEc5w9rHhMbwamM6iZYJz7C7gp2AYGy91jAiVGQK6oa5aUzUXsh6hQ",
  "key25": "412nxVrA8PKFQsXKxCPBEHCmw2Jnk1pn7dFG5Q3g5CxR5JVPNFA7dX4Aq3KfwoPKvN6xsvgjZhfTPcqgciCZbcqg",
  "key26": "2vSLXaEcugFc5chFrJ5JwJJVPt5YArBredvJ6MUJoRsfPPTQ9s3DvU48QQNc58a9pSZYMd7JmCQNNqujGG2Roteo",
  "key27": "2eL5an648hDNJGQuT2KiQLg6sqMce5jiWyGeAXCXbCgPLCn5Gmsidizry5R2Co2WmWcqFJ2CdFoBj1NuY2R6mji",
  "key28": "2FFuLzNXE4BsPN7mzeiC6t6KMeayfTdTLh4cUYinfy7vNNQZcHK7skASaX6hqsM67CTafxr5JK6H6MqjKtD3oXeL",
  "key29": "3ArcZxD6iuojZ5rya1kNFCB25fyJ1pqn8oR82bLqo8eyueoBKJHUe1xzDmGyAfJ3wGUgwkspSMusxWGympbSdkCQ",
  "key30": "4GpeuzvwSmAm1PRXbq78nnQfVgpXFbvUNwDg86pQFCfiqm3WJq5ctXXCPhHmLQW9WyrmR8aQ86Lag6vqriy4c5W",
  "key31": "4hy51UzuNHqzQDhT5EQR6X4vX4PUCBbuPvnwecq6AsQ7t1jaFKSVmxb7EVT3vvYRWTsYqSVApnnUN3KfP9bp6T1g",
  "key32": "vKFjp3YgHhVJSTQdK2DY2qJPTtRe31b9KEbV3Lmmw69v9hWAwdau8KvQeGpYrSqrWsZHH9Qw2rKCmQoH3FAh9r5",
  "key33": "5FFLM3bCPtYBEFSDU5EWQXDft5hDG51oekrA7T4rEqG55dP91FTbkdvhCStraJZjPCsZLEBSyeSftyNjRAdUFaCm",
  "key34": "5o9zspTMbtTzdGagL6Hs83asn7a2rWuv6WkWE3RV46X5RiQAbgafoLszRtmyvi7x1mHuxmmKNxE1Kv6EWiz9LoPE",
  "key35": "gkBjzZtnXRS3PZmE1dd2FxUJQ7Ea8sGnzqGnUHxuBwssTCudRV15PaP68UPuF5UpCM8tD6daWL3mwGSvhu8sK1g",
  "key36": "CGvPCMnaRfqULuxuYM7SusV2qBgKH4wzTfojp4QDvJsBGFHRz1cBRt5zqWmYw7jGqF2pdwjJvuCnkPHSXs3YaTc",
  "key37": "51PTDMijAsWr2GWiqo1GrPepkJrWthG2UM948NbLyayYiHCrBNhs3iYJ5PDqYw9HzN82scGwt9x3uGteDwaBqNZ5",
  "key38": "3NmYp2K7GZDiZMba6mQ9Th7Ju5L6Q1c7DL6pRbboZF4D8ik1WTShq6MihhewE7BgcQciPSGhjCxraF8Efc5dRuD5",
  "key39": "sfL3UTzeLvXczzp3sv4WgjhCJF3GDfc4ysguqAztMGGGvRGj9gHsxdTTmzS4dPFpjWKRnBNtTezme8hgXtCXPfV",
  "key40": "4ZRc2NDhXDo6mwRLQP2e8cbvAAkVY6W8Rd8RbGirt6KhZtFn736PCEdTMrY4XkCaFnSCEJXX7KPr11y3zeEiqdc",
  "key41": "5gbkWJrZn86HFW1h2orKTpdV5ZBwURtAAadiHELrmBDzKVgThAzsCm2jiGkQc18F39WZo2q33stKfvf2QJsX8tCc",
  "key42": "kmmJviBDVoHysJCmoeAeHES8Z3y1rNDfSS87AfKDbp89oZ1EVhtsPTxUrLPj9bB7JGPTYCtytBhZCnw29g5mV3y",
  "key43": "4d1sMgH11vCxeVM7mtQfDwXrKbH3yN2TJQH28RB3RyUqYmfYahjseTtQR1ozWzjBQqBaA5yMvN9YHzcf3gH4L7dj",
  "key44": "5cF6cbjEmUN39tfCbRB37zLiG7hZAZwpJdgV7DP79Yya2EBMQLD8xQrj7qB6Y8PZogKHFR8Ta24Bp28qinBxU9k9",
  "key45": "2bzWju4ywpK4xExUQZm4MtmUs4ZQdWBQZWmggG96jpHuPWtoLFtB9jo8NeBLiF1MdrTQ2V56xMEqJGyqDv8RLF6y",
  "key46": "2PnLUdDfMQtbZLRa6QuvGJQxsnpNYxd8yd981faQM4Rf597rwifWkTsfjMKqm1NH7dEgqpu11oDKkeVJ87fBjWRZ",
  "key47": "5QomaLjoxwgc1tkjBjQvU4nMMSYjTWu3a4mKujqfTQYPnhyhRfy2gb9wUjJsEp2L4dm9rGC7AjTC85i5gkAoLLjk",
  "key48": "5BEXLFsKu3aKWUQUAnYwTshDuH6enkJSGQt5P14fPcSWUB589aBvokGYJ8TD3mmGd6849JCTt1KGbi55NcS3wniT",
  "key49": "5qMJ4SwoRUsNatzcjcBKVH68NhZttLNjVN6U8QtWcTLtz7r6oYoVSwDD5eSrRhjgS2CfPXAmb3sPjfc7yKhpHpVW"
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
