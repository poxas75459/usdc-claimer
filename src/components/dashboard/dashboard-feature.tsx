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
    "9UrgKh492L4eX4QJiZJRExNyteYSotD5UtRPm5YahL6Ao6RALK5uetCF8WvAAcUPZa53epX3FBoBgisJsJF73Vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dbw7buCpDnnyxEmVwNbKFUc6ukTzmKJQmsNhCdbVacsyKRBv1itpaYtVwnFWmYUKXsV98PkMVaKbfhkLVYKdcpm",
  "key1": "2Yhy56R9SBJJWExZu3HfNNvqLTtu4ARmUTBKysWKe78mfpZzQaau9ygFoYNDtKC7LfGUzcoXgPUJ93jmUS9XhuyN",
  "key2": "3z8z82MfqqiBoNpmR5BH9wCNYQBgYaU8DoveBVMHE3ZARbGfaQv53gw53Z6yTN4oEPKQ6F91Qv5hiZbMPRj5GnaZ",
  "key3": "3i5VuHLkxHWKKp6Vz6yUV46pfb2Q8B4Fimwp3N1KDD6xmW7E8uvyxQXxFjDnKDiFVYnkaUR8vMBbSGvZLFtFSGVi",
  "key4": "zupnHv6KWGSEL8vkhoKLBkhjefgFJ3EjBoqPaa3P7fLgv1wd6ek3Ly1HrxfG3SFLc1iPMpBGpuCkBM5AG81uPX7",
  "key5": "3n6Tbv1Ufr6k7VWnRHicJUtxvvqcvPFWe9JmXPqQ5wLMsaP1KzfTUoErwmDZJUcPaoQqfpwTRLASmcZjiHvSXiag",
  "key6": "3jZ2RybCke9QM9MeAjDXe5EQULjFKyvir3P7PvvLCTbmdgZDZUZpMUUzuSPZuUTTM4Xbk6CrwYCm4eN8KQEghCCX",
  "key7": "26MfSk9NRdxs6WETZFZgtQBnNreu12KZRCDVHEXbaFsSJEatRFERiLDj5fCjd1LKV1peK7D4vxJqnnhS9jGB1yRw",
  "key8": "4JHk2agSWP69vSfdC9sf2emhj52NYP2gEhAZwhg4xtKSYtN3VjWRsGr9gd2DkYsCCWWd3PPYcWSGjLjwwSX81bUp",
  "key9": "3zatGteMRTBkXr15n21qzbrUYBBqnxSPB8p6R3Tngn92JSxeVsG97V1kxtm8BvoBwwXJod9mBJPys3PdJXT68wxz",
  "key10": "4nT4PrFZT8v5cSfNMzS97FZbQwHQEaimUMb5FsdefrrxMKKd9gK8jmmQz24Mvr4L6rNZ9MVaPh4VuM1rGEyGH4jv",
  "key11": "2f3t9T7rrpVmKHHf9QFQrZQcRqi7gpFn5v8h6AhmRjtacX2a9rck2sxFgNYWvn27ZZ9Qu5mdxYRjZEHB6dqHePJK",
  "key12": "31ocqEekza8amoMcrAqStwho8LzCpf5fDwgAeniJAxSHQiUPryyU215DLLnQFx6p8fQU4boRtURTSwrKWNkssQFh",
  "key13": "3TK1AZSfuy8WNcb5MZ37CvpGDNZJ6zdyEWn7zmvtYGZPwcgf5nojdTTXwu75oGej6MggQjrT2KRWqPUnz6yGRnUz",
  "key14": "2xr9j7qe5imLrSjtdXTVzkjcdjR7nMBjHBWFJuaii79An82fDewqwGUXVDpC7i7pkBRMz8cjpzCmEeiox4qt6sQc",
  "key15": "45bMuyYNm8VrsutAcVWi4BXdunkSpjRSTCgHDcVdPj94o8EySe8PhBqnSsE6CMuS78ppxHKQG2xQASkwVofUVCCx",
  "key16": "yLcBxzqkVM6ykx57iRhLjqKpDrGzHy6k9Ut5qonnzkpMkHGpvJknLgeej2ExTpwyWK861jFJuqFJBTq7pdRvJ44",
  "key17": "67RGFi3VvuPbLxSyaDuhmQDo7U3F4CWP6RFS7Gu9h3EH2AK2bAgNeZqkQjk8nJwRBorSJKqPTxDPfnXdvFtEvvAH",
  "key18": "3wEgXwWghPKHSmU9aoSi6hcJLxR21ptpynR1wzC7PDuxFAJNpPdaDCQX7umKELHbmnaAFyV4orbCnCdowcUKVfXB",
  "key19": "2oJzcmXk5Syi71xJHdg6H1auiARrPyKsadv6enjAJ8Ab6rmU6UFtg5TnFCzQayDSNpH7E2YiZ2QLcEhCnYZAtSyR",
  "key20": "58xf23zNCc6zcc7iLehZ6ssm4CzX3UwbDxooL4UDsXPoLZGTgfwMjqu4Wvj2SzQCrKgndLfYrAQi71bYeaszRgg9",
  "key21": "3h247k8X4EA2EwWDF2mQLkJRq5ZwFbiPjYnT4XU2nS63UahggHD1XN7AV11tsm4a3jpK6psefogizRJxJ2LXa4wG",
  "key22": "5gFGi8Uj2dU9p6WUs9pnbmcwXzPw1VK1uqFa9Ae8RsHNWv4GzjTvD6fb1aAtgCx8nSfdL3ptvPfrhoZn2KqSsG25",
  "key23": "2CyaB9531TYqQH38pBFnYeKuDKKrkjVMfb6RncxLf8jXrHvek578mghKAyN9kCBDBj1SBzTdb5axn93VT4VAaxfp",
  "key24": "45eJuECixLqEYCQSWjM9GXXEUrTBu825QMPgsT2v5NXqgxT6vtBszaSRZpRZNsXtmKL23Y5DoHfAJqVs8PJoicsR",
  "key25": "5LpfVsC3EPpiEMarYgms2rHnAQ1xacnJYpAxT4etynqrdYkHrjX9oo6FFdv734TLbF2M8WhwEy76HYAHWKETACS8",
  "key26": "3ie8Mpbnsg3uAqx5EmuChvJD1EvWAKchv5MdEnpqcWumAmQ8T6kjv7GRzdWLJ4ZrKfHxaUV4eZYH93JMY2ZaWU4k",
  "key27": "2SvpR16r9zCKwgB1QpFbhLHywWcZXftmX8pq1xpCRmBSz1uReRWtTmPrM1na2MLSFbDY3H22Ez8DGFeiEvtaZ5Dv",
  "key28": "2kZZhWkGmwZGAX4LcbVyYd1fMrt1Rk8EKT1d7hjVRj2GkVh1PeMdnqjXw3K1ni5Mv3rKMjKPfiFRB8nnWLoz26F8",
  "key29": "5ZtgwysmLWQpFNb37envL1s5tkeBsjVNJYJZiEnQxd7yKKfJGEHEyq8rB98CKVqFYShnMWkmJygTZ7yo3sYycDKD",
  "key30": "5VWFvYZgGAEa6jWYfFCsQtUwWGryZQzD9RgxkLjWq9xNEqCn8yffY3YF1eHwU116JkXkKgyS7eYB97g2UeiRRQcX",
  "key31": "4d3mLvwgStYDHzo3WbYWqu9cwHLsc1WZJzc2ASPodEWNByDUKnKuvpJMRzTwzC9eEk9pbMWQj1JV42KhU3bq3LcW",
  "key32": "4gFP4dnUyPgrV4H1Xc5Sb1cMWRA2XsTv6yrtg5SCvwKTM6eVLU7APAKjTMMSSeRVeaAfqWxk6nPnM6mhYxbL4dRG",
  "key33": "36B4WT85vd4iWZJ6DUE9K9TFTxwjtnToozNnr1VWqJS6T4dTyCivfRpiBUcADu9zGeX8K726jjKmcvFVcAjvHm9n",
  "key34": "797XLhi7V6aR9rn2hTQTjuVyn22XN5toBTRZE6dp13EGjeHQrAChFbDFMYhD2VXhTDw9bxDTyS69ykWFF15kRah",
  "key35": "4Z1DTV8R1suHCHcQ89ZvmLTr7pVN6E8U2wDopX2XQQ12Esoxkf9vZrWPiDF2NFsntzvS4KuZBS39YkmwdropYVQc",
  "key36": "5D27je4BR3aFbhxEQ2zUSG9owG8UAWTLbkzYF1JxRi24TaZ9Ur98STtbzEAxdQpdHq1qS9snypHwwEUCwMMsiKR5",
  "key37": "3bhyrrhycBnLKJTfzDsmPUWTyvNYE8D7WDkkdrq2oKkJefvR6m2uN7M8CMV8Zza3wQZGsuraj5s6JanrziViNVUt",
  "key38": "5ie42gR3urzTXfMx3ZXzFDpGrFnhpEKzEnX7RRsPNwX8dVFEybxT79ads4dGub7oHk9si48aDfVWSawqB99XtBSF",
  "key39": "m6VNcQvMnqn2WwVgBCb4Zrhzj6kvjwLha2MnQcLHCXwN3parxV22CCJ6QogWDzVUSwES3HWFUPuSoDVCLqj7oGy",
  "key40": "4WK3fw2W2CKX4qGmF6ugS7hL8LjhFLSAF36Bqcwhgyzvt9cpBPYTpbpUo5SQLUzDHhEytvC9keKA1dfybuF2Ht4j",
  "key41": "2Mmrk4vUT2H4btwHd9hACmSfrri8PmXGWW8aK1GQpKgAUZNx6RNmPjpnSd2398qBtob639fEV6AXgzVvK4zivMK9",
  "key42": "4BNhyxokY9d1qHnitWNAsuyqp6GJH4LEMszT1RBKbXxNuAgFPPX1BZ8nSZok9eFXBahSrj7WmJjoxqJjqwJKDkVU",
  "key43": "3fzHxzzvBVhzGntLSUkrS3kYetmKyKHD1Q3vdW7C3gXxfUtghD2mH52jRqpRLSe9S6pdAQuup17z3GQkitxADyHU",
  "key44": "5yf16RutSBTpC84WofnnMk1tvVjN55qmjoJS9PDFk5JgpeyDq4FCMG6i8UDibvZzB7KzKxV9175QkoXCEbbJiSxG",
  "key45": "2E8dVRVxxzuUuQj9KydsyJaqmQMd49epuuQoKS94GnfmrVjGmTBgeUEbyddiALijdLJs9HLrXvKFVwz29kPzWVGJ"
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
