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
    "2eC7E56WbPYvzjn53pZ4cTBKn4Zxz6mw2Tmc1sbLEFM5mwjjT8jakcD6w987a3b59vvvY4JroHiRu8FQZ2C8KN45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tg6AnAzLuAeuuzBpxRZMb2YA4A4wr8ZWYXFHcaTtfN8Fu3LYUaHC8TDznVWiBE2jUsaUHEVfsfgZJjk6vi23H5o",
  "key1": "2RMqUXNsizFUg8agr2SeWCbCMXpk61afXGapkLFr1chSZrZWoSEg4p2DamkjM1hKacqJHGAd7mr3kyVWQv92hz7r",
  "key2": "LE7kH4ovsS2GEKSJkeYkEMzKPH6nY7KXPs6EDaB4C8hrBRtJtmqSJarfK6foTvPzN7ZuRprYes8fxJa5RLMaked",
  "key3": "24FPJEKYCpUATcEaBXFb8mKy3XMd19nqq79WkowPD91oxz66jvtCfPBVcndgQAtHw8TXPrjeNdatNkpEZ3tVJngP",
  "key4": "2QnMNDC8cbYwybZ6v4PgpDYAAkovn28tKHxbFRYRy44P1c9zc59NeQHsTe5qyaTKB7u81WDRy6hV28VYFeW4CVsA",
  "key5": "42tWYwgV2JKbxdjGKC1m7L7mKyf4rDCp5mbZW4GehAY4foBpMzbcXqXWJP3mrZa9KCve9Ggfhx3m8QTLTG2p2T26",
  "key6": "5SCJqbSiCnbAJaW79HA9x8E5EMJ6oRbjrnR6icKEk7G1Yr56th2psy1hayVkPZtKCnVa48unUCo3EseFGgrLYtpU",
  "key7": "4HB5bBqGZzGVdpekzSXtnNs4dPCjghgHRnETVuFyAV8cTTr5E8beqsxbmXPYP94RmiuR27x74Fg9SMcpm6sT18f1",
  "key8": "45rz5qEkiTuoYJuNSoGmgzn15ntxn45T6bPgejq6YNaFBAKp88KGyrdox8VtHGBi3F98WJs5wQFXZG2sDXrQYZvg",
  "key9": "GAjq9ggpon9jwi78mYuG9fNhV2k6Lh4LCeQNjNtami5nnAebTNuusMyZMApEi5ZcW9L5RDdT7gbaHyTfFZxZuqS",
  "key10": "3QvkSnkfh4n1Lw5khndGPDYy8hBLMCzUpNmQAs6yPJqADWWwbq9gbvRtURB6kEiFSpXKfmubrFNXkWB9gaMsk9LR",
  "key11": "2yKxpsBsPedCGZh8yLdEPRgZ3KZo8zD2s8emrM2Q5qp69cB7X5JD4xCMNWarrap9wAkkV6iLMfWx14PsqJ6FbAzR",
  "key12": "5r34UABShzcHq4GY8v76Pr2GgU1Gsa3ixyNfuNt5ZP2SMhgLnuKiR4b6tCimGgPxWV7YLi8vZcKsLn6Genfk8g9Y",
  "key13": "5NRVVi6aMQwPhpx3HjS6Suki6Er8oL1p4APKZSVZtWs2g7yiVqztTi315NaYuT1ooV7AATh1NcYfMvvsAcwqN6rB",
  "key14": "66MMrTgXerxSJzs6Ji2mF2P8QML8MCUqeJPEjULoZZ2rpMA2fYSDCJcPog3bi843F3Zqq1T444gd9VdNSMCxtMjW",
  "key15": "34RfBkiuxEmNRm4QmaZ82KTNtUWBugaGAWDvKuSeV8ZPuSxSUs69B2De2V2mQhECzsj8Uziv7UWsnJhxhp3ToPT3",
  "key16": "3CjHdtUoVpdqiVBg3LjXBHmsMo7HWcEx3q4De233WDKUNNias1rCAKFH78qqqGUbkPE2yS67TPrpbFXgiqRbmFnn",
  "key17": "2RXcCSRrzK6ZGNossLwUtwKK1goddfdziS7eJiGm4CHs7T29ctqsVYbx7TG51ghodf5XPW9B5TXfpTewBSYwLrTL",
  "key18": "WMEHBzb4xSj44Z3JABA8KCaFNp17JKzJeKzXXdS5xAEPuLebYNeGebwiNb4HH2XmPGj5VNkrsQpgG7fqCDPPoxS",
  "key19": "367da9Z4b1yFosBZY7YYa1TUEfinudvHWhfS8TxubsRjkmhp3Tq7z6UhwCg3JNq5gHgSsqbca5nQUtD1K8UGjNDo",
  "key20": "3QCjtYxPxkKNnCa2MT6cDhNNGsKmPJwPdFwzXTWZWbNFtP1nyFxWYqKj8743Wa2ZeDbs85S445CyX1Y6vgE7cgMJ",
  "key21": "pTXEyqduPAUBooSKxtUSMsArsi2kiDpix8Mp6PwL4rrwRchKJopHDUB9fjfin75XNxKP14x4X842GiDeHuxQDQv",
  "key22": "5PgDCVut4MrTJkCG8FJAxRoUjfN3cXBTSENbhNZAmQexuShC6ShZ8utpscdv55t8ndRhse2J6p5z9YuTYpTw4eRj",
  "key23": "2CNSiFRphht5TyYVKgC5uWKntbucQxHvoCVZHTin1i9FPHd2uik2M6BnCZ6stAHDqPMXge8qWUTSefhDj6hSsLif",
  "key24": "y4htS16kKAQZH6Fa1pX2k2avZyWM3t8tW1AeNVKJStukuYVTCLcZGAPVcagy1D5EMvAGTKSPd4ijY1saGq3NJQG",
  "key25": "33wSYGaEoCNjFnyaVyWJB2hiCQdKx2HLdYR3QWEtomtb1pUCXivgT7dgiEupdA3YaTZQogdmd2YrsKFwZ9q9AoqY",
  "key26": "2YsTShU7tgViQjFQzpcStfA4L9q4eogwYJveBAFr2LcuK8VcgFobLWvVfzKD9Tu2wdmB54DEByS6v8Qd2wA5NqdN",
  "key27": "TfeFvd12jgACXNKy4LbtgbthZhaNhMDdSseEfW4zyNg6mYoPRikM6716jZkWU2gzsJr8pMHjh9uwBxurb2NQYAR",
  "key28": "32f8P4LgF4sekAXGAhP6uTdhXpwc9ExcCqgLZ4cVuHRBMsk15T9PYoqZ9pu8kwL9QCNx4fuHdo2pJQM5cvZ6VUgL",
  "key29": "58MvVoH3AbLeW5astfL3qSJAJVprJRr3zrq6TjCzjnvoxeE9FKjAy2ZJgKxQVZ2cyvMFZcoVdpAq3VuErcAMhsEj",
  "key30": "Si3ahMXKjWm15guN1Czhtg1T53tEh42qTQp7UdEWKafqh8ccLLGpS8XY7TE8JVfqiWfNixb7YSTby9rutsxqeqW",
  "key31": "52LBpKboXbDehcezNXXfyokNqenhFajA4ireh2X8XnAxH9JVAp6bgEWAK8wEgZof2U7dLrezTuWBUL8RDUfoSJtx",
  "key32": "3FSVG4BS62UW7F1HZRRLNP5Haj6casj1ZXEoLjCg7ZLwQk7x8YwArwaTA7bjW2wz44MEmW7thA9ufSY9V3wCJ8Z4",
  "key33": "HnzLdyFUUCjn8o8uxgHevmpBB2GumAbDCbrb1swxxorQuKGK5yNM62gt9M9bLde1uvu8qFxmzDDRaxK2vvmrdgs",
  "key34": "61KoM3kVSqQKHz5Vco6XA6SQUctXmNCmZLM36XkktPFbKBa5cnXGtrRNYthkx3VoHda92D7Xhb23hGBg7gtsva36",
  "key35": "5T4qiVARe2WZSZx9fFyDHAbfSeScSeYyDxzAa8rgGoguMB3FDuUdytgVYgDfF5L9AmoF99N1oXounnBg5Q7QDNLN",
  "key36": "4xoVZEhX4K4LaqRErr8wkuvhmUJXTkoPMjYga7GxFSjew69KsH293tzfErFV7SUBNRZGniZGgnqhsmptb3f7AQEK",
  "key37": "VVwhjgoPWccjQZ94Ty1qjmgq5GNFRZg8sCZefcPgFcdfytKhqP8RtcvfbzhQXEHZT9ufL6htcHdeGTgacKY2x7z",
  "key38": "2dU9butUcAhpFuNZVqNQZ4SFK7UEiAuzPqhzJKykte8765BsEvKMKzEoHcwBTq6xY7szFR4F4mcq29Lzhsi42VAJ",
  "key39": "sKpfNdqgVpQXYpcbGEZsfxjUTuak4xABagKVaXgyMKqjK1abudNUMaSowY7qTczeJKCpp9TgwRPLkxnCXuuZAid",
  "key40": "yJaPvqFRXjc2wgyCeHN3sTY4YMV3RTWqhTW6b5THfj5daVqSetEbGJN8k6W5CReRPRMPCChiuesxmhu4kCUARjZ",
  "key41": "eBoa5UVervTHfRsGZ77oJWV3SEVGmCX5e3mNros6eBZwYjD8rwuhdxqk9E8apbRnc1jHKp7KCHzS8iGRLDyyFby",
  "key42": "2oe7wdYviw7MwoDdbfZE5JvZi5SnqMC1PaWd4CuZUwnarvGy1USkfFt8AcFNu2Y9pezPd2MchhDQTh3sLbAGtEaU",
  "key43": "2dg8GNVD2PnqC8JrmcnBsAu1zMzwejAkWEeWdzu8Nvxoewy9vtrB1AJKYQ85tm7PvBkYUCbp2b1Tp5DAkYtBmUr9",
  "key44": "Lzqv2V9SXdAw526TZabpMySQENPJiK35FVkocfobvM9zQBxse2GwvLR6ExkDowRbZi2Bcqph2Twch8qZALUDG8P",
  "key45": "5NqmNY5UaxtdRCgku3Jvo4ysSSJkRsdeGh9JvaKQRMs83FymdeNt8by9ehWYmuZUsE3DBwQ17JuL5raJ8aadZ6Sv",
  "key46": "3SY71zqBB2LJ8xrfAPRLcEcrHWAqvLszZvfHxSJ8RfcKw5wQWoWcaDpCBYN3VYywBVTEVYETB2qcZgwXy2uZed6k",
  "key47": "4ZBRfbFVMaXP1N5MLfkKjRn8Bo1Jx7Q4DSad2DygQH8GDH9svCEtGJ4KBphJycp4HJ7mG6NbknR5NeDPxjxzegAW",
  "key48": "YG7Y3pe8H5f6LnPMqGuTEaUZ7bDoGBz1FiznFxUhMk516xZ4tYbQBZGBzkFCpFNtWDABNXi7SwAKaq8xTE8nRKu",
  "key49": "46pky8gmMNxCbr6hsyL8Y3Xgf2yMyrh7AkvFkp4WPoRKJ6fAn9iNHsc5dtU4RfkaX9coVa2s5HMm4bwPqQDd5GEV"
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
