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
    "3K2yembJ9nMwMUGZLutiveGdtfnuLU4mFRnekTNQNXUf9vDMdquN6dwjrXp87aazUySukwnwerDKL8V2r669XiXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FPC6L5cA3XzyyNEaJWmWkENH5zZwpk8JWW97mP27A5Hw43txuyPDMCTtyBtPVM4WkyinbivrbiuUoDqsBCVfQsT",
  "key1": "2pvyjjKPTNB6zmJbHtKsDHpKoSNMCQwu4Ncq9fuZTrXeTvkk37M6LZfpktWJcov9gmQrc4znDdLtPYLVm5MUEPpP",
  "key2": "4NM37Nq1WjAoZ3aN1vzANHd1mQTKK4mCnDX89jjC4aPziXn8QSSbCQWyZZZtsXPtmoPPsfGsw96DoXSbXUoHmtND",
  "key3": "2D1wY5xijug9byMHUALA3aARNpiXZZuyqPnAU3qpgiT7X2UW19xHrWhhyrBwAyGzwFb8MKHh3m3R9KrPJFuZqngH",
  "key4": "hQSFmcRqPDRwLBz2ZAfzJ2kG1QfqS8HvS9v2pZidY6CkxKTxTqwDWx83MdSZXBqqkvQexnkBjTu6zPAQ91poE8H",
  "key5": "4Yn8f7jkZy29GgGiHs2DLZT7aqD1PCZLViqQxrnHTLz32sLupSeq5hqegLYh9RZYtPHDqFxqtZvkvi38tcMwknQQ",
  "key6": "29PNfon8WyyrBcC7NAg5ZkhvyUnsXRK6KC1UV9jt1pervcineMep2Q68DmXkVbJsEXtHTJpHozwwYixaffkbtoCu",
  "key7": "5183nZvH9U9gZ558SJTh48fYXUrSBywaCMkAuHdRCraBcjVri8MzNP7ekg48g9HFn3uuvdRaHDe72sN4xQoKvHFw",
  "key8": "3nztA6rhntUGdv2kbXktZbH56CBwigzfK9Spni2H5y3i5pnFBjYmFUxVoBkupG1QTJgsw9betrLYFPEuw8o7SxBK",
  "key9": "2UXfbMjrcftEEzRk3o5HjNzbUUKtauut4RuJPH5D3dfxvfDv3xnLYt2hYuhRqzQ3vfT6pCW71p1dWiwptJoZ7swv",
  "key10": "gG2BxtJxxk3no79JLrc5G6agGJRvMS2KAQCLKoj9jXs5GBXhut7GJPAKEihKLSzRuyWiuipedDrKgMTycWap8ft",
  "key11": "5Kks1cUQAUnfYk2j4BTCjzb5NuJX3jeiLNaKczDVQSdi5F6ZvcZ35UDcn4ZyAFh87R2t6Fns5gXVXrjiDvvrXUrs",
  "key12": "GVSq9SJQhHJsBVi5zZS6qQFxbCqZ2R9HcDHynhF2aKyqm4v65MZqrJwXhgqUcheFyguQ2RJjcEqtbryeK28dc3i",
  "key13": "22Zm39qDqTSSr1HM4UtzXf82VguEPgSi53eCjvKP69ouFxfxT9SxTdezjnTXBTX5FmZoDhBSx9aSUwqpAvzsW6dp",
  "key14": "4DPCMjJh4EuXDK17ofa4RLxmi67JgLXG4HT3zWJZ25D5LwZAhUiXe6MrNbYJ7cBYyqNNXuuuvHVMtMU2JuCVbxQE",
  "key15": "3GjBWkpWfhKeQEDxBEuNRQ7JMchrLaFbRsdqVQhPwfGt2PHYN6sZyUHerToQPioErUghNSCmNYU1tVtzPduX1pry",
  "key16": "4e3FBC2q2tgjFJSjznVrzoHm4EfQRSqeeXmfG1CWu7Q8TRfpPmu2VqzZjcmGsAcVH84y7XJky9wo75hH3j8LzQ1V",
  "key17": "xrvUcuCKXx9e2mnUWUZK5zMsoZX1yLo3VVaiAuUFssgmxhB8TNPtpLRzp5xxNoXNanw9vnomaGLdzZte9HVV27c",
  "key18": "3zCCFvVAisc8jtZHWxoJjA22cQSM26LXP18vgNN4dVGJp5mqkJt5e9z2eyhanpC5z2ztMxHiPewqcbE13kvq11Zr",
  "key19": "4B2ijxSjD4APtE7bziGKHauCFgVGKHGN31LZNvw2Y6frYS1RJELkBWTjC8zoP92eDPxt23Lttqd3B5gKTtHjuUAG",
  "key20": "qUZy867LGegcwgEjL8368Z5iuaf6g8XT3uQhd2G6Gaf3prf4zm5W9SEtMbMoYYCQkXusGyCmYn349dZoJrU4bdt",
  "key21": "43tZZRhZzZEEqtdAbWqjFY5dp7jCbhzmYxqqu5i3qfoyQyMKND9MaKWHsfB33ysEviG33k78k5r82FzM1A31Stex",
  "key22": "3aTQNQH3v5u3MEzL1kMMyK9u7753xQvqJExSboGzyehSoRxUjvNQiCmRU6oo56NfSdonKeYc1VM3SpqhFLhKANYh",
  "key23": "2QiE34SehGgBVrRbGwibKL99bGJ4Ww7k2wjYRPVoeNz5nM5AURZ4TkxHtSAZUwucnEYHZDmyMgRj2gKp3wWvXg1C",
  "key24": "2f3r5W9r9A8hEozM9Cgw8QgHBbEWAsq4PVkX4qZDm7hY85MxDsLavxFyoBuAZqpoeyMzVAVzvMjmUJpQTWDuxNFi",
  "key25": "4C7X2JJKP1VsFvc38UZt4YYpuSbLohgk6BpC39R7GZ3tjTzx9vkTob2jptuWBcxZwJokv2NiJJukT9dqzkRtLcPm",
  "key26": "4ifh7bqPCN66pcQVzsQVBUJtAei1aidMWpMZ63wN36fENMBCQqSezzyKt1mQBPkDfcZAZu4FG3wmtbqWedgHaora",
  "key27": "3sPZduuz1zQYXS6mAqCwpE6X6h8C9BR4sEaAj7Hue2GCicXQaqmo1YLRtQJyXRach4uJoiMkEDCS8839ej6sQ7oX",
  "key28": "5HYjiEPX6GjKUV2GxRqRKgutrL872CxYPzFAvQBExxqBNc77XJA2p7VFJC8X1tXXnQANEVap9Y6ajaHxGCKezDBs",
  "key29": "3mmyB9uX65Zg1fVVVXraw6dCE9ULkdy1GKfR1tNhRhcnWKFyz6T545213eKtjyjSRVXW6MjgCCvkwSoBtZC8Z14S",
  "key30": "rVHUZLFURhyDAKeGvYTu2fM1CGd51g6hCtDFjmWGMQJifLvS9x7SxuKH1N8ko6MjxRmjoWPKAZEdhDMavuWCfsg",
  "key31": "3ZwFHipFjXFUu4Vbkib9WsDLAKGvy2BmWufAh3sKPVZYH66c8bb6KMKffyrw1zqj3Ri156Djyw5WvxjbnxuMjagp",
  "key32": "3uij7LGkkJBcpiDTdCmzJ8yP2UnawC44ryi8FENDEVfLicxg2udJSjgqdsERHGG4HhrXHdZDeXSmUv8qxhRWq3w1",
  "key33": "3mWXp7DERzJcHhZV9j2da3TTGh1AEnunF4VMajVp1HckvxBfhiPLyTmp5btrpeHVGE1VQ3epCfTTvBJryh9nh9nU",
  "key34": "3rEUR89jUtQH6c3kmvHpomLUYczbmeS6D6VT6uTU2SNPbSV37XLLtBNgR27BiyWyQxy1kz4dX81gEKVkjkb344V5",
  "key35": "3HsGC3wFAHJ1xFkfxP1HXkUGWAoC41a1VYC8qnU2ZExJq7fcyVFsRTGkfqb7FDQvgbZQREYBmW9grCropf42ucQr",
  "key36": "YHrW5ioNfknTM8rttbA8Ydfzaf7MZnEujY6ZH7uPMNXDtkz15z8NmdtqVvQBnE31aih7Fj7QqjhWAwpZu3zEjqm",
  "key37": "2YFskjrgCoshbFttjyXP1seqbW7E79B6siHyxpGHtVvLdGmipwFvey6sfaTB8xDgqoh2yFLNXY7pyNspbzRo3Seo",
  "key38": "2BBh3DJFixgU7Tfe2PUXg4QZTGyuH9Zenif4Tsv2e9EKLuiQL9QhagWCDvdCDUB1TPBc7Y9H3KZWwPbXsrVqX2JD",
  "key39": "5GibGEBFFJ9ZVyhcRsy7YFXjhuTk1zxoMftUzesxubX3gwGBqUVoJBfavmyrTGi3XJWvq2L8CBkKJvNZc1KeYvsV",
  "key40": "3qFVHugtw8bSaVsU1DuMeuWFevKheZxqTkGrP61XAbw4oUe6qXP9jvjT1SCXUotRoVSb5gBjfCfQGpQ8vvm9oupq",
  "key41": "yzL21722BJyGRa71aX4xD1c3kR4zhhT3fg1ryR1bff9uyxJX63nUvahWVKvgL9uhBmhfj5Rg32j8dstfQk4KiqR"
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
