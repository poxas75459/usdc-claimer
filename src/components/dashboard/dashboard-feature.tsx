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
    "67KnZkHzmr11WrmBwEucwxfEb12mgS2d7GaXoZKqdhBQf3mdfwPRERoMHZB178SbeA5Pa5YyjyxRrv9aKEN8Sns2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rtPxyLu12TbfMjyVHxtpDgsFReWvrBFkDH24Qkqwu4mMNkwY2vmrw6HZpxT1udHAQHmiTy95geyjFmm8Cz87cgF",
  "key1": "3E3wrtdeQWApXa8QPJLP5GHBKU4ic1sFwhunYzdSbZFPxcb7MsMTWxM7RGhEzc9ywSRx8rjcAYtGs3NiNhXX8kf5",
  "key2": "5BqZFbfJMSuim34BF4ycXNx96xtE9SkJpXysCiSuQ64jMWbpGRge2WsAvSSFVEjhEsQKxF49Mi36jYwiNoeZMRN8",
  "key3": "3HPWVHJsBF362c3kuYfm8jrR8zzF4mbLXcfTTwVqF9EL5L6iaLqiDJggndei3qsFbofpkQBuD6B5j2ds2C5JXvSp",
  "key4": "3RgLNzE4hsrP79NyyHdshaF9gWsbLntPJUvjTLNJC5uec5iHLuaBRymH75BhzxSASEXxRxSWDngzarMBmpRciFEZ",
  "key5": "3i4Pf77g14jrzrM8nbRAszpKw16bhR1RbWpHvy8rrUzSpouLKLLfXr2jroG5wkF64kjgT7HGWMw2L7ynKaKr9h1K",
  "key6": "3nVqkj4bHbXhsfzgHmLVAkgtKdnL5W2BDhBga2E2pjLSvaJ8dP9EDjSmAPSVEyeKKV3ivMhSZsfuhsTFp362Qyi6",
  "key7": "3BWWEAowj5MrnQ9dWJhp9jb8wFVTz9Y9PMquQZM3KN1otQwyeGovxZtenDyqyFqUFAbgq4iiWcKsYbzW5Sp8JmVe",
  "key8": "5jG9chVAkUPixhM6dAQxaVjWbCdwtji46xGqTKZ7kFKm8tdKe78JaPbNM97LpZrdqpXcu1Lr2f9iBtCJ2KMo9rnY",
  "key9": "MyH2Dq3KqTDCw7GbpkgYzGN75NcKAQwpwPiTXqRp83QryPgCN5t5nKH3uEv4VxNxCT42dcahZ2wsxWmsdGHikmh",
  "key10": "4HLnP1hRmLJucqf1yq2wZven4gdZsVFoF3BtuhrkCgF5C9zRMMb3foGZ2WXdnQguQEQNY1Li1GiLkdRGyt6TQdHw",
  "key11": "3qYhJpQgL8wzeRa2B4LDTU5cJYZeCSs6fZ6FieW4TW7iFAk2YrzJtszupz3dWHV6QsLXbmGsgT3i8tbDTCWuCzK4",
  "key12": "2MSefFvvQHmW8eyHQVQexpNZ6VfsZbAkT6ZDqvNWdnMVgPnacfioKL7fUM8mKNHoSEw6XJWTcKrH1PV5qK2gdyh8",
  "key13": "551HBdZMcRjpzPQ5J7573KFyht8aGxyBUomdn3o5J9z3zDzAZoHLdzCaV3PpeNshF4qyP4yt4N2CM3GHQf5wa82Y",
  "key14": "3Wm9jwLyvSafZNX7WVecdiLBJ7GWZyKHnnB4Nr6RQano4XM3rceysyJxu5eadZuVJuAxzieXg76Rax7Xfmp7mLxg",
  "key15": "2tPcAXCm9oQJjhvHW735wFyJBY3FKSjs1Ugm69wibVc4sK98zS5u1mskttGW3nkRK5hng6J3dLdo3Z6oievFTAeZ",
  "key16": "5xSwQct5Kd58PBiEUH9qX5Uyx8jW1W4XyRcKq4kCvwBogJ9aoKmRNAsKyCmKa2uDUHkxM74aqf79APEgV7ZHbWM5",
  "key17": "4VUrxRi94GKxk5TLoAY4phVpyh3qjePdLYHN3pq11eMq3L1RXZFFZsUaMe1eJJ6tf6DdPBts199TKVSGf2cJ8AiZ",
  "key18": "4haRQYwpYpGr5HLNMABfyr6fhrA1z8niLePtFV1GtbbLz4MQ2N2GX4B4Fg1jqFqwUFQ1DntABQPe2gVnRL1q1UuX",
  "key19": "2yBLdgKPPmuLK1bdXKnNtMPhpgetZBqd2jh4fuHXre8L41TCDrEH7mcR6xRJvFhn6v1Yrwwp4hNhhS2XgHf5Nhju",
  "key20": "5cXnignySnKLrbjZZ99ip5bTdN3gNG5CUv7aGEWpBZZ9XaMP3u4Qgg3jqnjHk6bsMA7LnRMSCbSgjZir8h3mM6BH",
  "key21": "3xEqRRQvspbeWjBD62XknrPkMFixQdKmXBovGrj9Dvnj2UCSQTzsZdMm68vzHBCZS8e8fefQKPobTHuZeesSuaHW",
  "key22": "ufiA3qMCMt5xiBxrirY2qiD1fbD9FR8Lxf9Wr19zRJGAnLoyGPUSgy5rfgz8isvgpjiVrVaEApVmMQV9reSR5Y1",
  "key23": "2QmUP82TpX14wTL3E3NU9Mdt266tkSmbW3M61UGZFoBrntpnwjmy5TAkBYyoYjocimZXc4hXjjMfdR3V2MUupddB",
  "key24": "2dEi5yonBQWdB8ye16v4XshaRwGtGz7tZwReAdQx1v2ZzaXH8EYjLxauAkChhQsVEHarbD2gAGjZnD6dKWkbrFZY",
  "key25": "3B55ixkNyhUwUFWhveLGePsbuidQfm6mJqLd6r8Qixm92pvxzxGUN5D7h95751X5fUKGpGZnD5Y2yBMZ1tRQovsd",
  "key26": "4QwrUoMYzmi9jPfftUgqfDifSthfUHC8CrEgGxzfVrPch4XU4FSMkw1RTgVJ1C3LPctZBdh3ZnTfjdNuY7gXAXZ6",
  "key27": "4PtiDEwq3rsokDv1Ljn8BCUsKxNfULpFF4irkafe8GiZPv9DQzQb4jD9wM51FaF6L5Mf1XVa3yugzRRt2jZQtUj7",
  "key28": "46kTrehr1hDHVhEv3dsMwGpRdD9mwPT3JNEzkciTzN7wR68MmJWUrfhwKQX98BVE5LtCnZrXbCJThqpyoDx8BKwB",
  "key29": "sDXxktRJMpzXNtTQT7dtcChs3KMQp5wvpt2qZKn6s8XgrDamDfN9nesN4KPNytG6DVubi9n4cjs2k7H7ysRUN2Z",
  "key30": "5UCtFPVhK9R3vYuAnuK9wG6QFeQaUSTfgRWVr4KjGtuMbGYDMFR6RuDGENeYAdT9U4zTTfS8o529ZTuNpwQ2MaYr",
  "key31": "5r9hVmAe6trXWTkbxB5LK77ygQDY53qagV6ZLWBmcmRN7xiqRtCmwV1JEAd8UiwFx9R3haS1wMzFnZN1KugFH58U",
  "key32": "2Eicm7iy7dNzmaF2QiFW4zqXvT6EybqyfQaBoFnK9xFrTGvo56sJYpEXQp3a1Cfpk7Jr6EoxEr8Jzo9MvZHcdxYA",
  "key33": "CJY6exfJ32Z7EKwT459giGtAePsuqVnuQp6ZyAxMBzd14GF6SaJRuMoApmBVBY593dWgPyRtULoEbPiJn8zd6r4",
  "key34": "gwRtYmJSQ4Pq66pXnvP4hFGJozC5FvQgv2QhecopPm1RgH8iaNtX9r95aaxWcAKVZVjJtf8XotU6uEGCfTSP1Uq",
  "key35": "1qWLQqJbLwcpJTwyyiNsGyYxJgNx33BzE7xehVJDGVe5RPQSi7edwTfEvgzi4sdNwmSMRyabhxCLtf4sLBaPcQC",
  "key36": "DCDruVVsicvkUhHkAwxQu1zfSfhFxTdAR4kBJygGqknN8Hj2Fb8dC7rR3B48kJhX95cdsbL63B2vo1UzT8jFLLH",
  "key37": "E9VyWcP8eXAhjoeiindFZYGJMJBN3BwKPjtVh23mRzbaD4kLFGZEstozaNgNvrrHZo9phBQZ78Ja1xQ3H7i64dE",
  "key38": "7D15p5RLLFv6GjcBHiARffdoehZrEKYiJsc7PTT9p4iRnXbke9TnmgNzfeGzQyEbEtfpMYUAGTPr9heFcVJz5Tv",
  "key39": "25c9FEbGiVaBWqR1bHBNgMwakzuCk9VF75gKYjiD7TvcETT8VmabUbDiKdYPGcpNrkS1KYVie6pTnbD2SKVXR2pH",
  "key40": "5HD3Wze3i7Eywid74hiHFeDKjzSuHFoRGEyYqsVGzMjvxTyZK8fVmAS52hPjd1Ygmc1xVZ1LfXso15NK2jYs7soL",
  "key41": "zpDu3XZQLZiwEEFM4oTxCMEZNipfyfYvBQCDws1TMaABvTT2a8PdGAPKtMnFeCLD5T47PUnUQusYfb2DXQqC6HW"
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
