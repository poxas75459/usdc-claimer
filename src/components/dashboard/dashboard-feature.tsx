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
    "3dkEsDTSJvgeuHrvyckV68Byd6GCpGbQovmVHGLikHBFLkf4TDF7hLEkhY7aRw7EMTBJx8xs52euvVBCcEMpDnXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NAXnrpmdsRu6ncapRnpYgjkCdexNVerrmmfdQFJbPjCuzFq5pscPVzkGQ6BjduUcJojusdEbUsx3DocQiebZkjM",
  "key1": "3eN2fB3TXFqMdLj9qn9hUipGpt5XVXWsKzpetUtUq4bsk9rKRMG4iqXkcEv7qQij1P6bw3rJHDZfbixTqZenDDtu",
  "key2": "pdWNsMfbJwb2K84WCnbhzKydTiycWt78bndQLmxRUhM2NNgzhCAdDM4etU3MP2J8GE6hCru9tVLavYZ7Kqx6dXg",
  "key3": "3Le1Ug4aEJBxPHvnYRtTWDhk7dPvsYCoFrvxR4y6dzKdwWQQz6SykCCvW9MSQm8LLbsD43mAkw136BX5dX3sgaVH",
  "key4": "3srJcW62fZovfVTiQb7dptvm9CrRvkhxs3BfrfJe5v9usDWsTLpNZ72NSwMxF7vuZ6y6QTY6AvJ3LihacMowsNqy",
  "key5": "3XGQYivZQCNcDhr95Ab5wYGTxaYzZp4jGc2xwRdrLa9UvkXVmz7EibmLxGqEKQvqtpy2Q1SZZbQLT3U4XueVUJj8",
  "key6": "nUEAdhyHmMXTmhNwERq1rXyWPRqDUHWV3B1SHy99jRbZELnsYdHAfPhbsfMfEL63acfzaTV9GnX1MopvzmMcXRP",
  "key7": "3ytyQQjG81AhzT4enufHFsCdyn7Q3Pehj9wGkWsJQ9GpDxSsBaaLirRXYdHtBTiqTqiRq1RPW9CeQrBhc595aoPA",
  "key8": "3udgtMHUrQY4igT1YefhnH1ngEGuxHnbmNWq1Q8K4ToCFwuNq8Pnp3ehZduhdiffyH8TxDCb1Rs1FPp2wgBKXmhb",
  "key9": "3EFvykpANmS75dZR7mWaZssdiMyGTf21d6NhDY7fVVW1kvPC9WUzzMfa7ucg54KRWvCaBZEqwAnwixm5Sp9DsEf1",
  "key10": "2u6osB5TtCnpZGd7jCHPn35ddvjNLfvoDWDgpHKDkSebkGrcYfYtQngREJvvSfBUYoksV3qdyd2CWDc94WnC9EDA",
  "key11": "HnZKjoJo8dHqqyy6zA6KeBrpSkhKKvhyjzKh1keDrSLDUErk8yVGSZHRN1kmL3Jbjpg89WbAUVtNUNzsZsXdb7P",
  "key12": "5zAQuFK2mhKae1YZMMpsLKwbqF6KyeziUyKntN4rsmRiJsFHTMRCzSbuP17s3UpHaJwGErPR32W2DfoxLr2aiLET",
  "key13": "256WHBAH23nxyeV6fi9rGJAVDYdqcgssTDXsJhM4pVyukoNsMoAR3V3cVGHQgwnBA2jZecRSDKNCvNxTw9Xbde3J",
  "key14": "2z6grGZFnemKfB6DoyNeNt7oag3JT8gPtrt8wuuT9TS9ZCAM2JnmRjQdMfw9vjCSRKHcqsyKzx67K2CKRTvythRR",
  "key15": "4fBCdtzPKnh6aESAUiRtnK1avqXPR8F7azh8TY3gay5GgU9LgWnZ5DuHihPi1Ny7hnjz7B2TFSqwNjoeDdeqCwTt",
  "key16": "33cp72tmckTHyVDuzSVESjYJx2MpGnYpuW6Pfp6m72WFHXquz1atRL2EHLckcHjttjGSqeL5JxaAT3kDBvwkgSdg",
  "key17": "4uWPkjpSsoncBMPfCqdE2P94BKVYcDRuMAuCfRdbENJXGdqipEXYrYWfnyex2hqvfVCVg6yxX13FZUa6CW64rJky",
  "key18": "4xyrySwRxzQgW6VtyM3kKJarPmKWN9xD6TjK6oyn1DRiTxmkWx5G3k2Hgb5rTZC94bZ4QfYubpViwiHBhsc7vsqv",
  "key19": "nKma1raTRotSjTUdQV6fDzaG64SxqGRuU8cq36V3q8EdnaLm6hRq6YYykvXvyUsoW81N6QUxZSzksVmcsTKfBmn",
  "key20": "2fhFi8qYCDfcdFibDXTgXKmyT9EG4u1dWtpmnDARAo7hFmbSxfC2LEek4cELM3gBW1sLh6ZD2yBTTq9qMjJS52fr",
  "key21": "2usCfXgrCAkbE25qm6g7eAjE8R2ztxMXzTLAVd5ds9hS1ELuGVQmQZW3cw6p9bWJmhgMa2JZrQ1HNZAXaBTNtie6",
  "key22": "cSmPAfYpcdnnxqaVF1yPdAP6RkVTf6eavAhGB4taFpzrHDkJ4YXpKYEiYzATWFYJoc7hhe92WBsyCVofZYjGJxB",
  "key23": "3Kksg5U3Db2YmknKhv335QbG6Jaq3tgbDWGdYzxsYUnTQEAnDa5gukq8GuZ8Mq15h1ins47mhqQY3fDv7RQAChwN",
  "key24": "ABdq27MsoYXHp32VWf7po8ihGfF1zK9j3RTHNGN4XMVrUi4vv2x4A5neWuQpQuJwM1ojsu2E27d9tpBMQd6o3Qn",
  "key25": "3mXEXCj8xnsgE4x8CDwzpy9bYbtVWXEzC3LEuwN5fNiT28argb8qSdVoqsaFBdJWzK29XNPUfJwt18Xot992Gvsd",
  "key26": "4WSPBRxw6hNpFAEHr1ksEzSRHFf6E3wGCY7WUSTWBwe8p53quz2cMwFhjUNq7Wo6NoDkPMZZhEFvwnRH74vqZTVN",
  "key27": "WiDBPQNwLTKNVuXwX2Ai2yp1ZWNTDDtLpmp4PvyLJABzPMVCbUdcvxvVHUbRS657EyuMyGmtU4RkscS1MGKXpcJ",
  "key28": "5H6SjSi2JpQRFa33XJanNr2xCo3oQDAwREziZ4Vp51CQXLcESm5UQf7n4D5gHMTySq4bHf5XxGnrxpKFNgF5x33u",
  "key29": "4yuBVHWHPTLPVK2cgves7Zy3Kc2CWUdF6VHHjju6NcsRW2PTEPjFWVwLKfZ5iqcLqmRgJ8Lf7skt327NFPSDQJXV",
  "key30": "2ocfmNAMZhDn6Th5MC2szqWuXZ1mqCsUhnrbFZaESTPPjX7kA4rDCmcRy44J7U7Nxj5jxTic3e6McCsQLuXpGCQg",
  "key31": "ME1gbq1Cgc8h8zAZdMvMU8b2brz8ayDfQ3bN52SPq5KhqGDiT3bcd1MY8utZ89t41iEnEFGhWX2aCeUXC4mAPgp"
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
