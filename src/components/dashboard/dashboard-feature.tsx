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
    "4JkmtCV4h6s58NbRCj76836VV3boLt8ZX3Tk3VGmu1eztzMnowzmi6rBjDEtB2erXX7ymrU5FZu6nPrgbZrNpjZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ojfCsa5Sxuq9WSRbEmSKMRZtgBdXdY3PanaNCwCncTjutQUFT4dQNa5957tPjsN1QbN1CGfo8DfReqS9zLFUrph",
  "key1": "5asgwNAg54zjy81A6HQGqjUHB9drJs1PtGcWXoQE3ML2ZAgD8MVeyc3zjMBDowFsBEpTGig8Yw7Ho1BV8pHvfPJs",
  "key2": "3Phu5wADLcnm4HXF8TpJiTMhtVGPRFCy8NL6uQtmBiHtzmTgZrtdWTgswMuwxzHqvB5WJZLHPumHU3NMxYWqq29g",
  "key3": "3ppZUb24RTWdGmLijGrgzuJo7N2dP95a4xLQX3NiX3dVFKKitbKTf3ikxdGJpWA7RA1shvukVE2FySA6KLf3heEQ",
  "key4": "4QvvmsZrWaUqHLGRPEdg6BqG6hheepASCocouhjzkTV2gnL87ruGBWsZJVbkuRQi77Qh8nL58LLYQJqgYNGv6qJ",
  "key5": "3mfk5KXd2PzpAwCeLptPHojchmGVvy1iCh3YvZkaF5vxS93wNk4vBpEscyNXXiQv6cB1zGemy8YR1DJGhLsiqBKW",
  "key6": "2PHTuBjHEhtLJyyqcJqriKjpSy3U2Jyzs5FfVRgvVpeRPpmMhhGv3svVmxV5Gob27EsK97k9B8wurDY1PFiSXqxr",
  "key7": "5E2AqZQT2iLnAA3vpsaNP1e1xyoqzszBpcwvx5dRBMGK3v86sxTpm62Nv6vYwKdMwV6qPEg7knwfxPqNERHpnzYu",
  "key8": "NnSQwywt1D2jaq7FQnnZSi4RLqfs3HKsUiLUfrjfphWdQigvzwvvNpbtAfdVPhZWMsZDRHFnT5tyUkH6N6hnMBS",
  "key9": "5XS8Uhy9Nu8pJDj8pbNVeqh4aNB4jfQshE2MUANZuaoZBT326jtAnEMr2SPKjjB6T1kFMM8EjsMoMqAD2DWCGPkA",
  "key10": "4qHN6neSiALwoc8fQ1VNDyPYMruG2LTzGwHmUeZWNDS1qScKuPUMhWLzB1hqKGVM7ctRAUAmKMAJfpHzjyBSGkL3",
  "key11": "bKK7wZQckgyxBzhQSVwySiAZrNpLq89aUsFUtwGex5HbyB4NmnSv4u5M8J1tn4fJ6uwKneX2YYfQ8rTvtzSGytm",
  "key12": "3od1L6CgpN8BYE4Dzz7jXetyrbHxoNAYLpzjtjibBruwPeZPdWKG9KFUvzjuKnjK5AbEaG7epYnJ3VLiGGDFkwNe",
  "key13": "3x5S1sA48kYULCgAWAFWgHQQA7ibx5gwQuFaDeXfSVvWFdadZbiYsU3CnjbS27Y5W1pTBxLcW76EXbkKVw1KHMZG",
  "key14": "4WU8cK7xp9ojPLoZyKYUKv3JU52qEBkk2ZEuvw1ao3Z8WKK7BVcEqBRRPn2aH2iQujoAqMbXHJunxnu8bLKwUJ7t",
  "key15": "4XngALvNKgjokd96HJ7T2q1DhDdTAA9cbf61ZnfriC4qBeFzWhQKBqu3nxbtJZrjwqpjvVREdBY1SqNhLLWrjRda",
  "key16": "3KBB7S7Aqf7KWTEGeqvNm2XsLAiwimwRS8tmEvinXQ8JfpTR6u4sPZ8UrtZi12u6Dneed5mjh8fsqH5MB2f32AoF",
  "key17": "2ejbdhCtQjJBfRvh8vX8YtPRsNHwKhgLkAsxxU2T5jp6GS1Qrw3s87XPnQLW4MY5qX3RQGnMk3YzUm1kcGXQiQpt",
  "key18": "5VqNUomRwgLXNckKZ8PQLiUWoaeTnYEAjMdJ3f9BghBXSPa4K6F9EgA7pZqLW68ByPQrTMJUWeeHG9Sf8uBLBKJ6",
  "key19": "5nczTEQjMAgGx2ep2zb1cJBoNhwugsNJra8C7mRr5K12p9xjGMQrbPC9RtwJg4gSFb6ENv4R8YWSQQfddDQLkpdh",
  "key20": "2NXpXcY8xTNRcBzAwrxwon9S3WE5NidzPZQFQp994pNacvVb6ZnggckeKP7RVo1HVm7xfUJ7QKMgc5KRpX7Um9mt",
  "key21": "23WhSBvoqNBkMjddWFfEuhWJb97xmnjrqCo3rBw6abzod1Kd5HsRKtAqiWBcBVGcLqGu4uH6vtr36hjvRhNPeQcT",
  "key22": "5jdBBeZQzwogpez6dZc9TEhmxk6P2bCDEEZL71nLdcshcRMLRBPnPMtiggLM2G4veaeUdNyRLGJgcd8kZH8UEk9i",
  "key23": "5GGFZTPgj6Ah4ccfsvEqH46N1kRWbgXEs44Yudb8DhRix8XwDC1YMyMb8TKig3PmeuqM5hgPpUdQfcAypRz7JCSB",
  "key24": "3tVdKQ4FTbHM4q9dpWUa2iJ7oCfYpY8pkiAMCTd4mto4Ha6fBA1JjYkkcn6baJaWDPjVEwyNnvFL8MF5p89zyer2",
  "key25": "HEgtmQ9jjcH531vocXbVdqqkhfQUWYASd9MbNa4nYY2XqNgfuRUEDvd9pWojeewK2o28jSLkkfzyCEPi9wPFovr",
  "key26": "5nQK7fS59f2tYEFTi65e5PqeG2Urx2EG5DLGc1krvx3enzNtjrijdGeNdwMapqGsLpwxCtubHWdcpnjRjVPa3VJC",
  "key27": "dXaw1JJ3vki6Li1WBnaBc8eeeZtLiWuc2MY5dmz3ayrJwCxcKawz2esadJJi2jjMgs1MNYRaJig6VvctojsRGnW",
  "key28": "47adyzZor9L8QQxgAxAH4m29APvdaczmDMWoB1DgYoeE6aM4nn3cxCVj3t2EsYwfB5Qdv2TDhbpqzpMwbsx1hDry",
  "key29": "XwxKPyDA9f9iPP9C17hs17msMrevJGC3qte5eKSdBh6Bj87SNZpj52LnfvhQatoTG2MnG7D6txiDCMn8Sj1isUa",
  "key30": "5uLFnHr98gCnhYwEkDrNh7uamQknj5WufsWCVvS5Zvg7B4fUHysEtSTctJVDtYvVtBsreNoiXyvG1vSFUM6V56zi",
  "key31": "4uFsV6oMwLthzgtjMtCf9y3kyQsYGShUcmKUpdBcezjPMrL7Ntf1hDDzuXtep9rUJQeFoJYTR7Jb4yhCouWiLwJV",
  "key32": "5c48r9QRQS37C6ocM7jMcSGSszD6B4rVapcpnTB5S63Xv3w4UzyFa3EBDMbYmq7Q9aPQMUokMKFFrHqihAKVahpc",
  "key33": "2ajNFggULc4mNxSLnj5qUwgTMp78zB6kJgaY2u2ri3MWvST8bHKz7onFJfbcU6jiingtMCCNaSLekt6sDBpDgEq1",
  "key34": "4HUyWHukoCGEsST9dKwRAoR9mkpc36saeohKG1RGivcaR5cg7xSmymvcjGrq5hbXtZDusxgxFWQBQrXU7NPhFEKV",
  "key35": "qboSwzFQKadwoWE3i4Rd1MTanYDn18LriYDdYaUypqmfcNGPhfDy8EnQmZESox3SYBjRp7Jk52wERwn14f5PxEu",
  "key36": "kgPbV1LpRY7NSr97tDuHRPCZU5w8Lua4uZWDyRke12udSNyqnJBqKT3CuzhvqWuFQiPq2MWmUSbSQwDdEUwiWA5",
  "key37": "3NNxPXYEfVRy8BSktSYNWGdAfCvsCn6XEj93HEmzuz5B8xAmZ74cZFnmaUtMUS5GNbYQ1empErAddH3rrxwyLELd",
  "key38": "2NzxthiUW3RmjrZ29yuaygbyyw8Wj4ZyxUnovg9Zegg2ezAWLaFCD5oK3zJdGw67YPM58Pfwa1Pc6neZWW6dMCF",
  "key39": "3HgQ1fwTFtTGHksyLXMZ9PD5SaLgUeP12KgynVviagLNB9HrPbRwNgpj11zbfWF5P91PdyLtg3AmvFmGVFypbvyV",
  "key40": "3xLwZdgXpo2M1ZxpkNN1wUp9T5VGhrp2316EvWJiJf63hjeJFzLT6bDGTsVz1Rxx23zto7Xpqf6ndLrmuJDvYEr6",
  "key41": "56Tf2ubvEi6sVAJ1ZHMeocW7qJ3i5mWriytNdyPqvY5H3ythxUdFhbQ3AoZBPpHqMocJJLos8STjwrjzY5E4pNUR",
  "key42": "5TgQ6edn83RHMXAaGKqCQPqEj1RsJWgBRB91am3UWwrwZ2zqCmQ2wcT5xawPGWdk7RWvMqsdmkFJQZJjezjcEaQT",
  "key43": "zeTkfZhfHBrBqkTfyz8of1MrTrqrGW7k2WzUXwD8iJ6Xdt4ouaS2edLGJBfuLQCVdxB4PM4Gr4nrmJ8dXDsEzE3",
  "key44": "31vCAS6yeKJGELTy1rPsyNvUEN8V5QQyTCKNLRsTn5SbuHkHhRj2xc7J4jnz41Zw3cemsJvm7kQugjYvbAKpqTYA",
  "key45": "2KNr6xKVPxqKeJDQtMtTRCGK3Kn8UsWyU7iyDED7NTjo2YPo6D5DLYezEhh9UZ59jDdjAFhwj7xkMpnkPbSpstj7",
  "key46": "44Uoa7Tvyup3LuY7mPMpUZr59cDoentpSRzmTa6aQmDA9p2mmjYSH5Umhj3zjufmivgCV7gFVFZfaGtZPpU4V2vb"
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
