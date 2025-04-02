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
    "5WwkGyro9QhHeAWHrxJz4q9yYLfWEWib8fhadEmkG8jZGdaHYSoh6KVaDsZeu6SoyYyTcywqQ2p4hUsxuXXaoHLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZjTyuhoA7Y4LkSw8ioMmvr62zZzywGfuYQGQky2WDipkTRnYAYmPHp88PUp9dpAEsBaHE12WTUgAxGAdStV5qT8",
  "key1": "4E4R4zJXRz4njzGnjZY12LdPnynt5fGKqaLfQV5CTinrEfVkpJNRmGBFX7k8tfixc1BhifKHciuNGnbZh8Y2MWm1",
  "key2": "2nrDHPeLGkfNxqDMSUKUs5bEDVfiDorqTbYbG65cgeXKd45az3JwJffhXWL8kCpqKco43FbyKZK71jkpEYfejVqd",
  "key3": "5fcpZuwQTmc7wx7S4Q7W2aQrnKMsg453F18W38v4ihu558LvRPfvGHKH2otqyDLRTfbuxkb7YMKP15Kj2AM4b5XV",
  "key4": "4jHfe5HdDEw1VX7hZEfjAQ6ZxW12vcK1orBnhNjeJh1Hpc42gGp9LK13dz7ApiqjAmjnoGh3yZBXQ94HTPRow5G3",
  "key5": "25weDPB1DDWDWjkrxKi4odRYFbazakeZRzkd6bB8Ljp2GDE3gQweKYPkSuGtdgzBRkpfFH2LfKeWf9r6CWgc2w1n",
  "key6": "5URkp2MzHo1DN2sQorJK74SeAz6Mo6UevmYqz6cCUzmqtLf6qmiSeU8SQ3tgKp8y6Wophp7CQNH27x2zsaKiozYH",
  "key7": "kz9wdDbKGg2qxjkmDdRoCYpjm4PR7ie4WPe4DXocrmXeNXGi1wpZLMWyQyeFVJ7g2DS4UfnamVbdrWMuXHqUvAE",
  "key8": "LHu2MpT4Apv2pd2ECrCp2dcyPtizFJXLXEV13aRUgQGoZ6N6Axu8n1amoSKcYDmzK4EUhLHsfDyzPnjDkeEZzLN",
  "key9": "4ugzC2jVJjXYFawKqMkSbR1oqq6zuD5kmFe69xRQ3zrQKQERcv2HDVBseu3WtAWRZHPbgXMddugxKoxVvpqQen9Z",
  "key10": "4w32EJ3jEN3qP7riYCcDzvuS3NDQZ6gkCkaXYyXu9TEV7C5ugYBbiXoNqwx6CBvMYjdzwkkfXRxd8N99oyYff9Q5",
  "key11": "2oMhUTpymcxEnvWoFJVTtYYKDRDJ8yUNBSHM2EuDMHkxVuAoYetpCK2ZFKdZqSPd5iZzWUonjxBJdyGpo2XJzQkX",
  "key12": "2ZVoku9VpC2VPa7BX4XtN3T7MhwjGKXv7NzjkceFPb2r8Z8xXTSYiq9G5AqUnWcUufFaAptdQyVNQbN6WVx8mfv7",
  "key13": "5cGxJz4LVnDzDNwDtrH6Q4LBAdGJMenxgyb8akMpiAGThqmTWbyF774uyTpXXKdxBw64kVjDjegL3miVYHvvRJZj",
  "key14": "4j6xu9c7BVYvoj69hsqw2Gxwg9z598kUv3CeLEL48iarDX66ts4KyZ2JnYgTySnbji94nGtH9AoBGvTY55TAXNHi",
  "key15": "3xDTvQsnt3eHVSTqbY6QW8DDRfuYdskW5tbYfQgKB6C6CuRT4i9ZjkUuE2ygnC9irfB9mTmADoaNYAXAQRc5JKh2",
  "key16": "32unTdJXddncouefLydUtXos144dfKaJ5mZ98qhPLHtn83obpBc1H1nxEM6wN1rcZT5yN5a2rrgLQt2Yb7rD5DqH",
  "key17": "5SaYPb4jsLuMwP8RQRA6DoH2qWoY7wRAo13aiPQ3FiFTTkoyKsuvvGuDpwtjAQjicKUADn8zdgmm1u51EoYHLzBL",
  "key18": "2ke21mCd6garpFBsjeHiyg2snrU3nMJhpNUiVm8qFQpsCdDKC1DUt3toZZYDrKMHxj4WhviyTS5kFmMa3jm8FPfN",
  "key19": "2qSJgaQw5Tzatd7EEnRi1dWUuJCKrYbCYpy6XZfmuEciXHUVCcb1BqoArnZfvLfgMnjdp6L8Zwkz1CC34Fn5uFdc",
  "key20": "4CY4d1xkNfBPAw8yErwkfH4ZfDMq8nGS482NKcnD8rhAGpW7DgV4sjvhXcmNqyKdweiCnaGHMZcXvDxktM76J4ip",
  "key21": "4AZFKuvXtzP4EmktV5Covgpg6dYmrsqTnUdrFPzf8T9cYs7CeLRXxchdVWRjSDoAKt6RoC4FGUxhg5p32RsP9vMH",
  "key22": "5noNuT2BMzZqTNrVpYTromYoqeaoVzYLtSicxBhFw89QEkUmCePHPcd8u1swLpz6sGo4WHoG6xUE9zVtCnWDZ3Pa",
  "key23": "4J5i5UUmJToXERRwP6z5VJxNELNpVVUfZbBv3ZZ4a2rvRNr4j5Q5E6KUhYXgMuRDDYChc7CfGDvRER46WQqhZ7Hs",
  "key24": "4Aw621bBdQRRgrPZKGLBxqUEvEprz5m3mtCzF9C3QtsSbHaWemGtRrSYeDt5tr3errnd4Z1ysF3EcQwTYzfhm2tu",
  "key25": "3hM2wVAu26MqQyLkgyRDcoQ6haNFUyDEQhghtXZJRif5TZwHXCWjwkedgzhJXDpo1rc4hwrPWwg11gGebAr8B8KH",
  "key26": "2er9ZwLJPd9sCJqGzxd8JKVe1bChUF63ts2dzsBDgwDX6Qr2qAcZJzjyrWhkDLcA1RtqFwnoULYzzn1hxcdTPNNT",
  "key27": "4dZQ1kHgEqmUcnB6RtUsbEB1okasC1oW7uXufxk4P3JmY3okn6xZdKLcx9JMMceeSNDnrAFRKxxsK8UKegmhmFWj",
  "key28": "5VrkxyVPBXVr6DDfDud5y3NtEsoFkwrqAvkU8tqmd2cEeJcBSfEFbwUTHfUG6QKU9ETT8ys8DsdFsp7CWZ2oHuaw",
  "key29": "n49KPWNXWrNH3nKrq8u174MDpmNXAZXMeX8XZuST66rRytymeDo6Q91qsBsCuKvyHNgXhC8133h4ADW8RVjWDNJ",
  "key30": "7HZ2oFxd3D5WtNWzwei32tSc3UdJ9hxyAz2H6h1SFSyAb6wUxqcYzCbnQ4NpiPVzbBqotwZ6i4DqHsSTbHyLtsM",
  "key31": "2xLcL3qoAQbjduPtb2XtGH2uoRwtBEiv23Pf8Da8otMKUTK6dEAqmQzcAjYhxfFoHTT3uGRnFRcVvAEmxohmZcTK",
  "key32": "3BToACSKUJuc6nZpqVfRMQaqqmyjez75od4n4X86YJSJzKLURQrD5EgCM6Ney5NzevgVmuDGFiTnkSPUjH4S6aFv",
  "key33": "29PQj4zCeAZG96BG23vJYbBSz6gtcYmqwcTRjqN7XHQqYh2oj9wRqJf3JCfsA6UGxve5ajQAosMW7otijMN5VmYY",
  "key34": "N2R18VkYgwijsXhfUdGmcuA8ZurBFxahMkd6vnnNK5e1V68KWW933t9Cnxvkne53uHRGgSENo4DPWFVsNy872Xb",
  "key35": "qXqHiGDHqdDLRAYPhSFLYvJB84jp9yFw9EsJDehyWUfv35TPZMpuQHiDs2YF8gqNeQ9pFWf152Q8MXcRLwsopK5",
  "key36": "64bwP1dqMUi17XqQKGKTMdBr8VraeubmG3x4f1EAZrMvenn7eULatLjbiSHdvDz6eKbqYK37AUz12bzTa59UpmbG",
  "key37": "3PB4m6GfdK4emBT69jDrdGdr2aB9ZJUXfLggFRxac9zzwebWfq6XYPPb2dRwd9aYnCvFMyHTgLafdDxKLwiiKGHy",
  "key38": "2XBfmSAD4bg8zDcvXkn9AQvzMS7FrAe9AJLLrVHG7c9gWvicejQzoGimbhZ8sxQEq9MumiXKBFJyp5yV3eYugf98",
  "key39": "3pXeJQNwZ5hucY8mWc2c87bY6gkGFCYwUTwuYgWZo3JgNGZHcgmtNjVRcgX7525MicMkRkaENamzcH3LbmLfzLyD",
  "key40": "4qBcCvnBLsfPT6VUvSfTKETAan53Y6NAQS2b3vapu6ZvhyRDenZBjfhimBGBXYkA65TQyJDc4TPDKFJPETPbkyod",
  "key41": "4EQCijfqu8MUKabTxzvAijS6BcktKjkXpx4MCtXVJgJtZa3imEpv6fKsFMH9PYPo2WxwgoqWPCX2SPVFGhjUpZ4d",
  "key42": "z4r3TwBXwGsBAqCWdbZ7t4fqEsi6tbS9QzpSrFUuy7FVkQNW8g5PaUmqQSsYAkJko1NVec3seK6B3An1xNiR4Pk",
  "key43": "3yEw1xgr83wzR6GKU39n2EcFuFtffYAsViCfWMGatb3pYopQhmAj9p21vgnakT21CJyp3S6G3RNpuBwdX2fWEaVN",
  "key44": "5H6L18saGedAaBcZNBauX2nFM4hzgLakRZyEDAUaDeEM5oSW9fRHAaYkQiPDyDBkt6NvB3ny7CHV1ToHX16FrTkm",
  "key45": "3p1RrqkkyozHEkUmtqi83GqYvd76wxNLkvFENeNePUrRqBm1xRgHUTirAFYKwZKiKUZ7xvoDAT63FKm4w1KUuVGg",
  "key46": "2V3tBLXMUj5z9FhVEPpLUCFXpbh5XxU1La1zBuPxUXKvxXjHkvkyuZceLfSDhavPEbSoEYJwkZCAnvgd8FekScwk"
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
