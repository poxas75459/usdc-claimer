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
    "314AQgmDVCa7YkJKPhFfsNvCP6DW1PVsYTk7wEYkCkB38anq7E2nhup1UqqL9E1BhTx8DWtrRmCu9nFoRRAnFmNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "447zLMDtW5QoRvEbxVRWDz3bEcvG66jRESKSUrwsk2SK5CRkdxkGazhbS8oLWFV1Jd9zGjC6Hrg48PcCgDuvyiAd",
  "key1": "61nFfQwmoHLuDw1GxU2nyK3eCMqt4B4uX7fQaa9PaUT2vi1YdGdNMgCwhSbU7v1ZiYgrvCyVxoYgkcsqiEtapVnB",
  "key2": "3zxAjMjUCvHN22FYY1xyouAPJCagU7dmhrVeo49WtMykiJouYTZfHTRXxPguJGj2LNY8mwqkngiA3grWBdz9vknJ",
  "key3": "2a6NweENJYmiJbezNC8dqNGJzr4iURQjW36EcWnMj8z2cHtGRaTNJ98FX237NtyrZxVvHry9ZUyWC5tzNkAKK6oZ",
  "key4": "25aZzfapC8hYj8F4pyiddY1hoZqnF6MF1Ms9v4JTBLioFe8XgiPmCha7PVeArbL9H1CxuE53YQKd8pQZCgtBWkQC",
  "key5": "jEkdgZX1zSmmj7sCKLLf385DeueyX8BaAQBow4X1M516qJ7sKbmY5qg6NvEspPK8rhqhnz5sGD7ZMeBMtQg2mbV",
  "key6": "45T9hab8zRYgmBhAXchkoZ8dChfjw53RWmzeXrnCaYphsNXRepqQjk85p2MHaLBA1JrCtrztPGuZe8FvReFeMU3y",
  "key7": "4EoGkt75RmGtCP8fzGQDWNaqnvUykjN3UauSDw55vMbF2f4qJUBAt5mtwn7NJYGqo81RSaUT4fyhWmcMoDAZ1Chu",
  "key8": "2t2GpgK4RkcULBzRnj9Yk1sQkVanVK85oyxqEijN3fQkCTv6RfsbVhCtKKyeLmMrEMYc4WDs6WEpxVEMusrsbTtf",
  "key9": "4PfVjP3EYsbpxGdScC5SgujNLNp5kTF2jdWUfg29qRQcyhrPWUA3v15Xe2QvB7LmDLRT16p5qEkK9yUbUmEwdFgx",
  "key10": "2ca3FH6RXjB5Tfa21RzE1PewvRkj9WMErhRQeErRriVmKt4PK1qXHFn5UawXqbSBUr4kcuucVWefHa1xyTc3NnvJ",
  "key11": "4MPfhNoEnpion7zBESvz7uCUhk8KziUDtTXyjaQDWRhn33ubvg2NW5CJvsZtoGNLDRjphHbDVc9byZfic6djiqgE",
  "key12": "5A6aSXc3gh2aa7iUWNfuRbV4wfwnkVjY3Fn7pNMCxhWnbrgYMrRVehmkqmHC3hKEk2eCjZ1Ghq31g8pU3jRthu5L",
  "key13": "3QxkfZFUk3qC6uJ8uS9Ycni2PVrr5E9PE8u5FtmJoToZtiU43dHnaLpfSdHG9M4vQWGnKvu3TN2c78X49Y2Ngsz9",
  "key14": "5SBJ3g7ZjUwXdVj1u9P7BscMkcVSpS11ZPPZv3mT3n6KjaGYbizpiiarMVarDVqamcGq7ken5hzttRD8W4AgZx9s",
  "key15": "2t4GbdckirPP7Q1GDrJZNWLxfN6mcfu7UQNRpHX9gNGT72AHpctLHy7hz9EdRcQUe8YsGX2mJifN55zdMsz3PdWh",
  "key16": "w2pBsgozSX3Dfi8CPVVjhZH85PvDxVrvZvsyeVJWcUsCPxALWBJLEpdD1vp4E1vhcHVE4j8ChB1QZkRMavaaBXc",
  "key17": "2hLeeQWP8e9wcaAdzDB1hRWDwPiDvZeFZdJEkY9U6ubSuG99cdz5MQWChkP46hFN1BCi7Hbn5rZN3UkwDJBkdp7L",
  "key18": "P1hUjBu1Rq8i3yhngqmXgihj8RkqfBQHm7gCVdp8c2qXW6Y9phkzL35uPgtrRkKXzK38UXxXZpQmELujCF7abSn",
  "key19": "2junLnUYKmKJc4BxXY777mf1i2zWeK5qHZPff9Gq6giVTaUXeTSKnyFNFo4amW4rYSftn3TpgQrTX6pKjCVV7WF",
  "key20": "2KhvBa572G3n5JkEcTFNFdJf5QH9zMvKyPhvjQvGosoGvBwMEzwqdjmFiacmSLLFWowMCPzv7CXW4iA9TcciVeoX",
  "key21": "5m5PWBkaDguGe235MfJ3axBoqTSxG8oZZdPPDk8nBx35xQFGnELKQo56oDKu8d8nyU9YyersK6UYFQ7xQ6WupB44",
  "key22": "4pepjSkQq8AJnxnAKSb1UUaM32kr9Yq4fDYCGziuoy1bApYBrkhFCFxWmuAszw82dLuXbJtcpzWU9REJvcvqi2jU",
  "key23": "4Vo3jXbqZ4i4QFXfDwN8g56vbmaU21wRPasRvRFjRTvwmNSzD6fAkf3mx2MZuJFFa7GCuM9QTLRVfUwAtDWgQwww",
  "key24": "5EE8N1V4sNEUXjm3jKfyNasJ29HUUhQkukVmnQ83pj6h3cm9DuH1dWht5SpeHxNKNseuMyRmQ3nebSx3qHE3ZxjK",
  "key25": "28LVckouyJgenDQguSEFcBmAVrtzKHvYscWbK1pq9vMcv6Nj11SFJYkpW8xRUf8Mahspa9oqcicVAwaMvCgfpSn3",
  "key26": "4X4nEEp7gGfjsUuGEjGRHwV8AE9SchGrf9vy7xGADtpqrXdTGSAZkzunF2kFownBmPewhmpyDfR5DcnwmEMg81uC",
  "key27": "33UGqJpcVykMQV7tU3WTRZGWv1ax9agRAiXSHH6nKQgvfKY9zDoV3NgZU6ydLbGo7HERgcGxUXJn3KrrUn8GmX19",
  "key28": "3DCwH3BRdYgxXW1QPbvUVnCporTRhKBTWyHCyQexHMZQw8vHWsCo36thgKC5F8YBHFQXY99perBwheoKH9HqUQJZ",
  "key29": "MGFbY6vCtZ7DQ1jMJNguNxehMZH4axLkeuVyZATwRaPpE2dNiGJpejyJKSeR2btoJLNwmaWxP6upTC124Moz9tA",
  "key30": "NHsnEBW4YwfMDMuTSH9Acu2BFkbb22ytzJJLNgn7t4PPfr36zmPB3TayocUiTiCHhwj9EYZBwpcNqLBbjHm2YhR",
  "key31": "3eX6r934Xp2g2tXd1X3jYVE1KjuqrCLQebCdomQyTthsw1q8yV9s38bZ74Ju8ZdvtQjLHXoRBFzvRemeTGnyrsvc",
  "key32": "48jiemi34Mmu5NbJ4rsF6jDfnCoh4tdzRaZfaHKQex5aHw8HVTFCXgXFCanFa2ZmsHQUyk8b27xBFBnUT2CrdWdb",
  "key33": "29PbFmbBDHffJuMnGn4sjB1hG2nQe9hHWWfXc2NTQaEk1xXunowdchRCQpLHZmUpcenMnGFqGRPR1FAo2JMSatxX",
  "key34": "57wfiPWMPkPTXEpce2kBZDe2Ys3ouKZzQXVVxvAcx8E74syDYvKR2armAAxjywVtvFePvFtQ8thbGf3gmsNTQjm6",
  "key35": "4wyxFHK9X34ERRTK8fWz1DGmNUzucGEf1PMA5BUW9VtDd6bEQEPm2uU3bdySHUyGujRuiGWkjzfDExFFXspfUqrE",
  "key36": "5kSrHj4mPjYaJ4C28aY7vvTWBAGyrHMXLGn6mDkTTwtLL6Ly2rBGrGF7PDmyWjsXq5L3Ld6BJtZJi4e8fFApfRhf",
  "key37": "67qVztrgen3Uepdy3Xe8NxyH8iAsWbSPyZv8dTQkr4wDgmN6gmVXXRtjUKQLFvicDw5hrVJLLm52Bp5JAZBABLz1",
  "key38": "2Ys8oq68K5KL9jVmk2uX8uK6jN9b8pttwLndZVSe91zZn6PmrS68xt5dRxJW343f2Chp3j1xf1eg5iGT2bm4s5ez",
  "key39": "TAXrWui6qrs7DRH6X8MNiNWNoBprdxSGLjfxqTNqZ7m4qyJdrNdaDQN6UVpx4MrppZhYQ9FfaFhZsJEzopDXX3L",
  "key40": "3BKGp5hgHMAPRHndsra5fonpYuYCYHZsfD2EtxkBxrdaYAY5sbxmtSJe1HEhvdQieTK1cHKhBMjkdA5WxvcMdGo7",
  "key41": "44d6xAzKzSi49xqttU3ERqrTn37Ad6sF9pDT48N8pG9uHdfKUof6fd2Q9j65GA552KahLovaYjPRpziWAVnfsy7X",
  "key42": "2maqCWc5ttcyHGUXi32j4a7P3dp4knhUaf7Mzu8PURFwo7eJkp9Xs8SvfmxkT4XHXhWMWtgM9JzqMcDvgoxC48gQ"
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
