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
    "3CKNbvykMB7y77Aa37e6e5g53MWQPq8imRqwB8WKM3cuvKcaWQi4cQ1AN4hEoRqpw1twUC6tTiAgwGPZcU2jCbXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vrdQmejR7EZs2EEsr4pyxvFvod2NqxMGNfKyqkAXRy7uZGtHA3fPvY6Q9R6hyx5KV6ddmY3LzHFis2eccMqomaM",
  "key1": "396kQKU1Ri2DgcraMfKws2Zp9VgpSieei7GrWYpNzLrGzdyjJhZnKZPgijE2Ma8JHzduUCzHSz7zV9JoP9WcaZD7",
  "key2": "5boM1CA3nKPqqbwAjxaDcA2twrv7LXTHZBd6owVtz3RDcGnzfFRKn1FvpzERhdwBjiCL7BGyCEhJJW4gkcXyZuFy",
  "key3": "39rNXwT5iMvLSRrp3JN1bTQoPghfmesSNWDSBugjwEb1JumnENzsGS82SyQU4wqhF31mqXY82JNbAzA4yXtPK9tc",
  "key4": "3LGejuPdLnyQigncqF6YNRszEMCuKeb2p7APtTR4pL79CjfRiUMP7EPbvmYLcjMasVHwePmfX8otqvYUmT93BYVU",
  "key5": "42V5Cfrz2uGp2Drxs2TRSbdhctEbHa7khcdAoZ3ftQmiCyWw5ffykDEZxWQUZWAj5S3EaGvnmZXe9dm72pjtBkFZ",
  "key6": "38yF92W3pbn5UymWnDykpyrvoCGcL4WnX41UpvaZsrWoTrb744eDpChTuvKXudiEFSv5gJHbEUsUtvDTPqdm6vAZ",
  "key7": "58ttfMozsmNQyFSYJaTJmt1qJDMUxzeZD5g9w6yLuq3sHqicuDsdG3HDeSU2RYJ8FT71g3pR2jD3h5wMYGNnzGUL",
  "key8": "4GMwz3bXfc6gBApuuEPwWMK37RUxN3jvZ81YMgSxp8iYbyZ3EVxY2m4Z6PU487ZHRJUUjwpUJQhYfETRVYM7nYz9",
  "key9": "4TF4nUDC8XAwb7QKgpnhN9MtZxJGKTxTCsRX9kj1nEiNZZscz2BCuq9oUNnGTyGUETeAhrNfNuW3TiBPkgttAmoY",
  "key10": "25bmQGUriDzjCWKhkL3DUfcW2hAs7PUfJN7jLmc112rXiLTMpZS1k5pQzZN4No49peARU1towKqwiade58rZNeqs",
  "key11": "3HtnzFLFKPE7XT2JHhUvEc6GUfWWTPumEMrdYGVGCahCo6tk3Phc5z5c8hhzkedxKiDbzhHq17ivDKy9hoeK5TjE",
  "key12": "62sUxHuTDCaFkXhbQnQexv7hZoowrvHN9NTSFFqiQq6t7GaDQ9WKUZUkm17TcKHbkbW8kWadoFku4D7FvTrdnrhM",
  "key13": "3XUFs4y3nWAfxPqYD2bVyvzeDMcpa1Ld4X26avX8o8vjFmioYQKgC5L79QMoFFAvkB7fxq7z7AYyBTVEYecNzQFS",
  "key14": "4voDSeMqqbG4fWtbC1qHG9st7LG51x1AQmrFFzEjFjDfhRttkhz4jpCZYHD4bA4cBbtP2JBQvWKUwN9LV1nyS5Dz",
  "key15": "4KMEyoGDdfZMerncXycR3hhTpcmAwWGNUYBZEx1yTHBfMyH5U4cpVbzDBHw5Q1XVioGqr7TQpVwwwkRp9doV6zaE",
  "key16": "67BoRGgJwdJJtFAKAEALp9kCbicSR1MCpiEp2txqCWaBzmCnAUGp9PZVddYqMbTby26g757EqmrrMJ6PHgCMYGKS",
  "key17": "2uz83GYCgHapzvkd6zNuTcWpwhgXrouC7xKoHwvtX49yhydTND5nmye1jdRk7pgb9V5YygoXKgrezR1qr6ULRKjr",
  "key18": "5vfzmuoM2JFpQ8XoUECucmoLH74LYLUPS6uxU4WJc2iXfKJ6gdgVknE2u9CuVXuJXumkcnvv2a65bkQHz4R1YqR6",
  "key19": "2AEYb839Ua7bhbTZYbajY3mtVev3mu6CE8jExsKuiSL7D9pSpzbmXo8UBpi8KHekqsjSPdu9FMMmPugUhM7RBx4d",
  "key20": "5XfaZ8Ar6dpwBjUX9tAp3sAEdrMMN7Q763BE3r55PMFK4qHwgwPkv1afcQy3VE2TXmQY8HZckoXduae8q1M5JF98",
  "key21": "2rJeMvRrV36mzqf8FWHwx5JEbfi8QV7hR4m1vSxaR1rBg5tKws47M3DHkWnfqc77eVJPQWA8S7zvTg7Zs5uuuMp",
  "key22": "3F88ojExijHn2x1CFiLExnCLUFw2VXjJqdMERuUjD2eqeiiCFEcfRt3D2acUeKbfpc7cynKyByyQAYhkrb4egrbL",
  "key23": "AS8wJ3FsQ7Poq2pdWSzjsBewNVbxx1rxGJB8vFTnsewdgvdURskQ17YZ6m6HL4E7B9o54x8JVRb2TukwwBbWfqj",
  "key24": "48nTLNwSSkKLV1ntq8JQsu88TWWbmhX3UEuAnc98nvmkHgEqh3V92B1hbaei4iJi5PywiWkVauVWsxsgLTaXhBGv",
  "key25": "2PrhHWdtiqRRWwcVqHRthZ3BpcyXrF2b5yVnyXoRy2MHvjDfLeSDev2PVyw87CVZrRSdFFBjFEEddXR4DZjmggRy",
  "key26": "mmZ4LVnF3FhNbeFei6dETf37PvL41w8u8Eq3eF72AHyFaXf5Qg2BEU5dNshhg54CzXMogduUJceLo4CEeks5AAP",
  "key27": "4uay2jQjoRtxoUT8S5DRyV3ix3hNZH9ib1EEk3TwghagesZGr8XwaEgaGVDbm2rS4SM15Tf7ZDY1T2CpVuYEP7rL",
  "key28": "5F2njaGtvojNUZRvSebuxtjKH88BuEXUwsa4xNp9V2oMv9fCd7ifjMN1ZyLKLbPcYahjyeW2bRs1ckJ5kr3g9F8g",
  "key29": "3dNyMomsmpYoNqMHa3vtk9gebzPms59rTUr9vwrEcv94J9E79XSiGaPRrBmAgZmpwzjtveFh9F1Rg63aQxLGcCNL",
  "key30": "4NNF4tZbz4erntzM9Re4eLZ2pQfMXZeNxdpuZai2oxyDmD9JT3BxkjtGmgbv1TvV94rTiS3hAwmDGpmyeQbBbYuB",
  "key31": "22hhJv5Lwx1RVmxGKg2phQVC6aDNQTcbt33Ygbn6tQvpCuFwVRPXEVcasRocpoE4sCEsHSHeLMVCN5AE11Q7Cvpn",
  "key32": "kLspnQfW14zueTrLZcSSppSZjU7rm1sssQcThKtT67ZHm4YZvsPWN6xGp9Fsn2bc63wBce8EZgho1Ei934RubXU",
  "key33": "3pYytxNVvLttZNYheaad8RBvVmSFjno3wCsEpGWmqJvBkh3AjjjL8ESTt9y2rkKabBuUA99GYf25WZwzBvhX4Jqo",
  "key34": "4D1UAugvqjXaSHNay93oSuCejzSgUZ9zPPotC7B8b3UhqcFg1Es3XzFSi3ZrpTvhJ8CbEnyAAtg4bYuyMXWFwkF3",
  "key35": "5xuQhSZWH3kRSF33WBCihrQmyeEHpDjEj97yVEgG1DY67A5tqRvbrAPp9wikH7bJKowhmuPgn2pihGsN1Yp1FEYf",
  "key36": "2XDjG1XWmYBMSqTrHsf4yvjLCN6GtDZrcLHuRsvgZ83phy3rtYV7Sna5GRWZdB9kP2ZXv3v7dWvv44RLVHSqfBWo",
  "key37": "5MDRvHivDKSQMg5j8pL9P93T3ooaR8eJFNpzt9iGYNCi2En2UfLaKVg9zMA2PY6xFexNGYLeQuRuqmuKMLgdZAym",
  "key38": "3wcRkAyR7AXkxiWPavnXtvxYF4HCEgNwiTHGJTMgAd77THNb19fH6dq3fjnBEwdBA6UDKC1Kbbxfs6pyNkvkaxmu"
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
