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
    "5NtmNquJ6vxtj1iaCXrwwL9TmQ1JTtpcMSk8D8DLezsCngce2kJA4pYpGfTs87URB3zG79E4JhjAfHqtz5RGogDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "299QwmxRRAd8KoXRTzE9EsKC6eHNBFVLMutPpjPnpnQee7baU2k1MUiBwuPN2ADLzZ2QBv1NWVi2iX4boSHfBe1q",
  "key1": "JH4rVxS15GgPn8qi1XEJxgUkmrmb7PmY1KJfwsf4kugz1BYthbc6e1LWiWiyrDghDztRH3afiCu52T1rKyRnVsY",
  "key2": "eXbaT8uiC4MxaswngMCWrNtsqeh7wWnZxYkJ795uQw1YnmnqucBpfdSCjaRR21zMMUQAdXyt5GGzk6nEcizWthQ",
  "key3": "4yax6Bx3b824AWt4my9qhF5v8SRweJesZnQC3wmGbRUnEm3R1zERkMPpBgxkUziPVkeQqTFNXCXvohbSsQmPKzvF",
  "key4": "4F1rNhLNByoavP9824BbJ6xFbTE2gCQp77AhNSnG67ZvBA3FQsKsMcJAantLthwBtS1yiCoUk94gb7pokHnPpNm9",
  "key5": "LsCAw2TX9GmaXm56PKqAQpBRkMMA8cHC1QbR5kf75gTVHbMFnBmdgvWggXFZ433EkGvKTaBT7sUQA2qsr7uLVU3",
  "key6": "ij6hfDy5u2XhLxMMBFJjcpCbWPvsCRdo2SyXAdkJxV7FUppAR2YuUHEGYa5CzxFztoe7NX8Fyx8fwj6TQPG49ua",
  "key7": "5vTKz2HTBHaCaacaQa1VWvX1Qriwf3i2wQbDrRxmTvn7fgd8A53pwMoPF7dcu8TJnU1XtUc2rXq9jBstg3RhbPVK",
  "key8": "zPxbC4w5576gT3UeCv5AkjSgTZcxuPvVSxTsJcJpwk2TAoo21eSSShtgd51HgZSJsWeGiFKJtTqC3hHoYMMQtAv",
  "key9": "3KpJxkyV7z5fr5C5S1ExAihvvcxn7vmYALYvny7d8yvix87KVyRn3u5yefsc5LFQ1gzEbVgxFhFjYhzMw1mkXZs4",
  "key10": "tLf9SYDPGqkyvZ1HkcedHACiuf7HaE5GXSU11r8qB7TKeaQjBn9DEc1Jxq7n14zHc2nsKV1o9tBKvY5cHYHKUnr",
  "key11": "7BcEdeFbLWPjTJVFuY1wL1SjWXVbVsWb4UUfojVNHRTJb7NzmrpZRqTepxAETBoojMizvnohtigJphtW2ck7RQw",
  "key12": "39SsfmtAtLgZfjKzJ1TuSf5HoADJk8Rg9xTDT5cu9iQvgaVTba7j4znZJmPKQKxVuFBzcTPXiKzFryPmSSGkMuan",
  "key13": "5Kq7uVPEA2WgrhLXFWbGSmFmWGfYG9gmEu2VgbRPrU4L2YNbmVqAZ78KBsgr9RTiGsFjNW65Xrhkct7LrQofzugT",
  "key14": "D69fp2nWJHq9HNSxDWu7eiT96rJtLFT6ydHJnwKdXy63fikQqiLyy5Wq6E3wvbySnVegyHSP1xyZHEMb58xAWEU",
  "key15": "357wd2E79cdU8yhX5vgmGWW1MGSC2SYb1xVsGJcbgFJAYmkzywrzNFU4G7iQxhwe95xqSKRvamxqJjsY7ASt9sQA",
  "key16": "4AJbQTniT1CwAzjFm6gGHLYrpgFy1WJ3rSBwKGaq1sB8yoYvWuUa7UevwUJKnBXWxHDs2VzHZGZsFgHR2i36fudS",
  "key17": "3UqExjS3Uj4aJ64dVcFJjcjH6pVPd1KopPyhMbkvfVmeBRGWGqi551zQjm47XhsXei7Q7p2bReRjs9qw68KpgBqt",
  "key18": "3yx5p3VNnpom1W5TA1gCWiNb95HmL7LRSm6pPZgiHtBZk99QNmVoiwPzSnd9BrBLi6VbXRsYRFuJH1qbqzYa2btW",
  "key19": "4QoVfvvvNaYDQC5uLGVWjs8McWcLRaz8S5Gz4rKrXQ3f2UP9aXDxsDrsjo9dHEqTdzX1ZZh9hRZjexyx9omxvrM9",
  "key20": "5j5t1YUgRYypkC2qJT29kLoeK6pm7JrKmX55tAdotxvsvg6XzGeCS2HAL4xZnYcSFRo12ECWvKozgZkyEg8zs2JK",
  "key21": "48kA2fXciEZkKddijUeYFMiw85bDD6mKv1GRD7jEigWCqQue4Z8BsGurVnvnTyvCb8ePTH8DZ3Rq3f88D6mc8Qhu",
  "key22": "2WwTUxL7YxcE5bBwy9H3iQtDvk54V1gsqv5Zrx99dSNy3Vvb8JTLhdv7SR2WJQqMfpo86eEzuA2ULb9tdZs2KuCk",
  "key23": "4buoT3avPGVF3hwPoQp2db4Qk9r2XT77CrFyT7P2pCkgaTGTZCEE2GjKQuHhFUE1ihXgz2xC52zBfQKXHeqAaFsS",
  "key24": "4t5PHtj3Ds3zzKoceYtifPjQBLN7tHqATQH2whQQfa7K45o6zCVQEnHJtEztoZMP26nNRjbE1NVQGgS1ggNqfkvY"
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
