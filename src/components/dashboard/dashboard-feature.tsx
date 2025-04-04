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
    "3b3mrZ7ozPaCgoyoNUY7U9fRktGipyGz9ArEvDbfpnsFW5MhaXdjtH7NUKbeThDSXa1wcAuh6wFgbiMpufxYFURU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FaUhvDo8uKaMAgfBXWu8XR6qFzawCjA2Z4fzLHjvsjDG5CeEjsuWmWyd3j8DC7kTAPiNxWWdhM4vGn9HpWx7ptU",
  "key1": "2cuxQFVqACkXbEGasfXGc43HvPFEsrg9XaQtfrmHLpC4fxLYuTM8x8URX1ahQfhwYtdGPLrCanZM4ckTQWpM1AQU",
  "key2": "T8Cm3oWs2FWreRqEudrRWNiRRSu3AnmEnQRRjZbG8jrd7Za6afktwmqthrufXLWHpJ2NFExscFzwjZQRp3rqsEG",
  "key3": "42BSnk9oYByEycC9WUQKqL8vdWfZrH7zpQkTDa8nyKQA14WW98Zoet2LBDgvg3mjTqiTf5Zv1FKgaCJ3EwQS5wXa",
  "key4": "218vVqEKJvkM2wjWpFHArG6xmkVssBvnnTBVBfjVDZyC6u2yD294FdFXNhT9jikPjb6upmHkJL6jZpRUV8tbvKJQ",
  "key5": "5NY6fZoPN8KtNmCqZLMGbTYkXcbRjcQdHr9eh5KLUEufunGpxXV9Pp4EhujcDDaWCYT2TwxuoUbMcBu6sNfiUnd",
  "key6": "XSonZjsogydMUqsTsQS5AwwwTYfTPRoSUwABdzbRKebojkpsKPkNYBvcFDZ3FPWWmvoW1TaKXVFYCQFtahjR4Nq",
  "key7": "4TgBspxM6Qwpe9CqM1FvXEzoPDAhDHVPcHWgkCnaGB7bv9RpiXYWYJ5GxZuzeSPP7rX9cm7seuGLJmZWY3dbmPjR",
  "key8": "5JfnjPD61rY6kwjdYqnUzJtL2qobYMmHSVd76K4pkMgAZcSiLEjkSX4Rgf4WsJ8MxyCNhHMmgquJtfWMpSyZj1eJ",
  "key9": "5wJE8MxTuNKE6SnTEBTDDGX42ea2BRQKvtdds1QrkpGLZ8Rm7GfsUr3jUejHuQycbr8gxA1YwCqzUVn3vzG3o8XV",
  "key10": "4E3buxoQ4xViSHwxrubvk39EugHA8uzwnucwxqBRBziLKaLy4kAHJ5qTSQXJ1xfUSLKJKUiMdzqv8cpjHAUrrDze",
  "key11": "6x8HBfeLkDcCEGi5ex94qdsxMqeL3rrtMSbpgL5xcagEF2nDjBsE3jySqyXku7XakhSF78pUg3x6wiy2kcpfjQB",
  "key12": "2LD2Xer4Jtujdz8AvjbCicVR32FFVtcnikjY4sVwdvSiw8shoC288HDnGiuvk5Z9A2HFVH1LYPTsmnTnvqjX7SDs",
  "key13": "3TP9mj4qXRYSUsVSaCD7fh3fBtBuNkTxmTfuyZkMDon8ayzmJETgDMRKsLDZ2JRKqcs6RXFbf1prPgGBVfmEEnny",
  "key14": "4ozsShVJtTPPXwMKFHNaiQSJD1cgsu75Zjambaf38NgqtnS5GxY99TCzKWWGFvnv7UEUXNwBqWL1s9sBHv1uK7GT",
  "key15": "4sgrY5QhMjjzc9jZ1Eo5p9XHjj7Jsk2r5dKTumt6oEuUXTFq7XiYapFGG3rt1SttuXTY3Ay8jZQKkyFy4V9v9Jyf",
  "key16": "3Rm9KAmYfnhCFjWrtzRFeuTDZHvFb739gXpkvY3zy9C8p4gipZoLvKJNtRCXEVA3zfLu4X8rNw3sXGPBPQA8D9MJ",
  "key17": "zExJxJQK4mVRj6BYEnYgZRbJKQA8dTSb2kURsCGs7YPDF9rjLK61gAswEBbUNChq7oiNh3uFkgeW9RQ8aKSxQbF",
  "key18": "41ScPo4oHdt4VqFLAXoW2pgLLnPWyFVkzpuXdEheF6CuVjqctF9E1pD7SeQt9S2AmE8XkpBpQnb8A3CWwBhpEiFD",
  "key19": "2iUR7p5uRR1QegKhv29XRUA5y5jFuaZU3NQG2MZQGQ8zp9Dif2rmoR9Jmzdj4WfSNASQTKAsyDH6r5ViyUTgRVMt",
  "key20": "2MY6XVZMWH5qkjoTd3V29z5RQgSLdeut29s3mws6qWuf8xKR5iEUNcHQddd1dEziWFSCz3nUEih38R4LWEKEp1UU",
  "key21": "49G1AxiWbXv9Hq9Ks1sH1gFTfGSo64M2QZDAEcvfazHiUK9apQzSdTWYAvhhZMx3bDVP6thQUrXMPvCCN2Hn2Ene",
  "key22": "2sV7bEdXUUGfVu6EJZUjCpeAsjJ4EQaCQ47E49p6UWRuhjhto2kfUYhJWPcazAX8aBqkz3theg19rjaXzWFTtygm",
  "key23": "5LPibTkPUUbhesjYouA63NjMJyATeXuGY9XKRXdcH6tDsBoagS998ZLnih1bSCuXnc5DCR2nGsjH6o74m97hQZXC",
  "key24": "66uXQe4iPpDhdgj4zBt8qyjmrqxHVsnKGKyq2cHEYAg85fzeV1DhJPa1M534oa9iSWWmCTqkejkJyiXNWnUW4wjv",
  "key25": "2QTve5VkvEtfvN8QqYk489UPM4dEAn4ccYsiaZ4jmtDTh1HWNoch3Nu51gaaa1JzzEv65RcMGfaAjLNbtARpVVze",
  "key26": "2TW8G9ipPch1Nc36uBcNPHQYQF5gzHq2yZX4z4YbeTgokQb8YyvQHZPhqTzWGUyu2N7LZ2R7mATp2qEppxzevuLh",
  "key27": "4MKHPHC8rTA1JGCBMxZ57eP6UQSY9bLYLWg2SQQJfx47jbJDHUYiaTj27VLBssHN7tfYzJ4m3xu8wo1QAJc6nWda",
  "key28": "4s9ZUVYvDUnfuXXnt8eH5J7T39YdnTNNi56k1qdfhiwmSgaqSky6Mn4DAJDtp8vRwbyCCSWAFx9mVhe4zwbH2QRT"
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
