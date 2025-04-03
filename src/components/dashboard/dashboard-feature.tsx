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
    "wdu3LkBqud5FTBNSEqtM4PvvgSxLrvxDMXFSHtbgg5nAXHkHLHg6mPQNuoA3x6fBA59TYN8sLEDbRCq2vMAq1uL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZgiM1WAtJUkunELHRi29ud5HiJM3JaNe48Wi5x4cDt5xPQaKm52qr2HZuyGCWUDVUJ9wjS9kLLyD97LKJH1qPAz",
  "key1": "bzNJjS7cQujkTrHJAJLdzpwn3oGDufW3hFFGf69prMzvU9XNmuUEQ8q6dCgkLf9tF6h1cm4Yenn6fUnP2AftCdb",
  "key2": "4Zk6rAqJieJ5Cn9MxZYBaU8cZfm1RgZwN3mB49D8bHKj8xgsZcGJ7SSDVnpSDsnRbCrExmUHCpyLX4MKjt53oWMG",
  "key3": "25eo67KcNVo5UYsqeRZzxcJamjHkAR1eK2tnbtgYVKy9zSFFeest5mF9QUAKRGU5Mt7dCbrUaknDp4CuwhjmtnTN",
  "key4": "2hkkCk3n3HosCjR7E4WafruZeStnNiGMREUaQowyok5rvChd3CXF9kwMP62BmMcDh8pAXtDNAiDwGoijiT4R532F",
  "key5": "3JwxHCADhidAq5p7QdzxfhuMw7XyuxafeHeHEFp3w14v4YgSE9VJAFFDoD6xxCBsLaZNywH1xXJkrTR6oCQoz51q",
  "key6": "NNsWH2fTMNhqmk9YkgTGi6GavDzhAdx3bZ87yeCSNkef148ajLMTfLD1M3GLtYtG1kjgSWRBMDP5crc1neVFz3c",
  "key7": "5PxS5hJ4c2Ww1PoGnnVaW3bkGZKF4kpppLKz88e5dHUVqq284ptM1sWhfNQaHKusAg9GT46ZXPyWdQejSJXHXLYz",
  "key8": "v2HGp2BJnqNN3UtTxt86EJjK5n56Q7ZD5BHNkaxbVHXdFipdWBSaKz6QBpqeGA5piMQwuEZr2uJB6G5FgwXpu5Z",
  "key9": "3FPTx84hy9JtdGkzn2xkEuLBhX8APnyHpncCcDzN3uYR7c15fR7phLZ9wJLU6ssc1NaLJURi4aP93Xe4oheZEPo",
  "key10": "3W6zp5gJoVUaPJX96rCox36C8rZ7YomLFpAaKzqSLuLrqRZTVLbqEiVjzHpmcSv37STNx7qqcQT3rdWtvkBwLHZb",
  "key11": "5LygpTWMyiHdFcqzLEdpMVwQvxGopsXt1NH4HektsXLX7P4dj4zbWAe34WqRPrHgFJ2WV1Yj1Z11Fj2FD586hsvd",
  "key12": "38hUor8h7z1XKrhxSk9sY1AJqShSdYmsaMi21rQaebXy9U5ZfLJniUCdFnvAU6ihtJuMYy9CyCDk4937rqY1CPiW",
  "key13": "4TJxRAo24SVAiMkfu6HGtbaR6Lotxha3H77TTgwhvqdqMdq2wDwCAvDMiGHe5oTXioiQMjU97HpFUBVnqajby5LA",
  "key14": "3NR7c83SByMdayXJkibHcKejzoxXikxMHW2chtfuuTQqAkFgFrsYuoDokjabZRqC6GAc96M7sXyb7VKmjCAVeg2E",
  "key15": "65hP6dF54bTUiYCGQ2hBFwz7ieAusnhKxbw8Tha7yfBZQpoYamyZNkcFrjeg4JyVoRSpjz82n31MYHNSTY3LL5iU",
  "key16": "CCYnFa7S4dR4HQtkWRi39v4nNeEQEDXV5GH3qVatoo6UFe2YGYewVBRvae2XNhx791TpBBXUpULEzLxu2YkKtYq",
  "key17": "4Wey3FjRQk1ipiA9DXfd29VhF4zXqzsD8Fdn9qeTrLAsH1xDva1uBuudBQXPJ6x5cRXkKqwu7427gjeWKZGMwv1B",
  "key18": "2TQEZyQq5YoohsPqX27HuLsnAT6oLxUQU4ePrrLBejKq4oJ8qA9iuEJzzv7bvFz7kDBVcUVNeZ2BbcCCyHWcjpUX",
  "key19": "5BVMLCVGY2jwjpzQgs5f2CCivLQN4Zt991PcenfAK3D2nCt93BRZVB2pBySd9kPWbUwXCBzoeb91GZUEqHpFXwtQ",
  "key20": "2FiAJBrCnyjBTpuvrCVMBrnVnBEorHnwSVzcZTQdip1hLEfG4SXhHg8rdkPbspzMxJhaPFLj6LFoYBWqsWLBncfj",
  "key21": "3ojfRm1nmj86agwXMzjXC3igAdwttJXzqvFXbR6MaRfnEuguVPvmiYEBVLzs7QToQxr3vLbZXQtLiKAxPE6GgA65",
  "key22": "4Ew92yohGcWFY8B8HSGNq98ucRUzg7huwvYDosqYMvySy9C8QTctVjFCLnbVKX1Nco3MHqNSYvrgouLA27pr7vaY",
  "key23": "5oQ8Dpw6cirDCHkyAji1c9d7WAKTUioWkuyS3Wvhq8fLSm3Z6UMEGoDySX8YHFcuBKRfuQok1cXFCDA6yUyYea1s",
  "key24": "39hnh7R4dXCZcg466zmqTqutXfxMFrkH8VxxochE6P21yhzNe42oZBdUK8RowqptnyPrqpm2GnqZgJJWxWtJ2njn",
  "key25": "fLdZP6Z3vEcfan6MKAcno4zCZjpByC9YuFYoxLtkQ78MiWosKEu2qtLKQ5Fm5KPso6WQsiLeXN3X71gh6xtMFGY",
  "key26": "3fhnPzuGTucz9zmiRwxawxEUhS69cBgdwL7LmN8Mbsp9nbB6Mj46CMJW5Dms3dPZFzE2Y549i3xx2KsJqVwBjB3w",
  "key27": "5CkkSoMzGy1XtrU7A7KR5KXEawUADyQRne4SjMazo9CHV47yGgQ6CssKVjvGXuimf2K4KKmQEGLEJQyapBhT3WYH",
  "key28": "5rqRYMxH4XEpL1qJVkzKV2j8qeBQdRs2zgBU7gXhwPNHJ8a5igQ6RmKkLUG7fxMefnk3Jf9B7U7RfPHusErqSdXS",
  "key29": "55VSEA9sWiGU5rjHt5iv14eSyT1rduGaCQs3oHjFQ5RgatpvXaFHvcpd9WjCEYfD2jQqzLjN83ag7tN1g3FPpv1c",
  "key30": "3NibxLDHaH5gHVyGQbjWUnNNnkqHNPm5iXVF2cLpra8NXSzLB5p2yPnTgscUet5aLRxaCfDaZXCZ4tBJmBDhj2tT",
  "key31": "7J8SmV6d6UZ2uAmmKChCnrSh7VbSmPrc21E7MYrYfLQv4Axgx3kVj35XKET2fTXvS3Lko444XSkb2ioV85mFoAy",
  "key32": "82Dgd7Pwgs3UWCDoFxJbhmZ9VS8Yfr7zHQUYk4PjW9uzcZGnvu1ittgycCkmmgwPMMwKdZHnzoJ6ja2NwaFe6pE",
  "key33": "65GxjMYLZdRysMfrZRBSGoipPuFj95DZpR7yjA6EvZkbRBqJ6AJJyjSyUAS4i1q1xWwRBtoVq1XLSzzHp3vw7oHv",
  "key34": "2zfNoP5sn185X2piedkZjBE6oJ2TLmPNU8F22E3aGx4rhuveBkuMbGFWAL8349vCZhBv975c4ZyHPRGpjBkPtKGG",
  "key35": "D7fX8H4azUmHxZ7ib249ocVdfovwZjpPKnHMJ3fLK2Atam44tCjYFtxQ8CZTejpi7fGo1rYggpw3fALaMcPo8vK",
  "key36": "M7hnbaXMgbqNUokc1q5H97PXcw7nVdUv7CQciS8BJttF1pxACgmfimKdrf4fwpVtJp7AkAVCaYheHMCBXhkoRrX",
  "key37": "Hnu1QV2iuLaDrxxv7HVXud3c8NLDj8HDVME7v3BHdpeK218pEmcAHF5DLCz1GRQtD92j5pVnTpg3c1TqqFua9L5",
  "key38": "4MBkXQw65SwZPTE7MRQpLfEEemWqppsdXiKMUGWykvDvv7sgmXgzB1wkcdH78SKw6m3hdXXE2cA1xDkmNwaDbVFL",
  "key39": "UwB3Q6Yct8jmyU55Lpeh1hvGfGiwmTSEtJt2242Xs4PqEjNmXm7hHQYnzbYv8LH9m2jafEmgGxQLBamK1s7fUaf",
  "key40": "3AoA6CB8FgRmm36RsQDBbQnsnXdAG3wnzGcs3apozvCFH2kXNaxEnhM5wvSvN72MyvetssHxZ7TH9YRgveUzw4xT",
  "key41": "ofkBDQUh5jLrZyqEVyNc3GKM1vkzQB1szkwGrX4dbVb4Qxqp8NZpYnVvMafwsgBJoBSYvrSqWXCQwtnmQRZBGeP",
  "key42": "4tyt1iPg2pHnfnVPSEuBpZGUNpD6wCmELXkrZWyoPWjaYZcSkRpiMFp7P5KN1RFq8vmuFf4s9HeY2k4YUgsFanmR",
  "key43": "4jGhMfdU864xkqh4SeMRgBv4CvX77UkhxJRx17iuqjYYhKWM3duGSDGXyJ8Tjg1yPRKyfv6ebmKGHPnZ5XJyaBzs",
  "key44": "27DzrQVHLbBxBkKep6ATb7agd2zypWykBJJ7m974NJ5iFLzQuLkzYC7FW7U6H4yTm4gQkUjngBsftvHGa5NLzaZR",
  "key45": "5iAinQWZQ7bxP3Jaht8eWqRmCkze9zPZV18nCu53PnN9gxXMKYAMFPTQZhmknxFxpAZ5hTE2JcGnXGCKXjZxtVkr",
  "key46": "549PmWSNcWvEybDisUq6J9BF64JmMKKdiowLuKrdp1PkZndvJDHmmzRuWKJrYjJuqBGHQUBdcmhaPNwG8tJTVqPW",
  "key47": "3ogg4jk4t1XxstdFFRSa9TaUF7JXSLHxqXQhjb36P5AFPM534WSANbD4ygk7uCaqtHXRSZbN4k7eP7DFbLqugipr",
  "key48": "3gnHeEJDb3oS9nEEcztJFP9xmYj9B9UuPiXcWhD5L2TUWSYSWvGcgUYd3qxv7urjfizHyPXCC5CXNAnpc2Up9bXA"
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
