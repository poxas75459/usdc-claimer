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
    "2itgSuXUMaAvBFXfAnWyBZ45CG2rbkbCjpFwfuhK9o4Y3RZquykF6DXwjqER7tfFNR4X2nHC7is2bqKVSm1txcdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evouRnHzxnL15xfE9B937FPxvb68qsrRARKxGqnKDwrG3Nt98B2Zb8ThpDskftsAaPqN11HNSWsfRdL2zL63qe2",
  "key1": "3DHi33oxXAAckXw2cMB4orJnz4sC7csjvFG2VvZswprDXMDZrDVqUURn73YXgseMiG6JzPWUFit6qBUJuXJ8JZ6F",
  "key2": "5qGhyrVSab7HHAuSznoaFF2GQBXhKeMnarxzWWCm8qSXWmHRiPZdgEfeDWNziyiqtZqsxwVKKgZ9vBEhKbVF4AJ8",
  "key3": "MUvSY96yCZWS8NuDHe6ncdfxJryBwUR7z3Upz2P8Yg3DbghBJktLusR9ruLdMkBjWtwb4TSJxp8564byRWYmFGp",
  "key4": "5orjgDSwGqxjmyEQEpweSiYt2uyYabX8KtVjyGAr6q49ycrb1hAzMjwoEfsQTc1H5MjsjZT84Qaq1mn7d751ePbm",
  "key5": "cT75BAbWJm9rBkgk5ksua2mbPYyfG3NNFZf2SjmSbfF5HRGqTYUT1rsMg3m3wz5oHihR79iagG6Xs6QPPLMeh33",
  "key6": "3k8J6CnAJtApgGKy6LRkTNpY9DBG8BczvTbezLiMGtt5JNXX4V2E2bSo1VjCSbRS6VvqFQHqvJLaV8ZAvgrhR1Vt",
  "key7": "tTwABXdBpaknU5RLEq1ncBayQbrMNN8ksuBNjAWnBUz99Bo2ysfkcJTwddiKZgf3Vc7pwNyrtAXjR48E92zxjvA",
  "key8": "2n29zPZqZMBwZzEmYHFw2m381rzv4CSajT7ADc82YA7K1YQXXTSMvjQdtzn1wkLF5GS1EaUPhCZ7uSaJ16GFwXTi",
  "key9": "2FHoGmrVSCJoNW3ascuw6m86t5R7n5asMazJdH5k5haPr42QDAeaqpCyC81WEzma9LSAF1M9fPFXehwkXezt8Us7",
  "key10": "5kMtZBqhvBNjfmRsbRB48DhNseRoEZtQ2cqD2thtwrgcDczU8KbiGFhzsU9cfsUqvL42XyDcKvbbd26yeNfL6RD6",
  "key11": "5GCPfuv9J8onWkBtEgWKmPK7igAPzFgtV6k5Sa2rq8bmugj6z6Q8kCeeQs5FowPSXMZiKDDURft67VYr7dZKpPUH",
  "key12": "UWXKVZZZye1x6Nz5Be6awKJGWy7wyRTjjJEHty6NqaS6d1f8DvJUnWeSKWxUSx4nuHZ1jfpwq3ytJ8Hx5oT9nM1",
  "key13": "4nwzFb6YRm2PSqEGsb6Ngk4L8hhvEVXZPn343bHbTfoE2Lrp5J86Yg6PgsxTb4f3WT41HahcixNWsAM6jaUASuLf",
  "key14": "2TtHDNXM43VFKswDcresu1MCsJG9SGp7QBQt2PBQ2K8VobzvnxVdazMGJ1yFziUen6dR2NKPFZHpMagFTdwBPxpL",
  "key15": "3hLrkrPSttdNaNxskSgPZreg8YovxR5nQBizuUTch9LkERp1YEXya2G6FAufePccRz16ix6gKkAjcpTggjQ6qjXg",
  "key16": "2oDJDgQvyRs7AUuUcAQ8isKMvargtxihThBJpLQqEngHrhkk4SkVV5ctSi1cbndK1sd8CEfrwBfLJPuoo1yC3CkZ",
  "key17": "5qo74y51hhxkYDbkpkTkrRL9s6ZQb6Swyrq7Cv1HBfz33a8ifL7HRFTytinsf6rWapahFboT6BVuWsTuDkLdSd9E",
  "key18": "3j6pY69GeVQKX9VZi6tm4QGf1U3V4YEFhz3cHNtdXr7Yvubk4aLf426URE2jb6DdKziZYfYSbBATnw4xErNRiDqT",
  "key19": "2wNdmfnpzw3ZM7aD1kEaNYgzF4sxf1wMCgCSCW8eKyfVCS3qJqoCmzVgXdjarRXzNM51gNAjBWDwvF37cmLH6198",
  "key20": "3jbM7d6rTGkDYj3nQousgpAEBnuQxGnWyFkuZjYsDwiJUxAAmsKta7Pzbwx6RmtZp69UKJgXwcsvBJvacGLsMzor",
  "key21": "2JCDo4rNVhwut3F14nPUm6Ffbcm5sjZtowe2Mb11Bu8T88haZ96nrQKqPQty9BCQxh7RH5GDequD4YXc9HVNghTy",
  "key22": "2RZ4ujB2m57SAR47mCu4qtGoYWXE6EhFfn6bwFd1xj1dkqurSTbnVPQJreWo7K1D93Pmj1dn4EJ6zDHKuv4FhZ5X",
  "key23": "67TJSgMEXouEhxPKavTaRD5UQm5qYrPw6GiWgpWYuvrHJn6hzXgWmdZNATst4WDoCKXn2iAs3QSJm3Ue5aAPF2CH",
  "key24": "54SWCWELUQWkiuJdRrgz7QGk5yMzQwmNaqdYTjMAxEqXaq3PdGGsExiGkXvFD33xGeiYmhCbq6DmDniyTJrbq9Dp",
  "key25": "2sZt3EWwprTTXmhXvQYrvJNhD7BRo3KKXWjazYt9SsD5gxzupJPV6jmV6G7KbUuzVGuP766s3TCnhVrB5NKNcweb",
  "key26": "44JuftYQVmBcmo2JT9pvLkzqRtwBbgLHTbrSigpjqoW3pkrN67LR4Lhr6Yui3jqkNfBaYCsGfx1oi6uT5tH2KhVj",
  "key27": "32pLdGkihyqdioyqwL9VsCMX3Wsu5Sm1LYv4nWmXLmhGYMYkbMyyJPNJtHtJxFJaUf7A9wJcPm4zKvBAhJdEkP5M",
  "key28": "3ZaiZoraAKDrXdK9KxPrK7rEnyeV2G4ajFWkmbuSbrFezQETYY9kR6PZZoTeuiRQQ9PcAvF7B3MU8uXhgUKMxicV"
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
