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
    "4N7PYQGcNA2w4iRTkxJSuDNDHi6mKqeUmd2JZYoa5k1VcVRcq3CeBpwoQY2WpiwocyUVkGzpcQTAhwapNK4jMALZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NkPYM9ibZ2aJKgCmgdgSAYtXstNj1LSxJbr1uQhhbSjWPpz92oBUch9t41GViYmvz6toMPHPLVmeX375HjryKZJ",
  "key1": "39cUGn9mFJWu14Aa58rUKikGi2RSKgsX3tkUR5pYZ1gYHAE1pxEKVWLttrG6g6PgTodgWhLViXN4kf8Uh5w3xTKJ",
  "key2": "1kzKEPQHuGzrVTdFo95F17RUGW6yWpbt6AaRVWWMPouLrPAPHxEE7DGKkT63NHnTXZG5axmS1BdGX6QXFQQVUKZ",
  "key3": "5xzDiWCqTSc6RKyTrRVkRAPWoG9nWJJFSPnm5B7CLcxLKxcMpTmEop94RcJxusKB9ZwRCXjd1Yp7MDxTeuzspcZL",
  "key4": "887rcDxZTEdDZxMZMPLwNJFjpjGCyJoUXtuoRSbipLQyxk1wxNoWXGTVFSVAXEZcnUqtQSq1qnWFYGac2EjLqYe",
  "key5": "3BY5fLWYpkpgQUQVb8ko24QwZvqKyDUbok5ZR8KeSfGTiK9eWfraP9gcFoYbP98fyf1qfVBC9CvhxDfCSM3xir4t",
  "key6": "4yHDhvwNKVF95ApRctYdJ9EW47xK2iY4DpwETR5D3QjZacsAYeLPQf4rT3VmYX7tm4xafL137L6dcqes4UDcoBo7",
  "key7": "27cJxZGf74VnjpMmM7xU1Wzb4X5BK7eRc7dbogoqTyGD9ioQnCzfxt1VRC5uh7nCFYA2LVUpzkHHQuYUVFuBm5p1",
  "key8": "3vC4B76UFWLDQ6NhEh9WrFwJcWKvNABQnJXrJCaRiLjqpjAM3VwAXrAsuMg1fgGF7mreh1Ed4SJXmwj3rNjWgXd6",
  "key9": "5N9yv4xVWdNvimoni24ZJP516wRb1r4X41yNRzW9iToGdAKCDxjUNjtQVXuegxkTNFPvvsScHoSiQVEC2ztZJRUa",
  "key10": "N8h5YCGK1MyBRRstT6VUfqnWKiqCE54BkYco1C36Kt5PkrtLPJdp51pcCp5t8LKvJ3NiRa3yL6vQ6LnRuMrrLu7",
  "key11": "2Kt8BeAKjFN5g83CR9Xtb7yzdkh5BV7r24HUxpNREKrCNZ2TygcybXR6mxMPWwBZtvmq1Vw58Y8SKUhGMV4wjJwq",
  "key12": "1j8nAR5ZVmL3BgJBpRVKjY7xJFjNkHBDKJfRDSNz4M9ErseVSvAb2HLfDP7QkY1ypogf5hdiw9KKMPf88WYjkw2",
  "key13": "1kdLMbfrAwkjLxNPsvUjVJfA3wjVNAjcSf4jFKTcXdNk6K67ZDFaHPwKMnpvgQwjBnAHhEb1G89TjAGprGNXxrP",
  "key14": "3Trxfx5uKM5M7h6dydB2ZYYTqkFFb2gLHGHoJhNtNV2gvwervEmy1mLQRpkcSriKXErpJT91LyJp34LThTSGpPtP",
  "key15": "4j5qn4RdetKQcQDnhwN3mXdUbjvGWnfWauHHzQBPnoJbZrERJSjkdrBwPosEixLE4eUFTPjezNsku3nsxUxdh2Pj",
  "key16": "61iUXfAYGXnv753BPQJCqW91RUyye1aAxTos6fG4YkX5fWVuZMjYfiVrZmtG9Pc3kagJzPaJoAGUXmtq2W3B23n1",
  "key17": "2W2xeV7s4MaGPhU88wLT77MYkVgbNDeSqbKVMzhQ9b8vnCLWe1J1kdgFhVVQ6X7DkZbDYFHCkGrF1CHVHBNmZuCS",
  "key18": "2ztvZUdmsiPKsFgjpaTXgK2LagEi7qhtFynH9DjS1vNmhut3G8bFduRLihBCTJrRCNTEZS4gmRQZdPKJvrGwwUJq",
  "key19": "2ukN6zymKyepfTuP2fLgbEZvCukgLS1oAYu1NdytFQzMpthfByPpRks2cKFyuUufDPpBq5bwXgLKiy6NDT659ppx",
  "key20": "Hw3woUYroa2eWXrGtj6sQVotAzEXvwg7AZ48hv8sPKzfZ1kJGn8pGVMu3xgvM7iYtdAowfWVe4qQvnucvXRFPAx",
  "key21": "4LMWK8z2jE2iUtnDMdNUUn5sK3EqdAyZ8kqAaFF6WL8srb2QmksjchMR56sUgZAPJHaufpadoVUnpijjYYxchZMi",
  "key22": "4RrouEVd2yUqWjDyxMMNt7VGNMKMgzRHZ7HQ9TfVQQp4a9kWws5ZgmU5mMcQTgH2YiRXJMhMbT5RMTBRJ4v8ojWG",
  "key23": "22vgWqE1yCBfUBxUfE61kgDmxDRfnsXndtyEiE9bJ1sUoufNS8QeTW1sqsswPagB7CppFcxYG57PNJ9uVFsuvLYK",
  "key24": "7snXs6gnXoK57ryukPtbaTn8NZhXru44rwxHGPXjQTpMFPjsZyo86zFV7xUhpCFq5q6muZbLX6NCXypXdoqHd2Z",
  "key25": "4Rb7YZj8MWsn42b78hoFAUZqJswLtozmuUzkjWwzyaVG2sfkdRyCWiwRjum9m5CqczzaLMhYT9LstMu1eM8JX2cQ",
  "key26": "2UM4E1Eduyc8fqwi3AWkT3qEJELQubjK77hnsTBYeYE9y5LXGpEhVF9d7s2FS2Y3w69QQ15vLLnQCL4PrqDCS6hM",
  "key27": "XS5nwMPyiYQmJZezk8cXDpnx4qfWJXfJAfWzGN1TdKpKuzX8wxhekQSc5uCgpZkbLd7uDydZx2ae7n63HMFTW9K",
  "key28": "K8qHz4x8UF2ibfQXgWC9WXtNcavVgsLP1R9ySv4eg8pp6R6hvBo6Vys9jtUrH1TW1WL9NtgL3UGdy5cuiWtSyXa",
  "key29": "3VGzBqCmBCMkcXS7ZXVpaak8UMVq8AVuq7QNxCs5xWo8fS8jRRHv4Le6G7MC5pqSgwxSzc5VFEfjFUGZwm1iQBzC",
  "key30": "9TfrTQ1iSQUtcbynbgaaGdHQT24f1gwvg3Xbn1opbXZ1UjDCjsoDhZxTRc6LhH48gm6vQjUUnst4Gu7w7JXMNQK",
  "key31": "5zYViNFGWk4BbJUcuC1JbuyVRGboKFvZuV8soMmhN4QseqgAFPtuwP7j7utNhydkpGMDVVzqiShLNrHddX6R8woE",
  "key32": "4A1kL9ikhd2zmkFYy2vV1GRqZUoMC4BZZMkoVU8pkx3PaHDdz4maSUUi15hpEv5GKU58oUZBJH383kgGhpcwWswY",
  "key33": "4J5c3mxvoouoxKD7C9kUEGjyWW57YFs4SFFuFLJtN9SNeSnRDrJ2Z5Sqd5H5e69M4mWsgfVTp2JKxihx1VyEoiQs"
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
