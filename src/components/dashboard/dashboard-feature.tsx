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
    "29mcJoJMcsPjbZe5AX4g8tqLAR76qBtwJNznku9NNiyNUe7WHJzX6qLnXLoBgq2oCEPH1NN7Fxqp8YPo4Se26SN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CLpexDosC66QD6evuoYX7zTZF74VgdFdgHEd5cdpoYicVeseTVbSxhL9SduZsNK9YUVn4V2cYUZ5gT4iZ3RFokn",
  "key1": "45u139EJbd8tzoRhAN8XgKQwpo5i5AAYppMgEpeHmDub5PtG4HgT7PFeGaQpM5KtxVuRs4QxakQU1TwUTo5xrNWf",
  "key2": "sK9pQizjKhQpciozRCvSEdA19KszqoKRpNGQi1tnDhJVAjEa7WibSJyqT4zUXwTiFaNB7k7PYPegPBvfVJQWgxK",
  "key3": "5N5A1buxMJ878apf66J5mbzkGzk1pzxBqjszyztbs971VnnEToiWueLjA1dJftztpbuagJRZAJYoxmqbhLdk1WwL",
  "key4": "2CKN127hXaCCLLdywqeJPFNTzNX6WeSousXh1WUoa9K8wSXTJej9fKqBSYuURcVo1atzNaHcrByNqYBPPjbLVngc",
  "key5": "3PAW6SbSMZkvVrbJyTip2AvLNcgLXN6vsa33iHQw3Xcb8NDhczAVbfMy2DQh2F5bzEkkKezwSxKZFK8pyqxYAAxE",
  "key6": "5Hmn4pxExVy7wAHFcqNRLTrt9vq81B4VuLxQJTCwk6MNgCAQC2upG55G31HLAZVphxSUFtP77krRbbdsFuKSEdV7",
  "key7": "4Jio9rXB4QnaehK9xPcFoduxzZvnpf7JdwS74H1gdfNkyGyFPavHSKY1uk7n8dehRUEFQxYyssVedbSwZYuimB3C",
  "key8": "5qPpz1sFCP4m2s54ojHHYfqZPM7cE7T4WrEAWzfjo7UTK2ZTVLrW7D8NDTtdA2afdpB28wbDQU7KsRmJGjPdS9iG",
  "key9": "5gzLGtPkiirjBtpvJQFsHFzX5aenrBn5Tc9gh21sBJoYvVp2KciJ5Dta2GzkTcgj9f26SoLjLxHCMfgvvaEn7zZo",
  "key10": "2vwLaBHucoEPWVzcSFKu1Zw4BCnFXTYVrvL6QLo7epigFV5v3rbWXdf1cspbN3zTSiSVfTRmi6p6nRppJJC5CqrY",
  "key11": "3KpBPgsxkixPCK7BU64pS1WqrVEzyHiJj1m96WmMPLirdyVFfr4BtYgSMiuaw4qJzCAXKZCbhgDr5A7upWKkAViu",
  "key12": "2o5MDZvwSKA3jw2XT9YfXrGyg9JT3WdPwAxYR9uywDRjCxUZ7oKLs7QpY3uxmjkBfFrEKKhhCTw5AwT6hYQLJsux",
  "key13": "5VCMRJLPY1KxHn1hqnzTsYE9M6B38atTwZgM3naEgKTzb2JPxhhwB9kpuZUeVzyHgfM5sABfLPJqqF5B998Rrpkm",
  "key14": "2NkTsUZzZcaMkio95kFqYmZxuTf3PajNUZDyEakM7V9SgPJosE5a2Dxiai4vFRss2JYfFk5JX1uCQf5u4QvzPA85",
  "key15": "4zoxSrd9X5pBKN4zqGKf5ocQpFnNpP9YmvVqRYzX3KpsP75oveSycYxsihvjPnQnUDEvwzPtkVtEvQ1ZaGpwXeW3",
  "key16": "5VEiHozQyGWzrGU1J7TSurzksVrf2FHzLbuQW7BetULFE3swUufV7eqDgx6xUAop5NrTrT9H6kRZArmuBuLTEc1D",
  "key17": "2LXuXerrWCP5jVKzsQV6fVBLF598zrtfTZZmmSFicWo1KqL3FAzZzEpFTgBvNJd8MTgLKm6TmmvZmVSKb7VGwAEP",
  "key18": "4LetEipmMwb24PwSSe9jJk2UNoPcnWijo283hmUQMCHYNsRXY4c8b4ssNiKWz1zz4Vh4iNdYW5GxTGvX8839q1bX",
  "key19": "G5vkSYjdrsCsBjxivnU96k5PgwtieQFxtmEZFpDj4ZAU2xSw79E62L363uAXH7wgeYJr9EUvc9swdbjYoYKUe7v",
  "key20": "eqeAa2wMTwrU5FAkG4d8Hq9kex95CfvQszAAuqKWEiWTuJMbwA9yjnbTkhkGSFNzGEv7iQyKDZ7MxhjsMEf45f4",
  "key21": "PuFrkNbKSWsuKNie89n8yvEkwqL4dmgF1jLwxyK2f8rgp4kphGsDLpE1ZTFNLeZEpXkpAMxbRDYNCqzc3H9tgQG",
  "key22": "5KkbXssDuqK8zds9WpKCLsgsHtPap5cPEyvr89tCD1GXrZEALCEJ95wdZAR7KvHgQtDaLF9EyJo4c5wQ9eTtDnKT",
  "key23": "5kyETG4DC4HAGtEWtYfSC5xdX6y2kcmuvxhW3ZoqLyemrq2QjkX9vRpRsQSPe2AtEoVatW8KiWfaUAa4umjrnBSn",
  "key24": "2rVbPfCNpikYCpzx2WgxbcGJijf3q4ryUUvrmC79oyD1jDjyxRjScCtvnXK73Fv8WJfHbTBaqzM7kyqvUX2e4su6",
  "key25": "Y1Wx9JW25jUVj8vTYw36fcYVmBZJwmnpF1zoL8LosvRHoPZMvajkWFn3euqAmFSTNDjNqjey5yMrZJ37yzAh38d",
  "key26": "4MNEf5nDRMxXMLggU6mcjcpBSdcZoA7jYnF1G7XeHkmsaEWJfgJhLhGfkVnByLT8yS6cQXF6efBAfqtjZRehXCjv",
  "key27": "2dCvsrYDWVZFED4vzTSfK7Pw7zDmUUZs24NVbJKr4mptSdBAHWFsbNmh3CeSPh9qGz6wHHV8iRiKRvxGjGXNYKUi",
  "key28": "4DgAnaoKJqYBezwigspvZo7BQV6pcJbkQ4QpF7hSBgPVpMEwoUwRxzUY9j4y7zDBfbdY8cn6K8Ts5ZUg4YWe6MdM",
  "key29": "4qCjDHXotEjacb4g958b4dbv84RTfBRo4AEbxGS9SZ6pH5XdV2xX9v278NZBrcJ9cLNR5Jwog5omBjQGU3rfN5TC",
  "key30": "2FbTv8jPsD4d1KAd5H9SEpide58EE2P2Tf3iTSXEcfedopFkkofxJmJR16D3xaxbBcS7ThgPbauKN1e5D2M9afRx",
  "key31": "34Gia16dWdATp7oNQSDbdyQGwNaaJyY9ccKRdpKF29wBnhsS3nSR9M157KtMb6gJjVDNkDKmmppS1V586pgKfDCU",
  "key32": "3ekyhxAkCpSpgZHDJcyr9gR9YBfQ1cS25FFuzGQ8GsZFzmUrTHx1EZMnTfTdpLnGkwqkxDnhagDsPxg3WmCkD8KK",
  "key33": "3vECpb9YKwYYmrLwqLkff2RgfNfJh2uGbJLvvjGAMiDShFiXbmerBdRWG3CQV1qSZDYN1URQyEaRtH9rcFbzf3qp"
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
