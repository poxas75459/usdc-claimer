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
    "4Aq4hwYt4D6kCuMYELHWi5FWRdNPuYX1tpMNxvsykdtGFUXWcccw3gBm4cJHGUjaqr5iPSHQSsoQuRUZn1nL7KtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ftsPe7bed9kkxaMLg3CBcwwuL3LJKtjtUmUZRP6hWhMwqa8wwickFZuSUG6u18LRvCoTocferBpTMPRbxmAcfdC",
  "key1": "3S8iCNzDkgJmL55grjUgvnUs8BX9gET97x3nKiY3V6mVkut7b2XPxpvHfonS3rZExZrjD4QKhxK98VgeSV2jcDwx",
  "key2": "5LBc7LoUAfSofWwfejpCAeXqM7TcZyqfSr8XjicTmvQCanhmqqbLXm4UZpHfiZxeq9S1w7p7wA3zbejsy4rcn5PU",
  "key3": "41Jg3Np3mVLtH7ki2p3SfxofyWEPsm842pTgPxPoBRbt2YTSxC7mJ1QU7vQMBKta5yJUPzGM93hvnbbWfsqBzK1o",
  "key4": "4hGjqvJ4xyuU3p8b8LrQLbBe6WpFMMKFyUhm5dZTh6nYAoRemvCCeqFRiVJJrT4bJ3RfQd2j8F7jAq9DqvptFP98",
  "key5": "3JKbCm4ejk3N6hSE3U7bnqXt7WzRfSjwpQRbzJ8nzJPJvpXFoEJrGeT6xYbTGcHPe9dTgvSBWRA4PguZvFE3MCx1",
  "key6": "5RL5iC95y2VN5hD4QT8jUNnXNG9Nm7JavETbM363SBQaSKLXnynnKeyDGwZJ8vGjhm9AEmbVgCeTbUJ3zU2QPGTu",
  "key7": "57ZgmRre1C7rvAgjuDZCmhwJaMuod5QBz1mwHaPQqnet2ri4jac2mmrhFwNzkCqD8dTV46n3gdy1YeovTqm1m97k",
  "key8": "5T7a3SXBMSX5ASHxQVDaTuJeGSWdoowkfEehVQu5ZARZMtZnM6t3sbYRyuf5kDQCo78ihFqTfN3Usqw2g4ReG7KA",
  "key9": "4BhG4Tsu4pucbLVSQXVmhfa5R7MXmtMeBoQ4agfuXLXEvD7fxWvzGfWrb1onKw8X73Yg9keLPkUwj7t1TD2QDWGx",
  "key10": "56ci83gphTCFvG3yP9P94ExLwo4nYrmEc6kz5WmhzQhzeJHSXn3FYJGr72eAageTT47MJi1nkbjigks2YQMiGrYM",
  "key11": "3HUuXS2cAtpz6ChF7iUgX7BqtKFt5nVn2pMybY2EzMjNF5VybgGDBzK3EYTrGnN4NmGjG7XUc9a2o2MBg7JrtJ2c",
  "key12": "23eNNid1HUTrqAXtGg1HP5fzzHZSwsSWjsvJyFoUoCZVR5PuefuUUzANZqY4B1TuavZ5YXYtHdLutzfKg5Sbdyyf",
  "key13": "4VJDkX5yitWnJd7NJR8PNiEyJgscXY1PdF7bkwn47QyuzfXA9UbGH6cyLBwKb6HswiLxq6hKv1CDkniKYUsG7Mej",
  "key14": "5QuWoeWyMFN4nE5cP8kHw12HpmZjs6xFRb1Yat2CSzpM43nV9cbnCDKmJuzJ1e6w7q9mGBtzmyV6VQcmHUr2Ynjv",
  "key15": "63VTwuFa4i5BfDA3BT4Mg7tFvHW7dQRA2X7GVHrQuHHGvb53wTbUfGE9kza1LvMttVhtUTypkxX78jvjnYZWAeG8",
  "key16": "5vd9w9VFE5Q9jJCQTMJ1Npcy2cD6EevBwAB8Jid22wc3qf1jLpbwGkBQf8TcN5d7DJoz1NhZrzXzKvk2jVfXRQ1V",
  "key17": "oY9ER6MwDuGvJ214p8HgPJB8DByS45FTc13D5zj5zbvc8jZe1xHn9wWSiPh4cSynCWMvkBV4YRzRnmwfyqQybn5",
  "key18": "26NhynzN6qZynS1ohxoNXmLTanNY9RN2bjPED73dmAhLvXNLh5aTM2uFdUwQEEv3gSvY4FrjENGczccjJ47KVSzd",
  "key19": "3zxvnY5qV3qCSpq3CPBApB5A4eDp32MFB9HB4pSCy68QHrg79qge7PKCnnwnkXExvMPm8avboUbLb8uvbk8XBsnF",
  "key20": "2EJ1xSLvActNcd26gNj4u7ZAaYBu9BNYjwTVRNSJfwVKA8dDWmtj6mGsC7GnTxAhTRvuUo91AACf8JSYhSJoDM71",
  "key21": "5vMtTuafzADasQsDLky9RdX5n9enVZECXkGXy8fXCFTM9jGgG1LeWS1fo7PDKdSa2dTkTFiWyNRz1FXYsH8qD8U3",
  "key22": "5aYXeDsQ15VEUefRtF94Dj2YNZCwu9dtLfYNEQEwBFc2TpftmrXuSyFbz92cc6mLNdiSEpbdTGTVtqMb3PQ3Ajwm",
  "key23": "4KwJKFxrUPwgYdtDLXFoMgMdz6dyZF4XBY981Cnan9xJzG3nQugiUMjPa82niXb6VpUv7VFcNMRjH3kAzwj7FnUy",
  "key24": "2PkXFqbdJiRtb4TiQ7dyoZCyqCLTN5Kb9xx9xAFz8su3CT8W1CGsykX7gpNyxW5Lptefcvqhisz2t8tiS3dzFgZm",
  "key25": "21iM2JiAo6t769XeLh5W3g2RZwEyasrUq3baymP1imZWzSfkvKJ3ZReFmBEkpGuEYMBEoV3ScJQXsZhVf6P4kKz3",
  "key26": "xRBYf6a4qPU5T47C8bsgNV8yV9TJEc6jiYQfPTAhsEjfq9Yw45CLK6RSuFRELTaeEJoTrjJqab6D3CEVQ4NNdqq",
  "key27": "4TQSDKkUoqHZtLw4PPV8dELh1DwS3EUwFsDSPtnMJBpRbjrYPQ2jZCPBV9FPQPKWJJ9L8xtjLLkVyZQJcgmDtUhp",
  "key28": "2rsKsDfX5E3k3zAzMuD2TrScXDQfMx6jMDyajkeaRgPSacHNjzqMZ93kK4mRZCmNahj4uyZqdxaoHXGBTpVC7cYG",
  "key29": "5kvVahcXo1VZXiWbaQujZL5nnoBUNrgn9oDjf8ap62yxf1GyMa7Hp6DmtPZ4ymJMd318PpjqtMzPMvy3D27cvnuE",
  "key30": "4kVU85PEm7Kx2BjagXDqbaU4uUzHo2hibicC2Uq6sag5Gt7xWjoxzkubjvyv5KADCzgPg2fuRxm6KgTfsk81xW5B",
  "key31": "2Fw6yYGYPy8JjtKjgYbaNnhA1ch6AcFhWt59tx7ApScUFCGVn7mU5nMAnd7GV5zzDx4vgkixSXYeXaRVjkrHx9tg",
  "key32": "2tCEJNvxRmUWjg4WD15mbKgZN6d85qmJg94djraLoqeyS6mfUZjWpugZGn9jFCYszR4xPEUcyxFNqXayapp61JXb",
  "key33": "bDWQxYPVAg99WRwqxXxS5rhaGGc6Q7xS8G88SD25LLXvDtG1J3TNLBkLtYgSpNdgDKxi4dkpb47mAVv3vhAUbYU"
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
