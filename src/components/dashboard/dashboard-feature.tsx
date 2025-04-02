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
    "33rFxWhAe8CspwMXHkdHSRe45dkVkF76eHwyVLTVP2ic6FiBEzxHGQsN1HZxsrsEeTfEsmCWYJuhH1mE7EXjb6ss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QVqVczUUGmxdTKS1JhfyN86Mf2qFDuew8rJqrcSYwmtfeBYFog3aDRwc19aRtys2z3TnWkftSiG5bT1iwxBqT8w",
  "key1": "ThCik7sh4ZEJzni3dJP9Rk6Motkwd7U3bAybJqJvh7GbggXyiYcrBTX1pNGUMrGr1Q4iv6VpZfLX4B1ALtjroif",
  "key2": "61ywpxvvM16LYebcG6rFVsCBaBH9KdqbBeSQMte1HbSdZr5tB8g6sWsRhJh1BmEPrA5ZCHwBB6bSF1VLYDrbQgPz",
  "key3": "3uv6nvHHQqwnsqtHG7dKB2UKfN8AemEHGnMbJ3wSy23tCPDUtww25nekm6rF4ZyXuouf5p25Z5hptTw2kRgT4MjM",
  "key4": "2iNhN5ESj4VxLBsEy8RbuQJer5ZwWXpX7jWBZ1tFd15HNc9QU5xKGqSR5cNFDnE76bbuQNm2gXeE8fgk2HPDSffe",
  "key5": "eYZSAEjh2PGNKWQtBSejzptuepNVSupGHbcwJZ9TADr7ZduYzzmhATVpqktGG3H89kZu4cf4YNTJL69i7sQc5Nm",
  "key6": "4BajkaJ7RMd9xsxj7ouyEjDRqu3M4ZbKho2YhsJ7y3LidZfJA7xCwzHmpZd32rmJrrhrM8BYY1Jo32i43jVrLktP",
  "key7": "49djFAQ9nBufo8mgtNoQbTLDeYmbtMmXSUqudLCHTXgsWYzDEngAJkvWtQA1xX1raM3GFkXQCG9xc4Mwwrzt1J8X",
  "key8": "2V7pa9MDvW7pix9nprMJykXyf9yvKYc4bT7danU3k4TKWzwonuwyCaSuZa7QR4Gk7J4VBumPJLatCRstGso3KVr1",
  "key9": "2wafRTaDfsUkFNZyNeXzC8ocgHm6AE6xNgiP7CZ1iwwwcrGnrMfR61HddfgirLPyDqtRtQWSsBPe7LohHcA66vHc",
  "key10": "3DKRGwxLHC6vbCQLHKuUBMDGbvNLX2pw2TLZktk11HHJFsy8RHAijARnce3Xw7cdkjcabQvFgysQXgrdUJ6r5zL5",
  "key11": "4zkhQoWAY6RGXdRYKchUuZAEdfQQAWjv1bPKzUncTtjGwmkr4Fc5LaVP6vHu8ws11RxfKUqXqThGn3Vm3ipdeeBj",
  "key12": "mzFDZdEWH5LT4Ku8MTXMoaRzpsvpXiYnzSEnQgYrddi48LSKC6GDegSPa2cVsXps2K3dkF7pGP1gJ97wNuExNEj",
  "key13": "u6AjZDp8aMAo8aDPnsCvfMWgDkyMEz7G6Wb2e9Jz8vvLiuxohhKxsXqbaPGsShc7aXh4GVX4X12dndyuecXAGhZ",
  "key14": "5XMUvKJBVf9k7B8SrZwNrU9Dr4jhcSxidGnBBtvzLiyvGNiRrTGjiVjGW18zQoYFqEXpcdXhKcj79h6yL6Eag5jU",
  "key15": "2qAgs1UQnrEyVszatBb8PJwdVvgjnMooDNK5pVdz3XHyse6ZQL5GQRdctCTS64GL5Cq3FNQguEFXScJh2VwJLiRF",
  "key16": "2LWwJknNrQSuFpQX9WRhgbUVC7BGMeFVcbFWVuNSWFXrKVmPM2xsWFkCNiRqxLwWVdroVE1DSad54zQrZarbTYN4",
  "key17": "3SuErQpqDgYuYAktauinAHt1MbnoHqVmzcG8Bp1CbosWaANe16rHZvRNTHWn3uUrCjW6fTbTTDCg74YyfFUiFBmA",
  "key18": "2HVkcYJWbcdaPNb8FaCSDPdWqAt8JUWfPiXK6qc4TpApD5PgQg3yARJNn6fX6LqEUkKEAHnij4UH55Rt7XuAyuhd",
  "key19": "3YXuEaN9wsnrLgS1M1ad7tRGkFMFgvJ79wmws2uqJAWw8sYy8t49iPR5geJLToeSq3HSrNhpWgisBBdUuEAS1RFw",
  "key20": "51NTtmNaqnZA3ERFngYepnxFcwH6bJmc6cxWhTFForNKkuTmEDATS58cbBS8SZjtaaUxEh7gCeRb8CaqwRXVbGfd",
  "key21": "wMU3GfeaSBucM2HkxzkMFVBZWqEMnWmGU2gdJW8TYTWixyNv9yDxL81AB7sbGuhCTVXaVRNgG4H7zDk9Yd6PbNi",
  "key22": "2dG5vRWTaDsQ3UhKNBXW6tszBLiiaZzn4ugwqHMff9KL4naEczFcc615XKNqrprJWZJgwPo8n3oLpq84qJBDZ3oM",
  "key23": "3D17h3qVSg5YxpTCWuZodqcfPDsDNXHHVwWbm8TtUUw8sJ3ZYS4SyPUwYmQG1yz6LFriPvDa1niwNNjnWENLL33w",
  "key24": "rQHrKBhizU1bQ4rs54ktznY6dbv6x9Su7VN2ybywMbqMi8q5SV35jjWdKx7ysADaYKtZ36xAHbwf1PC9hLyYbnW",
  "key25": "5x2zLkh4B1x5NdqqGMwDc1p6afWBSyyJPKJskvhzQdrVGX7jbfZ37QtUgS7bh7mCtPQ2Xwhcg3vc4PAiKgToNBZC",
  "key26": "5axiB8qyCteqyGtA2mfTvyZnfwkEsYk13dajz7YmkdEx4PjPWDiCwHT9tX8QngLoYeHsDdJhvB9MNmvFx5tcjJwa",
  "key27": "DofAeYTuxMukUb64c5ovwHvWPE9V2Ec4m9iNqSNK3yZHDiiYzCZfAV2DbTMa7v1V5t6jsXzudfKZRRemY4S56jW",
  "key28": "5ryPn7gNJ9P9QCP9QSYGMXradVq4wAxaReJTiEQJwTLjsXrWi9MzLNKfmd175DxJKKQRqQUQLdt7MKtM3wqgeVAT",
  "key29": "qRWpHG5NBn27eK8LqR11z7HjtDM5Mru4YJ8Xm8zjJrd7ZPFtz5qVNtfCt6oHJNTjFXQzgJ5ij3tvCxPZgGpVXVH",
  "key30": "3u5nG9hEsdaRbYU3cbPk9MLtykcaizhYdVCn7GhBeKj8M6JvtYKXZNQfXXKaL6NnonBT3YYUikVLw6ujqdUXu4bQ",
  "key31": "3doir15K9zJsb3bvNoXjH7CBCzyyyYgrg3vYP9LFRRubdru7wSoapChEDt27fSs6qSyD9yxMUs5nQPvDToTW74yQ",
  "key32": "5SdAoQg47AFtLwnLuRpqYq6sKZwmmj2y7gt5PEpE1VCU4AkJ4JPWL4XxU8YrGzbS8238ThRdRawJcBxgLU1tLiD2",
  "key33": "J2aDeHXsX6MSJgzXFXGvtcJDzM4vwWXrVWMFJ3whPdiPo7pqLmXaBdjmrfPuB1yAM5hVjhi3RYqkjy22bWbCDP5",
  "key34": "48SVjAxNWZdotxKsb9zr2eUjAwWKQbBXmpx7uQVZvqZkbC4PeD39Z8kNWgN8aufSyXvzG1mE3XMmqNDhywBZsoDc",
  "key35": "3Djnq26M4D5A3DZcPBAUKj7RMGhAcV8e4gXyg3FRYUHmBHH5cTd42oYZ9kiEJear6NRESN76BXHGJzvDVoRFqgwW",
  "key36": "2cKdqrdQnxyiDwfxASoFqdAkkwxVdxsmTg5fPRXtXxuCWYLafGhuigNPLHZVsAWqJVwnVBYcNvkxoGGZt2fptmhc",
  "key37": "5FX2C6dh3g2ctTeXsw1M94usnidsEriVhYy3uLuGVnmaJJLCUP8dbG8VqmJeXb968c4GtEwzU9gCrh2brvR8i8zh"
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
