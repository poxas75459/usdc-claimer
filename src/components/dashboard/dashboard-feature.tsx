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
    "5DnrnmowF3DDkMKwXwyFcxwzQcnCcBJgbHQZWk3wN1hGNZsawxemVJopkYmRYm3wXjQ36NSftdKBn2jq74XqSkiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XoUJe82yn8vWpjUtPGB1NAfjwMbWx34ptkb7VP26Mwm9N1bZUtwvezczPZhjQmkmip2e8CAvX5wmSdXLJESQkFN",
  "key1": "4zCeNquB79Je3yVhDztptKJ2KABKsmgMp7EHP4G48TtWpSo5HQS2LwvbYeG7xDrtBriz6faquw2hRtA8QiYYbYTt",
  "key2": "5eoad1iYpBu2NteQvtmZciCrPb6qEyPs2F46f7GXHN2cHr6kTsruiWisWbpupN3fbcVySGDmZdYnmr4zrCdUsjxJ",
  "key3": "2ZpjuZ5KZwVDwvXaViXEcEzUqrzomwyiKAouY3emnGXJHjnVtaicLw3h4Tdj1xTT7xS76XdTkuDxeDGy9DWciTNi",
  "key4": "2qvGsD5aKD7Sazvhok4UQ6ceqSaJBuE3aHLbcPqQnActpCZzz3defFNav7zd18SsNMyRmUyPDfNp3XWpdiywai8n",
  "key5": "4Lpjv9mEuJ2Tsg3NT7n9RDXv83XohNmxTdHEY7QuVeBuNaUjVWD1eJvEZJGvb5krmBmJYX9M6GV35omXkReo2K9D",
  "key6": "2YujboLdaHaL7dXXLtChWaBcKD35P2zFyMuocPkZMkqgXCDUhkG5mGpdmWz42MGm2WfhdBV8G3Hj58HNFoJrj7No",
  "key7": "4QefYycrW2YoudcPhKPNeKo5YAaw5wGYBwYTvxqSboGb9hsYfp5EDNC2xMr6g99NXn6q1gfvvaeLeL6YLny24cY1",
  "key8": "4oDJSJBVkiaW63qu1YdmcoUHcZNLbqBoLnZaEUqvQmxj1mdQfB9FML63y2Rak92iiJKeFdQyPS3Px2SLZZjiLXWh",
  "key9": "2LtpLzcpFMQK7bKntCAA9jt8xsS4Ts6qaQtcVEx5er4ozqoHyaecYMy5sLKDNBYGtnXPyCvMKnP1j4MYh5yEjxxA",
  "key10": "u93kFxxpGT9uLUSFwcYJCS8kpZJm3d5HvWH1oT8qTA8PpYckUoxHmG8j1fP4PwCytYegqpaX7osg1UuYZ1CWNzE",
  "key11": "61ki3fmpCdr2cCjjGrzfHTFeNgKezZs3pM8QMUKAT5NnA7bC3Aa9wqfTuhHgNxMvxt3rL8jJ88hRat2DPJz3oM5R",
  "key12": "5jKso7tp8mLs1GUYEfJToaPv9pgodsnb3cXfQGHFFejgf3kZRJj3pZrNCn5aHzt1MavtWmNX5q1jfUcBudW3e6oY",
  "key13": "3oka3KrnpsBuqQ58NeFsT31RFKaiDSDeUyXJrcnfUzjToQ6p49VNhQ7AppWnww5SkqCyVMyxr2TMuHtm4PpSU636",
  "key14": "41z9LsDtS4ZLCPmioJKyxYky4vtEPVToMFRE4SxFVR3N5es8YWNvNVnNEDwMPGFLKTGPmNCiiFCex9b5QuDnHo62",
  "key15": "TzMDRxGZgCN1EdC3BjMGpPUpjNowq8DLN99EwqkRNUmohzLCiytK7AzHyfDAukdz6zNMUo3VM1nqWwBYc2AWdGY",
  "key16": "2bA9KkLNMfhuftvRzeer5195iwgAw1Tbn761uKMM2eKvweTkQjNfFh1wSQrooQBExUAqZchziYezzw3EMGugz1mk",
  "key17": "53w7uNCwWmE3ecToN5KVLADMdrtpqc7RXz5WhyhUS3caLQRzttHya3NSwqx95Hxn5ychGKPdPhgkKoBee3pXWNbC",
  "key18": "4WnMGxX27zzFrrK21bkJDZDmF3CavwJEnp6PfzWm1wdwa1SqT9wvtJeFxiFefKHcrPqhTtvk1D8iJasi4bHGFZTe",
  "key19": "3r9TKn1wzhEKe1nUGVXzGyx8u1pbLWsQEqybkgKGGh7wv4xCcGSjc1KrN4HL4BdQjcefvm9UeJQACv8N82eRFk8W",
  "key20": "5Lhs41J6vj5bCnWsvzAshYGuUM9Ei615o72G2CiNDS1HurbXZNkc5QGuUGfJJKYXiBhyiFiVNGg6nHchFEevM7wa",
  "key21": "3iCnJ5YwxXXgBhd2XYBCAupUAm38u5oGHC4gpu6K744MnBD1ohA18kjPXT8AQ6792nLKa1ADD1ohMjihPgj65aqj",
  "key22": "3EEUy6CXDbwM4ajHFSL6J8TK5xWjc8hktsSM4Nw2hwzSmMxNtniDrCC4DuvvmQNoxFrSXs4eFHXeFWeRfyNTM3Yy",
  "key23": "2EQaxwkGcT9xeJ1G2WaWgo7xF6Nqg3kiBGxgTynteT5s4zUJ6XUGqhE3oBmqF3gHKz7hKXxfkFxiuWZC3uxX3EX5",
  "key24": "4euu1WWkzGocf6ebS7q952GwAMwSbed5qydwCxhn73UM6Dw1HY6cVZaQCVZk37yg4pRNbjTKB6BpMr7cq9Du7xKE",
  "key25": "4cd8jk9RS3ZmduDsANbToqZNTQkM96aKRMA7poJtCHpy8XP4zJj5oMkCzt1PGPtDY11z7Cdvha7hHNNoJ8q5HTPZ",
  "key26": "4ixhCwycjo2oLjvyr1QR1qojbtDCChUvLcAWkWuDn68QqRUyW3CX3rf7kXGjexysrqBXsm38y7nUqN8zxEqkFGZQ",
  "key27": "3umJiPBxM2oGsDA5MNMvYM6km2qDJFepYEzxnkpRME9UHCoxR6vxouJitzSF4UxiJrE7yuvH9Asscjp8tzEXUkfj",
  "key28": "3A9Uef3GpXs9qZs27CKtK5ufugia35gsxixWDmjoqc9sin8EerRqCoYUDGS9GXz5LaZYPVRHSuxwPfA957NVfw3k",
  "key29": "2a5HodwkjQ7HpCdNFHnnaYMBGzfPDLzbKUM1yXS95yC69pkvMJiFfeFuaVcQrVLbuwwCXJJp8rm1KAoeqPYMtz3R",
  "key30": "3n9P4jwgmk37Eehz9epKByzuv43o3qRxmHshFY8vg2GVmMVoxMn63XSAqvd6uQTD3cifPkubAbGndh1jpRJp4Gkf",
  "key31": "3o8PvTqcAeYTxkuSvemdedoxaZxUiUfAXDnGGcV1m9WNCLqugV9DDsfTqEHTMrBDgEprVEn8KVt1GPpaxgxTzGZq",
  "key32": "4BgpTa2XKrMqfsi1MPW83kgiQEfBLcSKp7QFvZC13S9RVkJvHFfgtYSwPL7twtgfiC5M9qJayTBrMV61zPo7ajF5",
  "key33": "AaV7JuoYDCuvonu1UhTagiVzTebsKZXTTnoCd9cJXXznbfmqoTH6DKoy1U8PW23KVFbdUBYKXSGxMs9JdJBnwMm",
  "key34": "3mWyxkfYuHVB27BWJdhqtLHadZMmgiWso5r5MS74E6VqQNP4zT1H1vC7MbMhFirZo3yUyKVR3Jbeo5FLfNzdNpi8",
  "key35": "5Lq81zM4SGd5noa2QJRCJYP7Zws2rfid2hBk9LfQi8dEicsA1NvaUV4U8k2rtVv6aQHKKLP9GwBaLtUa3SmFe9jv",
  "key36": "5LZfnEUiLTxhkKt5oZRGGBa565fT4KBJ94RbrGJB4RmzjDqq2N9UqurGDigeBtg75K7n6cPvTLKAaSn6EHRQ6sxR",
  "key37": "3EzCehpABe1pxM4oMEvqyTZvJHNyCN5vrmQ7MJAc19LTGCCLyxhuoqwqLRNd555wTt63AvRSLWvihYgme22cqWoD",
  "key38": "3orTX5jRtiauyap3FLAcFN1edeLELLF3PC4fEic5J37gVHDVWbLJ4VqBnmpi4K1mVHwbz2NupSAP5fCpWSXNEALq",
  "key39": "5tQMdu1kvqwbGFPHKVfsUue3XcHh9ccTff9aNXfVXQLx286oM57gAAiKm7r7wAjscr9cyhxyvdeAU4H4W87WD9mg",
  "key40": "2jZKVJifBJRpmunu33tA32LfxADPrtV61DnN5bcrbqvvPjJ6BLzcW5MY7NgVXa9exESoWyLfwd1SoXJnVgZNr2Qp",
  "key41": "53kFzFhgjWos8wNc5MPbufk19pxCuvygaSw3TsfASTbPqY8JvZ5EsSCfLbec1z2uBCQytqHEip1SrpJnEmQYW1qv",
  "key42": "3GKwi5SgEmgkSCZFPVUSBYLmtqESZpcGrv7XgLCQqYYhzb7nLQb6VAF7qNd4oaKihZBcjDZGKZX3FcNKKghKb6Us",
  "key43": "4bSKgnFmvb8mg3JMdmxA8fSsMcWMJQp9dqxfQDZ14ftNKQxp2edqvXUnC7ttHKAnRHrQsdFZD6i3x1XdUov9QBjQ",
  "key44": "XMgzzKGsCEd8J5ATgF7wgwb7cGAiqoJEnzYp6tWnGpDSXQQnxkoZqevUxoM9QNCiJCViDU6Qk5F5qceJ1RvXmKj"
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
