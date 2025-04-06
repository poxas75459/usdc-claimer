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
    "4SrmvzSycxZu5Sx4HKGaQxYJs78YGA39B8rdGAepgYghBtuWSJknAS3QoS4qdFHsk2cSDVVN1vMQmENBcescBbCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lvm9thGyXucgQArRRhMnttmDdjjfiHvjnS142MckgGiEe6dM29QVhvL1dbXFaYr1hEAZbsbfSfZDBzuTPxUsgJU",
  "key1": "35eQ6W7LdAmQ1W3kiWd71gMQat33uR4M3SJMEf5aAZ6aLahG1rSs69CrJ1onkQfUnphM9MAQY9EwQJ4uFQ3XpRXb",
  "key2": "3aC6uwzG4XS7byjarXjXEqb6kwpMVHxbGZXUzWMUnURbCohuD7WFZqUt694DVjJ1wpiaaM5bspBCytRVUgbgDETB",
  "key3": "45aCLKEgsKGfwEWE8YB3TWNKraxW8GcwzPo4CwyCVDhJn5Jbg8i4WM2rSw3MKT1ZyvsuwLC8MPQvXzisVjVdJmG1",
  "key4": "29zgirBZvvcemptPfYi5DEsuwZcDi5f9odxP4msCipEALfuoUfLfS7ZBGuVndPdET3pKzDtuWNhgBjeE8ob9xTn1",
  "key5": "2zU2PLtdMVNTBLrS4VWN5bd3jQx2AZxPWZD3cBmFKo1mP3CSNteGXiSFnKPmvyypVRCHy3VUJWzhVhGfDd4CZfha",
  "key6": "3FYaCQhxNvHHEGywe9jASsGPmZ6iGWnFV6wSccoUFVFXiDRqWPPobkuKoocjtoewV8UePE8qCGec99ShFNtrXNHM",
  "key7": "kKUzAppArB5jDGo8AHQnGWBszyFCa95myAYQdRvNQEpqTTm4ZGTPj5HuJWBT4GsXseemLkGa971qr9zguuT7Wyu",
  "key8": "2LeCpVvv8iDmWE2R42gpXainbRQXkLrgzFgLqL3qWHUhqjh18hycYBEaEZ8wkEbmJQnR5gF6dWHSVGHH3nXWCK87",
  "key9": "4Hgxbh7AufvapVpMPh73nZpxGoL9fc2nJQ8YxV5zc2kNoDuL6svuZeq3HXqo1UQ8zsAyeQfdNfXrCibxxDdF6Z8q",
  "key10": "5aHqUUd17XaPFVgPxN5vJsjhkPAZk5BiRbuUEDudxb2ZNyuk8z4qMNzFv3SgDcNvkheapqCdgwEFbWvacrDGVyoj",
  "key11": "3Na2rgiiiNTy1qoTm9XTwnKBE7KXLQaV8yjaW8xBcqtzToNpND3y4HDmFm73EmwakEcEDCxSe5Dw6vvvMukML9gG",
  "key12": "46pM28g4DWWUmDqpcH23Zw1nEK1fQDGXwgsa7Jp7ThVJbYnfntJPLpoF9d4rKqMn2WHzaLAyXLS2P4UgtyEho9Xg",
  "key13": "32uVqqaoX6hfYM8qxMjq6AHdVDbKsXHtKj88HfTApgh2zhzdQPbJakinAJhpESBttVv3WJu2BFk2o6ByY2yuw82z",
  "key14": "5AfnaSDzQPucUUteu8abKc7jcWN5GSXnDphQwwcZrRVPVY6zpXWmGR3BELydhLTmYciXQKSbLajkdVrY3dhU14U",
  "key15": "45boNRQP83AtxMz4Tmk2ekyN5chH1eNDWnZZDf34gYzbZY2Yte4b1NV7vGg9x5gxEWSsn2U1cPkcXAvNJXhLAQFJ",
  "key16": "3uasXxNdfDTHcw4oHK5fFJ5MJcViFrnDkCs6tDBQ7h9b9kgwp9Hay1uxcCdUPvhZ8Fcpi15prfPphLxkBzovmn2d",
  "key17": "QJKur82W2map5umtkUqryio5t5ugja3ywqqmj9VXCcWWJyW9q6vmjnzWSRn4PA94J4UvTSCE3zjVcxWwFz2pTMb",
  "key18": "3YrFAbNGAZ2gEyjX821WuWYp66G91kXMiWocfq6DgEt96Rottyov4Q6C6XqQgH1aK6gHrkiB2yfk7EwVtczA3Wb5",
  "key19": "2swMFay6fKsRSzzBn8yPCN1ddJNbcetmwpbqo9zW15NSXWWDZ5sPs9nYCxF8EF7NK6MUuCNDssiSBqHgQdgohkXT",
  "key20": "5WMtHVmHUvwfdNT7ssDMUTCpjobyPto2gD5b2uTEtuCFc7pNdF9Rc1DJP59xVVA7yEfYXjnBvfVVL5eaPcivr4CT",
  "key21": "3HtcA6WLm964pJtaM3AmYSFqBjWuhXj9Yw4WDu7d4tTCRSV44c9GdMkocFdfeCmYhrZSafUdNUJvTw2LvLRr8Djc",
  "key22": "sSpzdVMNCDndioDj7xy9b1JoLZjWn6HjKhDUqt66Z9EEFsr7wBoGo6NWv74AoyB6Qgr6PmsWq25X5j7xuGDxXMc",
  "key23": "37YWmY2wFB1gy18hQy8ExQHuj6ep2Up8NjFnc1y8hem1hCmJd7HzJYiehFgJzTBYpTzN7KjRkJ2qbE96qwY8GoSz",
  "key24": "3V7vMkoo3bQ9PRYuxmxdHms4pQfJb58s8xyVudLW4LWb2ThU99hFmsXkgernSGPYXMqwfHs5GC3FhtQfagvwA7Rr",
  "key25": "5NcvpsTiPyCr89XjpjzcrnWvFKpsqvq3YinbxGFuSxYEHwPEidhi6Lv7wRXJejytYHWhtYVYh7tNtrFTy32ADWC4",
  "key26": "Hq23xCkWhBmBpBVq86yLyVdmgHS3CS8J2uKnvxbUqza776xWRCGDqHgf3hmJTukaw43McSWYKMa9KTr5SsuhGZq",
  "key27": "5GDgN5CCDjTwpJFd5H5bC3M5RdewSb1KLtHEKPHgEMzSazNnxiQnH8ndW6zdtd9dRN3fJR24g6N8yBEhF74g8bjd",
  "key28": "4vmgoQp5urAeEJeCpUK417Yr8XuvwqSbeGFNjGBNzuP4ZiHkAESVhgUJBuwLBWVDvX6J7hyuMwLQBLgxGMugJR9m",
  "key29": "3pZPEi72LqDECWzwfmc2uGdhhUAL3HZaGKD2w1h8iYDLD5fh4sefj68DScqbpJSwEFn2RMs2hMy9Z2arNLHQPHT6",
  "key30": "3w1iRgBddijNNMpxJC6VswGCn3obJT1goi5yEcws94sx2oYrKqrEXrP8X5NXXoGq8i2ea2o6TS3WJzFMGDZ4mjEH",
  "key31": "2XADmgKmy9toNNYR8Ez2YTgy8gsR9uLKVvj2f2GEcfwTbAwZ7jwfaTYPDWvwZ8vb9wGzyyfcphdCCS3Q9mcF3Jzh",
  "key32": "3y5TtquSxdkvmA6sSEYxxKg11vPGqyU3VTX4gF1Gsiz3c4WjKKfkWtUvZDvuNzSEcyxfV9Eb5yZkq8Sy6KrguYs9",
  "key33": "2QHF2RxX4AbqaQHaxVXTWFFw77qr6wckoKwhNQLSNx2yKXKorYJ1vok9jjvhveeetnAz7eR2FftNXp7DBXdyUJZK",
  "key34": "67eFGo8QjioWibyhv5Z68ZEdCLiUhgEXLoAjZuxUuPjjCnEw9Rdnr6b44zYv86fRdq9VqfYgdpNEf1YDuHMY1f8m",
  "key35": "YdnxUzQEiiyb9nhCizhuAJyTPwc3QCFrgN9iFwzLYH2uyvUN1VZNXLceoxDh87KRx6zyfVZrbUeKwuPZtqmd314",
  "key36": "5KrvXxPVuWgmMEnn4hp8hNGSAN9JtSfFeccZ8PcP9AAaSXg94WF97scxjYCSpV4M7TGaVHVQEYNsxaKunzWr4a9d",
  "key37": "5dKdN1AVTga6AH1mLi9aWYMf35DwRoL6ke6jNvHNdPZ8pQAoEFKxYJs1kZxwGzptmstNLMqs2RLqqvYVUGBFAqSA",
  "key38": "5RDL4krxMD4sYkvkemduv8hKPABkMhAZY2ZJZoZbKXwLjVqX8CH9JzXEQJnxi4ffzGtYkmGaxtFWCrskmvx6GSxP",
  "key39": "X5k9Ctn62onyar3YYLYom4HFqVvCN5pHARttvp6yZgrbsjC81g6Ud8oiMPfqdxLJ9Mqe1J65HDv9EeYykTJgGxt",
  "key40": "24x7LgmKw2rexkFsLW3nGF3QEUiPcvfAgmNp8KT6scVJDSbrVxzd9shMFeerPGqP2JCueGUiCF4eUzc54BKfwKoJ",
  "key41": "tMowLmbyDhmfPhBSN1nQNLXnbCxccpUPCwwTRC3yCFBRmLZDpQsuqd12gaJ19EPQi7eUrkeFVHTCiz6UU6Fj1aU",
  "key42": "3QnWHo7hAfdJbuBtmkH3gGNVLp2ozEnqviVhCERtSsW56ScDPn7xSwLXiTdthXBCWacEM7a1AjkFz4jLxBTEv9q",
  "key43": "4aAK8oRq25C69dryN2hgQ5oBFB1wxgvxr8vdsqwoW7mANYz574GowLpjuRcmmMmkDAvAz99SdMHRQpbrrinGCGo1",
  "key44": "2ynmSazCfB4QrheUCeTeWTjVcokwyEJz2PYtQiNfpfxSgfpALmDkRZMDQoP95gtiT3U3QtGpYpKp8AiRe33PRgdW",
  "key45": "4d5t692wvyx7VBf63xKe64PDPsMopV3nk3CT979Xsxe3pLqLgM85sYSoxukjXeWk8Gqjk36yHkFnmsH1Zs4qM1eo"
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
