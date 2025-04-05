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
    "kmARUqJXf3mGUvXMrcS74S7aDNup8LDNPAUsv5szXr7m1MApU9JcQsLHT9eruBJMZhLzgFAd4WD3ctdT3gjT81D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pkgCaV6QnaNtRb4b4v8Q5so5griPi9uTmfMBu5V8mNbRodRskSciPR4zDd4hwteVf3dQE48C8xw2Fa6k2ywvHSs",
  "key1": "4ift2QrPEHyFerrR3uGkgDVyC83bSqDK39Q58z6qz7sEUrA73sQetSwLC6hhRYLJ1SEvFuRQSauKHQB7XHKL31Le",
  "key2": "4kGgt3BYD5x3dg7sij3vvo4frxEf4kNjVJfJsLtGq1XyiGQq8R8Vhyp9EaquhpdvTviSm2uYqVRNUFYfiUBndid7",
  "key3": "3PKk1qYVPcx5rrpsEXLXZtom8GQqCGiZ7bxTSBbqo4Nzwr5DhHFgGk1kzsfyPfPu4jvEr64i6zm6bz5DoQHiLP8f",
  "key4": "5k58JmrAucZMM53UsuK2JdoUg29UVRmrTDP27U526em9u6Y2qKGFoWqb2iTWH7VAbPdAFSERtp3zDVTjuv6W8SzV",
  "key5": "PE5LXFS67X1BPqhwwNxHWv43SAq5UfDTQWKYupjuKeMUkABjwr9aeFBR4JYgcwGKGqW5e9aVpJQDtQFnxfNgtfn",
  "key6": "NDviwZJ4S11zQxnbXhsKbZGRqbLUARTHSDmcisM8KhErgFTdGpHZ1Fetg5LfkWtRf1FMDgUe4spddQNdNqGY9gM",
  "key7": "cGdhc9Cn4bdvmvTbx2qFWboC6aABKyALzR4Rx6ypf8QNnUKStPhnEmSArnZBtjQ9raWTtpif45yNfKLZBXbF9oS",
  "key8": "2bCzjo6s3Fuw86dnbqhpNjTgR1AvvVgZF2GuywhfqT1FPaPZPQJWaaTWXe55TTrpibpmmSh1RytzNuyVGvjc2han",
  "key9": "CwjX14d7CsjRtJEkGdEGWdXr1eNRwYPA8iodJhumVVgJqGuuPknm6YPETbcANzzNPHBt7u1YE8CpbyAudwsfVor",
  "key10": "2oTX2koKeQFJm6ZgX7qSeFKL4qTvtC7YcGXtgWayPDUWR1th6ZP5THQmDm2t3WXDTHytokEUnDYbGRdg1biUuiUS",
  "key11": "3nPPSvTiTLfUDvge8oQeBX9C6eWXkaYrvdTT5LW3ByrdJLWJZNCCbxg8cenD4kmfSCdFxHcm8nxLHX3yqXqRMBqx",
  "key12": "2h5ZsaHYMvNzCejHwWY2L7SVFrCHtq4s3CLbfJWtiu7efkMHVps84zNUEeusqc7v2ZT1TnLsWUGbrbsx1tTiV8uL",
  "key13": "5yk2Wc1zjqY6Kv11SzAWjajSACZXg651KrPkNCKXfWgsaN2HANMAgGY2j5A2RZg3PyDAjPQ51yeoGnnsZchHtCUo",
  "key14": "4ZUfoNS6xcDToZaBkuUr8V1T8Fog53zxXR5z9i468w3jgDCtDrVCmvTBXrWHwzPUbrRhHUjeNJK4iy6vAaW984xn",
  "key15": "2fzwwKCUTSTHbK2FmWiiMkfTkJeYXKjV8FMSs3yAKmMjZDxGz6xtPR7XFDc6NUQ9gV2pUzrEPZmVEL9rtExLigyK",
  "key16": "2mJL1TijhJZBCpPpWFhLj3fesYkuM5Ej9Fqwe4HJFvo7UEC4QXaae55mWofTEY51hv47UPtcHRv8uko8V412hh7H",
  "key17": "qcg98BsB7CETQvZTztA4MkG6BL5A5jtTvuivPPEdQcmxhB5jdTmRJgr88iAUj2Etitfag2anyeCrUMuLjdBiS7w",
  "key18": "37xjsf84NR54KHeyv1Ym5XE62du3W7XsBwbE7ygJnTd4frnhrQZXT5Qj9XbVn1bxixwwKG9kEva7jJZjusNCKB4a",
  "key19": "3n33APm91LHJwEBpJN2wEveZu3XCst7TPdgHJn37AcqBpagRbX2ZK1pkp4q4hkCuCxLc1ZvrX4KhKmRgt4kBdZDD",
  "key20": "HThNhxWssKthFNfBUGQD9Fectc6KiwbKkuTyahbwuyxPQcZotuVbNq98CZYp5pNGeg3z1bRZ5rxZKKA1KcGPAdJ",
  "key21": "3UNfnNKmpNGS6ecwDjUDFGP8nznsD3J7dAxSosiBVBgoHvD1dYsGvynsTF9oT7TFvpQ2RkMuyb84TZt1bxKmw76J",
  "key22": "2WR21Wdv58SeqgVaVPiiQ4femmMFQ1TfrkQHVe7cdBx6T6QxsiA7eaJHkYwTMim9hNigARdmyCE3vkZeuvS9VdEz",
  "key23": "4AWovTxxaHuenPiDemWtsi6h1HdDtPq3YgPBxkbVNWHFiw7Vz9AUL6QnFaBXvcYyhV15SheSuXm7tXC9qkyM9Lsr",
  "key24": "brZzJWhRFm1tevna1fGkgs76U7KfQqKxkE4R4M2s3qnH5bAJVCQxRjrKp4hFocjKstG43nqdYcDC1c3x6vjVQyr",
  "key25": "52vYGb4HwMUNBKcohCkBDY3vA9HDdgrPvaBDh8vyWZXWw7KXsFTW2Wf8PkM4ThXohzPxac9ne3Eb3EWhHtzQY9fy",
  "key26": "s4n6qr6UFvNryctgmVHAWBMurw2f1KrY6S9dqTJfNWFSxTSRJCZKhhqUJErqKEXjUQHANL1FQtJQDuZRpx2Jjzv",
  "key27": "5ycpgAtWp5aFopuv6qsJUts7apwD3qUcD1KyUerHmD1ouKeWbBAGZwPmxzAKfyxMYBchxhkpxy9RQ8ZChK5y7Dzp",
  "key28": "GHNK2S9aXXz2dgqRpodXzqV53oka1jRTHhsi2KETryLrGyLkTjPupBPFzgBDJ2KojSnHFD2hg9XTWHEu6pQAk2C",
  "key29": "8WkGQofAh9eBJMHFRpgdhTtKG35WodVZMh4h1aFWYQTzVTogNZzx6KbG3LRrajj4BvbUGUAZdqwh2aMZdPSsQqV",
  "key30": "4iw7Xwz4D8DkjmRkmH4oU3KLZ5Ncra1KZ9XWDmddioy6V7KnQoYSwXGvva8GaHPZr7P95PNKozbwBrGo7ivsgFAE",
  "key31": "3DR4Q4icfDT64Zy5K3bwuvdUt9XqqZZbnW6fDpgqoDgPA4M3dJHMK9jVucodbVHse9wRTJu2iq9yb132H48Hfmdq",
  "key32": "4j3MpRA36Q9ejo3QevAPA3HRDw4Ah7oQABzBSTYehZ7p39dAsnEnbzf5R4f979PWrFHkYobZx2W714gH9xxevaR"
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
