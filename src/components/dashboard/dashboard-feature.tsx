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
    "4kiLoCHXsaA6Tj7oFQgorgVAECFp6b5zsNTovY5no1yUA2Pw8fCY2qkVSNG2GBNVV6PQdeAMcWrT8tiK4xsLieak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uqY95RQG5SncBhk62xyuQMS2GTUGdaZLYvTc4my5UsJRGgRA9g32Ey9mLfg1azsh3YX83SWRz3RjEJcE7io3jHw",
  "key1": "2iFF66hkjCv9sjNRxe1HBagymy8NHjjfjo92AaDMifWzXvfQVVBShhdnj2ahHgMdasdUyoqZhNqM3j9RDGRJWpmU",
  "key2": "2qTNkcSzUuEgGjPJUhUANQmJHiS7b6PUiJsGA9j6FqfUqvu6shCkytwD8vkqvzv43RGwPJCkHUgL3sjZUEHiQxkw",
  "key3": "5Ue8wpxZgrSE1K7dVwqfyqhmoLXhuSuHeTjT46DSH5nZ4M4dUMndhjnXTNJKHmeD8LYUyKjgjUnuk24m9N6xtPgi",
  "key4": "3NqNeSV1wLVceQFRFFDvbDSWWkrMY3TtUvyvj5wXmeWzKhxwTkVJ1nb7gi8zibx7KqeGyUmvAANdHfuTFBrWeinT",
  "key5": "56XuXfyoJJduQjBhqCRW1PYP86NBsQ2d8k5YfiEjneikBznHZ1ybUMq18wC2qKSn2WbpnXsW3YV1R5ZjMECHmqxw",
  "key6": "bBntaL6tjrYhciPAnjTnhG6vhuMWECd488Nx1GMfoYmVaf1PUZ8MaEUrTb54z8GcPHKfLmV1ojVZPvzXQnmVpDz",
  "key7": "4Zoo1GoxQ58cb6CqiWkEj6KDpy6F92rGrGptYzghJoT8Cy9KFs7f28wYK4qwBhaouYY4GVKik6RP91yfJQUEh1TY",
  "key8": "5qtKSm1r4P51kUGn74kyz5nxjV7NRjhr29yq6rLiy46rnWFBpAHdqV5BVYu1NCDJkiLCyjHyDQ7usE6ZPgZjU2xy",
  "key9": "3LpQHGyD8UpgqDWu3T3ByFkwo6h1tuhKkY8hq6qm5ztB5qqYMpBZY8Xve2QaQqBT2HTa13BThCdwq1Dvsmc91gWS",
  "key10": "dodbZ7Ry6tcC1E2HYPRJhz6wjWrdAiwWhm4dFNsSXc2S3Zi4pmK7sZTD6njvkAFER7udLtqMhGjfQWKB7daj6Gc",
  "key11": "4QmH5qQj1eSz4H1v8M3n8oADv79iDGc82X7kEH7fi387MKMQ2c6eusQWR6jds4eu11Ee1eEb6YQVCURsbSrfVa1X",
  "key12": "2AaaFTeNy58EBuiRcfUrcoJEjiHtRLf4jLvH7SKVPRKBL1uXEQPwfitwqBQ82uQ7sfBjhVo7rmNciCjTH9tq6A4B",
  "key13": "66kEQst37JNdszEpg5LGKPYX38VBPzrdfLpQc34Fp9wvVFiNN5wh4ZYWYENGL7Ezy3gfiQyXhdoBcjz5dCMU1AQc",
  "key14": "2Vu4H8xaGw9GKqwSU32rfS2tembVTjcF8DpMPKTbxN1qTWSZwjTm6ZoJvHwyJoxF2GFr9HEcBxfWJCNNQPFHPibB",
  "key15": "57hUsdiUiiKB6Y89grvFdPQurApUqXB5y8QP4D8sC4mQQYFG9QkC36htauTwDmvTejJCRw1cwMagRP95yTpyeuRk",
  "key16": "2SeYKhQc8rKtTzxGaPtrPkSkySt544aJ9wfR5RrXiFAvUZwUAec43oc1rpVdWt8w3aoYi6dQ9iHXsj2FSxKg7W2f",
  "key17": "31EFFNqTqENh3mhma6jA7yshWeKFpikrzkDstMVFF6spaEAHFXKQMq86r3nBBgTnRBHJWfcWMWYNC78hp5QABmDD",
  "key18": "61ASXRZdRpzcYExz13hANMHZ1Du81teSqRdD3ecVyKJYz4kojyeUFEBSoYG6HRDEA7tyYy6BnuCqSrkLFvjnyueP",
  "key19": "4ZwNnyo4F1JzWrfujNfUZ66z5N8fpSKy9FVJnfKRKFcxfGYhgEuC2HZsGUhbGdWt71AZnoj39P31S1ZevEWeWS97",
  "key20": "tehHJc45CGkPq4r4Fgs78u4fzfAF8BuGVwtS5kA8ucewoYNM3tJmNH3uNCfqtpxH8HYUn7UCyvDwWDSLhjD9N34",
  "key21": "3SmxVkDSs4hiXnt5LSSVnXfZq5U23E7yGy5d51STNTSyW98ooF4PoX6eHDjhJJFQMQ5wwf1HMCZwbnsdnozvVq7M",
  "key22": "o39ScBEUr8xpSdSyL7pG1zuypRk6QHvcnnkJyWMJgdtAC26XpqCEhDKzrxBXVfRveCVrhWwbFFHmtzJAf8Vbm2i",
  "key23": "5fdgHu9hha1FrjquJNCdENM6XhDbtJaSUSX2qXGWU85ZxTbEARxZZ1HYX7b1Sh5L6fwxXJNPHXq2WMXwLfJ5P6pU",
  "key24": "44D54sP3oYRirzhRUki4kpg6mdwK26NtDucX8DGMUpZinqHu3bnqJiEcskzuAK1wkQMMg2NqANC2uz7fp1tvyi2S",
  "key25": "5nNvH9AFSotPMq4vLMiPJr7ugzuQ1hEYyTbTwS9fEjKKVy8VvhYjv65fnqwYpwBFrHLcEr53BN23eJ1VyaXbNkrm",
  "key26": "5Yx5M5eRGGCt5YtQ51MGYPZqs45SoJzyxncG7ZLsy9sxRN4xhhze11rAp2aDUyq98GTHcERy8eN3aAp9JrYJULWQ",
  "key27": "nnU6F3weBzFdhmaWcgXZfYFAA23k1LGefGCxo2Rwh669XkRQ4ZxF99wnigKrFBwr89gwWW9KwpUvYJEQJXo2ueV",
  "key28": "2Jdw1R332SvCeXg4DE6ERttiwttNpwenL1yvzx56Vby36d197ZdP7hnigE1WXp2biAUYTqxFTXPTkEA9pDFvD2Gr",
  "key29": "3KQwQLTH4MAiMYGMfY5gMWEcwZjVhcUhnpK2kYkcsYqyYRjwXGRsipVZJhcgaC3R2ribejP9VQiAdCAd9D35LnQS",
  "key30": "2vpU7oek5jdfRmWVifwx9KkPKepSzWFzAYJ2iUFupTmMXVuQMQ34E6uMAbhEWU5QsBvrdkMuJDxht3vibm4BJmdU"
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
