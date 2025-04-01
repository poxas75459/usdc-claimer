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
    "2vjU2XYaywPLMU9mAwbHBE2CiZKH2oZibA7yYxqo5VQR5k2Bi7sSHbVRzi77Gq6R6EvP9PKdGEWsWBtKDxpmTJHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "crRYwKcUFtM1nZs7Nmz3We3nLoGHXg5XSEAdiunQ9kATmiznYsPKwHidrfMQ3kxJtgf4vBfGER9jG8hQ81Jpaou",
  "key1": "3gZ7crvWNwbVgFFRuBUnseeectEdZxtVPCrU6oLembJQGAnzw6KHCngb4tCrV5NdhFdev7hcFp8aRtPNrZuQMECP",
  "key2": "3i6Fc4ebwBjuxxU14suB1VxhWcRx2KZwEEBsV8BYwUaYTrpma57suPuS5PbAQaCmWuHMEy5DMUzQjxTGtePo2MKo",
  "key3": "5FkPjK8cAFNdutZrt6KpKSy448VVn6wX2F42f3Kj7wwTvkSeYfa9vgtPzYYJ2pBLNPZF6BEgCn289zjzcEcg254U",
  "key4": "D5yJKSDdsv1dYvZfcZoAsr6Gzz7XNLPWnEN4mDhNTzzc9Qq96uou4ia8yR3UaPkGKvKKUqE9qA34yrX1AuQMyVw",
  "key5": "3B3h2Bg9zijK5MoWshF5bpHXmkmiioDmt9qbHK3CshJ1VYvtdw3FNcmMBu7bUtCFjGUs6697PLiGvohGm4eDMg5q",
  "key6": "14qRFP7tkk7UmcSCXbFoFMvSoFBKT4bXBNPzukkqACyWGdSb5QCXPYkJhGtbgGQ4oHNm9CVjVKMxD52s6fVsuKK",
  "key7": "52SUSBjjES2sktxqqn8GpQB4dpBUnK1ic7n2Shy51uiLYy2twfo6WxAMmWCHanfebgX54AUqNmMu1uFAUHX7pDFa",
  "key8": "5PsVbu9yyAEuqq6Zs6jepEVz4wftnvWPr8aoQcTJ2Q7ZBBBZ79ZVKRB2UXq4PZtDmuzvJqQLhHhhCADyP6EyQ6dX",
  "key9": "4hLvYaJAZHvakt9gqMJMxH8HgGxRP5szjNr1ve3WM5ZeoYobcT1La5TDW3SLk8eU4cPAYbrteZnvM4eGX4gypTc6",
  "key10": "46K3jnAn7PSTgy9f1nPq9x1GuS97Kx7cDGq9ktvRWuttUXutxZ5UrJ9C9knMr7k67q66pzBSZijUbyKbYbhodHqy",
  "key11": "4QNrVXkuKbgCwHkt9EAqf3nHHTLCXwjsqhR9qiKfrbBNeBeFo7zddTx1PbW2dbHN1sGudJ2ZyXHTMM9ShLMMaeZF",
  "key12": "3pc1u4Xagqwr2M2AyZH22twEPP3MxTD4MMPTyM7Kvs16cszT1inpAefu759NkAL1SYAYeA6AXdK5DJJNjHfBELJL",
  "key13": "23v8TQNe1XTbasTsFjYwR7GS2bb3MfdsVgz1MB6FvJzUspEDtDfUeBV6U8KsL9eTRAgcCtGddBp39ddm86L5jmzs",
  "key14": "4LdHaEAhn4sm5fwZNwBLYzW7QEjPSWDoUPKs8ZqWpcAnNnfDPBmKX7ahJRDGPRRWoAB8RFYcmhzrrv3UCLw4URca",
  "key15": "2kWkh236kJCExPdq6tWjpoe8PnHpj6pfcQKv2A4sqrEB2iviZA8GCyqB4ZMRPR5fXNoBvwoDTSSfiockfLm5k8r2",
  "key16": "1VeS3ta8Gfn8kiaCyPqyfaYVCPhQu5WQ1n5ap3TWDa9Zjanr4i3QLCrPG3q1EnQvmLiWCKiR2nhNaPPrsweBsxR",
  "key17": "3DdsyPDN6gscisTfG1CZ4tKkMvZ9Usqvi18isfbes2Xi8SuhYAUpXyHEihMCEDmMNodwHy3mWzKhQKUBTgczNi4o",
  "key18": "3nCTPSaeoAHMcXRn1gGMFd7ka4KadA6HBQ6kaVnrjgp285HMJvnLXCjZhuLFyvoUWVeKULefW5wwNzdJEiaQwKkV",
  "key19": "3npSMHpnKArD8CdovFyvqoe5PJX3YsipFAz9xiGSCJt6UVbPuYP1HqkidgfbjpYEMuLpGC964A3MQXL9E5gox2h5",
  "key20": "2w3LQbdbP7BVJX2eaaF4oQX3hBuxj2dtcWCTmoS5E4z2u9tk6sUMGKd6RZgdUvX86EYhM4yJjSg59GwUsrUw9XRo",
  "key21": "TBffvDKJYDme5xNRd2w8pChjWWx6BY16X1gCcbNByLQUZDsfJKoqfs8NbShW6bRrifNPGWEBwShPJhzfRdie4XS",
  "key22": "5QsT4hdKBHRGihS5ZTx8YmxCK41ZuNY3azvhMwWSQz2XkcaYuGVSkcLGMQQHCg9a9nJAcAqLBa1GdRiGHxXL9Jdj",
  "key23": "oRxDN51zQEd5bCNHMuEbAB3AMAebwPksXvCfhYzbpHnr6Qr8LT9hwpPmVJgVUJAGJoHoXmJ5bMyE6sju9y5MMN3",
  "key24": "2gSmuWocHRT7CwLVm6Fed7XoteYwXoCGccMcavbWmKw4Nt9PxbQkSwH22R4vyH8VQTzketx7aHyR2bmosQ62pihp",
  "key25": "5ibUTNKtgFNhdUcGRswr1QiKTkDgtNy5d35qwxFNWMKxWjh9fW3cLVVXZuDBL8S384P9pxDZp71L3EsCmGAKuyHB",
  "key26": "3bM3LgMQzmhDJzh9uBuaGZoK9BiQTGJAAEV3fTvZ98bHr3bGwUurUXmmQtnVvsMp4C1fgsehjhDRtDz33Pgoreet",
  "key27": "4MjPU4D7WiMCvdCUdsYtKYfQBn6MXTo3ydwY6r8Q2h1SQcinxp5SskLvC2WbK1NNv3QxyK2XCTNXVg92AXzfQQUi",
  "key28": "2m1vuwWbZWxxibAdPbT5FgUa9CizZ2Fy256ADPdGhCoEwF7Z4tqTxRZjBZY5atxA6Drr2iGk76g9U78Rr2CRxw2o",
  "key29": "ejQtuRQyDifSJEEBNkzhmcLa3eEBSs9A6qanTGZ1WLYRFkNJpjAbucdonuyXghfN3gXxEoZvD83Rks2gyQzdxSh",
  "key30": "3yBEwtPJhqrtiTrGWKLBGNQhXQfGWMBjhAkXPL6perKgEg9GCjqEYazVxok7L4ECpRB8QKedTi96Aq9yakz4Wkp9",
  "key31": "4Z7r9FkzhckTQTh3P4dp4CHLmNXfY5HqJnLWpKkztKg22SN4hezwAjhAjyTHEzpR9iCKuAk9q7Uby2tsTW9L8eFd",
  "key32": "JTqs4D1pVfEAMGG8NZyKZJgsf4kUH5nWQXvEfpK8Ek2Q9ZLhFocKtMAFt2kriE3jXeaPGYbXmNfqCmvZyWXjq3R",
  "key33": "2hJPcR8dNPnNDegfaHik1FP8JbKRadTcMPK6QoWt1F6ZUYDJQ1PbyjaV317zCPkNGhdYczgLe2RotCMMJXaX391d"
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
