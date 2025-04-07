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
    "5P17RSPyzCvejfn62vweFSb2BL9SwzN4KuJ5L3PKVSacN3TtWJzpmMCyr2mX5KQP1oihAzB1j5sfRWe4YLfrFon5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RyJc6nukzAMdHrNaMfx51LXQi2agVq2wfUbWWEsCPCuoTzGcUS4EGtkAS7qKXzgSzmWsB1frVhwtnnBNx5jRfQw",
  "key1": "2vkK57UTxA73N8NJtkARMe1AXSXRrTXuazuVkRtmfhYsQ64WnGq2Xs6JbM9z2xzi3M2XcUjqRWEdNZrxzdU6QJd9",
  "key2": "33jQL4mUhjsV4cetYVY5o78DSnbpriJ8SksKN7XL9NDYFmHQxkSaNqDK4jdNnPTn2v3cgHFB6ZAk7xUTUgRTVP7N",
  "key3": "4LxwgAgWoxEsiWvvNHVSRuNHabhwrGSGAUST1f2N93QEyHNCMGpUGTfiuheJ2VnqL6nY2ULkxahDHpiKV9Vy9BPR",
  "key4": "4J8HC7Hrw54cvnkvqriszMYxjsRxYKiPB4UQ1ef3Z3VxDhkMsgfFzGSV2HhKWAChtxHdXYNV5gqVFL6w2CFkZAnQ",
  "key5": "2jGAfpuUYNBbxWw4QEKqbrRG1x9aNQtgEcrTsenNWhJPv98THv7eV8M8wRAydsnZ3jn6US9B4HPfYkmW6vNHeWi1",
  "key6": "3Mmmcke6ZLGAZHQ4oHRsQNHCE89D7bFhS46dA6SkTYrBNvqo1UQXV4UYXTYXjVUyuXnUQiiyJZfS74RzXZQ3aJA3",
  "key7": "5Gb6jeHGB78Fkt8PGnNtVq76NxA3Py55CemSDerESeCdUcQdQztxDdGrLgqV1vY2PJjkTVVd1qcfnUbxMZgcQSrn",
  "key8": "5Fktw2h4rPWiFxP6rRC1fM5godd6XdCGDFKVJgN7kmYHqrdDwqVz81VdSiYap5EoYhmJaRcur36kXqh8ykp23yQW",
  "key9": "2em9v2c7D4rss64jtiBC9W3qkev5wQFtSuhwVZyTNVspFtLPSMMWG5DFYsnVphbNFpFrCaQY5kGVJzPfU9xjdSfb",
  "key10": "1EZJrJZngDvPpMKyFKbChuacXrv45fZnwfG5i8C7EKKkrEER77ja1spJQ39U57Z7e3ZWLsKfd3V6EgykdJFTEeB",
  "key11": "McRkiBumrXFw8qPErQ4wWLibKGiba2PSYyNcPbF5fps1V75mfqKdX1MW8PgksK1KM7RUXdDxsN9s1bCGWtboefa",
  "key12": "3e9vSkHLy7Sxy9yDrC7d2bdodpu8GUhC9MJffXEv19TZ5Rb1zQ4opv4VN37Y3taf7JK4QgxtGQP1ADGQUM1dfQrQ",
  "key13": "5CsvTFAuj939RkDwPq3Z4e2H2RDoAF9oPgXfQ9uBAjvMgc7SrypWyhT8FLTq5WMBgiDLxQ2w3zjtp1JS4ZXw4ND4",
  "key14": "5GVeWoRDfWdiri7NfU4MjWuLexgtg1Ncpa5Q4mrMHqKophcPrM6GFFtb9PiFmdUwRn5vxRNT16ELasE4tkwLDcuk",
  "key15": "vt7pbh9fdsrNQk2NAkRGYC25qXtUo7MEuSAyvC2wLpScKrFxzCH7RDy1J8ftR5s9xrqbDmm6kAynD2YvQM3pCqG",
  "key16": "4RtzZf3CN8aL69sUjBzoYfCom7JpL3PCgSZkoss7MeeW4fYHpk4sZY78yQuCHujZFFtMYqhz5x8kLXHAXiBjSrH4",
  "key17": "25biYVtSegkGxu5vDvnWn32GQhFcXq7VTmcQ4KFU9mEUFRNESzfBxGadpPDsyKVfCuZT6B714cY3DtLACzNuS7Kq",
  "key18": "4tG6o68mWoX68HEzYJb9QBqizuTgfC1dyGMayv6fFkvQtugyRRHdD4kZgeUA658aAMekUrawypcvwciHsf7vYTuR",
  "key19": "4ZtFKd7928Ue8cW7oSZf6uS8U7BhSGRXt9Bs9L7yY8ngqjyBkkzHKjP8MS9kFDg19bC4DiAgNCVD3Gjg5SVnixus",
  "key20": "5adyyyZ4Rhg27GEnoNRUo6cJMZ4JqAKZeAqNydZqZ1Tqmcxd2KgRvDG2xZm8EQKkd81diZSynXGHkCoD2uHkNQtn",
  "key21": "4adzY5uzZLhfiakHsZsR7mMzTBdtnaECehtCBWjAWvdX11Lk9nLTYdc5wPHQemPMPNtH8b3JQY9cizbCVxrzhoVk",
  "key22": "32J9QHRpigQNgNhEZ7jfPaqWxifrSY24FYctL24vptWiSgMdHzZmEkc3Dq3n3bCGbyVWydyZfgwuQZcuCEiVQ7eA",
  "key23": "3G1s687fCAVenuYkzWDcVBmSzW7PyLAcsMZKd87voVSriQ24ZDEwm47PVZhebf8WFGwZJwadS28TqxjRkihJ1Bu2",
  "key24": "4fZajHVRbbAiz8gpsuctkLn5WvaK136an6HrMqNz1ikZEYhmBDtCY3NqJFPY4f769BsTMnBBdNixt5jzYeD9qbgo",
  "key25": "5z5uEGtU3xG5SFgVfhLw9SwR2kgAmQHUkGjnPg2ojH2UkfsmqktLViCoZWyzyBfLLpe3fc1HhcCCdtp3DdAUw4Ve",
  "key26": "2e8KPtZN5qDQiHEjiB4JjjzfnAfzSTuPb2qaVA7oVSmkBuKonDDh8A8qCAQmJJUArVFpRZqGDTSGBLL28TjKsdsF",
  "key27": "5WGiKVpiCkGWn2QS1Hrchyq4Z6bS6GLnj3uwtPoNCk1zBDfLj8D5RRwCgZfBNc6RZAtp6wzu32EgVZH91KxLJFK4",
  "key28": "5vQuwRdhTv93ohmGf7WupMFo8j3KEnzeq36tfjo8s9JnfKF3t32z77KLiauNaG6tQMC3YgMdTW1gZL5BcRUs5h3X",
  "key29": "4euG8AqpbmaUQDwZBbHAXjttTb2o9ieMLqz9MC1ZNd9Cwx1AyrUa8FvGmiLVabiZnRgFafRNke1p73rwgdDELh1K",
  "key30": "4eszkjxBV4KXxnUcJyTVXjhqGWxqwc3AXMUrZVaTX8As4hEm7iSWJHVANyhCqkgEmSEU2VUpqcxEaPU7uaaqSruh",
  "key31": "4xWG1ZCntTuCfQzrNdEioSLqZL2C5HDdupbza54qi1Cx2yRvKB311dg4vGKw97LCuGRUadHq8hJHHyxtqU1XtWQY",
  "key32": "5ve7fsVayuatmyFyZbrd6JVwgKwAwySy5YFEeZW6PXzUtNPScLyJKmGfc9Nk3iQkQx2ppVQXefWDB8DUDXHBTdxW",
  "key33": "2S8Wa72rsYw3F3iR1Je8edjACp4HqBm6X5pnWDwpCwAJoR6mgnRJjNYLptzgrb9eXnMY7hkBrdgec4EAwWj7tzE2",
  "key34": "EDo17sLk7aKZYwRt18PyCHdGgFyr3msccTqHG6iN2ax6ZYNU9nizzrMrDNUaB84TWDbkBrwPuGKJRXiY8H5bwaA",
  "key35": "38QvCUEsTNM7UKQP9BMAdgXKM8RfRRWxAopWBUQnVhB4AcuMRPyrCgsJsE96ojZr2Qr6ho3DfGncvzXQf9exYwkq",
  "key36": "tLTqJXWVwne2cMfv8Edpjh7XCkLeW2idqmKwevJukHzZBPvyJK8RcB3XLC4mHGeU7o3GTpr9CC3AjqV9DgaXyAC",
  "key37": "5tbrsjXew6SV1TTSSpma5tUcfZdyhzgjHDgLB6CAWyBo6y5YsJpn1mFtuK8wgnB43P5kxiUXmq49vRZDCdywCNj4",
  "key38": "3LBFmTouQJU2UWTu5WGF5pTYzfTPowiwkxQcWVkH4nzR4RV4uTLjd1qaR49syptBQP5BBrY4orkQmqzEecAFhJKp",
  "key39": "2GGBdFbmaaRs59Hqq4CsGs38rY3xqvGBRvN1xoee2GFhueNR82Yf5LzTbzX4NcTDmzNXH1FFb7GdHdPVXqRVYf8G",
  "key40": "RNMoGbNX5919DUz2sVJMvw9w4dCFvCfoSCAuYcxCMD8wNS4xJWCJ2HGntLCYUSBA1QxXCc6rCXeZKDtNZki14is",
  "key41": "5S33nCi6TUGCWb1Efe9Z9Wc763ZSexb9NY1qSAASEtMCk6ptz7e5Z5ZPdjzwTCVT6a42q9jzAnqqgZ6k9niJ7SAU",
  "key42": "3MwngkprKSntBER9H4bfHnDkMKneU3sDRUc1U1zyNYwVTcmXVUxEzce7Ri2beu4RUeSgfEKe64sdceMrbedPjFxf"
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
