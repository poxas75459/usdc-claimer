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
    "4vTQ5xXvxAKFf92DMK3pBqccZSyzZSy2qYM9dnL2QcQ47k6V4ZzUHvjDzcYREuHocWtdgHUyuJZjQPfRMJJEi1sm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yey8LmDGyhtLS97sxpwvrh4ME8U7g8yGkb4euJG8HznpU2avKKzDXj5RfZWvAAH2AbVwTZyBEGy3h8achx5B5yj",
  "key1": "4AsSV27kTFcBi3UoUirn2F4Ha5VDCHX3WjxsMZWPgGYpbmjfk1cTxnG5qKFsgKY4ENxRbNXzeEbNaMzNYq7LjCT8",
  "key2": "3UpvCp1nn1eUtFKDbapYUJSVdF5ZCN7EFqsk18FeX9m62xzPZzCwfgDAPScGTQLjdJnP9W5WyGvF7rSmaDM4iur8",
  "key3": "rCjUNmpSMDz1KDLVFqdFr5SxjeaE7dKwwVf4P9ue64FoUDaTSAxWby1iX1SnRgr76ShJQC3sKQy3JDtWS1cczW2",
  "key4": "2yN6hcUnyEegFJEXthFeRUSPHKVv521rSRuG5YCcGNVcVRMfDGzis6QkD7XnEZH4hbmGAN2u2iwGriswrfZ4CvZm",
  "key5": "3Jz4nN9TNzGPvU1RutuDRA7eRr6TCCvKPg3K7iQDQFu8X3TfAvapL9t7jqUEbh1VH2W4tarXC4MzdaJteXayAdKn",
  "key6": "3UfeX66nVC9MhnNG8D9ryRavZ2rAVEecqbK3uq85nenRv8jpJJs6ZQJbdAzkecv9gkf4JmpJ1Pqbze6E2wkGNQzR",
  "key7": "Xr86u74GejEccYouy8Lz6a3pmuGE2UBoqy6gDuQpSF16pV5A1FPuhWfPwRPgUU5XvLQYo75QKhgow8tMFadYodP",
  "key8": "2AbDCjy1s9hyHojS22Nx4LwZbF26YPLzxcxaJL9BxnZWAoGJQ2itRGSg66MQgTDRjBbLAADDwevnDp68F4CF9Wao",
  "key9": "525CxxASm7pPwcFmqboKL4NyEPqNb2tsKCdSwRerWxhqWqzTywc5FW2TRGmDxLoCqQESS4WRqJDrs8obBfNQcAHt",
  "key10": "3NQcVP3RyinK3jRJKzgxgW8yhnGbpf6j7Fj3JWP5i6JaVXW7fKswRixKrVjtdKqTi3WYzjg8adngHSxX192jFdzm",
  "key11": "5kkQNnv4Ys8bb6s3aHk5BgTBLwUTCX2mV77Ld6Yj615DP1osiy18mTneJTfdGc7cRMA1TyK5WSTepajep8qAHQxx",
  "key12": "2mcLPrxsv7KsDUjacw8Muq6NqseXATt7zEVPMSzz6yLHUThJWpVu3apy645tSpFnd5fMdskDAcp9QDF9JRmVzhPG",
  "key13": "3J4irLQWKUE8uaURrqqZrLw5cBHPNJcXdQbQyFAWtWnvdVipX7BxsgCNydYt1reiTn9LsKqtXakV2ZLy8zhdLp3r",
  "key14": "uEjrnT6iaaKNnknmAiXsPZpkZH3XXd2beZQpgBnFYyFwKvpjkprvyJ9f6bZraNc8khvjUx3kJgE72twdNETiGUj",
  "key15": "3b3Fu4kWhwvTrNabVLMUSMGLqPgXb4QKCbYxWUFimQddTKbC6YfNFfaDp8VhzRRqhve6DEpjqR5uCpgBh14Nx1oJ",
  "key16": "64Rq8zxFGi9L6sG69TMXivfW7LARxocdjTvPMX36JbSqt18nGX1q2dXSW5vd2QQtDpQC349h2yHtizecZfqQ6RFT",
  "key17": "5vrhdSzFw4okcqJFWR7LLXY3PXZRYSryjC1CU2NKKE14K4aoK1kBaRf6vvnAMKbF5sFMVZBEdVfoedUavvsaU6hU",
  "key18": "35mSKxmAiq3KnnPSecfCJKncPJcfuNQbCPABKmcmsiQPf9fSGHnzBYEJaraB12xkNHm4MMsxkMidCQ7NmduzoNKB",
  "key19": "3QpQRtJGcTEqEYeBxA3DKtt97mumA4TRRVWQKi6ePbBEqvQNrPkyP2hThrtj1Lh6WS7zdELut9U2vJYBWC3CSTvV",
  "key20": "4Y5jt1ZQvZgmCZL8gisbaeqTEpYSAX1v2vEhKd7Ah1YcprZTURCWjTnZbPxsrpzLVWmuo2KaebYgTnxycjjv1atc",
  "key21": "CyGiKrK69zBzuLDRLJY9VbmtAAM5UWDfSBmJevVxh52hZWRiuggYZ2dqsTY4PhMugjWnEE9DW87cLMixT6Efhig",
  "key22": "5iQu4TtiGFboe6952H8ubNyEYkHhp7KjHoJqekr6XpS61U24dkEGcYfmYkbTujgF2BhG2X93jVS5PHMJcqxEsX2i",
  "key23": "31s2kJF4dQ7PYDqHKM3Eez8WoRDHe2tBJdAD6hw5bQ177oLbeS6bhHjZs1xT9Qnx8xXJTrqQRDbQF1WUqFWSBor6",
  "key24": "4oGcRhRxiAUtLKRaDUVWbLCGmRKk13Bu5CyEzfw6Aer1yJj3ucLEaBfsM9WVA2JWa94XUgUWg7LVZCbZyXoAM8eg",
  "key25": "4oYzdBER4NKZzWTq8ERJBEn2PbErDh61DfuARAzGa2vobpEW9fL9HcZofTVAHfyRKrVHMrtFY51EFUnE1XsHC3rf",
  "key26": "21V7gNT88oQnHzL7QNrfJLCWTCyA8KUuEYwAzDmR2bTFx9KpCnX8GZuvtMVayECjLPEAv8QNxmR1rADboKzHmfZK",
  "key27": "3u3XGZz15gn5BWBHocSeJCp5qUMPNwom6G8CDjzoSso7aGMidafXFxvL6vm8zD9vdARLwbxZWhwxWWrTeRX623os",
  "key28": "3zhAACi83H6oYy1h3VzmD4jg2ryVWtojwPR54mekVXrsq7LyamkycLzzjSzd6x1H6vPySCZRKpg7x7f3KH2nSzHi",
  "key29": "3LFcvHD7mo38E3AWJGYGvgtSKRAN7hs51TbYsP8UXQrkwV28SZGmJghABjhT2H6RU5SFzhgCuTGX7NSa4rbNnJ3t",
  "key30": "3xrvKgJzXWRpzdwTtzYc9LcvQdh8UEF7HqC17Vwfnah68jj3o7aZLpF3P45QNybeEs5cfkm78b5bPcuvfFvZQh11",
  "key31": "s74fnnJA2q6ro6TZrpdJB1v7a6FK5Gk6QrWmVaSHQd8Yr6z5eyBunVPRbakJYGFbGmFwAipYxq9zQGhqg7HFLfo",
  "key32": "4ouuBETCX91rppCi9rcfq49oFqN5Q92bMMb1JJcLkf9XReuuW8L8daZtWG3q7SFoNCVwkdZvSXUbYswxbbhRu4uF",
  "key33": "5cew8bkVgp737W4pzKyoxswd75jRfq7MFFPWisUbpKMCRDCApWkR8byDsusLQYGLxZHDhgpdy32A1JXL8uuZfuTF",
  "key34": "4aAV34QgnRENGeHJV5gsqxtSHVEjPJ8D9VnLn5HUbKTYHjLvxZAwziRTNDhLdg14cGkJtxmNE545Zi623BVeiy9i",
  "key35": "4f5d8QziE5Zt1uLbevcXKu3CybR16TjqbNAJ7vYeyDwHYjPZce2FihwFuGEF8QNaSm3GVfq2ukehtxs7SRoFYnZz",
  "key36": "YCmrVi7fkvYYU9awhgs8Fre6FoAqV4bSizDyw5UH9WsKmUE3fEXsDQSsMYqowEmW3G3AyZT7bECAk8bYE3SP6G8",
  "key37": "2FJ2YbPwgGWC97S8P1WHjc7CUm9TuYNBoHc6HTaoh1K6AbpGpiGtsQCFtf3SqNzuHJ3QaSrSR7VZNyPJNbHD7Xtc"
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
