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
    "3F7cNTVgfgPPzHGLB9YrotrhApzVvGr5qUh9jr9eYD5hj57jiWe7AmpYPz1ztoTJdyYb7rEnTqpKm8r6qCSbvjwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pa1LGL3SwBTFTnhhaoyVmiC3PD5APZH5vhm5ZVveLfvNFpKrXyt2RTYjecmpxBYRnLRQxdtwrXEXo7eHfUmB1RJ",
  "key1": "2gwF6UKUX5utNp6TFjDzyrQDCZGmxCL3hG7UwjbGpX7nfyJFnvUcxwHDttp3MoAbaUCW2mwrwC8MUn2dcaigCxQm",
  "key2": "4jkufo77MjQEANNFPqvhzxJryjhiN1Z65vWzK8Bhg5oAFUk6aqQaZxjsQPgSXoeUAAWWFrNkKcZhRFPT1M4rWNJh",
  "key3": "5CHhoXFAejjVfdCXSfvPD9me19tt6xYQ19NjXN4TXP94G2RcPCe5ndq94BzTH1GXKhoWGci36iZ2oQgnQfSpdcBN",
  "key4": "3ibYbA2fZ3XjfPm5NR34J5xcJBFx1EXpiAJHJ5b7mNbmTPfJXwmGcH8Mh4RfhwuykfznrLkSRdgnGFpsnncuwDFg",
  "key5": "Xe1aRVyEkbPrL8hHLoEbQVqR6wKvc3WxAGV1JCkTrLo98T5LZnNtLU3qVYnVmdaLFNnTsWEBYtXj4VvxecVzrFN",
  "key6": "36C6CKRsj6x5yptBHJvCN33F4Vopy2Nhjo23DWxtPodkipVYdA3jYHknVracUxXSQcbsWULHVGBQWuEVNRpPjEqn",
  "key7": "uKSZauMpdM3LhiKDrJ2vCEmKgSN5VA7yMbu5Zdkvz4YryWfJESBm2414DoLJzmWXqB7AukWLR9GKUPapF3KLr2F",
  "key8": "j5HUSwyw1aujCCHLCTfKqpLmd3jHEGvz1b7mXGhvDMkzjFP6S2wFj1cdrLHRzS54S6eA6qzuJZb2jKqBFDa7umZ",
  "key9": "qNHteLEYixTLJT2eyEL4upuszNR1qx3egpZ3FjTgym23tmwRE4e5nk2rGE3ZGEcJFmpEpQ5quiNeENvXEDbXDJm",
  "key10": "5kJuSSQarikcVEaB5rN42Kfo23B2Ph2YpT15t462A9ANdbicavUinzYPZ3B5EjzrtKk2mq8nHLTTP8fJyCZXFcEW",
  "key11": "5hV1eEJKBiFpfiSwxvV4EmgoP1sKvZMHH4wdfVQmkeg9Tp5A4H38ZN9mc4WDXXUXJq6XwLHxs1uoPs9zJZey56ef",
  "key12": "N4A5J7jYUpNVYTk9wqSp2eh4iCd3vfL5MNB1fLmb7WWHTu6D72zXAXGWdseQiXKm7qcnZZHLVoNhWpWwn34ozhc",
  "key13": "2TGtCo8TPHuuQk1pYUjBDdQczhmASq9YSG9hUnmmYT29KDXsGAxsXURzjFPQTPU7EZqtg4QvjnS84GvjFMMm6Wvv",
  "key14": "347M8axMHV5qqDaKUmQaxA5cctGqrdsVaocaVkYqipTyFz7hnaPfGTEgUDsEEz1tEAFD5H6dGohWd8tpzTJpXFw7",
  "key15": "t4MSzUvFQxv4NZzVMBr1yvQYzgR5zAB2g6GZmekPsX8sCriwPUvn37HSHPKvZUBsztyZVBb3kn3e85jRF9YkJR8",
  "key16": "5HrhrgfTCYbMN8DbQTQ5koqXuNkj6PZVEvZrheqZ7KeCh2PRx6cAciwV2mZtQShe6cHdhJyfRXE6WRFnRMNPvx6k",
  "key17": "XW4EifkzoKZj2hXgJ742aA433D3GeRm3riwhYrwdLGZYTEtiPorzDsVA2b2tPxfGwQbquyGJB2a1G4ALpNXZMjv",
  "key18": "5bxC9zgtv9qSsAP2FzoUpdKPjLoCeCW3owC8f6exb3c2ePvge6CDHACsSX1AaAWkfbwE93xXUhPnzUPuUPiznkgf",
  "key19": "3r2sH6G2Y79Zm4QUvL1SJr77WtkK4RKybuC9hEGUuh7Vvx4BQVd6Cidn6Rs6TTiM373kCTBCbXnmRtj9uZUsmc6B",
  "key20": "3nuvmTKBCvKWeSqLvfwVryyz7f7HcYALb1EHBWcrRRSTsiZKE77xH4C3a1HjwNCeH9w3KDLtmv9QYftovEfmPdZu",
  "key21": "2HxeDL8Kdk3koojapmCd3onryXxLiwxMRuuTt8hJqAT9g9AiFhihkaUXSzqqgg5xqjKMpTV3ZLDBpvVaKLou4sfw",
  "key22": "41ufb4pAiP42261aGyVHnAHKpZNoQwce1N1MtkACzCqoVy4jz1YnDNFD1AYtr4fxrG2t2gZMGFibx5FsXQHAji44",
  "key23": "2J989zjPUy4zgEVFP9Fd3xrjjNQNEXqxCLNV9qTEYqntvi2uCAY9XEwQ1kKJMUQDM7A6LwCSaUgJAnXzBkhyDm8c",
  "key24": "63uuiga6qbsqHDyuZgJhBgLsSjPf7evNFSptow1Ka3v7rQjUWFTXqoqK8S5E3ZhjyCDCQ35gRLoCjWSgScuPmXbz",
  "key25": "3RhU3tjsguzckkYNQYx2eCTPXEFdEr5AkTMAD2ourdwYva5ipwShjqcohxAVuhcuWNpH51QL6YusuuLJQMwK94Xp",
  "key26": "3i8qEjGYy14dUnJy18xEPmXXPhdzbujR2VQXd8qFKtPV9neWSuotcf1vH5YRC3oqJVEeRoJVBxtMk8L9tNstWQAZ",
  "key27": "5UtchvVSbZx16Dqf7YHzNYXhpLByKQQns1bkumjzxKnVcRTeXjyQPE2R3uwMepqaszxayVPzVHE1e9BCZLMdxQJp",
  "key28": "3km9gdPpjqRceLZr31AUf4dcnwxKENFHZ95eZGSpyuVfJnmNPozvVfrmrCwbegLZvJmHaUkauN672mcrh91wzxWa",
  "key29": "5Pr65Q8kJZgFMUcSK8UuUnYXXYM2VDjz7EsvY2nqFR14E2qRVewCcKw1gtchukvKzwJYs2c1irxNnS3cFHG25dka",
  "key30": "29tvkxcwzFsVT3eKvsZijdX9xoThGVPjMci8Z3ucuvcXWY3hVxoh2LyLYAVicMgEgovZNf247jjgSGtHQg4WGDfg",
  "key31": "5giN5a6hxkb13yvbtATmEvrdW2f5TKfWrMqygeqFgkBzSpdoFQENhq81nSRDh5eSA7YTvFLzrGSEZ8Ek9s6oMFGB",
  "key32": "4xHV2cirVadmR6iWA8J3x1jp4FRM9esEpcX6xt9WbVHBNcuMGuGKbh73SbWocjYNdwCqyEtCdrkFRrzjHRMLuPoB",
  "key33": "2cyABJ1fyiJMKvHgeihQ8WXTAo9qXWQpm3vb3bZm2U2UHMKujJWiH9VWGrpfp4Wx4u2JQhSr5yf4H4BEWwzP5gHU",
  "key34": "4DKWRvubrw5fJGTAVdbgiSk88xuJDi22PbxLJ1JaW64tEgEAJ9QWPFdUUN3oZqM9qpoN2UwEW3rx2mZeiyjY2dqU",
  "key35": "42kUmWYVgcJKUEYpR1KeLqprKUbuTmNrRSRSUiyM1c54KgzN7qHTnygu4MkXGuQqQapABe9PjeD4FHJG6wxyveLr",
  "key36": "FFv35ZBjWZNF5c5tCFLBz1S6KLqACMKjTJfSqzAPC3fpGmDHGM9WVkXYmD144Yc4NdBWCi2LLqQqJA65xMKwrJe",
  "key37": "4mJk7LS3yihc8Qt6ezKQ8kc4KsqQuewcGaU2wGcwif2F9nyb4wuFUN318vvDTzo5bfKQh38M3yzDxpwn6Aqwyzva",
  "key38": "34gjoriShs4HsatzypkD8dZfH7sp8gzkQb8VWSiXEZv3EGT8Lt7TqL8sHtSoSSnsJWZbq7s8cFLvbnwuYg8p2tP3",
  "key39": "rQzh5TWcZkHmjFDhLeJLkqV27fdstFdgAWKqAcVucDqbMNk5vrJayCoQeNJA277aBehh39GueYoVyTLEMCWxwka",
  "key40": "4p1a2GWyCjNmEyPrJhF2DwywEDAHTGgFoe5uS4vrpDDDV3xtsPKJ83dNxUA7hcZGGWpWcfFnqd9XLNmCKxTvccBV",
  "key41": "46dab3REUTV3dp4uKtUFhAxaS3TVzgWCWpgSH3wD1N9ndrZqh5DtTMAVztPFpSAaxjYrAyXpAXsSdpsEvGpuZpJs",
  "key42": "2vceaDGuyQcHwGzLfWgMUZttVNajw3FWYY4ojToScpNSFMhnYsRKKc6wtGYevhLwi6XtxonLpE8hUW1ymU2csS8n",
  "key43": "48zSgyKAzJZ9fUgpz1C7ujf8dn5d3uE3ccu64WzEvDBzTpVUrERaP2ZBvneZ7ny7CTpbDNhBTqVLFjV4xfHnstat"
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
