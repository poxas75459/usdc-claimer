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
    "3RE6yr51avpMYMFEN8rd8SGWGvs3xH5vhcQPRue7ajhUpd5LGgHsQB177fRyhZBp2Xi3iLXEiyGC2bVSFwfS49xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqecVNovEGs8KhDGXEpJvFL4CuUVp6r7Ec1X7p1o7cqxev6ejMgvuGkALNtD2Afdg2hh2G61Pgf8dETQNEqv9HZ",
  "key1": "3fonMrn8whB6bZspnWyXxBgZFPUeXnzTCv34H2K4vM1ihb4rrMybGNGyHTxD4z1XnCJZRKQDq7bpjJe5Lj1qcm6y",
  "key2": "5rm9CQRfZKP9N3B5ewSWLk8FoxVzBtjPMpFM1gH14BN1WoEFvYmHN5RmqriUhdvRSzpUTWz7hLc4pNXqaPJHRW5g",
  "key3": "5cDJYUJf6FQgpGjh5XLMGPmpLpbEvtrY6GbmixNwX44Hz9cc5ta7H7kbcA3RvbeHDTwp1ZhVVL9amWGhMCbSZCdj",
  "key4": "DrU9LPTwqNqRrfnRmTh3zFchPs7MJoNt38bHJGe3tcQoLMwERUcqJuTRnzG99kzi22cD714Qku6yqGcAKQ7K5zz",
  "key5": "5fumVuqSVPs9F9dDJYRhBS69i3pPqiNoNHuvHjZbmZCwNYKkGZBCyHzC3GTjM89MfiRYjFphJeKgvp4eYiuhHitH",
  "key6": "2XnY7sSSxBg6fxGdQxAoQoWMhR1rWGgBNck4chBbyUHzvqZM7UNdHgrRdVjc2neZ3J6pJd5gpGzzds137jqMJQZM",
  "key7": "2Up5grokqCDoq6ZmmJMWmu31n6fUWEGi9iYxHa12zwSfX5cSzeEd31GXvuU8kHMXpYvLbzXic2pwvsTpz4HiKeo3",
  "key8": "3nRJejFikg4s1UdvvXD5EVu8cs835h19geZB2g5tSCLqvcuoVWHBqq1AMgGjZ2Ysy5LZCihzmrqV7x6k8avnCCjf",
  "key9": "k29njqnof2Q5Sq8PHChdWrj4JuzLGzUgrowJ1L9xXEMzVxL63hPvvHRMYGg21F7i6Cbv2YXkPpkmGZfoVFN7bsn",
  "key10": "LKJNoMGfbUrgZ4wX78MqF1iDQ7c25KPbtko35vaBtveHdFeSEQ3rnKaTndbPN1jphD4NrhSu1H9TPJ3D1pnA13S",
  "key11": "22gmNzpcwkvs7yHQeS4wvEMSpbNfFowP15aPxy5k9vriJL1mVvjTPXzkMFpNBTGbCQq2oe1CJ3f9ror5nFk8C1LY",
  "key12": "2CbS4Z5K1UFRf8zh24jnbNC5wf8MQ2ahM76H6TiFwuTRHTkYv8JeNhkBcw5EHezBjhHQiuyu2DT4Pdt1sW8zbNMH",
  "key13": "43fvLHDK7KoKX9NbMSJrKv8ZQxC9dLwzrKtByrpHqn5NVi3WVNY2dCRZLVmwmnADoyMdJAixwzFECaExSBDTWjT1",
  "key14": "4KvQ3RhuvSnG6m1G178b5XJoBobmcgPjHjNk56WaUjRpJb7FkG665p9CvQzGfNiuJ1n8EAYENmN3nquyaLx68iBE",
  "key15": "3NWPKeumGMCTJS3jb8AympaBCZ5L1YFTfPC8W3FQG1cBCM4m2MFmfRKtiQD1i49bEprQsdS7Kjho9S8SCxJ8LUzV",
  "key16": "4hkkv9dsrTdeaeTuhK5iV1mQWyUhwq9eMcHcMHbzYZDn7CtEm73eLfT5ZCPiY1G46JQ5wHFrygC2WR1ivEiGYvso",
  "key17": "3fBkyJKQJEUxBQJuXJneNr61HJfWb2NHiovu6SxXRoRWwSg1B21bLHNKgYwAkxWmfbdvV3NV2hn8qsjxeqzxnsjs",
  "key18": "2kZjXUx8mRfXJNuijGm1zHPPyDwLtdzxxF62KUG2LveeeGP2jwDK2bSAhgC3DBCQ1ii9GE4hNVbJ6d22KS92wrrB",
  "key19": "5z9tzgFHZjpbRrHV8TY6wPPeGbMjnpSfttvedgrxQanA2JSCwTTj21NCTKRU1A3wmsgYHTW8uGzht7YYZwPBFcJ2",
  "key20": "2X81Wz7rJERphEKaSvrkiXRvovHKzSdD7CZxiT7ajrEHgVJink9RsPA7tLSXyAzPLSF8uiZDXiB15rrbYmpbj8v1",
  "key21": "2a9nZnBQzy5Vv2RMo6gXzULdMvcaWGe1Bx9Fc9uNjR3zrdNnLDFhRLyB9wMUWhQ3B2n5QzXqM7nzM71rvy8mVsUe",
  "key22": "49qwStJYwHvEyiumLVR2zFvPjjryv9MKWWveL8wZLvmrh5FnfMWdRT4foJNB6FFL3XkCrmBWFhj1iNqxKUR7YgLQ",
  "key23": "4RqeteaP8fW31SSUQXe6STRMvwmiJQrJdaXrNYpFFMKeXm8MYoFmJ1ZpVnQmRwLF8THL2u1GJPcidbCB3WqArbQi",
  "key24": "54NhwMyTHf7zp1H2uTxqZyE8za4eeHRKrarcAW46vw7WfD79dAWmMqgzsEVo3yaff4YPWLGgBg5T7ptXWuE521LZ",
  "key25": "5xB28GtYVhhYFLoYZjB5kVfinXzp7DUrKRjuLMZfc3g1iHVnEv259QuCHQVTNXtK4pBn3zDaqjwqjkaSdfHQsv9A",
  "key26": "2QWiEau3gKFDrU7wAU3iEMokY5tGg6cMUJL3RxMVgeVaKLcCY2EUT3vnuVExwiAjVgZoBQywGiruMU9MCEMMwhxw",
  "key27": "25gTKVbAiieU6R99MoxcXBo4MS7vRpoZndfCPQibLtfDmkdif7xQsko54D6WBV65jvhmshTT9DYYEPfc7CJqLTFV",
  "key28": "HGrthSiEuDLcP1EqvdTGX3nTowz7JyoKk44C5drejjA97M3eRM3VPoK8f8RBzpZu3Mxmr95guuubhWzYSt8K1Ve",
  "key29": "4w7oMneNQRpJVVaq9hzMsY7pNPFzTQ5XTDaK29j2rD8XqB74b4Qq85FYvWcrVAFv86MYxKVCoQrdDbBc5qdt2wNw",
  "key30": "4znpj2QPtP1m3Cx8fn8aUe7WsxyfHEWYKG2agCRaeT81woZAe4SwSeAJYRmPf16Nc5WbvVVCEgbszrKaDRDfW8Df",
  "key31": "4SDCn4hZuiS4BNDobJ1ZLEY7JKQigSTSNcoCmAEeWGppwpP2qPoBkq5gikXP4C2dZcRHn6vZnavb3HK8njJw66P7"
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
