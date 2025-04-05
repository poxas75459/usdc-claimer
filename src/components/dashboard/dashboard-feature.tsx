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
    "53pLnC1bPcMowv8RnFKjqXAnUEJ943owDCcLMepeSS53pEokVy6s7y129mTLDekyxR4z36CbWYUgLZVS4DnbEZxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TU1pYax6azArepk3wJsiPTiTNUnomznhVpLLtmfYyLhPgkYeBzUPnjEUifDk1iCn4GXP23fqggpP7CqTCq1tzCb",
  "key1": "VV3PEtu98oEsUG8S7PG2HPWkbmkSeQvRBPAWcRSYneJepDSACNGFdWUzfmsf1BRv7mbXaQq4PYBMcm8B9G6BLeL",
  "key2": "3aKdxQGSEN8NcStEyu8EiEhev9bM5pWzeRqGQwei5r5xR8Mmh9vZSLVhcGnAUdJhFbvU4esj33cyCKEmXNk953HJ",
  "key3": "3e8ZmQiZs9hPV1WGR5bWcQ4q6s31is8o7rLMvFMRP8nynqJ91SxYcya23xTZi6oa5ka8L9Zt5Gh16y9fxtML9oqz",
  "key4": "XP9htht6jrHKod4ncmRrzqGNft3kvyS65UpeMwEuW5pgoCQzT3xP67oh6Kc3V4uDMQMuqrxn1uFkz5ryxDqvonJ",
  "key5": "57PrSviNNbtASgVbH687RCVZxpR6H1j8ELzRJJncEQVwfgafVQKG3YhKNtRZzDrhX7jWn14kFZHsjBenojwTHXSN",
  "key6": "4w1pHcgvsgcDfapPwfnUEpc23W5umLGsxD1fh2T1gtQ9ozbkXascg5sKHq9D3NghuMoSdqFzq7KxKPeUnpzLKFzf",
  "key7": "4JnDwiZMExQhjjXhE6ru3sRidpHcLTh6Y5f6ByJoiTJHqrJTryzmP6wjbCFzZxSxSHjMQpCrTQHE4Mi3sKqSE1pN",
  "key8": "4wM1EbWxQhgyAhJrW1PW1CExnDRSSGdbSmA8Lfc1FMcgXAERqXrNxhU8V3o52u5AK1GXxeoHrVkfbG5uASCz4vDm",
  "key9": "mzvS955yCgTDDvoH4PDaupMifHeFbBaNzZTwBibn32oW1TwPXMyuGyqxuLRgkjaHUSQRhJ2fdvaM44zsm2Z9d2y",
  "key10": "4xa84KVQL5d9X11ESFNgYkpq4dT6PqEMUrdKA1xqHk2z8d7rDu5aHaQ5m2V1AMtci1sh62rk9yHtgvMfbgYmmtVY",
  "key11": "mJjhWeNaBcxKLeXaNgk1D4SjYE66QB5b3orGwD46SvyfXHAePSqp2pwAajVvoADL48xG7LVryQ6CDkDRPBA4r7t",
  "key12": "4Y9siXsaE6xXpG2HhpZiWJBWcG6XFvuk6y1UPatF1FfPLssr1zoPUvvtUEA97T452juZJpPn139DdZ6MgjhLkre7",
  "key13": "2wdd1DRDwXtp9Y7Dxv7UJmN3VzV2DoDUHH1zBVJ2gt39ta9R7A4DZihyVQJDnpJqeZcVV77wsuHPFfiwfpKspyKv",
  "key14": "2QZtaDn3B9aRp9UnnPJ4cCQoknZwGxmCyoGFK7k9oSUNR7adysgFGbeV4qnXAWRNkkCF4G1sw8jscHi5CVzXozoz",
  "key15": "2t3B4CniDvKM4RTvrWHNYe8ey4RcsGpPgMY7uD3QPAG88VVa5vj5JgmUsaGHNTB9tGyu1JZMx2qQwZYRFmV4M1Q5",
  "key16": "uMjRByenb1GS9FApJLGjGMVcbiTbPFWXvxCczwo2PBcx55iYwuAHF63zZEgcPRZwzcgvRsFAdZkaA7QbrNt6hBK",
  "key17": "hcwMLkkLrskErShWxFQHsoR4NAFgSvqM1UMHVBHbGV9ct696bqVGyUhqoAjtdZaudb8YPVsaAC2xWHsPQFXoeeH",
  "key18": "4Y78Guoih9nmfvUhYW7eC81a1uoZhnkGonX7zNGsLW27XzgNHzYCPcRsRY6t44NubtKfDAoD1k4k7SznsZaeJ2S9",
  "key19": "YVstczk5vSrp8asPz2vabSKM9xxRBDtbf9tya2aitZ6JxQR2DeRXFN9SFDKUtzkbK6pRf8gRT799vuwvSAqqLyC",
  "key20": "5Q2ARmuhUjkrNfdPonVSV8kCuxcoMmDJkZAmn1bQCm27hdzomn3ctfSi8kcuECxyjmEz1xAsaJ4uhzUumX1KRNK9",
  "key21": "wRsXaRHVDQL7mqSCLodji1GUNuoqNAi3eHKd4xXk66fwyaFvL5QsYuPtVKoggR9Yrk9QEvHU8iZVLTLFSFra1dA",
  "key22": "5jVq14Vftn5rRo2c7zkMN9MenALnezawJ9bwBmLrmZXMJAaNdxgmAkDQqTvu3ZvQmDQeeN4u1tyr3iJgWSo2ASk6",
  "key23": "4UQzXVMHA7iJkYYGzWmwmrAESUTDZQgVnEoJ8uE9JYtaRusiDDfiqRQ1DyENLfwdtayhBAHARfAmiSd1U6xp8YFE",
  "key24": "2G33v9LpHGYsUjP8ssxGCXbZXetFFE5jmNtdcNVFBSYBMQjWUcL8Mntaw91cHj6fGUWcTRDCkveDqpYx7s1KckrF",
  "key25": "4rTAEgEGcRNfqqtzWosJuRRb34y3xqpMbWeCCB4arSJQqvr9dPhhsZxih23jE114yyD8sFcUbt57X69Cx9GsS5J2",
  "key26": "2mCX2jrEzGQjosGtXumxov1Pr3MSEBMS51KyY4NG24dadCR4NV5MEo8de3MDYMbphr3CjAZQo3LDwPA2tSutzZ1e",
  "key27": "3WbmNaeYBVNLB4KQMtu9Sko5WmfubUMSANtfmN58hdbShBvguPyodSXgz11bmHc2uCjENfLswTHWKA9BzaMEhA77",
  "key28": "4Jify4QeovaeNhzMfi3KUK1v7osJqs6a9GSrprk48Pgzjm8sjbJz915Vtj5V7TuaQHrCE9FHCquVLoVNT5T6jCi8",
  "key29": "3xGnCaUjdLvtsFiQU9mYhCsA4T9DQ6KM9dC8RBuKAvp7s1iryaFNYGz3r43pS8fFQ78oSY8wpTVF6Gj4E6qjJwNb",
  "key30": "5DfxPkRDTkUxkctn3o1cuoXu29oqf8Wq94qoe9q1fMvPRVjPAW5d1dVgWepLtJZv8E8xazavvqn1eMcUfWqZamwF",
  "key31": "4LJdiU5xxTBcKQcfhwwdMiR1t3kbGP8zsbxsEVfoJBznuYkpmzis95NTc4ept4KC1yuSJRuEWeikpc1kmfKg8Z68"
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
