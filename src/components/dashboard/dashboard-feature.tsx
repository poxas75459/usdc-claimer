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
    "4EFjERZkF6YFLFPNUVcFpZTd7PFBfrNKtdFJEedoZrhKyWdL5vAfRMMfJ1NgK2bpGnDoPZ6mxoyFAkQN2Ux7qrxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TEdc2ZtaZVMehDuNk2FTw1Ev8sUNjWTFcJrXFo1RpNw8dCawQ6jMEbRMSHRD1idYTpYnAZp67KEVyCf2bDQz5Aq",
  "key1": "3mh7hnN7Fzthh2tJuaBjjJ6Fpodp2tXWNPjtmqRdBZFr4Z2zui3ssxy9r7TLAhDaEKxBhQVJHV8P4ybycvawumF9",
  "key2": "47YJ6B9M71cVtiC1miQ8hLYVLQq1ZBafMMZFjQoomYCvdygvvMHrSDS98KCpT7xrQTjGVeLH45GtDDZaYeiL321z",
  "key3": "5qZYv6xkG8JAifPmoD857b1VZHwKFqRz6zdhSEfPUZXugX1omnbBCcvMfaF5s263uPgAugkSGhECaLu1FrdHimVJ",
  "key4": "qimAGy51Xqjk6jGf5rMQk9gpFSPnjkMcMQ2LknwbEVKP1fmgbs7PmKhNqh8ZCqYMfzKy5bZWD1iTyfzUNebe48a",
  "key5": "28oBAD2RmpKagqFgGaMS7GajxrxFp1WDTk6Vke4JeMwtoLSt38RC1tTq3r7kSdY6U3NzyyhDa7tEHfTzC8SAKbn1",
  "key6": "56wHftC4ik3j6C6wupm1mPufrJjUoJ1vLVnEY2sz4yQGyzEX9gi12sBxLf1MQmoBqpRauAquAkRgFRM8L5cYETvn",
  "key7": "QTVJQJ2muS9siHenVkVW5HaNWjQs2YAu4ynh2bAZYV1CRUJZNAZPjFaAjdcJMKbLna7mi9fAXeYZjN6yZcqiNno",
  "key8": "2XGPFxpAgEFnJoUMoo3ohfeHZFffkrbewyJidxcFG4cv9LuFronxBPaLZocNsepCZXcdFQtYiGNdJaMsu2XzVuyY",
  "key9": "5tK9ZxhAy96bJiBfd2tTBa61hiGhY3e6LqNkUMxYmpAQWnbTSiDnQpgsE2scGMAYXywDvAfgP6fPLiUcjqnTCp6U",
  "key10": "4QYMKSwsNbuieSGS1SQuy2EoyzZxqKxQ82UmRDZLQtKrJ5XrZX4BTtD3gn6n74Ch73gP1WRG6SG9mwiqfxP6P1rC",
  "key11": "3EowZheU1wfNXaDgHUn7TeS2oLH6DF7NUz7SXAs2D1AYhdEbmGJriTVmhMrirVT6obno1HhKpEmsbfysGWgYnvkT",
  "key12": "37EbZt9SGsxfaGxDZ9vMrfgurhtge2cPDj5cwjmp7VmV3MAkexjEaQcFFKkE2gUnfDiiPKznnkdBHiNmx8jJfx2y",
  "key13": "2nSZV83H8vxYEoHBzF9kqbFcwijBsTSgAr6acgshYMzWworqbmi51N2VyJoPFtn8Y8vF4aZKpwo239G26hc21ySA",
  "key14": "2a6QpS6DETZA2BWAHmV6v8NRz1Zh3fDukLLQAP5jCHymvwv6jJ3hhMTfcFL17EueJSo1E8JCYLAiNHUUvj8kkndi",
  "key15": "2aZXKmFjz29y5N4jVYzm8ERj6z7fHceamEfLZc4KKBiLPTPv5w64XtoxdYDxHCnUFswgiEnMJXmQNJD2vfHejFmW",
  "key16": "2MpwqqMkihJKCxRZAk5R7TUbkG4P8CzHzQ6Zw6wC3exzugK7XHBR4Fk5gvEQWzgiBRpXrEH74rwWNghEi2wmaRTT",
  "key17": "2WXzZYA8G4Cgoqi6XcPCgh2h6PrcNvDmgor2Gn2bevHMatZQnFhioPpbE5fKHHvTY21cXnd5YoC6PGCcC7MQ7N5L",
  "key18": "5frZWdrLKRX5fpLHzyGp9rkBFvegQp2MPaVpGbdP915c276xP4FshyHpKmsttjUPriNDXbTxd3wYQ36vZXMCPxMy",
  "key19": "4T4one17fK4U12BMyVaVaZAqQyyKLX7Cnp9DaexchVAk3S5ZLoXuuzNqkntWsKjFUejdw9ggKtybeday5MteU1iC",
  "key20": "3rBiiA7ZZ4UhCVHcEnLTwWQwbVr5DQwVzgfeT64fU1MMBfEnmFC1VA1vvquo4mHFBvFcc7PgGyX5yRWE8P4yGzyA",
  "key21": "49JZjTvpMcESSKG8i1Vj82mQfqWc44CsvdiAvwAUf2m4wcQksHDFr6TSGSosxkX7GVwt9j9jAXKwmHEpjBkfXNWj",
  "key22": "4VamWr146xaWBWZm7r6wpzTaYMvTGtTCy11svSw46UC4paZgkfjzmPafK212QGFBT7odFAduMyLco7v4N76NCA9n",
  "key23": "4HZgdKrQMJ8gPe5J9vbHUmSWjkYLNF23WdpzJ6FvYHJjW7WN69JUwEjheSgbXr1tF67AFvroUjit82DdhggvcbZg",
  "key24": "3kDfkKT3s8gLj53DPxzxoeJgM76ErXhFZAjLmM9Go6Ae96GjRdGax86XZhs7EtVtENrmogTtV1yarRnHREmCFfRi",
  "key25": "dyMu7ZAWyQtLDxwP9He5yAS2yMXoRcaHmMj5wygN6c7j2QczEN22tm82rVuwEBmmq1vJs2GWNfpvR3vCPCEi1GP",
  "key26": "4VDFHfeBw5zsqcutcF9fjgNAmYa1auRmCcry1tQYbXBijJBz5DXNtUifrJbCsTajSQzxHWLD9BkYsDUZXWyoywJz",
  "key27": "3nKNrG2YDrbcmanfUqH4cXABAh7Je4QURKvXe2FtnxgesDpXHr93ho8osBJSmXnY3bHxYjFSDKr8ZBniMbbjNgiJ",
  "key28": "zD7VBFhBaXhD17Kemyq8CFwCwJyCQVHGfERV2vn7cjAJ4nux2MhY24GXLMXrn5R1XbPnvmdELqgJMPmiZyub1ks",
  "key29": "gqtNGtMehEM4aK9qGE1TDRityZzifbKVKXFTbPcFA15AxRknBrBSmU7aeYLFGyN86gqQLAWhTNAF9DXEDtUocwy",
  "key30": "5PWsz8xX7yY9cnhZ2W3Df3dHMuwkXPFMsNZXy7b82U5AcoLQjpYJwu91iSZvzqH8xGbYgAJZGj5EydBVZpUSosXX",
  "key31": "2yYrcE9Qnhzkvf9WoxasKaMDGpJHoww72J9HHd2NFhPVWQSyeNg8SW9EHcN6N7t8xxfWRDq8d1NoDeLDPjP3pqb9",
  "key32": "BWDoni1aqgmzoxMajXkSQkby94pGCZ4j9e8X3Hzx3WPyTUMAzv2Wo7Spunmgp6quuTHFHLiMpbAVdQwqjyToCQY",
  "key33": "3NV2LFciYA8BabuJJUFowhsAfqiS52QJ2cmYnhFRGbBAj1hj8q6YCG7v6sf7Z1naMXYmgpL9ZrDMmhUDxY46U7c4",
  "key34": "3JaNH9vKjPuPFzzDZUwuQmQTaBNUVozppn1tgYfwKpr2oJMgyAQybExXMRTnWuKAFaRzba2BHJk4yEPLB8Xn8Jx3",
  "key35": "2G1UEQZhbu1zNHKpAiiGU13NRNSwxBEnGSuvxde2jFZwu1RktTJW6UGDwmQVhwVCwNmbbAo5K8r7M9HEaGYwhEu8",
  "key36": "RiEghJvXuFx5bHm5zr88twkUwuThyyCmXVAZtcrD8ZkFCSgFj6ar3MxdBCTiZfwCg43UA2GpjGHhzsi8zcTHghb",
  "key37": "4jGMEYvWPez3XUzj3jg1WwrHmKq9BoAh7JqGhtVhQTSGqEvdVSZthwqSz4CcmgWEFK5ZP56N616JxhxdJL1pM2sQ",
  "key38": "4pHRrZu9fc5eL4JDxMjA12dxoT7AVQccn2FtuSr5ZoeYSckZe6uMDwadGGSQZTV4GB3pGAcJ38gzhunKzRRYYwwT",
  "key39": "4AgmVr9ouzQABUaQ7G6U2WeqMqcSWnsneRqGxJVxPkHPG21XWm8rahKsQSmyDdq8X9RFfsJ1qQ5kN1eZwbM6tnbf",
  "key40": "62fK1X7hxyDEcncxDgrwXoRPCFTqgsojzdPbqUyXi7hxNB2vWFPYmy6MzVdhhcozBuwC61soDaioZtYJLBsBsUD"
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
