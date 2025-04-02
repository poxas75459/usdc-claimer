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
    "3Y14bn8DSGLacXBAsqhjB1S492oxwctLKNpPYCKMXmEA9E5rYXkRMk9MFAxcgk6k6VRdWW1fL8gACQE619Pqfv6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hm2CDtAEgsUNtwgzPEbwpx5ZzcFDqzJXU5uv9xyv12d9haAE7szT7B98EbNMddFAQE44vdrokf5BunNijqdC2La",
  "key1": "4uSQVytMfeu8GDXEtVQpUsLVwcMTtZMrfqxWRQPHsCopYJxPsbCXsreLwb7shiu19F4ncxvsd6pu3YuFM5rnoviB",
  "key2": "5Bw1nDLL6iR7tEvqyH5LGTA3ANQaFBBnfxCVn5mugxBcTGCNLbJQHKyw9frQwDHWMQAi5E7JgnjtD2GJ4NCnfNPZ",
  "key3": "3sgeTatEomAP5yAYvCzdyKCaViCrL74D1ks64J3fya7S2Bkj2ZqriJwvvi4at3kUh7c75cLv5uRDm8HFWxc9GRd2",
  "key4": "29iWKvpvks6rbjKVyZb5KU7es4WxS98ZPYmk821hZwp4ff1Y3p3AS7AHjFhZCAq7Bp7htv5vDntvRX4kxktqTQG9",
  "key5": "YYierHmj35Gf12JApGftmTT7gdmNi83avjsoYKdqQEFQkZZooXpbsaQ1zbo57VCsMhwCNvGgAWzD54B55XaoLJF",
  "key6": "BfukpbGV1AQsKqUuEDYEosJPFKXBjhbkYtjeR2ftaLSrYS93cCVRdr5dKuSkQGkeEfpTXMTs1JHuwQsEBPHoLxm",
  "key7": "2qorv7PWQYaGTGUQHhNYndCzWX84mj7zVtdA3koTXMyssiqVTVrVV6dd8mHtTywvvvFqswYFQH26yPQwjC1dnod3",
  "key8": "4yLCS9qJ2QiTWy4bMRNG3EJsyCdDGibucutFHjiNC79YuLyiYg3Dmti4wQSM9QGihi1GJiWw6s6CZCKTdEwgfKUh",
  "key9": "4NPKFvppKWXkSJNgd9pab36nsT71xbXanEQqF4S14s5xqyv9zon21J5wZ2pYDEZpDMsv5DfG1QSpAzvNs6jPskAT",
  "key10": "3WVoFJinWUfkzXTbecyNNCyZEG8f5YduDycCckgWkDXJp4dcT3V1crNZUKJGiPpHLLdFaU5kDiTRcc5qVs7Lf3E9",
  "key11": "iwj9xHxwprooFKHqWHgE8dn4hFDNZF8aQLUQYDf7K9AAMa1TVxhPH4FcXK8Sw3u6k7XPs5oa6jAW4J5EMAcUhrx",
  "key12": "3f587hy3ygt8RTsYFifK3Ru8A26jmiFzruoN5xXjDDT1mrbNxbhv2pKTiFGoydgwHjgMHAwaX8CgbTC9RrkSoHGN",
  "key13": "2SxkKfeYWtzyxUt2fRF6gx5gYVR1ZnY42emhTBuHU7FCC8Fm4WcyBY16ajSbJawHptJVK7XrvHMLeipe72Rbco49",
  "key14": "2J4Vsw4QC1MnUzRCFU2F9P2YUqwVqoVmWFs8624wdAzougWCcKEc85EUN6MVN2iwBigFM2br5ZcDWuF76H2dtFCk",
  "key15": "u1nXZDGn2eVv7wPwMmvxLRKun4FA71Na44Ly7SMvLz4miaaTfEFC1eCsDtuTLHrAzTh7Hz8tXBGvbAHEJueYCxK",
  "key16": "3CYSUpDBKDz83sKGUe6iTN7UXBkMqcF187rPBVb6znqWHpbmC1r7NirPt5riLtWY2zZC93N7aJzX612PfWy2iGAp",
  "key17": "4d6acmUtZVfUV5p4dv2daY71DNxJUr7LiWJwbtLpeeC4qm4iehJGLHgfsx2N4wNm9M26njeusXGZdt3Rsbh8U23X",
  "key18": "4h5rSpBDnSXM9kBPhQLa8fkSYCNth9ebaTR1G5cLnYps5k1NGnEu28w92UMnFQznRkoMABEoUgv4wyV2u1x5hodT",
  "key19": "2Mk3XW41kbbaKNpwHNopBjYpvYtMXdzywy9VYamEuJYZYq4h8tBLywJqFLz8q7oRtJ2UWEr3NcUpt7kgGZd2Htr",
  "key20": "4XukedzcJWiNDnxLuzZQHvD2d4AMo3AZVdk88VKgPcGzHsHDRwW7DSiT5cKdY2xtYfGo2CWVURTN4TMTRBsnX6ZT",
  "key21": "jyf5QMoxeTprk5WYGX6oPnRXuE5GQyamjb2EnwmTXHiuYfWgmkKrkVE8y398XvmV8YQwgc5N97mbJiFq5nnWyyf",
  "key22": "38K9N5EzBt5tnoyGFSMKvWET5W5V25acfvBJSHvJMUP3LMVmMk2n9stikj7WvSWcfvTENrLj55mCzFH21JXxfNQ",
  "key23": "5HqmNjnpUFbK4h3fwRP14dRdbBNjwN1vZ3tj7CsGqiLgmYznAY4y1L1e2eTk26V9ApqQtpY2E23AByZbqXkrRcGG",
  "key24": "2rPoc7uQeHEQUrHJQvCEK44cnG6SuTdhLpHwV1imNQNcpbEQTouZd7S62hdZkJ61CZoMLdmhkD5uANs9u7mhCvfr",
  "key25": "2c5giKXzcruN5npTJ1n1u7AJEEDHMTGL8ijuDPD4Ac9qRZbev2zDHf39uNNHbrWeomFgZ9ppEGkvQwo9wapujGCe",
  "key26": "3QV6uWaz3d5jcNGdH3GRKRnhfHyghSrWdNXNfp5WsRs8MEC26cV2qwEnxGkkWq52bHyTHdVG27AiYQWdQJroFY5Q",
  "key27": "39F7r8xT557mDuJSwA2W7XLxdHoJFVmBiaekwWDfz5Dcz4zSq8ZwnVGLcMuXkXHXcNYfGrbYdycMPyR1z7Lo1qUe",
  "key28": "3TEmqw7UysXRyPdycy5numtr2dGwwWYo6GJRteZVjrFYkHYZL2L35tvpszyoSyjy6zCiqQrYrYfdvUCPCryznBPA",
  "key29": "2QLVA7nXgt8yfXrEkrBNUaxiZiwmAzrrdYBMaFwhTdBW7bNKkmkkTLXzbbDJv7WYMznEKEqoa4z7RMPwoTVXvGsj",
  "key30": "2DrdKrbAiNtycJ56RTFUesw5jjNNP4FUxhCoXfuAKtRSBX2Ax9W4Umb7rKPPhhLdFAmsdfp7SqAoy4AFCK63eQfn",
  "key31": "wwgFFwmJTR1kxJuYBxfjD2yGFJD5S9718tyQU6pGi4knEFXX7sW2vrKTUTmVGe4Ut3MYHvBZ1UTRaMiWEsU6RCV",
  "key32": "48kNesxFEJ6MxSixsFqqx8gCTZisveEpJsxTQZ4Ftx864eMB84sqaJn9CLuoF8WRDWBmVerPMZZjAEWRCYGLVn7X",
  "key33": "3ythNDT5QK5gysrCYR4YQN4oEaL9LZUaF8gkS9Wzri6b2quDz2N973tbe9jm6BCTpaF8QWDmvo8DU87xhzVwzV49",
  "key34": "4eNicundPu1wLEAU1PTiwLprMmtjsTHGdZZfLnvpNZtMXKEYZJJ8syQ7ZGMoiXuX5VgK61kSR348pCeesrgfb6j9",
  "key35": "2Mch47V7eAeQbhQjPoVhCs2nGdhp2Jp2k3iU1JJJWpg6TbHpBU1w4LF27vLX1RgUehsTTGZXPbYW6992TjvPkjGg",
  "key36": "2sSdJPWiwR8VkszNd2jXVnCh3aAxbpy4o6AFYrZvXDPGTpAoFp12Vo8GS2WVGdUUxeecjWd5BDKuCEJB3mqpRuvA",
  "key37": "5bQQQymMoWLxKrMWdWP5mmxrrFwMkB1ftxD9iYcHQBV1fev7rFb4Rx16NqyRDbXmKkRdjZJm4ozb3D8wtRAoaqxA",
  "key38": "578HZQYjbFHV18sQD2Lk9cu8GJkNppg5fLsoa6z58rmNtnHQqiJJ5GbE64ayLpycxhiU51XxxjnazTU3HgY1V4nJ",
  "key39": "54ETkN1dYLSEkCsdHz6XmTuKJSsK167RWmJFYE1TJk42Yc8jwTWnJ3yKSwPQDWxfGLq8aLZDABssQcVTRtFE59Ng",
  "key40": "2HTzQCuhgDRdF1JdyQuna618b4U3w57KuKfbAYfWcojAa69TQV1g67TCjUusyMtoTFX755tMEye2P4mQZfGnCeEN",
  "key41": "ZxsxgvcuC7wpQDVFC5WFqLJkmUVgkwLKFfAqVjNRkxXsxc3NF9LwPdkok7Ra1nfk9ucdaKQj1tZu89GVQcvNhWL"
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
