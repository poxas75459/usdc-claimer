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
    "4qR3ywjJnn9pNbxWM9znSicx26SwPsWGHHsoXPZCJZX9DscU5ALv1kCwxsTLtxb5X4H4Zu67Uv8jyjxUSKjJjiYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22FJVbjRz4CeSWpeutGvfsri8mey3jeMnghF8U3iTNXVzRnYRAiwyEuRPcLG8kmnt6Umf9cADvcsujkac1Q2LGte",
  "key1": "3WvEaGAuLiAyz9XC5x2kqbjdWVbMbpuyQVjGAmfuvFoVAaBMx2DKeZTUYtELDyvdQ4N4aeHm2JpwinvPfDBmi3GS",
  "key2": "414j2AzusoNEUm4HseaSEkRPCHVMRbrrZXq6Ni9ysVcZtSJx7hvGTnB4WTE1uv2kL4VJpJHJN5trJL3tJ4u4NnXm",
  "key3": "5KSkE21mnaoHyaTNPMhMK4uC7j8AePyhoziDzyeATHug2GFnhfTdSWMqHb6qEYA4jM8c4LnF5bFwGLjbNpRnqtXY",
  "key4": "dJvFRp2UCtCp6tqABUh5hWcbwryXRAnnmn8LQWY7DKG718Nec9wnRgZ34KMj8x1QAQArEbXqnEuZaH7BWYSfCiM",
  "key5": "3oLvUmRv16VrpHi9UX9KgQyXcq9hhfc3VvP2YPEUYd9QhnN8Gir31fsDU3w8pYn2GM51XWiaASFNBC5DZKvKreHm",
  "key6": "28kW2XLCPVDXWq24hUETRd4dBdPHq2fSsDN6rvx3etW1igZVvpqNTifeEQXo2NkULDtoTgdSDHR22fHCfGGp4Mza",
  "key7": "vngwKYbo8upFAm6NJjjonYyNnhD1Kuer9Fe2K8LrwKcoSS7ZzbgKv18zUUzvRVx2oNajn198FxWAcKGX1iT2mUR",
  "key8": "4vkBTAoL7pR72fa7zU5H8ULKdm3RHqorPfa6BS7gJx36WW4e1XagKn16rDtjoPjLbVnCJBZLirJ2xKeMC6fSHohb",
  "key9": "4a7E3AzugJqfStVoXo56eA37sJu2CSxN74QXFMVX6ZWbo1v3ixof5ztteSYZtUeJ5krnYRhpNTsCtzzhG3eZmeis",
  "key10": "5rkFT3RXd6Zwhs7VUGVHZqPkaFWJYWv5uApYY8D1VrtXKB6iTjZbeFWcv11X6qRx2CCCRCU6dw7o5meUnQLA88tx",
  "key11": "3CJM7dEWHDcTCxae69M8E7EBA1qhHwmKatv4pg97vWJuFvRzbvdVgPDqfMgRUChWaXz5yUxUqJppkKpCGZLjnjxf",
  "key12": "4Guf2uBiNVuPyg5EETXQtPRNpTkziET3FpvRiR3soxw9dF5zGipumjYhQ94Yy8TavX4N2tE7PtkjSMHri3bXxxFK",
  "key13": "53AuBurdZJSKaDeK2NCdwnrfPXoh8EwAx9zpdu1MujbogBfwDem1Pmi619FNsaNQsjJPQoW1so2rtTnoZowSjuV",
  "key14": "4Mn6g62iwb1wTCUzZBmxP8QqtER3w1QZPNHW11FbGbe97Y2BAKByy7bxXtGfuo7SbeLoQd9u72ngDstTLafx4m1X",
  "key15": "4iMvYayTVZHHTecDs6uhTnjpU8Dxzx1ZUBpnzCxfJKVR9VVEAnfMienkJULdaxpJT78GYc5ALyarNw91qBdWSB9i",
  "key16": "2rPewWqBLxX8sP1eSN4mmjCqs4szzpE6qgn4tYESNCdzYxho1ZvDo6vo7weH6Dia1deV8HXz4KEpe4xaRJsuR5xX",
  "key17": "2tqe6GwCuAWCACj57ygQvQo2ETNRXWD21t3cbxyh2ctpGHfcHEwu6NuZjmu98LqJvmKjCqd2ihHDXtQ7Qd4rCiCE",
  "key18": "359nGEXeBPedQ6kypn5tCdSi3yh9zNHUc7ALY4x1pEf9ntTmu4tEHDB5qp3oSrC12untvry6j8tBBMgBJyu4BZPH",
  "key19": "2rgfN4e13nTSRRAto2W2omL5nTJNBWWcGPPGYnVkVRLTahzrvC3v9Wf53AFDkNqUTBy8GXA6vYHpP6Qg6raahrNA",
  "key20": "3enyvRsMprFFfnXB2AFg8mrE6EqxJgGdyDz5tr7KBVch6YtK5RzXBv9HmFVPaXEwSLYwjs7Hnh3bhMzNQYxTDCyK",
  "key21": "5VgHEBKN4Pm8TUo8RubbxgdQJmXAQVM8rKw83zY8MiWgbEKseYBCAB1Xfj8enukYoj96vpNCtpXaQxc8gHChLYMo",
  "key22": "5Sfz5AFoHEMbVp9M7BCUGQvyY1tLR5JUrNdUy3Bfo4XpA7GBBQ8LJ1ntmnjQ5dFLHxBm2MngumCtyQqAkC3oY26i",
  "key23": "p6aD39iFCuWgt6vJnFcJFPgXjsj1ij9kegGVPMWop7FDxekzYzYTbuYgAZ1f2ETr14YWqsRTcZDm1u6uac8UNFM",
  "key24": "5BRUWop1bg21A7ENPXCfdFDTLpZHeNEWcCit43iagUvZn3fYTVk63Zft9qA77MvsS7HTmeH7Gix9s6J7TeWejVzK",
  "key25": "5CyvZydDWXEHr2nuRHoUQfnBfvvUWL7XiUucKyt54cVMwo11RZCQsCWuEM7kJMVPVrL6Ho6yRKqceWw4mABe3R1g",
  "key26": "vNpVZUdG8sPjWHe817bRkYJNVieg3imLW48ghbPkxzu62h5qpcUWinJCLTHYc4ycxrHeTpmVrtbqoo4G9rfZfGX",
  "key27": "2GzPta133DeKUePp5SAKZG3sU9kZ9qJcWjR1aHid6j8kTcoZLVu8wZyMEm3uLdEexYgPCwk2QrSNVE4uXPL5tDFg",
  "key28": "5AcCGPJwZz1oWdg7itEajZPPYwy9koyb26ZWc7xCAyFFaLoEJKeWemjP1zs5QASehhDZyDBFfxbxBtCGL4kmADmS",
  "key29": "62vpScNMNtkFD13gmehV5Z7DS4uoo7FqShBsMWx8Tx2G8jdAd4uGf7P8pULv5ysvGSLFERXoPzRQ1SjanGfQeUvv",
  "key30": "3Eo9Y14bPrqyw2pWKYahMYyueJwKAs9fjVcvpgWPJih3RVAYMkvUQ3mtUECrie7pJjmhkzNaAiY67eYCLAwXyfrN",
  "key31": "2C3sE4sorSkgcCCJTuagyxPDQPc2KenYk3eitQF55uDYuVZZ6yEMhN6YXAL8JLKVEw4gnY5YicjbSkwqTLrpUCqJ",
  "key32": "vJiCtEeVjS5TJtNygvbc32LaCh1UnkgAyhyuu5RWvBW4zDsFtRyRvcCotZWcS2gY75g9mqFo4hW1RmrUXPiFP79",
  "key33": "5vMr9NjBGyPtqhRtkXQBfSK6cqxLK5UhMYQP7VGgZKng2z6ctwKvRNzDJRu2JzmBbU7RComLAmMnc68g2ye6Dh6w",
  "key34": "5Gw6FPf4djGPmtm6hegtY1SQzhe3XhvMPq85phjLeqyMuRCxDU64LjqE9FwaCfHqC368Pi8DEaLaG1Z8EBJXEhnB",
  "key35": "66LWp9yty7xyrMziBxfVH572L49QVQgfSczqTuvMSYS7hztEQXC6tvLVawZWExx8VkbH6YAxHKETT21e5KgRj5Jv",
  "key36": "4Np2jS7kVp7CpCnM4dvwyrkkD4mCHjfo8dNY1Gxnq4Mhia36V2d9F598HoW4o66kjgkBbCmvdoSzmVbcLgz7WnQs",
  "key37": "aSNNAWpGDUdUA4HW5zyy3JsXePWy5QQwEhVYc69Q32roNyaAZpEWdMmZTDx1u4FW27UTGmUBeuhY2WeCBRcrCjt",
  "key38": "VGfSKLcG2TrMXxogLxT6TUbXYA4MN5Zc4bCnjpQDtm4ZPiaKKpBg5DQvogWgft7dJvbfF5yeaqFeya3doepXd49",
  "key39": "3RU8X27UqWS8nFcfzGaoSwbjNdRk9UhqACwW2uniSEpwqqark7W718vfZhkPpgzE1VMU1GgypdneKP2xLHa2ZUSw",
  "key40": "547NS8K9a3zcGbnf24b1dMx5ncUuCA87sQLf7VEVCU3gVKjH5g7zjPijK9kZ37GLK1nwURR3z1pSVQPcXkdbtpMs",
  "key41": "TZy8QUSHexFLBx63qBPPGXa9s5UEh32mmy7xr1nZnNUoEaPHvGAmZyP64YZfZ8YhBenRrVaqKp8qjMpETR8LxQA",
  "key42": "2v2L1qFD1wNZtMF6BG6z8vjuyHRU6VDSNkD7BMnzckhdR5R1Dj7PZQsSefLVYaf7eYDwd2XZR2iLBZbKhtoPsUea",
  "key43": "2mLYDvyzjUr8j3pXnH4wjrv6tRpyew1V9Eb5b1vEmq1zXwvywYTFKqQsMj8NGyCV6i22kKDC943rQUsnBVjBZp4C",
  "key44": "32qr8pzYSJAtMsB1qyBnCohnAqLniXzwYje5vgHToGQZsHc8Mxy7642uYazQR8rPbSiVvJ3bTcM4Vg1UmLtcGUGc",
  "key45": "iuCA19XVe4o2yuHMxs94L8scjQBmivZPXZz8niJKr4aKzY1KeV3PrSecQGX5Q52WCLDDjHRQDYcsTeALTwC9EmR",
  "key46": "4kMZkanxA77qHDLuYcTw1Nzh5za7Y9BR34k9Vb2PA94dnkejt7v5gSLy8buGqt95rMhDyKALtQhv65VdP4FRGaFw"
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
