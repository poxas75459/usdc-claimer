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
    "2MEPtAZXeMHx6vnhFdCqHXscvzkmX2Sy9XtPySYVEzyPFreQS9UUyUK3qgH5KQR56WMRMdfoSKXv3w8rASezrr8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fbUG8F79F2nmvvbuTZR9iQctc7prbLRHySXPTu8B3thLJ97tsRbDfVzkf9X6ibD8L7YSMgp2AbbVrpWnkkz9X4d",
  "key1": "pHLBvLhs2a9Lr5ZQ2H18PbMshA9d8sw2CD9dVEjrhv4bk2Jwzr9oRGLNxLoiTsi1fSEZyUEpK6cdwRQ1wt3SqW2",
  "key2": "4YMBYKJ49YCqnEqF5GaLR31mjRJPQs2YoT7pYhcjWyqh3X4PLcWU358NwbF6CoF3dKfV4oNwTjVu4A1SzbMoYnEk",
  "key3": "4YvQNCoHCswx5P5imkd5TBLHsxRVzTaFaUDG8EA4LE6kbfiy1CMTT21GJ7gVGxjLykfQBFSiYtUFTU4GFiiecCMT",
  "key4": "54imeDajYr3ghn4eEbhMG3kUCFe1vy6drwSFLiPHBLEcgtW1mtieemuYVKtRkkgNkrj7CAUgJ92jRqMQVxbAzduY",
  "key5": "2ht7jhGycLDDx4C4tfKYzzHkU7NYxewQoeML4So4JEYXmSQQUjNzQop8CyJ7XRfqYgtHL6fSRajkR6ou9ZcREBcP",
  "key6": "2Q1VVTYyUAAMZ15hYySkPPxd1fG3rSEmUCcVhQpFnnmU8RtsbfzBhAPavm5JboGYTWHceo545yzYhGHnTgjSgZmh",
  "key7": "4wd5GFqgcEAs8mCYLqTM6VFpqYsBJS2jWK6bWTWYmeAtHqqtMj4AcYfZSDJSULVxbrZSc8X2HGiAy4e1zbWnxHvd",
  "key8": "3uSWdNAtJ5d2cZmRL4JtTZeAHwbMbabXn6LktcaEsjXag51bq4qNfyNEpCQgwee5nSdJei3XcxQ6fc1E4yWg91bB",
  "key9": "5sebd7hiufMFrLhhmaEVyGMHBXRS2pA6KMtFuVqf5dL4K6rEkRv1QESaB1cLr1pfYhXeTS8ANnXmYvmWbd6bXBSJ",
  "key10": "2f3zN4M9Qscre7vWWDmLkTae2b34jemj2wXNuJ5CEPyCcuVTxBe2WSY3n3xsd5LGP7EwJUExFzhq5tJnKcBR4Cga",
  "key11": "yKuzXFKX6jF9eEWTcYV9tKCWmJLdk99AYpo4WJAbEdgYkP14xsuDyTverNAeq5rcwjotaxCQme5ef6DMwspYLFU",
  "key12": "2E6MGDwdjujxHQjRAukCWFNq2TG8aZRkZ32DG4xud341zFN4FexoNW5XiseF62ou2Y65Cgxx6QJKpDMnEjxEvryU",
  "key13": "dkLFnbvdUNcoUn3V6DRGrr4CJXfJKKktZnikEWyynnSrCHWqioYMkzmALtVV52DwhN47uy1EC2XVTUDBAvK1uJQ",
  "key14": "4Tzi3s7Kfey1HTMqcpr7aknneHxPDdrP42kigcd8H3txfeEq5dBbCgkm96rGCMsTdkhN87anELkMMcbLGvNEQhB2",
  "key15": "5sPSEkDnTcoQqzw6CoWwYXNwhCodWAZVrUC6BzeUgUtULtgLQj7ieWz9jz4f76r6fxLRSPaBzhGnvr3pxzdhBewd",
  "key16": "3agw8CBEg3D6GgFRAE9BJAQY2ksMF5uoUH2URjxFWVkuFtRpBshFY8s1iS1GLhRLxX5tAvXgtp5wycc7En7GJLfs",
  "key17": "pfgyd4TAZCbEZiJieKwdZcuYapBeAnDydQqLqApXSjQmJNogveA39iud4w1dnXoN4L6J9tpRiZy6vDhbp6AxE5q",
  "key18": "Z2WfV5FH7CdUCcWgp929VkRbCMW6dMif6tTh1wgrPdWBtdh2U5NyrakLPZQzpPhHBPDFsaFNB4m1qpmLJm66msV",
  "key19": "5a5yFqvjVHY7fK5cBTGDaBL1h4ug435Mcivd9DpJs8SWoBybB3wgC2JuiDXssXmzVN4bRYFLPmM1PhK3htUKU8id",
  "key20": "2jtLubUXRgqv7xSovqN2rzDxps5bq5Brp8b2n67Ve7eQ6PEP1ygASG1zYSdb4axNn54JpXBxT7V6Y8Ex4RZcsDfY",
  "key21": "5vKYurs3aEcLYvKuUspsBD1eduZrDGrKwDZv4Vjw5pV5muEh8PGxhuDwKPsQKQW3A1yR3GXpnZxyN2DAwdtN5nkp",
  "key22": "42AkN6pANU4ijH5U3Zk1YLqrVEmmAzfiDEZnJbzgobSzrNbK8bqqy6QsH7MwcTASK5wbgdERDx3Dr5tDHo3K2YT9",
  "key23": "2pLGgAGRmkAWbroBXhEF2r2q53rg7ukkfCXe5Ss3Aj2sc1ZjBKua9L1sfs2yyaRBNMbdhzDW1UMpJaWhPiEr2PtQ",
  "key24": "42tCEYSF8SAr3eqtf2M7aACUNcFnR7uZvrAF4pftn9cGxTVHMh7y9ehzPsVMB9AiW1sVvFNdNQHCSweiL3y3n2sn",
  "key25": "4ZHyvXCwN8o1ioy2Wwt3Euo21droBhHGRYB7yVnPS6A9FoJFCCujmf1WmiTBvvSA8UnXvfE1q9FRRvn8vGF8An7r",
  "key26": "DFPM3verbyjwWnZcP1tnDxXmEV5qgwGFMUdWWTNm4v8YxADK9VcVss2x7pDv5R2uyGUiEaNHBTkJ8zhSKWbSBTN",
  "key27": "hNFctJim3LV3jgT4Kqkh7NVcUjRhgXcsfipqNmAKWP89EuJKamZcnmQ96SnqCMYsXAAxdJdiyCchSeDMf9RU749",
  "key28": "4bcJE8ktkKNZyTmfmqnsFyQQ41wYPS11BgCvvEuzmExMJSif5oUjuPNwt9JAPBxpFNoDjF6udZDihZS9KxG1TY9X",
  "key29": "3aDpdgAaeR2zxKTpYE49yodD8aSBamEvxyZaDU6avV6wkhFsdp87X1p9ohqpbofuawaU9AAh5HCaM7LWy4PRjFz3",
  "key30": "5eRKmURiHJunPWW3WUsWsMWyJDsS3fdX44MLJ1kfCNKsbXtJ3w8xFQiACRfDWMsWDZLKMAiRMW8woMLSDNsYwfAJ",
  "key31": "8B6TrnkmM6dSdVjUCZc67mUQsu3nEESfQrW38DBNqDwU4v6Z2ZXN6uPYJN9V2zNapAm46xSFqsXWPiYinV39PcC",
  "key32": "3pfig59QgcSyAYRxCfetnF42htXW1eJxHxARsYFqbKsuJ7PpRZTrCp8yva4HYidFetjTbDQpb65UwF8UPAqoAAV5"
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
