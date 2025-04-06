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
    "WskNLuhkkXDtKirjQMAgYMeLbhnEr2oPotCJ9RcTwrJ6kozy7HZ1FmKeD1t2Eea8FkFwdrPqWpX6Y4XpLdmDndT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WtgEpaTirE8Jrnxzu3DkFhTHHjUzY52eEMVfdKdVJa1KhozLZw51SzkKdcMaRUe4q2YeZw68aXreDnWYytTm59c",
  "key1": "2JAq3DXbkqqitgB22ys8WZLyLs2srsbeytWTTZoBwE8xEY3iu3uY4Yqgpo8XUbta5MkdxT6epTYMQYfKjpAG64x9",
  "key2": "3CJTmoSBAXn9cy8wVQvJdypot17RxHtXAbror8ChpFQ342P9qbg81RXxUE1M48WJy4jyZfLiBHrQtrMN3wV1xP2u",
  "key3": "4eb9amqw4Jp2PfEQuhQ7hJty53MA1kwjcnFS7RaVL34czv7i5gt1qgZXisdcCz3rnHoS3hL3moGgaJybJVDHjVnm",
  "key4": "5dPacmzJ2DAP2tAQibuymv3ri2zQMvSGwUghjYG8ggDYskjF6LMaL4YbvDdAA7MdFxp58HZTdwpHXmnvsByVx4C3",
  "key5": "5P5bRmKoWgUy1Z9VNWknXu2igJ8bRVsmXprnPtaHMLmGXZcaeAr1j8Few9CTKuCeWvJbwP4N9ywZ4GWDsoFSuV43",
  "key6": "2XXCGrqVeSWuhHEaEWhwbkrHmSqfP2uD1PzStwqvMPwMKuHH8WAQcER8UQFMtufdypCYCHx2DzT3C6MAZZJYEEhu",
  "key7": "xKjPZaWy9ACz1tMomEjjL8zUWw3ZdbocM3iPgoRLmTN3BvnoKZgUYDNWgVaMarj9ZCCWMmWKsxJfTkfcpuA532x",
  "key8": "5zefkScy3ANKn5fy4R7kT9BwwvzZ7tHVGy3gpG4E9KwyKZYwYUBS3rbdoZSLJ8FGn3BES4pK3d4ePKuyyEKsykjC",
  "key9": "4B4kK2cQZppLDCaySBjhWtjUb7pjb4NC28iBPwyb92KCDxokRSSaLw1cHCj3dCdj8sGLSFdMkaTGy58j2TekRDt9",
  "key10": "4oBj2CLxv3ChzuCh5bYtLQQkBHVUCbzWJRC8TAdJMVv7QkYVszDEsQuqnksWg6eXoomaBG2DZWzARgD7v42jVq67",
  "key11": "nYEEyynB2LPBUBFAmfzqeBBe3QYkmvo5AnpoS9GMH7cUVMh6eytRY1kh6Bw7h98v6qBrfVoc8MFD1vTujtk1ti4",
  "key12": "vsck6n8zzwBQbK5Ay377CE6hGY3oCoxFeRSoWYK2nByrgzr4tauku2DW4LeCYPqVqBbab5jpisFwf3AX7HC7mdN",
  "key13": "r49iUQYkLeRvMZHHdxm2C5PZFTi7ytcVQEin1yCQCZ5NKMx6gk2QyRwSbXPs5q12ryuaLfBT1GREoig4y2yhp81",
  "key14": "4wBzp35cY7AyR9wwpHruTJTGQnFUaeBzj44ZJLM1jL91crvnfuyUadW7t2tWaZHnjJ5ZoXUSgjDUj81iPHoChvV",
  "key15": "4QaJdokZsA9UMSBcWwH9KsSpNSLzczHKvcWryYQitftYujDBx6vCYogGs91xaGPKXF79sgi3atCEfo24VAPu9EdT",
  "key16": "31RL1w3VYvgcWtGgkjsXNs3KX6qRQsiRHq7ikm9uaAfcMUTrWwS4WUrFiqApzZqiUL9iLy4Dht9fhGKWWhceRbJ5",
  "key17": "3XXebtQFqGD2HUgWeEkrkit5GDk9cy4wz3E4ntfqvbk2ukDv5EYgz16oirbQoNKpAS8j5CgDKofdnp5ps1bwgw6H",
  "key18": "3rjYhNmMBvqxhNr5p7GUFLQRtvV52d3gg79iGY58Usqz5y8NeEMTMrppxg5UJUH3HUEYZPmB9QpPk67p6ABdF2eB",
  "key19": "3cgnVu2krJLsyAuEYEZ4AXZKiYoipffHUZ4Zm1usww49kCh8k5BDiZxUT1xwc6QehCsUDfZTLyEm9gjmhVEe9JYi",
  "key20": "4thsuNEKRRsSvEEBfTtGaLUanSkVJdi4vg2CB4ZR9bRSgQ6hehLRX7YnGgavVyftNxz8kdFmfWtfJv9NtRxGBUbw",
  "key21": "4wzXjm4L629UvHDX8G3ckQY8pGDxJNXh2Qp3ENmzyFfEnjAz1VktvTVab581ozU7dSoHpbd7NbhLPBjCsswsF41t",
  "key22": "2QNJuYw8hoC86SviHdkgWR76NYmxQhLoUpjNBWxRrBmZhaS6UpeAH5hMMtrRhtPvX4WNZdygXhdHHNqzmU153q2C",
  "key23": "4mEntfd4vip3jSTkk4Hg5ZkqmWxZ63jHNmtT3FGce4jGsiHJxu7zY7dPDNc1fJinQW8BoqjgpLQh7Y467uVCkeNv",
  "key24": "5Hdig4uBNNSfyGwiP366XSuj8QzWgxe1zTT5LsCDiwupkPNGWrjjDaQfbppzvMAFS97uq3iw88uXHYxwivNAutSR",
  "key25": "3MibQ2nAKCdUCdiS86jjCUtLqKDTdM7VAUtpHonsJFYfwzJEpsf6776kjH4pW47T9gUvbDday4xZrnATBvc11PBG",
  "key26": "2uCn1pWZkNpihiBaY2yzzNq3JdPcKA8gYbqEcw7ptRGiv25xv4ZfXuUWSex1d1hwwhkfSWuscLMgBa7w5TPXqoqS",
  "key27": "2BQm4xox2uzobLJC32xZ1ktd8pG3BittNyKnZg9EHvFd2Uni9CjicvrHQALPYp86KKJGgjko7kmUkf8u6oLv8exe",
  "key28": "3R6oG1AqCmxAzyUiKML4MGSuikSTC3mCobtdSQtvpxDfqXyWpcT8fLvhbz67bFvu4YWmJTmDeJTAMaKW9rPP9gyr",
  "key29": "2f5aXXNu85iWs7rfT8qVyUL7K5RZUaDF1ZJVjWUkn5rhRFpNAe8ANUyd42WUX4RAoDqdmXL8py1MR1H3mZPZELWx",
  "key30": "3s3JyjcjtF281NsNXXejYp87TaTPLHA3swiCiW1fk3DPApm182kpRtyTSQUxGRzgtLarLhc2JvJtrdkq9tCTWdeT",
  "key31": "4Df51CVEgpGyqi2xjtJcxrQCg3wsKZXFMnzHEjA8RPrYxAcrvcZ294FRMjBoh3wdYAssHNoEB8R2CJqvYicwJi4k",
  "key32": "4uQm51JCeVQuMFquokzKSGLUgpqaCE8oZFGtLTgKspxS14SgXmD9JipMVoKHFmC34EtvFGE8prJhernTUQ6nAYTd",
  "key33": "FgRCS6aD9RH2TWBN2Dgev7PujatN2XoRFSZ6MNJwRoaNKCnN4wBWbFHz5FgpFTz8UNfatWX5KXtf2KzYh8rphVL",
  "key34": "5acTJ1Jhxy4YPDuHRohchSBvUoYrdryD3Rh1x1tdQBHeHHMA4Xk5TxWwhJoBdZGG9dBknJh5wLN5aM1WxYDAQZSG",
  "key35": "3LNVutv9Lf14TFNkNG55oEnVycWcwhdsV7CSSm71GtVihLZC2diNTh5LQejXZ27JvXiv9ijuywAQ8DMWbFbkfWZG",
  "key36": "45QMmKqEaSjRGfbJT78PjhGjRdG6H5VZ9XC9GS1ygiLNECzFUWaKqr5DsWDkHyZohF4eYNoDZyjZpspNhQ6eEF4n"
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
