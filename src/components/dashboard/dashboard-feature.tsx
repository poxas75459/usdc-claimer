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
    "YzykL9pf2MSuRBVGpmrHvNoSUyhNB3QFkAx5fwKD831xbk5NJWUU34nvo8X72RTsWucNEjAWk1LWQSAAFTzDz2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X4vpw7yQT8t4fgWGGa2HfAFhC663M9f5fhuq739zpc9fnniBiTjFXnALv6H7qnB6YXAR7dhuR8YdMrtGwXJjN3m",
  "key1": "3rJcqtGuX8BroZF5GAPcj9fjhVujqZ1HwHGiAeC8LpcGpVgDFqPSeux2YzZnmw4VZZhNSzu7SbkBP9VR4fLT33Gp",
  "key2": "2XC4dgQ5y69eResPS3f372vopeJen22jTAbqyRwmCEEfzJxu5MqHLGnHDFNiELr8KKwCrTDGo7qTBcCgvzCTNtQR",
  "key3": "6zCwyJxeh4MFFUxtJPtpKKtfhbhdHX28S4iBA5Y9evg49eQvRFYan7f858gf7jv2RaAQhSkmLzWWiDUpvvzrqLU",
  "key4": "66P31QYVKVGjDDDpP9DYqiwbytoDHzUMJZdJzVecppQ75AZ6vZNiDJVevWJac5cpfDzXfTA6BQhRJsM8Qe9VgCNP",
  "key5": "4H6fSQotu1cEkvvducWGems7wfspoSWxb7dXGxvq5pYhKwTUuztHRpznW31NrNYJu1QEbCMumZtudcQvLYQ47o9x",
  "key6": "2WQJit8WgpndcM8Yd5R5D38X3toDCJGNMkdNtU5ENSWN3i8WmSsfxPwayHcKnz3ewE1m1jqFhcX9CkyL1pgR7HTR",
  "key7": "2xuXk2PM2vdfQ9EmVcxeBvFWpDbJ7oy3mPEpMbJnwvd72qUCLt3RWkj1sgs2xwUsQXSxLYUMmks29tk6mHMx6XDG",
  "key8": "7YPWBSXcF7sYn8XUvC7pWre3PJU6TYG3D34ekdfwyesuaz3JrgHDheZdxC6gGMCmVJ625rt1ysMdkzCQgHW1L2V",
  "key9": "CQUi5TTF6tUFmxxwDedDFvRcKzS2dFg81Nmr8QqWZ6creUUhiRAhm8NdBhBBteDgurCj7JUZnaov9rvVYuV38iM",
  "key10": "QCtsMBqTs3F37P73D4xAC5Mw3rpJJVYx3N3XmNMdgnLwNwmWLtbWhyBvyLdBvpbnVXQWaXZcaHGHLX1yiYKPKEk",
  "key11": "LsF14RkbKDsetvqYxR8beN63Fd5ps6ekt6g6SvNTobZSQstMAjLmDzhZB2CAViqKXj5AWt3sdwrdNTvdYvvxDXS",
  "key12": "j97cbko2AYZoHxhRaQ2fruuBkWhdsGqurVJBCXL58sRH34X2R31LR2mo1yB8oAgwNVzM3xGa99RUV4KEfbUYPnx",
  "key13": "5RpNfMjmpb16B6bdBTvjUwir55HY27oAQKMnxPUgYDtfHGMkY2dzS8qRaHC9uuT3kjZM61maRDJ6Kkm2YxBgwEKE",
  "key14": "5irft8vW3DVnWrdETm1wrv7bKgMxr88hLiikRqz7tnsAXgqAUK1Jq2FuFUfkzWwtwMAbkHietdMa9Me6JpLwg868",
  "key15": "2aRagpL5ZjBQ4pXVfy3DDrQfAYSLot5u7oRMDBJ4wqqXyDE4sEq8nwjBQsAmUZ13yc895CxEhVhAuxifxWvKb3DY",
  "key16": "35esDVznf7vRW1nYjsKFc4a2mQ8v8BsP8TN34nbbPGkjZRoTDx5htjVdYFZuKLp7WxhQpNEqW5JaFHVVjRGGXjqc",
  "key17": "4pbBj62jBRLnM1zG21xLEsKBobjvZvUUnjoefKpSZWkVkDpBV56Nvvwoi3LzETxHwyfttpbyFJE6JxwLsmCRd2Zz",
  "key18": "5qi5fDVhMH65P7ND89McjLxPC7M1YNJcCYvyeN6iQd1gBYJMYJrpKEHLeb6qETN5CsSWdYZaYPGmDPiat27umtDC",
  "key19": "5ZGkUJL3Gr3BqmPgrA2wHva1VqLH47xNK6YFqzDUfGAXXUu8TAkEPVwkcSw5bdVSMWC4xi5PFA5krZmdtYJMFzXK",
  "key20": "3i7MbnKCmBUyYs5yLR2Gr31625iFGnLFgZpnARhjUGqiB7oPnnm23oATNUqn3sQKmZZ6QQ1WKVAtv2trGRvGqzS8",
  "key21": "2qDH6HzYotbDvAkooKvzfMP3hQ97SRHFmCxrPFHUs347RV99kQoy8Dp9r62zLwLUowyriiW8D7io5hSJUxG2ajf9",
  "key22": "3N9fEhWMANnNhVZzMvZzAe6LvjyoE5RvbeMsXNxEPRAp7WiuGSmsMUdyc3dy2dpaHzd9aqV9cBiFCAHabe3Lpm2P",
  "key23": "4A5cKs5W2qv9AT41rp4f7pA78NJynGJPwmnRS1RgEX77kpufXhZjghzMAWmzX1EyY586N4tAfi4u4Q6gVoHyxbVf",
  "key24": "1kJgiXVAnWcBLukrKyqsAmBjEGSxKYeow9KTzir2e4hmcVCtJdewwVV9Z79LRhJBT3h1HeuHc9jxoZVrG7ksipy",
  "key25": "3qV7snHx8JeddpDArLG9waAvxs717hPjuSeeRE5X4E4z7TARB8HcD8ntKSa7N3zS8G5yUG4NYsP8YCS9K9WCmnqk",
  "key26": "2B4xRjjgwQf1R32zC8B6dmq1DrS2q9vC5x1ctRe7njnhUHy7WUbNYEyuZ1Zj1HhTyFAokJRCd4tocWJvCf8gF56Q",
  "key27": "23Anuo9Ytdq9hNSZhNzKatvo1Jy8EnNFoDUcP3WMkK89HmKpCHhFf3FEYTm75BaGmLGyqJDTyv8FgJpM8PyQS3kw",
  "key28": "2R2XExUiuYX2rmi5wBXmRyB8fedMVyDPw2JUYNfgGcwFBJTjZJaimLJXrxNsJtnkSByZ15rk4jJV94DN2HgKYChs",
  "key29": "3tr55Xqa6Sx4XVzz8Ar4UALcceooT7Q7YGH1XXEQtBXojnPgLLac73NLuomZnADTC2SroBCM3Eyr9ZrNeYYY7z85"
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
