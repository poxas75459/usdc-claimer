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
    "2JFLvTmrQsTxPCXUZUGg3UJwFdRKFATCF1Nzt1SijCASMeZAkVNNgxVXuZEH72RiYVDFYkb8qVo9RJUtAn6i1T3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L7NtBrLPNuf1GWvnH8QJgzQgCqXgASf7JkP3BtMqGNc5SocwigNJBvWB7HsELhB2uRk2fqtyggMjoWy7CYnMZPJ",
  "key1": "5s1qbU8DsHKhVrFNZMWxZAE8Fe73GMRv67cZYpULxTBCmVgtPSQ1yEk2qGib2BdSP6iJMVWQSUx7rGkBzeYJ6RUQ",
  "key2": "VsGDWCZNLjiCdocdppx2RCS3RZTmP649okZJ6aid9vEqnfBzfmwTHfsfffGNzCaTfFC8Gq9NqnVZd4gHKoe8M5g",
  "key3": "2GurHj9U51twWrrVsAFoyjb3UqWboDhF2cr8GxwxeHDN1nrtFxhuRgkcsxi4NQSCDGoDtSEYRkVeD4AL3dQCHpnk",
  "key4": "bxWPJ5a5BfyFTW9256KWzkyXyrvW4sLEsVM2beLTdntHh8asXMEEgYhKwkkCAd8UrM4JHfViSMTWMfjLxwwpGbF",
  "key5": "4yciA5xsLJ6WpeQp3ZSMAay6WxhTv2k2FtZ5k9LWUSDiirduzWr6HSPkgW25yo2SRCU13Ee7UfUX5V5eJVKgm1Yo",
  "key6": "42r6ZFf4K9p6EAxBMhePfY1Bpgq76GEMfCbvvWvVJNWzYpcwUw9WiwdKepocB48qCxLNBuPGBPNL1DmVZUZx1UoX",
  "key7": "53P1wBtwWRyY8Y4WBtYnSWN7TFcso5PmMyrCmtax8zhQcWiimSGBnxDVigXihKuPwTsZo9f2ehxKJZvS1pxh45Fy",
  "key8": "2iXRaGWCtu1cRYU6u7ZAgQoRvE3sBsYcWJz5tVs4gedTQoUdmrSx448ib1C59CEGvHEBq1Kch66S6WC7hFD2NYk5",
  "key9": "4LDBeyeqUXUGjjgfkRudUUiE5xXXpSmPuPbzVX7ZsUineRtW4ESXuxNchkiC2bCeLX2kMgwpqWv2VVsA6FGm55oq",
  "key10": "22BpgDagdwmxGzyREujgLr6ZnrkuuTqS7JN3PCCwkZFA2eWwwjao1kn3WYZa2LrDCeJrsevLBBjp7WnSupFQ69cY",
  "key11": "3U4fHQVbswe7UjFjuk1jBA2FJquYT6Y47eEb2ZGi2eDSudrfc7mbRYouTNdLWKZFHYCtv69ZTEUzgrmG5yifcBvz",
  "key12": "5BhucgKvfhfQYhLXgtsobgBYCHgPcD9bUecFMRoXrbGt3vZjaB9AHWb1zbcvkhThHNYoFCLCcj7fZ78Kya8T4Bjq",
  "key13": "2e4zrH4hQsbMEDSW4Dymx1THfSBXkZdDVjvuWCsn1VC9kzayHpBwUBYUwbFYNPZTSqQb7G7zh8QjteWAgitrYdK5",
  "key14": "2TX2GSin46UekfEp4P3wiM3C8AmshocdQWKSCtwEVgbG3ftoARQLnFJ6NYhuHYiZ4kytUcCjkTnCNzc95kpTtkCd",
  "key15": "674w4zcdAgR3RxhjiGkzbtW8HtMeXGkhQQMkYpqfUQG83FPZGNfWTsxMYm4iCipze3oQhbBxfFg4EJ8vZa2hCQBS",
  "key16": "41WMsyGRdmjuFDjZRHnTodxamqFfXdZVspYKWeRYtYV9LQ62hPeuo5fCn7Hik8FnEPZaAiaF8FK7feei95xKQ68a",
  "key17": "9gc1eV5Qw4tpN42N258S7aL3Q46m2QZAyRkSFTkjZhAyHniSn8pz1CbXL1uvAsm9FfPaVTCYtDuK8ywZg9f2TwG",
  "key18": "ZALPdJREsGdSTBk8kjhffbK9SbQTkN72SxtskWoJCh8GXKW3piiFPT2rg236Z7Q5Efs5RmoMrxBrG4FHsAqe6Ji",
  "key19": "Vi5nhpFYZBDpEGXth8QNC3fPJgt3ujLKzxmBx4cVCn4yzK8wfgSzHf6tDKwRKTXzQbkS3eEV9AthGqnSwk2MzpD",
  "key20": "2ERrqkrmwVPWckFVLfUAQABpaNBjhJT96UhCDAwErkuNywtF4qiZYEEnQYcRWwchraQV12Pws8nysVXVZaoWzTe9",
  "key21": "34pVCw5mefbsvmrK1U4AWUpyocJBRNxhxgi7GfTtNZ8VhYpqyMEvU3g6At9a988q1RaJxM6B5MFJjNeF7sgeVggj",
  "key22": "37UBNoynZed4G3eRg5KUUsbVsGkKvMFcycL4kbpyHRmkaWnUwamJJZ26hZ5E15NiBP9BmMmbx5qkCsUt2BjMR6r3",
  "key23": "5bicqVAPxAps3vmphHmazjkXrVKdJHQnHkRjp5BvG1Ux7N5GLYGNDde4Cc28kCFTtuAZbs7XpfMK2byN2eFwSrc3",
  "key24": "2fmEj7htcxPSpT8Jb8tANJYLHgH7FybxtGrbMbwU8ZdW6obz4CwpnyW1ktieCerJyNaMWYhju3N6hR44Lo4Vme1U",
  "key25": "3gDvRZgeNgLSwdV8fSGdA2QHDbPqyNJipg3cfnfZzzmCdbvFaMGQz8s8tNMKzPrtqprrdUArd3DM6N79zWpPtFLi",
  "key26": "2bpRkrrtbzPBkX1p83QV61U4xEzc7qzmrVYcMEHj1smn6rUoPDxJK9YHcHe6VrKsBPqsWwgYGkJc6rPXDvp16o7J",
  "key27": "2fFKUn7Lf1tMBf8uL3DNkmbLqBA64NkrLroGKvRgwCdzEzqmqkS79GWrWE8dMoMqp6jiJ7ZBAeAQGbVXTzbmMkcn",
  "key28": "fD3fpGFKmQ5iiGW97p7NtVzHbpXMqqzM9FnrRZCKp1TN4X3DBRsN6k33hpdaYeYZFmgq3YAYM6ec6E1ELu8MzAV",
  "key29": "5uxoMRZuKu2eRFBWMJeBK6nz3Dw37TCZXniJf7jqiWR99Q4VR5fnC2JHREzNswB3tHLcp5iCAiQ3yU7Mvg2cWgh6",
  "key30": "28Nvhb4MewuHBcQEEEuoQkh4SVQ1k2XzZT7E8gLwV5UssXukpdPF5iVWNi6H84BgpRjqGFJ52p3JMAo4Lg3vD2GC",
  "key31": "23kMqVG4Mhu8NhDEGdGhBQUqgpLj1JsmdaxavV8c1o6w6SjKaLyXFc1iYUALwVCFkbwBmXMu9cad4P8jSuDc1dxq",
  "key32": "3ajUUBhSLmsFgH5cZ5mLyp8RbrR3yiBPofEVpwVrzHG8mq7aX7JvrxTo1Wmo2EZNKXsN5QY7U6iYsKVa9Xb6N26b",
  "key33": "5ccq1p6d7MH4xuQ8XHrs1GfHcsg29C6zzNwYhiDN2RnGCUsWmLmYvY47VA3RWJo3f8XggMm1Cg6AW8qs7nWVJUTY",
  "key34": "5F6rxtYmNGrqWsrGZoEKWFiaDiXsmRPpwMtPEHdcS4oJKf5Z1Hc2Cjn4ZoUYGYfDAnB1GLN6LhRSM8s3Y7y3bXMx",
  "key35": "4HQ4Y3UzVc1NQZzYm8UiBGhYVheAoYNQDPQyjLCyhigFEfoXdpYvPph8ci7TVtPLb25aGRppmc8da16u14fskceM",
  "key36": "3K7KPAwzdK2sMTvyh5HkKCFc8RwVvMrMh9MpqSP9Q69qctamCKnBcnBQ72rKQE2nB7rmNeGSMiGHnaqnRAtvDqCv",
  "key37": "2SenFyekxohmrHafTbxgwzR2CJTrnhhw3jsRdAySa2pHGECW2ktjmcWxX787QpcTvrEGDJ7t83myVx8gBj5umKa4",
  "key38": "4Vs3G1JL7Pey6r3411taS1auLUcZgvEx8XG7a8cWvJspbpRLxz9bbjTTQdCNK158CRRkzrVhtDvVV6FyqLxc36h",
  "key39": "3D8VjiZtATJqDvNeCtnhTLCe6XRL5vQC9BpgzfV24gwMwg4Gz2nL26xv6gEbrYTuPtHRxgzNEweWAKsqys7us34e"
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
