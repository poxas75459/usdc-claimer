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
    "4r62g6MAow1ioKsGibJBqjUacwSir369cyJ7R9Yt1HHDnzF8yyGGiGTMcrf5JobS1nZAtFqDtpofvVsDDTqCJPo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37kWZjkSmgcvsfTxRUgbXcwFZpzHPgPaChocDU2EuHEJ5pS77XQNvJSgLceKV7hvjxhL5cNx6Yw4BAjjyeVdN15o",
  "key1": "4Z3wcC45PDzWyvCt2dNy7NRfPyr66b1ftaAX2q8QBTs9mUT7ggALQtrBKwMjKp2wtihTdaUJx2VbbG5e8rVLLjko",
  "key2": "5kB2tzG99tbdNbd2QYxDTCNVYaCTcSQff5R7XPvfUPUCfGsDpJwMeqSJuRHL2kBv2Q7vEto3fMAcRCc63BqXiVVw",
  "key3": "WUHkchZ25RQwMucqBRLrK3QVLtNomaTjVeshHxv9XARAML6jW9hd7eH6Q6Ud1ybsyBfYrPDX8ptXetHr7oCNND6",
  "key4": "3RpHzbcmqmuMYMtcd5mE7D1ep71Cd7zDax1PqjK4oP6RU5fxwVszPGRKHC6QKSJtNzWonC2XBJL863GM1RcynmD1",
  "key5": "2VY8ttpPtTvXM7mPiVEExCaaQY3Sysa46FVTYT15gw4hciKJ4cMn56zw8hyqKDbihzgWXHdQuox8andttTyDfoaH",
  "key6": "5n5uGn82Bp916zuHKzNrqDDEj23Fdfoncsfb2N1adXXFf5QoykkqT7Gtvmbe2YgARA1G5upqW4AmV2Uy6Pnjqr1E",
  "key7": "3fJ9Uw31j4GRBn82QfVKjPkV8Loh2D9R7WNEYoSjLbfacAUxEN8BqLqen9xEHnvY3tdPsihH6zzMRuzstY9YBnAn",
  "key8": "4ZpMLK7FMPecpPHxaSz66skGw1r2aBmZPi1f11KD9LmA99YXMEU6htyduXzb293F8Fq76ZQEbFk5FwxiGaXsijDR",
  "key9": "3nXHY4vEJCA1KXy3V2NZFVwVmdvPfswdWX7GVrK178AMdjR45Xbw7G9eXgDAqmC17APZRBtkgKEtHvdMdFzXjvGT",
  "key10": "48feQK7hvoKHFJSeiYgnLen7Cbtzu1mytryCgXUDV4TxZ8WjZNaXqs2uzr1MPaXkXfMtPbHDwJ17SdXKLdNw8QWU",
  "key11": "4e3UH32Q2TEhgJrEnJC3LFqMAMLPAZTGsmb8x7hDHza5eZCSakWZ4Grhm2zg8P4LN4HqgkE9TDw1tPuF459uWrBM",
  "key12": "4Bz7NMeHaXtWWDooWpiXhtbmRNZNjc7fDuh7GKukUVacN49EwGBJJsCWtXp5Wmt6XAPBx2WLGEDa8M8BHW2yNW4o",
  "key13": "4VTecn2iLWhhRLD8aWrAxeEyHMjpcmBMVyQv6mLZxdzhP57bHAjTCtQb3RCcVrQ22M1P1QAQvBpJ1k1TJfwUH3aK",
  "key14": "5GuZFDmyMNk8gCwQf288HxVuyE2Jo1zCdhs5DTSXherTn5Jow9RvbxadYuBzbVwgyQzcgRy5riAq65yskgSL668M",
  "key15": "n5N5cJ6xoGmU3PULFd7ZnGLHZqJUPeHxjbZB6a9DR4Qd6VFEbLvBcs8AU6nuo9nb5zTgajzNsFAKYbuge1oBfAN",
  "key16": "3amLgAMBvK2hTP548B53DjwQRcXhnuxZSTfXM22mtMpFH2pZhxWBMkiQ5vnjaJqfDp833YsFeaMDh2V8acZA3MX2",
  "key17": "3NZaS4W4iF3REwtzmoD3XHBFZPrUvb6FEXtc8cBBfvYeVJCjGvCBkgA3ojoQCdfa43C7LHSnQxWYCTYPpLWVCzC2",
  "key18": "78hLe9UxK7FAfKCxcAgLamRtqNpTP8yQnwmHhFCFX8gZ8NBgf99wDktd2KW8ExWdN3hTEPRQR3EceSr1P7hitRV",
  "key19": "5KEuvd3m35txAMbVtsChHeuKd36S93UaXSdqkiZGqvJkUvpUyxB1H8sPAy8Yq2SB1KEyx3diaFstJWpheuHpNhE4",
  "key20": "44VoVYs5efPp4atkRJKW4Y6BSMZkemdrCuaCaaVqbpSrNSWySxph9g4jd3wfc7bLPdX6EUkycrfMKDqsRMZYEJq5",
  "key21": "2QmuCn1GTaKi8eoerioy8PSJKm6n3typSttiwe82jTrNvuW4U37q9AxsqvRmobjCA5L7mbxmmRWEhUZjmoTdmchM",
  "key22": "3ahLHJQVj8V1t9ZrRUUoykz3b1HjNJcKs1izYem8UibwAUmXVdQm6R5CaFjzXrMoXWgtcov85zxLjsn3XQjdoZb4",
  "key23": "4jW5YS2WxUtV5xJiH9QKzpUS3CYBjskTAGmuVdRRD6H52gXMzRVi5waFnK6T3EYaDrsTqQEGktk57BJAFmUHnKVW",
  "key24": "3VjkBVMf2T6pqpTxgonbuGECE4xAaSWVAJWAwvPqZ1zSopJK6qXitP3SdvEvexp7wBMnBRPHrQaTyBj3eJKiGz9h",
  "key25": "5WVpXEd7SFUps4Cs6G5VToxcGwL6GwQQqarv4qodQg8kVqLJv6RK8uSGgJrdbbUCuCpCfMWHf4m9rpWKfr2zKXxS",
  "key26": "4r9v5XZiqKQJg6iZbsvyuVBbFmKkCZVfUR2PJSsuUz6Dz9Ku5JnyRs5TKuP7pvSdmie8bUkqDPrgrqof2YGb7Vwx",
  "key27": "46LLHi7cNecYMjkVF2MBDPpanhgdBgqTPviS1K8DctFpfp5wDQNgBw9TugHrGVY7oHba5Kv1fAK76LcDdGZrbxbN",
  "key28": "4wZN17PYdVFEzegY8bsnEwDm5VNvGJRqwPvQVshaSgxTKx8RMr5hVrenehEemgQSXwVkgY7ZEHFhc7qrsMJxNXKR",
  "key29": "3T1U7HyGd4uCN4WFaJT9Xtg1sBacfkX8JEKvU1nkwmwUsSHAKN7qH4ch6CNcAafHqotwAdtcgm1zYA4eNBtH1mCn",
  "key30": "4aDneRJGNm7ivhWywzFvoMiq7n7vAGNrXUowiXRAoB6bfqQkg9uxWV1Eeq8dDee23YV9BZmWeko6Q6C4N7Vm72Qj",
  "key31": "3zsVvhPq5purS9mcd2C8jBpQzBodhZj3FVEwtYJJuojrGM16sNT4qMKkzNGuFv4fY6rCNErEitiGsHeUQnK8UeUe",
  "key32": "5GtAgka6a7nFPN9pErFp4Y2L7objGo5LMBuZtMRrWDmCAqFKGFaXA17R627NxgXLhMNvcaRZxmfK5yaVFTu6SbwN",
  "key33": "53vkD9Cmwnu5Y8YhjQiK1jC85vWapajGEBWrcLRJdq17LadDpsbs2kRqAKUxC1XrHHdrdAP2mn9dnJPDpgFEroNV",
  "key34": "3f4XPboG4tc5RNL5mUvig4zecgSXcifQm7nf1gbv6nBFrbNaT7soXZBaVg21uevQgYiMf7A1tdYF5pKf2Uhnh89"
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
