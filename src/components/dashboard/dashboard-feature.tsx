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
    "2ZxncvzBHr18PT86t4vE5L9eJUFzHfvCkCpEfjPCVepTYsx6HKw68h837UzFQj61nawy468VLzEdyrdgWe36pQmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZ3pg2GG2Ce65UD5gEyk6WSJ1VQGCMa1VgcRdrvXEPWSUygCK76juYBmm8XaVgHBdxr6bGSsqhUSwnw81ZkQwnR",
  "key1": "2FZmeNF5b2e82pqvSK2cL4mu6yTGLyV1U8NSwjf5uEKAxNA9RMUBfeFf6LJSJc7DP3eCs9MwBNfq8eA88Cp4Gxoq",
  "key2": "4RGoSZgQ4kuUGtvfKQ653GEspe6wLkbTnmJwvCQ7vaZPVjJoUdjw6h2yw9fSvpK5UD3PTcVZpMKiRYSL2v5nK4nk",
  "key3": "56ne1s14MXim5YYsiW8eQiyRPv9ENhQr4L8pSSp7H9crtUp3oC1FmH97RPsySrF9KYc3mmpC1XdTrjB2Rqszopmf",
  "key4": "2kK6fcWa7jVjbA51Ksf5k7uSaMEb7FVwUFcxDvsnywft3qptRBxBXRHkZKb4BrLczt6sjG8qiVC5iVfrLSysBoYP",
  "key5": "2AwsjUcxVabS7vRnahjYAtbb3FyqexicXpeCS4jYDFwE6G4E9fUL1sLwyAurT3kQByEepbokRUMLsFbKbSBJqHbW",
  "key6": "3EMsU67Ut9dvKuA1icAX555E9JSyZeaLmHeffErSoAzyvgBxdNrL2ddsaUNdpi6yLdf9XtELSRntt8eGyRHzM9Jv",
  "key7": "3YnDiFn6bpwEeLPQoiR84Uu2zci54JWDbBfYGDSDTjUjwcZCANHQDXj7FPKd1eLS6AekQELbAaihtd7nx62iMpTA",
  "key8": "2huyr31SLFyqz14Egb7xs41PeRDztKJLvJNGf6MSiwbGH7XRSUxMLhVjr7Jyys1odNgQ8dJH3FvQKPR4TU3L9RhD",
  "key9": "MiPt5WEZGds4AdTZQg8rY7xrwEPwsQPwrnEG9mHXTtNUJCFzcnMKcidKGA7ARatWkscUGHn8ubc8DsBQ3aVoLh5",
  "key10": "4YgD1qpiwXXf92xHoaRA9EvX6k8NEf9FNE1GLmDNqFj573DgHfmRjT6qjsKeTFdJ2nE2UGsiwM8kbbwfF6VUwayP",
  "key11": "2DsWvo3YhNV69o6H3HxALixfDsLagyUXcJKzgq6qEQvkB88t2F5sR8iE3v3iUpSUW4718SfxmppmR3LB6xZRF3Hy",
  "key12": "4hKAyT4bG4XsEwEAtE2KvksvW7jPHe5AUVojAUL87fRhYV7oxKFyqunAS7MC1JhTYgdunUWC2cTisXwN4xvhVrUu",
  "key13": "jAGSv48myT6g6Hc8HwUpYK1z3RZzcb2pb4KGfJaWCc4i7bqwUvetFandc79TkqQzrDPhLEbgnWRWMAFg5Sjbrnp",
  "key14": "64381xXasuAhDeRsMLCE25pQati7ca3tqy3dsKffq1SoxZ7GQxA6F4XK2TatJC4TygKtdENfJsWxNB6EJfLxvwJ9",
  "key15": "46uTZ2jZiYr2B3B87DbCxTmg51QyHDDzQuwPx5itC6sYdhnvbVaM8Hd53TUGhsHiwfQdnfpeJ345sCALuyLJ8Be3",
  "key16": "2msc6XDZNmueWuvfgRZvDa1SYwYSTcqqDmZULTxL3kYS9NAW2GEvVH5ByGggW2AW9LvPBsUsTP6KQiYaBMZBCV6E",
  "key17": "51Re5k1622Mmv2jsEgJymD429kpca27op6ksnTYKNTb9djkK8P6rqsb2VTFJe62jepMFRZvFtSC2j7j8nQN58iJo",
  "key18": "3WeKHx7KDPAA2bWgvjHJBHH11MQFw2Yjb4AhZg3FrDzdByM9BWm2tH96AQkPF6tcpTn1woLWwJRtXVau49BFQPh4",
  "key19": "23dK1Qj29sRCRvPanR6SafPz5kAMn5AVgaKoPWuxwhqRrLKBP4pwQcdwwv4HB9yr3BLEDQrmq7Ro6yy8Cm3hZevy",
  "key20": "3JnKJ7H4xf5ThxJPug6GzVXqqqx93cCz1xGGWLEZApSWm795XQumBwuCSyaFFyi4idaSzzFgU2xhhWhsEPxNAh3X",
  "key21": "2H2jqxkDdkA7TjAszu8gRVNDGiYHAT5FaHtZzPHAkBaEhwoZfMfSNUWETCGmd1zMf43LSuLM3nbmmNyjUzSQHFwQ",
  "key22": "582j7iSWbk3sXJvoU6gac4LBdhxHtxKoyoNSoeNk9cFECkGPkmipQVa9vFYC18ww8SHBAnVRKpk3C9W3X3paGdFk",
  "key23": "2DLoW3L7hkcASU7vhC9NsqEPLPr6mH7QoxvvPhnF1nEknF2Tpww9D6XdbSCqwpxvs9Vf2qnimdpwf5iNffa8rjJ5",
  "key24": "7xEeHvHSpjMKE6Ckt6mCTgD6r5DGFZJSjSueHQdWuWdgVdLX7tFAf6kUXjpa5W1VrEHrvsUTZ5eKpyHrFFWaBe7",
  "key25": "21JiXW5Z9rhn6wCLgXM1X9BYuA1JhREmu1RFeu26tXzhW4DAWHSn2c7dDjABp1QtAwxnwe42TkfgEebS8S6xEp6o",
  "key26": "7e8dYmfP5jbdVKrm8EHpje25bTWMMDYfKtgKx3eKHbsyGizod44fshsA7HYKZ1UHCeGVoXiSRE4kTDEjzhgEHjX",
  "key27": "u7jPcHRuFfV318zt5ZiH4jWXLfRBofk9UtdukkiuaYo6DHKzNefcuXUCLVS5qZiJj726wQzyEeoZrsFYoHUfpap",
  "key28": "4o6RKo4Cw3arNLNpjykU7vQihbmfPRAm67kX82qS2gpLr26ArByA78ykj5z4FeQNYgQkD1XCkrfyBTJxJSkjgkHN",
  "key29": "dMTdiDeN1wBkES1gCYnqVzrG1P4ZpasCdspFos7DoWGVxcXzqzntUXcaytsuhPeKuHuRuAwtuy9TRtxV1gFxGMj",
  "key30": "543j5gLGetKGJPz72VcrE8UhBeuGbBTWQEMVKGsgec7DfMD883tHhgEjf8Jsa6DEirntXbNd1eeHV7E3rtyjcsrs",
  "key31": "3VDM6ALza6CW6miU1EDEQcW1DtXzZAurZRxk6GJK6fC2yrfo8qFSHon9mD5h5ogUq3ge9nzQzTY9c4EwHUxL7SjY",
  "key32": "3k5HoGZ6bW5jdS35Hv1DxgU7qDb6pNt25WA4GiSHexGv3Zj6fegc51nFRW2H3wkSUMW4uoq4M7zT1HLLxnmTUhB8",
  "key33": "4ngzs7MkLCfUC8LSTgfDkbZJ5rMEX7ARsPHM9yCutnmTfRPkgcbd9G2KaoGz67U4vLqW2YW2rTQvFrfaXoiH21eU",
  "key34": "5SsjU3QEZ3WjnfoDdi4Ngz2YywZjuvgu8M1KPptHdZ8ewAkiN8r89ossbJ4mNTwGdtfb2P6ZDqZ1P5cm6fW5EZ8n",
  "key35": "3XbZAS3utSzx8wnn98BnfzqwLRbDq6tPagHJGu2C6DyVC8gjbPpciksL2vdsq4TR4TqW3yqyjzyJwJhBGR4Bo8bs",
  "key36": "WfQEsNNnXN95nsuxghph8EaKYCe3hAwfdUdFG8Pzv7Rqh1qLxMiVHhcEy7d2CGHxtWbBZfexLkbfVjnZz2uDx8i",
  "key37": "62BA1Wu5uETGygkASrnRQ4vwHatV7V8A18ju2SigbjpjAen1uTeDRcdsKapkbWppKzVb71Lo2LEvBpEBzm2cV5oG",
  "key38": "5Aporzraaoc3hNxBTJvEX3Jx77kQikMxmEDYvywW7hqW3HXuLjL9uHuP4Mv1rRo9vrhx8Dm7jb3jHbRiEzCNjrQi",
  "key39": "45n4yYw97otDHTBbtSXXeE9qJRUtNVgq1Wb2pECHUXRq5QAZsf4uG93zB3Z2X3WpCjLvFQ23USRPeUmktUZnrnSd",
  "key40": "3sHnuxz9nNp7R9UD8mnw84NyZtjgdZTn6ZXCsSuZcy4cscrwghQGsRkRzjhNp1ibcDftXB8tXPfgHHqEMguZq15p",
  "key41": "T7e4E1hxnQxjezsANk6Rw617C52YZRXjTnFD341tUX6QV1YcmmemYNaVN9mV2HyUQfGEJFvfM6cqchVza3a5evV",
  "key42": "5RARJ9twuv9Uwskv6J8bSipNQG9iJsjP8wv1ir8JAhCwmU1vx2A51Jf1MydiQzBoHxYBjxtF49QpH8GFKm1onsHx",
  "key43": "4q5JQAceAqadFhiQ5u6sL36GMKa56d6G5NoWgeNtoaBRsLmExAoREKMkehJLQxKckF36T2fCqQrX2vsfKG1Nnh23",
  "key44": "4aGT8ft4CVtR66ZrR7tvP2yJ58pxRwBJbx5XKmjK4dRZXLBqM4n3BduaUC7MtocT46PBec4jZfbYwf7WcDKhW6Cn"
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
