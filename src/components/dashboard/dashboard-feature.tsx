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
    "4DanEktHcocKVGMQyTmkCDnT3x92y1d2vtDRa693ukkn8Yfw8JVS961LdUsGkEaRQgQFc99rJe7S2ctwNhuByjYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xbn3U8jVhMQ4bEByeJUX5vCK2x7MdmbhEE86APXYvWrHjfnrmfqhKADXDVP6PHcZDQuocJMp9KJXdysjH9ETEje",
  "key1": "3LotCEqbbDXdfXJPHLznKJYe3p8SbdGgx3k1JhYUi4kut5GLnyKKJKwAtVJsWXewnu99D2WFosmf5z1tGhz9m24d",
  "key2": "Wai2yvoZZR3NUz9GF7s1vPFebrRz1cJfwEVehAPygFJbhTHKq3qCepuyg4PLRgnZroPnzsiQVK4a7FHr77cdmbm",
  "key3": "2Xpbt8Zep1zV5ERegaQm5NZrfq9ehXhWe3RcdBDX2nbLcd5avUCTTgxmgpkb24XswvfvVU6Zu3CbDpMWZg4iPCSM",
  "key4": "oKnxBF7fRedxWZYvPjEJCeJ5hwd4eUQENdVhdBWVSy55ZACcftFJ14SvuSyLdRrS4daLKxnZS1mFLGtFgtcwrPy",
  "key5": "2De8ySL84AQu3PS1rBk2vxp41AES82p7XR347Ne8HsZoNHaYGDjVdkj7SsSoq7K8wEMRk5M33yGwQU9FSgGjZGPk",
  "key6": "5KskYE8Bmc7pPZSAm2T3MgizM59kMLtTEGkEwF5M9jmih4v7LfQEnPAGMk8WbWk7W44pTesDLKCTuDo1VKRh15dv",
  "key7": "cTHanzgGsSvHu9ku65hU7ZzeRTmfAoTkQhHWeVGkTxBzpURL6YBP1pvxxqiWZor9224TFjttpF4Rj7qu86M1dY4",
  "key8": "2zDBwr2XcjwVxAXW19XxYv2RRgbCL58SXeur8cyCYr4TcyQVyLi99PJ2RSZCkMNdiouM4XNojVLzaKFyXHw1khPh",
  "key9": "2PG9D5HsNDWas63yzmK4s7kwWN3RevnweStCX9QTBUYZcBWc1SmZUrvM7GG2rDdy8rCU2agfJwE1ejh5nvEU47qG",
  "key10": "3x8ERLLSGAsop3Z7X4yWt1Y9k56QCR3NieYZAU8v8fZHwP8BSAmy6BVQvfT6PsPjGJMwosESfyn257N9y8w9iLXW",
  "key11": "3AKs6PJTQPtjCVBKpb1HffAhy4eWUBmWC1JNTWe891ZHrzhg2Ug3443wqckUD7Pb6m13Eopf4nMgoF44Vk1yxUvj",
  "key12": "4y11q5LkBHHvt7PWnKHvvBKjU483k6tu14BSCVE4b3Ku6wKzdZ4t5Ls8cJFGFvY6NJauqs2c69i2sThfSByG94pJ",
  "key13": "gMgfQ6syMCBSGP9ibV1UF6irsNXGjuy2VpxNpDhAgrXophGYeeuzzsSkKaRuWRdt5oce93iNBBF2X86d3MzXcnM",
  "key14": "5cY2gLUiwBp6FvKPtqMWinQMKaxov3UbAHYqcvswrMmEnSAJoQ6z2k6bVTqZ2HAU9WDQEj8JiXjTKRMPwYZzuE7K",
  "key15": "4ydicLSgTTbjPMEQ4JFPXsJZR1DEtyxZ8rzbrumNWbvHfRgGUDEYft5MYemWhoVLempw54XCuv1MkVzTDmbkaxmu",
  "key16": "2zYxP7ScqTtuhEUF4Qq1zzi1bQWVjkkgoZw7BETREf5dNivLNSNt3WQS39A2NCEdV3XkfLofk93DAYjFzDWknY9U",
  "key17": "4AkRvudPQjNmjizKLJj3ghP5KcbsFK1fXp9ybLqY9Msx8UFDHbQKNcpK3EGrZM1Dx8XoqApRva3JcDSSQCfFCZqv",
  "key18": "3ngLgQDTT2DJrH7rAm3HpGAG4UBzzLnZh7TVkfrgQadittsjiGsLmHNREPQQBRtBryUnVoHgfV21wvfA6i3EbRyv",
  "key19": "YGapBDo2ZkS96Y9HxHvnn5w3uKYEHZ8wCTYhbKFxpTC1v2CccUCkHxngjpyLANPAFkZfyk9V5Y5N4XyTuc8kaNm",
  "key20": "2SPAoDkP4YCw96ja6yQ9DUmGrZUifhTtyqUcF7emC1p74mYtC57tWNw1XcePWiCj2JWpxjgpVXSggZTUEBwnu6s7",
  "key21": "5jJw3yGC9yKXoqw75gufCLhYhciMQ4P4DnREgSQcXTX8LwynhCBxoCBFs5NgNzebagwQgwCguLqJTkVZM1M13K1x",
  "key22": "QTaMmwuynjd8qTkV2QebRQxWXNjfA3fWia7CtecD9yyLUCwBDajgZRfsFYpmZjfgnTmhkxa9hyRNgJyT5nHmYjS",
  "key23": "37eFyXg86wdfmqtiCQdJfsgwnEdcTReWj1Pq8EBNjwjGEbzWEUiJfZj1A94EqM3rbWb6MB1VQdrYjvjf1fHur1Pb",
  "key24": "QFi5zyYZKVKuZ6AQdRHpcq5XJVwYNnh8Msdvn6jZW3e2RwkiAwkdSH5NPUvCHT71t9SSTbAHXwPiXDVqYofUtkg",
  "key25": "4ZvnTE3LvkfVK1f55ZMD1Xzda21nqArWXP1RuJx2jiDcYnnJrT6MTREWM7s18oL9cJ3AZXj2pHauzG87kWmqXtYn",
  "key26": "2S2NifRMJuMfeyyttMQhBGUFjk4UxMPGFb7DZynNrTv7JkDbdxPAuu2vNwHbvrxpTBgbcFW3Hy8bhvJcaaof5uV9",
  "key27": "23DLVZtxatujrFGGjsqJg5DVL6pTUa8y391kFQacjxVyy1x9qDY7qGWMrhFWfqQRPeUcnuts9ZtbRBZYJgstZgnx",
  "key28": "32Rsfw592oPiWKQAPqZaKmWk5rvL5CNvAaUsoMvQijV4frJz6jzS7QoGvX2PVg8UDNCUDr23A2hGFMWQ6tKyYE4R",
  "key29": "4g8GEpQAvL75igYX6dXcHbkmYW8FBHANnKR7Q4pRq4JshVXvxHoXQbg3BUfJ4Tv8Va8CpbM5UJwuMhEaxZ7YfzwK",
  "key30": "2oZuhJsi1KGPVcWJuSr1PA7EkGsRDmqWtYVM9DrkCnATaJrAGpt26TJvuDncWa2RkYqztmh4yjxdidFCq2YjE51s",
  "key31": "2M2PoAwwm95VxBcezSDUxVtNur4t3HhUh5xT9GFBXFs3m1txKggF8gkakhex3nhepSHwf3zcugpmMoMY3UzDDydw",
  "key32": "14FJSohqYRZEzpx96GaVyRKDo5fwm7UqAZ5wQ2Z12Y1xCCyMqmnXCYkab1yXDdff8yr6qbnHPTKL7U5RoQnKx7r",
  "key33": "2ycJL9qxM8xsFZns56uhoAbHGnSxKyWKK522ZdJxadxiBCk5qWqnmTkTzsPe54Zr7vap8P66Xzf9pMy2x4MdAPXV",
  "key34": "2AajkUR5GJXVmkhLdg1Nbi6G1YYsKfqHHHsC5c4uw6kSH443WRRcbfnsjGTbWNKBYsHsE8MUKLkB8fn9iFa6WWGS",
  "key35": "d9cZ2Xq2dFMccZ1dknLUpzpraMBFZSWB2VZtv25boxmL53KEjbC1vDAuzYFvXjUG9Y8mDUSseFyuhSiHaV2mVyx"
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
