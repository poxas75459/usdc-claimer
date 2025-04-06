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
    "3ZSwGTUdyZobNM4HQCEvrMmHgS2QRjwUa55pKJCZmydwz9qN63khzjTHRFYNiugkBZwWAQWU8aPikDeAJpmj9BXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WZkSd2qwexjHZKq8bXJ7U3hPit47N4oSrJyeJGv3beGFpUBxZM48DerB7K5QYnJKuWKk8WBVyo9MpFFGt7FXAX8",
  "key1": "3U2sthRV3Ynj5P68Bk4b958BKV3cZXaixn2AcPB81hSJfWHruzKc2rC2hSjod8WbhmXwccLXvESYYX7YLirRfJi8",
  "key2": "3wcNzAc6HEoqhH623wAxzi7VJHHAJTv6VmtdxD3NDTL3i4EEDKD1sBK6xGKSCXdkvDkmzdcScuPFU97ztMNPLvA6",
  "key3": "43KYY3L3xA8ojCnn5DHYr2kdQXuAdvUrjccY5Hqve8TH3tHUc6n5KY9yMqqns6wWZWFFbLAMAAfHxcjVAmYkqbL6",
  "key4": "3aL94dDFCVH8Sd8pgdpLxMCdu9UWnFEwS8VoedFx2HHPKoxk5GT145nxnZHKu7sdYeZZj36wLEFTs869ApZJks8n",
  "key5": "3MN5KQ4AmPvtQg47hrH6oxpN6Lsdj7Zjh39iprAq1r8S4QSNBhENWYNuFbEedUn5fmJsNYw6vmy4RMmFtUCfWNSR",
  "key6": "2KsZEkXLn1b54Fv1Fc975Xag4fFGxH3Zd9fohU9t2r4YA9J9amec4HKEjQH7eNSuYWqFpP8cD6yqWB8tNyyc2XJw",
  "key7": "4B3mR6KgTpwrzDSU1PE7kocXCk6mJdYTyu6d3GdGhWth6VyLGLsGpXxEY86m8x7vEBrWmRyUYw4DuXcQgTf1uNL3",
  "key8": "3dph65ryV4No1V7iQrUR4jF6t4wQep3NLFoeMr6vjFsdvFeGDeDF677fkshLUDA3BUFssWdXCmykj9NvwPbt9BJc",
  "key9": "66aRbokgwhxpg96tjc3st1WJ3nLPewrmTe8ppKHuk56sFxLnDufTzhptsWeaWCyQZAXrK1ADJUHNvqYffZeKo4eJ",
  "key10": "Tq59fH7hD72eie39X3oPjK1mwMWU7DC2oKueEove1zmnGMw8RCADPZtaCrieQBTfcJBH5jMR7x9GmMUKhoujBgS",
  "key11": "5EwCTRiFiivh6Zk3843KWJvZX8ZqTtyvzX6SB5YCwgVXzrFZyTDosjvG8JbKF4pPf9GeuXdCZG9U4sG52xBcW2dF",
  "key12": "4BiHcuG4AogvqZzXmpn9r6nsisTb1SeZDMgF8wWHVj6BL3Xww2EsgTZvjXbsQRtApEKpsr7WyPvzfHKWhEGhJn1U",
  "key13": "38ZUFwRPiLh5Ru5FennDcJRZ5vAsDnvfcU138U1E8hYZXH7UXP2ZkG4gvXhUNC5LqvqkT7Nn595eLMa9SPJrQ1Ts",
  "key14": "2LqPEMeLu4uGkfvLanow12a8Hio8Hw6R22ZaUDhHKdy9s6J8cc2oKJBsWX7BwBzrqVEBJQXtJNydhVm8g3gz7HV5",
  "key15": "49fqGoZwbpqCfwDTjAbZo7GZ8jnXZBtezkrSfc3MDHFX2x6UPXtwx4ha1WnnAmZMrKuNLjPvKhZxgzT1ojchdLtv",
  "key16": "21eE8xVn9rPuFCVTehg5bDvqSVFYvtQNyC8pWQwghWQiFFTAFBGxTw5LTFmww3kVE6Vbsozkgqr4waRHEErkGwbn",
  "key17": "2rUe7Wh1ZCA9aXN5Mbaj5hZmkKWDvXvP6shLvcpcQERqARSRNgkZGd9Rb9NamRHM5W9s9YeY94xdox2N6AD4m2m3",
  "key18": "4SvZzhtTYoLKnnKgpTwG2CiKRn5AixQh6S5iaV9b6kxDMnYEZqbMPdw6rKxFy3QrsReABoE3hhwvKPTxYE1B5idR",
  "key19": "62ZHyevrsdNMD4TgZcUSeaZ1kbv5EDtUkXfxRhJJNZxrjLhC3hHEFAiTxSHXkQ8HxQTMei2Qcqovd7dzvdRMJGv9",
  "key20": "fLkYXCjzXFz8YNDVCd4vrxK8KQ7zcbr1FHoLvXoso4hdnYYEzjACxDFgGyHAVyJh23FwGdMQzH42rHRbreC4rrM",
  "key21": "3KPPL1TsBqTstC7WrZ1zZoHdWKCQXwXBFhZHdC5225SqA5bHz1EZPpWEqWjxqNVUSUZCPBK8neSp7WPSVLPb2fYY",
  "key22": "3tsrnj1uTEoAo9EpkYdwdXxe8HrXqqKFuv8EVQ8uBhxJZ3KruoEh8U7eZdfQN4aW9n5xcpE3cv4HJcwNWPz5gwin",
  "key23": "4ftoeJgvo5sEe3zS7VBzkou2rr3xpGueJRDprJhUS9UTT4FSPxmiVb7Ark2KubtjDPAHM6BdN5i3dyVyRmVbKGEr",
  "key24": "Kx9sr2CBiDTYznPtH9TqyhcpdGc4yZWgHEmsgX5GziVnrXEzFBoN4j7niCS3DK4yyFacDWui8kiJvwo7Lo7t3ta",
  "key25": "2R1gomWXrbtbbgCGanNSfwGfNpJjDS8TqwqhngQeNJZxX21jPWumLoXsZ6gWQwxMGZ5XPaL91f7kFDPh6CQ5JRAf",
  "key26": "CvSFDett1ipTQVVasmbrqrNeNC7g4WvpKDUhsbfHU3Rni2RiRQhC5G5wPofSNfNkmGzS74vFG3SQcMCE7v7Ga6t",
  "key27": "QhPSTZMSZgW895YqZDuordvfZpsEiASaCPDLwJqP2d2jWwPaE9fQ3VmZ2qQqo5wEpYYcs9WaHXg4doTk3nqEFJW",
  "key28": "3ei1EMQ2gmVzxUxkdf94xqYR6UV6vHiY3T3aTpL8JmeBSJkcAGrDnw4mgxarn8VHvNhU4wjnRNutmTNdVaRWbSrB",
  "key29": "W41EshwMPHiooYfuEFh6i3Z16HWiw4PjG7FquKx48dom1Y5yYXxHjwKPs5PJgKqL49MWyPWmgsr1ShFyACRKgnf",
  "key30": "3Ne4Ggh7UPCxf5KGkcRz4YWbBi9qRnB5mcYZqa7S8SWfWmAQYppZi6m1rHHwNF871CesB2fbbkF9pr2Nr5hrSHn3",
  "key31": "3oQNhDfxgXKkqws6qaC1yU3r8BVADcJbvPLCYxhrdtTPHeS6NPaQqaTHdbvcDGei5Fqc7cwzseDZ2qhE8uvCNuTo",
  "key32": "37w31DXobmE6BooDMM8JT6sLjYz158QDsQZMBUsG1XUK44bDbtd4ysJEMPNzsJiv7Xz2RUvwhcENqopyg1SNsxZB",
  "key33": "5srw8T84Ks1c3FFLprPMhrswGx1SwbaMaEwBu51YtYY2Zvo7Ci5p729PDiDNB37yCd5aqAYg4hzZn7gxADK3FreZ",
  "key34": "5eCqreW87DNhF6BDCqcHsFGRLvPeqAsb59hEkHsqrHjkmZZRjnJoi7tKUhwRKG26Fn4ho9FLgJgU8tbntjqd98fo"
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
