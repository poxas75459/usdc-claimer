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
    "2SPrFtcetXehtK8TumwVUZAE2y8vce5CauWnM9TCsjkj9CMdbhY2Tu5WmgxZd46SFbkQPgSEPi5PeLhLN4GNbHcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GpnUf1DQUcMM4eXWytMrYunqR4EmNfgK64xtneQfUjGKyt4MdyKLgmirhxZqYcDTMReK6Yb43VQ3JWRf3f8hpFm",
  "key1": "5NWxZ8kdzgKuDzNwk9haoNfM7J6WThNFEbX9TFdf7XmkbNMBWbyAHFokerspdyoe6vfJMpPLijHFEs9x5oT9Mfhb",
  "key2": "4KgipBbSBTJgMfup8f478kQ7NQfbpw1rqskHNuhU4R4iRH6A3tUMCfjkfvEWWB1c8iYo5wSfXSvHALrSq82bpg3D",
  "key3": "3QPd5Rmx71n6W8oJya8GBQMFA3Ai8GTiY8u6xFrS1pw1ct68Q7Y6s1HVeUAgbsV1aJ5pJTf2H6wNYRt7yd2m3vVm",
  "key4": "4vwi8qg6Cx5piXzP2ynFaX7E4ZxDjtcyXbL23AJkqA74XCVZxkrQzkk8jiEfABKFMWvFJ9fdb1Sijur9rQN1xMQi",
  "key5": "3TQ57T3ZzvfHcbEyQy2AqrrnD7xDJijft6rysujLmuVgvEQXFN6PuTQPLLwzX4PNFx4eJtJSBSucaLCtu6pV22yL",
  "key6": "24W5Z637ki1fVhAwgfLACGzsJ917rf6XxtS6nLAKaTmRcAHKaHtZqkCSavciTaPnJpPakgUyqMqcdFc6MimyceJS",
  "key7": "5tF2tHUgh3omk82c9XixBMiCDCyPWMYKkR1rX5jFLWajcu3vEA6Zzk246LSpNJueahNe3iGLSM43ViBuUUqFz8vS",
  "key8": "4LLDyMyqDvSQrcd1ea9rnzXsJQ9REDcJHhCkS9Rvq8B9BKZ3LaxkZje9WsQ6ie51ahPvaLs3ZwBbMFNBhKnKknGp",
  "key9": "5mgJfUtGnUD1Dd8wKsU95huR8QjGgSubu8DSFRovEkL8p6HY37moHDMFAqLDh6kNiwapNj6fF9AB21TqjpHFWbmW",
  "key10": "Yh7dGCXorTa1sgHtPmey8ZJXG4VH4wBd6cHdeMkkiyorjG9XLm5vyMVXpcNfnmVHsd6rgAWXqepfogNNv5m4LPp",
  "key11": "EQK7cCRnKRf3ECNYgFygR28jtQGAebUYVtxn7XNUorhmjB43G26G5WU2BE76bUmxmvq7s92FbqpbnYqQotjntaS",
  "key12": "zW8qBWT7pZUxjvLYeHooxHLKDrD9385p7hzZ1cNp17Cg34dUdA31bgB5WiTAyETcXwKMK7KhLaXAs6sgBSTmAmj",
  "key13": "4FmeDwjRczkLTQ5oYnZ4xvn5NEJFNkYNAbejaivheFS3dnJRwcys5mX2cJoyWaYzS2vhrQ7BmuNF5jdqcYRpTQzP",
  "key14": "2MfFFydWyCvVPvV6kSdEiN1twpm7863gbftPihhjZwLZAiRsrErLt9tzpLwRv6vZAL5kav8gTnLDMcbdhM7TYk68",
  "key15": "3i18HDfy6UpZU5s49ySBkTQu7aHoMAZUkBA4onmM18id41JiR3ujvEwffABzKpNzu1349jEij7i4XzhtLcJZe4x2",
  "key16": "zV8GaBCuLte1akB9QUrF7GWYNAK7MhZzewi1Dt4n7hcfnpLHTWntNXopjmy8STPtVut2FwfFg4ZCfVJ2DXDqEax",
  "key17": "2NrGWDBMpcLejxsfUBGkd3TSMnxw43Jtha2toah7KkQWpd3YKq2zJwvUU28nFoEQkvaXWkDUNGaeX9H1ruT7tcEX",
  "key18": "5wEdiUUM33nuWD8LmLTfuASS6ByAPUkogAowc3edZ6JprdbNf8QNEhzdSFEyZB236u4gYf5pQXSqgkYrk2oQGCot",
  "key19": "3aPk7KYnH1KeBaFWJR1hmMDF2UcjWJ9Xz7eXY8KcLeZG2T6TessMtXNYs1kkWUaoijHfYi32kgnepJenpZ9ckLPj",
  "key20": "FtwB7Ww7gJMDkS62kqTAqGhvn4N8oLH3KdKaRagF4tjpdgkMAo99dyZ5dYc1SZwm6H2W6Ecg5w21CFzfUV4eXUb",
  "key21": "17dGW7JNmyoLzYzpxmgWPTtrpprBSfXka4ZpRbndX9tRbbGkWZKAuVWdRNN66ANqS21eB3cje5BycdXZFpqGKYm",
  "key22": "3hwLYTj3TKVjotJuza49eNPo7KtdSCG3GtxfoNyoBXXbyybxxcFRJWRi9iubeEUBYZsVbvzx6Duxdw1LsXRpqvpa",
  "key23": "51fYoWrLpBcS5C7NmhMxqs3oB8ruHzfnE4appSXBp1X4jCUYJAmCD9QNFh28vgtvUqTuLmN5DDPr9XzfUREkk668",
  "key24": "qjTKangrEAjrPU9ZFrT3T5LWKvWFyGjk1vLz4CSAdsJrL1nJoTtxiMNEX7yMBUaJSxEWBf84uobne93dBR8Nah7",
  "key25": "oEmQMckXMPMxiVTE2Qxn2FDcYsTRTL7vVEVKYLHXcs6mFWoGaLZKBjmLDrRqAkXbMro7BHpXkrDLUgKUn3gJxcL",
  "key26": "4wr35QcdXUXZpdEYydUSAzZ2BfZjSW7bkgUmA3qCUqkxVveAekTw2hNXR2aUGD1Gd472UuuiGzTr9Z83kjHMh4Sq",
  "key27": "44amC43mJ7YBNprHn5afBHT7X2p8NBi4KoQTPe7Yq8AHJtmSuFJEtuVihTL12X4PRSSkQS7PCnuyn6LHTaD3UHQB",
  "key28": "P5YPpuPqXtvisSsrkaxfuMGcb4NAN6DQ8Y83C4TxCSnDucLrqxDbiX5FrWfSKUaTnuzkYmtJ2civFXH3PrniSi1",
  "key29": "3KCiZpBULnNZUwVUReKsEXU6P95UzCzQLqJKuMterXuy98cxNnWvnve9kb36vVXeFFzRRskeZbK2LesQRejqb3vg",
  "key30": "5LWsYxoGpVvda2q9oMHdhyDwLweD2mbybyBL2VPkyq5t3YuUvPJ53ZjsRczGLeSnuVbkKRq11Ay71BgnCrVd8hYt",
  "key31": "58gCCeZUyn5VFTvLW9nXHBwSvs4v9UZqWNde5hVov8JGU3buBFKRrRse7SS1HJQJRT87oto4JWSGFftS5q1oYS3M",
  "key32": "zSKiJ7B9zTcHvmPhZupqC2nNpPwFBZ8EXxN5itQ2eTJFtQZvriYgWXrGpy5vYzR2X3fWgnjgMdQboGYELqCkKT9",
  "key33": "1m8pqraCoKrM8kL8SNqtPKBw7CiRrDTmx1ZBM4EZpr9wHuL5oC5EqeXMYT2fcPnCRyvUMmduJqEPEHuiiex7XWz"
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
