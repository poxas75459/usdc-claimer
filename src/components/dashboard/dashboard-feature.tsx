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
    "4VC25MCtj47dw5nggdgjKxKVHAWAw2JLZVkYpS8q24jXJreMD3Q59RkjebtLTBPc31dTa1AiMGjgFLkYcabt4gxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xd9eNPv2EsppJ2aJT5rqDhZeQxZwWNeW8hSCAVa8R3tLaq3rGVyv2LajSgFJ13tMnmedbqkTEJ9dLy7vZSQEKEW",
  "key1": "tWzKFrSNK5UQJq3BL5TPgwEHxUZfXwYkY3nDEkJNQRZJHWVS6Yu8X4cRguVMche6CJoG9EvY1gQ7CavLEk43Gpd",
  "key2": "63cavDKRULoZ5ZMmBZjnsqGJEPnGUZ7JEpyFfqyn7YxYy2HFbZE2PdTAaC6wNtFwb5Y33fv2B9KJPu2eBpv9yM5B",
  "key3": "9kW3ameWLmdw9RzQrxzk9wibNUsgU8fYuVywcodhT2uAJEjT4ZLxUMGwAmxjAb6CeHJAYA273xH4aFhbdsG5gRx",
  "key4": "2Y717krqJhAFYwQ6Pjp8JTdcasGFgXFTLq5Erj2q3taRYwNq7BHfpUHHnQE5DqWazQR7YhzhqdssTc8jP8TaEkYR",
  "key5": "41XJF4vaqnkb9myTHEzJYfvbCkm2dDV1GHsrZ3WwmCHRrQXVLWQFAdxiMC6CmDWBK3za1svkm8yK3NmWJgtYMMQV",
  "key6": "5B3rD1LqgncSsHu5k9XbiN4djAYUE8U3TQhZujXm2z7Rw65Po55wsr4jMj9dTM4JTt18UtmPdCKmqQB7EZwkxDy3",
  "key7": "5hQz4J6MhqNaFJFjL8WmTDB34LtxMjtymd2jJAimDwpMkJBDsvWbWbJdjyF81dCVNgDmaovVKLJDnrT1JBoJpwqu",
  "key8": "Y9sXm5chsqdbYZMDhoQjHCNp1iiuY1BxecPgrF5cbvj3y1mdMF3gpu6hAFSUdDgUEmdmC6DkmjbpJmVVSnwrqmU",
  "key9": "RUpiZYQSpSNsY1w673qpVeCNsgbaTpoX59F82aW5Crsfc9UF4w7esZ42NbcaHdYN6nyTfCNpPXi7u7NLXpifLrD",
  "key10": "5ksmaAehbZSPLVWCXzS5cQ6B83bDoCQfmHJgEzLion95BeXEDC2W4HDHupyq6r4KumQzQSCZkqSjVdFJ4K22SFZw",
  "key11": "49TzhpF9hmH2JEevxn53C7tkkJme5QmYDD9TJ9XH8Cas3UpaYYJJsNsJYxpi1bjLStt7WZFhfZ99kQwnvhkVwcJu",
  "key12": "3MfRe3ZkVxpRNYsEJWZ6sEgrfesnUg67cZQQyAk6j8716dQrDfasoCmC1QZeZqNW4iz2emJ2HBGHQ8ZXbe4Gdrx3",
  "key13": "3kMcLcVWhaMgTpyJ8NiswVhSM5bnhqArh1374BM5QNMXEEhhFPbzq5xuuY6oN54fuVPSu3c9a5EyDbsYdgaFcGho",
  "key14": "4sijnJK2u3ySQW4nTRBeZConNm8yJXwY7EcCoNrfjqFLu1GbVypeEy7e8YccgTFGebcr2RGwXsxViW8YHXV4LFZA",
  "key15": "cpVWUL4YoiAh8jewVEe1hikSw8kv7oN6J3ZT8tfRWCbBMseEeLDVQnp8PsvCREMQ3TVJRP7gs5VAZvDiudfr1ph",
  "key16": "RnA4AjJ567sksV65JfhVoxWfXLUwfb5qFkxeFmNDyqfe4F1y6e56D1gm4DMCEBgWigW1T1BHrkxBUZdAiZcGrx9",
  "key17": "3ju2dUJACEfPvPNuVQRXSzBtjrXUq2HC4KLqCLz7Yhz7BjsfX2XoYcqaV8ferSMEWQun1G3u16qvvFcmSdMBcZuF",
  "key18": "3sLYJbz5w2kSJDY7n2N7iUE5uDQATWzM4fF9wNteik3sGMKBeK7g2bnoYqarMnsCSHJMGfQQRSk2RbeusvtuJ7PB",
  "key19": "5dkka8jKMLpsstmuwUJLbPS3URZmYtfg7FfVZkFWbprA7ebgJx7sUwMkwvqRoZoqLo9J8yPX8EergLscZgZRJxr4",
  "key20": "3oX7A7Crna5yJMCRDYgsCWoUSQdo3LDTWZub1aLQ57VRyQHDrbhBDWqmTYFhzhPvTxyG9vPTaTjbtwakqjoXcHzT",
  "key21": "9MzddvxodUWJTrbweQFkgGodxDL8ZMMzic7aCKE42AQ65PQRcaMEQ84KYgTRjN8m5zFV2QQoYkZhcdLMpTzcdQ9",
  "key22": "4Em91ppY7eoERcRvFhrY8JxbGcz5MNBVqYZU6CiDhU5NWkMmx97CGdWVj9ugSY81wBDbJ2iwj56Cm3XjaoJFhyX3",
  "key23": "T4sfjtUDEnqgiWHtJ4ydSDak2oXX77qK67qwuApwYHEnE4KUBvpAGHPGR1brFj4QRtbNPiema8158gkEQ8Uodan",
  "key24": "461iCBfv9PijuuWarUV1eME2aXXcLQZLBe6uFgFmLabgxY4MvAtFLJffAAbtSCCdge5jhjsC5itDrs5kNNreBXYg",
  "key25": "4dNqJhRhVT9LPNb9vKXAfq1rXuo7uS4WhGWoSoQWgv83rs1KaXJXpjTA99gJgu8iEtfUTw5kNXiQbZpjY17c42Dd",
  "key26": "4rxnLxQbWYA1mtoBSEKbKePGkyvvhn8ddjLhWtHZv6KvdJfj6jo1c3zTRLadKAdYD3LVsGx2XzcMT2JY9EDy3GyR",
  "key27": "4jizPBXf24W7f4oWgpeeCwEXtwJemgy9h4XmsYMWFRGMRHDMEwk6DMYXHFSf9qkXQ7geReeNBnwsnTSgtg5GjRUR",
  "key28": "5hBo9dbFCrcdxEof4DS49EygkQTahzVz6uKmFHE16cZ6SqSpde5HssBuo1JU2H7RjikcotcvBkL9scnPEL4gZV2J",
  "key29": "3wSUDq5PzJM93MKTCdGjmmdVcGGL5wvVx2a4B3eiyE7PYBo4gyrtuPgCDSHgoP3mJEwavXgoP8kN48oAP9AeciaS",
  "key30": "39sjuPvGVcbTdM1iHeWJjU8Pj5E9gY66QWFmCdjgLTJtY12Xju87sSyKBnKjGSaYmmKU8pqaivJaNcF1Nvhs8rMy",
  "key31": "5usbTqkwkLcSk4fNk1vacaBe6cQxi5DZJQfEBwLXn6bX6hSzePtvHPCa6EYD7Gcss7pXpKSTx2Wk77TrpJdswXff",
  "key32": "5fifE3PAhXr79DvdomsXFeyRFA1gXTZEYKuDWcSUphqJ3erzNDzcL7rmJLDirJNcKautZFMKnDPJfwosvWxfehbZ",
  "key33": "24zy6MqYBEs3KHiRyEVZESh45ifvvC5rz1wYGfGbvB2E8xQsr41PsQhVqjQAT7ZGikHaVKyKuNMUvSBFx3Wzq2pF",
  "key34": "CWL7WKXeDQbBUwiHKQ5f9vpYgN68eJJz6M7Lv872sJeLpiYHVRNJVL4yHx6ffwBhDW7QzmiokzadquCwcqijTgJ",
  "key35": "5N9PyLrNczcnCq1dR8Yy5Bcj6c4Kmm5d5b8AZ3UfDtGPCqGV9pHxuiVvfKDqT8h8qEW11Gns6T69FgfQy4S6ZB5P",
  "key36": "FQinpCUGSRE2zt5bsMCvaV2y27i6a5o6SYjSMoN5gVVLp4orkUffxRgvu4jF2TUugZqJqoqqg5ZnxkRsdTVWGSc",
  "key37": "wNBzVLjcwaYH2XDx5hZGmE73DVzskAcFguA4vFSxWdoXVSGFxHxwVZHTdyY8ZfuqcgtsZmMLNAk4fUtbVTQe9FJ",
  "key38": "39Dcf3copLZpYGMcVz1ZPJkbma9ZKju4TCMqDus7mD9NYCssrat1fJPfT4xKY1sna3ifPeUSoTNDfWYYyAfGSdyr",
  "key39": "5ovoefmR1QSpDg7sVJSpmAnQpqkD58cFJtcyuSCS2Dce9jdzY3wCMr8wwMrz5NX2huTCANFgT7ZuAUzeNQNmzrk3",
  "key40": "2919ch7x6fLP3WPv4Sp9QgvqbCineXHmkztk2FPqDQHP6gZA5dWcj6X6xcLtXe53C8oB6aTkEo9vDSrbtQaDjhXy",
  "key41": "36UiWVR5uUvYiPKteFH51xvefvSoPF6MeoZDetDy6BCDJchrXgjCZCtcFBTnz5AnDb3UovyrVjeVokadGck427kQ",
  "key42": "5oJH7XyyoTrFhfUpQtxGEtxBn7LbjMGV4mwfpopwmuZhBVCLuTeYai8keQeVJ4za3NritGWjdjNMgEGgEjWyFkBx",
  "key43": "5KSa3my4bz5XWtRWVKKLDiTRrLv3PqmdkropovMypbXQWNATqXm5aVMegKn6WBZgL6o3rKr2hYA4rfxwgr4oUz6J",
  "key44": "2WHwK5PpTtieYUukGtUbrYJHAyuN6J28BKc9H87HLVAeVb5z9aoEhM2pzmzm1Qis8ELAoiMdzMFoxjvfvVa2dc49",
  "key45": "5Y4DoNRpGUW26cNXnvMmfiFyEzTskJkcgPDDGjHyAVQcpoN6Tf7zfykrnwXh6KHzT7J8U64EeXdG8esjts1yXnev"
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
