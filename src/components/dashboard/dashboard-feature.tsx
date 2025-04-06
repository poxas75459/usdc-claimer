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
    "fEDcWY4BRTdvtECUdPdmBmRHkAHQBnEpNvxeH34QQy1HVhp6Qdzh23zrVwPLVmYDjN8VCp7QZStZEXey64bj6Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XDUS7w4suzMKV3TjRQYvxQL7yuKJetMB2qQX3JDbLpvEnZfXKF84WKF2i5LFyDiyJ4WEo5MT3ZnumtamAkq1oAF",
  "key1": "SyRPdfhm5Q5G9H21brEEsfbEi5GVCdM5JhK5EUnDBtaqgivTuCcmsAKFLWa9KH9MCH76RgSnrqeugVFKfCGpu7Y",
  "key2": "5Ym8mMEmAzrynKszo2D7mRqYSpHAoMdH7Wo9RkK1AALHEm1jikyEV5kMRmTGcVRQDq3QBkwygxYoYhDLnAyMKT2z",
  "key3": "4ctk8rXd8wdqQ6ZovXs5GjwAnu5bKN5karAxmsTEMz4pg8Q87Xa3nJnrsnPEWAc3fWXq3asQgRNgnARXfUskaBxq",
  "key4": "4nSkhZh99JP6rX8VPkzaQVgxTW8uQnFXw5zvp12e2PmHBMV1CAk1HCasdeoqcQYCJwjZ1mJ27Y5j3UX7C9QMsQVN",
  "key5": "4ohN4ibHcLjceDqMqj3Agf8KZX1K3q4zyVQcnF6GFhdnfe3qLGD7DQNb5YnMTv596YBUvE1NkWm3PmQKbQySs6nr",
  "key6": "5yrARGQztVmNFyVpZkZFLQfMYXcmjXXJsbY6tDs6kDq5JCPC2hUfKgy5LtV18XwUWBTuDvrA3BbibitptxvdbtR8",
  "key7": "3hT2HWSxhCVdj7gB4mmBeaoDwDE5o8rsvt4i8imafPsvsdaPx1Mq5Tq6GimNjPist14AcEswGC3KssoSag92hU7V",
  "key8": "WVHLVrPygcygPL62B29ZMKLz1NpLK6A8UtBdeBRG26hLEaXNzjiUv37BMyaF2b2GHZ58SHN5rVDnBgXLJJgXWHJ",
  "key9": "2kk66zB1zVx49k1admvcPH7h9ipSeT2sVoa5Q6tYFsoh65e6cspn7bpHVxvWQhgyFQtYE1Bswi5bXSm52kqe8vKP",
  "key10": "456xkXYFxh1dRwCk31nuaxdAmRNpRKyiqETRP1f5iyp62WHMeno24GYXP8kL7JUC2UoXLeN8uMDv58NqDyiLKn1Q",
  "key11": "4HBNajdU8ozkNBDUk5XfW1NUo4kkbSvhrDvHtJUVViAPq82KuwpkibRqFohPqo6bFYPPs2DAjcvrGWzJTfCsiiRa",
  "key12": "nbNJpVNmfmaz9igEKwTBSkfA7eW7FdJS28EwJBtdw8n3evzRAYU1XcZcSv1HPtm5kLqEibC7Wtme3nAEX2GEBJp",
  "key13": "5ci56rmCEsbpM8JR2wJEziLSvmGy8bqGzu8z9XSA1FTihdn1MdFhLDCyMYYuUq3X6MgxJRKd4j8B2PowZhFZRdjE",
  "key14": "5N6yxFGmE8TjJ6gg3vZMw1KZiKdK78Axw8neiZbsDEKAJK4QXQdQLoGaAGQbqFWMTTnQJBCmLYmEXNPX5sP4uUj1",
  "key15": "2mmXwXS9HkKJeTcocKJDLgcbQaC4sb2x3ruJBe8M5V2jxh7UXpRwvRBMXFQWKnnCk8y7YGFXhsdYXFX2sX8L6GfB",
  "key16": "5gdahdZeQeSE8B1hAvwo2aww7agUvHaoLEeT1U7NifF6GhbNJJMk6jGmFoBSUFQgpSkhjFK3cFmiQ1bVHcR57nqG",
  "key17": "CF1SCwvd29zwhnqJNSRDZhsgQcysDkBtQHAKhFBZZxciRAVzEZDVKS1aRhwdBDkXK586gKQQp6fp85zyiUzgei3",
  "key18": "5phhJfxHHCGgeovhwKW1jqTkhXFihjkxqA65darwyWzyzTxp6to1MJYanQNQqAfKAnhy9QgAuSUMuBZtk215UoqR",
  "key19": "zxMQ39Tq9Fp2QyP1LiunMLMDHG4D3Q5A3uEjgAkrQAwEKqwsEeo2C7XAqDp1iMH53EBfNMyigPSqjtafr6Hrg1S",
  "key20": "4VGhKDAw7UWYjzo6NgpN1kyVyKkCpBWjTWbE1pnK9Pe9rfW6NdXYkfnUuqsWNkGAKMgG22jisW3ZCrSGh8r8XQNf",
  "key21": "2a9SpDyQPsid7MmX6H9CUqSAqXecKes2qNcjgtraSsbcfvdPTM4iuPfRonuR1vrTi76tAbsiqnMbtoJYBkCVmbhw",
  "key22": "2CpxKe3Xn43QHRrF2jDJ5hrg91ctFUtt1rX87akyCrbHC3jx4vvnr4RPxBwVratorYcepvT17Svs2woZRmbPC8PB",
  "key23": "35MChQ3skgp95QasTJpgbW1zZuPEasd6SVATnKFwmAnFNBMqYmQGCP5o5eB4Ha2j8bb7QpHyJ8QStvArT5WfhypF",
  "key24": "25xdQ8WTR89zSvnFguRU1R71fikd65m1KMJUpokRJnHThjUdHyHkSCSG5mLy6XVfcub8jjFagfLbhjbGyBnUe2wh",
  "key25": "4vwWdnRx92FWJqLxVknPaR1QyWqu1C8rSrfQXSc5RKviSrbF3c3JYTkMwqZzjMq9ijVGYTvFuX7CPTYCbCH9KhtB",
  "key26": "2sro73ztJrdK45M4ARHshwns5xF2Nmhi6evjrrEcJkt5XdEdLKUt6PiUMKwLRUtGU9C4A8ZNaKxA9bWFz83bg4QH",
  "key27": "5i66SwBUdKLeRYHG3HV5H6k6UW6kLBWqQLbp84VvCWeHWUAvmikzTWxG1K35v53TmuzdwxgHm7ETxr2wuAurE3sb",
  "key28": "2HVUsGhe6gqbeo1djHBsZQn3zZyD8LJbQi5VqKH7heLn7Wz6LN6CUop6QF4AmsuaNPsTo164SRycAc13z5jgbYZU",
  "key29": "9dzLQGxvBywpkczVqdEXdqAwcxX2DrVgcgYyzRC2vMHfz9heXjBomeZzWbQbxZDxjCgcLbQE6RiMXm61ATSHgub",
  "key30": "4iLmwDa7vvCiTZ6NsikR662RXxjovgQsP3ZAEWbGRVDiNW1tcc7tNftXCMquNc1agrCEbxzMALAZoUtGPzXPfxYQ",
  "key31": "chNQyjQZ8acAxFnK5nYvtEPw15pVJQhDxvGoYArd1fv2KsKDjTbzohCPbDs1vUGByEEQ55W1BGenB2N7kpPcPRG",
  "key32": "3WKWL4KcniRqgwbZVgNZJEHRGx8RVtamjuJinQGGhkwkHfa8V2aHY3aHd3rCchkaCXL4TbTp4gf5QSxbCDFfju4h",
  "key33": "M66Ezaonp3skAS3jUbmAedioHizJ4eHqP6qjeVkQFyibM2rtG5yKo1jfB8iasgL5QiRHsyiHz2TvZrr4FPBuMVU",
  "key34": "2sZ7HyQWLuSBs6ekGdtBvhAz9GWfNc5XqwmT29LmtCFebcqq3PW8EV6C3QTaxy9PciAoa69fNWCyNpxsyGMojpd7",
  "key35": "3NCDqk2k9Qbzoc2Ki4kJhG5Mc61138K7bqwq3qyHUzQyVokfBL77aU2Ymh9qbW5CsimxiQek7CM29nPh7SVDbryM",
  "key36": "57ssuSmcv48Q2gjLBaP57WZ925eTFT84e6vL7jaH16ZokpeRtUEDPUtyogg778DMz1TVMekmuataLP7tk5aKKF29",
  "key37": "2HXvmxJR4bnmcZyuHxqV86H9bSjhkak1v3agjMr5SFpX7M37ubk7c2e2Lu2TegJVtofmMukVR9jUhQNnR93YjPaU"
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
