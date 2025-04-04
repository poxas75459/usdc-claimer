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
    "4p47bvZ77EcLCXE5NzgWo36kVd2U6s7UY3rgxvXzp5zTygFtJif2RKNcLT5TeY9ZCR4gCP8iZs3yajZ9ZB3GiN4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vPec1GuWwxRprbhxBDFHX33Fdx6Bwb7F3RAe3CVJdaDo4o9VZw9fag5Fy8yvs81nLBqUhh7fyMduKsQPHK7MNF2",
  "key1": "4hNubgwWoUqnrruZJdci5mF168MbyQPmygnVVh1MreLiorgYscshUmFkANxnwyqJngu7sprkuipvovYueCs5Hwxu",
  "key2": "EbTo2LYSiaWLYcezvbWEvejd3vZ8F9PSJtbqJAR5djnr4F9Nkrfwyvh9VXWYttDk1BhsQHZN2wkJiip4Kot13mR",
  "key3": "5PkhPNt36sPSTRhVr6RwWayQW7LS6pUDcYJRHWFWPTFY5m2VSDJS4fZENJPwHqB7XD48WV8rhp9DVb1UUHoZ1ibA",
  "key4": "bAkZNjM7qttjSnSpmoVxtTZ14oN8SsTtwrmjNup14V6LV3NwZSebxLDy9tpsEVf4TkUscjbjz1v7LjX2NLYhWpD",
  "key5": "4MwxwZGfL3eioQ8fzbKj78QXzT1Vjok1P5hbnUfkDKMP9itFKHjPxeYmHdyk9xmKhcFbmwGUfsenbUgLy9PXCDxr",
  "key6": "vAZPsEtpgnoykxf1KiVoYd2S64ZPccSFBcZZ5RzP2D8G4rEpqM4HXtsEfh9HWk3PbYEr28u2vqufd6EpQDd1HzS",
  "key7": "5s1kVR3xeCsnR8DS5N1BTuzaoffQzH7KRScQm6oqUkBhxofCpJzgLtTnKBicW3XGUiEfKm8BEmTsP97ivfdSnu27",
  "key8": "22pigPtsyTRzRiTSwoHoYdi7DosqruEf9YgFEHSX4r2AbCprmsZhX96ynaRNK8FRHtTnpFbDe4dCaVfdbSwu7FtE",
  "key9": "5euW1mMD6qQuda6fWX9HJhE2zMke78MRJv8rSYGRw7nUdQzHqDohYqUFBKVVx5Zx5gmTS1oJZa3RA12xvqp1gcQE",
  "key10": "657sHdwqrnpuP4gwrr8F3g5hrasp1e7xhCqVje5X4DDWaGutwL8LBfvjrwb1uioYusoCiooca2mPbowSgN89Nn7R",
  "key11": "4kuA2d3kbLxKpByJjv9M4pKuuFjPEzERRUzBbvr1ZH4E4RVvZtGP3ncb71pcRXK4CmgXJdhJSvP5uTZVfUMruU9T",
  "key12": "3P1kHvvNNHSqZoa3iDDtvS9KFPpSrmQCwWRmLTBmAa8SXYTGS4g2prrbffJJk8QjpmFwan6VDNRvG5Pvwx462pa",
  "key13": "CMG7jcqJQucR2rYvomVRSJy98miCacDBKRomEAyGgsxowkcapjfA3MQvuPkRvNwKNLL1AguPuraSvhKB62Jxc43",
  "key14": "5dHunA3AQ7VNeeNdbQGyZFtiSGbeNQRDGREaruwZFMuFhGfPH5YzCU2SwS7KNGdgnVn1zLzBUWcWfe81HmvrAzuU",
  "key15": "3oUdDkfFXnWKfCmiyYxadqNWtxATumx7K1BpoDiXBWUD5JfMzThXfKUv674RRSWjgerk9dAMeMEysW6ppkdziZs6",
  "key16": "5zvNfEUWE5LutmWCdNyyZjmBcXRu6Z2jPBNYB3evKkxr9Qf6q31AH9p1S3rjJ2f3wbpDdSjAjj2hfpAkTPc7HXoS",
  "key17": "3QbsNFXdKtjXJeydSXCNZhobZGjS3ZuKX3vBASr4bf2aZovUmPRHiNrGuZREMML96mogWu7MthPWb3tPw2fuH1KJ",
  "key18": "fyNan4LFA6TiqALK2BUWyYWoogC38yarbVn4YK83qGLDfPosNZZvSEsJ5zneofhAmyApidFgve7UxrKPvx84Juy",
  "key19": "4dEcZ5o1mKoPnpa6iMpEP5D5bwxdAXaYAycjw6mQ611ygGuXFQyc3Z5eBju3m35rC3ZQvSJgsB9fiMdrTSrm3Cjc",
  "key20": "2e97nkPdr7ysPBZZDqq1fThxfjg723AGrJ1pmisJGeywwHvyRk15DRjR9R2tcmZLtTExWHXhwFX7WDYXFJxjiwF6",
  "key21": "nMTnRnqKEGf1fEDYcf68G9Nw9CR7oWnU2F1SYB61xSrzpZfKfgJHzo4fGY8M88a3ZAagViVJbbdGpDbceHw1jF6",
  "key22": "5o9BsLTRiy7Qf7Qb7QGQDK58g7TWkQUWtHfy45Az2zdwvJTbZzpZtPpMPuDD8bhKkBNjaU4B5a5nusLra5WdoSxr",
  "key23": "3MaD1RxVkPcHa6yWaQaKn5CYhtfKFBFmRUnpcxq8Nqx4c2ou98qDBiJwNZseUT4xEP7DNLKug5osHzP2UvaMLy4Q",
  "key24": "41gy42g3de6buhrtZoq8odrYgMriovWzNmwjPShYsTg1RTLQALmobGFdKVoPXQ2MTYRp6xxkwkFNv5nT9EXA4Xy8",
  "key25": "qvgXKg8jVaegoTts5t9N2Rkkh7CN1bzJe53qaiiQPcK9mk9JiL2Sg3kFULg9AHSgn9iwn214Ndbh7J2ADkgABY2",
  "key26": "4By8YdtkRJmnx9tFTPaHcMFEvxFtuHSEnSjpmUiCQwHg3sybYpj4BRrftd7AaKKR4GzGQdB61DsFF9XWUsyNuMAa",
  "key27": "4mbLkvXAk7DyZU2fMUcwo7MPPkdbC2VJe5VMXEvmxxY8kCcteQ4FZ57rAM8V9WAcVVpAUYtzb9Hu8Bb9HAzQ4QJm",
  "key28": "4WQ4isap6vHsJKGp2S5iDZ66vFubHHeum619HfBNwsV5G9SfNDpuZTzDUaGUYCpJA6fkEM4EJUTXyMSEiFToWR1m",
  "key29": "sX1b4cAYcTVMgMmtkski1vseB96Y22FJWgKs7n7yfwb1XKwcwZ4r2ugigzHuSGYWYd7SmXJbHtSvRcdugAa9uBc",
  "key30": "5EEPxdfQ54WR5yRMz8t1NddaHGgDNR6drTyWn4iej2Wk83LrsAX19nvPZCZhg1AZjVamo9iYNGrvDAu8cMwgar7h",
  "key31": "pZYqorrbNiZ2TPGNW39iEros8TxFPwSKRBYvtZfyf4f8Aqb13pwsNVrQXtdTcm9QiY6SppubcJ6vrq3yS788tX5",
  "key32": "2j692LgcQvQ4uhWVBiRAx9BBEmaUVjPoECJyTmdA9JhuDxezMrhUfEGmnBeYFpP2cXGS7J5V7DVRtFMJkskRV5DR",
  "key33": "2oH1mUbBXSqAS4NL8zjKUtL3wDLRahkcD18U7VNWXkfRGQjzRvookq6NaKbM4gmZu1m9pqP41FCucHBQaNkXEgxe",
  "key34": "5ZtqdWztJwFWFV384Z6utcy59dHw6bEwz35B6jSkYGqm6VRi6uSaGsqQFRWhA28wXVkGWzu7cRb77GDnu9FXDyTt",
  "key35": "AMZW28ggpNQiBqujmGqEw6drrjJR1GnpDd9wbFuZxKXXTJo3vHvixqckjVGtuxDLjAmKWnF2wn5mL2xVz93mL23",
  "key36": "62ueNTvFyJ5n8jCN6NsjBjMgKuZm5VqaAdUZ1qxgSoRiwhufH4nEiU495MrSqF4BZoDMu5Ui2Fuh26pD8Npuff3k",
  "key37": "2qq6hJUkGhBurGC7T6wucs618ZwxRMfSG3qH5PoZtzs7kVgc6998253Ex3bcMHEfaQDz1H8wsdVDxFmQPunjPLtz",
  "key38": "5H89NPfFdmTSwAEsYz7gfAySzHbzJ5UciD41gzsJzL35FhjmjdhZxechRRkThNK9q23bRqVn9RogBT9BbNg67nX2",
  "key39": "2qAJAbJeT559AqfvuRbAABqWZLE7xG5Ff5o54qpv3VRHdpFXDeK3wMrEgR9NvTRnmheahqqnVstYw1zXEBeaUmUa",
  "key40": "67Lpo5YeykCGQtCpYy1s1PrDAt2hWSp7NMiYMW7QdPyCbokY7xjvthYBq5mBoNreUHkHX8PZDhNHdFe6ykNWxG2",
  "key41": "3mBnGPQHhy6JGtmB2cF2W2Qbu5FofejEtzmsxBcWMCP2TvLDmfh1g7UV5nF7edDLSxmtygGDQsX5W1aaUizt3dDY",
  "key42": "49Zqq1HQWckdvpVHQb2NvpJiyGj7sPY6gAN5Xq3XhZU5rGjhHVPkKmxDYgy8ipnrKF6ykubw9FPZt6CRxcTJEyBv",
  "key43": "37ai9mkh11RTh66Uy2e7CwkXiyY4NWkwBy1DV1sYByszEpMbRfytpXMgHncoUrXGTKrUtS3w5AjBmUi7FPFUBkwP",
  "key44": "5WiWp8ftUaNSyETz8sfwDsAfM2GLiDM25EZWF7NxCN48m9iPZHpgrfrDRr3KzwmyrwX1k34dv7gREckpRue3Fxxe",
  "key45": "3zZpvbzco9mwdEtMn14hj4eLr5vQmZyXPcvcHmJX6nmiaJzQU4RkJMa6caKuJaZiwX7staRiXzBKvayX2ry6fdm",
  "key46": "3MAZEgMmCk6v2BDYgjq14qRhm8fWWFjBuwn41etrTkL4KDNaUvZXxhfxU63vNqmMHBTEdDvTQEaAk9w2bK6CsExP",
  "key47": "WnNAu48c6Y5sbdnMJ94GBiHWPk4bwNCQiCEWozY3DW7GC79TW1CGbWA8rDhEWyUBc5RKwJb5bh6GxJhq4iNjhRh"
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
