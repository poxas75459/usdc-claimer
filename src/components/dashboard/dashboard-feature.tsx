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
    "vLp66kgZqhPXo9CVva41v5t7DtwcpB5ecyi166xyu4YYByZvjDNiyupbPcThXnCtfot6vojZV2MJX6PSZf39E8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mvUpUfbEPpA3CWjjVPUUFjYM2Q7EjLKZJo9xrDuVstgXjq1KdUACB847qnNPPB7YKVmXeztLcjKB3CsuW9PhfKP",
  "key1": "XXkBHe8euXrbkEW42FfChbyuChJpcp9odcfeibfkXdrZ8N9NZxe1viqxhatTVaA1LZxjmLqjj8D8M6NdevmD43S",
  "key2": "2EuvVhL56CemEaJM2jgJM1xQGWdzXzVCzy8XWfJYrqWdoQEtEYsyvw4Ex2T3xPg5d6MC91tqDUC2gEg6Kpz83AUC",
  "key3": "3RJBCb7Qnh3Xi59GcHZtBAhz2KXMTqC6oRFN3Sffa28TvqiRx7emWFMNcTKQQWCarvaQMTCapvQBnrWonkm5eP5T",
  "key4": "eg6jnT9T39FheFxMqhcqYR5R28nk6VY9UpsKJZkGfHe6poFVgfM9qpx3dFxPqM2NGv5zBLicgxXmdCeciEgsrbq",
  "key5": "2yEyfTLQy1aAAFLVnqGKcdqZGYdZdEAeduBGvmoWYamorMVETyN5xz9HyvKipgJLJxu7rJjErGeifMeVJhLSVhWs",
  "key6": "3LKbFvTXHs3jb31BbdwKm1kqf9ETtAiG9Rc8xJSWLGcYJJ7yWA8bK3qHn5XCJRmm9ys89rReXY9TynZfYD6RUWVK",
  "key7": "44n8hRBNnZVZo5XRjVzSGyL5bkL65FNMrgV6bH83gwSNeLiPodstrrKeLkEj7nNttyqP8qZQ8uzoNoxH6kZFmSw3",
  "key8": "2LANU1qaVhFfaTkUAh7EJeWfxQKZJ56CJ1s22GiW35o2a5TRdaWd1sC878XjPGGgKpU7JGo2UaTmNwu8chfrW7hH",
  "key9": "5QyJZkAYvykuKwLWfEdaUE2HHaLW2qLEo2FEzWsQLNifeNuRMqBFBts5oTRAQE7pXiGbdeLsvxGu3uSZq36vAQ9c",
  "key10": "M8ayd8nmZHvRCnWgEQq91vLMA38ZchEepLexubcxmYBexs8aoP5S9oHHxdmZLP1vvfLMuhG3i3exRn4gR5E4Z8T",
  "key11": "4xLySYqF11N6YEwainWsSr8Z9vaCpAx84CxV1d6pkBZuVApi784JJ6NxJSkDecFS9njkTXCUi2hmGc2RM4BKoiG9",
  "key12": "2DfmrjvXCto52UxST8UBuTgb75pLPRBFArp1PQp2Ja2isuZosMTJr2squBZtEP5wp5s8QWsMGi6V6vXvsmUiMWqt",
  "key13": "3GwD3W2kYfYcqdPT8QbHaaqXtwzuKn7iCaJ3HEzv2u6SZZHRHUGNM6y3x85yMqeiRNu3gc1j2W817D8X4ABFkV6n",
  "key14": "2CiHr2utSLdqMumkbfg1NbU1o4KgA8pXYD2pEFhLMfu68uLh3MwsjQ37Q4M8ZrzYj73GeMb259WRSK5znif7jCs3",
  "key15": "3xeqTmtYTV5Ajgu7zuRaWpWN6TUfrhmHsPSxDM7Gmno1Gr653ofThihfL15UEKcQq5Zo2dCia8skM96DwaV9fksU",
  "key16": "4avSzuURKHTLPoGFuPbmUgimTpqDK2fH9K5WgiPYVsphHMjQVNCEYZBx5agxax6uBhNMet4ZMt4cAKQcCKYgBaLy",
  "key17": "5T2wkotcLo3pkRYPtkNi6JE7JDzzsBUYLj2tEJvdh5D3SdHjDEHt18FnUJTNadbzhjJJhWGXxguscy633vnMBZ1B",
  "key18": "4yn412GkwyFzFSpu15798g6xYXg5FX8ZYBvyZPieRLT384G3qR17wjXXJLY45iqjpF5VijyQRCFpd89zBC2LkpyQ",
  "key19": "D5fqRjx6w9yfdz99MbmjdRN71wQXLPBzAPuvDUSuJjuXBCqL1CNyCzJzWVuWm459bFUc5kRqVJDSbrNvueYnCmB",
  "key20": "4LKKR27QxnAcwBehxw1s9heBSRqh8La8r8yLzYVRX2sDgmRzFymY8zJQLjQ6xUnixLuyA9vPi1DShLg5vi3uouNC",
  "key21": "rLKV3qqo8hKiEoGeMCxpe9W55vSyzqDE7iPFcakYLtjskYtBQqnvKMfWCrxbdWUHA6mpNtCiejRGyAmzM4oXQy6",
  "key22": "2ktNVxkRkyS7yxfxTT9KEH2aGY3kiai5wN14q1goYmZhw7er5aPYTfwKG4v2WxGuQgyywdmtXh5HYqVsC2ZVqv5v",
  "key23": "32QtMnHVtiuwLiuNULzp2YDbxbX2VgcNFDt7GCmLWkFR6GoUvC53bymNkhZHxYPJE2AhVZW1YbauS9rir9WbhPF7",
  "key24": "bYqdRCSR5RWUh65zarF26cZmjZndW291Q9pweWA93UJtnex76misJA1qo5pXodq6XxqLJAwfRcpdCTAd3hWLQi4",
  "key25": "hVfQm2q895yVVfwN7YAkNKPjVvP3UKLpM9rybL69frgxCczGCLWjaSDGUpfpzpHkc9VCKTYxgEJd4iSCTyWDy8r",
  "key26": "4RxjJD9ytGo1Pbsqs7Lxz4m4LELyjTtz5VNidZUwZBhzVKqMbVfeWWAwHBDTfAHC8X8PE5esHUtPNeH38zRGndMs",
  "key27": "2rAxrBT3jScoFcpy5fPAqM57WRDTx6fQZjM18UTezWxtMVvF8JFcFvh94WV6f74cNFUYH8Qv8h52kwupREmLVqZ1",
  "key28": "3tpGAKjdRpdoHXssr9bqxEvyeXMmXugedSHJgu59Mrwy5pM3VgxNbCEXTTJV9DMtWZpYVww7s4dWNr9MeX8L8phD",
  "key29": "iDgEMpHhtbWF1EJDVAqu8Qh6NLZA9Wb6SGETNF25ybtF5HEQaH5Ev1nvM5i3oqDbmW4Dnab4BJYiZs6vBZ3cAXr",
  "key30": "3bEJyB1NN3F5Fbzt67Gah24pqUK6rDDu2fviQyHgkBMLu21fApJSd5xNedMBtEUqB4ZygbGncrhzHvhHry5KBCdh",
  "key31": "QJHQVmT4SjxxVFRtu18h8ve2rqGaoSzfNdSU8CTvnZAADu2roBM8saV3sezzJSXyC63fEtsD2mq51gHAv8JsUM9",
  "key32": "jGkmyHR84DyDVs5WnJgrUWFCapRM3vHH76UEzYeH43YCt4Xvv24UopdZRxixd6VkzQEzcnqsodxbgGvCWZLxDLj",
  "key33": "31XjoBenMyFe66YGZ6Pabsa7ARXibCKaJd1igb8WXyLSAw89XVvDrJE18WgewRp4XHxBYFpJuTuFKoPRL3o84ESj",
  "key34": "5RjhD6t5XqiQVvoxS2kyWsiU84HUhAJBfWgNne8ve1Pnn9LLBfDJ2NcmWify4LYJLtv557qxmURhisp3QtY5agx8",
  "key35": "2jWsb6h96AwHzdnutTALos1JTdiASKrd6HEPN2PDN29pMeptj2u3XUqY6qqiZGnUeoE6B9n9eFmqtZU4hfyi78z2",
  "key36": "rE6MevcqfAJa8QSVKPHYhdey42j5XNWPXbmnU7GAvFZRA3qBbq19eHLoEgBtcqJk4ioP1craYo6AZoN3DUAgSDm",
  "key37": "3Up5p1LP7gPimGnULMARrdZAyUFJKM11tnUyN5WvfaTNAd1c1ffQndX524nMqJcVWTEqUz23afjTjgizzhT3wgvs",
  "key38": "2yeVH9XQereqFHSruuLYyKL1tZoAHWVHjhsFZig6765CfRH9AxYL9LujY34BRZrKaApVsRQf1A48jHTdMxjjCH4L",
  "key39": "Tpd5J5BDgZVncvRm54q3PehavtSCprqytNtsnQsqaiCHEnBF8aRmpcLgqvdWw26p9Lb9BKRkho8SuAiMmSBZTQj",
  "key40": "rdYXwQaW1pGVTTGwiKikDt3fPTcxuFWDdysbyH1NthkFEgwh5oADTXqSicm2q3zDw1hx8cFe3RBhCw5u9u9zjtw"
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
