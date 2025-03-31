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
    "2TxRuwyHbmRYJ2S717ubxJ6tuVPuit43x3hcPkGFp65TcPstCGRixof7GziEsrJLG9TwKJyM6L42EzgYP311biaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2de6RtGHPyMLGmaWuEBwFx2yycFKLaxYqXQyU8iDoF1iF7g2vBuQ8LyqRo3MHkMXe8hmv7aWcMLip5ykKWPAefdH",
  "key1": "3Kg3Qufk7e1k9hwVT3EYxL8q75uuYP7Cb7At1maYgXVKaZHPQhvKzRQ2w6syegVWdnBDxbMJzGay3D3mqDWgv7jg",
  "key2": "3CuRypJprkjeVmWzAeKB8skaCCbWdi5NXhz6NAH6i8JBW3tPcxbDeetoV7Mebr2kLMEcu8fDBDYqnfvQbd7499UN",
  "key3": "4cnbi2MwprgEpaWMayCGDWFDXRKWg7HR64Evim4bxD8k1Z2P53RyhowvbNDe6m1Vk1wLDv7u4DtXiGfJDJTMT3Wz",
  "key4": "65BbhpjPaxeaK6UHpK9KFsDYjysEdiimAtDaD6MkCTM3Auk154SfVgcU5btsVp972gmUeeRCXeLFPBe3nodoVXhM",
  "key5": "38PVqRy5jtoBzn4ADgfwBYpBpdHRM6UVG7J5FVe79fNi7VbF8taYfCNs8FfKrN6gb73vpP6aQymWzJtfDNP4JAUr",
  "key6": "5CH8cWdzKWPtbghqQ7FaFJCfNrZhNS7ST2z1njDjb1eWKZJZUAnStoSF2kGRscNGtbucU3RxbKXZy3kqfW1JtGC6",
  "key7": "5RW8WHd2HPWL6ptwYGrdHrDpHpCJ5jN8W8SmTaaHeMAmPFsyMvP53CtEVktCVdcNoP3X1YroKBazAHrWePYZsjhn",
  "key8": "HwgvGjwsDYNDWog4jhBSyYbsGxBkFvdrYokwecECcE46qKZ98thunN76Lny3v7AZtQ8398TAF1zBg6fYg4JhMkw",
  "key9": "3TFcVuLfPgJikhSFZGStGrKH4sYBz8R3CWEWR3Wn3Lnt1E5WwexchpebxtnmcwxAm61qmjyMUWGeSX4aqZZtsrUE",
  "key10": "5cqNxJkp6n2nJ4eKAdHmGztUbdYA5BGpLsQV4wyvzCCq2xV6ynqxyngygFUhc6HpbxkDLyibCyrevZBPR9XL1m9Y",
  "key11": "4jNcgF5yYkCfuFnuo2pcHgSPMSoJ1TPMiWVYSNCH4eERATaE1K32cBbFy2nJpQ5EeQZNc8jk1tKHjeFzLVDuX7H4",
  "key12": "kKEfVx5phQp9CBaihtGdchHdMnDVmZ6K3NQngoGU6q1AfFDKoHiKF3CzVxWK4JRyJHdr32Cpit134YpkQigLRaV",
  "key13": "2rWySDeo1ctxPvxsek7RQFDabWowW9F7BKsdc3SZf1hT8NHSfcj1fhzvadBkf73H8Zn1LBsEAcHWpbEiTQ3FXQpN",
  "key14": "645dgdaPdh5qGB3DL9NCSNmi4gyEbe8iiD9MrXawfYdvLfonKxjASdjzn7R8a6xoWoDnXYi5yZ4pCg6aWiu6ZRCV",
  "key15": "59iPXSxcDJwZQh75p4unsvPBynP4tauPgdBPySEz4pJoEycsCuXvKPLGxTUvct8vCmK47EcPe6VBqvMB7rBGBJ6i",
  "key16": "3rCMzVMHWBU78wfGCuZgscyzwPbroM2F3k58zzRw64yaMEsYEDGVcjvvXwNRqrpWHb543nPL9GKMXksucCkgH4CT",
  "key17": "42DZmDhyiaj5MEHeLvoXDREFr8kiFNqfk2DvRXrLdWS8Q4uZCja83qy6e5GyrptNPu4sS8kCqjhd5GyriQ21xexk",
  "key18": "2UhSUjRKCEUEZgsNtpRiV1Cr6oV4T9d9bc3TNzG5QKrShZnb59XwnNwkbJWPWhP5D1A8wHkDkkdwmeWsExET3cAy",
  "key19": "9stvfhrzYSUNs84MH8ov1boaCcnsog83LEavKGUMa11FayzRBycPUfaCEPVrKKb2rBsNUcsFYL5kKqeqwZAHy9q",
  "key20": "5CJ4CEaC8Vw4RTbTVCo5tJCGhEacMAboXuFYKE7gLEL1aJaWfxCAqehbuk2raTLoVw5tPuTAVZowTH3prLE8vwTx",
  "key21": "3g7VPew6iaYhWxMyjHbuQN6xZsavZnL7pAgdsXmu1RoQhieFPWetjnhp8VTaVerVmjVGiWvRuuy2Gkq3U9WF8SV4",
  "key22": "2K6Emxnu8tntv2ZChbaG1YsrxPDx1zzB1jPx7MdZWzhURw2ffgQkq9iBFhMtzpusx2jD6isR8PbMyFkCqD3iNVmN",
  "key23": "3W9J6WoxQR5SxDQRr3zmC9q2VfZPJBnUi696YvfL4DMgM5Nb58oKSqhHMmqTQoxJXm5pwV64i8qNCB28phWhdGgQ",
  "key24": "2Eoe2Xi18qPHGZzKFFJUMe1ANY98L5Rit2Lg3K9ULwBknQLdLJY2cN7f7W5he6T4sgzp79i9herPqoSzDBQYwMu8",
  "key25": "3amNUvdqYjnF5GoHire3Wo669E3gjwNiJm7LUzMT9g6gLiFBr37aL2f77ZqGVKEyHnYDt5iH4AzNsmWxkv4dY8dM",
  "key26": "2DxikexihBKes6NScXcNgxUtJMqN2YkunHgEcMfa8PSSQcGPcyA8tm6nJzHnAhnyJvf8aXKVYp5Abk2KkhYMTkMn",
  "key27": "4Yopot6bz2WfywLvSG1B5kBRHEiVhK9zV4rh2NfMhac3jr89hMMHDYg6JDcfK9qF6onjfoG8b1VnYVPD974YbnZD",
  "key28": "47tMfNEDKqgmKmgFoZddfMd9QU5aGFiUwzPZ8kujWmmx1dUSNLXKQVMrXGF6H3JeQXp6cFVMPEWFVqEUsoTJUhGV",
  "key29": "5xnZbdvoEaq1GF3TfKovQqLKpRgpo4WZC1VDZ6jYe5EPRsvVFpPRMtqSrHYuR9fkBEBkQPYHLudM6srZWhGaYsBp",
  "key30": "5NnyAjvG8HZHspb2rP6XwrqhCwWSxGJNopQCqUdy8de6MWNenSMkqdUz9VAhEhXJxcG5XSLT9nWoNmMNo3jxQCid",
  "key31": "3yAPjkEpCgeAHUkUdJ1pUihrLbyySRVMjk15irvG4EcMdqaN8mVftsTU28DUDyx6uZqg8wSf2ZMojHKsEP4MFUzo",
  "key32": "5Pgtnxh9suHGAUGQ4cbWv3ghHD6zH7Ha1Z3NJTp7Zc6g7t1Cz8NXVNDeSydNBSSXrr3yfKHFaZcSLdSM3mSLXZwd",
  "key33": "2q1if7cjtaUW8NAsaUL2aGFoL85UgpfL61vUo5H4NyP95D51JGiSiZbeVSUHTTNJuR4VWvcpz9zvne4PQMjsD15f",
  "key34": "4dmVHvPNo2VRBrkWiuBCgQyqVVFk3J68NhNvs3Mvz43HeKJ8AqR7hNYFQS4FFbCbk31a39Rjx2KBjUPqAaB18GV8",
  "key35": "4SUcPngBPUxpyH6FnPy3x1AivxFKLtYwGXh4JheRiHavJ5wKHa2CChhvdXRcn9trZvU7Yoi8coYdCi55mz1M1WxH",
  "key36": "5AD7yPYDGPkMgCRZKVi8zhuKet7ng5YnxjKwMa9hK2xzLofUiw6xVyM9eQ9bWQ8rbYzMQa34ijr4aB85j1y92hNf"
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
