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
    "7qc6R7A9opsbaZUKeb1UijRkbUcSWAnWFthzLPd2Tb31LvDQjcTt9AGqdcHjGry6cpBzoazHWrMPVcURpaf4YXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UPotqraj93rfhSGtEzBVCCFeL8shGHZXaT7rnuXJtvpbGqXArskpCAhrtaDNWo56BihSmDSi5mkAH2NhUMvr7xE",
  "key1": "2X3zkv5x3t8YgNeWPF5E7d3GLmTYzv7eBVP76TzfbYHJiCorbA6JuMkZUf3989X8CF1SrTBXEwHtKkNTNZNgQKuJ",
  "key2": "5igdn3cXXvF2JNDePmbBouCpPrao6gXewL2WUyhgTMsCoSpMPqZpQCTR3y2wariiFWu7Sv1FfkN3A7AjVd9CY1L4",
  "key3": "2KdRM8avvs7wjDasksX3Atq6W3hDvwr1YWWZCTcjmLsU9omJ4hQgKiwwBaL9YauamwvrS8xSedAzbDSjU1s44Kir",
  "key4": "3upbesoqWZJJkgekYC5CWhGuX8o9pWVmJvYoPjU5YxZsg1Z4NXEyueYZziRdtKeGDS6v7jdHvBUmd9hEw3MYVYrQ",
  "key5": "2GpCzLXGNH994ndhWLveAdrLeyPjcoVEeRx9B4Dy8DFnvN1H2Uf9txLXfg8wQHDCZ4DuJtuTe3QHPmiGYX6daJ5U",
  "key6": "41eV31SF5zNi7hHo2KwtZdgF4Tz34i1eZ184PBHcWNU8A8JHNLJTqBMY98ABzYaiheySV4VgznM9Zh8BCtxz5gPr",
  "key7": "466xU2jBzigAwo6PzFQgus8snHzsbChHyorwybLA6KBR5ZCggH6vBFzMHtkuoZSoWoisGd7BWvVzoTqtzjT428P1",
  "key8": "67AQPyPTAQVe1A9NLXVT6cfDYttSvg6CehsLTFE93yTBYra7sb2KT9tVdEUMicoBhH2FGCRSQTN6ZYXPLjxygDYv",
  "key9": "PM7vRt41ySZVB9ZTbsfqCA3BiwjGCYWH2m6EFycJs9kSTHBvFMDd3Qxhe2XtXFhV42K1JvWvsJSKBTGid1vDcnu",
  "key10": "4vUTiEnWBiE1KbRnybMB7e6qGXCw8fiVRmmeyiteiftxXuCPwjqbJbPoUicxxnMMTDvYQPpz9fYK58kZhicsibUu",
  "key11": "5WVXvZYVQGVZq85ZvH96NqpR2Qvc2WcMiKNqZZar1EmbKakgStKDAwXfHvMJ1P9314sCo4LxZKGLuVwCqy1L6u2e",
  "key12": "UGReZA2S3JUnsZWniv2HScVHrXV4KsXM8GBU3ZtDFwsF2WfxvCmxN5U5A1WeCyWtzW2j4SE34KLzA6cBSHeRLJZ",
  "key13": "3nigdL3oa43vHQQvXdbxtmTUD8qrWFDasbcDC1GWQLB83vYcNcK2Q5zYH7Dd7WGvfb5q6fZ5PPRyfMi6XjcvnWTG",
  "key14": "5doyHedFx3Pkwu5dNTV4QS9NbA6kKt3BmfVKQ7jUSA16DthQgVYBgyrKAXoyHpY7LAbWA2VwViPK43JRAHCsAMTW",
  "key15": "5dvN18EBXVi1RHNHPg5jAsvQX6iZFNW5Had9XCDv5ErjvjXjZFmR9c3hg7Zc5FwmE3CZrKud9Wpcdb7sp6hkN3A4",
  "key16": "2jvAvjmmXrqVLSuLPTqNxr71GUtUEmWQ83EzFsbXWH2WsyzmBC8wU932GcoM9FH4ck6zLbRBP4bd34w7vGef25fk",
  "key17": "4aWBsamYAjkL7mhj3NVmkZgNiBrXWMxGmTaZaeKBcH4RJV1vVgnxJgPwHN6nZGCkEaz1Bj4FbdeuekEWW62cm4RG",
  "key18": "2JX89ymsEzRVVw8vXzrBpUqEg3gs6dHALrSZeHBJ1ANHR3DEBZjiRUrNJh6WrTAZ7uGgEDqDDBXhoU84zcaeStXj",
  "key19": "3xUYq3W6ecUSY7Z1nVm9e7KtPxGAuuwqjeq5w3T5wXLRhVFtN8KQeqXgjVRwJyYdt1vdkjdHzh3Z2KmEaZY266p7",
  "key20": "54xoeXUrgeQzKMwq29vKs89YALMGayRCX8mGXzdCxCxPPSL7eBQqaxoL85oWPdgwZt8RtYvhEzDBTMSNhNRfvh1V",
  "key21": "3h67TuHRL9yCJwYKwFDhMmQkughTZWPco5Avjt5UHCe4RhwsRk7ipQUfhE1i3xx8j3BSjKkvUaqZHEsfCG5ApFMT",
  "key22": "7BEupmmSTBPmUVkNYUWvWNGvwuixh9D4aaGf4LTzWJaq7D889eoWBPFEWCsWNpUP4hnMGodLG9e6V24pjJB4twa",
  "key23": "3UtJxRKEwCZorZCiC7UGDAnmpBRQvE1FwwDLiUwS5wtXKukJcd9ojWpVc1PpR8j2T43keWpaDAmEL7U9MTk8GDhW",
  "key24": "2huE2Xq8k9emm2Q5TUPPz2GaAsma1dHKBeAbH1jKLsJLSr6TvbyUjmBY7y7rdfvwFf4PVbSXmv5RA3FHVbjEET8o",
  "key25": "42wex6C5H2ZWu77w3jBsUdQmsncHVbYE24kdibL88uSX1suMBHM91amdyNPaULrKsxqdvXuutbK586dhxPJq9yNG",
  "key26": "3fqNTr7QHgpaiikzk39DF3o49Tojey9dmDnC3FbG9G4zvdCULrnAoK5cs9ZzvosUDojCQi6bBv47X6kQFQYRJRud",
  "key27": "4xJxDDPDvDc5mN3854aZVDLJYo15EZVRc3SGqNBofbkHp29aNhyN8zTfRXQogPkQqayTve31KtgU3qgmN79ngaom",
  "key28": "8hkxHNA4iBx136E9n5LquQtd8fkm3kqnSqUxNe1rcXwuPv7rDKeMdBte88LwJURgfUr1SnHPCZ7Rw1W2yHqoGb7",
  "key29": "4Ah7ZLZjYYQEe9te1pvjsFwgDSnaGstBzLKJuju3pjkUoxH2hfcy5yFqu9FPpSqqjb9ip2waCccVhpec7Z5DBuhG",
  "key30": "jUaaee1yDWCt66wcBYg3J3h6EMTdbB3QoxCGta4TnSiqPT5AzpJ2MYu9niwsMEWFVTmQza9GvP6jEHtuWb7BVos",
  "key31": "4JsboQ8Jq4Dbjp5Y5wxqVWN3sGs1YR6ShJabJRx19uEBhqFht8R8J4qfuFbKNYChEt92ZM4e7pcxbshA22foYaBJ",
  "key32": "4iShNFiEUxKTVBwFK1hjSZXYRJpNEmfzMFqXBKeQakDA4sVEt4H5vakzJVtix9k3BLFmEp5eskgeQLsDqmiv6qM4",
  "key33": "wUuYJc6Swn13N8AB5KWU5bfZVJhkH8dZiaYTyjA2Tpj76Noo4CWZScXdJPBNayafTLHGKw4zsDGYL71ju3PSVeo",
  "key34": "5S1gA7yVEGZjgUU9TWTpKc4FLM8zBxwX12SZSo79PWGHcq8Ri7c1n8hNFr767Pw4jq8sDnfS2Wif5drxe3QnNik",
  "key35": "3Q4MSmmupGiUyMowwiJrZjL2ii6hG9dKmRy1ZX76bhzGgH3nPLqpNKnUeeS9X8ytYm8XjfHTqZSQsQVKsgcF1MLH",
  "key36": "2KvjSaxDcywwK61Ci4ExnrBaQqVd4oQgxXYyPy7wKwJd7F4k7ePFipDUw3u5usGf2BV31VxqaaNM12XrLDSuCF7R",
  "key37": "2Kfax1kVXsB9XNXf5rDuj6SygaLXVExLxvw9QRr1zePnquiJdALtuPATJeeSSf24qv8cAQLpY63rcDc8vBsw2xM"
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
