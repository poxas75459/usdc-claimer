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
    "4HHVgvmiHVgyq3uAbMR7tyjF9rcUxMAc2EAyvLbHiLoL8NkUz42bdidA7QRDhE3DfuPZ2YyAtUtFZ8hTS3ucZLrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWdN8FaZBdimc1NSkkUdFJrX5cH2Wp5rgeTwApN9JYxh4CP3i3RV9kYvR1JeBgwP26btc94YiQv95S4m8Auz5sX",
  "key1": "4vHJUM3yUbWyhQzMGyeBAeJ39JodPcPRUgheojtiktVmvYwQuQoTZWoAxJaExeag7ri2Z7F73qwFTM8L1QmgL9kw",
  "key2": "4qTvmCbHVq4nP3cp4wUQdrPgmLyKdFL7qYYT3jFKEsWs1rM3Ri7UHzetCix5dovg4dTFazeKEEvnHV4GKBuLV1sF",
  "key3": "5iRhoQCwsq7RScYMDDgnGtyCtSPW2e4g1c5ZCTWPXtsYpTdrgzdCSdjgjBbp6dFYBgr5WHDMKV4AJHQispfFi6b5",
  "key4": "ssDg9rbWRS1gfpsa4VoE7uzMkkMP6jUHzWUsWZ37QqjAifDzjkTrNrAqRpsS6x4jvGQ7T9ZFiqVe4uTwkyM1qBy",
  "key5": "mGXsaT5PdTnqkSQRM9YhofMyurakiEWEmSzFHDXsyncZiMTczj5BhLYvrMzEddB7GaC2Gs15atTn6eDAvaLMXmh",
  "key6": "2QgxZqJg9x58g1B8e79TcoA2QYpdFFY6dUWqTE6bnxpaCnApjrDh9qmfJkY2ErSf3ZfmRjAWpkU8xCzcCRyehuhx",
  "key7": "53xx5Cmipk2dqxdbUbW6hqPyozUTbAGXswfEav8GzH7X1P2W88TypvvAydNbwZPYFhppEMUiaia5Bm5CY59WJW4P",
  "key8": "1Sewib1isp1jNBRj4RC2NnNKgrJcYUHtccDyXhhAjzR25BrW85VrGBVEMVCuoXQeoxwooiQ3mo1Qh1QdKpMBtSR",
  "key9": "5pN8f2hYzdBkamBQ4R9B99yae9wd5jyAvieebiaQNWiWFYqBmJzXgekS1Ygb7TKtXyZSLVDMic2iqTZUymzuSH2F",
  "key10": "2S77jbFSXJKso2hzLbwswdDbs5qynkATb4sCdBjmFCdob8MajGGPmGhEEiZkEGtwxKy6MQ67WysTnfJv2Zr9s2r7",
  "key11": "5UDFoB7w6HtBEw3SHX4zb1uSU3yxyDD4aFA3VqMQ5PbVReYYmio1wFzM9f75KccT265xiKcMj6U4jptUepJk2C4P",
  "key12": "p2CrVW53suXUjyGNw9xQbxhcwZZTXF3aQC52AmipBnKozs7QLMVL8Yo4DRzs14wiVhF5SMi89UELEfj3dgjp6tq",
  "key13": "2CXxaXXQuh1wdpHFBq1vPqeyBXpAwVSZTMzC6m1JwQt6RkXFPtBewm7sqzpEpaj25MpeE8Gk1irqUCCAAVXUTPUd",
  "key14": "4HYbxenCRxE9zj6oAeYbzKRhujFyxr1Hmc95xY1eiNuufvxEzAzmtSPACtup6utBZQz5YpDdjtnJz5BJL1tFQTzy",
  "key15": "67XVaD8Vjhbzk4Hw3H5wvPNhSedW5c2uQSpHTiapDXTZLFRxynJif16EPVVjygumRzNuGJcE64kjtQTgb2cZ8Bmm",
  "key16": "4hvhzadyAbWDqMohQmjqaaZyaWZQ3Hhvm9n6NzN4MkskCt2vpHJ7Xx4ELpcqZnrJce71czPpJ5uFxiFN443oJeU5",
  "key17": "53gnFkieweuCfo7qFSSLYSBNZw6uRrd37FxhNZSqZhmwoyJEQiJs6wuNGSyZvscXL7ndMVumHwsXNXZrQkoXYsxt",
  "key18": "571GSiNXsAsksmz9wAkq7vCS6P4LR75y3V51nudEWYbKPEGCEk2Q6moNEQxkMGx4XWdeZNMYSkFnDW8JpnuhasNL",
  "key19": "4onwG29C2gTnb87ryTR6QkSd8t5MuShVDKPnydtFu63qK7KWrpf7Y4i4uwW92cVKRobLWmC8jj4fusg8ktynguTj",
  "key20": "3taNi4v59oj2BpfehCWWPu37yB28PzfkyfSvDb6Q3AuaB96ireTuQisUVhsZ3udHN9GeTvD96bipFU5huggKEWYz",
  "key21": "tnVSiGJYY9dyQ4FN48w2TNB7NmTbDteGv3KcFWy14oZPNqaAeaaJSquQeGzQhUbVMqpUEv2SWsXatCZghCVkqwa",
  "key22": "4udk4RpnDMr7dUwgScLSmvg4xAWFov7pSYQHiZ3WFfsxHkYtthWomTkTeS2fQBBfrA5GVAAX4fMFodiCgjRzwrM4",
  "key23": "2Fpzq7GSTW51KiSBvGrsJuqZEoxjr5iWbZDXzedjrrM84mmfpgNi2bobcFc9avTZ76XiJ7au5SsyK6kS1mjmdDkp",
  "key24": "2DpwhR5ptVH54AYfhoXvpNHSd54mNBrkbnhA4j2AaHDeti3fXsR6yC7PfB6pxtd58V7Jw5KTvywnugReTF33XzBv",
  "key25": "3Qe8jds9WctTAQtsV7oW3its8A3obr94xXVnbBjyTzZhvbeb8Yq7eBou9FDoCtTfkS3JKVe2kuN4WBRCx88n3vAZ",
  "key26": "34USQWKAVqyQGggDHJ52eskXKSdSMEQBzSS5ymJiqPsKyPhta4oFAtqEQoopTJBEU4gvYKfw4Q2yCNqKEpC81oto",
  "key27": "2j8zrphCVx7rmPajrHLPjjZ8nBDSnE5oEQ7srTiPSB4CaN89ZiNvvMnp9WA37YyXv36zEAEULKGnAA1PNTeMGyrF",
  "key28": "5dJP7jxWcTNJtbLRief2tmXDRqg82qtaDFdWowXGKFfq6itJCrxsc3SZXzojgHubYgG98rGSLCc4dFRtuXDU4wvS",
  "key29": "nUb5BKZrCi6EyX1TBtYE7tbpxtjjexsumA1U6PLnfoHYm2mUz3D6T59UqZ8eVfeaHg3QC49xqNsu1becx1ubSoA",
  "key30": "53rRGaWPuSRUffxTeLYykvtYZvchMUEiLBg3Vm8ZAKcws9do6Dgnai9wHyuh4tmThJyPWJszVgMxwScWEdUnmWE7",
  "key31": "5GFYDSHhB39DFP7GaqbET1GboY7DyYvFyQuEnbb9jMs17QVWNbenFVBN3SsJkLXW2GmDwXnBMYU2Vz8BjMZWbhaf",
  "key32": "3ugs6ceehVREZjfbm33vJNWAoPeQ8T3QT3twsSNhhtk5YhwZHFwTxZjM7Chy8Q4TzbMgCfBrZF8cg7SPgoC1LQC6",
  "key33": "4mRmDE6DUupDiFAfjpe4ut1CjRc5QLLK5QuMxmD4LDN7Lf9b1Fpu24HGcTCeLbPbh9aNbb3ZxVWpK7JUQPFAJWWe",
  "key34": "62hZdihuhdXkt6Js2bQorfCn7pYPNW532uCw76Y5o2yivoxcwq6TbpHETvBHECXLjC193fWsuGWw3fbZHc4ikw3y",
  "key35": "2oKxnffA2W9HfpQsaQwKPaDAQEd2APM8KFtT5sf9rXBCRoov3KPairoXqjdgQbxRqTNwZkwv2NmgBUEJs38mqdzS",
  "key36": "2pBiwRL9sbcuW2HF27VCoRQTyTJqkbAwoaauAeWYva3SqSGGdH51FhAT3TCEhFSLQb7yKturUnCkQkSzYYgjYnYu",
  "key37": "SQwjfLmHGD57ig719vo3B6WMdvwfqjGNHTbczqqc9Xpe5nFWZMKTyD8Bn75Cg451CvykjJQDEANCD6tqZy2aR95",
  "key38": "438u2HZhpWrazDxE7b3XKGCSmZcwvyF3LX2MuwfkGzUJwHianhkWBGMAdBXkXyWj6yzrR9FeDb6bGL333SAYRMwR",
  "key39": "3UqCwn1ooZCDN7SHMR2EvDX6uD3DewuPWubQfveRtH3QabaHmLZMmppGFQMxJRPPaztefDTDGrV474UwXLYkb6c3",
  "key40": "3zomMXeWir49xyCAZnP8rert5RR775ADm1jyGb5GDrkQDvFLCao9XEKn9RPUKcBhRaCFWfDseFBzGE8YmvzBXxTM",
  "key41": "5uS4Y58RPqCDdkw7tDBChUqqVP5XmmrbLNC7FUTGQ7izLDwJwwUbsxJFvx3CiARW3btD455ty3GSUPYK9Ln94KYY"
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
