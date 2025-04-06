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
    "CGeJyoq8M7CUURqMeDUbgC6qs1aWR9LDXUPfCWpPN7zDFCWCjkuUdfZuGhePNu4rw34XFH4RNoNTMDNQtSCpx6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ezSoXDFyYWwAHFVhGSzqaRgSAvaHYY4isFukLEsDD8RdrxxCrxL8Xc7CX9ySN3JD1FsZPgLKJXftLUbvwfkmXYq",
  "key1": "3sYmaoBmwh9bK6jWEYUfDU3rcyGfLwbEDxS69jjHm2yTMfbi5srae1n89eq7rmF56ThbXMAPuKfrHgcPQPwhweM2",
  "key2": "54xhWttYjTiX5suE1C7pxSiJjGctZ7Y8wAAowpGb9S8SrkMQKW5HhLynB41UknHQ6SLfAV1txF1kJAsq5tmjH3Qc",
  "key3": "eWynEy48nfry7iSiuPuKzw14KyRUtnA5LAyPTriT5AEo2ooai32thYRp8xfCKg8Tjosv5iNXPiU7qiUWsVA1SVQ",
  "key4": "3FTFPPAxmfMkfbXASQDeDAVsHjaEGUBF16AW8NWzhahuLEzanQLMdaV51W9WP5KQFg2Wsb3RwFPK6E3oHFkuNnHr",
  "key5": "4diaR7MnRoH9RqFePAAAjpfcRanWLCUnEfQbpTjSy9f5r2JN8XGEXHY638w8WuZtKuyEKmJDfvNBeDPz3Xqd3w3G",
  "key6": "2oVtokGSVVhJZNF1DhjjHCn6b27J9KhX15aGnwR9XXFwcLjNkwrGHHQ4tb67SGmoYf5nXAvZMUhhnc4EQ6Z1vJHV",
  "key7": "2FZweh7ocsj71J7rFtgQj5jQxJuFXSwoE6cPLRKfeaF1CnricgPceoQns8nm1Fzg1DrBZJLGhcqqtGvdXN55ipPT",
  "key8": "2Q8pBsMXb3Eev3m5yBZTvrkvqBgcrM69kehNnenuW7fi3JB5quiTC8EAJWcrjZgSEsfTRKS6sohnK5YCJCDTnWTf",
  "key9": "4ry5fcrAbBos76wbrtS9KJ8DYAGrejStHgQaR88f9g1LTnHEbA4tCahT4JxKVjHT2yxcHsafyK5YysErURWtqT3K",
  "key10": "3jSMDygaFqZFTizW1LmEcbM7y95y3A7rYuu4ARrpBjpqvsECqA1BBJt9Yya7HzU8Gv9UEPtKwmVCGydnhWZyFBna",
  "key11": "nVavBpGE4WT17UfeKgNX836Rg8qQLZ1LD5a3FAzcDvkhLb2Vwq37FudX2uuqNsnocQ3pwQXxMStxuo3TH3yLuRj",
  "key12": "CjyQdCXUSDHNs5ZdPLYuDMRUZhEJBwzyefnThxcYJLvQvdxcqwfZSaiuQ3MnkZTTJmiUhvnk5BEJ7qWL6eVWzzS",
  "key13": "5C4tSS96CY6TFCiRG3T2b8kZUYKvzg4Cw3m9eYpJEJD8TmmLCUQAqK8vfLtRctdX3bbdvhonPpuWkoEVHbC3c8oN",
  "key14": "5iSvaqxYAKf8v4rBWHB8D4iN2F1vQq54aY8aHdAVGwA7L5W5xiuRztqNmLPwLYLVn3u4qiyQRZ95rEgMfgqHPqSx",
  "key15": "4NfvXFW8UQfTrTH3g1cANw1egXtUpnoxfv51nuafM2WMYSJWS1dGDsRwhbmDHHCZWKYRAL4DhW8iNm4zsAgftQ3",
  "key16": "yKjxiuiedRdrgWMG9hw6HJrPekVwYzZhVXgk85q1MY5V7Krq82GGzQPwrbusgo75F7YkepmvXuwHvUb1r6zF4Ut",
  "key17": "4ENZo2YpYNUUPLmREiamMudcMTqXpemD6gBULRpAm3fC3AqQKmu7XeNxfXtgCfUecD6UbexPWuUjTsiaM1Duo86H",
  "key18": "nRzhvffySgDykidwi2NoCDWhrqqmJm9hB3Z7UPQJDcyw4VR9EKmMkHBYSZMsEsQNsW826b38RvibTMY9JM28UcD",
  "key19": "4qM9fM58Mw6inyyktLZzXTTHtSkiuB2RdQmCtrc71WshpMUjFEWYJ1NjwzjL9G7boUpDRbxNsDwRKv8q219Zu9nr",
  "key20": "3wcy6mGHCDV6NiWumTXK3b2vNMHWfy6QC8nj7D4csGXoi1sCTpPFucVnZ4SKRnvoyn6VqQyBnQUYhG1m7obenwt3",
  "key21": "jNsJLaVJYaAccFf73bRZcf78ZAsVvf7FZBqGFuwzSb1HtkQSyHkjhztQYzitEjJd789RWJidB4iPChfWxgEngMb",
  "key22": "5QbXacdD81L1Kjq8afqiLKGA5faMvFWuSdvPZP172JSZew832jtFNgtrHjSjFdD3WnakuY2ao35LjD5koJaGcqEk",
  "key23": "5i9NfWmAexLhxghtuJxb8yyMRVovhbcKCnqL6cBNgu8AMCK8YSJAaikdeeRtx9yCsDTMhUaGEQJkZcMxe7sdEYUz",
  "key24": "2AdyEhhdLeXbEbwMWGFLe5rT6monP9eaNoKWKadahW8KhDWRras7Kv65ugcm9bSNj8KjmNfEc41XYDnpzbu392oN",
  "key25": "5ZAFm3Lz4NSqGwPEJe4tf9QxDmrVMiXmXk8Sz3HvNQWfgQqthvdU8GB4N9jy4c3BVVaKP6TNsaScAFkb7UkhkmME",
  "key26": "59sZn688gffJ5gr9h5crcxBVkkmpAyjQqruGuDoQgriUcYGnT23BhTqeJEeN2DqXCw12mnBD9VJtoH1kntdJT5vu",
  "key27": "4K2j3qPWftcnBWTEhYk5SRFch2aHajWghxBRZPRwvnvUa6ehtyBDkf7Rs8XkPcaU2aUrZ8d9Ch7eFrE344sy8udQ",
  "key28": "2vgDooAWgEytS6KHq5NrQjMj3fzoCP6uWjV9AjGcXCHkRq2SdRaeAMuRbNgFPXdbF2LxXjMPmsT9o5fANS2XyX1g",
  "key29": "5LHFWnR8gcFmr4WqF3JZWjVJ34V2aCQsm8x4KvMdk8wdUzGF2FkJxRYnG3DwvgxYqpmfKXU2mnvAo8sYvSK2uXuV",
  "key30": "64vo7e8QwQGE9t65nj6wB9gQ4BiQRzLsueCLwK2nwSD8aLbCAZNF92cZJqYKnBPksaDn3Nx5NhcXkFuXdzbwDhqw",
  "key31": "2Cv1dg7dsZeqgpGTMonY667YbQTbKLAzfjrmVocqiXyMQXUSSM7cXMhcNSRrm7Cux6XqPNBH9puYR4zdxdwnb1cg",
  "key32": "4bw9kxux4epJ5xMrtaxGzNUXWLyoZkrZor5BLEZgkZMKHAWTF9pkBUqy5mxQCPePDyS5bCrLZgdhWVxtg7ueaBhi",
  "key33": "5nK8ZgE6UrWcK2Zq4SN2dseG4i3qddfznRMMUkXbDU19GGYFTeSz1Hm8sFoB7stTqek3Cw67ZbvVYQ3m4pbFo1ss",
  "key34": "4R9saKisyYr8RyiLct66zfvRJ2K7YE2cWimjWSx7basmEQL2zrvfgwt2xv15HmVUHjtuxz3T53v9t7YRGe2tf83W",
  "key35": "2x7brtygYRgNMWNE77P7Hu3XaWGurmskM8Fi2qvrnrMqeMAxTXoos21LDm4nQfcbVsKffDScw4oYBgcjnDkLLUTd",
  "key36": "29U7zrZ3qP3xp6h8Jgdtx5wjW9Q3nTkDgQiYC8kzxJdTXKLp1pkY2MQytT6A6x96bAdQg1YJjjA1qgCmdJbHY17q",
  "key37": "2QchbcgWpCNMaZ9pjKTP7e3XJC3jHPTenktwGDciqSSJnWyK8sFav6FbNNokxcmfcAJdw1FQ9YdVYs6mxgeQ2ZcQ",
  "key38": "2HsFJZwryZXqdfD8Qr9N65bamb4hU1yDHLu66tSsZ7FVtccsU9pNTErKFNic8m7toppSkxEQfGU7WfYWWTLVa77q",
  "key39": "5SNBrstGQMHSyRQwXwhdtGADjXw1a6EToqMdruVpfm7u7C2zLKnnxg74BKj4w3i3fQd9iq5PvQmAUaEqthpCHTue",
  "key40": "65FnfcVrfPGbVbZmjAF2M4oQ5jkCjY4LTTexjnEpWGuu1JNS145tqC2x4DzidGEqym5w1LrzZn2bKZsCqkBHf66t",
  "key41": "2kyfD35CJaVLFTATN1jiqvv8gwnFYCaZisQc4Rd8T1sRFXLyJFU4i1XiswucJzbsVt2p6PKzyizk2syheD9z4gq1",
  "key42": "2CiEU2wQYqVjKD8Bt3B3mCWpfJyQy4uAopbDM32L44b9t3c9UJFZLxye7kp4DLHxVhM7yV3Hk8MrzqUs2yZB6Kif",
  "key43": "3isAnPfAUhcwk7zQjcGkFr6iLx4cCbX6tZX6yJ2cDb8MGLdZhmQDsMAE34LNkA4tK936urhQjooY3aotY92QnZLC",
  "key44": "2Ww98KL9MzozdfzMUNDnni5mUZdas6qHhiNRUf7jPUHrjicWWBcnNckEfDTukZ1w48vTTRK9qvL1FDDWNgPuqNXq"
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
