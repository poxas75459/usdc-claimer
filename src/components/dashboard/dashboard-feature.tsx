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
    "XxwZCiGTxa81RBCtNMGreZAYpo9ZGHQD4m4FrMYkiyY3MsxVyR9uBuGoo2ALyDRZfWVJbfmKip7THPfHPFGWhdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oBsWWUXT2SRRw5nLmvNZSe2ym92LjeTCrvDdxPVjMxjEp6JfSQrWB7x6js32oGKL66eXERyueB8JsGMftT3vU5m",
  "key1": "2e3wYAo6VTANrAojCqrpbGSA1VFTkM1KGFySUqwX2ttJoYoou6QLJD3iPPMGtp6fYUceX8HPnWAp1pHPnZinuh8u",
  "key2": "4bxcJ5oHHXuZaZVCQ6U2BvNSKThE5qDkKC12UuQRZJtGdCGm1F8H4hfpFi1EqaawXznykk2d9SsGj7T5etkKq6Cg",
  "key3": "4mHhVWLYsTkKBehVwfv2gpcQmakeG4Fqo8hJuMFJAMAqaHBfFZePwu2TzPtEswrEuMxG1ChgEaJed5geSh6exvHf",
  "key4": "3f5QmKEe5GkKCBkcibRordhhHFezBYYnkWn2PCJc57VkZ2e8HZK7DTNv7zyui6bYiJ2nHtYxprPsFzt97o2ZpBko",
  "key5": "65pAKwAgnZfcaVst55p3q7oCssCFfH3DwyKMqBmLR9peXxnRjFnP5wf9rek9csV1xduUPDtCsA77BUThCg2GGkxe",
  "key6": "wtEkftUBaWCaEUN7AN3NYqKjbigahFo1uQgwRQQ7ropizgh2g6r9MiTxq2sFq43qR2DGdo1EenRj73snS7NPk4H",
  "key7": "5XWTnfdpuHmGSocxkte1UbaCRKVsP63kSxHyJfH825L954fyPNdVUXAXT1MtJTbJLCN7odnTfzxNWJBN7DTMaDf1",
  "key8": "3kJCk8C2iyMzkAwWq1RVmKDMmEmtzHHVY5tDqXyucup8V9YXeCJcz6ejQp9ytpQJMTUQAGa4eiNeNYKepZYJwXLq",
  "key9": "3qcxez2KM2PmXY43TRkHAFpgZKatLJNhJLg652ASQX1jYiAtMonkpSet1gM6HQyLpnSZKYSyWdQAr9gWv9snxaM7",
  "key10": "5E2oG196R8VtCTfpWFGyqtS84LRMHqAWgS4D4jAGjyWBABxvkc7qCc9UjQYKQwhKVVwSdPxhkrKHjR1EeiWq3Nuz",
  "key11": "2KXh1mCHAAWGjLcZGH8gBTAPnL41ysWMRy9Ts8NrT28Vaig9xK6KMCUfQAbp1tsSt9EkJuaDXDTEV99evFoqrawx",
  "key12": "4J6kZeDCqRaTojoHP6SrW7ksbQ9gEffoZS8Sn1T2pKgpAzCCR79g3yfRSesF2RLn4VdtAVAb4x1mFAXxaY8GGSbd",
  "key13": "5u1syJAmYDKHv6573gUt2GYf4gvUfhN6g5w7LcfvTkYhtmpiTUF2MKk31Gc1nxG2ck8ALkLprknraxvhEFAgRtaG",
  "key14": "5uTcP7KvgtSEZjHcBvH7mWxV478Uz2FPgRtrEW5mMTYP32xrCipHAW6UnvNz3WMySFzQdvfawsuKcXhJCHL9KUSm",
  "key15": "4gd18kVhsmhdovd9r5KBoJKgZL8b2XcJGd9iwKTHqezccXJcP3CRvYvK7VLHvSdb92JsJEZdAhu6p2bW5fj7t5B2",
  "key16": "67D9iRt1iGa9EXzGzMwQzC4v7ZM69pLnps4dJGVaJSBeqhDRvmbFcSmwe5pGfE5CSffpc1dbaoCjqHsKSdY5oWhq",
  "key17": "5t6E2YDyYYtc6611jByw5JSCkNdkRCzQ4MhzRcKyUjWPge7RWKiaNq6baF9woLNdRHPczHcJNFQjwicncVmpBo4j",
  "key18": "3F6A6eWS4874xhZJiYpc22PGsHpDgs4qZ9sJZ4hLZXPwkfNeyowwUVCUeupVQxWyTYa8J4aDmV8CS2BwZ2AWdaVP",
  "key19": "5syQ2gW1qSLCtqewCnQ1o7V4uzvY5qhezVGb8fxzeVSjZYFqEHbcDrVGeb2MHK7Ey2RWF6PKNc8vtahHJL1GXJ9W",
  "key20": "4hohyv3HSCNmQitw7NyZForNeYzu8KvR7f2vFb52MwtR2ytKyMra63DqT8LuTd7Fk3FRT9vMDBs4htYaA6KGBP7w",
  "key21": "mV1q1EunvevvY3CU8dKcMJYtgfv1cRWiQyhJApHrwfGsN3ZbDX1TEaAYmV1Wm9hirh3LEsNJ3sVje6mSRmt7gsV",
  "key22": "2bximzbxHDrm9udHZnZzx1tSStYgzfi8pMrtwS8hMz2HiS9cvayGwE6UuAh9yn7QiD6yjU7Cf53ydYer3ZSL39VR",
  "key23": "5KhJdPyno2hg1UWuq5DRZNYm62LZoQjWRjQdv2Tu84WZBbz6U2kZWvAbaNA7MZPgf6cik7NokWjaPrzoSPVJDXLX",
  "key24": "2mWXZvGnk4L7Dk82WV8ffsfCTeWCUVncbNCmwA2t32je28ZfpvTT6B3R8RnqDhePFChnLVmzeyJgFeiQZN4Fqm2R",
  "key25": "5ejtWtBeKAZVynPdfSekJUzvcjXzhrwsAQh193pJLT947pBq731umUqyXyGkTnFis5yMcjp8neDMzV1y1VnTECn8",
  "key26": "ixnWwwsLNgBeBjCzw5JkpDR6PBNHDTLGB74pEsJMMki7KS5QqxwxuuXtFnb3gixmqEMnUznt6t1s5CcYnQLZcFd",
  "key27": "3VeG1atxfCibtH4iRgmT9NPkJSSwKQEae6bGnjcuttsH4KWfS1TixJsHdeVV8XzJLHHSFFBbwmY9ARAfXYa7j586",
  "key28": "5W6J4mYe9EmBtEnqHsrDqFzkhmJK1hngTFkqh3S5Xbyv2LiRXqtUsaYz5pRSDEd1Xymx9Yeye77QPH9xCdFTStqk",
  "key29": "3acWqDyBGgf4R8RAH3NvjJm7nHUzXxEPL1aqVvyEx3DhcNQdHuy8mrmYrkydbLyApZu7kGzHSc5ycRCqgq4HHimG"
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
