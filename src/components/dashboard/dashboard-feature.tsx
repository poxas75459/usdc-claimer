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
    "dw5oaB9zDxECaDyMCxSxEPuNLvA3pMvXwdbuodCqgQrB4ZaHmWbZ6SVXAa14HDWXP76kBjN67YFS8XFNcxp5MGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HB2oUxCYpeagW2h6pvdRjfoprFsuRD3NpWGpXU6ry16exiSzob6rNzu5kzj6Pj94FCgbob4Btoag2ncwc8ek2te",
  "key1": "s93G7APiNebvA4zCp4vZYhshFLwMaqYzgF7dbgNSLzZ38kfusKU8SekLeYXk1p2rhwKFpHyQKGFhHcXCqp1egXJ",
  "key2": "eJbBCQZ5BL2qE67GUbnpLUnwKxTXWxec6di9dffa12GgkfmHxU2EVQ6prpbtRaQ3QWsCfd3tBjvQdMCg8ZSG8J6",
  "key3": "2QHU625Uifbke7ZYQZ8iSJTJkKMNJ4aQhUuXWobejsyL3q92vQfofUXkFHB9QiUAqexMftFruo5AyuHfn9Yqh1LT",
  "key4": "zrDCCdymMk8gsSP1CG5bKommRb86xQm8uhGLXKQXpxXHaZYvZ342Tsn2MwX8EGKtmpLqT1bqg4pAsg7n5Y75byg",
  "key5": "4C3TXgjzPFt4YSScPSh9EG6WJtLezn2HySRUz4dESWQrU1VgwD4sG8gac5WjiVHxniAWGHjwWaPGyZBpvPE6eDgw",
  "key6": "KUKQtJeAmvRRpsYK5KkcpQaY1kSFjo3q356nvMhsqBnJYLGZZeQggjFNAvaEAWutjTmoLSy2CQw2zLSi6AwMJEs",
  "key7": "39FuNYUqAVCW3cVVt5JqKjqN6YJWyeZ9J7p7vAPdsK3Kkjm3j6dEhPKR9djrw5iSgSxmvhnHsnhiFyphA4Qaxtzi",
  "key8": "3cYjEpHjEfLUqPTztLRBkfZQDNJXKAe4WrP5CmX7HBczZVazsQP2LWfZvJkNzjewxSe66yiUPy4kemv87RbigHtE",
  "key9": "44fBR6jdu5x68EfyQ94AcrTAsoYspTArkLnyxuRahYSA7siAn74hajzhFo9fADoNP9qp1mz9o3VfxhNU3EqUD765",
  "key10": "2ks1aJHhSFYKK1Y1w5HB3hFXXgUiK3Mfwq9cQgUQvt7a5k1D1F8NFoEyVyiRycSyrQcQQqoktREfZXLvaqRvfbKC",
  "key11": "2pMqf8DWQfwgVkK2Lg9RBNkiiQkYAzdfjSm3GH3L6n5AL6wKSF8mWmTWGjywrGdermy3hE7yjQ4mecFACEE7D1vP",
  "key12": "3Nudm8buNausF11YuVrctyVhQH5wDfS3e5wJaFRBg8LVEFWdMYWkuL4JHUtv7qcRzT8cQVZZfdw8uodiKZ2AAm68",
  "key13": "5ZM1JWv8f2ev4QBQfNGnYbj6GmhGXzhz9hjPiy7ViEjoBpTzBcjaXp6DkhmLk6zQeVRRsQ9cRQ6kkues2iWF1vSD",
  "key14": "iGHY1idgRCC4SFxgB8vEY2F8548UHAb2k4EkzvtUiGCNXC8MNk4kp4hLNoACxhmiSPwZNrkmzZTTxjmN4nF1p99",
  "key15": "35QcCcZ7ai5FCrEy2KAqgJCuKEzeh3Dx4UAVcpmJieE63HhmHgQ6cBDNLGfBnwddY1duvdbH8Bv3ywuuNiGzwjE1",
  "key16": "2FZkC7HST4UjjKDk2WoTC7YHcnMuaZ31DmKdfLfBreXraFnnNW5cSnJG3MQDFEt2pfAwgmRKrFhgVozPkMR7rTk3",
  "key17": "2sKqHoj1s7iig8uggFuD8tT5eApRCoqpy7Dg4D6pXjxN9vNjDFkQa3h33fJMnXhiCfDrrNgD6XuByNsrWZaYDMZY",
  "key18": "2ECsq4Y1s9L35EcyZ3wsJwSKFsh9UaQ6tQEbCQckUqdJjrkHmXwizSZNYgHT7gAyFLH4eGr9qJEQ7t481V99ptnN",
  "key19": "KNz1FcsjqsB34Z6EpJ2c7RNX3tkoZULzxn1CZCUpzZBT1z5hicTzbKv99cWqshdHPrppshDRK1wam3ak7Xwp2vz",
  "key20": "5MWfj1yjhMT3x2JqxoV5csmHruzyoeCPCR6KmC6jxpmdSfMrbCZdTkTi1oh5aeSs8RLJRCY8B1NXUAgCSSaPab9C",
  "key21": "2KsRBKvS2VLg67dbw6oeCnhPg19zntEQo6NfsWsYn1SnbF1asn4jm3ETYJKVA1jecotxeksUgbENfd9ChTFDUrvx",
  "key22": "56kLc99A5n9zkCAohobb7ELVHrWFzE9EEUmDxgAsaCeQsj23ZiuTKYwYnNS3vheNJsV8zY51ZDwk9gqaZN6sQb8a",
  "key23": "4vfoRsVTmfgB1e6Wdknd5RTHH8swoL2tE6NemCREJ5SySi13TrxC1m2A5ZoRVnuHg1bUbd1EoDhiogv6HkmaMx7u",
  "key24": "67Me6HhpCiSwm5Xhjx6pNPXAjRWvPU1XLa1ckCFCmCVUkJfqAEsVuuxAz2VbzQstW8iEJPqn3JVeDcdKkcnHVyPS",
  "key25": "3qb9XYP9K884Asc7dEK2khWz39LseiqMas9smUmsCGtcAHKvc2kVNnwUkmvSVGvdpde4qHgU8C8knvKDQ6D2Ke6v",
  "key26": "3jFtzsCtY9dGqET6gUVDD7TMT8fxpkRbjcSsAZn7iRjo13F3jNUSfd2nCHSc7wv66miQrMrYJm22itJkpAd7Zfpa",
  "key27": "3WPWL3zuc4W7PCYn2wBTphDRko8zGzx5C5h8gV3hi9ueaqrya5aJLqVrfDycz4UydCGrjQrekTGy9ho6aN62vFp5",
  "key28": "2JWWRZCYyoV5PASN52L63L8KwLnmE1xzHH5CLbYt4AP1wNbnrLHxozUfJkSU3xMoVwPU7cS89ZkFP5NuMCbx4TaN",
  "key29": "Ra4VsJKXu5FLk31XfVdopocoSUk2YZgXxUCgNR7pPn88YkJfgpL8v245PYWDgsPZMyfdG9oSUcUKZg5qesmFeMX",
  "key30": "43cLJ5sMHagLbMANoCR91S3ucyYAoECTmEuffiLFCF3u4hP7EUmUDmBQuwysHf2fwZMvBYbEGBAb9R4yjmV7kc66"
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
