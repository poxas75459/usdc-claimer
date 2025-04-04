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
    "2YYHsdLzsLGKQt5Q5PDRVtVkt6dBe8efsVa9jkEzcB76KjKeUZaEKVasuZfyBtwU7xm4wemvBgvwpxbU81LHFESG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MRzSWU1oRKKBRKT7hBca9UqBtrsbLBC9Yv3xApf3AvPaKdNA4WaxmhZswdMJTJuD7LcMnKoxh2hGiJGcA4RyK4L",
  "key1": "5WggguzHy3tg6hWBvzbaMLVzGhtKh2f6gu84yHVZccsLy6gSggu8rYbgbLo2fWJLZ5XpP1mJLFutZMWp4sq5sAcR",
  "key2": "3HBMcxXbnzGjE2A1eV3uqdmZqLcL46VFmtjTGBQocM2w6t7xxbTvmnwtu99z4SyurwaDb4LAZwbp9oedUAukiqKN",
  "key3": "62RzvH54LTTwbn66sEmsaQ9XA19KkyKT3gKCL5GRyKnEKjZ5sydLFfBPwtFdv8ZmYEWQrRRwg7zZEMN3mcP1qcAU",
  "key4": "3YoTpWK5zjEPSJWSKTXHeJnMAXutCVam2LKNY9E1ZXypNwsR26Nc7vnXQBsvCzNxeJQpnuzaYLiz1RzKbHZFbxfi",
  "key5": "5XBBFJMeJdwFywpJjDwxpv8A7p2yHUetnZuYxbywYdyHoGzDiDu41UAvUgU66bmsMuTbDaV2o9d1YwQyWk9FFDJP",
  "key6": "5oMuhXLuRUtehS7Sraz46SDxdPyZD69jX6kNjBNCXN7YcyKTbLsQ5aHunq6QLUZqjoUM4LH2w5EMxeha7NchGhTE",
  "key7": "doCRngRaSW9p2s3SAMiFzPUWrHMvc3attPARjBaM7pwSSQggKUzb7qahCFB7fNGaKEe69zCKsmsdiptwXLyzF2t",
  "key8": "4YCdCYJVfUidoVxXCi3FGNog26zU6x8Aetg9QuKxWsv1Lpe7UVG1ysepQED2RQwGnXL32UB7zXLwsbuzECEN8Cdi",
  "key9": "4VP2yyrvhDd5WfjD1rqHPcj1yu4PTW6AgdCYo7GHWcuAcPgLbFhkznrAxhoQEr6ApYp7Lb1JmWXcQJwYMW67hUJN",
  "key10": "5y2TFFsRUEkKZc2gbtfdYfTKUy5F8YFawHXHHsu88imk9L4eHzX9E8o97s1vAhvGfjNdjXAwDcQQsXiD63JasyHX",
  "key11": "kekJyjexbLQQcAk59i1xQxemEhYvD7gTT5vVeiBhJ4gyjvfyBy6dU16kF9pWxaVUwfnQ51EvVUaUL1N2Utnd8Ki",
  "key12": "4STgewyYsavCgBLHy1rdD6NoLys8WgMMbaSetwf16V4wX5vdDgZqp6855KHqrw2FUXqD9hMYxBpqeTtgtVCRzVWp",
  "key13": "3wSrPYkX7dH9V19UWxHQ8dN7eZgXJTRv1WgTR4CaSKZYNBDRy31bJetu7QqDTob6TJVwvBKRzQK2YCNU2JQV4Yn1",
  "key14": "4iEoAo3yuGxk2HAioSw2kj2rXzvF3XE5ZqvEMtgAYbrhCFfrZGfRddaEQv9NNUdKGGvRf3qCMsR1LVLqY7t5AMz1",
  "key15": "3Mwt9CKs1tLYvgqH5UzUhwk3G3kXSha4MJ29g4B5g6ymYezw7nyvq642pXa2FMWxrcZuwb6WryzBiKPaP1EsTTYK",
  "key16": "4R1jHc6dpDBiFz2XyNTcXoB5hqXTpgq5ig2niQqYPPV8i34iLdyHk9ssjpfUxAcBKJv4uLxs38KPCjXw9DgBt2T5",
  "key17": "5GbKT3nZbQgQFihx7z1D675X2fhQmvhpucXBqSYZKh4kGpXe9D5qJrhGy1uaHKY9QGMK3a8Yj7Db2HmZg58hVenU",
  "key18": "XJ7wef1KNGsUEEU7b1Zn7RJX45239XuQuVg4QABDk6hEoWWebg4eVeGjZFvMqRQaRc4DLF7zH1ZCuu3hDNmYgva",
  "key19": "xqL2iLY3wAWcHwTTkW5CTyHYX6ycuZPV8Y4ZQKbZ6EKRW2abd73xDa6ouqPUviL7mvBeSGGQrW7pfMLrobC4nbh",
  "key20": "5BXphFDSW28AjfVrfbNwvsKexsXeMA4V52KkfJmehpLxme2Bpd5tV4KaEJjv1D8F4avHdBpmpbjohtQAMDEzQtGF",
  "key21": "3qXN5ja1Ewss16Xh2AurXWwG4N1YENNwZeYVwUNU7Y4DfiYof5yGVzDn7XzDQLEzZCWgfabnmAtRgDD49oz8XCRo",
  "key22": "3SQkwAv7bt1RCn2HPhMaSZCCfdimptBkcWknZQEP8GW3iecbi1XtMCQdnKrXYZi9sdMGeuzPKetbEVenDTSND6iq",
  "key23": "62ySEu1LSW1KsutuRZihwfXhJXTvLF39LK5WUVgdV8VubunaDSwxCEunacijUAFDYCSeQWciakqgebNUtQKJN5pB",
  "key24": "muqX62uR1UZr6VTeyj6nVSTyG6sUanD8DjkLBBB3q8UnQW7QxwHtX9ETi2cerzVoKPAptEnCQh3K98QCvdNTpCG"
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
