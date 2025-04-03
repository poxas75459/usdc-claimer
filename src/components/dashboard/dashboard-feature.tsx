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
    "2Qj9AxJCK3voYJ3UhWnys7F3W9q71zTrYavAaZ6dHzbp3LjyJ4xSS1wuWySgTM6ikLs1FncPx65pqMyCuLXZKxbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fr4pJM1ZioiZLCkQBAsoVWeQA4xhKkVJfFe33GUtuSEdvtADtKg4Q8iPFgTWhVBYXWTN4KJwrAk6mRZXt1KaCac",
  "key1": "VNhsh4HDFxZSdmEZyPKFQM6JvPhwmA4WgcoAkHWb67mBq8gr51zpqrgKB6SRsxb312PEeStc24EwW45k5ncnzUg",
  "key2": "4Fwg1yXaQNV6bP3nhNe9zNYfFYQcJroM7JXuakw58gkvs6qSDFSHnPdrKuiRsLJ9EbRoVPqGdSpGeAbRKDZs6mHz",
  "key3": "3rogxzbU8fcBT6KQWbvCaY2nQhVPX7VQTG9y8pt8KzWjw4zdPThKuvJXNYuvzisGohggyHHosdGUf7H6HHshEDbD",
  "key4": "5rfRZ8BY8TNeH8WZsZxkb1g5DJh9mWS1kdptXDBDH5kGJGgzwLxpAfrvYRLHtTqiuFfHmE1h6qxMyXk1Dxawm1Eb",
  "key5": "5LcB3RHzuyHfwbXofa9Re4YYh9nqbtt6y4FGE8btqrUzs7NwKnb4Se83KAxgJmodYEnbMgejaSFea1qTTXZeEkDu",
  "key6": "3vF4PXE52uo9zCusHdK1dfrzG4t4Nw7rj8xFN16SzqRp4XFhVZHXDFpHCEs95X97uW622RWR7Z6ZgqR5V1zwhcpf",
  "key7": "5WM8b4Ra1R1xWPvaqk4BWA82mjh59F2rQsSKe6QPcowKhxi2MjDmbsmsnZUVhLeuKQdP5hmPVVR4DymAWDynhM3R",
  "key8": "fnAvAZcuuW5TRSnge2HbMXbqUBeE9AuwvrhVaSCFiR4NUYusNwhxvP3LFxVfgSwL1qnoSSjqoLfbqb25DHVNJoU",
  "key9": "3LNoLxTph1BE5oH7XuSEoDX9F8sbwyB89gG9Gz5JQYvBXVb7ZoWkXAYeTBsFtVJvueTHXy8yyHHm5oRyLwjTtFsS",
  "key10": "2dNPD44kpwcGwiJohifPmYpRgZEVsyS5sSBLBf8SG3FSyHU8o6RphqruAzPVYXAEeyqrHFHV1TcdrUagYSQpHu1b",
  "key11": "3W7FD1Nv2LJRjjE5qCxkPXRoKxgVBftoPw9AqcghVWWMkhBaTtMzA9C5mUpLeHzFqYRNgUeBsD3jm6tk64hzmSZa",
  "key12": "xfejW9DtjWTCMwQcYuQ1Kw45bgjk8fV2R9z39HJyrXdhvLYira4DEURD1wUojNC8khvAchJ3EnJ9ZxZqFkEkdnB",
  "key13": "57dYkeBd3a6oGpZDkx1HSF6a3mPiqqiqwbZQiVfBvr6N2L3Hv6ZU4qcGfV2TzGJJBwrKygVSvbhUxZhU3pWs9Lbi",
  "key14": "3fNK1Ve1dF3nLxrb1LiJbD5rxiikx9qGm2zvcqXb3vmgQ9U1W33arNbVLJhQ9KBA9WE6ygCjEWrNcArHmfq3ey8w",
  "key15": "21Wh5waZFMc5ZZpGMQGAw2o98M9QKiPcJtEjfqWTzGkTUk87B5kMcb81pcuv7gYXqup4V8AhiHVxo3YZTL6Ga4Y1",
  "key16": "4ycWx4VCbQkqtPuAC7aVPmLbB6W3mTVAbuPkAem1raihZ9SqBkqX8GmjqXeLoVdmJFgqqj2MjvwYkR1K2cvCJgVj",
  "key17": "5eBqj14CwbmNtsAVzJcsA8nMEe4sHQ841wdkETP2gmKuiAXPTYQiy124kMHZvWphtYnHKz2ERGuDBeNpN3avzrdj",
  "key18": "iA9fgaaHgWBqbJzibjEYu5ry9sDEaMdyTYx5bJQHGbPGDHqpXs5hLnyMimRCLVu3F7gQkY9ct6cJi4DNJShECHF",
  "key19": "2Vt2vTQfAiPyxfJn4PHhqQyRSuCCU8eQz72mh8x5D3PY4342PovAc88ip4a81SeNzvJbA28bhpHVxGwFhNZ6Xkid",
  "key20": "3XQGnzExrgx3XN3mZC3cuZ3v8ePFMAe8hAzpXXVeAWtXxLY6ZTAWpbBb9tdFGpfS7npYZw5dvgJN65yAJG46N852",
  "key21": "yQoiPmGEn5p6rG2tv6YtLkTmJuzFQKyNurCFgtnRK15fJFNuU1xdSA1VM7Hti8MiByC5fQzd4zmcE4hJdye6UPC",
  "key22": "5QNDviGSQPs3XWpLQrVrAtpgTDtKvtzYpMfqiii3AKmReAkKWQQVWNNRvFfXJkrYWQV6BeaYcB7GK1Hzqnpt7Wgw",
  "key23": "3ZBaUbEMZSPtnhJcpstanP4X2Lenwa1tXDuGiEGaaotFjoCsxCav5xFSUAfTkKaAvpJCM6SSGAiLxuGUWh4wqQ7L",
  "key24": "5RHe42HCJS4V8fTNbktFWCbVrUJmpjJ68EZUX8vqzT1UzCY3Pek6zpGn3GtPriCgQZ4YVkHDmiYFNQ8ekzdsGxF2",
  "key25": "2FE3s8GYvWzr8cTqruCvEY6dG9uFanvvfiv37FT6HtQReYC7h3x1Mujcf61v3n9BmYor28Lr1QAmP8vGBPC83Dde",
  "key26": "yaDnwbWh5RJpANqxadFmbuDLsmZXXpUpQmjkk9Z5FUQPjnMpS8s8k4MVER6qNLwCbcPMi7KXcoQQ7akd2Bwg7R2",
  "key27": "WKHSGxxnA5VpxMAyotUmmus5cKfYuKbKY19VK6oBFVfYAdjtgCZtrwASzNMahRFMQuVjBCh2RdLEeFCLwX3AJUo",
  "key28": "2be2aMvnePnSGdwx3HcXTHKH69CPgqwZP3CBEnBN7ViuUriwFbfBPe112DQtKxK6cs2wNshF64X7w7vkq7Uafiz3",
  "key29": "5WBNrehx7JzyNfbwSnvPYfkeR8Xmesp6rJJMt183Tt6qyWXE9wR2kFXvw6pK3974wj3o8A7u4TNbRGS5wPtdLNJm",
  "key30": "4nwr9Z8VpitQkRG1HkdkwpnGzvNjGoHX2fQP8WxUu9KMKHsYBXNnyyp9ETGbsZfU2GSnPLTMhwKswTuVYfdGZVVV",
  "key31": "2byAWsWkqvvJ9Cfz65RTJbCfnujrbuvxPjcWAYDdAajnCL9GQvYXvfGceQg3K9u4RDypEuKhNoSKY1YN1nDqiCDR",
  "key32": "63ASvWxtaKYavTD6oArACcjyQuZq9urDd3y5QEe1toyDiimouArZfSWdrdfWy2xg4EbqRoMLNZYJeZHNgxE3oMTt",
  "key33": "rCmsxqcjZ19vyPxFRcCPmUSuCVTNR7Ts3NSQjJ6fYyNhfDiDdRBz1JnMNc6Yh4bmHeHdAPegspmGY3uf9sVypqD",
  "key34": "4hR9xUXwFyvEGcJmfe362369RrHX4DK5Q78hmRxG9oQtRok3bxQQkdJYBZ6hJxVZxVEWJMv9HMWkxm96KpVvJEmm",
  "key35": "2LWckXVRVMxCbPxfg6tADZg3ZMCpQQsSXczDuYLQWntcpJQ4mdJs75QcF68PKyHjqJXxsKAL7C4bxVbPffXB3uw5",
  "key36": "485m3gFp4Y35AvozhYfgMKcs7eaBbTYc7JKW6VJ91BZfAUizKbr21dMNQARSRV119bbz11S9meU1AfMhMNoWe5kk",
  "key37": "31b6BEE9JYfn1oteqnYr1gHZsGFui38LexpggegSmoEcdTaUKrm9LCqkhNWLycTG6kS4WdHZYmjXmyibLrAe6po7",
  "key38": "2eRGGgRrUcAgdG7o9vS5AEkpWsmJhW6GHTM5ZBZav4FeVTCpx8uYzn5q8ushCPhZyoQYFzwpYCULSKhsQu7SJAtT"
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
