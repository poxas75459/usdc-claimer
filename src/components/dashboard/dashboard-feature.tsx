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
    "5ezyZZS8ntSxWTFubecnUq7yPRQuVS69rRRwARrroaRDK8opTQMU1a7NZNmZeFCUqSbmqbwNNCRMh6KrLQyfkMo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dLMVKwWDc8hFM9rBGxFPbS95bVXjSuDshj9MARP6Rze6X8HtmsFkfNv9mLc2Gqc1aCiA4eFHSdPeNdVbotejGoT",
  "key1": "2XLDGQpxoDkBt3tqe5GBikRej1Kd96tXjJw16SnUrEnWGeZTTRpda3EvequVA3DCADeydb4bDD6E7QTmXvuoiQFS",
  "key2": "5ovpvrR6CDco2MiztUXGBFeYQi4bvTvHusCiKPjh9qtwHuLemyZejgDJf1CtHYHWfrsaxVWmThjVniZFQQotyb8T",
  "key3": "4NyRugpoLz7DwziC4TS9QLHW3fq7tn2MiSEdTnvkmrB19FvYgFCw87aCGdEJHei9PCbXfwWrP6JqmGFpS8sYixvS",
  "key4": "4gAREmaALYPsnCxpDyxKThNWofYaSV9LYooetMdYgHMQzh3x7TjVYhFwsb7WPw2XoSZyUyU7rbtscXCbK3MQF6Jj",
  "key5": "2DrNCf7uFPQxcfB6MBoqVtjrGrn6jrM4VGyuPfmiBBpGuBwrk5HdUdDQvU5RWC91hySd9E1GcAEHmmXxkQiZB5Ea",
  "key6": "3ynh1y4QWuQKejJNo5Teppm83gH7evcMKhKTGFqAMDfjqBVAmYXuLPYxmR3cHUs4WaLJRnu8PFYgsJpHp4R5wkFi",
  "key7": "5joKgWMfMTiCHFRiMdF2EvmRxEjwDfe4gv7HK2J5n4Ams1nVNCk5rgTnanQTGxRmPiiyHBbqASSLJev5b7Sk7hx",
  "key8": "25RJxaYk3gPhJLxppeKdhLsyfrBRvhSSn47rcSQ6WiddhJ5KoxzPWyPRpqoozf31PDKh2wRo5C1BST6zu9B56Wni",
  "key9": "5fmDWkAdHejHMhEuHUKgsbdvfohdem94mQc2gauiE8W9VZrvNvttrj8Q9gkhm2F9H2RnZCmnjCaNuDzTp76u7LiW",
  "key10": "25AszEvdCCMUJDADSZ5r1SStSwfdbHokaGESj212i9gFxH2iQ8T2hnqKHSnfZY4s5VS91cjVV8dzHCjyeoY8RxZN",
  "key11": "2LhrCnKmhYBrP4t6z64J1b6f55GzertvDAfqYYk1nhzaB1rdDqsuCCqVin9gGXJHdgp8jh9At2waaBmqVk5ShLXW",
  "key12": "5NofNvKSB24j3SUwVPuzkru3NNmxgTxR2xWSsdrZfbdZ1gbyLDbSeC8cHFgQt8WDRwDZGQkjq1UwwySgmp2KzraP",
  "key13": "5vPRCZwufwKjSh6D1hY9WFo2Q2ybKCFenbKVCB27puDJAQUTrBdzcNXr28QWJG2rRJgcQSFXcLzj9K6YaNpofsB3",
  "key14": "42KNUQseueTXUpEuUkX7cLexV1y7varRFxvk9yAXk5ihaFm9dSHN2o6mnpTwkKhkQHhzdMNJjmYVCN347rpR7qNq",
  "key15": "5ahUm71WVhU7csoZ1SM7VYaHRE1qFTk1DkNk3r1B2CGPKsHjfYqVMRhp1hH3krnZBPYWHv2xYcwcCD2SZEdtkuGB",
  "key16": "3jGTDq8hfkNygGGTb9UyQCK74qNbkhmqutzfYEN4VxirPtQNdJsEasj7ybGV5kEegVC7L4diytvWyKZDsNAwRtEd",
  "key17": "wdNRaUtRw8iBHbwyZd5PnUTT3u98cGgkzxZLqSThygPwHtcXKtFrbm7XLZME1j5ZVK3v4GWfndYBm9cDCManuqN",
  "key18": "496ddrqb9CSjtx5VrwsGaECQBXzYYhTuypyjjb2w7UoRQoAso1dqSYX6VQ314meBc1gVYMSqpAHQj8cWLzKW3P5i",
  "key19": "3hdmhibvfzcRJzz5CzdtJsANYDdBmQQ9sGv58EBJAgZAUPNCGhzv8y2vgHziTqjcihFAasFKFTXEAnWHHW12RrpU",
  "key20": "5XTLDqp1uwjvQnPATqW13Tq4Dcar36bRnUCr5pVdmzsHpA45LTz8i1GjgUWT7o1Vui95DXR73qZ5x3czWED34ZTL",
  "key21": "vEkBNZDGRHBkNfkW1DdQFL6nJzBc4Evfb8619H3h9eyAtTVyKZeUzSiRRZtHAvSyaKx95y7ZWNkmUxwb6VrgxSf",
  "key22": "5GSBiE2ympXTDGHToWHLBbDbWP69THwZvKdFV8g2f7s2GxinhnrH4aNZX8drStFJddr2rT2wKuuJLqgxEudbMwov",
  "key23": "3mKnopz2eaLbuUkAGY7BFm1VcM4AoEPh8mzRg9nGtvxQQ33si1ZahcPbDq3LfmpUPVXFMSvXFqEtbH5VFzMKpysN",
  "key24": "61ogFDv8MRNjkP5YA4oeEyfzpdiaekqeyotmgM5ugE5RXtaf8zoKfXEH8MUoxMwoLSBXFttLYt7b7Co6LSP4M5df",
  "key25": "5exLfqiYJbrBztZPrQcNE4bxoJnArBbCLejHKcPB1zRYF23MHqsG22jZG4cxDLWVnb1B9YwEFKH253C9VcnZn3MV",
  "key26": "3tHEBEPs2eeYq4PMi6rLFiZxjhtimijTUe5GGu7ybEYKpYLNarn9pnVKqt9VKWkLe7n6E4yBT3QVi7tHS9i6oYA3",
  "key27": "5m1S7yH9d3XbvieHDwH75RqYmm7NhAdhCHoZQ4XLpMEVzhKc3jCTiXfuWGyMNZtWgTA2x4RtmWpPJ339b9bU35T6",
  "key28": "W9wnAiHYcFgfqbYHBgdBKYvxWszigAZ1xm2itF7p459VRcanmxNGEUR21QY8xBr4A4Hs85HHoyKBoCXCgVsfJEZ",
  "key29": "2VoUVwdZnh3Rtu2U4GJbUze2QbbbFARneukBsiz8DfYvoG9T3yUSiMcrKBQcraViQSpRCrdogF8b7uDkQtwKTnPz",
  "key30": "5mRWD3dDkLvHidAsABVacvhwAyWk6yW9a5Et4wRzsPy37xiPtsV1KViw4fAsB6te9JpWx2q4P3dyGevE3z2jtrMB",
  "key31": "35G25ostdzKZDcS1WR8K8s97niVFvpXkEyAUwymxqiXxEsBdUGT7R7XGKpCysC9MhLF79wd2pSouhbLq6Txs4bCu",
  "key32": "2FcwjzjuAZHF4CeSC21YHYrn1GwCtHEGwMeK2k8v7zhuoVYN4ZPB7TQCTJfnXsPRpVU2TxxSe1zG4uNkHRg6b3FY",
  "key33": "mMp4N3huVMczVhaRhZD2qjvvug1eKF81Z6p8qu2V8hvCFQevGWT6DYU3vvUuSV7xv9yFhs15BdzkNttXXhpRwmQ",
  "key34": "669iDQ7qvLXMXPs8a9L7GDgv4zNGNsjvmH2fG1tXW3Q71YufiUYbEgvARJ6UgQUFb3qr2pDVVSiDJQLtoMVWUfB9",
  "key35": "43ypSwNbqsvVpdk49BuFLqRKAuqyLvbbLUUkRuVrMtW57xqovdj8pshtMvqfqYoDb1Ju8XbjbZYX22hadxZCo2C1",
  "key36": "41YwCkm4SNLGcDZojkBsrKkDZ6dyATm5oCojSpSXjU55hnkGHeq8oM75y1Xkyqyu38dQAoF1Qraw8MNubgrerqZ",
  "key37": "3ShqqVqeYKfvVyzBQydczZMucLeg8ncERfZ68pZpDBbo7csz6seqYBMvUsuZ9Y8fg8aWKWunD2KeuFEpQGcSuhYg",
  "key38": "2CtN4spmXQ3zrXpRS7Xnt9rU522uHbokres7CxsPwcksqMXNEYsfXffDN67ncwWJVrsXS5SvwFS2e66URxMu97od",
  "key39": "3Ep711aD9QDMfWNY4vKkKh3FR76MG2uBQdeazcZjdmzXpK6wmAooR17ZWBuJFZvCJLTgwaPMNEfGpSxMhwW4fjKU",
  "key40": "4mRmkHUkRC5gEi43RJ3Q2mgMHonvHcxnnH8YWXe5U5dKJb5PGjsupc81FxsaJgqpvxjFiYGEGsrU1abmihJPrdzJ",
  "key41": "38rMSdABdSKsyCifDLNSW1swSLLHB5xTFHvvJAMu3LWeaWo31aXTErUBDQ7Xcd3TrjPxnumE5hpnBhoQ9SnnSevN"
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
