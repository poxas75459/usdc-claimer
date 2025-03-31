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
    "CKu2RzUs3yVT7tXvBZQ5uetzwjfUpfzXbVSwz51wVzCSKMRB6Yj9pK628mXMeNQTj4PGzczUW5Jcxtp8KuMVNDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CJJzEMVYhZ51xFRRiToT74swt5W36SDV8kJ1AQmzMqvP6ve9Gma2JectosLFUj1awxF1gnW5wdxT6eeXqeh6aoq",
  "key1": "4VZ9YaWRKGNE6YKnM5Lkb4rntnHJ8Vo2fqNgJkfvjL7fnFoNgmva2R9Qmz2aMbmcdCTmHK2GHMPmVuqzVgBdKXdF",
  "key2": "4FdSvuJ2JzH5fTjFYRA7KCaZMd91GejgCacWKrY2ApirdYB9zgbL3KgukLqs6BoHK6bjJ96DhgRiCB4S8HSQNiBp",
  "key3": "4eVsJw2R92gBqVWozP8u9sMh3FPScm8RXtJYsiG3qCB4aoUmx1jLEQGhTDfATaHM1qJGeExDVBufaBSwnwtTdpAF",
  "key4": "4rkkR5CUm2mw4MwT8GoDnrwceYxG7hh9cvcSA5SGmyoAchimFpVQz3bJLm7oCh1cex5TYfavd6qo7BMPeQqtgZgc",
  "key5": "2HZdkFuEnwgUkCsntrrv4ajCBniNNkJha9ka64MFpYUqLrmWSiibPvK7t1AjJmSt2ewhnp8mV8MEtSu52havWcqc",
  "key6": "5dEg9s71rG93QcaroN5gX4ih6TUzAZZFrfCfpTyV56JYhdhskNb47kA4DSCSmGfwkXmqEnNy35GzFtBLAL2FgZye",
  "key7": "5SbDcVKgMXJn6NbfFDRhNGXFfCiM56oxe2W4aDgp7aXrrhdgGbyr1jM4GzRyeZARx7ZpDTW74aizvh7FNdGAZKXC",
  "key8": "4izEQPyKRr3vfhWbhN8LhAQA9gFTW7BKENJbrtAyWWSEi53D3Kea7ho6o3PuQvfrQ71GGRiCkqMuaWJynej68HkL",
  "key9": "rrq5wZ8smAiMUNt1k2Z74ThvnwgnkZfXWzi4BLC6sQLQYrXWq3RD41Ypcw5AF64w59HEEu5YQsfmqoPzfqtjKdc",
  "key10": "4DTS6WSFnT8KPYMaUZRfn1YkmD7aWncsrjyqvuvdhzeYugRxmgkuVCH3wxVYybALy6RNybqC5vmmT98t4QtbbyPh",
  "key11": "2YnWDgprzCy9YKGMWUxngeB9mfmzWFwoKyitSNPJBtNifJqyRACRUekqEsFk6TtMHCY3S99aPAmcBxqTZbUK6T63",
  "key12": "4XnBK7s1F89xqxKiY95ZJtbMja11EsbfdzKzzrJEZYXXB8pBj9oTzN9fxCw58ipVdmE63Te16mMsRZ2Lys8RGbPk",
  "key13": "5bSCVwMBaCaSHX2WtBLUuwetiAXoTqWGuhFSSU55bZMkzuVZLABgQbf9EDvDoDKAbmGTBgao3XWxK1TMBKNDQCZh",
  "key14": "3YSq6b5zYQ8YrQ1MmRBrX1pm9u27a4bZ7SaPpYSuBa6EmFNaiF9LQ9Tf5T6WZ3PTqzAXcMKakLdT8C8fq5WQwofR",
  "key15": "2xDW6LaGnbJmDaQeV379eXj3sbRWeZPbFbGDDR5VbUQzTdA38z3XMnDk6VY5jJNLQodRCNExJSRc2RHQSnEuJpW3",
  "key16": "2BxpNHMbzYVHTELKzkKnuYLqxCqkSBnhqrKzsmrxRg4bp8i5q7gZXHQEnhcFNNRi7HEP8vk8NUefBLcGdnrMtJmi",
  "key17": "2dwMvcNcerDVLiuo2kCAsfes6wyxJo7Zsv1n2aCQ7NucbMUnMbkWb1dqg1jFXktBxnM1MNFX4u9iYjoXN4ZHGCQ",
  "key18": "2CULKgdk57Wtc4S2nG7AKyxPSXcywQYzBJcrZRg7ZHKBLagjYAFB7kuXZ9da92c4ZDbESeGrD7HpbGBoB6hVwUVq",
  "key19": "z8tWThd8QZL9zybFyRrC4GC3bqa74Ckd93ojKFhhdnkeb6LPYedFpAU38qDyZNA4MtBovUSvwneg94PG2BMnSbi",
  "key20": "3YcZaKHpmRRywPrPwJhUaxS8Taim73Vbheea8mLGwFZbUZmfskA6w71MNDF6nnk7xxrb3vms5fJRvy79yV38nhn8",
  "key21": "4fh4RpVB5qi34NWqs1utcKnVxhx2uEDd1cQCBd5WPPVcsGWN8bw1X9wwzWTuyyLU4cgopiKkRULqHAZMBEmZLWKS",
  "key22": "hyxJfvZPz1z3whNAxR72Fk6wofNfWhbNkg6yDYcKSQnMVXCQSMZPY8ZLq2wEmGGZhzhdzGyLejZRNVo6qvtw589",
  "key23": "5nHmTzW2NiXQNK17qvsD1QbDVxXLJLzX1cMioxrgGY6yEm7yBdsYsn366fpVh4oECxmRgSXdHK8nWuTtj5QJX291",
  "key24": "3mbifAC5deBjevM5K1KZwV8CeLN7a9i2DCQyG4NVEEPuCAw67mZpT5mN87dbpMDr9xAc1C1TrzJhezMn7xAqvmGg",
  "key25": "3MEfZGpKQkbok22Ht8HhUVRV8mXzm3Zg7b4Mrp1JwFhjCxpTaFHx7bFwoJTp2KbXxHbWFiLWijZvp3WbCzHjQ4Bf",
  "key26": "4dTYj27ohGX1eSzzhx6jSUyuPeHHCNoWmW1FgMkS643hXEy9dTAg9yP3XfRNJAHWdcuj7UU7pyLXjHemKX16D9Ps",
  "key27": "2kuLkM6RyPSmndo4D8ivM8QuvN45d8hSKHfEp2TJK1YBRq7nT5XqNj8HwDXFrko8xQ6ySvhb36efJh2nYFAeMvUp",
  "key28": "zLBv3L4XVk3UZDRmVhZbHYpuwiYBeXCZ11Zm1oAx1C6CZrc7XKm76VajWUWiLHFin3jTHkaqSMHtQZLewLEt5xV",
  "key29": "ag28EVRSNdqvCyWD9my24knCMdKFU2NpkpCn94PACRTsMRgMhhmyqh6SRUYq1H6pjF989AoDQRQ7jwifXG21Gr1",
  "key30": "3WdDL65pVXWAikwYJCmtAM1b8P3Wqx1oTDvwUAwTpmF7BrGmfHkt2iJ6UGD7LxpQjzHGBHVDMvkNK7SVWJDMaLLE",
  "key31": "3AE3DbhhAbbR3dwBcSqmqAC7fbQDMrKxpKpfHvqWhzaT9ox3GCCbxqK5sxCAbQia4a7KHPUiRA8r7tgigVaYUkhk",
  "key32": "4RVpNTiFWe8wJxCLcaNvmip4n71iwUEC8zrAaLMZKG8zK61xjT2kSZfvuQ51KX2xJdCDHfBxsunirNXLFRXCq2Dk",
  "key33": "253k1QuFYZkVTcKCPdT2tg76bJLYGNSNEVzt1uu3NtgpjcTos9WSJQCeHtQDt3zvzsFECRCgs1fnzJXnZrhP1Jrt",
  "key34": "44JWSbw7ZkjkUzCMYntcuGo4mWP723XUoQ99mZqPLT8qS6SaUSqF9xLijihFGdSNTGqWcjSvhVtHJCrJPQ9yTkai",
  "key35": "5gEMdpwr16tbUgodegc56uTh96KdV6FGC9HttoobqHMY2GKm2dyWNKDkJg7N6wCXfNzABuSeRD6X9kfxKZoYHm3Q",
  "key36": "22oHZw9xwBU2GhA2BQ3bhNnhbKA3QgqbHATkwWVqg3EVu5cGqnijJP5xuXQgfXKghs24jUqp9RbABF9eLnp7rACj",
  "key37": "GTLdE9exMXv3w7X5NbvkPsCCToRrck5PfDsr3QzCNDWZHhcgqacnmc93fNUebdV9bkTRNGiZ64VMzphqsZN3UGa",
  "key38": "38BuzRLG9oneEmSC5m2ZsThukUKGVmKi5XscKHJ2NqWRWfUPtLag31b8JtUrr6x2y8qbc8AAjhFtArSCPXhZionM",
  "key39": "w3iJ9srQhswEwwZQQk9MTpaGhBFRyZLsQRQvGQziM5XG7SgVXVLSqKbJRosuQEyVLxchrBZhViGCYPoDtufjMT8",
  "key40": "5rANZR5Y5R4MihY8jz8LHjthTgVeYu8LY1ntykveNuYaxCjNwsUJZdB2b8dbV5CiuhFyvnt4WayfDxU48RKwBLPM",
  "key41": "21mWVXNCa6cCRaPzPGrqBFEHHJbwc5K1VMkroZdFpGZfDRi5t43Xs4JEPQVigCWwxCEVySmU828v7MM8GZCfrAiQ",
  "key42": "3H2mu3pd9BjA3Fio6kciaQMKaCYREyNmmwZJAxWj5z6zWfmGWmfT76QUTuiY9M36WqDGdZPGzZ97y6VGFj8ooTpZ",
  "key43": "3uuhquCde1djQ9RZT8XAcZcZZK2E7y6cEvQPjfDpkH96qUEVwfBGZ43AsDLj9QZqRKmT1iXoa58DxQipf18KwDQ1",
  "key44": "2xZg26WaSXSLXAgrmeRsCSeaRJoqdYwkNXjr1ryAT4F4zADqxUFnM8G7oUBx47qrHyz2hJ4W8ZwDy1YBnR4CqCmw",
  "key45": "4q7hnSvXtiEokdWLSUiG71g97kJYp4dnDv9Bt58xd1KZSvPzRNiWm9WzkgU9xWcTUoP3e2xcnyTcVpkVw6PucP1b",
  "key46": "5h3yYMaEZHmthyhFKKi4AkKgXimwAkCiytm3HVYARAatGGXGNQng2epynXquMFsZXMpatjCqJ776xP74CdcFHEGy",
  "key47": "5UXbtN9EC5vC3PucBZyMFdCEprLjfS8WSNkpFym9h7FNtMFy1cQwUrJYPinLczpVy7EsfmpzXMPbsc3EA4ycYAJu",
  "key48": "5Lsuwqv7c7YnBeFg8ZS2YHrb4qzrDbHEDxBm1278c27oPZyAVpuaUGhvfiiMP1fXdXSaTkU6sfe8v1hAp2tftivA",
  "key49": "4QeRSkMi383tSJoGyXheFgYi1VhCkLCqgoCkFkFRbh3yNDKv5fJM5KxTnwkwSoQdW4td5rvfr4RrCtD8GsiGLa6Q"
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
