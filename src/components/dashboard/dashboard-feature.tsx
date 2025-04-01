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
    "pieC5kBWmmtENDoYNDZHCR9GfbNqQLKsnDAnt4bmt9L7EGaB7YTNbQApQoGg13heHEUjdjpRSK25EfAyqegjTGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzNfPN1b3jYrLtXrR7P91PxcLf2UFLkcdhhojx3S4XMLjXB49nbzjUuftyYLwCVVAz69Z1DxeGzFTP8Uq5BSfhW",
  "key1": "5q2r6UFRveyvHh4aE9sZdnaoKurHWP6ZJv52KJeyCDrx64YS8tB79Eop326WQr9LR2QYVJgieRxVtyqhbfLTRhsX",
  "key2": "2zuwbKNMk7CCezsQ5xThKuhzLHWmEWXQqoMTjMGJaXJ3pRC6qqG3FCYkQUWSrjc1XCWa322sDPTD1QfQ5qqdGWCT",
  "key3": "4kT3MrcPhcejLsWnQJePxJcYQXC8ZUkaMVDtJCSQBZfZY4fVsvgTz4yUGmptLFu8bnpGzgNRDrFy1zVNLLNKVpCD",
  "key4": "4TTmAzCCvnLETVse3sYM2iknqJrEhcrnLvUGyPs45gpNffqGDgA3mN8tTxaXNYyjMcn14SgDiGvPsyk3Hwd8bkVY",
  "key5": "124pEd3zBDKpAyua6pYY594Sj9FJEgoo1cxm578edK2vh3iudGDCNwjP1mCzCho8DPrgiUJR7FjoPWwBYQFvFoR8",
  "key6": "5XnSVvb6fLvgw3RD6uEiZ3frC93ANbL7ThvaCyVcJd29CP2FxNft2bySh5mn7ZWRPisdcXaoAKzyTnLWcFEfBtqA",
  "key7": "3Xe1kr2eEAFqpS68SUxY5FQceZf6dmwSxdSYDKAbZ7BN2AuBppiJArEaMcH8k8PjiHfW1XCpV3GsWnU49QcmoEsd",
  "key8": "4AuEwF9QZbLoHbwAmPKfiS1FiYtGdzQr2peCD4pqMuvtvaA6rFUa7kQUB9xaNcCe4osn6NxyfLqfL1eYpqQ5A3hy",
  "key9": "4MbFii5AVsnjKxMsZJuK8X6pDPkdtnZqP23yn2CkSrG945xjHVcq3FuGXP25zGuD17JYb4989hGG4dK9PJveHecR",
  "key10": "5G8958DUxCYF9bwSyhCqUyLruFd1iESH7u13nPz3GkKANiL4eCB25HTgh7oT7r9cHc81rZS8NrZpsHbg1njv9MoA",
  "key11": "5DRhA1VvavT4Z87ckB9EG4rZg4WiG6nugiJ7C63ujHJ9w1ejYndEWXgsD8AJyUba2TWnuwdoYY5F835KGbMotF1g",
  "key12": "3TZfR18BNFtZZWJzwd5JLL7JxG8N4if3U1yqfpfbJoX2cEkwakG8DqPB42DNzYodCMsLvYTJRg4bq5XfPRpvcC9P",
  "key13": "4xALkbYmihHFp4ViEcRCctPDYiryxgazZAj2swyTkmDteV3tmZkN4j9bMRCbDqJLEk958HPuaMJG6xpLEubSXh4k",
  "key14": "2Nq4ZsP8oyfv13ef7owfWvmJYQHUnhbc1PJ9Hkp1soR5QQMsxGbosRdEsQ5UYKyRLj1eb4DTb591b8ToKVgchhBk",
  "key15": "4ZkgWsEvG16JQe4gfZEsGr6eADtVMj752hb3XFnrpcqVSPDceQs9HMsHyvBD9RJckbHLasoV9nNyB66BZTrNTHLr",
  "key16": "49TtPDC1MtdCQr6s7XkPXknc1NFjFXnPvETCMf92ZNqsCjYCSTT5DHQyuuNHaTgd33L7cq6QiY3dPJov3KQ7uGa7",
  "key17": "QGfJ1Qqtonou5b69V8BFF4SfXvy3smSmU97JhTxwcLXaLwdcgHLCnWh8rT1gHuyqUHJpsRUZpzyzG5AHFPRvPoY",
  "key18": "3wiu1TRFnC1bmhiMTMWU9h7UxZ4Ct7bjy3cptowpbXLBmWgStki9Y71ySsNrm9w75A8BXYX3f5Vf1uQRsYKv88mi",
  "key19": "4jY5kBqz5SdXTtWfAuSBT2unQT8B95KJRxATkTXQQsSSwJDeiYb8g8mJ4Z7kjAxnSovYUcwqxa1juSpcsr8MA3zk",
  "key20": "PDQwUFRD9mmJXkvR8eweefvG5aj2tMuL2N4kPQn9mAkTmqcSAUumhJdy5sKDACGNwUfjLZezbMDvMejstXZMvEb",
  "key21": "2KKr7J82EsLmdUP9D9uXuB1gFWPuUu19qG57zeEVhK7ca8VS7NeuDdrrrYVRGx2ZbNgBZLdukXxh9ugBTQ2FFMFX",
  "key22": "3LbzUi6tgKW9PUBfx6i3TaDNBFaRPockkhRMyC2XPbyL3SX8BUrwH5nieWPw7iooiufawET2qyya6jezbAArkndV",
  "key23": "3RCZ6VPymg5frqSvLyhzLRWKYSQryWtAjQ3Di128CMqhvCRwJsjMjyWTkMcpjDD5No8M7XVpRxQK8qgXzoS29Jz8",
  "key24": "2FwsUE5Yd9CZh7pkLwnbcBB8tTwE5FRU5mCiy1p7gFWySkfdB8pSoYGyEP5qf1g3SUUoAnJXEjDXHWGmndpCohEg",
  "key25": "4sPRYK85mhLDk7vCXPznrzGWMz8xbkK1aB3sb8xbAqKb2e5pw4SmvBv3aLEtCmXmYavRb23tGbDvXxF3vBnGKRWL",
  "key26": "3YX28skMEfmevwN9oqPmEqLEBoXYKqparMw4AyjJ67Z5PWqMjT9rgd12PYcG8R3t37YfJ52fPmJYnUk1PZLwN8e4",
  "key27": "4vDSkJR87mz4n4WSvuLo66q7c9kQBBtdjfZBmrL5GngowSTDfWgYnFbQw7nu3SvDeQPHhVQXjVfKbZVhXNdpFqPS",
  "key28": "qqa74ZiVATiMk2LCeeGyS1bCeLM4ziUFHyzQJEehHgJ4qjPXBJVQ1xgp5UwMdv5NBSTNCtGS4cjzrv8s5bvvDgH",
  "key29": "5kZKKRYxVpEyRGyYoACwJTHJcA5K5eGXqunjovPZdCyQvhwgjkF9bwRssQVJzxt3St89rbx91ZmzTZuxrqpibYa5",
  "key30": "5HNcnuYU7Tr8yqTf61ipDoQyJBqojyXjTjqasgqihh5cr7ECYL6zwSiMYpfhuwR8BGKvaRqV8MxV9NjuVHJLt6mn",
  "key31": "2K4unjbMU2qSWkcMMrGTvMC8Ru7stFenm7kTRg38Se5ouCzRWC6HbFU9GPzyTES1mEsnjetJ859b7fG5V9pSkLRa",
  "key32": "2e4cYRDjVJGVepcavkxbnVSwTBcyMGabwa959N9AGXjmEZGjj77bJg2TnvUaYz5ojadZ96z9sM3Wu9uoAmchu3ES",
  "key33": "wx31A1rfmqiLhVJznRvHYeiK3sm5DwxdLK8VeQqFv1uXipDhruLKJpDZB59qDKFqdCTqm44j2tUS4A2HU2R7F2H",
  "key34": "3XkmEMGEpfKNmW41uBkQL6VAbWnBP7K4qKLVrL3ejTTzgzE5SL7kmCWk7nzzoa2vhHRvetL5UAqGNskVrQhnxaTV",
  "key35": "5caun7cNtQGS8GNPaZT5errsZPE8Qrfo15eTjL1APjpZ362Yw6MYSmkGJUTDeUjtK5qLAp3MT4wrtN4gu8XY2PvB",
  "key36": "967EbUh6sV8tukbWrv2xQ6oBWSfjybmgX1pXPyJdr5BRdUG7ihJQEJNUeHBq4XhBTEjjsspdzv7Msm7T3QA9Ng3",
  "key37": "2JCo7m53diAXWJxTKT4g3kX5s9dsRJSxcnyynoYMWAxUfr8YkPqjURyU6HtiR12N1cst7jrydtrLDsshPQZpemVS",
  "key38": "29wtayLCQmuLqpZquH1hjsXnZpiTZkQJuKVE7GzQN19WHjaaB2FfWrWk5M93DTXoz7MF4V6dzAuVS8Pft56yK4Lj",
  "key39": "5RfbxuEgUXMuo4uLqr4A9uC2jEUni29UtuKqHYcgY3jB5pHKT6GWkdY3ccV9WPDVTBuVoPHwFAfQK73bLRVHfwqd",
  "key40": "4n7askgmUWrszNkuwvsPZWS89LofaqgPa7aTaH544uwn5gYJndYeeX11NAWRJ84Yr4DoatynqMryxvQHroj4TizJ",
  "key41": "5DFDi7jYKLYURYqVfqiMXGcP1dD6YpSSx5AuDwvrVDXHoyiXeb4fhgFeWRAa15SCW7gXnqb5CGjqZBDGTpQWoYHR",
  "key42": "4DER8G5aVcoBdpEvazSgyc85eDUX1NyNcxkAKA8CQJ1gM29A3sAnQ6DcVHLQWHnQvigjRhYNW36h9suwHYbBzYkd",
  "key43": "FU7aEFc7UrqNDCDTLWmNGr8wZAJ8KpRgYPZDRnqQGnCdj79Nr9aZUtfrppKew9r8TyypNvfkmoa3V6B6XLZJ8fP"
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
