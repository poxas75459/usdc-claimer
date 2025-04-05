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
    "3YeJpZnTksy9917SnJi3L14qVGpTCGVzTgRhRALWDXUevgPwExw7NYizqfVHL3ZX1Jxtp8mzeYjYY177Mmozem8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RRjgxb8TANskDFgLZLLtvMQ8AJAg8vD7ja2mhi2L1FjCLUPk5kEJ2vw7mW52pg1p8Rve4okffs5otsGJGjKwcMH",
  "key1": "38Go8w4uVfU93jn2t3ond98Je5ZQeiak1qAJhLPryzvw2dzBjEa4cNxbiz4tR2FNeHGtGM6sBNGfLPrzcknXEZAU",
  "key2": "FLqPK7QFWe83yFYCB7P4bcdUMju5tt9fwS4Wsjk5TVDy1QpwCaGshYPKiKgE9ymB4e63QkNKzoVYcRh5mbRzotr",
  "key3": "3jbuQm5XBNp7TutypCqJAXYkwbYqP7mNAn3Wtek8wjun1DE8DHbBUY2JCyut8vh61yKWwKz9otyD5NNQWrtejkWj",
  "key4": "5xxunFMNUu1wbti6ZTVZuR2SwTXwdDHTQRnfyAUusqKMUYCNwpx2s8c3MzbSdcps4NyhpHGHuKC3dzfNrc1r2UDB",
  "key5": "2hKjfcS7ewN1K39G1FYQjbaDUnu9XpfgrjStkYFKYy7TsctyJ7C9RxBSP1pFn1Q5GRZ1qdiTH5QeFvGsbp8UKK9o",
  "key6": "58eVXjXPNPE6un1foT3sgbPETP7z3XryCdtWYztGrDDtUG1eo2nWG2HSxVGM6S7LetzNsXQPTiszV57pTKDe9m9N",
  "key7": "4jGJj2eg8L726XCUG3UNf5dhZjrPw5s8wAKcE7SrmKHYHbQQJha9zAGPfGd6Eer4GCCNmvDZvZYsTjXinsQwoQUJ",
  "key8": "3XuUPUBW4YuNMuhpK5pvmCa9Lekncr2fcxb1Fwnbvr1Ed1u1RCcbPTx86iFRSLWmyDCZXNaSt7smPUNrkNv74bqY",
  "key9": "59xNxPtFJYhKoMwWUiH3ryfQgzpfK5b75CupywczdBcGVmEFonrZG9jqjTBmdYPsJuDHaAB3R9b2bwKSRWWksLAz",
  "key10": "2vmxaWHvKkL4LPztj1xr4GqctLiD9iLfzeK7mR1pk2sazdKvHjokFyJz31txGM8abUJp6t1Mh5XiLkr34jYaiE49",
  "key11": "42jx7K1M5RVBrRod8LDfgURGT5wbDoPkYjbZnJFgP23QwoZwGYKAiYrvWksDdCzPywTCe5bNVfwjLb35YPA34GXC",
  "key12": "UzQicKqXUa7we5f3YVA8DLCvvS6k3WQVprRVYbzjngFcVTgcTGdb89tTvfaZB3YYagCGB9KDP13e2KmNsXT84v3",
  "key13": "cBWdMPCMXryVQ9Na2DGuLt6C7SrnBEtVWtoD3KtiRKuPxL3vrwzvDhbbP8udVCbD44eTVumjuzpji2eohnmqfh1",
  "key14": "4vkgwTzXXrCoLQVAeiM2GQ6G4Tj5hYG1ro8HrJMFt6Hz14z82z2WoZhqBcVkBKtMNn8EvnwXGtW1qQ9HnAecxdMg",
  "key15": "4tZXBUGrQd2yxoLA9UQmwDyvJSAFp4yyqxqhkekKnbTwZ8PfhHYVzDa29zpRCDqDRDthyTMVexfg4xnRacJ3oWTd",
  "key16": "5nDKJWRCqimb24CTmiJwoUxzcoggawNYTdGHVNvCqFiiZWeABASyUburqD16aBKG8VwoxA9pwsAK15BHSJtmRD73",
  "key17": "5wy2F7RYGmpg42jh4Z4puDtfqcXGpwv11PLCkYFmt6UNWQQ4SZrhetDEz1fn3FL6TdUNXXZTquaAKJ6fwsxsqJbW",
  "key18": "8woeBTGoZe3Pfb7oN75rag1u6m1BJuMFhTJvmLZC8xwxsccdR8JPYkNfn85FEe5PXRF3j9gELfN8FRU7SGTReeA",
  "key19": "FBJfKkhn6vswPQXJm2Ro94gwiQ9733jCmR8dM4wQadbrKEKWPkdGrDtQoZiX6hwWA2YETAPPScFFpwYM5kyn5SA",
  "key20": "6gGRnTupajjKpb9GB6JECM47ehp84Xn6mQFfbnhMnZ741uDUEhweTZS9fnfpaN3hpBVgorPR7fPZX91yYskvmaG",
  "key21": "LkE2baCZRkENVQAArdfYEkeDfBBWG8huXC2eu22tEwD5W4YinCHp9qcvNQ2Z4ZXf9o6j5Qzw7BaVMCTSL89MBWE",
  "key22": "2MFfq1f8LFumEiutU6zz3oXY77HnSwMcQEzg26VQLcWSqgWccGnGoxaJXm39wZuseWv3bnjnZX2iHg1SDzpUYRnm",
  "key23": "2DR7ynYTrcSvosA79UDGFsLfTyQ6Vb41A4trv1oMZ7P8pFCTBHx8NXu2cASymy3xvaBpXN76ni7yTmy7i6qWoHTG",
  "key24": "5KWazMsM3JJrNHGGhRbG2EqyVY1BnZ37zK2HxHEtNf2HzdLpCH6sX1YE4BZszRUEfgCcZh6Px949nBYrrWTcirwZ",
  "key25": "568upzhMrZ1o1M1y7nTMs4hqrTrumT45ePzFo8HjdEv1htycyUkhoKn4LqF6ngXdULgaHNQZL4yGLota88BQzjXx",
  "key26": "sDcnyft97ogNPRAadFqYv6XmBG6VJbebvYwqDWa4fpZ3z67rHyCBbu6gz8ReN314YvqZgJHCKkaFRjvfTAHTX8w",
  "key27": "5FqRf194EqhzNDtkscqSLhRSdkNZH6WVsx3Ljacwa5AmGbZX93DTCdrLMtoVy7DnJZ66kEQuTfrsiPXqj11s8hBN",
  "key28": "21KGWPL2ictXhd1YvwgmEszoa2GT1vPRzAoUXHhgRVD5eCpRMTr6YXKjuuHJvfvAKSCK1YXZNujJJDJBi38DTie2",
  "key29": "JSU3oPRXyavtK5aB1r7FrUMWmcssLxMC8yXJiAweAa6VAwpy8b35jP3y7RG6Prghc7mSGSZ6U1edT3Tx6YaKrL5",
  "key30": "61m1u688XCWjSiPKnmk1e5K1wVotCivYhLgpuYwvW3VMaCkRLhdgGUbfcF3zkqLhrPYLngNPLX6kA5eG3CKGXjNy",
  "key31": "3z3YsMpra4hqBVUvzbPqfKWi1bhYqqfBq3DQBKufjhz5TfvBeXzLRuKfJVNdx7D3hDqwtfr9dfyVmq8whXaz1PbF",
  "key32": "5LURNvYo2HtsWqgVMgegnNX1jb1EECQ4rsyuHV8K24hiBcyyU2EacEdNix1bh7oKkH6g6mZVaN9TpPVBPnE3s9w1",
  "key33": "4PF48vGRkRavnwWzeA7qTGLisAp3yJA5c4YGqERr5eN2dTVqjou8Et7qWyNogJPWDfQNJjqiDcywVfGcQ5frnjfb",
  "key34": "3yq7Ys1vh2DV4zTGh7zWzC7RtqrRywmGbbY2SkKrGuxf18YcrLtdZHQGZz14J2XAbC3y8421xpuCScWLtwvbLKFN"
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
