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
    "2qDKTH3VfV91s22NouApzecyQgVq5667hbEjg8oVhWZzQGfD4yGTtyDVvcdqR7Ww2JpkcEpHDttGsKWMjqbG4uJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVdVwgY8yHYvyKWURP5Sco2LkvjwqErwMgSSo8txAFeEnHdjJmtSGRZ82q7epm7PzAA7CdUJ9z6FuzaBx8BWygf",
  "key1": "5665GJiVeNsLM5h4jRYAEzM19LvXBrkg1H3wg5iXVtNTdwzERdSMnkUH6kbNb2JszvcfwpA4qzogKAnvGXczAyDj",
  "key2": "mSth7nNwB1vh5fsNCczehe6Sztx3FtfhY5c9ewzUJpPM8NcgN3najMjH7jyR2KziL3k1PGXNBQuQaa4DdUWPMDA",
  "key3": "3SmVxELgbSqx8AKCkuNUUNfxZTjBeizcBgrvf1WBx9BuZFi2JFMGCad19jWw3FjCwp6AM1upTaBuRz2gsWWPnFhW",
  "key4": "3JAF6VBSB5KAnnpon7DtHJuU7RkBKsR8vKcgzKbyNeYxRpBk5NnEBoTHck9Xb91uRi3vJZRPnz5u7hzuzTSHQe1y",
  "key5": "3utJmUZmPfhCNJng2Q87nv66Qgdbz9eyhofRCr1ZmQ9kjLoXwXuRwbEe3NcuJrk57c7CE6XKJszYP7qs3SHe2LQ9",
  "key6": "zKe9ohzaSwQYjrPzQnscPGy9dBFnsGZJeuuuhUhUGXzWmZE25hCkydZA3Zx3ApRqDHmRTn57UjPu8mswAZHetEh",
  "key7": "21z3mX1QJPekpHGVuqJJi5YAAKPBrK2WDhjjLWibt76fKVSwHcCvnLhNtwLLpreizKzuLtdNwQCMuBRtRKstzdND",
  "key8": "244N8S44qtr4C9etYkFo9veTZVy2TTQPKPT8wgqw8yp4xrvVSnAMYh8UExxFaQEXzrs6BRxXUfp3MUaGvTddttwR",
  "key9": "26MaDqe98LWLyQfwR1oEZXhvL9KeVhHqUWYnqF93jfsyGic4y622CQJd6RANJ2Xcp84Grpc9qGJHCaxjDzHuzFjA",
  "key10": "5ami1rDU3P2N4dGrdR4npnvKBr4AA64ataB75HXAFxSGsBycXPayfbQk4YmjqFUzF8Y7yzXSVda7u2J4EuTrT6Bt",
  "key11": "9sGUZnfwoGtvCMrUXfWjyaXg2bF57sxCvYSyJFs78BDKRiVw5FsdHFoiv6JbEYKXhYHMZinzF8LpT42L2WgYB39",
  "key12": "3S8NgjF9gMTdBAtTwWYTVuGE7VZr4kGGBRXXRj21LvSS1qAviwV5xKQrnpsRhFgzoZQSevpYzuwWD5fc8oyiFHKz",
  "key13": "4yV2G4YpGD1hwKJsSno2cZtPyz1cbpGabu6PgzVAD2rwMiN4NsunUENksvcNNqYMPuYYSa8TFgRJNDmnP5cEHcMM",
  "key14": "cbEWy8Bh3Edoqe1XEei7os7nBA1f49MwwWHYacXvoLbKapGRkqyWdGJ97meAXgXwCtFfokgccVZB4FtRxK9vEn4",
  "key15": "4kFLsMxYc5vT47yszJ2HXE3WBWTNVvPxJJkAeofbXe2TppiuTwjoCtFhk9EX9w9PPyDzbiap3yrtU2Vent74k41M",
  "key16": "5zhcm3gnw8wj7hw2dVy9UCo4UxXMPDFL5NazjAAepmqF4XeiXg5ijkKG1MqJAGisyvFb2kUMq4wG3SyHSu3aa24v",
  "key17": "5qekd946DJqyhRegR8JHGpdwSuSdpwdAj2Uu6PTxojhuYCYLgkbMp7ezRJbizXaPbpEFLK2vcp4QdzkwDj1Etr27",
  "key18": "644qknZQb7ypp8fWk2bV4EnmSnTPtdJtmGfkYdSB6zuR2t5TWjP72Sb6arChHbq2Cxptping55z9gLEqPNT13gSx",
  "key19": "2gnuYT4fE7dZZnXd2byLpmWAmstKj6YAo8iuw11zGqmHjfU7auqo3PpCPAsD3rt64Hri9odMEh3odXz8wUnopkmg",
  "key20": "yajCZs6txTnJ5CUhoyUifa5yxk9vt8JV3UAH71FNir5e2fHE476RBFxb2WCPmmdEdNEA1gjxzKAPpuodPVBGTdV",
  "key21": "4KPFdhzKyS3c57D732VCwSB8nmse3yozxNqTyUXPeoWi7uzvQ24tmXYnGsNmFP7GNTLyTF5UZQiQwPZ4BYi22kKF",
  "key22": "4ZdMGpPcWg4i9Q6gs1JVFYaK8EzW5rN7Jh1juJJ8f4JMPqKfpU3fuVSP7qoe1Jv5iQ1RrP9cjDKnga2yxzS7C9k8",
  "key23": "4Q2UbbtXnRfju7UsacyA1CpdMC8UZGNc3cPhsb2YhA2sXsAASFuX6NkTMbCxZrGWLC7K4L7kcSLafhGPamaaBeE4",
  "key24": "4Hc9kCEuMR5Zjj9Mw5YzsQd2BeyeEyqoz4c2cZ1cPVyXKZKoHKVXzhVRwPDTzvtGvjCyvZ9Fhb9LHLGZKsKwgv1r",
  "key25": "4xtkBPhayT36qiyEv9gGH4TRkySQLVvEzj5Q6xEkbBak5QMeBWSBGVFjnQuyNK13cY2UKq5bAYFiyKdMP84g7u18",
  "key26": "2HvTL4mEnLiDUbHMacLT5yCS3zP8bboESrsBHYc38crw7f1j42DRRoz5cmerhAdewaGRBwHDqRo53x3mVD76gzJY",
  "key27": "Rb53y5QCtbUNwCrpJMQxMEGf2uXsmapRRv92QmD3hb8zQnzkDkuyzrnYYEXBkasi352F67JXexWjvzsXRDgmfEU"
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
