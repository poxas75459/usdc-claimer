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
    "4EMvRAxBtuxbcVyNPkpEDEXLf9vw4Sgep6huwoE9eeJ1Gayo7amz16z3UAkaiyRnmTsHvTDPFcpxHS1vpB3b29c3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QM7ZxFR4UUULRb2BrDHBHCCs8adKFGtN3UbrxwY6PyeGREt35y39p6zcC2XfgfgK4LQvWiscwNhacXyYPU8NZYT",
  "key1": "62FdeHa58E9xzVy3vovndoPNs9jdedaBzTvYYS1fCn5hZJDUTteJ1VnukGnEMucLhsDk2YTnopqTvVZqJbg7ViCM",
  "key2": "TNXFEmDatEjgopRBNuttWLZkpGyvjsyQJh2M47t4723LYPack1ETckgAqyTqzFDhb6eEwfqtfY5dB6mUXcvne71",
  "key3": "5Lco1vQbGqDT5vjH3Jms4FFn1XpzCpEdwAJ3EQwjRTyxH9hdsBBwJn9y52zN6co2JrKS41yqmXXsk7kTa1MYZbnj",
  "key4": "5cZNRSYv7UMLukErmKpyVyuuTja1X6jPgFA1CjVhC3ejB4H7jwcCteCGyivsokKUrHrNktgKaA1ar63JaxZNeaQS",
  "key5": "2xPBfPRAuePxAPVZhLeCMnvgFYzpMEjNHXqM5N7wxdHWScg92w4Gkr32V2UFKwrtGtnas1a7kkLfAd4GEgZFBhq5",
  "key6": "5hwacTUXTPPnCPbTNzuV5er3QSiGNtN7R1dyoq3JgD1UExPAcAzRwKQTuK5t1CKJJ171MTttaxzHKNJnJyp6Ay1z",
  "key7": "5frbEyZYqWQiaFUNsX8LbCYL4Q2iCZwz7V7aYR7SYZxmJHA23TUKAtNbxtRDAZdsBJQTLebbuUEk69y5NCPtqDMg",
  "key8": "4gLbS7pX1Roc3o1g2prfL5mkKjSvgQ4aRPZVdA3vJCczxpbL34ozSj722LgbPojfjbE6GKJaLp1Fw9dQNm8twjQj",
  "key9": "3uUFih5FWDqnj9Ekjeo2QVAqVnFn7U7yS29Sk53MfLtwQQyLPhyDsm7QLH9ug7zz7izctN27GJBqtEf4VAz7wACk",
  "key10": "2qr5YiFs6ELgNrr7uA4V6KWyQRnErh31UivKn3HGDGHyjstTsBd4iGnHarGpsRoUtvaPi9xfUirpQ8ZeyDcDp2gT",
  "key11": "3da8cccg75Ty4MgYCYLAvnqXo2nBbt2EpWDC74VPV9PXXLDXxdcpLmUufDgYhhMkNgAsVnry2sRdnF94M9Aw7Jr3",
  "key12": "nDoPxz2G9S6MzXm3QpSqJat8Dd5shsEVC8tzonVR8D2d294C8eQCXyL7CFZrE5yfak4wRb233giiKrf4rDPFzz8",
  "key13": "3xLpkb8upuvhPwx7WLHzZ5YcoHhmGeakPCUtmZbibwFcmHcSzvqPa1z2BkzF7gQwmaSafvVvJXzFDk3kJjXaMDrf",
  "key14": "34Qed9QKGpnnKS2PpJjU651dyLRgjyasPwSQDcrJ3E54Ci2S3fRsA8oVsLcsiJc9ftJbajeaWe7fzEnp2JSruNHm",
  "key15": "4K6Ym92UBzkodhJuMpJfJLdiVRXq6PVJLrBkVDCd5dSjQvoQoJva74aFw5wKokNG4nfy2QSvyAjW2bNoXUpdbyNq",
  "key16": "GUGiWEymiKpRKUZ43MVkhHb3HSfg7TYG7xBjdybbGLkPhijLLNTzmYtVbNVjZPgFkzmLgQ1BpDh9FaEC2pqEiWF",
  "key17": "3JF1U5Ke8GV7YpjKTDWFSE5p5TvhnLGxbU3c8NqneRXZjVhWHCAnuEkazTAu81rGsUeZr5zZhvuFyZ96U64hSniM",
  "key18": "4v4yHTQqGR7Khr73h19XbGBj3HJbWe19aV4JemTUuBtnLgJzRw16S1yHo5wrrfgoE9eNiQcs94Rs1zQxdyLWSLvv",
  "key19": "TyzF9dVLEnkK8mSo1vNxuRExhVsEep6wh9q1SRKT2MzkNboYeaoBzTAvGxcby8u2UTRBTutbS2w9SoH852jB6Yt",
  "key20": "59HX4w13CEqJtFG4h8f2puSKFH2nGhgy7EbZZ31iofyJnQqDw3LZaRoF9GUxnjrVp5zYH7kS2qcerRErR6x8BUHS",
  "key21": "2XwZcXfEAY7Ex6E15VXV6K7DPV6qY68M6dQSgE38xXJfqp8tZqaojXhCHxB7nfKoeY8CWVHd7vtMbQXfc8o42f1y",
  "key22": "2y22q8MCgUovHJnAEr9whm65s7xmeqwdUbqLUW44DopXUW3wjZaQmDiG1YDWqpya3gJAcNPhuRZJAPbPpRHHWTzu",
  "key23": "3G7gEDdT7Zm7DipFNUEGQUD9Lv34iQunSf6tUatXT4XAgU2hc63ZMuRWJWkzxrpLc5pGhQ1LPZ3Z1NHTg6kRVMMo",
  "key24": "3SYSL4h5ZTxWhqhdMt46w4X8XztwxsfiaytiqeJgoiy88gD15sio9yNAYEKLioyUyqTWmGMDcq3K1ZubHWj6cPwb"
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
