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
    "65NmmN26HRRDaFCmnhuAsicK2nBYymYSrFShuMoRyU13tiWJBVH1pYQKSFrZTTui2dKxgjExdr9w3YUofKYGwZx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zpHE4RjYXTwMiwp7sqLiZy9EHVcTgZomU9fyS9p5bQnSa2Q9v2E9zkBz1FnmeCmPEcPsFRXjVbNfyWFkbyuA6qT",
  "key1": "2arMgJ8TE45gQzFHyvYWgU7rJWMPqfBY4tT6WhBA1iMTr5Nt4nwY5Gz1vUrK3C1WCAf2iouysv6Cm4eA34nR4B4S",
  "key2": "3mdY8jZjj2aEp1sVEeW1XidurvP5M3TzLAcTAcsarwuyj5XrZmij1QYk9HFa23DFqHeVYCK5ikDPy5uLMsjQvYVB",
  "key3": "2FsPup83yHnX2mMBPEQCUe5DULqx1wwAabju54WYNNzbaiDMdnJktjWf75CZa94bCyqxkpBQjwnG29xVDyaDNWij",
  "key4": "5v8xGAVPPq5rnKtzBKDTRDyDAoH4k4tHtqiRBZPTpiJmNABtTKe3pGkaAcgvyAbmPC7itMsUZx7EFyGcBbbuH1Z6",
  "key5": "4p6x6Bz7j9towRvPMTrNA5xb5atvwL42GyGXwBtNNJ8H6kj6MXhRDYypdyij9yDzmTY4T84BpTMinTf3vDUHDnwR",
  "key6": "5vpT2r5AHuCTtnSynHqnsdewtXzWiuQzhegqcKypYR2sxERce3peacvAdkYNPVvBn6vw1wdyZX7e7FGAWdczjrb9",
  "key7": "5nt4qqgPJRZs1A1H9iAHuF3V7r2dU6CzGcDbkXbshfYGYaBYdfLgx47Ayorio97s4EGXL4wi7apQ9gMb8hgEd9sg",
  "key8": "555Y5oHSYZNtWgBzazvfmL9Ck7jecYWf7rtp7eS4yjGKVWZfR1bWqm4A16X6VqoRj73G7aKtKx5LqpZRg4Miue2u",
  "key9": "2dnnmbjBHNWsvh5LDmfRb3rJbbuTaArRMbNAqJd3mBwm2GRTZ47ZF9YtTsH7GQCqtSr1mfavkmdJSTXzuVzpE2kg",
  "key10": "3MyidNSoki11nJCBpKjADueRzcbE6AeP53JAcy3KDftENRtpivnVghUiZRZnV7UjkfZUJpuZGyn9ak4SPS9UUF2U",
  "key11": "4xFiHZrHDGy1Hpi5XDu1fuGfm2w6RHyBkQbFgNFtFpNa3QrtxHRxAeo3SLpPcBq6QoaSWqs2GJDrxdecG8a5BKz4",
  "key12": "3CJgeK1WxYVwEE5ZJhQsgnQiDr82FMQDecLF7cmiRfr2eiQpDpzsPXUMKPiuyXEopgRXnqc4csxJxpdqo2UbeFUp",
  "key13": "KUAQ7bXymY3vRujCVh9qVnwyFkXqisGdMqSWzuTxqcBBxvmHFFQPNksE2NPXHH6shwvbFc8pVMHBmWqESgGxf9C",
  "key14": "2k5k27R25ZqjjJA6APkgtCsgJSWjrpUzaGGmNZvrWQGJ5C1g5CuFQ8Ba7rtysTLcPphemnfzt29ERXkhWUK25byE",
  "key15": "63ZMV2ihe93ZP3DqnsEViBZPmwbMPxzzYZfaLFcfby1KXm4WAai9gxBhP9WsEq9txoX6mmojb4MaaSB3QU9wSoHK",
  "key16": "4xYZYpt2ApenmgCPxT1rx6uVCLK6WKbwZVtm71bidyMfAe6TKgZfSQZvXMoyLbk6KftMjYQPEWAd4CtPBrPevK44",
  "key17": "SW6CYGakPRUn9V7USKHzERiMBsdR43MeCo9irMLQb4XwVE9r9RrbFvJHqCFybtT47KFrHx4DrcyKpj4AhkJpBvL",
  "key18": "3yh5fGMhbH1Y29LAkBqkPZn8Z7G3FG6ZUjvE4urGJzU7FdHnzAnWLnqz9VdLn6L9dGn765vNVaSAo3u336d3k8dG",
  "key19": "5gBe4ckao9PWd8psSTaJUvu67uQLeFMDADNk2QTmfRjWiHfcvDrfp3aiE2TuK7aXXw6q7DxTQnx5jGJonWfqxNmL",
  "key20": "Y69D3G1idJThFoswTpDM73z6nHkiCPj2a5rDGfFtpPsMb4gsaGHRdoMRUwKErySc39ikfhjEhWq5WrvrQ4mZsBk",
  "key21": "27DSBKYp37yMkAQdz9PV3cYvTv12VdwAY5aME9kSm3cYvo3dKPeEEBYnQJojoPadDqMCno75UpPZWxS6mZjbYP96",
  "key22": "4dgy8U8fh5RjGzXiGdBkGVc3hXz6oM9r8ntkvn7xxuQp6Gj4sQFx7aQciPddPWsqPVJKXwdoQ183xbJNnQkEFdVD",
  "key23": "2XvsmBkdkgLNJNQHau5RPqCMaKpAzD6dMcH879aj7V3U6HxSP8FTvSjGBzwEVcHE2hSrr764qR6fV1VGGJ6eEgKU",
  "key24": "5xzknnX7pZEmZF7LKEjdYrKJ8x7CFifnbbRqcHfhqXqAgf98w96V9rpFe6F3qPazHopExPm17USvigKJzF1bsV8r",
  "key25": "fxEnbmfPnbU3VCqgEup4rakgoXhruoxUqYxip3TVw4dib9Af2NsWiEN7RuknCdEeppPMUKStZ2iwvBQ7Dxd8nmv",
  "key26": "53nWoMFSywo71djMxhWXoLYahAqFJ9E3dZV6jt5JS3FG5rc4jLYxwnqpj9jtGm4MbHucqXf3HbdtfCegJP6sNHWM",
  "key27": "4bEjCdZ4G5jmjSePYmEabeCJvRqXUkVbC7A4WenACPQewtGTx9CN5bXCm1rxY76XpJHqcGejTKH85jA7wVnGqSGW",
  "key28": "491jhgSutyBK5RZ5mN41uozuoCFVZuYTMfRX18gkUkj9DbPrfGPb1PKUDDv9XDKWJEMhrYgRtpWNebVCA3t67rto",
  "key29": "C2L6bV7pr8vdhmZH7C9csRd7y9WZeH77DtEoJN8XeQAmrqt2v22FLV6Ku5VQU2ozqFTkqYZh9cctvii2DuJsAYU",
  "key30": "4YYibzyWhBwFh35QE3mAx3rkhkib1WwJGnDuAGwEbk7gc9iM4oLdxMGiCorjr8uTM7AbhpD9YsJ6sahwprNCfdkj",
  "key31": "4yjzYJvHjwNkShfiZwZSD4s1z2rGBY6Tuj9ATmMkYUqXN35Rzfa8TZwhzo3chdsc8Xx7c8P3eivkfKBUjCk2PAn3",
  "key32": "5JXwxGCNjJJyY2irpzWpsmbSBefAWPkiZzsJDUCPuZh8J9oJKbj1A2AHYvc1Rbv5M3RV7XrVNdBNBKeD5U9CseKh",
  "key33": "cdSspRxH6VjKovkzkEN5yDt1Ae45PDM5KzQg9xraw3Cx99LAVtUs3rCdbH5pCCBnxc5qNstGdeqpLgWd8nJNvJc"
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
