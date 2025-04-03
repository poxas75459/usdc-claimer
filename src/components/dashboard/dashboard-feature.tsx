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
    "2dSvnUD7unquLEPDd98GMEDR3PexGoFQskmvR6tyXxBbrHDuhKrmxDcdyQTMKHwMCETiN4pru8xjdfG3D954c4rM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1swNDmn2S8yYdpNMBXRCEQVCYKDKX1rSaw5RQRzSvVE5q4kfsDVgRD6qbaD2Vv1WBiHZcPKSKUV9eB9WtuwKJ8M",
  "key1": "DotYYaF8L7xo1kK2mZWjeLwsnjoJCT56E7VF3CRy71TrMQBTTrdc71CAUMTrpM7k5MXyDUSwvfF4PPgRDT2zmaP",
  "key2": "64FkzJSwCXhGafPgJTMeVdJYH5G4LyMN7MWMtuPckVoaz3M1BLTeZa3LZ8CvHY2YtRR7HEWqAZDr3GyXop6vEL89",
  "key3": "4r72DoxFPBw4CwXwJ8AY7VJTHfYPP4UPWnANU21JRMaB77ZEWWEM6FX1iJkjpx7GdFx5vmJYeobaQvRxbbZvoRQN",
  "key4": "kNYNvT4rYXjGFsaBKUJeYcqPMCKrQmJAPYNn1ftWo55Tm8AKUAzjE83jZtvyE8MFZoEieRswE7FvCGUrZBnLJGm",
  "key5": "5KrLptFvZzeCtVghVBBKnENDMVPP4auhPKjrJvagJk5reeXEfq2FJEsR1aGXUyroMQbHHuTogbQMoy2tsMu7ZoRj",
  "key6": "3EV1XUZ7XpDwh7uZN3Gz2pBnzhY74ezXyAesaWWtGC1Fd9qdvAQ7QXEZW6QSBgMvSVXPBXfEr6rPHsxbQwXX8gVt",
  "key7": "5RKayjW9ApxT4m1N3VwXcJZWKq1Yrjki4FSLm8M2ridayBoBeURgMXuxGY96XT6AXR9qtPLpszvmkQLZKCGaFbqG",
  "key8": "A3YQA8PSvmyw1pBy9tGYFkkBQ6FdKosvGq4gzfaeG439GrJdPkRYEk95QzvwBoVJjDDjb1LbmpktiFFGAKig6rZ",
  "key9": "39m3GAcdKzAaEZus52ZkrTeR8T6sUkayLV8sJiV9Dhycnj35CpJvViSENKGkQ6NfGvQZ1bwVrzNos53zKTURyPbo",
  "key10": "2itmxKxRQuwh66tZGiSRBzxyyi3jyktuKnzF6qoA2qYX4bW4k5qNCHEKVyw5NQG27gyfR6JNEWrY3nZVPaztfeJr",
  "key11": "4ZQq8NrSi2QtPXSjPgHSTyNTbcoDcPG97sa22x6tw18A5fioubnB1StEwmdUb1Bin2tkyajLABHXqB9k458UkAPZ",
  "key12": "3j2TZgp3q5qDW3Me9zzsB212uM6FwvjcwxzsAR62PgQjnSr3Qvjw4e3orF1x7mCaHBiCbcsWDgdPBzhwDTR1bBxQ",
  "key13": "4ukW7kuKVJKdgL9X4AHaQzhuV1Hd3Cvs3KiLBLWHN38hJbzwbF1CEby2FZ1q57K6K43dLdwky4jJGdQ2gXeeS8Nt",
  "key14": "vc7bAk2MhHGZ1guLR2qdaigkTA8SR3P1ykgeqmkYzodKhxkvqUcZn2HvwT3so1MF4b6eQPsnKruXTibLWmxTvoW",
  "key15": "37hxVZ7jX7mNtgLLgFVH6y5ymiRFhWPRateLykviNeG55qEpBxB8ngUbCtnYuTZrtMgfd6sSsTZwuTrFKLepfrDF",
  "key16": "3CpCE1NDKjss2eSCv86QTP3cV6nMbmbC5oe6SQ62TrePjAtbvBhjuer3WH8peErr689dy3rmQg6us4SXR4ZvP5kw",
  "key17": "66ofTX6oN4brphsihWaqZT4aUmY7yyRxMqBxHwaZjnU6C1mijbUaxfu6meX8yAgHYoG9YHfj8xws3gfABkBk7Le3",
  "key18": "pAMaqSDESL1FML37tnsuJVjn5ZcN1DoAJrbNH9gT6p3nWSGr6asBLpU7TKgEf4Qnsf5597gFj4GALcqcGhWbDxx",
  "key19": "22ezwosVnmjP3hAb2jzy4XxQexUbHKQA423NXfDUnRXqQ5m1YPyZgSre72DX9ckv8vhSTRpNFxYvHs76LFCakcUq",
  "key20": "54GHVG8Dmfh5iUZH6bMvb2LzbfFVPeVzAuDxo8P1Vd8voS3agTEYW1ehu4hH1r7fiu879dHs9mGT99ffpHRc9Njg",
  "key21": "3GzZ56ufN3g6RFAi9HsEhuyushRHGJfoUuiomrN1D5joDzuL6Hsxh47QbKcofM8XCU8gGMM1eaKaMmVYRMZCtdyU",
  "key22": "4sy9yRJDoJEPZiL3Egm3wUumiwxtNVAiC9vxH4HfUbCUP5kvrujRAMinbW1Zr9suqGjWhPK3ZWRe4pEM1HVKmNAf",
  "key23": "aY94LE7sSz7qtbsQGxjBwUbYjTBvgyts84gMsBjW457wyEFYb7ee4wBCzj2cUvRFVkn7pBGE1TSEny6vAreBQSK",
  "key24": "mFcHGWUuhvxDsnEM6ex25ub3Jui2KKrSFnBNpQHWEebp61BXeCBQj3dAK4xjapYEaHQ7wUkGMjoaXvZiEpAjfFz",
  "key25": "XWwb1xZUMykhVk2A2cRXVMASvhbfjJ2TFwE8YJMFWLEWBPFY8gcxreoQ6EnQQdzNRcgnJNt1dmeN1HD1ArKnUu8",
  "key26": "5DyENUa8xxEn79CTwoyjFJHV8F1q3eJvQfni1xDz47wwvKiQGpryRJXteDtFAv9boNzmDmzFonXDEQf387mN4zh1",
  "key27": "GAamSYXCBzQ7bZeLEAhHVzCAxRikZzsEP49KgSZjbk25ABpKLdYHmnVoYeVPbimE3kkT2gYVBmNM34qdj4fV5ax",
  "key28": "vGh8wwegTzuW8vHacJhDky4UoKopTkLoytBBn9v9ftj7zAzM3LQTmTYthDBswaNAy5Qf9jBWSgmDhMkoiSH8HWX",
  "key29": "Q8Bc7PsGQPjpW73ZLTfVP9wqnG32Jf84bj8Lgfi94JAvcrvFWHnTKEML7EU657HmDj5TmyPm8GJ7behykVYRF4B",
  "key30": "4zfFXBYvhri345AGD3PvYMDy5MKtGJWSp2fBgEB7jwy6oCCnWDkVTMyPzi9cYg4nFinAoyQGcoi41w4utFbf84Za",
  "key31": "5RHHx7XFgqwb7rg3iLoFmufZyREoReprD5NvtEexWcMDYq6VV37dn4xDa2ndw54qVdfoUUvuD3GcWvyVPoY3M5pZ",
  "key32": "3shREStt78VgyhYctkhg5nTBRcRZv4h8dVDtz2TWFT8kHXZjYRMVSQ9HpDDv55brpmjR67317Y4rHWqC5eRrbycM",
  "key33": "4nJCaTt7YzLLd2hHZWzjmqLQLG6je74W7cHezQsjiqfSPjPABagaBeUvfY7gxsx8oAqGfMZhCq5JUr2RFkdN1JEf",
  "key34": "21J5yVzMS5KUDbv57NgoZ1YSULSKQrmBb5neGDvUKVkCxibWRAV7HcL5awjRa8tshAWbvSg1vDT2L7G3Nj3beEDq",
  "key35": "2YkcxNSboTHDj4qZN8uKH17Wi2zFURMKmo6xNxDEsvihcsVL3MKtF9SfyxGfKjFkjMjvHp5vzCwZGr3Pnin3XQfc",
  "key36": "xGyiP8QAUwm8gbgdJ2XKESGxby91LnyhidGjm28MQQV3nfbKP6EdEEaDgoLSHdf2eQRdPCPevNQeHK9s1Q7g2zi",
  "key37": "3sWf6YSgvWU3kcTBX8LGYtxwooqPdGR7XuPDbYLNmfCDpBVka6MLJEtVzKZpXQxvS6JYCGmVULjU1sedqEnXpFnu",
  "key38": "31HvhvFY6wcb1xee4EQ2qfvxpfRPxQhj6cQuAr7ThLKc4fDiakMnBdWmUwF6z3sugywx3WaFTVSWsme5Qu7byVbm",
  "key39": "gzNCAeMbBaoL7fZoSEY9mEA6EeMSgtZ97PBLVeeNHn7aXpDE9Nkpxtbqb9GCphyfLDcAM3N9VuJTXKpTcsu2k3c"
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
