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
    "41jVt2FiCnwT1LJ7Ria9gZ7Ys5FSXHAk8CWZ8V8ZisNMSjJoPGd7sGDD6FSSj6MeujpkZ1GiqYGWLyKRyHJuW3DE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xnYwZ5Y8uSK8zkLoKp9JgGJ2YcWAoM3xrAZ7NH4ScYfvYHx5KGdB6M8vtPNQU9dPmi9vMtBJnx11tBv45RcLzH7",
  "key1": "3mjYTJMu5cFwWxfo7oskQuXr6mKik9yL8GaFBKz6UskiVmzauPbAY7nFkVqCVDu51VSrYdJpfbQdVTg2Pe8FkNEj",
  "key2": "2D8sMNhgEE4tm4Z5bZWdQR41oJoAFuXzz2jdqNGCiHrJLfTBzy66iXtVNawexYKq6Dz72Bx6yTfJXpsKu8t1ewzw",
  "key3": "VLa4FAGwNfVjhWKrG2iwRF6YqDBRJbD754yGXes6PUiUaMAnaDK85tcZvyHrK2L8TUvrfXz9uHULvnU7UweKvLP",
  "key4": "67DehSsjWxJkgoPxFhntSuL7fxJ3dTAaGYELvbEi5UADEoqbNW5ukodUr6sKa4cuUqv2Se9CzvcWHNbhKC1apQNH",
  "key5": "5Vg7oj6azHKVXTtPBasbUqYPDPQnoLRQz1r7NTBJTx5uqMPkswavapdm25CvdwveXMJLLQrDtw3j3yz6BdCg3wE3",
  "key6": "59G5tmby85YRzdgbDabWFEp9n2FMB5kKbiyLQ61Wj86tuXqbY2undzTVU3yQAYwryj1CsH5mMHx1fTTwrtQ3XnD7",
  "key7": "4L3qMXsPoHgAA3RhCdAY6R3qK9Pzb8gWWNUwA5NQMKkFCzp38oFLrw9u6p6NqrcqGTxSpunKkU5psGhrHk9LSTjG",
  "key8": "2WqdBvdamJDEeZ3q8noVWb1nJGseFth1J6SPzG5wuFX3tUeyqyXRcB6FpvgN339QjzUXdpAT1wkuokGPibE1bquc",
  "key9": "62Az8dm5WYijX3fYccCnZAnC4aHmaX4mDSA6FvgJNfyFtEFw56YQb1sdSWEASYzGioSQEE7oY7kxm21wFa9mi1bC",
  "key10": "2DUhfAQLNpEqKAGRRU72k5yH9juFuFVqBZYVXTnDK49vWWeNr4xozSZQyUrFB7QFdZfiZnJC4kvkZNN9k4Ms2cxK",
  "key11": "2JPzha5myuYWCmu87HFroJpWHSsdMFvJuGy8aWskd7h4xgWEikHv9yUe799cgFwmoT5LCUdjUQLhKp2hJvy7izQy",
  "key12": "QwWn9XCEw7zvWJtckESh8qXriDGLSxenBnVzXSVueNfbpPdEDsvNWXxrRTybMeH9DqtGNU9F6uXVbbBtzKZhah7",
  "key13": "49zs6UrNWebRAL8U6BGMRNESngP3zvMsL5niABnNRq2t4uTtc652YGNRqdwzLzGPAWK9mC979pY8WCCP6TaDfwT4",
  "key14": "2sv4d6nCbsGD3XqDoxX9LUKsAChdsfWA2khkAvm25kNQ4keuMKiN2HUfDVD81fYMHY6rVP1VMF8nhYYrpN3cZ6S8",
  "key15": "fHqrU6qL71XMFFraeLQYeWYVgwG8DfkYkYYEF1AKLAePRJqe2eB29fCbAGzKuw92zhtYrKoUbZ1qeUV3GpbRPZQ",
  "key16": "5wXorQc9wzUBdHW7iCUif3iX2VjSiEf4eZrmnChSPuN7x1FDzyAjnvwQX4YscrM5iygtLTDpJWk54SHSS47Vavw2",
  "key17": "ULoekFC2KphwEVEkMrr6iaKZ5wrVRDyEjByG4eGG5XtApSk4BdPUTSrTmJwgcyNzr3pmeZxJafE1cTg91dWYBt2",
  "key18": "52hiEawbGPcSpEcFjwEk5efvn9yxteqwCgsWwkvhi5PNisincGb2K7aCHNRBJqquNZNPpbmkyuvfZFLhoBvFq3Q6",
  "key19": "4f3oJ1JLThkVqevfctbK6J5iWkm5FkULhMR9J4867HH3EXkittSw9ts7uHbcC2T7shYNFSx1m3NX4wSVsFqHtr7j",
  "key20": "pKGuz2BUnMS33xvSJzPcYHg9Fx9dbLzXTph6BJNQZXJ4Av7fLoxVCfg2DYjT9RKGj8kaKNnWG4jQ6VR4WrerUYu",
  "key21": "4gaRyT6SdxFC19cojsum7SpicxFPUdpWaPLDiwzbfEXYV5Mvh8CNjDRNidtg6Fk5CFw6CY9E2Tro1VyhxhKuU7rS",
  "key22": "V2FGnDoqc7n5SMkXNGJuKjrCNwcGZJbbRcDaBcAc12x2msZMHJh7q8pax1mHLudie1NHxA2ynGMQsWaF8VYejHf",
  "key23": "tuHLERvc6V47YpyfpBS5Gn3ZG3Am4TuAuQerfqEeUc3JMQ8VfnQR1agThMqNnKPoUmnSyV4T72KToyaDH8C7DyT",
  "key24": "My1K92tvFxC6MsQcSksvTdB6XtQSi57MaUSinjZkWurQDrM51kGsDPMEFLVdyyjSAJQLwvKGpdahw5GPFM3CGeK",
  "key25": "e7xtRgUzUAuNwRZcHMcdUzKRS3xLSszc1imthq9gWHHxyfaKvrjsUwqhUbYAjdoP39eYnc8MdXRs9QL8hZYsmUk",
  "key26": "hrTJ3eBjac7iptPRNqKDE4tGwe3LwugbKqCYcfmnpBQdXCKvTaJ43DyTYpUwbkPtYk844TGMkKNKWggdZM2xJKh",
  "key27": "3fU5WBhRgEmGZMPYBNVs8mn8twwVFNGupUKTqWf9pz7rf3nefHfAk2nY7FdeLHkTCAf6e2G6wWtidaFSS9FWAuos",
  "key28": "5PxXMchJsZP9oDbywW6JNStETA2s1TSYDrEbNSgJapBePNd7brftjYbiYnfgzPZroc7zMbyMcqWsv4tPwdtEKHWy",
  "key29": "4KoKqjPdAy1Xahu1NfEhBh5URszYyKXhjmu97eKvuQjwRvt911MioeXfZXVoZB32tX4g3nc7Sthjhw3d3sfyHURg",
  "key30": "3xRqWozPfUpaFLATrH2tvnB67UtEKCP3EZcLcxqTnVNHMszgTDLPd3PcmQTeBnhn11CBHCQhc1n51d793TmZDHvQ",
  "key31": "sGTvZaGEEYZQB8f4B9Fi8dijmE8SMzHcqp7YmeZryye6kgWSzzPccr2LzNFEV3VqYZSSGtzQWcHsEUMfRZvBin4",
  "key32": "2heUQ4aSWMCxqTKeLWo43JPkyHECTvNXpTFGce6jq6oQrZZXLQ6yZPyPxUcc93Qv34cV6WE8aXEb9aYhGRyuKq4C",
  "key33": "5cEvYLZo1cEYi5m5s3qxJL4NGbEogVHqiySV6qTzrATA9UqPKDBvZQgQLCDhw2iobnF44dCTonJ1JiyR6toYZYLg",
  "key34": "2umR5uhFBAACoD2CJDawDxuqZXbWF3hmiPhKJtsJw3byEXiHVPFAeNTFkRdhUaGXhotTemcy8aBKTGzRocj5NP48",
  "key35": "2mC19TbBLhiAmagAk2FXG2ZN5twC7PjZUf5YetAU3qBUc2ckKY8StoTZckXJBoV99x7cW5XoJw4LE7jGLBzU8s3r",
  "key36": "2dPCqL6DZkooUa9cUQsCft5RVok5qRXABb1Q5YY7snMB68gUu3dwoBNkV6i9GHrzmA3XWNnQ1ymB2aYSxHD8giGH",
  "key37": "5dMhMpZYoLPJFWvnFgmoQ9f7VcBaiLEzA3KAoda5embk9g4FTFPUrkFwM9fdMKKwpXLgfW4ZVk6PjGAmfrDoJu7T"
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
