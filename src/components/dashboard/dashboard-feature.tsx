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
    "4mpzu2qzwHnMpQmirZoxEPEgpxtU31RMB3GD8d5LVdBWBWd4MjkqBQQJV7Hp7qBuh5WCnbvT6d85Nsdf3gR5P1eC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NMtrMGxyutpaeCHMKBNrzoDoaCabBXJ4ZmqHratxokPnz4QhkmqWUaxZTwLmy54VHggRYBTiMLBoZfUiMXeq5ja",
  "key1": "9umbZJyFJ7nR4CnUaefKfny5kD7hYeZ6sDJbkFVKV1Pe8toTu9pFsZUTHquz38GznRRYgyU4F8itK1gwe2hBUrm",
  "key2": "5sAYdm3sdF3YnpZxdUYbE35FATVG9PD6ACedGciPc5XdJyhddbVHNJ4K1Bp6cozJ271TsNLjSQo5cjb6dwvhxY5j",
  "key3": "5aX2ucmZHPRaq3sBCY74SHmyKQUh1F8GjPReKkb2gGFdtGR6EAhyUaqtbWZs8mx18RQpkes9pYHxTxUeAG1uVxca",
  "key4": "LRFC3TVpYxUgZDTRU8UdfGoeiaMaXQnqaDW9qPWt9oy483qnbyXhPSukRRFT2pbf8xGanosthjt8nxbKMHyjJH5",
  "key5": "3f7ByjoPu3jUHFZaYfxcTTvsitxRY7eC4UNaYGmvjULgkrWKhrvpXtG48rsagAHhnTTYFHWcfBweH7aYjtkvPGAd",
  "key6": "676uN77tshUeVaKgPLhuc7mgJ8qebT5yKMW21LLdADgt8HqF1BnMAg4yY1ZHb4dYs17gxmqDVGYUvrxdvPtC8TPS",
  "key7": "2cU81JRt4h94EyNdhKqiLhCihVEpfgzDJzJWiUFqACKdwbiG4Ccxfdb2idpMQYCFmGFqXL9q3ovAibWHYXrcXkMD",
  "key8": "yrP7GwjJkw9MAGvDnYWJ5yymUmCUByj9L6pJXAUcBGPM6Afwzr2Fqd95JY2cos9cQzt8fuWosd9Nzh8kprRYTMJ",
  "key9": "224btUhBUqEamKTWoiD5Ht6FZEnFoDxZzGtD2Kmx7m8pPFDHqo1ipgRMsD2P3eo7Vn9YjQk94DtAH6gRhggk7G8E",
  "key10": "3fvxnxXkx47vD7gSaEKK114qeDDaZAUB6CxLqwc7hmSqFSxUfS6hbsuvMLZyqsj8qXhGkvBhFZijTtcxd7Axct3A",
  "key11": "W3Y78JNSHYqcu7PrAHpomJc4TCkmZZvsbum5s6oAVbuG3RJbpZdxEayWghkVZ7eDj52JFgvbsu1BvpD6AtsrpMJ",
  "key12": "4Z4MfDRRupJjn2mrooTZbJPmq2oJBND5PP96xRNqcW4ByvYAAThKx7fPvHmM6wqMtQT47WK56XVuqAeWTg2RYbM7",
  "key13": "5KEQG3HaV7xbAQzZ2rDJzkTPLjqBGf1oh6vds8YypZj6y8D7VtAbcSFdbVK6s5YYcPHF1yHgB2FjG8BAmfeyachb",
  "key14": "sj5v7Ykp7grnSrE6HvEjetY5bC859R6SbResNvUjvnAAUjigQTLEMAZ2G8yUqE27A1JzZ97ZZG8EVFJJ2ViyCjm",
  "key15": "5DVC2iuHcz59zvGr3PpD8KEaD85dcN4HJLry9scVSLRmxJxX1CEucFxS29n8uAiu8qEWYpXXMHFR77Kvjj3Dkxfz",
  "key16": "2Sn9UCg14zP4uPZDVXP5Tdbi6RXqJRYFV9Zh9oz96ZBzYwdjYpdDGAaVZW29R3iYBrJ3AioNFiQ8Dz9ZqQDYwNF",
  "key17": "53577kFB3J4hz32FRa3JPmtNyFzNFh1VXzGwVPc4pWMW7WGBi9PsE12bnN4AigfpotVuGuPHVfcZfxcfhVupiyf8",
  "key18": "52Ahzjhw5WMii7VcxKTiXE7qofxvKNLpQ2Z3GybWo3wsFH1MWdj7nb99BwDKawP5LRNaifQziYNqcUN3VmJAWGLs",
  "key19": "2uRTWnhEV1dQswLysAPdfefudUtZ71uzQCzn8dz6EVpd9By4ieVoqzEe5KDchSfyXwH6zAP7U957d6uUPkeFiWnq",
  "key20": "1QDdm4qBAJ8EnRqnMwq21ethgDZoM5b6WbcmeRDrxXtP8FEvVEhrH51fWNpJstNignjVBwkRfVyWuB6g2KUehTS",
  "key21": "3JWShrsZXdKESTgjw4XiN2gZmN7ZgtB1UiaYX9HikRSJyFNhAfuKNHhb5ZV2C9Bz2sswCUALEMJSCQ7dh5mRdr61",
  "key22": "64kkVYSmMe8JMetJtehboS1AiYWsPWs2idBYCbKchGEr1JJ1Eaa5Gvu7U6XSMg7DBzciwEudr3R1Maz66jNJgYb1",
  "key23": "3X61rZSfPoGAmxZqF6HcfPsLEs3FvBUrEXjcUuRvoiVfaLk9p44MHtCwambZn6ZpH49Bmfncu81xob6ywTv7MXBB",
  "key24": "54FHMu4h38wBax2kZNJBE8H5Z7DKMTptZWa5ZrmZ4smwkw39WouYhTRPx44zC4cJH7pgeNE9UrHZ7HqJLUS7SPcy",
  "key25": "39khg9vr8d16kthYmwRcvPKKamBg1uXeHHvwZfj3oq8psTvt9KdPi8mFYfjUz5PjiEMHRWP23FoC791t6HCDkrqi",
  "key26": "2nLgsAsAUvAeMWvhrzJGfSEZzRx9CCPrCc31TUtZiu4Yd9je3ZKJdU7F4S8a3K8AnW1Xfiq4yZqRQmYdFYjns7oH",
  "key27": "2pAkWfWUKdwTs1MzhS4dqKNQLzjuoYc4u9RgUPJtkh9D7VR8g75ke4eZVg93J8XKbeE5pA8t6JoAoPQuhwSM6W6H",
  "key28": "2toWou1xVnCUruPYpVXg1MYCMwYe5RrhWiTUnH9DHeXSSimeQw8A4AGmzEf2UGm9WN284pB7VZP11gVvf92sqotq",
  "key29": "344BmZpVcedAbeoe54cjVMYnN3vpvsLojBMUCAJwpbRUv6PrBixLiUUVi32Fd8foydmAnvWb1qXHFh1RUhCAZQtt",
  "key30": "5kWVH6n8PAsXP547SxsEU5PoyMoqspUmP6pPNxyGQ1bSMtp8owRnvjnLwQcn1CRJtPvuSc4vpWhZQy8G6sabKDpo",
  "key31": "44vHC5MS1wsj4Et99Kc43YSznGaYvh9E1VH8TgPkhWbuX45cbctLAZTyuYbCNfGysyoFNgEE8b7ZwHya4oW1C1XS",
  "key32": "2WK3X1hE4AkR4WjVbp3imjriHmKnC22RcxjyfU8sULZqhDnJ1FVUkZnmfDbHTuUbNTBKkE5WdwMbNNmnwYcB4oD8"
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
