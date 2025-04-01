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
    "xxPsTsKz7mLraPregGeypvxu9vQf2ipp8YoK63rVnPWJq22yzbEBevvxo27eZYRTTkjAj1uDe7vzxWwg2DnMoeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bK84Ci3twYTF4LrHk1WLzjqBseGekcUNDsugx1dWRWyzSLcSNyYQdtDzd8B6Zp6b8yNpB1rQEDHkbZX5zk86Mvq",
  "key1": "49u3i5wMPU6WW2kY7CyWBJov7rphffugWJbHmgvFJy4SZY3rTEBnYpfPf1c7SnEtdhUPo1DN8M8YbLXMPs5njz6h",
  "key2": "QJ6HjDRhFpVfFnZrs8HoiVn1zXs8YfF842d2bbmCiU63XiQXKduRRscGZ9FNUXFdhWd7Le1JXt718egg5FED67D",
  "key3": "3rSdHsQ141412wEPEHRXb5kdxu3qsUYNZNtv8qyHHb3XtnscLDxFd4uVUv9pmcYjMzY7LgQtUdenbZzcxBQb6Rmg",
  "key4": "2mYSCravXDqGc5qyuPh5kQ6w5twPt2AyUxy6meQotvCGvnPdvqoC5PzHTydd5hqjNNcJpKHZMHzR2WqSmvzYQqin",
  "key5": "38v5vNeZEbQDJdRcFCvWuG3sX8GZjD9am1epuqHTVksCmWfQpS4G5Rn1eBn8azRz886gD5vu5mWA7F9V373S3gAa",
  "key6": "3ex65UKffLESBX53Yg9J6NwPwrpfbajXysUdNLqWntikkei69HvmSgK79y7KgSd6AUejUE3R35p2uBAz1gNHHaB4",
  "key7": "4oPJ25ucD3gERTNRgdqtNghP7SkampECkjN7D8tsmAGFHZF4ffY2tHk8GBWD4uYfxoQ45hBus9auAshD6irPChhp",
  "key8": "2bYXLAukLUYWbGzTUaVHKwo9eajQS4b4ph3EUx5jCAFgDt53sEWm7ajg8z9rJHtatdFmA5qUyrG1eizPNur3Bakt",
  "key9": "fTP1qaLD8v3oCQSTPDFE8gZvRPYcbJs5xx3fuZSYRb654PhZmnDbekZ61Fn5dftLkJRVKJrtzY6zKHJhkuVanPz",
  "key10": "XJnoRMG1Dtz91dWVDRXNeAYufcV7Wa8qRFd4pthjL5SLon1acoYt1gEwf5D7ocQCy93P5Ffb1jsWDmBN63p8YWL",
  "key11": "4xmauRw6iwH1CVZBnXwNpovUpTKtk3BpruUHJ85rarythVyfrpfV58VZR443wx3Uiza46vLRCyAjVHwjHHy3Cthb",
  "key12": "3BFC6jxgt6ms38BvVt9d9f8qQGVrTaZ6ycBKh61itW5podAjKNq8C4w9r7a7yoC7ncCFwr5UaqKhwGVxyongvkMz",
  "key13": "2YTMaKVq26kw1L25nH1oUXDFkY7AddxyekVn9imYNfSjZQigHr5CEx1LPa2qnRkEz8sp3mVfNEyMASKSzsro7KuZ",
  "key14": "3UJJvBYp4o4SdYTKAcfGWD6h8bprt86P4g9H2STqVB5ZFsU7Akze3Sxyy4Z1jiZrzsEYDkizUaZ7sW98HMtVoP7c",
  "key15": "3QYbqpW2QNApoWLidz43ovJVHF7dGtdysfURKBUFfZxzP6zfjYy8JwJrdfSMayhHTDaJCXTQvdb87QRRuTUjAkNc",
  "key16": "5HAKP17mrzBp5tc9bw8Uobipa9UWJiWn6jCZgiCxuRXs1TEtrp5wwojjN5RkDhjLcC8oiQpSxbtR4u32aKzhkEQZ",
  "key17": "SgdimvU7Qw4SnW9BsB6TiKHU2yTqzXnPPvZ6BPj3h9fEpE7578SCERB3WAVgdh4Jte6UVbuRW25MqVvv5nuTnTb",
  "key18": "277D3SMonbs6HkY1idKjVwCA7X1VGFWMZLtZH4wSxZqS7gRqs3qaJ8XimDN3wVn42jCjwmo7ayf7ncNt8RzQ3R52",
  "key19": "3YjXYdSKuHn8VG7vrqQE6m1iJ4QqnQkio7mExaDZhzfbzgc3GHKBUdmEmcD62846qagfm7H1Axwg8joiKfhndnVj",
  "key20": "xoSmXJbbyVwVXChgijzENwKyLkRWLXLp6rL8Wv8QTTkeBZWfvm1XfE4KqtKfLTbyfp5maP4ykH1jgsJFmS1iE7S",
  "key21": "3Fb6eGKhxjHznkNYVzRRK5WA9TeRVJ1DJyjwZUNzuZLYH7DeRuHHcnJJfcPxMbHbVWy9GgwYteKHpkpWn9Z8jZ7D",
  "key22": "Yv4DNgtPoX8L886TdiJwx61tZJ1CmMK2hwCgoPCaQGdToCHSU5ipoGA5Y5TutFr3Q3it7UvZ2LEGzsUqz7ouZAD",
  "key23": "46nqNPpdwZGoqDdDNcKSzGHenecomVM4VEqcvLz7Qc5fPhxW7JwnC5DdpWrG7wPo8BN8UB1wgXBMjKwrPFQbKKNS",
  "key24": "5ToZMiRA88tLDF6F9GKdwKi3FtBx5cnWQUTqe7fE7EwMgZfwWsQ6Ey3YqevfQZqXxmA5PoghTZMvmU2JEjuwsU3k",
  "key25": "5NdkCVU85CfpnnbPskFH3NDjpZtL3QpeJRs2ptrTUDrUtnmfgsKQeJvbtnDSVDRx99u4pGhWFQNkkeaU29Fi2TDA",
  "key26": "28UALMSngmKv2u7UybV3feLFjUvq7XuLVB9x5EXmwuEU3KJwrkgB2pPVitfxivBzBAQirurnk6S7v4VHWotfxTtJ",
  "key27": "3xMULVNVvgwkoW9c4S7Jwz5gTbMeJfGcqAQF5tiq1VNVnFdtZ41mFHDqo6Fpu5NEFkmdkQrThwUx1ToZXwQGg1cM"
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
