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
    "5JjpyKH4PaQ52Vp7pDg4C3izcoeA4tXUdiQRKM9ksFZ34x4R6H762cy11ng9UnAesFSMcsAEhq2KSGKPrgVj6wGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5viJbGpBzX3HDVpQ8FXzbR2CpMbHsCYeSesmEK4LpewvNBN5gwVFYnQ7qmFLnbBEfree3VHN4ckbh7ySEK8oxEgV",
  "key1": "4sbv5GVyntoLNQypNBp9mRyCQ3MmRLJbqUsFxqKSTrg9xg45tWYUcb7dkkw4LFwvvm8FMqqPdQwnvUAyNSYcKsD1",
  "key2": "5pyiK24trTqJz9FX1teh1NwGf45EWLyMyVsGkYwfNZEQGNHohsvVQe2ChxTgu6dgLPnicogXLaKNQFEDF7cvxM2M",
  "key3": "2Xa1X4KQNab4aBudpKReqAREej8NZUrFJntb5V48uwGzRUQtoiwqVjdqQYrEZVtwWktMFUwM8p58oAEit3DNkz14",
  "key4": "59BKsogwqZM654AhfdPT5EVLMDWdxff1y7crPUmArStkUA8PW3W2cLDg5sVjEMquiaXFZMkG3LxkLCj93fPAWGox",
  "key5": "48EGh7rpVvoiByyGLf3iZtUGmGz9msoN8ZN2aUrE8cQKcQXjFrF3dAUZ1aAFtPxJrGqLXTTgXB7o3BWNFEoeKbwJ",
  "key6": "3x4AQdb1QDLpxEgFzAHjpaVzGVt5YHUP7yPzNvZs6m9P7Z5RXkKNaYgPLWRUDwLqxFzYXe8ZAWNz6dJJYHhFgcAx",
  "key7": "xA7ESS9d78sq68WrSFY1UWmSRxvqWRSUHytHLWUoaS1WF8oWS9UHqjk3s4H1z6qTCqWy8GnjVDSLxeuhW6EdqvK",
  "key8": "EMTLBDf7RkzBvzyS2Q1vH3mJVKkB5jDCBYUvBioQmHxBB6UZJ3CLfo5M4t696kxWLvZ4E3vnisEx7tvyic9hMGg",
  "key9": "3DkcoCYotbWvmmCejd3xwFYyNz2EjWYTS9gbrRzSAdBoRqrr4FZSKN3JcYhhjesuWuk9oCM4GERoY9WTNC8Zv33H",
  "key10": "382Loosi9PaQZB3MMVsL71kJSWRFXm97t8L64vy9RUXstxBF9aTLgau8XB2pbLYM2nQx4Bg3GsoN6GnC5k4eovXU",
  "key11": "4N7cBjPQA2hs28kipTJqKHXo6ca2WJ6kruqBMxLCkjgX8PcRMBcK7aVTuJYYZzhZ9wdvuNrwDnLDb5H37JQquwHm",
  "key12": "3kme2QH57msHz1wsXxTUu5eZodtfz6ZVeBetVqjqF3zCgAE14VgSh2JJq3s1hPWcQ74qdjZeN4UGh8V992dz956G",
  "key13": "kaGkP2iJQ5gpzo6FZQjVVq1Pi9N5gstRGBomuqopSCGstpDwkSpgrQQVDMRvgdugUQNf1bUCPedEpeTe2MW5Zn7",
  "key14": "z2ypuSSJ2DDt3jhw5YH3F15dhwDGQLni875JgrN4hpDpRHkfhXoYg6oAyW12yiKJC5cuuc5t1Qj4MSh5dLXbeCZ",
  "key15": "kJdeLqP8JdS8TxDyhNeEz9ywxGFrUsN6FsvTjxEc3VQYgMBy2ygqzBThe6S74AszEZ2jZYeNcxLEKMyrmRUGPvu",
  "key16": "2pen4jhY95N7hhztHV7y6RPzZYpaBgACt8gEaJ7ZgGsatdpo3JAJqF6dA2P44mpT9gsGrkkXTYR8Jw6LpurAaRWh",
  "key17": "2iQtAU4LJYzxVe6xxUqH58eQY7ZqU77Sqrxf3fPbmwhyMZmz29evB4jN5iA9dH1GNbvpz2S8gbdEba9shGLL18oy",
  "key18": "rBCArWST8M6zLgoGMJiteq3RQY7gQzxnGQkS9hrRGmEqYQXRob9Qrv9cL21TCjU3bZspADJe1i3QvnJE4DFzD6q",
  "key19": "3DT3oCRhErvEczPtAWRs7z5o7hxnwsup1joh455DMWFhpjbo8VavvoszunCdavhUFx4dq397CWVWcsffW8P7hryU",
  "key20": "3ivjTFf4Ci2eMuegfZWdBXP8RsK8yHZ5bNhgPvbnwsPo1mQbFLRpFetMJGwmUUZGmujqvz8fJPSfQJho2nV7hPf6",
  "key21": "2iJRk8FQgS7KdwJaZatdWUago6KoWgXiFG4AZ112M35fmov6T55SJzuDkXVPKWDG8WvvYRQk6zzrgd78e2cqDS1C",
  "key22": "3s7z3CvP7Aso67LDjR8RfrZyU8HhG1b5VsyQXuefQZfip8WnrD2iZ9NaxkDsQ89WPCQNDaCcmtRpyogrykAwJXFL",
  "key23": "4DhppNNJse62zw325dErhLRbKKMJoXUbrQXGYiNfxSA8ScUer5Pjk4wQ7myXrsr6ZVd7uHwWhiY1xxzxqKZFQhX5",
  "key24": "2fLbZDSrctsvtoRJMQSK47N1aVNeCDwYyX233Tv51hmg71xwW8dC4oCga7vhtGScRqgihWnXtVzZJ3XQtDrMEf12",
  "key25": "5VVVJX9jzWLAsJzeQdJzSRu7eQ5UyyM4ERK6q3zKmFAfTdUesWUpft36wWUgGbfHhpDVcSjxdswZPfhRjbxaftXN",
  "key26": "2WsLaetkGUEyMQqVKgRTZDjfjBFVdPB4P3YGfGnzpHkJAVr5qMv15wK2KXxSdUZUXNdRR53hVCzZyxVGWaQdHwir",
  "key27": "34geSiC7ivHhb7gz8ZtdBgcJmBmPkAZwcJGknznbpALpuARdbVuf37yG1xqvcHw39csCKpp7Zapf8MmDRXEMXsDo",
  "key28": "4H5ms7nPA6SSj8RNCA8xGPpFQ9qU286tJtyShztumDeLdmcmPrTtMirhUoeHHEQpbqDqKorg2YCWTeKAqhS9vuf1",
  "key29": "iXgJgyEhueCkDFAvQkC3UyPi3NtsZ8wcARpNtjsTfMxeKkueZHKHDwsrXDJNRBj23CJtrcNKK3cMN3EKxgzvyZE",
  "key30": "4hYs4yjunsJY1mrTCEHKa6FYVv4wUyJbrgwzvR3kkePZ3JbVJ4M9dZiyesCvxC2iBeKhjE2xbehn5nXzaZFRaLmT",
  "key31": "4r4hsGQm9QfRbU5Lkp5D84uzCZ6y3ie4L8dEvHW9cHbi6Zw8YnGfKbNPTw9opWHxT7Rx6uNJt55Z3FpZdvJzWBYE",
  "key32": "2pzSZfia1D5mZq4SahDsmNpiEjotLgUpSdYNMK69jWfyeqAfV15PSetqYs4gvi8xKggyYAX683HkJitF1rMH17x9",
  "key33": "489ad1x8rZm3KzfMXhWBrdhxnS5ciha2HKKmdJTGmw3XBY6gGoAh5xN81ttNojLK7u7yScWsjAAkBZx5W96aSrJM",
  "key34": "66eeBTXBrqfgHQUUQsB7EPXfsPCVPKSh1RxM5VnGp6eYRRod2pNibigtJBikCEXQTzUDwe6bHegciRtrKog2zSrT",
  "key35": "5tKpstUFvhdjAJXsy5JY58qWCtYr5X5EiPyymRmxEV6pX8LaELUfoJp7bSm1nNsCojisqWNxNApWD3qyn5y54Jte",
  "key36": "276AaT4dd5B5u55oD4gKMY4CVjS5YqC8os4YPVgySd1EicoFQTk8EU7KKE9N5H3Wzvw64NdwZZboDiEtaBU9TXYe",
  "key37": "5AM8doC8jocnQvmu19LyVrW4uxPDXbS8bAyoVWA6AN8KD2xHTLzJPWEmLZeJwECP9JD2CjqgcP3u3pEoSvcfSvag",
  "key38": "2wLRXdvdUcRJjP55fXh2egKf93aeo2mHPRkncvtQfgJsf1aaUWvA566r4jctwkH6m6221PsbXaNGCPHN2SMcjRTn",
  "key39": "NiRevER1yVxrbBPAy3dBTXxtvbgmBe1Vu4S8X8Wjmp3K5cX8DUCgp2VV1LqhuwBW8UqFLUf5xkQcN1JSKxwVs8e",
  "key40": "3PJt8kWET1PETrJBohDy3ZoUPU4u7gXfA6SBm2k3PNPjRaUpSKKNdW3nG1XdENR3BjiwrmKABuMCtCYAgJYW6hue",
  "key41": "coFNK2uMvTjNjYoMMZYFATP3FR21uuFLmbJPULLKYyK841Ls8UKn8x7iGz33S9ZxZyzyqMeRrxcDJkPDkZeLr4z",
  "key42": "3zj2trzvztf2opvty1tDn8MHkAF5qaS6DHpPozgWsimiGDcY7qHfNkFZiLwpN1wHYivmgiybo9vNDtHkfe7VeqsK",
  "key43": "65xcgPaqXv5LCJPZaDLRcJCPwuLWPmawrsdyJzARzYk8MmWBxnYovp5mK5HKd12eWWqxhJUyfZvHapGkyMrvWcd",
  "key44": "5XGUU4j8EAHC3siFffTxcRoUEYFfBzXQr3srheLULbX7D4jePsHWV5NxXj5m42WvdiSY6n4jwXAji9y2fyK5kHAz",
  "key45": "22cLe4aEK4C7MarKwkXmGkD26qEhQwEQ1GnEBuQnLCjPK2PkbKzzwtGEU7j2aSVX4EzNHA78P577Ai6XbRBpr5tT",
  "key46": "2LcwvLEoVZEgyf1RLZSFMmqqyXzmBHqwwSaV9QeAF52cySENzkg2H9eYtcGztaHKgt7N8e2xh6GWbzgwBozHP9Jg",
  "key47": "3AsXYChvwQ6eXhh7UrtzUAkyrPYSSsdJkHyCbbNTd4UwfETe9YMtv1R5Wy8tA6YkX1hritCE1UKuY57q9HbcRcSa"
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
