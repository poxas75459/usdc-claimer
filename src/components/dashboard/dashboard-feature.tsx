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
    "5sfaFFKkTdYp7j1PRAazsNW7sJuW474yT1kicAuTpv9xQcw3fyGcAN8AJpP9NMhDYrUwBApreAdUpo5pshDjVkGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fgfz82EYtzf3J117cD7wU7E1oxqy4ypg6v6CrgkCju7YcUzs4tz53zrwdwFAZT19Bi5sRWSVdzg8CE8o5bpVBBA",
  "key1": "2TtbK9QNDWvH2rNN411okgFN27JRKb12EyrQ65RF2CDYfkBMKKu5F87gLR7Bqv9K87oXnjeEv3NejURMuhKQcrZf",
  "key2": "21QDBTXheSNBHeNjHfhgaqkD9enAP89qaHkTHYhMoYbv8wGvTafCzs47WnVcPQ1wXLmRpHvU4as6woPYuy2JjHvz",
  "key3": "52D4vtm2M649w9pZj9VGifXQECxcm43rTBFWpFHVZ4kMczrBjRuueFcAvUyz5fJkco4ZpURsTXJiyuas335JS7cz",
  "key4": "3F9T3u3xdFHh3kL8YiAg9hDbm65qav8GRNDSZv8Ry16hygm9byT7tFHNnkUWwsF4dofhZMyCLSuLTfpP3PAC8ya9",
  "key5": "2juErV5MpJZhQB8FrBGQKfXgTSLm8AjykYaRfFjKoFBdhoDWRXf8MT3vnqFU6gdaFxE7U7GJimYWrxyxqYqrRqeL",
  "key6": "2AhZE5F8whVk1fCLgtstBdACyJgUvCgd8Yv7Cuq2M9m9GjyFdm11GHWadgRny2qsPR5A1iZ9n7GZcu4ctYiExmKd",
  "key7": "22k9iafviJZX93jvPMFDnF9EqQ1gLnw3ztc6eVe8zgsKvmkAG1YAseSGrWkXwRGHgEjymdqVsKP1bAEXQNHBaukL",
  "key8": "4bZ57ETaxeXTPaDuzyp4WcSPz3GKvKeN729JVJMNZtVtzXn6a7XFJxx5g4eMndYQFqLt7rypEcA1btHKTf4ptAG",
  "key9": "2ERE6LJJCuJ65Yeybr3wLDfzTqFtTYxfeDeGqoU2a4KsXqY489MyD7DfK9agpxP1ceTqPPEK7sJxWDktb9HVx7Ls",
  "key10": "m5jZvV1rEmjozCJt7ZhAE5G1e1hRfcus9pmdNJuzhFpe6ci2Fsm8eA78ZC95ymgZdALgSAPCBYF5ngakWfX64S4",
  "key11": "2bTbAzyJeEhkzhkd5cV6Z8YgjNKy2RaxGpGAm1dL3CqjuZd5x99bVpDu8aQcbJyXGp4EZgnvgsYvRQCLqkuwZtor",
  "key12": "65aj5qUMUFzUoorwyLyz3sg4uZSYJxZ3hKR5mR12GVtGpFjTByKX3GAWKmZxYmgWembw5ex2zPJaYkKX4mP32R5W",
  "key13": "3HmwPRUtpo1STUB1qhhd8Q5uW3LSN5QHDnZUuyBia2dQeTapp7jENfruHuMMxv2e4Fm8NT2PzE371E7sCQ9shBvx",
  "key14": "3awWLUXj6TGbkiDRTk7eXyhy8K26deCvK6MQrreCRxqojVJayzq7YCsuL41ef76V9At9rFt2WQ2cvDsSqYWFXUX1",
  "key15": "3EwV94wBGVYbRPxvyAQ7bwLCFXaPQ3k3JnURNUxJvsATZJmooxvYAxgiTrupjUyWDSC7SALbQez4tFVthNiNCyzJ",
  "key16": "4U7p6Yxv5X38J7pxvBZQiUD1hcW5YottSY1icy9grWbLL8bhCJsWYmY467oSe6BtVhZ6dSkv59MsNvTmsDcTepZz",
  "key17": "29cvtz61ATqfPEBhXDmnMjSZW4cfZXjFzL19SFZoJP5J3wSveksuApMdvgxHfez2HEsE87Xnu4wi4f52NBUywEJz",
  "key18": "5JGi187V5nyWUE9swtDD5d6V3nicHLtkAKFZU49tzbksVDN5QVuZHFWx3ZxzwBykpsbUyEKzScDTE6rsZ5GF5QnU",
  "key19": "3cyxmiwUX6wPiq9oHNSr2FyTKLNXXcrLi6bWX5BYJHudQrKTDU9PfBZZRB4dT6kQhK98nH1wtD5NXgYxRVpaojb7",
  "key20": "48S5Wr9bKM2CW9c9aWMyUP9rHdJuUuqo97jzCCgq2XkU8PR8q3CNmGaGY3YPY5dYoigdYWzEKcqHJ9H5R4Ca9i85",
  "key21": "3JQ26r6XKCvf9boChfi4tros7GWvLSa6nQia6tKCuh1TscFrXFpBppUaEir8GX1zWJ2erKUhGryiiETTxuj86sPH",
  "key22": "2YLdPRTM6WAJ7NAcQGbvkteBFy3s7twkjZPWjNmx8XSMwfd1RqToK2UdvjeZi6RvcST8S4r37bW4qZUVBu5A5AW8",
  "key23": "MzQUKFLvbMHnKRoz7fnFpiZ9RRrKY3xcD81txkkRi76nS41yVTgqfpJPE5Jcbc6tUkUrFxEnbyQjVGe9id3Tjo1",
  "key24": "3HZ3YUNE61D8MNsFcop9JxFXGrt5G2SC15brNymwJWymxiN9tWsQb665ZiqcBdRsWaXPKiqw8r9EkLy7oGHGP3bZ",
  "key25": "25PBu7QLepXZuFTrUJ52uddb59tb9yGsevxNkn1jfj2RTKaEaPuNmYN1ebE3WKRtKAVBRf6KAnr6fTDMt7vjV8H7",
  "key26": "2wLo592a18VKdA8bUfmVzL3nr7AvvbxsAqEwXqFVtQD3tNvWdhPcU4UPJmpF2QWv5P7c7XKYrJergZz3o4LJiWMZ",
  "key27": "3dHjEETrvEHGfBrEzicxvZYQ5ReFJErwCtLKB2X5Up29fGyiNgLdzteuLNJKQb315uCWvmcizraqJucDY2mGPqRn",
  "key28": "55sUGhiURyoq9pkCKhNATi2HhxxYgWnsYYz56VCsQ3TsvZA6XJ6PRELLX23PHe344fPzDrmtMtbxmPoJTdmLgGpB",
  "key29": "5WMrd7r3JVE2BLYVcW1b6SSK3upjviNbe73jyYYgvXH87VtnTDCkEseKf1pLxVRrGQ4rrhN7PnoFvWm3dYmtuE3g",
  "key30": "57Z3jCpNhArm762Wf3gjSzZiN4E96y92yuFhov9qsfA6swChtY5Lhh1T3MmCeutCbTTQ2AZ5YbrjY8PrSr59Laqg",
  "key31": "5UdPhskCWzkuWTJHDN2H5Y3wmcwNyQ5hsL25USdQyaPbDMZ6HFTR1mXwY9Bvtyt14urWNcStYiswXL81QaWs7S45",
  "key32": "3NikAt9zT1AETmPSoMY4r17aR3VbNjkyWysmNAJWdVKZM819qVkLskm54ignfKtFeSzUBzsakHvB7cYLYXxuTF4V",
  "key33": "2qVENVQytzDyXQay35Z7HQZGhFpxc6ZidvWkbGwNJ8gTUe6MLMTt4ngbcCJz6Ej9C5EzndcqkXYdodcNDLJJ6jc",
  "key34": "651vBqFqsCn3bw5HejvKWBNniQDyPKaaqvRAgYEJMfnnLFxhKY5vzkMELqB9kTYEK5uXuR3yw7VqCe4jxKwGvjx1",
  "key35": "5iUhyBLbjKGKZGBaaX9dKy9pxxMd85WHXLDqTvS9VgCEnXhFuFU7RZqaXMz8YZSZpimhxbyyW9nM1Tkva4t4jVBw",
  "key36": "2KQjkGrjSReT1yvhGRPJyJ273Pcnh46MLFxWgEqYR4RmsWSswnL8nj8EvGW4iRSFNZRDK5QqHhQji1KVnM4VkiM5",
  "key37": "1ZsMBsNQ94egmterpy1sRV9CZ84hhYpZpxZZDmGGg6VpBdARmNG5yw4pFotGcbvgjWNNJH2phdERtu2WcGxNpTQ",
  "key38": "41np4SCqbuMcNGtcAnq9JeJwhT5Vidv8wbVoFp5nLRZAGSSbdfcnQNgB2iyoDs9e81xQcpBAz46T2RRV3nqyJ7mJ",
  "key39": "4ATpqe4iBLSsrPUkXRj9cdyhmtncwAFapDLyyJuzeF5CJywmh46R6WqK2j2QFaBTWSuoHZiSa9qSamFj2mndzhCx",
  "key40": "ziE91WuHcVB8RPuMGTgiAZfP7gNWfC8z5kf4uPVxEZ45J5knJHGKQwYzN799Tc6Uig6dphVwtnN5Q2T3oGND3Qf",
  "key41": "EYpoHhFrBWiD6MkSjf3SEgECVjGqQEmeLh5nYJVJwjGn4hKwoX59p874bVT6sRsLnEUGLdDnvQHWH2V6LiEzD8H",
  "key42": "onh8Lim3AeYRsdmMmk9AsnaJfcxyEg7QEcbxz7o7xVmZj9GvURRpCp3aq1DpBjQ4otQ928xMvTb5fuTAgkojYLS",
  "key43": "2tZc4GMoSrsVX3rh5feFrjJVf7bxpvE3agNrcVruuso3JhFXuYEvxPnbp6N15fmGLxmhuBvtZhbU57PhjftFjFED",
  "key44": "2AE4XBGyhDUPMknrEcY9dqFJA5fid2P5YqnCSy4mBTjYSQYHwMajKj1m5834eQhNMpzg8GiPdzBBM3moneK8AuF8",
  "key45": "96Ey8KQ4bquPVyJKvLW1RC5MgE4opc9zJjnTDytgsMtcsvStEnhjLJPtDNQnjoUpH7XrA3az2mNRZbLr2PLyxvZ",
  "key46": "3RaxogGuAAKx5AipTpPcWpeTtpbycjnc3fWB7EGsKL3chibY3hL1Wqa7Zc4F9ppKZr1sK9vB2PcDsvSycHaiFyAA",
  "key47": "32Zre3njdRKsQJmBnjTkm2RFpKJxu49GmmvBHmYaYXhHn2vZHQ5SfoGv9oLueUWFHEGPkKYkZdpaXTQVMLsZ4rTy",
  "key48": "5SmtvB8x1yG4PLdo6CBsdkRchHnL5nynjebGGNVXK25J6UooZFu23Ai6ty7CJ1aiPvap3pQ5e5Me6Xdde5jGHEod",
  "key49": "66JNw3WmniVACRVPGwoKSfckw8xKEbBm5SgVKqoEZtAMGRT84toXiQcx2YFCJwt9KGnA3VTJSNLWSJWZdCJEy7cD"
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
