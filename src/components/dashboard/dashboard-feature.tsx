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
    "3vADvLj2PAo2Jo6etvwMubJTjdve1RGT55rweCR2UkmoCm9jVV7QqYAnAdVRdbX6ifrGSbTfAMjUweWN52qe6QSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zcc9YrN97QmapPy35boTgkiGGnSrar5zApDjt4KXV7g1zapR9UUhjksBnrXGweNML1bJPyHJcyEfiUZaN1xqyiX",
  "key1": "5oCxWuBH9ryLAz2WRPE45RT3FkeKgrk2VhcNfSZbCCjVwC28weLDVdSh6DtXfFvyfruT9ShzJ11jUgFqQUp2vHXY",
  "key2": "5HzbL41bttKuSMcMqao9oKUBNbMXWShS4o353LLvBaKr4YjJTbzAs6w8oe7TLYy6RGyYvhv22zBZ84vhqmWLLMZj",
  "key3": "2pxvqpq1vTgRBhuCu7ww4skty2DaUxdTYHe6jFmAC2HpRBSu7qWMTD6aQ5Atb7wW7ZsaabWcQmKamU54zq3MayAc",
  "key4": "3nnrY3h61agqT8jVQfcLEvrztebwDUoLkqCMA7qgz1UXzYXtY2LBrmqCZcfAcvEjSoB4JaQzPt4AxHwhq3P3qjXY",
  "key5": "467yNscB64d7NMbWpqGWzwbGMp8yLKE9uBoHgRWmHcLoxQcfbL7qnAJjHLr4nNdzBtDDqE2PakMtJYstv6C4gvxw",
  "key6": "ekn5D2hutK4pr3HSdgu4hbe1yywJbpjmtfXrCrt2mrkSpsMVAWLkXM1PNVrbpicSarEtqqPe1r1J4TFEqKj2wcQ",
  "key7": "4nf2BZxomvQ8xg4XW1AqTFc1AT32FXCkNVHbvZniz1PtQJEE2jBkJSDMnCYwEPnrnoqMqLtqXpNqpVSH6kwrh6KQ",
  "key8": "5ehj7hjxHbViRrNhQfBDTFKDafPiwyjmh3aDCUfAUdrKZXBeshVDArFooPG7hcsqPtR3qqrmbmBhAmMbY6E4fT77",
  "key9": "2TMWaTfxevQ5abxNisqoCh6Z8EcXTzmMua4heuYrNEvRNSY9ihdM9uPB6m4mHdX8Byzd3pX1FBtRwxvjK8SFwNrZ",
  "key10": "48vYfmneeHyg2PFW8UxBM4weDfHgxjRyB7EzT3B6xms6V7EdUY3xUEmDyjAGvPWmSdbnr3CikcLqKMQqe2irPWaF",
  "key11": "gBkNPoCWNkeL2ydfXEiNLPYdUHEpPSDxH6aZoDRUNMwFrGw5xGsBTvwrF4isohhnjc3n1chRdFjPube3Swrgmyw",
  "key12": "3VHqJgCoR8C9NPBgHvHZ3XFc88A28PFzJhaVZ4L4X7ybMFMtttuS6JRC6MZp6kVy9ZNSehBbC4o3XA6TQVzaQ5xh",
  "key13": "3jEaW286NxFKr6y6trRJ8FbN4iiwTZ63Ce9VkPw2jWvuuDMfuGKqUJcsA6wZtPCYmWYjX3owexPLQ988QsUdHqp9",
  "key14": "2nzkfptiK8CNF85hNeyavBfb7rpBbMJoxWL49GcE2f4aR2vpoUwfCZeEewjBKNmgASubuRhwPCoQErsVsJa1iRJw",
  "key15": "2NhfwheNAB1wtHKa1GTcaztX7Ms7BvC2c3pkw7h56rJYR96jCzrLjQLb3mHWpxGyFQZoSpRArje9NBuRNbF7EWbm",
  "key16": "ATwJyaho8yszjQDTGitvCJrLTx2ZJs5x8V5amfpYRPe5maCS7gAVMr4e5EwTmEWfndJ2URTt7RMHT4MuzCQvJRi",
  "key17": "5sWdAVvZmF37PCAS7uqAwTa9gHDhd2TnZoqbQnFNEZPksVA5nFDeJtV8mfuUmupXAYxF1oKn2hqvbuH5kbD1fpXV",
  "key18": "49eDyYAsuM6E73vVbVcBgmyFFuvQYkr78vtpeqM7rxb3rufWTm7X5jXM9VL3Ty5KjHZpQGMcKDGxzT3wHLCt4eY5",
  "key19": "31p5JQvA61ui9Qy8wfv6hCfnRc9PqogQsDGABc13xsqbdqAfpeQGDMdUK3yiEzpVCMFeB1yUc79XAcQvEf57PJ1",
  "key20": "ZayHwvakE1FHezJkQ4PhMZnGxTUdbfpdpaKjEU7TtZ7cHGKZBLP3NMYRfggMBAKKaQXe6ytpKFZoCcZCgfDbsxt",
  "key21": "2TQWx9DN7FbXE5MJpxAEMrKQjckTAsg5Zj1BSPp1pUZjw9p6aksgiM24Kq2tHekxt2NEFaAds4r7KozHKG8axzY4",
  "key22": "2SXwYcEbYLo7p3AMZ3otQYMXTdKq2kk2Yo7S6ngFAg2pwb5im6Ms8wHuVUokNp4gbrxDKpH6Ge3G15thGnGCRTZ8",
  "key23": "8FresJk2kr6wt9Ka4UfVABHPywNPphezQomUL7XqzU2qowphbqW9R4eMC8UiizHwVySuKZ3KMePZvMWdxSddCXA",
  "key24": "2RUpBNuvrdu5t8rHdFBdzv7A4qduWEbH4XYc679FMCdeQR9XSRcZ71s6Kfknmxosy8h6cDhao26f6HwoKEMCbAT",
  "key25": "3Ye6Lx57eUM7TFUpXxsb9cL6F9R8kASRbYoiAWUYACUfDMUqKuc1NjQ63CKVieoVS2245Ao3DxzocoGvdfKXKihr",
  "key26": "39ngke3JbvDyW3fT1SfRfDedYiigDjch1LCSqMsx96R2YhDHMuXcNZ51ToWFSV1d1E4YvLyzWPJ4A9SMFNT5dQw",
  "key27": "5y6pfWQ9YZPB945KWWsgQ9bTV8bK7TuGtWcAUvqo5x5uTb2U91f57gCmv3h887qynzgkozww9zeSapirXkpVeEK8",
  "key28": "4pwLTz3HSNF5Fa5m6z7NGTfR6s7EZHK5X8k72xjSAazrD12B2S8W6SY2irZ3ZfSEcR4Ne4QNGa9G4LrzgZGT5ywK",
  "key29": "CT7aVs3DLQPLPP62G1wPdTc4Z8xA6oYcpUPa9t8BeJ1KRPRqHLckNG97zQum4fUuFUvi1PFxC5hdCHnox9Hs5Fw",
  "key30": "4CroJV18smqMXCFGHhw6B3MPs1q4VXV7oZEX1XHzuz75yUuBMNakYDs8PGjV55kJAVUk3cQfZH18xNmpeTyWNdt4",
  "key31": "4ngdgz3DEdno5WWE93PfKcK6yAi9soJhWUHrkTdTvvGYaBwabAr6qMx8nKqDf3f27J6r79ij7MC6ewoxKts5zGNt",
  "key32": "4NJ1QSpQLeC26gotREuKAGnWK3Z9HmUnVWeRYBkwhu51ChLMQrqAX27PYkQZPHTHh7wLm4iq1ZSLsbq51gG7pvmQ"
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
