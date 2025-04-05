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
    "4TNmVsm51QLbFxYmVEUL8j3W8M5Kj3mNT7DPnUU9XmEBmgAUEYRXkgFBAD9zCA5Mw8Q7PntF1esFobtzCeCyusTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F4pf2VABmMViKbqSdN1wEJ694MB5RPL9kJKZF7pAspS5FTsV8bDCYjSMq4w8MTvoVPa6EJuuNYnDpTSFMJtQNyD",
  "key1": "5pekMdabTZ8Ym8hvruQcaVK3YWHw3i6BDHCSgDwaguAAGGd9vx3mDv7F9nV2JYnYxkjjxkF9j6pihC37JtCUFhYN",
  "key2": "4yrx4docAXu4FXhCwKx6kYjGifZtS16nG4XPLPU3qWp8SPPWkfSmwqjE3g895HHvLY2ovZHNTG9VVkBpTXFykatb",
  "key3": "2NuLVVUYuvfow7JBCsgCaYgeTTsS9nckY6mqAXciN3usrivENozXYXDTBeMXskpMxGKpPWd3zfTyKxqPR3LJ74c",
  "key4": "4vfMcCos4QaBGnTweUDQjPraiCtgG94Bbu8BN9WddGcjNwCDmvkxnt6x8hWKaS4Lr41xKkYGQ9BaVUufd9uutLDD",
  "key5": "4KmEDgv1UwComdMuRUJnt2KGraw6GL8hg7X6qnbtyDRLBc2r4wA7a3wXy9gssRh5tRiDuwopC44XquY8EaK88UyB",
  "key6": "2RgKhTwVVPTqgGKMa1JHcWZ7pRu5nMexndXHGXh7dYpJ5AExR9kvFeMFDkt9eyBg3zFzRNhvSEf4uU9f2eAG9wyf",
  "key7": "4j7vRsffocwVx1BzVNyedXWcXMz9cQxKsLPFebagYmtV5EJcHHe16VezHft2B4X76xmPbZi9U9n3mTXaQFgmQBgu",
  "key8": "2LotKrhx9qKiw5qANzdn4hHYDVfrhPWLE3qRPW8toZcrgXY4BjS4dNTUgPDZETyYK9kZsH4Lo5pNF8pZmhox2mEk",
  "key9": "4bRC7qX2eBdc333vEMjK8bL2Rp3eDKcpr46mJvr2S1N4J7ravE38cPygng5CsUSf8U2XPU4nXiDVcqtSf2MnpvFw",
  "key10": "5rocs5AM1nK1cDPHwdhEtsTKGJedQMUye6fAaXLsw5C4wTvEhsjYsioPh8BBVqBtShJjJAwfFbLCRRswu4mu3aQM",
  "key11": "77tB1EXQd6E3z9Kk2qD3cFPtV6ueeT3FGqwCVE7oDj7DZVy7z2rP1kxWwSJiDgXfmKyQ5yZBjdTJrC2dAZqq71R",
  "key12": "4GYNu9G1uoApK21xbRjWhWhAhWnrzy41FTJ5EAq6QgytiMuzsbwmWkaCXfMuEm8f4DGx5iBshdx2zBKhPZaTB3Wt",
  "key13": "4G56btHyXUVXAFoDK9jpPsbiCYJaTRSUpz9Qsb2S9zDLwhMUkfwxz4BWG9REYC7fAWi6sRasPEZUN4K9ZGrtLAb4",
  "key14": "5DQJqsiN3Eq2CLnirYfhVUB7YsyH6BNyZuwmg2hq2vfzJhbwTbG1Nt8zKnCsKCCRspPx4K1JA5eEcR5g6nXLtTrn",
  "key15": "K78FBpWFb2K3GWbvNzq3BjL9mpYZqwecybHmNRSWYpyMKxE9K4khaPd3ThU3ch6G1athr2X5jaeyWNMG7Pwxx55",
  "key16": "47RafcFLd43cGzYZFLgVwL4AKiBcepk5bJzxuusYRb3Dmb1SLchDFuF8yAosigMj7fdP4XgfkguWB1EpTdBTo73A",
  "key17": "2ShCvecnLmVJPfdA5TVAp3aMMdspLZZMHfkGgFSoaGtsmwhkcF3etBxPBobdPh1BDz3eLTcn5i8vV4CXCWPHpPXM",
  "key18": "5ZopZYWNypdudd2joKuXBWTs7mygApxaJEMM5hRgH9dWhNDiTPXFRfQj9dqERcrvEEKwCyrADZ8RNudaRoWSUWSu",
  "key19": "G1sSfPKYuYSvKHACiXPHKRENjjnHvkycwUj9hnFJZAnnR9FHnTP785Dv5vXyLBZ84yLCj9g8fZBSp8Rk1EJ8ERY",
  "key20": "mmWc7r4uWFDg21aLU2w3EDgVPLHQjjFMaZSVnvc4zPzQZbGNmqv2XNH5vsRiJiV5u4ds85EdoQYyHjppiMRaNcU",
  "key21": "2rHy3J9FEXFMzwCTcyqwYH6odRGjdjDL3jUUB6sXN4xXhvW3ZTWmZX14qMtCGxHwxtawNKX12o7HFrRexQTJ1UX6",
  "key22": "LkQefWkahLYgmzWpSCWucGuSmfY65SrA93t5bvHpNJnw38HEod5kyeeAcFh1fe9uEUiijLfTmF5RxGKijAXQxtA",
  "key23": "5XZVewUMWwWMH64EY2W74b7VduSDitufGGchHuU1gy8JGs3tTWhW1XxpspvfKLRnNAwCsFBRkQty3Z2f6mQkpvYV",
  "key24": "4GjQa5m6rsFzqSfWQAUZt3591imtf2gpwoE7wRYPitzCcgx481Y1gQikd6BJPwVyL5jpa8uFgdFor43DJcjvnubL",
  "key25": "54cn5NV1XhVJBAEekgbjUmRPporGQhqRxwwwVLvLagRLiUbS4z36nnjvZb3bkU2ii2iJbmKhARUvo7nNByo73fQD",
  "key26": "3LD7ZbTitZeRW34JEJzQ2Hqwjt8Rfky7PKxU6jjhyLhmGtppZbtLcaUaiAPg8zRsq94Vop62vJNhunEfLasUhTeL",
  "key27": "5yrEiSNSGLQ84Nv7ViAC7vNKaxE5EqbZCPZUREauCxqBy1BGL3oyySjtT3Fok3TyYQHbteJfFjg7FktwGhyNvim8",
  "key28": "54j2DCtAFozXjMDUV6Z2vav5rKhucqgm32q98wCMbY4JxfArCHTw3ErvHbKGLNjeqTvrnfqsrUNY8kiD5Cqcv9ze",
  "key29": "2DRUqUBrxqjhcsE6h2ba8HtKmDwHGWqkXvxk5xt9H7X7oDna9WH6SR3hAtgQh3JQk6QVoh46ik7B9LFKDNxpKuL9",
  "key30": "4kYJ84QeUSWjwkwZTz4Ji6W8BaXB2GKhkYfMniTSPHmDpeXCJnJVEs876CfKyh3W8vFNpczAA8MdDUME6x6y6tW3",
  "key31": "3yFK9pNKDPrKv3rxkdPA7y37kgpEmRjZ1vYxjXjQtSQozMMAkKuzkRypVEoNJPaE4hFMyzVpqTj3HHtHpiAniE2X"
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
