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
    "QTqq6GkZAfNbpyXhDU91tduv5rYaxxWeFJih1FnQbGaF3BfV45rbEeX1bUmn4Wk6zUSgHfKjtgPT7RsPc8fAinn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Wm9PPyJ73bNyun8c36hhjHQNJY2Dvx8VDFizNAGzU87ugR9WDdjRXccY2Yyu6RTSV8NfdEjDbaDaopZXn6c7Lt",
  "key1": "3fToMwUEBnEC4qbfwp87s9tv7xzZ1hSQ1Lyjt3RAEssy6eQ1hQKZkoRa5K6EAiPzAQCr5JrkHv2LuaWchVpJJLgL",
  "key2": "4no9AtaSr8HJfKUaCtqhkhFFRoknuAm2JA5ZcV646QJ3cPv6FsJJtzQqSxbB9iBRwzhfzC6BuKC9G3TCo2FtkyWS",
  "key3": "2YGVcxjo4kRxgiiLC9FaZvxmqtms3ceSvsuQqWhGUVnJFC44rjBwcWiaXBhQJrmrbKADka3cKVY36wtDXwBjSvcy",
  "key4": "655v5gZQZRemxEh91UL1jCWUffaPsEXQXH8qLgbmqQAezYZiWnDVJNcckAaLWHfZtBKJq6X7znxbgi1zoxnpm2Wc",
  "key5": "4aN66AqAAaepgHtNcEeM2RMiLUHKZJhw64iJmP9Tt6fxfKHz9PzUb55cvwabwtPaSwXzHv2JhnaDW9jZad38Wm3a",
  "key6": "A4snEsMb66LSK7PsfufYRPTaGWd3p9ep4EyY7rBuP7Hp52HegXvAchN8zpmW3FvG37UxCaLL9MG6vuMcMGtRU98",
  "key7": "2fcvcrbV3kuWvv3f9kJdEzyiW7xDFxCKqfCC6W64T6BAV4Y6r12zGVWjxPENyQkkmwYhMrMw8hJinPDBZMis4EJ1",
  "key8": "2hz1U2ptgXRBUmhFK6oDzNDJRzFiV9bUkfappww8UXE3y2sBHQ1DiuW7zTM163XAdhHhwNNhqb9zYo6RgMDmmoLW",
  "key9": "4ouRtm75AoXpRtjpuHiFMZaUSiUpC7uQn7NAiP46aHE3fkgxr5EjQPCq1ZDnGQNBgzvu1tKyE4hdSd9vS9ALM5FY",
  "key10": "5dKoY2zMHaA4SZoVAy4bLedGSngWDZ3yU8T4mntveL7Zi69wbftKuLZxVAUhJKDauRMCMXN7J8ANDfNPaaeyrrz1",
  "key11": "5fENdbduScUnwYPpLLfFSWaDgAcDuxg5JWX44ibi45yy4u5SaijSKDHaw5gaPM9AZQrHwSTHPvWaeGUx8E67c3uT",
  "key12": "PAqY74pT5Q3spET5z8U7DxNXGJdwPR1QEximJirY7YUSnwthn2Nekf58ig27tMe2Zxf2ev25DonzfXfD3H9833B",
  "key13": "4RZj7Qo9WdT7VGmhat4XU3zXtyrtW3qcad1iDjPzguaLxvmSrcDPawedgRKCHUseLG6ggA2GtLi7nWKwGCaJw83j",
  "key14": "25tkZc3T5TQbP4qXWaXMkdXn1hnjodBHanBtZEAYbL9ZcGHH2SvzMS3DVSRAs7L5NY5GEaZ8VDfpmXb4DmnWoFcE",
  "key15": "nLjfm2rzU8bvPpwpiuF6QGZjVSJuGcuFEvbR97CAMHzNnosYfdR6snnAgZZFiK16xNwFbk3r1ySW2A2Q4RF32Qv",
  "key16": "ZiSRmA63obYdp6bxEgz1tJd5w5Fw31jPRTeYrRHG4jWyyxd3csYkGESfyGjLULPeRWxQnXB6BzCvo6PtaMXN7u1",
  "key17": "3HnT74kHb3b8y7QQFPJCRPma7Y4V1nGhb1VXUH4647eUAWhuAZEfqmeN6As2n2cDih6ajAw8RbjUuoWstnPbZR3w",
  "key18": "XdFycYwXszb2dPp7zNuVGkmXtvuJZVgpquv68sGooncD9egmH6wQhoduK9o1SfRkvvSi4r2X57gf4PbHkhasGEZ",
  "key19": "3GwZtYG1nsgkniLtJJuiF19GtZnRC2CoceFfaCrZyRDfAk8HR888p4FwgxsLjNBYGRPoj5AxkDtQNb3ugB5Y7yjr",
  "key20": "33FPbjWzqSAfs884tfr7H9hme7uRY22CQ4nBznEeMt7ar5DdqLNnsZobX8NqBsvKgr1v4Uv88QHuU9xezGCYF7Er",
  "key21": "3esFSSGXMF37QwgZDtSAukpQoAd7aW7aAPsqBYbDa5wXNS8FUN2KDNMQfMPMo88bDpPMPGheqDfSPYEUXpPJgWgH",
  "key22": "4g72jR9awYdFf5yTve7P3W5QdADgfvM1mm9c1gQzTLwKKyz6tJRcVJCNpGXaK154TnAMPRUGzLgs6u8SZLY3r4b7",
  "key23": "3TrnttxSp3go1pyXJyZJBZekG7XtfUbX1zfbPMibe7SDNdh9A24uLywrjr7Req9da5wKQRKtnwydrNzVC1WPvTUv",
  "key24": "5uyTnLxKP4YyfQH5qkYEbV7gYNUqefQzgyrAjZaeipRSfoCfK5G3M1Ypf1RNg85K19KTaFHLU2SQe5Un1hAphuYc",
  "key25": "o3JbVq4rihajMoZmG8jGtS7SK447kby1U6n8HYQfLyp1uUyQno5T9xBTAzrqPwjKevWYCKBZGBFT2zLZyg9VBRb",
  "key26": "347zNJm2yGJQ3i5STjUV1c6fGQDAE5PA5EQ39DmonfVKLS2yt7U37qqEDUUtFByFFgR6s8k7N3pajEru1DJDZy7t"
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
