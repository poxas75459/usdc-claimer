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
    "63GuvU5HFsKQSuhrvco62QW3RRxNwarcrnXTksPHPUmDUJqVuaFGZG21xz5nX7JgLFid6dLAQFmzaTGQgchYF2Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQRunBChvQWJKPUGu9bQywxokp6WfUAEYjThs9ZY7X4wYs6dgmW4LeA3uLPKhs4PM3SfVF1uFUHebopjpN7CAtS",
  "key1": "55MS6J3y2arLhFum4JNVY8LgLLRYJ1kNreVZ4FwQF7xdBX282HSKm6FfCceiZXT7Qn2Pho2rG9TrXSmug3wUweWM",
  "key2": "4bNNTUafeTYwS1GdsTqdELDYdL3v3R94orgD9PrRGkoRUe6jyUGhBQPgBku1bCsTz28Cht5e11zomrQKN5apV5TX",
  "key3": "GjAbpGfQ3sthyKDrSxYV9tmqmNN8mh4Yvd6XreUdfyN7RUDjMz4GrZ1RmaHm9UHNRA53xs6GfKa77EnsuJ7oymf",
  "key4": "5DG1QostiUXsKLVEzGHeZuPPTzzsKWxoYLkdcLiLRb849VRorAQG3zWhrgxe31PsFgxbrwWUjMugQVPn8Tv2B4BE",
  "key5": "aunU1snUAXdann6b6ATjPe1P7ywuRAKFF83s5FrBke5yiyAsy6C3AUnyYS1a6KX4k3t3VqjXgYRy9QD5UK1An7U",
  "key6": "2e4iZkxbVd53jQK2GN9ESBae9QZ1VifDbreS3SfnqSU9odHVDN3GhC9etvbHQHvk4zt2RT4zzABNpzMFUR56eFSZ",
  "key7": "2PydRrZTuNXRJMQdd6mjEJP7izXsArxw3oQb3j552RWCpNdcqKvyjfLoP679LnRySVySkGPkugCPgogck4vqnqCM",
  "key8": "51zK4bVeXQ5q2kv8yVZpNihJHHx5T452gwy4Wn3x78YHusPmXHLji5KQCyGzB9iNAqbLgmQxSyCQS7fmLhQQ3wVU",
  "key9": "kXVJcgGf7Cp6v3LnzRd8NxDc4bx9keVjZF7JA6rkFHBhsVSpTef46DyQiNuYdVuBrkKxbtAg9ofYBKM47AJM66b",
  "key10": "4JkPRHeq7AnFdUD178kDcxBuvDxpmHnjhWsPKk9ZQX7soWuDUMvoauwrQ6P5XehXMmrvWpfbookBzzBR4Hb4uz4z",
  "key11": "2y2c6cwvTVrtRsRBCHE3gCX5fcY949icpSTFfLphngWadbzpbNr5HGESpfpmYABNfa1spSX27tAg4dvD7LgBo94Z",
  "key12": "42685RPoSUUx8z1stFiMAivBkwjuvjAfBar3yDyKwESPN7vyTHFLypi2yZ9aiwFrTTkm72uDhavJ5ndwXXpkUgEY",
  "key13": "4TXT4CHaC3JeM3aqqbeSZuwRh3FxZEkLpLL8d6MZ55gcpwyLgUVbHTx5EaP5TE2uHU26MDwVSaAnEAERBPZciF7G",
  "key14": "54HZ4p7z8bPmpMbgWoMf4YxTZjaN37Zp8w5n6V4GEuoJUjZKDw63KfDiMvBGTqa76qzZaGUXtHN5RoGoe6x3eshQ",
  "key15": "3fn3uhykkFcTy111YWCDxhvjaMdNCvtMF44QDgP6jPwLtxwHnmai6hpBMuTa3jHH7fDAJajHm6EBDREtp1MiTtTV",
  "key16": "3KB7sfzin1VN1JtNaE1FtEDm5o9BtUtn4o3ZavXy4NVg2YjQxzzcC3yLvBH3xWaaA6vaQdG7wuz6YkJs7Y25qV8J",
  "key17": "2p3H7Fn7nMfGpLYeZmMxNUfcr4E8MGGrRLeThTQZyoYSHXE3L4HVww68fsBAgRm3yCicsnN7GGRH4m2sCkEmHQiY",
  "key18": "2fW7uy4AbnbkGA5oAGRG35RUQmbXVnVXxku3dcmmafon4uPWwv4R6pnRdyPJqqRMy9TykyVpcPdZwnhiwVLqZyse",
  "key19": "5qKGMVjrgQDzZHQsvya4dw76gpUF2TmxRXyYwnNmS5yhvv9tpP6HRPgNj96hTw6aQRZyD1fM968jn3DfLAmg4Ch",
  "key20": "2Svgi1UpX6WEmvhe62zPDXcBWFGvfHaEGVYyvuTXnFhFkJnn2a1JgEGiiyiAdbyvpfQz6nt6pQn5ssqRrz2x9vxS",
  "key21": "4xaCkDSMRi9otgsNF85A6AJH6PQfoqXizd21VcUu6Y1QhdN4X4LtZt7ynwgy1GftgjxMSCViPptCUkGRc5WXH5U5",
  "key22": "2Ka6yYYR9xnxKTcUTvzGcz54SVTfPjiyKomarNqZkF3TwokEEEgb7Yw59vQ99YHkhfYXeJYW6a3B18SbCyxhZsKx",
  "key23": "2ShwwPPiy8Pg4SeejvZHVivbuWw49r7ua8bQkGbu6mxguqwFgevhmWuoRkZBBBmWUtmHTxbxkAuAVa2vPiTuE2ki",
  "key24": "26jWjvYX4r6E558KW4w8LHMpXAEVBjvTUTNC9sboYFM88aGaKLBSU9Gh9WhZ28xrXWiH94T1hrNWKX9PKcStciz2",
  "key25": "5igNSsBe7QUveNap6B4KbgqACmCyJKHMTpveYUemgSvZuiHRYMyA67LGtubSStt6LmX9J7RGoL4waJ53Pk1VbwZx",
  "key26": "3v6RFKbCpTrGpDB2y3Tr5RWjhKoyZ9uyStMMmk3cjJGnndvJp1jVvY6LqEtnu2GBAz7VSGavsJDBShgW4o2qkHYV",
  "key27": "4pJP66MQn2qCrFXq4WeRjpv96dVnbzeqGE28uNL9t9RxRwDr76RZVYgxtvYZPpAmb8tAJHkSWUgeZDSLJ7M2objB",
  "key28": "4JtMcEoRwLKW3dKtSi9GrQeZrTVBVogDwW7GrS9dL2EpuJDtzG3xS7uuBtBmBfydmg4L4ZAv73j7iy7fRAYHUFpy",
  "key29": "14AMo6t8Ge4fb2QQ6ZPfYantBC5CTwqn6gsR5THzPunPqwp5GNQynqwrQyus1ZJqmtGskgrZhnWzTZJEDppFU3K",
  "key30": "5Xtzq8BonGiCXUj7jKR9EmwhPdVtg9Dc4LySjSWa7S3Pe9fCfktfhA3P86UkkUjSYZkiHQ3k9aVk66SdGLt8Uq9E",
  "key31": "4WmwYBe59k5rUiM8NwcEnvRax7mzokMP6aqQ4kwNSVCqLWpbEiwSA1W96LDhfAtZXYHCimqhRfHBPJkUyDsgyCMB",
  "key32": "2GicVhcaAephyjQv5TphqDWiVGUVo22pe8ecQgkBueVvro4KsNE9427vC5jzSc2nqcg1ZfoLsyrQfWfE2oQBxiAM",
  "key33": "3T8d8hXi8vU2YgCZBtRCAdHqXzhiSC3pTpfFAanuZDXxCV8kEWEMSjK8AmRYU7StPLn7in4d3khSbnzC9X3BLexP",
  "key34": "2xcnjW3i9dijVhoeQYAqYU5zp9hVMRSxpu7odw2W2qM1SHCCfqFTTNDYiuvVGBxNw11tUExkzdfDHJo5qkcPqHz"
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
