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
    "2dhVZ45nQmrodLovQJv4dNsMU72SY9otZpyAKZqaF5Wa31qyq9AjL8wp8G3ggA2SaiRSsytD5CxMvubJ25vxo7tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yzLzcPXX4BHKQqjJNqirBi5XjJTGQyB9Q8aTerYmUJUyPmJGPn22MvLAZoJVZoDYycWwHgLsj5yS3GmWmUcS13E",
  "key1": "3uFZAsCFS31Kr6ATqSsNDHBmX6pfNjYiNBmMfPnfNV9g1jE7ZzSz8QTCHH7RQCuhRNDcQpjSgSGZ7yKnMB6FJ99P",
  "key2": "3MBaVS6edwBYRV6697fN6HxrFhUXcBwaahojwBqtxZS3QE17P9URs4n3rdMypmvqwTrraKyDi9mbE4VpwhRd2Ju3",
  "key3": "3dMAj4BHSQd7YVsUbydjUWi2dLMUDxeKdwRiQiLFb7BjBxQ4cwuiRBDjnmHD8VimTSnUjrAwsHrGZTHNsbNVSgDk",
  "key4": "3DZMnYbiSimh8bvxc8sBQWEULDACgvGrHutv7ZXsMKfBHLoXNoEV93Hw6QhFGeeg6k74cnH4y4qKz3ja1o3XTr1d",
  "key5": "2fN2ekumw2fTwAXmcfQ3BEC1VPJkLboJXoc9ve8jX5CyXkm7MCinri3ucx8dYZ5kzuwK9yibbayuK2vWzgDVgcyH",
  "key6": "2L61Wjp798ax95sTMEAPrzC7xFMPCdsx5m3mvLVH7bpqV8vkBm9b5ihJudDq3EkUGncFArayXLu7Cpfq3uq4Pdvb",
  "key7": "5masLKu4pamJb1bVDx6j3Tr5S9J7C4AvCbrVZFLwPEgpVi4ya1pRhoU1HBgRttA5AdeLLd5Mmh8ayu9Ds6woBPww",
  "key8": "3xv5euNYuKBWTr4cLkAkjmyP7fz9rDKWpBPitbfFXnyBs6YvNVCL7qZJjFWiygG4zy2LwFzMMo6scRJbUk1Fi3ox",
  "key9": "L9JHHBoWbBSQFXoQ7Ac8kW7sZmCDSeAxw7SZB7omGqgNRinvX3hXoZZqZFfSHrkKqmfanECF19pgDagPi28t1an",
  "key10": "3ffV8rpKprGRnbEtwum8pti7EuS43WTY3QUPNgFQYgQGuM3AXDkksRkzXoNg7DM8nwVra3CsH46CFPtZbf1K4Pxm",
  "key11": "2GEkqfZeUeUxUF48QNcaUQRZrtGpMShZJ7yPApakp4xdvcFT2wLZBeY3hY9wLcnGAj9KvAsZAu7FEtLv4Agy4ooK",
  "key12": "2jaE8HU7JuCfacj2qUexCtYeQzbCvWAfP1aLiUVemYPYSFVnGa9cBHuUUkUZQQQqf2weqU6PEYHAyvoHzBBM29pw",
  "key13": "28d2qfZZD5zcmMfAXfEP4amK5Nt629zPE28TUvMJzG6y2v25Npwh4EVkGipYWaxxaHFuBaXEBkGbWvSnRzmc46YU",
  "key14": "2W5ErnSDmvdMTzdKwgRr6TUx1eLQ9X3C99PCqbww3qQmfWURB1QgnRZfUVQeMwpTE3xMFm5PQQYiEKoHD5SW1w71",
  "key15": "2yKmAZXweH1PiL7wPbZCCdEdLh7kPnu7eH6xghea22HcRUQG97L3gPkJjEahaVP42fWJYMmVpbaHgXd3bKoAHZw5",
  "key16": "38F62nuz2383Z2bur5D7VnBkEqs7rEfBesYaqBGwnKtw9X5rMYmat3srb23yBvevowwcm6G5NbsxWFMqQNDfr1sb",
  "key17": "4j1trzb4WBRBQu9eFsMXpmTRAeHUcvxc8fEpYd4RVidWCPR3LkxhKvVJqPf9xJU4tugorKsPS9sxmGJtiNz7b7uv",
  "key18": "25ArB13iQBkpAxBPJcd9ZRspB4bMhqLFeMegyr8TwJeLBBnUMcyYuzAncKCu2pnXoiMGeyqaCVTYEc4yFWPPpZ5d",
  "key19": "366aPZssMhX3w9SGVyT6MDt5vHxnhobbuNBdJyNLkZ5WQzY7Ky3CQZ7xSuKZgaeiASXpjyZoJBpom7k6QiuhVB7V",
  "key20": "jyFJxP1kJWLaej2K79ejGafzBXwBfVWusxkMgd5srSZjCAASGZPxB8Bd7XJqHbFXDyDDGGdbSDng2RGRFKjuNAK",
  "key21": "2fj3iz9Vsp1XZdqzqRuqw2GgHJZfudr8KE8o7dGpYbkzrAATZwZqeyHmykfypnKSWc2BtjAWjAhrKGz83c3bHPZe",
  "key22": "3u7tGFkEYiEdNnixWXjD7vMaQRqD2rdcEUtinj4r6YmCVL4CwE4AynT4zRDHGKrLPCrdHopJeR9eUxXCGqngCidz",
  "key23": "3bC3tNdAxy9E2LkNbiJsvGEbDvEVm8WRW8Ju8oALHYV442hG8aXQMHxosEvWtDnD239NBoc55fndwWEe1ahrC8wc",
  "key24": "2RRD8RvrggtHjen2nhs3Gm2YRpeykWNsqGnuwHx2R71uxP59yDHppXz939vvoKD2hjQqLy2aUpGdYbRhfA6sGK3K",
  "key25": "2C3b4axKrt6SZLAgiWofxyMubFjJRuKsve8SCZPR8ZgxBsoMdAYT3JagRv1qiGGLqXqiwrwwz55Wb4WZXtqXwea6",
  "key26": "4Z5G7GVYRQVKdpQsub68zHKTDs92XR9kyxy4fnS3WFXxVaSPNZfi1rN34BZfey3t6h9vfmsBbpRwc6NZyqxM5FFE",
  "key27": "4dU3BtbzTGXV9uXoWvueFYG2KWgZt9wDevnXZYHXqQCd31K8nRKxERCigJ4JFt8fVH9BC6iujtTbMyrGv2jF4K3r",
  "key28": "2FZxU6Bn7fPaG22cLsdYK8NEd2LCpNa4oQ8mVbkrbMhQeBGqRuMKfh8swuMdP4B5Go5PLWQCNYhVpy7TkxLimkiH",
  "key29": "3eoT15u2k65zNMzqRtVz414UHVtHKSpAswJLsw8mgZHiNoVRriQQBCpezk79P6E1Qu4iMpNWm4Uy1MdK2wQh8M8F",
  "key30": "3qB3DUpwueNYXgEkekxSG7meREvWBjG6T2RrYGQpDTjNtDLD86hQ577yfk7SWwrPF82cg6gjMRBKAx2qbfFLVEpL",
  "key31": "5nFNukfdLg61kqGudND8PWMbaAoRSxgmwoxBpZnnafSGRySX8X5fGBwmqW6VkfGPXzdTh9vVw7QznWtGUoetwEmy",
  "key32": "65BCZDhveDbkRY4RGjmd16fuGUtM2WLamSs5YrznTDgvfkn8hkeVCEP9HGkYVkB75ScnvVxFjEggfAi8shQRPJLj",
  "key33": "LafqJ4sXJBJDiQxZTqMpRwByJgNVBk9r2f1T22b5ssHmXXawyqFw4WGVVMe6Eyosy9vpBWz3FiTFGF1HgNuZ6Ri",
  "key34": "4zxsjSCTVEqvapn845PQq6Y8UvX1yy5fjL5aXB64gqoj9UJbQXj6YT74P7xViHEzvyTrAnjo5EJyiVFpcif4qwNo",
  "key35": "5iirmX7jDQzKaSPVpRSFDECTYRBCr6pzBrC8uTLU9WyhK88jxRfqvXwKoRgvjZE2EfCc297owoyKCP5nd4scF2h8",
  "key36": "2d1A3xe23K1ic1fkGakqAzViEEKhtj16PhiqSeKFzNYysjTVxMKFzvwAvoCePhCYmVKUMWZ5T2zGQKiecESFgq7e",
  "key37": "JvmwJURxgiff6PLktarxy4r4PTNQAYw9WQxWMyhQJ6AM6EXmw8LwGwrBFknKyEZAie8yXURsWQs632WBhb55wyf",
  "key38": "5hh88NdkNW9LFbEyFQrFm7cC3pMfM1ZkbJECvdHXGbELtuTxDMhSNyGPNg1ixJqMPjUaeKqTXM1Aj9tBNTcjdepa",
  "key39": "3MPhTuufAQiLGQpVBrfcY2N1NNA57tTMybNs4dK7p3jWtvHnTEr8R66FtJS8L3AzKfGFKdyLVHC3uQwTggucf56",
  "key40": "2SfzVL6qWLeMmzSbFbTr658852Aasj74cXMCdRc86KtSeicUHVBiWzaUMSCyiqMc4Qe5c2dGcf2GLARYiQA2Zrjg",
  "key41": "5FchY52q8QZvixrkiMDvbHn364ojS5kp9BveuZ6Aw6bc4sMFRBh7Ys6R3HELBMTMz7ypbM4CeQoosDzHJ7jjX2YH",
  "key42": "3HEjfttbcjzUuDFwMgkR86U3wN73YBsGYv7cLHjNVg1yfsnfUftgQTQAySr8DivJZTxGVKFu3RXHftc4fZpw6xyn",
  "key43": "298hVS9smyjSZVSXEydQjQ8W5kS7ySd3LS3ik7KAMhTNWM18g4a7ESm6o3x8YkMkd1XqVnfp3zncTnoeisa2RkEe",
  "key44": "2xCr4oCmx4sQnz6DGpr1ZSmRh3XYn6mZd5Z52CXJoNDoa4JUti1Z278nfbNKaj5zkPBcf1vqkyCvvne5YjDrPkra",
  "key45": "4zLXyqpmDpShUjUHc11q4d7ii4auo7LbJd2BSVpqTRdpnTAftoeyXfE4HzjoaABTvyoAqBrbFu26EAAQXV9wrWwt"
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
