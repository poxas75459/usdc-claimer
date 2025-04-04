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
    "3FHQ7LPSkWkVSTxUxY9hWiqLpQchPVPEFuZraE18bMmJAo8WzSn5UDGQ6QetrSkWqpqvsLqpu9AB1dxmLgHYJT9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29VufR4AE8tadVCAMtH51UjD485unbgAxLrNFvNSZyK7FADqiAf6xW4Bq9ohWzp2Wg4mXvN5AXX5etjs2e2zQfh5",
  "key1": "4jvrDBerjH4TxRHCuTR7C9XnRVqR5XQTXpN5fxxjkvreQgCQckwyqJVJM1LCE2EeCvVAnq2gV1b8RwKQiB6SmYDQ",
  "key2": "5ovqrnkwc4cuzjoKkq7gqUau28eDNuqbMTjj11j3wpwY4YcZs7FA1Jt42TZjcXYbfUKP6FdzZASS9586cXiZUWrB",
  "key3": "5J5hD11sohLvkigYwQvemxKXfC6sDp4xTZn1Wh8tvKvyBn3Wm7V8aX8AimqytjvVPrD6VAERPswkbn9VpWaDYhRV",
  "key4": "3Noik6fov4vDin2r11JjSjsmRut4XKLLtxx73sf8o8yAPCCJn38EEih7C41quXxxciu3BHYWhcjP2FS8pHzVY57Q",
  "key5": "3Me8Sp1KbqWfkY8dcfRpAxMLGScCHHWscWCoGeUAYCF7spiLAXQfzoNtjoENZzJD1qQFyLKCeVTWjkZqT95H9pSn",
  "key6": "EfTgnkaqf3zZCksKVrUftWqrT1XZLMVwmkc5zZS19CbBuMADE2PFoBU8P7tqo5rEnXke6snQ7zHty6GQeAaJWS8",
  "key7": "zx8j8sLwCn2hqozMyfixfymbKdbvbeuWicNVcuQDZhc7nuo1kvVPcjrACw5hE3KUkLMuK6HohfHpofDqRPrQKTC",
  "key8": "3crjyT1EaFNDSSWyeLfa59s4JZSFXPCKxp1P8MdabX6ncw5Eg1W9DsUNxHZDbnJqfe3umiFG7Jhj3pcP8NAPfatM",
  "key9": "2jUUCP9CTx5tA9M9aY6TvVoDJvnfWBCUKk32gYHiXkYUArYK3HUjzQ6Z3R969xjyUHifCX16TxRHQQroZ1rJ9sm7",
  "key10": "2ZYyPGBLFrztAnCmrJzykFTjTTMUDaCMQHJ6f6rG2JbHYnvgbaL3ojiVc4Gu4ez6bJFopzRVRxb2vFuzssmBniAh",
  "key11": "3p65vAzzjpyZExxFKdyxpzdwoVLnxqsFqD3brtNPC47YXaQx53srftG7XCp2aMXHbmcLn3VntTpGATDrLUZ38nM3",
  "key12": "2uUtUZZtQnA4u7CYnrj3uWfoifeMCGX9HQC3jSzL6UVfBxT5PhdzPfmq4eJNY4TzmMKv3x3jA5a8eLALbr1wV8cr",
  "key13": "TFoXVxKUe9nkEeRCJtzpVdnfzU9gwmCLX3WNyZH2vjsQbHqvNNHJSQPy2MQpq6oYCNVPcdmwMETCv4oEBfZ4cwt",
  "key14": "2teH6Hugq1FKuRUUudSq5BLwxN6nGW98zyrGRyd9i3m7B2fANZAc2X8CtQ8Mvt68MGbxMEjYu4n3T96TPbwbMcc5",
  "key15": "4r2EQkS36MCbUfRhrqG39fqte4jwSoKfVuu8auVzwF2RJ5HGCJPjiBRDam4kUau8Q5KK4P3KCGjLdwonb42EyGK",
  "key16": "HLWiQnyYYhEHvq1g6X6Wc2HiDVbomnVuEnvg2uVaeWGumC8wmX8h9YDw2uh171UE2rVdmZA6aoFF2VwZf8Qukyu",
  "key17": "22gLzC6swJCmaVVawJBzKdPwLwd3oaae5QTB2jwbXzptWzYejkN1RU7bfts5BcxuQhfNAytz1gsB88kA3gefV7Tz",
  "key18": "3GRMztt149hXvRVdvCG6pnAymqgN9unw7DnwaPnk5HSjs69HRgi4pMLb3s8BuKnKsiKub8fuvyeCo6uhBuyZW5WR",
  "key19": "3a1E7hjjqseTSXdqarHtDYkCG6EmKdPgy1CuhzBNNC52Q5YBxCuHQxvwEJRZzYHTE36ArVT44LyCsizSGxMwQeVu",
  "key20": "5CiwnKa9LjkmcSQ5RHgTJbyM9xjdaYMsbDCzh4vZDkbDs16kriJYUecpGoWQ68vu17pKgCRovMtZxAfihnBGccPc",
  "key21": "3E63E88UVszko7eGhKK7eY6XaR5SVrEviCwNbTEAFY8cvJ9MJqyRRirA1jNezSKk7MxQ7BqLdRtWCZ4SKoorEJGo",
  "key22": "5bUmQkPoKSNEdr1mpDgrMAnd6jmKuS1SqNPKF6K8pjcQUgzFgWGw3MZWyosXNxRSJKka58d9Sb2n9eEuoX7QcsCZ",
  "key23": "2qFC5zXxNKA6HgcAjASmJFBxSSarS3fSX4iRXt895CzfhG6EehyxUKWszRKAmR3D5WDqfBWSXbtvHhMCyVS1jmAg",
  "key24": "5Uvp66mF2GmW3DEMiG6u8pVQWP2ocxKh6kw2ydPhWJKowd1t7E9rrESEEUBAwg3STG5C8bkWkjdu1vojoxYmvJuy",
  "key25": "2TWq8r378u7Qu2n6ebvMeAEVumnSXJb8ACdB6M2T4p1BeKgPUGeKaF2fu3ZCn8X1W5KMGSLuSAQejP4UsMEh84Mi",
  "key26": "5jpRmKcGCUPeDKkrjxjrXZZim9orFvPHBYm4EzrnPpxLsSPM3o289CSt17zTcz7qd7aga8sSVUF3mX3N2NT3iyJy",
  "key27": "xjJ3c8L1azJyyxVjabi4fdU8CSa4iS7K4rqpoZT4nTREzpxtBxBiQKrpjJSC6aBFknUYH9pLe6En5YVVtN1vUXF",
  "key28": "5nUsmi88r7fWCbatkAREQc4sVRTKHndK8Gi4MiVe7XdavbxBdEpHwKEUwYtiVxPti98DmVTQngtqbc3ZvzZMygh6",
  "key29": "5Jyp3gCgNXEyk9VNnYsBWh4Fe2eoEsv8BMJSrqog5oeRbNWGQzgrnHn4GdYBbn23qCjjHCQwBFtD5K5h1nDTJNg1",
  "key30": "3RrwsFoj43skHx9PXgxe5RQaURKw1eK1waFSYAQptnGFPChcjhLDpc9dF2Mx6oXhhn1bCmVdX1SDuL15NZiA16mj",
  "key31": "5wu7bnn1e4Hw2M2xXmJ5ovabzyxU5R1ytr7jBvAQc3W7REBpDfM9SX5pBMY9ruBcyT84NA3BUzJSFJprwfuqh7Ny",
  "key32": "5UnEaCMrGYGRjiXJ9Nb694J9hgtyzLs5o9MKCHpkwgpoaVANQa9V31diTqZkFmeJ1P8ubBahCcEVbMUwNJydTtRs",
  "key33": "51ikzsAAhS623yqdSffBoZS2DMp2fYynrLwCB9bpkqoZaZdx5Z8yJHvFkVFbGgjPXSVSY5Pn6GvUZ3AjtdxqA15c",
  "key34": "YRpr99qqMk2iRLVH6xVgN5o12HucYdK3gGrKiDJ312XXnSR1MQZCma213p7DAwmigufNNDdvuRJsvCosVrVwuvc",
  "key35": "PuUpEv3i2mLmDrN1LkE211pc7qR7enZYqCcpY3kerX9PDeNiiPYCLHWxv2pkbPEtamFYBW2bCVwV2pAV7k7NXgP",
  "key36": "5YR2dr8FRQ3ycJoPvn2ZbrqfL4fvAwd5mZ7GPTJWZE8hmxWyiLTqwCttNzfwTDsLmjZDJatq7jYzfsZWWEi3kdS3",
  "key37": "MAV5mKd9KZJ63bh53dKu8TJK4PcA9MMzQHYyN9CtYDCV1gLtuouuKNVnNvnvF7Ckd9HPrvFRJAUjkNuHMRu7yQj",
  "key38": "3VanrTZ7kafLoCN3ZKxbzhaxmp2DSZG8hYCqgM4H8h6PPXBCpc3FQHTcfarENfvTb3ZRkKyg9q45wwCrFgUJyHdH",
  "key39": "5qBPLfHAjKtj18uz7ERFozQGCNhbGWsy4PjEhcpuTLWamfCUgAdBuucrDx5N9zALAQNhf6ASgqq4qWFWvtMJAjx3",
  "key40": "4ifyVGhAHrDpUCTobC8QddGXk77TBR3CujiRHSJz7s5RL6wKU595SQTaHEHdAFzPYroEs5YV8rPVdEvoWXp1oBHD",
  "key41": "4b8NUbJS8v2XwCs2wV48HQC5qtqFtgneJ6mFraXiop1okz8otBdkzekZBfgsB2tJqdAHdTvKdWn14XYGUfNB1GGV",
  "key42": "5VaYutbWbZUNe8fGHhuPGokHPYgim4yHHtw6z9vR63LbmN8rNnuyLWYjjhHMcUeLhai11BNAuBHotSzVU8rfHHFX",
  "key43": "2XuERJmvdXHFtLF2EdQcm5sCKLgEgjpFRiL1AAA7kWUwDRx1Suv9U2UwKLnVfvHNUeG42KMK5FCbxissebfGfHwp",
  "key44": "tGtZr58EWnko8gPmduxrdBq3Mahnt5kjRDZEdTa1q4qFuUztrZ5LX86LA5kpm74KbWKvXYELauZ6ay65FgHaSAF"
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
