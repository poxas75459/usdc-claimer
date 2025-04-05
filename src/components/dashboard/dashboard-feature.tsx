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
    "4pYrMYSHyGJA82jzcStF7qhYnmTwn1bgPKzbE8fpYXH8gXEEVaWqaKA8mXztrqHa6fEHgRwFfPf8wdhtPPz9uXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BzAukBhAnKFADim3TFGfYcK3b5oMtGd6dBhyjZQrQtpiSeEwTPVxhoRDJtnzW3ADHj2gV2gHek43sKMSYVSY7LM",
  "key1": "a5R7CQkpHH72HUxWZjZTBey3XxmbhgpBP8F6zRa8JNFeWJXzpsPAVAgEa5sJbXXkR6MfHkMgaTWKGfnqbQVTdLi",
  "key2": "2JLRMoEhXN8Rv4pQ56aVFy4NathY7ZZSJ7UqyFodSkvAyvinmSXx7AE6uco7H5t6C7vBRXyiyFVJ6Dwis6jtiLtB",
  "key3": "5uAhF2bVGRHgGwXtuFHxBmyWKZYz4jn13F1iVYKU3DFyyP9Bo2A2K4zoX5Y64w7qN9ZXoup9kC7r1qs8uQuvusS9",
  "key4": "3XkKQX7DG3MdSZ1SRcityy89huos1RrGEoUAsptTcubSTmexaxnET3UycfcCjnJFDm8ahW62v4vogqhWirYRMgJx",
  "key5": "2JGUkNHgLsKaJSpaE6rwB1dzXsYsCeXQ936udHw9ZQEMooGPHnL5QcfsgCQ7A2gRGXX1r5dyGWbwitnKZ7o7Ztsh",
  "key6": "3WTzvAgNLCRemYs77FXVb1rWGHSfUohjR2gRo3Ai9GQdFuNBTYSpsWzNsSDL5bi5T8pna75VHZQBU1yqbeZD6Di8",
  "key7": "5VUutAkAT3FV2hMxEvNunhU7jYwKYn2bCtw5M3DrFiJFYjDpiP2vMVVh2W4gquWAvs1hfnQZsTbAFUjqVAd7eWKn",
  "key8": "4GRsKN2veSnBDsBuDe7tpKZWFwfaUwjELv8SRQvu9NkhhCxYKDnbQGKz4813AESYFUxhVrACXxH7TtoXmA4UQiuz",
  "key9": "3A7VrBYahsGvjqasUf6DR1mRxXe9e7B2jRxXCoJ8vfzHREpHAHHnTzn2PGyAseZpTz59GRqg72ZciyiS82MEDKMJ",
  "key10": "3t9tMwn3FCvCqZ7LrxyRyBPrcyEphLBsR1mZmMbQHAWaLfCr54vptn8QcMWBLZHffRw7BY6uF1KHbvuo5QM5RwQB",
  "key11": "5xhB6rGrGNQptjem8zwZDyNHfzax67yHxusTitzr3rZG8VkzWici7H7HdDPPDwonSW6eBzyjHE7Vr1C8tVCtRZkN",
  "key12": "2ur2C3uWaknyrp9kR4mrzUmSdSpGsbFpWHTd7SDR9E6wKZJC3f1S4C6E8rGAjqfPN7nxTAPmNf7UNvXwSqnb2KtM",
  "key13": "5foYEcVAyHZ7FVNsFkuMAiQWarZJRwwhHBBZNGFXwZuysonjQaAF2TGN7ibCFcaLfGvELvWyu3jSE3BvK8RKwhvk",
  "key14": "3xwRQoJTf7zGtDZGpg3bgPP2fxnhGB5suj14ptWMPyrPxMVvJdP4Vtqj3K76A9qSqoRMF9hxtEEJqdpdGHWJioh3",
  "key15": "QyuzYfqmzfauKKhHv37HNndiKy8KPaiG3hAUX9iD3wTYMGwcdJRwuYZZfSBdRz3H9zxAdduGhWsV5tArJh6PBmc",
  "key16": "4Lsf4JBnLF8jAabBrCT3iXLTTXWtX2CEeAxCyfkfC4GTMmZPuxCJCYu14XFS5Q5zijMV2e59FWcYTeR1HnRMdpRu",
  "key17": "3u1oN2YxX7JoTUmWq9sPhsenntemEdazYucD3in9kcez5BdNhNoRYxU2dAycvxybFU3ebE8nhyJssxgcFhzHoiqv",
  "key18": "2tUdPj4w6vUHisoRzKK99qCESFWU9vcJgursLp6DJr2dmk5T2EyXvQBM3U5ZMZyvtcSPr9zxY3sg57aJAAFbr97n",
  "key19": "56zUXJtFsBuN7TZpdKnVAWPFgS26sJyQGA66BHk5EPXxeTEneK3c3skyme63JSi9NksDYSnEMdjHorLwe3hJJvN7",
  "key20": "2XLuTGUK6GssuKerk7PCvP9rvtCUta7dL5WGiSq2orQkEkYkdtQXo97VdmQL8nTn5hnL2CnQqLKCpzsWACeCGyNj",
  "key21": "291QES86rEea9S5Ee5WhcYG1Zsjd7N4n3FXYn2bsAnXEHR3tKZjDWhL6j8csfz2eGoWrzmnd7bARtJBafCaxkgLU",
  "key22": "5KioYtmLfej22Fre1i6cXgouHKPQN6MWsiJEU7DQzW2vCMdYh3VMdnLgthexbvKJcAnDy4eGg82qvhy5Az5p87u8",
  "key23": "2ieN1pcfvc4we3PnMx12Tx9hnYaENbHDXRKmXq3vMH2ZT1QMXkf7jYpFuFRjXr2NX86fGpnSzkJo8TWa9oHFJ9rN",
  "key24": "5w9CA1CQ2cExgRrNBwxMKQx7fZYvXCqb3nSU45pbbZoTFf8HnY3nB7GCMQtMSj313oq9SAqksmcu9XZtYtiFvPdd",
  "key25": "4neA2LjLerb2sLchFsxkJpcZDEaEirprkCWmqLUX2gY9696iFR5SsMUNt8w7y9vqCiMjQApjnsEgfko3iUkEYJtH",
  "key26": "4xnx6wzJTkKNKCUS5ewyYpwLdAv2P9Xa4nxJuLvgwCS3XmEELEicWXayPy3a8FpJP5eJJ8WWaWNuVKJM4BHswkby",
  "key27": "yyw4BrUL7iZEkTGr1rqXw4GAbrkFBuxRAYBy5Mf5ku1zVUeGJ8HmPoW8ndccZdgPSt1c1kfSeqGpweKXeQ6Fq5E",
  "key28": "4DVPkgrM2xn5z1Avco6DCyrQgcf97tzCsqkFtCTgKRKsLxcBfEdBFG8knchQLB331WCvKkS7NzNKwHiZpuBdY67C",
  "key29": "kFkXBHmFBaYNUWoN6QRp7V1keSFRTyr9Rw7ydqcnSGAoGXij8Mz7nvcR7ELEdZMmdnorWaPTYKEJa9m697MkbcV",
  "key30": "5D1SDVfpk4ujNPzbMWwKcFtPZt13se6bzggojD4k9b7iDtg6rtGvhSSeSSFTZd9cJqetYsLK4AE6RVrpECQ34YZq",
  "key31": "47518eVkBatimrku58wPfuPW7VSjgcqK9NWmKRxBnKygGzGko48YiKpjik3bpWscPZVYwTMjuo5cM45eNSXiCFsS",
  "key32": "2MLX5g2VQuko7pExGPUBku8zYGJjcjAR9hFENXfZUntmgeTfLWCq4FvDQCj57qUh9CrZ2PbA6V2x2tUG1Qq2d9T5",
  "key33": "55q2T1eDZj2EkRoZWdAgCJaJtfjkvoSd3556LaQofLaYn7e2rfZkQ5N3WtjmLrmraBKUDsN9j6JjgdLSVBkBgYk5",
  "key34": "64ZfBB3DgnVLdCzYx4rUm4M4HGJv6uA2LeZPSBfWMBwT9nuDt3WYsn7TDHscCVfXsexxasfE9QdoPnreG9n4JBUs",
  "key35": "5weBSWa9CKyXbV7RU1zvkP2bDvi3seFpfk6XknayPW6cXSGBkgHoVVQvTRKEoUmdhEJRDcpfuXq1jAz8JNZj8uf5",
  "key36": "57jwwgU1RUM8PYK8qTrS71oDSnj1H4b5t83JNX1ooxFJq6J1fBiqXP8Zu9Y4GY557ZNvoijp6msJrQdUcVDA3dJ1",
  "key37": "3Uf1PLhxn9sqpKJX2nw9wJashPDcgct9aefqeq4imrfN52LAmgGn2pnscVJrnJSBiH4x6aW13WNBb76PEJfy9Xih",
  "key38": "hkqgWd6Ko8XieVFCy8HkAN7dpRf7tdmKp9nGV51D61AgTFvg6sdktefeGo33ktkmokF7B8uJPMeVehxYeszYN4k",
  "key39": "3rCipHpYCF68kYEiZNHjJK25XNDmVApNvuNxV4h7dhyQs2qUNpsfdXvK1XjksEc86oHqPbWUnkyCZjhsi2BUur5K",
  "key40": "5cXZCNfwj6Lbin6T7iCKQxdZHukzZU4hFZPwSVjftsgwSh3z4HzqommDGps1MK5H1C8sSQc7ww59vwqGFwJqSWB1",
  "key41": "2pEKqJFA6k9xkjsz2JmPMbJLUQnws31bNBMj5AanfqrDD2NywTMtvMNCcrnWjPKfiMJfPcUJHcBNXBXbmjgVorH5",
  "key42": "hCcVUihTRHAieHfkLJip6VYywzpyKt5wirKgBUuagnynyjDrWSGHZYL7cQc8N63KnPvHYXKZBCGTU93sEwJ1a1A",
  "key43": "WgphEqpmrLjiLYmQRc99quYNPA477VzMVHAfsqg3pCRFK8jQ9y9tBsr3T3jJYBsbf36ik6G966mAHkCi8yScYh8",
  "key44": "2Dg3jRXCU4FVAwwcTF9cPfTJukJ2zbeQAvkoXYKxygEerwUq6H9BYvqjhwwdpTac9QSfvekKndfKdkRv1t7N9juL",
  "key45": "3jadskJ3WkMBg8fFXT9tn7UuFD7BK46yjRJffQEMLrGtGfZv2WcTVkses6RREAeUxfxs5NvD8EkvbsXPYj8BarFy"
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
