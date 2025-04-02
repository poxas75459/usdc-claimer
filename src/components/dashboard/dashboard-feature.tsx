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
    "4CDZD2u4x9A6Mo8LrcheEXZMjhqa7rqh7VyWWWrYnRNt94TcYTgKZMgQ6eRBEBQptqYHi8qfccTQV9DDUge6Wd6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yYiK85isLYCDZNnXgUkTdihz91zmXPTPMb7n81iE4LzgHiaZraLKeLPMkZ7mzPw1GprcgJofVfnMV2iBRcERNZe",
  "key1": "5xTJcACvPRayf4hxpK2hnrFukfyv3mQ6DUYLHinD2nAXGBXdZF7tCLWd4tUHfybE6CPEPg7AiJ5S8WU5CeX15kc8",
  "key2": "4RsKkXqMDNnhMWuVYgVLNHcVPVRQEoB8zM3McKgxrezaVXYQFZq3B4WGLhzBfU4JRk3oFsQjGUB2sFMk3MXeAoqq",
  "key3": "1Sqk9fpgDBJzk7HQ9LQGYsTyKxeuCshMwvSLD8zaVpvki8yFBkjqtzinGUayJFa3YYeRuYhWh9ktgkpTJ8aEFci",
  "key4": "2yM16KmNLKBs7fky34zJCNcgHHdSCNiZya4swwMMrqpibmxT52D98mHJZdz5MqHg7qNHQhqZ2oaUWQdkSMrWqLzu",
  "key5": "3K59PrbMGYYKr1o862Gi1wCZpA5qNRaX5TC7ebsD9odaDZ7ED8GmjiSkGdBwuqAZufVJs2gVv412yXnE39CNY1T1",
  "key6": "2cpM2p8aNFJSN7AfaFMUHEShV3p8oCNwTfpXKAVgPdHppyP5p2pYiXoeyhFRExptk26mHQ1vv3DXhhcaBxwLSnea",
  "key7": "4hDT6euqJu6rkpWyMXx8XnGwEMw74tBd7kiskoWGkFLWFXDWy8vBPm9fSzihpXHKT5rnp5gskZqvAk13skMgeVWB",
  "key8": "2yuXWF5bbva4VWeQKALAn5HetHPQDGopenUcY8dg3JtDzqF2vB8M17MFQtgEvhss3G1ayQVQByFbCkyURxVMjgAN",
  "key9": "3uSzVhcoLy7m4WbeeUez91fZRyvXojjEQnE6zcYvFKx57T7P3Pi2hBHTJyxLAsbC9BFpYNYZWJSMyPJ3SM2gPY26",
  "key10": "4GavAJCu2cdVwpdTRXeHXugKBeyWWXMyBpGV3Tsi6BzqHoV2AxGpbVRSoXtC2BEu57fPRx93nKBvQ2fVRSJEyT6J",
  "key11": "3DPT1NBCQrA1hFkFJbPoy9fG9G6n1iWm7Fr9BtfZMiwiyvsmgaPuWQn6GFs885FXxLmx9Gv46dkrrAaN9vKz1FXt",
  "key12": "5hPGo1sh1FVGihkr9HC3FPVWpEB2KTbxDGvkKAUP5bapA43rigSU4vNYWdakvUjiMUCtLZvthBU3Gt8cLWZjyYLm",
  "key13": "tDrkZiiS2VYN4GwxsjVVfRgJRZmp4T46FWnZCfJfQickdGdBP8Y5ZeLcZVqQjZQmf4f6N8Rjy8N5C9TU9QQCZv5",
  "key14": "3QNNK4sQaPtLPsYRWDA5oGR89mofCXBZ3SscmLK62Za1TSyv2WArkG32PtjJA5JTBkNDfrrEk6gHPuD2XCx9Wvf9",
  "key15": "5WtuZTkqXN6hjdt1CwnwaiFDbkFxWMTxCDSxtHrj1M6DnfZzjCPfLp9vNg8jjPP7k5wLy975scBwLv5fW3MAkgYp",
  "key16": "2xPMregmw9ATCAoECCLuf65sVbQBZfN7dxoVupHyMp3VEZ17qp12HTgF2W1a3cqi6A5qN7mSAZi1A6J6pLV7GHUe",
  "key17": "4CCiGCbfKzvTHCQJThn3HJy7J8gbAXVgLbxBYMQwCYX8GZKomDeuhTaVJ6f3X41dGBAU9z4UJb5NdngMeZRAYcKj",
  "key18": "2EMeeXabzgFXgA54Y98AQpjfL7YTtjerRJ5aoXEw8pzDQNk75AWham5xaXndBi99mYWBnYBL5154gJUCBVEfWbcC",
  "key19": "3CwCg5nMY3CCrVqwU2pGGApFDrDwgy7JtjTFD7DpXhM2Aqpo4vatBSYYdDpRLLModLcjB1fk6KBpwpSXdncTwn5R",
  "key20": "3Wnxoi4xXqyzdZfPJqZi8zMEHVffv4XYyoXsSrpEMHkRn8zBYfsMqhqV2rwgZuPZC32TDF97x2pGq3L54JAtJikx",
  "key21": "Dft91qHuGVkB1wQuctcB4HLD1saCTK41vSz5aHxxgKEfhEBvjBxWP4vEx2XkcL4MQZpm9zKfigc5DjfLYWxRa2p",
  "key22": "3CR4gdWyrmJC1JT6KzVFgybtEJfi1pMxa47rUuPkSaRgJvj629oDkbzhUYQ7gyGtTmqHFKie9iZPRXJyzffLFnnx",
  "key23": "446aeicWh1giNoqwkQZa63D8HCGSDDpjRnSv5WzBPYKFfnJ91bb2xzAL11Qbka8Ncau6KXSBGCWKYeqeaGpQWrnE",
  "key24": "39MkU2KUNpoVkEZSxXCGAdtbw7F4jAvNq4rcGFzFHkWvXeSFPDyWEAW1WJmhKDmip7sjpNUFbXeLLLR5fRS44UAe",
  "key25": "4voxNeTUtbfGTnT6TSGiBmJmPs4TwSyEGmYAPBqq8EHUNcixd2mNY8J8FvGhAMYAZdZb7Rs9ZruWkCrtbjjn577f",
  "key26": "3t6YT2TmsxxkbVYtt1YZ6HAowFUd3zgzgyX1ZzfxxcQvtcGGnEZpU9Crph4AquNUUrWV1X4TPbXLTRKfhFY4ovXL",
  "key27": "28JY1PEVYtJFdDPmctheSUe1Dv7Z4pYtst4dcUHMbwtY5S8eEQmv555Rhriik6D2j9XHH7g12DLmgsRYtrMVdQs4",
  "key28": "3jhC9w6sPzfkMMea7v4Zxq7sxE6y1P9ZGGpc5Ga1HaCbZVNsBQovCu3WNCuqkAL2AP1n42eKrp9hi3jgTPN67jGs",
  "key29": "4GntHzbomKTe1QPu49JnvGrcBidXnfhwnHBURFiyc2t3kJ7WRKv7PxEAH8nkDdpPegTU9Bi9XPq2sdpbaFXQASWB",
  "key30": "4eX6PpYS5st7rnzoJT4up7vMUZoo9aQHRKMpPcuHcpMePTVhPjuUi1K9mNT9FDvTzEdGdVAoMpRx6X25zBebYs1J",
  "key31": "yiMVGqTvj2v8uoMYEhKertkTq1h5Czc7KUPniwed2zc9mKaNM7MAKg6KqRAeyiwALAzeL7VVgCpVcWT49cuLYiP",
  "key32": "5a2HQCWuTrs3BR2Ax92DPwHk9oo8D3r5nQQcJnPcWAdNsbae9hko9vuWJTNTLYFMzatJaxtS3X78F82941v8e5jB",
  "key33": "5nEWFovcbFwDiggp7QhVjm1wtiByeAUXn5857QbQFdqcDoridFjXTTMPGz6baXmj347TTwrbXBekPUSjnZNhnNn8"
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
