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
    "4pS46gq41yU6NYeu5eNzgMcJx7cPC7NmtmwKcqqYQFrQKFWorssAeiwbCpBki4yX22CUuqc36hoyjUjxzoY8m3Zb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8M9wcQHcvAX9FkBA1tyF5TrHEG4BhKyozo5Kbt23YFFAmK7wTjxTYx3UP8bHVxNv1aTx4GHGLxod46y39RFkzSX",
  "key1": "2iL1mnMV4VHoyzKnxwqhFfBYBgAviddFYZ6nnf44ZhnZamAuzSxMZEtSkSJ2Chz3J2WDv89LqQAxi8K9zaRKGs3V",
  "key2": "2bMspUniXYHLWGBAvCbJkN3QFzaZJSqda72YLDs3BetHVdofhJKbtAuoUiA1jgBMVSJRCLpgncmHiQ6CXA4KKriy",
  "key3": "4VPSBNR2YQhpbCmCWdTVcAngKuHQF85EsyAa2meF3yKmurYuYgq2imY4pj1qMmUDFmBcZNWhVAM79i9swLj8ZqXd",
  "key4": "ukzBSDMnVwfFksXGQk8CPeTPUHFy81mcRK4KzZQH9jyA5jv5nDVCF5qshYA3TFrLnGHVX9LGUofis3aframbVor",
  "key5": "4AfzSYnDYC5bTXfkwbc1TUzTqvnATdwiWfx18zyw8XsEo3kjBJ5TaLze57Eri2cWmj3xo6ftHCE7CrzMXN184pX1",
  "key6": "5A31yyovy5MhXWXhME1eoPntkKXE77zHw4tb1q4QCqUhhGvF1jHHNpQvtxXTs71o3YfMaJxork8XgfefRCtX36bM",
  "key7": "62crfuDPE5XAX7AZNtbwk4qJXaYhXat2ZMkLW1qedHKQuYHxoD6RTSwcjqAKQzgY3g5X9dqKVMqkyi9pmDpdQjFv",
  "key8": "5JJnpe7xijtWegYSBS9ZNHZpazoRuuaqQh1e1isFivUyQGgobC7jYFYXYjPYCc3KWKZ79bNwxKuFotJJ9YbDVUFu",
  "key9": "5pnUViY6pHLJsZMddjhVzyVptZsQGRV3GHGWYwS8FcAk4F8nCcRyM2uofcb77JW8hPFk1bZpVogvCDRmyPVbbdiS",
  "key10": "4g5nR8idPMPhhTcV7DisBq1ZUUs5Hj46vwwPrZ6wxexEmuR3f4uKER9N2wYrx3HK6xPSmFKsscLQCzDFBLUSvbJa",
  "key11": "3hSmWS5fSmTtUdkoR7bRdSY6xjYiYqsaifuvW3ttcFLkqWDkZ6NSGLpp38RCfJPTsY1KeHD9hewtXLkmZi99qd9n",
  "key12": "5FBhET1BMe3Cb3J3LhiB5vUQ4YUcuo63oTVfpH7Yofe7Zkn55o7ea5DuwESy8xf6Dbx6Qe1rw72tnQ5q5hCGmHAW",
  "key13": "5nGHYTGSyfuX7aVewGydSsZZtudNbs1fQCsFBGaiPD678ugfYZruyD2eQWmQ9DRPDmKZ5DXPdwDDNgZEe94DHBjs",
  "key14": "31h1ghm1oDXRYkbYmKohfuHJYQtbgbeCJfBqgYCZ9Typ5McEA4zi8FBwjhsr1qSeLj9k6vsj7NTFn5fvbwyn5wKn",
  "key15": "57KdvbMJRv2k1mR69JhyYrWxJqw2xiuhHUXgDaaDsFk53ixuYgerub1J6vbqCZyAoLgEbm9k7pFYefxYyfna4eYp",
  "key16": "5WiBVqzcYLtGN8d5y9tXNoVPhD6ojVH29N8f6z4Xgxf3nsAf53DFmTXNqkRhUVdjt9vc2VQoLHVoAPT6NK6gTjMv",
  "key17": "2CDbFLUmR3FDMbNJAcVMYbfPxtcxutBRrBHHjdmZe1hcySLbmCDcgXgYhTXtpMXWphna8YPR8tPaZBRBBZEc2cNh",
  "key18": "2CcffTwiVab2zwBbGZ1rQzVGLYdytP9F3FEDFQebJcZ6bHE57z6eeVzsQoz3RDqfSczrZycvnyNhV39QFVPTY2c4",
  "key19": "RtSbSr5quQfz2Aas5x2k8TReoWZ3hJdgRuubZBdBKvknYeZRxFMApekBdB6ao5YGY5uv6RRYcjxXAXeMMDWYmdf",
  "key20": "ckk1pBqEnLGNi9cfcLQHqmoK7kRdFzqYFqHNsTyixRxCFyWw7bueSV7LSx9MK69WZyV4q8BfS5UWoHz4bs3y8Fu",
  "key21": "35X7AbuW2Vx47CVYTPPYaw1Jk7ki3pzjVfWP2gjP9mTMf2CSCketd83F6sSVmb4j9KuUJtg3bvuzfqNj6vmymsdv",
  "key22": "4S7jeVWSiuaLJP5etE1NV9XM8GB3XemBj8cD7qrwhTpCjVWsGANRpL5gz5AqM5X81bcsJgKS7a1awVE811vDZvVR",
  "key23": "5zD1xo2DV28RyDV78RXHN5mzCCCbmnzCsnGxBzxruuuLuwH63p3c9Fc1v1cRKTz8LEXXAbgan5Uh8j71aoKCLVom",
  "key24": "5YE7kCTCvXXUYDAYeEFhC6NPv8v7Q1fASdbgdkh9QjwyN7vX2BfqU6vRu5a7SYt7jwi7ouHpxN2AysW9bj7s8Cn7",
  "key25": "9msPxsvhSvWigVQfMMF5vHnPYLuruTxtzNadvhatoCAoTZL2dPVN1YNQUcR7T1fRVy5sDWcJfdEcb9pZKTwvDyN",
  "key26": "2s9qAMhdPW7miDSeaE7LTedD8GQKgJbtrNJwaNBbzaqcCBL7NmHoG5nkzMffo7c58tkQRCxVvojtT3rf1QY3QzyD",
  "key27": "4pKtHRfSkheQxzcHpv2UMguW2uF4TCSvTDDr77k7hAY7CxFD5EZXiyNAhcWneYr8RL9S499crt9cVJvfAebUttkp",
  "key28": "4XBqP1Y1s1JnNaT83Sdn4udmv9Zs2PijwkBNCS65Y61eN4TLuHCczYUEudFn8BHRMKQJSK7boe8qgkSQBUR8TUCk",
  "key29": "4j9dK8tbu15mmDCDdSe6cdJV23UimtH5nSHgEXLfJvvYqG7MFc7C1ubfybMNmsM3CS2U95yJrvFeoDWe3FrXtpBg",
  "key30": "5Udgp7mLdx8TSqA5GKt95CbA4tKrHzgDdEva5TPQMmMKvsBzBiSw7zEsGVWte9zqQoodjJ7KchQZbLCsvd9XjPuT",
  "key31": "3SDhdsi76KNjBgF4nfvWXxbqv8cNXbgTX6Tk66A7XcoNox7V46uPTVo8w1CBAgj2eo5b5jrTNLBi1Tbvug3i8haH",
  "key32": "45j3hngfddrjyU6ZtA4oHuJCA8ay13v5WaoXnd9yR4LHUksajNvB9i7xA2CfGbMzYBLHnh4zLU6kyzeghpPyYdDT"
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
