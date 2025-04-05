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
    "3a9LkTZkjK3scEPevN68rfr3AXyGDUVM4JoXA7G1VkDADAmGg9UtUJVHirtPSfWxxdBns832vnuptpHrEXZUcm34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v99nN1CmoxYqhPDQdE5Jd5shhDCgkH3TgPW1tVn5nZWD3DcwF9UCj11dU9dRojf9V9awYHFbR9gRxBkfXMyC4rp",
  "key1": "3ZjZfGBNvKMigbbkntSTEG5AEBhEmNEm1MXaew6XQwhDd4DfSUaLqRffQTTZzodBDdbUKG3esvB8CkuenUt33tPP",
  "key2": "5rQ9ZE2gHeGtjQUbEM7eBrb35Txskb8VThrgf2y3wkbVS98GbvobehRn93R6SbCkhbwaNyw76E7DBK4wNYbjt5FP",
  "key3": "42wvaJrmMxZJVvjzr1Mh2tTV3tLwRwsdDsoosmr7Zrp34gQAxqzX8rkCfvMZT3BM2EPYZHbpjkyFSATYroZc6cQx",
  "key4": "4tMRANby3hxQTw4haBQFtGiS7HHuLUiGEn3EjUu69hANtAaUjTVSNUTcd8DGNrVsw3Vd2hTqXr563iP9Ktgw1f2t",
  "key5": "2akc6gTTUidmpTPFgHcGM8pMaN9nZ1Zi23SCrLbsU4CicR9xvVLSmFWzNFuMG5uEq8drJnANNjU1JCVKmEjfjSjv",
  "key6": "4L1u4GnW6zugdcBcEpwpgE12Ni1zeuvWM8MgweuzY7t7kmVjLLPCtgbwWktdycZc41WDgeFToKsQ17aN5aeHpA3y",
  "key7": "3qGXdASDopy5KxoZu8X4R41jPY8DhU2GnWeu5XZJxXqMEWgQFHUm2YAKXwqEoPwtzECYXyovcD6jaN6wsKt2VQw5",
  "key8": "3NaPWs8tszqTcX2i6fs3ppYZ7TDKFgJxEnVkbaFzYhzKfyR1PbDCv63cP2anfwEX6gWMEFN5jVbnLuj3Ltt5dVKb",
  "key9": "4V2PopNyJa8BvvwVdwpZEML2wjCjtBrhWxYvu6DWrLTE74PFBxpJdRH9rBUk1k4jyYpezmvWz1uUa9M88FpebJXj",
  "key10": "3vZw7JreEs6fh2SmGA1VwnrA9b1YDN8vHLLpPyHwfeghbKyy4gBWxH1KQWEPZxe6F2CP9XzwxacvYak6FwazgvfY",
  "key11": "4g2fNeuXrhJn8XkSR9dQd1p4KiejjBoHQNrYhYf2Ddq5YjWmB65PnAkBvZzZcGWi4VA5nBoY3BZyv2GATiNGmrjW",
  "key12": "3Pu5EVgoDB9SToNXD9q7sZdUgZKgMNtpdU1GaPMZiTZFKoqfYPsNhUanixsYw7GYZw1DochsHMusDxwqKGJQQzQQ",
  "key13": "LdcHoB77qHGqA5xGZeFmXWRLuQMh7doJ8pvB8Km75z2GFphpkPQn8WofKmu7F8h13mSXMN6L3geFuK9YK6vU6rJ",
  "key14": "4ewd3UGRJnZPNX1PKPEk6uRiaQSF7a1aMsJXCtffAccWzvPqGtR5iJvrhq12Pd357cCizpQei2JAnGLccujKB7eM",
  "key15": "4DwVCAqqRqzLeRajEe7mcDcedg8sRYhBSxMzEFKTM5SqJDRhhLY39nzuGNTzaecthDwwbWtNYVnRGu85oqm25RwH",
  "key16": "4eoKujwuBqqcQ5iB3AcRu8JLBA7dcgzwgtYuTRqxrXKYFVqTFj1YnTwS4egF3EGaQM8eHnvviq4ZALJWw83iyoZ8",
  "key17": "2ushcTXXawLcMVjergCvR4id5prfCsfzs8rCbBArWss5WekKFWHS5xDN92AvXE62Rs2Tv2uqD8woaxdvrWrRfaCL",
  "key18": "vgBykHDMWc2wqDCQsyjMmK2K4ZP5svhPzw6NEfbUSLaHq3vftY55WHuYCLtgVkeGQ2wRCGNxsT7QnbLnz4khN2p",
  "key19": "4TUCoxdUjXQe1x7VPtHJSRnogFcUjDENBEtkc9oxnNu3vifGBbDqTjrkP3puPgnE1fTL4f2L6dwVnScH2syGfDQJ",
  "key20": "27qaLXrSBVCFZ2zb32Hk1TaSsMjggLWhPNZWUPC9ynRHVJ7dfA3K6VfR9ceQnYbq1cRocpzp8Bqn5iY2f4nokHJX",
  "key21": "26iP7Kt6L3sBTqmeTcbSHwToNQ5vE5CXFo3WGDH9RV6juqrG8bxuWA3MtCyES1mA5psqa3qeuQ5qhCW44VG2sBDv",
  "key22": "5or8U9wPPreBuva3Vr34Bs7PsGoibAaND4Zk6bUT5yeMUZ365NMcLBHPckkYQELrUQH99tQsVBPz1q18qfK2qTVv",
  "key23": "g1e1EyoTrnG287ByUWAhNaKxSqDJZddDDAVCAXo2JxFSBGm9qGPwmMQAPaU6Eah7XrMW6pkEnSQ4e7C5Wp58wpj",
  "key24": "2P9oBNvsWeAU5DKwKBhumjyXguDJAuS9a1emH7vuoKMDMGufj5ZXJbF9M9CFToTHtKk8zjCZYSr7pRR5FnfXGg8e",
  "key25": "32G7EZZBo6uccAn1u86GmDzshB9mTwm7gdEzy31eSmwY81kQwWAB6fkZS1vkfzifGY2gh39KZkyvtkqo6VsadaxY",
  "key26": "RZ2z2zxJ3ddSzXXeuFKreCSS1FX799EAGC8fHBNg8trYNiao9cRGveVqgdU2UP6ugYbibnX33aZvg8hbg5XUhMo",
  "key27": "31mjCyJhRwWcEynibUHdbwSPyg6NSAc2FTW2oWqJsAn55cXzrzFiEZjnN6SJhoygH7anx95EE5ULSeKvTuzvPTyE",
  "key28": "2GCz6kxrdEfp5YLhs2a6PenDZV8bqewoN3w8doscaCTKYJhsiyGRLbCu9PTFLA7uJ9rzZUkNYk89tgRUy8YEMuYe",
  "key29": "3tArqe6UGyBBxj1LENAssPM5yztazEv7XNfsvsNX9aLCCwKppZ4MDCdvS83Nxt8mUZVigCgYbnYJr8p4TdkXKhB4",
  "key30": "eFLSF1LqT1bkLfvDh7U3VU13xikyMeYU5EMHjCMSR8qFdJEuZ33bjXdJVszhURxhjxZ2z2oKU253kA5x65JKVuz",
  "key31": "3cjdwZakSY9QeiApKH1SFeMS8pTM6RtVaarUz2bTvVneVKfL2Jmi9HpzSbbu2oqNS2Wwv7a2y4VbTJyZuLuqY7yC",
  "key32": "2LuZLJRPoD6qHFf7nYpkfpQHs5GA748CHDsB5e8psb246ad4xodts59Ysdyw1deHT3D4vvXs6eMAaXeStEhNLrXW",
  "key33": "3seE1HDK4xmVeF1g4Z89uu5L2wG3JXZoQ9qYx5bhkJ22neMWWeRx8fWZa6unEx4h65wiFVHrGC6HKGVw35GeKXns",
  "key34": "3n5uGGTDRRbb5M3sZhB2nbKqWsTx2wc458Ja3SC3vA7iyJVfscazGmPn2h6E6MBJieGUk7AVfy6FW1wCH2CMCtYX",
  "key35": "4cRCspCU4CNapc9fDt5wkBHd4TeLrEZcv2PyxnLYKFK6URfSxpSqyKzCmaeLKp9tHfu8fHjtuwCvZH9qcZg6Z959",
  "key36": "G3Bw1W71QbgzUtshvi9mCwzyaXenrAF3uZDHWVgBYeBQc3WbCjCmjB5XERe71N4fqbxmjyx8tVyRwny4m2ZLMvG",
  "key37": "CaXMVDtDiwhxGzrghRsw7kSY6QDJd91E6eHaYpvxfjfkuAvTM5nqzgyvYuDxi9UBYzeEZ7vsfmWPGaqt5owahsw",
  "key38": "4miFdGC7PzyCDVo5TxFzcpQWPSz8LLV5ukjFiLiwghnxFAvsvy134avGhSHgGgfTGtTpaCvJSiMcq5yJzRN4dSbb",
  "key39": "LGJuti6RjxkVez37o4qp6svpaQc4DhQUCCRCD1agqowzoxuEuA52wukDZbMerpMftpTpqEsZTzJ9DhRhaMPdrn7",
  "key40": "4f9BByNRHx2MwFi2iWG4gJK4gjBZ5GSS4VvdmJ6GVjUgVRpwGHb5Mc36Kp7vksstckgpjE7QnkiJcsP4TKQuFRLm",
  "key41": "2ifGHpnP6KaTnxhChyZnmFbcSdzDV4np5uMzCjnNbDY47SQAC3zJdkiMkm9Mwh2rgknxVpgXU8H5mSZkUmeiRn96",
  "key42": "2TUM8WQ1VKff6G9AexLKq1Cvedq67Hq91zApnnSYpoHF7qo3WRhdMVUErJUfMbiLHuef5VwrZc24iQRY283cdV3x",
  "key43": "3dFyHkJXNsiD6MXp7gEMNSTWNxfE8mcka9WeGeany5fNmkdEa3GZf4wihjeZe6KyqaRiFnMRVT95TMpeUgb65YN",
  "key44": "27NLpZGKFzYA7YhkcFqr5rKuoEennb7xntNRCyG3hCHVKe48ZraRLQoqbPiVRhPAiMyzNPXoLzYDMZhEF19VqNZE"
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
