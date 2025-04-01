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
    "45bBqv3GRa7tGL7uP39zCkQWw1gQfhLsvErsgrErStVpBhyYSLJCyN4Yj59EerM4YHvPK4fGu8y6hzAWk6r2fMUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aFhqQqoHsbajQm1Pb3yXtq1zZQe6CqcoW4xWXbyEjW8ioNexNNSqX5E3g8yRmHj7f1AQxptjindEExJCC3g3dCv",
  "key1": "3RPmv5Yeri8rnwhnmBnbF82edQHxvKEAAFi8WUWGTRSMWEBEkxvGXcs14YxXMfz4uJUD3UYAom7AxvPPVjwDQt2L",
  "key2": "4d56WZnBfqhmEwHYz5iZRU5XdYsUfUJvzU8s5QbQuvfyUmQreNnoMPY1ULcNaokuAN15r2LDTEGEPfnw9qJDYoVd",
  "key3": "3EuufQtUNMUMF9YmquAiKpHSrrtv7Cw3XUUDKeb8TnkADufaLrRVyVMA6ZW7Jzp2z1L18CV9wHpCuLto1sUXXLK1",
  "key4": "3aBjAAXibudDpixc9vHW5iWBreaj3TMdLfPoKMVfjYJ6hoxrW9CuNruhmZGpdK7PW2jt7cwLCBuuX5aKFzayTheL",
  "key5": "5fMRW6c1TSEmz2mYtsNvNkqTbvM58jDYreqsKwbqUzDWjjWSRDkJ8SFPduqmEYTugKSMj4L98P3B6ojRXHcrc6sp",
  "key6": "3pqhm85YZXbKpPuQa81XzTFA2oJh98WnUaAWPPsyCbWGhmk3W6kHgGXYZw9PjiiKmebZam1VR2pWPn12S1Bag3r",
  "key7": "4hcqiuEpTNhZY3nMgNum19bacDBCUuNsecqSirES8o8GH9B5duRDZp9UNERV8ZFcMn2rgLn8FZrgqSTwFdbbTGLE",
  "key8": "pWfrjyswDkzR9RcfBnfs6gjjvE5AMExPergA9p7xe4xmmdhpiJk1u6eF6T5t5eSBiQBJUCGf9ySd5CenhUTCGuc",
  "key9": "5wx9NmeTYsbtepC1WGiXciShrQuHApxp9eotzKBD1bqZPjWNiKBH44rLPRUqfqJLkpwAdN96946bjfX1zQ33dR4h",
  "key10": "4Rbw8MHpodxcCp2D8y2f1NrKxw8Zum1ieKBSjF2U54p4rbdgnCk2pgT7S4mwChHXV2db3tN4Xmb6C2y9R8LDuT2v",
  "key11": "36fxgwX2iaoumxnv84GeBijosGSqEeZu4tJ2nYDN6rdmY7DS8XTVfvbRx8p78z4J12juEDn1fqT6vAgVUc2wdURp",
  "key12": "4JqAsmpwG1kQdyap3Wo82YBJFej7kXWB4v1uCGwXziKzh6KhRMHUhFS5D87innyyCD3BzKXVwEbxq1gsexGbLLhp",
  "key13": "iqu29KR6a4pDQrZ8cGprzoJoxRoJaTygbk1jYVTzRz4D9QBCGpbzGxqTyqZap2sDfXqdwjS2ss6v6eh9VUtCUj8",
  "key14": "4ir2uVMT7fEQ8sTDnsspPZNiiHLtyUXcVhSmocPwdAH8fZo39y2jfcxRDttHk66hFkYEJLvC4WHst5mdVtrkeVsa",
  "key15": "3nGyZxv7SBCCCMF5LLbKvbM2rPftJc8qEx7AKhNfR5G5jYDxmdByDW5eMA4Bk95Ssg9YU4CtcSPBQNtZfPV3JcnH",
  "key16": "2yDsSPaX6iBVmkHZU2SmQ52Bs4jqeVTHfkGpVQ6QUbjHLsSH2jnxtrS39XKBSXzf4hzrY1fYGMuoUyB8AjiHBANV",
  "key17": "2Bu3cjnTg74FenxnzRSoGjGMdF5Xk7sefcm56PUVLf8E46GoHciiT5vhg4Rzq6v1QZqVrouL4wL85KKBPDS6ePDM",
  "key18": "3am1uHkxGXUhLHfRd5VfeebXRvWNKvkhAUwUkeRixrEizPikSnXA3YapNQtdsw2Kdm57YybBEudsBrpm4DKJEELx",
  "key19": "2p9NnFYjpwxzqaVvyiLf54Gx1VTAYjMTKyBPmzErFsxsywTfGhjwMrY4WMa69NkPDwhcASnRh3zYDhuin4jkSaQm",
  "key20": "5so1q8wREsuJju8taLTaWDSC6gS6uj53QNgqwZNQe4dbG3SWSdmArq91WFGMByqyGSsBMAJHWDE9ZPKFvSZcUEbJ",
  "key21": "2MLZw6Dd2BMiyuqo64tdT5JUGifdQg9ZVs5SD7bTtXwHuCJ3qP2XqMBhD2YjgST4Kjyau58KWTJAmjCGo1un8cHq",
  "key22": "3CH6PKHECKh2z3gYHv3nMh9VYEDTcYyupBopyipDDZ1U6pwhETopEHyvLaNnM6p4cqe9JNd6JPfsFGf5AFz9gEfd",
  "key23": "2mijNx7kzbZhFEY9cWzrrK65jyLiq3DxGsmb43yhiQRxsF6LRnVYmVtV2JPGds6M2Tu3HrKi6mQQiPZHLvQDpfTM",
  "key24": "2Z7AgdAaKsg65LF1bXyFxCTdRrTba8fFJFWB8BULx8uFSJXBfZYThQ3qXEubSARmCouUeL3U5taW7cniRijH8aEA",
  "key25": "4ZXuZ11F8ZXooG3W7rSqqyr2EiSzfgFBNKa6N2ERwpcrZZ8fekKxxTxXZJ7PzRJgZ9HYj4J3Fn4PRb4TKArdojKk",
  "key26": "3fyhS6paRPRVriGaGSwWpB68sijvfpCL7VLAuiyKPkCamxjx6TSZQk3ewXevTM9SFqnzTwgn3kUmWwwB2FGTaAGW",
  "key27": "41kJ4YQRoktznmEhp92Wh7DdqSCrinar9kzzcoDKXh1rUGKUDjQtxDNpfxKV9nwTFVeyFRfjv1HD6WcnpdLWQUqX",
  "key28": "4SZ2krQcBWGSAXzRQYFxHXbZrPneC6o6VBLTxMc1Gk5GUVX6Cc8vuSj7Vz2KkgLvjGn76qATmcESLuaJha31Wvnk",
  "key29": "XAnjAwcB6gfVpaVQo52DtKM6Q1GDsVykagMt5iUqYRg2HfshmXZHZHfJog4TnJcnGW9rFCt3bPzWNRyo9hj9u3t",
  "key30": "6PzgizKrocf51pLpUpCXgE4qGuc3CT4uCpxB7vKvEBKppm9GYL62VBoNwDEGhPa7NvCkXiRSKoCV655NtmVm6Mu",
  "key31": "2iiCc7Dv5fHFAEnRuxfD47N5KeHtUFA5Qnaig5VBPRkcMMFhCchno4cYYNnKbCPFNBaEHwSiB3qtG7gp9PxGsFJ4",
  "key32": "2UhNqLy8XSU2oxL6PMYjNp8bLL8HwZQdWLQk3LeR56j66RE2yEv8f7ALvwzunarKwxxWNbfDoybk7tiYjcogr89V",
  "key33": "4p4eQ8sNgKgHd8qze12FgqMYMU47zUe2k5AkzoZUS8emScf5BQrFbURzTTT2tUV5kuKSCUeXFmU8Xf78JFQMizD6",
  "key34": "4emoPXg4sVdvzSWC3dW1jsMfN7BwTQRvBgP5xHNNwmgXzXkZLgtrs53Ae3dbGPxfnZNczQ6W6KLfN9RPSQBMfbRU",
  "key35": "56w75zuCtb45xcbDPxzq8c7wJrmhDza4u9AqhBje1M5ZsnpCnJjxLok9PqHj9tAsNp2id7fPjvKDKWRj4YUs6PpE",
  "key36": "5cW1GPuF5UMs5aU6Qt98HL1Ci5QKCooWn3XjhXQjfMeoCSWjC9PhMHQ2soVtzwj1aZr7EaSQxqx1pvNSv4ufKtau",
  "key37": "uMPTJYdUPKrNHoFRb2MbJJGeWdwyTm2P5EozhgiSB68p6LPVqinY2G1qz6wjx44zJymPzn6PQqFnmcwonzT2TLE",
  "key38": "5RiuvCeqrEuUWGusuuvGRUaahB3DiG712DoVcKPcNWVAecMTANgxb84ShjgpAJYh1352NY2nKnvEgmjNk5VKtACN",
  "key39": "Vpy3hnTasoqBq93FKYYy4YRXohGtywrbyyKrHvYTxBGjVYDS7DT1FwvLgAUszYa6qMFFzyMZSG9F1nf1vnSVY1t",
  "key40": "2Mi7TJGgNLCe3DjpGa8sew5jubbUJSQ6h8V4BedsEsMWfHdzNFfXYNhTJsLVN2giTNe3okHUJ9zGRbBosuQRsx7X",
  "key41": "2CfQYgxpvqMeyNTYMcjpz7G1WmqW4w3p6QGnMdaX99XcUZ9i6cHE9v9Wgnvhc4jsrm58ZmWyzGHg7eUnD75Cxvw",
  "key42": "5aqct4yikxW6ygBKZCZck5s12xDdf79f5x6QsGRSUwXGvxhmhodpGKaLGdsh8mR6hm1bazxPw5AVpiV2xnFg2NSg",
  "key43": "35aiaosyZrBAr14H2pZSCWKAfiHynnn7zCN4CRm5X7hayhyv8iF8cw3DChyWT3UHLR7fTHTD1jPeQw2LH4HFhBss",
  "key44": "2esMZ2RLxs5DfikeJU5FeV3tkm6tcrDQNwLuLwtB1nKYPipXuzon2SYx5JJopbwLTuKtysWsb16BQBkWiUmhWVDv"
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
