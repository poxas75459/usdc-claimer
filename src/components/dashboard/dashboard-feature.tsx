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
    "Xk5r9Q7sB8YXqGmTEwU6tXQibYRSJTVuCGtyw56JaCw7nMRiHzfM3gL4T4VyS1aH7FJe8Mw4juARkpmADZv4wXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mj6iZ7ffykm5NhRHLNPX27yHSy9gP2S8Mg7gix2si5awS6FZQLqaDTppwyvdy6LYR2FgpH3eA2QXNNMdeuNXdiT",
  "key1": "2YFzMPMJQXXf2RJDtcgpNyoTNCQbhZWxQSG3CGm4pEF1LakL4n7SxVN5RKu9YZMM1XjmCeq8sLKLXhrku8LPVC9o",
  "key2": "2eBZ7C8N32aPKy23gAne33rFwKzvq1SJeHaHRFGuEwxLHjxtbuHTpFprai7h8AxHXKVkHnVv6qzfXrnipxwZqnTW",
  "key3": "3qrb2vE5DptqVXZ5sEfJ8pVXUGENErtLjGSJiRsVM4GzD1AC2ZZohTy5UwgchEXhqCMDNoLirdtjGMxLFjmT5CGN",
  "key4": "4cGuvXmMEX68ctF8izidNtuN4i7XNpMGmFkroCdoHiz9WqK2oN7jigrsjCEGTrWmQ1LX4zodMTvxAFb3tziGKbcT",
  "key5": "g6tFarDcFWhAwuGn7bVCXoR1ozSRWgphuLAv5pJUUjzP9NoV5P8tW4iXg51Bgpy2KaU7sCBxGRhKB64T6H29uRu",
  "key6": "dEgLZztLF3s4qmfw167d9oyFtmsdkKNSfc1gUgj61rk2eWQJTuMsexNHpvsk2zHbJRqAKqs4S13ZNtKacEuMRYe",
  "key7": "63BU2eoBLViF4ZLqLviX4XsCRf3ZU5g8BWz7gFECmiTa8M1z4cqcC6qoYBP9r9JpVgLhAeRf5ozCwoqV5P8QgkBW",
  "key8": "4CmcRtTtqNV8biuXqvNLB8WpdZAkKeWakUMxKZ2VtYPMU2C9RFWCjt811vErcQs9ZLTxjJyMh2BfXVKmhZP1QEVm",
  "key9": "567mmta2WYCeZnEDDJ9G8sdYbKuweZ3eP8SikWGBn2Xfbvr7vJjVjWttftYtoAZV26jkxCRkYBZaSCn5qq2ejDxR",
  "key10": "3XgVWT2EQiUHzCvVeJSNPx3V84ncEcoxRgTaCEEK1scZhRfwHQNFJPsUj26wSn44fzCbY8MTyxNc84LirhhKdnt",
  "key11": "2mYFvQ5GYHsRDXDXcdgqwC35axR5RJqRwB6Ptcf7LRDKVDZrkxDxfj6LisdwVYNed6VXRYXWG62R7f2hq8JkJHc8",
  "key12": "5S8Bq9nGuUhAKjTMYFpt3RDZMQdH19L1mDhCuBhXd8wuXJwA57NgEMKFbGMTd6s8YTweKiqrYhuh8gksntKR5n5U",
  "key13": "taZibNzKuqfPAUHbpPny1kbrwDpsUE8XDC9tQhp7Nnj25tV95kiDH62Vgnxeto2jpnkKNLkjSrdhxCh5VWbn9V2",
  "key14": "55zcjmq1ANT4bVouB248Jzmu49Yye1mtUNGDF4Vy29T7QZSBAgkharjFa7dv5utCkJHa9kyjdNYbTDFDx4SEzDFP",
  "key15": "4z2KRULNVNGhURVCn55zgTPZbXGbLSwECpti1bKBf9m6wzZyyFPn2t3fAn3fyNfNQVTzV3peSWBqUqXW65BWoVR3",
  "key16": "2DvYabR9Y63pL4VCVJpdMDvTYJF1GQkv9fRh85vwvqDtpFEYGqwbA9767N48oD9QjjKEYjT9AtTtgKcFW9VwU6ty",
  "key17": "33bcLvk8oW8mvw2kYLHQBLodF2ZttK1oGnLuPKKtH6HSJA3oQFmHbrQJSDuEA4aoabSSi71cX12NHCBsBvqULK5n",
  "key18": "2PLdzEFFY58fPub5Gety54SRXU3JyAvV9NUKdsfFgn1YgyNdYbhQywsUbyKtkPCsGGF5TzKuVV7jYGKkpxhcrrPy",
  "key19": "2zySmWXM8ECZYP7LDcf54W8wf9goYGpkcWNgmmAcQZe2x1SmEM4TzZuV1JkcDBJGGaVdUYtcdrSvVwAV1HFbdQXW",
  "key20": "TU2pooayBTBbEobwNQYx2PfyjamX5N4538DvdyYVb82TzdkiLfqovUGgBTbJJ7MqmAF2ZR9huVAc7Mt6MkpUQjo",
  "key21": "5ekfq414ySL6svJeQMKSALQriVNJG6aHVYm5RsNJ7WyEAy1tkHsZ6vf5nsqNhi7jME4cTvnUSg7GQP2RNAj8tfdL",
  "key22": "2RpZWtew3CB7DmAdwVrhnYz1HoYZxnd42CCD4stw2bu7CNckX9zzJ2RYAb5hLjyQsoemqDmBhPdNJdSJsLirTEZC",
  "key23": "4URTzPJkWCeWAezbADgcWP4GobptckHL5izrkc19NfM7d76M5vnBVdLEHZyEkxGNyNaeAdiv1dytQQAuoHKPtUm6",
  "key24": "UUYr1m9hvXUttUVYKbsaZmxbYrkGzvcJmLW8RFCDvNhxBiHhC71RPGKoT3fhU1Hd1GM6AzJNSYaMtC2Rp38m6aW"
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
