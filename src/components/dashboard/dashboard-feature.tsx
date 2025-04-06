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
    "4QZVJi83EcMDpGXg8iahzUrDTy3A7jtUASANsSeAruEzx1kirfNHJVbTLtL5D4uaSCTuqBvPyuRfRAMs8MPtYrfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uWGjAv5Jwqukmm3WkjgQVjtmDaLUGs6yskK7YKQkaaAo8cX6vxKvAsPxuP9GWkc2bR8hMD8JUZEAYvssag2pjx2",
  "key1": "5XtKTKzVJG9Gsz1xEfDBLKqAQBgKFduU9n1kj5VxNsVfRP2ZWnYZdVNRyxT41gSsBDCf1CzN1mHKAAdZyvZGJNsE",
  "key2": "3Yc2LdhwLNg1NT79Mr9nStC45i2ZJucyazHRkoXPZwEmYA71WALHgPiaDYDmwLRrEmyCwbVSBd7sCdAGX32vEuWr",
  "key3": "4sh6hoxkx4srhVJoqkYBgPkZEURyVvoLmUyMHSCs9RTKrNmBeU5LnzfomGQisiuKnPAiUdZh2cjXgtbSpzBYsMPZ",
  "key4": "zssMoKPPeZtmPaGoU2E7yZomDBhswPzpu8GpLCsngjvagZ3krLVD42fQqeMVJ9UmtgqF9VGuFP1Tp3XMW3onoo8",
  "key5": "rC2pUn82Jty2JWKXcgGuwKJreLTjc8zbz19iRmWcTsMv6ziKeAjnqG5bhNhqPg1AiKxvkzjwFRyeB1Fjrj53cYY",
  "key6": "4GaVtxrbHZNBHDm41SCJh9cB21gjH1FzxXFKF6wA2LC23vZJHW68mknf9r4uZFmHJW6uxVYUjwbu3PkHyPsk7hoP",
  "key7": "3KXwBNPs9UbqackKswUw61PX5rjqbnJZmVqnSUW62NbBgQTbcnFEZgM73ZzZVZKtLxZuSv83eicLMyFtwqKD7rTX",
  "key8": "4ZYC48S9vEmWbHTem2tSJ4oYCciCVfdEpAkGAcDGd6JNB1K33aK49Yc6GozopBAhYgDLSMeppwhu56EjAVe2PChA",
  "key9": "5wqyGD6AERQZEwXAdjixjR9HgmhTwtgba7XQYkDcVDS1ohC1PMwuvT5y82Zo7XeZtkMzuBKGdJSBGzujZ1qE9dRu",
  "key10": "5hfEcSYc9XaR6H8tUzx3Dc8yxsnVnBScsmwvg19SZdptBTeiT2ZUKqMQKxDBiGoc531HzXurDe4V8SB2nALoVn3p",
  "key11": "5ir5pEGYxpoPsTkdM6WEasnMBpgtESXrivaWGAdFjg1jeiLEFvE2x5qLgm3Mi8ubpphtX6sG5EP9tbeRqALUqZJJ",
  "key12": "4enLQD1i4BVtfW99oA9dcQ1t6B82f49RHzWW3ENmwrfLhVKce7HQ2iUdScB7DKwHRpUC4KCN7Yj2eprVi5MbtTWh",
  "key13": "2YzRPaDAxzUBqsFgMA8bT3thzKrfemsm3SGvGiLHC3bEARLWRgajJsgoXtpW7g3sN8cchoQTumkFZBN6UQEiVQvu",
  "key14": "2fBjXDMmnAiVZfTrrBbiuHJZnocYgcw7PUtJP7F9UVGezS8gpvRx9S8ztZ8B7gV6gxP4amddD2Ps8DH3o264fWQB",
  "key15": "2pfz9CutvsgpTo6TqqUDeJagE5n6G3XRaxMKb2xT6uyvriZoCdSotfHGGMMgEPqQ1Kq8yfBrbB6oqddHnNAAS4zq",
  "key16": "5pkgL3KUxDuQZurGjaWN7HeC2NCrVPLCXkD4iY6GRkoP6rBMqpuepJYBsQW8WL6CL6fRzUJcrUuCUoiUmt49epLx",
  "key17": "2QyKQJci9B61bjdEgrRJ2M5jtufbXDgq1jpyAcNZJXuWLmrKKoyFwHzuMq8Ae4dot2J67CKcbhCx12xwsT84DZyy",
  "key18": "3VA5AU1tH8D6cfDo9j3zuVy3mzd1iszD3w51EgAt8pECDuEkkE4RgfKEZbydp5q7xqqaMQmGvtr79oRbX4Nh8KWU",
  "key19": "2ShjvMknNhMP794iBuqLdcCxa8E7tACVgW7T9gjLUJCaSN5MD6JSL6p48daGGRhhMngfu5LPCjZbkQfxuT1KB7Y4",
  "key20": "2NHXonvprsJwJpXQgAMQ2k4zMCXmDfXvLYh2i2pwZvQj2kCAPD2DYczkyFyQ7AJ6QQ3uJhZ5reskAPwFxJeEJxgc",
  "key21": "63kgRtGQKvGGAxGYa8QE6r7FJq4BfjSj7zMQ742ztA9JVKZyAS7j5Pww4tnTg2roBLHmbyLFAADwvVoMr8bUqMDv",
  "key22": "MLQVoVVgTnMscMRrY6c5yyDv3JLQRxou5YX27HzospzgUzqsP47p5J3qrkmjxioM8DxsVd1fjuKzutmuVRiBmVr",
  "key23": "4yD2kRZiaA7nDqa7Q5ncm8Sst257LDEuqY8mrEjLA4f3DKHwaqMpnk3TcVVjuLYL1YaxSg7n7ST5T2hJwK35y9DQ",
  "key24": "gNqPVtFLU2GCxDGjDd8rpvbrTTs6uP2ASkh3eMj9yu6kxACxgsx4Uf39LjxhL2o8b6D2LWnSwrRogTHzfrMdkDG",
  "key25": "3h6XBiyfpchGyJ9rqQNRr4d3UzYgCinmBE7h8vokazBdxyegV6wBhfszkJQMcA7oBdPtho1D2sKkN9gN7yDQ4sfe",
  "key26": "2ztsDmNnKMeheXjMGaphhVe59ncqaAdAGWvt6RuSfX872i5iNHY7qQQxZESw4S9VGTdrSQxvq6WBmDkQESZBCPSu",
  "key27": "SVzkGnvgLxAxUT8YDRdZahm49PKTUcDTGu8VuxvYeztgMxsPtDMTEckm3kkkFUXFBvULvkzhcUgfeFAPVLu34uo",
  "key28": "2RPS7WBnr316JWZzB9ssZhEFJoxoc2eA34u6d6BTaa6kiXHhnwDNWBYEnMiXQDf997FpDj5Ts6GUrzCP1Ke4uob1",
  "key29": "2pWEiWqmpZHd5MmtCtTkofoQFJC89u3V6hkpYmS9rJvuv1FXXErivGaFyp2Rc2keznYzQ2sNudJTrV64VKL38fGB",
  "key30": "49bhHptMZDfSsZj4SH51rHMSbHamu81vpRAr4t55D6M2h4YbdVeJFwwDtcw4DCHZpNnNv6k3nSncgHGJqdqY8Mf6",
  "key31": "3vX2vUkrWwkXMhzywgfzWpioVyX5rWzFLA7u2ZQkzv8vf56v8UKGbMqwsczFQU9JA2ZBnsEqbfk1UcqXsvG53zQZ",
  "key32": "xvQZiexoiLrc77ZHVLmuAHuVgvxXRQ4RC552GUMyPFbcVR9U9aUxCsKguiZASNheBcR7hMCFscsYbRMKHqquj43",
  "key33": "598FF8uetTQDdHS6cj4fPyJzQK3SRFHU5v6JUBVrBz5mWksnBKBLQx11wFZ6d7HyeLLWPq5e9GTbpTMGNykP8EgH",
  "key34": "2QXeowDQqiFvqySFFbGVhjS7W8F2QYzKCTdbXaedxzD6xDzsmCkCtxC57RZXj5mkgFdEzJ3xSBYb4FRDNGn6ciL7"
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
