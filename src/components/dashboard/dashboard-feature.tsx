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
    "3E6rpihuH884GETzpywBgBNAYeKKZkUMGXMNGusbH6oxcmjWTffQM2M2kAePJJiMufYWBf8b7Qk7FzebWPAg3PhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X4XFThr5ESWQkq9j6GT5VwNKvcJXeszctzXV3j3Wj1vUGuwHquDRL5s9Kmas624EQuAgHtNH5Z9Skpq2751sC4s",
  "key1": "3RgcyipqDFaHBSxQqRBmA7uuqVAmA5DuG95ZypirYXPdEEEEKeAY7xy7AYhZgxWwjuY28TYUE16z3fGaKeYY8cyR",
  "key2": "4D7VFUnj1rBuzR8Y6FvafYfFBnGKDzoMu342YWkMxEYthFL4owmCFqvg6Bqbjwa2scm7kKuWLJVnGrqWEqdsicg2",
  "key3": "3YokC8rxZd8cX4mSAZGe1Tn7VoWjgzK1u5zjiiFshykgx1GWBxHq6nDF6UHfceReKJWJTF2H3MrfvADygBxX5kr1",
  "key4": "3XotjHqwejiTURpKqDEYuDDZd8PMQHYGKZHPnbGPpPi3Z4Q6uCejDKPK2ccoorJQcJVphGAUrk7rrHDyjjPcNiRC",
  "key5": "3ggq1E4b62iy8Ak4RnrzE68dxpB9HqqfBhPHkKBDdxo3D3c6KbR5ojyzLyquizym2W78d3ND4KFGdQo9KbskB6ZK",
  "key6": "3qUDtnTHiPAZHvgkHRPkeRvWYm2q6hjgKLqhPq62FM6f7jNkm6vjmd5Ck9FqbCFJEY2gS7s2H7uFwnHtKKRbu7nw",
  "key7": "3NJJB2x9zfsBgWFSn89JJevEpEXe6W2yaYbH2ZU2K3N9fTFipgKVYm3NYSjxv5qwYK6ytBH8QxS5ZDaAqFFZQcba",
  "key8": "21ixAGK31wTz739NZw2JeFTkiLimy8RxC6jLhLJtWukWxBeYySZnyGYUviDnDBKzE5UoaWYFK5zJkGEbikh9W7i3",
  "key9": "5Y89nK9RBAWUZnV2e3Gh3wjhGWjHrvs9vrnzNzNMnuP4Tvvf7c6KXmKSe7NcrDnkABuu5cdNCwcYDaRVqR25FbXr",
  "key10": "y8kXEdHmtpcdQRhHGYPM1DEtCg5eLtULdfPvNskUCbCNcn5LwDsm8cuPbB4EpFaZCaPMGkLunfafRXuHMA9wKaH",
  "key11": "5EDtM5nMNzis6ed2Yxnu3ug7Rrur65xxkNycCzw6EQvUcxNUSMwp2q4aU8xZTTASkUAFQGqYQM9BJEbqAUyeiHdg",
  "key12": "5WqXgK1cbqMvDSQ6siHHUkk5spR5YJLBeTMiMUZ7aBouKob6xfH9j5rXZuZ4fQucHeKS2fe28D9fRkv7vKTTRxUX",
  "key13": "2vThPak1rL4VuBkWy6cSV4DaNTAS6X7tMaRLy1X5xL1ZXtxsCahG9rRsVbSpBWk5ocRDqhruc5XsP8WVYecysFWg",
  "key14": "GPYqjHSP8LHijvuvjvprupugD1acLykT4pzdvJdUxEefUUeeDa7t4yPCi2sdKA3G1d2UpRvghLHbMnCde3zNkQH",
  "key15": "4G6LnT6oig4RgFPxBHwDGWe1A7oxMWKEQFpeq42jd32hmsm1WCKcrrJbLtgshzFhySfb2qk29ZubEuvnWhpdfxiD",
  "key16": "3CgugsYuYthdwZNngvZaCimbWA62tj9yYis5sGsWBB4EKuiGpd2y9qn8Zzf7eo1Fkw5tNPTN324aWSPkbFhxt4ZW",
  "key17": "K1jym8WgZBjfaeo4eNbB8qDpCySTSW9KYQ8AsFdmMVvnzbXgkx1qj3AdoVcAjBjGzBW87VuAox9xDEvDpUmeGpn",
  "key18": "4eF3J3B7bKjRbEHwiWsarDGky55QRABXVF7GbuvEH32B2TjzevjJa6gjJ6EtaAxvqkT894z1Aaoox5wyEdZGG1Rs",
  "key19": "3HacoX3KNMqeTTJwFSj5kR64XM7u8Kux4gsDob5ZiyK1y6kvhL1MmNmbVeRFJr1Y4H4TUuxHv8jJjhNfQoa2W2Jw",
  "key20": "2haZAE8huttM5Tqsnq7FvXgR3pq1CP7FMLERbUVvwTEFxDFzTppCNbaFjJCb1EaP5fyxuMM2tarKRgFMrgg1ckZB",
  "key21": "Fh1zWdzR1ZqKbg7ojCReBD3C5v61zvGcPKJhE5EcfBnfNnhKnBi18xwiiiaKH92Z7KSmQrJyd8T3kLwv4yZLk83",
  "key22": "YG61xQb6mwhJtBmK2K6Q5pwV3bEBfbagBYLm5xwAJJeRRsCnFy3PDFKn4Hma51rGKL1Pzc2w5irvLsrZyZAyoYo",
  "key23": "K882Nk32beYmQhXJfRHbaR9qbTdjbKrEwd958sMSqV73EDGsyiQa9VsesqPBjFoMmkovWAgtnuPwASNvpfGFf1s",
  "key24": "5Lr78yZue9aKoy7Tes3BEmvvAhkWmQVZGyiTegxKj1ofDFfsAW5qypqHfQbTHUVQrbXq46D2VJDYux8cnCEGC1u4",
  "key25": "2ZbUtF2hwuqsgjSTL8mE913pXUN4MWB1tq1TFsbDffsXAimnCY55knBvgXeu1y1fUwJWRHh8sJYf3MKv2dDepFx",
  "key26": "3HwUpGpwQGtA5UE5wg3HNECScPidWweWFdnUT8kB4j8Z2R2g66Yjn7GyEHP6jLYJq7VPaeH3YcU8arkUhwvpPwVR",
  "key27": "2DCizvvkSEvEPVtWjmR6Ggo2pCAgGMuCCo4kULzgH5cXqdwMUieVqSD1NybN9EZ2i6VYmKQmaKQZWw3RrRX64kt4",
  "key28": "3v8doYsJRk2ZTp6gx1WwZ3rsWKhJdy1PGE3qYXf5ntkRGhivh87ct1KeLMLrfwjRup41QGrdxgdNVJPyF4CvbKZr",
  "key29": "385Dwke4N9jxCpZzjyP8gJrTWwK2VVvhku2bZsdB5UmeuAtyrrLGh3cyJKVznUguFVoGMt44BC7u1k5e4qUMbdG2"
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
