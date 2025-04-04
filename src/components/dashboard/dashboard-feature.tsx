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
    "5waUZKKYuUxhYz4FHxrhHQ7jjpjsudZb93DWEcr6Xc83EZJwC4M3iuLisiscwYppssYK1WeNt38KbjxkZgpw3qZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MrSpTyyaVxyJh9bAyUzsgKhCojt1WdXYuht4hjpHa9YLD276uTDJbiRgXuzJfM9WnaUTaqgLTZLYVdMU1TsTjkn",
  "key1": "4EQd9EVEBTEJQed28d8iBY4Gn7NhUXkHyunqjdfNrUxEti8i7RRy4dfSsATYAQurX7cPxNnY9wb71LpyUu8fBkdX",
  "key2": "5VwyCsnW2RxWgETVZtcHc7y1u3gR3JQA4TAHKaRxRQhB6Qb4qTMCqw6qRA1MJyz1WVgyUPZz5YEt4k6agQ7kxRKD",
  "key3": "3AoJ7Fed15dGzXmmZ7LGuPsX8jfihFVXa2BeceKcqTmEH38Vjty6F2mrA9ARB4V4hHzwg6VhVXVfq1a6UQ3xF5da",
  "key4": "5X94Z1SQt1DTzNfxoPZH3RqWyDwvbVXz4hZzBbJHdpQuyeYZvnN9qK718QXnnnafxp2YtGR49zXsQqigzpBCo7e3",
  "key5": "3mVmYDkfxRpq1zHM7PQC3MD4HxTAi31jsAv86KXNotBCppK4enmxbMvavCie9h5pqw5oi9zj7UEXbJMgAGdb7hy2",
  "key6": "63YmnRPD1foSCrRWzw71AmUDcjJFDgy4AfjM1XMkZhbWfRbTvv9iSTydtxzRXDseBsvxoEjjXcRcDDKAcRQsHpij",
  "key7": "5D5Nm2wyHAWZquNxyh8HHkZeAiwLWrBH38pZRCjjZBTV3qNVkYZPp4JvESGUucdJ8zbxv9Zc2wZJymxis38gV9yZ",
  "key8": "vdF5p85dJV33rbfxBpc1ffUFPDPHidxz5WRped7u6U1KRXyvKzNRHhMMk4EfJFmUDtUnsgjRn46JDJhgz8pRby5",
  "key9": "3J7BAQu38thug2rSiGSBM9akJQffzPc2BPMCWR9RZy5D2NZuHiTJ22aB6GHaaoPKqXV4B8bxexgd1r9XUYA6wqjo",
  "key10": "3h6PEd662sSaByawmXZ3KTRjNzowFBmTQEDw2XLaXAo3KL9AXnz2qcyZUoMWTnncpXLSpUFTpabyx9avykWRvupB",
  "key11": "4eqhLbRiUt9i7PZMPVXh4cWvufxnvur9ynpB5juTP68LrEQx8DdekayfWpY35xVMRtDWkohB7Z5YAVEZ2EEHZeov",
  "key12": "42YrKVnjf4F6USd4yHt4T2bsfewUookgVsMcLwZtrK4SEiYoumDkCoEC2Q7p8gm7UeqLCSDYrApjBu5xBWA3q8pc",
  "key13": "cPAE2rh6bWFX1GDtdrLeEq4nHUpJ3Cs2MvxwscAMwraBRsjMNizkjHiSf7pEJEcVrHy4NA7GodVjBGFGm94pAj7",
  "key14": "KgqTn3wxms3pLupyFZtxQykLebr1RGjH4fgij9M8GQbebPBr4GjaS4CxS4FkvwjYQuj8NhdrcVmGRARAXT1Jj8x",
  "key15": "2h1sfJarN7hTZdTfq2r3fdhDWKTbW7WxPCPkFPFj8VAv9j5RcyZzYActcL7VLHSKRv7VR8LTWZP189VjFQA6vGM9",
  "key16": "2zJvgEzxUx4QeaU36eMtoAoVNfbRDjnep9o9FRPjFk6c8nn6b56jasQYtZGGZNYQXoEYRbsvggtwjWojUC1KyrMx",
  "key17": "3gcZPBf1P7B3HwVweyimX5CD5gsuduhKiQ5NGwveiws5SUnTvBnyUjnQsu24Za1rbqEqgnw3E1jYU4NC5HAPn5Aj",
  "key18": "3VdEhYetX137MqYj8rWK1RYtBRXuRxoJNemwEUKmXgCNkrEWL1BTW9QMgqtJG7qRZxvjngxzcCfpKgTnEFwz6AZQ",
  "key19": "4omi8m7muX7KkdKmxqhjFubRj7kxFBz2bNFC1ELMicDZkkgrYKUQMUaHihuRRjyhjS6VgpjshFCbpaTQdB4aoLYF",
  "key20": "4iSGhtowFpsuLMCzpwTRArnAx4j2vkfmiFGWaXDjWqKhT5YqCKxNvhzSDthDHc6VxBc7vqwaL2o85xEuMDnnWAjN",
  "key21": "dxaJaq3qx3qK5bhQAG9dmjt6UsAAz7oxPqdYesjfC2P3uXzDZTDgWkEJJ2jWMsz2okJQRCB7VczNCMLwccB6NQe",
  "key22": "2cMYCNbjTxhjkC9KSDvyARcG13uUj5PuQE2PvKQAytKGwHAKciQEMf5TiS6wFEykYxTc1RzKRpiBtjkpeqgrmKzR",
  "key23": "5KPBspDhoBxtrqNNz5yWfkg7a21zv6fakxQBmKRT7zNLx6vx3Pn96m2N7JjSHHyqvZTqbypzZ4rPAcRmpmLjHpaG",
  "key24": "5jw2p5TSmfSmihZhVEobd4Jkp7qpVurUb32cm6mCVNRsMksEoxexrnTrpCNLQHeF7oA7RC6TM2sesAJHzkRaEDP5",
  "key25": "4Gjt2qBZAEzAapdf3BErrjtUofXmKeSJ8SnTQaHQFmidqimdTcj121mfHeD4Y5Yx5F2vovPjXSsRW4y9PonZC81B",
  "key26": "qqHWw454MRXWgwg71sPiyRP6G8GrTZusr7kzNgwjxpzsNRWwgtN3UDbTXGwwqA5x5aJMkyMLVfmi1dYNfw3Y1cY",
  "key27": "4A1LGgvd1CUGoDViNqvVzuBEtfDkm2K4VbywbcBnrwFQ2TUZeLSfyhPsviYGxCjJSJQTGoy1ksuRxfN4JvN4h2wC",
  "key28": "2JcU7oxJ2jCs9FYkEsMaD6BYvYFMezYLDxisKUvTtAYjfX4KSZEw5xRGwqdbALYYNgkwEia9ZCW6Swq3TL3NML5Y",
  "key29": "r6yejtc3u8iCq8Sswup8MkKe1WZsY2KbvHswVQ5yVmA1qcM6GM27tLwVs7ypVPastbeFKTCb5qZhCaC1xwC5e3Z",
  "key30": "5sjHJDZ5xzkeTrzKw21Y8rGYmtmfzkJphtAmigcat5H9uGrVnXkLZ8KLJUkVuwqnGMuDTYEFKZCACKPALeuH48Sd",
  "key31": "2V22UjNF2eUfiHxebSqErJSJnTV2odFvRKEcxiA8c5X35jASosxpxw4kDz88jJBYGsmLv6LYU8Z7HmpDxh78jyCn",
  "key32": "64N8QMNfEBKwU7SRQzMdVvD626SJbGxUMGgdkRmhPY5Fqb3xTLoZnscYafBVKzkf7Xt7dP9XVnWRJ56Krc9ro3QS",
  "key33": "L9cyuxGU4ia2ucmjCHRGKuhJwGcjesBgoBUTmpgjEa6LSSYHFEYihjBWAC1gf8vnjjVMyGCBnLyLSmwYe8oyYpA",
  "key34": "287h4Ddh3LjvReUiaorYRhbz4WZVpgC8ZGgGpgx4HkTXw6PTKdjkv8LbJ6czZNKHVEKpXjLNnGZFUKdk7zXVSuXs",
  "key35": "2qE69CHGi7XdZbXZDE2rMrHTuDYzBiJYkW7SREXMNRC89EHLKQ7NYnV16Am4XffcjWfFNgncCH9MdegNGfuPuZhf",
  "key36": "4vazPz1GrVwsjLzShpKmQmvn3vB2pVqoLjCFRdoda7JAJ7rTeAz9cYKtU9DpZVPPxk2hWQp8Ygu7BqZAByZeuBkQ",
  "key37": "3X73VvSymmWEFBjP4eDJ6B32knNZ66LL5LESfAysuiQ8rANsBtbHNdYwv9Kv3YbKzxPuQu4fE4WvZdnJhnJd4RF3",
  "key38": "3E2UvvUwnYRjkK4mRWp2VtGqN8q189fB8L2hYNFugX4AC8g3LnpYq8G9KbM7wuYFfVME2J2G2pCLVWSM4UyLLWY5",
  "key39": "3yvNDfhJf1NmgbUxvG4WHBLDNNZ1iCXc2JJJXzrXvNdNw4u8KUCoQciH9vYoBoHcmvNMfRjJhEC6ZUyh6yxUhRSL"
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
