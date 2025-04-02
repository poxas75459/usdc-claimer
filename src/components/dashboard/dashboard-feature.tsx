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
    "46ovgnC1vD1VkwqVf61xvPG4rtud7dE6rmjr2PbiHGNiQ8mNtias9U7o2kyDoXxMoCqv1NMGRXLyFVAefTF4yKWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WyfVLF5SD8dJtFNWGv2maUC41Uym2pjiJfLhsEX6p5GjixZJMFkbvTihrKm9Ht1v6H7cAAYgGf6pHWbwvqFQw8T",
  "key1": "376BhmfXiPWKXsoMiC6ELnPULip7iwLDC8xZw21dL7F2q2S5GwKPb7GSSYgempp5VmiGPJdWJeJbZnFNzdDeyYyU",
  "key2": "4ZumCR5DbCbRwCJsQoKeBwdoyKMKcxZY6vFDtvTAH7hQTiXBEnPoatK6rHRq28QUQaaKoMTmNavVuwuM4XQYbVMN",
  "key3": "oy9zwM6NSo227R3yAZaf17V1RD9N4N8Zpsbyw7yFdMjAdDPkoUPcWeEwxNNoW3SGoy2Q4wF6RGwwFFniskjaHbN",
  "key4": "234qg9MAfmtdyyphPqxQSGvUoghb99oLtWYkexWsLbYYU6SrmPhEb3S2Qni9UVLy7sphoqVkKwpNHxRqNKMRfzH9",
  "key5": "MhtiX6GXFmADgGUKY6RZmavUArX8cqrpVcdg4e5wURAg88Vznxb3n49VhYFt6teF7EJ3JAkiiuCLvjtyfbeHBMz",
  "key6": "stCuGqv8bN9v7KJsfEB6FWsdhkDZGowKvzUF8PV7cbgqbs55VXtdrQnHnZ1Hj1a1T8AVqUCxswvZ2XybaHkW1T2",
  "key7": "4dGnppSWC4qNNFY3SNL3qxsHkgJY3CzB9F5kXNnsiHYtKnU52gu1paQgWHA4vttQft2XqeumJ9Fy52dS9HkkRNDn",
  "key8": "5AFUVnxnMfzy1qPL5AsXtTvCgAZ9EsA3685PyPMGExMPcx741YqhPE6gf1SiQhEZJtVB8enTB5hkmN6EJmhagXjc",
  "key9": "66tjHk4od4qFS2X9qGUu9dUW7jTWhUvUH3ai7yL6Tt72DU88BrREf1p6FuVfFLLyL1U4FqpNktssCCtHW41xy67x",
  "key10": "5kdLKzaYVK6cZMgrBDnFpL3bEg89YjuQMFzETEs1uU5mWcwxzNQtw7eoYueKff4GjLjsxHST2poNpyQadobMTmb8",
  "key11": "3F9R5fjrKEtwDoc8dWif8TjdxHfw4xW4JUtEoV9mopJt8thvcCzbFKWeMiRtpucYhyVjXgrpMsH1PzGNNKDQGBij",
  "key12": "5MzLiFiymUfMCDuLkwMt7gu1AsXmFwygrEskgpoSXNHpGt2cYfiqmwBsx7hYUvgmXtqbfXhmpBmdVZpwFaMjrMZ",
  "key13": "56so1L5x5ZY6rFCnssiov2NWXnK7z9124dE6gB1FTcdKK1VG728hg7tyLW9Gq9xaEQ5SdxsdAM8a5QTocvHJy4MU",
  "key14": "4Sih333AS5khJC726EY8m5yY3UEQ54fde9oeqWF4VwzU6iJrYDLzy6RB7LNpETN9kZpCKNjuujABxLKzTRHYZrdx",
  "key15": "54ptX3wFdH7qUGZhX9gtKSqTCKLh6EzVtndUSUF5WfqvrYmKd8yPjfkTYHxgD7UdSDHv4Tcrms2k1dnbe37rdidF",
  "key16": "2mJfFTtJUZYHe2EcqMhLYDtzSd25LQxzowEM69JHNRfNjvmkt5m5k76yA6hksMY9u9ztLN5jco6bTLGM9ywz8QGU",
  "key17": "5sfpSraZHiGp5Ko2xrUsuXk4SfgvTAh35JMLL2SRAKTZ97jFEBBSHCue9tFH3MkrBAK4wSeQU9JigiUdBn5U9EVr",
  "key18": "28xju6QRmsXzuvHuzyahUWQbGBmbrmM5P53GkAsxA1gUganbLfZ2ASQagPMaZXrisR5WieX71rk93TsrveNLF1Vq",
  "key19": "4aGiTSDnbBe4WyXgN9W5eraFKTfvft61puxk5MWmwBfDh5ooyvFdjGL3nPDfYUoVL3ovm7MgrPgUXKujekwxzUJ4",
  "key20": "1jAasHdxARg3arvSFZQHR5CtJzy7ojGcTQJqJGDW8M1ycWhAP2Cgif4jNdFgxcf38KUh1pYoU1eGJjtLgXNRow1",
  "key21": "3Gyfja9Bo4yHbx3Be2pS9CjexGn2FWZBQnLZ6yXhuSsbFLamWXTdEnecqxPZUVwhGxcEqf8tyPYMA43GdYNBtWuU",
  "key22": "3nbpwavLY8zfX2D8rYjMs9UUm57ggPj39wuNikFkAGcSEenYPJCoXFgcqDrR22RkcLMCaT1AqcRzCR5FL697Ky6F",
  "key23": "46nTetecRJgJK3X1L9iMT76p4nBMSTxRE4BRvPfCMk5r7gdMKxLh43tgfBPvwNApDzoGcpECnTgvYnPKr9vA8ogn",
  "key24": "2wwzrxcLAaTy1WueXwgJLLTBfuCpKmeBs3MPLUrofT44k1ipfxyST4rTuGXesjFs6eaZwVtqPWWumE2zHzzdbGSU",
  "key25": "31m7DsCWUWYRDaTy2suMH6MYpxwzpHBafYw2TrGLQppX3oisYhkUijGw5Jp4Ux3nKhCm6fDeoQHZqcHMme3sEuKP",
  "key26": "3nWiaDXqy78EYx1sfy3H97EF6gNCLUdTa1ZKpwiVZoLYDfpDwpc1kLrQCEcppHBfG7BBj8Kzqz3q1Jhf5acMZhmA",
  "key27": "2hkEbXVWw7MB7qKtuspthMwCrVeDiondd9roqmtWWzeVXpaQbnhKS5zHQdv7fnkeFNe5qMPRLyKB7qZdKquTrDBR",
  "key28": "26mKrVsz77CRTgRHNjiJjMTwushwvGvzCCWFRuHBScEMt2vQ4RCH7BghodYd4FPfjG5SMGKHi35pdi5cJeag9yWb",
  "key29": "5qnr3cPSTGyzajMYogkbjJNcBi2sAGFg383zrQeYCg6b4h5rcVQSN2jmvPyYTSP5HfSSMfYAznYMFGooWXNBK2iS",
  "key30": "5UHS3s1s4bHqNgK4xJznryNz2CeQrtkhR3jpYMi9ncmUm8XNxseuT68CuarcD1XzotYoRXR8hmnEzLzFqv7DPpFY",
  "key31": "64XhfT46BMiUe4Xz3rVW5QiwHVdpdeNieXJhZ51MCxpkBxU4yQJ3JDvYZZogiZ3DgoQCSaN6e9sXsdyC7Tq99KqE",
  "key32": "4tKnkrJ2jESVr7voCo5EY3wVAcRVSBU7DYY7DAw1RSR1zNsQMhjYaxnBe1Aow7nZPfJHid5sAAaX8HTtjCCVM6rh",
  "key33": "DTgyFRDoexkgJJppPjy21Mfe1Qaqyk3c5g46sGN57iNtWMbDoZV487X5g3G9ZRzRT6zBTq8mrNgwqUQNjdhruof",
  "key34": "DVT3nAURkoqmvkBTNfAgESTfSsj5YiZdmevUuxKi5CZXckbpmUWrfPQQbmVXyrx1XXomewFCoHtQkGEg9r5SivJ",
  "key35": "4LKGYKP9QyBsdBypLbyDrjHi55Hq54Fmt2oU7ii1Me4SgE6VMy1iP8W6uCxRZhZAn1oNbB2Gr3ZyG5xg7NQhBb91",
  "key36": "b8AwTquczfiscJPxK4Xt4bHRzSPhCNTGdVrZiuJVXVEjgJwxYDh2QpNHChxPJybKQxYKnA162dp17yn8WcEcPRz",
  "key37": "2P2mconshXAsBJPZ6ZJ8Z4DcB7tiLkPvRr2dFjQfDtHZwjeP2RfZXcJD3Jt5bkqCr8D1o6Jn1R26QYTgS2sgE3Vi",
  "key38": "2AUZRa9mMSivsGxoBPk5fZwDEYEKAnLoD5s9xr1yZy6NfnDKRw2LQNSEWNen9wMFyAojPATkSxKa3h3VHZwRTPN3",
  "key39": "59rxSWTXXi5MCzN3Zt1qTxndSuJ5rojgZAs3SdbtyDry99Rm6VZHow6ZRaCEUqM64i3B7tSfkcbyqKrVBHHhivKw",
  "key40": "VBRpzUGBuVKheCPLSrBjGGKGA3tfxf6S5J3vfAeLrYJRw9J2JwQAjRAUESwpm6sNVAKUDwSUMuw5SYGNfaKCqap",
  "key41": "5u4yVQLwc17S3tbnFm2atb9H6w33iS8EqCKAGeE5gSRqhWMy6b7ZJN6Kq3QSZVz3XorXeY5jkstxsBSshBpfTi3B",
  "key42": "3nBzyXgjYXhPRqPSpT3THRVWL7oWY1mJ7ckcsgoDJuLy86DCs41DyZbgkBwxZSzKx33PkNfpcpS78ZWirmgoG3yh",
  "key43": "5GcgLWyWXdQS1TCAGgWSKdx6PoyVezptc3ZiKVoVPbCWWAJFvCXAHJXXa5ZsYeznthDdAAmqH1kY3ap46S1U8JwA",
  "key44": "3fMaNMuhUQp3ZEUtbvByenDmRvhMUEffp6BNkYQuaNLqzDbf1V6EJwjN4HhBNEvBMzVdJYt5UDKdQj5w7wuoFdrw",
  "key45": "56m2nejBCxdUQMdY3jN8QL67WvWSfqFT3kBar6kPgBeU1d32KkZmB3Q94BHqVUCebsy9RJT5oB6DyJjwbrFQTSbR",
  "key46": "3epeKV3XKU2nJh651qpQSGpmPkhLbHQokzhv6HKwms3X7AYS9y3mxWBAmGKCNxVgotkjmdUdY7ovpxfGu1ZeQfKj",
  "key47": "LC2rbB5c4WhdZ66rqkLXBp3V6jJe6TsCZchmvxiJkdQ8iyQHWgUNwUkBFx6bS7xnTaLqWEEhNJsYWx694vRt3g5",
  "key48": "4XQMGpCfhXkrm2Njk62dZF8DkCGhCc7BvkH5W6okFKDs57i8Ce4PsxrdUqtvb4jKZFXvQLEEBLQNhoYvJMXvBKsp"
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
