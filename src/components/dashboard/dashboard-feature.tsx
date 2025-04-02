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
    "4V2opvuhRbpMqKH58RgKawKSXA1FwNuTnDwL5pBpQU7Hx3P3DQYvGxFmpawZarJrQwjbnbeqfefx5SCj3YZhZ88H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CS5hnKWmVnjjr4WvfbXVaxjJFTWdxcvzeMqGegxS14GDginTnjcbUgVYYgUZSioeLhLLnHoAFAJWekcCDoQTpBk",
  "key1": "51H5iC2hdtqNbEoNbRgKyg9hUPVPihDatHEktSDpGGKPjw7xmBeGPk4zFt8uraHuvRUYXUQhHTBEXYKoRvhKvybj",
  "key2": "3WQsQX31uiBrAdq4Hh7bpXQ6A6FHgHGxQnkdNhPqRsqsvknCDytegLKpH1744KLqkKiq5B1xVSMcUjJkyco8x9ma",
  "key3": "3hCPsRDFf8LTgjoJyi62QLkgbdHQLkJukHHrgXrtKRCyRKwWYcjP7zsycoDuD5dPrBtwryB3EVjLvqcyQTuAS1rS",
  "key4": "5wBmFwpFZ89krccZKKx5RRt9pE9kGnw76qpR3v17waHnYiaWd5WhecERavnA4mtf7Uzprh9dUQGfq1j5YDebmnZa",
  "key5": "4KnQrU5ouq37MXVcuQbPNngJeB9xKTe9yVoMLnbFkVBN3m3U9CXHcbDqTuYoxeESfBsZXC7kWkvkm2Woh7JEGoVF",
  "key6": "48ZSnZxsDt1VKg5mNjipWVR7qo969mZLMKfYf7MPwr4MBQiPXt6Bz9Q2XL452mEsNh7TofUT2x7kPZWjqNN4tqaD",
  "key7": "3MSZaDa4mYYJ9gZKXznf7GDtXsJtF1V2VwCSH1t8eVLGghpEn23ZJkMvQihxc9WrCYckrxMC4Bkzk3zb4DJKZLDk",
  "key8": "5ZyKf8UNYHtSmzKK2eLRpqxQiBxj8YymSefcZwzA3kEr4DapapjqR93TAck7xTL8Mq2mKVSEKrTdCjF73ZieLGGo",
  "key9": "rFwvJa9PjrGbBByeVSGpuhUorNqmsWYGDbZjTR8CV4AiiDpcC43RT5iuKe1cvkVufekGUuYRF8juCkkPdzBvDri",
  "key10": "hyzMMwoxpBKCwpjhtaDTYafneUZR2mFoxRXNz4x3dtdES7SAPajDe2grEnXe5K8M2LorGEkrGQSf42tVtEUYQ7q",
  "key11": "4pkc1XgpiJwG4rgF16ZBCNScJAPEbibshzXDT1W7A2JNseFwDpTzVvzSPj4HsB4pmXt3Vdarxntn6ZuMpbFmjxms",
  "key12": "3wEhRBDgQCSR36PytWTuBpL8CFUY6MEgSLJU6NHCNLvrk7e4QATk9nJ47uoYBbMezhRGifjCSrjUPVwMRmr58SQL",
  "key13": "5i2Ssy6mweugnxYdthEnTePeh9bDxgBrHb77GBnaU4KCuvAiriLuPkTjmjrMSGFrKRrdhnVocfMYMjuPWnhp4wS3",
  "key14": "wSwdQETDqWNcDuappdRF6KFGJfXRH931u1C5Q92bJFePaRM9ueiqxdij2SMMvUjgjM98LowybPgyPyo5FR95NiJ",
  "key15": "3z6M7jCfDnWDD2vWC4oqusfEVwsyAbX3M3o4teRjsye7GgakQyJ9Z9RxD3o6NeDSz5y4vpUUo3RKcwECBm9JNAEC",
  "key16": "4f4w66GzYeNaKXSHebQMFY9Q3taTYwPHB2YLknXuQKFZ7rFUpZaeD1RAKJtV6qg6ZUAtAc32gwC4WgMhtDdTNDBR",
  "key17": "5zpM4hXKKgWTEfDZiPxxG9QZ1SA57Yqub6UsBbnrE61XAjejeVDWbyBSioSUmpL3z8bZayYajvTD1HpGqpGi8gD",
  "key18": "4rY8LfgjJ48KuYMJ9ZUBjG6uiHUZ1hqL5xZfW5MtWkbFf4TF4MFHuTnQ9z2bTTVQ4xVBQyCCMr6j6tjBczGvqksF",
  "key19": "59weW1m4HG1nHAf74NL62FEPzLptW6BdLTFQnEvyVffeawGnLjuR7yJXp4teC54wVZVsSEFgmdPvW545u39NSJ1P",
  "key20": "4ebp8QP7QeHN6GZ3Cg9BvcdM8i8nsyLW78suy3YK99jnrfnf6TeufeQ9YKv9aX1MuqNQj4J4gdM3tBKmGcNQNSAU",
  "key21": "4H2ycU9Y4rfDbuwdfhJFCWN5hZsoXXNcsqpsvXuLXAvN3R599WeCrQwT4kiMivFCkfPASgWni5m69L729dvPYD6S",
  "key22": "5SoRrLAv7yVMk4iX79yy6CyEqDt93gLJy9JMYZzkQHzqez23PnQ6Gsnw3f7DKxYkmPh9VCJoyEXZ2xqWmcHMSfAr",
  "key23": "2eu95Z2ky96GykemxBPD6heJXy78V6ith9TwcQHhqvtki6hFPsgqN6gw1v7zQN6dHcmp4wt8t5adCKtANsePGDz3",
  "key24": "634rivQye9bziz9BT8Fkm7KAMix6HZs6p6JiVChSzhgAVD9ULQ37PPr4twBDGETL8Fwqsa7PtPRGcZBSgXoUwXCX",
  "key25": "2DUUk56kCS8mf6RLHtGewXUrvXNQVYZop4q7t5vFtZZxC9f9pMxgC3gnc2cXk7Vw1FtemCbWPjrYBGF4FU7S3wCj",
  "key26": "2ooktAS9MCyyk99ktGoX2vqrzHgcFQFYWSJAqT5XNo9hAncth4Dq1QubeM1xTrcJpxYrGFZYb9t7hLEK7BaWqK9y",
  "key27": "3agVoKTrU2LkrVP5bcnE7DhNFp7xy7kuhfdPhQYf66xnebnwAQyqe1nXJoYVJB1XSRZSP78YiPqHPNPbDoXp9DMf",
  "key28": "xkP7uvpWMLH4tdvDqES2hgfxxZuyBngytC4jU2retfz1UiFu8ZJ392nq4SRHT7qcF9aSBVC2EVu9n2mfhxTuuz7",
  "key29": "5vwkdaEu9Er8dPcLBwLdsNK25yviEyrDtuepFmJLkXLtBkrudc3vxAkno8Us4mDmXy8DGogzJX8oo5q8NLXRTR84",
  "key30": "3YBo2e9AKAN6Mi3EjXuQ1qQttQCp4e4BQBaJkUhftDZeRLGB7AAW9EvdbsCgUknUqkPunhcgiMsXuB1yueacRSfo",
  "key31": "g8WrGjr4Htri2bBw1CfbbxEgsPwZkLSgTtJN4T84RxT2sMNKcxq5h6Tzhv4hnMxDu4DL1jndcu8Bg1AzywvNRTS",
  "key32": "5tWWJehzE6qmveWn5HckcaQP1fsgprHH9gmWQgrKdHd48dgCAKGJAmHCUe8EBnY5yYcXoQSeLmF2zzvx9yCdndEL",
  "key33": "pgB9in8FBYEhfHCahQ6WcVznQ8dFkDy4MJKoYUsfNbnTME2ykfXZoyRgo1yqNAZw1WZCqWEwnHjUNynwLkoaEif",
  "key34": "3qF8ciDSxSTqPJjpc9itoRYme41i2Eqq35ceMqoRtJRURZ1q75bDqRwKm9x4uEKdygJqsJ9xMXi7eVxNArkKLXmu",
  "key35": "5f4rwB1XkCs7aGRrkS1wjXp3GFdwa6PVdWhPZtU5VQ9mbXkUQjudGwDjJxddhvUxuLLhUZg9BDtp83jnH2QTaenC",
  "key36": "5PQtFDbowKT4NuEJ2hMskotbsXX98PyJNMwBVB57wXYwKbzY3UT6VERpbPuCpYAvMUJ3E4xHb97KXabqpYypFyvv",
  "key37": "4uBwhd5rURr1uaEzecPcoheG3fcWhQELERqC7Pa8nCLTo4QpTSLQBRtX6BH98boteeJuZmFU63qWT8WiPhpxZfxT",
  "key38": "5vQih51W8uyusxoi6QeBQsQ4MPtz3DVkAAMkn9DppAAUKeKmaxDc4Ra6hRzG2pBb5AMt5umSkYCwzNtadStJaMcV",
  "key39": "5x2cBJgSV7MERgjHWYTHFMqQKMp3vzZ2eUGXtNruon5naK3f7qDQJaiNdJUYkPc3vuqiFwzzyqqixuN6fNkj6bao",
  "key40": "3LyoKox2ffbMwefWNfKJeHY7YYTnXe8pXwHFBuRNk6GrXnMpyaN1FRHio7bhqkaCgi795Q67XSxC9azT2h6zWh5i",
  "key41": "4yHcmgMnmaLD21aHruAuiQnPnhxgevZvv28qJJpX8ivT6Auww9h7vUa2SwJ7HAAwGgVmwB5uwVssp65eh6VNwnp3"
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
