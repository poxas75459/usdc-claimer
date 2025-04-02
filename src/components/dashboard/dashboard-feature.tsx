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
    "4XkBT8xiv2dduKbVnrz9drGwBSt1vtoRsAH4g3hFDQw1aQ8HoQpE5Tcy48YdFSSRk4LVMRXSvZdtpfJMobkgJS7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFxiyX7fGSpxrSZoEqeDek13y5uYnstNtRKke4Nb3MSxfuqcaERzcRk8UCxDBB3A6WAC9MZwMzJBqeZUBS2T4Q5",
  "key1": "4T58aQjqzevJ1DJDZj46vyT9xZ6isE2h8e9eJqQFoqqGYBpE37sk7Moop5eYuJmdvJJytAZbmvBXvLRCm2ZbF3B6",
  "key2": "5oEQhCAudBFn8xq3GmC7fXBirWcwVV2tozicLpRoqbwVUy4HracCc6D3DQobpYBq2dM6iJfSUZ9xauX986ZZAgBp",
  "key3": "27KkrUC9wbxdV4DpXTDrj4v3CXMyNCgKwtCg21dW6fvPMTb6fa7BEPsRS7HL4v7bhXJqZAbf2JhZVJJTJAQWtZFV",
  "key4": "3gCqzqhxxC92H19qA7xg8HZGnwLN81Mqh9RT9MjppNxy8J21CN7T18h4hgsEH2tVsv9nskheT2Qv2fnXGyBMkYrY",
  "key5": "GyRq784ycVFkbAXJPdbg8dizk4T2zsnGTT8LNcSNDCWJw45jp1Xk8g4bejm374ETTJNxCLxCJ4Ey75DQh1gws33",
  "key6": "59AWZTeCgry6Zr9vvfwifXVdVLbenEGdNxveWKhYQqEjgjfKo49eGcKyJFBSe2MC8CrDT9Z8XCAjiAr4EdhU6Mpo",
  "key7": "3sxuq8Km1Wj88q6q2AZzm9E5aBJxpBqvwVqavvWe4pMDKXn26HDMBDFKBv8HwqfxPcJGsSofLTYG6U8mhUewmdKL",
  "key8": "4uf825z5St8q7DRhUt71HwHfTfWmmcPkN8dnLtHzbNW3wxpc2icgVmYmd6njy1ayjsWPZmCpBnMdHRzskhyFiXP",
  "key9": "3LfM3T9wnNPnHFjrPT7ph1stDbqNys1tfvHiFrh6B1Bvj6CcAvCbXGMX8wCScJiWJngBXF3xTqZT6NApk2aetipw",
  "key10": "5ivWS1TTZ82kJcncm3ZCz1g2rkQa24fJdoAhoPuDnEtHRN8YQmBuwoPRmR6D2LcLjztQN9y8qbKk2hJZCWufWsZc",
  "key11": "yatZqA3n89mTun99rP3bNvuC3z3EHyF3Dr3go8nN9C3VsoBcH3qgLnaaCbSbgomDzXRqDzPkhf66GWRP4WPXw1d",
  "key12": "2xSngd4EUWnjoWtHf7PeZ6HMGfjWiReRbkdBdpBYpCYUKBx9P3NyXRfEhE3BjqaoBbBQSZTefbDzJeumxfJ6Ewub",
  "key13": "9yBvgy51G8FAsz5BruuAqrU5iANJ42zTgS5JrH7axmBNhGPktvjpBRZTASze9wPVDg6dbwzHy1hvJnr1WfSfkEi",
  "key14": "4L9nzVkoZMhJqhm5vwZWoAehkh4W5hZch4hLCdrMafWJ6wrsfbqv2WUnKSX4rRhA8Ub4DohfB2TQwJG5UbDc28Ya",
  "key15": "4QTLs8y4S3SmimEqr1TD3JUEjq5rLLndyFs7cnyWqrjHCfMgeBCcVuPs8bF7bjBwk74dNexA5oysNeSeESVVAtqT",
  "key16": "5Egdga4F4CFGCr16CF2Ve7kpixSGuoEGWBbcM81zYme1jkyk1VPMjVkGZSCpTqa2BKL2n6x6vuvWjPcC3YjsVFhU",
  "key17": "5Rq6mtnqtqXZ1d3f9W3yuyWGjvYb1zG44NgFU7sKVK4thmBDV3StTeaoDjCHT54fXwnCMaCVkWUsim4raZpXoKFG",
  "key18": "2uaVbAGuTMRquM9YJ2h1WuPfuikBhBcniZV4MzqKGdZno4yiTXiW8GxWAULUwALMr7yFmJ9Q8t3SaS3opvFKNgRP",
  "key19": "42jkxFEhCW9DLHZpEVUBXA3SCf2iDKmT9ZergkWkvwevxQMVpJsj6B7bjyMs3ACMHjsVjRFJ98M8UDjChikBjYzY",
  "key20": "3dg8YL9TTFkJF6M58fMt6Uo3mgXwA6Evv5TbS3gxS5SjmbCAYUe5E9X2TVnC442n9bqeqCQeV9e6uPGkMUZQPSSU",
  "key21": "uoo9PNjozmTDZrpLwmPRcMjJmkzUQWCHohM3sRXvH56mEJB7VA4Gp5EHjz1uaD3F9LvQRce3f7SFiB5LbauSipG",
  "key22": "61vSfwGrRYE1Tm5n6z51Zk38tYCnZ6eJfxemqi42RgcCU5ctSjh6jPKnWAxX5gfyyhRLBe1qoQFvta5WVCTMbP8x",
  "key23": "5euuw5g7UJCJKKrS5N8Auw9iZdNb3GmLJ8RFTWZrXoZ7XnDzuwBHB65FfhR6msSTMV1aE7cYkeETzrY4JGtwX3nh",
  "key24": "2Akwmo5sSppHkpSd8HC84Ue6FhDD6T5hh3nsf9dueddZWBbHAQ5vDuH7U5y89rGhkhCYm31vjcT3WSAHWHuyCNiR",
  "key25": "4CC4CvpsQa8CwPUbqk9MbjwqghxwMRgY2Dx9w879JHxChkQWUmmNUjXqbM1cutko6nxzatWjvdd85Fxx2ZSuahZn",
  "key26": "2gVHwMsnSxeiGpPVAtsqq9C4DnYQMu9Mf6MmY2roh6kaDc8GFbyWzTSeWpiQmXKJFa5dTvuaRhSYoBKh9kHoMJUc",
  "key27": "2QQnFFG1XD4ycY5ad4vC9FYMWT2jejbQ1Th9ZokUQ1JaAysr91xw9kv1u7Kcjp24Cz3JiE9pEjym3abYx2hcQ3ad",
  "key28": "3qaL68hWjVC983tUFvF4KGwwAxtN7staENUFotnujhTfypydKqTN1sLSaWJVNycQbgPveDrYgBHRDvCz3JEejsYF",
  "key29": "3mj9cAyBavvMrat2ThhH6Q9qH6x5jSEeT8VsGW8LmTKpHYJhgekc18o4fYNbJkjSowCPZoxds6F5Lpb6xkZJ3pEG",
  "key30": "65y9NN8SbbynZkBMupntiEv1C5CSeJSLS6ByfGUVFUqsM6jxVt8VzdRSzv9myC1ChKBZY8FfigFPyYJPVLtjKKUu",
  "key31": "28kZQgB4MMdeoMgdxV3z2Zt9TkuwstBAKTzkF4KB5TfFc4AFV5AA78KftJ28YNKJNFKLJMux1EYgnyTe5wrTuhPJ",
  "key32": "5NdQeRRFpPx1C9xAy5RmUKZHxaBf6xH1X9QPpuGrckNNc4BXoH8UEqytCRjoy85rSgK74aGmg8RCG3E4ztVXjp6c",
  "key33": "4Aketku4g6eX8fGfqU7w6fwGQ9hJdmSZ4g7E2Cg1zM1GkfSAgJDB3iGnVMUCcP62A4Miq1nqNwcGgVUCQxJ9JULP",
  "key34": "66SCUFfc4C2tiKDfDWUgxLVdWATDdFaQeVbKgNYBV8PbntVgoGyUd99cLX8aFMatchdThVEVHKs5GLLkofyrKCYQ",
  "key35": "A1DRuvvMp5WPB1sfXuN1pzPRDZRBUT3KFD9xVmr7jHpN68k1LCwCS7du4xrhWhufSv5zH42dk68RooFmuPMj1Ai",
  "key36": "4U92idU1STfJ4nXApS8PR412ca9fzU8JFzaZztBvzBkVFUPxd6B6b41uKddpMLXvUNzXi9gizTYJoPDndkDUR7K",
  "key37": "3k88UGdbwrFzTgMyivWYTCSDjSsVmnGUuEDkeFE8cHxajRoQg2PV6Hxrj9TFoVPL81LR8PL4L8GKU89tPKA4vFTf",
  "key38": "k3cruc5SHoxR5d2uxWa7VAZm7jS8M7BmzBTrEjUdqxqWyNLrCz21Xd9UTu8dqrP4HLNfC1gLKMGNGLppG6HYdzu"
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
