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
    "WssoY9eQfVinFYH1UmECBP2nLgkaTQAvBBt8Ng1E5TeJCNVw414fGW1HafnBJNriAtkmuskwEhUj8Wh22sPKsek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ALoaWmFCVeRetomrg8EMWZvCojJ2ZK3pCKDbcfNV9CPv3REhXd1mAXThRwF7mAEHvs84ywSzPLhhan1Mwmo7F73",
  "key1": "3zGKFvdTjFt2AQsMdzknU2q9ixSrYD8uqU8hcAG4tQTmmtbPUoctaNNBvFrpjnPxztFvhfn4XKm74cPpubmZN4w5",
  "key2": "5Jz3AXunBGXKbwCb4AcD9NMi9T2mGPbyDiVKjiGQP8Y4S6eYQmJHXSCgcdyEC5K5c9FiJdTfX3AekJVgtdgfGEXN",
  "key3": "3sztmQHMy3cBT8RwmAanFPtmwYNqi5hzEV9xf2Z68LVdmHDGcv3hmXkQeY5NWDKPKo5iqccdqNwb7u2VDPS2yhWa",
  "key4": "5GBSAi23ax5srzbXVLmo85Q769gviLpXbN7oZ5XnMj7n85LU6FtUhrsNgbrb2oUiGgVQYq8wJP3Ujmk4wuz6f5c3",
  "key5": "2zyeFANDVqq6269b29AtgDUTBdeEQRBBck5YwwBr8m1fHLdNyJXGBLYfsJAJanWVaiUk1rYUBCCubx4EEn8Dyip2",
  "key6": "67j4TRPhdTzm1MR3m2Jwi2Eu44rk7odUrw8R7t5dyYUCJDigBmvXBPreuCC1kAxMbQdpVHGThqmfVgX6fWj2hkpk",
  "key7": "2itxGHhPuu2qxryzZo6XPcY4AoiygNPnpqs4wfTbhjPZowJXDRHiVAAwNUUgJKzxmVoboydk7LzwXiUDEY3JsqsY",
  "key8": "3K67mX5HDVnFm3apKBKuN8vnLAWH2vHG8aqs1gC3sDmN3dNEheFbxQ3LRW4ZcZhFeZDb8gaKEsUHghWQjZqqizwX",
  "key9": "5mVoWmFixa56oM4K8rnzatxerG7BVYWBoSGk8QLHHjvngK1fxXw9933osZtDp6eMqakGcu6Cud1BnHf9pFS2An5w",
  "key10": "5PJ9KNktSNuymVN2KZs3GLZjM4BuXZ4GPfXeQsHM3wMHQBd6TJSESdv9cW3FmTyypipm1tkeY8GC9oGPtc4Wi5qd",
  "key11": "ycLanc8jQPgZpPaddfLpoQbWsdbQiGeZa8Es98puZekrpP9ZpruhWvmfx2R6mrGjFTevZW4kdFhcgLiP6En9mHD",
  "key12": "3K3ZmKii7RF8FmmzmQEeuVUPwLi1BbesfdGXu8xzHdFuxjMQCSTZzcDnmCGVJfhsWdLF4WCmq9SAHH5dhrk9XzDT",
  "key13": "2q3acVxxS1y8b9cXSz42BjXkTTnb6fSs2KirF1C3o6GzdJrWD1FntNi4d7gqFzqcnHix1psc1m5SPy2D6kukgHp8",
  "key14": "4hHLUdM9yKgUCHmMDdVPpBdXweTFbF7b5A4pmezQap8iiRexJ7v8mMbsq4GQrBviz2HiiUv3grzuGgHYKGS3RkoX",
  "key15": "2VG3njWhmmMZ1GQyeyT2J867GHaC3FZRRYbm9nPP4QS1VR3Mkjc4SqDSQkkzj9U9rK75ASd7tHcLqa47bA2rYgoY",
  "key16": "5F1wGLcxyT8wJtFZWbNLGhJLBc1ETAxAtTErXcLUoyff27vNLetxqELsFuFWqnJXoP273iLYJR3c2sHis15S3WNY",
  "key17": "4qcCjgCEi9FAvxckNLKRp1DT7UJD7BfGtVapPyXgCpytqwdZF999w4vTRbkvVzLpHiJ4o2ceSMVT5qyVUa1BmSbX",
  "key18": "4fjSermCQ1jKWv6As54NehBBELPHtad6Hku9txBN7jkPN18UnEdUEJE1oMLsibymWz37BoeyfGRHX2icRyBDYSuR",
  "key19": "2VNyjMrTDx8hfkqWZZAvarZ2LbwrS4F8vaZLXJmQSAkgirri3Te8pvx5S66kNEyucJm37kJeXojQAmGQeKdN5hkD",
  "key20": "3yaao24Wr297bE3wc6Z9sQnpfUMLxvi6yQDyBX7Tanx2gfemy1L6dVVyg4N3KCNjuQ9j8zsPy3BYXPbEV3kXMFoZ",
  "key21": "4LtCnJNMX1E39NHvmkQaS1Jbwt3Sx8cAsg9vDgTpTX7Wx7BMhPB9vsxtsjgMZqm7wwXzyrS8ffMrVRpHpYEVjncB",
  "key22": "44iSWLfTL1pgn7jsSbyD7vTSP5QR34rFBmUjxW8Bn9wcs748xBC291T7NJjxtKqYRbSA2pnV3XYGY9ymMKooHvY4",
  "key23": "2pvNJtGaM9sbqNzUeZyyh1C5RyA1ZP5Pqy4TzifSKJzFV57MSNDwcrA8MCUaMpAbq36oK39qHvQP3qSec4oqHv57",
  "key24": "5JBnJyty4DsQoDu3WEkv1N3G6CnQLuNqdvzEVCGsdPgvca61eupNMaKhe5cjPjpGA57W3PJ2wkFZymRbu7BS547X"
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
