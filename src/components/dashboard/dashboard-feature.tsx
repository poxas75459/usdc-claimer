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
    "3PWMHNPGtppER54u1tSL8JvKGYZsSeezcyVZWGvsFW7TAJzhR5hcEeihN4MXYfNn5v7xDxdoc2T93wvuAHoxqxo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMtaNMgtQ2GrNtJjKV1o1qMTdD293KNvdjJd7yUZcF7XfttpQuKVQaF1gXR9VZTW5KRXNKVE3ZC5KGHpFzKrcJm",
  "key1": "3eiu4HihXwgePGV7zgSycjXjD65rJGsX7HG1pTHCipNwN945EJv8ob31jjFn7FosrqcqUAkwbchsNSsY1njwWoh6",
  "key2": "5QwACUxK7qXkQtzTYvprEYGyCKoyYZerYJqPCqFVqWqW22rPqRNFCfqfGguR3ANE8XfY4qbzxsL41WddnXiPhGMx",
  "key3": "KBphDZb4jZpkVKuytDPxUp2JvLFyDDuN28cS65SoYK3gbNmij6zPf8LnEV2WVrVKJUBAxWMRn4NZ2wrgBCqmmfE",
  "key4": "2mivyZjgMkYzE3zgbKjnBZhrXZdWwgNoNNu2xuUe5xXCLDaYnHyXe3V1YcmKixf1NUYRtpRFzQHJJPT2id1RMEy",
  "key5": "fzm4Fn35WW9qtRMXhTR7fZjmLjsvw4ha8rHg6xjEZZyc2TQLkFYHjTkdAjAmgw4FHnrFmKHVKvVH4TJ3rvvasvL",
  "key6": "4fdMwyDE2mA72dEiYkPe8JfwK3MWnxefUtDRjdJBMBUreHemWkNwoTNLgTGKtv6e62RnHi1rxKjpywvrChrCodgf",
  "key7": "3h6QneriEKBk5FofXB3ExEpD3aQjcUcW4k4ehtVNkesVxhAoteq5FwFJXLLrEVTjJt6r8f3RT1gbGh8RwXpRkdQh",
  "key8": "5APTv7B6bk2bs1yKvfrCNs279AeatvNPpuMKf1JW1aaKaqfyN7zZM7aEKCeaNJuwrZCvbdSTp5A3SXd1SiphXNB7",
  "key9": "2jEJje3Zt5EbfrTyuHohEMnsrMhumfP3oMEmHWd5RN4sVNHUUsUJmFGvyZtB8WeGm6j6CmHLUg5WrYihDXZcaUNQ",
  "key10": "5up6Y6pboEPYhZ4FQvcy7Nnvafz8pNms166yRa8RHG9uY4fYV1KTRfU4Zktr8YUGw9DEVq5THAf7h2kqm67C3bkt",
  "key11": "3D2mvw3Pyx3VAnXiJq2GecE3EaGQj7qhq3Ssw7yXHBPoGXAyZ7dM5ak9aCaujkg76ndYixPx4vwXZZuYmajYansq",
  "key12": "5gPreNf279XbWM5XvpNd2e8RbEc1YyGJLHGar3YX5iv2r7JksuF22wncj9UTpgQcSDrmjqCZyvwnWMZKdoUopHjR",
  "key13": "4JuvsLCvy4oNnxo5FFriuL1N7pz1MdQ6K9hKYq8HdrnxYuihqp1ob8MdMNzzAoziit7X9earq4h1EQfrX5BWpk1c",
  "key14": "2NebkdYaBonau78RPbE5zyYni5iiz6fKLn8LyTehzDVTviXriyfkh3kNnuAmmR82259UfPsUKVBGfx2S1Ah81LxU",
  "key15": "4vFsG5QDeLmFegPoG7zNv3V5LEmi7EzmAyWrfkiJQrjoGKVjfb7WqoWDdMuELLvFmuPMBHq6aePAydQX5UCScNTq",
  "key16": "43Y5zhQ5TgynozfeWE9tat6L7TxGr7aZDzvVdtWfetXaKTQYLfhyJK18FnE6x22g3wNV7cHyx5WMJyPAEDzitVXz",
  "key17": "358fzeJP6cfPrJA7PeaRs7Nw3tfQd5rQFWrSqhZuncbX21S1pi1EQGEhCNESV8M3bKHHZNf5CHwyQD7Ff9xcRH4j",
  "key18": "4u3EFreWcMS5in874LPYENQ3LzPwd1eJqrViKW3YbHSXD2pFmnfQSARRFYfibUYgkRiL2PozTEoQxaYjnk6Vq9KY",
  "key19": "8gSUHJmQy3Qf6zcaxqrpfPairknzvhqg7WSmCXDZzZerdFXvLQkZJ5q7NSKic47y9SVL6swjXPaCnJYZv4dbpGX",
  "key20": "dUQEEsvTJtgiKigfypYxXQaBcGAkko1PyvP8uMrTdFLdHzEPbJcC4cbJKEX9VuZAcDShZWMmmMG1C3vG28tcZm3",
  "key21": "JPnGXb47UhkUoGDHS7ZKDywcH3ZH31i5vDxbrEzMjRGT4jRksbz63SwmNvX2FYYb14XtZe2Kqe8g4p6VmoNRjNu",
  "key22": "64x9b29A5abiPDAgZ5sB6vVWPP5VBhnZKiqiTgSH3dtBw7U7GYScbHexxHbYtP2du9yxMjNkUa2d9ahJQki7KbHQ",
  "key23": "3K26PS1nEapfyUEYrpGFeQ4iZqoRPisSBRed9ASWBi4P43osaWKgoqk58yoQu2ZS1qwy6FfxV6shztc8qyj2qSJC",
  "key24": "4uzoym8Cv8bX2X9gyrGjvprXF1Gh1wuUqhwQSB1vmh7TB4kZLaP1yjNkngyo7BqqQGD5ZfhDxgUN7vbk1ym2ZVvr",
  "key25": "AZavJBnU7RmjQj3o6uPTr3euzgFRnbzqUbJGfYzrTf3mrykukVH6PHTHgFoUt77hYGcdMZFxejA13JE64M15etT",
  "key26": "Z9eauQK1XE2Yv6w6nwmCt53s12BKitAvsMbnXoDskdBeErhNAPFnFNHNMR2ZR9B6C6dcesPxhWebrD6hNF83YoU",
  "key27": "UHJSztZsq9wtP8nPCEFFmokTBndFhvJNSxccSx6yjiAJ9Fq6FMQDwEJ5YxiTMVLs6CDqi5iYsyCpiWddEkG5E7r",
  "key28": "5BEi539yoSD3zEtus6jjERF6YGGfNVj8KEyRzL6Lt9RcvNqPERHcXbWCVV6Vwbes16S8EeWyVe1gdEDDKTvYbkPb",
  "key29": "33g9f88vf8SHZHNKxBWFKYws88T6Wvgpd4v7zeGknMH4jgBQvWrFS18ET5UjddNMjAEstiasH4EbJKpoovNS5YYV",
  "key30": "2MQbgwwKqJ3awdZwB9RunwNbrRjxXa8R2vqRPkx6uDVwNvzaCk2sH9wtoJNAXrCg3JuWrqUYLcvXgxowPXdoNr8V",
  "key31": "yPK1aGMfE9UJFYdfTtXE5qifLH8pvWrHAktQHhnsiEmTWMXPKksUT6xu5GMjt6eRB3K3nuAt3vZaSWKZvNJ4KEa",
  "key32": "4ZctqQpnyMJ8tUEqFvqufKRDz32JJEnxPbHNNhUaq38ZKjSGuo2Rj856GNMDkxhUv83x5upDXbRddyef5aZZ123d",
  "key33": "3aSvWy8m5LDpCi25CsekqKVL1PW5EJQKFsiiWN2RNSHqMHwCSSKV6Q35gQfWn9qnAx9CpqRM8GrN9gzUUomnpLjG",
  "key34": "5BckYjPurjg4iMc8bFDR1QHXmvdBnoYkhsDNDfTLDuyKwoDcqgky6wjjHoLbsYv2GhDo7G3jCr91pY22ywqx3wDd",
  "key35": "y4AfEaQcsG44bF8ZatNKQyaF19TtvmjeH7FBmYM3cpDXFgUVDUFkb5vFgREosdCJqzGym5CFdHu3aRfMi4psqM9",
  "key36": "2sddmz7bDVYYCT9wqgiC21iSmKZPEF2qbTkgTtBWq7YAn4BQ3St9cypAFU6Dd3wVSLqS8i6VCsfpGcpZb7wYBkgQ",
  "key37": "2CQLiMwzfMSwvdMf6ibGj2BwabQztfTSfsDceNfiezdYvD9s9XqkKwF998YieTVFJgbBnmvKR8Tv1KBpvPTxrZr6",
  "key38": "X9LQWxRuGD1mWgo8YG4f84k1uKoYVx2G2TTNsQHU5dxk5AfgQywaty18hoeuaZrc3YVYHqdhJFGeRxszp5vWWnD",
  "key39": "4HE4SxEhnaxszFDcko4bTsCetMwvry5LZwrx8CSKw1EDHqPrYjshYLrE1wNpAgXk8JUUk37E4pbXz7DjFuFecNPn",
  "key40": "4LTXWvxofGE3HzVe5ETX2gqiXWpTPwYjC2Qi9LUN3mkTbjZiY5yng8Mj9ydsVJDDmDtHrqxVJYc1eXGo5uFdyAZZ",
  "key41": "29oyUvA9Ek1To5grne8nXgFsppueMsSbB1Kei4fqvVHkDBAA3MaDSbtXfxb3vKSAzc2eu29WF61AphvDx4JkidSQ",
  "key42": "5767snfPb4Y5VacnN6pMmeUCpnQrjrKpZ2zr2Uy6tnGF4B55dmQUvdCTiwPykUvMeZ2HYUqXsbYrQevY5BBefmH5",
  "key43": "59Jo9bb54QJyCXbcmmPKoMmRhsKc4WgZNvJmfJnevUXez7TjSCqvfHyQvYB9SCySuTqF33dv5NymT6P4An3saryu",
  "key44": "3nJmqCG2mVmTe3iraL5ewoCt97SmkCtyKjW4sRyggu4yVL1F6ShBvUiNj5BSapDHgrvSjxHDuoE8C1bXs9tBqCdC",
  "key45": "3yR8fftUTMQ3FgHPT3cFdqzTDroQs8vuPde6bPw8FafVJFfZKyjajmvkZAESQ1Ss7yFinURmVfi19fYBUmWzaRxt",
  "key46": "V881HZmo7Lm8hDGij19tTbfSyx8bfawDtBDLE4aRrTKxsQ6Ha7dcpfA741WuFND4wxZbHos84gnipThHEvxjE7B",
  "key47": "49zfBF5WmkM4nikocj6b3rbQbzSh1aW1GSXGFfhGMzY5BKN9Nii2uPAxmf8fVw6JdKdPY3x7PfRaaE2jdZFpXYg9",
  "key48": "32rLMvQaVL6muDtaf4z3gHA6svxvNjVxSAWL2mDVCGd33iMABaEBcuK1bJCc4VEeN8hiY2cs1NK257pe6jTrDSEe"
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
