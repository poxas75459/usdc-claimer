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
    "5ADZz6SfSVAepJ8qdne6GevBgdFRAk5WH4KuUHHs99rcN2UdKG892cLprUaTQEfYEB9SdHNEyBkpg71Thto1uVC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwdfVkNLQoyLtv84RiL1Yk8TUMEKWnaAF3DK96qmea1oydyK8yMyNSt966XYjNRS48q14AVZpHzXYzwXDqFRE69",
  "key1": "4UwLWoQCxZgpTPRvPGbWu527X7tMEkR3LRxpPMGY9h2WRtdpSZ4AoXR7CWsw9Jd6shweNLGg8Tsz1Pttfd3GiRca",
  "key2": "268CoTosChJX2vxTS8mjN7uyYuEwoGYTfPzNibZyv36NQZAhNpYixUqvnxBaV9h5FSeneGvbGHern5jrz5Lj3iL8",
  "key3": "V6v7fneZU8w1yZmwb7Z7drEiBVJbuGDeCFqMNwLKDiXKeesxABSveYa5fLqhz3VgFoxGiadZpUSRNR5nXdBVfFT",
  "key4": "2yoMJwE3qYwEpHRZCEDTfCVZEt8HgHuh5iYvBW9tr64mg8V4ivCnnEu7W6EJZGdvniAZLNCiE8RG3rn4BDV15w29",
  "key5": "tXrzrZY1bfs8c3mwu4McPn1Qcr8Q3K9dnsUSLkgWnrCfTZWcfuNmZu9bg3g5UtbTej9ANXU2ZzFkXEw2AVPDYfu",
  "key6": "VbS38XXZPi9UK7NqGdeYEkeShtQQcf9wKwpbSynXFAgdJYdT1RGoUzfoVyNfNkb8JQtziFeSidq6Xwh4pSxpfMi",
  "key7": "2yF2SGZn7ZRzbzE6GceUug9iWA7KXd55FCG3GZaC1cf1QNdayvTg2EZotC3ADizbNyfxKzPE7XPDyU9FzNbncrRZ",
  "key8": "5HtY3g2VguywgbcoEj7E94TMNmNysv2BkbF7b3DfdCs6rys5Wvn1ceNwznmdYnW5TyodGAAEp5TaTqUrAYzZ4mbR",
  "key9": "2BMvHHUy2DzyTZMPm1Wy994tNFJgsu9jPt2p3UGZPMbX8JRcPTcY1gXQ9JmzkJY1Eu2FnTUcEBWg4xm3VQmsGEro",
  "key10": "4zuVbeJDNnLGdR8uc5quhHMwkztz9c74uZAj8iruQfRVTweXPwuCNfNgpBawPJZgys8jfa9jcpSW2Vf47vDRL7Kc",
  "key11": "29uFhamY9XhDPQ6nagwnmvjCxiBaY67aDa9oHFnR4yvJizAEa7ZDef7mCGeXTLtbYMbHcxH8hcAekNtqZAqEBth8",
  "key12": "TtHopg2zVnsFUCnBTATQugUQShu88Zf3RRJMnSDo9RkvxsZLGbPYxPyricJ5qvA1on3zWp8PuqYJjSk4g9HnnD1",
  "key13": "5B37dpxY3yUTLLSF8EVZczsXA4fa8srXQz9Gq31Mv9mjrSfQ9AtVaoCfpHEUrWVEu61JHUzskQHxtUTKjeb1M9Sz",
  "key14": "4iVUErBStyjzZv1jznfhCV288BYsyjjreyADKMBJpbvqG3G3ULC6qvv2ZwfZtTbNMwkP7oo4PgmZrVQrByzo3VXi",
  "key15": "22Efkf92tKo8aP7yxzL8D82w7Y8DanvW5sGVYTiWrUaG73ajnPC5RCFmRAfXXZvAr5uQJDAVo7eiQ7bJLceE26hJ",
  "key16": "2iqcBvTohr9LcyVAW98ZrWBEJKANtnjERNGnUywe6FaNMeTbhuETRhFKC7RygMLVXLhyBLCjMX5MBKujEPQF4rUp",
  "key17": "fnYn3UXdPRrfBHChq2wXt9FWAJs9h37cTUdWqD2xyqPVdTr7g5FWMYnix3ZQ5hiXgx9vKFMr6JX8RLAYavj6LBa",
  "key18": "5EnuFsmvg6t4S2CSk8vk3P3aDJZxMjU2cMjjKQ7P9wAw1z7pcZNC9PkteNNB24u1RHRAbAhpQZz4rw7kPnfo5w2c",
  "key19": "5LfPAivG6ecabjoo25Ky8cbDigaYuLHAgB9NTc83o3ACrEqBGv62UJC3shjdgzysbNx8hf7z3ezxfxE7cahG8bFU",
  "key20": "41eHifJP8wNdeYueyfHzj4oJz4KkRsbiE3fLxjyWXE39L6mrYDCzW8yiDVPLrHs7NB91BT4h8cJt6D9Rf9chwjoE",
  "key21": "5X9cNh4JRxCUgw7isoSpBjsxgzz3dLnHtipa3BJqsQf1fNugWhuFhudnkAqsoQMhPtfBChw7WHFhbahZ7dzMJ2Po",
  "key22": "25v1PFBnoYMTLjHW5Ecs2NRPEx77P894pz6THLoxBRbCiU1Te3i7oS3JqvuQSwqZopTzBj5GoVoX5gYLQJ6hqkXV",
  "key23": "4CZbydEXpeekReG5Qjg68BEEzxbnSQsk4PeXBcrfvnSFoFo39q8AxY8z7QPwoYc34bXkfYxcPcxW47dAuB1vQNhp",
  "key24": "3fR5TAxAQanQrjEgZ1nr4n8kWPESNo949reh7yajVCytTQYPXojgTVJ9ggjQzfY8riRPpKxhCdeALAdRPSnMnaje",
  "key25": "4PEU7pDPoU1yB1swZZ9jNwskuRtcX1dK7SVjRqmFN5sfX8r41WCHm3cDknST34tViQn8d5T6xWb76imzgs8fCTk5",
  "key26": "3Rd9DPE2gdBMPj5LkUwArpuo6qtNeQiaWfwrpszsqibKcmNUzsrdHmnYBP2Wz4XsydY4FNuhedJbSsSZGzQGJYrQ",
  "key27": "3xAkcKAyCJ5HLCAQkvjkqYK2nhijiQ9VptGbVTFCHiQEfxPqwiQ97hK7muCgcV4UiT7rw7m9U9foDxfei5Sk7kjJ",
  "key28": "39qtaANzvgMgeC3puRnieQbuxEoMg51QoAPFqbTQZeiygg8zyKNcpwpYkbkQhvAvJn6biujvCmxxvv6oRhC7jwVn",
  "key29": "37cLt15Vo7kfo15GfWaymZhebn4BAuRx4xVKfPVHhB9hG6dox23EU38oHHBg3Q8SenTiQAFLuqoTo9hy2KDseahC",
  "key30": "42E9wimK6YeHLqidADpYCej3fc86Ro1TQHr9u9nzrhCT2P3xdZAJ9it9Y931KzGYvNq8BG4ou6qRybcAWRFascn2"
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
