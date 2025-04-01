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
    "33UUUUZPBETLL1E1UiccvvVucnU4dyEjKzSHTS1AP5FNYghWH9C1kLiQg3FWYQzegPgpeJ5aBrhLrrhoEVw7psxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aWEUb8rczyzbWtEv53NoUzqGYypqsJniVsfteB8iGx7feEvyeBoGzefGtcBB1pDQcx8yHdw6nvGnSqaBMYteotM",
  "key1": "5qpSLQMRjeT9WxV6A1iEKyEED38pYVtcXHf88GnEgsEKUhcAUVXPf8eExrw58Zo3QUqZBMR2s9m3H28wk61t4Ddj",
  "key2": "4EKKGqSKFRs6juXG7fsWCp7Y4pSJiRxDt3n7qG22j33gKG2aBESNnQ5R2rUM71VpTfec2PQmJSQPxHeyFgEfJoGt",
  "key3": "3w8AhoTbLDJVcGbQ3WSsfz63repjo2Yf4L7VktQ6szJxjhAHwdguY2V7CEtzz3fe2RsX5kdNn1Bbsucx547SaJQm",
  "key4": "3pvuK5PujXdRFJ9DLjAM5h3yyE1i2yFZiDQu1GkeBQaQvaRFki8k5KfwzXy8UGiZNCWFLDg1JjJZm4mx4utAzYVf",
  "key5": "rANxPeF88YzrHw7h675fAnk9pmF53Wg3vdHFEe22oNhUqba6aetGoY56akiktt2tQkwJt8wSYNp71HzW81eNXRv",
  "key6": "4PqpbtL1hGfAC7knmvyH9cf9o3u8RvTte5acSY9zu9Dgr2mQpgiF5QmERXgiDjiA1czbLmLeRUKn9pCQCrnt4VMa",
  "key7": "4g9XXGekEYk1priS38yUi7Q2mT7P1x2SQJLsJ62AQmtcfm7WoWTQr9mv7s7qjPVUaNsbQzqXavtkxTwTHSBU172e",
  "key8": "2kxpVRoh6mKjEJeKzPSKSyEkbuVyWccp1JvUxoYE52nfe3T8PmCGEBtAbZaWKJuYGkmJPKNqeyDEGmKd2op8Kp1K",
  "key9": "RMm1AtbXvSwFvZBaRDk1FcviXcWAQyzEiaa2GZRa74UWQ9pZTVXvJDXyF8PkBtTnqYDp7HPuAXE2bYXDrr6zFgv",
  "key10": "2ndXqWJmRW9B4JZBukq8CqU77eUQHRE7upULWXZfuxUDqtb3BerpXfGoQt9dPM13462g5jFtWkm8w9iyvgQoNVUR",
  "key11": "4cdh5EJUkvPhrepY39xVpnA7rf9jDMM1hjDErMKSDiwRiPbezjtSqfEEsbX4Qw8RSVoZdNqwHW8A1hmDEqVKVF3F",
  "key12": "5wBjfxxS8WsETSVjxyydtv9X3477VSywf4dxMTi1YbF9pdERLxW7mh9s566EEZBs6yPYReVREBCpqfaSw1ZobUeA",
  "key13": "5AohwRrBZ2BEuKs8QFe7Pnp1Yk3dPuy4U1D4VW5gXBipMvNhZpECuPCaVzX7G1Yxcqsg9QYySMDhhZwFDU6W6hnT",
  "key14": "4Q6xbbb6HEmQCL2oUjXqj8GXWvdsW32qmdZjUuHoEokvhYtBHwo2uVi98vNtgCnCGfUQmqdL82RL1wezhdaFoD9K",
  "key15": "3UGdnKbxStyUx5WZUFBcuuhRYpjMiUkjEgww3jK6CNPze3y7YAMX7FF3QQXoaSkd7qw4Mx2kPCiSRjdg44xNtbP2",
  "key16": "5ypDMjLirBjrZmSxtvcXxfrEBvdVYGY8BucuMbKgHkmRQKcvEEYidDo2oBA9SGBdVPnzvkiLauquRhmebCUYTAnS",
  "key17": "2ynrizkgJqTBfKd7Sk64u6zvjgg6V52Ua1xbTqrQwUkc959n2J6BTaGtXCoY8KbEHAgp3F1aMTFkLvt7Nnii5PWQ",
  "key18": "4RhfSpAy8D4ykJZ4F6CnzGNPNHUMEiLokicJn4SFdBKZ9sgD9Tsu6MmoWgGF74gyc63MrGEyyxE7YHQ66EixdhnW",
  "key19": "2hYgonssdSESmWXQ6hLGcvv4n6Hd1A1QS1KLuPc3RzXC2wGoQQLZeZaJ9yTHpwvQFMZBDvfRdwEL4zKwvxqSsmHi",
  "key20": "2MTeCTsuRSSKHSKS85Jg5wCRpDJL8y4FMsdi4FvHqQWiCe5qkWrXtXuAPt2zTWSNZ9bUxHKTwvTiBgFzTMStKF3v",
  "key21": "5rxSdmjnJvsx22zwhgL1HokdjdM9cxMH84NPAPFjoWcr774HtkNV85W15cdQj9q9KCX5Uyiask77CK84CfGgxTEd",
  "key22": "552sVZ221PLrDQJszZGfLXg4qq7SYzEZmVhPfyrkayrUftpJhjoHYC2r42xsMQR3iXGRuGhdvMMy2iQFwWEjPUpx",
  "key23": "4cozepYkREbPZJdk9BB2sJtX9Key5aRQiZWwdnkHm8EHfMG3XNneysEgGUzC8TBDfXkBhRaPYXfTCFP3DPh4d8SZ",
  "key24": "29cyxEKYkyb8mLCw8h8uR4kUXefDs2Zb1N8tEcEkyuaCSkPGF2VSyeCbHp2TQ19vPoo5pnS8LNcwzWnZRRPWZM55",
  "key25": "2BN7yRk2hiavYRtjRr9bUX1ZH1HRWbY6mddvNjzATDNN5oBmxDajtMYTKFXMHKwtW1pwdCt6WYgDoZZrd1VjnkCS",
  "key26": "41orFM6FsZCBUo3bEJhfHFvNsxEREsnJGhBDrwsvFyo7gEuvg6hVbLTmX8SMG4cVD5nhRYBms7fitQLLawbfVvgu",
  "key27": "iEwZewrUWhbBZZzsiaQyfgYoGfv39xZZTKa3H7KBpByS1qHh4fGT2juFoyZFDhy5emC5aDzxb7HM57fYCZqzP1w",
  "key28": "XKJJXUSgeZ8w82TWr2UeG6MuUfZAMCUozkxJy4egTiX1e9udnqsiY7bV1nvi1SKab8axB7heML5qHxaaG3M8Jof",
  "key29": "5k7oWykhXegUmWVbgr4ZzUZWxDK5nibZZspw9Voz5dBRadtBXsL8YnX625mENjZMKFA8AHeUPFoUHgtJceXMXyhK",
  "key30": "2inyDpEPZCMcDp7K1fsXRfY8bAePbkiRXJHbV8DdG45gpdRVLa2GkF2xQMHL6PoCCS1z5jayyagDb4Qyjsy9rMFG",
  "key31": "5ZoiYKbetGR6gM6wqPkjW1sYUfpoF5to8TPEEQN6D4vKcMuBoBTag6DnBUd9mwF9UGotJ4pCu9BBXYt34fQSQnuK",
  "key32": "KNuiUwSEnw4NR5FZo6rZBfoLKrj8R6k1gvQunc7D9P1wgjUyaXY5djyzP5QE7RrxhKyMuAh4vKvAX82fPrAaU9Z",
  "key33": "MeKWPh1qG3JByb6yc8Lrf7BcTQu3nQtdgSe4TWe3er6HPKrQK2ctU1NYvYQiesnGTTFzq87XxgHMqM4eTwhAFRm",
  "key34": "2Zw8X6hvvCFwbWwD5ccdxSBJ3jWPPTTF2MSuiaESLefSrvUpJbDESfVBacNTnWkAHGxMVGwQrgkivjYsYAZ6jpF8",
  "key35": "3DYWqMgJX6bYQd6L2tNiaZL95PTT2W8sTFKZGVB4fXsCKtEpRrar5bC6sN1FAUZaQd9pH3adKBdgXVas2DbEA8MC",
  "key36": "5VLUA63Jrf1J1qtbLxZ8aQXMNKMSxNC71sbyTUwiDq37opS5F9megqgx7uY2rMK4RyF7Kbu88bRC9GH3k2ZEp8dq",
  "key37": "2t4Xh7qWhCMMr7XEB7sJM8d9vE3cWGamNUi7Nna9jC1aB7Sa4xBcbMKrTJjMTTizQyWfCZBXKiQvfrVwQUvmwUDr",
  "key38": "3vQoa91b5btzFpxS816TC3Bkb3CCNbojCJPS2Bimgja3WFmkX9w3N7nbWwJFPgNQJKcfSrJDLF9aY5Zy8SJbQwqM",
  "key39": "2BbrghgMJabAyC5mZeG4mpd982mVEm248SqmfS432ZhhWi3dmwwnpSuyXpxMFpGYmt5ojeEzHqa9mDLrZ9vUa4JT",
  "key40": "s4sE1aKciUfmCSD6wFRGnUmkzWqxjBvZWj7qXWLFKR9Du7WkkXfoNXXYkMLBWaJpD2ApuD7VM42swtvVqbQ91p7",
  "key41": "7MGijWhz5HVwVkMBFWT6qd9BtSmZEWR4pyan7fqiYAsmWLM7pCR9FRgjB6TGwmp4neVBKFKhLiqLCvWXc5Cy6Zm",
  "key42": "2G4GygbbzKnXowdnJ8ZHGHSwNE4H6bYJiEt5ZBj8WuBDVu71RRsWA42Ra2P6hZrBJ4Fo5m1s9KC1qjhtDtH2rtaQ",
  "key43": "2om4ugTgareTp88enS3YyENtta1tT5y8ZomEUnWBNnvTRceQHvpsifvfhHE47D5ZS1hF61Jot9zosUsJBN5TEpb4",
  "key44": "83xEp9LQAttEqGGjDQUtjGB4A6BqPs757mL5oKLHHYoL8tDBsBfRLHnnKhnWUMbaXmgwEpqS6pMcVv37fvy66BH",
  "key45": "3LzpcV8XUtYvgcbYky9BYom9BtdhPi8JbyfDcwafFZkeXGgtXeotgUgnVh4FRJS9Vcjf4LgNf4JMxUp8p1WYnEWz",
  "key46": "61yLCZSeGCu8taTkwKuw48hNByzYPir5BQEUifQJidg9sMLQQn5rVo6f1Xjs9r6ikuGtbCxtsVvcxFVt4oFE5nf8",
  "key47": "4LTp7CSqj1sekiNPU8qvSsrF3Ng79G6JiTixZhayrdKNWy9LQb98R69XpWbYVgbgsLx4erH4opo62eRNX86rNKnA"
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
