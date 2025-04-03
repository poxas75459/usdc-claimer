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
    "3pvQKNfCfTBd6FyadyQEYAQZ4tWro16Jk5LFgAFWCk6XcfCkbe2sSoPJjvwzqfmNRKDQPJ94HUsS16U3Tm3aBV6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VZax538eaJShsPE7ysvk9gFc1wUSkkBoiMhRwRUA9xB1i8jPrQdawtUsW3NEFYa5JNBkvZn44riaG9V8MbtMnAG",
  "key1": "3wetTMjHSPBrksV9cUsghdrsQhfeCR6oDmmk14DMtAHSGvvFGECuthv6pWjXiacRAoM57MaF3rBnDeexoVFcQYS",
  "key2": "3ueyM1GGd2RpZRnTRkwhGqWqguqURcLf5Jkx1pRGjf2FTMMUEbCCRYjDidCtHpZqVJse9LPD1kquJs94JyRUd9Jf",
  "key3": "2CznuLXEwC6tXtiGZR2USrZfz1kjEAfsSm2J9KjZVNnb3E1McE3nDm2BQCtBv5rVZvBqb8EBmLXsLFFPvSwWJYM7",
  "key4": "4aFJGxse3hJX1p4sXheprmedQgAmhS5SivfZ8q1s9U4HGMwfZXh5vBDrWJhUKvsiiHmaZgyqH5bdTucN8ouQERND",
  "key5": "qAqGQURoWig4zALTCM2ERYTkCWgwrkYcBSfjo8cY2nNbebcNK7kzS3qm6FWGbZ1eMYTUQRZv6kNzSVZEyqbsSUQ",
  "key6": "mf3TxvWZQowkcfSPA6gcP2jV5DiPgNmEPkyYpwZpS25wtdim8E9fCebUQdwfdqmhJEMjWQyj7vV322DhR4u4yzV",
  "key7": "4RBmYLB59vHUez9MtDwusvpfoaWuUNU6shLo5ZnniD8YPLYCto3x4WErS8eSYWnBqeNAtK1qvA3eR38Ab6tL18Zt",
  "key8": "5rzVf6YXNyYJtfBUtFV3ffCSjF3uDRr88sQFEwdbZU6dSdwKDqk8gp6o6pRzFedKkceqDT8kPYvjme4yhoPtGRZ1",
  "key9": "3XfFCtVnYfLresTGh9boACNFDm5rGRkNXbTRzdHMb9f97oKYer5Q5jWmMKv35fVFNbu5kt4R5miQa93rqUfvbLtc",
  "key10": "Pn2qhBFqTHaKuKs5uLxA4gtpvnaSoqx8Gmetmy4dgJsLAi4ohwH8jCV4cjVWm52xZG2Yhzdh1sqqTVcYjsZW4u1",
  "key11": "CHim1K4jr5ptMkpy2E7VPgBr5eTnsGjJ94pDuHtz5JiGM5T1fBYX27vxhwMkWxmJNs5nDYSwQH1TW5GyjRPupqt",
  "key12": "Q2ZbMkMJj9uxyTQS4u2CQ5eUZ84yeGRb9QuS2q7LD42PqxzKJZVMC9RjLqNQnPvRg5nVr8hGaaaM7GP5NHXaDG2",
  "key13": "Qw4yiXf4t6R8wCHRyh4fdnkXboyYKR4KpmAcKcFR5Ci2K4xpD5H6emBcgUVHGPvEzgzJ8rVodVBQpDBswNhTZVJ",
  "key14": "2pynYG4w5AjmwvWur5zZjTeRczwEkFrw5hKtFvFUbfjEJhdcJgg9qN8X2stdrFfHEf8zgnx1sgp7Fvar4j5aZLEw",
  "key15": "27fHrNgRzoCyWkSa9H7ytPwxxrNUXxbkrZagzefPFmHLzMxsF4xiu1qUJQVntrH13uBLKvxWqzQCmuJMM5Atp7S7",
  "key16": "Me3WjKWXCALdgVMwv1CDjhDawFN8RgXLZJ5CL1NtLEb7vtwT9uLhJSMnev5TPFzBQJhcDsusgeBtuTYVGk5Je9s",
  "key17": "4BeSTKkohhqkLxW6Xt44pe5dny8BJiZD3EiGGwHHywG2HcFPfuqQov32s8SprPvipu8Tf5nu8AyykPVkfE4LnksH",
  "key18": "2vbopig6TRmmwQwhzXc8RVYc8hU5xNyti1gSqZs3fxgwjAXMXtxuXadv98oFJkppxZND9dXgixBWHHreaEvj9xHY",
  "key19": "47HkS3isShT8UPadaa9guzaoaepufiBkkZBk1YL1JwhoYYxDHvTLGLB7GboMYzF8dfC9ejoWJH4BvhrMKQkHQ3BT",
  "key20": "wiJ9nNHQXmHXUx4EYm8hPtmY127z5AsPSbdo1khUW7a9gWXNJR2HZf8xVY98MBx5gATEDeTNuqH8KsnGR2j4uMn",
  "key21": "2xk9c1bKbPspp2gXRP2j2KHGuc2X6enMdQndYbJdU6ZwMkhiyp6KiAza3aTMSBS7Tbcwe4Bt3Ajng3yQ2rsRBTdJ",
  "key22": "4f23xoAJxFYWLisL1D8JfUVxXHH83ido36AX2g9VZGG1S11FAehrnLcDBszkJFNFMVzBYzxG3UHD1LuM7kXYjJgF",
  "key23": "2bE9Zms4LMJckmamHuQaynqqQuwh6XGKEky6h8jaKddTnnubYxF4zfxTPkkd4FDhyuSD42y9fTuFbTYGuvZbKw2f",
  "key24": "jx8Wmy95Ym5aMB6uxcG6xrmsA1xRxT2g59QRBLDhhrvkQLr6ZV7yuFFHoXgVBTY9fWaVYsapgiHRQMeyMs9pjyV",
  "key25": "251dzQ3oUQVvihoCtFJ6MjskDcrtnUmHHb7mPx4neaFDJLtTThL1W7Exo3ed6qtPtDMxxqWDQjyaRhLDQGExvoGp",
  "key26": "45SHzNq1umxgcBXmXGhP7ZELpvxZ6CXM9L5SaD5Du5ez7rhM1WAEDmvBApF4AEx9ProGnYpNLBGCFoBf7uNy4Hjo",
  "key27": "58E6kAKgrMi6QSx6PvsCSNnqxij5ZDAg4cwBhYsb87zR5JQRHRGdnvjjEcqPrCJ4kRAXmJqk7s4jkEjs6iBggvD9",
  "key28": "4AK73YfbQ2zUa5WCkt2BaqzinUBy4qbiAPq79Mowph6PW7LcXzQAsjCmke4GXp5xEyLGy5kbTkNAEi4B3tdiWYaB",
  "key29": "264t6NJupvNyyU1fBQAvx9gmMAPVcZfBnHzrKPHL8NzEopqNbfHyZZW8q99AV2jcRq2V68oHZLfMFcg6M4RiXTGf",
  "key30": "58EQWdm28zW6w8GFqshZkXqSz8q2hWcBsW3gwWrmoMKJPsdXTe8UssJvdLWYqXsAFcQeTeQNRrM9zWu6DcQiYgps",
  "key31": "37mq85oQMtnfb6dpjvwYZb77cPsxKyiHa4bgwvR265CfQjfaxwi6kzDJoJHCceC4m4tVsqsVfVQ6W3T7z5YRKMMM",
  "key32": "2y3maRtdeo2NMVuf79kGsFZ1u5tpX6gdXLwZmyR29VtfdUVm3oc8VhnmYs2jHfYq4a7SJGs6mYkuVWDJAR7H7Z3C",
  "key33": "8jbugeirpoUQknJpTNeUjfXhMYFVax7jogjStDLHVxyR9aLefXTsjDQpQj2hVfQQEveAdw7xm4rhp6Vac4ogHc3",
  "key34": "JqAR4RKCXGuJ7DAXU9Wh2Gt52R7CrSFkK6kCUEQ3aBZMzLeyx1En7obbdbovHQ9oP9P9pzYaAboHX8CDZFzS3QX",
  "key35": "5wULZg8dDFxjo6Lm4nwm3Kso1mPxNmiCZJCJKn8ztp5AGwf5oB9tYdupsZ8vbkKaU6xtwCovueq8SS9bQsrj791T"
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
