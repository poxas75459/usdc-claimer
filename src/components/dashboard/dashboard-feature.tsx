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
    "61YoVBuhgvGjQ1FQepfadgujuupQt48PDEFfeHe4gXKd1PHTXfEi52HKWe6Y1S9db9rsNKCuXyhjAfmoz7pGa5Vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5117myZW6Rczfiuz3W7W8ZoQQRkUeE21dc19Ad9M9xD2q9iw5cQqgGXjDFdCJ9UigRG1zfqCP7Y7np95whdmt3ia",
  "key1": "2UzhXYHbxxPEiSHEMHMmsZ672MyXiU2LEAmMg8waHZtr58Woh9ouCRe6uqN8RKdifPAKtPADnovofxELzzA5AARH",
  "key2": "4shyrrSSQQ3Lzkc1bUUo1HtyEGRUVo4vNFxaNE6Favx9KhQA6WuYJfDEyDNvNmqmu6qtGrfMJNa1Nnkz71ZUVWSi",
  "key3": "42ZxE8bmqmmDfvkbEQjhu1GbUYpxoei4JEtJdnYne8V7hc9j59UFYoNx17ruAqeXSwvP4sTWZtYoWfhjoxU1kMsC",
  "key4": "2JjG3h9448Tnu2JGKc3fb8b3bJ51mxPqSVFe2AnBBE6c9E7FtjVQgL44T3k6yXeP1EwoPjdPbY9kErnozanFvuv",
  "key5": "3Upea5LSjqYAsBoLJudpRCYuYzZCi2PLG1w5nD3N3zB3paWi8Xdc7ZBdJ8bHYrhDwiZ52u8dKK85RZj9bYd6AM5V",
  "key6": "27gEd1CdGVzSRuxNgSdayswRMYA5uaMAz9B8E4P915dnGHNcmQ9geqNqrQ675wQEqEyBA7Lek6NCrtApMB1unG3G",
  "key7": "3v1kZzgSMLucezfg16wrnoJJLSegWNREQuVc22W5nmFMaTpa6Ns5rg7Fvzz81ULMsLaELn2dsVP5qsLPYGAFXqr2",
  "key8": "3jYAnJhmcVLytKZxK4Ni25zY4VwuiFbKrjAvBsptFXSwdsnaCgT8wSA8F9xjZdmPuUNtLEFMBygToHnr4AKgAp6G",
  "key9": "5fbRH1ZE9wo7wDtaNRErL3tS7RMonVcAda1pvVjTxjyV2gFPh6S3wFbfhhgYGbhVjTiQuWaLGnZDPoD8mXcgVceh",
  "key10": "3wGWDW3JCCMS1ZuQMnoGqiENa3B9rG4GXRpTw4vDU35RQGGeDBZfxA4pReyH78n7c5b86dmnRcLbJtMWmL3PQ7wt",
  "key11": "52XVDsA1UNfavMhe5zK7YSFvD5Pm8Y2AAH9T7Xsi5SPepLKwUV1ffGX7BRg2qCq8s5SM65YrwKaoVNnHSM3BNAC1",
  "key12": "4aqa7uoDPWQRkf2cJpTjmgqTSAEyqLwN7iXEDiqhx6niYRjxazKWdv9Kxni78iwGfh4T5xersnJq3cQ9k6LmLiC4",
  "key13": "vDFJ6B5x4sc8z2h3t9ZEf8rQJ7qSqRRBZCyHSbjem7tBMq4gwWomMPMRyjKE3M67PJx7BPLBmm5TVbdFoovGLWX",
  "key14": "GmMvcMRGi5ApJtpCMsjCFkeiWxfyAVKCPjRs1eAtih5s3XvFidDKLc8YLymKXf3Uedicf9qaZB2x7NGyfhFLarx",
  "key15": "5UqL7VbSPGqJiqj19JkdzBh9Z4K9Dt1Ch2J6cxPsp28H68xFyoqhm9KYteM8V9zXSye6RhtKqX1RTeCtA3u4f2kE",
  "key16": "kBGmqQQ8sKRRfs971fGHikuzZNkbw423Hevu1EM2ESdvZW6ANFS78kxB7BvnhhFs4aeHTRmQetb92R88vrohsR2",
  "key17": "uF2Xk1z1SCNRfJYQysp3wB3fraFVcErcs9FnAvMH48adCEGcrhhQw9y8WDkCi96RWmERq1oVtnHpq6ZmibVQ9Cm",
  "key18": "2NhvRDna9Wm3hDNQ3EFAUGuEepLVukqTVsCY6hSPD2dUNhtuEQguvNFsAHvRAZXaRBbNGPaHxdPqAFdL885L1z6g",
  "key19": "5dy7UH2RDuxu6pCjKJ1C8rCdBe3PdsJhdK16Gp5VsWbmiUZ1ryVnfBnTRQfS6KP9X8XUZHuWVbVAGpJAnC9PGRzN",
  "key20": "57WxywgTcLB2fkkUb3NFftbPhmfo62H4aQDpryDo23y718vhi1ZVCqejEA55YymiPHwpBZVPCmS9E2tqEgYNDUBC",
  "key21": "4Sc2PLGNtMCJFJd8onxriwxZV6wcgvNUaoucG4Xw2GXsmUerRY2wNqPDnyqJjX2bAHQyEmqHVqfXxRh3DEjiAfjH",
  "key22": "qPRLiSu8cHtCYR1DHSpHWHTQeBRsLeQVHT9d2Atgn5EtvPHaFjpybgSQV16GnLgVyijxzkXTcrHUx7LitB26Nkr",
  "key23": "23H4TBWGtkAVjUGYjPq9u3pbBefcMEVv7QV2J8acYBb8pYiQqCzRZxjMEXcaCG5MayWjqWGkew9AxqHXxFd9w8Jk",
  "key24": "wKE8u6mZ54hrffMfjBSdYYYFnAL857DpdbwfqkZsj5jX5PeP9ZnKq7ELMtxfzUvLokHfGYf9ru52HMYN2nefvTV",
  "key25": "36MGwLVGigbkza2cShWkMpJjopmpiAic1YkH1xS8xnYvVysJmzPECGtdX86cpX9jA8M5QnACoyqCZurB22br6NnV",
  "key26": "SpBnXf8RQGdxT4ACQftNnfV9nryj3ex7CDaqMQU5ba6jJZGYwXVgfXfN8Gp194Fy6U5qQA9GiJZfABrb5QjWfzm",
  "key27": "2HwozsTQpyYubRxZvwxwnScvStmts7zD4qUNkXxyzWqFu16Z1wfm5cZfH7tnjVaQceTXEv7TAwNVhmiHgXY3cjys",
  "key28": "5w4qhrGmMNKTyZ3DP12rPvvnykRLfDrCJqVrjPNpBvmKD57xzX19AngHxLuCTJL9em7yfyjiFjbdZUn1DyQnQt9b",
  "key29": "41J2froL6eZN9zytxQhUacQk4xrBCBVfckBkiWL52i8NoK2RRE7vUDZAPuV9AdEjwDJHQoUrAd376eiL6ZrY25yS",
  "key30": "57ThbG63Ty3ivqKdB95M6KrcRrW7CUkduKAhX9ZXRXARnveDP2uSgezoaDUELXHuPeSbySKqcZU1E1Uu9q5CSqfR",
  "key31": "3EaRfTfd2LFEzVkhezww2H5GSu2b4AgWtMk6J2RohFKwwCz5ZHVXgTGx6LY6QR2shTv4obufmhtrAiSbCwi2x9Zy",
  "key32": "5D7kWWHX1JAKM5ysKU6QTQm9wYj9fRkWwdNTn5TCaJHadVc9cZvVXEQSqvhiL2qckiWBZaBm9R7BfW5iYXoAu3g6",
  "key33": "63W5FjupfkRVVCZSjLc2A9tA28hmvaAT1tEYChhirgoCq9MNLkjHs1YxjxRKBJiHAgEXrDZ54nXSutMt1M9GihQY",
  "key34": "3mz33fv8jwNqzyUTu4jktx2ZXovCiz8PDnTEmEDVWisazuBxSGM3xkQsywvScB3QNiekp47QLqqTRRfUNTD1F9bi",
  "key35": "4Tv4g8dQuNHUQfQ86BTR2oCJKzQarxWFUQtHy8xzPhVk8UWjWfJZVVZc9bK8Waweha9FTWVjBYWR4zps9UukAxLC",
  "key36": "4M5UaxHB7MTn38AdKYj5JEpGAMjbmwxeDWKpCcKd2CS7JjHBM6ZHFrkNa2qzhMnFwBXsSgEx4E13RA9oVvZJwz8F",
  "key37": "ZvYaYvu9imNeWk5yKxRJAEDLG2zyNY2ho68zrYQDXNYgVpCSS7f6i4T9jgf25b2aCuFrqU1Mwro7r8xJhck6gX3"
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
