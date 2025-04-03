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
    "5qgLNVkRgQp8RbzBrdMNdQiZcRUiXBPtBXbcgS3Z8KKsTxZHNtn8JpY78XePkffs3zr9AiKb19hWdozQnPQmR4t4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mzaoqhV3uQpr1GVCXsuFZxPJsXk1E3ZLPsTkujtcARUwy4MHijFeazFxHo78ea98wGt2p9Ub4vq29YWCaz3dkgY",
  "key1": "2riWGcrjcjoxMQ5hL4GWzsgNiEuxcYiFSDfFEDRUfS216YYaKePX5ZyUnZcg1KfV8EAvF2X7RpuMbaJ2HkSJdVY8",
  "key2": "5d4qwABPorNAX71dfLoFvcs1decY9S9tHvMh6P55YXvJpZ78m8sX2B49H6anq57HEgKtk7Zbf6NiWADPGFGGcUwG",
  "key3": "43Q4hkBefj5RPjTrqpZHNuuoufZWTyAYWk98nAkmejLjcVN8RLqZ6ZBA6M2VSzAMPkZg2kESJ6hj8dDMrPfcce4H",
  "key4": "3LkPLbEZs9Dx7buADAo8seK1gG3VDqN2d5kKdjqZnsrAJQkQwjkLG5WZqxZFSENcRErfsPreU63GEDqZtfxXNk7i",
  "key5": "3DjxgJ2t1yRpkAs9aiNZhH8cGRu6eG8sSh6zmESwjtVitoK8j29DozVmVSuYseycprhVhQBDnGZMRhJncrYXSoSk",
  "key6": "qQ1CSMpGSe6bZXW98P2i8Z7dmsu8Kp4ssGiKkAG3erAzhUpKoBUQG4C2PPdoNzEkzoCP71BwUGLh9kyPmsCJeSV",
  "key7": "4E7ZP1XLW9EFJtz2Yy35kdRPh57moApQZZdEBsU9pLiGTUcYB1FKVW6NQjRFD2Rka7VPu6MEGgJAP7X6is1abybr",
  "key8": "4kquqvFMmhAQa629JjHR9rbRxNioqZTaWDJLP8qkVtfAo9poGFbVbJ9VFqPmEryqKqVVZA2cqkpJhBSUxyq3BVy1",
  "key9": "5ouBLH6j4qCweR6K8ZEeqa7vytRdgALwwVUQTjWULekDC4Vgucg7pU9vYCKEf2REpVEm94mwjYpyyh6Syetz91RY",
  "key10": "m2QYs6aAW8FvQWvXStpiFVmqhNFgMW5JjppPRn3HjKQYDVLkPQJb6dSCVKRmr42rbsVT6eAMQumNFD4T1YDw23y",
  "key11": "67GW8AEhPKEf7Zuyrmn4ggqjre64BKmXbBiCHgjsetMASfQEW3ap9cLzUWZx3AvKbN6co33pyvXEY8XrLuQDiQF9",
  "key12": "2CmCdnH7i91rvUuwAsQ69CmHAY1c2RWtAfsAvw99zR5dNnwSxoa4tTgdkXHGp3faLgCba56JHhiert5QZbKuyn6u",
  "key13": "2jfobV4MisSprKRT4ByYhfPhpovcDBtktA9QK7D9TY1EEPBC2XjLgyXBQ8EUgAHhN997fEh44ZfE6QkfiiKSZHmb",
  "key14": "4XZCaBwFFHycyVrBDytEd8VakJo7QpTKb6UvDQ6C8Axo1C8oRdjHJuueRc7iKoj9tBY6faWWjUkcqqm7iNJmNmno",
  "key15": "3igHC7PBHaWyYBZ3trToRvhLD3sQbvtuuQ3RvsijcEAgZ2zu21SvTgtbn8UersbcvbWbNCB7ykES8WEZCkbLCZ1C",
  "key16": "64i9hWcZBqFFJtrgStRFqYWriznXeaxi44Tb72LUcR9RuqrCzcADqYQgz5YHxB7aqPJyKxYBefSY3PCykGRmB9vQ",
  "key17": "3cbhcZCX6PghKPmbb1x4rrVmM68Jq2Vw3sFEgMsP9MAMVA1obaK2yUtdLDVEy6MDafePW4MtqiGmhoPjQdb1FVJk",
  "key18": "4DZJv1DFq8JBH6sNpZGHNzH18fT5qRd5guqsezPFLaf7Fz2WkgxtG55ePZMw6zLa7ynYmYboRthvKvQ6N9R7SUYy",
  "key19": "66XysnbaJ1Ay8TcpKyAJsKSYDzUNQaebgBMY9KNrpG7sy3ym1BKditS93tiVYFqWDUwNQeGfXWNgrayPTb4qyDow",
  "key20": "4oTYDdXeEwu7whHZpvFqATPNLV3Aj3VuUKWrCQN7uKVnANLm7eFEb7PC75onrnFPkFNja2BVDX7QmmhCKzFnHX2B",
  "key21": "5jSnxD4inUYkesxuQbQomnVWSYn1FN2fvoXP6ToJEFKX7oCXxi9VWj9QEN1WRUmx1EXcQaPty8jjupXsfqgjp87V",
  "key22": "447MixnrAwBGPSbkfc19HS82GjJtJZUUUFqMGDXYFGpaHSdHwBDC91DGvXHs4qTeqv4V4xWdxXT79AuqiyhnkSwz",
  "key23": "4mSwqaN3QbTsU6PH8GB275aSrc6Tcy9NCcnQLABEKi1PyG3wbHwNZ9U2UfPfDV6BMFTBQX51EfiWEQH1gzAThQ9S",
  "key24": "4n3Xg2q1qYF254TNUGYurStTrmEYZDjRC8SA3GgxVFS3SJJgUXypYK98mpUJtLcwweFwe9n4YY9hUGdvbgZ95dnW",
  "key25": "46TLKqpmGcdBrNcPcs9hu2e3LCdzq8BHEEDo48t45HYRZCr7g5CkFqnz5FreLhx11kPSHtJG14oRom4mTBsYEGXj",
  "key26": "32c7vjBgntCXVTKKQFKpo6tow7oNPrAKJH5W2S5XXcchoNFEwYjZfxYHG2VFgDkXwF1n1d9aHsJXH4RyBPVA6dkS",
  "key27": "2JHyfUrJ55WKmUvfoa4T25em6aihKsxRk6jwh3VH3bk6tQCsuuHsb3PZHr5Ge7oZW8ooj9KmFWwKV4H7GafoQknL",
  "key28": "XzVP5J8RFcUa7q9u1fyrK4V3rPnQg12hYRN85ZYiTtVBswCdxEHh7HwuxDo1vCfqPbNFajSKYafAk2WS7EdFe7g",
  "key29": "QpUrj7umYNbNDiREda4x53ion8Vat6yANn2ogeZ2gWexvk5rBGWix7zSmEcRq3btYT3zCGGfvW7xJKUsAzjGZCJ",
  "key30": "4YnzFkKKWAPPdEyEcrDbEmKVEsKQ1yo98HsvZJMh4ssAE5MXPoMxKTXsrxEgPWePR7z4aVcHTSemDBPKqawDY9aT",
  "key31": "29y4kr1bgFN24rhdC32A5YkQz89Y7K8Kd5TfefQRBcsV4EyAF4gx68RfFtiHwipwwmKmF8KfCfMbt7GTbB3Jm3tu",
  "key32": "2icNBym9JUhYXWSfzSYutSLG4VroXcebzjuzibkTFm1U7wdHcCBHvGTnk3Fu1ZTrr5RRJo9vPQATByC9L9raYjKd",
  "key33": "2KLpxwbMwEy2qChuMjtckzaG2hsfiFbNZXD4FbB7eL6NnJKxHDxSkXnagYViu7g7S6NE5GhMhvpWQEowXk9u6mht",
  "key34": "2ZNvjUQ3PKzMsj8AuNZnhzP26Qywv4Z7vAY9c9fNsit2k7M4GQXDQNgQS1KmLqzwNrnuMo2ve2FDiMgRDyWz23AV",
  "key35": "46U5gmEA8CEjiuRHJwUTPe2v3XbhGiqT7UZHag199EBp3HXGp3zU4H7vfMa26m1nuUadhimmjbKfkLuUjjeaKWdu",
  "key36": "5appNrbVqYydEdNHWyueNRQJfgJiHiNtCquQGh1QTRVJkdKDed94BomQdoiJXSY3HHFN8jAhtUXhDTEpTWnrd4hp",
  "key37": "1FTicLTFJCTTbKmQGzf3S3EZ56gbGkewsp7utmq92oJvrMsiS9MHqPZ5qL3DUc76QEGdn9vYCdpoXnxTdYnKQFM",
  "key38": "4puXMTXm3uQbjR9so4mr6eqP66uPMB6oAWnQrS5owRvEdLhrvsnKMUHYJhPnsoWbfRhb3kWZf2ALNZ4txEVoSRjV",
  "key39": "3SeCJy5rvuYQHGNfFLXweqpCGYVDrTUfhkrT7MmQnfzB1GAzm3qK1TceBPnDSaonrnC3G8yCBKdMcMvTNe5mYbDM",
  "key40": "2EhRfPTNaahiEGESmF3QiBh2Qp9TvpDvsQAdWe9XXdZAkmncvYCAeQemdMWhMSK1XKbMJykTwR47NcTFaZcAHza9",
  "key41": "4bTYqxqXgngEVK33sZK9nfVaoiYrk77AyYuVcKPaSbP4Vq55jTfTWYYtvuDYcgUZrRdu88HwwCTQvgPcK8hPtUbV",
  "key42": "3TJBobMV5mjbffm8PcWLA19m2s2ky5BQHuueBP8A386coC18Mwsxnqh7C5XPLDjtxc49si1sgEX8sTwW9j1fxHob",
  "key43": "R9K22JCsqLgZTJsGx43cdkeuRQaHLBSJQf5ZhPkyzdJkrpzKVbZ2A3Yprgz2g4bePJdEN3xacb62RgS1Q7ADuAq",
  "key44": "5P5Lt1nhJJ1xjVjn98kwGDhTRSx2UpUJDwJWMjfzw9x5Qphjs948LRFSphWXHf1Da3r1BXcaHtHaQVGrNuoQjvtC"
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
