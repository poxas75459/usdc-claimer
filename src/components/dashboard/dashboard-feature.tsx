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
    "5nEvJHU5P4vDiomWqzJXYKsedN2PyBvKozfq2TTSTqStbW3aXPYoV7SVWdFxnh1JnUU3EMQiWJVWynGMMx2px2uX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59a4DE1zbp2kL7Rfy6XKw8fhSacukJAoNvJnLXFV1XyiUfaQzGdwbcGsgqaLV2G3k3EX85RaP2cZRw9rfrzLZ3N3",
  "key1": "2brZBvTMKiy77beZSbXxCtr6C7zpSLcca9Y25BGY4LNQUGPodjxgBpwGFsuoPpC8pivMy4ZGqHTeiP1wSoVwESzw",
  "key2": "4T47jh3tfGt7u11M5DVRiZaSyFABAcvMUGdKi1rBVgrEL3qHYVHGJtWk9smiHNfMEw6XZwvrLL9svRjKeENFuFuU",
  "key3": "4xvj3UJrqoJxMQvhbcWmVyxzMvPPQFvvHN45tHtyHnJeCQtaTPhCtawQCfTJmfBsGoszFBWUi5QQiZeEiyGaC6h6",
  "key4": "66JMV2x6K7hyQiineWBaXNm7PuSVJPg5YdwdwKwpoqt56gpY5CZLWuApMSKcn3hKw23GCAP2zzuvbjFL5Z6rVUYU",
  "key5": "5w4unDJ5Aitq9vWUie74xncU8fDF4gamxNLXCaJNYyJbkuN4jd5d5BG6dtRGiPTGpoF6dt7gTKGL9unoUgmLf2dY",
  "key6": "55XCXiVkNjfYJZ2YuDWiKUPgRaz4AULQDzDdSLEXY2q84iwr7zXuQprGHcN7xhji1a9xcPbWb4T2Juyvi5sUayPU",
  "key7": "2cyS9Tr5UnBs42HksDUgPESZi6mFAWTHpoL4wGTEnvpkTcAApr71u3stiuUzKvKJ4GZzLdAyUGTBHPLgsqzj4hcv",
  "key8": "3bfXAEQgpD31Mn8pdABXqU8NpfZNvp929Ey6g77CrfwV4MicfNQ3MWWR21PopFjJce2XN5BH8cWb5h6cAGdDnHVy",
  "key9": "3ZVWUXNqbYas52PoHonX3GoCFNmdghWdaGULGJRGcALr4Zw8UU6g7FAXfa8ga7KkfxfRry1eSRcsrtfNaP6L9DP8",
  "key10": "e9d4mBhBdcrL9bN9PagpsQoLRS9sxZ8up4oXc3mo5qgZ7tRyGDP6b9fPvGzSW3LvyWn2krKiB3rKY2mJJvjXBSs",
  "key11": "5Rg3NrioPYWc5M3xH1RthYFoLahdkqpeXK8Hwns89YbXSn792nS9sNjEBgCG391yDPwUz4swi4WwHgGB6MPTWZeu",
  "key12": "PjhjphPLkACTHG6X1N1oRn75Vz41npCzKfTyhTY84jhbtHjG2mcBNeQCBjmfsxuvsFJR12WyHbLnXdFXR6uP9gt",
  "key13": "5qEApEMo5pCxeMoYGc7mJ7quVid6xju69BuVVvW7GfHpSNiieACKysJiwavDf3DGcFMSKHEs3cbVDzMUHo8TKCii",
  "key14": "2in6sXyHiz5pBufgZc4wTfxdTMgZywhMeu1oZryfNCD5C4uncQu3ybftT5LadEEqNzXWy1LMjMVkYztodasKUAG",
  "key15": "Z9ANWXQBbm4gGNeL4cq843MsJPp655MMUWr8CG5fw7QcHDEmsMPY3ovjXYLLoG18frq3x5P28gYTY5zvUUL9G6f",
  "key16": "3jF5MhnPVtosCbsv3RmzMP8XNhGTt63JJLM29D5YZfZ77nXHdioNy96Q1yvwKQbobV7vxnbNio8RGmcVcvZfF7VL",
  "key17": "2Vu9RbhYLsXZYDrEwN2T93NERQmLxsY5Lex5a3g4MiGVNHLwxgLDLcTu3VXu28Vn1BX9u1o5UZrJfvqDE3x5PYjC",
  "key18": "3TXCD5Pp1cHcYUQiShe8VD2kYsskKBZJhY5Em5Ph8SApSWjtoX34H8pVNDR9iPD3zhZc69fcnbpyUiHjjaSZjSnM",
  "key19": "3c3BjH8U8Bi7n8L7ykW4qAFVveEZcDDio8kDGhmwztkdoy1o7tKGhkjnt8UZ6dZcnQ4UX9RtM2rtex8sVjL6hpbH",
  "key20": "3gdMVzNx3viVCm7rz4WscfvvYA5tqQyfsnLxmT2W7hqzw87LQ8s5NzKANK7gom5MWLYQNhvosvhFYpsCZxkDboDS",
  "key21": "578Y3zXzmKRyyn65VUaDVhYzJWmWVAqWtkGyRAWDRUQH9jw3T4BE5sVf4e4xibRoU2YSqMLyEagfsAjgoGq2zehF",
  "key22": "34ShihUA5N5cP8vLbfaWxboe3ppdUEuq76fH9pXbEuJrjCLHMFvj4tHVSA58EbYbJDebDWLxpxLHH81txX889skT",
  "key23": "3YMoHdGnFzDgAfwoTnZC5Sad6LE7LH9nonNYTBxwxMux11vAtc3scgJ1wRAjytGXdXofcsNs7JeaiqoFneQw32bY",
  "key24": "AB7JwSe9zL4p6U9X2tPXCCQQYtPXVmQjN8nhfZxxwuBcX7Ngb59CknaMmNsCtTuiEzZksALsc13t4hvA33XwE6c",
  "key25": "4Qo467z9odvjkJyKmrnXVG82sq4jLjjk5nr1G1iYXtLWZu3MqewxzBVPhcrHRmbmnowP2NPyWSKJ5yU83jZRd6mP",
  "key26": "q93Z36WqeuhBrZnKYK134dAYmCBxjjEsgjxTNjsHNAFukmHrw8Fs5dkjccoW3YHWwjeGusRv8QZw8FTkjkVg3hw",
  "key27": "UfcU9q4fZKMyqkuWmX8GuLRMTTD5pKwAYTcyeVei8zmZighv4jnTxUYaV8A4dst8uZYNxcCtjBRggT1EuWHDBrH",
  "key28": "2iYULrJ6V3edYtt3Ei9RAHRyPnmRJcowaB9a3gdv3jEv1uuChb2covn9g7bgMdprY7sas6P4kfhK33vzDkEMVeTB",
  "key29": "3yiTUh5u288ATAUK7TdDg5e4d4HnTSCWiW9erSnWDuEdNReEUUdsRu9QRp9MTEkeqSfTjRA8m1Xjsi2PX6skYwQe",
  "key30": "ewfwsS4XLnW88QJDTThPvuSuRntX3z5KPwnetHqP6yE9HUdqFh22mdxFPRRZmzp141WcFkFoNBDazsUNKDjbLKy",
  "key31": "XVpHzkZQNP4Pc11NPpJxSAEKc9yovB8kvZRFe99CgD7Eu5WL9kQcqfwtyKXhDeSgzsZUnkrzWr4skMxaedzpKBP",
  "key32": "5TkaLYMY4fd24BnVfa5tsjkAd96gZrdxR4Fn2NimrmjST2eYStZhr88h6Foq1qtTKynjTkUw9jVGsmJ7BLv2XpVz",
  "key33": "XizXoWTNukCTZ1PmRHrdmFxZhvWdbYRvLGcap8tPSo4SsWjAR4YuX1QTjvxFCgKGSHYhz5q72nXsxz3H2cXGhan"
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
