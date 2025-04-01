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
    "5GPacn8SxzrbY8xU3K6Hvq95Xd6ivofTYL7f8RqLSfvyJBWRxGJZQNu3WhExbN17V567BZQq2MSsrUGkRBHraFuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "heTriQTzSZxZXqMAKV5Fby3nLvXrD9jeFosb9Djg8qsdZ8phPueNucftPuVisYR7ZhK6udpgrdvWkAeeKcjjGWw",
  "key1": "TKuHFecSFPppEBVAPobKByfJug2EW2fVKGYiWkpqYkmJPkedbYmEbW3Ps8EsfkKrbL6bbYYvE99qyQ4tTeWjyeC",
  "key2": "4iZKA6KDAaVovEtumTkgvAyYjd46xCUqMXjXPD7Dv6eaKr4bfxSrJQ1CixETbxC61bXM1GQtrKzGSf9Br5tL7ZCi",
  "key3": "426om5hsTfsS78dNcwm4T8W2kE41cKR6xaoik36RRXLa913MquYKfFfJh2wE7Kzsb7eEVUij8bG9M5zoKyHaEUtB",
  "key4": "4XKfqWt22tQ2TSkEFM8tk43i7rNrnmiJFZpxu7CDAEeEckjh9GZEb7z4kRh7CQUDXf6p14wi7EivXmUdkMRB41mq",
  "key5": "ihZ98xbqVoFBoZAzMuGReqvfdw4KiUoyY87v2T1h1KymJjfMrAiymE5Qcpz7Lqk1ATgJ6PHif7ZZEHQotGyBY3q",
  "key6": "5MxU8xMPhCqW1akAfn4D7QUa4iGdPsyX9YTHb9YbAawsnETdiRDt5kGYCaMVxipr5ZYy17g8dWjWR3EVVb9jLhKF",
  "key7": "5FybBz9gLdEbFTyzYCDEMUvsRuPCax8qbxDhUGYmRashWPN3eJXE6LEZ7arGr1PPqEpiMjgC8ex1QJMkw31tTfDZ",
  "key8": "41btvegvqLvpG1GWdFWyLqs5M798VRAsmVUZAeAUjmGCrWw2gKJx9e7hkrj61CRyd7pfRbg7UiXxumawmKQprCKb",
  "key9": "5wRQhj4ErAcPhUfBdwUJA5fAnAJx9UbUhChqyTtZVttgRDnHEjs9g45qpBPXm9hE2i5bP1tTPejRk1pgCEUjfSEk",
  "key10": "c4muoKSjG1GvciVpt5w4knhuox7TiqYZ5QjLdfjhfM398obxLXc2MKKX3xVLwzxaHAqvSFV2drXrWU7DWQh3ega",
  "key11": "4YXCN1mWU8jc8sntNcp8PCSBUEqJ24TmLZToDBL2o4wmykKGXbHwtCHbq29WPPa4B9upHqw5GDGmnXaeCK4vrKK6",
  "key12": "4Ci4mnFtfTJkQNkZnxDXWXfEoshNUfSM5YSPWsVate3XupDpXTjkZnvr2DbMmbiPj8SFtcWT6ogMxWcTYP6g7EFx",
  "key13": "3LSf6AonaWXZSxshW7sYh9W2oEC3A2aEJkfYhXR4uFSuNtCXmaMYtRt3YrthAURpYp9Se6Gu6ZjbpznJA4q5Kcuu",
  "key14": "5V3mrBJ7xRB5wkSM5AkVCChQnCBzMjWf23pDk3m6x7xc8QgBb7RRnktjdPX8M9ZtSfFrDaCxhXxGD2XvtaoUChbq",
  "key15": "4QeFzmgYn2dJ3Dm68cChUCkmT1FvSi5C4DQCERyqwYdNyKuDnQnAVUjuwWdafUjekf1izd2ccTmoKoA6Rajik5ZR",
  "key16": "5LM3wLarZrVeTLUAnMfWuiFoAE9G93gyfQkShdkwrD54SSDHJi6QPRDdWMrXtRaDnsw2vnNF36rSnmSja4qNNVEj",
  "key17": "45JHZnqfN8YiXgNYdqVEegNz6rvwWSqsr5R9tLC6mE4i1mqmS8TnqfifEbpLR8xCwckccFn9NBEq8hmcLd53WMEn",
  "key18": "5vopVGgQ9yipWRnijweyxUbQuqn3ivKSUGeL14phukpYxiC5CvcVT4dWDpHV2mTFQqKpqWEseVuhisCtURipr4B7",
  "key19": "6aJbnBZuamGvd3sEYswBJXXEDij85a5hhj6635bo77zfqD8vRMmXh4urLE64Yamf3CKmARBfEAfpb27wvhHpmKG",
  "key20": "Q4UoJ8R36c7guHVkXm87N22rTfExq5kFWcvypNDLwgyMMCuxcq6e5M1ZUPfPfDkCWqBmwENn2g5ugAwoVAQFiBW",
  "key21": "d4bi5Wmbvx8HnKqNxYcxGp5HD3L73nArUFfV2VpevQic92rN34AgeQHUXSGrdMTUvhJv8QA5o7PkdCJHdtMbimW",
  "key22": "4YiPrkJNuTFEPu3JcLjLBwLdEHcapdmwujaCbvUz51azs3Gg7456GewcnBxNPuPC78PhPCK9eQQvaFCuiDdaSAsX",
  "key23": "5HEGMEeoGrxnf7wvY9dEdpbS2QtYzFZf4DakKbgao8RaLEVxAPrLfDVWu4AqY9J2PR7cdW9NE7m4yFTooLJ7peFW",
  "key24": "65eWocj3iAWKhczsWix5C1qpmG3sVMx7mTbQD5ZBRsXA7DTxUs7iv3HS61aiDcFNDur5g6J9a62vYaFgut69TvTj",
  "key25": "48kG8ZPVqtjVei6LhLme5dJojq1jzMtYBdSuR5CRgjDBZ5yZXoQvpfK4m87EbybJeokjz34cvLMFP1ppAGSaUndy",
  "key26": "33KqWeAZhZvVaTPuPZPuejn1cdu6to5YaQnJJZgvgUyLvb25TjEnCQFTD59xyWCdR37LBi3PGg1TRereYtgD4voz",
  "key27": "uP4GmcS2CxQdi3m9EJRnrVtQoyMYoPLQxp3pbj8P59i7aBypr7VuSCMN2GRDDr4trZg1gWVjkPyctDLraSfCvvr",
  "key28": "VCxfFxjEH1Nfx8tS3jTvHfmUaRiJFkFiS3GSx8JYH4jTRtiZYMevbo2dvVGDnYwAPYJw9RRM3BvmjoJY6gdBSwR",
  "key29": "s2VjPT3C2C9362vB92Dc48mzLEkBULP7jWDQdtfQp6n7HCf7GCpwRpkcEoAGriK6956Z9GG5bSaV7gvffCADrw9",
  "key30": "49m22Ko1sUAk2GpY7VmmDSHGezi9gdGHetFHGvxLqH6E1KTLHKoe6VXc38taxiXaRuS2GcBHcA6q2doTyzUNQPm6",
  "key31": "5wsro9iNzNMpGCq1sZbTAvfaDFEwv5TK7w59ZacBxfXQ3kniZyvQv6CAhCCunPb57f2dsrxSv7qMUNSaXQ4GLzpq",
  "key32": "39A6jGrpckxda6trbNscB1FuUC7tmKKJb1cYGpTibMar69dxdgb7v9CxJaaq9wZUmpfuhcmdkdBDyeR3VGi5F1tB",
  "key33": "V4nfoDmrwm99kEQN3qahri2EFGhJrXvzCBaARBbP1gGckhpMTfM5VxkWhTKzJ6NqpxvMqpCjzCnNzQoquUe7Vr5",
  "key34": "3gUft3ev2aeR7Ecdr2tFYdCFsBGcxSqZSVibWVA35LF4YoyqQ9yxkwRUMeXth9mTCUsm7LAonXQhcpZSB1mG3mm2",
  "key35": "3txsTmZd2FRJsDoo85j6RKfsHBtKrTqtsaJ5Ht87qLdfbSmqqc57Jw7G8QQUEhjcUHRG4GsCR3MYsDXNQFPd9fER",
  "key36": "612PQV92U52Sb3ovNKj2KzkoBJqJag8sE85MdBxAwHRyVseDXm9Ef1bPNU8hYH6p9RJfHgddcwUVTYC7PWeEpEe4",
  "key37": "453oxUQma6S8xNmvP5eAQD3J1hgFRNsRNAX5Vq5ocjzfrhXdtFADczJSZ22TZ9Jc3YPH9AVCqed6UwBgEMFNuGbh",
  "key38": "erASUFQCQDNZfEU1xrEY793PSm7GRfdjcRYr6bh6i68P2bDxPdCDazn2EbbiNFfTTxWzzDjDM6rML4Q7APyUgdi",
  "key39": "58pa6wfSV5YyQ2eLQ7FaQFXpD5TGffA638ArdoeEEqtHufUVe24nLb4nBeyHLw5o4KFtrYQBrJQHLszAkKhTW4K8"
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
