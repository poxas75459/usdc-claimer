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
    "mefh5jpaNuwPhoDGQD3QrCGviYuAHVFg6VuDjRQjyYp4W4doVwsWDZGK8Ta5uPkLUFtf3gcA5iuq3eiWYXb5kWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kebS6WmfqHP6NVjhcfWaRpLGWGVcV2ztmbnGYZSZNBoqgQHFd9pAV5cGpzFMPK6XkhrFqvnoD7kwP2CkmCLSUas",
  "key1": "2nZdxhY8TfUhLb4jVT2chKWd5mUQ43zzADoz2iHon257X4mqEn7szH82SMkjXWpwJaJXsdG1CwBigLhk2xbSPcAD",
  "key2": "9pYBWJEqmL2cH4Fw8Vcc9eMFdwb8ZPbPUeGTGpDR8jHAzkejB4QSwDB27ReHew4heixiDdekbf9ocmVL4C33ctE",
  "key3": "4zS4dFNs4oojFZneUqCRU9Ab4Mq2DBLXAKeFXMVCxMcWRH7x9zovBVe3oWKQj4frDmmS7vSj6zxHm5HTmbsumtcQ",
  "key4": "2HtT6YCZCBpfM5cRNbFfKq3ALYFBJPHxxYjJkAroo8b8mjzePQiCXEArJiXx9TGsnfyGAhcRH8yxgkZJt6iYs84b",
  "key5": "2kLSXM5BNrGXceo2eJxnA23uVjwMRZM9ZZ5vrZarfYeyBigZyDucsTDreJeHZ5mFcf2WoWQgidjpPcR3ZhtH9yAr",
  "key6": "4yAJUTw4UwnLnAqXUS4jckUUXzXdfqKXjzLNjnp1y3YABZMgdZcN3aFWDxdeqCwvYSP2ixckbCE8Xy77xEKurUxs",
  "key7": "3q3L9dfhKHMiWLAiyUBSTZBVBhPSw5tmAvv4cENjkdV4EWSDzekdBFQ7mk2wZ6nXFppH3y3Z1RbGVeA7xzFg3o4i",
  "key8": "4bBtifKEdyuQHUfV2s1FGnyDZNNypVo11e8aTsU56FpfWf4AXXLrzedQBoZvYbuNuvyiLaGs3z99RRJpQQTciQPF",
  "key9": "5gy44Nyb2FzMpm32ER5PxgGVNUuccMmnyD9pWwxVuxppiuSuYM7gy8WjKYFPT1ySp6SXZxPxvp23tg5SWvF7pcjN",
  "key10": "29ky8s2RBhhniGuw7fmDtBeTcuvfHNtuSgh9UnhFw6qcWdtQCfNCeas1NoUh6aRiU5xwydekgRYYdfattt17Mb8p",
  "key11": "BtQCtz8fg3Vg9Jon3xA67dWnGYRkvBDyXvsavyYHYJ3QDgePUEp2Pwfdvhx76vv6XFuH2EbVeTQCxA4wWq5CpXQ",
  "key12": "2h2fzeNdGHwBqGiGFM3jzawm9fGMSzKAnGPjGFtE8E23LruNzJnoqrb5yLFnpoYduNPZgbYD35F64Q9RsRC7BSPL",
  "key13": "3RuvmBmZf6M8tHb2PFW14mmQXrvRJsdNUamxsqa8zySdkFtc7fNnDskGfkS7jpCwV3fUmq75TyL32eWo8XabyiAc",
  "key14": "4fgjfYf8ucorBT5U8e92gXUBw4ve6jbMQVCXCbWNENPnyXTbYsiE1nYjhmzUeMgTMJ2NYc8GcnwaLpoxBUKsJvn1",
  "key15": "Lnkn2suyiZNvr5KZ7BzG9zZbdvMeaFnjYcWE1LcHNrKrJRUPVfYtXVF9ENQjLw29YeYf7gPYtK1s9MSt3uJyZ2a",
  "key16": "29wE99xZz2goyySAFPFC48WrSVzwnJ3LHHoFUYEX5v6rp5rDTiEYB7A2bXrZ8J9L7YvNfWCrUysHF2xw357jpri5",
  "key17": "2aRZN9cK4TRF1pDpXMbi5cGLWp1D5WqnUsJFVg1L1ZJkCdP4N6RJbKYsAj5xDyRTpf2Jc6uoRq4hF9wahYG1Z38r",
  "key18": "4pHvLVAWjgbQ66PrCgNjBxtHfEDSWNrZxqYJyoRNWi4WSLP5Y6N5KXbrDWskHATnBZdVov3Lc5fNiVEgkhwuU5fE",
  "key19": "2n1wXV2PB1KqTxF3PULFS6FyTtUCwHqefhAKLKZvYr4NGevf1Yga99mvs7mThuJFz8EY2CcDMPqRPYjPovzuhfC4",
  "key20": "m4ytcH5u23TAWo9FvXALCbEnWBjZR35G5651eMdD7w3TC1XVd6jeykXJPgcCdvWqorHEpjt1YnGiREeWWNCuiT5",
  "key21": "53zw8ks7Muiu7C4Q4eP8chF4Aa6qb3xSYt5NrGoisKfwRvBW21UjWrLgeH2vrEXWn3wazT6HhcPUDe2pNHXtA66H",
  "key22": "jqQokSzDsSkA4DTmRb1Bi3G7sBpGuuXcuSWeD5mEiCURur73he7kBq1xWLKYVhPoKd5pRjPcXvJZHCUeSDo6mnn",
  "key23": "5tWM3DNEVYPgjiTqWe3AaYddphZUgRqBoBKcynFZknHG16mDNdUTceu64YRsvSEsNSwJCVR1Xwm8DHKv2HdyMmTp",
  "key24": "41pyP5oSegJ4AnUahcnfEdFgt7gBJc1EK97FC6u3YJ1Lb362JKC5xunDudkm1zK8sK2QbYdxkMXU4HNx2qz9Zexk",
  "key25": "UJR6KXAnmAbY7ggySr6jj7u1dPVeLp4zf1y2t6iDsyExyGNTGvZFCGFYPjzpk15tWt7mep1pQ6csxjJTM9wAAnW",
  "key26": "3VSgQzVcMn1z2yqKYHrx2HcGQRDyCMcoupH9qbhSdLnU2BjgVvNusTrEmJY3deqh5SEzkkjBXrTuQToGkLXCH8Eo",
  "key27": "5djgeG1fK25QKXYYFpkS4oTKA6kSjUMxhDrcP9nQ3QNzZS9y7VQEqXi7MaED5pVC5qSJ1YfifJzZoaP95aB7HMJE",
  "key28": "4B7Gb2nYZfziXtoqo2FmG9WGLpMAfamx7Wt6LJZrdoHbfdenyxnL79dMGfuzfLyN67t9FHT5nWYus6RW5aAvP6Tv",
  "key29": "45zcjUpW8g1teQvnTD5e611rwRmSgHUiR6wfjLLiFyi8rkaP8dUgBi9w5bzfd9cFgVmr3vQRr9GCs2xQLy5xf6Z4",
  "key30": "67UEbBNYfdXresULQWfmgDeXyeT1qejgPgPKryMsoEUBKzKK3e131oypCFsQ51AfN8kKtNoyvpy6McmccjpbSvc2",
  "key31": "66nUJXitG7qWksro7FUBLZnRWWupBV7npgNdPMcVU4gaQgqijeDJRMfNvmLWSGwggTsZguhCBUrDub6YDYTvT3Tq",
  "key32": "2hZ8Zx4e6qfgRndLDq3ZKiydknuTP7Mo9FZ588WWDzxX9FgbgUak5H27GqTaxMDKufQoKvoAjKpKK8mN7Rqn8fxe"
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
