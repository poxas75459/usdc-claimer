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
    "4gv6CVkNkBwneT3rzDbKbRNa2JV7MdCCoaNESXCGbPZiQLenuadZCMxvrSBjGjxeHujwgdP7nbStBWiNg3iTaHjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B9mNuWq4eoPPE5xnsWPEJcs66dttdksA8bo4nDU36ogjq1BRHmeET6cuYfbfwommhD6nBa87eravk9gLA9vk7xr",
  "key1": "Y4XyX2BexaYiDh9wJvWPuGoXyqpWqkFUK9Wq3xSsVtBseeot4Y4woL7MDwy7rSHDLxuA7isiZSJgdZinWxedcqa",
  "key2": "2wnqwujfkPXG9vv9sC8nEb9LL3mNHC2tCSRjYBbmBFTY5Bo45UokwCtx6EXAB5Gr8vDkJn6TYbGsCB2kKPvpp9K6",
  "key3": "5N2nTKz3rq8h3GnQofyDXF6V1dvgoHJL8HsuqhyMwLvhnXtyNMR4Tx4ERJeD9wPzvGGj9AohtbdrdQE7w3ZFWWiT",
  "key4": "3Df2N3VNgW1raUQuhjBMRcMJismd4QiNvp65Ee2MPQRbpBob1kE84cqRvmhkfPQGNwGYxB6u52GxyLjHG8vsJLW1",
  "key5": "2nwj9cLG6AtSg4pZM4pBCeVTnuzP5pFBsWC787M8LfgLfuEJ1XGxJMK6o5G1R8qoNiBfRkfmY1hLqX3t2cRhtxyy",
  "key6": "nh25H7GsRsDTdPo3g66ZgXWqbPL6SyPp5aKxt5nYCeZjdwCbhArcfj6dzi2xxm6sq6guEqqZ75nkfvWA9rKCBfK",
  "key7": "LmaQWomwYaNETmgntmPMVNcCJ5Hv396SSq2FvvMLcWFwKk2zejnbF2gnT4rJox8vS7nV9vwLFnXpkedrVSiE4s4",
  "key8": "5Fyt3XESMt9JoNzH2wFYnVEFKijj7h9SusNVaCtmXAB1R9WpM17He9pgSkLTpmf2mWDzjApZEQyc1CsZKQugP1dK",
  "key9": "PZofb5vARZJXa6RNAj2METpj4dAYcvg4Af3DDs8SJSD7pqTy3hm4SQjVurFnQkREqjt71z2WqRjHP1bq9WSXEMw",
  "key10": "Me4ycVrbVA6V3HttE6ZtHs5HmFHTX6B4xEPZ71bwt9Z5D9uWcoe6CndCyGjARtocMEQQsUsq15nVjserWjXXN8g",
  "key11": "V1vUmrCoaAqgKetLS2GJf8mYKPjb354yrR55UUtJ2ojfWQyk1S3pfWGodf8UdsuBNPWC1NFLycq54vgeTTBArR3",
  "key12": "3U3hsxtyo6DkiAddDQJUxMTgjgqpdasav4eFgK2WSBaKkVuefYDFaeWQNFJWvgdgf5oDaGZDT4APawFHobGRAThb",
  "key13": "2py24gFh9amQitz1aKxyM1UX5z5V5JS9bD1zmyN6PQa6x7fwAWDHMEd7JjvqD78LnnvcLuTZXS1zFmxur62dR5uV",
  "key14": "4WnhtcGyDBaVdKfdLkbvtqybt6kPSqF3urLbo8xwfSsne131JFRiSEGejR9NHSVpHhSf874NBXsjwyBH8qJG6pja",
  "key15": "4sx2h4pQYw4bUQ4y32dY6i6UC66RjCxQkmFLf6ENrsHbRAkQbVuFNRascHfXEedPQuQGXK8dXknHd2VWp9MmCZTM",
  "key16": "3n9qFtCzyXGYnH3eWrn3GDTRGsx2NJPxd8dUCfba1BP2X6AKf8CuCniwzpmT9JwZjvESsMfrAoq98abMapXDPcKK",
  "key17": "22wAGaufjka75w8j4yDZ8Hgi1DNR4gzh1hxq5qrAxaH7RQkDeKiEL5tHhQAhpZZxgDCWrcWQDw1zTqvo2fjDerZh",
  "key18": "4ntmTs7RTKJvLpe6aHhKQ5hZ2ZZmgNj4AcHSLUenHi591hDVtvk9XJg5skRq7f4bbMYAhdvm7DNjxiRHUeDU1DHR",
  "key19": "54mzF5c6RgE9X1ETiMG4mxGwWvdyWPvpY5XvzHhTfo3M3RwW8gKatavRx14zGdoHa9FQhC8CdNeu4tjNUTJ5pVw9",
  "key20": "9ZN78cNvN1KiPvaN5MbEktuHfRw5cXmmbc3So4EbzXhD7ct3Mg6CRvmqtUcGtMbD2jS9f7LHbJio27XzckY3wGr",
  "key21": "2m3cY1Xz7NY42zYkuJAqLyAkgJhD4TW4TCubb6F6J53biAtrX5WWPc4vUWKPnBYMoh2KLEJRMKQYnYdVQMyRTeww",
  "key22": "2qoFqW1R4NkqaWx6p7eBGYvRb2AgEAmyNkePh2NhXF8PisyKCNvScd5s42h4Vec6U1NtDVKTbqnD8UZbCkowNHiD",
  "key23": "45Wx6UHJQM8NENB6z31YNeXqXquSXkYM65FyYF2Jr8uVCTovzS6P8mda4KFRjy8U8fEri4ckTvjiStKwCiZ33SiR",
  "key24": "4QwV6dqey2mqVcUW9ApzPE4bg8N1ztSTWLxXRRAzNYkiAKAJdLDUWvYB6BNc8GQn3j9Yqag8tGjjmXzVbpHqiC5F",
  "key25": "UrLCp6vrdFmMBeo2sQqcda1hhsxkcXeptBExuKqM2tKwwZZjrB5JNVGs63xtgmfkRebgjeDfDUMkZB1geWH7nHS",
  "key26": "5RFj5Kk55PnRyRYgw4o4ySp98WW6ixa6wu7zwYur7edphK21XqEr2w3Nzh8kpTjU2c7FzG7ux7m121NmAL9JpDo9",
  "key27": "4d6irHBd4Cq484wkeCTdj5naGZtdmna25C5hWdiJYowz8kgh56UjPSerHpma1vXzDxqrVDcm7J4cw8e4EYgp2Xu4",
  "key28": "4pWu7Q9LRDMRwRnAD4NMMVUf4xNSFuPqi9jZAz6DHxg95SdBmmX1KrsvNWVM8Wr8vcFLA71SpytpHsTTCM5sFdvm",
  "key29": "3LSLTiAEgiC99ox3QS9xKeCP9Ft84uJW1BrvRKQd97KKmziadksWogT9txefvMfCpsamUSNFR45qikDCvAz8ZZ1R",
  "key30": "3qAczQE9V8UjmJ8kcCC2FYQij5FeYgaChmCKTwYf7MYFY2U52Svv6nUV9SKQL3FNFcgZf8d19x8sMCnvJeu3Vzuo",
  "key31": "3q5axP4Hv1YtXoVonGBmKF1ZtKxJVmCMEzZQqvWPHDUdwrgyuE4AzZdZuJdonZ7ATSdWFLcMc62XCgV5CYkZd5aW",
  "key32": "2xJuzfJZsKgvCeUW3438i9LTz1FqanbzaJyVYVdJw2gUPzkEQLvz2nagaQBE2hS3ahjXP2Zv9JrWJ9H81ehWMwei",
  "key33": "WagXJ3g4nchDAHiR2pPBRppFNqjyTyHUQyUkiCUPbHKME6iFFuDibL437iTnswyU3pqJhbGvJd19f7ty4KoZ9wY",
  "key34": "4WvCrtUG2nENWaEsDzqK9cVrvtSBE5xDovR512XPQ5QXiNra1A7bb2izmxHGmbMpVU7PTYJcB84pw3St19Mxs4t9",
  "key35": "3M3hjG1eUeCJyMHHwQm689mHTBEfjFFJkEXvXZrcbvKzgoUsQPuMvnnyDp4eQ9tyVWKYvcti33kH4JSb3aKkkCFg",
  "key36": "2K1b25KQFYPrKcANbeq5Do75iNsTiuiNVwPkodcjDqgcqXMzu3kNKkkEGcL74xjhA7w1BYoEeDVwHeXkt5tNWK6U",
  "key37": "23s9GWRmWQKUjh6CAbitxcosQ1ejqx3FFeZqqScS6mYw63TxZ9adne8uDedkwin7mb9kKUNK9t1P4V88T6ZV28oP",
  "key38": "3DyNWcAD8XvAn8i14yDN86eZoKFxDC7ojeQuKsWex13KC8K25EjMkG1SNkFDMadNvqbqoDXZSv29iAjCD6qHBzKL",
  "key39": "T7CXomYtoLDNSkfQmzX9KCGZwoRE95szhWDWmgaJehF4T3iavPct2jKhnh4Y6m1fCEmFj9neH2GN3jRQ1zkbc2V",
  "key40": "4NswwkUZzAkpPBfM7VsVbSUopKqTyXHoXrLzejhXJq6vdY9eqUoc9kQSuZgBfrRd4KyM79EQbxDmnoaKLgok5u2X"
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
