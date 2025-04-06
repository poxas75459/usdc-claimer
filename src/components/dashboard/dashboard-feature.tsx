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
    "637qsjKvq49aA2PbGG1g8yFgmkLjYUVzYtemoEVVwxFpJ3cpJk9We245zwBAMwvpP5ur7M1BVc7LQBYEkZbahoPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bf3i582eL9q2EGtQs9VS5dahGr5rVFhQKxSpkhy7ZRCVUwtnSU5sEd1CuWMJnb7xU1L3b1EAE1iTZn5zSqK3wtv",
  "key1": "2P5gS8gwdyAY2vpSGtevQWjXaMp9Z13t1w1KtkR6Ba4vVLXVgYV23D8Q66UMTDSidiUfLCazSSAuD6NW6pW7VGir",
  "key2": "2gm5MEHqtHo68EMb981Uu9uY7xPXkiT3QTBKxrWvJXscqkUWYkcpzZcnvrJZnjYjaitAz4wKCxshBGRj7hqW9scK",
  "key3": "2Pe5Qy3NVusyBUJLDbZGx2A1cEcgnNCRoYAANPobCE4sDrjEP7V6zSc6VEi8xjC7Cx6ATqZAN14qUXQqwGrj5fbZ",
  "key4": "3UanQbazuKu3Ci2RJCQm6A3S2mTsC217gRZKz9FeqfcPb74JFvS3iizCDPj46s9RomXXfLuYeWy49dYwgkwePyZn",
  "key5": "dvwJBG13sb3DS3uckoyqKPS792eAJhsNRJBTLzh7TPsuE8YM3d269KAUt5ULxMaZdTZ9ZFnm6Mso1mcyriup24t",
  "key6": "3BPQuVKg2cqC7Me7CH5ApDKWZhLSTHzcpvn5Qgmb7WmxGL5x1o9PwVUdyD9g1o9EfnyW8GdL7EBKbmv4h9KzaMd5",
  "key7": "5UGrMNH5GGFb9VYPzQkvECZsyzF4SNkYPtKdmxi5KZPmB1EiuyekD1Vs4pAgjyn3oRMxu3SwpFpzaQA1TVHEvAAR",
  "key8": "3r7LML3s3A2bYBYkmY9JBNwYeDnYKmDY98V2kewX25i9ZUDXJXEniyjqyCyDtVqXVZ6d4RNg27X9paW3fcCdzk26",
  "key9": "3Hf5Cb1D3YTHLiuiWFPbhY4CSiLWta1DQtTxdjdZFzEz8b2B6tuUBfdF1ThAeJya69j3PEV27SoK3KwyNWPpQyse",
  "key10": "4NaTyfWsRFjThGgxQN6gXjiFi4ZVzx8xsjVTKbxiimNhZ8Lpw7TBfp7XvpRLFYjTHMtk3Cr8E5buMaNGY5akUwom",
  "key11": "3PwEcUykA17VjD5Yee4d1vWNBd18Lp8Pr8jho6fsht5WYbRGrGYmc3u1myBnHKrTzExkuvG9v2tWvvSLRwn5h1fu",
  "key12": "5uuwCCFhHxvngiXHs2yaU3wN34VsMYLec2DYui6yRkYYe85xwFzSTRAzx19eUaf8qttpMnsN5him5ruBShZ82PS6",
  "key13": "331VQeL4yBE773jNuW1izVZd5uHMGLtvW2HZJPhST2WjbiuSR4BbxLLF8x9d6rYdsYqmV1RyeXLoEg6vJv12pXzP",
  "key14": "5R6hS4132FseaKCoWMa7ThWQR6w4XEcBQWoJCHei2hbmUUq74Yqs8HeoPJhRqSpaUzNMJd5zRaK6E8mtS4qxA9qP",
  "key15": "4DLaUdNebVdD6dKJJUQ5iy1fnixyQ9o15E15MzG8fRWYMBgNs5A1WRWq3GHMJqkb9E1b4oTkSzZYXK7pmWkMu1Qd",
  "key16": "5gY84rFNpRjF1bbwcp2XKsq1WnTt6LFEDwtJSwTrMT9S4nkQo68jKTcHE5EMdCxNfAZpiEYySMG3i7sGRoR1QR6m",
  "key17": "5GPMg9qtrdeo8mBYL7kxgrNp8qX5xHebu1ee79ZRZqhJaFvmSv6KeUtNxouQkh4oVp7YTN3gngrQVvZrcautEFTV",
  "key18": "26ZfM7BBtcYWdxDtcnwaftLxNxikCPm6YLgCxpKCSLGTBnDrVH6GoT8bWzvgg9fV1fPSP1uf7UxEKmjha9dCVKuY",
  "key19": "2r1hf5WkM9s5XAWxHKVFTrYgGKWDzdC146uwgio7E4Ld3bHhJYX9wcQZp152Lb7Hg7A6Jd1QxJD8ePAfCzDE3ecK",
  "key20": "3Ap4ivjnuE75kCyfreniujcxXLyWJzNxHjRS2qBCF5yyDfP1eyu7gfB9NQym8rJ2xHHPMiN52SXQot7xwcybtXbH",
  "key21": "4BkXXWX7f9ezLqHiHS33MY89VgXAnuTCLN7AbbbzmtNkPHFr1rHJFwPVtHuj7CGbKpNuzxQQ2mSF7z6GfSjw1MS6",
  "key22": "41Qi3DguWX3wkMz7owPczZLVpnn4jr4aUQUFx1aCBEznfL4WLLZkc4HkJ6cQq7eay562X6KLPAGkCkWoKkHkMim",
  "key23": "4yypsX5at8NimoGfZ6qFeLJ47AnZRBKsrjN1mhXDQxLDpVE834iyQipicbPNij33Bji2NBfivwwkGx7tpxcUNNTt",
  "key24": "f38HHQnFERizRJgbGiVWZihSBCpeWnxA1iQHtRFRo2V2cT3LgCeuuMRX2V7nwEZHjtSfabTSPLXmCaVfEM1yPdz",
  "key25": "HQiyzbLe6hY571SXpkDm4jAX4Jun3WFnsrTPHCgw1Y5Ub1P9uuL9odQEG19LmKCK3j1Uohh7BfmPTD2sr4FnBq1",
  "key26": "4MPoq6q3p8GiNMEftqXqtpfQqgUAjAyng8v7NHZAfPesrK6hmJHV8VsNHjHzkTvcRG5u4Fme5ocXhbpa4SwynyvQ",
  "key27": "V7Cpz5jsjNHzPde8JsX3teVsnGwiyFygqTQrW6zrBab8WMGdi6mJHGk3Z3DdVJfgW5GJcanPsNuhWSdJiPat8VR",
  "key28": "4B77UCqh74PBX4pacirgQyMJMVkmCFLSKG4itk5WU12kxhgvaM2jw3msUhiWDvsUgYQkqHXEQKpRL5miWbjk2PZg",
  "key29": "36ezUDShaw8yeuxjdviDEQTCcAD4nyEonRSekuZSVGhrY83tsseTZbH1mQTfXEinvSQTkBEuUQY4iT3ZCuAK5PL8",
  "key30": "66dFrYBn9XBktVHQhnM62E26FdUsvroRwFxRAQ88RJ6YMEacNVycnDrnjRLPC6agufVVoDtVue2S5J5w5pXzddfu",
  "key31": "V8MKXcYXbohz3osJY5E9JAX4TsKpouTEiVmkX9rURq5xXxUfLGyGcF8rZz7hzmVmg3gmeHpvHYrfJRwoWGahg2P",
  "key32": "2MGYWjhMPhqt2KF2FXgck6nPFyYEJdWQsAwbzdx7wm19hBLzhLwKqSqA4fRjbbUTzdpjkN8MPwSYxps9Xu44btqs",
  "key33": "joc2nyotmCNR6peN7u7NqgLazgXVgAR5eJ5GAuVdoXEpd7gBWs1neeFkfU1RvB6kymVM6binG7nknA8Ux9WPLxp",
  "key34": "24FunrSv23cqavrLGQ7bgrDBsf88zsqDkZ9KKeHDBXVsLKfuf5FEBVS3Ra6zn9kHDSi9DPHvdUxdr2GE5K6eEC3d",
  "key35": "7unw9rvN2muet7vuzAs3iisQX6NSS4459qMMUAtiq7wc47rq6pYdHEZuyYTY3mHyBw613EePp4cFeznsQ3pNGMn",
  "key36": "dZGK8suAsrJgAAyGx1fwJGLcpSzRdgCg8benYNbU25qUJFLyrEgQb1nD6S4kGzDSyUcrMwe58GP3HPXGgowr981",
  "key37": "2kUdadX886r5XLg6RzJhpRUL1TowF4g37aooxHxfie2uHaGah7e7U928Wo8xC3zZGYVjk5xW9L992rikr3bhsiH2"
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
