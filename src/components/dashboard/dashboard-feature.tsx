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
    "61AGrhXxg6aXdeLXkHLHasRSkAsSqHXm6QVcDW7AEA4SR4KFZuak1DvWhTBS62ZhfGTQQ4gK5UVciCdCkGvrQXDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oFqKPoiETAL9Km5i9kG28vEr785SEvbsAFXLhXtcmXUHKCf2JTTDScxT4GZSU2pspHrSoFcMxfetXbtQi3YrkCW",
  "key1": "3wunrK8YBfkmbV5xVM2CzqFcWxTsuCgNtt3DZrutvNT1DhLsMQ85rdz7EL2JWxnxbuUVTmUz1yhC1WSRzw5SStPY",
  "key2": "ruuB9Ac6VDVzFJmzsmFfg7sddvPU7KakhrUpF1Cgo9byYfRQm2SRPC7R2CWWUf8ZCB4aS5kDHhY2BVdJSo6yo3k",
  "key3": "3yR4o6vBjsb5nwyG6HNqmb2NRCDZKpgGxtTYKvs7J8cUyNKdAx14PGZvkyuhj9rR9P7WGzKdxZ11Wpn43Kz5yuzX",
  "key4": "RfwDGz7Un2kAUzChAdSfVc2B5woG5o5B49AkmMFQyGEmgwyNRjaSP6pyB33mWypMiEJmoguy3pFt2zHYAFha5fa",
  "key5": "kgyxcU9rctNMtv8eegWEa65xyDJauH3iVTuyp4tojSemkiNAjexfhGuxYzkvfchYViNKo7PT53THatj9gZBAizw",
  "key6": "5vDxqmjeKgzPobu6jXr2D3Ngw6k7wvmo9sVniARZBDLMBQFAvUD9oG68YM1RQgvYpRACuitob2aqkjQqVdA9bDXj",
  "key7": "37nDstiUwPRvVnGQC765RA6MXSeANB4pdh693uHzFyiSZFiBLKDeDsiVe8V2dAQ3inSfKroFjLHAzQoqwFQrirVt",
  "key8": "26qL3FWNuGM6YaacUMQNJf1o6hoM5CHzf3xgnWYYc3kX5ciHf8ZfhENboVHoksCehxuSjwo1EVZ99y48ojPVth6G",
  "key9": "W9r9yyJxAH8qriKKSQcfwaSVLDM16krG4eUgD9Bh6T7J2BZzoFNEUwpW1CBnMr8VRewZRFzSouKA5VpVsm8q4NB",
  "key10": "4WdgFzA3ivgmt9oATbHq7d3QdcqqkJ4MZb3W9AihrnUnF3QykE2BHTPdDNuGBEiiTwYFa9phEfJsiQjZGKxKUvS5",
  "key11": "fffD5PeahMzpKjZqq8Ahyazqb56r6nrDzJuzFSUrNPu7qAfdcTDcHmYb1aAArwzR4zqmf54xAxbUM4pKJJDKkGV",
  "key12": "4d9FHurGS4f6RnFEjd7wkweJ8Nu5Kchg5D8rHQQ1TZuN7Reb1BfrRbo1SrHGmq2zFoJBijBxQ86JhQbCLGPKHyyS",
  "key13": "2SEbUS78MaAPLb3NaUoKeFPuRs6KZiNeHxDVfJd4Q2kDvvjTuGdvcK1Gqc2XVzgiemQgWJLYaJ6qfrHxDQ6anDoQ",
  "key14": "5CyGxvFBEkWuNey6CStHqi2QrtKjJiriwuqpA4KGy2rvKvHDAZUxTHbonacQKjASpofaVoxDLFvDQW6HJSjUAQP5",
  "key15": "4vha743zBqjfFfePsB349Aw1ZRnQTPu91T9cHGx2amFnwA6y2m7RvAUftvFbVkPxpRZRD2FSmSUhb9FDWjAyADdB",
  "key16": "2tJhQkumCbYppT5k5afbBzDmAHVMdmFsfuET8bZaiNQKEKH6RiWcrxMV6Y3u58w4YGLycJv2jRkgPC1roUuoG8fs",
  "key17": "3tLPcSaAjtvgUY5pR8SvqXmTHjKHVmPPcpX33FZDiSAD512vR2QuuenCeKQFV3Vh7aw55SjBzu5axVmz7EPduEx6",
  "key18": "4nRHAhECDXbu1JMHnoEELkaTazGh71g7NU72tYJXLjqdXm5ufupj5mZKvQjmE7Z7Xua1HxP85HZm9uptfktBHE1q",
  "key19": "2ojp3aoCk3L2TkDs2uptB2DNv1bhSdnhQArbAFQYfhUk8B9EkvxyFnLuk5FZTWQGqobFhdBrW5Fp71gP2vv97DUd",
  "key20": "5UNJHXgrz3yLY1Zs1X8USW6Vdfp7Kwr119Koe3bEMQQE9xDBpSsKSesYqEJ7SBCxhxaQ2oEGA9ZjY2JA65NxdwzV",
  "key21": "2yLmU1ZFD8GCj7dafkrG6TecaJeJAWuQgwiMAqahUVoUeY3y3oaURvegYyR3r2Y5oDbs6mBxXu6kgKZM92t7KBtJ",
  "key22": "4bm7cXV8ccqw9HLYJxCza271eNphptD2K41N6FAUeZDydevHQkhStyYoTvZjKhmujg1HWnbachwY4usyy8hb8RFH",
  "key23": "U76Cx4tQUFMqhvGPJrKrNz1bn892GPH9j2rTieyydafy7xmVrdPAhHFGsrUB422nYtd3mXhjeyW45Lmeudqsnte",
  "key24": "5rAtiejLVgoZVibu46tNCxGeYATGCTtN6YPaXFWURf5syWwfmykKFNoL92JyJ2HdsYJCZJb6KKheqQkNWBqBwW6U",
  "key25": "4UKhGRov5xBD1EhKbshoe7cDFTBcHFXAEMxN9MDZ6XtvixeEdyvkzZUyroH6jG1nXhr5Ugx1ffGWQabJvms5uzzm",
  "key26": "4o8L9exQNWuGMWAZZ75cyDpzvnB2hrTriwT1XqAFDekMdqhD1jkh4jBRGYzx8auKyDQ5WQBZmNcVXSnos7WtekTG",
  "key27": "3rbiuKGoKg2CRfXW1b5Cs2er7HueW6YhRBmZQmP4ZiaFhNwjqwcmMezUgpDRPmKHkcfWntsmT4sKQmmJFxncvHej",
  "key28": "5buA4R6iGbAFJu5bCUJdCepR3YvMLGeUfXh8biTMWaQCcgUdVmhUjbTbR1gUAsgmViBMZznFhmpfvTU1cHnBPbi3",
  "key29": "3U91iVk2Rzpoq7fJ6dzX4oLxPYF4hMZoDgRe7rNuYHnYTmafgeFcc9NyBvD3gdWQiuD8BjtkmEu7wgb4qTSSFusy",
  "key30": "2joEnMgH2GenTTZmZpMx5bQTzd3e99ottPWNqghUtUVCW5DBiF82TnxmTrKPsnh45UxPi2osrspz5dA2jS1mViYc",
  "key31": "5ejQZ9pbhCKT2WZGe7RH7iCwFij6Ej36iDhSb7vs46sMroKXLZ1V6gPKfXsWKydGjLACKKfkNUtVtjtWb4sJuZyt",
  "key32": "3rrZx26oNTsUgzo3cVdMA3xDLKRKNn9qjDuss467CDXECnzZiYTmuLJ3tYGWsqjgPY5RSTjoqpMxt5Yyby7hkHrR",
  "key33": "3X8JnpBMnCsQqGaqYrCaSLQ8zBRTCsaqN2Wmt22Y2NpnfJ49RtSjJ7aci51EwyvfsMcDfJFwP7dDckQ7eTbH5SsJ",
  "key34": "5h3fuJoERxWXeD2nMJZFRiHExrErGPPmK4f9c4MBPEtMn3HXR8NUGFJ1bNMHjtM1SowYo2Bfwuys2MyfjZCGBe3T",
  "key35": "kAQZe8ScstHvBvZ7WjkEvCjD8PHUarCE5UCqSgQ3wcub8DUWDLG8k26CYH5YpZmu4oXY37QU9wY2yPQwRp5XowL"
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
