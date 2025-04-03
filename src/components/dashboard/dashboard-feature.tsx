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
    "hGKEbvdcWwN465PVkyggRHC3gJ2c3nt1grPdFwsG9VmEWyUgvPHTeVECAgxX76C3u16ktavTEta1ASdHVR5kSMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31mvvH1j6QwyCjc6rmiYPRtDrmaAEQqZGCXC4Zb2FWesbQToDA4v94uC8qhexVMRSzquz9qzAo29Dz9m196isEAr",
  "key1": "58CU8DuR2ZHzyUnEGHD6timuwZPvgVKWAnyhjcnP4PSJMS2A719XZD4xcFNhVFf7JdTep2HFXk87RxHRfW9EkjCf",
  "key2": "63svacHRnCMoMAKkm9oyC1JE9V35LnwvYJRiAGkVhxkCJk9vsjuQeWWmxnzbeDeSRJtaosAe8WwFUHYy7aumeMDR",
  "key3": "mhicPZs2aNFJvaU4mAMZmTkdBuQ2bPaZLSYaXQmdNyz3aHXNr5spmUS9cebGSLAnNQ1JzuAH5tVJZ5oYNpy5BVS",
  "key4": "wkCR9LAZsHnbLsUeC9R873aMJZHwb3pqJgrwwiyoULvqF1DYuTBvDfpVQ9xDz6H6dkijZEYeHY9f3WVKUCYp5oj",
  "key5": "5gEffZfXsWfh468nnZaWzbLSxDXqpTvPgntyDRaNVT9qTX5jLmf5Cevz5zoxbg8gSJxXFeGfDBkpqXey2vetuiqm",
  "key6": "42YspdVbC5kZTX76K8cJSNoV7RHSmW3oTzotVZX8XTQNFQ1gzS7y5ydBTyWnH7XDKX33wmvsTWtGZ9iA73F6ni6L",
  "key7": "2ta3VqUMQmxWPvNE4AFtjeCw2t5d58EXs8Cy3g69kh9W3XJNjYsUBmfTQ9hX5GEAV4K7jrfgj7pjeBefCjHBP3vu",
  "key8": "xeemWg4p1jHXyoc4Z7SK5CN1tUMda36rBFwKSaovhSkzVenc3RsttJWVq68pq7yz3q3PSczip1cmkbwALeRMG9k",
  "key9": "49PdD3ynGLKCCgBZXFLBsVDnbKPimrvVbecdA2WpVYZ4kCsrAv3QwydmPw2cZzgzhVR8R1Mrp4eM3wPETwmtsamD",
  "key10": "4L94jqt4Uy4HYvNBncrU5yxHAeJqFXSYtamDbn12zvEHgCNDiXL8zKFsS2XKcPHFj1Ddg44vs2gHFXJj2fphMSES",
  "key11": "5c3MrbyRoxJ5dj747vMaoJPaA64TevAbcfX7hBJLfCXzMbu3VhJSaT6SgJNSDQfsjtNoqAtUMrEh595edS4dFPm9",
  "key12": "3Ea3Uz4L8nGEMcLYxnZQbxMjNAgxhsVrDUKQsf6KnKE58JBt8UfWrB7F5UvvKies4P463QMuTRuiYAPxcs7wRxeR",
  "key13": "5rAYxW7LrV5f8gJL9pHP36cXnE6L7xyZkdTpBdhP1b4oFnhQECUysYtT9Veu6eXFAoV1VqwYoR1nCsqyq5SQa2xu",
  "key14": "3Kapia2ZhZUJafG2uD54c4A1qGLo82DMFDU4D4oQaiDRVtqWzqPtPEVQm7wuYRbB4fJVJYav9qUCVYNuvQdDcMbw",
  "key15": "2L8xhcNtp1iUbdK1TQ8etoDVWtNse4zoFjyKLiY2EAmmQedYCwdgByzvPCn33FP9Tu8Wd4yu3LfYxXsyz2ijhe8C",
  "key16": "9X19VTWazemhht3Zhcn6Psbyauub88zGa1gg2aJj6HPuV4LVU8Br2fd9Wz2P7GufdHyT2GZiS1Vo4ntsqZF5Cif",
  "key17": "3umz8Sd9PZMo5ruv8F5Adn58jzjNkMFSa2hip6vcY9h1ezV5qBSvLKNqVfGi2QK4YhppfDcy3w9UzuPEizp3QEyW",
  "key18": "2jtLEy49vqETgskedj6feNsT1NVXZnDiqbwceypod1oEDXTizF2eAkbRJtRsqBNjJJncoadUHFoNnwhmoHNd7nTE",
  "key19": "2uRvT5u4dSCkofgisPkL5GyZixXVH91iwbn5KU7QaFkECwJgM1GpWoXZc49RFeKjWjWk3MQQKBegiiawVeSvbQ5J",
  "key20": "2dk5hQS6b3f6THcazH9mXtMzKLyprfD3uXbymRUFSFgBy5MdbM6s3tZfUmuqgMijiQFr6rLjkTP9AHn1AMBee6gX",
  "key21": "5mG4NvWx3hNWMgC5oGX3PkXez3F8x1Xy4GxUYyTTjydVNUBybmpsNxbkWuvcPnPYLJwgRXALKySveMDC4HMekL7w",
  "key22": "5ceVndGYEGp2GXAhhd6zSMVKs14XrnjUsxjDjdZquHbfwQzu6ZLWtUKHz8R1q2RoeTYu869ggaZYumDkscmARtQj",
  "key23": "26afS8XjrWXcb6nrnZ4iyftjcegNG93S3WYrvPzAvsf3ZrSNDATzoJRUVZzb8LHMinmGGJGdaoiDMWMVqMbs9YgY",
  "key24": "3x8CfvDysfSEKvzNGEoBtXsR7KLZPd7gNefh7zcB5MpUFywRC2icc59Eg7SbV5h42ZuRmQxWiBnajBP89jdiGx4d",
  "key25": "49x8He16zVvx5LTYaa1dxtvvcc8exFrtCCK69pQiWtqArw9CBCuZZr9Yp2De9mjTTikyAdwyc8WaWVbaXAmcZgcX",
  "key26": "2fnBZZJrE7u44jAX2gBvAnizqQi3RPAG7C6hyPoYUFZs21S3JTET4XhqECaUrwXPJU7PcTzEPj2AxRDznEKcuhb4"
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
