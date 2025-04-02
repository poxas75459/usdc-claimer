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
    "44KkAhMa9gXBqW5ZauaGyMQSHVpj27kigKXrX2dKo5L95NaeigDm5zzwpBbFBZ3pk8FqbLmZCjrSzNjXAtviNQ3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yobbyBHUv9GZsztTPhF951SosXzhGRMjZpnkwtqQVncMMgYYfz45KUZQWoGQ8f3YLESEnj9YkaEVofMqyW2X43d",
  "key1": "24tHnpQym45Rq8BjK5ZxSm3Hy8pNbyHyt2vpBdFNEtPfy1cVUW7JavFZnUFz18rHEV4P3zi4ajWkxXE81WM8n11h",
  "key2": "5rfHnbXpSKYNvp7feZ9PVoQBuJxRUbw2hZyDufjbvWBKM8H8WGVxBgViGANPakaUyjixJB7oUD3FEL7vWZMSLDgi",
  "key3": "3w4R3p1hbPVXA6SoBKoyW3PND5jx5w6MD2DUiNqajGitKSnDwWu8GL7mX8CHQVGHbDGMZoFxBgKHBdGWmLfDgdGF",
  "key4": "5ynizk9bEctcsbMQMb2UZBTxxeircDbJobbUGvsKppnn8eYzdwrcEwYXzRo6WMghhzGFtNzyxmfuxekVBae1JbjK",
  "key5": "2tv59BR2hieZRQyrby6QJp14HPo69fAGePMsiYpvYoGstRs9YmHmjA1TZNVbdamWmQ4b5vT41u5iiH51N5df5NuF",
  "key6": "62A9pfGrhv74VW825fZYXSYMzJuM6bksk5PNUQo86LYeL6KfcLy3xuDhEGa6D5odyPFuBqqRxRtmEsxwRoHgJ2hQ",
  "key7": "43e9PdW76f5TdqgCbSZY6pfszytdzfJMV3C2afpNvGkzw4qMUDKdcFYbTktMujWnXAWEAPf3RhQsdv5SVpHspk13",
  "key8": "24LcU3aJs4fkoPoR9iBnMWKrh9qpTQttFxKeayQcZcJm6iwUHHPvKMbrKqNGQTevX7szkzf2EwvXxjawpEosPxYH",
  "key9": "4EbdgHyH1UNG43bYeUmhp2FohkgRXgnmTJSNvBT5ehceymk5Vsa1FfvhdksFed3zdWVSKfdBNh1wPppKzF9tbbzD",
  "key10": "Unwo4oaHsMVUUu2VzN766CHDVHAafVzHUkfp54fPYKvACyeTq3kDXrm9ohphpyiZ5uofmksCk7uRET72cb8B7wX",
  "key11": "61rJHNVjsjfRgUkXtp8neWiGyShH2oRB9Zj3WbDP5H2ebjfhgTbcyarXYCHaQpmrsXPqDmY4g7KNSy7McX6ZApjL",
  "key12": "2LxrB9pcDfpzBfvbhsHTvNxfVGWF3Z7gbohzKt3LFwYjQbSMwya69pXNFCftQuK2vcs7KpLiEUsqVadMh46tNLUT",
  "key13": "5cgTUnqAYkjbVqbJ9n632uedb38d4WrQXZj4gXHWuceyRavDTWZTScS4qVLLeLDdsDc99hPsLPVoLVBVgn8d5ggr",
  "key14": "3TTdM683LQ8pFzrQ7FmDgJH1jZvjNegyRBkfkuBAS5EojCNoj8shRXxqQnSarNs3ef56JpuGL9pdSFsypkR2H9y6",
  "key15": "4d1XkHnAqC8hezoihhAu3BXXm9kwjzy2Wz4w2WG5qDcW4nVDzxZxfxxyNr1ifiX9oGrm2fZVLdVzecig7tLDJiUE",
  "key16": "3SsvpoZCoTeFMxkqrmQQWgKHAFqecHNXZjtW1SPYhEdJnXBYYXHuaYyXzqj9ALKWDMSEczWXogyD1szzA6zdVeVd",
  "key17": "3c8ao5GJRWgNZ71H3VQnJzwyUdqSozFT8n2VMV2EdVgWPZ6MoNMyiLSFnYk53tuXg2DLjvY61tac4P8iUd4mvBhf",
  "key18": "WjAwfs2hwmwzV2poNsvsgJdf6iEwRzHKQ4y2iHU28AWdDwCv4JS783Th7nnJatMsd59S2wyCgojMnnFQEHMD8iP",
  "key19": "MxhbBE6LjANdQmqkhHttwmVj5bhbUTxuPCrkXAThP7fW69RrMCTDC5AoE3WUnV5NzfcHydFT919WdBoEd4Forhc",
  "key20": "5z4bknmn8TRyrmhFtSPUawjELYNKkRqzyTf54rGDNwV1eRtTsjcaHGMN4vQxvvkCao2FJsmd8M7ewowNqzH6h4QG",
  "key21": "5rtc45Py4GRyHPRVM4Sv6Tb8vAk2jRCchvv3635LLfST4uL5Sze8uKUtE4Cf4eJwf7pMFZpmuDhEnneSErZG4fNi",
  "key22": "5BTyN6vDnQtSNUCECWcFMocep9JMVhf2S1weezW7VHAQbfATb3J2YLnBeWPVydUXNFiLHXekvPWpBzRPdrgqgK9W",
  "key23": "BLzDB9tuFHWuDVYPEEhSwfY2bgsuCGgmT3R4PanPELcW23EjPZF1V98LkDKz6HxXk45mHFf6q1E3ETZUBwdbgir",
  "key24": "RK2bFG5h4u23TaYGKs86yZLWNbHn7jBHUrSdDouKyMZmRGQpRMDtRADCWy9Mhe7ehkZ4tJyMfjjrBmmGYokX6Kh",
  "key25": "pDhrxYMmKJZLWJeKAEeYnt1FYSuYuTaPSf9JZPPrkEaeB81Xe8Nkw4NmLe3P9LvS1hgHmGKbV3yPdyL4LPggz48",
  "key26": "65mBcLwUSERzyGyZdiWtRHMhhifV9nG4saWLPRBdacEWKbTujBxo2nxstFyQNSQ71aqAoKKkFeNNjnQGDVEeFHjV",
  "key27": "8gwrXY8TwpDFxoDrbqv2BrNWmJyaZJnRjkzH3oBVmd2pi38YDRzbQDoAT8xgDJuDvgiLvzHcPdgDA3xnDkEEsHv",
  "key28": "3YT1T4hViEigb8Jf2LHTsgvvucCG1JH3MTJBgkH78sv5vFcGtarvKEvKeHV1FFrFemLDZgsw9yX7BhB831YfvKP5",
  "key29": "3XWQmojpMcLn7UHpkWXeDys3fcp1M3Bdo5C5FJJAPwW3dee1oMUnhRxuSkctZgmW4rzDnzeAKKDLfHB4VbcW3TEs",
  "key30": "3BuZx2Khg8LnK4hztNDko7e92r3Vpwp4qaYY72G8TWiwZMdxyxQCAHGrMnHWxqZfcZF15iPj1dQoHLapUoCg22W",
  "key31": "3jnva2PiHpEmGgNa4iuLa57nKKRg6B9hLBsPbnTdcrsU2EVmr2bYV2nFCXTrx2bexoumYtj5ZdNaTkTpfUxyQUrK",
  "key32": "5bpvVmMCq2jy4EbPGCyAjFcNc7Wv64apQbkuvX21V5PnLzvPiE8HCCvQMenj6YQvEqd7uNaqvtWizUnH3aM9shEC",
  "key33": "4nrXaYJuCKFZBvVUNndfqffGExheUjfZGynWnPEvWGznitj38PfktEZ6V3bxMdDCK58skqacWKpE4NSKx8wqSKaJ",
  "key34": "2uBFrqUXYeTV2G9CwaXdwYgDL5RDaEgWXSZ5ornxzvKHEGdsFkKLZkVnbi2gBvrN3aG2DZbdVaUCqGDCHdiMxibp",
  "key35": "3wMm3Tc5AY7iZJmQn4DVmXVF5tdutMEu85pYDhUsjPTNt5hGcQs93xRxFS5i5TMTKwkvefnrUWXtsEn7LyNqb38H",
  "key36": "3NdbWKF1GdYf4vjAqGU9tVPcgXA86ZELkKZqkXC6xkUkFc9seBWoECnFgpRX3cUmDUgwFqdqPAMxiVasShdnroVm"
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
