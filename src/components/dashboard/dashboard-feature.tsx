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
    "21bHpsdYg5pDAST1fN81L31b9p7GxkvzEqUhsVLctTi44swrDrrTWNzCeLf1ddsUZoB3zXeZ8nWddyNzPSirZUSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H1somqx75S9NuyQbFJmRbsbZsGRR1USzW1DzfsfD9vvNVDXXrmM7B4wjVGA2X5Fg7KYjtYbqsbM2uJhvSy7de65",
  "key1": "fqgtaJEowiMigFpMAT8ntsXE6E27eHeoc74Re8scvxV7o7iBEoPExqK8TvMCGdpgXdjb3c6FtHWEiPaaW9TdS6g",
  "key2": "4H8MpKyt5rD49YRoudmNaeZ1cqAatx1acSWywzr37rQUqChFDDBEag8UHETSEAF3vKUF5METPMNVeXNSHDFoT6nu",
  "key3": "2zJ8EL4bijT7yAAWssRuMA9apsMaNtRy4yceT7TqDVXHPoXrfmhPuAQQe13b9aDM61PY4tVGEPAEXc9ivQBMGmfF",
  "key4": "3qbY5esWVATPrtk9SQRTLnyLLxDnsGcW3tFqqjf7uVcXggJ6FoezAu8XFY2na33Da1DWVcZ9k3YuRVgDiYTnFwmX",
  "key5": "4HCFUNAk44R3GFiqd6yzrQf2xgeXPhn4xfPWqqL5GtUP3i3uV8KnuAARaU6cZix7b9esefrsugWYBuH63XUkdtkV",
  "key6": "4Tf1YCAXZwJXfpNLpYKsKney63Kyv7pvNKTQc9vbjLFghxfsyCPwCYKLVQFp7m9qyMbwwMQ7UQsnpMo2S3QHgofN",
  "key7": "5Jo9E3NNY9m9mqae8XSVd516vPxt3HY1xukEhtBCLWyqA3HWFACBiUeog36ptFUWdbR9YpoenMcSyo9mdk92NyLt",
  "key8": "5n8Qho984adJPDdSRvVsZYpx3BTwtYvGnAXCJi3h2Jf85ByF2EuaVhS154ngqf8QKDvrtDQXukuLobntExWVeJ88",
  "key9": "4vez1kETdPEQg2VHsgwhYn5BkBbMguHKCUoyoN9qVY7uXB7tZW7jGmxnsAHXNCC4C7F8EAj4SbxLYQvQqVemSry9",
  "key10": "5qCnbNCK9DMPvDKxhdqEuGsagaHz1Ygws7914yRWecqCWmdGLj6MDBP2rq9jL8QKxJiRqhhTi5BdUgkqraGCNsZK",
  "key11": "SxEp6Vf1zyWxEtggrVojGdhgReiUPau6cvTvvzawfSzqeREaV5iFsV7W635jySpUqT6xdm3WZGsfpUmDpS9kUYr",
  "key12": "VJ96drr4rU7mamnks5DKnGocQCxYp6nZCW2tiWKGt3zb9Jo8vn4eagCkEnLCNgJYy2g6sYs1pnveoPe6qU5DE5T",
  "key13": "35BCEu3D1wNz1AcWYv8hpwJtP6ZbYWqyreR6iUgKB3XXrXAeVAG8mucTBnTkhbbvrhqyXxvmze3j6C3ePTqxmG49",
  "key14": "2rVktSmSqZMCuRhzdGqFYMRJUZR45W1UcvLkepzHvePyFffg4tMVtkzAfC5t1UccxzqToWFtnQz69esnpn48XrZ4",
  "key15": "5Z5b93fmR5f1f8roRt5QXP4B5btmJuXAViVCtzUmBN2xK18xVYsZ2KqoVRnJLfua4XRAHXw4111KSbedSiU2j8TR",
  "key16": "4cStooMpaFV1emmyoVTExiBk21ShEAgGXUEf4k28ychu3wSoWUyUfX6WZELgvdqS9A14ycF9A4nL6MC84Qurqvzr",
  "key17": "fmFDkD9GKe6mf93WciHeL4aZs81sbbhuzC8yRweRjTtqFZucTzFKFhBS8JsfgijYe3DUMKRFQELbuX4DkUNDh3d",
  "key18": "5mAWB4F5BoPnXGKqkr5JfLVHxKrT8iqbQrCSQvBr1rNVRVF7ks4wQDKu6Rz8eMYiuwHrzgDrtMpEtX5SHZ2e12Bw",
  "key19": "5MhdY858pcGFc8ADuJJXQxr6WEwNGGGesz7UYKzLNzoh4gxkMwfhLNYtNcyo8HVcXXqFyWKPycUhM85snhdwKgjx",
  "key20": "4YwHbq3RBho9gXWW83JGqUWqXF39ajh3Kn8hh5gzBwEuMXCF2YaFu7QNVDbcm4cgNJKPrcthYz9bwYxT5rTmgw35",
  "key21": "5MdV3gm2HmaZoCUz1agCYJDFEj84zVmZ6MXe7kuSjjA2hQfULBXYdypMjty8MAhxc5qxTrhHtXbFSt9PoUkcNQCt",
  "key22": "24yz7vnKvjcNsFYeL1zorf6MHg9327q29BU4rdT3Xt1rvRgsSMwAS6PmmwGTe5m9qHomBuroVtLDNE1qAVY3XnzP",
  "key23": "2jN4UbYmBMdN8tVtggbX6GAbhsJXsoBT4nRAEc73ZRNMS5C9xXAyYAG28uK37uWGdquzT1QNgZUZgTTTphwjXo2R",
  "key24": "LCa3sXzLKrWPk8iDHokUE2SjqYbkoBom1dUndV2BdcFbNpCTc8CoJy9MJy3mehRZBcProGKFeKbjferYw5MXPd1",
  "key25": "3KaBTs7MTXeZHHZ1A2a99VBoPJDu21jsoBt1wAV8QKeg2BZ3pnb1g4Fwo55hm18txbsTd1XT5uEeSfsdoJwQBnn1",
  "key26": "5hKNtFkxmnbzUanN9SroWyXLSwUvDqUMFegzx7pvQsEQG4bDvrzD399LxPfDpy67jYAF5xR6LHzpvaEfwXHFH1DZ",
  "key27": "43qZLLxqCohyKWzf1pfL14k8VWRFmQ1vL1AZZ1WTGa3GGRDUyCNU6RNix5kbPrqRhBxcA7ZyNXfuyzZmYUrjCRm5",
  "key28": "2Ksu1oT2Df7z2McFCiiADmqxHsFNUZLnKLgrmdhhhTdCGR95mTBBLrMX2STr2v5pLCdG8tqs99z3H1GsxDbpCSVK",
  "key29": "FNEPfSwho2KHFN4d2v4N7k7QRdNrZHH8wLCW5Pf7VLRdu8FoCJQpL5zjhSdqgPHVTHcSQn8RfHyLNttgupSLGnd",
  "key30": "2USusn64FCUCBfxmjZBaro1Pm14BtHyhLLdJKq85kARauUzGQmapcvy3GgaWRySFvA39ziWUgoEmcdcUKXUzuSXF",
  "key31": "4a8m2WpFZYRzMpqQGtjmDG82aTWRA7jTbuFWFAMbQq9K7VkJtzSvwaurn5BPn5h69PicWYH33hCwwBTfW4u1pxRy",
  "key32": "4BhLCy5wHrPrxRh86puxmit1S2CN1eg7LWxhWPAA5wo4zGK3kZjv5DeVqDmW71RV64PvP6Cn2dqWQnLPX819VJtj",
  "key33": "5j1pxoaJMzMsgcCyJeVnC6THQ5NTp6cy8sjxqJVpSuSbgJTc4SRD2XipftsLiUga4Sr4WQPKRNS8dZXLG9V3uZrg",
  "key34": "md9GEnLKYLYo4zYh5WXv35pQLPCh33EUP8oYPoM4LNPcVLiBXaFNfyMWwmgPGabJcm72fMMuofjs1YnRKGgv8Eb",
  "key35": "LdYtHzrpJSHvQG2mBUcXbEsmBavYeeXgQEpPpA7hV1mzfKVvBsars7ButdgP8yU5fEAnULkZb7rAq9nHVocR932",
  "key36": "p565Y6VkA8AZUuZRDzmwVbC1ZNkNz861XFryRHVnwQNNM6NY5sQ2QpgYUn3Xb5WnD1Q2bwBRS1nxraWvJv952tM",
  "key37": "2982Zeq9E1UyYeCWUZ9C3uQ6LNEfPLbTzr5U68YGqNrwjeYyfTJUYpSkuZcc3gF21Bvd5BJE45WpzRxXUCNzeqfM",
  "key38": "3Jr3LbgmUJ2FSj9VRo4y72VLvdnZU4MhNdmSxy8KfP1pArVtYeVjQbKybC3bPjP4bmXepimSYkNYQzD63RqW8tqN",
  "key39": "4Mu5JipMn5JYZGeLmKkCKmRJV9D82kWJry916s8LDtCmk8TRF8zNrZiDiwMBFGGXvmzNG2weV2MgRXtayKuykUus",
  "key40": "NToA5sb3qsEAwDr6hKrciFqxHnRPfUn3Su5kcVaBWhD8tt23yr4rYuC8zLbb5bqhRLntbitaMZQZWNyC12izSUp",
  "key41": "5Wp575FNLgv857xpritBDaUscQ5bfRUTytLJ4yZ9iNCkXjRdjG2uMjnX2L6L8B74QTnkgtMawQjVvhs7Ga9uMk2G",
  "key42": "25sAJYDCY3WbY8UhhnDMxJzvBUn7pevs7qjm6JNEDB6xnh4mN41t7KYGnCBf9fftXBZZPxG5ybRHRuLGnGEHhoSi",
  "key43": "5EK1aZeBesajhHXQusFaPjkzkCs8wHQXjsQzoopA5jUD4Phifj1b6qhSBmrCxcdMCiviVobHSExekdrWsg4Ukih4",
  "key44": "ud3UMyTneSHDgnAsP5AcFdVYvrqTPZpFdiXai6X44epr5VcBtoeHF8sCtAp1h5xapfbBaPyrAuSyJDkbWScTiWA",
  "key45": "2LLGiUMmpV1acBhzSfB8Bx8zgSrfBrq3XJ1BgDDUC9Hwz89XHDiGbBjBffhLe3ruZHtBVHhaomQ2wZbWPAUDx7z1"
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
