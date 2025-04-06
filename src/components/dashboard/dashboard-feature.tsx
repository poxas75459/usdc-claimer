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
    "3eBz32tHGZaY3t52QRZV61qty4T3LKRKxG2zp8Sqcx1xMbdsFdypzn6unfT1qgrDerw24FipWGZ6ZBnic2nkYduQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GRqRKrUB42Jmr5zxDYE7KpdaVKxdsJE7HB77cb72fHFMRR3zTUxZcS42jBJrj8fpwq4PgE6mEKqHbKcVSSW7j3G",
  "key1": "CEfasTKbYnqSb1AFBNjCdR3ws2UxLtdg5VEFhYeX9jFmGt29RHWGSKYuKbF4C7dUnAVh4AmWLygA8iFjGvL5Xmj",
  "key2": "4D31w4Wfpnmec4eLZ7SZec3iy6JxBizAEB4zbkJgFLoVS1g1SXoBvGwstJahEFqZmyMTk1cUL9x2v3faTb45i5cc",
  "key3": "21fGDrRFF9PigoAdJoh72fnAtiTtASYcMzMtXBqMibeUjvdJtbBonhhtZEzdYDuCcBuDPawAVovxnbMiAQkfxeZq",
  "key4": "5pZ88atj1S4ZzRfs3FACbS7u7hwgp3WfvJAjF1f4qGGncwAtJJf8RK8VXp41ZuPWbK33zjxDez9Q7wuiJ2GH8VAG",
  "key5": "4DCua46E33NP8ecAxBvB1WVjMSLP1x61Lp7fSfsjQMtboyK13EikJMT36A8tFjbPfybwQ86A5frqkdRWAsBKoCnn",
  "key6": "4sgHeGjpYxsx5DnXiusdHkbsyTynKncGFCYUSpBP8kbYZSAoRiCo79KCbNMaJgDr1STpbWsa13u5HcT9xFpgRtH2",
  "key7": "4bsT9ZcYQ64Fy1QCMjznMcc6FYuUDeUDF8pU2D9hT1TfJUNQhk5ecbiZDxAupPyHf65bhxwAGSLuagXpaiUNLHmF",
  "key8": "3GHnxxViEeDY6k89Xjkdhjs3uJ3Exxtf51koo7AmG781Mcd2A9hf8xQ2qcY61eibsk4TCTwZ8STfT2eULgeCp2Dy",
  "key9": "pitHzrH2FvqcfUowsGK28QX31yGxM38tQdKykR1FvkeMCe1etLjiS4BEeh5fbxWFGXw3wrttDaqEHpbGuhUmz8x",
  "key10": "3JmJGnffAtgvuNVgxiiULkHJda9qS9UjYSwNQnsJos1QGU2LTNv6VghQLKxt7YndKd96YtnK8NF3xRPho9VKACdk",
  "key11": "5eG422VenzhWkfbgpoLBnBV37eMUSKYNyJpvkwKLuhdw7WAkxDp9gavLUJtmQEjrjBzX8JcB8KUJ1X24BxfJWSJu",
  "key12": "hWxcqZx4Y7n8mEt2KfPuxxycJZeQz9r17YLGZa7hFoD21EF8B8ZrJvv6Sjr7N2fxfcDHuLh7CbaHPYosMuaocQU",
  "key13": "jJeZtpcijKrK5fNiwNB6XJGYcKqQuCGHhw6fRKzB4ARwd6NbB1V7DRKATpv8rAgdy7D7WrGgJxXiLJA1zi2Mcnu",
  "key14": "AqGF8z2GE5hGeocNnTqCd15EWkHpQSccQHyvy6DaRXSeunfFzgvKL57cDKva3U3rb6zf5gSy8svVeG7F71J8ZNM",
  "key15": "4yZXiRhzErq6RkE2d5uuxD4sVzwFZ8TNKCxNfgZWLtEuC1iWwvSRMPFQfLS2YotFAZi2oEuaQYQmPsrCg4qkv798",
  "key16": "5Vq1DoafM1Sr29nuJdMbnwARqMbbaWtcxTPP8TD1SeNqes2TkSVEianp6dms3cZKR9o836ZTagZryf8zdXxmh9pG",
  "key17": "5EV4hpxqxJ6fsqoHV9kQWTUvgR8tSZFwR78kbZbEQVFgAG5qBwdoCBaZjnwHjUND8LyyqZ8Mi8ykmEBy95ubuYzk",
  "key18": "2kJZMmZJk2ZTr8dnPomRsRXU98F8q94aBC6KZT8dNeUyPN3y45ikyHyN7QTLCSUSuA7Px4GyXZUzqtPFqCk3Jgd6",
  "key19": "4Jy4vyT9Ln8jd7qMBQ1FBT3Fk87b6ZGGZ39EL3taXqJjkPRN5pdWfuwQdnu85GWHK5WSjNcfYtNYRQdZe84Q55Tf",
  "key20": "4t14UKuPW1MMFq9sDz1cYADFTRV3LeDEgzG7whCh2cDbRhLVJvpetDsmbwrr736unc8pwQU4bggoXuK25CGrpc9v",
  "key21": "2uRCqxLqV8JvjXHdDTDG9gzsL3iW33aV7dXXZqVAHRZ5MG7uV8bNoVhLisjyGTNLPqhPkjGVw3ZANA13Q6qH52zf",
  "key22": "2yC5vg9Fh4nir41uBDSYdWEAJpSBDsuVLwAfFRXr2F3kfgYgd8YageYY5oB3JNLrBjirYbYNfEq8AXjzo9vYc6EJ",
  "key23": "2yJJYs2cvRJ7zvHgkYK2sfH3R2x25qixZx58hsGjR7gtd8GTKcJCcEySBXjgaS2RJAdRaHrnUqciAAWTFwRSDmXK",
  "key24": "T29u1DW5LkLkuPRp5Dr28JSVeTApkGX9fFzkC4HEnAhrev59nXKRpkUPwfFEjMH5SWKKwnfzJAH12dZPd8XhNcz",
  "key25": "2qEMJYU281FZv1UbpjT5jSvbZa5hUVNHQLGRvs5kY8k3nimkqEK5R9FJ724kU8fydRvBmaPs1wbPatzA4EQFQavT",
  "key26": "5jLEzkVjdrNEkJcfV7cuQMKEAmRXdBxb9Df1aGU7YDXuhwRC9KLBQEyxqyyo442SpLpU1NuY9q35UWSxNSoRDStX",
  "key27": "2w9vNcPsfbv7HEV5gnzqSDa2oukPvRp24SKqi5zfFcD3JdtENUeY7wmDVuLrhTPRRhmh6s3UffJFgt8rmwArJrnQ",
  "key28": "5wHT9TFCotazrHRG56W2VWTKqYFgA3nGCebLvwN7WGTst1yT9cPfviRdCQQTrTHmBdVcoYwttCeLA1yUNg2ystMd",
  "key29": "22FiJKHCF6pnEUwQToGzhZck3Ck1XRGAFT7LuZ6hmUZGT6kv1boV8Mvx3vcfr2ow4wppoXFLBG85RJ13svD9ybuH",
  "key30": "3LsoAWgZU44eZMCq53cX1yn9ogoMFyb8EnfTF5xS5FseQ6gfQ9ua61n2zXw5T818dsH55mqEJwBKkAXhoFhwVhFH",
  "key31": "4bPdMtek6UVRPRpkCtDxWMsEMiTyi3ivmggZWCinoncprpbtihanK3wU56v1QFBnCHM3mE9gJuLoff9s6PFmrwXU",
  "key32": "3xu1PUyAEJqtVptrVer4CoXnoYKbpnPF9pDcBYTDLLTcXbq9SKJwTX85TMH8fCJ7BtEYf5VZeuZn2iFH9SC3ypq",
  "key33": "3fxxRYo3eggxkVLJfaLDTtPRDy8gmfvA7njGUA5e1PeVG2E6jStJwcgSWXcyaA7UBedQpjXQgkAg7SVeZdT3qdd5",
  "key34": "28M8x33n4Vv1WYYY1zPNtttVfW8mivWitwF7yuSNbz4WGyPs2Wi4NdwzbMqpMmaHLNhxZvHgRpsVV2MVXfeRFssr",
  "key35": "3m85aPAGDNYS3EGS5kVMCr4z7KQYSaTQruvxJEDMW2863Pj1SeFTEU6YiVdrGx4sEPopXuTqLEmyJj4QDkYU2twi",
  "key36": "53GF8bQuSDcMgtEfxSMzay2idV7NCRycaSa4rgpLhjZKpQTwaQHHsfBzzAUtWiTDdtBG2EVaYYVfkThP1wuSQ1Dp",
  "key37": "28xJT5WpNByio8EA3iABa3QzMJdVaMFtGxtB7oUQo1rEjeqDH5MNud3HK6d1n3jmxynA9C76CYAVoizzxMNgsZJv",
  "key38": "mNNh25sQGas9ckeYbgGRmQt63hGXpXDA1FB2hVbwweFop1M9NxGLnYUjF2tdVAsDhjiJA3ZPRAc9QgejGFGcTbH",
  "key39": "2mxP98urHgSec8ofVhxphF2L4uq2W4Vkh5dkZWHGqTZ3cpaScP6CXQ6Ft4Uw3Ge6hf7wmB4SnRc8S6QzdeLyD7AR",
  "key40": "3zqHceo1693YuhXVF7g7RY6KBwXF6eEC9Ui9BzCavzY2M4o56jR1YmBuvwBLnJt6YaJANrg3SfnEn7k2htyobjN",
  "key41": "66DSAffF8TmhE312cnF6cMDekSQgfxkX7htorVmWWhKXkQzapbz4FgTkEDH66xftXw2kVD1hLcsxUUJiTydPMRSL",
  "key42": "3vYrLSGAbdMguDjooHuP6ap2dnLV6uu9JDC8vuLqsJCc8cRsgk2b5LWxWV27GoRRMZoiLomMsrXFL4iDDd3W88wH",
  "key43": "4vPYLsz4X9HE94Xh65CDZ397T6YG4iKZkPKpAby38ckq92ShQJAfWEX8iB7irT9wCtHduYfNR51XKmFQvULyeEWQ",
  "key44": "4AqVzfK2iUBbAPqMfv1Xkh5AwWvUeabjRwVcMPhqYa8ftLbGddwMwasZexxisa52iaxkAuQrKSeNi1yxRqsEBvrq",
  "key45": "2je4KwR1vS2Qo7AVVUPxqeJumX48jWGQ3neAvFtwBHFo3j8yezGtrS3DUCuxrqgRXB9223J2pr13khTiKHvNMujr",
  "key46": "4oufDgsUGKGQzo89dfZpTyKhH5x7ZiVe8VMBqNWuDyEyAkkXZZrfRjF77xQezgVr4ohyBVwgS3iBd1huBQN4wcE7",
  "key47": "V8Jwd1NyLkcxBrM5Ch7nmERm4ucJ9D9drDGspPza9WFLBcfkMxs2H3gosdhJFr9M6B2p6xdUwneYY7b7WHc2kEs",
  "key48": "5bJZ57uU3MRpK3xN9uEsScaoZKJd7qsjKGd4NsvnkXofXLr3MPUHRV1PzPYCFfAn8bBEqMEEFMCYZsktv6PGj5LL"
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
