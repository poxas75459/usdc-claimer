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
    "4YoHAwqSHY8fvBVZ7fRLH9qxFGnCgwzkFJB1GyEunG3ixnYpy5MQzX3wk1PXUi7FosBScCXvo24jQfUdoueU4ey9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gmo5xywbnSnv2amrDNsuwYohZQxWMf52KgM6sqLvzY4VcisoQnJmUVj5dgAqhycwhjuwZ491FdmkDunmn1dzJmY",
  "key1": "2rZ76tUVfirrtziKGcbzjb9MdhVtBv3LcEZmsvizHerUMQr4uwHxZFeB6pTxzVa53j6LQFVTrKHZjgVGxvny919g",
  "key2": "3Gyxnzq9sssAAEcaBqCDqZX9jijfCSj5xRNVqKfvJfcoEHXnu1uED8oC8UeSKCtizu4HToexGKZR53uU8pNwZMTo",
  "key3": "64H8XDiVzi7uvBVhjQTv5o4xAGkdwwTf2hYLZPPfCaPXZcoU1e1TiLhEbRmD5v8qph5dbYrfdJEiMGdR1CPf5EZH",
  "key4": "5No9uJBtLUf7KLMPN7Bi7v5pFbc5vFLsDEH9mRsasLevqGiPRhWfwpDuG7kEPBJbhbpQZsWFpFHSrXWgk93evEdD",
  "key5": "2wUuVjXRG6Kvrj3g2sA9LEVWYmyJYAefeqH25bX52zjNzt2xZ17n3Red3nSmvUVhBA38Vx6ScDaPQhyVqY74mHUD",
  "key6": "3MiHx8GQtqo17urtd3Fr5iLX7UTmdvcXBi6PyJCQj8jzeNuNrd2ENk1XQ4S3yCRBasioxedcD5S6eqvio2T9MLQz",
  "key7": "3AmKQ4fFNdN32yiTARKNnMBdLktLXMMNzGTSyRC4o3qG9pCfoQdXYeg79FVDWtixBsHzZmFp6vXU97C2ef7j2ZhP",
  "key8": "4UaXjjxZyWVLBmct3CZQgiKXb74yDMrADyukfFpYFFYDUMcH9AwCjJNNZRt9mh3RqMH92TQrXzjWruihURvSySGQ",
  "key9": "3Xs8MnBcb515Ev6hDHittETXSijvPVFDB2HsMTLynvwy2TpADfiyFYoP33fbrHHQb8tjTCXMA1fiBKSSL3GB9wbX",
  "key10": "4k2bvpGXK7QNVLYbWoJkbCdpU385egKWLjeKZaiCGDdrrwaYxrjQWF4cBpnG7XUPPvoRQh28cGHEVHu2hp8RVW1t",
  "key11": "Rh8aFaaneRYFk6p2i9DNrtKrfkty6CZi42yXPdif494ARMS1a4bf9pyM1RpVVWARWmrdqVSmANZ8TqVMPyAaYcV",
  "key12": "6dn3tvaaCEsFReK474ThMYcqmy726wfBQswKJ3JaUR55eR2gFv4pE9HeqqeJSamdc3RMcQi1rN9zxjajNXxwm93",
  "key13": "hvrknn5JX5DiKx11tWamenkcCbyog5qNUfFBuiHPjfJx3N6AZP2hnQgmB1hGc18d86UVBbSKBMa7vpRogZwQvRg",
  "key14": "5geD7KQnM8wyzbGb2YUpNWarWw2nQe8A3pxrkFNKkJeCTTfYq1jVijXMBdiz9DKb7EXAcg4qSdDb2UMZCmG4stMs",
  "key15": "3nB44zbycnRYoiS9uCtCwmiXDCzJ8vtQBSHQ8L1v66Y65mEmwFNiHb4XoZKJsRXEvteaHU2TYmo9a2ACDeRJvaLV",
  "key16": "vF8pNrZ4odjCsCvj8NRPrG84A9hGPUaSNtdz4SJZWi68VRzHiNTQ73L6LHLLS1RM2L8zYzQkJd6XcZByVhCkzXX",
  "key17": "2G4Dp9edKod2qwDtFUdFqjNmajnn1bEw3YJWqjgSSJQLzk9VmXjpUMtpacc4byNVMnMu9NMcM9dhZSS4qX3bZgGo",
  "key18": "awzhVN8ZoFagWKPzn2Uayztu2J9CE9fEqdUL2cYbYmEkUAuxLuaJBJ4jTWAzcP6PLnGRfnbQhszf9eHmKRz66in",
  "key19": "3xDPZ6jzgRFzFbYdttuU7pVfNFAWUNzQQiFwon8bZnmVLBq66zTF3eipZ58moowuTmac6uhkGbG7RFKSuyiL3aKv",
  "key20": "5gFun8HS8RG4XzgCU1F8w4XxF3Pv2x6dWBPtmjZmhztP2tT1UgXAPVgum6yTEarZsEmF79edj83wXTCBVtqLDqLB",
  "key21": "5J9Ti7WpQYPQUik8fGyhxkrkjjHiSXvmF9oLkqJobF9dn9PBqVjuooBLsYX8xQ7JYUQBybXGrKEJd5HWUHAuLE2H",
  "key22": "33BRdc9pX4F8McEuq9dZKrA13hGXZbMwtquz2Bfw5zDhqHimo77SjrfxAC9KdYZxp6ZMDK1JyYgJ5evGD88UQk3v",
  "key23": "2GDprLPxAv1Dw3zrhcryNurrkVzF24MVZ9bSi3om2nYSi47CVwtqQ8Ar4jiUXi9pXj5JjfwVLidsmJTqqBgwtSkt",
  "key24": "2RHXxbL9nxSv5MNhuTxMzR5cAsEZ66QkpUnDuihUBjMEsN2EMkc2SqRYpBKqzuHkFHuZ9b7UVTwtT8QnboXSXGHh",
  "key25": "314w5fwoDDrdQzKd7Ek5xp2vkmhcD1VYe2P9JXPw7LQY8pNdq9QwmsMB57LsqxmH5nxDUmVYYFLzduLcDcMifeM1",
  "key26": "aRnEEkuzYwAVRDVNcp5AbDFYij9EyUcWUCsmYBByVb6fD2HB2Zr595hj3JnUNmjFwocmpnuknuWE1AtYXaQiAgG",
  "key27": "5zSsdxSFvmSWWGSN2opLAM3UtP3aMVB3U1qchfZuHBTHhr3A2BujyNZv9nsaWicHE3geF7pXJagn9bCaYyHrbjc7",
  "key28": "L4FzyLSFP3sEr54KhpweiWSxPcy6k5R7b2NeU267jHD6sujeTVe63f4ieK39QSS69HXLwM4nEtgnRg9juRJx7hX",
  "key29": "4zQQu1SanMpDDCwGkKdnx5wihs5pSyFo5nfp8C2qvaUacnyRybVYjwpFsWbQUGpJxhBAG1qnLqwkwF8uxjHvpy2i",
  "key30": "3bSWV52LtGcRAtvqBpidTmmv4zWDZP3mfCSdTxyMg4iAGzNS4AkTS8u2TkLgLxJHZH5WQPikLEnAVTUn1XMS58uf",
  "key31": "4qMLQwfFzqRfoyof65KF4LKQdrCgZjUxXdvt9rUuBghWDzDkLuZZttEY7kFj4nzxNdBW7mWtWo6Au5yWaGPULjTh",
  "key32": "5ZDuYEcuE9nLrN7tSpCZ49ViQZMH5KVtoHewyBiSKAmEsDAdxqL7519qFVuqeY9Pf4J1ThXvJJZpV7XiPcSnnKzF",
  "key33": "51Gq2RjuTdzmzQvjdd7kzkPVW9gc7J8xHCxnF3od1n6vipZvzcHkPqGtPsDDVM5PHi6oNuwmu34Ba7W4GqoiE2kC",
  "key34": "HD2d9mPAbAmc8BipgNNa2K1TuoVhBBoU3cfbsCvXpGbScXZj1zm9VUaGneV1UHZ9QyUWfGQyU7EXPm3sTRXoQ8u",
  "key35": "5KEDHA7WKTWtydMhk22j8pz9s1b7CpbrccLkPUr1o2QGeEKBeWWK3qGnnDckymCpi4ne7VVaSZG5z28iCsNoiruF",
  "key36": "2JJ4HPA87HPJvCRXEA2sKXM9y8fUXaAorMagVFZETHNdXHGkWkfCQndoytcj26vByhLsU95BVvVit9Xn2DwcvXUD",
  "key37": "28xoQTVtfa9rY9PSezKvRbA3e9yUMGLRhDLUiLd7uEFkc69NBxnCNDjSV7SLvqXxSvvcJWJjj28tCPm7Dpohqzdh",
  "key38": "5L9QSmVneyKDQjbQ9Aud7kNCNefNzcDZthvzJXxbGeyriLUJ13ioGFqajLudDXrfWULpohXdxksDkfuhneCH2VKT",
  "key39": "ZoK935e8fCkwNrWcR2EPnnhz8rQhZ7uecX9DpZXj6aDAQPDnFSjPhuniLBnfrBPrmBT79ypi1jNnPSSVrXFSTq5",
  "key40": "5mAUM1eWuY1jMmN1bGzH3rwhmWUKChVcFsKgqNCbhghSBZ6LhC2Ck87GkKxw81LLn7jwzPPEGHBkRkwroe8rdcaB",
  "key41": "HMnQucmUsD3jrCwPNtgZr31PxdF45snubuZLPGSBHsX3gdsUBGydXcDuKXoJTMAroc5k3E642aMkQN9ezDPr4hJ",
  "key42": "3T4fmhiK394euznk5rMHt7Ssn5ZWYDzvVttWaKVPMBzCr34rAnPEcYDXogTgMawSQK4dasQ5cReLibHjn3rU9LE3",
  "key43": "5Nw7jck2VDuRdq7hKWpo23Da9j3QKLbyRawyxJvE2jUyu5KshY8LLy6M4KcTrSsj7jrJRvt6AiJyxSSgdQcxYBcs",
  "key44": "3F7RPTThmWayca6XWb5WufTpgMafm96N6By27o6DeF4B6zVHgZotdUGWs9ZgEuB4EgoBCPtRdtz9cHbQ9tAHYwW7",
  "key45": "65dteAVaaEw5hJKPGjCT6Uxscw8bnBEYNYNPujfaV1eMwLYsivjv5ReuLS5naJxsRZpo1yFDND6UoJCDEGxt7SB5",
  "key46": "2FcrA2BjBtGEpJJwbk8FCkPRPhtQYBt5y8yW9qbBfUiygJLVAEnMK1VftUoLhPHcC2koXpShwrXnvfCDc2bqY4QB",
  "key47": "57a1HDuABecEexiRH7WwFtQSZKrj36fYPCFUcpAvpzpiWqabeDd2K8GkaBsZXSq3M8DVc7vqpCh828Gei4eRY9U2",
  "key48": "39jjEG3wb34fDnhcV7o4fLRCfb2dk628kf8QCCfeEBVNzEYY2VeTWrfRV41pdfzBvw6tFSf6gCFsspT1g6HFdTVD"
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
