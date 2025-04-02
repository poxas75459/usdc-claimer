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
    "Ye5Zzwj6Mhhe86KdAoJDjV9eUnCs6tRx3RmKG8GJ8NEsygKit1oMXJnUziofPN8ZsxUwB7DW8X8rxfvvShqu1zZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zyFuWnR2GyALS3Sh7Lv3YNTLe4xrc7ZApTr7SVN8zUSQ9rMK4MK2R3S1A6qThwZ5fGtgKV2Xgrgqvenz4p3AuRu",
  "key1": "2UWR38pFTh4SpBRrq1VDoyBEdC2cPzNkcSoinkB2QUzzXJDVjntEfxeuLtmCu1ZJS5nhbkZKqUbPZgixuqjWqqbJ",
  "key2": "MTBMxQ45uX8HGpPiCmXpS4PUUsAAoxA8fKfhafcSknJzFb3wcbEVMtkHsf84cfi5uWTfR3Xm5qWmPJ2w4VkEmG2",
  "key3": "aSdn7aPe43yH62UZR4ZiKJJBfMhehAxY1S2twpSkkgX4tUkd67CNYY1iNAFgYdDcmY3Gnn7TVoVaSx8puugEKhC",
  "key4": "5HPQ6R2Rr7GP31gwYaS4Zvt6gCpqkmNqpWvtxLtwPP4jbudjwjrNgLoT3jFmNLLGvRYf9LyuKsh9TeyvBaaM7wxa",
  "key5": "4tQnYFkRdsWjhopx3jizmdQ1odN657R1fxtq5dSDeRmxUt6pu2xNnvBinqGcRPSpfBLjQP2w5ysPnLujYS1zNHaS",
  "key6": "3gLV2XkkzY8W7yHWoGSAKf2f2jdY1xyTWzHysoctAwh14N5k1ezsofumAe22nrRWRrbihxkUNVRDRehN8xzv9Lav",
  "key7": "38F2b1LT7vRvrD8bMFxurYHpPPNMVYDV4uhiq7vzgi3w48Z7a7XmRR9KQzHL4gAHWATog4ERH9iZHMpzCudurA3q",
  "key8": "27grj34gPBf53hJyTeRTsoMN5EFJHvHSSzzFu25LjRFPPtTrAnqm1CcdB4DYLiSAX6r767FeXEiJ1oL75SiCFwkV",
  "key9": "5zTZ6Tq2AjGC9oD5Yvc3VktNXorVpTrVCK8VRtRNPiXiR3Lxe4yMxFVJPfjWgBrfRk79z11RrJjfo8pFgWtqSFkW",
  "key10": "ndicAYzyX5wB7bASDRWqBYu7j3VAHUo9JJNWW1Nmehkwgizr8Uq6Cq2HaSak5PdouSFD3dWUdFkKFor4ek922bH",
  "key11": "ng7kqgQfvkbQCxcpwkGjZyELGymnWg9Ui8EgG3jtz723TEgpBSKdbjjsBBDJbgBPFDknssXxwrF6BDbFGoXr1Be",
  "key12": "4CenTxNB2mWBdwbpjRbtdqBquAtZLjMse2iGg2DTeuWyaJecw7UGVz5UsNXMu3LwJ1UpfQXLzmnYcFa6dzFFtMkn",
  "key13": "5rzZq4683WrsXjGdK6YaC9zvvsxmknPU3QUoCFhYFPyscBk3dJs4QvsKuKbzDwNjVozTocsqxa8j8eiPXyuWQP7o",
  "key14": "3Cn8mBYSAJeyYP8wcA9gNDZgQJzv3zW9TVFev9NjPyJ1fLX9Nk9qpMRpGBpC87MQZZcZqFTe9GbBTWEWFZVCH8PB",
  "key15": "53iv9mfEJ36mC56RRApvzioKdB63KzEuRCoG9a69utNobnpherYMuwGTyKRcBVnFqLjrqQiJL69BLbqUg8VVoXko",
  "key16": "3YZy4K25YeyGnUFMjMxBaeHcMBF9H4GjTCDvo7AiuHrnQDKu37mES2P2Sg8k1TdNL5hPEnWVAUTwYv41RpWbwSAc",
  "key17": "4SExHs7qJvaBbAtxCwnwVFURV2Vxt8svNcAKtwq6kPYFYLtcH7Fnx4oc5kiJa2bevUzwoPkxxtU8FEs6uREs7Lx8",
  "key18": "48P36n9QVBWzVpGEdJNqWMy6NCtSgpHDedzSNBsvsRxmSDQ4NrNcfBEpVFzsTPZBKC2uNSvw25McwKyTxeiSvS7Y",
  "key19": "5genkhHSQQ9Em4QEYHnz7eAgdm3HoV4mMAptSzZjWsLREmtYndZ6Kf9MdHrp85zvpqFiRZdRkW6Fw1dNg9VKoAm2",
  "key20": "3WtyRNXweMaew4JV3MtFL3NiS87eyNJUBSbyWswGgXgwAV4NZHj6macZSqCZkUsk71chZcbPojGNFfgpYL9Esfpa",
  "key21": "41QmbjixtThWdX4pGrxSKEsjzmP2M5FHxfYp9p2XVbypUPXCtZ4cnR5LyzyQaoX9HiewqamH4fnd8zyncxip2Pxs",
  "key22": "3YFVC4FedoiDN5NibK9WQQDVrPb5cyCbQksJrbkFMdDLGSZYoM3fYTMGs1gQxGmH4Nf8tR66Ku3uxbSuMzsrUCVp",
  "key23": "3DxKi8371xtKa9AqfLNQX9mpGhiZFbq8D54z18fC1wsEi2D9mA3spy3N9V6UCg1qRrxfZZi4Ki1JWBh1kJVwPoka",
  "key24": "4MyQL3xhKEdDhNdGFzqa59bn2ytViXWD11BpgbcEepuoi4a2JVFuGbfR2Nrh5QWncy2GAqpNrsGwAvZTsGaUJsiu",
  "key25": "5Ngz3RkDqY9ZU9mVb1M8rG6jN46XtJkHmnqVQWeiL7DnSW1AwL3UUAwRaEtcKJJvyZvisAUU1LJNJUJJuv3agE8b",
  "key26": "4MU2V19nUMS3xxsKx8WdpudGHqJwaPZNxPWVTuaRTyaz1caC74JisvimmvpT2aVGQs5KhFnC9n7HexbsQqzu87Pj",
  "key27": "3ksFWyQgpfMmLsSpr3bVneDXw44Ec5LjiXpQuxUEnTcisMeUtCeQCZpyN8wDQdoCXC1XuTc8Y5F24C5ypP5Kmkiv",
  "key28": "4rpCMp48JfCTafoVZUPkXZ2s68w45AHVji3ty24DEs1HxQ4rgTQYVUEUXQWMBxX1E18QfBQ6ApMeSgxN5yG28nvN",
  "key29": "3eiqFUCbCPXVB4jTsTL5iCJW8AALZAMnDrfCTeHpEUov7KcDZn12F2cJ9wrjkzGySLgEVZBZpaP4sdFeGWrQr35g",
  "key30": "LRG4nMsf7neAfgdg53od5drk7Ey2mo8xwvAhXyfUTyfqLRZftatSASxZUb7sP4xR9HryD1GwMxjM9fVVRxoaADB",
  "key31": "2znobXcgcaz35TFyizqBy2gJHgBVoeUXCq3iBUuj76RufhiagLUHdjtTqpP2LRbwxJ593z5PqUYjSQnLWLwCmEHA",
  "key32": "3evUfmgzbQrX1nzqAPUuY9wLHrVSet1Zb5b4rGwrYgqyhMwb1wjuYvVfMYuzxqKAgwN1kNeHYb2W58gZWikoHqRk",
  "key33": "5pjpUVaLozP9Mpr73BhFv9Wo25FnG2kfN8yyAfDR8SAkT9qxYsPWvEzFsvoWQmQaWP5Aj2qdhZLDCVYTCbxivbiH",
  "key34": "44dJaPhvY2DywFGJMkJah66c4xBWJmZd8DUrPYYEHCoEXUoVV1Mb9tRB4NtrR7dvKAzjx362Db2qHc7BTMa7tNp4",
  "key35": "2jH79Bqf9U6Fkftrh68iwhLX58aw115ji4N4SXpY6qwmyxU9nmQGVXSM2h5zX2Ltrq9yQdnYDvgqafB9Xmtk12mA",
  "key36": "2DGXCzngjEc15fGNsVGktYt41cv1Racknzvn5jBMWN5pPKzXfogbuDLhR7b24MreBqap2RWdJpFepcoa2rrbCpVS"
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
