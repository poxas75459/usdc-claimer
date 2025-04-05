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
    "HFTrkjDXtyE35mSB5jCDR2hhUqpXjffByFcyZRoey8JnkVyuTta1biirpDRkwPtYGyjB6dsASopqNkdBHVoyDiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CwoV1vaPMZPsvTUkGo4mdryyYGWr1tsgFewcbbNgmr37VHwnKHqePoKo8JTmGJ6SdZ81KJ5ZcBCdyo7HbPzB4EE",
  "key1": "5BqtrJyzCsNzHXUPB5vWXU3eKYG6ZyCNPKVs8SDiBz51SMHunSa8Gg5ibmXyuYXMgms1SJ2e2PKA6Cz4JUAzHy86",
  "key2": "4iNhyKew8DLTomKETwAcV7LhrYPspwPGbheVfSGX2mzQP2A15gUa9jAUugRLBdNbRDjA2AJmnfsiwbsFNCMkw1i6",
  "key3": "6gKW9VtXGutmNoVzR5nWCW8wbnGYW1ceSPrEV4LfUfWS8NU7Zdf8wv8C8TUbF16bHbZU8QqsnPtkN7Nb6ZEptfu",
  "key4": "22YhBLDryyVe5eSxPeQ9WPceZ6DvpgS2vTM5DGHYdSyvHF8yzmdmf7qwRxJCFufCrc1pHrkmJmUCLp4b3R9qzQuB",
  "key5": "5XFShuKcbFPAfBd2bFVQvUtzbBAhctbcxn3meB4yyDzvHWtgZ88FYybKYV8xGvkfmWAQRiUEB5YJc1NWrMBD2ZzS",
  "key6": "5qwNDdKpQvbRN6trVob8pN1Mhm4cSnnddX5thWq2pnhwPCQDTSGaundJcjjyYRXj7bscCjpkB9Y6vZKKJrB3VBYx",
  "key7": "3eE2aCEznSKAVKefnonka5kSwUVCNGde5TB1yY1DyvFvo6v9YFQ5R5WBstLYNn5S6nAMGxCiW8kj68L2MJLy7gp2",
  "key8": "2wHagq2Q7fJcsgpHZSEDv1tZV7EMLc8XjZwxQsR11TNgoDziuCvSvwTqz9DpXoaq344Ctx7k5bHRRd6Zh34YWkcm",
  "key9": "3dpGSiaoM9DrnykKCgfiNoNXMepjREbdDFGToGM3W1gjdLN1Ei9AaLuStMYctu3xkepSYxjPZcD7cA2x8XQX7sZg",
  "key10": "3pdTvaKah2qJmQYD5gjMvqCiEtdgkSPjj1GGDmhB8AdxDic7f7KGn2SVjSr3sbNBew5jjwPwJEaoSxevRiJm2b98",
  "key11": "5XxX4sVW4QAunFkqNuwoVtm7DsVqu7bfbh1FQiw9Tmq3wWxi4K15jCcjLULCE5iHzvU1hrU3yE7cwRvC1BzS8o3e",
  "key12": "46kcMpXQM9vgYxk1W8PhFqgS24DpSffWDv531hSafVFj66kvMH54YXnpvgNS5UDuJAfYdVDgZPqJz6nRyFyMu7pu",
  "key13": "36Vacmm4adLnJYrSBpQVuRYuRWzDqpiYDYdqG9vutjkKVSaJ63sUqSHYk9cHdundJxSzaQbQWouJBCr8fhqCo1cH",
  "key14": "2374XJdaufBwQfJs9vxhExst7bCnkLHdfThgBFukQygDpCGBLumwVZaSyF9fD3WbGK6MADfu3UAAiBPhGewDcsXh",
  "key15": "4emsK9rJQEdE1Fs92vqKFrEtcfH5DKnKUGqV8NvSUgzQ31Jc6bao1KCL2rHx2JBtDrF5LkCZEWiRvcQi3VaDRw4H",
  "key16": "3Btv4iskMcHKSM2MkDJjjLUruiPvhqztD79PfGyWBqhbDbUcxWx9LcaVPio6B7wCaUQX6yJ4LmtdA3MGiC6CgiUf",
  "key17": "3s5DtKEdyN47ehmoriu5Fk5oFA6LoEGRxfTqJ1gbgayjGiUai5HaKcx4xsZg2Yv9rbDy4qyeuJzh4mA8Bkb1kT2M",
  "key18": "3hGRwVCL2xMxp8Jgi86Jr71cB9JSsvmPmWiexSQ98X95MZoW5AwfnApEvE49DbEyDTPxLZHMmcro2WY1415VWzSQ",
  "key19": "66ZqbqbdkLYLHFpjtjXvPezwvSYR5hAwvbKNqsQQNvJxk9M9R7YoU1UfWtKViXA3B1TQfBmWsH8tCFLr9GzNAwPB",
  "key20": "4JoSrnUccGVKax8Y1YUfHe7Hrdu2Q8SJvLvTZ5ryiwDwgUXdPt7NTuq8TMg6vW9noDVNbageP6y3mRj8xwzmpJrK",
  "key21": "jYC9NGYQsDo99xB5ewYddYhKuojv3T7w2jKH4PSjPGidPbWacQ2HYDKeMsrsQSUdkf21sFhChP2MqDsTovFDy4f",
  "key22": "3YePTzq1AM13CRTK9HviiaTe36NWwBaV7F1rFYtYChusSgvymvGUK3z8LzN73LKFTdnNovkfReRvALe3RkcngEqk",
  "key23": "3Dvi1hMyFEU7J9GRNEYWWiHH28BpWuFDofYcvY3qiY5jberLXxAubkd5z8tcRFB66ar2E74kaiAvHAeUcdtpMdY8",
  "key24": "5YZeooCqaLCz5Ygy8LmS7r3xNat4vs7wUTu4tNQkisqauUZUTobBTQiLMvmceHyen6opQsqSUFdatz8mXsZk6GsR",
  "key25": "2B67pqN4TsTf34HtoYJmXWH75ZkRAF4abbWMLHwo2Sypbj9rdbiethtVHrdoeRqUcWXv3kWNpR1Mu8Q5oz9ETqpP",
  "key26": "2j2B6d6ofeMeNiLp7GruekYkSJPYAK1Qy92UKaGiEhMtyMDtxczPhoZ86VHHU4rMRp9WjZPkTPWUFPhzABR1TfyA",
  "key27": "5H8nx2RhPQLrJZfMGEubcxek79KQCVLZaKA4wJzDh3uVoUaZYDrHCAb3rMf8VfcDCHD5vHs8PhMAQnhrqVmzZTjw",
  "key28": "3NvsVPt9W9NYy1Chf7QBC6nt35u6h72Jvtvknzi8C1yzJKhSkEgRzNU72CuDX5YDprgiVbvhF9Z6hZUdLgVhuhco",
  "key29": "5hbvw56ssYFwGxAZMFvT7zeiBSSjzhNg1DuA6LsinG21UR6uXTKeLQMGTNTaWZu6gZHr7szosXT24ti21pPcTKaA",
  "key30": "4xigAE2X4VdEbU1FwxSrvY22FV4Fpwy1Q9jPCQarU6fK5sCTYkWQrmkJ9RgUxwSk6DnYZzZDKd9r2CDjWHjUxgF7",
  "key31": "5qmgHd8YxfrgGBLmhiJVcWS7Z3NPFEmeqvCa8Bv4JhQco85qYk3KQVRGGGLtMsvnT5sFc7zEuF4mp39aUPncDHyH",
  "key32": "2ApnFMvyrzRsSDhR2W3m3XPtBgTMxWWJUmCudp3VDe1fJ1CF3qJN9QCLAC5DSuU8d5bcXSwqxK7FXYgnX3k4ZZFH",
  "key33": "5uoX9qhn7fdJ5PH9SCLoyzWkmE669kjvihUoa3Dyd7fjsBTQX3eM8rXpr5ZQbsrdsTBh5ML1RtgSty9hzqeccGs6",
  "key34": "3P5ycsEM58vTsyKmadBnXMmoqwPaffveyLxr7DabRGjDHbNnbY13KJGimSXaGSF1YfxDfaxcM8ksWzR8xXMDfxbf",
  "key35": "4NSsp1KZvxVLCeficsF6efPwWwkfZzqtWVqGtA8Dbgmb6MhahmWRrM4E5Tzf1GQwAkwAGttoYi4yzE8Xh4VLVHVu",
  "key36": "5jQ27JgnbzZXqAnortB5Ddo3pF5QtCKr5cxKQdgCpGoNKwNMceCLRrW9QsAt3KVH9DDGJVxQG12EV5Myf42k4u5U",
  "key37": "5sJkCZCUdTtF3nMj7csTYHFSfFuTMoC1QqdMzWQcghkTsoNHfbk9iJfDnJJSqGgBZ2Qh2HVdcvYa3TfVDAkatMqd",
  "key38": "4c9wPCivsBztwx4MRNY4EQnL1MddfmpryqucRWH977mDJCWiPwotZmATJANiR8u3fThDd5gYHxEfiQaGW7eWfr2N",
  "key39": "2q9Byf1od8tkSUCEdtQEeGr8CJBfTEhUTiScrx1E9VBcuccvRcZLfRKqizr6SBkphxci7uW3W7PkCC4bWHqva3Dd",
  "key40": "4dW1bNv8n1ViBmpU1aRXHdLoNMJkry2pPfLYNP7ced37WZGBf8RfPPpNR4dVe2dKceJ47PctxQ7ttm1eVNDe2jVr",
  "key41": "5Fb5BQMndtxpke1qJUmcYfjvUZdFK1i1istsRFbNe3qrwyXv92z1ww1fQYdvD1tLZTEnjTooyS1oM7qRJ7Umi9it",
  "key42": "oGVkq7aQFvaiSekR9SwoZ13dLPybS8HFRabw6qiFcKUBpFp2guFEMY6cB6DjKYydnFswgMYTgZc1LUTSnpaRJRf",
  "key43": "3j9cQDW96N8gkUuQb5NXSKhFVEBcfTFC1avknLuv3AybPZwP6Jdhzh4cQRkLMkrLVCNkCDBVedJnrCkxjYivzdcG",
  "key44": "3UW8ezYizfUmgwdiPq1afomF5yAQKVf2acN5i6Bim9EYm2ZSLVjPx3cxJRmukUAdt3QaKvL31jb6g54GDHFCnoWo"
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
