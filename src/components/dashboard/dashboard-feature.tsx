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
    "5yj3EE52w8acKLTDMWdNiMBaX9zFEKjiktVXRnXWsYvruU8ZxVLQovtMGPi8YaLZWFTYPdxmBmrW6m5rNghVtvZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gB5iSUjUHskNWuZw1gPd4cTfmYWqJrZ9x42bh7QoqhybHyT7jFNiMDed5xCxbXWLuKsVBPUBZYEkFZcTZU1pq4R",
  "key1": "NQaGyZN2ot8MJJQqTfcK2k9ZuMUnmNr3ftkS6kRmNe38cjAm8CuXqhGmgcBp32QLzjdZYhW7F6nNgreVrJX5HLs",
  "key2": "5qRFmkyB3hZKk2EWJJLN26gKcndKkACeZpMLEQUrW8oWhNaLnqM3C6XCW4iWw1CjXW1Ka9d2Hv6GCX1dsDh6V7iD",
  "key3": "3Cm2g5dZFBubop9JVqUXxfGGZqhtaXUhffbBms71n7kprKMgp8E9HA2AHhnMzGvcodxbPkCrNBoEpAKRhYz4qMcz",
  "key4": "2qdNTzWGDu7XZ87BSSdSgcCxjABFnGJ9r3RPC1cGx2bSoF6SA8acNhH2zYR4hFYhSCPoBkiVaSwTWKFs8JbMoLVe",
  "key5": "3pRHf4k1doxMCbxUicTZjcYMMtyikXWAGCTjUQfb839QpHf3gUMNqhWrH23Tu88ppWtGT5tkCwRmayAMAU3351Zv",
  "key6": "5fksT4VVMV8p8GziZ43gVsbbsxEPbyAjoquLmjTgtBtDZ9NvW8NTNz4YXuKAbnt9xxjrpvRb8VDRhAFcbby5Sb9h",
  "key7": "4VTCC6KLPcUN1656yz5yiWXjJHiHsHGmQax9cspYm5qRAnpj5fdiHjcAsLwF4KuGoFSrpjhEE47iBePfj5reqri2",
  "key8": "3p6bWEPkYFVPnWM37NMs7XGD8AvKxEnL2jHVRBg1gmUi8JFuReAFKC8v3m1SGz37zzLrHX9BBx4e2pTE4nTwUExF",
  "key9": "3wehafNpv3TiwWkUdmhX2zZJYMbMNEoPSfNiDK1m4UJZTcCGxpRTYacGwQqzxoZ4YKAPh41UkcK8Y6cMvM6YsYY9",
  "key10": "3PPDkphgqqxM1Bt1sVfeihkt4Qq5XyJXY38Qdacjjd19DybCPgpa5THY7LjjKmosRNvmF7QADTuYR979jxLP2Rcd",
  "key11": "4ooNH6mh3GztRG9Bqhr3poM6xkprfVR32U6zKzEB5WhSzytZEJJcDEHCR6ncphhVDpYuY1Y6nHKLi9sEXRGqZvhz",
  "key12": "2Gxt1xDpwCzZejFbwd1xn8f92mXjvW25KW1L4LzFYC52wKrZfWhj75eY16LomCNzSTpA1mBV41cjhyYAgUBUpVrx",
  "key13": "vmkCTufvGZ5d3scyZcaV1RzzjwzGNMfYYQ9iFFNTYjU8PdLetj6DuU3j5eeWgepnjwqZxzcifWTPYA63S871WWz",
  "key14": "5ccaCTqQa6VWWhdMWi7GPX1eUuNLR7m5mczVpfcjvnnogPdwZuKQ5j5QWCS35EXaU582U1R2MTfptx2xJC4LSmUr",
  "key15": "kDxDw45TE1Etc5VNobZHjr7b82PKA59EkaPK4erwfmaSqvooGEHZMweq8xXR2HeEsZboN4hGtuiPEEZw3UH8uop",
  "key16": "2pi1qoSfo8SYBAxKBkZAwfangfzWzDhkMAGbbY46cjra5p1DfANXB6GYakoL335NBQ49SqntoPnjv6xwuMtF61NU",
  "key17": "1fedzqon7Sa37J6DDqKjfdbypUh8jAkXe7HNKhKVHCMyNSPkF7N83n63wvmoLcrvmycstL3EMPpqCD1xdR5Y2me",
  "key18": "57gKgEWMb1UeQVAdYAQNK5xDbGZkYwE3S7a7zca7K67uDUU4DLWKu7FYsUr3oJDr1YmEwjrfv89pqrG8h8NbMyKp",
  "key19": "35GBc46tGcLrM6cAknHR7YRsmNEg67LDtntxZqSMn5epWFegyhF78TiBgp4dPoJkteWKtn72rYah4pHuidi6DpBa",
  "key20": "5DRYNo9ckmpvxjvNBhwX7BrEiE4hUuPptMF6kkBf9vq3gMRTo7fBTerYfHktVw7WEuo9UTv15BmumRh9C5B1FPaK",
  "key21": "2jL4jHPYcsmZhGwQPtQbuP85yngxB7FQ8P3k5oK7d5NLJHL94QZVjSoh7K1VkDs3TjXdTonuhpC7LkypSXsEkp66",
  "key22": "3tz3kmdP9ZyhXosGEZyWrsb27QWVhZ7yHh2E16a8putXLJxMh3j4jf2kH3UtactfBj3kdz2sDrX7javQdbd4n1rm",
  "key23": "5MsmHGYhDFHbrxHhs16p3JMXrC987BtFjYvBUmHFPsWH5rheYtigG7UFUVNRLTYPYn98jcWSWbubqgsG6pCmPTke",
  "key24": "hH1Pte5qXFi9Y3rb81KEiRsKtrhfBW7j4hSdw4K61crJVxuUBZ44aJSQBUF1qi5Q7Cr37DFBomnUpNCzJZkfqmo",
  "key25": "4rYjnZ7sjTA8MFycbcXcrnH7658RQwNTb3huFP5D5jN7vGXRnepfVwa8JywJxiDoazKzMJ7ycEadbNfUoKuMy8vZ",
  "key26": "42WekbPedHuTy3EVc4aPt1jPiT1qaHvpoMCtEQEn89RAMYikz1opmmocPLrohMwzUgJDbpRBj4jwwixVbactxEL6",
  "key27": "24De3om1RWFD44U5Yqvw9SVuHTUFXLVYhQ5HQ1fEkFmCpaePLxJxUZadANdQDuxWTBoJ1uraZtE78iD9T5WfGtD9"
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
