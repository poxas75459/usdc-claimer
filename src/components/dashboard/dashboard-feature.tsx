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
    "5vygSk2tGif3NRWUp3UDT5ZX5bWmJxo8XFMndac4XjQRkzMAif9zehRcGB6oGB1mBYw9aXpZQDdjbKHffQ67o4M5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eQ29UxqU3Yo355XBewFgf9KCvzJZJWpEG5ZR614CZLEnWj8pH6AEfM3wiGFGFanKt7pKYPDWt2CrixS643zC7Kf",
  "key1": "ygLroNw92eUnd9JNVWLzYhr43JUUizH4AmTHbNRkTT8CrY3rzQhFLT5sCU4iAGdkpiHv9nUayNzNFRwrWYkuGVB",
  "key2": "4E3rdj4aysBTbKyszcryEFkPV9GstYMz3qta2DsyEriHmoaGM9Z1AnFe9RRxB6K8V859qCE5LWy1ynss54XVcNFg",
  "key3": "2g2DP4mAAooUSSNbvtHMVczCug5i66QDjTHJ5aGePuzRaqEUoHevSZDtgQr6yzHEUeqmnSGQEooJ82KvJ59XrabF",
  "key4": "5zrofdCCY4pefHkpWtC4N3ct7nKPJpVQMAXqbQbkJ3yT7smHCfoPjFMox2GRyDiP6hi8xCLdw8GxNgv3Z7o5ZEWR",
  "key5": "2vMPknxbaTdeTVmxnwve77BE1qapkz4GvJgURoGqy4sU14TtaaiZv4RFpz4FAwfQACXB9jBGTEDF8JBn3Fm1KxZh",
  "key6": "58jvnH4FKMxcuzzbWfjdRo3JdK8uC3dQKkU1kcUfHnkdfvLk9XAZMREYWjGHrEiKJXGnVWg78rHhMHiRqw2oky2T",
  "key7": "3dZiKw2SN25ZKMebrk2wmnDLB9keMFcAtELffGyyFqvxX7kST1WQNX6rWHKr2ScmL5mx1ffwqcYM2GeswHiu4tD1",
  "key8": "58RS5DKTt11mZW8WrWGEZJ1wJP8ckwnR2SFDrJoPUQY2mAi39uv86iRuzVgqarwcFZnfdHTgL7iD85pm4synkjof",
  "key9": "4AdVM3yEDoodVtaQ8NjSfHhZLTeNgDkSrjmV7kEsRUAupLij552CcVJiRnS9zd5KkYYaZDA1ESUEoom8Q9aDQnZv",
  "key10": "9FHVLoQBQxiqUmDE17rP1U6PQeMr6iZAHhAbjaf9goDqnufc5soWgK1vqmaacf4V2ryZXY9yqfFKwjvWhxbw5i5",
  "key11": "2p9zrmu29GymUueuqC3XyQsY6jSztLfBdufHyvzBrm8bqRYB8sRVuSCYfPprpeKMag4BbfDtavtW5gUHgaJ4ffAn",
  "key12": "3xDksN2G6KkMq8QMtNEiwm8YH1jP2aVTKkky9fBJULw5hLssaPy8yaLL7u4kjxvVjZCwcJGXPZM2ppK9pEhQZrik",
  "key13": "2DNnR3e8jvH8YDA7M3H7WYGDZtnjBQvHfPeUmsTpDh2M45VCGdgsHE8bfHqF4gGPLuUahpeNikxN654bNa7UYAQn",
  "key14": "3PTFqRSXUyT1fusB9NFqn1cvSV2KkRdEFsJdLLwpgd8tTWVVAkcf6VLbXJ3N9WRwZ37TVo1zeKyqC7JeyJox2rHf",
  "key15": "2N1WzBTo9cANRP1HBNbAMvqezACJh9dArZWQ6o29PUyEwUmYrVDnxsjZRNsQLZqAtJZfF6WQja4oUoSm6Dp9m9et",
  "key16": "upX8nVMZb8D53b51ezUf4gMRkq3F7nyToMsm785j7GrWgGE6RMkpb86RLtSopz3MExiSumSf4F2YcyD2MtKi1We",
  "key17": "2ZwRXUHJf5Y7sYfuSzk4jdRtibDFz6YyiwkxeW8EWCPEbcCEvcHX8ByWLYT2zUAyBLdJdv7oonGZY2k7qMqKEmTW",
  "key18": "27au9S6haRjvpzQ5kmWpvapd6hUCJMvaWV4jBNzE1GgFeHYABdfeEUAGXZKMocpRrWS6qN7xGA45SiTf7eZkEpxQ",
  "key19": "4A6diWX4zJcF97Ebrqj7XHzScBsDXLBzkqf4ARnTRGXGMuHp8J3tvxhd4oLWdpqZ7kJjjx4Jc44cXsinb6THvAA",
  "key20": "5mKqLusJBExhptx2y7iVzhXhcPj521Hm5rdbZz8Qadf53TUVECdZLTdAGASgJUpDx5P1KyXLt2nheBFruyAot4YN",
  "key21": "4cmdqJ36vENRuwt3UDoVCCk9YDEpbZuhAmHCqN11AVKcwxgW5wPGcWscXhgTJqBpueYEHoyPUNMHPT2owmb1iMoa",
  "key22": "5SMLamwrNS1k5JVwaNijvQRmSFwt8DX76TqatajjbPVT3HA2zKTy4UuvkCFZKV86Y6qdUdvFvCtmdtx5B5N2shyf",
  "key23": "2JncQ8HFvSmBBC3BaAwrRzgnDZyuKEgdwGbasqKv4U68Psyzt3AftHzwhESxoSUjcx1FUkBWHD1B5X4cm7gnNycC",
  "key24": "3PiXgFCpUfjkitRhhRzXSbe3mq9BaoPCVwfCxEHgXEW8GQRuNyozR6BWtdH1yHzPLVDUBdr5PYPPmgD5A4uUQoNA",
  "key25": "5ScNtLQJHvVysGXdo14HUVZzHDSuCXqhi8GeTcSg2Th7T8dzKkDV1QBvScYnryvndaLdtzd62pMQdGDoGQRSKciA",
  "key26": "4JytMH6quG7fvJbpoCQmt2SKQ8qZJxYmAeYaVFxu44ku18pDGYRqBYSoiXRFxD4Yk2eo9ZRkfFmaAJsFnUgJ9zVc",
  "key27": "JtMvhFJQ2LccTZZ9Grkaq5NgAooPuisEfdyyzf2LqQab1btU4nttcJT4eXcQuVQvks2ttuNWaR3LZaUdfrWqxFv",
  "key28": "3MgKxC7bkUSap5WWQm6XhNJQWysehWR18g567DCxQEXPCDDyzr6BZ2Wru5JGvhmVeU3xeHM7coVP4Zg2tnSpbaGm",
  "key29": "yyoRgno6y39F4UqgLEk9c9YS4cHrrQw5YJyqzt1etfuyxVgefAwpqyKzrACT5jjNbZTad1aosrahNnPWxiF4rSG",
  "key30": "4PVXaWBWwKHwy1wUi8sjxoAagMFewm1w6bGzAmrwpun62Yjf3cqKB6V7hWRCvBaXMibJnytvdfMJzVra3wuJghmh",
  "key31": "m4u6KXcHVodmYdzdZT13R8Gnm2xKMJuJWC3UzbGbuKBzifJyjSYhKaZCFfoayQiSQ9rMSPYrCMptRRLnU1howBb",
  "key32": "2xrc7rgQXmwF3VrJfihLchVcGg7fZ9tsPt784sVy9Wbwzw1nsnVAasy6GZXxZqYz5YiUxNYAbRrj5R9bnkZwEecY",
  "key33": "4pKK5vyESVL9pxZMNAjwwbVSXVYo8okCgdX65UMThmTgnfGqt1Z8chQLJc542KrRP4rMsLipvWDpc4q5CWABEmhk",
  "key34": "2AagsjAXK5rRQ8PUDR21q1bBE11DwjHDo8ZuqryLXMavBPztSsAN18Z9xtxKWg2mtLdmVrF9NR8JZNZXSW6bT3ha"
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
