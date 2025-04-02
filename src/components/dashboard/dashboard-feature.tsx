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
    "2mZVyrygLewLFv7fzZcnJQwZTmSnh28y95wWLakKXkj48CzQkEFjFYwF75ZsjP61jTgjwE5QvtUQauHxrKy4grqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BsTVjLLNuC6CF9xCYNHeL5zvcXuE1S96wtWfDtsapnz9B7VDcuz5fTABSpXRRdiCyzjEqRN4huF1XK62UNLSN5A",
  "key1": "iNhW7x2ywL5Kv8skL5N9SfAXqDHDa8DcHKE3PzrFc6WqujXBKKchKCLz6PeixMi394PuDeM7qQ4w8566uZM9XLn",
  "key2": "4uxA8aHbWx8ZZX4E3g2HqPDzYgFDSTJPzhsjpKto63Q69tVbhkmGuJuf7gTAzmRekBpuLY2DqLN9EuQBU61bjCh4",
  "key3": "4GzK1RRa1B3m8WwfumXJQZV3c5RE6179kaA91vKLJfw7LrrhAgPqmHav3qGaqWZbdmQvuB6Y3Eb29ywkmAq1m31e",
  "key4": "5KsXV2pATep7JhLWPTpgxtrPWnSZTeowB2J6ezCNfb7zwhxwLsK9gU7u6Y8jzfMxJjiW8s9tZijJ7kfV2Xc9yi6f",
  "key5": "5ZEYssmokccrnRhjhj2FEPAeCPztaCUCDbU7uv8eBewcPj8hRzJyWYXeSa9JJuUStdtBdhPgBuugjqLyc2ziCVF9",
  "key6": "3PxNBmZ3wBZSQemMMZmLBv7451c6QCJY7PTNthF87p9kFx2DVKQm8Cwor55uPAU4WCFQHraBzEzxGnDdkF3Uiqdt",
  "key7": "5BCzi2usBBgwqqK14mLk1mxJSReKT7vMYbir8jjFK2kHqA594wjQcsUineCPRzTavSLLs422R6fPmnqsUAUQfkFG",
  "key8": "2dDSYHiWpeWLmcTCirazc4x7SwMLa9Wjurva8y1NeMNWkF5Atnhyt9hxTunp6LkbUjBWu2QwP8LPepSsXyJuGXmj",
  "key9": "2fmES1scq2cH94fztCvdpABqMpZqz5tkNAtu2fwBGb3XzXEBVxJqkdmpFCGxb33zArqmoLS5PymUaGiiQXe3eiSY",
  "key10": "4DdbEwtLhHnyDDR3kZiZ6zTF8H4nywoKS3pgcifYdza74Mttw1criX5ZGgHttTjanxiHhmapdvXxn6cRvtc6Adyp",
  "key11": "4arNCsehrXZ2CBjdBBvWYMM6EoVakLARE2HuhpVqKswevXYEJ6NCHXqhwFGt2qVZkvSUyqxsh9atqEmUWk39fsJp",
  "key12": "5x7QmiZNWZFNFDs6aCw3qEatcp39X391nNAgMt9yVqWYMZvzcdKHmtV4FfpAgTw5853TVXDAEfWMiiNtKpBsCqR8",
  "key13": "3eLhk2CGseSi1VnUejdMt4b2aNTrdhJS9UhAa5FSw6PEc38pWZ1iSKUUX5ommDuMYiPSUnVM1BTd5t6seJ79kxK5",
  "key14": "RpK3LAR2aNy72fgr2JjVn7oTyToNoE1n8afHLezo5CQWJeheKW6bGHtQnRonEToQpfDkp71eyGbgV1b7zt3N7TV",
  "key15": "pQ4LVmTtFFJM2CaBWcBXTbKnWpy45Sqo4zHjsVSB8oRevyb54ApcmVxV3ajcCU1x71UrsoDVcN4tXv2JEcLifNo",
  "key16": "3ey7eE1aPDJgcP6Q4Lqhk9PXn1Pe46mxzGXU3vDehFYR5RTJJNtQm64W7QijEQmZmuWzwdw1WCmLw1R2y2VXmdqD",
  "key17": "4xYE43kTqen8s1dCsxJeKzUkTNYX1bXvomfKKtwMkyRgxAmF6ncuM3qhijUsgw8yBWBEM8mdWzTTkrL9HoL1uTFD",
  "key18": "2S9SHYJmAEuFEScNt18zPSizY6VBB8zQxvLfR3u4jLr5BhsaudofD3BZE5JL47Zfe9KNYAfepPfcnvx4Jhah4chi",
  "key19": "3cyGvTyZS7MpHbwJERsFYNd2rMxKJoh21qxba9D7RarxS3bApyMsHnGu4GLCfMH7yfCHiyqNEZz1u2ED5vTihDUr",
  "key20": "4avv8ndBhYn9FdvpQz5retXaF365E5tTF2DB7ZyxUzyjNX52fZVDDcTcopAMciCR3MBsHAuPmq4mtvnUG62emJFL",
  "key21": "36cN74JbpMims6wvUVvRPAZkABaUuW5JjQLsME7d24r9CY9o2VfqXeAqQQdkBYNj1NC1rPGr6pzJfCtedKE8rg4V",
  "key22": "2srDcAp6vUNre2f396bF66YGyAno4u3b1SqbukwzCjCqyxVG4HNgHqFoVdZ6wiPnLkiT78nzs3rPCwSA1MEv8oyi",
  "key23": "2kdq6umhB5tX3fF2vQRzJHw9j4ccLVwo7nArnm6hPigaBkMuPUjd4Z94VHus4JDtR9AXuUccFTzknvkPfs73F8KC",
  "key24": "2YwQzFgDY2RbuFd2eWMCdqBhhyNkXSrnx3f85wBytuxsxxnYa6AeVNEyBfuizHr6vXV89BEp5gE799Uq4oPQG3u7",
  "key25": "4gsYtedKJNbxZC694wAx9Ti5QFaDZEvpT6kg7q2WpXXgqKhd3ThPerG4TP5kgQdNZgkU33rUgEunD9zK4mxLiuQH",
  "key26": "2p2VFfYKrT79sijgtmTxsmk8TqdG9BFcAzeXDcohnTV7MKvnzyDBCsK97hx13Ts3xiFpTuW4kmJYceX6MLcq7AA4",
  "key27": "2ywEEbXRHGLGCm1Q37unifGS9QQnKSWrBxQ8K5sjDA16MDEDk9GHigcRFDxDT6qtvzwzSYacuCzBGdJws3dAeJiG",
  "key28": "25kXBZWxKNKSzFqHhFPFiyNjRn4FjZNRyNnFw4tM4zUo7a9CC4oXQsG6ucJHtQ7DP81T4D8LR3DWfKNK2URvaxNa",
  "key29": "4NcNLzMT79WTiCJgNA7wj5BBcHznfYm7PpmRWPqWocF9HSuSq1UFS2gHUsALSMf18TLZkSkHqExZ8FfEnTbf79Zq",
  "key30": "ZqHCMM4hbCEfLSBoP58E1bgwSfRMUomQMuKaC24HDKMZFPBSFrqAgyXQ5SJAqYacvAU4g4NR22YyTHEJWJc9dvL",
  "key31": "5mp4cvGVxPr5iexgQRns7hfwsRAPgEkAunz2rpnLk3wKNHoMeQ7LwkcQf55ki53Aa3eJibSjcLWKTzifJbvsLLfy",
  "key32": "4iJs6wD8wPCy34s3csFbiBTymzoCPTcfpqXjL5JwnzDNG3yVes4HqehWH4h2brYm3Gu1rLonFHgGiQqqUPGCHynn",
  "key33": "38rEs7RZwDfUeBeSdK9G6gqYbC5uwXnMfif7vhq3jdbDJPaP3et15E1SVXmnWEtrdaTVoJFeuKXcS7CG8ZsvtHEp",
  "key34": "4JKUinib3gYGtjsKU8TCEPvLkN35DYrTAMCdx9Wfy71jTg8KQnTpdKt4ztWM3A5Z45P8hoX32oQBa2qQo643J6mi",
  "key35": "XrKnXj8V5TAHR35A5oxeFWyntvjTC9UrVj5ZCDz6ppmhXw6LB2oMsSjMg2Ws2oh8L9hGmqY7mHqBZ7UXzGUnBAV",
  "key36": "4ogbRoLAepeC4hHbtm2sdC2G2xkXLujhYdK8w7Hfr6s5keVce9JpfaSYRpTiJupWEr6ujT6YGNy68zHvNtKU5qfo",
  "key37": "4s8KmLQtLSVxrEjW2jNawisSrkv1Wdd41uqku2rHKhwJTF8cEf3oFhdKRxjguiucxp2R2Npyy7MQvHhfRCWycrLr",
  "key38": "5TyJJ1Z1yuAyenuoosP4aa956ht9DvuBUpJS6GjGE7QmWtx3cUvgZiVAfW3CxavjKN5y6Uj47LDWCfXNqminQAhT",
  "key39": "UmT4UBZhorhivfVKTyDR58amMjxQJGrf24EScQC5hjGRKvD6nX6Rr6E9NZwRvVx7nouhY92q2kw4fkJDjrYjcLs",
  "key40": "4JYsbCW1BVtf8CKhhPWcB6hsWzDKds5xGiLiWxDCXrMHw5vjiZFbFBww2EnwXPt64LXN8d1TMDuUCQdUgbE5kvcy",
  "key41": "2U9o4vhBH9Fa76TrjutiBKPwitZvHwAPRCwGMaBYgkd1NPthvdPh6JLmtHWxnYyATZtpoawwGZ4fFZ6BCpsYuKDZ",
  "key42": "o4o73b6GXsFZZy5UTeUj7DGU39daaEVFxTtQVwy1gU7H8PyYSbivFd3DfrDw161H3JbfWMy2Htf1raujaMUjWaa",
  "key43": "3rnJB2EbKwTeWERN3Gz5ZdP57yeXFKawdF2fpBX9k2Gvxpo5jBgJh4FipDGDchB1Y5yepxeQZ4sLDimDijfLZGoy",
  "key44": "65TYpVmkLzmCLryM5wGbmoSpLDvdP4xnfLmefDKC6YxYMK6cYQnFTYj6vRcST5QrF5m9d7TsZWduUTjEZ4hs5zLT",
  "key45": "5evyJ21A5dUNUC3GB1C9VkyxJzapJh6geK3rRDqWKh3X8XTp7USrcCeTzBYzod2VVL4Wp3FMvqvmAYeVd2ADc3Pk",
  "key46": "WV2ybNzZjdKGR4CyEUyL4GHn5taAtZycLUVHHYbj12QnPkbdxEuWJfAD8o4zy3vupSN2jrxpoR7xvmHSV4MvPYW",
  "key47": "5YkEewgt1xcSTh3jsLE5G3JrNPLi94ujYvwEsXZrYdKcFoQhgLF1EKdLGVQPUCxs1jwr6jFqyvzChMgvmzTKkjVZ"
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
