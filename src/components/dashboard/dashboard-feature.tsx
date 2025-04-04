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
    "28p7JgsUZP2Q3hhPGxjqfgnJ3JFMHkXmYQfK6BkuSMgM4m2ZiyHAz2KqjkYu3gXhShxFvxzxXDKxbjXvGVLqW3Bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HD7bv49zkvHzgfrTVvCQPhsQAJvoc9pHvSfFd1mLLsNBNSwofLu5Ja8tcEFduLAKn3jHP4rQkjGCQpF4bzTRiT2",
  "key1": "2sqmBxd24AUsNpA9N1EeZesGDgoXx94TACrTe5xygTC4R6UF5cwCfaMM1Dy8saNMmpTZKdj2Ju85bY5P4KjofqDK",
  "key2": "uHCR2fz8MpFDdi3tqN3wnN72XNbzPmn8sdw3w4rNRussMZaEAXHX9SoaKWwqCiKCyJAN1TSnLjzNEL3FU1vaT8x",
  "key3": "dpfporiq76EgdBnfR4ZJbaw9Y1ZPrKodr7dzDvtF8pXF9S3oqijS9oc8niNXDEmBMJhkszdwGXDRtx6kwocqmZM",
  "key4": "3BefQPhQL7Mqjv75iJPVNRPn4TaTHnazbN1orL4mpgd8mk33RChLcgFD3c3xeRXVWZPaquuSbw1uLY8m985dPZUa",
  "key5": "58KJtjt4KN4g7ch1mYmer3ArYHEFx22YeKVLPTNrEhhtPgssVvCovrmpaoXc7K5CDNhqNpkV8aLQTD5wYeNkJdun",
  "key6": "2rQoa91LJsU7YHz523zhKPdzpefp29MBNnR5pruSZoqMUS7ykXStHxeRiUKsR4F9MiKXygAJY5F2FLHvdwggQEKN",
  "key7": "5dzFGtvEUiZPbpWYtMdRs21c3BtSsb23kc5YsLWeS329TySjaRCcghqzyakGarBShAG2CPXVKLA4S4W6FRh8KMZq",
  "key8": "4f5bZBaEbJsBVrnBaLuLprjLWeB1qXySykrEcyhDm16r5o6VqWn7Nt2fPAnPMjrziwjVEwi8qxCwh8B1XWCJAmvf",
  "key9": "4dujY7hNf1mWz32Yj1Uj2xsYAw5ztZiezS9d67dvH59uRBDJyRMmHbg4928RW8pzZQWbMk1ZGrrh55pxXjAXayMJ",
  "key10": "3V4x4xxug3XNhYi1pGrcbVrxoY11jn6zrkbVG2CE2Kahrw2uSby9xmst63fq7vxS8KR7Asu7oiHE2eFAD2Xf5b93",
  "key11": "2ypxuwxpex6aErAPhNTYdTpfvUG1EM8BB21PybVSfNX1Rin5ioarMU82LWk9VqJ3JckLJAfCHZtWi68TmCYpZ3aw",
  "key12": "2bkd2XiUuByEEnJJC64VPcYUVWAt6c5k2aqXpoL8DtKHmwyxAxTz8D523BR6uhH1cFh12egdwSNkFpNiowJpn5v3",
  "key13": "5uySd5SHXPay8MsoHqFkPithSUSnyXdK6YnR3Skebq5zrgHERZrDBdLXt84himKjPrpxBUsw44yqFy8LZYu6AArg",
  "key14": "3dU1Ly81cG6nE85qUpDmjG1mtEAUxgoNTxngiwqPCA6LWorLd4hCFBx4tKgXnPaXznQw4syzJwTrNxW78pwq4KX3",
  "key15": "m4ym8QMr6qJ9roGZ4mazj424TAadHvJSfxDSwYe9aMDUfyPWbz3TQgrMxQySdm2PvD43tUcW4CwmWfwonZvqmEZ",
  "key16": "XnmR26Cys7iRfum55HkfWdc8ZP3NfwnrED59CE3ieab18JknrTaRoDp2ibFqzsxs5bM1G8Yqi7YLDB9jyqwRfzR",
  "key17": "2UfGr2xzM9aXCz9fHf5eRE4uDJ79Bnxmtu4Ter7ERT6BSJGWYYuEWi4otpZtzBUBEtr77PrLW7fsTvQNW9MdXzt5",
  "key18": "4RQsb46QVfU8frnZQNmvneJi5rcSsag8rc3wD1gHH42kXDkFENf7X2uauVU4Ft2inHYHHceUsd26iugZorq4UuH3",
  "key19": "27Mt72jwZqjquKD8FVVb4K3AsM6NCVtQ3dW4B58F3GcaFKZanqcjsPXHPsf6UJZQFMfty9Kcvr1mzcWm1M41aksN",
  "key20": "3ESmxeWg4LD5wJNjhnrW6UajNA8BDEqG7VxVTt2WDnRjdAhK6DSVPxzBSxJgwYaqtvMcpxio6bMjP2KaXhjWAHgo",
  "key21": "D3MKZFNi1syjoGMBP2SHewcdMAXXYwHLRzXTLnuZ7CjNupa4VyLtYuiXJZpFxfBbLHBGzzHGqEh46BCtJRhVdUu",
  "key22": "VKc2YbodQ69X75DhwkRH7RdYSfpJxAtUrGaxsFmoi1yKKypqzWVjNuJRcngsdmmsB62Bge9LPmY542a5kHXQmNq",
  "key23": "41EUcz4TSoFyvqMLPdQaFaAwipZmWzLF7opNWjshDL5NXnnZYQ91T6kZxMXuzmvgDu1qjPcMnjmqjSRN4ri1puv6",
  "key24": "C2hkoL67p33tLyS3TJYn4VP9Z3hySJvWi2A9UTF1XWXHhzjkLDQAPEQi8jJL7ZVnhtkPJ5f4yfm47FFUnij4pK9",
  "key25": "4aqnAiudGsrKnTXoeegM2Cj9VSciBzpQKuQFP7K5TSRHR5DgAF41GmAG8MAcZD3aMbqEsRJcBBofBaj6x13CJoqQ",
  "key26": "3RxjpeMgzV6iyXzpU14s45wm3kj54P8vG75aMTFAnjtcujHbA1AN2xP4eq7XpDeZekc1B4yQmRhaXwyBVmK2LyKp",
  "key27": "FkQqnaKYtiUqjjGb9UN8AmSZtUeUsUxqis2zbGeoJD5WNsNvYPwJtmF11tZjcDd8nvmvnnGoJYVex3KWytmEknh",
  "key28": "4N5EkYabevLDW8Ua4PQrtnkWTZBN4N7Uhxy5nsTWS5b9GMMe2PpMEzSoWstZGQk9UTM33VwKmdKar9kj6StoGpGj",
  "key29": "2LiUh2Pj884G4bEC6v9q3mXoyjnoYPgj3ndEwVaVyyJh79t5QDTdTZcmRbTcsQ5N9u1AaeVhhPKQG9pLZtJbc2W5"
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
