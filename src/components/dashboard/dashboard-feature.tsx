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
    "3wbWKZLQvduNrDyuUASi8qNSbPNE5JTi7mDqrsZHfEXz3yFUYCCjHEa45zc4LrfgCbezuiigVBqdufFWMUuyhnvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mekFc8WmDzYirx5Fu3RAXMibEwNLzvJJutUTVoHJ3Cn8xtGoBNn9TGRE9PNF5FkvPV8cTsEAYWKB3y5jXbeaL89",
  "key1": "5cx29SGVtj8PJ9iGFT1QShWwYpCPmejBRmPQ74AjvHDgPNKuZUbaUfuq2TRiXGtJZ2s3QmWGsAiyNQbvHP12cDcS",
  "key2": "4CcJRPq6pXdV3neTVaqn8qR8fypf8HM7LeAoikLqwTAn2Dt6VZeSydDVK1GT6AhQUAUWiTZvy4upHVv56QfRs8cn",
  "key3": "6aDyNBfAqACryn4dcSXfXze9fimY3dHzJy2mkTEdswbzxdwsNtKsNp2habuFYdECqM9QSFE55XUDYsNeBdmpTDn",
  "key4": "8gSfWgcsq3gryCKj18usNwa7hNe8pt8CtfLjeMQkkvbgNJt8FYUgECECSJX3LTjgn4XucSgdk5j3daGkYcVfCN3",
  "key5": "4ZWZWAx2B5VZacX2gY16sNyvwH5jaHJEV4x1NuRy2biA6E7pK98uFj6JtTYhh23xsco6FEFEYHHky4R1K1DurZC7",
  "key6": "4uh4W3Sjd72gmWyGPSbSvwNcfEsuKgLcJZFr4qLRep8mfjv9y3b7zfbNRLhNN4KBwJkwnvUDebHNvTjKZL7LSJPw",
  "key7": "36QUjWfnakp6Wo4cXatBVfT4d1KJUF9xQkcjeoihPotSu3ktNM9SSooNL3LxDyVX9DJX3dKhVDTsJUZdMqmmWBoh",
  "key8": "5ysMvFadPP1MqBuqexo4KpJZGkCkPEy6Jnm76H814JGNgR8YowuNH8inZwx9AMqPaRzdu67VYPHwYr8hUCBn45Z7",
  "key9": "2zbX5DA6ivsiD9Ltf892XVEtmFrwebJwff4B3s8gZWp8v3QqjTc8knMsVNhjxrkstP8Raa5RgzqV9SXHWQFmFFfn",
  "key10": "66mWx5FMjbsQAYSH4LUPJGm3W93FHmTDUgemgSgczYLk1GLkHkYkt29KsMfsMAwF7fPe3Ru6hZgzhRJ1Jj4FqmpS",
  "key11": "5N8CUk2fJyTJheL9Cp8EhdtMWf1UizH7B7eosiVHDX6hwSEdA2k2NgwGWaeSe5i54mDVAKzgW8wE8xYzDrcPNBFz",
  "key12": "4Jr9RAFMvrmQTBTS6Bdfaaofb25oU1rN5PmEucnLALCjoSLs97DeaqePFCSiTAH9xojdnrrKGfBJ6mTJL3BeXYXR",
  "key13": "5ywRwvbeW2hckNLQXBsWdtDWmuC2chaGJLVLJQkX5riT5xATFxmViFZ9mKxpnEi1nZpkJiWVs8TDygTUNWoduKXQ",
  "key14": "5BgRt1XgWEJ6A4pDSZ77Ph1dv4nA9ipm7h6ATAEFSia8wsgfAF5Vr1gCV4VwpbVNPBqgtcw2H9oaQovjA1wooYkg",
  "key15": "58ctQTi2iDJ5bTd9teanrUu6PiSawnU8z8kJskmp3woqCan2AjrGKEnUPYLqBAc1tuhtLfaxThdgV7293S3zoZ9P",
  "key16": "65hispdLY85g5jcfp7dbgJHeXk3YXDamEjH9cuPgYoP5m1z2h1Q3HPkY75uu78doqDi5cw3UnooH5oU5iDidFQFq",
  "key17": "3zVxrZpQRYHq63aesrJBYADeRqfdR8YUJ8DnYsYHTNz54ZZfkhKWWEsctoJ2cvqUq8xxK7WbQF23wNp7643zQPc8",
  "key18": "582qEMyfh5UCUZsf6uMLQX9kYC6HPKFvHwqU9yS7YCd6m6BX3BQi1RZvsBL5nE8HFD3DbeNMzJx4hGJiWAWhvBfC",
  "key19": "DKJBzda6si3bcHtmTzJnc5PmLRttpUnRnmXr35CqRAGYpRC12dSieSmfX241SidZYmdnz6KLx6dx2WGRnaBHHn4",
  "key20": "H1J6oebsmGM9Z6Xcunx4gqP32zzz1UJQCDQv52zD4DTZiVQLzgjWm5CJyavUtjiP2XtKV5w3d69DMar2SrWJxJA",
  "key21": "5vmvAsm3rissbGBjrwBh7nnWH5Guguev1kaaFvBUYfKwo9o8aEiJyqNMATdkXp8gt8DczezYF91SB1r85Gq7EDe6",
  "key22": "2fnMtZ3Q6e3omY9iKGyfP7L6WSjXpqMJepstpsybXFWXG66YnL6iViCPs7AQ2YgZYYWcypEhyXL4PLkbcte2YxFF",
  "key23": "8JYgErD8PNp4xw7cSiNGeonXDhdV4z26GwtfojV7zvAWs4nLtMqSwShn3uAkZwB3LSLFxEqpx7JSLpWKdLB2FZp",
  "key24": "2V8QYrkSEDgWGbtcomUBHVtCfgPNbj4ZYYcHBozWS6c1rS7AHFGtnBw6gCX4kQ3KYueJXJmY2Sk6rKpqEXCw8M4J",
  "key25": "5DRJhG32MXbWb8XFbgMDTWCNYA4SwkMmtt1p9CrrT4CpzLGWivfcToCDg4F7eeUCr23LB9SBsWTXNY88175Xuci2",
  "key26": "5ffzWQBMmryQviqggkdpmgyKV8zxrkHgY6rGJdbz4GeCZvHoKcYfRazQhnUefSLcwCBQ2KGyGVATdSkhbW6k123b",
  "key27": "23u3r51gbRt9u1vcsE7Cp8mW3THcGN2M77vuitQJdYUqjwHpL8rBELHecKZuapPDdGiYPmSiaPQk69FMjtQSciyQ",
  "key28": "52pXdm2SkSFDq1J9iLW9AdJrRAeFsvz8P9o5gLfb14yQxyRphRL4hZ7Z4hkbc3H8drFjA1rpfZFkUqBRTT1KoaPs",
  "key29": "2MBC2Wcuz9KhLW4WqqfDeTJGcTUuiD2pvX7U89xdMYeNqbHZdzCEAb52VNPNvhD9UYiRHwTjhFpJKk1SqyCsDpUi",
  "key30": "5WKG2H1LerSX55y6WwkiuoTLkazQzjofgDiYRDgp5qrAW8hBmjyU5HkCCkPsbm8CdzuBU9xp694Gjoo9zXRJuZSc",
  "key31": "2rAxoYdf4vKtZRZsnE2rt5H4mcErmmTCg1KFERKZZyJrJzdBTSrLBr6BhXpKtfmqVWencf5eAzeLVqMY4iMKnVEP",
  "key32": "8PY1sgJVzqTzkWyzmrxrmF632unTqk6byBfo73mj7Xgf86BEeqZ8Hy5pTt3PZV1NvjUUBjERexcTG1MJz6VL6wf",
  "key33": "5hfBw9zDd8Qw53YG864jvvQtfXy3sKRjKkgyarh3iwMDVkezejkXR4J5Atp8VHVZVTyA6bC9xy3ivkPdWDq2LHn7",
  "key34": "4FEQwhc99Ph3MTqiHSeEg1SUyN1iFk2n6SB6kDwnPsrrVDUwjRr4M9hGSeqk1PjjLMunNiPKnR8Rt49CYKHy23ht",
  "key35": "4zEbfcMF3ynGVxbpNFaScCGEDYtNph9rvcwVi3zhhdNKmmCk9fM2424o23hSLFwco4ywx2YWgso9nptR8j71a8bv",
  "key36": "4P1VcCfPkV4jALhsJLjghCmykBNxxpi3fgueusDMX7J1kGxsynyy9FtwMrmzNmjvjrxedhALeZxqn1WZ3n2uQ8Cx",
  "key37": "5mvWvqzdTwUFRhWWAGwBGZCNvTuDru3eqhdqkXMSvM3kBDATib7ozPDajgFrqYG1wvRExsLcg1YhRxC2zXnXHPA6",
  "key38": "486jEA1kS9MvK5FZEKh5d33aZyrVPNWXPo6LYWiZFcdbEFiG64kjk1rE2xqDjz9MLTmzX7wxwZDn3TX1xMXgCF7y",
  "key39": "DWwDTmhaKU2Mh9cZ2B7uqXDtcZ2pN2XpzC3rHoffCV3RdisnbNrg9e8SGicdXnP4V7NMbFsiwNfCLaQ1L99QVG7",
  "key40": "4cMDxyzX3smQuN98KzyGhjJjdoscDkWnEBrB13VwBkSjAnxFema9QnMd5tJt4ttRwii5F5drFZFjmq3UuFiSzEQ9",
  "key41": "GFx8AQKP5iKPYgN9uxGSfoFTFT6yXJZH2sme2mRD5vvE2vNBSdFXdd52HFGsw36scLuBHpB9Nb8t4kodqnWSPgM",
  "key42": "3iaaxs2yeDJcu2PzZuYnARPT9uZb3gVK7mm4J9EZXnubPvs2RjSH1YrDKG3vQRp32bA5nwXrHwZ4wfsfNvgHfrjp",
  "key43": "3dzS5cqPBnVkcdKHUP9crqrErZUtbRWUJRZdV7pfynn2jXeJ9EceRM5F8ACop47J4eV1LGia3uCFWTjKQgSrmjdQ"
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
