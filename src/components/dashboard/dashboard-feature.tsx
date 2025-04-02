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
    "5uLatgJNUFkRaPCfjpCWTEQpsR2sHcwuuitgZ17SpRMuG9W1f1wVrTtc9TLu5g3HinErzxuyKeEQYmNB48vE85BB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EmpoAaXRgKGSFta8itVDbffhw4ckfLEFL8KQYFDAjc5mzqUd99dyXSBAW42mG36Avn4SfZ389RuyKnjWSzhKXzK",
  "key1": "58dP75YxrqUAHP95rfFGCoGJ37WgjtVu11ZuR88ivLAky1Xp11rBDs42KiHCqhPgP6WvTr6zWeEtT3nuKsnmjdj5",
  "key2": "pTsochHP6hrRtYA4ffsowcXGC4GZmvHAm7D21HvCMs8NL2dcX43czAFX4VSa7W8qHEM4o3riCAWqNVsjmqakjTA",
  "key3": "2kBBuAAJr2hg59XUaMeAoETTFqNx4fxtw8DjV9BmFte8XnSDyGgzGAsiLYdfNMK84dNzw65L8jBcCSbBgVPFqE7a",
  "key4": "4RTMjRTBRD2tBi2McvUpmZmW26uxKaswQxQLaUmvepbDcFox7YA6GHxQFB3n8SP4RYBBou3wVHxB7wkjDCPsq2BW",
  "key5": "2HpgDkVmKheMK1z1HaVUdZmvvFfFEXE9nbsUoNFZT5SAjDbgfu4UKhM9hqk2zVBspivHXXkWQfk5j9Nzytb78jwy",
  "key6": "GXm5TbE6CV9X5buWvxMeycKG4YaNc6TPLt5giw7iNqLgjvBR2cGkYUV5P7G3Akz9YvJtXMQ6ufFEdA4xtwFddQb",
  "key7": "55SwyztxcpXpbvW7s5nahCYjJstTDMVumvSFFMm42ggHt36XVaUA8QgMfkbxFoknzewMSHUaDcv8Q9iGZp1kjaG4",
  "key8": "qh48HBhsonpZjuyBUQMqbJVVaabGHmiFmvfZPv6qMeFz8rgmi3tzsjpgSiUt9CKW47nQ5qdD6ntqqLC87UBV7PH",
  "key9": "4yfVJeX38iXPA51ZBC3qbnfgPAzuXPSzETeyt75oZrc1DMW6W1tCBx2Gge3JUqdWeKEuKK5ogiQ4Ekp25YmZo6WW",
  "key10": "5P7tvnWFZCVscnkPQC4C5Cvs3foLzByNFTY7hhJoJUQq2K7gPBwB2DyQ2D6t724iHYmQ3ANzeHT3AR7oMSAMke31",
  "key11": "3nwZKwtmMbEMSNPrtpTdQWgmQz8tBNJpKRNuzGMtExqkFeui5HbefEX6ecvaLpHQaVTEpSFFMqFZG5gXsywwpL5",
  "key12": "YwyXBAzn6oppUkkEUauwj4WHZ1fMK5iAxtCPsH66VMSNcrKBC7uJFRXUUXNfRtGkuNCTyAvYLc5x2Z3vNq4Vsfs",
  "key13": "2V6EN68xuSJEVCNm7ckQ7U9wN68oHG2Wvm522fdABPKE9q3wf6vXeg7nbToa9VvQwBFHkrwPvePdHLxJLZQb6j8u",
  "key14": "34PejPzttPMkbemk1qV8492G7uFFQrm4t7Bp5PSD213XRJo3ZqH2VxPPUDzTDKU6tR1a2LTwh4m4NY6xnNVCHsNr",
  "key15": "3Lpfyy1QUrHf1CCZomYCN5kXnhGWqmr4gjhY7qAaRetwGL4Ky6LJEKTbgPTXAzAHQ5wnrY6LQCGUHm4nYgySrWPH",
  "key16": "34Qxbkgh8okvCWAXwjBuvphGrVfduetHhH8UgVANp1xy9YTVxznPTzUiiCHLgfQVRY1tNRXZvYphT9rZ6qkoXar2",
  "key17": "3S8b2yJY6DEjdfPCJTkMqKcMfxSnkm6EK3LWv384JZv52VBhEnkJWWXbBkZW5r6nTCd9rA97h5nsUAMYMFduwxZw",
  "key18": "2WYyXE87Jm2mntadadA1nQuw1976JiN6HNRpumiqrGNqwrqkCJuunBdBDavzv8TYdXbMgzAU4AqDjmjF4SDVPtmV",
  "key19": "5PFxShmy65UdWQhY6jXLNqjNJtT7wMnpJ1iQjqH5aTnwiyUKrseGSXbKQ3unJbH5PvMpPvB9bJic98mk4ZVvLBvq",
  "key20": "wgJVYEGD7TpdsVjFrsMk9AxURs4GJjF5YoRqsZfbfXvMVzeB85H2wAwYuZtXPuWD6k3qFpaNVPnyRGqFyMn71EE",
  "key21": "2dZzEqNoavBJvHTspJmPzwjbyd9fojjj9SvMKJSxojDesAvTGpjMf29mnD7dbNbibKGNQi66wTvFz8niUVwjqcTu",
  "key22": "BmYPMzPHT3ozfmx2BYvNj13Cz51TdX9XtwL9GMdyJ2UugTRkWSFmawr586K1Nxoz3XwoKTaAmJyqh5waRGTZLhb",
  "key23": "62fEuP2JCodGUJeSC73cTaREA58FZ1rp3o1jhrW7HSA11QLjyjpjUT7arRhKvEUL6DTe3xbcZFYSWF95CPXfXxYh",
  "key24": "3ekbX8jSD2ddGYtTGsQCbb7cRV6SA99KSW4wUR5vVcPka7xeRwzJisxt149m7xoa5aUJgSECWV5WPAacJPKy7PkU",
  "key25": "4ENvRZDH9oZx8tHSdpgZK1KniqbnZ8VbqL5QqtudHFzK5w7h1rvo5KJnPcA1iDnbxryxABFvMGuwWJfABerag1hc",
  "key26": "3SZgEKaPGm8nj3E5DBJ5kZKEcFGCzbCYK5EjBurq9LxZZkgQ7JhmqYAtsBRdE2MetqSRpKz7NTA1kY7AbEqfBqXk",
  "key27": "3JZoHwZikjd9L1JsBpM4sSuo5ztAV14iRowUQCKsUWYugnk5P5tuBCWr18iiBudWYpvEuddtW7AyZbPJFdDSzJ9c",
  "key28": "5yit3mBdG4MgZt28TbTibnGNsvSs5t7Yf8rRFJyx6pHFFeVWxzuPyK5m4rAwnvi9JSdUAswqtHBXumFMjvfeicRi",
  "key29": "48pzVMGcT6mYz8B5c6PGGyCDZctFWufko71eEghGnbLBodyJwXrdBpqiJejmqyU95x2S5LSsBxjgfXYNu4R42c1d",
  "key30": "5g1QJRujEowrQbu4jMSewmrQ4TmRA8q1XtwxRneKiBz1zJzTXj5Apwx1xuP22MQmdfZS5ZNPSas7hqreVy6gxZuW",
  "key31": "2FJUVZCBKvo3PMEeUr6NqT3BD1ir9FrEfmVDU7S4kTiHAEEQzFLzJsu1qjPqM2BLzgwCqJojjRDsCS6g2Mqujt4X",
  "key32": "3yULCSJ5cNpaouqnFyMv4v1E4UaaJD3MQ3Xo3ufRkCfzTtxrvj8tELxSPJMedjz8hzRxwh8q9FEgATzspTKx3Csq",
  "key33": "2xc4ZdXq3HmAJZktk16w28vNfoYR99qjRptaNcG1YGy9SZxFwaQ5Fb1BLftwGCJgoxCqBrobqp8J7H8YWyp5uLqS",
  "key34": "3FrYqCVHWfShUYNkMkeqvPjF39kQ6C9tWJ2K6VXbY4mSMzHH21bhZSabEsc1Vzm8Lf3w2m8DuhojA2HuYjivLKtd",
  "key35": "24AD6duTpPjLwmRBXPhoMbryg172GrJrhbTRL7PbAcdhCtfcRYWadDQyed2DQWEpMzWo5VHF3Av7sAJKwUYTt8nr",
  "key36": "4BhYZKn3EgpeszuddeZUQLJcsT3N4dF2AfBfixGXJepBhXFJjzcnqA91fcGtQ9L42HEfuqRw66CtLxcDrR3i4uHV",
  "key37": "3ecjusfQ4ytwnhgRsr7mSALzVguywNxge4cBg8TUBLqsaSnPg5J5Ny5ydW9HeQwhNwVhSLWfxDMdFw8SnxQ1MfLd",
  "key38": "27s26YSQ6wHNv72id5E4rnyE3wB5xC4oFhot4Z8aKQDpaCPFw6wXZjpAi7D4VLkDAXb8XLo3Ty5RseDSBkm263Ee",
  "key39": "5PtyxqNwPNovGpJDgdP8CX6PkJhCjq4EXirK68q6GMiJ2eyoaaT3RxoUypwRCH3cVV1JacJvn9Dk3wokdCEN2tu5"
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
