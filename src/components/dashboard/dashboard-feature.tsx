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
    "269w1bm4t9DCdYSg9XxBVrJabkU5VaFciqK8voc8Sygf7dpJrMMPsQtJk1mkbZn4fVX27i3hLx139FnRyEUvanVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uvs2fHZ4CJVGSnLMRJU2VYDZzCW6AGDWPxoksEx1ECLvpH39vxB5ceeFffJiBvfcDBQqRBNafFHVfx8QpfD9sSX",
  "key1": "LSVQY5RScAHCirkhw7gRTZ7d26CNRFLGkD3N4HY3NAw9geAhxx9u5Q7K67QgjHKyHDLYqTg4vLdjy6ovWnLV4V3",
  "key2": "KDQ7Mto9fMFyFe2ttWB8SKUB6jRG5GYKDMGCkgX7nVFf8z3QRqTZnLQFnfJ432XKCFz5f8wkJv9QjC4vr8Y9y8C",
  "key3": "48YsLf67GU7NGutac1m4RjsGC6c99sYSGwg1dobdfnf7od94zugE52koFMaST7d3oB9XDfJsCu9dTGkrncBDczDA",
  "key4": "5idoSPbPxraUPCL3fiWy1aNRyVRGpTp1WUBHivUhfqKqvXVhQ62AfFy6CFjgAUpzTNBt7fh4zMFYcCxcCni4KbHK",
  "key5": "2Et3d8GG8JZAthZ77Yb9NJ5iPkXTxHxbNW5jScekfVDBSS1PEqYKvHCSveZLe5u3tx2bfYji9cELFzhXGJkrUknw",
  "key6": "nkuPAQ9hvhQQhUUXwC8ZVXNWW43NX3Ev3zJ5jZaNSsgj9GEsF5of3S9L1JGc1kQ4WeDzcRUyxwxdz5jsPuLAzGK",
  "key7": "5x7xe2R2wSpRZGpwHsJvfXJK2MfvaGra3PLwgnEen7XDDENHR1R26obfSogsDeohuowSkqNKDuxsqCyT3ggr3K8b",
  "key8": "2RYr9FpF8dDrHLCqyZPBnfhQGQ7b4KQb74VPULffKjk9gZWyc5kBWRXuj6pg9AvqhRyV9xfco7uM1Jbp4XESfsd8",
  "key9": "5puBZQuCVvC8cDmojDE2E9hxbGXFiUpjqFHwKAdaJGXKR1i2SuwqPksuFh3rRorWZudvRFSJcLBvVezdxLaFPYcP",
  "key10": "5dXb2yE7ftLnEH6LgRJXj2ChJJoiJt6Z2xxsd2TGUhWqrZsasLyfxxVsCJTVq5Fg41be9WCH1bTCs529dSJjNxKh",
  "key11": "3WG5rKRxYhHjUSwuPzf62zDmrdpjGfm14GxzHqaNsDLMSBB2SroUurgvPqrwPZS3SZeXTocJKGCzEZv3PDmXwZVu",
  "key12": "tCzQkte3E8b148sKxkSfYP3EupwkyV3fkNUNDagpGMKmhMNWciE6XapJrafSZvBtjcvA79SRX2vdQv5prZgCEvW",
  "key13": "33rRJaW62JyCKUHSYB1JfmmLm2jgo8LBTRubCgCQUuRf7yyEn3AU9N1uoYe3X2AcRUSSgRugH4siD9nAs2Y4MfiB",
  "key14": "64znzJpqqjh7c8WhaK5xBE9Sxz2sMSNGN7eBt1GPXqXLBTNPYoNdWjszZGkPvympmhANoFjR4d5YDQhiXah7DjmW",
  "key15": "3TrYetvqxAN9w4ueyDW5d2Ge4QJN8TJ3pd3FbTQWbjQaLYg2x8vdZjhLBALimGVMD2sqA8LK7p4SLuEhY6Yr77X1",
  "key16": "KhsfM9rHZmKYvRnseLNFnYimv3KA4o5sG4fr5vH28opcHNdFKbNKqYiuUdVTke36U7BvBYQhubdXTeqtCDSd2az",
  "key17": "2kUMcW3ypbjWsFoKvkKpq3BLJ7xGca7U9L1hKnpvfQS37Ku1CM43EPjwycFa9bXKzRh7ctyq3nKyZUJaW3e42X9k",
  "key18": "2XkEroq6UM8LNwRWQV7q1NDaEeVZyUKy8FpaTXj4tjxVKFCdpSvYRs1FaXY3MU9PmQJSJpWoM1yo9VWLA6Zxuc5t",
  "key19": "5RGesZdrV8jBgebic7KeWEeerjLVsdRSax4kwz7F7oRRbT1fUSLBBKUsEpuk2z88Nsxvo4thXmBQSoiJa5NiVSio",
  "key20": "5DvynRBZLR6LoWcEzZWqAkbbMGYWuF9YsLxguMoBDP5Rr6UvLrJJbEsNp2MvsEHgEwo2pxE7bTU91Pcpyvv9xBXm",
  "key21": "5LQkGvHQ14b2BWYoBsGhS1o8RcQ4w4QNqX6affrJrTFPq3iUxzoKeghkZweUTo3syZ8iKpJydNpsa95tvGDhkvVe",
  "key22": "3XP3Ca7exZ3Bg11Rc8xcZHCY5GbyyUrv79LT7Fphi1mEK1i8oFKqAEuEQBmNcXqV6geXFxUrUyiPerVDNWGQsvPi",
  "key23": "4zCwkUifSUDBCDmN9jeaozvbGZNfgYqpShaRzfi23wKsjbcoKTaS34AKJmNhMtEF2rz8tzCvrnjawVbRdZon59fH",
  "key24": "3qrMENBvutvKrN5AyPw3EjQzCMV6hQKEALYx8585zXF7RPm7rs88HvecMRaySKgF13hsZtt7YAu8kogeUn6F7NMo",
  "key25": "3FdR3EESj7RBnHmc5HADjtypk2unVSQL3bbk19LNzBgJBcHn8QKSVr2G3zMsQcDAUZBBtDybdRfYcj4GnaG9vuMg",
  "key26": "3ynx41WEVXBFJYL7rR7ZUqmBRtKLnzto5vX2i9prof17KVhuGXXqhdocSA4iUtyHwDYi3gWmpFytdLxqM5PbwrnQ",
  "key27": "SoEs5R1XpHYqfx8RrW4VBheLffw2pWHK8ZYLfTne4Bpoi5JYK5HL8FdGKyoMA5Zfp5VXedo4wYHEhos2bmRXnkq",
  "key28": "bbWe7AkxoPQ9WpAuT7A9MW491Pmsbma9Wn2FJnsmmpBJfzd6ibN6TDDSRaTRNWaexaVEpriiMyMwRViWHRJt3Ug",
  "key29": "55C6sxU2JEZzxu41vDu1VFh2QcYAtzHPAQdKVszrws54oHufQaTcV85DR1ijg9qertC85GcBy2koZmVnRFHbQFJS",
  "key30": "2scHwhVr3bnHz1KcUUrgcyN7BZ4rP9HDTthLoKGFga5go5ckcY95Yx1r83P1wHHbi2j5Fks2tws8u78dkjp5AtBJ",
  "key31": "5RQrKy17ncxsR2rid4WzXTkqSYzmMAbDUWULw4W2dUSeD4cnh1rPKiSSh2Ny4YJGeAVWhNjxgYggeYKWvHsUgkiu",
  "key32": "c8gBqEHXwoF7wCFknZ2FLprR4FmXaCLqE3dZjMNYF8nxfY1iN975WgRSConF6NTbLZD8HDyrvj9V1vKNSVzerUD",
  "key33": "3mdcNRUhTYGp6QBhUMtGtizjiMYTjypvZysgVfrjxXnPqDi2S3qkuYqFi1rA7Ynw393nWRSWC4hmtVmKAS61jthP",
  "key34": "3c2Kp6A5zPLM7yQrrJL8DoK3B4b46L9EBdL4qY3Bd2AgZBddLaQpZs8dQPnSzVh6tFxjSUpPRHqc42WUTYJa6Yke",
  "key35": "5aQ4sutSf3BXH24rwS3688ThAYMDg5f6woQc7urr3RsoNuGyTacomCA9VXEkVzJ8JF9cAFCZ36wUjPyJFkzjFQ4i",
  "key36": "63S8SRkCDgckVamvWiYzHUHfDBp123Uo5uLQavsPpwPZNUhyBiTfh13Ak9L7iR689eTb24fHA7dC6yyqbNzvi4ig",
  "key37": "5LxHiXDbqTzEBkWnEEtVqk54n1HLpq6nMxGtDzmY2HpLeKvdaeKQHhi2E8izZTsWVBwNnHkSqG9kKjU7NBA2yfE7",
  "key38": "5rrDx5aA8MQ5f9k8XgjVQ6qKKmJjSjypk9Hvh4rFLzZYzz93Atj1mFmLPMHKpMdtXM4Bac9D5CjxFqa5XnGgJGit",
  "key39": "44tqiBApQp8Me4p7cRcwSc1gTAwk7J78SANakC1KzqsLatWdagEBde8yqWKgFvn6bWXafBYGbnDCVv4aUFQvZZ4j",
  "key40": "3us61YMMPHanAvTExHtEwWi79W8LiYDnXwidj8NkD64kHPreV7U6sRmxx4We9J2G1MPgRe2bpaMVbnSJ5atpxxRN",
  "key41": "37nZSUUTAcBGo1Xsa92RNemYxJRT4m2ifekNwgrnBFRQgM6WjLUb1Sr8TUfWjJGa6pq7saVP4oEt1GXwqigQsp8w",
  "key42": "2XbEpPjezsZnFxJCgMsNd5V6MCYLUD1uNPCgww5Qj2VaFYKzCJ1ydznjRQq5xFigwRjVnR4ou9zJ7oRZqk2tejcF",
  "key43": "2PgPKvSvXrsjtoEk41f49YMttLDvjaGBbsnuPuQ8DoKreN4HAkz5DNgiZPNA7CTvEzmuqCM3VAQhQGaoEyUPWdEv",
  "key44": "21NMgL9Bi4iLpgu7VqvFaAyekfiTsxSuAWPH4NF55xEfMdw6c6w6Xa5w7wshytiJsPENkjdcegW2AEkfigyaR67f",
  "key45": "3jAXqR4nmYjxd9G25dAa5icZB6Cj3nnj8fFVvwosm2USP6a91GFzoDiqE6FPD4TXpdsd4scBXX83JSVqdsEAn1tR"
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
