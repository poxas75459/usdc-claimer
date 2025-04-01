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
    "4mBPDePvtwidZWBVWHw518mYSNK4z1VoXfkcui6x8CtnxXuCHkhXtXhb29FzJH6HtsXBZrfUM6YYhJTGNoWyFQbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33E5prkTqNfGwghyL64aE6pZtiBoqjeiQUHKmsJQMedFy8nXYcRWaYksgZ6HHGtrKh9rsiUyMpJ3RoBqSuirzeCs",
  "key1": "2CqTxD3ZrkxUNPjQcyRMoGVsyGiL1xyCgH3whbCp1Rrrpx7nJ1VSiMY9WnYHnPdr7v4JAjDx2Ev2hhxGhka6ywcK",
  "key2": "3DJM9VUoxKANDhcHMU34GkUsMg4iUvEMGQYaG8598jMv1GN44Kxik2KAzsXc4jCZTpUSteWA3QkVh3caATeguTgw",
  "key3": "jaJ5xAs3uy1GowaZ8R15nghZz9BLPww1HnDHLBtRPRPuucpCuSeKCTcHJ4fnpCpY9L5LKhqFn6RW7qBmTwCeN2j",
  "key4": "4vXGUJkhebCMwCXpSk4XLHxMUyfrGAAhcF9Q1bxb322b2eerR8ujrMdt4yRE6sWVBt8ev7yB17p3UDopzrpVynm3",
  "key5": "2x8wQdQXfh7FBRpcjUBJH1aJGo7kFZDgTTW9zw9iTBA8gVKUYPjXUnNrPUmmftEb491yRJpoTBnyyqTArrhngYY7",
  "key6": "392Mhap22UjESeADshPdZ5bXCBm4thaa8yRJ3pi6WhVaqPzEebj8hgzQafJcAdZjrSS3SCbs52DNCJddz6pixo4P",
  "key7": "mMQQMT8aXwT7kYpb5cctUFQYqr7cFz51aMoQyF7hC3o1eF3opEEDUKriZSWkX9ioGwKH95ivs8KN3ryJqbeHjQW",
  "key8": "3EXu4sEqUPka2Nk8SeFCTMnfu8HQ6b5qmuuJS2o4ogz9y7J199f364ZHCo4Yv26ANSou6S8KjbAmvfR49A6FnsWp",
  "key9": "2aEQYWMQ4L4buV5SgXRSnEgGrVMDQkcQHpYAiyEX2uncG9144mC3qrjMoEhG4JxkWiQZobEhpcZYs1c62ShUXAfo",
  "key10": "3jBngssTRxRFP3yiGoexCTXERAZfZGq6WmQUsJwboSGjUMh2hXYouiQ9kAJWqXbCgKsij2zz2SFwrMyYa6cCGG7Q",
  "key11": "5Uf6zEJcAzkJiSrvmrZJSZRTQvM8NiiwaXc5KooKFargEm19zjJBcK7kX5AHegs3DzGfH7a1seSZr7uZVyaE5UU3",
  "key12": "3XV1HXSZh5LrHum73kniFAFDcp3XaQdREHwoBGwmTwp9oYDCCCEWqTJyvbhsxQoWKCW7TuvhUT2g4kdJdo8D7cQy",
  "key13": "4AHjUEKb3JYude4tUope3ckWvHHNRfQaz6HhesmofC5b3DKJReDiwKEUCSEkChXpFBBEAMtcx55RFAmLtVJoHY6R",
  "key14": "47zhNu641xpboUDoXCpCoyZ1hNYzMp9ncuDwEDxY2pSJuxbBY3RwhJ3VM44igz7MdGhScyjnNTCmpPBRyCvL8BMz",
  "key15": "63fFbnCthD99CycXLpiZMfpAiZ46692LayZaMEmyeTRZr6CodV34HetGjSS1NGGaEhap2x8EVdz9Ld87pYPfLZKL",
  "key16": "25LTkXFbQfzuRySF9sVSCXqTC7rJec61kZkEZxbCEMVVQTQ9PEfVqyz4YzE4wfDApYQop3XcvodXA7gGvsnyoDYi",
  "key17": "3P93fYsEML6G6JZWqW2Kzg3s7H9QXo3VpWKTWBmkT2Xo1Sms4mcCAZ5Do5SwRAKK63vXZKMj3mVVtyRQskWhPkt1",
  "key18": "59uVi62sCZ7h8qtQ3P4fpRKhcCwMAAFeDv5hGAwD4Ejp7DStX6QXer3S1AQ8BEvX5y5iakkDHrWM4AdSBNWqnoDq",
  "key19": "3GoiJTsn3vGcKhgA3foUvMYaBQYhgstGX5oD5FptDBjR2TFFtP7e8ygqxrJEDJS4G3sb2JM3GEZGnkedQLwsZDhf",
  "key20": "3x6jhDzhzV4Gmjqc6ZG9HFpUi6WShpuGf1jD8Gxyzmsw6p5euQCLikFXzaivaf5EuZdw9eLYEk4LbumcCCGvLuvn",
  "key21": "2okjBGLKy2VUb17qnGHh4EUnK8wTdCg7FY7idcQnteHfNk37qaL4a8ZmYu7wYe11WBZ6ntLQS3XqPs6yspGREYte",
  "key22": "3KPjt6Ap9tkuVDgtuGybpVPcKk9yBQ9ig1Y3L6iV6RcPwEguhD3fdtK7kEYpVCSTJpectKNUHbhXa6tj5Bgg9yz6",
  "key23": "2Kdb7j1cXwWVDZD348CUmTAUzVaJqdtvYhMkN7EVSLnM19wJinfYiM3oXzNRC73mVqTngUGFUKQqBspzUmegfipC",
  "key24": "3Mg8k48JpTPKWaqAySJjY8PzZyLZQbBcNwAsvNtpYPtcmNRYnYpXUCu37xwPoep14W5E7498xzbg7iyKui7YMDUt",
  "key25": "3cW2VLdaCgTE3qCaBBkkj1aRCQssZsdEhFDkBpNLKVGvDZC69axQipyZEHfDoB1UcHPEXjoe7w5uNputgSPMmNaJ",
  "key26": "35qWingNdNAjeoUxY3AjKzEQh3KzcLgEDYHrGE8uRAKSTmeQpyP9pjGzwGwL1i5zFAP8DzfTZYmYLu5mkSX15vnF",
  "key27": "2v469QSE435BCPjg6HMbXdtr9LtK3KnRbDeEzusXHaaM2nUcAKFFbmwgToCbD9bnnAthGZAg2ksdoa6cYmVhZPju",
  "key28": "DWuQgz5oTE8wrJTBvWCFVoGzLk1AvkZw3nGQTTHKrRZuXZHBRFNL1WJKVw4y8DQezGEyrzoyzzWuxHYKHnLsvZb",
  "key29": "5eSbZQFrog1x6QqzAmgRRN9jyQiE8wQTPpzqjeGPnXWa6HLaNCk8iSVHABEpkhGKURfe2zPwN3GT4ssqkuREi5rQ",
  "key30": "3Qs3UTfJHDCb4BkQEvRvs2VBEdQeGANBki7NfMzJS7wJtkSSfBpseitMwzEeMkRZ6k6MccB5oBQy5yWs3SVT3qxR",
  "key31": "5pSmtzFJ185LFDaywudFS4PkAAz4MowSE2GPLwWfxRG1S2u9MdajYCtzuhFDVyCexnmhEUoi7A2vuCrtaxBvjtbQ",
  "key32": "4jpMYWnCU6yKaSkZoE3odG5RsXWfnekB5YNxagG2gwETifmsjJj5pagrmDz99VXqgmCj8h5VYcqVMtEgWaFJw4yC",
  "key33": "29r91pVREV9VgGYCxMmSho41xKB4bUdGroUn3nYH1HXpCczrPeZwS49R1c1jvMGGfmRR9ALrSct4yWDXCR8Nfxib",
  "key34": "2nUjcYChPCAZyMbmvjjfHqP4P6bSGwkHL2otKFqUPRXKXkrUSTSrDr8tqwNd14bTxKGdtVZJu5BKqNJYVErkyDuu",
  "key35": "3cAEK5zTdtcWdw74PS8RfGMUwsmPY4KGhReBdHpQ3D21naMzW3PePnCjrZiYHnkVCYxhdrsT3zUMZ1s5kjuwjVuH",
  "key36": "7t5LHtf4moivNWgzTY6G2GKZhdf4Uqm9BFeWFZ6ujN9Da56y3QwUsN1GzbDMf8mtpFTjgZBzv3B6jxdrVZUgRCM",
  "key37": "3s1BjVcUt9EzCXfyzzmXzTaGQHMSGhNooiYk4J2Q8UKNCfYWFxsufV5B5NsRrBiHU3gGgNndNQAtf54JogZ5uSRB",
  "key38": "33bhGtrxS8xMmzhVZFkE5CUKQuoSQsumRVjToSANCeGdYxZjzpbwLBXKNHK6vRpGK3AFy9cKaCtHBb6umV7v9b9f",
  "key39": "5Z95y5CP9r413TPUF2LaGjygb6fRQg8JSKXUqruGXm1M3z3ALpYbS987aPEZMHJGKaNEZDazmJzBL8NxgfxSzn9n",
  "key40": "4P6u6FzrEhNj56UmRXTSzcryzzwUCzCw6SbwjqUKoGN1T6vAa7PyP96za9wEVMQezMgYaAMJmpiAnWoAn15niCaQ",
  "key41": "4Si2UfNw9MBYeCX5GVHHEcYrMBkQH5P7zNkQpzkPUzPPq5LdSAd1w3M7eZ9nx5YNHjZ2UhB9tUfzbKr7GJKZswcY",
  "key42": "2YmCySSVwCRy77s91rckwtKdZ9E8B9vxn1SR2c9bHmsdto7BeZnWzCPSKeVkGJYq1Q9onGMDfVn4Zmx9nBXndoxj",
  "key43": "5stcr4H4T3UTjyXLSuntSuKWwAm9bqZqXeL6AZDU2LofuVD3dPKcGwJR7565yyfC2hVVRjDUYLa1gGNrUTA3FZEG",
  "key44": "2w6BYh7rhNHXKWLj9snXUM3nECd7o8FkrdA6PEXhCBGs7ozTq2PzdRxXCGHPw8NsKxbXtjN1RLekPaWaXnpAcCUd",
  "key45": "3oj8mrrDaLvwTECmtZpCBiUCvJeWX52SYwQDttnhJCH31dbwY6PWChak2M4pBrd57U8nVuBseuGxc5vUweoC1Xko",
  "key46": "3GjrmjgKH8zKEE9XKMS5ez9N575oHj2FDBracgegP4hRzV9NvxdgX1xEYtPuDzMoRrac5HS3nkPMLBTCaqudHcUw",
  "key47": "5zFwtZeSpjFokP2kBk4f4Uf3zng52y7oqxF8NYjgumC5prV5c8jrHnUQpkqdXp4yxSqKcj6zhmeRw5L2UYaMUeq1",
  "key48": "2GnWpRXXspZwQ68agRHykwASyV96timwJPLSpjr5jJNZXxv1uWwcFU1Qwu5WkVTB4kU9zLrUj6Kfytjs7npgRRcV",
  "key49": "3YMzjGPyjdBUP9HM2Pa7APDw7G9hhZhKk2L9Rwob3TQzNQecEj7DwXpLpbBaLiRjX7VDwn39Xu3qyhcgb8q54kRA"
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
