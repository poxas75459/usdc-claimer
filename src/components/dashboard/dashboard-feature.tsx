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
    "4Y5ZdNVNBwGoiJUm3CiyPM6iHnhRvk34DPA91PcX8c27NHGh4RMhEZNqpbRagMNFY3p8AkyuGtMFNQC3dxNufKMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ny9tQQ5WkJVwmY8oVaKfV21TusSWCjNDa6ZTorKADGGzmkftqcNsbBauMZQDbcwGGmFo58oCdvZSYqJCWRD5PFi",
  "key1": "3bNzHKJny6BNYjEuBCmuSg7DHNCsZrGA5CJADLZSJSKj8PxR8RZ3gDMQJrTSDawXiDnB65A3JPmUuGq5PrkJk7eX",
  "key2": "2VGoL42D2p91G58evaugyzfaid2ELg4m8GNS1reNUsDJzGE5GT5DKKAaGK5fGHBgdc2oJRG5pQa9kt7azyhFBnze",
  "key3": "3YUXjaN27uLSuT7rbhqB1yUraM27eVgw39DDSRMKFqbGg1y62qpuF9j8xY97TACBgPk1J6PBd8Un211U28rYFnsp",
  "key4": "5qwUEBLYE5BNgoDzM1khyZ6EPXk8eSZKZPoUkJ4NxZV62wbcvPHk1eG4sKs74jwPsSrSZVq1Up9QH1VNGrQprS94",
  "key5": "wB3FcGuSaoKwHosVjfZvLsTdZNHE8RkHqiTZdde2vsMZJf3WrEGwHAg66Zmzj5H3F2trf4ERkC6hG2hd1gLjd32",
  "key6": "2zDYSUFqi9zLcmVcocMFgTQyPU5mtWdxx1sESH6f5auvYvpTdPx94MBWjna2nwFfMn43qphTXf9n1NMJi8Pw1B8J",
  "key7": "xAkq9iZjaVXDchbLcRYgUgWgMdmEf8yVwNA3TULFZCGPC6FuYPYWPxNpezxdxirAbN7jnDxWzcHP2oT1T757Q7x",
  "key8": "3Zy65fBSjmjkeKYhJBhU4NTdtdXT9Hhgd9bMfVhwN6NEvD22CdJVPiGG1P8fMktCinY1fDV2Tt4AAWFmgaKYtRQN",
  "key9": "2JSQ75pYtoyDcHdyS47QwUxEG47UBoMDaXFyPuS24bcovqUFoeTRmb7v6peQohWPiVbhyUQdPfAbRwY2ZbnS1xQa",
  "key10": "UwrBhqS9X66nhx974mht5eq1bqBmrZU4Q4p4PniRHeFFHJw7kGsXd3coCvXUSk5XSvSS1pjz8jjcHdKCQ43UrQ6",
  "key11": "4DFJFNGdZRxXVwiV61QoxD82EaqcA6SrcLeF6iMaxePU242GpQbSwSeN6HrTf1yoj7BfBS7PrKw6LMZYmSFnJLUr",
  "key12": "4ePWhyD8KHouyU4TgYNBQAc4QuFJemzD33VXYx2jFm76A9DRtN64vDrWEU7iBirkzPbp4jJxh9mcPDuxDK8zvKi4",
  "key13": "3og7MWXgReG5eBZTmPbytd334QkQfwXieFU1Vqdf6keB6ufjXkXsZESvFgUEDB74GzgaMegKe51UvVJn2YHUWsrs",
  "key14": "38PMUJJfxSnjWAZYhQgxc93LGpaDAutxGVjAyagahxG2VJM3vYf5EiF2Akg2SsDV5zSSWp8NyFH2vuouibqnGzFC",
  "key15": "5fyN93SSnaTZTfSQHYj3qXh1e3ZDGVqVqhubiUEgSs5QWXPjXhZrbQBLjoF3VzGkbEd9kCv4gKhrd3t3N2Ho5NmS",
  "key16": "26GTEo6CAjVavqDBMXN4SUZZoUoSuidEtaq8DtDchD8Ury5kcnbESW7Hhnm741LSSGUpYrBoxnfSBsVTjUE1xpSE",
  "key17": "4WGxSxuzDPAAvRtxBN32nxaTpY5Mx9xzpF2urZZQqGin5BLZY5oCbD3eYEa3juCCesg8tHLg4idGGxdKMuUmtmsQ",
  "key18": "2kjZzezEyK52Dm6rMAETXHrzWpbSsege8pDv2Kchr9VFR8Pb7V9U5185X8LYe3jb4mLwwP6CJAU2mW9db5UWJwyM",
  "key19": "Bm5h4M4sXkgccmBRX2zwjmtAQjtC1XejhYkffmkqVzut7oJmD4koVidRAvzPX3dJToEWK22szbdkq7abKYQYCkD",
  "key20": "5kWb8Fx4Yz9PAyTNAF5H95KpegsuapUWxZriudoQXCjq5tnxPCx2SAQxu9WK4upx5yYgF2o2EWa9GjP8naT1YFkD",
  "key21": "5PBwWAy8u7ZyXmEMfGjb3vFrdvt68F1F2wGfUr71PRAHMi11AQuFdU4GDxSzNkQRC8WpNajH8CPj8aVdkoiwMRwp",
  "key22": "5b4wCmSRkk8iM5ro7C25N7RnAMfMuWrzvHyQdHXtCHNRTB1Aj9jMc7XSnjxrHbRhkBba3ARCVL3XZKs9RPYMZvp9",
  "key23": "rekSaKxVw9gY7Ytr7D4H7W6YKzx5iMB3fza92AzFJYp2EFpcN3MnM94tjSRHUwSLp7bZ2tq2giAZsKJNhM13ruj",
  "key24": "3b5eyujnRXconwnumue5TLQB134DZxkgq9uHo9PGitz6Wd5LeuaQ3MCU79Domu1A5vgYLSADssW24ckxyCmvA2w7",
  "key25": "4wLLKQgxteFJ7ry9Po5tjChPk9r5mRaPrKsMhT8sme8kGEioqvpoFC4GimQDrkWzPzKEYiVQU694cSKW7RCzYpkf",
  "key26": "3WpvYRUBfqUpHqfx32tFXD6spJ1aeUiMdPhDBYjwgsEJRfJzUrTbQwUjZxeLD4nst5fThgjAfxuD6fKUD3KyMdKZ",
  "key27": "5giVQESMSWYSJ3hhwUEKZZK4Hu8ZkMpTunLfxcbzhpSTCQ2ZWt8biGJbcW1TYbLGjN3CgrUVJ7v5d9BqHSsPx9xN",
  "key28": "4Pjs4p7o1PVe63Kn6jn3XjvgsBhMfYvGoMVi2pHzwn1EEBY1UyoHbv7YWuTuMwJ1wPWdp1mJg8vNJATvJPAnXksT",
  "key29": "5Tpu9vfinPsjAE45svpwPwiKAoenhFLX9Kj3S8qcE3iVrtGeDpjsSnSYgBjxQbvcrgnRTw1YXrhypDeirkbhqj83",
  "key30": "55J4XoErm4teEYSBs4j8PTZMyVPGHzsRVuRrg4rqSV6SAWqkn4PC7iv1PSJ7rkQNoqaumCBwCnU1RRqjHho34xX9",
  "key31": "5trtUbecWqGPJSNTsYCbHyzaj2hmUirh9ubG8Hs8h9cMgcanhtYNUxgVKAP24fwKVmPyecXAsq7QRgpwXn9QgHgC",
  "key32": "7dexSCwbdL6WvTMaf1iA9L5xC5WHyi63WiGuv952dLh7ivbiBgigoRH78C5qapTgdh4fRax5jxHHNe32fD4KaxZ",
  "key33": "zRiz58EdeprSS2Qxgo1cqFGMbrXsdwSyD9HxQFJYKAtSgS6WYiZMNh4VTtQeno6hwbPFuLyWeDY3n9L5e56wR8E",
  "key34": "YZorBKjrDC33h7TBwibjmnoQWKrQrWQupHmVyAVUy2xAC58GnjjLJ7iHMkbQXe6p8FJ2FQ3Z7cifXaWkPAf1ZKg",
  "key35": "5f8udHZSunocfFQXJjUc5AHADzyFxi4YFzGikSFMoBJi6U7spsSxTdSU37Cs5MGLDbyVC8FcaeYQyHDEAhTAmgqx",
  "key36": "58jbG4eBsrDFdd22Yqsaq4PmA2SZgGrYbgjE8RNmKWjEN1QXiptw4BzfRQKoaGwdFPUqmJiCcZLKbNSCMSqxEChR",
  "key37": "EX3MAsCEXaVCwb2jeJfuohwRxDwihZQRAE6nsmHJseDcYXACQYJE4r1RtSdC2gBh1NRhFxawKyBw1DrVXAWJ2uK",
  "key38": "2w7vbJaCssQgfsG4gaSJj3wJzzgrAkYrCfBjV3opFgvjhFQgbsATrvcUBTXd8deDm5BDBt3dVQqvgMCmVnw3vwdn",
  "key39": "4kW9bMDNV6LpcfmM3vYpM1ALJqpA18b35JrFXDnTLXqVZNfLp1NykfLawxEfiLkyWrVGEu7tXxoaY5MoQP7PikTA",
  "key40": "2U65ZkyJvXen2y3ZDHde5KztBydCVhfUo296syiZ8joWSQvC4UgP39XF5jSxhET46mKfEYRC2vxesC17S1E8pMHE",
  "key41": "3D4XE9pMoJR6AdpZdtHn945zB6minLSYx1v6jdES7dr6FAd48a93Q4QxkNm6TLcR1xnZYGzVNTFyc17oZf4zn8Ri",
  "key42": "8deXzo51c7N4MjMScyW9Rr9Agj2BJEjq18qCeibqFbprtsD1ouNA5mY7QFgzuZdRVFNS3hoVfFBkj3GbkayGdok"
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
