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
    "3f7UW3SsNYHFh5tmwXKJ5XMQcjxR1yJhMqQe6TwJaLyGsDh9WZvLWC5icQn21JH6dwdpZSEnT15tRrDqsvpCbCQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CGwZ7wqzp6fiAcqGqeXVfBKdcmVhW5KiMXvMXdPyH9dmeuDFHDVzc5isreW7t7SRGANpXJko4T1GPV3NsRqkW2Y",
  "key1": "2taQEpHucRzYhPvWgPpfx7pq56ooxQow6jxjhHb6cFf4WyK96wwyaNwMrKfvFYhoLspJjoo2vs18sG22QzhGLy4",
  "key2": "3AyHE84mSZTvCxgozSqjRkGkJFTJ2J1CfXZB1Xjo3tcdJ5gPkDD6FomYhTTqWixPM6FYtqSbkJhJ6fMsavaWiXDF",
  "key3": "2nkyry5BSTUBLuh3w2sWa4hybgAVuCdMQGLwYdeHLu92MFS7774jHCGSr5xGbiyBQKpKw6Yekt4T6RaA8Wx7DXeR",
  "key4": "2iUnaL59RRDrivAZFfm3Jwhra4JLrGMffZXXRJfqLaVzSxndVMLqFGpw6Wa1FLaXPF3PyxioPMEmt2gMT1zq7f12",
  "key5": "5ropuGtnyMB3oDpFJ2vGArRZt43VatvW5Ng1CZbDTiRdaF9zXfLD2aypcPJzLdWmghqPB9Nf4AxehrCwqD2CyGpb",
  "key6": "5jF7uJ6BPKpCSgSS68by1RAC46sxDyBLxCxGdsT1c3CKGg5VK6RzVLgL4gMFBD4Kt28HQvCWSEF4UeGZmqwgdHQh",
  "key7": "2zL2bNL4y7v334FZd6Mgt9yhzPaG3pr9EvdTsLf7nZawgmyWsH2mzqAzgiUwALQXxMYhXDG7kW9eoU5K3knnwqWy",
  "key8": "5t1CHTTUE8U3AgHvaVDHbYSKVVjWYk9ogd4KJ583LgXjWsafEZsDdwxQGGFVXXiCPrj3bHr17xVTG5zqy2QKBLtY",
  "key9": "dKpz3FPcAjRKptvEsYLtxmPEdRA4pmggyecKVWrPYaWNVgnVmqULgYaF7Pc7xLFhstXN8cfLiXqUx1gcC1SAPfp",
  "key10": "5ETeUXaew2cAn4JRvFtXd5rcBeKBMauquBtZ4KUtmkR4zcBmsoTTzCcMvtbvCVYU4BHVEyCxonGB3xzCJAyT9hbf",
  "key11": "5D1GQEB6ftE1BgbJeEHD3c9Ax5rt35Hb5aGZLyi1MaHaYb4TvHFVDeCHKvJppqgn3nCagenVBgpqw7y9XVExpaRy",
  "key12": "3j8Gi5JD3UFnsZzeup8diEU43vrmZTb7u2831bqoX9ctc5ZApwWMyTzitx3GDqtyV9tRH2Dv9WB2NEesPimKbnjX",
  "key13": "55oXQrB3cPPbHc5PHcDtyUjZcmQoWrn6qqLTtrNLPvRWtXy4542iWCkD6WLzcYFt7XA3e38J2MSYbWpdRjhVo6zZ",
  "key14": "5pE1B7T9tKq6yZfc8HEhaLpZn2kJyrjXFeByzYMAkFziKbcGBqKu51SqisU3CrE3RMxL7VykQajCq78CNoXQ3C96",
  "key15": "oMKp8iRcaaZSy9GjX8AFBbQvAMoZXkmrH1sRfWzQq6DYb3APxnPAyT58i6wiHcntEejZbKh5FuEw479PbKVzPzr",
  "key16": "4rjTaqRn6e3wwPCiccU7cMLMuJPQJ4opLNAL1g2bvnsibAx5JHf8MmzC793VYjkcWu1aHNuoF1Vze1jF5Gg81UFY",
  "key17": "4Q4AbWqRyEmK6kMJCtzYwEqV2PJSRFKgYidazwYQM5ztJAwMSYe79rgG8d8eQeFpHjyR2uw3EYy34ffkaX9Kngnw",
  "key18": "5nTXdhwoCJ5nXpFCJ1D5pDHe6Hdszd6WGUqiQUJqeUQyvoz6TBvkkHDfVvhJAhbegxc9wSo6ED6TnTZXGrUKLbWN",
  "key19": "354h2b8ciuKLwxGBf3e5kPuyYtwUNX5BjvdNwoW2FnXvjiKSoTMovqKPQFD2BhHNQ2Dm89oARfNSC44xzvMWSU8v",
  "key20": "2h8hwHA8oKhS2BSBb7hdyDZdteUa1rAS9ExQXWi98jUHv7qwh8ke7VjvDDfGcjp6G16BYPZixJ289aucd8WQSrQm",
  "key21": "5BDGpA7xSLW43Kkh7GcEKC1eHzq6TMrHLQuj7XKwqL3Kgq13R3VfaPwwhm9GFfxTbc56T5b1QSo2HpFVj4DDpArn",
  "key22": "5MzgnTJkKvHX4uyBW3sgooq1d3T4VwNDfP4z61fN6Lxv6pPVa4MJgM4VhPodPmZAy8Z22XyaxLAr6PhxXo8RwBDP",
  "key23": "5ocRpxEe9GyQ8fTdCMo8Rv6FwHhHjBRpemjx2PxSk2c2YYa2XncFPPCc2e1WJQaXjEMUNwHnvCQKhkjago45Fttc",
  "key24": "3icsrPu6LEz2HcwZ7NuxXdkprhdfGNkcokBf5tqqcYKinYCtD5vfoezFfJYbjhrB9rxWHY5dgPbz4KfYb8tftaQ",
  "key25": "xQPQuwS4fW3dsSfineoMKW8uLm8s6r2seF8Dr6k8TFJqLiCHTgteQQ55wFL1CkuRhWCzzgZuaD1sXhtaH3rYkMv",
  "key26": "63D2JJM6Q7MKcjaB6kceeFFLv4Tf8uEy8t4cxNPFJ4kjk3Y29J63RE4xANwTM4oktSji4jzX3U8whJUh1a4jXniu",
  "key27": "5LQv3ZuuMLYsc3Aoks2tsvWu5mDCJgzsDq28uGkhcoWURe9NqaxkE3n8U8XDDadbPryNwA5BiHUj4KZLT8KvoWud",
  "key28": "2cc3NagWAtJY7oJskdJYjZQeKg6nyThr4m3hmBxHLxmVVA1oiEbpqDzB81eMs51SSJYRpE1mUkqFYcAoQg6uLbwt",
  "key29": "3gpRJdxvJHwpYe9DBiN3y7T6cvZffp4jhggqcjy5cCbNQYLQvYX7Yvs492c1XmpP4ZG6uAq6CGAky9HUH53uPWiD",
  "key30": "5DzuGfMMH2WZranLuMjikyp1rhWZHyc6vHnKMZUyZfU19mFXqc4WjMCswwntQWAKV6CS4HnLBCef37uqu2okHVtU",
  "key31": "3Ta2TjmY3fqGheAFmy4ScDBa3SPKKovDFHqmMextDYTvWGHxExGyskXYzRhsEwmF4yNEdjDS2fBELWyT7ATLxNtk",
  "key32": "2jwXwqZdtXctdM4QLS59Mh82wZvRAn2KHF9CusjfpeBZkCaxdNKGBCH4MjAMy2XdU3AeTGbC1X48FHCEVNChAT5B",
  "key33": "EUSkDGth8qmA6fpggGkGjEgT4mcL9YCLUEbueH5YaYaw7Fs7wJ2YBpMMDPcVyAVP3sr2QtpZGyx3JUe3wXyg6g7",
  "key34": "5tVY9BqZbXMaM6YxvGd4KV5CsoiBMDUk56fFCrN7MLiFTMHit4oJkfzQHTpDszgcFsiBajxvNeiEM1TEt1WfEcBF",
  "key35": "2Kqztjm6KWzAhkD6Hkqjy1tmrRZDi6LUo4o8C38hQyEHsFSuV883CgwFprmU1fy6K2g6dzut2pzDLdb8dYvhaZhb",
  "key36": "26xFpPJH3nCxUNoWrPbs2FX7Deq7ArTqoMofcWDngbtuaM4e9i92vQ21efBCEQH4C8eTWVHeDebHTYEMMdQth79c",
  "key37": "59kx8KKzAvcee6U1XWGCjqEchDrTb8wEsqdvqfEyhkoKKAo1mGxukgSUpkuSnWuv3n5byYMBm4ZPWRNwxoq5r6eK",
  "key38": "3voujQpPsd9JU4z3573yJvHuwAf4fHXfkRiw4c745T3QjRMwqxRRgfVnZvmdrHpM3AsPmenE7aXpYJzLJH7NvM9e",
  "key39": "63Rt4Rk1c1XL3ufsvPMB5ehLZwTh4CBmX7XtUHMrX2yUvq6GPppm2g9Q1aZH6djQDWiE4fWo3y6qEm4zkNmMvyKE",
  "key40": "4NHr8RXL9CfYLERKjMoawHrDw5kwuNJQxMbgzBqKBs98G8X2PdhT1kjoavavGUuBELksJPdMMkqmgQ7TTjRP55bG",
  "key41": "4YFgggapJxFXUS5u4SLfg5vtnKakLS7djrPj2Pw52LAq2hjRuWvQgR313SVWnSwhRTzKUcVSp98MNdeAS1xuR2t3",
  "key42": "3shoHvA2p3UsL9s9Jf3RiWuJqAc43Pdb23HQSn9tapP7rh7YJDt7t6dxunQ8QusUBiK3PvtYVsuWdmWJ5trJEHve",
  "key43": "B7aF1YuK1et8FuXDF3MwM4gPCbp8Xe9Veca2rHwMf5ADT2R4LgV2XxxD9S2n2sRrDJ4SiK8VirBU4EspbvV6KcD",
  "key44": "5pv4SxQHjvXjqpaZxrfSmKXVYZ8bNtFybf7LMn5igtSkbn6eB6whTcEs3B378JUKWzzKrWVTbgfZ51M8PksPkXWE",
  "key45": "KWcR4vqdUoddQMkKggNCMcTWZtnAZXMSgYKxybx82Dd66VcFMtF29mJY4AiMyRnCuEhqdzztGu8aQjCcCqtiHUX",
  "key46": "MkZZ3WjTa1NFBXnCqWCGLtRW7FAJh9YtEmD7aSpK8hWUyU5iieYYHH8GCBjvgXLXf6Cod3cq5G9Vs9FCxc38LpE",
  "key47": "2Z9HyZknXR3jfUULALXerbyZfZ7CPPdgGBAJjeY9sytGrvA59XzehjurtGzv17J9PLYeMJ52aTdZYTp6M5ovYYEP",
  "key48": "3E5FB8XmCKdM5FkqZLhoS97KXmsMt85TDNjNc4z36RHr7Y6jKsiUCX6c1NPRNwnSNXzpFRAFHXRL58sR2b3QBfVx"
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
