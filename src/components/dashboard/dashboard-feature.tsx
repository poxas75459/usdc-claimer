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
    "Mdsna8sqKyrxxVWmqPXZLt2frkwDC5Nz4t8vXgv5DQYG77YymopnuXRFACThwXnFWD6kRGHTF2tbrBrq1z8J5EP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xKr3qFmkeRcZihfiXaxPLofnXCbSpR9yqQhQUxPjJ5r4G7YeCnECB9FvBRYdNJEQX1ZQnPrAsF73WF2eiNwjo52",
  "key1": "53AjHVnQzzEG6y8dRcUzsgrX5eJsjznXCEbjr3WkvQbbH4uP4qSbHGEPVh8GthXoRoLkKt7PLPMZ1unPCiMwk5Bq",
  "key2": "yNa1YwudthLxo1QquKBpoqREoAUCteebCtXDddco9h6SLVq6a1oc23s7ZvKmavncUZMFnG7ksfkfA71bWxz31yh",
  "key3": "3DMn4k7o7mNKfyyjhZ5CDHpZ4DvvLM7QEgKNzK6g5xokRaB1H3a6kDAn62DU9wdExnrdMJc3sXE8RrPU1Af8TSri",
  "key4": "2yzWSqRMMQe4RV7yEadV55MPyLxusssfL98g3WoGKtLBCf4PHCpoFiSFvygd8GHMZJRHdYmrtT98aBpwYUyWsm3x",
  "key5": "3g7wRegqUABU7hYYVcBxXgjuyCrrBihko1DZf5AD12GW4dk2BpYrW3ZfkVMLuBJQ9WXkGhq6aiLuv8Ynmr3ALRN6",
  "key6": "21T5of8NnmuX68gCWNtNtoFAB9ntS1GuL6ncSM54ZRPdVnpTVvdwLjNiUdRL37JtxbBArNkaqYtaVfLrkuzzsNwt",
  "key7": "4jeVdNnexiNmR8cdVrnZQczUmEU1Mm4kx7ZyDpkk45RxY2npWZaw2VPmqNuPQDUU3tSc2AkupSGyH9Tk4iYyUQLA",
  "key8": "9ExF5TPt3suZiM9hT7gwfUBM3ZZ8Z3SeVQtRcuHB5xgLtA9DNjNf5NVFpyZAx1sWxEmUcvoqKtesdEjyeeVmNV3",
  "key9": "4nmB8SGkysvdZY8f4fBx56E6V1WrXkyLeEYZhXNNHKYAkWuV1dqpmUSV3Cuci9aNPJWvc6zFRKSvxQG16JwkkqE8",
  "key10": "24VRyLZK8UayBYdcwaRWm9cfHHCqMASR7jU44Fxu41x39QhezidRhBtoCjynHHYmMDYGTfwpDuUBj456FMnki1b3",
  "key11": "r196xyoNtvzXAqrrWprVwTcRWvgCTJQ9FABzxsPPAoSzVAi9MUh3QaGMjbTwTbb53d9wjATKjH23FwFrHgexf5t",
  "key12": "5kR6qe6tXhGv4xqfEVhRshKvcHnYJtoW6TFynfzg14UxNFYxyxHmeB65bByMom2ZpLEmRA9Ttuw9TV1HwgUv31Eu",
  "key13": "4DifeK4BZYUZAfVkocg5g16FCtJkzbgtDoNhyvezpf8sMrfauCbnSmvbz2cxcdsR9h9jFHoYmFEaGRFd2ZXUFMEN",
  "key14": "NdA8haViV2ob9Cn2jcD3k4w54Wtrz22ab88KW6BgnTVJhRoavCBLd8LE5vCZPzArWiPExDexLQoACcXLJwHqojY",
  "key15": "21HrFiuJvFnCge8ueP28hAk7CkqRsBejxNxXRuN6CYeFvFQfKum57Qnqyuw4AqfQFrtHmTY4BksVKKd1nkKULwNs",
  "key16": "337ghXhFPm3M46r3HGUnyhzdsoBCZNszX5onWnUfsHmLdy8c8HGRNgCyBvwKRs4YoS6hSfDkJmJxFcPGvfrY6vhu",
  "key17": "2UcK21pFhogJGf13TVXkexjPczFETTBM8oQLtyzJJXYobTCNzoHTDg3YtQRLMjS5dbPSZtghZhmQogWE9bBaYe9P",
  "key18": "3JmzFC3C7ZizGXGbPFpQyzr7vW4DVKWrgct4F4R3HuEqbKpkdT1LrmY98GcYhGBRcCEGJrUvS8w2BPZegnTnp4dB",
  "key19": "Wxp5G8NtMKtheZ4j3RzSnGqcQRp7F2V6sViJyd2MEB1aMpYmPFKLynrfrYNeCjRMwCrr4iWyc7jxGr6yQgH7FM5",
  "key20": "5CpCuqMb7nZFVwwMcGVKL7SJ2hLaSNKoFQCUtLkwaCzwQj7jR1LFsiid2NDnmWygNC9FqvyLLNcMY87p52dfzM8r",
  "key21": "55bKCw2DBhkVAJoT3JnYpNYG4ATyYXhX1QfwPB8m9VXN2C438g6JebUsFDHMfH9gkVbND4Ah87q6RDGH2wCUUVhe",
  "key22": "3fWAoUT69L43MMgZBGcub1UcVAxPogHC9FJEukDWeqWo1LYygKGaGoaXBW465Us9CRum6B5FPzyN3JkqrzvK6wAu",
  "key23": "4K5UKoY1ZzoyqYxc1wMNFQuPKaf93DbwHyigKghrxXocaDW8e18nn4v6ar3JwU5gUpWKeRG61ehbHide8qozRa8K",
  "key24": "xD3pBsCs7xLaFGcje3qs8iU6bo6PZHkQQbani3Z1Ac71as1QDGfHNwy9d3UN1cgYx8BAB1xpBwzSxBp1z6bMgsg",
  "key25": "uHRsJRsNPrriAymSaajY4hbnACLbbmu83gWcRct3skArhUAUbcRds4CPv4A3jySiGY22yfm3owsaSP2c2DCNB8q",
  "key26": "3a5dcwrd7Xp3WK3mGppude9vRN6t8yovbCzS5rzcZ7DALw7i658qYdSagmxyqxW5LJ5cxaY4otxb1z4Zzkuv8AUG",
  "key27": "4fd7eAELNDNriUKzzAYvaqffzUMXSXrqjuaXACkwjZURN22C6GGcA2tUGJ1Xk5L73bZCmMoeErp7J4TegTF3Gt7c",
  "key28": "32R9FL4a3xGLD7YbK6AXPYHsshbWCVg77u4skPrsuYJmCiHmD56wFUBeQzbRz1zrEWPMf1co85C4hhXTgoiYk86j",
  "key29": "4EunynPNij6LLaCmDzu9uSUVoeuH4J98Hz6a97RrGg1tCNEqKqf1SUV9ntbAms8pn3QJCMKLP8LbtZbbUHTRNC8v",
  "key30": "3DUXLfkeBq1Tng3nyo51fX5bZNXFJfnEN25kPgev6wJVZ7VTFuMbE9W3iGX1nZZoEcjwBLaPdjcVtbHkyqQGB5ch",
  "key31": "4S49JNBPKZg7oPnx3VKHFQqjky4JeJDFo44Xm7uKjamvYRmNariUGUJTESbcJuWMB6DF2Vg86QwAfeAT3k7oDWzM",
  "key32": "37a8wqsenRFVfmWh63zZSLVr5fs6mynEJpicsGWqysHKbZ4t1j7Dt6RbrYSzVtEhJTFa3BTxZcSN7TFqwtTaaYZ5",
  "key33": "nCpzzXnzYMt8WdtGAKzC2ZSQjM8ZdFryezpLfFMo4wvLgH3o3FMoZ58PnmqMpJm9KJftB5np2jmvvS8YtcbC7cW",
  "key34": "21MQoWjsPD3KY3p6F8bKMWnJMG5ud2k3G9sWMdwWYtQMsajxuVzFPGmhiH4VnMMfiUTLNab7gZhvWzus47qb9Mj7",
  "key35": "2E6YoP2RG97FR458TyheoeZRpyYTZLNHqeN1in4ZudQhwtyoQK1CVKUnszF8Srg7KQEbJ7hU4cAJuTex1pWVVinw",
  "key36": "55Ytb5JqXQu8yXmCVH7ZQQZSEsMiJX7qECtFoSo5QJgnjNwsNaAbdfh2JU1WXmL54DA98kLqedaSNn5YYBUQoGkp",
  "key37": "4pwCjuy2QLTytSVTqbo6ACRJ6XQXp3kp7m519TmfcS4sDR46sodke1J2ZpihxuAot9W96xrwnEDm7NLJ7ZXxZa4x",
  "key38": "4bTFwawRbBJyooWeKsC5Zw9uoz9thChTndnTpcbu75TxxdZSauqpbo1BipR8tcKP8mtkMuiabYihQQ2HoRvAKafN",
  "key39": "559eTaVdhFStEot2Pfar66yGwn22GS63Hy6c61ixHZAP889fhU3s4uU5mHhkHortxNARXbexACjVrp6bher1rvEL",
  "key40": "2EpeewA85zeZq6dCQY3tHa2DmStqjRA79Qnt4zN9XdipgBJVGykrxAXZpv3uZQ1ZWSWYdv81vMmqgeDkm6TaYW5a",
  "key41": "u8c7Zk2LasQk2kSj3MD6s1xJZXHoEZBJfQeK4rAWeHzV5nvF947Uvphx7phzBRS2XYV719sBN1RxJGsyzKE5Tu7",
  "key42": "3Q2tt73Mo9LdZ8KtyaR8pEUc2zKZ8rQahkp3xDDrcJS2k4j9CPN6BxS8tDCaujFsDubfPA4BZR1Ko8gfgBD3Kjkh",
  "key43": "4n36ht7jZEGcyhTmujt7DRKkbcxb8bYBF6updUtDX8QQvcAWAzRsTdoLxEFAcsxgAkiKUY9F8zxUQrKRcQP7Xycq",
  "key44": "66qKMZA2NcZFxjztRcnumeeTAbRA6e2cqikRNJWuyccCLjckyM1P9ACuWyDXSLxXKDyis1tGkJ36d38FN6rDEqWk",
  "key45": "2E5MEmKLjK17y3dTwf8y2bqWXcNLcYfzfRyYEQcHV84bWse3RLagCRjKC32k6oDvx3zDBVyZcYGAM3PEW62gB9FN"
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
