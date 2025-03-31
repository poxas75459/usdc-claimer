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
    "4THFhcdAV8VVXea8GLZZptFQmgSKjVpSgT1YjCVatM7roEtijNUKziwRZztt1eF94VcJb1FEeMVQBKSV7ywQjXzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KoqE5Br7AAh6aPq6u1wC9B9QtLVwnoyK9KZZn1X1z6LuUahJwhGpSeaWUyGmTJ2w7XPCmSVgTCKfSxnBT2f8Cvs",
  "key1": "7S3a5LFcqyxLsP26HRtdVDpELNsaApbsm1pncjqBCHzAx47oM66GdztJFuQuETEWiwg9iCRH6WrFHDzLJLcDjRJ",
  "key2": "UmgsvBUSUBkB34y8ctdHH8dwH8zie63VVqsNMPrew2bN3e5dCRnEpucoBMoGjueNK1X81fxUM7onb7QfoMavep9",
  "key3": "vCabcZz5zkdjbeaGWM9soqdWyw7nnsmFYN1bftfoDGdvJKwd94iE9nzhAxmdeeuxChsUkzSByUTCqeExr7zHmni",
  "key4": "3Vr6EME5z5up4qWZgNf7QbW6pvCDw8a8gKPMvePvBc9dYmWc51vzauDFGT7vzHwB2mYHPhFzL5QGXHsaeXbeUw1k",
  "key5": "4Atrz6siydVbf1i33RJGj6dQ6oeTMyPjqFnFddpS5bCxHwHpNLBtzR14Z1Cz4E5kbuCaZrsRmY5Zv4Uh6crhfNqT",
  "key6": "4MC9dcsjQf5m6fFpU2p8YRUdJapoWkxRC1epTz1uyAf9nnjHtBc9CkL4HRDLQLkuwQqz4cLmfawvCHafbVUyrpua",
  "key7": "22UEvg2wC9GgLzo6joQkXrtwudF8t7KrGNWDpGHVbEE2856Wx4fHS7VaV8agg6C5D13ESBomqb7w9ac1MamwwN4j",
  "key8": "y9DFuGTNgwWNfgmmwRzGWq8VKxxZUqktTPvyvEUhZjgP2NabEtYmsSMHgjT3bg8pDvfrW9Enc1Nm1Wd9f7kX4fz",
  "key9": "wj3fLERxnML4UjPwSXYrHfogRsw8qyC6AsR34yKFioiDVf9N51oWKdWCYxsXjcfc96otgWTHSNpDtk43vxYyaSG",
  "key10": "4uM4hb4oyJE4uUZxgeQgpy42uJhDysnehRfBwnEdhSXzEfFm64i73ddNFVbhyzyeCMsso94UjuRLAxL9oYs87dLy",
  "key11": "3QuTZYRpNtMknTDj19qvcPLzo1TySH1ucY1xfS98YciyofH7KPcxwN9rgxBEf5XLnFgpvw2Z8XTwcZJc8VNT8nLg",
  "key12": "2yhZRRMTTU3mHouNAskuz4sYwhWXAY9fERuwmUi7yLpvQgjvcLXzpuRpBvSihUJn7VqrKMiGsFaLe7efWc8ozfyd",
  "key13": "3PiUiUe4YzuTmX2YDaKuKMLaUp76a6BnT1GKsoeGaw3gNLcKDC3iPNMKqoXmCit8WdwJv6GotFwAK94TbwWEcn5a",
  "key14": "5W4rzBuhCChFQ1z4zKjPZYp5v7QxtdjenV5WHGumbQ8nEiAAzj3kbvETGrD3gqhpXXeGduKEi5SCLMKnHCyjKGNH",
  "key15": "3jvPkbBTARydKMujV77v6FXnBYdnBtJTRAirtqNWkb6aH6keezoWWWrE1bdJ2z8uFwg5WaGhadsVK5jX4YkKRaTt",
  "key16": "opzwu8qHgfaUwzij457undtbTzm6xqKsVtrzxvkD5YxG5nH9fyswxU6ne6w6bD9DrE6SW3jo7qBqs5YdoLA9AZj",
  "key17": "5Jsjsu54QgCe2WmZVVDA1fE9cYSwFXJqJxzxK9XUeEPkNbm6fqvfoSGugq3s5GLCMfSR91Z1RrAfrUddmXyKYF2h",
  "key18": "dK2MrVscxphPgqavWsFxN5uvezXDh35XCNwCj9XckgyrbzTunyEEUQtATnGRUmgwyFPsKFcxcBSzywM1xvf8h3K",
  "key19": "3S5WGYSQkAPM4zQpGUKzRY76sVPPrAYrmdMyznGkHmQ7CQkegBDsiNXRFjtfN2dfdMBx5Yrve3YGAypU1J77dcg3",
  "key20": "5jLyVwQbis9gL3o7ikHBNoJPhxqYrQGnH61jraw3AAnCrZYLs72KkMokSj19hqphNVzdcBLwTdfe52kpRqfSTLwZ",
  "key21": "5xdmvuDv3FMX8BZEBGWjb3jk14w4VeRzSWF57FSGCYhB86CcvhP8g7uWBRrTabRdCxUULPE17z32Tv4ALxZWFrFF",
  "key22": "5ocMgxJSMUDXNntrQ39HcgQg14zET9tsBTmaL1GGpFLMFBPjeYNwJ6dzkvzTsopcAwVbAi6mDVeY3xjZT3A3KnMM",
  "key23": "J8448WFzr6ERwQqj493Q599SMEyTzQYQ6gXbnJYjft2UCWMZ3JDjsVMBmfZmznxhbQXVfP1B35UBuWEYUddFmuj",
  "key24": "59n4mM3rVa18jcRXfzF5e4Qu7aFAio3sR8upkrzJytE35zw5SK5woqA5o4pkhrmi68jfUXUSSoxYCCNymHy3VJJa",
  "key25": "4z3KogJMynDrJvU1JrDfG11VLHh25iZRAZzuCe3327L87c6Av5MnvgWucs3xzZJhyQd8Vu6njNcuZfUpZZ7smF8q",
  "key26": "5PRn6RYZqxgYNxfgd9gD4dMULx8U9EtJC3tgR7AJBo9ALAuPrMPAtLgmExoS9VnrKqbwG7McZFE2fap7Wg7ZcFu7",
  "key27": "4PfU9VJXoEzhVgXNeBMVS2pRCko2dF6S4zMCZN695w1ywthSvfTGJUoKJpoWavX9DpAz25DCxS1kqHA9mXX4bptK",
  "key28": "252qgqZhoTevv5n5DhtWKwHYcFY4mzwvZR8YEX71FVvp6ckTHNjp81WGjzpHoH84WCTiS5E89wgE184kkQcnYi2V",
  "key29": "hTzmn3mGPxVBwiRzjcia62PJoePx1JJWfsuZspXGJKqNwdvcb9ovQXQs5xgpSWYLjArHa9yEzGYrh1Zmj7zf1Sk",
  "key30": "5kXTbEJTddYxYJwgeqCMTZmvBwEgUDtm3mAt8FpKHviE7aVvEBNR6kzQrwRWdMhdume6KnPGF2ZAgGUfgf1kT7ee",
  "key31": "29SKZgG5RvEQCnGTpoMQgncZQ7ggi6gppHaHdbwEA1FoBWZUx99EbxXCu3amRTeAAudHc6vHXNYm2VFTWVVgqPHN",
  "key32": "2L9MuhAdqR85qTRojpkviFqjHqPBjZ3k8bJq4B6fbPFN8R3nj5zVzFJPPujZ9vCYPSXk1LusdDtuGaAgcfAArknZ",
  "key33": "hy5NnvpEUVp5HyK35UjnP94oWFUUbDUPCtHZov7jQgmugVQKwjLjweTLYtdo9kUk2qKkwKrTo78qzwTEBefQsyB",
  "key34": "24wjYbJJbvQE1GK9F2UhYCuK9oDTK65NUTYqHMt3gNNiNdEKWaNGAmYq3NBpk3eryfhsCSGQymERwbPtVUNCpadE",
  "key35": "3x3fAHNi9vV7Mi9ZUtVQff4koHvPLqUrQwPcmY9eDri1nF9an4sJpyGEp84RPfbyZUifncs4fTCGQGyWhz8Baby1",
  "key36": "5T32Hm4pdZShu8WWgyYFYHuE77oL3Gfc3Ft5jfRvPwZdpM4yW9bVXQShcBudQQ26fipGbk8oLT3cHaSz9CQNY1TD",
  "key37": "2gbPEiopAQGm3ti8X7WqZKQYF5WfaXdAAkGqVn4j58JTPEGkEDmmqjSnoGX9KPiYhdu46hRc4mfysYkTJLVrMxMb",
  "key38": "46fvpBwCK7eo3KUU7JqSH5gFscC7uP4kzSzegYT3izBS6CD55epoSdSxAine8Bb1ur4dUEzXCGy32HGz2qHQfHPB",
  "key39": "4Zrdf3AFZMLNkVdKoKU8ZzwCzaJcFC2GKsvgYbrsSSQsReZXnDmbxvAp5jiydHMDk4P6qDdVHZF6nZ5hCwvUqZoB",
  "key40": "Pq816Efd2fd5wngvBpXGqcd5TSVCa86RuLcS5mxc5iKXe8fRUPbKK6WzBLm9dWutzoEzVaLNNVH9hPMreAwkEb2",
  "key41": "2mxs7ZCHTWo2TVWoscmNk6LiDPVxsHFLCoht84sYVAALgESnqD8KYTTFhYbgEAUjx7tUL7aYkCfoXgr3psjLT8N1",
  "key42": "VTRAFtoKgoELRuEr821AUTm2Lk8vYWamxGKyVNVetsyojafD557WxGGYxCMLPjUgBL1R93RwE3diV8uWY9mHtar"
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
