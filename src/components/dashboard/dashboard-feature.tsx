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
    "4uzn7KZeAHqVyEiMwgvttRvVb7ESnehsZErytQnYjNLZuAAXsTVVyf33e5iZGYY2zQsNRuW17ddeQxiJqS5gXQtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NaaT3V7VmjpcoeEw6SATvPgeJCQMgp3Wvq7K4X4swVKx8dsk9pvi7MUc4DwvkuqGNkYL88BTDVcNp3Ccpk3GkCi",
  "key1": "5oUibcBbqxciYJpdFp4Lp3asJtk1iArVcnkReXMRxmiX77jH8uAqauRycPTFK3BWbT9RSn3crDmbjRTyuFkfmKof",
  "key2": "5NJnggyG2DMiCeUvhb9aTkRj1xwRexfqsdUScs76r72jnPwxayMufbxorrEPbksrGqXTm42hiMQhpZTM1DmLVBrj",
  "key3": "5cg1dEM1NSvLefrPcHX11UpqvMgFxU71bnEJsDkPqDgi6NGZ4nsNRfCncH77uqLwPybaQJvYn3GZj8FmSrbCPXpU",
  "key4": "23hNhxWPR53R9A74AVeh97whnuy5F2db2CE7oh4c5bdrzwGPLac4wD62QRsWW6HkkCaqbdpr1yFNaPixh8KtzKXj",
  "key5": "2vrWbKCykXTzXoqMic23dwNH3QsSSo9NBgDD8QzHDxihXSSV1yqtAs5JrJghdey6VbAXK9WTjHWMbSq46eHB8gfr",
  "key6": "5KSazqUHJ34PDNuFUgzCCfdNHbaC1YBbGjPeKRf4hA2hhVGgS3ixoC5ZTK4MJkYom59FXuDxBYuCkaPZf2dvNnEb",
  "key7": "5DBx2AixTs6vXFXaEr7CswEQhU8D1C7nSrCF3UDGP3W7Hm58Tskt66JnyqdV7gaCbBfoGCJLkPPfbq2br6SeExZ3",
  "key8": "5TEG5fNne5FhGrVLaTLJenwtZyow8KvSnjnd72hqqbidGn7f9c849ythifkM5YEcp5XauWRkUNbvJ7mztmtUA4nS",
  "key9": "puKL6g4UzUZVDnLC8sdb62y8n2M5iS7teC35M7kSxns6XHAC8KgDxd2Ug5gPJZ3d1tvaA2FBCFShQVmiEPcmSyq",
  "key10": "AFhv67C26Hb6BmGzwPzdEDRCsJHYD2Yf8ARrwCa4Mbamz6nmQY22VAew2w74m3Lw887keRuXYmu8BGQLGTyaDJT",
  "key11": "2Swh6NsWTv14Ng5rEJxTJaEZXtvUVvogqxC9Mz4xtEeHMozn9a7QusS8amuY9Q3jv6gmu2Hhe4cm8FgTKuKfPcdH",
  "key12": "So7Se4pNPWFB4Qr23NLwTYR7Q2iobqj7LATR1iRWt4chbBVECMrNreV9s2KTaFtMuhdxM7S1Cm4fDo7wUQhmdRa",
  "key13": "zkKVAbejxVEF6xNCoe41RyHR2Y9rcHqBFCjwRECU1e7yXkruGdkFmTKiCATPsZ1E7s1Gwxj6nDAJUjkBN63iDcf",
  "key14": "3HBikXWdGLkMhNyzro8agpq4mtwPWmVEQACudCtkXw4To4k2NRiG9Ja29ZAZMpRK3euzR6XQRwmcfMB3mzH1HrQM",
  "key15": "3hXcAxsDWHxnzQoniXZxSeG2dghxZGzSh6EVFFizx2ZpeixzvQZmToxkkpbVQhpN6i1jTf2E7UpjAp2n8vWYBhUQ",
  "key16": "3bEQAHmaeKubix83c4scwerJMCA87PNy8R2vNdgc5ryKtdAD9Fed89FXAAVFYQw7WW3eRJ3jaHanbmnU53Rf5DnU",
  "key17": "235tRrwEMCHpPKXDAF8BM2JzbwEYkebucUU6Lqqqa6qimiEwqq8heTSGvSCMNZwTAUjcaX4YMvtyvx3Yzab8WwM3",
  "key18": "4YVcGHE1kLfWTp6Bp1NKBukQakwFcEotC1TvznvyUbDAaArq9QeaN6NTCMU1USWkVz8YCNkke9LPRoP4SH4VDagL",
  "key19": "3csbAe2YbmnNe7YNr3wu8YWGkM3ts1GAuBVCSczL7CYEdybQyP3oU6MqQQgudMGhSd5W63sD5Mj4MraSdfgrQNaa",
  "key20": "5tTcgA2eKJnQ2p4vnhnU2iLU3h6E2sY7Q3s6mkRhMy9KAH6H6caDeF7ZtGYY8v9vjTbohK9vST5GDaPWnKEjCPte",
  "key21": "4jdxAnmvhYXrSvbhu174ZnJMxPDaygKdiAGHTN8ttGo4EzvpbajNPLnFeuG9DQy9kQiDiZsUyvxDKFWfLdnU2nNC",
  "key22": "4ZvmmphmK8jrHLgv3DUrr4QfWJLJ8yFzwTHVtUSXqM1RgmLDdqaeag6LQG6mK7PhqMmpcNh5xrSNYStQZHhws6KE",
  "key23": "4YavCztcCHkn6Y14oYHnYYhHGjJaQPopVpxo87ZUUEtWL3zu1mgG8tFmHLUC5uKBgWSoSNU794NAWv6pTNk51BMc",
  "key24": "WTBaKitrFQUFa6sy2p3FCFPDDihTAQ15shTppxfwWvA1qMGJUGZqFQEXEboNCUenb1ZugK4gXBeVA5GEEmxU8fF",
  "key25": "4MD6kU46Hy1pLJj7vmqnjJntndDdp885JwcNNg3Rs67A5Enmz5wyDV7HSMt6EAQTfujAU5tjvHKJgzvisi1PLWMB",
  "key26": "3KH1QxcgwNRD88wFztH35gJzgFJeeew2oiNgYSp1PMpb6yQ2E785ysSNVNf5V8FN1pLcFDiwf6u87BJw376f5iXt",
  "key27": "wfCEQStBE8G5GSEFVGAnSRRTYJzTxm1bG49CjAkbMCJpHQG34onW39wPaGaehsG9eb94FdF55yfZJhewy7bfU6c",
  "key28": "42jcGRkGbc2RczcHYNsRGSj6QBZEhGS9cNe7xv4R7F5oWZ5r61hkwEX5gWHRe3EChEvWNXvTMUP7vQk2F2GJeikX",
  "key29": "3vARUsAZpm1g1qqHm3uS1UBrau7QX2yhT2ge6CiVQebdBgKYN4ARy7cwDPhenPjSjuwwAxCxJYuzSfQqc43uaykn",
  "key30": "3Sz2JRjgzyQjagqtkJgFK3Gdo1cmscnMiCKvoxgiGZtbpCLN1Wz2vtZGbvrAzvengCmqy9MsGCdawmSv9X5zryZY",
  "key31": "58t2zSc7gxUQavCfEd7xCnxGEPKqrWj4skqjUpBgQ8JbTVpG4viWgVBr5pEmESMfpv9fcjNbG8HE4DA6qgvzpvow",
  "key32": "21fb6fWhSZQepZWy1wnc5BYquYP5WiddVk5pb6wbPYkYBJxL7UofWBsaSRYosXUA1bLoMcnSYTNyna82tkHyZfeE",
  "key33": "e5syN8yTXEfGotUHTT6rRwR6s9aPZ6K3G6eGHvXxEcPaencA1eBbMwRHHUL1hBNzzPn3vXV9DnQ9eKWiRbkbHJE",
  "key34": "2LM5M4QQrfNX8b5SBh6n3F3VPs15g6tC7yfyr8vfeJKbLVY5mo4RzcRLK1QngL2gV1UcLbjGgbX2TESsWYrBeC1a",
  "key35": "652bMkRnC6oRev1CpauqVNSmsjuxak1N5ZF3qQE3ZPdLxYS6xzy78Yhy2ZxEoFyQEAV4F8vjXY2Lb8ShGRgVbobu",
  "key36": "4syFqXb54hYVDBTZTVQSx3mBXNyCQvHik5NZ2XYnXZMf1PAfCmauAkCbpEFPpMqaN3cvLjwwUBSBL95mYix1HHbm",
  "key37": "u5RonqbUHrg7hXzBSqFEuTmreCrThmRqqHUro6CLf2Fdq4qp9PHeysxqJ3cUgzJrq2LVJxqAfDic5vRhMJDYLPr",
  "key38": "25anD5DB1AWfMHaojZdTJNsaPirScZC9knGFcBDgXwk3DFaBMYVpyzF6v9noE7ryDAGAfpP4CyP1x9jcon1mBgQk",
  "key39": "25u7JfgA5KKHKiH2JN23ktuoPAsmajJE29u8iRn7iGcezw3U6ovjfE19rm7JzbD5TEkXaDERcDsMdHJr8Q7vSWQt",
  "key40": "4KKCANXPP3t8jRiLyjiMYd27Ks8Tz9ZDAjhQmHLsG5NXZ77w5XX559QjZpPk5VLFfcXHxjiK61mrsgusevLVyYqQ",
  "key41": "3t9fYBbes5BhjLasjhKdU7Vp7VHYzBdqf3AwtKov8TQsxKTW4rGCCBkJQGJdHSnaeyBxsVb74gryffVQEbwzWQSq"
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
