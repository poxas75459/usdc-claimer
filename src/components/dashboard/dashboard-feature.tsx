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
    "wBudzXUvuUfNf4WXJuQFsdsMRhVLSMuK7XTicmYti1vJvfiuiSG6mEKaahz4gfQ85utZPtorS3qHqMKx67XQnAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UWk4QKwSS7Vq1Jm7b19ecPB6YGw3kQhk6WeT9iW2Nj6nAwpXcZb8xhf55vCGF4g5oHkq6aPTx8jtXuThV5tL92q",
  "key1": "55ytSufSSzfJjMiZkmkvm3TmZsaAc6TEDoi41RH7uEPz8GFdh69yeoiobpRZ7EFoaGmCZ8R3H11weovMccBfiN18",
  "key2": "4rE9Po5EQB8Z86F2pQjZtejoCRijtfZuutzSgpqzYjCr777aZKKtBrXQyTsGoWAD2csemcsfsdXCeAuF2YV1swLB",
  "key3": "2aQEG2N7YJvivFygS8QFL5f4MV5uJGLFh3WvswVQeMjpvBjQtBf3X8HFyvd1CrmpvsaHR2HegF17BZGTjVh8TDfZ",
  "key4": "51mmzmvuqZ6khPBs5cQXGYrmvhYiBX3u5ZRS6BpaxEHjvsfGZcF6PsFvnqHt6zuA5mZhJ9TEz6GY6cXhHP2wUgHP",
  "key5": "2P7M8LcU3jZhNrsguW6bVNTrocF7Pf5usdyo6d9CSvs4F5QYW6dE99CGaTQNyjxSqfobJPSAoMcND94KdsuVVwkv",
  "key6": "3RtHytaQWPaMX76cgXYcC7LCdb4xH9gfciZTHHxpZV7bXagqtRLghcU6A3xFgJzUU9rZpTBcBLpKmgaFKwejqNEY",
  "key7": "26BR6dFSdzmEMgqmWzD3e8SAbuQobKdprTnCEGB2JHn9zbi1tCM8sceUd1pBxj7VaZcvg2bvpAGG6tRy1Kh26DW5",
  "key8": "39b5AtHXw3JVtQdburtp9gjYKE1xhmY8sGvSqTqEiUywce7p8qXidR1BSfyh8zsrUERks52BJ8Wz6tgax6BFdBGZ",
  "key9": "VX7HwwyonunFDrMLkzMCSqGQ1Gr99vrJfvM5cx2kUPBt5WZFs1Eh3NxAhpj9NyTV4JKyU9jxAriYWwey4Vz8Dab",
  "key10": "3sDzVJrcFm5J7mFDj6VKp8ejHMgneZRCyZPLxmMFFRYmRgcTQceYdeXXZYLtxyLWWVY4zMQtPqcwXfLDHXLpPCLu",
  "key11": "2EGHFNw7J5Mf4bEu4RYLsEiHzkjNfXG57r5ZLC3fTWgnMEQycs5aLfDCM8kRZnmBX1799ag1jHwi7BBvbJbigyN9",
  "key12": "QSmDduzSzAiRcWAUWi1dwSfoHBvSDvducnB5YHtLXvv4WmemjPZMNinvPZfKKpU5o532zNYEgJUEpthbaxvipQk",
  "key13": "3TcHBRcbAszzeihgwHNF2DMvDqWnirYLGPY2U8NpaiAum4HBEoAmV9Zmypja2ipSPj838389NtMQSSWHsSUdqk1Q",
  "key14": "4TsxRzLyx5NSevvbdkgkdBmkt7PH2iFXEzzGkjgT9mrmsLa3zdxVoGPE5eVxGA3UqQ2DtbMbstBoJ7v89JdGYo4p",
  "key15": "32PmGg3JCRaVx5qQRsuwDd5iHnMLCM6XaYz54SXKoDCEx1hstpJVN8mT1kHwg63WKV97rvJAbc9NtBExeYTHh7xv",
  "key16": "bomyBQ9xi1NJ5jToJbRkkJJPQw4aKdvoLZ3nr2XZSmKJua436GyP2YgFcDPRZHW5Gt8CcQeAekNQpbPMM9ZygHZ",
  "key17": "3kDYBz8QoKscMpQizxQKF7PtpW6SYTsVioNYvMV5VdHhdas5xPDS9fXE1gwtEfF6YJAmTnXE2kWYopEhjgK57adX",
  "key18": "5ysDe1rXPGyVM8LtrVUwhyZJXsaXzD2AjMdGYgbxLb5pBYftShzENJ831J9Nq4cuvEQhfkfRmaQmMpsiNtDzWvPn",
  "key19": "43gMv5ErSbpBor3N9KYX5QXjBt9G6JCHwGwmCyWUr4UMRBcY4owM85THvZTnkkUMDuAYgzSq3581UGMPRv4eunqP",
  "key20": "34AhhFtJHnnujH467L43HuakxsFpsWsob1ZH2ghvrPindGrgAnC8KYGJc387kfm1aFiQmrbdHcAKgqYBT6sxrVCz",
  "key21": "4yoRZ7CrkjLrxNugGsBBjPfRsshqRErA28THG5kq9aRhuB133F9fa4tLMBeZJUTdCK7KnF2weVPG1hLrMYTf3bpt",
  "key22": "273JfnzS1J7QfxqCe6PUMyg1muvMfDJw7sHGSgteXBwGbpGH2susAdKWhqxHEEm9rqTeE3dduAZqodwvzX2K5zwE",
  "key23": "5r2H4FhBtNkqYdGdRLGTFptr13yDSDRp5en2EbXiPdRssqDDZPWWU3B9pRaq9DEHTE3QbwVjAHC8864fxks1RQBu",
  "key24": "mbznY2xvTJZdKkBVbf8k5kmRs5EoV6ZZsoeYLGZwojnQLNZa3VGby7gacztxE6YMsuTM1h3vWjM8VC4Zvg2MrTX",
  "key25": "hH9WS2d3vkCuJc9EX7VdLhE8xBmEqBVp4umvc4TKUniLhtAbhXqA2eqM8X85Zf6tNpdCQHT4uwPSFVWmC7vktka",
  "key26": "3jFMyb2Cjo7D5bpnbce1cGc8UTPDDCLUT2kiDk5qasRfvhe63H9CQsaTLZfm2fs7tWjY5zVMsH1SdNqHV1GzZVrz",
  "key27": "1pXSEY4jJrssALYLHPnkXs9cBfJzyscX594C7NjY14g6VAUCR3y11iFCEGDdqNC6yBvaS8TcsPqF8XBRhrDbnrk",
  "key28": "43sqpZupppNPzwjMCdmyqDSmaDpYwQVYVMSPRLYbATf2MCdFrinY3YKAxyzcDmtHzJwRaqMxYLQTWW4T3FSwVEEg",
  "key29": "5iyRTBB5PdPBgXmhmfvRjDLUUAQqY6VUAxp5o4vz7MQuh9FvgETQK78VSBv4hcUiMFPqe2m1mRyUkVudh8x7SC29",
  "key30": "34cMb89hrTKW99KjMs7BPrstaW5s5NtyjKYsBtRK9VuPgx4mKAA4sTgjNSW75eXjcBk3BfLPyHEtqs8AwM3ZRTYW",
  "key31": "5KPnrvuvz4rieBp2YwNWpcRUJueQ5AVyc7Azi5ha2T4gojSkXH5kv1t1c6LY58mMAaFy4qAfTKee4L9Z96ac4brK",
  "key32": "3wXhxycoa9ShTMrATyYfi1ZBefEE8Fht346BPevXAh77Awe8aaDaSEt8PbJDi4mWUzL2S7RGJ2Fk4GRk5FbtW5EG",
  "key33": "foPUFhynrKv8c1LP7dqXegeG1xWzZk7NdX1gZSgeL2fvUKvxduGm2i3PXaXuJkpjqehKAzEyjMxG3DaZsH4CNqm",
  "key34": "LkVgvGvBQncyYu4NyqtnBtDyzYahEpFuazVbvnbnmLURBh1mmHzU8RpnjcvBivqkXRpHANjMTU89fLZRDidb4g7",
  "key35": "3na6ds127bi5VieCU9sVFVKciBRodwv9zaKtcuXbockbLuKVkbuzaVi469QdBg5MofXMk1GBenqS21CeS2V6y7yH",
  "key36": "x47fWmfowjCmC9mfxwrPCdQCRGhxmcuqf8WDcRnD5VChqxWuJ1jDnLyeKy7drNz2VkQaQeHRHamEjGGCnReYrgS",
  "key37": "44UXWBVf1yEuXi4Kjyo4hnd5gFmh6HB943aEXmBLpzHdJ8VVJ87SXhFqrUc6sWmBxnG3t71xe4a8vPdsVFnY8yhT",
  "key38": "3qXTZ4BVg4nKhA7RrBFq6PT5uXKwZ7GrydGL2ZJCR1eC6psV5moNU6oMMLjfqneMnG5EwTck8iESXycwS9tpAy5q",
  "key39": "44ECarbdtekoyvr92XW14SnRdmKLPqmrtvztiTzGHT9jQ8ujLi3BkEfeuyFxzAyVeYxiFNLWu4CG6MAj4JBMVkP5",
  "key40": "4ouuVEsa558AWUqtF9k5HnqZm7kDDdTrQeBuS6dJtkzpnFX7jt2ekUcxq1uqXeFEqamWJ3QjJAfoejv1j7Br37Gd",
  "key41": "4oBme7dmL2tcFuabnw943VVh9yZZUSpP5xqTW59nqhXqwqyjkKEu7d4rYBe6uNWZQyR973ioSMxFNAseoe64aL8e",
  "key42": "2XJRdDa2V5V3BLqpnbmKyFL5MhjGrotq3FMREaZpAUPw1xFh7PRZFdapLZyD4B5DUxyF5NejYtypRhUWvwWESRh4"
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
