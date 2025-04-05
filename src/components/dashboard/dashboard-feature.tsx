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
    "2cnfzrowGHzCdkG5XRuRHCEcc5XEDAo1BavdEff5u6ovez2EAMQM56oYqHHjiLPL2FZJg9sRwcKrzZSfMVedifr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ckmS2snQoLMext7oS5qEywTVAK79VKM4Pn35QWcPnRXPnhndZVYoELFs86c1CGeDAYLXLoo1doNb3Esck9gufC",
  "key1": "5GELmERRkmeznT1U1gMYFLT384jJKDNfNtF7ofPqSEWn1ptRw1XBgtVeKqdikxwpQbLGtrkdApK347LwZL5YSsnB",
  "key2": "2X9NikSNDwx5JnEuTGWrDS1XkqmmmuetHUomjVLQFgEq1fyqepxLspwxFGGmzrv64ok67MTyj9od2vFoLTZ1dMET",
  "key3": "2x1EBhyKjodHG4xnTtAvDqiPcYVEu45KoVnqU5pZJ3VWA9xiZT84DRfyFr4g6qd71NpTLCTupd2zEoFozigGAUNH",
  "key4": "5eBZdHM4meP7AQYdg5vSimgawSwZknTzxrcsRTtUV4bzY4LpeMStvzQ7J8qP3vsmsoCUSom3xRAx72bghHJGbd1s",
  "key5": "3rxQPj2f81SXyQWEjbfqhmrte34FLjgrSzuzmgPopE8Kr53QCrbNbKCw6zUJhL2zwUnf7MzsJU7WKSYSv67DwCLX",
  "key6": "2eoQAu1mJbnJeGzJLzi5WSvgvvrZpTGmVN5Krvj1ueGRyMgufdPya4ZRgw5NxytsnMHQq9pyiFih2k3C4Z3YPt3U",
  "key7": "2KwogGcnU9z9RFj49DH9ypeSTohZUo7wYrZbfLcYyxTJ1w9P1gNC6civjQxaHZvNYZH66wEYjsRdnE3csX4AzHEi",
  "key8": "4B6Lv7K9usB7qynGeQMYG1yN3DVSwQ2mdhoiHCmuRS7A5a1FYfmaC5NbVVfZmXVF8QdWXanVc53R4nza6WxaXisQ",
  "key9": "5BYQJz1cu6j9zaVm4tQ3CY9AhJ5d2BLM8DKbE3QHihyAi5K3uHf5DBFgccjSq8MtCCsYb7GELc3UaSymq5qKJtTZ",
  "key10": "3BbnmTFSnHrVpSe8wAUpRVHs8Hu9LHAYkMRyn2ocJHva7jmCJ3Wyz28d7c8F1jtG2G6UpDhsNQfsB5rNTvHMVRGj",
  "key11": "5sPXSfQAL8iCAZ2UcYzBT1av3cpzc9j4bTzNfqry12X2F1H3M7dsdm7CVbw7EjSiGnWRLYpFGmhCbXRkQLum1hGa",
  "key12": "4KBpztGnF8SMP628Gbk2CprbGY2TvfB3TyjfKds6wjzeV52NEA7NFWvejB78Ux5tYYMzeiZAXFxhYf2ZLqJNxCwk",
  "key13": "5wByMgXTH2ogw1HmozDZ4dTczutCWgn18aFbFxbr9HQrGgNLz66Mt2Sj5kMAVY3SCztEafXs97ctvoTNkhmLFxS4",
  "key14": "52mr8surBcXHSj5Ucbcqr7gRmmcbbNTL9ZQbEefg9g4Yahp99TvmbCErF1W1L1dB8996dXrvReUoniK2FisfnVEB",
  "key15": "5gs5FGYGifZxhgjkjbm8jeKpgQxed63UDitN4XX4NTagpp4EMa9XjB33w42seoHxRmxWmTnNdZ1p5zujDyriwpPi",
  "key16": "GDy7X9rsyRtYAGFJu1L4C5Cd3hR5d5t5tkugLzqgfikqADAFCqFmXe9LkhuXxFZKyqd38oJBY5DyN893uyfNNNr",
  "key17": "43DgYC1PWwgn5bRQtdXwHbdZSVJ4QJZXfJayafJrjVudb2XbvCMsLgAyh9pnhxjsrhd239sQh5MtvCMUXNxcxLig",
  "key18": "5dgKWArorPPeTMreKpWSi26uKEs2bpkRJ3jVJ8NiMzRcN2ngUwFQNyuwtHQeHnerbjcg2ieUT9KQ51zfR29sm1Ph",
  "key19": "5zatAGzTHPBsnC4vXtt6ynj6T36HjDzYQKHK4dNJAnV5MWszuCsCU3RHb6WjLQtAcxkxFbWV42WuX7iVcfFv3t74",
  "key20": "2AKioCaF7u32CwbNYAJBdixQMeeRdXYmU31m6aG2t5XhK7yy36rwRCcjHdJdhJFUbQtxWo1cjA9TwoLj9R1aFVCT",
  "key21": "3cLTZjqPfVCv5TV9JEViA4iRAYM1zWeTcNrP6hwtfoF5Fto95YV1wtSxtETSdJ1PPuuf9uyehEVBb95xkyeMm2uG",
  "key22": "3Ro5VoM6pn28TeayKLo6tNKn2t2QzdYNN7yWuCiKama5fWCujBYiSU2Rr9bpEP52jMyT15zzk5kEFkJz3px6ETzL",
  "key23": "3wonmyd4Whcw2hZqWaADis8g66GFfSVwfzwCbrX6yfFRFXZWwjKRaqs5Ujd1ikaQfhPv39UvzNNhWJ6RZjs7r4Vf",
  "key24": "2tqXeGjUeFcx3ELhppWPFiM4g2K7vWiwvA5c9FFShWouigkwm3Y2k4Q7dQt4qWbwd9TPWV3vUrKW3H8Vyj58x5Rg",
  "key25": "4kDGk6dSdEFgqsL2rPwin8g9oopEfU3r98bcs6N3kZAoqu8bVB56X9aeZkZYTH1M7Wt9dYskkjq1aBq4Dv3Bzi2M",
  "key26": "CNGyQmSVuzgg5D8wG71DYYuMh5dJyTcRgTm6cUCgaiKTeZPSHfZtzVYCa4iQ55Rmn8r3oTrJ7Wr16EeuWP29iKH"
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
