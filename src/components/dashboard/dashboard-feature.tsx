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
    "21GnNie1ZqYmNBxSfUF6tPLkKdWuMrh6ZeD9549ePxCrFNGjr1jJA4TTNUCUNuYpN6uUHuQ6avLVaNtR84VzheUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XAtsBkHC8yhcZBFjrHSLyjwqWxt5h2jNbSeq3HiaUZZFYkTWSJRmJe241E3V9psGZ3FDHAPEQuKH8ZPwWgEoYWv",
  "key1": "dv36EsiDL1STwsaU6LAP1F4zhE9DsxXJgKJuXgmfNJMqexxNYbFAdjiyMDNRDYq6KxsJsHA8yUd7rhADYL7GXUu",
  "key2": "43bcWbGLExdvtCPLCcu1sUvewe6WWABiwX3X8khgkenbiFAVHNz8doJtu43tFbPCd4ZYXMeVmJrikoTAzATKiPFQ",
  "key3": "3zPfgoPqonewyC8e2KdoUJrrnatLhitQgbBiGc8Gw2oUEAWZmDCGJGGwngnTWE8k4JBYSuvmi7xmexq2oAmEfuaF",
  "key4": "puX2f85T66JNLnAe3e7fG41YvQ4oSxMWifYwRVNXL8ExBuxfo1eo6Vr1knz3FKjQWBkiUaJ6J91NEKriRxrLhhV",
  "key5": "3g5xFzf94TGtrDVkCuFKnVHayKqFp3fiFxDgUzhDSypCrvSzH3RA6cwRiD1YshyKLMUAW54uRqavdwfbu2N2WZ4q",
  "key6": "42u959vGNT8XzgdfprPsq8dbrwAP6rgwnBAh98MjAaUutT63a6CD2cidbw4rbDZtgHJiRYo72t4k1CDJVHtaUTZh",
  "key7": "51gySyGSsqQY818i7c48Ez6uhvn6gDwyC84N2NdUzD4fKuVSDr9Aw5YK5eeBhWM9JXaAz8q4qv2xheRBJQm555CJ",
  "key8": "2tMdZAZXFxueEEMPqTW7bezumidW632T1DN31DCiEKRE61JwBK7fS3CHN1q98chCLo6Rccgus7k4ZwNwwGnknQd3",
  "key9": "4eCXAYjxrw3zJdz2KVYWchuhD5k9LhVoSS46dhZwu2YUmNXMQ3Lu2Zr77WYrBpfricxvMBboxPjLStuvMH4hWJwZ",
  "key10": "585aVusLjDz3sCzKDngmgHgccUC16UUdjgufFfHSKN98cMrcZMBTzwXAXJXPghQ7TJUCmUSpW9ZbqSkWfUJddCsv",
  "key11": "5TehEC4tkzh9CjnGUUmQw75HHDS5BwdcKFHr64ASc73BR9PycFKx8bkgDbemW52J1qyZ4f4hn5Q4KmNRQ94Kwusw",
  "key12": "jr46tQDDzt7GpVHeFcLZEKLUeg15XHsdiDXdf6Me6rWtDaJTeUhXTsM8RqntLfSFNzBx7qLTHzKh3bGLm11mSWy",
  "key13": "2EXX9NSczWn7YkKYFBPoHKgegG6f8zXxULEJU3reraiMowpdLPEypK7JRLscQjb53dPrUzn73GHr5Ak1G7mtfy8Q",
  "key14": "5D3upaxh7Wn7TRWzegPhp8mEnpn8ejA1AfxVeSmW3RjYL1d8jnXxBmGcvxtVxytZPBprkQimvMnc554HUkkkB5xo",
  "key15": "bnFFTPeYsnUJsSVKQmUNYtRwinQ1XRC2uwPvCCpTB3WJ8YZmRQKRvyHQg97bikgmwxiP3iTGMK2GEqwTroLQSPv",
  "key16": "38vW32DSvCFnJQinxtZNNJu29SPUqEU35aVVTTeHrvYooMFSbSmKuyqpGncCkpS8bv2RifUxmfBwyxJrdsdQxc7h",
  "key17": "28yqcHUDEHCdW9XQJfgn29Bi75mDfLRuPF317ZuK9zKppbpYjcNE1MCP2Z8f9u3tTLe39xJjnFhYpyLcDMR9zUHE",
  "key18": "4ny3w4TsYuREXH58Ke62amSeH3kH5QRVg5JjYU93HsUyopH9yBjRUA9D82GD6wWTSrsN1aUbwjthrs4LGKRzWzxC",
  "key19": "35MmjdD2yvFF6HZr4mebzPpktooLBc3pa3aVhnb6w7mVtc1o582GiFnZwzeuLFbp3dLARiUE6G8srC4LShtHYyGP",
  "key20": "5VCwj2vUZdYcEMw7hM9S4BCmj4199DWGVUWH815QYRvG2NFHTDUQzNwwhBoeRibjxsGMf9G17HTUfrUNQj8o58vs",
  "key21": "2SkPNDfbZ7pp6Kb9Sgy3aSFqzoMYesT4HJZjafmG8CvmNzGUtTK7wLgipcGUeAhX5mmjr9QLxen6NhvXX7ZniHf5",
  "key22": "544GMBD8poEZT4Et5qzSjSCgAQbhqr8NUCNhzoiXfK4vp7KMzhpF9DfbaUWvAsYbEiHZQcVtEwh6AhdU3RYzXm52",
  "key23": "4AgRchXHuoqyy1LUWkMzdK7wVBERqUWpQKzSmX9Rrsvi8oS6R16eJXQRrYaX2qfmZ8Lwn66S9YUGH6gZbFZ6vjgc",
  "key24": "NTzkvinBihjiL6h7FUW9YjFaqz1oF3U53FKVgLzqrYqGbzreehDQghhoafx8kYk4z96j1WF69Z7P5KEaaJhaKGq",
  "key25": "2cxoRCiAhHwoNxEDovk9Kx87626XT2LUPqnZKmXoFib4F8Pu9GwL7YqCu8T3PeVsdRCdCWeBeEtTEYAfkSMZqVLq",
  "key26": "iRA2xcSgN6p6rJ98BDPf8U5QmUkvomTQrWbknAMR2QGFzN97w7pjXkhsavXRMDqLHkPFH9kmPUukdKG2R3S8NEj",
  "key27": "5nouXtL7ww1oA89rQ7VpK5J5P3pMkkW1Jb1kf4i4e61uD3QdLhugTbbzYdLhqeiQYE4WS1vqQ38c3mY6KHqVBAfx",
  "key28": "2A3cQcVoyP3B47F3rYnGyELkDxbPL7nNaCGpYt2qX2XCPv8mB3otxKsENS9fHHU6G4uvNek5ZzFpAayFDzP7uPrT",
  "key29": "2a65AqnuiiTGvouvvj7adKVK7rKB7knTJnLA5pSf3EQsUDChJBc3R8XRiSdZraufC68xa8zrGCu51eU8t7u9BXoW",
  "key30": "26YK36c4x1r2yumJieMmGBVHXbCyu1aizq2vWqFrUjmHYqvHSZt69grqYRjjpLRcXVdsYeqa5C74SyutuoKoPnDr",
  "key31": "3WUwncNVMuKG7L9tnfeosweDhZ8zSweZ6qMFFU2mmS27ijq985UYeJe3yPrq9SFMLo6FaHCnbVju3FjreeUc8ME",
  "key32": "6kSapV5d2LQ5oXwrQHkWf9oRZAV2XfJRkBPQ3EKAxv1JL7USJxeAT1gqvyTEmuDcTyAxcn5Y2gaByH3LRJcPcyB",
  "key33": "EQVERL3rP1VRLtqRUy4Jv1zPM8xbzzJmkdnvGGTz6cDNULWhkpnfGD2qddanUuWPvKdAhzZoAyG3TcrgdbnzG6F",
  "key34": "2GAud11gDk7CkytnBuLxuEn3fQJj8YuoTqibQh1kneYmhz8j8HfegPb5LoiXyHt1Sxy4uGxWg5quSnFnN1Q92xff",
  "key35": "5G4pKW2q9nT5ubWTP7XSpwcyxCqGcptgL9Tqj3AtJ2eYpNMaVYS17s7zXuabeqjRyjvkwMi1247YrQR8FtL4QNDL",
  "key36": "3c1cXncWkCtZpCNLPd1ZQ5dZZzZd6vrq1jopCgkfF5EtbmvdvmzBy1LgdF9D3VqCfCubtY6FtTC4kEoX2HdiV5Cx",
  "key37": "3W1Tdvtg95vxmvgCE2FMxPyRi6xcWDydt9UqsBqJcobdE7QepBA9RyVk5xGJHCXt47RoLwrGLhdERtZ6KhQBJ5Cc",
  "key38": "5FzkeDeaRpm7FRYxcoBthymADgnHBfGUPbWMvTj1CGWTFTdj2TGKgEd4qtU3xWX8xdiFq5yVcPQnxd3QzwFtQvkf",
  "key39": "3fxZCVPNMYPcTXy7cfBvuUwRTU2TkptSKA41DGd7zsjtximS6ziqtJrmsjpjk4kf5HVewqnmwXwe5TLfGeDbcCCN",
  "key40": "57aAvEBunoRstjjUWjYNk4AdXQAhe6LXiumLsVW1GXWSkpMxAKa981hCcogNcpFMEnNe13ow2UPb7XLS3DNwojdV",
  "key41": "5h7QZ5dk731FmJ18VLcWqPXdF2511mqU1mZ2soK3dy7cNi2gVoVKRJXvPCuf38C3r9a7C63gAFp4oXQwxysAfaMy",
  "key42": "4666bSpxmXqLwWTAk2KQR6FZvNhs8KmN5TmfSsRsLuZpkswS86YEg1K2pHnpgjdJHX3KLh9TmhSLspw8hWRDydsh",
  "key43": "2j9QLsuWB2KxH8th9krwTWXjh182HMsa1VhS1YzrLzoUG3VjUxi6EMSSSaXP3EQBieezyrLnEh3ftyrAKa8nQeQe",
  "key44": "2fgQqxoexhscV7se87Tbh3LWgyoCCCmw5W61p7sBQeHzhcTvdUMCcxiy9YDgonN7NAe2oSAZPbsiM5ZTBJZAPpNR",
  "key45": "3DQrjd8LddhVk8LyTsufDX94pmPk6mhBbGhrmkFShiZWoHvsbFvsPzb3naVqZzmtzZyMaqwPEaV2TyKnVW3EhBBV",
  "key46": "36SQPDRe3NTZcgsjXVs7n29Nn3we4yQPmfmz1HSS1Jjjw8mG4VwmtabpvN7WvTQTDibpvxG5R8GcNcb3gZhgsUWe",
  "key47": "5rM6qvJfvVaRTjo6S3n1m3tXfHJ2GUdRd4ePB4jFUzvnYDtx2M95jgu4oCSGvYvJDaatgttsCDd1SgDbbx1cptfe",
  "key48": "3p5wEKe25dzpaiQsvHu22YhJQtiWmVhnDLknpXvxEXEfUGC78inZPrhNsnq2RE6ypyTVqRUyDyVqRFDP5m5zYJst"
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
