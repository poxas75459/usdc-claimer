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
    "4qXAgrEkA1jeuyUySptEmwHNac3JorpPH2EuSTieHJuFh1Jss6kjv7mEJkySbbrbFEF2Chrro5qbVUFjhXT6mgXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SZuZ3PgcC3jauVj9nv357WtFmZGATxjSNEaQJ7xX3yLH1z48azKdouHjWoQrgssUTgGCVmfnNsX2UGCRksdsw9F",
  "key1": "5ggVoA1VqMZYuBLyJpvV61Tj2ZGWEXLneL5v1BbGUCT2Bj1JGXqzUFL9savqhyVxWMSX2fiQZvWpHcfKKmx5fRGB",
  "key2": "5cK3wXi15ySDAqPqWL27dFJhrXr519SN5rMHfNuryPcvzryhtU5DL49XtNLgWgtmiDkjpswQF7jCbqFaB2hZrLXC",
  "key3": "456JaigjXzu6HrMMeZNVCQjBPHKgLDJ1uN5JK7sPb64Kp26TwKvt2s1g9akbeHqLuhrRE8q9mYr97tvrCRmVLjN",
  "key4": "25tgi6Zo6Xe5gZEa6Pe8jiAYzt7332NrbnpTkwFgaTFobEUX7fidbeCbjtaaUawxHaBFKUntxJb8wVLjzE9kvRZS",
  "key5": "7KaN72DKYR7Awq4eamVuc8jtLbAkfxgy44KPg7kTGVoPLwF45kJqYQhGUSzihEvdXm9a56euvSRsVZ8iDXzRw8J",
  "key6": "4KxzJFTnpqJirvs4vnnd6gDj8zeDd7DsYcBpFboMNMbpRBFrmzMXadujG1WcWQFQQdaonqxG1zWBBKkqPnpRFXqu",
  "key7": "4C25vHABkAjuwBXHiGHjfbnRFnTAw2HHEgUqqAvcMkpuWVRqc8M5Gfuwvkiiop7p3qgcfBcQmCVgDjZr96gaDKUC",
  "key8": "5s6YqgFf3yXgnaiLcfq6kzi3wUt5kCuegaNwcYsW8NFDXtdQKirmFgeMyf8KfMRndagaAmNvSfNAgBTsKR8QZqPH",
  "key9": "FRM1Fj29ns5sddJxk4MAgdof9KZuU8nioqLgHCQzZxdmKKSgFMdFhG5GLv2mjtmRjfQcfJDkUgPaijBqSWtG39d",
  "key10": "h9eGy1w9M2rgdFkmWXK2qJSdD6gdPCQsNm6y25KpjCUoLj954dymxXJrhsBZ4hVR1Hd9NLvwr4Hvh3fMafChhSW",
  "key11": "3dXy41o2sqj96KbjFpE8EzaVLkc3TDSVmXoiTRCPhHbGvZLVV562FVhe1aXmtRndVmRQVFfJDhWdGJZW8rjxKXSK",
  "key12": "4tqgqqFPwXb1rCegGBKQETYbCJDyuNp6rWezTVEbsj3v8RdmjbtEbQmTeg66BSJS3kUiNMUH2uNNndByYuSXzWtp",
  "key13": "2NigMpnLJYbPftkqN5zCoKzisZxqQNydWgLnn5cZdVwvoqnDKQGAzBsyknAbCu2AUxfLf4Dk38FJn3MhZiWXbWGm",
  "key14": "4xnaJ7tAqv3Ko3Aa9WoKHdwb4euoNKcabM29PvgiWNxgfR8UAJr8cgQXXHBmwDGwH23YwaA5L94qYrnkaDPB5kBS",
  "key15": "4gAPyrq6Zz2iy6BPsiWUSCXjggsqQAjRoygDGL2ED5xG5hyrw45jCA5F5on29sQGkKeHe4NKA5acZrcZWCgxrkFp",
  "key16": "gDy4kCdsg7wZSjnBKHgAH34bguAjCMTCpBqxd4PCXqwKpekmPWd2kHKpo3qKf1L5eLry7mb3L3fRYLSdULZtgAV",
  "key17": "5yaFqR2iivNC8Zx7z6h5cmEp8cEYFjgsRS4txbPC5XFmvuLGgTFqdeQaLrf2r1sHkeFQzBXuSjTGsy192HE3U28X",
  "key18": "4GGBxrMJtWwiXqvzHZDs8ktJFh8jX3eJuUzswrpxfdXDqdmmKCKRbr3JKusA45MMe3h6tPNJugJQCQTWvSzmqU42",
  "key19": "27MtFVg5ntUJJehokprpg1m4Hi3KtWMs7RNc8KEQu9CE57ncSdHu4v51RBusvL9je8SDp3NnBbpCVMHTpt9XHNjT",
  "key20": "VXMSTyayXdJXzdG4SHCCpEdEWjmdTyjUB3zM6tBFrQJqrTVNyr4eCUoNFi2XWbvE21NZNddTbUyJpATQbRtaans",
  "key21": "5GBqbwGiwz75imAgJ8niSYuxTFBvFQZQMXqtVAAsHmW6Rj9vEehLsXD7dH4JHzvSUeExLnwZiYoMM32WjLL2GXRw",
  "key22": "2NKX29cnHXHzR6WmccftgCYrybNVBYpZ2ifAEPDSmfKct1cVvr2t4sDUojchznjqrjmuZpzUE2v4Pwr67Tf8enx4",
  "key23": "45RjMxFfKPcaTCKcJSaePJmcEKz9RAh3WgW2gioKvPmm8YUfy1CsZq6ntxxyW99r9MasxkU7cBxhLyszFhjTBHJC",
  "key24": "5BAMeBEQaXJz7qQU66Z1aPPF793VWx7yfVM4KEoh5q9Lk6hmSHe4jgdDfbqP2dpkfd4fkY71ghKi9JjV66kPtAGh",
  "key25": "7grxSYQSr86cPFUFmFQD382HbyYwAAFSUh4WVW6AebyynCALCdYr3ZQmmZkvn4w2NhTvbSNRcxs3cKicm5CHRkA",
  "key26": "3svWHd6gzjCXuusRNNvfDdiK5ZS8DjdCpAkJNX25mqfQbwatGUh9wzLkxvkHMiJmxxuBC5x4xvXGJ7YnkSUYtH4e",
  "key27": "3NdddqfG8mXMmWxf2deUyW6h8ZR4yXxLckha2VBuJco1VDV5f5YuU9YKXwtFtTnTZpgk7L3wjU5BLnwNp8mQVeng"
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
