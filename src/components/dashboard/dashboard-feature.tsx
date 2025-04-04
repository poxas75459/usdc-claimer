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
    "61K2xgYXLDchvGU7WzwhHv5vyDyrjEb5pWiNsTFcNUhozzkcocJiQCK9z9zmtbvYPLzJjzhFzgQzCKcDaL8sSLbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ms91qDGUptx6HCAdecsDHuPzNg6iJjoXT4EL9UjkJw3K7VM5nFA8cAxKfFPWmVpZkC9fwcBJNojaYWeF3pLLKN5",
  "key1": "3DhsMchqhWvi6Wq1BKDRa9vjfN7BDgbBgHM4XEaBavwJWt5G3bxoHHHPt4AaUaMvTHYDnZZBiUsUmXPrJDHhhVnz",
  "key2": "4Qw7HyXUQiEjLHKkzy93DhaLVvFXU2TGPKVCqv9bJTrN94koD4dGZ3BrvNzj933eGbaFXeh8dzQsoTSZmA5Kj2VU",
  "key3": "3UEAp7KQoF9k6FUUhNsMqhuUSBbNv1xgr7GWSGn6ADpX7g8Uy5cmrAMPRWRzUVCHzur3KPohiCkwCvBm96shJLJc",
  "key4": "5fimhTbz5AzbCEKkRNqraWikrhaEdZebZRp7sAUjxusTLQY459VEcX34EvtcsNoABmcMCAvKqe1war6pTvjBxout",
  "key5": "5bjgdRjgqdxuECfzUDad5jmEXn4Goo8NTystmXJV4ZBq1SwZqcdKzq7acZUomvs6mNn7kuHnMKZGqf6LSsmoEBbW",
  "key6": "3XMBDqSjEYHn8ruKtme9fHktEi1hV9kpYSf9u2XoRX2JL3wU6Q55x5ESNS7fbzzKNQkBLrvagRy3u3nEZKNNg4jm",
  "key7": "3x13itxa2Q7pCUmWsRnLDkarqrET2a6C91KczjoTK8234gL8mbsRK9qbGzEc3TfNvAVsrJaMAhKWbba4BruzQojw",
  "key8": "5K4eHmnUveLiDj4ZbexnDzdkKvcmbREESXXuwJ949Rd2PFCncCz18vwfBL5MVM8yR6Kqh5h5FhUBj7WP87wzdxZc",
  "key9": "7jeMsnSWL5aGNeYcy4isYrZx4PW7skiG3XcubXnPMnBNGP4uKvwijwmdewNAoYSThq22sEDjoVgY6TgsPRqfRr1",
  "key10": "i65HxZcsoy243iTNgi2ayrmTomjofzuKrHseYXRZkMev5Lq2qYY5UQLNeRR2fq2kWaDscX3kNjCRHuMVxkLYqk3",
  "key11": "4ATZGk8xa54xijXwGYGjrczMpWDRpfQP6tEEs2rFPeovw76orvMWh8avzXVz6z1DSsBMjE1fQjYgrcPDYChpA3cC",
  "key12": "nW8okEDZ6yZ9PnMmP2gxRRXfwH2Scyfn7JdGz8WdftGWErhnT456eD73dchqa415H7d3vdxenn6dXhsc1MkLDHP",
  "key13": "2GFaqfJwsQHwHRkJypYYFfof4UmajJX2CRt9iuqT17NSUGoVcNxJpn3chYMrwqiPWinxjST4f5uHbJFVxSm5jGDw",
  "key14": "4stL7mQg7K1uBws86uyfX5woRa8GLFwdweyCajkJBR3Yv24SG6hJYaFaL1JmLEy2KYFa5e664CPHE6qsegPyU5Sz",
  "key15": "486AeQDg2gnUwSUueucQRaohTs3hXzLZ3RAvHb6Cm7Rigbkh7PqdcjTMsudDQhEvSsVXwdZY1p7QgFE7LVcsER5k",
  "key16": "5JMTWLTM5XCRHRQGuFbqzUZGedhDXRjq1CL26qaaCuvnQFMZe8bXG8ffCcRPzLSqVonem64YwVXT3bffehbbw7C2",
  "key17": "JHBiDgHnZJKi6kX1dD1tcB2cYVCrjD6JvmoNFYgxCf58XTYja5ZBnxT3etHcM5KLMD4wA5YK6Ybg3hwkKHERbPd",
  "key18": "2YppJNhUG1K9zedMoBT7h4ZQX49ooQTRMZ6yuAtbVy1P2LLsmHLxEZDnQ9LGMhSXv2bCQtZwGikxdxRsVFcPjoQp",
  "key19": "5XQyo9yCtPaDh82NKGryVhmWJrF6LEznJ4cPrHQkWJM9MUuKYgh1ETAh25miL7qPmtWLmP3cBYebZ5ypwNiwfaKT",
  "key20": "235SjruKk2RvhTrfB9zu1gh6QWyxDDu1ZD6iAddhscok9ZCWgDGXG292g63MATtYsFbFQPjuNbzU6jajNAK1tL2A",
  "key21": "pQCG1gMUr1H95wuMG7XzRF7XbzFpCnzdWtzWnHMDkxgUeTeKKUUk3C7BEycmtuvST18VKzHSg7euSem7qyxrLQb",
  "key22": "51GErSgSgy7t3PUrzVRcptu8VCt7uZ7PnbFoP8aX3FVhZFL7W8k9cCXa5hCWBTpsTbyGzbdbnaDq1pousfgBgmiN",
  "key23": "2B9FYcoygbmp2yQ87Rt9fe8kDrSzXR8CQStWHUepZekJuZWRbAeW9jPCsRup1N1g4QwsC4vvkmLBWxP97mRAzjGp",
  "key24": "4eLXw1TUrTtu1f7wfuiyD3tW9BeZYVHD72mKyKhX9C9iqz4ZHmfRp26QN8sX75Kyn5Wh8YEYGLjtS37Haw4TFUZ",
  "key25": "5PWCKNevfhVqVKxG5NK7cAoUhkP8GPBij2ftv9T7R42fAEwxQKVMPS5Pu11dnT4io9gHNDpsAi4JxaTRMfuFKVSb",
  "key26": "5eYpFshoaQJ8NpaG795GmVsRhcYdbfunVHXGuRMw2uiK8LLN6pfLpJBN1WFwxvGsBRaPFLXBiQu6GxCo58qvT7Mp",
  "key27": "2z3TE4cBhsF7oNjVx3gZtcjiDFUHbAvC6KznHnA7YdbNZvNpYrKjGTWAMzkyAsTJ6QGhMrzULcYgxMriXSPtTtiw",
  "key28": "C6tHvBGMfHd3n2umxFmSrMVo7MrKsBS7wvuseZY7X6G7ZiWvVRMqRZcJUFSrzeLqcE1WyRFDdSbEBKryDsA8XwW",
  "key29": "21xmALHfjUzpvcP4htJ6LtLoPPbJmcrBkXP6t9wd3tFY93UAdkyUaCL1poJx31sgR2Yh6RZauqyTChZQRtM78RJj",
  "key30": "3AGPznjPMwFKVhS5xw8PpSzy3DpJDXSExCU5ZBDuHJHzoMmmd6LPZoJVgFVBVLNwYBNSaupx1QBJhFK6KevLkQ6r",
  "key31": "2m2TrxkBHUJ3oiCXyRo5X8c4ZiBFMr2D7Lbg7HSzeLJi5mwCLbbrPobkWbFN2h2MyzWp6TqJRW9YvF4FPQMGBsat",
  "key32": "3cZJdY7eM6EMxTZWc1BbW2cndqbAhU2hdJTjoVZ4FBg4NWj7db6BaLCLbvr7jfLtqm7yzhA24N4VwmTJCwdrWFZB",
  "key33": "DFSyBozt5CqyqSfDr2KQNF2GAE3nbsdpSgZRkwJbqJiTKaCBZpDWXFegwH7qzLo5QGtUq5M8ExRkLgeufULpsEk",
  "key34": "3CkyGRoL24w6gGpKnYcvfLaKsmfHA8aSrEWgfb2BqcwzMgHGDkBgF9Cm5quWaYyvFByE43SSZJptPfzQSE3XMwgA",
  "key35": "jpt7GJAK17b7Xfa1aTuLA6DNNS55fwPk4gV9zEC2ijff6WnfXoHsKcqbWHwb29gHroS8REn6NeeZZvTqq15HzTP",
  "key36": "42oG3dRpmzsXzct6PydiDFsDiWjprmer5ERHfWf29GvEmNhCY9fBLwV7KV28xzvYLPmTy4ysXoZGE2HKmBg4tVCV",
  "key37": "SVfTJneZwKNnbqsMFg9L8jrqGuTobovJgUsFcURuzJHTLb7eb9xQFPoJQtqy8ymJ6vcKVXhfr3BVFUrrJfBF1oT",
  "key38": "1TCnke6eEYPndpeVBYKANyKpZRMpMkohmALPrz1ePrtLmNChz1sjEYPv8zaumGsc6HHVX962419phvDMPEKp7zp",
  "key39": "3aA67uyiF3EX4ukjc4aiCAh1WexRyzMZ5CyprDUBBQUfGBi7j89xxqzFCGEEt8HpyQs3gxp7SthYi3LveuHrTLTK"
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
