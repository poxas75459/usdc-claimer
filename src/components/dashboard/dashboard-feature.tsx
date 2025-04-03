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
    "2L9jxLVVuRWAktD3W7GUPqeLHKrvuVciCsZ1vBnC7PuF3LyiyA8M1fwWNvyPR6dYkdP3iXPaFqAfsvLQDHG4qZmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVSs8xdr2ryE3ho6xiVzZVrzMXheKQSHV7mzKKtHY69PnEzqttcCb1wNzDgG1Cv37jbzuHHX8PtJtrFR1H1oRbH",
  "key1": "6jKHtJZS9RCu6FESz8zikoiTcgKRNoCCbB3p7kDL7RVwimNTgysUjdbUNjHoYCKap3wuQL7r1CNiQuSQKeLs7f3",
  "key2": "2Ui7KpZeVYrtGmD247dvhAsWvZ5kuyiXfcazAYehacZiKAYDrS1VU9oQ5zCD9baoiH6vZMJxCeDHzGrmrqHeCFJp",
  "key3": "3dL99RDJxgMEZUjGNZ88XLNTk8nv9DApVvhZiiFnDtrGZwddvugP36BYrFEZK5HDZenfn682YVZ6M7FAhWcr3X65",
  "key4": "3cjC4z6PFw9U5eY84ztKYAjpo7W3pksTX59o2WMyVRcdzADGcxygbKKoUD9RWJjrsJH2znsFPGJecGhS7yQVPqx3",
  "key5": "R9zvbZVTT119Q45KehUzeMEN22hQBuzhJaFs21BMevv6ts8vxcM7GCLUT216GaosjkoRUkosqWek3scyHupuRup",
  "key6": "68wWXdWqUrrtgxzzFFebinZGLprv5vaLTJ18JRXTGzC5G8RNF4JdDapseGy8UT6xqEf18D8tY5bCYNwkqDV2GmQ",
  "key7": "5v5nSzczU2FWpBMAUN74c3ZmMo9EL3ahB5S3RQWqV7tqV4fWasQgFLQeYWwbwkzdjhBxnFTW3uAg4gUG33Pp5xjf",
  "key8": "4HiVkB3GFKFqhJ5AE6b53KWvWdg8xTB2k5fVnQstgMzw4HTMTkMKWb9Vv4gveipJJAZTgnks8W51mZFquYVKzgf5",
  "key9": "57eUvvYTdJFJkd9xUpLp8iu6Fmc1ihtFX8ZdK9P25Nqzbafv8VixhvjW1QfPD4hHg7YvNEkj2ewnrXHsvFUv3Fic",
  "key10": "2zfptBJ89SZPRL9e5vwh9KbrKBb54wjKSxzZwApoKNSZZybXFso57mQJi5XdqW47b47SgyM6gPyDQTNdop1QFaMC",
  "key11": "3oy6bvRFSH97WGRu9Bo3RVNycvqzoA8tpdjogqMuymCV8FsH71uueVTeacDZburYMXyz8FtUf5twFLx1oXdEnpcM",
  "key12": "63UM33mnLSgnabooKboVQEfeJ6RTmQtiqB31VSXCbYtSFn2uUgs5nq41uqtrXsnNEgBks2d9sbRkyCJm9aALnVGR",
  "key13": "4S6xL8tfKm9yTxysWFquVZTchLo3WppsYnAfY3LamvEUtTrP1iTQoB1eSbc4L4Axed5w9H4azKtez8fCYhKEmJ86",
  "key14": "5NJsdJ8VC5RPEbYR89QAJc5QDVvgBpXjohRsoXKJgW4SVGTaVmRoKq97UTNTLQuT2HNvVQGkwzkTBUYPTC9kqDWv",
  "key15": "35MK22T8VWxVLMddTYjEC1koCDghvP9AkYMzogcZAaVPtMjcWQ3SuMaTmsyq7ig1ge86WFAWN8nRyG4MHB34wnyN",
  "key16": "FjRViyqehWFi1aLGtN4pN3sv3EJaoDW9vVUfapzYidJcZ7wJ5oerXE79NFwjffoCm6tA4tB8EQZStbdSbJTSPuj",
  "key17": "2TvERMHMRMpr3YeiZsWePPQcgj1CpqhL73KTZM4j8KhpamMvG2YiM1nLcC5G1cQMECDthTa2aJZXNsVaGcszxvFL",
  "key18": "4CpfQfmfS9uWYgDGyPZE7bona9UGtfB8kt5uzKcLGTfb5s9VquV4uwycojBNyrNDhqHMfN757CDLL9ysLEWvzj8o",
  "key19": "34iatp16f2yF7wfGenhdM1pyPKVhduHjifXpcpJYsxLNwLT2d272L9fYfq4djtgks27p1xbU29bPZGf1JrhkzyC1",
  "key20": "5FZa4sgYP3AEtapXWbvyUCd2HREUmJRiPoEJxYjNY3gyFfULnJccLzG3esKi1AnAaQewH2AiE6mEuZSjRAQRZDCr",
  "key21": "4Rs1zch74Y3mW3jSjqqdbkYdoYRfoEPF8aZkyCxm1mrT6n6sJhRWdxR2SpKe3TZEQsAF73jVkkzppsz1nc9WPyWr",
  "key22": "4qqusN1682saLnrQDmfVrMNiSyGV7mwo1PMB5QMzoeBkiqswXfyNQYUBMVnkP339UVPPuQNaEtExtaUAkdyDoLXB",
  "key23": "41Tg4v6ZquY7BwqC61xjpcCchFQnp1Go5fKQs1JjjoYLiLnjV4sN8vmw7m4zPLxX74etiK83RPAhs1rFCzwCdyvW",
  "key24": "2RLBdMWttsHNLCjhPB4u3hGqLh9BRjYtJ8TsDZMApVzksoQM23hyZfwPKQBsvptHaQqjexW8Xi4Q6MXZygESGesr",
  "key25": "5UVre6ZRbHdhJPf7Lkz9Y44MXYZxuWKZSvBRzcVf8NfRMjQwT9SQk5GKnKPGdNLVJ91PijBtfphxc31pXmr15iXd",
  "key26": "5XbNmKUbKY6Lxg7GVvrceQf2HAqJGn5r9Xr8nomnj47E9PFH6c7edBWPYgpkd8SrxyCk4JhS6g8LkFvJLfsRyJ5X",
  "key27": "5vocZWKJMZYXdheNaeiwq4RM14PS8owShcksHJtSjL3T6tzZ7qx9fntKcsLKfs1tgeJQ2txAwnUPZbg2gTt6S3MT",
  "key28": "5kqCfNpHsbyX4AdsQWhcGcGkpLfdLQ9peSidM7ASa26dj2ANQv47skRuo5e421JPePbr59xQSb3k6YGofW7ojVuu",
  "key29": "4akg8EC8PsREgQacYWfL73BSJYyLNvknU6sW47DrKj21NKnGosv7ABYGW3tHxMiPVg68bmNaGycK9SWfLtE6yPsM",
  "key30": "5vbK2f1SyxDj6oDn82ssHXQvow2A1tGTiPsLydRmdhTRK7Uf8P5dd4DsNKDU3WxwMaTCg4aLfbp9PaGR4HbiGsfq",
  "key31": "3ayQAgWL56QzqnupXyHconcRvKSWCczG6LRsFw6Ez3qU9JUqNwKSmabutBitMJn13ix1dHRXYFUXWu5ik3MbnN1S",
  "key32": "2J4EAnw5pPTHxs6SpoULwd9TKQULo1GsF6woHcMwP29KdEhBDWcFGr2tgLbgk3JvaBbojEh4EHrYbXe6AJxzDHnT",
  "key33": "31tcCo5Xjrby1XK6tiGV9DTgZcoe22hdT8miTteYXoUCviKgRgGBCTmDMsf7NJuxKCyhQk8A6mq28FVqqh8QFgeT"
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
