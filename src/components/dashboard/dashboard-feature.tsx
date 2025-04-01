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
    "5ZYcYuhuZ7D45vBfheEReyC8SNM59wMTZif5ZbK5K5fF2q58xwYRbeMz8rGt9xVa7ExZnLubvHoaHUkQKu73kKky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52zXxJuejNJu7RPVnnBs3oGr23eT5NEfvhVWsn3cp47Sg5uuF9RxcyayBdYjBksBxzp2SzozLsAW3iaArcaxJadT",
  "key1": "2Qy5HnfKyYK3nqEMKwFbGPpg2Emiyxw9JKrVGjzZWYNnDSav2ASXKD1zZKmPYMgDZmaRJm7CwbonpmLBn4BmpBZT",
  "key2": "4aRA8y8hQ8e8Uzx9dSxn98Bj3FFy4djx7A5QjmboPwQcJnNRKYxeq3cxNeoiJG3eWm4kLJsoxRrzat5Ch3GpLMnf",
  "key3": "cQKkKC6wKfUTRhft2RaU9RQG294WnAZmocSubDiEE25UE7tbtfZ84yf8NsQSCmV6E2HD5vzuQgWf4x5PNi53Xz7",
  "key4": "4d4vDva1WfcDEBUZdk2h3LgmZ9nxRdFCWZNUzBh4jJChfZezRsFzbeGzn2A95DGaNFgGM4My7g2sYahEGSfZs1c6",
  "key5": "58AAXPQ1HvZD7VtHx7pvHwJEkzox5zstXS5D4J5XPsQ9XxdXnX9qpoFL6GTGovD2fcUHnM8bKwKckAyfNrz6nqgW",
  "key6": "4ktaHgQ4cQ5wMnB67dGiJgh1cVgJWF7q74w7YpY8Wvy9JmBsXXKMLzaVzas8CWffzYbCfUur8cbQ2GTy5KTE6Yq3",
  "key7": "3aJz5A7XBaQU3kGMWihXbJoW6tU4DL7CJCDZQtvQj1fJ5xpSfHeKLhrmnYozk7DJ6A2wsgrmEg9vrgerAzWChVrG",
  "key8": "4LRBVL5Pei5EBy8ECSskoxBgy7BQ5D8KK5Hr7jb4E5RaqAe3Aqd6dj72SjaUtJWSt3PDY9EsY1cCJEnr1Zfbmg5M",
  "key9": "4iMBjTb1WzdWcK2PdqVoHbonUpu9FKQozoZkArcfQXJ2RGfwF8P6ihCD9JZMeYCu3zjyUGPD3smvqrJGbhSFmsHb",
  "key10": "4GdBTxZpHPWuU6KVjYaiYD3xyq9NZSQCtu9j8A3EoZDuVYRDfb6br6qhjf5v9vfrfviHJk6Y1aWGdJZVaTqMUST",
  "key11": "2pNnG1y2Wds5P1oFNyBD16N7oSsNAwAV991Zwys1dpqNoqPGHiRvA3rUXihK4M63AMBTyjRUJjwibM4uUe4DXPqK",
  "key12": "2hrFEd1VWmmpkn9PRawGaT9brNd5GjNsdkzsr1thJRtDhscfoaatUMreGxK8BtSE21zxjztG7XzQsg9ggAiY6q8r",
  "key13": "5zAG7rtuuD7j81q7Y4Bdjb9ErP3YFu9VV7C6ybiB1nnhsQaEBaSo9D6k8xWWLQqSnxYsNVQnXPLvMf6dN6yjwTX6",
  "key14": "4pCBLRU3d7T7YY1vZfQ97fNaQh4zL7bWa7ipx7uwU9iHR41M5WzukkQEysfdMjXwaGKTA4TX11pifNCXBMjdJgHX",
  "key15": "4nwxycWdzdpUtET1v371EnjAqXfR6pJrdg6x4mzazFTrGid1RSddaFXvuB8XL6h7XDj9EdTyPB91b5HFmEPhTswu",
  "key16": "5mwCwAzV9SxbejuWB1umX3ARdp3rSBzWYenQH4N84SdPYHQrDF9893vCEmHy1bNEYKftXXqC8wyfCnupt7NKkkhJ",
  "key17": "AHZbdKri4RG5LHYtqtM8Gd2KeuBhJsMRDoQqBkgGf6X9meWkUcSNo2HxaQxveWs1wVvaRzgVQfiGS4UhBmLWXS9",
  "key18": "4DPjzRDzDAJdbw5nv3MCxDPRpqosEB2iCB3S45T589BMMnQgoERBedpvSucignKAxWxupNXTHy1W1swXJ4b9uemB",
  "key19": "2dC1FFETP4vU6nWtZi9twxJvq1FBT7QWTUNAL9nZKhZHoLXWoid3W9pz42Dq3YPJANdnmR9BdYgRxQrBJjw83Xxz",
  "key20": "5uNaugQ7C2NEjSNyuzANRkaoPLs38Ye3tZi3vsPXfpRkVmj23XV1xGHHoutdY1fxeatT9e3HL5T7ndxYRs5vbrX7",
  "key21": "46Tmr1qN8DWbHYZsbdrhNRqnP2SW1HTdHGydt5unmyqQEAwzVMr9RJVfQU3pwj7cEjEwb6vzNWJ2qgav7W64sq4b",
  "key22": "5Lm6CbZdVe59urD7Jdk5Kd98chBdtVWu9o6h2sb3ZBbkc76uXXty998MTnBWWRnVcBeK7BfDyZnFExW2WSmNUF6i",
  "key23": "5S6CyFH8PgFBgNPBquHNnoUQ7EtoZuHhe7wb2NoF8j4UzVjG4aEAtX6bN6YH7hdzdKCojD7AaHGjwfwLBqRX2nKT",
  "key24": "bAPqgoypZG5F868Nfrhw5FDw7AaMic2LMfDcN7FwzB76vjdsHCED6vKuaha8fazCwL4UggEUYKJ9HjCMFtBkczg",
  "key25": "2i19Z4zvhb6RhojQuVtWs9W4s9dEbB7LuiXV5muT2sh892V7SWoAYNZu6pA9Wu2ssqds7L49RSdEA2pWa4Y2f8xN",
  "key26": "RX2t6La1qRSrpwehdcm9nBHFNb3KtGMFvaHrUhoeZyumLxxQweVQ5ZdPhF8jDZK3aY7tErTMJWWFWEVpMVj2e5h",
  "key27": "2Z3NdVhcw3Edie1wSxzoJy7TtfP6An2oguykPd2FJ4JMYY1t5oQdAwumCFmnbAa8t6CYkGFLmNDT2MUrj5iRGqCW",
  "key28": "43wou5i432NSUjxVeH4udr9NNF3ybs2Nsyh89ExvpDevrMRvAHz1XuwavQzaeFuJt7c8J3SYvVAFdfApRPXVu95F",
  "key29": "huG4tMyVZA6QWKc18RJELhy4tXG2PR2zURP1wGidit5PdBeoRJATxrPom4CPeNCug81AkJeGU6pqzZEZuqShXXG",
  "key30": "5Nn71yFnkHo6qdfYT97JpFSJZyNsTQGkBWM6HYx2CwvVs6ehHZHb1iQwfDzTdCLb47SsRVz8b8Pc2ZGTkYhLH3gz"
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
