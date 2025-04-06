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
    "3DjYVFPLoAMb2EsBHejYFJq8DC1eYJPJAkR5BE54sCrqyEG7k5szm7TYQQyvcCRHRhLpEmFNanvPMFKtE4xp8fKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jPLkBFpvf6hRboPsphLNvCLR9J9193JGDJP6DTQXaCQCvbwTgytXuQUdQ6PRGKaZ7FPxzzZ27vNXXMzBtqaMHnf",
  "key1": "2L7HxG7mGVGeDjSh6wsJttphUEsKjWkQwFSo9djiNJfbiBk1VDy25TCdnVVusowULuHoq14Dv1Bp6hDk4K2w4BLA",
  "key2": "4Md3S6x6zG9tqMqstZ1VuVWMjGKEFAD5dGcpUwxCHeeoTRCwaZbNG3tcsbvQV9YWhoXHuCXgsoBfwcr8LwRYRNPP",
  "key3": "1HL71AigGaRSQnha4bs8RxbqGxbs2zGW9aJGXeJmwauBwVXzxLSB1e7o39KprSWgjnBj33WTzeFfJKT9gaK9mXU",
  "key4": "2Ge2iDQ5ehHmu7EBX5myESwrmCttH1mB6Pj9maC8Fmkr9hnumfPuFmrJ1dftURcxtuNCiyEUXCFYvhL2nXFEWGtq",
  "key5": "2WGRucM4ayqGHha7ruAY5oVNLYeJ7nmuXVS3fhW21Sr1XCCFsHPpzmxGZBmSuaToQnyN6FVrLf3df6MuiddEQgJZ",
  "key6": "CYLVLddgkxmZAN9KM1HBfqfpG3xb4BXug9WorxzNgQDVkGvbj1jXM4xDEu4v4k9THjq45xsqgb52AGGNbR1FfGr",
  "key7": "43PS2houbUrCXzr6W635EPDvA9SUpprWAhfr98HNaR5Wm78SqLvXsb7EppUGXJAAkiSKZ3rHZNwRWNsdvsrikUyY",
  "key8": "5eVvK25cynnbNeKkPhQmrbfnMhDmMxT65ifnbCi9iqaNS1NLn9fMThQPiQCFGGwKvdmnE8pXcXMw1PqANema3nHD",
  "key9": "MSSRJJevBKaM1YjagYhJYqcWEzV6eB4jmfHfa2wyoCMbqzXSjtf6QkRHGZmhKPbXGqzZ8CCi8CUzeMhvQ6EXwBe",
  "key10": "2NK1KH8t4YTGyr5GiaL4Cq6JwtjJNPWwd6jgxNjNZav5c6AyoWvKei9WLwShDRVKEKpTJFmuXr1MGLf8qo3Q7bHU",
  "key11": "mxkyai6zQ4fCzhXXJzJKqUmH56usLmff5fAVYSa9LtdDL9wfzrLNbgJf25Gr4YktarAS8WGraKzFYsMBKqwJ4qj",
  "key12": "bLBbh5tRyUooEWy2oCj31EPHFJmxt8uTd6UvgXAR79YvWkgw5VL3e2nA6h3c3nsApWfBjuWBgNHntb9Ka8dipTG",
  "key13": "2bwX3Unaj8GdXyqmtzA5KXz7r7eJMcP47LvLRSv18uLvjss44n58GqayS9s8Zuf7CjiReYDZJu9w1KrhjikMyL6G",
  "key14": "56UWGvrZB6KXQck1NoQfQPuS1yHNtZeBd3N2VYviEkqGZwtd8JzZ5gvumEtnEDBk2cHn1JmkEmLJT15FTUpTZYm1",
  "key15": "442vedqAhA6HQ9m1Mrtn1SujZ1FtKC62h36bqwmhQsyeh1HGqLtp19V7YVbes5bZUpBp8czTtBof9ZRgY2tPLKTA",
  "key16": "5XQrz2KePWzeSAju9sd4s4WdShztBV41BnYgi96gAdcapjiBKwpGyeiMKEAyWz84spk1qb3ptSQFXpnG9Rz9eXfC",
  "key17": "2gLFRXRfLhu4H2AhfYaWs2jBJfWTvCZTC7UZkQPKjywTq2CQKLeS6ATg7dK6WKHR9cUH8phVD4dVyLLqC85vCWCc",
  "key18": "5Sda2v8rAoJYUP3pZBWmsb3sGDksf5sobRNyrvjKutZX4Uucjy9Bsc2MctBMtD59qhiM264hGG6VdGM8Dguo63wx",
  "key19": "4BPtnYrw31ze5PkmnZTaDmrWnhdykC2hmqgvhp9McK9h4Xg4YRoVqQJNQ6PqLbqi4Kvw4eYxsAeXZcPy6jovy8iP",
  "key20": "4enpdxEZQK9a29w2tqscLbPKdJyahzB7UbaU2mMEZiUo7NJR18dAkWr3n5gxZMXr8XQg2cA8j34LxbXpi3WGbKdL",
  "key21": "2qqGC9cYXBpvHZU1v6YG4nw8AsocTVc8UZ4SM2kpedhsFV25zMy7bATDEXVM8h7989pH7F9P7CaC7wWU52pRsBci",
  "key22": "4b4n8HWNpaSjiSUSAP5hrCnGrkerfGHnUh7bzyWuPnLyqMnSPY4vEqrwv2ip9TZJgQzsm5Wtqyyjci6NSTZH6sYn",
  "key23": "4mgkoj5YfPphvV3xJXT8nAaMNpdbCFtMAzPHZ6rXwgio2n5rWRsTaLvhm5eBkTnorXwXrZZyiQLLy4haaQfjAnj5",
  "key24": "2uCxZQbBJEUpn7yj2t6ZVAJaxFQGmQNGGDZJH4mEd9uPZMSHKviH7fW9JM6UEWhx9reJcjroPxxP7sumGyLrp8zC",
  "key25": "3QgAhnSSybdPK4HHShVfvy59bnuMwtw1bnviJ3seLzsxBqwUt7ZnymHHQwpJUutPipwTSvXAk2nSivrZynHj4Wb2",
  "key26": "2i1sSBdidXEgc9eGpmz27FNCeKwdP8rF6V2tc9oCJDgswbNwmnJVGo5EcmvFKmvapkcfZnZp1JKgbLVxp2iLziUd",
  "key27": "5nFGQx3vzYjW2dRLqGPyA3xVpoX5T8QwmGLPYAPz9mEc25eYXymb87DvUuHCwqxUCehueKB9JGjCKVUSp33d7Wgv",
  "key28": "3stbKpDi4Vr8WgNJ5D3vDfz2dzR5H4hAHoJKaLfTGNuK4chcZ9xT1uJZj2uGxsSxQqaUdJXnfCPofuWE6UYLH6Nk",
  "key29": "2fBF1ZaV29EEhEpvzuLSsu1XZ7rg97bnUhNbFnTSMtgCrtzbLurfqV6kF2U5qEuE8NMouoovWurfMmWAH7JdexSY",
  "key30": "5AgKGR2N86hm1NZCFZEe1sjZTZ7wk3dSqZn52jtYiuRcYX4BHAHKQrKhhJAoTAMzkjkWKXMANjVvMboNozrVqm2C",
  "key31": "rya3jdh3LEQcz4ZpYdWd6hsqJCfiG4mUi7YumPNufyTR2H4Te28bSdB9Z2kb8af2uEk2Yg7SfmHmSyeNqLjwczg",
  "key32": "4SrpqZdsGfNCno7SLkmtNCGkWpVca1Bh1KDsKoG7jrtBwyngGHG828cAPNYqwEaL6pWTdsY47iUSSm9McRiKdkcr",
  "key33": "4EtFhVe69trK58Xo9bqKtm28x2Amic7ovfL2eaM4fUwMfZvKavgHx7NQgSUjG88n9zwy4A5RnxDm2k79Bx4usyGs",
  "key34": "2s6Zhyaj7bccYpGNVwaM2JdoWayioNp1wtKnGWKcfF4ws6AmHPBNe9Hj7mDc8A3VPKK6u1nEMMoAMhutYGUzEP7o",
  "key35": "PREoTfF98iw3d5rmSHJyLgA3DyvrpUZG7cebjaJRbdWFh5kmQPJkgjCj6eRJi5JckuNhNVMMrEaG5UJgCciG3Qb",
  "key36": "56scoDwU4REG6AT7hHLZEKxGo8oaWCwqb6nhSseKSr8mLUbStN1eTbkL43vKNBYRupk4JaUxhgaEmyRWbcfQevHu",
  "key37": "5hiTKzYu5iWcMtV8MTsveKPwqya6AcubFg1pr1noPvL1Aogb4dcAJN1EKBajvCFgNP6iLxRo7C52iMrVYrpBpBhL",
  "key38": "3wXUANbfn7GaP5wei5QQjgKNXLXXLHJiAWSnM9vF6VFkMzZeFdmRq1RPVrNWDxskbtV4ydm8mye12yntr6a5mzYY",
  "key39": "4Tf5e65bYwjqKzLAtQH5jbeKJzF7XebJdTKWae3wiBQqHgQN5b8dhuWeqVUfANUpxNWq2LaWZusfdjmSFi2hYXqg",
  "key40": "Yiyh2hkBofwX57BpLeyj31ce14DwcusHYg7RU3YwWxSjwVM48uhVXmmATMjE41SYfZWPZ8D7RBxLgoVpzNCiAZh",
  "key41": "5Uow3JYyeqHceX3sbc13ZnBTjNv8TM3e8fMPAsQShJZKWDav99Fpwv1PNiXJgzoc9hcNvuE6xG117otrbxcTnV8Y",
  "key42": "GupbsQVyiZgdHomsvoXrH7n637eeRHPTqbR7BhB6QWN8RbyPgE1tatn9e8JEsQPT8G7jrtN7UknK5u4HBstML8L",
  "key43": "59seT9xSjvYjeUZ5G3wYhtwmDHPKeUBhXzdutGgE4oM7K3E2gBzSHemMyRqgL8hkVno8Rg5KfpNEPjcQQD5tzCxn",
  "key44": "zz7SyWvnwiRzssFWpAVitFFqpippWEiriWp6UfQF33hSd7KGWKWjkMC6pu3Laud2Rgr2HZSzWPubAWsNCRqwTMD",
  "key45": "v1bG3k3mtVtHtABjiacddCkZTpUptsxzgd2htRGwcXcVLbFJwCrqumMcaqEzmrbL5i2bsiUt89RS9DcAF2MGAyw",
  "key46": "2VaFEuGaRAFqdcHgnFsPWTbF4XEEtB5kNCo2PLCeUHfHtRbA2Lh5W3G56r5FJ3T6DVqCbRUDykcNk55VtsYvw1C",
  "key47": "3u42ioPh7HwCgbfXRGA26tZ3GM6avsKoaY4oR7V1pZyp26NpaLy28cudEy3yajhYzJbmjRt8G6oT9bMdcq7CfvX7",
  "key48": "5QTCetcnpVEKKwu9krDDhzu2ZAeCDajpazpzHoo2D2iaB1tLaC5pA7hDL2yVJfJzvoTi2NQYH3gyvDZccoWra8Tv",
  "key49": "3Nu3mKqTEWu3rAji1oxu7PJ99xg46XcquDnLhSESp1aWbkMu3NE1Fh4wjP5dp5uyjFtqqgnde9BdyV1GFRfJd9Mv"
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
