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
    "4oAyVNStzCniqRjtt7UXfjQkTxv6jWFUcA7XUCgwBtWACDPLb3vVLn2HCCbaTzpksojVqCdFvGwX2TeCmiRMd74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sit7GUtawVdyCXD8vHbHict62t7eXxYZEFWqixmz4sBry1YvFzjxjUk1D8EiEWmSRCfbCbJaBYUKiHBqoJVqxqt",
  "key1": "2rFV6DTK7nj6jXhD4D5avU3x87FSdZBsCpSpSQAtLV5gU6t5Ej3rN7NhSoeVbvdfNBgsiQPutsgpvm6o9ywJkpe9",
  "key2": "5HtDHZkjutKuHnW8arzTXAT94JLr5GEEyUYHDrpJvzKqiSxqaPShAN9XSXwoPyY7SvxxiMWPsk7wGfK5uPXWnHo",
  "key3": "4Vu9fVCJmdTDo2EPTYU6eV2XeUDMF9mhNCUs5mxR4MSzVtnyQB7HS6y4L3sJmfQMKuUotqMBhKJUszLv5YcqXiRx",
  "key4": "5fgjdNvzM6twPak5yXWUto3rpakXrK7kRazngHvLLBb7rN99U3mQAxhqAPhEmM24cqMVVu8Fg3y5Ywq1LhaiL4Cq",
  "key5": "5roRTLHGoEv8ExLSgvDrWCYHMQdpH3Rxi3FCLx75smU3aGDjR5S79bGs5FM2asavA5TMhmPS6HYo5LWzhHPyCyGX",
  "key6": "2ZbHueUu8Z7U9JgeqyUTBRsh4juFLTR67yx4ZXhun4MBvMbzFfjppNVfYZc9ZRehA6e8pX3z92iZaFs2dgz1Nc6q",
  "key7": "5nd111b8m4smijehTNLmt84URpzyxyN22HJaH3mFFGwvEagGpK5FymHerCa8twinfbEpbPXFydAKumBXVbhEzxwK",
  "key8": "2LKDAYxL1bSTG3Aca9f4CJ2ycbL6w8zEdxxVwAQD4Gr5nNTgEApRzTWGK4zdyxq72xm7S8i3bQ9Sj15dJHatkdN3",
  "key9": "56M3bjaddQczGiwFmkHKesBzdBmwcTbFzw8FcqXdZtQ5V4JbUxpc6peMAwrgVQN3qAoxiS6yJtxxYZCKGc9Tmfx4",
  "key10": "GMnz8jsP7HUuwAF3nfG67NZ3MCXAGvbGxpyGMfM1m4581uEY2i8DAm6M7hmynr7xgAaBTZzbCYZRgxKdWRMSbRg",
  "key11": "3Kud5f6Ds79qu9zkE6scBBEcaNSQufXwR8EYZCV9dpAp1jnmYBM9eivJSFfz2wHfdAJamy22WX7yaXyYuzV2d7hR",
  "key12": "22EPvKRkd1Wbymmie8nqNhCnCt9dH5XuhS3Y8NUgzw1447j2zXY7ksz6EVsd2jGd8WX2W5z59UhxN6CN9GABM5CF",
  "key13": "498AzvsAUZfhVtquxBodMk3sXThugptVb116vPn49fBgcVyCxTVo7tCAm2X6aiJhRGrgXXc9YPSdxgSPzyPikGTf",
  "key14": "51kHkNTN1E5r632DHmJyubtGCehSkrJa6sw42ZNBKuj1HquHk1rr95SfA5MYA7ZnpJiWoUZyekhS9SWWeE9674NG",
  "key15": "3b71oo9MKcXMA722nYzS2s7Q3t8Z1Gvm8SnxZxq5aNxw94BGiT2BSwNSMzEZHNBw4YzoGWK6podyhEReoXgHmobr",
  "key16": "4w2iNYPgsxS8jwqnMZASCVJjNbhM6jik5DQE8QUrjHrsPyD7ef9ohaNLzyBVRNhVb44Hime5m2jCRj3qwZyBewAt",
  "key17": "4NyAo8Btxh7DzPxL85DxjEJsuqf1Z1UY3F6QMKoXarrGA6iBbCbChyuNJHDuwxd1dePqu9gTjMHKRLaM3nhvwYoq",
  "key18": "xRWnQGjWo8TsuSu9iTBqnVqFMofSGyDFg8UW7emYmVN9MXfSvaj7r5K3NtqNwvAVZ5f6Rf42uzDkTuyuA262zoa",
  "key19": "4Ew7C3nMSRCiprHQMgMch6473naxvUfBt7oQKvPgoJBErpUKfchs4xQHNwz2L92U4udd1SqMe9BVdQhCyJTKA65z",
  "key20": "3tA5EKwVCZj1EQdM8g2E6BFVjqS6WfD54m8Ea51x2zuTGN2kQWDtZayxKKVNVD7Edua6AQ5Ntwc5QZD7osehJUvB",
  "key21": "34Kbguh3faX99Mv7aQ2QVpTs5rYagKhmhfQTabfMHWZ3NcLgMY1QVoH5XBbnjuAu2N62tuisfNcGoiR367RWQZ4o",
  "key22": "5dwUXhobojWPYEUcTyamD9TPBbp7x3pCJpaz9CcE9x82BP3R34LMbdabBsGf3gh1EVTNaT8JmfybfrJQF1P9tQnN",
  "key23": "KaUMy8u5SeYiKzxzrAeWozGtY4CPuJ4xPFYRtoEj1Y6AabGvjTXf1LqGonaYvbkEPjCQMiKiZsNt2QU1pLtjhcy",
  "key24": "2TG9v1f9sWo8dfT7XC4fRDwv2hmMDLYjv5CnxtNggbuXmwFNMG3NnJv3Y945JRUuGj1rZC6vWmo9SW791xLv73LT",
  "key25": "634R9bBtK5wB67ooto3fYZ896kfNbnyVaVJUYPCGRn6oRigTG6KwKZaWAB5DJ5MPeLHyV2qto9DPFMJAr9emVqLb",
  "key26": "5NU8SjBxKRaiGzE9WkgpGWTRPh9h6vByQZiXZuCoe8mVC59V9Yt1LaLfvuDn7E45XDD3tSsrgrkJ3P2YnW2fhkR3"
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
