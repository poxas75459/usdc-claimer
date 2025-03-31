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
    "4vdarHA8RCmY9CjwLi34FbEPfXrw7ykHAME2HdrFN7RorQs9zRQtRH8dVPCuwmh5c4gmgUB3ivo9fJG9SzYRx4Sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PZXwEYQJKFfva3CNQhKowG2tYxfwdMeYMMzrSwRjifUVWDL7LzvD82tqF2MV7WJXbiLH9KWN7kz8HTgWEYYqA2n",
  "key1": "3XVa2nJembjmSwMfsixzfgRndNviQTHrwRvDJ8Y2RDDQD3ZheUTyw7NywV2BFRwX9iztCtmLYpcSkqoB1y1ezMiL",
  "key2": "4ARnk3oe3XCgvWUcUqb6UkP4swiFKvt7GC9dzGLP2kd8D6hjHiB5wSe4vsNResTXmLN3SE6JZa2S5PmQakSaZiPW",
  "key3": "2yMV3CsPQ2CAFAijGnGjsbfirrQoUxRxpNCrT7JGxayL4zTgsbHiAf4aopLKf9ybFn3p9eta83aFQmkN4Mx5d1wL",
  "key4": "2gisDPVX4HXrg5BUtVX89MjARff4Lrq7PzYDLKJ85nramvNkHAcPiahNJAGCiqF72f6fk4npzj6UmMKMCvC9sX54",
  "key5": "5JVo6KDTdBoqC3GwCycjiZhrNde7XweEYayDdD4h3RHLXfnGQzyoUcfDP2HjbsMLqq8DxM5qWT4udYQxxE3CC2rJ",
  "key6": "4bJwdpHcYzA3CmV71ZKY32XkyTZ67qbZvKUdTn57VmDMNJqmro1CE5GgiSHXYxksKG5xpRe3NvRDagPMA9WGSzDE",
  "key7": "32u617tyg9AbcwHgFTzQ46nefCxScVABgDYGUqa8XM7CRX4kSB1owcGFF4Jft6Tu72bT5udnqa6i5AhSo8fmqG5c",
  "key8": "4CNCn4B7znm1XG7zJvBhYTmdUjYYsdSXiKdhGZzL46Gcx621GLex2C6FsKhgq5cSJ677bokFpQwRX38hnKHV5in2",
  "key9": "4H2rfhBWW7H67PK9juhpC4m5MMwrDt35WM1vpG6rhsLMfPbD6WPTy9HuNWsnaWJzpj1Ws9BLR5uU9ZmUDsU2qLhF",
  "key10": "ErEud8XS9uWJCKQxQ2htCGzmN51PLsMhzx97TSeBkBDgm1RhHtE7Kww93oxzteRHK8Lu3ws6AL2Y6RUX1Dbzurf",
  "key11": "4R3DYr9Yj9LpqNvVNNkxmLZWTkPQqLVWHbJiedMSsnJQT1q8pfJCpvttfBZ1mieDuShYSjM48hRNXJ9KDomoLW2u",
  "key12": "5btQ9tcRQ8TncnMGyuGzGpBzVSJKr8S5N2B7DrEGb9q6yaGx4mALLWuct1L7JgSSdKiC1ZumHV9V18dpM7ddrgGw",
  "key13": "C2Hc3pPCyYxk7Uxz33FFnY41AUh4D5VTiihJeVKW6mcbPL6KxnMzw8HcYn85R39yNy2o3dzv76iQkkFNoHEFVqr",
  "key14": "2kJMb6GFN1TWSbbhraWYr61bdAhrMqD4RKRiCMww1XX7Jp1soDy4UJmQa933a9pdXrW4Vb7HHARR7kmrsbfKcwU2",
  "key15": "4ompBmZypHRN8nBNuNsSejcANKUoFXXimN8i9pEDkv2wbiEg8Vz1XNwQRTyM5sf4ccwMsSrtGV5M1sRd3s5XZF39",
  "key16": "qZXrzieJ7KzsTtJDoVUFR7cM8tyE3Z5wQ5KZEg3xYAhxk7Y2k2XghHgsAa7szKj18PS3sGgD34K4BA1S8kXdRHV",
  "key17": "29hSMjcV9ZLhWtE8Vddf9TpwYjMbVoLkuLun2YwMAiYGq9VhDF2cuXA4dC4YZcxy6kXXdZhUrYDpLrUAm3dPBDmY",
  "key18": "39TkT7313Und8Lmy4Et8RJB3B3YE2aC6K8MjGwxHG6nhvNa78wZgzE2qEfpNWyBSBLqVFcC9UaGMtCPLGWyVCqBv",
  "key19": "3hYjSXfwRMYHvQGxp7AAtMn7YcrPTAyrFQv2ynRz6sAkSowg3f5geWxFjWTpGZnQdBjZMrHcxUchyScZryAtwzE7",
  "key20": "cwz42KUowzszngX72LYAtw6p1wEiEhTyhCVkdPLeAQCPXbvEXzdgzMVHwt9R3VXXwcGFmVw3bSx16zFH7FiV24F",
  "key21": "3n8MG3UxrNSiFqbzEtLNQwLvr3djZd8SPo9JXzWW9EJzt8bXWhbLuZ2U53t5sSTM2hcUsVZmXzJ6cwsodTA32wuF",
  "key22": "3Jxtds9FsiQfdPKas2ASyY894cWvn4vMQUQFvajD1LTCh8oY8GZb7CjCUWLof6SL4hfB8KzV1VYH9JQESrcgkaTe",
  "key23": "5X9ACPY9rYMMSLqAXKY2GSHWN2dT3eWUL7F1sidzFWEViKkqbnjyzJEuah6ajr46E9xinjapCuQHtYxqFiAiosA",
  "key24": "32Bk13fm1KxymWCc8gimoMD3bk8tZbFDRj31zJ81UbcK7CBqQ5qki2mFDAZo3WMyo2CmDPweF5bshoVrxfQNcuDw",
  "key25": "KQWZZ5kZ2nKfnwWaS1k5dWzViP6ubZaGSi1GBHbHQXbAHTq9f2DXkzJ1dcYkRQiUEwgtuWYvJvvq76VRqkYBdQQ",
  "key26": "3CVvhy9nY3KHxupY47ZYPxMi1utv28LdKtV37aoRUCkWM1X5ngf9JpFDQzfgsnTL2sCnbqiAnrfPzd5FDZAg2NV2",
  "key27": "4Nqc4KJTG5J9UPBc7xG6PDvy888niXF5z39RzPQpqqnCBFWxDp7gju9gUE1FdwEzdhGmkzLoaJ67ocSEEMqEdUkf",
  "key28": "f2pCEwLktyy8Dc4oQRbKCBcSXpwydnevp3k7TWvjwGbo7Mr65Q7QVm1UEoAFmjM9kg5b3cHgpaaaZwqJkFdzJ92",
  "key29": "4czuDkqRUt8XAgBjijsH4nhdsSZB8vfeWSot4HRcaFvQUyeVcpayx8xwJ6fgBUU8qWfWEApBfctiZgAoAjGXhiRf",
  "key30": "3BhNF3kvQVg9CDcaepyXpVZE6AJHHj15NmjoqsmW7fax2bKk88HqPtibu59C4sCXpUj6tLdTeKMKCj6a9bYsi9UX",
  "key31": "5w2XsJeKbBRrUHuQAU2ZyHztegVmyWbpo9qfRJ1koBp7wPDYiUY3c8ex2CgjhZkLEdQ1TW8hBoE6TtGckk1eQwjf",
  "key32": "5kqgfca4ucX8wAQM56J9o6kcMSS27GFY9HeovzK3wo24NqSXstANbgTEy3Hm4bj6Ms5SnfhDbLvc5eXZNKcZqafj",
  "key33": "4kuoG5jY4pvD594GBj3PfvtwyFV6oKhag6ugWfCD1q9NEemZLopBcQruUKyyGbbDG1xYrbUV6BRbpKrymn63sm6m",
  "key34": "2AZJsN9hMYm74EfguJ1fk6iwhe8Ec1qEwkEcYRX5MvWBXkyknevbkGrW9fxzBi5ejdJaoWpZ9vQ9MUgqbrbrVu1L",
  "key35": "4PXi8WB6oWN5qxmXaVpDpshySYv2tPQvkgW1sxhnKizDe7jbjioZedHMnDeAZZ6fKL54MuQ7h83DmaP39Hrez4sX",
  "key36": "h2yTqQouUXPiWRySzWDNddc8meDyKQeUq25QfcoQwo6sxb7BRxyoswiG71ZF3b4r9YrkB9G7D9MBLDsE652tb1D",
  "key37": "5YJ8LjFc742bbf29ga73LMVG9yoxUYiMaYVU7NeDpa15dKCv3ASeuY2xzcBwjE9dgGYwbEyDLxBdrtFY8xyd9n4g",
  "key38": "5vu4YhCGtMpSH4KWmHjRZ7H8M43UMNzabM1XqZ1v7UztBj8UZU3fTyRCcbPCXqodt7K6UvapMQ1H8qGmQPTKUTkV",
  "key39": "xKSnoxgfYiKKEATSjSscCGNZnR1wHE2qJwqy2FRqpFjpzznxeKS2zAY8qiH4pz5qo3W7H1b3V889Rzs3UvxNWXY",
  "key40": "35bsNWK6LjEEbx4VHi8nmYNdHRUVjtfAC2uf2zRgbVz1HC7DJTdG3aX9p8Z5cG5Ar1PZV2KoXtaVpPQoLGZQJpqN",
  "key41": "3WsYrf5RY3LuyNMNnSdPtT8z39yPyKvbt215aFTXeSeCmhyGsbT4rHYCSGVFZZkgPaAMewA41Lk5vBsHkJwByg99",
  "key42": "3KDnaLs4FhS9R32rm5dh7TxYqj5Q9cyHGeiQpbzRP67kRmB6xEhiKLVmf5rRY9FvBaVsR1UP4VezTAAiZSg86Uq9",
  "key43": "4JYmSGQ3N8AVV5PstPqjRc2TC6qcaJfssVj9w7NGvn9npVmxFaeFo1mrRotiQ4wS5uE4tUo4R8msjE3XjUHmDeaS",
  "key44": "5kBSCoZt6P7SpBDCdJck47G5JSTJSBBbvfLZnK1FZQ5qaABBAF3q3AEjUr25ixAmFGFzmCWSFTsV4UjUApHAPGSL",
  "key45": "oSd8GvobNWoprSRd59bGPxouN2hy6MT2KX7ECmszLvXz924MqJb8uYzQrE9goxCRq4vpNR1hj4TTw48KLvPHfkt"
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
