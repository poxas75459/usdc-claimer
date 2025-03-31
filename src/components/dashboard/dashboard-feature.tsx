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
    "123zCMxZHk586VmnAuW3rXeboGSVhoGHrUkVsoWF8JcCKG2nXHYHxuefLASsz4mLRPqTjFjvWFtEWQe3zb3DzHcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dqHyj1EQNWk1kUbNTnGRufiDy9Mmynk9zHUaEMphzMAP3ejUxqi3VCAA63d3ng4MJKTqiX31Nc8B4h9fUeKypQ",
  "key1": "2fhxxsAqbPTdnd6XpRevupx5496N7gFJSXQUvHPsncGFWj6zkpcZqYmaG7yZVxLBjhJFGvyjuKei2McZcW2JKKo2",
  "key2": "2uT2fykWhwCXn7tN5oNP2tRmdUrGCsio1AYEXyumbjmNi64J9KUgnE5dTAKDHHmZpXLT7fa4qwTiJLXrsQe8Pd7y",
  "key3": "B5LFrJXg5kecSHpdZ7g71dwGfiRxg4T4qKX4cdU6eMYzERDUVPcTAgCoAgUFej9Tm81Yoffp7asJiNPoxYGHXH3",
  "key4": "3uaLo1YRQakoXoysqgMWYsQYGQUVycmDP8K7jGqxgUcuD5zQXsLELbDgvCpScZnZQoWgdtaCdbMKMajg8E2veq6T",
  "key5": "3dprTSeJLdj5vh1Eoux3J35biAMJHcdzUpTRSSinuhmLQPpGv55SPLmwSnarYik4dkyNxnMTLouL8kkNQ73wbBGq",
  "key6": "26KDpqL98CdHGDNCNXT4YYxdKM3UVQ248TAvWtLxHrxReDCTCBbgT3dLVkeCUR12T98N1nHbwoKW6y76V8a9FYyf",
  "key7": "3fvrtQHBuLizcuT7QrnmaKigjJeR8KykDkPW5yzFMn99Nh834S18idJh1jUy3EaDPGs9e9ptHwxvMoc7ewsjLLFi",
  "key8": "5bv1Hqibu1cVrxEejHrVPAsGv1gCTp7YsPXz2Y82h4s6me6gkjydCoo7mknAzciz7nAgroYHqBPnGv4jo4LpY86n",
  "key9": "5YVfWPyTKEbZxMCsaN9igDjiCWmgLcwEojUuKsGLGmXMD9j7Cm6r2H7p3XXWA6xoNSPemtfYfwovKN4gb5GGJvGg",
  "key10": "5FSRQvUEK8TpT4TKVnjTXgpPnVsmCJ59VLTDQF4gBAJZiqfawtRwVo3VwxUHYauZuUf8AJh7YqgPWzEjXHaUYt47",
  "key11": "624jmaNf2WkVxuUs2GigLsPoQFz62mSX6foCQEf5wQDZHQcYz6bTJZoNz6d5vqqCWueSieoumVUV9aHdyFN8vYyA",
  "key12": "36w2GVHo2mBfR46HSJns7dethsk4pbQQxm7uSWvA6rVQTucbNHAFKMcYbSyJTs3pN769mqoTjGSq8CiwMQpftkiP",
  "key13": "58MpoNodPffzq2dpSjsdnA7ktCjLuNgYv8FUTsRNBbc3wL75s9vQxNLahGbNVMUNiEcark752fu3aEJXwktKvt7d",
  "key14": "5T44fZAXJEhhprFCAZY6PPALHs7jq6MDzyPdXXMB3BWLiFPaSEGvPeRV1WS6j1zTxWqnSS3Cdafo6YPH3t7m6gXf",
  "key15": "36kr9DqL15hMtqmfeHLpwXGu2MdstRdLPpiPwLeFeymiTZioNgx62xZxrc7NN7bQjJfpubwCUPvqEBJttUzwzQgC",
  "key16": "2xhe9AGDuBKsEnYZJr7bc5QvQQyewVcUMuwufhZUGwoT1snXe9eckjnbEg7uK7BHrrtYmXDGoVQo2QzmwBhLhXbi",
  "key17": "2nDLGq2aGwryDa9oGQdf81zE64iNS9q2fUK2YnoJk3YNTQEojoVadnrTdMm3wgJzji5RsVgWhGMmsFotYZ7D9Xyt",
  "key18": "5BmWBBujX6JCtrfZXX5W2FD3dLCmjWVEHz7jxcf53U5p3b2ASi4bAZQAfuxVWscT92FuGKERPmBmMxeq6nXzcQDT",
  "key19": "4XZ3VMKT7MiY4M6ivVwBaeQUVHWhoydAGwdqXtd3n3sbTBT24sXwXcL2m71W2eBHuaxouPii9ACTBvwfG4UwfPfX",
  "key20": "UbCgLE5QLpNBVs2THPbCMzaEcQVaWWEQBcr5QsFdApqDanjoPSZXSnsQueK4pD77TfDzGcZxCwxh7huU9owKxpL",
  "key21": "5mk3A4z5ZVJMKtWiKxepNSU5BBYbRuwvbDyxe5VZdYLiSM6DuoHxFNuY3esx5ke5TVToq1sohyYA5TvrETQ9mm7A",
  "key22": "22CecPrRBWB6h1YBSoDDdfmAFhMZpL3fqq5j3PfnpHVgbWSVv9u46ouDQHF7tCkq558WgyVsb4fGCQqZbwMLdYY2",
  "key23": "52N2PEazxaW2NoYY18t2apzrmpzjWa3kubGJe1NRyqq45a5wfPw7ynQizRxWkzicEWDcB85QdcLBwP2CY6gyyEZF",
  "key24": "j6ehyD4SKJvWpknrKza42LFEEStpj1TVoEjZvDBD2sKVkJh91CYnpcfKA15b3EusF4X57h9TASk1fD1u7768dK7",
  "key25": "4HZ27qFL8ZEajroKxLENBepuRk3YobT5m6T5cGMwmZJfEgMpf4sU6bQmkqGhgYYWcFsHqKi68GTXMu8VjQkjB8n3",
  "key26": "8iHao3VTooTYt82DZiWMBi6DdnyLYfLjkf1tqrfp2Mwd8oQAhdrgRFD3z7ELfLGwY65AWahmQC2k3hAcVssbiQR",
  "key27": "5bh2taE2GoH5JtjqrKuZ7rZHbLEn1UrgD2CcN7pzr36MwLSEFMeZ2YphHBg1eFpFmS5kJxQSEA9mnyHDfgKzXPMF",
  "key28": "22G7FKFRpKBZGoRht2Ex2TUu3PaGy4RL8YZCRGWPxrW4zDxs1931Tj8onuL8U3JSPfZxAZK4xr2uGeZBQd9rpWHq",
  "key29": "4WTSKwAXsqQWqpBq1FGZeJmS4FcYuKDdPmqmmLBDMEpc45gUKPb8gYtc8xC3usRU8cq3CnieJG8C6vpMCqe39tud"
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
