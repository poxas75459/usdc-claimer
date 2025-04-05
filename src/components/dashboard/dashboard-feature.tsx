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
    "3qn5Cb9MM8Qo1Lfc95gc41opZwoWmxxi4D6A76KTbwb9bF31nHw4u1rbYbzLm6iaSYbGDNQg3T1L5Y9xKUNuTrbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCdB7irFsQqaE4WmTGyDH5WFUGJfrYGFnkfM6Evg9gwATNRBVi1rw3N5nYbMMBosSkozPGJGkoYuCVwsDd3RVVU",
  "key1": "4GXJidnkXhP13NKBJtC5xowAYgy5MhBRHEC5jNqG9ChWmoWnQHWFZpaA5rZJZGDoMAg64Bygp7vaTLKfi6BAPBe3",
  "key2": "5W2kgiFBey6pqWQkxYqDkrWWvNSsWozC3q4zE5TNqHfZzHBA3emAWrNptkAezBPcSa1ohneVKKyUz7bouutE534r",
  "key3": "4TV7sDyykedoPQMjXS2PLhHKKEQQLrHUywNK4DmiEiApDNUhifCYJZ3hiQkvsjjkRt3V9dQCiTPzBXSSa4XvKNeT",
  "key4": "5jWWjKdM8WeQsVfpekjTgHTCU7xtQMzUZfQaRHS9GBzhy4keFnCUemwRBJYmDrgcy8sWu4J5JM5kaXYJV3Zf6q7Y",
  "key5": "4GikxLeV1XwCW869q4uGSs6ozZ7VwTJwXAS7vSqwLLWuCigsXmZ8DcJFZWVPyF2DX22zy1Nn3TihHJRL824NeLwW",
  "key6": "3BDLGbDro2pzzuif1ZDPcHD5rrJnMC9C9SQGYYoe2xD4axAsHs5GVuNYQPqJEDbmccEbqDH24zTuYGyaJLzBMYZ6",
  "key7": "62GcfVaPBZm2MEFYkTyatapBUK6ivHqAmzdbDmX2XrWXJgKcv4DTXz3ur5cGQFbMhmtiYuQUuAdhFtFaCgbeREPL",
  "key8": "2w6YcaFUgUxhQYvVwZYsqM9qUrhqqNQPE3TzvdHQyjpaFXKDQ4iqvNiLphNXMtMXYN9CreaJLjmWz8WCN42Lhk6S",
  "key9": "4LAyVD6NW5PvuuqJboBqHDbkycL8Lk4P3h8y4rNQyGcCS8agszB3AF3EH2o7NXkoGvoh9hsYew8MCFpie6M62y7a",
  "key10": "aB8wd79m4wnwev7mHNW1n4ReGKk9gZQUJfwEWhBTKyS9va2JFKjMej4bZEVaGPzKsyUoCJYX8mqqAgfRhrhkcWx",
  "key11": "45UncfWNQY7RkHKR6FRXVitg61ot3jDpWsRiKsiFXCXVYGRTxxBkN4MQPMggJmBhL8kTP4a1apZtByiTinNf9DTh",
  "key12": "3VHvAoyrokh63k9ZX1bhnvsWTsQXuLqRK7FGKecm6X7DNTnvH1kVe2UaPH9Sz7pFViqGeVrMv95XrSdmAEvP7rQA",
  "key13": "2AQuZnbceqSfAAG5bWFxccPQRb8SPZJhhnUh3dj3oJrw7Xme9XtVUSN9NsbLLiQtz3VeU4sxF3zxqsRd3m7LxvMN",
  "key14": "44uFCVrDXAPKUEe7g559QyW2sCqjVEQSD4wArT33pbZZtZcia4ZpbZJ1MiYgYpvMbWW1eWB3kq3gBepeTMH2PbAP",
  "key15": "3rikANof7JFJvq4xhfC3iHVdbzgTNXHRTsDobWztxDA3cVRaSguCSYLLeExJLv4qBEJxo5nuVAJHqz5jGjwJ8DRZ",
  "key16": "5t7fjvvegXuFDojCQaXiqdNFtF6s4j3tqCxRFbiaRftBRk7x2PS23UYxnBVpqE46zBbNCaBgUGFrcKSyazS3Rne9",
  "key17": "2eBG6p76yBQd2Bc6YWEkGG268FWfu2q3v48k8p33YCoDS6ApA3rS44EarbmY2YZX7ATRQHRTg99qiTmKsQKRohHH",
  "key18": "o2QrQdXpmpTMDWVbStxNQwP8dQpfJUbc9JEdgVJvhKyYaXEcWrq1bmj839cHxay6EEMU1xsav8iju3aiA4ssc2y",
  "key19": "3PYaZpDrXSoEG52udst5AuTAw4Q2NM5tPZurkpy6Pt4KXYBntML5kJymiBazpvGLMcBN4ec97iPRMQ8KiNkeQ5iQ",
  "key20": "3RLDfCUQesjao32MeKaxm9tuHCC466k5SnaH2VfnnsBFuWyqGJJ6EPYw3xVUa18RRUR7SsekPt533CDGhrSPTH99",
  "key21": "3t5rVuNsGBsSAZ53kRMATpFw2ok4zGtBQ4pLWFVv45Paq7ge1Dt43EbgaaUS5zGVZuTqqwUdFP7u635YsUfJmkk",
  "key22": "NyaY6zpXZRnxPe6KvToLG8hBGEA6VUQa6pRxYd8qntpPKrnALiTQRa2imK4vf8U6xEFyHaRJ2KrLf4mDsJZDqy8",
  "key23": "5gg2ybhbiH1ubqRiEJYxict5yx2AEF4qo9m81D82cnrL1nVEy82MdfVg4finDAcoeGicjcUGUMMgcK4eRojVH8fS",
  "key24": "33QGBSHj5zERf7x4Gga7icjuseSR2GWV7rCCynWhBA2iyA9C8LDLN5VzqJ7o9zZ93FiMYAS5VAdUSUFeYc1JdZnQ",
  "key25": "549HMzz1TFbFr7JCUn4rjSweRU8NtFZGnovwCwj2nBA44a5tvmzEMffsVvNN3YxjQJWJGhP7F3CzT7EXBtq9hvQx"
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
