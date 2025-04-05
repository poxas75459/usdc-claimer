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
    "kkrSxiU8yXSQdCvPPrXDEGWVXp9d3NjXCtKrQ9V4TGHysvNET1VgyFvqL4EcKi3wwxGrEZBCuSmeK6VXsQLVmuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cY7u68rAoz6ocyUX5oz6heVqua6p7wvcD5N3SiUoJXQsQiF4uBhhsAGgbFfijKFEnQ5kAxzxDHVkc36wMvpFBSU",
  "key1": "5wMRLUYENyi8N8q7VmKRDDFNkRMxs8DVvS6AGactSx1ny3khxu67KqfWTXmo8jUsuEZJbraK7HwAWNY2wbbtmp6U",
  "key2": "wTXrcao9aFBMKMPDFgHrzH5qnHMxA8N6PRjWMT4ZDEM9PEZa4BMTyMLRjF5NgwuTCP7Hd5G1wYVFVtWu156PfVM",
  "key3": "ouLccMMKTmnLaK5hF7jEizRu4koPnw92CS3nURfbWmj9mBXKrkwrWXECN1fMSQefdZbwZHVKpN5QuZtuz2ZS95K",
  "key4": "gQp2ECDeMuegeeTMXZddwhXMhxTgcGW1MKgCTMcAmejAWwRo8btAypbpSCRwQTNBCP9XZ3k8ra7Smx5PcqvP6BP",
  "key5": "qbnf7U8FEdeJvQ6oRm5Kd27Wa9Pe5d8X7T969opoCWytWk2nXDjT4ERF2Ekhp6BqedrzpTnbqgRs9pgnLANhFeU",
  "key6": "42nT1ZyHf83vk4TgYhA9vaiDcqtMCa5SSffQPWhQxqwfWL5PcGyp3Mw3kA8xHzJDQAzN2NjEMXEzRjPd8m3exffV",
  "key7": "3j4yCVK5nAgkkjERqZmJAMQ9KFtB8MT8uyFdntKbLB2LZJfNatxzVZzKro3YAZCUTtUWonZV2EqGTjfpF1evuotE",
  "key8": "474RcmjZE9kvpaLYurbZM94zmoQE8mL3kvACTB8QhaUD95xPWf8mQqKosUvVb56SJcvBVFSzkYqfedo3T2C55TyF",
  "key9": "3d3466ThW9Cv8LbyufgJH1ULeZRjHBfCscXJb3vSV9BbXxaoJVaQGTvuXmHmwc8g4da2J4W9tuC6mGmKQfaAVpLz",
  "key10": "2sfzTNxYhCAFYbPkKhDUqLwiBPCcH948qtYFJc1Zy6zQSxZcYn2EABnNUXgGceyJ9S5Hyq7EoCmTncwsN6v9wWkp",
  "key11": "2Cgrf4P6TbFuBBDSxvXvD9VG7hYTcHjAo9zLCMsRoAewQ1fgB2Cniw4LxppanYGRMTaw2gajcJjm2LY6DPmSib6M",
  "key12": "KZfoAR7qRtexnuAm3y8ttTR29eTBpdwYkCTufokVYXqe72VkkVncKRZyFxtLS6LdfjxkzuyVwTEvPuR1FFgUHoN",
  "key13": "27mkuA7v2iykF2RoDJYaD3SvuLnrAxmNpMimfX3QoKxHwRdusmSb9qqT4EH9s9E3dhWGKupU6zFoa1XebPLiDaQS",
  "key14": "r9ATxzCHpE4ZXgYQCHpuJVMLsuiD4GGsR3EkxjeHDvcHqJVrTDAEJE9rLuuatjAdNQpaGKZFFG9nstyYmieQAe6",
  "key15": "54NSpocR7NDYktReYuZoALJu9fwxyHY7SryF2JG1LswzCTuTT1kwMQKy36oP43hFCYLjHLEM6649tmuNcbou28qP",
  "key16": "4DBMPXnsmH46fd4dxTZtY87tV8pUJApFRdoR8cBE2yv3dn9dmbwwieP956KTua7REByV73UdpYv87YLegx7JJSuA",
  "key17": "5N2HZaDD9RtNEx1sDWF8J8atccZAfwdWhNATuM7j7cVfd4Gc6LRm5LwCuf6v83D8xBpWPHhobY3EhKRA2weyQ4Ks",
  "key18": "4NX64sNFxDKQsTbKmxVii1rSWGkaTHY34oKzZhjzW16TgfQwZFdaNwrWirs3u857NhHbDZTaRcZQHhwAgsiFzetK",
  "key19": "48z4ba8uRjAMyPr4RXxwcgcc8jKGsHMpTLSvtP4nMHvpgUYq9A7SCtobKzjYgnkbQ2qe4hZzwoPJVoGtGBcFDWxF",
  "key20": "41Fo9RjubR1LwJUgXLafaTbj54eQ82fhf6r3dtSjNXJKx6rQMtUsqRvJ5CSxajvmqLFSQVuvNr384NwWWwzR4Cya",
  "key21": "2HR76YaALGRHh1xrQhUiNo16p6gsDqtgZ9tm5hVnkjXCbDhoXqMjbvrudbgPvnygNdWDc6LUkpbemB4xzrxDSkZw",
  "key22": "5Zw7mf3DJveAnfq6bFYZk8rdqUV137bgjjrcZ5GfKt9y4ZCZmjjDPG4FzgFXFbWXPEH13EptRYVnSP7UXPt6WkNH",
  "key23": "2A5dqxUFwPJwAYoqNXfUmDR8vdaufE6SCPQ6JS5YGWkRAWv4QhSqkyAFEWU6gyGfENYAgMEg7aoYno1p3DRDLAUs",
  "key24": "3quRqWp2hSzFqhwZmChV3EqZkBiR6gYYtvi7x7AnndqPbBTwQwsCBH92nSa1LUcRantk9k4GUfQQYdu5U99UJRNM",
  "key25": "4oMNZpb2Bp9uHvhb6Fnzb2sGJay7ymUVHt8f32azSPchaQGcQk2DADkh53MgPbDLQqWjSBUgvuqDqAj5J49RUCB4",
  "key26": "5KdDdC4JraanN96T8T7jPrK6ar3VnWFpuWR9qW6sPDnea9FbdkxnPV5BT2qsqGTBeLbX3FBtHC5scyj4ofeJWvaX",
  "key27": "5Ud9XQjGGJNyKLVQHtuf6cUhqBzS4MKHGy2KGwdkB6dcdGzv6JDoGn8y6zR4h2yjrTMTfc293t8YAtbU96Mpvz8o",
  "key28": "zrQMCzVJ8Z6mZnkfgaNzib2Yynv4o4LwCxkHqad2NmFmfr13vX7PM3sbkVMyonwB43MMH3JwtFMGmH58ihSReBX",
  "key29": "2EH99pEHhvAzfjQYcsZg9sVbXfRXRp4DwHeHYWcd2A3guF9VPr8STXpMgepxPjE2ngMRj8STev9eHmdrxcij6Fb9",
  "key30": "5GRSwfMnbehSaEZggouGrhKyhw4hHiYknuokDLZjBW8Snx4bCJe4sDVbFoBzJKoAQbrADXzYMeF87KgupEHrUsCT",
  "key31": "2uuxUo7eHXxZABbbMecDFdUWb4dp7FknAfRr5ZA7nPXjh4LYwApGZQauBmFZdkyWH5eWJKYeCfLvxDtkU46bif6F",
  "key32": "XpxmwgCMGMkMRxDAvqxPSyvhxhEmGMDcrMEr772HhUotKdmaKpR7SRcuQogk5FZcqkcGVtbA5jtnBFa2APAar2X",
  "key33": "Di32ZZaW7aS5SLpNCQnCXhty1beU2d8z4T4j9DsyQUeVrN1Sd6n1vaedA2zmAuZuEcaYQB2AgFoUvVHi1hdzU8j",
  "key34": "57A2n48XLv1smPAdVsraARssY1agRDJtsmtVMeAEzVBmwALBVtraL73Fy3695YkikYEzvBENwwa1dvevZCDsw1z9",
  "key35": "EaaViXdUi2oDnBjbHdcNu7rCAimePF8J2oq8CL1vHmrkZCTPL6RRSCMGAZbRPxtJhynWEbHtSmxvgzFt8uaTQg3",
  "key36": "3ppXjJRZHEog7CPZfu6npdDHcLaDMtPhb8eSNmqWjxwnfxEH8nzh2WtpRAXurYDuuRbWqNdm1kwPT5P8v3R2JFKB",
  "key37": "2aYxWkt3FmVbkirnrXU25Fvgo2E8zhnThR9kzwFrsb1ouGoKZjBdR7QsniZdjPK4Bonmu6bMfhbm9NG5chJrYasa",
  "key38": "2x4TY4EEMW51QwnjqeNSmb4vSLLMeTEADGHnGq7JoQ4Ag6YqgaHVvF4FeZhXxUvtLhjEzUAMbvu9vFGcaHduMejv",
  "key39": "3NGKUFRifH2tkXQJubYTcqnTKvon16sB3wuFK2WMGxJUHE1T8u9LWqNuAvj1vcMPUstD6bVeAcAEPhJFUeKgXibN",
  "key40": "9r9t1pH9aFMfp5rBoemgMRUQC4syyzKcGVVS9Z6rduQ22P62AavpSxqD6UoG235SL623Sa2ZUE2GPyUwoXhvtQS",
  "key41": "3Xz3LwXo9PmW3Zd1SvAza5h4fFSqwZVowdBepSf2KJBQizAtSwizcUvY6uhsk2y6Sx3vaF2bcLmBiMP19UYvFF1V",
  "key42": "j2dxnRyhVA1VpeGMoscAQG7YkvvuYvR1rosb6fwRxb9WydGJHV3aZe3oda9or78j8WahAVkVLeKeyEoUxcwuvnL",
  "key43": "3AhRzahunPGrbhbBucen3RYJ11AXvPBJs9LykxgPV2JEDA8GLbjNbfuPcVmQAf5QDMMs8vEcbXieyzJGc1LZrfdB"
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
