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
    "5auwDR3CpJ34PamDmaiYHAsQ8WXs6QxK2NvrWVDwF4CKYagM97Z1qdDvNLofgt6QcXreD2Db8gKXpsTAaBf21YD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pb1tjjKhbDk5ecNMd9F5gm1fssHbziX2xEdFKaNs3x3ZLat2i8Qg2ayrnpefyMHSBUdBBDJRWn4D4U3gWNLFBAs",
  "key1": "QcLh6cCqDi3XX7zPn8f79n2CBdYRbr6ZRmBWZr6hgcx4wiUJCn1Sy1AVKoTbEj74nHGGqLd18Xh3n2AHm9i9g7C",
  "key2": "2wFYtHKXaz1gHVPXNAykLwocNUwFfxxN5N4jVj9hLY2dGiTuebUe7swGeCsmnyQNEneV6zy4prP3A4c3rDBipi3L",
  "key3": "2cuSJHoiEVBdhnCscPxX9cqArYRGyz3C37svnTGqf1Vk4x78Jx8Eoy5KgiLVHDf5MZXjidPa7AzCLu7AGhgPR3Ge",
  "key4": "57y6oNNJoP1Yk2vHDNPRwPX3cuTAv2rxFRWQygqArwdanpZyGh1o7PT9o7nowJgqJ5Jv8vzgqqS37bWP7ZBUseZU",
  "key5": "21N7uJiRXPZsH7HUNYFAMvD9qqiQaJcFULHJzv5EQAxLRV73EU723LgwFZTP6CSKtJoeJCcxfxVhaBQsDZzJc83i",
  "key6": "47aRMrhKdYCEhnxyhpSa1SLCCAXnVuXvMcUEMfUBJD5y5kKzcJCYfzVYBK6hNnVub8FZ5D2e1FaDxuwUXSmZu3nY",
  "key7": "4dQfKKZk2i1qBhQXyhLNESpC4mKyMz4NoSC8fhnHMhgAnc56Y6jdGfqDU4ZTZTv8CVHKdibaWWxgXM7rXRTU1B2Z",
  "key8": "3RFimKm1wHDketkVpx96xh94zDJuvS3dPhLG8u6nG83ECnkL6bLeZniPUK4WouAj7WZddzom2eUdXNdHR5jcpr1Z",
  "key9": "2FnZVE4ZoNUqvU9M79aMW1RMztQ4BYduwFVXirUCgZ5TiV36iaG29VEpVPoTAW5asHNm6dzbgAq6Ruv9p1Xu5vsz",
  "key10": "5GVjJWfh36k3qLTWLJvKyphFibT5h4seABUR1bzzdPzor3j6HEvJcJZob22aGLZuQoUDUyi2KWmNCMTYSgWpLYQc",
  "key11": "3xrakdVcP6bCsoA8skK269nAjs1uKZkJHUsZQx82oAr9gtBL81CS886okLZLN68UPbb192Mptm9h8mSMqF26LsYY",
  "key12": "DeFXXdVqQTSFkKSamCPK7ynZZkiHfwWRQQnFyXhYGtBxSWcDqnWUVtTRG1gSd3wkgbYL4x8yWQeDRRuwoxom7RK",
  "key13": "32o42c8nyyDuDwTeRy9Yrv57Vxpz1pwJJrz6JUMjiAgJfF4ZMRPG4f5JZ4eRd81wpjjvDcQNVExYDifM6h7QbQeP",
  "key14": "4wMZznQsUP8yjVjcpY5wEW8yrHGB5qqXnA3T3yZQBAv7gUEgWmAgCkzpsX485iB9VQnh4bW2xGChDCSkGEZ2eAuV",
  "key15": "2qBQJ37JbjczZiHKgpquHfsCmHYaCBzQh62uF9D4uvNjdG7Z1kzpF1CidoLj4xrnG1jBRTFApkx4YeY3bFNok66b",
  "key16": "4WzQJxFrPQDbYjGSaeZNwfjQNZH4x4y3Wh98KRMj8jcCAGZCPyyGaT8rtDkWGTjt1EqGi5Ek5VugUniyCsUJuv4a",
  "key17": "4uhsuiXHU7CMpJkJLUHcZrwGeuoViHeFBx6UbH5bq6KrS4pPd32mUpigUjexSCakUxv52KfYwwEPcH3DYufbtBek",
  "key18": "5ErAe9Z2vd9REtPrfKsbyuL4JQNQbBvwzsWUiDGkZfvqP1Sqd3uDA5Ztq4FqXJ3EbNqSXu1nwtdJBbNGvdr6XSZj",
  "key19": "3HCL9VpTFHA48jhuBdZvuS5C155r6pRVsjueEEK3CPTD81j2gkGhAx1ykeJup1on1iRy4rUrfdy955cRsrcKttuc",
  "key20": "3D1HRoAQsFcrsw7EeEct7fne1fFRCqymFREQxUSBV64FCrazZd97sCeNGDn84mSH8DovR6gyk2dQSuaoZdMt7THf",
  "key21": "xGuh3yRj4ASxSjD6nxjWTvGyyvJdaAZEEj9iPb788QqRhiSyXWTUPnkADXrfsp2XKd5Q5PFeTegQs4Wf6b3g8XK",
  "key22": "2Za3kHp9N7jPyiodZ1bgMfnqEBqEfMbMsig8B61URYAxkoJgcXijTeT7bJarcF4fzytW2QaaVPmDW7YHFhXddNh",
  "key23": "3XWTedcGL5PmKXxpTCz2yv3ArJWPrNPmxD5BmBtBe8DHvykokmnN2bfPXvTd3HWDcfzHSkhh7LGizVMrCkPi9KoZ",
  "key24": "5G46hE9h3Sa6FxTJd3Fjaaavx9zT4AJQUhTdbHtELT86hk4HYdosC4P8UPNf8dZasCiKh9kaxREsHMDHdy7s8xYt",
  "key25": "3TsMTZNFfsNyzjYXJjUoGDH2frENzzaYZRcpb2eDwzf3CwjbeLCSx8qgBDXybH4HrLEt71ptYobwFBXu9CBH6uuN",
  "key26": "2KCi9waboCq93DAxqTESkV7JNadrPcQXvZhx7cZaZDLMqS8rGvQ9mGwb1zEiAiJfkWULpjjrv992Dqeo3JTtTf9k",
  "key27": "4MPFcnRQnsVVgBsskUgTJfu9CgSSsBFdL8NQUUXDAvhJ5bB182miyy8xQnRikwJwuUzBNoUPzJFpttZHZqdFRry8",
  "key28": "5P8jB2wUYdAeNTX4YFqVutBBxCCD8MeNy3n9v727yBuHaB536TpnuEtaJcXtY1M8vNty6kM4AEkqvU27LN6nhZPz",
  "key29": "4SZ12sWQZ3Wud9td5a9FHkjkksKU8K1xJmG6zdTJt5sRgwxnY2hcYVRkahoTe268Lq7Mi3i8UnnSDSCL7kyd33ms",
  "key30": "4cE618cBp5S1rKUp65BjkJ17nxVAA23pCDprkSHjhaSNk45JMDSppphziWeEt8wa5xSKJEtUaVdecCD6i5ebpgAB",
  "key31": "4NBG784c7kWaSwVwk2wYnusYfNBeQmK3J4nPsRyQomtiRenNKd4arpsWZUknYJ9puWFT4nRCcjWeeQYEM7FgM92x",
  "key32": "2cDbFuU5HfMPTEAU6XuwUQXWQWNbhToG5SqHQDeZF5cD7EPo2D66xKPmeYgB3MubUqGwLdVpNmRiJMAYQDfnPofH",
  "key33": "4PYvmyrbRTf6uckU9NTW3nyJf5HzL6F9zoSQUwLQ4B9cPR6GRG19ee751UhtU11KphfZV8vN7wJA7erNkHkLsgxD",
  "key34": "2NrCpbLU4VC73gjzQms7HFW2STZrPN9rYNcLHk23Fztbdp6hRb24TQyxuVqRv8J211KrZV4hJcJr2rEYkLnnKn7x",
  "key35": "4T42nqB9K19N5VcdzKiK4a5efwrNj6nt9BkRQkCbQeeEX3xARBVXCebh8aku3s9sVFyaqaw1BfeX5ttos3uD9ifj",
  "key36": "j4xanPPEASYJz7MsvPVz5c4RN1TzAZnZycbd2sxuQFZfSku1nW9vN4awf3t85FdPFY3x6Bx6v9pj55hpFog9Mrn"
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
