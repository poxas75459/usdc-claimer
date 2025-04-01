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
    "2eGtL6o2WRHxFPues4URdvhfkHQH1KPMRMyRNPn5r3HhMnkkrFcQtJMFXZKwfQNRvfUty4XYvkecPYSwgbr4ggKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qpEugxSbnykYBUJw45xACbM4jN1CvDopmiRMZcsg5w7hzas3H1bv4PUPpY8JEUPshc6ZLDHNwmzgdMezxJ4o9ag",
  "key1": "5FhWtvFN32B1rcU2kys5yifiQ6hNYQcD7XTkat5z5YVeLGk4Q3Hpn79HH9CfDMbLNYn3E3HyNWLX5v9RyUnyV6wP",
  "key2": "2Qt1uGbKQgVozY7m2mzXgZMSo3MagZgfqapQn9AbFbZpr5Cy6q8ZL2xW2U5e9HffFMG2UHkiRPyfkRywb7CnQ5of",
  "key3": "5DiEffddsRjpGX442voc8fB9ni6CCkWmm8PDq16UdvXF9W4C2TjQCRPhoVYTPWPecJTdavGPLAstJAgB3omnwncu",
  "key4": "j9Kb3fjtEwvjLbz49jbrfQPMN4nXyqvpFx7Gdjav1e7jvcWhh5gA2mWpktYQKAdruM2c14Z5phcH6DYi6Lisczt",
  "key5": "2Sy4PoPiyUEKamt3rLGY925K2Qx6Udn3zj59zYeV2ayKXUF4UL4CxMsFJMuG74ZSzpfbqyQeHGpTUtrZUtGJXgF7",
  "key6": "47bVDPVsMwpCGNe1CwDhWAzUwoMmFwm2RuNuPmCgabfFRuRjKYzWazctdCWYeYyiih7dwvj6L9NBhNobaQ4z6MLh",
  "key7": "4D3bF4urHk8HdUgATewvR86nMKVNwGJEkt1hwioztqUo5gtJusAUhERZKkr5GQByRFMYQVnEaXXgw6m17JvVxoNR",
  "key8": "5kuZuTLbohCZsBgCo6qRdi26ZpCnGC4p5gowXKfX3mwzptXj5pas72ufkKKu6Q3WwUcDq9Aj3y6DR1VcBrfsroVZ",
  "key9": "3VP2fy9y5WNHCfxFrNCqzQYxiy4HHoypmF3qLSWHsLPfX9SWM4S4WJEXcK2Epnwu3s2qTKkgnU2HqKfGx535zUYn",
  "key10": "2uXdydRuBjZ5dWeadjjUNgW1QgXiKdxDM2793NyHXDCCu3Zvx6JD8yUPWcwDUwdtt5hVoRSa2ykv1ipNtRcpLawH",
  "key11": "345Prjhua7KmTEADrkiXDwMkKHz1mj2PQMZsWJBq5yx3xdehesYDpuPiDRugQGkrdB3Xskn6rGnQNZ8eatR6LKeB",
  "key12": "4Lih5vCuiqgUgvcrbn6ADK2wMrSvAUEdtyqXyj1JDfdb47KNvUic17dawYKeZLaSFQuSZg7dmzcbYTxw5DoVeUJ4",
  "key13": "34pLwqBg35kcGWhMPjonVbXQDGzpHs131kPF6G8ogkfTz9t7vJCy1zXUsDoWhHYTtEZSDH7ChYTCRduzVCCSX72r",
  "key14": "3uJqH5GnigjjB4o5cKosXAgpYPQ6rmC5ZuKAkTL6t77R8PmvxaHKbcPUDETHBBC5Tz9M6yBzs7K33YmJ85mZmtoZ",
  "key15": "zdfeRijjmhZPBwcPNyBR49dVmRN5wJtHtB2ZC3ttz1rLRxbJJ3BWin6vT448inf6cvHww6kVvS8zt19oDhEGYnn",
  "key16": "2tSDAFpiqkSqKQ6ydTy7CZyBND1cNkSG9jwfzfAH5Wkgjw9aRMDFd8gcP7NtxD9S3KqM6zqRcSYaamquhPExaSNe",
  "key17": "2h7AAL5oKE94KPVoUHGRwzUeAo6KwrPFTLcnFviaZEp9BjzDig4Q6KnCvzUGdsrVXcYALje2KUjx1dgHnbVzfk32",
  "key18": "EYSsATJQfYJJwX816sKJsVhjDJH2MAPDgqUhV2QkZubyiJ4UTM8Yz2NJdDGmqNfNgYYX1UDgwFN8eM7DDWSuskY",
  "key19": "24BmWZDRHNyJ5yvaT5Sm7jjXcxf3zPoUeeW5iCcQsBcBD8Z7Vsm3BDH2WGdc4ymz9FxUi9HS5Pcax3zjFfMpJhgJ",
  "key20": "5dvzcfPvWTpDuPgwikQwRbx2Qn7834t44dXdUoasx6Rny21BzurMphzcbRjggknBfZwXMjPcgYkVGVzAYhuLUTpS",
  "key21": "4mn7kxi7VBMoCdPv2RvdySPhfUhHD8DQDRu9jYQCiZcnVcVq3V4tsaey7dxzFqFnBCR7sReaavzjQFCPUahMLsdd",
  "key22": "45ezNhtrZLqq7meK5x7Vqk415wMezD85GuK3XtyEysHSKvwquf74HDSkAq5zvXs8WJ9tnTgkhFAxiwSYJEtcJTFB",
  "key23": "3bgJPAgbimauNA3Pg5dshnynaZ6bzeDsJqmDrQ4iopTwPXwXy5xok5oZLNmxQDtaEfStTyJRAf3s5tf8bmFtdXZ8",
  "key24": "4KVwhgMzqjawjBQEbZTbEqXYNKhQPB8sZatM6ve24hb1bipvHbYAH36kLrhw6o9gVVrnxnBEaetfc8ywpa2ohhtq",
  "key25": "2V3KQ28ZtfYkeggSczskBPZsEZ8EAnhd3eKvekzQidVnmFncKhRQ1pJWMC3pvsq9wqywvHGZZjFp7MCGjf8dVDXg",
  "key26": "3RJ3p933zN7yQ9QqzKbLqiKRfvN9CB4pCewYMxVX4h9gvsTziNgR5LTFa4Ag5E81N1D3xBxeeTQTF8yhcjbFzCF9",
  "key27": "3rQ57vfufc82kQBxQnLrDhN9AwC8QUfDH3sEKsZ6CEuWEZvxfThj52ChDKfW6s3GWLfZNwN2hvQrjYzKmN4VnhoL",
  "key28": "4w253VaQsqxvYvttkMAy8iKtotZNR7jFneWcByLXGDFaq495M3xRo25bJ6zv9Uemk3bcmdPMzHH6FJHMUtJxpGhX",
  "key29": "2hcKbjh3HhQ7FaTBtpneCZAf1MCEkGEHavxT91sVCZxNLnPKhPJ2qJtgkssjWMqVXeXs5v8pVnZPVm96eKKJr5tT",
  "key30": "2sAatGXRZkhotrwUgNZN5j7VsDHVJHHaKnqZoWr3rGSvXV3AEbEGz6PJmeFnCBcKKFYapp3PFDPQsu6CJ6GBaThq",
  "key31": "5iJYjU19RzUJL1SByG3k7RA6JNJKe18FLDN7J7BJ1x897qq2rKuhWjjHeCqE3aReZo2V4XPyiYNYb6wVnau5o76G",
  "key32": "27WrzTbxj6TK7NtKJ7b7wosQoBGD6LF2ftJ78o3Ur5hWBGminv9vTYGMGPQK1xifm2f9uRjGujH2waGJJxNo14ST",
  "key33": "xkaGjGnudArzCF51o35tiWjJoui6yEMLTgPnkBqrfodq4AU5j4NUmr6TjfWv3TgC4P5eTXRfdtiBfmKfhF6NnLH",
  "key34": "4sq4ht3P1jpptsxYhfEv4XFbQAfweumPCs2M4UtuTJg1PWmfRYbVtmf2QXtMHoK9GuKk3tVSfaRkZD4wxNvLR6Ls",
  "key35": "55n7Lz8G44pZ4EVcXLBhFN8MZvK5JVwU8pwJSNSmdxqLwrLLAp17RFwGcQoSZkQuTyeUdhww8D3YxSBKZCNiPbyL",
  "key36": "4BJBcxPc6kyiA4qAq4bdExdrWkRmxgvUzFt9Wxgme9GtwAU5dpR3Wx9GgB5UB3gkr8TSHUHe2hctDZpUyjW1D5m5",
  "key37": "3SCdKNLFg7Q6MxkdeTj93kiRWC3ksbW59AVAc4HmeL9q1LKhXRcyifzhp4mf5Ea9HTuTMj89KzqCrPe884B3UbGG",
  "key38": "5ESGnizdww2eghDqgthgTWVs4fvJAHrYcJn6uWPA8HNgmoz6xXbkKpiFGyq3A3x42PW7EPzQtJGFKqMVyGKNuV2H",
  "key39": "3or4WL1imzhPaCWEasqH6cgxvA3o8PUj5H9qfoUThQTJy6Ud4GTZEwyhMXH6Q2gWWDqNBJWfgFLBVaMnjQudxwHK",
  "key40": "2bqQkHvPYJVqA8FdWFx9XbztqUNth9wFgRakEeTCx57hySRh8g4SaP54cEi7BTnbsGGVFsS3maUzyXvDCPbRMggp",
  "key41": "4PVtx2sJhf3Sa7epYj66CqpNFiBSYRPdwHfbKFWSaMQzq1yHTrJFxdUhbPHtbR8v4Pm7XkkVENMFbrQJ2Z4JUE6g"
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
