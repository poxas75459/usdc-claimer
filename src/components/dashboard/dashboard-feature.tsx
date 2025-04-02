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
    "51Gjy1agVBSTspvKGExt6HggRV6kcsAg5NbJZyNBeRAupcZ5heoFNADzwPvX4btTXA91nULTsp7yun87U3AKGxb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JENRNZEEZA1ETKtcxGumrVruuCGoDam962sYmfzmz5xwbfPhaBKn9qzZS4ma4yyrwfWp1pZzkTTdn2JCNz3eQLS",
  "key1": "5VRcAZ1PLaL4oRpyoVWCKR9Z86WH9UYEsayFcky3Ut2uEaSQ57hkcZ5EpXyQGpKLrpEuWdyBeR2okdMzMEghLT5K",
  "key2": "2aHFodpUihT8BYec7yRAnvcDN2o6RMkH1Td8pAuPm3vcuD9hx3kbpbzx161b5Q5Bqhi1dggggbvsFj4FaX1JYkpA",
  "key3": "QFAmyjHQearoNGeFULFP6WqP1ocmfMkSviSGy49kX63skRuho5Ykxyp15YSKFWG5XCGUZdyvGP1osN4cGTKqREB",
  "key4": "25TikukysUyYgT49VWVtL4RBHWiuaULSFXhPw9wppPeDmztdJH6w1ZiDu2n9xM7aJHgzfRmM5YAk8B3t4j3xKQdG",
  "key5": "5PTfDHmXgE5iFT7eRZCLYdZ9oiSYbbvD2jGz5KxKicMvVFxHo9imv5vKJe3ZqQkDBkxXkeYJqS8oNA1e8GJdVf8H",
  "key6": "2fBHaFetYxjDexfSjMZDb117UYXqR9An9aGMmBu3oNs5s1jSwZ8GwFvvhYZd4Fw3CTo8qJSVuRGeLwYSA1EfQ8gS",
  "key7": "4r1wPBbMsHFNtqapXMfDDHsMnLt16yQdWX6SePCfK5oDUcWhDAbwr4aGyTh1rNe6nN94tV93gZVAYC4Cp5yT49F2",
  "key8": "4LU3vDJj8F9kmE2opc5yBmW6xWaXLNkdjqK7VioY9wVgiYYjM7WydU7HBd1KmtB5HME4gX4BP44xtTxsxsHKUwf1",
  "key9": "34B8GUaF6AaULX5Vf9LgeevLMCkFBPHT8EiE99u8DZ1Ng7ce4vJ592B6vGuwXk7WxsWcJWAwh3FnnSnLrK79JnAq",
  "key10": "4HRpjpDJdmcsKh4yLDaJn2ev1uGCJNzHVxykY2qbnKLrsHuogq5Lk8rm6nLfteGpoENCXgUStiQP6oyUyoZeawUm",
  "key11": "4hDDE4DqDmz54poobQMGfmnrnPMU9LwK64z5CP2vubxUF4WzRoy5jFqTi2HsZXwtpRsHnn2NrF8VL2cKiESeynQu",
  "key12": "674SzKUTPctZunrpwV3byw3L3Ys6u7C2tjAJDqRawVWvs11Q2qZBP8x3CqxHQDsaGDT9aUi7ThV5KeXBRhZApQzx",
  "key13": "4QPKsDd2fbtJQBqN9HiHC2uRffSnxdZoh5xBwcCuLLSDpx99DT46SjyNpnfcyj9zapPQ4HQ9WxKTBg6ZfT9h6ASE",
  "key14": "4B2izFcCjvULeaWt7e14CLZXw2fh4pe5JjZZrtBFdsb4C26Rn5btzPap6MaTQgedb5tEfpYbCcJwdxJTVkmcT3r6",
  "key15": "34eYhAkeMNLMaPjgTYnMHGfzVkpASysujJVRCQvHtgTV29CT77Hq3Ut5xwK2T4kC6YoRXHh2qWhkVqMmNubWqX5d",
  "key16": "3TosEnb9aFEoQdvAGCjsMjXzG5tbK2HF4xx6joRD9Wvz3DSVYyF8eVgLMkCndS91mt19EucUXfmJrJKoZKwXTR9q",
  "key17": "7tPvmp9DqqjtY1CCEP9teV9g5FJtpznswZP9q2xMKhpuLCxyBFgpUbNm2f6usmySgJ8ZfQpgPVJeCEV9fqKmzKX",
  "key18": "4gwVGUfBWVoB11Mx9cBTDgeBKxT1KBMu7j7xphVyyZ1ZfEmbqxhQymTgMpfGfB1GXbaGBHbpLSwJtBC4qNfUntsS",
  "key19": "2aaXd5ZtDLF3pdApETb3W22bwGxfAJeR2zQSzEYsftWak7NsUWzjqucRqKZ4tasdwXRyuwu9hVzfgNVwVFF9V9hK",
  "key20": "4KEAZyddTRBAw62c8iG1T56Xgk48srrXHkCEmrwjyAa4ktecZ1n2n1xXUqnYNPuf3EfsZxLicADUbz4BQdYnKYcr",
  "key21": "4dxPqFjcDQFpY743x78rbwFRoXHqQWo1JRyNufLK1o9S9CxuBN5hmLb2tHkigv3daqLWHFiuGyB5yn6M3LibPTju",
  "key22": "cq8scPr6VWYDaSTAhfTEKS2a7mWzRgSGpsQd83miye26jhrJYxWpNPz2jjD22k1uhsWQdhWkxiiNyZ6DUQsfiGY",
  "key23": "3vmSqDQw1NWeTortY1hu6RmqW8yWANySMrGNkkdjTNyfykLXhEmeqcZH62NZVaty2mYqYkuNKaoG8bexgY2SaPRc",
  "key24": "2R6Nw5yb3MyaFhKJzvXkE1XzrWNr7GYVFYpLouwUqLLtHAXqiAdqYYtR5RTnUenGEPcYihZZ2RMobxe1uhNKXt9Q",
  "key25": "5Ge4PrFAbcrqoti4tETxaAjEq5UMa1GGiPuLrP98djDRGuNa5xXjLnygmLUwuEZJYKNuPc34Br8qcqDvGwkKvH54",
  "key26": "qrPykubZe2NAaUsdAssHtbenafojhoy8tUrunPaLdsHarb9SLRkEJLUDXRVbD942r7mobTqLL9pTcp2Z8DivTR2",
  "key27": "v4RzVFKFQmi4ogkB1m7z9BFdDbFtn232Wka3oqzFCAiwnzcK8KUbaUQobv3NjWZDUhxHwiTKmjyL9hm71kKDypa",
  "key28": "466eVzd6YVmVVeoBaRGfBhgVyEP6nWKfENrxWNca9qC57xYzX6dyYg6vtoRzdM1SBTM2sPCxSWEUCP8ebD74ZG29",
  "key29": "Cj2sK28uEavh4DYgrjGjwD2jfXcpk4fRTvAuJjWPP2yyLkNtpw648XP9mhqmHapyaX8BqfXaL1zAbzNVLHnwDgp",
  "key30": "3jMfyu8w9Yz7XJCxJfWJsnsQVA3BeYsYh1pH5YuUJH37Awz2ZzE7LNrmu7JJ9M4Pv53KTcxWpeHEgrnPQkxwG9uv"
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
