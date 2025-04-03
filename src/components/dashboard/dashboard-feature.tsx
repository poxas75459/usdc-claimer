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
    "53QFeqC22C6UBKfsAHYevsnL8ZvsqTjQyXpMddrpQRUunNUp5gCwPmgShfKTc8Re6sfb1VdW85Gos2vjS3LRgH5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FSL24sUPAS6AXa1LvbEr2DSVBECE23PogYwf9NVv8NwJFw2RCJ5HnV3UGkbQTwssWBe2rq8qCzjEvhcm2HEVUjg",
  "key1": "5GDgn6MUP6fsGdUkHM4DENekFCkkmGUWWLtFwFKi4GY4XEUb56vDrGDzh2kLHAGCxUDxDGbYW1Ek8C7BKpYXj4Hp",
  "key2": "2Srg27BU83z6gLi448qdCdVJBz6YM5ZW1kJ82kSJxU5gT9GssfyqpU3rex8GoDDkb5REgxwWUdNGX4qnK9itfwES",
  "key3": "2adahLwyMUb471Xfi8op78qjGUxrpnMSWmUKJjvGfiodNTx681ivaVHni9vpAhnN8TGHHBvT875Cqiz3rfJWKhC8",
  "key4": "5kBgpt2MQAD6ieLev7ouMzSHMZkq9S3PgfwHDg2xUTYkukHxj6yC9iNNn4aZvizZXjTbASkc7LVBCEcfyQcHwqBU",
  "key5": "1GumUrA5BMdWj6T6vLDavL9HNF1GAAGczYyQyHSJDdA4G1Tp5J6qZbHgwnb6k1bAdD5HiTi2GvFK4U4jYc44cQy",
  "key6": "5PGGYqKQzaLzCS1mv9rYy3A6KMEBgmwbgrcHoBbPuhEyVuQtd8NqawrRG2dLXgV3ECs7J5A4iSMWFYKyFe5bCbDo",
  "key7": "2MsALoCSxYYTkTrJcxQGMwLnuAfQqFLheSoNZ2C1px12S14ijjmwWurJqruTrLteZR6gNEkQbEcUTXHf6BP7Pkiv",
  "key8": "4u6EXCFZXjAhNiyzMceig7XZtwk7NbGKhAsGsHDDM4fNtKTdCVw7jAjmGrx8K5Y6jSH5jxq1b8tBs4mQw3LW6oHB",
  "key9": "3e2Jhyk424QfRU8avFRwMY5bvfAFwWP8J2ezvhzFAXQEQzfRFRom3suwEkjjJgDtJZ7z8zF7PuWnMnMP6CTNLEh5",
  "key10": "GJtSosd35yXqsd91cijLiPYhz7MsVporxbWZs91k7HVsRcp7kr2SxBB2jeDDxq5pnAEcCWJoS4keczeLpeU32jo",
  "key11": "2aFiWkjrqZ7pT5h8YqbxTLEmEgnfr6LAxsFR8cYwNbKAr1Pc1H3ccyCp4jfJ52Zu2Swip33H7jqtTxQzzUF3Jtm4",
  "key12": "5uXRHHer1P7KQDxwMH3pfyoXByrxXoo4tG59vUt7Jnzi11veMR4DAtkUGY2RH9i4ciV4sFcGijYYzwUnySbhQREe",
  "key13": "36tbqiiCpmVaLTsbk15dzcjRHHjchnDSFfXA4bjm4FnnYx7NNm1bgSfBsUcv8ZsrL2dHaLW8EQFyh3AyZKxk7zH7",
  "key14": "5yGoj1KSWkR1rTpy4pwSVUhabuyidHfRvzhUXvaMxBM7BcYRzv9crtdK8XShncp8S9sUr4JRq4FAqEEYN3W5gad8",
  "key15": "2NoHa5666XBupxw9fk4VvDWWGAWyQGtsqqkXxNZpoXzka8G2v5EHZX9TcDeKkVVgfMZJcXugKBbnuTj9XcBNopwY",
  "key16": "3UNJZcYW4qwEPUyj8bbtVhkKv3j2UdBDASzrkdS5Ebv1cK35Eay2nDkvQS9pN9mfET9X6KqA7tu7z6LCwQ2HmVCr",
  "key17": "d2Qi5FV1jVBVtdLN1Q78K2q7bRHjSdoUkBb9xbXty1ruyYumh3KKFokax2Gvzbd1VaArBW4eWX5RkzKw1wHVdDb",
  "key18": "4KQERQk4AXydiytTgg1evwmFoZT43zFR27GvNAfmq9okNpHnkYtCrcRssZBw8vrrjwBbio9JVzMATM64Hwyn6R7Q",
  "key19": "4D8PSPgZ3bWPeQgHwPc5ft6XQef7mmKikxsTp56HMzUxo6EZLhWWHGzZdPeLmmh8Ukurb3qusmR1XsSenyuvA6yB",
  "key20": "2LKKwy6tp35DAanyDzK38v8CZcPgLdo5DPwcgUzLz6mtKH4t5Eioyt2c6vWJrrLKqW41JV7EsTqu887DPZZEAhVe",
  "key21": "38HwVwyR68feGMyWRJLbRXZGnV3jw4mUv7Nf2wHhGqYKNRhpcSB3nMZcoDnbKFc11yHHh8hcqxHNGVApUhseVRCE",
  "key22": "2FmNc8jb2mmt9bLK3LDx1k47o4wB4UxxzF8HGmfBXJSV6YVtbkT1Bet97pAtzHqFQrRZ1Wb4saJfzw5duXfjvDWm",
  "key23": "3tJi3NnWUFhN88wevoRRf6BeX1SzBrndCDbSnL8Drh4fp9d1U2vsYj6TrDx4Uk8uUa5TK31zqq1yB9bqKY7FYmDt",
  "key24": "KijdkehUGKRk3PMxFEb6g3dqKGKtAcpx2EPaaLdG1KbosZLrT9SRX6FHPufTCQvDs7v737PcvCoU9Htpq5GBvKp",
  "key25": "2Qw5UQFYZ4551imQxiibtB2G1ZWPYqkA5pjFQ71Ud9q8dyKBDFzZ4x3hc1NEdKc4zgRJdywUP8kTWRJgE4aoBkXi",
  "key26": "3inPhQVyAxyewMb27AnR8ehFJc9A9d1cdkBNyYPv6dEs5EvTFQH2ofRLkcoTXg4DrXVMw7fTKuieSqudj12gGMvw",
  "key27": "2BAZX6GH7AwMZEqUUEe9pNeYiT4AHzN2XMmPwswp9wYvkEpTyZ7Q8SctWz2jnWfgQVqdzLVPzEgebXhFSj9TYRtR",
  "key28": "4bK495zGcibguRUcnLwW2sy3tshbnf2tefoSi1SgAbsTG8t7Q6QNqHxnJA4H3VvtCf5BFSEMshA1VLHTc1YkM5Qr",
  "key29": "2s5x7g89oqLQbAn3UjDqBeYzPzvQCbviYiaXLzMWjmzXvANv4TmHHHeqx3hb6zfTCdbQdC1actGXe6BQkJWhiMot",
  "key30": "4KcvTRntFFPMwnCPrQp1Z8zzRtQWzBdSS2Fdhro3cVKWXFWyEUUaKf5E5p7JdKy8fFH1AxpBWbqPBWBam4MfGwBG",
  "key31": "i1WoYWMKMDjwUzk9L5GQLbUuuzbvriKDySpFVe9nKCf1E9UCnGWC6sge386t6gGVAftoiG4kZEJr6Cc62sHpyBJ",
  "key32": "5nZn71D9b1ccgqVGRuikUQ8p5qb9NT15ckzXCgPup3E3tuCAVenKzctF5w7DHp4PCKF1oMq2yRbPuPpMJnXP5uSi",
  "key33": "2UDsqtDJSyA4xEcXH25ArkrXA8Gd6N3TJUBbXFH9kuBQSa6cJkpRLFDRFt2Fmfqk42PfgqFJtiCk4vb8PNDWxNxP",
  "key34": "3Vih8sZJCDGTeDEB3p7CyTXjxbBZEjRkUeekHdeS7YvNPs5szYtMNHDJDtDRNpDn6XshuvZ2JsmPajAiRLX7k1RC",
  "key35": "4TQMaw34ybFUooMeGistMa9Zd6ZqeWCUXSEXYVBMZDC2wbzySAGk3oEv3M6Xd8WfSHCHQqwtaLTuZ6n72WY67jTN",
  "key36": "p6TxYxSjEwrC2HSudgdndu4edwi3CQ46e7THJqkRxCFfjtZV5g29Z9RCzvq3LvcvMwnEW47AGqKRvLmERKyj3Ad",
  "key37": "3AmXqZPiaKiguS8unE7pJRnfQo8UoiVJAj4aEcAVeB26Rfa1oEvfbNxpvV44mvaNZNonBS6tBdM2PRwrwS76WPov",
  "key38": "4wdwGXmG5axHpf4yR8BG8Mvs2PGW7wSfAiSrRxavGFcmyjLZXqqwzvoQDPVLCc9C2YAb5gCHxK2vB8JD4GrzxGRW",
  "key39": "5VcXaHyvWZUEtVaYKxw3sBdQfMKVfVGpx1fWUQsqePM3m2tPNmnAayKxoiH4CNQRWBPMBiYKhRbrUF19UGMRpetX",
  "key40": "3mywfByyp1eAYK8YMM85pgRqPSus2gUr39NagAB4gVBm2gwasCdEeSeo5NGEiQEJ6iY2zdHma8zRaGirfTckpeuL",
  "key41": "4s1f1deSzxSwt6m8ZxqXrwTHjZBnrKyfTwbQtR9wzqsPsKkMM13YTYXp9vVb5fJJucDdFJspXxoWzEXgWetFvBU9"
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
