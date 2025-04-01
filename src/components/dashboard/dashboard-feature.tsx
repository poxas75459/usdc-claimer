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
    "5NxTKBwAL7r2bsCLGTnBv9LWFUPoea2JhoQZFzmaxnvAf9T1z1f7kCFhhEVUAvMK845g8C8ox8e3GytZ3aW2CDa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DfCC3wDD2kC2XD4TU4ZtqTXMNXy5aKf6wsjuDrD73v2DuA79FXj4J9H8vvRugC2yZUZUJNPJdFvpQh8ANyzeyYW",
  "key1": "2RjJ6ZUkE4TAsvWgtFbDcauMhueJ39qnZj8NXsEhoEFppKh1UUZmoEVEcBkzrdFAmLy9Py6NqoaMsjLuQCYmohrN",
  "key2": "4zXzjhRzqMBmxRGBTqPKnMaJmCWrtSckgdWSZsiFoWch64cubZbEh92hebZ6tytf5Z13DV9wWGSLHkyJ54KCxh3q",
  "key3": "3GBvFGM4nQZ2A6iuWV2srj26iR1D69rKp1LTzZHBPd8iWVEEWTdUk3ECBZkyQva2HRyeu16or5gpmDGjHYYUBMZo",
  "key4": "5p1Yt7xVFnjQGPvsz8sGjRwramxfd7j3MsqbKPyswK1rC8fkW7yGTqxcGNc1Pgvmpfzh7gETPrdMzmSqEdRSuVok",
  "key5": "4WLYMriVXsksWTTVHs2xKc2zSepcXy9vpNbTAsTamwZV5Wq73kRZ9NngRJymfgZaUw3VC1wHMG9rDkMGKQK22eRU",
  "key6": "2W7VavggKsLug4kUDKd55n5jA4ksDbHHievg2ezZ8U8khx5nG49T4xAEPV9dE98VY38XcLis3cA7UFHXzXB7tZdN",
  "key7": "46y1fyQMKw3AoXn8Aa147GUp1oC93KmMJbktDkHHToefRzpxnB21ZdTRa5CuuUynmRxUCj4173Sg1onwNVxsEhn",
  "key8": "5P41h7zyq9jfLZ46cWj1SPMaMFNJbUhaacXfM3GgtW6GcZ87C6kLPndqvXn85HiufBkxi7aJY1ibs5897a799Ku",
  "key9": "3SFU9Q95cMALBj1GwKhCKHHnJX96WvJBYLT9Av4JhiWSzMQFNeXWJ9P4iNADTvojgChpJjzc4KyY4RxJCqNLTFHx",
  "key10": "38gNMgxX9YXmHM1AabkfDEvVhp26Ncv12rs7YDKLwsiW6M6fhnAaSRsNohwgRP44zFyJqfUXd8uqpq5wPUPCVBjL",
  "key11": "4LznSwhFWu78KXWmumGK6hjPTrJA99XRWqnxBnz3c3H3w6Pdun4ufAMGs4ktZ6MvMvAZhwgciELsbSxSKmxsVZLt",
  "key12": "3j71V5ifkbTzmNH6YKSWoyaYuRMy2kGPij5i8UDujomALycRaxqS42oKYPDDQRPY35p3Rw8ecvWn44B7SsHbXm8T",
  "key13": "3u3qiZKxGcFxfM2RgfP5oJyQ9Y8TFLqLXjtEKSjQtdx8e39s2Lg4MRoaXoe9TuKcuGCAcg9U2UjVgnM9N27gfzq6",
  "key14": "3bGYT24xJYcer75Xb8pcHkb4KNugo2pVTgsUBCn5vQK9z3RxVG2nBnrViwWe4aP4evcERxrvpvb7sg6X6iwvawwg",
  "key15": "W14XntgwZo6fKiRPXS7JAuYYYHZSV7Ak3L1ZQXyHgwqiXo67NdjXEPC4SPtineLbx2ADjwL9nMJwg5d37BtgX68",
  "key16": "3uSD6qPtGHgQozBnyFjb1crp1Y6zsuBZWnMS4B2PKNqh5bGmNDgYgBYBjt4Y4jzVhF1KQdeuAUh9tatN18ttn6p7",
  "key17": "QHY6TnPZeubHFPhGySxwQwKyAzgejorY5YrT3UxwqovcvfYjoQswD4EzpE7qYFCKHifo6TEQh93xHU5d6e44HwT",
  "key18": "2Q4gp68XRoqhimAb8bmbusqSbNkKYo25jXXFfdozLZm1NCz1fFP4FdxN3vszYfwChxwvhTx6Kq8MQp2mjccSkp5B",
  "key19": "5tvzqGLnqwJh9TXPDoCdtVfhxUoU7w7LfiTcowF6p1PHsTzBGLWSRXvRaNj7ZuicfDoPPJ9rngKN3d48tJbmAG7T",
  "key20": "4dB6T8nJZzd9MFUwPmbUiXpJUmLsSxAAL3bub4tHA6dB29jNWZCmGh6ntaaiCF6UF35dFZUFgZYNFe2UiTszvsrM",
  "key21": "2wh2QfHWfLDAVJY6pPSWt3Y56eMHJ1xFYJrzG81k483wRqdTtV6hjwPYsD7Y8FMiRzst3reuAxBW9doGXZKYG7ho",
  "key22": "5y2mKWxe8LcQadrfwtNUZtsxcsxabE8pL5ftiJrxYUdsNjShPCUGPAutDnabth4AYuT9b4ZdtKQnTbARtFug6xhP",
  "key23": "3rqqSKBi9nYQw9PWUhbHjinqBJYoyWeNrWjiETTG16CwGNh3rj44NNyDmKVjn2JMJeEPxrsf1DRgb1TLGxbs4k2b",
  "key24": "2hit8JYrRdKGhQdyXGsspCeHpHHvFV26qPCzrZweV4f1jmoLQDYpDhJqLS7TssuWxfiACQLFrjYdrqKqZjowUvK8",
  "key25": "2SC12hFPwBywpnJweiHz4BDny1tSEtUmdutZtSzqY9JQLB8XxDi2gGui7CPQk6Mi72JqUtfnaRzj5FjkzeWcf8tF",
  "key26": "3kyFcHukm7KxRHo72EM3J5c8xHBmeTANouYuHNwgeyjhryWzo2dz2KcTujxEPNsFWPQQiqYmYw2fouDc7fiJtAcX",
  "key27": "5b7GBU1JkeE2Sk8R86NQKq4XT95NXav2ezvvcEtpgSvaiYnr2dC9h3oHamyLhBgCzpxqUvqu5eyVcsYT3rzQgvsK",
  "key28": "4C1eq3aBWPoweCY18U1eRejUcoWurmfXDhembJHk89SMdL3GH63Lb8Fmm695VXSLpFjCxQxGMhcVbWWVRXfuPu4t",
  "key29": "3Nr3eGTdioYFvcv4RJrF2NvGjccf6SiGvqjE2oHHjG9LaBEpg337L5sg9Qj9NjBz3aNH2CptPiubTbvpTp3kopKW",
  "key30": "31rkYHwNTcYmQi9XzxA4agkRenZ2XBD6jFEkU5U3AwgLY1gEtYjHvcTChMkWjBnVS5Vix4kLBHZfvBQ8ctRnU1ax",
  "key31": "5gFEtNCT8K1dPyM3KjY9Y59iodQ5BpgWCCoEDa6qwQax3AmqWqEKcxVdnu7ma8CSpfhC1BVd2EqHNQHj1Lswvw6L",
  "key32": "3GJHTjizPiyLFAUKawm5TUYypvGwJKibsAtnf3ufHobeTVuLZV91rC9Na4wAbkycc57LMZXz8KAEAhv1tgmTreGe",
  "key33": "5YqwUYrqbDTJVRsbF5ehKMD8GZCU5TrWTsTE6svjMoX7SnNJK1JNxNBsYHGjrUBkP5F1euXThXFSpYhFV1jy9bcU",
  "key34": "38gKwKkEYqw6wwuZue2UQQwS2NUCpV7fiDCeSzgoaGAe9koFkLJo3FAHrEUeWfsC8YhyvsVsmno8QTyuC6xPPuD7",
  "key35": "2b6YUQdcM5AwkSsALD84FbcywDv3pC4gLtZ7UgVjnJDS7cWsBLk8t3vXm8Tf5twaRRjQowbhfqf5kVU52b6hA6im",
  "key36": "4CbEv1Gnt93sdGj4BUjfeWhrnu4pk9YGzd1o8RUeriN9nBSoYekhFPbzXSquoYUJfZWR8Eo2ftMvR3oRoeq9bUAf",
  "key37": "4DZi2tSCzXtnDUa1nt9yEmQK6T7dAFXbEk5HCeh42gM7oFYgkhf8x1U1yBviJmCH6yUw9YkJ56ThuVPugUYBVywD",
  "key38": "3ym4WsCL9Mzop6sUnLECkzqe36krPACJXHtDgUP1NJfE8mYoUwG4fzd4v73wKbRw6BZDxorchSZoRs5dNkXScqjX",
  "key39": "3eeX1NQnwjXSoqwh3v4H4UahEQ96A92CK5ohERUvB6Qo3ZL94oXg4yFcu8aW1DKG9H2FAET771yTbc9oNvHK2vp8",
  "key40": "3nuQzNzm4KoejrXhwQ9xejg51h2xdTT34MpV8tWDet1zxoXvBuwCw4prXb28LpCMmyYt2eoafQYQsSHjjjW7CvcX",
  "key41": "3fKfnPAbxtEVps2gLfPL7hdxFww1YKNAtAKqLP24cKPjgnjTh5cCU5538zxjWJdw9UWCxkCytbUx2LT2vidzf6GF",
  "key42": "2JNiehiHYxDMXNhKqNszzexpgtByypN5QSu3cxykSmWNHpw4FpRL4UdpmcgcjRDnAzpzRtPkt7RmtGKmjzoK8BdU",
  "key43": "3U95EvMqgqcuyYKEvwCvJhuBSPvxtYRwVcfHNdRjgCLfm2MFaJhTvqCAqKdsJFmQZWvXcgtg2U6qkDo5BHsYhgHq"
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
