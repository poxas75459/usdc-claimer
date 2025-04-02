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
    "4Z5D1pF69G73WKXtft4NkEWFF7A3FEt6gib6vsg2WqamdpMNU5ZgpqnhXFnZdewjBE9LzJBekmM4yJzoGjAddPHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hxiLoBQ3AmpYmC4vx1x9LwrxEu2cTKzwPmqLHkhiCjfdFtf1bcKTipKMRLY7reWVnfGdrvxYDBaarRJDVZ48op3",
  "key1": "2VQ2XVswWiYrncQrs1XeCkd3xfBT5rVSvtfrFmZPx3qxkUAiXt9vQaUfNAbAzRXCRaomSHSFrWDagCApRb12EHLm",
  "key2": "3SW6pkNAqQA3xvNGpQVJEe99SwJF2usRqfC4bzqBiGk1d7cDi7M9GgKqeBEgWVrYYMdcub4pGYzKus4X5juMMrtY",
  "key3": "57UKHQQRMXA5xNGv9YQD28WBeR96fkxJ8ZzWt5gvhT17LFPimr9ZNpin2X8FgdxfB6wKsoeCWui8EbAG7BGXBUtv",
  "key4": "2KHFkruMVkqmnG167KHgfWP2riGJQ8Jg6Q7a8eBpycc7dh8pjc1fnwKvXQNrXwwDWu93sPdNnQxRpYR2UjcmaGNs",
  "key5": "3qSjJReYn8kaMqMMBK3EqutfexGMU3hot2oHFgURchaSZdNnB1jSe7tnc215EtWNtw5xptmX17ykKiUNrF7juhTs",
  "key6": "A6PmRgKjNdG4xZFtvUG1cN8XktP6L9zPF2g4ZGbqUNKtphEdSop1fheBy2rFMhqpw53dn8nmUNB5B8QaBDrAidX",
  "key7": "5VSEFv52W95Qgsnk6SGPf9yXk78rdQUd16PB5qvs8pgu91scbjmfv6FyhKg6msbwXuQzdu6K3m7PvqH2PnZFFGNe",
  "key8": "SxakjTZ6MNSsBDZg4jfm8fAuQRDWcdcphZUpac9VbinZYfAchwrWmwRuCgPvbY9LWirKVY6bqy6bCsxmxwQpApf",
  "key9": "5K28V3GvtH3o7k5jgGrLZqygK3RxzPD4EaAtzauiKiXsKDK7hqsu3WKfe9wzVqvw19uyRiGP1J8SH4kNars8hfv4",
  "key10": "1nQLxutxYati9tZ4597Wxda2RhW5ZhCN4jShjJCN7M3JUG39QYpB2d6FaK2p6CJrL8LDdrHKpY3uSjpDoNhYetC",
  "key11": "3FeNmp3aBDMg6T2sgz6P4vsX3JTtnoW3s2o8pbjKN9TmBkteqj1nswF14qDocER4vCCpYf8y5WAnrQN4gG48vKDR",
  "key12": "65Y5sj5NWpri8xudivLf9hsAFXz6zHx97xqaqmVdJBfNqLMcq2B7Yaotc1pJ9yAGWfM7MNCWa9rPXo9srEhPsh7t",
  "key13": "XCfSLphs8CvN9biWY32fJF2p4jUq1EyU5popt8BDq7kePVi3TMSbiaqQ3cG85FDFjEbFQVK89wVtxzo1cJT3SfD",
  "key14": "53T3kCJdeYksGkjwx7Uw6cuTaBdBAXUQ7F6ztEYPfzLRQNe2a3b2jcHar3nrqt9AKpGdox4j1u5cDuVdMiLxj9Ft",
  "key15": "5n6frdZa1LPLDzDQNcoRhZi1Lx2EnizecFfvYtfgR7UJc4BtiQbZp7wbVuqah4hZetRW4WJNfrcneZ9DaFQgxfZ1",
  "key16": "5FKt5VpfBzQWX3XcnzWnJpBArpcV9hZ3ohBbvfvmdaPgmoZSESPd2kVUvg5y1GQEbc2sacvur4DgPpX8h3f18BNJ",
  "key17": "3PkP9HbZPGJrZJ16HUMK3hhFs7qp8YuY1MmQgEwaLFk85XExQV7eNqSgNAGLorY1uTZf7X4mR2uCagq9DncuydKb",
  "key18": "Mefa6vXEL87pVPmEzGNjY4udhRuiGUbrWaEEbEhGRsgNLBVuz1pi7UykitvY1ZVoVZkzwcCu7bXKHeMmduLaVVY",
  "key19": "5rEn53p4jsFxpWot7jo16YgJEhvehcPDwf6xnzeeZECuvt12veBDEXes9nFFAPJ8CTZfUXKVKrEE8WAFmfkDyBvU",
  "key20": "Qwo7aoYxJtHQPBctBSNjks9y1MVBJeTtz6JZvGsUMxZB416o1B5t5KFsGv896rEocfFiDCXnRWTsFdekBoMGAez",
  "key21": "3d5Jgppzi7HFLCKEAeujPWDJ4R5cWSg85Jq7HYXPw5SuD372tjJMwLSX1fCP28bWfoMDYxt3r7QDLtn7pZoZksEo",
  "key22": "3EZjae6kAJCB4Unjxh56tdsV9S9ATF2Jq7T3SdrEX52tc23bZ1ZLWvGxL5nFxPNMMVqnyE8RNtRaF78K9Hr6Yw7k",
  "key23": "4queZ25tHUCLGzJmha6dy8KJEDTpgm1nQ8vEknqMB6ZUz4dDAXXdktjVVucGCpat8XM4QsqVifKvfcMMDYwXectn",
  "key24": "2tSB7pVhcGGrzx9XWH7YqirUaFH2EyRSPDV55PjShFqm91DttUjNy6pAQqWoDEst82QxCZbxxcaCNP3hvW1746ra",
  "key25": "2rzVo7A2GjShHN4QUh5UMN7Lo46haGYZmcJo467ZzDHZAvxcdAzmKwCeUG7UTvw59BwnMmE28N7voCFBeNHozgy5",
  "key26": "pkCioX2UxtZhzL1Wqkh34KfnTzQvGu4Gmgg6SvyThRqyNCKnnD8NFjGRVysj7PhVfggPtgz2XV5E3dHNKurfK9a",
  "key27": "3nsz4u55RCwq5nz9PAgth1wUrrom4b4BVhMkhu3eDaYVA5b9CqBgtyT4KWtCaVmpKJP7uz5B6epYcieEoL87a1Tb",
  "key28": "3JtaHKTEsdRWRCtmc7tHRCY5ptZ1rnv3BxsT2TnNYU3z4RqUK1CyQy6dyxKh5exLUm9pqSsZSpx2nA3tTwBJLjv8",
  "key29": "56DaByiRdV8YS7bbCbbghhMB9xTqDD1WsjqNkLJ1yYcN5hyzDXxtDnkHz6HLnpn7TAPKTDfzXLyVcJWkp9i1pVH2",
  "key30": "5BJwG2s6kPkuKs1Wv3vxdfngx9ZBpm1diCguc9n25rkFGtij5KVWtYAhAv376f54WCbh7Yc4fpWXWPXtHsdBXWTE",
  "key31": "1UzmAzQBPkNpc777tzik6SJARk3N2AvHGRn4pJvHxugqQZyMc6aqsn1znNQ3pQvYXNSa53pNA3StLmJ37UPDRhU",
  "key32": "2HwZkxujozxH7wSGYqmjQBAyAVhyEqPHuuwCpPK6vxGFpn5FaXG4JW4qrmtbasTyV6WPh8B55SfvnZH2ogd3UBbE",
  "key33": "3P1m8VTFwAvooBhqz1fzcd8juPdYDVsGCqWZYUNnDG3dbEDGzJiTrsu7m5fWkqkPsfLJUj3YvSsam6Sg9f8fntGo",
  "key34": "3fGhvQMdECx3HJUbpSnywDQeoJYoLjAP4JSsjcQ6skd2SgpEJoNh1NC4vyRYu8kg5qJiRRtDLe3ctQWt7Be1Ty5Y",
  "key35": "62n6eNXPTCJ8EXoBadxpuKp5PibxJ8n2Q4NGA5ZZ8baBMRJ4RXzcNSpDVQAqFUc3UZ95o93hC9Ub3ErLcfcE2heF",
  "key36": "2e7A5WwVfo6T4h4o1yMUKtAWYPitrt7EbDhL8Dy62oMPERsfWwVAH3DnyLfWQfJ6G5pJjonHK1zfZ3DUcFAAH9vJ"
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
