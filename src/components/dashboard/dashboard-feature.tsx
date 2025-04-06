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
    "u9bdN8mKJxhQ8ftrJZKcWcYGB4NQx3FMFqCs5Q47KXiKXGNyUYpgexEvHyfmHBN6pLSwueXPJi1rNLNwKxGDGcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J14nDFw7jZrAW2wqjMgbcoeFcvQtgYnLrL4zgHKcE6S3hkTZLxv5Zep1GCASLTtvbsWCsV16k3UJg2VJsr77qfh",
  "key1": "5M7LPSi5qKAKf5GhuiFUc6VZAkuMZ59aUBZB4utyx7CWc4j9j4cs5xyUwQAvVqbXh8bfJkDaBwYoWMiMVrg8tGqX",
  "key2": "pJuUuAFjCRMdDtS2YzbrTZdeGckmUPMWsUXBBy6d6nZQ76wKQFN5dyB9bg5Ey57DH86rRUGpcyDERf9aH6pSt4V",
  "key3": "4BgaD7V3ZfffW2X1zKJSdnc2kYfkk2dUHcrDQNWpVE29uN2Q8AfDK4cJ9stW7goYSpSJj8t5A8WukFjdGopNsrcF",
  "key4": "MWRykBw1GGNgn1ZuRH8n5YTictbAc4vrAnZY3P2kRyrhYnG4HX1F7YC9NNDkE9SXWeU4E16XeZDRYBw5eb6Kbbo",
  "key5": "2z9faR3FHEjHxwarzdDgjdu9bBbkygBSxCYjspuCiwj4DMkRF2ydLJ3RwtoaWgGuwVHPJN2pK2yBrD2P76swiZW7",
  "key6": "2hk1DLkMEFU395XSpXgjf84gSLZ7nuWgocyLXW7Bs6SJkErZd7gLP4WMo3H2ygKFCziSaHRR53cYVaoJ2AFdddbx",
  "key7": "425xJpbtWXg66fUg2CFFYSiLi9oPQmKz2FHYEmTHjvAEX2VT9yaoP48CcnPi6NQupGHUoWJzFoZQY7idhs6PnQSH",
  "key8": "2MxBiLtpchFTDJYZuA8h8Fx8EFTmgVE9JW2Q1oG478esSXZ91UGLZZkogP5wCQTHhFTxJ1TqSXoUi1GTSzRYP4wS",
  "key9": "2kJtqsWBiiJKHKwrQQHNQSf6MtnsAtBCYRPyCZURc1sLYc1rC9g1drmjSdP6GcxS4mJ4LEJGr6mfQzruskyf9aH3",
  "key10": "5BeviLf7cgfL7m8JoDN6qhVbro3uqqGJXMH7Dv1PL9LPXeB4J4WiTCcM1QKxwjnWarEoxTrDd6J2V8q5StrLr8fY",
  "key11": "5oTdPEPbeBC1wFdkKZjm86sKDnkutnHZ4SmzW9bg6kDUx1vHC5jGqvzBfakDvgRsNrKhvEzdHSidD2YXkTr2oWFA",
  "key12": "4XrEipfAhRiNPY2eZmTH3k1WwXuQd3YJVe1tNxjz7sfEyvfNfHrLutK7vajW28bRX9K11nYL3GHuDqQx3pn2SB6H",
  "key13": "tk9uNpqvVCf3ujVdFk7Zbv8uMiFCSxjfphrvjLAAR9mSmBXVLLEij7qMubAgznTcpBepzNUtmpV8rwdAbvrjZgz",
  "key14": "7NsPtt1KGJvrBNSyCyC4iroMvdzSHRamfeG1PQeFHSSv8g1pzvbKghpNTaYL8fQCF6A4rbNwsKS7nv2oevQD81M",
  "key15": "4Ltu1mHKM9npvX4xtLrfvUTu9w1SkDV1csGHacwpDfAyKRg3x4mtCFVDaz84nLjgLu1q2JZEznuUMFKpD3nyH9kJ",
  "key16": "252ocXWYt3h7fLPMBfmh2Lrzi1xE27Td3MKf2NDLCct8ct8GHxofLKj8vmzAzkkaCEiGd8YZonsNnoarYiQED8P4",
  "key17": "5xKePJHJTk8aXCympXV2Pbk8G8sHioNpBtj83J9ooak8RyWkBrLo69xdhD83C4GZvsVu76VBxW3RawmyWL9VJ7NN",
  "key18": "ytdm49sokBp5aovJt2B4eeiAULyQaHmqhF9N1TrM1Ro5Gn5TNtaAdVJW2FW1a6kMqgTmLNNEVos6Sx2dtDmfnzi",
  "key19": "41jCzDwgaiKnq5vC61h3PaMCWZjZkryVsTe6ZdKtiZfzaj23RCWNHq3nSX4NAJhzxTxoTaqUp4X6H7hHucPGYbxL",
  "key20": "366QcNGkVFnkq7t3wju98gxmzL8bisuecV6mdxDPu46wWfFdAZrXyjJSZvLWfza5uLfYFCnnSgzi2p6ytH88ujNJ",
  "key21": "4EouGWkDVs9Fta1nJ1Kzd3nchg6JamyoBwVFwbPxCdY2issitAA5sThXFsEkSMMucqtu1qQfmpC1xg3Ky24X3dqF",
  "key22": "5ChUN7vdkSzStVp5DYrEBHRK6WF1kNAEehChjHvK1dB1MvoPSFb9sk38EoNiNcYbiB5fsTag5AagUk8HXSbdbmdT",
  "key23": "3UG8hBrztvnUdB4MvP4GxgUp8L66ArfFJMtHgeV2UQQAhzuLtMK2Nq8n8ysxyRpiUKKtxLm6vnwjKoSVep6CbjGL",
  "key24": "8mL5bFRi3ajdX2G5UhgTfnYNve3uU7AVfz3HeivWQHC2hEpt7qLkpAriCcZ9GgedzUbD6hUbAQH9hw67gfCHNXf",
  "key25": "4pXosXnCcYrrg9G2ZaRiXmXqnqDWaaZw8NMcwQxK6vDE9SXigexbZhPsGsRFgULEjbcQswc7HYCN3fUthQTjuv1c",
  "key26": "5Eq5nE6iSRbQXpRwWsDjBnh2YMrrxiQRhSSoHoUbcYrKva48cQhvGZYdHazahXDzTvvJNmvnMSt4NJXvB5Y1ynok",
  "key27": "3Nrw3AK6UAEfb4TY1Lnkqo7uuchpvHZPRJwW9VBNDAX8zA3QdNrDX8bZ2Vmcss3PZLdcUSybZJHyPWNGA1zKt5Qd",
  "key28": "3uXbT3buXPyL2NyBkCSWRrMwiEuiv9FJjymGedFxS41ZQuZxQbURDNYnS7AQUSYreCaXtLS2ziS5XGMBtTUWcfUU",
  "key29": "Yxd9ABd2JacAziiGvMwECxExEQrg3Ynkii7QBPdRQBuGhz2jp9s7CXcwdGzxRtzSGa7g3iVAmTpYQGz8rFiuaxB",
  "key30": "4Y4T8GqMuCQhjU2TSeg2aUZCprMkGKSYnK6d4TdA8ah32RCkrtv5NwqBR8bX68r5uAgZPHvWijmZzpoyP66jbLsc",
  "key31": "3p2fTv4Fcs4wwbzphyyr52QaXCh2VeTd6o4KggkKAQQmbtRyV9mGAzLrRkgtUDmyM4q8jCRNdj4m69wWf6QA5ZqG",
  "key32": "5rhJZWcNViCb1sDByjwFuvVXFb77eYKCxDfoqcEbdN2Exij1iuYtWWvVwfF2R2vKZtJ7GrTwK9eeLXqmo4Rs9ffE"
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
