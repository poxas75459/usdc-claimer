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
    "Diqr8BPEP4ugVPcU3AmCgUKJ5BffYZ4Gg7jzvhYyfCruwwjpE7VxtNTXfR7aA4epnD2N6jnpDqKksCYu98LTqJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o9znt91u92LwVCp4mCScwHbThaz8E7Cwt9wivto5JZwggB4gSCrMkyeayStN8WCJUamph5NnLyowWPCgsctgRYQ",
  "key1": "5J3Wx9Sd7yMQEGzW2YfeVi1369VHQo19VieFrH3Zh4oKd7oWznNEuC5FKJaRAj1N3EehednjAY4kpRQYbv3eCkmV",
  "key2": "5n7DciYoK2rERSnHCQ4fXDjHG4mWWpYnaXwjtcAd7ptTeowsFizc2X43R2VnqBLm7txo2XU9HuBTZSHs4bqYFsZ9",
  "key3": "5JPFTzXjjUAWKsbX5dhjigegPRBT9TkD7NujGAKuEwtPvxVJwmgdg87x8D1TSHEJD3wYJEsMtrtoYGtP8jkk4trc",
  "key4": "3a4tK5SWmHJoSxGQNnJz47cXAy8X9g6bCSQA8jhdpf3u7XQxTQx1mpcyFtrv7u7yJhSNtBAaW1cFwMvYReSdBws4",
  "key5": "4ZS9GtwiALsEx2dpEHzN1gA6ubJNCE86QpEPLyEE2KJnBvp3ZSaZFQdb76SJmgAFNuKR2XZi8cvE7AaEtZhFvjNU",
  "key6": "4BF3pkgivF5N1ujQ2ACJKtArHHZ2rgPC6jG6bpPuvSpt2PDafjRVeBHmb7XhqVEWYjTy9NLUuxLwreXb7czzWyaH",
  "key7": "RNdY4HpZyJizvxBtuySGRxa59PZePhqCi7F2isedonqwS7HUeLpcDSAjZzwo6DhxvXsiqnMYMuBzGVWj2aKfhHz",
  "key8": "2MXgEpHrimPuGaXE9LVaJyTahG2cogLsp91SctxxsZLWMkJu5SbDbWFYfQBCjum8WUiVJiSuqP4x9ic7xZu2Sr1y",
  "key9": "34U8eebdUpa4x4mYi2eR1gQZmbx58Lfj2LMZzjU4vX7ygWqrojEFEVc7rXvj7c9PfUwuzHg5YYRB4xk9sTH4sttG",
  "key10": "4FM9EEjQcJe7hW3nd7gU4TWR6PMRM632Ccvmwz1eqfm4r9hG8jtLFsYMDxTNpySHr9V4JpGbwEv9HhUxwXapKitB",
  "key11": "3PwgszqoJst2MRM6CRnRG7FY9Jexy7wnsLP4xaQuwVXeZjZYQmufZeZ76ad3uXuQMfHvg2UD6xaZtjdYypQfRYcR",
  "key12": "3w1w996EPvB9J2RzXtRMv8BFRrzmCjGKEPxHB1QVq8obgcwPHnNBkSYYqsd2rEbxo9GBoqSNdezrbvLVSHWbwBfL",
  "key13": "4YFTj98W4Cw6q9UngEGb6E5zA5ZhEkXEqntAXsexj2NbFtrDpw1wRyrkMg9F1zJiACm9tr9JDdJdHGRKJAc9esia",
  "key14": "4LktXJYr2ASEQUt9VDx59Qnrz9xGWqdvHNoL5kvdzm6d6dtbKdmUt1tkUy7WEx1PZ8oJSnJUMm9CU1iL7A9M4BkR",
  "key15": "5L81fXeTmoZgdQRpFAXzE4oJixw2QXUF695QgkTrZJAHpF5emjsS3Ykv9NSqTXoWMYSSgp8azQ6ooaWgyGeepA76",
  "key16": "5vWf45QW27RAnAbSfRKxwCBwVwxYpsEyshSqtikAUgCNAMmDaLe5xTYv8AuEcq6HEQ3BPbzmYnk9u8TVBDtSDaq5",
  "key17": "64FGG1UfJ9yBHnjCEx1haPaFpzTeTi3bQj1QQkozp1MHLTNYnwf7nH6GqeyBEVBeVacBuaNkiPAATMCL2WpA4KP2",
  "key18": "TQzJeuXUYR1d2TQ89pQRNdJfbKBo86FbYn6bfvzcwpsakDQBTy9u4oHngBo7wiyCjmVdJQdeFfyA3RbCEeAQmwF",
  "key19": "36JfUmiRafNspHuRYnt5DiJybGhcDq4Qbkk2q7h3nPSWfDc2X1boXbgyLMTq1mexirxEA8opRJsFysd62HS9b6yB",
  "key20": "4WDuaLxPP3KjXUV7xaipj8ucXCnXh1LC2nNkdFXxtZU6ti6zWUxSfMNdbaXvhTS8dKVX1zDsYdEt2Rd1xdjie1og",
  "key21": "3BYXCSAo55uijpZUauBaisSUCXNfcRqJiLsdBV5AWxqMd2UaGxMmTfJx2UK2NcMHBCVNtFP4pFuQ8rQF9XEnK6fn",
  "key22": "3fapFabheUfrgaXU7WvLWF1dSWNy8kbnWNe2C4SBqCneRK4xB19xWoH5B7bgVhbHVp3kQikAUMBHZmKthicX36J6",
  "key23": "zmHikvZW3S9AZYeHnNQXan5aMM2QtyfAqeWx9auNhuz1XRdAmMLaZxNew6m37ujmfq2pndNvbSG6mD7q8BFe5bh",
  "key24": "5DMjrGbim9T2CLiG4V2aUPKwPEsLTC2Abx1TZK9yTTs7nwVVoeYZqG7Ah7r2bghmAg5974UeMh38KrT5u8BVfnuL",
  "key25": "3MFZDtgBo9kTQQBRZV96oKwuyxJbTvxsWevgixfPuK3xfSHQERgrffv58aY1KmThdJ2zzmQWL7ZGpvxBF8ooT9S3",
  "key26": "4UjRn9Fre9ZL63MpCAhe4P9BYS6PWjBCLtDVKPE9M8nmVmo2ubcxdapQCzkMyy994t1b68jG5QzwSyfrvUa3U7S",
  "key27": "4YncKFyWvd8mJv9rV2NGqVoJ2HVUZokUKaDcWur21FDdehicK2oCEKVZwxJpsC31TJfS75NHCSLPAk7xcLFLdbgE",
  "key28": "56s1YZATZjhAZ74JwaXFQuLpohgFChEXQ7FH6CG5pyg7msKQWCa4Pvtv5o3WbcEUDiHQgHkYtzS4DUxFEF8K9HHJ",
  "key29": "3qfYQwXUJDJcQZTjUb7MJ4Ntsiqzt89kTSo7qujbUwtCxFooRSUToTWfezFhaTQqoaHqbamma9f1zZc8NLfvFi4K",
  "key30": "2hw8CujFjN7ohN8HRgp7y51evXnUywJnYbgBwccChvJYdUQuKRVcvsNNnAjbS7cKS1iKGaBMG3gUJ1eeCAxSSdZY",
  "key31": "5Xs9ShZptpP9FqnzS2UAqzPoQ7Nhoh6Y9eVcQWo9Zo5e7PbiW3GwKEzCGsBjFMWPLtnYD66m82ev66rrsooByFZ",
  "key32": "588x88wmcqxip17qhwrSghFNyFRvQDK8owCd6a2NNcswH9di7GCT41dMZFQJKq1ThHoMUG3aNJfgCEy8m2ZGETsw",
  "key33": "Xd2gEMxorUrCUeyBkfoMR6KyZfzxzzGdC1njzjWypPDD9EYkxhHNPKLzLZU5MTDaiCxW4hgEBuXB3ZEmDnvbckM",
  "key34": "4Ww4CYUFycSiZuKP3MdAn6MZ6J2M3d9kW3H4BCjq6ifhbYqAvezSzEZakReVFVUg1qnhUaxZcCZWdhf4W3JA1zp4",
  "key35": "31wKWJZNKPTw9SwvwSdCVZdNLRGc9VZKRT7EdBKWYD6G7XWk9N48RCopJ5joMB431bRh3LfhszEA88cMWiGwCtEj",
  "key36": "2bzApP6AeMXG3xbEX4XptWTSC9DpuosS3t4QHgPqdrg4DxUC7UgqCqr2u6k3EDnstsNusZfa8A5m8BMB6ZYEYUyx",
  "key37": "jy17TunadgeLfhRWB2UejuUjtMKfGmDcQm4ksueokvveCJP7Z1gxaXdJ183SCk9ChYXjooRC5Z4aUnZxSBcYTvy",
  "key38": "eKixtZBDo8Sk1pY9f4PoiitRdxuqsTQNrYrMmKCCt7dVp8vSrWxjkyL7sXkaFnyTAs3JQzrwgRH6UqH5i6y2qYL",
  "key39": "3jK4aELSmx3Nirubw3uLwDThyXPPu1fZT5k3g73ysLmLcmhVuKefySshSt4cL5VB8kNx24QJLVHcBwTcrZV8cH8k",
  "key40": "2chT8ZuME9hLuotp5oTomJSGQywC3HyrmuMvHhcpq7hd2HWGm5EWzEQPN6R7c5oSSproRX54aAwxdmZwnMJB1wNE",
  "key41": "4RYcEKTCS2CB8cUvLFUteyJgpdDAbLKqokEUgPLBhkXaqAyuBb1YfRsVTwEdcZwa9TMcVZwEzTcj3HggvrwyCjBm",
  "key42": "2KFyGrz2crSYcH3WJZfuGYZf9cubfuSrXi8MZ5t4ize3gd2kS4454T1BAe3tp7XVRdxQ6fNXTRxYmt1xpMHFh8qG",
  "key43": "2EYB3SpvT7jp4DuBmjHoRhzLwyFaW5NuoJ8trwWSbuDp54sUW8h7tESB5sTeTfugiktEgyKjHdPdEFfYMBefs488",
  "key44": "H513dSoyyLsRvUK1QezCGrM9LjS8KSgh9XUg9Rjsct5TUWb2m7KMucjAbERqMoJgrgH64BNmdQqs5HnrLszipFz",
  "key45": "EWiQwWxeRQ3LAkboHGovBB1NCqaaRuVsp8Y6MNgrdZmALZ8u7Feoryde5TXNieCLKDUoePA1cXhepy15cfPhHRp",
  "key46": "4SEVwuRTYsZxV1cE13w35cy9gubbZHYWLAKdcGQYUeeFR1tJgVfoaASUf7kjYM5CcuxBAh8qYM4CcEs5N4EeCZyA",
  "key47": "XfMCvvRoVGJNMPV7LVontsLWSNYhVf8x4SJrveTvcoxWQZMcCsNtemacnBCMnhYPZAkhxpufTddQSM4ZRNpwdxV"
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
