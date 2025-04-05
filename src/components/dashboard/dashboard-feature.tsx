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
    "2Ee918SF2dN2hpaf1q88wcaENxBNnMsJTB4AdN6hwqxS1XreFioefJiBayq8yHR3cxx547WciRJfr9yUnvrEZFp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dvZpEi4QuGjN2qeCyFJmnfTvyN7RjPxKpvvboAQ8fksWmVXNKysSKvGtPT9iCZWZgH6GjrZBqwzWCJLasWJxnV7",
  "key1": "66nvDkSH8KMpSeBAUdoP9PcYfgZFZ8THyHxRU1HnSzqfjLjE7VSn39FfJQMzNrV2FGmFmAZ72YemaEEnqj5t8ePd",
  "key2": "28LCKhBXmwzFFd4CQt94L2F3xzefffJanS9Mk4ZcMf4dnJ2BxUSKqwT4BuSeXfsdHGuW3t68oi7xxNnD5JPM1JHH",
  "key3": "3j2dDTrQ9HPLs5b7nL3Qu89JxCLbKFiNsaerkJhqMvYk7aumS2SgKYGFngFvmz9n4QzUzhmy5Ls6UvS4rxR72zFi",
  "key4": "5rY2TZ4REcsS9JGkVTb4ZG9V4szmfPs6TP9AZ1WpNKR43641C4hZXua7JPaPvQp75prxtF3m7aRbk4cU1X7QYFLR",
  "key5": "5PqbjKRqBeNKCtkPpeerZ4fhAfVQXsTUCvRJNFR1pYhhJut3soMZm94JQaue8gMb6CS14XLY7s2Xfwr6LG44xDiP",
  "key6": "5sUii9h6SNDPy115o27YLSWEXwHsggm5HW8Uz5DnZHAvTCPMvYbbrvyxPYUvmhk2LbGs12Hi93jbg8MEeHqHRcBn",
  "key7": "2Y4XjCz2Z8jamE9gTZ6ijHrkCz8EqCHNVndeVDmzvFKeucNZPTzuN46pi3nEkVoR8jPVTgQXar514g14p1dkSFwW",
  "key8": "4AMYwBGtcS8Zv4Y8cVV6bPs8JNfjezq37NUGTViyPRgtLXr9FUeg1xcBBjkDNRKg7YrBNirGJbPj4dSicy1fp6Gy",
  "key9": "3KLPXmrTT9RJELGLKdTn58T6RpegepjBY81CNk8VpYcwtR2iHhUpBpZ3Kk7L2SDNg6uHHHdKZQBNCr9KzPrrP79A",
  "key10": "5ZKenwyGy16qdKwiPTGdoBK4JgFDGomonBZGhBCSEhNmjy8qnjjtXuai6isV85zte7THWVRiA8uSRFCrTDGVXeWz",
  "key11": "3nzkRCztrFi8vLQP2j9hoGPhg5nvYxd1TP1XjZLJwkseyR2TLcYdzVd6UCr3FoKyeRjtEYiFxVAgAFKxiXoRWQAh",
  "key12": "SfZQa4R46WPZtVHbCnSGiWs4LpRKHUCXxTu1cAw34vAjWfmMCAsf2juvGdF2CHKs4vT1waesxHrymJ5L97tkEuR",
  "key13": "3iM9TqCtJ8mhs2r7BvDHU7EMdkpxEeSDFQxDAbCkAZ3LKTbKFtu1Zua85N9SGFTF4Bbis6pkTkzRvFf1GLUQj5d7",
  "key14": "YPZLtp5yRzy29LmEKAHGjDTMWZeJeEMVorSURzWgDxGwQQ1ApkVyMNYrX2JR2dtYygFK4wzErMc3Wwc3vtJMock",
  "key15": "4t786nuo7u87eZWps98zNZqWBei9NEGWWD3jSYE3SrYZ5emF4uUZVQ4mgYps6kcDXQHDybjBhEBaASCzeYK6jZCx",
  "key16": "5wFFkts8S94TFJLVNp2vjH5Xrb3NTMy2p8RsUQRQbVXMpWhbYpRxsE1GrqpGc99aEPWimD2zknYwKzugzKUgANjP",
  "key17": "2vpZpyGqoSvXFfRwrbx3uzo9vL2VE3ZKgcyjKeNQHwfBafwu1pfJVHyQnK5NdkPXb2iqJvi9RdGFuDJZfBNqJ1Zw",
  "key18": "3j8Q92cY6bRu5NDAxTF4Mz44v3k2mTL43AWNj8fpfv3LBXtgufkR8gvLiU9T1dFZYQHWHueogAaUps1avnET5RNw",
  "key19": "3eo2RJT7oKASBE1o6ELwzhHHAFnTk9T8Dvd3PkxyRn386vChDcKiAPLK8cZfzJe7truruwkMENYyW4Kghaj951oG",
  "key20": "5VsiemDnSdFCebh4NFrEPMVC847WuDsp6JgHom6k7av4sBF1EkS72R9AcdQAchoKHbrmV2P5MwS2x6HorfKiA3rz",
  "key21": "2UU8viucy44dW3aSZmT4CRMs5jXPxxapwYgKeEDRciiTzbd3GShZDYCheRp5x3sXRkvyGZuYg9wKGVYor8snkCUq",
  "key22": "33NaPGwkBytqg9iNVdriFfTxH75KKiXMiRvjWJpVykoHoeD6jkP2h1Ak9AWScspVHkYGuxbRSqvcxVFcArVUhcjK",
  "key23": "2u63khfVvSYamCxzGy9pMPqVFRFNvznFV87tKMaNWtpFJPsMEqTPMifyakaQRJEr5tdyP6v9J3YWk6y3qxn4uhEQ",
  "key24": "4oKsn7QjENg6HkQ1y8VgWC4FRopKgS9jpGMkYKHZGMVt6eSPvVjEge1rXYgfRi8bspzGPm1PJVLnsPU6NFH4mGue",
  "key25": "5G5nJeZNypg3kLdKcs9bpZxMdKgUtwtWKm2kWYpXKSq7jnuhizzsNjmoe4UHro421aoEGBUwFgjTvT3ZRfUyxckj",
  "key26": "5pdrbpJuSWuRVdJ5XDSShSswDooP6JFMgWXmLz1c4C6r1tCzmFjyqUxfAypArsgm7tRUXV2e6VF2PLGXsNf29R6w"
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
