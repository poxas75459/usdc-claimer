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
    "CyrA9Eh3MyQ9N38pHakLUrQmCgaQWL2HLkMxf2g1N6nr51ripV4daWzhogQwbwRNwQtYHpYvfMcHy4Ge2fr3y3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m8xzhkUPYE1yT41dCfpxJ1A8K2XfnpZk46FZXbfDiUojRbjVcEz9ZvtareswX9KTqKenYYXtbQ1WAw4GyRAHAwb",
  "key1": "xqQ9Wo9qRp6skfBCfC9xNm1jCWsyoe6W4zUL3WfgCEmAzvx83jwyCc6dPpL77uXRSEEtDPjmRkMtVqxDma15Yeg",
  "key2": "fvbL1N3c9f9MdrBejYAnxvpvz2mBsZ7dfjE4FKV9HgdqJoRHyJnvHczXoSc5zmyUUP5DQov4cyBx9UWgz9V66gn",
  "key3": "8kfFNWgCJf3AT5h4RjzmKUzoUHLL6rrQZXhDaMT2W5GV7Tm1ZV8qr1hbBLApabY8oSXe2hWHWgpSRRr3XS8GktA",
  "key4": "2eh6opqRL9CknLdNuQXYuTYfvfBbvm3wGbmbs5B4pujqqvt452KnQZzfaF39y2BKvyCsWL6wEmGmRar5EEYPURvb",
  "key5": "idnaiKgZA1beDtRwuCDNG9sau1ZEtpvAok9FE6pxLispiFHDSWo44oWuCbqT36kQxZrwQyBRdQQGuVn1cJYbmfp",
  "key6": "2b5cJTHoUZReT8PjD9Av2DbP35L4W5MotXz1CVEatErrUL7iKfZrDfhqDrtbUWra348zMYrSavqLQSUNpoYD7ign",
  "key7": "3eBg8hAdguLabGC148UK1WaMndHbMLtofzUEvwFEUxWqqD1EVYgDNZHLFpjhMz7HbPvGiwcGoq1Fc1tVaSXKQwGu",
  "key8": "2RbzGbE99nYqQMPhgJVvp3ar68bqY3rHzvnMzZZqx7iynULM6UsFnjnQPJDEu4r8ai3etSgARRC5tXnDHEVwrX5b",
  "key9": "4P4G4eqKpAdLs81VfSjqCS9rzg2d8wqHFRn8MBcBGJuhWvYu7BcncLo9piGHKKJJEBiY4JNRYB7w9BcPZqXe28a",
  "key10": "K7mjvcAfish7VQeegi7ZqUDZ3aY9xWT1pPTrcEGxwoHNTyPLngnRNgmW2VNMBX4r1KJBq4wmXiXDWFqauctLC3L",
  "key11": "4nnaxbYJpdTVWDVejinuCVBSV3P6gjRTsekuAicT9qUD5ZMfEsVb2eVYWJZ9ELseQ1ZZ4hCKGYbzDUeMMRoh1Nvp",
  "key12": "3TBNLsQHG6NKQ5ZjgvpBJbm8LQjJodafgXDMYNbi8RcP9bAaAMnUCwmwiqn598tqvzCCCQStW74D6WPNwEnyXKQX",
  "key13": "F8yNBddLGhgDXLr74fvNymT9bm42VALrJAN3r9yaj4QVRC5GL6s98u6MZqjNpNzJ64BPid5HRzPmWVtgT7egtMo",
  "key14": "4dwzdu6KrYbiseyAzJYq75esUH7PpjpyG7N6X9do6ftFSyekXeSMyHouB51NhA3dnugHB7BCZuxwgfRixYsdcBy9",
  "key15": "5rQf9JS2AgyvAUf9vSqfgfBkvCuy6dLRVXAY23QA7kSneFVdNQRrH6LBeAss64Yma6Jdf6UgghnimBzgudqBZYUa",
  "key16": "4t3sMdr8ArA4gZfNvjABP8BU7bQ2XSzBLzTcCBR7ehu5PyGAQcLCtuvPWSC6MKbH182R2mMqjzthyugLgQNGBHGD",
  "key17": "3dNGXQkSPkcT2EUWZR2TCdJjh6cNuXxdQRoXsQZxBTgnuTqxHehFVsUmXzStYLXYtAGqVyB9DVqUmx3E46hVitsk",
  "key18": "cCKAtGSVPdiXnUgpCDXrMrrFkJau2inzsPKLbNstAjXEZLk8kdZT9zbeTfaRsbDvTuGvPxNCrkwqSGixYQAfVBb",
  "key19": "4B1sEqAZw6jmQ6zdkrnqpxphMELVLWGVcJTVfkWJuLNcgN744vHaWCL34BhDoVzj7JfXZ5x2n8fSer1HfD1Nipb7",
  "key20": "qsHaX6sRtBhRi7JqWNqrFQ2raoCVnms6amB6PgB2EMzvbhPVs3aoUFW85XjwT8aAzxCLcN3eEdZg7GMENjFy88Y",
  "key21": "2FjtGe7njfZvTs15XpcbMCRkXU3VtFQMqQoRBooMnCRLDeC2n2GxcxtRNMVr5NRGqRLLyuHUGjyJPf4tD3wsuFM4",
  "key22": "4WCB5PRbhGXDz6Sn6Ng6fLkQojsuwDk4b5xXQhw43KdvJU2ci51EiwnA1N5TF6d6qqdiJzQQ1zgdVBRPvVuAj2rb",
  "key23": "2E1miqoaejEkyFbEzFN1vxFbQ3vhPZexYFhDkY7z5mBzVBFts9F3XkF6WwApuy9DSajvsh72BPt7Cpay966YMZSM",
  "key24": "9aVYpTXYBXNYtreXbMPyp2Yu7SpwJ9XExP6rDkFC5TGwfWznFmRrcD4WhD3cEDsVgqe2uduPXSSUx4nJYF4raGW",
  "key25": "29HvCduLNWjMoAycTjkgWmCWXDUFeDzPDtwCJW5zBAC8Ynp84KNtBGD6zmHycAtyWwYSzJoRBdynB6ZVFdhREGVZ",
  "key26": "jHjy7tRE2FgVnKF3pNnbLAAGZuakxtEd4j6tDm19EvZzoequxmKqxcJkFjLcdSDhGrYkXz6V5aJQzau1n7LNugV",
  "key27": "3AfBvmJtz12URoKNe5K5hpBEqwCzh9vSeGmcMgjPUeY46hAZehHuJ6jLPu7Fs9y9m583PH6hUh16kcGuA5RLifMQ",
  "key28": "2uSvVvjvMYigu9zXXvaNyEaampRFaD9XF2t29U1gu45fyje12vK4pa8sKk51CvwC5pgKKTLaRskiAEuvG9ozekpZ",
  "key29": "2kPTxHobNqpbsD6TdNT64d51cnd3wDiyx4p5fBzCBC9ZAYsLZseSUFB4GW5UDEuEXmdhJwo5gwMMxUdqtkdEnirx"
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
