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
    "2N8TyYMLquthHxPeuiHnncCqzb1DA2rQHnnuvnRGhTy9sSmuJRTucbabMXjvr7h1jFanDGPaGz1ZR5DGB2w3BDok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tWHN3uL8EdkSDiGi6m9ExxHRY7yW8FsZnQE2sVJAKWxwPmhcpEey1CyrGwPFUikPNdsFxQv5XCSsCPLiv7aZDct",
  "key1": "3zpfrdkpBNdCvobux2MikAr1bnFERUu6fQocdKf9YT6JxrVipvmcYCwH5KDk1U4SNESLKbQ1GoJq9gKh4LKqHf4p",
  "key2": "2rGakjYsKwaMe9tgZCWiTxveNK6wtyYYoDBGrWjJvFCX4ASyrpTtMDb1XcFEbvH8ctovLXXbS1Ri1kzignxob33",
  "key3": "2nc6599V8sPt93ZDRtcKHDvgXu8CnGFs4ond7XBqC2bXTK5R7vuMZK349Eqa2wgDsFgF1LmKYyaBsMkaBpqeA7mh",
  "key4": "5G57XHyd81UZZJDmnv82w65VQu5tqc93oyQGfVeVKkVrm54G1V1PGgnMEe641t5vS881GQoQsbuML2RT65LpN6Ww",
  "key5": "4djNRH9awzTiJKWLE7a1iKxyBLx9uixZxFVELoQL3WTrVFw993nZYgekUsbXuwzsNWdCzNftc6Z3yYPw389C8bbC",
  "key6": "65xLdeMm4dWYFWDXoTdHY33Q2hx85GRBfozdhr8qPg9JmRm8HH89dcjmNsAexCqawwwhA4BpDrAcXeV1dCRcvrVd",
  "key7": "2M4yWumacmMvYAQW8PNgMQjM5fFhggGyMMko8pg89HRX2kAyJ7NGWzEyC59Du7FMuuNxrgLSm8YvQ4JzjRjBXiii",
  "key8": "3kvs9nPH22RKhMmQTFWZhDddTG3TM2CdmecjmvCgaSqM8WdnMqWG8s1cXwkoS42ESoHhbyDzg6XqVN6jzbdUn7tS",
  "key9": "3Z612nz4JR4t2nBbGgcBfYeJYrwMYVnDLgb7FZHtxzriDHo7gf4MG2pDxKj92NqstCM5iRUWWEUdZjMuTSjc1Nsv",
  "key10": "36Jth2V9vqmKLGFfApg7KkgRmW8i3LCvpRcVN4cexSUnfAZEkgM85eY7cjK7iCZN7a9ZbzbSBJwrHF25TaUH5ovy",
  "key11": "37fPCoPiLrZ4Dq3rKRhWxhQETd2367ztw3gRjoLcyhGDXcvbimTuZ63GN5QCLNYZcBgCaNVohkLnJp83dahhfCF2",
  "key12": "5PYqkoNQuK4m1eMnj8wifjvsbF9aG2n45yDMsiMnnCBccvTegsbZaQ7NY3RrqXneSBsDEnJ4GA55KBtDyBd7kMxJ",
  "key13": "5QHNQJQp2uJtATKQQPJ7NLJy81zJKKztsPk5ZKC3AjKx7aVpPpucZse1HgNyKLUu8jMp2gyCUo2su2DAgjcUMYtx",
  "key14": "2hc87dAuQsGCQw2owhRfK2ykJy8F6xgnd8dPzJ6hH3VLrurS3jNwJo3p5GV2yNyziQt8T41A91tjiRenD68XHJZV",
  "key15": "5zveEenAwhEcTHqobB5CCc7xCUiT1voQEtiAxazz8bgcChtGAkSMnmGdVxgPmqHUhZ792XQvTHYJ3Jp31LzNwQP2",
  "key16": "2Pod3Z2ApAuSfatU3Zq3HJCZ3aXVi2Y5CutBwtMbBbvAqtat3V9bwdhsqH4mRFHkTvVfNsU13YTBE5y6FNZZMFcX",
  "key17": "4E8gnqSetDjyL2RL8wmKH6FsqKqRYAZGiSQJYXB3vJr3ctPGJZh8vXnQyvJaU3wup4b8WnjoSpdD9gU4ku4h6mr1",
  "key18": "ue76NgKCPox86sRuMiSbwCkHgeMcfMTDjG1scDF3D9mdsDHyGgx3bj69tphd2pYgYys2PWcjNnygh1ArBJ5WV3j",
  "key19": "2yEGtYpDJea1a8JVmQ4vs1pMhtjonigUtyx8YZhthGukE8LpoEL13UZ7sUNSGEsH64S54NaCp1vsjSRFarHWrXjZ",
  "key20": "AyXKyo9ZQvndbrXototB1ZkgxZXroTb4BCWEHPVRtYmFEYUuz99Agh1cgUtWWtpqAQABVbvejYJYkGDoAKok3vt",
  "key21": "VobuHk3WZh3vnFKSd9kgSHkhyxYCW4vNN4Svm8sky1GZ1xrL9Mdt55ANs8rNBzbhYS3Z6oGWdkvdrQdT1f4wTsi",
  "key22": "476hUnVyJceSBaz9nmf57ij1SizU9UNNsGwUrrShTD78Td9UnR2XBAnBVREUJUtUsowtoukVSpcoFJoNudVo3ST8",
  "key23": "3MA6AAbQYJx2vwKAyrex1EzSa83BGE3Xer9yrAVvjYyuFvobUQ9QygwJdrmRHGKvivbMcJ2YrshCmtMxBUJBWfSK",
  "key24": "2ETUmcxLA3HhqLUWfATwUnCHLVRwL2L8orkASBe42yC9o3t31s6c2LZ56R8VAcXtgwUWy5n5hrhZpL1EjsU5ufJp",
  "key25": "2K1crsfFhBV37d1LrNQWnQY5t6eQzgLfHZvhQWr21cK7jHv1SBFhZAMysB9kfxcLSN6BNDFydcgYRtGbm7m8WVa9",
  "key26": "3UdjDtAVbeYD6tozbbr3RJz2zUjbjwo3tBnDvTxGhBdq5B7kcSVc8JfkkWJrTVvqqYyR4bAfEA1mMruxVcN9shNw",
  "key27": "3pEsUqb9jYxvVSX2riecSzvRSzmFqpVFBnSrUueeJTVQADwiQ6xZoXtQxveVBskL2Qr3KaJJwArCz35D7zNSVYjM",
  "key28": "5fBXHcx4HGcninFnekkSqkRC5E5q2iDgR2EkxBKXR8PdLdiy9iZ8t715g5RDE9hHUjD9vemQMch7scEd9eAprzmV",
  "key29": "4nikaRPmFgjUiDRz2odGcG9eeki56jwRB14M9fkNWqrkf3bgQfyuL2CFCuZeNLypgVf4CZuevGe3KqX9Q9SDoAxX",
  "key30": "5Nw2CrxJeTszbYqF6DFMqBEWYEYC6HRXNWtxtPpjgB9jcpnJ8AWYKnBJvRiK6R5VQC49McFUf9oR1nr9jGGnUhjF",
  "key31": "42PKTp21nZaWk9REPu7cKRSFbWsB8vFqyVttEt6sEGamKjvdPpd1Tx4ZCMVGovNbrQJUEnMbzD1d3CSS6M2BVKb",
  "key32": "2wnKcknx2P7gTUM6Uy4HpBQv3jZ31KifJJJ8FQre82K7FHyHZEjnRhedQjr6XM9V5dqtqzDGyM5KBf8mYgmuGumk",
  "key33": "5yDhhjG77ZmQag6zrBaCzQ1sAqNhaWdAasdd6RdsDsPKyaEgkGium21az64x8RsyCeNNXRa9Zbaitkcp7PfHMw8z",
  "key34": "5XyufwumkfPPPuSSQBFFbWDcbzx9BPgjv3GzHbszCRmVxbxs2Zd2SEgDTd2yeDdoigUzV4wanXfiZaNd19SvUGn",
  "key35": "QYBLSyRksdpLyYt7c5iDpcomND2VXZzVAggH8h9bDSxkV3Za6P7RdMS8R6zZcriyRdSBa5WB5YfK449GsUsdHuH",
  "key36": "2VmuNRFPjyMZTkjJUXJvgjEHsn2jbpmtM1UcH3FrnSogk5JBnG69xeKHghowmXn5kGTXDc5LdoPRpK9khcTorGup",
  "key37": "2RcBjrmSarBt88mkRrvBLK3UUVnsXAeT1FkvbDPgBMMFozL4h6465XNXWt8NkuakmVpwrQvy22kH7nG567h6ijSb",
  "key38": "62FoYPZq1oaeHw53W6KdS6CHpayG8i4MWndoY9TvGmhaYWf7n6f5g8HkY9Gcd2ijXZ6pR6G2NGn8dckNVoH1fhXU",
  "key39": "32cfJfWvdvZ68nu14bpNzMmLPZTqcDLGJZ2juxUFMTek8ES6GCZfB3jRi82h8agAwvJ6Bdx3Jx8Di5QxPwPNSGzj",
  "key40": "2u5oLGHx6iK4tvswwoFyo6CZP3X8FgP6M2crzNSge9bVujxxzVf5Jw14NBxmhxhM36F79PJ735i3YxprwpZqLJGQ"
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
