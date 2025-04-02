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
    "3C42niA9jdsZcDtE61nzaFtp2vyNjQ7zKLYSbFpjdW3EdVr1BVUKCuUKHWCzpRmdP3bwX9Q2xv1Wn6JjEnES2cEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V1FnfkMo7UnHtn4P7yoZnEpvcEgJUoa8UwDWGmKU2twHUYJfQghcQv1Dyumw4H3HdrVumXYHrZhBpMxLT9WEPbx",
  "key1": "Kdzx5ghGVCyFi9GmkdM3mt2SS843tBaarWkWs5vRNfycTDLrLbjqpjh1RhoFcS8RggAKUs9czcRvP7NEvUgzVqN",
  "key2": "5L2Y35BRozkpLibz3UeGmqpH5xFFDZsbkpobpcSFZryctCAujCthSsLL49JxvrX6oUdmeWmHyvydWA4Wd4d2Xk34",
  "key3": "67Bst6HxVBmHsYmbkmfNv4Zr833NKiVPSWQzg4Fu8qL6TgDZBCpB5gpgezEcEWfBNtUkjjQxv5ysKSWi748YhwHc",
  "key4": "4CfRuiCtwEEqNnWk39dKwYkSvoRQKG68MkH9reASDyyxpTuRn6fCVzywGbE8r8sP51nWSQnBY2Lza4jusGHXAkxm",
  "key5": "4dDL7v2d9ByghrrypJ4BJ9rm5sgxwBCt9q4UPNftAVrn3mycMPa3G1hKJcfWiJePef6QovAD3En6AbzSvGXCUkop",
  "key6": "46xEt6KBXoPM5d21dZh2oTr6obf9rj2DYKjiobREENg4tQ9Kfw44QpF2wpDBzTVuoGj6gFNVAbK3yf23jTCLhoyA",
  "key7": "3rducYiGHZT6bphdLGyh9sdwQwG1Rau8hZaazY7DnCsbcjy8LXv9ByY9UV4RdegJTKzbYZXnNZ9LtDaV4PE31y6G",
  "key8": "3YLD4vEhGC3bnR6X9i1MCfNE8Gwh4361DSe1nR9akHfYWjqbj66iRkr1rhTc9yo9LS49wJMe9WB8gYkCLUyNoJQ3",
  "key9": "5MwtYe8CbDxgR2NLAYB4wVt95uP6v9hX28yEq4A571eJXQzeENt5hY3oMYgjSeNshV6aEE7tjYcd3RDGTC5zbfvu",
  "key10": "5X11oQDSSgAjzQHdzoW618GUraUaG3aqgtiZQGSyHoaTaabaE7RPU2P9fPzLVr7sDNApw25Kvgszgn7d3kmU88nu",
  "key11": "5u63gqvDVfLTvUJ8z8dvyESALtaepNBKhSvb1KQhWp8wZoT3EYPyBfPdeaAeDLmFjbxamPJ21WHDsYauFmL8a6Qs",
  "key12": "CoX2sUQdEcMccNZ6W9AYN93rkBz3CbkHwYhxJYVAiWQavghjfJwTvotMMNQYNNTM71b3ri3n6zRwtMqwLzwRW3t",
  "key13": "2QoZtfwMHjbkyekN9rAhTELSmdGsC7dEDFc4mmsEeKTsK5aG5oiRNdxHHPbZykpfA9onctSfgXjpvM8Wnpe5DfVb",
  "key14": "4x6Nt2q9rujcheAtTczEkeR3xd1ZP9tqzUypq7Ph6CWKP3xV6DqdJ2FwJLDA6ctiiHhZUf8Km2pfNVpgzBMWfieK",
  "key15": "2AMCQmbU1qCo67ACCryxdyvSVYvPUpD5VWatP22ix5w3uP8Ry3xMu3zEgYX7Xqy5kZRBAH3pHzzZsjYxoyagh1F8",
  "key16": "2Geamtr69LtgzynfQViwheE8b7Ho1pvZukLHBUXMAp9pDNHWYKgMNHEAGCMyLwQDw6yj3UwsDqZfYYeL4U2r8YCF",
  "key17": "sc4iEpLHi8egoJBwJ9N1pxuFBfLbmNWvHGr1NCCS4FssgGUW214uxWc7VgTThJ1AproxV26Ld2JTDwy8FPdxLaU",
  "key18": "47jgxC8k62FcQrxvQ1jWkDCtnyHb9EX7i7qDjSq1e7N9DB3bPuyvmnUVeUapbxzcwk1N7g4dACEN1YFjhBGFXDfd",
  "key19": "2C4wbQM5pVhnL8nKc3Ba4jf7GvfP5r4us97vzfk4ZQKY1mcvh4rTs5PLeQs8AQXa546AzzxfwQ9bsRRZsmxZxtfH",
  "key20": "46e9Wvs73qAe4PKsbN5KzBL5wE1TEcVKRhpZLqzcAYUYUuJKfu7kWqFCFxcAjH1hHhvUhMxur5vZdF5nSN2szyV1",
  "key21": "62nRt3RBAfok4qE1mitsKHMrc5qb2oyp7o6GCDRa76aSsgueycXgnWTWTF5ATsD29U2dLU3Xn4pSs1Rtzfrf3gp1",
  "key22": "wKFETz769w9MLUyGuvc3Pd6ZAnofCWaZJhM2gP37MJXQLNSaZcT5CncUPK6rwnfoQwUUbwttwEdGDuV3hDLpCzq",
  "key23": "kCJSzsVZQZt8GstRwzhbQwSEN9akM5tDye7WLrr4NxrSRN5aJoiNbR75JytQBr3Ewf4XN2ZVV17tVFbWx3ZzXJA",
  "key24": "5BsuP3ukhdnAaVZjyzdnFkihSPYnh1bv9WdMMuujpseNPjHDdVdeAMz9cHqhQ69kD5dwbqxWcUnYksuEJPNLh9vU",
  "key25": "5CgJzoxKAbxBipRWRYuqhRfAzJHKGUpX3w1p2bYQWfD281oe7ekJHnydKASnfakdefU3CRvhYFyiTa5h7c2cYsux",
  "key26": "3BdF4P9C7VpbW2yTWgy9oftbpYYP7ukM1ba3bXdsct8VkFPxuVSNJhqrQ6CBVbG27KAS9ikaef5XF98B5kTFkBo5",
  "key27": "XSS517seySfGLYz8arwwn3fiuh21VR6yD9i7eVhxA71i3AN5KaHRNLaGTPgTkq5dfBQTYUqDmxU5BiLicTTc47b",
  "key28": "3DM5LeoSQfPdyzszQgGwXzuQzdwwHx35nJbAjqkiDCW9pyfVAeUkM8yWLEynNTFc7QkvMstAzwCYU73AaLfgEsnL",
  "key29": "R9CnrspK9MR2nqzD1nr1z7zURu2oHrgmd2wsBP2n6FRbgQPV3Rp4xVZHfCRGw9TZDbKWTptPpzKifpKgGv8hxCX",
  "key30": "5g6nJ5cnYdTDa2fddYFg46BGqzsiHpG9cjRgpJKje1QovVLDs9ZWKTbvuwidKiC72QCn5dHNgnSWMFDKR2LzL5tD",
  "key31": "66eQrBuyJmeKy9gZ1fiYUjP8uK5J2zPKc5JtcptWovGtrcDaSfycLsn3DsojdN4SxQ3kN8sJRjSfanevnb8CRjzK",
  "key32": "Ur4fYZ1vf2MdyKNib7dUkX6JdmZNTKvpnAPwaEag5pwFq8JUdSXZjtaeU8WeATz3QoyNKj4VN4H2PqFPAgTeuKm",
  "key33": "4MweibrbvdbGg6deGXXZeZqGAkJ9z9CRYAL6h8mGcraKy7tkfYoEThhryPzhguujMuzEHo6cGJFFHK9Ec1jNRGMh",
  "key34": "5TLNW6tbqmBZwYEmigv2k4uzVvnXR1RhDoEopjJ25TUwzSCuYzDByVfqo2CuSKHwJbDzyHyhN6K9hJaamFzWRg3B",
  "key35": "8ABSky1fw6V7DkPaEFnhWrEKJtod7ewx35nEXCstpC7BHrRiyiBmr1uo4uosXnXMSBXQpsapV6xTbPsCRHCHeQ3",
  "key36": "2X7K36GsZNp1Zs8p7XLiik2yb9uMEB48aNDdZrynHfn3viv7kwPcaKQqa5KWqFgvu2YaHFN5hCJ1eSD2CMQcPTCk",
  "key37": "tsgioatpUvekyFeNDnFawgjKfiFXvjUqa9H9spnJfX5SJwfcxvRRkwtDNXTUxmg6mRB6S9YA3vWJnFWY6eWLe7C"
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
