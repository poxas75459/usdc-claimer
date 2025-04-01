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
    "csXtg2HrQwas1hcS3jzvdaThTYZNmU82baamFjmKLKU1KXPf4dmR4b8SXxbZn8eysTKyYBMyStZZrMGSjmzngnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3886is3KoeqNBYiRUvtvSYzeVWRMbQpPmnKKmZJzDJbkTFdeSL3BgqawNhbaNiFyhUy9vMzqvhKeFJbqzKLVHbmv",
  "key1": "4qZHu8E5CGo9u4NTmZaRPrVy8BtA7r7tezcMW8ZoXjsmXYtqDUkCvbpaQ51ubszpK6oH8jnwiyt2tpC9KkiDLdzb",
  "key2": "66YK5Q8yupyEhgVzABT3zdfg9973qoi1BFMARm2jHNjMeDdPp3XzWNittBXb1NU59akBpKfSBZCf5YDQu3FKa7Q3",
  "key3": "3opi9LtKEwt5kaGPfXVtMn4pWTtfsbCjpJnJKNJn9eJf7X1Z3ntjCP3fEpj8TiY8TgeXZ61hMowDywqvrvrB5fZF",
  "key4": "4SDM3Dkb412W4LajoSbpzv77nGJ57zt2XRj3F6C89AVgkvSQrb2b9nNkQJzf2RVc8suwHscDpTnnVHtxv1jSiUNE",
  "key5": "2VWJvhj65JeL68T8Q3ENLn2jbRLmHSKeNC5ftfxNfhaeCZQXscTfpbg1vZHoGusdphu9Cvw2PXvGeVwQwnUjfPPa",
  "key6": "PodRv7vQoBd8XprDqEnY9xcR6j2w1WTWB3dq3XusyEUUZ6itVNVv4RVqtskEgGRQuYXJsXoW3UwjBuKRxwtEiAV",
  "key7": "3n3wpoB9dYFCDaqhJ9hMoK6RK9c6f8uYr1nCBF3X52goR1csHexd8z7xEkZ8ENzY79X6vzE1pKiKr7wFpv7sLeFc",
  "key8": "3XWDU4E7TtRWDS1njA7mrFbvvpCDU1rNF6Zki4zngqx8swar3fHRqUAfvTNh9Sr4918fQbsQUuHd9oN3tz3cScxB",
  "key9": "2eg8dm94U9u5fnMiV2j9GdtgedNe9uRWazrVrzsPH9PgksKKgd8GBkqdTzNqzWm6vF8ds35g3gAZyPtFSP1H5A5K",
  "key10": "3xnzRDKePU9D3LZZe1FwnDReJytfj8PchimojruN6PPMndcYHhjbg3y1HPvjxqLjKoEEswoJbk46uj2hTt6kodur",
  "key11": "49t6NCxXdcvQrLm9TLCk5HbzBho92FbVibxxU3pURGHU9m1M818HH8GfWXXvis6umLYcYeN58HxPheZHKB37VpvB",
  "key12": "2QNZ8RajTFPbb7bmucQs78te7U6WkcjByG28tDcCDaYXeyrR5qsYWXDKYZ4mjmvPiJLb8hfDH13XGDZWHkbtMkXp",
  "key13": "4LVpiizV2MA5sMNkQjVLKHcWEE1pWbWp25SG6YNFoGKothXGcbPyYEsU1D3bm7vr74Mc9fCDQtFBshznXLrqpaiB",
  "key14": "NLL4aTWnsgTqX36dgTrbmaHdgnF1FvJRb7WCT1bss1gw4Z4soEQ8noNF87b6SmjDoMk1UkwzSGmeimgsta8Nn8Y",
  "key15": "2RL55nSkJS1YnHtoyvyc3NQkKRHqxJnbEavSxbDgEAYXJSGMUGKH6d1btBrswujTvHt9YX2bQsxmzMd8BX3zikRG",
  "key16": "2r3v9Rp1dFCpEfHXj4uHtXgoPQkg7PYBeDgseHZj5uutx45ay9nrkuDrNRfJrHuJR9duuyVTDNyTMYpRnbyTLGCq",
  "key17": "41cyBGbUPJsGuxKAdKTfXuLczoRGTu5y88cnLEkmj5oSb26PwoSV2MnSj4x3U3EQyNPT3f9rVWY7YfwU8bWRQ25b",
  "key18": "5sdzyfMBWEReiJqSA9cHx2wxyHGWhZBgTuuC1vCDKtgWSiRpHWPLS7N1nuJ6CxqgNFiUzAnYVCBYhfDUwUStu1yw",
  "key19": "2wvLbnQ6LYZnUmvWzg7yoP7eDLBSgeHBiLxn6v1m4gzqaJwPFzGJjSnrvjggvfNBt3UAvrUiySscdLdHjq7YnSpA",
  "key20": "n7oPLT4YVin6ywxiDHkwe4q81LFTzNLjMdA5S6ocu7BCZnxKWJymnwysMrJtv4auXvVnfdCj56dmgT2EeqkGBJ5",
  "key21": "2Zngm4dard1VAPi8SVDBEb9w4SeyEyzoYU1EKY2tgtQNf97CBwbkfjy6wACarL6uu1xM2t3xwRAjjkAN9HvcZk2j",
  "key22": "neC7DNTZFFsyQCEPV2Z1yd9WsXgzjr4JRNTALJs8ce5Qds6wwzDsosJ19CgCwtcPuGdcPYWNkbxSQddc6fCqHW4",
  "key23": "3pkSv1pNxk6LB8NgAqQCUXoDhpbaxgQhZsJFKXUW672yuhoPUmCbmA8ZwA7a2G5q76opqwfexmVpRqfc2UWh6QqR",
  "key24": "3h1NhhEoDb75zJbk4ZisfLKsEjUUkLoVVMcVzYBMRnh4VqzhQ5bo1CN1WsiWq6xeQuKvQQdnn16sBWvWh82ebFVU",
  "key25": "2CFEho4pPULz8p6Fpm8HgLbuWgLXnA9mvpwUVwq5ojWho5pVaU1oQZVoZD9gf57wCJMkxWEjiJtdM6HYEP38jqkc",
  "key26": "2hfq8sSEREq9i55CWnSrYw7wj5ngsnzyFfSTTiUcFWQAf6VxVBvd3B76gTokF1zYa5enWfTXUPgCSuX37KiQ5D6c",
  "key27": "2WRo2bf7XUmyhESbKoBoFVo1KWu65MfokiDeNmYj45hum396QPwV7WGDUCN5P2kNL2zXQPo5WgMHXM5fEdpAAhs9",
  "key28": "56bqE55yGVhn18bk7Jx6fxGJqEXQzke9EY5HLtAb1xXfrLdEGG5PrHnhTe4ctfA1ibUfz9FV8Xc9gXYGLbnQ3Vyu",
  "key29": "4pHQVRa7GjZB47UfNT2qvqpxKKfyPLFPUBqyxt2nEyXDMC146s4c8jZhmGURKb3KfdSMGjqsdtXcBrrEF2Uadtvm",
  "key30": "PuAui6huvpUn2tgHEFinzQk4gxu82GBsyV5coJd8ieLWX7bnPuWu4fLyYmRhEUN6XigkGJXRXCG7kkNehCWwhvk",
  "key31": "3xbYW9bymsBCnkXU5QxqCLu94CJxjXaWoAQoNtXqAstW6tggQHn137tkVjZN54ttA7Lj5tadFf31i74D7zqh1XL4",
  "key32": "4K4ebyBgMQsyyvgrD5tqJz3CCj6CeSo2kSWPGHBjLBgzmdKoQWBwUXENVCSea164S79o6DQwnPhmPTDcW5s7b3mJ",
  "key33": "3tYajjR4PbbLpBCxbSocJFpXmbsvmXWyYvzaBbJk78qiWhReCSJ4oayAPSH3B38auYdfmjkPPHNPZTXFKJWXeeaR",
  "key34": "5Gu4HwrqK5Wv91dQ37bNVn2MbVWBVTG91pVyWmPrCw8J2qugzXQjASuHzySQfEkKiagbEwZgtZUqdGexfcd8UQVp",
  "key35": "3t1wd6M1qSHiCqvdeZNuoLwpkAKcbvxfbF9tRKWDWh3kE64LMUi94iHxg78thJ3mJhD68YDbAfL8KJgJmn3Ht1H3",
  "key36": "2zimxTt6vcyX78hGKVheHXW7vkbPL5bcedcPDQktJ1LVVMs6Ynd8YWjwHQxmRuUpzkYBxsVpiVGCqn4rx1yuQYuv"
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
