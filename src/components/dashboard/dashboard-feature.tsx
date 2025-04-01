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
    "5rmZSC32bjEZqqMkzz9EFX8Nx2D7CLfenH7s7fgC8JpgMJBZHWau9Bm3ATwyj9o6FZJEbPuwDecHAWchBoNfNJ7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FwF2ATB2pJWmpe8HKBDzqNh1nPfzutWuX2SDSE8APs69utEGn5bExSjjbNgqnCTrv7WkAgUVQp9jgWkAQc8zJV7",
  "key1": "64gLxYkB9z9fsLzUd8N9xpfBJrJj4zorNTcPV29mSzfk5PKCdnSMrLpUooHrjzMfKbw8ZjHZ2gki5p7RLuURJQ8S",
  "key2": "3h2jecAQVqYZHyfctguG6yVkHu9vc4smgAgnjZDkvg9Y76myoBKVzrkKjQUz1EdYG1fUBABUAGEZkSLzEnTfLnfT",
  "key3": "MvZyA3fyREjKPwjmHSqaw9gnWvt5MpVYCtBg9LX1C6N9mqGDq36Q9KJvHouf6LG8n3SjCkb21ceYYVq636rY6Pw",
  "key4": "21APxJVDY5XsdjjcwykoAukrZ3d5craV9PzjvSavj5DLXrLoMXKmyY912gExKxLCNF5juFwoDT7ZeHySTXCPjCUF",
  "key5": "3BcD2t6P9o16XNKRg1v4XmJagd4PkoJBAhkhJgkPBaQEDzsyPtxYNUqyeQBaMbnXQhWihRLRFNMbKYxdh1cPTnvC",
  "key6": "6bVsELK85KZNef6FLmbXTFiup4x6kZH7ZLMMzYu4wQbF9ZaxJRmRk1mVw4tjJzSbx2vMNYLsSwVERcz1ZdsVqnJ",
  "key7": "344hqLZq81JmDKtX9xRsDpegxCApZJm9fLwnq8kVJo1CUjs3EF8SCWjFR7a2Kxt8Mya3Zpfd7yH1Z5nGK9rEoc6t",
  "key8": "3NkdYutSeknjwBoGRrdPbDWmKQxEtNHcKH7xPSQvPs9LuCZ81RHtDDGNyjQuqDhRrHLzKmQtZbUrbXP7dgg26zFh",
  "key9": "3rUwNDPY38VDoGa79AwNHKt7JDZCcr8NwMgfKCdo7fTRrrBUmoXLPkjv7T36WG3swsK9Wwrvaxd7Th3MTpdsims6",
  "key10": "3g3wFMNaFgHkTKxFUM5Xoxe3i4TGEx7r44XxHDGaywHKbPn2KWCHv1uoUikpUDaTwPwirFGooUydudTRh5uTevND",
  "key11": "2aCCC9ygLPaC1CRQEdwkhCMcju5u7Uiqq9XugJXSQiUG92UmVMiyPiUoKe6P6FmaWeKjJeCUzHW5BXyXKjBzmCZx",
  "key12": "3EbAZnrRAKjEJsHAPmsuASFvGjG64oZyURUDasXmYM3ko4AxsrzGXq58v5KUstutHotgHKnFpsugKTK9oLuWUUmu",
  "key13": "48eYXcemHdmC36FdrkCQ7xEZvbeFAenAHFNk1iTY1om4JfqndkwKh29v4RGk7N4UYgrNukCfkYq8TDCtJ5qwS1xv",
  "key14": "32qyPiYvvrecDhQ9GH7ywHStaKmuhnJVMxHJhpjQ5vqcwEq2PNFraoX8vwf4kkcPBFVabUS2NzNw1ArcwVS2b3VE",
  "key15": "6WP2WR14phycQfheMqAtTwJ2nMhJowUihN39wx1LZktknX4zDstrFqsNTkozWC8BCGmy2XzHDMF6QNSAJ7B5CTT",
  "key16": "4kK5Hb83PH94uDKeyBNvx4Ud2L1ziTgz5QYpHDYyeURYt2RXEWQxywiuwWscENfeZEZBbqeFrdaTNLbtNFv6uP9r",
  "key17": "4Kau5hSQeRvDeo1XnuZcAnLvfu4FpKLkjkC3tiXdgzCue4cVsQb9ZW43eXE2zPLYJr65jGNEXhksvC4FDqLcGdZv",
  "key18": "5wqL4C7ajQ6ZNcAeXARpNkrVDDoidiBVgw9dHAxqZt7EhYbrSxHNNo51Yc5henPFDuQ7pWAxS4KEeHcrbg3HrjBy",
  "key19": "mECVq1EHHqXyQ6QoFtSwXgFoZTngkbYLGyenQxNKLsT1TMzgH4DNdrZ82u6rQJVGVqfMvgnR5aJEAE35VwhXQjF",
  "key20": "msbpqh5V8UXvzZ8S6thpRLwtmeaHyKzzqjGkRMiAe4b8WgK2vr2BrQsVBWUponcq1wFiBRoQKRUiGR84Zk1dJYd",
  "key21": "44f7Y77vNMWzy9AYYp3xygFoyQu9cNB1mBu7nzfhsggXHBhaHLbKXG5AHDv9Z8etMpRAdQ8mvaokAjfTRgPtsRiD",
  "key22": "37SmKtuwjvMFi2vBp3gXtYUVhQqY3dNUs1ofb8KVxikr4WCgJw6cSvgGe8qFFdFhR7sTAqWL6mvumhHXmDq7VQUs",
  "key23": "4jKb2yhoyAvYYNntRa8h4RkxNW4gER91FR1nEGKJWfvGSy47xRDu2d4yiMzSoiq7ghzZbt2Bbirm3oyHGjLMnnfs",
  "key24": "3LadRQpumZvLj6BvuRFvBJssa43S35Q7snGhvRArDXC7vJ3CRpMMsM26N43FFwucHzrP4CeWjPbRoBLbYGke54mc",
  "key25": "2y7QSUNES3pJ6VEYMmCb2cqaqbbUXadPtHKKoLku6H6mXRR2SpxDPP5ByUYxzPHxeCeQw5AVn26WTxUmCKzWhWDT",
  "key26": "4G9jyyrKxhp77aR4UBAtPTMxwtka6xzbXuaJKLAdwF8P1uhJ26yD2TBGG5eoHQEpZZExHNWG7RK5o3WBXnr8yU11",
  "key27": "2nwPiiJun5CCvy3AkaDmgZRxkGLKzjJUtwtTnZE2qs1YkQAprXZpoTJt2eRh7RUPP1xfquLzzuKdfQNRtFDLUND8",
  "key28": "3kgjaG8NhpbEqgGzv35KiNvXKB3dTq8SV63bTe185yEnrk5E3QEJjw2XMh766YGxYVgtTmBUn1EFXMgnMRCfPxr8"
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
