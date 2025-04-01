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
    "4ENNyFsL72zB6vVLSHPv4JmSN9AMVY5ZbfF1WKfadvswyqrtAbbAo8Le4GiAXjwxN7SGv17A7xNmpXMuBFyJoM4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VTJtBh3F8oVwB8H64es2A2RafQqCHYkzMwwVsDs9cwjRWK72A5H3XekxGAeZDJbDZcP21yNHnk12hUDuTXbzbFF",
  "key1": "65wWXMqqerpF8UGw2is7jsJsxaJbmyzHaD78RRekmopUPvPQrC3qUWgUUg53KiXMZ1ECzSvV4KPYeFhms1ara8re",
  "key2": "hRCcP3CphdZa4tm3FUANh35SMXk1AMpaxXGKKZr1PskqUR93DQW3GBKPg3a641yjH8nTjFDcnZv9WVfpSE3qbwj",
  "key3": "tYGb9QtpoZMA2BJkNUqqT7wnoDjiQT7mk2hoK5GTVb2DiAPQw5R4gzuKWTUNsaJpS377mmqnW5m7hk3dNXD9L1g",
  "key4": "32oG3UqTbgCLUigUfngTFheJkJMqQReqBDTNWcEJc9yBGH13gvvP5pG2VG3dbLZTC6imgQFW5pNu2x9VADBA5ZsP",
  "key5": "3LqQWj96zKTejefVG8H8QmMLcUY7Q914VNZT6snH5TQw5DWJBsCdknSuWA1dogtXauXuKX1oTZRwYWGhjoDK7wSS",
  "key6": "46JZzwW58TgBn2hHsXRzedJhaU4pthuQrHf9SXRViFJMrUt1LKvqZUaJ3BG3pTqyAPpird5XkRqqx5LcsTffDVzo",
  "key7": "3VHGhiaVhtFhiLswoEhs5Xd48ik9Z435bduLQBLrjd4W21pjNDegr4uLiou9HvKULcRiRg4JZn7ofQRzTijpZ1NA",
  "key8": "MifjJkwE2kyY43B2LMiJU5w8jYUS2x6hXu5tPRtJBXim2mD4ia5GoD8ZoRnX1wXXKjKFREvyU6SPqSNvAnni3vd",
  "key9": "2NbxJtapPFhFZS9jq6rYhrhXNKXuiwAY781ePhyvUkEYGnfZUNf83UR6ULdF29AhgJtCuT9jXbsrQEy5xmhxfyuM",
  "key10": "4BGbmm6d43zE2iXnKg382wGg4qBQz2zZdWGbbAvCpdbYVYen8E25nF6WH1FSuhsV5Uj9RkzsshRt6LauFkzoBYvh",
  "key11": "9tAbYu3nVShNkF3xPz6F6BPQWTAknnrQVMBwawnvSGUVNbvQrkQcuoi2MiDoKwH5FjrFm1ibRVn3JemTcwB4MTp",
  "key12": "yGbSgfMKjqiTaLwrc4uKRUufdAmhhj2EornXZrXAAH2ZZWoHLnTpffiWfT1p7W9iS8ktoFKf6gc625C5xFfZ6c5",
  "key13": "5yx124GS1dsaN66m6UhMe1WwBJjnMSj2DgKQ5oj775qCy6WwDTNuryt8FXehQdTq7huAVQRoCbPnp2fcK71KZDL3",
  "key14": "5TZCoATNwxFpArwabigL9HCQBQ7mcnvXzxqENEbUtKfP9JZBmAnqfpX36ro5pcZuWZV21fjeEqxwx1LgxZbdvaF2",
  "key15": "24GS5Voeyu5dsP8pLysLheNX1tvnZ2KNdaoHrVSg8psqdJnYJoKZamhZPWafMtgZfy2pEnUJvVRsFEuKc4ZWPMsN",
  "key16": "2pukWXpr4WkS1bXtTw8gY1t4X9F4JDKy2rAEWs4AyaD2TSUZYH62r4FUV9LkJnjtUTMsLcg9TqN94LfnJHd9W2bk",
  "key17": "5nvGGcdtyazU6uuAJ4ULCPPSaoEStpWXHbmy1Azt7TxAn9bNZUEJ7yVzGK4jn1vhhvD4KR5jcmaH8JB7J27rjeaZ",
  "key18": "BrDKajPzU2SpjSFHSNm5DZKoNaXncqcdACkBG6o6bKMLfYqP4Bf8arKjWrht5mSzWZLzMSPg7MrkUrBsZB5ubGS",
  "key19": "4JC2jPNVYeLfttM624QUQTBvkX7mAav5F4gf5XbJpHV3nsMfw7TbvZoaMEXvfvhx2KA47iKm31a7qcwqkBMKc3yN",
  "key20": "3K9xrMznwTtjUtYn6FeCNSaCqmSjjdmTC1F8LYGbFLxxa4gZoEA94mpDV4Cv7UZ4domkmrSSHdD1xergnywLjiyS",
  "key21": "2ydjSqVLRFTVasZ1Bo3QrLN3bCFxEsRWDgKECkWDnpNhm8V557EpGiYGbfwYANWRrNZtDP2VZnaNFxrsraRUEBw2",
  "key22": "5U9bo9aJ8ZDvY7eBQk1D4VewR7ao2xifHPqnWUZx8FSLz63jScbHWE94iGmgqRZtCGmuVCpRK4zisXM1xN1yTvdM",
  "key23": "43GkoqdY3W5CjZfkKmPbytciVpBjhHdQ9Xe8LFcgJPMiKq5SMk2YkV5f56wTA8UzkjTMzKPSF89TjM4rM6wqMssN",
  "key24": "5FgsWzgsDDEdPsw213JjEiJkTGQiAyYxzrDCYiDcvA3NChYW2BsuGXic6JgemN94H95uZvErBTE3KiWMa7vLqfas",
  "key25": "5qqgtZchuvwzvkRecJjkUdzfJp6ynYeWrateAw4JUihTe9LXavZEm3nfvdhiwmrrsJPJoNnHmGcDhbkj6RhN6nHn",
  "key26": "4gQ6JFM4JJJ3eiMsNF77kYYE6ccwnkCMFkBuFJiHXTc3RcVuGRDS9nW74dgv5L9uFAKZodsEPCAYT5MKN9aoVZNd",
  "key27": "2azT6WFiVNtk7uz6XszTVuHC1AoEX4AP9bmxvXUKi93df28JZuJXP3dj7GdQixpc5KaRpj6i18PtBzUcYB4fsYHG",
  "key28": "2Rw9feBy81sNCZviV2x7PCc6ar2nzogj1PjYDSWYuiYsJn1oj3kJZpZUV8fALuaQRU56Ega5qQNYmvCZPJoERQaa",
  "key29": "357DgkMsVG5HSyMVdX6neyw2erxxMLhQVFoNoBWChbqoHrYqm1mZpddYaR7xkD8mb3W4H7MJQYn1iWetPNrSjquJ",
  "key30": "5pVA2doVuBZHw16GUqDnAagnbLQEwTeKRKdbtL9iT4u2M7H1L3aZ52iRvBgeCx3TsPNv8EeJLDjweJmWEgxc15RM",
  "key31": "4Y6CifdTh3TdnfzmxBQvxDoRbLoWrs3cfsCgDmX3Uah1m7vYjdNCoWJGbkDFdMhDaRKoD1xNH3rpL5VZF5GeKxuB",
  "key32": "3UcxJTcE5BuHhbic3R6gA6wb7T7FHAGpyoQEKTsFBFK3Va3EhWHGTwhqQLSPGSuKsbSoimftqJz9Vk8eh1ERv62j",
  "key33": "4rANfFs7rQTct5vrdbV3TwJFvMa9TjNyEWuzH4sqVKpG4i8nXkRcfVQgvmETAGx7gkPKY3KqqdLh3f9prsQY2qA",
  "key34": "5eKBYBnipVXPkvEbqpkx4UhYBAdbde9pcayR341Sup1BqRGcoYPDAuLhRrF7zry91LHW7Tnqs25R1pcdr6HKqDrP",
  "key35": "2vP4n912J6WjyMiEJZF3ioEJxfCqWHsKWGgVkfkCeTBZ6NaaPbDJzpmPwsFsECAeMvMJvinCEqdEB1S3gPxAp96k",
  "key36": "2aK5HRpqhcE6wEiKvd4JzX4ixZvjvEKmC3EnecD6Ywe5TPvPNhicReRXPQjGnb4L4z1RrGFZLqe5vDKUEAJYyRtB",
  "key37": "5eQaHbfAPpMXcZzWruADLQY3MRe152uNRc9PUKrZMYNN1wkPtqBGhc7HoJpYRzHDFchkUzewFsCY1kPiENpRXpyh",
  "key38": "5tF1fF4sdqcmrNja1VmsxZ6Y856DN4Wj97dehyVjSJRykmQXtBJwob2BWnfX5wmWsao7iGRWcNMTG6PHtiZnNjFi",
  "key39": "VvHtNGNW32sNBsY7PywJ4aEwMum6Bw6BHEJhbX8f15JQQ8NuSRnrxwsMmX1YGivzYEq64jd5KexR64XmiD1krv6",
  "key40": "2QPChMSeL3j4VbM1YWzYZBWt4SQPnpYnc5uEyVxREnbAT1XbTUFVUYdiM1ZAjuegkpbxY7SQfsnw3w1w5D8B8UdL",
  "key41": "45hdwWt74kK3qi2npHugVd3zQxJTwGJx3TGZ9bbf95YNuRhKtBBP3Eh2df1NEJEqKRZcw1BJnLBNvFzQjRJPPjF3"
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
