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
    "4d9mGdWN94hcEDnycATmfBHPaxLSRHXSs3HyPJWeDPrrRmJW4WM7m4dTvxhWc2Yo3fFvJwCNKtpZ5hVWmHzZoaGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34MgU3NzSXHx3VJjTzGYMJJuSHy3LRRwPy4rmm3Y8eNvFkXUwhABbEtFJtVKYsTsXgrYQDn8mZFSxDUQ7n7GGwmF",
  "key1": "4ajVU5QbPVJi6AvPgGAHGFm1VoCVxtehvAYvVB7NNpJhwG76mfmrwyXWkdmHm6QHubKPzc5QvptaYEs8f1Q4fYwQ",
  "key2": "2H5tdDi2K2muMHj3zC4RXcsBCUZoNQKVM5817iJ42L5gu1kKURXzhjYhoX1xo2AME9LZayTq6Yn2gQtiJ5Fb8Uf5",
  "key3": "2Y71Pkr7tHfNBSGHCeZqpcXNrAuSRBobjaKfBnkZ1m3uDhCYrwMXCv5VM3Mdt9MsM1mWpCHjJBLrRMYXBdu2Mv1J",
  "key4": "5hsxkBH9kq1QxT3Co3KXUEm4Q99gLq7rkVV1Z8yguZBdgz84cmaZSjgvnD9zR2nRVYhRdDfekVu6SkC3DwhiR37J",
  "key5": "5ogRyMBVJCFVJFUJ5FfgeFSKGpa1oghLYjX3BVzdrV8yWeAUVaqw9cMtTXaJsJbw1avdfMz7bKWV73fmDo2x4kAJ",
  "key6": "2s1VYi8iFp1KjZNtJtE5tUAjZiE8R1BXJRmuWMPqo2dR7JNid5ubE3Ggqeuje55gGTzQSmzwckDZ5pMK2xNqS1b8",
  "key7": "8vGao6yfxUofiFGQuERHXc2jkvYSEQp5ogKsCa5TYxKZgP4TfGUwLoiJXyBwo7x2ef2tiFHku3QkP3hUQF9Di3G",
  "key8": "5wqVa9b1Yrx55zNqeFq8ABADAXnq9wfrASHuMhDob6WEk2eodpwiFokFjLMxsx7B1Sdpw2UCVmNaKvexb3d91hg4",
  "key9": "2V6toiK5WatFt9KG4pJ2J86rQ4myZ16mEz591AWDvtBxUufn83HeKAsSEihBAULyAezmVViTEhNzoqKxSe68QpwR",
  "key10": "3FtNwR4PkGFjvAaVAUdx3x8DswRN41DkaoqwCcepHoC2tC8xbgcrk3w2ebmdMUeAAUA8AqPCb6aHfoiiyFpwjCq7",
  "key11": "SeHRZvrrU5MqAma4ddfmppMD5AnfF4HKisWNmfwD934zou2SKCNxKXQQczJ5ByeNXP61PKrEdEy3L71vEHHsXSX",
  "key12": "2YmskitrjXFCqwyc8ycQaThvQEgXaKPUopu8UmMpDVQSxKpEHSdAMmFKYSVnkZjiC7WDJ4mC49GbznSepQpnZzvw",
  "key13": "M15NZ11vPjBNX2yy8CsmNE9fHfiGfbTqdQaaigaVTGusTu4gxbFp48ivSRtijWkFG5gLwHj1zegyaufJjdQpt2L",
  "key14": "2gaxoxYiNz5u9JTXsdwL2KER1jEbawfE5KeyyDtYtwSyhwkHGWihuWc88sGmffHzh6aZscKRtycoDDiB78uVfnyv",
  "key15": "2tVkm6ongU7qvkXT9xuPTS45466qLP3CKPa8WHHuxgzB1uNVd1mkdeqMAvCjp7QovzryKkfCpMS82v1Wmnd5tKoF",
  "key16": "4jz94nVfFe4i3KBJpSbNsvfecmBzC4bdEVYYsu4BNmrLErc6VFJyn9oaNVXPhBpnyuFARcW5UxFSRjciVa2rKHL",
  "key17": "2zg8Dfv5vnTPtTwU3Z29hRcyAAC2kq3M8WNjehY7KEb3egPfY45hX2CxdWPiVi3N5cDTteDVdU81vZ6cAMTgFzZw",
  "key18": "dW9Gsi1ebwgGzWJoGAtNUvfFD53MoiZxFAHE55aBjA6YKHPNhvoJETHziaZnYZHaKnrj5b89XsfVLZ9WTVzohrW",
  "key19": "5qwbJk7FLy12YUxeHz3u6dxDFVBbY7uX5MxtkEViLjEeDReJTmsJXnHnyokMU8FRe5zSMKxWYNDtEJD7EudSD3QH",
  "key20": "55UQSj5ecfbPYvbNULsGy9GJ4bwqNijkY8HfCxcaVCjqGP4wRrQRaJvE36Vc3RvvCKMc5g66oz3HozDxxRx3c8np",
  "key21": "4Bc8YHouQUgPrVLAR4GxfANQXYkWBnybJWMbikoH5iZNzFG1L16diy5irsiRdyc5Jy34TfyS9WtH86iGx77EwRHn",
  "key22": "Utx4KZka5a4gpBBZW2Qov9jRXRSDSwi8hC3R7y3WCAGErVYj4NuupVgvU5c98XWL1aLkKCwzoCVqwmH3ek9PQjk",
  "key23": "4xy9NTv3y8xqzpb16rbemJtNqGCpfcbHxLg3eMxFV9uWber3B4jMCfcv8pDo3xkp3oRqKBV5EMaBrCitWGpUFBrc",
  "key24": "2DjGuMRGtJknmTuLZCr4tLEZNJNzDoe6zyvftFxHeMEkMuzanp9AuHHag7DqrwrGQajK5MxygRUDdVaJhdYcftE5",
  "key25": "jdHBSzPzWqMMqSXsMDESDW3xcF4yoi6Z5F5eXJvbzdH7m7VkqyyCLAWgxAnHEg8BkMTgupdQ6vR87mVJSFvcL6G",
  "key26": "Ndd7XBHPydMMVdXGPmoBTKCRUXpAek8JZHkz776hLWM58UnfFiPi1FcX62UJXswNvpHtz2cjeFpY3YAPjia9GZP",
  "key27": "4gtMHrr4dXGiubJXbkB7QPyNw1t8mgoVW5zHWK7hhLxhZmenhSmRVxx8MWmRABprgDgNpnk7JE4XPZyvnXgWN6Wp",
  "key28": "5EjUTAmZPMdyMreMzertBjTtdnpsraH6cJNzonMMFCMTMhXBQfyUa7z5YxcYokgRZmduhZt5KwrBXiRNKtnj1WTz",
  "key29": "4g6QxLVo75QuJALb9p5SskRUkawDpTi2FhFs8PW11nR51ay9SpAgNhFiJSPx9ZfYHrDLGyZ6zzbR31aD6HFkia3D",
  "key30": "2SQyTAK3WtuMKAgP9ZamiptMXks8o5Lmb3uSZMozLvHHqKqLgygfiNmMUHheYxVh9oSHJiaoqeZ3srBdTpvGhs4A",
  "key31": "4hfVvjQdL7A7zXAAmbzT6sTGmQ5wde94FNiGEbncGCqxVY5xDnKCYDoGxkUngh72EQmAqqZogYT9oBjEZK4DTv2p",
  "key32": "3PYLxc96nwJTAKMf6znFptVGHzCnpDTBZrjxQTXWtmejF4DVNqSd97qRkzwPgbJoJQh1pLmbs8BmhZHXqJvFcjdx"
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
