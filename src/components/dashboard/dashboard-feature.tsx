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
    "viAUBL5uoBpFCMX1upsYv12usgqSxE8QT71YueVoDgmeG7NEnVvzUSF7MTTsA4MddaWSRiUgx4BZJR3aXqrdT5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cs7tVE2pYSDcx4twqezfbdGwma5zG7KvsVmyrgrTZxi9MZZmB89P9L8onTv7vgSa4uoHX7aHgQB2Vu1rxw9Qoar",
  "key1": "2SsFcmMqS3cmNuPmLjqwQcCkcmcsgqu3AtmsBmQrLQLbKYfsLXdEMbQ2568N7m6MJ92vtVJ47VgGSzG7Ej1VCiLY",
  "key2": "2wP7hDwtWL9gS3zPwuniyJrgXiQ8KgLzn8BKA3W9yvAYQTebfZ2rxqFwsQ5xwgreqrbJMqdfU3JW93wHpwFsnyXj",
  "key3": "LuNJb5iYBE9iQJ9Ynu5oz21JsSwx7fy9qUj3z8nVqw6eh87aeVGxJGEs9fwvuajhQ4eYx3G86RyBoy7Xkvz8xvJ",
  "key4": "9MgXzCi2YLnWaykABG3p5fxPCenpCFrVFaDaefvi7LEJrxWhM4TtZteCu734VPqKww3XGvUMfPs9P426Trdkny6",
  "key5": "8g969jSwUH1ydUQ5KjwhgpQbhjDJr1tvSPSjufB5M6BowYqGvYFboUGMss5orPWQVPwa5vn6ocD4d7cipbvbi3K",
  "key6": "5Z9bEYrK4hE5edZBj6aRnL997pkeHhFXuEqEihkzU3h699VZP1wEpyVrctb2Qy7M7UEG5QFKwx5jNkSUxezTEVjs",
  "key7": "4EQj2Kv6AvDrCkts9pzobEy4SaiYp3BUBH2RHTTjPxbdiQCLaEAkGQuyo4rTiFuUx596FxHk5GiPBvBqwuKQs6oK",
  "key8": "3vNu6zMo6EWiQ3yooJXmrSNTZhJvbxCGop875wRGxyEkCNBGWQxAv6nkKBv9sjkGwuEGYibRHmucAjqDdarYybE5",
  "key9": "5oUAcB95wWR2SpQEC5RTYHnaySPdEtK8SzbdGp6BbfYNUoqRd9qQnXJSPRfvBg5x38z8kYSudxBAefd9FUfd25Cm",
  "key10": "43vCgJYKSDqqWmC7ojDvmB59Q1rKLphpWbppY2aKzz17U936SktD9QZ67mkGdEtn3vk9xdcUgBAyPju4iqripVzD",
  "key11": "2qAR5Aq9uSgRwbxmgu1PWNCXKd7TqBEmZgbautqw9mk6oFYyf7rxunPCqBYG7BF2mxvmoUJXhHRK73zWHDzjeHNt",
  "key12": "3fMu73NvRxzSeybFz2HvJRJ3Be9p9hRJcLTxhGxkJzJcyutmN6UvUnrQ545A194AAgGwBgYUpWYAqFTZRSY9g6Eo",
  "key13": "2c7bLJ83kzqACDBNXXZaRy86f6TydUXKRKgCcqTq8okreRmXVGzEC3UrZPVY2kEW4ejDWmjMPx6fH4jc9gS7sLsS",
  "key14": "5QVXaGxp4u7aJuDovCsDcAuPGMXAseS3BemobCL6cVxZG43EiyGW6Lv46aK9nbXW3xWHnQ1FBWVAzHT5iUDLMDC",
  "key15": "5hYaY44jgN9WsTkWsHaLKwj9cUfkWpYQ7jxfsSnXHY9nMmiHcfZLrSwUFFrr5fFAm4D6vEpCWsQVyiNBYLT8FF8q",
  "key16": "2g7Tfrm2W5yEQiHs2wTZSYee4LwQcHAxhbdkuBZ7ATyUUmp7aRfSTEke1x7pqt2UJLeU8wbPSreUsAAd7nJV6vQ1",
  "key17": "5Y3Dt6KkMHk1yZofmcf9GHxEcc9iMvxXBLJ1sufgfBSFFLVoFjNsWA2inKFj1ryeoM7aA58j2bteLGjoBaMReCR2",
  "key18": "34LXiuncaWLfgsPEuZn3xtCgSyyJuPnbdyVgQmqSqPF2RHhEtnfUMDpQ8SrpfCKFr3LUBJFNtsZPr8hVPxpfhDFT",
  "key19": "2bUPJNG91KQMrjH1QNg4uEMPgUaqwJGuFdTwMB77ZjRMQKWciCAaPjHDXWdrDynQfPwVzpq1taD5ML1Qx2H1orQM",
  "key20": "2wQtNHC1CtvxC9wL14gchT2FhBJQR4hQsZm7J18kiCR5vndsxeXYiUqxS7nT7wyxNbTLoa1FnKqWWGzbhSoojDFy",
  "key21": "388fSHhBxMPoP2SdFFRAhHSLpCzcMQh9igcP5gmTLHbcevnsPs3bBN9K13LtdBGR27KsxyNFgtu7H6Xh7APHAob2",
  "key22": "5XCnhed9oT93rPqG5Q3kghLonGYX4ZFu6WgNCu1EoUaM5HUsob6LNZ5RYWzxGH1G6yuxtW43VtAF2i5J5MLPM6Gp",
  "key23": "5gWqryazG5MgF8wZ6YkECYLEBWbR6G5AvN9ab3nneib7WF17Ev6jeqe8txbT3apw2SEFffAn56UWHhS2ojnko86g",
  "key24": "xqsJ2qZsDux19dTCsW8EqsSzgb1vxcagnsLisxgBSCNuRW62F1xqScewQgLsvjHwHtN1ssoKtyTpsDAkSzV4gqv",
  "key25": "43CjSXLt5n46aPf3m5dwAbKEcji5V5KfqZs1qRoi8bq6m3r93ZJJ3dF7gwpRRbewfyd42fT8jS59FqCFZRSGkzJS",
  "key26": "5W4QqkUg7Q4LTnTBBB9uF3BLmyqe6JVqCJD8mUUW7cWnreMPXKrGVnepM2mWVpE8EAcf4oyEzRh3McWeXhRXaMZM",
  "key27": "5RXhZ1c7ukrGtpZ9nkZRUeoUpEpRDGfVfvwsjpoXp4jWsi88GowrXCxjxEayDYYNPPMudnnwrKGbUQ8MKQk2SxEk",
  "key28": "4nthPmzCsxT6d2dZ3iEMqdNQQjUDXzosJsc6C9yhbDuMe6JRVhiNLZFXiiD15xAsf1Y7TtMmzooVDayxgdt6t8mH",
  "key29": "4booWkwoo7KnNSTpbdPTa2SZLVJM48i4CBh4ym6685wUBo5h3XrCgN5GPAubukzFmtE9Rd6oZu5ghuGLbdz75ufu",
  "key30": "3pL74oFvUfY5Av2RhUSuoNDvr6H6zUcLzFF2YvXEg2DjQuJnDTcoP364hoVLYejVJxP8sWUi6FJfNE4kt1pNNc7f",
  "key31": "54tE5ydqmcieq6ZPeJZAXCoiHdAKn7zH5wnunNa9rW2WRjYUrxRUwb7Yfv27CCThEsyW2W5VzefN73Xi39DVekZo",
  "key32": "mPEaC823kTw51hu7HtGHtw81z3nPsA5ZvVrY564Qcroama27S3itjV5krFDdtq567Yc7NMRUYdix6H5fa17oNL3",
  "key33": "3Rp2AhSf2kWdFPXfS831nDJbzj8PPj8fj5KkqR82TqddBbCG9QixnJhK1oNN813ZbTHHU8yUgt4bNvnL2Y8yEwo8",
  "key34": "3DZfgsrZ2bmoJXp3crGZKYb4dMmhY5fTnwCLBnuLeBTA7FvYfwN2Jo2eNNgbDzJJBzP5nDv3BxZH4UvzNdmxMJ9w",
  "key35": "4YbVwqixF7D415YqnSjaXZt5ShAZ6T9FFMpfYpdcTY6NA2bbHCyu4dX9UemBUFkGXPSsxPCzxth8BL45MSf5KhCg",
  "key36": "5YYSzdyFXipWoEdYyP5V3KbKJ4d5ZbYuREBVNC5hfaxC2ub8N7ELpupLLR4m4KbHLuPnrhKdWxhuiKpa19vvurmk",
  "key37": "2VH1spHgAPe91zKYk5hWHZ2BQzVdrEmLcgKWfRSthsdcbttWx9pnZdXp5oi4NGXf8L9DnTWeuDPWBhSF6EcUuZFU",
  "key38": "2NF9v9sm4pDDwypodteByqUWPDJvewiszjx7nwVKqn9LmhCcbshJ3VCNcWGAMRnQPYQyKfdJiPDbVPJbgi4biaS1",
  "key39": "39W41rJjuKp8Z5xkpSvsbTwrxwMhFrLQyAMk4qLsdhU3yfC8p8pHvxVaZYwmnJhStr8KYp8DgkqcxpZE5h6WACQX"
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
