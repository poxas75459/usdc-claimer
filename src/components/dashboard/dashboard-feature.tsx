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
    "rqPCpem6JEZ4fPwt2mSxKNVbLXr7TR1BHB5ZLTf9e6XsBvRkPuPSpnGqRmtX8jb5F5HWFPLz9CrS9N6hk98EYFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8qauuDMZggDxUq91Md2wgamcwgZXYYwS4kbNoTpYTGRi6svcUKX5yZf2VNvaqjzq5soxrdcBG5f7h8iqPcKdp5h",
  "key1": "3eQ7qyyASxurRZYdgi5nJeukwwKv4w2LfaMFMYi8u7XNQFYDWvChD6X3k6WzipjqQRKDVgPn6cFU56u7LK2cCkEY",
  "key2": "3cfv2RoJF4yP4Nz2whpWKLk67PMf1D24ocSwvoyNU3N3T5grp3A3XT7QYW7WBp8wXhQ5b5p6V9qRWaZkjhnupPbW",
  "key3": "5DxvywV51oLhPoNZ5xCMhZC6ga6NTkVMZ5EsgP6DengN3VUWRkew5qnEDhRUAs32N1rwLm1umbg7t4jucdMK7FJK",
  "key4": "AH6ZBy5FCGBkGuFmFhSxiwwzoMpJ63eBFUurP54aodxG9kje7RGtfru2MqWfzUffyZNtmsmpoJDhAZWMFCUodho",
  "key5": "VP12QVaCHpWFR7P5RrGoRKJ1shM8Xb4ibaN5bWtCUbv4Axjud1UTTPaB1kARjmqoNBTxoWB22qpDMQjCYuhiVx3",
  "key6": "57YndsTqJ89wEzLRjtgRTWVF7yTCjFYDPXSYZH72kKvznPv6GaotLLkuaZChfNzmzEnCXjpqWuoZe4evkw4kMZUb",
  "key7": "3mB4nuqqNxjQ2nY2T3d8Wvrdz1gMV3rPp5QuTfQ9EDfyvVyzF1sfyiMi5cYbkB1ugRkLzuDRaTvshL2XLx6e4oBx",
  "key8": "8yNxgaQtSdN15Fgv49JLrKAFnKfmgB58AwWhAfr5cvnvKueC7NPqeCTjyiwsxU7dZQzeUQjEdM5H2Hmh5E5dVR6",
  "key9": "up1EMAuwr2MsjpyBXMU5YqzuUNEdeyTvAF3wBe7Mnsf6VRhhgpAofU7ZpPdndFvdwjatzCorCXPKyZQ7G5PFWfE",
  "key10": "3N8k5Q4G6vETkVdrgwtCVSUNHn1gw1chBjR5ShX3BofkfyMXyLnB9ofujMTVpBMqZ6HbzoJPs1G4qg5c1VhHyefh",
  "key11": "2fSKQ3uGHCH7Rqp86wUDUksYTZXc6DD3UghACXFo8a9c4wiJEdZ47Mb61dKmidnTYwxRWvwiEkETQMva1pSPprFN",
  "key12": "5CyduZCX2JHs8JbLnxwVoWvYzPGpdnFu4oVWbx3NeF893Y5GNYneTTDNn63RrMztLiNUV5B3ke2QeBdiU8X89FYC",
  "key13": "3TCVvf3qMbqt2cYbXkc8cpPPTGb5gUvBnkoKC9TNbMSf6MLTx1pijaZaY4tbL1K6upbrQyaazcW8DyxCbLVrqZ5c",
  "key14": "qVVCDC71kVUeRejDe8QJfPV81U9bRDky24ifrjKr9RiL5PFMMjmgGj1iSCYRrkepW6b6VoxNeNLSa3YTJW4GUoY",
  "key15": "2zRLbjC2CiVg7ApHxMUBcJJLJNX4p4Fex224JVHuDWu4ffkoNmbo9VQKN1f1akv7DnMRyKZ1t6xhwYBgsNqgC9uz",
  "key16": "363vKqDBzkWEyGeKororcYtDk3MPnwY8XDijshhmZnhACovd3KQrGGTY5TZSDE3h5bnbv8ChN2rjgZJ4k3J8caon",
  "key17": "2xJd1wbCiWJZ3puVnmQnXhQybNQHpVsmjwmagnykSVmuvcBid3eE75XtGRh2eWJzcTJJp3zTyZYpBsQAJvDsKj6m",
  "key18": "35mx7xXsPooNUoDR73xaioBBUM3jdSqWnA8PsNy9GXKe86U65WJBrmZkbKPFzaeBnHiUPN6LH9c7EpUEzJqCDhgs",
  "key19": "3ughUDvrkj36f3wCUg1CjF7DcaaifkohQ4HriXv7B4z9Ti8RozYqxMAemotggiyBrPUoZhEZaybYdNXg5csbYnyw",
  "key20": "5615RpTrcAArg9Bew9uJ1uiznxE69mXfLSajJC5bkxQtdSytQdGGyHAWzCHsnQ2KWruK9kJtXmL54Bj4T8UYgRis",
  "key21": "5UfFK1ZGgvgVYgTczade4hNYWMMcuBhZYKgb8zNPks4MeaCrhCbBYzmuVfZbKUGt84MNcXh8VbvUne2sGFQ3E4t2",
  "key22": "2opbp6Qzu2VEUZitZF6Jg1YFBV9zSBJwXXtPF3UnsNwN4ArMovSHmQ7ZkVfP6mrncLJ3fwrruxutjK6TQ7t46Jsv",
  "key23": "3LpmA8y5pEMUWWjTcvCv9SWcV1XSYFGKmb65EUZkP1Q7h4KF481qhwD6VckBXgC5t56NjUmVCKKBpv1qxfnYbxiV",
  "key24": "4p5YmVxsZS392vQdmGpP3S6SQmzbTLudxwQffirZiJiHCuq6foJPsag7GqCq8f896Cnx4ByTkV6v3XGgJdSskhNy",
  "key25": "5N6HwVbjvXe7LU2wapCnLqiK2N9Q8dZiwW9dc4HPaR4oWrHoRe7g6yJxqVkUVev27t3BSVSGP6K4DkqPyhaDptpc",
  "key26": "4o2Un3oSxs9vAw7LbuRiBn3PeVxFkzRTLyKewL2K2N8eDSWGiF9z7TCirZaYK2PKBCRofHsAWus5Pf7MvhGTHoi1",
  "key27": "3NJsEPDgm7wWn7BA3dU9d5AbgjRdAfrdMVWZZFUJSJqNh6sJBWUMkDD7wHD68PaTgStfPBtjP1KM3jCDqw1EwGPN",
  "key28": "2bLvbYDY2NiX7ot49Lt2w4GGWDpe2icVeUAfgVZUqHAn9wPAhUDrNUiQt2fMj8gNWC1mAME17NxKniAKPmmaNcqr",
  "key29": "4YbVmhZUPfHa3hYyn7aztwr5FpFiR5Nf48xF8Re9pjxKzEmc9sxNDioFHDLQk3eNY8DKC7Scn66YDPzJTSkqzWCd",
  "key30": "54Zc3ov9Zbnujwagwpf8bjDk61iWRZXN7QcSJtCg4eLLDgby4kVNzvEtkqBAD2g4M4TK5JX5cpiWhisU8fKStVo3",
  "key31": "21fzJtYXmrYWLsTDuTRVuuGkoNGv4fBozvBSZ6N88euBu7EoARVX1KMgQKT8NHHMfVKuoby7sv1p5PAwr2sN3MUy",
  "key32": "3KPHz1iuweZyfRR1Hks9RjZHCoc4SpvSchW1HrofcB9JqyLSqpCLpRm1e7QPv8NvnU3kJmF5cmQ3xSNjBzbtDcRU",
  "key33": "46943q4ygxLuPLJWTaDxdqBf1CQVGwJW59par4ehYuUrR5ywFxJRbRFkfJ5DVYCEonq8YQA6jq5uJQeQ2bz87HdL",
  "key34": "3TvSZgEkjeVeRTRRBU9ZARW8GUmW6zryKb5R1p8jufDWQqckcz4J4JXVedqDxAsAj8s33v5isG4hYuwL8BdrCufg",
  "key35": "4hvjUpoAeqjKSY3HfTCUrpFNRajbtgtrcLiYr33UfvYVn8V7U7HtWYCHqowz23KdBBv8hN3Q7LjaK7gLe6yK93Jc",
  "key36": "3pLgY68RVQ7XWX8cmkQL72c3vf964gswhFiR4P3ALBmzEn7KnL7YF23pEZzNsWXF29mAjtezQ99Sie4YNknrmAXS",
  "key37": "4DRhu29CKHCYQfK4zAct3oCsMv7Dv89pteTqVLNkCmgkciGd5bthnsPPw3mrPsY3yWtbjnRsfoJyotgVaaZTkbYm",
  "key38": "4UykYmUdMRk1T7fMUNAMwy67wWXsaLPvBC1fCqDKYX5hjWf8E4ozpHa2vcUoZLdUBApJn6BrZLcXiVXvTp1YR1bF",
  "key39": "3bSTH8YdYiDVja5ccUknykMimwq6bbfcUhYduBpjLriUjHTpyzzM9aP4yawE5VF5SWcJuCr6ysuxYdjv3ekFrFiY",
  "key40": "3mE63mASB9dAsnUEjwqBwRQAegSB5YRXZcDr99oidtuLZHKkwmYtRvnv5YnJ7XySCqzC7axP7PJzKHXkxV6WLBwf"
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
