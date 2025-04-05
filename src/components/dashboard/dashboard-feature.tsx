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
    "4JJHo1iom1wLaVyK4TVz5jWX5Us57ddXRyqPwN3EVafHFmh4nH7SCCiG1quJPLDVjF6tVB67fwiE7Z5wT9zXYMq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MgR3QR8eS5uaa3w9Cw8iei9WJqk7kqnNuTTvCDY4PU22Tvp8F3cTGbJi9fiFCowxqsS45qBaBYDCXS2kH2FAV5M",
  "key1": "2zLwDKLKo6kfUULerbWtGhf6yAh21wxon2DfHhPE8yoJUHEpLHUE66AqFTNwEzwaezsLBNbfuthu6T38PyAuUVEe",
  "key2": "4aRxwP96VnjBkvbnEgTU7yJ4DGEzkR8WX9MB7JRLKQxjGpvRugwxWMA48oWPZv2CfNwimAKXExCQRKMwY4Fm16uX",
  "key3": "5TRMZAWXyj5hLT9vUCiYkDrgWydGh9ckheZJNMAXgqQqbtw6fNQX7yBjxawVfGiAsHGSdxSUGmYn7BsdwKDc4RdT",
  "key4": "4BCK726pdq1R4NQhtHKk5V45RU7XK7sNRrJNErfJzKub4p3gexN7311G2pLoZNesMctAkCGPuEdtu7QctCPR28YZ",
  "key5": "rykHHwy58EuDs5erfMi2abPaTq9MJk4RZPuQjvzrLMAAHCRuweVnn6Y6NuSRGW5GaVNbNybUuNCTzmwR1sbbzoC",
  "key6": "Kh2gjzDm2bRPF7r718RAq1LYG2p1FKzrxdjTYxcz5LRL1XTEjQFJJsdVfVYKd1RdLD7Bdd1bYsMrbLScHyJ2zJc",
  "key7": "LyrRU6r94wyQV2oKJFVtyiXh3GaAtXhEbwHkCobYtUknb2EicvXhShEX9fMX9CcNtqkaLNezNPPQLdKcB3WDf5e",
  "key8": "4zJhNfRXKKz3k5aC99vauDfR5WvQqMca4UJb1amDGrJ1YKyuivfTxWTXkL5YishgzQM6dP61xrjGpAsZnV39PiQ6",
  "key9": "5h4iZaDPeXdEAg3wm2bX9jXEgBSfUamvp5FsQJC25rx8juVBvGxTR3uBbLnuP1wqMhMBHWTxvnSmRf9eNpYGwkFH",
  "key10": "2YJkBD4gp9UstXmd2S7H1NwSf3zMjrboW9pEUkcTi2EoJ1K5rzijoZr6oKnjJYvyfeTod2vidFhdFmEEswpzdJoq",
  "key11": "2TMuYKztsi3pS3VrwmtdHpG5Mr1JPjLy1q475S8uWKkrRRvyTLYWz6yvJ3S3R9zEN5LrFNRdPyRmp29zJf9sQEQU",
  "key12": "65cq6Ai7wEhCNekVLWurbY6uzT47rWP8214MgfrE1byu6A6BKAoQ7EujW6wH8c3zk9xhoM18fiWvho3BKeeSNU4o",
  "key13": "4Lq2Qmrsf8WXmCfVqhoJ3QTMAQDKsDwfe3wYTGiQuyw94dBJpWez6T8MbSB5PXPHDDrVqinDfxsBFR2qcq631rVN",
  "key14": "5vTZex7mfy55KaoMdfCJUBf4skS6eFpWdatCHkdzkN48eKs2xswvXqNBhgTx6Hd8TQgqs74DLfxegYUD5Ld6GgcS",
  "key15": "5DTosogzWnT3AuksqXVesJBeU3z6YZU8ZautPjrxLhqMMtvW4fBeJFRirw3srgVDZAjX7eyUciMHjJCJxrV6VA73",
  "key16": "3XPNifHrtff48ZFawjoo57Ew1FXiQvSeqQkAZo25uY5SYbV8PSNFPcUGpEVoE854dqnrZVCC742QgjEttfRkNd8j",
  "key17": "3tRHBqxESrLn6fDKeJcTZdAPV6HbumV3kUugA1EiS1LVVWu5yK6xYhwJrcLVhnHyTJ8tF9iJ5koLD4KZiuvT81Bz",
  "key18": "sgNtri5TK4FVy4m7jdFU3ALcWRSW8a2nx7FgGanU3vG6EZ5CUGmBzGPPhGL6nJnxcqR93vx6yKocUtVY9cZNuJb",
  "key19": "56Ug9B32XSntuY5BqaMm1VcjRwEiBvX2CBW6BVngGnm42w3gEVh2YFvkenHj2CxJVuUae1v3ekSZYDstrmu3SEur",
  "key20": "4RipF7WEYo1puxYwYRoEMZaHaS8Qh9QB2h35TQCKqhhnqinzocmiELcB84U6cJU8y4j46YALrUmUa3Q8razeDpu1",
  "key21": "4nL4UQimyisLRLemdmjoByRENdKp4ziqBQhkQD1iz2CDNkq2AuWHvUhMBVwfRzpemNgjFTQApp9RXXAXcN4R8JwB",
  "key22": "6XoN5yDJwNavffufbuiQ6uWsj8NsJYHTCfcCSLh5Xy37WHL1xJynEH4H1MgedKtgqf5CmsMaHwDRtfCD78wbAca",
  "key23": "3jDRPuVMAx5xfDBLLQ51xcUqMnEM1wRVNnac4axPeWNkED4ubn4mqcjuXda77AtFuecArhG3JmcGXHAAC5jk8XLp",
  "key24": "2GnjNjy2LnoqC1g31tHxHRPEBvC4YPUMKMAnzQ9KjbpJnFFvhgNB7DymYU7sRfwTgevbb3qxDtvGEShdQh5BFMgC",
  "key25": "3btxxtJPyZ4aXqg9bpRg6ncSxARwCg8N6AU2wza5RAshHEgb8xeyvzPEJpeuLUfWvzton1xKCU9QykQurWtikYkh",
  "key26": "5wfu6FR13DfqrNGwraSVuwK3KfNo8uWbJswn5oaXPZ7Sv7pNqP6dbSaqYYnpNVcZZK8KpdN4DJqU6BUiT2jfLgpj",
  "key27": "3RiwqaLfWfH6EbStaU8NXhKmp9RKbM92A3uakZ9wf79yGXqcvcpgq2pS5Pbbk5XGbceiXpN7D8qjGR7N5DioBsEN"
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
