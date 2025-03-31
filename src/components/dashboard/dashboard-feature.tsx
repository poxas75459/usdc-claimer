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
    "jiEK4PtyV5Xp742CgSE2Ws2fLeXJTxqJjH9sfmqgrKs3Ged3W1ARpNdiBwPrDrNvXe1Pv5FNEYRT96KGwevY5H5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uTtQaVS6xWcrfg49ngUrnWgpfJyR8FqHm1iwGMrHuUNHMkLVbxLd3sThcShXeEfphU5Ma44Xuy5t638xUu9x2Rj",
  "key1": "rbE3ut49nWyzcJinby9uCC3cDwpL3aZYYj4RmjtLYStLXWhZXSzytQNnr83DPvXahgEFSEVLdkPSUgHqyxbdR2g",
  "key2": "3r5YFwUicUwghVQVffYt1s2miPmhskkJJVXuKgvZRj8bLbq7zddbpNQrmyQYCyd7dXThg7gRe4Cz9cyVMw9Yiewi",
  "key3": "5ZiEiT1gEbRL7EPdyZuKPy8oESgrJgGZAMkLoHiGNrVojHfbWi8XWLoAGoz8RKGqWVKP9kgpBBHHK7j6AoPu6tab",
  "key4": "2He6DmgY3B6Q93dnm9PaDcMQrLHVRAbx3EvnzvpQCi5KL7W1QLMDAwSxRA4z7rxqvRVgAHJNNPVs3F1zVa8iE9re",
  "key5": "hrceL6AZAx96MmNvUWBykeBAKvcSt76cgMSmsG5WJJEzQtSDDZs1Mo5Nd6pJ32KCo6QKf7RYbb2MGiqwr6iAXfR",
  "key6": "4E9MVaPBtFxigvfT1fYyux8VeiGK7hqpsC64gCM5Arv4cHfHZkXqBQXznPCZcHcH6HDP2v4jW8tA14PPTZ4YcH3u",
  "key7": "5xjgzhEhCMeKACyKWvga4eXkGwiiykPZsoBvj5FMgJFU4JAcVSMGtzgaseEAyWDPbYjhf93h5ArQy7vr9XoGU4Ks",
  "key8": "5ALBTws1zuPQeWriQxG5RCnvR6Ve18rHnHDo3DfuuVNshvhQYrqsJyKit9EVQkkNXNRjazxgYBVaB6TDtBxieL1W",
  "key9": "tA8nKQwjdmAhm8w2wjKkAZDU5qV93eVXNiaBRGJvio5mCtwAcHMLjG8kfV5fCoG67p7A6Ak5cGPpene7SHUGia1",
  "key10": "4CX1rZoYepSCFdmbKXn8dMZDS4VvWq4wy7CaWyBCsM1goXdCTuF2jSpwDFXTkKyW5pP1nqaSnj8x8sato37xj3Qq",
  "key11": "5nwaQ2b5RF2ZMf8m4yeqzBgVtajxhgfnDLz1Yvcr3XQyEMmxs5eCmVmu5FM2aKa3iMSWbGox8QNPLRrTvFfRETwF",
  "key12": "EsCg7peu7F83WRAVU26VrexA1HNCn3uCipvHfJ3xcLqeMzVWzy4X4hxaq45Lz72334zFoAU3ppt6rtRkbCimPJY",
  "key13": "2bJS5skVDA3Z6CHdpcHt1bQMuB63dBfiCzUFrdfcwZFoqZoqhf26MqLUDoNgsdU2rpKDNWuDj6x8BUd6T7bCyyiA",
  "key14": "uGMkKSehTQHDd1TG4WmF5JKX6B7NsAikcXJqHTyLgX6LQ9R7dgw248grcv8a4FQQuJ4svuGrNJoEmM9SCqyvg1z",
  "key15": "42HRZm8j5wGhKhcXCMb2oiKgPx7ynBctCY3TVMAVjNJKnDXaL9getcuhVuxkXeASh5vjggGyXZqhgsb2yyx1cNR",
  "key16": "48j2KbUhuWHGYBp8hjSA7nq5DLCMdLBS2pNtgcbsE5ejvGtEQDSnhV8zHs6x9jXyceTKmhJmJvf4k5QrfcRmxXy",
  "key17": "5u838avUcKL89RCr1agTMBuHhsp7cWN4kbsH8bJYUh9Mx2bkjqvWmijp7MLjNUawiHqAmmYkGBsb1428T7M4SUwD",
  "key18": "4qZESPrHQxf34Y9TYGAK2Twddheqt9XDHwLav4ReUXSqGwP1aW5EqHca5mUPusuRHb9pS7WXNu8ez6xxXg978md1",
  "key19": "38arr8FH6wUKVgPVB63icF3K7VhECVszqQMFbMBNtZmVLWJ2sW2d7Wvx431BsiF6eGpPFmkTv9uLwKkJhiKYkJ8a",
  "key20": "3XhzxCpd42TysNG4J1dDptsEeNJ8DMpHkVW4XoZhnZJn4ucQYweJLWvjQaMCDPqFpQyNvei7ysRqKD4xDPBoVQf5",
  "key21": "2QjHR8V25T7DVRjPKf2F84WybAY9S7qpE4Nzv7GwqrLwKCmhb4zbTYfatXqiHjZkpGWCWfsGzTSQyBjyzbtAdwGW",
  "key22": "5rGAhkpfgif4RrXaY9FjTHu7v6u22TyVmPhAmrHHrtvuEiqXwXn9knhsZec1NJNg6BnmnDm4Nnq6Udqnr1LZrmHR",
  "key23": "3s7KZXJDRyfGKi2NqRGmNh7wihi9DhCCv8abnfQ4B3qbyHEzBNYtnimLZMEp1Kak25WqviNKbQQxo7ufhgMPrKpu",
  "key24": "5yE3pgSPbaeFasUhodfemoeeDG8nbjNXpuSEg2CsZLH4akTMg4BhQkJNKuxppzyEjjvW2B4PTFQqnhnR6GxnnBQ",
  "key25": "5jUD8GXy2zP7VdTtVq7zvwQ4p2oCDCQb4eghSXNYcmRemZ8GcsKUk7jhB2pmVWwmUXS5LNFNJ3PwBeMf7CPjo9hX",
  "key26": "3dm7hq5KaNdcxuEmZzMUxJtpSUPFGpy6HW4egAg2nYrYq7xHPm4x7oahsDNj685aSwNMZuCUZJDGgME48bYjpkLv",
  "key27": "zPp4pfJtgm4xbMBXgBJLvWW7R4UkruxLeaXPCDRE4mePRSykda9HaEBSCGt4xf2wy9LoHHkpUtPxTQyCRswF58M",
  "key28": "5p97C6tuwWnFpgkw6fbfBFG9cKLjKfSeRkYHEbLzreAe6wAPFrPPiuWzBjr8id937W9miQYCbiTsSN52n8BsTGGr",
  "key29": "2cyHV4Jri63U9WSDZ2HGjomypAADsvoNXjcEPxvfcxcw8HH3NM25UK7LLgbRmsA93Gq83gdJusXKN43pPy6gFabS",
  "key30": "563KaKAYT5tQYSjkac5ABxjJL1x8Eo28v6Bdm75XFccSKrMqysowz2iPzRgMWPnDf9JRHwWH6UtBAxNDuN7rm4FA",
  "key31": "43uHeAtHNujuTGVkwL8tsUwwjNT4HwEMpUum6Te1joAfbnn3CaQmhhjhfYTySgGLjToYX4JAB4DyzMYs29enxbro",
  "key32": "5GwwWrbU6iz6j79b7to2VTdNA3e9bys8P1CjXZ78CQLjQVKn8tREgeHrJSitwEYuMYAkzbf2ZEAicct46Trzj2hc",
  "key33": "4W7vAmiTca1YtKH58Wk9F2TiB228da2rN9EqqjWJRz6nM3y2uZoi8coS7qndtG28b7bH2nb8j7PHR3PoeQAJtg4R",
  "key34": "5W8CpxMuQZXFBuMtJTRNbAcSjDWPQtagbViHWPZkUc5JV3U38BY5SH1so7JnkWvwNstyEhWQbQY7KC6eGgb4j4RJ",
  "key35": "2MkL2VW1MhGRUpHrgejPRZy6tzhqDBBWcUjdPUeUUCRnDTKh9T9TT2YYvrfRb15S1AGfJ8doJnGGoGSQ4B3KSPER",
  "key36": "3DhALNYmcYwxc4EHYXd4hJ3ckto7RxzAeiMfqiVF3rp61qXW7ND1zUdggK2eGUgS48imQd18mGpM2Zdp2jo8HiJh",
  "key37": "2QbXb1DZhdXziPH5nSwxroUdc82gceSJbXet6gxmhSVNAwLAFDz2KuVbttnCx4FgbT1EArSLKVwdPjzZfFVac11u",
  "key38": "3zKDrANZWiQcytK54CrfutQSnBj8Xg5ts2zcSicx3RpM5tpzKN4BaMPnWKRY7qs1Kjvf7ftR9cJedgowmMj5j4x7",
  "key39": "XZXPe9EzSEu3XEtgynoz8gtMHFqTJDv3xkTU2xx4GjXHWqUWetxiBRdmWahnAsi2gmYhtKqbbUMNb6oD9w3qNQV",
  "key40": "4VgKihcmmUTGZFnkSHGJHjf146TPmzKZYXoihhdnJvS64UPMP54Ftf1pQmTJ8HhYgutYM7kyXik5vXNeK2An3jeD",
  "key41": "oW2xWrvYiceYcLiGf7UBTooPmxYvKeNfSV93j18ivmruspL3qHF2xckk3fdNRw4F1KGxkkcaxAboumfVdxhQVgJ",
  "key42": "2BNKznxDhgpkfUWatpgt53AHyWSbTQdxxNDJabySHap9faZnq3gpNgU9EkH17TjFnihoNjr85RzxH3V7cwjJHbmk",
  "key43": "XmAwZgB6tGHssRmT4ox18nJTT5xe8d9SA9pnprzW3eVVvocLxgDMYUVyrQkHkLS2nfr2j78JTRvQKJ51sBeEeyZ",
  "key44": "KXvh6umJxGNVqERboMhDz716KZAw5P6mUyAKRtvtxiEUmS6EuhtaauuLobmiw26CqYBQkUyPmxpj3gGHcGtCRmA",
  "key45": "5Lc9yfi4xfyYVisp91k4EAZGRumNGSLDHnh1qzdiGQntMuKpKk7qAG3MMcXeLvSoMVXUe7tjZCuFxRPHKMzQzvGy",
  "key46": "5V7YfbcG3C5ruPeeeto8FSgKpJP2vbK8Cp7EGWrHemna44ZNrHtjqp7kaBzjXdAzYHXzCo8pkUJbzy8PcTCjBF3z",
  "key47": "3ZBWtsYuYz6PVaazyXWwKoE95jb7vWqFCFHLsmvUuDfx62xt3vXZmodDuhxf1TsGR45Ea3xbxBDH7UtjakeAKtdP",
  "key48": "34cYNZ7gGgs9dUf4fqnErDrUgFbnnRjASzHFSqzaSa6UzEz4UsJPvwSJf699V3DTc4DBVBVMKcDYcRQeSW6G4mNT",
  "key49": "3ZbrnVwsGoFA6wozbyXpXWTcf7KkGEr9GNseUtiYUvrzVEP4xfq1b8caJ8KZnQnhfnWv2ooGEKGmjvbRj1jtvkjj"
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
