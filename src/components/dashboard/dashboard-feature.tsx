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
    "2Qr684CQNShWMqYQz9WzSrFzQk1SKb3TpBVAoGdPReWC3BJwa8xV9gcdLmDhB9PfR7V8qJUmSU6hwSDfhkx9MDES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UH4q9SXDSt2dacSDP93dbqFvziW81bJeFPMfZVCMn1rxPX7PUQdREUnFALZUCSXtkaJzcFAZzjAjgaGro7veUjK",
  "key1": "38xWDjuY77wg7ZuvyeYYcJmG1LBiouLFfrdsPGoCxFsSqGtLFfuZB1crnTgqPQRgHT8Lb7egdshmSJ42DQufdfRS",
  "key2": "4FxHTzX393BwWkBdZxuDndAFBJYy43VBSqpuwnLtyCVnM9giqyVL3WSGp5t3NRwZeM7WeoipGvUFT8LDsV9zSQdo",
  "key3": "4LnN3QFcLVzAagVTpisYmLdSL2BadsXzomrZ946zdSQtWqzp2qA7PJtBcxyCM7JPjbGJB2oz1xdkaK6MXuMdzonF",
  "key4": "FArAqbv94kn8WN71u17s7h55G5UfNbNLs6whFBdtnzRnTB4gJYVGgX9Abr6aQDsa8RKdBm2DLFKim1NCNHwDRUU",
  "key5": "2bFBKcgPFtB9R2omfjTNTw6G9zjg2HJHNhewkinMJsPkof361QodWJW5CpLckmLyP2G5LJvkFtrm3dBU7JNbmjbd",
  "key6": "2caN6FxHHo6S6xyQFb26c4Eaizu711johzmDGNd3yYN2ocgJhToCnGCGPauKmuhMAHdrxU29CkRLvNxdRC6YMJx7",
  "key7": "3LrAnh4oMJ4RPaJt6JDpYZiMJZ1f2Bp7bhUkkU6Mbs9P3yrW14WyUP1fwvFv7ZPHXdZGBJWXJDuxNg74pk6LRADY",
  "key8": "LSH4FVBqXTjmXsRKa7vEtPHABziq5MRGyAmA1oNof85dtV8HkzXNwaSxACtrNyiTBUc2JH4BroReGqkuEGaqMfh",
  "key9": "46whXCeJoMSTuTK7p5WLCsv3FrUgDLk2LN3TZHUMhEGbzY7L98fD3xvRGRkm7nYfCWSy2UKaXGViV37Bbxp5rShg",
  "key10": "3XF4RFRGvaozEq6LDqtN6r9S5maEEzkRrj89zrtoJs9iTFNtk5ahMTTzpBop2v6Nw9etng1CDCdwKX1Q5gEQrNKs",
  "key11": "2xU3AvyqXvq4BEgTQryLodvN5J9suGnYG5ZzcgJF2DWnPnfVjV7a13SM4R2Z6pmW2upbXExJt6BhjgkoCDtDgLTe",
  "key12": "3aZ4zd5o8QSRQjYDihEgGU4GmTqnFTig1FZYn88K5HW6iTmJk8VnA8thyRSrgMUkLbgmQcSZkE3DQ2nGeeNtwbAG",
  "key13": "imKSnxehdx1NLAgWZYUNuR8dDm2iQ5bPEdeN41GmVGTNHi42Eyo1dNVefKFreSzvC39cGCxWKbds6gNqkg8szNZ",
  "key14": "5bLutUnW3SV1h8kQHb92SVktS87c8fsR8biJc7dFaTcf8KQ5GY9C9ShcjBvvTyBq1CzuCsLeUQ4fa6hVZXf8Y5Zp",
  "key15": "4QASaemuQC8s1AFuaZwo7yLWdPND6QQRmMvbKBSHZgtxB3TqZacCGgRPDzSFkrCcYGg4eTgbQo7eif6EoYEwD9GK",
  "key16": "2zu3dWddV3zxATyTu8uFiNshHG5mvcgs6Wx27Gpej8tmW2R3cKJ9jD1xQvEbHXypNFps8Hj7hUD1PqESo2GaDyge",
  "key17": "3YfzxgGuPtBX2HNUFRN43UJEWtcbZED7tS8YoHHbHHvHJ88Y4cfP4qEVk7NU1u1Jdh8HodPTvcGLe2AjBLHdZAxX",
  "key18": "44vAdFi9jTCVg7nRHhf5WoE9LR1LmYrDWkHGnUTLguJjXUgRHyVbX8JPeDQMKTdYj99Ph9h51dvAnFCCHwqWDkj8",
  "key19": "XsQHFgHvuiFp6dNeL6bSwHKueZQwjVDkZtn284M4skMgt6HAv5QLk4QbYyGbe7f6Z4gVpeTcMzSCwP4kRbtgGw7",
  "key20": "3nxyHMXmxrmBV8zBhfb7UP94Y95REomd2Fz7Er1fwjN2nBzwH1vzSAxEit2MiM7o3Dr3vy1KpySsmcBjbT7A4nR3",
  "key21": "4xEQFZz4qfCmyhnVRwhRagKhkTKqJTq2x7Wf5kpQ1wfBLdjVFehdx35FzkGjYZ32xrW54Wn91D2sXXNMuUvd5tfA",
  "key22": "3tkirKMmVD8se86N2TuniXqXDUNTGfvQjwKnqSdmxS2C855CVeviPCKpnSmVU2PhLt2MD2BT8ugdu7fvx6Gvvq2P",
  "key23": "4DVrzzAR1Es2iu6w5giJzzhTuxtCJjgpX9gsBVoLjgvYRKXYyrUqtSxnssvDaLBSRdNtZXxgV26h9ZpEehyMPFC2",
  "key24": "3gGtBwKgwkGWYRjtW9mjXQW8irG1HC8RCBGSQcRVeWhGhadgXDeZ6vMC1SYmGnDxRhFbABX8seYRSHfn8sQr3hgo",
  "key25": "uhgqsy5u7zb37CYb1jJFznb4Erjn7H2i988V3KdiA6ZP3aVL4K7mbSu5kPgU2KHPJdLQohU1NoY7Fr2aswam745",
  "key26": "B5rHGADEMTFBJTn3Ej9wXXTvzYFpcnSkqHdAXseH6NRGMaHF2vA76NTAwgu5xsmtqRJ7YMTtyLkv3zBwvqbPXyf",
  "key27": "2vQCF9idcrEyH8wVh2twAbyKp39y2uEC1Qzni7dxi4LUxH8WU2yyc1JFehushRkgwxJsihhZeo1j4DsfL8M5p1sq",
  "key28": "32J3jTfCcsin5P9muy4WjtcntGA9DopsJzEZGssYyRnHNXN1p7gTzrbggDcFkKJsSH3wEkKqv84dwsW4H3MDxMjo",
  "key29": "4BV8uXXBScGhi2HCw7JtVSVhKoSmh1SKqTWtZBZXPj23cnErCmZbz4TagJApyFq4EacpSoZnTLPBLTrs9bYK44Va",
  "key30": "5iviw2ueCfTB1s9RzbEKTtMxafHDu2tnMyPKrERwTLBfm1PouPiPEGvnsyAEdeKZY4pxPbxiVafAivigTqjwMANa",
  "key31": "2x828AAeV5ZqDjPLDAcjJmsSh9gSC7meSsWTyBNRNR9TDYNHSnZoRYxLtQ1z6Y55VwNwhjR5yAuHw1c11aBDa4mg",
  "key32": "2qekzxU7DdeX64EpBYJ9Eunhx8nn2mCo74A3uX8Jx8FMXG55RL2GqKZhvUjyUN8xnhDDxS6wRtSKqf4YD2jFJZyj"
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
