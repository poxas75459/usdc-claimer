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
    "3QubpmzcuQ8LgyrSspdfmXYfAmaMcg6Rz1NXEhD5cr2LBZ8fH82vTvLJkN63xq8QVLd8AqgvpzbimAHGGExD1sHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CNczzcuavXh4R9uRiBK8RHJ9a8JBg9GMa9d31g7AJycJDWNuWXwhqNTzLczUDWhY2ZNpSvR148RDqdhR6JoN8oB",
  "key1": "3yGMaQzvv4kRb4QPjqDqT1XKswMz6Hkg3CTGWEQksumzVTbKQgXDj5GYRTMEtGoxh2DwyRGp8ST82vkbMRycdz6b",
  "key2": "4sPZMRt7iBtsp1UwviGmUqjy75tRpjswRCjZ5EASQHGxSEJK1u1X4CBvtN6V5wbNnzCb13heDRhZ6jLc8zaB9Lvy",
  "key3": "561nCqf4cziUNDPw7HDjEprunyG8SstPg9vaabGradcqXJDrzxLsC4YiNmkkD5z79ZtaZysW7nfJwgwvFHYEGCuY",
  "key4": "WqCNjV56CuARUU6feAGK1hEvDGrWRxhGmk246JfnWJuGZdAsJwNWvuP5wX1fB1BLoTEeqmJsMPPJB6fvuSxBE4K",
  "key5": "2TfH72DVQB3kduQKKXfBAZssWoqJHUjYDUkfVg8rRA5JwEPizBeLVbyMqFgyyEvdzArBZxRcuyrid8fYms5VsbHW",
  "key6": "2EnRSo41DcQeuNqUuwBbT3CJHZr3WZZh9fAueyZTDLAwLK8kFM6JskQqPb1tDuZgcMsFkDcQLuxTQvQfB7CVc6tz",
  "key7": "33pMmbYGibUK37rYPMoXut9VqBW5CeCwY7joydn9UeLwDFB5tdvwGJz9qk2Jh29VonKvijeMVgCp8r3muxz4KAj1",
  "key8": "5JQB1wvNDf4VAp71FDWmFtLxawrWHQHpPu9UkJJ6guZPpN8C8DzyzCVuXKjzuzR1JbzDqNrBoanjqrdUbfbMbYy8",
  "key9": "5X8R9W4ZqWMCDVCg75Jswu1fKsDsfiDTFcMQo1HPRbATvqwfZuurJu7boDsyFa8btNTMQzdA5PCeCjtL1hHzDoSu",
  "key10": "NGDhFujMY7SR4MwkiViuZbnEREDGxrryhbjYErwyk8tQ9hvtdpaa7Le8DkJEWQT44x5NcZrah4ENHjTty2YdgQn",
  "key11": "3xVmChkHK8qCcyZzyvKwhJb2YHPrYRUhGr3z79ccn6iqC45Lx79QRZZnb5TugHzCep1g1D4aoqjzikcekd3e89yb",
  "key12": "3RPQ4vMgH4pPcytoUAf8E9mDw5ShHHwJzALfg69yufvHEJrUEaeZHRRpUitjLCmu9hvNGsa7ptRqyf47VkZ9ZtEC",
  "key13": "58ciZX5JEJ73RZuNGKtkdkbsEaMksiUaxLbAuz6GByYwnsGMYDo5Cp737HZtkBkC4gZHFnnnmHtxEYrRDVFbpjX5",
  "key14": "4Zdny6CEC5Qc2FtYaXQKhCT15tL9LKiTW7ZQ9HjxLCmhfBr3rA3FFkaSVc4Qif5xtSeq6N9znDeeG1Pp1VZQv8So",
  "key15": "2gH1a14M9nE8kqCpBh5y1njonKy1NYWEzM4ykHBFaT1ZDp4JG8EZUnvxTrarrsnETobw74ypFCnVFCht1f8ToX2T",
  "key16": "4ZMrqZW9bCQ4aEGQvMzkuZj2zdCXZvwr5tUtg4DxNbwc9buxHMk15aLmUZGxuCNnnrofartUB4JEF5goTrSBnX2r",
  "key17": "TSmjkyJG8yshgsSrrfuxP2KyVRoUmGTPDfZcAn8hFUxgsMjP53E1j4kcQy8tYFogeqyWcpnq6sxdscdv3SwVnaM",
  "key18": "4nDEsozNG77EvMXCVveJsrf3YBPyLkuTPV52jzrJjgHhJpwdd6WwbgEGiK3ZqTsy5ZgxZDU7Ar2pauAwxFwrJ6Kt",
  "key19": "2pkYMVawU9HdsJUiJZEUojkBsUYsQkdn7RU9LyAzHYAxJo7PAQQBhG4K1MkJXrhZbGvQLTdqJCxnshsehvLfkcn7",
  "key20": "64RSUnpWapQd1tutEt3U55oG375PXB7EW1pMmSEid8swX1tcMgBhbdLH1v8z7vceo3u8xXdzJ8PUYqQ7Ki2tL5KS",
  "key21": "ot1MXtDfgXXtuGzSfpubcz3yte6FjPjrvDYiKsmEfgXTc4goqQYjEjCaz3c2qbfoi9eL1XarD1vUwLjcyYZGFvQ",
  "key22": "3QgsCrzqeawQwsuUUkhpVVv7qX7ks9EsUZ7e9U8yKmHDe9CDquzKGfn72w5sKPWnPchF5SaV41i5pLfPpn1xSB5S",
  "key23": "4Pq6DD8WC6Q3LZx1WL3FgiKXW5ZPckGqy8RMBrtF88J8FuiDhUqA5fjdaNhsNRJdANjyRiWfV9a7vDToQnvnfGPL",
  "key24": "3AbPWHVa5YYWrtmnxa953S9afBZofsQCZfcLmuvSx59bC1nhmu1CaRV8tSv6cKRUvVknLFES4rE5wmXuxukjSF3V",
  "key25": "2KFjrsTYqsjAHzPm98QSotgp7Rv1vcbBVuVAw6mUe1zHmPSkM3Tj8XLKeLhXLaXjzPoh9nEAuENd4NfCPh2emPQ4",
  "key26": "4xR1kq59ZvqTdX3yVGRrosvNamLQuRDHefwtePvjpe1oCfifz2HQ6QN5PJ48Ug9GqMhowKrJ6AjWNCNpCHcFUrdL",
  "key27": "3ivmQzJ1uVDKeerunsFsdsTWVMpYrCYJYgHEuJAq3RBxHNKTBBCKVvZbjDxtkWAFBusM7J1FfFmhPuAppywUMhSJ"
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
