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
    "3hNwPYojn9nmta2yPsZ6YbtRAKuS7NqEMPoBPPHfXo5hZy5NttZRA5eMqygMzm6PncNcownGvR17mwP4HtheX9nQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFkF1gbecKYi8tGnUJzxg6DzomwGBzGZnaFix2rnX9zr4gvqb7y8TZHTENdJrJZ57qAxfPc3bhFofiL6mm9DBXB",
  "key1": "2pJFaeKRmXFfEZs3jayZ4ieHRgmqbPumiwtGmDRjnCBZEkr1YmXtgJenfWxmfGDUmfQK9PD1WTDkAR9GW5WwSLJM",
  "key2": "bcRwypeMFLziQivBzAkJT2EezXj8SSDrVE1vKy5yfcUPXGZd1J5TD226bchFZCV9ULeaTU5EeGne3uZmTyPiKhd",
  "key3": "4tqGGB7w9iGyevyr61PyxopZ5HjxPiHch4cdC65GETfHe7iPgrBvmHG1WaxKkPeWUW83USrTR1QK7yitHEyoJnD8",
  "key4": "4PioyNAQxLzSPNdF6xYq2bAAZ4xRoENBaFoMkLdrsZE5WU3vxwa9cGxMzeC5FqgVSTp54J2GpXbYypkWLw6bvRD8",
  "key5": "yvbaPU2zqv93vGtbYccDxHrxaLPF57dA3kGupsW8ttFBseBzoxN3irGjuZMJCSyWXmPwHNqU6y9S1MqscU2Uei3",
  "key6": "5NcAmoAaLNno4MpBkwdgDSDJ7AeEBqecxgswtCEfY7Gtx5gepWhGxKH1vUJjPLVkgL4KjbGLfa7T6seBhPKgpb8z",
  "key7": "4AQeSXM8UQKKRSGbLfU7udKGwh5XNkGWicRaN3kyRtkwBzsfTGa2XVLZcgcPkJX6nnSV3Kie1UfxBNn2NgeQBMps",
  "key8": "5q9Fy18Sj7fsTnWXe6Uy9QkhpKzD4XMsEeho6tXA4uskHbLhGJszBcCVPxTkG9oan5pxqqfqMxJDd85sWqhfhzSY",
  "key9": "23R6q7bmQTTn7PKo7YwPp3jc1t2S8r9edHdFfBhoHpKi69aoNd8W6pD7c5SDXWpFdtdn1XY7BoquPfmdjayyYkr4",
  "key10": "2PyAh4cXEM1VMGmVXGkJJgZ42Fo7C88sy5CbPiYA7k5R7GZ9cy1qAzHCz7bGrbn7jnVugzVgFEFcacE7FfBtMzLW",
  "key11": "5cuq7sswKd1jJjxGguofB4h2c7oDskggx8LHRoHjtfavxuLRt9a1cR6ifCjfSEYtjreJpr2So9gkCu68tzA86Epb",
  "key12": "2tEBKhN83k7KkedCRULfDJ39N8H8dqtdw2QASruFL8eW2iYPufRC1Svt5vSNp4qHWdehnMv71QohMMXzEx5BUsXw",
  "key13": "5JJTCmZuf8Svsyaka5vtFW1w3VQUz5yHc43JnaTnJaVTEHesz7crPgH97r921ZjfEHpmTQMinBtpsQYZyQew44td",
  "key14": "3fmksm8VTdg8ueHoM7iXTxweFisNu4Cgn8qPR3LZVADTorAsTte5StsTmAYDuNMwkGXVxxAT8kdq84L6yVGUtYVB",
  "key15": "2RYVUj5VBsUFFEfN5pMoVDtn5Br7qCfd2Ujw9DAmFTLwXirZ6LRVtJqUoFYGJUkyqcACdUaHQ7ZAWGu6VMeNwQkY",
  "key16": "2z8dj11Hf1WoXuuwrVggWneqvpmCMX2MhHLSVPjamtMhmue9aorrk41xE6HNSWYDocvHeE3mNDbfYnyHELTmWFow",
  "key17": "5sP2weESfNqLYKPEP1rXX1Ud4fx79AE69MivCkoPYmfaeepmDPRF4H7FpY3whYtB54Gvdrt3Z6bwVMGy3HLxSmgU",
  "key18": "hW6nBXBfcf5VkX3g4njxTSGbAB4LsnZiDtDNuzXkRMrjkxnRzXShW2AXSaZtazZk9gHcR9utg3nBgjvLaVpyqCY",
  "key19": "3g94s5fvRBXAAh8eqnN7gzq8nXiQqXetfKxbfhfzLJYSJXSoD7MiBbWxK2vkgzADvhzp2374NpUHscciDiPekkL3",
  "key20": "6NrwzSgUrvpH6NYKPQtDMUeFivvNEYk8FEyTtwuAkZvvAutyK2mrmo31AsHEaxgQAWYUx99FWELd4iDHC2mrj7o",
  "key21": "RRaxsZVi75TT2ft7hbgyvgsjL4mSHZd41LSQwAjmVP5Xpi5Fmp9B6Hp2p4Dhbur4D3EbGnpc2vfayVwBvS8v2Zi",
  "key22": "sP2Gu38HMaaKGKLRm5Xkt9v2UpnZxVSDZ4uJi5mRbxY6v6N7Gchppr7yQp1fnrL298Ptqdc5XtRYkbqFAEb9qP7",
  "key23": "5tT3nuALzpgmTbsb1YU1nLFjxPYfHCHMKkD69nrtBWJiQvXA8ecvcd4cZ6LMLqgTAQPPfgRTaRzVfejLM6QXCZvH",
  "key24": "2eS6hdk8FU5dH2nZKG5YF8cezMqPG7RvyvQ6XhabiSwfrnzMMK68Ws2K9hm3B7zedkLfcGyiYjiwxJUCAVy8zy3Z",
  "key25": "5WvY4gCZ7t9NfmAwtsWSoPFo6DocEU4vRtnhedD9ypJSnkiteMGVEuTkGFAnsEKHtSzMTcSJqQ17bZ7gbjeoyA26",
  "key26": "9fzXCu1ZAtzeaPdFzEXkf2Azys9BNJvU3ZejPE9cuXsuhmiCXKCajApXRPezKvFiBnZJLzmo4ftgBfg69dNgKEU",
  "key27": "3gx6BQgqmPrUsYCVuD3yP73tqwC8Hs36kog6dgAMx8QEBNYfhECzPTe4j2HezAJJQ2XTgWoy7Eus3EpTYjWuXDys",
  "key28": "4P73X51vXqLSJZak1xaih3vhttFnQzuLr2cDqTeCSGZDPY1bJ5jmKnQGdV2fd7Us2PmfFyF4eRRQAWmvL35dB3di",
  "key29": "4vzVu4CCEBjoKM2otpaYuwQFoU1pTTfHTore26gUD3faYdc6U7fzYzrSC4FvJnbZYgywBYdF812cQPPEHC9vL2Mb",
  "key30": "297q8UGNit1VgoYYdz5Nzd4C8vWD4UBTaXPCuJpnRbxx1oHLiSuC4FgtRA4caGBK4yRrHNpkUfLHmUgVVmvym1VQ",
  "key31": "PJcxpgBuaEhitZnGqhSxnt9mdKdXXEbGUGV84AkWTFpVGwPQBMvNJEy3wk5Vmun96CRMfcXe2iDMojw2gpDwgNB",
  "key32": "38rSuNSBhz8eZYApBzyckhAm3rLFts6SPVx4weYt6vmJqLihJnAzziRVeNpvCLNdmdprYLCvTc55ynHvGSJ4sPsj",
  "key33": "3yusqY2wGST9E762jYMeQsaP2sT4VYZQy4xcDgQ3xboCMw872NkK6WKBmHWuRCYfjxHU8x4yMQjqn2aXHYff6qAC"
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
