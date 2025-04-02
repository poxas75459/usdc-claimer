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
    "iYVXbKfcoHtZz9BarengpFVQApdENntKW8fZNFxYr9TUmK6nEeB8AwidvE64H4YtUyqu57e5uJAH7PiFwQuYkRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XVejKgWpKa1AihVNMFu9KTWYQLvYSZbr9n4q96fjmGdpg6oBLA97Gpr9Kc7oGpKKfcxia92Ld1MFyaKTK1rL9S9",
  "key1": "2LFbc3LKqoygacmrcmT33Kwo7sYvAPXV9Fyxq4rsFWEfCJXjLcHqyh7hBnpYk6tpWGaaoVw8tdsXPyf5mCZoCbs",
  "key2": "3WqNqZKMr2xm7EURVuYjBD7ScBqupLAFs7n6pm1AMHNGJhNpSQBQcy3N8JjPUm3A3us91dkSd6NXWmXvA6tMUg9f",
  "key3": "4uUc4rvgb3EHyhAM7q15JZ1L2TK72P52UM74v2Ps27uCCkUbufd8hLMnZ1cJyKC6zVPq2ejAi5fkESRBD6AEhFeS",
  "key4": "5b1YsfqJHNmyEo5Q2goSvbCdkP3y8XYuRgwXCvBmtyaxfQr7AqKFeUxRy5f5xUdc9EtywYyP6LeNVr2DuQrUoHhz",
  "key5": "TbN4C7YpknkvSqM8iTRy9MUxTkxc2RofbRFEoj64opWtcGcnbgHoZ8yJ8iZHkBh7GbTenbER123BcGCaBXe1X5H",
  "key6": "r6mySMF8XtvFaWdNnhXQEEmU7ponpdBieey4sn2cHgZDZQ7M9k6quhYgLqJT3EHwZekgvb29NvXENDtVWo5NcZA",
  "key7": "3hDi2dhwoEVJ2iy2eBXXum98gBdxNMAjxtewCFi9f9EYWGBS9Eqg21FBbNCJm26kfTucw7WdxAVN9PcxgQaVTGya",
  "key8": "327uAMn8c9LjcoWBWAo4swKpY9iF8bHhbksCrA3nfCmAuGyN2i583P9xwdxS81KgDAnXzsdN1Tr6XRfXu99rtmLh",
  "key9": "4HkdzvSBdAg7xF8MmUdWutLvhq6WMj6eo8ZYC1sMLavwnL7rhScku4CNRnBLjNHVVW7nnnLysBZZSvZ3Mr1e3rDo",
  "key10": "sao1kUjazJonWbEMzu1VeftHeqy6gpw22c7QPBfKCHRaXxm7QeqzfPqvzZUj6U2Hgj5P3PjVEnoMXbtQMZ9fCcJ",
  "key11": "4x9ytXmWkgj3mMZhBSSHoZp4dpmbW1L8g3BA57eWZgarHaFEdz4GsiBRd3aQte4G28YZp8NRLrQuB4a9YbCyuVFd",
  "key12": "47sXWow5AsVFdj8NJuM1wZQTbNoifSqctTgTWdk9EkWby4qcPQgJzzicKBNUJMSSCKNTRwnuV7eG5YU8i5toE5hG",
  "key13": "4b4gjLgewTMuhBw3Kce8ame6KWyep2AZhya48G1GV4iWyiMijPJ53UtT3kUoiCEmjMmdncJeinLGdZCRP6rggJZp",
  "key14": "47Dn7PjkdzwU7EgPzcKRAgNaEtzZxD15pGoKwgubQadBujA7ejFa3yrdbVTWhaVgNNDCxFv6GsmZ22k95Gi7GWmi",
  "key15": "3qa88uxCtpAGWRKNAD63x9oA2SiQ6HqckR46hY2cDSQ1WZ7zG4XmEtWs4iPFZxRm3uNBxk1pBMHbtDxwq1R75iRj",
  "key16": "5U2ym3zeLEkap3YL6au6YMYCJw91nfXDebJVirXTDbPZLUHuHyYCKx6s3M4PQHxupEPLy42jwYbPV8nkcke6TfYN",
  "key17": "4pBAyvJgK5GHzjsDUANqR7ZVwG9cBin7x3PnPvNhQwW1GSpJPMqanLaNBMw7Sz6XSgQ5QZSX4SoYMR2mKmz34jR3",
  "key18": "2i23o1ns1dKEiwUj82AYYyhmVsHAY832J1euZY1e1RL4AaHwAr2y1HRpsw4DhbYsUrww4v13NyjmyyQZ6HWQch9U",
  "key19": "3xZaAGc4AHFfbekjZP1NaMyFURxe75DAMUdCJbQMTztPDkWwY4ivi3wgZySTY2E9uMS3hqRk1c44cFff7wCFXGxc",
  "key20": "4irrwUjz8xHUJ1o4izLcaPjpGV4scQQqZVcEyuxRhEfZGeu3ozihbr8gLJzeJx3SycSy75oGyxDJk3wDdeH9vjuq",
  "key21": "61gNJ1gDQiRVtoWYs98kxxKW4Sh2LMPwN3sg3QHhxM5Pap41FPWhLbxKMUyYqhGf6HRsS8qjnzBbgn5JzLRLfkA",
  "key22": "DziesXLeVJPWf6jAzFF9Wd2f7Baw4p3GiL9JbeErK9tr4Ev9nBGV1n2Dk8EuXWt4u799eAhXTjSomT5eg4SawNg",
  "key23": "3EMKKdbTFHD15xyuVZqXXCaxAS3cQXnuPdFYEdzeeCVY4hV9xyM37ZGfoazYF3TCck1vjna4Zefg9KkMzrTMxSi9",
  "key24": "5Ytmqq2WTFXBULqoSQ9VrGbJQpBgbE96iNK5nLuFrSXZeXFy9SVc8NtHNSGxCrEtMa23uG2gPgw7ALzNTTeKwYn5",
  "key25": "4KQYqjwqjpxBVmdrd8EK1sLqTeoM4pWFQ2Bx5GeGwzjLcHmENtSkk5FRex5QLHTkTNyzPvHkJhJJSvZXyeayDyw9",
  "key26": "5j6w86EqwZEBqZGWgRNeJ8cJKzkmXFrBx7UQM2Tto62eBYvqKMvpit9b3Jw6FEiZiLLiuVqTA1UZfSySqFeMjWuc",
  "key27": "UzjZme7XnkHPiJ33pjJRXZW2Uc3aRrxA75qvUzaC6c5s27QT4LhttJXwEArtqKKkPp94QpA7VKuJq6ctVEWrzhj",
  "key28": "2xESfFcAkDjh292TbaYgyi395ktSCSuMeT7pg8KNZHQK5Mjdm8eH8vGoxeEXET5xd6F6YUxFJNg16xBmFYyC21R",
  "key29": "2Eqp56ngBrwPXaKsmCEtt6CkmcDsxjYqftuipnvpsoSY3txCLSh2VgRs1Ho7niigy9rGLk346AUFS2hf55v4DsMC",
  "key30": "5bTUi4pWWZPsTBnZZDJ7FA3ZtEPuWaWSPeZRVdWSGWoYNsnYjzttQQZnSg7BHJ2jMGCGZRZSKcAoRBj3BrVRNnbr",
  "key31": "5BwSBt3ttNaxkmKsRbZe6Jkr537U52uzVHixce8bzmJHE9jQuHpGN67ijUymBycuMPry8WVGTHn2SkC2gDet4PR4",
  "key32": "2ZiAKYFHiuPLaYsoC1a2wYKMZrhJMmTwmZ4BETg44SstrVyLyEwZGGiG3bnGPAVHpnMKUuEg4tCngQ3yHmYvQKjC",
  "key33": "3qL6m4A92CEoF4M3C7ANryBYTSVPuCk4K6oumMrqagi3g4gwYJmBT5uHTUb1rARLhLRrMsn8Gz4hYc94VBzBUHx3",
  "key34": "3SN1VbWcm98Cv4sc27oLjmNFW9V72fnTs441cy8H1Spwr7cyV1ByJJSNBMWHec4hTR3z4kkcNtNk7weWwbn6HP9j",
  "key35": "49u6TdSGnE7TpUNaYZwGT2LhsSwa7EHV5FHMTWRVeV1yzyLYB11GDepAwrxNzgTpxuZq81tmMWsUY8mCCzeeaJGT"
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
