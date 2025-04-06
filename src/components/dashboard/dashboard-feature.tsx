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
    "28cwkSy7vdBG4t8iYVKUXXTgK8EvQJU2kzJbjABdS7wgj235wbZCKhUKva2UV88HSefP5ycanVghZVRFimB5NWjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zh7F89orGk5r7u7iwewnWDHTdLL7sofGSdPp6p4uPsHCfJTD5nRehrcb4zWNfENom6dEAGBYPuivx5sFp6s7bWt",
  "key1": "3pq9N2ZJZxYctPB3pB91VMrtKKEYieuHwrGoARJdLrZKpcoH1UEwHzhPZ8SbdK5KLtPqd7Jbc8a7qT9nYnuDLCJU",
  "key2": "3AuBMhoQjcAZiX3HpcVT5ycKb4nDr7jq7NQcLM5koeTrTgxmJHbH94gTVe63xLW4TZuHAoS9nugsCfjPUaPjtUBy",
  "key3": "5zQXy5DmycRWQ4QtAtNUHbRkzg4hyYczhPrDYywrgcZfF1NUVgjet3BJh3xEEF9TrFNMkX1hzs29ShwgvKhMh9TH",
  "key4": "2p9mjAdAkrV2ivxKxRJ6qNLwwz88tqoXKJKDYV2CaMs1Vy4JknrDyGuxHqWAkgpYxuB5TbfLW6mRPoTcx1br6H7V",
  "key5": "48QkCkrRBvbdKWtdgcf4PmjXT5TNPq2NsJu9PU3W3X2YoBKSfos2DcYTrEYF5SvYHThAEFnt5tVojvGuMVpBeHjz",
  "key6": "3USyyrsLuJi7QAK5PZi2zqhqaa1K2BL3NZWDTrk3mdAaLSQVQDZE6M7gz5c63rpYzttE9fTRZCbCHqbAiMika8Tt",
  "key7": "4ysFdVnXYN3DAdtUDHkHJqJuV4MR8HJ9gU9dG6bsxbyTM2F3dxkk11MNwkPHQoH7f984iyKXjjnkGxCW4wmpvLw8",
  "key8": "3yHTMn5L795gFdRZGhs7hJySA52y7EcVzYpkFT9u18fjD5vZvtBT8WkcjfAQCgNbpz4sxW9jfoDwNaDNLHQqYWhS",
  "key9": "4ZorhTXuEbDLMra8nhKbXztmmV93RKHGK59P1DLn9zZYnN6ix3mVETMWSSsop4JdrKi8JkWfTyKN2Qo3F1Ds4uTc",
  "key10": "3useHSQeeZgR1oehjiZA8f3CDMyVCjFo5ucgWEaVPHJMEb4oXeuCGK3w8i5ndp6RuS1L2WtxYk3T3xYeCYyXdJJD",
  "key11": "PARJyFwQcbAErfCnZrDruLjdn5LxmqNkhHWWbroFwRTjTKvmDMYf7HBJgnodsB2P79Ybf6yroMJ4VTv67RGwG5c",
  "key12": "5955CVoz27JY3ogbsfXfMz99LADT58h483QKu2YktyUHzVQkqUL4f8Y9bL3PvoL61NyDj7FXCvzjoAiuJg8Dy6hK",
  "key13": "3SSgf1tdXK7Zd2Yo62D9C9VRPqmVPJmuabUrx3wfht87vtKNmuN8YBEvFsZbhtRA94Y8AWYBvJQoQRmgxC3NdoUN",
  "key14": "52wnHt4y1yEyTB5PbhckP7L5D7QrKgdPWVRSomGabYzWbAPeQenZSAG29A8kKSmi4PxB2XE3bXWQojjtXEPqEU5X",
  "key15": "Rdy1nxWi4hk9r7QxsAFiWCSRGpEcbZg1EGH4GGU9kAYNLG2VYDZKsLN7CfarsFc7g8Sn4w7wuECR3DX3BEz7gBU",
  "key16": "5wQ5tjwtstdv9ozXAXpCdWa4qsK5JYYi1zxSjmL2UTr6aMqHfueCbuNVd2tAtMnAMyNhuYhNYEuNjvmikkKk61eE",
  "key17": "4wEZJkv9kFSmzgFbeWC31Q22oy4imKB5QD8voER35AkAYsRonSLHV26njckCE4ai2rK2WSZ2Cox7KhTCM5my22jr",
  "key18": "5zVZezkTD9EmBF6xjj5jGA6fjsUnX1yFdvaVyrEnGrqD6gfR2maqhvcBE45bbxuF4xAkJx3aVaMdNy43XRfp5Dqg",
  "key19": "h9FzL9FsBDx1GRgBg4QAvxskdqv3j3dHAoCz1AWGimDoCab2WvSyCAWeHJPoqFU68ZCdyREom19KoK62tn5DxZ8",
  "key20": "4Ry4ZduhavBk8mA5bxPyFjzCLnCaHWb1Qpqy3e2hr78PF6cXx7uw8MKa2CPMyKi599WMbwYCQGWQhnzA2w1dSocs",
  "key21": "31q4EGDeSfHauc4DdfutAFKYaDtvbcA1CJwzyh6ovKjPXzz68MaJRMGqaAE3dpk8w7aYtcJViWeqiT1YHUCg7rhv",
  "key22": "4ddm6NM7bkcHknLxyyLVzAKBwygU2wX4J3P7WLJy2YKbFx27TseBYvFwRCPnrwj8dzgb9udYuf3iUJqqZVGJdMFi",
  "key23": "V8yKGx4jGr45iyc49xkzimJqaJXrZcUKZ7iYwRy2btoCZC74b6dtRLVd4Skn6qhE6WjopDtX1CieU8BpMk1ckjA",
  "key24": "ifSCKcqd5oVg4bCVPra9vmn9NrX1D2b97w1eiPPGiEnU7S9zJbz8zvpRpHGgKwoyJdd92evbnB2TUxft1GyiWE1",
  "key25": "4C7p8m579uvxH1Gpsr4Sn5Aoa14AtNVYuMJ1t8NUjeFYUmx9tw2kGNSQqk45UxqGu1SkEMbZ2sPgxuyk5zX3rEa1",
  "key26": "4yfLjtqSwAMrG5w56svgtkJfGJGkA7xXAy8H5K73fyWsB6jUGWZxnHUrEbsGYA3JzVMx1WrivCTZHs5v6A8N2xuy",
  "key27": "A59XwHEftDCMH3AqAS7qD3EMJKreRHyg7zWNwAqH2mTY7JtBFXVSo14hK4JgFBXXUgbSoqtCpWcTbN6VLJcu7xL",
  "key28": "2pUh6peSNyf4Fp86zVJb9CAHqzhcF3ECS6b4iwwGBz1vM9y1rBjebNWuf7vmgswcvTFHrTF9NZuy5KY1AnHMQccT",
  "key29": "axrUTjbsREDKZWcNKCip1ckZY8q4ysLrDKUudwZDkBWGYcWvTPRd8n4pZphtnPJcKiokamqbRJ3hLyYpSuj5zM4",
  "key30": "6313yRfv8yF93D7y97qpffryQ9TWiiqzq3CdhpomoLoGpktfVV8sF7PZEhqEC91Uomr2BMpRf6CFDjRjRwwQKxKM"
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
