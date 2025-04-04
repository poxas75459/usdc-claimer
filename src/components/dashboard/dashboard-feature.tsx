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
    "2nj2NxbQUcukMCVvuTk3jeAGHPK7wxxSFLmvbHGgJLZWegPiTT5qtnEMDPukWXDBwRXabvWaeXfU2tdSMQxMxkjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E4KELJ7LALTPvFLEDzHuVNx8297fFWPoLpCxBbxAjsPUMYEozGr11syfYBDJgKuHuPcoJskoUYUokmsK4pfh9qM",
  "key1": "Ah1XqdU3yZ1aXqHrLajRpe9AXWfmXYnt9FbuBfRELfd2X2xVnWYueaGiSjvWZ9SydzFQLUANmBUHAhACRjKp675",
  "key2": "3p83CDtCgGoUSDLaj4B2FvKuEsEJiAULmNmPzJjvJHFHswSp8eNbx6AECJhpNs3naPc7Xo9Wz31hvDDtwJvGdPvZ",
  "key3": "41hdPQPf74D2cuemA4mKPjn8BdmgJZrssPP96x9YqZ6GUSyom6wuQjgs3cEhjLqgjwmdgmcTJkbZzjTNz765VVSw",
  "key4": "4vdio3PNjsHDWJcmM2Wpu9azB4BfS9mFUaiuRX1fzKcnuXqAfMdfqEJ7LBTdbAKt96xus7CHtXHCvp9VoxaUcUuw",
  "key5": "4Y2oK2QdYWfzBctqLtLj5UcApZNsyX3eRN713GmTYrV99b22jgMhubKRMiUM9rFFT9PsnsjCQGzvdmKsUJKAWUHK",
  "key6": "4ZDoBhwuWgtiFhwYeZHxZfgYABBFQBMN5bQj9fPKYzut3QGxWL7qBEUfuGxkV7ut72AMEtW3eZFsgYPL72p75ir7",
  "key7": "4FXd4E7LAENo6YDrm2uHmhSsdR4fKDkfph6M4Vm8GpRufNnNAiWAz1Z5bY7gW4PCJwkNuGLJbMpwSiX6VQz4TcDu",
  "key8": "2qp5aqmBHJNseiLLnpnEtVnAVQkKeF9zLB3Pb8Wfpe26c9sEFxiqQLCvTv96Nz2FYkcXkZ5xgBa7GmLLrwADv2MT",
  "key9": "2myTZS9X976BjzDEBXH3JL8RAobcnvvTXKQMCaDjv4r4L3Lg5KKYh7Pq9L3Z2xxMbUzfhEYTXX5fD9KTxrd981Gf",
  "key10": "5DXxgdJgH5vmz2NmUZp1HCcGErSKsREbBK3GRjELD4iP2GJd4mXf21HrAH9QNpxErdQdRsbnmSjXpMA8R4XcptdN",
  "key11": "4sruXXDYq9PhweaT7n7y2k1TivWHAy8TNGR7AhTw5dtcZM84JAmhv853ceWTvbJFW6cQiDJ6Ve3KW51pQ1fkse15",
  "key12": "22tj7x6oquC61vcr9V2Kv8jCw1hJ8aDNbgeyGXqaV8Lh6gzvGsFeo3uNHnoN3w3vbHciBaU223TA7ePPDRJrhee5",
  "key13": "3h4N12nd3bxm6BNhLWaufAApdy31VGKKiG3T7Q3uJsCHrN8LqemA78yHggACz79sSRq9GM1HYTPJfxULqLFmfBY4",
  "key14": "3xtv5UPyxU7L4tEZgUPBZ5AAXxsCBq3C6WLQ6AsreSJaQ6zExCAFyVq4b1RmLLagSsKwrrjDm2f6JpLgP7xbZsXD",
  "key15": "2M1oq1sfbZ8XieCRxm2aytknRUaJwscUQyJMYJQz5n7i7Hpo3TWwUUm7EdxmEfDbfC8vWcVMxxfx69vyL4kMNgWn",
  "key16": "aEbTdd2JD71iwNZodG3tnvb81r1q35kox5dXpEovcjtLCzTbojDCjYjnHNc97YWYHgpyVKrJXHoPLy7vRcycf68",
  "key17": "4EN4sDRscKrcgfHETUq5zzoSnd23gUjdwujdNsnpTQyQKYBWmLjdFJcaS6sEvNVCZqB1QuVEhixwN8tACnnJNctL",
  "key18": "4YF4MeYuwzQvtNFUv6LYiQEXs5spFNUwLLja74gocPXK2Qj2aGQovRYYBqFVWrjA3xBX5hRcYSBE72BFLp59T2zZ",
  "key19": "2NE3njYai5rjpme175zZpgaEBZNcUM9XiuQjUzKdTmLW8UyQfv3bkaARXmyiTbAgBREhr8oQpkrXKCqgn7khHDBc",
  "key20": "pSZCkKrA8tQvQJkH6e9AWqnKmcRddngG7D6sAx1FSY7pduUqdwme38G9MatMmJ2tWN4bGsZGNsz4JmexDD8e1eW",
  "key21": "56dJc8UaG1DSG2oznnffmYmfiJp7aoqXe7owsUmHG5TShj7Lv3aHNsWDEs7yX5MQ3xpd3BZrqiHLAGCHnPs12Npp",
  "key22": "42GBzwfxU4nw1bkxVmpC3NaXnnEKFKNLMcZhaGXAmnWL1z3ZTbh56Z2C8cNcXMEsQQiEZx98atUEaD9qZU6YzAZo",
  "key23": "4wU76b5P2qE931M2ATq7LaKu6gaPXfYztBK2jCT3USKkLNE3jMhaptvyWZYmDBFZrkSRxz3jsuxRH1a99ycxMrih",
  "key24": "4UxAFJcS4LPk5H4W5qFdfDgfSFphhS9onLKLCdyi7tctMCDrwRwuJ5r7eTo3Aaxd89BHJGUN4RvY9n7jUe8hNawH",
  "key25": "3G7WpBosTJ7kpLkjR9SRa9jQYWm6UxKqSHHMCpN64vaT885FVcsLDpZTvpdKLR4cxcQDpchEsunAUPUCwdYmXnh7",
  "key26": "4GZMgWn6CCSZA3jvibmy9uxNrMcPUtiAqsvTxHoujRhfLZKmVQVrWHLFU8ApevtHKEygSWBU1FDjGNVz9hBdM1p6",
  "key27": "366NKif24KTeUS5PQ9qtuqkr9BnZAd1gqbVEvbN7XLfPKVwaiLV4YEmGZP8bVKZS4WH19LcwvYrgmDbDmbxa2VEY",
  "key28": "566gmiWjyAqbnsGndnEXMsWPPGH7EQP7TYFARBgmCgcTcFk5YL3Py7iFFwS1YfYYqzHL5n9P9YEKNwgGZaRVsygK",
  "key29": "4SSU6fWmJxYVGehKydDYXYcfHGhkGhmUFTTuQ4kKyCoFeeYv3brSnYVN99XqVNubGBjjiW94wBjQ4fFKhLL9vHc2",
  "key30": "4y77EGYAECKcTTUqk2xwyZxU7NCwBD34iGp5MxdXDbcbsEpHo5BWpYR53Hjk9JCvpYLwPmmkC5ubW814u94ftAYg",
  "key31": "JyU7AvvMGH2w9MDNLFqS1vxC66zQYERutr5nFwvB1caD8Ut6dyTjYMn8JLH68H3qRd1Xw5CyTRLrSkUE6SQU3v9",
  "key32": "21xyFNuE3xJC6aAtugUFxWAq7rXmrp8eRtXm1xxYXXd2SnTJp8dvqJeRS8ruRCwV9SLTCLeaF7xjpeZMCtrpRMUz",
  "key33": "2h1jzt8AZZS5rE8kX1zN6WPptGu4myXfri35BYzJxvmbwqbEkgmguUUo6uxsKrrNMV7gunksMYiEuA6EhJDbDZYX",
  "key34": "3xA8QZW7aH1DUQNk8cXT7cGHHkrLPycDLMCMUJn29NBY5T5acfWKg8VeeFDt2T3646zzQ1nZWukDv92BvUAmxEVE",
  "key35": "4kBZ4iXMV7hkKER29aQceMeVAHkNtXHrTjn5VC4y2d41XqXEx4wby9SF7zxU5KtsgPJmENf3nB5ejBiNq7yTZdPS",
  "key36": "2ReHqE8sMCsGwubohjDuRqPEwQc61Rq9uwYTUeR2b3AGYwQqXngCzE7fGhcJhtckMVHavwdoCmGrghwsUgAKpgnk",
  "key37": "53RT5jULrbF6b36WvmtoQjevHZRujCix8jxtcQcTucQZE2V9LNPZtJdoURTQPYiZUve3v2BzoiBR8cCEEpdG2pxy",
  "key38": "5xRgm11M6MsEUrJxrrXtV3GmPxdN4ZjMiC8hsHRBaJL8mtu1NCUAZmfBa2oM6VsCbTjYJ56uq1L1BwyyU52YqbrT",
  "key39": "Wx9iuWmpNEjh2HknsRdDDdbA7qsXLpV35vhmq91GB1mqjPsWwshpwG5QwSD6yMK8YksEiL79eVPLX3vpNq5rMT6",
  "key40": "2vYkVSYZgEpcQRU25WHkJoyDU1qeTb9d5TL7zuHPaQ2oTuXqgVxCAw64jVKCexxD2omDW5kHbC1GHwP1g6xJZ1JB",
  "key41": "3oxvZnMqEmdRRZL8LHmcqZGwx4WiAk17BrCkDBJqdqUtesM8sv2gNHcw42nH4ukgqYgkmNnemKVPddmXptiohX2u",
  "key42": "ac2G8PKQH83V9RK42dKTELfPMDQ7FjaWSGttT8xYrD21iE5UULrp5orP15nMCsXNVaE1vRCcAgaR1fFufCyinGj",
  "key43": "34n1GMBQBgsTcFtFm5MeAd2P6z3zuvvyKeBkzeq1RGZtTiTTgJNQambiX6HVenAYeB9zrFaoaaWpMGrhTqQD7yqh",
  "key44": "4P43bDugSF6NsRTk9cQRCF2HZFjUMz7y8vhD2m2iiMTawSMM53PMJTYGytuuWpM7cEP2zvx5hKL7F63MdtH72G4T",
  "key45": "M9oNMkhhanasnwMaT9mVg8GLa52hJccUMbkEnWKCwkDTuPaHcC4xY5Y7wkAJzW66NwNtXsLU6eLvBFQ8PkBuZLB",
  "key46": "4see9eVXCt3UaJ4T97UAS1BhqnXg5bcjTKFxYp2t5YErpW1B84RXsJ2gQCkLaVjXc5ZdZnGatzHtzWQ56TMdTMa2",
  "key47": "2gYZgvXxgM9R36yaYNFVsDnTkG9LL48UDDGRuo3ywk68o2kheGcKHR3wXrHkT6xcHLfVt4TxvahYvwJYR9dvUJAz",
  "key48": "2bs83RRuEc9dwnG9nu3fSesYvw9qZq9xc4AsTZm1Nb5NemuRWG2LVPWNbaYsM8i1hbvCyRVP8X1zPknzWawRUju1",
  "key49": "4i5gSdb4i5HrnnCCj4xDDHiz9Nf3vSTDp8rdFBFkbwm9B13Voowu8LPzwicTnG5okp9bkSZwJHoAyft9k5LJPz5A"
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
