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
    "ChPQVTy4mh937F3LcAzuKjHFZHxn8wrpZFeuoGbcekndKGz4Jd6yhAPU7kcxQ6CmmSJ9r8gx7ssLaL3Kms22HWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cmhzCGRUe3FKU95FNkAShnRtVXDUF21my9airvv4oJPRstHYKEbFyTsSFFLhhJ93YHQhHvA7Mora99LvzfZfZph",
  "key1": "2Ujk6qWcqKfE6BpBGDZdc1DCTHNHeScmb13QVDLG9oeLynAh2sNEu14i3xHAPuqDKdXEhDNNo5wKWWPaj5RftQKr",
  "key2": "4RLwXBySYqBAmnHe144Y79ksGqfQRm3q52ab1TQAroo17XXZd4rwkCgSfAGkHjE9GQufKcUoQwsJeHbfU8YRuabB",
  "key3": "5SrZHpiD1LqyG5T6JnvBkM6aP7ERBzFcjGrW7JumVZaC2wzZhYMUPnaHPADWs5YzZzr3FaER7kgBAWx3fWXoUovb",
  "key4": "5dcdiE771uZvpQ6K4N1yNfcUBiAnRENkoofYybsXNnCuzZXozXnjKgBLNSzamoBXnHuAkCHNjcF5nmcbLYiwztjQ",
  "key5": "2J6P4YFyZTD6Zd5q2aCkNAJghMBRRThcAkir7yYBEafg3mM8JbmibWf3Q8NCHFTJv8QCppKrPQGVVPMBej9vfBV5",
  "key6": "494HfVkvESwzCrYVEFYiqhyZCQ8jexhFXazW1ZkWFJKwajhvmjJfE9knTQbNGuht5ssyFsokxWZXtKJAUg4uqvup",
  "key7": "2YZfbNZdyPLMTgc9ArLhSBXxXdYQp2pNezzGp4ixZCBhoLtmcjD8RttbUWDhwuScr3kvLFuMXvX8ckWqhjBBkvGE",
  "key8": "4ak4dqKTt4XLTjUBYSXxnW1p736zJeji3N4hCmhWFDShJ71cPF52DV17ZpUVRpu5zEcpUrLGow2ewn5CJKT9ufKX",
  "key9": "2JfPDxNb8TnGpMy3qbiqVkPP95dAiftgDTyhngk7Drnw5m6kUiCjZbMmr6yMYh3cnLmBU8ob5uZiEG7pQWaawKRY",
  "key10": "5rwrLKxYv3q6W7PeNhLAPKkFoSM3MCPojje5d3sEzyDPDt4qVvpibWrjcYe6B4SJvieZv4GXLuZPD3Yc7b9ALG5x",
  "key11": "uW1UKKDPbBiXPNqdw4AHYgyqcKgZDNadc6dtdZJedA3hmkvN5VNC2mohCQv4BC1M3g6gUiYMJp8yWhaxGPUGxmJ",
  "key12": "2ycqUPdrwajHD6ZBsrz7uqeb6vKnKL5ByQRLmHjsoqM5Q7CDTvytycNxeXq8sBieikoXUAY51YuxdW1f8W28KrgS",
  "key13": "5e6oN2DiFpjVFXiCk6E78LheRM8r6a7gf1SbPyeYDDG34VEF5khjs3VbcZA9k8Y8cCiRUbp5mYnPAiPLBAfxSKFX",
  "key14": "2a5R3jZFBnCavjxRyEQtzvq8iehZrELitLKYJjBdvh33fzywD1J6mBSYdgX4zhGAEY7EKDgwaWfcj46YzTVqAt9k",
  "key15": "5re12MkddzaWGQnowPxqynnEjCFj2qcDpzjxNU5iQqR5w234fKoUR337uv4KhRqpkfB9G3ETJXoNT9ByB7mFFPin",
  "key16": "2Gvfuqgv8mEWetLyjBb8S8dRCQ53RyuNGgDtMb2e1LvdPETPMri5Xd3iZFaEoxbqdxKxHnLfFtQ5P27A5iC2zEDb",
  "key17": "Kt4eJdnfaeZCD2eLEq8QkZ7GoTxNfyRytxJ8kT9m4ToRVAsH6gQiEzjE3vjRMTAmRcC9pc6PpDWdcrtk8y51U8s",
  "key18": "2HYXKgVADJkYPDbukwvX7dmATk2gJKcAqgATH9rSH7An25p62CdfXF6q8V8gvdnZVNdo238gV3G112gDRDkEDn8Q",
  "key19": "44VbGerS8cGYKQJ7Jzqv8Y3mVZcnS8tyJcBQQ7Q78azTxD1y6uSn6FPn4rfeNHBor2Zp6w1ayYhCZWAhbEoUFzSS",
  "key20": "3yn8ivo4MQcmExiEPuYqCCVar8uKSEjXq9GRGJKJrLWXJXDG78H2UfwEW2uFHjpw7wqyHPQbz39Hjyj7YVSwxwDW",
  "key21": "5sKQAcDkwoyogschL8dTmtKoKbqjrzca81PRYYSTKJwhwxxrXb2dim1SNkvCa85YtARR3sQrgXnKThTMXVw2qw57",
  "key22": "5hVJCpqpc8R6NTsTW3ryTCrfPNRtnw3GcYhvGLixsJnkorAg6XNppDuRv4EBajKaxWKoRBobP6VgyJQhXL6sgKVx",
  "key23": "45T6W5hZvQZkrS1iR28oD4b7Re4fcGAEa3N29wmLCGHmcLs63V2MpJ9hTvBTjSY5nU2CYksDFn7HSdS2vrjy7Y3x",
  "key24": "4YHcWVjkvwRbSWeya59xsQbiUDUhqbwc8cRPspEge9huTdVyfFg1LbQdvPvNdwnwy4weXsceAjGtvcEhZ46mVhLB",
  "key25": "4tb3mEHBGxGBijaaRBXyjGZUmjJHHLc4hNDbZJVUDvShEigrte2ajgZhLbKu69SRYqGTpbRCi2axxaTwV5LiC9Yr",
  "key26": "5LuB7767FaMDGwkWNqXNMT6BcNWqAHCD3ktyZzZ3RyD6gCKw4bZjSGD9pdcUJvJ8tXuKaZsQj9KRThkRdwhYHZpU",
  "key27": "3WUNTCHGJBKTBYrdS21Yj79uYhWuQ6Kky6Ee1DXV2Fzfwoyx3ZsKCjj4YnCu9r733SCpnnfM1HSKUpMSNyNPTbVA",
  "key28": "3HSydqywht3sR895XmAzPV6qzdTxkWVNHAfCrsbK5z3pESwHxRQWKjJUxdfzFUSUhbVMo1BxPG2NKRDGGke44HAN",
  "key29": "TAAHJdrHCZaaTsGJxBCHsH7mCAYbuDQxfGJBSTFVQNZGRfEdivYCJ5ysTumszc6xMbNt6xYaZukX3AapSCtz2vi",
  "key30": "UZMn9BaJjjMPXKcFCRuaUeCsUb6ijdpc1No5H3NicYkSnbwbt3gxteT633eDRxYUSpCT1RiQPzirqCQTW63zgar",
  "key31": "2cG7fr1TFVh1wRzxxP8ndGTdygQ5S8Z6LC9DFqyfg7rCL1QcSMfNjqWGqiUzh1JpB2V5rV4ZdWsTmDgsXTtt3C9W",
  "key32": "2NFXQVWfhu2yDApQ7UPr4156HfehGkTuHAMnpM1umhZYRo1HnrNhCQ5MzAZsN12dyjsWGdqpCY5G3u7wcYB7h4ZU",
  "key33": "Bk9nMkFLbDXUeYe8nch7fsrNkeEGBDpnKPmwWEujc5marGhjDSCL94zKCmgdpNChdHQoXzsDUb3n9so9wg66nHd",
  "key34": "2KjAjSgiXqB8hQgSsxorWLyrb6m1ieEDG4sbNFUd2KUbgWCdicsJBUEvgB9rkEM3Uhyte21WZJjvQQAtiWxnoaLc",
  "key35": "2DkhqsLM4Wr2TEkE8T2xYUqFyWWtfazyPEAsa9axukP8XXNToRDk5y6oEsZESfDhPMzAGgF1fG71zQiyCYkdWZQz",
  "key36": "2AF8grtyuL87rHn72hEDTxDkcoZ2Ui6yjwBGtkX35m19nyRDwXwkXKcCWNDJKuGYwopsyA2EoTJnWX5vS5HkCU8j",
  "key37": "5AU34kFvFTyPuSveijbEGjrpcq33F5CJsHfRm9bgEGfFoWbmRKqc1NVu1avuBKb8Hjt26XPeqJsMn4K1R5F1w7Sj",
  "key38": "2HVvzWFj2qfGNDHFPk2SxFiqMg6v8akzKrpAzHov8JtvdVdGmxkhSTHsaXWX4Cq5W16zwzvGxzPS7Afd7AMUKcRu",
  "key39": "3xHxAV3iRB71rKycitUXHrNxGDU6UisLKM7F7LBeiiJdU5zif357Tyb68dS6ki98vDk2Po7Y6GBm8PowVJUodhyv",
  "key40": "496Ab6W8oorJjxB1ULq7kGRrVbwPYYZuPcvqS22oJ8w5H8ANnXWkPfzxzhbZCqEUYCnxgxJT5Cf6kWoDzZ86vSmJ",
  "key41": "37q64xxNRCY6A1icuRRwMiLeX8zYpPCtd8dFA4XWsjzsh8jZYWzXEV19vWxCnQXf4iX22CApyerq7P82SzuKzMkB",
  "key42": "2z6NEWm7MgYAZmcKR4GKkEuQQHFuU5YkmhUza82MstvLfLNUk3Dw1wfwY44sxuKV9ZezbywgKjce5q8qpUsU6y6W",
  "key43": "3QKK1zh4oECmoyifg9xcEJ7bZeGnbfbrhX9yJ8f9ozZD3p4LAhFJtvMCp7ex9kWBgU8GssuoqXghpK6rUwAapsxs",
  "key44": "2LgcjPbDkzxTwkcemMQR1JJw756947PYBKNp5s35VzztNXTFCJZxdgPHwFYTjUqox1KAo88UgLmkvVdmv8VgjRhy",
  "key45": "dJf8Y8XTNmmRFaGSRyeqYbeStgowzpfqpNEd6PsNxChvT1jGVieE5Aw8ewcH6YAgc46LvkR3Wk714sds7tmb2uv",
  "key46": "5c9kv1H17PhL8i6h7cvfV397oWuXA4VFiM2kudJQaDaweq96doCXPCHajjyMbz6THPYxj5L4CXjFzp7mkTTr4gtB",
  "key47": "3jjdzCeAqEgEQsk92DXeVivzQfwGqV1py2hDZJFNGac7NaGPeu4z73HMrPwhHigPV4tiAerKG4zhq6UGhbVJt1Vk",
  "key48": "23JRg8oAZGFaWb54fbnpq9c7KFeG2oytudLBZWRRSvmfDzZgXSqPAuUQ5RzC9538p4EfrsVcY8BUPdsjqLBLZ4vz"
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
