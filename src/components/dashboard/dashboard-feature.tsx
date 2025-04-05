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
    "4C6Po7XJbnx7AjMkf87qTniqKWUwymH3r29VjtcJrvUrMwKT57wGW2PnKbhB2hxQBKUDcJjqQLcZbbYrsNuJ76vR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dkHDz4tFofB7LVdfmHFY3Qtjnr4d3nDb2mzgDfMD9UMDB4yXNVk8Zn1R8BBVBc6fKU3gwVeaRLweNWPHbZhNBcf",
  "key1": "8MZB5P4QQrjNyFvdNxLU7WEG7EUzs8tFwB8ZJi8mw8fK2PzAMNkAAV1Q7wdUEfikT41rNCd2B3hwT16p8xrQNLC",
  "key2": "56T4eJo7ZVHeZqixEuQAKWzx3P9MDXRkKBqjrvu7743qsZtJQPWcTRjEDz9htHJD7HhpdMCTWJWyjKMENmjd8ASU",
  "key3": "2FrQq4dy5hsMN2tB3NCrARsjjbuBpTjmm7bLYy1V8PgGLwToVq9nqN8aBFHeNgtwUXidercWLpWVrHC38PcyHxQM",
  "key4": "JhXEhf3PdpEZSHFrJEKqAqA6tpMtMkNAfEMVMbdqGEHp1khHTotmEXESkwuEM34q5k5cQMaXUwvwz6EuVS2ZTLr",
  "key5": "56QrU6Wd3TFEPf4GUaaDECaU4Kkpivkob2y41bAY9XZ2KaQRPAfAtRJYVPR13khUPK6dfy8y1peEKkW1JE5w2X1Z",
  "key6": "4PvNi6BHvgVgkKBEX7freRhxK73jo7awwfTQPqded8TvqLTaac7ZN3zwaz2w7NWCGoJdb9CGjMsMmCwZ5TDiuTxv",
  "key7": "5SMSM74xHfakBtkmQrxrNZ6nSLRY24re4mFu7ac9iof4DdGVf2zxUMgW8et9y9yyAx7KWKDX3ss6pcGx6PXKs152",
  "key8": "4bKYSiJyttjVREw2ZS98p5nMSEzMG93fyGLLuMgQJd3NH7zimeWjyLWf4NsPRawL7UbxA9MApz49MR5zEB6RH575",
  "key9": "PqzyUSz8pByjML23FvogWewbgAzFRjE8JtPeAC8sFm16zWRcg7cHwY9jH34iJA5jSwyKjy9PWuBHNeVzgZ1pyux",
  "key10": "2UKGGCf8nEadymun29gg1V2dJ2snkA6sdDKzZvdAeKpR2Erb47s5ToMmcJBBYyYp44kYoybVhzrPfPv5r3hDm2TM",
  "key11": "5228mRvp7vgMj6iAgi7PmiX3Fct8MMy8x1VfBmWwf4HR2UAYvugdFLfFgwLeMSM7b7WwYLComQ8V8WypfkRBR6EE",
  "key12": "5MgN8Jd7GF577uWuzH8WA1eB55jmtx5vTxtYjESULDsBBNVEj1wi1vTrwDqHGNGRnbp53Pq3ggxYx2buFi7Gg8QA",
  "key13": "61vDPrRiLFTiLtv8Cfro13Be9wsb2jyzi4EkuekXg9CRnQNBQUdaAE9mDPJsbU5agxztfLzSCAhjA3YRhsDRPB43",
  "key14": "5G5SeJWa7yVRsp37MFVUUnEVg4xqke6Js2fEVWo63y3BUneoBwoXnXKUeMtvJQdPi1wqrEHjDqAgCoAkhrWi9TJ7",
  "key15": "23GPaxqssPYDHo9pN5s1RByWsi5KcprKQkYZiYrNLRDPo5px1VojTKuYotAThavPHQDtB6fzpgLGUyw5qDTaERGj",
  "key16": "3KjVp9kGczJZ1pb5wMWe4fmK3XzpoWJXveaQYnDXnBFwkQJVXcANsx71QeyCGUtMb6HjuZoHLdtPXjm4AscfuWEe",
  "key17": "wq67WTkcZ7HU1CxBMzF8y2oukFKAqUANS7gzGvuL9NthQrNSf5UdCq2hzQXdnNgMYBfuEjzCZTrxZkcjBus4jhf",
  "key18": "4ENSAHiZMvUeAcmCpD7Nq2Fe2r7g3YNgAQvnd7QvVKgcGGJD2yfbmCgDdXVW8ENTPe54S6BhZUTtKNmB6sxAomEv",
  "key19": "CFBQ9cMrLSrhH9cj8ii5gQWUVBKZJAgHxK1KukWrb1d96ZfN9nEZzZdSyjdMzetWGd4opBuecaAzTWtrqbu8hDM",
  "key20": "2NXcZbnpBgDcL3fzMX9W9Sbie6sWgT33bBDxKXxX4kYt99uySejeuZnNBNkbJHREsVGLxk3kTVTZw8jKEnxhh7i4",
  "key21": "4VpoEmzecAqWV8kBMoZGhfvh8cRywZFZYpUQw8JwGhhWE44zj6bwB5HxV7vXwiQcU5uGJWmHDbUnf3QMUTHKjmm",
  "key22": "cxUBPiMsLu3LxgNFso2wDJLjZwFxGbi7rMAzmMvhWP8S7CXj3ugDXVAmrDEh9bdjwRX7tNyHYRiDdYYEEnTxqHp",
  "key23": "tgG6SnpEpeC8W3KJCbq6XkYs5ddWE5UPG6aRLX8zyJdAGrFuSCGHRVA8frqL25k2PiJQyDmcGkm9nSgBPHAj4q9",
  "key24": "4unjqgKjKUztC2qHw5VuGnzw4bqhVkvghqLMk1AqETspeU2HEyxWNR8ewfHospJohAd23K9MCccbHrqcSLcsEJcE",
  "key25": "3Je4cXshDmC35FQMQRBoPsqsVVPVhCoihXJbTpSteJwpUaDE87Bspq8zvduBWSkVCKXZZQjzj3HJ2wNRUXNTMaon",
  "key26": "49cDW64Ty2feTBMj42TfFCXSVw47UcfoQWBmWPHwvhe4CTBHZSKcihCHdYSxkUD6uE3LLG9x5ZnMm8MSNEijTpyy",
  "key27": "4X2gSbiZW8v1484rewSWkYHuGZYrExTJnrHfSTotoABgvJcQWc1b9MRxwdzjjAqrBojjPpudjusshUdmbtMfdKJj",
  "key28": "4moA6BcCPgL3fcgctK23K4sSArH9hhJogSmusQijGetxbHzvafzJeixPFaHG6MZL9ZBVcoFfYdVDjHkqtB1Tay7E",
  "key29": "92yBc4Vjj4GCX72snq6nCT7ne3zm3aQo7txL1WT4ahaYYgLetYHpmWSfijMWLJsfj8wc949fKb3dBhLPk39RAs5",
  "key30": "4DGumzRxq1LdQe91fb4VuBKsK4tS5JhvjNKV4H9YhQ6a8nt6xdFFLMw9B4FjazqCR9qYG4DDWw7LT7Vhn1zg48Cr",
  "key31": "4WYpUhjFhtKNeAxk9UEPMh4RMNk9juohVXzpdVwhgS3p158ojdDBpmWx2D1ewq86J5LqZDuixvmoakVMdTUpgber",
  "key32": "5775ZkgsHbVz68DhnxWF3CYq6ZrGTGtbPtPdJMKCiWV1cXpp7EVYW2KTkEn4sG8Jg389eibZhPUwWrEi5GsUHJqr",
  "key33": "sDuQGiJmtUdwcSth5Wm1AyfuRo8dfEYCe39v37SrEMJ2VDVPPVyT9LGnwjdNASUVtRqAABVUv8KEdVh9sr41XbM",
  "key34": "21Mk6njtCYwLcaqMRpAtFiisNnUBFVpgjT7qApztqCBWDKetBX76tQAqTayqNPQ1Vzx5gJMPfa4ZeYUujPjvaTDq",
  "key35": "5aYpW3r6xqhFK99z3ahjpyZLWxyrUw33RMjg7SXofvR4X8W4gzephd2YFjJsfARdNbEs3R9Gr6kvMxreoAHDTsbC",
  "key36": "2wg7RMY24tJa1pj1NwcbyXH8oKPhN6jMTARpBY3BHRfhDk2e6nAsd4K2AbDGMaeRAifZGAPGzL4ZnvFshCXY5Tho",
  "key37": "5mPfhe2AqPRxnUEyKdFb1fYnypZoY8GWZQGaE7W2n39TbTAB5mcjLyUZsPonwGMRDDo4RKXrUGsL6uM34snUK5X3",
  "key38": "3AGrPc7sFz8Zt59MvhjCbiX7kmjPoRWGHtRYDDwFjozQpiuo6RbnuiDgRBRZ4TSMkM8nifhhBx9HxiZDTasXaVmv",
  "key39": "2zgrUcVBvWoTm9QE1kfmyP4QePTsms7Bnb5s2uYYfHvF8cPi3nvGc7wWAHbgc6Y8QvFaBUHMKEZaVZ5xEC1dh1Cy",
  "key40": "2DUSd6svPCtpYtceQgTYKAqgtNQokx4YKe1CtzgzivTeGckrCU6E7GbsEcwdWJx738dJwXeLvp6o5taHETXf7qZi",
  "key41": "4RKdp56c63t5DKDgVhc4azxCXJUNQRHqVi8uPkmKghL8iFfPQMo2imrof6WS4fu8Ch9yVFyGoeWHJbxMoT5FpPTn",
  "key42": "3Ab5qEM9qEYzaTyvXhwyD6AnPX6h4WyDCx7TE87qbRQoczXCJEJuN2kyXLYpyG5XzcmqTn3kcYLKQz16jpJbac6L"
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
