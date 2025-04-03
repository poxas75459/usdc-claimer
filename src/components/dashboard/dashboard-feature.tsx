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
    "2byd6S9eHWR9g6pQeKFVdDxCyrshJKRLQZKQjUe56cioLRWcArybHnaBpvEuRcn4Ap4bPBaNEmQvCktQ8k6AomX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GD4zC3d2xXTh3aYgmNXBKyu4GjN4Q5fRyszPkddRqjAqoVgrVGDyMRvgs8e5qrKVyb7n18JyNyuQF3XRxY14n8x",
  "key1": "3gmHk5P6HAFJ6eDxVp7PX2ezYH92pYMFpHMqD8uvMwU8eiAUS6iFimv6RMVdxzRSq3pGLxhqdcjLLeEiZp9qV4GW",
  "key2": "4NK3Vd2LzbsXfJfeshPgoiAVzKxUPC24JXQFX1uqteEj79MxyqgDy8QLqsrF3g4QjTXxoUHviJ7DN6mQKkekZSQk",
  "key3": "k8SZKUuNh5u9aQGaxpxMZyTFwgN7mEPuzd33ciJYkXhEQ5kwcUPiFmNF1xZpGtjY1hNBGoK9QEw7DMNHiZe5VfL",
  "key4": "296ES3R4PSS1Ahb45xDehRJp2qpsXdqKS3xiKvMispBVBe9L9AFCx3fKi5zHs3WVtnctH47Xz5AtPNweHM6mqg4j",
  "key5": "2BdTkYu1EDwyGC2nhzev6Z3nqNnKAtFKea4jDi3RWo4iKT1W9FNKk6tLVNo5xkLPWEDWpmTcYxCccMkFUaE9ZWVr",
  "key6": "3dzJLEThcWu9craeWuLs9gTbkDQBkj46DfrEcCJD99b2R7JWCGkw1QhsBD4CNQ9ZonJwsxgs3Cn6W3zTym51zEf8",
  "key7": "4dnGcMf5QNZQq9Aud1nNeuVSu4XSeLxbrRvoo2xPMZoYcffStH4AkNzatvYEvVyyM9xBZ2SAfxxJVa4CJXtpjhM1",
  "key8": "4FRAg59KQv6oiCMeeJWaVM5LcdtQDLPu9ySpQph3e3EJU8rRA5mrUdpAonCxhagXv9J1mNQHsrYYwk2wc9xf8ffr",
  "key9": "4pCneXt8Y8HbmxgP6Q3wEeBp4LZApQ9ug9a9efdcsMnucouzKdGv7udR6Ty36D8qBgdbSANiVQMRtDFwuu3UqJC8",
  "key10": "2KEbEwzuVNF6JtEDn5RHkcBRkVnjVv3Q8c7sdn15Fxjv8WQKmwbPB24D5WtjntzUrgJM6v4jHqHhHRkdnfSgmEJr",
  "key11": "3H4cJhdjGaLZpCxTursdKwNXuyTi58Bug1V6Sv2WEVdJWMEjHeMyUEkWb3K9yCSCaGFQeXAuSyGdHdcqn3kpA1nB",
  "key12": "5sgJJYWxZdZqF5r6XjvGuNDDjXNzohuA8tjJk71m8CATkuF9vci5uadN5wqCaeDcYUaY5kJeo63NEZZn5GyBHtCo",
  "key13": "3o3Sp2aTB1XSd2owgKdkrtH5FkuaukXZDfw4UHfkayjQfYP9bEdmzuYL7GYnFD5b4ziLNGRrLeCJf6fCZ1mrZeqa",
  "key14": "5AaowM8D8Eb8wCz8jG1U4cGte6HRgzie5Dcaf6NtYVTMFDXJwRAi8D1N1HtNHz1EP7LvJyuXMPfsaZgrYUoNZfXc",
  "key15": "Mo8LcWeovfbVGUN4b98yt8JSNwEqd4RjpwAJQWZgTTH6nbuCW7WSZ4uEsw4innnoqYTkM76p1aViYCZhJdzJr6f",
  "key16": "3ue1bioQWs3RMNE2ETctkKDHzB4trZmxPo4TGoY7cN9q14cvB3KBhB8NfdkpyKmoZ5fP7a19ByhXSQAz252zYsnd",
  "key17": "4wRDT3RqGZMzmqeiHVgznbTp2hG5QgMYkjLMC973kZMKmXZbM3ovMgPJBo66Cc6sn61EWP6Zp99hwqPigcvuhXdC",
  "key18": "43pfVV9GxpEku9gLjQ5hE83uSqDFhyG7sH22YdXn5yXD3hWHrV9LbkbrBHatCUAKnvRBi4cG7yut95VU5z6uU2yc",
  "key19": "3aCJvqPnhM4oqQHaJhHLY9yFDrV9qYvc8gPfZ4psUgA55fM9w7a7widEKXbDuEnJe63D4qgz52iPi771G4qj9xEz",
  "key20": "4WoSChpKSusfpmxsm3zgF3MRxexU23wjD8rQzEJ5fieG6LfbKimfLDGU6164S9pLoDtMsK4ZsNap4Vp8MEjRBqsx",
  "key21": "5obCGRz2353tDCv43XTD3wdSYkQRoxCxQBgrAhc7emY6wGJnriguC4uUzCPKm2utMMGL3xVSheH9b3Hn4ddeUUPZ",
  "key22": "5V2wfaEVvdCtvLHBngSzdxAz1ZBbbN2nHo2Da1W3tLacFPHwUScGrGMPWXj7qZ3jg9zZejupFxvL9kD9NmdgUa6E",
  "key23": "vu9wXergGY4BSFay4LtRii2YTaZijVPczXYH4Yuidfn9CkiRqVeZpvWCvEyycxR8xokMV7usuxv7LaRk2WikZ4Y",
  "key24": "4M7T1ewKayZpTqyoLUQWcKCF7RFBkhWkuZQXv2fNUJFwrXd3jVHUJ2esTUCEae6AUYQjcMVsdP5Q3rfffuhoEH8R",
  "key25": "nFvmJUDYA9mSo2z8fGzjieMoQsuQNywcH6CCPnpAGsq8dtPyX1cD9naqwGAYHrUM2BPWpH3jWrRH371dxyTDht2",
  "key26": "5jHnVXqHpAvyNdwd7dF37tRbMF1E2dbSPCxD7gnDVVAJDQyzQQHW9zNuSvkZg3cHyJy1UwxeGZrNtGsFFnWzsMRg",
  "key27": "5uJHjJr5B1HMreWeJgGrq9MN3v5tEhsSsRyAGKyjwo7DsgBusokhYAo4Fi63Jmja1xZzt6UvaTZhS3V5nLHn6j1B",
  "key28": "5qLbZ75TC2Abu6wTXKj3RoxHMnSzXRmyCuouE6xZg89fWNdnenNxqMFoMMMxqoDB4qVbjRB2x65pN4q9C3Mtpnp3",
  "key29": "4ya9FoWxEu5VbQcMygxZaVGAUuXkJiu9Y4BLnWd3kcyG5HKdbZNriT2ECPPsWh5xcVuFqvRJNf5sNSFsKy8Cosht",
  "key30": "ftC9TeQXoSWx89HrdPfgKhahkw55MKAoS1q1NPCH6wrsCanj78TWuao2SL3LdmoTrbuYAitK46cMYmn59taf1u9",
  "key31": "4GBaNBGVT6dH43vH4cCkeufGDoKHMUPBfCVkXP2EfpTbyrgQz6FEh4m8AhXozqDz9yj3QvvRsMicMqx8P99Leky5",
  "key32": "23vnzfj1A3j5uXSag6BDB3xXmpZBievN6okgFx9UoYdiehXvXg1b3AssrMxYXJKfyKfMidhLtvRBhTpV2xYGFuyr"
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
