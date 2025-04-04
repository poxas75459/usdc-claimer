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
    "67MD7UfJuw2KvZT2JeiYYpd2aMBrM5mAyyvNmFx9SpieQj3694fDwMCXeYcAKwkKGVR2KaQB5qf7jRDuSZg2U29w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S4C161t3R9vd9uJMG9voBxAqdkNroBgKV9tWYadtzPHjLQByone3LkJZ2qHegpKzizSQ7Pe14y2SU3KiRZR5YjM",
  "key1": "3PnRpMLmGxTc7SSsa17ZNpxjRp2sk3pCZHgoma3EhoUJkEsuxoXnJ7tu2obAYGM6JhonD2Tj6b7nq7FuiwroEAt9",
  "key2": "oZjdZSGGH2Kpc3nisRM9tmdoFAA79upiy2aUKsbd2bT7XJJ3zj37o5wgkvgwt7MEU42BZBxZ4e9VXP5N6rbJzb3",
  "key3": "391ZbXqCbomFNNGVBWkzf2KyWez3uG5BmoSmooK9QhJyS9rrU7NfpjWKATt4n8u5hky4Y4miLT3wAvJsg4yoZNRk",
  "key4": "3n6TGpkapmFMEvMGHsw57hxvU9gjJ2x2oTp7BA1Rc6cWrHyic6Zjq6djQqdqTsguZ2esTRSdnKU8UWoF1fKKN2Tr",
  "key5": "Sehcx9oqD3yZcGYjPm2sMAvVXep2qAJwX6ix1t78yPWJHHSqmiMfM7EiQZEcVZHTXbGDp7K4aDkcfuVxXwnt7N2",
  "key6": "4Qo26xaQgDB9GJx2HqvJ9yvi6gVXpgFSR3356AbZTGz6aMtuU4be4xCcXJ6Jd7tL1o6bgAyWd1FyPnGSmDSEPZV9",
  "key7": "55x7Cw9T4V4VMdfjfvVXvLVwJmwXZMxHZQNpK93iztwGdvEZhZr3rhjHB8YqFV16Y2E4U7FL84cEUyhxuJx9w2oU",
  "key8": "5APGGszQVDMNDr6TzyDc2tEmbDzUGPtHqojd8ZYiZwh8eZ7odLakqdMecKwwpuEn9XFyyHgtvwLYu8YJJrhKWoXL",
  "key9": "3oxp4dkFj4mAWbocYCN8PhQdrh8FXQsMQaAN3utviAvxV41Lzskk6JYw1fZqV5AVV7mZV7TGMdu4xLZQesjqZWeP",
  "key10": "3gJY6Ch6QvQQwoJmoyvd8zF1XsXLJzagQwMZXQHS1MYcNF9CX6H9Db2QysrkjvTtM32qQgt8PUK1DyNm74Sv42gs",
  "key11": "4mk8W2g5iZk8WD4WVd22vLb3uZv4SP6Kayf5grFkaLbzP3jRK6HkfQcWV8MdwNt2n2H3GTeYs39wK7tEsypb9smo",
  "key12": "2i8RVGMVu8S9WWN78Zu7MivWP9tJ3TcuQRN6W13PhgrMVVGpupSmuuhoGaX3zZhsfDjZtdzmy9eFe2p1w8zPiFPx",
  "key13": "4t2aYjEYDzHEq65gi5dUp9ZmRjnaedTbmDd6WCh7mgeDkPu2WwSt1eQfwAiYR6WipbyiMdjnNUrNaMHn7MWcKDh4",
  "key14": "2beabMhWpnx8g8EZ5pxG31sD5L5HWGPL4wb1ZZERPB39GvriicbADYoNiHHn5dJogo6YMegSFtE1nbYUm3pnjqeg",
  "key15": "2rvgik29de7DAvkAeeGJeb4A1KV6TgP8NheHJhYEW3X6mDUyFawMKrpjS2JsukVmbjRm4YBfLxCN4RsiZnRBQsrR",
  "key16": "WbwYZAWfDknRgw9jJsMz4q3xwKT7sWX1d8cFcFMnCjUTg2TuY3JyCA13VhBn4yExBK6VWNxkgFYgSX4gRWXDv6M",
  "key17": "2127Cdxv4HJYveLeAEEM3jTSxidiyFQzBpMHceAojb1x8onajjvTmRyRYgmVqYBqvrUA32BqQwVFzgcYmpxPKxpt",
  "key18": "2u4uPa4fm7C25b4TkdSLMD9rbxVJzmc5TL7EVm95dZC6gCsDshRbPqNU8Uzqwww2RrHc7uzzmuma9VQp9hD5EWPK",
  "key19": "2XkNBDZVzGKEn3rtP7n6dkdc644AmKHa9e3oiSTN9xKoZj7jHp8k7hQvg7yS6fW2sxjgsojLx7bjkCN5pDVboVed",
  "key20": "4hFi5bJmwwWZXXt34G3pJmXcyUtnSJdcEWtmM26Ao1v6MYkbWmxxprJ9QnhuLpPVYtymsZ1wNjGXM4X1LpcCcQZf",
  "key21": "64Sgdykk69KbpCUG92VzCpmiALWD4YXuVXJ2QJWAWmcZ6DSstybpshBhPp8HPs5C9jfHVdzDAgdZKiR7sA4qi1UZ",
  "key22": "4X96kWEUPEPKNY6WtpAF3N2mVLqxpWLVj8BgJ4BU4BS64P1LwjevEiyjJWvbD4LU3xGDQQ4uuLDZrshSo3f1EU9h",
  "key23": "b8oanCtg5P4BeXCqZTecorSqYyZU4j7A6EQ5tn8F16wPZcek2USDD8TjZyrEYDAR5eCWSGygpFooD93W2pFkW2W",
  "key24": "31ijCwjvKn7F8cwpvtWXstpiVsgsk2HX9nHLA8sCWWqCbXLJsiHpuauKsayXwAQAFLDtsmv5u48ZXiuoe8HPDceG",
  "key25": "5iMV6FL8nGnQHW1VX46fxxZ1GDg5HAAN4VKrak8kjiusxmBjdBr7nw5NJcLhpv22yPc9AjGUhrqJFjhchszGohuy",
  "key26": "PjxfbknGxd6Rsr2j8jPnG5K28kiykZGpqske71wVQAX3cpm1QB5Y2tGqNqNXurb3L78xdeNq631vcHtP7xzb1iu",
  "key27": "5YFqaoYTz9uk95iUeBQgR67RrVP8vdiKtq1tWiZdwrf2Wc6ab2ZmUXZ4PNj78bDwzB6VEusafpp7xQrNZQeHYBSb",
  "key28": "5dsFqDmaDjtFs8YuGzV53mxuZvckiUXccnbNt58ggTkKDnMnch6Gk2mTNcTUNT1m8H7fH7GvtfrKwyiCBcgvJMdD",
  "key29": "3Qa3HK1BdK1K5yauJ8NHajMpniUYXGdKfbqQdJW7U6bqyWY8AfUzrR7G2xZCmonzSQd1y2pxLskTertPzpBSqNgy",
  "key30": "37nnX86k5uQVSVSXLaxZYH4LmdUnbYbTMrPYwKF61Fn1SS3MYpiRgv8eeTaseTak1WKdLpF7Hu42w45sfoFpZeNA",
  "key31": "5cQ7NmkztgcJWjXRzrALUZpT1gG8r5UzJaHW5VSDwrGkiPL7oZsjhN7Dpbxep3Nxf4FKAsFvS8zyRA4fWDKsEoox",
  "key32": "4f7upTxUBBjoPFLsU8yyEPF1hcEqDu4t9wi8dpTDsm7v9CcTiXmJykVESWYuMSxFiagepDMoeS8tcFrGxUbhc6FE",
  "key33": "2r5L5BG3HpA8QBguhr6PT54LdskpbXhibF5UntWGYex5stnLEy1Vr21qbWijKTWHwcersV9ysjLv3JnLekLoUJEp"
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
