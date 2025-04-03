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
    "2bUkDU6AQNEbe7vSbod1TY9eCvrBKDisFw1yJknEyC7XMeHoJ4NKNyP9MoS8m8jMfGXC6fBmFF3Ey7zrQbUFRMsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EsLCxuMdJwzEUgLptm2mpGZunm3sh2bv8bHuS1DYw1Xx8V9tPCugaCELGp22aUTap5p7k62sGsBqCKUqXRj3JLN",
  "key1": "S991ctuwDgHP7BuuGM8T16X8wAoLPQtMzJFq4R9oCmQuYeekFJNGPgPGv5wnzqF8dZ8zA9dZSpiWzPtZeLpLm8Z",
  "key2": "GmGz2MnhoyAdFPXzJnQ6YTPUx8ZrHbHAjsN1qEYASckbT4NdMajh8KTakkNcRRBQyZgxsmsfbFZxc9AuDcXjczd",
  "key3": "23D1LV2GhTXbJtANZkqBaHzB7BzpojjhFYT3hE3v6eGAH9EEGPbtpC3PWycpBxGFWxPLABfamQagDg5xnoesBU4j",
  "key4": "2bf7rTgsesfxDx8m7Dj7tGjv6EKx4wX9AFgjhkvkVKtcd6tN1YoEReUnPrT6x8E8cXbkQHxhA64dkvDADpShsA64",
  "key5": "4dX4cpJio4JY4VbWWnsgYz19gFie3jRGx2P3Uq8gu9oj2ZPLiL9oSLWAW7UkNxtRJk7Zscsn3n58ksosRKb7DxJg",
  "key6": "61PwSLud4gmjQdK4exELddJPd1aGWECQCig57eYwfPpiLrCHRcCJpgtFmARPKu8zR1vhPBTWL8nkx8pFUpQTYunA",
  "key7": "2K8FBobpRVSCozBhrgQKSvR256oC2dFpUj9pRU75uNWKR45xpr8UYK79xf1nuDtuSZ9eNDL9gyXKeujHCnpDGM2B",
  "key8": "Sr4k9dVL5ZKp8om6FcniuKxWEUjiQ4WJ57z1zVJXwGucRvqyGc2uDwJkoaMC29rokmbEKaaiAN3yTXN7KJbvwj9",
  "key9": "5BXjje1wGwpw4qUQqCryxauAgGCZYDcGbmPyeiac4rjW6YFSj6VBg3ETh5amw1fdqL7fJffmK5DXoMEfkfSAbABa",
  "key10": "4NkxjMbkagMBb5yAdGDsGD5WSgFM3J9EsdspzfsZwtCK5XCY8geebfWSR7F4BNVUca87EB6L8qvDwmffmB3rpKhc",
  "key11": "vMhQKS2fQu9iBy2jUguDHi6MSKwJGr5eJywxFpwZpMo5pwoz7EzTFgCyrSAJb9s4UzULxy6871aTpy2QRHgMwoe",
  "key12": "5v9btqM5XmseHi2b1MaKs2AgVAQpYwWJFTnJrJG75tAS3xdF1Bp1ra6VHGCNbnfPChiheGi9CGhBJfdJXzEHb2SM",
  "key13": "LsHSq7db2ZoQJkxgLqEi43zy21YG5iJgvJP2gGeSqCHcQnmeqRAVcm8cxHQd7hvqdsUiYGmyPNqDoNMFjuPNTVx",
  "key14": "43hWexJAeHcoEuoop8UjmADHzytyhM5Vidd2mtzaDZ9epErzCUrH16fXeV5QXEvVy1f5L7u6vxGAFcWB1EPiUuk6",
  "key15": "2vxCuBVP5q27PVpFaaKAkpJNq3vB6a66uZ9S2Kp8VHKLf7rRdkDV27qYZgzJmKtFXY1E5aRLtHE88nVaJPupacUQ",
  "key16": "4WdddFHvEDjLCfFZRZG6MfySctnEhduK15RfSQZ65BWGVUu18xqzQVeDtHdgFNKHB2XwJ8yk6MKPaW9XVUHDvBKH",
  "key17": "FTaSgPRQ5C1TZTZ6haGbn8nXcbfPbR2WCfYke8ZicjahNCFHctVLarpZ1aEyJxao6sCAbSmathZhrfHF9gYBciq",
  "key18": "3zTek8xyaDSvX5Qa2u6LoDCvRnNMQ7HKeKq5yPR5yo6PCYwLrjUdyqLDWh7nxbu3NJFfFf7zCVDZy1hHiEbW8J6C",
  "key19": "2jLGhc2GD9MN71aALXuVe18xQdDiRQgPKRCpFWhSmcqsVoft4CLdnUUYpnT6SqYeXL6dPcoMfNSbuFv2rZmkPu7h",
  "key20": "9EsSH3YbziaPrwYFQvESmckQx6kmf2Mt3MJc14yMEssDNENwkc2Jkt9UQgK2L1Cy91arKsgzrG1UTZFaLVb8Qgd",
  "key21": "q8ivGMUA7s1BCGbYnfP2V9ujkUeNiGiccrgE591JJ3LZx7GfgRLWoN9XA3Ybzc6nkYu31N3rrGJrMPU5eegPqdX",
  "key22": "5W5piS7qsMYQ4qSTMS4CkKuzwzzmdzrneGnSv8PWpMMdnZpboo7ZKq8ZxQbfps5jE98wstpZ8mDswpvM34LEPaoM",
  "key23": "2wX5DD1UA8gmP8jAXDPcFfEYXv4RYegNTFN7hAZxw5q1MfjqxXVdQiT6QSR3nm2LiNjyvRK7MztmQco5j4iUFCf4",
  "key24": "3V5cJoVXa7rTUHm5PzkCh7EHLWYso7MG63Ua4EQviCj5WAu8Mi4LaNQ4jk7C3TqrQ4ZuDpvEFBJExaoqrB6p3n34",
  "key25": "7TUQsTYyJHgpcYMyrCzjF2bQhum9nDkLkpmJq5ej4D2Du3D9bxG4ytsqRV2Jr2NASrhiViPJYL7tLPr1ggiyPsY",
  "key26": "3gwCstjvQX4Ry6DV7jnz9mRHrbcXjujp32gWDsuvdQSaVPVGzGdpuRxuQUehYcLi97SJitXdbtcoZyRq5CawzNT8",
  "key27": "2CMp6CwSpidWoTsRbgmfhSh6EarLWZW7Q68QdSAC1PuJKEniRpUf7dvdduLSnGe2vEZcRLVQRwHtnfeW9Him498K",
  "key28": "5zebJPgghiemwnX1Di1KYY5Y6NxPpqDoysB9bs3KreH3R9mQShP8QZU89mZskgNxtqgZNTephHodqTSrcRBtuukv",
  "key29": "PETRsy6Y7gPwPuuswYuyxoTu5j8m2DFdbfry1rJJoD2tg4RBXeoUvFsDGodfh36pfr4fP8uYXeP2yokV3uspfUW",
  "key30": "53YQBA4oSNN5ysdUF1XstJguKxu8QLrhNwgJJvC2cVqJTb1jEL7rVnENTATxJXtFsi9SFtJ7fUPU3V9fKgANgV9n",
  "key31": "4hqU8s8ChR4nYTDG41AHmcgtLTwMpfJT8LHDf2hPcxSYZ6jpsFMUzmTUFndaKCqKHFmoL3CbCMMAi6fa1cG1fxDU",
  "key32": "2JkAZM1RLxq4BQr9KZa52idBJz1tmn6G1v6JecD5CnyFBKTk3FzLSZFonDDoDwDyNV1kLMPFGCFKSWbiC7jd5TDe",
  "key33": "4w3JHRSekFxUz5nFQDV9v2JAjkURZhHEW1BKVC13aJHZp33WUQBzLjERnRzJPvKWMAiSjyUT4bg8pDvuMhE36jCg",
  "key34": "7Pv7eLLxsJDDLDRbMBFMpiBGcMB1cKFroJFTFTfjjs2LHQADLnDAB1XqDbXnJ5CcDw336BxoUy5ckvZE9TUdd9B"
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
