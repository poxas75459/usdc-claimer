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
    "yEJTG6DNQkRpjPxv61xjkJ1jGCBTX3njs8tFhcVuQvqV4TtHHxK6YqGPr9S1TGpCszc1oFX4hD7mtUYitZJMhoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AiTDRxpBqqAeapsRe8tEztjaBGhmxaR4cNYL16Ku4Fow4kqjrBTQwazVXTqGu2ayY5yKBQPRhQZUTHUiZXeuxsa",
  "key1": "3XxRY2BpxiHxW6mmY2WAue5mH7eauyBnWRCoqDnz8x4XPoQ9Fbpu1VW9Z6hTeCzoMr9nxFKiC8Hw4CxQxy9bK91",
  "key2": "4Rb43hoKceLk7oCBxzbfrQUsEAS7afqysM7DzV7iZzXdXRhUc4teq3igEjbM2icaNSzhZYQsxdt3UVBososX965P",
  "key3": "27PG2XH5zRXoUscDB6RHRUqrBqiiBK5Ufa4agJCTj7n3tQezLDJ6DuztxpQqX7gqJgFzgDZtBLgSzaXmQWC1GYE8",
  "key4": "5jx2T59JVMG2JXx78TokePCcuzTvCz6wJNxjgSa1xFzocQjH5u32VmijPR8vQAPsXyTTQADMsyLfuAGSeQSLaiA6",
  "key5": "5fZAtydSpoUGkswEi4YG68jKvzumisc8iqAr8RZ11ZKQrXY9HSDbVbCgqCmQybEnC4dkLtbtDbRWsNNpAVjRarWw",
  "key6": "ADpKxMxrmCw9LtzrxfjdjecH1Q2swig6cH6gA1evfXPYQYG1ZqzeACme27NWchRMYtfx3ivoDyQri5q1scvtxuG",
  "key7": "5YreYfwCToiVCkKgibGuxfavFcMPHAAgKnQQroknYo1NcmEfR6cnAvReZnz9d1Wx8rJKNwaa6fj7c8GNWdEeafZP",
  "key8": "4qvF7gnWCCjbsttYAoRUUwAWF4XsayvpYtcbcEPSphhNeeePcxWDGPWYN8jQeZatLbKZaYohAuYRDuWxSK74RZVv",
  "key9": "4uVqvdHKsWaBA51JamjPMcBBydUYdHobwBxnUDHeEmXfLjfE1NK9w2ECBDZYd6Ea1JMfT4cWHextstyRehVZ9EiX",
  "key10": "LSQNnquWeDMpStdSxkTZQ6FMtYsUTENXRmx5hcHjcU6YXzdvrpR9qnwwqRff9g3cvk5yB2uSKCFpQh5oLcuYvuF",
  "key11": "2fmH8msMYetcJhpkoy694RBUTncipxuYnVegWBS32TGvP6F9adXxK5R97HJT1bvxmAT9JTnH3TLjxqSdduZv87aC",
  "key12": "413mJRPRduCC68RLFkLgk1caFT6SYkowQnHMfqSvsibBL66F2HNy4r7GRih6DruPjApCXMpS7SQ3BRzuxnACVYCa",
  "key13": "3CPjTwgiEcEZGugZTWGfJxVeMBrJR4Fowcuo7MSPQzEnLnu6iKVyoX8sV8MFyWkm6MxNNdG1gZs6gAB9Gt6HEhSR",
  "key14": "pQKnZv7ERoD8ghy5ELk2xH4U92QQGsX4dcaDdtWa2Kg2ZWo6Uo3AF9ec6tpQC9KjKeBHt78HQZUfEWyoKzfQ2bF",
  "key15": "Gn6kiuFznaBCEeBaM6dU5a2Pvigv4GofimJE1GLAntk63uWuQMoxHg9U9g5gBXyJZnA92k87pkcetE7xLQE6Hne",
  "key16": "4JtXoKQwQQ9iUd9fQ2Vtsq3v5ybnAWQCzmHdn3XS2KfEp5xhoC2EmnaUkEwNiKDHhVE2d5cL1YRUGKzDjhZtFyxv",
  "key17": "tZCNDz3FP7KBvgccYu7rzJyVPcanxmhFgy3DU3SDtua2LfFyGkjD5aFKhZRtSpwqNmwEC3oQxJgVc33NVsqPKgp",
  "key18": "EaMrKSA99qkbLgQYyA33V1Q5n8mUUeFwUDGcpxt7t5NDtT5gj9Aj4MvdxASw8kYoTVkuNUJ2u2uaKtJaDQJMjjS",
  "key19": "3jNmtKznweFh7pDVqq93EhPJktUy4oNRE3YkRLsWRxrLDmUmnf8Y92akjFD7CAFoWth9htDbbKvVe9ppLQiHuNjd",
  "key20": "j1mfbG4hFzV2hi9WQzyFtQ6vhpv1QkiXUmXHjtwBveVMS6dwWgPvmunw8ycoRjUQ56GoJnRuJ9EDtz22tA6HByU",
  "key21": "kGGUznAuRyovEv3Qi6m9mZGaPToRahdjjQDsJ8tV3REjaCmv4yyB9UHwCfkjuBG658vVZUFT5UpaebKcPpbRZHn",
  "key22": "3MpJzbekSMeTzy6mbRDso7kJp44AHyb9JGr2cpanr1yWjiiRQ89ZFfHeCj4ePiRMaoc4RS176hCYZspVPJAbbwNM",
  "key23": "2QaPJgRsFb4j145MNrpYrGxbdtmYodShkSeVLX8tXS28dm4e84hDSkXVyRAZnBKEAN8VJJhnf2ZFirdf64LGXJiG",
  "key24": "4izHKd7FHQ2VzxdAjMvre7vzCQFGqxkZCzGQrCkF98T9u8VxLrcBLb3Nh4TXywHpYuS8jMrjMnHmjyr3VRSQ3W84",
  "key25": "4kue8oa7BgpQVNmwsMLdwx3YuBPeTsXLwmTG9UXHitiZ1ngnswNFJagYS7ZRWZpLhz7xMipATFJc6Ke4TYRV3F7a",
  "key26": "53d5JevEkuaNxgQUKtH4vND2JGtpEfWbLs4Sp338DHdTs6qMnEw7Zb2jUtd2jzT8VaxF4qxrfU6B6S4JY8itVCff",
  "key27": "5Uv7dxo7n5gRWxHyEbPHReGR79KXydDVkL2QZSFVQ1fwy6bACkgmdYiGdBHvRSYtn36CSdeoxBnP59RnjJG7rgix",
  "key28": "2q3EkGLcL3icWRs4RPjnAL1KGi1ZEyowWGN2QQKGsivzNjygzPT72USbQS7yWfhNXDgaGheeeXUpRtm6YqAXXEfe",
  "key29": "2YDKuPywLeCdXivvhW6GCP9Y4F7fjjyErPuw44wNEwQu7XZEXe6P754LW1pXEsZd73qKmWBL5TV2hhnEw7eCN2fa",
  "key30": "2A3MsrGKKsXaXcASMk1g7JDffu1XvBsQzx8pkKpYYKKBHEmqFSd6ziJsr8CiMmfXoNugTpeN6sq7fr1LwoMDVM3a",
  "key31": "5CptV2ksqd3H4uWU695dYkV8nW2AkEihLnL1cew7nCevfsFCw7YNb3rNn2jQP63GQyQkgtv1sUxmRX1CJUbvtSPx"
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
