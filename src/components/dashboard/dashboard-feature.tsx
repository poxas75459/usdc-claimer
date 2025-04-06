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
    "4P9QU9o6T1ypqEmuK3jL4mUY6CA5LCpMTcUhji8gYGDaEY55vjmy5QLvCST8AzHFj69UciTZcg2iCQsZPAzKvrUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oz3jjunjGLy81wnfAhATiAgHycDXuZYQGfeyP2YGayoQzvdYY1487qgsPH6jhGMuvDsGQGGHKo5R2z7er5Gwnyj",
  "key1": "tfMJ1d13ZZShspP7PLN3eY4LeN32oLxYqxD7hm77NPUVFNshzSmyRftW6kHy45Jk5ZUkgJaf95TCcYsMbZtwLra",
  "key2": "65y2y8PPc8vfmAyBMMYY5rfdKRktYomPboW4HfeSv1hnd1VdCZdajnmnTP16bH4maeZ6JuassVXDLdAVVEu9ngW6",
  "key3": "PvHkW5Ew2o9FfFyiAGW1Rfqgat1jALWT5ZoKdUiYef8GEm7cu3KYBZbEeNdN2bSWUV84ZGQYCzNxfL6k1Yqxd47",
  "key4": "4fWGDWzbpw5g85wu3K3gAzVzHRbFhuqDY61HPUw4EpN6trTZ86feAmfhW86EvPA1bHTC9omzkitARsssgh9TAnWU",
  "key5": "5SkwgW8J3HFRmM4WVy9n9qrrNQMZrQDNMw2yeeobfmH7xKEyG5w6WCAoMveYf7hnM2apr7m7w5swdr5sD8U5iCAW",
  "key6": "gVZ1RQLrYnEBXMrErAYH9Vhy53UPq3ycHEc8LKMoqVhY5i1FpDgiuUFVZA3gVqNgm8DCx3LJJefE2LG1LPSnigs",
  "key7": "2Chi5qWaj7235FdzBe9a81H3ika8qQzzGMchkdP5dnKaXLwL8PUr3fSthraxuVRMyocYStHiVa1c64ecVJMEWuSV",
  "key8": "4528i5fTrKo3y59yQHUvEM19vGnqEbk4iNarAUojN7X8CznhejXByBMPWVa1qDLw9PEyc4dh3AkkgntNhGsVKy9e",
  "key9": "kByEXKwiVBVQfqJMqKLx7GQLHBDVzVkZ8a3pwEdDNFyFRPhC1axJb26EVSiba3BdMxDZg2JBsjUrjfb9Ze3RZ7b",
  "key10": "2q7dehHiKL2cXBr4iJa6mPnc3xCV4Mki644N5jhet9CpVprzJsYV57u1kmd3HewE9nfPX63RekcQoVxyiuaoENas",
  "key11": "29kkKeqGA8Msjz814CcJLAvYfRC5mc4ZgYi2wVzG6Jj8gMq8arfDy3iPQNkXFwKFsEiL461e4weD7mhmYbZNsaUZ",
  "key12": "2FGUdHPac3Q57cpeEzkThhX6WAvgZQ69tX4wgNkZjPGbZbGdGUsGuBW7uimZz9BaxSHVdWNnPwsVBhVkCq8QShTr",
  "key13": "3kWVSqZnt94JiQgusZv1eVbyAfonBvrfayKXtQNX1gWfq8i5q8NixLCxrnZZfJKmXXbXbNNxL7yvbMHFXeU5HsQh",
  "key14": "27xTP4m1pnx9AKVj6te1wLJr28m9HdVXAsQdB1iULexaLdGH5aUbLnSMYrvY4WAa9JmNw1FsZhi1xbiNBZGQnA8S",
  "key15": "2dZU1XzxrZyNbTcYdc93P2U9hbncGB53YgVRNuQJm61uacWaRBVEXr8acjRjnR5S3YgCUbRKzXwa8LC5MUvzSYdR",
  "key16": "43vv6waSKz4WN8wF6ebzLhPo2KpHimAYyQU7zfppbvib7jsz72u53wbv27D5pYYPucVkFZqRX2KdsmwkojSYA7rm",
  "key17": "NqiG9D887S2jsjThjt9yBx96YXkQEnk1u9WkGi8TeKAUakUUfnZUjJm2MF5QBGm76hVa54fVHrhoEXoHbCBuZtD",
  "key18": "2bHgpjDGJfnzJ16Xm2qSW8sGHVyP5XZYD6vgQzyBwRWyQzt89KUt164FXP9YNZNc8sdViepZTbYLYMsQF6N9CWC8",
  "key19": "53BF4cjdXAEDYoXoYFVwRqAf9sPQrDW5gXnmnPWLLovdj29xdEaEp3fbcDqKL6WV6BfRaWKS1XAKuGEjAvWYNQ25",
  "key20": "5D1rhmuNVoMMLZR18nUosLNNTutxoh6JpFAS1PMVh5DV81iMJnxs7dPC3eusPz8zbpB9eFbE8kssgLWurvWs45q1",
  "key21": "4bTvBqzncRquv8uULzyuWQDCi1ueCFUauhoGDZEdxmjLrXDVJ6eMeVGYQBNuMDuG9PB9DpVuXVDpRkfgNFDK9Fr7",
  "key22": "45pE487vvtBWXrMEPatLdrMPUeKQfVq9W2pJJnRzuQykJjwewKphDYUX24WH9LLqkeqt5AGdAGx9Wo5z7zFFULhi",
  "key23": "4qw5J49XpNN7KvVGfmC6beBn3pZFCUNjpzCFDEP2C5R8o75CR3myHx9eJH2jk3uRs2Ets3nmgcPdQ6MQnZAXnHGT",
  "key24": "3MZ3XBX4R2V5HNmKx4fZzFRQd2ZXqKtXsiBte8LXmgKiyni2waNnnSngypFbcWm8H5B6DTt5UK7KHCmLbRfTGPFd",
  "key25": "5ieYtKGMg2mgU6GMHBYctuqY3hJH1mXNJg8JCGhp2bWqr1sgjMEeQM39KAxrYzkZxD8FCGNm1i8QacKoyaUTmmra",
  "key26": "3RjMpeUpaEXfaMQDnM14siEcpLA1YUNorZqMVBATHuP8PsVunkgRHvVWaVHB4S4Wpof1eeMb7UhYqKZtpCSc3EcF",
  "key27": "2pARJrNi3BnpaT2DSDwx367AvyUapfFgL7eqM8bX3vRN1oEQLBJ9C4fQ5upCHWEiQmhPcrYujQjFFKesQt475dX5",
  "key28": "5BwrKcuT3q3AiwS7iob8ReKj7Z8LQptgfGVk8SdTX4NFcsijs8tjjxWnFrMWXGPckwFGH6Gpo3Rqq2wxV4FVs59p",
  "key29": "5WK1Jdw1TqLHh2a21EQFufrpP1qw6UuGCrJPBuojoo7YqNEjRC7vzgUReGfHkb74eimEtkZGxqK2x7bQuGT3EUKg",
  "key30": "4Dsr1WbyE2FLA9vf9cpenBKVu8bC7aYDhvgudfmwgf6GegoBWCJvAozdQTrfAutAm5p41eD9a93T24Q3oVgG7hGr"
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
