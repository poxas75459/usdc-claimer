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
    "HEFqdMqGL52menHQsxWoKvb8JgAUQrf1CfNgw8cpP7QitYAEe38mvrtAU1rJgJGfjmx3E55iZHtmtH62PccwSuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24jUj99mtiAU6SfDXqsL5HnzhamFru9fW6mLZYqcnSPDQdTZ2qgKR3EgxeMx9UBfZhyasT3v4dMWD5hfyPGu3dZT",
  "key1": "KMZ6UhyewkYLFJ6grUd6WATmhrJxD5SiQfC2uMKmkVwNRk6EYbQ31SRJDqDsrj7qTCp3DqZFDaJhhVwm5UwTTmD",
  "key2": "5mCteARdByUma41CkkPgoA8yUzftGsmPFNz4WqN6CzFSreZdS2vgWneBPMauhguvAoFcLqxwKGfsBaFYpTwGugcZ",
  "key3": "5Fa7iKkuysvhQtmx4o3Ka8kdij4TmhhMiBEuP8zZcvR5fhBARcSX1aBYvFGimRzpWoreqAQMvNRGgyhhWAAb7a3k",
  "key4": "2udAadq5jnLAmeFUCjt2osagMCtN5F3t5vaKZRPao7vUi2LRq32JEnKJjtf6H3zeHtPbtobWrWP5h5FdGdPcXzDP",
  "key5": "4SEiY9nhoe1296DS1KojkdM9TWNRmiw118Nhzyj8F2LfTboj9KaPqnJhhGwLRvswhxoG16aii8u8SHqf2mamBnhx",
  "key6": "3AXsPerGuc7cJpGn1PGKwZjsqcu22PUZwjas4QdQGHHPzAVcDcj7w3LQyGvRy8Pks1Hcm1uwQzC6GrpCWpzWBieV",
  "key7": "4Fbb2UqwAt8UwZNU7s7SpEGdjUUSH1XUe82RJCwqsGATLCbjtBLbAj4s8zsxQ48RaiZGBcUGseXtVekMdrdY2zKM",
  "key8": "37iR74gWKa2eHfzX5kLEJjrLqrkaDcMKMyaT1up5f3GBdzMUTF6iStwuX1dMC4Fj6i2nzR2RcSMYdFqg5TKLVjfM",
  "key9": "2mbEPweeoL7CRFXERucayBptFgK2vstQpAKhPiJoAEhUDqP1gWCf1tMy6Yk6sscNvV57NaYHuZmp53yrMbdYDdhf",
  "key10": "kZwxWHVb18ps8DG5Gs2Q4uEZf9crJm6u7LDuboZ9NrH6c87CrYp9dVwbQTCvzjKZMBxnie8F1BQyVF8aen6phNM",
  "key11": "2FjPkpTcHLVT4ifiogiDcy9rVjwmCuwCoZTduDZGQY1boQ6bMPXn9jkGFYifnbYgxDptd6d1TimoejH65pHHuHL4",
  "key12": "4vHUNCXG5o763ywfnXbCH6RnQaYuFnXNm8WPyNTGN493PrmJp28YWks4UEwb5buoV5ofsvg5RiqnCURUW28ZL9gx",
  "key13": "5VzewFQxzjno5zphVA1kApQej9npyB4fxhZaScTAFAKg97fYBPosAb7Na9QDr7jAR4NtTn1VMPBbCWTsZBXzL3uY",
  "key14": "5T8cP1xP8ewTo8qTT4VEkYeUQZoc2TM399E1z6uoHdFSxyHnKEuCwqfWRZ9tQ9dzTUsRKsdciqiBfNfhdJPbNRUC",
  "key15": "43Q8PRrXAvhwm35wuUtWKpAyf9uSvne63KNVEY2WniV3yLTBfzv7TMogb5EFsHVgYXFM3MJgjo6AcWhuuVZTqu5K",
  "key16": "3m68dAYMSuat58KCZudvjeuNnTyJYTX6vsUgRh3urtos44dN44z2pbg6qAPL6NC7cGXBGHvX8Gv87L5bkFLAGVhJ",
  "key17": "2UhzWTiz9rvUis8Xec9DgSzh9Yu8eWrBk1Mj26LtvcVZc2YrDKQJie9wWefs6aAzH8W39mCiYLCsjzvZShbv5BRn",
  "key18": "33H7KPck8SWefhcZq6BfH7xkCWKXqfnnGFaiX3y1Gkvpf8cZB3Qm1xznyoJ2peRHUpRmCWQra1hjEMAkbVBmna4u",
  "key19": "2aqtfn4b8KPPMfP9DkHGVoPgbMvbdMpzeBZ73a2QGH4to7uYtSSmCbcBLUUHGGzeGdZpjE4spwgqzufvATMtkXb9",
  "key20": "2pEy71vBqsRDK37vv2Vh2reW5WvP7QWFzGpFboJzMANAboAHznctCKeHXpk6caq9qk45441MC41tRKvLxBAJBUWY",
  "key21": "4P5bUa6pubU4UJeM8KxGDpFR1YgVeeTADVrpCVQma3C46TX4eeTLBf3qiJMR5GD1rq4VwX7cT3gsgJ4wkzW14fSG",
  "key22": "23yoWR9ptxhTDrq7b1zW9gBEDKBjwgxB6Kw18aF9YtxSs4uipPQjos1TiwL4Fa2r49vysN57vV8KfDYoqZFUTiyr",
  "key23": "4CKyVN3rNQ2QmgGzqcJ7pySxNB98KDeQSLWBdkGT1WthmwiWCNH5QP8owvoUF65oDxGcCBMxzpJzMA8XLuVqkYX3",
  "key24": "22j8n65DRoPSRJT5hkWMX9gNkPL1bbAiLdwnEAJfQtTCEMozaokVJ2k7rqYb5KRhfupBSgecHZyL4rMS8AG4eiK6",
  "key25": "5r7wziUfjZXtXk1krqSqy2SzMtgRpk3Jmpn7Hbiq8QLRGUxY92q6qfTsYbuG18xsSXtMDFB2NnwvS73pjkRZ2hNk",
  "key26": "5KirmZKkTWJZawwijaQAufy7Z2hLMYffkJ2m3xyov8PDXiz6K8zMvUMa7xsKaa6YpmfCZsK85Sxv2Do7t4GXXp8Q",
  "key27": "2WXiC85z9Lo4QCrLmcrLdRf8efcAsKgMuHNP5CYPKKHt854RYxWTQXswyyFKNHLTvEbrAuiAE3ntpA13HpS6ymQd",
  "key28": "2mnGzasTMZkLC62jVXtpZAJBK96WfeqYhPL8fsWYMkvr6agphS5mzSEvhBMRYNEdMrxD1Atz5CZxL9z4ot5f3dS9",
  "key29": "2xAK6yPNTrJJekBntd2vu5NXYBVg3prL5q1rFuPc4mK53WKM53b2KB6tcVdSGjx1Vnsq7GrE8EJekCRBMZvf1A8q"
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
