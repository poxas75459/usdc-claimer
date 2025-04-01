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
    "42DYoC3tupEArTNshzTsSgPZi5go7AKbk23qYRTN3pXEa1pSbv6BnzFoE2kCdmZiTGEv2t6FeT1bBPEadcxSS9pA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qVq2K4QgnME2qpPUoVWHekC7MtEFbaWFJ9jcrRGkJwz9oYw9SXNyCM81avKLGYxSKikMTantKqDJjDSsDkKrQV8",
  "key1": "3AonYkzza41u6xwR6Rt9F3qMUmrFv9ds3rd1agZZczjieXdJJ4ckVr8LoZysPS23KnUH9a3cEvEkFo2E7ibgdy8b",
  "key2": "ZYhjxjDL3M9CCQczwXa6fTf3Y4AL9ptbn2Ur5dwoKJg4isGFhfHtTpbA8TB8DGA7p1D7pY2iJ917zxFmbQHcyfa",
  "key3": "2gJwmkxdgSwebLH5BSh2FXHiNEXQ7SVLTJEFypWJ4jPBhCDURXERBgyCCRzURAJiEmEEvwKcPRhBDV79qPcUdzGV",
  "key4": "2XWPaGBrZZXqAZwh18o9qhC5Xhi35Nn6B7JXtiBxtxkXeVXrVe1SU96UeBCieQ6ZCkpLSm72zjfPnvBdw4RgJ8y9",
  "key5": "65A9zErPJakEQY4XQNrGEVaeq64jSg5EoL1p19iopRy9yV8297jatKGGy6FyD7wG3nLo5WpL8K8um8AVghoVHTrR",
  "key6": "4Qon9iJUT7fumDnmQf4fqxPYp5fBVuNEPYa11nZL1y1TUzZ6edE9LA8QvCtj1Ry8mShh6gJTxQDEbpMfRfAgVFFm",
  "key7": "2s7hS7CAYq4cDTwo5qvRB5ytepJoVXHT194otxbKTvoBiNoF3RikTRFiXxLoPngFnTGy72e9KLgW98ZW177d1ZTh",
  "key8": "5KbakHTw5L7HqiaEugcDuB4VfrJ6YZCzwYPr1tBL5hFfcSdhsQMZj7V9rXBW9W5p93VMd9wQ9HKKUVrGNqN5mgJY",
  "key9": "3knaFk5nChjLj8nJ1Bm9pRdGyAec3eyEUQAooyKCJfMzRuZD6ShxK7ddZsrsX6wQQboHzed3FUJ6nWE5CvApicq8",
  "key10": "5YK1NmcjGvfD7aw3Epm3DzirmNAGSdc5Z3vsFizGrDGFw58Wv8zPbhe4txx99P4DFNsL441Ug9T6fq6eeHA23NQy",
  "key11": "3kAEGqdGKxoXhHLL3vpPmhAsaeYBnHFMPEDD4vnVLqaTo5hJw34qFKZDTfodgAVuqnpwgsNjXya9aQyp6pfRubm4",
  "key12": "3sAYDCGUxjrMvrh68x1MCPovcYw6TUu1oiZGBTo5ghvqdU5Znb2284u8NcWNFC1wb6yq5xV4bzANxeJXRCrCCPPp",
  "key13": "2Ua2eU7FAbjqC8GXoAM8pCxwLewPZV9Up3KaHVCmf4bWZoc6c5dxwhHqaGsf7EYfdthu3uLX7nFRNTt4uXWQDUoR",
  "key14": "2wApuYZ77apF2J58p993BVVBnNziT7uMQAszcyriidRvx1zJihEzve7FR8tujxZTTRRQFCs99dwigKWVSPevrzrp",
  "key15": "5Q9BjU6xk9pD6jNMcfhye9NXEXyP6eMiFPMARWsxtsfy934C4SYoXA6uRLjkAwycpuEb4i6EVkjUdzVQTCeyKG14",
  "key16": "4ijJ2e2wR9eJLrP3L4996m9c7QkzaHifZyGcFmePSoMoqf35sBUpTtpPQuFA5MGpT1ZyxpWqA4hCRBiuwzjwf69t",
  "key17": "t9TeskE7gsprSHARhpHHWveZGqtAoCpkvBVqVi6sSBazj31BMawAF22iGJMvxhr8ULUjp6MkjKXBCerN5oSaiJA",
  "key18": "4c8AbkwH7gjRmUNynP9CnouF4vSmYqTDRGKnErfGWsKgzBHwGNzrmnDppTZQTFeDzTAX3Ck7XMjM44ndeguTCgke",
  "key19": "349ymtmchTAXh42GwphNzaZ4U8CHnrUZUxSumf2ETwtp1ZuX7ZMR2dtZaVDkVYfHxsyEx3jfaKptmAmuaSHCZUbU",
  "key20": "5a3co4Sts2E8tpF2BASojzo9SaJr7jW6K8cyokT6ddsWUyV94BKnuwmDjeP1AjR7CmdJSek4DPbq6BqR9cwX9RMS",
  "key21": "2DaLNTkXapR1ELziM4vL3UhkStQzWTGCaGF2CfWWwkeFcWkoQbk62jWtLZeRdDSnyKjE7vuxJidKLXUSR9iNRFA7",
  "key22": "66MbDmEjiNL54X5Sa5kr2Z3oguWN3dqMgqMyb1dxM57eMM7vy2KmDEzXbn8ZZxKLfHGzPd2iYCJRcYXNYD1YAHaG",
  "key23": "31MLyuVvifoSCMxYeitAXdGFcqbXsVZ9VduLmoFwm6V6mr2DXWWYtRgkHbd4JTPiQqqjNQGnciStn9vc8R5Cq1jN",
  "key24": "3XdKFBQYV25vj5i3CjE3aVEoa5eWD43fuQmp6awuzoNAXzncx7fVhTViop2SDUqraCfuEX3uhu3hY1mEzaVRqeNV",
  "key25": "5t1ATTuTHfLXr2V2xiG3qEScecK2E3DVipGuK7u51YadbTx3dsUjCYi1jyqKDkNnYKPydkdnrdmztTdcB7spubcB",
  "key26": "4tJcTVWuS2ZhjyP6EJdxszeDzr6VWCfrFqqcq8sLXsu7wHb5wGZSnZy5BfHCwWYnQb6EVktrCvCB8DSMYYbyDWuu",
  "key27": "2ZGhmXDJdifQwbfMSwBCCDx5QD7J1NXkYXbMovS7G1DTB5FpCjshCXjdwh2qNjbRc7N5aFNznb3ZfKNGkwj3sn6d",
  "key28": "5Qycomfp9oYk4b75e3KAuGzL1hMjrPn2BWQJPaXCgTTUEpXiMYcLauC2VpswTEfDofhUmMgcYjoKFPyu96QxJNPE",
  "key29": "2WjLWj3UaHXMgjRfG2zPEW8Cg8qzfVXKe9Yst8w2sGLzFNHrDGvceaXZKe1rsavY514JobWEuG8iQsEdLRBjrgBP",
  "key30": "r6vdwwBVpmG8o3dZZxw22aq1qWbRMmp3jkmj7BPf9QRNv1rnNzh1rv7pYCCzScZnUj7iW9zqT6no7sMRN8LaBdV",
  "key31": "5eLChbJPcxEvxgS97JzkcqEbaUXrCnyG5sscCJUiLHAR1jAR6dPRJiBmzeGtYcFBXabGjAT9toJZshmt64QLAQ8f",
  "key32": "2uVYUZU16Dp7qLxgxVtP1GrBZbQpDXX455qRwYhLocrgpS2aaGgUZfba5VFkuiUeZFFzXyGhTJeKoQYwY5vbnuJn",
  "key33": "3urmyoxC3ve4ZetS359nVQLj5Ji7b3xQUkrMQrDndojtTZi25k87GKWxhfPqAHYrpsUi5tsiKWNyig2GkGiBr3gE",
  "key34": "29h1gxYHten4mtQc2TBg6TXGw2iF7SCYxDQipWmHdnVhCzjpkwBEvtZhvKLQT7R3hK7SMBFUBVWWweNN2LenEFkn"
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
