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
    "2SWjVVxQHqsUKiQPZYfWogKGtYzwZrXnJJXNoo81NHaP9qXWXqYKWD2gF8dm1fXeGCZVv8KpPj9vbLjbRkGgmH2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bah2Mm6N8GQhj3AdiCB4qkZ3wYMANxdUu35bmmU1d9ZP4uf2rqePPQowuNvXAwaunVT1FeRxcQ3GsuNJKt8h7x4",
  "key1": "3XqakByCBfBiRGHqR8kroLyNTiJ9ZuxZy5ZateEsP6EwhhajsnW5de25cFwFeQFz2iRPQDLE8k1NhtZaJ5tn17jt",
  "key2": "4TGGiQobkkizwtfo9ZsHn39ath1RRaxhRLePqyPpmybgs2NykCUSda2KYe1B28UDmM6EHePjpsDcFKeJgq3A7tZW",
  "key3": "2sV86q8SgwBV3UWriX3QTCK5LUmMpTQnq5g3RRpd1mpfb8R7FrKJiyDX74zZrxyhVkCtMDkiu1d9C5LcVSGT2fQb",
  "key4": "3kWBaXVF1uKDSSf6vvn9phQ59ZvmEYHwQN8w9cUrfLGgctL3ZZSaqh7vue6yDb9Tmp2kvj2hZpGq5bDTCcahVKJ2",
  "key5": "3dcPfUG372WH1sf1KdanfCegVsxqGWKydNUYyupcscUHueZSuwYtWGWqGpL2FVE6FKaB9VSqKKmGMDvx8cCjkrZb",
  "key6": "2NWz5fLJ3hQCn38ti1BV4QMNsHnGpoK1JJjnoM7WYYaGgVfQa7fkVZYPst3oon88MoaP9gTQUKxXZmMT8rvhen1f",
  "key7": "4TU7WaezqeoDuoRMCanLQnGjxrAb7HPh4xds1mytQ8qDTxSihYobNcmhGuX97xmRku4hxp1r8hazddQ9tPXHEa8p",
  "key8": "2c2B6fuHvUC8ZqdLds1xLNQNFKq6HRu8cRw5WtYnMaRZzZSv1UkkfDDa2EYBp6BZzhSPX5Rys12HVgPK1WreYcv5",
  "key9": "2MzHyGyhR9PsgrGYrdWa9FNAUVN7y3Vk2zgWnhxiHV3tSArhnDx84hQqB1Q4kDQJdbbTXg6FoMkkMY6CanYMnULU",
  "key10": "32Ck2jr2p5BvtWqD791SNyC9KoqDgcz34hf65JzLVuvWBQTqnRCvSiX6q6F6ovnkU1FqFJdiQRj9QpSKkZwRPReJ",
  "key11": "4LzdHGAZ3JY5c4Mbv41xcLSdc3VsDjHszco3hoK8uLzZx6pVQZHravPjZNAeHZ9SzR9zu1vpx6o8RVAZzC9PxGYH",
  "key12": "22ptymXz58RdKjTHC1b1dix3AGPgnnNKQ6tAajyemNctvxxWCv8c3b3wcfBsGChBacJA7hVdqdBfGRU8JmqhvKGU",
  "key13": "65ZkUkZpBDPnwbrqZP3iqJkTqXoZ1CJuGBkX14xVEWNasRAqow3uC8Xu5X3omVXe3TnpJWKpEcecZy8nahQAhKJA",
  "key14": "GBP6JV48RUrQ2i8KvnqJT8H7xqotJY696qiU1HuHZiNttGCNMQ8i6uwi2cBn6L9ZqgaZwjQzZm9TgUqbrxVLn1C",
  "key15": "JQ4L4ky6biMPXqvHXy4DJwzpiXKZhTLcVJNPNEzTPABNgKsXMa7Gy3BdvSkSh8GaPQhywaiMJd3qwA41dyoqPys",
  "key16": "3fjZZM4RNfkW75ZvpKZF18RuU14tCxnSzS6FKrCNbmQz5euuVqduwTWDejTWVcWRyWzpzwoYF9Z4Yyh8PBn3j5sg",
  "key17": "26vpyC2wn7HKutSZ4fD5jjvdGaBYYBj759Z3M2vbt9bb7SGJrH9cQhSuLqFUrKmFaUndBXsWsCxdm2EiBTbSnVSc",
  "key18": "2pxWLLkNKh3baEn98zcojwuX2N1hV6vDaovK5eSToG4yPwmQ7u9Wbyfsn15ZXzrrzsYNQ31TQA1qafSVShVjf6TT",
  "key19": "2bL8H7nQxySSrvmXfroor3GLxBoXMkbn4SHa5LrmHYTUt3iM6AXoLWQEJ1kekRMF4rrw9sCbj3qDLKBH6RXvboCM",
  "key20": "5w5B14bjweYazjnBoukpyzmXDaexnMWswBiYMD7Nz78v7zVE3NPRdvN7Ais81ahLVofGg5MLknzM5GRr9sso88uK",
  "key21": "2SiebttTddTTXo6RmSq1BPYr1ENC1joWpCv9Gzxoay6jSfWQywUmpXd2WGt3E3Gd7ywVn9tKMhznQVAH9bEb2EW9",
  "key22": "3xjJ4cs5EKc33bDvJC9VBHdHA26hqbmkvS3vQWVN3jsWcJTmuDSHNkb7wDWTEeZ4sys6QK7rx736jhP4FNazoTKQ",
  "key23": "3nYGbJ1bym3Lm9pgyuz9HUbPvoEAFWgjGMPVjBDZyxpPczusjZvi8yDXTksLdbcqZX9iko5d4xYhbmDeU94433M",
  "key24": "Luq3XaNUPJgZXCo89kV18yenPRGCJ22m4YYoZ64rKgy73EfPnW83zEQtUdchgmND885KL4sXK5bYvESMkiKJuRf",
  "key25": "sLGSC35taZDHbffz2XRbqFjfJLmTtE3tguUkcGSZcoUHHZnspeRd32CC2NCKXaYPVK2wJFN3fCpqeW5EGgtzMJ1",
  "key26": "4UN75u5eajDTqiEoxn26ufREBGftZs75ZXG4pnruNJUV4f9Q5uyCKy6ZVoaMzL2rqQ6qfzeD7Y5yJS4xCXS2KYRb",
  "key27": "AoiyM2Pzufut4mcZL9BdvXUt6DSy98hUjjhPyNccMyTLrESvigGHEPovQJoWo68yC6VdKTiKhHfaTBcQHU1Sx9z",
  "key28": "4SstbZq2KzvNMVjtqgr3SduKSj4psoE1QYHTPgNYgo4smeAZckNfQnKBmHdBUpGnJo1eFY8FdU6m5vg2nnWA3Qwy",
  "key29": "3egvJBUtKUcSw6GthEuKzkcz2xvKkZmYArQKcYrd6RycGqDvjpumraqZLZFfQ3b725zNXMH7vLfHry5atoxbbjet",
  "key30": "5DkgkorrmJ4CzGx4JTyLud26gdxWBJssaTzKjUBJV4QKaPEso5pnFxmPA2G81sVBLKYf8wPCTW4i95H5MAmBMV1v",
  "key31": "3BQqaJcR61ZzWmeN4j4dPwpwXYC2KF4ccHunNnJZDgiggLtMaviajDdMtT275qbFAKTVy8WnjwKdGjW6bnejyEgY",
  "key32": "49tbjzL8rhFWJ7xnBjF22zjPdk9NxWA9ThFsERAQ85fhWDjrg3Jx1Bisd6usQP7J2sqZEHTZtGPhEqgmgMGjMmv8",
  "key33": "5fDHT41QJ4Vph1MU68BXwknoCyczgwpQJhbLnwDDi8D9Khbzw6yPjejvZh3fToSnj6dg44YtZvMM5kcn5Eafiqrt",
  "key34": "3M4i9M7TLaMRmUkuTJAgSz325JuB6Kzb2HwDvcmGHaMRWHw32TbUdDfxE3jjVLGu8P64y3XyTw4a7eYRL5Tpp66u",
  "key35": "2DKj7YWda3BtnRmqWU481Mk39J5oVqKpUpf7GwcuuJiK1YqAeeaX4rjbmW2WZ5NPFjWRRoNMQFiz1WhBNVFj2S4u",
  "key36": "2Sg9nw6N6Z4PBUotWBkf86FUyKaTT8Qzmc3JwraH8JmYPwMWSGEr95c5Wo2ukpDjfvL5XeGgdGnrHb2sargfmDqu",
  "key37": "2Y9vhWoV2afkSDRttPq8jzthXHaXhQ7u5vWA1ZdAQZM4pCccRHp5n1d6eJ7nTXxsUog3WqgMWJhLfBfN4Bn7tjbk",
  "key38": "3i5TBMvXvxNrejFf7XDw7c6uGpCJgZEhyiMM49teHizEVdVpA3LaznxuPAFSb8xdfJBq8362d4tipnauXh61MTmC",
  "key39": "562qqNQD5bBrs548iUnPRFYaEGVac4upXLmJmG5Z7jZeZphznJm2iCYmtyiSxUcq6CGziJqUtEy11wqhhwZj3Ain",
  "key40": "btJD9GxwFh2foLS1HqPkH7djLUXKk4381VYuDym2xqy9wCfxCkkiKp7pcE66edcWuxEKV6fWy9DQgwiqfvUbbpA",
  "key41": "61PcwoiFAXYBCs5kZnGbmsjnTbLudD48gMH8Bk55NRiqqKp2x1k7tuP5uCsCSHXhMuJ3Q1TQiipcVHKJKvrsiMbd",
  "key42": "Ms3nibdkiUW3NTSpp2jXm2uuEB1goFsLkHzfW6CNPnYiJFdLPbaJPrARa2FbCDNVEEBzvF2rppSfk1tnjwDMwSi",
  "key43": "3M8b4Bp8A78n5bMCKD2Vj7azjdQbUXQfhjDduN1AeKWnqySRsSX8VJXF1H6uHMreoTJiXTdzY3khMJpE3J97XJUd",
  "key44": "66UxdBmZLGxLN5CDXb7VPJV5L9Z2Ai8CrFBpKbf3xyRQNoDbVRoSqXHTGySYozJXwP9Qp6bghcB5RYh1oj47Kmmt"
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
