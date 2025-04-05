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
    "2RkyU1TPfTb4vZzVD7MoXc4KAM3Df3ubSkQnXKdNFUSpLnQRevaENJEhrYE3tLkESJmsLRWF6CzRT2dETsiCXM9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NcceA9KgUsR79M8wvXk2rNQ88gyyg2JB9wBCbGKXoVkYr1e4h4TziHFxQfZZLjH7Ecz34YRbUi6XTRgqb91MRDA",
  "key1": "4HiDFmq9HEgLrgUxMgZjiW5XohcCyRMiwc8FMfTJrdHFfgDPuEFjKXtEv5pKVYgDccmtvDa5wFWDxpifpkHsnWpD",
  "key2": "4ygWjNvLNPapsrLPnSkj9NE5GwSd1zxvKdTXTPa8p6M7nAyHgs8VY6LKEUJNoZax9ox42QDhbNJkjMPCtoLoboL1",
  "key3": "38SpkbzgWbfbiauNXRwvtMvtS1cqJ9TyiZMMrYDhKF6G9yScHWqzdmEv3BRneS6XrkGTy9aZMp2AVwjrwLu8d3zH",
  "key4": "5gYMf2PANiWuuDJNwUborsRuVQTy8FTxfgqhRdzvuUzWeqL25Af4ubegR9dRr7q6kZRzzfDGRD4xfaaDQwCcaf6D",
  "key5": "bzxsV1h967Ghxh8NK5JS6qZhdzJYGW8M3bvCgGBh3QpGWopSxE2kvxG6t8z97Pq4wHg7s98CNNoYoCSrNdqxW1T",
  "key6": "3v7QQZvjucB9wphd5XYPitV5Nh8JoQMogFZ8KnkEHtPi3YWkREiV93XyDco3dF9NvHxEQxaFSjYvU334ckVkpwxD",
  "key7": "z29QBxfMzkWdbDnYRKw8VfG2chVaTqhZ4zpejeGXmwkuXWDx7H1LdwRrrSvUvjznnfX77AXy8pADRKQPaYPWQM4",
  "key8": "5DELE6AQv4aYRD9zEos6WGm7VRxPEenAHcSPNWi98Kgpz2SrwNFgb2F1ccBdBSwgNrsLb3WThuSrkSqK82LpAfWR",
  "key9": "2emVSqJorXuLu4TzdTBMC9GC7p27SaoJ7dtbgDBQs9doHxpMDefZXA5v5LezsgvZ1uvYjLXqB5SnKHYDugouSLGU",
  "key10": "4FAbr4UDsXdVwcG348kbxdaSiJh2RbjBTQPpJyoYpxBKsnAHFVkwHBFbzHosDSAVwCkXjHgPkeUt81TBvT3ybXn5",
  "key11": "2kwAtKzcFGeyqhMubo3UQ7Ffx1fzjZ7i4fffMYx3ytsNmSbfYaeAFa1pK3UWBqYnhr8Y76QgTByWf7BzrWimm3sb",
  "key12": "3XnjfS7d9bqxTfmu7nwobmoVjpoBTFYDsFqnkDqySfPzT3S7u6JjxKfagWskrH6o12FkCmADEjCSSWEPXpTWCSjj",
  "key13": "BMSHtbBzcYwXzXEbxXFLKCsBCZu6mTeZootwJ5ty5FsvFwvzirN4qZmhiettzrJc94b7Yyj2XEdAEgx2nopoDt1",
  "key14": "3W2x4dGsXnWPbRCQmhjsVWMhgPfUpcHqLzE5nkZQWBsb6WCZ37bsW7DQA2qERGMVt8x2nrXKoGNtwRufZgfm8m3p",
  "key15": "2HCqRk21FfotGWM6WrJ4fo5qaq5nKqhgYtNPYG2EqNhJeBJnBHQNAgXMnkZtUGKPt8dDvVxJjN9pTaFuLboYtQ2C",
  "key16": "3Gw9vf6FXLnA4JBWE2sAt7rJHM2xyMooMBBeqQSwVrspLSjygunBPcXuyxgVZ8QsD5koAVpzB1i7e4nrnh128LCA",
  "key17": "pW1HS6XLdvGgQGjFGCDYJosNVr84GRyx6oF3bgcFCpuMdDnrWmDreLH7eTUpSKMDHQd65CEr1tztX6drDD1dB1c",
  "key18": "3hydchspxfpw8h6bKhx1TJ57uTy6znJvUaiWnKbNvdeR2QRovQMH2sT7e6cy8eT3dK4r3X1FJEzigujqLQFXTLx5",
  "key19": "5aq6CsUFaTZwqvK4oR2B5nkJB2M7V5ffkpEZZ6rFpbuqUmE9DCv9eCm1iH5ioqqkDjhmoWpUJLFCiQvd83JxmrZk",
  "key20": "36UWEwgUcJqyjgsVB9nMaq6uWXb2sdjyTnAkDjR9qydV7WK3NHER63XSUpAqyzBYSKnFwVZx4H1WNM6s3KLyLD2r",
  "key21": "3y5N5WodE7oMKKRyeiUw5m868AUux3AG1pPCFSqpVmBQzXaUGPXnznapm3p4Kr4mpt1CwqZBWeKu8tpiwP3uT959",
  "key22": "DJfiXLiuXgqkNQQQ72FSL125t8w5WdR8YUyYYpcUfik6DwS2Z1ujeszdwVUFDHWF3fyNYu4zeFXDepiNcHbXW7W",
  "key23": "3bE3iHRPuYPEj1yk1jWoGru4Y3RPtN2Zs74b9A65XtiGz86SYzqKyRUGiwTAheQKK5LAhZhKqTZqaJyzghxNSBjh",
  "key24": "2iKUgELdCac5ndzgYyYqnXLGZKLGvtPnVU8osUwEyo1EamuuiToG4Vp7cBkwYuDNjprxtzJ1xa7Z6t55MsDAR8eP",
  "key25": "3QEhXFuzbK9L1k82qu9dcQuT8bDB3HFLQ2qHxdAe2ANgz4oXsUUWdSbFVtzUqBfg3as4qRHD1CQ9GEQYFbUNDKWR",
  "key26": "3NzumS8vRfDqJLE1Brv3QiRt4Z1rF6n93Q2NS7RRSZh3te8xE9gCz1dp7bt7ZSK1um6LmTQEjKSLPboRwSySJagi",
  "key27": "64vK7qnCv22XVfwd2VfHtvWxHDJnQpmqyBjkWgjFT9KaeuD1VAJ3727Lovda5RakQtubia6c5XQZr52Nfu63Qcua"
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
