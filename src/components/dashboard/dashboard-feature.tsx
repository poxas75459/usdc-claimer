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
    "3W755h7CqndN5SrWRqLa9Vv7sDo8bo86NsxsbU3NwgDLyTwAyovyifz4FdqyRfsRLriuQmy441GFpB4AtdHL6fcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hZwMRDsh5GCKfVsspSdvdQguWMFx5GxDCuE9aoeS2SUqeqSHvYVcj3A7D1Nkc5Yok1aLELVF9JvSipFR8gksynd",
  "key1": "4Kezn4RxHoTc6NVpuAJNXCrExxTCipEkwQyjhpnjwNokSvSPbua4tzTbeaiFQk74fZAidoE3o5cq6xH9KALkEKCb",
  "key2": "54LT9kPqbWyuH4kPrjnSukLUh2c1oEauagf59jcU6m4qpBSuTjdVZge2Gpq6CYo1K9A5NWtReDY339k8VYk9JsdG",
  "key3": "55smQfcWLzsU3k8Xb5WbfuAidxEeW1ttDPWEUSjQGPQk2zdCSakf2vpsmDs3qTH8Yb7B4GgpaxsNVbZGruj6Jhbb",
  "key4": "3M976Dj97Wmv2copUq2C5DDZ2i43EKgSWcL6EBASXxHMXNTmRaNQVMzUG8DdJWP8P3uF5vYYmbQeiLWwcPCwhd7y",
  "key5": "4aRQ4QFaCG6a1tYqy6U68vpCrAncYvuwLMyCK1imdStJ4yStuuqMUHMaG732BnHVVMypARQSUMBqwBUWeJfrsNY1",
  "key6": "2KD8UDw916qXQu9EvPybcxSBQUkJSqP876DuNcU15EgpgripfVixs3E6Vi1XbXcoc4ACdXf5hEe19vCwZahrMoY7",
  "key7": "3fEm578ypS2qGizqqgomrJxFJ7iGuLPN7TsgQFpk8oVfi3WDyiXtbMdAqT6mk8oo12cNs2fCFez58DsvRkg93MMk",
  "key8": "LVeHLYtGovJZex9SRrYip8YXpPD14ZXKhHwWSGhkYdxKoMWjBN49yCrc2LjR2DTZzzspr2QSs9WZigPV26MRPXJ",
  "key9": "4pS8cqfiLEFbyqUfK26PBKH7qr2Ah3gLnZqCYviYUkJaYt6MErayfZnvfVCEE7DZFQTb1TKYpXUnj7z5KYuotGeW",
  "key10": "27SMPzEaiqzLULEkwDuZxz2atfAGYTgTtLrYxVn7jLzV2jRCT9NpMBcAnasQYvxKgx4zfy9RYJkdDi2ASKteQGvi",
  "key11": "5Qxo2LCRyf6C1E9hcskHXJr5eyUKDUrPyHV3eNcGfKDg1DUiZNhkQqJCndM9smePH2etJNmUcbTryiywcu9YMMJK",
  "key12": "2HsEBFxT9X35xVPAsUCGMs4nf8ATsYvUixGcH6g7JovUuYyFMUTYGvicRZxVMtdQgCJnTEQMw2jYxQUoXMnn6oZq",
  "key13": "362G5UPkLmsKH5yDt91nTEGcTthGF3kXLPpmJUmCH2FEMRzxzxRayrcEvKLCWW6NuKE4N1JnkRyd2dy2iZGgq8o6",
  "key14": "3tmvgR2KomyeEMtA7BcuqFZCN1naciVxPywhwuBJXZBMdD19GYQ4BjRCwrbXWaDZtzZkNAcBHpup38RgfPC95q82",
  "key15": "3kRanLMLdx3Cxd91v8dHHkxs1VmH26QyD7Ku6kE9Zgaje8TdeNAzgMPTaUgBsgweF4rGnbNLCsPW4W9R4usDLZMq",
  "key16": "2MZSF1QH6Nod2FsL42aGVReycx1Ri6dgmLLwkQx7gwT3Wube3H6AxMJ8m4uZyaCCFzMuSgp8Hqyg7CcjQtYnehWQ",
  "key17": "3svFKWV8o76fc6GbVJZac6WDZLFMNH1sgCWBT7Td1hB43QAMR4A1A9Bp5kmmUaqJN7roUgfZgUbY61gZipyho4qn",
  "key18": "3dzuefrUSauC6rVsPQLus7rktGXx6LRh5cdzbMM2jm96WUvrWrpjuCy5V16Y8uKCz27hP6kXBdyJdsCNRvWrGaDb",
  "key19": "53ZsXCSacGaonVqCDgjvWWSt4tZWh2Se3BkmLv8wNs55xPpuYZJ9FpzKK9YMBALUg3CCSsngAPhLypfG1bwHDexT",
  "key20": "2UcsRCyzP2iUn9u4VL6aMXmihD78Jy6HM5oxf3hPeg1y4RrgNWuTP3YxWxWhc8hhBEiomb2q172Uch45sCsqcAfW",
  "key21": "4WiQTXxYDyYLUvkYkwZxSQsF2gHdm48MujJPw3Do7UuygTGeNM9SfCWaiJUxGM8R3rUf4f36XsQZ3L63DUg2xRuL",
  "key22": "4W5AAtWzJmJFpyRujWaL6kGa5RzfEvJEpkBJ6s5YZ7DYfpGHyoho3eMEezNnwVBNrHfWbNHuTPzd5uQ1k9vsgyc4",
  "key23": "eNFfoWF9sgJoKRDqiTwp9yAkmEDnChSfVPrKRCokXkDbUWmeTVVBGpfaSTM9trteTnXv6XNbqADMHQ2JPaywiDP",
  "key24": "4SCkDpTHmqxboCBZf1WgEqfDXBkbuVSSuLRcr2YK1MjP1T7Wu3QQgV4pKDZ28ubHueJHqjmX9nF4qG999FCRajRF",
  "key25": "3dqfZUgu7TydDtU9JBPK3rbGoivAxqNm6o7tzMR5DGzNktSSRPsgxXJFbRqhtYRy5gPt8HoBAztVDBJ9u1P7Nyvv",
  "key26": "3bFvYeQsGAGQNe8H8MuxHCdnXHWHvVvXUgPJZEMmCd2prMpV4i4YnwrTcp3PtP5gNuC5bKUDUy5mUQRHUsKCSTKo",
  "key27": "3C3xrnMLA3Y6nVRb29vaqPmAzuJRQMbXs6snUd22DHqFXLYZi9dB56JrEQ8fc7fuh2FhoYCgzk2Z92iwQFXz5EAC",
  "key28": "3i4RmDAZwz3JJyoGpraiSHP1vnwQQthCvJYgeezNejnvMq4Xhv2sbb27jppDtq35TYGtqGNU2RKZLbMCC57fpyVc",
  "key29": "3hifQr2u4U2vxhyWJbb3vn8K1Hi984NaJaMTAeQzmT3wEYU63DCGoFkVrgtcAXW89GsKKZ1rcbcZkzmzYaPj5Hgd",
  "key30": "2B9KoyApZAUJWRPoe5wz4u8P6bUmqEm3dFKTa372CmWFvmSLy8LPTSxrXSzmqppw58sftbf1Chcd2TZNKvxyGPYi",
  "key31": "4ptzUUyJrDUBQG4p8YBDFKoa6Nz1XVrMUvm1QBxwP5TTnMzDnVnWuZtdvBqnKgsyNaCXwz3TQAjXBf95HHgm259x",
  "key32": "5TEPDDGKqQFDAkNgEB4tu1oacD2WcfnUJY2ocbLFxPe5q9b9KYReBAFYcjnpF7fDakZaTXznxSzoSjFgAGYV97VW",
  "key33": "2ALiUCDuAK5Z6QXp2ca4cMFP8ypGnFmWFzJ3QKnpr9gHKyeaP8drfNM4EM8MKgxpnUADZ784Fidy9G15VhzGqe6V",
  "key34": "hGnuu9AEcfbiV8Rf23vTHGgDrqhHHaCEETm5tkscMy1NqGeDcyQpkL4ESePW55zKuxZuLTym6wrnjc7ixXq7Rr8",
  "key35": "286uodgF1Tp3nbmJxHhPJY45mKd8FqnSmpo7XFiJVqNSWMeQKxJ8hPjuYPQ7K3gqziBGha2mR1D4LuvjCjKfRsQh",
  "key36": "42e2iPEtfz7ur1uAoXdAN1ZAQUrpnfkwfZszySZnTLT1fZJXsJ9KnVQ5QYQpDyicDqRnrstwNXBgPcExzcSUJ56M",
  "key37": "UKD39bkgUujDTnvGm4kSnaJEh3rUt4bFW7c8AUzXxgVzSrDm6oj9TEufzTMZpR8i37B6EhD5ojzu8bzCs8x8X9F",
  "key38": "2fed5S8XajmdF9JgaRHQPKJSvTD69rsxsTuDwBc1ZJgfoDTzoxov6HPY993vaABYsMfBv9Msge8ejbKuzGSds4rS",
  "key39": "4i8ynRktsNrJmDxcAp3rVJeLAZKksJX3Msvk4FiKg8E7Er9jxuBjSki56sBH6n7EhaZYBazuuZpc2n47isjmuvXZ",
  "key40": "5dfkimUMx6nemW3Xa8MDxnvQah2qbxapjqQ4rBT1ro8ZPYDiN98x53qDV5fc2UfcHqZfU5e15nbNgwKi3LK31jK8",
  "key41": "yeMUGuj2pX7muSq611XGfCWCVK9URAxxEMBkvAKYQMzqoGuALhSUBqJdgxbtBKa7HzfhSsBTNkpqSgbXXcEVZZu",
  "key42": "2yuX5VMHo94sgrWdiYry8cpTy1T1prM4MVvF1DDE42ny2GWxfcnHD3VXkDBi4bHazGMEtq38hXTqQTmodVfu6xJj"
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
