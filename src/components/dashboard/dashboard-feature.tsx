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
    "aNx6MxcFuiSpgS5UF7y3aPxJnL9f7PwRJPBJN7jYNjkvLh4fzZ9Ly2VeaXcXpAQdUrMnqAodzUixDAWiMvvkJaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zRFYwnmBBkzJtvKWqRF8m22tEkkQNAU5PhgqYYKBgXsqJ9qNsZE6dF2xJP7ePqKDPWNkWoU5x7tnFPZch2YkaSD",
  "key1": "eFcFUrhQ9ccsHH1jdqL5FaTqRUsa4ZLcDtkytDsWhXdWLBSZaFhKM7pjm1Epi9WXQRn3HbJsLxJdCv7dPwtf8bq",
  "key2": "5qBSTJHzmDVSAvQxnkMpcgTJbMhJNmPWDJfUuHY2nyrfJeaTg95vr5UbCosMdF4dfCYG2ekeH15115AZ9muft5Zy",
  "key3": "4PJx4WPdYZAMQnBCpxCFCFwPuPYrCuxckCRoPqMgHj177zRxt4iQiGgvTgGMBZJuEKsDNtL8iBzRCZT2z4WaVSme",
  "key4": "59Y9jRoQgifiVRFQ3fcq7xgXQAuPCmLa95DaaShuRdxoURUeEHEob1DLRDvzEDdYWZVte8jpHMBoqdeKrQYktg11",
  "key5": "5eCrS8FGdsTCwarkrshmpSAwJ9M8Wua3cWutAh3npo7ZhvuEzpPcCqRgJeYVuAfkbyWaJwLD3BQUYyZkhq4WctUg",
  "key6": "5AjLVG96qSxXeb2nvVRd7k6AaNSJvamZasEsQVijMxawWUufthY2bfzhNaDouRzYWqfTriPqNfpmtkFjVXXMxJfY",
  "key7": "4cWyY1jsPFEf7QoAyivdrL7UShLGxz7zuyhEUKtH1jPRtvNwJZDnFp3nK9Kwt5y6SZrCSWSRRDk6ccp6XKQuoX3h",
  "key8": "5CHRpHAc9qnfU7kRbK3UxepwGU7KQRXJ6poLgboHEaYc49XhYpmbsHsjtXyap59wak6ffUbPmh6EogcoFxNvChKH",
  "key9": "KNcHgEH34vPD6FcCyGaBxtfh55htDbSThx8B68ooxPAP4iXZWPwcixYTW6huGuJCcuZqWpjw9RtE4TfsZ4YaF3g",
  "key10": "322VGsgMhnDbkshrtDTjMiRYkakjtVZjP1iXW6cYjJ9xLaLkShvr19NnsXLYyMgYRuYkkjrUj6WtqNyckrc83nC9",
  "key11": "5cGCx3rMy3mbBuBKDUbLNCDkz7ac8PR6Dbpqvjcxy1uU67PqMqoNr7hF617AXwsx8mZP64as5w82Vgsx871U1vPw",
  "key12": "62jaG8JEbEhTmm4VfU4YkjpjGhNJVPjdKBk1Cjto1vkuRL9Cpbjimdi9tF1FH479VmBmVPbn4khZEFdyE4siito1",
  "key13": "3toQfp3XeWxDKwsVZX9fg4EG5heXwSVaRpWhvTEDBxe6T3nChvR1JPer5JCbE9Pbzds2UT5m9PdWYdZvcDohGKLm",
  "key14": "3BxiQftmCox2vyax32mbodGygYEe3UxkT4JHQ2TbDJ9trg2vWtZp45UJLBNwrM9xsPGCWj4AznHExtYMy8Vmnw3w",
  "key15": "4Jt7d42EK1jSSYUTMtvqaKKXx9pPZnKv5dty5JxtyPJvYUjN15N2EE97uVydGngPeqHXPt5odgGkkdyNyH9sfYjd",
  "key16": "2xpgWLTbduyptKFvgaTGbyaPHx1BWfiQPYGGy1rjn96T6enNwFpaCb9cSdzNhtJWbuCi6RiDWNs8RuvBJxERwKo5",
  "key17": "EKefb1VATMRcPXkmDhDZoch7QxHKymE4NiZ8u8ogjquykt38UNjaASkt4dGpewvnD7tLqaJJa2avsXjo5xNdzeU",
  "key18": "nYjYG3CeugUjqWyNcuo57vfNh66YaXspUSBKK37cD37QTDaH23wFxLejgn8NEJJCou5MaHeyd6R9yTFoEqd4KkS",
  "key19": "3GcA3sHfb9neKZWSs4kEuFvXxsfhufmdoD9e9X4XaJUqw9w6aEgxzB1DdRCmQ86Ugb2Txycdw6b3LQqyfRsLeCJE",
  "key20": "5gUvqeMhrWy6sxkgsEa6zumVnjXN3JnWMxAAbQ1k3daXu5yYMbpebDywRtjRnaHTeJAJZVWa1pwtQwv9pEgEqM27",
  "key21": "3qAyQMhh2cJzynjTQXkyDhNRYehFo2r6iynanBDNN1YxzwG3d1GVNrb4fHv5cHctbKA3Y5D1N5nXhi76M7Rzmpbi",
  "key22": "3WTHB6R1fNmD5GmisAL6tbwptPRC7oXbzi2kM6uKXnuJZHefkBTYCmHgfCYWcuoXPuc8oBiHug4qHAdH9vtg8HmQ",
  "key23": "5Wx6HkJLsRq9ptzzAiczuhV2dVjFyV8M7mpGd2KSXwtbY8V3KFgmE373DGFLPQ48U2y2mFFsRQ6Pgfbcbx34yDeE",
  "key24": "23qnqqndU42J9RfXpYsKW2iGvs4V3PiKhmayuXGxYkQJhZbzUFqBTkkzuJoTDbPNYghXQP1X1QMa9vb6U5kkzoYu",
  "key25": "5iMuVsQSHsTanK11ta99vqFW3YE87qEcugLPG57gFxKQkYAPBakuqq5LdSAU7pgSJFRsmAV7qiwSQbMapB9W85eJ",
  "key26": "4A88xD1YZhbiPz1vJRYSJ8S4DSPH9ak11dYRjqtA5cbGBekXWfopszpP3g4bfQYcbn3Xjw9ogqdYzKLN3od8krUX",
  "key27": "eqA131bJX51EYrzjkahnoMiPqWh9HBgVWo18wxQoLwv96nhniwneDK33dpG8ny1uYMzHmSdNnDFSXnCp6hnKT2E",
  "key28": "2cYzGEMCewYsyx57H7KCbncT22w9C7Lz98qe4Es2f9yRGbiXHgySjbkMRRbCQiHJ7KYSeUYMDAvsh8ciAw3F9UM3",
  "key29": "3SDTpT6EZAK37jnSSq44GjGvfmH8vUjoXBdJVN6V1mncQTqzq1x7ruSjbbfhXLbeKYJAdgSQupRUC1nENWdGbcXW",
  "key30": "5HChbHqcrTKu2GVxM4WKdVoYc8zsadQmZjznMT4TQ7CtDHr32nf4H1mpFYeLvwxHvXMHiwcVzGmm1qg9pYkkwn6f",
  "key31": "21fFdHfwYeErCngJT9LY3LDC9rbYiQ1dCxkzQ2xj1hNXVoanYFCFtsajdZoh7JyBTyLH9ymB4rtfyUuU45UQjhzT",
  "key32": "2SrjKkgKdp1RbK29swasLhBVo1AFmiRkUdEhpevuNJKgBpVK7hkEX6JQ2jnD56TErK746Zgz1sbdgFuENtT6N1vi",
  "key33": "4yj4PczD7rSwTJ3UxXEV3Bb37nUtLhcVxx6TiB3dESvhXj8YnffetFWETzRjinRyhdAfWfe15aAoQTv9bEtL8mMn",
  "key34": "2sm7KhxVJ1Raw7VLionFt85Huaxn7EoqDU6SaAKvRcZS7pcZweC9pxCTemF8it3NHgzBRxG5F35FAMr6wBjh5icX",
  "key35": "5G5GUVCY7UGG9oUyJZrq32Qp1e45kWVK9FXkxSCQe7PjN3QhrRVTME44QZU1Ev6fkfdLZsBX4G5iBNQCRZqe56UE",
  "key36": "jYxmCbgih7pj5wG7Q2YHfguYy7soGnSZ33WpV6zzf2zvhKc74wH9d7AwLeVZo14FGRFqn7EHhgKLHMRB14awirb",
  "key37": "5GAq1Q36A5doP8m38Rw3TJQ97CFw4vzWHTCSiaawQPy7g6UfmJF7vQ3r3wcPm5UJ3r2mTYZXxmtf9YZRucwkwyBx",
  "key38": "nvMCe5WGD46Yc6hjguhEcy29CYLPc7NqLJYw2nNbbAdWi9mR2aigNMRQPv5utYS1dswyEJpGigZDd9s3iqbk5tp",
  "key39": "2EVq3tAEuqnTsnFp8kxYz6ENbVEEf1oLAsYK69AiTRD6DdRxEsENqBbP94iimqX68DpNwsWues1SLhPr3rxDQqXn",
  "key40": "5KDWfbJTdTfbDkbv9XKEj93v1QDMhsMNTNWGtWhZNStmn3aHRw5RdtDfc1gwHyUm6v4fy3s82mQTMbSJ1TbdaqvT",
  "key41": "7zAboZkJbcgzQVL71FTbpTBnSPYDQbgVgZPbPqeUDyBpkT4FX9jHGdMnviMJvLyhsSzFo7rCrUvXmB3ARZDZ7eS",
  "key42": "61U779sgJJhFB9dKBg25XSkgWdLXMBunLqizcXE9HL1GpjFWnjyn9EPuHGCmb3MjkfREYhhMQDaUt2KfogWvLtZX",
  "key43": "53yefxw7YJFVCAkGHMrt8CNjzk8odPh1cWDYRCEaGdFVyLikQ44iaggFGrGjQdztLLhXxFKa8yEue4smJujQLBRR",
  "key44": "2GeGtCDCSZzaU1QdywoNTzqWZW1yAE4zVMbgYGrThRV1nzqSZr84hYDCPXphggrfQmpPDkAhPDfBdLGA85vKgstB"
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
