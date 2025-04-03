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
    "3Yq3GH4HhkTuMVNu5sVga8xbX8R72L5LfWpsRPh6gBPAYb9DEvdgaUKvFMwxR6KRAgvju3ypL9zCcW6fw6Wd1m3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VCSr6soixiNKyDFGUnGkZQNnBDD7aMT9qizKzpubktcd2pNpsBk6WVRjrbnpxaGw8qBDBZeXqKYCU3gamhUmf1x",
  "key1": "56tuBT93iC7e3xCv27C2HH3WFn64eVST6FumTa6DJrWYbPF2BBE2ik4Pk7jHGNRwvX2THdpmqGZQK1T2oxukYKX6",
  "key2": "D1BzSbJ838eoQGJf4FJ86hbej9k52MaCFkLgkf86eqgAXHznGzW72gYziotiiuVakS8nKb8r4cmpQ3fVBdys1e5",
  "key3": "2tTWevNonwDSQwRHzyDkfPKktqL7amd3X1yN9iZHfSu5aciZCRHutaM84uo6FNvEa4WeWPbeW49uvK541E3hp1wf",
  "key4": "4s37hUrPkGtckv6q4821abPcFbUwPVsm4Y4wBJUUyd3ncih1Dd9T7rGjdYR91iiCB8y4VEC8qAG4gmuDS1eHzxbw",
  "key5": "4RKiCtaFbiQxuvZipwuaCUeT5kbm4gBo2L9RB9XiSjmGvXm7xLq9KHJDK9bp6AdotRY6YqiHinxL2N9sZpPxBFpt",
  "key6": "5uE7for5EaiRf66X8kzUBmhVqPMZFdeGeir4udim7mzRmLWH3dioPR4wzYAYQ4G2rtbuYQW7C5VE6NwWGfGB92WR",
  "key7": "5GRTsaPKwPCRUuL9uLcmQ3HxTukyYBgDWFUNQ8eaY5TsMC3Thy1FPfU6bMwmekprVaYqoqCsCJNTw7sAvq3NWyyH",
  "key8": "9noodbC2udpFAErda3FGnMQY13uu9Cg2oA1GdQvBLSFDVXFwXMmZwr9npMmQX4wVWKvns2moQJ2fE6Q42vkvjsj",
  "key9": "Y9oJ9DeQ3Ft1Rzh1Hzx1A6dwWu3ftTk47SxDZYwCYJeRFzDLH7SLwUhc2h3B4maQHdTkRtGmycLhTUKEw9u3ykL",
  "key10": "425gLAhKCZ2mo8EE8hgE1Un8vbvRwHyryPKNz9rievHzSNTJdXNzfP98sqhxbcMpwVu2zDgqtnCbYMYWcftwQ3fK",
  "key11": "3bMrvJHMDMeKbVhyjyK9osqbbfJnWtRtVwB3FMcMZVYUXcCEp652cURoVCVUV1LSogAEBcJevErTFyrapvm8rfy9",
  "key12": "2yC6GZ9m2zjhSgWpQU7cEfoTkHyoK5xqrvNQziWzzE6CgsW1umun8kan7wyfBZk7VqDh858anXyqhs1njTQ64d7d",
  "key13": "4a9kGf1BXM9RufYhGig3jconvFaTTL5cJtBDTWffRSJt8u8FJPGXp9ZszbwVtJMeqQVNcWbdA4iFoPDq1HAV35rB",
  "key14": "2b1b5W7yeooBkieEMfXESdQzHqjA6v4iG7WAH9eojxAwXejHZYEtBgeAvum3qadRZSkUfEvMEtHv2vSgRLjKpKyZ",
  "key15": "dRUqoLDLoXW6VLkadQpBniN5iAbrjFWFvAKZTnLFBZ9NVS7DEpiQagiB4EwgEzKD6BA8kMM6w9gve5Qdwy23314",
  "key16": "EWM2sNjCo9JyQ9SpYgSYiP6VZwcbQ8A74tEugK2bxoUtts5d7DUvMZBtZLEWZjoeaKZLdLogv7LyNQtYiWGjPFo",
  "key17": "4kKqzD4FocXk85TLf5NSmift5z9DEuziPdiQ2v7VfURhLShP6MkprTErrWYwrgyx4RPzYb4BuBzSJp3oPYEbo1CB",
  "key18": "69sSp2LkgFJJ7pRGbZqicmTsJzAKZ1PCBwRPpGavY3S9Dmjx3yMTbt1WnBJMQLVnTHUMVNEgNUMMpj1bD1G6Yt5",
  "key19": "56epZAj6SR1ifrXvunxLdV8jEc32wMqbn6ZQpHYLfbMfVtB3ketxHDwiwYj8tWvgJqnsvH6bAdG6QWhQ1x9zbTjM",
  "key20": "5YAMg5J1eGZSzuaHSfT4ch9wVu4qCYw6gENYhEZdM1Bx3SwnXAB2AamjtE4jHaPWXknBCArHYVY2DnpqDJGW7NwC",
  "key21": "5imkS5nVE5MxRy6qHNAWNMX2534bYqUv46zNjfs1GMLkSZZdfY4UoUM3ksXggbT3ZdPP5Nr5MN9KqSNHmgvgZnco",
  "key22": "2vECHFmTnnb7Wqr7tXrh9VKXMUMzajp76DAxLDtbZY4ZHKePbMtL62gqtc1FxRD3jikm25u3tRZKoXPR1djGZwFf",
  "key23": "xxz4kuHC1XdQWs3wi1t6Xb9E1TD7oKoUqkwJLaoQrR8ACZionfoYxDdXvaLVPHteuyCwVqu1YqaG1wrBT15F7Vx",
  "key24": "2a9yATy7ZSb8PZkzXB8LwcgsoJeXV1joU3RXyoh5MTRVeFJTD9iUoEyLwzVfgrXzgcRYvWGjZoKPYnzYpyG4dTzh",
  "key25": "5MRh7PziTTG5EyVd29Ga3N5NumjmH89L11LikttbgjHvZNXuYLUySAPZM3z6ZNwVMFSzEWD7KUe1t2G9tJvkgCpw",
  "key26": "5NvAP9tYf6Ty7jvv33U7hacBedRGpUgiWSeqW5Cq263VTx9QgdNh4aXUUmMoBPGVFUAea8nFqsLp6jUM3xoGRkBr",
  "key27": "2diBxTj93QZ8R6BWs78ew1mdmLE222QFK8MJhvCnTPCofmvZH5cnQAibe125XYAfU8edzRzM71iqcmFP3pxA281",
  "key28": "2RrvoFqNa8hKsvnnns2uAT1BXDM58vpWsuqouafas4ad2uku85tryiTH2XjYsdj5QehWhB1MjHd8QgtPzEKZ8yU9",
  "key29": "5VKQbRoQJCDEHJbXp1u4LRuZwBZzff21rAcxggYCgUVHN2af1L4T7DzyhfmM9RNNAQq3Fvpb5By5RiPVpYq4SUhE",
  "key30": "5XJYSQeDaZ5ecejmazQ9tAo3K9ddwN4T9hyTmfe2DsTzA6MLeq87Rrtcp2caVaJ2wFjntkWfz2t4Rqr3QzEMDRHT",
  "key31": "3qLoMFoSWCCzGzW59HeTrEUHBEHwhMSRG65EpGQEsyDaBRmhtapQekxuR5X54kCvAwpQux4qyfWaUfeoXkj4wHN6",
  "key32": "4ABEXABJeM5HctKLAYSBrwKkFAWG5dVPeBry1hWx3vS5RxifUPpZxpk6KrdUwFhMPodXjDsQHqsZadSZroTgJa7Q",
  "key33": "4v6jPfjLFFksdtLFNkQWeFt9anftf2KXLuWui7ZhhDGewLiUmMRL8tYPinqDbJpHw86nSc4888yMNRaqE3ZedZJT",
  "key34": "2j5DFoVvo8XWGxMDAvze7Y1paHMyG2qGu9d4C6d91quWfAr3TXKB74RKyJiVDPtLt1r2PbmTvYcZDtaJRAvU8ZLe",
  "key35": "ukw63TgWgPn8SaoBW4ficoNKYMim2WAv4pfyhLFV3sWf834Y92rAL3s2fLttzjXX2LoKjQmAAiS3BESAd2JFfwe",
  "key36": "5HPambTCByaMgZdSXiVvFyAQx3zwrLb2FZMHqWcwKWUbheAYBkfqTjgj7w6my5nYsriGC4JcTF575CU8PX9u2CYP",
  "key37": "4bk8JENbuSiWszgQSMjXH17x9ue4u3uWfTfpoqnFqLTY19md8MeX779t2Qg1wjr3DxM28a1Q88HnZsr6X5xFNEMB",
  "key38": "4Cd6PZah6y3j2hNEFVNCCuYLjUtwhT17ZzW8Qbx4L4oiwa9QQq25SyZ3G9StbVB7aC3zsZGPpWZbZiyngzxk7wud",
  "key39": "3meHinmRzkGBR6HKXosj1PzGQuTE9UWWMddTRa7xQJCP1QgAFSeRrr6ff7eLz9p7LXMCvv7s4KCF3hv74QudQgkM",
  "key40": "4ZEguLNaTg3Adzz9mtuDUggGWQUKSRuBe85MosgBHNmWkjKw7iFhBWHzHR1GtLNiqxEiS8F2YBffhRfS2wwFwEpQ"
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
