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
    "3rQZP85tGHwCrYWThrFLvMHNf71qMi1Hp1q3d5zgkDYaaAzPHwSFFggSvx1gdjnXgB8xKJJqxwtneE9bGzdaTQRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vwyeHht5pAhf5gM1oc7j1SQHWf5GtHi6c1c1TvDJ6cLcZ7Ehyg6oXbXgFPTvqPgCpuugM8CJLrL8kqt2f8eT4i5",
  "key1": "4Q9hbQkg6TR2rBwMQjmP2q5SazJtcBm1HQz5fymfvRYudBmFTMDKuH7LYLsgbPcPYaKmcGcDbz1u8qKWoLwYt6Wb",
  "key2": "64mPQg1HzDsdjMGTErcyn4dWuEGwFjzFizo6EFBwr1edwoJUg844SsdtzyA72LCksXGMCJYqXxuLJ7tUmwpDTDoW",
  "key3": "7DWApsGrdsoxCkK2eNNairZAPVhhoMxXMKVSz1VLoyAN8pVQxupKjpAShjLs5DDn7wPfG2ncmDio1jUE6FD4pp8",
  "key4": "3r3MsSiF6yR9TydrejYU2rsh52guBLiZw8CpTRGG1trgM4mEtN4qAeFMyBAGpgDfXA3Ag347Efw8Gxp1cPxAuZxR",
  "key5": "2fSxhMKqXthARbWBbEXKpLZgKgNdWREGypGaLgsN3UqfZmctoTguVfMHBd9ECbSwKe9GU77qdGpcYYP1qagY7QdQ",
  "key6": "4NPX3oU3syGajERCJP1GVN2FQZ2DgrAr1uK3tzMn1KcLSzhXuPxHvgNav5Tz9YU4NJmt6CfwyNZwAS97rmr1MqX3",
  "key7": "2Bz8GF7XbtLL9GDRbKeZnusyNQutnLqMjW4vZu6gUwEQmH5Ud6znfNP8t2ELK62FuzD8St54WHXfoi6tjq3Ug1r3",
  "key8": "3wzyumCU1FNtDktKesPEXtTnNPM6ndEamretju8YtaEFGE9Lpwsnh1uQz57xGj4BYYFVn2xuqgxpdyTywGaRpsQb",
  "key9": "5Bjo4qnz9bAW8da5MJDsMhK6ADi4cGLG6JJupovLZvw4HSBExBrEiWiPHg5diY5iAsD1eSpcSNkhc9kZbpuu5v4p",
  "key10": "4P7YsLiUpi9YTq3YTYnh9Y2UZoCQGycLqzftgLj6FF4Z1SFyuEFpjYZL1wmhsnNZTR8a2rnDwNMPDTnksjo1YTN1",
  "key11": "4zNKfYjpci9pFD5bkxgz6xGT11XCEH3k6Ca9CrDBZRzDwth9oXNib7XshNXvPkad5PnEshLtXif38t5GYukS7xgt",
  "key12": "36si9if35nUHFjfdaSH7xD6fvsVcHyBG6dEDjTJAGkEgUd8hZFnLSkeLA9UktvRioKLcFxMJaMhqfvWTKjCb9J1z",
  "key13": "4gWKyCTUzJnXWrvz27hWiwTK2z3avVeE8zqQDhWX5w3ED4zUN1hB1teYPxcLUYnQLfW4TonkymAT4sYbsWHt6Unj",
  "key14": "528mn8f1usaQAv5HJFVVSRStWU9K2Uj7cc5cdqnFZfW6tGXfhQ8gzWH6EExJ7AWczhnkFVXAcP4qJHtjh2kKCbR5",
  "key15": "2DsJY8vEJEV5YjsQLEKijhyZHFQBCRDc99yqrecyHSJgRW1z2KRwDg1NWMx8EhJNLL4W7MBfw6QMP4eS5DT97hyZ",
  "key16": "2QY3bw29S1PWvzBzfbGpyFLfDYSnAZmWopwnJCkCpVya6WAq6nKgsaTMiha6SyMQwJb1vGe5mAYQ3266JB6yY2CU",
  "key17": "sqC9cEaCQYWBWP9JpPrZQj6JTJvr1ipQNrRsKSwNsbQhZTg3ZoDqv3zPppfJJegcFgGCeA5FribF41JfzWsV2gW",
  "key18": "5MHedcLdL5bnCr32dzgS8Md5nWz4QfWbgy22ghCn7f6Q7QnKfq7NEbPuG5LoQYzTDNqitVNEFVxt5Zxdwpx4WhWd",
  "key19": "4T8KqarhL53qz7YT9uq5U3uDKwUioZ6Ad8uL4s5XbDz8jPmbGx47X3AtG3BaViARTreSGUxAe6eLbviE4ZH7VHWL",
  "key20": "3UDzAy7G8A3uzEYTD51FbZqM9si6nRX1pnMkf6Zbpe7SsR1UMUvhfUb1GVjTwLQNcz3wpsh67AveNA6rXkWmEjFx",
  "key21": "2aCS3z6rP3E9sijx3WKejA4snSmqL6QaXu3gEUp3cFspy3Cnuy5BtPXnaT7LmnCvczTFXjcC9Rt3FFzh9RmrMZwL",
  "key22": "qJr6KaGPyykuF78G1cRRSBNdoGhPhV42qbkrLNKTeDHxNtT8TPdQA4nc56k2zmZJzX3ghmpyb4AwHqSwSsEdxVm",
  "key23": "666eJqMEKXmHfj8i8SLSSmcuEPMHwushWubEHrq8h6pUdSfsLTdZ68RB6QuZn7yNripyVsPB7V4SzK6Dy1WGQ1kY",
  "key24": "uwMmFCvYs9B49jX6pfpYwzJdd92veCFQ8JrZRYfQ15evViwoMbqFYUpfdfNXLAsqJhXB1vXGjwxoKZjDAtkzu7u"
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
