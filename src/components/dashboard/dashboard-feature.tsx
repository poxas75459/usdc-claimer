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
    "3ezjDsJZtUUdAecCFm591UUsnoXjH5RRMSFZgriEpumvpT8x61rdfpjQEz3dj7WWfV4ncATJjFcFQMkva2fPEXoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29d4fRGrF28oKXnu7SHjjMoJBoU8Zwz6UPT93youo1nyDqgcX6afixKBYr9Sc18zpAtxJipvPhzuG5EoR4y5wXQU",
  "key1": "2sn5VuZrojirCV9MvaKKHQ9Vyr9omxdciUk8sH98Y9AFWV1Rix3fgpmiLGSZyWE72d1pkHS5HPjGRMsM3oT8qNtd",
  "key2": "5rzyiPxPvH6wkiiaeLeaGfgPjK6xFt5KvUdmrZwLiktGawv6ZKrmP8KsdAD1WTKHjYsYnXTGJYeyQUo14NvhP1r2",
  "key3": "3u8TgMeVF4Ai1va58Eg5eaeVu8JzE42a4ypxsj6SQjReugRzbysT2k8jeQwcd5KiyssPrhzVM9xxxBPb6fjks99t",
  "key4": "3wKwDEK5grTeWjeTqbdP8rXKszKfc95f8tSRjaAqS5NNzjg7JjLj7dxa6iTmF3yT8gLUsd1TGiA8eKCaH1hUPK9M",
  "key5": "3fuTzegWHka9rw5YsehH88rJfapUgmtBHct3QgbNBL12p5mkEpXTMum3fES8bkS2CXcqntskfA3TVdDu3GKmxwTP",
  "key6": "6ctwguQ7CpZjYLaS3tDSjj7mSvtHeqKkUp6oaWkVJivyqoaZk4bCqakd4JtXEciPZQDd6MEsjfGwffevYyjwBag",
  "key7": "4LdsR1fk6nofgHHJEeA18xdMUHDZTm1XBsBZRvW2JCDt365yMENT38DhJ182Kbj62KGUEZgy33fE43ihBJLvYJwq",
  "key8": "4bLXe6UYrtVvBYukCCg6t1hQafoRLY5iBWcbRCMW9pfqUiBfySv13iEKACnkzRjqkVbUa513ymuXpa893wqiTjjQ",
  "key9": "5i1ouW7hHD1F1gqNtV5bqKKJ67zT8GHNnFy4scRWMPUoi5TCWTx65grqDuAzcEUWt4MmQfQupxQt6uuDaoUtzDD3",
  "key10": "4BG1v8wMhv974Gnkx18vb4dYtyMiCsfJ89SEqMK3ykLguZUctNMKrcHTX7tf65HRoMSdETKZ5KfXthK5KeQQY1ps",
  "key11": "64EpaEjskNgUyfZiPis6yT8RvVyqknhqtBc1UdYZkyFWw6z2xHMtfEsMpVmRiPMCLvx6nu6eQFMoDGiKZCxEcTwG",
  "key12": "5vrseGQAF7TMSLJBgg9ZUASPQPYRPbrtaqEwMAAowJrjE6fad9Mcou5QaRZFfC3qks4casoGiyzHAH81yAayooyv",
  "key13": "5L9TKgBgYjZY84sfAEBmnXunSFPk6ZFra1jFT4s2pjXtzigHbWBrtWwntx7EPKN4VqVp94iVysbiBPsGZUYrRzAD",
  "key14": "26kc7XBCyGQnKqfiaytxpYwdKBHL6hXSSAcXN9tEq3UZnpHAj2LCxdFQe2Nyxbj2wWLhwUKwzDcWMrVQJeXCdF81",
  "key15": "3d4WqeACRDsuNDLcrjkjf6PNEs7KMrP3m4UZ1dxQ8U7KdQQJHuhYqP4zANUvU6vPnmgUvVGAahi4WQxCsft2B7uD",
  "key16": "coXrRsL9agCNkn1HZgkNA6Twqi1hezRKbcGbdPXMVKSHvPsw2C4M7d64reNESh9HrM8crVtMSyBG8suANuzvYzG",
  "key17": "Tge3Fgnw6wgpUNZAgmpdZaukNiPbPJPUvEafU1NRqvVmA6BrFfoTy2ECF3r7EsC8wmkrWHdyGJrhtPqF9MeWA5D",
  "key18": "WP1mtS2hjpZXCk71U47H1y6BST4Bgy3VfP2XWqHgyWveFJrCRyqPBTqpGETJBnrYrL62JxmqQVACihfCE7cmVJf",
  "key19": "56BB5xQkS9j6G5Yt7ZN8aN7i4BQrKduzsuxQwYEJD4XCTHMiJvRvTFuuPGbXokt9U1W3uffgiBXtUwYjFXpgLLD",
  "key20": "5caUef4KkGg5kCD5MBBgK6DWJpUTJDQqtAj1CfHtx48qRqkshFuikqX2QmJ5T58V9ngxLuHFqTiRe2eMfaumUrS5",
  "key21": "bWmdX88jCYC1xKkdx4ApCEuzCPQhxvXUCFGTvKAHkt3XnSRMeSToVEDYp1R1Ue824QEi6iVb2kY9cnA6sSamYnD",
  "key22": "2VdNAu2WcDG1vfSNTePQKcCaMkp2mxMd1VQ964zLzv9XJeqspKPeUWXqTzNxETKptgTmLxBc73YgvdqjAn32uPiK",
  "key23": "2NXu4viv85tSaVmSrw7NWtWx24L5c5q3FeTwt6qzSJCc5QveaxUrPw39JqsNvVmQnFFpYin5xD5cS249czTjMwNb",
  "key24": "4UEq8E2WdB7HQdtvo3XPbHFJovRcdLiGoR6rSwEtJi3VEEnctJcQVffLULrZXmBUk3nxQjMo9rR14ohysHBNdCGf",
  "key25": "5RmEqdubdrzw1UAQbVSWkUELmebUcQncfZ8AD8FcQJztqdkWLHdnsGez6sj2sCGmRfvRrwcaFSohuKC5sm7YvpJ6",
  "key26": "2gVFvxcWqic5uWDTHRFe2gqCpfQUkjvLccQGRtfhAsWMZ642vGFVX8bdnrpZa5mYuMCfj5wacgU7oV1PLwgkBux",
  "key27": "4wFQUhcL9B5fLfqbuYm6oyGGvQwYreJAk7fxq2RFhyMs39fmvyZB6LUgqui5iYBrYib7cvJgpCfoYNF3z8hWyv2M",
  "key28": "3xdBcrfy8MCbmdNnwikbRMn4NsnhUoEmwgMq9yaQdgTkGRmcKmEVt5SqkETor2DDr7BH1mPR3DHoWje3JPxqF9fJ",
  "key29": "3zDadRwpkMfbUmgSWCaim6gV4PuWtEaXCWnxh9N3ofJc6EzQ2j8p8d9cZyYbBaktou9VBkSrhYQHeLvfPX58hRdQ",
  "key30": "cF8CARr6CZT3uoYsVMNsAyQJJuZeL1Wwvz2Z3xsVTuyYB8XFQCdJEsEtBe68nB8Jg1z7xf1f3Q8dzTEyQJdqJLP",
  "key31": "5UswaCcBiUE55XrnWBtnYrunx1DG2NZKy5rzhTeGuUy1J7dcCZrZATxc4psa3SgZoG3zituXY7TkF4TBR9Rvsn4U",
  "key32": "p9A4D2RxrMjVn6AcGUK29a91bZdcZbX4KytMrCvbb6xxXL8TpK9e4YqfeXWagPYTsyt7ZWoKuLi2MRqPKYDtaBk",
  "key33": "5jNyCSEa74Emkf4685UnAKFZuxm1SNvgLsjTg2Xt7gZMFWhAywNJ8LaSvj2pEu7V8Z3U3JuwFkTn2oFz2tb1A3EZ",
  "key34": "62Swm3Nc3KB8zLLPPUsW4iN5rYJde7pSzndnnQHABbGEeFSYGVm1capffC1xXMKmsAtiqijdCLT62xu9XY1gtt2p",
  "key35": "551HNf2wW4sbHMPbLsHUbut7DTcCbSvzPYMsFoBMdBQ8tLa7fAUcHsvJPo89gD4ndiZLSdnS18QGwmyfUS4cBwJH",
  "key36": "3kcZ9RDZLwynfWSW7gV3CYb3wrx1C8B3U8exgMtXJiueq2QNzrVDaFsTTz7CUkc81PP15DJaQ6cLK3FKkpJiMDpE",
  "key37": "48T96wP4TV6hrv7PYV3uTQYAz238WnXFEETC4NysPy6ZD2mSvh9zWQ3yBHQnfMQvMvGiS4RC71bLws4AePEbbGp3",
  "key38": "5TqBBwMfLXcsNZTPHH8LjridxJ4fUbgYQMGztFui8P3rKgc5UNNSTc4Mx8sXdLhrTvZeqNp2HY8PpJMEyWBGNNS",
  "key39": "43cQo9LfjBrfF8Fr8nrDVuH9DkGw4v1fXsh3tdnuUvwK9L9ztCFsiNxRnQ3iHzATuQJL3f6aVTRKeSSRi4cCbeEg",
  "key40": "3T7oUScGG8STY2gAZhGdGeaZkP5AUQUrXLNbGoF7zB3JHUGHmBiBUQVuzLYYwKGBtTZC3QbKVjkW3q36zDWd4egN",
  "key41": "23BY28HDwCPxZPWFphqUrHfmurYydmD2WYV9CqpFt9upBtCeFV4UQ2qZEvdZoJB5mtU1DyJcPLgtxo6ZW5QegZY7",
  "key42": "t3dxs9GKtLuqssyufUxRe8JphFjCm1K1qwBLfD9V4or2kfiAphjcumKZi5RsekTq8irwWjB4fJy4ZhALePJYbPg",
  "key43": "5sCoMdHSpA2Ee8nQgRwJ74RHgwsSGLL9siWTYZRPY41QGTyhg1M7SdeZuKaLB8Z21Zo7d38pMWWsNeyiHYv8NQef",
  "key44": "4nhQjJ6V6mw8DtEt5dbycCuCiJQ5MwZWpXMTY8R4YuBhGGs8cthhz1FqdRXUgps8vZMCoAhPxVjuSKf6SW6verEL",
  "key45": "5cPRyA5ZAZbypshAT4NNMeEV7YYnA26ecavfRf3gtF7yK7YTnzJCTbFy932XBDuPza4ewgpgSehpGBwtiUbmY8Ke"
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
