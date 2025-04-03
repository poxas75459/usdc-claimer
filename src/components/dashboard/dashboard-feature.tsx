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
    "31CAFmvVNhUxKPQ9KoKxHZuL9xiWndssSD3vLwB4h9DKuBucXXUXUdDPe3v58BV9kC9oPXJ8Lq2NBYoYBLxHi3pL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y42w27g72AUcjgNb7PvtMoMaAWKANaner8ijuGdv95cVPKxoLRvyWiffawGyYGk46CUHhzpcSFCQARfvY3fQNRY",
  "key1": "7otSukiZSBBWyhXyc4n8XqmUkwki9UtpkBD3tNQ5aj59L7EHqkuifxwnVLBNzgKGa4PW2RUQqubjuq8fjpEpC3E",
  "key2": "VqzFNJsgxHYkePgM4kWJoGjHdDYUvnZsxBqxJbXKNucDeRLFwgAZCJmoD3i2WuA8KYSF7qBwSkhpUNJRuZE1wJA",
  "key3": "63hzGJNh7tpP4upnBz7q49yVgW5NkbJgku5eJyiAo2cycXYzpWwRyGecMND1WGyBG4WUZUevr1AKyUA8n9goCKBt",
  "key4": "TRjYR3jek5Z4SZokW64ejkJrgHXerjcqxEq3ZzkZsBjCCYcs4UcCzJB6KDTtpqgaVunzDrC7UomxtE12YNbH3zv",
  "key5": "3QbzZ8DtQvtB85ucwnVcvNKF2A6WwyZG6D1tUKeB82edeM3YmtNiEqRZcfamfArEzEecXk3t7zQrR2x4Zsx6vDK9",
  "key6": "2pxBt2Bq61Wq7dB8ffHsK9Xesvck2EmCap8CbEHhmeiYnH5x5EXAvmSG3DCDsMyCDG9QRqQk3GBn1vydnV5nusND",
  "key7": "2EXvhjVM6F3DrQc4yGVUmGoFfM3KTXvNhTHernFoVxSMiudV26SbszZUDopPY9Pvt7t4cWLF4EUUZ2BTCUKvJRkB",
  "key8": "3Z5RxtGDYPPsF2UCv7jaWbtT4FAEdcPAAiLCweV1WRW2kg2MZG5dnTp76jPWggoC1ahrrdoUgL73usGcKR4MBjo7",
  "key9": "3G1jBN2cjKKRcus5W19b6rirLdjU4dsVc6FmFWdm5jrhUbx5u9J26HrMC2qkwUcqwRwBbaKAGdo7X6knAi2geaGz",
  "key10": "2kxoqM6dhYiwQdrxF6Lc5tnLk6tvUYjU2V3kTMEFx2yRNaAcS6fXMCohy4FVKqY2sf8VSQNFh84RTiMye9ayGPXa",
  "key11": "4jqjHhkxiwZnhVQ1VfT5gG1VyPKjyjJT5J1F4BnSDcuBrWb5advvGa4rs68kTKTTjU6P7c96sxXYCctLBY3SakQC",
  "key12": "4P69KdhTbVtRiYeRgcaHa5f7URzbr51UCz3BGmWGxe25ucZrwinecVQCAy2gQ4fdJdERxFAssmjYfmLDVCm4M3sf",
  "key13": "4UzrrQP8kKi6PtUibB5qzgPGfkTPMjrTvDpYfQjvqrzKF9uuGxTQWiGbXaT1cAv47cM3jRHjgo2yqB4dmJ5ykPdQ",
  "key14": "23bYjLg7mYt14CGhbkHdrsZ4FUbQDxCK9SEHTY4i7fszRNE2syXRKqcRGZPjpap9tSXx4VWxQaZQ6uzdMjkGMswU",
  "key15": "4dSFmgBGqB6vnE517fqPTU6EHHx1Ygt9t88jTUei4cECUYafqR1mFB2FPTY4PuxQ5ECxGWTwzoh7tW5sP4mQcpDr",
  "key16": "23trbb4Yr9dFrsDMy586mwXoH85hMozfc1DMZeKjqdAbiuZCwzcZabnpHN9DTj36ioTMPmcEvKy2BMzBg3vEQqLf",
  "key17": "5cnMdm3iRSeJUQQwHwQfgHtEZJgqsQfc2GRdcD5er6QJmBXutRd8qJMUdBbyhbcqBdSDi4vrULkgKbnVKEPdkuXh",
  "key18": "2LwpMV5TPJtb87fWnqe93YMrURtHFS7LKvpmmtXHGFbkYyG352meLJ94QPRaiKe3NWtKVmYE6zj72Szu5zd3f2Ri",
  "key19": "2xkscavf6gnjTCkzuaPSixFrRfGAiwfYo58UGJxDra7fvuk5drJKa2nCUTdAe3CKiNP1tuuqkpAyjJT4JzNHcgz1",
  "key20": "5nf8Y7KXR7AJE7mvxyByZzEPK3kSpXbHmNYZVnbuigJn9bmL1gSFAvR44VwZeFkF8TmhNU3673hKC8Bk71KcZicT",
  "key21": "5uPaG7bUSm1nyXAFwKXchinoqS5mbrgb8yFuimKCQXhBJnWb127YKRSYsEdZ4ymwrrsPBVVJCDXN1kXjLsnvqbKn",
  "key22": "3oe51QKacEqKmqMKD8MsSs2LLj4gc1GBqW2ho9skpGRiiY5fVkCcH3vteQJLLhAMpSxLLBUeuDY6dccMFhp56kmA",
  "key23": "44ixbyXTT43CyqkGJvmUmNQtnZEqWjsbc8PtnpY4shJVL51UNbqagQpozPmRJNVjFY9c4uUPKiDuzA9gktX6feDg",
  "key24": "2ycPMZpXa36b1CzeYoJof4eN1VVMYoNbJi75UBsA9bj99krf9jcxoD5umFfisQm5Et61soXiZuw82ybUmGNR5DRf",
  "key25": "57j3XwmjtoPZeLC2G2nr5XVuMGG3ACCwZ6hvzp71YZRsu8Nrz5fp7wA5H2GdFfnUbBGLaHqd4fTWBhgi594o7Ta2",
  "key26": "5Tp42EhKuvN6qnnS5BK2BHwXg5r2fZYS18CkHZ1NXzAkWWvY4Nt6pebzZSyBpifEvDXiCexstEkPB5aYNQCp6zgn",
  "key27": "2BCwzC2q5q7k7FoKWbqzfC4S8pByBHm3c1rhrFBpDQCsurAQAqPirUuRxES2XYQL3b8rXXZ8qNNNDMK5ciLU3a7y",
  "key28": "3qKW3daQCyYEvvejnrkZPyRJYGrPVU8oWM9XFa7Lu9CAMGEV7dd73uGGatoGtzKRZ4u9j3ziEWwYv1QL8RbYjhFP",
  "key29": "4v2RJ11LezZwxEBYSQzhzSFu4yMktqYd2cePedUgcwwegaLxrPFRVYVvLQ81mk2Jm9Ky9azpL3SXxr7EvMReakoE",
  "key30": "4zADJHevo8hskz9CTEC4qXi5BTEFLCzcNTdSFmjWLr57ksjTTgdpmCEGgREMp475nX3q7rQDTJTGjLvh45mD8YzD",
  "key31": "4KycFfijMNALx4Xjc5oLkA72h4UH2MRF3Gq7JzdxoT3wqbYohrUukfbwAunXBC49egx6vTM98WHntrrQoBuRKJfz",
  "key32": "55dPeHYk7yK1TS5GaotYteeU92zRCDUHoXmjkhMFmt5Nitac8Zocsqq7caHSgmS5EmuUAupjifNdYrgKcF8PTQ99",
  "key33": "4Rx6SmqrAZgzzQex5d5PsFbNGMtD8metwPVDvTqn3zkktZDSg1oFbzbH5KW73NJFRFBbm1u6JNkvNSF1ZZWHVMHx",
  "key34": "Xfiiw5pEyCsX1ddVys2uuJvhPS88YC4pCXrtmdBrepNo23mofvCzhK4eyhwTnZaFu8fRvL4peDWMS1RECGzBF4z",
  "key35": "3hwN88NdQGwgw7Phzc7Gmj2w6LoZbBztSFs3HWSdxj8bzpjEiqgtaWDGLBVa3zq6HYNwQZ3UZv91dvGKkNFCvnkv",
  "key36": "884HiU6kx1kxYRbqDxoW63tdxFMjdZkfm4sAGCVvTNi98C1k92fVrhhJkcLEbuGUTeq2rHfJzdXWzvGuobd1SMm",
  "key37": "5sL1S6SQnjUR2uRgDhNHsuuDTykxpGVBuDDpCwJ11VTK37rnMg6ihLVTqAytj7avCsk45SPesvSr7EKyKqSuqPM3",
  "key38": "4vzjwAdYdaz5CYAt9gWqPgbJ5bW3MJVG8TuZU2LCkhyimuLRdK5YHtKQAKuhhVtEUUxDSLbJfA2hsm1S4pUxuV7L",
  "key39": "jm6Y5wqxfzzUuQJBrvSAyTLhGdfEzBsEkcFpAZzkGSSMYZ3xhBb4g2GZSqM4yEkGVRxqrpLUvCdYS5F3SvULyXY",
  "key40": "41qT6FaiegkXmhvHiu1KXFfnhphAaHroTPXymKDhvTtnJxpQUgGVmHafa8W5CJuLzQF7gvcfnWEyuZ8pSXUDpKgT",
  "key41": "59WW67jHYxoZrYXk2DKKWjUKu34SUpZLvPGqieFAMUyu37eKEqPn4vN2xS3z9Ji9x3skf8MspedNRsG1UMBbR7L7",
  "key42": "3PVpH4zNqezgjqkCY3fBha7tzMMUUQqtjgsY8ZCeQhu16LsYrRpxqENTxp69TZ59ZAqcG9m4cw9PfZTQwi4YUf1A",
  "key43": "35YBYR5BV6kecjG5JJnHzYYjGZg3BD7AgqEVu2ZyLySKuQGjdXyFcKqNmmEQs9XL8aQuUQzLWsoEhBHdM5oNHhEx",
  "key44": "2tizPXtSKvvnHgHU4wn5epPEfQRUsnkrAudkjSSyAK2rKtpHo8wDZZtYWGUcyQuXLFaKPbLqKY1g53bkpmosDtbs",
  "key45": "2MTvk6R3gwb5QBxeVTgTGbh83zqL3ibM3sTsikhtqEHdfF8qqjppbysctkLuUM4dT4m2tWkhRLu7C5UjLhWPQt8x",
  "key46": "4XwZRvUibxtYcozchJyF6cxxQvwX1ycvVAsT9rBqoFxPg74P5hiwwrJbgK2HnG3Co3KCTXjC1M1S82sc3ANnonMC",
  "key47": "4ftPtjFQhmTc3PeLVp81EN972HZWwmCTwtpQumnLDvWcoYGZ5TrW5a1vVqqmE7jVtnJVh5VEKVzw3LkwYLive5Pf"
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
