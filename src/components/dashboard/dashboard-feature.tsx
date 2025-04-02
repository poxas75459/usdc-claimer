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
    "4bG8DqrXApHav5uB9V9E2tX6ZeJNS84f3E7nCSQYaVF1ik2a6kNpqCqmmdSBQxGBeQ9PJiEzJfpmM5GRLZkKJYaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34taYvLbeDMMq5EJbTUM9Ddp5yBpNUV6QTCJr2MWdRLVmnTvjnKi77xBZei8kMXZK64iDBeLeEAYkbuWDDt4M7mV",
  "key1": "68roznd5ZamDJZdsNesBnwegEkXaDCJu28ZcnBNNQy2aW79acH4vdtJA2EkH3Giasbjdcg8iVaEgDJB51fQGPqB",
  "key2": "5pJqnDwBQYsmsPzEbR92odkAn76gMdW97ZfJHqGnkSPMeew25RrXWnBe8K6PZno1ngK5UENxFvCPYUTYDiURBrow",
  "key3": "5EyoukRZgKEf9dNw5gG2coACx784TNQhizrEiQSCT11MJTxAr2AREjTrve3BtcfHfy1te9ff6kEtmgXL2GchuxYc",
  "key4": "2dYFLYERJBCNBFQu9RXSBrsmk6d5KGKQwJpGW8qZS1PAWeW4HqqWdJYoMqXbgejUxeNfq9cZH3e6pqbRsw132DUt",
  "key5": "3NtUSQuHH4kZoNXTqSEmhXnaXk5ADLUtwGGH8LRcmcNEF9CBSbU4vMuQEeLngmTpbrU6nA2ocgJpTJciw8WhmMwH",
  "key6": "Z2axq8WhdahGxS87TqcWumnBWahpZ15shikfZezrimoGcykzPY6ud7bzCDRqjdroARkWi9Qyn7FXyNTk7iqYrHk",
  "key7": "sYq5yreQk7TzKePyRzFLQFyWfaMg8WWzAg2t7Qv5wrGo3Nu9YDsiVaZor8rTwDrkCLS544pUFwRCmak6RcuazSz",
  "key8": "21oUFrCPdvKgZRyA8KpqgtEYXF9UCqM8C9zx11ieoQL5TMR3jNBz19pTFXCAJ4utCbDrL1pWRxUkKGHS1twgpTuP",
  "key9": "4QVMM6VNpY715QdK2bPdjJ8922hfnmZxZHSnQFp26sTeQAKoFLRbwihHQebWtFBk5CLnF6TAYZKr44aScp2At6pH",
  "key10": "2jETpFXzFmxd5LcQ3anvZw8NRT4RoX3VnBktuX836BfYLWPFNaYfSn8UiwaEoBr372diAJWXpxwzjdZGiyNJUchv",
  "key11": "5HfkBTYdha8P1jkxiNadhyacPcz6WGHpHiDV3Aj7nXfxUNWY9pxEW8iRYDYisahjsqGBYudvEjX6qu6Sou278PPa",
  "key12": "3dWJUVygrfbvxFx2FUSWiJeBzeuBQW4NPC7umXDxLbRLq1ohQJLnMs9VsxVc4WbAD4vvSR2HSxZ6MSLG9GRWcu4r",
  "key13": "3sxBz9zJ4RKsSyu6Yp3waqKDkk4TXuQHjxDkk15ToYMiUw96Am6Fz4NkfGvKsbACW57jYB3LjD9wifuQZfPLNST8",
  "key14": "EmC44AuKYEggtEFWYQ11RAMtEW7dY2zuHusR6WEm9Gij5E96C98c2BdSBkm58ESHtQg3qc6viGvr1TDcvuzZy4b",
  "key15": "2B1BdGogw2NvDwYqnZuxhVqxeXDJgYG3bjZBXbyX7FKnG7aRdyJZmzLnaEb6rUiiSLkdYCYZnF4HJYNqP1MEFHWk",
  "key16": "27z6vzpN4KiGVqbwUP5SShBM4orVxCyhw634kbzbJ2WxBVRPB53z6DRBiJ33p5VTn2VXdfx1MxuePgHVR4kxAnak",
  "key17": "o9FGs6wHfU8YN6M7uudX1tU5ha2J7xEdyy4z1biuVHhvqxCNf7iVtgDVcquVt3FGrfKyscQKasnyhp49i9anRyt",
  "key18": "5QRkw7CEQejrRyNCvXDxAX8JzvZSA6aMss8a4Pz57AErEGLcKo73ZsYge24LqWULaLyDqitN4Ek7ZayBkHedVMs5",
  "key19": "3NdyAvZbUscJ7BZKZ9k3uNFbxQn5mgTqbiGExyUjmbz3qvXjB1KWyH984f82yxda4XAn86W5gEYybscwBVq7MB86",
  "key20": "2K8B83mH8wvFx6wR938xbwYwvhFEDTZD7tctd6AbZh3bE7S8V2M3qu1m4TS26jTKMZrnpfK5HXSBiNBfHdrxc6fb",
  "key21": "257sFvrWuTsBbxW3gNTyx47t16sKS31331uek1qpmAksLToW66YMuJrcYEiTDcaQyNTzRjPDZngnWUURmnLRvj9U",
  "key22": "2FZdoMpGkFEnu3hr9MjsvNMagsakZGamx1pyGm7SFj438EgWPZqf961S6MaKcit7fuAW5UgwTMdNwXXhoKPQKtxj",
  "key23": "4N6BYRyLXELKAZMp5rrMre62HqUWZJ2ZM7CMAQ5E9xbCp2weqjxKDyycNGaSaMeyBgvehx3Q2H8QMUmBmyutktBX",
  "key24": "5PrhBydqqwo7sw35y95f95fXGLavMwnuEKXVkqDSAsAUyF56GBW2BtWYT5MYpxir9VNTQjnhkB1C672xQwPtkdEy",
  "key25": "3XVqZZ4xj2LdA25DbJHQVi3znwS2PRn7mmVWFqLEXPf2KyVoS91SXq9NPeEh4xnKiP3E1YA7m5Zc1P4tSPN41ALR",
  "key26": "poja2GupkcMm6yRkMuuDLKrv6SZEjBwnTRXCYovZdjNm6yeyJmpBfzjhBM4QAYuaTJdzvschvuuQqeauWSrnobc",
  "key27": "4YxxswvvWXvLEofJKfA4vUMVbFB8Y7UmJVvD8JksrReVPDH8b1Fgb9bSfS927f3PnxBjrC1StKnC3ZyyFJwrCA36",
  "key28": "53EPkWenZrAtdSZBregW4FJDDexGxp7y34pD9JVVD3vJmgfnXBx4xFkmqGkv3whX41QZ8NiKpWnvu5fM8kyDyrER",
  "key29": "3aLtBxJmMMzpxPPH9hcTfoxtWi7xHH6Cn2s7uKfn9XTqNU8UaampC7Q1TCkANf1chwyxuoWiJEu7TY5PJNLa2CT",
  "key30": "4CGbaXbnJhCYPtsUX8V95hMRozYRy82P3yW5YSR6TC6HhAtBUekjjtd9XzKDy264UkXv4JsPsh2gdrXc8p1cyaMp",
  "key31": "51X86in2RGk7ZA1NC6kZ5xxapQQD3yZx6SBhnCqn7t6arNkfy41sjNqWAUCggNnhw78ZBquCF4sKmNFCDYCrPiFn",
  "key32": "4cdrnjzTV1fy684FHqHRTm78QJCo4x47fRe1hYZgJAb6vKQvEPdSeY9Vwsx2AYrMhJfJDtQH4jXdamdsApuwNGvE",
  "key33": "4DQ1z9Gdp7mkcwBtVPCyzSNHbd4kaD6fR6hRY7xssP3aEx37RxZuM2nWvmBxEjGfa8uuJSfpSZjpwSdDeB36anEz",
  "key34": "3qr2Y6qNay4kWYY6YsXrPDvRB3kotZsB8toFkh3D3qHBEt9V4Z8dioeT2cB1BjS2tRTo23J31nepekxxGBaziEbf",
  "key35": "3UMajNisa8sTsBCrBSQoj8bU2ZEpLLtWjJSCEteFVVpU2JkUTnCXRQDCsYzdpQQgFCRGc5RNPePe8h3NbSdPa6Hf",
  "key36": "2njYLXtG8ZH2s4ni2yuwSAVoP98tsmk2QTwyMQBByWdB8V9LpkfhnkaSxoiW4edJ53dUAHYD8TEhnanAUytaGfkU",
  "key37": "5U3oZt9V7Gw84nqRu3qSgADRxRGNcgqrsCwjDxtR47WuK3RddE7NsWYpfauvQraAAiv4bL77AvQaPT5JBW7SjBin",
  "key38": "sCbVD7fLx1pVYGzegc4HJ5D22Z9vxj35PFbctNFbRgYqnZDJxMxK2mFuWoBWwnyjfmG6xL7KgwctYh5DWfnQAho",
  "key39": "5ZR2gHn7TECoPHzUB9RvYUpkcYpEmPVjaLthnc8rQeVAEyCYuxaSWyaVVpbgigwUKPVKQhmgYfJQmBrRkXKpBzKU",
  "key40": "5v3BHcz9GUHxhBFfbNwrzwkaqkKkNPT27sUoZpAab44aStV7JsoQuPfo2vbvgDTLRFbCni3vqneC4Mj9cFKZmo2x",
  "key41": "PY8k7CgRAasasu6nLLbyKV4YVTZy9K1krBBuJspLpzF8LxoY626tnbELZyZB1CNHp1nZL3sggZYp5fiP6ih5cxv"
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
