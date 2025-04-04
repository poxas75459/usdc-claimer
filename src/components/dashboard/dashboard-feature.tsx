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
    "4R1Qad31VxQhvw6PGtn7N8opJwEyLkXgg6Ff3vvy1rpUYv8beDzca3WgJW5aPzVMXZxYjXxtxcNNhjiodp2pTuUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TGB5vWHyejxaut61Nm6RUbx487mE1M3WcWMxcpKnhVAYxiHEhLQsVfGi8bkW4UU3T9QRHwJ9vUUc7u8Ba4xZR9k",
  "key1": "5M7LV9ENNqGo9yoSebVnseHqywxS7rEEv7us1B6zECNrWdcCwfp5FNoiZPTQh7whkMSNmtf3EpRqEXJvoyDouUsX",
  "key2": "4G64o6GPYvtxg4NsZVG2o3GN8wzkv2hXfKLbPZuQ5KcAxMH5dnUuJGK2sN2LE8veWoj1fMKmwHDWbtepa92PUtFL",
  "key3": "3JRajrQxXwz8ocL7KDMZ3L58F1iu9xCpkfySi8iWGRmRpDyoKtDU4bZhoroKhfL1KEVQppG2zDrd3C4ntZ5KEVib",
  "key4": "4BVcmu8R6ZkpRNfjvnBBm8QkKLNn1jLZPLiYBD6RDRXm2rwHcmMdzj4xWrex4fWhEG94AtfLNEzTHWdixxHEGesf",
  "key5": "mmZZD53qXvimtcekrhA8DN27zhJPNznk2QrXvoqaPxDLhJ7pBGnrFAXjAA52RCYd19vi9aNzxWdkrKTgQHaUGP8",
  "key6": "RuBS9ZfCu6DkH2FSB4CgcgLNt3MSEs3nDehz2FSKETfZw2Ui7NxLnvusJoh48WyRvG5idcxbJFibjNgcwM4WF2Q",
  "key7": "2iRPTU5WeHGkxm7Xbd6BHLyokvk9gXveAQ6SjQuBa46pUqBhWZmoKjmKouVtoyNhZDXoPtRa1Ae8pVYucNCHvLjz",
  "key8": "YVLuM8otNdxRzHc8wJKhgMCSrSi39ZS1GGV4spByiUYqwmy7XrTmCQ3JECoim8iWPJTf5SdpPtKDPCwEr65xFhF",
  "key9": "5JFno8HZBgtKyNAzecaSe789ZYfMRj7bHLZeX76hzQnj4rQwtFribMsj5y1xALfhPVyJGzbaWDAGgGj6Fgp45Sb2",
  "key10": "5KMBbrn3fwdrY9KpEQLwT7nTui5WYFNPnXDNve6mH5VrPVdqd14vToaqjcMc5LgVTWKPo7azVq9K5nETJEKaWubE",
  "key11": "5EBV2MoGjeHrmju4HyZsZ63bSgZER9ZoVMzP17JLqgrwp4ayjCs7ox8a8KBnGCAaZypd8Ue1ZbuUWPnyySh3oHRf",
  "key12": "5CuA938nEg3h26sL8ZUJHqj2D9Yq7aMa7jwXnq72d8XjqGhKtkvkLP62DYeAhktqV2J4oWwGUcEknQfbjuy8odZT",
  "key13": "2cnTunjLUqghir1w2M1YAadjYkkbN4ZMgjmLmMtQB5xb3qAzFRWxMY1k8Yj4wiJ3j4jCedDvCPXHmqEeJEVe6NZk",
  "key14": "3c5z568safQvQEDTQTiKZTRm3HaVPbuvqiQKe89kAu21W2SeYyBf17G4uxv6iJ82hiRr2RhjRzWvMzHfak4g9Fhq",
  "key15": "2vvoQmNpnRKwAwAjePBSt73JnxTqDLGRB3dtYCzyNXWiPqUMXNUbgWfmeh8obfQXyDjCeKYmv89UVC7oJxfwBrZA",
  "key16": "4wbPo3XbATce7RwL44WzMMYK4JHVKepYjXDUatMitQJtv47wPgZoVSUX3c4juUjyyLaRcFBkXh1ftMT26qXj2YXU",
  "key17": "4RMKMp3yBVr6WYp38D2QphauehRkWw713SiCjRPP1N5bqdEYqkBYTkWy5Mxem1s4VxQGKgMcenfyULcScEyjKJkB",
  "key18": "2rx4vakvmfVb56YV35oyTb7T1fyebP8Kghiv1whQwuWQS3EaH2modzey2aQVfrE3igc67YQH91ueakHV3nME4Kg3",
  "key19": "3jTKmYg8yjRnfRpA2gRZSUKpmAcUd35Y8v4Gnod7cRA1MjZ3Jm6ZhYNMhKMxvTZBr7fA567DbiZvUWarpJFKgobm",
  "key20": "47BYFabhTE5iYZwrvMs2n8q6pmfxVrrzG7ZtWaXd32bch1NSzy2m8nevEB64DtuAWtmYyX2pj9xndD3gUHZcCrMX",
  "key21": "2LZQAm2bWqVeBqhqB1ZzYDuCmtCaFk931ha6HMCubab8o3LMU9HPLiNaEzcu7PKdsAX8V92mNW9sERt5m1ReQabu",
  "key22": "5mTGiDJRNnkuoCVpGjA4rb6P9kKUoWVjnxEsLXEpMU4fxgAgoeoq1xeczY73CVSaDNf69RgFncz8LDSyz1Zn47jq",
  "key23": "utmwPohZ79N92AjoA7xs3AwHUb6E34dWQYVmrHiXC6S3LZQsS8Jj2qGJLxnzmt4hJbrWqFg6LkRV4uPGKYcC9Ma",
  "key24": "5HgD3Eu7x7hWwAcZFTNiVTfAZctgEHqxmktKhBm2K7LXrLG7zSnyQ8pSJzzA6cPFnPhwwZBGi2ThYumE4LYkZNZ6",
  "key25": "2c3XYDuQTvzngXFx8PfZcEk4QTmxAYf5TJgrZP9Y3bQBnyb3sxcNqC8kLcLYBrzBrv19CB73m81yPE4Ykc21VEHq",
  "key26": "5mwWA1T7zjD3jwwTnKwVL8pNeibsiGa3ffEyHSkU9qbPJ3FcvdLuMoXykfMCwok1B8JB8tt7xrMJAxnncgbDgSQS",
  "key27": "hQT7n8LSmbnATWtUnMmasR6oX4og2VMqEV22wFVcnGJpumVYJ2TB8pxxNZtcdncei5m9EnfY4ysn18JC7JmpkAA",
  "key28": "3MqyKizFYhvAZZMBymesiHhAs7DiwaHoZzgu15soFkh4APJKcxhMpzEMTY9wnuaBaUo5QYKhvH99PRzC2yQGc9Mk",
  "key29": "KKJKumCceX8ScAPwrGPkbKXw3by5Wgz3RFH23mfqtFThjFLwCBUyS9HGVtd7AwV6zENpL2SF2U5RDNGrmxB8fWF",
  "key30": "65Zs6Rkvn7eyp95vj7yRBjEDEkMKRCezAaYxMsWyaYbEaKCqYdEwcepDtJQcCDqoYddnQSVxUxHWb3pzLR7yU6Fc"
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
