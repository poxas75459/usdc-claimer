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
    "4XayDa8KRanekfN7vKaWY91esvnzTDaR6HY5tTpQPjJsG5ruBiBQXdJdB1uzxVQArMbZKi6WBz7hfhvoA7dmUM7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwKjMusvYEaRMLyR85H4zdiQWvKSWs5QvaghmsDTQzvJ8r4UiFquuQHx2oT7PdkN7yqqPXsYTCRrFj9nVbgRF2t",
  "key1": "2ZU5KJXqRM4EZAmuH3gaFnnAmeaC7i5fPauMH6HrVncsgWqheuCudWZQm3q4KbWYM8hMwkuHiKKSoya9Z9P6WjLi",
  "key2": "5U855fDmimYMFkzqmSyf4BAtmMdJ5h2yAbBbhVfjvo7svw5u3agiLZnWHwiYL8a3T697cc77L7dCzJoHBfjtu5w6",
  "key3": "3DaL66ihYwDuDLHuAH3Pg6nwv2oUvdBaoA9YcbS9ykyypH5HykyZgzNmaW7ZLjcwzxTioRQYBsuqRKnn1X2rwx1H",
  "key4": "2UkRFKp4tGepChYuqo9rLTuxMU6ZAU63HJ9s6Amu6EgRrWu3P75noTenrUQBxoQoMbcR2JgLVUs5k1g11TXhsaTo",
  "key5": "3h4HLJPH8qErSLBJQJgLV5SfwiS9vvbz8GSJUWa94qfa8BNV4GRttorDeBoWJugyDvaZQuGjymwfG1wWkjehcc11",
  "key6": "5BebUb1Pzg9i8YNR4WRTMeoAXNjzXoQGra3GNYgXSMocVs4wDH7KRfk8JkFhrfniey1bPyA4MLR4DqVJGu6wYNvS",
  "key7": "5vnmecWQ6RzViMKvpK1C1aXoZXxeL9zwHpLCA2cg3wq8JSVpxsAMVQFrzz6KHxKSqzdWKHVuVJAfXp7gTBQZ3SQ",
  "key8": "4q8WpRe7Tio3XUUst5Vxwm6Kbd9jrfrSsKwGzUxMbmg4stgrwew38CqtFCQKAgBvKnEn38yi6gNam1adWrVwFnFB",
  "key9": "2UW321WEACqKhpMYH6TNnVxwJmZDX2L4ADDihwkPxuw76WUJD8CziYH7hd49p8zkZHLE1KAmXMEqqNmo6KXvhnZZ",
  "key10": "53qEjYYReLCHYmWKF32KUr9UfZ651uNgwtQoY3J56zmrAWmbjMG9AxvaysX9S9LwMgkgpPxPUnyxPcgpL5sTFPdX",
  "key11": "zaTWcYbuP8HBP85mJRP3ZxVJxSmmyz2eSVeqLq7Tber5LKNUsfBy8MdWLeHaYMtGG9DK7J7DtHUzRReKCcXhBdV",
  "key12": "5KFvD1He79smzpsmkMsfXSkzfWzLkJQ3gXS9vcueKH75YduvpcCkMs2XAZqSzFrWBwVJQVUBxNn5tjaXatQGKnJb",
  "key13": "2XVS5ZgFxkbLLWLbbxsXyb1ejgYaRbqssViPXY3zLmVzGdeNUyW4J1beeMF1RVQnqmTmF6ohtWB6NVjZoVWvAsak",
  "key14": "aoL1gRWFQMvKtz2K9ajUVgoFnRA3UwQGiWqqDqr6pr1j84QkrEhSELrQCmMPtAoK1fVQ7zuUbhXDeQzDYEbhkvT",
  "key15": "5m8G2b4sj3x9E4Vezz6qq57RnJm4oqK7uRtiMNMSvK5LprmVTziSMULQHfdFEwdG7FCUmqNtEDdFPoZTRecUkM5s",
  "key16": "2tTmHbrWKKYoWtHtEijtdu4fnT2gH48Hb8SX1oEP4oAcf2TSxXJsNp6P79hjL7MJuRsEWvbosh5FT4TM8TmLzsnk",
  "key17": "5v6r4j5qUS3P4NNaY7HBpQt1N56skfPCf5XysBnYNhPaa6JSbgvqL87892zqJQKi4zjDqek2XNhp9oUmHV5v41sJ",
  "key18": "3BW5DAYCxheR9s11Xq3YDbUkYkyp7Z8voDYGY6pPf7uyJtSmyUoB2ToQ4JXcoTzrnEiKkHGtcEzA9MW611qYijCw",
  "key19": "2UDQ6PVZy4gYW1hqms8XQutKdfnwpknqwQAX6XJ8dgDqRJYBND9bQ2h4UaytsbpCw8VZZbnBpyh5d3BL5f4wHZhP",
  "key20": "4r8tqV7jLfXwY1k1nT5ErT88JG7qz7YbTeTyrMKauaPH3pVjBen5dvFid6j9c5PNwjrjhxoTXereb2WWi434BYvJ",
  "key21": "34idQHYSidxQQW344VHPugGCXUZQXQSdxGFJTAUmCLidy6aviH7733cL9eWjHAL4coYnugt4NjeJU4SSxQETZKsK",
  "key22": "FDejfy3odtNobCQQGqFQmpwmP2MeFDD2XQTMTdVYwfNeakpKRinkD6vSNHjQR3AsgNU463PXaBoj2994nXeL2rQ",
  "key23": "5dEqmbbKJhXTRXAE8z1vSAjSSb2qmPqPeber6Xv1pq1VhQEq81gxNfhRbw94yhWMBBzBvyMorBb6GB7u3zfTNPAq",
  "key24": "52z3z83t4YX4ZhAQeZsW5wDo2mHzPWYCzSsgmus7ves3qZKFosvLWzwvv5YR8sgdb9bzuk19eqPBkYN4sDUEzjW7",
  "key25": "5kwDCD9kHykseoo9USxY5aa2t3Xttx2fr1sgfLufZ9RdRvEzkgmPkhuxucQe66jDcPD7d9XJ7WUzY4DXm6XkaBDs",
  "key26": "5ZHnQ3VatL1HAQAysPVP9cASKGNiEHwmPg46dg7xNEoSfQ6GD6d4QyQEiwkpsfNzMoKdXCHzaieaH6uKsQuRFapp",
  "key27": "5NkZEjr4B3gLzgvyWG6o3eAJqpdb5jHGia23x1x4uj2Fd8sqXZ31BgZyKUp8Ztfqmx4oEAUUDq5sc54quDwR99vf",
  "key28": "35mAMWkhmQPQQ1bzvuBoAitZH5awMUCSjwDg3EA5JhptTZesVJZDLWVQduENQucSnFKSxCAsv8B8HPz7Qk5LuvnT",
  "key29": "utRNbaCojP8g2LHULiBfS1Pe2A71DZd961tz4wn8oCND3TjkjbfvTZ6Zi74cgiYapTCN4oe6v1RXA8Ki6Gm1PoX",
  "key30": "5jeYRDQitKa6HwD8M56SBYYcCbxjMkV8LkeFmXxyqj6nTZDFNXEGvFQFLoA6pCuoyQzB9Kj8kT6Lnn67u86RwpKM",
  "key31": "5JbaX9UGXXzodr13uLJ3BqQf3THGNEkdEQLM7QmRAE5J7K4KfvmaDjbUSQLHTCLbs3rpUEydajZ8b6vrZEcBHw7y",
  "key32": "43Sqgvca1QGhTpkdfucrnJJuHKAziRmsSsHShpLWzHBBr322Xsqf5bqCTybs4wodNBCSW4aCAgiKSizqqsgVfTWP",
  "key33": "4f6xqx3vUSALdbMNrTsHfnLEdsZg1fA9ByHuMGWBYeUqZykBujf2cnXQVCBs48UXNuGNsB5jLjkCSqNEKcrmdudR",
  "key34": "2vFxfadDeYXzdHfBu5DS3HeAbhbRf6UZZG6RJuVhtvDDLc3xDa6uKrgxp4UzGGNth584Gpcb65H3ZY2xgx3SvuBa",
  "key35": "2MFR9bANaHoEzi7d7x8sXZUpQhA7eoo8kNX2FG168kvBHzqDn5odbc8N2QAvx3VCEX6QtXBMUWwZYByyfFGqSV9r",
  "key36": "5myh6SzFpCHY5JeJCu39iJkQvU8ekgxqNdMLEcfo8GoRyrJsbdtQwCepASUuDRHkmRAxPn8Rr68LAL6yhm961bEm",
  "key37": "3k93vrkTnuUNZSpS3dS3ZinoQm1vvhjxhE8B9HRXLmfese1BAipB2d5qX4C2pumeKsRpwiCBW8TFhvojRFP1Wapz",
  "key38": "3nosyTn6rJkputByE17q6CKRi1yqc4kRtSyy3tZ8CB6T8vbF9oUayTbRFoUwJ3tfermuZ6t3Cs2NHsnC7ZRL7dR4",
  "key39": "5XLBHR1tTnbPZUd7TRs4RiZ5W1N58VR5FKJhwMTpZmSEwmCoCdQeqAqNHzXhK7f3BkJrzb28c5PW6YzRB3uq8FLx",
  "key40": "4x9TGdd3rdCiYCQfpViutPtg9BMVqSHapo6tUvmou4yv5YS5qTB3qqf8pFqFc1VQmHQGn7pBSYhhqm34kZKmCacM",
  "key41": "5F5diE4cFmN9RuPAQ2mYDB6GGi7oopkWpoAffN5BNRjQoNZaTTXgiju6r25sMq2BRnAaeAwCEALzkmfMhy3GSgDj"
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
