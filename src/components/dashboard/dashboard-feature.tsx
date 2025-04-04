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
    "DUVBqTwMpeU3g6P2y8ow6YGBJYmKCSQjKoq8CUPAsRpSh6i4zky6JGGnHViXo6dLM3kfNtUQxj82DMPFgvTdUYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zWTVjLg3Jy2wHSQsHgAiY6HidPpjUnAdZjXbyfp2ayVLLkrXYdqXQPMApEZyqBrfEyGEQFXXLhnLb6neH5GGAUf",
  "key1": "29kwsdsU1kjXgYe4wyQBZYEQC8PoqDgZMTuPXBQxpqTLvMvtftGJqRNJchWcp8ekdxte1JKNYyQrdtFdbiLtJo8i",
  "key2": "4xnt9s6ZqwkS5Z12zmSv3NzMdBCTtfQhvwTMkqR4xffTtP1326CZadkhNhdJz8DimhrhCkVCpnWNTPhSrPhwh5MD",
  "key3": "iY9APLE6sLyfc9C5j3TeayhbSVFjznUBnBAuKcQC2BuySzfC47KgXawpngKQchVz7otikk6ojTQ474jqfhEmN3Z",
  "key4": "3rCnXAcfRjnsQeGx1wGVfu7Fbusf5DSGks4TxHMVMuk13JzxKXYgMWw1ws6pxEjNcEWZdsuT8uaPYqcaKCmTLKmZ",
  "key5": "2xGLWPYmED6YHWQvK8AGeSiSghEZSXiWEzhUFKk7rVFkzVFbWbC8fyqymfA2xy9vR17YXrma7McWqmvMtwjwau33",
  "key6": "42nvjFCFGVhpJ5hUCNn2nJkxivEdWaLMEU2mNcootJz6wYTHxJtiK1EJY7jkMtuQ57jCowxNBnLzU95tQFy6CKRG",
  "key7": "2xxokSoYFahFzJ2bfYqNFnJZiTiR49QewYicrF5w9wogQG9umaUxyAv8DshTnpzR6YSiWRqkJ8NGhCc58NkvRkM1",
  "key8": "2bkW4Zunu7fU4R3jp6QHKXkMJnSkL8anJDbTECduQrMZqqbnSAJEbTKToahsnPdECDQ88fYwcXWsUDxZ6aLvSCTD",
  "key9": "42X5uAqC7zHYBn8HKUzQp8nMhE5xMPzUw2tWBk17XCUAGPBnJk8WNqohr3164hMtktvm51y1sbJkNBTdj9w3bQZF",
  "key10": "5PPxJ9UkdPaVZvUr1mKeTXvncrkNtm1aZYunG83yN1pYL5djdDw8V1vvfnz2uvBozQMjxyT4NwL7KKP7TzTvM5Jh",
  "key11": "3GPAwMkH6vRwaKGWZk2qLGdK9uYQgvyibhNh6jJeLoFkkA3MA92Csu9SqEey4x1kpJGxb9U4joL99UW5s54GeEBT",
  "key12": "4cvk2kLmpWa3uGZkksAZdxZHuatMT7gCXDEAUfVHyRcHZXGu1EhYFjiRYFyMubNXFxcsm7HNQLAqTvEb48NWhbtH",
  "key13": "Ap7g9mrQDJ6D1Sb6r4zQUL8Dy6XGBvyiWs5ij5As7Rcw4tB93CYSXcHso41YG7uUDtNzrXFWLBLdUad7zLXhrua",
  "key14": "5qWQq2NfJVJR3FwBVsuUakzcr6e6uQR25ZVNosDaqcgE26L728Fw6ZC4fejvSvwZHGghNZTnKzWPvH1dohwZiZjv",
  "key15": "3QLUp4vx1rTM2Ypq4JfvmcVN3r5FcYDxpxLBvPnbp3Wj4GiUYVVfnMHPv8vW4GLeWaAYxuFoVNL9BEQuXsSTg2C5",
  "key16": "5aJxZvyEMGbZf9EYzCA8K36SHXrijveLEGhZNC1sNxJkGjrVZ9niX3qT9kibdeY6DEoU5pMco1HZfNbjes74wQBS",
  "key17": "4FYrtgPzrLYYQkPWtkqwMA6FjeYntMzteZJRSVDojMqzYLgMMWduZDpxVtmbubiy15nth7E3WftupqrwV2UHyvPc",
  "key18": "tca7z3i3ZNALwLADobvxm3SRrfSzLAwEAp6ycHzGmeG6w4rLTii1qsb5sBY8fS87HHNJsNBL4bbSJfiNG15cPy6",
  "key19": "22rRWhakiroPfnWAYcxyRvf4mELFaRatJMtXRMi6acaFVA1ztedThWWYnNck5zWofrrZebuztAAx4kaZmu9PBeRD",
  "key20": "5bRLcfRadtJJZBhHJC3L2314xsjQtL2ZNfoYWNevWmrXPSx4gKnEi28hN1q1CQQh7D4ve7PNdzz8CkTAsJkT7SdU",
  "key21": "583oYmdjxcXNYoFXRgteHZA9CA64r76R5X6t1yGbdyNitYY6ez2cQcmdQhxp1jcAJSe7fzKsNZf5W2ZWGTzqDjDM",
  "key22": "ep5AQAUL77vseAGvYCYiuQfQS3poLG9EWgmY311mETwJTzUdm5rUnUQeekfg3bM45M4GiRRrR1iJnMRmwtMnRqY",
  "key23": "2TTPP34PkhsW3JL3AnPYLf1qAK3tsytJjzCirMLrXQ2HCKoamzWvkueL4U8rBa8gz5Cnwbtfb7eCDf2sBUyQc2p1",
  "key24": "4SjRM4czgn6aEKtq2fxqJM9tJesimch26ecLwPt1Dku57E2cxybWFWPiaVAYQkHnbawvnvpgWHzaaR77KRa39WfT",
  "key25": "58fZ7KhVCh7q36ug8R6ND8NFE6mmxG6a9TNvZmmPSWecVXUn7P52DAJWBizFGHxecdgEJS1HiCbDD3gRkZCyQvwX",
  "key26": "HZT8RNExGZJd1J1VJTSPTJTecm1sEn2EtEi4yhhCxvTWPrfrbBp5BGDUqCzyj7v98nPHaDFfQoAoHKiy9KLPNpw",
  "key27": "2f5owUeCD4G6CSQ4h83bh2GN9bCub3jQcikS6iwCX5RfETn2hCJXAzTWVwfnJXiB74pDhZyXobKARAGUXXwzPvVm"
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
