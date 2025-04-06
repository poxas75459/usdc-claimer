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
    "4TBG8nt8BE2zixFew3JW6XDutA7Lza7YqsgJmjgLCStxEi2ye64BRTvJhXAtareWWEcQ2gft96HCX4s49Bs52o6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hxy6wdgCdzb49dWeCnoamZa2wuvsP6WUc8kG4G1t1bni8rJuNuNnvtRuoRU2fPE9ov9ezSQDSbhnL5i4pX35TH4",
  "key1": "5VEeNkxLT34CYafUdWF146LLzwPBk3GMLfxJpmdAWPbqMF8M4HYNQE9nqKeuTtPWT1i76jSQJLoCycn8YxixmfVE",
  "key2": "4245Ko3iu1nT7QFEeDWBZ6CW3X5h68f5XoreC9pDaZfcKjoJ8nkXkEDY5YwnuDgkDvzeCSeWJXuxoCnTR9VpL3yU",
  "key3": "2YXuxPdYacq5crkSeFbnFonEA3T2JxC7YkyPZYngwnGgvi4stMAGR3RSZ1PaJ9upfxV5kdggwRu7unDxbgHDtuXX",
  "key4": "2bu1Yg8oYZRbhr6e4GwyDw8AYpA6MUwXaoFwo4r4hFn9jNd4h3p5AK8zvrMqAts2319qkgTTyKznj2hE3uDimbQW",
  "key5": "2pb2zhpgJqJBopr1NVJB45ZEeb73gEXsQBaNcgK44xXj3MFceH2dK1kb5jhkK4sKv8MGos2w6cQmuEF1GF6WCnqi",
  "key6": "euDjZd4P3pZQTR5irdzYtCnN9NEugrMVbUVWYnHT97ZWSsEDKXUocjhQhEzbmTiKBkD1n2PaH1e2486Bdxyfx1M",
  "key7": "5wXDETgVuABnH63pqXLVa6WPhyUruTAobQJ1hFY19CJy7JBauShY75hbJVW4nyxnRZocYCd5taecEhkWKzvkQa2m",
  "key8": "523EMP7LRFn9t2MhHST4oNu5jh8ZyURV5kLLJJnzkMv68fQVE9XQhMCG7bG5PLgixQpezusDewSdY5t9TUSBw4X7",
  "key9": "5qcSLQi1T7EfBuU8gm3yYxej3mr5PQAdE951x2qxWxSxsLnjP1YSyiMRys3L8p84ra3oFGy6F8wojaXWXYg8x2we",
  "key10": "z2dJ9bZMzcsUHswX5szeXihXjjhAX89np4L6kWhfCGj9nKoN8bV21rv935YAi34sKL7SG9mzJpqyM3oxbRFynu5",
  "key11": "4Hsc6kETem2N24cMyLqqVJjLUWNgnZszcJHiWTN4p1WZrgZBDwnBuPu8CUNWuDVrmBpfbdPa3X2yD8p4w1W8jSLw",
  "key12": "reStoSVmVENibm9zQA3nWXsZ83M6sh5KFiyuPeJ2PTCcwaPBgS41XZXSoUCvDV6FSznBBLDdxTwoSDWFhrvEAsi",
  "key13": "61XvfxhkQrB44tjzGrXTFyUWrS6u41nGTUxnuV1Cgj2DuXhz1jxjYjwm9nGNu22f3D7ZR8zw2t5YFTz9eqP4REKs",
  "key14": "5NstkHW2hgQrcdsrgqvfHbNBLeQjGYqTVyTcsDiEAk87HuFJWbjRhH9gpgcz2DCDXVpqJArsLumkQuoUuLyvJ1pH",
  "key15": "4hHW1qYXThqrdwFQpadePWBxwz69H3P9tiBUDGKH9SkPT9nWGZtkeGFum9bAYBHeejM1VXTQYGrBYqeDjCdiaQBY",
  "key16": "26hX1JfBGurqawDbeJXmPmfKwdSmesfecY6KABJT8RRNsopucXjTa3X2ufd9W8nLeGQHqFSH7c82763EpWbzRhhx",
  "key17": "21sprgYg6ZaP8JdQnbUeHq5ZAReWeZpYRzLLHQf7XbWNyBmZs21GgWGDi4hQ2WDShifjdyzYFbXw6ApY322znoTb",
  "key18": "3y88F4ZQhmSfYGUqtLSR1JYEhcrpmbSSj7RNTKMGNZ8qQZmtcLprhY38wr5wX7gRNSU7dpS8aNJVThMX6QqC6tRF",
  "key19": "5iu8q2hboQZfBHzfpMPmBEFckK7UtHk6frgg5Jhdrx6j1VSCiE7Bjb4N6RxuqtobU6npmgVRTv2Jj2uyU9P6GbSs",
  "key20": "2bvTj5DbCMrwGoJ3Uun4wbbSWyuTyRfi83LGgz8WiKwJq7oM5cYamAq9z86u6ENRMrPDzLwXrv3pPGMnv1hQUa7A",
  "key21": "wDrSD37vfXKyG51i9L6D1zvd6sSSVRoRVQfebhLnKqJCKpsrRped8fBhe6u97gA2YkxXbk1EpG2NWzRPdnfM9AD",
  "key22": "3NEKKsU7aQujkVpU6oEsPoHBv1WKFjwERmjCWtnXnxdM4pk7t6RkrvtwTaiW5iqu3jxc8YVA99K4Tu6LoRbYn91w",
  "key23": "2vCFna7zwa5nb6JLknaJKB3KNtQ8xefnoYsP6Hs3XrmVjWuU1vTwwsurHHaivkyCv1N5dowoUfeh243FDaH6Wc2V",
  "key24": "65uVFBtL6ayTJkzspnzxDsiMuDM8dx5uzaDmyTH2ihqDuz9Ao5iZbwcyeG3UxYyTLdX54kmZAqh7jXe2hxy865of",
  "key25": "3eJ39eBz4VQUhiRger1CSn7oqszKBcM8Q1Y7bz8vSsbALC2c8bgJFvEtb28t4FZuf8zmWacCxehd3UcCMJJEtZNB",
  "key26": "4WFd6Cr1rWCCmEuSYqUx813J3R9YXyWzRcP9oDz6mwv8TwDFv3VXDmyi9Tyg6EkVxbyGDdjTkZXcQ2BKMMusjGZd",
  "key27": "5yRy4ArDHksgT9csqLAH5Hh6AT8nCs6ETTFyjFsSZKGHbvTbBMGebrPwuNmK419wyEsuMFAvX8Y3scfDpoAP5Jxh",
  "key28": "2EQ9UHS5WrePSpcuy2962u2UiiQ4pJyem3GxDgxQXCMm2oCESWh4KfehC7NW3agYmeaFtwUwSBL9cJbaSAdUAqx6",
  "key29": "4hgMhjcfg6v7djMN2zPhiY7CA4kyGRQi3knZnbxpw3Sp665bbGVhr2kSHPqmaraZctvHSG3qNFMsZaqJXrpwMwYF",
  "key30": "KzVmKVudFkEQtsxDxeG18tyLWbXj2YA2X8WzFGJD5Qqynq6261shZz1UiuWEp6ENiWo74b8e2q8AheQu2mQeHxe",
  "key31": "3f5yUQK9uGy4ahgBAh8DPhoMoPPWs7f3eXwbWZYT8EXhAXP4p2iFNi2p66JeQ3WgGi8EYWdQbz62beFwj8KXVd7C",
  "key32": "suUi3gmNNichGxD836yB3wCY7ZWTx4ywPjz9KDxVeYdxgczuXHXZAoewMErvKn7RbNdMYVSQD8EMo2zGFSKwjPT",
  "key33": "WoRhGtwxBWTe9LVSR21pF9p2RECTNtEmABXZDCHfqQF4GmYXz7gsPaLeQZ53CU2deEeKRPAbbwKGSGpoRFfaDeT",
  "key34": "2SXJbUCq9JJSqH7wkSYdqgoBnirb9dVeAMDiZyZRypagG18iCmhMN1WXJJvEFERRBKw58xh6JhLtvV5nUUUiT67a",
  "key35": "47Nqhf5Us7AXZp6rXuAs4KE4oexiDnneDXDmoqqDM7X5y2G8hjZofEjBbhPnVRXkg6hy8mARHk6RhKwuRmqdXj9C"
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
