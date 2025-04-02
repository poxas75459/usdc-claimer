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
    "341kKqpxdLKknEXKC99W3WjvQEHFSueMvv478CpRM4xufUM1TZs2gCcx5eSyZfXjJayurb1zWewd7r7VKdRiNf1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQj6iLy5nCmxBbMad9PUV4UhMotpnPhae46ZinFav3qWpECHGiVG9ZmHFqXYgVkdc5E6fLLzUd9KuvbnYdHjCjo",
  "key1": "3vDM8qamRuYBPN3HVYFDNorJVKQcsGbpnESL7SsvgDK9yV9ga8aefbeUc6ga9rtPw6A5MAX5TYwYy4QdwPHNuLyV",
  "key2": "rLJS7BmpzgbjkoPurPauvSwFGdjsoSSkWZJneWUGBzHhQsPFNRkv94GYLqDdcAfjQkYVfk4gDGwNtguifPiCV5E",
  "key3": "38hznWE3gh1ixyBmspiRqJ8soYCcohJ8VXKVxz4rpvfWDtKFEXcbcZ3mVkP6hDg1H3ytnPcjViGZqi3Q1H4Qf6RQ",
  "key4": "5AA92h7uU8akDtjqp534UdRgVv8hjZUX46mdRys78B7UnuzyfCcRkQ16SGpVszn9wFyvGaM1RmigTGzoUviPprDH",
  "key5": "nDgzQW6iQQsCmNL24gwvTQKQT7ATXJ9hdjFdaemERB3YTXh8fyPbhfxtubyxSDvYpUvPHfuq3qEqRfBmCtPJoD9",
  "key6": "4X9pWXyRPr4TRGmMjwz742CRR1Cyr7QuSykyc1fXi8LSMomGPev4gbS5fJPj3y73av15XH7zGVK81epFkbPXgdDg",
  "key7": "B61cPGqmoawnyQXNZWv6xePqsgwKsZnHpRFjGpsgHfLG38y5Fbk4GjZY7hwt4GpsYVHjVkSRK6aRF2LxvXtRqfr",
  "key8": "3QCX9AmgudxzYAbgiKcsfMZkQzhbduXKZHN2YJQw3KzdtCAvMuXU25SXZLqJaDbN9KaGerz6Uthyci2XmUoj45Vv",
  "key9": "3Pitomb81h9o9RQUWLVznQGE5ziGKUf92o8W2CUWGGkDd3KJZLbJCiQFyeBYQC8fRqoCymrsaZLi2a9aDzCAPa8J",
  "key10": "2A9DjCUKkEKodZxinBCBA9K6cmBnRoqWm5PE7Wb6nxawVoosD3r6XZWrwZcvFEumwQ41ZrEq64ro9zf1r1FVyEnM",
  "key11": "55KfhGkv57ucnpSVmVkVQ8Vy2XVcQgPLxD5XuwX3UmL12HNV8mVXJpPMEf97WZ49zDiqig2o8Q6dwPW2eVNzhyKW",
  "key12": "3Jj3QbwLSLgDw6rDjqESXAz59D5BeFsNpZb88ejvLW21gEL2Ebi3o4PLVjvU2822XdytwwL2WSco2RqaSbiQkGQy",
  "key13": "3RkGUsu395tr2kfGjrs47SxKhJVoFthnD1Pg9CpPG5dVk7UiWGLVcVkVi11RpbwT5hcMfKYmTUuMfBzLHh5jaPcz",
  "key14": "53GgvvNutRGWnc1UPwKwyB3n2WJ2RHbexuaoCWFw1d8hKsnQycDt924Rsd3pQwmRiXE7LQ3vUMdEkSjQ9tiBcYXX",
  "key15": "NaGdU6ikSaY6huZCUhm3PX51u1udxiQTSeyepQgT6K5hgGA74rjusdkfnJmy67XZU1Li4qcM7vmFGwwLr43J9qF",
  "key16": "58ia53W4XautMwzEDdPGBdPkMXsHQNAqyAtJqsv5w4aee6GNxkK4Cui1SkXoQ6n6K7MxbynSd7xZeL1vJ4NNeTBQ",
  "key17": "2k2gD6WEqpNicUR9sZUV4Yr6ZduRCXmkpzHGJzLKfTr3UNY2psx3rzqJYFG9mCTNMrrhZm775XknaeoRar2eDKxP",
  "key18": "3VaKqj13igR4YUzWFEED7Eh4sndhKQ6qAMHgpMRBEpnCfMG8hdtkfmvxk3utQX6SGDWtsJ8zhEiTymMEKoAiMHus",
  "key19": "4j9EyPPj9WR2cLrvsWRyUKVDDgHigHwBBXWDC1wU1J8WRghfc5nzSp8hGcxY7xbw9S2g4HsEwzu4vLAu1NqmT14e",
  "key20": "4Xh18krXK71jvsmiZhAzkUjNcPvUQLZmkX6tAy3LnzsY7nzobLfpEjXN2rfNbtQBKgsFpqmBvLZiBbmQEr7t3Heg",
  "key21": "2BCRnH3b7cWA1aVNnNPoc6TstEspYM79HpM1xQJRwaqf6DuxbhQdkgeLyp68xvNM8miNJx7aCTnh6X9sKrUDDCws",
  "key22": "4BJ3WxURzcTUaQH7jLNqjUB1cg4TktsuwoGb8NXwcegUaTN9f8WR3iFEHzRax6mfxPGVbbr82fwt5EeoKESgN7Tu",
  "key23": "53qPXpJ8hZB2Tmqgt9pEXf5h2rvY4XdUmkoz8WnwEdK7GdDoF8icPKfXPHCXfowSibhuNTMmJJ2tfhjXmVGH2ahB",
  "key24": "2x7frrwrK7zVfBNsbiDmWXvJDYYyTAWSiqwiaPHqqEnWQ7Ko1QBbD5zx12UdwbgfdjpXF3ZThzFZ6YkRzcgPjG61",
  "key25": "EDhPeFbcmiXmTcU4kQkv8Xuaj8jRq4qroLQMjgNUEkS8v6gTbJhvpA1B68LWjiaJs8W4FJRbAXKiLheLJTwwXfR",
  "key26": "5oxWq1jWjCtPxM2JUYt1iR8pMtjTvHp7qDfRRd8v7Ln9MwxtzR87CAhn2Rkoi87JD3HxYbyJUyrsVdHDEUE1ZU7z",
  "key27": "RTfi9NYMjhBWn2o4jgYGn4h3uxFNkUVXcoLAVYCTHTy4ud5Kij5B8rQkUQV7YKYDPVjsrk4y6jQZkcZnEPgAvGt",
  "key28": "5szQVjpMjp6acsDjVTeCZ3yMeYqi16Poowqa4jz2De2kRGHJ2JvTSGkb9JKyZBMkYaRZAVYYBkT4m31baPZqi26u",
  "key29": "2mFCfZMe2qaTLiwMPYmhrZhs9PNyXFdFGkBnLv58mdrTUHtKcKLZwkfdEpdw1EKNfhCcgcwcJFTAaPb9nE1zzU9f",
  "key30": "3tXoC4Q3zFP7HerhtidVQVqrCLU4PnYZsmrBT6qNcMD7GBG7dJAzdzfKCbriCg5ScApM2yhJMPJ2HJ2RBtGzSU7Y",
  "key31": "5EAKxFMf57WmLzcyYVwAUbqaFY7GvhcTfkwKijMLbtS7SkQih8QJsHroWQPrgrYoRjFSyBZSDvauT8RGuUvrteTn",
  "key32": "51Y45N3CahVxo3vktv2CawcuhpmP8rCMGJ6XCv5xxSv6PgdzVNER7SjsUiLMyHZQkgzve1ynQYJK5YDhzpxHpXPK",
  "key33": "4kbUYC6yJAR9qfqJMqK4D3pvKQHNkmRiZ2uN6YdLNCYkJXYyaCLoUcqwDzatAYHb9fLaUkmnbbHAqphibyCAPm3m",
  "key34": "487PBgex2X3ameK4fc5gZiUuYxre9BDpwXARweNHsdVo3DsqtYMo9pJZUrWCLqF9owy47wGJBcUct8NbVEJVMEa9",
  "key35": "ULvRqLABKGbQ1mPqXJjLJpB7nct6t2NeWdprGuvQkeoW31exNqjqFc64iu7wJ32oYScjM5NZP4zxXAbLC1QUMMP",
  "key36": "2FoaYwPKBZU6n15Sgh8EwTfkvgdLLJBdiySPUvdoCX3CbCxJtqqsUrn4bNf3ZHPVy1Kt4Kfq8KZCJXmunGfYUKJK",
  "key37": "4F6yQgf5qRHPtyEkwgyUDgT1v9DvL1baqjD78yfa4SwWZbwUwYsmYaKPMd9n6z4A9dsVkFCXf45Ncx2bkV9JW2NK",
  "key38": "31ZW32q78XwfzJupakBJCp81KJqyDvzBeWVKV8D36MXAYUYFYRGRLtTprHEWmFkNwcUxsfRmMkN79ja5QFMZZMco",
  "key39": "4fneT8uBiFQU1KFLoihG2Eu27UpkWdtjXuKLMD3aTd2smYnKBraaLT8n6zXTpxNv1csDwQcefohZLA2K3wvDSRpo",
  "key40": "5dV6gKPFAGpyD7pZFX8YDwzmjeD1pgYg1txAeVY51y7VfPFZCoUe1gr1qm3qkZv5KEv5vvZvxzHfssjouBMK4MkQ",
  "key41": "3LxB41gwTKhETCuzdi4YGxhuWXct9VtsNX9B6QQnuEWyk1ETEcDQqYNXzf1eJVP94nDiA6PgvYwZNGiuCVQQDimc",
  "key42": "BA9zoZgFPtB9Nm8LSRK39V1JxrAsnGppfiT9XqzTJA7SoCryvh7hBfh8eYcXCu4okvGSd91vjy9yXtNf82gEDuu",
  "key43": "2VDJ5yQ5qnoRaG83RppbDMZQwXEUhUNfBTj59NooNXZxn5NJ5yT7qA7hpeJKuDEucdqQAM2qdCR7F1PBoudcDmhS",
  "key44": "KkijHB779nvEmPX5ceJhQpTzhzp55ZjrL3QkLqE3jpHhL8j7tWYxGS6vHBh1E1xjL6vyt1fWQkAwtuU3JcqueRj",
  "key45": "2us7yTY89jUaoVTdc1URDvbnWqhysMR8MKx67KrKTmYTBDYuzgDugctkaNHxiujRjpVT8hnhMiiAoKYB5VjfE6ZL",
  "key46": "54Nx194ZbczN3RZ7fw1rSWj5Z4QywgqBkDYwWErdAt46BayAGSPu2XvbJLn8mJ9MUuL9r48E7D7tqmFhXU6Y8Pjn"
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
