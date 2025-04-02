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
    "3tuxog6XwV4eybuhXDgVfeG7j32C2RxqkaKRLDxSEPZUSeukRS4scdCUB9JyPJJV99Fuz8uXxkScHwSPzRVdxZ5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qJ2uwvRZ7P6oDYqebNM9MSvap84qm5rULZW3KZeyTTct4kvxAgo8GdZR9sGPsi4v2Rs98yErCsiCe4yps9ZdGEA",
  "key1": "3A5U8fRCRQbHcBzMLP8GKY3GkgX5bqjSsC7EmNWngPqbQd7BuT4yHuVsKRV23LeDnVm5ykDBeRJBu9cRQizTS2QQ",
  "key2": "4KiPCGW1LRAwJxN96ycPritBthWJAtiNUL3EaAtvCDyqtc7ptuqbkZBVdjDnCMRU3bbtSEv2WQy49fQijygESJsT",
  "key3": "22kN7kxqJi4EkzFiYMtS95tBpR3oDcBecvkaqUrFKebqneNLJ5gBiT9euCctLNPCiNebYa9gWRZ53vh73jkRBGQU",
  "key4": "25dEjpwLnQLqoCQ3NxDC3bKNFJxZof657hmMY7hYZGX5HGBfzQHMtqfX7EpZiQrUUbkPPqn7419rjJ31E2r2QR68",
  "key5": "Z1FEPHFSpSNzVRh34njRCjELruHcnJXxppZRM2jd6tyZJ2EgnqJKwWVcKnGHJaTF99tJNTrXR5JJFXDMmxTs1Nb",
  "key6": "46PwpGCKS1MXLbtMvHNptS9FfpXbsNg5Bykc3RBjjHLs7NbsuiNdRy3z4yEvun4Q73JxouZtUNg89BagWPt2Tfnt",
  "key7": "5xsBeaZAyXqPsd4Hs6A6yMBrb7CngMcGW3tp4yv7JN6BNQbBiYZr6vaJ4xjGEu4wKHJgaouQrvW65pVUd4sD12Sd",
  "key8": "5V3WaQTMkpaSmbr1ZuHiMrkckv6QNAGpwpDfrFC7kZ91ZtFWXVGZ5XUMs9zR1wAdLFDLN9RNPqwfSi3YBZHmKpEf",
  "key9": "4ThpYpBhoddnB184USuzyq6X35uBTtVFNNCf9VzFQRiK5eXpLVx13WXnktFfbk4kBzDvrFQ8abLayAHgp7VziyhR",
  "key10": "s36HR66tMAYfp19fTvyoEWB5x94diEZSJT3htUG7HqULChC2tfH5kBeozSdYLgcye1mTsXdE165MmLzLoUQ7tT9",
  "key11": "4tpWLQoDgaC1bPBSZMpdC1EsPxGeRG8PrWZMXqehAPpAHVt9LB9q2x1BhnDCrcofJzrsq8TDMa4VqwgnkNS3AFmy",
  "key12": "7cftF3jFQH391gRYaDWt4nbssQnhkRf6YQgRDFPErLTjW7X63VHAyjzyjYH8G2AFY9MdJUbZdNh9fSpBJrUpP13",
  "key13": "5jb61mvars5uwEQtnVWmmgxTQ62wfpeZjneaQ1eq6NadrNgc5ZueJ2ZSUSBCYjz5g2W7PQmGzzCmKi2pLWwusXs2",
  "key14": "4M8LiVPcJchzVfmip1J3US6rCVZ1N5wjGQUKKnPfmmrFTKc67VdcGA939eqpCBTWC9JARoepiXNU93rKR4HsLXR4",
  "key15": "3hLSsboXecR6Qsu4QPQ89VZMCemsU7822oDtJTHtfsNnDA3m9m5VchRQhWUkTnyHKfnrxDt1dPs1M3mXg2aDqjwp",
  "key16": "2nLjwD7cBsJw3qsdPZuLdJk3gZ27csarcBWmYjJp2EftEWestCsnSZqm8ZYseCpjxEuCgP2SjoEaAfUW7wK7Mh48",
  "key17": "2ijCfTpkBFjZRX2rHWzwTo9XrTy6obunr2nGqvDcEzwHcswJAsddf9AHsD3jcWq86ZXnc6XkVgPFX7VfKJfJyqCG",
  "key18": "3RouguqZAGtKJShmNvebx31SJJEMtZp86kNpZdSviCBGN7cyANGNgcWq8wy98e2CXGBxkLVoobwym4U91oGGco9n",
  "key19": "5QV4Tq7zT1WK216WysHf4Qm4faa2WBVCiVpBtCn2pajKpn15RvueNbzPnzR5oa9JWUdVkGT11JkVEjLwGr7RyDQs",
  "key20": "2vwoNfs3ibVEpSEnZ5zeRnnhYFQg6gNFSZH6VNB8pxdbUzHKGv5SnD1mgrX6ja6rDLcUXEeyMQchuhhSPV84gqQ6",
  "key21": "2VCzVFkrWXjk7u8fEqJSJceBKje5SN7dV9EZjza32aKAnCViswppww3RkM5XgRqR9FS8acWXdER3V1VXkYytJeFT",
  "key22": "5MePT8kszwSRyEPdTZoBjwWJTHCcWZQSaByKgxp43n3x9K8VcDpoJYVToLa7Bc4gSAqwzvkwGksjKENkWbPxCdfS",
  "key23": "3qCVmrSE9fZAEPPRvpP2K4sF73i8pnrbe1SknMnPxWhvSkEks8v3KcvJp6m9vSdninmj2shrHPLmPEEVxTNRjW4Z",
  "key24": "4h2awazeuhd1ar2eroJecb4ZGWzEsSiR534FyUUcrycV2SNLz1syKtTr46sBe6WneKSCnxCunbbqPTgoPtB5nmm1",
  "key25": "2RmhMDCLHsbKrU6EPKX4fqWVnrXwD9NZGanZyRwvmiPXmzktmJWxBCJEqgZt4wNonsypPZbNgBfwiKQ1QugkRehR",
  "key26": "4snhjhCKoKeFhUSZ9n2ysE6EytiWN3AJGAuAxympWLWkQVzkyP8HvDRD78wgACg8dFqyov367Wsep2RQfFnfJFuQ",
  "key27": "ThwBbbccj87vcTm8UUZWCf2KcB16RdESbCNkZsd2NzVnqtxfYLXftWwa19fjwsT2MrEnSkRkcXPWo3eFQdcUTDY",
  "key28": "6VLoMCKDL8zrNY9eUe7W4TbfCDii5tEwpLAsW3DZqweRnNfCBVMjFDphZxEKJ3pTez2yz4nvbaMEcJ3HwZEfcn4",
  "key29": "2V94CMUVTec7kLiLmxhjSevLde2vaggWhEsSrKjQc4bTs3U3hE2mx3GrwsgVg9tsmDG13nYQKJ6PZuBB4ANV4LZa",
  "key30": "46H58QZW9FDndL7fnXtDesdeogf1b5oxxd6Qm1Gu4mPqS8kYy9tbbbZW5MsZyUMvjZMw1RV14yv8uHpJEi5tufAW",
  "key31": "2cmCG63vvftsgrmU91DhywVxiueoFm7qUB5PUC7AFb1hUmYw3XWL724nTaEVTRaeX3kbvjY858o4CdVF72VewpMp",
  "key32": "52xbn5Kv9hMsSQAQ4u4LsE4avptZpcKwtVfwSuivsbUzxZQwpLjdnoDgrZ97vp8qBAVMgpK6gZ5wbQxVRzgbVVvw",
  "key33": "25ZQVHMuV7c2QrxFDVavDF9jzGUdy1ns4yB3KdRtHmu9WzDstg1t2hCv2qmLMZzwsfBngHawKKqMwLU7WKs9QYrm",
  "key34": "4DbGfz67DwjAsFdFL4Cixe4k1Wtgq45CVR6Q2pwQr4S4F5wyJGpgqNwXzEn1kT1obEbTr3bNREXSjKz8SYb8u6af",
  "key35": "4gZXaBEFKDbPGG6iDxdJonXR1wDKcTnbbVVsP7otkNboPm9oScbR1PsrsGMhRQzZ4B5iDH9yjc1MCU1B1HPtGrUL",
  "key36": "2U6WwHdvWKtQVYi155S45Aubmfd8ECCYr7KHE8atQfyA5sfgmEAWXAjuz6dw3929U3ZdtYM7ehwxnUafG3T8v8wC",
  "key37": "4jvswmJQAF8axkoqzyF7UCCm2FKDCSsE2AHfjhGNLhkggF4H7GUaiRvtSwevT8iz4GYDp2CWaVYsXxZatgzErFBP",
  "key38": "5D4BwHQ3rzyARr1f7U7aED2Jr34aw1AcrtYrgHqAaMGDTczJfFFkejja9ZneXFjkZTkjQ2iK58AW3hrmTYVczYz5",
  "key39": "xHLXXzYdzG9UcJPFpRYspC7t7f1MzDjnfa8RJw6VkN3SniqvvE8NfLEQw1JP1xL5M77TWJbh5rWoZWw22q4yTAs",
  "key40": "WZJa4K2WtMebhnAAs9pBcVh82krz3U1E3TTaZFe4vCCLQu71fWEfoyZVwH8KYDhUDqwtZJeQKk6Bp42CGfkC6FL",
  "key41": "4b6CSKJTTZdXU3pDUaKaSMevAni8DTkkHgC2yUoeVsnkjkZsqBU1m2zqRhkrstD6UvR2XeUU3yR7Nv1fnrB5xVWb",
  "key42": "obT8qoaLsDZKYfn6b9AAWrqUFcDyfJkNmWLXRXzwSJB6kNz13f2yP2ENUsCZmvmwXkWniwc8XDRSASNmQDdifeE",
  "key43": "5oXxsgzc8T9YDqvkXZ16uezdJC6Wi9Jh471ArEQknpuLJakPWeWWiHVuzqQZ4Nc88Stj54GsaGKL1rCBRJFity3x",
  "key44": "26pgamTvA5icGYyqqHVyp5AFW77zrLv4oB3PvYibKq2nh2mrqdHU6Dj7M888YVniVRHgHuN4iGRkxNNeKG77SqmB"
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
