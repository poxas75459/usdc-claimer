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
    "JLwkuHKjBaY1smmEmoMZH1RNoAnZUKSWcc2eEpH8LDDQhprd6YN7A4XnoVMnJXkut7tfw2xbv9FkQps3JzL2jPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26xa5kZDuX4nhyJQyGLVdfxRxkbFHGCw8EFGiVQsVUvT7jP3Akt8iJGytHPAkycngguwk27epmHZMBf9Hex395Mo",
  "key1": "42CJ2QanUwPjTwEKtsoewPN5qd5doDr5wYczT41MH1nUFnrnydodj8uB5GZK7D6VDBeXPaqz3ey28FwmE2SQTJ6",
  "key2": "3dcu3x37rwrvf3Zr7DMmmLs9rRfVnhLs4BV4PWN141jTBE1S1crHD8PwZdJcBrAw2vbsi58aKeihz4Z4xgMBitZD",
  "key3": "5bG2DGfkxczZCCzrfVrHioKFEpQfvisLfmW6pEHAxQB2NzZohEQT8nh3f39DjrpQYkD4FhCbHtDvYkp6geR2jBdV",
  "key4": "RuZ51mKc8Qe7symjCCho3D5UKivgoE1qV7Lv2wA7rWWRDnaTZYGLdFRrgndypE9ZJPQ27qySsnkovwe2jQbJLEA",
  "key5": "4zi1Lo4tB8hWXw8u9NJWciUvKcs7q1wFBTB27Yx6p2MXyHj5C2Dp9ssscqNSyCxPpUPpDAWSHQDKBijUCjaYFzxT",
  "key6": "2hpEJ7iEm9xXAzNg2ySgyqyF8HGGH7p5aXo5zVRAAKyWbUemQFCKBntFrVg2cCyxEv43jW1Pro1ej4qic8pX4Y5i",
  "key7": "3L5CcYPjYbxB4AtSEFyVqZLZuaiAkatHTX4aFn2SjYQHBLLJhnkyRi8qQJ1ka6sRTYno2avJLHiKY8N8j1MDeUrr",
  "key8": "55KwKgpNgHyjDNEZF4TiKN5C3E656hohBTU6aAyKDGCyfET7mjxEqzVYCu5AfwyQuFhYJjmDWNkTQfyzzccE2rHq",
  "key9": "r4BgUfJrkVRghr15d9Nzgq85xQgoh4XYw5fbA9iMF7TRtVia6ubhugjHgZTveBXNLfTgwfPowd6SewwsxsATtiy",
  "key10": "4mjUCdoNptLuoHSbpHuKEFsAUNi8a68nmcK7Dpw2fJnvyoj1meSfvXu6XZgvJJjSdMrjG2PGtCkYnMLYnrG3R8kR",
  "key11": "3JNbDstonqLhwcB3oXmUSnctuhJeLWR47AUcyfUzbZ6ePJkLwcutL2fjiFjqcVqr88Un47paPgn9hYkJSr6qVfZJ",
  "key12": "56882vnF2WWgEqMkiezGYuaSGEG1AYgShcWSzxZw2CaPiHksW7jABcamsRF6drhjkXT2kvr28AexYmiwg1nD4XcP",
  "key13": "H1zgauoGhcp7Tu7WoPpgG6PrwEo5ydsx6i7oxuUFtvJGyp9zktN5yKJTqwsmKeLVB6FxBFm3HMCqBy5rv1NJQtd",
  "key14": "4xcmQW4ms7ZhHuew4HqBXPka6aFMrqU4u4vb3xmBng3iQA5hndBT3SiZ1AQfRmKk31yhPgczJkcPWsYZnaNWiRWe",
  "key15": "5ov5jDQtufquyncELVCrpFsfVCEJh5aXbkB9Tvzh2mqJZFVAmt3iLro99doPmyQDZ5PpvPzFeV5qPxekfNGT1yUa",
  "key16": "3dDLaDKTjLFaRxk43BQwPUgpt3fDXbEesDsUAmgkDSgvszQtM1QbYYk7SZuuzt5Js9RCNLetyXF5merSAvVKcnh3",
  "key17": "2uGV67LQx61jKCnSeJWQJe6tjXRHrh6KGCecTi6WN3wgVYDfostp8NbF65YE6sFga9dPM6av6nCY9JwaCiceGwoS",
  "key18": "2Sdpd9yxeV2ofTjJ83wUjLJRTd7VdPRFw7X6gBxDzpbW4mpCF8bbQZ2EEhiekSFELU1d1jmM1oQPvWnfNxjg8hbN",
  "key19": "3Cw4xJDiSBomyxEhfeiFb3sUByMLUUfeD5nNMqgx4aWe57BLbekdjKG96MpobnFLURje6fMSSKYE2dCzcigc53sY",
  "key20": "3hRTyWjxtXJZ3orq4GPuydVKYpsu7k2WamTTtznVZAqpx4CLcVNNzQLqx7VSLpLuvGRosMMZ6Ta9gs5VWVNXjZ9e",
  "key21": "53EyBvFbaKrsrmqSN1bnXy1xYj7WVZD2ydeTxsQzWxvaehrFN4nUcLeo36z5ExAVaDv23gfHiadqhzuSWSsUjvHn",
  "key22": "2CRgNvBVadZDqh19asR53zfZuWZG3U6Ev77rZTgaNh7fCHdLAj9Kdw2G511abGTP7Nj9gVFys3ex8DbvF8e4ukvK",
  "key23": "2FWiXjKoHubJk4VHwemoCRuTaQJeD2G1jvUUrJQw8H484nmrMMUfFKaSyAQnQb14ktmadJ83gdipd7QTgQs4hfiC",
  "key24": "397iKgm6sUYb7bsFfHaGf9Ay7ovj4VXziKE9TTywmA4E5tTh2NdxNoPTFP494Y48dysr17nVkt9BetWggnerYbY8",
  "key25": "3SGoq44Y8BBwusPASGFp7MaAGDDzKx7AnY9bep9ByhCeDwVLbNFET2maCqKH6ooLcHBsEvrWYbxY2xUKjZNb5Eij",
  "key26": "5m1m5DDHKc8pMoxGGGimP1tHDJvZPPHtJNhBTWCQVncpShmAcVENQMLdS8W4T8CfwBuiBifKnAKbrCcbe3cARgnz",
  "key27": "AXjbKaF9y95wtFB3AughDopmYSMREZ2gDzmdZcbKNq9gFEfRPza3nUVyFvLKgPkVebqeUUthGUeivoDD7ZKDcok",
  "key28": "4AdHTfxErQ4DhsCKVdB8L978yA6P2bvumNaeScPNjWbMyaogqjgBBbb9TBFtmfu42CphPnmEmHjastLKHgdqWnFs",
  "key29": "3Rf1DGmZ5CmVx65G6vfdqd4gFFQgiAGxruaqZpEGKLBk1sTRa9hBPKdGnciELBoPuyxJQwfejX8taxqBQAEUtKZF",
  "key30": "A15gKjKrNZLrFz81Gw4Z3YRZm82a6wdtarsNEcQkaPXAdnXKY7KUiRf8jtksFcdQUEsGpUX7MvLriR1LEzV4gsA",
  "key31": "25mvyY2pjxP5VGUvZwAnsTj7h5edNf9BKkn2oXx3xH8npqjnBEZdCgzb83gZGDNCJXLK1tUa3sTdUuWTsXLVgmex",
  "key32": "31GY4tnTNkcEwaRkU6Yecgmja4TifhvcC27MTXv3GKxaYm6fuxYiT3v2y8nQcn4pYWbm5X4topKqpzFk2qt5gsEi",
  "key33": "4dWdYqn6WVHFfcqoiLyLzrAguKr7dgb8vnwh1mt5Tyoq4qFervLEqj2D7f4ANygPan3mhwaG2mXQx1V1fApd6goN",
  "key34": "5AyxxJGKqeZDBiWXHp7GD8fcDBX3WyZZ4Ny76DFLp4ofyPbkvjFTeS1kmGiPSbsj8Yx5GgW5WJ4nTp5oeic6Wpyt",
  "key35": "dDghZrUHb6yhLUskRKW7ZNVDtE2qVubmUb3vVdUB3bMZAmvAVTMJ5uTmt7qLXYLHKi36sR9ZzbRMq7imc8fsVGS"
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
