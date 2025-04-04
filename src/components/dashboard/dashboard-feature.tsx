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
    "51Af4wCMANjPMvUJosMni1rQmr8Hx7j4TQmMLbpP1iw3ZZcH9xXoT5t4sWSLHBhKfFne13CmcW1D8oARBXH2o6u9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4upbzszDXjbK4rbbEp2vpMq5r2swGg6J8u588fjMALmnG9xxS1cuaegY2gvh3JF3XEtbmLe4EhHxAH8g4N5CaSdH",
  "key1": "3a8dBKriaXLKpBiBaPtHA2NXiSd8yA4v3x4k7JaT4u9k9rUQ4gM3Hxtan4pDZXUgEFmV4WkgGTmuG2GVEHrusJfB",
  "key2": "2c91aEuHX3CKwnB8AWGA8Lzbc5ZZngDQuy7pmn8mz3dXLozxM3mPbtTmuK2USvyhKKW6sCTwRfVhZuS6aAN3Frph",
  "key3": "2TGFokRDSECvMgetseMMSKyJ4fMvKakHkaVfYR57ZztL9hjJUsLNHshzuk4wT2YXpHWQf9sA2nmafRPUZpteEL21",
  "key4": "2iqoiBDpbPj4UQwzHQzYpz6YuXVdphkJrQ3V54uYtxj2fTi2JsWjjtB51HT9gkh3HVo5CR7XdagM3rZfKuFzhraq",
  "key5": "3qhsneDxH21CD2imeC62BzgCG59HhcsbrN6uACk3dZMD9yu63ATAqknSPYokoU9GXbhUYFEoBLEWNT6N9QheCWEY",
  "key6": "493p6KtPjkycDdKULAZyRVspyTNhHukpZibS9CP9KZ8qYs2TJr53SaoK34bmfiCnaxdCfqFFmWFLhabYYY4tVvrh",
  "key7": "7RFmGJT1CRW4piqL3LSCBmQyvZcUcXVXtoygByAm9cHbhYQuV997KcSkK1wecu1SHKNx8LUTWk8cJnG1rck5z8D",
  "key8": "hEkf5NdDoF2dB4xR1EHTmCpS73LShjxRHqrbyGdLAPjc5gKAYcJ7XDMqGH9GKgAoc46vcaiBZyPAsjwTiyqkWfU",
  "key9": "5byJErUaRJQnS6MY9EX2XMfadKVNwo4GWC7NEW314PKv1d6jttW72uhdHLZYqDcveUMHmpB54XN5B2TBWoWrKyxt",
  "key10": "5P8s6azRo47WZrT5mTUENnvrk9tcBe19FodMLSeRBaqsGCioUvA4pjnuUekyeuRwCGToaK7hmFhBZeia5LSNi7vB",
  "key11": "f2pTX2fLYdFhhu8wqSm5E6S6VzWP1h9AoSLehjR6y5y7SH5KfBg8W4xae8BV1jZDo2BN1uN8xVnshmjPJmhgXHL",
  "key12": "4KbnTnBPFwcFXHo6LcXm7uNjpP4wL1fRyoMVeoyKuu9Uk6yAfZbqpAJJPnbgzEPRxzQk7hMAVQytphxqPgMfyLv7",
  "key13": "3mk4vkxgpnkjmaRQjd41JurDMvgpDnzsbXqzyNqaxAywkFPFHgKDWRRqrypa7dyjzAqxUJeRYbVhjDpjKYmxM2P5",
  "key14": "62rM4ERE8V7jmEjJgvzttG5UNTP6JeNeWxnNX2gBasvHNci4Tkg5qTy5U8yEBT4pAWcc3FW9rvC9CHjgdpyXCUem",
  "key15": "3e4Ys7eyJbWnEkVHoLDzMKfS64gAWEYpkToZHDX2oW9f4pMjy1pRQLyzQirKzrtzkcrgVY1jCazAJc7uEZFfwCiS",
  "key16": "3ae6Vy3gpymbeMf8zzHZ535oCHVRMG6mgZqzvRYHepvnjaxhTX8SdQxScHh4uKpR4zfLDt7D1z4AziN4EoGCLrxo",
  "key17": "5iDcidHCj3Ek9gtXDy6uvitLX9WAzxh2Yee5yY9LwbLygsXePBYT2ZRPT5RK3y53BMJeSZz5xxmch3C4iz8mxbjb",
  "key18": "5zHgeafd86jkSwYfnAr53xYnNECh4x14vj4ahVpNN7JH4Jj59LaaaFpzad8kNAYdYDY8QRVkNUxCQhVQf8aEbD2y",
  "key19": "5kQqfC8Vyn5k7uzYyF1oNd7Dbxvxj85nRHsjSuKPCv2osMjP5bYK6aokSgK29hPt4Vyeqq6h3jgAbWFYvAaM9Ayr",
  "key20": "3mF8Z6KUD1SRC8yUi4qLsrAMJbgfHFBHrtFjymQspQY7itL4539HQiUTAZNQqD6AHvDctok9Peex2QsqoPNTpXdq",
  "key21": "fijHijxtcFe59J71bWz93sGZpWpz6M7jiG7RA6cfUdiM3d2se4533HkGdAWubZJkXyS6q22RSQ7nXve3AYtXpUm",
  "key22": "567ZxBofCd5H5rGSG6pZjpeD13Gcn3HtYhjh7Tf9MxLX4wf4CFyUEEEggUJvsmEMMvFSLQ5EnU6EKd7LgncFKnw7",
  "key23": "wZwisJasayn9agiDnKe3za67FnSbQUy3UE2EApcFC1uCwBN61CXg7MQoTHvysXVCz4YypBA3wpEG8AFhPQ2KCJc",
  "key24": "yrdxtFZB1HkSmDvUfRK785hj5qrterqDYK5XBazY9fLDZpRQGirHFMb8sV3XJyocfcz8hB8NzhkFCwUwmQNXn7j",
  "key25": "5bianSEaiDEFw2RYtKuRkjCwQ8pMV7nJLtg4uYPuPWSfAaXewBHDQJUNa2hAD8Kp2ECkNhbFRu3NEg8CRXCfkYcZ",
  "key26": "4qKQPuLb2PZo2xyPpirXQFFQy9vjUY13t9bek1Jwevc3dKY8TEvE8TbYh7C42bEZKdK1AMAKgaEmgsdcRmBXzEpE",
  "key27": "4Pp64RR26WWeFcx6B35d2uEK2HPJvuYrSxLVEcbvZgEa46YW8RjZW2srmqMc7acC7ifAo6SgavYKkm1LPHTscZWv",
  "key28": "2vrdR4x9P6y3pE2ncirT2yKaTxoyZ2rXFWXEHZ7MF2exxhovUbfNPBvnUBPvKT1fEU1VqXP97WSM14ZbwiEfUG6E",
  "key29": "2GRSFS345tK77g7T1MLLE9NUQ9RC7RUcFEdWjzMabVwCWizE8iExtQ2eZs4KmoBMW9ZdKMTYcbjKnbdtJhLmboYi",
  "key30": "4zzZhY3HhywkEss3ohKfLkanLpXW2twRvVqvZYHR8NSFZNSNw8xcMtNdrbABiw4NAr3kHk6XAJuW4hgxZgQHVXbg",
  "key31": "2S3K9sm67w5swETVGRVXv96QXuPM9ktiWp4UJ2hdoUvXezaH9EeoJnauWZtQeqTpQ99ZJDrCGMpLu8f5X4rwN18o",
  "key32": "3k2iBhqPRNBC9ifoEydApj8Uo6i23pXmqhf3KzuRfatskrXq76UepSNrfhsLVkHTrHiwmsEhVYSB9z7PLZsUQ8DN",
  "key33": "psh44c3DoroeLKzzbrgSJHyx5vrP1GkLqDbeooDCqhXzCbLbwsxYzHviBWrjFitAhkQRM4dQk6pKBueYKfLviSi",
  "key34": "5RVmtGwVW5HSCByWXLv3G9qHNzAfrYicAYNWRS5Wu4Eshv4RzX7bxA91utmyBbQ11JdBQJ1gHCspBQFb7c92dKjE",
  "key35": "13fY8Ma9izfbUdbuhnMGuFaj7QDbKsBJ7ke5jDmaNgFg9mjoJHqHmKqnVF433YGHVU4Gk6ZCTmNC1c7jgXg1h9q",
  "key36": "5fcrECKz6XcS4YUWwSRkmv7Cs6oh2QsWgiFXxeh8VtSGXvFZD7ZR4ZATbpmoP29VqFQMZw3MSzBiBpDjAPFmbU8G"
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
