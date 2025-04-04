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
    "2eTJMKdi1A99WAmnVfsC3q2sMGtNzUVBhLzxqhLztsD6ToiszcMGr14v5prEKMC8cRpyTXnrpySkLW6ygADjKRMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55J3rR4svxRrpTReCggr4mtTnZn3uJnQMpgS4vVNVumXfSR7CXXEsya5Bda3HCnDgprbdaz1F6AJwzcsSMqcK5E4",
  "key1": "2SPTMmPvSzHQQwU3JXHSZs16mYRwnxy8L5Pa2ZFQDDP8c7gr7bvxYPj327bcRcSrSDApQuq3X1EPTCa1DeU4tpHB",
  "key2": "4bJCiEsgxgcAXahvvps4oJyxTqqCArFH3LoxCrcPmNKVNz83j5RHP3sJLsoTqNDS5YyR4HQ1wz4V9dnUL4sneBy1",
  "key3": "62evoQcCQ5iMBZJHG82tBnyYGzodFHZm72bBMRkE2n6rkrV8BBhc6PK5paTBFJRWkTShQSeSCYj8Mbt9uWYkDqN8",
  "key4": "3gt2LFse6vmK9ERctZxdinibXtdZN3E4TQp32YrUTwe3tXsWeCjteA8zMBz27VicWmNbo7m2sp9xnYiNgGZL1cdC",
  "key5": "2sMRS6ZwSN4VfUEDUp7QzyXvwf4LwW6DMAA3rj5ouDwJDcY44srnkjcoKHyCDCrr2NsXUE4kWhXUEusUfvS5KEFV",
  "key6": "QhAtCLjdYDDk2mA1mjkuCbBtDZf2juk6pKqB45gsR4fXr6XLzrJNUa53D8JuZF3WXbTqK9K9Hcgw36KUkmkxoxH",
  "key7": "3S6Z8caaWGp4KJ6a99zq1tyPQqN73deXvbdSKganqcc3a1cLz4pg7JpUH3QvpZH8PMri4ZRLQPGvKEjsF3tpLzrK",
  "key8": "2e8htGJ4aumu5wB3DjqD7PHnHru5FC3MDhYzS8gbrn6SvDurMEaJHKj4L6Lp4LAevLJwyiVGmoSSF1STjXL1r87F",
  "key9": "ZsoHZGr5dwotMj8Mts8TW45dp533tQn1FhvTNBwTRRFXF219cj9TvWkqgMP68QxV3zi9pEw4HT4ZVWTbPxVwZKz",
  "key10": "2ASSE3gtxS6wocYzNxn8b9Re4Aqc7ukXghDtKd8QNBy1BQQeefKZn3XWXbW1AsHBPFKSL2idSmNUtujgB8UoP4GP",
  "key11": "P1Qah7M4ZeRUTRBW9xfmXASttLf6g9JTAjhSUWhSMGbJjXTcxex492usEXrS11oLmtD36oaP18orAeqteozeEuD",
  "key12": "5abwWSKbgi4LU4hf1av7cZA6VXMwaa2QXBQ95QcLaY8tESkUPaAeFax4pv31wJGMKTJgh34mDLVKPQr45yoyyp49",
  "key13": "4CFAzD3njAqG9wY3k8k61zqAnLEKCm98x5scBCzEmNKLb7FD67VddEhD896MiqXLdDEp2VnbAdFT3KihWdxxjKZK",
  "key14": "3QGP77Tcy6WHoBJzmLFgScSEzVrFxsWGdi1WT1p5HnHvzbW2uq1QHkvTPkthn2ysT2A77zYw7F3dBxyUkEmnzdsT",
  "key15": "2La8WmhzXVvodvoknVqtWdNC8orRQdZbmaJuYGnj49DN3ug34rbpbqWJoYHgTTR92s6smfqav4nBFGeKjK7Ft8U3",
  "key16": "3WagvbdJyNPZZaSVC9zzmKKUBo3aYAegx68Vv1ZUTxdXrQEXqLqeLvKt4tToXNvSYQ31gXUkcTpW2yAqqzmCPSRy",
  "key17": "4tXAGiLq7wkMrnHA5JAJZ2GDiGxRY3q5JSXXV1bLKV5qbPSNtTLu3cFoRmynayWp39NK6nzpS36cUAW4EgCCe91c",
  "key18": "579m5mma1iC82CQZfRzyqcT9MN6MPtb3HHKptjLiPykXhcV5dBcbR4sH2EVJX11wo9giKb5i5EtJvymAVU1ksbjj",
  "key19": "3A1LLbSvKgs96HRtLUZ8cWfoBUioKtecmsVhujQQMXLM5ivAZpf2p1W5V4xnY7tpb9NepWkNGm2o9aLXjE5Bvmzb",
  "key20": "4cfa3MydaftbYxaxHP7vkHuRSPwzFDSsLNmHDDkMp3ZZ6EhLwBmb6wrsEPmJvF74Gia9ZT3Bc6kguJLxPgmBC8nM",
  "key21": "3txpWRxLxPMuuiD9sbBGzq2Hfu9s1CjcuuCU2Bg3N1bR9CimnZARWvSBAW29DrtY4AT2xQDKvuH4UnCmPYY6A66z",
  "key22": "5pb8DVQ1UuWdiWyXut8Z4NmFYTUNmpuoENvfphztHcWo3aHPaCfrXjXi8bBrN43oxuMUXVR7ZpReQzkGLYxfrT4W",
  "key23": "T5oys5Cor3vyihams3LhsCMYQBKB3uVbNhnZ8kdVovnACuTJSK6zDzSjbp9nfkovBuRk2a6LEgthJA1Fnbi1627",
  "key24": "5r4cggoRTVUiPuE7EcYTuDKM7QtYjwXg7Q4pDzXFxUV8vxBk7Kte5akB42aT4Wf2zCBnrr4CkZat27V2aPpfebwV",
  "key25": "5SYKHbXD7V4wiiMQXWACrctavr34TH5RBAjBofExcxzWTvSreGyryU332GMJ1QbLHj9xQrBnuctVNVyK4f94Xrdf",
  "key26": "5vgMn1PzcNqeuNZtJqRw7fiUyqa5G2Y79jcsEksiP7migxsg5kX36xMXbyxWSJnpiQUL1NAsCbn86WLopMEQmnkA",
  "key27": "CZmUN5CXY4aDmcYiffBTPkerYU8MRBadG7T2SGUrLSPJSQPSCQHJYxJ2rCpccXjS65ZvEPF6ZDtQEhUSkTx7rD2",
  "key28": "4Ts19XocwkotANWmRKAi8U4mLQkhZu3zsHpKwMPXTUbsNqMBGVKXBjubCbUy2nFHz8LC8SausKKyFc4FXP2ReV5W",
  "key29": "5kPubFa8QFTk4jj4DXaCDQpdgzfYXek91dAWJ5mgoqJofxEUMuRDeBdBzVuZmodenWdvo8jtJTsKKJmSKFU3moM6",
  "key30": "8oJLw6LtbrJxC5qUgCsJXrJDizYNCgAQHH9EECNLtkFjdpkETGrVVrnEg68tZ627u5RbXzQjmXwoYZeg9Y3KKfe",
  "key31": "3JuUf6Zc6BHjqKAmGPaNcfHEi4sexunbS5nA12mEAxS6J1QTsNZoGyq6Q9De9F2e4cSvmzKeX6xrzFjUn7tLuNXq",
  "key32": "3reqNE1ZFBnJZg59j4vhhKsuKt3vkRbiivksbCSvQdkQbzG7S5aJeFK5iqEVkX9C4EbqSkBMphWWEtN4tmZqWzM7",
  "key33": "64j3j56iE6hbRQF1cnAYM2Hef3aTAtYe9vbT4vBhnPugMvmhZsPaBCXHw68QmGi58vkyfpZ3SUwJSmm6kGR74fw9",
  "key34": "67Ngy6eZ5Pju5xcYNkQtHkoyfPQTYhfkgELg5ZC7v5W7FJp6YUof2Db7YarjFVNqB7ZAM29g8GVTUaZJDY2BKqAX",
  "key35": "2Hm4nzgy8ZzTG55jYrfBjJ6hfmbsdhTFETRzot2LeRK72XTf6ScgKbQxeKA5W12oyDzpU7n3sUgKRM2v3yhyciV7",
  "key36": "54rTx29Jzvt3jeJ5bg8Cw5pL4soA8kS7eSTfADvjLfWodPiELrfGx5hBQTBh4CP9DRiEUJZFKMhd6Xi9UdSwVTWH",
  "key37": "3QBu2sTh7NYkX1cHtG3umRJ2TrUVjJwyGDGSD17nQfkfeKvhCpm4Mizhh5nLYnHDYih64CAu63WvtNC1rzZ9FzRk",
  "key38": "5sXgS6s4hh9REsGp5Tq11Kk3aqha9E9rA6MqwqwE9Gmxt7iDWtrpLk864PnFnj5xSKFmQNWtfYmwTkHP3iDf8WUE",
  "key39": "fTjKiSHj3SKcxCcbjBTc1gfpe9fhUSPhXtFsY6HSY6qkzgmQtutgcmyscUfX5ExZrnDXS8RHL7WpnN7mnJW74st",
  "key40": "4y9VvnmmAmGDMENu3rLR1keqpnC3Wr9JeZMFrKyX5cc4qWhsKDF26ZxhUrc8HNLmRpqHSr5Drg1XaPmnVUYpTgoa",
  "key41": "3NkV6HAKSkphk3Mm9h1dFwLfnjHAXNYfmd3Fju9myUtQVJBSH352au4k13Rjo66Jk8Z3ztqGwzZsmyGb38wP2Ab6",
  "key42": "36eYuJVLzi4FiSHAt2kKSTgAfB1JGBzd34MSCk25P4CoBjUszWATK6pyCYKywJJoz5jF5TsvJrPXzcy7p9QKcG9z",
  "key43": "46eSCPos9LFJMKo5SBp6ZZ5cQZDkErnvLxq3ztsZ5hZxpmSAwC337djRhEvzgoEFA9Q97U7mLnxvqnnJELA8HKYs",
  "key44": "4iKzVU3vpvsLxcbrmkrRxkfLyLiJRzrmYQRNCVVn4LkBcSUpCgDYhzcyg1XJ4WnJK6Y6ym8RB8piqbHQUqbpBWg2"
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
