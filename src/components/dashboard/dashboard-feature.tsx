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
    "5bq3jsp4Wr3AonPQb7qKr4rcAbVP9UZR1juMZoddzHSSzL2NTmCiDMLFK5Q7db8Ush6cMgjA1fX8ydJgBme5yY2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y5r2hbzbztFFTjJchWAvLiQCXwmojAXftRJGyoietdpEtKAkzwnjuS8fZBMog4eaGN5TDnY3xa2NiuReSpn2zGt",
  "key1": "5n81Lw6DW4Rnk9EeGr1C7ezv5eTmLQEf5tT56yHie9ZCNzxUJyVGGmYosoMGC4ZY2CH7PAf8tTzsiPdbw8ZNaH14",
  "key2": "2GSjjG1VxBzVXtLLDgaeYmjzoDiok4ZbL9qNQd4BBHycaBmSVnsLgDXhRnMovzWyuhTja8nEkfNK9doHCMCC43Mx",
  "key3": "3Q4EJWkYQM6ywntrksQba5iUcojDurwg38uWZGY4F73eSfPtBRzj8gKByZMSRtTy2ty4CrhenwgZo6tn8f32EeTQ",
  "key4": "2n8zoaCax8c1oskJ3dqNa8JKaSUJEX4Fv9RuNSQDMW1fT4Gn9seccMZqH7YfFKFicpnMUdYPdTpx2TgzCBBSvKQb",
  "key5": "4SUmttCiAEmACx3tzWVW2MxCfKcJFXUnTsgnTrad1R29awnaN6PAHkXdpMu2sbz1g2HBnxrpXpnR3hqyFJFfuzLF",
  "key6": "2f89HZSF75YM7F86PBQwcypS6L9TmRfHuW1R3ANCsLtceu3aufDdVW9qD47pK4Q7C5UtTivNXqUy1FeaUHe1e3fe",
  "key7": "YgsM19uATdnw8wKpinR3XWyRTkBCfRoj6fhBZufHDgv5jTxBEEe5cDpRu1k1Zu2gTWbeE1YoZqchrWTQEiG4dsr",
  "key8": "3wwU9XMMKBDQUrhLXo5AeBBAMf5WW2Lp2iwcynUxNeo6Nf8FnaaTpnWGodkbpi4KZKGjWGzLeTxzBdnYiF84Bvnw",
  "key9": "3U4JNjjchUAFSMAsNgXk9EnAwSD3uQMSpt4wfjVTyE9KTzXBY1uvy4DNxJN1GREZnXxiChXnNz9Yj5iGckc1pfBA",
  "key10": "63p7RJvCByWBsCRkALzeURauUGyEBbkQFCxFRGiFRpf3bKKe6H72VAzwyDEUiGmMEkL4y48QbYi5UF8eJVu5Famx",
  "key11": "P4eqQGxvWXx73oac4P12Bz4KXe7MtzCkjgHH9ZkV4EuTuJ9FgZF75NVgNpjcRk8oWHgfbZQJY5gvVkVR93C627M",
  "key12": "5HzgFT8ADZtMq2W1kXdHT9Pg1EfZDMaP4bMbjQPVyivXfk7zRWuR3dChoqVF5L9hsVpgGZJfvAfZRJ9kYYdM27Zr",
  "key13": "cQ99cRswxwiiMo9PCAx8oxcG2mJLUSEkP5vzLCkms35bB4PYQFsCJN7WL4iJqzWhN8ETVdhzQy1dq2FWeDSmLNx",
  "key14": "g4kGB5EXxHFN2NR1hbyUK79KVzs7VBX3dTZZN9c9VRxMUrVr8Y3zrS6t6e3tbTG6kYiYpHWcsi7DVcZVbeTLEQ7",
  "key15": "343T2hJ8i1PKZtRxftrLotkgJRrzwXjF1fTHv4xF9ApM6XQkYCGD6h7ez4YGu1Lx5nffWNpPyegWYfy1RVnrHM8b",
  "key16": "RoiHDsn4qsQFpwHXs5R6uAkXs7KpCBkiqf8Tye41o5RbhJajiTH7RtKei8ZNwEsnB6VPmTrZasocsZ3vX19z2uq",
  "key17": "5NdMCVL16X8YX55kG8fLHPKGZTokrSBhxkp9bLMqMmWBUk9eqBoME3DjEKmdtQFnubnsAFaKmM6CZpd6yg7EmTkC",
  "key18": "49LnCvEhBeXQbkvSRkAHrBCFV7MKL94XnH5nobUPn6QEZiLFJ9L2XXoXDAEuaaSv2NWNu1msckGMCG3zhwcmT3NJ",
  "key19": "3dcTzJbGu4xwt7tCYiMGLkcHhd2tCT4A8yUv3S7mG1n9besHYaY1Af8e9Eibx5nbr8fPGASNpvebiqPsYPpeRZCB",
  "key20": "3GhoGozqAL1ZzZwwsPETXgseY2XyqcuEKH8AZ923Zj3A4gD5afb4eDdwW8wd1Q4KGaFutAnm8nQWbS2kj4Dz1xHr",
  "key21": "63Ukk7kDSiAXvmAJaA9RK7Xum4yMUfkxA1gmFhGWEL8zioy4fhAt3sRcEiX8jYqGZNz4s78QjFQVbm151Xutt4uM",
  "key22": "juYjrim13kVSbPzLarQARCpmimCKPAtYrygsocvd7DTdXmQhx16DgeehPWsY7Y7B7P11BiaSZZNvtJrkoRbsjML",
  "key23": "4cebe3u5UjzumZcbdaqeL9H4ioK4iJ3aoJ98YnDp7LZs56j2wY8EozhP1dMXkiHVpahnpoXkQWyq9T4BVWjNXeW9",
  "key24": "4UBD4ARgUhM4VKJnJG8UdtrUinp9w6pozF1GcpvpmKt4RshbS5HgpsYtbu37K5DBfi4bZ2CsKSLo2C4DXwaqZcjN",
  "key25": "5TXZVVniuTuJ5dvKhvWRDyaf9yZjQuJr6euXHTHuRB5ENYdFZXuc8yksFf4rbZbKeYrC5VCQM1KtkKWvsBqqnCiQ",
  "key26": "3UkNkxMb9b56mWmLaiZDAfd9wbx3j7BhQjsjKmWUErqr7N4hM4e6bSVhmUdKqCsTYHF7uzLszjCqNgLVCbtJCbwh",
  "key27": "27eSjTH9pQ9ZsFuLcMJPMogJ7QvVpuayKYqEXX1RhKn9eQ8JNdNiknATWJQn1D28VUz9xXYB64HGazSkxYRW4bsu",
  "key28": "2wJ7NQdPmvvvkLG5fPvKKMETs7pxmti9rswWWqWQfsX31m24qStdURHoPXQSXqmkVQviQiNMtGSaeZLw3njtfn9d",
  "key29": "TVX4M6UKEEoZYHPVZofYKpKJLMK1raVf7VaJcYLzZPmw4tr3LK6tsL36x8ActAFYxeoEA3ufHo4v2qbtsqbdki4",
  "key30": "4H2kLik3SVJbfbDA653eSsQMcg7Supmidgx2goCNKiqLetVGbYdVdWRp8yPuR68ABjXgu4NZybtsBz12RyDsngXa",
  "key31": "3gCQZFDq3bwFJ44eqqtJaZcDULGt3de6XJYFeBDH9v4NuMA4KX7TYH7cPrWfrcKpMe6ctu8DjHPcTeMwWKNQbHBK",
  "key32": "5fNewLbGXXnRfKLYA91F6L9y1GVjfgRKUysv2nDHJwxcRzgxk5TZ12EBaZSnaBpc7WsibYy277ci83y2wHrmEgV1",
  "key33": "4cbSSfdb4bxwA3vew6ujLFQxLFPE14U8yAyum3F5h8mBhDjZDGSHMEK2K7Dsf3gGQ9vUMwYtJ38rz85Kdh6rYFcB",
  "key34": "rRmY9Hd2VAx3vBpB1YrpFY9W67xp7zu9ACb1xTRmisZdEhn4dMUZvGEAx45KxvpTMg1bXHVquFDBJnbCBU2i69j",
  "key35": "4dNv219q6EzdpLFxcZL1EDBH1Uua5yn5HVZ8TQ9NEJNNRnGFnAfLkakUf7sgY1GedpzFkZFL2V867KHAuLfVpVu2",
  "key36": "3tzyaFA5cN7fbJxEUR978jhUt1HVxwYrfu1Ro1mihAR2uMtQ49MYQq5gwhRDnPWS6uyooKgrML7utrrUTPexRiN7",
  "key37": "WuVpiMCWi1K1rdjTu3f4Q1wuShnx9bB6nSPgMtTQJVVvVDauhZNH1TqT9kkiYYh2uaek3DcytPieKLcp3jTouLc",
  "key38": "2KK8ceN5ajvoFg4Fz54y678iWsnCz1naJyaeMnYqufsA5e5r7bJt1cES2mhA4Xin4j919NWQGavhGcsW3c2D1aEf",
  "key39": "2LkEhvbYTzggnajZJZvjh4XLp17eqQV1RdmMhTCbtZVec2vNqmzuTZTcqyQTkPcgqGCUob87LtdGGpbQ7zXbzY8H",
  "key40": "3bmNeRDTVjZg4eUmt5qiddKSSauFWiiENL1DRjeXUz9EoCjWQN5Z5gkzSvNwZZTKZZnTnMLdW3e5igMNVTHrsrXN",
  "key41": "4YeSMYWQbHtP9kALp4DK1T8fHH8LD4qX22CCYKu4VAvk5ChdEAtwbnFZvPe4mZrQ9wvr1HpCoctnUy7pfd5975wf"
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
