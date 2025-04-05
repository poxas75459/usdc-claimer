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
    "Hjr5DCoeJZpv6FGqonzJCr9So3PjthXAkyALfsMUKd8rhB4LPmgTaKyScZSJt6X3CRkiXeSRQukU7869nPQcJFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4roM6F3C6kK8hw6LsVYcxaRf5oxFzypH4Gna37gDZgzs9U32sxRbfrpPbVQuvxKkofX3wEeWKosTtiWoJCCMdMHv",
  "key1": "4cqm74FnVfnV5YMJWxW72cGU237qqfQh958CCTjgYAcJovsuDHMUD4CENKUVihU8FGS93G4bpkrjkV9obv637KGx",
  "key2": "32BmRfJ1bwZhYWa8B5EQVx1DHNTzUBDziVd1qfNfHsJPwsa98MtdAzTnR3X4NMQ9X2FtSNb8miFkJoGp8whZ7nhK",
  "key3": "2CyLMRUmzts6VJ8X2dj4gqWrP1X2bsLWYNqkzisciCnpFmrYYGvJPm2J3E9kkg2CmJTWHRU25ueuEjz7tRvfFusr",
  "key4": "52LdQMfMDgPtGXHFEnKBLmwaZVCrRSoiCS6iKwU4JAQWjHu3B2Ad6HUePj74mH1TXk5xuASsSidsnTuTLr4J9W76",
  "key5": "4yd95rCR8ozSkihhyHFpEdS4VSro35XrRkc6whyYWQUzKZUMwvBngDh2gN2ZpY9xx53AzupkVez5VmLm8HesvAQu",
  "key6": "4Mf64xgb6fBDN2Tb4aKZmqpnU6CmmZmHgZdsaZMB7WyzmVTPzzdb2wQGTC7nyHgJ7ixkXrQ8jwWkHojbd7gJZefG",
  "key7": "3sWsRPNcrNt9qzPywsUjKu9u31KsUvLB264URVZkrNZ8GFhciQoiiJaPAMXZYZbhKQojo9i3vGGqSFgY5NeLsdMJ",
  "key8": "4V6csSLJyVi4ZZjupENrnQThdY3UsT6FSkZtkDdbTTqwYPg5GL6Fp9yYGE22qWdAbDccw4dPPjT1MxLCySr4rHAy",
  "key9": "56zRvJEqkBFsDAjW6SfguvzVayavLL2tGjP5B8F1sC6sKomJD83Cw1Qcutpb2B6wGVPgnbhoLyWXZ8RsCFLcJCrp",
  "key10": "xjhFCawCy6CPpHzBh5qrEb9ho6mcuaqsygumTP3QhNJxaZ6mWVGbpa2FKZS94B9qkVYunHdzxaATwK4fNwGDUc5",
  "key11": "WhgC7w976y2SzPHoN3Lts96fRALgYDmwGm46zncWo9PsieH42nZPGDCWbWdhvNnzCrPj5YsmL2kq1W95Bf4iLQ3",
  "key12": "5UdqZcC5PYDPneoQSVHTQ35RDp96Zcoq1qeAPvykfp8jnuhqFkAavJg9w4gvd84XM3q77ggi3myKwgvYaea27hoP",
  "key13": "Mk8V6vVrHyNJpqEXaWuiGMDcPxnkieTBj3B6pNvGbbSkTwPZBuipeiAn5m4dBn6BeqB5ZoHfrGqSvdAY3wmmSbC",
  "key14": "5CGDQHwdHRuesC8vWsGqFB5oXGRKwupGHCvkg9v9J65cNemsBgur56Pez9kwTeggxGdJTb547a3N6B8a7TCChpop",
  "key15": "3tE8pXKyA8EKdX7UzQRgvh7K7WKHMnsTWTK5NH5o8AsWjAXiTY48zyhDSMU2eqDTCTNcjqMK1T7C8jYXjtpFiK1r",
  "key16": "fEggpCoT25NvpnR3Fgf2dJ553Tvj5udxMHRdzejFa9HzDWugiQ1JLHatakuTwreTyfLq12GoekVn5BpznfKnfyu",
  "key17": "3uvFi51iiXB9JKwo2zT8Cxh5CFPRTpGP8UwGmJnQLGicAnQNSJHb5u37iTtR6ojpECyUA2Lat1p3wCAwANsZtR5K",
  "key18": "5sYPk7yK2CSr8HTrNLsjh2S2gtAimzX6nAJVZ6zuFP3c82nZ6snrL9NxbQ6HKPRLijQjFbevBhK1d3MAQnfuF5ti",
  "key19": "65MjTX8F3XnLDTGr7m44UTfWUNAEiKMEaaNXGpfMuVuuSq72FZ6krfaWEraa4Gc1dJwLXhDE1SAAVDCMwSw8MuGr",
  "key20": "3uDtQqwsFjw9qaq9wLkbfgfhtyoqTx24XYQtzdcjZTNfdPthWbxpE7oS88n49HSgemwcUABBtA5oATwpbF74gMmi",
  "key21": "5eHLkxoetKRmeY1z5nJWgJDJwDMtgiPTjKt7rY7oUE2ZNdkc6rVd4tfHi2k8onDpnQKnKUPVej4Yh8THwuMfXsJH",
  "key22": "jpUxFM6D5VR2t2wCFz6WRnhxrdPRuXaMwFXRAnHUVYtTcXBeyZPFooWgoL8UwqW7Jm6MuySWutJnYxy7WELcRyB",
  "key23": "2Y2S6M2Drr4GsLrcJkoEG35GJNjgr13eFNzGhhgPH9r4suM5goSsnqPQA2MPKxVouF3Bv8jiBmpDqL3kK2raQpW5",
  "key24": "2doE8869YqhTxNKwthTXsxWAdPvWerek4QPvPBLqzB6cZ3BRmBhX978ugeR8Gs3PSgAR7nNgS9xue4xxmo36xxdr",
  "key25": "2eQAtrQZtFCGMiosE5ZXy3sumDQXnZbHhKws8rQFLX6Je7jiFsiTj8TzsZctcVU7XpadBYx8XpgyGmyGXfPjgsT2",
  "key26": "4Pis7nvsivucYDdstzmWYMLxJmwqX2xY9b4zJACC85taVntSzuenovNerv5reDbQU6ZU3axJXKMfeYjPc9LAwFEG",
  "key27": "AiyN1kzWX7sABzNWjZhrnysm4hCqioZ5ejsDmQ4i3X8YeVZw9VZdajhZWECwBXmV8PJ3Bk6vfJiXPek9exLsxUr",
  "key28": "4nZ9xde7e8u3hjqph2KwfhEY34fx7SXpuh3RM7UKFK1yCSMJQvXmffa9z7AWBJusW12jSzfGTjKsAHQPJAf4dXXp",
  "key29": "NBBmZr1Q2G5JtfNB5BdzZGx2rTjubfTWKW42Eq13GrACc2NrgxyZSfCYQ9kd38G9F1Bh8hicar6ytqm5absWFMd",
  "key30": "2YX12kUGpeNycuUJV476xTH7QKTnGAW2ddaQfykJu5A5BKfHKnoCDMrKDso312aAwGd3Uk5VNR9J4sPoVrFJAoER",
  "key31": "3CeaL2chzkhRitYxA6vNtc2s8Xqs1zWzHYopbQzSdNVPzBxBAt454ABYPCB1MV4Gset5DSsUcZbDoDxjv49Qo6ad",
  "key32": "55FHcjfCUmQrjqktfnjzQvTfh6WLCVot5awQrZxHnU81bq6pVLcsziDLXFLVY5ivUSSPLyPK9BEJ1ye5TQp3kSbc",
  "key33": "4w3Awmdb4H5pc1KrymLQCyT4f6BGVKCZveiV1bQK96MvEkLYR7tFB7aHYbgESBXtGEZ3V7afn5iWpKmoAm1RLCcw",
  "key34": "5mUXYpGJu1BnLBpDkDBs1aYXK8DxCCf7CX4q8pn2B4wkF2C1dQWSn8cRZgizoBj8NPHARV6ayYAst9jPvrUTkTcU",
  "key35": "3vz1r4WFkiVxzCFwbahK7JoiM27tU6DhQTeStMHBNPtNSSCB6vwpnwnSJfkYJtChwiteafW7wuhZ7nTbvqTpCfWt",
  "key36": "2cevJ3bCTax5waGnyNpKj1WzLHHrbePGVR5fb4QdbdBxiaFGFoREB2oeFxnYbifn86Wu2o1Nznp3UjKPDSqzGjbD",
  "key37": "4e8AdvAeJ6dUwt5fDd5UJGmWqJTeaGRnHELzgAhSUgeyfDfkJNg24anLQnea6feWfpPwo5YuNy7NqLFtFafGMaq5",
  "key38": "3AV3BRy75PBbTmbMqmbS7PJLUmmdmjFuU3yj5mU7naAX3sg9vj96DwAsegNdPFHruPxpSERmoqZhqG1VkyQ2Xq46",
  "key39": "44uR3rnnxSJ2Qv5b46C4EPZ5o61L582rMEoR2XrfLDRe4Ar6rSG7Dtc9Jgm2unSdKkS58skkpWZyrnHQYAiXrZRw",
  "key40": "3SyYYZebUkJU9Zmxtm8kKQHAksybFunU6AY4HL2BAnbcKow5TfKdS6jhKQHC1kxoroqGufRAFjZCgvGv1y4F4osy",
  "key41": "5gzcnSnbey8kmGMyUq7SpFeeuN8ETRxERJZ5F55TM7hMCXSVyB3QibFK7qxNxGX1CsrLYMq42osYk8uRQeiUP6NJ",
  "key42": "4wS5p6reYPbGex1r3ec4HRnWSxMDdtgo5qVccFQGutCS27GAg3RUng9joxFFcadphDB7W7BrXf4xdZCw2aUM7X4a",
  "key43": "NPLcFwiejA6Jj4NQUtMjgACqcqSPwBe4JYq8qg39VHuL5gqVxK8mWvHRswkfJtXr2coBDkWBba9WmmNmH7nBWFk",
  "key44": "3f4SPaDdUc2M6pafvazMornNvQYcGoKdeZp5aPPxNFQ4d9TWq1Hcvmtu4p5thYiAPEeDCWmrfevsgSQqeSu8o4YJ",
  "key45": "4NaQxqFMu8vWs6RzH8G2rNJ24RDukmrmnka391F9sTy6onJpUmkT91JCWM2Lj8sC7fL8ZRsySmBY3QMDveQ6rGdv"
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
