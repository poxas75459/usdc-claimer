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
    "2CiHGa3V6MoX26NaGgUpTTnLuJ6EP5WCJEW2q1qWRawuCvuxNBdHEuHoL4yvZZcv7b1tU4A5rDEKbp9H1aUtf1eK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fwhhGbMnfK7ViXAzBXQgYoEZFUGQAEWPCEG5xJAqfQCpnRmVoBdvD32DHumpgggijiws7ue8s1WLn4qz7B2TuXE",
  "key1": "5h82Fj4MKaKz9ZMTnyEN3TwdtVMReuMo1tXe9bAXvTorbVkXBa2zGHYHiqQkmgGQrjhaLvDsk5JgyXjJBFr589C2",
  "key2": "3vssgZzwCyunHtpe4y7wX7ePaGm44QTUiYne8C6fDAbyqn4jstFM49aH5fenYhSjmqUWnpTJUT1ToySGqcnqc6XF",
  "key3": "2qWebQ5eKAHQDHAfNJ5XbHz7G3GGVSXC29dAsTadPD4Wz49DVqm3q4313ooia6G6Q5vGmgPbq2UPE9k3k76tvhnn",
  "key4": "3ayZq5xCQr1pPsf34pGKvfqLueQ4tAtJi9wJcW5FB6bQXpp4vFD5BB2TTaA73VDoZQF7FFHqhvB7QwQ8uHDBDd7b",
  "key5": "2koreG5YQvHU6NqiHiE3fWb1qDkUhiScCdJ8B59cXVxdZ2VH39M4iEgCdoeW4uwQce6PjBqkLBbAfYCLaoRBh1j2",
  "key6": "3vixQzkDW42wm3YGgMcfYMQX4tr7AjpG1UyeTcKPSkQ8bG83Ajg6Sq6LTEdPMWyWkYmdsjDrA6TPmf3WQSxCt51D",
  "key7": "3vbBUfYrN275xqSiSM9Anpf8LtdWzWfbS5c3AmQnQhqsqpJftxRRE9YVVLYDBVXMk9A486GLjqB6iPGe23YHnDeQ",
  "key8": "4baLdtE2MHTnkQejUVb6EkAXBGXTgqDxMPXzGC9LYqTZq8WxTkfwAZggGrPCRCoVoX33CMwUCgQqMLtPM41cfR2Z",
  "key9": "4sSXqDHbNrWMFjDH5icWDfEMdDeFqCebTvsKtn2wb8ZYH5su77eFKsStA2pMsvPxjnC5WrbTuDuSKoDxu3PvPUbW",
  "key10": "5ezKoyjdLVGQYvokRUAvt8QuArqDD5LEdbDFoLqr4KZmHMSwyudRtHdq7rmqMxcChiAY4DQ1zDtbckb42R5hDNou",
  "key11": "2pNTPKvu5KCyp1o1VbeVS46qWK9i8bWwVszH778D4qSbu61kZpJxBi291P2cEUtqHezqcaruzzhEZkoogHzrATDK",
  "key12": "3PMT2ckfZ7sxSmi99EopH98RX7w6aHL2mXLXyMHBv7q4beDeGEhnnaWC3U3fg5gqAkpt8b68YVA6UQSqueHgYM4Q",
  "key13": "Es321Y2kqZ7dBVRDv8gT6w9XMQb7m2D5jdNtL4MRJq2BoHcrrcNqDZr7KyuhEosCup52QEkPxSNCxUBgJKe7Yyk",
  "key14": "2UFqebamGDjUVUxARkmsDPn3tTnaaNQE36a4ywiBNpVabtn25uXWXnT85h9SDRzdquSPjzSxfigZQP26xBvDcwGi",
  "key15": "2SYCzVYyoqKEgAzWNJnKHjp3rzhSKE2uJVnx4DPyffHVwBWrB9hZ9SaBkXzxcpBoUfb8msYuTC2gRi9GS9KQdy4c",
  "key16": "4biYJ2uNdUHZ6wLaHbdTV2LGSahW4y4Cy1ceaPrVUoKwZ3caSzUUgvV4H1QpZmc4y8hC7XM5m471CJymMxYpvqHD",
  "key17": "fHCdAcvFZj4Uz1mzTgkBRbvGEv2Sz1suk3W7s1twub8MVarSdwVKdXNbnTefd2LEmrbL663UaPYNkYnAhDUZqkk",
  "key18": "2MCbzKoGX7B6YTrgDtwYD6C6MdfQqtkbamKRufoxmvJWfWyKmJboQJDZwgEW3hMP1hHPsh94gfcCoewiJNXmBmEJ",
  "key19": "7y8xViQSJeWipiA2ViNqgCNWmbuXQwUo4jWKxFRDnE43WTWprhzRYaJpo42BsskPAVNtSPuFHVvLWaSntud2PUj",
  "key20": "4uyGUQ6xsqEvAFbCkbkH9NYH97ExxjbHuGWv4WbiUMavQ45BTyrvfiFKB8MMF8sb54Yx9YajATBnJcXwRJCJaPuR",
  "key21": "5zqaXfbNrFzrZXFZzB4sMuA243oLutM6Dhi5WkTJVYm89Z5ZYF6FyKDB8DFcug35XuCS2Jbb1nQwATacEu1RVyoM",
  "key22": "4uJMNy5XLBPstMeGrU7Fdj6emjn8S5ZEu7PbomXChNTBukDQXqjGbBxCbfdC3XVcc5B4xCQAR6EAMV69tgx5GexP",
  "key23": "2e2MnhF8vuM1JkBwSKZvpw79SMAEvz8Re5h2TefaxGFJNs8EDWrzyqayyzsC9Xz27y2nCDEoLd8z3HZd9Xt557uK",
  "key24": "5ySEjUvbtpL8KwRaN7EGM3AC7ht8BuC7hzucZosAWnFmLsH7Yiz2waPLTrAKjPs7eQySYwbXegpudAzsyY5ksVS8",
  "key25": "QadWpF7cana6KxViyT3Xhmgg4RtbFBtHH3uj7AyXJKsrjvbGwnVHcRPi2Hww5eszqZsRuJRdwyTMAg9WrKBwoV8",
  "key26": "465oyBot6q9166eh1PrHxnLXPzctZqXjWrSFSV3rpb8C38eTsSaVP7qx7xpSBTLEqWqDvKR9f3zzuAYQcQBvMivj",
  "key27": "VDnuoYppnod6v2zBkXLW3FngLiTCjEf8hLDZEmc8qm4uwmJt1Kw1eqhgtc9HNEFGk2jfAV5c25SbxZD3pD7cMQT",
  "key28": "4orKcBzYhFKPDAGYFjoU3eFjLydqPeXgZpZNPiceA5mYKQ9TCL8AaQPMFWrpQdfV2cinxDQPd9zYC28FCN3JcjDS",
  "key29": "33cXkVnM2pnXpzFjRifyzjBgk45SNajrpKYj465Tbcjmov3LAyzUBfzt64fN4kUkTkPHcPYrdMVv6zcBrAhmmZTh",
  "key30": "5YcmBYkL5VUjkUQ5mF2T556JYGoFLzE4kg93zigwtx1xZFubcRxnnJJcB4X72sefyKsBJMazLmzewDFtyhz42WV4",
  "key31": "3KwMyF2HvRC2aPW9WeaQqjPAoeZMvC1zNaRxCAR44H5ckimW1UomkNbjiDMyrKWJ2GjbRRateYSfW49fUPJS2gay",
  "key32": "4hsCkrBRMP9YTUu9zpVwzmtdyAfW9XoSxwp7NYebJMfEGWqD15jECBzUSCzCqSQc4Nvz45mkZFSAF1QZcjAWLfD5",
  "key33": "3uo7vrdLpFvN3Y6YjiadF1zBkVihVLkURCn3EAZaRETMrC7NszFVfkZPkTQb4jHHgZckGwnM7gzg5WQjDmchbpKi",
  "key34": "3wiCcFZMnWwcGJS8Rjvj5hCjSB8qkYHHVjJ2uad45VR1YwNG8sEMbSj1bC4DQpGE8q75GfrjBNxakq5nvgDmr3Kt",
  "key35": "4xsws9DofxgP6ds4o9bcAA8RCUy1fgDnXDbZgZyaZLZ1VLQmZJFr8DZQrCg75ECjv1Dovf5zuAsDQwypzHiRciFg",
  "key36": "5rqEYh85cAhe96YKvWzWKZLJeBVLGELvBCYRwMAFsHXTXkmB7eHycd8Pzd4kMKKj554vaZ6EqFkGrHgx2iE5mqze",
  "key37": "34P2RDHuVRoMCYqrAgMueGqtsA6FwD9stg7o4ZNtQhCMwWegckyyxXKMijn5V1ZhKJH4LjW7YYCXGR6LbpsWeoTi",
  "key38": "3AaCDXNsQiiCRm2B87xHYt8cKfDgCADXhCLGRkFF3dqZtgywGZqoNcNRS7s3H1DXykbgBGKUbGrNWSUHtspiu2Qi",
  "key39": "53NTJQJfakZG45NmirDDct1xnR88nm735iH24wUxQwVQRbAjZBFDVtHBUBSvtmuUCjMyvBQPm5sqykbcbSahPuDZ",
  "key40": "4awA5PxWAcLzk7JCYLQQ7ZY6WaRPcfkMBiZPx5aKwvZ736BaQQRwDDEvMseedmggyGmYy2bkZRGQQX6zcXfCHphR",
  "key41": "2tWuoZe6Wwu2JQ6V1izYJQy4awiV7fxqZJgvRjYzc9dWU6LUCw7ZCNFDa7xgoUj7mBMFYqqfjTfmJNVGBXYxe6Tw",
  "key42": "5oA8DpJ7ZKwupNa5trqBAfYPCCqiwViGA8NWrZHAkgE5vwDqUFi6zhnEc6f8KQ5mMwky1zGECB6Q9xZmguF8wBtC",
  "key43": "2iXhEct3TZVHKaW9UkNxjRpksPsCXcjdpPvmtsHQDKRAhoa7qG1PTgaW63qrEDtyrSnKBERED7ZTf8udbgf4eEPh",
  "key44": "4KHJ3qgZdoz9i9aTSJZ7iHyeWjkLC4tiEdfH7nMcfXgEpzGNPqmZLkd7iqkqfdcE3DW3kV4EhsPNndpnJvYkYgtf",
  "key45": "2P6FxUWYk7uMFHVMGtTvct5Y4BjJJoaCb8nWb6B5iUJVnCsWFwsgjK2HDZSTbZR6h1594Wn2jffXLPohMfD5RL4e",
  "key46": "2W4DSk2gapmcQsZJ9ZEvQSHWQmsmrEwkemV7qDPWPp64tC8uXTTnBH4sKqfRzZGoqSFwdRfYmLeTJa7SeXN9UEQ4",
  "key47": "2T5VWVJjiccetFCGoMdhZNPQHpXHfNZMXcUtjQ8KBwziZaN3joeHc4VkFEhMvWPE6Nq2XX9KxXbiKF3XLrTPNXAx",
  "key48": "5n7Ua6dH6vsjbYmDwBL9voTbakXKmnh4bDY66Dzts8wAn3Rfbssq6LTqZLm572MYYc1SNLHnbmK7jrhgyZyghLLh",
  "key49": "2GbJiKJMQKzLjh1DNFeorieYDJMG3bEWsv5X5wcVFFXp6sfq1Qo35j3zPmjAN54Ja4TA7EnVuCH2hZu14YF4pzrX"
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
