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
    "2TE41eCTzroHxBxY8u8Af5yg4Xj7K29qXfqfqTCsmjJnxpyDTk7cCYWVRn2ANHe9Zp4q95j9RMSCjN6Y9DbrUVUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7dwUqDnNnGkCKMQPVCjm8bvsmctE8hJDkPNLFEacZX1nrs6wpFN56UZakwmmxjZJVPD6ULXPxqL9tgSCoJjR2UE",
  "key1": "3TVkERCv5ewfpaQwQjyt8XDf17qd5eSTgWev5jYfEQAfvCi2XV6pzBSpXMMR8zy9H5EipLhEsbnr4PtGJxuu28gS",
  "key2": "5awmJ9efKfVNujSUcBqpqaUf3WHNydZPSt3ak3UgbqJCQDBxQWMNH9S2UroNzJf1fUQ7nd5a6uXc1tg3UVRwqj4S",
  "key3": "5yvYdXtYh5mfN6FPu4TSAUW7s6YzxtiarXNPTY7NZMoWAC6wweZUzj57K4aQxM354Z9b2Gp4p9ZnHJJCYmorMrHZ",
  "key4": "5AvXQnMNLphY4piHWWLFRhn8BC5e7ZQ2wPMnYtUiStkoCz9M35v5yxWVHHnVL1nKHxm4qyyHVq6jaJJ7wRToNwf6",
  "key5": "277nyGuH7mBt3H4BbL2KMEqFFFkZmcsA3ngSdT1yZSPzgZd4JLhjZ3vZY9Z9SHFs926H5ZeHqjL6Kriu16Ut4Gi9",
  "key6": "4ttgVgFF5hTdZvPdpc9ctthU9tbPTLRK877tAh4j9B3n7knm8vnrrjaLNYHkEijfX7WWHGrvCGybx3meUcQKrFqF",
  "key7": "2toXpmtMHDjdTot5fY9oMB5Wq39ZvwiY8vm11rw3HHbJtp7G6fWd5btfgrBXPsUXDAjDZDZJv1xdhPRxCevH4tUj",
  "key8": "5kdEJzosnx74naP1gsKSGqtStDZwgD9Fms3Cdy6SREpbNJjSAc89YscokSKdSVu8tBouDuDmokPg5fXqXsm5ujDw",
  "key9": "3K4jLfuQ6nURtD81gsL1BC85Mi9VHw7MLo34xFCW5RZjjQ28mBdCHADUsebr6NVZX6ZDGS8xqKewPxaHsoyvZMRe",
  "key10": "3PSEQghyfq1t1i8HX8CqAu4ciewFt6oAVEGYo8JqcD3kbu7GaRX4he2LbZPQLY72dAKxdb1G4yETYbvJLPDHjeUf",
  "key11": "3XGpfRZxpkArg7c1qJVafV52smgkYAixFK6RmideoaU1dbeD24UjpaVdBspqRPP5KBYsv6Qn8R9HVKMPnpB1QeJY",
  "key12": "38M9waShVMi7uAvjoBW7eyFtYV5qee5bGpiLedVWgV24227PpQz9mW2DVZGyrjFQPLeJQ1SMy4ez73ecZ4KHgk5X",
  "key13": "4RTTAkQbUXFppwBijJyZGg4nFjCGNsQRsmsCUBbEnHZ6fSpZ9AjvFBJjf9iDkrhvfU4ppJbCFrEzmNDvN7kGucJs",
  "key14": "6wwtA4krEgCb45naPLUmvzpr7BPBp4PXU28QCHihVgW6GRduCRCVmsPVDZevFipoQRa5qanyf9arMEjndpe2U6k",
  "key15": "291hnf474Ud85xxMtQQzk97wXBjijXn1ZNEUM9LfDaQ8t7hUvLLcLXQdwm8PzQc3r1Wv5SuBQ7hPWDD6NHBzqDoh",
  "key16": "4S2cDdpa39BW1hQGytq9jfNvcpU4H2W5pWcSHXxF25SxpYUuafgXdeLMu1wYXw1mVzYee8qDJCdE4kQ8h1RV3U7S",
  "key17": "3Z7V6zxE15dAeY8BG5kUD7PasBxycjHQk9LiZmh9gWoT6u91sSEJqGHQxJJGgS4mvCpxxsubATh1qTwLSH1JDxNS",
  "key18": "45QhvyTviYijS6Y9ajcsaPKAwxoDsekyUqiR3iYTvryZtMpGPjWNhuW1apWFEP2EyWExYq4QjPMXZxhJQJoKJUB9",
  "key19": "2pVUAoz1emvgYCyyvdu8rQrpiATWNYsFe7Y1aNNXjMQ8PqB9v5FvLPsKgNHj9wvZBMD8LmSqbT77qhZVKUThKvym",
  "key20": "3yiA1keSbnnXaDJaFzo7wAkeUEU19XY4mDVV4mL4Q2tmFgPcvB9XDRdYCnMs4rc5sCQMC5idcm8WPLJN1o3Y6QbP",
  "key21": "4bPTFwP3Ss2pbaRyBEJrbPhEqm9LydJpRB9VgTJMYQdXPjqCwm4c21VgfTqiK2wKwnxyKJMFsAorjnc4sCpXeWKV",
  "key22": "2KXcq1b618nozro1wkfW6hGGgN2jAHgWPvScJrTqykkmNbX6B5B1ZjEW5k1nmjyRRnbDCgXVTEvF4eYybdHnLxee",
  "key23": "645sYqNV5cRvyPh8cotfSsSUR3Ugs5DrvpmnD8KethuDv6PH1SYS9r6c16VX3pycto6fzQE7ooRiDJzKxS1QtSny",
  "key24": "22yqqDDmtagS6hUtXLBzGEH4kftfXbuc4x99gjaTjdUbPTTAULa1L59WJdYDmTeQ2CZbBpn5nMmBS3idDLPx8x9z",
  "key25": "4kxWpmdF1WXWzWyQmu7U4iJyJ469u7KLof2XFudqjkGhpFKkMggqXiSPeh2cmQAPgcbLkmArJLhjZNwgBeE4fPRg",
  "key26": "4ZwkzXrpEo5dqKG3BzCtc3odmFPnUU6KWScGEpwG86SAq8tMvsz24ii8DWVdiWw7b1KfzGEuWYwnXxNVetVaRXv8",
  "key27": "5DNqhf6R3UpGVxicbePuueZ3Ta9mKkCD9bHfWQnE9ytP7aXd3p5aKEkQkdqTtYeFsvKCZ4v6qu89kbygqY6f7gas",
  "key28": "5aQFkLonwfGYn3RkPv8ZgMT2VmNMo28HY5JonJV5STxa6FMthTBu33FRReiZF4wmXicFA6eSR9Ns7QYPbm78vV48",
  "key29": "3urfmcLKKNUYr7MzDxEqjNrHZnw5mRDSpM1YBLBnEwMT8c8oGmfH1Bw9ChuskK1cChADvVujcypwVXZ9L3ikwQTJ",
  "key30": "3aMJiGqvBAvmX4Lc3h7VeTTBjqC3MEW1MaYexM2ryK4Rf9s3CsungQXwfarcUvSd88uF8CpCioH43RoL927VKi3k",
  "key31": "5aQgHinj7mqzyTr17VLk4igrArNVYtZ5GFZr1n8HMQn2WKUiJQhuKxXv1RfEGNwFhwRKwGCts5h55HZzVCgPDZ7U",
  "key32": "bxZq3cny3ebxgAe2Q5kzx9w1yYmCdQxzyZ53D5xSHVJJt9TrB2rbrLs8V7piWJvPVFe94aHVaFvwCavXG9ByZ7U",
  "key33": "4ARvSjwLAX7j5e6nimD8XvYq9u72DiUGyVM6AAeXNtjGowrzuQHX4azReYSx2P4uab2F7M4MggCLgu9wh8d8tmV5",
  "key34": "3mKzvYRH4L7PY6E8ZHLCZHs8FeWa6tL1gPB8CsuCeovqwtm2kx6puoMpMCpq2myJk4AogWL9KWmzgYKvMqqfGfuy",
  "key35": "3VJWXwxBgbtCBu9CXZQdzhhJAZ4Z8uKXqz1Nu5pmmhXtytbWyPb9YkRMrX5jmQEptkPBDtRN7noErxwauguqTBkL",
  "key36": "55BYUsdGqUaxrLtS6tSKRsBE3KDL4NjPmdTwj7vgfjNzSDMeT8WZ1jHFv8DHD2kevYDfSMrZmUNKD3o3AYwModrJ",
  "key37": "5VqVZqTquWu1SJtiXeqjB6z8SKCMUbXiHGkcy9M7gspe32Q9Qguabc7R3cgWQoq6Zu4xSm7yQEy2S5wEdUp1LUrC",
  "key38": "4u7269NmxLHTcfSkzaTD6ewqGwctHVRpHQ1SQEJk4YYqj9uK88A1rUphdcU1i3jePS85EgyVgkP75SpMVuAPtVi8"
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
