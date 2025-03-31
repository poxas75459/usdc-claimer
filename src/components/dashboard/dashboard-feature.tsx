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
    "vZrzfVQ7D2N5WJxqfpzhweG8bgGcyZUy9989iTckhrYjcqwyqEdz8DvisaghrHawwGRyqLMtbQdVoK9WXoV593A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59LAbJdnxJM7CEk6FhHSsoFx2vSAKcTku8cWRuwPq2rDLHzybny4uzcwLiDYJutCpKkMtskJ5fWEsjCA2FBTnoxk",
  "key1": "4WRSXgwRGtkueCtE5gwea6vMjBGBgYbJJRsoYWwLrtq6wqNYF3bWgTfRYJdPHv2pN9up1jcguupfuLo5AM7un4gQ",
  "key2": "4E3QrThcrdPKWPJWiLYxQmCnxDXZYL8TCTk1AM7SL1ZRBAjGqQJv8okfXi4fMV2XkS6wbfzgd1YWFqS2vACHAY2G",
  "key3": "X7ZKvyE642xR5dvx6LQLk56948SXg2tMqmD5gLix9fin2GPq99Nr8Uhm1FE7YjK4nrm1FGR8nuytq9usYmt8Yeh",
  "key4": "5m3VZrrowPr3FSLK82f6AWNGG2JDeYNLi7ywLEN9zqocNrcUXRcVxrowJ4oRpgjyfVtrKHMd6LfexLUoEF2Qhj2Z",
  "key5": "3ijT1SsootbAQQZNdedR4HJeeLFqhMCtVANo4WfmzddTwPHH3hqCRda1kQZyCQRgiA9w9WPSV26Bd9TEwEfjXjoi",
  "key6": "3DkkgYNdbgxMDW9ifqgYEyqXHz71k94G4XL7mwofyqUq3E4muo2D5hgm5HAtLufsPnJkMn5K7iU5SRDcnZg7AhrD",
  "key7": "5pR8TCKUhpnYweByUrDoBNSwV4pqbz19uQaJtuAZkY6zsLbRmAdCZabxanXDjQ76GpL5S7RKFhmLqY6MN7mNNgn9",
  "key8": "M1ydH1kpmVAeBVt3triippobJhopsw7fpScGogrfwbkq35BvvzYbMn4UTNiv7ETzHyK6ZG7eBEgHS2xzkUeTjQ3",
  "key9": "2DPmMNztyvq9XgucXbFNdjqXf66cixBidHbPd3nsEZxV3F3jaJQZ3MARoU25eeyrDKpMUHC9PWpbTJkwhFMeTeiE",
  "key10": "2Yeb1r9aPD1RsZFdJ6wNzz45QBPuyqhk9FNE5Ms3kAfRgLZyz8TnBozvq6iq9Ppe4d3Wgtmv9cnUoVHd9ZqtdTmc",
  "key11": "48Y5nAhPTzmSLRAxMS1bHnfujxe2fAjk5bXuwkdt11j4ZNQ9p7sf43TNTYsd4ma7ttM7Ef7JwgNHPjyTiqwJTP94",
  "key12": "4opB9nwgHSi2jwNPxVbwyVCA4AXisFvfUR2sDBwejq6MiEoNN6Sfq4UQfk9TXnsSSSuqVRnxePxTHNKDuCe8vKi8",
  "key13": "sLPKNKFrYkX6KmZmbSmjfSLyPR7rCUetz88e7EsgivhrYpbUeBAp2mBzWpLKarhpbe1egrqSR76XxNUKD1Xt51J",
  "key14": "5wA8WuroTV4pRxFWxdt3zE5wtmnHZcShLnpMEBUEGhmDHxezLcFej6Gf1KvFviGm7zMqRS9pXMpYfPT5g9udvKyX",
  "key15": "2kJ9WbhrxkAcbqajT4FtdHMvivVSRaHaUh5p6gEfZk12Fmc7GeunTgYTcdmsT8ZRjckgCyRhFuataAJqFc4zK8KH",
  "key16": "3F3uiYwFoSDpR54sUD8HTbnSncJWjC3iaw1wi5h3rM822tbsx6AgoknFbwGhbWydBg4qzsvTAtpDrJNCYERnugEF",
  "key17": "3Kynt7zmdL3gePDrQQDmtbmGgv4mDnoz5H8XXrPj5fFghoTDnAZy3Wt79PGjbJvQgey77dgnQpQDBRNN4d7PcARR",
  "key18": "1M5F3NAYxGNo7FCsqtkigrMMA9LB5emtSZGQwigrMH6LGnVgQtvEbALZfbsj4G6nBzUUUue4odfcknjxdhsXMGB",
  "key19": "4BQ6r8PDAQNWP6sPdApk8eogCCfGZCxdE5w99xcXq5F2FQd8xbVsASKysSi3vVHsMiMLVF3zU9oRkDBRSq2Vvyme",
  "key20": "2wcBsAuQHiBNMumQWyydFrU9N4GcykPSAW48Sy9wGzpyjzZNc1kUL6kLHfVBZj7rYwD26nZT6tvxm14FfxeFtHkb",
  "key21": "4LhMR2tPkzsp8bcFJKvm97VoKBuapp2J9XssVhRrLrWVbtU2CncTZAXwLa7ZqfLbNeDofJyZVnnmF6BBrcySxYrh",
  "key22": "2HStsJSsQDSYPGvXTz4FcRoQob1bKiDJgdmjUjgdPpMJcdqVtZb7yfdD7vG7KMcDmBV6n7okhCWyXpfUzrDDyzYh",
  "key23": "4efqnLMTvRY3CUqf6nPYdNL3TuNv4JPDojTU96UTzgT1RHnuW9GhiyZMTTs5iEbvzYc7NRuTRQTNo2HWUvzYVZXW",
  "key24": "3BPGwknWuXeJjJqKeW47uKBZxKdR7PrbKK1Rq298SKKmCvvtLKtzvXE3S3X51rPxDJLWxdxpr2hnm8VBqSCrZ4tP",
  "key25": "5cqvD3GAb3vJkat8RqLD4V9kUNBSHLMvopgLxFNAYp88ZgRjefLo9GJ1rGEMtBAMbJm2hsFoSqD3nptbSw2noCp5",
  "key26": "3KojfQ9dYu3WQ4QZkSgJnaVATzis16oJQ83HP4jzFZA4aHTt92uz8oZA8CCdV5tBt467LtiW9FEnLy8tVjM44s8E",
  "key27": "3L7YwL6YcUdJ3ZAWc7dJ8gsThnKAh61W5zcHAxt25SXo7XFnJqmV4AZLfYQwTANxPJpotDGEaBootioCwhcVdbov"
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
