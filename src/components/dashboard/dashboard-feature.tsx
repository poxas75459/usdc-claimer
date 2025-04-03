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
    "49Q43dAHKhJvxF3343pUWZPEpn1ejGpNJy6K43hjryRZVaQQGEibd5wJV4UUgxgGe8X8GmXQQPpF77rDoay5rZCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JzgxwaFakwrctCjCTWPm4nJtY2yEw5vzg4eCocfzf97EZEUGh2p75WogLud5gwjSz76RB8XjCTueq6oCKFgd5Vj",
  "key1": "aeweaTnCoVZsJUnT1c8T5Pvb9o2wsAz5bgKiFa7Tm6tjdY8ezKQGJe6yqdS2AJzuBLwMidJocrnJERS95tpUgm3",
  "key2": "4JAityp43mLaRVWC2xvGgaYmGbA99C9U4uuMPnkwivHp44A8sFPHAhWZY352WRwNxgYKneA2heVAqy9A9DSFhAQP",
  "key3": "2Tu5VouTSPceqv3CWTHDoE5c3FwfTM2PVL7fFCrrBB9MiEFi5T9xXvbDSoN26yJnis3a5stoyNRhdo6kuE3EeY1E",
  "key4": "3EF3frKMjQd1Kg1dtqDos766n56aPMyVFbPtmA2hDW3jsZuJDBNWWxzHKFut3YS5VhmR3AFDkfjDuPWzYQimYRXn",
  "key5": "25PGLBgrweYgRUPFwi4fimPUSqNgaApSe9W4Fgx9McSnvPAwUBbiuZxcSVE7QS6ABCyjRGMrka5ZDVv4npfRtaKi",
  "key6": "4UuWB8oiseDZB6Ddnk6qrV2wrwGFXgvZ1it39T7igfWTsN8iojQekwJJ3XwRWDfWVacRWPrRnASgUf3V9M2eYif7",
  "key7": "4TNTdP1KgpCMdEoRnzR6pNU3bp6SHg9rGYBUvjDyu83QT6Ffq8m1Lq8ApKBMQwtvkvsjUfwwwkAffTiLunFZaoDr",
  "key8": "3h3VefwDqTXHVXugnZifdfunHPP67cdS9fbJhNzm5c9TMnHVMStuZdbaJJ5cAXcX4GpeoQb4CccxntecoFHEAoCB",
  "key9": "63gyTJaZ4kTbufZCXuaZUhoX3So9D8QSVihjxkBUmuU8B3mZYwUKj8tqfMBXk5biPdNZXq1ZuAnWaFDdR8mE6QX8",
  "key10": "5kytVZTjywez81VMZbp4vi3jigtGNq2V23bYdEjbMRJQ8VuCUM6pDh8gJd8iBX3unX3nUzUds2oi8RyheJwZ9YFh",
  "key11": "64r4KSXJZuBDKJSsUHGzo9jTT7c6TiUVPY79yY7ac6q2N69RntTwrGE8eHeH1phRhq8CFb4pSfLbZTiktH1CwVoJ",
  "key12": "2zU6Y4WdKui6EMZLm3v4CXV6etnvzhaGrRSfazB3N9z9mBiDbsKhn2QWLaYgLwraLckCJHDB7MdBMW34QTyipiyx",
  "key13": "3LdeBzs3aFkN2N4Xz19dCBzwWwhj5jq9q9BVEcvcbPzZAwtsLbLBowRMCpEBCPYMHVzkQ1MAsetB4NajP9kKoyfN",
  "key14": "y98kaxzgvU3UL9R9P5e7N43Fq2JzRH9KA8rsXzG4LD61e7nAaAQpi1oxWz5edFCGxt4WME7ufypiLZAaCC3e1v1",
  "key15": "3hf6sqaAcLswKdRs8JKcwgq5iv6t31SPS4stHDUocbnpPw7gzGgvyRx5fNVWLEFu1PWRyGKCXF7MVBB2hsVehhLo",
  "key16": "4vuBHn3pvRrHYoau7k6CpBPcgHLZ1iwkYEw9AjZddxpRHBn6pf6vKt686QsZ5BqA4GFJRW8qEtUmkKCkwBZfWxy9",
  "key17": "4PNgHn3QtrRZ9G8d3RSmbGMQLZUm2VjLZPBDMZNd3Sffjf8orfBYbDr1CVyRugJ3oB9uAYw1rNtVLoCmspLDwW91",
  "key18": "2BgXzibM7gEi49fLRypHYxJVn1oDV7mYyfS9eEGASfauT6DJc9GN5vS75BFua9CE4mostmfrPSXpBAnAJmxHUfTM",
  "key19": "3GuZ4xDEfQvY3Hk7ZEV8BRnqiJwnNgtMxN8SfckQWpbNQyAyZVqYuExMCbVzazWj13Meuwnnf2FuCe7EgbgZCP1J",
  "key20": "qzxL3woDGxSQAKxpYJRCuKuYYvJtEE3bg1uvfA1RQ45XnkN6nRNMxrmznHL8k4oRp8sDNr2rqsJvArEfxEKSr7T",
  "key21": "4gK7sWWp74sfAVfHpeqL5avfRmg6rbRUfzK2WRTY85WFaJzP5RA9ozkGiScBSJbfrCZYQT7MUyjJaEbioMDBcAYQ",
  "key22": "2xpTp7eSeF2MjHUbeYmztQ86TnUu9jv3YyeyehkW1yDPNzGDFmRT3ZC6a9W28vhKCaxyhhoLHwW1Ng3muEXWjw36",
  "key23": "263Nx28h6mqqs9BmTuZK6eeFjPGmV1CMbdCkHMKTFtM1mZUNFR2wUBo3mMK3X34uyqV7JMaRz5sVXw5BrjHhDtob",
  "key24": "4X51DbeC9kMyAjtCRreh3H3wD4kPWXHZjBBjKQCMmbqwP4yH9uVYuomPWKgafdE26e7oeCNW8vBhKDMcANoFJGFf",
  "key25": "5CzQYkxxFELiFpsyt5gAnb4HC8mNdDv1PhCrL8eybfzfoNTSwa6uyU7KppV2w6yCWxYVMCpJsZNErukDQUGCguzU",
  "key26": "5Zf3jHZ9hoDPdqsR91xQv62bwAHZuwXsekNw27MUKxv8hcgUn1HQ8kDc5GZvBnLLMVRj4xXL65sufkBLzhaakcWp",
  "key27": "3um3RSJ5jtQ8fZ8MJ8bXegPvXSTLCJpxQpzBkN7j6CzMkC4YLR9KEfbQzfG11bzZVL91vGwmHBHfkBSAsygyoaP1",
  "key28": "jQbmrETTGGSAEsfuirgmg1KL7HvET3R2DnDXGunrL9K1DTYAXpEUdWbCrgohpcUzFbmJhM89fBjC9Sc1nQtLxzj",
  "key29": "2xu6vdscRc26i1oPA3Cjk4okuWc9wJEyoZiFQ4vWiQmqeR5uo6j9FAH1Y2tUuB6rHuihzSBFV9pXGp5GHV7suPY9",
  "key30": "67YL1vcUTFvWzWvSov7aYHKQQV35jYFQM7pb2ETnGobc1rndpaSPiiQ9adykSmJn7jskVdaduSUUowA7dZXcScZz",
  "key31": "5dwqFCyuCMAyHwTZ6fMAGwaibcMo9vVod7Azirx548Hy5QShLwptT3SCdnxbYk4A2uhe2cy4wVMgMwx4mRF2wz6i",
  "key32": "34D2eDWxyRbKw8uo6N1seun9j6LwRf2i3rxY4vcDmL1t8CG2N2jVLoJrtoubEZNm3i6MHYR7Lf8ypYrpikjaz1s6",
  "key33": "33LUz3xFp5tpYXQQMtSEEG2uqqcCFoqeYmKpRSiDUB5yoa2mAUoNZyywMg9yJ1tavzL5HtmnTdXcRpPyunY1hBhf",
  "key34": "5NrWN6hxfLjPGAfnwetmCMi9pvZxnPxQwrw8u92vrrArRH9dG9j5BLLfLE5XB5iqBVRpzijjcuAXb7ndMo63QtXF",
  "key35": "4DtcN7aqSE4xHTEfwX8eDuDsk22g7YKp5n1m2QwuHnqE5KTqUwhXu5qWMc1qa7ZSze7Fg8zqsLtHiJxG9vPp5bN",
  "key36": "vRyfpfKzC8JbotRs7tSmqzG4ACdZEyjwGdbR33zNQ6RMmkRsizzQLzQazeyBWJsq3q58KXyMApLrNJ2fUkRtzzW",
  "key37": "34buox3hyf7W9UDccPtEWr7KmAVEQVNu1ZMKJe9ZaKWz6fE6e3PdUQ82z3E3HKELyefMHo3BAVbeNqhActKQmdan",
  "key38": "3zsXrMRU6kpk3CLuQ6FgzD6SwNU1k1qwrLtNGatLkvngPv86AS5AiXBdjKAZ2Z9GpsDvNrfDXHHt7PGqPZVCRYvt",
  "key39": "U6aqQKZouxQzkSPnyeZqXvgQHbAFMsQqqLb2KzgXBuaspvNdCy3xQscx3WH9rxaqRvsZcqdDVHFFfkrpkwU6HGa",
  "key40": "KG4chmVsN5AL8xn5G7cmkob9N8qEhzNuhfessBzBNqksYqN5wqvBewKTvnWzPvx7161Bx3yA5ifrj8FE2pmBPVM",
  "key41": "6d8rcVmC17j61wcba4bZi89Ep3FkJ3vjoL241Afd2V4aDSPCdfQR3ncmqxt8LNwNzjBYGjdc2y8J3ifnJwde7TJ",
  "key42": "3onYY5BkJqSLtQFhPsryVFZnoPxy9Lf6tyyb2X3mY1hmTozpxHcwGKwiYopYvvjpJU7katLNKtodpZx5PPZJnNLm",
  "key43": "5cop7bTQuvN2iD51FZYxu5zWfdjJbKksWgEUX5ZR8zzCrLWXaA2a7NxV7k8ZkXr5JE2be6zjKyZd3cyafwhDB2ps",
  "key44": "XvZRn4oZ4GqoBramUFiRQRKF7RPhYMjGnjz1MbwHYkBP7TQdB3p3vCAW6co9kArkSiaBU7MJHrTEvfKu4F5CqoK",
  "key45": "5YqsiksRC4cs9TZvrCgVaGbPuCQPHGCS5YQ9b7jmADHPE3JBn7fM8Hwrrwrzz8yDwcWrBkkzBGTdWZsyyQytvjxt"
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
