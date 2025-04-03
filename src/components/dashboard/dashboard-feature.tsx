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
    "5DwMmvHYBTFDcA2jNkGV4MxpmzK6jrJTyhfjKy1x9z4XPNzrPjBUuJ4wLdGwwzr9PLmMd4WCPKRuytivsMfgCwwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GYhBB5Bup7cikdtAruaJdzRDPQjDvpGKUXx547fGat6fZLZLcE1udDL3rdJgUYkb6VK5XvZ5CFqcu4iF8zCZer2",
  "key1": "UQyqs5fFXch2iKp2VPMr2dRV4byoz9h44wbQ9xRDxCrcmtrTF9FWSPAJo9uYygHWnub7pj4f135m2iW6s8iQrH2",
  "key2": "5TGKaY8GkXH22jebTHAjJhGoTP9k4Yxr84V74WMF7uLRvzJ2b8bQDvxZxSuAGnUFoEnrcnqPLM4bw4UrZcEab8Zk",
  "key3": "5yemq6Fbi3TUDwpijoMpqv1cNEPxhmWGGFhab7Der2dyWytUcvpqW1p6rUegUwD6rwdBcDs5Xr6AYu7jo5GEQx3g",
  "key4": "5SC2kqoLUQPkvUM9Sbv1LbCvdcKagV6g8xcMY5uj3datmsQF4RVzFif7KSPSej6DuWBQz5B9oHYbhfH5zZ6voCrg",
  "key5": "4kWLDk7GAXtG4GKdvThc4kk8fuFdCyLLfc6jBmNJCPXXY2Rn4R3ZNf3b6DGJjFjWTHPFY9XqXh7F2TutWCjVLAru",
  "key6": "5wBEGzQr1fD312Kjp7AZQ8KKv64CDhJZAhhmjNKG4QtBBDea5SiCd1AvVAHUMzH1auHk1xtaNMaEpLJNNxiypptd",
  "key7": "4ST7Rbmi7DghgY7dh2SHD5S3eiUijBdMaP3w4ndF3xwkJB381qFnQ6pAAph5mQngMDp6SLWjSLb6ZBXa7Ho6dBDu",
  "key8": "4vDJsQF13orRzEUASMsz8DChNqeZbaqFNDceFZViX5NJUciGpgfpCEYfPBHJU5nhSxEYSiH9jhFZFd2E3P6spuvV",
  "key9": "5WAHsCK2huZuUrvKvqDBFo5Auyvq2aWp3GUHjBf7NPJFuxqx6NCLvnaHcL6TE63qv1edXTa5khZMLd3XWwtSejBy",
  "key10": "4JncrPBTFp9wz65MVPJjHtFuozR4jFRnvnM8KmRCvq48bSFtqsQxa8UXSu7oprAmhx96oDiNQvgDEeCUJchxThRk",
  "key11": "ENWBGVKNoTA4o5Dbc1ASKxGTP3jRu7nrevN7AyquwTS39nPgX3TSppn2V4KMS7VuBj9nk4p8ggLg6rHduyNUzi9",
  "key12": "5aQ9dMYZ7YMVSX8FYn6fXjvfb8z9hUtUK83Rcr4B2UPBGdvwzRYSwng2kg3GNxePPxqCFpobXMTcepaYRgig6oWM",
  "key13": "4qmdxjszqdRk8K7tyi2QzHhwYdKSAzp57fWFWySjfR4pq6EVv4q919YiqeifxhER1Rkknc7gwE3YA283vubs1c3C",
  "key14": "4bNPxfvcBpr3idAYhTqK9Nu8nxoAWbNBgDqB1GVV9ssLo5XgAAgHn3Be819x47wbFcrmLGX2oi51cyx7fUqQ2Vo4",
  "key15": "38PS3qv2RprmAVJpCA7UKmafcRTGdZN1GNf8kVsYti4Mg3uL7uUVUHqp7e4eM9FdF2ZR6th2v4nnWnadcWbDVoui",
  "key16": "5WonvAJqqcpNCimZCnGLT4sjjjW8V9MjM4KhrbNbRofMQ232cHANUmEFFY1FutGvjZWH5uPwwt25wPFceMBA9ENJ",
  "key17": "2aiaZEB4RBGFmGNiDPN2wdrcqDPs5SHNUQokLAMvQ2sjbn2dU2gj18P3Bx2jNUADpYBzStxvEDC8jygt3gbUxcDD",
  "key18": "2uoruuqkY2uq1Hi55cUBig5euMkzZGebNFjmJZxsPZYc8C7hgV293sGTtembwS9ksEt45XsmYLjaDrjMFgzo7Q1J",
  "key19": "2Qm4qebtKSMvCUatiDUhaYn8DXR3YYzMPW42sfxCxktLDbumRZi27TaWTqBRrbGKkQDKxoH79b5Eph7rHRopjjpE",
  "key20": "5LFWsWobF7M5QbahkJuWYiY4vcWdsTeBeM1tYCWSJxzJMJ34Wsb87BcM4o5CZcMTKoFNhTPAvPsSpqVaTquSvhSX",
  "key21": "5niSJYWjxKQy78sADMhMGz7P1sKeEdUXNTVqtNvkV1inerBqnF4vGq2yAZdDJ1s9PXTMTXWaDQcmzYXTEmZvxzPw",
  "key22": "4bZ2XMPCEEZuqDoXSL7qBoKFwEeLzsHHXRreaxbPTUQhALgFLPbbcBfuMECRi9MMDccvLA2MHkPzFiYWihQUxp8H",
  "key23": "4no1Z34HPmKzYXZ5s3SqRWN9i3N2rGUhZLzmdV1eZD47Hvcc2HKSw6Fno3w5nVD8CEDGXwySqnVR5xDRNnBDnj5Y",
  "key24": "3QujovnYcXH7HUwEAkTVaS6jZ7s6vLKG5kxy3xzQM4n1JMe3exjnvkp1hneU6cPgxfyPZ27YNVx9aTLYBzdEi5K",
  "key25": "3QzAEg3My9p1xQHWuhCVHCBGCU5J9VY7zzdoLoeE8cHXD3b4y8VpDeBeCFZHd7vWDWyxcRQDFP5pdxX9ABYGuduy",
  "key26": "26vnBDEL9cuVYMJocFDJuVdEk66cGvbDHQLjB95iqpfWZc9JXMx11GhLpNJHDxexvFs4rAyKBjVnXPv5Qdi4NFVN",
  "key27": "5yarheoJjoVdWBnf3gBZru5GvuWoRjuZGZcJSPYQnBrRXiFhBn6kGQf3M43e8VUtzbtqJHiPaozYRnkzjv23ktch",
  "key28": "2b4uztAo1z15GYvB917qW1tjPELfMM1A9qKdktafFWwSNrovT8XYYYHR61AajGQNB8kdQCbMmqW3V7yvcWV6JKNL",
  "key29": "5xiHJnRuLo6nDygPfbAioYhba5ZEcXgf4sY9oBTJEEiXF3XMmthhShGJ3PKVuxxmvCRY4W6kF4uXu14oq4fvqbi4",
  "key30": "4DhMr9j6Wsnbh5yiTYNKUwNDPcAA8zZaeVV1XQfb7ahdXYaJzja2h1RTnNWEjAJrbW7yaDMxVTTwRoB3ujF8oXjq",
  "key31": "3VenfH4pT5EDr7CWcoYQ3jiTf4cNkyVnNCNBTZUfkuXMH2zNwukZuSANS9AvZjqL9jF4KnjATuY7Gvhii8zmhh8v",
  "key32": "53kjKvadFcyTUNuMcLjpSBisfdx3LDdZyo66WavAqJ9VMARMfZXdjwd2dh3LVE9aigbQz39SK4UtCqz5GXGbrK44",
  "key33": "4X6XeKpAYHwqxDsvYx35GKwYj1beBKig2mmd5eKxA9EMMk9xzGx4oeKEFjBUX1Nz2WnZkjb3UY8UQND5d6ToeRtq",
  "key34": "2WzJgSR7ekEWr755AHDBbKxhTswu6MY52rD52V6PKswC55r3oEt3D1He6kMY3dSAsMM4Cib2wB5bxErzpzW4qxo5",
  "key35": "4VJGZpAnJAUj1Pgk2XQAAPYjeeETGRCbxEMZCswJPuVTV4Lb9qJmuqErD5mmaW1WETEAC7oCQzKE1CibGuccXcys",
  "key36": "4oFNuqqUaJFnY9e2qLXejKYsoL2UY9UchrtzBYyeyMGfTgGps435CzhGxBLm79PhyNt79bTpa6hcXeSbTtBLpJDh",
  "key37": "5qVoCQYGf8jCbqTa7vVzBu7YmE1U4cLvwfgZZYMg8Ehym2g4E2sZNtr4hRSGBB2DGSJr4H7ERVHkJuv5GK8cLgYL",
  "key38": "5CGijtQcQaPQVEAoHwuePqBmoPFhX2JGSGYtqPN2gMB39ZaC5XDdLBKztDQerrKsx6TB5mUQBiCxhpgFvSczgnTq",
  "key39": "DWE7y2Z6fZ2awZJQds1apoopLWA25WhPNbMdvyy1URbmEUUszgnopvMjNFy3gJnJPjrZ78VkyMpeAbgMn8Q2Gmb",
  "key40": "AeJfkQzSSE1tCmjJCctBbMqbrH8S5z7omQmyM4f2GM21qQNcc8DYHjRs7aBZJpp98RpYpY5gMigdej1jGasBw7g",
  "key41": "Et2p8chMgJm5jSEamPiVq5pAMoPdpsHng5yxh2YQBxSNk8J5Gfw9ErfUcWgUkD3D1BFQP7YJFNCgBtNNT7gDXAR",
  "key42": "5sHK3MH3aLU8yrBzUDTzH97tr9ozHzZoAHRnVBKUVG1C2R8Eps5ZB3e5axd3dKsy8jgQjHgmquQd4Vik4n6tFUBL",
  "key43": "Xk5Eh2JJzAFdDzoCyfuocZ9M8wKnsXdHNQ2nGcwPKtUSs5y7QM2grHimGW92GN2VyKLKQ2pLHDpXpJbWCGgYRCT",
  "key44": "4jYbrBPhx9VdUYB9GRbouPEeUq3iJT3yQvJ3NfJ3LJ3guwcVVSYxxvGxLF3LXwS4vr22h8YyuQWBeFX2CTwcJ5ss",
  "key45": "57hvQcjq44rz5qu1ifbBqjGU692T3iEM4Z9i5NHsxmdfZKRkDbE9QnX59MCCxtGccWKn4ygSKGvanDT95a7UKSrX",
  "key46": "3qpRTWVbi7CES8aTHWCusxQdH4UD4YZV3i7d9e4nuk8NPnC1DrFJYUe1EykdoKhdSqTHrar36K9NtTepftGW6xkh",
  "key47": "ZFNFQd1LLKM2ABQg6rc6ovqP3Wfu1UsDALHthxcXhJZUTjYWTXzZAd1kqTgc1x3JDNhbb5gKMbDnFnVkh4pRZEo",
  "key48": "59CknTTFpqjXjf9LG1pB9BPNZugsvsKHoajYhEbgtpX5MeDFWTKR6d6tLQvKzK173td23uRW8YB8RQfHJVSwBehx"
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
