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
    "2es23YUYksW6akCBs6FYForDwu7YXwSnVS8bqr6QyXmCwTqyJNZdVgSj9sTDd6LoBd1kqm14HxwaRWmvX6jNyRJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "295YQrjaL4A95MSDAKJRuvzQhNRXtr6rQWWBu1sZwh4BhBmoP8twYNo22j2k8qoR1cLcezgaJJn6Pyz1iEtw6xp8",
  "key1": "UY2Y5WX8HTFV8rms6bnjkEzCE3NN1v43kQpT2VyS2JarNBTMNthzQiJtVPZokWBh6dHVrvqdazbEg7h1x4ktVmR",
  "key2": "2JQ33oADjg7ALZhMiMzrwvCK5JTvYPtNzqRGn8e1YzNq8KpW7GvD9DrwfHdRsa2HsZFsCuxErGLAeR64N9DwFgPz",
  "key3": "2vCou77iJ57oEknBFxqH13j88pdBf7v7SHXoZufZnnEzQSssBJUKhrWYyAQQEP91cW63PkKLeZwjZmDeKVNowPi4",
  "key4": "fmqCDb1sBCMqNCpCNjPcmTZpTx9LKPHGotq3MHbfVfVDtkXMdxF1wa7HEkFxH1nyQLxYC4hJyzfyVN8MRKsykMf",
  "key5": "4JpfGMSopmxpbfeGwVx7SSxW5LZ7ntdXVSNcNJ1pUak8AGCpmrgwegVV93sn7bXKa5AE5Ujukp7kqjdWy5CCUT7T",
  "key6": "4NDTRSCuR4NVVcZeryTF4gYyxy3WJgmraxnzipWrjp7dgcSwbNXdeQkG7sCamixN8t72GP9aAUeCjDh4456TWCWM",
  "key7": "7Qj8C881g3fa65tqzSWDBpBidSb7jkG99PFR4iXaDjXa7VXYwPpWNQ3tqTaDdP6qh3TAB9gJZrwP4bynDUVUJ9g",
  "key8": "u9xvkSv1T43wLo9pjgw1Nbu41K23EwnzwAYMjjhwW7iyMEpN3HJ3be2dhtSfrVAfxNRMimXSuExzLFYgJNsNBFg",
  "key9": "2HKSTtar1Ct6nu43GJD8pJrT4PuvupYgVxCauVUVjVQ2u766MHWGZRnnpu8C7aEGnWpW73nNsKeRKMwedbMTpaXB",
  "key10": "3h7nFbzktNJFwRKTka79mzxWRTqTDKHwFGCipABw9jcYVVYxUxuzqxu2Nu5xhW9SASzEWZWVUrTLG3vvQicvkabt",
  "key11": "A3FkMY7xtBjT34Y92M47pPVTcV95GvdbJqaMWrq2JiY7MBbfgcDEax16PCeZUrMWWt2DadmJcZA9B6SdCjxcdKg",
  "key12": "QjuHW2NZjPdoZ23sb8WQ5jiRXnjLB7wUXVJpvNhi8xtyHnSihjjsC3ghqRfEQRR7UaN3BGDtqEgeu7xsfk28TmN",
  "key13": "uUBnp5b7Nrz5tZQc4HnMJLPnYXj8rMEkpK8UAfZaeBeP4eLeWT6ZVTApPs98udfoe1nxchzSK89eKVZNu2u7Y2W",
  "key14": "2nBiekUdAuQZDZtYJJm1LyFVxsRkkhS6gEVR7WQZVY1oQJJTAdvht8Mk1ixGnPQps7Abu2xkJP3aZHRN7JC1vh4n",
  "key15": "4qEHwNssFE9BaPV5xGErkqihdfx1sSH9zdWVCeDZts6GgDMZqZsXFvpdrMCmRrNhnhkF1CQdQe1J56ZS2JBeosNY",
  "key16": "3MWHtstAUQsQyE9HGwMYhM8NAAA1FzsDZQU8xnNtn9foEgVF8F4HzkAiceLcCwgZhGqKDvnyp9eU5RKHk9p4Y3Us",
  "key17": "33GRSDiYqx22h1iWSGm51zYD3z54Wfs7RVH4sSTLBtjbbVbbTyn2eKMrpsxiYjWoHw2CirTTGodNiJQcLex4NXot",
  "key18": "5kNJjuh5oUJSUAkaokVwbjpM8g583hUP4KHahU6CDJkW9reNvV8yWzjwLcM3hBKkA5PSecomcgzjJdTta8kfFyan",
  "key19": "4znCBxSdbVeBqmjeFw3WGMZ5yPUhiuVvCtfW1xriLP8EJd3WRMFWuciMXG2mrdtUT1yeAg2Szaq93jLXaH5PcxAC",
  "key20": "M91ZJH35qyRrwEPNDghuAB3Myz7qBKFyc9iYxrB8X9sU4JQuqNed9kSNwJRL1UGZTN8ABymEkpVpCKKEGmaVkut",
  "key21": "Ceegt6V2Pk5ReLXw2qQTgyoAmGr1h6CcaYz2ABQE1yGpcuNczwD92yhCub4g1A6V8iY5FK21b7CTP62gyjMqdsy",
  "key22": "5ZjFoAdsSDjtAKxNLRbawpYjNugpXVPufn4pTSXBoJk8wjEfYwxVoy7MXespSnWk9iMtaWFuLXAGEyGNyPxnFobr",
  "key23": "5wyDYM1wDGRPDxNdbE1uPTAsxwJ97YJpQC7hJ2KLjkcifEfKCRoGVUdKAB24saTZYUY2hAAzeo33p1Xa9uPNfhF",
  "key24": "2Zg6R1mpDBzWDWcwZhgULFnrKaGr89YRJEmoqJzX4W3YAck9nn7yKSGs8xcFBsya83x68VPUBLCc8R9YzKMSDfVa",
  "key25": "2tgCVM8o4ZP7kNwegrvdWMTN3YRRfcNNEfeyUAcDLSZLi96NE7i2xdR1Jao87HooKNGXyUJ56tTJgAxnvrNwgbbu",
  "key26": "3LJZHkQixfhNPj9FvHNDQgDMXDqzt4oxXg3aELJqgrS9sGzvw7xm4RzzaQxM4Xkys4JHjjosr4yAsfh3p34Dyrrf",
  "key27": "3uSfr6JwjzRKhz6CWdPUEes3qoAyMCiDzQzfkAKkQUSVNDQ17MfFCDAtzjH9L1zmLuti1fTACaSgL6cufRTYpjzS",
  "key28": "2ZoEwzHXnyJa5UbXBzLVFniTrCMnyRL3YLfghRChs7h4Y9xMM3mUWmfaVpiJY8ZHrj54knFybLTBcnaZWENsAVHn",
  "key29": "5cETF465azcmuijUC1H38bnnhjNgMcRN47KQKakL44QAZw9jR3qxxDY812XCVnbzhkBTbC7BZAZ7v8gy1WUA9zYB",
  "key30": "fXLZmVT7TTLaEEjA1xTUnckRwLqiUqrZw9h9Wn2S8yz9ZZRS6utfNuFozV4LTgWo1XV3LqVpKXAf4ZHkK469ALC",
  "key31": "iJypstJFQ35s2tB2qJ6MAwZKf3acuxxd3rovtTftvWGSJEN38mj811nRSBm99cE9Cvvmow1tdyvfJwJ9UmxCSFD",
  "key32": "5jcNFUQ8294tebX1cWnR8GsFo8nHwp1e4rHFZDtDp1zobBftUTLVwNGiUkveevSA9C27zXFhamgESy2CNBAhq5V6",
  "key33": "566Jb7zKtUGASmhLpvA82ef3odLAvozH4TSmyUs8stQXGghVYsFFgmrsDgfKqxRaRXaz6AiuUMv1ZorzvbwcPeCX",
  "key34": "3nw6V56vijSuZgjUpYjsTiJgFCCpWtTvhNEQQs1ddL88uJ7KueoiE2xmErBfxhkP2TxcQmsJhTK5bh7zHMeVuPCg",
  "key35": "4fWm6mLn7hH1MgacYceJ46go9hrwpFKxne3tzuWskmRSWuSCjmhXHRyyHQxyFhVU5eZBUJMPEiEpF4zUsxVfGfmw",
  "key36": "5aF2ECBvkeRutQGQLK9phFNVBRBfJv1bXMcu9ejPZJhVFXT1AC1QDYEvWesVQU6D4o12hvVDpnEJS1SZ5vYAdBbQ",
  "key37": "3xqFSW1qUCLZRyqQExyTm1azygGvxBTasYyMb2HyjSQnTDkorqVNSTpWRtBWWaD4XBAzgNBRBc1z9umVv7TEUs4z",
  "key38": "4MX1Gmt5JMeXjv3UgHRge8MpqPVA1qD8C91GPS7zV34MoHM2u4f6JgzXhyt4SqUqt9Af3cFgxvbvEaZ27cXri4vn",
  "key39": "5M8xTa9ofMNra5UTBWyphdaUbJ5kyWXUYNW7fq6ndBTFv4XZHcERFhHZRydpNtPvZXyGXGoY4QxQyDWswTi4anTf",
  "key40": "4WB7Y9PoQGEseynLxFvJgUWvik2rTRfaPLYSwFPsYzxyK4LX5GnGVeriviDNPwFxz4da3H4xCMF7VHxYvLNnLnvd",
  "key41": "YzALdxfCMzrcKhAs7f4t25R4UWSj1GGHmJMU9rGkVeubU7Mjdx2E1Jrd39gw3p3Gh6nNuNLWRh2Co9VPFrHE5v2"
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
