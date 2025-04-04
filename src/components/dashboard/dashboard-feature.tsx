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
    "5bH16PC2auxLFwXUdFdaDBETPLQo3sudSC7RsF2tuFH1myBVXLpoMnQUwMRiqeCHhvZvxM6HFadHkWve6TKU55ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rLEQsbwL8wrBASbr4oCrFEWpoHMAg3vzfAFfPiK8HhBwT7pcPsC3kufgrfe41y2UNomAJiAW54WDMEAhvPaSXuM",
  "key1": "3XVRveXofGv1SCjLHmxRWYTcnoftzwKY7iQdrQLyqq9zMrprv7V62G1975kKBx97WrA7eDasN41V83nLYgmkKnpr",
  "key2": "58PtYisGCKGybhMniQMMRdbJ6xSPdKvyTS5ET5QwxnWswdJNu8wXSofwusWgq4TzCaxBUYA9YUrfSjUqRGRFLK8M",
  "key3": "5nSes8QiCEUX889dzN4r3tRTL1JFxFKQCgU1tySeRsab6iZxVvGHybFjn9CSE8YVCM37q2NqgDTfxd3MztvQkQ42",
  "key4": "2EzfVArfuNAGTAPGdMCRxJq2DhF3dvnf1HXLLH4NY7JWD9jZVHgmMxP4Ysj5nPDJ6Xi6gBTZzGWawCUUELzeUCXx",
  "key5": "2Jsr9CRqivJ5nDLAA43djYcNYm7gYswUZgECw2H7X7toYmR342gmJVoT5wxfSC6ByFxJ7v7hJSy3DxFMTzZyfZ4K",
  "key6": "3C3focq2FrTwAiSKToMGfJudu9iETLt6JUKitjxrzV1hscqP42JymyvJCWV2TAvvngCvEc9U2eVdX9WgN6Ms51kM",
  "key7": "61LTH2szRcaPcyzrtbU7mQ99sMVTtxHvcW4k7ay4trohKjJN4E9DJsC3qHiVJQQxGFMX54aps3bNbFvLrtRrJNp",
  "key8": "QygUn9c7crrBtmP7XbydHJEwyvbXrxg86f7GozFeQkHoMtHih6HhzYXqmvtC1HUpRfKtYSNy4ppj8ZmoC7D1q6h",
  "key9": "2iTyWxy8J22NvNt6BmRAW8oRqnk7Wrhj5PmiL7B8UqiG9tyN8B3pCGf8mXcbYng1WqeAWSu1VZp4nQjLBvcykRpj",
  "key10": "3nEvJ93eBbwo68hp5mPmbSb3MAcaojgeaXFVr1GX1PqwVFUXiPW684SDPwRPKQi8ZkX6Noo21WBjSWSDSfRjGgEz",
  "key11": "se2hVumBjvReCUymWqngesmZrwBnvqbyuWMaBPDRpBHmXe4ryxijcXDZfUUhcw6aG5XtbNEVKiWyim9ecFCfcPm",
  "key12": "3SqXkHtKZz39fjrKG1kxo9JVX4GXG1p5EDynkUZdjgNie1ra7PfeujBEieRk9nnoQQiasqjb2nK6MuSGAMCZC4LN",
  "key13": "496JhfRAE48XNaK5WQ7VtroyXgQSmmXRTpsKotKZSQaArfiyxQJbvbNJX8LvtkX1ZmQjbgGzZhWJhUwtM8VZkAYB",
  "key14": "5AFjq8C1vPadLEpj2epQA1pT9VZZUoaZq9ZWrrTBQGaphuqNcABPNiMtzCHAnZvbDdsfyenTop76iyfPEV9DSihx",
  "key15": "5XC9DUz4AbWzxv5EX4NZtfc1EUzYmgZjHau2W59Wcp9JBy89WkPc4obc9672NMfnMnWRkgb4hHjhJP3DAi4mQ5sq",
  "key16": "XcKvbmn9qz6TXprWi8iiZrq3CLoL4x39XMiMXaXzJc4kQhn63dUmRdzEBDrqZP3bgoA93bgZvWLq3V3VWAdnqXZ",
  "key17": "Fgsk5cnQz1uw532xNvk4pqX8KBUQMNL36h2sFiVT6FTtGFmFj1KiR1xnyMzrPzDGVHc4EXJttzb24h4uiHfSEqs",
  "key18": "4wtMKbjAascxzZgCPz2JMjQE1fBckiq4fFMzKNRVdkkiX2ankLgzHdKX4biKGE9qHvrGP5Lhs6vJFGmGcT8PQYrV",
  "key19": "2dFYkDHGPQ88ELmMtCpjHtJMjdG3h6zFFyfxjjDHRvLAXtBkngAYqnqPKWxekhy5QEx96PBsRqzaimZRAabsgu7S",
  "key20": "2y7M92vAKRikidMKpdS4WF8CZ9pvm466dUbhyDfXQDqKLt9icPovgL5XB9TJ47NJmwLNmDGmMXH6NrJxKs8Cax7n",
  "key21": "2DgG6vnBNoBx9YSBFQTEGxmwodPjiy9uGBBW22hjCnWjsSpvhmzHENXJE8RznhFEUUwyZbogMtiDcgsnJLMFsHCe",
  "key22": "2ARBNTEvzzwHd9UyVTzxULb3kHaphQNYFMTwxuEQP72mYhNGMkVSJydRFW3CkBZAfCs1LrYZ8iCBJ2cqSRDcP2QU",
  "key23": "4miAbEvkY2GHrMF3abe5BtWMY4QqnL4mgX7FuKNJp4NPiKiEczVcyZdhffdQLouuxoZf9bqPrcX4s4t6ByRXTt6y",
  "key24": "2XgydMGyNiyRxp27qNXmzsxZvvFe6bu8JsbrdwmMH1EvpXz5p9Cd3RXtmsaPhXncogrDjfxagkgjEqxAT8J8rpA9",
  "key25": "QcTmDJUG5h3e3Z86jtkxWEkoVAvPZXsraZtkb6jAVx1w5wbRnHhn7XwUYbvQ352gNrU2swnJjt9uacvrbVLJkx7",
  "key26": "2zjUiHUwgLwSzZ8z1LgWzqNgbwRmxMdz2uhkhJ83ngxLMjuwvHYQWBYzLpZLArdVayntmupgL1W1R1qh6QonFdTp"
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
