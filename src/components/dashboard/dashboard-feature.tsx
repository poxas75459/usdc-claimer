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
    "Ex6ZcHmtzcfPiPSZFkcNT8eBh8wr6Wco6YVvHaCeSqNnWxXwFm2jqChFxGYsg6RPvhbrKj6v3eXtx6DyZUkzDEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j73df8F7pukm35XEAX8t6BeSF5xeVfchRE5QFqRRFbqNdsJwYgJCFYwNgfHww8FD1UgZycpaDRindULYTgzhfMp",
  "key1": "2fzRPgYhrQLL18bqsKXZYzJFj9oZsnU2pxRdjCJptSqAR1EyQCVo2Ae2hkSuDxvZzrsaSXipQpSpQDawAtzykvHb",
  "key2": "4bL6ajPXpnFYwZJdgWjXxWECh8rDSKRMKz5UsetSrXDHs78riDkbtQw1uYhJxUMg8DETZrym8FPoUA1b92WPT6tM",
  "key3": "56WFcVeHuyXvabuPAPzA8Cnpg4EMJ8kdK6WzHQBeYBiB3UkH2fDFofsdToh3bySW9hs9QEQF28gApXgkspDPCTng",
  "key4": "3PAbSYiD8tk1hx2xJimx5HqjuvQNf1oBPMbKoEU9As7B3uwwCjtd1EKyytKtiyHBjJKXv98VfFaUzuRq8EkDi2GS",
  "key5": "5Pij3ywmjFcA17UdTE2GVEFf2XTQwbePod2iiWJSrsBnW5VM3F1rg9ghBRnjLf9YVUSctCpvffipLiwmHfRvrSpm",
  "key6": "5Fnc9QZJxb1BEMuoHmcqXXNrJccbfvrLDzZbDdkvypb8sL4YGCT5DeaLBWvUba6kNHTs2mJ9m2eAvWw66VTXJGLR",
  "key7": "5GXNHiLDJQ4MncMfZc7cAkTPHEMUQhUYzZp7imswQi2nL1T45Lkzft2hX6RzJJ4xspaVFSbLDYo5gaz15V2BFUcZ",
  "key8": "5ZX9QN5jmUGiCEHE9brKytoLccr2Zdj4nJvo6crbYz9CS9EzykS5rmcvaCVA9SXKHKVT8NEXMwwW3vRwFr9j3XpK",
  "key9": "7fAsUGH93ye2tsz4mkcvZzbn5S7t3TWs6TG9m5GDRtskbBUMB6UqNLGgd4TabBmRmF8tBvk1KW9j9To6u8xB3tC",
  "key10": "5mZxryyMoa9xC65dmdYNNsqDe5G3L5QPfcdv6QxAE6pVuAXjXdbdyvK7in2c6CdoXh9GQDTKawLbfKY1aifpWR9r",
  "key11": "4vuvS8vw8SJSpHkw7VRrQBXFMkRFFSKydSUvbYiEn6s6nWYWEhLyDtrY2P77PZaFKTmzkJaAJmF4Gby8g8tSY7xb",
  "key12": "5eNuMmwEKVzgBCUHKAwCxR39qTNy5SKcoXKndUnsJhcyWC1rdFd25NcTVzkWW9Yo3zXkJLqXV23Ena6vtoYfoxpo",
  "key13": "4igrWbG99aq1bfRGr9x4ZQ4xh94USDSJnauLHvpAP12ez4txqRwAsbyJvSc7pmyjMoiHUfHhhGdAzbSQBYciioDd",
  "key14": "4McLyQ1VbfYJvyn63Jm33nkFa9oBfuPBpgE8R3GXGZwPA7e7JTJbZM1SmsUEa9KHHc3x5z91SQTn6HAEP6cyMXYf",
  "key15": "5cWtaGB85EkPtqgV3kXbk5Qah7uNFqZyU75z95eoTqErJ1BPQHYDn1v39vHeiiSvRxQQJoFUbiGcNM6tkgqowiHJ",
  "key16": "4GLxM2wgMDKGJcQ39DQVYAg41MC38kP829ohA5dy7iJ1AvnA8PXGwZyp3kyySrhmKVSUaFKpJQsYyhY27VQJWNCg",
  "key17": "2WDRrrFZAU8dHQB6XKLs3AYSf6JvwepQrz21snBwR4WtryK39TGwuHVnGYrW769w7UrrfrWpta1GSSk6MSoXsL1g",
  "key18": "4NcnHPMG9eM5dyQtsELmm3tFp8NCSHiCchpAHQJQAji4gmjNbjfPwdPPzr26dg1SVD95qskbNQFya5UjmYDzN7mR",
  "key19": "3T3p2Z1GkGqjorRFUFvcBnMgMkcwMBBv329uC5HX6ahBWt31AMvQhvz8PKr9k1aTEHetMej86mzu1snUF32Hmyta",
  "key20": "4C1YH5ngWELiG7LDKeVnt4GboHj8mgCiqgxvHn9jr1rcGNXZo3QkvvwZsroQ7LmXYGCePDW5LGmWr9k5jhV2qVSy",
  "key21": "3J7utm52zUB1NnyWwsk7vwagkJ3ddnfQr5nZVpdtmiRb5s9YqMeBYp9zGeEMqvmmxLke1KH9hPaNr7JNDTv8XWtN",
  "key22": "23G5gHGtPay1oA4JyqGJhF8taZULo1biHdJgeFMNc4zc1M3DsmbYBeJQsQqeqCAuNGPyzs2cKJosbgogvhmFZYjs",
  "key23": "5CxUcCwy3M56CSpvW9S9XkHQD6sMp9xDkHeXX9HQz7KRVNAohUY6nofxD3KUm1w8rR1fbguxiu4jvEaRy1JvSYUZ",
  "key24": "3u4JHfqTtg5jqHR64LSR1BAZndVRHkekRzHC24paqwUBb1Y5XbdEHrmhasEQ8tqbwvFnqSQ54VLgKkwW6f9d5jpn",
  "key25": "4ArQhUZkkkTDQWJ2CZUQ5kmp6ApjUbCshA6WuwkEy54KNMkMXGAPJkoYegD3Reov2g1JtcEFe4BV5rUBu3Dxtpka",
  "key26": "2zJWXsZWwKPqtvEDZ9YbUMphN11MEXsuAPqZqdrCazQ4JXgRqhYgebiJP5MAYj8UUAiZPGRXKxdcfu6AEh3yXdsH",
  "key27": "2qiRkia1PFX3cxB1KicqLY5dpyLvbcutijGmQJtwpqpS1zJxUsVkbPWXF1qYKaiXmbXhaW9mGwymKZJ7UCLCX9xu",
  "key28": "wonntfPo4yXfTuJ4hCFmNtck2ttuSAAqkC62vxRBp1krJN8J4fTXWKAWs5iu9xvNcXCri1LoNRi4s6GySV4Mkfx",
  "key29": "4iZcgefsQutpei7LMXyRa6G4BFCMd2UM4nzGwDLLuc6L1WgiwcPKXYeEZcYSqmxB8ypeCjGSjWJCzw1v3Bx1yNEE",
  "key30": "EJ9QJP2y52H1eyoYETSDepAgPsEfRBCh2fn2QyfwP7jFzSfPAAdUFUqvM1NVRLq5e28BdRKHGCEsjJbBxUXm5V3",
  "key31": "3rA7kPk75q9JJj8ua8RbRsvSCaCeN1F6eESRGDhiReorfxBErSHYR77ZXPg59VTdUpXgq2W7cDRCVmuBB49i4Yyu",
  "key32": "5a6voEfSbPKy1e5WVRrvneDjzT5HrimYsKmHtGLde5eXMqj9vJqZ5CfTjzcxZsrytn1mCqiB9nAsZ2BUTHSX9oGS",
  "key33": "V8VLhEXatDdH9jJGhArTFGJCyJEmwtPg5NnHBLsDAhyQCU6KScHAZpfN69Erkn1k7ds6bjVn9nf4sBZkh79RtM2",
  "key34": "374SQQP5YJ6c7cQw5s4hP9z1EqvN4csRd7V2EGY2yM6JaqjBLrBWNVfmWBxUUYTcEXYUQBgrvD46HNVeYTkkn69R",
  "key35": "518JMzMwHcWg4oMFpjDHGsk5NiqbxyPfXjcEtZqCXsRmgdFA1noeyy3Gbyc7MTYazzGgeaxYHe7C31NF8vApBofU",
  "key36": "43jkZmX7At3XnfNPQ9KMiuUrKGApqoXjg3kcTJcErxFUy5ydHiTJ6hi9jVwd5ca8DnWwh4rrLyfCBUZQcSrgnFkV",
  "key37": "2tomhdVH7TTgp6xQTokuvZPXaEyRgqu1ZaSBg8awugEvs1YZUgTnvnhiverW2rCYMEobMFciuz6whdmv47HXNSsM",
  "key38": "4Qzr1QBTHUHi5sYh1btTQMfrpmSnihTotnXC6D8rKLqsfifxUupFHXTs2chJwp6dKina9h488DqxxDHnKFQoaFUJ",
  "key39": "ZZd8QsX9iRKRTuiw5Q75zgyXiYJQsMYjrpCsoG1NpuomM47hMwb4vmR5SL8Dfs6D9StXmri2tRhwfw1PYvg2eVK",
  "key40": "2DH6hhEwj41oWS6NHnbcH9VzmD9xg3WxJJUhwMHuJ7uP6sAGGndvFFcamhZ7jum9iiwKbhkK8buWWvnXYgMe6L7i",
  "key41": "24Zys9oDUdZgTZ3XQTMKDu7L8XKVkcy1FHTZaYRAZi5NQaTqsBb7bSQP526RSR7MopKjg7FxYDP7rBnfZSEnBiX8",
  "key42": "2NVNJRG6Z7bgkEJF2UWYabycQ2Fb9xNj2W2sMJ9efXhJDV8quszWnrQZHDSZyp74cSZLNU6C6ra16eK4ohQRiXhS",
  "key43": "4yUpJ9Rqq2eYkkJfUQ3a6vJyeifU1sjcFdJP4WAmcUBh4Ufuo4GoReZBzXyKwoeG419NBZ4bmZR5TGaVqshAvdnB",
  "key44": "2nYEaRoMyWsBgPQ89mBFaJYpBSr9roUttkBoLFEZYufVLxrUbxN1RBFzAymtQkhL1GVLStaA4hx75HCj1uQZuSGc",
  "key45": "E3fdEMRmmAu176gXMdQ7i35hFbk2AGv1tnMWbsCtSTDTp5nctz4pPTrtJVBhQ3qXr5PTJmWNWc7Z9fhQecKB2JM"
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
