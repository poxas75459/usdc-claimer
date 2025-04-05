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
    "3MMRKuPeJ42xSYQJBohgf3xdPJGXu9FzsAjiuYD9RYYV4GWsRJtn3MT3UP318dQ8F4e18WVS6oNJJTYk6wUsuMV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FzGCkDyrK4Cid91id9sW2eC9BPkMma5QVJjTBY9yYMdN79VxSdVNvbaaoBcx325hw3FgpP7Ejzhcpnd8vXeh5dZ",
  "key1": "3d5QjPamp1RDSj3bZYQ1eENvA4GKJMi4HTueSYYFNFMgB1EohqB2nTBs9XH2rGBVsCXmMcNAZJjahjj9aeydkNoK",
  "key2": "3DT1wKh3HLqYpAWfvn8YxzuhJekr3QctjAegHY5LPGGfhyRVza4opXY3DEwP45iQm9nxfqJdcwwuHvyNfpgSFsiC",
  "key3": "4aJs43xHai6oQqSnminSGXx4KcJDKmsAkLPptqYs9HiGrKMdase4PoJFysNuTJiPaj6ZFXuQaAWnzBqASA7rPuDL",
  "key4": "46XfRdtSAMnLyxtZ1PqpZ1vCvALPbXVciHCMjVSe23ifJxMCMS6fPfLXPvUCbwUUu4viFoESjsBiWyz6m1gXMytj",
  "key5": "5iwct6VPECBrGpCBW76ApxLHbBYdHrCvnK2EWRYy6nKoaLU1PuCQ7T8eALEx8UbmqrjLRG6apSTgUAeRfcFGtuDo",
  "key6": "4U18Pw4ZaWjtwPFjUhJW65yfkoyzCCxms4VeCRQokpLdZXJd51jcokDLLxbeiXt9f2UbvMVbGgmuMSo9TSazLDWp",
  "key7": "3ZYxoCXrTcSpTWMGnRrMsSLi9Yyv3p6FArPsJ9o8wEzUJrFEq4ynGFGRmPyEfKd7kMGwBcqtc2wEtNeEVZLuK5wR",
  "key8": "hzEZ7yMzatxAiZs9s5wvm8LXzDAs5MERU9cDJ4FF1HZBXM44DySdpdUCJw3q1XvHZJ7b7th9wRXhigBn8UvgvuG",
  "key9": "3WXbKszhFXFfWY4KdHUmDHset9X9io6cWim52W9PU1oUk2Jj4gCfSFAmdAWJKcrtVWsmf7qHyNzVxYpdRR3hvrxY",
  "key10": "5NEy69p8RhbFWU6hRqzziomNSJtmo5nReBQV3ddEGwBdV7DPRMSsfiWFSxapAe4EHMVaEGJSjqFxNjiBauWRGR5g",
  "key11": "3Q7b96BmUkjD4VxxdHQbqPCqWMfaNyCYi3QAVjh6VVZC543teDCAS9rJLjQQRgzKePFXiqQekEJEVTyWkGFcKJkg",
  "key12": "3RyqDCuLcmpMhAejfm91scBiLJifTUwRCr26ragSF8YWcDhPCBto9qEAJQim4eWExvLpsXUVNrmC67brD5zNGSXM",
  "key13": "4N7G8zQTrAKHTnR3V2rH8F1yuag5f5SsFnaUrqeN1zMjEmbB94BYB6tJ8HGD3ZQNLv3uZqZA6ByhfuHtcJzhm6A8",
  "key14": "5D7J6sfBnKnLSBhjUxHR3YjkJPfnDywVe1GZ7fPzQhvYsLef1TpzTGDR2zCXP8acCGpkyZYYchwwPUexRFi7LBaq",
  "key15": "38cHXtVJTJuoAFQYskVtxM4TPi11Scaj5PLLcDB8dytFS4hcXnaf64thy53xf3GAg3y3SREqzRKrcVakwm9hpSAD",
  "key16": "3WZsu1xFArbmQHVwA4uyj3Nrsx3Mj9DY8Lu5UrwnM27ipNmaaihRhU6ssfSCtT9x1DMXNm6SJfKKGtDTwv1Y69AB",
  "key17": "48aknynhQ3sM8PiwWYvCG1FK9XRNpGDChgyLPzBG2cAYa7QD7mEEFpuF4MNn3QSTU8nYvc25dcP1oUNNyKuCgwsR",
  "key18": "D5khzbiTXLoszMj1wexEJPabmpqrRzJzPfzQ6zvHCPdZv4txCsFk79LFRbyj9c7EQnz5GGXC98bcFc2gG8TLNQq",
  "key19": "5VbF5kXoqEFSzeUErNPX2qbjuM6qdQmjCGHdnX2iMNv1PR8QYQphpgv7gAmBy6MFGdVz2QBCthWhtKPM6DMtsgLj",
  "key20": "2PrJixyAS5YE6dW6tQZGqRBNPdtWmY1ce2APNTucNBqvp373K9Y1cJHW2xxo2iLz95FbreQ8KCHrEARfGhqVjwKn",
  "key21": "JDFSGzQexArttGPhATLYrrgv8U6fFDWnW8K7nT3P4515mCaP6F9Se8vC7FnztgZCHQTfreYT4kCC88XJb2c22jd",
  "key22": "2GDU28R4X73K2Y78583vaxg8XA2d6hEXwkWT8Wy3RaDg71LsPVNimeZ4vc14TdKecHAJC4nygHGYRmvkFH1MGoHh",
  "key23": "2ZUPrpcCWb3uSLGNg6ovAs63b65wv28ZWQYegf3byh5i75faNmXBcQsauvsvKzR8NPMBzrUNvAiUm5WP5a47GkPc",
  "key24": "5HtMuR2EyN1GfjwvVAibpiqmAu4yqzLW2Grt9zVhKCtbPaWkA2H6tegfSzHCiqkA5i9p6YjSgdkxstgmyXDhPuc",
  "key25": "4pGkzFbinTfooTQBU932AZdi3ZupM8Q1sXcWLwhUdCjDMgua1gtr821wH11m5AQMLGWvmEZUSCMDHFYvnDAEE3GF",
  "key26": "tKYTYVtErMHirpWSBrrQRYtcKiu7V7hy3efXDZcTcETFK4JYX65w8mwE2AKXgoR5YPS4WxRkugHEyUxQjZjXRak",
  "key27": "2DFXuqkMge3K6eBszu5PXrYUiLVv7zv4o2Dg3pS4AECozRodYssDJUZQZqFbJJzWobn45erghpXSYPtfXWAjLx8A",
  "key28": "jnpZkLMmJunUgzVnvVoYXtxpH4wgjx1KomCjgUtiN3Wp7Gs75ugE1tz8t3wZmeBYMZLEg7knLiZTk6zbaDTrz3i",
  "key29": "3qkwMh8tdHign6e3XmzHCpPFXBYYkFdt9xviB7nK4igEq7qwAiD9xC4toURVA51Ap3gEn7eejKuaa2xGfQXxthRr",
  "key30": "3jcedq55kAXPPoc7AMEinv7jj1oESzCcMuKNDbG5ncPpuCfv7w92yrXPgAjCv75EhmJjghhCo297sCLL2n8j5TgL",
  "key31": "LNupHuZso7BWL4bWeYjDVdVbsfnQRyC94z2JrZiAe6ryAAeYtCLFZoZ7eeZkoEM7amFYmA3PvKtKtRE35r5b6ky",
  "key32": "BeigGuKNYKz2KoztaNGgFbrzw3ARDMgPA6gt3wHeHJ6XfAmmiMjwWhLLFPhPRzZ1mUeTdptxkXkt7jQ9JSBxoH4",
  "key33": "5NLRb2mXyuDCr9vGmFEKBRgrk1FhxgE5kc5RCdft5TzR59JXp9LBeQZvaJHC3S1pRmpo2o83pXuaaLdkmWf2vGPi",
  "key34": "3d8oLLKAe6AQX4ERoKuxzSJbvD2jZ37qXUaZUVyRCrkkMWVXZpnc7qAAp7Qz2kmufspx5E1hyWffk6zXuhoev5kv",
  "key35": "32z9aDpT3Un3GyWg46fCnAhCmEZy7SpYK1PyrKwyEXsbA64drezsGSe9eYUdswNgbtunKExWubNWLWP281dFH3dB",
  "key36": "5Kcv7iBikbwkzEoKQ3hNkwYtMrsEwwXyxJ31tVrTupv1uRHfqu7qMc49wYX8zg9bC7ttt9yTrBPQJmMQqWW4fR1T",
  "key37": "QAqMJWRFAtYiBrfgdkHLwCfq8ZNCAWk2XGcqAhitSMBWRtqyuTnBovbELUBdmKsja8efb6Fiz8CLZyutyzTqFdE",
  "key38": "67V9x5wAPC6DQuiGSFKfWVAZACxNKMVumK86jaPwfWirbf4Mm9aAzLRAkAcwnUKd9hzJvPAY75m6UQASjF9MxaCy",
  "key39": "55LKvWJbGJHkpLDazR99zKjckqFFjN8syD7Fuugi7PeYoEXixVoMEqXThCvu3wgwknYUpxpZj8eqkXiw96iCsnBZ",
  "key40": "2bX8Zwvt9Bm2FSvsBLy1CnMsastSjAEUxazYB7USjNmRZey8JzRW4WjqVQ4EgLbaxiFcWA4syaNjtmqgzY9LfrFg"
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
