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
    "3sU8otf2ju6aqM5fHYpE2tZjEiEsNMFqn2Yca9KxbZgPKN9iQ2RmTUPs8wT514ZLnUFpTig8vZy3f4C7b7rSMzzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jsgUWa4vJsxtpARxvdWzNRyVnZJ3E6XAcMV5m52GiXssXszhkRUHakGnYVSMoWLwa6WMYgsDMsRFUCwhS9FjD7h",
  "key1": "5B7uqjm59pHGBVGZ3jJph7hBV5T5Qxd8a9FuV9Ei8PCNd7fyrTkbwx71e56gBSwQTsKLQwMCxSbVNgieQc48AC5z",
  "key2": "3YzyDsgvPZBbjhdvwkAdcCvS2an6UjxSEmG26DLnTK243TJsxDeciGgtMJJeyshQcBk8rNe9yFHMKUaqXdYKeWod",
  "key3": "4UX1PfDE2YDxJf9sbjsAYUrKciXUrWfQ1ymDabjZYYmBSWT5RZAN9dqBmmwKMLgXcL3ejac8vTjqgQHoferMF5yk",
  "key4": "4FCT2tDiRhrZompJKv4cRM1xQinUf8aQ9ryv9xkZmbRKNLNMgY3npU5jXPg13UVxPLxHpEczfNbZPjhw2jo1ofLt",
  "key5": "kSaKgD4B4HZnphxoYyaDLL42wa2k6r9skcjUddybQLiZvXoh8wUQ5F8uBLY1qK69WRGDMUbp2UMBqfAqx1MAMxh",
  "key6": "T64K7ZBSgtrcX3yoRDKMW6TB9ZpoAC99FW2anG2WwJp8SuKr7ApS78TtogFmapwV5737JYL8N9Z168fUxUVy2Yr",
  "key7": "3g7jLsC9wvLPjmkGeMhxfzX9aHcNt1xnd92S7AMKqcZsgHcgE4FbTDMrfTmdjTNiXK48UXKevKrxU9Lfmb5StTtC",
  "key8": "5wGoHWWCCQZgg87EL5cHkEp1XoA9kU4swss56YHx28GERzHZQPg2mVKTJLyfmgbE42Bb2vuCTokLuiSgUZEP6CeQ",
  "key9": "Z3LTq9tK4bReCx5vf3BMzkiSEKeXR4mu4YUwpvzTMZkrxRmYCbN7gL9YYXrkgxgr4DUCtconzgfk2Ft4GvHPNKq",
  "key10": "58EYKDC1LhJwuJWCBYnazdmispDx31RouVyxtm32H4dTGJbxohughDBnHSPghFuwjcTUWH4REEe3jcGqwDhgEtqu",
  "key11": "5wd8eMbJQn6HZP1Cp5rpoPdAGkzSJ9g3LCutfGZCTuXG8HFZyTMC3gDxCApunR6AAforB8TmV5njbUtndWUsuQEg",
  "key12": "3STD6nBFv2eo1HGnADQeBAquRf9AwGQKeSuCDxA79taWi2dQtr2F9UL5bTKi7NJektMCEPFtT6tRiTS4nfFcR83j",
  "key13": "5bhcH7dR2yEoUirE9veRiPVKbKDdZrsYRu8A4DW79aHL5xt6L5aKTrW4zCgAtVNwm6setdiFEXX4Rrx6c8ndPZ24",
  "key14": "XjRwkZ1HDYGpXd3HPViqcBvD7fsbj55z1vn8vNxpBJdCHxJ1i6dp8TZyXj48czYsV8rFLrWP9f8ytLpeL1XvThe",
  "key15": "4k6EuxoBz3sTeoxQnFAX7nATSX42ENY4uxyKHNqsrLrLSa4JSEXFbv574F7LTQEcLkiQpp7EYsF3CbpX54BDxojL",
  "key16": "2roVLKY2QWDWe7ukpVT2tMD5Vx4dFBsTzvaaWuPYxCEFfELVWeq1dpcw5PBptTrCP3hrChx7zEHWNNRL8ELY1qv6",
  "key17": "65D9RzpwqZZbLiin6QigCbieVgBoMZELdS88gLbznXcfAenSccQPexWbwDdxbDivs1wtjRZzeXJwsjgqiV2HJn9u",
  "key18": "3hCcq8Zs1ySznRwJn4dJocwfmHogdrD8P2FhVroLfQ3bQEtSd1ko9nrT3AnN1ArJ9EbADA1v9bmBc9SMHmaL7AFX",
  "key19": "4B2eB7W9XxaXiQG7nmtrwoX7eNNngahHmaebXwicUvZUNSe8meH3EkgYZqvBWA4FrfKmRe2jhVDpBqv1qHggDfkW",
  "key20": "2h17QpWkcFhAuFm1X8JezpTTXBhU1aAiJqTgdBch19W17X1z7rQUfuE4KtHcavpwPChdzzp5RNg77kW5siV96Gbe",
  "key21": "mQm8XDnTfdz7LrDFwLjEkbde8J3CioiWznbs3evS25CW3xNrpbPBkVW1zgsgpWJ2ksbZF58Cn6gz9JTurQXGYvL",
  "key22": "59ci9dyqmcoHK3x6E3KHnPGSwjxLfAuCP31DT6U43BZSM6ZWkwwXe33vScjFCY5LrmwzPUda3mo4CmM6sKbpFhVb",
  "key23": "3WRTuyoiBogVqdB7A7fgzbYrwA23jG9DAetWjMwa9w5FWd8auogzWiTKUVv1Zy8HvxGmUL6W1MFUDu2VzSUChq6d",
  "key24": "kjaoqK3a8rAFkhRPSDnWHn4LnL83feBxCUKYdnSXLAVYLzngmgwcjFMaCBHK5soicNyomzeN4d7UkePG14Jj78m",
  "key25": "f4qU3y5pJGnErmJLpuZXHE4mMWK3SsxkoutnAb9XsniEbKg36KVH9bvoqw4ksntbVsacTwuHP9a2vHebJBiM3Xz",
  "key26": "4454XMgWrHGLp34nYCLjbBrnvFZwKZu4voKiiCsJk7be6TsdC4142VAZVYRp67GUp7KfQjyXPGBLeMt54vPyZtwy",
  "key27": "2GqksVNgkYndGR1bHD47SFtWjQTtaPQ3nKcfo8Xx5ia4ETFM7RXjTHuTZMGQwEnp9C2C74GoWDjVqP9WbyStVoGP",
  "key28": "4pxXSYqgWg5hzEv43kUXHLFyYQYyV9ztV6wknc7FE1Atkn1udkfc11BueTbDmYP5r7EkDaJba1ya8UchRc7EKd4g",
  "key29": "4FgmX2kH97xVA5Ad8z3k2E8i4eCdh2KAGdZoPF6AEJd7rk7jyWpRaT5Hvk7uuWEhHYHk8tCeScWPgsQWWqc7PbLe",
  "key30": "2876ZUFWBWhKdDBQ2i7KTAxeSdvVp7PcbiNXmUDnvkQedKxus4PFnrNV8mLqdDzPvQmqNUi1RG6ZKFs7VmXte4AC",
  "key31": "28BeoyRXdoG2KoUZgQadCJ2FZoXvo9TtSJSGoPLg1NmEGBVs8kUGNE8UT8cxFEZUhcxqNNURLphahHhz1dPDN8qT",
  "key32": "3N7U4Ph5i5N1XBKB19WdEc5NhogxwFKsA56RXh7Uuyvsjqo5HpiwXEtfzceUQ5FSBrTAjihJL5xAeBkb3igRCEfs"
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
