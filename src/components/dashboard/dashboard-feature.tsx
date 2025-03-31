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
    "2fjjFr7UavBqEMemEo7GSWEwT3ybT9kfpVrnK8DS7EjRsQKZve11MSsVJWt7dqwJmsTfkNyjczNeq49TYsCdagAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qhDj5f4yVAt7diUCDQE6n8PLZ3xw2Sm9SLasCvyuV97X2SRdzmti7twNT3jjLuJHZvaWN1txsa1DzPD5vK7qUNQ",
  "key1": "2SdCUMFzwKCY78HNDahJZTEyXtiNDnkaM4tkzGvnHm1RXUfTJEtFDFzNesFgpu3Ka2HyKerq4rH4tvPB9JppjV2K",
  "key2": "2wr5PK2VUEnMeTKUxhM3Ej9x8LdT5EqNz1dJK2BG4jZhggA2SoG2MTYSNNoo4XFYhfpPBDbHmisJ9ejXpHgC3Jpv",
  "key3": "58zS91V8FDacErNP4K9dKrTt8QCN8vabe6Tpo7Zbu6d8DTz1zThuVZEpSRFKSoUD3W5tRv8uFhaH9YzM969XjHPH",
  "key4": "tM9LUT2eSrNxQGke8TkyBjPi3irMCXM7g9LJHXdXUVTpbdbjMBZGir7w3xZTmHH8LxMK2aCmA9snwq5E2VX8zne",
  "key5": "5i36j1pa3AyjUvrTAXZdZdgSYYGCVnyqhcAzmKK4pWLCh1Px7kKVB4xWQ6VbFaWDW1F8U1E5f6iZ9RT5izj5aDq7",
  "key6": "44UeUEfgPaPxkuE3SQCogq7ki3XhLSwpbroAoS2GUq3PzcQvJ5Ubdw2CQQLwdsgC8MZLLk4KBDkZsXDvbrpgeukM",
  "key7": "3KkvJ4WFKA1hXFHbdkZy2YCRSDBnQoDEeoSZtJQ2jY8iSP2n8jH2h48qjA7CPp4JQVx3oxz5yTjENRhbXviWS9Ed",
  "key8": "5bUTPNWD1oepHxXPckPaHstJzm7XmuusZJHix2qvmNJFGUhnbNZ7UwaMDc9rUNBB873nRypfFT2FatgSp59avML6",
  "key9": "2rQnFnGXfLg1XMb69HS7VQBRbYn3Cu9cNCLFpGv2uqHP2RhfNUdL3NWbWda6DLPLJ1pu8AGoJ5CPxzj3mC2C4XiK",
  "key10": "W9C1efkUYfwF4vjaXs3ysXXkQEKPUh2YFpdyxCfvbZAfnCJE7oPDnEZZ2vmNV3EivtbCcANPLcEH1xSRXrkvvNB",
  "key11": "5hJ4mTMptLTeFeBbgSrjkBBXLZj6NeNugqDPETTHpRD7JWwBNQyv2Wyg3sXHwj9abiXpLP51ywUeaVZJb2V52SDB",
  "key12": "2Muik3xqS3srHwB6gwprqNfi2sDTPU5Jx9cF17szXdaMdfbCZScgeyJCzcdVYvbXcCBe9oao2Bk9GKyu2oX14xJ1",
  "key13": "2UKcbLgZ8x3ZYthXmEvK6Qp7qUrqLBrLa1xBxGFrug7vZ1gnAx6fxwnBWkaMyUTWbCHR5YiawBukAr3CFWbC5pSy",
  "key14": "3QbouFPYRVKQYdF1BhoX5bQEU86cnbv7VRwwb12uHFhj7haQjSL5D6wN5869sX4JnMQtZCJJGJ2tGXyi87WMomMG",
  "key15": "3CQTCSgp5UCWb8virD2vUjQqkT2FbE83BPrSjjde7eWEnVwJ7yiycf7WyHfgRzDeEnaBUmB3CgUe4Hc8iMVdfCu8",
  "key16": "5DAvq9kR5Gt7Ynf7omuYbseLZvUNHo2GRJKH8i6GKYdwjrn3n7An8R8GBffUBY7VhwfUoZVKPVE2g8v1yQkHK83F",
  "key17": "Ug8wDVVsYDFQFMrGmDzFvK5hcaryCmf1MrzVMP58pdu5pUxMhc7YT3Ggftd2YeAyiaTmAX3Mcp1ETxDZC8CRxBX",
  "key18": "2QCFcSTHUiDkZa2vCvTTe9yF18LRkLDRHPWF9i2Qi8tZxfhXf2vVnAYWdve6DdWKaG9PCKP8LvysDHHhH6Lr1zee",
  "key19": "3NJzM7uUqnGn4VYDwWiRZYhEjqVPajvWV6U9KjkkXJe6wHKhmzTXgvtpTFexEjUqibSFiZF61VFmx5MnjTB9QvQ2",
  "key20": "4EtkiWEYMX34TaN1jv4WqSGTzpHVrkoG8eRXpRo92dfrrUH3kZ2M9BCmZEzVbGALTRuKCiAWLedqSFdHeFt3p77a",
  "key21": "2PoTMMhADaDcixPzPpDaRiHbEE2bB7CJdEtY668ZffCxQkqEWF8vWhC1WnHGyLpwCJFLpCmYUdj47XFmWfTsmzTm",
  "key22": "4d8pUqnBPSirLbbPuGoPeKspMWQ3SpTJcgPZir9KiaJBPteFhrNm99uDTCfyP7nSZhLaLr6WLaNj6dEmiYaa8yqv",
  "key23": "5GkX6MKkjhyWxxNcXNPANH1Z77JsrY5dxuTfY948zfMkJPVAqeMNUwVuPzB4zFHMsLskNXgStyPyZXZDtT6UN7LS",
  "key24": "2KVWvfwt9QKNT6PkrDAUjJzn5DgK3gedSZi2ocefoCr565bfgVT44CVp668gUt5YqbcRcSpBvK1TyQ9pFEhYT9bj",
  "key25": "KhDPK9Gr2XLFzmoStWf9uxZCAyfHjDCSSEQ9Cme3XQ6YYc3hzMrrPHowNMLfzeLg95ohzkpfNVrLg1HR9iQgpEN",
  "key26": "5yirLxxBbnz3AooF8zqvXHjmZCm2PvBu5xAEnASkA2LBGN78SuzTE9inWfP96bneReukVs9dSmGa5DTinuXTPiRU",
  "key27": "nTTTMUcH77o517FDL8pt2nWzSNMNHLzem2rFBcjBTXucgumMxMg3JdAN4aKEWs8vZ7REHR1SeCnSqwHia3EBiDA",
  "key28": "3pZgci4MEDcNaWiQvSiwsLkBuAvTyVCp2Mo2onBwMYLiMSarnxE93ZrVgV28ix2X7teJT43eN5AF7fEZCZQumZQx",
  "key29": "rKfuqox2kzvW2r15NSJQUtLfv9DqLq3TdTSPszJ9WV9wKU9JJK6JqzAMT7w5z384ff7nwVBwUFDdcGVRrS3Hacx",
  "key30": "61gaMhwMQbiv48khM32NGrWLxx27jYPmEKcz2p4992BBLVzKZ56P5jED3NH9ZGFfeQkpuwnLGbqhtu7f6aQinED8",
  "key31": "3XqJXLQz66H57xuiWizGhJKX4TKba6QK5id1STiKk2zfq2YKnaq8rTCHxpkkn3Pt1wYbi4uEMGCRGdgNb5MyqU3Q",
  "key32": "4a4UwMTegN1jxeU1wjNiqzkhbJqYNiqEZP7cqBD3g9MjUwQ3P7oBgrW3jrJTb1jTrjJpYg43ZsmN5PhotUoJXoTs",
  "key33": "2eEz8kthEBrL14mX7UXsM92h297vmSJHsLHCmzBAbQabeUX39cufzokvpvLmq2hxz6aYsKRYDActfjxfooCQatm5"
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
