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
    "2bh6pMc6BRWHucpd2i5Q1AFhk4ztTQXjw1siG4aEua8aWqZYKp6TQD8xSQKjtvChYXQbRkUqkyseQBLK7AYiAi4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uf9os9ZCsE8WPrwE5bTcbma56cz2aAmwUsteeHQhUkr69VJ3J3Jw8XPfCm8SvKNSVdxg4eos4EkBbdQKkcvzd93",
  "key1": "5e88bVKBUV9pQnzpUb17bmk5yihmgZK1csaVQUbweKg8s4yvAJXBP5CTEbW45T9YhTS7icF54ap8fmGCpRNX1G5y",
  "key2": "3DYwBNjiDT1uBM85pyENm8Mkx4URmnUCbHgDSPmaMXevpXKrVSvP94M1Dcn8GkD3EnwrjVNhPLtxz6k2jiGXeu8i",
  "key3": "cyfeT7JPyuQEbxsWAxXK2EBqptSUPQPtjz3cNwtMgVKVyPL2fEnFL6v6h3C3zGf27QVYBsbPbHTA854wko3PvvF",
  "key4": "bBTGRiEaBupf3oeLg1i5DnjHLzNrN366csKGqrXfUkvX2omTmGcFtHhirj3A6LvqMJwMX54V6PqBiHpFrco8zBQ",
  "key5": "5N5p3eP3a3wwjeh1MBi9g6yxegidKy8jSP83FDhapdwZRGfSPPjvmTRTgy7LP3K1e22STHxCcXDijd1gB8cAWYSq",
  "key6": "RNsA9Q8jAj1SzNnY1cSG5ryV22PckPLHP9rM7e3V8xTCnRtZ59FCJ5sQaxft3AMicY9g6as4vx1T7vCuEH3V9Am",
  "key7": "4hgZVVnDia8xPNyVYuCPs8PiE2VWcNbZoRvn6ohL6cbZtH73nWJuy5QD1ciK7YPvfRzqDSJWk547PyGMG18Y8SE4",
  "key8": "3uwYeoVm9mRhJFUs8xwTC5BVS612xoTqqYoHULFxvM1xZAGJhiLtPZQdvTXexSfnQo5xp4cjMWzDqs2nfxcW9xqE",
  "key9": "DgmkzQGLaZYFW98imHbGtCvcY8ADEvyeaceZ7x1VPVpCX9cuwTTnVF45RcA83RcXUdDsdndJ2EYEaj3TuxBbJRn",
  "key10": "2DwwEi9HxNNPhqTVQEk3iJjoJTdVrbdfvgy5LRQm74RFEEfphU6kx6LH7gMinEY87evo5SirSMGPKUku58JHeoHo",
  "key11": "64G6B9hcNfFsimvUq2ZTL9SSop5kFwT5JdmncKgfRs4WdczxfJxsigHggyiFXqvUowh63NRQZcU6uVHThtxNVtrL",
  "key12": "3dUr5gBHvrVMa2oEovo6k3ScVeiAQfz82e6H7ZygiiuZbCMot6zz9kcD3uJQgWZHmoHhkx8Cc64ocKcJnwwcbmMC",
  "key13": "LwG7HMJJxJajjc7tACjc5nvMJaQ8SMeE6NzdhNt9Xh73gs7ziFZUMkpSk7efDJNwNVSG2em3DSFfvbzwvxXZmY7",
  "key14": "5mdmnbxm2MoqtTnJ3HkSkAeTDYC4q2gVzVkiRHph8CjZyYJA3y5msR2Zvq3dLCLkCysiF4n9iCRaNYiQ5xW1izGh",
  "key15": "1PxoHvrFpWtDHoBc2gXAsVfAhi9MPe3nZGGGnU5FtvcLypVyxwzKNKfYVExJyZWVMmHqtejZTjvab71gLptPExd",
  "key16": "5bcxbqhZdF6UsYzwzyiYgVeG5xqttZR8T5y3R96vXvQaUuqGi86z19uqykEgCbYZVmKtdFT4Lp4cUDHumD7FtL8L",
  "key17": "f73MZoYknvFwxsRF7Dmudiq2q7Sp8cv1wSAxDZsQBkrxGvrnANKXcuZJfTySM2E25dAmdra8kPoJ4DKvDNd3XWo",
  "key18": "3R2vNRqcombWSh79jBJX4wNQBSZp7XmDsAKBrnVRZVFVXQ5TsEyuZ5dFAiimeqdwZtckZyvcxc2iM3FiHSJhZe8X",
  "key19": "2BhRo1nLxErLvZDjjj8ctSKdXv2mq1Le8aF7nGwLkERcFGYGtfSu2SQxpjaqoCU9xNWrZudN8NDxcrrNaSZZAo5E",
  "key20": "3X5GXTSFs4xYTUhA6DJoqyTAAJEnCkQPD2ZfqYxS7B4nMVKmgNaUtk59wWdZb5VNgKxzcrFUKUqBHWHdw4PdgRux",
  "key21": "4tvCzLPegvwMmXxDCZTpuiGhP5D9ruF3RwoRWXVnvwZWQajW8gnzZ2aJMTLxVUZ7GBKGVKr5NBpioUzjS3aVcYHM",
  "key22": "4jdJxT5ci3Y33jWd86u8vez2bqLEyH1mYcZRfisLp4SGAEYU2JWEieVvPmw87MmisYvtTdxRnZiD1FJRAorbcAh6",
  "key23": "4tjNLCgpZEuwrqk4PGgfoaYpyJ1GpRq45Uvx3zq55ijKDcmz5N1b3u4ngVhvd3VFsBT8FxQNnhpYUF3xffc1XHTV",
  "key24": "6112oQ3wTksfYs372JLPPdgvLcFaat7DegV6m5ywSNE8SpkdKyYagsJrb4hj1uZQSciSj5eii2v7shUUiVg6aMM2",
  "key25": "4SXqaT5iraNZ99vdGyjHRELfUbUoyPyUCwDi9J1WVwymFGMvqdZXBhX3hUmEocQz6skmS4Egr5LjbztCA14NCQPk"
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
