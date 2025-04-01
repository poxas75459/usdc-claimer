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
    "4rsEG1LbezEfnhyKPKAy9gEjRMtHMTRZnEd86SSzixyETePsDSafmSZDP1db4c3XTdj7hinmJ34np7zYLKxPoR6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SDNPBSie88mF35nCw7vztBn56nwftCbEko1zhSWpfVhsBAFzEAM7GJoTrD8nkqePNcKy7vdSqJWwRy2aLz6YfLG",
  "key1": "5xaGVu1ojaM9m98jRC3D3n4Qz4yGuNAtVMXpmgViEMp3r5vyhd2DcfZreNVdhDzXsLGXq6TQP2126gPbbcbYSh4R",
  "key2": "55tQaZRK1BFNPQv9PX7haBuE9W2ti5N7Nz2t6EQSZhMMTXDMq5M1dcKoEPQBS3o9t9sTDAzyGFBKzSVj9KQ6th3p",
  "key3": "5y7bwp71igm1U3rm7deQMKQYm1zXjRCJJHmCHFAHGwK1H1zBUSiVDUy3biAsB24RmGkywBcrdoHqC1robZCtxhtw",
  "key4": "2DEwTRbamAwaZL6srZAzFLuGi35Phb3HyVQENUPj5RuPv94zHbTnMMrhej3soXCC6bJwkMFw1sNhSD1VwrJ4gM5f",
  "key5": "3jU1DJSVwFzXzxHzaRknAAvuzHfzuP1Q6orrZV4X9N8xq6AgkVG4waDXfN86QSX3GzHqdVdDuMkB4hzttPs9fDs7",
  "key6": "2d96GNmatYMSgYMAR3Cax7cb387Ya3cAbkezMbfddG9PGFLoaihyidwbCL5vGz5sgbd5yiqyyF1jFhcrETTSJeT1",
  "key7": "5YqrwHTcFKmqi6kZc6MLwPCiErjTgp5nuaePWQn5Tv4LbByS7WFfX6t83Fh5am7DfAmpScUKQ1mxarrJ8SKQioSx",
  "key8": "36hs5giFLaMAAPWYuetHY5XYQoTMevoQ8GUHcoUJi1eR8PWdC4iwvHqmBSyefe2aGXTKPCo8NSUCMtcPeQWYy5Bx",
  "key9": "hTwQUdQB7KiBmPyotjnwsnkE24VexCwhuH8RiWPPH4T8AdrjCqRxcraZWHkN5Ewnxs5gJ6jJreGZR7NVDouH2mz",
  "key10": "LipSh1UTPjyc81XFFBK3QLrmCQCMVhJFLq34sfnPwjbwTgLdPfNDtbvtLZH1ESTsViyHwjgADbDAo18Fo9g6vcj",
  "key11": "27JX2pgDAxqVTitf14jHGGgspAG5KC8e3L9maNoSSEjVTMxpBU6ifCETHGYbtQNiBTvHUweSY6ByzEP6GJi4yP4P",
  "key12": "44Z4AFGRQNPgMVzTxXdbkCoWMFDLbwype8XaDuGYVGRLkDkGGV9KgMgya2dygepJEptBHWBN2igqVJqGryzxN8VF",
  "key13": "3oVjUmzdyxkgCocsGK3QdEJEPngUtdUCRM8pV5h53RK2G7PwxwpbfgnnwU7Lmop1hUFM6USH9cmm8f5wPi99YJAP",
  "key14": "5keC9MMybiR11MKzGNRCcRxAsn1X8sXkgTPckuhEnCFi54MdLmXJF7itdUoncqaZzxLieEQAWBnHSEStrkgRskJK",
  "key15": "3i2FQFv6rjUAJhs5RGG7JybosxBwP41CDTgdk6KEzga2hfY3j3zVeifhAHm2PyavrVqBsy3zgPAziGUUTt9m2zG1",
  "key16": "5FZsTn6mnk78MhZSQ25wsx9qhtFFP7vDZAethSjwBXGUMDZLBAp6xZMLUEAqeNiE3Wi7GPCZHjSAVeuewRXrekdT",
  "key17": "2nZbeDVrik77JnxZf5cckMxTLhnfw3bzhtQRpiU6XaqNYn9LueNWEvsTQZFquufA984tJ3f8atyM7Kx7SKJwHg6n",
  "key18": "he1BhMa4EPAGJit5MJkqazH5ZdnV4SUeRfkkxe1VGRsd1qmzEVQTfa7aebndCkeEou4xUhZXAcm7D1vZwEenPS7",
  "key19": "3SWFzMcKpPibGDipUPwWk7d8hpxUMDfTw7cha1TSnpButdwveAvTgZeU2Fu6FseLtMUGAs3coSNBYhMQL73ZCiZx",
  "key20": "5bLgJyZpACFDw2ecJuibwZM89QBqKyESsWZJNPrN7EUb21RA7bz7gSKyZzrPMreCs5Rg1Vf1oEYdBZNxnCzx2fkp",
  "key21": "2LuZgsJKiqTVoggnXtpMHgbfnuv6W14TnFZ2fdsAAv3URwBLnsBWgZ9QgMj6j4P9yyxhHfMPt3g67kCPavCMkg1d",
  "key22": "3Ez4eEx2QtbWdQHDKvfsPjNFocvZgTPNMnyhECjDpVLzYqWGWfwpKQfLtVk6eV8BLUJAvgiVWjLJQXoKbZCCMGmq",
  "key23": "2u5wP4aJ4eV1s5AiSgmfBnES2sRcRUc3Wnud2iXkVp3MQUeki1wgzsCbBFevM4EYgKxbenK5nUtRG46Axhya2QQs",
  "key24": "4qeWuXq4mMhgnLyNVLaCBWGZz9zVnV1txN1worHfEan3LQKQLFwb66g6myjYMczvnwPTJRiwdMhEY1PNNqfEFpDQ",
  "key25": "3GX8SaYpHAVeZ2is4PBSttP2dod9YF9zsgc7L3Cf726aXeFkg9UP5MRxbCeGmy2uA6ryqy5bDELLEjFxQMNgkF6x",
  "key26": "9EtBHLmHusMLWV8wuT2RWG35dDTyR1hvhADQBoDiWwTVs3q1bTKxkuTjhJBSDt6RXke6xyPh75Skm14uhccmjkp",
  "key27": "5ovMqKExurouXe87mjtD7PVAhGDwJHcj1ZsXtQ7WwPgBEXNREt6d2jAY3hWn1sYeYv1zDQnYwBqYDgJTy1DfppoJ",
  "key28": "42NxW691d7yEQBNpbTA5m1oYvFj6zDLn8iHJVaUrPJGtk7gngmSSs3vGsosPHFewLdfWvgXvzHk6K9Q2scSnSwSb",
  "key29": "4xiRwG4XJvqG1wgQ1NzGEJmpZ8mJRCYCg43NDSgn5qugRNvf4pVVUvYYWe4TJD7Gbt51ZiGdjzAnr6BmABT47r1L",
  "key30": "5WWuNRQMd9LZEtrmrW3WdQe8M4ujnybUC2NjaoTvcXnD684U2L6fdDwcwKQfHEM77au97hJF11VfwhgVzkqdpw2v",
  "key31": "5EcLGQJSz77dVU4epWceL9aquacyNcisxRK2Q6Q3nfzFrGUEbvFoYwJ34G8wpFRcav7JC9kyiN7wLRyd6rcscBWA",
  "key32": "2Z4CZ9Vxb8VFmPuWN1pcrawgaz4qRTtYBxKbKcLET9KTR8s9HEnohBbeGg7hsHAve9QuY4DGt81G4UiT8yvRAt75",
  "key33": "PAVJpWSuKTdn7pJCjC1kWuSJrLHvSGcGgZJ9yYQaK7fiWr6mPVQ4jhP8p5ixbNXkB3MU8qqAxnox6rUoLhSmrvZ",
  "key34": "3fKCbYyR5dayazu8GidtF7YDyWtbz3mew2suAzybhzz8wevHgTJtc4rv2KLcYt6ozMd77APaNeY5QeyoYjnWdph",
  "key35": "3WDto7tcKn9TpWupkPKbubhkBP9GTVF9WVnCubistBPVGsEfRTCWvdMzDSMcZNfkYxE2TNsihzDLiHhiK2b63kUH",
  "key36": "P5R4cfX81rsaSSEnfBhhiQJDVaNtB4gCisDZpr9DUYWTH1kS1qy5r2SXAX4pKrjkXiFhpJMgXbYUietLvf7eP5a",
  "key37": "2xtHkg73hUmQNM13U9shSrLe5kGThJtwiud15HU7wzWVCkntyohwyXyrAxaQTna9ZQgQc7TtTHV9uqeyrTRDBxRE",
  "key38": "tkyzGsn9VvrnHLhgwAnCUXf8EPrfN6Ch1Cu5ekybf61ymoagTUE24F7FyVAvgA2gHzA91Q5zcUHx34ksgcWq4Ve",
  "key39": "3TBRzZ96dCgoRMGhtnhPNFYp2QTQ2jbfxUGPZ262mWBTqgA74hazatAgbJigtYs7vKb2A5u9UnKKtSWYGZafayp9",
  "key40": "619KNPrPqc5k3WdyqJRQrrGcFrAD9ejP5ASuammfXp2huYqcdS2FBAcwgbQfP1eDstoWpFeQxXC8XNRcQa9tsjKq",
  "key41": "Wx7XW8LShot3WDvxuPm5UCmVUTmMhWzpoKV6qAgm3RBB47uz2MSMwS1CbCbfgnwtBxP4wCz6zFmY1ffwzaEtUTG",
  "key42": "2eYYRd5erV4GQnpD83mmqynjrvkZQwhbVtzvHLoAmzLVJb2U3ZXymrDEfvs9uoPrDyjaZRq71Dh2SjCwADgtUayY",
  "key43": "53QLxsbcwDLoQSPKQgP1iR1DB1Sbdga1voCsj6imtsfRVtesmfQSXFPuhjqCpJdbxqaC9H4ti8ZhiDsWAkJGfQ2C",
  "key44": "oqfHnX3ZWBCgG7Jz793HcQGWKC4gK5f82SSndCjgDdFHt4YsWK9tBrnLae7q5Zyu7ABYLLvc2a4jFQ6gFmL4y1c",
  "key45": "27xWRGu5eKExt4kwwcr31XpeydM9vZjJwJaH566wNj9Pu3DQ6mSn7UyL6Nd1DWHxi8AY9zp91fNnCu1Mn1DfNJDC",
  "key46": "84p2Da9cRnNFN2HyWH2TPMhRF9FTtnksaHi75Y3SxnxEQ2pY4FPnCQi3UDkMCgdX7vU9WQ9dFTe7KdqNqd1k69S",
  "key47": "3iZq45p3abP7jxzMGkiNKahpqqMkvLwu7pga6ExmQHRwg6cLQB4kBXKchWm5vVMnNpc2RzRW686de6wThDGbwBww"
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
