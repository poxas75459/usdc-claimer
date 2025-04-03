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
    "2F9i4aQ1K2JQyeJ5x9U1xu3Ad6nUmcrokDFPnMmwRBWdUe3UmAyGNqUGuF3mU9EytWNozYsvyVbkQS9kJsuRVHoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZMvMcg8tB6VRERLg88mQqkaU1H4sHMz3AZxqeSeF3Hzss8icrLB9jWnrJXcVLNdkEGgjGsL26kSHgCsqtj3gAeU",
  "key1": "4WagSn4NkLUcPBNFCnWZjAa3kgfW6MD2EYTABEu4ukvNL2m6GmRUH3RD6bpwg92WW3YRLMTamb3bKu9AEF3bGTNS",
  "key2": "43xFXV7KA5wVKadiEW4xyiEsvt4PGB2Jc1WqzC2gWqX1R48xEnQkhtnehbtUdGfNmHWY8GTugqhKgHbQQPfPcfWp",
  "key3": "3VU66R9oDwRnZtyg8wWRZKVKfyeFY4iEYjzLesSecWQh7TDAtH9uJaTmyPmRvXNNU4i22CeXciUhJd1AKZkjCZ7k",
  "key4": "4XuK3XWb4xEgsfCkGV78HjPT5j1uNCUY3bDm8idjsdSS4rgHcKb7RyyRnxxZE4YSYQUGLEASuvwCotmFxSPdy1Pn",
  "key5": "4trNFqHe6QTnumrxzkxkuVibmhXDaHpFoTQrDqHiFkUYu6pkiV3FjYzfj9xF2FSUj7fesQdMD6WATaxvnFUpKt6M",
  "key6": "48peQHtt4V13XCQSfWxFr55B6YC9jfwyvhCi21DcViLZ59UHYnAUweJ6YVNBz4QqUq8xDjPh7mcQn3Kbn36zQ4s3",
  "key7": "3G7qSzhSXxWHwmz3SrJDKvjqcnKeiwd1GQqD9tcDmooZB6ZSPQqkJJbdao8R9SXY6oqq9wECH2Nf1jZndkApUBTP",
  "key8": "5gS9atmNWDu7MZ6Z9WMG2rpJXpMV3pVVbfx53MVR994tNnJ7xzUiBn3VMNiRUiJvnH3TGJuGcn29bABu5shCBVUR",
  "key9": "4t3g26uczvwzC3NmX3Xp7fRS37hECapPV8FYJQK3EZY8yS8KUwVqReFfa3o1pW2JpAGHx6ov2FTX8zaMLVWmJy4P",
  "key10": "2qX97dnNv6DiWC7CZicFxSRq6VHypp5sHjEKN1yuZhzkdeFFycG7itMud9yrRgqD7QpuAsy6hEu5oovHvrXcm8bg",
  "key11": "j5YraaND3V5YHJBGxQvWDvhM6wQjbc6917iZKUf38gKX3i5dSswYw8bdhMzpS4AVokCHSCQjZar9dxWD9bc2m4z",
  "key12": "54ZDW1GVt3CbCeWdb6WbAa46zoK9DZwcEwXAQ3ZRDfgatzNKVtfU2smLuJGcCJKWs8Ptgt2avrDaGzfRofD9i4Xy",
  "key13": "4b3rQUMBLY4zXrZCdbpHc72ZHTM1JVtWy7yFBJgAsE6oKXLHcFvdY8TXsXy7KQZsa8Fbi1uwEkwFrNH8DfVRuSmQ",
  "key14": "3cHi6R4xzZhS734RB4SQzZ6Bpkx91U1zpurL8KtzCGHDA8yKeDkqYs2LS5pUmgsvXfqyw4ru4Zjmykoa6pAoMCgQ",
  "key15": "cjfex62mf75knq6WErCR882UMYXLEKbpPgAL5xqTHY3ZJp1MEnXZuFJ5EQFAP9YxTU5oe4YZMmD9GppJeD6AeKF",
  "key16": "XXVpuzcFnWN547dJvDLWr84J2yeUGERzAbGiYGs1aXgz5BcpensnarngbsbnLSykJsWr3zQ81FwQgJvw1rwFpJ1",
  "key17": "beakaoesXgr1BFWART15TjjbZRaT6oQMZU5CdqNZC3q2QkyMjmak1iERjhRedHfR3oXsBFGGqeKzkMpwBVg9dNd",
  "key18": "4Z15Pw7vrJGQBn5FYvT4zpkUf8PTm6zUGdNjNXpRDoTKuGcYX37obHuiwKXe7chDyHd36UktrvDFeoneM768RKcZ",
  "key19": "4Yjo9SNrmjvTJcofK2kger2vthnGaJXhAwXUzobS5z8iwvRGoTwdyCeLrphC9GshqxmQRUSWDwzPtzSgipq4PD1A",
  "key20": "4yoN3MpujeMwJkBkTxr2WuPSqvJHkw3tg78ZmFHK86WVECAxPSSR13Uxd1wQDSogXoZrJjxMDMReUi8KQ3VF6V13",
  "key21": "3Br6SAdn47gQepX7iFWkXyC4CUTUT4UJkwB3J18kgunDdsNPGFRszMymAQ23Wo533NxrkqT3mxsbCDCxc2ZBZdQo",
  "key22": "2muKDkHPirZfmkbA79tofdAbWNwrPo4ytGpT6gN8Drbf4uZtZm5YMiWXnSsyDzs4wrkxiQEJuQvFrRqpNNsCEtFm",
  "key23": "4Z3QgVoFjASGEMZJJ7WWXFhXMstgn8iqen34oaifR5ZfJJMhMAmRxumFcatY5TMoDSvZJPaBu5vUPBnLUVPMoTue",
  "key24": "35hk2FknDFpwwfZDfjY3mZZBgtkYLNcmUyyAMau1WNJ1erPBYmi2aiqa9gPA3ppzPnYRnnTvWhzspMpcJ7Ko8qc2",
  "key25": "35Gm26wsdurPdTRXNmDg3k9UQzhtYVmvyirT443kTp5AJD74ssdkHyM4ugn415UsxGVmcy53fnGsfb7WyFAUgX2M",
  "key26": "3KuRJjmifPPoRVkUUAYE78GtmwW1tEDT8rM469xvntbuvQuASL9ecYgMm83JhXxfXeUhFELpcaWQNwPqSfGpG7EL",
  "key27": "5RM8WjvKodmu8gGAPXe9zniyCToxQgZ2XsV71scKev4AcVeucEbwDrFPLZVMpExssdvsLtHVUzZsrdgG8boSPLr1",
  "key28": "3W2nSTLHn7dgCCuwKwB3gaJKMeJRNcqjas4TQYuiLGNctpKNGRFkpmDMG5jBo9XLeabQaSGJdxQpTwXUoN8KagFy",
  "key29": "4nYG3W1NFnyRqEpd4nJ8A5X1Fh7PsEWTBDVDeeLJjYj7ifbiALbgcUApu5Xt1fQ73oPx8fxnm7PgEEaRdwC7cVgw",
  "key30": "2PhgHryFrPDb9KfzoKXzFuG8BpZjaWvCVnrMHprKRGTF9b2WqAzBDoys4k4v9qXViYQhE8MTDwfMo3PpQ5AhChud",
  "key31": "2jWrjKnn855TmxHPjbfc5dtttf1MvnH7hBUM39PY97KZjAZhNtkyDVKnKz9XdjTgdw3aD6UHZYa1h1qKLgXJTzHz",
  "key32": "3dGbyzxaihiCSrFLrFse4DDNMpFqTC8VnAGtQPYf6mLxxZjZ8i5zXtYiZ6SsjDaBRhbGyQz1P3wiGYAR4nbsi8XL",
  "key33": "61RJuTNnNx4ca1UhBFFQTctuUvwzsrXzN58frVfasPjJo45WdscigVVBm9F7MqDTbs2B1LitcBzp4UkKFkzT4uTJ"
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
