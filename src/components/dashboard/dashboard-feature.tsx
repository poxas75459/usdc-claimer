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
    "4TMXHMUBMkjAPpZtAc4hsb45QFVciD5a6Vo8pBZvQxNxLEwC1oSw4ZaJW43CWMA8EACLyLFCXQWQzDGYvEg1fiC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mz1Umem98xj9gmFJHuCdFD9HvrGkhwGwfZSasQZLqETRgLuB7dehX24JR6qTYvU6C92VBkpv3cTPcHLa4XTgK7b",
  "key1": "Dy7mr9LwFA9Zc3Q4dFv7op22kjDac1YCJUiAkwZkf961bhRvRG8m75jehN3k2dySEM8DRo92zn6LNyf7n9mGMG3",
  "key2": "5YiM2iVXw4iykAPvn2frcvXpagHCrzCY9GWtvb912AsgofALw7qJ4Lx74AdbyGXwU47xrymUr7JYcfBQW9bB74md",
  "key3": "31QTPV575EybgJrg8ymNyVaw2NNFmwQeMX9m9NQjEDm8nhn78URVX1w7zBJhQBK5M8FzGdMwDq11twh7rN4vCpNT",
  "key4": "3V8PQv8Fz6DiQ7ofWetc4E2hMQiKmjgecRNnt1FUykHLL3XbywTjvKTJvjqTyfJVdZWXf1zcsytug3YJG5KbW3hP",
  "key5": "5qX45DojjYF4SB3BQjczYwjAyk1C337xQiTzD2rqetDUAGrt3861D1BYixxAtkjsX8LX8VeqSiBz6ymtKCs57dhQ",
  "key6": "2ZJNXuSHj6C2snrxAc8PhD9oh3xYCbrnZRwj7d1YbjbYmfnLaU4ZtL7KzysD85qmpqHtZvgDuUTKzGfu8eF4XdDg",
  "key7": "5vSv3MG4uvXjrZTFphHjRwrccqwzY91LR62gSBVVempYxgG9C9bPdQMY9Axv6ahSoa8pmHbX4ciG2GTbodu18YbL",
  "key8": "27sJrt3kbegw4NJsXcLniYG7RKMrHwyjALtJBvjhRZvGibB3AKppRQeC8Wb4EbP167whnQD6Z1EUNkUxgSmVC1Xi",
  "key9": "3mdFBLQz8AiqJb6YLPPNcwmf5YXgfmF53U8xwP4yZQiJ7stTvPKWEFBdz95Mnjob2hg247yPSVY7dBmsL9vswJzf",
  "key10": "2Y3fwaN8AwzTiyv7ViPGX4VewFhUTukS8mUzP3tKyc7Rru9Hdy2qoSBHZVS4SobWU168QYbCduowvAWQD4dzWX5Z",
  "key11": "5BJB3RJqCRWES9ubHGaBZwVtCzVkKAhVcQ3T3GuKs4A9KHrgMA2pjJA7RTe1nn3k9E3bZZysDJCv4VdrWu4BRspk",
  "key12": "341kgtXGTWkimzFp2BVn18QBbBiDoAMejyuARfz52hJHvJ4mbNByo5zwyiGXmkG3AC6MZZznbiRx8AeKo1cRpQGA",
  "key13": "5ysrL9GbYvhvDuNnxe5uxDMx4KP6udAJNkBcRsZx2t4ziiZxYAyfATWeCvfus2QJwQbV9FE65V2RyWTPVvazK23R",
  "key14": "eFpsct5zCWiuP54KbUeAQG8V63jY6d3vzH2nRk2W2cLzACGgWosvV57uSFHwrg13nicR7tjq8PMq1SHUZQ6orGH",
  "key15": "43um1xftVtDP6fyP4nrHxbwLdDK44GjsBMyAAayXknQQipLSSzCNQE5QzoT4E1qJkZDu2W2EvcoQztUQT26uvH6E",
  "key16": "4ApmDq84hnxepkitzYSookr6Q6JPANCGhwzhMov1FTBfopiFyNeeiwH1ZojBnhuUSW4JWc5uYoJaDGAwidaovGVX",
  "key17": "5y771D7c2Jaf9q4LCBdifA9NM9tpvzda94SNJftuySG2YeM4ppatxan9xCwRKitaqyGt539HJHHMSmrXW2AGmZRy",
  "key18": "5scC1xYmKJ8Ld3MLvPxWYw4SjsMwdjUKhGUrFtDqrukPToYHM4cYdZ9jtkTuRZ1FZ6nrSzHRJZxJ2zTpo5c9uwNw",
  "key19": "aHTR6me7ZYNp72oHUSEEqUmMBHaNsEBdX5atoGU4GA3q3scvRCxEdMHerjExtobAbGfEAfMkndGPDvR2LvLVm8B",
  "key20": "3A7tJcRCHNrFP74vkZXkhKzZEn5sTfqjZ8uC7FmYdwJQhfmMACuhTQtwb2AFGExaL52f4YCzs8XuPSdQJXEwHNyf",
  "key21": "j74w1NzUYoFymWUNH5N6AdRqueueBtRQYX9wXDV2rnaxEAkjPma1fF9dvY7pMF4GgyiJAdpAWeJv7HfsGp3usLX",
  "key22": "nTxv56Y6FryraAnNjEeeendqVUdRvy57MAkb2fMYBgUAjgFNd2yN5e4YuvrhCrob3h4cdJhSKe728vMBgrYe569",
  "key23": "3aSh2aERzNR6AR414cg44K5ux5ZRNBuD1N5ZD5V3m2awV7cgmNSNDxNWRERRaRJNRfpHqv3S7BhZshSPfqmbkKiC",
  "key24": "5nkhR3Dh8E3ZBY3SxbSo9ZCMz8BAkHwv51sWNhGCy9WVVeF4V7iqBLF3ng8uRc5XjocBdKmByMvGhm6APCTRyT48",
  "key25": "5TixzPZivBMZetZC3XiJSKcfccrkuk5Cvgex8SpgjZkouqJJVeaN2pXnagdVbXLF8Fuef3fpsdKLs1igSq8ZMfBF",
  "key26": "3m8CZ2Yxf7x5LqFEdp1UNfEQkGJUvNC9rEUXhjEqFUQZxeN9EeAyGsutdGzkob5D7jbc4CeSzGRjYYXi7fmn4J6c",
  "key27": "3ZzYczWdgnrwvLHrdNFkJ3TAT7ShJYSPamjxNWT63iZtwUap3gzSuMX7KzP55cgztdSR8gSn8hqqvRpmaTX8Cnz2",
  "key28": "2kmvMiRSdKuwupKvqMxB5q4VnBiXCXj6sGpVXcfhgN75jsd7uEDubnZWnTVBs5ehHDQSsxHb31k2gkZckJykdf99",
  "key29": "4YEunDh5TFi3tx2Zr23jBYe1RFvzRRxKdyQbskbDBPaUsWpa8rn7c7Bg2kkaofxGPJuEFf1sCJEhrjJKTSwabwTt",
  "key30": "3e8Gz47KvbKXMV8yR4ftuChPbehWxcAp14Me8LkA9HJgDHWTuwHqkncZqwv7ioivPK3WAf2viLUy2KiMFiZFUt8",
  "key31": "2TN1RNxKT7N3V6gzrvak2GCQZyXa3q1nuXLYYiHEU4owA7sY6UtxJDqWghj8yG8fwszivWE6wgFgxhdwVGW3tVNU",
  "key32": "cMH2qF77gVHCNUiZYUmTp1PCCW8ArwB824cYFewYh65t9JFtqEJ3T6gFZG7PhA97S8fZYCk9W9w6JaF2WRnHF6d",
  "key33": "5cyhMY2tWTeiBaTgRTeApNAksbD6k4DmJhMF4vY1vpxMDymFTyR7JJcAsN3eaKBnzpdkXNb4hVCsCNwNKNmsquhU",
  "key34": "5MzXzXZWLtWRA64SG6mgVFoQu7pNL2Mm6NYMKKhh5vZ3W917hFX26VaKdjGU12VMqYrECS8C9UCnwSspcuqcN72n",
  "key35": "3jMpHAhxzCZGZXQhiQ32CkkQsd94fSXh6bdQiwfzkuSMWrSo6Rto1L7J3ugFkzb1d9ijFcBXJdQDZBEduzLivJnM",
  "key36": "2VfHKeuAhEvfugxmyXZLC4RnP6VrbCVQmeKRcUfLCB8yejreHEC75Ujr2Yoqo8tgprg4EcvwmnjJcWqjetxo1bBF",
  "key37": "5n4bvAVMmMbkC72xpdmQ6ZamgH7BkTf86gBNMq6y2yQdfpNQUjdpDX6XjjnvoKSZEokY9NCfm6nLqMNwBG9KKT3M",
  "key38": "4BMrkk6GtxEqFBGvhZqbLDm2ScAMiEiQu87CDCbYSQBTDkgWewdhpFdY7JiFBTH5A8ERsfJVdXJcEkQbeLQv4BUp",
  "key39": "2QW696HrSJSMGa8Xbqggnc9xX9pkFsVbtSR9CdniTUYH9K4z6Fz6y7i3aH2C6pP8W2pVbWNiqCCsPyBTWq8ZZSYE",
  "key40": "25dEn9NmYGEdrp4NctLgipv9zLQxLr3scXpM9KMJugQNgtRw2PFmZYKBFCSki9raHRR2nLpSvrWnULqKPXZXLo9R",
  "key41": "c8RosqUu7RKETUx8TBY7T2gr4ok1pM5UFdzfWxYJDSvsiDAyfR6kRdJMk1bWtm5qeoxUhnMq6P9Ya5yULTrdZ2W",
  "key42": "51uNygussM9P49K1pfexSJshm4VNwvRcrvrppgiYNtHXXWzmtgqDP5DRY7zdUJBUYUL9czhQ4feRiJQFNphSJfJo",
  "key43": "2SC5jjZEMY9fGKpAk9KSmh5JCXzRd1v667fUNznVPm3XRzdysx6XpJMFFUfQP1uBVca3ND5cgDepLJLUfaoKV1Y6",
  "key44": "4Bmy2sYUDbKXT5VSR77o5eybqekTWk7nQ6L7biQSCFU1s2tGicPaohfWQnNDP2GQ649DLStjCVfmbPfGAWg2m8f",
  "key45": "29ZynrpviiLad3S2wajbW1WE7S9rY8yK86o4FHZ8UwqBQGjFTe8ALrttZYJDYJahaXSBMLGnrs5EzbSHA7Jue8A2"
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
