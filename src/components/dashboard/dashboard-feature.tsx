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
    "38HiyAivvfZ8D4ZGM31qVSWxf8kRL12dQV3nKTuxZLR7KBPzkEzoVsoNZGFY1oPGQkUCSZPXS4EWeorbvJSp4daG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QDWqkejP8GVX4ttsnJt9446F6kKKnqcJypcV11H1CpYqBWgum9qQCZ9FxUmLStv8VKd5CKACJde5nTEbZtW2MAt",
  "key1": "5RuWve7mLxHm3gM4ssLJRXyhaxZ8FzLtpXsp7Y6Hmk25Y5dVHKmBrWRhUidcaQ3uGzGeq92tJTS9aKfRSBgz53VM",
  "key2": "3tEaxErnoUjsCeMJM2tC9PURc6cQDaAvc6eMU4tQX4wf6qcZgScnFA9DmoqChXCgfpsb5ETA4Vcu7qMvUEWihWaX",
  "key3": "3r7KbdA46AyB4kUzes7r6FXyQ2sxAL9hwKjZp1sCs1SC9fNT18tUqbbu9ypmmwGC6nWhQ6831dt5dCwkzmz8X1mt",
  "key4": "5kK4i4A3KWDgBt21Q53hboyoN8yq16k8UjN89M3vyJjjYNTNsfJRXF43NPvUep4SbuAsJwk4DXzF2Nc5iMw6HVhh",
  "key5": "4BHVu4GM5o3p33766ts68dE8Pydbf1dR9MvBD4aN7uY1G2zwGGb63pTMkcTtW5qqwheYYECUB3g4DnVdrBSmhw3y",
  "key6": "3xsGqtX7PiBZJUoqJohs7VWbujSX193zQL8cDrNduaNpVFpfXvj3995UWbRSZezcfnTehRY16EaCN5ysafSaoMLV",
  "key7": "XB5444r6ihDzUgQoeMmhSRGe21S9G7WufLLLMDFdMsPibdTtj7WGdosUT3esdwkRdBK1H5nHE3kuh3RNf2ukc1b",
  "key8": "3R4r6fVUghUzymhqExAbqzBAa1pkmRP2kAYB3ZetddhNbTovZvVBgXgKYqW8tgyx6vZpdRVMgt1pehuAp1kDRbr4",
  "key9": "4ahf6mkc5cRCFjAqtu7n8oPU4pAm4R3gc9vspVTUQf7F3gxNM86mEGMHvj2qeBW4y3fZKqa8dPddmp2ieHgvGjLi",
  "key10": "2AXXY4qDZN7zy8uNeoiX19VT1PWru4ov47D1ZUbzKQi52YHYJYBohVkrjvbLnJLJPSzS5XhrXRXHtSVgZ76xSWWr",
  "key11": "3vzoMgHLh6m5KpishCtXUhfBfKNtvWQg2STbhm3hhqjqmTJBTzPPf1XGF4aN2p3iBzt5eb5s6zBLFNXUNrbk79V5",
  "key12": "4WwuJkiKzzdwejKcJihwddVeQcLmz4Li7tpHsMftv69ugtavC2oJppenxdHr2XiWaM4T81RxDF2Q5reDvLSt9Hp5",
  "key13": "3C5QxFqaDMzF4PBUcZGtU9mRSUpyWorrX9V2x57u7pJCwoYebkpPrAaSyfGkfggQSnWnxTpkVm83mFm1y5Qyw5Ya",
  "key14": "QFPzjMuwWAvX5iWfwSsC4eGmZur8gHC2M1tLjVBy8w2SH6prTCDn1sPbUPMfac8aTT67ao5CAXYBzg5ai5PMkx1",
  "key15": "4U7fF16ZUwqH45e3BRmTtjTqYBAB45fdv1pM9XJ42ixFsttYWQG3uL9JP9eGo58NXacmSVwZcPKUKTvFcn78iaaC",
  "key16": "XnuKdC89SbQ92Pfu1ujPrj24AcNJ4LCXViLBzzgvyM7cPCkmghpARaqQGGi8ZoA2pawHSPXzmYgSTLWkaiCkGsg",
  "key17": "Z6ui6yeR66x22nLJP3jKXePQn9WLYax13CaaExJmzcTw8cQmYvrgPCvVsRt1Vo7UWdN8mVuUiBAJPfiHgWX4vW7",
  "key18": "F1rFZcWi453uiDQ7fUNZci1pbGBWySFSJsqWWtFGrLALMLai4XvZLoruA7YBZhRA5PjCXCYms6PUDd7Lxeu7H5T",
  "key19": "5PwPXit7y9q7nNSBDW5uh9Gb5jARhGVRmGSvRY2hPprzQsLAkHVqfJY7Uf1Tx1a2f3jknPvVj65iFGngpMegyFFC",
  "key20": "5fydMAXVqDsn7n3XvdHPKFpLvrMTCUfUaGRcnKGyP7DQcwx4pUheg7zF2XMHm13ZEHCXkEStdKc3UXkmFLmdtWZU",
  "key21": "1rKg4nxG94eUsm3R9KjqHfDKYwmvyXnpAH7nUdSqgFkNVxmDqWScEKVYEvg4bWc3hMExcddMr6r1PSxr5VDLNXS",
  "key22": "bT1cup1uJU5cp2Z5Th5oEXL95XsPzeMAQC5xD8P83QzJTkNVWzStPxwzAf7K1qw9BHTug1KUnr4tgMjxvxyVD3o",
  "key23": "62JVuNa1qwV4hbV3as4g3vdTWHM3PQGEPnFSZpx1EKviLotTaKpjipsWa3qwvSqCLmh1Sfo6VM2eeMKyv2upxYC5",
  "key24": "7mYby6aQryJgKrd6xSM2K947ZLFigCD42LptpX43TPeZbRSwVMRhVeVgRwdvRtua4XVuLzgCKJBnbp9xsnALMHT",
  "key25": "3QVJwwAEFL2RuYd7RVKxsKy5asJh9JZFRgU8c9J4o7azZhMqKTWwyxXnyDnxroHf4WLcU9soWMUzaDuFFPm3K3Tr",
  "key26": "3CJRLjqy2rXTUdcWQUgWxfMWFhjKSJANbHVuUMUaDChmGYcoWGC62x4QupSPNtvg3mnjSm3V3Y7WJQ2GD7a1SwY",
  "key27": "2LmjVg7v4w23eP4czNv9DcmjV7NK37XsbZKe934SCCv6aR8wka6AP44gEQktCtiRoQKXPWbph1bramLGuoViTzvE",
  "key28": "429gu6GP8fdnppHqP5SiPSru6Bf7Ba7zRVn4WyGKeEQ9g3oeanMvkCE1ei7RTA6jNFJEA3UhVcJ7FP5fkTRrSLrZ",
  "key29": "5KGrkKkdWBEg7LNxoetSdqR9SEseXrbZiMMSfG3WwseJfZfzgrSdoPQwwY6vViXTvwkA6CYQa7ePGhW36RPR6atH",
  "key30": "eVduZNqvYR66zXAjgg7uD4EVswNDKemHFuoScnttTatBWzKJNbjemUCh68x2F4d8dvr2neux1J3bQuhoQatJw41",
  "key31": "4kj3cToSrWLzk6at6KrKPhVgf2FWLoAE65QirtXAKRrXcag5HvMAaxtDHXexKKbDg8gug2rLD74JUA6ibf4paX3E",
  "key32": "43osdGj564iBhNqk26mMjvujaCKinnEMiNxTaAVa9URKfx9Am8GH8mKdu2kDGQegs9iZ65JzFrfdYDFpWhdYqMhn",
  "key33": "6GquCye65WQSiaMNyopei44KK9urz7As43VwqTcwJ1ne1GS6B1TRhYCB9B1mQsNY4mXPdEsVCq9rmrTM2uTC9yT",
  "key34": "4q3SfYvToQYeh4tPCvuGKCYWa4VhXZLmbFcsG8oayX8W8avmCSKDh2ePKg9GbzUa38hFoSt5qvbHdxpXuRBnRYys",
  "key35": "2VrMPboRm71bw96HEiPWAYPZWbz5XgLHeLSuougVBHUo68CiCftKub2iQYy2qrGTgtRJh9m6zNx2oGRWRb7A17CW",
  "key36": "31V1gm6DQrcUwvz6rYSgzmMCPFkMEFBRoJrXzeSoikPQ174t7W2RcrgLAomNpSZG7NCUpFyd16yBjJeu25W226v5",
  "key37": "2rbW6zTVPisfwmg4JxjpEEeKZdE3KbTuSRP9oBBNhWAAPd8gyWDvdUHZeZ85TNS7skwBYnDgjrQTKuKhNngfNXfn",
  "key38": "4BPzKPtqn9f94Vj4nnMadfqJZguHkxwPerLiMC9DyNwbQYBpD29whHd5FHr429sgzNaTM252vZkoSkzUFeGEAm4k",
  "key39": "5sNUZizQ99a4ZvBojjeMaVuCDCPo9d8TEsZHssF2vGmLnGxX25h5K11F9GsjqvHnLuWiJdBawDqRxCZbKjJ4ioEt",
  "key40": "2DTGS2ddD7wNAbhvRQrAcoxYC4vEyozSLViMbUricehnzHR5JrMWsKyEEE3abFcjhj1wKDV8E3CD26ENL4Her3Me",
  "key41": "RY6G8w8L3pCeMo6jEi5PsbAfBVwA21r9BZDJWiZy7EQTeYvqBgmSHpUBmsQgzXjVy8TbpP5o5Bm2V9bJLdUpi5m",
  "key42": "KaWHNMSi4MUFgZqchg8gewZavLw3n25jyKPoeZ5FTXFB68bCrzftVREivgqfYp3sCw1GmoVjiwnL6y7Qm63Kn9L",
  "key43": "3qLJkof1dFWD2SZCXxRyXNsJht53BUzXe8nVcDpuV37hLJt8wRNX69zCMqtN4KLa7UjmcVwk79C3bNd9P3HoCATE",
  "key44": "hyEvytxV2V3jDdth3qrvRfGLhG9JnESpgEdkSHoJ4xBNhLKnxjn7GZdp9GLgtjX3Z2cmSUDxTMFMSZFc7yLGFjk",
  "key45": "2RtwitVpJSHbKRxuuM3HoUX6nn1TMsRDZNH4oFpvFcNWejXjuPA7deASzJbfToqdBvBcCrWkwF96pFB9KZGLdKJF",
  "key46": "28HGiRoYgBSNDsmf2FPQazECwZwFbZoFdxzM918jmvP6D1TJVMAadMFqAACqnXcpKTQRxQtANyyPFZEp8CSqp9Ec",
  "key47": "aPavBGF2WpmxfqN1HBDdGgRuvir1msaU853CFUUXfNPvGqdfAJd3eQ4kq4c7wP2XfYS1fjt3TwupoT4VxGBvxmR",
  "key48": "35okCfWQyfFfh75dEnP3bVybsPecfoMJWUFhzuNtuGozzVi7MecodVa4bxsrncgmjgdeWVLUcrMf2TGRaHCG4yKF",
  "key49": "5sQKrukeqSy5svkEbrTmfgYvmWhnD4SAeQfWpB4xfU7iYsjeqnZRjx8G5q6YgRXLqNk8F3SuKYhM6bBWVwiPnLUR"
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
