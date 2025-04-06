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
    "QJNCG9s7bmQ4CfBWPxrspAbw8fpm45uHa5Ztyun1uyyWVDuBzoqthy7qmjkRVfq2QtCWgFdySqqSsZZNoTdWrBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g3xb5A49GU728zoKpYP8QS1J33hBhDWVcqvggrE26NqaRxcWVb6pvUmDSPma7ddRnsLX1Gx238YHFkHnrdiRoTN",
  "key1": "36xtcbnodHUsF1pHDEWHniyEXEumiWpjhgRSLsTtubEgThN88eC8oiT4rWwJPrinvZyJnCQSvR3pPha36yhhXY9T",
  "key2": "4sArKXGfbh2PrEpzEtQ16LRJwBhBGYaRNtGGHc7MiDQh1h1qH7ikvH6vr2XJSMpyCew3h5tBPK1um3uqy18FpRbd",
  "key3": "3asEzepH3CdeYQgoDFP3p5ZxAsWKnZ14RVNJgbYUBZwR9WEdTKzif5wYoyUjsHmntpiganW91QXLXcq1xmLuK68s",
  "key4": "qKuP74sL7fLjYwkfVLivA28MiiMRQLLkQFrTMH56oZV1gzjfLxxVQ7uZYKswECWGWa352ta7eKhzTmjYUnobVmB",
  "key5": "2jNsn4fmiEJR5jqBbPJwRjGYvhikDXxGHXAyTvSEa3avJEFPpVSHFY7WUxDeBrNztLh38dkaEtDACmMGxHHSLMPe",
  "key6": "4E9SveiwEkPyfR5u1VjBba14CNWVaZsayMsosL9ekEjFwLkSDnE7WEba1hGkcWAdjnxAq6yxo1iboXhFt25tdh7e",
  "key7": "BhmNZwhXNdyB3tKzAhhTmmYhbhUD2bbC2zMWHbBrUBnihqk47jcTiGFL5D1YX3LeAjqWWTJrcmHSSdNEnfrz7WR",
  "key8": "4P9C64ifVgVGQhfu5xKsDnEjxYD8iieT8KVvWYk5WpCXjq3adpvW4mkRESXUXccAfd64m2BzZtmYvqqL5M41sTNC",
  "key9": "45qEBYQoWCMttWjbr8K7UzUybDMPQgToJr2qPKhiZ1osFMAAgMHdvEeNVTDYBZS1vgTpja8MHLAi2JTn4R8UX5aK",
  "key10": "2Ekp8xmCVpapi1SJxu96hWK6WGvis9HohpHnCVGgEj4MVFEnvSnz1YyHAoszo5pmjv2KTHgEREsMib79dTr9BM5o",
  "key11": "45DMvo2XqF3Lh5zLoNuaYzJzRqCWK3yYNMQB8DyNNWM3BwSg3KGhfuTygRSfekBVKBqx9EcQ7S8viA1h5NmJSEN5",
  "key12": "4Q5ziCrQoo9jiTAMF2i5JQ5AUJTcay44b9FYX2iUziMn1dZRN1cvFTaSybKV6gHTF6tdm6oJFkaqfwsEvhXviaKz",
  "key13": "63ETwUAbjfHXgocpoNBS8DrpMLux62LnYjf1fQYzNHLSbg89ufcJgRcf41PHf3NdX8xh1g8QzUbk4D186veVzv7V",
  "key14": "t4TBz6bEpV91w23M852MiPMohqtc5yBMnmrMcMMBzRWpfAeT5LcvDfPrn9D4r7KL3sWBBoq5tzkkZEBeapKMTfA",
  "key15": "2P5r5rcTQbDEiRr4hcgrE2Nuapq5o4ViVjQWnFLewXRCy9NRzBMQWhykwPBb2hewfsYg8gVFdkWmyi2rNMYZeosc",
  "key16": "27LQgshHWhVCgsPAxPq6uQrnkWR5pXeUcFXWZJevZM2ni7j68Rd4J9Qx9pVuiugsaC2HfQaZSHxdemwxX4RqmDTC",
  "key17": "2fasiFyDCYAag1j2K9i2p9J3LbtQA4Tby6qVN3jVAMFdLGd1NQTRHKsvs1LBWrdWFKpzMogHqqz3s42ieaNKJkZG",
  "key18": "3s8WVZVzt6qpBY1dFaHFKp8Vcgs4wFfP3uKLnT3WqucdwrNCFMUoK3E9qedYUjN3gxwjh43t7SGEdv6nRNuFEa34",
  "key19": "31jHcx2LgedTqU63eFkC6amF7hXwazheCH8fpzUberhdbF1qj59rJVgbccHtARZgDtojPnY4qUjofXrFcJAxRtBa",
  "key20": "Ygh1fsVBRmgytkUD23pD3LoXuwn2ByDFkrEgVUaApknr33npw6xADHYD577cF5LeT9FhBavc3Tnc6LzwjKCacyD",
  "key21": "4sZxhqghiTaFVYQBHo6xZW6fWDZ98YmQk7S7oZaMdKoxpGdW9GAwTDsMsTKt6v47Qoe65GRwkzFLPFeHCMKdfrk6",
  "key22": "5RFRbqYC7mLNsFiRHqPtTepvBSHmekix63U4MzeAhGy43xvbMuEyXESwrmReMgbeNep4KTP8t68Xth7RGfFa9ySL",
  "key23": "mP1icAmCLRyeJQCj5wDNNPHE6AyBMvkrbGmZ4hivgpRgQ4syd13aiQpKWMA1ZDnyofNdtaMRN48GudjTF2WodSn",
  "key24": "3Xq32hCxrHApBTS3KAye4VZT9gPxwQMZEBiiV6whCFZA9LQvRom4dWNT731Db3iiCzgWLeepRDpJQMi1TsbzGTf",
  "key25": "5x3TFXaNcW3VErsAbsY356fvk2TKmffnkiXv34F3aiLFYBbAYQb7iNKV8RMqLGFpxCgb3Q5RtdrExCG1ZfoRkkiX",
  "key26": "627ppwkxm1oMgH29ctUkcdAtUH1Z9irrtjtVB3xnVBtVNarj1fXbrJw5H2d1vXRH6r6m6FVxa4FXrj2XmEEkdEAP",
  "key27": "CETGLoLSyxSkoziLA8CnxWtyZ3zCaxsnJJbpWZdVmFavxpAqotYVSXgpe6Y7oQzyGGqxMmcdsAAfkYBV7TJYdeF",
  "key28": "2a2WnhyzQrtYDp2YyffvZx58zZcAuFptLoPyS3M9ZRRiMtHpvcYqX92ZnJH9redwcmWwHLe9hSAUgzjoht7DTR5x",
  "key29": "5rbEK79AZjfRwb5LFSm4cj4bZkXBDGAuU6yjzZEPmSgqzmGh24KxQJwBBeKPrVYhTYqAbx89pigpc3gNNNkSMCzx"
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
