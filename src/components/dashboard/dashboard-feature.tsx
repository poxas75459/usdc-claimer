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
    "4uF5fvohLsKAXpQdU4kTDYYy4cu2hX5UxQ4XiJu7srGmazoAikGKGigRnrV3gjfURB3zhdhBcWRTW2utW16TAsfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R3sifw4qmWLZXyaGSNUSNXczi4x8y4eCbnHzvxEdBhPpL4JfK9mS2u2HWGDdsMahuZnVRzj37UQxmS3fMVyJQTb",
  "key1": "4ENnjBYULfrDzW54BeMbAERvrcYkHNR3VHxtC26xQGdFbrgihBU9vvoJEGZpVnF3ivMoBiT6jT4yHBx2Eh94B8wM",
  "key2": "35uDa75weSoZr9oTP4ZJYEbrc1iWny3kPDwSYvwSeTw6Ty7Ugu5r13wV4qaKveDy62rg5L8qtZZEwgWc2Kf7YAAy",
  "key3": "oDYCAVqdTHP5MzQBs5ernxA8vXPqq4UKaVY2KvjJxJtjTAXtGHyA1Y2ngjBkQV7rHFaTrkcKPndcJ6g51HB516R",
  "key4": "48rscDE4HB1MejYsWrmeEuXi28f49jLQv432Ydvc5V7sr2kaHYeM3tjxAt1NdCzib4LZwdEHtoULk6wvdAcmJZYC",
  "key5": "26jrVgU45qsiW8UaMdCiWbR4Pf5L1xbV1Ywu4YZjSRco3E9zAN15f16AH9eHgbuxui752qTA4iY18kCu4qN8WHo2",
  "key6": "39FMbsw3RaV91sLNKuHFXW4RteUAmXtCRdNeSgApCcVYMEwiJnWHoGpuNJgEz73TBNmonp4Aojb678KeW8RUsqTy",
  "key7": "ZjGx8YLGREPH236KkYWVJGmLksF7in9HNtuYhaVQio5FakgDVDJsVZ544WCn69VXaJRoVQwPDpjLnPxLxCirZux",
  "key8": "2jcWjtHddPgxTggquuFjQ4pkrYTk18vPJip1i1XJtEfqs8swaPjcqVFngCF9gRNNza1nmH3hYUHr4CBnMVCrJmeC",
  "key9": "3tpkqrRTVmQQNZnQ7gE9aeKD1ykCAuTnkThLr571qBRWdyNARLSfpo95DcLUX5dgjbroChfQxueQ8xKqMQufhcZs",
  "key10": "4cGp8cUhUFgQwMszcySKesfD6ngyHoGX7rY8sMAqp5wzicJ1brLc4mNyL9Wc3Ez1nphxXK8DiWpSZEWDZeoFi1Bz",
  "key11": "3sfJjMvjmyhXxgdsY8TFrTPFmTx8Kf94tkGwcuNreydVeLf97ZfD2xbGNofVctxrPdZvjpLeY3SWzUTLFjoB5ezc",
  "key12": "2ERyB7nkiEDAAXqsLzCuPfuVqrdEFSbfrN9jZPjA92duM547PQzWAESwTumoekSne3TjjCDFi8AqPDEWwRt9qSRA",
  "key13": "3yDiJVTWvZ1jeqPndmrvcemK2PeqnkhF4htzhXt86ZDi6qL8uEohjeHHuX2DKz6pRQiP6JkYCCcmycHL9pMmmric",
  "key14": "2sSdr3FC3QCjwgnAbm786ptfewMZGNFYj3W9AcNCAv9UevyeUEffP1xRqQZyLMG7W2DqXuUNfzRmKkJL8erT8KEE",
  "key15": "4Cq87RP9p8vg1QS3hiQjsCdGyXXToJ4aY6rf6MBGfE7K9pMGRAmewxE7kqHN69cd5ajXpAgPHPhrNPbSFk6Z4J2u",
  "key16": "4E4WBvZVmo8hBHAp5FCoNm7Yi2hzv7WJMEnWW7cVVPZWnY8hFumQWXfB1uzxSjZmPy5bHKMYbzg5XsLJy951kge2",
  "key17": "3yjbuVJbyRgT3iZ3u37HXjrjqnUBS6NfSQDt1CNQ89tQUtehddDSD5i7eEP3AH1n9cXJde7XjBVZ3w3foAR8emEv",
  "key18": "36qYZ4KVrsxmAeEac5arPKTR187ZmrTYDeRNtSjzNFF1r5EhQdLg27E7LJvq8RAG4dsj3NwNmUmkwnhgg3iC9b8j",
  "key19": "5JsDqrCzvRCJpftXDNBwPdqhqqn552duj1LRTEFnvN9DCMMgvp88VUtWVVtrHuKhqDovPFYkoA9SedjkhzYMEcPa",
  "key20": "2DnvfbjTxqcxDyy3nKDZjAocXs7RV2G9oSuU8962J1swys5xxsdpPM971NUKePzwHiQfi3E71Q8mgRQJgbFoZfZ",
  "key21": "3ws2mb3cPob5Aa4vpJLEL72NK5Bx6q4tsTYxuk5MN4k2RNQArtHMbkcp4sSk3f53XCR4ZN3S9GEBL6LeWyZTLisJ",
  "key22": "eDuvYQcxhZjKgdaMKXFFdETAyrosBdH9XYdq8Bhn8yScyCxBPJyC6fF33ZFUoAZ8G7yh3cyWVvB29kLob21F5Qf",
  "key23": "21zdH75a1bFwwjp7v5MAcA9H6BzY5aAe4nfzUy5qpGF9b8E2GRbCmPEiyAtWj6JDkFvLyRDDgNmbrf7PerKgjMek",
  "key24": "5dBs9ZSLM9w5xdU9L9SVgSsenpQW37sG6YAWdAjjkYubtAxp8vXq56bZps6hycAX7JD9Vxi5khmMMUwB82y9T7Eb",
  "key25": "3WGEk4kuW1fQDRprXkNNqW6YDZczW64opqJDrSKFrfkaChhW5gtUqgRqALsxJcervRgSLhZqTAiXJdB65FeuRMpM",
  "key26": "qDdjsxfhYZZDUxpZLkkQA5RYgvBuAYcNzuzm2oDkxxD6jZfpdpZF5YWNnTC9mYptaDHiP25vwYDZsKf4ZFFVFA8",
  "key27": "2AaYc52nFgtsrCEi4Dwp1FUKjs9mdAPy3EZ24ZnBX318zaUFcRYDTHstgYP8dLtZbvsNRXNWQZmvG6RL79gJV5XJ",
  "key28": "4LewZcEqdegv2wHJanTcFCAePj59eYVoGe2zAhjHWHaL77hfiEStYgrNhpAXkVsBT9irWadgGR4WN7Qzb7jsodFT",
  "key29": "5S6yk62RZQieBeW9weg9HfLFF1WKQuTcLdEXhL5R9Af44dtcNZYPUSajgDyqkjWHg6ngoZgVeo3AdzHetZ9SjVN2",
  "key30": "43eKxs8zQuqAHGZ6j8mnbe3MkLFKvgKg4oPTomV1TawYowVX9hoiJUcXwRyZYfekJw9ZXS1yZTBvYmeGxKKj3q1b",
  "key31": "53BEdckKcQ1adRCMxbrmsB8REPNAcVuMrL7UdTMthYMYCcQMxoigdUf5K9c8UWCcUHkC66RuBHBa7MquFVsBFTUt",
  "key32": "FafwpDBqkk6hr21fxQWZ6n4guC2V7af7upcpzeCNysT8NViHhkRNMiCSTZWRqD5jyeFytU4qez8BVwQ95Y1cQZe",
  "key33": "4mzCQhmvmjz8y3ZUaLjCYUWyWf833ev4ktpSWXgoPT1K3GTHzox4yJvvFJGii7o75gANCL3ya7zcLfBCVm4Ez2ts",
  "key34": "3ExigjAfr6X58B7WR3hfN1pWeAUapCJz9kroRS4xUcPZas1GJ9ayBpVHYUyugpbP1Rvzy12P8dCR35V7w7QQ1T2e",
  "key35": "4eg9wRa7ZGBfvZb28rKG7aXLfpaPizAFJAonfMWayFY5V2dBTb5AKnCq9VgqWDnxbJTSFH3sozvcRVjEnRU1D96F"
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
