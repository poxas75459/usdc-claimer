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
    "3eL9h9PdJeWYtEKyZqVHdVYVikbaGCqgy88k9AxYneVceFbQFn2RBFR88GqKhtmDwHF4TjFCKETmieFKJmeyMDn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gJ7NzGy2Vf6AdMVRLD3eDLZ7FQJQTg1PiSxLJm9ii9AHmYGkoCJyejDMEfEuwzsgJVGL7fv3cPCYb6x2gqnoGNd",
  "key1": "2r5qWpoh3Gb1sbQ3jpukkDgDHaphvCNUSNLL8dnvx6MY5bfKWKvYQwWwJz3odUrm84niBHk2hTSBzqmUrkKmnic2",
  "key2": "5enDFpFEods1HC2YkYK4FsbUo21pe6hS7m44FJuYNHL7Su1y6rM5QVPLxB9HDPQnVbVN2HVXCN87jB2FeAznK5UG",
  "key3": "5k4W8ktqAjGuGa9MGmxWwJe6W2b5QQzuWSxZRBmvWnd2hzQRGLDodHQyZZn4EFkfD9CBAEwbGskcys7x7hasxJYK",
  "key4": "J8o9cYwonfyS53Y3uJiqgkBvyc5Z6DXnJvnTNaWz44DJXsCj9XfKN8d1G2jdfMQXPhN76gf93FWXGnje7tN32Fv",
  "key5": "4LSiRjTT3BNr7YQ6aVwEhiLkEgaVzBxfHH6BqAuGcoa4NanD6KVFTyCNF1MdNFnqFdQ7Z34zaVVvg7oKbUoZEcmR",
  "key6": "4fNdD9mHMEqwEBNuKCGBq6Z9tEuSxjxfMf85MiCn4a6GnNa1vZqDiGpa959hzRGBfjziqXvtgn95G6CjGUwfWNdc",
  "key7": "5SPpqSuxZkhUFQ4jCYW9cz8RmZMRnR953Cysqxidvct1DLEQaXHbygvKXw8GUjEp2cvdnXZVkPVWbY2qFAeVHZfD",
  "key8": "46o2txLrBeYWYKcTf8bLBREfcoY32UkEn6bGPaNyLw8rcuJLZj1o3sMd8SFP9MSN2aBnQtNLmm7z4Wvy8fK7ACWm",
  "key9": "47UBQXot7AencoGSy3EjKNZn9Ja1tS79sBt1Prihotc3f45ina4wZsZz3ff2iPRpzENafdQsXpmvPNuAdVTyej7C",
  "key10": "S2DEEwXxYtsaXXGGkDHrN915sJExqANewGMVqXPNHwodgyH8hELqHPBLF8sYkVvjyR6wLDJK3bAbuutsGnoaMCU",
  "key11": "5wz1VMgjRhettFyzbnnmcXAg1dt7gpV3thxdKH9GqpK8f2s4gjf3PQgSh1myHiBk1fuYgREpkcteMcMqN1aHGcgE",
  "key12": "8Xt8yY1DDCdCqCTf1Bc7DqWbdxaWeXgjCMq51DTABQC45SMMjuC1m99s3fLCJ2Dti63Lvx4DipBZLTnqh9rUnsQ",
  "key13": "37aNSpxKi1mNjfK8wTcuTSzCQYZWacw1X4PvsXHdUA9sF9foHaA6NUck1q9G8PScKcPLzeM88eFf2fobEC2euwnK",
  "key14": "3cVvcXb8mN1eWTfbS5zxqYLGnun4ppdVhZ3V8FP6hnexNHS9WrqMWskakooCEQurj3q1ukam4d9U1apco7mLXx1S",
  "key15": "3s8uhoKuUhc7rzahvj9iuzqMZM9zVvPH1VFsvwVs3sTcJDWwbEoRHybB3iyukDUjQhbBUysXRyJiMg7AGMP1LGSp",
  "key16": "5MRNRdiGC3DTVoDqUENFeQvbdFScAp6YPd7Jcn9pffxDbCYUGEXJditpt8NDRNAXw8jD3o9KgL8eUF4kkAsv4mE1",
  "key17": "35Y15YcpW1eMw8PEJLiwoG8uHBMU8xDprxUAJN1Q62tMbW3myVUjqcNyWjwdDZGAhPqCSGBQqEN2mLKzP9vpA6ya",
  "key18": "4ab7XxozYR6SbEJx8JAhjs23QiJuWgXva3Bywsexa1AfsB5Cq54cRjhgrrDu8TubaierFFD1isG8z9MzYvtZfiS",
  "key19": "2vfbbazaA1kHNNKVzww4P4fzu3bTJBFnDS5cqHmHrZ7smwSmAWm7cfsLjksKBRVJWXvhXW6SAjAt5q9qAN1f3168",
  "key20": "2hQdqt2riGLpJYXu58vfTCdyHsFAn6p9jP1StsUvSuKcJhGCKqMFy51CEwp59G6oprSwFkaZ542jf3v7QPWTyDsw",
  "key21": "5GFG2QSSUWhhz1LbofRJjtKsxxaEKmbutRZFwJ2g1A99aKUEMyxyty3maEYBk9fCZyR8YLmqW99Vz7GYi69vjVPy",
  "key22": "28hnMo1hJigE8TYzmYrVLCMVYvBMYgCS4nYrFFW8SFQS8ttBG8Lp1t6a84rESyxbDarFCW1Ggsgd9yjRqd8V1oeY",
  "key23": "2omKGgD4mMhZ8QJC7AFGFvQ1MVjChygH5fzbwadT2YNmhwn6rN4w57w6PFbypFHcX11kvFJY3ejHesp8LNrCy6Jj",
  "key24": "5eNfLmTiLhhVbPtu8rWbhEez1uVTMSp4gU9bsTsLHxYv1A89r29RxAKaAr3j155FcLdW4ZD5rGKkch9X7WbEWqFU",
  "key25": "5Tm7cgQw85nFXvHqb8ugD2eixTVt1jW4SRMzMWpMACXq42pU8Jm3dTTWsvUAF8qd6X4nfxibywPFYfYTJ636fgQ4",
  "key26": "3QSRpgMhgiXJT5gDDAZtVP2wYrFF7KvDX3KTpULyyXeX6zKRbXDJnadX2VEyotBHrUeRMinpcLsNjQKKA7ohXKC3",
  "key27": "5pwutaonpCmSq69tGVorv4HinoLk6HPguiQtWMwW6SejoejUw5qrqhjVAtAJ94LiubE4ZQVjgJM5ZQbA2D4vPsbS",
  "key28": "2eYpWM8fFAhJTBQiEdZ2xAYcdEP4coXWBEM6EniEKBWMBH6y8W73ieGPT4x5TvWKWZ2v1FwPRLVPAcYYxQo8NDpt",
  "key29": "2kPLH4WWeDjQkq5TofvEt6bcyGARQNduP9s79saH5s4b1pS8SvDSfiekaULAADuM9zDA4KXg8KuhxhCzC8skcT7",
  "key30": "623Yo5T9pFRNK7WrbNwkRLBqh6Gkh6XV32T5e6cevaAZQrmPgHxYTVCdxZxdH7xMDEveV1aDzaYRjPuHuyM1DQJY",
  "key31": "zdBHR5yirDTW6RkMWS6W3kyFqz1gW6Cqpv6FykVKU3NT9Un1JMCqfxLk8GZ4zmi5VLPm1wmVodM2eYEtvowmhqb",
  "key32": "K4mspa9YP7TDxBs6YH6Cg4mg5JXBfuxyVq3j1Z7mPhNFx1E9LjAeBEvo7Wh5yPSoK5yBKd1ujBazJdzkLdSV2KF",
  "key33": "5V5q7SRXzyU43AgwugLMJDkb4tWyW5DkAtV354AbBq2mZjHgJ8vGpB5WAyai77YbmGYNmbwRyyjg3go5aWmro1v",
  "key34": "4Dd3fgs9fWhutdQRqzGrndnxACKeZFtLpGX1LtSoe8xhxjT4ms1JGQDwt6MPbWiJpQUqVvoWnZHPxw5hgRdMJArd",
  "key35": "eC7n19FNfjkgv2UQwcvaUxst4xJo1YMyx3W3dk4VHorHeLwdCibbUtHneCj9qtdDjr5znX53xSBPitHuUcKQnDD",
  "key36": "36871hZf171GzLyVsM1AReGWpLWv3KQd3M1HKgbsd3bP9ZC25U79NgAQoDf9P6mWpVqtTvfocaCoyzyLCMw68ihL",
  "key37": "3DzcL2Yyxgq3672zca9sSDFNRQT1BnsPSNQqMauiYwwYteYp7dnndA2L6BajP8BEir5ERhjyd6HJ6wYh2EKB9QFi",
  "key38": "62UYRFzwDfrFyDz9h1jrkxLdzfvzJDznzTd8javCrMbB67LQprBroNiDLDG7wa64iEwbQHaLFntE9y9Nx7UraJzD",
  "key39": "3o45EMubHvBhSXjrN4nxoqTwoeDJTr6LWWA7z9kUAksUvVgkA7ASFWaZm9BDz67bbWx3SiPnFSo3pHqqsBa8em7c"
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
