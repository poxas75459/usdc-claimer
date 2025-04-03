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
    "43pvUxfYeRgHeQcVnH4gHniRMg3kcRxw2NDdNcGvrpPrp2qJ3YmMYgS7cYqEyXC3eYrNPwVjAPfUfBnomV58rBCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T7yXJd6v2ZpFSRKmcxehFQvn2sCpbPioccg8L5R8DyaNSztF2RGKREFgZ33ZaYLvUMg1EeA2Hzq2LYsD61oX4MT",
  "key1": "2s4kYBTugrxj6QqUZhBXeBDNNdvcNXK3Gho6sKZ2qBq488PsvaVZ3ZFFNxMk5pfVRdHNc3PBwmcuDWZoApAi7QvF",
  "key2": "5QwKTmzkwe2QLkS84sgqKdnWrVf4Yso15TCW2zvsyGRsYMbRSYjq7ByzoftKc3cCM8sQvTzR1LSGPyWZLFYkY7eP",
  "key3": "2juVS2Qbi9jZESvcb12f64c8CDi6dxe6PwNEwfmBhQJbGmQFWFK7NmgSXTpdkKAFWYWuEQ2B2w7asNBsUq2oRMbP",
  "key4": "WoaxcVHW4Gkbp4ts6ZpousaLrqqKbhAB1sFhFY1cqbjuSxvSMZzqoZz8tkjHXCMuYC4xpE6MtbABFYv3ihA2xfB",
  "key5": "67DxA4rJ5wTQhWEbt1NiCk7Bu1P1gHzYD9U5sr3TDhsGLLKcuoLhp1e1QpYPuZgCA2F2iveYEe5Q2shHJ7ZZs3HG",
  "key6": "5ZrRDfoJfd7EUiBUVLtqhKArQKNePPUQjb27vpvdoHHG4G42ZHM9fiWf8DNo4c5hHowrD4v5qJm6CVEbAWEfwQQJ",
  "key7": "3gWSx5H4MJxjTsjED3gFnmeoo6pmDeHeGYFQ4KyhQbcKF6Kano6p4cJ3QAU9bCH41b1WkNuNA5Hyj7pepHFn7AMJ",
  "key8": "321HvgbTaY1PbjSRsPTVkrWSAmvcmtXtnkfjTBcqTSJPac2Vx86p1knC3vdji8Xdico495RtqYGskhcrV6ZHCa8P",
  "key9": "4ddCFaneR75yTujmxGYwWQaurpTJbcc1NHR4fvq89P6JnqoEcbKpngeHG99qHHPWMuPZdavTZjzgUpdFTRnP2jox",
  "key10": "rSEg36k8aG2XpTxVEzLWJ2151iPR3dFseK2QgCtvBRynvBGs3hxPsFCrtKpAmyuHCTGLpsQ2ia3h2c26SJGyXkN",
  "key11": "415JQNZJ35J6D2CEA72RDMUHUomKQu7Qu2VVDEBNA93Wn7oqfWrXmRjFU7DbUJ2kkajgGCx4HpkphcxRpfi4xPPY",
  "key12": "48MZcZTdgD6F7q17p7y73tNEPhpi8c3MgHPhyZnvBxQ7yeaaVtjUKhCWv24KaJYjJNoXwYMrht8xYTusZkd5Z5qL",
  "key13": "4e2NGTMdwy6ZTrE2zLt5RMzUohBUwW8coq6sX5pXgtHm7sxbrzURFokHo8JVFENuiwbm7nXTNsbHQPHiBw5JqYAA",
  "key14": "RXKP5Hcg6D4KEjaG1j5H2m6aYrsThjA7abrJmKqQfEftL9W5PobGt6QdSQd5UNgvvfDVFRGePxMgcDU8jPpsQSp",
  "key15": "5cjawD4n2ytbbNTjAAbC5NkGoKGrL5ZkuGVTr5a4H4T9wVoMUecm5mucPfTtRtyYi8113tVzjvXAwMHjinv1wNJG",
  "key16": "3yVKUZGFjcMbDkhbtz4NcBQZHV4uBq7D6jvRM9j6QaiyGU3XfWf1jiNXaHV9REiUoSq8j6upoGsNHkd6kbVSzSZc",
  "key17": "4eoMdzVXXPzj5XkYcXe26CbBBwgaKtpzeZGNiQPBSaamkNwcFLw3YwsNTTs1GLeUduxMV6oZ68aeQiguziKkuVvR",
  "key18": "3reTapwKhMsQ7K7RbESb9d9nbiQqcddwazShPQWzpxGmAYEew5ABmDciay7AoZWCaEfWdURP4paujJ4JukPVjjC",
  "key19": "3g1hwxPWjyRuFdYC9rJtNeLfBedKHJkt6yp3ByMnX2XRsjfE1fRJTDXCg3HcPTCm6JFurqxDBUcoHedfdg5PVYNV",
  "key20": "5P88Vwm8NNkanhXt3hoapogRToxcXEiXfsAZyPMPwohcshCCMAKhGc32yqBpQrU8cKL6JB9dSBjeYiCHiqgU35R9",
  "key21": "wWt6G3Bz2w7hmuU2UkvyZcg7cvmLTHjBHcXAtge4hraLHcBQ32k7fjASpdMHXnoe57cmmTqEfDx3cqrUDPesNat",
  "key22": "PtxJT6izhc5TYJm7USidCV1svQh9uPFPRM1U9pdZB2DgosrbKSiDNDxJGvx1RPdow8of2ay6dVLWoGxCR7ikb3x",
  "key23": "2WrhDZiHFwC94G7QdxhhVgwfVnR6bQ4JGS5MXz15FXFgvn32B6QcPkPzhDW9qLp55VBNBGzE9hKfMKEDm4rqpTq9",
  "key24": "4A3yRcYsgySnoDbjYLE5YvHNE1o21VKA9atY2KU6mT1rUZJdP9Jw5yJLhr37suVaDXdYC9ytLEPv84kGkfpr4qyd",
  "key25": "3VAjhaXxaqT2q4ptTVQXcYuygBYRE2ZaepoPfkb9ATun8FzNS1GG2qduJCTVwukmB8HWbhPQWznVwPf1c2ZxeSHR",
  "key26": "3nbvfiBW2FKMwYaTRnyykiu7H3USFA3tpwMGR5HP7enmiZJczd1dDVXRdCzAxNDhbTyFNu7TnrLEk2vHJfcHd6wz",
  "key27": "3rLX32zsXGJJeHK4ccg2RxArM38SA5pa9f7tCBxZNZ19TTGaKeuMnWimjMidQ41LaPd1EahRE46Rivhf3x6r4RGD",
  "key28": "3xbHjVZk5QZXsoMfN71q1F7bYBH7EMg5uM2EcUbr6cGYSHzDXhjH3p5mvGcdfCzvVM9kNAvyGjpUdkMSsEZmF1is",
  "key29": "2fDYf137YNomPuS4PcLjFKPuVtNMVcMAph1Y7m9UJU8zVe1dGtrZCKyTibzdbjcTB84saddfcNdXP2wUjPSwPCP4",
  "key30": "4LyagTrCJ1aPu3vX5owr3r5E2x8fLdE23CS5ssKxzw8CcEZMzbCMSvik5NCmJMk4fTabCBNbkZWHrUsnYHToKACo",
  "key31": "3nMe7Hw4zrkQNjE424TgKfFT2vbYXHJtD7NVBn3JWY1So4wESjFPTbaFB7jPGWh2SiRdMKnd4t1roC18ktHD2paZ",
  "key32": "4eh5Tb4XLshftpB7n1DcASwn2VgS5FGPvLGRQmdkGHDxt9njCP4qVBnfbLtbgXhStv6se9a4MgeGfiKKyrJEsmjN",
  "key33": "UaELcsjZeiWMRsixKhqjFbKgR2dsyv82afskoKVsEwooWK69ZxU8vBVGJZyFp8GsctiKgEKktsv84HoBSg6AexZ"
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
