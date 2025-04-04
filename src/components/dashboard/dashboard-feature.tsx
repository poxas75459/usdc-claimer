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
    "np4sTZyK5Hdi7xatpavWKbmdBHimc4UZFXEDbxszqgdVJxYGDvC3CHFkCp5MZXLekNs2oE58kTsZRMFZ4kBTpYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K4BBTNwgGQkptMYvNL5Br5chr54bcjjM6Bg8JY77uLMZjgtGWNJgYbkfV9gvfoKQk8baD4BqdnaqfdnkmfhZSH3",
  "key1": "4LzvDp4wfqdj9uJA96mD1YLTLZbhLdHRXDEfxwa9tEiF8HhBs1GZ7esmMKPtoR9kKKyad6UYAThQ9F44fNrBvESV",
  "key2": "4c9eHEhDFdtS4sN2otF3hj8dhLkUVPUn2CLj8knj7jiNsr92nhkWkCwZ793v9UEpsGv5c6btodzabkt9UNpEnr8m",
  "key3": "p9RVqQ41Sf7KEyqjNrFLxR3qc5WnVJ2whRLmk1M4cEQJXpKfzDbdvuUKBexqNASQSkYSwjoZVfjJCLi88Up5PHC",
  "key4": "4UrY49A7MbHb8JBemLMSdUBqhWaJamwgsPgqLanZukFdtv6xVmpbc7832wQHU76PxJfpF8FPEZMXMvFkN5Kgsmqz",
  "key5": "4EcCBUwArvVtyFvkVTyFzTZvXvpXwLxmVnZ1huiN5gjpK7xPkYVZXRSRoT43qMX3m823xcYDHyYpaiDjJW7g8wNW",
  "key6": "4NB2fEKhyLEAVvuf3g5U6vc78dTyDS6ftxSfLdqSDM1SgNCQpdNaqhiPHz8YspZ6J1Mvuhe8CsueWBCmbLgnT48Y",
  "key7": "5BX9oPU4AdH6yRnS47MDksF8fWAyW5qyHeE5Hybqz68vaaJbqUKV6gDFQ5dAbDv21kphLK1T6GcsJ4jU8pzUmJu7",
  "key8": "zFS5d1ywXjQ4V7KnLhv9Ebpm3T1KBBQKHvkEy8mGgqzpnnuR771eFU1cjQ5v7rm4rxVBhQesKMPfxhGMjKUySC8",
  "key9": "4iY6Er2bnheh7VP9hyB8NGmvLQFMKSJGvSfrkCcBXyZwf6f3nsPnjD2BxxidFU6VcVZ6kx3jJjXYNkzTNf4wEAz7",
  "key10": "5d9AgPtLT94qvVySBxzvV668R4xukZPF8gUq8BLQ6gG7zQHnFhArQbFMZSqSYPteFwMij3bmfXiCx7YvuyUnHBuC",
  "key11": "4feoAYoMfVa58JSyzkkbMcZo8HsHipGZAMpXyLTp9PYdmjFc34b9ntfyxF2P6Dz7pidhBs7oFHdAx23W2Wb1mbnN",
  "key12": "4Gaovk7bq47G5mRNimCb3yk8VU6KCVu2Hrfsnbq9LXSBpAKQsBRqvqfyMiWTd3yboGZHNGN6VoHE5D7McYX5EfQh",
  "key13": "2bDFfU7VKWZssgV9Fco92a3whsra5EQfMqbhshjBgC536FhgPgiPgS7G9sW2ix1D25a77tofV3sFTquedtfXeMw7",
  "key14": "4RGYq9Z1LQpqN8PDAA1YukGv9zWu7wdAT965RVV3rZxDFM2quuxYzBY9iUQWpv4KV8kY5Cr5dcJ4tP31U8XToqYi",
  "key15": "671xfDfCRjjoRBL4AyVuvzHk8aB4HcwYt68EgwJekTz5zkMkSn7u4TqTBp8Yot9wyLHQMwemf4RiMWy6XZc8QPC7",
  "key16": "3JfK2eujTu1Mqw4QwcnoGxCv3Az5Mg8WLGCTqcJAGBgEurwCpyhoF8EQjNZk1hk6kG5FG6RLCekrPrTKjSWjobLP",
  "key17": "43bUiHpAjWhdH42Ye9vA7wsekPbDdiZy3CE8EHjMtVw9NYMwJScjVh4aHoqXJgQhAMzPeA6S12N5ENqNQmVxdW38",
  "key18": "54xcTjaDFq9eeKZgWiionGfJXbPWG77ef5SbwyLUpoUa5pehYU8DTwGzJBdjuwvabdK2rw2QTHKR8m2K7mQ3PyWr",
  "key19": "27gMbFDx1VQtLJAYZQBm7mvJu1GHEwbavjTxJ9xmDMSStGzpQPH9h7ngZSK8AcJyhhv262jtARsZ9BhaRhRch6H7",
  "key20": "2fCPEupnReW5BuQrRs4WtxD8LJkGy6QjiDb948sQ33EZV9QEfLrWEt9Lmjps7vtzHPXdnegAVSgL7TkFkChTM538",
  "key21": "3JWXvwyz1idLgDVhYHPFmHg9zE5cwh2XMz4ezG6e7sui7RmLCFU3PYvJcDgJz5DdF5D828v7hUn3q9RDVZi7FTtB",
  "key22": "5gUrWKTv6DgTeddohWPARqcLzAh6uqmCLAsCNiDtmo6AMFLgPSTG1TCPPQZAumeCCc44RnWv9K3d7QdbEUTQTLKV",
  "key23": "kiWguXhBw6dpWpYDtXGbNEKaWN4kBpDGBFAEDSz4iyQb4QbAfvVPFFNN5aoWLmctrRTmeRhASZgk9femv8jQrTD",
  "key24": "2MseJwzfQQ3Cz1ugsgiCJFr9FDDHn28Wy2YTSTwfZYEDNLUW9Y45msUCGFh4BMHVhVCUwyP6pQ4gfHSWi9zPCZZH",
  "key25": "2EJRxU62NHZhXjXKCMZXYbPRMqgsXgh4S8gwsnMzSEfyux9zmWtV1AtSdnR2EU5pQjkzP4FMGpsuafSL5FYUa1xA",
  "key26": "4DaJDCRaGqrTSsZzXb5u1qRPZMSV1vRKozKcVGMKxDjXwEfqyPJ88bHH91qXUcShtibzXdYrVZTLwtWA4Vdybzn3",
  "key27": "vhLEyFxgybCCeuZ7ztCWMNoVfmLASKL5o1Gf2efEBJp9Hjmf9mN2s8F4ZEMap1zoyEW29A39kZgM3o9jMfXjHTa",
  "key28": "4bECq1q9maHnUqnnL3KGVNaNCeQpochPQk3KEZAZJaDdMB6h8W5fTVvnw2AgNcAmCavDbZPTT4ChLie5rzStNPZC",
  "key29": "4mvEpgQWYjgX8uDUq7FSdKUCMepmpgdHbgeSA4QJLiXGZ95DBWDNeY7rxNdncnEcwtyCcfmBeDXUHNDT3QwZ9CTL",
  "key30": "4YRDMuSwwXrWe2RbnRE6ehPnnaTa9XjQjYwL6AegxufGXiXuTCYSV6NHAHBuC4NtH4fGHoLCPRLYLZqPiGTzTg4h",
  "key31": "ntDwbALnuYAcx47P5uUTjKvdZripqVQgT39PuSeZh4wKRQQfJxNc7Bx2XHKQmEXqHNSDRmakymQuRhPt5Xdc2MJ",
  "key32": "UKdPS7f8vGSBTvxnjkqU6JsERXzhjAhF2eK5RDMSaGyAsfyptf6ytAwpH8WHN2x2ERLUNMguEf8bqgM42KaE5aC",
  "key33": "4sTUQJdVUQZhPMvMkhSuf3ETWvJJT4cLuqtCTCCH6WQLG4YuAmQRrfTKebjiK9humKqJssmEZzEtQsRZQ8pqBJPY",
  "key34": "35UBRQzuhA7P5YATpVBxD2u1HnyXqYwVnHzUcw5Ervvz59bwRZd7zZs9q3tTYAT8kkrUviXQBG5PoJCGeaxhxdLd",
  "key35": "5CojAB4gVMJgQKAxF2SjmPjSvAqVjr1PhaiBPNUmsbdnZEs6KaJeBZNqRQ8eRvWvUmHE7JniWskuMDXXY4fgs177",
  "key36": "htBTemUdamo9tGmqDvK2FTptUaLadkoxPrfF8eHvvykjYc7koXaqdeM2eXzVagNcR9PZ6VnH1ip16AgSYhRtsTD",
  "key37": "24iPfwQ6tcdmrAcax8BurpxLTABH3URv2aWuYjmj8M7mHFBGu2Jsziyuotw7ofpCrQtSnofaY6uTE5iCNiLJ177b",
  "key38": "2oNq24km3RnzffmC2w5k8T2zrXeuyENNrP5t3GNrdykFTiKcNZ3PHW3N5BMULz2hcSTotQEPedh2HFoNSXMQhNLG",
  "key39": "5mH6sjypSpmA9sAqjUrnPrHNqsTBMgBuovfaDfGXsXYqUTph6rXPQEg6qLuqfUzrd9E6ZHEPVpaj5ZQ2PwZhE3Jh",
  "key40": "3Upx3yuc7thmSFCRQxpWwHkmVpwEoxgPTDeJASDo8rCqK41bixYpARCaDuEytCvn66dac324NN8rBNZBk5PRFAeh",
  "key41": "2oM2EkaNWVZQpbcb8wFpcnWcux17wc8D5qGST5664HfhhJ5A6euMK2edba4hXsFBqnWbLqixmeBRdFE6w4biodqb",
  "key42": "4kE81oJDX97yWzCFwp5R8nkZyhiDjoUA37eq3bqi9rhBky42RDLh3BC7dBC3QNzB8AD7jtc111Bwq5cFd62ovrDP",
  "key43": "37SrGbyfHPcs1EW8S1Dk4Q2ZZP87wTH5ggsNbYnaHQYo6s7zFeXTaoX4PwA3nSHfnV5k5vkR3Wf1734w4LAdafdL"
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
