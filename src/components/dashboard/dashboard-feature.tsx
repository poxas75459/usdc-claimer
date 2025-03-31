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
    "2q6TP3V7ZFnXYxvAGMBN29Rva5qoEybUzrCpB3Vw3ntwXCf4H1jyFerV3Mr52kxZBG4hhRqAYcgJBNjV8DXUwA2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jq3zTERjomRADnLaUfP63s4MvYWEzmR5M4d2N1S9VCjcZGTPmtJGw4wdgqqMyjvLbq3UWybj1iVn6ZsNB7m3rhb",
  "key1": "3iS6BbtzheFvq2ofwcA29V3CLa4RqGivaF3kcqFbwrSVucoSwEtRkF8YigFj3aS8bNN8kh19CiEjQAiEAzt5YEHm",
  "key2": "3ktZQYXK2GiqWyC9mgMmmrWTcoCJmZG8GrtMwpDtV1q4btoGTQTERuZXJzG16s9TzmWu4n6Y2azV5tAzdSzBSfAu",
  "key3": "4GK8KafWUCcz4LfJyKhX9YEz8CiMLwVnpa9nLdsJtTaa2xq5Y1E6ujT4fWaotoXDZnK7cUW73SjW9ZGDkGSw9chg",
  "key4": "4qNevM6PNsC8Yc5G25VNhDRj7vmuB386aUrnbaAk4wPdoQsLvVgUBoRyC4eu89SUWHYQ5wYPsqZzZ92evmnjtkQS",
  "key5": "4uNuHRu4kThnFbrjp6YJSsrJDMpm3Z9PeyHNpW2mh3HcHfaREs1cB1avgNCf8SZBxEdeuTRfFoBWqJC3o2HVayCa",
  "key6": "4op2crU2xu3pJsi7ScSx3rJGbBv6s42gYfwk26rULWvxhjEryDkw6Cn97HVbtvAG7exzfHToQGcUeA5HddjyqPLk",
  "key7": "4SWjj3LtFsxT6HeSiAJk4xeD74As9ybWWL7RErMgpwRAvXjqiq1CBvnzXLiwFaoDQ2taaHpcsRR95nUyUd9YbWXC",
  "key8": "2r9vmwhQ2wQPzoyf5JbAbRxzZbBuy2H5pLaEL1RHQiiUEtKk9ZXrV92ZhBF3gonEB8gFsaFDVAkMVHtJYHSUJfNZ",
  "key9": "4ViV6NdDxH1JmdKsTaiHp6p7G9iUWKpGkZvMRzVRZcHNrqth5T2cLUppELdaB7UnCs7tkMagQ1KsUKxYaWB8K49p",
  "key10": "5c3cmTuByNS2QZhPyHPqRJZa2L96Udedn4YCoXeXuhderFecy7XbGh69GYxCva7sfvn7cm7H9WekH8zgb6bsw9ah",
  "key11": "46nmRjVf5ByTGhacGH3QUQXGY3UY9hVMw1SfMVnQKCpEz55EHgeGMkiAVyNeqTc2W7HDBhNBTW6hd5gPuVdrPZzY",
  "key12": "2yGFne6MxMCpBnBuTFkirPft9VYZ2GHcmeq2yv7yyigKrWn9pRBo5Nd6sXzPUSNfeEVsCpTvf9d1Q2qWP6uc7EBn",
  "key13": "waAyBuZMy8ABg6qYARCLizAP1DRVwutz9ZaYxNLK87kUActpgJ2jswQAtwdhhb17pxSt4tAF2ohgdjPT4P6ECEX",
  "key14": "47ik5YqGvwFpubBoqGA4QcP9grpy8itH9HfewxgxvNhPCKbXmfzMbP16Agpdk8uJcNtnmNbbHr33oMbEnSfTzFLX",
  "key15": "4XwfmMAjoJ6FJPSRDTTKjjqCvftZPzha6iagqC4GRx223AdEkR5DP4HRNsE9sj5E3Lco5ngBPmLLv8AnnCcDtGPj",
  "key16": "5ZXbxXEhnf2Jsi8WG2F6xmVWvefzB5kpMTq8Wrauvj2a7VAaeW9E6cpxEzWs5aezHapthjdAKrca4vmDZPd9AGCD",
  "key17": "4zE5ysXnQYM9iv4vxSHUNBpa9uTdEVFnzvVV4vYe9ovhKjDAYZ7JP9dXkFgY6Z4UxNziKGugr6SMPdtfW7cdEJuN",
  "key18": "4n5E6bdqJ8SDgY6SpsFkU1yV74NFxeeynKKFf2Pz4vmvEsUJiRUeQmBhasU871oY4HP2fpZKNu6Pa7MvkaYJu5VP",
  "key19": "2RfB8YvEG7ZBLWoSQeQszWRzq1AbnF92ytrbxtUgoDb28NiCvQSHrCc2vZaLsnZjGYRpeTDq6r7mJwwKyUddLuYM",
  "key20": "YMVQz324csnbp2KbsUe8zML5DiG5eGPYmMwC8tdDNR9Ho7WsejhzKHrktT7qtxbDHhCNuDS5QK1Yat4J4iyWwFp",
  "key21": "4T9n6MbQY58QXLUEhbBcTPh2X1secJTV5tQdWjuxDFGmnESvSMchVkhRGC3VpHMddXDfNdLeFVZiB8aVy3feLPmN",
  "key22": "3iQRYcw6X8zmbmUqzYycpgoN7SLPJv6gr6F6VFQZSa58pa66hU61CbxJYLPGBQrVc3h5hhGSaXiNYv3JgjVgELAT",
  "key23": "4ukMyGBpo8ybCBast1ANpQu8tnW33zPxCce6G3bEMY57mt38TxEYuteSutcmCe3DBpaXDHZth7NM6Q1MVCvsxsoJ",
  "key24": "3c9cSfHtoEBBtao2Sihsm5qtALfAwws5fHHHEW7NKFaKwtUN8sXgxXwji3pdLUim5t13guF4SDATrZw6FX2MsxDz",
  "key25": "31c5BK258PotLENJimDRnjyApar5Pfe89WQ2pVDuY8ETHtEBrjsHEe8qXbL7v7THs4tJFkDAgsqoz7djq72o6don",
  "key26": "vEvhri5n4HfEuj9JugVL1XdBbTCvF3LivgKRZ7iYRTS6drZRfuq2DWE6BCqUDyy1gDqgpAefgKzTEhjPC2F5hFQ",
  "key27": "5KbN8eMLzFc4i2bJkuNA1sNs59QKRX6W5pJdP9mgjbujDiLuw6J6MYZcA2Dzr39FoJFXbCkwAYEWFpTuZBHL53d3",
  "key28": "7ZdSxmeTZAvcNXSDxTLUuRNW5SvzEHou6SDYwWZ2W4dzv5L8n6dkka4GvSvUMDLQiSPd637D31L3fRerSTzJeZF",
  "key29": "5ex3U1VSxZCseSNArvpeZh6vGZfgeWkM1HPQBaLU6XK3SqzkNdFm94cCQcwVP5VUYkqVPMiT6tUVtt5GY1eB9GLY",
  "key30": "5yg1bpMaaLomiffVe175ukKw95uMHgjYfD7vb2jqETR9fZKH6eUqtJdeE5VPE3DExD5fhS5xskZDT3Z27LkyJvEf",
  "key31": "642wStutMYEmHACMMfnEC4NLMsdjV1E1Tx1UEzx17LJ4Lf3bvr5uTpXqaXwiRfsoTixfH1exrpZXwnEnRJrULkrN"
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
