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
    "4y2nQvbTom9vvL2BG2tQrUKdTyuKdN51CQ4bcc6KGT6TjyEDnt6LX7wooJVkPdw6Bn1SGMpgN2MiCFSfqWWGs79h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JfwMduGNebneCxUmyruzRNG1HzGseW3CXUsfMpvQogiLBjoFz35UErTZ7Qdc51UVsunK1BEyS5VjnRgRVBnZ2ES",
  "key1": "3rygYBFuZzXmMPSXCU4dnSfvfgXmMrJoXoJXJTYZKADWx554QnjcjAyc3vMUzYUYyeyn2JXn92UD25zwE7QpF2hg",
  "key2": "3PmWRnrbbU7AH7gveJhV8HNnC7dhxW4cqQffvRu8RJDJUkkYdZ1pTreg8YqirZ9xr2ciEJWUpA3swi5KvUgSJxqs",
  "key3": "3SPA5kh2qz4n7cS9vox3F1pN9VnnHUwUuFNCkvrVEqWgugm6HY4SD71EUMyNyFhadBX5D5CT2w5G2rnKymVbnRcs",
  "key4": "41qowS9YFFDfzcfLyFvcuTR711VJzbny3RWofqqkUsHtApEnLwbS1kzDzRsUWmTKzPb5RfxMSabYqUsVT3f7GFPL",
  "key5": "3wBjJs4srdC4Xg5fV4WrXw7gGMvhCxbViM7h8qNNaT94dBujgXcEqbjEUJJi2WA6aDxDcJAuhTKQZdEFd9Bxx5GP",
  "key6": "36QgVnkg13sd5XV18JSuEW24jDghMrNhw7ZEBg5Ka1MgpYK4x1XDxUXEHSQdxqBjsq2gBD1Wi7Fw2hCxCQD96ZTm",
  "key7": "5rWHanqhUxbEAPiARQiVBzT67yyU1xYd4TfqJrZcBmUBsq4jMvV1eftDxhGm7oiBYpYbyanK7QBPthssWBA4sPdg",
  "key8": "mHDRB9TsDu1H5FLvrnprk2SixAnwi8i2eX6kDn6QMsq1TuGZxx6JLmPNXMnbaW6sZchve6WGAnDnstgqJNxWYKw",
  "key9": "4pvhfHaGQ1jGFCc9d5hLEjrCaWP5uWvwXWeXoCk5AjdijZnLMjnLbMMdNGHPRfasqrqUWhzXbRnbnhceFTW54tH7",
  "key10": "4GiWfe54KMTisj1DojLEwqsArLNPuEGckU2z8KzM5SQ6XqUMjQBkcj5ptTvuyKxTQp5o47c4GveuZvzi4LgW2dCN",
  "key11": "xefi19vmpCz47KBubqHC2oUpLZ8bTfeBotFutxSBxuFMmqkTCvzE8cajT5ySasjQQ4tAE9seUoGCvPneoUwUKsC",
  "key12": "2WCythpcVbKQH7p5Kko42UnDEt8TuXasH8eowfzhqzcqfgfUmymEaTZ6Z4SB1nSdBgpuruNuA63bvpjd23jbFrCT",
  "key13": "54pbrscMKZeMKy8K1EVnQHJ62tAAQxxHZo5W477PzgoJ7Usmk9kN3hQxkwV7tsFi27HhctGAW5aYCn77FBbDp9pt",
  "key14": "5S2XtcN9Cru2tEUZT7uVTicJ74ekBZAqFBi5LPer9632wVJ2YSfrwrQBVToQeWMsPczCwPwte3CpEBdAttBuJMzs",
  "key15": "3f6TKpQzweKHahthYBFYdPc6Wh43Va79LcFimdKf3fwPKnicxZUhgVFaCJ8dARqDP8AgEpjRzVAe15v1Kb286nA3",
  "key16": "2dzJnYVsynxA9tACY8uGXZSS1zWUc3k9WarVsdUQSzcBNUU3Fu1w7cqyoBERWnboXujqsuYz22mCCQZPNmTq3CHc",
  "key17": "4X8Um2H9SZqvaQKDhwN7TPyvpEXPAodfY4Bb4ekbztMrg1w3zgNLSH6bQJEU2FZgTE5EjzM1DwtEV4nRmxgYmMKW",
  "key18": "5y6x5v4aZe9QbY6wsftmTKNjpXbhTjHa3oDLDFG93eQGQCN9RCVMwLCFGFvtuobgxXx1CWCZwQBnvtLEstZDyZLx",
  "key19": "5Nkx93gaQ5fAEoEw69iLmZ3C1s1L8X21gg13spkP4YoiRbiK4J3WNkven53L3qJdxomgTDaaSKycxt7idrytuVW7",
  "key20": "5B14nP1faeH2UmgfiraH1nGJpN1b8GFL92dsKLtJvuf18M6bFq8sugYmZSu8gxdpz6QaFGhUba9ZkSdywKZyYCTU",
  "key21": "3VPjjwkZZscdaAchyKgqhacJaHMDmQWTkVZRHD6c23JAY9XfQ2fRgWaXAAZvNbnbzssj91rj1yStjeLjCAsuNgNh",
  "key22": "45Z5Kuv8bc7Hm6Li6i5KTmNVhz3JkoV4hwak1BERCCs1NoRZmmJnyhiT9fMNTMV9nAvLB3UPtzgmwjq7ZrxnE7A1",
  "key23": "4Ach3rcgF1mRybBcBdUWQpAdkWUP1rVsWJLGUneUHj24eWkfedmKhswoQrvZMGV6UMxMdLREf2CFq4Z156vhCSio",
  "key24": "4TCVGzDLdn3nivUiL6n9PvxAP7fYWBDhXCJ7G826jzPGX1b3cdnCpBEGK685JFWwYCK4xsT73icYoBaqv5qqgxXb"
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
