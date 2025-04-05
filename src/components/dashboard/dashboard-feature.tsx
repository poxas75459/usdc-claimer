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
    "2hEujSYpPWXUavfaRtGnbeMsxszf6SqDEFDVuvjpHj98AbFqsWUSCAcLrSoQQmomWjWWBDw5VVEGdN8R7GYnnh5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WQpMEFuZwjnNKgxoCk5Vxu6imyEpEkosXwsa7ehfnaQDBhksSRzvBwPXnDHmnCjzt9XUmMv18irgghc5dy6Geja",
  "key1": "2btu2QF3tZzZ1nW1NvWbEbWhyRStmCnh8DTzE23ZLzbS3GtQBqYTAET67av3gvAodAXocB8TrrmebjEP7s2Qdt8P",
  "key2": "3HgSt6Zw4RpeoEj3XWg8SP4AGoA6HSqxeL53WhAMYL8Dnq3DoCn6KRaaDnBwj3HV4JqpAKK4L1pDZ2k3t7PywPmh",
  "key3": "57vJFx8gBq21jkKPYuKPiHkUzWsd1Dmm4LcLHUgajoNYFXZko9PHDTG3hAg5xbQ5yxLBsyVGAwXR3GYNktdB5hAP",
  "key4": "2Bkzya4hCy3ZLXeXCtJwBbcrwza5WGcorrjyi9wpYgwgn56usLbL6eWzcX82ZM2uERraUgaToRGSsFr9vna3Sv4Z",
  "key5": "3TSQRQVhYAWQtDgDYkzhYuUMtakMszUgyHRU12CMsRJGsuPHduEqTyZYmpFb5NAz4h869N15R45BJ6LgfyMrZgvZ",
  "key6": "2jCL8uazdHk6c2j9zds93fkcSs4uNjiSsdCjF9eocMJ84dRuzwuoHqHjM59CXnWxmxvhSqvNbFTNf5g4YK46pKJE",
  "key7": "2G9udWFxW27nruEiJCMqS6Fd6xgz9CoqhU9DbietUyeJKRmtn4QpQTvRS3Z8KtpmwynegQ6vKZdvRLzdpL2PMXF9",
  "key8": "3VRXCuMvdMgs5Lz96QgzDjtqBcStNiq41KgncUpmT8JRvMG9QxG3TEjmeCrTqX3cRYsjGDX8L6RYgsnQfQaNspuF",
  "key9": "21cREuMoaMGS1CGJzRPWxxnkBmENFH7iCtxvdXGmxkzUyFf7S4vgKkLn7Q27yKMbqsDRzBDmbfghwC8A3gP7ktyy",
  "key10": "52c8ww3YG1W96ah8bk3jgbQnaZzgcrdvmpWKoCx7gtvYezUwHronrfMEBAJ7H3TL6soJPiAmp6cNWvTzyed9o86h",
  "key11": "QzZdLuVn2dbzZ67wU1RQHufA8EdAAngXT66BqooRYTLMr4vkVKCVugGYfD7zD2ZKNLjeExkktCopD13yfP5DdAN",
  "key12": "57LE9oQiUYoXayyhSKSuaotV2GUojmzRmNjmvFkBdLcJDDwheXnEmASAkvBvu9Xwt662BjMDocR3UK43VKafGwG3",
  "key13": "37gqcpxxPeepVtKvGYgkt7mRE5NZRFrescMsEaZq5agMmkLFRiEDjwZPxrtWpwLKuJGMzJtvskgFnvHioKAMB3h9",
  "key14": "5xxQMq5hQyAJVzsiCbGdz8sNA1erCDA9F7Jz1oqgtzB3FSjHoXqyUjszvrN9W4Qb1BXPtkvaZ2hJwrRYiRXZ9aCw",
  "key15": "4ZqB3wp69LPh5GSh5u228Pg5NpZfLK2dHQxWGUWBfaNc1CbNaQS54FjZKtEERH9MgwDsyYYru3WxsnBwWzDerK1d",
  "key16": "3GnoMxvUNZLCeE4qHroE6zho6C74S4w1eYHQL2xJ43JMZKnwC3Jsfd3NCFpa2WTS3c9aNXeEoU5qZP3WBKmMULFD",
  "key17": "2JpsYEXLPYudWNfzfaC3Abepr5zne7e9TNUd3tNfyrmbSfKGaqnJMicQeyRgw5PzJdKjsPM9XB591JHmddkZ1Tz2",
  "key18": "3DhUQeCmKPpaLNPsvqmdD5xgo98j5aLPToxKEqKgXKqx3Qq9PKuHHqHJ8ruXUfJtmiAYpTGyjVCfYanw8G8eGKzn",
  "key19": "ofkacQp7yhnDHDuqSWYWVmhsnuV7HmxHiBGrYnets9mDrTSnHeFwntExihphTRRyYQxiSHSRRXaxXyVFHsEtLLZ",
  "key20": "PaMmebKeKYTKTa6N6GWS4Qa6g27ViBQeSxDZZq2myDqMNEUZeQ88LY549nRrdE1Ea3tF2GQiQCSZvbaiM8wwpNB",
  "key21": "YeteYEmiVdZKDr5uRRrtderqBbMB6bnMuPvqbQLFHXAzaa6bgf3q4Bs4vVLyi2fNrFcJqCGdFUmgScS6xJNzzqP",
  "key22": "5e4Hj58BUzDTmuY6cwMgEWDPRHTVKFyXghdE6Y5MhRuu1iwhkeZuBh94v9GQB6TN6MGNjhWQXfUiTzYfDGTiPWNR",
  "key23": "3arUqJa2ekcpP7sZ6Jz28NfbsQKfRAH9pZhn1TczuZNmvMuKNVxxRbEbaXpNsZFrS66HqXNtie1dgeaeH31Bx78j",
  "key24": "4vhZWWD69hWY4WQubSbkJSvUwj3ZCrx9SVKvABAAsWthQ9jK36dowPAxetazH5MzEDFDyW8v7eSg5w1obP2C3Y5V",
  "key25": "2wKcXiEdobaN4WAyXw5v8R45t1tY4ujXz3E2xLCWPVBmEFvBGqbv6jy9d4dKcMxqLKJCCF2ainx4va6qSKrwmPse",
  "key26": "2Tp5K2NZ6EUEsdQRjUJE7iKkpsdwSFfp1gq5dPTawz7XGtKnJYtNQfAajNsV9jyMeNNQp9xYmrd8zQfrCiWCeVws",
  "key27": "3YYRVrQicDnELcNf31QqfpWEybWCDBzxZEwsGNWRadU4SmvmpsemxPJc4fW9QNP3DCACSgRxL9F8rWUfKb9fTKBs",
  "key28": "4EqsfaDwF3dgv4GTU4p2jAo16tXtoXDJAthhEZbKcD4dA5LhN3FEqBi9ptf5qNmHTMLoVs9ADkYYXJ62YxksXnMc",
  "key29": "4P7Z5V8khdvgYB1qMqNSnufJ63B8hzR286CGqaBgNMHZXyvZvjokiPsfGYLcKLgE6JmXjcPTpBLen25nHJ1mX12B",
  "key30": "2vmt5ZSP2yF8UD9prXW1S2cNMyEPUhUDUHnbzueAUbREgHnZMu5JwbEfkm43VtyVn23jjMaQBQboqauATpUfyBf6",
  "key31": "2CtPGC6cTyNkn3GDnw313caQqqxDgc5agmbvbW3PMFCCo1QjdQdqzw6x9fpJKuaV2KPUquKCYwNstAj4QNr93ufa",
  "key32": "2uNMVdbNgMDBTXyxGKnRfGivvVEwjoqGWhDTpjtPASA3ixdLQ7cnc8kfYFwtLBAjRcERdsmgMZvxWJdWFKFGd9Me"
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
