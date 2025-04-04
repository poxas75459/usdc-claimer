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
    "2WVqLsMjzXWU9UBgmcPVKttN8v6VnFu64ysEjdB1LXu9XqmWFZr2YT77McyxbUMXDbzBZPkszUi8CL5cuo3XDC8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hWpnWRY4BJhxAXkUsCDSkq96u34Xu1HYt9taRc3ggLTstEjxZA7vjjZwmMFpB75cqnicp3CtaGfKGb2jGimQDCe",
  "key1": "3QyVHhKJCAoDhTmXk8hhArNQXdWtNExnYNMjC7ExoPub7MGKLh3RHZFGt97zQoApkpQg3w9Zsvyeyj87qfDoSZzK",
  "key2": "3HxJoy4pG7ANGTQHNALpfw5oxGxHKWc3nBDtYQQYDjrNK6LKkJn8C4wKCUqmWqdwgyetz2RjTwGfK68TUhs8j6aX",
  "key3": "5cZPB364K4DV4xvCDghWEcpScNndWsGZxoyUXXBfYXDVb8oJ9KcL7CDvFisUYdU77aHEYnsPdbPewd4huakw3Hj9",
  "key4": "3sU6DEYntWpbBUDYNtZxEBvkmgkrfifmkkfifQSQEXzxbkzR7P4ibuUnSJ2YTUHPdhWF82LxyV1BKG6riXApbmaU",
  "key5": "51cZtq12iNLkTMw5M9Lg6spQFzQUSe4XA4n6V5xKGbNpx1TdTYM7MQZYr9XLLVrUD4ecTy46BHbuMeA7XLBNd1L3",
  "key6": "5uo3u1jobfSArXas2Kmg5gAHFJQt6jYV2f1nhh5XGpF3iu2wvV1TsqpaWjgiQQYfE688tWwpbnjJp1qk9iPJyo9d",
  "key7": "4gyxE6FH7oYenDPDmee3gRDQsJsn6g2EovucFAKee2qdA9iK29JnwKqjPs2KXkLEEwGdza2ECjkHKMPPuHYrrU1R",
  "key8": "622wxCbbBikDV1yJwhL1y9MQMUgCEDYgAxygMtraEoVhAodhX78FZ13u6dtKh1U3Y4MzrusCm6xxBuKCaSmeeSVi",
  "key9": "5C9djGV2v9CJsuSGZ8LfUqZsQfiQ16DAVHq3WApiuaLeq994Tj2v5EepjC8KbGg3GhhmBRtt2T1uXTDYySyUXmft",
  "key10": "4dnMgUsN1zMLWTa9gZPqig8ZRUWDChsyi7pxX7yHxyyNUAnqdYMPf79y6w8HxzdovgRjTGwEnM7jgDCCAkKYLPRY",
  "key11": "5dLejSdroyuHhfNK5zULpANe4bJ6aNGyEVMFv6nukYVhc8V3P6rMSrS6ETcs9dissfbPYVfehuHzxEz3NvoJ8EUc",
  "key12": "3r6TVgBohwtUNZpxZMHTmmQHwuXGAu9XLPjuPawQLvM1x926PajqmU1vvAb8irVaAXqZrx7tyrcDdAb6bqVMuVmg",
  "key13": "35mujh7E417nJnKaR9jnDezwBTY7E8mx428MyV7VbjrE28ddksVsjhVXaKKW6UewXeen9k4pFyQDtdqAS15L36Fg",
  "key14": "4iWkcJvRvy29ausxnksLs8CVjZkkKsW1BPixukPnymy8o6rLAZ4uLhRxARsHndKRWjLVrVG59pxhczph6pj48ZRU",
  "key15": "3vVmKvxk6aDbB7nMsJJYVaXZwwVSC9H7GzGYDMVDrMNqNKxAyUBLmuiwJq3Yh98rx3gt4M7a2UeZFGDvuRni9sD6",
  "key16": "3hdhuZUSUhLQD96LbydM3VoncFDVQKQdNYcsiZnfLePHTXi15RLNxvewR46jvsijpizXAsabTgy69TfHSvwJbFKv",
  "key17": "4swQyemCdGFVsr2h6Dcqvm2c1vSpJoZJ2qtTJ65g6HmbkoUo2346nUUjvc5F4kSreXrTFZVTW3vnKkDgeNJsakmC",
  "key18": "5J6s2eDCtJkiVVczemYbidfAHgCZ39r8SV5bEkP1cg9hAE18Wa3r3bpzdkyCR8RY2KjDNr7sYmaZvkASaeaCV4Px",
  "key19": "2ujnwdbjtkbR8CU6XLEoDDsoaqWrhxTGfjTA6h4Ffvw6n1hFboeTYF83ESAyyAMSndT2EN636fYchzRcv7TsXxDC",
  "key20": "232crHXXaA51WeCMzkH9SM5yDJzSFF3QwZ39Jfs1yhfLdkjMbNRYhfGqb4MLeFZyWWPcvUJugCJtuBJxA1PAtAWi",
  "key21": "4xSGYHJyV8bC7qpjMZ5W6CcQZSej8hDoC2xif1M8JcJfACwfArEcyCADgP2UjxAcaHitritLf7bUXGsiegwmToyF",
  "key22": "3Q1bv7j2UYnB394jciAv5jHHpEw78PrDGLUtzhK16VTGW4eYBtZ5Pz3Lc45QqdmtLxpyt9y2Fjo6YEFTYjn68rg7",
  "key23": "kNUUVSN8zitd679m5qH4GTU2uk3zW4iSJmVxMFMNf8sBWEcQpMvAKxhsxcfkHvMQoxkd3gXU4zB2q5SEyibAdwZ",
  "key24": "4GFBq4nPSSZSv7au3husLtUgAUFTq1q6VWT9apG5GW2NWidc5mYky9gvn9SjoxA5iCmvgVpAxUkFnHsKPxgnvWtc",
  "key25": "5hi3XRLhUvEG5KQvXcbmaGtyqodCmBSeFVa3w6g9bpXmQ6v5LtLkaAZSLerL871BC6GbLivFRJ2EfF1rz34Umn6c",
  "key26": "65isEzHMAUn5ZwL1hEpiucL6BeYDXomEkyUa6FtzGeMkSa1JwZfEVMeGbr5d2dQZzyaoapxPVFJ5h4PpCPeWUd2f",
  "key27": "63xmFdV2A4eGbtMrdVgiyB8hNqXnz2xe5bSVdUu61Nth6MNG8z4y6ZvuFsi8rMWKzXZvydigUsmWkbXXzPL6Yp42",
  "key28": "4gABsELGvN8XBj8i4yDaF88NJsQiD21HuL7G1pzSH2fDnL4M915vwRUBEt7DemQGkKR4zTb5suRWRnE6B8F6y67g",
  "key29": "21v4HYV3L3Q86EwoupVvcx8ven9t5yhzPpGGMockRvzqT27rpNc8Nv9EiGqofHtxhCjC6pMeaQ9W1kNJuRrRJF8m",
  "key30": "4DSw6pS7NReS33jwgNoNN8FeZT3gzkVwGCUstTpL26YQiaQyJXjEf8fQPmPdz3tWA1adYSnD3RVQe1qrXobQAeow",
  "key31": "5XGULvShTHnhrKAbUBwo252XhDrSNzBcvr6ekomDqgJQaRpsEni5J3Nba8Vjgo63V7JxhFAsJh1UKeXg6B7B6m23",
  "key32": "2XnB1TJtrgjqaCGcUKfrc6mmjWdD9t4kqH1rNd3weSpRnGNzk27oA1p3jDWXpCYJVDos1E4LX6pkjYpNZuXZG6uc",
  "key33": "4as78dbXbbSr9V6dYfbRt6Pji5PjaQSc7XFCLmmpmXj1HYF3Jps45g57k4kz3R9DkqrEamCVxbyrxF2jp7vfhpAz",
  "key34": "5YN3NLLFDSXRqfAb2g7kB5CtqbyeF8St2mErPeoXAJQHw2gZPmfGa9eKeF83hg4h8PLTVgdBoqqJhy3dRVq35F3m"
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
