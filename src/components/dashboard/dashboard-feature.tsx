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
    "5Vh1iADmWTDzmGc7mRMVB1xL2wsFNhuStMSUTxfegSXShPssiVSScvpuyEamSD1R8zcAs8pAqCyqfaew3Nt3VSi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T4GBZiEp2zdguiCy7dRddKGgMzoMWpqLTawzHq8EmjCYcQ8CEpZPFoWG5FrQSJCW8bhV63edTUYorVygGQNhUmP",
  "key1": "9enuWvqgDp5XYiySvCkLiZ9Uq7ZEKLzaN8oke8JtvF5ASP7pvP7tUMBTymqAztNZbnP82q2HJba8XhwuN5XEnJF",
  "key2": "5n5U9cKn4ZqcVSTZ6BUgFRC3iXkLD6x475zxcVxiui9Sgucvs5niJfPm7i4nuKD67EVb3eidBzoBFyH1vwhdvSEY",
  "key3": "5mKZxFUeUNtTThRUYYmARhAmxGkJ5WPP5tZkvLY9MmMjbtAbQNb9QUDvZjFpEFw2t7CiF6r45auAm7CynsqQFcv3",
  "key4": "1GYB22KjFDL3VkdLhBdvjRgoTZBCTH2K4BfsqKiLU3euWS7uTophjGNPNdDd2UjADP2X4RYwP61r1RKWZNxMtVF",
  "key5": "5fBbZMkpppmwevQhRrsy1uR2KdDFHfR1ctjjDLsvaofRaWasyrnfHDWTnkoNCHscgggy6XhHkRDC4mCKKLt8T1oQ",
  "key6": "2LEVXCNMMg6yoX97JsRMSHCJRgzjYitiZkmmHHupXymE6kD8oGec3KibAG7jz5Qb9K9aFWsNUrQ2X2B66ijDCLqN",
  "key7": "6ChzsnhLMFFK9vKySUr3yPE9CWKqjycuh8wZbCAYGdtjNrYuqwjvcW3923FeqntU4fkrckuqoDMdmXJFbDG7fJc",
  "key8": "2wZukwa4jDUk21trhLLEAgySUnFRT8pLRKRTt4fQRBDE4gQfqEKzrUQS2CZvCVnfQnLj62eYVGqyVnBmepovqS13",
  "key9": "3iJKrpoQgMWRYtAPWbiP2BD5dmZZiEgDBAW7mf9X12wvCMvuNdkMPr3gdcJHtTqskSRSDutqp7Cq9e2xynWicXxV",
  "key10": "5ajkxsDiRgPXnsV6nTSdGUbpyqZJMzpKMX7NATdpWyFm6HVxzjFaxdzhY6FBSqsa6WyvqCmF8tRouQnTWTFX14VD",
  "key11": "4syd6muidzYv9qfXG2LLPVZi9DPhR9ChAT9ExidRnmNCfG5CEVYr1EJF8wt2pM3CEhuvyAMg9vxq8JdyegMeJfo2",
  "key12": "Rg8Xe8MiAQthYk9dUBBTzLKch8oT27fzJvH7v1MjfpEPePvLRDTN1TKyTzfAmzNtHp8Dzed5FNMP3wSqUqMqpr6",
  "key13": "5PjhcWPsVbTPJcW4CkHCFvvBMEpncC6273yBgkDw3RhXACjyKKTeWJTk6Pg6ckS1S9mTMAahXJpRaGKgsRSXWSsu",
  "key14": "9vd7VtsmbwsL1mCiqTRCKNMs3Pcggqcp3adQpVqSUCsNVgrCXbp5RKK999fX9fcC9yNkrBYdZnvTyY3tJDtv4R1",
  "key15": "619W3ExRh7p5Dan4u9tUBuTYneFzH17UXY5CjDpag2nRxJ5aeSPei5uga1gZxo7Vgr5BamHoFeUVbMemzuq6ZB2u",
  "key16": "46Zgr2nQb52x1EE74g18z8s4yn36jr2o5EX6QC3ypiqGsWfp5T43F2Dgw9v5BraXKxJtXiUzVWq7W9xoYd3drJ9K",
  "key17": "36jAAJHqtdSZ9UJFMVDcwwUZrXQDunkjZY5XoqAPFYSR8sDMGyng2AVyoFHp1T5pATMpstpAaJ6X5Y6A5jz4wDw2",
  "key18": "3QpLy3y8im65shhWedxmaLDjDaqXWY3MMEgG9mD3Dkw4DXAihE5PRQXfuwVyLEmpHrUNhDzQY2uNchuzKhGEnHZ8",
  "key19": "2k5dGo6h6e2EmK1cvoyY62HqvNVajpsTKzqxFpjhzpDMYnd7CJ9dffeSAXyF7ET7gLZVoWuDWoTbpBhe37ijgJa",
  "key20": "5f1kHsd1y8EhZDYCubJj3bjYDXgh7KEd79Q2U4dKdSGpaBLJRd4WyvpaMhLxrQJf8BjaHLwA94SUMLUXTa1DkPan",
  "key21": "ms3tqpsge1mKd2KWMvxYbnredX9UGQ9A2FRPpp6xCTcK5Gf4pzQ6bhW5xqPkoJZbqee9K5ZnAWsEWWgdmRJx7Hy",
  "key22": "4LengKvJTPSmYdMP3LcUaai3T7FHA9vfZ3wBMWeBPXtiDHPZrXvmeSFebYrKJEb8TFGdndGqpxY6qApRK58bqZRD",
  "key23": "4VaaVttKs3QZ2q4G1FYZ7dKLYxMMFwckpMTXQ61CZ4rdgG6iioqaubGCNomX3Lt5pDNErKqx1WKxU4Jni9bAvwds",
  "key24": "4jMN6TqyAovKy86WvFCSVWkuRuGU1aGEDHU4zBTLA5SWBLXE4AfkGYgXCjCLumnQHzeXdF3R9FFgvs2Z5eSPBQ9f",
  "key25": "5PGXbcKDtaCBtRoE38ZtiJStLmpkV7dXgZpjaiojY3QPqvuSFhevEdiRk8fRsNGzx4pNafBL49RfisB7fuhcXWie",
  "key26": "LexKckENduNimD7UfsG6k8CSeZaQxKxeEFpWmwLbD9udctpZAYuDQH7GD48PysdqMWPujk8ENXy26PQUW4oJViH",
  "key27": "5QjRUvsNbY6uEB3BE4kKVygEZXkDgriyMAxCFJihd7omLApRRf45rvcguJeXSAKDmBxf9o9Wgy4Mnd9ziq1NU6vU",
  "key28": "3fdcrg8q9EFk6MDhPGaMP9MZhwb6yupKwjvKwRQDAYGsuRDgxrqhkw74iMA9nQ1pm8VC2G53QFCi4ZtMLz7QbwXF",
  "key29": "5Yt4cNGyfiTje39TP7XVVB78E1KmgBpHcRAQ3SFqd2qSdTiCxNTRuxT69z29QZ2MZ8jc5n9KdXUk4yoH56UJT2f",
  "key30": "vLGMbbMCSjyRapTv68d8jA8qvxT32RGb1jfv51mkDNZsC3zpRCFyUpNLEuo5UR4o4Hm5aXaybg3prwPWEXjsk6o",
  "key31": "2gmsuk6kht88FNBaDM1sSucmpgo7CUJiG66LXYe5x5ptwLaTMrvshQWziwijZk2AoehPYstZ6LCLbzsAiyKTAwFY",
  "key32": "3M6FpAFLLrWfmhKTeAcrWq2Hfs2ZXbCVv8UvH8k3p4RATqjWWV7V9nMjPMQzaa27hb3ixeNEjEkmrbcDocgMWyxJ",
  "key33": "heP1LcFrfLujrKGwwM4z5oJdfo6NuJBPJ1EnCDbd49bbQ4Vcw8fnd1ZipHFGqmY28tfTrxBZRpgMdHH5hQpoGET",
  "key34": "5iTdeXHLP3ETA1pqhw9BHNBUUSSLE8xP8wVEV4yCDgEXpxX2o39VLMe1Eb9SvxmcA5q6dWf1FDMkSuAMEpg7Gvy",
  "key35": "2s5WjQseQSPwavgDwEsqxCgzMUukeFeVCWNAVJmpWKNitMzNo3bzXC7BcGzd7qud1mdv5NYDumR1aEYWmpBRmPbU",
  "key36": "m9DcrVKECqmstkiRbzSpMeUZ8hQECyktSyPRF1vTCRuQT4f8siifjJCgZqgpDM53zAKwCMS4iKadg5jWaNL57P8",
  "key37": "58PGWjenjcm9KqfEb2sgbb3Cufy98496yrw4vPMZaGcCdXZMpd4Nb3iQibZ35aptKQ3kzmkWppMY8xa6ePn4enfk",
  "key38": "4hS1EJpdTvtm3FUWzVENFQQZqpbXkaQaLfWZjM6CU2WktBBCPay1o16UyFNhFmbcz61xTTExuiSy3vwzcdWpekkH"
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
