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
    "5SZ7vDLjbjRp6Cikn7Ysp66uSkqGTKAgMWvv7bV2HUJeyjVqsGvuU8tUyzZFvaXCC2hWLdqTNibJrhRmUeYN3wYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57bdwt379CP8S1BnvjXZBiiUF3kQgZfABGvFkz4YULTKzW72ySeuqBC56o5WDd6a4cPwJYBeq4AG8Viy6KfJyTaB",
  "key1": "2T3Ddhxh3VH2GhBFLBmKXftBdBjBQ3hFzjqm3nntAAEaZ5Bb2TX96evMgA7eykFpD2aeaLxPC1b5STGiS2BMMp4V",
  "key2": "39dT6oQQrX6vyMGgToX5cwiFzQdT2rAH4bd5Z2cka4UBSko9wUQVNjSytwwBrmyDWvVxNTvGstW3dxE1RoCJBy7B",
  "key3": "2LrovrRkDFCdhH8XRMhtVV4PridyfFKYJesnjXRrWo1pa8RNx8K9ZoBwoMZ4GpK9Hha6rEtfwXSBrcaWM5hAB1FR",
  "key4": "294DmZb9cgRsmSNMrWTYjmV7fdUM8UYuFtMv2uh6QHi3jXdBPtm1zG6YBRrJy81aCjhEnXY3MdDCdgxLrqSeRgnd",
  "key5": "33crMMzny1iUVdVqFgfAbRvRmzcSURviifLL8jAv2cr2v9kBGvNb6BvEUN19gT3HEQS13L9vTcM7VZrfszDZbNJL",
  "key6": "x4yoN1z4TL5SCmYEbwoCpFRGMrMwXPzGABaot93D7vsERJPm8UZRHjRQCzcLBvfdLpRZZVCxvTKG7sHVQbQ3Rqd",
  "key7": "2iJEQnvKYGviHGRCABR6r35m1pJ6mRgSaDJks2vx8HowbFVikPh3eEkZSKiX1yugandnu8zAjjaC87gX1fsA1dsA",
  "key8": "259nnFgEiTXjcSSzErZm4UVVaH8y8GY9R416KgpgskX3sxJirnvesbJckk1VX55JD2qn2pnGiU4YnGBnMaoAFMyF",
  "key9": "uB8YuhAYQDbgwS5JgSroXgZHiYZCpZ62VxdiPAqMY11bqnkQrRooiixvwTRAxsH2BkVNKUCfDV3FLhsowMZKccb",
  "key10": "29NdYkkm84Cosv1rhLaYRTuwvM5XeEqEjtXH4Q2hcaSgBi6K9N7DYGydeAxWztybzRNgM7dZdua5QtX2S5qn4gRE",
  "key11": "3BWzcBw4L22EPeASPWTzdZLdKhCqDjLSjbaQbh9ZzsfY6MNXgzpVoTTPyyTiWsacQW5Myngyn5EkTaiYC2CWmmQw",
  "key12": "5KTLVt5pTP8RLfyk3XsbojVeR4Mf3CkyM9H6SK8WHim2EFRs3tWvh1DEjdLKM1fqmebtSBidHyn1GEqjdetRVCBy",
  "key13": "2eu62v9Hq8Fpgx3ru3iYT5haH1gky2AxxhKZsDtGtDpBofGAgvMevE5JqBgvMbpTXgk3VxNkbPHxPdT5mqTSxFUb",
  "key14": "wMU2zEJkTxgLZh64PGeCN8eVazGbeej4tDBZKXmBBhNZwwz4LDY83R1o7rraLpfARQgDcffCf5nLQd1wEq6zfp4",
  "key15": "4sLkffryyK3kEds2rYnPZMgjRJGJ4TSYLWbdJQnu7hd7cUCXtKsj5NEzEKxgCDb1RiGuZDbdtDvvGU6sPUr7zMT5",
  "key16": "vv4Ct15LuXSA1gjsAqXgkYYSXXKXjtTskd8whp9S6fqLJCuoGxjUPxZmUU5RghyZaL4rKmZvCNC4gaYRAAmUBTg",
  "key17": "2HzL5duGjxvLdZqMbvQeYACvaRTqvd4nDaKowKLxNAJErcNHvr9aFErEdE2nkGSGV2VxHqLuByNkxdC9E1UVsQiq",
  "key18": "4gc4rXYgCLjYUptgSoLfm4oonmRKHBimCHqXwYGUK4qfm2uokjV3w1mjv7ef1R46kJNcg4S8fpph2yxuYhfVgh2w",
  "key19": "4o5mpw5Dup6HzkNqrc2A2YNBXCg7iz2i3U5MBQLmpouyzPXu7NwowiBwvKMzegKSiMJWH8yuzt8LsbtYdTq9RprH",
  "key20": "3E3AcGUU6qLgoREZFkG2TytLNTNTN1Gfyasnpyf4Qa5NjcAGJU7JnEz5XPwK8kVY1WD2zL1GDdR9cBfLQcduZCG8",
  "key21": "32TjKn6v6VQohHeGZ1EyjnJZqaebM9tuGqL69p32knnHTxprVop1BRELthrkA1s2LHiocEHZsX9Am6z1gkaVZCCT",
  "key22": "4EYswLNJLkKXDpFoM9WH55FwqryuNa4x6haYVeqmRSU6UimhsDXhvMb2Kq4QzNsxsYtC2abaj9qmHXDoSp8qvLwo",
  "key23": "41BsWviaJT631uBgxWNKcYxjtqTBLmKwLtWBQ8zmQp7p3fDcrS2oDe4fbppN6cX73LsFmqqCANinFF7YaVoHYyow",
  "key24": "4Xk578SVubiguQDVxdE2JFQNT931y2XWPo5FKaB6rAbYviGba2xz4eusjGYfx2QVt17Bpea4Yp2HeXRKFt8hpXaQ"
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
