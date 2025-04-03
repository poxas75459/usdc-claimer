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
    "5XXjUBoZpwWQgScqTuSYXsKbEKBEoZKBkkLHYWZGNW7LKEdUSiJdj5RyUkC2s3vo5vjnF97X14dmTU6BJWSLLSpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dDJc5YUSccBSRN35evVuzwq8LVSqFr6kxbvXMbehDmWQzsK51TLcEJEanfsa9wN5XpV3hEg386eX5h8pPaLKBD7",
  "key1": "3RZgjzxuYBbzRRrQEpmvpUcD8UaQrd7MF9779rdsjw1TmVnNHdz76WLp1LpHDe9JijrbBsvpoAdCfm2io7gdQKs",
  "key2": "4W4ZF7uSEDf2SFbnJZuFQ7FtyeKUScBED464EiX8KLF5n4uDkzzTK9Gjqj9yTR2kZYr28Z9LdsmrEcQ7tiSjE6pP",
  "key3": "3ztrpT8jEMd7VEM7ibKN7zmbewn554uCL4XFZMqeXcLjv75eWPhQUXWJELqhWWgoFJjRSn1zaBm8dxDquycfbTT6",
  "key4": "4kY7yr1eNyikFWBCWQ37NeW45168DUZ7ABCFS9PFTHaocLs6NNQFT4yLF4vk68h71MKG4xEogFi47gB4QQv6FRid",
  "key5": "3vAHt2wbd2Fe8bcMSxeY6id2xGJQcZc3amcoPLdT6x2ru1wZVaiyea4vd3LT1qPWLsFpEuXKpCc2rULka86XRDPe",
  "key6": "3Uv6xzD8t2fqNS217Sx7ToeYZ6g2UyHcFKTLvhRbV8XD9DtQDbq1WzJ5MHrDpnsHWkk7gruLqqfYTys1t6d2jTiT",
  "key7": "2u7bKZHzKRjxUSQ8wVjNVQLQ2LUKa12b6WDDqu9j1vFWQXZGanXLQmPqyJLf2ryKmgGWUJZ72jYMdq2HNcV8ve4T",
  "key8": "iCwiSQZvQjUhMadc1P7D8FuW2m627wwNneVeXaRTSb1aP9j62Y9WDcuvEuGEdLbETpwtAMcq6kFpc91MLVwAWKq",
  "key9": "3RproQW94eHcDZnRCJJ7tgbbZ5MXB8AgM542YB14uU8RoUEuqTywvVrFaDLwXxdbkzqWMdbVk1Y9qY34tpCDGcnv",
  "key10": "51SWPUtheVsMNrkJRyVDzPdvMqngguLrKxoXBrAJvNVXpAJz7KnRzZTxVWe4CSApy8X1YUFL9BHxNPSSbymwbGsQ",
  "key11": "3FEDRpPknj3NLf8BJHfDPnQjun9WjvuuuBkrmJXqm1epm1KeC54N2ML1wQoE8KdHk9nuWAtSwoye4xeFnQhEF24K",
  "key12": "BHpAVD24yCB2koAThx6U6owYUUfEtAPn8pFJqyNDyRzeKsx6gZhtXchMrcYjKuCzcWpJimbQgn8diXJiq98s9G7",
  "key13": "45k675CZ4rZSSyyiuecVsGo1C8MXfr79NxuQ8gH8CnL4w3X9XKtJsQQKHvJz8GpxWzS7cKgXz8S2XrYBFkP4d4rj",
  "key14": "bPUneECAMGaDxcZKeciFV4vZiCnCAVNpQzHzSVjY8akR49QmQ92ikYEAksP76pgNwzABA27bKhJQTFFmKbhqr7m",
  "key15": "29xR4sk51ZXjdbEoDWwW7iy9977ec1LmEvf2FZ2QVMcZk5RPBJqNMZpVzw998kaLNsZzvRifEop5xTQ8C646TRT8",
  "key16": "5Hm5nNQ2dVEjoz63VpwYcuFfejCBGRPBsodfqQkMTcMp9F5GHuP9TYDh8GbVawsU1qXasTwNfj6qehneA8D1w5Nq",
  "key17": "5C49VJUJHVnWJ56dwX2JBrBnKX11c9XUzzfFsqb9oUbNquZBfPYj8JapJRcUboDQ4zrMm6MFhxHkn3gft2KwQ6Dn",
  "key18": "crbPiKj4RXRCJAAtMmsvxfyqK8fo5XbN8aPGdjaV6Pb2vxNQoExGT9qGXQkMqNhUmiZvmn1h4b4Z9emqkRGmMFn",
  "key19": "2FEhKK9Mjh6zvBs4orCspZ2u3QCP2G1L7ziLAPf1rfBpezmPAk8KxLRpRzSJ3Rvy3TcWQppbRQEHiDEjb7WNEpmz",
  "key20": "3TBGxySKawE1b8GEEejTiHKc5imuPX4Ge5PpbSe4JuJnGRMirjAtB9uvv4f8fdJL7awi3wn1dXpPg6mijM4RJAEo",
  "key21": "5ZDYETG45dKugJu754MZLDQEti8bxYZPvuN1a6bRJKLvYvnfLgeWEwnrb6GrrR3THG6PimLuhtyPM49TzbV4WkQJ",
  "key22": "BPCYPtxjPrsFs7m6KyzrV98LaKMsTabq5Edd6msRdf5h3hTFWnYHpQQkonUAvrZxLr8AxoMdt7Xithk1M8AXnic",
  "key23": "4iVN9hFKBJJvWBiZY1V95eH43wva9YUJqDTyC8rFFvUEJYP2ZvQG3DaSTTzeX8gpcLFi8tQ3iz3FsTnUpfn3cCjK",
  "key24": "3wEGG1EQEmHxCdU73LEXNw64MrUGsjssvbaRAzqM5NzKpThq52MGCizGvnNb6uxNjYvaNnJ4fsxbhjGzwCDrPymS",
  "key25": "63dYvWApMu25arxQNHvzMC9ioJjhNnLfwjajap3Co21SjAMeK1EJamqdSc5PTt1JCQr7X7zogn194CHUSm9qN6dZ",
  "key26": "35sT5TPQzqsS2VqNzfunEfYrsFsTBGXK25oLAeYZcGpZADCQffQoVz1X7LcQk7MFrXBGigXwZNfh6ZGM4rHmeLYx",
  "key27": "1xeKt7eQPWQvzJ3Z9WUFS5VB1GSfe4xMm5x5rvi7YoUgAqRcerD6uBiwoKZyCCmPZKKtbXqztQD6Fqb9yxZGn29",
  "key28": "Q1ewnEERx6GcDauschrYFNtXkCDg1JgrfKuXvs8nQ3yLtCtdiyFXteLveUCkfde5HLREr1eXQMQFtP9VayKk5Cc",
  "key29": "3Uz8FWgSEJ6emGBdBA6965WHdftEEykQg4EdzaNKp8oWvmcgioYiRdneKU7bAtoQDFZ7y2X2KMsUqmqzYy8vat7u",
  "key30": "oLpTUMZtv5aWYxDmKrb3xwKeGKXF942FqmYAWnk2tHhnxMvapecTFuksA954CftP97ZnTmiFSa5muZRjnhNqQyt"
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
