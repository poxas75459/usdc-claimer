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
    "3NBbeogjMYd3WpdX1XTD9ZVJZbVUEX6P5D7hRvVHFLZ9Jjd4L1bP3cozcTTirABaHKCNTTRecea5mYfJPoEFkWAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjF1cLw66qB8JZakqwVCjrAWL86GDb2Qz3uouQgMhBHsBLo2Ue7tTEmQwtKuR9qedFtkGfYXmLcBvUKC4Pz4pUv",
  "key1": "5LPzDU2a64bhB8VeTUBMoBxmLi22CXWXTxfPABKpP1Xdn3mpm1uSsgJLxiMRJTFFFRkgiUQc6AaDeRyveM4shiTY",
  "key2": "42sU5kKzYHCxvhrTqoGmVnMcmkuh2YXPK8cT8TYGXor62Qfn8u4Cd4BMnXeiXdKGRUbbfaEU2uPAn7ZjudM2LJny",
  "key3": "5dbSQ9G228Qi6y9PjEmXe3zhHK7wcPzUfW93kAkpYBcuQDRbYzM94sH15f9F6y9WUSXRzcWdUa63TuqoMUzUMkoS",
  "key4": "55jB9cqcswL8EDzg1Yt3TpWyYWYiz7xpJAU4hzWF3FHSHzjn8aLKv98MGB5QiQWbaLQArYMLZYmeMjpfUuV2J3T9",
  "key5": "2a74mGemgyU7nH4ABmQ3H9cQgrxFoaGuEs8TcXTfHVyQVu7aycT6LzUxyPD7vj9vyV5LEuftyYEmUDM5B3iNBA9G",
  "key6": "4DKv6xuTDhpvY1BCnqWTp4qVKe16mdaydj2uWFWwRmAmSK1NuRvoAZGS3tHTXioLJAQdpSqK6S3csNjb6cR7af2B",
  "key7": "MC4P4goYYizqnEH6XcHEqnzd3T6L7YnDDX8pAbnprQJ5nrS7xnfzAZFitBpZSYtyNbdB46NBzv6Achf7om7qQBG",
  "key8": "3Jh6yTeMU8EgnhZXkFKqdX9pioqn7Tmp8B1Bftmf9uf3UcQy77XPWcXN96J8WM1AVM1CueMbq22z3rnjewnhTnFq",
  "key9": "XvqrebJoWgN6naAJrEGToNYkAtWHsJK5cnBKxJM8dp6AfMiqk5LmkzogzqFJ1KQ3B9kfdTQDVj3KE5j35Xfp7Ag",
  "key10": "951SSyRXwagkLG2mciEFFbgsVNbFTcAf1X2maf64nEVByncfkxYQKykT28fH9E2t57N4vmsrnLm1bAm12TFQcPJ",
  "key11": "2fvYZignLuAYvQydqH9hpts5PHmW7MJBUJZfDs586DCGQL5QocoUPN9uBUTcZeckwn5XMsZfFmDAHD98eYcH5a56",
  "key12": "33ugNNQ26kRGe4kXnTPH6Q4nUd4miBpFh7NWgYwNoGZ7CyXwjCgVEFB7WKpm4RZFYZL8vYqQBwGA91o6fT75WzmG",
  "key13": "3NbhyePNBZcX4rjb1krMYuhcTrtzXYWbWjEeXrNHhuuQanPMdnP9s1ANUZNsoPcxkmPHUzQugzFzc9dtNXvwzNaK",
  "key14": "5yhaycbSSRhuJ4YWERVt8stJuEu88VWjdugHuSPWbNtbQQ77sXD8Hwgvgi2edcEWGbYKNgSbXF6CBZUc9pZYC3Vq",
  "key15": "5tTFvHJdaKfm16mTP8YSBAfWdYUnbsRnSj59xsQH1ybdJWGX9QgZy3fkJxPoH6L2q4VwD6nugNDEZsyeyhfKkGfr",
  "key16": "4yXFaqokGQyRm4h88xfA8ojqKFmPvbRNzumogUumc3yycYjRvEHtRNeJz7hVhKdmVSbn8fQMcoqHKpuDHCCaiZoY",
  "key17": "SmprWVnEts3Wq48WU9eezpQePNNGBh2UK7i5b8EfZCi5vV99M3SzFUSqcHXAob4BcngMTdbQuGYT1BtbsKg9fFZ",
  "key18": "41jLZ5LPiStQW4MTNotavDxrzu9DGbvLbMkHY4qpjn46XdTfj63FLysq94aSV1DkEXYRPVR7bVsfbWtp9cTAa8Xn",
  "key19": "5cCvEUA7hU5JKCC2jAMSPshVEBWvMYVtVuvdUkgZLKBZLnWCQSmSfnruyT1h2pFetYzgxRWwAQKea2MHqs28Lnpt",
  "key20": "3oYBWSzcNVX3FbmzXbyzJ7HF2bodXo7RL1Rj4rb21aQajCt3ScRXHYu71tGTSR1g2QqiF2c8wSnhigsi9BwyXFav",
  "key21": "3ngYrcea17xVbD1pLunsqsm4JH4YhnCEKnPA2EZQAy3oqBCJdA9t8mFRagNJVXkg5v1goeEEBQ2ZyV9ajdNdEPCa",
  "key22": "4dfYaKUcJTR5dFdDGZWdGKWBdXGb8YwPo3P8YeztssfNpH5Th5iWnSbn89PScZDmvzhaEmP5qZc6gRHnGH4DH1Vy",
  "key23": "JNYgoC8c76mF8FiM5mtUX3tGSFT4DrAmDv686dcGJirYn4gBL2tiG5soGeVekx1gSVFgoF3uHARSojdJwp4wqhG",
  "key24": "aq5hPK4Xy2TdxdzbzVNZQa6QRYg3jWYc5qdQ5i8dw8rX8gZAppANYhaDQLeZGr6MZhvNBugdcBgBT8o9fXFMxqM",
  "key25": "5jHWet1KmsSX8r4766g7r6eciVK1XcmofB411npFM6Knvy7kbYGZ5w9s6UmDHJnKvcis47tRnW5HNg1vUY1NqeCP",
  "key26": "3CN5EobSGAmmRUSMUAehrY3e5kCH7rKTj6R1cLNMoVChhe81nLiQ1uc5UJGhuQCbBpCzAhSx9DVe7yD57sQb3sy3",
  "key27": "5VYEqxjegvXyLS1rv15VagETEGXWs8pbnt8dc3S6ohcEPvniBKz5Xu8XDUdNwmbHAs1CuyAMcuLCgMJQqjAbVZX8",
  "key28": "5fhGBJYP5d73czZVkBJHLujKRgYoJQh7KKGG4jRSxaFLn7eGXgtWkykACFzrpeTD6F3ioqXtHA4ErkYwhjP2pWB9",
  "key29": "2qU422L4qDt3vzMxRLKA6R6xSyH691VLuLQSLH8iPA1B1522zEwMaYwopn2Aef5YEe7wyoqykGjBYXQausvLgZhe",
  "key30": "32rv6cRWZJHf8H7sY9TTcKZoaWFoSEBRs9bqnEZg5YLng6ZEDZ7eRP9vn7jG1PcwGqWZ5WB9KAuaPCdEUwxg1qvT",
  "key31": "2BXiDwg12ukvqzojxDCeYhEfPVyZR6Y2T4PDMzmUDxLVoCQFwDU1vPzsCKmJ5zKSaLaD5b5k7dHNq7apMHLntsS7"
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
