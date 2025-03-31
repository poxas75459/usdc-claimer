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
    "3XWsL8HmbYJJ9DyoLbDbSUGP6y8wJ52KgvH7qoAXFyM4KGJRZe8eKSWqTtnmx6G4Tng1W5QjSr9wH19Yjt9VKpMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YKgtPe76NPuADk2dTbKYFozFmTv6srUCfdqesARwViHRRCEywDQ2dmjvX8s1J6xcBxoaRmrPB3Ued3XMSNjNZnt",
  "key1": "59QRzg7ukyd4cMqgb239fDkkG6nW5fSobn6Ajcr1cRwRUUfjEdrJhkeabXhSEjkcihqagc8HSmX1afRS4RRyTR1H",
  "key2": "nZhHHz4kUeSpuxDjJgmFcDufoUQLuoDuLorPCPwqkvTrMYHmV2W5WYxBbFxghux6zguxV9EGiJc8ccyNX9w5s5P",
  "key3": "5eJdKJw5m1d8yZ5FKsrKd89grwQK5QwbmQMbpwKXZYvjijGaDatZ1L3iGGYZse1kqkUXnshdftopWMQNLsVwCyV8",
  "key4": "2EvWbHKBAuhQjGsJzicVcxjgK5xK3U8x8HVWdtXNQji7XCsQAgGu9fX31WYhQuw5sfHJnsZuKsM8QEBTRrAY7mkG",
  "key5": "2QRfFGEDcUPWhEaXgeAJZLBAnUG2NCXt7BFYvGWc9shKTQ68K81i9z6GtePahkmUcok1Qtm7WiN9gi3AT2VQmQ5P",
  "key6": "JqYcNu9czRN12X7kqPkKKAGkwNPBZin2ReJmXepqXhbHmRCNX1ugG7hp5GRHSn9G8TQsF3vWBDjPZRwx6UrJ3yD",
  "key7": "2FyXhiwatCg1JbbVYfkd3hbaVkuPMUzVGT7QJ936N7yVukazxoF2J2gD1PUZBr58Tef66yriNRthnkm1UYRSF69X",
  "key8": "3WzMr8QA7TpwSpLercxDzpHpjZg4zMu4axtpKUkkomGuPrvVRnqXTdea728n64WgRzpoPWnFLmuqtpKjoFoaY2a3",
  "key9": "31exMTycbGPKAmHSijoN6kUG2PRmZSPhN3WcjMprDVPtrbvqPQ68zxU6kydfQBg2obXyhbSggsrhq4zXKwKkpWxP",
  "key10": "k3FH7bLTfjMwx59fYv3vfPQ1eppZPCs643vMW9SyFijDX8U939FTZnPD9gDeETatzuKwiWyirHv5JcVZkGwKfhy",
  "key11": "5YgXwSi892bc7Yq1cmPas6s6229QqQdbsU3rMLPH84LG8TNCJRoqjyEgPJYVDxSs7xBroCXMW7fthgPgbi7WW4MP",
  "key12": "XRFVFCAK9by3SDYGtrSbu5Yts4EvzTCbsgvdz9pmPF8cioByCYoWK943o1sqPrhu5nykoJMTgvPXygJEWq4DPno",
  "key13": "HgtPyDX9hATmNoVtd8yxpaVrzUM8FcnfU4zhY6D8wGsSmyMtHY8ypCQ7FJX2CVopHzpyjenwRFw1AZXdxZkie46",
  "key14": "LvSbWX7XWRzLGCkG6UFm4cUXKYw9UXNzxtPsqoE5oTba1QYHsQhivq94CV2r9iNWkNHicokaGqnabRrTF1GHj6U",
  "key15": "5QxPKikv7Y1J7eETtwZZKAJ8okc4u5wecbCBT3qTPdKNafVTAT94gBMkyr3Yy9vCBywkyPbPt1Zzmw3bDTxoN4Dx",
  "key16": "4uJ2Cgch2uvvcxajT2us2MaDsUh1CJz4DD85STn621DKhVNmzgQ2wxwF86aEXiLfVoGqR5ZkjuG9pTQskzrhZPWp",
  "key17": "5jxcNGw4Smiw4YWgeDip2sXSixqmBbEm8a68omz5xtnXj8nHLL9BJzoaSDCCRWP2SZV9sMFCT9AC7AmCqRfVCU4w",
  "key18": "SuQ5rshX4S3BfTeZ37jvECZZ2A6rEEREytUjmS9SEb9bzLhEQHvPiJ5NLEQskDfTVdxX7mqnQGVj8BAqqXtuDpE",
  "key19": "3LboFzxKPypn5nqEQrGPKnXLqVKjsjFFZYeyRF83YdwSqL9MFhhGWH7LLwshR3Q5Lv2xPjRBXMTBCDpYjVc6gijB",
  "key20": "2AnomnVEEApqTNUrfqa2A5f7gpGLhxfchBqbkVHayEp8ovsz2QjW3iKndtVoLr4iL19x3PPzFBzZ6ckCfpuBg83p",
  "key21": "3DKrY2riZXXnSruFKab2biQvMNGEjwXWrXsMgCUr8wpFq3GSjPnouczMYoAZ9xMvWLDjkE75VFykD98Gvjj9aePt",
  "key22": "ZLJsZnRjCY8iFuxYd5s3jUtNALtDPbxN2VDBcjQRcJkqEk712xboVk2RD8sPZAXKzL9kgtgV7t8YczTuqf7mdwG",
  "key23": "fL4stTP2x5ZuFAzcVoyuz7kcy23YeCFepGeEiZTzjF1rehVThH9RaLgGno46JZEF8PT6gtFBbdXYR5dMcqpg2B2",
  "key24": "ttMgJWGhB4fmjtKLnPujaFSYhpSDxCx4e1FUig9gdZToqxoteevo4rRnND9BgxFWgvR7Zzexmaao27QbkA4jPyJ",
  "key25": "3P4V4ynCJ4dBsGA37rFstDVWEbBLFN1CGB5wftrpShvzC1LWypbnzyp5CZcERqbrGE3cqzD9nG2WAvjP9C6eXaeP",
  "key26": "3UstV3PwF48sVArSK4MTMjRvPd5qkJzpSgFNxJY9nZqX26tMkFt11yUkkoznYnQ18Rxu7utgWYJgr59XkDGAH78s",
  "key27": "5mrZ8hR1YMzzeCLmDqfDkW7B3yxWug8vZQDvxobXMz1j3sNnv9ymXXzWoZ61QaeZsVib2JCZ1oGs6d4kdS399TWo",
  "key28": "4vnByrfj2PjvdjmwmmLaNRs7PaNCCBApzTk1H6KPYCfrP4X4bM9a6YGzLMgFXHmi2AqwPgDEgnMegzG26bJRgZmg",
  "key29": "q11oi8aVJivYGnq6LURMRxbTCQXv1wtQ7X8CPtWTLfbuTdm8sgpPCfYHzRH6rNK3KwdAE5fhXRywG5SFzrV49G9",
  "key30": "4QRjbakx6rbY2z21govwq93j7rTcBbqG8tT2vB4aSHFDwg8vg45xRKWbdBK46GmdVPJUyCh3ziwH4bjB14fZSHLb",
  "key31": "LGNtdtzhkBjwSHqdKKLD17v8CGqMEWdYLZd6WuaGLSjYtJL2vFg9KYrBP1VZZoLX5XR7QNjrs84ukg6dokZTbP3"
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
