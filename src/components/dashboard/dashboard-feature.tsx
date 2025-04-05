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
    "2zesb7CZALC2D6jHepJijUx78GjE9B2k3g59ckvypGor4gaRGKzdu7LtsMAiYJxDRKPEvHxaPwoFJDiSmQDkqyeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZmWnKN9ya4FDCL2zK95WTGgvmM8fA27rdUJsVCE8WvusRV9RTat5BuBWZrYebAzUoQTQR5af9CY8hUaKBbgjxRP",
  "key1": "3easRgYXdzNzL2vGvZxacMcJfMJqN2mzTkANdQvBgRaqkPuAcZCxxzjviqmrBazaXW9mzxBVUCvz5pw3mQa3YHBt",
  "key2": "2dy9Tc4FzCHfRSEyDnwZa7S2NYQu8EvAexJXg3Mv12ACwBrn38LcDCYHXaZPPAn3unYHrUiGtotxz3fzn3CBoLPf",
  "key3": "2beGx2FuJ8MpdakUV7aM5sWFzyKr3A2r6cXaBRNf387ee3PcAPy7ei46NfeSJnwdEs24KpqeaDhdP263SRt7faKH",
  "key4": "47mvja8175SgZTAigvV5s2PPcpYKwNyWucNvZBgibWKvjpHsrPJr3GecNPSYbNBVaguqZzqBrCC68NDmx2kfHpcs",
  "key5": "Y1Dd1jtcSZ2z3xb4n8MCqCx2ri8mivXMngkhsKNPMcDbTHNg9G3JRayydRQgZcQqheb59TvysQyZBVCtxJZRurr",
  "key6": "2okhcSXcstF5fq35MbFs9euSu2T8fxFT7rzsRoxWRK87KxbUU8FUnaAseJbANTdQ7JoxgZbotNe5PGsvstn8YvaZ",
  "key7": "3iqyuYQ59MXxsSyB7baMKZprAfamGWrmUHWmt7ipe1viZWmTEe6GKLU6ET8cabAf95j3o6WXRZnt6HjJgV6TAUMY",
  "key8": "LGfNK2iCwjFLzr37k74diKsBTna4hdkYc6GbZ89iBDdXQFJMShW4fDMzf2QaeXrt4hmJENvKwqZJfdhf8U51frX",
  "key9": "fF19Xvd1zy2aUQKQbn5YsNnR9VodNLZUrH2gRzufcrA3cZReNK3P7yhmFxgDFAvyZZFqhziWmk1DcgBLhhxjRNg",
  "key10": "32FgpjMHvh8Gw1FRkEBxyiMB5MKwqCTRaoVv17mwYMpvs44k6BmwDywfQN1bnLQaeTWBcGnVkqxFwYVGLBbjbngw",
  "key11": "31KgV6gKQd2yC6a5b3SsGVvnNvMJsyMwNKGFGcXkgF8AA71D4aybGvQ9mVSBg7bf2f6H6QGXSJZ6wUYpmtCgwsoc",
  "key12": "5kfo7auByqCgNnLDZyD1sb3qjDrVStLK5Zxn2wx4LRfUJ7d9UdvmyG1RWyFaeE3qYnkPAr56Ss9VrxPDAVuHtN4p",
  "key13": "4F5qbKQXgJvBEnbm2dwHSRWzzqq8rJMEen8WHeFozcJtfkVmHoauiooj8DvqUum6ui62nioAbS2J8NtSztHmRSXu",
  "key14": "39tD8onboK7YCbt9MVmiQnB8MrjrSTtSmhhCSAjKFmctMRgxbkRMho4EZzznH9MFUrFRqpiaaLCPPgwPjzxeV34",
  "key15": "5SHinxuZ15bqxhHddsGNCmV9RzKCAMW6K3omC2XzACpDwg5D9kBU6yxZU6iknErMN2mF3Hv3PQLxtBPWAQG2GVB5",
  "key16": "3y5vctk361zopg8VaXTq4RedBTEkLRnN9YuV7iN3tzBkAauJLLZhUmsnd4WRF8jm3xp7ugzvbtby6zPEuQzRXqya",
  "key17": "2C6r6dxBpmFcKKFcAdCkhSE3GCMiPZbzCrc4rA9qYvA4Byo9jPHUQpRshLGJLSzd8DbpbbRKu1C2Y5tjugTnYDsD",
  "key18": "caqfbqkP261aV7tmCTTvgohETnAZhy2n7JUuCRVv3sVAakBLocKonH6kix11YrBtdCoc7pF6sbfkppzK1d3NKXZ",
  "key19": "6dg6ZiW48jivS6NMTqLJXcrNxQZSNsHUnatwQ3651KFUKRXUqq3UrvnwxuQpBdkTTdketvqGKypWQ7V59x1koa6",
  "key20": "2bpjTg5mBbi4osoVKkg7pcQT1HnNHzZWsouWkUsCz7ZK5isNaGT7g9HtETsHW9i6uMwMg8gh6fEmYNnPvaR6NTQv",
  "key21": "STTADewuu8FEvuwyKUCvjTtg78iKut4v7ouZoLgN9ZWyABg5A8a7eesZh13LwzSiTRssmF9jEyY9uWMfDhwapTv",
  "key22": "3NkrXK9UHTeBeh68cYgFwiQUj9ZwqHxQe3B9GijVYTgUX63xo7kobSXAUQFsSyubnZ9tV6GNWpoP39KPpgAdXbhA",
  "key23": "3Aod2Qce6WAnr3m2c5zufGah3wpTAwi3FKn6Zggv3BnDJo6drRwbd2bRo4TbR5AZeoRejo5CzcDREkAEFq3bTXiD",
  "key24": "T1vdQY7e6uCQcfgyzcqRbWAer7JuRE2oH782V1TNrgDyefFJ9raZXfeAs7CpMoGcQXJCrzJaw6HBQVzYu8AthrP",
  "key25": "4PG1aMt86ww4psWaDht9s4Hk7g7yEHkSon69WAuoZWEqLU7ppkbU8dPjgixzokkALnfC5VvyvrfPguywhpCpSBVH",
  "key26": "atsLwNFut7FTkNTAdxiJsHuEXWAWGsnmTs2PMv5nr6qvj3YbGFqvxWKF5o62RTXWtz4QvZNLRETpHu3ayiSzK2B"
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
