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
    "2in9zVhEjDhE9VoL9iJJLtgwggXdRf9eYULB2auzt3AVrr7FSoMhxTV7nRgVMMEDskdNvqPBCXf53xNpXFFSX2M1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bK35bc8V2WsYB91MmibhbRBkghdpKrT9PmyGPEoXbkNY9cDkL7jXKTTTRA88HVZrivazrzTJo9SGxzQGHav1sGg",
  "key1": "5nB9qtWw76eUGiV3DuSwfpLM4cY8vhNVCufxx5QfkU596xmBLjh2EmbH65iV2HvyGm3n6crsjw8wyXbthnjECgUY",
  "key2": "36VzwiphZWivcuRyzwFDetsxEtfoKhZp6Me4VEecuQVsGA3YDxxpNzBMQPLmYnrffFSVfUPJBwUibv1Q8am7oeqP",
  "key3": "LnMA8uhSwo9ZyQxT5S2mD7FVTLhZEHQTUPqsWqxnqxc8hKPSxF2zkRpFDKw7kQC6EtwPq7CYL6PMRxz7mHRCkv3",
  "key4": "4jjRZqyBdid4Puxzfm9UrpiyY6uhU9SsHYxpmrRRks3aM63p4xD6tcEJoHJocCTaVjrDriAuZTc9GA7KzorL4o92",
  "key5": "39oDv2PtAktHsiELe6Ws1RBwCmnAMrHpzV4cuGBH84Jk7NMn94p4CEkvZb6TrQEGvjWa6FDr9MgekGf3qsWUjQbA",
  "key6": "5q6n5hYVJdEkBwyfD2qEvEb87fjm5rgCMZPsspN9VkqtjYUh989tyUrqh3VBepj8k5ugyCp49MbyQgwqHe3bWVZ3",
  "key7": "fXcbkXxNK4aBeQircMTuyfVfwdpDEGdvTJyEdhFhymdYkSQg96cuvSKMXbQxzkwk8RarD1o59nTUsntWeuxiV99",
  "key8": "26EhMpzhWxkHZbqZPVvtCarQBQjRb3E7uSMNVuKBmeKPFxoU2gPomo7k7orgZeYqC8ZS9i5cZGKDY16fs2vvkC4s",
  "key9": "4yjrbRaebM9YTP8kx6GzmsFj8gvX9Tnqy7NaxPz79ckjfErvugh1vLigDDqafMkykgxx2CGZzGrSkGdrwvMTFpnh",
  "key10": "2cYh7efFzPy7LLHiesesdAjginALV1zVs2H9kte9ayFBNCMSMMsrRzMYcfapo8XwWe9PY5a7cZp7u7BqgQUvXyYK",
  "key11": "5YZnZVsbGewqPdGnnoCzrqwBuSmBEtorHEU9pd25LREXrsX1K7APpqFboxfbBaGNGW14ioNw7RWbR8NH3pBPpmFE",
  "key12": "HHJwF4efzBfvJK36BJPuzEatWgT36rbDomafXZCTr3au9ThBdQSsnqt3ZzaivERXR7oAxdaYUG4mPXxJtro4m35",
  "key13": "3sFAsanpf5jp4VhUkKavrmuNqF61xy8vuCn3gP2Jb9dku2XXUbfuwAtY17Dzasowe4mPnAhwc5UZmKGeAtbhBixP",
  "key14": "2Qcg6ucK7XsQ9QDUUh4ggsSvgRLNM9qfGB4BfNm5G3jFvvr83aaMJ3z3Z5uRPgnPuE89YKsVMeqmVc7YjbY5s3kU",
  "key15": "3qPiw8g61LLCby1zU9mC6gKuQHkB9ifJ7HGS4Pj4JQgYFif5PUnUMPNPryJM1BGsqDSqvavhaDLEj7bLUW7DHFj5",
  "key16": "4VvvRJLKm3v7zZANRMBifxtdF5xQ4RJTaNKHRZEzcNj4Tbs3iVQdUEWV2HRBFaEbBMrGGjc6NqPBojPMvgEVdJy4",
  "key17": "62FxzaAGYSSndmoeUF7CCW8ZQRx9ehz6g4fRnmFy3GSr3Lu4JWidTjetowWaCp6CK4ewcyTo1PDKffjBapzuY6oN",
  "key18": "3ZimZrZKBKxUUpW8BDzEjG3UTbp9WTeqcv85joPwEscRTRYDoEp3DXgTkkhEZmk4FzHW1et8DB4XBFpPTem6Bd5c",
  "key19": "4RzKTLL7u1LGDsQ8fMsMR7CHfEu955ng6ButqTLbTkUiQzng1yJ2Vc9ZXRwqyrYi35Zm9KZy1q15WAhauKPBedJu",
  "key20": "52Sn3zpdePeMKSnnGv7QBoefifenjvsbgNwoLL3RU4abTQgURXySUPJfpQYFgvRzdQR9T7J6EMPgMvN7t6UXC59a",
  "key21": "gBWG8FF567GFwhVwJ1CZpW4J4P5GcTvTYj5ReeTycXocYt6VULQ16LysstPQcLL6vvtcxn8udai92wHctv8epCw",
  "key22": "aC2ZShkhEDwxtHdcgM8SYyvqWQBHrdEWerFxVvN2VXmJr4djFRapVFj6Y4JpBEvKHdY1Y9LscA8TWx7ipvnn86u",
  "key23": "2d47NDhk56Q9bgCmAKX2qTcVw19478GEwGeuVin1bXq7n1pnsnGgwfMUWu5WWb8Ea4jrDux8UmLRA3AMTEa7HVvS",
  "key24": "4Vnnbmk6X3WbPDDMyZKHiHBR6zafQV2zLFPnENj2dfAxF2DMVMmSihMTjKErJAQfP5kQ2sVbTuraeMNZ7H4VWxwe",
  "key25": "554hx5AVDoPAW23L631ERmsBx9aqCMdsJL7KCeCbUcVhstewo8KnRKmjAwAEUKtwBChfaBhX1EwiVZJuvkBTjBya",
  "key26": "21GttvAzkeG7RCduSoDNsxV5gi2o6R2XhhKBWSXgq9Dwh4ZKSrm72phyCgWK57roMGU75RVSWFm1aKUpWJReWbHb",
  "key27": "cEjKr6ATE8o6mZCrPyfLE6NfCvMgkizvC28KSEDXmgE5E61RH68yF6rzB9oAryfuGgKATbfUbwHBK6816rRbk3F",
  "key28": "XacuJ2s6XGrEaEUqyLbfpHcuSuVRE7HBYVYeoRysRotiVAhWEVPDhzX2jRn7SJxRwRJmc6JrkR97i4DYU5nGVDu",
  "key29": "4hH2vwsGg95NuK1pjJ5Fnnfbh7uyVZMzYMphYjJfEGbQLcYazyS8BniyzfsSfUUZStnzfG6SqXj61g8JLpm2oWVo",
  "key30": "64G3VNMQWcp7tAZE199Cc32BrrncBm3eKqbZk3ZByiGTpdjQAjAXb1CU6mCdKA3KQjpDK82F8cvUDgS7hHvBMNBx"
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
