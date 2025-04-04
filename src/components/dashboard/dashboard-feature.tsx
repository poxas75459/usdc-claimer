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
    "52ga9GjGxqMB8Vp5QG2J6KH8AEoAAink6sZyFaudwaHDyQ2Vq9F78h2NSqqLt8WogDp7FuVqEsDyMzZRGnGDXcVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fiHGSi7sjqyqKm535VRyZJ775CtxiQnL7QDpwhYCTrJsjh95isz76xgxwuBu9NM5vZ6KY3Tm8iSUx1WaZAcHy8F",
  "key1": "4ssCAou2i3xzPZBu1ZGTUMKRDq1ACUPU4pvo4z1T8ATyywBmDVTGk6VikMtgYQfGVBYhKR8xXMwAFwfYJTZFU7dJ",
  "key2": "4EX9X8YKo1cdcAaRqmCiQrhFEjtHRo4tQJksY3fykQoz6nZXKmLY1JLUXmRbLwNXS6rZYoMFHSpv1HHUZubtArXM",
  "key3": "28t7wSMhoboX9xkcqjVspTfFdEAXUPghR3XMC4ALfAQ29aSjeHz62bRdu7Fsj4nQ7T57mog8NEgc5LHPH5pzkezv",
  "key4": "vmUrWMk3fJFVi1SVNnwQJH9oBU7ACWaxKq5EW7YtPiy2fjVvHeC3CCiUnR9iPaEJt4Rq27hyYLuiD6xtZiay9kd",
  "key5": "4EJfuamj8sWcDCfqktERvvnyVwxaYrvxY4hdZCf2iJyu4dtSLwbd4KcWTCtNYCGcjnFFwE2W1WRupgo4vKHShYug",
  "key6": "5mdUUghGYR77hrHxJHcTzph7M4RTwHDnFKgedUG5K7ZtWPcseuqA7XooxmBJ4eqSduwLrv1RVGfpZeu1K5BcpZVp",
  "key7": "2r7HBncPVhufJBn5rFPXYXhpk2gYgavPu2D4LLz1tE71MZ5MUas3RJpVRivNA6p4cYPWnzrdW6px97zCuNVxkYsZ",
  "key8": "4BVcP1xnvtRX2TbLAH3ie6rJk6LGwfiu7K27URWEt3ymnpjCsEHGnDaiX9BCgSbZ9TxdQ7bjPac2oLP2QG7xruK6",
  "key9": "4ojUrC8Y9GGokJmY6QXKT8s2xENgs8w26FT2RrD6BRFm7dgSQ3RyTeVMfyVsXJgcDLo4UsoCd7mgGM1M7t7pcYPP",
  "key10": "2o1iy76TNBXwehfx786zMjrUP3Ux7ogWdbjJahjLCrNGnahKy2FzhnHWZ8ZXBasJjZPGpyfcRtmAVS72NT9xn7tF",
  "key11": "3CGKTb6q1uBENyd2tRJXmtMKTy2F42JBEdJa5vkXRbscACpmhWjxQBaVeSkV29ZqtRfnep8H3geERDiTF8tmXrg9",
  "key12": "2GGKFdLG7deefoaQneY4VtwbBWawxKxnX9V9BNXV1NNhUSNxoYhD3eggjtmCpazrVYD7cAfkkwuQLEL3QJkT8qHW",
  "key13": "3ZCY3s7QEji9b8ZWKVSTQvfZNquMTHs6cCAc8xGeCLKv5QJHbTpxwpMH6S97cf1HoJ54xraRCFrpiLPTc8CuLpCG",
  "key14": "4ze4L1Fv58mKuytHt7KqUxtho4Hy7Cukq8ZcgCvCoFUVkMCdGhUzp5NFdznqCLmjsQ9GqUZ4xUhjb61dm5ntpL4m",
  "key15": "211BxE9coiUJ6nY2a9f7VXCZxLJDs2ideFHja1fV1MXaZAkCfNQk1H3mmyymSRgMtev9McKCbQT5fW7MfMWUyPJK",
  "key16": "3iK3Ne8pBpA3wT6T6sFZNZvm6v5E8wxEdtd1fqiExfy54Jmy3TAz6bpzkpteDuTnzYPKPkcWX8Bm7waFn8w5u73P",
  "key17": "5WyUNohN137nxF9SraC63zf9DTm8dqLrZBA4VFW3XAEgPTya9ryfHaYHG6xNUWtN6hxQaiubEGEuoy8ymgLaGmFu",
  "key18": "3UBiV7XKEwTxGjjxPXDH11qXFcqi2R3ovHSkfDBEa2dAwJUoaPU459QrZtqDcZMToM3JY3pnBHghBv9XJaNWuZsZ",
  "key19": "EijAzZZCBCc7qLaPkAFwcpfVxL5g6zTnqpRGXzkDVjRXRkSTvhCkvrrpEvxqMjfbvsFjTYhf5w9RFZUrvDKkCNv",
  "key20": "3YL5s91Dycqbk7F1qFdraNpCBMEuBGf43tsPqCfi2cHWXSpwDQv5X995Uk9AyQaWfnvRamoCxMiDWCbzhAPcBYCg",
  "key21": "vvkiRaMEpBSgKLzgxB1UdngHvz9fCLHPT8Fei75rXNYNfQR53uqSW278HsAH8dQDsM5dtRgAPNopv1H2KkEXVdV",
  "key22": "2dCy4JnQMdfmvarrk43sb3jEmUKbg5XtEKxmDhWfdV3Yv1hjozVMPdTX4E1sNfZs9FbpLvTpditdWhMhqHzUEKEd",
  "key23": "7KfgVTBVNMSuPediLncFLxKt4oxjrCFsqFP43HSG2QfdpreEzFtQibmNq5xtCNNyxQBENNt4TYBDj6R7qKjYA8H",
  "key24": "3yzqSKMQ7m7Xmq77Zos41JVUToNYDXvEtrxKChnFPfktNLCfUQ31cFVkrJS1DQA9cBcCymiWkowpRWfvk4bhFzCm",
  "key25": "3bSj3HBssJzkLx6ifHvtPSmQhNqBbbS7qan9ejYs6WLrHC7X63YEpdg3VeyXZHEVrFqpD6V4aPA966eEZ9bF5S4o",
  "key26": "2DGf6bgRtG8MnpZEyUJtHqdzerSCuufbSboVWhGBtu8L5pxdV1wUjJsv8zmQ9FmaexyE96EQtf21dFvqTUb3x1uD",
  "key27": "hMNHs2CcrF9cLfkdnmng1aRJaav47wcnG7e9LJW65FjkE2rg7hfFWuzxWN1YzodZygJ2C3RJRG64VfXLqzwdF9u",
  "key28": "5cU9AzgXx3nR1ceEEKz8r3mcki1d3sGvGT5QQkputUK9EJ7suPEDpxhLJ33C8ZxUh1WkZ3v39rhUhUTfvj9ZMH32",
  "key29": "2cyLRxFFDCX5Gj5iQ85yG6xJ16N7euzjjzcNYEDzgUrepcVpxevN6c74kxKbKvL3r3hHTAVmAieZ3k3PgpDAGBGp",
  "key30": "Sh974zKgL8KgFi1sXb9zsYpqBTfBNeiqm8GBzcfJSYmxvfon3VxJsxkJqRnWgDUxXf6n4UzQachXAQ36AaErVcC",
  "key31": "4aJ37RcrpxgezuWHZ8522W1eB6kh67SwCMyZkXJhz6m84TSY2jrYMgxZPYA2N4LYJt5bpx2kEwyQySG7wpfoYnRB",
  "key32": "2gUoiKNaaGayRs2rt7c2FZHrGjsH3mjQuo7qV27bpPr7nGDf7c5BTCy9PqpJf16aAXtbfKFMAyhH8sadBhuogMR8",
  "key33": "41z55ypRnUfubZBD4EUTJ3HmNRwjodKUJrehfoC4LYdpK3PJUzfKqh88SQJcjM36ksKJ4kTyZevVDCULUDnFbF5b",
  "key34": "2SNFwnWFbKAqojGhuRmW8JfayHwr6CRYf8rGBqwtWTxUEcYbTbbuc1tFPe1qdZpDmevkHXZQEjyBq9Pb8ssfV4zx",
  "key35": "4BvqAQka6b1cm5ioy8E8YtbP6gNigqqjBzJHogRWGmrxy7EgWYAXaB9CCNGjSKvDexCAEahYSsEPuePwy4KAjG7G",
  "key36": "sJqMMxRLemDfaLmdic1mHwnHwRoFRkwGq2JsBcn6hPuYwjoLftEfPpV4GaZr7FQnmoppx7GUUmbv8ojEdQXkm5v",
  "key37": "4k9bXT1dQequCsj6axjsREndDbe4pjPcoKdJobzNhLEhm2mKfz86hiN38MHSD29o9UTFns3YhQamyNetvghRHbgY"
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
