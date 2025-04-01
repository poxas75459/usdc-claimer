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
    "3gkM8XxxGpW9v6iuj6aemdRcJGqZEv3j4x2BoVu1kpcsjecaJSzJVpanQtdYbyFYMJLDckZP6KUvnp1kpMmUT5kW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eujTzzSTkoXtjSQZdmiEm7Ltr2jAi3X8a7q1PhbLckpE9YBTBNweFs714WvzXKG3CwbQPR44Rxis89zVYsphXb5",
  "key1": "qM28FL4dEJxany1sUwJPZs7uTqRSBmgWNeaUEwKNcRdewjFykxrCagk29nG7cyrH5xpbvMS8gvzMzygsm77DzAp",
  "key2": "U3HtboJputj7o21EpNXJ5joLvoqb3yHSzw5ffSE6BNo65FBV4jVPY5FxaMF3iiECZaYK3Aj97zEZx75EyAcqBo5",
  "key3": "nUF9CDpwy614geyvr73cae6dDQca39kx7vaStchhnikKVm2L4UCirRJdK3gneQJCLkJf3diwsyiDYzKe2JwhAZ1",
  "key4": "39KdRmoaRUrL9jq5fTaCPcTVFJfAb4NHzWNRKYL7s6jWbKXxqwEeASVT8YCnqzmSa4rnXuuQ9VXAHMC91mbbqP5c",
  "key5": "4xb1G5oWgWpgML9CEDq5DJmtAR4b47bGyiDKpVqoViQ2NDCQ3cKPay3hjSVdZrW65CmwHVG238hNEK5atL9cpp5v",
  "key6": "5hmKPRu44FfM9y2hVFnzNXxx3pKcEGowLxw49fiwBSvagXxT9EB98J6L3s64zinXdrRKCgpfFRu1C7jZ7Bh3PCQc",
  "key7": "412LrFPgYg3AWDUkAVUydvfCiiRqbb5sYmyRkwmwiTsYCikqB1zVPPcfkAEz1KaiQGHVdZg2ALsn3Qt8JqyGzWEX",
  "key8": "43fhocbJ293e5qtDXMNTVswsvRLaHHJLZZUaUFMmYiEJPLikEbTQrn6XAYYnMg4N4evwNjQRtBcSAXJZsShbP4ji",
  "key9": "3N3JeTbUsqUpzGq5396vNwxvUjY4t8EyMbZn1r4ouno7Ub8kFAbTkaXcSbrRHLKmYPQB9rJJpt3ci7QvoiWRWujV",
  "key10": "2jM2BWbdhNNJV4Tk2FfBYQ15sFMPAcFpMG6qMZP3uryxrzzC5YQhasohoWmiEdogQyfFkgLqcT6jaa5uW8scdXgK",
  "key11": "3w463EGxEHUojJuCWCpLPzpNzSgsUzu3HV3Bysvwd8otft24p5gbvpC7YBdH6uJDyFnGvZHmTRyRecAHAcvKTsTo",
  "key12": "N5a2xxgXpQXzrVi827rWra7by7ZkJjxedxfmX9dSn76G1KtPn6EE3usESopu4P1VZhapGm1hjqkbDyZHzwk45kz",
  "key13": "sXJNdFiWDzuHybqC8hevWNDZ2RdhD3GxkrvX3TgXC7DW7HhEQQDxHdcfBwnoHteqPzPVk7dFGeHhxkd9YSHUWjq",
  "key14": "c5EEb9PtJQ6e5rRSy4YEieA2iqszqyxTGaq1rJVdgDckCYQp6aYEyhchvhn372Qcg1bkG6aEZDNepQFiiGrtGYW",
  "key15": "2GuXW3DVswMLxd512aaporP6QD6kpu91Ye62qvquMHcPmzZsCUuMADcy6VofpvAZukT51CDtZstJWBFZ9H7PMKx1",
  "key16": "5RvW8JDiPgXipc6BchnSWPQZSpwMZWXShhxv6u6C6xo3u6iLGyhommdD3AGVQbmBsPZM6hByLYXcjCCqA9wrgrLN",
  "key17": "2CvUCSTWwTahD9QZZHBwKPid6q2SYuyzuVatUKCfEdBKUgPfrbzDJSnUK9ouYhJtzwzSDJU5NsN3fTob1TsffW3h",
  "key18": "2Fmh9Kb45YwhvJBXxqNjJEA3zJnZLxu6f5HZ3FkFXwoms4r9ns9UCVJZ4BG9dHp5VTxF84voVU18tLLFJaBpBzyw",
  "key19": "KvL5hLULdUQmHH5e3LvWAn5RXDCBz8o1ouDn1uZPrNyxFcJzsR45BB1bp7wmNWJ4VgKuc7TjxHuYzyAfKdYcHNQ",
  "key20": "T8D8jUhfP5SPy4eHcg4pYJpFbj2mqbGxb1hSgsvXBYcVYLETf92CsfsiDGbKFZ6eLGF6CJB5urj3KNNKDRLESvM",
  "key21": "5MP8nSuAjmm6rxccg6mQDp5dZw1HdcHyM6PwfAPo5VRrgd44bAZpbz2JeEpZUtK8jX86PaZQuVvwaPbxkTrJiErP",
  "key22": "4ModCoS7Zskbx5HrEFvQEKNuRQWR4iB9BvXFBJpbqMcLNELNiEnQiFbt4QUZveJkL3kuUCpay3X2kwKaW9DMLMKT",
  "key23": "65GRyxRKiegjMMU82y5PnmRnskS3tyrtoqDniAriUM9SFa6nLJc3qeyqLf7Z9n2QTrkYbe5TrYms4ij9cH2eij9M",
  "key24": "3ViYDFKfF8ntw5AXkQNaCvbjzAGdi82xAxywLusKW1txG5amqmXxM8wspLKdjqppvsUrjkhKssLtAVgw2afW9d7t",
  "key25": "3UEjkEGGQsTVZnH7hxK4sUwntZkpuoG6Acvq6f1yJhnMPyyLYFe4hz73QoFKqSFot1yHigi7Hr6fBv4gdFfNoXEe",
  "key26": "3x2zP9LGGDk2RLUhbEX1AedapYeHA7STsUAn63YrzzdZLA7BD7HvFQ7HZN2PsDGLr1qzUQhjZ66j2dF8L3v6hLS7",
  "key27": "2GshxaL8n5G4yyjsemmrSRBHEpsvv4kq6YFfd96wpdZyQMyYBZa3UDfvH6EFPfm2ijp6yR1ZLLXh5qEu3XTyFDEr",
  "key28": "fZ9rNoBucPFhtJpNmCXcSgrqBWzuesWkbzw1kooPRGKB7Yq471cTvnwejnxsM2Vmjq5V7Tjd125RkK98uWb5bi6",
  "key29": "jEzAPruhn4CW4Hvek6CMKZ6v2kUeDysccGD4E6Qz5DpMhdtEi3HPH7HSGpbrCMGqycALhVFPMYLSJZ8XFVK5zRd",
  "key30": "2LRjckrzfwowGTZtw5Ky4JiEYaC4bSVVzpnKSc7EqYDuDG6mbJ79LdYytbu93zBs6nTMJvbeuw3qnnCHKddjCUXH",
  "key31": "2QSHNAnAjE3uvJHUCwwjsSuj2stMaukwN4m6HY81ZtryaMSyvHLMxfgGMSrEpUCuPsfaurNrJzmp9R4sgzAefGeE",
  "key32": "38gLKiKov2DqXvvoYbZtiELi4A34kFwsP4NbWg2TSwvTDHTes1KMbsxbxeLaYmULBm5B9bLTvsAHxxuQp2QnyoRd",
  "key33": "42jua91pNhGHs2kdYeMJnLEKc9gwKQDk3ooZbxPPs4a1tZJLuFNkc2kbCCDDe17khm5jBocUAcK1PgvwuRcpCnWz",
  "key34": "2GzB8tEj5JeBCKifEqdnVPLs1BvdsWLNsrMxV4UY5oVHGxm8BumqKgMXQux1tBv6cjk4qWxPe7PJADHM4d4bKqSf",
  "key35": "396jjMg2Xk5b3fKWikmsDcvzBEpP78nTFcSKJsBgMNW8q7My96RsyZFyAeT1sLTEX4sWoEzRM6pJdRes85s8F1P3",
  "key36": "3xL575acXrmaxPPL5pydGiDzKAmn3BWboT5crkdPURQ3A6BotQNXfGckGeKdbqgL6iykYP7QjvqSVeTXxXkaGjrC",
  "key37": "3FrLzH69tkucxpw5BZwGEhn6x49wTR6zrEsow9BWPcVpxDsswNs4D3V7HmxcCFsk4Q8sYMnKBurghC6A3XdhinBQ",
  "key38": "3Qd6PMzpkKpEfkdBoPTMmVUsW65PM8DEUxFgPG7SdZwEBB5K2iyFMiPJLUuxtE1bZZoNMPqo2VWTKj8RM1jyimRx",
  "key39": "5EL2xD9mrkqAjkHZwkH47uzhDz7piowBPeBwLX81AGSGoaXn96o9FBmSvU6KyLx8Zre6z9GK4H5vUFEgRTDp7mJs",
  "key40": "2yGj4tWZzujgxWTwkpFv7kWFaA9cpHWYw2BoAZQEGYNESoDqtfPa4Kk9CayRWfimUuQMJMMPcnCDzFCwoYPY3xAV",
  "key41": "UaxoViVovBuEBLkqGFpWdPK69j9VFfByf4A9c392drTGiuh1m9xmjdK2pRhdsPET9TjMnunL53N6VwNjMaF1sWw"
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
