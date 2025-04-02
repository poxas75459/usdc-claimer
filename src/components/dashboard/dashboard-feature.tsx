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
    "7eRASNmkUBaUkhqdSruJUfabhqxNcMUJ9d85hLdVFo3zVkh3cqHjJUgQTicPnFkY8ahCX7qBvbYkJRLemsvhUek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZYoiv2DNDgDvW4quy61E963jzBvR4M2PRC2z7uvQ1HYUursYXbP4pFbpbfvT6XUxX8EaGSr4b7NfLCvXtmy44U",
  "key1": "3UK2p7GZ9onFZ6KNvRa5s5NgAmLk8HCYYDinajpJsLKi77s4djG997GrUK6tMyFfGcT39NQZhrDa412HsgYvKkYN",
  "key2": "3rQDb1b1uiMoLt1wuTWfxGx3bHGaCB7fvLL5QLjnKZWoEZssQHwaM9XkduRCiMkSdvrZXSnxVwLGjr1cujCiRH8w",
  "key3": "epzZtsH2GuTRTYvuFrF7toBBQy8VehXVSQdgYtCKSXyJX9Zm16sZ8yFKdWXmzoNwwPU8beJvEKeZ2a1JiunY2PW",
  "key4": "XDYDGmQNivzaAuLX4bBGEUeA6WaJ72Lj64Ks3ZY5Xy2aEDeDTec3oYQH766BkA8fqei9Ge4WunMWL5fabuu6Y8W",
  "key5": "5mDu5FDTwXybeuRqFQDCvwDRmQLdDDRAUqXoJLFDMDQ4ZMaXSfCNvVCDetPjcwAedqxTbU51TL9UGP8kBeRRBs1U",
  "key6": "4gxmjRQCvJ2n4BrTmpL6EmzLphjir4Nt7RRMDkw8qe7b91rW5spSG6oZgqQPNBE9PuoRRZkpoUQPe4ekR2J1AqJU",
  "key7": "3WgeKUwfT884Mfkcvscz8Rs61FcM9ZLp8WxAdjQyyTC7HBMowhzvYcBr2AG2C9MVBD6HpH9sUrZMASNnqSyF5JsW",
  "key8": "j9SpjDGgcto64bVT6JXLSnV12SnVHabrGXJETWyNYDFB4w9wnUswPLipygdHP9UhaaXs4VRthmHeUZD7z45qQmz",
  "key9": "5pGrr3Pn3RFD6A62SqMo5bHbSkhN9Gh5newbxvjs2qMYmHTYuqq2TUXbnLCoCdkyAwVaGhYEJKC6kP2GeihdY7sE",
  "key10": "3ep7VRyv8C4dHgPHGuE5omi3HRoq7PF5rJFk2J2F8qJ5V7omdXkxwExXksLQs1hR1ZvhzbqnGGpzTdbgnGpb5WU8",
  "key11": "4a32odUXVVLwPEU2tXUTjpt1teisVtQqFv9ofnwTQdcWVePzd1Z38VnaSQgXqp6Y5ndWpA7PDgUvsXhUHuNEATgT",
  "key12": "31xH2aV55Wyeub8WKZLUhSLMUa7MpZ9xg1WvfExJ4aQ68145xE5KWHeCY8otxSBfxyqfsZ8n3K9dueJVD9CPvCCf",
  "key13": "4w7U1ZSU44kbseaxcxAGeZKzyCf8dX8ZnbJuDbxKC3koeAQad1mu82WhwmgNCHMsNd9p5nYqJoH1gCtGtJdv5ido",
  "key14": "5Dkp9hSi264wJkAN68MRqyRsXaLcEMzf6c4SgpsMJRajEdCvnR8C7w4mEF8YEuxDXDB1VeQwd8kKjuJ1yMgyH8BC",
  "key15": "4FqfsieCtkdhj82X2NKnNtF9CDqY2hTjd7YacTYd9En64E9Cm1sj49Ka3B3D7dFQJbwrk6eaevC46rQZNoiYtW1Q",
  "key16": "2tfFQSu5citj6HNKq6RojeLY1LPDkDp37AqPqwLoBjp2Em3aoSaX2XzfZm9pYryvwzUJQFDXm4EMpfAfp5JYxfRB",
  "key17": "5SxwitFbZ9N4ZFR8BLbgJES7k5G6BfqnJFivG1BgLSvPM3hLZDP9ajnVG3rPPxNVRgH73ZvokT1Y51GGb2QYLtdD",
  "key18": "63u4MzcgqBQA2Ufg1o8dtMZUJZZtioDu6pUDUhwx6pxNH318xReTLUNk4xYjbHECqpvbK9fYiYi81hN5rXhCD3bU",
  "key19": "2TP59kpVrgegH2EtpwcfVabnqMbRfV5u37FFDWppUamFG7mnHuwZkJdyHBVs7XNEYSkhBP33EEnWJYKrszpX6gf4",
  "key20": "3vq3YWnQ49bY3PYqE5DzefPxpXAzF4M86foMUhsE1DaW25gjmofBeWAGbHX92aTki6RqTG2Tbx51VzVk96sKxKxt",
  "key21": "3QwU9kpx4vWR3kv1xrE5i9yCb3dUVQFmRZBcsCGrYPNk4gMFDDY8nMwfuPWHs3XCewSo3pAfUpPUJgfZhTV64dWf",
  "key22": "3yopwVCf6Z8QQaxR3WST6mxqTJDq39Wqo4NScobStkr4d2sViuVeXuBbtMF8jBjPwixDskYvsevyUFApuJs6pGt1",
  "key23": "2KtriJQknxJiyrAFSLMyyGVWwSm7yfAH5R8RTEpEJ6vCpjEzCSMv68JH5Maecn1nnrJr59KkPUKmjHPwSJfZtuT8",
  "key24": "5azKpasbakQLBUzaGrPYF8qmdHBZYUhDuD1e6ZQ1JmXMCJpSvZtkoLPPKL6fh5Gf74NwYCay2zXEJKYuRKNraSmd",
  "key25": "9oo4cPzgeJTZss1oZNscPAqpZmJKWriUu416ongdcnxhDftzJ86Af4V9oX6HVAcaBRB8NLUD1PdNssMejYquKh7",
  "key26": "5oveRV5c1ctrizZCmQcpWLmQ7FHsFHcjpYotEEqp7Rnaiz7PDQRjeSajsqrtykDijhLPS4DgkFAev7NbgxysWoEP",
  "key27": "5bxu9zzhuUK6MknG4EXhsWg5LcVqS88sLMbDFi3Ze4q32NpHDvyKgMxE7NNwWAKcgDAAAakHbS8ULCJm4JSuZ7ZR",
  "key28": "52hT7cfc5Te2AaS5trwfkSQKRJYu7Sv6twTdZDAiLrF4pRij1P4FciidPahNyERn3ii1DusGL7B7uRakxXkUu86q",
  "key29": "6agHGVQAJBPTfXVpoJsvoCBEfFMhoKC1AsUD242iHVjCDDFutP57eMemRhjsAzPTtdXRxmAGVXEtUpDMUpkcXtn"
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
