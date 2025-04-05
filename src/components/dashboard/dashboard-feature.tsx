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
    "2JHgbKM6zXA9quPBRbbRpqSmFBxpP2dMksHhioCn3ehEL5Kn4ZEe5qGWV2L6XfLbCrsQkKQrJGLdU629kfYFiAUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uFYnAk5QPBsNmNGVzuCw4SVYHtpcmBVcZDuwRAoymuSyGsUUGGKwNncFZcdyZG4wUQLQqk56UF3XqeKR7rR5qEf",
  "key1": "26uFeysYA6RYXLVcCQKWdJYEK3zQH7GX3YRsR26Vj566x2QDktfrkc1yAFdbqAgMGnRRWAAkN2beDQDD6Gr7fwiP",
  "key2": "4dSv3utu8t7XcxCfVw5U2pD9MquSeEgtYYrruGabKydGeEM3QgXnrWU1UX43q2K3GM3F8pHDA6SboQVdv6PH3agt",
  "key3": "3z5xCGEsHqFq5LhtcKCnbzKqtHhJ6vVYd3mvYPRgUeQVLVSuLLEuiWWwwjFZQKGcywHusTMXPoiws1JY7u2jtTU1",
  "key4": "4YEyFk7Gtrwom9dNAc6YNrLqsNSb2ZTJTjHcDZquG9URd7gYxdFeBMhrfWfBA3V5vnAzzUnvPvr3HenWzbYspUm5",
  "key5": "bYfAYkmTn2bt3rk7oS1v3YbKeUMGHWMTT7xw3a1f95yh6fihmrV1zfSHLyba9mc28HwigRprRz8veakiJoCigNd",
  "key6": "217nsimrrBs3YoZ3xk2XaJaNHZNUpa1zrkM6kRtaL7m8NpacPGgPLtL74xTGfrWuUqXCsEuYzDttnLszm4qCxHi8",
  "key7": "4jb5EAUQw3VN3yvpSrLbpFpSX9D1QR1s8HdRxH8AjEdPwjNxKftvw9KcZhAg65Rw8cneF2PmCk5iEVi2xPENuNYz",
  "key8": "274QxU2iTnGYsHJySFBQzXmAAEais5ZAPn6FdorJp1zfKvsqZJFbreuJM8b9i3DamhGuqUMfk9eo6kPWvZNgP4rG",
  "key9": "2RyUxPWPKYXF1FQ3xVvHvVqwmQ3LHtfDAzru6R9EpBVvkE8JbpUStVdFTWQhrfDpsx5EuNvLL2gSZK79pvdMWXr2",
  "key10": "4vVZ63eooq7Lbb3F3BuGA7BAiCwmZTR3oJmwNJBEet5hq64ue3aTCfT3dGud6PMws4iUQdMRtPk375fKicEpWcDT",
  "key11": "4jQxjmbVwXd9Nu3p1cEnZeLvLbXVJGe8DxV6h8tubz7CmbZLTuUrMmG4fBmiR1Liw863KEg1s2HvjuaUgErgc3y8",
  "key12": "4PcLiYS2VBk3wvbyEgyxqjkuKgx1B7ZLKxzRwuRcghQH9Qr4syfYEWgyRvQBoASdv57XdEp6HG5hEGDs4xwCGcPv",
  "key13": "2cEWD1J19hVpJDmmjdC1oNQc7CiujmGx9XSxDCUkPgV8KNDWGC1sTe45TUkhSEaD8eyeV19QcqA1EMs7p9kKWmC5",
  "key14": "4vnWd5URXzugBDFYZi4Tdm8kU6wiBtTBnKx1KvBPhUnSNfAyxQ9WknMpyMoVFXhejHEpsKbZEvxzWVUH6z9hykVb",
  "key15": "33cyBg1w5QevWkJXZFWa9g5vb1saF6kB26vSLwzQRfjBU27HFV1VVj7B2XmVSX6Xa4nAMt5yJupSTZ4SdCidg4tq",
  "key16": "5XhLyDsSmTFDkJiYpYvUz1z9xCGuGbbeE85Y8MjkEYV4ysBtBvMmEtKvAQurm5VEG2mQbiA3qWc5tY5FCBqS7uKi",
  "key17": "4tsXhsoangFAwx734aT8QMoyZMyiyyoB6SncvNeS5jGvYmMBQm4kTYqa2BBFCJpDEC7PQtMiwKzjAngxWPUyqYJr",
  "key18": "4BXSfieAmAjqSbR65E2moJRKHL86DVWycrEMkktFnQzVyH2akTsNotSywDL1sgnToJSKiDGDkfoNi2GsNu1m2PxZ",
  "key19": "zJZx4naHHBb7jnznPcBnMmXKP986CpSG563ZJqyr4hwj1fgK9Fbpk9AhsgSW2khwwqbg3LaJEza8jE4uiiLsYW7",
  "key20": "63GeZykePhgBFQdfdPhwd2MziKUKPVhKyodEwnNRmQCAo4ZuWQ4wU9v8XkVrskkYS81tHRM9ABURz4hTrduLebG",
  "key21": "4xyGJWjugUwECJki5jGMoQ6NiXJ4rjEYWDtUo3JpYYjmfeLjGTTfaJQGiaK6XtZNRppXM9jYvBnGx6c5Jy7KnrC2",
  "key22": "5sSMZTaV6CpFoAY3a3Czrr96CDVJZQDDwb54rdciydqj2xtQAnroFHfFjTZUbqdUdQqsBh5RNC5vuvtkWnFy24DW",
  "key23": "5K9RSaM1H4T3RKAgXwVG66o7GeqZNWmJenTBPAXQYQHdyo2B1Wzw2xWNU7xpVPbS6EX6cdMryYm1hJ6JWDcyM66G",
  "key24": "47U8xas4mYiDYNpiW5Gx2A7dsu2vAZsG3waHkgCPRa7C84dVnAgrHai1DpxvQQdtA1UZ9eAD5LPJDXqEweSszjB3",
  "key25": "3apCpa2qErmtqjs39tB7S4kFoNmpTvJi3y9hxYW4VXGCYYmykB5CchnNt1WYG9ypGXTcKF8gt8iSydh78WFRaEKZ",
  "key26": "469q9vsphQVXJRRmhb4SQe3AL19rHrUVvGVfWF7YHyKnczmnGsQEHPd7BzFcih4HJxBofDhsNhekoHdbHju4Peuw",
  "key27": "5aaW3rDxXbsSvPeteSA1MyehsboCgGgLsMKjrQfZKER4z99WKSgpNtahvTpioBeaJNHMAoq4iocCmQYbbQZgRibc"
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
