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
    "2vfN7YkbYjYmcBxYYd4RmeWzwsc4tCK1EcYC9599kLmi323sky5pw5zgiRf3dso18fL4P5SGWSFC7nwLq4R3bfBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VKU4AJybqE6LtpQVBy4sdGxJfx1hS1V4kXWFE3ZSbwd46Zu1uVgy1mNPAXuZ1DJtRG6PrFL9mtYavgetGPybD7J",
  "key1": "5z378tNo17SBaiQysjqGHUKNpmqRkQDxagEpWt5t3CTpoP5J64nRnsBizYHVu5kv1RKopn3ojnHKTZQKe6E7aaos",
  "key2": "3L4e1V1FZ67obeRbMRnYvn7WmBTqryty2o3sueuzhftpmkftwdA1CNCZmWJfQ42y2fesw1c83KHVbbLr2LBpA7be",
  "key3": "2UUAiCY1fxG9qfHRN4h5cBozaRt9CTmLozKBq7ye1pAT2fVPnL1BqnAq3qXxo4PphCKZ7XkgPjTW8qY4ZrE9eVxS",
  "key4": "2FaaLAFyZ89Qbf9TYdknGjdJF4J2P85cV7ogsdTUmChK44YcHRTLGAZBXoQCJiTqBEFdWGeVtR7GN5aLqshjFovd",
  "key5": "X48QNNe4GT3ujHx7a3LfneRA1CABUszfJKLkE8wUP1RRjDPJNgNZN8MvcY1XLqcDPnLWbLFwin9WEoGaeLiqruL",
  "key6": "4GK8ijirboDUnNdHAg1PQ7EKPiGQ34EyeBqjH71XeYhho8bwkP5H94QqYmW5dVwjUivPk35aLb1YKv3MgqyHF4cf",
  "key7": "5PMCxBv21q9Mo61fUpruHebsres11zpGHWgAreofSnjCzNDujyioMYxnxmA5sKMntreTpeBsk13hCF9HGN6TfgAf",
  "key8": "2u2asUXNNDfn8DxSUemHrYUST7fZReVewJmyLHwX9kyfBCdtUS9MhVRTuNQwTRp2FsF1ZvzqaP6ceDMF2ZcLvcNU",
  "key9": "3RS1CMGVLa3KxMZphwSG3ZbdTtf5pwkecTDxisPtVUccYwE31VJHLBVrXMgKXfZdsm8ypEWqYyJCHn9Y2r2Mh6Qi",
  "key10": "4ahky76nGumALcsTBK2gfh1iw4EyzxJa4Xd9JuPDko5niA8ChUUkiEXGQRsZpeXcQ1rENnSvKZn8WsH1UKJbYmmg",
  "key11": "36QLHVsp9GVMzsmSyRDHkmiUESBbgv12djwLPEwFV4WyTGnmEkMyEFLFwDUhd1XGZvivHV8kK9nVh5M6wG9z6Cbv",
  "key12": "5wHGA9KoAYsTVgEPZZNVw2Rdzf23SozYQvxSeFqwAYPQArdPrn4hfCJLD9oAhXAhaSpbA8TBiTDpey235EyLrEbT",
  "key13": "4hPEezFYLzsshpkSg84wVjhxMFPyNBXRYbvqUd7GP2poDhX9VtzD4gvLRRKibaRiftK2LQgdXuA6nWRmEEUxrRYg",
  "key14": "2TXNoBGKgAko7EkQ5F2mN5pPZ62LvrjVj5SPkCYzjLiTp3L6nNf5rbCDZuCUzNL12iGWweHzjVLTdtse6BA6d2wE",
  "key15": "4sKqjE15K5LRY9Gj6h5p5Ee1vgUrN5VEoZ1NbgyrUQ3YmZr78xEsRULgfc3b6wqeUKBTCBmP7kL9cnZ2tSGAobmN",
  "key16": "3hxFyj7m2b1MgRbSFQDCTEwm6gPGgesiCgYEG7ips51ipMiXcAPTEaf2xNswzjWmmDgYYVDhzTrNoyYexWjSramz",
  "key17": "39hSWi9ospcNHMcHZLvKToBSpazfM9X86HLzkiiDyvKjMM7TDngqJgawbUxPL5S3cwotq6CshJFBCoDo8KPUgoEF",
  "key18": "4QdPFnY34PVSJJHbnhTUPvUVQoWfLJs3NgHNWsfwk2Nhq5DnUrVCeVud9avhGz8MoxRZLvMVRcL6G3hC5Pwzd9EJ",
  "key19": "2ecFgRiHaUKeRcEEL8gkW4DFw4HJNXrGp1om1z29W7c132eCVoLPz8hNERCyE1p9tHa5TiG36K36LZiNeu7rdqq2",
  "key20": "2TRBwp9Zq4ZbZivJSuEB7yPPDFPdJh4o9FLHsmdjmy13SqYr6VVXrWEmGZ7sffy5FKfvyxtox6rwQGbQ1riXf7ry",
  "key21": "3oDkTeq5eae7gYa8oJmPTjEoz7J1j27MjqLMo7S55uhVhiRzintPjMWWTmzEPZL2EwA9YnUiGwSXExCU4w5HsGcK",
  "key22": "XzkVc4PPYwswmkphzRMECDRkXTHYvmKtTMMf24SETEJy7ahhJFuoBrTQq6SEeDtPQsU7sEqZzu28wNp1j96RKxp",
  "key23": "5Jp1c4NBjS7ppfBR1tqnXgn94zLeDU7nL1debJTJLGoag2QGDAWWLpnmrwdBhn9jrzmZP95itaEt9Cd4CnUSyUJ9",
  "key24": "4BkU2jqTw1GkV7ke26QztgnqTCtDNLBCtgC1ajw8ySYApv18USTrNXHAZb6xeif28HS2xMqQqKGQZTmP8r9EjVXZ",
  "key25": "2UpYKrrBvrLeihPSxa9ivpNkrTCTGyQZYNK8s2iJ9bJknDX9kEsFKSB5jmhhsyAJ6puHBrus5XuH433GNCbeUoYs",
  "key26": "5CL3GMmyk6yW8nHcDLAyg1T5Fupqwck7FMDW9NE6f2mSqh7L5zXFYXFjtQEmKrWVd7BTSWBnx1tG8awoFV6YYGPc",
  "key27": "3UsNS7hfHvGUHHtnyhEdCckHhhY2RjV8CC9pLdrBCxMsXnB1ThH9kSpvf91imJkes4bnQsfe6UQd3ce6HinbgcH9",
  "key28": "5snJVzS6wP7qTwgtTanP59kETDpKBr9TNLU9sXFUNiMPuU8P2TaHpzMwyuPXiK8YJXXPSU3jStEGDmbrjeWMxrhe",
  "key29": "5o2fnHmPT4Qc1FFRhD8WVXdEZ7YQeQcjkh9Ei3rQnXNpwzNzEWFxeUvwhArUeaAXkfqtA2hN8qFWHJssayYa5pYy",
  "key30": "43deCEDC8NVibVKAtWLBDAykyzEwF7qPf9uSmK1TEq8om9sVuJArctib2n9A6vDCquvUGjxXhhcehFVHHWackQAx",
  "key31": "kSpvDNYmrcqJ2yKZmqRwvznd1REtkNMBorEyLUoSNCVwecNnRKSM9rQ2ASjCViXHRpE1AFuZw9hMNWcWnUx5zj5",
  "key32": "3Y7SdxTB7BaDkuRjcREqoLuLBsYwfYukeDao76CTVQKa6An1hyjVuH5NXrqYxxAV5hkBasjdsVeuwWug8HcGcps7",
  "key33": "3poK32ZWR5A9MGYcNckcXrVERiJ7WoajxicBTThdzRKUWzWX5N8RpkYmmqWJbM3Af7KwEmJ6NRHycE5Qdq3FYxry",
  "key34": "5gsxrFNYzPKbPCrvrUisGV2WZNtyLstK1FUJvtGtp5yBrgYghJPMK9HHniBXiq1S74afSop63E8w9j2XqHJNBikg",
  "key35": "3d4uc1Dw1GtQxnXgH8t9d2vw39BdKuKUPLoeMd9yQb3aZG8Aec3WmrGxAVVxxGE6ormKey8odXY1tVpZBH6DW2UQ",
  "key36": "EW6c7tsWdBEwqJF1GwT4HJ9TgPCnaesL1uUKLYHrqyNkECYMBzNoCQtT7gR5tu6wqoJ7y8CPHZ22wBivKzz3kte",
  "key37": "4NA9ZESN97Ap8a9N1dRDnQ2QPgToXsYJNmb4KCsmNpKennznB9DhB2sW3F1Uokp8KsaYDdfy5qL2sTST8JgUgqeq",
  "key38": "KoUQuUXiNc5XHeMxRa1xmwcQH6A8qgbxpseWk31dDb4JZ4tgrAm6938oUMdX8r8R2wHXMhDszNe8ziE26a5usSV",
  "key39": "5CuXD2DWmnHfzd9ir7PHEeEA8UTXhTRo4A5SmGCUUHjij27c6ZU6f4izfNDy8Rxd5uHZXdJphvFw9GK4AnEPs9X3"
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
