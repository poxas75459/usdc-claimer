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
    "4spLLmzeFKhUYKzXtJMFHYHUNKhhXmW61ia2koA6Ww9U5zWwfwdPBFWv7xJYCp1vgzoqdpFzQQF16pps7NdT7LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uv7jT9a9yxsdqxLyqcgRLUdV25b772Wo94LxuVGFxMCiWiop2LhNSH2B42YFvGTXYoPqMzKatLLrxzHvQWgxbbq",
  "key1": "2oDwAz5S61rJyKmZbzeVdrJFCiKheiTf4JcFVVRWLC7E43MbJJmpxnXQWHncUFh2EyaSnSV1tWR7sufNztQeVDr8",
  "key2": "2MDZn2RKsS4ukpKpT2xRzWrVZyMFtt6rrWJgEeVuMuhDadVvptsRaeXbqKTFbue8HgGaec196s3x93LkViYEfYFr",
  "key3": "31YVKeZmqMoG7gyoYCsAxzq7WTMHMcoV4B8pQFhsT8iR8akJWgkaoeUu9xzEXVPaSGE5YSPpVeQzDPEdTVcHSxhJ",
  "key4": "3FZ2HFwQKf65Qixtu9dm6vFNcnSE3Tppzre8wWhMq1UN7eoW6wGg1WiZfQ5rzsYsxYkEvZSm9vKWxUGmh1KW7Kgw",
  "key5": "5jREaRUCdyCfnd95yyXV6f6eNx3abZ3FFvjmjGVmfNx5pmDhWZwWoSqX9LkRfS2VokGbxgo8FJWJGnBj8A2i46Xk",
  "key6": "4PNcx52mYA7Nc1sHQJSYrV2BWg7f5qDenfsUaPX1dhSP8KjV85vgZqNW1oCph1wGYNseWi6FBTjb9iQKwiEd8sUQ",
  "key7": "wfE35SgfdQwAv4F4y5ZRBq9WdGCF8ySwDH9yrV8sfb4tiyNugNqEM4fMkcGs9bXs2tMtYTqhkjAgAjqXUZ42MuU",
  "key8": "5TrrdfsfzXm83S5MAyNx5yZrrwZLoayUcfhN6RKx6x1HdP2ynAgqqNRYdsrErWEpgq8d2NWNgqdSVFhtRZpTZXeK",
  "key9": "5XEBKkCU7WQZpPgiagnTgDHAY2anGRBNGJjgNpRgbWqVg7NYXfDgA1QJZGciFbiwQuAhQvU3UXiPDZMA9r53XBx4",
  "key10": "56NeMoc5TqDm8SGELq4tXj4qAuPRDxU8KgL7TXiWqXrrcpCkXSDrs6NUrmeqBS76VsK2TGZT1hJ5xrqX9A3FxdQp",
  "key11": "3GBEJ5SSsQhppo7KMkKet2P9Z1uiUawDc8XUbw2CQwGyp91VLCL5StKrSn9AZXt5vtH9GNWcxfZ8wSLF8nrLvNS7",
  "key12": "4vnunx52oTLUHSeqDwWdZ9wz48Zn5gLGWvduYsA6cSiG3ryG3Dg2Pp7guvXmemudFLK9hGc4ZU6GPWjDzqLBSAUL",
  "key13": "5ZitHMuChJ4b1fUNoYk6Y6s1d3oEVMucnBGbcNWWsLjogAsTnirwo1nCi6mCHAUYVi2sLHgrUbX3BSsiU4Tn1NzW",
  "key14": "5LaPcYFKCoDtoyTgJvMpQdd3jb7JsnGzHMjDin5P6zaSjcFCjD7eyBc4JFqVqQtjwqz1T9Q1iHCsdQkdcprrkoCS",
  "key15": "4gNaaP5294JfE8UYfH536LarZXB6qbDhH698C1Qanmer9wk6TsiTw13wnAWzQpAYbbHoZyECdMMMX26pPJ5DonXY",
  "key16": "2ZGDx8mRWChf4R65HTaWUfNCUKMWVqLoqPovfYcBuYeM9XLgUSoRDWYA4fdwHWyitubpkaL8CteARbnigLgii2T2",
  "key17": "4n3QXJhMZ1Xd8hThtKpTTDgacncZ7Hio2iXJ5PqeqWEaZnLxSmoXgadAcWU3im52cKsHmZaPMxx7k5xvr2s5zjs1",
  "key18": "4xUjeeapAc6kLunyCY2oSKtYXX37Qgu1ETXqoiP7cYMxhvzeex7A39Ji2PgQQEhHPWdEGq3yEFEu1aiGcY3iDqkQ",
  "key19": "2172EL6kjkLVYkxe3vFC9V2pUcyYiQWenu2s1zgHkGrL2SfqzmSYiwWmSsmut3fxf4XJyhYQphJWddUm9em47rev",
  "key20": "4q2qhNdfC1msbwsVqLoYf6589eopBJtiBBXD6ZHjbXUrecqhjWwUXNM16GUcrkzMNSu6h561novUzgsUg1kZBxGE",
  "key21": "2RA5xGtW6SZdHGS2zasCm7u6vdNNtEyKVjq6UczoUsnKxGM5eRY3ebgW9AHG9N9Y3Cy619DGb98uxBB2fcvSoohK",
  "key22": "3J2NhZBj8HBoLePQaAMscuau5NnZPRUiWFwM7mbM2LakgxAAexNAoqSkBvFCvmFHB94qkcNaHuCs8SQjH2tMpfyg",
  "key23": "2Tnt9wqqwJJuLo57DDrFuRB1273dhKHE9kKNneHQkTwyZUwSGVKhBH6zgqCQPpv8q4b4fj8BqDwpppyGHUgEnPLu",
  "key24": "3a8cNhnjas1M5qTsKSP8Y1GZ3mDuHqi6Yfu3NpQVV3ph39ss8JRyJCHcMi3najuGYSNRnZFisGMA1WqXEpMArRNW",
  "key25": "3f99jhzqwHZ75tQy8fopbFhiiC22aDPbR7E1EaEBMZJfpTyDEWSRN49YZQUpoQw61hENFPfCWWFoMRDgJAJGis5t",
  "key26": "4A3oefQBiMuhmDCqttAFZcR1igY9gBVU6XFbWbjKKK4F6WisuxsAkxJb4Cdq3NtCWBDbyb7srhMNNZxPovL6bFYt",
  "key27": "38hJwBK8g927GNL8tc9bqr7YYZ3PMrun8KsyDAA3GvCDYkU4J7VfPZRgjPz4S6BQhEkAj9ie5yNDA7eEvbFAeeUi",
  "key28": "56tbqKqNxo7BqQ8KBjf9hSCBrfF5hANqhLE4kHrG7WRJC8oWmk2V1VFmSYKnqVaRLBXuUVPwRUZpo9sw56Y4seC6",
  "key29": "2Ws9H3ViMbd8CTkfUYF8ZK8jRfVJDpdnnjQsbrU6gth5Lh6m5CUjJ6SLFJF5GpKy9jZnPsBhxNRUzSQokRRh5mz8",
  "key30": "3r1QSdTCq6zrFoJgtDNf2b2PndQ5tmMGdKDSsswhDP3ekG6Hq6XQjA4Tzf3GgnkSGhavnDVJSegSdMnFPJcLzj3F",
  "key31": "6Af6p2smKdNXd3HRNeQ9q1YoVQekQuH1fLpE5SPsDeyygvkaDewHxG4oshEcKWtGZpJAX9BDmFYX7aZqHFPcex4",
  "key32": "2f6DKqjc67rh5qCf55ABeGtiLv6CMTRNxCbUo8QMncG7wCMhk95yGvifmnVz3tsKLJQCxiWhpJUZqma28Nhf4qrh",
  "key33": "394NRN26dWL175kgAV5e2ULDfHCREFegyDx47nhYjQ3fJuFQQ6YMMi7xMqPTmAskReMZ3E8vTwe8EpqaDEYtsdSv",
  "key34": "4YpQcqY2mjcckBGWiASQxAemA3xb5G1goyrWvGrG8CXog8u4swbn7sTpjumhafxAhhRr5xUn1EmFTUkmaWfASC3p",
  "key35": "48fT2sfVYHPJGxU7S2A24d5cdruLatzHd2NFBwEEekpbTnhxWaGMMKs18vGLcd6BAXbsc6Ej69qYvVA7E2UUW6zJ",
  "key36": "2rAuPJRFMU6GMPKkkLST5n7dSfryPUcbUNk49FYpTuy6zWmgQjzVkiPCzkDtWnkyFncbLSuHCUmHdvEKcuqesKrR",
  "key37": "3YA6LZeszq2akkSFuY9rv9TCQmhLERzY9UAMcTDk71xZ3cbMwnMPtvF1L5ebnucK1V5vKMq5gpKzuC5Xim6M5Gcj",
  "key38": "bZMhtgNVNDnH91snZGm7TcZztkpRAocEzDTvanwxquw5BMKN5FJFh2P6kmrArJYKE3UAP9bYyndffRb7gd4n4VX",
  "key39": "3oDbjSGPCR7VFgGBYiJh2Nfs5aaNKxoviZCy9niTZeLBTWHJU7HETWp1earZpg9qMoNVyFWuRWMFnz8FaYbC2QP9",
  "key40": "4TSC8koy1c2krrj6A3ocpG8kjMChUJp4B6BiBPS1JdKKkkVdJ3WwKuYzTArgjRPktXPf4H36sANvnEnGSL4Rfvae",
  "key41": "VX74Ud1VUJtN2FrzzwExfUMuGqvH5dZTU9KWfijiFTiGe6bpx5cCDCbxj8hDoHLMUDrVjPufcLxqwpsLF2szDtQ"
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
