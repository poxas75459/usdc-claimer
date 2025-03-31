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
    "3mKSGsHYK3kqgaxagwTasWQ9ymSYbHBk6kwr9HdTzn1xyF9wwrXR2rAL6Rqz16EoDj8P2nfJBWAeA6NF5VHSokyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NXXBHcPRXytDDLQuoJgDyz9cuKvGf73uaWgo3oCctroydxdtRkfSCy6MVniZeoqCc933Kc8cnbkWQ6NNozMd5gt",
  "key1": "5CJ7c5TTNkSmqesXLF1p66RMzYWLVsWtZMJmpUoqAt65WeZhByZcyadM8av6hu6JrkKNiYicGH4H73KqghqGs3BB",
  "key2": "zuzFHDfR3YzCputge7UfGYrgdCwvBeYAtjjUMoYHEM4DLLZN67YhP5mqba2zqKqTcYXGSBHYxspc7zH8CG6LoPu",
  "key3": "mXYV6BqVLEFp6NMseWWVC39XPUqLTDPxe4txsEGxrq34ofj35uREwb6CuzszYT7S5asGJCLoG312uFC5g3zm7qi",
  "key4": "38234oeF1CfDQBpZNLwf5iwrhYn3QinkTZcknvNiNGZexx7woYWuoYxqEGPj7F1QiQef4p1wfapMXHEGU9i12EHf",
  "key5": "4SJVWiaiB3gjXC7mgwEyyRdQHXXtrhgtri1DdAv1rBVfojWpWy3ePXGZuECZAm6n9FrVxdQSoatFm6ZHzgzTP6K2",
  "key6": "ftivFZ5MWWnviVWpJQdB2mCusnJghUwnt4diWi5XBE8wvCL8dpSq5u5MVpSeKM61vNzKTJw4RMKxw3R5tZqQ1qv",
  "key7": "2aMPpbBAtN5mQN1NA5JULmTo5BapgQGw6JZmkUTSmr45aw1ndi1PtjUKeHP6L4uiCfqC6Qy155z5SEwramyzefpJ",
  "key8": "3e5jqDeeAFFvaGgTy5pfaezo2GmKaRK2xVwNjkR84ZJv6iEa6fqY3XnGiz6rEc7TpaXYHMgavvuhhDKsNgr1Xh61",
  "key9": "3pLTJSibDeuD8dVAHqr7VhPapCDutAq3ZfWZnYehU6RsjyuwJMPFCv1NQrMYbgvooveNnQx49GM5Ns1NHci9ff1x",
  "key10": "4p8QHZo3FGbFqCQqSpS7v3MULEhVB2eh5sB5HoxvzGWMNKieqA45HvrbAVDz5pvr3fZheKFKuuVgpZKW9P6qwuP2",
  "key11": "Xt4QR7j2fDVsgYESLBBwfrR41pNZnJtGxEe1AxiyY6Z7MCnTVAoyMR2h8UHC8GAMakYpJJuoHj7va4wQZ3fSkHY",
  "key12": "5rBdzxxn2Rx574fkdZ1o6pqPQpfQruCT4HnGprMqqT2G1dj8MeTp1Xo1oVb3WK1H4C6yYEH7iPE5A1XvYnSDMNa6",
  "key13": "5dM7M55snsoxeFE633GofdUNyNjovx4d1YwzvixqEuRZtiHCDCnxtz1cXyCJNKUJx635jc8HvXpo8BW5dGBSgtjP",
  "key14": "5u1MjkaRsD1itDZSCnMrUSEQFemHpRSZ7hHwW89LYWUFgaqN7RGikgR9mZbQ5R9KYpX4F1RaUu8zEXxecF4W9rgh",
  "key15": "4u93nThPimETAV3pdEyPaQ3F1AHnbgkHxAPH4bkozubAaevVT1VYgZfdwcwz8rsk82jYh134n8FCq3ct9ipuQKwb",
  "key16": "59vuUnU3DXr3rKcUmUaAeMgd1jT9yV6Ri2VQiUduU1bY79KdopHqc8vHuZEvSzHZ12ZkzGhnjrYpPQneLuGr4ugS",
  "key17": "4wW1kRixY3mFVS8e3oZnGME2ievC2NjEUgChLqVfRHGFXF3qHLSrTo1nu7xZi4X9kMQcKKqsMsyYs57nqiUDUJuv",
  "key18": "7AaJaS1txzhTUdPAweRxncgvJjxvy8jZqEvr6NLCkeEyvX6t1CRMDyaFW7KxPTh47ky2uxLphfwRFa3ZDAQd4rM",
  "key19": "25K7phQWZBQAsgJ17RCJrBXh9QPEmATXozjyf4BhXKZrYbrGCboAMxoK37kgfHV4xYswBdAyHxyuAWnZVK8ty1tz",
  "key20": "3TaF94uSgt4uNAszYYs3TdyWCnmYQ9nqFgeyXU9137bKmCZwr5Z7TpB7nNaaXH8Dz3RTU11YrKTauyLDxtQG6uuv",
  "key21": "3mQKz8PPASCyY85dTnktjfmo17iuaSGbB9KpDAmZFn5XgKHya765sWsh7QKfvCEJR3GiYerm8P82nj8r1AGrrr9n",
  "key22": "5YbLSENLVJoxuWdfoqmhHGSQSecaAFd6N3YPD9JtoR9wgJewZMLj4Bf3DN3VQzAMzMJg2HjTuzqgiBSvm7DsnLah",
  "key23": "weFoXfBJ3VoC6Nwias9Bw5btenjfz5b6VxEPgoUp7Y8bw4vw1iLgUQ3Bmopzq3PwFNDrr6Yy3tRRyyXmr34Crri",
  "key24": "3pzAzSHt9guceaEmWE8CVd677pQLJ62bTufjn1L5qug2SXbqwt9ewCxyg1mAU6A8VRsHXB3Vn5FwiLt3FzjeY3Dn",
  "key25": "334uxsMntsbeRXAfyURw82xGKrdP7YU8DUny78Ch1duG3Y7eJ52Jn68m4jdixyhng1gkBLHLTNQJ3URTvdkTq2M1",
  "key26": "2yviSBhm4YcwQjNY8vfX816KTSUSBAD9TLyJNSWh3Q2ao9WrHAKrwmSoPZhtumMrmP7Cv8jpzy1Z749cZHT8vVZR",
  "key27": "38R4wsLraFPuFEZfunHvroZDeb9YMQQxtN4mRLf4UjQMm15c1kiZyRAbSTvCb1hLJ3Rvu7mMw1GDp8GjgaePLtow",
  "key28": "3fwjwR8wjjDbPmmKi5Pr1BideUHRCsDy7Ja4qqegVGaTAghKQntJEcsULA96BFh61kn4CHPv9YvvykXiYNZW4Cc",
  "key29": "5iCE4Ci1DuArvbf13FcDGUApvNXfSGggk9iAykznhUPdeAdj1frpEW4dKNASJaNnswmEtSpiuKfBc4vjhHU4guQF",
  "key30": "4ofsB56dQacqpPNhkhPV5JUzaQ4EJKZ27sSZjBSJpTjUJeqiwLvTnjS14BLbn5GEKFXBxXzYwC5zCPdaTtHAMQwu",
  "key31": "5a358YqhEyfiKesQMsfxetPodAbmePJnejnARpYxV4gNf8pg6sro3716ijopbnqEXwQtBApFiMRxwkJUyVTeroUA",
  "key32": "61tqbrXn1NZn33ZXaj2bMPjip2Kteb8D6TtRA2wU7oRti6aB99RnxVXzx62qZWHBx5pj9qrY72qZyxrkZGi9ucVL",
  "key33": "dYhm6tGBHCwULkz5eQ4EeERxgDsWvjEoNgA1hV7LsCvQ2uzyDjGrmzjRxuqcKDjCa1P7CJ7VwVrtqjpoqgbGoKd",
  "key34": "F8aqsSM9VRdxqM1Qe7dBZi5DZ8agWt2yePfq2VZKR6wc4w2g5KXU58Xu2mZPf4yW6ALxGgipGTsQLPjU9JugmG3"
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
