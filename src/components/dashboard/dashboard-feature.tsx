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
    "2RgxwCfzXbCbyM5k3rPnJ7JFgxNmqUsm8g7G4Gtv2HxCZkMvrtUPXWcGkfXiPwGoAwJXW2vC6KEnv1Xib4KfP2g7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tybvHWBUdTr2ZS7sNHVVXHGvprsq9YTfHpTTJTDMrSNTHEzK2VEA5QmraJdfhrctmiH2aDgrzCrzuo7xXzWmQV",
  "key1": "2WByeczp1KaCpvnweoWcL7q7CJWEWGF694qUpp6tagC63Haj6JTewdiimpHpCQg622XYiA8jQLjqAa2uinbvut7q",
  "key2": "24jaYaSC4nq5gLYj4rkWYDScA6jSiCGMThXwrD28EsU914RBB3BQi5Mmyd9nHmNRrA475byfs3L6WtT1yVbYMW4K",
  "key3": "594K7qps35P6XARyFH7G8JMpxswn5ENjquAjYRCdBqzQUCV2pE9vDz7oWVpVo3rcPY5MRXLpYheNjYLaGQ1DxwH2",
  "key4": "5wL9kjn7wgkMwor2kzSqiufbEhZPaoPNrGuPYsojsRCzntLkEtCGeJWq4Z6euQ4QSgzBCRAywq56qC3LTsnKRTYf",
  "key5": "58AXDLHZXX2BC2ubsixpz34NgRFQQ7gGT8ZFg4HedXakQD4jvyyHg3WAQt1gpvCBemTgMxmZgYVtqqAB6d686Q7t",
  "key6": "a8GEzvGz5FeixCTV3jzkZf6VVDab33PpvZ3KDb565iaZaCAGAS4j6xyLb5QAKergbBBzeK3WMaW3eRkqNCvjdfe",
  "key7": "X7JyoJJjneGFUNG9j1DxxJgTrgee6Uo14wwnR7GPsbPN6tj6Sq14s7kauEfDzhViiS3ibhQjxDf6sZ1xEnuoRi9",
  "key8": "9nK9eHcfdGNSDmba1uo1NswmSGVgbYsbYeuoNzPcTjUMZTuLzvfNfdA1HFKfsHFMAqnfbbiXiy4RVLkyK6HBnjV",
  "key9": "4jPhtu22gs75rkFwRHXad6nNHx3pfkrTXWKUBdSHBbmcnhLDSfCnD9vtZh9aESQ4EmFqDhMSfffy1RF5UupiQXZB",
  "key10": "4tw7SasPS2DQzFTvFCfgSoDqsERovzk8Jugka6sBx42qWaoBSwbW5ErVi7mtnDLZXJtpeaY6fnuJofsFKpQon5SU",
  "key11": "gSGYwzhg5wBv4VMrwA2z7UHFho9peeFFxQxKsSvG8UiGnRmqtNrJqKfopwrfwYAnAWAVmrdDkLAWbDSvNSdb5f4",
  "key12": "29xqzcthpMkeUoCCUQGsrzkvkNfny8dHYqLX3QGuC7PWtdTkAM7G4NPSMDMRgMtMziQLgZDsPtTdWaCen56U3GY3",
  "key13": "2htDJwnCtCjgqwC1raGp6wRGG4AHW66UZrMf8NEWCQ7g3ED5yqRaZRNv8NWAL9PbNPyVUM8Jo5jBY88dEn3RpJeW",
  "key14": "3a55QR5AHaNmgUxQVXrK79BqGqE3PQhaEWsiZX4CgmiencywQsk5JbgoDfRjx93aC6vrmhRah2fMBTiSPmBSxRHo",
  "key15": "3esMebRc6je1cxBQFzsfezeW3yGH2kpet7A2UVoKhQg2VZC7vuDt6jR6QQQxVKZxeM9UK77Pmc1YcrnzQcFUnbYL",
  "key16": "5meZq5nL7Kxuu6mBfP7MohM6EfSyZt3m9AX3JjzbtsjpRS3q15HdDpfQ8e9ZdNF84oAYU1p9npEhKPeRKquhPzsb",
  "key17": "35BcNcyERxnHEhWXhMPWqPhWTkD7nzXZQHqKW84SGDksC9EEvbaPcskuWMxDdhPM2Mx9hFZr7b3zDW6Ncd2KdWLE",
  "key18": "MDUvzJuYxLwgfaotP7Q9ZHqeAVibqhuPADJGykF43P4aRcvsK19wU82nxm3wio8tU5eh4P9m7tXU8TXWKe4Rfeg",
  "key19": "2GdPtB6SwCx7t9pJv5H4oekeVRptko3iMNSRMJQZSpgSzPBScAQqvMSCVX4PEAJudhXPTrWjFEMm79skBMXPpxpk",
  "key20": "4Uts3438bPNSS1Utg8DayoMorBdtEKmETDqaVqGkejByTmxuoZtakqK4jpKTiEqRZcrFuoEXmLcbJVz87S4T3org",
  "key21": "268DPmGg62Sm9FAZGgbUrEC4TQAjB3Bf64nxDBo2SsdktSESBQbAuSE27wvbj4PtYoyBb5iXdrkR2wH5EinfVAtk",
  "key22": "5H8dp43jVnztdABzj3vXsyrxor6sFDkzsqPwiFqhMhDnJn9r6mbgZydYk8V24hRYvrnxYQjxxLaXpKaNpGQ55ZcY",
  "key23": "2sg9zcN6vzUsUiSvyGoJwpqUpDiYE25geJ2sWxMxqvWBXqmDsXpaE2L1aHGegDDAKoJS8k3ZHE1TmKE3UyMgahSR",
  "key24": "5F9wggAfdW9A7PkBMCRD7uTKat6PDhDFMN6Jb3kAeBU2ghZqMJEiDbN9udVi1TFJ2HDqBAqkMZke6AfKXvNibkDx",
  "key25": "4e7VF1wkgeuQMhLpJBTUXr8KyUkk9uKYSamEwepkySLGwSZSV22U6KL3QRhhZcSu77NLCTXirYkFq5EWyy56ohnU",
  "key26": "4LRkQERuwQvv9Pi7f81vjj8Npb13PqcngAcbVjRYsS98vzWTT6YTz2283ch1WWFaB5mjR9Qm5FBv1vfbAthQdAoy",
  "key27": "5QMpt8UXrsZrYKywksg9emgzJLadhkRpb2wSRXWvagqUPtTirEJ4iuyT4xdoXZjSUXRpLxeQfTDFNJdvZKPnu7p2",
  "key28": "R2Zihxyf4CqEiRqexebz4F8gG5WLJ5S8GmMR5VMjsNKTYqGh75rGHd9iALLCwqvwfwghydRS8f3dogYa8pcz5GE",
  "key29": "2dsnJbN1eQSPHjS7hodBavMCAuUKhDLwsj2iXToUKzk1RznYz38bxfu8DQ1DehsK6VmQ4gUfekgWuDoKTNAtPVjK",
  "key30": "xcjKHAHArpcfZhiXq1BbqM2aQBB3NtSMTWK8V5G2ZQ1KVnntFGJFb4k1Gi7tLtdRZV6vh6dGMv7V75ZrgL3NN6f",
  "key31": "46bam4YyCHK8MSTgyBm8J7hJNyiGjLdJFkvxiMBGEdqqNt8N53xqDQQKMCfkEECC9vSFwGNs5RDiMEVLYmpiVGgn",
  "key32": "3TrQxPqKHL3Qu9s8TyNeBkVMKocZM1bnXbwFiFRE3CN6xaydEYW5ybdRpDJdSezpbEAqPDwFb1o7FvdNxfcu28Fq",
  "key33": "2iRXqBGRajgBQFnpzoaMFWXRofHXsxwYZQjYekHRQiti6NQQkrXgTt4PQeGwZdqfX3AkbZZRsQAUJKzs9TAZU1oB",
  "key34": "33czg9ZJ1M2hKmjAan5bzHcAPdYENHVwRvMrgbkZ5Yq9eSwUJFkPbgF4mDbobcL1YuyvVKByyTAv9tUWSDPJkPrW",
  "key35": "5s1c2ANphpZ2tqSg5sFb4VBdKE7PfxcSQ9t8c45NcGGHr4qAAJqekTQkxZT2BCm4iBP4UR3Wstq7hFWhTw4redu3",
  "key36": "hF2vvLaQXictVnemcvUktGF5DNwRqbiKXC5YZ821sUWtuuwK8AWoJqiqBj1NcWf7DzjLpXWBJ7qBHYtQT5ooJLJ",
  "key37": "3PmojPCTn7NsopbGd9Qe28P8ULxfUY3sheBp6j5ianbDck4cAgSH54Aa2XmsgwjJoDrxHgtov2PXDrkorRnWwwMe",
  "key38": "5prb6fuQGrB1bsj7QtBQX7qUCYeEukM5FWVKC1HzxAqNsgUdXsR15Nok4bXj4maM1iRxs8oi7TFY4zu8fHWRK1P7",
  "key39": "3dWrxjJ94mu13RbwQiBet4Qkg8TLMdbK5w2tmqP2kvxUcLcWeVaNcqtKpUdN1snfic8wnfer5Uj92kEi4pAiVHhB",
  "key40": "pygEh27yE522itSNbi6Q9vJia155brpV4KibT2MsJTkdjzGD8pR9mrsGXnmsEC2gnTBW8U6XMygEH3hsRFADSW9",
  "key41": "3e1NLtSa1cPepDBVCG7uzhHiKZjJprVY7p61WtvREdg4WCGLAbFKhjjwkkwvkMo9GJvrEjBfT2FfnNhZgK9MMpPR"
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
