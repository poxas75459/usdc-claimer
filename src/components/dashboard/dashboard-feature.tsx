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
    "5s6GHjeqLBSajCdDbd2N3iLUgbQhnXyen6qTcg8LbKs3qFvdPBBhFsFWA8xWBdGXKJP8Ri4ZVpganj78EpSukgQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vyuv4ERMz5EKHewRUTq646UQk9VXs7XSJkuHRyo7p5XhGxAovv1K8RzVjHwHS6xq6dVmU3js6db4tXEfV4dE4h",
  "key1": "4AgGsU2vgEPYthFSS1EemZmQZJEZmkNpUUZLdQsjYY738ipQrr4qBNFYQzsLrvyYbfoFQWJHqU5vx5LUXeFEvvSU",
  "key2": "qWeqGAqvZXvrqy8LyUixJRN1geFRtYrFewEGW6q8bURqcAcCb94SRMnxEF9Ewps4MU9aBdaBDuwzgGVHrBj77zB",
  "key3": "2535R93Wk4NRtaxJpg9m6aSa68L5eWkmuwpMbhLTB2et2haSurJwQ3vdNHrvy5GJZMzH7zehd4hpp4syNkkbNXGk",
  "key4": "3z4yyMpEM8E4jFf4magce2f8CZyWwBdtthrHybenGDxiEJZPF5yZt5aBy5WiVCebMvzXt7aqyU4LYqQDRmFSPhXX",
  "key5": "3817wTA2khSkqVQRBpJdD5tXDBbnZakQU9bt8NsWMuQCN7C3H3LvU6R3M45e6L6ggMZQ5skkNAjAVetP1m7PpR4x",
  "key6": "4b59jwoVQHVK5pj6Txs9JHsosPioe3vFTcp1MDNuqRVHr6rFPidVpcwsoiDCpL5gdG1vH2j13etxXUNZfUvHToTH",
  "key7": "dr2dCS8x65VSNvbuTpuu98PXcTDQfstD375teMdAd5znxJV9Rm3oJFQ5t33KafqBrjJeeVcY3aKFHGq15MBRvhA",
  "key8": "2j6q9jGZyMBcLEaeGkJfHnCQhVmKSKN89KvUk485TY5ZaraqPchmivM6K9tSPKEv849AUPN9A75Xwr4Z9esVVXzi",
  "key9": "3PRiKrVps6UPKjjgnpNr9nVJJhY2MBykYQLggS91wLGd6f7nyz82yCjP5LcchkR3oToSxHX6Pnwx4LBc3Mzk9T6m",
  "key10": "4Tye26XRTdmYMTYk74xaCFtdy3JPso67KrxoLgEwwZTjxE6nHoYGERcCNL7uan4gmt1xG2RhRmPbF1VgLu1iUA8G",
  "key11": "iwPneLYFTvbfSY6C5GUiWrJ2Nz41HcB21wwnM1vXGduuDdvfT1TZc4EggAP2hPoTAMngKjpL98gne6AswpwN4wE",
  "key12": "2XqRhoHf9kxt3Qh3YUR5kSqWYQWnZ9E6cauS74K7URT1VSvuoXTZxLKZWCNvkU6HPfnCxJV2SdbkoCs3MfMjMcg2",
  "key13": "2ZX6aSqV81TCgpVWDGMgTaYxWmEpyU1z5MTDKUq3VkCgYgbiYyYacMAK2dkRgfcQZ3JQeKyEuRWreX71q8bjfGY8",
  "key14": "5nQNTfsB87WDrmJvJRGKj1ot4RjwU2ehyCqCtK5XghC5oePZ7rvfXWAFbVLLTHVD3QUb9RgJApomKgbNaDNJiDL8",
  "key15": "4311Sa52obaex854taSGkXKdchopstt7D1Y4kEWY9eV1947gWzfnYJH4zSsBNQcYcbsEANeWnpBLXjnnqkJ4LoAx",
  "key16": "5W6QxiiNRc4bi1L5jwJiFUvriJKRHnqKJGfyuCxz9QYHq1nGwipuqNHL4jS9mmzgtcDXM9fSygKYCfvgXnWLvbsG",
  "key17": "tJMHPa9t3LDH6aZS7yeJvUatfsYRRyqyHDpAqdHBNo9x8dUrG9toiSVyT97ntGfXufntTPscwxPY4w53K1p5h74",
  "key18": "29o1eE8Xn2gCJguWCeDwDiRDJCwz53NhH2Fk7vd7BouxAYGoDqwBUYmdQbfkXhPRybsfwX9YkeiVeaWPJyafdWKP",
  "key19": "36z5skUbbqc82S3SopXRe7WUkRHjRTgUDGxnqsh3dMa2gpNc4qFNM3cAnuDV4oM4Z4j1sibEL8g1qCaZPyn8uC15",
  "key20": "3kRgUtN3JNK4h9hyV3iqBcgtTo8fisatQnJgLgmc5ALDKWeF8j9QBWpRFv38sf2u3YiASbiiwc823nEtnerZdMxb",
  "key21": "2JmuDeCrpvFKanBKkY2DdFWiC3JJVwdhh94DhCi4CHL8nvLLYTHn32gKvCSYpFwagghykmXwnR57xP9yh9cmrsjG",
  "key22": "A8QEvVUsqq81hbhrZASErksGk8LSt2qWR8zPeU4C28o9xTPduMyeA3hf5RdYHy5DSdF66NS42hiMU3LUwtKraWh",
  "key23": "2bgzfNb487s2kSeDFPs2bMfM41N8kQN9pvJViWt1Z7rFooYcg8U24jFiXcFZBmKG5XRbRccv7jmpmWTguFnf2r2b",
  "key24": "4w9ixUKPBac4yRcshTGZJYN66F917JmkHyTzc5KJWVH3pDe99UxuBhvXBgPLbCnqX1r1JB5oXgqQsz8h3d5xs6rw",
  "key25": "4owxfCHNRBzfqgxxhS4hRKZnzKuy2gTEArXLcbwAvyKrEhHz5ovnjhWwAsrLytMRr5UFGeLfW1mHU1mbpxoQdMwR",
  "key26": "5n4kT1fAXyszT3c8F4LheYeoEG2KujV3CZ7W1R1fYXqHVXGaE3cqkCjzHribf9WYHSyBvAQ2Jn1s9SMCgQPqDKNF",
  "key27": "2Yj856BQrSm41aKuyFuzUMfr1iABsms4AxnCRYtxe4z76eiBFsi5VP9W4FPnUjrsnzau93Ubqn7FRxPize6KsMS",
  "key28": "GnHytBd48GE62quxBK64BMcXExrSVy78hRedpwtMXEiFoHZKBTWh7LRJJL8pPKZ9EKeHdhttarPvwiMq9LDrLpG",
  "key29": "dUi8iUMK8VASaosbkP4UorwA4xxw1YRnAMdPGv6xCSHfWsySbGxz1Vg1GuUkcBLr6vVVBDwKnVxGgCf9GHAnCHU",
  "key30": "2xKiyNggkR9SNFgxhcsaxwUUkYRovQqH7tdNf9swC4Be3xwM9UYaEekrWARRxSYUnjRSok8ekuxYb1UKXt9MzCYz",
  "key31": "UNQNvbLRudL7ypHx2mjbpeYdEpzEQJCQfHrhf2ybZWVNZ3RVeZ6QHN8ickotZ4HQkidDiz8E4L7bqjDwF6394r8",
  "key32": "2RjURHbhi33T2Bzap6XNhQAshJktasSNZVG1pyPsF2M3XNj8TS73gn3dh4T2AeZBHNZEe6p1djcvGgsNcvg1aXRC",
  "key33": "2tk2A7zwxqgLm6WEKqKRPpqexPeAxMFDxe7B7mVzfQRbC6Wej7htBqoy6gYNQEGoE26eFTYw2u9H45DFKTzRUFLy"
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
