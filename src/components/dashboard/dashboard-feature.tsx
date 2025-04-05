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
    "hMbp3ZBcVQeQbT1FDAhSgQgq7yuZZdw7FJENDGzM3kzYxyot6VRXgjdXt2oBT7n24epcBTRMvExNYR96MXDoHiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62WyK4Mh4uYzcveQA9wTnkViwyhbZFjvaKP673StqUt5GXgzLP6RFMX9V97W5E5BSS6pUNKVQfo86FuBmcvbtbjv",
  "key1": "2MyUztvtHa4bAMa8GopuGsCpRyLdgj8upSGtTDAe4vumBeWdztForqRyNTZkbtaH4gud6WvD4CNHyfkbuUjfmTsp",
  "key2": "534C9RQiu7bmT2Jd2DLDXexWMZmChNxMdfqYSujswQLbfQm2Cto7nz47PnmzvDsiUYbp2BvReJCjTxorRna54nyS",
  "key3": "4d1FCCb22AwY6PrfvfhiNmBLRk1zU7EK5GpaibbDmev7otBGa7D7XNfeoL5hDGzha2KmiG6yLAEnLxsAczHdFDho",
  "key4": "24zwZE4M2e111RVkB7qBLSVCvGCsWvcYFoZyE3fnka6ckciUB2DtuTcyeXyV6JjaeLZQkCzvbzR5JAtryj5NhPGj",
  "key5": "318fENCEymxuu6qFA8g7DHzARNooDws7KCmiBRWWtxRbjqbTdFt9G9cXywiyzBFpBY7VMnqGNHCMFkMGoKm2hKHg",
  "key6": "3fDQR7KzjJsJPcrkrnarnFQ5xS8hQ1yEgcNiyXV8eHK5iWPuHvchmj2XteX5iNCsZNtLc2rfTWNaT8ZXTQvcZrPK",
  "key7": "2iKRVDQsKfd9581CCLzA4rUpm5KvFCr7MjvMhZ1ujunkPCTKDdjAhHGJpTcojCQmqiuZJCtjtoswRAb7wJrRpvVt",
  "key8": "2FMekVzVVZXkmngTNHCvyPfVVgbrWJmM4unmeq8cZmmRzy84H6CkRJQrE1coY1KFrpbgRLShmWN5k6CgEnMVqi1U",
  "key9": "noXFPo56zCqh8WVNUgLDd4jfbsqPTSnpe65SinGR6EYQiUvh9DMnJuLZcASf2FkBnSsqBJhQX1vJaMNPBhQ1ACB",
  "key10": "4asf6D3hhPpfFzYQM3ez2gkGNKY2bFrRRjZi5zqY9tZxY2iLc3MJzxMXVfZGs8SgU8F1PZdrPr6L4HuH5sK2CGWA",
  "key11": "4Gws7CdeAVyN5YBSeDa3rbAoiJh2C2GWG7eW6Y5asU4PJYW184iQgpqbvzT7THg4oLXja4B449KJKXYdp7FrLdXb",
  "key12": "24v1QDyevwG4ibihSDMRpn4kFngVs29KfkB5PhjX6DhvoKJm6rgrsVuQVvUq5g2EWY1jSFP1gHgLPbSD1niho3fH",
  "key13": "2Y59VnzsKqdqotj7pcXHZXE7VtUFn3p1pv5uo4RPAXpY1Sy3gq1XUoTRtfhSEBXXeQeSRSjAzTuVbN2Lxygbuo5w",
  "key14": "5JgU8x9oZ935aB4Sst4vXajYEBbpMAfqsdcVyfTeiETD77yK7t4UzdEZAwYN2bWmkkM2rGPkMznTq36voezZztXh",
  "key15": "5qBWf76pz6QvSRzTzSYfp9CjusnhWcxN6EdLZwPJap3ooPnkKoYmDPpGev4DCPrAzanbX32yoooTcR3dFtQraaoB",
  "key16": "4LcVGKToF74rjAo5QyYL3EHVNqLmCvgL5Uyw2RxQwHXBFb8DErsQcRvg753V2tg3Yr8r3BMgBZP2GFuS1jLt1KHM",
  "key17": "4VNizp9HikaNF3qQcuhFVG7uuQhyYfYcYUMXndDJgCRYr9hvCa8ypEVbanBgy5rQJkdF7YhFXeu2G7AmpzVczz2P",
  "key18": "5VF6o5bFXKX8D2RyX4z49aoutYLezSoLND3oJAANMYqijQjWn7nyeCmCft3RsG5KKpyPpr8fvJ1A4Jh3iFVmub8n",
  "key19": "63JRXNSHgEeJStGzdtdjQUuvkbJerZz8hhkXKK4VtLBZYGsVq5uqF5bP9rn4yYzDijnTE27GdpGypS5YSVmPUjEU",
  "key20": "2VXajeKi7QFmuhQhpkN5LTMTLh8XW3osP6i7gdfiuTnJYym9HoujJS2Jwt5KqzihaZYkcmBWN6PRpoDxzhv8uTyE",
  "key21": "2mRBP4atCMjMxx63RDGAUqkQLH9PVNNSUFo7TMsoH4zrZ8bpgHZY7aFB7hqxd4EQtPvTCFTdj1AFPVbzsB9EcA49",
  "key22": "56QmB1T4zBnAhEXi19j7HR79M4JZMaBr3XL6Xe23nxiFi4QnB3yKqnaGf4Hx67atS9iTgvzcPk4KXkMJiKZrxNSu",
  "key23": "mDKdJQyK79BRpR8z2zWLNhCSF2N3uLw7P7ZTPZ1Re8DoNFbmNtRj6zKjdjsFWC36Jchdkdu58uFGD89TiWAx1ip",
  "key24": "C5uU2x65pSE9CsBTZpgU2TAFKgZbysSM31nPxT3vAYiqHM94y6eEyun4u6DCXeYaVFRtp82YCkKdAN29rUdCJv9",
  "key25": "WLxWkhiN9g6b3pMwn9GmaiuLftq9oPffPdBQug1YaaVezfeMaKEPUSwoa68vN9mUi2VtZbmFEhHTiDx3JUbMSvy",
  "key26": "4skX1gpHmNVgK7QH4QLpqiwUdqJbSTuLjyiMmriz6aVcjjtJxJxRgUp49vZNrSWBBVVXf941mFz9R4ELuLhzBzAg",
  "key27": "2E3cRRH8WsUaETCV2cjVhgQoFv8zDTitRrftUyA1zYnWRAv9rfX9fLxxFXmW76sGDnBTNczAbiJtg3Rj97uHMWp8",
  "key28": "5BZC68Yh6cyWxRUfTfqZXg6SXsCbU2byoZwhnh2KSqitwj6ci2ayKzk9URNfqrHGhpCjCocghwUm8uaNyMBiuF9X",
  "key29": "3NmAZ5qCZPLSTyCtA5z7gesidecQ7SSpnu1oKfUzrEokH5tBSxmdzXwYkfrX1v41X2BHc5sK4phGNbHYaJRjt2wc",
  "key30": "5QL6FZQv8EK3pYTEAAX5LE71bLDbRQLWrfrodHfJL95gHb3PLFC5YTuAFWnwqV8JrFyi15FvoVK1cLR9J15gvzP5",
  "key31": "3GgvfFCK35aqD8v8SAsPG4QvMFLKioLdLZregLw7FzQXEZN65QDQrzyPXRBzh7X9xxVQduaLDCoUZPWqV38TRdec",
  "key32": "3qfSkccm3vyQGevheK6rg3s96sRQj3Zg1LJGqNw4ievn8SuZ8qGmJkjnTFX9f47ka7tDKsm9H9Qq8sy4FbA1McV8",
  "key33": "3gpZKg9RT4zPaJfihBh4BtsDWjvQ4a5sLPMCR8QshYhMVbSSiSQqwndTvcW2n8bSpXicvkSpuGPAfSzh5wBCbAeq",
  "key34": "2qWBNzc5f4BWopeq31SbLtLD6KkVLxTPUgJrfidUQFwfwKWpQcgNcEbejW4Qk9C61WuNUsJcvLim62xQFpfLA83K",
  "key35": "5EfY1z98TFapxJVZj3aFc425nMecXCS2vRQC7w4XpjxmYQKhJhWKWu3YGXW9fVzaYWbkPQtqgqxZrm1Z7swsqB3a",
  "key36": "2RXbjLTfZWaVhiUNzVDfArTZkvxHweMQdQ2kJc3782aD3tHHGkBUXUFDLGBmVFwGkpnYgL8EXSPXjkGAGcB7nB48",
  "key37": "3chsUcneVCXL3dnAgmgVWCb4uKi8pDLmyEoFJUmfU3gyHpR9iwe7YhnUTtjan63JyzoGQnqFxeusk8PLeNbQnXup",
  "key38": "58Q9yfDHsCCxYaFoK8b3gVEuaTMz8vbd4XFgavXCpTk4hTNojRHwxgL2FUB5cYmnhashSv232dE83x23m3WyfG7H",
  "key39": "4ZipxkFvipoLuta9XrEsNrFzuy5Fnbegq2FjSY84wH3FNSQciYdvnLaEiT2NpywyF8rbpPuAgPQL7cfTsRM94Vhx",
  "key40": "5dfRRf69VTuf1p16upBddADeJfFobpwcq6GcbgoSFueZFJQnK7QKAi4mdnNfse4CVtd3q2cjMQaz9tMBsoTtTibf",
  "key41": "DTf5DCccvX2KWK7Ms7P8RApWM7WWTAMbATeqPHtXoQX8B1fbYhKGYEYWZBfgEJQJjt5zoBVcsnkLysVCtYRif4S",
  "key42": "2pEaw1UbwDTyAKvqMtcrBfH2GeJj7VJsYPmVBVn6Gr486Gmw3WdTJ4pyz3A8ZQ3NBtj7JNR1k3jAASA4i8tmHeuE",
  "key43": "5mCdNoW3koD66KF5c9gRWvhZhG4kq2RZ5x5Yuc9LQrX6w5hEx3zkFgMb5TZKJcUQnaDSSkc9H132ERD7cWHwaUEV",
  "key44": "4F68YLbRzqGGa1M77mhSwyYjCf7We3YB3jJq4dSBNkdNyEaRccww3tNDqw1phXekfUu7s5A3ZSzk69wsV6XqwXTv"
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
