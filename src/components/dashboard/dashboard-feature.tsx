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
    "gEETHZ21sZG95D71c97NALNZmo9FaD48bpJ2naVsHmceb2GPCMsPegYnxt2tnRvAnrY6seKvd6nYPchFQQ5ehid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y9qh6gxEJae6VoahAJUBV3juqXmUWCJbFy35NHb2kX1E3pN8MVMT6uG18HLiheJCg5439wjM5Wx7fokr9G2d4Gm",
  "key1": "5VvESAAT8bP2dWk5Q5Mct7D2jxzRwY9qnZePrUGpuR3ZGNz7fA874rbsSLkyqC7d7HwfS3hXw4wKoV1N9AmTfYvb",
  "key2": "3zzuRrz6udeW358qXrboxG5p38NUFLw8g3sijdc9nyGNZ59BS2tNAvguWtzPwsk8KmowqZf47ibYv68z8k8MDhxJ",
  "key3": "4BViJ9Kv89y24xeVYoDWSX2otUNdbJRADAoyxHMFGd5JJ2ouvnVLGhypr5FdCC5bHoYDYF76xRy9qjD1RdNMFgag",
  "key4": "48yHE7nDsfJSMRfuPgRXfJePMn3UfGEJ5JuX33duv7mSoLaA3TycdWEmw8be21wSWYKyZajM1ay9iLJnqbtDWEqX",
  "key5": "59HHqLRGkEZFJZ4cYdzCKjGh63LMhgWq6idik4m8DVRMthwmdH8PniDVqwkz8KzGyWLcbQKaELtgPtfB4gc74NU6",
  "key6": "2Su2qc7dLrrULaFWLFdn8so7UE52ggM5CWdkGbJDVxowqzRk2EQxJUyUPezAqsEaGzPAwrfUuCHeTKHp7z7usjtE",
  "key7": "5Xfg1aWDTc2EKw86TyFm6yhMJxUbEiv4QEKgZPYVS16JHyoWt7bXpbrp72kE89jkEBw9pCLHXumGp6h5vgtoPxpP",
  "key8": "rmwXBLhdxscfy4sRAk6aLXWhjCkc1Fx2JRi4XGCFe1uBxy2idnNSfnDobwnzP9qi2G5Txhr3bsQanTMPDc7MNPa",
  "key9": "2eB3j7hScL2pbZeGGGJ2vcdUtVHLbgEwX5khCQSm3BeFsRS8MGgH45L2cayXPnGqsFDr2Eog9giuKCXjUHsgJpwh",
  "key10": "59H8u9vgWb3oZGG3rj8tEEc4aon1Cmo9xnFpowjMHBbmq2KDNTjzX6YmBbqWxmPo2PWSEcs6gAeHrYznLfWxbUEi",
  "key11": "5UwnkkzTrt2fV8VvgqgA1s7oTQqf5GETq9NYwa8sSzY3dyBjZN5YhAeP4ZV4CWaJzwPMjFhdPz4mWh4mhBjj4BUS",
  "key12": "3dj4F9VPFhcTG9D9A3Wp97SdroytY1VmJ4pwUnVWepmQmnZCEM7Ty7HBsdEcmYFmkahQ8bTqAYbZgZUukkikzrqi",
  "key13": "52e1NajPUiko8yYcmTYpUeQGjsP5yRR2RiPsHGZE3eWYovTn6rDbk35UccMKetJg9dwU544hFKKbHiDknxbbGMoE",
  "key14": "4QgZR47vWBEBcLL9WgiRy2u1jxcfcUPUPzBcci1DEnbanScQra7eN9vviQzYrBWcvhi3LPncunp7U22b7gFhWH1i",
  "key15": "31bd3bzwUYddeMC7H9ddX5YfDJ7QrZKfCAriA8Pa4gEEhoXWzD9Kb1B5EMyuCWeqe9SUQioQjrzda4M1S3DErfLi",
  "key16": "4Zhj9dKUdzHnpQ8PqpRgCpowFwsS3exa9k6RYYEZSJrPtKQfxHCttgy2eWpZ6cpUoaFzANMvYWW414KC816rjnX7",
  "key17": "125pMnS81yawYBtDbsbsfCZF1zAPktrmgVD8g2ngsQULUus52WXyFmXhpssFeSpH35sVKboZ1on6WbbD9jB9pmw7",
  "key18": "4a8W6A9zFr9XVAWywXYGBPNrX88E9CiVSZX9PHGorAatcQR1mLgPYzzeRWfz6AA1k8Rxu8WcXqs6D6y67tMkEPcQ",
  "key19": "4jppaNits7hHDDmjVttft9D6dTMg8jdgJtAWHYWKT3oiK17fTX3VvMd7DQHFKVvpMMg296vg357pQ7jAABQ6qVY4",
  "key20": "3wSy4oBybVQPu6yNmz7c1w6Am6bbF6pMNWnMHfyXWbt5QvHBdV47cMwjckReXSAfNCi9fQAwH7SD6jTZS5kiot7v",
  "key21": "2zei95eXzFbyVMf7jomgg2vsY1WeCJ81uqTPtRvzHhALxQAwf9KjUpiCmoa8K3AD18xDoGA4tUCxeKzmwQpWzxeE",
  "key22": "52YPZD1YCyYRE8BSAwuXnJqMYved8ULcBjjppwiX7eKpzKqNzQRaiGTD5Jfi11XEZ5tnkyRvm5iodZF6KwPQnLPT",
  "key23": "Byj5GdEE2kgCVnjTWWhs6bKXeKMzQwMLfagVGZfdm582eKzHTYgXHDnodeExZDEecxnf6dkvaSpmEUSVv1kvQQB",
  "key24": "5x5qor5pZhe4scdbWDCUk5bYKkdUqmx5aQ2tVM3hhVDWMf5fr9oEFFFGz7VhSYmY1JHWkkF1TgA8iAgZrzAEpk2Y",
  "key25": "5sFKiCacyfF7M2SBUduxjLcscYkSVxmStacM9FHs39UmQjumnEXLN8T3XPsLopESGBJLMERLxvF6QSNpPRZuYMm8",
  "key26": "2dH6EC4QBMcvdtJh18Dexm13Bv3JGDR32sdLT5SWTLi4UzyHypDky84zkAUx73wiUCmRq1Sj2J5Hi8fs6oLJ9JyT",
  "key27": "56hiaNZyJfhTehtTGG3qbC18PPcPEZ2JrqSSPAmfVk7xgzsXTJPPmaQWxwTmBha1gdp4L3nCM33uAoy17tj6YcU6",
  "key28": "3p6h8cpGM8NtP1sfEu6JpSR2E9e7fKRGqANhhkmyPEWZeeuSo1xWc9D11iyRYzCTsXZDiVJR4hcWeN5Y2qeM9X7H",
  "key29": "4eqcEfwu88tD78y1QJks8jiYRjUoA1GFZEWsKyzi4bTbhK3zEA8fWEKuMex84fCdJzRVa97MR16p8LRpxQ8gdKhd",
  "key30": "5qkx4YqHgpEnjfSNzbutqTdUVF3XoM4RsNBUuThQnCwQwVXv1nThKarQEpdH6wY81Cv63MaSBbWxiig3y6CkB6z9",
  "key31": "31mbm9a8CuaQxhGFVuj9gnH1CnCUDAcGGEtAat6XP2j4kiHe1Q38BQzhXyhR6u85EUQo2o9qy6AajJXLQdXGqZdJ",
  "key32": "3kcQjMSuGaXfoXXg54VNj9Njj6ALM32xiY2g8ftFyrrEz8ijCRApV2pRHpux7Psa66zd9cwtgC35B33EDfT6yvmS",
  "key33": "UusUHXeDxuBQwxBsQqJfmuuoQXNi42oY38ZtceBVbFUZATpJduxKbJtE3VcEsYtWJaCxNHnGvz71xmVpW9Nmnkn",
  "key34": "3Xwu7jVAFmH8WZNv4m4ZBycgMg8moqBuad9uKHwaTqwRrxnzBuVjw8P5NraTs7VPNQg5UwXSveJzTULxfnewwHGc",
  "key35": "344x6PKJxtC6Fm5eMzgHAQZkdStg2aKE7jt5HNYzCk1ZzJ3rCgKSdRErv6jEi7yLbeM4W9XLLPHBdpu5uPpGBEpn",
  "key36": "4m29ZS9SHZJxPvHKGVUcoQi15fuDy13Yt2t2Lzr9t9iECjYz4KYNeRGRXPtuzDtNkpBWuwHExJUwsLw3AgcJBJDM",
  "key37": "3QtEBLFjvftCa54uVMhMprNpEqurG838w8465PPXWVSxSrMWvH7BG6k44u3UzphQR4fP9VzD4dnmsatra97ixwM3",
  "key38": "593uR1KERZAt4NtApUyZeKgax51dGJCLk41qBnVB7wcYGuMUmtcV5SZAD1Vt8MFjxPcEcezrMGNemigJbYPoVp7Y",
  "key39": "3azXX1JrPR12TWNaHkweJ7RU3w7eJvHXSj7Qm5puemVT6FhzY8rvYwDiEU9DiHaKPYfYk3LDnzGysQLQE7KJMqEY",
  "key40": "65ErzQkWWdQH6cjmhisc9s3Kni5peDep9tD6SVj4PeHHN8p14zfKxJjVtdt2J131CnopdgJspViY5kPaeWyzE4Mo"
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
