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
    "4vCBVjenkXJ258yTJ9dQPFrBcmp6jdyroNe7pGd7Tg45GdGm3TytRHBtyiHZZUpFZFsHG9GbQApsnnEYSe4ycuLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oKXiTbXEx5doh4LSgXFgn4ayCuEnGZE7EWK4LgBQDeyuxYw5rCmmPuaFPJtkdM5ngjuhQGWW8F26Df7b28X51bU",
  "key1": "4by2BMFsjEDgudUZbng8jaPC5Y2DhPxKJXRZQMQqe8jqU2WjLKR1jdkLbshtUktnLr1VWZBdr55WAbwETfFCRgPn",
  "key2": "4XYa1HbkvWw48mAASTzcykymMVP3VDWHuZC38nZiZYNCfYbXuHt7McuhzBHzdeZiZJEmMnmM6d3L4scXpK7ppDFU",
  "key3": "2CAD5oKhprw7ARL12ECMFwbyGiTY7DFn4wYt8L26oifMJiPC4C3xyBQwx7XF26CbviJ3Wykuwx7JG3LbJ9pLZ4R9",
  "key4": "25c6Yt3nmGBrtg6CnSN2tE4FhGxDjEECKAP6kLyaELAXBTtn4P6Bfhg1Hy22KUGc8qQ396bj4mxdFkidfRU9QbMo",
  "key5": "5WKKftNNCRKXgVMku2cAB9GTELMGVzBKEyoy8kdPCGWHDho48MExMjP8txH7WhufEpqBahRbSan2KrEXhJLyQXRg",
  "key6": "4nvi2ooHw7YV2xMfmxg23PnEDt3Lbzt8snUihhSBnm38yN47bzvZDjEJu6RrrzPnm2xT79QPWbdhyXdWho4HPS63",
  "key7": "3T2AyDGS7LdpeUp5T4PDPcJ9xa34edeEyGmjo4hjVgAAEx4kBHRSNLjk2dB7fzEZHUK6jHhTjMEvAZjPNtADJAdw",
  "key8": "5WPVNVSsWaW1kPZSG16h6LJRkcLTzB38SV8yC645WVpM7yhNnH38WH4sRFThu21Hq91mD9Tex4JAYqdP9b2oNkYD",
  "key9": "2Tzo1r2GEqGFUFjQHZMbMEqFDWGtGpoxfsf6oGFB8sJwD8cXVUUj2ZiaYydCoiPVSGi5NgbDduaWRN619fXvr16h",
  "key10": "567DdH3fAvEtSKtJQHSnz967e9A7eEveG8M246dbghWq3Pr92Xwh3MDRGfrLQuyCPf6d1ZLFiKBNZLgKLNxkHEpX",
  "key11": "MP15bBhDwBbHRPtcz1wAAopcdMPNEgYZGQinyvfE81mtHUSKudix4nxFtUqpxNxUPZfDiWonARGkedP5bFpHMTS",
  "key12": "54BhUysre99LKLMBNXqDyuwGbwjJvihHS8pepJ9KEVzYJUytrpJwxefAAwqTiPekJdppnzwvGcdTtayq4T95MXFi",
  "key13": "4rYdehmgg3nH9uHbYPZNKsbLDhZFwmWRVXPADHrwcy97zwsgU8U9ULyb81qDZmojioDYDAwwU85EGGm5qadzMWL3",
  "key14": "3mDKpL5dFHBRPKGJKN4Aoff8JPtYx8FZh82HS3vQV3rUh7CLEUWs3p6kE21Tz6ZWiWAYwQPKEf2NijqpKpM2ikM6",
  "key15": "37EwvNm5fUa95GemeFYb5LQv2u8RYgEQtv28VxnaSM8967GAGoiQjsLzhZBjDFtvVDnhdL7fmMDUpZPGgog1ppfv",
  "key16": "2sacFX3NzBjXHGooTuZGZMqy8Ct9yuvXS2VugUvUFRaH21NdWSYBbSnJy7RsRcNGEjyXn9mJrpFcteEt93P83V4U",
  "key17": "3hkcRMcxTd8AY6T6x24tJRs7dd3DbMhua3KMiSRUXgdGzdwncA9M7hK2sSEWYCrZ2ADnYQbNZyZP9HvPmVhjVH3P",
  "key18": "4sj6jmhue9JNWUnHCr4Ks5auXvHRUnEooxVtU5qJwryJauf6TYQa3WdECC7X68QZeFWUwTSBZFpwgrgasr7mw3jA",
  "key19": "3DErnd9CFYee3i2TxFyUasttGN1HC6A1tcyaTBfkEy1rogptmFVwbUZ7rCrqFaixVJycnY2zF2mrK7yumuqtLTJ1",
  "key20": "5vg41nuf8vBqLYyXPQKY11gmXkqTuEiV4Pfwco5fsa8tzWdsppuo7Vge2fCKVTNFgFgCzLsaxb8Z3GvwQHsUvoyH",
  "key21": "2eieb5ENq8VWqj1DmxVuWyyYjwrgCfSNLFPowduAmGuxDgfWppTRnz6XUpiqvJ6PDFbKvxMf26qfLxNHcT7EVBuF",
  "key22": "62fKmUuShVCP16MpewS631rW9cHHbD3D3K6Fcekh5N68QqA3iAUmJtpSNxBh9fPt2qacJhpQR8tz9HfiLxvKXZbD",
  "key23": "43dmEJwyULXmpdnErewnCBonjDQXqHLaDMgEcwDGQcy8mwCThDf9G2eqGEYNsPgZLQK5kU7hEgk122k4xVUm4SGN",
  "key24": "9dzksub2XdeAwDVQ6MLuV9XHHt8P1CGq5Gfy1irmN7EVAzr7tjn6y9VknHdVxHQoA17xK9WGZZKSjqD8p3JyRsW",
  "key25": "2kxyPuVQ1T41F4scR6VUkZJu8quT41Sw7RBmVKKVpzshRfq61Amf7FhtqqxnUoGr6qaqcv9Zi9zE4E97UA7ZX27E",
  "key26": "3D8tSALu7DWz1GL4xUVJsJsaLPd6d63JgKhRHhjzys5iMFfmQoW3yiEhYcfegq1QExCSXAd2tbWziBqSxBWeQoyH",
  "key27": "3qNoYBQYLGXdcsoKVtP7as7MsLkDRUgy4LqkNZD4JfHdUXuKijXrRwqrjQGFDNjSoDUtoyBh87hPzRDzAiRHYYTq",
  "key28": "rsh1Ap4QEjeyBn49AJAVRPe4zCYkKfsgQcXmSNRcVk1tNHz4EW6DFSRM2oA9W3qWpJY56nKbqq9e9tX1Ccho8Ua",
  "key29": "58RTzaXnDXcTygGseGpCP1RfWPAX4BuYvFkMoCrPVyy4iKQLVMhC3pTr94RfQi6PAwuHREaHrARni6XGxMbQrJ6X",
  "key30": "HVecgq9S1a2fHApGtjXvENE88veer8CHubdZiFPLrJKoUzN7vQVm6T9GD4Z166asq4rEpFVesQpjbZ9ecDAkapF",
  "key31": "4oMNwu85CZJSN35JEVvezdimtrACK9Mgv15HTeo5DfE61yvK7MrRT3u46cXHoSLnWKcDxiH9gvTWqJ7u7aFiPvQh",
  "key32": "4jrDuuRxibxe5PV75BQ3nT2tgBTgcGFDf8dCUHMaELZH4SauVXpXRAqefXL1oYZtcxuUiFZi1gkkYmrt9XuBafqE",
  "key33": "2tmCAmCBBmxw8VnDVJjFhctrtG4dhE8LCggc16qZpKna4P1QSQx4erxwTqEgoEid8WkyeT9aCTP2oMir9qGv1BAr",
  "key34": "4PdZwFn1y1tkuDCLEhuyAfnZbjcNvbbejcjTkGKxRJBzJBkwdzAMdWYfkCFNgQykibRc96xEQLnG5J3d1KJR1LcH",
  "key35": "3hiBRGaGpVzRdAvgaN28tVLrsL4NE7JaZYzJr7aFAtjEPTap7UHL3ZVXUkTT88ibSbdaCXEHhd1688x7R3pjFaks",
  "key36": "4XU18W93xDbVMjGFUEmP5jTKHnREkYutgkqnnLHspXPK8P1dapcnA4xcpYyVudY3G3Km7xu8m1JbkNgm2GoXL9Ar",
  "key37": "3yG5qjuqqXq6mx2y9qjkEpur8FgYSCBYaaQA1389FkPiXPvq8N1TSiqYEXybRRZYKkvWkihB7zbv97zrneWx7Ead"
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
