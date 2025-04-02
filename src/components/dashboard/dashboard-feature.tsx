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
    "fSjfTsptSrCfh1kwFTmRkxBReuLef7j31JktoLa7CjJXQSKosyXaTfPpASpXKApicSXMM4qbZBvP8oxEFUwKUGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxKSvNUTKqKVprToqgiGEotbTNRLGUuwPyDW46uTMDLiFvKN5s7BoVGwV3on2JYyfY8MvaKUPqxia8nXCdAwk6a",
  "key1": "5DLcwaQi99kNxnBfah5n9p9YDhGteUgQzLxdEjm1ZWsCzptVutrTHaEDXJXF41j4ThKPow8nnXBJ8iz98yJchENT",
  "key2": "5qWAgYg7aYnrXnZDwzvipMwTY1BBJgeRZkUXt4xDJV3WxP6wrou7dRLDFbrV6nFaQCAZb6CMLPuc9b8RQaPtujVB",
  "key3": "51drktS3CQ6LjNqAV2Dd7FpMmS2VQkChpEHU9r5BzTgfYm6ceJKyoHTjaff8kEn6rgDF9pVketG5T73uocqeENFx",
  "key4": "hEdNNkrD5hXyHZ5kuV75TgmZXuh2bXSRyBKpdm8hpUcuqncELt2mNpSGuAb6JcoCcdESqMZoX1R832m3FcpEUAQ",
  "key5": "598HwWM5ZA5Rt6yzskDSCYFWq6kV3BneCJDZBXyKgEob2fvhMWwYvsZ25wGsjbsmbP45pU1ZvyP2PGVVNTbCsQ95",
  "key6": "3SAvjJhEzkQDgAWTz6CvPkEBNqZoG95o2UJhJhSStTj25fddAsHHeCzRJ67CDUvbbmUwfm2f81XkNpZRQRwFeNkC",
  "key7": "2GUSGnuSM5p5SGAwJAEiFRQQ8BCqiGcJq9cZcuLD4a2RYhJT3ibrc9ZdqpkBzsepBPX27qqMKz2TB8urjQ7zFYCu",
  "key8": "27SHDGG5DnEjp5mKbK7kL2F8rGsVTACwTEo6Mv6LR4YpCzwXamwYWtJtAFUxRsDx3nfhBLpoq4qgTcnAHNf9qChG",
  "key9": "3ghBpNGisFEG2LrG4rPMSE2gHQi2qwScnMWidrXjeb5xQfq8CpyP6JYPRfaCdDiLbhLnQL5yEbX3dP3K612kAygH",
  "key10": "3L5ovqyknPTLLbKcLRv1616pSmPVy3ZPvHSHAUnhjmSL4qL6V8ST9giSBG7bugEjimGNQkZMF4ArkzRsyxA3SUEW",
  "key11": "4rC3THH8vFf9EqubAuPtzxL69qeAQv3srBW1Vo9iCJrZjnkzVMtCjuBqXh3wyaiHrEs1ikgG9d8KniMxAdN8XJpa",
  "key12": "4ce5gh2iyP43ptjt4LoWbLGTtCegyCk3gzKtDCg7BtzfwreFTAnjGQ63gcxQGksUwXx16rBiZk6cmdNsJ1k3uud1",
  "key13": "3dJ9NonR1APh4D5RAKzoA2SwKUcfhZ4pUzsi7Nf7QjGVSBqtg97Npc5iRUJceU6eEW979GYzZZe6LN8435epTrgf",
  "key14": "41FJZE9aGVeSUi1Y6EUm9882icgW2ws4UaaHjLPR3m4iaqUy1dYAiNDB12qHFezayxm82iJ4B1JazxUDkr94Such",
  "key15": "5dkF51EHkJ6zoKHzCwhipqYo1m7HV6GwTwHw9keSdG8GXm7ZnYHKyBZzZyx1kdLwzfVF6NA52iiKV9rPev9AHL6k",
  "key16": "5XmtbAnS2jRsfZAyqo44zrCdvmacPariHFYc92gCi6oZtCabC4oVmJAWoMCmgKzg3TxDDiLG3gwnGmFRr7xnqErv",
  "key17": "4c7P6aiH9chaQPgvq8yGP5xWzDe52ho7ccX8TcSGMoBaZEww4sJ1a81dG5Hd59YQjepNDbHFPkprh5h8nYqNFesR",
  "key18": "5e9ThdfKxQmZoyTxruPDBr9dALMA2XYU8cXtX5dtLvoi4i2QZapNCeMV1mrxfy7Gdtw6Y4mbwJbZDLFv2ap2diDe",
  "key19": "4woqfMz8Red3u5333xiWz1quBTiS1UGsRQ9XAZDukzweaRHozG4KKn4j3X2GZ6kMiDLQC8NvKEjqVWCR21e9YCMw",
  "key20": "3FTQRL5ZuJh9mGdapnnf5Gqmbk7PJSNr3E9yKxFMY5jpiRraVUh9ZXQ7JpoCDa8DLJM291pLi9JPgtTm799Xy5Pz",
  "key21": "3oT25ekZC95nFdFKAGKiz4Z2cxraCm1pou5ZQ6o88hVLj8TZAP8tHtNfaxEYQFx4meCPPoAXGkH54Dc8JckiLkGf",
  "key22": "4dehx8RtnkNZ5St5cbjBTL4qoDQu3QfVZrhzGFM3bXUy3qwhDkpHVqJcZgBsKExCjjpfbnB1BggnhoEUkh8ZJ9vN",
  "key23": "2C4L8BWSz1fhQEk5MdyNCFXNNkNzFqWX8MpVKSLTkdTqC8z1y5X5yEer8SHznSfCj4jKreLimPu1vnVGTwUfuzng",
  "key24": "2qFVi5Nb7qBWXQUUqUdW4pzmdpg5w6DcGWcgWu3mxzorPjWtPyo89WQjKNhBdeJYKU7fPeLkyMRkiJGAennuDkB",
  "key25": "3XjMBL1vEuYHRcePVRiXA8S8hbbTvz3kcypgahjXo49BgwYoHnapS4ms6xX32m3xcssUrqLsjxiWVC1nNnLbGRqP",
  "key26": "3DnL4hBszEf1ybPgwNSgETMK96zaozuhWR3EXsmkR7USkJfB4czxXPpVbXkPQrkGaPTGNwuoAi4HBkbekQqGHEgH",
  "key27": "SmcaS2WB5vDRkiSUtK2fu4GmvCACyqnK6weugjMPBLmf5LXrtsL86NEHniWbFSynpLE3i7tJDcbnYbR9hB45E7T",
  "key28": "27bDHMwYu4RE6QWpnoqmpDtd8hggWgLhkGBc377MgPvcYmUdMM3VivWjN2fN8NfoeBrWTkBpfWThSazBospeDton",
  "key29": "3gpTXjQtJUiyh1DsUGdCurdAdie3evizDbfZCmGC3UMzCFoqthHAgBQuAHsD6XLKThiSvnkvhvnG7htY9SvFe4Nm",
  "key30": "4sT5mdAKRpwRfwwDdm2zBFMfV2PJnkv8LF74KwevE7uqaXJ9rox4VuoQ24ijUAYH9LWsopLrM3LwBreytTnUkqfD",
  "key31": "wdGMYy9DAWsX6rMqvuzRVnU9u9JpVYXvFPRQoAFnPk93wmGhqRgQfd6RVdGd6dBM7TfG3saVc2g7ShqrkBBnAxc",
  "key32": "4wVNZXaXzZtzkEzjRSJpZRf4dM5j4cs6EHZSxkqaft1iqkbTo8np4jHJsEPxrfsFgMrtn48F5uMbZiw2wQyEynS6",
  "key33": "5uPraVUkmCaX22vo2cHK4Se5paoBJe9dmFMLhsfa3uzgFvA9AKD15gLUQjZAJqTikS8hptDAgBrjx9AjrGs2sccr",
  "key34": "4yV9xH2VW8afcRj1Ripd9vftnSHBBMePs7cZCkcp5o1Pi7e7xhVim7p47PaaJ5MztWPzabNMgCvw9nV1HTC4xTRb",
  "key35": "2W6dHL6j3mR5x8pAmgwvY2zA7qQBCB6cbN2YKs4yDuAHzNm5Z2JKE9cin1LZYTuK7tzF6VCdvhCGsJFtXjyrZcEF",
  "key36": "3LbpJgVZdh3EdNFybcBcxa2s4imjJy2uPbP5yNA5hWGmzNtzG6kAQekywNoMhaPrdyJXLNYRVkVRYWFK25TrLY5n",
  "key37": "5J6T6ipDe9xaMfYfkXuC7WQ1LsftsfJSg7s5xEdZKjkwfrHvNpBhPRpJnTuuLYJ3xuojFMPwEJYLoLR6HuqXASey",
  "key38": "PtbqVWPk2S7eUc7EuX871zNgv7rN1WAWjBEvPcQQeNbfzCqhfduhxmf2399sDojGrUpStS1z2ywSiPWvcZRQg7A"
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
