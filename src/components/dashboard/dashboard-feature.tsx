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
    "5GzUnCjzcZf74cb5NbDNbmznB8DbokSqH6YAq5XrBxrEyiV2EbaAu1UKqv5QDjfG7QtBk45NvPe5GzVGCANpCT3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c5YtZ1qSHkp3VVBWZ5pRAvUwNsSiYS94pkbkNmNy8LESFzhnVDgA3M1yqbySBzvcCri1LBAkJy8TbQJDTv1GGFb",
  "key1": "4hd1F9YntVZnAo6RQ6s9G9ZyzFrzePgxAhmWAjxGUdehHRdotQUHqKh4YWYf3jgfkUT9ZniuXbARmcTLKt5Chx6f",
  "key2": "p1nyiHTGMU8yc4KQpd7MP4gQbj4jmKkKEqYQtDBaoonU9rr2CXSCua4xBNJKk6j31P9mHQPuTGasEoxHsEDr1bk",
  "key3": "2BKuFiz4AapvY3vybXwaZ4iSVWbU3nmJk36EvK1E3J6n441WfJDYSD9rhBw7Sx9pMH79jG7w23xQnQVtL9mD7AGN",
  "key4": "2Y7LYrxPTiDA7mp8SiAr7y7V8K4yfvLf5DxPSKnq4D8MKxGRgyeLVz7LSJBQxNkRb6J4Y7bq2U9H9NLGq2jLPsvr",
  "key5": "3MQn2sMg4295QJyFCMoSn1AryH3vAyGaRjKws7cgzX6hK6awXGfmm65oKRkqEESvKosTr1XVe8aZcCwu2rjU3jCm",
  "key6": "66E2KeLZ89riJQFLkyCmu6h3eLA1iaQvUrVVqu4FiUw7XubkqSGN3Tbd1MtNnAf5fyQA7hyqhgV27wL5PieF6wNg",
  "key7": "4w9fP6FC7v88qhDmQPsjhoTgG88i1WjsrGZ5Nou6Sx5yniuMXd5vK8H1h3x5PzV9W1xkKBHYEFV9xjFtDVUd5JfM",
  "key8": "397pMf5Hj33ciGdmnh3AKEUSpnfmWBRptrYd8t68KezdHadebjWc1FaDqQthJ3x2uYfSiNgfoeoNfd5kV14aF3Wb",
  "key9": "54b3XoMPccdDgRAK7oz8wkAtwjPXnNCyU8EnEmNoXAK54Kf8EosP92LPzLP773c4WLmMYVr1mPPkycisLpHY6q7v",
  "key10": "4NWK2mwE1yK4iReMxd3evXAQ5dwhWWjHwmFJ1afUKdzQzBPLbtgbot7xE8b4JuARDAgTKJzUsqWkbvf6wD89uujc",
  "key11": "2UWxcdzSMtkj2fwN7TqyZf5scENj8cNaR72Z5MJxae9yEXrLfFQw2dXZWLLxe7YMnxZHHWWW8iwWP13nwEdub4uQ",
  "key12": "21jUhTQjPYLsxKUDTJjTtFny4cNyh37B7R7c9xgjZV8eXTQGW6WKUYp1mmVmrTeT8nWrbKYpTm5tBifEgokK3xXw",
  "key13": "4LqpZ78E43icg2VngMNP81XeBc5J2DJjYsx4dXx8usY2P1MqKfyprCvsLG1dMNvKA6Dk7TCX7DtnMjxY5wtsYzCs",
  "key14": "2Y7sEB6EWHEXdvExHDfBgk4dfdkxK96xCKnCR2e7bt8LeSUT1Gp7k5P5GTKsvSsv1bGMVK18JB5JvuTnEdyGLihZ",
  "key15": "U9AJo38HuznP5qh1iSt4DPdqXAigXDAF8pxeuzix4XuKHTFnz1mfTdS38uqAhzePzAVgXLtSWf6Htzm6huRpFDA",
  "key16": "5WNeTUB5TWtzurRmPfmdYXuCVoBQVDxXTFHZKSNUg32YdCgEeXrrGboco8Hv9rxZ2jmPVH1mhuVT7KGcxkjW5ceQ",
  "key17": "53CpSvPyr7xjcQSGsF5hZGorwsZPDcAjHkHxDqS93MZAvS8HM4H6cwcVmJZpnJDXyBMWt9SgLfYDc6a9Y5vNinqY",
  "key18": "5sjCfA9QLw9LtMoX8JZpbEL36GTVfdLjo1kaEzgkEb6r6e8r2kSZ9sPvktVDGZEKJhnrJDPUbvwa6KGDDFaVec3R",
  "key19": "5Lx4Kw7cDV3UEWkwXqv5s3Aigh7MsTzJSsUSNAha8qc4wQdVrY5GdeiRxAhRnm2pUHUgodT2haz3GU9brBswPYf8",
  "key20": "5kJSWxsMmJQtzpFa1XMrWRcFb1pV4FzEAV3TTvDqoZpYkhBcQqxmxRYGavrtmvD6hd5JbHSRVhD4PLL2tomdiuMw",
  "key21": "2wNu43UjPmpRLiG9G8r9oWw6TwvmXWVcQpcBXJgvDA3ARHUBpWqr2wRHfg4LNmopkE9gDnKwFdPb7dwhufCYTZ72",
  "key22": "5RfnEBNk2j1hvVDVd3XTaffAcTT5u2rDjCXkWzo8AfZ52W38w11URDYFVti1A5VhhLdz1otFUa37ungApvz2gJht",
  "key23": "582YekcFX5VKtjfN12Yp7dYyg5xAUFc3LhiFTs2F5Jo895uiohR3P3Q7LACNSqmeu8tLjAbQoRYZEaVNyymZfQBb",
  "key24": "2NKc9EW3qCy3J62BRvnAmafEtWFag9prQtaxd2592gAuLHYT6DrEq7CGGrN8RTwyWq4uaqf2B43oo9hAxEMrHJ2B",
  "key25": "ZeLyHWRkwKvjYiLqPYNZLs5r6vnKXXjTAaxZ6g6VdzS3Fz39u8XtpXM8yWZibeDejkaDvUsLDyY958z8rqmhEMQ",
  "key26": "5CbV9wZsyNBJmtHATG4H1TjQnr5N1tFUgp5snPHYXstgiVZRXVkYu1gT1yfMRMVThs8qfF5NYGp3x9tnMPxbWaZM",
  "key27": "5w7fwLLmCRncwzZTSRaTMiY1HWya9Gc92jJsSHaU76VBgppe6wUGxDDWV8GedqwxrriWFNKfRAjVJSjkWeQ59L8D",
  "key28": "49LjfS8iLzrTYsmxshFGzwSWK2f4ndTovboaUHbRPTPRvEdmEAxQEvWCQeZnGpXfWcCzWfQ7enf8wBW55XJ9qMTJ",
  "key29": "4FrTGqACbV7ENhbRVLeJJUdL6H3rC7gvBzoHRoSs7q4iPCCqqPy5BtrzCUyHuEX5hDg98R1ynHC6EWbeJaJNUgzc",
  "key30": "3v7CYEo5JubxB1cKry6c1YNm7GEua7srnzGRrzTaMvQEv3nywx3RAVH6wuDavhbHeBDsQDeVHdG6TibWCXLc2qDQ",
  "key31": "4kMXdhjiqPtXLt4oj6BHjqKCfhMfrwkHEB7MY12M46vautPQLrd1hpdsyVejEqqRDf4c5N8af5EoJ9zoGjARzq8K",
  "key32": "59Mxjos43MUE7AB24ZYkmCuANSVBjmahArHd2B38QJXxtc5E9n6QtzbVk76ddUvXPC6J2YdxibnkYFFKQNqTWGmU",
  "key33": "2W9iSbbeuDUnZJXBD9GFyGVkuzBM24EupmgARGBR4AWZX22q8hAsgjgTt4FzPQ2iwJh72xSEYLqeqKzwkjXYGV1T",
  "key34": "44987z3WFHvEJYAMyANQg4r2jHn8ryT4s6K5TWGVsU4rAmnXngWtL1BSWoqP8gopPo9A2t2HyaSukVrmBbmDcNTu",
  "key35": "2KQQoKRKgH9uvoaSS9kTdnbe6XnmTxGRuarTqDR7N97A8ceofmUBkDcjbsVJpNvCfySMXE1P5LLNCjeTvoKjcn8H",
  "key36": "3SbYDbKCCNeeo8cKeYVFj6bLV2YA3Y9y2wUmScML8rUfzkGVQg26dRW2QPCb5gn83huSWxGGeKWLgvQwH4n9Gj9F",
  "key37": "HskPY33PM6rakJWixGPtfGBV3EdJ93yBzLBVn65qi7Z8NoeEtpBUr3JAETaUjDW7xWC7eRqvcX69rGn8PeDborr",
  "key38": "4PVvBsgem4J86LRxGZMPzgS5jnQHphn866HMLCKuvMTdXs2C2rsGKykuitGHDfeqSfDnMnMythgCksAvjAEU3PpD",
  "key39": "b2U1aHRMeapDswhBZsg7FPVey8G1LGMKiuwVL9ejB5F7inMZZ2di7G82zkBx1icBnH1V5QnFwPfY16anaK8zJWj",
  "key40": "X3etSuKUaxH2kAnaMqa9WGLq8RtBP8ztHMSsnmJHVSb3vUroxwQbbAz6ATfBUEHQcvZtV2Qb9YLd51udGpYrTqd",
  "key41": "3G6uXKAypka7hTzNJnXH5c4a21Tsq4ZDn8yo2258zdxouqPxbNCM1grDkhxuv5LXhTKQPsCiGbpTJNvjYqhupdSx",
  "key42": "5qKbGRKqrzruSwpUG7u6h5n9LrvQFdAqaR6KshmxKSEReXuEM9zYnqJBMt565vgGAoHfYeStrBVgQLxw21SpHHHh"
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
