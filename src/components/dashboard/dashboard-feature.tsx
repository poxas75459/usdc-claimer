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
    "4RMUtu4iB3BqDasXQhzeV2YKDGcrbK41RQQiDiE5U6ACwroHSNzdvsjWrJqykp1x36aDkc21RReRTBtWJRpQuGE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pLV7ak8mEDkJR2UXU8ighkst22HLZzV8nD8QMuEsCuRWYLyKFXZ8EXC8FKcaCr2sGdwnpC8j2U8wmFjYZMkfQvm",
  "key1": "3y3uptsUdPgX9XPZU3y8ybDnMiSW2uBDuHfarMxj1BMXvup3zidPp7aFyKn1yet1S8xwCK33CXzfH1ZpzyGoaj4j",
  "key2": "3H2ANEEsgCTSL2wA6Upg3xeKf729HYN4pWHDBoAG2izkywr1rrThbhBBMapK22FQv8dBPrmQ5KRLoAqyrmst2LLX",
  "key3": "2fGaDYrmf2F7kaSbNAsiZZwxGCteeHpcm8jC1ogEA1a2kfpyXoDDq8W13ZmCC5enqsC6FvVAZSqhSowWpAa4NQvm",
  "key4": "4JQfdn1jQJXQ2fjR2k92vGY3vCXrVZeMovoG9jQVhzV3bWjEC8ZzSLfTeqiryZUoP9QHmieFvbU6JLFiBsU9bgDE",
  "key5": "5E4YLgmTVs7bpuDzVP9tgeY43yuQwRZrcNMRTnZFwi6oxChf25ybevgJyLCqspA2efVj6La7CHYDM7gKC8bZDtw9",
  "key6": "2S8vTtU1trtbLNGfsjJ74pdvFN89nPGd3ZBBP7DbH5S9H49ba5jZewSB5p9hNB9zQsjB8iRgfZrZBwyfythiKUC",
  "key7": "2WbPryRq7vvp371NEpW6V6yJ75pmWZd6cHgn9RxnhmyvqYd8LEVzd9zJBENpCiwE7NddYS6btVa6D959C15Zh4ac",
  "key8": "3wxUvjNHbgmg6sbWnXf2bmC3PrMU3U7m4Xw7k3djNCjUvkmpPM8CSyM27g4jxf6Z5DifPgoh5PPyqXpvohnCmTjp",
  "key9": "3DzYoCyjwZFhZ2JHM3KoKRtCK22LdeASFFYpEsTMRj71ZWNPeMJz8s6qaUN9ojydgUPk9SfxnEDUb6T2K6B72Zih",
  "key10": "65mir4GxqhF2EqhkmuEhsAfSH4zE3djK5gA9EcnUK1VTLpQRcc8N8usViMCp1AhapheZLR53FbpzxVUX9GDNvYQd",
  "key11": "2Bmf9xQtqb2PvLfGcZs9XeifNtuGULsAadVfB1WQSqvPSaPJNDtn7fr6NiA1mop9iwDah7tFj4TyyKPzRQ4TiFms",
  "key12": "HYayhEJoJUkjYWozoW46qd1hRorDFqYC7dfY8EDMub1RZnCLe4UQLSmjER84hdrD248K4mhQxAivJTLuHUPimoL",
  "key13": "5QmpNNP3XWUWA3mYWj6RxKvc5xo6UmgynpY4CAJmwntkTQunwCkv6buADa77wnmAy3sewvBkc57hHARbUTaApVrR",
  "key14": "27AR7R6KQ846HNxZdhJVwe1jptkQXqd7HGBXP4jGUZcDVtoeL5zUhxHzaBfkRmdumv5PFKHx2ro7ByhvQdWsmnA5",
  "key15": "5we99vXS2SVhk9cxAu6aHXUWZGBaRPpTSTaZD882FQD9wSJG1rXQDXx2s5FVtn98Bus5Z5LF8TPbqE1uYg1viLom",
  "key16": "2iciwdaPchEy5FFU6pqaGhgpKKyvMyYdh2NVdpGHTqskgKVuzwUkDgUwvCBH9TsjDeLJmp63M6LXpC5xFpJ7qAWU",
  "key17": "3HGSUTzaK2BXGY6DQ8qpYb5E25mvfA6VboTzjt1YeXKo5Hc9JN1VVqtaNMs9fvVX33GGK4AXVkLjF6iEYPX8WCm",
  "key18": "671oV3H6SSmJEec7d1NsTSpjBe4AqjyrBuy39WfYvKxWyQqoUt9N9LaF9CeYCvzF8DGwri63eyYUAcdj8jntuDVe",
  "key19": "2jSXkHUgZr54aArKhQ58Rv6QWsM5HD6YEhriVDsZQdNQuVoZnREea4NTGZ4fsai5RXgVQbTcZyP7upTN6bJYq96o",
  "key20": "2i78uw1WnEceQ5bFBSGc5eCnNZwHPkmVVBRxoJktFJxwwEkT4Mi9bUUytgx4ChZnZJ44Dt4FGZnChBNTwev9a1Xo",
  "key21": "2rnBBBTSXacNdcTtYqxD13s8GgUkZgr9i93sssUnUXJ1V6Psq1rHHF8cSFucEE3iqj6mnMoVdzj9YCSxkt5gRod1",
  "key22": "KpE8H8P37v31m1U15Y3Hk1vXKTVfEBMLaAEGtWK3ZHB7Bby6ZiBQjpPj5CHnBydypTC9qH7v9C9QnoojeWsgnzU",
  "key23": "5b6vukG8X7M4TByoiTcR1jrUjcHiUjB9SLRunCJbEDHHXrBjsNktEwLqVz9r4MXAfktGY9QQyJgv7nkXD1RYpBBz",
  "key24": "21PFHuT9anbknbnmutkYVDrdw8V4WjbZpKXe9yiL1muTy2QPBXuqWhN1SkMnp6LiXwMUmXPJgtLBN4CSzs24FR6C",
  "key25": "5XZ1LqMpNJRMuNaqmsDmYgbZFXDKj8MkkfjPmsuT3Qfk9QGZhPKZEuWEA9o3JXDcj1WgDSkys8dLe1bbvkYXYwwi",
  "key26": "5oXauK7RFurFwMuJFeBFLYCYDuPuQgNhwsTve3kTrxFHhxi8KR7adCX9eu7X26W1kzEDGUeRyVRqvGVGhvY23QUc",
  "key27": "5pHrofiGihycGLuZaZ7KRfavvhUBJSFL5MftNX9onMEwLodRD2KSUy7QSBGK7qC1iz38vdEfWZyQ9CWgN7KUgsSj",
  "key28": "3m8wycqEZ1UiDNJ1r5XPC4q2EQdNo1wp8Cp6gyYBtWWT224MGKhgBTdEJ9TkjmVWQWCPt3XDnXfLVcHPmNvq5GUK",
  "key29": "2JuLGqdy89J3KtDUqc6SyBdGA8ayEYsZrBQCCsRdRSYNDZEhw3YCPRGNr14B1PzY7sS3QzaW8xUUT7HshdtLE6Fu",
  "key30": "48MSbUJhnvxwfSkKurmXUExDYpQKit8DcEjSAv5MRvvDHBE9uBfuvYDLGb5yuEbfiGEQFopBdPBNg4oUTbVPzxQX",
  "key31": "6653EwoN5CR8K3NVDbrxTzDYiAWWGvGAntNHJjgqUmFK8s21nHkbNg2X8D7bi1547FiTsAA2453HjvAsStrd5E3x",
  "key32": "gGvvjZSkP2YzcubBoXTmPGbUGoqcCJjAE8aZFzFxPJeQABuNTF8crJoJXmNFUHmmxn5cL9PzCzY5epoKgEtn4z7",
  "key33": "3W5h7mLr1JBTJQq5C1xZqWYBL1pfC6BhRWoptYkxwJZQ99SPJ7rthTgPUyuP7F45Z4QDzJQ5qntJp4NHPP5bTSHu",
  "key34": "35MAhkS6UKqhN9qARFjv6ryho3qetBXM7JMazFFaVo4PM1G1FyqCVguRkzghd3fgRdMAQf1GwMohv3vfkmc2hzqc",
  "key35": "4sVDiGSkzKfujSDSsg7JHpusaryh2NbhZW2YKid17q5RccsGqJgANaB4F9Ld28XDGLeBBZL18beNBjzmVzfEcCBg",
  "key36": "3PF4ZXdSAoLYakRWJ27vdWuX7zjcuFmmJen7Bi7TgGg8iA7FuUnEvsgmzL2z3XNsEraBMu9EMr2WeR8hKeg7WMa4",
  "key37": "2Uh3xgwEaQ9Q1ytgCA22RHYT9XKPd3nfPHkXMER6WThY7mStmV3ZjcWGGCitXZrVSQWCFgxu2HcWhaBUW3phhc1J",
  "key38": "2UuN55iWwbrJ9LDTEUXymthRuNj2vh7cu9YUDRB95Z3eSkQttmFH6axwEy5xdGADxpHwVhNoEak3Ld1U3dxEwsyr",
  "key39": "5sVk96e4aJUNsawTPfT9CcLm2PG7iFLZaJmuZEBkkUZkjKoxopGR4r3X6xWTcYSxDU67RtQ3FBJujz5dx596XDr7",
  "key40": "2x363aCdkNVnWTxGxDopV1b1qMMP4f8raeFMsP1K5Svmx7nRwDJ8forH93kj7xAKzF1cq2J1NvzcoN4cYkP9jWe4"
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
