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
    "h3cHYH6FKS2RRj3V95M8UCdNaMwxZvJ8oY2raunrqUwEFQwQBDrNMK8CogMPe2PeeW11rNPSzr5QZYaTiUTDm4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3efbVLfh1DZrSAXsLUux9UjFNkG9FAhvQv4HPbNwihGze9mckEMPwrTdhKqciSGQDBEojaJq9rnbpiwZ2nFpZMUp",
  "key1": "2BpJ9efuL1c8zJ7tUwV4nxQjAFaeKUj9UTUu1UAyyLjnaQzZYfSCie4vXyuUwbqFJtd3JGR3yzqy44bu6j3NpyMw",
  "key2": "BYNZtd1PNtLMESoL8YYTc4ebiq62KENe8YSWHHxoWEmWhPadMi4eotxCioz5iz9im9HyLjWJQxYz9uDnRMLVoYw",
  "key3": "4yrDN7yAboDB9WmtUQ8qBWUV7ybgx6e5NqfrhaHsVSCGmtdDiK29D5TDEoPaGguJwarYRPkwnGmpQCZ6aR7z1cXz",
  "key4": "4Lhf6mWxFoRMjPVtqpWvzhruYXGGw5MHKdv7cuc3uzVD8osbhsJRYpy4AZghpeiCbceDCnnjFufEXPuayuu3MybX",
  "key5": "wZYzdSKMqrG9dJgpNKEwhx4aT4V6DCTAQMc9YrDtJLDr3HiDdozbDhmZyqNq4nNA6SuSisyAukwETqvz3XcrQW7",
  "key6": "5xCMy3nU9ndQAob6FxZpwiZMVJaEGA2BYxJXuwcjH7u5Yq3ZtKQTk5zoFVya4vNrYAbyeCMCTBi45KXsXQ7sisF",
  "key7": "2WcNRGT96j3gk7XvBL9qFK1iBWFRqDDkZA7YLPhDVV6FctXDA4TJsuxQdMTD9nUK4XoSrLK9R2UynnYryAusBsZV",
  "key8": "3ieDWWZhZdCZnfgFHh9rrCVd9zUchB176KCeNcHu7MqGMPndDG7HDWG1pryU28GWnFXBo1c9ibCXDBQvVAHYoLvS",
  "key9": "2vCRtrnwoTMqBUVxPXrzxWhngY7aEwtpFRKFXr5TpGMnWGuwMSscMGH4rD67yAs9LT5S5Mrv4WXb8BTwFZy5m5CV",
  "key10": "4hEgp9KEDii67PWddVNXCgd9Fsbw3uxa6LsTBpkDd4Xqqq8MKHCJkfp3qiSBre6zWGTbrapWKoS6Z6pswbvhaYJq",
  "key11": "4Bgo9SfP2GVCHFjnuYYgoLcrkCRc4vrtV7ejmaK8KABon7KdjiFx6YXyWQ5bcPQH35v3irBQZY71XjAWe3SRgFAD",
  "key12": "35r7bP1hAYcj6DHSBFnd3ycoRmVGurmExPqNppq4uFe1qATnQdsSgvCL5q15NaXcw713MpkrHSWS32CGzdc5sWKU",
  "key13": "4wbypLtAzRrZb76JSyidxNmAhU1Ug8EG4JPD1fPP2t7nCuyze68RUysZHoNxyZCZss3KFGoLPBbxrn2d5qXow9Yw",
  "key14": "qPSv3h4MkDCVcynEjAcjGdixiAK8m5WBtbdh6Noy1h47TgoNUMn3QdCpEZhy6VLaeUkLzvPvyXzkswuL6ux5GrL",
  "key15": "29tepLYkZwZgSS2Dg6wYrQZLcrszuZ3M9TiF779omaY3XcpSGt1dQ2LBsGY1tLJGzAZdY8rCPTv3SHNuMPaCY6LB",
  "key16": "3LzZjicUoDXrQ6KVWi4VHcyw5xCKydcyyjeJMgkpU1nWNjKyn2zX79jiMUUdHGb68ofBVAo3qVtGeXeNsQj3m5kJ",
  "key17": "BYZmVRh6bsQjLx6Y6bkDjiGaxyecRnD1pv6xgnZjFHCfzzeBxPXzVXjCATQkWAmZyK6RnHAmhAubAhLxiJEuqbP",
  "key18": "48XMz1Gyreq4xd6YXTDZJbHfc139SfRm9GPnC1dhaKtdjoHhJEFsnEQktvjd4ue6afehvP2usKvDZVZUnmhqBqQ4",
  "key19": "2nY9RBQuqc8wuggn9jspcTy2Re1nWKNMhSxyA6eDkvedY119StkYvyESPMPx9KqkUkde7RFip1cNSbBq9LaRPbGN",
  "key20": "3EurHrQtURk3ua5FDayDKfRnBxPtc7PgdT53NCKokFsc8vo2ymk56fGnwB4GLnZeULmMr58kpP7n4JD6yZbdaXXi",
  "key21": "4kKue46MpQAD9YKQcPmpNTieUdFHXydee7h1cKYB39hxXY9ZBbzZ7VwsKkaKvX39bQY6pK6C1mPZfeLwPMrkFcrL",
  "key22": "2v7cZBxRSdnfcRrn5oC5ktBy2NzoaoKrQ6gCo3oDhDM6jmfQ9Wf9MHPqoFfqKMyPec8StAdfg5XZyCMzGTA3fWuv",
  "key23": "5o8gw3rc5JyNmXyi7hRXmBj5TNnjE5F2XTSKyHePh36B13CLX8Cr1Yz9mpQqKwE347XcbzZuy8W321X7R2cXD7A",
  "key24": "FHhpdVXEDqYYbpzGZ1AbhQm4CDrbEvWnzCYByJMUnY752YmAXr75Nbai6Kt2FJoavMZNKb7eHE1wqZ1FAggpDs9",
  "key25": "2sZVbKFC6egzsJnss7R43qQfgE6e7c8Jn3BGPxMkxvGyNmApf8SWZ1Qthaq2MAF7gcB1ReGGjCgdFGLQfLVuVx5g",
  "key26": "5n9ecJprYEroRB1y9swCWLxzdPbW5A7tVuLQceWRz85t9PH9pMTZjFchMmDXLFudvE5biJFPknCn5upXyeagbsoH",
  "key27": "2hnkBjcJprtZpgNWhDMwKhzS68W5LS5x52xuMgLgtFMiFhBG5k2qxCdy4B9jgRMre8bmsd4SbKWmj3oZm4oHPXLd",
  "key28": "3Q8kCdrmcWjt7Du5U3kPcRrhb7unzNaCKPYD2gHSwWAY4kC4uFMCrTdiv8nCM2geVwn1bBEuYrYVBFSqpbeuyeK",
  "key29": "3LK6D96bgc61Vg2XiWToTwE5t7Ves2k9F1QHCfnrsjsFHkPtvcbZnifN3DBcKgq4dzcQpWazQ3mXmMnRgGELd7Uj",
  "key30": "GNS4VTUiNwysesdfW5WM73vqrewLciyCUZrCFpsJEg2BJbVrrZRFJsyAngYYNGRN3d4drjfchZB6s8Fw9GD4E3D",
  "key31": "37nLC9WivLmtx4gAuwR1AGcPztw5GffSwYnVtYtnnCEwabHTpBpaqqmYUuLDceRUzt4KCUfy5mszCRwXjdgnENr3",
  "key32": "o3Pn8Ws3zoux6UrEcE2Es4zNMjTaAA6dzBBDKmczjwziDmCDd8SrcWGrM9weYNZBaFKUz93FZ9RK8Se7DHvJNoY",
  "key33": "4r32JsZVCRYDwLTtY9qVr1Zc1GnjgSghV4J9ZcutvMZVUBB1Y2PbPGNQmmrd7FF1VMsuHSv6fCmH426RD55ZUrQx",
  "key34": "435iuQmQgT3Fzucq3D3JHtXYmgw7WfQnykpDabzhB8atkZ7S1STxCcwAAzay17kvZCdkQhMMC3yiiDibtPjavUsv",
  "key35": "4va4EbosLbenQGRq8Y9q6jHWM8ZL9CoW9rwkfLAFqEJPuLYfxkz6zHchgtpys4TWWgNPke7RwrsNmtB1ct1z4fiW",
  "key36": "jnhZnWkWkbPjuWa2cyV5mPRdUdcZ1rX6rWvDHdKTVCT5JAzwhBnPrBFFofL2nZnBGf1yu7dsh5aAqSoEM47pNQg",
  "key37": "64aLSSMGM2sfJ8rSBc9v4C5UFA3Av9ATLUBkMrAxiskwmkwBoSRdQoTLZTeEktAPWnseDR7aXXcnxQMHZu6uXGYQ",
  "key38": "2picMdjcDJMAeLNUWEGEJV4WqUwAvxHdVFfeSP62qogJL3H7thb3FVT9XqWPe1io5nXHRnDDRoA7mJAfGDo2mWXW",
  "key39": "nv8UDBbCHnxUeiL5qnDWphXtjxiByVRtKBXUzLJKn1RnHTQ7jUSUXLVh2pPJDbXpMfuA7WXQVF8YxWuZe7JmCCC"
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
