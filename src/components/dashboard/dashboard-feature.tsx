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
    "2YERq8PzDkktFGEYDw41wTsPMZ5HRh1MUaxr181YL5geLT2cCGBqqgkaEcEPGRLooSrRbDVYuRvsTEjoztupk5MJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U8i6SUeb3uJpQmRimhNeEP62vtJNcCHuGpTbM15Bae4ZFwEndbJWjwkJFMXSXPTGdLDLZngyMyqn35gmMMedVUc",
  "key1": "4ouFUMaK5Xs94zSBEntG6veTcvfq7N9jmGR2ayiJG7jgB3oTA2otd4CuQh8vZvGENB1GxQ4JeAfUSdwBVri7rYQ3",
  "key2": "5VqNk5fYPbiq9npT9N3NcTiDbhybgVANVZbgyBcK7joYeU3wPR3FGJDEV2gQjW4G3dRXzzKAoxBdfeoaJbCQXFUh",
  "key3": "4HSuq8EH2ZTDkjwnAfLwhHvLqDGeUqFSumb9bE5QKzioCeAGqDouYyJHd65Bf21JL3uY49VD1pySVvfY1o4VherL",
  "key4": "2sushvRXhpHPUtjoy1i7ZDw7jYXJQhj4Fv9b9VDynfAnUMEsLxjZBbMRk9WtLUTUSBYch8pdafCPoysYHqUgUfmX",
  "key5": "3CGgmRLJKU2goN3vT1JNaopQ6LSxjekmu4AJbdQaiTXVdLpmuG4oDV5DQYigqsDN9a4EMbdgeWRnCgUgcRoudNz5",
  "key6": "5PxZUWqGz5VL3rXmpLEhnXcMsLtGGPyRXVe9AcDCmLEMjycUazHvqitWBPesfHisVC1X4Lru5Xr4TRmJrEcAgLfg",
  "key7": "3Fj8SxZ4F3ZPJ7iZyHuu2iCiFSG48AvSedaLrVsgusDS7bwKSgquWKuYhmyzSif2SZp4epxbgP272Yw1bNgGdam4",
  "key8": "2ag4xe8KZG9f7DcE5yc8Ut1oDLcsnoRj6mVvK8BSpJbZiyssR8trzYHGUCSGon8Kmh37BL9PgfMP3FsfkAshRX1S",
  "key9": "w9HEx2M8u2bPsq2gP5ZrdQYa9ZAzcNJSaezno47CVNqydsDXuwU9cPu2jsEM6QXsWNMXfyosZv9HyhWSXWcaiGc",
  "key10": "2AMYN7dvPCD51T1htRjvXqCWeD1nK4cb8KcpykQgqJCsekf1Vt8baMeJ8FiGA438mXBLJL3bEhCH6897CsARJraR",
  "key11": "3UgS1xNdJioe1kRSiybdMKYyLC2CiN2bCiVW3Azb4A1QE263joxZFYtEEVixT5Qig8oNquQsXvCCz2FFHcnzhknP",
  "key12": "4gw3sYJdvX6gegkV3apupwmd23Mz9Ah955mtPpUY14a7bffT4wHZopZ1szL5yDuN5wzdTqDSMcC1ZkAkLji6P1py",
  "key13": "3uoQFP3wBTL6mrW53GDBhkX6gywa968QreuZpp2c71s2yYmJ54YSKhGMCw7XDCUVhvhV8C49HBAQgvEWmukR1B3Q",
  "key14": "47kcGSVEKotUX9GKV5aYJx8uibmE5QKXhzsAHyQgU4nkevwUKMFKUhRXGmkJG5f38wcwmaLpKg1x6A9c3q6ieuN",
  "key15": "5ZiBPdTGPtqLSbj6GEzqsQmaF8haQaeYRgcaczky1bifWhHKn3kcyzYVrqD2syxGEapEmcFkhyBhyTFV2EosPZzR",
  "key16": "2TyuwXPjq6Hs6jV71A7AHjUvobS24TxT8zCxEv4QBv9WysnhecBERDZwf6syDDoTUTTQxNn6ZDuVsxjHnhqpeMXs",
  "key17": "4CDU55g9w4TRrA3dUWdvTdKmbNhhApERhWms4P9HVYgS7ZMzZ6mVqTfGxzAASpVJAztt51wPQY1mk4PCrWvd86f6",
  "key18": "2gcvV6ui2GKVGptDHidskC5uBFGwYyG9bpHkYpfugYRy2XNHY8HKEwmC53NsLBGr5FBRgNnyF5yEkMiH7P28fSgy",
  "key19": "3gbNe1XJ4MXZxfM7cvWJ31Nyiv85kNd8cCQpwQ8w2T9BRn18BAcwW9FdFjG3XiSwCNbPP6AjrHaGkJCs3gxEFkSS",
  "key20": "RXtcpXSeGsKrUzuWruvN8rDzTTiktUtJvNkiGaUpPntqRKi8mDLmFk3KN3ySXTf5ZTcnKn1tHhwhpCgvzFuZ7Gk",
  "key21": "4vu1twxL2uwMwK6j6fTzEKvRN4qkPaWbjQwHrgmhzNJNythKoLVVK3ze6JC8sAcvHQZEZLvrxfPfhb9ry826vZFQ",
  "key22": "5sHGHoQtAqaGAR9yqtTXXHjn7nbYmmoDpDj18x4X9p3b3DrB3rnduFBZ417CynW7xzmdvgrTU3ZePgtXJ7gRvuU2",
  "key23": "KUxxRXkMZJzxFCqu11P3koMsCELtaJAjJJ1bL1KEhrQie51ykjmzH6wvivQaBG9Zqq2EuU1mp12wAyzDPMt5jfE",
  "key24": "oCrWWHZTqe5UW33awJ4YEDq6pyuRiN4irUZfqyJ82A4e24dh8cEFabppPnKLH8TTPEJ382rYD1mYXYbpyd5manV",
  "key25": "3fd1ymHkwZUdbBQM8gYYcjhhoKU2gEzMHJ8GPYrR338CqnB94Kui88rTyNGZat14iiHYSY8Rw9wLsVsXnrUJQxvW",
  "key26": "639BwHeRh5weceRxpjZp2QhQkpQJUCxghHm1EdF9ZuCdGCE1Dcpb6MC6hJiYbamE6PivyUH7QKCdMeeERmWZjhqb",
  "key27": "Ya5jFja2sjHo4o89DTngJLGr5GGLUXEuBrDhRAUyMm2rZwJwkWzYafGbq52474EUqWn2yDi8ezeK6FcEpEkM6V8",
  "key28": "4GMYip4PgSSAhioebpRsiVxfDsHUfuAvcZyoWRn9ssSbLwMnrKgW1P8B4EiCK5FtnepHdaMoahowCzgzpTj9CSVa",
  "key29": "47PXaCeR6kHp7YWHdj3ZC7pXWi1iScSsKgCyvvL1Q6rk4KwGi1qGEqhDEvHzsTDvWDrrhtB9X8FCWMwGCxS1yVi5",
  "key30": "2kFBpFzyotwCxPqLdJzV1rtyQnFffzvkSVDSMcAMeqY31K7wiQmJuBLQYGwVa8rmvFanaeVWvrpa8P3G9xx15Vte",
  "key31": "Lj91ewuFW83mJxhEVUeYACZwFWp2U9ckwgk5qYsxn4JPwoQHXEpLUFYw8jc1WEqp9Q5Uq7jEun3ba5rKPSwTP6G",
  "key32": "UiWeUEMSTmnm7ZD2Xq5rZg9k29wLxSF4TfYU2zkjQCsGa9voRbVmtQSPPMTPe2hP7rKPfvtbjHbMbhQVNVpz8Zq",
  "key33": "2mzpaJZDerQ9S4pHLsg4c2vTWw71Tw4rD6zP7bLktdkH9JLLj8nEeF6vMcPeBZeQWt6y3tYgNM44G89j9Ax4dpuG",
  "key34": "668Zv8EGZJcH61Hp3ZiB3r2hV9QsXwFiSd3fEj2fJzCHjLSL1zPcjRao4S8zrAJoUaK22f3iTQLWH9yQxNue8dP9",
  "key35": "4CqvqFSjaeQ3NX2zinijQAFXm795ERou1YLZMecFUZ1BZtJcMMCPFiNpv1tcLhxAt3CZQ8CbnwcCq8HFqtxeaV6w",
  "key36": "3411fdKh7jiYryWqycnej2aviFLLYhDswzPL2YgmwSSX2bWrAf4FPfKePgp23XEeR2C7eUFdYUkJnVSJWwVsQAUP",
  "key37": "hCQbjwCHNZY99FHAQcixvrCzzzEq7oiYfvfshPEgZy3VuEqbYhvDecyBFwuDinR66rJRY19JumG6e3ZDHtBuLww",
  "key38": "2AeqP1w67zriKUduz3GgFP4xp2evAJthSc8bc3xNgJgXVteBJ8EjeE9bPANWF1Lo5BRn9MzidwxEPe5czK8KKQi3",
  "key39": "4uuhijox7CtANN3YGRiqp6yZVRDnWtcpzCWiz5g7Ju4hKtgzNqQTpYtoYUwZ7qEcBxwLeSGipSZJHWhndHvpeudZ",
  "key40": "5NCK5Q9GboFoSsYLiWgkJpgzMP6RLTcgUQcqj3JztudNE7kwopjYA61gAfYSyGw14tTnQArsf9h5CLKBh6sVj3wy",
  "key41": "476p9CZAdibtueynk8tRvSwxiM7evVoGvz2SCp4SQaXii7w64Vzhvq7XwBVqsyeKdWm2JJCLhhABXQsNq9L8dzaW",
  "key42": "2Kn9wRaU9KMhQHsbAjJFFCmFJWgV3VLBvopNBfWf2UM1FR61gLtmtqEBun3vLeosYEEHbYnverkEYhPoUpFy9Mje",
  "key43": "3z7ZqTk88MxXzvZ5FmUfThw1tBkN4SGqUm85WeXvSPGQv4QhwjATkb867yT31Uo4XVeDDL1VmtDjkrbAg3StbRLK",
  "key44": "3r5uxW5ucNDMXnob8uu5vtEuAjjfvrr85CRPi3YZAFo5rRtQBrizFNyZfCdUixniz7cGR7NEmoCXUYvYPt7MWM5N"
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
