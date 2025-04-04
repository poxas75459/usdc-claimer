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
    "2SyHgkoctWsawoFhPs6inSeaGPUzB83mQxYSowGdajat28A64jVx2o5viBvW9ZaQ9jN3vjL3tspUNrnKv4Dh4zWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6zD1Xgou3VYPDUhjqkr7QQ2Lm3vP6LxaVjYfkCRsmtsyTKTMYB8UjqSJeHm3hvWm9t5eQwpYMTndRr5NQUriXic",
  "key1": "5dHjziAqBUpT83YGFfidzRNY84YCJPbmAxzS5LoGd8UxnFMdDfk3dYUAQt4TkXgk11QdXbYUfSGzTbBWzB6ua8CN",
  "key2": "NDdDCEugEcCwFpJYsipNBxJ9hqxQ5JgMsrBC3QzXfEevJ2x6qCu5C4C1t4EXD1feaMLwUe4WmxhyGNxSJ4m5vZ3",
  "key3": "3iKNonKxknuVbEYB6qBMRxcHpZrsGB7iPBErC6uQuce3RgVKcUEMZuAxKUxuaGgaTgqQ2zqK25z2Y3PTjxBAQm4T",
  "key4": "56ASu5PDqFdMPv27rbUY6mLfwHQBweUySbfGpn4G6WytbRMNntgNmt4zXexj8AvDM9Xf7Md55LSjXQVAdS6u3Qd9",
  "key5": "23FkNxRzBbpBLXikYt6wXUABjFXyz9ufg1Fu4bmzEVt6UwXwwMA9aorfGyfEvJ1MVs1V2WPjHFePpDg7UszkGDw8",
  "key6": "35y2xAzZaBL5PSr2PHBGf9z7S1gZvCsUETuv5Ynj4QGm5srCmREnTe82257JRbsEJD37tgvjDaELDLerGhR5Kmg3",
  "key7": "5o3zpkYzXG2D9fdHdG2EctAB9RLi4MJqDpu5ikbPKG14BQ72chPMYuiJ8dt1NqnQBqMuKZAmPoroHvU29HLzpMjv",
  "key8": "TqcVUY2fff5Q5AMAJGaU7evyQQFLos3QmP2t2AED3h4yr3SiFHQP9DZ2rGJ2bSfnoNiXjF1QvZLZPAu7tqYfHkZ",
  "key9": "3rkSAaM46Yd5BS2PLpkRbvNvo4et7vZJfdqDh8n6zupsCuctFeQiA1p9JNLwR7UPhgiwgXgohruTsRB2YFpKwV91",
  "key10": "2xdaPRMTVVAuC4m1SsrV1Mv2ixj1wqz5HUjUaFib5LSuxyQnxA7JkMd76RLW2hdFV6LAGaM4ovERRMhZxiau7inp",
  "key11": "4ogqyBRqnXjGpmbvr19AfTV64qbx2hW13NMspWCENeXFjxyq39YAHeM7dqhJfHN4ighxG6RwHQnBGtBmCNRwmHMa",
  "key12": "5J3DK2wwoPvsd7AcRKC6ozT1uqZ7LnHMaShy6Ua8TeFe7ogzdkgS5u6tUhN8WnJ6nMXjNmJqA4YEL7gLj1WZuyJu",
  "key13": "RAQK8uqMPHm2JNr3YmPBV2JjZxr26EMoGKhoyct515L8JNPrMomHo7PjkTUts3xLXjD78NprfjWfS7uSSuTW9vQ",
  "key14": "33hRkGW3qUHuuU9wpbsceEpvQXuCwEYq5vWncCqgQBrzDSYeiJzbDvWAwTsuLkNJnxGezvuA4cbMD5ikPE2kVeLh",
  "key15": "5J1cz1Z4FReHYtd8ciB4myitysfgT7sAo77MWpfmF8YhwwF5EAJL58T7Arx2VKQDrBxic2L5wbjMHQzyFobC8M7c",
  "key16": "AEtZaWnWADwSiJXT6HxNSHEzeWLRRyVCRWzXFLfkFwSSxhU36aN6ic39biGtah6y7b8J89GdhzffRjvnwBTM38k",
  "key17": "4WfBgP9znM4pBBEReVpwJgz1rsjjdrvCUR3zALW5UgFYebWuwMoQKzD44LReEFY1Fw9NFzJa35djbbXiHLsccFuv",
  "key18": "Zenwy3XqaWVWzda6ENUzwYMPEvyrmkPuQQWZwiMr4JKkfNM1s76QGyePZdKbTEVAiA3FipqrrUjFANiacZgLZTq",
  "key19": "7jv5EqwECGrFF4qi4NLRLaAdkS7dBXMKCStoeuspaHFnnKyD254t3XFBGDZDYiHW1tGaXXSU1hRPXM5vzjsRbop",
  "key20": "4RkTwaj7W1FQK1ybKeUiTuyLmFCEqNmDEd3JzVPmwqTV7Jh9k7XKiY2rTs3MKVmsh7RCGbNKB8tZEN8iruwwyi2h",
  "key21": "62r4mYAJdVNto4LGUZDhompuTkfLCBYggrdG5xB1jn9yMMByeGczFBi2FPeysgXGMBj4mqgjWzrubdi3JbYKp6yf",
  "key22": "559NugTLVm18gDjSnnLfNSYCRKMJAmGsembFKrYr68u3ztC8e4UHxqJfnxktd7oAbvgcS4GeygzEfC8uJE7RFhuc",
  "key23": "5eeG2QSTkH1KQZCv4o7gX1nw3enpWxCXxyocwjBHTNKCGErzbhhAQRDBBECEbo7722YijhWxudUrVgj4FbUzLvGf",
  "key24": "36bB9hYntahHsY5oYTNV2tgH81zmXUn5XCQtBc8e2CFADU1nXzjKar8pykNpN2rfJF18kUXVjfbwJaYVbD79mLGd"
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
