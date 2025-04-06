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
    "32JGDUNGXKZQWEDxuhVwBD7jvDGj442HnhXDbtdB8CwoKctyGYX67ZrZQCtagTqs25SfkMxJ8cwA5HghS5LcHGnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dVyUinoNVzaAcA8wuPeKZ51tZ6v8skifxsAiP5idsacR2zoZj5qw2NQyNwvK4XLm5bkLb5vMfiGpqPWK1GYmtxh",
  "key1": "4UHiSwQcUkkiCpoXJcks2Z9YcKo95hZBPsA853Zy1oFQMiF4yDA61SGqkTpJn3xPzUQPwW5d8wjp64ACYHiPZ8ci",
  "key2": "tNTx3TymG9dpZShvDSGPcswfQ36TR4jJq21ad9b5qL76hgzJAfnYNXTfkWRqDAuRpu4V9D4qiaEJf4mrKJZrc9V",
  "key3": "21XejV6uQUDzn7Vss3QxUmsrstZXUnBpFGKQwGTtsoaMhQ95Nt9C6pSdBc8go1chTHPrzyhNMQck8KtRuSiJwxBW",
  "key4": "5UFui6jWrLR1XJDnzrw6EPyDVdBfoJta2N7t6EyczWmUPGkzB5zwbqibiDUbtsqa13eJom5R7A1xcBQNct2SKwQK",
  "key5": "4P3o9W8nCDb52cmXFHKRiFNd2z7Pbg7DgouF71s74eYd4hCEmAPBfsUaKcNpxntpPr1kZQaKdyf6LGMfPpwgSA83",
  "key6": "ewkQyLtjHyUMGhpQDmHrTjdQaPSBaWMHdSoeFUJn9KCcm4R5D4tx6iTMAdXapWMjzGgySYD7Ju3b7cMc2c3qnHf",
  "key7": "459c37DkTrXgUcjT4U97TzWh6i6BqmLX6DXBngLi5RN6HzMrszBTLm8nw345nBNjp6hrYjGvWC1nt98FNU2is3WU",
  "key8": "mYd9wQyuXkTRMtWBed5iTFZvj1Z4iN55FFdquWQTPyZvysiMDJShk3YgFGKoTrE73EWPZgcsZPDvGRYGmuEkCB4",
  "key9": "2fveJCs42ou91k5qsJaooaW9aNA6RfrLKwXoX7u5bSGPehAbHPhSqwsN2iNEVZxATZMSVoy2uChcSddUiNoiFng4",
  "key10": "2FBxb8L1VWMgEUEorfPsZ6CewSu8qAc3nQ8fcUNAJq9KxupSTPZQXrTVyzutcWNnYoAYuuCSnnqFoX551GAWK8QU",
  "key11": "B9rRXJsagnRsNPyDfHPapRkKTeLm69WuABWdX4Z2SahpvWcwMNNkygRoUGTDA5LZX51haTf77WxpEnpbYLDkByk",
  "key12": "GzBGe4GbxVThymSfrRw4KP48Ekt6gUiT4UNERZFkmL7pDWgNHAB7uvCta2SxGPgmnhUKzspEtxbuL7M1G8FwVk5",
  "key13": "yQZXjTjdXFGLyEyKsnp2fKiytQj9vSCUeyjpYCd8S34drcvdwrFVhw2b74rWodPLaVnf1mqKfRbucgnHXnJGQNM",
  "key14": "2ggXTRDhtdcqoqDVN4QyHuno6hqKWQ8VLJQkY4TftNpxZa2cJk655nP2GcjPSuEbN9EkmwSd3JjB6fqKCQMLDyqQ",
  "key15": "4c4q4qEpoTWJiAtoFyPd3LFA9aQP7DYW9P4qhpvLdRNxAftja7rfobPrSk4RysW6g72vttbhyzPAXVLjhaqtgT3S",
  "key16": "257BU61H2yyWtnZKbgYnMUrbxNtpMtxZHKqH3TTMY9FRfLUxDY1Drwarsn4UjMkedjChWjszhDbAD8idS1DLwQhJ",
  "key17": "T1LrcAUD1kYCEgjsjpiKJ6SoLfGuJH98FcWkyH4mdfvq7k6PtUbXNAGAkpULoL5DjDyTSDoxHL3sF7hc8WrPHWH",
  "key18": "3o7ThQoC8LtfRZdniPTgDnzknvV8L96PE4QfWoQYYQMhavpGE1USXcbBRHpHEe1TPKqij4nwNmXZzUj4m61YSoQj",
  "key19": "22vpjr9Wg7Ua5eVtLV3mrsoMNgvtueNSEFo1soue3zeenKYTaXRBwF8W6LfYz5UPk7SzwUDMDdY8hvRmK91d6JSG",
  "key20": "5Cxc454SnAKJtakmFeVk4NCQQ4ETce2BxPD8oyfqzVPzM5N2xUGFs8gr5We8BBeZegyvaymQHyyLiey5gwx7vF5p",
  "key21": "4HxtazFWdQvCfey6raowUXAqFaBxVnuh3e5bP4TiX3L22znGUYPkHH4pFhZWm3tG7GnPBVcp39cBU7inDaN9su8X",
  "key22": "4ad2ZRx98PaN6sMpnFLPB3hWkg1Jcsv3aZt7TaYFYpeeAo62fmPhQ7Am9HmA7WHPcomHp7NTPmmG5n63AWJiuMde",
  "key23": "4JprS4XhjQnQvQQXPwVGPEvgEYj9o4nRTdnQuEiLXquT5V6EGKVAxBgewMXHkBSWZ4u5X17xRnnu4bZdFrtD4Z6d",
  "key24": "33moeUqmxhBEzukeAdwTwWtCoykvhnrP4J4wmEg5YZW7mYFMNhpByZJ7pCwPnxMyaX9rJmX74XAD3s62gYpuobTg",
  "key25": "3FS9da5FzLgychYUWedsX9EauXxsrhtSVa3mco49Ks8xWs2KHb3A7dCqbYJjaSjGuADgDmeJ13W4yiCsqA74tqUQ",
  "key26": "2usYXm7FoHUsufm9mM8CEf47YdtaCWn26FKoWgkxs7BhyWpnwYaRYSctuqukPY6EMiiViu6VDF7MU6NTVk7ydFpA",
  "key27": "3ryND6s3dN44wWjfSgaTaaJjfETg2HhDZZgw2xu9784eYnETFR42em3phSk5Xcfaoi8SQ137CoXVW39NJdaUK871",
  "key28": "4eY1Dcrkb351Kq9Tx9FC2BfvtZmFtQddF63NxuUhv5XTk21qTgeZoxinWVUBZf2uLpR92iBLXZbfcxndJqW5JQcD",
  "key29": "2wkgdujn7B1fNLsMWG4ZJSVges6ChPxowftSRjP7rLj5sG6XMUHsKQW1uc7caSHapqo84vxBz7qUTYQZYvhS7itR",
  "key30": "X3UQezN2EsRC9AQASLKbX5ZzXqC4gKKZpJFBguA1JLEVXV3jESC1TGJu9y2R2YHB9E5GYYPf6DP4hnPk69hifMg",
  "key31": "TNmtBW1zUykJiuZzeMgxa5KdZqVPHaHo8EjjJiqecLfU79a4CWY4cySkJ9k6VKw13nEmRyTnCkpU29KyszzgZqe",
  "key32": "4XGgNq99uBB9na99WX5DEDdDxmHfSvtNxXqz4VfpcT8e63boBPJ6Sh6KrjrMpnqw2AEDWRxThc9gViVt6h6385zS",
  "key33": "3xcxbiaDG1FoJpbLxgabRTty2G8HddUr92j8SLD895Z9exrivz8YNbVL3Vwifn2sQQChjWDnstxkKfwvnWLQQeRP",
  "key34": "3cETEktKbvpvXvxUXTtrCh8VzKQThgcHpSoFkxwZQG9m4c1rQ42fpQqh54h3eJeHypa1aqp3AQPDJX9iQAgBTv9C",
  "key35": "5iK5Fv9iqV5EGCQfgYhRoKrJTRE1U8A8P3n4TrHwNS2d6wDKcq8Qn76Fx1hcipBzsxfujA2fHRUJN8TrzfJhnYVk",
  "key36": "3pvr1Sp5DiVzv8gSamEQ2SLVrFta9Z33K79xtxunFXL8NHbsMxrocimZhY5EXLfXMWAxkYULeRCyHVHCYi8Z5yiw"
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
