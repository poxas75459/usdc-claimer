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
    "2b12mgEJnwXjgCrvrygAPmebj2m8qYZoR1cNsCuASVxxZdC1YQ8gQAyFghHMZE6CMPLwySsbFrecB9W992x7TLfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D871jKDhLYXciTzAjD8cmrPq6Tsu2aPxi7RfmEfPaXnkWNhemfuogxbLwz7kxAtc5ivbVpzWD36duhhApDu8NfX",
  "key1": "3WJc1kEj5WdiNdW88cmHF2osvdRZuiWqqWUiskL4DBT6JbQYELUQ7XhYkMs9E7iWVuYGeJFD8CvrYmVZdpagERNp",
  "key2": "MQKWtARsDBkZT9keBnUiL5bQk1jnWdfsp1fgXtwHQTZqzoVZxpu9BxuzmVMoKTsgSwsf1ocWf1Nw163FC4ZzcRd",
  "key3": "5c4K9t536ux5ZkRrV9wY1xzt16gzv2FfqMHNSTh6MZuJ43KVb1sgzMF4QgHdpFMfBEKmGEipeWvJTbijiFkVtXSF",
  "key4": "iGSvU66J3zq18zeT4bpaqzmzzLP8H7owASXB978smjcf6ZzxJ8D4TjY1k4eJXdjDzxhLRaAtgSzsrvHNhxy5EKv",
  "key5": "SU4NJarbCejkhWaNPc1pTPC18oxKqgHptubQeqF5spGy6xx9CixwL7fpUpLhfiMH2BK42WoJ8TptPEC4uGHsTmJ",
  "key6": "5tGRRCBPPYxLTqS1E86g5wH2okPkbRj5HVwXY8rQomBtfCUxYXSAPsY4foPphxxaNg6qgsk9CTWwE19fk9MTDwtf",
  "key7": "4KnGM7zoHMnriH5aRKjaXMAzxpb7Wmv23tYEV9dJKRNGjhyjgeULQaHbXGUV7TeJCs4u1e8vRQQ2cvjm7DZCTAZr",
  "key8": "66cRjZ58amTr1MwuJuVcQG9rUc3gKAqT8eo237bsgGs9BCXwtXtBjEoLnSYixA7Mh6ctdGMHup8r5tTyPiBHyECP",
  "key9": "5y3JNqCMza5k5HP6XiofsKUK2LDXuS2Vhm6QrxgzfMyRzQCDbHD3i7TXDRvyyo9jCw4jXUoQ2rS2xU9CVgD5CDXD",
  "key10": "2ndRpiHje6Mvz3noXGMid23Hm1P1f4JxFFBKyRQ5Wg26W4qjWoaQvRZp8MdgNfqj4hTb1LzsuMHFY9BPhzScaUSW",
  "key11": "4nw9QbgRZdFWcvJR8nFyJoCsFFd2EeKGH79hw7bC7vw3W58XWXJqs4GzYVecgnveiajkvGQ6HgraWpbp8JdW2Z8Q",
  "key12": "3DAaRjXTPDgfkevFPDeLacPR3Fd7SpdpEGGf9CAkwvWuaxiNqPcHy9v1876GCSC1sva3FjEDvEvkMLB2xivZ6fiC",
  "key13": "5Rsm1Puz62Z7Uj7hBccW7WsX2T5wetM93uA8enasn9UXsDdUfySskxKSB6iKkLGJWpNoW1gpuBV5AyTtNepRV4Ce",
  "key14": "3rnRCbr7DqAHZNrRpCUzVNBogSkJef58CXjc5LorhgQWsvWqJqFWNcQMKmRNjMhHqMn6299VpjiqutXRpAPVugUr",
  "key15": "4SeHM4vJskrQwadZKQzjUiiHG1irpZGyF1A6Hrb68GmbGCWWehAX2qwEkKkbh1sJnacR9NAz2kMCCvMbCYUR744j",
  "key16": "z8e78eAreNurdTQeRNDUU6gdVrqjch1vPLgopCcGF3e7c1dVeLnkUrGsmQmrjzugyr2rgBM6MUJHSE4UWTJwkXa",
  "key17": "5XWwQSaTJGZroruQgngWPzi1MJLwYfswXsfQ2tDdrXgPYe5d7qMArouf7pCHc5UKdooiBDuFc2NhmG56E8b5GNgs",
  "key18": "5WbzVwkkzSoTD9VdjEzwS3Wdne53suiwYbLdDcUZhRsddFRT52Rp2qoYTJsbPDLU8z5krTca6RZKYf8pppp89UF3",
  "key19": "49fZpCJjREFKfV8AwTqewjsy2vHiKQzEnYcr4kCyV2LoLQdyE14bBXRQN4nXXrga8MWGfp2E5MjTWzDisAvVwXXj",
  "key20": "3MxTmPKuy5szxiiJhNjwruAfikQfCVcG6o7xM4EYBDAbiox7avDDdTUNF9yJqD25C1VkArJAdEFDkQmhuLYTUpPe",
  "key21": "syxYvjtnwsLJA47jiPJZyibypDvRgFs3icAUGotCggZTUHsLePYEWtcCdDadNFAVy7mtShToGwZ4oXf4bTNN8TQ",
  "key22": "5aRhQMQ1r5BizuSimLUAf8RAUmLVSp8yccfbX3MCZFLzd21ibB22LF5ywG3eCyKCS3kH2Hpd6mxwPyRgusN4u8NG",
  "key23": "A2pjw9661hKQ5z9DNMiuCWTD96eL3cNpJvZdiM1zBVnL3GBGhSzzjdk5wATGWtB18sTUp3eHTufxbpLJ33KhVRs",
  "key24": "5KBNwkQ2j1bc159apTbF6cFiqsJMwec4xt7B4XR3wTCVnxQm2RwLiQhcNQqwombHgGNYBWKBpSEvNv2bvzDW9HnH",
  "key25": "5eFYj8DiAuXwheyUMWj9MXtXPgEXRBve6stKxMcm2ymnJkhtBnGXt3RABZvu2hUKQCnoDhEzbfEzSCMBJnCqw5x9",
  "key26": "4fpk68Wz8i9GHtQgUg1cXzLnycf6hV1gaX4kZ1e33S6gMVGf5kZQvDq85RCDfyUgJiJj5GwYbRYtWt6mEHXBqd7N",
  "key27": "5CUUGA1kzbcNUwoKZ1Pb9SyVMbpZ1kmdiAgcCp3qKWV1r9qFCjbQQMfSKyrZ63AXANpDvUkDkRtYEVYuL148EiAo",
  "key28": "65s6UzzvFrvC3coHyjN1punWLo4Bg1SyxcapCJBnCMsShgFMuzbkXNVNZgVMQPMdLhsfKA9XWPJhPWJGgFSP67MW",
  "key29": "5591oHrht8qtqEX7D1n3bvDMUaiNbHfChnzQzPfidEgPZCX7WNy4if7Lt5d4gE3evucSZFwWf16oSPcPThopcFWj",
  "key30": "2bXiq63gnezQ1uiL9fNYHkVV2gHPqPawXmjmseibXY1s7rpc1HPvCqYQgEcasx94iK6Tx1Vxqos3LxcXSSKEjSHg",
  "key31": "33NmoaSaiNn381e6NvJmpY9aHcXRPLD3e3djdRLxKHFEb2QMwoXjrkaFr8mUUa13euym2SoGhUS5dBsucxyr8eEE",
  "key32": "3ecuoudnDL7HfPqTMTjQxgdP7UfcB4whSmueumjD9PHLsBwCd6h6dLKNEeZuNKyy9pBo5zTiorEjhzA9S6TAKXyU",
  "key33": "wua464buxh2SbTkf1uP4sDMbJTkUMVPrxMLVY3gX5N7qQrrWcboUZZ66yWmGmG1uK4Z71UgeCB966vuh1Zv1ToJ",
  "key34": "3hwyvQjk3fkZZ6zsuruH5Fbof34hHzGwvT5Rnmxr9g4ENqa3G1ferepe6rtRutW3okngNPZipGhrF4WhD8aHQ4fi",
  "key35": "4CV8AzhQS5w71zQ1NBemfY6nSLdoW6gVkFB1CpWiB7n28UtDpUekfwLLcq1hgy31Pn1XfttS8JDUqPthAxqYzY6R",
  "key36": "4osMf2TSQfbiAUXn4bY9ju1RmeL2dJKduE2rGqSkTyMHoj2SsZwQdwCRGDYvGzJDtxBQEznxcW5QYuNw1QPtyAp7",
  "key37": "3oLwyQSbxsndi5WDyzCR2EAPjBwJCUuScjm5k6jv8QbR43inbkr62rJPoJ9FSdGb9KSb1fLocJVziXmePXBye54e",
  "key38": "cCb9C842216p4gPETZRoov5cdgfdb5iLkZumD8Xc4mvEqfzw1MYCBhLt66hQDk4bdU2ABa1FrbevJT1P9paCMTU",
  "key39": "327ruyn45Q4RcThtPVLKxW4wzqLykJDAYhwTULthXwAGWCPqzNHPNXMvqNDiZHn8rssJ5FXpXH6TGHxuNktweokF",
  "key40": "5sNH3zciGttrkmtj3GVAJ4njF9KxFmTEpEL7PyzwBCemAhbwgaRkZqCxDfZNtkBrHE1YRrQd6drEGPQEzH82VmMh",
  "key41": "4HQA3v85v38XzYGPMGeR81XnwRZWk2XQ9LiGBB5cQZPahkEyc6CNCv1rZCoq7RZX1qPKmav2LDxQ2mMLZqRm6P3T",
  "key42": "2sAPeE13RcuC42uvxzVniiiVTBuxqYRVouWKUjJN5HKsk132fRsZmv4SFCHsRn2VsSmhVQWbXizaWZQnMG73AyYH",
  "key43": "3kjv8QPnJ51tYg3K7EHofYEk9dSgMzW5ht85nSV9YsAmuxeoDWHn82qfGXCc5fcQPzLmQ2yGycc4S9RonRuysePZ",
  "key44": "jNMmScRPxmS3R4ZasYQftoGZgL1BKFbFb2s48ZCCwS2D2fK9eh5n2UwWeGxzKy4GCGX1Eqd3qjJFJnCd715VUvA"
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
