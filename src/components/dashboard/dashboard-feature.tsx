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
    "5KY3KaTCMVALCXjPg51XXrhhf1bgRzhbvQ6VL49bBrFDsZaMKyW2FFXis8GVdE2dbBRxgQ4ebD5mMiYKJu2gUx7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nh5jdrT55YHgEH93fh3sHy1gVvfESXp5mBUr19vfqNUUkTuk1wYBd22Jcj7pNhhJR8adi6DVw8WjZkkxVC4wXCX",
  "key1": "613c3ikLR1sW1GcJnVKQuKn5R34WCnnhwFsE5UpHG2wcJr86KRsrSCmfyifuF71kdZVmWGYgjwh94CkCq88XwPC2",
  "key2": "3ZZXATCAwQxL1K6EPJ9wi9mRrNuuoUwkVQgrZeoKdUWadmD15fyKogL8GN8biNVRFPgtMEND6J9gUW2YAkkd8VQE",
  "key3": "5aKiM4i7GnxUsStDgGfmqxmi9EJv83a6o6m5SCzS8hjsS6MbgmKYUuYztTANwWzcYvqU1fyuxac9iVRRiuvAyLGJ",
  "key4": "5zV6tFmHDVaVvm1z8mx1Wjjfs9scyEhCjjpHwVuRBnjTNGCqdGLPHQ2RxPkXiEXsYrv2qiBN28LEwg6twaUN7DVT",
  "key5": "4mwuSS6qJLd1fvbNiX5ramVwjzfkMJ1bd1vVrB6FqYcBtUR3VFJy1QKZ9xhcUhqjq2VGkrt7Dqn5RunFEMUMiiMC",
  "key6": "3RqUjEvnfzRovMHZWXtPZCMKHMxioVdATcqLQ5muo9scd6k6hvaVuJPkH8d4rKGpH1PWfw4q2U8M3wcn3BBcEmkG",
  "key7": "NZm6vsMYkrCdtywmTGXRrAbGHaFiXzzNMsTGvmsEEP2qUBnTw6DRWw9UsgopNciw1RVmmVPffJref81BFiGGsx3",
  "key8": "5dxHH6mtRsMTbRqb2kbUtscn1tmhhCwYuodWpf9r91kXJ1PSH5F4o4c9pWjcuczidaQPdq84RJubbNNy7oNVbYda",
  "key9": "3DHWtBfZ4ib6rgWnMU8SYvvTFapcqVSM6HvvVP66Rw8HPr96UjEhapa9nZs3LfS8tjj3yJzipJAkx8f6HSBMwmgy",
  "key10": "4FMGvhTyLbo4yMRP9s7Pf5BTJVngaEa2oeUPhjV2yPb84D5Cqpnupm3ZD9sUVAUBWPZMx6hBvCMj2rGCPyzEntmc",
  "key11": "3Ef94B3wFzECEaeA425X5xxnd2Zwx7UccxVdnLNh8RrUi21FhtQ4AAPkxsNcviqP5rGtK9pm4ViqphAaz8t67WTD",
  "key12": "2eRBxoxkAHjy8iBVdtZJVeqn6p6ffL21AQPJsLCJiksFjzbFS9foWZriC8JgwhVKXu79FJAvYbkLyZZZbCmbzBJ9",
  "key13": "2TbrTL7ZhYxzHRxu4Rfn6G7NkgXTvUssa9htaEP4DrJRAS5KHfLoGGGmAxP52PEUpGACAg63o4cG73dv5H6STvBK",
  "key14": "3Fq9FktSjYhpkbD2Mj4WSRiffSwdaqRM9uNrdRhRnUEBioxtaFkzRL5DTgPW1u6zgovvXZVRmC41xs7zrbETDav",
  "key15": "2Xfi1rQhGcJHG3YUuCgzjtYdR56xXhSUhh7c9WfhWQB65cSoNYMAKGMMEqdYqvGZyMu5vyn1z4Sgra9F7UVmyh21",
  "key16": "5ovMrcmqgqTKQvs8Jf7NkATDRVFbrMccRy95q5Xe2fVEs1UMAVaZ4XmYtGTBzCd7gJ6GEnrH7moC7AjpsWKHFXJN",
  "key17": "4VZ9fMyzkMGq3us4zNqxh8Lvp1VZ1pTjNJpLK8Qw6cNTk9KzCuFfa3fi3NTzzAYprBat3T83U674NgCHvS8xqGD3",
  "key18": "2oH2Zm93XQDnZRyjzAr6fMtoGMf7AxaEitDVDFo2UiQdh7fqgjRabpTQgnQGrvEMcWTyAnHeFAYJGjeqzpERnf99",
  "key19": "4jRDU4AWnmGm95SFmf5FtPasu3aD6gfLzM9qB8LtnU4eqcTjmpuqHZdqTKLkqv39ZSWqRXoUywPQoN7aTAAU8WuD",
  "key20": "4dE8LK6bFt2UftHXXppoG65GzYBcVNYk3kg49ry6DqhzCmkvWPyVxEcEtco5Qx1pGhcLUuRDHqq3KmQuLXr3p4CC",
  "key21": "17g3uJnALCjmF7Mj1moXjQjxFGpJoVb7dFCarSPRCQDkrXXfSSYsCxTHnHhQWTHZ8RXtS2yX7Q42aTUcaBXSXDX",
  "key22": "3fMnAmg5Lr8CE8TbTTdoXfFJRqcwh1FaaYceGXCRPMKgaKVdNT4fcbH1zGHd127Xw1FgHQDmPSXTegYWaxgRzg61",
  "key23": "2L4YBhowGf5oByw9ESKC3sWarzsjftHDS4zGrhfcUeaG3MiVxaTDgMFsxMTjFmSfu7H4FBEFWyMqTir4rjWhV3Ku",
  "key24": "2UM1Sn6cf4Ls6kFQBsJ1ig53ckRAPPhMJaS2ay99MRJ3AEPRi6nwBpiYoFGeYzeSw974RKcBy2tnmunQoEJZ5Z1e",
  "key25": "2ighGLpT3wGybMLyc7adrPvXovo1BhzGgCNDgaRc7hj5JwZDbyZGqCcnsMjdXzi5VU7C7hV3aDB6caUi4jJt4iZx",
  "key26": "3cZC4BmuekqhbnVwLqLqMXGTGuZtdizcqvjX87gx2WhTiEMcYNPtrc1NJFKdN8pBcoNnw5osfSwPLgXYtWp1Rrom",
  "key27": "5UcySPASp4j6Py9uyL52GMm6WAhABgP4ZgyA1zbnhyWZ6AYZ5bmA6rbakqtY2odhq2i9CK5LFfEFbkBAaGw2qoiR",
  "key28": "CzNcwfFFDMMTymkiFboBjzDS4mD355G1izsn7Kd9uoGwFi6bGEBPUqXRWHR8FewXmLppgqJLdM8zg23vZoQL12Q",
  "key29": "3ScaYgrv6qKRo9rFkxHgpmMJT4amCq9Hzi3ALUb8c8JbbKPNcAZSiYgnDrsSG4DjkL7iEv7d123wgmjeVo6Yy3LV",
  "key30": "4VBUct6wKdcbPNifknZnDjidWcT7tmEm1GjrV6WJEmTug99W9YnJpGBjaUBoG7eszJtwGaX5qDLBsPn4fyVqM11L",
  "key31": "3CHmr8HP5gqVwydziLZV3Q8AYJUvrbBd7uDp2HyQcN7rFEgRVU1pryyYUY75WHnqc1JWszHZkcKSwGqP8g6deJKu",
  "key32": "5XtriFTMwp4fTchgN2U7jt3arD9BC1criAGWMBvL8uX2r1r7YDya5NhbEEtSgbv7CrHsGHwfQ7om5tFm9qG8xWBc",
  "key33": "4WuRP6Ki5WeiWFEUMWqBgUWXgKJm6RnoJENMoxaSCeEfT2GcrnhP4tXbZxhMMoCsNCVakdN3czfMMr3cn98dNzut",
  "key34": "5n7WfQCwG57p9zm55mkikJoUaJG9LpryBXHMtacTzP9GxHPXsam8V7mnuWrLsPAwSXDuyJhEaSqHDNk1nJAjHyn7",
  "key35": "3MXiXWpG97CmzNLYwWzDxjRkndjsovPPmogfEekenhutDMfrq4Sa5bAzV2mZCKwVVWWxaFwHvBPVXfNZevSzMpGq",
  "key36": "2hp9aaKGEabGB5cPBQyvFJMsowpnmPzTWtJvXj3ky2WXH67S6rSVeqRgQ5dYTBP9JNhpEwhqdJWXUCS9RxDW7kHe",
  "key37": "3Kpk2EDVhY12iiBVzgHPwtt6QULfBWjFRcGZZqTSUkThJBy1t94jRWQYusCdF8EFDrsW8MwVTRsBPMq76Ux1uY94"
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
