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
    "3JZeQPg3HuLmxveByhpUVUnvW9RhSiVTEJ25NhnExZCgt18BaPXodA5rVnk3uhzBdvguP3mLFSnXTCZa7DeHQLa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2on1n8q5DX9jGsqxEnG2zCFb7rgz3Msvj9bVZxMrKPLCiRr6yMWLQK71sPL3mDTfJp38fzCHiBf32Qrtf5VTtqyf",
  "key1": "4q8oDHEqxTFZjJ228ZH9nVQJbqeB263mM4c99PkVk8mLwfEuYw4JhgboJehfa7xvyL3ZLdoeC4vcQ9u9uPAjkR7n",
  "key2": "5pDdvh49scVfZhst2v4sF4X2zrKmwPXfhJmbFpHt8tRzFhmCSngUeUKhCg8ru3Ybbz3Ge1oFPSX8JDZQGti7NJFy",
  "key3": "HmtRsp9EG3iC4YMVbmYJvweKxUAR8svaqVKuyVQGsSkrawH9UM7Bn8zk2rNkerqCKG6wrsJh82YT6qfLvkQSLiF",
  "key4": "ByB1xpQf22F1Uc6qmuiCKDtGJhcPbFJdk3381TGjq1vXD3ZWB17ujck8t8nafcCDcVgyzof9jukL3HhUuTZtuRp",
  "key5": "3VvX5b1FAVDp9T8LF565P9T4F7egqqiivyknJvhteEnCboSSVNy2UEFq5ny3FrnqnDt6QpZkDpTprpy3RUPgsyX6",
  "key6": "J3brKG8oyvLoN1hTXvgn14oU6HTqwetUDDXGPmkC16T8L1bSzoxeLZt9jVmkh4ztoVChwA9j5rXk7gZRtNUq7Km",
  "key7": "5rjvPyGpQKZAWYGT7mffmR5f2vuC4nuqnbRVT4gaHL1VMMq3fYqDfV7d5usAgV3AdxkYuH89W3gF6CLq2LWeHrQb",
  "key8": "2rJi3X9mdvYoonoHcThdNMgYh1T38kbrPu8QfeQgZpPQqpFfy1UZsnnxmj3BLPqBnehjWocC3prMegcjENtB7yMa",
  "key9": "AJHiAd4FWNXaQyAoNPM8xW918ktJeBjXiBhGhG4PuHyuaZCb4dUMx1abMEUyZPMcYyZPrcY5hGzhACgJUXMh1rK",
  "key10": "UYsypZbSVi7HkfZyKvAaoeBVkStmD5SyWJHFvzd31byMCFA9KoDHr8PXoX6xecHnSAJTMYKe4kSGaX8fREVsvGS",
  "key11": "53JHRSQxAJUgCxuoMgwSakjBMSmZJFTHCDjEeQnBev6RDMjyvo3aMTyVDqDXZ1KFie78aTRJ5aT58uFqgo4tsBdN",
  "key12": "5xsvvheXc5VgoqV9b2cCHgCKs8Xt47fQx2bWxB1eermwZXQXERd5Bh6XQwm613oHjeoGqFRJjKy42UxkLKixbZKg",
  "key13": "5gCS9X9oZhdL2fUGvyCNTazkksBfRaEP9CfrkoVsixfupW4X5CkA72wbQ32rYttqgho5ocPxCpkEK7ivX7C3WhhM",
  "key14": "31mFNPMznAA5Pi3tH9BtfCoS6478TAn6LFbkgs9PwAnynWfEgzYj2HpzPbgLPfR4uQKtBuY12G4QkJY4BNDg2MP5",
  "key15": "4ETLusNhgZQ8nGq8Tx2KwP5W5HK5jy3WNnyCcnDCd5PT4UFyyjNqkt32HaacKm2Axzmmg6NBjEDJciRPAYEk2rtd",
  "key16": "4hVMwB7CKrZmMSohr7SqbxeN4rQq76EKwqV1a4EiqbGnfcPjkMEhqtzF2ndRQrd2hLFUKsV9tBJELFYtZuonLkGu",
  "key17": "31eZLyzxLqKdMx2w4j4BJK9Tx9GBwhnF9ch1HHdQYGD66Uadu8vsktfS6THuzDCCQqBEkqM3Xs2K5St9VeB5izM1",
  "key18": "FmcR4QbLFuuWQP1Mp8oyuChXRA8XgjFL8MUPNGf916YQZs8zeQnoQohSEwhqX2JP28FHYwZJA19SEkuUqQemMhn",
  "key19": "2FhoPB3vt9zNnDTenLkMicabsyjvGRrKRpWtyoNxbcAaVqwkGo23DPrak73UJsxrhuEj5jPGMUFQVYt6yPDBi3eD",
  "key20": "bpWUDYjBW1Q1D2fkkVqagyYSdvSfDjomqwegbGcMMWPcFhioMkoVt2pGau65SH5CjLFii7auUqt9UoAh2bjQEpN",
  "key21": "YHwupergq6ZG8WnhX6hHme1MqstCtjuSS51CkKV7AB7EomHD8AKGXXF4mj7rYZG7fkgcvBTWXomaKy8uLbrWLSd",
  "key22": "uYBSY2DZ7yefN8BUkUhmTpppjZHx4BDuhqkbRoAv8XvvnzKaB6UfhGG1mJ5iDQgz5ycUGWx1nTwxAfkhrLQbpSX",
  "key23": "5BgmPPdBDq6UfbwBQM4u4BtCDaFwWSSQ19GCpQFYkmSk1mH4b7cFe5X3yK3yntVM4r3YLASL9aoRxwFYdMmkqysS",
  "key24": "3yrWguD75xiWtYzrqJjyL2Bu3htSLUKhMHpTPFHijv1dJRzS4wxqbZYHsnxkN2pNPTWz592yPsfaEaq2rx87AWRw",
  "key25": "3DdukjCkH9pydF4Xdumpvt7e3gzUpgDdDsZtPSsDVuuxwbT5Vbv2NtvrtSnhKCR5X8dyMS8tGLvGwbZCot5SKbaD",
  "key26": "4SoPrdzForXUQmwRcyxZULqibhSpuSAnPoypyavN9VDkqeEVnGnPDsPzq9jG2jMH9ki9i7Jf7AXUvXUEc9DgBdnR",
  "key27": "tjL8e7T7HDirkD5NVF68b5dntMUZjz8hNqeW6uSiEzPRap39gx9HjuT4cyJEkHqSUxYf4TdGyee1P9BicQjxPeB",
  "key28": "5Dg4aigunia8FyvLwhmuxbgEcz6VHgsSK92ULzUyn7Ugi9VwgBKRybzt9P9gu8ftnDjt5xz1QCYDaXB1jZvxY9HB",
  "key29": "4x6fyBnBgJF1VikTuU5t3oHdErJaCnnLuHBrxyaeq8mBPD7Zax6Sj82r1AF2BSrRTFyQ2hBf7C4YghbqqgiszHtt",
  "key30": "2WELRwWi4ULh2uW4TEnG5QdXdafZexT53GcgTQsaLFL9JjqKUPR6S4pgs9mwaDGNNs31nPK73U8WmpDJgHhdb3Wj",
  "key31": "2bg4HciwYbkEv5dmAHsajWJ9Cz9i7cYGNQoeydUbRxnBs9cUgEo7zhBQYh3Wj92sAwMhxJaGX9TcEpg1Z43WeXG9",
  "key32": "3cT7oAinXaTzfnaR28hHVEWw4rkm7quaDQLadovFMm23HzGRTrQn2SXPRKpE9iL6zhgDMtLqeRP5mKfwjzz5DZ79",
  "key33": "7KW3FSED6GrE8tNMVsPmacDyedUoKaAuiAqLSwFACGzQEGkwFLcT2qo2tgUjh7d9ApohEDLPT9vEDBvZUbo8pwF",
  "key34": "559fzyFSnBkoM7SiqaU6AWBuKY6tdRTGKqr73TLw9CADWrwv2JKqrYgyqbVSAmdFzKtvYHWRZH2dqmenBndzMWwT",
  "key35": "4V7XQmj5FdtYxRpLM38nyc2EzgZAVPGfiWupstgo6YxL6hYaJ59sueFKZ2JRqKDjKcKwKGTYMQ4UGm5oa6yc7vJt",
  "key36": "2nDFFWthGQ1mkKfjK8PyEDPZPWau6oqZTfmK88oor6fPbija5gAB12ynNr2LXDddm2ChhBp1sdJ3xacFaszjsApU",
  "key37": "R4awM3uCHYUmgF73ZFvxoZD8ccPFwhNBcGd5eo2BUD5ijf9j8hiwhg4a6VA9FGtgJ6eSBet3QD3XQgrDmgZeGud",
  "key38": "4X6MPgrLeaRPd7akqoFQUT8ngwuWFxTuQNP1UHr44eXjs7AswoQoZCjuDaoY7f8fqLcccvnwatnSZL9pd8NMQqBq",
  "key39": "3TWekfcYNW2xSnVfcZcrodVHwokxLQLoms35nD67VWFWUaUkqp4srvmgWCem8dVc6iuhCRnX6ksxPADZ2CWHxgBq",
  "key40": "fqVtVSEC6T82FUNKDXeBgWYitarFYoifEdBxFQK9pSCXqv8ivduSxze4rEzur2UxKchnrVGMxjKCuuf4dzEYvV6",
  "key41": "5gdoxncWcu76B2HuFvVBfAu3gnDJLMvBCfjVyCbitXEHXwCZKXByRGFUU1W5SWZZMkbgQ3MCLwzCm872CzdoBrz8",
  "key42": "A54LmFhfF723sXYp3EL3sJfAHBghcRJAhxwu1aaKnwTPD6z4Ngu7XygTRBFbHzxrQstTFCdKtim1uFLL56YR3h1",
  "key43": "4fa6s766HLynCL2BWM2GZTT8M8Ta83oDt45akiwhZsQe32fNT6WWNUCv6mXJRUBDtcQgr6scM1MY9utgetaRiNoR",
  "key44": "64kk2ainS3KH6YjtBarCrBieb6BFKrdHMUyn8pUZDLijeFRf6PTzeJjukACwrC3Y2vnroqjRzah3KtXZvfdweiX2",
  "key45": "4CrzGwyFGo2tGpyzHYEQ6mKk8GCyGdHktq1oKvUJLLphHM4WorrysMhKbu9BBL2V4UPBRJfD4ExAuj1yS8Wi5ZMh",
  "key46": "65b73c29THeY6gZKgaqm1dtxhKAmLmCVoavsAKMBYQKfTPfazweXGJcVBw2hgpRuxfAW88bVfmGJUSBT2kHjpjw",
  "key47": "3BfRjUJ1xJYtd7T1cHFmrcZsM3WLA5xLRhzaTKMuhQPEzMCeDrKjQ2SzkrriuVPWXNp35va9dECyr3RqpoPWJoQp"
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
