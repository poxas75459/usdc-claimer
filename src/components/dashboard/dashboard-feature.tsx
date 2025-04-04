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
    "5wsXjHt5YaMpCVvb3x4zvLSUn9JYh8Z2hFKxSDB83HnM4dLyvzGpEeovjSRbmff2WDQuLhspGHLxisio1m43nvzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Ly2PGhhKe9zgrqXu9kZSTnM6CBfLm5bewp3LYssQF4xAHks9zBC4EJsN3iaFDdmdSvLJfCKVwaqm82WrugHi28",
  "key1": "4fyVznkpSDnsCq1Yhu791GeR2TXhv8iGz2511T6MFhRGz2xN5tuRRAHgDgw6X9YPx6GjCu91Zfmzn3hPPB9dDGGy",
  "key2": "5uz6LhcRafL9xaBygwWNud7rwSSRmTsZrjGyEWmkgkBxFa229AHrN6QqmoPUDdZAC5KJ4CStLKBQqNk45NdHqyEX",
  "key3": "2h5aPfsNHs4w8wvkK2hecEX7vcvEtTkH4PJ6iLgZdX6qwr4Dk6otNhgbZY8uVeNH3ujnrHETxrwc5fMUpnsed4X2",
  "key4": "zP7CcT7iGVf4Xg7inRSHn8FsVQnBmUgi3yYqA7icXTDrwKY34jDmhDbaRFfr6PKcEk16NkFHByf8qVsEttKtz3P",
  "key5": "3HcoetNM5cZqc8uwjeN74r23G9Bv4nM84AJ98QBnjdW1F5jNDZBsVpS9hFSXu8MsHKWSRyRSe9QfBzLPa7f3Zf59",
  "key6": "3XrhbcnKjphkLfLfqx63XxUdYGRMtbHu4gYJNaeSrGa9yai2be4FpTMMZ4rFpvR8yJVxCTwwznZ9BLnfM95byk9e",
  "key7": "2FdQyRcMNP16kC4ehBXW2x7JUCcABtWACMfjRkfykF9dZfPQwBWArAoBHVE3boUadoiB2RHRDcwwYBFm9yFzBdEa",
  "key8": "55SJR7vWmSzgBmTk5WUFG192P4qrAD7zi5QJ1fckriQC4c95ETaFh1r2uZ2oiYYBDZi438Nnp5XSrWrjm3wpNbHi",
  "key9": "2p9qZoYCaDvLyDuoT3NUuoUYMAUGWdtsvxVTeptfsRRxh8YNPJjhb5q8BWxa76Hjq6y9xH8t82i7L7TABZcTkjgb",
  "key10": "5FdL4Hm86Jio85ix1AZS8SjpnCZHdFGJSPzSo2kcUXqqw33HjhwE9Hiz1AoosYvmm5kgWhkESeWxwGmHBtpBwXFH",
  "key11": "47E6crnxb2tjdUfcd1Bhy4PK9ntJgNfNWgA9qWBMh4B99w3xcCDES33ZiFDdocph2jAd9XCeQWebc5cze2V3wNWj",
  "key12": "2R6TyZz4zGKfsq5dDHwRtA9KuGnaCZBJQfdj1pZWGEwWCWKRyBQ8o5YxHVP1w7qobVDNXkp6zT2aUjN29RhVXZ3g",
  "key13": "4EDhkTdM8ZTULhpuAtcazsDkiJqVxjgi4TxWb2GcTVkREr2UR43QoS4mD7kdCq3yzcbxu6H4d61awyjsfDX2V8Bq",
  "key14": "2GBcMKrEvxBYbHZPZMwB4zMHmDuTEHCf24eYRy5AsTo3mkER6boYsCpWpN9nPE9eZhANnmrW5A3ShPPM89b5MMaC",
  "key15": "4eQj8FPcAKERi1wU9f29Mw9aPS8xTCYEGbqWn1uhttEmsCvRp6bbDhVyFgX6HBfugiDx8iNftE46qQDGCKf8pKi4",
  "key16": "jUNoNjSUNf4NmYu3xeZqZGjacv5B39qkyVgXNjGhyBAxfsWvCdSGd7a1Cgf8FDrkRwQVo5utPr5mEhziQbX1miP",
  "key17": "2mpyZ7BF4VsXhRhs34mPdiPiwksyVHf46rJDYd4t3iAZetVtxdsTUAQgchMCjGrDFKsx3TuFZCXCmnQTqv7P948K",
  "key18": "4zs7SrYMDK74AFp5aMKvqZFriUqrXqGFFbQ5CiuTo2hHVoKTv5Qq9ZZq1vxi2F1HBJjghrn5uGxejNyxYN1Li7BM",
  "key19": "4CzQzF1pn8j5bFWwqaqTHhR7SeL9ZStyvPqjsybSMvZUQBzqtUjhSghufA6WwhF7F9mu1yLV2pHQ8fWaAqeE1fEw",
  "key20": "2MbypJit4ne325QfgqUhHVygAqdMVhDoCSD7AYgMwfYhKu2ZXuQThuxA6LKF2oKDXZFMEgFrm1smn25rQiwkSRKS",
  "key21": "64qp4YYf2VWLmoMJpgWkKnzuy9i41CoV2ybH1bfpHZtvAizFGLPzEaD4kmEznT7ZpUy2dSXVfCmTZZGP1kWqcHgo",
  "key22": "5f8hy2z7FqjrF8eot7Ns5ZN3VonSRZwfZcow4esNLZVritR8ij8PxX2N248KiZbp759EC53fF1nnKh6rj8nn7dTk",
  "key23": "8sbDnDuZyfPCDgQEB3PpEtqT8J5dB9cfXff9bRB7SJxEUD5xHwy4o3J7e5WSfDSaXb3FunPY8CRBXLrU8jcwz2t",
  "key24": "Kzi2wjtJSyz3fBqY35mREhLtt5BGTiKycFcceHxSzTbB8c5zmR6gPTaujJyqdPwGPqCM7thos16ruRQypsB5vrG",
  "key25": "31XCqgx25M6S2UJRZBH2BQCtENf5VEN9SeZRaKt1C4xEwchVUy8UsWeaxgAVMQujSD5pMY5Piovd6wreaMAji2PA",
  "key26": "hyjj7gcnexte6NhGYh3FnGokvi47S75dFsN1C3SKKAgPZLQnS649D87TyLeBw2HgVEthzFnZ2hGoDvD8GoaWe8y",
  "key27": "2Ta7dyoyWjhcgX74givbEmbMWnvqFbBaqQYTwxD98yEzGFgoYCuiGb15B1nWXCzWR4S8FkyUwE6sLiFhtaqq4UB8",
  "key28": "3mJD6p5HiyGfxQpPFsShztKEyp7RgS1WDwPGdW43DPPKoz7UsFgwAX2GNrCeToT8ccxUFBN6zyXBb7nniQWBkSFd",
  "key29": "q65MQ84Kx8P9kqFFpkYZjZd78daj2FZmsQrm5e4hNGoFghEJgf3LrJACpkQ2ZJZ9nfPuox6VnMHPydgpwycczad",
  "key30": "4vfoa6T6mnJQfjtoKRp1ehWPsGGAQqgwviUTf5UdkGeyGBz7WXGCYQioTSZmwr2nTiXpLQwCRmSNGmsWzgh4LMjZ",
  "key31": "2U65PEmPc1pmmoahaceQhj3b2UmMmHSXaf7vPbc4HfZoKZRq85e1PBLYuRBdWkjyzeAytbgCAtepJPkz7mxqj3cz",
  "key32": "3q8DGUUbLJnSEmApLwKfmPTbHhMyoFNk4gR8WVJq4rnfKjtZB9cakpYyhqFBTAhnD3fNRNwkPyvW3WD9SFUHmkwF",
  "key33": "2HF2YoN2NYT7XBEW1BECkMhye6PQbCyrEUpAGPGvDaErST1tGURQ3qRAeEtUqqU3bcdxYE8RERvyDNZvPm3uoqUg",
  "key34": "5QiWS7BQttUqF5ReSXF4VAuGc3BFjHpD8GgmZ7CCASqdEhNaduTTqwn1SzLsNr2zPnUtHyTQLMBEfXRZnGf2yL2N"
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
