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
    "Yc5NoHFUizuMiPv8NtygsVPrsfv9JhjnxuitkkyAYFGMqrzGoAR8aNH8ktNk2aCB4HvK4wLgjY8ckdBnawiLqyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KmEdhHTtEm8hu16L43jvuNyQycqEMuXf6PoXxFskAN6DBz9CFjDzzaEBexdSghdg7FCsUK7bdzmkJPNcesw6stL",
  "key1": "5KQzPASk8rkDt5EWVDPtjkk5giKPHpvsHBQh6PiYNUASpLjGP4ou2ZXaaePiH4L71jqDGNH1skMYPCTGSDRiDi5x",
  "key2": "63B2oSz66f8Hw9nwjQEmJDpUYb7f5i6ER8uTkaJa4boDN6kXiDk7HJeYDtQPsZY4QSxCrjjmHEV6SP7Q9AdGJpz2",
  "key3": "5WF1Zrh5212p9JmsbZSMRdLSL233eyJ9LkiLxHQKJnWckmbXRmXXARhn1CBoyKEzj5L7F8YjcvJatFgJfUn186nh",
  "key4": "42WM4vjmZVNP2P6vYyNU9gbArAS7wvjwyus3UmCbjmqJFf8XoxZ9m3X7ZNfHJHmya7TcJiED397PwoVpKzCGDW1N",
  "key5": "5dNMfwv93qzZo4yzYhGJxkMEAzLJqurLQxMtyXdGTpaerB71w9Rw1F5Fo7YaNATzxqnYei6Y13Xtoq2eHaNoRMk2",
  "key6": "DnWyv7WsBzKx3f4vaGan8bnq8Lb4M5o4NP5uspX8DFwSwXy2vvHEHcJNup9hPrxs6TcdEi7ogYgijvTBPsHAaks",
  "key7": "bTcFr8BAnyL9yWunFDrxqCkjZWZQRyTAtMK49jN47GzPb1q5txP5GzBh4dskwTtbL6pSuVrQAdKQpYnj2wd92a6",
  "key8": "mfNAGqzreTYdzjnEp3GKMgxrdLTC38kMShk7s5h2hfcWNDidwy8oWsSUznB1yPLoA9rEz1cJbt9mZo1bnbR9tVy",
  "key9": "41erjjqG3pxsGb1MuS539FNLSCYiaCh52LYWvFVDwQuhejS2vYXxm2Yr7tpnKKcSBVSTweXZaowD6vpoQv6vaGto",
  "key10": "qDfzGN5LJGiQJJWfDDJK2deJQreJgjF5fPG31U4EtJbTq9S3ysT2hSRWUHza8eBBySMPG8E2UiCsXjiyu7NnjHf",
  "key11": "57K7UvwRqiUsFgZVN9EeSoNcdiXKK3vUbxCadaQts9HketxfTAxLkMYPihSNP1TzHGfP81FLW4QUQGdLPsdbF6qb",
  "key12": "4QY3LeUHHccYf4R1rmjZYSMVREtsADQVSxNmLsGmqx2P6XgYvdDaURLHt8zfomuHnj2Ck23MMMxGAFW3sKQbQAwT",
  "key13": "KdY5TDYe58dhdcwySUhMHtHyn9cim637jLEBfApdqSBawGE8bcKgfijhMZQw4H9GPCh4MdTQuwaTrmruZn88hbB",
  "key14": "fbHE12F3aaxnDj1F5jk1yYnGCZTAbbkoYuEMw2BmFLeDyAgzCKxZTdh6kcXpPgt7meSfkL9MAxZdBuQiRPUPMQH",
  "key15": "2DLvbvfwH1UbAc8vbNy1Hjff9mCABmh93KUNr2A3pTWpyESsZfVmd6ZYCbY6nnuCbrte2uwsdbsuyfiVYJq5Noox",
  "key16": "2Cr22FZvmAiia6ZuaZs3xrWCxCGTj19gRxf4NqsEaoVdTNMet6snE5RwAAn6tCGXGgDQLMaMxfgf5rEeBfuosTwR",
  "key17": "5JDBD6TsLHUkBDShUkGxGnvdQPJSgmqMTqELP6EzEkY1rwiWQ8HLku9yEkMQtaXPJHN1RuUCq1JX91xTkTdkWA6N",
  "key18": "47tPwVWkqRoUC81ubkMVUGFs8Y6grvdB2K7n3mXUcoe7tmayo3sHCkifEVDqDGHBjw62HhxjdQwvFWxaPJRn1y9Z",
  "key19": "2U2rXgVBtnRBsrcikQA2tHEGtLv7n5a4rB8DpWkag36XUW4wknU3RHcm89DdgpXDEKxHim4xCDYhwk6uhFfqSaBn",
  "key20": "x8wmnnthH94zybWWRpK2kKzxJNLJEWVNTBBWT5tTmHPuWWBSwW2E82LLCFh59Qqi3FjbH9n6h1FxZk7fyGeF41A",
  "key21": "2LbFaxD6fcko2Mi9gfA6HgbY8KGMbYJuhSDgend7J97M9SZAu5PGsjKZszTst9q1U8uZQS8XaREUFGZvLeRP1JrF",
  "key22": "2wNQgHwbgQ9pJfq7vT2rvgYfk12D3sPxFNmcSUVvBfsgUk2CEVqupPXQunZ6UVaL2hzDX6vBe6ahx9cHrafJDiZj",
  "key23": "5fKjYC2kiHCF4BwFyFy3ZzRQAqWjETZ4KDeFCgyhXFzbNQsAkbf5Q366bR648cQKHQJ6BvGrgdauLrrxW7V7M3op",
  "key24": "5dmPqmRL9aLF5AYfmcdaMb86KhSPbMdw4Hs6S2dMwHztUYzXgW9fVdQC5w2XXoJDtP4t2GGbWyKRUWAsCgs4GwSj",
  "key25": "GGaR47qijgBv9sc9eQx7157Rjxx6pgc4RYPbp1dzz33hVdZAjheMg1cjToujTUvEBFEDmxd9XSDEfYLnQ9Wsvij",
  "key26": "3G3QEz5EWo1aMnJ3ZruF33KbFnr6Gk5SvwpVbAuvXBJAkxmqzvys8sAXXYAVzu9G558oQmjLeSn78U9BKdS1dCDQ",
  "key27": "2gEj88q8WnuCQWfMSAoasHZWTXcgCiY26BW4NXzMeERvqy6Cdt5mDCv9hXbizgFxXEEVSfDMkS6rXXgn9eP2SdQA",
  "key28": "22Amxw53f3bjxLiYtvHzm9KA2be2JYy9jv8NZvfShvS5dGTK3MP4srrEsFz67ESfnUrtc7LqRBP2zwJREaHK5dVz",
  "key29": "5VXxgWEKo1wPyrXMPbJUKtG94UwZxQdEp9MJdatEDqNWe4qZHsQnADyWGjN7ZEHfKQQhLqW3qJz4K6TJb152DJqC",
  "key30": "36a66LSuMTLghwT27C5LDRW5kN1HBjngjYm6KKNaXDpEVVN1iM8ViNNUGbz6r5G7bWN2DcRjGQZLL88UPw8SGpd6",
  "key31": "5ifMdpgQHyCAKfZiVs8WKsyjn1VvarvK9SVk9jitYoLihVUMFtf7grq2p4M3sLmyTka2VhHDvh8DZSvA4UkfR89G",
  "key32": "3LBmM48KqV1GLYLpb3gZ5BN4qQE2Kj5AiQePLGutZ5tfL47AwqsGRq6hbB7Sqi43yvr3EZHWhEJ37HF3mcDs4nfS",
  "key33": "3Ptwv2hQiNEBKkimdtnEXaUimoXRyAdKoXLS97wThPY8NmxeCd6L57Z9vLQSsP9UdDQmamhxQs7qGoZnXwKnBPaJ",
  "key34": "5omPHTppLvaEzyzeMU1seC1EKZacybN7oem41JXSh1JrV44mVsiwL6r5n9wSHZPwENPafcdro61XFtZPdhirgrCq",
  "key35": "5fJRznhvmep1BrNKkBdZBszDwvK9A6RBnh4e9BtFy83e4BxGtoS6RWvE4arFCLDtNGVwaoQejSfCwLrYwUhrsU7t",
  "key36": "3hZzN1CfHF1vBoMAWhajW2eD1d1qnELmj3dSGFmzquLCS7cULX9EyptBT1cBVngHtABn1yketjXEKeKrrFaVpDw5"
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
