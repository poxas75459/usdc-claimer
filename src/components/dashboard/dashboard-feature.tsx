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
    "5LBYu7A9f7UyVJgm9e3yM98jS8gZkYyKCZPfQfwT7kvEPvwcB9X9c8boBYCkCsGd6GKRbuSUUp9W9YpkLxmxTnMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47B5MFQzCTahSwLPHMWYMMpvMYCZdZ9bm8mfuMb8arYPPpFBSSyauCZktKK9WNk69bT9E3jMCpHqqAaSKMTCHvnL",
  "key1": "37VQuS2dYVc9f9i7Mby8bnW9YtUNLnBysTeinxi6eAtp55QVReN9Uvu5qUwGE9r93C1Ba5213vcwSRWSTzivz5Df",
  "key2": "5nf9SgQyKzddj1igiurpdWMmptYgubytAKP1UU6zmS5sqBKiGSVg4Aa7shZk4G2BnYcGAX7aTgbrAUSJA6WdKoLL",
  "key3": "4K6x6rdDEMsLuzp62fwGLqyY9g9Q6NEbHi3epqyBXYWY2wFPGzUgjE9iSNH4szeo4hGByatRAivXrmkC1JqkHne6",
  "key4": "2ZwSNtAEgtPj1SJv4XrzKMyxdCK72CTBcm2U8gpAeEKNPc5PnRe4CfY96eSZUiQG7wfGvBGj2YUGFs9D5tbUr8Rx",
  "key5": "5XAWydyr8hRp7aivtXUhEdXW3tZ2CtFZ9NoqTnx1tuLB8keBDpx8f39ebYHZTN6xnMj3h48fT4EvbokRz5dVRymz",
  "key6": "4f8g6MWZkhWNNDwSThntUU5JgetnvFsdUF7xMnaTPMm4g7TaiP7pZMxTJS7DHMDfbbLHC2RnETV6yGzVbf7fr9U3",
  "key7": "4MHFv4tA4LT5Vsa1CYMFXit2yzAW5FLeY2VqCGBgavF7aXXRfaGYJ5RDQxmHDbaU7wVbKcgy9pWdZoDfFhhfXPzc",
  "key8": "2Ph4edK8YHYC9FpjTQU546bH4imc3BNhkywF8S6YcSb7rFqLevuBieUTzzXN58dDq12qUjZrumHhB292mFhMkpu3",
  "key9": "mFzv9jeumokJGiBdeAZtYeBzkYQVVceeH7ofUykAXZjGnT2PzxMDGx2GbwEC9itFd13VCPBEUVCgK8dS6fwooEH",
  "key10": "42d178EdDiJ8iSvZE58LosXiVkfaga8MArQvao56PmQXp87nRQKhkLhfttfWHNUG712S2uWBBvrRw7d8W4eYxQRv",
  "key11": "3idT56XKkxe1FaDwGdQqA3D4cWF7JzbaoqNgLRaie1vfkHuz3jQj9T32y8q9UGniaURkK5XhdEUfd4GNDTX11kZV",
  "key12": "3EZruMGBpgtyUvg7L22WPEH9kLxDuKrMRqabJt8fyfFPdBMZbLc4shgzk88cZRCY3ssZYDEbpTYHvg68GhLb5Pyw",
  "key13": "21QxpM44NQTvZE99Y5F8iUMtwEQtoKMZLVY9tTWrnm5VQyikUUsLZBfX8G7o1n8zMwGKmGpUt1gqbbhFaurGh7Qy",
  "key14": "4WZPcMz9JGRQ9c7RVZhA9pEzWzjcJwojMgSp7Uv8i2LojaeGsstQLFaXqsTRNpzXNsbWrbk8Gnz1VzAc58ST5Arm",
  "key15": "5HtKJhJDpAQwnubr3b2HWuwJgVZgv1qHTiHPconpiD7RkpX2GPDAV1tyC6NhxbeqB9bsugnAnPGvjNUDr7MrctYd",
  "key16": "64xySGjRnGHADmZWgibkShscKYAyGDBL2Brqxy4Eb6L2S7nnnfeeZp6j6GSDZtsCb1HtLQwfjF1Bhyv3dtAVjPHw",
  "key17": "2k6aJjtbcEfPcwKeoFWn4PJoaATHuyv2bJc9RhMpRtARAYkKXm1BSsspKTKW25Ri9g8exnmkr6FYJZWENTTPgKkV",
  "key18": "Ljj6n3ahn4b1faYCcLGiZ8LwuqRJyphApFYGtw1x2xXeR5gLMWkBiu8znuiRcrbYNcn2x6FaErEzouNXmRL75T3",
  "key19": "3cfjL1zGiN3ChxZLRjJGu5jRPsmuRsWrJoqjHapGTz9JC1fs3A9zchAmMFTvUgcnxQMrscTkdzQv4G7Ki7ANNCDR",
  "key20": "28UQgDBBWt94nZNxEu2fGHKhwJj2dYg9k4WPKPmEu276rDHKKAWKMBsbGeVmxAxhsoejwpFHipkQFNnhUpRwbs59",
  "key21": "4uw3ne26uytkWhsm2nEb6jg93Sjgv57TG9riRTW8V2F47P7C1qNeQgKqksSpbHydSFJoCPK7tzDJm1maq1To8hRV",
  "key22": "2fguWHa6y2zoF6GH54RYsp88fzaiWZhtqZHpb2juPAUt9J7vTx4m7eLGBJ44zF6suUah3USF2UBMtRxbB17hhJya",
  "key23": "57dURSB5L56gCFYVh3kbidjpNBqJRNaWmDVgEpfzDwTxwfPSSuDhBSz4zz33CSrMUz7EMZREYadzcSzeVPphMFwQ",
  "key24": "2EkYNX6z2b4NHyLUADYDseq2bhCzAuDQPVExeHokCs2JRzkNPexnutE6KMPcT3mTG9bSwUeL6r5yFcQxJYj1HWMg",
  "key25": "5J8sew1zwFwrTRT4V855PEoDajWModYDxo3uiy4B7EzWTdVq5mrsiCptfNELGsMmRU3PAD6Q4otCXTGDfsdMBYVL",
  "key26": "5pz9Awhd2d3bFffoRCN8FwxHtvH63Cjqnws2AhxYWjxKkcHFhH7JbvDUwNno89RQbsQXuqnt1dM21LAYgKAtWDK5",
  "key27": "57kQaYTwpbV7djqtaBEdrWJekkyxNtEZg1vYupPFDvTfkugUFipmwxqYLukjpbxxywBCjFYDHFiaB3rQJgTm3vor",
  "key28": "FUrjdU1WXWP5Bk46Un6BHorQjqhFNCHaoLHN1TzHG8t12wGVfqR1xZnhLKiDFkGxRh4UmX2hKfRaMFuQ24brRqw",
  "key29": "5bgL3X5BzYZns357xSFKH5dhWFJ3vZbTn351gC322THMSFwfwmBFpBr7xaazA1bnm9UnXQ2LXRGU2oJ8LN56eobE",
  "key30": "2vLhizQASMSdJjRNLe6uyrH1DzTDnxEJgYGjGz1eocXSd3VKfPkzoQkJ9EmHEBZTm3r7hG4mSGTnQgydeoYFA2NH",
  "key31": "34VBPMH9CUDgs2binDXDFnF5818uNG6cYY2imVQrizqWGm1ksJEVNAxcPFaksZPu4F4xXzjBZoYTYnfrDdoERM9S",
  "key32": "3AgMrWUhc7vdxRtHCmWoLfwVxNhdQ4LvcASiJi4Mh6Z3dihivbpYTrRB8fEfHbEXbz32Z9t4K7m4JT3K1LeWN8DF",
  "key33": "2KCKiqwrxBcsKx4h5Ef9zbQkoqpPdD5X95xEXrahnRuDxPTsoH7qs9dfPSAnQWFbvgKhyLGTWA8UEnVQG4mkx6pi",
  "key34": "3MsvRHPuHGjEt8h1xheBk8W7QAps6kVERx2631xC46bFYpVWbnsnKmCUfVpTKnZUXj7y3kNPj8TB8QNYCxVELgWR",
  "key35": "3673yGh6m1u236ohq9SGPNopqtnEPH93LPwcnhbHXFThAB1imE8Z9nBMbJZH5eribF2MfE3Nr5JVZKdq7tC2hjvW",
  "key36": "4cshPQFvuRcneeSNVEkt5vosS6wdUNha66x5osYN6sU7PZ3zdxS5pSKJWn2MKbuiMGTNuqs8GAJ5vo1pUV47pYKU",
  "key37": "3K3Ae6rcZoBamRGZwRrebe3xtSTLk7zo9sYabZnjHfhfAs96cs731d1z1dc6MbScysgAEQHsh6noN7kSov8Vq4x1",
  "key38": "5zxyfkkknbpwvkcgzRNGtMh2zrmp3VHCPXK21xf5yr2e1s6gNwcGVNNRRtaqg2oF6zqK1Qd1ZqnfMrRNaUpwXayt",
  "key39": "5e6n9HV6QoZ4KkW2ce7wrHtopG7ngCL4ufLu6yzSCG5F1yPLLEmveDs9ayoNAuxALkWGc2XPrQqjw5nZkhq4X2KD",
  "key40": "3bMvLYuDJgphQMyeCeVoL5u3uCUyUvzmksfcxaXYZ55LfQnhuPYLhzzaYFpkUCHwWm9CJ4X2mfXwb9eesA8uw8T8",
  "key41": "3QH7XiXMG4zz1WPyt6tHYCgTkhDrUtJ8ViR3TZ7rMEgkSAAhWuXrUS3ABGopDggkRGuPtH7skNyw9W3dGvjMA4tw",
  "key42": "3mMx8yQWeGUBBtStoWxygym7ePUKjTQjX7utJFDbQPYE7mQW3PSeSi1ckPWmnmxQiE1dXpQq9rTGEL1wgxc2b7dC",
  "key43": "RuBoKm8cuHmkTAfcbbXf3p5q8CSMo2wvagfa3eWCQc9oMTMwNBNk3kaCPmzEBCpeVAzqfSwSqD7jtXJ4yprNR9J",
  "key44": "28ffe6HnLFSQdy1QaihEnUhEWP1SxfeduweMEL6v9rQVFU2jcd2wdWqShVRzmcbF6gUKhucKidjDYPf8ppNZtra4",
  "key45": "64GX6SWtnVFzBRTnw818V7wdkP136hXLNjtCcHkUNTsVttw1n5kJJjy4JSQ6qKwXjsBbcvGmYd4XZxEM4FgxuLLr",
  "key46": "5FpAxbRp2zZqoKiKL9sbkVzcFrqrQonqW4W5GgJaBviPLVh5xqGuthzLwzUak7Uv327oCZVZZ3Capnn1Dw7rtBsV",
  "key47": "9KHZyU2oTaD1wRQ8s9o28U5HdubxozQZbcc5uqfxckgyHv4WUdzXVdjQbL9BHCGTseKeqvxLk2C3PMtCbA4zX5k"
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
