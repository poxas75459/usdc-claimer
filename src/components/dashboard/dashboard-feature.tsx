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
    "57sBDCSe53PMRHtnvt2eEsCwvN82muupbQt2n4s1pXu44CdYMpEk5WnJFa7CKYfcSVBTuupmfMxzxktNUgrK8yYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pjm8DopKCKkQJDHZ45zjikXj3PxvgKKK4ZxWfpXZTB7Q4YobF58iYUdeGXpBFHdS24SDbypMcDksbNhnsHm9ACw",
  "key1": "cXdaYgh8t3Z58VYxWs943CA23hBc5iEvZsnXYBtLVPrXqL1qaXkVSPC12SZU3D7zrbMCYdWuE8q7rk1j3PUPW5U",
  "key2": "2oDMMjWjCCwqWVq9AyrDs4vp3f9CxV9wSKWQSswR5YuiZtBvbMA3zzgvxcCsLSbiAaA1yoYTHe81AeKcAGqDbEv2",
  "key3": "42iu4u8GQm68SrgvKsBnc8VabxcWAvPfYwGtDbbNfZaNt25W2r23ViKYXnnpRryCgL8Ty2ugSbFC43fmrkQybiTy",
  "key4": "25ZvMkUhnHD25ppghmM31aSmuaJpYz4MKUMSrRm3frufknuFzRr2pLAdc1C92suqX1LmcuQ6bFfQuqRDxkmKxjRi",
  "key5": "3sRjYDaJy14Tr3xjnK8rSpFm8Cnh8qRWhF8osXT6bbV1DzFhmKdRKVmBzyUjkAoFBP9x1xRV4L4opm7GZMkkpoge",
  "key6": "233k99KMjCJtF1sxD9mG15WLMMCZhnT95jDaqfjF5TzGaFCCVnTQxRSokomq8VNQudsjAd6tNiTZB1hD2rVAj1Ad",
  "key7": "2ACNnhGzoBtHSLqjTLJbJUpyhZj3VVxdbo5xnicmDzp17AFenwkW11VFAeMDLxokdJhKmokGCZkJDCZ7N47me69L",
  "key8": "5tB7QdZTirBmyRS6hz8kNpFg2CHVru4zCdrXabdKNsUqu1o4ptynx5Jw2QJFb5Qv3NCDubXtpdbU1vYyGqMv2Jax",
  "key9": "8S9GbCTRCL97gVprWpAjLw4KWJ9jZjEYRKBMAWQMK4AQrEde2aJMffxDWo61xREjkByRsVeQHzKRvr7pTgqZeH3",
  "key10": "WFJ52xQp9o34XGSSfVd4RAryMgcXVrLNUxHfZnfpgYwYJG5JMNiPAKDoukfkTsMnx45yGHmHkXN915RKqMZDJgF",
  "key11": "3KHhhyeEVksbU4AXtfAc3GQ6gouj8fCPETqV7VUjtdnmQwA1wJy7692sHVkHBeuiQ6vsSQSLSqwneH5zE68wdFg3",
  "key12": "5tSAngxdGghdpnyu451Sqo9xSu3kHD187NC9fESHaBzGeRWrpJbaJr6UBqmoBUfQ8XGmXTstKUD6M6BytrR9KtCs",
  "key13": "2Ric34FfvyNFYL7aGWzjXZh7jPjovJUg7MKwcJaLaCCQi9BaYstW1uurvr474Eows6fqgSBtCjEaksLzDLxcwUiz",
  "key14": "5jDUAdVnBPv72UdhZevhx8WTxJ2x6D1JVtZ7tjWGfaTNnXb8uK3qtXxPiYf5zxwjmgHUUnZokdExJysiuU5NXs29",
  "key15": "Nj5GwSR61qZjx189Xy8ut7cTgofMnQH2r5xrtL3fdUyCznxq31D56dSpMnpyuVQBU2TZ7StixgpA27dKWMik8TD",
  "key16": "5meU8KoSV2UrPLGtMF4AH1tXzhXJgDUtMGPYu8s8YV9hyjmLzETbNa99HytqHhFE2qZgVfVwrgDtPMPQDb4BpJHx",
  "key17": "5ZHmrp7SiVQbRZBeRDKYRSmSwjv5KhiLa9PYfvDGqgW4NKiYyQwKBGeBArsqj5H4Mwmrc6C18xCoThra7vGPszAt",
  "key18": "3bb1D6ME5bPpvzpgaPPD1B2wmE8RdMEDftkY3FvhaedWncKtziHSCeKJzajS2xVJufXnJhsK3AXjRWbQ6B3JR93P",
  "key19": "5FRJd1UQr4Uck5omsAkLtcKK3t3nXEhUVKSjhivUuLe4CHkwNGNR5zTbLd4GVniY7jhhVHpbr5g1Yk552Wx518pq",
  "key20": "46bLPfQaPkLjfu7cD8gxtx4WziKeDtBwriVYd6K7Ds1MKpSq9oy4saC7mWMCJtU9q5Y4156PxfPfMBFLAvwvkmXW",
  "key21": "57B8uxSF5dxQvL99beA4RbciPebWLMGvZCQLURZHp4curxc3RjkchfXBn4upf8TUnq93LVuvzESRgpn3pviK4Gph",
  "key22": "43ZdWsds41mfiRU6bU1ujutp7fgPzNLdJMgd6n5RSViVHVhzR7QrfmXm1QuNU5RrNVHpCFWgtShxTHVSCFBPR9XE",
  "key23": "37GCFWeA98Ek7HgEWiiZCMouSL2rkqQaWvLcpBdAMPRvQifznYtZK27X7PMfdRFwi5AoMx6vGrAbygRiGyz2ezVw",
  "key24": "4iM5LUo9qcLSrZvYHtRfEum5mjCHXgcMNqCHfENqmzYmFxBxQw6Q7R3qqHc4Wg1RJouURWUpkznmKtPXk3hWX5P",
  "key25": "3foqEgnPQ2iF7YWMwXhV4HxooVDjwy6AvsQgE8d4sDAjc71HnchCgTPYYY6D74RQPARQXS6PqJVywew5ygsp5VcL",
  "key26": "3CvmUy2KVeiAyVtxHeRQxoCvFW5jjE3Xsh4zRxpZkrNo1VRxMDSXeKfS8bH8CZ1QVMAeeRrNQ7boewuXxQEMNxq9",
  "key27": "3aUk15BzPiJw49VFAcYwHgNMEBnH44ZrJCVLtLN7EZzSifAfyVA2QgTpFobT8wgUBZ667pDDikRU6faMk6XNbjEA",
  "key28": "617ntyZXu5avoP94dcYxSm7Gm12jthe42BdEKFznSG2rP2vR4EhjWy6docg5Tz6qTQR3GXHHDbV3ZZgakiFPZ5N5",
  "key29": "4KiVmTuqmLt63j4m65nZNCyF6hijFWT7TKsmP8w8iG2EnFJtgAZ4UYtHea3XicEGQRpCK7wjvBbJMtpekCWFXkfu",
  "key30": "65V9KkZr7x1sMqY1hfmjxv2UcYLeBrDmeGZV1fc8q5Pv5K9eRsn88AzZVyBkaieAwx4xkoHfw1qVuKEfwsVZs5UU",
  "key31": "2qpuT7dtwHudESne5kSv5ehjXGV1UESc6cyXs5oSRpDbJVef8cTf4rT4UB329UpDu3meZFbL5m2kzpGmLzGG4zEw",
  "key32": "7Ea5T5QXPiRfuWYRqeLYaUm4sasTQRLn5w8JeawVzbKctGCQbmCVxndZzvLqk6Us33aDeMMrqmNMBbrJFdyZVp5",
  "key33": "56qkie1BwBzpCXTyvDhNxwjPVay3TgPqW5AMhwCN1VkpYuWHVbrS9coWkHmSF2JZ3JV5p62pgThhquQjU4mm7VSz",
  "key34": "4umMa3GwpuKgaL6xQw2WwwKGmJyUhhTm5r9LXpxxKZSUeiaUQ3tCX86RBYxyQ76fWD2MCWJZDskbanimCnXXZETM",
  "key35": "3hRsaB87cuR478njZhSUV2sci7gSYx1ADXx3BGuo13XWSRs1gegVPLZwYmUUKwKKkVSJew6H5GZ3dAGnCG5eEAqi",
  "key36": "3TpefV71Ujtwh52FWDuhmriwKxm8sUs9vbHAvbYhqQCw3NNtMLFhWpZz3C33P8NiKoCF3HdhPcERxy2yVJxLcHrY",
  "key37": "4Rbx83rRn6inmv44gVphWaHbSjAFn8sSQsDz57q5ftkNoDc2ahXhwSBVmXomZY1uWzYEmDr4eqsypmTKdsFuanSE",
  "key38": "2opXmyiUcvfAkvAF5yk9uYVjt8gmZHzfhohSJKHfzhxTismzStW8ZdBj2xtgxC89AtJHMqpifFj7AqRx2FLYjKH3",
  "key39": "5kLrVUPfBfREsvzs8Vy24L9rxAHvkfMXqq6RhnTRcZrL5MBPg4ZzGVow4RNWUf8AnoS2UhkGPuJ6bdsT4CWTBNoK",
  "key40": "21MGDEdP59TU24HBTD2Q6Uy1b5BxR5pi4C6EZj1ZD6UimApqN48ruYMHx3cwBPewqpoh8h94yTcTCqnUjzpiJcSq",
  "key41": "5h8ooN55mjGzrbmzQK1b6GpcZ8BxxB8FV3eNBgYkSvpAPWx534t5jCrdBu7tPZM144ZN6V5n2myMjo2hXy3yCJcg",
  "key42": "eNof7iLxa9xM3M6yHi1CymbhxaZECTxDMXYPrWEkwdqPhFWhabQQFsRN5vBrj2HFRtfWRKQNVXLHEmhby1Zh7AM",
  "key43": "5vxENwURkPiMi7GBvaUv77MAWK3ts34hYZNqka2GZSuEarFNcC5LBDYVo6oNrjppR3Rm5SLrfMMLxg3RffRNDfqv"
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
