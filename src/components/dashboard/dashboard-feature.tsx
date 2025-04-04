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
    "4jAwZ4U1RgoCaZfAmBFgZK1E45sKxiYSnRcdQ8WxCBGLYwo8V1npi7pgQj4vKsFWd1y5jihxw4NakayMkXTYFzWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KdagRaUB4FXbX9fhwTktbMY8nZrANUn3BTFeDeGMt8euMP5SxhUydpLuhtQq8UYWM7FbNv3FVmoEo3owjLXBh4L",
  "key1": "2Gy67y6mFoYj8aFwTnuZAN7nkwB2DxbQJVaQAwsE7swT2HctapCiNi7qKdJi6yyf3mhRcUoTQ33TQWvJhSbTHHvc",
  "key2": "57gL91U2nUs8rBA9xmaP9xEuSFFMaxSHLrTwB6JjUWgMyo4Upp9TcSafiLZvDbcMEYTVA5qj9HcVsyawRSAne3WT",
  "key3": "2NEtPDRCd1MNtLPjR3ZvtT4wXvLWcXUNizBYEsX4iP8tKSQKLep6zJhAjXMCsr35KM5JhK2jeMr6MU6f8xtyS9D4",
  "key4": "Vfd815s6diaMLLmFq7Wibs4Benr4cAkNyiKeGtgB6DCw1FyThRsgJQXrT92RkM9P99os6sD7jGsTzKXRo4zthut",
  "key5": "42QrpiK8Yrpc94GuK37e34KY96op14AB2Ud2XJSFQ3T94GbFM6xFgS4ws92HbEA4kjGJHedYBg7WktU5f6ZxwDk3",
  "key6": "3UPrxfTcLKCxsGYNCRVuQCGKxfb6kANxoghLpapS3dNQQjMSsUZ1GqcvVGH6FvUnorDYn5Rs4jidHNjdY8b8nXEz",
  "key7": "2hUiknYzU6GFgYnDQHyzRYcRPYdfT1KenxReUU6U14YCUJNUzgLvimnqRP59VeojmN9qLmc9xGKeRL14iZsvToL6",
  "key8": "3f5oT8WnnmjCceg9mFVfSTg78riwCFut64nh4bgFLMyNPRXEenGRCvAWUYLYQ8wArpn73y1Fe1WwhsGt1PLp8PZw",
  "key9": "36togPp15B3Fncv3UKL9QJsToMMKS5yiKzNpGa1x2exCf85e1Ss3odJVU6EGZxjJaU9R1D5GkxEzQZM1Aaim4GzD",
  "key10": "57RJ74k3bKicrZuUrYDcUrXcDJwjqbo9LAtKQem3pBksMawapLgeqQWgvZooRKFeNeZsBWD3KGxC415nWi2aPUQG",
  "key11": "bVt7gbaDG1J4wC5he4PVm3SSBTFvFKBsX4vjd3ifSJHseLQ2SnPDaDdKqxw4a6TYjQ3quzyZZZK3kf7E9Ds6jV4",
  "key12": "5magD5AHiDGcduJXz66KRdNYMCe4tfgaAcHXDQorJS88pb3ZMRwc1ZTAV3J6ZmrL4h1rxkiGaD1BDx6TXaXn7Sti",
  "key13": "23gBo5KudAwcHomHTkaLX7oDNYyBBVTMT44b3KhdJwkFxwkrMk4nqdw1mWqWKZbiyT5VQG7qkCKutvHDzoknQvYH",
  "key14": "3Z9o28FRXcR7b7NhaxA3gpQ3i645JLxs922XdG7dGxBJdyFaK3Qw3yzPz5xheh4foRkfG1RitX5kmPghPSHeEkH1",
  "key15": "Gqg7oy8jSqZmb2rdML17xQgcAvaj3Qvkf5zdVGF9a2h12WZoczdu8gxDhMXaTJxK2MebsSddnNJgvEt5BTM34aG",
  "key16": "63TnRmSuB7hMUEbGoUV8HqxwBHwKUP37ParFGF98iDJziCrgtsrNcZPAgC3ddKLKY1sL5RYhk2xyPaZheFjoGRkk",
  "key17": "4LQ5BrZJds8oKgQqWXuLDZgoyz848mwMQTB7qUUXzHADB6f6iP8QUH3iiAnnoWksov11bnMgUU42Pm6qqSDtkbP7",
  "key18": "ZWtS34i4vqULY8GPmXHnyCnsMyQmnM7B4RFwD13qWan6r3m9Jhhq6KzNAsV8tuHaiNw1mKoepm7nS53NneJDhev",
  "key19": "4BsEwzi46C6L5GS4L1RB1u6MNdE5LSYZW3eYhAHbBtT2GbM3Ga4qKQtmSSVuyjF7EF3nFaSqmsCrs5zT8nVgNnxd",
  "key20": "566dcb4S6K5TEemNwtJ9YUKKbmA36QxMhyZ28RFStjcSQPizEUemYea4tYzxH4q1AcL7eWCfzYrvXWWByQrYNZQH",
  "key21": "5iPR5zgjDCd3cJPdx9tjMJEkhFKDs7ykyaHjSq1DZSesJgPts5PQV8bCT3gQ7ew9EU9jcQmrmKYfQRtNFBKE7Gy7",
  "key22": "5Z2WxrKX3KJPscbtxpJavcXcuDnr4enx234SXszfvUmgF4w8bFaQ4jNYGg5HfzKQwqWN1ozmF9MW46DoKVgrZqmp",
  "key23": "5dnypqFDgu5aJpNwfqR8PmdB3z1Fc5GexWtaG7Uco3HR79xD3KMgdSmq4GCLbR18GtYi55LCPbRngAhaABv9ogiN",
  "key24": "48p5Cp8cep5sKAoWwTZau6ZnnQJpMenMZmKvN262H4Czq4X1sfbKBVMu4pLivBZebKFQGoJArRev7ZG1LZQfLpVc",
  "key25": "5iCrgaLZpQEsxgDfwg3d9AqvnGqR8q9RN5bTZtBc9SxipsWpta2VqtouWKi4b68Bks82LQBiq2r4838hn4VkKntk",
  "key26": "2VEiA4qRRog3E3SWfANA8WVgFdu7yKSXsLroJdUk5rEP3zMKZYoo9Y7q8GSJ1UScWNjGJmc6oyQsfQik2GKjrjCe",
  "key27": "2bC88UGpru8mv4P16StKSjzcJuMREHpDjFxoNaZ8QxfkPEXwidEoU6i7w8yAVfiKVH6cH2kp9F6xEU3SLR7u69nC",
  "key28": "3drDjHvUzcqgVQUakp6UCCxXBau736GTpChhvcVoYv12yTrahUkN5s3jZxCvbFrQR56hhEnthKgAaqsCKGk89g5F",
  "key29": "2TBEa6kmfeRuq13rvYcGREzLVTejrrtEmKfMVy1GnamCNQrfzTMYXbgK5dUCi4QUwXccGbPXKpApmcZUh4cQrRGM",
  "key30": "2CTj1zhSDkcBiCVjJZKPSpp3sZP9PgkUU12aQSCiHXPe6rpZWTx6mgsSSRUMhHTZk2Hapob1TyfASQeMupg4QTkL",
  "key31": "5By915ZrJ5NyEmsXoBeHiPJ9Aw3yTnkmskEKn1K9n9fjXkzjTxcydeY6TwWGYZWsPUEgPABnVmkxV1yd8WVWty5E",
  "key32": "41PAjVzprzcqRVK9Su8zV1RuQ5ByHbrVM4MGfYT68urfXc52zJC7bL1QWSPNJmLvmSWUkqWo87mvwybmF8eyLCLb"
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
