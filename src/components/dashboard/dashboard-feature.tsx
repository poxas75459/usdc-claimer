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
    "4xCFfdA7TRoZVWauFLYL2vUzi85LudPQj7fkGC536tJyUx16krEzF55qktbYLjXroBJmTBTQW62HRPtVuZKXsC8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ASZaDpxWRYmqJep5qGZ7QkvY8hY4yVoEn9B7GhJQmvDkdd2m3QCx18zoYuih4hM1okz9LABMYZYRjNkbzC74C1t",
  "key1": "59eVC6nq9FufJVxd2j36z3tTCSktfcLAwDk7tpN3MUhEYrray7D9Jd3UvnasyEbGkzK5WCHGYs1dnMpyG9iCVsod",
  "key2": "5w9idpZn25BrujYgXZJUJ3STsz8LExEH1QfVuzcJpn1Pu7SHJ2Qbk8WGTGPbRHYRvhE56GGFP64F1hqdijBZA1mg",
  "key3": "KVSvRB3GQ5czxGXAWw2ogcgDhLD7YMcXSrUd2o6KkeDj8JXi5UgkfE8Kpo43xbpVQXptLH1yM1N6jTPV1LK9Tpp",
  "key4": "5EjXu7N1rQXGostpTwqKScS6V1U2vU5r8vUM8LEe8kxZrBLSJ7FiohDqET5MJJw3U8zui6tyvtzzCd5N2qv57HpE",
  "key5": "5fL8Npb2BLkoiZKwTvPVwccKxqmmGdndhtK3k2VFXKvmPo2qUwNq6j31C4B8stKrgTBJXsuJcD2DHmhsbtyiwvvo",
  "key6": "2yshZTp4WxGGUF1juBHd2APn7LoVxMx31oFRzN4KEgNRAGwQ5huegGj4jb4KfRKEue5BcvTPPZq2CSZkjH1FpgfU",
  "key7": "3LnLT7Tnx2gywFiRne5DcVQkue2z4vv5jJMd6HfBNLyboaJysXQyNmxtqeRKsj4aWz3S3hwjANKzCdH8HA1YLiUf",
  "key8": "3AXmYPsb6kfBNVYthMEbjRHjz8J6PD3YMe9nqSPJWQtJyKuiKe5oixutXHsMcWL4YEwkuHVEPKTfLq4Hm4BaKnxC",
  "key9": "5hSZNEh4NYkKPCBtvRtep1bNAA1RpctTCmbJc8Nq3SUwPurQ637Aj654CM8sFgvpzdDgceRz9JqxWsPJZf8JTMth",
  "key10": "3fPVa81LP2i3MW8ugz2biDJiyMtNi7TRiJd15iy3hccXzL65NLwZWmNB36pFCeCaGmy9Hva4p4C29NZqAFfXV76Q",
  "key11": "5iZuVTmJm3GEE5epDnoQg6vMgn5oEeGEHSYF94hcQwHFE5mKL3srHqZnSD2nmrBZ16iBhf1G5XCH4bLv7h3n5iM4",
  "key12": "5N7qKUKATbXk5KWATbieL2KCRQ6Rd7eiNkABfpZD53YcV1haBBNnejEFFNjgwWmaDnDBkgRtTDanDwHbxwhxKj3U",
  "key13": "2G3HHxMuZXKyyMB7JmWtoAnFMDtM43bPQZjuUaEyYF6AKykH66SErRE8LXKRAWpu2SSUVkLkg295FaYVng82GemH",
  "key14": "ZPecauxoFjPxL2icZydnLV7nb2i4HcstC8zVUW3sZJuTCmcpzczz7tymxNxfH3KK8jYe9zpxHw58AhAy8GUD18q",
  "key15": "9KXzY3WYVr9DuQqwb8esWaZXRpjmL91ixPK2WUzpt31JJDuXKtbVK24FeYBdZhvGKkNbkTc87tmuipJvMapj4KE",
  "key16": "61iXKW69ecapqz14u7KinwdxViuuX2jzeM39h7RA4HvnEFb69rCfK3RzdFd7BwtYLAa2KNXnhyqfLTCjVmPWg4tF",
  "key17": "2YKLj4svxXP2STAVXn9v7GZrusBqD5a7bfuQ6YNYUJzXigFM6YTcXKbvVZwvCkN46czZP8TUD1cqnTRrbTEn8YdM",
  "key18": "3p7BCvfZhYFZxvpwWA2Q4dDmFSKtX1hZnhFdpvokaxFuCoohnkWwZed4Nf3mkcNpwoJftN6g2J8L3LfEpT5GJhfT",
  "key19": "3hbDJnc1WpM9HRgkhMyLpucaY7SUf1TWCdqgg5nRsRvM5nrsDZTPex2yoicJ7nia53oWFtD7GcRpQov3KjjSMHha",
  "key20": "37G7ibqLm6JvykKdDgqLjHrBxFFjVEwAJKZ8XRPx94HcvQyP33a4HxQryBsJCrc7qMed3rdwFvS1yxuW6zLBWGus",
  "key21": "5tMxWhpPbMm3iKx531ekdia5QffowERK8eVoJWa9mktdec9gAynT6bBk745WYZSXCw9sPUKUudGqL8WmYGdpfjUH",
  "key22": "3mVxyFALjb1rr9uxqvzYxkiFLsdCppzFtNu81qpcGFfhrmpZiLPf7eiqMp88wkANUwwZHrcPt7Xx77J2xq5s23wz",
  "key23": "5Q1szozpmCx9AdYJJE7oRfniNgL23GgXX5XPAZmp2dcWamb6rB1tVBdD3YnD1J7ar9eXd3PE4RZ2xLXMazCMfVPv",
  "key24": "oivZX87LYMK9Mnwvcsp3RE73BN1sUEjck4vH2KqwLFWBdhuqHgSKAUk2feJ7Tr4tu1EQ6kAZgyDZppqX9kCgUvC",
  "key25": "5jwfp7JwUeht6goUsoPoAYm7ifZtwt3v9hFHCvXYwknSZHgoM6hn4Ce7QTibfo3GdRohFF3mvCZJxXeC367YhfM6",
  "key26": "2Abyewqnj8ZndppedtdCpMjnKYPGcGfUJjtbANAVbmoHQv1cxxk1G19KAz5xBa6YsWA6wfn2rUzUoyY36WpDngm7",
  "key27": "3xajWVduxNxiKJDDr4zhXJ1333eP8d2suPEd9T8z2MjiR2ztZML2JovtkXFxd5rJ4xvA8wKUV4JSdUTwTHyUWoXh",
  "key28": "3oTSGpPmYybTnEjbrqNPHkW5ZtJryXZLviTRDkLuuhpBqLEzcdSkW7ayXMFSWTF1vdkULWfybjzy3VSWmfQatAq5",
  "key29": "3JDTTk235kmYXuMUyRwpPLpyGyhoST1HJP4yUo42XRvfUmwqX83BPNcYvDGxXmSnqroPtAxHKSpwea8Vj3x1Kpd8",
  "key30": "3vLk8YcNQqxQtXoDuGG51My3Zmz8zDyBLEx8hQT2iGjvUz9Uv3cr8rmb9w3nP3PQFtirQzivbZTxucENavnbhXne",
  "key31": "5ZV8EsdVpKAQQFQHKU2LewFiLjHqXfPh5J7Wrr8zfsypmXYv6dtdCM2HrWhwS5mEnQMpWsgaSwxGY3B66s4Reepi",
  "key32": "4XWw8Aqxy3Y67xfhnd8fHMPpLf19AJwDpqXNfJi6hkJoT6qZftkP2tEiZ7ovby5K15Z1HdP8wrzk9HLcvpjCZeGZ",
  "key33": "u8caGx3KNkysiM2CbRpsTDp4xBaGyBa55D3WxJxvsuQFiYAKKHZhR2JpzAeLAjsDqvnzDeBx3wYGRoYzaxQcSG2",
  "key34": "3T52ZNUamRq5AddntUm6Dys2K2b3ecxCvf2bLtt5JoQDdKAEnx8qaWmy5QjTAorNjzpxnigQeXXD5cWGCCJBKBAR",
  "key35": "4TTsPwFFC6dxok2UordhBB1y4qEc3KqpdUDcX3H1ejKyYiecG39GR5P6pB1oVGTPPL96QYGdDxBncxBpmTuuGnVU",
  "key36": "5N617JDqBwNC4FKy3K1yU1tUMdxVstYCYzbk1cnj9KEVLgyaH236L1sESHEUmkJxhhfmgTgxchBUgARUodLDDLcA",
  "key37": "3pxzVrHdaCzzXJajCj5mVjZm2E4q1oirjJ4ZAT8yknpCHB5KvtJvJJBnLCvdupnY9dnNwkJBx9czePfhfnx1LyE7",
  "key38": "RHHGNa7eoDhjBEdCPxqxSARJkVLRvu99nc9XVaQLvvThVRp3KKdswJw4C2fm9xX1s5MoeXTt7Gi5VLkxiiHnyUV",
  "key39": "4JFAvSEombeuCw2KP5ydkiTJmmnp7UTErJwcvSqipVepavLfaiKe2jBkZ9CEb2j7BGjY7Rnyq8FiSbTKLk84RQ1r",
  "key40": "2SC77RcgBJ8zTYskxVKa1f2XGzW3AkhLS35dYyB7jfRBX8HYec5DjaUwg6SvbQxeL6k4pWqFtEqLaHVVcH7hnA9d",
  "key41": "HiwkudgEFocBb5vCCpptLZyjrFQxQJaJevhS2ZceVnnVrfoFuugYP55Hjm7t68g8BC1wyQSBjmQxo4GezTq21e2",
  "key42": "5GxkLaj966ng9QsjcbUftmbbLw3C3YTDChs6L8CuybJVdXxZiujkhVb8MymSejLHukqk6ivXtRNtWMEDRZnxBjmZ",
  "key43": "2AnNKVVHTBxccw7uaBuPxzciJHAPjaGYXAeYmcLEtLf2ZELhpFJDMs4N5awJYZiWvqFqRZUxv4QTYA3CziR7qQG",
  "key44": "2BdD7kF4HMtUyD29qvGsT4D3oGV1rfBV87kznWyCce7n5jVXzBuFgaCKx9FWbTb8Pz9HZ8sPWSLMf6y6dX5jrjoq",
  "key45": "3XeCr3Ru9eKBuZSeHh99V5HrgobCnG96Ra8VZAUdYHMsuMBR9PYHP6RgxxaqJgszWaZBk6qjWKU8vzbq3wgNdnw3",
  "key46": "2JeE6Z8x9ZohHgJuaPBmNjHBFAS4Gs9YxcnnQpojiDSNyFccZCRp3NNWu3JVUnprYyGXWbSyjPfNG2ffgtipxKXt",
  "key47": "5t3RQqDW5jAHPNdBmdH6q57WE7ksLPjQGXSvDdAYsj9XSMekA3RUaE2mjXrrm6EfmarwuLRLvAmcbBNs5Nrvzux5",
  "key48": "24jyiAp5h9aSfpJdJCZEC3uaAkZgjZ6ht5irPuxLHWEN6KJUavHfD5Uot9UDW1HgEAjyw9o4MJBDPpdgJTG4GyPj"
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
