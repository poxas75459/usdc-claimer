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
    "5c5QqmnGftLKVTspz5yLBvm5S9mA8KNnbPdrjK9YzsvoyPF1mmfTT8ewdVgdZF5gAUVbohLgc14vzrqFQ1hwW3Wa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P8DTX1pYYEpzs2i6Aa1GuuqiNN4yXrqEM7bTSHRpJeAbDjCaQgexGbhDqqpEHWFGZPxZuvu2a9AouCiPYCPgQPf",
  "key1": "2yoze4a7rCneMRhZeivpCr1cUs91DJQwD5qMrrwHpQvMpYUVBFFpahqy4gj4d5YemKamgezev1TmGWZXWNPRDWi8",
  "key2": "5YvXHZrcS4CUNkHspe4d7EarbMUPsXrNxZg982AAmw6TqN9GbUGfY99vxvfwdXYzidJTTTMGkiNRueZTPa7T1YBV",
  "key3": "2DpQS941vP3XSGWvdMQ9w9rjuYoHx19xTTEYmjMNXiqz59yLAU6EPh7oiUnDSo4ac6JCKQ3vdpHqbRSUb4f5L7Xk",
  "key4": "5ko2vthEn4d2hYpG461YwGtSNGQ3FArpzvqJZJVLQxRx9BHofD8Sve3d4ja69R2fvtvkecbPcVgGzndpHMeQNJrP",
  "key5": "3przxQT2WKSxE4MMLZtvEERLuVNmwLEGoCzuYh3H63pf6wK3BN16ZDqTUgirBFMFwZv5WYHL3LJtpptA3Sx2kgEE",
  "key6": "2v6QMELz6m4RBj4vnkeo1fibWe5dgF1KrnAznMV9FiAWG3juJPALnDZY5qhqqhX4xCaMXpNRqwgA513hDgdGAQAV",
  "key7": "4dNGL5aMEVGJXPbSXmnx323mLHoz64opsbJz9LGEmga4DL1cpxEwnrE4f4zuGdckivhiMXDW2Xy38mFnRd1fJoHM",
  "key8": "3Xu3ssHPVoNe1VGAoFCB952sw7osYq5KsZAApZiwJHCa9quiDjjmVLHaWeTbYp64Y6w1JhAHmwSUShKtSHcuPEdd",
  "key9": "3RrmxfRXWkLJ5rDfQ5yQX9wFjs3H6s6BrazxvgodGve7YFndA77uvYcCi8MRKtwPUvKXENtuWgLAaX82VubMmWEp",
  "key10": "4MF8WtD6VoAQd7JRpW2wHfb8Pm1BN6DDM7LsDe7ppFgiuD6P3X9ea7CFUbj7Lan3iq5zkhfcWXpkH5wjsmVm6G5F",
  "key11": "59GKL9MNsU8tyC2fDyw9LyiiirgFwc1tsvGB5v5rwT81v6uzyhmrpkt8XbZfPfZ9rHPRzQn5WZ9cdJAZwxMVL9wh",
  "key12": "5bGHUEeZ5Ajc19zm9BYFxgyWNXiVK2LtjPV2ZaUa6Hd2YemssQiwjrR6TM7pPECysDgHfZDHWrvjoL4o4Bv1ZESW",
  "key13": "5Jqw7DHTXaoZVw7oEiDSR2tzhbexvh3WNRThk8DkrJEtPbPNo8T3hyhBmtVCWX9JTf2M4efApo3DiNYAmn8hgY8N",
  "key14": "fsPWK8trwvuPQ3aW8fzVvoNZEU9tzrhV2tANKaWzdzcQb646LNiBjodoFAC7KQ4zifkcyL26HHn1KwasvRJxZ3J",
  "key15": "3myH25uNUYMTfQCVeFH2qe51JJt1SfTnUYyKsiJztKpoznD6D6gt1Xq5E1HgaNTL19Kzjc6Xo568w34nhnccypNY",
  "key16": "67mc47uyKY54JN3mkAndhcdNzgj91HkXqzrvXADENdA7KQDQzhzatcw3SGvQzjYbQYk5NTD9UpcvdQjNLePQQFK7",
  "key17": "xbD8ghsfEyTtpgUdkTGjY7ZXT9auV2JiL3uvabassvJMya2sSSYGrzrzPUr9X1SJPxHYhXSEdApU8YUjQ6LG6ZF",
  "key18": "2f2SSyWr262FKD3T4FUcdGYBv6xWJgVcCZfcqepwU5C9T6onWMtJKt2v9bucybJtypDivhjWBYE6PhimsPqkvLtU",
  "key19": "2G6WNe7HsFdgFtxZmpYinEMfjVa4314HhRuauKqxA9QkMZuDw59WBCtqsxWBYpKwpAjxMp29mPqa5viEeRmDAftF",
  "key20": "2cAaex1vkFaZUDA4uaRvCk9AhyivzkhHyhZWhaiPevF6NaJosUBpT1J263RsHHS9gmsFewMJA9dfMRZqjjQJdc1r",
  "key21": "48U32upCEXxycZn4dujAPVVdPE5wfEGz4zYk9UEHwE955ikdjwFPp41wRT7jHSSn9vz2375h4JXhe7uP7Hg9UjMy",
  "key22": "58pfh7uAcqkhavrfuP1tVaimJJA8gLYvxc2XyRuCucnD83AhAKFZyLqxb8A6jqkRQYSmE8sqcpbmoXMaQ2FKS5gN",
  "key23": "3f5fUkhf8Z69mVAdorT69oNdwaFcugmzZPdVa6hQWoXYSn4gwZyaHabqfPb6myKtam4jF96SSizVey8iULiFmQBc",
  "key24": "GN4y6RPGCCjYb1QgN6d5KeYT1UUvjgWMNYgJoX97mbr5Z5sQs7YYGpLir3j7Bknc6BWu3Rv1rSDkx1Wc6hebJWL",
  "key25": "23X9GzjsZLM7L7QCcis68QkrpKFmrNArBkRxug2HVueHkz8SYuYsJ9R5MF661CsvZoQPNHByGC99mLxLDgDTsjx7",
  "key26": "5mxcL8ae1wdqFKnCA6kQgweoCGS5yvT4AXi2XEUfxqQ96nZZBtzKLD4Xbxn8pbv4jugGEXzL2aArA6JZLHTKaGuk",
  "key27": "25z1sTHLPUH8uWkt1c8coL9kFBQ7KwG8BiMvg7ugRbxG4JNYK5maoDte5k4eGqKxJQ18YMQ7QgjgUGV844J63msd",
  "key28": "2jad7LUr5mDoGFXrgDAEeySog8zdvVEpgtRqsPcfnJ5dR4qKT9mCQMQYkruPHjXvX6VNRusbSkQ175eG5g44gryR",
  "key29": "67ne2nCYSQZesaxADMoCzmtmmZHDCzFH5qCDaY6pk84rvNyspHXqp1PXhwPHcTMxN14fRXPJARTnHBmRWsPM7A6H",
  "key30": "59SYHzB4Rjab8b8RqMphpjMuhqZMVVuvipfYauQoXkujmXQNWBEWR3hGV9G6aAGKmUUaWbQoZhzyKme98cQp7APB",
  "key31": "qJqrzWExHBkzERPWK1u4XR2x9YdhjaRpNeWCnN6hTp7dybPHqLE5X4H9FEzLajq7j5rQDiskQ9nZ4XaNY92YBfC",
  "key32": "3aAADHJbZfGQKW6JMvxm8TK35dnpDY6tRcR8CCQQ3JSMrDQnJ9m8qSLHuSNzGcYXmbkWGCU15Fto7rE7KrVqmNtt",
  "key33": "tR7p32vg7YucBqNL3T8sAHMk6wNrfvWtDaPBasE6UYdLwxG5a3G5SsinYNW7Kq8wXhgZqqQQ7UU8AERS9wKbSxS",
  "key34": "4kvCxSGcT6keMfBfRGbuhcAQfxCqBSHVpikp2An1HnRbrQS7ed6LG8T3ZoCE2eG4QHUh7xHaUuW1mXs8PdqiUStf",
  "key35": "r8myeQpEFbwkbMTWat3NUAV2iEvDsdGep8RDFJUA1kre1BLUYrwJe2CUZyC2G11ahJDWpX3P2ptZVD2cZajdqgY",
  "key36": "61iirrpQyyajrFN6PLSToudgooMfE1YgGrSKKLf4ZKdfiQmF18hPvxLsdkpxFE26uTQPhcJS1TSz6kWseekZ47Wz",
  "key37": "YEVf9ERTzM875iLeyhSkrR5fJDmSCkfzRW2ZBHFXNzoRvKyG9tBaXswa3pxGhNB36rY8nirVns9nDT9hNVisEQs"
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
