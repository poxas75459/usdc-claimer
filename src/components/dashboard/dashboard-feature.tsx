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
    "53dpVWAKbhbUCH14C2G8rXeyepYPYkCAy6sztjMmMMN1e1ry1J6Z4toVFnzK8vkSPpy1LEwiY9vD9osUhG1y8Aae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r4YogFawJTXqToPJHsfnk3pzSL7xAiq7T5dWvjg3b5qQbKMKnULFtejVwM369zJPQC7w23kyoTm2NH2qbFQrocT",
  "key1": "5TVfRZXy7UunxUwYz6BYAiNoKH6XAURESJPo6MzkSij1sQkJdzn43dK1NfNPzcdjeBxiRxqqGghZSBybxqrj253h",
  "key2": "38GZL7j8P7vpgwQofxZ1nzarkfWEePQPw76q51mrzAZeChYY8PShJSrYHCB9rdAnyqg8RaGSKwZPryKx66Cn5avr",
  "key3": "2gJV8YdDGJubFCLH7VJnDWSmwzxm6iEBcTHyHUE9GXbimDjd6qmj2VR85PfVKiq7deGdRxNSHWDRQ5sv91iTYDor",
  "key4": "4tVRM9pddRiaUfTcep8xPm5X7SgT2xoPEYTuKcK2foHzC9EJEsTzCHdo7zHUDyrAUFaQwcRYbgiqDWhBom6SbXUB",
  "key5": "5fhUThC9PP5ZiTK9XTu5DnVz56csoLLWQfyAqhezCoXVdeJdbUnUDCT47T9gMvbWwQ6buuxYd4BW6pBTgKh9bhwa",
  "key6": "4Q8e2fiGKteMtmda15Vbxgt5br3d3ThF5HmJnBBC1rMpYwhvFiRWtBVcqR6CQsiQF6pkHr3mrP3eig5wnPULCNF9",
  "key7": "5bmFgAt5EYaLPUNCqEu2jJxT4P6geiX5R6WaQqto3Yv4Y7w8p6CRmSnzJiK58pU9183XN3LqoPfFDHVYUGw3h36q",
  "key8": "2CaSS2EVwARKADoF31Kv4aaTfmqumdiNLW1riWLouv3pFv2zzFoXugyfwG1YfkYAFcJ5zqQYJYxwwAGNpR5J6brx",
  "key9": "4VFmGgvniEe3hLkJToWG4YV9Uja8RqtNaA2E11tM3J8giW2Cxmek5tnRrSKpuiCJhjkNi24ptBAT2hizPWr3Feby",
  "key10": "J57G1wonqpFErA2iCdFTP9ia5sBpPDr79pkcDdG8u9gCJufamx353F433XWb1ENy9gdQhdsQGSUVm1zXmWWB5xF",
  "key11": "5zonexriR5kyzd9RgSCVH4ruwpnuqZTgfZoeMttPFNG8tyG1AjUovyjv1BJUxu28m5hXq9zbijtmXYY4KhRvn68E",
  "key12": "5X8t41eg67AKTKCeUB3KutDjwZJRzMTZrM5bpJcAvKZQqto1umyT5aZaReJk7W7xz5PHLzAkPi4DyRqEESRUmdUP",
  "key13": "oKrhHzxebzob4PmjR7p5CeCFcYaZuyBiw7EJ9jfvsQr3TpzP4eodk3yBTXCSsRybvMcfuHmq3QmKFny7NmCGFnk",
  "key14": "5bVjXkA59D6SjtVFeSkebvvwoRxqc4p67yJfBuKuRATyndmVDRDMNhCkzLxHLCs6q7VoAJhE1AxQCyu2B5cK71JW",
  "key15": "4B9NE8NikTtara383iSSrrF2XUZiDLZEwhFrDhxfuHbsWH6atepdnkSBPSCzS6rab2sEMxSnC4uQPbM3whjySq66",
  "key16": "5Vh2WabjYWyMC96qfAzottN5xrNzX2xMeD4hVE1qfy73rmK7d92sqe9FjoZQPsenQh3qPf7eoXaBmJVpryC9nHYQ",
  "key17": "55to63E6PdPmpcjJWr2QJxw9YoCZH1KiBYkDfyWk77xABjjXcVxwC6qyDagLz8kRY5vPbKCE94kM7d2zTs8JZaJc",
  "key18": "kHCZbhx9WPNEYn95GGGgzjAkXiSxjSboEiWcCZVxgZ13sBL5HAcTpkNW28cdtsS3F1YTbZgkFAxyN13T8wnHGbr",
  "key19": "5hB4zKvkc5R2Z15QAhfHzPSfVVzNHMzMnZcfcedTuzmrw2EUCNCakfH2wf8axg9fuTLeXfERuXiZmBh33JScbR5U",
  "key20": "5cHeBuSGa1v4PBQkBx5zewnxE9Bow4TZPmMU4c6v2Q3CBvy2RHoENwL9WrusEeahoojMJoewsC5YRwUjJrs9QQNi",
  "key21": "2ccdX2dgdspom15KAMyjwxmLKLpCUTLa8PDzzoHCUTDgd2GQaNV7MUoqJVFP8CTqdavv9Vh8uh8NyCmzYGX3tmLS",
  "key22": "2rNk7rXRFzz9UZHnXCLaVmYFLpvHZALpbNJ8cAV3z2GE3vmd6suwzbABmN2NyaZy8xsxQT1D9kVow5zYHAFPRszm",
  "key23": "2hWBG13vkxUHkDhnprjE1JQJJDBbbd5YbFDtRVhzo5PpVPmHodVSthLJESbedFEdpetet59vfHLAf3eREVKjhteT",
  "key24": "5W1s5oKB9dKSQHrwcB91ERsGZuyxHHRMM6m6coEuRT2866NjAoRi67CkSqkiULyhTUQ2MJJtXfyndrvJm9VbX338",
  "key25": "3ZRyUSkMoRpoVMLe63fm3HR6EEDe3M4d478F2Dsdmq124bZ2gS2LZhWGDZW6LJNtztTKd3M1W32zYx892ifhXuT1",
  "key26": "47pyojztvjVyDAD1GuNffvL2QPWAqPy6nRp23UJ19QWiCaRJAUFp8VEi7CbghhRko82fb188fzJzXucQNZahAZxE"
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
