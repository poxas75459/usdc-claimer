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
    "4RALASTxemKBDSeHuMpsmnYBGvotBsb7zyRPC6FDW7JyyzLx6Mw1kAfX761NabNY33b1i8JLa16Ww52t5gjYV6K6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k6JznNPxkKkbYFqZrQ4gvebMUR3RpsaVAB8QgBgvCRLsbgnSvh8GA2qQ7BNcoquzJV7FyHn87VZ6vAoEFpasuW9",
  "key1": "46KHHHFyAtiE7dGr7hM9XJfA5bTCb62wkJd1ey5aGt7cSAbwD636jS7KNMjNw238crTz6YGqnA4afMyVAHqUmC1b",
  "key2": "YVExqJjzyUtAHD8b1zczweAESFWQRDELNEZh2Yy9RjTCSyj4sR4cC3BdZK9UZM43QGMAHLp2TSDYGwegiPEH34h",
  "key3": "3LHFBTuy2jBdJ8kUn7upPGckkrgznz3gESxSqeVPs3E9SMCtxUBBjfQoE39irunjGP6kpxfZz7XDcF4bK4veW21h",
  "key4": "4ELr8PRVUAn5tA21gDyu1RzmybJxCUb4jdAC7BbJxrP2Bt2dTbRpn8BxeMyRjeM22TUExsgZCi2MSbKwwsdDNv8x",
  "key5": "2UqyJwpQJuHUQJ8CHep99pm7t5XHFFKXeMww45fP9jGzdsVsXtwEjprQcKpkRfYC115bRVnYxP3aAZX46K7y4Yg3",
  "key6": "4PwcePx2dsmocdTABMACWxRJmeEXkEYVbF5Nh1Tw5Hvi8Aq93sqrmvuJ8xmGWumXERHDzCenqX6a18Pb2vWHvANw",
  "key7": "3UuX8wMW79PKGoRzbvD6A75yitUSk678thqV8faqULNRTHeoyxYSNyvdA5mEFbyEp7erpQDgACFsM2tGfhZ7qfxS",
  "key8": "NtVJvKUz5PmFMtWa2JZ24mfGVJYCP7jph3etmYLD4W3dU8seXpptuGgb9YMVSx6qnfFRnkGs5viTHnRxwYM7W7T",
  "key9": "2cUmZC52WU7vnQdjmrSiMWbWqVY9hDbFNNnKrkBz37uZ4RZUKvFjUJh7nLxZtw41QrqN41ravMvfHrVLhwoV1cPa",
  "key10": "5TfeS7HB1gZYsuV4MHm6mJf79JmMyrmsQhu7CETyy3iu1nvvvKgQuRjkTjvw96aoorGBPYSrq6XbdZpeY6uG3AP8",
  "key11": "5mi5F96PC4yE4AXCms1PiZxRnERs3PrHgtEb89D3aswBUi4MKFxhUaN2E3kQsX8L7gn2kCkfXydeMUC7kxEedmRW",
  "key12": "4pM1TGutzHAWe824WDX8R1tLR9UTH4xbmGQnorNHy66B28SN13BzJFrLkbTmLtL7BocGpZh2zXj874gL2NNo68ZF",
  "key13": "2XuNXYMoXpWCEQstttddskRhX2CqfHcGMZ1SjCYsnaMSfssDYighpwiquHMj1CTwKX5WvX9YHTAtvqRi2UfGvkQK",
  "key14": "54bnQmUas1kp96LDJPGZ1q1AWuKK5vKWtwEJrm1NqomiupPotG7qKK7X5bHaPyKA93vUvdno4vhiy6jtq9QFU7zi",
  "key15": "oGgr5dsTpFm3oqRaNVsdvu4RkzJp4Zix2117k8pGd1gkP6wRiTbxwXAPP9vZ8FKxDr8XGmG5oPVTdDqQgDTQYS3",
  "key16": "5CVphbZuum5weYa4uCdp9dbNXu79BoF7ZsQxGBLgU9NHbYJ1noJpfqhkKzRAvT7SzDPe5tyKpdaFUkNpGQgsfVYJ",
  "key17": "4VhuaZyNEAhZr98MCphDoDvvLJfbrru16DBhturucEFPSbcVbn8ZLB1ia14nUrUiSYhqKC18DA5eREWirSycCYiM",
  "key18": "4Bh8n1FdoM2wbrKcyxZBS7Be5doZQiA3qgjmjvg8VwbbfoVQosBNozvibmi7RL7knVzWkVw8U9CvJyAuxBqGUaG9",
  "key19": "42csjiLqaeZ8mxA5qHxjypfgYEeW3fDEfTD2pUnLXhmSo88JMG6KJH9yfvWThaLQzmP4nrcjzRPH4WGuEmEEYwqF",
  "key20": "5kTwHbQ5jBZSQuPVEb9EL1kDzj6a4p5LWzyKgjRuRmpnnXaC4z3mz8onLiP9UwdRn6UvXhBf7noordHpcATd6Lzm",
  "key21": "4wxonJ1wswbG1VwV6cLpGsxBQqunaN1iPbiXih254hssyXZ5oX8vxKaEAJPW9ytpC6CGdZ4Cv7Pd6eKcAvwqpCFC",
  "key22": "4mxrNVSZycsrWFD5VEEDtEN6ACza4yniuekJVxCWQyvMr5JE83HVXyiQUZCfRro71MvGwMk9iPT46hP4dTSqewWG",
  "key23": "5AjKtRsZa5xoo1z1tPzP7fkojsrkc8e9F9xvWDfPHx4sqXEmakjoamNRNk41FquZbCqVihbYA356Qr7wS8k64cF2",
  "key24": "2ZvydWdUBsEjfDRwVU4iR6y8Ntr5ap5JvzDpru6NqvFb6tCG4P9i2h8SRy3axsR6oh2Mr7EXkYYbBX1xmeif8FUh",
  "key25": "64rVis4dh7S8hUcxAaTGWQRtFvdLXNMpgsxmkHHEKfmxFHyA7q5WMvvnn9sTzbmZjU2SUXAMCV95jKucbkKs3reg",
  "key26": "2ctoTyVEC2qWjXkufU3Gtu3dNjrPSR7pBbVM6EC76KBrUUiANTkufSoFRTYTSWMp113GezP1E7XBTysF19cFLBWn",
  "key27": "525utvd6i4a7hLih5rYWZ5cw8DeuG7EmgyYRE8z4xEJ3RStiKAXDwT5iATxSTy5uZexnFVDokmM5cepuZTbSqha6",
  "key28": "yqKRE2Uf86PKEdHgfiUPcVvV5Dyg6Evz6MkHni2u6jYxgFNYmdrHLBiLKXu6jT9sn1SaZ1G54Ns1dFG84f87CEc",
  "key29": "4Kd3sEk8h3cdWPMJxddGS758cknErznSDod3gWqFPciD5qVraBiec2rwgNGJaPPcBApudmP1pQWJXtZkeCf6xvoe",
  "key30": "4yi7URSuXscN8LTmfRiEBY28qzBSYMkNeC7ejB2zwuBsba49CqE1sq4mfDve24VrQtqhscL4LQT7278pAUfCXcCc",
  "key31": "4FUmXfRevxFQxDnQcXtj6BZV2RFaLFVGEk86j78bog9WrsjRyT4WMidkGh5aipJU8DTWvpEAd9hPG9DdyZEUTWgX",
  "key32": "upgyKCboyRHX43Wa8RHV9ybfCAE3fbyxUJhxUfvvMQ9CCFeE4J5qLrr9v5eZo1aMbQUbxqTPm8EhUVZAj4BPBsg",
  "key33": "K3pRbfA1Lf9KDwnkymuHRbzgqxHyfpcYY3UYb5ruYPSz3Y1Rfn88ieBwup5ndRcYRbuCSQVNRguAG8TnJvtGDbz",
  "key34": "2aodmj6LgLRQ2LgDJjzxjHmoLG3ZeSB8MJzKKto74T1LhNfVo1rakPCvjfJymn2fS5rQ7ZNUySNK9AJsNVcn74Q5",
  "key35": "5jUmnZ1D5eymUxJMQD9zjuE1wLBNfJZQdU4rmLptUWTxH3TVXtYcBeYbaxyYAZgH3oGvPgU4JKCVppNDRtzfqomr",
  "key36": "oGwUMDZ3ybUnrg4McD2bpDL1hFJG2KPxVVzSJXWuffXJbLpv9ZAdYjAsbb8P8pP7qDzafr4PwGCTfSWfifF8tBT",
  "key37": "2rNUdLRGHCNJGCBgToF2zeaVbvPM9J7BEnX9hitkHAr7jG6HscxYdoJqnJTZPbZy72ZPv8TLQsHumHxGzXvCoinW",
  "key38": "3BKrAcQudakt6VLVc3v3A9mYZUkjmQ4qXbU7VeuX86zvTiLSQ47SWJnSXsUTgHL4mrVFNrwDpxbdTVJbKg6UoBgD"
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
