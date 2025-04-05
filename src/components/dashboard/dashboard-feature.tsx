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
    "3gzTkurouhWYpvykHNs7QUzsrE3hfEAmbho5HdxvVUPukrJZcV8FPzte2a5FwAbN4FePCJ5NNepsXhfMQBPUMfLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QRu9RYYnWxEAokeDAPP81AMhcBEsq3anjU9kPLY3vSV4X5zHHanmfi2PQRoDMGi6shMapfuCUDeSESBKTBzHSLn",
  "key1": "3QGX3yLwaHU9BS6sYBQvzCRsKyUWN7FREDSJgBMdKrUHR4n9D6SuKakXaY1p5uQzdhBtGc5SsLDu1gNoBzwaN31m",
  "key2": "3w1qE2HEH6bvCtUMCAHh8xy3JHaS7wDYhionD6q1NREsB3WSsTDs6WiJm8UhX4zayFmZANwuxX4AXUJJy14jxFij",
  "key3": "42rM2ij8YajDeSd48yZYuQ8x5zFxBef8od7w4M44zkDktfjYzEc64ExKjW64mDPRYz2LctNnZv6jGoYHZdWKo1aQ",
  "key4": "4uUGM2PWGWDXmBASVoDBHZJf2N6KFuNgxt2epJCBVRbz8sfNefTNBDKrLz8nr81sYNRDvvkgDscrmvoBjWkhQd8H",
  "key5": "48VXZvTaoQ5DLMkk5uHveDmaC9nmm39KwEyytN49QdX65hQTa5QofGmyozfVCr48B7MHRAj94tKLqHTVPPE3u6dX",
  "key6": "3YbBrZDrh4vDrn6AXFMKAaC2nr7MTxPRYTCSVnczfxLfgRjfjUXkr23QurgKSmf4Qv56VFSWrhRuUM8e9pQrBLCL",
  "key7": "4d5uZwYZ6JNfR8f72xPKg6b13tFvmCS8AYJfyMHm3N715MHW5PKJBNxqwbCMxAqeAan2WU9i8W8yxLDjZ3y9cuvx",
  "key8": "5RRySLNvrXQQ6QtC4HT6n4K56HomZYwj7MLKQTqaCjJGQTg4M3yFXrjUivFiCFKybE9bvaGhQQVFWWud4jq735vi",
  "key9": "2FYb63MY5fgWRGYbhBAj6rpLhyyQnhXiuZgXLS5iGaNTKQBPgtjej4DhkZ5pwaPpoYev6Zu8QYmaQhusfwczG1Sa",
  "key10": "3LXcS6r2XwcqLAU32ndZ3Mny75zmWHYL8wkeunFHnpUpbVEq1t8nJVVU92TtZZyL3EjKFGzTyeBFmjKVfPjejSKs",
  "key11": "3kVyCNAw83Eqk5ikBycF3j3U34rKM4giickbsz3zZaLfMZKfT2DKfZ2zGVFEtQwoPBFAaYGhzDQad91PBZ25XwtE",
  "key12": "4ELNDKYmg59RDv5YDLCk3Dh3SXAbapppDsfLd2Ui7kKNMNt8KxjsiSobbFGKSaKytvP9jn1ghRRfwYPxcKQDa45b",
  "key13": "2tbmDj19iYMJrMS2k64dk3AQfcXnv7A3mUQ1L9ET4XC59has6yFjNoGtFwybrsSYjnU4i8HoSKGiWs8Nk2hoSHcY",
  "key14": "5gwvxrpka7b5LcJwEsiU2AFfiA8bte3o4rPtc9vTUHm8w1MsdyaPkjitgQVaXtXPZFtnJPBejkbP5d51vFmHAhgT",
  "key15": "5QL2zbRwL6dsumTFASxMZeSiM8xEHe9Au2YHixyQD4iCZ6odcpRZLQ4bFvQBN6AL8K35EM8YWCQyLgFhRHeNDqhM",
  "key16": "5kwtV1aVu8K6GED319kintW1ppueCSF6ZmS3TedMrcdW8HgoBNkgGXNEsMbqQWWWYKDjbBUfhoZCvXFgYKhqZHLA",
  "key17": "49BWgEjdyhwNeFr9UGVB4NBLvawF6LPjB7E43WZXbzZfMztWztrytGFTRvds2MkiDePFqPC9sBKJ15mfyo3bdWEJ",
  "key18": "5c3hMG2Yj2TTvtouYQBVi9MtYyvuQBehtzC5EfQRRfamX1QtXmY3Lv9kmZ5PHVYEhvUapgk2TPcKTbj9rythHGv6",
  "key19": "64QrNd1KATffmNpP29Uskjzv4QbzSTLPC3f4gUAdsTpF8M2vQkjReKnSqe9uUhqeqPwzKn29kPkXTQx3qnSAAyKu",
  "key20": "2kqBDU4qSgsm1J6xsMbUWuNCeS36z8mSUrVzSQaWFckKQboELyiEYeo7kLveBkqUHR5HWewMpdsFwtVnxTN3pmni",
  "key21": "4BT6gh6gD5pvkjcNmo2YZJhSkzXyEBZNikPWHpUTAZpK3N8q8mG5L1fSLv4EHPbCxcS9PmVfnfTKtPGhUYcCpjvn",
  "key22": "5XLf9gxEyTPLHMrEjiE4EnrzPbqvwahwRuoD2QWwwYJh2scW2xVXpyfBC95P7nUA6KRoWakH1qRzHcKQTHLje9Qi",
  "key23": "3SQTZz4xfswku4fwWXCBnYWwNXD9iESshdfgEiVF1E8gjKQsBxXczFDKsyPrJBNBYA5tHTDcn3z9R7WXrmXS8478",
  "key24": "26D1v9WE7W8pCa7juj7iZegXyQmmW3kimYQJZbXgryYDVnpKtWKVDN395QrbwE9zMs2atn8u1K7mkivBnGFU1A1f",
  "key25": "2JNrkMM6E6gbaGF2YFdXtasVTwUnrXv8kJpcHXM5enkb2UJCCC2UgtKyaoi8EywfTHGBzQNbkTxDC3bemHtFgjvR",
  "key26": "3KjXiu8LzEHaApXuv712VqaDToLV1C6dRWUN4QTmWXdscMqyXL1quLAJ4136NAiJpMFEXvfE3Bwow69ikHrjbWMT",
  "key27": "3GbREBtuR1TpXS9ByceL1mxFQy6AFDnCeyHfb94kpDSCyPwtRJuKebMqoA1UiKRjAvAMgcM3HGhBgviM6i9bH6AN",
  "key28": "gPr7g9YmxgVdP1cb3sZ7rsYPkSxM1MW4EMyU96UvRTkVD2WyVWz8LyiqWb5NUqzafFGBomVkv9oHFnAjaWeGRsT",
  "key29": "2ThVzx9cJaub1pzg521QLQcDEtmaXJoWWAVNt4K4H3uxRetHRSNfQ13aCeC6sShZQK3iA4asi2iGYnf736pJXuNx",
  "key30": "66jCXpMNsmqznA7MCRjeGBq6d82jyUx2V9cWXvEV6kdoLdwR4mPrLCz4Pn71N2YTevsTPJbciPJssj5ie8gxjE8r",
  "key31": "5F6T7zMNkwqfHgR84nADGsY6yRQKCbiYMg4TrgcS4Ck48XS4VdRaMdDPCRKNZKKk7zMpdxt7wEgXmJgus3Jz742x",
  "key32": "ueX7JqqCq1uC4u1u8ZDzwkhrWttedbhV55MZyQhhmZk5ycgX9urqRcPCExAoTLDQ41M2QJyktiHr91BWiJyCow9",
  "key33": "3SXVrSdxirbpSLMc9sYUWm4UCKq3xiqqxDa9dCa3nPkN3LM3M7H9ZqgbBU99VbMTd3oFk2LaCKvVU9wzvq5KBZBX",
  "key34": "4W24Fe3xCqYR317K42VRpF44xkfFJNggosXXxJ1Zru6vxDvy6jApPzZjLYqkrVZcZ1CafTsTazH4awhM1bdaw5g1",
  "key35": "2aWZErivhooNkU8zmk6kja5ABiaS34ctuHPctsWuHP822xup2NGxQs2Jn86QTXktctDgfQtvSy5Xq5Tdv4o47xEB",
  "key36": "2EvQPQBtuaZxsGxsmtivkcqjAYh7kV5UbvqC3DRcy3hLNacnBDZxfAQTCPhfZ4khfNEwj6iGYKEnGVw7QLy6R1Gs",
  "key37": "6ZSy4NnmiB66ZoEtPs9oybjPq9dEU82erjmpDrnAjRSNDmAqHtHwUQRGKioxtUqcePz4VKQavLTQ6DAP5WWpM3q",
  "key38": "5JQzZRgXHHysgutqAAhw2cHjd5oW43nRFb2goG9B9tuySyE89JmX4atWW2Q2D78XQb2RoXz83S68ysbfxgQWncmy",
  "key39": "3852QQy8hPK2Nvedj9ixxiMdZ2VJpEarwJeE7FLfDWbmVGfKCF3nRLTZYuq5LQQQYuUtLzs3oGAXchrHPsE8G4vS",
  "key40": "5wZBMWCgsvhyHnxLcQL1zZvxHogFfBcNnQSGXdWDbhNR9FswSWnUFTPkefeSAed9RuDg3tyAwFb2RVFhcX7fzkub",
  "key41": "2TptR9poVSdHFToR8EQrgwRfMZ5AWwaKxW8BC3hY6wvXf82MGH4EEAF14jrcJ181MbKdbfEd8mePqvwqGvv83boe",
  "key42": "c5Q2NwkJzDXQwsr4RUCY3NABUty6H71vTsrt8feXGZ9GXke96aqzzMRnBp1baf6bhqekq5PA8nqNgC2nDr2JiQH",
  "key43": "5eWEyWumHGfMbrQ9dhZ8qGQH9AfsvUDEJKZ1LyNWYKbDDfZDBrN7Td2aaSvPiFSDmjp4tGyyEXU8zgbMoJxcnhqB",
  "key44": "2nuEacaVv6xNUZLR6oSBWHdseeoT97LiciEZ9xfo5F3RpupsLi6vSduxaemhuKLcdb9ewYxTUznQEVkNqZwhq87V",
  "key45": "Zwq5iuqhu45whpuwsQff4N6R5VeRi4nKoi5VLWxRVFLvkAMhAA5295n6XCqfmbkZJ94U94tu6FcA8MvfQc5kTX4",
  "key46": "476YBdZZ4nnztpY7PwB72zt8qg6QoQdaekAzLmpPUaBAuf1r1681WHkeTn51RMry5m9podKcM2FJm9nKBYHehVHD",
  "key47": "3z7f8uUqxi4S1KACqHt22krTjFksVjFQftu6HKHPgvyRMr62s7NNYdcUqxVeHRoc7923CZgqLP5RkfoqSWhQ3f1E",
  "key48": "p99qexZV5Hyo1rM7eJbqSGcUjuzsm2Xa65ruJvtasugtrUuG4FS7X3DD9MjBW3fRMngau8YDnr24QFW17fYNcBV",
  "key49": "3ZXhQFVyzQNYkGEk3hYSvEURuU3S1tK2q8QE3wYy5UzSwaL15r9HyGkAeuDzcSZR4FTiiUeow1XPYiLU3v5yk2b8"
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
