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
    "5tsc6rq5VpAh2SVNt9ivL8MfnqvGzUsd5epacBJjEBQwfEVxZhDCe3N9TKotC6yqqGqxPGZRW8q3VN7T6NiH6yrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "252mG19n9hM25qC6fcVyk4YYzAxtZJnJEfCKBJiBLhxWokPMVzYYCiQWhjex7buJyD35hFNS1r9GSPigay2yiJGJ",
  "key1": "22o7ckjF3f53cUQF9spXCdfTykx811iCXfrawW2RevaomT3XJotHXG6AXuFebSoboq6P9KgdzNjXsXmE55U4Gw9f",
  "key2": "3rjUDXvsLcD6wH4Tr3vzrXyp4mhtHMTndWjSkfRrHduyNJn26UFbmNNYfC9vSVfFRDNmZo1b9LLq7SZFYUjtd4jX",
  "key3": "3E6T9ZFYKHp8Tv2E5CWikSQ3qxBgcoYExwraKuM6jbQBqL41YzfMB6hCoaCVnLoSYfnFBcayb3sqhDBrWF7Xqm7j",
  "key4": "TbcNWwUh9VmoCu1gdD31uJ55idM9oqumw3JToRZNuSnwYPVc18wPAxAr5d9tFSbLeSvzYazjgiLvaaJuNSeSmEL",
  "key5": "3rse2jEVZnRXtyVhG5DfjXQ4SvDieYn9kKq67XrH8iKVddLgiFMShhZEQMJtUG3U7PRsgcF2HSD13pysD3cvMekU",
  "key6": "TuVcnTb6M4FSGs9bwKtBtrTyTMnL9VY4ENbW3F4uMTYc616u9AUZNBWvqMo29zd7sK37AzdKv3y1HR4xieCjXYX",
  "key7": "4pmUDTJj7pcUEfLq5LEQ2i2NKondGssQuYAhDn93Q8qy1MFfmeCoJmpprRfpnshBFXmmvp7YjPdF1cPdtT6sgUQ2",
  "key8": "2oJwiY4JQvNgd3bKjDKFbjerQ71iH5mU6sj8EheHjCMmat3ca2oGs6sAuvdH38Bu8Uhfzmsg9o2zqCK5L9iwvBVy",
  "key9": "4wh88XSUvVWkxpc8u61K33KuaHutf2cTUxD9gqRnNHS4YR97kcACYshbD4dR4WZQypjkfHhyJxno7vTVYzeHecmY",
  "key10": "4PTgSbYE1NW2moN89LBDemdXYT5baHSV6DhVXfb1SPi7MBbYMCN1pfzYwcMxBJNTMSLs8aNKv2B74uc5deb6AeP4",
  "key11": "2GFndyfcBVAr5wqgd7vSWfzbe9vtmn76qikrv72kUnH3awtQrfAR2XJfBffKgQ2Gjpp5B4qpNXmEDSBjMcCUAroL",
  "key12": "3T9hAfy256TmvMpoYZUjwBz14RTqLeZM6i1GdSfighZGY1tE72PKAuv6a3nc32Zo9yBXUQvWRsHNEwJGcCzKugMH",
  "key13": "2Y6kbkp5qegY66PAeTmQVvpLYCJWvqaYqW5w1jdrAsRpQ97jgvFB5vNTLxXypxHTJbvYLxiRGUPTs7g9ZN7r4vF2",
  "key14": "4F5xcuUbDezMewWGvcR7vjWkmaD4T1366RZKyCxTLpnVdbuD5D8kS9bUujroBMDDBit45gek8T1wf1VWFLBnRWFb",
  "key15": "27gLvg98dNADQNkRdGZCuJEKkMwdCyH5gXBND3v7m5LMJyNZM6SB5ArZm5W4it7NaKRyDbB9zpCzRreYrY91Ai6B",
  "key16": "4sjvUVg5iNeNKE3UCSTXPbycqAb7taXbdiDCcjRfM9DUvQeis5vvDnuShk4ZLmq4gsxdcXJ2WWqXe4R6FfD44D7b",
  "key17": "5TzimapPoQsUTKJY9qLw9NboXnXipUMCbspzFE1C4LuGCGaWFdLMMbvpX1uJdew9KKiFxGtqv4RUhbK2eaNEeEQ",
  "key18": "2XaM7K35DyY58VbyznyAqtgN1RNLoHjNwgi9rY9323An1PtWrRjHy83R7FMhfEYd5ZgWMyuz3Hww9b8pYWnyB5YA",
  "key19": "2XFzX7jAasDjUJ48tT29ZU1Lk9tb1fbnDAYJ2ZVupKgY1LRrRjy8eDCsHWuw7VQcEyH9RTwgY66B14SGiyHHzvcJ",
  "key20": "SVPL4ojHhgeiJ3FTcJPWcQ5GiTsu1BgTAMcXHBSuF6fsZEEwbyY261tXLwWVaL3Y7CMRG65WPpegkrXeWRks7NV",
  "key21": "q1n7GvGfc1E94mmHaLKsSWBsYsUciZiNmDKjKht6CHr23Us58mzNyYVTYYT4cRUiZMX5pGkwsvrT1XA6wKGFfmj",
  "key22": "5RasubHpawjSA4oZz1UTsPgNagwSaKz1rocS4S652kGubg9uqwvHEvoG9DrZZFHvXShxUWs7szxSfpUkJU6fo3VY",
  "key23": "4MERErDHQd4cSX8ZvMsZVcjueZ5jPiapoRKVXuAFJuf54GYnRxSNGFBLcc3fZmpG8nv6g5YhnBJY3Zc3YFr335Sq",
  "key24": "mmsc25cQYAJsGRrqxBLHxpuSBi1ro22RotrkHhoZ6AE4Wr1MDiervFWuWyawtbCci6wa7u4pdCYgR68aZDiSP4F",
  "key25": "5Juk37G7da5XaejAXvyEm6LuEjrHfxejTR7gR3yuuPFXts65qZbLAFPYBq7aynKCDnE27VupHU4zfFGKkHk56vVt",
  "key26": "2enouTQ7J1YsaHGXqq3L4jf1S96opLPHaQUQR5TSLyrQ8pVbBh3iYCqKUm1inop7NSDJ9LneDSNzJisetsuH4BnA",
  "key27": "3xPBPxC6wpUzZsftFwVx7Yt17eC3vNijvxYEZWGBRzHbBe6bGC3RYqkn2ZRRhyxpM8XbiDjXGcQMzU5JLBY1RpaJ",
  "key28": "54jQ7Lt4c9UUoBZtRwAj2f9sRytr8S8QcmuDNpaL5wxMzGtiNiGLqZTRPUGY15WcfikRhuerVzqi2Nh4cWjGxiFN",
  "key29": "rbi7qHxvKNySnPLTUMmJB7Xd5XzwvyAU1PASkfwguZX6wnupCq8Jsw5FzsKDP5Yyv8YVF21R8UBxJ1R6TNdFiMh",
  "key30": "2a9pmXGubHdYLv3m6SPMqhpQajaz3aMpgALDYpjWZ5SyL2StFCKmTtYpKBB8mzZFpPuCjYD4LMMCqhXfTqEWz2Eh",
  "key31": "2zFUpAJRXv8TD9s1YrTXZLgUvRkuWExx4CZGL8ibvgLwp2RRcba8PN44kTSXuLKMNDpUzBfNXMt7yVESh6Jfk7Xs"
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
