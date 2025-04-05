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
    "bTq23C7iVYjgE8a53wa5HRaKxpfQmxxp6R9EWbCEuLZK8kYqBbyhP9QCST47RqTtdKn75dqo1wMAb9g7mUCchRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ux8EZejpFk5We6WXPbhfX4AkJbt1tbmWncQB2kTG196RPFsV7oqgsGgyWTJ7qEyh6dPWtftPGz2rZ1jVwj7bTSU",
  "key1": "5rRHDjZLLLmnr1Uu6Ve3biAb1EythhFn9ju9mMHdhJpWAMqcJN3wA4sekX1kApL1DHyXM48Dau1VvsbGDCWfpvPU",
  "key2": "35CTgsT84mLeqSRyZ5H19CyKX8hArxp4aoCCaHvkvA1e3d4Qcn5W33wJR382MuYX5XCFqq6A2xGGrG33wgSAd6cn",
  "key3": "5WoHRH4hnjidsnGh9i8kwJeHXMRY1mm2xGTddv1sDfGmdBuS8143DTyzLhRfUYDJBfZ771Fj4Eej11kp8suZHVYc",
  "key4": "3eexX2gxY1jjDXCy4oiUfPM8o5Aii86PReoH1XTRzgxHmY8Cej4AoKkPLgPfefQTxEwkWKd8cpbvBNdAmn4TZyak",
  "key5": "3C3hveWLTLyad2yoaKudGRKxxg86qn4Th1WyHMSqMyF8LkpTLA6VMDibAAEsaRK5rMDHY7Zxp7r3HzQbRvi1gYkH",
  "key6": "46J9REAw3eMzovrPVJCfozE8BsVnqQo8kPz2M2KSFpPTCaz7WeHdw7ZNAFKKAHMHsF6gB2LeisnJmQoTx67b6sw9",
  "key7": "LydGfYGoGW9DwPkVPdmVm8JGJNGafvr5EXnKHNe5Yw7ei4sRaPxgjMDdSgT4kBaeCbzHdomxrHbizzQ2xjGrzM5",
  "key8": "4LM1JL9AzNDcHr3WFPTTMRdAGqQFkeNKwMhMKBskidDybcLuVTqg7RFeynmoaxwRtjR51Ko41yWBGq1w3aUnvSfR",
  "key9": "632rgQ9SCsGmTW8BtsFCBpagkuMiyuxQCoMp5J7nWQqgkvZG6YF4goobGabqChbKJr9LjK59yEXWh8qM1iiAUo86",
  "key10": "3y9EHfQK7p1v2iQCvQR5oyFPD13qWk1NAFj6pf7EJ7qecE8PPLk3e2bYTCPxcf95YJ3sFTBDWmss6jLYGXHCmXKi",
  "key11": "4vYSCjc4PWw2eKBezSwEKPXJSPgQmfDUfgg2b6SvsrVfYw453XYizDQXAu3jNQZ6ADdkc6yAaKFQ4114QYmKoKxW",
  "key12": "2a7Fc5K97ThV8cB3ievUCQbbPgBJ1LcCeimmx3tZ2sCSBgcdBCM7zX7vAnoHnZBsNxgUL3rmgszwJYypKG6WsWBC",
  "key13": "3MvEUQGT8k94uzVfTHm7nrhSSGCNU3zMGFZGFj9ZzJMAhix7Kg5UK6XCC82pHpuqRm6AURfev3qdzjojd1G21hvz",
  "key14": "5AHNbqdYij3F5NTR2RaywBZ97YRqcLzdrurw4WT6J5CQFrh4o4MSGbJGyEqHzb9R1Cm7AtLdMbsSgDbn8jyd2xXn",
  "key15": "3RSLdwFPu6FjzQir9Sq8Lih2w75sK1PUcnyC1ZmNmpSNpcPyMCndrKkks7C51M2pF1pcqrfbGQqrcbZRxGgXErr",
  "key16": "4eLQCjXapPGNLJFpcfKAjpHKErJhFDqPmvDCXK1XT4u2Wjt7Yg7iLUWNeSAfTsxpMYsyerEFnmFJ6ivhF4Ca1oMT",
  "key17": "395Sq6NzXq9AnLq8g5VyEFSdcEAPa3b6BKobJp9ZoYyhaT4FBKAWCBiqZt5QJAw1a9YcgPeAqhPriYdYtZAcjwMk",
  "key18": "Gy5gRBK3akQsQYh8jS66auBWm8CWiRzBr3FiYKYNqb9LwWRUN3ZErj5MF4TPYaxHY4cfGb5zGA8mbwBq5j4YFwt",
  "key19": "42gmovttGoSNAn2iMAHHD5qcV4GktLA1VzqyhktZeZrmy9Cz4LmowVvWhUyy31HkwfXDeVz9XZgpSjdVTtPU9bFP",
  "key20": "4Auq59pU2zoDu72E9ifZoD4e6J81jrghXPb6Wn5t7ZKN4U7Fqb9KfMbTovGxpMnY8tDbgZYbPj9nAWiEkuBAFhSo",
  "key21": "34QqX3g3pdX9FxKawqDeyBh1PRzSj8MzvsNDrQNZQaT5yyX1aH7nFTxf18GLbPz49nRQmxZyQZdHuJ1bqs9tMhLE",
  "key22": "yEE22aBraSGBiesULBkEwznpa2CCoisDqYN2BX2o8UrF53rcVJak4kGDMQ8S4Dr7kSMUo3tNX2kcU9c5jLDEfpH",
  "key23": "54e2uz5sZjTSVAUCgeojMnyABRNkJAFtwrRfTVLYc8oFViTGoYNsafYp5JHDT2MbXfup1c4MLq2KyyJzEBRxLUCT",
  "key24": "4YedJGxciCfYcG28tKQmi6FA4zNZAJ54v4oqZ8jhFx13Zs61oUAWdkW7uYB8c1FqV1HxfMr7uA8r6eygfLiKwfuP",
  "key25": "21iE2B3G32AZkn9e6xoABbqXLBbYdu7UimCwepzyavL8f3mwcg9rnyaA7WbJdZiPpy36GSFydvnSbut6DiddaWLP",
  "key26": "2SZxW8QispAm3caiPGzMVABsn5jTkSVHkh3xtZBYUnFoHwh54AxidchF4JbHpg2L7QurqvKUJuvtVHQpTAsyjFF7",
  "key27": "KpNvtgZW1qS2UdhRLFGNygB2hRj5ct2UJFMg7oWSRs8oEBQjNXjpsD95wrgtGxQTE6ectXdY7TTGCUcVyXw3g13",
  "key28": "5ypTuqUQbFP2CHRABtcXSpBR2VbGs9R85aadGZFm4NQE2XzsYQvffixB6aMweLbweRRFHYiUFuP28c1geom4J2uA",
  "key29": "3QBhWgJ5kPUAMKLKN1ABCLfNtHtZBw11qWdAZqdTyzp8jiWPK3DVYENbKPY96EyHunA3CBazgjc62tdDfWoHPupw",
  "key30": "48DsTq4aQsCyXhbWSPZUJJQ2BvutngUSFwAoax3vzNaJ61tqNDuW4BUiyqjdoSnVP3gJrW5d9txT8HFPSxAJXHRj",
  "key31": "2otALiTdutqn3oQFs8PfE4JaLDjAPuf8ruXdBH425ksHhjD1X6Qypv82qmkhq2DJWfZaqQQK6MnNLpBMxB5Dqzhb",
  "key32": "5MCVmt2oe3RUKYpXxhTw4Ztt4j7Pft7LjZRLWdbLGrHoyNcS5Zj4yQpbYU7f88CJMK85bznwvG5zUf3PPTbMMutj",
  "key33": "SH9QcuNc3hmeFVWJYB1fABUiyAjwa3yS7Fu4aEUw2CW5zrh6MwmfsBP5mqGG7VLc9idC3ACX7o97u5uXNvmRCvi",
  "key34": "4KYevzxKQExknxhc2V7eMEMbMFd3QTj4tsgrxVuLy6TG2AjJSR8VJQTVdAfvEPiVrHgWkR2Y1v8ngdyGn2qoLU7u",
  "key35": "VU34T5wygPodxTdZWqYNSyRkmFC5oRjXhhdTPfzSArP6YBHNdnZbbYTec7N428UTCEsQ6ZakAZ37T9ARTguzdXo",
  "key36": "3rhFWzSS62EPpioAVw1neq3uGg3XAyLGBsKV2uHW62WP4FziKvBKfC6jqgXieFVogS6P6b3TG3qv7ibzjumLymEh",
  "key37": "3JtQ1P994qGwHsUg3824PTT1Vx48MUCkEkozDtC9BYT1KJazneqLNkuiNW5rAQM2ahi7gnC1vnbT36gK2vBHaYzZ",
  "key38": "nTbyiDAd9QTnqZ5NSTpAtoU2AfWadHaoKvqFNxNhxer7fo7D6BGcBqz2Yi8pifhaU8UN6noCFQikt1dw9ak6Hf2",
  "key39": "2M3c8gp2CHvpAAECo3rB7knFDZ7MbXPzDpdNDvE4NA1H3vckCbeHzUMMxFTbhJ3MhRd8rVgfYGoRQFCB11wEvNL5"
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
