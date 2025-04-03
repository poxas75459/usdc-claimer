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
    "5cY7vE4Ufa7yvdC77EtrdunjpzCrSzPEFY9XS3Mmg5USZZeKuLANo1PMbpsHUi8NQaumVk2FVvmzXG5heEU5ojFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3waFV22nbEBZzJBcUB2gQBVA1pvDzZrB3hZLLiE8jeBgiEebfxCJFgbLmVLQK4RHoUYuD22Xm246bV272ZeB9xi",
  "key1": "3JHhWbMurHMaC1DVNg85LCHzMwicFjRVDRQaN26aRP3RJyceadH7vCDN1Wk4TUMMdLmXuALL1afdXXtn93Pyrurh",
  "key2": "Esyp15WqCzcnRT1zemFFHxEuXFShUEBJq3AQNrBgv6ZN4YV1wsU2Hoc62idLhx5mzU3yXnFKFvk1Q5hpp5LxyTw",
  "key3": "4NAintbDm4THeN8Rw4EWicmWCK5HZJjHg73peJS3tTUjCNVfMdMcKTYX9MPGxfvCJH9trns8f9RnLwKjBPKXGi5t",
  "key4": "63C8PYYYy7DPupTYGui7T841LZuoHKvp7WkVPbAqfnaFoegQM5ACyqcN8wMvDtvdR3z6tKmPAnZey3sAMSxksmwW",
  "key5": "4Y5DjeWPfSMAwoxTVex17weXz7477ER8ipGfLDtdB9nQVWdetF933PDTVQUu1xCqygWeKERByZd7CsphSwMwKrxR",
  "key6": "4oyDjWecdXdYmhyneP2aKgFXKD3tmsPrrRn1xDMuk3U3itS5BNvLsdRrxryWkh2K9NwexYhGsLmZUrnwUHFwkPFf",
  "key7": "4zf5eGtroWTv7cqKD1BgbRY4XC5oz7giqRDJSsrfkPLDSeGaVb1vpKeQq2uLZ1xr5rpmPXbUcAc7J2H551fqPWG8",
  "key8": "LuU5uadYqgGoZEdfF77AER2dAgwkCZNjKmccDVetyYLf2pd7rVB1U4XX9vmyZf8y1HFxnYvMWp4YkEFu41DPDPw",
  "key9": "xQGhKk8Zw9QjcmuK8n4HdNBvxibmn1t2xP42akfbrfp91FGLDz4FqTgdGqox4Bn3EnpZp5MaWtReCxS9uuWcume",
  "key10": "4SVepHCuDrwMjwvjWEpp97BHw8EA2Au9QYeY3Nqs8PU4Gg2nKfrFWMoEQmPLT2Z8ZeBeeLm4RxtECybn17nJ2d6T",
  "key11": "5k6zNheHQvfsXbxeRRi3sWCvodnsyMiXDcpsRzF2T9cmGCWhpKRKGoZ2vMDni5messS2jd2kDLCibpm5NuTtmwfb",
  "key12": "2vVN61wQjDbMr8VWA4DWCwKS6cFuTsUP43oWJ8hDstbfea3E6erzMetC2hzxHaGm9SBXHYudij36Zx7sxXhqP1Hu",
  "key13": "64uq33AS23V26ut3fG2G8nb89EPdWy5ZYu1s4KG5BiPWRRN4FqePBWmaexNXsiE4gaHC6ifPb5ERJMEzPWxdqjiH",
  "key14": "21bJinMXJ9ffvij9aLz1T1dogWGD1G6dh9TN8At8soxsRE47hSiJXcqhKetgqM8YfcKCiVoJ4bR9X3oPrtBWegGD",
  "key15": "2wWZ7K2Ygr9EU4LaAAa7E8grxgnUZLBm9rctvzr7mCozSzT83EPtge7AjBFtfSzj33KuH5sRFzbT9tFXmTa64r6S",
  "key16": "633ds2gfD8c38qmVvEXno2DNRQemPUdPBQjDw4WpVR4NPAjeMdaN53jk7McyYr2tjHNacdznNpNQ3BnLKwdLJEM2",
  "key17": "sgSmQGrsVvDruc71N2Yhv48zCxLLhfyMzN7vXAZvug5u5edJ9NuBYmQTHiDDTreHBCoBRC3PLRHcp4qWP6TLvs4",
  "key18": "h7PfZc6HZv4YdF6jp7Nx5k5UEZtMbdUN5j8exJ27b4dGa9Rdnh3QPZPiXvSGLKRAGnidsS8mE5joQQBvzKWXksz",
  "key19": "2kz3Xi9FjTzdd2H6gxq9kTBXCcGy1RADkoDsLxmnKCxpKFGxwYcKJ5B3F1bsZ5L1DjLz9xGjsDs4ufWS2qXW5xLX",
  "key20": "3XHAuFiHdTsathdszcEGfXZuKi7BXxST7X4jihJpsBRxdW5KYrTaz5Wi6Tp8EKAMhh37hpxqQVQtwsHaBzM6Z7F8",
  "key21": "5MkREyx2Dx8dRiGdo85B3jaPgBpUBzDF5UEy6pKDGGkRYcyGN3fLFHD4NUMi6UCJNtWqia4vTk8SxQuajhmYV35C",
  "key22": "iNSUY123Bbip14JjuTdRmy8Ddr2z7UzLFG7sMaGpFajdZjFg5QbaCDNgij5iFumUQ6oZBmXTPtpdRENo9mBZh2m",
  "key23": "2J1JmtCxbaSidrpXo8vyLHe7TN9UspA8Je8v2PuiESiuUh3B3rcV8ptYbj8oqr3HJjjYnmb2wCKFHQtmyfZtk3kB",
  "key24": "2eVZmMRZNmUWXNCG4b6tp1WMTWTw1PY65c7ib5otdWrBkShntqFqdfe87LzTVmWRp2WbpwRkHMakUnZePH3QJFt9",
  "key25": "mEpf5dsiCp5zAsTz4xQTW1W16DexvVb2B9Y8PPmUmEVGW8mbL3F1EdZwDSNWUEFC5sTbrzsHS3dofwQ3dCeDRiq",
  "key26": "3JQpjD6sf87ZkuY8DnYCkkkz8DCJDXmzhETYkaMJ5SMaNvQdhbT6sktRX8862kHRzbJAWUYHad7gA6t49gytq2jt"
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
