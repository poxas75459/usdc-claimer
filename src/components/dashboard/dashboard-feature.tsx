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
    "2RqocrqDfiwAQniPTs476cQsa4myCtoPNQjVUkXKpdGo8Pk5cPA8j3Q1gyApDTwNZXVqo9AnKGoxNS7pn18C9GpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NfQZHp2iFfnHzGZxeJ6JsEeVD8KxHPazSfHCbS1tAKmFdko1BbegVHuh7iWLVVHuhEoELG1KEqfY716ZtpKUGkZ",
  "key1": "2ezo8xP6TYzfKL2TdQj4QwPB5jNhbobM4UoHtayraoqoHvaKH4aguM6MNY6FCCxgrydZoc6nnGpatoYZoeiFdzpM",
  "key2": "qZG89wc4dJ7Vfkjd5kghLv6id8j5ffUfdk7zKaeGidMWXLjUB5z7xRZP5ZMpPFePeSSkW57jW64NjYrG6wMbTzK",
  "key3": "4TsQddGvcLexQXFcS2Znrr1iDzLwukqNX4uzQ1m2eZoLRHSP8oKjexfE9gUo18fHr5utxaNRuoYV8P7todzZPQ5w",
  "key4": "4EaX9tXJuhgMnkcvhsPCF9Sne2uFoUn2cvc3MuAgvZNZCv2vUoAFY2Jwk5mfHxbDdKntVE3cCoTYVGweuKHY2wyy",
  "key5": "YcbeToshkAyU7fuDQP8VjxP7BZPWT49JrsTdKvdL6hyGGiChLiYwWenfZS1AdJRPNZzjcWUDJTVPLgutZCBeCRD",
  "key6": "3PuzBiHbkE7Hx1JL5ASiRw24hyfumA5P5zj9ok8YHBCgbjBWFMjVpugHabTWRDmENRwDhgE2S1MRyR8CZNzRvPUw",
  "key7": "64r5Wrd2HBmjpwBsr6nPRu7vfZYba1EkLo6bDqZdZmn42fYGXBfdqwFuajqF6hg3MJzeFa8w1SnhwcKuD3CDzsSL",
  "key8": "4ry9GmnXMCS3ripVggPZLx3ugTLvbL3nFoPkXj2C1LDj7GAh88V2FFzWeeENf86C6gfT9dQ7YRxfKukCtE5DH82b",
  "key9": "62QWaTtKY3sA6RZG7ei3idZ1oBrtpsRPeSwTatyV79rxNFAFKfBBRwiPxhUL3uH5cmX7of6B1rxe1Zp77EiHnpGr",
  "key10": "2CmKJnsrkCNq52QzNpFcsiRZJojKEoKCysREN4pbv9qPpHVegnBE3ZgmJSMzQWHTEjFpFEmbLeMY74zawZjXBa2C",
  "key11": "22RCvBHPVXXzQxwaQX6ZPRYufDRLerwT5UADDGh8rjf7gbaZTaMHp3P1TRQubfV6EtrZKNGV9Vttv6FFZ1eDL7T6",
  "key12": "5zL3FnbGMFNcF1XtzQ3NK5jm65QkZchnz6aRix5NzvVoLq3xNKRhrNmmGm6BwoahT2vDkxteSc8T2n3Vr1ynHKvZ",
  "key13": "3uP7K8LE7BynpAk2qQ9nkWLRXJQtoYkskMUTRkP3yPh6gqGsdq6P6rt89fEcLknfeuecv42J3i3YAGukdPeQiDdp",
  "key14": "EWXidEF359yLUKB33cKVWsp5ibVMBg55Lf7Nytw7uERk5Wx7Zqs3cE6bFUq6p449sZuWVJELLxesPWmgVmT8WuR",
  "key15": "4zBhpGUoJC2PhAzpTNVXa68N7wQG8qLjjrPz2mfmTK4m9tJNAiCkCRNcGHJgdDbPx2sALF3uCCaYq2by7kZDKVBZ",
  "key16": "5vTBdeiCvzCsZtEeYAYXf6RCpTRiY3VGNKLoNkQ9ZpCyDqstcw97vxJQuGU8LRPdbuayVsbQ1eQhGPmKBx8pxobw",
  "key17": "5wFsErdUUS1RRdxKjSALFncgTxpur5g6HszL7i3tT8uBNWhUQHW3b6gFneFhsgTrSa5M9JK5yos8ABe59r5TwkfX",
  "key18": "4toBnRZUW2srWYF9Ryxrg3j2y3Dfr4BGkujH9qRQAnGUf9edpR3Wyhee1RPsU48irjXVrcRq3gUtdqGMv1ManKt5",
  "key19": "676vqs3ePutx6e9ZMTp8vZzm8GLx4gGGuzGMWvAai3PRPxLzinThDSmyrEvqtStNJp2gRB1oiA7WXi88bAd3RPYc",
  "key20": "3WfMCu3iLYTeK1uCVSy3DNRXqBzdLXj4rv2z6XgjDW16tzFjzhxHdxQbywUw2ogxo5MEU5yDRRUW3ikCE49PaujN",
  "key21": "4T97K7BxPwzUY5Dv6gZ1sTFG2VhWsZ2yHUFYM2FwF2ViZco43Junn5eTrwjXJQVHKKHeTsd3rmkY7zMTwYkmGmMj",
  "key22": "27LbzcYTJA6AJiCVjknEmzkF64CW2Zn76GrU4Lzy7XfVP7gux1LrNF5DeSBmsU95BHeBFbBouqNdJ4STa3ri34uT",
  "key23": "54k5PWCN6k7bRGuyg7ewTB6JY5MsuNwkoYbKiDza5DgpsE1Ns41hPaDy83cDbh526ZV6s36T5CujAUoDhAU9eHJQ",
  "key24": "2U5kJWRcX4pkcr5tRjE1sJ4e6ycCUwZJN18oJpfHM2pCP7i8nvowuTJ6X6ptLwsP1bFsa8wxXS2CiedBpNE1Q9wK",
  "key25": "2rBySW2ca1fzRyLVzWxpvwfQtApMuhRqHtox4JtomLQGgoZf1DFkmqsfvwhqkFBnwVJdvGSsjJAeteJVASttMwfv",
  "key26": "2QuscMGpJQQfLR3gigJBzUojTENGPxoq8tuooMPUxVp52GnR47mmddpBty3MxtnrAkicfvfjXu2kkoECAB1FARWs",
  "key27": "61eoxbYyVua7WzXWjSHtGsyEczJsF8y5Dv1mhyesVa1DvTm8j8DswX2ayxZKypBN91aruV6rXvtJjhrJj98HGUHQ",
  "key28": "3VcHxHMoy9ZtSQrGuTaH52AX8DsdddxywqgNw8BCFaNGzrvw4xyzvYQUjRw3Whw2uv3TKymvKEG5rsqhqfSE2Awh",
  "key29": "JigHA35oXPSvCPW6XZbs4JPspqXz9pYqvLUM5hxtFjZPQGmMK54TVHQuWyk2qnzy54mBHiC9f7hZsio9t4XmWAt",
  "key30": "3UiUFZc2dZjMxTMUzu4xa948ddzSydmAE3UAg3WpdV6ocAMK5KwMebAfA3yTkoKjPh6EKJB3Y4drz3rWDi8YGbSi",
  "key31": "2VzqjPtQcBbk6Men9geDw6otLrpg5FKfG74Bd4Gq1MitzBiXajhDHx3bNwBjnLXosZgH5BXh2AT4oPinzsugNeZc",
  "key32": "2McxU4hxWc52DYZ9peZnFQHWMwv7xvAPJCBQFFKCajQXLLeyrv2HndMu5fbAQSWbyrNdGiS2TNxp7or2qcoFKaKF",
  "key33": "3SL4tZs6dUyEY1maPgcnEn4Noyb85hAfQk7iUtQnH7WeEbbrdY3adHLbLamLU2BVpRsPUVTZdnJgKg2WtyZpVK2",
  "key34": "4SU3yt8NQ9PK2zWNCLcHg7BALrJ7Fx3dn338XtFKXgfJfvMektihxeNkgxHo4YYP2aPYnQjA6CtUX5VL96j3cpmk",
  "key35": "3JSWSgsqJn6bUMhfVtJsDzkw1PydBgwsW77vwAeaLQA6NJqUbyv4V4vU6GWQ46f7tP1PQ69GmhReEZJo4WNgJ9Fm",
  "key36": "Xnnx6zu8DuXmduKn3jjEVgWPNXce6qUyk2cbxwdKHscgUs3yBi4LPo9424ipqeauNhYnXmTKv7VXmauNfqMyE4e",
  "key37": "3KXy8WAK3gNFdt2M4CtQZb1QFtDeUhkV8eaK4PrcedYwFKfXGmnH7cuGAoWScud9wGJzyVKEGEagEj5Z48FAfoZA",
  "key38": "2ZbEAXT64Ja2hUmsSxA5bpC8B8y2sPvQXxwLWVRLLuAjjvTG82sGo4TNsbef8GLoWRN4MF5PLnogJxqqd3GufMFK",
  "key39": "4fKCvNd7gpGekkjVzUsqhdbLj5NTFE25TQjmNNEbibcxi8arwnf258rfYpPBDMvQzvy1KHcMVkat6ioCcNLK276D",
  "key40": "5sJr45xrFHJ1mjcC5ZkzLRvphgbdifM4pt49eSbTzF4tkYS2CCuYfYFGnn9kLZueWobZud96Z9kwyoqbwMC4Mqbq",
  "key41": "4aCKHXKurwVHZA9ojmTzZty4g8UvTbAx6oVMxtp7XHPb6az6JhAU6toSSDZxJ6v4xnb5duM68qyirbVh83Q6HArG",
  "key42": "2nryRFpEV5M57AxkEZ4xJDiDRf3UaCuLYn3ED1R2CHdnKpJNE3Vk1ab9j2AtRMsweJL9gZLqyTiWbKvCuFWi35az",
  "key43": "32dWhRFQJHskyUBYzcC1LKjvnPQ6bns4krcoUpgr5xGs96YzYXnQy1q7YGbpZkNDAvdKqERGejKg4jBJZ3TkH1aE",
  "key44": "5bKzrJk5deRu2xwHFsXeKKazmG8kAnMUHwrphAgxcanxwXkMQgU2ETjSRP7ShBwyUGrb5A5D9iGZ9aGHckwJ1B8E"
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
