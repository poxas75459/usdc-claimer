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
    "2jCT7BkCis3eKGSYsGPY2DmrNT5uBnVbLtP4zVnSGEH98DLWR88M7TcrQdegtzKcJXuQ3yY5AJVoH8cidHCw2Sci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rgHmhneybbtREib3VbYKvzDeYwNGHcmjogUitrBnXRzsM9Xz8q8mcZiyP8pgKkVgCumVLSfu8QD5iDmpV9jAyUK",
  "key1": "KT57oA41JqD6wmpRMhBxHnQr6KaeHJJ25u2AXRToMHNdgxbwPS4gZKuwwfDfreJrLjCQqvfH1nNzPMsEEM8P77s",
  "key2": "3THsFBB5L9k8FBmGMGwfUFMqTZYEmEFSnNbDd1WD7KSZsjZT2UfzwUdQDQ3e3VWkyEqwNivWWZtEdTuaEZf4nEi",
  "key3": "4S8ruNcmhqbsWkKC5igPxkDZNBTbtda1epDXD21wSrH9UNHu1HErPia7vnyM3PdVB1RjtrbKRo7EfJAZ8duhbG29",
  "key4": "615BjXAdaefPuAGXLjTZswKc1aaBtSdL6jAaFmW3QJpXMhXTNwRuAGZfFSudxwmHbQgtLE31Y1V9fyRJ24jorLGf",
  "key5": "3JqzYQUBdt8YpYqFJXUb7mDnZJh15KZfbGcCWMjkJLthQRsQH4wT3B2kCxW4AEjPiV3nLVDJdwPTiwEepVMtRvsW",
  "key6": "2te8CTLtWphQ1mDvWeQQ5npXrCvAMrGDa7y5UFoiGRG8LDLA3zc62qPpzC1R9TyJUoEvWVNGh7odT4fd4FStTpNi",
  "key7": "N3iaWAW8zz9oEd5JdBkvrbdgJB73k82kh4ZLsf31TxBMYNdeGHVwFD1gZ9Kf9n4GvDPPsFSP1RTmXSMcFKYjFHn",
  "key8": "2zuHi16AxbcqvYiULyYhps5k74bUyE3D8ig36p62H3BCqphervoEhnSLGL8mMn5jS4MRw1pFzRAF8Gqxndtw1fLR",
  "key9": "4tYpozeYCAUWCWJ8CVuw5Uz3hSYuePiw4B8CV6akwLPYfTuJTuuEw622VU8Kuio3XJKeS6XX89GihLEMDLS5iiDS",
  "key10": "3KzgcP3Ksz44boQuwcVtYenm8Azmfm5xAd9283am1bkp44kpzioNn4i7pAV8XnY2zSn8NGAheYSA1i8BmJh1Jd6T",
  "key11": "KgXnpbBw4T46Ja9PeNf1Kj4N9UnB9bbPLFtdqPuBVpaTWdAAznRuPCCo5VRNFT1F376VAPFU8fdB5iyciCdqbdk",
  "key12": "27DeCmqrJQUWHfmDxp8ahLJoz9TDLU9HfnCd8GoLQsRj2vdS5dHBPfkxUyRp122EAp16BuS3EWJWoiHPrapjJy6k",
  "key13": "5iLJSxJ3DbpCafi6GmDLCmob6FB9ds97RWD56PZjgV92FeMAQdkxexNZa7BE7mqzBsAi43p3dYkrTt1pwrTBneG7",
  "key14": "2Z3EdRF4SqF222Si7VwvQVt31obCP8HfSo6CGDMZEYeu3eFMhYecnjsQBx7pdAoS91NMNEq2HYsmUTzXc4FJKKxv",
  "key15": "3QUPYR5ftXyCB5qsKcowTDc3dnCdEY9NhU8HgWvuerX4K7bDvymqrxaRktZVtFChpHRjQAkWN5tg8Ens4GjPpAKH",
  "key16": "2iU9Md2TgbzGteE1AUUxiX1d1oiVrPicrvys6ibcFa6i17SpvXQfHFdti9yDbB8j9bMmdU9Qh4E2MfpjBztfWKzv",
  "key17": "2LYBkGM8VYdziPvWr9Yckop2phPiZ5T8cniM9igXu3NBzh23TZrDLTvUEs4dcqn7S3G8bWP6veYJxP7omS2pb8Rn",
  "key18": "62bMUwASiNpXW1osVoz8up6PK4QxVN3AX29zaiNUJSK6u3ANFPzbwCmsQx14pRwHKpqG3yD8ii5YNdtqxwYQU7ps",
  "key19": "5tAvSCmCDfJ2c9cd1hrQ341Zp9mUKuQbXQXyegheTYSmgXLkVq8uej38kjuKeELRhR3xpNDqsyzust1wjzmyzeRg",
  "key20": "4QuQnAkiWno2aCxcX99FaihkYEjgwgUtgjEhyGeNcRfKgh9JSUAkzCur1PwmaSYbXPBevkcb8ATNZ5FXL3rziG7t",
  "key21": "2jmHLfvLbPnEDDjR4aU1DzYYVr4SgCB7uq46cgsRbuYeDXo4e4PB6KGmJ5Kd8EAYzAqXJDaxrUQeyRUZzv6YApt1",
  "key22": "5KfvNg2rZ4ykhdmGF4bQ65X4gk9RtyuWenVDwgkz3kCopV4LfBZ6QW3GQVsQPCqwkyK6fiviVPoio6Xrwm5BPUM1",
  "key23": "514GthtQ9wBuboaTu4PvbGHz1diCdKgZgpuFxea7HEXyPPB2K3M316vzwUFbmGHEF1YEbcTz3SzbLGV3u1tHSSjb",
  "key24": "5quVDqSGkYfdbZ3wmg3uUnEkHfKexi6Lkm1wHHYZHhzp9VqCCCTX4uTxoZNN5RcUxxpAYnChwcyUxLuR95PAYhBT",
  "key25": "3kkbimsMLkjBgkYE9dZz6LmyE1bBYYMUKTtLPBnJ6Ce2cKEo1EdsMoPofG9MVcoz8fqmHqa624ePjfUfsZ9cjuYa"
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
