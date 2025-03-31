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
    "WzMGXxH1hNynamwnWpb8ppZBqiaybXf9aJ1nmBn8SRGKiBnkqzNApBqJU4hQM65JzCaL9YpHYJ53ZFGjgnqn5LB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jdGzqF2NPs83nhYhnB8snRkMZ8CvBMcmx4n9st75BntPS13VJx4d7PoYnuc4G2W3rQB5JJZk7vteeedpPH5JDcx",
  "key1": "4F9yrpuT1h88ufjntPGd3c534f2AP7dgNEu5mMXgh81g8tXCPU74q5Jsem5NxhGQfhggtGSaLJZNTEyj9h4RbC3v",
  "key2": "5Y81FTuXV7qdmk4gomjMhappeiJnHpbDddfMZ2aaMTiuZxsKVDZPBvPSCpKssGPPyVJjgVGrnLC1SAQ84Nk3PdSy",
  "key3": "429xLwUtshf8JAx6Nks3xvHxtSL1B9FaxQcDzLu6L8er49AvKdvG7qpesgsWzs7b3Q7EDGDAwDdrq7HD91iJeHUf",
  "key4": "vGhubwLpTNQvfMKw1pAZ6SM5N72feL5znDfJrcnT3i2bz9LtMBQA9kH5pKvv2w2b1hUzFkKvcYmCjrokBJpzzCR",
  "key5": "5sQgZU6rCtPMS5hnNmrCEq9QnSrcALHuiqmg35kXcvT3fRQaZjS5GJtS5KvkWsR75iyt4EQFesToW6jaCLPj5sJP",
  "key6": "6BCgZG3smNf6Ce4Zjz5RrLKCDZPyLYi3wbSwTU99ih2fF8G9yRxTJD8shZSrV4hv1cZoQ41vQqFDwB9SV4p1kKT",
  "key7": "iCsCFNZa4SZ62HhDkFkaSVPdGjHkwdUSXC1DiUzPWrGgKZhdyzETr3YgRbnopsnrT15kyyNX2jWvWNDTzM1NATw",
  "key8": "4r3x5M1Zv9kbFwraHcGV1ZgAnKUf8Km9QsJt7g6CARzcvQRSDMTavcsrBHHaSKBtP5M8bev5z6VZjMTw3H5xT3BJ",
  "key9": "2jbkhnGxtT7fcuVXhqWVQpArmk8EM4oWemmXN3zYFvGHFHYWp8eabVanegYwo5fycQiaW63JtvcXYJ381eBr4X4F",
  "key10": "3gedR55RLFunqvYD96RsVvSU59EfT3z2bcsLmaKafVcNuAtWLsq3L1mvQG1wDZQcxc2JojxCpeHi7fQRLhuXsGqC",
  "key11": "v2kBi8m9JU2RR7Mm8J3MioLSx2ENRbKL9fo1snG7BV4tGsnigerb99co6cJuG58MyDNH8Pe6aVxexj94d6HJuvZ",
  "key12": "1oUPadnt1aTRYySHnve38Q1iC9J86NuNnFQq7Z1E4QcF8vKDxUbLe5EzcsM9bHVoqJH8wTWZmr1e7EyvuEhN8pm",
  "key13": "5AKitmy8n2MmPabqJikxSQnDijhfKdLNDupSKtned6Qv9NWZupWAtZ5H7a3wetNywCsXCRQHiU2GCHgfR3J5J2kT",
  "key14": "5zVJiFtWnpcDUBvmkRNRSfYC5Kr8z15ZB8ix25Zt41zdnJrnBZGTnGqS5VmeT3XmyABxq2DMb79j9kE1Uci2GGYj",
  "key15": "2MgPLVAAHz3wprnWadtJ9frCntNCiG6kcJW4My5KRKP5no4iNRNaBJCdtaFzumjGomsCLUvH4WgUq98qY6hY5YqV",
  "key16": "3bfGC4EDSrd5KEtDae7EXD7rG5phDaQonK5qpQzpMc3aBGnaQV2YN8Rj74CEiukJ2oWDKEdXvefmaj7QSkb2FSYa",
  "key17": "3tEjFazfParZDD7tyyQAFp1eUneXNUsEjpEmQGELtboYk4s2RxzdnWpn62Ev9AcotKUZ8dMxFKLypzEezmbviXS5",
  "key18": "4bB3cqZ4m4BM843zpLYKUG4np2swdGSq6aagy6QGS1xh7qc9QJcx3yrAmxtMBGmuLJLhiPvx6tJoWMz85NzsYHHc",
  "key19": "anKjkXy24HYAJqBDXuXMLDKm73n3MtCdWqJjQwXAscAor8BkX3HDjy9UU8J16MGUXTZvS6N1xFHTNqf6bFLvCUX",
  "key20": "23K5RSXqFQb8M78xxJhE6h2RmMwWPGs2C4Db1pisQ439dSXmpeLjHXRXzj741tBaE4yYcy8RztgCo58ypZQPgZVC",
  "key21": "2Y5dV5RL65hRcvFQxNB8CghjTehcncoWX6dvfHmYxuoTLM7MokvMxf63bKjxJxwrEQMTgpVoopGVAAjLrvysuHg",
  "key22": "2oAnCipcMc14pMLPRUnDHSawFaFRXaDNWWpn72wPcq8W1no5X8jezCNgVGhGerhFvn2siZwbEWCWUn6qN98S9zoX",
  "key23": "2sggoNennc4TTR2wGhHfkRvRgFSSNSyE3i3TExVeeZdTccNdCXPSHSSMvm23Evd7gvpuhN2xELf2QgW7sPuukxhi",
  "key24": "jZQ2VEYfG6aJ9G7TjQtsdUvyGivrDq5HxZbj31jRrAXuYarn8KnhKsSqu6wABtZx127YfygkMuxmRRZjrPP37Nz",
  "key25": "4CTch7adKZUkG6aBF1RVEsjjetnkM4XrG5YqHxEL85LLNTB1LQp6DuNrFuDXoR7aXrjM5HCyrJ1dN8C8cPWNjLhS",
  "key26": "V7aTRckywcuxDjoWc4hKQN1XFWeWboEpsMY2bYxBL4oS8tJbZZUCEmoYgeWhwxLgpg7eviBiz5QWXEVr5ANecBA",
  "key27": "2qm9yCVHVK5CiFGFDnFaex7tiRLxxkotajGPa8fcsYsiJAiVv87ipbh5dJo4yMeSyzrKV7shDFZvm1DVNSC8JXJz",
  "key28": "3emkrGG417xFAbwMCSakTmVgpMX2RL4RXZaDTHLdYcuh3iHV45hbudzNaCLJmmh7dU6SJYR68Bdz9wVab4Gdgdyt",
  "key29": "121ZLg7wpYGWUofj8xMMXDvRQW4vcMbRTMCsHnt2gTCeMthfwcdMPZGJevgCyJMw2d6JUGrUygfYBZyo9Rdc9aZh",
  "key30": "2CQ34skQy9wqouhUz5J6GfGC4H47e1j8krQat2MqVRTUgU31uSQXYVGxEjHJr8M2qSv4p3UYAhEsWSJi9RVgr1qq",
  "key31": "3JM59HhPSmYMZzPPrXWMTdFe5oBC6MXbAGHMwajtTdD6Cqu8e3hKCMrHynrrMPr8pHgUZt6d3xtQaWPTZRNCZEWn",
  "key32": "3GH6CAfT55ihD5LTecGFvTPooVWR2AKE974JXLDe2ApHRWEeQUaELnq8ciJ8z8i3z4fUb5JDXGTQJYCnFZtPvrMF",
  "key33": "4iDT9LNbTfY6GMEuWPesbFCya5SDUzdQdaoLTbugZJyYPUrEqKhnZ9sZXpF7tArHz453sZsCEcSxxXcva9XvWneq",
  "key34": "tEATeC5Yew4AX6g3WcMcUCXh6HrAsFtn8QJwW3fvNiWZGXaJCBxFPg5Kv4K3fi511Vz9q1cf1ebtNTVFV62cj1K",
  "key35": "2ikWHi799YnUPqsREDd1bw5Rgv8HAtkQid1B5rGnr98btzEFG6hBJaRSNtBd9iKNNPHuJ7NnMtVpdKP5xm2KYJcb",
  "key36": "2iXMfhHuhNajvwo4PjMcq78GRPyggc3C4KfCvJ18vYqYSpbKJgEb62dVBmQSNyMYSvEMZVtrZ2yETSGvCFTxx3Gs",
  "key37": "4Aific1GYdawtQFZAASZ78Dm6kDBvhnNgaCDUWUTS8ERQSvUZme8Bx5HUSMzb8rE6ZmH9RNiA27mpQmXUvka3PQo",
  "key38": "g3z1CratXBreQhMCLGJqLFXej7mqjCicoYmuDsXHheTxwxJ59PfnQtkhkcSqQBjcDt2z58Qc24ik1ykjpzq4sen",
  "key39": "3YQeC3yd1DpYxkzVkT3QTgq2Cof34iAKd21WrUsPari6YNnRgJa4MPvSozepBZs5N9aHR5CXyuypWiKusckgB3xJ"
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
