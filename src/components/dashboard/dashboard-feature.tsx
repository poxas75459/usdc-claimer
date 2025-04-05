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
    "2dYPTY2U7Nh2JEKRNXeGhnrg5pBDNHKhbFPJNHMdaSfcZB6RHjWiiG5VyXtgY3XS6cS3a97BBMwFJqj5KStDgacg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21eReHReQVHGN17LyAFyUqWcjjne9HngedruxY3s65iTbp2uvCURssuRxECVXTSdvLvEzUVaZgiwmbsh25ss7bnD",
  "key1": "5fQAnUMSv2HCK3GP2JBzaSyzJMpBjweHfi96Nnxc2MwzmMEpfAhKi5v1TJYXaxc1jHoBv2QFPSuvgAQZDBtwcUCi",
  "key2": "4ZB8wyWzjsbxhbF5dEpv2kjGuqAnCkAA82fS32M4tscfoZ3k1rjBMdMSiA3MDFp3TKwTPGRaJgwK3K6rEUHZvkVg",
  "key3": "5QPxmcx5tFXT6EuhQm5Z1uwyXxy7Hisnewzp4b8zZTZb5mLDB7mtLFZzRfTw3xQaM9YsECxtrxLd5xdQ5F7fc6qz",
  "key4": "2TcLHiWvor4rbXnvYjQcCdPqwPzxkwwgaBqSWcMtyqpcY9LSWs3oNJtLTLK8GXgnDjf1jLSwUAZbycURxRZ2iAW6",
  "key5": "33HcRj6BzqsshnsHXHnvkYSb7kyZQuMyGyApbpvvuB9eGbkGUd2XLQr5LdLFoSExsofXi15cwQKFrt7rAe8eKZx7",
  "key6": "3pmpaVnxyBf6JqmVRVuFZhEC7NL6wz5JAromsRywDyVydvuTjEKiPfefL8KnydgtCZoqYHvBwFmaiL24W7reNkyD",
  "key7": "5EwHPTbzq854ecGyotLnH6gQoVvAJCQhKMJo9YSXXMkFxi9754heVumtgn1p2BMiJnUco16vD4KUsDz7UvfFXU7i",
  "key8": "3thz8VNuDR55bctF54EzGn1CS6ZvHkyGZ2ydtqACzbWzFjfqjew8Kf9MQredNC6E1k7N6jQ1VcT5eRkFhzZ6hSRe",
  "key9": "2GkPMrqtbNNeELMT3BwwZB6fdpcVh5o8jyEu8MvNDy7fhsayiFtMsZdQrUec6sgYwrmoo32uJd6frfTQr1rGMkXY",
  "key10": "2Sbfmoh5yers2cPbAWqTwGpjmXKUgUiiMyLheLo9fXCVP3WQEnrHEwPdZGeXqKDxVV9cW8Hf9skKdANsamd1cFZ",
  "key11": "4ns4zjJGJ2hqE8NinHpLRq8ft1rzdQYG4FpE1KikyXag8J4eMmu2VXGPRvFFTejptMqBXZFjtBRCqNkiJCeVpcxc",
  "key12": "4eX7NHj4BDTUjeYiDWQe7bfyeZzkDSKD8o995TkcWvWSu3SyRvbNcdrn6UzA4YR9JTnTmi6CjceZixomRykBtM4w",
  "key13": "a4mxjGsBzejgKUaQNqxzrxVouq5nPPcqBaKkDdsXYqGa2HRzR1nqwCZyi9bp2m22U4pa4DGUQUM1DpHbf8eh6Ws",
  "key14": "2PQqieVWEtydnwe32N5yBUjNyZMVVusQ99cV24QmQ6ibcgQoyDynAzV24HLXRsTnb39GDxuepGKfQQdkHbtf7Ak4",
  "key15": "3uwsE7ozgXMFmkj24ijXxVr2BaGrmNh8QWovPLZEKaJCfwUJdKJPZWXqqpBo8TnmciRQ8kL76C3eSbkNRNW8sNf3",
  "key16": "4cDrvp52SeZbKycr4dkDHLdMcrNHtPmTL5MHiTx51oVmotb8UiAZdLgrPX3CK6rupjSEQ6gkw98QPXhtEMsWGM7t",
  "key17": "3RqC9P3cXUejmepgGdjdfW63zHzeo5GtDThSK4iqpeMJRpgCopkB4tsxzYPEqj23GEPEoqCK4iSmSGAhTcwaP1vi",
  "key18": "5NixdeX1MNJne5R34JFd2HGB5qfcg6Y46JfXAyzCph6x8WpXhSTCYmX8a5r9yQPE6HEhrwqZYdJwgXcwBnmChDcX",
  "key19": "4jkWMFd3xCrhg75bjGEGbpYMTczL3sw3iNCpKHvoajY5E6VmEPz6DFTsj7szznArVbnC4fteQpvHPiYKgWMvLJjX",
  "key20": "3NrXHZLs4gM2ZhurbWXjWzFVwm2eAiCxnDDT2MMeDqbP8Yp4VBJadbYLNQVmFhC4o5oYPk7Cwm9nApozMEpHjVgw",
  "key21": "46jx8VCLA2JBtUBa4M5vvD72WrsDwqXWW9g3T3GRiuoHqmiLhw54CzKB6VjSP8FSRhrbXk4KYKDERi2KnTxnsaV6",
  "key22": "3FUSYnGUeRaijsnHg66Ra7wXCfaxD8gVChEnhCHU4F71ry5HqCBHyx9JXZhM5aFe85JvDJmVUvsJgxPj8Js7uDPW",
  "key23": "3CFQKBGMhZ92yvC83HTRqvpAEUuoXDYtom2RfTh3ZZxw87Cq9s6qFKSHFdZuyRCMydkdAdBCgF1eLr1ESHdQ5ZFG",
  "key24": "4dX6QYM1hXrdh9Srd36q4xqYhDjfKeVecesRijhshARUGgZz1U29k1b3PuKf5gnBERpjGQGKK77g52sMrdazXDT4",
  "key25": "3hyo2GFKNpPsfUVjDetG8zRBeMcEStN7q3hMce3JJsMFmLTxLXXTAH5wHuMjGyQsY86J48dNJdh9QNCFxCyFXTbM",
  "key26": "4bLheeHfAUmxrwSmRSiG8JG62tZCBXRWqCjbhMmQgvJBowSazpeKBKqnDzmL7VfMKqJ1tg9UoCWJMF1nMvoVS1vX",
  "key27": "xsxHbqco4VPVt8iicF2T57BQ8bqttoQrRw8RLpccSDD21DnFbJCsHen3guATpFvTCsfwdv57o85PnqAM2AtB1uh",
  "key28": "4DV6sdqZBmUMLbLDz9p7gbVhPZ7f2QbHWzWWG1NgsV4M8MdBXt2KsRzkQrcEGSN9ESQLQtw9UNxZD9G5MNgPDEun",
  "key29": "2i4P5qWgAxem2UxkyMYstaQA992ve8RRJdWZ1vpBayxmV9F97BiTfdqM4ZUom7hTcX57jaj7RfsN7nZGjCDbZgiv",
  "key30": "2vcGppZqERYDNeKs7NoV5HYKrSRAjJMctD9ViwCjSGRyLv9iPychK9QodoY7GoiWivmQCzsPThHNrJm8kQESJxF8",
  "key31": "4oQy4wvGcA22cwxoP2H6dg2wXRyQkuFAMWvvQtoLgcw9gbJenLEhQupNCteABdKC4pXSpEh8Z5HBQ6WN8fJjruRX",
  "key32": "5eEKALPhT3x69UafC7SnC1mcca45QpFjEwy6EAiMW8EhTTU3WAfNWUBfqwQRkwcAsFxphvdxnesGJCJHMKMiG7z2",
  "key33": "5AxikWsT37jZoNpzo9JLXFDExFoky7fjMExLxEhWL3JhmkAdMtJ2Gt7AXzzCnWJqVv9ieMM98HyKfG1YcffQPd6g",
  "key34": "4B7P2XkS2wNS9m6erJpEFNXWmZdZ9iezsqigwixgoPctcU2srNEMdG5uSK1gYpFbwyK8FUAtJNTGRvsSurP6a9As",
  "key35": "65oqyYFkHVKN4mfm1fT7YXb8iH7wcSaukYoDPibFPj8BDkafzMYvwmLM8SJ7NeduVf4KdbF1wcByEBWm8nBnKgJD",
  "key36": "4jCfBmwqTc9mWGaqhFB9UhjwwfrUmzXM5hSTPEfPFPCHMqNNGXQXuoMb8PqcLCV12C7syKFtg36z3qzhsUzsKvdj",
  "key37": "2thETcX7mtzHRkTUmL4QnAcRt8UpEcDzbJ7Ne2uibWHn9ApCrGptNGu9DvqkqcyMVTKUDF5K3gyXmtVEdtrkPhmQ",
  "key38": "3P6MpDHb2WHC7KPe7CmF8ijrMjpQQhaD4Vkg8p5x6UdiKNFWPebhqum6jmARpST3SjWFzeroZtyY33ut8Z52FUvZ",
  "key39": "4TaEjjMc29h2Vc73ntbGWsdUCgiRi2qgcFpn5DtK2TuW3aWywKABFgYGoXuq1AxNigHQZF2cdJyYdH5yrBtNhd7L",
  "key40": "2QbEmp7J7fyj7QUMhX3QW8zXQdzVPEXFva6YTT584jYZEL3kVxrKb2rcBBqmR26wLnujhps7rc1NJQ3DkSmQyVap",
  "key41": "3Jd7ehfGCZqnSZSCfZqtDym6KF5CuNvhjDhxkQkAwCLjCQay3Wy1QhAoQZE3GUSodJxgP3K6X2WM17d4qqizM8kL",
  "key42": "3qD7bg9iV66dA9gnWL8vgESDisUXKccfbnfTFPoZ4N3eyr5KAqnUnwMKDkVohirxDwDzEcRH5MQmcfdSGz8ZUgCU",
  "key43": "5PpMCWFG5cKNJkBugcBMf88oMpCWfjz2N6tSjevktydJs2SoyaeGw6PvUYfMJr5ScRJF8RdUejGwXpeGmrALuV1H",
  "key44": "5ghhDeyiQ4wSccDKe8prvQLCS6oe4sqmcBvdkZPnUCXzQLLqAGYZc4HasrisCzUegDAapgGP9BZW1tTxLWfiMv7v"
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
