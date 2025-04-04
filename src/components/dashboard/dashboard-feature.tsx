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
    "4LbBB31YrJN5aPb5ffkkqMHwV32m4zHo5rLrXmwmQb6x8VreYMAk526vbSWjnWJeWLHS4bxMK2QVfZ82uU6RiVTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQr66ejxzVGM1z8cW5QBKYML95JR3dD9z7cDayYD7qiBG6eDNrFKrT4M9sk5Xwu2DGyzBcu99GGLwzD2DHT9Gy9",
  "key1": "4VZe39XKjgdATUMdsWPWy225e8tj6nguLwwvToMyv7Waq8pRNAzebXBAiVAQ1cdvCaP4ysyFrVfa4u5fBxwxqjVw",
  "key2": "4Sx7LQhmmGrJLc3sjk33fBgzH2zyupbXzKXUi2dHp4v6RKkz6L54E1PPHeB8hoait7A9B7GZpjAwjSumA5MwdBxY",
  "key3": "3RenxcpXq8NcGnJyi2L9mkpBefWgkGYmueoha6MChdDPCWN9EHxDXwBoe1JJecgZVVqiL7AfmkXRAE6NvEuosMWt",
  "key4": "2QfAb6oNXRGvzRsKA7HZFY3TtghXDtBuXxy466VMzS3Hscv9dctPHBjxhwfGawsyj9n5LhW1YQgwcWXDka21Vg4X",
  "key5": "3ETcSesfD8wD77vFvNBcjtBPxik79H1dDQS6E9cZ9YJ4jD29hzSAFNJzkrEkhab3hhNRFLbZ6jTazqQ1wZRb9zkG",
  "key6": "3jX6VPAcHuAKsEfoaKbigdzegTZaG6GyARhNoR41JkCGUfLjbyu5UqjHG33HVN8HfzvfMPgTbnhddiVaPQtw7472",
  "key7": "5Qqy4n9GMjzQKHnNFRJonytdjYN75EmDKUkAmZvZhWF6wkXqMBrYo11AECFAF5k4hcjvsy1kEHHpvLjdyF85iwMV",
  "key8": "mquxZhvdz5xc271AVNV5yXt2a13ByUwht1CjuveZwnQ7FrLjTcSUYCjv9BEXRnbm91B9NppnWhLde3qxpzCmphk",
  "key9": "k3Ypq3p4eRXPmezJ1APt87UeW9o7eYwL4CcTDpNKfBuPcRrBZNkvMzbEKKcTaowwQJABXzJyoJAtWGFpqSc6bvB",
  "key10": "4CaKkgeFYr3WJ8afRJu1DTCyKJveDCS9cX7iRd78eqbSqLxgVPzHwUdZUYJkDTovtwWxzrCxWkFfTWsgkiqovEiF",
  "key11": "4SS8XYL8ETetmab8isobDiiUbKVrwHw8UgPqDVneZFATk15vdRXvSBvNXyRyDo5wGaG38HSeZ1GDxEYfi8VEvAgT",
  "key12": "4QLWyor8SyMwtArqBZ84ubZ9QhaqvBYCmhmgHxt9E7TkEVT7VhKv7qMjBw7mvS855buDrvRzyGXw3pDi4hK9JsG9",
  "key13": "483NaW4horpKDoiKn9JP6TvT5ypb56EGNKw6TucqHp8Pusbvqzbf6nZytuMuYPFDvxgfD6ADeuKbaiWEmb2SvsCw",
  "key14": "4s1heye6mgK936rqCWpHdC6HyQ8b2HsM91RHnyDrvaaEGataiK8ZH7YLJLyQTn5hZgkeK4UcvgStHmp6dF7DZkFv",
  "key15": "3ro8oWBghQJ1WuX7J74fdRBjjNmgfA4ybayqLhepX94iEkKydG7csSonu2BvNVNoAdQeZwT8f1uV7cNNkeqi2uvq",
  "key16": "55C5UWEJats4BJT4uvDNsExVmjxxTcEhwbVaViwCRN2ypHkt2LZfC6vMvsSNKZhtCeeDQ6iMhqYtFLTmPujtAhR4",
  "key17": "v5TZ844V2YymnTZRsCJ6cvu5sZBxqg4AruQgWeniAySFZFkmb3o4KPnGDhdiMMrXxN6PJMXvrygarWDsmxD5KWo",
  "key18": "3QMpZGFmMdXg12pqHgPxpJLpTf5a5yH61HcHMd5HhkHpBNbChhUnmSdhZyNA2Z3yfavm5nSiLYzrTyBWZJU45sA5",
  "key19": "2tWKerSDjsXg8NoN4W5bjX9yYX1RynETBXprNSsvHG3ZiZG6Ctj29zVNXUbipR3RJVupBVQBLq1pQG1fXRURbS7P",
  "key20": "2BD5yXyahwrgR9Q19riZNa8T99b6F4mfxRgQkugfHS5uBnJRqcRWP3yZ3ucsNBNvxnoZyiDANDpUn6ouAYwYdkMa",
  "key21": "5BKhsurMUEePrJzWKNhJ9MQv7qfkFRVGqsAvdwcGLFnaH3J98xB6YkHdwgstbKxtAF4yQtU2qsSNsZBP9piimCkM",
  "key22": "3VkENBiBnWnBMP94QvJBW6excvXnfnoPcqUpBZ7yYTJrV4jdPXroiVf69rXt9oV9VPtuiDSAibNog3HGN8WiqcKz",
  "key23": "37qrW1NqU2LyfuNc5cVv5c7dEeST3sb1jJwCdFBo68UU6QGRPp1cRKHUGNkBd3PUEHXQvQmGVYdoCDr3GYcS5Xdv",
  "key24": "4c6pQd41ucYbunz4t1RV16uhnBo9vonfgs4LxeTUvCeob1JMdZW7FEGRi28zgXZKEJ6CC42GNKdgVSrHbAwtA1pt",
  "key25": "WEuoqvBYsZfPJ3s1YfyqCa329BqERYhBnUYeuR5tWbKmRCWvio66tgki9dcz6JMzBENof8ZcghF2Dz1csNB1A5W",
  "key26": "B637oJCqQ65KwPnuB2HdT648AFq9ezYPxDsnaPBJFfszMQeKoZUtwHxXHAg8Qgxofm68FzMB6Lxc7j7vKNVnK8e",
  "key27": "usRYaXH3ECZkaCsmjPa5Vrx3coUmKfV1hD3uyPoY71mUQkbyUZ9CqCdoDtPDVhNFiSYuxFt2zhLnyS1N1SXZnSa",
  "key28": "3hdZ8De7z5ayDxNAf9nJVuLkofmkBXa1U9K3dJqTipQRaoBMokUYveCfRak6VMHpWsMSqz7K2yopR9FmUGb6iDFp",
  "key29": "5LErFNno7ofU3zphxupDePVVEiw34YpijYz6NdFpyCuEBUYy82fJugg2nxGc3pjZKAP49tK5HaQkb1XkMAdK9UoF",
  "key30": "2fxgZMq1q3u6Wz5uDsTUZ6ekVE3osV9AtUdsYWpxUDGafeQWAkLFEmZRiD3cMadtc32jhHWWNXzJPhM96dAFBkbM",
  "key31": "mff7E2jdshscZEvgKfpc9oLvv7tMksQ19tEWbH6s37TzQmJy3sXznfc9nm9XuxA2VZrhstEDXkBLs3EXwab7vyB",
  "key32": "3PZAxXVyNW41LsiXkAHZtuzHCpf4VoxMrEDXHhA97tfAEDywGWCm76gBtJoggrntCMA7jQXo9AwbkeDsM1aydhWs",
  "key33": "3QkefUMkBbAnw31LNykGpiPEPcmTsMhYztjsnVPgNBEaowk1gr4LvKJ7h4zaxVeoSM4Ly36jxUF2fLGUY1YzDJzF",
  "key34": "2HE2of4KweQcxoqbjrzsf3mrLBRACTeL7Ed6PDFKimC4nntSsAbjyY6nBv7iwYe7ECSz9y4jGWkUJALhd1jmrnan",
  "key35": "5LzLSiCjeUfjm1NpH4LPK3FafTsQJJeJTpfRs9C1wWp2XVceCufaSrjbp1KaGENtufeHrV5yQt8HNwUU1Y19XnMz",
  "key36": "EXVH1zPqxkk6qQP2fpUPkTwdu5BXQfBBThCB7vXCZuCwodwpjbR7sRWSsgZ8jxqrgLBWN5DJZk4SE2xXAczLQtc",
  "key37": "caZYeP1Y5T6czbHCfDcWo3DaLT1xifD5PLohoR2JYfuX32yYpT7p6TTWon7CGFnJSjeZoK2289YWU7QNrLwA4cR",
  "key38": "RMCa1AjGZL1oaG8VJE3pfz35tcQ3dbyraAbha4c4VcEzPCspcFZ1XphDQMe5AXUSE7tq1d9SBaLR6bRf476RuqF",
  "key39": "4UoeWdMRgib9yTk9CjvQHGdcEmNqoocJyKd9pppuRzAMnT7PZQAdrM5vYNL377BzLdRvC81cH1mjgRcgnA1dUxgm",
  "key40": "5swCcjTev3CmxtsDccdtDbr7QiD8aGiR3zEFGMsMLptwFXSLob2kuoTvEcQTrJKusPP835dM9zJMGMdtKtKFD9Yi",
  "key41": "4SJThcrMS5PwkHXBtpzmTAN4vNFxZ7JsBcz2BtQ8JVsSxnH1vUmxZG9MyJNP7Ki6b3tCG9YuXtUb4UGHHMpj2X2f",
  "key42": "3Sm2Awj7yfXP1EecBGmndwt2trjcxrVERpH8gfeVXyWFuXMRKVWRMEyywYaET7csz6Dq9ztKEZzY1eXkXFaf8r2o",
  "key43": "52XzzBzch8PHxfYrbqDMo71oonenGWKXvtsHq8qxiudWLbEhiNLV1YR6J7iLZT6X9apCBYMZ7Gi68NWJMniW69Lg",
  "key44": "JpTkMarfrW2rP2nV836j8LtESrkU8NBbJqhYkEueZfsUpuUPjmmRzK7Mr9NaSHwC5b1mQqUAGcD7uPpmrdDPGQu",
  "key45": "45DNzALLQxNccuptNgHoXFAzuNtLL4LUZ1eNCsfSg7rAm1qExuk1UNz6MatVwhqK9hXATpk86ihY9Dy26ko7zfo8",
  "key46": "2un6qoieFxQ24ag2xeg6uxjB9d8CftA9GbKB29Pn4SUJPHZ5VzGWL6rwadM38VjNDBoZQTFfFYFHpRnC7BNV8gXs",
  "key47": "2TPz5E21pZyXWKYJ4qFJijM4qz5Qd6Tw2mKJhPhRweN9pzLJMKrS4KDEXZXkDTw9HGh9yfqyon29t7gALoZd4pqQ",
  "key48": "h1SAg4oJ5wANVYMXjuh6gp31mHhypSU6gvkj3yBC5cYRN5H3YbcambLhTafdm7EifiB9xDXqgZCicBQsHeQXAG5",
  "key49": "4XEsPxBmDmsevznPGxtoDuaySATFrgQ2hp3nVv9rJ7oLRDwCSSy9BkdosSwPt6tNBd1mv1ab6ewgnpW1XtVV6vUz"
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
