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
    "3SuFN7C1vQ6fDc8e8HUcueTVsYSvFf8bFUEnU3mXSrcYKeA1i92wexxzFcPjyRxXBqM6jNogtvM3qdtZikxXqgYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29qAtKiwha7FybGEXXAPa48TwSdKUakBir4tWEFp5ZsxHC6n6oP1XyH78zruBWjY49sjHQ2PpMv4jYk5csnxrGfZ",
  "key1": "3TZLB2Go3ARx63VW8yCQSqFMEQYvuUNqwMJqqkMKJa2aLPR5YszzHzPPQUeip59zekCLRhqHUhRLTZaESRK9jALn",
  "key2": "4rnedxLr1inXXNrXhrfrgNswnPeRQKJB6PDDHfwTZVxioNfLRrn3dudwD9Ctbsa9HfhJVHPgqaaFEPrGQkX2YQfQ",
  "key3": "4UoJTKLG5GHu4qc2gMsSeLEDkDFGrznsUgycKsHm4W3HC8xMDwfxU17Zniuz9CZqJjaewack55Didk1k5fY9hN1d",
  "key4": "5WKhE4KwoGXHk6KCmgBNn5WZXEox9ZfEeTVNmCmXQTpR2tJaW1aS6edgVSfpPYQABy6TDxCqsV585hjfiRCGTTjU",
  "key5": "5rg5M4E3ZaWT6YijLAiNtGd4RQhMEwK7jDrno2YEDJh4Ebec3SAZSTsPzh5rbv87673NSUgbSzKjoErk8iJTe3kJ",
  "key6": "3oumwHZEBMQLdPUoaq5gQLJqQtGV2dBqcBA5kgPd9EUgUQVjRU3AoX8svkzW8kgU1H6Srw514qmPK7K4CkKzSQYV",
  "key7": "vWxoY4UKfiqpwq7FvmYG3URmvqnsNE97KhjwM6PTm79RkhsSnEbYVm64N5dKknt3dSXUQuyVfRMqM2AuLUeZ1EE",
  "key8": "53K3cZhRih6p3rCWnPgR8UiZqt2n9QQwNpWyQVKPp8PckfCGXxxGxfGeTip1FzxqbigDf9ZSyxFsG8oqgQ696HsU",
  "key9": "65mMsHK7wM4bQzmWA7SkB4HyBiipkMLKFR9DU3SiYYGfig9cDA547QE2TudCs8BkDtno3CGedxmdRcuj2jJ2kea3",
  "key10": "n8uEEmSmParUzyi26HxntfjHBbvYAdE9k7vjkPR9t4PZwsgVoq46y3Ca1r9RMJfvnzQMfEVrYAXat41NBWQda4Z",
  "key11": "3FE6dvcHGi1DLW3caiWaKV7xtcp5JxY3KtqAAAFA3yad7dq3NAey4LpxZ3XEg3m7TNx9pVPMskCs3HVS1UmWUhD5",
  "key12": "4KYJgXET3qoj8XMuRC9hKqfVHzuJ2LijsU5fpVw9o3X4XX8HdF6PXVCgsn6dgxJ42DHS4MU9EZ7D7ZRqb84diLqx",
  "key13": "2h1gwSNk2gXNUqjwwdBuiugPmirL6GNXWz6R12HpbsrQVDPhYP5gvGd1tXQ2HJhQ6sK9K78fXLJVXcTQ9QVenQmK",
  "key14": "31FxVDkhGtQfMnEUGzSUrvevUbhKLgsSNVydjJL5qJEJMDUrySLNTo3yJbG2NJEpAy4xg2sQFuUHtNtAaA6KC8gN",
  "key15": "5r6bxWCYiapPGsK5P5Q6Z1PBq2HmM1DHKkTByufbYySUUzErxkW8LrNdaDU4ojVd52VJs8NJ2oT2empUcboSJCdE",
  "key16": "648Fhsxt5u7TvBthbDTpDZ1Hso6A4c6rqDWBz5m5c2NrMLPxmTQU1mUFaQg9onn9jtPwb1aKCBc8VCUzYQRJGcD1",
  "key17": "3h32dCBsivXpF2Zr8QP1hnvdq5GBqpQFNqrXj6Kqf8e17jv9CihfaiqbtMkrG7sE4WpUfu6NVpfqp4n9mZdYo67V",
  "key18": "3nP5pCtWgCqCvrrMnwZEdypwFm8jWfaTfBdHUqxLFokgTJn9pmP9pQi69ZXQXYCJRMgbYGyqETNBgQ8atGYH4ETQ",
  "key19": "2NRF1zNVH6uYViD8orXLi7ygbwK4mcZd7Yq1e4FqF1A6XM6i5aVM6Z9QVwVJN9f3RawtgxZ2YJZzn3jDp6n4Rchi",
  "key20": "CaEu4FTr8U6P5fYHHqEBpZgeaP7Zcvioogwci4KQwsYUk1tg267fe2o4tW5hZJVEYtPcM5uDx5iDySKsZfmMpS5",
  "key21": "A451G7DNPZ4TrMxFMF8zM3TZ2DrfBLF5Z2S9toDVf5hS1QPn5acc1CVhSJH223pBzaTjbDVS1wwhKFnyR1sCeGJ",
  "key22": "42sdJypiuEhXgYnudaN2AwtUAVnWuVPJmhUTxPvggtK86ZEFj9Gtc3KohEqY1v2554CH9PZvGC9VMbL19iBFqGPF",
  "key23": "3sS4yd7MaKXn76pZQb77JJf1eQV9vHWXYsgNUVnTN5FLAPzbmWMMuFyK4W2TT1NKx4XARSa89z7hv7eZ6FenwvKL",
  "key24": "4qqvwBKcx7UV9RvRFQEB54RJbnreoVU4L4okazcQzqyXmYsVka1sE3zBQtG7Gri9NWkh8jQbq7BoSsEqD8vXoWJw",
  "key25": "5WvdqPQ767XvHuFE3wWqfnZpdrCTL3nbBMzUqeVgjYUhAjCsktD6xCtu9rmSqSvQei7xXwPqrBboagmZ5MZGfoov",
  "key26": "42BM8mofdmQcwKYNB8ZVTgvTo1Wj2FSAUxCt3zvvcE41nywPNUYtxjRNxVGeaSiTPUNCNmqQZhWboBK6hPCeRTQp",
  "key27": "mNnBmooqwNsq8nthpnhfZeH7oE9MwKcj5oqcteNUxbJoHFmfDAuEMpm2JnNY2Hkg31G8GmTJG4wiJzYDytH1zve",
  "key28": "4p4KEC6xBcWoLRdJrEKJfvCo6UVLKRo6hhQxzfAdXEH8vqGj8oojrCgvmeTaz2HFU1iY38LRL5QyJ1MsukUUjDrH",
  "key29": "4Ed3NHiJgJBLExQbBC5YDK8PwikqXwr1bXcw4izJEc4GneyqEdPCB8mHsbGAXPtgTBVen9D3xLpLqScW8s6jU7BB",
  "key30": "xkSWz4Rq68ujB3ax2XWRi2Km5hxtonTtdteScWSF5wEQz85NiAXe9ijZDCrtk9or2yB98T41bX2sipsrA4omNRM",
  "key31": "QcJvNA9gL9cHLRBfHRzsu8k7zF4iKyXpwvdiGXEp3N6LQw9WdHJ3r42LHasiocE7Z9n8okEijLqLbd14swC7pgg",
  "key32": "62So2dioXDAHcarYuwDqbN9gH235yUKcEBJ4q4aZqXMcwD5NQsgBLRnVhni8sJwLZXwXaYuPWNsSwoZctA44Zn5",
  "key33": "5AkRiu4UDe9V7mFyNQ4iwMZQpu29MgYDzfRSS3Y9KokfJoQ261jXz9bwFJxUpuFLzprj3kmyHM6hnk7u6nggDXMP",
  "key34": "mbHgBA3uudZ2uptCuv5maTHfw5nN93r9QSKapJqT47HvaXGmiDjue1sbmfzqY3J5jUXuQ82yixBWT8XdCehiKJx",
  "key35": "5N2fCDt5NLsJp6ZEqs7jwznm8BrEY9mg573D8n7HazAMWtq9JRAbs2patme1m3ezTVPY4JUPqcs5XADTzYGnW1id",
  "key36": "3zdxQMPvUNyK5JvaWPb98qtPmeYuX41RyYXCczqnZcwWjBUoRRbb3iXxxH8C2h1cjotPUw5463gdW6xGzeVkUPnd",
  "key37": "3s4iRqKSWpDybxywn5b89Sz65zEUBo1wSBPH5qTGPWwSKGjppsh284dhbftym4Fg3QvshxNyEvn9yiRyVa1gwFGa",
  "key38": "4RUvvtg4ueZVbLQLkTi6j93iSLmWFwSjegfMAsQvgCfnm3BZnkjN5jDhSHpQ1Yb7E7xPUxpFuqDG8xYaFKqeFqFg",
  "key39": "5HG5hx3jzZvNLHrSVNKxHGBtJrDYHCMavm8o44JayYg9MR2mvfadmuzoBiMf3yoSs45NqPWCxepvjh8J2n1tLqnV",
  "key40": "3bDTDW2qnHa8xKkHecgwD8mu9xM9n3PRJsBUZudePSDv5KqDNw2Ut91ZBUG2NqVBgz6sFpScNqTti8sTe77nY6Jb",
  "key41": "q6SKuMnJhALGpWV4r4H57JPVU4rjbK29SftfkDc77vfoAL9ikquD1wxCFLdmdzEbssPzMXmrNUB5LVnN8knvXzZ",
  "key42": "2ET4ZFsXG7eA81pdGPD7cJztoKZef4bdSNJ8q9ZVwF5nHe2aaG2hMaeGtxrWQJKp7xXYqkxVyweYAxLz9nmDi6ma",
  "key43": "42iKsjjaxU4jBdDC1hS8PtGWCo1aVsFv5Ugsfa9Aru4AY7M8uMFwB2jWLjQDdNxGmdJHw8s2M5Hcvr5fLhaAsoVs",
  "key44": "2vVRCrKzpweeT1AGwtK1YWCf9hsSTXPxNT2EJWwuLeW82ei4mfdGDVBLJLnf7Z1Hc5vSxw9jfZSXeytUoYXC4ipi",
  "key45": "2AwrYAf34T74LGRyKJJUhL58She6y33vVyEYHpR9BXaEfBgqU7yUjo8fLDPa6npfJ5bFCR73YVyg84j6ejHcBHsM",
  "key46": "4YBCuT6KqJgz1Wuyqk8rABYmvrSNUS7ZXpjvfy9KGiSingQkquR4Ldjuu9Nb5K9YP5B377W3BNSpsXgKYrMdWsEy",
  "key47": "4eqGU6u4KGcHAR3GH5KXHPkZYox6a92FPy6Ze1M9YtyTP5QUYWvjtVMZd7FELAezSvVHjdoHgPnccpLBGPypJNyQ",
  "key48": "56UfnsKqqiaA7GshHfX5kGXAbS8w2L2TvQuZbQ3PuaVDGotPFgPu8QspjPJdpoRBDRCPsh9Doa6G61uAw2h9qczD"
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
