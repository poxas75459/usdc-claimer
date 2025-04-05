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
    "3xeJVvmdG5mNXJYEah3oQVKZL7XDxAs8r5CpbfpGkfZr2fZZmEWHEY814PhNXdTGADx9xoVTqQ1CevExB3ffoE7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KqcWM67Kd6MjgozS6kZ8NJCVTyLZ6TUTpywDfTvSnZyLxQaWYTPyvKtBW6n7Hkon8WPqPJGSKjbk4ei99MYJVg8",
  "key1": "481RsNf6U8YuFKmHvXSUQeXbac15ZHrmkNocoTkRFYiEZTRyxYAt6haJ2AAGbN9CT7a8QALqBYN35HFqnVuyjovj",
  "key2": "4dvs83GP5XY6MHXaTqk5ZAMdzSAeYnTsMNhhfmoJvPQqptwzwoqq1XxPj57fxSfjySSmEu91LtxVZQYCDT6BgicP",
  "key3": "44fktb3bMgAScszrc4Yzzormicjf1j1mTf6dQ2vkgsD7rV67tSybZehib2m1G86ToxP4WJnypThZj2jfKmt2Lt27",
  "key4": "Ve3MGJu5iGFsLWmiGn7gqHF1p1XyxjyYyD97JvvvqpQzXe4BbiXbEqzbXUBj3dyKvFyoMrMFKX3cDJLKhXxddq6",
  "key5": "b21CLfzqsAHWdvVtJyehDRCBLCYohqZ8FZnst5mPJqwqtSpVounRQV86vhfA83wyBocCK79cwEMa4jZZqxazRNK",
  "key6": "a3mMSk1bBv93v7GLowFaHynfJsZFUYfcDEFHmi4DeRqWX6iaecqN6Tho2f1KY3UV5Fen1dKS6SN4DM7abnJyFBg",
  "key7": "2KFiFbF6EYG8A4Y5Xja4soy8wAXbgpStMF74hWeL9dZXShwDrRRoKbp4Kt4VQggtgza2BsWsxbPG2Y1JaLxDEsRj",
  "key8": "PsF7PVJGdBKBRg2kPxmJZhF3qbisVGQBoePEyE3jLdSBmi75giHNjSCxuvFMWnxCVfBk1t7rd2Wo5Y2FFzpBKWm",
  "key9": "4xkq2Uh3ud8LgRWW7wTGuejeed5AUmGv1cyu3fhBZPnL4GWJAqcZBx1b48xEvtvNTCifCUsgRru8cEWKJTM7gj2t",
  "key10": "2Xr9ZFScnw4w8hCi4qJR8Mu2mjtEraey8fhuu8y65gB8tNtogtqyxqguUdtL5Cnc2zNugVMfYEK64NXdzC32YABM",
  "key11": "dc5uxsn1TxuCREgxRbru2BxmKCumGwpAVN8Xo5mkVPccNBaoKw325GobcQmf8oRide2RLRarQCmqCL1S6iTKUCW",
  "key12": "3Weh8zCpLzGUfqTehfaV2DLRk2bJ9gYKmz9Kjb5RdEtM6ZcBbMKyK9SdDo63yaT8e2Wz6Wq12tx9cxGwvVGKV5Q5",
  "key13": "2a2hgkH3ud3dMkx8n2XJ3vZJP8fAKCyMzYt1KkkTw3JYkmvrN2Mvo6i4t4tUUM44uQpU8qfjtAZsa2R9f64L3c9g",
  "key14": "4Mz5jjNdfLVhKqawo3n4zEW4US7FNhMsHr17CShS3LfCHh6H2h6oTHbWiij8HrFzdGiA2BjaGtsz1wFaP7YmZQqP",
  "key15": "2okmPCMuy73No6KXDRjfjB9jYYydhMbf97r11nYT3iTFcFcYcCQuxvyJJQ9T9Q8TguDR3UreJWBTfYscbxo9FPgc",
  "key16": "5gQmLJ7kUfDYHNdNFp31bjNaMToKkPEF1DBLDTGwaRKUE5oSMyYRts4Dpw47LD2JqGveAto6ZUAWY9NUFmXEz9xB",
  "key17": "2S5gTKxiNoAyhpkjt3tq8GX5UDjTFeoqBDebZ1SkaNPcgeFiu2v9pWrJFC3esh8GkAPxFpYMefzfECiVZG79SLVt",
  "key18": "P5YWVqDtELhuDUH3Kw2t79BfmUYbNZJrYWtFwLTcjys6RG7UyPsQH2cFHVrBMfvEsxNFYQj7yq9kmYBzHsC27qp",
  "key19": "3Q37LUTxqXHW9SmxirAWLNtLyDfDW9asqdsKc4n7q33QnB183WSzNbht3esLHe1B7edLaTV4bgNcDdMa1gUi9uqV",
  "key20": "eHqWbAcUNdzg2bVnDXHWA55MfuCKbXCsCnzV7Mp6ZK83KVkxahsLXvfyRVAEASrKomE2fGZcPCLY5C4V9JZm5Nr",
  "key21": "2GzxeoiuneKHixEUVSSjpK83p2VtVUw59MB9cbS9kxU4Bv3CtLgaGX2fVfSMV4bjTanW1qE8syk1cnPJmoKFzcsk",
  "key22": "4F4A3DAqvYDjhW4G6aJ2kgPvBYMWH1mwhiT5ZpFhKbwtAXG79F4aRTGHsWR6uzvs2jBsdmZDLqTut7Q5uUJUU66M",
  "key23": "5jhFs98Qkv1WVwTSGTCRj72JPzg5dw3fAQoJz5s2kiC95z8bP6GXVJBd8B7Mek7GznuNZJ4c5V7w9YsmTbCCtH5Q",
  "key24": "4H2mXwSyDHwSNJ5q9oBvCwvBGDH3LCbaWAFMxLCxEaGof49jZXHc3oDVNhjyn7givQiKH7YsLW5FnFXdQE7JeU72",
  "key25": "44nwyb1vocPzL66c9FYLk4aQvJcdVSNv9EzqpUPSa69mwB16qYZWg2JbGLGTix4cfxbNStZq3N89YMiQUzM83r9D",
  "key26": "5HUDmxUUfrNRrvM34izqv1eFFbT8MMk5LsJ7niSzadWPFWeQnXVPYSjcojuzMwZUzkCJ6EvbiwyvpScUMsevFqxa",
  "key27": "5YoFmgxqaVwz5d8gZ8zxEkmzCdumLDkaTZSECnVG8GV1GDwVwt9gggYRGQzkbdUnrqmwaBASnecGiCi53dRkMSEN",
  "key28": "62KUbef2CWK6uAbppmP26f1FifYMUAbHFGCqji7XNX6oWTrYrWveciYrKwX3ekdY3FsUCyX1sAVyR5jXDP3dVy7k",
  "key29": "5if3a9CogWzqe1KxzsSJ1LAmSY8THWyYojK4cMTzDSSefF9VgX7cBdykAnB3umPX7adNpSPtZBfzmevKRwf6QBFc",
  "key30": "3cvywXe1G7CAUjGM6yt6EdpKyKQTuieoZfMrR6Vei5nPa34bGjxzvojnyLpdTGgUoN12zYgtw92wiCNQjWjUjbWy",
  "key31": "5hPgDXUrYCrKjq1577sHEXv9tfe8FyCwBK3djztmrxJZKFZiCpFGQ9hUNypWkGd1tGCsehN4pheXaNbNgYFDBx2M",
  "key32": "3jApKrpVqfheUUiasJem8DuXd3PypP1xetYSPJsWnG9atgvf5MHWRFYbDPMYb129FYytRjiEmTc9ZTEGsdXjH5vY",
  "key33": "3xFDfxzo75Pobz6UemkT7xR87UYTCjPtuyB5Bac2Gb2nu7JdRqqmSUJy65sQLtXaHzRzrdg7HmWrJLfP7WwAz9UY",
  "key34": "3i7X81S7LrHLozj43tfa64tdyZAUao778PmkQt88BCaiK81nPuV3aLVRc2ukur98T3jRmHfytsWSa9f9xEk7f9Pd",
  "key35": "4aVMqdiJqUPmmV1W5Te7VP5MUbHAawnZtcbH9ZNH7fBzVX6NqXeS5CKPTX4zqZJb8FBx2M7YCXqnkPM4hAxVzBWv",
  "key36": "64q1e9qugGEHPmHvEAFGjSuWSgvR5VvDwWU9eXJSaxGEEAQV3bdHtYxBQ7tKpnB6LUWQy2Lco8bWSJHAkZUaNX1V",
  "key37": "3kPFWknEtVvb58TrbT9fjiBCWufjHKkSyZamka9gyrNzVQGmSoX2G6LxEh16gs2yNRtrrJgMPkNqALypwSseo9mX",
  "key38": "siuBohcQ893xzZASqYitaMqZMPuLj45BRc21tYtjmyqiXRi8oq2wAmhZpDMs8pfMpqtsVa81MbesmA75fozUy79",
  "key39": "zT2eEbYyUKQTYWZ28d8panwv6gJnwtMqGMnxwfnhksEMdCn3KLE2SKSLoVeKy54GjQLr76JG9HuL7CTS8YZrqtR",
  "key40": "4xJFyMkXmpVVGqJvz2jp5LVn6JFwd9x3mMgB7kX46Zm7fcYz4PmJ7sT1SevrShGt21GkyARfEEEzPkydJyaMjjN4",
  "key41": "4bBJgNda2GL3tFkrbLogNoZdQyqh267ht3uHv9ir2XWsWiW5UjFqEX23ZQNpXDvSsesrAhpFncFTwdf5jKTcEwdV",
  "key42": "2ZCKEuevnNp62j674e9osqgaFSSZxpfcZGYVw38zAA91oqvSTCAcvyYUXebXRtk2jWzsEH8X3SE39dknzXujPHWK",
  "key43": "bRD1w8cUjxBasb3Py6GF353mnknmhiWTH4mzkeod8R5tCqN4xTVxbbx6gMCi5XRsrWE9fHeWXSEXQRVEgjDoMoz",
  "key44": "5hCjDbj4D2dpPPFeksugEXVEEh1J5vJt4gpchj3rqw9SVCm4fS6YSAvTJC2K7H3JgHm3yEB4dZ4hdtyvFYtKSahE",
  "key45": "2uaxuUwpm9JaQMMcbsQ8ctQFnfRYWdEPdA5ZssPA5XdppgQH52WUastzFU2eztRZ4MrgB2qWTakbNQsNZ9dJaLkw",
  "key46": "PWtd1yZZupwkYRMwFXLXxcCbisS3PkYQUjjLw3i3CAk41LhAcfGYf4msLDYBFgHn6WAqzbGNFeTUvYSw4EXC8dL",
  "key47": "5DzT3gj3JcbZDSSiBA6hoJMobx1LxzzMsMCG1GA3fb6h9WE6W5GghS88jATQV1KsdRZQgsuWnX4r89nxaWDuB8ZE",
  "key48": "3QGxiwGfrUjKBYVaAr9esPPLS9vuG5X7NXSn4Sb7a7BnCcwyrdLjGMFU3NgRPZFEauYvLGVfj1JHvh6inHQPzW2y"
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
