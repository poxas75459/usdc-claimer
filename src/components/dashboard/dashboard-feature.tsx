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
    "67UFRwpRPVojCfkaE3rSBiRMNBMRS591cMUoCWLzPgUesa9NfdRrLLmR6NQA1QHAQRiKaPRcNMywQpRAhx5pmwMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PifrwNuQqVWSK12Z4ZPrsKvMB8i3fv8NTQwPUF3GZjiE58TBFjJkBgCvJz7hqTWVkidWMPq5j82SW4o6LMVtdv",
  "key1": "2vzzEXepEGbgHX5PPVPfbVddd1jeEJNQ8xKUg4WoRibYT7ZcZq22t7D6uZKFLHM8N7iXGVwbHiL8xKKyvqZUSLj8",
  "key2": "4bySP4vL6cD8bWTxfvmHCmuF5ozzfUjUisudxKMauU6x7cby1ByyTjHSrWDU9m8LAnbN7azc86GAHvmYgPZ3Byaw",
  "key3": "3nyWa2h6rjSQeUFSANhboSkSWDKSLxj8xRVW92xqGbZQj11ca7LSdGsjoKfoBxhJ5uCZyZaUc3fyJg5grirbNS2R",
  "key4": "4BqzPtxDqPuyK4bFKXbqBg6B5vMtNpCgEgNa8gRh2KAgeeXKYD775iM5B2bzMAYzT5rNkCyVhQ6wbzRGDiKjciUW",
  "key5": "5JdDsyorDG8WwBsc3L1TSVsGJ63BgZ47sdCBXmRBA8kv1f5JkvtZikuhfre9nd2UwgrnkbStowrkkpdVtb9XJDhb",
  "key6": "4sm2wPMFmijph3BurEKGR9MEJMhBhwzQBFStk8jFARi1Zrc2krHwLzw2ZnEKnZ8Y7WgkA9wNLJfi7s9SRynGbeKe",
  "key7": "5rkEJkJCDh5y6JGgVwTxn17BWVUsjun7xg2Gc5wWx4y9QWPdfuSUYMc1cEHKrhheWwjvkbMrvQw3FFLjoVrtjC65",
  "key8": "45uruiSoHGEfQZkk1S3K5pUiDJPBLBdSgHRDwciMsv2HUj2gcC7MptQCFNj9TozbySeXeG7seM6chvZsT3ByRzKr",
  "key9": "4DN6gmmFRHes8SLsskaTiT9pQfu8svWxwpjmhPNCZjnuRpZasnTwAP2pQDYkTcUfUhv9MXjgV9Ny2escmgnhKty7",
  "key10": "3R3hhmCrrXc9J97dCPwTAXbqmLdxty3AjNrZY4cTbwqYAziTwG8NSezC3YX2T9ZT877rtiFzZ1GYEgnSL4wA47iG",
  "key11": "3TLCgvCekMFCfv33MdYDUmUp1zKBjkWwGtAatBwc4HkwswFAawrDV2qowor1xV9cWxzcwTtj7WMawvf1bk3JSaes",
  "key12": "SXKFcwfQci8MFDALKafD3mX7cngXovCsq8ud31FHWToiQyYSPEMrfQ3yULYu51eP88yKG5CfQ4cu6D6AUHRTTrF",
  "key13": "ReVm3u7XZwk91v2sw9ZZDnCmLBPxGorSwzMxYq54DkeegsKa9UpH6op6Hu97rzwVfabatsem3DsRke7syLjy189",
  "key14": "2DfAYGjTurPkcNbDiiqbWFzGZjbGfEkk37Pcz5XVmTjQu6i5NvAbwPq6jQiewjsymacrZZfy1FVAmT5qN8JQdHrN",
  "key15": "5msuYAm4qRSRXjSMxW39CjKdYWFwp5Rhx4jr3gnzTnfGMJTDHUynWfZ31vpYbqciFHM7Btj1rp6f6GxhEkCmKYAi",
  "key16": "4TnPC41B1vDVFZ6CraRna2wJ6JyRoHUyKEhYSMNNnocW5X6DnaCtvXg4xzHeqYi8sxZf7rmc2fr8EADymgcCCMp6",
  "key17": "4uafUueMcGGUPgqnSPsRMjGEG82TLNF2tmHkNLiH2mMoiJpBMLikXt4CKVRs7AV22We9NeoCLMqPWJGTWfL4q1AK",
  "key18": "4Am2bQtX4nZpRK2NqRmPNQJZCVbVnsep2auaMBEeNAxKyoT49SXYtZxTAeGfrR42KMQYTEeqbagTHdTMm8YjMJVL",
  "key19": "2Bseq3U1RXWkYMctFuUEHFw8HYgKKfNibxsrPmTiYiku4vAESztCAifL5Q9eCea72voye3c8WMvTxG2Jj9eZLiFk",
  "key20": "3RCqwYCdQ1YsqTGnHZvhCfS4pZm9BSbdM5VBUG9BiYPQranuzqTse6Pa61HBxzbKnCRBtUMj8tgt7tcJkxe3ysyS",
  "key21": "5haqi2R4fH6k71BhKEhBdG2ZNLnFfSiEuUdABD2HzzvZ53JzHRggPMJadrxJB3Cy6nedZ3U4ePW9rStXu9SLAU8V",
  "key22": "2L4GMZrjT5pSWi7JFsrN9wJ9wXrGxoa14CgcxubKuSqD3Ss7ovoUes2rLDgbzuYJTLx6gLMh4hBxxWtQ4Hvu8R6N",
  "key23": "3btH7bHZEd9xN3hfAiV8WJiTQB8s1z2YCA8jgmchCEYPHh6YqD96JFDg7RJoJDHhmFgZQehfpQsuzD1cxBiv5U3Y",
  "key24": "ePVAKMJYPspvJVS9j7KGmKgffTcFyAfvsNhAqiwWVmBdmNKCDeeZmQjUsCzZeYvkkg21UgqarCbYdRARDnesC5G",
  "key25": "43icJFsS7ZMN3bs2zPJuVNzXefjRqoQYcSwHyg3qYRriZj1Ewh5A3jty1RJ5z1SXAKocYuHGd4JwjbJtj3xPxhy",
  "key26": "4gn6e5eLyLF5Go6aTfLQfxZ6KuSp1pqiCuHaVsyLRPd3pKf8qiEESxTF69Z8Y7ZBfTBanwzwPEo9QEdSGW12fCkX",
  "key27": "5xubhf9JEZfDHkKESZTi3o76K6DU9gw74dZCGa8keZTbZoiCCRt6qMweq6Ryj9tE5xAZYevhzsEAPjQg7amsyNMS",
  "key28": "4h13ZtkqtVpWtnbbTWyhgBWg7sykdg1WhzSfxVXgsej8TZqFKCBVUdiYzQRbQv9sowK8UtfzmE8RLhukUsP3Fjdq",
  "key29": "4fjup3q5pywy6STUQdW2XXY6CiXiiX2SqU9CP5fo1tfdTcZW5fZos947qPtxc8ChSeaZUVSNR4DeoMAzvpPwc7Mk",
  "key30": "PNSSfk7isVr9F4w6sxtwN6d3PC4m64GkfM6jo8R2GoMZVxNGzXiZZ9gJpeL3Fpo7n6nqEWz4qdEGs3gshLFwfkc",
  "key31": "2LYyzb5fSmEiRNM28wWF4c4a5813YXrCbWksUkanwYRSQpiZ5VyBgv351nbFDkhkYaWTErMWqs6EenN5RMkumqZA",
  "key32": "4Z9mgDP5G21JtyxxMEEKwBWHHNP86kr92y4swyC6v2dxwa3myNHqQMxfQFhVR4Q1xFLdsnx8Em4Pudq7Aw2GepYk",
  "key33": "51CVxmS919LqXrs8pZp2a3rA9hpGRxGaEJDMKTL9j16QnN1ZepZXVZrSMZjFceKpYtLmf7Hfp9EEoKg6SUq4SYtn",
  "key34": "2eNALQwkGjeXDxeyTxs5SVUgbCYUbFzC25bqkejEw8zC37jRhKfLEy7e7biXTMkHW2qnFy8VkDNLgvCVJ7mHhhDQ",
  "key35": "MGZLorFfFBV1vhKrnvcELszJHhETi85WiUeJyks4hi4gp375XMFGS2oda8Khociirxw1sT9AnhmyAbpdAQwkogP",
  "key36": "5JwJ1pVhHVSDEBEsqyAR6eGmJpgMFDDEY5g8gMrSKsmvmztn4RkMShC5NgtyfqnDHq76Az3FTbNxnyDd23jDHLE6",
  "key37": "4jV4yvHRYhjG1ynedSCVS23V732Ztpna525uEH5n1KuwEGu11M5DuWrdNcTKW9ukg5LPkqWNXDKAzxrvFmDbMyHE",
  "key38": "d6aARPyY7XeLd58dEzaXyrPNfWB4bMaTPNXzySqCvSYhq5q86EV2dML87E7FrvVgYwx37jWa6Dv3du7dufzSWi2",
  "key39": "2mUBL7GJnXTikY3NuPZhXoFmT2QeGByUK5rdUoBBEbTcXnwFB2PDHTCDdhJ6z4d5Sw26Uae89j6R3rFpDRLJg4Fd",
  "key40": "BG3YCyHdoyb2aLjCmKSDKQCaorMy22C6Vxc9veGJB4tMGCHcquU4cracKtZCnrZbVUNmcT4QxRDopCimmth7Zwc",
  "key41": "Jn1uXLn6ouVV65F62qFeWZEf155bzY26M6JvZoA5yBYi84vpUN2zF1PngaCLGEtZbWCij9ge6xhYn7JMQHMzkcm",
  "key42": "4doEvFcWDGZnedLMjKBWm6xvEhmXQm8QeXYMeBcjFcHVrystHTgDeybzGvngn8NXGj5kdbnaKcDjLbSnys1KnXox",
  "key43": "4kkiZbfVeF83L9r9HZNzNVd8wj9Ew1f1V97KJJgS6hAvHduQcPKzHa5r158jQjQUofvuB9k3uS1WfZjePYjJkh9d",
  "key44": "22f5RtPyecsC1ppA3Xq62TRMS9txdNa1WtgnzfBttHc4gBPXJP6F4NL432QK5SGvPLsp5NjeDCgC11WbT7UcRUjb"
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
