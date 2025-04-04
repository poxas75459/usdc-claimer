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
    "3vZ93Xiwk7jmhHpj3DCdoZmREJmB2EtywbvR3zFw9KfjscvtsxYw6NwPZd3MVWXoLBfa8WkPVsMQb2ikkgReAfp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SdMb8gQkEpcD7YN1sJASs7MJfPTHLkdsT5WhL9JyYgjDwR8pz5C3rdkHuiZzqem7quPGtS9Boaa2zsHQRWegDUc",
  "key1": "3UTN2c6zeeWKBbkeP4mPsnjVTqBZitsrGQ9XPwopZWFCM8D1JJxqQE7M8vPaTnZ1d36ap1bFCauRxrHNgZMY5Rad",
  "key2": "5wPDvXo6KNLh26XFgzRbdM9o17K95FmGzTqw6LqqbXCeD9aojH1CX78JypHtEDsbMSHH9okZrMCUcZnW5tUxvYMi",
  "key3": "4mtqWBXtn2eyxBbhYed8EzqTvxqBRf1JXhbRXhpNVpzLt9grdgKe4b5M3Qbzg5CRwAzMiGcsRph4WTGcJ4j21XS9",
  "key4": "2fP6kEcU5JzG4piXoSUmGaHVvm8mpvjvf1dNGWHwdSE4ND3TkQxEa9eeqFwTyw1JJpfgM6dx5RJvEm5RC2yTraF3",
  "key5": "3e8R7hKcRLZKJ7crxs5TUumZnvgtqukwoob7o2VkFDmTzhsTu4FLujqZYE5xF8m7umQ94eGjdyqzC3bcJ2VJraZU",
  "key6": "48rQu7F2ytkXmEyaACssyxj5VYDAjb9CpXnhwmJtTA2Q5SSSaA7H8DuAQja9E5d2YymQd38VqVq9fnfjg1RNZXJx",
  "key7": "2r6qmfhLZr6XHLeTurpHLALRrpmL4wMjGktYMkF49xyWX1JsXKPCCS7wX4moaWjDfXwhy2MZfLvSr5HwGFBMeVqT",
  "key8": "5uuqEWyUQAcdcTFWrLGCpyZByqyCnnbFah5Cho4UMuEB4ScQPduPRPvudKM9NzVqnGCtK4TBgRxw3p6ca6oLQgQs",
  "key9": "XxXoM8VVQ4zBD343X9HwWDCXnuFrgyxfai7nQ6S7jCfan6z1ktePTQMAms1RLkr9LzuMikqczuGKPHb7DYeBgJ4",
  "key10": "4irorvNHHpZYPg246cWshPMZFkJzkWzHyBMcfsKtGUoCpx9T4C2g5q6Xe4s9MtS1ACvqurC1sWnh85WGQDw6nweu",
  "key11": "3c6P1Brb5wNNU8z29UB3pYRnvv7oV538bytU2QmrHYyLmvg9kpTL2hfpwXEybbWu8vErFKRQhJzEMm5nQpNMJdu5",
  "key12": "5qoo5MyWdzV6nDhhqzzmFvCCyq8uUdAtv5zAknFN5Bs5gBNyUYvmohTGEC4RZyEHEHNfv75CNukH27rr5zn8Djqx",
  "key13": "2MbLB5kAcCDfEPZitx2Cu8sAAew8TCCNoEtmx43oovMbAQgN9MmkZAu7ecbKFDgzzZumjUhLrsr9LZZpFnX2FiTc",
  "key14": "5rGx7UuQk51CJwWqcgmYduPQ2n7yeHuauXQvWKe6F711YJhqDZP4SBFeLp98rBdzofuVV6bijd2jvhEiH678agGa",
  "key15": "54Xmfuz3TjEof945ij4ztcaB4H83w1cfx84bMCjfTwgZSTBohUj9Xo5DRvQ1Pgc5QEPEZLXcGEFdMYLfsaHnrJiQ",
  "key16": "2EFJmYz5cr3eXP7gXtEE3HUwzn6xabyHfgBjtqGwaXVLaxvp8hP9dVJVEagJn5eTeCqtNygKNexRa8w9cRStqEST",
  "key17": "48drERfronupu8m8QCKbvXig9jaKZMRuy5W7cHheZkWmsAVyKMG4zCheTxhmzDuiKRoJTnc5YADceiyZiexJYoGm",
  "key18": "dCUgmML6svZaBZBjd2jhgy5V7dRdHVPJSP1RFcHHscGEqcpLTATSQP5ma1QJ8mpr5bccKT6uE6LjTFgtnGM9Kbx",
  "key19": "54AZVPUhbWSNEiqNB482Jv9StdZoGfWNsQNf4xmWDpmdFC54Hfw8PHWddiLMVgxiAzsrm6CKjyznTWHesNiBXSBC",
  "key20": "3nskp2eJfbZWXEvsCKe1u2KrAcYgaEhgEViRntkeoQSkZcxyAhEmxXcHTx33Uyz4vmyjRisgKSXFeFDGEAKNvWt8",
  "key21": "GpWizoqEaZcF4A9bfx7o58UosZTjXW7HBkWUf43LCnCfBcFvTvoJicqpAYDVEo4hCtq351gmtbbSLda5tgF8ptF",
  "key22": "4WEC5buRfXBgB1Qr7KVJfpu21fbWupyfvVuKxMPY8VuW94SbCcLbA65ufZrd7gqmCeDLqvqsM8C3f7KqM3bju9C6",
  "key23": "42pgycToSVWy4KKXspejGgjZjHBXUzVfAwZdSyk8xVqCrotDxQbjZvvD4nwj9d5QZBmj3dYhLgH5dzA8KfJG4aJT",
  "key24": "29UudjgDe5rhoZMx6NU6dx6A1apbrufRGAMKuvhTTRam84Mux2ajLpW8qN16qCLKA95jg3AnSe8joLLUTpP14afm",
  "key25": "62GUngk2nRhgUNP5uKraGqz9YkikX1DTKex5iNNc7wUeRL88aUNseAwiTKLttsm9jsD8uMoSRxaeJHy74UR1eC2p",
  "key26": "45vNEqxJHhPjYgGwtWeuUDEiy3pJd2GY3Rj8S7TiT26aBZ12Tt3DGAdjottFX3dU4NFPAUwEh5uyCjbvwCFnzttJ",
  "key27": "4gvu46crtdV4HDpKX8NMeAPFyCegwqKCLYw2BjxK5L24c17M91BK5oAvqy7RSNcQrdtbgXcaqoVohMgX8yiZ9XpZ",
  "key28": "2zoNp2P2B7NQnPoPyYovfhZNH4tBAjnazyxReBWYtxgcSE2h7CnmJHeL6AVmMq3kh9KT7KwsNvoHDZWznNeivx5A",
  "key29": "3x6byrUPgk9ChtpkEaaKAewZdwZmPXvBHCEJuv5oTSiD5PpdJ4ZPAiE6ZVPnWsJixM8bLneCFNqxqJ2snTQacG3g",
  "key30": "3MNpbVmWsTdz4tgvaGbo5UfYGnx8XF2MMc2ZE9V4LHjiqCT8uVama1zxedZFKAj3Vq18V9Km2VYzwYaPty5V1bZ8",
  "key31": "JK4QyDg9hCsYgnQNERBK7yar3YbYyiVXS4pxEzMbf7aJZWrRCqQUFgX7HipanEmwVRbgQV7SC5N84LnfjzCg7jC",
  "key32": "5AAjJXGwBmYfFcTQx2rJh1bc5HyUWSzUKUk8GbvW4nmfZGg9hTV7VhJovvjfSAUBRMeTkn4niYwTKrwXUu7NW5SV",
  "key33": "5YdMa8YTpx1hprBu73MXHviPiQxXvq1nSeeUaHEoXPM31zshokFW45fZRViB7pUk4bMFPb4HGEJuF9rMwf5LUjKk",
  "key34": "3Bf1BzE937xUkCFYKhhy36uym4x9HjsnWuBLRiJ5fs5ufv3T9spwKur831cBMepFcobhJQTcFDWzk6jKKCFR6AN4",
  "key35": "33QrnAz3YSmKUcWwWxZcv28uGvkuaQS3enqv3pqMJSQMCWyDrYMQ1aZXZBzfNxjnUTVm2hhi8mdyV8cyYC96Kvi3",
  "key36": "qqHRJYXMasfgUTdUdG2Afp9oqDShkLLqip51Q8QoEMWfza4CTSZa2FoYWoMCVi5byoC9K81DBD5hdXwQivodyq8",
  "key37": "3EDQGJQ34uhA27mjkr63ogEJt9sbddrUVirDzZ5JzBEgo5Lru31PterzJM2R33uC3B8Ze7XNVawZdsmA7LK2BHJ7",
  "key38": "57awohaQmzwRoUyLLVS7w68SNPZY6bqSv9WghrhvxokYXy9EqZfw4DkdQPes6sN1Wv1eLyLmCvJGJT8UqfFgMwTy",
  "key39": "3WeNz8TN6vMGqqxXQp26kq3A6qgfYcs6zzz78Aos4bzVdnn3oehh7wijpyeYykiSojbbNThxd9syuR5wV4BwiBRE",
  "key40": "5JUzmYeYiJVdufhosys6weKzEA5t6rBzUam7n4xNH8ejUJ8bvVjaTt8TgcN9w5pCRXodCL3fVmZTfX4cLfQMaHfe"
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
