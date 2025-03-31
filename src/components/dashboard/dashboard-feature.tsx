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
    "5sNTChVsguN8adRASMpBfgcjRYAuHhLzP8vwsAYxfC9Creh42RP6vxAAfGdhankkt4aK7dDCLsRHi6dvhtdWSRbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mYUJdLGDNHB2nYafZR2Vz7xwW6HtrCaG6uj3Pckm99hf32p9qTcWNmsDWtrJKWR6znudEuhbtFMsbnfTyV4vRmj",
  "key1": "4HgNZXKX81ZKYoosYJJv8oFTWAN5yvrrcYJkZeLaXvBoJDTmSZjuKvhSy36KcZyd6pwebfY37kXt4GK2kJAiizDS",
  "key2": "5iigihUqqLwam9uN8y9apRbhNPZAFPcgQ9Tv4h7ywVroNohu4tRACnL8KZcbrgovGkotuJpeX3aQrioSdj5tCuso",
  "key3": "47WtaKATjP7x7k8xqYtpKaPfxv3piD14eJ1P1CXPBZuHBJz4RBVLkid6HV1M1kX9bW4568ZSEUpb1RWXqTrqnp7N",
  "key4": "3cbDSC5hzQNoRhSLQcbAfPyvKWXmoSE2s4kHa7gU6mjj6XANqxEHV8mk9X7t2YEnrZHy3ZMU31hKwzp5cRH43PQR",
  "key5": "5gBUFswnsNGM1Mxfmfi5CvPCEz1sbQMrCkpb5MG5dTW62urdeyfLidMRmD4BwQYeEaGPDcnBgWjcctaFNqe89VXm",
  "key6": "2WXFffimriwHDDyRzYpZhrnEJfdUFJMn5Kh6RBM6tzMVuBka2Ur6Q84dkaTWTYepPt8EeA9Yt4N2oxF3XBy6styx",
  "key7": "3whGE4svNghqGKdgqgbRjmySXSg8gxkK2P5VRAMGxDfKyx4YkHxUHyy5Xx4nMiD2hweQ9gvmXcNhafQtDRKdDxqX",
  "key8": "x86tEhhkWwcfuYKjj4bgEHK145iDpVg1reBb6vkb2JXSJnj4v4hY7gtNGm8YYBpgqE9TmrKaEdpajf9xgwhL7vD",
  "key9": "5wwM7zjXwesCD8oAUSRMZiK53s9jSfKZUh1HPLazGjKd4JpgwJVo6KQvFhbjvLPydANpkKQFTztZtEDWCwqhQcEd",
  "key10": "3Jkyn3GkaHu9H9EfyJSBY9CTPXqjGYD1sq5YjZ5APeuqZEG7kEZ4YrmUhijJRSdBFrj9iw6kuH8wz8NN9b47BseX",
  "key11": "2rte5wH74FJah1DqvHNWdttTYDzAKMZ3AJX5BYjYsQtLAqdVtkxSpEkixdCnAnwfH52TTaG41rPpSKgLsiyQHRo8",
  "key12": "5NsX7pH1gNcCYUfCcKmqNqQzrL5o65zBc4U4fGAvPpxDywARHteKGvC8Dshh1c9cHm3rKCJsS6Fy7DnuQGsBQbJq",
  "key13": "47ZVJCLik75TppCKzGt1GkGjLSqhkhXz8QJPdQPL1tLUfKe5UwgihUddZTXfbvCozo9Md3HNH2cjqPf1TN19Jxvz",
  "key14": "Aa3CdFzDHT5kQoWSAPRSz6ukrFNxreTmFQD94KrzZGXMLhuwYqjHsxqTGsV5pQW2uMzSqwUZF5JCJUgP3y7xHkw",
  "key15": "4HXbtQnY5ms6LKbHa5iMSzLvC1VAPfc4hHS1ioamtWGDPQcr4dB5JWsJTtq9bqthpthdKowbQ3EFmbnoQ3UtEcw6",
  "key16": "2GbTpwqyNs9qJC7XYSjdurAQc341N3znoSEE8bBjS4CUtC14VTs4Ea5Pu5sTDErByzwRMR3e5adit25WXjYTPLmY",
  "key17": "4HYqo1EUqdpZT7WvQCFNQjT5qs2BP8b3tkSSKhoRfr9eJzP5EttCeXzzTXFtK5rbb4H55JpwPvQNvjFt9SEBug5E",
  "key18": "2TwAbxTydpkhu1gKHK53JC4H2wbUpXmxChiVabjpHZEpLfLD6VPq54QkgM31SG5r7kKWyLbt7BaZiExpFWAAcFVM",
  "key19": "5tDbs2CugroRhdunWi2XTSsuge9JryvA56ytdyDiJTgTXUANr8MfRPGsN3gHxcbd4ZWUejHvCgiB6z5xCgZQyq5L",
  "key20": "zbouoPrHRfVRvNuzQE1ix7xbUH7DZT8oXsVftSxhCPMrKUiQ2PJs41HtLyr3eEr8UPV9rm7hvvQT7xQujJzsV5k",
  "key21": "AgwTT7yAt2DCHe3Caxb9V492yhuzALBSxSpVvuo5jvE6qAcZ4oVDjUumoLnhuy6VSrgp2D5yiZ5uAXNXF6bHcnP",
  "key22": "21TYxTpUWX7b7YNTRuNmct4PvocpZUHNg6ZDrnvfo2Eh9W49MWVz7fPhNbREVwqzW37NJmKavyNq4WuiHqqabesZ",
  "key23": "4xynNj75tujQ5BET4mWvqDYUWLt53ynVW7yNfTGJdbvdtFbAzLW2fKn56Ej6BhZMb4BeLBcG8ykS1Z8NQG66UYth",
  "key24": "KYzQZDDMdj1zBrDYwKvppmGVosM5fHRszTMbeBUCoDA71S3U4vULoHwkXF4Py9X7Eo35NRwiijq9wqUXk8fiyKi",
  "key25": "XzqkGJFvLyBkz9JNtY3R9yejuF3Jmcb2WywqQYD6FZQahhMXWqBEEQajfYrfRsh5UdJaXugeCaBAj5sMNrU8DD7",
  "key26": "5h9ETmZsdGYZsvo2YESmQELiT41Vy5gzZbLUj2Hq2sR9r9TVF4qzxoVyTQPpYykZfgSy6DV3iA9PKNJX1sQLqUKQ",
  "key27": "3yakLiXZ9ejVNySH1WC5vjP1KGws3JyEufsRDsaAna1qWFHyUV3CuNgUdSDpNfHRx6jMjxLjRnShypSBVSNNYHAq",
  "key28": "5YfvzoFYaE52YjQUMgZuxVeLXHh1gPGdzDi58UDxwhA86XWwK28NvHuXcXUuuzRRwoaxgPDPPXSpug8TXDFPY8mv",
  "key29": "32Vii4TQ2ja2sf2JVPjaFpn5W3o4XEQavNajJnKcoLMagEB1MHLgMvQpszwvw6FpsmVVw8DpGaX6G1C3ZaS5up1j",
  "key30": "rwstU1v2ctvHD76ekCqpSUuQGHN8dzcJvDeFUzBhmi4G6KuVp4a35mdYQQcopu61gVnzUrp6kCrZid7tp4fEMbS",
  "key31": "5Ph8ogHd7KNYR1nqSfcxwsS2YjAkQneejvNmSLXzGN9sAZthMaSWfvzeJ9jjKwQ3qBbDutMKPVrp47RzAgKL5ZFH",
  "key32": "4B9XUMm4PBhaMwrMxUJc9NreP2wLWKPh6ZsktYZxaNU95REgKBL9pgXx13nQaJHStUWFhukuQ65MfCJF93v68TGT",
  "key33": "bjShisLGzUaXBg5x6nXS6DJFDXfnenFEeBEooZscMZg1aX6JkebZFMnKkMbwjojLrxwKooy9NL2chXkkykx5Pip",
  "key34": "479zkruTYmgfh6KmTaNda1MzFgdjZrmwsm6HENhH9fhV6uVZwfoT2rLSo6Ym6Amxjkcim4JTUzGXWDXCM5hoej6S",
  "key35": "ojRdEsuyyhr6fenPmAeVQCCBVJikrWpXYmYPVgdvwCJHAM9k1Fw3anvEnzzaM9EttjNCo1yMDRQfoQjTfgLFLuU",
  "key36": "rog3bgHHYUwezvvd7R14o3aoxAmZmxYLBd7XTmsKbZ9kWN4dLPohJwHzu1cMLdVrLiJVg5rTZQGjVSrfoJYo29t",
  "key37": "2PGxRvyaQs8fi2C8xGis3SnKkoBpCkrRVWAvKP5vGs6nvX2wHZ8TeLJzcgGYhvLvPmEndm3D5p28FwtwkigtQC8K",
  "key38": "2K7cbwqsnhTJrMBkoirsUJ4hSwC6eFNcMx6xfVcTvgunNNnKdEnhP773VU99XKVvh7JknniJ5kft5jpYQJvix3z7",
  "key39": "1FGkzFV9DNmAJxDtL6H4upuaMiiPU8xXFEikxs6nLioB5tcFG2Y3qFrRu3zFVKMFmL66tEy5CJ6oxRSv5ApVnsa",
  "key40": "3oM6jtNhFrvQ7GdsxK6g8WrPAzz4XNGUC9p9XorSC7u8bHgjtjCndehhsofyvDwjYpYGmYyxBZmRd3amSFbukENy",
  "key41": "4SykZ1T8n6jA9rMbzbmwYPr5i5TBhXh6pgtVoazNAwm1WWb47XNgj8p4ZYvqL4J4uzzYFWrGbnRQ5BoWTCZfnGEN",
  "key42": "2Jn13tkR6Yr1PrnkhVDC2FBrvEgJC2trm3JvgYXjdYSZzuyHB5FXxSveHbDsAgoCjf41wwQ1ggucphKXCYK4zLa2",
  "key43": "3PRdaHEu1kJypyj6Uj5hwR6sJYhPtnyrG8TMHTXduD1rKAD3e7JYEjxQVkN7Sj1LeTJWMdeUxec2dVsZS3CvuJor",
  "key44": "i4dmUxSpDitSS2W2mvNepw36entDnVFewsTPJy2YP2jr3aD4i9qfwNRRVUbxUvte1MKsBC7Wwecb9m9o5E3fA4L",
  "key45": "5i3i8FDnAqrLdP5DYJBjydjXtqbj9NyatxPTD1a71b1po7jVqgP5JNN5VoBvE8WE8zKa849sSkVGbWjnEmSuoHBE"
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
