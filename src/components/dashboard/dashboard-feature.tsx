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
    "3kazTFBmswCPLhJBLJRzXP9aSk7eqTV4GgXCFogfyV318NWsd41CQxNiYgmgiemHEqxotzpUYMnBhDYyQEaCTrrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D9MePz811rYd1x6LThDvNNVSBkN3ypCu4z74sWKzRkKLfnndWSNRtMHKVkWKAMYnGQuJhFLqEPMhcB3v4wp1Bn7",
  "key1": "3aqe8phQpzkBBmXkaB95xzUDU4vZ4Ac19rAnLxfqKrCWM8fPpSuef7Txi5cAAFv8WXhN8yNKrf3zKGRzF11ZTK8Y",
  "key2": "2YvBmvPFNSswAZiXjt57EbbhUByTsLfsM1ZjrtAZBDHpCrzjGuCHeuKDihGvHMx1bwpjTdmDq9D5jsho2GLd6tvF",
  "key3": "57xRoDLYgnVQGv3wSae8skd9B7Vag3ipJyPFUiAwozxXg2i3HewXXfYSpk4qpsvAdPvvzg85Nu3c7xfFBsX8b1KQ",
  "key4": "UMUv8Qzw2FXUNkgFEPuZWXq6iceJzYYcLZjwUQykZkVk9vfzrZWr55gnUmU6U6Yw8tEdyxNtXVe8BHKmoqWWw3S",
  "key5": "25nde7MUgHUenhaYbvTsPK6C1pFNvQzKMRA2wkPcHsQFHwUw4V8SCSJhKtdq3C8m2drXhsVhvCx7YU3UAPodt2su",
  "key6": "5vMR5T4CcKWqvychJkaa3F7w8aUgsAGxSXg57GdAuxk11PskWTAPKnwHDwTAnbWyQNP286ogGdRr9E1CStF2NB58",
  "key7": "5R1y7Ld7znn4UhZkTQfKCdPKSGBzuCsXC9aURzXZFBK2u2CK7H4xgBUfGzH1KGmaCbM4h8AQjBY45RdRLBzHu1ku",
  "key8": "4bsjuVaf3FdU3k7nJanSkqm1m9Q15vfTHeCP8xmgbjqMV1AYnDjaGZYttK6oBUn5vrQdS9Aou9yoemunTqdPxqCz",
  "key9": "3KrfoQR1ppuG5BbxX1UL2GupsrSUmmARD3V5MUuHsZ64BcWQ3P9FBPVLf37myyoTpnXmkoXJpqpdWVLMkaJnW5s1",
  "key10": "x1ctsyeGBGG4Yz8teUkBE7bvSqEcjMnHfgzFaD1ged7tBGdmhJGMgQBeVuNLfPSeFwKwrcdkJVMoEh6jKwTXFd8",
  "key11": "2n7VeRdmwxPHz7t59yEfWoYUJ8wKAocjSFZv1rWR4U2JDp99ZxCiAuHJw2pAjdjUEumAeD8oGtAiBVDcLMnJowrR",
  "key12": "2DFMHNbBxzwy83TnLhvHA6gDKGYJ2ZEtGPzAT8Eoxvr1s5sB8HXD8UpXyz2dbL6qoMNGgSBxygag5e4JpL3Kh6Yh",
  "key13": "8KtpG5JibA1MRGhNwsV1Za7ED8FztfHK3ERsWANgEENYb3yfyuhmLzgVnpLsNUJdQTKaU27uSnYBWDQJP49NEAk",
  "key14": "21e3hRgGEmZcJioyeR5bsxhUv4svkX1JRKj2kayhE468hfiDU1Cth2hYQK3ZGAjLYm81eWwhD32RTYxothqLVGRx",
  "key15": "myHuit6FiEUYDjpLSz2bTwYCghNEd2iK3qmH8VmcazLzYPCbKrnVr5VcY7XF9J7dGWrFmwS9oLEhYhW2cFYCEFC",
  "key16": "2qQ9DUirtEoq9iuZrsdkKyjAq1XQtJggVt7Tq9cLMpVQysDHpGyfuEvXMP6HbUDsiPFKyrXo9TqM8dnafxJUHnQp",
  "key17": "3TsAFE5CQvT91AmF5dRqtKHLa2VkEbMuQbdBx6R6ddXyXcd6kZ9uewmBayoPYinCQqPRCiRwb2mfuZBraZRNHfrW",
  "key18": "EvcUgGaaeU6KcwNR82XJQo1FEwHzG7hFiBDn7y54iundeMd5LMEQcxDwapHJtET4XdoUmZeJMaziRat5NWwESjA",
  "key19": "5SgSdkaXHCBVAQiwNSaGqKd7pR5SEe393oztjkrdQEFRYMWS33CWjpYEkoa8Cn31WmWnoCMtFE3ubdeHmD3tqJC8",
  "key20": "4DuUWDSEctxBYHhPGeKPBQ1SRZseDUtKTak7wUgjFcs77hNwk9JyaWXiLTvMiLQgmHgtJN2oNBHEj9RWzLAWzwCh",
  "key21": "4QvRyiXJAJPf82HeHvJz5Dhxyek8VwWQabozWNMTFR194ccSinoTz3qHGoZTNtsP2rn65WCQcwjCMXkjgFFhgRmV",
  "key22": "6kp8VZEeCCBKbfZFKTsBnB3qsGVS3gb4wudZ8mJRsNA4Ygzy687FnfWrrU2YWSCVLmR8SgE93VfV9suLbphGBLz",
  "key23": "5AHMzb7bZTkD9wupuDGaF1VtwW3k8FvCBcKt1LWhn7pBUg381bU2ia1p5bY77XUhDVFVLychgrzTsZFgWNLwJfxu",
  "key24": "3DTkYwxpP5k42DY8TTPF51UUJMXwQX8XkWuuUKz3xJLNkPsRK7yophsyFBAdkVUDcR22uNNwkBgUJRkdM1BtcR5x",
  "key25": "26LY73ErAR1SMcJmvQQicr8KX8Cyb3CU6MLBu8RTj1F77XEbnd1FLZjLXYMV2jWaiLSzMjmxU2YP4ThH5YE1amsi",
  "key26": "2MrYW3LE2LxR4sjJPzSkHkurZ71CpHJnh2fENaf1y4KKYSRaMxGMPS2KQKJYjmYXpAUsxGnUZXZuapH1ZJwU7FCB",
  "key27": "y2uUspgE6f8EhFqUdghm9oWFeBwRrSfT3vKfFztQNCTbwKMLu8ow5LFS4usTUNd88AnrAiwBNxNHw66toKmwTjD",
  "key28": "4XkorVUhhHXpSSrBa76QQnxscgmajXb2LytitZ4biCHaA6LGn2AJqUVeh6X9msm959vyKKxh12dLMu1hGRaENa4z",
  "key29": "66jVZAAjdALnTCMMYCah2PVasc9Y5hegy5XLwo3qZhNM2pq7Xwi1x19b711Nmdiqs43w8gjaUzhE5jcNRtv5AZPn",
  "key30": "2ySvpAezF7QFbmPqBB9mZPbRNKcSB2dRXQf8wfXRuqw5JnaiGuv22SuX9RZhcWLDgH4weUH1QUqk4m8CdE6eq2QK",
  "key31": "56RbbGcCyGGzWkGC1Jk6Tp13wf7tBvWhArgCPG5LSrvo6ZxXZiUcX1n9pvy8eqoWXhmASpDFnhsJiEBiHLwJyQYe",
  "key32": "5FwVDbufSiqKyqnVGjgWPjp9ieHLDTA3pPP3SoYayZGRdA5P82SaEfh5wjmXCAx2JJ6mYnmAM7DSSNBC2CHQNi8d",
  "key33": "5YcbHYnA87FJwbmMQfUvXbqMNWYmoRMDbmZ7AiXsqp2PgMjJKprUrQixEiMmMKcoYV9mwUq7gKfwjXVyWzrtiJ4U",
  "key34": "5TzHoCzCbseoDZsxR5ZrwPgbiniXzfUYsfYNK1ECdyVt8AFf5zexKr71S1k1szcfMJJugfCXB22iYpD3cWeom9aC",
  "key35": "QdmRfTpcN1HbY5Fb1kL59JLgUecysEyccP9zjarkqUW3hAnfw4pHnnKaV32MQovYv1zoc8KYEQaomiAb2hfJcN1",
  "key36": "4MCW418DHXMY7NLi8cNcGuYVoUtzPwLqAFkntF42aSfFcK5aUijmaitg9zDACFkkp92BPejNQjEhRnJcQMQBZ4Ch",
  "key37": "2VduM9y2xuCGiX1VDiEc7QW1s3s4QcyDJrse2f2GnogCpGAuSXKKynHznxgiocxGFp9DKUnp8QbVkdxnwifXanvY",
  "key38": "44jrYqyhVnoEKhxTKQK9miwtAZn9FJr5aiXgtKkrssKWyMHgLAdPff8iaqR1FKwS3vegw7fKkGQJbzkHsf5co7v5",
  "key39": "5pPhfFgJEzHX3C9hKnjodnMjRzEGLMGNvQ4qBWMWDuKC9rFob4Q3tVz7Nn7e5RqZuUf4gVaLnQ5YVKxbkkq1aE5n",
  "key40": "66nn1UuS8wvVvSP3XnuXYhKQneZvAHhX3z4fdQviN6D7LeNuf2sGrzvGxbEXtbFt5owrZGdcmjin72rbFnCZADFQ",
  "key41": "2RmWyrefRncNnSYXMspwxsuzoqgNifjmYpVbDRDqLpHeGyJbgchxMCtoY34KSjmVVQmq6wchxkkb7W5fx9ZrwEzn",
  "key42": "3vT41RCdAS8xpJKNJgQy3yXcYZhuhyucfpQd9Wmqyso49uA1WCEc4ZDuUBpPajHhm8NyCQocgMo1uvV8EYKgsMun",
  "key43": "2uXV65mb72voFkohyPCeMLqcWAPxYUipWyZDmjq5QtBgkdjGYh5WYKHwvfxphi1kvuEnD2wPG3yG6dAYS69YQgdV"
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
