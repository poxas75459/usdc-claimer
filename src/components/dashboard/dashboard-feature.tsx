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
    "48eisV1rppt2MKxAdLekjq39LD2CkkZGCLsbxw8tcuZytioxBKv3eoaWQR3LoEk6RMvpvkETtSdV1gLGZwHe4Wzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UYsMzDvgWNEA96UavHmyrymeHPyTbo1K8t8yqhWTVtWycsPMYQTDnwCgvzr2LsSKPudgJCnff63i2CETdNmCUvf",
  "key1": "2jE5UMMU4vFWeGABF9W6o8FvVfLwxQgD33KMjYHaND6QtyFtrTx1AiPMH6z4vcgXQrR5YHezBroYxrWw23P5iwRc",
  "key2": "Qco29Bgkm4rZHThDLo8MSuCzWdTYNZXTCLNA5jSrMGRthRX45v2xHFeukuQKph6FYSVyiJrBN9WgfJWjpJsWduH",
  "key3": "5FwEEEwmX1qphxLnkZtpUwmF7aXQiLBT2nQjbzP9DBBqbDN9643pqpwwNt9RWr6eLitanbW77etiYhxZkzZopVsn",
  "key4": "fABV8BdsayqzTM6hVJmEoTSvWHjUaH3BpXyqUTKrCeTwq7CUMh7kABLAY8GrejxnLaQi4bcd1DPeneENxcMtKXZ",
  "key5": "L3aV7qQ1E9Zi6GTWt7eH4i3iCSRMqU43mYLjkYxFzjyNN5VGG86MQnresWa2L6GhHjjux6WHqEkSqWdYZXhGxhR",
  "key6": "4JQrQ7t1LXwpcw3Pzvu6XGCdPKFzy7d8UWnsHJ1QmjudYWg81vv4MfUHPtUe3HFr7A7N7zPRve2QefUwyTMLT3Ae",
  "key7": "3fXoohyEsTzUnnvp4XAYEUykVXtkuijm2YxFrEuwWquckD54wF7oggcQWBbQWW9FgMazkBgzHg7JEYzFajHGbUYm",
  "key8": "2AoFs4x9yToYBHrt6t7sKxhj2nWmyqbWVDKQj1PGUidG3gbmqCLdHiy544TQdJctn8KBrXscx838f3nCcB1WSq4W",
  "key9": "pA6XBRzUsY9LjMvs1GGV7HtuT8JevMhhh3Y6U7XPuBaHUJRpAf4tCRqmsSdd7rDfGgH1C3NK6gqiPAKdrrGAb8Y",
  "key10": "wYtsVWS8ZZRppre1Mv9AFF46qmBnBWgkajVZFmd3en8FNu4ZGJGE1mhrNeub1RoRJUycGVCEWU5XFuSndAEgyeM",
  "key11": "2nDKgNXCfvzYZt4aMYTRQwNAfheVLErmxxdB5eyb6L53YTswa1JyviDDY7wLFX6Y77yU92opN62yNSzEYHnEc8VN",
  "key12": "37nSmGrGpcEeZKGJ2XA8cx2cuspJq3fmespnpwnrbtvUv6uFyBB4FGf3MWv1kQQK1qadTLPkny2oKkDtC4u89ocT",
  "key13": "268zEHdUN7d2EMAx4XrWnn7LxgKTC6rRTTyNXgS1wY7xGD2Z9hanvAJv2DWFwEMyE5cx2MNRxAB9wC9zpNSuNADE",
  "key14": "5ww8B2pfHmCBysiBYdQTrJdDVbfGacMMQd3FVGffmD7Jo5Ez87GEGMe7jWsEVrPjsXANcPR3bBKJoAEvq9AjwGVj",
  "key15": "5DiHDtbvAUgjaGEkqLtDz6NDf3vhcAEzijkzYU6FgpyUvB4Krfr1PvuZTSfQLZPSSa8Vem5EAKNBiVa8uYeSnf2a",
  "key16": "4PG1RLTBoEbaEqrfo6QEwqeGGBSfkLwQyL1CGXzgfBvsRJFHpqfss5Se1gp48zQ6hQ1vusHeK8BtHtY4jdVZpi6M",
  "key17": "4TQyiB6up9iU8LZwD6wQNxgVtsXxvvt4uLyaCkwf657yauNfpcqQcYuiqrjFR84mAAkTdPUYnCftSaeKYUtNjMrv",
  "key18": "5z3kw1T2bnJKV1PbN8cJ7LXpy6T56i8JLy7eWVojgjsM1d78gJeaiKWshkovXVQ5s8yyDBrmqnSpSqt5deXwTEW7",
  "key19": "6t7P7wd2KLeR4dSU3Hf1WDcHqrvzRYw7pqSNt72v4aEEbjLZ561QGnYE11PfbVPRdViqwAhdiRkPHnVFAyGsZFp",
  "key20": "4UTkNTr728BdmcWRGbfP5BLe2Z2Nm9MywiqAVKoqTCzYAKrmd9GsJ9Dmqc9tMRaLTpkd81D7reFkcNzyhtCf6mZY",
  "key21": "3XcUcfGbLpPn8KU6ZYwYiYg5P1cYoyKeMh7FDt22KLsku267pfrCmwM6LdVCNm1SHmtMjvuWKCLuEyjHyxN4yMQm",
  "key22": "4VGmQEbJMoVD8vrSq3eL7PyK3GNRPLMkdpqyQKtDubJnhvmHUk8GsGvmYQGsUeZpfr5nyp2KgCzMaGZiTZe57R59",
  "key23": "4pwL84m3kAjaqKHSUNG6LzMDSHGACgxZMDigYwAyfP2Bpe497nrKwpNydh4C4LQ9xpz8mVywReUTmvXxei9qvm2h",
  "key24": "tVjKjwhbBZpC5Si7pAPHA8LaSTFxnQnoMou2y4EU5qhW5k1XEv45XT3UN5QPRmC7bT5do2WfdqpReue5KNxZtjL",
  "key25": "4ztbhNsgcBWvXW63GNYi9tHyau1WfMURd3j5vmME8NKstnP7AMagLsgFruMjwJRXBtKQS8Haq84Ji1mfWbX73veX"
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
