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
    "5ojCtDZykwPd66sZNRBurTnc1C9uGDSg9V5ENBVqZF1S1rhyLwceoWsKSCoZpoXfaahhhiSEWt5DSAsxugx5wnw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53f54VJTYdwoeRwjgtQCdvPGevecMVLRX89X1ViuVSzujp3gxYkbQrXACfweVB3meDwqciSB1oKc4Y3jZVvTUoKG",
  "key1": "5HNeMPrBgMFsdEjE8EoA8KpEbJ1KnPNsoZWuLTprKTot4jt6ejnXSZrqVKoy4AhJjXm9NeCbt9o4LxeNB4KWvBSV",
  "key2": "2RQs7czX9GmXTwPgMyyZf9QSjGhon8YQkavzYaf1bsoUYfM8UVxQEBVsYJ2z3naug3YrZmvPdJaaHx5u9LvHVXEi",
  "key3": "3fzv8jw5QhTnn1BnzJxteujqPpcXTMufrxUsDu3Sz55LcqwuMwAzt6vG3rX6rdSA9qQM67bdRXyUjGBhtCXP3Agd",
  "key4": "5FGCtjjoFQHHzPqNVyST5kP6tCpPGNvHQJU8qa9Us6qpVhxe2MxSwdKULPwykLPfhT5sBfup3DbNqkwHPxC6WMKe",
  "key5": "22Gyf4cYf7GwCvXMvyYUJYwC8tf2ng1K9wG8NEHG6DpKiPxspF5avke8EMvYGhjXdFuBe6mjSZY7pMWnB8fJ75qm",
  "key6": "3c8ba1y3dGA44gvhnYajSsujdAhB6ku8z2TksuMx1U16Z816LxTSK6CG2nbE7V9netWjwJrVLNfWbAMarWkwT4c4",
  "key7": "2Vmt53iXQmiFUwVvD7KinYUyhhfL3Q4LvTZiicSdyCyfTgeXzJvvLmFfMhed5ushBHFjMiWmHwRDEoT3WwhNZFqH",
  "key8": "4nt9TmpqSxE1LbXK5dbNQ6mwD6MC3oPZLuzAdAbNXAorePPfpyH3UjxurHpMgnJJ8e3bm6SLZMzwWwnXP41PhaVr",
  "key9": "bMP9TWZeu6DYD95oTX68peVTrY9LCoyWFH2Gfc1geSNyfCTgSdX9Yb4G9yYiepUVhKpFrmnC3LLSdeJAa7xj4Sd",
  "key10": "2BvEhG3qGR39UuhdSQvLXusn1iwrdnBBW7PZjh4LHY7NuMxxASGFdTzbsAR5Eut3RTi6Qz2gdzRnxFZbirJ93NXF",
  "key11": "HGJZc9qxYD4qair6dSfEMHRZ4RWQnixASXAtpTuXpjeVKc48CiCSz6MHdBR9AgahLAt3bxpMWqJrFUnrT9G8SXX",
  "key12": "3f8wVxKbKwAP4VES9hj6oF2ZVN8LHJD7zCgqhogZgsY1KVbATq4iYQ6y1ZtwhFw4UcwGvBuC8bu6MKig2cUA6YhR",
  "key13": "2CuoDvmBC22LhuonFTtbZe4vUnwvxQnmnZbLfj6doUjrnLqcsdhK5KVRrysfmnKQkXTcGC7Ke2usSC6LrUEFpd2i",
  "key14": "5sA1AL1tA6wuunfPUHLX5UStdoynqMAMrKKxca9e5NggUKmGkRWmwSpcVjBFNNHVKP1Yvdx2Gt4aMPE7iax7hMpx",
  "key15": "2JuTmYvPZCGv343ysg2iatxJgrrHtup3WphAZWj1wUi8MHBfr3rQxsGA85JE5kKy7huQEue8vQwS5ryKGhZgpHLh",
  "key16": "V7ZJmsiu4mScxgGAnFiVccpKxFU9BJHjRUXQAuWQKdAmJ3H18tYnYGz1yx8yGME2YceEVmWE2jnqFW81HbyrpJj",
  "key17": "kbCkNtF7izrHvasVNi69L6X3CRmGQhqefeYwoTomGyopUWj6HthMfbxpmYvhECjJLQQpZA1v7ssD3AtBRoRCU6b",
  "key18": "3gLbEUXqdYs4Pp5kSQqPsXLeH6Tqf9ygQL7rQkrTpxFD3hAFHsDwjcxEuT9Mb9c8sUcc7AAMFKgcAG9DvRxcKJ7Z",
  "key19": "3yoVPbSiWHVtvgo79XtGknH1sve7jynb2RP216xniFQBEmMan228BnwHVSDsj9ZfWvhk8RpLkn9pt469Rmd4uiu",
  "key20": "4ybUDht5BnY9qWqdsjSPzLnujEuPcACGZg7b4VAjRbVsShj7mmTvsnp9Ntz2YyGmACuNSQFbST8BPoCHX2e8mk61",
  "key21": "2vuQLv3q8Z86aUKgY3PPoVaCAX2o3NsNJpy7kt3GoA9yEjKbUGkWQzv8LNpRhyMVKrj6ZCjPU46Sqv52WH3BZnR1",
  "key22": "5Gk9rRJumGDWpjhciuNvMtw9mfKWtP1fGzNxZESdbLTMR6k5kzahYgtK3vCDQ4FET9edCvUmnEb8rH1NMXYJk4eN",
  "key23": "5UuvLBRS1fgc1hAGGgqx25pfCsngBv8TFcWE4c33p2oa8MscmFwTdsrSswqnbR8ec9oW5SQpWvoZjaKotQxbcg8Y",
  "key24": "4haa4yAXzbNoBzRXeYJQDzXUKfsVQRLpGvddVck9EmFAFm1QBE2X8jagUW72c91q5z6TvqTzwUBxUapT8G8xXciH",
  "key25": "662SaFn6Yqie3HR1yRLyVka5XB4GGvmREk3HW1CKqZWpJJrna1rRuioniANiDxddg8gyC3esbcQ3tccMeo76TWYK",
  "key26": "5k7AvSP2uKFQyj5XewjU1u9sUzhV22Wqck83wZvj8fCkGPFn6vvxNocRXKYhrCj8Tpf4i1UnvgtMbubaJwn31vvz",
  "key27": "2bRBTtKS59DbrmzviobJuziwy5TZGPnagk8XQ7C7Y49Xx6YAfbk76r7jy91cYgS8jFRYHkagQCZ7uTXSBrQZqvzT",
  "key28": "245tkBu9WUGf8FceyBRVyNvv4N8qEHahDBGyo9rX4TZitgKSc45sZdczxpiTj7b5g7MxEY5cBeF1r3Zce4JtuoLb",
  "key29": "5vvwifdCAzido5DbPsNxvdNXKjHrhkPqY9ucYP4Bh8ekRA8PLT2pEGp65LyBgkrbKVo96dQfbJg5hqbsdtNkbjyK",
  "key30": "5GaYtf3jv1C1W8tmnFebRPspeojjrxp3LAGFpuovQKvoe3aFyGQC3CXCUkUe2qqpYVbvyPUaAnqF19aMkxiuWarL",
  "key31": "3eHiHSq6kaoDeidnxYVGXB863RtkUERsBDpc5boEgDgtg33CZfYnrwYtosB6LW3PFbKzg5RVmvTaMTQxRTobRGN8",
  "key32": "FTE5PLZjbRArDGWaHKXKtNidcfgWT3yPBJ3PKdDUqhnqGTiVRasohq3cb1fq1yErzyzmCbkcoLtdJ6MS1vKtMnJ",
  "key33": "Soto6yWmFoqK375b5tf7XirisWv3dY72Up6frywELREzbEx8k184PRLmDdpbY33NfK8sXiT4HuAcDu5isXBkHKw",
  "key34": "3C6MBNanUUY3c56B6oWBxrxmnPKerpzGSigA4xKUaDUirKMCFUof1zEKjHobGmS8V4NzCYsEJ2hsaWbpbVPAcjxh",
  "key35": "YWrPMUFUFK946jyHKqxikHKNAsihZuAKWsXSSSPcG4xZ6yawnDH7RD5Barmt2wx4LB9oAAJPW96P5mJ5sYJxm6p",
  "key36": "4o2cDMwTEKBCgDJKdPF4ZhHNzbdTf3o5djhgnjUoV9j37A5DTvGNJALZgHhYqwZQ6RXG2ECigmAynVG1psC9zN1X",
  "key37": "2vuK8v2VYWoTNMRdYtJMhCtu2RPUVATspGZs2GB34n2zAmY84QmYnANTUqvHxJiKTJArphyY5RDZsyVhWnAoVAyq",
  "key38": "3dbWWDrCsJ5N6F8A9d3YB5e6zHnoK3dhReNMthQv4jvCX6cpGv9GzEvo7pCbhvQEscrc7V88hwrZBT6puYMUd48g"
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
