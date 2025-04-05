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
    "2hAgR9jdJzee3t8rXjG6EPLBSJviVSDMRharKJjg2yCt3EEDr8x7oyYpscTqfiA8GeV71N8Dz72HufquR9QpcCHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GjaYrEnSoUAVdmwHG9fTsEEWhhwwiMhfnrhDQQYPWAt16Xs7YN7UBcqbE1mYrUq5SFjCCsNFp5cCfWwfUFoweFy",
  "key1": "4URH3GdvXSgj5SFWFvqtGBQcXkwXSBcdmkddWz2dZyvWoksxBKDWg3vkrfi9D6JfuuLWh91jALGxCcYyh6wvfpLJ",
  "key2": "2on9BRdoFjd3MDmDa5atUWf1ZGcsJx5xwYHPndukTT9ZPwL4dhruRAwHqpct4G4Dz7ECzfsBtC9RHGFisqBBXf5P",
  "key3": "3H8cCkgpZKfd1dM2n53TkNbgycRpyjDCKRWo1X1aa9qx7WB1vK3ULzJ5bkffQ5w21w7UAj87zkxbUuUjrJ4cdtF8",
  "key4": "o2ec25LcDR51U2Ht6rty8wQVriB3DfSmEex4UsUndrkB8DCTxpNDaRYRL6HwvQc8ouZoBFzLPx2fryp7rBJqqyL",
  "key5": "3HffMMuKQ1FG7JKQ52FvwZ41KRRDo8NRCZV1HAchwBpHVVfkpeJGPrJQFdHQS3DQsz79PY6Jhx7ZKTtyXheS82oB",
  "key6": "7TM84YEHy1hJCC3Rp38utUEa8vwrobcmsGUzWtpbtnik3ipYg8qenWRyyvTmNJbzkWjnYDQbmVJJt93RbDXbSHy",
  "key7": "GsayKN183G3tVSKCrbWQEfs7onWoC8M51Fs6LwMBTHBzEC3dQiHcJxoCBt6H6vbVBkDcgKLBSSPHL4FB8ST8WNU",
  "key8": "4xEBPg4dh9cwBsLPVWA8ky3UKWxYtpahXPtbn7hgNFeF52rfUSCiWrM6vT8UFoPT7TvET3HpBkycgZEvLJgUMDh8",
  "key9": "3TJaqoQ5LLVBPdP4NqUZK3DTpWeKVZHXRXWPscswhd9Gg2oS72dHhpJ6sVKJEmbu9MDaSdpjkwSezePrEPu6sgah",
  "key10": "4mj68dwyKWvvFGQ4NyuBmrKbiwx8GH4tqvuGfry2prHefeuFiFBV6DbixYRPPvxksnhn27BEzkByt2NHcTvdp6KZ",
  "key11": "2vGtjq2aDTPgqvtDmuEPnJBuYqVgfyhjbdnG4twusKy7F9C6sT1oaZoDzHyjLhb92wJMBqcsoyB9GkdHmrpJagh7",
  "key12": "41BMAcUErQ36EJzBTf3WjSkqezPFoFNtzBU2m2iEJyJ7ZtvwtQQbDrRjRShGmBCHQ9oTwW4GkJHysFPui92KdJzt",
  "key13": "jhKQRFr1PkyqgLPE163XPAqvqgw3yskDdWeruztpjF8dt5TxmXZJHCSmXX39BaCCnhowhUURZtwaTc4n1uwCsFs",
  "key14": "4ow3L7zdJz7s1EiG1szLbe9UqQwwfJdKAj1cNrzQr3Ra9wWoMugbUyZZJ8ghpWBE74FHvv2UwyyoH1ZPGh4xM1qp",
  "key15": "2fL4NSQK224C14tjzB6zYbqF3E7BdHyabZSJaj7FGQF9n8YLTH8iFoWsATHQ8qHYfsSWkUQ9m6SDXM4aWoAKvFcD",
  "key16": "2SMt2UwyLaFvN4ETfMoQM66sZBDppPLFzYwLwJeYVJy4nf8p7doe7mrtSxbSNRF1YEjymKCgbAKU9SutoCs3ryDH",
  "key17": "7hGzUN5VBVywABrNUUtQAFedrbMUVzX93sKYZkY8dvwPQnHSBVueZeLirxxp8JZabGHfHnKnsMjNgjppjPBpFYD",
  "key18": "4FLoMkxhAK3uyvLzeqPwoBeg13Eixvzr5mKGfL5M9zehZ9ZVhM2butvfRCM4ZpguJLjSdZ9AUu6yHP4EXJBWDTJN",
  "key19": "f7xLRzMePcd29THaF2JMMKmDVnomS7sJsSGZu7SktiKVuXn33tTojjivQB51qhBJDS2jfY3VMP1ZjwXc9zW7FiG",
  "key20": "gkt9mC5DmXa1Rx1VDVMx91WLLAQDacbSVfUuzRDGsKXQAEnCegvr77qYPRjyo1MJFFG8MMcNGX5zCZQTq8wJp54",
  "key21": "3VgmRKnHtHNcpmzz7XwBnenjK1tt1tXyMmXvwfFpznRA3kpfqcM4U6RFGVQUF8PWZGB4TTBjGL6xoxoTzb8xMsVG",
  "key22": "4RUBsS3dodvubrpaCPqPE2MkVu8Boy3LwsFoKQXUASVNCR4ippLXm13GCfuy8jGFVxYAjYa2dA1t1w6iH8E5YZxt",
  "key23": "R5L5RFAwVXDzegFYsBE7s4tbSoooQmXW989LGogvyqVp8vzECjmQATgPqv6Trrv3fYmVLqDX6yHoZeNkx8nBKqh",
  "key24": "4U3EVogoKTvYTx4fZ4pcN2EGpezXBTCMUugpA8XwN9hsps1gZ5J5CjsxjkwXvrVebb8c1wZsRVzZTQizRi2ShMHr",
  "key25": "5NiUBapEVuWmJByrbwR3S79o4nC1qDdoFL3a9FRYUXcyUgrCgGgLKEVQk9CgNii6eCYJjFyNZoZyZnq1FEh3f1bP",
  "key26": "3BBVMZPzFEpekYHBwZQak8KfsXKvoQ93f3CVVzD5pNADkKSqTbZUyhMwT6FH6aM2HSahfjcP1dpfknUu7GJQsja2",
  "key27": "6fRyk8z8sYxVnRGSHfRi5b9CuuBiRKsrLDLCuqa9ZKV7eYFMjeTTUPFPC8DzUUi3gfHceNTN2iRjxipf7gfauNJ",
  "key28": "3uLbcEU9oH4DkGcUgraME9eGN7B3WUsV42ahgqGaFtY8rU4s9Hb5ra12uZqFQBbTZugvCSGqJmwFFC74mrakKuwa",
  "key29": "3MxAsb1zki67S7toPb1qn8kaUAykwpkuY8P4nJ1Z7eh8Ww5bxnSxVjBqyeNghKHRByFk5MfcWpYZvJuMUzpPCrmG",
  "key30": "4jT7UvNwdTFHgCP4TRCLu3dAUFjTTG1Q8zZgh5pnu6rsSi2HrhMXkoaJosgswpyWsso7Xe1QC9Ts9pETPExTP4v4",
  "key31": "Ps8yv4DDkpZbLwFBAKgNWTLwEUPkyXfUZpMnchQSH7MLoX5vkDePCaw8W9iUpyjrPzoPNkgxeNniEkh2r76DyPB",
  "key32": "2DqMW3EHfTpnUsYsdmeB8HAn1CRwTSLH2jYz2gXKGbpPFaDgAWkmHw2ywQnf4A16AZUA96ErXocuYsEuq8uLoCEn",
  "key33": "5WXiavyEt6hJG1851U3QzwdGFmwKUurKk4wwmBLgsBg95NBNogZ2pJiqjAPhUMqRL4rYbf5CkWN9zwu4JYKHUK5v",
  "key34": "4LFH5rbnaasUSBwpxNTxL5UCnuPn4q71DmdfbH5k6mff23QNqP6xuehzZNGAhkY38GJnir84mXzJH3V5wciiQ3Hz",
  "key35": "23Jn6jF1HtRDd72DLnm9M9LQ4QpmqQwtyUH4iSnFbcbRwqyhUtf4MVCQH9y6J4exQCTgz6U8XJeggXBUKGqNPSkD",
  "key36": "58uy6QRE851whsJ8P2WzRxNU3knbuh1oUdBJT2NpvMnowhfKr1eHmqbgpRUHHgXJQL23ge8XXTGBcrt8ahW5zZc2"
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
