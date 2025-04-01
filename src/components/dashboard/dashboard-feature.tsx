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
    "4ZYCUrGz48u9Ui9rLxhxNkXbug5zp9h9tkJSNNLxNvCE5xNZbcz2rD974VSgzrhL3bepVYVxjrqJkRRgKeCg8SeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zpHxPYj1vtK8ubshiTEHcr42vKGddWbYQgu6brfBRWJcevHooHZsiMfovriZ4gJhuJ9mohAnTd5zXVGNdmBwW1P",
  "key1": "VF5DcDshmze5EQRE8XzvPn1Pgv7knu6cHkgwUXVZdN4v2XaysjCfz15orATy8mhcP2AxkepeJa1oucehyzdQhUc",
  "key2": "4RxegywpduaWLRzw2yJtZUKBNtZrUSFA5K9iDbdLndm38aSXAuQJa3XLXdqLeg8kjDvpUSo1cbjyqeLKoiPBzd7i",
  "key3": "2eFN4MGCtuy6xQThmx1RTi3SXr3MtMsUtFQLJrY7wkAiV2xCQRDu7L2jJiDGqJvQpBg6A7YFTukkvne6a5Dh7SSQ",
  "key4": "37rrZR3VhWDjPtT2iXUJfQ5DjLQKaoz433Re9p3TQcyNjkyNy5BPcTwy2KQijEnfywyGt6QGEqtQ7pLeyjgg5Er3",
  "key5": "4fQipFxnMBWtCsEAAtrm3TuHUbSDovQ6cYSiewBjxaAk791hLqgDKxBeAD8RTaeCJcFJuW6NH6LJLJNF92iVBX58",
  "key6": "3hp9HdXyDZTf52rFNeu1Yx6cmY5V3rewookyS3VdVMVHLgwc6J8JpbM2SjMoxgThmsDZQZmBXXPLv8gFgK4AuFLW",
  "key7": "5jeDAaWsoA3XQgKeashLtVDA1MoyP1EkcNbFuaTxPyMyomG7TPPVB2yjyAg8sW1CKgpiMNDpcbHbQ2aokuH5JA9Q",
  "key8": "82WMN4g8FHitGw21yAQEqdKfdPbUqtEkLfWKagzyAuP8gmV5B6PvkynfsdhqcwcFPUwn2BdJYGZJkengHQwgCRE",
  "key9": "2r8JM21dc8zyCqwbjQph2Diiqu5SGUGdJu2X3txeMNfe9Fe1tspovjkShF6VfaVU3zTRAiPoR9yDBA2oeuwaDwY5",
  "key10": "cPnsyi44CmWEZbhe5x4HxwffHG7Amx9VRs3vUQ7DFgU1xxcUmVrNNMG3viyoguvzobazuUL5mj4HjFo2uq5Z181",
  "key11": "2dm4kS7dp6x7qRneZDxcLTKgLCCH5VvaipCT5G8PLvWR33jHkZpqoXyZrfebZLtybyWgKrrv5FtiMUSYYYxDRSN6",
  "key12": "dDXcDHsoqeE7DHVsKTtFpPqcEMG39GG8QMSe3JLHnJMpXcCDn4JBv3eFzhRJ4Ugw8L5FvzuDxFG39UYPkNKsYqw",
  "key13": "3j8jmbhK8xSL5wSyBymUWC9a6WtqugpqGzpUeW27biyXKCbiVHrsm6aKudFAM8PNh2Yn55We3GkhBgtHnCLsyGdZ",
  "key14": "67NLbnK4ReeUxMLh5J54KNcWXjZQ3gNSWz5vAhUSa6T4RCpceXJzcKE5yGbAqCMdVWiRB9rtuGHhDDgTAh2omz4E",
  "key15": "3FzyhHiHGBcfkstLkNEyG53D3Kh4YWusmppy5QuyweTULwiR38dYz3fnvZPd4WpjPVQWbywx8zbE7wcFuCgbe9qW",
  "key16": "2kRR92yFZdrwJ9ikUwkRh9DyRYgSp1o5mjWdw5MeqjsXJnkBKtux5BRBCDNhxnRA4ptZD3eUk8oWtFP8aWy6tXxs",
  "key17": "5jEg92augxS5DSbVyMydT43cfAdiYb23Fk6TmmT5ovaq9mHMQUFNBCVUvoW6PjZpuMtsBZaqYRFH1P97v6kwkfCE",
  "key18": "3gqKPLEV6UrPa9iKUgKvThp7xPqaqhucaYi4QPDhK3PXVqMQqAfLPoEoYUsgkiQWyJb6MgxBDivrZyETSSXQyyTK",
  "key19": "dxJzAfc7sA1q4FUuHm2goKjnGwGZqHPqyitu9bESrEy3EUAZfJm2XvD8pSvmCJ14dyT9pvpCw2ef7ue8RmZW2en",
  "key20": "4Hd4ovTZ8k1U2KdrVLgHiatTvsMRv2s5oWbPbZtu629tbJLFhwhcMxXrmmanwEHBVkuiKHWFcjdmeqf8sBGPk4NC",
  "key21": "LsbYTHehwU1pzdUXjgossQZoFp3emJ7ze1CU4KDNZfXv1KNYzxXurhYZrCmd6y8iA9rsTMigFyhSow3MHa2m3LW",
  "key22": "3ST45zWXQwrBjDkKKfXGEdNDnt9j2mLdxs6TMvfgHdn6S8JgjY9JG8YjiVufwaCUGN3wDw1F98Px3LS96uLEMSp",
  "key23": "5hjPQ53TSdQxf2kgJ5X5G2UgpqDf1maw1W1pzzATvetGqDxptBcTZhMW23HGNiG17F2gM83Cf59wQqxXUhGzk2mv",
  "key24": "5hPPaacm7RMGY5AchXVsmhdB3GiLCukyC1ckFbPAJr5zNPm4UBBxRYacbjxULQNaAGmzWu1oYEERMwjZoZZKbdTm",
  "key25": "5r3XhUhfXV4US8eh3PVii6oboSufjdvuFjLatygLoYo6ARWfr4MrhFGKVuYjwMgLtNnxVd9cZN3x8YPUBpNE1vVi",
  "key26": "rH2fQqqpJELkMdPEz1Yjh7WMD7XYVZF4QcwtfE5c3hresKxAkasV4zxEyikPYqM772GMNV1XJKGCoN3rmZKmTJW",
  "key27": "4dCKN9X6x52sCtY56uSHPncNNnpNxtvbDRp2fzQvbQ5adjqnf4wzh3KTTznyNWSuoHNP5RAp3Zh3oLgNhg1vBW9i",
  "key28": "2y6WrXpBH6FhBuQzzCyiyXnfiP7zwdLyFHkn2yx4PrEJNZAqj7WXsdE83fZYbVNce4guz8JVWEiQ3j5cSH9V5qss",
  "key29": "47Mg37yRFPw8Hpk287cLzDuLmGmEq2s5sBDzAMR4G78x2krtdYURJzYC5Kh7Qe1QNaat8498K9iUQ5wKTf1jRAFa",
  "key30": "2c2KBVNX2AZMPABkgeEAeL5NFLv7NVvHc1rZv1HnzaKH8ZRe1SsDh43aV2UcQESGHyGu8XcL8Fz3t1gcFFVFQ45q",
  "key31": "411y8UDJLcNyKuD6oeXWTL35SXdMFQxoXwnqqsHFwQRsAJKzFpqgpr96jzkPtwPQWS2VTu4jb3pUkkxhRGUuYuG7",
  "key32": "4TkekABUNEzHPmc9ugUdj5FTFueskpF6pVASzxGTM6o2DYB3d4rTep6SwEStoNQAMfLmJQ5UcQFmRDEGej9sSST9",
  "key33": "29wDXB9XcPQ17u7yGihZo5Y2vrTek4tKvrEpqv8Hsk4PjcjkcywhkwW1o2i7nJwuoXWqs32p26sATnYx8PLVtL1r",
  "key34": "3A6W7kbtKT63ddjZJ2jVeBitJGGCLwmjQdqcpvL1bnJ3kMRvzfHkSq9CfqSBLn2vRMxSfqVr6B99VRqSmQEDboAc"
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
