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
    "2ESjC6EHG9K5ZvgBg4iLYYokaLvLrkzikYVbUysGTukzde7p5yZT8dfmobSnLJ7FFWqiMj9KLYAPJfZwxuCqtzi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kPvueYZftDpmarjhijw2oV4vzES6r6sB4h6FAVPMkQWRL2199kgtrVw3am512j1Mee1gfqpAybY2YeiCRkfGc37",
  "key1": "26FTFfD4wLt17HG4kzwhvNzSemeoT9YjbJ8fU5bo4YJELhLhsRA7eawWJ2xYv8zb4ZtZvutGVQ9g5wvNNuNAn4pi",
  "key2": "2NnNPNCniBz9Qkj4JstyXYgh1ddZKGKrRYTDLUPpZsG5jGieyEFg5Bsk5Fn6TLz37dUFw9ULKyQZFJBSBnqW3wQk",
  "key3": "4n2q2sMKoSZ9HyrAypJnqtcbmE5JLUiWBrFa4cjsg4mrdV5QFJaWidsAjd8pQxGJNvpy8LyMne1DoFgG3CRVNQdw",
  "key4": "3tKfJ7Tm1gzWLtDGhXiUC14JkfLA2gPtMfFVmJ8GMdgCrBJgRM6wQTCVszwo5peEiftAUEhBfgEogLrGvPnbq2v2",
  "key5": "5VkuN4TuftcbVySy1CLNg9PCzu7hfuw1KPk9XnhXkW5nDQQWcs5AbnSxLb7jVqkMZSLbgu322dfo5vvTdrrQvir8",
  "key6": "5oZWZueGgKSNykPU9xGuk15HREEyrJq7BN6UqnJ89Y9fKpUxAuA8Qn3mBipeZ5LBF3aYqE3oQFwh2RJzN7cXMtCB",
  "key7": "3ngNeCECxqri5v8zbasJoGWLyGLyUmbAoX7yUxuBdFfCm3Hj4c7mnJmtdswTeodm26v9wCuJyx42peuvagfPW2HN",
  "key8": "2TBcBQsLpeiH6ESWiwZLjyU9TKDFpd4Z9r1xvk8kCj7UtfuXYPpzJLV35NABBwadBERmFEpAGkHKC5mSks6KM53P",
  "key9": "5svgoCH6GFDm9rw8AqrHssRG4nczt97VASn1BJyRevX165rYhhW4WZAi7sJKgU7GEpDxrUrv5JFh4YYfx5EsmE4b",
  "key10": "DhtmM2yzDJsNYhUT3wcQqtaaN8BNYyq9bSCGBFXAHwduTMMCBM8RDBe179MCExFxFzHT4rzb3wtGmRKnjF8xa2f",
  "key11": "2PwhzWNGs2K74reEGQQeBVbFADiAFDQjgNmUibQo3bGULZjgsvARR1iqwmiRHL8oNjvEGfmpGWk9LmzFRmjvmA3W",
  "key12": "bva1ibtkz39gMwZ6AmwcpBzW3aDLWn2Vf8dfNLaYnbdmAvfNsEj2e4NyEjL1Rtw6A4d7UUTBVqrrkqRcBJTTUam",
  "key13": "3uhw8JCgRRawXS7DrKXP53kCbZRhCHahAZ1RRFXSPrEiyXez6VA4opQcL9K1cqV6wU1KyHNvaMGSfzfwKV2J33xw",
  "key14": "eoJZBwZd4f83gnFVoNuo5yYb6pxG85sMiHidCDQjkuzAjonhLfWjxnp8525or4Pjjzy44SFAwq4feUhKnNxCXw7",
  "key15": "K9j2zvRfaqosgTk8wwAS7fRTr8coYm8aLPR16iuDzGrhXbU7eXCw7DQDCQMQKsYHH6Eury23vjuFwd4QcvS2Rq6",
  "key16": "jmAqFtzXkRV8AQNtLDrhtaAyNeqadtkf225Y1bLZx8JVdV3BX1CzWNrc3vhub6qRMwX2XhAVmqJjiFf3p2ifKBr",
  "key17": "5TAoNoNbW67K5aPKj8d82htMDHFJE22mEMLjrNtimCPtwtCz7Rg9ywLFgs9QnoZvKFUbsKy7XthoCtacLWVcsgaH",
  "key18": "5EE1pzL1wxiD1z4jKDzcYP7DmHPYgLJngSZrxVW7Rq3DyGKgeM3kD4moBmRBJVpdEEzGVRcuzEYVxiMxPg3yMBmF",
  "key19": "2j5AGJdPbRE3S1xTqrtksEDcB3P9tdf4SqVsJbiAk1vGikRdWh5oBV1NAaKGLkZErX1nxNHT6K2UJ6ZWwjwyfPeh",
  "key20": "4QxUQkJnZ76DEpqj7oz9WmKernUAkWr8F9hvxWMw3XeC6MTAGsbGnzdZB1hPs1Bqgoh38di9oM9z7igxUcJhasVE",
  "key21": "XWgFoFxC1TqRwuPBKzYkjVcquSuFNYUr54Ke29sdcmAaaHZZDirqfta2PhJBbfvxsQsYPBv519aYR6Bp5JJHuEa",
  "key22": "53FPwAmGS56h8VLwNgrkJXQVsUZafEzUgZQmp7ZmBAkbp9HuryAMoQVGCA3H4jAAEoGvrb8G7qhAXkphnjB6tdrT",
  "key23": "2a2fTfkjoFTDXRFYStetvLQKejc9vBao2kWschcgCNpMdqWhGs4jd7aiF5XYntUfBwH3sJVDeQfHMsN5LiL7S6aH",
  "key24": "58U118phSxdo7Jj9ciYxBETn9ZyFiaq2UBMG7YTDu1w9ZLYM1YAuh34SB43Q49Q5hjCDwp9Ztn3mRhiRUQSmVfKK"
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
