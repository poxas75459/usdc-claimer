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
    "3pwQPR5bLnB3j9pzRJhhZVScBymdotjnsgk1ombwM4atuofy4pnBwNRoK432C3PphWSkCevS1aeDgwCBrc95mRhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mW9red7XhXhZMdjmNUqmH45AaXX52S5Bu6cXUiQqS43smpr8eYw5ojG2kPqWH2d64s42goFR4qY6oWiFjC9ieBT",
  "key1": "4e6KfgqxKrbP8EkjYP2rH4BYoGGLiUhoKb7EAhnksmWSBowxngvmR1zbCXWwvw9i5fJkNijicsNBs7okpx3j9nX5",
  "key2": "3G6yM4Xsk5WYm2UUQVZHFpLYgHps8CURFp6yJx4gryuEd8LpYz5oGfXmKM57Gxf4gyxjUAuqBcnYV4mPXmPq5tPa",
  "key3": "3L93EJK3HpR6vNWfPWs2MLgzJ4aDsfJCfnroTSyLXcpYxQeqAn8UYZ4ndPtrGvvzTaEYXi83QMbgZDg2578f88X9",
  "key4": "2qn5Z3y63jivoC2ojtJiXDYJPaFeLMVVzmAJPNNPV86L84PV4ZYMQiP7SXG2vXAkqRWwgdz1ZdmHtXyGqGvqfa4o",
  "key5": "2cyygoKzmDF1hWhKK6kSGEbPZECy3ppoAQBUprY6L82oeYPhJT1YPnXTHFTWuJeb1JztLWYgW2zNLU86pwpf2Tmb",
  "key6": "5FdG95LiGwK25CXXJ6RzwsS8913zNVN27SzuhjHsjE6eg3GtdtS1sRyhHTN78cicSKNkhf2mrcEJLNxKZ3ow6rHU",
  "key7": "4xbFyBpUkTVU3Dz6my4x7hB1hqVij8x7XBW42urb6YM6ByxVWMhe8sKZzDim8DgHhTs8kXWKFhEPHvXtzcBw2qmZ",
  "key8": "5e4YQJJECFXffkzZsxPsceNn5DPdvEYBTxaZQ3AGCNsqGjKwpjPAv7BA8hGrTogazkJC9i52Mx2PA7UhkNeroNbs",
  "key9": "44ax6F4zB7PXC2gbdseTjm1w6p8eef5Wa8E53egaFFtJe8hgg7wSXc31GfuHqLY5LXb8xH5K9pFGnEbWKZdbbrqo",
  "key10": "2UCqiafgUZQn1c1RFKVzvh8w6UWL6XxkXBfUd89BvhTMWJjnjeztYygfKgVbdDSWat9kNrJw964dAqUWxfoBmqt3",
  "key11": "mSNgPQSoccTTo5bEq3jQ7wxSkbV4d1Fuq5t8Ay3BKXhPFafqQSfcETQ8QLZF8jYJsyGHQF7pKUasPW5PuxkfQoD",
  "key12": "37GVnBYkNFJgFturH2JsjPQ4Gem7cuSSkSC6KdiateX4MHuUBrSoHns64DRh6efp8teanjiAdtrRTpsyjbvdEof6",
  "key13": "4n7buG9npTcyMgXAM22uYwkc2zQre2Vhi2mjq7toQphcJGr5FrxYqGr5DeCeLJKsb6Amu6ZUtmP4rKbXVNyPzwmf",
  "key14": "5hsAEJ6zuERiahxgKzF7Q5uirmZi3mjmLFk3kC3h3Bveproz29DiHA1Y7ZAiN2n5XAJGdxj1SsK1X4XMZmeG6dk6",
  "key15": "JoYLj72ZrX77gzYx29yqS3BKaHnwzbhJUD1NjXMeXqDKUjz92H5sybxSuvXyQgpMShrLZQDvEXsyCv4Wcsf1e9W",
  "key16": "29Hqpo7osFVcU5wE5gwTd6UE4aU4UpJciHC32bBjYg9gDUHU1kLuSUGqRezni9h9ctd5WYe9fgwToSwMV6UUNQb6",
  "key17": "ziURR8BP6zi8BgeSAm2HfjQx64sNvjvf5vvCsezvhzCuqWu7eYNmYqNjUUX9kJd3XdnVLPYvkGtH84UcU7F24hF",
  "key18": "MvWpT8Qx1uUQmaGfiNMQpEffqGYJuAnRB9hLXgcdiuMQ72frTzitkF2b89LCXB3DZrwkjYM8Lh3gMgsLYtGpCRS",
  "key19": "5kRCvxBqTwV8veLq2bMW8PjGk76ouw5Tw6494piqMzsfjrx8KRuAByt4AYMXcWwogLoWyjwwCLN2aYoGXU1MZkyE",
  "key20": "63e6YUUVtNSS179uMN8f9JJqYW8iQp8ZwutLBkSDuob3qKEpHuntv6bcpX8qLoRHhgBHu5QFd2dtfokJ2S7ktPR5",
  "key21": "5c4mytM6A6ZxzxctoPAqixKmcyr8Tz6TGQ4q2wgFh91kztHos2qVw43dh2X6Qaxstzb3zVce4jehUnmbmXvPRCQA",
  "key22": "3iTHwPY11v9aehKLD81uZd6Y32j8DtNqxyWjJfDga8LnBGXbiEUcXtcPe9QbV4zAoWqCrXEtVAXzkno8V5EzikzM",
  "key23": "3Vi7uC2bahFDVixcMgmNb5cggAj9R6iJ3xL5vrTte7i2ft8SswQ7WuQczyFyjMcaNpaRGdfjSUr8QcY7CiFKhWNj",
  "key24": "3gq98KhG6FiuVSYWPQi9oUEaf3QtWTcd2eHL7NbkqCfgzfc5Ny8Qy7rSstiDLc2UfUb21ponBWUbP7mKjWcGC4SN",
  "key25": "4ycjuPnYHZ4z4hcRfiCBPKBM5NbLgFhcpznirTUffFJBcK6GKaLfAWkGCE6FhuyRABpShmF8TbtE3DgTQGon6cmz",
  "key26": "tp9x4jHJtnaBAgvsRXFvomiYCQr5gcvAArgrG7VonzphXvbuHNaetEpC4suSk2FjSt6od9yGYNtZ8UyoQJvNfKA",
  "key27": "3SGrU6sBr9ySGPwu4QX2GTyj77GWBpnbtdNv1ogR1EAV6JXiTw2R5ByMfuL3cPMD1GV8EGgAUZLxfM37SWa7QJyN",
  "key28": "3EiTrNQ1auanzS6SJeC8xV9kMnyvFFH2FKYeV2Pmq8dTCykmZfhqgvSmiZJc1JV1AL1FfYuZwwYMS2KNSUZbnJhA",
  "key29": "dv1jNQ3xYEbP9Pok2m1e4f2VmqEkNtyYWJ4xEss5UuxWDxtC4TkBWxMH7ShmTU1NgXHxiKRRQ3GpXeoDZv2N3TT",
  "key30": "XAhYhWnP8hw6G2whudZuS1qymNQXt3QujhMpUJgicAiYKXB9ThwvRDkpSt6AwHefZTNFdxTWTSg25mY9uJF8pZ7",
  "key31": "5GZLUBK5Zpz7Cr5Jf88npUGuTiYNKvBQgdPmLidwDbA1W1xfkZ5DbSUaWwhAS7UMiEfY3PnWoiMp8Up322NJZ5RQ",
  "key32": "2nkkpPFnaLWrVU8StT9rXMDQwoRdQ7JoHqWm3MaMk9RpiqNJzVw3YwbjD2GLQTJJfMzjyRSdhqU8wXE3DMqTxjSD",
  "key33": "4AurbCzskjVBWCdbNPZ97Np3DhPDfTPcizbGT36u3urdSB96GzNKzhcaGKndDnfEjvZhjaaSvPjn4TVbXWYBDnMi",
  "key34": "4M1aN2rvZr5vesPJXUUdji8esMQdTEWuXSSTJU2jaPY4cYRBrdNgmh96t7mC3nZyX7MZ6eNM1Ngh2sG8szG2rQVD",
  "key35": "n54rszAV8Pg2xggshY2fWVdhFpsDqu7V7jFTP3x3BYgrDQzc6Ehgi1qNn2kDosUSpVW3E37LSHJmagLCd3462df",
  "key36": "5y2Nr7U5XjtMRaEnJ6zpdNP9vg16awkgjZv4TQeC4EfqBdxoWS18WwCDdAUEH2smpMeSBVuSrsUFBVS1tSLUL738",
  "key37": "4dvmVjHpMvcW5JLdHAtwzhqS16svX3qiPRrzZ4CgQmbdJMqK3VewKNj6Q4RhPFLxLPzRcPq3ZzSX1K9J7q9jyGM7",
  "key38": "4GDgBiSUNxAYEztuSqwsJdedqjPrcE8iXFbtsUG6Q2EuN3anqmuCJMi8BqoUXrvb3U1uMaydTvwNxqnJGrot8npp",
  "key39": "4FTs6FVuJJQrHaZbxD6F4r2nc25NxnzQ9ck1sUdDYgHfZ7nomWUbYFo4kyhN3oar8CCsCAMzGPseGgvd9LqyMkSm",
  "key40": "4BwH8AiqdpViLt4HwxAbp9pHMd6DNn9vu5RoSkNcycx12f7UmXe6GraHgDC5qMmjfTaGgb6CRG4AnQBaCPG2YDaR",
  "key41": "28BELU5dMbSGpFr58j7NdZHjYHNuwftYFx5rqZ8RMqLxMp6AwxsraCi5a9gXz2LbU8VLxiAf7AzHT7CHrSCdFrxq"
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
