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
    "ycvXYovUk9yZGcDTJE28oJgUPMpvSW8po1h26Bb6zuoK13Pzm2hUZS21TKJi1tYo88gMXoZ3rpDaF8zmjmuQuiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E5ghj1tBLSfWVQpsx2rPWZHoxTyEFcNG5SkQqUHqb2yDdsDjMMRQUkeKnwj3JGAGh6XHorTZApK3U9z8pE9RCJ5",
  "key1": "4bP7vtrNiLKh8oryCsK9Uq6nJTZN9nEcZ7o2QgmSXFoDRJWw7CNP9yowwMhie5AjujbPJL59XDKbY8USpo3i1WCG",
  "key2": "4KpcF22pjFNo6Zuzy7aRcqz7PjmH7QCcCn1153DQ8ykotGRvK7BqDUJemp33FixWDMpghKeGtfpK3CE8nwcsmkAT",
  "key3": "55JmqFAkN9gaY9Rbo3N9nWAidaCieApC4BH6Z8AQJjdcWJMLmt9pvsSsTAuEnVy2EFQyf3h9Sm8i5EQFZ56vaqfS",
  "key4": "sYCifDNSCB6ZyiMBS9jWmutRrj9fCd7SP7BYb5io6zTuHnUusEsN7NVyHDf8dN9rgSoFZhvYZZ7fxq8yFBdePj1",
  "key5": "5gGC46MyyGfCRVz6rZhUQUaJZcJaL4MmnjqEKjvanG5chXTep1n1zvBtcG4AX7zWtotbQ44xKhfiSMzpptvBv4qW",
  "key6": "5pLLQg1QkfchXhiufMh4LkQKEmBDFAm7ReJPMhJmH4UQoYj1drqKdzs3QixDxHLxebbeCknCShKznt4D2BJjo9PP",
  "key7": "4koEc4tdHbp77AfgjfC8HCFfKhMJGJYLoyUKhhFGJgv9aUWVBcGzjtwX4S1WuARxsGFp3ic2yimYBS2ivt2WLCkR",
  "key8": "4VKTVSbXtyFvTrZ3JF3m5pT51cdKKvVtKrrEdDZ24nmkGYKrYnzte5oRB8ozQY939JM6r5A7d5m8aM7ZX2CgDYKA",
  "key9": "5GYiqaxV4wCEgKJ92oJN3VPP9cyKTh4er2VGBHoHTjn57WWjhtUgLfbwmCXb4hKKBouCku55giHfpCp33z63k1ot",
  "key10": "2E6ZwgzYxhbChj3PJQyt6kmcXtZiRLuqrxbuHb3WJpK1Redgvr98gXvA7GSSCxU7PtRF1Y48pirgaC6EUJKoqpfv",
  "key11": "58sbm6kRNNTy2XfT9D931vXazyJiShsDTSUhHs1MTzTShNziWkmxmQPygcWjxhCBWaiFdTB3b7a6P5vWxzsbuf13",
  "key12": "2XbwWVcNnDu9a3bXhxy63phLqNau6ZRfJFLNDJLq99kLhwYh5s3znhbcpX18pNnZ2MGjCTWDJjreZ4MjpBybf43u",
  "key13": "5n9CWHzLDQW9cc4dz1M4jNUA5o7FavRB8aezZK1dcncRKUPNPrSgLY4JbX2SVAaB9LnKneqNPt4r3MXDEEw14MDc",
  "key14": "2r249eqV8525ZGK44pLcfaVFwnWcBeKpnmFiJVRuc5BYN1yeeAq2wEx9qpV5vdPvA77wfWGGVCfcWsRne2Dt1ncj",
  "key15": "27W5T7oQThtEvMi4bZ63fZekDJdxutYz9b2KNciWzf7PehFz3nj5Ekkm2Vmuycav3hvUYMuCXjyUgbKypV4bGMq5",
  "key16": "3quaaDKu7mmunc6oX2DbMwi2HdFfjgJhA1v5Ri5VbvbG5HiqkWhshuuyyA64t4R4sN8MJotY82XGD1Yfputjp1VW",
  "key17": "57tvQxRoT7Lx4963gusYrTz6aF6wKL4V2NfH1YJBkxLU1GkiH4Q8Lg2T7wy1KEdMX5yjRw3CmwpUegh5Xd835mzJ",
  "key18": "2bVEKdeoFDyHS4BVKMvoZnqQZ7dNxS642p9JCDz56U4dPNBFKc77AsuKhP2DNHbrK2h9qthCBPwMTZFeSXTi2pEW",
  "key19": "4ASmMEmSZzBNwXf2PEhgiwCPZ3vsUBXQtjUaGTQLCu3SFqzrNdxj1DrkW2KeG9DnstCgxT1Ssvpe6EiVh1aGCWcb",
  "key20": "3ttXVPrmA9LEozuLSd8oG3zReL2StNsjWBkyfmf5dNY8rRJYaNKqZhF1kNwo3HwBGME34XxkKyyz6nUWdhBd6cmX",
  "key21": "49RmpUEnb9nfjNcgF2cjQqV9eb7bjJPGjm7xZba8xgUQFALHwKuU7kqfAfQu8uTmbGeX8rv9h5Qf5495VHUtfLcH",
  "key22": "4dxA4KptnxdfzNXqNB7pYfMvbki7Fy2hezMs7srJrkFZLe9WdEscivgYB3RNv1yrq7Fm4ADn8unq4Ey8799gREvK",
  "key23": "sRf58FHXXHbZfogDHF4k9CabStQLScqxWF1F1wNu2zhriNfsPLSjaQgJToesR2UTscPUpCYnFrpbEP5KGF2XTH3",
  "key24": "3Wt5xKKPqzhRDAyGzHPidqbwuC2SuY9k4qpSL7Bg2nWAjnGJiaUoTKW31nfNU11GUbkdxbF34GmU8tKaqHEepvwh",
  "key25": "2QkgYwqXLwekYtTAkHAiq4LLKu12Fe9hn8TUCLCMvNjos6mPE5bru8tgFmx5cTtu2sMMYCFntojZU2yWdEnFofuF",
  "key26": "KxSTjypbYRBvjNDKSULN3L6DuxnGiABPaiU8rPkztMNSSGGdMDhWSXQrTaxjeAv96Z9AaZ6dZWpdhkBUyVq12Wd"
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
