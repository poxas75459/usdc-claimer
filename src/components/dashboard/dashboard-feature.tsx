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
    "48WJnnLo9UhTYwfW5pvE39UciJC1FZWQAXaBXJdnezjFfz1YhVUbKk9JDaABb5LCkK62jekwmxqkRpUDssJaKHyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kyyZjURxBCknz6BzyqAwdcpcHXyF4JM7Q91ee78iNq2n1LPNfq8NktNPTT743kVFxe7a8WPed39dn2xeCBtDXMd",
  "key1": "2yoBiSEDwUDv7fUxksegRRMFf1Xg28JtkEcbbhJE21aZzmtckny5iJQRyjwk38ysFvLiEhpVQC2X2op8JUEbdthG",
  "key2": "5NyUVXun74UxPXtQk4SHBfr2AQNJPSZUurxXqazXxQ9RMPS6tM127uCbYZTNcAXuMp7bQaqBsS8MtnwQZM7KMci6",
  "key3": "33s4mTbXhFAQLxqZkCTm3GMUHib4pB8cWzfYer7Gh1uvFApWi2GVqtB3QJHuDZ6Z7Vfek8ys4T1TbcZDzcGBHeX",
  "key4": "5tQKrLd9P81kn9QkPahxYF8tcSe7BKycPTgJRwCbSNojQeFRkPUKZdW3Z8hGo1pvjCtiYxCc6WNBd9CLpnqHFadP",
  "key5": "3cYfxgiWt4xyfmxMPLVAg9RsepkBduXJfeNfCinXQWPhTENRfiFPUYPoYNWfKhwfTUjS1iV615XSg8qBWVH9wnqM",
  "key6": "5emVYwFFgY66jVT5i5rRCw4wcHyjAoggdhLMxM9aNfpMuv8vVfw7pGMZxWWWjSN3wL2b8E71TLMqzK88yy72r5J5",
  "key7": "uy8T7CBEaQF2szhRSHjHTLoqUobQpo55c884dTKiDmLLHKwAAo8hK5321roFYuWNSmmJQCmK32TfefCUYcVdGbD",
  "key8": "3CpwUnHVdkeuBGHWcvqYzubPy7ktQynkQRZ28r22gzKWHgFpchH5fnoLtwSttw8DMSzKSu8728kNsorz3oEzUtNK",
  "key9": "2KsBRJmURsa6qR4eVe7M5XHsyhSrpbe6FcZCG68fPCCGFaFEBog7aR5DDT5v22na7FSjf2Ng6TibyrLbSKqwmwPT",
  "key10": "G3S5gLwAmt8ZRGYj5UPiBBb6q4GLM2Zc77Xo7Q9LxW9L1PspMaSWQxyeuH9JQsaBhbN6CxGYwysP4237xs4xH7n",
  "key11": "5w2t4x9MYiazbhopAkfVmFAYwf2nhQQLoRruyDwBknVR7N7hhHAnU5sADu2xRFHVEQjaznC16f6M8xyEtmLR1eDg",
  "key12": "4kuKEdMwuT2UMz2WkBa5stpc7wNpmhUggdDmLC86tsoEkrXiMjnkDVn51VA6WxEK5DSbWXkG9XetoSWBuvXrVDVs",
  "key13": "59bSjvFNkUKXSh9H8NVhsK86qJpnCNgac5mPN95mMrLHf9g2nLihDNRPdT1V7vvtRumsDRqAkPjm2buteeZA4kfM",
  "key14": "3CtdkaVB2Ja18mdWMWruY1BsXmaFNXayXYsqqpFSrVGTHLMr7hB3dTa5gFTiMAtvVSepDJhqmkRJ1nmXMCe5cg1V",
  "key15": "tUXU2GcncQUfNGTwjMbVDrbfzjizfX36LnBCQVny88JyPRnKvaVpei4dG3tdGVyG5kjYmXhrgr4TvfyV4YK6yUs",
  "key16": "5vmnqXvwjm4WC7JwgYRm1MMZoFFRBbdC7bggPxfRDjCgnM5g6MLEYw8cLvrBZKvtML6WLv6stDTPJPFphMGUXREw",
  "key17": "4h3pMF5LtsbHB7MFAGbSeRHbHvdqBg9LEVvwteyuYZCrTRogXrKsCXHQ33bFbBqsZTKBjxwPorViJis7XZq2v5dB",
  "key18": "2Ry9iurWQUrZQUzzgPiWscV6W2w3Z8sJQGN5uqk662kQaoEndDY8Wrp9oEDzrrohrfy73GVbvuqph2jEQWvxHLNw",
  "key19": "c3izKXghZSTbSTaYihLFWZVKe3DMCLPyDK56CV7uZUHcQBF8iGuzqndrLg8yAQYAhNRUJiDWj22dmEY19v9jRQU",
  "key20": "3VZgVYWeELGyMvb2ZGu8qVuy82zZ3N8Cx5rhoMgBzygSZUQXUXFLJy2UyhSeqbG1gE7ZaixGjkev4cqpQhVHS7ZL",
  "key21": "2ELQNFp6Rx5ZZ3LuTDED7Y5QaJtFDoXVbro4xaD7iutCnnZXUcV9wXWVb3CUhsKvrQnEg9KZFyJDgwf1AuTW5A2m",
  "key22": "4stysdbQuXrTQUezuLu8axTKdeiMbpPs759n6su1mdwXgaC8Snpr6mDj7HPfduwC6oVGsSbRG1tSYgY48RwtP7co",
  "key23": "2GjsT1WPTT4diTciv7k8LsmqdsW3VTCCzEQhQs1fv5s8e2oJCirZcbcSShDiaUYxwQGko6rQvFQFrUhi6zhimqML",
  "key24": "tBegpK6RGM6yVyEUY4k3Ejpd2GtZ8pAVikxSmPFmGMUFbbwYdWB4PDDXuawViM1HbASoVip4zSA1pTn6UtQ4t4q",
  "key25": "22iQsvLeJypcyiCvMZNjvuDUHwFsxTyyiD9sX4jNDKWMGsBHCDWqQWufxvynDNJkfzoXG96sks1ji2TfZ7pVNfo2",
  "key26": "YXbzAGabj1XzzcL3GJEw9yZufurycetx1unYj4KmqxyZXe51XXQtH1L74du8qahS4Wbi4yRCe9DacsuAFmj5n4n",
  "key27": "5tDV1sBuoNRCC4ocqHjd9Rq1jjPCFqCWYYafQXu2hcq4N9zgtJ4fduG4YE4rhymR5ibWrEvXsDwHLHUn7jjnDrbG",
  "key28": "3rs3gqPeNgzhgGUMrsBxEmVimHQnAtAYowqYgXzkPnwaMkmp2r7GKkbUGbanyRtRiQsyaFyr1ZRYy4JLtf5xB5ug",
  "key29": "5xzYgE7KSzvFroD43R1hLjAocDNgYdKvhYDwRVeXeumiQCcYDgfmA8m3qrQaq3YuitDTZyFWtX2JJNMH8jxsHvhH",
  "key30": "gPcQoYKmU9DoWzA2eMSJ3M5GGsrNQoCipFsdYNjyKRp3PSpXQZJoPYMyjWs8HZA8PoDoZ4jvaMCd2RHj3P17UpM",
  "key31": "5w42ZDGbtHug3p2F2aiCYDxhZg5BmE1bTNTUcWke81MPURtetkuBSqCBWZKTUybgAb6BK3tAo4BRHxGn2jUT4PGd",
  "key32": "4tesnDwCGUvNNYN5jqzoFx2X7WBoHpE39HRS1eAWagcSkL8CiWPv3636PchPMhtynFgvQ6LebtnxRMMQpACjJdEK",
  "key33": "3ccwztRGcMW7GpABkYgsbENSS11f8MTWHsUJp6ed99Z6mFrbWkwKkJB6A4Azci8SdY2QrSpkzM4Ypo8tRQUGrMHb",
  "key34": "3wCEKjpsDpqFSsbfxirCTXXjygih9YTqa1CLCzPDT76KMd8bVPvdyTgri6xW6U5HqEDZnjtJECxfME5EbwzaGEw7",
  "key35": "v9NJp5H5oSkecriaweog2PeizKxQekd7aKWkfkeJJ6VFe5qBPwud4cuNNf5xwJwWifw7X8VGzbQwsnLEYru1des",
  "key36": "4C4o3KHzwhKDZ9HQo5bx45fFftSNNz7tnrbpg2ygvf7TgqF7wYKWg9qqryXN6Adw6dDYSccTCHQXqXhGsASQ9jdW",
  "key37": "4ueHmx4pTpKXRZwGEFSwfP34mB8Qs9vTfsr9Ho8yEYuXa6pfa3iAhFkpWhcyDoHcHWp77Up2i7APhitt3ZTTWuJu",
  "key38": "pQkGEBUPC5EzkmVr27zwNzS31JeRuce4CAPMdiV19QgriL9d6BGP4YHdHrrr5r9ah1743LN5DUfE8W6r8fNDQsF",
  "key39": "eKiMsB1iievVGuHn32VKgsWhAkbuBoH2onDcV6LZpF3D62YyUifzLfyvuqfo5ujoj3mAKfnyGY5SuFFCoc3njtL",
  "key40": "47dLPqgLw8vSQ2wtzY9YtWPTQGs8cnLLDgbxsBagdWGFUgyFd46NUTeyvzaen6vcgBgwV47Me3vmY8sRwRbyYZtW",
  "key41": "5xZcJuCPbnPYrZH7srMczvxokxxxHcRB9E3euq1B46a4GJzBDgF2e32Z63dgkbEEP5SSUG6nCyCSJxhcw1tyyBjn",
  "key42": "4cDFGDSWF66tC1gUdbCa3UiduhwgTyMcNY2GUWwMRAjSsAaNiAdD8aYCXScPUb6yVjfBYH6FPGGQdX8f4Vij8abG",
  "key43": "3L7TrCP5aevtrwAhsnH1YpTo1L2o2wNZKTq2UFNq1KGEWDRe5fGWSUFgHiFxnXxHroeLNUXa63LoZG74Nnv6pPNh",
  "key44": "2TTf47rRWRiGySxFukTEqh34VF6bBKwNJocpXmwE7PBEvHk5zdjTEcVDnC4bvjvoW42eZbXinksQfNX5aSXMQLsX",
  "key45": "okEX6vu57gJ4edHZJPwCEwPxwskkvsJBahfQD7rE9LTdzuGNv5K7uzVxKy1HM32y8tbZiHcY7qmygQa8oNdtRjs",
  "key46": "5TtPRFNtikKqGoVAeXFDHaxFMxCp6ykvQEcF1GNw3gRoL9KnSqx5D1vnqudKWE4abXbMjcbJb8NJGEwSg5jLytjr",
  "key47": "3jqoz9vvXSu9L6PHpQCuPHCb4HUfchxZt4fjpECKQRX6FwLsmCUMFQVFcb4iiNCQBBaTMTp8wjWffyBFL4JH9MJU",
  "key48": "2AwUxtiGQWasaHoyqE5t4sd23KckrsV9QCaWMZ42zpNN6anyzEJopS5RJd6JdxJyoN1VAQ31TB4eLFU1x6yMdzwG",
  "key49": "5MouWvPYHHZzaBdoLfJQffEPZCgmPSoq8zMbYx13gZVPz8DMeRfm2NZH1AxjEA6fmxcuuw8J7pkiajdVVP3meHMJ"
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
