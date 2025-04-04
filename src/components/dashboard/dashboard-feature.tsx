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
    "4A1pF3m3BhHJ2LPt4xNCr6q3TLXEZXtb8tR9ZYHCFRPAVanXPpY75bXR5SZZD1XkiEteV2euWvHQXatTbPjk2vag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47UtXHcFYBBFszA9mQqq3UJVgc1XL7QsfZTBkZRzyX51mN51QcWWQpmof9wHrXAWCPAvsfNGrhucvGG4BnfwpJmg",
  "key1": "2oRD7joHNKgRZkA2QfmF97B3tQwCtUGmGbeiKsURYqihTUgBfxfd7Ra2NraTsTUFaXnA25YKjKyiuQej5L24TvzM",
  "key2": "5SeLwgsL1cyXQG2xbyDF6N6Ac2SSjvr6axeLoKhB4YHemwVskBgxwkRtvQd3hMibwjJMwT2r1S99yvtdxjmVwxFK",
  "key3": "53h6x1ikqJ6dpaCBvBP3UQyVCHMxUe8LCK8BA5uSuPPJzjmiuWbqCSjzmZsoy81M8386UJ9E8AZ9jL54Jx22twGS",
  "key4": "2sQRwgWq3a9XWUBYn3sRPAPbWsXZ93ZDW1Y21pguzaPYzbpP5h2nqK4KSkkCNFX9Pm5zyMFPMbpniWoeThqUjKxt",
  "key5": "2hVZ3swbJWboDCUvYtCt4PVo3QcSpVUSY2nsxXELbWe4t3xUfQycNrvfe2JYfztnVhs5C4sqoX8pyyfHFeVtYs5H",
  "key6": "NkzEvXtZ9m2zG4Lf97Wyc6UzgKBrDWF73HHP4zYr9RzgbXZQBFoGGfbkDobehktovnfzQJasTEWtFmstCo7FNkU",
  "key7": "VMhW3tq2Uju4bq6FzGTHjCeM6btqp6amuFm7C4cEaCCh2hhuAR7XtgmD57S4X6aHq3tSfG47yZ4ch2Mv1QdUjYn",
  "key8": "b5R8oP35hH4GUPKxh2BD1GvS4mgmx6PKAubv4k4PAW9A1s2PberBPSvKZFu8KGxbTMDtV6KoyuRMVxhzypVjTXi",
  "key9": "3MRTqifEPLhVw7r32QKr2dGD9q3Qx7A1zPZY9z64PE1bsjMsqZgHuBsRSfdGdBnwUkUzmPEtQ9Z7YJEeN6WvEtYD",
  "key10": "5HAYwqof5ACFM53c5VXjz92HpCEVLWuynQEmw1RzqqdrxsVGiuzU6MHW9UGyvUfePD2R1tk5WKG1vzqER3ot3HmP",
  "key11": "3LR3CDXDWwze4P3mPap9Abn9eiJgC6rtkGFbfVX4VxMv2ohVYdritMZ2PgVgec54DCqgYEwMucppf3vYxeAufX9k",
  "key12": "35mZffJ81R3armAET2N3oFT8udEDDNt94bYpjfnrdJvD4ZKZhTqZjau2kZmfvNJo8MPZ8AMchEH9VLWYkBJhPre8",
  "key13": "2fb2GL9EdpHaYyWkukpHHbPTWwSrXPiCBSBQSi7S3z6fUJ9D5fiKwCBmusUAxDcH7P3AfVQWcSjKnwnMFc4XmeUY",
  "key14": "3Y1wck1KjnY9JTjCs7KWY52V8kGUkpPhwdFFDg9KbNuCwjiLaP8ThgWNPguURzKR87kRHXtmU3W5fQcrvx7mP2vR",
  "key15": "2GfykWjzxnR7aNFHhxHJQDZycLrVKBXCKhoWmdcSPmVaQHwZYKtQwJyBrH4Bt7oiJjDo73pvD4DSs7gdXtzYwLwz",
  "key16": "XE8V2eF2LkncVPSqG42shEmuYABu9FKnGztAGJtpzc4ov2YNLUZscvrV6tepWubCJn5NJiUTbGZbPT1W3xUfnbD",
  "key17": "253KWp9FbSoygwcHUtWz1MRq6hrYZscwkxhx7EAPr2tGYUqJM7fgprnMrpZ51hFM1xfDv3ggqAtT2kTJpWw1qJ2b",
  "key18": "5VaVTY6xg4q8QY11QwwDx3NfNYZyG9JNLxQDdcSLRLrJEWWxt3HHdVoozu5BJnt3qDRQEchS96ZxAY838xPPcxiE",
  "key19": "623Pj3mEjXhyMm8zjb2iKyxe5hoJv2yGXYVyUqWQ2rdfRNNSMhGgFbDvrErtP1wLPpXaVY7FuR5B6mdQpopbtWBw",
  "key20": "5ABDU8dGuTdM2PFS4dFxHwKdnVbvuB4te82k7LyBM2cnUJdBhMpiUrDyRmC5i5pSETAhWWjtUQJyupqAiftaeBFn",
  "key21": "3iYtK6dHfjGSwVZQr2ZJWqhqSCAVm8oyhAqz33fXzc4FSfpk58Rw7rPceQ8RHA9TCKzG57RMq9muVbqWJN56rn3x",
  "key22": "3sAJSUgfCSWpPVQ8pyxkjnMsfpqPtKQDfnBTJPxhBA6ZkRKoz4w1yDSGL9ydyTxeRbjBUep8iMaVH6LkAAMK77XB",
  "key23": "4itZww9C9xX2d7bhXmwZWipWSPy2C9NDqsk7FLXaYdoE7YRS3u22hndarn463McLTh2Ea8x9eTYSzu3fzZuKpJTb",
  "key24": "3mfdqVmAXys5o9qFTEQrku2sNKLopvexyhe95EH4rb4Ee7HsbE7vY5MuWmL7GyTCt8jeXh4wy3m11t9E5iWcW6SE",
  "key25": "5SYboJKvjJE8iSZ8j9XWyQap5btimYPSbrbsBSAf39HeCmmZyF69pUHJdQWPLMdzpERyBUvPFQYn4EiB7rMmR46z",
  "key26": "3c1oabrYDusZeFwkh9EWbGSJeYHQGSH7ywH6ZHLoJhwpUFvm3srWaAnMm867yhNPQMFtpQSqepzNL5CRCiUccXj3",
  "key27": "wAfkDDQNpLuYmsQ8KrSrPMKs6PpEPhndREV5bg7h5RHKRj1dqfU74sFto4nH5VsYnzrXWb1afDuKK9zyhj5bPF6",
  "key28": "3VaDDg6TzN2yZyqf7d9XGeX8FhTxQQsh8a597eAboAX1CQ69WPHZfbY2L2erCcypLen2GN9C22dsp7JFaueuzyyr",
  "key29": "3S45TN9r4TfB76XDtmrPPTWZKtexbAUKnKq9D9LagLkN8Jmb4tZJMLJDy29nP5k2sk7nZyT9eYs7MECycy5fkXHy",
  "key30": "2AywwZinZqnMXYVC1mKKKK5CmRTMccvqzifXhWoja3EHZ71hjT7QZJ25raS1GwSh9sS2KiEUQpxZJ2KFnM8UDCeX",
  "key31": "3zN3fDmTQbskRBmUBfvoQJXAtcytiosLfmtH5GNdF4pTxtWq9oGZXmJ6D7QXSHSFM6GWx5kkkhar8kQztifydNtJ"
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
