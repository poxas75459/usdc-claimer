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
    "24c6p7TygqLUKoEomCd2VV1Kz2jzEe4PYbBJJmL2AtqYzV3rA9bxEmNT8vdmWYSe5WTekVYQ1EoFizpccr99oXcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gNG2fPYrsNtNRA9x75kmyLPGmZvzzxA8exHhaZnTpLpYLzgQdmZ9sowbwg6cdJwH9mCZxpwJF2kC4SsQvxueQg1",
  "key1": "zrdFBnxjQf8MGGC4viL9m4R2CJgWyiUvM4sYyCAD8bbow57eRBMuDYhNcY4rGJZy8dpP79onZXcXHaTC6hqjwqJ",
  "key2": "N2ia8AgepBHawUP6uU7kYr4EvJg6V35VX8Qqs6AJrgF3CW59aJpQbAeN21iiei5ubKKSejCGa84RGEDJfZicrxs",
  "key3": "27MbJcoZyaGFPhwajzoF4TvfZN1621A6SMH2jh4GodktsAc3zgxUBe6kPoJ1MC2GQnXcLA54Wde3QtsUD5tp549t",
  "key4": "ik8Zdch5r9hzqhvxxoEUrpnRxkhqi6SWr25VZ7D7TfHjbf9xKLJQ3tiE9xpHEaSyiD9DDtBRXbS5n5uMFieSEqL",
  "key5": "5154bpXxzipngpLBfQyRAXRjDnvadU2F5XMTkDKEYYFQaKzjSDjMbSa1GDcmXfpb7F5yWGo3ajZCbKSfvJpVTMjd",
  "key6": "2ZzfjWXGEdPYPzQhtkToY2MULzFmLg9VGpsvy9hB6CQHUdKVmFtaMYvQhV7zgUxA68aNEnCLAJWmLZzsUPMc3RBi",
  "key7": "4oJVhzNjRexVcg53TtcEDKYKouEWByWPG5VjgYZKM4tMMe24kv3vsWGDLBmUV3SwXZZr7JaGp46CmFE7mb5zAeQb",
  "key8": "5JKLZ45q8WyKJXYqNaxo7aiKBJTKbCwnv3dAvF4q1ScKMq7XoDwPkvURRZ9BCig4NeQaGGJLbPLfVN7pYiqZMTv1",
  "key9": "36mMeyoVqV7q1fhpcM6y5wwneQWgKHX8e8bxYtJ9PaWnTaVSn8EdqZcyfAZTPCAwDLyhzG4F1pYU5U4Digk2VYL1",
  "key10": "3tev8MDeZn6mUgE8kn2a4M6gcuRmh4g7Lsn1UchgeAzUSxgB6EiFmhD6Gf6srB1FUi4bvCPsMLsQoJXPaoBfaGza",
  "key11": "5GqJM1cvc634wYJUHsVX6TGTYhDdAbE13cgHyAFh41Hmo2x19HvTfP3p31MLHV57DY8bXsfoxJjr69ycnacwDDmB",
  "key12": "53tf3GyBQRBYbVyghVZFT6MpvRXS9ByshPd2VgEM8Tp78VHgVhUbGraYjhXjLAJPD26uo4RqMotGkUU9wunkE4W1",
  "key13": "44jr4KJrLXEWmdN8PsghHvweYaukosCXEzdotxpPpyfYAcCnk1s8J68BBw6ibgU1NzAcowCWvqgRWW6NURrnNoVh",
  "key14": "5AFVF6dW627B9czQu37hWFK7NQN2Cbf4Rb9GABXGbx5S5GyZMRXvpzSRZitT8T2EsE3w1DExn4jCbCYjgzYKoocV",
  "key15": "2wDj2khwZNFywBWGrtrYnUzTxakRPircM6rAAY5cf6ADsK8ZKcEPfEd7KhMxJaCqPpVRpCE8rmVmfk7Dx1NB7E5y",
  "key16": "Pt5h7VyVt4eRgUnuVtSDoRQpBRdHB3J2QNTnUZiMQGvbb76mF8UYxaDt2j3uqfKACWF9YcVPYKxe7VUdY2cmX43",
  "key17": "4y9LYbgyRaeLuYK7xxbjkLyDjYpzgpLAgEMpz9Fuef3tknBtdLjHk2bXEosTeXZ9Sfi8jkEHzcE6dbwCkfN2KqMc",
  "key18": "2tvyVatxpzp6F1K6GTwV1nLNXW8DxDn1HkLdzwhEao23B5LaYVFYearMx6rJQY7hE4sCk9KrarCXVx4etf784Hcc",
  "key19": "3eXVw27uEdu4BmKN2UEykmCyD4beNsDj5tfnjrKa3L4WZ31eZocWyk1X6u7tmnRkDbKwTobn9pqoodb8vcT3RcS7",
  "key20": "4NCeMgY6HDp1VhjX9jKtSYeDMmZ95gMW2RdBCdVrAoN8sPKBr27VF9bfV52NW4fqkyzt6wxwC9b7oof7oC1kMxW4",
  "key21": "5Rbt3xdyzbomoABCA7RgcNZFVQ59HqEPSirEr8Reffda4CibY6FYWuLMZ9qkyKnFJ7rx8Q7BSAbR7APLaEgywVAp",
  "key22": "2H9i2gjTUx9oLRbs16PtWdFCst13VdfbceNk3urzetNMWw3kTVnNcVrTZfFGQd2UfwLF9tPoxBZksLW7KWyBUmdq",
  "key23": "4GN9mcXzZLdcAWs7kDFhcRAP6wHcarThMK1hhpFQ6G5NBtXcKPFtJ1UCu5kwSZUN6T944ryhADa7KjCFfCqiLx6R",
  "key24": "2vU3xtQgGCMTyJaquM3UT9s799V1v1DHYgkNF3P2ATqKj2c8uuZpsqJ9UhoDdagHJu3rytB3tGpYAXm2bcW2nbWP",
  "key25": "otd2SkFVvJvES8dCABJpAChf4ehoAkV4kfmey5BtBmUyaSSa2ygKmRDevZWvX69f8uwQEjgYgaFVjrRa5wd7upr",
  "key26": "45gCJFdaupT6t4sa2zQMZpCbFhQ5LdkTSXWY5LMAuB15FrrfYMr7RDKcmUsN4KQsdn45ti4nmVj4FJXEjcbCDgKs",
  "key27": "2v23pVTL35fp54w6kCkDmKHcPgCuYMnZrTxaquuPkotPtUpkfS1wU2LmaQftkHqPdHcfETzhViMEDm1dF2rMGu7y",
  "key28": "5faiCf7n2ZcAzP6jnmrqJzdL3sL1eheUudtFQMmt7sp6ZyJg4FyTUczaymVGi332mU7hH22HQ9FeptXbSp52icnU",
  "key29": "21JieWBcba2UYANH4sC3GGaV57FATvJbpyy6hMue3bNixDZGK6NoyUBa5pixmungB6jNZ89LCTR6d8xyXov6T8Gh",
  "key30": "5a7TTDwFZUriSMxioHQF7f23BSEBZJSpQYLFZUAY5mKyF4GmZFAtAhyyuTZph29stDYB2gnhpZYqT6b8VK5DEFDR",
  "key31": "3MFj8FZ3Gdgw3ToLACt1DtaACkmnu9p9ghcMNwXh3ftAGbQrHkUehbJCCeLF1d2xCyaUxtNXDiTJq7NagVoWkhqv",
  "key32": "4PnS8ym5fiEcCFQyr8cnTDpqKMKTVxe1rAa5D3mpkcbJReoRVvKECQbZWaKvRvf1pUJbgC2me2v6BEFWTBkK9ucs",
  "key33": "53a94xGzuXwEUqXJSxz6eBoULNDPCa4r2HquKJkGWHxgZyiieZKK8rbFT4c9JaixW5otmXjMzLLM3wrNFXKAuwpe",
  "key34": "4tFj4Pg9WoaQi73wQiCKoXq6XdpcZhgutoXjf78ktuwNjvR82wLhTUFnDxSnwbMpyn1LiUni1iGao93BSUrZFkfK",
  "key35": "4kPBVgS3FvrbYyPcJwY23wDJmDBqaEkRyyGR5hRfW3p9pvmTS1wqNZw5zX6qpjhq7331ccQy86DTQ6ooV1zTxXAp",
  "key36": "KJiE7qMJWo6YpYvXbahzevWagUPqUSt3yGABy444VDHFdNFntgQY7FDgUMq3jZo2Sa1PoFJwn7cr4ZAh5zb46Qn",
  "key37": "4gTzyAw8uqF79NKSeVX2TGJipBSi2Ndks38L4MqL9P3H6aFsfoQYHmG4TayrtCaSHE5EQ1dT429avxDEnM5bnom9",
  "key38": "577XqGs8RaqRXTMyrmBtuGkXGyQhAeTQUSHZz4XRKzS6qpVcg4gHspae4SrS1bYyakZrSo1zUitYm7nAema5cpwG",
  "key39": "281e6VA4bMexNDUSQ5PRZpWcAbV7q4WqpF9GpMkZTRtZQDThpfKuowwTqQYpFh7Vig1418kRukpi5GTJCPB6Rqs3",
  "key40": "39vneXWnNzcTyMbBm6pKjPBTgdqLhexEikpsu1xWkffMjdjXFb86fg8yotbZJvhwURGjqyTro4tTpVEdzGoYa9zH",
  "key41": "24thBjBruNRBzorWbAVLikwdCz5sTcatqUuAneJ1Rt1w7zpVHkzbWqmEJ3NntxFMcKKLT4CD4aDR5k2GYg5fRXka",
  "key42": "5cXx2eoqdKMUFFKfLzLw2osfAYA3yEZGJuyUf7BxLYFFy8yarhSYZKH6mTRc3UK2AcTfvwoto6FbdDxsFVPEEsvn",
  "key43": "3Hcz3jimcu3HJK4VPCuxko8QxRn4kW3x3GmVjhWAQUxjhuM5sZmpugmxqhkSX6uyszfxWaTrK1A8KTjR2SXeyUfy",
  "key44": "WnAzAcY2trjGhTDvu1WuXNY2VN5qNgVF7EWtxLTUPTRZLGZu4VCd54HvMBdWJnPEFEbjmKcAbC41M6E7y1HiTmr",
  "key45": "52WDAaDXwHoYm25ud6wWoLbPuvi12AVYwy8hWKvvhzywbrij3115PQhKHbEA4Wrg7FGK6qj7DssYiZMScJbpkzf5",
  "key46": "5ptPQW9RqHD5EmagxyjL5xqWtrHoxvNSURj7XsPMZRa2xh7Lc5uszMCNJSWsyovMweQDvqo5QS7oeqoHweCyeMiK",
  "key47": "4EjKHcN5n7fVNVseFGx7dm8U3bbwxAVbEdW75p84fXYX5rj5TGmGHPb2JYxMBqCaAqrsjK8jw6xMDoGYMZWC32CA",
  "key48": "5LGjui8MMVAWrmX4gdzBHf8YcsqTNWR5YBtnp8HyGY58SfNVmzcVu75X7GcBcz6uN1RkAVW1rNRHk9ZDdq5HRmvs"
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
