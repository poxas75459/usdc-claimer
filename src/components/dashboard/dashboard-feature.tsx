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
    "3saGC8MSP2LyAKujRajQNKU7bZup42aNZVE46pofFeqskd8Cut8nABFbW3jAPnncuHpLXWtCUKHPmhfzBFPESWfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MriKfineYXPHZXi6jgnqGmzqVajuMXChqJEHFAXFPH9kwsZXg5XSUepBKPeurdGrdNJZafP15sWcdWwGMAhV8Xn",
  "key1": "55M4Yww6gaqd6sTZCGQLbADc4EdgXbnqN6PtBcgA1EnU2XHZrEf6M8Eo9KVgNJhMj29meQSckCHcBNsdSSvtP46x",
  "key2": "2x5jwMkbuiGeqGskUddrpxWQHEC6LXAESYiTWMwnKRgLgsA6rTfZKFpSA5V4nyL5Wrn8z7GkVsKiFQTct2cTbS2V",
  "key3": "5ZdxiKe5uuqY3gxoTfUDnMob8qVzTqyAZXurd2AcN4aMSwqSi4kwq7LWS3Wk7gqZZuQyoL4kdT5jt4eAFz1T7w8c",
  "key4": "5HcchZCJ6Vbp24e2aK9icZKBstkEavj9qjeP9AFNDa4qsbmuXdxUmcE4F386dUXrLu3XsNoMKf4a1xQwuciTmUEU",
  "key5": "Cq7ssECJLiy6ppy319gFHWymuREY2hzQ6f6DbGbE24Spt2uzN8eDZiQxJHg7iMXhJ1YysQDH5v2Dye3s4zqKJWy",
  "key6": "4tZJnfBcVBC1hJi13JinH7NwLWbYbF91yiWyqSnmsnyEVtjWMyWy6kx7oSPDMm4SRRhr3gjtyGgeCdEDBs1NMYSD",
  "key7": "4oTvEepVUPDwjWkLsetCqN2Z9CnbadpEzUZbJvL7rev5FpL9G3PerG34k3trULedDyHTwyk3X4WxhomNW2ZUxRP5",
  "key8": "JtgyfzgMNqbjVn5YgPE5nQhRYQBpU5fkTew5rbzKcXepryQeY3Tik2V975aEfhm6THzWvWyLywtD5rEg5jbbDWW",
  "key9": "4tHvi5sSVxgoMycBq2RMZKgx9zXAJjFRzUXRBDvBP8LQqEhyp1U5QRnzsUrCsmd6t5TVhQ9pkmEASmYC5vQZR1SC",
  "key10": "4XJUbFvZWkeN5WW2kWjVtVe2B6dxmGtEeBCfTPy2xy1jQ2ARrcJTwZ6XUeR6Ax99eERXwSQgQ59pxswrXcnNM6FK",
  "key11": "1Kr1pzFG2nUnzB4Aj1UBukr4rNQveZHtcezy8iPxdkhQ45yVKLLU6ceULGzGPSih3hTYdjeLimXk6oFoJkygLsY",
  "key12": "2waK8HVpkmtVyWDGEYzn4ms8su1qiFYHGNSUq8JZSrjcLEdStacEwuAePcU3JGHE7dt9zxm7VzpHM3faCmskruYn",
  "key13": "5zs8MWnbvgQpxmyMwNwmMm9iaG3TnEAJhTW6j3XKXmhkEaKtWojkhW1LY4kkoid7n8ctQLvCbkEbMG6XLo6jJct5",
  "key14": "AAwNht1qUCRmSd9scxnLPYN5Hi1m7xrUvMhUJNfT5wmbTZ11D2JWPMg8c8wdXfM7BcirtPqfDmjgaUHzJqqRF23",
  "key15": "gbyhow5PfrGn6w3kNoqRisjJgfP3dTLtUYqhCyFVT5FFjDXEw4VLDwEi4bNmJXBpxaeH8qFpa635QaVpCEWbvVu",
  "key16": "3jMKrzgetrxzAHiGCWKE3z9X8LmRRfhxvznWcT9RaDT9zxQ574dwmU26kR6C7jQbWUscRThBgvdYUXFgRgWedofW",
  "key17": "WT9LeEMnRaeoFGHWeAVPNCCkcTke62zq7NuQHvuFr8d9xyoT2YL8MMdFPAuf5M1PqxL3ykro3RAvzdm5f4WQteY",
  "key18": "4ccLzZi7v9tinn3eQ6ZbFf4eTVsS4GvCVAqf3uYXQV61ciWFVUqvK5oHCwKXgcyoHbcmqU2W6uiyp4Wi2kaQww2q",
  "key19": "2uSQm8UZY7NALftMz252u8tLz8GK79WmdPFU8zMeQzyYMM8bJwNKp9DXTbRbyjvryTRpXswzpk6w5xjnnwiARuQE",
  "key20": "5nRLibiMFYZhMhqVzGZVzyFFA3j9WqDPLQy3uJUbRLVpTH3m5ATnkZWfjuBZU4TfAnyGLyzBL5k15ZCpV4CPteLD",
  "key21": "2Db8Pswrvx466TKyeynYR4UJkPusUr1DkoYayhkfks3nFGT92k218LTd8tVccWBgS1pXARsnETAqXgzQED17y2PR",
  "key22": "2Vc41kqujerhvXwEWr7h5nNtYfCyozT7DVLbiFRDGZ3Qjf1QAJBRJgXQo9ZNmJ4TbsLdvzrD9FtcrfSopong9FYq",
  "key23": "2ZoFLnr6C4q5wPhrnmszMXQqmyyUdRT1ociRz2LCJ1wnePxnjmjL4bdfyF6M484azrxeFVSXUziMbGWVvmrr7e39",
  "key24": "2t6XAY2qzJrBWNPDx33x7qNxrkhgM7Ntjetrt49ZnBbVu5pPfxQPfphjtpUuTqFZYEeNkn5qs9uHaoESZMUCmpBz"
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
