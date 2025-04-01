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
    "2EFbM7DuyqNL1N63CGb4m55DrefB4ece5taDzQY6sVyiDokQzfwQxTQ4gLhq8LsRU9iDvPPkn7oRhADVHnhrqA7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gWNMkYfQsLkNMbBVVa3doB3RAXpAqFQxDgCt1HPR2EVs1sxkRAz5epXCQSS4iwBofQhThrsPzUSwH5EjryC6BzP",
  "key1": "5eSsSB4rc9Q6QCpwE3FPMnrHkxjhjQUVDF4WNWTBEaNBi32Q5yqSSJdU3R3aKDVkJjnx1y72bWYxkah9ccXLnWyy",
  "key2": "5CU3ugCGFNFXyNc6jfM9pFythkVv4B7J1bKdsKmL9TSY7jn21xQEq143hMDdKc1wxyFBbVy9zdqWpcaGGqKZqiJ7",
  "key3": "yDXc2qehmWd9oP7Yi1zDNS5LrE1RpU9jbnMd3JoNZ53RQ3i1ferW1vUxsBPPdDokgEfrLU7EVYyxDMjS1uCn9T4",
  "key4": "5wmJL3xqQkc3wKC1J6NY79vCqf3V83ixpTU6MNTiFQYR7djCByDCU2rt5NxJSVSbdEqEPgkHgg1p2m9F3Jumfxkq",
  "key5": "2DBpocVBjE8bDXt3cAdYN1LUDuZ9tZQw12RdH73KDyKoyx2zYYrYzeiDkiFAwaeJyKYwrCbTN8QmG8rmqhrVG5Vb",
  "key6": "3mDdzwnTA9iQbG4XNzYnqTeLnqCHQa6AksLMJERuBATZRPoB4eiBtKBi3bP9Pnphxd5Fcuk4fonfeGjpfiMbQS1p",
  "key7": "2JBnMNj1Df1D6j2A6fqRF2R38tZ5rQC9MVGLfz1ttJSmWvLsai8PzyxSieAJyh5EvoBGjpiA4CPFtaq8TTcApjhb",
  "key8": "4tdVsCdE4JzKFR2pTWy6aGo2Ke1gmk51q5zNoqT5Auh8Y7T8Y1UsLgfHrvXJABRfexR4hW52AFLMtsGdbwDxBbTg",
  "key9": "2R7EVd8WS1tiGdCAWHCTSzE46pxdpbyndcBf7sgJKBN5eey3agHGyQ2z2X7nH2mE7gZuw5UwRaHJMmpVfMZRBthf",
  "key10": "64WkcncHYBaTNotQbyQhimD1gmvVcXyD2gqrDCHX39iptdsbPm3HJVTR5Yq6APiMab4X3ZzR8bKYBrgX36suFAzj",
  "key11": "3HRrGjeohx24NJqVxab1wY5GLheBcVCbUUDCtqMbboEeTUekovBdiU4nVS3WUheEsNeqprsLRKY5UtCYyB3CTt5X",
  "key12": "2uM8eUQYWKXwTEDzmLkaWPPVeuYARn6y4iCoyxrXG3rFjyDN2pCQromgRfkYH1FgdmS6ZWhjfUaMWiBVTWgivWkp",
  "key13": "5D6DgNDSVGUrYFuRjxZ2BTuhPF3mtboqRWFr1aSb5AQxtdDwMXvEB3AAjoFjrJ55duMRhy8qCCCSkZHiUzKbXyx2",
  "key14": "4B6QfdvCatScwWy67DSBx3TbELcCtrDovvQ13qo2qgisc8Cjk4LeUi43VnXQ4w9S5QbZcYr6ZA46SDrjTq9yLFbk",
  "key15": "5QpXnoyd4g5jPVnkuNZvx4Q2oR8GuNYCWrdMtnVSqxXNp33UdgoFtBTQLr7ZhK3U7dDxXGFaCPiL5SDLjLQmfQbv",
  "key16": "2ewAToGtdYjQPKvb6oASd5wKzfT9m3cY9rGey2FoHBbYP8tZusEC55jvo2dh1qp5nADnYwAbKVYftqSvB8X2EiTc",
  "key17": "3JoaiDAHQvuQkcsNrzXEw9ewqyLgKYXvs11rx5eZ495vgDM21iUeikakgrV8nGxyKNYFbnnyVKj2pLCPb4P2nh8H",
  "key18": "CLoqBBsAMTYtGrX3c2QBQxBdhi6WEojKP36hARoLXsownX8n8Fxk82YrQUEJBCNy1waAidoAVgNNfrwjBXuKjMN",
  "key19": "3noPct8yvwZEzvuD3ro2ihaUaNBTqzhHC42AL5FBJE6hyVhQA6QbdwM9y68nt2TxbE66hfeVQwX31wWxqx72taLZ",
  "key20": "N6Za6KZBKdtEUNtz4z4aqPPuVfRi4LQLkc228wjZpDKgFUrr5BAEkXCYJtyvpUtEoyJzXfQk1xKkzxyVKyoUfry",
  "key21": "53BixnQLsFKQzFzGq2zKsgtZ7PrNs6TFMeLMNkct7ohN6ozKhqZW4cqqEkk8kKVEwLvkrcUH3L4ZY6SCbdNM4kNN",
  "key22": "4kjb4H7CuDNEqm6drKmY8udFnJ6SSRGHczHBP1bzQwamsTJs5oVzSoctu48TB8iabJcVz816GH5mRBFij633aLGn",
  "key23": "5KMpRaNsA3Fy7RvSKa6vuP7GYrQs9Uhc4q6KosZHBAqiWYWUv97CJSMGBeoMbgn64iynNTGc1o1cZ5Bv9HmDfnfF",
  "key24": "4jweSUqxZDMCSzAdWXUuFzdZLUnN7rFKF9yhh3uoWRKsqeJHpoo9BEaKMBzbdneQiz21hpTHkak1rFk5ih77Zeyz",
  "key25": "uycuayezDcf5jH2cw2WSKfDyUXYvxKj6Zg8Vg9GS37GeR5WePzdJBj7Dv4wtLNu5RihtSFfCmsj1GDz7uN8FwUq",
  "key26": "4Yu3aZZsy9WRHSKVxJLqqA9KVw4xbNbnnavVr9aTnVSEzdRF2XyVDjRfdwp4qdWo2hYGqDfrviyHtEWniDPGfZ4j",
  "key27": "3wRgjfkYvJqAwrw88CU5nLVFRnWqDcBmrTBNMvJfqENTTBjet2JNZrsJ2ZKoCuGg6EH2ZF78YKwXoR5uoSsDqoz6",
  "key28": "5a65wQ8KCxx7QTqvREAMWcveUf5KoweQsA54JuqwfVVsdAzX9baQqUA5Mc57KpDsGSX84PPF6AZPL3UCoARnG2Mo",
  "key29": "4Ft3sCjGswNJVqR3gua8uoa1STYW5LGrskth2LNKEh6fN9rwnAYacPFuaYvwV1U2LMDXg1ybecgrPQX4VkUni8q2",
  "key30": "322oKMfusAVS6KQ94Lf9DKkUnkpH98nefVaNr2TYcyjMUW9NbPKfhkSMqXjXDcKJ5KkixQtJHYaqCLnnfeym15xc",
  "key31": "4B4Cy8zdQ9UP5eMs8F5SEq43AaVBXFbeaspmDSnWm6DVRcP9SRbJDFT2WJgcyD5T8xga9Nuv8qoVw3DcZnqqaFDe",
  "key32": "22ucV8WEZKo5xWPhMuH1wKCBLF1E8NA8V2L2JYefbSkN6nwddsv2bNd8heZnrzg6CmGBkqD548bup2bs7FsBKsXW",
  "key33": "3Yzq7iWiG9cMaENneNjWpueJkpZ6unELkmcCVJgJ64B5ViiWxM4hbb3cobFevxpQ19MXckV1V8mcChMVoSwSnAD1",
  "key34": "DajEha3Y8H4ekrXoqG5Gm4UGaqEAdPYQL3zWzVmuTaZYy2qfUJLHcvLieESHUMkZjPTAhNbZMf4hPuqQcr7NXhJ",
  "key35": "5DnWJEerV4VCnkc3qdFYunqPUcN6QqpHdVxFczQyZriKi3GyWB4YUQNXPRbig9Hizz5MqQUnWj7f26BcozqZJxxm"
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
