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
    "5jCRXs87DatjteCP8FJpLijmGkzCjCwxHecT4kYGKcTngDLHd6zDD2dHEFkdc2TP1XciByBbahxCTTvLCohDVtSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwkHMkLA39eKt8tZ363WuvGjWgAqdgtGaqPUHQXuerC26KEDxMD13kwnq2pF9YscGLwdbfxanSo1T4SYqxYfEy9",
  "key1": "3qQmzP5SGRWVCqQGjdEzTmBgo5wH1umvCRSBPdqB6Ewr9RGNcmPo9CEvctxNx4cRKhZzuzkE9uj48vpFLXKdQvJv",
  "key2": "4SDySbK1aDStGskrq2J3k86DteYvzrBLZJRAYwhzdkoReA2dtftPKJy7fjJXz23pKLeGh7JF6J7AyUUfypb6T7EX",
  "key3": "mErWUj1c4wPpHzQnU6qfcWkVv5kLPdQVeMGsZEKhvBbQuVA1RURVeVg6jsyYyChochpcMgiSqGkJ6ehNSuyScgM",
  "key4": "5ioKscyRghonA2zjjygXTwZqV24tUs8qd51CzUXpvCtAcNTtPdQWNdpMCzAWmUkDMhEyjuCmgXzGLdtz1gEwN2Bs",
  "key5": "2zVA7Qk7vUvc476k5QEopo43CFBgZYeNKjg8b733xGJ9sKdkLnCAYjr45HcYSsiqD49wQ1rkmh3s6xro9gPMeCCE",
  "key6": "5dtHjKWhGVH5mxMc9fteCNPoHCRRzo4bMBH9DWYoAUr7k8d6pAw7mJHwkkr1q45ZG71jnM1QMTFSZzbct7ZG6tAs",
  "key7": "2HorV9Xa9MQKc4Dks1m7UJFPhU26VYs9TJmT76H4ehanS3D9YcGoP9vaYa3Gbcq7qqXZswLFAhVnLhmHnbwA8Ftj",
  "key8": "24AD2aq7FLPqMkVgTq7wESFcqxQk4av21kaLDcZ4wYjeXLswThCaLGjQgbwjW5JkztBXejwcifeyKMqG4bhjf5b4",
  "key9": "5f4vs3RoTY1cw8YNBtHvXqviQA3g5139wPQWU7pnShFuuLKMTDZ5344DpRrNgDN7vWJBRSY3RDVQimx4SEfJcsdd",
  "key10": "6jr6dzzZTie3gpJEH6Bm4XuDT7GZ5VN6odvV8usR249tYZSV5r9NF2oyirD2dDjm1nE88E12Ug3pJgVpsxC2uvr",
  "key11": "4ypeHaJXr79dp8pxyzXoR5H3eTR6wG9eYe9C2wmL6zpqPJoZaPVzzVMjjPHnq9SxLxmgyDoMfvvDDFutkMjZ17kk",
  "key12": "5fycV7xwtZMh7BqbLKjKA8QDZLkq7EzorBFHXvp4vjuVhi7PyFBox54xnY9gHJW2YqzWa1toiWupgoeiFoSJNBt4",
  "key13": "2wTwndjNbdkPb6Zc9QJpBsCrM9KAhB7TjNyohdHph1SFVZHiYQkYvpcvBoH9DYWeeEztkeQCkWe1Fch7BLLSCXqc",
  "key14": "4oDaSojxLUK9wUh8Tzsy3anhAgauGpFXrFP67SM6uzg48UFYWgaTtUp2ZQUUGqF8BiAibXLXJcc3fzQEfFk6qmn2",
  "key15": "5krAF1aw3CB8WG65Y4CSagWZy2CVjL7idMYWvZi9wC6QZZtH2eqFXy3Pt3xRvWJY3eJ8BysTkta1NKs1f6L2TXXt",
  "key16": "4UYknvySeuDz9GxvapsLWnYT59XtSkJbYK2LNy8e8QXM8cmCAo1XTuzekws5mdHU7jYZyVUskruFwQWnc2sTVKUy",
  "key17": "5JSbjUFKiy2EEmSzxkDdi4kmmiGukJpAeY3e1AnmMaFh6o4Goti5btZwfW9UqVNrAMNFfmWJJpESaQtCQNP9xxyV",
  "key18": "5PQx7MtkTrXeUJ71zxXtqbLf7PYT6oHExVPRTsaSkVfcpgLpWj3VPXYeyPg2EV5W17dn6RXyyR511zcozK8yCwxz",
  "key19": "5ZqG7BYDyzGrQ4FmSkvctRLwFkbSNECrUKVWjSknvJJ8oV8NcoZYx87c9RdRsPf9cn7d6TvhcXnDyZ4mCGR1Pe7j",
  "key20": "XvDSBpZpMaLQ2uWuGAKaEtL2thHtY6CQeQByPeuRy5np12v66fAmNyQBdindqG1Qau2kXevrGAE4cemzCRJt8c9",
  "key21": "5zUEpCy4bycZJ4of1ecQfHcPojyVPHi8CBppx6DwooMjzMXv7YaaTpTsKsMP8wxxhoW62ZTDEicct59P2naozLDM",
  "key22": "3j6ZXXE89znsruLrJbP64ScqMhdneeqhCgQeNNUdkkfp1BjuqHBcytddBFMLizu61L4xnbiz2oAoeuNjvXrsmxSZ",
  "key23": "3jGSrdQr8uMBwPPUCVgEqX6fqvD81ZvAw3H2a2TpsGizNAuhCCxooXSZEiFecwYwXMy63Pb6zuAPaNdnQKzpnRgJ",
  "key24": "vqkDXndPEvtKK1Dw3Vw2e9sXaFh12p1RMPindjPmdM7gyhtPCiTLbQcZTed8cEygAULi2buESymHRq2YFAjxy5S",
  "key25": "4hXNoVKMPuLtYDRyy89TMKezZM9tmeDBj4F1GnwUGXrB61NRyoFZomyFfZuRqxxA2shhFQT1fpFdBL81mPHeEng2",
  "key26": "48kkLkEswuL6tyx8DJZgKCfkRg3LPErJYtxkGgZQ9vuUFsJqnLckFoAnBmyrEdjoht3THLyBpkSvyzNwZP2AoGYU",
  "key27": "3D2rLAyPXHP6UYvUCw9kM5GtvZFJt4aWgH3Rn7a5NsSmY51Dj65jhPpYYaBVjBMCjJEdAAwbdAUPrhtQ47U5eNoo",
  "key28": "46rxUQ5Gwq9ynDo4gahm7Hok5eydhE3e9yXi4GGJ7ZDKyh5pBQPEwipAEeoZqaD9aGyGBepYWMmN23BsgS1cNjXL",
  "key29": "R1zYY41454yWvfuCCtZYxnSvAZf8ew7YpDrAaXsfkeCfFLUW1gb2yTdKPcLrinw7vNAu3fbcaNXBP1aK4kaFVjD",
  "key30": "5vqh1JMLyAacuF6VJBEfFgkEygKRwtFZESTreapfrdWhSe9qDGxHbjdbtMpz3VRf34ygi3cnKoMX5Kw7Bw9aMEaD",
  "key31": "3q4amAS8LqERXZJhdpowozgFsbEY6qLoMKpTrjmPRFDku1JzGcwXYVxhRVA4QT9kZUTGWHoshfmJo2iVyztpwqyz",
  "key32": "3HShu7SkGv8Kq1yyhCRoLeBFDq6QiBhnJvPQyWBjiundU6PAEHMwwjA3sGrvW1BTYvnfN4y2jdMRYc2fy9XpafK8",
  "key33": "gdG69M5wtc62asLeByWjsQuCkDa1y7RSrJnHkTmbSez8UWoy8Df9GNjxHa4ySumYsvMmaJ6garK8F2xqbYkEVEZ",
  "key34": "PDRwfK2psRSQupMApQx32FGimFosN6Dtz2RCKNrwxUKEcL86bPd1WBw54HVEi3T3Nr68dsnqWUXGxebqkRomPck",
  "key35": "4yijokzyzWCZLipf1cRaWFgXdfSiS2UZ99isxxbEQpSMX8j2WDeRSXKmFJTuWvkyLCpfQqaBw3PiXht7EVfEKxSQ"
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
