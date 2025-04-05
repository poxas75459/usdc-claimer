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
    "imZSxZBX4AwaVvp33H2UPrrfcmDkAeUTWrpDwR5HN1ysRdJZr4NBVr8nsG5APJFZuAMNybuxMgsMVKki55kzZHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZweUnbVb5u9SJse885TUzLeVJokLkYmXtRDHRCmPJdsj4Xn8S24Ckjisx9ynVv3hMWc38ynymirZKq6QCQTj1b",
  "key1": "5UgLZxFjdTmLKqusNwxz2sXQRdLYG4f67YtPvyDm8gJYoFjQhtYciAKsw3iwzhv8iAbkBBC5BCtjjbJX2mU2Qcc6",
  "key2": "29mHhKRsWiin4m2Yg4bhAvaGqjeaUYbxRMkmatoTChGSu25jdKcB4EJtNGC66AAoFwpLznqnX7WifmdJzUarnhmo",
  "key3": "3cYdc74jAX2tNZ7KZy6MzyfT45g5TG3NpGs9qGoEGnHgwwy23dHpbKrhTdY3iKp2Er2cCN7aEBogBkV8Aq2eR13x",
  "key4": "WRTBNQNDnFu75GfqUTFAb6n2aSazRWHya7vrUiEgmTHF3Ue1MSgjEU4yAk9NdWrd2vesbHKA53sUUyDrcCYLm27",
  "key5": "yDN1yCTzRF7iDCuFFF1jPZAA1VT5aGGjFs3fBxwszb5RTqJcV9EG81aZmr3VwyaFfnHcBu8YWxao1bmfehXr8KK",
  "key6": "mYqXReSGLfaVqniGFwSTwwLc393JkpC4RyErEUJdM7N1CwLDPM5dvyTVVkuZP87ri9JSfY115CHg7YKLP2oxiEL",
  "key7": "2dKvwbpaJQ75gZU7vZ7xhkJZbGevdkPLhNkSy8M5rzycbGGz8WGTPwyqHhafUjdkL1q9jnZBbU31jw65bWjJBGoe",
  "key8": "2JPZogTxivzdEiegZu4aKq3bkPLoAgicfx5SnkECCR4EZ4K8yBvVxMjF6miaTVviK1gydxPD9deyKH98hpd5jysP",
  "key9": "3n3rTPxNg6UvJNgAJg3PbgyfquJeBRT6wyQGhCsm6tydwtYSekRUERso1zz3PrXYEkjnMtT6j2KyEtUdFUmNfziJ",
  "key10": "4WgiiuM3VivKt4ngb1QuH8gBd966j2bzj5LBMQnxtH9Yan9cQy1DXKJc1LuBM8zSuW4HfKzrhuy8cAgg5UPNdxtK",
  "key11": "4ZcVG69yCApZsUruFozLaRpjoDQTcKQiwgSus11yFRxLmk463mH6Ah8wpwX3snvihikgGReoY5EsRswyUo1Mfxjo",
  "key12": "4AEnQjgTK1Jiuzf5zQQKfoWyyYaXckuQdimnEPqFgD1vkKkEQuF9uoJ3u8t4zdgjRuojQJpErDLKB7zBXMSYZdip",
  "key13": "3apvnYCjesNB2e1NQn9Y4QFxutij6m7Wbbid58Pxap8E864Qiwq3AvDVVJ6Q7sifFNdhKNdgmNU8tJeiViM864s7",
  "key14": "3DE7cczPz9nn3NSSQwoTStRLCjknzwUqxmqSsmzBT6Z7cBbve9Q5gZpDt8i6ZcThQseiPYt85rdafJPhwn99oBe9",
  "key15": "EAuCZygWCAu8zhAnqGBafSwej31YZChp7aoLMjCzmWKXq9JkTE3BPzicURS4Q7qisxkwkY25M6NZYsSWsGUirLb",
  "key16": "mdV7uFJnsrTH2C9c1beVrjJ1gcunGeq7db8BXhA2gi9jsuy5KmJGCGXP5J93ZtD7kvjH1bDivnkHirLNzd7pCVX",
  "key17": "acT2ZN8Ba6mtQ9cj6MH6gvkEgTLYv1Ad6LLbX2FpcL8RfFLVGAANZdQzRjt4sUT4v45mUy9hKnetKemgpJLSBja",
  "key18": "2rzwKQFuvCmU4Er9i9ZfHGLKoshCzEbe4faUhFdaEXNqTebmVgGpag6rMnyqSjzNdz5BwkkdRHPSSR2iPwvC2zqx",
  "key19": "4XVDZ1URwwbYhryKuKnedEp25fYqrwEnBSJtUkFsiz8pDv4U1T9shjhMAvfm5jDtv14X1UHD3hFaED8mopEWRXHn",
  "key20": "62idHszNvSD4TxUtTBdKfry9Qp46LHbQA2vLbVc9aXzbfd9NTvwCrHQFj3bhFGsuzcayHJQvVtsWS4WvFdcVUhE2",
  "key21": "5J12KwK5ZQuc632QKaMb85UQYb7BEykGsPzoTKi6LYHyF36odMbaMPfS5b2ofz99rnqhgorgJEzT9nao3oDe5G21",
  "key22": "5gNHPTWDhpCkiq2J5KkSt1SGc4Uwag3TyoBQ6iJe9c5XR85cg1jt9tD3S5kg3Xwb44GvRAJNgp96LzFhW548q7ye",
  "key23": "4cwGFGjqEDGwntRCyUhZvHUYnwtqMuurk8sX8bmzFeuUWF3tHEkaLzcmyuViSx6V6P7iVHAtxMSmjEE5f3ymThxR",
  "key24": "3TC1Sp91eZVt9sMLXwwARtX3ACbbY9ZwfAQTrTcYNc1Y65u7874it2n76mW4i1XmQv336ydrG1zd7rmitRHJRLm8",
  "key25": "ZKQtSzpqQD8whiZpNxtUs6EjsSkJdqnjdLvWaesRK9EPzfSs4qfHn7j8XcsQZVzQzZSUydJjMoAQaJ1riS69w9V",
  "key26": "EmNgkgjZPTr7tSRh1RxqyEV8FxsCUB7MfTcdFozzhMJH4bHyPMDPzMeBtM38YG3JrxH5TSKbCKviKnSvy817zat",
  "key27": "2z6i6uphCxWUqNc4Ef3rYNtrrKK4ZNpFVi8Xgvba5Pye93QRxkk66wWxSSPVfgaeF4oXF3TBoHHWxCnQyMcD2TzX",
  "key28": "3kkYqzX8v2GrktYki5qT16P3Ly5yUWCUMNMjjCkVFytSqJrBfJ2MUtZWYwQZo13qPB1Xr3v9cWgkudbADe83w4Uq",
  "key29": "5u6CAWxS4NvdL45RGK4KS7aCdxtJEPbLBpHLJf2xwEzjLz3j8CNGm6YfPNNBc2ioBYgbce9gjE94BmjuYuzAUqh7",
  "key30": "3aGFvZCDsjzasxRPhht7UQT7KMLnR7rR2fbErhwBwX5YWmopexHRuyM7kYUpG2bNTgxCX4FeQTtAXvraXo5bVeUJ",
  "key31": "2qNWAyNUrprSXPvGRmAY3dhgXLHv42wAACjd7xhoUUXz5fURj3YFSraJg2GoTZeoCNNxcAC7wPdFgLcWpqWuRu7L",
  "key32": "5Vjk15RXybX1uM2sWa62QjK57oqYaMefV91wf9AhSSr27EEEirP697dHPJZ31Yg9WptRUEqSjJcdnBUXpp4SoEWk",
  "key33": "5Hr3oBpFvJQbng4DK4bL2UAu4K35A3Q3wb1m7qpVJtPu996KxqH1aziHeukvsGozf9cEL6q3S9U8H2ziVrS9azeD",
  "key34": "4yXahQZNFMZmM9R433gSuVQP5cXyR3f4yAPAJWUKuP2eXKL1yUnsdindeF69PZhm4fcjKCM4teA6p2zkYWPR2Lvv",
  "key35": "rC6vzxt7af2DBNwKsBnjxyfugGYmiGsk4YQyVcuTAXUFutvXgJMsD6k7oPS8arHJpGQnbfpfH6MyL9hzhsbkn8V",
  "key36": "dbJu4GRm2w85DBKXJ3GXxcMCoDCz18NX7m5ZCsqTxPUapGoHxUE6Ds4MgRv67dFMvU7Ye69owcXRMYWq1hs7oAB",
  "key37": "3A4cUTpgFVonKpePULiSgiJ8pFhuXZZKZpWS2rB8cTumXi6oNAFM9zK2xUUx94SNSzBGs9Ggkq7iC37sFE7gFTeF",
  "key38": "4pZkH5AWbpcKjxwNWkiqCct32TX1ezrZ4Jz2BFADTZDvJ7UrPoCp4ut56XVjoxkYenheAuvmMcdF5BXr6TSbH7na",
  "key39": "5MXY5ohxige1neGGiUKKQ6533MhM8uX8ZuAH9VTqXdqvVoU5jBu87ZWuUx6cn8dM5ebvCLNMq8WVi2u8VbrWGMV4",
  "key40": "nA2mc2LewwcPz3iBhiJf6ebTDHpDtRK7xxQresipethKQMccSjKmUbx3hxyiqsdS8TFngt8UBF2s4GSw8NzpxGE",
  "key41": "5GAGs1VDw6VHpVNR6nVnCM6fZLfUuh3tQWrjzcukewUA5Fx3rRWLTGHxsSBBytJDymWHxQR9XNof9tjMKCNTTUvT"
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
