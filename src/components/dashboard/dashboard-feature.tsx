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
    "2jgRNLujkf3DntBoxQDhZa41XicZzz9kQSAMiryZB8kyGZc7nj9Fd7VX4ZxcY2RVtrZRwTJARDeiMCiyNJhdoD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jGrodxVm5Hd2L4ddnemeYLiSD3F2EvHi955fcNN6nwDhcqymtehk6xqVtVnFyYdZM28e5GQkaHfduYFq3BDiizi",
  "key1": "49kZe3tBCxuKeuvepzKZTvfLUtT2eRqpjcF3ZFaDmknaiuEdQeYYdhFM5TvSNyPKd2pbJTyjNTJSPmetVjf7Atbe",
  "key2": "4jkL4cc6mrzsKBfhwJKuV1z4fp1gTsxheXgNysbSpNSqHhGwkDritYyg8rNf1C1XmBpnqc1YBGGfMfA5RSpET8Y5",
  "key3": "5GRqib3NQTefZaYYMDGDfBev1PDiPT9CHh2K5nKnZB8TJtFZGF8PXvi6qu2mxfhSoJoWPENgKD5ToGQaF3bPdsqM",
  "key4": "4eMep9QT3wKJRmkgbV97AerR7JNxsAYcxgn81tuB8oESMs4sBuf1hLdK5Jtt1EzctrpzFcBJTcW2SWph5vhcAYV4",
  "key5": "55hQ9KgFJm5bnegMwkQddGfsddUF2sFsK7YhW9idbfVgcqiuzci5uBz1HFVabK7LJDiE3eHPHsd4Y5X3ebuHTLqz",
  "key6": "5A7oRdhudgGMncbDNBtdmL9ATSxScWHTCPTKHS7BdrjHCoLMFTkssiiXrkD7DA5UNwcRe7VQuzC6uEgKNsmNijb7",
  "key7": "4fBzHMrgQAccAtyRZC4dc8F7AtuNoXvJbYZkGUGyeYqoqnXHKwAVL9mKyk9abcm7VxAiw55p3LPTYbCwLQF5rsYS",
  "key8": "64dQFYh7SPs6wfNjukiL9hrERmt193UKQ8W7bv3JmkWQir8H6aGSNJhkiMZdaZQSAXtnTEgkNBKt7AQndACsBKeW",
  "key9": "3ZVUj7ptnLtYd7mQacZapqyKNX15Gj6UUXDCi1YQAYsmomBinU32AFLSsCmQpn5Q7QLgUZh6WxePHQiD9gNLUTGu",
  "key10": "MuitqyakQrby3HEABAmPJn694o2Td6bSzamnV351CtUGyWqNa5pvAfisdd3MTPCiSXBhm6nwYJUzmEYpZKTKt2t",
  "key11": "2stMELzmQJvB4CNhDnCRqwsXmTyUvBPmexMqPxGjJUvLaZRJU2WNY67WofBpyuvGEn4jPWhUTtyQ1fgdJUEfTwcL",
  "key12": "2ZG76hPRyNv6rFSWYiwuXoij2A3SLow2xDjUKph8LFmjyBYGpaDmXufP9J1rFMvDsDArJpSvSj8c13PwvyrjWy8s",
  "key13": "4XzTz1asqB5XjAiU3xpdaR1LUuSGr2QjVzvoosVdcya1PH3EkTXjWWouu9quyQqcyp38SZj9oLdK3mZa3d5chwJs",
  "key14": "5eYUGwj1CH7hw6ntpZajgfupiRLAvgyxZgTs5VfTZBtg3oDqBKcPULggf3YSkTyg568K8wZzq1wDL6kC1Fi1Mb83",
  "key15": "4o5fA8c3nsFCSkP9bzCehzFuKRGVz3qteFN5X9eE78mUCqY8PZAGSmg5SLE9U61JLq5GW98s1zzC2x3JFcojvqyW",
  "key16": "DFBYfVrDujYu5YjPTbXvGgCqw1enjHue5yqFez3zueuG49AS7H1yDdt7w6c1k2q48C785nKoxcifRdJ8UKGvvES",
  "key17": "Jc1ZPvrcD8qopaozdLsAkg8WRdtcr1YanFGWrpTo6gmy8akJaMiqqmDihFz7RDHeaZNJfPBS1Qf6Syfefvj57Nh",
  "key18": "5iiDJG5Hw2cq4enZDGJvmsW6NmPKWZwV7vENBvyXPNyLEjT5K4xDovj4k28BAJzA4ioPjPnmi8JH57t6PSqebUeS",
  "key19": "2muYp6vB3rPzujwYgSYpdX2vR43JjJAZPpgwnsuDmm5dSL6nhh5kYpfkNRQyAg1AU5RtpeTMiD4phSy6BiegBDHq",
  "key20": "4RoZE2jRDXftWLmTPj27YdKShxhS9Pk6mh9f8b982wrMRFYoAHaaqBkqyWKKz9n6akBnuvfW5pHgdzjcgXwqrnaG",
  "key21": "zTiSKAs9YPkM8dbv7zJM7tvrMhegJ2aRhiZcR9HjDjNTMRzox6CrJiNU6ivu5ugEStzEzBR7KReAnLuvCk3JKqL",
  "key22": "491jsroxCnZqk576aiUGNSEXAYiJzedoa9LMSyC2R4FCuM3RKzFfBNBDB2itm7ioP8TP3ocW83r6sAiBQDAMaEe9",
  "key23": "2P2aa7ZqRBe6LSjCwXBpK9zTLxCS195cGtWtjkRYifnoZMnd3CeqbmAxrdtUTj879gkxRYCGdurmnYUKb1KpwvHF",
  "key24": "668UdUa3w5UkMZh4tSmTwUPcJYjn4DiC7MHdCPj6o2UKNpWskMZgiSHR7GJ9EnLZJRH8whPxgYxdxk3QkCrbfWg7",
  "key25": "43wFGwLSR7S7fsddbHaaJnA1LyVfQE7YPG3jwwy1JfGGLDZVPrVHxRkfEG7npbgemwEt1r8sDcdEEHqy1TFonMuT",
  "key26": "3JEDoV5PJpQVANgFVnzC8MSx51xXPg4FB3SJ3BUPuTpntYGwJ1RuyVvFSN2jDQixszWagY89KA4K1Xe1UHeATGWF",
  "key27": "3TJQvgHb5Z91ytcduUtXpvXDJZQT8J78nsVYnpYJxxrbXYGc1M2BUzJCMtkYzPysMY6XK7DdX95FE9Bv7jHhR441",
  "key28": "3irejR4PJRGYsUFDFJfsYqoJT3otz6PW7JxAgPucwSsTYDiQDpjo9iswc1KaLEgnMhZx7DMGp8wvCXEqEc5G5whZ",
  "key29": "4E7kDnvzNW86PJXXRF2geePo7G4FPn1W6GJ1VGzymXXG2K9gcXsHiMbo33kkLmFhpifNVZd9cy8x1pqNcVKAhkKt",
  "key30": "3Gbgtqaf5hdrRNLzNmBktj7JdzJDxVVChYeaoDuu1WEGdyWmy98XKWKi52Y3buYTFtLXhrEoFWzyz7HQ84dk8eRp",
  "key31": "5imQ3pT8SvfwS7mokuMPXf6SXnDyQwVwkMhy1EtDwf57PK3UtBwE5DrFu5yCZCybyHB3PQmcAC3ZA73cuCWRSSfH",
  "key32": "2PTkASKAXydVaPUjMetmKMdKYCGVfsWcbnBmadEWkbKkjAca4VXaDYW4ivoM4hk6Uey2CZ1akCWCo9NJnEQQejtN",
  "key33": "4L8M2cuE317QD82GFkPHCLXMta8ue5mxnDnHHYctaiUC8KGdvcNAoEr1hfUJJMgmzJarKm1SwcH9rt125JLwt8wf",
  "key34": "5Wd9KBDWFkvSqbtZaxUpEAjxfRNokydN7aUZrMCvYLKsHtwNdeuYoXFZX6a9hVmSiwxSQbg26wuLdppMgxri3PTi",
  "key35": "3FtKUZzdVY1VmBrvUt7jdcttzSMnhGq15bKdounGyTwHugD5D6x1LQo4akncEna9MY4FUYWHW1LC5LtXMSfbz4Yf",
  "key36": "3Jjs4ZVRMVy3tTqni9BG6kKXBuv5UyLRAa2Y6iYbLQ8gSNYApbsZr6zmgR5JCpTSbUSyYfDksBeuwE4vU8oMhbfE",
  "key37": "33hGnHBfMbrjsWKrxdCK7G3igzf3W36KXXdj9PpRQkyLHGXkzE9MNTgqZXN99iQwU3cRfBVnZw6s1rNfQJn3kcp8",
  "key38": "4uuUU8DrjRWeNrEWN547vvYwtYvNK8ZTiN6j847PjwwhryusFNcqxQQAv6wA2sL2Bd5PaSvA6N4wcGSfWKebs3AV",
  "key39": "3wgaVgzJvU1vWGqawaDFHf1hqBm41PwPVNRjeVVmJ6FEC2b8gNQnLqPjD1PUnzxd8baCoUzCdrnLiEcxC1PByMML",
  "key40": "5EqTv7RufXAFxAKKzDdaYfnhEgABF9nSts414hnC1aczdiFJ63vvWq2npWcZKKgwJHCrDY64nogJNTnpjkk19ZWb",
  "key41": "2t4c7tpsdnZEMp2LV1ZZzuCGhBBZspUzCiPQnog22Fs4RBdjHhpQNZnM2ZmuNsAMbt3Kme7yTyjsfYaufVL3yZC",
  "key42": "3bit3pZ6pU8BXnQD4V1Rzm3Fj46qeAFoXKu22QvUtdbDiUQAQX8K9PbhyWEoai9tFGtn1GBGeTaqiEFNRJ1mWfv7",
  "key43": "3ppt2oJqGTyFgewNaWqUQZaD6DrFGEPfyHrRk2yejVRWCnPLpQzMsWfwGdsRqGk97kLDa83D8QFU1jcRgy2nj2to",
  "key44": "3MnCdTAUVUGJDdhxcKcpYZWdUXHnSYe4AefuQG2EeEH3pmfmm4DQpYaNKjKhoMMgCL6MF3VtT7qfjEbSmTu2J7MS",
  "key45": "Ma8mFoUBaVwT433U5BEz4SLSuHiWkXYy2N7FmiWmzErwSDBiKn3UZjqRkce6F6WtUpSeptDAKdQ1R2uLtsA8uPu",
  "key46": "2MuEvJvsDMN5c3K3tXnruQ2osGxtnziFiWndRsJGyCA5EkfaK2VbqhJJE9LBU1YqWixCGDPAs1htHj6NVxSu2KAc",
  "key47": "3Ym4rDxB9Sg7eJs12SoEK6qTUfcJdy6YgazrWkeiun1ViFCftNiBRT5RcjbqsFvmyNH82s8bN4CwgtCWfXFtePhi",
  "key48": "2RihFrBtooaNuFKV7EjArHmWmoxDNBc8mx3mcM8g6Cg9K7pDWEto5fogKRXnZyZLvzZuhZT622ZmtcQGPDUm5MfR"
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
