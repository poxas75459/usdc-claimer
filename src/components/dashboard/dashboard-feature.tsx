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
    "2nmGRg49Z4jAn5DgjESLKV4ik3pNs2w5rTXwMBpJ7ccVnfFRZD9oV4Japj8XRyoqtZ3VwdWZrTzVCTgH4Ueyia8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fYpz2EC51xzR8ptaG894ubRr8PLvR2N8WCJKzNkACYi8SdiGhFEzoUND4Zj6eGMscpCoYDGpRe9ZEaFDUDhwkss",
  "key1": "2vWu8MWqFeHwrFfB4pWrkoNn7bnHp2W6sGexE6rAVti63mSpGnY9ZCMsWAjGacupJrzoQGBu64z4mbucS81CWme1",
  "key2": "4k8ikb3znjcoNbgKiJ3ore5aKWByJLyeZPft5SX3nYoKBzx1enkYDeYvp5xWSxRjW6MRsKfSaJe6ZfB9QJd77eco",
  "key3": "28RhXq48y77xx1Aarr33iPEwKHxpzvinGfcj17f8LvdLCc5bCeDs6dnxE5PhbJ2FuHrG28Khmn63gTpnijqeQsXR",
  "key4": "4Y2kUK6exmBwaNiBAqGt3w9yuSW57BQew41meLDCMwoPm7ekUYXjtFgSgzCTCR9iYS2qrSZZgibZ5Eed3ay7Yxmb",
  "key5": "4qHacfKt14syhAnBxhA6NjVC3deekCU9U6CQkhE2nXpq7TZLBa6HhofZNMMKRvm2x4hfa1nWbqHnh4cEkQsdRbmj",
  "key6": "kPy1R7ED8LXK7jggscyC3ZPQ7mXv9Yd2BYUgVarqYQ8kqtqi3h3tTazYnVTwShNTjn61eokRtxa7mzr3vH5477q",
  "key7": "5jgBhCwiq5XcmtECSD8bJFnx6FWaJ2F2CcQFqAtb52AqroAKGp95wqFLYtH4YjZbxFGAq11cnHU8zFS5Xc2Y4Jdc",
  "key8": "UUinJPgKP1iJ9QSWH7whHMh5a1bakXgY3qXCjwhkBLiPohjs65qfYvQreoJGomj6hPcNyCkxaurpGfAF5v1FbZY",
  "key9": "4bYG3sg31mD9j3xEMKN6VgCzdFj2959Jy3osRGV6Bc4ttiQHUpF9WycEGxUCGUKTJV5FsaygnTn38dsq1Vg88uFX",
  "key10": "4pK5g225cjUHRzBgNJzc6955M2v45hS2nrRtSUcT7vqgwWmNTgS3BdqgKU95entNVBzAuL8kK4EUiwegA4tKhRo7",
  "key11": "27EwMXwqhFh8Y3yroqTqkGFk4iQbE5Ed98Y2uHmUm8Xs16qKYrtPvtdc4WHwj2isPbiwxuD6SJYg2pgKnEecnGwc",
  "key12": "52fZJfSNSXWcyxsPeEDiQXgqs7PqUcmero4yRr24Zn1kmW2nYrm5VdsjmwSi1i6sMpzEVY5FXYafEib3j1Sa7y3r",
  "key13": "zXEC2AnJoU25ecLbgrLUM8yT86pGRTCyPhApbRKCRQZMDGr9MmsiN4kq6mCPeP6HZUX5FEkdPqM3P11V8Cadi8Q",
  "key14": "o8zgQGcqrpoj4ZPqtpeULktCQNxfwyL421snsam1dCEF5m74b53QY9A6MzWmHPb3zGBbCHys9y6psqjzNPy9DY6",
  "key15": "5UZGgqHNjHAEwYbcfak81RFT19pB1n14VRYmdUUvqQX6L3HdiqmHJ1Lm9G2WgXF4JP23akdBMYE76GTtPGvxtRUZ",
  "key16": "5GJhDt1cjisNaS5QkzxBAvQdJfyu7q9YH8zhEjvJ2Y2rRcJHYWjoR4o6hyvave4H6ndnHNb7Pz6xCCeYkF8VQ3YA",
  "key17": "2BnTuaZ8QSn364vbEa7vJek7CZF7Hrp997s47BZzuQg5SVViEmbSVoZrrY36TyZiAtE3QosvgLxK6f1ZMFXAVGsD",
  "key18": "SwxFrkHwii4LNwX8tmjsvFGKmBHeoWt4gQvMTA7gSDck9WUAG51bhJycQUCsvruye9yreVUqTLnNeeUahHgEWFQ",
  "key19": "PV5rF2yDdspFAMjDnvGMn2pztyqDnrsTXA18HexUCpTgDTMgGSzTBZpJdGGfresSbo1UVh61naDWBoGRyt6pz9A",
  "key20": "4LFa3XBootUin2Xgs6reYGyK6Sok2C7hZuTCNFs6ZhVoPJ4yrdnCaSsU8dDVUC8m1SwJCSqNU8AvogdDPBx3GToR",
  "key21": "5L8Rcxvhv5uGVG6v4ARSkNpUUNJqNd9ntzapu3NdaNCX1dfd2ZC9qp8c5LUQrBZxugm5fTeb3RjYnNBTKy5Gt8ge",
  "key22": "3rKUvEiLjDjp6Q2PLSoZFJuNBdUXAJitbYkuiKH835YuBvyR7UtQs3Zsx5mHb3oUUKcPRJYz6H4PJ6dNarirbzNg",
  "key23": "4Ua39oTNZREHbgLuuXNCanKNbMakirR5z9T8E7NCka7nALAPiyWek1XCqg2hFSS6qVJnnSg52gyrNCpipwHyWL2a",
  "key24": "fZgkKtvipG59EKJJz8iEgbcohLiKrMT9LUuhHY1NMWsFNXaGiW1bcFHUChFzpCX6oLhUHMAhdXKMU6ZPFAn58UF",
  "key25": "664jMPH8698NtQu3zB9znPNqBigiiGBdccdFTWksCycMi7M3e78t99kQbkHsWzc9axWZZCw3F9KQLaJdEVbisS5w",
  "key26": "3e5w3uMQAahoZBekvpREvUkTmoVUmNuHgvWWNS27wVv5DnQavTn5nb6tiTFnTASAzh6zNFh8KqqkaQF7kyYbe7F",
  "key27": "TSU6o591UEtoCZn2vWHB9K8MSsDhYkEZmYZ7p522mtwEJEAYoDpwfrCw28LcBZtoxYfCLcqpwQS2jbLQb5imCCh",
  "key28": "3AHnAcfowGPL5WZj8wMguSSXypcHB1EPGbr1HxEw2BTLL11bF1nwooga1sjDENq9baDmzgaGRkMRJveBPrXMZQpn",
  "key29": "DAge3ynmHRdmMi3S54k7eT7xcpcWdqW1XraiHZGJfzdBpCCWrYcErsUqer9v5fSdrpUbFyNAQH1pMwLAT5HuUxY",
  "key30": "4jh3JwNGTu5P7TQDqjVm3kWWVQgEAV5bErXZKFNGnbkk8JoAvyLMSDBrA7L6CNvTN9pWuePGP9VHFVpP79hSi9Je",
  "key31": "4r6giwZrU2YopfuBkx14UZXsXfh3c1E9eASfhXrtV2DHoGoWe5aaYCgWKY4FR8FLkutrXfJn3CdWKeLzgbjmEPy2",
  "key32": "4goXdQvjAG6Hw5pjkx2tr9czMaoCmWwUb2Sj99RwZTFBd8T1aXHuo9JrdHjrZTpQqf4LCuTGNEDjZUz9NHNWBz81",
  "key33": "4fdzzMSqJRx3UxcsKDC66Cwijj5YWGjEjnRqGAVr8Tk8crvXFmKPt2C4n1fgiy4uF4cAgUWiE9CV5ViARLj6jXz5",
  "key34": "4LXxKrKuXiqSVkMiv1uiUz4tGvAbyUey2DoZQUdYaGcaUNYu2LbCbinUXFzyzU1FzHdTG65iybPzqibb8TEwpRCm",
  "key35": "4GnqKYe1Jihu11ubZJggG31ia3fZpqex9WDHhfUpAwx7DN3XM6WgPccThWGhxw8C1nQkvX9vDeUcPMuWwRNXDCKb",
  "key36": "5W8EEm8ZKba6QC4qKZvRhuBuaVVxjx8rSXNtPBaS5rVYqANpE3f5V9J4ZfAqe8KjZUkbsFQRKy124sRQMTN3LfMp",
  "key37": "5MpvfaiXKyqS2mzxy67RELJKgzgmFCyPU1QgwAxy4yvidGqo9JFzf5VEqCfPXw6WNmfAstprYLAN3UELto3P7Zft",
  "key38": "4nCTTp84BJ1EzgrUKGJfVB8ubGWE5qqP6atB48rwUUmXgbm3QrUyjEiFaRc3ePv8or1UiA6bPQQXuzM18WUwT5Pb",
  "key39": "33acGsRPW8sqBUtXZShwok48Ba3pur9pjMNYagYwSrZfrL7Sm1WxwPhtzaz51RNavPwBVmbBUFYYnoQntAnAa4P3"
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
