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
    "63pVFzFscGq2s2cKDSJtjDVJ9UfFWwsNb6pQDDf86c9jTFtWaTJGTiMzH9pBbvy4KFd6VqbpKodSG5hQyazTKRz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5biZh5s1GvAZ6ZCpzJcSNfCeFKozLt1sK4ANSHjPqgqkJLBoWTHj4yWDs57bZgw4sySRzmhEi9q4Rbmy8mE7ofYL",
  "key1": "e8S7VDirG9c5UYwbm6MeYxRppYRwVbZUMBT16GYcnUXLXdnfmHxRS19nM8EQaz3QEbhLVvqCbhjhoRQMsu9S2us",
  "key2": "3dRSqHwBinVJtCD71HfjqJrWMd9KWU8D5HuKkNGJyu6gNJDiQVV2ifDAkqSQqb2XUZdGXwZh3dkjnXn2YezRzHdY",
  "key3": "29yAFme4AWZN1dyEDRvs84iquPU4qjqtphWqz3Bu9wrLXyz6RLEabsfEjYMm3fDcmRE84uYxY7TbtKrDM7qZmuUF",
  "key4": "ZuaeBnwr1cs9WDBCZeQinaBttpCuZkmb1pCXT3MJtJDyPNvC3xGREnhZgkUy5FWN227agtJeFLquvrVsJpKo7Gh",
  "key5": "2R3p8xWb1U7dgpNvWNyiEcPG6XZ8CNP849VN7nSteb4qCHyuspcb8MfcpavsmvyWXAbgUCKVKiqbJ4rZhZa7dCfx",
  "key6": "4eLjuNzwVjJTECmiNB8zhpBZaCJYhH22xELPPMq3FRjiV2zhKRuAR26hfzonbEq2Q3eMk5cuDJgdETdavtgpdxVj",
  "key7": "4QLSFmwQQ4g1weB2L1pzFJmdxdTkJ439seQFw8uc8JMpe4vvhoEfcGgv1oYgP9wY6PKzofp5sM74LKJNkNjvvLwe",
  "key8": "37ULAu8uZXvD6vXtP8SD86Wf6N2Kp3TDokrUGcjV7xqobRQSduTx5n9Zku9kAY9ZxbHzHEXqxhZ1XeFsHLjXYbAr",
  "key9": "2timQu6Z54Z7KKaUZ27YS6CR4jmCWiU9V5tsw2PweN8QBTjxFeoWaCL6tKA8ngwyUQHzWNxWfUCLNpxxwyp9BYWr",
  "key10": "js4huAn1aYkkBY2W9yAcGE7tRGE471HrT7GmxiHqn6GpP8i9v8DqJZqDVvT3a9p6BifuJGrUBdCMfgZd7kFBeh6",
  "key11": "5vLSmR4DSGE3zVo3g4V5ebNcb3TbX1BAyYB2vPeADMMdE1yF3PbPALieLf4s3R3VVvE4QZUvPv2NxHmtH4JTKYzE",
  "key12": "2dEo7Hts3dtZtCQjs3Eu1D5PkenR1zgurCcTdoQw61NjKf7YmrDu5RQFAntsYiyoaFf7u8xCSofbnP3Nuq7eKbb9",
  "key13": "4ddnm1VTX2PXxP1EXaeuet5RCBeKfbuis5tpZVtSYi2sMMGJYLrXpAh2JJGYMprHVVeSo1SF7Z5KeHAa7Qx1AVYN",
  "key14": "4LwjBim61Sjpfx3iitVxZMjvf3hiN6njWb5qrjVDE5D4qmW1Fmmn53bdcMfDfBHtmVFV8uEKTsZRzi9mtCud1KJ9",
  "key15": "eLwBdHE67n1joZexjLjfrcvk1xzDpr6RJ4Pa8B19YydVU3zrr6eV62eSPbDxX2fftR7pTRm25FMygS7Hcj264hV",
  "key16": "4zBR8kwfRLSbWRZEDxk62vQMbqeZVJySg4XSXn1s8JxEStSgSQB41Ds5qr5EmTSL1ka2t6JzaSdkd6GBG197qhKV",
  "key17": "4ywRA56SbAgKz4sC9QMMYgsbMikoY7CZ7zGcm3tPc5FZEJYinZmJ1rFGaeVFV7sPGvy4UaRK8wo2XYNcvFqJa3YQ",
  "key18": "5y845Pg1eo6HqmuC7mLh3EwTEKyX3dWiTVTbg95GbXMkEgvD18ZaCfhMTe5gWUxQGpgM4gasevFRxmwEBaVkPon7",
  "key19": "hv9jpEUJqJYpSumh2STQ15NA2pCjZ9LQACePJFcqjCMX3RQzHQXJhrZzQttgyR2izPVaDddjtUGBqDLMmSjmXMQ",
  "key20": "4b9pCEVaHccxdcxG9r71WAMgZogsQ2uwCUkZUfWE4Wdtwcpi5fnaRZauu7F5vgv9mt8uLCpogV1hCfC7m6XGSjmA",
  "key21": "4UDU6hsxXjdKjmXF7S84oMfy4vsF6yf5Q4bR1DQ5xDEHdgmsxa2otcTJzfEtc7AEhwoAQc6mitBCmwS71G6sMBiB",
  "key22": "wPDCPr6qT41x4DfQxWp3DSZdhJDmdf4q2YXPeDy1iNFsCXDb8gnRJ2ciRE4wrGuehVBy77F2TRpnHMDmR3p9eYv",
  "key23": "64G8TY28KF6MZeMrnxyXta5RiZ39ykpsYRjb5VRigr85vRvooBW4Wb29kP5VAdsMWRLDtnZob84Qhk9D7yNQ35sY",
  "key24": "4gLJSwG4Dj3w3uoyKPwNJ84EV9mcoc471fDeQBAGRvw8JZAaGr3hZSSK7vc6xqX1cePZsepf5BrPWQV1HBauoZiv",
  "key25": "5gmbuBNdxSAgTu2H1b1bFWP3GnfNcw6dgsjhQ4m5cJ3ArynWiyYMP9WX8H7Dmgzp7XjQ1hWEhFH3N9NLbNwBmeZc",
  "key26": "3kneuADnpUywehG1op2i2SYyEB8jZi6biudmsSVMwU4LWquwSTk6SmcVVsVwackUsFeduhrjTibYeHuGnS4VmgYD",
  "key27": "C6qJCASEBa5xGWsJbjFsFmuuRCs46ngavXfJD9V2TEP7B25iL9RXkQpAq2AZnuJBAxWBo9nXxmF7SRNknoSJwuF",
  "key28": "23vaH2J1Jb5cRcPnaC4yrNBiSThxfE94pc887VxMSp8u8EB8nPHf8pKPKvVbioctcLGNRXCyVUmwQRPJcMXgVBXg",
  "key29": "2EKY9VfoMfxcrkN9u5TDZVtMzzLQXgd6ZtZQuKACp93uEhfmWGDF1i5pFDZ5VN2KrCQMDrTxQiurmY3N3oS5btns",
  "key30": "5PinVp7FYxASdey6nWw8Z5EExZR6jdphxEgDkwwZe15DPV3ifMxtuYneVRkmyNbdXwwXMBLdbS5aZnNJv1K8TU7U",
  "key31": "2ZqB4uejPHPYQFFssNP9eRta2UzmgJcysHDXLxkg1EymiJe3FRWHxKa8j4rJRvbwFF6PtYebKD66caSXB8JnLW46",
  "key32": "5p3Quy4EC8sttGwWUR5UCk8CVU845YXkWqybK2VJ3V9Tm8dtG52jukdXBsfKd2jMSexPviqPvYiUiSB2c2hre6R7",
  "key33": "wGMNJavMrpyJdyf4Dm6y3nyDL2on5rVwBKxQssXvPEemDUg5SWjRgCUNvdsrgoPKQaEWdAi1tDxFg6rkKCWHwnX",
  "key34": "2EPhsutVnfVtfyJQgi1QPDHVQFSy7NXNwJudk6JVyABBQoaegKpqyPpbAWd258g3P59kyDq4NTd3Ay3m8CfFZ6pA",
  "key35": "43Xwcr8tXBMaswur2sUwEzEqurLna4azJ2q3WeEiHhHyA2G7dMMSjv99m8j1xUjR4xBQXQfSVsCKe79YEKGzdR1c",
  "key36": "2SYFdjK5xCXgje2aqZpmPLmhDmWN7SynQPuRXq5mvi3BqvfcXhtikt4JM8Ema7EiRXBtX1hVjQoJmgJvgeSY3DBR",
  "key37": "4v3d3Kx7cpMdHVT42AdtWeKYvgiA3MyQiy1aLPZ1kqV2rKPsn4ZkhKkZukB1F5S6T4w7wGq5TpcV2R34qqwgU5cK",
  "key38": "5ua1KtB4CCqogW8yiJYsbEGyAE8abs8a8XqKvZgN5adCKUtBaVXeeGEQfKcfCspV9Nwoex5E486bQuvxMZTcuB5M",
  "key39": "2WwBm3oLQQYDiqxeSuMrU5C2LFk12QHXjAtMcdxr4GSwG4xobQoB5zKEFf26mcq7cTkjYPTG2EBsLwyKtnrd5KAf",
  "key40": "2qqPsxJw3PsMwHnH1V8YAmWQh2ND7YnezeczP37RoAY8mbdkZsbUSMASdbJQpJqaTPryYhb2o78MV6WjxMAK1168",
  "key41": "3ip9MfJDtqkqDeKRgjsYat4KF3a2iPC3CpQAWhftFRpqWu1VqsPyaqiYGVPRwsxF2RwUxQhonmnZproW27E55ujK",
  "key42": "4hVcS2JWC6oGpBKT87KywavTao1uq4eatia5vjXcV58ftC3AVB5V7M6BKhYnaqeAAtPeE5WPATGZNNt2cxZ9pvN4",
  "key43": "2U91QMniSbHk8UQh2sNyknB22iYPpyGuA2pxHPUZvSmXeGBZcUoDHKqz5PW7Cf6L5tYnpiyLATmVuyMMigw7juuW"
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
