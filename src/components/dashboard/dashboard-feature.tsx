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
    "2fXAqfQrihFtoHg7XtgZzQRcjGa3BVnwfrNT1EKGbhw1wkdwpKby49nstNvG95QNbWUTAhSSfWCrww8FHR79hqp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bau93vPrxEJF5e1kVLmAErzpdNrcAo92tTUUJTb2Z9mhffhvnMKoZo5orjL37MymoDANRF2Vp6HZyGC97QS69oL",
  "key1": "61RyLbneEkVzxXwMTpTgmcSdi8EtwkU8cs3MH18yNkGtwWUjhLBHoX9D3TcocpJP8PnK1kKAWbrpVG15TgCptVC3",
  "key2": "3Px3xNgypnZsNdgdrhWdXw7Po9vwksBN9WZpiCxnMxTSodswVEKkfkcJiTATPXC5ym3LS32GWTByWkeZLvh9bdSg",
  "key3": "2pcQBhNBLyrM8ciSd7ntpn6HeTK9aZZkXFzD915d2HyWfoBDGwfNz85Jb71RQhcQ9fp68MvnWTNwqoUGwH7xfU62",
  "key4": "3TfN9b4GAPvVrKc6BJPbyjZ7USM9SScdjXHo3tS8ZQAQ5Kdn3wwXa9VV3EyamgoUvFPXt3FxoNQxSSKA9GQKAsQW",
  "key5": "979UBzhRUJJwy8VshkpoNW9VS1Q7EtuFwSTstZrPZoovuMERVG8M2wv8roEWi6roXrBxSrFjKqkhXbhj7RsQEcv",
  "key6": "2BQwFYDs4yEXqFrqhUXkxgvxsbwcHqWtysfM6BNT8SvpuLwBHK8seTNoKfV9tvMi2zAE5R1E6pW3xkpzzoFgUQ1d",
  "key7": "4A7WjbmcFYhNNHQa8yJsgxXRN5T9KAyqoiVZ1nFoDRnMCsSC9gG2icnMkCPDdtnpgGioRLzAD31LWd1evTtRhMTs",
  "key8": "4QwVYENk8BcM8u9Q3gSW8yUpzD1TLLmrQrGdxRoEVTz1eRUX5q66CvoPoXdHdLRGb7RUefy3axyXxuhKyS5PxCGg",
  "key9": "28VKBkdo7FXhGd8uZwvwQUMH4ahYEJ8zhXUMzeVuBiunqitUDgJ6dRseyKEm3UYoC7Lf7ibpqumz99sjW6YUcYJv",
  "key10": "4NCsdC1TEEdr2vgoDXSDJPqnxFJiFHesa2xxqQz29enG8gSRtcwA8ddyxq57aAVUd7232Uf5ibcw4ch4jieiG3Mu",
  "key11": "x2X3844EQVsQ9JrYa37k1xq1uYmmuXbT7GLJy65uDL5BK5MHBFapNfTrQaAq4qL18pbvoMTbfSyFpdYfXXNE2UG",
  "key12": "EYK4pkcjTBvfkUWXkZgnJ1WJkWBAK4LzoL1ErfQ2v9Fsk4ytx3h24pAjDL9SBWQPy68BrLLkx8424J9vkjAuHyN",
  "key13": "B45prqKsqY4FSU6F6BaXsDzNJCjum8krTH96VBko1hw63hjiZgZJ6icUfAWwKyWLEtrJzki9HLdNJpvsYeWVK36",
  "key14": "3GByvArdvvaNj3LoV66th3R2H51wKQQLkz4pn3YcP3DngcoxeZcHGLYypUrk58WhgQ1NFUuYhkjmKX7Jn2UnvqmW",
  "key15": "3LoG71Uw8mixLatgxyXDHrwv5jff86VXEj5z2JimwH7Ej6vnoSRLordzA2wMmo2gYcjzf6NmvhLQEnyN31uYyqc7",
  "key16": "2v5faEXgfNge3eLDzrRiQGU7ckGxo71qe2PdE92Nt6DU62G9J5HtkXTGbdHoFNAS9iybqJEcBxMQDd5FFco4L4Jj",
  "key17": "22WNbhGzpSVNAftPxGwomkAUpW5xrhbXR5KT6HF5W6kPVJycCtzfpy2ro8tUhxpzFcwuoH6RwcBPKYNXXh7f2hqi",
  "key18": "44TDZkMsiry9qYyiQi5TXEUPBihnzeLy9kKKoaZP9SUiH4wvddt3CcYpm81Ff8eAEyVmsWWkX5X7eM7TEWq5D996",
  "key19": "5Vw9CnGhURe9ak6iLPfi1LHTbqLCRhqE6FzkYcWaNNgen4s8HaBvDj8pVmLLqw6uxYWgaecP9a1Ttf9rSZdBFtkh",
  "key20": "5zXySp5uBkVGqTLoUUMiu9sW4rCuoRCoWJ1G7uaf9VcBVhQgW4onybHJ6pu384EqQr92bfCWq6ERdp24DFQxy1o",
  "key21": "2AqGp6HyqyZJQbtpeGKGve68cucDJdiRpyz3Yy4c8Kt3hXyFThK3edPMnkkuv9YtpErTbfKg1tz4bGP2ovjwGSqs",
  "key22": "3MyRuxAzD6ZuW1tV9ig3g6sUZ876qF1Tw9WUaFMpAeBwAhMTaEtzsuZ3ArE9pHyjjTVNusXXdEPnvTHgUPUcUg8N",
  "key23": "33qqJTY3UpzrYvLfUtnnfMx1JaCViuvva47hbuTuzXbSSpDkruEpSHHx9XUeTYwewGpZLWv2WDsmFUbsWfRuRuDA",
  "key24": "3PJQQJTuWZZKxFLMLqFXeRyx8CDBAz4Ln4hwb8mGiP7f9bLpBDnMB7t7J62c8gXLR6JbciDB4p224FwetUdSF5bg",
  "key25": "42URzgSsWhkBSbg99gPckngGVqtYAHiVnU8rSpet7cMXLmra6vAaMmrChYvXBQueWYrjiXaUpUsTnztPFde6Sbhb",
  "key26": "4AexqnySyAwY1QsyiK7jvfzxtZdXghXequoioXtarEgQDdFkd1Biq2ZoWgi3mruRijZZnH4pNUCpbRxcyqpbdpyc",
  "key27": "3C5T8Tkz5s2s2njoFqueioiw8iK9kvkub89PaiTtoUCjmFRncyCJXLissS5aJcP8YCU4nLXofR57sLwx7ZYwWGAX",
  "key28": "3ebXXtnyJghpdn3JiMPZ1JnfUdPKAL6X96yZbdUcqpB4pZ8HYjZmQvMfNJBtFB99nnHnE6MyNyhowL5HN1a64c1k",
  "key29": "3ptgrfW4ajkdCqnCHPugbMG5EGEhM7vRvLifkZq15TjCbvrrDvgaMUsQsxyNKbeh5sXADdcB8jNg7ywvoWJKdn1x",
  "key30": "4HbDv5fUfdFbB1YVBB4xiSHHt41AFGNE4e7Ee3FjFmv9DmLS4du4sSvhTHSGsw5CjXrH3SwLmzZ43wLGzGJPPcn",
  "key31": "5JmVcjmpneaEZnvq1Jfveyp4axSKXpMBRF2d1koHXt8xLW4qk5R5fgxijwHPQUFd2wP2e88MRzzvm6APf8xvdHCW",
  "key32": "5BUnx9fC8Mch92imrT3KX3zqnfraGcm2ntVz65PxoBzomCsQ5NVbxPTZfc9VsuTPGjVG8CEieKFgJa2WTLfB1Z3W",
  "key33": "57JPQ8DqC8SQ81AuStqVLkv4TourEZsKbxtcu556aYHJ1YJgTGShNUN91ej9AvkR7PTKZhVSptXqzfuXV3EXj8NZ",
  "key34": "32f2f6B3v99aRXzWY4EdgdY9a4bgyF79Gh7M3KzbGtHtRx7QknrPUtmCtkjYY8nbhFgSsSgu4tdt8s9WcEZd69be",
  "key35": "3y1Ms8EqaRZCdJJr48fVu65nfayTjo3ZyJtSDE8bPRViAUBVZWnX9cKxr7gGwMebzfNYSJ3gRHQj3BbnfJkNjJ4s",
  "key36": "5C41ds2aiZXR2gBMjZN2y75pcvm8yBYMhqXnwNNxTymjQXkewyeDhHHwvTTaZmDGaux6c5TCQvVW7fyPxSNF5tJY",
  "key37": "4x76hDRnL2xKSnxTE371ZnbsrxoK8mgQtRfZSenpku5GjDB2MEK9ZKAqBBsKdVjvtXUNX2HpfLqxd2EHcVt3bKMe",
  "key38": "MDna3HRvaprUejCtCvqvWfsoPwZ2rjaFQMXADqzZo43Bpgtc8TjpRev9RxUVsn9JwvajACbqYy77TdxqqPdV5d4",
  "key39": "MBXc3S4ZfqG8875EZwCo6e5kdS57LWPy8s2NLnerWwSQmz3gqiQ6oz5BNUw8wAEZWSPueb78NqddEjjbH48qzHA"
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
