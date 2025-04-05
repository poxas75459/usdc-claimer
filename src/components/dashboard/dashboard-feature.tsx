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
    "2kTJqsNbch3Bon94DVE4DEAzx5rNfsiXptnfvkMX9U2M8ienfQ4HxZUBRrLzPw3VXhtJdZ77FWhR44wbiKUPjGVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wob9TxuVh4gWFhKQNRo9Yxy3Syon8U1XUww2ZBnbnwMCdk6VwamSE2DK3hbkaFG4WPkXtrXNUC3gtDSwbJk3sua",
  "key1": "2Ui7JRrMUgZs2pmbar5xtG2D9iZSsEbNJKuzdVwz5b8ugAaXnxofZkwpizS6VMbQiwKyQtxjcz3q61sqjG9hokHL",
  "key2": "2P5tvcsNhfdJpQZC5GfurPLyDCmitgEqviovY5hkK7FBJ6ikKHeBU79929L8nSuUuPt6rGKgL4GDz7ixKygTXQG6",
  "key3": "X2G6ACeYcdLpbAYVPj1xx5dguyHSXNA1vTG8VHsetKMtRRqjKkzg8jYobMBg63TES9HTUDy3W6JadVvW8t2sis3",
  "key4": "65w4pqbbjZ31HqGYun5xuUA7Mjfu8ufNCBRS9GyvqvZXbob1YRHBYDXKcwRMbY6F5Gy8UHx68LXnWjxrDqaUcoZn",
  "key5": "Yzf5AndVFEQBHhxsPUMdmhbsz9zgsWievMBZJE2NwUMPqSG7nTqr9r1Q9FHnEkBbmJPYy7LFxGZkWX9Vss5bAGg",
  "key6": "2U9KGC59MxpA3a2PWAQyBgP2AxgJrvNHiYnaEa7WphP3wf9Vk4JbmkTfyoPs8HYa8AtNCdLvQvJvyjocx8uzrDuU",
  "key7": "2nzXApotZgB3yjJ2CcGbehHnnKxSmXpBGQPNfestCym5ZZi5z1fBDSUXVwYvpheTEEGpHBCBnpVemvgHLLTUT5ht",
  "key8": "5xNCh1ztWCGUrpbe8JCe4GjxULdXFWYbrRhe92wqQGKTcC9XzthVFK5J5qUAGFgoMqrp3sMyFfVRVMxXQF3w8iUU",
  "key9": "3Y6MMmyt6T9fmy2AFtLYcxXXdB7wjAkmQ6e24U9nw5Lem48UPbESNeMGqNrY8pjrU9cP2GV6NWLCNz3kDrkCcwKt",
  "key10": "3Hm1yvezeK5GL1uXVCy96yVY3QG34HtcaTsjtVKx392rypAU2WZ8BFPYcJahoNyZ4As8uMsgXr7DdkPHse5Gg688",
  "key11": "47e14cRLppwcZiggnVvnU9vQzKgsagbSPdXu1B1ndDDZNM1wAes62N44qRyBiKuGjPp5ZgXbti9bAKNzdMrNyHAt",
  "key12": "2KZoLTHKFPnvGTraAyUG1jiHQFv3exiHX81A2BA6LcTq8vaWUm2Rtt3v6ZY833pGCG83W9NDLsXkVTuis2GWo6hf",
  "key13": "5zZTGKSCwNdtqNnFfW5DQovmwWXp5oidSvofHSfd8d8w2RYzY5NGpxQfS7m7P1BPGCaALTZNk66mmnnXhN7mW2PC",
  "key14": "5BREr9c82hV7QY9V6SwgsemzVNNsvTkKweMwNaPGcx5RK7o4UG9RD4SMNoj2iQEus7kmG9AUz3oRNyBsGyM8LViA",
  "key15": "uhV8ZWURcWZKXWPfLb5jVCjC1FmF9LSRsTKFPHSTb652WZL8om7UBrRB1tphxiGRdjLwMbkT6bfaJYVGGBybWEn",
  "key16": "2NvU4kkGLYC6XHQfpu3RqDwhhVqsw8WMpawCqiaqwd9e641YdGHqkCFGmiBuYvBzB8uwfwYxPAdA5QYxRsZvy1xf",
  "key17": "LiG8EWbrawa4kAJwf61JLVZF1nMzgbZM3wGzCFZUPmFVakwxgKBMC8ZCQub7PLQCFrJceSThZ7SruCfumx7EDnA",
  "key18": "48yFfJoK8ZuLcp2CxWAADViT1UjkjSnobp3i2nVVaqnWXNUfHoZPWHzXDBi7TQ4vaC28xQtgBcWU3MwofVRNKNLo",
  "key19": "349FnKBYYMJDw4evFjMDUHPkQPHa4Psa9onkKNaLatfqi1REnhzmL4JycMMkCE5C7vpwqSSvXGTKgR26c4T36XCy",
  "key20": "2HpaLZE9GW3qFkVjzuWixdB9CduLCvgJAa7giMmu2M5GNGEkmfnihikYstysutr1FQed7yjdjq9JcRFUtkPWV2by",
  "key21": "51MZjhbSpUwantn7nMJz5XSrAMFBdwGwcXDdAPACmMxbM1rto9yANY85tnPp9aCJNoqCf7QpmCEvXxMRKGCvZf5J",
  "key22": "5ooQq4y4W8mcY2kUgUmnqT5j8Qo5F8zooPwwVjPPdWk6cFsHYMorY3rhYugTTXPCTo1emMbVipG8YK1iPaRtAfgP",
  "key23": "23BuZSL5TvdHuRryEZSMNKsgTYUrru5f6tjRSKPotLE8GtKviVN2TSq4JGRt2xDfsBj8DpT2aSTW7nATCdMXcAag",
  "key24": "5GMDPscnGXQW8mAXGAe6DwR9X53j4wLSKsNXyXseuZTdXAyF4UCcpUftsKYYjqM3yFXr8g2BCskthWemGLJAKYbd",
  "key25": "21jJrNJUgF7w64A6Ju2k3YmtMGmjmhauX5SsZzMmrpbKCB5gGMoy25ZqhVLCj3PDDoyXcsFonyTXXK2N8jLo1Jnv",
  "key26": "5oNXKf4V44VSPBwiHcbVdtqfc9GLr24yf2dA5bPxTpyKBdAKDWZbBrWQZX1gr9nFGBvHELeD2NhF9mPhnjMUwLwz",
  "key27": "5ZBQ7BPDHxYRGfj8EvNiqYscJKKCmFQynFSu2hhWuujyCfJVmXYUMb96rNxNiRwzpVyKbS7U5BmFR5K66tgHZCEf",
  "key28": "2ZV273DADXoY8D5RDVD4pa1vZ3JsEKAcEkusS3fawzQhav9qz7Ab5ZsKRQdTpZn4jh9r8uWdVTykT9KTSuEKLK4Y",
  "key29": "4S4Yw2roTg91PLaXmGoEXC1rj5yiNTngKAgpKVTBMeqJgZaj3hrqWKm8A7qrc3RTJxtX2G3div9DUQZztRePheud",
  "key30": "5BrcGTsHmgjDNeC1X1nZJNexADZz8K6yE526ShBEZrdqsrNpugUaSp6J6u9Ki5bvk6U72ZPPzTvLwxHyFsVU62KT",
  "key31": "4vnB9r77vNmqbo3JHewiwoyL35rGxva8vMVCH2se84yHFtrbfXhu815HHEZdzkJLr7gBMpfanEKQZNu6ufV16u3H",
  "key32": "2kwrVgDHzayNiKq1qvXDBHEukkPW1F2KMJQ17sEQVttTReU1k6JcKRmf3E4pVFPyqTLyfkYMXGBE4uJFGnZYCsyJ",
  "key33": "4aV8Ni8yPPpQXnHrCxVKjx3L3eKsvsw6quZc4dNgcpZei8hbFHUYRwZ7Kd2kWsMdXxuaLGZMyovjidDkt7fiY1Fc",
  "key34": "31N4Qe9etLMNLLy7m3dC9qB5WwJTmhQnWSxNaFFoWqgdSquUpbGdH8HU4mU1ZYbetFZDoCiXfEUm8RZYbJRbkkLM",
  "key35": "5J1U4KGprDEPM8e2hKUk46vontMCaYhG3PwwzmxyXBaog9CX6vs8gP9NHan8t2P6k9oi55PzNSqBrsq3w85RMQvb",
  "key36": "52jrCYm5mbp44gX3d5xqfub1z1yVJBQ9v6RtB1nn5rfkYVesr3oRvstmzTx71te6qTPAkvh73Zr2AEKxgyXmpKXE",
  "key37": "2HjuvYEeDHcg8mAaMGeakGkPUcxJzovYRmcpaUo41YrUeqbRjgRY8WLhSrrgvF1Q5FiYqMZq22ev2BdwxvDHEmEA",
  "key38": "4iwGCdEnVrprG3WUQ8RHry9PMrrTw2qJEUjtt9FrMArtHmP62h222ePUCmxvN87x7NJY1C6XNqtfrcaJno6oypw",
  "key39": "3DLiuWodDwvgMhv97ougDm21yBysXivUsF7TF54a3tpff4Y1LvCRc6kRdfuGCvbKVL9MG85vtpNsFgjsevtewza5",
  "key40": "5u435zxWAHNHijUUdTD4w5norRPoLCHJ3Wqa1DsRrdCqSMmmfDySNgtc6ee8K66ea2XftUwUEg5yLDK6XyxDpfnq",
  "key41": "545CoCksJLtxkZpD9xUiGtbxsuVbUvd9dAZPePpKRyRedMMUxRua9bDmwuZ3dPbawk8EgzRG1DNAnpAe8Ja5bNur",
  "key42": "3Ni8xe5YGaxQ7dno3UfesFa6ksRNJFtqT3ThxCGLdrPXaQg4rKNhxiA1gJrh3QNNpWgiCQdgii9NK8si4vQrhjqL",
  "key43": "29b752dzhcKuhfRwusRrXcY1CyeYW8NgJpS9cVXGLR5U7hVGmifN4a9pGuQzzjQgCQYmkUV1sWbDSDfYfvTRUmdN",
  "key44": "3kjzWvMUzkfDTX2gYPynoM1etCCJC1CXS1C9pnBqfdi8e5iBFN6awAMMAFJriuR95ja869AuKMPnWqscGiHuRGMu",
  "key45": "YbnjGD8dVpfoVogRT95Ct7scE7TzYe5iSxwh2RuyF1uXX5rRacDzAqcxnreaXkBet3ez5pUNZRsy7VbdRQELu8b"
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
