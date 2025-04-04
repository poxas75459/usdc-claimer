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
    "5FXjCHwHuEtjf13hMSgbETnnrTkTzkJsyKvFdrgk9RKm2EmxyThMU3FAy6zqejTnRkoTECRHQxp6dA4wKJJtsYBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u1omveocwZMvcqy9fAfsmFAsxVSJJJ8BkZ8e4RQhd9WT9oDFDABqg6GywgFNhmGjwwc4RGrdTZCmEJP8yyBKfyg",
  "key1": "2LZJcmXZdKs4WUW2HEPGEbbsnZJDc1QFF8rQwpxkYVwLBJEbyQW7FkpFMhDALNZKHJqVgnzEzxHsbyVsQntEH8kR",
  "key2": "3XuaB6xmD6khcamecTTTRiLHgw5WqweaxvqdmESxavRMedzbrUo4mSJP6hQ1VAmCBRRu4DobeEhYuMkmhAJt88WC",
  "key3": "2Wwv1uXdiiUP7kcyqVgjd2p3QKcviyrxV6ZbFkrFRJyzV1YMuMfBBWb3xmA7H9mB5VqTV8J3gEBvY4xXimKz2JvF",
  "key4": "3XsauDSwq972gTRv7G58HEuozr2Z5J9oUjhL8q9UNDJxnssvGepyRfpwEQkJda47XVWx8fD6YHv3CicmLKz2Cr5N",
  "key5": "5W8P29qiLjfDajZgV3p2iAg1N8ty4LABVCKZGnwmVDc56knGdaW7gtWiSMuGCMhB2tph29kau9nxQ1FP8Yaawsw3",
  "key6": "23hNs8SWUdWs6K9FFThXQvytXxPbGsosqVqcPgqmpYqx5R5UqHp2sAwG3au5ebHm1q47q88zhzcC1TMKpZv7EcTE",
  "key7": "5zX1Vci1NT3a2nmFWs5vf1ecUy4tEAFavUN4jsuQn1Ye6nE7SP7Hy89d6V6JJPFwfZTpLpthF534vMYqjmmjwe8a",
  "key8": "4ZPA8QKHqx8udeNmgjADjYDTb8Mi7cXqJnEG6c3FVpzAw8XQ9AunVa51mLXpYBu9uDNmCJ56T59nM8XpDfxm2j5F",
  "key9": "4aYst3b9KDAbMwEHSop9ykujKmLim8YqMNfAtsrtLRusaavcgXRBsEDQVyv8C3CiggFbzeRLYA92vXsgGQRGbQYE",
  "key10": "dWQQr8JpmNWKdHjQjpmt8kPFZMnKgRpnsuhKTToQhmYmxZFZb2pysEUTYpDSEovbcALTqjoLn9ErrjYyg8QgdHZ",
  "key11": "5o5f8jhD4jRwqR4zR4thhs3C9YLQqPUUaXgGms87ezgFG6oGboDFuW6UDfXoYYPHbBnQ3n7GWnd3t8JX77HnhabJ",
  "key12": "3xPBBPvnCGrDJLwtdRP1TB6FZXKtCd8WcM4L4qGPogcPVrFVjvpmruyoJdwHyxuwj74PKAgDfD3RY7jNyaYttsf4",
  "key13": "5qHNusDXEvVtArahCD9HcBYAnykJfWtSWU52P2Cm7uF9TNpYhz5tgTifFrQzVXZFdVm727mvDXPU15TugL418Tik",
  "key14": "4MR1dNy5b5AQDH2utzVoU5Q7LL6igMb55vacfdgjY3iFxb1uJ1tiSso3umzdrwDe64JPDAnS68FN5mcSNwk9ex2w",
  "key15": "2DMq3Cr91RZVSwCovszg1FaRvK2YydyFMCrWAZ82FxhBAGdYGqsCfw4YpGKa37H2N8MSdXri8V7F75AMtiS4FqzW",
  "key16": "5zfaufHvqMwXYXBSJfWmUCQTtnHBtJQ63qK6SwFVCwLSY2osQQPrgJH4ToLbgC9bz8N8ghardxMeps9Ljom8Ummk",
  "key17": "4o4g6ra58bfGdSQo9byqy1RAv9X14FJf3Jdu2MdwxkRGDALGQFpHhafwr4WFtyDYRMY4gdgy5PmTtJAHma7YWADx",
  "key18": "dPeavzHmK2p78cv5aHTLmJDRcWUhwAfaSQ5nQxj2ahP1gYnoVQqWEtJwSvPnQcrETuszjAcZ68LhJpvUVTbWjxL",
  "key19": "4NWKhcdYF5FM3YQe3QYtqRuDgwv2XCPsHUXKpU85mtNm6dq3E7CgDjjRkme3AkpNPxzoMr9HSByV9QzzX8Cu83Sz",
  "key20": "3XuoMadpy2cks3X9dsjNtJik34JGRBbP4BEQWq5h2Aew2BXxAxEc5qgese9rxh4wJhUqtGRRM6W3JXEDpz7oJFRX",
  "key21": "5mX9LZU1MdyMKt73GHkJaAWBRzc2wKwpMKDjUyioKUFtqgAhUuyKLybYbxrjkJ9K8wkF3cd5nZ6MHUNpNcq8WAkk",
  "key22": "23xQyRGCibdsFfFaFAKz1dGmZT9hmVSPQagmgS7ofSQgYe3uApzNN92kYj1pRznvgRPLzU6HuxPae4RRPyjriC2n",
  "key23": "2cMMERt6x3LnYJMNZUjCZdkmnKLqidxWBj3BAEfmswneARMTGSngF9JzKtHCkNBiMviBzv5cSjHED7rUpQdd8zmn",
  "key24": "61LDfmbpCpteDPjAX734JS9jrtN7rfaqeCH9uAUZLVZV2qUZ5wxBfZdhzUkgSwL1abdGEyrWH6Vdwj4amwX36DdS",
  "key25": "5gheazogvACiML2hvFrWLgnkCKcMUPb5JZSb4NCDfx8mAN7tnPgzVnVwxKnPkZT2PhEqqpBfY8u8Djb32Uj6phkw",
  "key26": "9cUQzzdkuUcEkSVFTqaVYsD8NLrzJH7Mav3dnyg8jChcUPqWdh8xDUsUXV4tPibv9YU3MLYp5YvjsqiJic3RU8i",
  "key27": "2ytNEhMCYGsAK8wk4UvhVXycmTmgrDhZz49eCNbVueuBvnDhXpTuuzLjDAQEYtosJXGzRdRQqyL6sXRhTv9sQTSP",
  "key28": "2ruj2kupcLDoobqyEAex1ziTJMiwr3g6Z2aiKUyqCSgvTXyERNAsTZXFb7kw3jf3CGupYDe2xcTLQY78nnopZ9KL",
  "key29": "3ifUDMESpP1tYRwRv7mPLDLAefGqf9ZcWUT4oW1ydkysGW4nYHPDWuu7yr7rpKh41eWP5kD8k4X1Ei5Y6Lu74b8K",
  "key30": "boJ6KmyhTj6gG1SY6vrzsaLyCxoNcCkdeKkvaFfpzcdEpH4hrSxiM5g5GmHXfPPVZjicie2dtaBZtBvaM2VhAMF",
  "key31": "64LMJvkqnfKK49QwivpcVovK3a7Vo3h95DfnLwnwHdX3QZxzYdrVnocC9DpNHDHH8ANjHAEKXcYufC8nA89F4v5D",
  "key32": "3NjZD8Az2Dq1hRAuCFse89FNLqKYvzSqLyqPRGAMbXsJWLmxNHs9qJncKArzUxvq7jc8Ptxy89azU2kAdhCnfrnK",
  "key33": "2HaTZotMVfeBtGEu83HbJfAxhsDpcQxvwijMcF965DwtX18yorvfJchr4yBC2sbZEY4n3jE9YwzYL5XUJQap3mFZ",
  "key34": "4WbfJa7QFB21xkewwrZgnL8zH28AnCL8xu885jaUSHnW5rrokh1Zq5P7gonKGgRbDPURh6E64LQ31SJ152qcuGxH"
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
