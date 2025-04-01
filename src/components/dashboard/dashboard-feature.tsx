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
    "5GuRog4MP8kuxXyWodd6Eybvr8kM9DunYcTZB9eiHKdRYcg521ZhBkZTGpXbpQNTGVF6cvWMy7N2dU4R4bLE1LKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HUSEb2PUKJqrQhD4mDbvgL1tbwPDNjKx3KnKA6HidUUw8eJKCZ9fa7hEifz72AchbDnhLTxyyzGVq81MBAuz8dm",
  "key1": "3YZLNqnTeBJPBomg7SJXn9nt73n1WHFNCV48dJTTryhjcjyo3aiSLqr4dVssN3HGx6UX566gmDDUUgtiXfg89j1w",
  "key2": "2SxwkKnD9NYRFYHr8q6JttorwdV8wWss2NtZdJ2x96wqMiN9mehSfFyW2vQaZyyYQrnXp8D8inuQDG9n3nPucAqs",
  "key3": "52ormwTxMQot3WhgbcXwmYHpBAVoAeNqVGiZo7XWZj8BsbJxsdcHdLVnMcSeDD1s5cu6wB8eCQjQj3PYXSUmgSmb",
  "key4": "51c7izUQPydvmUFMRU4X8aCxpTaXTfrFdhxNyHA6Y7Hds2GrawkqBBXQSHjw2srvBQ5X87jjDUqaEfn4JGaTxdCY",
  "key5": "Fcb3dMjQnyNp3R9bJrQtZuPgbjXUUfQ5EYfuQ5nMxw3SqdUEYkCYBqq4BBQK6NdcwvSFjxCZFpHpDc1fS71ngvX",
  "key6": "3CwvJmK9iQJQG6neQgVa4eRxbGD4ZzMiecnwb7VefcYhTxn8gjfbQTqW2w8Gt35gwNDgqELgxsJob31F5ehWyAye",
  "key7": "w6ni1T2QCL2BZi2ygL4e227JAKuM3ubCL5vao6RM7GZtHgLqgy9KnJtRuU81TPjo9RCvKpQtYXw62VnhV9Drw15",
  "key8": "4WTpfxzkEhoN8o8cphjTEDLJ9RT5Rk3NS8QnCAGhr4GDk1Mr6j5wieaZVUKQ6C4cgmMoDqnTBBLgagmERfgRbETU",
  "key9": "2NKXqDCU3g3Fyks96RgigzGt8Rg4w4zHx4gxR3gbHTbXVQk2oEXarfHmGaqBvbfUdTwqqthTqJ3hBQ1qFe2211CA",
  "key10": "pvFZRV3zFBNsEUibY58WgSMVZF9iJpavKzLnHNWiS567J9BZcULx6ii43FG892CZ7q82A7fCfGitcVn1Wew14bE",
  "key11": "K2DaNCP6PWSv3ZPkcciyEiLdQDJuTS2bECSPvVeWkepGZBteVTrJP2nUFEpZzYKWteoib5fB926PrbbUPPC9dLk",
  "key12": "2TBD9f1979Lt1aYrJks4521XhRy2ppPb82KnPPXBSjvYztzvHKkeq7DWfBtibtCpGZJXgBQZp2frHT7L5RKSHdym",
  "key13": "3iSZmZ3pw5Lo3B4o3PHnQ2hhenUiYh5wXk4GbcBwjn2Mh1hwcPVTir4K14WYwkxachTdZeE1Qc1pVKHRBEnRwyXR",
  "key14": "3cM68GXbuvnFUnxKnHg8AfVcbiuBaJ3mDaVLUg2fxpayuWFqXxLt9HPxcyiVrw9Sko8BLQV5KHsQXdV9jTV6jDKi",
  "key15": "2vy8z7vTW9onJZz9cLxASRiB7T9kv7UKVw1n5UNeCAkSVZQwhmtV9U8aVxPPuLrVgYTm42gZZhRau5Cj9QYJJAFM",
  "key16": "2upgy3L6GqgLNRk1oBjMjuT1o9UfNKnasNaG7UzY83BVW4dmchwft5pj5W6YabuZumNspzY21P9mt6JUnBugdbpZ",
  "key17": "5afhuJHE1S6x1FeU9u9fE5xDz5vxoEggnUGq88yZDAdHxMnWwKCiyGjCPVxSxGQjmujSEJ6aqBGFa4Q11hEviDM3",
  "key18": "3he326QNnLYEvLe5QcPWH1XEEAG5WYnKRfxrwR8EGYFTgQqkUQp2wPZWdBNm5o7jtWtwZSSSqWZSwuQo1HQadN19",
  "key19": "j3Vh45xKp6GNJGboCaXJWF5cinBzTEhGCLgbsRti6uM9JbetVdFsnPUwagZkaxvzBWL7KeFomdmRsFzsJgC8f4T",
  "key20": "5vR6WPbc2UQoEFPYom8fCxDCn4TLNHUZn1fUFAk9UWBeMiazZaBjPXUjjQ3d84hVcgiPJJV31MEi4rRwfrFz6f5B",
  "key21": "4qg9SRAFPHTfGdu3WUcSixc4HeAN2etUKeJoQs6BCFuv5WwKwaQAbjJXxqoPMZBxrttiazcf8kJrTsSiv5j7mRv4",
  "key22": "WhJDSAAFPFF3gp6VTvKiFd9f7PQivqtNvzbkNbZHsuuvX3XDa75xTesBHdnpAtsJByYwbdzwdvAJmhMm37j2BCr",
  "key23": "4U58GqAZSZBExnkuddYuykuvoQzu5drQbea1BkZwdm4zirXnyZCi8t9mHLLfvGQkZ6fwpB9UT1tedbtcQMEtYiQb",
  "key24": "5aB3s22rL5guscXfJSHfVvz43VnmydnHzFvcqLEeYQEhpcW51axXr2GW6aykrbvxvJwsGHLuPYY8jvwh4wAShtoz",
  "key25": "2oKCrEAyW3wb81N8Q4goVwyAiyDYvCsZqS6T3fCMeYBbycHvwbo4NtarQUv9tvjjmi5FHgQoYQpVrNMD6EhwHuvi",
  "key26": "5cFNuzVjkQHErcFSPNCsLroK1TiwzPFus3W7DjGRQiWFA6rGvVzeEQviZAr4eeTCd61UpXrPXUgcasVbtqNCGT78",
  "key27": "2K88jGBJtgMg6356LECUasLoJC5LHKY6g1eG8pTQX6Gd9qCsc9oZPPC97kWDr8bvCDyxJjGucmbsu4eSaQpSUNmx",
  "key28": "tkgaVtXW95QDyX3WMpBKLALVYGrTKWzyPAtSJNxzV7vAdgsM4pji8Vrg8KGZgmkhMAg9URy3hJCv9ccKVE5BdZA",
  "key29": "3ddAPDH12go6gwspmz4o6rXUCnwWQ8f3rWG3itKfrr737FeETk3AVzretEh55ay2zsxqD46BxMLLyXPgtwyiqmSt",
  "key30": "4CkA4MrHVwKcGYX3r99HcekqLrxzqBJpxN3QEb4b9KHn7MVAD9hL5K9kamzcgbNA4ELoh7hirNJUPGf9ceKXoMdB",
  "key31": "391sPp2dsTT17EKBvJZ1bauan1Q8vQfoANVodGirqnmDpykmLH8vS8ANhNhh7ed4XmjHkPyGznCahNA3rxgmKueH",
  "key32": "3WfwAeo78gwkKmCkcerFsB1ZthaTkopHHNKMW1EwEVk7ZEoKt4GBXYG2zHWdswQyRyqX4gP2w6JEPdfr6pork3zT",
  "key33": "2295YQum5jjc1KKfNE2x238n42738mZNXLJsS3eacgPQZPqrE5NfSfe49TRSd9XwfYRyYRJSaq9PS1WNUpPW6LB1",
  "key34": "5AAGTRc3LADVeqc5Dkco68bRa9vv9bPTt7KGj7PinGuDkNpLhvmYVzXBanoVFB7zqyJr2D5fhMUKnjBSJN4ywaWM",
  "key35": "f6BmTxsMg2tsUgk4konLC2oRVbtcjfoPmRAy59Y5NDYm7EW4VPsvxgqrXADhhbaqNhcAc74iMMEjjxKPKNY3Dqw",
  "key36": "2ztdXCJRd7JPqTrK9bCBcfMLiz5Yt7L8igAQYMcSeYSaQj2Rzmvn92UA4Xe8HyXaddkVCEf4NgqGnBEmSWBvARkJ",
  "key37": "65QWDwo7j8Qd9ij9QKRbCXyW17BAfdrERRMSaasLsu6ymca6Bnoit3PRvksroT2YdVq95t2gra3c6UsWvrstysdZ"
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
