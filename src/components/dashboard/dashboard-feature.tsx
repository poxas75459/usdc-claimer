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
    "23zp6Utjbytv2zZxhraaoimd4enEeA5dV9zYJniC7JVWCtHQjCBwHH4AkkoMaNtAjNwDbCprNNCMkBo85QEWJubm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VPTM7oG6w7U4fQQvYh36gZZAbBpbaHJuJ8sAhKk3tt1gFQd6nCBtecrxqZNYzYuN1R9yYAHRhttNLQ6W7qVP3WY",
  "key1": "425SWCoGjqR6E6TW41ggB9yjhLG1bD4nBzorDt8uAhmVfYT1nzznZUX9irjT9e12aJrfRLEHmYAMPD8aqDAMJcsD",
  "key2": "21KNzy1esa9QvfLTqpjKDbdryxfNha1ax8S8iZHbiUhNkVpWUFiJz8U96CX1oERXrPKroZLzGENJdDF7W3Dsj4Sk",
  "key3": "2c4vd3ysK7pmoNmsiRXhKY9E4mLs1YBz8jSpc8CE3RuwCQ4ZBb2tUgHdSq9ZRfHoc1bGuJCpcDri8HWy8pJkv56",
  "key4": "4cRr3mtp49hfamzqiZ1zkKznDK2qWs46JiodhFqF8j1ptNsk5QzyonpLCkYL5p1t2nkX45iTgmiU5LwSAou4hc9U",
  "key5": "3LCJ9akhcrsqkcGJioKqm7NUwMMyMjAwVtnd5Ss4DtasVJVtH8NBb1gmNU4YxPkpRWU5H7qrruirsmaq8oocepto",
  "key6": "2ra1HT6sbxr4UzaXaBrz8toipYQkY3YwE5Gg7zxSn4AVjCa95b3nRMGrh6PLhV5vQTkcTNBp6dsyocDCk7RgVxkp",
  "key7": "5as4r74MfaN5DKH86ynZYYiHXV3ktkpqf8c3dmLKRRKTFPzEb4cgwPfGM4KoiXhowu5PFU7JTi6AEfRF1dEW7aEe",
  "key8": "3YXc5VH7gftCNa5Nmb13kaxKoykNbPxenjMw5rCVZPbgTcMVv76esDrhwvyEW1gF7mfLquZH1tG94MGFdrFZ65jW",
  "key9": "3LvsfU23g7B5MCk9VT9HZ1LJVpS9U3x5ac8wy8MVJdSMApLS3KeHfFddvq9sC9Erh9UjZox37C8k2GCq4bRsFebZ",
  "key10": "5TWyxEhCMJpGPekTQTRQEUsLu834q2KsDe5YHDeFCPR3uY2ShuGQTt5MQEKexrgnUf5hfyzoFq7UYq4LpJzZmzgr",
  "key11": "5qEL5ZjURDiorFhMSo27Fd6FUnsMDHM4gKw2pHZjBVQcXkrTys5p5EccXGukFVtgfCptet2UPEdiLA248Rayh6CM",
  "key12": "4guWdqMXSaBHXe6WsmNJQsJxqnAVbNKVkHLnnfkvDP8QNL4EWfV8fiskJGiPBNUtZ8vBCzrWabbm1GVnHe8owobz",
  "key13": "44dbwu7VjNTPsUeDfcuzcF9yiZKzFWq4x2f5byqTqchtmaP7HzzkYuBUzH2xxWdavUa81BuWgodqDVq6es6KmKxH",
  "key14": "5SS18235CTXfnDsCCzbXjgqcp4QJu2rfLScuwQFjUdp63qSvfSTKuHYWNhqEXmEb3Yk7QR2KovwepDBonSngxw1W",
  "key15": "2SNqUbAcRLM5cEJ4UTgZSszstjqDkcJvhsUviYjis6Yq7LgqQxCDkGUWx51NZiw6aiJ7rRDFmmNj8ntU6rP6EJkN",
  "key16": "3Li3fsjnUFLpLiYPwksKAQizwUnwRU8HjcvL6cj5H5XCNaVL4XviqHWrG4WhW3a2DCAoKydXZ54ykHVqXXY8Ci9L",
  "key17": "2nH9WJY9LoZEi3uFNuckGsAgBjDLpp6qMR858QbbhNDrkG8XJXcfpXaNxSsq2hJtCBVnZL5DLd9CuB33bRocgnGF",
  "key18": "3vx218m3R7dCFM2KPywa2ohupqDZPztrSLMPxvL4eTqhtQ9WAwDkBQZQTQJNUcPCbPzFEAS633DS7UUVqwpQgYha",
  "key19": "42rhxwVzUX4tjjHaqVJzXYxwBrYUgwFCVg32wbVTLdwVyr44GqmJW3JtckBuunTx9p6MEn8k88snk58rYxBdamXm",
  "key20": "3BhEKDQSQ96T6UErcMcLZUMAe59d1VP4fijYcb2E53y4ZhL3kmo5x7xeE8UkuUQ577p1wv1Ydi9nuhG2syx97rL8",
  "key21": "9XU6QcrySZYitctY1ufhE7FrEvZRufwM5bEXssVxzB5mtjdKT2tYageGqabXnsGGPtvKArMd8iZJ1BdT2Jmgbb3",
  "key22": "48FiL6GBWPCWaJ8Bh5upvTNTikRJTtf2gjTJeeTccnv4hhHpAFPJDdoTbhNRDgrRz5ZtLAX4CTyDsB59WsXVMjnp",
  "key23": "5qfG11BLxY1yXbazHk8QgDFKC9wLo4CpN7iCDFLhNQWTMfeKGnRiSaYuh8hfiJmMnfHieKxbQCYUWujF4ghCZmje",
  "key24": "5bVcGGcH8uoqMEwxdHCjrS1MWbYc5LR9pEbgSKoP6kpjGTKzRUJbo5e3bBsAggizV3yL6Pb4WyGPHhfKREQnqBbc",
  "key25": "5cp7xNy5ryzzPJrzpQLkrUVBJfhguPwHCqYC8wuAUrYc6KM49tWgYtfmi5kNTQkT99KPSo6q9ndHn7oN7RX37Jdm",
  "key26": "4PWLpRZJsfhV2crAmefkcuYNHZU5eBknQDZ3qvP8nEqoJkzXvSYVTnnqMfiuw71kMAnWguAXKD4vxVMc7v9xok9u",
  "key27": "5BP5EUwZYi922FMENPRbt28s4dAAFvwqeCGHWymjU6ZZprrGoQ1GpEmRtYAHDneWDcTBpjkXBpWFNU9BrSwtuzqs",
  "key28": "gPW7XRTAJsz72qmLT8UaVbRNB92qdfwKxc79E9BuwYiNFnaNomjU5PTXZLAJz7pCeStiCAC7gVx5BcADApVH7t6",
  "key29": "3NvK7PzfiQ5z4Qg53dbBzCbRtRjUPNsq8cc1siX8VAubF6wNWxwrdFXwE7NwgrdvGsVhTPk46XHZwLx9CwKdLB1V",
  "key30": "9v5QzRgWsdQCFVfmZBhGMLNfSaQ8gi4Q1dL9bqxdwNkf3vPtVgwGP16nJmoydeuBcBvQqdtB53hcvvnirQidDMK",
  "key31": "AmpVFBNwTtBy2jTqexHpHsZ4LQUX88Mmfaqcxy8i9eMHSPkUJWhGMTit3An4oDCVQezurhnPnSeUBZnrGUS51mU",
  "key32": "4EsYadSbzfDpL1wodHnwjCvnLZqbVFyywPx6X1FN7mS2AXF6WkMhozCRqQPANab4yvugUhkjUn3t5cY4gbmGMoXc",
  "key33": "3qwFFb3RkhkzAiKusaeuRhahfbU8pcvMK5mUqPNDswV5kvqT9ry3T8ksv8mDyc2jFEVdEWuYLpCJCHH3vifCUK8K",
  "key34": "JqfhrJuF3s7EyANhd9BrpTim6H8CpjBRNUfBnrZFQms74ijg3dVRC8vGgxqFYoEyGvZJ68J4i7YShEQKtti2t1Q",
  "key35": "2Z3ssZGtFzSq21Marda6FfHK9V6SMpjndNkPeDjy9dpySwik7cb9YTycSCbGS8H1xt2tuZQcUNiXE69DauJeyx2t",
  "key36": "XhwdgJVECrhg8oofPAQfwvQCk4drq2JiUNLUgHy8Etc9AGpqKn3zpGPEbnvbFWcjBgweRBDMPqsbEXWmYjY45Rp",
  "key37": "4wPakWshPvbi8HcagvdP4jWwAhZnFHSrPPmtymfA4uNVp5sy5K6XBFfs7ytJkYUqCrs4ZAwNieXNx8EnZh96vCd2",
  "key38": "3dGKrHDXcP6NxgSG3fj56iaNnC5FcG14Zo1PTA51111ziiWPwr6imCkooDQzCxnthyzHn2TyCpstEgsJUv9MGJSV"
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
