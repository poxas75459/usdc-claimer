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
    "656TuudNhE1uHQMKirpXijAFccCrmLyokhW5XbEy8P3dLuVrezwSMbYgzSVSa3MpbXR2cXBCZDp92T6PrEMAYh42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YLXbtiuYmGWosuZnwCPeehAGzNCxpTVZSRbgis42BCdYTm9gxM8QmvjUk2SyNrzd9EjrQWA49PFxf1p58ESrjqq",
  "key1": "2LiGdeNXcqtFazFzU4VxhzPXSrVdSvzrB3Gff5pXb2iRWi3qX6Q8fRtk18DuEktzdPbuFD7uuM6toJjrkuNi6Jx4",
  "key2": "wfJ46avV1MP5SJKWeoTUxR1tu2BQxADXAY24qJbKHzebgiuaXqVxPhF8euCw2AboucrURiRK2frW1Bwte3Et8cX",
  "key3": "2aLBEUQgKARyojG8EQsDg8h5hCnL3svnRRmeaDBn8Unckz8rnvUD6QzG2u2kJwoJdxWXQFWnEjZkZo2odFPZamx3",
  "key4": "3V1p7qpCjpy2dk1farFfAJHCvsNWDScKBpxzrw9YonwvEBAwniAzh27fwnT8nYPgbvVr9MbGJGiBvwmqHMMiY8U9",
  "key5": "2LRs5vuH73Jp9fTkZ7HKLeTN3eFnKeutfJa4BrgXPMe12uT9nzkHNsURavhHAwjPWNKdMA19SGKKo2dAYJdMsDvo",
  "key6": "3eanCDXJ7aLKwTx4yQNazTHDpZEoPN695pMdj5LyzAP89f3wKng6Eo8cBLYAC2DqWxc7N56EGRZM5eB6ksSWGRLN",
  "key7": "6678ayp8MqWJoxLjDzNtgGaViy43HajkUXekYVaM6gG51EN7giXWVuqkFACtQpLbSZodmr4cA5Yq9xZrp1GKDucs",
  "key8": "3YsgAGjpBjnRB2nquixPDcLPc49MdLJxUqDPjdKaVJZJ28kTRsbe7BtwpQQjEEihkKAs6o7wn2ZWJJyyrMMHoxBv",
  "key9": "5MnXafYqG6bQnzGgdhRMKGcaHev7NwbWrf7pwbEjScpWkYiaTqLxCXS9NXskaQfXRWHMejYkZ5gH6MCNzFSo9DK7",
  "key10": "2dt4E7CeqRW8zXi7YPeSG6yWAetW5eyE33jsJNvVq4wqqMdjt7jESE678MdxBK27nhJcnrMD753eu4PAtw2cR4WQ",
  "key11": "XqYFdmmVs5uFtKfQZa1wgjkUtfVrRErdBF1h9HX4q69M7cgVFJVVHeRQhUty7U66MDkiYmv8CrA9JRStVKW7tzN",
  "key12": "5PyU1abyE8aGXbeytpzGMfSj9KzXVg3iUzBD2scvGu7jcrGWrQqxorPBKZCfgueoT8XPQ3cxh5EhDd6zP85AZ4bR",
  "key13": "5io5M8bnXovi3dBFM34hvRsfDsLkWGB5HxrCbzCtGvY6nNzWU7x9HWQcmb6XW4yqqMcTuJYzGW7SJ5uocp3FqVh5",
  "key14": "44pLDmuiETRtm1wny44cf1cxd287tPJUhyYL9EpoSYgvY7i9fG9RRhVCqDfGUuGcSCmEHMc5oiCARLKQhyuLf2ML",
  "key15": "3n36aZM4LyaRCb9ssRCcU6TLpJyxMccVFSoBzm1En4AgDrFiHsjGdVsQBQPr6pRwWDD5XoTcsPyayWWPE5qCcH4d",
  "key16": "5crVKEJaiRuJxC4paD3uECcNPNBsU1cKkpfYngWTnebtUGGMfsw4kgeq3k3NXf6qFDmgBCF8sMzjk8AFqfbXokiD",
  "key17": "2eVJNksWG4vk6jP5St3nn1m7U1wwdzhmWxBGeCxJbPLtNgURJPMygKtG7cbfFnLQVpWSuNvw5nBj5pBXHCiiU6Sp",
  "key18": "spv4DWvGnguWS5jGAS5WNYLSshdEF89RCQ4GwdcASj44pfP2WWa53jsfeDhjDEL9o8qSKmrUk7Vqxoii2HnKE9p",
  "key19": "VRM66mZ75UdJz5TSLKQtTNXumFXzG1SNWhHFk53Wsm5VH1XT91yCbuXzp4G6gzPb3tAZeJRduU23HtwkLvgsR9A",
  "key20": "nPespVvtsBCdw8ArcSuniWmdrq5CLSvrcLQN7bw38pFxU6A2DkSYsTjzptFcuofxLgnggvtaLuLwFbZDGhb4Lr1",
  "key21": "5VsV4JH8yWpunfonqGyFiYp31GdzECzGXg4M242R8XDRrxjFdFKu99M6KPqfDb5rbEGynLa27dPkTC32kPhiu8u6",
  "key22": "29SjagxHaVWH6efgZhTTv2eM6sf6KAxTQ6qFWc7yJ4YVCgpxPTDS7iFstQLNFKiVX4t469a2LaSyBSgTTTkv1hkk",
  "key23": "4kgu8hkhMEerooLi1rTTPWbdPRohnh5C3MRPeH6HGrB8GTkUJ4ogpo6TjQ28UhRHsxZ7td9ik1Yof9KiQSKXppKw",
  "key24": "FvvJNQ7Fei4mkLuSZH8b1xwjrPyoe3aardL3yBA77Ahgb3t73jo9tYiGvJGmHkmz1HjhyixuhXvQ6aw38efLnhX",
  "key25": "2F8hZNFXrrNnBtqqavYnLkT2vodMdiezUjkpkGXCxTBgedCrHsmMACuzatgkSEqZ9eJASX8ZLrMbi2YYoZoCVMyz",
  "key26": "2rgETD6wZUV6XwAxMdX7Vv5gkLHWWtzSJxb6jtXKtFktfVbEufbT895dBW8x9MBv2tcs24sDFGK3gdcpua5gJMDT",
  "key27": "Ccj3P6PRMAJ9ydPF4GZxYbkqaCxEiRQ1WzYWZh4VBCaGVjewB93KmmJjvbwyzfEcmsYVTppB1v7FXzd1gjSZUsq",
  "key28": "3MsRfn4rcam4qmWB9KSPCxr2BpNzzituEk2HFzpc8fiZZEemeSY6BdUktQ5x6Gxz8yZMtxyvMgHpHSVuHNNenXuW",
  "key29": "361AbAXmBfXSn3EAhFb2FDJP9dbd32XAjS3ZX3Yn3xZHTrSVoVBS8kADecnSRzGVPe4rbGacjKsVhf26zpEECXtM",
  "key30": "5uSSZuRtAwkwV9crPUfnfw74cddPvcHXwgC5FaLNmuw14XUuVJCoBh4zWppSmGhgofrWpNbiMe6oQsNiycCUHMbT",
  "key31": "398UeN1LPTWdF1zmxjVgvfeoxRijRDqVX4kBXqXiTHEEoJgc6nYmphsMjRhEfB8CHXHZG6BmZi9yrgSHTwvbfs2e",
  "key32": "25nsM9hcLYGbzzoRzfk8zdtJSKNyF2SyQcNw9yoUHsj4KDAEWrYothnYcMZhBmfkKzbLNgfn7HN97k8KoNRYf9rF",
  "key33": "5bKt2VxQdZYbTj2WyeWQqKP2CfyJKTFT46e2GEigoN8UMEfqZtEqePQxXXDmZpGd9SUB1SnPzuDLZkGJPZn9rpvi",
  "key34": "44GWqagXb6tpcrvEGxRenbY4YLyviZ68SsnX2SzL38DF4yMFxhMFHcUdRSbZoS3HE7YVNrckjsfuTXceSuFXq6yd",
  "key35": "3dkm1jtRECemg579oRdCLDfskZuVwuiQYLez6LgA6KJ5QZDgQMzqKM1CHQg7KUub2MsBBDUwxMqAPBKMiVbwNg1",
  "key36": "2KesdH58tMP92RipAVeW6wsyaTtmH6tfXz2uhibwXW3tuipsTpaRpUKQfwQXx4XQKSPTM2MJF9N6rkGrxrxjHcqh",
  "key37": "2torWJUXnD7Y3k46SVfYr69QLBc7TmereCAD9mWm29uZ3GiHvnxZAmASUzH3XVZ5Nrqjzbjfyo5rw5wiKWvHqQee",
  "key38": "5crxq6SgJwxAb54QNb8niHPc9J7gn7rc9DXeSCuER5eVfW7eGFX3W2psFxMg7sHDPsSPyX9vHRb2P8BiZRkJ79E2",
  "key39": "3wYPXp1shsNvvi57byRvGiByByEtwvZfdiShfTGnqDiBq6i8JGmJgUC7Ev3nbixmK1HvdZxVhodCuEp9zZ2x7sXZ",
  "key40": "2WeCZsYAQY5KUoxN6vwV395LsJZUde45yR7KbjfyxL9ireoVRFYr3R3KrvCD7w8shbczF7dZs1qeGJqY9sP8PU5q",
  "key41": "2YpQWrUXXTqXRs29TvS96kePxs6VvUqHuXwTib8BSEJyt7Ds9go9cmv9tmh3RjnKnmYUvyWqQ1gKeXP5eJWkD3Sm",
  "key42": "2Z9pUZPaZBDzkbWJQNpMyTyGPteeNcpndT2HGJQtLYtzazc17urPEwT27TZ371q2hRapLvb4xiYsRRFnQYj6QwKz",
  "key43": "2U1uRSgFfbcZ1sEjZBVp3qaxMm62mow86FcMUDLxBaUnnUVKJ6DqtkLHbiif9siyorvRSRbZz5E6LkQYR2zuaVP5",
  "key44": "mdSV1BD4JGT5PseLGYvefThJhnH9EkBoQKEHjjbbTn4jWRWkCPMjg4iS5hCizR64bv8spiAy2G3WbQPzUXNAWqt"
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
