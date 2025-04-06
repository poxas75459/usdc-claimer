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
    "uUyzRReRRR2TzhGij3VnD8MvFdhpMS9NKt9xK3GCS1FJoNypyMg7LcMaQka2yA98BCkkJ8DoFmdWakayiQ2Cjvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ty2Be3W1R4nJRNHWnh5jtSpD5Jwji3CMYa2aK1SRxt7cNemumsUPurWqtunoPD69fhTAr98hGesenig2knLDPeS",
  "key1": "ZmxfZu44KELXHrk2TcNE2U82k21uXF9n6RDUqB57j1SJhLehQAegbPe7hM8hrPQnaNDuzBtWS65CYNqRgKHrPAn",
  "key2": "5mhpRd2rNjX4q8yGc23bAuav8QEwy5DfsyTJ2QtCsM2UJG491dNZhx4fWXhbEawACWyBBtVri62uGYp1MaTCV1Mo",
  "key3": "hWasaSwVng6M79n6dJVs5PczQE8NJqTWnUx6ZfWbaBamd3WTLrmxBTHAoCrptctjpUNmhGm2bP2UbLkagAF9kre",
  "key4": "54RXxtvBgJMCbHD8425s4sDvnE2TVAYvanrCShm5uoWnT2dPmUZ17zTBsfJGwPWcBRHsJeKzyCPu11of2ZKC3uqH",
  "key5": "QwEaKDmEpo2aYc3eM4gUMZ7nm6gzMMakWzwJ3kF7fes7GSLuxgZXbhRXNjy6jnzevtYcCLa1h9hDzgk5Yazf6KG",
  "key6": "2ZeJyi9xskjvZHGcM5Nc4RGtfY58Rzt3isdz2m5Ne76dGstjEdd5s7WVyK9gcm3qJ4Ry2ad9VQCaeCnCZmM5k11m",
  "key7": "5Kbgs8QyymkMaBF91bS8PLP4hhNUnVUsTMKHNBThJebUpSBXXH2iP2uda5BXYKEwhirJVKbTo6VYfTuWwgaJYcuK",
  "key8": "67BQVLsytgXpCBzMbrKxzPVQLXXy5odSYrzWZt2rY8yUQVhX8W3QfEHbkY7SLdb1YsxDk6yR2rVqMwyCi6TeqvAy",
  "key9": "LN2x8G2B6uN2TFJTasyfpnv3iuZSwC3ZeqPYVxGs8s71KM4uJwwnf5SdKaQipWtBkAPK9ouyfGnThCQKjszkA7W",
  "key10": "3656NiBfVYCzn3qQG8cN6BaAT7jQu7TcK9oe55t7xhFXqGDzAJ2kuuj8YGhi5hgEUt95zGzTYRsXtvUFZNvUg6wQ",
  "key11": "32e8Fhhcq6EErbkkHXbS8biRxYMtmYE7tAuhNDnq2qHcsAtAy2648NTYR4hmF4XuJuTo61iBS1mXiw1uZjGVfeeB",
  "key12": "3tZQuSmqtZ2CPhrteA8FbvdRPgZQXVNFgpuoMsSm55qe3KediihZi2pHDnWzVczfVYgxoE7rRZzrCbdUfvZ7qHBL",
  "key13": "57RWxKq9JCd8HNmr152WrSUsaEs9nbPRFxgtF9Boxbj2jyRvnbNp55ofFbhqd1RXYUgMuJuCUbr7xpJkVRX46KTQ",
  "key14": "48aGsLS74Lsd9nD1CxqTZd5LJbLUwvQZAbiDU43S8ZxkkNRtC3vQdovm88memxdJc1AQgYJKdrCMArz8ib6d9JnR",
  "key15": "3BhaUJknUL4qi6udz8JgHiEgy3Amk5J2zCXJNgPx2ygHfd2rVotZqLDH2uP2KG3X89N9n8Rm8qp5Fhcj97nQ8twr",
  "key16": "gwzr7RSgptRLqmUQfSVCzeBmDttEodn2nP7U4XwPsaLGRqm1J83QG1rNyEmkUbSwkiQzyAt1m2ftBEiRpaEjKzP",
  "key17": "57333nCvJUv9WhWU79V2zkEeAUYZZe5LnZJwuvrSZbAkTYUcGndsuusMS4vGFkw5VPVmHTycxw4Ded9dZqaThJob",
  "key18": "M2hDG1TA1G5rTyMeQS7CccJJAnfg4ZvdLpZ12yMgafcC1kPHcvGrqDAatrC6HJ59wFgEiwAAe8UeGeswtPApKJt",
  "key19": "3ZYgJnBH9KRSPQ2jc9J4iJui3cg7JXpqJAaiEyWPuneeFbVXNNqsQJhVk1SPwguvmBqfJxaGmfEvM1QjwPsrZsFE",
  "key20": "QJkVARPqsoXHwP3tEgECPSfubCSn1aeFsyxSYw5NwQBTptvQwDhHjZK6rQ6MWxovXkGPSU1LEjSCDix9agQfMW6",
  "key21": "U8KwwSgAHJNtk83tLNaV8DRnCxWc2w24wJq1yooU16XRrvRrrDhJw6KLUYoBqKuejYi1tWA7Re2Sw6mg1ueGMbv",
  "key22": "48bRyQr59Re5tnsEgf9pXQza9PjrH9UtYvMJAeXndxrJDDXcbc7TKaLtGBHc6k2TBta8pwHA4tCaxN2L9thrJAPM",
  "key23": "2zGtJAZ9TXkJmnKNc61nxP5saLyk7kuQNm5rYpuzfwwiXgPTfa3cDMNb7Rina2kUHR9AmgmfrMm9tDboVdNRftru",
  "key24": "2odERqmNSFpa8dgMgUxVkqHdKi3Hy5PAejYVHadfmAPSDC6DDE5G6GUzyMsyA8oz6TXxJR4WTAP2kRkZgDi6yFAb",
  "key25": "5dDmHe5mraN98ANdBZXpK8uM5K6vCK1f4gtvvdTmc5sBqFMQuPPfZhQD4GU4H5R3dMg8V3iNbZjJrcPNfHTU3pMW",
  "key26": "5qMpSD9JFuj41n4ftw9cJi2UXzhqztY3g7hV8MY3EorpvZVyYq67MfmExK279Ajf4Mvvz7qwDHLVEQ4KaL9yZipK",
  "key27": "ebZc9SUya5bHzyh6VJzADuZd8whLVe9SUuhVXUFuvPNVwGMfRpJ7LgecbNPy3yQNdL6VFz2xLPaWWEQB1pnhwhb",
  "key28": "3CibV2Skvo64LW7EVpBFgFtv26fiYeFxFDhJDQ2XkcLANvtvcHxDteiMYPuVKiCuoM5FiQJQXh6LKHu3PNhmVdXD",
  "key29": "4HAVwEdtxgZEfULFzeXVbMmSGG223t15GfvRW3gUzGiJVdHwoptrsNrD6kizSWT5acYSB3DAWf9wei5gh9AU1GqF",
  "key30": "5zGwkMwEwvbJ3bGAd6cNuoXABKPGQ3iLCv5gSdsucjHzTfuY1RmtVD4GkkEv2ZnzSp6uRnU5v25iUJkYcMbFrzqo",
  "key31": "519BdaEj62oerzKUkVFPfcnMzaCbwwCcjbDb5fWGEqKPLrjs53CFP8ZULMiXmm5nMFKxhKEjT2QptYkAcdo7SWC",
  "key32": "5U1jPcCkzaxoKBzPAnhMdJwme58N3whXbZDwM4r4wTefLThabjDmVoDpeQkvLKF4aTjoG231CoxynZGJvFTnFAtC",
  "key33": "2d3ozEYuJXBBNoqCtyJMUcncTE9ABA6roK4Qjh85PXvjo18cQisi8Hcj3htsbThKCTbpGRqNuBnGX3gTZetqwcZx",
  "key34": "63ahwo6hPCauaSEWeXxtg277L14MZb9s1kRfo1Hk4Xw4wnBM2vkB5r4GKryoodqQZWgfM88HF9xyTqgD6yeVPsVq"
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
