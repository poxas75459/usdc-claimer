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
    "2a4a4SxSsrpHABaJpyQ4G8DjKGiSrAsjoqPjpN51qaHT3x9EEeh2xGdEgtCKm9QxTnBL2VF1rGW8Dwf4bSyw3Wx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RJYvDon7FUT1nda9z2SUAqAxA9hkPSjDxFP7mxmJ1kCp3VgQvF2MMiTG7UkKdYN1mGsJ5ma1WJvrTwCax2cJUWc",
  "key1": "2nu7yuBL6QxF7Aif4sRRDVD63ZkVaT4bgCgGQkoK4WUHLHUvVqR6paRQTPQocQSnRD9Kg2JC9VgAnf3GPuWniMoQ",
  "key2": "38Rqb5crHwePvpe88FCJwFxWgFQwvC5Gm99ckjzdrSEfZ2YMKqVKz6pEyARzN9qWh7iJirAhYCQWJWLjCpAiHGqo",
  "key3": "5tD1SPW1TvLqJ4ALDNFsmA9wZNafC1tpbs1fT8evbkjWzLTLZ9jo6QYepJDLAGsMdqp3yr8hA9FbgoWDRToeVPVD",
  "key4": "61At3LfJsJeiBUcNzkP4KXSSTknWtb8f3XHh3nzd9vUKh385ZkWxXoZkBuV17nA6cJZ7ohRFEVWzUMU5MgDC2nzU",
  "key5": "5VdzHmDnKJ2xzBXWYm15nSXGPvTbwJBDW5QxaAbL7Eo7YzcWsZGQ7cSzqtTXNLTjJVWeyGTqPSPvTZbx2VB8vBxN",
  "key6": "5yYsVuJqqwxSqfcNYF6SHgMSGXzKXsJXnk19Be2roj2P7KSXRjULerpRtV2TKpKiSPgoDmBLCNaujtE8zEHhh7eB",
  "key7": "2FpuKwW2xAdd9Lgac9EErbjfi7xnGS59R4WuypCMwZfXFd62DouUP6XqkpPEi45CjdzNqWEkwAbmPkUY7C8LJnA",
  "key8": "Kqx3QUv5r8RKYWo38rpKr5bJVmoBQMheaeiXtpMQcnYQ8bziA5Vf9Bd8aGjc8VhGgVMUuG6iNFrruVpqKCWna2T",
  "key9": "5UKhVR8sCLkpmp32outyH1j3Wcd8dQaZ2mLoNmXeUuhbsw67VCWRkPd5GHyyRYsjQ9kXnjK5VqN9RC3y5nN4P4U4",
  "key10": "2nVVH65AwfkMf1YcU3q364wrFvFo8vsy9mbc68vXZtqZ3ETui76jZ7TxF5Ucng5V9h3xiGgSh9Nw42Ad3cnBx1DS",
  "key11": "5AQJre5XtyZnsEmzn9m5Tp2twsBRBUM4otECPD4x3Zv5QRPbJwkyXTTEaeze49jzXPVCJRENB6vZVkqhNNFz6MEq",
  "key12": "39HBGd3G5FKxZTS2EcoPavwXDPc7v9C3QpTYGr56a4HRd2JnPsV9fYRU1bpyqVABFoNt25EfHPmbstZBnNh5EDNV",
  "key13": "4WjKzWJgLFfKNpz4rwHNeGbX1hM2NqgkH9hLdQWQiEqxb1yMFGHt3WpoVEAQJonzgsD4kr2Jxdf8mGAWkQjFgPEi",
  "key14": "3HWZkcwKpDGZgv9XZ9Gu48gKGo5hizHooYmSs8fYncjXSWFnwS1zrukcNwXmuUYXACwyx4er5uWsLCJq6Z8XjhHk",
  "key15": "Yf2saiqT1pWWg2FXtwHPhP2F9ddiJwCEFPZUJCwcw98wC2zDDTHUta2mfRRaXPGxztabz8qEHey9EHovRaVYvE5",
  "key16": "4oY9vqESJqxc4RkgFNdJ1N7R3FxF9ggQsc1cv9QrYiCXBDymTv8zAEks9CW8vZpZoefrbdLRx7z7YRr8ki4zKphT",
  "key17": "4d1aET3BPQ1bQtskVA6DF95jgN1NueWGYmNjxVY7R8qcHsZjkBuuYoNN6yjT8XsZRk5g7rnuvufVYCCN9GogiWZK",
  "key18": "3jNtndhNKifjrACWwcpejkEwue51aCMGHrp965pMo26MaCUQZSPhREa7q9GgeQUfKLQDptba7ADgJ81T29zZXG43",
  "key19": "ZVjnXKB2vFtDVYXNfitPnFwtdxBmfWkPBkJhNeBR6ZbAPcxQbVCsJsUYrBQN8y7fYnTV2EUsALa6b3JUESh89Hm",
  "key20": "2JN36i63rAxGTRAXZgJYrjNBxbERNyoZ7YzpR8Td9QMUcwN1iuXvVX1592yep7u9xmLqDf8XnphPV8KJDNJ4Fgok",
  "key21": "2dK92V3byDZ6BYws9ffTrjknR9o3vwooVgtteCMdUqtgnVoCuBPHwSu2GvSKmx8zu7KcJGDq91RkUW36ew9shARR",
  "key22": "soqoBU8yPgKHube1npUumGs659CqFiofQJPwLfvUAnFaE3EaMHqb3wbMiVSFuMFNBU8eemsJ7uFj4nCJTLa6d6t",
  "key23": "5rJtMW3i4ZZa6DjJWL1ysYRbAifVHqCP4VgaksG3aC4ZGjoZ7QtenmAXryoPMMyy6SUr89xessPA4xRet4AycLST",
  "key24": "219RxiBXEPaUL7UfFjnv8SpLxEx6JC2xj9EbtW7T7dVZhrCdvPTcxU2SzsSxS4wUdfZdhkjCH3DLPt4wdCZbjtkk",
  "key25": "3xsiBdH7Qoeua3oAbXwd9NpKYQCqcHw4cXBoYppz4dXcPFVb6mzYP75oFzT2mN7NqU9oAwvg1G2JKRdTs9XmbR9w",
  "key26": "2bi6r6P3rTEv8FqmhAwADCGV1JEvhjhoe8r8cpgN6RQUzyBMxx2FuY9hAw9MfK1sNukx7V6r4yTF8qcESn7FBJWd"
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
