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
    "53K8CGraVThWEHveTP3C9tHtAZzn2D585CHkanQiAhJGMgbQL5EGioTA44eNLPsjCBDRsqMUPY2ceF1xbPyxJXDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNffePSREzvaA5twuGBi9CcBtKVege8GBTYGMJqDyDUHTfH1E4Q4vAcvJprPjT8cnNMsRfJMUbGmJSF8F32EVAY",
  "key1": "2ssWbtugKfbm8y3TZVuX4t29QuhWmtcJkyaeB1aky3YsQoJJMgEJ6YY3zmwV1LkWFeUkyfirfM2m8ABTW2n5fquE",
  "key2": "5SWqkNMd9bJcto2kXu1APB7t4ZJ9xjyk7PBDKgPEhGkd8DbDx8RmnGqGdS21VKGnHRj725xEQ85g3PdYYivEp9C5",
  "key3": "5RMYYHNLCc6zguM8S8CAtaPgWwjrqXNy1dWj49ennbKRb39Y49ubkEVcbpy4XDjaZwZYr9sHGktRVBKsvNakh6ka",
  "key4": "B4g6vF6n5QC91vMEcMmpt5LJSW364nLNHsK2NhrA2tDTRv1MGdtoYbUWSHCMKWUhbDggWGDTxS7MtEGq5irV7G2",
  "key5": "39eyS17AHueUa1ENnUDWcnH4x7bAhcTuUitiXRvgzbjzfKduo8TAhCmYu2F3VKSdMQuhd7tsR7DfYMWnRPuuALgy",
  "key6": "5Wi4utQP1n5yU7CxqnVG2t3Gb8GsCVtG8wq7KvktvnAheZ4T4t9JXhPmUuJBBGqQFzhCRamgPKeGk9Ac3pTsEe5",
  "key7": "t3ZUctfvHbRL1rMycV7FD2DyyKyJwvo2VQ34YVUJFRxuTyCPQJGbNh6MD23cECiybh9cGyeq915MfxftdgmUeAp",
  "key8": "49HnWYf68n38YWKF8xNQquVQz288Yn1yXQVBVFxbK351og752NWr9vBuZMAUhLFk4YLbncJotn4nd65NXK53mbF4",
  "key9": "45hAj5iDYJGNrpghWt9EuVk5W3KvYxbxUvevVv3vnswc25cEjMebZGnidWApUXJqikC1JyB7Njm8KCm9beCTDg5t",
  "key10": "52zeDTdUjoRQmGv9bZ9ghccCS9JyK6EnEHtcKP1ee1jGp6eJJq8mHHBFyrku61t7v4W7HmDvpt9XgMSU5zveAtxr",
  "key11": "b63PouEhmzdAS6qZfpAUdwdQGwCuQVCAHeRYurA5L84Mzq6EmYKyUdBMpgHEaDxdW5ALeWhgN13mYb6Dce1KQtv",
  "key12": "2LJyRUk4bayGsjuLCguP5Ciw7MY7vcJCkw1N2ZmhFCT2xiu7DdT8HRzEXkRQCa8F9LErYGDWwRjkisnbi1vdUTZq",
  "key13": "2mS64HpRDwn3gGZ3veNcvP218sSAiVwMcYJTfWTYevfjbWvLtpRfTcAzgyY1FCKrH2ja3dz38Vrm89R4uKtgfE54",
  "key14": "x8SzzeMWFE9xHLLGuNrU71yzsJrP4UrF1eTdzRFf4tT8b5psJQZfsP6qdzPRM26or1ejQ25psWLLdX3N2aRF8mE",
  "key15": "8ro271yu8RNs7C6nyYGSQvfmTPRjc3h2jNsvMgRwEEY4egXwHnHL5M7wnfmG9Vaiw6fk6ySoLMvn5vf3i9C8fGE",
  "key16": "mQBqFYecMtB6eDZTPywpJKabxyJtXq2jBpE6akxjCmnibS4aSVyB4Q8HNSpHePLyDMbHtkue9CusLBwvNPzrTpe",
  "key17": "xpLuUsCEwNdiTDrTUupQ7ky9YzRsaHgzeYdwwrm5hWZdMGHY2ePJr8B8ZpfLe3zsyZSW4g9FDN34hdHmwoZTCyi",
  "key18": "JQ2AmgHqU5xi7UAJ7S5miebZSSKVcgwz5JU2gmwWSn2JQwkCmehnxEv1Mib9x1jKJaK9pPZ62ZavEcaJ4dFGWr4",
  "key19": "4fn1uLS5TZuhbvAhTQ6FmMkACxbdFJL8NSz2TVDQ9M2Lx7MaH8kgXpxu41DB6yJERj9mmaRjGR5RE6kQWoSZHq14",
  "key20": "3PrKMeVss4woXGU1FTrHNL9o6hX472L52s4GXMU8gHbRcnuA4W9vSdfGosJmraFDtbiTYWQfmTFEFzPUEpHxEc1h",
  "key21": "4PjZ5y3VTkTr4P1ERY9t8Uq4tGLwDspiYcPBLnzEfVVEiQoJwhZFGWx9urqoxfy2hwTUuZAHoGquaDqbgnhXs9JQ",
  "key22": "2MSeu41huTwqX18DPeqyVqnQzb4TJymfnEGejyN9GrTbn5V9TtN1oWaHhDeLPFxXY94YUPPqJkqUKAyL3Vv98aeW",
  "key23": "5inVRgiVYJT58kQZkV74ZU82MvqfhunrdT1ub3mPfRcY8Vjvrih6RHmmY57maFFWHD8UGgFvAXRCoPpxDQuLA9YS",
  "key24": "32Js9FYN3tWLUm1mh6JctJy9SKyXQHx4yqXanzAtmvKENex5s3xDeWmrNtWMri8HzdVcuaFEpqCZ6KHzEKLkAm7D",
  "key25": "4V4emfnweMEZpSDSTLq14TTua6ym4fQFK33zToBgPU9PjsxTTT1iw9Vif4ycyeomJTLJvaiY8r2h6cJGxZJUrWfa",
  "key26": "aj3qf9ZcheWe8ZYA272zR5AbaAKgNii9JF7Vmc2W1rnQRPwFz1HEqUazPYws6ghL9FrUKb7XJLQppcnpVQkLzCK",
  "key27": "3oxSFc1mJLxCm7PpqfcEyRiMW7mEHk4kQjmfzGGytsfsBSjXaWt1WD1P6TgdT2zPLAfiD4shToqiA4GVK7VFzDv8",
  "key28": "2rzYA56jUiu5Xvv7UAEgFNAsDgQ3C9Dv8NcCbHjTTwtxemqZA94PzzpAg7CoEakE77AQW6ZhFG5Me6WKLYth7SS",
  "key29": "5s9tPx5XwQmCFqZgMvTN2t9GhZ1Qs2KwGLru4NVekhZjj4NwzfMwf2rQwBinJMALhBMGarNoJpoLiMVJHqc2HqAe",
  "key30": "5EvrCT2Yd7SKDFzspPjc8xi94Cx3WihadSZ96mMwa8xdg2omcaLLVozvSAFWPTuGGhbRQwmjD3Tr8zaULZGX8M14",
  "key31": "4hXAvUnxSVYGS3WQMBbe5zQ6ve43ggMmbpjJuvzgMn6Ssp58Giu1Ehjz2YeCbnpyc7pv9pf2m7FZ7asADhqQusdx",
  "key32": "62NxES82BD46E1cgEfARisLi7eAXfPNVkiKeuuuGEd1JbdipSLLJnkP631ZmWGCpBfpnVeUpeDZFwydxJvXqzFWx",
  "key33": "1YYJ45VVegSnQ775zpoB5HMFfwbGmpvkYQE76qQRN9VPgyfBocSXFepcEp1DqdZcU4f9DNEqYc8NigWXkYecJ3V",
  "key34": "3yC148UBFZ7jfr742HazuvbYoc4XPXr2EnuP6nZnCHFVnXjeJQAJmEtMKZRdkcVH3kHJFkAmDzkpfyQfnAymSGms",
  "key35": "24yebJH3khxczNknZR9m1KcEWtAwZd92h4A18sppPMKC7pjvRfeW3DE5cicC8AMoVsDwZi9qDr9U5R632DARZ85W"
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
