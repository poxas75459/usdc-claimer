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
    "2ys5yaeL9vCbJNq8aJKquM7HZztLSMDfYdRpQiXoQuhspgs3CzywaWsyMQEE6qKp1As86MUdxvAM9cxjvdCUc8uJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uug9ZLZ66ApRgNEff7f2KcCjv6WLxVUo5a5ZThHbm8BEsCkwrhvhgcDGPYJWjP4gchRtjGHfVhFCEqeeg2t7MiR",
  "key1": "5rk2yq1ux4ETwHLEiqfRxDpYLgmsj7cSv7dDGKgXqyY2hMxxjonGcCgLeD73G8ChYFAmXpoYKUr5FMUgM7L3nRhu",
  "key2": "2yKDB7yXDnaZSATRDao7Gf2FzFSyDRRKzbFhgMBNSzj6NKhoKZXwoCB1VLbXx5onrnKbYXKTHFRXR7eqEVdb8HEg",
  "key3": "2zpWRsVvcu8MHs6FTydyjdn9DRSmHfnLucYXMyJJkcvK88PRNU7C8KMeHHtaUhLxSphrqq2Ykw4K8H7v7XtfWidp",
  "key4": "3LC5odxr2p5U3XWoDTb5mkFLxAALpbGeEemAp2ANKmjAGHLQR8Q1NSR9oZ3DG7vV5kppMsxpFfDaXzjBAHEbV8xq",
  "key5": "62Y5VwtPH7DevuEZxSnWwTMnDr4qvXa7aLHmXeTmFhZWc8MLtXqPvAdVwC1YqcE51AduKqUniRSkSMDoQVqJqyCz",
  "key6": "j4uf7qQyWLMxDsAjWSC5TrCCyYU9LSdFs6qyy9w3ZU1Y6CASJy1mdWbM2wpptLHMqFsGNhbVYNhBdvKNjYsuknU",
  "key7": "4pk9jKpGuDSNP9b1WQzpx7UKZY8nuK54CF4yEaUNi7fKorvoLcUNQu2A1eVz1yqoHwpQie4jaeCRDuzGdNDd75XE",
  "key8": "ANFfbLgZh8JjEuvJtNhY2d31zkNG4JVbCM4Cx3YkoAVwrB76WTHmKeGBGRouvvmjZF1cABXyTeLD64xnqftYFUN",
  "key9": "D3sw2aH6QdoLAouNamEPaPfP2K8ivNdwGt8QiKpnbG71QrsHk5skrc2E5NMKXpDoThmnc5TyTy94iW7eNp55Zcv",
  "key10": "2SUwSeh1euLSpE5xh1FXM9aBXT1zvGLxSAKsa8XNhjSxsxXuoz1HijMwF1ic2JydwYLHkiDorBhuapzN7vfoxUFq",
  "key11": "24KBezRiorTaiKHTgcwpWKoNGggiuhxpfEmR6fauA82SgKwEMTEHfUcWDYSZ6A4Hn5CuwadwBrk4nM2BJFQGdc1g",
  "key12": "pVVqJvQe6zuwFwJxa7pKw3G1QYci34f8n9bsF76PRpC95VtvqmK2ctwWiJyQDK7JjF9oAnuE6gVK273jLjfcMtH",
  "key13": "fvaGbAMyzAgrEJhyy43BC7cxXpNZaUyiV9XFsnH2ApofZb99KkuzWUVWdWRGTQERPHkygvaDBUP2xezEHgZkvaH",
  "key14": "47Fvykz7N9XndHEEm4tmN4m9Jb6FitbUJof87JXL11Ky4ciP25MzdCvZWomArQ5enN499Ee2bmadCkqqbavtWP1G",
  "key15": "67kTvPNXiNdDsaFG4bWoHwEpFWFC7PTV7VvpDA3s983TL5CyjLaKEDie35p9M3U5BfGw45pbMAADn9fcuwrtqqyN",
  "key16": "3TpcSEKCr8LDZphRHqerEvBYyPDBkKVzFEvqx8E1j2C1SnguEABCLUYmtRMbCYtaGqtpTkk1HuPwvSW9qyXadcbS",
  "key17": "UzdW9XhGCW95TUqBpPXJCB5n6ftabQtWZZ9owDPFTLd3AvVMBMAqNithixsj71sLw1VKbpME6MhdGyJvYUZE8Ad",
  "key18": "GN1UeQZT5zBKoLJiAJ7oq6WafHEzJFbFFQRwdbryQFCSmzGSoFhxCda6q5MQLYYwWz4vhFGwvctWrPfkJwbcoAP",
  "key19": "5qmbHAA5jeaw4tiiKeUVvxsjao2mLRrMQK5NNnZhBnor8anA2j1gQMGzRpk6Yi9DbdBfd7WVqNZDHbnWrbkQFzcT",
  "key20": "4EKuxvdLe6nXueHpdxP9Efttc7W8tGw59LWJyCAYz72mtK738H6JGmmZwfB2rwzA4jVmfCcraPyc2568DPekQz1R",
  "key21": "3GnmGef74nJgFxCxZhWdKYVfQhzYMytaUAdDzpYejocnALQTThqsQEqDzHnBeQ8CcVjzcKNKg7ZmeNkTqg7H7a1L",
  "key22": "3adSJQM74biYRsZUYYRJ1kr7vACzGTc9VoTbgGoGjxHmiPCW9Be9JLgWvBj6eG9MQNQ5bqXp2ED2rPYNw1q2exc2",
  "key23": "5Rqwd4dQrVs9cgRiTsPTtqJqzBRZsuixX1EpcFvvf4MMeqErV72gWJMAm2FUnXnP8SvdnACaL3pFuazj8WLK75Yn",
  "key24": "2fcSEb2LBkbVMCkjdUDm1hQcrynCDoMpt7zMXvy8yStZTUqREdQdzibAKbgW1rzWsEVVZgErdUkwdcCAFmQH92jU",
  "key25": "5NYFYwQ58aqLQjm18vRtxqFwTZuPsuvSMt5Uci45KvixRFBiiwWVHEBVL83dN7jDqc8N29mv1dW8MjzpZfwoNXJ3",
  "key26": "3VUd2747msjCYzndSZfoQNwGY6zMU4c4LU8NzcbzdstghD5UkSvGV1nEeySf69DE7vg5D4cRyHL6QMbRz4QS7uCR",
  "key27": "3VuKYRm5d1Dsw8z6zWa7TptG1nk3Js1w72FiU3EK7eaFD1qCvmXt611reqcukaexa7xTfVJPKUuJgD26VFLFjsuE",
  "key28": "4NpmaGedZHrBTEXVBJ4YKkYivSgG1aNhpTaabqw1XMUPMEcnfwzK2Wb9j3hiXzzNDvG48UQje2jC7AVJKY6yaFUj",
  "key29": "3SwQse1hkkyG3dXEhiDNPF3daQS2yTfcumtxNQ9onKFkshdDvWUdTQWdb4DMEtNsrnUdj93oPVuafUnxjakamMkD",
  "key30": "kkRzghfVHnC9sGiXXgBTwvirHKmX7x4kK6wrU2UCTaDj58eodTKtxbf2Q7GfDGAJT5wfF97Umhfzowy2EQmexXy",
  "key31": "qGKkR48yhAdktQHqJiWS7z2ZH2ogk7qzxnAmBZU9tSoHKEfeLGidW2qtFuogFVN3SEpMKHCwjAscKw2uAF12mjS",
  "key32": "XoAXrr9C8Z4z8zLvzCFui4mnqty15S8Ex1JE7YxJTmiNgCc4ZWjGZqLZTMvPaVh1z32gUAucoeFKnxqqdoT56d4",
  "key33": "5Ndv1XmKxrmYGPfSRcZqku2845ZMhE5aaa8CWznudz9Uveqs75eNyoNRk7wPXktZ2GzMjNTzQ4cLK9Cxg5J4N31v",
  "key34": "XZdx61uEmgLZDxwzfLTmNVPZqpNNyYsA7F4GF5jukDEapzgZ68dJ7EdMDEV84bdWeeaHykuQM3kybcD3K8zq5cv",
  "key35": "2utAtJzNfWrbFCYYmQSGMSkiP7KB5WGicwMAjaHBMR8jDBtt2KmwbE4ZoGk5YETNEcQaKgaWcXKjxCEMxEhQp8wo",
  "key36": "5zqmgabHLAJ85JDEWBA9hMa5yAwJDkx1frKfD3ZxnYnR2XsQGW18PGVrsRHoMqMzEvXsVXZgMCCqdkKYrmrRHNjd",
  "key37": "3rcE6phgMHH2cmM9srGXWnPnpjNQf45xQ6yoD25aysARAYgj41RvsaVzQf6CQmyJLdGRdS4xNLUxJQpdAUEoEpRQ",
  "key38": "4uPjtHykaWjbtYY3XVezpETrJo481hgGzH6mqDmukaJ9JH3VvdNczpFe4S2ADYSMpqVErHFGiKqpuYt8AG5dgpJv",
  "key39": "3R2eYZfmRHqh89vBaFppgUmPmrrftpjgM169rq4rh5JwFfMBvTqyTnHydgTLGcumr5wqWySqJGk3Vy73Nt5u3eqq",
  "key40": "2DtJFgwGQNNmYcAA3DUBZYRGxaMrnXGzrv98sNiBt8gtAxfUFgdGuJeB1RPvGZrN7ktzgMaq6H7oA8RSv7mn1yZx",
  "key41": "HKoAMLwy5o4L9cQ8ocZM17M35TVgTBC4AmU1MPcf3ARTmrcXUNgbiw2RAuJtFyPvrkGUjZ2ydfhQ9BfUTRX8yTt",
  "key42": "2eKG6a222y4umqrTYid7Gf4VPdhXHNY8aX6HPYNH89Pra4NVXQjpPE5SvRjbo2VPKAwHPpmcumh7HGhZLAzkXikr",
  "key43": "5EKVqdNrye5eod2QWUj5UKggzNpv3V6V9FLu6Fkfs2dkdaaYzHKZgMt5DkvB2kZVKC5Hxyv8xwNtvZn9KVnoX5BU",
  "key44": "2zAuUZDoZZwX545mUYD8gif7BqG1E6hsF56fQWfjT1zb2Nc5dnZGu2JshnLaaf6MAbqCEyFyai7VQYt4ayZezz4D",
  "key45": "vd3hcD2Leh86n4E5u7hsW2kcVk8yW4B26DAT9YG99kFYtd646xAgJSy5QyMkGTAuq12kzHYmDohS3EJakHLd3nM",
  "key46": "5i2w5D9yZT74kJ32wjHAmzU6QsRYGskg1daL8NhUjSCLwAquvqSSPvsKh5qDQopRXXbW5os4roNmKNGHVD8457xC",
  "key47": "3GbgRv5mLQLfBgyRduUvM1cxvGy8ZZax9sB1BUDRrUWcK2tjWTwhtJLaXsYkJi9QFp2QFsdZ6nvB37dtQG9VkYBP",
  "key48": "5VrcQZb1ukr2zYn1XZNA26Hss8Xb7WkNoqygsr9vQWFiCyeSfzxkZadYVw8jT9pd8EYVpiPpasV1iZPXvs9qGfiJ",
  "key49": "3AAR27k8XtJsgJYEbqrKgSE5ssXUDnCD3c5w8Jxtj66zWn6Rq3xwVmUef2tccogYsiAszwFJUWi6rMZ4pmZ4UknF"
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
