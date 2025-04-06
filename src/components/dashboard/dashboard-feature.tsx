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
    "4vDQiSvmY1F7g7B8iwEVSNRm9soiienMegVoFjZ1WLA2LBJwG2eWj1Tcymi879cabUadQ3VzAm964nELZv5cfJcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "264FceiGM3BDUD6H1TQkYksifoVyTF8iCJvj476YzmP2QtX195gF4ue28oCy6dSqBWrHc2zQcTgXcves1he31eAV",
  "key1": "35mjGouPeS6x6Nuo3NFB4LuTqUYqebyn5bycdjz3DbzUDep7DxwTmWUdSYh3SfHp33mgiaSkTBke4UqtKvCfNYxE",
  "key2": "3wUJDds7eHpoxuHXiNEyyZJSSKnebb6uDrBbo6kE2cmW8Dui4HuSGRMMBzpXCw3kWSDadt9tgDfaqobExjBDC5Xg",
  "key3": "pt6hrDu3vZrCyqn8kqCcpo8M9ij9cEKf6ivgvFgQrVjeZmZDrcJT3hwyEQdmowGw26iqBF8jB7mvPUkpzfCCqBh",
  "key4": "4fXqdQKF3epiiV4tMs49RS2o5WdqdHjey5zYtcbmXAz1nuxRhWLt7vNsgqsC2xJ8UJPPe4Y77L3W44nv7pspyieK",
  "key5": "5e7eub7x7pq6yfkFWZQsUq5fE8kosDKv7GxWwGC9SWZKRgcyErrRdVjYKCvfTqw4KVXWXShdKSa1qafCoSAKi7QB",
  "key6": "5Fcgm5BTqvpLeeawp2wB4B7141Lp1UkfGr8bpv9mtgAkz4EBhTCA9D3UBHqVzy3aXsJcertsS4ZuWkNB5Wo44qDu",
  "key7": "fttLztyU8yfaaHEzSykgqxePecw89uUrX8JEfs7nP2Bdzioku97w1uHA2RWydSrYHoGLfvgpWpoRM7pzcif4DBh",
  "key8": "5kG7NmJ3sxjFoG17s4nmAG3URigrUnF4stGb4LkaUvD5fJvstCdXY7ttK4UwaqQJJjC1F22JX7cLo8mrJxRWEPq",
  "key9": "628kbrXygu15s1MJsKLVyumKS7XdDwEdHv5KrSA9qWa1PLuQQSCs1LGqUFoSfPEG5BM9bnY1aKxZxWvzSE9B1bpa",
  "key10": "2eQFDWTxDusaiTuDKZ3cFkZT6FecqHW83s5NUZF4Yi6pf4rog6nKotkkW1svcabe5j5KhmjqRJXvL82N2UgsWSaG",
  "key11": "5mtfMbYYffNMuks72HruHTG56Yg4pVQUEjBMHoskcAeT9PthnJmd1FANDNVMznLwK17ECcws3B32r9wwoTxQ66MY",
  "key12": "2RhZBYuJXcVRrHkkyQmyPruDuF3bnEm73SmYLnRPhJaX51gbNMhvwq7P1apWsXXNWevRiEX34vgsPPssqquVaPsf",
  "key13": "4DDpxWhpp32HjgkrJV7PVihn9vhwdJ8ySLP9XGwaY2tmaWnKNMvCJe5e7kHNaZBm1u7f1PXPDWqU7bdZbNCXZMoT",
  "key14": "MNrkfqgcPVqQ8Nnh7UvTuhRi8ANT6FnyCdeEqSkE81Tnb1kvQNgukHmDtuNEs47FPqSNRQjVsi3dBnxNteYooEB",
  "key15": "3jWGJTyYRkS6kcC6Gu16DrNgdSJ2gY97SicpRLAW4EPPVY83VxfDdMRNoou6Nb3cC9uPJiAxEMiLvM23QKs2Lz2y",
  "key16": "522eYubAXB6gGXMFK9CsYhMuSvu5R3KvNbXR7Mz6nBtCHVBVvm7xEGg8sTAd2viXYnSrA5tFiQnC4e5KPZqSBEuZ",
  "key17": "rDXBxKGZ8rDZSEfunJnqJmgUHkUv2zfXEr8MGRmVyna7UkeDe82rE8etNXkvWHxVUbxmL4NEhvvM1FHcCUGgyTo",
  "key18": "5nGAZ4TZDWb3ffRsm89ALkL5ttXpQEaD2kr9wm1nZGa226HGT1hZtzTrw1kvmDPV7f1FxrhN8dqVWAsWak6nxbpd",
  "key19": "4924GWExEKGEb37rQyjaUnmNL9G4LRUDR6NNcyXrdemd7THYwFhxAPKhyCYdQoq86bAirtaQ7fSdQyXLWr3DVxRy",
  "key20": "EHRYXsvt5AnBCQr6PMqz1Se5vT5Mbh426exVmFcgkZhBQmUmjZsvnc881qLJkVTj8D8aFxcp2wye7mUh7ttTurX",
  "key21": "KRtrcZvDEKPTqz3syhWMMWfmrZCaCW5DvCXkt3LzwsbhgB2jkczxaA1CEsDQwrTbM74NNKuyv25BEuc3MQj5KWr",
  "key22": "sW44EKFmwXpiSegSwEpJApansvZGzGUtn23KCpKNuAJYH2WnZDro9AmMkEXZdPwSLEuuDTd9ennbzbhV1Pgq5ti",
  "key23": "66zcZ5JohKn6AfMHy3BQ7GojTXBsm6vCyFm3xySScmnYM4RgX6VKWrP692XVSwxXsAGVQnXg4cKpMf1KhDC8bJyC",
  "key24": "4wjuUPbsr3RstCnSP1kAfYvY9CCmPjTM3c1zYCFYLKhFuXpG2NCqUVUg7zwk6oFmkZSmpTQpqDnFphFX445vGnci",
  "key25": "5WiHc8PXW5RiMWtBBCGpAnBgM4MQKLux7A7d9G3JPhJmsuZNoXDYz6pNbghP7BTq2pNLouigYvgU6UfGbiWDHmCR",
  "key26": "9N9fXnGYTMH6Cku3d4BSyz5jSpzrXktFBotPMCtC8WXfJhvRUVc2Ldo9kF5vDy5mfmkgct4AS96qxy2DuoJJL9v",
  "key27": "3MDqyjeg77anSPpiL43gzqmSXHn8ptR2DVz5RtN7Q3TUg7gFy2VYFbbviZ2qyEP1dY4W4XjAYr337vjd9eEUF4bJ",
  "key28": "2t72ZVhBTBbK85HtHCgrKc2S4WEGSSqRRbRgNVv5JFBoAuATGGvXrF2VFXB9PabJ3ZKDU7CKWUafxP2CbDdqLqUq",
  "key29": "2beyz1PqVLXwL4CBmmpqLBUh7EK447keAFF7W11mNURDzjAQyfydihXem9NrLvEBcSy8EEJDFraxp61uH9DgGBPF",
  "key30": "vMR59VGLNhvrNXBWKq3HnwpeaCkPbvX9KHz5y1Q9LJe3xEbMw1ZXjgHvBTAkK1pif36LarFBSHVJAkb8hUSTG9P",
  "key31": "3s5NsRoWmteLotxssXUPEZMBuB2Hf9EBZbZWKLbRM8dGw7n77oAp44JghaZM7WtKojcjWgEp8vrFxfqn4G178fJB",
  "key32": "4biuY12S6SWbHn8TjM2hmHS29tFRrKWQasLd3m5UYWJL6w3CmtbgCJpAgYXoa1Y1M5pPt2fP6qa8hyt8sntQKFS6"
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
