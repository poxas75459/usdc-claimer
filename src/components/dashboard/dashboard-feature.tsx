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
    "3aKUawsQEZ8E5MyM2P5PRhVVBvGahUpCQZSD6ek4twVNhkggyLzDaTMqe9LqHeQ8c3DLCThiwyZFe8HDnjQudBu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DT9SGxWy4MGYCf2sNSintrz8vAtjHpKcTNnYMeXagEdzHPZCCRwtQfG3GEzZM1xwc68d3jVZ4Sya9ma4FBx2uSE",
  "key1": "5xzufpypfUPYYmdkZe1iz1QXm2zXo9aBpNMXbbP8mMePYDuwpoCt2iTSGQSwdpwTQYeCM32baLZpEW27of2X9FDn",
  "key2": "xEgweBZnGmWjFVWKjdDMuGDi7RXJrzhCVFvzCpiu6shDiauhTWgPVmsG2PEaq9DDaoW6VpTi3yAY1cBXiFgV884",
  "key3": "2nt4AWxPwwpv6RjMtCxw22taFa61RF9xftdfwDq3fFf3MUjNUTKtvSuFf9qy3xmX2mZh7JRgnsSYJRY3b6zCAKiQ",
  "key4": "3Vvc1cjQkj9SCqGx2DCEKLDGybtD1cSXvz3AjV17SD5bv8q7n5jPZeoYHXbn1hCiQkrK82BF3YdYhiYMYGt5Z2vr",
  "key5": "5c8UYSmADRTHx7TA7ZCv8dMG9fxzcPfaz3iDhb7eVDpwpfHcmZN7cZwwbDuLENmW4ZDhVr62w986P6FXAC9iQ86e",
  "key6": "44bcNr1AGkaZZZUyuxhDu2v3tZkKntJshvWApMw6ANyi16TThd8LcV34LPnggchbttmTFsWP3Vz9XJz9AkNfBTRU",
  "key7": "3HZTbZK6To6CcrfQWRuFMWx6SUErowePSFAt9CQJ5eFMyz7W7aJvEjrd9zWo9Z8EmubfRtBvsoAaD5MYThc8HjeE",
  "key8": "4b7B7CxikpAYAwe8c9KgswJz6U7iM4W5Vi6n8he4HqsDYwF6HfdMjV9gvWGtsa4MAE6ZHK7uSGFj9zJ1fu6U3Vgk",
  "key9": "3uLBAFFH2wZ9xUx172X9y8pa6biPvJAQt97fL2LfTdzt2RW2AeiAUoVdp1myrbaBFVDSfYsYDvvScUzxKj9FuhkS",
  "key10": "TGw9LFDm9osm34yJfc5WYc9UssWLDxwPXNyYyzSEbhPCiK2BrwRd6z88Z1q6Twrvk9Q3uycCoXwEJrtHDVQ9mzf",
  "key11": "L5dDbV9SrZsAUvqdzDmdcybjWZ1PR9oMYg49rKroe3QxRkRRdDrwjNrdMJyZ61bA9stKFvXKxXHKetCm9e5hUmA",
  "key12": "1pPBwmWbDCZTBCD19PH6uUqVbt61SoFaTNxSBqsFP7ediw9GUYVkAW6mLvJN3MZc7jaMqe4UhSmqZHxxnNTtJjz",
  "key13": "4jUB3LdpbM6adHnjy1t4nxvErHwTY2N8zLP1CgGXWRfPJfcLPNysd17VL8wxPWrUZDa7inMyuuXTc75HXRSTb1Fr",
  "key14": "395DkbmZ7AueUCSbGEdrkhJtsGUM275HyWyBevkg53hJMBJqydz1KQpqSD1tWYDRoDoWqSWUTVPh4dvPTMTCt947",
  "key15": "3fZwwz7bzGWQBbW9HDRYMWZfDxTTbKxHT14arMcNhSFFFLdC6y5CSNbLxJHRHGP8r75N5kR3hdRFBKVkR5dKsER8",
  "key16": "2Q2PQ3BDNVrQRZMToG3Qo7S8kCVHntVEAfaqzX8F2vMPwuxR2fpn2BQ5TjvGEqBLy4f8aPQJ7cC5otDK6ebEBxTv",
  "key17": "2X8ad1fQotqsCDgWDAF2zFzrToUPaugHR5uwrnJUd5evUxsqa3THW8MKbCopB4x8Kt3XURW9GY69QpSjVeVVstuN",
  "key18": "4n1rYkfBDwtsAYtn1Ev84tvriUZHzYvn4fHkcSNFBfAMHcrghj7xzXb8743k88Eg41vHk1C3FgRUBMuuaR1467RM",
  "key19": "xuN8FVGZjGUbLj3bSDmg17BMhiRvRUnPozkw5j2gUkx3G85v4DEBohEEAfbWXtqrC2DcytwZgrY9MeAjpDh1add",
  "key20": "559HQKCU2Gw7hDqGqMDyYctwPb3szWjJxuqbXDBPf4yEkoFqkCQgUbDrT5oiLe77ntH2Gnpeai2M7XwezakguQoN",
  "key21": "3USxgDfY9XXNpmDZqrFvpVydouq43srdTmFeiyGXSLRaW2LRYhVtAX1xLUwp5k881F2ZsrXcwqAg13fPtfiEq32P",
  "key22": "3VvgQ3yuHeeARG2dfrHvtfwddFa2UFQ8yqvV6uz1HVHRdzXiqqhov4s14qBwDPBwc6be3EojzDUo85d7c6RFuqtz",
  "key23": "5EcP36HTn8KxKpPhKaWQhAid5e9raYWC4jekcDNTQk8hwFf5Qpxzqqhf5oo3FEKUtFMBPnkN9RewjrUzTH9vBKY1",
  "key24": "48yYPWipQK9VDCYYDAEuvfew9BUNSqaMg5DoYCzhjnq8EyLhCZX99D2EuCY7PhaEKvXhJavjRW7ohWGjr6ADEjT8",
  "key25": "3K8Sf5u6f4rUqT2sCkXNa7ijohDH3waQuu2PP8cfZScbzuZ4gzHmCLoUHmrzVVno77CkhBE7whxyE1NaghWw8ZTf",
  "key26": "4F1Doi1AzmPtNoUBx9dD7moMrScGjvDFdoAx4e5GxENr8J2GsFvoHDUSD86qQShQAF7odhxssDCYQvjKsQrfX2NT",
  "key27": "5UzxmFFQxF8NvTVfzmEZdaTeVKGKR6dwpzS3bjWy3gUfUQJdvYL5igaYkT5dFMhQ2iD6iXEyKBrxWmVTA6fasCrA",
  "key28": "4rkAvsmawaEpD89vLnmH8KM2SC1PcoSNJyJk31g8nycxDj5EPQVdrAh8nnHHpBP7RhKJZVJpQPRmGwzcsEJcFWMK",
  "key29": "5Grq6b3FTxMFftxLQc4WomNgCzpg6AhRcuUNEx6NiAJ4Q8uimpABU33ZChqEj2xV4CSuHH8FL4NvtjhWBU3TS8eT",
  "key30": "4r9meNvWcASE2SGy2yjXdNhUqJud7XDXMv8RL8SWMZ3VajgjqX48T4gbx2VkTUXpWWuKSfvLgqJvFMpQ5sUeVaxS",
  "key31": "4ha1UiTravenY5Ae1gphzzo2XJRQ3qc3LPzwfBy5yKJmbZ9nH5AEhEnX74aTxgqMJNG7ry6349NeJo7WP1s8erXh",
  "key32": "E3D3MqDUy3J3wYWDcfaa9NAUjgZB9QPwDQmP8Dxcv9dQygNSKsvvukDDxQbTRwoawGutSKUHkJLKFZsHuXfuNXT",
  "key33": "2x4LCWetLpJMQu8Vtj8RasyZrSz2hnSCZwYbtbBa5p8EUu4qcSs6BHshM2LLcdiGuTZF2CzpJre1qiqCTML7SHvK",
  "key34": "4RsLBGR8A1LWD1927RJSpuxnKy3jeKp6tvWKxiKU5TU6eDuAZFDM98pFqud7QpdwT6nDUZjxc154w74121zkLUXM",
  "key35": "4Vf1Ebi1hHoFKz7V3mTGLRvevoK77cR6zWhH8MvAXYYr6a6WVHgSANmD3vhYEBcc7tBuXjDMcaUqtiFwhNMamTz4",
  "key36": "5bxtdPpFGz1rejdbH8owL2BQ5ogDXBqfx2L7n88ZBdya99oTfj4kFdhBmP5MdBsMUgMcZRK174E6CDZx98a1Bhr6",
  "key37": "31BfTUwy9hRssX8FRAvb72soP9KMsZP3bhinMez2k3UoBNCnC4b9g8bU9zZVezMKZyXZuMbiXJEqXnu99y43FXCM",
  "key38": "ykAWDbbaC5SjggFESvuW4jxNakQuBjvHYNAhXK7g6JM3qNW94kXp8F9H72eoSfuiBovNt2jLNk6gZL1K2BRSSUH",
  "key39": "4nQkuo5WfWzDtiNmXtcbQTESrKiA2xkTZEofw2kCa2giUdizJNBNP9jyhJ6hnwNCc18BrFqqxqqYxMTZv7Tqd38L",
  "key40": "5tdFtGsBxHD2ZR1GMiA1ZKTkucGqCcAPCHtg9DVmU5vNcVXHZkMaFiif7zVEyBPFethA4xVmsfshSc3J7b13VG8",
  "key41": "4XGgqff9EQksJqg4Kdd7MHSoipYyZpyFZiYMVjg3XcvGqmoGMdHWPCtCJrTABhHLT6r6cLMFX2tC1Wm2ugFWYGeK",
  "key42": "5DVUHt3yuMsC6TdgKZEeLTVDSCcqfa5VMN7tZd39f6qkA8XuG6Hb5QepcqxNrbKmCU24ZAuhXUJ7uQhUcUY397Fm",
  "key43": "3QLVvxFKXHxNKd828frCmZEoiHqyaDTiQs68XLjtmMxK9UAqKUk5E2SDdVrW2MbKRCT584LxQ7PUycNCGnT2a6E7",
  "key44": "5XTRw1fnMZMuhyXfFbeL8eYAqhe5ScNov4VFj8FR9U86bgZao7MJoWhJnQ72DoAf8Di7PzADgL1eXqvUmqPptVoL",
  "key45": "5w66zVhyoMadqeju6tkFaEbLoyW3rsey43k3edpzcWm5L182pb5VxTo5ZLdtwXh38YBjuUQZSKywz2mofzGsfhu",
  "key46": "i5ExWXzTeAVVy9rNKvYi3Rd61LnfFLg24V1V2fmPd8bU8DpQ6QgmYtewUQSEjMmXMjy1sW6tNjg2BotRgbS5FMm",
  "key47": "5fgbGUUJzY931JkryCQ1ySgeuh9b1NUZnsRezgPqKPTR12yxUQmqu95Dd3JYQBxJqeHJ5VT4tYxCgmdrj8ZDftSe"
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
