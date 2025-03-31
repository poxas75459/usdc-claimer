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
    "4cFqdhhFRqVF6X1gt8kBTs8xUUTRgEib9G8oLQe6yZGZ8HEjsFV4bbANcJwe11YEiHYspF9pcPGz1hKj3TBSJhMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CaQ6gAqm2guY7LbLsVXueFRYnGYKN4mZ7PXxqUoYFijYeBUxC1Ga2Bf4Pcgao3t1fQoNdQCBupw5qksBdyQpAdh",
  "key1": "3o5Fk23oVdkL5wz1Jptfw1BebPFCNLDF6BdocH455XcqLHQVqjPahnA34Q5rdHnhYpFfEm5CKSGLMquFCzDe67iu",
  "key2": "3LXufwxqxHepSzn5QviFgjhj4fnKihx5Y4jhVJqAa8YskxA8AuPFDWXM3jhQ2sq3N2z3csuKs1Pjdf9tfU2W1aJx",
  "key3": "b8um23x7dF3kLiGraLeFXr3vo8491xHzdhLMXGQ3AQjmsgBcRM7DpHXhJMRdTA6yGBD1KA5miZRYzmCixFnyqQ1",
  "key4": "52N8f7P6CKTwQgYh4z9NwueETDA18BK8spuHeraEGc6g5zn8E7nYEL4qq5PNnhZy55ReQVwvByg8mQpNSq4W1fLp",
  "key5": "2sg2hUk6fHozxtqGGQxNEpTMv9MSTyZe4fwTB3mGfzk8ZTdCgLoRMnjUkWYeLMxPqNixMpGE7PLE9xa9inwR2HsY",
  "key6": "tahpuVSpsEv7dKKHGk243Go4s1UXKBM74vLDAhkvYjtY7GHZVTdq7B2UbzRuTjKZ1niJMjWBx7j3G2dMMxkN5EV",
  "key7": "4BQrsXZBiNjXW4rkeFPgZfTupxKGcCyFcbbgEVc2VdB2bmbcNZAoh9d9P58zZShAW15FvXvN5vhWGZfsBqMifq3m",
  "key8": "2BULEhnCZp3CkSEDxz61pQpMRCq2SpxkR6a1HFRh3rsj4cZiMqGfhCux4APiFw1DCDGDbZRNunvg78c3SxuKFRag",
  "key9": "2rB79De5Jpt5BHmS9QBPMQY8abLSNcKCY4hRRYdWgmoMuQFqtKy5AmSonmp1gYeYh8wELMsNSWfFrVQ6wmaFkc1U",
  "key10": "21Du7goy1aJ7LGx88vihC97W3iAUq3BoCKYajZ8BoAEuZu3PeST2DeHghUzyNA8D5iKiLDUePjrizLxqNbvD8A2L",
  "key11": "q3jAL7A65JPSiTzRKG63pBdzNZz8K524SLYzLybSE1na13qQg77VDBy9EiYxLKHnR2cusC5f1dV1bkG7DREM7ei",
  "key12": "2aDqgBhmu31wYtaQLAWyeVpD4FmyYkvVgdFsegQRo8ehZSp5YBtRNKGtmUswsGV6HowoHQzmYVNRGMvLUvZhj6P",
  "key13": "4ArbxdsGx1MWgHsH3SvbZAF2LHZ9AAmuHL6EsKBnXU8xjB4wXTW2cwiHsFAziB2hMHp8eQC4QeYn4KEqfwpnmBSn",
  "key14": "5bCq7pXYZqimsbEpGBuWbji5SGQNiNCi8wYyJvr1qopW41UqKTKfxw7e95X1pBGi4MNnNdyoeyK5CuW5CZv69W2W",
  "key15": "5iKGa8cGc9zy46wi5WxXS9RXJNj1YCEbjWjyx62aL1tDiyVhPqbEwqtK7S7Ftk4AZv2bosPKsrv8qnuSUPzNuCSz",
  "key16": "5ss8VAHNf5MpnFAaE9TthYWmCpowSAW7gRxuYVgu2FeTCSjpWpzg7CVzfN5aKTZDefr36xikDzmA35PBoYEwbuQv",
  "key17": "5ESPSWsrwt27QgaYcwUm9FX52ouuPetYK2xJmh6Lhud3nR7nRtxh5E4eZJVbkYuWcDVLwgxEy9dZAxpWXzLnVLma",
  "key18": "2fYLrbnJEnQoyt6AuiQepe5VARjvTq9LWBKCn9fNdatL7FpzEhyb5Mw5vszMy5WsczKi3fuSi2XfEw5igdc3uABn",
  "key19": "328X8QJuwhWBWk78xDnScMyqTKM3LNTpWaE9tf4TKGAG3pqu5iuS97k5Ai59KzH7hSfGem1BbRhSnSUdMuZa1xzp",
  "key20": "2htdc9sFeR1yB3efrhmv9PinhRNbCK58c13546iVXwpWnxYt5HESqDUNYkXvd3a4m9FkGz3UABrHRoCr9pdsek8N",
  "key21": "4pMaSfo8goRs1XSUtJ1QC3VkuDBSnJqq8hbNbUDxngNN2ENoGq5j99JXZZJ9ruQXdVbJQvMDVcJwUjFXqxFsipmE",
  "key22": "4gBGaa4AFkvdwGM3zGkF3we3BmxKk1FeDYJC5m3i5ScJfUarWV8QMyQtU4LsgBNzt211pSZhrTwrAL33AgdsWV63",
  "key23": "2kChNMJee1VeZyNFL2NsYiovBHJrDp69W66B3zD9bfJTXfwW9rbstJXu6t1jRq18Rfy1DfdoEZ7NBwbTc8Vt5aSP",
  "key24": "HdAvRVjswaTGTLRpajbwGDFXMfhaiMrQknLHkq5ZVCeKy7o355CRuqVyzeVEa5KSSccfz5p2Yw2Z1e88XNxUFdX",
  "key25": "4TfFcZjcqpEjnWqg49WW2ib1dvkWcug3bSEnrYFd3Lhh7ELnhJSwamswmYShm6kamAYsHsoyT7ViGuBXyVBp2Stg",
  "key26": "5A17gmBN9sETqx2ywsLr4mfK8YeTYf2pDyovFa9JDQR9xp9N39HEbZQQ3c95QzsJzYX3sTEHQWnxDpuka3uRwX5k",
  "key27": "CEsDbcVG55eVkfRxnH9JjVWCKjwDj6945dapbc4ggGexWKMXbZNKnr22noCWKzXwizJwCrjmgsdWET9WvLwCEsj",
  "key28": "3DrEYVx7X5M82hDHBDSRfmwG2F5eTLW2XkuomifH8fGAreZxGPcgAeJkg8xQN9cFLbuQLGG2cCEExJNyCuDRhs5d",
  "key29": "5txLSvCXH4K4azeDDdqoyb7dTSngkwNspnqc2TdukkbxNXcsLTEWENinjNQd3W1G6Fw2jkv2sypw6rWt647GYCRD",
  "key30": "3YHfebK6QetToTYR8xziNsFGkTd3Fd7EFdTToNGHgPTMtWX3RomaLx2DNWChWedPfX2x7TY75MN2od5UqVWgcaAx",
  "key31": "2d4k6iEX4PB5TxnbPPwKxArThvaZMXMQuEePtYsUwtFzTVVDakfV2LWxtij8kt2MbbVb6GYBmbGcUMRJTBN2q37B"
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
