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
    "5CVyGWP8i98e7t8zfcPy8AFDYk7YP42Kk4nfkUQDEbagnbJ121TK55wfccfwrKB421AnAX5H6d8trq1DUTV5gBCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wqWXo8sx17t2eewvcXPqFHBibPWAVaT8svTGgHpUAJ4jyqTWThDqKLtVUtqwcCwBBRJDdhy6DgjajCRKSU8LKzx",
  "key1": "2fQBLxL3C3uovwZQk1i1nX3x7ocehw3pmmzJ9KgPttdaS4QstbURjQwvpwiehC4pNrikQFKjpiENpFsFCAGswGsL",
  "key2": "2wQMY4kBhe4a2WwQoGyY6MwuUEB7syFdy3RDZ8mxUHsRhJ1wDzeB7TBsxTHDrZVDoxgiSA3YHpVHG3Epd3HhAgUM",
  "key3": "3hE1dSQN7Fij7N8b2kd4o5Lpdru9oa2z8dTshEPKCNZuEK7A2aPpYL41qN5KhxVWpQreZcPA4KLyVT2P7LuKJX3M",
  "key4": "2Hd8T7mti59e4hsu3P1nfwj4LN1hVTLEQKMQT14vCsQWJXd2iNXHccRUuSjwrzLcxHqM6WZwCcG2YG6GRcxtiYCg",
  "key5": "t2s6SjbxBFpMLTvQpj9MvNQceZxA5LiRiSk8U1YkgYaRS9MKdWdADd5bvoaQ2TZK89168CHg3acmz8s5XmXuH7X",
  "key6": "5qCpaFcJjF3jiV5vam8yhq3BRBftTQNzhN7qBkqXd4gCZxWLqbeLz4Qdth2Z9AqRKV8xYaZDJk97Gg47LmY4jimb",
  "key7": "4RGW1JUmBZbEXsSkQcAZGPaEWWaMqYc4LjoeVH2N8SJWHWESaJMsH62ykNJxJRoKRTPcPq8o8qpC2M6xWNQJLYtc",
  "key8": "c1Ef3PHjMCgSgjUS4w2Mxy7RNR4p47qhrFRnkTJAMi1DUApZsu9WhgEP1MJ7fN61f4tdvLboHTsArCcYvPUKEU8",
  "key9": "34BMpxnd8UDmwS4jv5gAfPBVe4FbJCArLxGEq3gBiQTbCas36vVQAQpDZLK1sQtnBurR5gUWzKqhzAMgWUVL7J6h",
  "key10": "4kLssc6CiDLpJ5BFDKbftrUB4iD4gKHWX74qMH9PN7W7whzZMWx12UQbMoUPmYM4GXfVmoRA4cpEhpWA7d6aLYB8",
  "key11": "4thq1H4V26rpJ4TNZJMTnPu2vVsLAS4GBZ3jBrzPvEH4sYoMhi2tNFbAY6RpVVKgB8Y8eTTvREEnUbzW1rAQBDAh",
  "key12": "248JKhRbBk7j4qmoQVddomCNJTiCpdaQbCGyHBKyevwYks1FheMtwVSCYts9HPEdz67s9fdLjV8P9XzvVsN2w2n2",
  "key13": "3ZqH6mB6fhcKm3Nfvw8QPMquBrK1QXArYyv5nTpU8xuifrpNEEe8qQJvUdz3u6KsEE9KVZmLppYaKxwKGyjh35dY",
  "key14": "cvJXsmCzFBaYPAyx2EtaBSFoJjk9T6hXTeiArDThyqezyxQDYQRpmTTky4s98VasRmxwkdfLu78N2XSCDnoZXjD",
  "key15": "3Uka7KZTCWBEQXgWSUoTKKsqh98fPKB54u4M4cuPXp2MwHUN8i4qbprLfDonV511P6Pdd2z6PZquYCsaoAVkLrGd",
  "key16": "2LU5WM42wUohxhPzUNvc3QxCq2LEzapnjujUvWhjdEbQv5g41i1upTkGfJ9nYA1FG5Euxgxe4Fsb8qiJG5ZM3oTb",
  "key17": "Z3oM9bdn7ryMNDXzyzmy7WaEkqk45ZtqC9pjjsZ5FUtxHt7ZuVnzgzdrbGo5UwwXSgS7uTVuApnmsQa8HWLzvU4",
  "key18": "4Qbe4dpxV8GidMh77to6fCnKB971Dw1EGQVpMDEdEmPMoPgKzus8Mw6WfhhRsbNL3Q5xFgppwUhbXPcrJWsVXagn",
  "key19": "ie1Cxt2fXF66Br31ioqMCJnKvwfyFJrqWtu57nmACsVeabjkBnd2zsBjvhhSgSfWduUWHCcBW21YbLDh3a822nt",
  "key20": "41DZ6i9VR8wF7YNEzMVsUfCBRvnMQPKR5oFB5QJHHuV96P8hSrg99B9npMBe9GXseKL4n2qDnyEXQNfViHMmxbwN",
  "key21": "2E5HkERCH8e8526P2h4Jc3z8sLt2DK5LNJPE1n53WsUiuEBABus27Jcfk2WorYLa6gxEiQFpqmHvsndJkZmm2J8h",
  "key22": "3RN5AVsVrUZ5Mtf8Et8EHirnpGJZrxTEM3Ve6AAkxGfWrL3eAXbKrPr9xw3sM2UCEW4eaNR2b4Hpt3BaYh9Um7Zg",
  "key23": "5ULHRBcWP4ff11erkU85m3BjSm87cYeLzeWNafgWeojqzXMM2eQbx2y4THS3oaeJxTTHBfQBHZ4AS1ZjSgWZVQU3",
  "key24": "5iUChJtcda3tp5HEvjx2megUvMhyt9dEKBtDekbSpwE8rEAssP1eV4Ckyhwm26pbtYdccZyAdCHYjYCBXFKBrYwq",
  "key25": "5dyWxEPeJTAbKdn3VCg5kjBu2PdsTKKjXEU4NaBmwr7LLdAaNh2Gye4iPJjwpMxTfXj6kydPLu5ejtQH3eJ2EUqT",
  "key26": "2ULCM4THqFxDCJRfQDMziBPdKhm6AEqjSLzPVbGKaEgBFakxt1WQBYVQ4znPJdyK8UJL8gZhzG1C6htTy8xyLi5D",
  "key27": "5oqq2mc8ZcvMHbijuHAiYKcaXNpeQYFJ19RE1mnPbxzne3cJ9kz7sWGv3vEp3UigRNAU2y1uuz3ZiMPiLqQG9ge6",
  "key28": "4QH8wmk4RF8Vy1zN1JWBNRzsoEDcc5nnHWm3BmRvZQwJBHvYidGkyhuEkst8tPkit3TV94MfMsagndQeZjmTwcpL",
  "key29": "2c7L6s1W1dTR4sLhv9Tcw8kfV2zdt1wfz49ViXtP7non9gDL8nEuZcddfgFSGHnbAdCVkyjC6MSc35BcCeXBLMM",
  "key30": "3iqRQcUiMzp7JC7iYuaPyS6PgCCYdh5qxp75ZUt3yKyrMJSMBvbW9pVKv7xCL4SNsJefGmqNH8gvwxB9mRG5Dbe3",
  "key31": "32ay41AmJ6EoEPo1GbhiRMvcJMyRZL1tj9b7iLwXi7JfoMh1xoT8qKb7HWrFPU4Hmm5dVJDLyRoynsHgXnes3Z9D",
  "key32": "4tnWvJbfKRRWvTAH1E6aMvBa8jK5SERVv7NEhGRQGo5PSRiVUr1VXe1b3xtSgdYnrhQZYMo5GqokZUBUyefsAxeS",
  "key33": "51WZUMfVh4U9q4jaafXE2XeAGYhxcVDbJse3mTxfvU3BuQdsRioyaTasy9pbhkm3QW2GiC2thmYUF9CbW3dWx3b9",
  "key34": "5cKB8sDMvL9zPD6dgHSwHqrjSWSkH85p2EEhkgomXcfEFdasSnU77MXNa2xAkyiNVzwQPd8NTRKQukdsyugMQp7X",
  "key35": "2h3ZnXnJ2szwQFtHDJHPqPLKJAHhGJhqW6VcXZC3C6ZrizAKfTXjVSGv5mCqh1cfmHPBrzBNzXbHGfL8SkoiwZm7",
  "key36": "iE8hMjSGvrqiuNquSrswpGQV83T9mQ4tegNDZZc1xfSiQd6de8Axn8Hb6ar4xZxVbDsj3Ei6adXygoLcmwobFdS",
  "key37": "5xLNtSukN9D112DCMTRU7VYUHD3PBbppTCbuWNwFGX7GNyFg52jrYdmZMHgjX2PW8mcifHgJXhWe1w8uEXsRzQQY"
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
