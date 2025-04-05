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
    "3bkz2Ar5LM39Lc6ApvrDMU8dohj4Z4n89UU6BWazKTG6f55eHgY9jc1yoFswdCBZVDFQQssfVNHeSfEdK6qy3Fdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HGh4LoCQAf2Zv2xWGzQm2bhAqLkRPAkhymZzN3UdPaWE72PUYXp9SjbBrAokKaBHUtCVShNbTaR6sMAdcmQMgTc",
  "key1": "sqWyUAZuRYjNvdj4ecaGhMb5hxj1GBdgy95DCN1ThFj8kfZ7t5YpYWRkYNYHa9cGsGa9QwVNAuyPT2A3RZtDgy3",
  "key2": "59XwyYNHPgrVM3dUh4GNJ6wazyNDQDoq5JN9kZq3NBLW1q7Boo47p5QrKe8qo1EXbb7HtVbQK8YgpufHPbD2Q3EY",
  "key3": "5ogPwzm24tYmRC5n5SiY4o1NHaknLANLfejdaADcexHPs3i6W1E2AGZbR34itw5tKWRhV134uphKYM4A1WeEKFRg",
  "key4": "4wrscxo22P7qqLPfCbRFmM3YgjAkA9Z4kc4sCYxxuCmir6LVQxBTyWapvpph4hzgcUgDZQbjWzw8kxDdrcQkTU4G",
  "key5": "4MgkbhaAf8LSgYz1GjaPAJ7N9TQdeRY4JuAsyLLPWSSjU4wmJL9DwfcVeXcPPa9WcLhDpUWSsGFAAgTeCZ9fLjXV",
  "key6": "5cG6EDTyJMP6XNPRHQngJYEKoMH3VYMRQfzSb3noWq1V1r3NifmzAS5L6SQBLDcWJnE3AMcoEho7bX7HDf2akfmM",
  "key7": "3ZDDFVA5rreXCRQL1EX9WGzmb6fC2YKXcfuqcqBm5ZXJsYCHsnP3pHMn4puSgcYYdXkaFo91Hr1Eo6iMsuCtECxA",
  "key8": "vsWyzkyt6DjrNPPf7asioJNq5z87ArwHuWD5aR6sgTvV1fCyH3hSn7W3dvkuGqTkyGQRA54C2wQ6WZwpKHxs6DN",
  "key9": "23DahRFXjX9KsNYyhXsNZ28p7GbGda8vBYrSJvpyBSvEDX3z3AYCmvdGN8nQLiJck5x7xi1tmxYd1ywUExATh1rk",
  "key10": "2uvA1dMSBcQSTQUpXv1zmsQJWBy8ArpkHvMMdUnkYPwzoSN5dvxHXZATYz8Xx4dM9pjJfTGJL2tjztVwWxVh4Qbk",
  "key11": "4m32j8kkEFzCdRTEjSWisJdXXQvVtHCAVB7WsJZYdb5ykNqnDXxuBfCN37atnhv2nY3eScA4f8PKPp2KZMTRQbzk",
  "key12": "568B6CavJzpUfZfu66pTnESvo3XrzBqmSdV1mCzeyFYYDz1eFsUAQViTophb63RM1ZhwcJkrJuQRbvPhJMoMGNNm",
  "key13": "5EtAvvobUkfd8BMA58dAiXpCbvyHWwYpLrQW7jjRVtQiqQBq8C1dKc18dLyZz4weE4fViPoNcuipXM2dUT9uTb52",
  "key14": "2L5ZruXz7kuZkis3ixQpnqTbaKUdgbfY23DAvQcNmraGDjWdVk46imAmdztvDh5FfKaE2sH32DjvSGTnVgCnJJHR",
  "key15": "46PB8i7PgKAbK92B1jCWHPbJB48wUCcVcjqKtMJ9xEo6KqoRKmxq994wjhpYYAkud4HW38wzB8FCGhe3Fe4m8tSt",
  "key16": "3pvq6g9TbCzsYy1F8xW6yzC1JsRxzYMvELB5PAqzr3tDUxWT6KDsWPnBgbZBZu2WRn6JREZ3tc2weSKen8U8Gz5G",
  "key17": "kM3BcSzXzvJmUS68Dr6VSCyd9zNKEnTNQhUgKU9f9H1JAaxVE3ovdnPZRLRhBc3KNnEkGjWQ2Y6J3mySfy9cZgo",
  "key18": "5zypdkEHKAvmuBh5QkcgTya2Xf4R4EDm6ruz3Xz7hfpfEt7FMQWEKp8m6hNjP68TBQmES45YfVYLPTn8KD5pzYuP",
  "key19": "3zzkjKBAciaBFfPTMnB21UG4Yk8Tq5Jh57dB9Tr1gcEoM78zPtfz3qqwrFiVdUUXBh91NfHHTXSNFGusFZcEwV55",
  "key20": "366hEidqe9wAF46e9DJPMgKcHMN5WJzcUZWBHgi442QE5dr2qCKrk57Gq3rygAzZQ8Fk9xHNxBsezWcUQ5yvvxzC",
  "key21": "5sPJmD2GES4vUNXtZNQa4CyVyesVbEF3Kz7Db6wCXwCuGJbziE6PSiLyEvmqXr9k7L7QpnRHME74SsvmaCpNiZSF",
  "key22": "4hgg1pd5F47bBLELyv8fTDBtztU2CFb2WGsCYoL4A5nabrBnQT1rovBUWvMghDmsS2yAzEntEF2Cox2vHEKhwQQa",
  "key23": "3fHJp6tUn7LYcotyzjAnJdVpoGaGQk3ibrdu7yhBhrseUHUJFUs2LGChL9Aaio8y1yVM2irgjarqc2ebSZqgQ3n4",
  "key24": "uoBzUVw3nuSS5axxmWzsyGL64CoubFNfMAvTFgWjrTsBTQRuy996SGS5rnyBZ4TAd8txR4peDmqduY1TqrPMBjY",
  "key25": "43D2r8HdKts1P1tdXKnRopzMfnjWCnpxMjKz9EUdRsHjcHaGS2ezsqBLeBL68EWpH45M9Lob9t8Z43SdBxtwysji",
  "key26": "3gGmRPQTsPScsCxpYH2huoSxsV3JdCt8AyJZw85FhTUVMgbiuMkToVHBAcFmw9JxhvQznW4FErgU5up9GYjLxGC2",
  "key27": "HobdDmMsshQSFHDFXQtJTkBYFAf4cWyuLeZSdUTpZgJVMo6k9ns8tpBdrSiRHktmtEN14MzNeqWnSYgdrVzPhch",
  "key28": "4iq4jgyFunSu7Ro8jpFTgtPBUqceAGq8qRs8Fz32mgaVyfXRxcoSxB9RHne2D1Hm5Yh35koT73WCoJKGeYhsziSP",
  "key29": "37PbU6p1bpSzDasXdJK9MMPeor1ns8QtnqZP2DW1jSFT7AziV4EAYCGkJbFayHKN6n39WqGSYNf3Pe15tm2MY9AZ",
  "key30": "3WwUnEDWZ6hFDzrGHxM2ZybNaJ2LyFU8xZ19A2w8n7nNAXPsfCn2U7vimURBuN4YHmWTxq2mESkNUESE9kXdUKDS",
  "key31": "5oA9SxE5HFPVuc5k6fC6U4W2hdPYhu12xAt51mdYhJdhYtHznc9ewrz1v3r9Vw4nCwUbLK1SjFd2MHHbZDZvvk8x",
  "key32": "3CnzX4vfbNxNT9pCDhNczZQY9UeUjcU35xRXP2hANBr5yH9BUaYGne2RYj2DZBYebjot3NxHA24StcwdEd7cJEdi",
  "key33": "3FhodgQg9GkmLipA7LyvRJBP1q1VVBJqPeoSSnhhT7ZrmTMei6U1DiiA7m5j2czmw7c12yQdffW3RS1sDVRUjCcx",
  "key34": "5MBVeomteZMcviqMEbbEUB9XaDiLtyXaBPvWD8DowQR9DPiExJB5yvfNq5A4R7qQu159x7aD6q2cGQL7NkgwWUh8",
  "key35": "3tLLemaKrApEydFHvXLxCtc3RVWY96Q7doVPQFkciJbZg8YyZMDRtnehybhCpgvJLc4dH2T9GwKUK6hQDQCv148D",
  "key36": "43Sy7nHqWUMkvrFtikDAntKJGAKESFs5euLMy4F4WPuaSjrCi3qfyrMQT2YtZEpCQasYigsewueKK1gk85A93HEx",
  "key37": "2c7aAmouHbvaWNYfNCWxnHHAhNUyZ1tApZUruPiwUX61nJd5G4sTcnpWRNKfzT53ueYVwofqHcDy6iDFEonWRpGY",
  "key38": "5Un7C8sEnhFJgM8BFULVctcjLCk9a8bRFaW8zMxYi9XiqMmW6MfR1NDDAtAZCtM5MoibLWWeva6yjLVr4673qWvY",
  "key39": "5zc2jLf1TtfoQWRSXcs1qBXBVT6rSCtXVwtyc2jWzeiGKhDmGgqcUwiYRsWwBMQ7o9GXhH5nLRgoaLj2VKPWeAoc",
  "key40": "3Nmvx7zKstKV8MgEE2YXXJATfBd4tEC8daimRfQbknMaynbyjPFpPob7gKuT4S5Gw5Gh6vbBAfbAUDix213rwiL6",
  "key41": "5TM58XY3DFMw5RJ1TnH2ExyTNJxdDi8KFEwG4nXxzr92UqcW2ekzWL5cTvmE9F4LbPRuobApkniPrWtULfoE6huy",
  "key42": "WfJQy2Zg5fSiZDAVLqGXkTcwhRgAPBEEusTr8RaBitqWi62cgySq21xXNrEeDrzmEyRLPwg59EoHYUc2jxCt625"
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
