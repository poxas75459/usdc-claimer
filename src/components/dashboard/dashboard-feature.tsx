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
    "xhWxHTqdNXm2h1znHRzrK8VK7oaD9SPeiCctvT5dCUNZqHjMMQo51ocPgarrJxttRyfC6cW3EzfsjzB2KCmjJZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YbaDcznvUMD7AyYUbyoZnT4iVWxXSd2mxCuvSCzoScs8uqo691uF7SBXnC7wm4m9fuf16VGTcKtLJJgRYFEjnCj",
  "key1": "5SdFSkXAnwH274YMEK5t29qSjdFkJzU882NRUtkrUKHszXS595NXFszgcakrFB3KrK6p9TPWZhq7XrHA6m9wPop1",
  "key2": "3sRZaHSJJmoVegV2yqnwtUT8Px4rqXvjHijBwZBZnEzSDaWRM6LLjrMiXJLhkQU5N1utPrSgCx5FazRuf2ZLYQCy",
  "key3": "3UoGBWqk2tmAKa8XSY2pnccnk3dEVqK6v3yHEg6rt3k6ZPsDopVm2ZoxzzBprR6CZXYTma7LB6ypU92M2r5DNxT9",
  "key4": "3HDoz8VHviuLDkwT4obw2eDD4wi4a3qeFAPT5shMFQyFuWP3XTjPGuLUg5VvNNG8CmNrXDbFyiwRAXkwzGsy5qhk",
  "key5": "2Lo4M2kJo3SzXB1gjC5LkRqhGNJPLXwWQJ2CGx826r6RHqPePZBbJFh7894y7J84dHfRF1X83WXuwbtV297iiL8p",
  "key6": "4SZwg4UzrCVCK4Y2VnTFD5QWSsC4muejLnWjyKYpQtfmorwtMUP9y5hkUEi7pAzv9MjBD9EtewDT15mQ275UyE8z",
  "key7": "VQbw6cpwSstAoVMWbF26LzEMKQPzaPEn5ioqodVYooQvxa6S2YZLbCzW6nm8f2FMx5m2xXcyUc5oCJZWRDU648q",
  "key8": "5ZQ2yeXsdRMpZdYMMS9GXuLVeU4oLLwnwadrKssWq8sDkD7Trje6zXbTNAKXgeBh4uNyYUUgBc8SjNVoro2dvUEq",
  "key9": "FqErMUaBsAXJeYuUwZjJBQc5qypP2mSjaT1zceCxBgLj4t5LFujjwQJHTKYrJXV5m7p98k1y3sVLrNEuHaUis27",
  "key10": "VMHyHe1mnwGerPiya4xX1jWSjchoDjebrFsRJfaQMzqVwgsreSEVtfVqrcYEThJjoumneQi8HHZfrbf3SEtEhHQ",
  "key11": "3eBrA3LpEYR5WEjkASHzjmQ7kDcrWSBYFMMyxKVCzFVTDce3ahwLF5z4nDDsbqJUhu3pYgGRaatvvpPT4iHNj4oK",
  "key12": "2C5oWC6vLy5eQfbNchVtFzfaq63FiY5G1HF2Dp7qxkdVbT9zoxwNKS7GPBVpo4k1QRMe9k45s2vfqvUMRAhWx5Nw",
  "key13": "56XVPKVhYCHw861DkmEjyvzq2YzybT1pFmFtyxGTSV8aBtqgqD3m5TQvzfsd8xahsAYeihBSk4oXVh7HrPVNrHrZ",
  "key14": "3ya7cEti56ZsUsrLj9CtggCVvRD8ShbZ6ZEnTLsGXhN2jdG4y4MUYG6Q6fujrEf5AqvvQDuBjN2Evuyp1fSTXgkS",
  "key15": "8xuBryejDHmyobzDn7NeTsCT1FZvLRSoAyHfUuxQUGjwRK5sD3WbShe8ieP3FWNBJoPZfTD9nLL9vD3YXpPoAhW",
  "key16": "2sMCzLdEm2zwoNxLcwohZJpziPMXLnVFVcExutFtZbyVgFFkyBwkYZUVmVrBpHCXow9h2ZiquLob3vdaHCysmkyd",
  "key17": "449bGpT4DvKp7VMUF4y91N9enoDDhUpkKpysUMHqXLLGsHUzNUo9eB1gs9YsMok4Hzx65juCeiLc6egJPGhHxMFd",
  "key18": "ZXctiQov6TJcUiGCctoyXZ4VPwZUmB7mFMtuGV1aK1f93xvDDNSViA5XTq9NJmtW13aei1nHyVRqCPRkHiab5FV",
  "key19": "4e2ckPREEukFNhRcbhxyPmubjimUucigUqsrrGUwSNQJoy4DnZDZrBp2WGeBEukjifDwYkAo3hoBWSspxVRS44pe",
  "key20": "3Awcox5zbCTd9qm6dD3swKeyNFFYLfHe3M4LdzWQemiABX8F8hHcUCpjRUrCfmPNw3tVoD3QKRXzp5ZjdGfEh7kJ",
  "key21": "4aa9MiCu65mtgYzvEotbZxBom8J8gQgk75TKW73PA2yL6Q4EcMHkfhTJWdGzsT85gZK6m9P72r9BBwhPgi5snaEJ",
  "key22": "2SS2FyVnoC7fBLNFhJfh4BYgLEjMG62dvzNwTQiT4FYNvi2ufvufo5RkrWs62TbRjgrha4HxmcQBWs4CjWGRB5Qx",
  "key23": "2Q3pNBSNqVFDKE18t2t11oMk4LJb4UpT3J3m87e2zerPCUH3Nw8rnuETWy2y2wcMssjpxZ5CcSEQgbSThbFGhNv",
  "key24": "Uzmdu9wvHJbMm2LX1SH2uAzQBgpA43udLhMbFbX9D54RcfJMTThbKi8Rp93Nmng8C9Ff89gXR6droRAJwdy2avj",
  "key25": "33aADo8CWZDm19EeZxioNYUpFAGFHdL54wcxdr14siHF5Yt722AxbuUBAksFTCxAwL7ggfDyL7ZjYi9L81LhbDKc",
  "key26": "2sNCZ7F4yd84KRztyEjhLVyF8zGG4jzzBNZcoCzUDzczREVWBU42L4kvjTzqh4THZSrsGPTP8ZfgeE8ZAWMqyRy2",
  "key27": "2WEvtoC1ors1ss272HpRvsfiapUqNtcDSqb1yR4Xccb8CP3TCyJiSyJFwzXtvcNbzjDuQyXFEup7MmLt9FPtyuRD",
  "key28": "48sxrufzabMJo8kzJmT1AQgZePpwwxvCqdj4BGEx5B9mTvEqJ4BsVZyBGMv4LN2K69qgnWgx7tL1VYETB7d2SvWr"
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
