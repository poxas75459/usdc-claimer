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
    "5wX7pPukTArua2tdziSn8iYKGToHWmHZARWobw8S3bygcXqRLpLnDvMQDFgJ7zZhwLQwjb6iRqdXVgX7czWcvS5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5by1N3fHwuWkqPqq5wviKxxq9x89eko4PYTSk14bcZ4ZPhqhArrSiPx9HhgtBDke1PDX3UDsRvSX8Q3rUJRTL7bF",
  "key1": "HhVxCUc99V6kojCP1zqAZ1pRUPRysWtPRR1tZ8WJqC4ce2Zzf9YRQ8Q4cMDtdazGAxvt2BwdssC13SiKdcgknn7",
  "key2": "4X44p35gReTjTtFj1goV4vaAT23v2c5GEgayWHWtnkzXVNR2TPhKuEyx3CGLNZM3iP9X9gtwJqDDBmUkroHsDANi",
  "key3": "4SYqZWM5gZjHJukWod2UG1ceFvbnZwwmivVCjhDnurBZXXyryPmiHv17AB7wCnbAR1ymvcHAE4DeK1oVzP8kHar4",
  "key4": "2YoQjsopMHdtNLF6v98tjgCqmqWFeGETD1ywNeJQJQtf7dwE8P7yugBH5yqaJpq63FiqKS59iMxXMGikDodSaV4V",
  "key5": "42Cy62Ndfoup1LW1HvKGFkfGVxfCTYgeV253uyZPs6MXpx4fD1VD77MACKh9bjnTQwfNAd1kLDpz2sYu8MV9aALk",
  "key6": "3ezMGJrGscQrMBQGVDKMzKwAdBiUL1iXqCzFdpw2o4Gdcz7qH9BuEUc4Kp2U4ZvsqUde1AKmqGnLNYH2r9Eujkyg",
  "key7": "23XQaeuTqKEksXjSqURSd3tq9T9p38eiAyXpxC3YzxomqSBc55z8LN8kdZAReRByGM24UoZJaWho9Lth89sqWWJz",
  "key8": "5UShoKcjHjoC6JEbrqWN3pMtGraDqXiLPJujSPajKviyCLkSipLZgKfGLqjURutEGQupZy75u1bFUzDz2X1Q3SmT",
  "key9": "2V7RBxsez4841BeQQJLpFt8XEHGQLTYzBkQGiqLs95rWgaUURoF7Wg92m1X3K2NWRMTda3FjyhRBnpxbUmEncf79",
  "key10": "345xPF8yZbxby53rYgdEdNZPNghXhJrqhoqbNGZsJAPUnjz8Yw8Y2imVcH1czhPMbZnBkCqQC1wJC2prf9rFc9zc",
  "key11": "2yB7Za9QMffJ27tLvukkgefZKbgomYzsGoH9Dhi6xXjTcWykwCX1dfRmUd6BSzbiUc3geVib8iqehpeTHRsryvmW",
  "key12": "3sB6bREAFJZGqpZiMsXyeRAYFUAJMziS6AwjRUEJGcjSGVmkxSSZqAKsc1JgnFdAdenxAV2dXJGcCSw5yquFXXvq",
  "key13": "4hdHiu8JbDLpRaGHXi5mRDY13Ft3yStJHFN4E2UW2FbjwRtxqyK2WSvg4EPmJQa5QZUEeJsjHRQWpkwo5GMtpUAM",
  "key14": "2PeP9HoAm2YUdytMsp2E3YrHiRaaSfVngKxGRsv3Jt7hb7s5kkzmhEqvriuWwWYKrhLf5mX2S4jpkcCk7qqYk5K6",
  "key15": "5ZnuVMG8N2gJ8QH97CJiG71yHBshB8h5RPup3rq79nMtuHaBjYxjWiAyNbfA7Zw5UkKB3gtTAevXMsHfqkcqU9nR",
  "key16": "4mA4v8nXJptrJUCZWETZ3p6BuAV8b1cbjZk5TAXFQjMdM3vAsNa2RrBmjdj6QeCQPX2thrNAH3QLs7LKBPpReUG6",
  "key17": "4CaYND3JPJcbxdpNBgW2RhQ3HCrEvCu2pDDoUGaaq1LjEjc4JppenLHHeGLwwaDmmuWzAYUVi7cx9cs8vJv9jBgK",
  "key18": "NZTdA6KHCczN5848kVxtnEaGc7YJVvcvNc5gKQMJeMbqaAKKBoCVzKo4gnrrXTxL8TFZBFJgakkS4W9PgwBXXuP",
  "key19": "29CD2y6DY5XKzuecqV8jy618NVoH7pbJ8xC8zA9rhWFsExFPPxo3wYPaQJzvjBB8onYT91dk2NMNp5TdsfTnBa5w",
  "key20": "4WLyHcRu2uK7dphjPgQb6fWWApEcBFoRBJ8RHUs5Rk5WS9N4gKQ4hHixHdSwEZyqc4eMwC1uJuVyjLPEc4LGzHre",
  "key21": "4vKJBKSZXry97br7wJn7fUvyWUQp2NaMBhyHj781d5yxvJhLH5TFdDP1whBbHaae86jdbyhks3tFFDPiVTWHAZzT",
  "key22": "2tzsKEf7ucEQSiz2xge1UG2wpuSaJrgHoUCVHs7GjLsazQ6KkrjZJz5YXBcCN7AvZ7SzWDB5iSdNrqsDdJY5sKM6",
  "key23": "4fYc54V9r9UYuaGA7DYwN81rpxFpSZGCJWYS9T7XMauLRAj8TUB6KGqkrFZVqefKf6TZ5o8467HyuMdhnuGYjEga",
  "key24": "KwXSUJQqz3d3PuE5nqhCYG9ctsvvGimP9LqY5ddjjErU6h6nMdhgWqkwiUF2mVGtAqvkvtEbsV1HPh1XyLEdsPp",
  "key25": "25HqoR4ArKsHtFSALjQWsxwoSc8Rb1pxZcCFRW72H1x1EL9kz4dHFh2sPTRm6KqsXEZrV127BUnyF55GYXu1vD3Q",
  "key26": "3se4Dnj1EAaSKhC3RZYT9mCt1kzRkp5gBLmyH2HFMmUP8qss2dR1SbamoLEXcREBGdnLFzFFjVNRojWDDsx1XprY",
  "key27": "5tcvQhDiaavVJuzQX9Z49TY6m8LMqCbF3ex4XNRUyns8JQJdvwthqt7kbRbAjXBoRjd6WW9vm1kfyJuY4GvXBbiJ",
  "key28": "2u3xTb3U1ydC9Wy71xLdHhi34C5FLufACf7iem7AjNW3RnCvX67h3z7jjaekwt7Cw16HadVHx116UVbRVzV5yUmm",
  "key29": "5kXThnFxWYp7Br2Vmj8s8BDkkLqu1obtwxL8Mwq3Q2RKYGcuMbGK4WqANVbea9NDKB3gUfgTwCGZaeuRefB2jKhr",
  "key30": "3KvQequY92jc5vJkJUcata1D2AFWJHpByRCC8Bb4HiR9dwT69QMmDMMEu1WP5Cgfw2cF2xdcbADupgDhddJZfXKd",
  "key31": "62oihbqLLHQzGDKTy2XxB8mEcMZVHH6veEkBoyoMGJaT5ny6gf61J7MgWgf7dhxC4sa5u6vanCkv54eLCZLF7Ggy",
  "key32": "2UNFmsgUeRr5ZFipsrYLhLPqec4swBzASYYn8krNL6CyqkcVG4bx9fcJGYbrGbeRwpZDL4oeJDspCCKgxy9RJB39",
  "key33": "4L2VxjAyKPnxKnHHkY8pStA7AU4sfgmbYkUY4Bgc515xZ5usEetVjqR3F2uBtcy7DaJPwXixJZMQAZ3GrTXdvDq2",
  "key34": "4LyzbzLYq6gH5mTnHfU815CQbiiQnjMQCziVymVXM267d9W4v9Ati9VtGu3Npp2uWyUd2YjRDVWy8j3HBLWa3ryM",
  "key35": "2oFymf2yx27m64UAuVEz3BMs4fN9AniAb6vGBpsXDSTmJkEfwPmW2GhS1U7CSz3erb6pnNjq9kTkNqcTFJgjTsws",
  "key36": "5vSQFPTFXUiTsczNsMeCAog68RdLmvEF6QuFdXrTNrTiKUgQQZ3VKKSsXJadssh9cL7qnecbb86yNExgPsZAGK6N",
  "key37": "5wN4kkybaQMxNJEVc7y1KsLcxzjbzUFBPjJkh4XEjrDaWkvFQKX1Lmjj3TsJmos5j256gYcScunj6hZXcZbSAupE",
  "key38": "x6R3kdzVjBxcRFD1njFZg3TKjvTX6ywhUaMn6NDehs1TpWrnu4qrv2yqXn2xYV18sjVNdtgNrzSRYd6UHuEBYm5",
  "key39": "2hv7DXsWC2Pn5Kk5h7newxbs6ERdAnySH59xEeAqQ189ZEHqs1i8yBhCffJRaViSgSWdZH7MAcs6mo1s3gkAkchH",
  "key40": "3f8SRrataZwzgQ9p2GrUezhz9YD1N3Ghos8Ch45CMxgx8pe36Nz9Q82ZZKYHqnMiLrB3eQ4jG9zjK6Y3zZX12ksY",
  "key41": "3zsRZLBEbMXojRMRpPN2VueFxvy9J6bzb9H6MsZVmiL4o8WBzFUpqj39WJWgZWeR6usAFWVUDgS5XhqJvf6MzsAq",
  "key42": "51ot3G9fWEaxZF7ZeaTazbqygqvXBiAdhZiqML1eQTDYauJbnTU9ahw6tCTm1KRess2CQPhDpvTdG57cyisCVX4h",
  "key43": "4aEyfhsUztZP35KPsh8o7dLkojEHK6GyJqxowJu8gtsn7eA2bjZpthx6BJAJRJ2VjLYJ4hRCNFMLa5osxsqZft3L",
  "key44": "5Lsfc5bK9cWGNWHSudahduZfXAe6ZjrGrvdctYyrdBrEfXN51LCasqt98nvfQ96paBPnZ8DDE5bBVxu54M42uQGk"
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
