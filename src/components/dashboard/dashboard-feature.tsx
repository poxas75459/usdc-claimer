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
    "5VHBQLjQMTtTa7MPcBEG6jwSDUshUxLo8NztUEZwA9tudQQLKce9G6X6LKrEmqe2XRrABVNzj3niioj5QYZa7Y4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nHoVbyYUtLLsCJxePUnNDz8eZScN9thGJNApRYgoP1hQwoj2Cn1vPjdvyJHoZcAGjrYseN1wPQyE8Aq4DezbGPx",
  "key1": "4Z8nEbqPZnDUpV2hQDhwZPkcPRdAFyCLzNfoksvntQrMNjJpEqhWyYYNGqTNLTp2aL4E5W4nzWHEm4ozRBk4Ue9R",
  "key2": "5ccfFciT3cz2yg2gtKU3Xm5eBCdDDyDyMs9eqeD412SDBkiu8kU8t2HxjJU6952wKjxgzgWyN8hC5q1wuUMJetTS",
  "key3": "55LownF9neMigY5mQniWT9uitrhTKxXbuvfqFXYfZbFh7qSrWABjjc8tLXPrCvmm1YxdfVLqZcx9QsKmWZkZ1Xfb",
  "key4": "4FRUYZTDcCfT8v162AzuQQboycGgSDdbvRu4iqNx6kJsMaxEg9h87HCEM2VKt7eXTBydbHyANK3E3z8Rweday9tb",
  "key5": "5RaLXvJjQyjCHAEBSnz8uMJi4jhQUg1MK7SzVbd9DL8JcTzG1NyY1jQXv2mwpajtmfNEd4KoDTKxKJaA8fFNxmjG",
  "key6": "4V31QgXGcwbiBZ2JDak96Z4QnEKwppqHq8zxXtjJMiA7asp9G6GVGVhrpSXpEGyKgMzpQsX1uSZRvyRkq9DtyXUN",
  "key7": "3JWm7rvqPrqAfGJ9dngeLvNhKAtsymCov5JkcnAYcycxXVShnuHqvRxHQ9hubawugFdrvQKknyoVwno5c5Pu2ZcD",
  "key8": "4hAUiadcf8LXGcYqMWKdUoNcWS52PLarrBCh1RiRZun3eG13Ki6buH3B84jVLnoEJA1mXLHgWVGRubCmn9DhSPCX",
  "key9": "28XmJMrhCFsCpFPXhYLiVS5h7k1mobQT2tuHXKYXM7k1JnU3Q9gQf1MGAhsFVYmFizSeHvHiUCjXAxkzPxkwh2K1",
  "key10": "3pYrAioSFongEsv4K8q1nwhEnpB2SvCqudTHpcpxFo8vf1FYpUfuofAnmV6jErM6U5i1TTLyxmxy9CisVh5LEjmc",
  "key11": "5Fxq3Vyv7etTVSR7CmoK7tQ3v7FtSg5T9hSyjzEWwbomDabKMmcEo3tXpsGgbURcPKfekcAhcSLjGtAL9xkQWJNw",
  "key12": "3zR5USoPo6rXNw2VLR3y7wiEXTkUVMT393NZxRHtnrVRQ1oDYzJw3r4KqrcGkF1sHHSrbvUCpXKZ9m9qLrurSwyB",
  "key13": "2x9q4GjwycBJg5Uog2wayvwWvCKAGHfBoe92eaCFqLHSxJMuK5gR3DGrrveD64jcgrmV3KR8BAv1hfaYcL2WRmYa",
  "key14": "4s5jhZpeMJo16SzvusKbx2ZyvJMtun9zjwiJMQqS82Abj8op3p5AYqCxR5bHxAEYKSpdxzgV3RLCcVJje8QNooC9",
  "key15": "Y3wuGN6xFggeqMC2GF8CcU6UByqT8SW1o688s5YQTwa5P5HxccN39P2X2AhBkomvBtRJptsjSjc6qaPsUisJJ9G",
  "key16": "4oh9kHSyNEBFJyEhBvji4NDWcCP1bMXhZJjW9SMiZx6Ar61Qhd6cPmwcUiPKoKyZSp2KB2SnoLWkVfWHw8p3vjHn",
  "key17": "tRNCX2sWeVoUmvP3JpktMqHFvAn2aUv2UUZKXnkVHCN4ezCKcoV9BxYQXWWhrjKQopg161EWyQSn2vmY7rCKwUy",
  "key18": "99Qr1hkR8Zb41EpWdhoQiNZu8AgCesuRmSjv7NNDQyrUp3n5abogjr9dzLoMG69B6wfnPXxVNPd4iP556px7uSW",
  "key19": "22vyPJetAUkiE3onYqWEFw1827At4aCdiCuHsQB7P3xGQeQAPCfEhdj2AEX7pphvBd11F7QwizV8g7hTuGEd2db1",
  "key20": "37MCfLRVFSBDoBmnTaXupshEcPz4jRtXmrFVUc3MBHZnLun6SRZTfPsQ7jkyEgdUfQLDDfqSm5EBryBABKushxKX",
  "key21": "5dkTA77tJ4wAtyBWzrQP7KdYZwRXaXXwxHQ4XY4ceGuswNiyw4dW5HwcyUwfpXuRf6iEU9ppTiVGiLSMSiykDPcD",
  "key22": "47joHtVL6BZN7Eas3xBie2n6rn4rHBq2SQgVE85fym7eJtHHY8zma6bQq6P2DE6s2k1ZfDKAQ2oQ6uSezTBfmMgV",
  "key23": "5NMe5u3ZoPMyLxNmBpBGZN9UiqkSUY6pxp2xsAZxBQfhJF1CG7n3GRXyPSRAP6UeNAwp9HP5NjXYkw67imEiU9L6",
  "key24": "5HT2wcD6SxX9wScksi5n4J1gy6iaSonaCahdXvw8GVaRuqF7yehsyaEhEer3v8s2uX8aZ58Qk4vTixyQUsi98KwE",
  "key25": "5DqprJNxFPkFKAZFPaTyBGsW7UjAq9TTd4aPh9CsYBt26BNLYNzxcavyUUYQCCoezcrxtAH2JdeP8ufGLfRLZ7J4",
  "key26": "Afg5464o2ePdSm28qV2KhjAH13s78NFkPpwdpJ8y6HeQHF1JAtRVjptVSfS54yFdJsYXc5eBjqr2vAADihpJ26M",
  "key27": "2HjSBsnNEGQV8CJhyUrvSxUQAJf4mfuGjhjw1jB3KWB9BvHbPBir46a6WC85UWaLuXnfBRBd6UBuBm7Euiq6Gpo6",
  "key28": "nsmBMvbZsP2BTF6pYqs45S1PQ8sGDsSmAWkM34vbTouNvDHkyZDibsU7qo1xP15YpGco194BTApoNoL6Mz2RiiS",
  "key29": "2dRovqeJftp6y6anGRsHTRbhKHGaTDKe9UCcEFdZfmdRz32np9WXVwkZy6q8AR9x9Q7pbZF9XrBLpXRsoVZUMErQ",
  "key30": "5Nj6sAMe2HybYUocgn9XwUnGgMfTWokDHQNj5zMU6qdYyBNNHDAxuQw3xdhDngtWZa56MkqGbRLKJDX1uVVahTxA",
  "key31": "596tbBnJQjp9ezWabL6x1psuqWYHu6H52iZ8Aa1aUUNWpForugkYZhHeu1owLx59oedoYRXP12ztYfwUXS9yvU1w",
  "key32": "3zD2sP1npVVFCMfxTcZ5XQRqQiUiBQBkeRSH4RqD2XFXEgQcVDumeuKs5r7DGuKE74EqdziMn1Rvwz93FWDbvweE",
  "key33": "4vGVaybt9weVrY4duSVoVCHPPrDyboHbdipq6fVvn1nt5h3aNPRtjUVopYrrpenhNJaGmxtvG4S9HnG4bW4ZgxQH",
  "key34": "4RQXLgAkgTMeF5Tv2ZHurh5WGovBdBMea3doY7uUE2wDTCACcCu8CGERqECXLRcHbL2fb5eYAz3EazmvucKF1wVT",
  "key35": "dg2gCP6xuxUXDpRZLAQ2aVEKGAMbER1Eh6ExQPY53k1x1rk2ifD9Jhm41jmXiF7MZnXht8LTJ1uruFkMmVVhySy",
  "key36": "i5g6Zgy46fJy7hW7bf7xQKqqpGwwCsXC8Fjy4PpGUEBRzJAwEsTcX6USUpoB2T4eZWs1DMju3xBxknJCmhzAXys",
  "key37": "BrjRAo68hxu558sUga4rQGgKQ9Yqd5Unv8Xq5kq9TmShCU37uqv71S3bdUfcNLDqeYva4xb2Kaj43nyaNr1rkSs",
  "key38": "2aWd3shi9QtwhhdoHUcp99wHkt2NkZTf25Bskxsa8fAQQxkUn4Lu7W4pn4My2vjNXbJvTcTVyBBpW65YCgFXtoUX",
  "key39": "4UJi1aKRTPyhXyZYFA36M4x3KKvcrC3pvu5pbdhniagV9HrAH8bNGrAPjZgkSD6C85KoyaFSq6G7T217u4Ds8aYZ"
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
