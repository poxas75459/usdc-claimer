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
    "5cwrhrJgvU3Q6e5Y3nCdVcNoEauYLPgW74VRdHsprjBg5DNYAZdJVqJL3RcqdMTEZ7yE5XMdPMpCxyLEJVs9ahtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kb9c417HAKnciRFsBsq7TuUhwrWMfkwKxMnx2RKuMCZukAzKaU5sCeUBUNNE9pqyiHzKR47FzYaUpaFZhkxjhbt",
  "key1": "4bAnX1UFWtpZaHvcs8GUsRBrTu2h2J1okhbEBfXXwfDtCv3BAxLp5XPP2xGFKb3bFMEpCrX4Vg99UEqeq4xuDqDh",
  "key2": "P47mHKsZu3mL2LVj31bzesTXn96LFfVJcVCNSrgEA9kE1nVQAwCts27L2sRyGE5rdu3Zx5RHDP7jpdnhoWYaRqJ",
  "key3": "4zjYqpd3w7pTKNbzi6hFH5Lv7DKkEZ4vNiLiZTcaxsAKp51SojQPqPEMbM5SfjdMJ5sKWQauMg4pmXgQ5Civfrh7",
  "key4": "4Fiati6TmqzkQGdNMHX37nvmYMrxbDbbgbNeN75eQv1G92mvkg1yNpc8T8LhNNzCSyHDBZJ9HzSGM8qGH34WWD6W",
  "key5": "4z9ZEhfKkZVRp7ghRFt6DPgFqFdbYtZRHqGifDZ27d9QwP7btJwhHoh96JNgkxLEYhCqr3GdfpLSktdw5XF5iUpy",
  "key6": "5gdsfXpoonZpZLhR25PHKVPd2sksJNySqKdJvXmTDsDEo7nZc41CK9gvtkLD2Gkq5PCNteJQroSfnJGx6edo67pE",
  "key7": "4MowbY3N6ebskdyTmQK3RJV1LK563CBwJLubSpZg1RYJ4vtBmqwwtVnB5vyrDCvNXwJGDs3S3ipSyniu2iUaxRFy",
  "key8": "4q4KESRUAgrbhFi9cNZgwLp5FP4oqQ3rxhuh8XcjjhPHKrN7R8mNUNtRvuXYtSXSpZLrSuWVP4ayzgkSC8xPHVTr",
  "key9": "jt1fBuPD25gS3Ks5yooGMm76D2nXGyP46ZTDddx2zVbunMG9tpybDfhmLdx92u25txUZa8Vco9Z9r2ZjL1ynh1n",
  "key10": "32CMGUkBA92dXMX5WLpA3PoXSMJupSZTfJvxnrbUbWenyCeVoYfB8KiVJSoT2N18VLdCY7TPC1PYDy3mG9wScjVJ",
  "key11": "4YX4eRZJ2sAJ6A4ZwcbDLzFqQpgbrM9S1Me7cBMLUet3Q7Gmwign4JKGDWRL9WXUJJJRuypYFJWkEFLQUDE3CCaV",
  "key12": "4XiKF9MPfWMoZvadayCmM15MtMcH7SsEUguKUd5eotTb9B7mBAQ6fLnuX8LU2afUBfew1zRN7nA1M38D7MpB89dr",
  "key13": "2iJp1L2cUk1p3myBbnf4EpFE1SxSLgTHy8zH3Ff7xLbrtmtJxBpXkRCbqa34Ld3L5MihcHReTtTc2ajVf934LLuF",
  "key14": "4tb1TqmsooZqgaprnfFcTWnEYL17Kk4QFajrfTah5s5GYoK1K1ck3cY1GRCyqvmKEEboK99tGtEwbi8MDWk9GRNX",
  "key15": "ppQbrbxk6Ltm59WrrktNjTutGvif1RJaRxCkoAtcwdVNXU49jwLkVFFnQiw6g5aBxsJgLMFRLj9CEgkHHo5KJge",
  "key16": "5VF7mdqLZ68oRzXs1vMtTSHCvvpandRkfBVpSpieFKbjS1aJNdPpGJ5KM8e1cBVAGUfCDVrTWmuY1E663W4PJQjd",
  "key17": "2Gd9BMQ7TsQfofGuLNknGPKJ5bzq2D9Fbj449ksQSaetSAxUr9e5t6TJ2PLKDRMotwjDXTpNgXvXtRsXY9MmYk53",
  "key18": "3hXQ8nanqrCYUf14XuxX2VmnSMCwYLUyAwqs9uCQ7CZmtNVShEVYWTGudoTkBM4upcxhkwBScAjnqgzkwZrGzEPw",
  "key19": "2VpZhKuvTsEtRe8Cc75eqdS3kx1J4vrstbG8c3yacXhKLoAJnHdsjfCJ737wTqDrj5PzBiCcg7KAWJf5bTMdvGRw",
  "key20": "4HhDVRaD8zwaWVDUysMmpWzCKMDL8dScSxZA9o4yLTWAWCLmVCDTWXQPLqdusQuVtE3puLNhoVjmsFqUskiwYcty",
  "key21": "2NUHACzBVnV7YzsTp2rJnvmH5CtfeAzbJcXTSr1uMYMYUbxAS2ycvTGu7fqRcoNziaq3R12snvsHChwvXF6G7sdr",
  "key22": "2d3rUBcMHA4VjjLNa1jxohiVB9AWcpacuWxtQcpQmhzHyJ4wHaUGHFyozr9kS17QzCopUbXdeCqRi8TVtziNHDfJ",
  "key23": "4EyfamMRswUSh6qyybuefS9JSkMsLetq9uApJp3JVHtzMQXhQcS5Td1thLgMs1T3KAbRQM79EMWzLzu59zMAFB2j",
  "key24": "R4AuJYkL6gNSnCuJfhRpjQrPRhEZVgRftZZuw6NNVPXSF6wKsSLk55XXYuBVtC8nyR7Dix3zngU1xuCPKEDLvCJ",
  "key25": "4tAktXD1r9dpPRNtKFy31ywoRTqTkkV731ntVZzZg289qo4L8YJuMLDjGtHYfLtsKdMrDBdnP8ySbSkZQsdqRuhY",
  "key26": "3bDYYFfS76XGuTJvXiM4qw6skM3QZ9joDSwM2EDqRna7R9NzAk5cfMaG3oChQ4b2Ec9KTifcqboPvQqAJUTBv7Aj",
  "key27": "4cfUcRwNYchqseAAtU7VKSs61RQ6A7i9kM8daX2uuN9VGLmF7abxwzgkBdrcjfKGET8V7sFrYdYG7Qdi8UXjQ7Qq",
  "key28": "v5brCvDGZHBxwZkZ68oe9rKx9RB3hyRPQUhaXcvKSmJjUBzbg1hkw5nHi2ff9D8FqeNYvan2CSDCxpfjQzWy3pW",
  "key29": "46vpQFqzzmh38XdpocsuuTjAn39AfMB7nV26mshUTUzN8Ny6HcY5bEtrad1tX3fyuAxQLL8QUuiXDYLyp4ZHeTQ5",
  "key30": "5WyPCVQGqy8a8zkCmgmBCYKHC1JCCpvn7Ka3fRzz6kUdQaH83B2NWoAQQ538atcjmxpjp6o9HYwgVbou4jhDP3Mp",
  "key31": "Dq3urt1unAKcKLAcqrxvj3CEQip5Bc4J61sxxAYwibb15tHhxgV4rRypUCDrk6aGbkv7gFpgRHcbexysS1x37bB",
  "key32": "4nf8TqpwredRjCQUV21VDAHszAWRP29dUgJfaKYqjbsA1kCtVXj86nRVH9tBTbDsUEdXpYcAQiMcxpNyQ966cBX8",
  "key33": "4U9qTdFR8fw856NLY75f8UnKa3PaJbUMnisrXmbjLRsNBPKpyQTy31HsbRrzH85wuNzV731PZ6hssDXUW3NS95oA",
  "key34": "5LrC8fSFXDRt4ZzHfk5wQ4hcT8nK9VQh1y49sJ7SzNo94PFUEZjNGKp4pFmRzKGsw4amxBeVSUmCa4WMfZVMpzEP",
  "key35": "41Vcit5DnWi2gJxii4zjvEf5twZo79o48ZqqzmXVdcQziQ4JoDXaAFNY38mr5k2gB7NJYwtUYZDoYg5fmtRWDxjA",
  "key36": "3ioKD8v8VwuBi3N1EX1Fffg8s3rdJaMuBpCBvUMghXxe7E1uSTkHn1qeg5N982LyMJkqitCb5hmzY8yMaWBpRU1j",
  "key37": "5ePWXEwGcsVB3NU34gbsZ2pCZTjgkEPDDwWv4AKjmYhphu9zqsqjDhQKF4YmGEuJxSSjF1CM4RDCAgCAtZVXyUks",
  "key38": "5XLDbCR4AnoycL4e12TvwHCsVYEvJD2TLjDTfBqgafGLfouWHCL4aEAZwfxNiB5h1FC5DShv5DhFiECdNhngoC61",
  "key39": "f4VdoVJn3qQwpkNzWK48Mt8VenvGqEMemBpcjXXqtYNphLpoCuBVjFo4W6fDur6amumVcKWB6RUYjKAPmTpLXfP"
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
