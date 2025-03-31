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
    "F47HVGhXk2eRPbeThyw1sy1X6JBSrURfzdwsgmmHTrdKt4hH4Edohv9hdezayfno1TtbTdEt4oC9aPByT5ZfQ6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62oS2rq8Z7861XBkTiKnamCxKyUnKekXiYqcPJ9DAYPPuJQa7KNV93ApcDDXzFXYmwyWGppij3YEjvL3NdAx2vpi",
  "key1": "2oqnNFwcpAzPfu97YUoVeSxC22QVScrBJ9ndWnuMJ7yyvAHXcgzFChuBu4NzY6rkhZTPzgZA3V5hDnitBftzXCga",
  "key2": "3k5kJ9T4Qv2g7hKY61Ge58ecBnAxx47c3cSbRjtpp4mnQK7BbM9QwW5XVizXocgaALes5bnpzHLUGvPG1vtQpe1U",
  "key3": "3V8Uuazq4NPSdWACMfbf45YX6iDUurtWznkCCaScjugckdqES44P1NxR6TFUZCGvSDiRRjBvo2oTMst2ByhuZLG4",
  "key4": "vaDX3qb9tyvK8W1K7KVR9U1arzZ6aGAMcd1x3Fq3q3micTz7KpGY8qY27ANH2iT77Zz2icfcnCzYoqMCavY9vSP",
  "key5": "2ggD8EpkLXzNzmoRuXuHokpkPMHqYBPVTsVx3vWcer43x6X7hwEaGyvvte8eVGSDCuU3KV9TfBs5dRvtbabdnAbe",
  "key6": "3Jcc4GyHrmQfufccXZiC7KfG3DF6cH4osYRyPptnDwohiQg8sNQBLTS6HoCzXhqhULHDdpriEZTRtnmuzqhDRhxM",
  "key7": "3ucFxpeUB6AWM8EVzRSocgwFmWDtC2V7HrY3hAxJRdsyvfDQ9qBXMhwWpup3jJxWaWj5uF6jk7U2UohRyc1udG2Q",
  "key8": "4xQEX8hWzj5v2eDywDGYYnY7iUM2tjfKUdCovgeXzCNsDREWFsy8Y2i1UJ9vKFwPxSfhA2Qd23qbYKEb8dJV98QK",
  "key9": "TPZi5UCXw1bRMqj2DAAAPRsXc32KcRFGXUGeLtgEHSMAZaJcWgzVVzz31Rhow1dostjArUnzcb9P5KmyEKAxiNK",
  "key10": "34Q237h57C4ypbacBBR6hxerUMrn25g5gfcvUeVnWdwyAjk6TMcGwaUfdMVHrGvoS4NLsRB72pexgs7GKegNWijC",
  "key11": "5aqXtZr3uQ9do4CiLnnE1Amos62wreVhBiGLcVsNFp8hknUUwX2CeT6NGeZYe5tVRWoVFm9JU7dBaEyLmFJWw7Nm",
  "key12": "2nw2QU2vrswEk9uJwAJmGNBBpVtSbHwu9YcXnmYUYZQ28Z69UeKErsXRM3uckp3TrpTwvX5n1Su3qoF5p14zWrLN",
  "key13": "3ddYcBTKpCSYWMGqUzZef32ABkw4UFhSJ5Ud74RER2cKpthxejTCrAqfUrLGASwraa3dfpCFktNYSBuTFuU7fH6y",
  "key14": "5bYV4QCuSL9Z6E1FbZQrY4xfcbhjngVhS6QzF2UPjcgDcH2DE7Sy3pbBVAzkdoFnEVXc4wAuaX8GcCHE3H6Bq21q",
  "key15": "4i8aVGszd6gUfNav3Qjgx3HjifD8Mu9kBcNNjQP3FyNuLvMwfUBjsYRgeeFpRRkMQUfnQd96pXCkp1ke1NiQvkZt",
  "key16": "2xj7VqxdFr4qMWYJWZbzkaPfoKcLPcfEUfcZXmqxEohpo73wP7findF6ZUNf2uNZtnPxakdjS84FTWsmWjn2veXH",
  "key17": "35pezeJ7NWebx2BpNhaRk1bVirt7Rp7uEL91rH4SAqPKSm6ZNFqjstBz9BVCayrU6vMcD57kyRyj3Jq7GF946n9W",
  "key18": "5mSMpTKSM1Xo1ZmVCD53h1t5yTv5JhtjLe6UUc4h29FQDeXxNaDX24rgHTJdp48dL88NUeBhChe6RaWxVhbAScHg",
  "key19": "4wHn9pAbz8UQ1VMAr3yox2j1Wkq4hJp1z2M3aZ8YZagYkxjjBJNufWWFfUBEehB8rQdGfSxrBCvgZ9cz5FHWbTVd",
  "key20": "2Hj8vWm5eBozzUXMWbKim4XZxGiE571jwwAWTcz6Jvrn1CBhkWjF2bdUBMAo1bY8AtQzpTRQnabURQniFS9F4j1P",
  "key21": "BqDbNj5MNWKs1dU61qV4n11Ae5zMXH7JJrJceSUbdeR7XUnrFdQipj3nzHMp7kDgf86JabC5MC13dTmVyokqStR",
  "key22": "2B1kjtKd2WTF6R7krGZf49GnDheY5uydd6d2EmaMn65x1sHJkAcnYqS2tZq8JM95b2N9esAAGDdPoZKmCkS7fj3P",
  "key23": "5kWeMpkDSfS4NSiSjdMNqwiL5QPisjHbucg4T4MV7w32rNqTXkSQ8p3sA517ETAP8STU23MUamknmwuc53M73uCk",
  "key24": "21wzvKozMgBnicWsjeKQ9iSyef8Avq4nHTLaxvdQLnSzEQVXh6SQkzBUoYQx9aXRm37LkMFopyvoBbnZjvTiT16Z",
  "key25": "QGQaPPgBZB3YWzWABMMrBDy2MQ3uaf5JvHGowSnS81fAbpf6RbbK3tjPLUqL79U1fwdmPyi6wuLfmkh5nLQncML",
  "key26": "32xi72Vuoq9voT1Th3bkr4qBL1CsULYA3DvDGjZfh2E6kMX59t845NopNtxHmPsv79xauqL76R5moH1KQKfqMqkc",
  "key27": "3F5CKyhXfMz9ZmT7BRmY5jUx3iQxhXopdveukkUy9moFWijd4GvFhbniKo6odtURWrw8rUo4RNid539vE5rGKHRg",
  "key28": "47pwpoLmbKCjMDcJvRu5GKLYQ5H1dqxh1ib7jNiu8UzZYej6N4h1gfQyRyukYdMfvs9dTivrjJKR854Qo6duknEA",
  "key29": "5KqsAfVeVSqDNoJZDpt8kMbhLq1Xjd4tvYk5Bk1T6dURByeCvfEk6Fchz8hpBdmBuK5AdYFjCscTfjaxkHgerq1y",
  "key30": "34qRUHY2YZLcFJwghknHkpGWwVEJ4jW7j3UMHuX3xN3Rgb4SruzAxn2yav3Kx1G4aRLyKNNacDKTvXi5C7EyrVxD",
  "key31": "pwedH6s8wnLicqSmsQu9sqAtukeKymC9NiQxmCFxKHF8hurcMwV1xtriv2BXYyVAGCM2kwwSB28A5cFHeA55MRJ"
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
