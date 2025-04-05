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
    "3pXXL3fCLcS4kXdr4GNAGsachwg4coy47FujvASjg3THpEtcDV52G8JRi1M8ytwNsoKcWJcjFissZj65a7vTFyUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cSeaaVeTo9tmzPq5D9tG2f3BnvoSx1j5BY6Gh2MkSDz4XPmqCFXRxfc8fXdMzqddLTSUuWgqegvZSxZKq72hnd9",
  "key1": "VAAFxF1WMAcdaWQGTJ2GvMuii1pXhP5JDqwkNowAjR7UhRFzeqE8ypMiDfdqFzSTHxL4RDUNTR3339uLvuq8ZWe",
  "key2": "5JGTbQGo3GCpKCva9ZB9ggoxhtjL3djK9AxNAH48KuRZQ8pHDr95ZeSiDW82R8ijfpdckxUT3TSgnwrmZkmUYeSt",
  "key3": "2JiiYqTomgYSGgeUduXcCjrgBBAHwfX3mygLVLMEqqVRjyFQ8LqEhcsebvhXpHAQXivKSoK5aYuZMrHAieqWLHdU",
  "key4": "5kKHQ2wY8W1ZBkq7WAvX2jewn1kAi9XPebeDLgwibn8444f4GuU33ToY4FG5HnxKHFYhizF8UmY9kxA2UT7tNeqf",
  "key5": "53MGD6C7EFJtZbcbxQj1qgrMxxCEg19LQYrtmaod8RfRgQGM61gJUiHo8EK9AB7vT8Mexau8pTzrpmDfoZ6uKCHU",
  "key6": "4BbKR1tTvkL8nTK4kJKE7gnJzNSfCp785RYWYiGF7D53WRMABDkUbXNLTztGzS7pgfTs9SoqXpRG9Hf4JiXDygG",
  "key7": "4JYi9dNJ7ZhVZXMpedrkpCu5WuQGc883oLm96gw1hGV2RBJNaR67nqLTegHMcBTAegXQYfRSHdLYeXubj2nYeP75",
  "key8": "3fAhFqT2ffPPgQ11fDbASDQEzPLGBd4uioCgVbDd97jhQzZqhFMdpHhBt1t63WeEBWsYyqv3ryRxitAp2Z9y8J95",
  "key9": "4C1mgKM156oCMfxhSmc49MuzyWaVvs7L35QTJ23hxuGQm1rWf2DPhkuh2fZ7CoyeoBrKMTEJx3CTboTQxG6KozCb",
  "key10": "NJNW2dm3TFqhA5crYBJHhPpqam3WNw12nFfAoktK8quGUsDSajCZduZ8pGE7eG27DapuzrcWTbnuy4D8ZYSUP6w",
  "key11": "5jQtPaxv6bbDjg5WtCs1TCc5eeZvcCYMgC6pEswRPeEFiUVQXucaTGx6T4fcw726piQ3mynUc4v6Qn5k5KRUosvt",
  "key12": "5s5TTnqDJQkMUeiUs6nBSi2LTjiZp7i4PyRKJnFw2133cqrToD2WfmPrSWhQhhjkPRwS7nNZvRiQi2YE4juofiVB",
  "key13": "2r9ZCsWuarPsxJw68PVSmL5vNPARy4wiKp9dMU9qejhmJgBk2NpX5gAdUjbDSbHkkuVrSHx3Am6wbEqhS8U85Kkq",
  "key14": "4joWDA9h4DfB5enCpTHTwwL37YTLX8Tf5GSEn16kMchyMrErTsNkFB2KnKx68zTZGXZCYZxZhGmPNzNT2nWxx3Bu",
  "key15": "MDtvQ16tgMpeGE66mxWXsW5rmevR1gioHqS8dR2sUCu31bvUeF7DTESWmH988gFh3jwwqWf6RGhmxSfoZMSs7jW",
  "key16": "XtQrkYJV8W82ARXWB67PuMQcsnMiVNK45dxCo23MxQyeLNHi74vqFVcsKg1sw3Ee8T6VK63VJ8MpcPBVyZ7tYvv",
  "key17": "2edztA5jKPEPqw6pyxtbXjHcKZz3nsHATkDc6j5pkjWfSkNvmrztsmguXTGJ6Ma6GDGgr8WDrEBZv2Pig3Ecd59h",
  "key18": "2MypsPYDrw2ZDGnxhRHmFNQJ2jcuJJbh2t7kLKLBDVhhTSH6Nk8jhYuHjrwcQtJPhYLhuBnh5Gj8zpBz8hwEqcsr",
  "key19": "WNbqM24z39dU5TpNnUwgdXPSWaULkxaYXTm6yyfJSWekPvW6xzaH6rksiiJKxqW81LGQ6HXzBKhMhKQ7L78C29b",
  "key20": "2eDv63i8Miu885VNggzecBqQ3UPHnvEz2mPJ3UzJDSZKaFk9rXv5VsVoBvFpct2K25GzRzctaRsa9oRoLtT1Vjuc",
  "key21": "4rZVYsQK1gyFACP6d2DNCJePwGSJf49KrZKREUjCnJgJckYovmD8ehBaG3L6tCAvKtRF8RDTgyfRPYxBmgXZuFdX",
  "key22": "51uidRBGV95z7kCP2BvycHKTuD8NAHfrjXCNXXNE9LTrMDZxL1U3X91vymkGzcVUuYhu3hWeQy3pG3EWEL3wkkF8",
  "key23": "5z2PpFK3rfFSAwkeMbSWuxfNWgkSkNigAT83SNxWNVvfdjGARxh6PVn9dwSpLDsLiQBqwzZ58twn7GhHy1rkKiTT",
  "key24": "5By14fmVxuDQASeuRHLFhZ5jca3HWDaKNFr3nkjVBCwDA9drBsYUo6UUiGkduRD98kwGgC9X9hR8DvjpA8s5QkKv",
  "key25": "nZ9W2injNg8dteWGXDTS5yFRuRVm9mttKKqZBqpPwg4RcrCrFQ6qXMPQ4hNpGWfnoSXDuFK9eVnN5hE7Nkf6YaT",
  "key26": "v7WAAaBqrweDVyLEY9f3crNZFHPPb8kpEFg2qQrQBBDwsKzGJUGX6yBkvMJBY2qNsKtFwwh3UW7cN543UVFZcKV",
  "key27": "4nNszWmUj1sg1f4dzjerPJGecNymc4D3Ce983sVKwBHgqVP4rsYcAzgDeV5sjERuLFEjMrDVu4x81iCQY21mRyrM"
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
