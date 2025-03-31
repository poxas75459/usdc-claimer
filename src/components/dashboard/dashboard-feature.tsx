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
    "2Vef5QrLBt5UT9b6CdvezM2NWcJfwiwReWdFKKsywhXaTqvQdw3yFnQ2f9e6nC6oCLgdNLcBz5V9BiDqZ743GkD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GkQW3krqnnfCxCjdJ1VJKvRmaUGWGzHf6jm1jdZKNdk7oHfoCwV1xRjLKMz4iq5UBDEMH6qq6mAZ74ymYe7Prni",
  "key1": "uMCpSyDqDWVBELHKAGV1YUH2iamkhPrjDPrKCpP7AfdJXj6t3yzstkbJPCD4HTh7NxcwndeoF2V7LwBKPm46Xqc",
  "key2": "qq7wMnahEQi1dfExhgoALSPYhFP1npcDzi2gB42n6do2DVwAnkYKmrZfpU7EsxsMbjfZyrn1Yba3wQ8r5tmmRrB",
  "key3": "3aFLeiTAMSCZYLqPc3ZMG5KMcF8bLaRPh1uAwNyFkGzvnpscyzHvMpVYtmZEiU4dscGApuzNy9atdpSoiSGv8sK9",
  "key4": "2pJEubSPBLeWUAiU3u9BhdVwoVL47kzZb6nPiWKUfq31u7naZw7FvmzBf614icUNJSLCnhnw2wNGk5dLT6pVsEwk",
  "key5": "5bv23bDQMrHky34phahXqfNj3siKJBDHBuYsWiRbrNmMsgFi6sC1eEX4uJL965kwwzmY11nMrNBV3ZnDMpRbcwNg",
  "key6": "5Mu8aVbh2xkr9UGwsF7dRSAy8EFotPTeuy3y1aoudxLWUBqeqKTpNemD4jr4kNcEmVA3rJeRfYeNDmABWXjNAJo9",
  "key7": "5b84NBfDmZLynettkhSmwdzt1sYkci9MvZU4ubV46cp6kLuRD32zQBmP91fdBbQoet2XeEGZp9oT51hmMcAwGknF",
  "key8": "Qt5DgNYH38GFuMCffa44NSFF4NhFPLx8xwqmU3hF1CjWBUwxFNEQrFV6CNCyDCyiFVmozUcVX38D5y5YqnnyJ6U",
  "key9": "54rHobGAeZzAXFR85rVHE9JPw11HCDGJvwdqcKVMa7xpwQeY4SgdJ7Ea8LFTEUitefzR5hziT5csm5ZtPugt4uQw",
  "key10": "5Eh98PsiCcrCNsiTcbwsFt9Aq5Xf8MXtzfZoQiEc3WFSzvjJJw4qR6JQdopGomZqHbG9LT5kbvtUcWx8gXBzNFmc",
  "key11": "4QHFNnrmgP7bETddxh6R4xbC513h5vXgtdDUHZ2ZXgquaEY9BHmnUFNWC7hqnnucAzmQGrbh8iYfBTpEDY3MRnVw",
  "key12": "5E372wLbTHkn7nwh5rE3dTZdNZAzjpCrzrhBa1ndJaUPii3MgE1VRTTsmC9WAScZn3ERbe9XZ8ZVVZ5dA4CU5h4G",
  "key13": "3TNCoV8LfzJ3eftxoJ2ibSrhgsBshJJv1wKXKhJV4Q7ypQNDpMwwDz2Zu7Pzcw7SohUq5oZeWzg86g5PYEkaLyhQ",
  "key14": "5VAk8UVC1NKMHJ9vFhK9gM7QkCqQkr9fDpN4osENySFcrhS8vCx3ns4Lectt5YQn69ekS4cg2X1BbiEA9Ms2BPyD",
  "key15": "3PGo2CjwNfcCe5jFdnnh1zcNqKgvvWKCyYKK5sVtG2ecvzzsPgnv4CwBewbtcAYmyKfZP2RCXypY6sYvxHwQGKoS",
  "key16": "2FMKoiKbukaSawGujVgGDWSGUBJUtETAi4eVBsg6gGdzqK58DGFHvmcpQtMGnWDY1ZC3gcMJgSF5uccQqY2RLsky",
  "key17": "4Cz6iusZ8wQBbrhtiUtPacFvwVEGEjQHo2zUinD4cvErJTgoXCN6wDDRj9MAGBZySJLiqVwZRDqTUCARmTc7Z7SS",
  "key18": "5ut1n8GuNVy9AzcUqJmx6Nhf3L9ux3Yi7gkzsmEgEmcBVdUgqsEavATZi625VgjobnAiocJGab8zn4tjwymFUxbg",
  "key19": "4ioLXPVCAmxasxwHBTmQiViFSPYPWYp9YVdBCvmXwNncHzZzgYQ1CkjHiE4s8kYd62TTUa8v4gujPfBcBtfMf1hH",
  "key20": "1XSMKfWySr5H8BC1ksrN9p8KA5Efd9Bf3zoTDqtG61goUv49xBGeQMPwdc2Hvg8JLyZjkBfGxwny1MDW26z7YYE",
  "key21": "wjzxZRSBchHcitRGtPKgdbiC74B7pKpiD9Hm98F7ubQT2QYGFqHhGsCmXjH2o5DWpgVtSVUWmjynYuTC7im1Eqh",
  "key22": "QuQpyzdyYPvYyKwq9on2T5HNnzE6MX8vghCY52zPRdSz1btqXnnJULhdrU8meUQUXpHxRvpfpzPR2k6QUqgPsCS",
  "key23": "278MtvmZsXeDJCfTgzBx1tjXn6Bpj1umac1bD2WxVhSg4PaZJfFBm2WRMTWhcjWS8ibwe7tAgi7C167sTHa6cct5",
  "key24": "4bcSguZuJUhKJwqGF8GUAEFCdy6LAo5i4XNXy1Vw5hQ2sEQfkEw6uPBU2pGHghs6tnNJu7df99HbsZZaZHzWtNki",
  "key25": "5XHQ9s3CZvpWdZS6MjJSRbZVz4gZBLFeWwoqTQRFVrr4MoLBkLavyqeKcLVmDGE6K8i1Ni1NmQSahV1JuZUyDC7",
  "key26": "3pbtL3RqRVV3V3vaqgkVBvCc96E5PVYRRucw3JSKkD5BoPFFfJfPxaL3YDbe9HsoPR2ctJBYm7jPpi91n5guCHwN",
  "key27": "42vQ3ncNsMGQypqtxUT91emAfMZ7mnLE9LN7KdtmTK3k9YEywStNWaAZhgCjSzKgsSYXjDSQjvpeh6wC9a5d4JnU",
  "key28": "2vq59Q3r2DT8byYr7s4bVffbmursCEaiwgqtN75K3F6o61pG5VpwZPrjhvbJLngVhr1mxuGv8yabuW4886BhPPaj",
  "key29": "5wKY5RCtV4paxr3AznJrq7TDT2vrHPDMRvSjN88woKhPbWiwSxu73D3yZX5cAVKWapuJBFybQeaQkMAToYnKVNdw",
  "key30": "4ghbXk7XSdzLWu2qEYqV55XRGoMEdhcqqYER5LyBGEmX8GUptGJkBZ1JZJPfqHQwwm2MCW1kiHb7WmJyUnWAqH5t",
  "key31": "5nksiXZW1hWq3y5h5SKPUzZwAsTS3voWCZcgTKozswDjwkGN5bid74ZaRh1gmicaUXLJQrf5sW6RYiJq79BMP1Kz",
  "key32": "2rEYwC1NTRFHVpQypq2xjKEcaUF7i8LB9cQAovxUHTCwrdQLQR9Zh3srjVBmHETNrqGa1Jv1qwEyLubbnsGvhnFt",
  "key33": "3SLSn3WcTMRM7ZYZaLFRyZPKsyqvnma3ojyJZSDd4nL8xPzg1nSxsiJE7ZwAwA9PmgZCW4UX51Tfz9PMd5u8psnw",
  "key34": "3TUkqnhgAYQhy12ZyeSyYtBeFJNK5Phev7K1jZbhveWqvUj13DWpPVMhV5yp3Nut6VpQTVmpDPVtbwar1g85gUUa",
  "key35": "4r7Jikw2bdfTkA7Fo7AWjgE4YJPVgBxjNXFi341SGgZXqN3Saw9r4Q25yRUkGR6vMefcxynePwaBUHd2i2a9m2vx",
  "key36": "UUbAaAnAXhrptnWTsT84z4AEjG3Dtts4RqBKJKeLQkZFZ56Z8bu7QecHEEHar55jBMkLBXfvvPuB3gL1TDp5uPc",
  "key37": "5oSgFNWVykMJHfbt4NjVnDVuBGe8zgvkXeZsj1UeuS8bSxMuv2TPWXkGPUYo5ZMXrHUjQbD1sDe2tjyDZNEdQZ4j",
  "key38": "43v81R4TEhebXJjMwkk3mMyA3LGDc8ZLUYwH43wbGHh97QQ51goZG459LsWahLnkGCHnitAwo3VDxbWFc76B3hGJ",
  "key39": "3XLqpzN8Kao3j5Pgu5K5ozBaK6WuNgujgkymtZiWc1e9BcADzL9QsDDcZYKpirwPaqyVEpLJqNvDa528Ubfd74Xq"
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
