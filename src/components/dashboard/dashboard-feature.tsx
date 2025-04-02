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
    "4PSHMvX5zFwqSkYMvTqUmRtcCsx9ptJpTd4Q7uZCRW86sFuy2v3qieMZJSdxVQYvVht6mzBNsnW8hHtEU4KXX59q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NR4CR7M6EFipgYoHUcNRJ7FfSumGZJu3mqmp1BKPinGzgK6bDEh8Z7LCKxGgey5jPYUyZ68RkhzDkGmnEbY7XRi",
  "key1": "2n47wFt5FNnCT2YdwBc7tRDcyedmqW428SLjRfD7x7bhyGsoma9F2q9BgTQshYDPjVX3CrqbUnW3YJCxQdZQHzKW",
  "key2": "4kTSYfLrQDxkhAFcJsYWcxirKEd8KJKPXVJGTkAs4KHJzSur7wpKiTj7hfXiaRo2SoB64tUkru56fYpSgJv4mWho",
  "key3": "8zrZz4t1xjTe9X4qgpoadhbhvjM11askeY3hKAZmpU59Gnv6qM955YWfYW3mWQSi1LiY7PLpzzUQYVTw8tSakTC",
  "key4": "364ywWwptRuxuWeph3AwYYpjkxckUKwhxLDjq5eh9rzx9az91sW33ptqRHG6dCbnHMB7ZpnQ3eYPy8XrA2WT7xHW",
  "key5": "5kAeCyGuxbj8a7Kx9xVhJ71q1MU7xHBEYgYJk3HQyFVhBQskVAJfCbMJbTx7eDqVLmTXWeiGbkd5w3ni6NGmu9n9",
  "key6": "4dafoGSrZWjHtgKqKq8g8TtX5tTRPiiz5Q7ZrHyL2EsRE8ffywYHTTB2b3MkCRgqbbCeQjcCZ431x74fnNJfmMQc",
  "key7": "n49Jv76rkYRfkkSqRVx29DxcbQ1kFL9LzfYT4f2ipn8hgrKn3d2L2VSzykazQNa6YWckgtanumZ5LdipcQNGeN8",
  "key8": "4Q6r7Fx5aJd31xxWW6vNMNzqCm27e5RHPuyuFaff8CjWHHYqqpB8jP1A5i58LVLuEPfCbSDCTLRsBDnfDm3kJPeo",
  "key9": "2vGTp5Zpyf96u2F8zXKNjhcAetjRrhVt7NQw4zX2f1CjDukFJvSUhVTktjH793A39yWSx6acvckAXmdMwwMojF88",
  "key10": "3tzPsL2NhZdX4KdoBshVc49R69oBLmduxzbbSFdFCWXRZWFD68jTNbiR8Y1yQeU7dy4v9DibQxVe1JUB3nB8RuXN",
  "key11": "2x5c4box8jAEZ199td2QRMiLAem6xLR29sEQL2D1V1RHuTbogMQwGGHyiUQbUhmDxTReNSNhJkyhBCmAjrKfYcCK",
  "key12": "2hiTzZbHUXgnTstzrTRWgEAXBZvNqT17xx8BYiW35aqZJ1ccbS4SHN6pjUAN4eJDTP3BgyjwsHcVQE4aDVix6tbv",
  "key13": "4U4gdk2YghmKt3tgNZNc9mCVnTYCavRQ8T4cWgVLkQrNncfLu5CnX9UdfTbnt2mJgexYkeCTm4jJZjLzBNMqro9d",
  "key14": "4C2qacsRKm1gaj5rgGAwj11LBMrug2x3ckHCdT9Kzd55t5XEovjbicUXrZKkmZbT1ixMpQoF3oHU5DVgrKT3UhP5",
  "key15": "5X7tdc6fnJpUttiqVbLF8V21sgWgbETwWdoEH29mVQr1aNLeJ6VNsMfZ2i8SghH9xzMb81iF9BzWBQyi2APvdPiV",
  "key16": "aV211f7zprS9raCRZPcDK8T1fsccNMJJHeFrdLvyyEdr8HU3j6rGbitu42jWzcBj8XrgNk1R1f2aHHfkAajFQpB",
  "key17": "4DrU71USE6p3DzFgEaScESpWK4cfjeJbDronAN9uo44dkRjwk3NCGsRg1C6bTSzUgRCJEktnbDgAP5qAAQYMp9ti",
  "key18": "4vDC8s54xbFEaNYduqt5uV8wZFRBgughJZXS74gdtwq3Y8jeWzeQk2h8JRhbSjuwNEuQ4h62qD6r76XT5Ti8qzYg",
  "key19": "4jdkrAg9o85r2ZN8eozQHmNho2XR837C19MjoXYLUKSXC8eCVZLbBjKaX1q4d39SveFHSQUaHUBe6BZnHT6xn713",
  "key20": "5w8CygnvrX3LPBwDiZXBjS42ZgMUo3DL73pwE4BeFmchKUeWDj6gAogRiuom9ZYv5ZyHbCEZwTy1jusUYwjXrg2X",
  "key21": "5QvNd3f74JxCxJ9pdHmkZotg71BPBB4V7eoRmyBufFxev6ShLa45rThrDFXpfWtgSdcQJXpamKb2aeFJqeM9qu1e",
  "key22": "2FGJNmSj5ihpDbtJoCiASjrCP59j31UbD1G3GFpEyngWM2KyTFyBXxhZC4ibVF4vqBtpBjZViHXC3FdEiYf7smo1",
  "key23": "4XasmwsJU54FhPnMCVYCbKjyMbP7seXaaVZYun1du5PAmcfrmfGVm9yKFWDeHhi3ShoGuyZyWPjCWipyneBPZZtP",
  "key24": "4H5uXR4ksG4DKrKA2idYTwDfB2xS7XHuvhwAi3uuLeBHTVdzYGg5PEK5QcaY6DKqEcAUNdGQatnTjWKKiG88AWZS",
  "key25": "B52Z3znSCsEbi4AgyCkT4kpZ7JcnNoaAeimg5jkReYDz3nYbR7tiMFXExTngMqDNMNEo3yLVFC6KExaoT4eiLHv",
  "key26": "5eF4HwnDYfcCbm45gd4LDrMDGut1ssrqLrrXj6VYNPtmeSgaDfZw8zDZUWhZpdm4jikFfKG4bidE6VvxSUaq1VSL",
  "key27": "5uyjDAqd2AMnokot9EUifoVHJ8QWmn9umVjsWLCwBer1NYbRGsaa6KEZdTqUxdMTx27YeVejZkAYU7FNWHRM5LeG",
  "key28": "2KV4o8siU7nNuCLxy9E1qkVvUYk7zRfxW6hENjHu4i8Fwm75hjKWweh3gvgrfYbHae1bkzKQBRRaAVoMSpHvLpP7",
  "key29": "5gkLnATZ67Hkw1kdudCxhrJ8nFAeWQPXwF3oSGXN9gSSJ3Dg2uC7S7PJBCJELkPqXr3APbVKmUzYQwgn4JftaXNG",
  "key30": "5QYLNtvcybGe4kfkSqD6dw2SPqCdWaFb6YQWCC8CozgQxCDf11tYegCDhddvDY9ppEiLEC49bgMB2D7xHwJzafew",
  "key31": "nK7wfpN7RqHrnV1qw3sptViLqZybvmBC58pcBBqEhoksCDitgdrsskbp9KKzpHxJcmLEv95ZAytyRs8qJGYRSKH",
  "key32": "3i2hNV1Nr47S44oBK5kjUAc45vtQhiP2GQVxgq6a5ton6BCQtMfBtfDkS3dougBvA3XKhtD9qEPXcoqNA4eRQHcr",
  "key33": "ALYoNwVPymxiW6gp3E1eZBTbDD6em3HVRWh7RCCaJte2qfNXc8zW2sTLQbDKeKQafetf5rGESbw2s3bioS4bKKt",
  "key34": "VXGmNriUfrZDZJmNqSvEcZcdpeSc3jpfym7L2EeABtPGtXDT5umXmHdK3WozbiKGARwasxmVc47n2TbxAz8xK2M",
  "key35": "uHocqQJ5fPn98Yu7krK8bdrVXXgtDHVL7cZtDyBQmr9rNxCsttPiv8bMnyVCV8JypJEAGxiYZpK7pkeMMWTtfKn",
  "key36": "42kThUXuM8ACxdbpNsjEuf6RRoRESsFDuTeGWo1gK6P3QVG9RDsFZksBcGTaxExQbFusUXWnv52oXWbW9LUuJN3y",
  "key37": "2PasUZbDaVshGV2L4LruNe65TzrDZNG8SofAsPeDBfaVN4wNCKv9h5Q9WMoFVxwhLQEjQPQzAKP8rJJkdwspzcJK",
  "key38": "3GGE1nUh9YTSicUa5WVLJf6XJ1rR2gEWAwq5LZCnCKe3cRot7SPsCJouRmAk3aQCK8iLzxDtXZVmkqe1Ugq1tdD4",
  "key39": "3gsyhx2ER4yKEhYzzAUAQmvjpjFysPgu9AMpqWuqhUgnyGLr1hbvuggq59SPdNGuKNj7XrwawEqgEGMwNBbhKQ17",
  "key40": "2GB9skXhw1rWS8oxyptbeGGMWCGBUEGcoXpQQWHw6GXR3Usczh5igtnWfCDHbr9PPLn8vyhT15Uh8GskFroSU8wH",
  "key41": "2vMpWSXT6ZJt2aEn4NezkXK8ndsDgQiSk6a2JPd4PQLYjWLi8vkZCyTSVwibTGBQs2xp928umCr4cVbgA1JizkZ2"
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
