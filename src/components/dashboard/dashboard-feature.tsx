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
    "2yLGiWzhj3zBegUzgRDpZ582EoA4Cun8wqeZd1pvFHdh1Y5ACz9386NR1LEdejcxQFbcy1BMc5wo6mA4emzGoWzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TjamkxSLNHn2XYucdMBqe2EC9JFsjhKPUhDN7QoZz7FPzP6wxiHzgFVWF36JzkPrHN7qRWEEbM553KGYJbT8cS6",
  "key1": "4GJXfA44PdiLc3WZkoqERKjArRENts4b7hEBXCCjQN4t5n7Y2ZPYiq4q9kpdiF7u6PsjGPyoFAirUwATxN5UfyLL",
  "key2": "5cc6BpFFik4bZjbKhz5vUAHZ4YFAZhDNbmykArsSgmQAZx2aMURhLS31prpqXj91c3BnC7z2YX7WNmXby8j7zuRB",
  "key3": "2q4XGYLyZM2qncCY6Z25ECNKWMnFWWd9qxLcC6x6BvuqcE5B6M5TehZcTpCDkZ58MxyFKkSUBXUCfCC8GdZegSEn",
  "key4": "Ps3VAFC9yvGQUXmkAwF3VpGar9ubTzBSjuC3Biv2sgGAu2pv9p44GpuNz5xUp5UFYaGW5FYAmFKcDbeFoGvP74L",
  "key5": "5jzRbXsben7Zr4FEZDPZfsxvBagYhHkDY27kuoiKnpyWvNgNSUq2rVhDuhbMsRrkFeVPq4xudEda3Ri6Se7B3RS9",
  "key6": "2AzjvQmLFTpqgKHyWTS37YzcGoRJWeY1WGpEQhYF91FuqdbD8aWoFy5QEtfkMAsK1jXLcEWKezQiW1H7vYKnU5t1",
  "key7": "iWnEgv8R57hXwRFRJUJGVWkqceU2rLZUwwD4eXvBNUHkrbSFraSQTDySnhyRgErMdtNjtm2ztQenV9vAvdAxmzQ",
  "key8": "48xm9FeMXzo9ytuefaZC4tLXmQFqn4Z3p9aVv1CZurVokaCTXJUuW22qJLaFCMdk59hePhYqKi6fqcokMnK2o7KA",
  "key9": "29Dz5LAyWzjVr4De83W2mQYhp6uooupnCNW8Jc21Q8D7dTsU4U9r5uK6r9WFLR1d5aP4nqfFq7kDi2pvRHc6B5Jw",
  "key10": "5vAkwqdVTqicMk38LhUVy8gF7FN4omgvfVTTBVvmSQriNgc2ptUTJvU2MAvwnf3DjSbuaYmnJAdheyL9VzUcxiDp",
  "key11": "5mHUb9hgJrMZ2D9rz4WveoctGgn2wuq6CF98DF6bw4oP3ACvKqAPyD2FXLdzYRg2fapMYcGnK3wVVDHgXzCxcB7u",
  "key12": "4Rty8bxDLoBy3qsjCZWAN7qaTfxATh68UPv5SeqiCYUdfJeZ7rP9XLr1iP8gNNe3rRFQGmN6FGGws538MSFt2pny",
  "key13": "3WkQVZmZLGC3yKUt9J92DrSezhGYrzRnx6LXaw2h5WsxqzRP5fzDeiMnnohCrp91yoiACzwujqsGXLwnRvqZS7mg",
  "key14": "nvuajRdvrEdkWzwLXm8fd8xusKtnmgtSsqg1P3z6BeFQARLXYGorz9ab5uSruzvWwCUniAx54Ygj4Co3R7csNA3",
  "key15": "2dW3NWuapeRPjLJPjXmPYJxNHrA4LzcFZ3wG75cgCJv1WTNuFpjzsnr47KaUfTCc6A7WbtfpkBEDgbgaPjAVVMKL",
  "key16": "5xZA37vxAAPXnPAtJSkjAjhtBAWNGVwr4fkqiSumS11zSjXbkWyvAcKGqm9cNRw6eNqCYhfXnbWJBw1CrmcrK6XX",
  "key17": "3KYpCNxy8SJwoooVUwpAYxmruEYj6S5yif89kZ7eroxzFVnHQJmLPfFU4XUfnRduSxWEeQM8zkam4uZELWAEg4tr",
  "key18": "3B75a6RHPdtPqeKs4sCPZBFu2BFwXj3z5XCQf1XcJEp7cBrmPWBrmQY4cLWVevMnPvxiVZBmyXn2dDjYDnG3cxB6",
  "key19": "HNH3cV2btUNnfaNYWZRsHggug13PpNKH8XdePa4Moiq35PWaAu6xtpWNPFuUq8s5TgsUvqwgXNNUjSpBzLavysA",
  "key20": "5HuxeaA6pXTMFgHSc13LajUfvwTPSyNwHMh8uKmkCHMigk1mS4AfoohEctz1ZXGAZoE5xcCahuYrhUbuz7SZm6QK",
  "key21": "p4NuQEpD4mNCgT24rfkEULjYyJxUpwp3f6twqvbyd21CrbqBCNxo6vYe9WZwM3fdZ6vutZPxXBbNKZtwSgiMFch",
  "key22": "5nZj9Te9KTG39Pjibywcf48Fn8wwkC9HrJ968XGbWroTatCeGzrpm16Mruaqdn1LTwEkRaeSdgLYTnC1VjgUT8V5",
  "key23": "2ztbXP5HqV5Di1hdcrRPu3wGsLoxg3hbQ88DbPPDmJuD3HJJ1Y8BewbmYwQC2mTrL2Cb5XsCuhya8yEiMgKnLTrV",
  "key24": "2Vbvk3im3GqHbi3f5Q7Tj4VCpsfydt3GRnv4cdZPDKUMtSwrJVKxgk7dAonCWX949dY2qiX2YwJKmYoHzMg9xd3A",
  "key25": "3VFxBYasLWeh3AupYoiLzFk1xz16fMWqC7LZeZDLKsM9WyANVEmuD1Wqt5gieGBwAXGMEf3J3duuASvYWTop1v1C",
  "key26": "3WkpjbvyGu8ZnEaBYQU93oJAd9oyZ8d57pXsFLUQc5ZQBU2ZqDz5y89FN4dRY8ck5ruvesoPU2GC4hApQyoxUXtS",
  "key27": "eNajcrtVDjXYDBsyYj62oU7LJid4XKGWvAdLfXmDoFP5SYpANfVV38nNGYB934k53TY1e5ZEKzd3hw1C3u2Z2dX",
  "key28": "5MxW7VKXZiQGJudcrsrztBdx7QNjpKxs1rNMTfQR46vCEddgUQywedNT2NkivVnqkwW9nAGQ814ygTkxxnz6CYiK",
  "key29": "3gaC1HStFMRufedwQMQCBhg6pDfT4GFFKiCzBSbeDpUXAaJwnkCs6eh4cGz6e1fiBsJXfkg2AJmHKRcGg5hEZPuB",
  "key30": "3LD6SqVv2mPUDM7mADQ6TsLh3BaCvNTshzA2Jq25uD8hkP7u1ZmouqPqX9KwtqKi8LcJtDAVqcz8Ct12pR7wJYJu",
  "key31": "3P37enbrfFaqVNLSCXZbfZog9xwMQctBZ8MRPaDWuGXhZzrXUB8djHNgG2MfgdKBbc6JbQ1aQhhhAFT8wdCzyN43",
  "key32": "4AT31s489zRPSXa2RecRupDpteiD1nrZpxfM6pHM6yukJMzr4TBCYbjPJD6yTSpuRtxfg7QjKiZcA3xk2N2p9hrh",
  "key33": "4oW5kZpcw84ocqg7E9qZrcQNDoDbAPz3RaJv4jcf2DEeB6wGNGmNJGjLZZzwgSRboJpZjqxrEUPnCGVeXim9mVga",
  "key34": "Uydgi1EXiWzgu8Eybr6mMAsR5msHK9pFEwcHFmCVpqDkozT18eSk23CiLQFpuLPuyv6Y1sf4fPLbvpNV1g9Fa4G",
  "key35": "2cqMMfY8MgzmQMgFbwbuHbCmuU6UBFsPcv5aWB1MV1CAnxBySXAcMJMz1qUYAMw2N1P7QmxPtcNhXqE61Zb8XnYw",
  "key36": "bM6pMA3U4p4bsJw3jvma3FWq3gj4GfWQea5Hyuv7cknBT8Rx1dcf7efUuckbXLbQYGEt4ncrCU7yvpsNJ6LVbNn",
  "key37": "jTXyHBz9nc8koSAyAyESQsdudVHyjfgo3L3Gg1PMCZn2Fau2XfswwQCz5srq8BPLgZAf99swTscqhvd9mCqsrfZ"
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
