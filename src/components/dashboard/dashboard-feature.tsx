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
    "5x577EeihGQ4pGzAh5D5mixut8q9PMpvR5yi4H661KaQHDhYFuyDwqyRfQFKovcwqRtSuJecMkuxJd5fCA9qrWFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "299vkAGE9cGkyxVRkJptvMK9gCnFRsfgJ8ogJvR7K9j6owqSKTMKZVes8HkiswXBG7pf6dQZcrUr6DioTWeGpAPA",
  "key1": "41ri6edtn6D5XrQmdFbx6fS3d5kd9PcLC5jHWa8wGqkJLRDT6MArMUm8sgCMCrKRrnn6bQXYP8PAhrcQ9eFa5AA4",
  "key2": "3THQXUkVJ7tANZSiBvLGRMzmPfMeAfAMqjUHQmwPB4eE8y4WpdsE6f9pdodb6mDrET1YGqP1cafD3MMHKeR2yPsa",
  "key3": "3FnjENcVphwJfYv4JhdrT2vMb6QsssJDG4xFnWQ6i2Whi1cPrPGqPHWCqAgEoULUCF4uPQ61SBExcoUBWURNxjcb",
  "key4": "44gwnuNdmjpeez6ojBRAocoaKCNCT6Y3jD4BB7XbvcKTf9A2a9nfYgvvMBShxUmwVqfmCr99iZXzUrMTR1gStz7H",
  "key5": "3yHTRJGoLUvefiHACoczWkAtzNhTuay9bTYRPMcBnrpHZ3xYB4VTxkXc5SqzuhU7GpqkY9wPcCmzmkZJ6yCZRUNh",
  "key6": "4cLxLkyPzD7DTeTVhmdLHRPginpjnyvz2L88HbKhCNrSKWdV3UpWBKgq5awjM4ZTKQk7hR6CjFSou2c4hgP7aQJQ",
  "key7": "4yZsDzGKzsKpbAZSushJHjLhKSvVKyts5rkXXn9Rr6WeEAqXpvgQsVRSc9aHJU2X3tg4iANp5M4hiWLqAK24jz1t",
  "key8": "24Gyt1rNv7NQ5WYkB3tVwszHLA32R5oJyR1t9tfdTC9GCfpEC8ynSU9XaQN2RC91Z46rLVmtpHBWwKrWgTb49SWB",
  "key9": "3WZDSSaVrEriuoY1i1bGfPyxNwMzdvon6cRUiVkSwNpXn7BsTBd5o4zK515wiKYkcuwAPmsLBuKM4G7wAEqEgYvN",
  "key10": "64LTbqHteoMqy8R4C4h3ugNAAd7UCp96qCc2s2MVBUCekzbKWMJVHz4MthwsQkR6A8quMTGXnmtPY9rphuhR3Uuj",
  "key11": "cCsjwbEuTv9e1QoyVDJdHWwhTEjjJcoEzBtGsDJhcLek8x4mW5w4pj7FcFCQM5kkm8exHFZJeVbnvu9Zuben9tw",
  "key12": "3Ch2bj7PKQiosFSQpanVbN42MonFyQRH8nam4xoD2Y5gtVdPhLYPzPw5ino3kxApNNayJAmjyhaLbo8zSMV3ApCa",
  "key13": "PeSvEM1rKm6nnHT1UHV2v2xsWqxKKvJxSdBQse6KBBN16PY6XKX5En6eHRsB7zA6ksg13GPZH9pCRshFCGRriuN",
  "key14": "5CgYKZg8a7bW9acjYRSZxbeXV6pnK53muWQXAKLzdPkwYVR9BWPDf3LRudmLZXDK52zTL2tEU56Y246CZfpnRoWB",
  "key15": "2i1KVBkdsgXCFZZaAMFpbdSvHZKtqJPBkDXkRDfE1zrMPq9f6PZg375wzg4a8MCetgXCExQ3NXC1BS8AUh7Hxdp7",
  "key16": "4Shar8BbA887GDm5RoZC6TaypT2AM6TndMQNyuL3ukJDxXv9iHC9UuFA7yYTeSxrrScu1oU9t1bG9ffxuPLFykBJ",
  "key17": "m9BHkhJfXf9Y7k2xzZwTPx9FAzR8n7KDPRejgxtVE4D83wp2ZWtry4FSJLUEfo7TnwBr8PtSBAgX7hx5iry22pM",
  "key18": "TCFtHKU6eqiFGpp7rZKcU2i9ba91gbTjXByTwsbhMRNCKv4oDehzuXqHhYf8qyfZuf37BYRrFVfzCeGA9kzJ74m",
  "key19": "4FfUa56bhtKZNZZ3WgPxJsoj3Q2nWdXXNdG9ZUxkpTcuRSyfSnxPXHWeD1VDtvfpj2dzNdTXYQDCciWz7YvX5eS2",
  "key20": "23rydHocje2rGxstSsz4ezMM7irYeEZatTDB73TkLGpBZwv84UKUidkUHmeQHJtWSSJGU83mWtFwreSpuv7vRn9W",
  "key21": "2C9UqZSrsmYQ2v9gqpPdtJAysLhdShTzcVyJVm93PBAbWS6Ny6yZHUD2yhfrLKsm8iKbHaUNypXed6u8mJwx2AR",
  "key22": "5tnXJotCn5ZsB9FejhdToPs9FJuu7CuL6HtfM942Tz11EvSYbutGBAjLRj8ysJb7JoWh8j5MzjLtAcniU7J1Vsre",
  "key23": "FJWs618esUiBmT3numaSV7YjutpYp9F6j1AkktnVMMYA7mYkfnKTf3rWJ81uZucweYWf3bsP9GiWFVDVFsVyyBG",
  "key24": "RujBdzkbmNWWTJoxyT5T7m8LnWo5RGNQknmepMjBQ8D5tA5ZMBfe2ySiBdQjXWWSm6hZVzGdC8f1hK7T93TSxbq"
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
