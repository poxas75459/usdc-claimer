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
    "8FbbXVGPSdAp3EuCb6k6xLpj8cEMfqqrACtdcUBWbpczjbQT3M2EZpBk2gmzQ5teXaCvswiLGr6uFwQgESgMvN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63sNRkyUD7xQi3RyWXuxtmDpx9oDjKPmPnmoias8nGWf9jNax68MAeHXsnnu9cxaGw22hHUNj3DPPoKGPn3ZZohX",
  "key1": "49CZHAHBQCzUADhNJYG2mwtPvu7x5QQ1szHiy1MuFswSTfupvd1Vnc5LEd2WipC74rtQy3Uc7MEUnFXYaCxAoVFe",
  "key2": "5QyFVSNZ8411pNqc6uQLcKspiU4Ewi43FLNvrTcrycN44qDvrKvgbvfVPt6YS2TgSj4w1YgBtTzpDUKNsJrfz5EV",
  "key3": "4GeGETh5p52cXx3m3uiCBGCKvjLwT66QES4Ksn74T8X9SfV1eVTsfQ1CqmzkKEMuc1RZzVMyDMDFvCek5Ecnni13",
  "key4": "4oecdEVaBUHoP2aTFiVx3MQdn3xdoEmx6sHUjY6Sd6RmE1Upp6XFEDNnJWG1Zrg6mPW6q1SQeMYkfSwAMVwvQzVC",
  "key5": "5PDSz48oYUKGQcYT8NMkFQrUQF2Se2qkXm9RYRmgrWwBXx1b7ciPhNrFVrwn6TD26oeFN6CiccTwibDuzUKeFeuD",
  "key6": "2W8WDGfT3s7EcFDzyeosZUBupydJMP4GUv3TcTLXW29aHqwmdE7L571zMe9Q3bgy4aJJctsG1W4M2MHz2hL4gZK9",
  "key7": "2UfSgBpgYbJRhwrtzdcSobYsy6CVXDHF4xz1B2KdjF9PvvctXR6DSmEtDB2g5ppSG3P5abGNwktCUcrLPwUXmND2",
  "key8": "CC71BdXxYitAXF9NjDhbfoGA9gJ6rbfSScbgeR6VznNRA958gbUSvGf9ExA6Q4yKUo4PRCeQeik8u4o72Rb7dy9",
  "key9": "wjUEVDTkMXE3m6bMHMjczSYb9jB2kdiLjvHPrJ4aKCkzKBdq8fQQR3cXTPMLAKAvorv6cfRbMj8GyCqDYR8e8Qf",
  "key10": "42WSVZ5mqDLki5iTwsRTgE2nEFqTNY1jbZhkwpDGHTQA6uiUdN1fEhv59KRfxNxXGq9AyPrMtmgpkvqAHxJTTo4i",
  "key11": "5VVNGXAU3RHHbYyKogx8PnL7D1PmTMpNb4nd69yPxwM6Pp9sStBakd6HaRrUGGggQ8dnTNJ95jnVb3vxa1cXNhDu",
  "key12": "2MPx1mHMsWcJvizXGy2jctTkJMyTMZWyCpdxZQBwjACYDLU3dR6qz8oMHRELVoHqqvEFXn4s4peLUqz3hXPChhJC",
  "key13": "5UEA58n7gYYnnwKocaQNsjwm39zgnHqYRXd1jhqcZ3Q6umfLu7TwG7tjW3hNfEShaPE9k1DVRcmxgJf5UE9mHRVo",
  "key14": "5Gsyv5JbHJeBvYykN69M51WzWC4fLXtHBZjXsY1FbyDFbmZqcRSLHT8gNqNDXoQQSRuEoY7NHrqmceVv25qktQ2g",
  "key15": "51TJgLh59d6hdPFXgnPXNCU4JmBqoVzdRA3WgMCfMAuXB94YAMxRFBPCCfpEVgeZztstFFMxHS2Shy3QoGPJsVpa",
  "key16": "4mD8ubFuaJjUJYRi8w2MABvn3PyjifEQsv2ucYF9yF6BaqReGmvoL8utqt3pgxfspLb6v7bApTvch1UZQSQpeWpP",
  "key17": "3McLx7oCcvpQUuPgXii8smYVCenifTgxvxNrhq8xbKcLF4LWoEqNd8vETmp1hLuFzxymo3bYpB4Mqm5MP3nnmqGu",
  "key18": "31iC6nxQCLYif5AqxXtV5Pdfmx6wNRKWsW33KDH22hNfUmjX4DQLxME8jspgXxo1n3Xy6mtXdpZNXV5jr2ehSww5",
  "key19": "3vMT2W7hiVPUr2jTmLTj4nnbofBZvhDWj88cx8cMPrf1ezyT83R5yYQMgWjdpHQ2SnHv9GUT9azMP83dFyJ5qLvr",
  "key20": "4sjs33CjgZk2BhvbZ3DRvG5XQc8AFdoX76LCEyAJPokrvRpKySyHxEv3giTsFMUU6kYpZ1eHY42izHS4dr5v2RQT",
  "key21": "5sPyMo9p464T2s9bq1kmcxCoeBC9qvd33EWunYudQaBWE7nT7XBqdC6MbHNWKp2iUjBrkScx1VRzUzuLd1VfqEpL",
  "key22": "3417bmNoy5LqppEYy5gUsMXXoZYL1UZvUbPsjbN9BdnzLTCyDXiiw26YS5JziEHDRv7HuApAmY6aKTs9K3gqUg9r",
  "key23": "3my15g5AkXanNwDgdnwZ5HLaRRDzSj6uZnJGD2uKajdW8VYZGzzMPnSpM4HXTTpPpycrUyDvEvb6wwgYRYqzEMoX",
  "key24": "5p3XXxBLbHLMzZD7K1wrbw7eGVQzwZ6f9YqL4JMF5Sue9HsKRXrnSqMLS8EFDT7Na1W93Zsmw9LBhhZ3u45mzZGm",
  "key25": "2kjGHqAMmR6N934fkWauTyrYnFL3YZ9tCcNncDd8NHM5iQihLVp55obHnWQtYSdMdvXfoLRrTjAqmq2jv16FLi4D",
  "key26": "3W1Bt8KhVet7Mk95Yyz4ctEEzYsmSXmEHLBCYjSjgXYQhGmWDBmD2vp29zQXydcwuZS7NwBK8j5RJh3ZegjkkF1h",
  "key27": "3Qhc3vSoeFscfbvhnJGQrCk7sVG2YZThqex8VwuNBDQ7QmGRTdC3zLi1bUKtxD9pCTjnSAcqNiHhypNYvBGwMuYY",
  "key28": "4uAwsDYRFBTMNmiwh7TqMwK6S5oviEPD562wqabaJbSELdk5UMJrvhVobeTtxv1VRSRJvwupjs2pnYgrJLvvfHAB",
  "key29": "4auucJX94mHFGUf234dgG447eBksQVQkUfS9WdCvtMJgVoPtqTHevePR4WuRQkfMEFTc9op2CuGDz5Qj5GrdkVbp",
  "key30": "631epW1H2B7prvG6Hgg6LXSeeJb6VGjHh1cVbJ7LfoG2wMM8oqmbt66pxGyCpvvdJ7w2i5qDxe9bbiUvgHNLLdS4",
  "key31": "4bMpupkez51fE5yhrpPWHuX2TjTPJA6a5MfSNXvSToEcnvr5KHUELvd3Eav2gZJsZ7gdDM9sFAYfBv9gZhEGcnWx",
  "key32": "3qnfPtFiBr8Xc6KGfiUxVUbfLGKuCAQgtrz1GqXAceptfDgeKWHdtAGTQzBejQo6T3Pjc9APYfbgn3ciFoUCu7QT",
  "key33": "2L3GQWjsc9inPYBEc45twketEvxYzBqi81camuaWGNgwmmuHnZxntMdSeSgFbYbMVh6VSig7xnrL1rNN9Wifq5TZ",
  "key34": "4YTLvrkR6C1Gmgw2Mzzy3tVvbeSAP9UYaFuvoVtGVf1NzhsoP77Z978EaB3PSxHrXN57kFuKbcr46Q2VHicuoHAk"
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
