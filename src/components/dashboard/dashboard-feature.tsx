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
    "3bxvBDqu6APPDZoePeCFTJwze6gQq3DnFk6tG3ZgaS3wJ1kxHskgkGF5KfKEYpesP7kVedEWNGNdVdXTFtEQP2o8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UgU34JvAJrb6WR5WGhUB81Xf9s5QxZMm9VnZj1KuHYQ6tMaKzD1YbMh9rwgVqTfGJdahhhTMMFbmSWwobHjWxW1",
  "key1": "545dkdheQsL1MXoqgg1x4xotPr7nFqjFLYTfUtTmxwWXtQVm3VPTHkG2zJMc6ENk9nLZC5n5Hep9wjv71v4FXyXh",
  "key2": "4p5xuVQKCRe2faFGibqpaSWYYet1FYShiynCDdyyigvT7qRMFExRTmvy3YpLrnmTLT2fEzpYF2h21wVbB61FqUDQ",
  "key3": "3MCjENVjFBbJ4nj72jKtb33GJ1BuXJm1RMyfvSqquBAgVz4SJVdeVEfxetaEXREwbcqPNn5vB8fepuqgoC8KemYW",
  "key4": "PdiourmpmUFbTRJkDkvMtZLQoCiqZ33oKPNFYEykyXjkZkHKGtN25U4dgZqpSpsHRrqLYhBxwSdPEiEHXgfs8Jz",
  "key5": "54pnsWZv8LtY3CmxB6uHv9bQNJZcH9NVCanp8zyBpmE9HZshfnKpTSMPPFEAMwAVZS4Vj5PRM1DCpSN51Z4ErYSB",
  "key6": "646eMF3ZnG239RSoHe3mWdg4spPKAWAPpDtLa6YDA1bD8vUxepK6DJKBVAX5zbeKFAjoFBXuMvRctsaH7KDwYEQ7",
  "key7": "5nkZrqZxx4fgCRbZX7bmrSMtQjYyirX62V6krJJVu3qAyraNVhKhkgSpYXEk1QawuySdj7EUd89XCu9FuMzp6WD8",
  "key8": "4txZGkj14f5kEooeCU1ytsS6vLE2MPx3gqTqsWF3SmvxcSSgJndCXXnpBKHxhFV9VXVR4EQSSyDKUVSkDW1B2pei",
  "key9": "5mznjH78GRu8WQgpJA6L72iyEZgDdE7feVYzBHW4MLsAFivUZru4J9Hjwv3HUKFSC49bZmXVMbEie8Zpxyf3jyhJ",
  "key10": "33QkDSBwYFX2WAipBd9q71eWRsaagbhNBzR4pdCBMFEPpemkaoCfUTshdcdS9NDCb9W8n5mewLYiHXxagK6hmfig",
  "key11": "4DMSaWP9ZNLYWdHXph6794VP3oNvrWshN2gRdYVY3QAugJY6Pg5kn5x9XU2WMtcSAYyoq8myyqiNMw7VohVuTCmp",
  "key12": "2fvjZx1Y7FZoUmSQ18X2Fq9DXepgbXVqti2dxzm4zAgFTFaNeTMi7fmwz8drcrV3EERgktXhFUA1o1Qid1mxPJwe",
  "key13": "5afGT2ayatVVcxYHSutWgLYxkN2tP3pmk67LgeN87RYXSs93CKhwSvNPwHbHihVXqiPNG1S83beSrjSpqhbDV73e",
  "key14": "4j6azfotSiBcDvnA2q9u3xBaFYGLdtS9i1pKNMwrDQXSdAevMZMWvEt3Qtkw3XPkJSy93L78MVPuSUvUAkovrtDL",
  "key15": "3A9phDFkRjigqUmPGd1ondieLcZ1h14E5RzyYfms92xZVLpiVK4bBKKRGQSqUxoxPv3guPkiPLPahYzHnurUqRaF",
  "key16": "3DMYcdyDToutstnTKFFjxX5ooCzy1orZr5sLKCS18ofm7Mi7HHFD5vR79MCJyWDQmtZTdibv98XNcGvMSNrfALPm",
  "key17": "4Tv63JYbAkpEAhnCQ7cMLEs6Hy4BYp2NfA4ycf4E4qx9wLkoDn2RUVjBb4JdfUQ1v4T1tadGyXjAeSXuZjZEVzGV",
  "key18": "5VbaSDYKnK44rD32Dq4CfYye8Pr8QoYFRKUkt7kc5eBX4jvt48jwhVrRFGbmixorv43z2HzKUSYfc2QHevbxzCLt",
  "key19": "DhFs5hQe6RYJDXDKz4Yk2hbSJeVM577g8UvAK5FADxrtKyMMzcvxhBYZN2mNyYv5CLqxQWKFgxn7yPJC4pgkpVR",
  "key20": "355eqrzZw1wQFaeUzrCsczVUx9cvwqBCp3dL2wdX5HMExBayAK1RrXVFAFr9CB8EUhcRPvfPXatgTtiCogrvwWN5",
  "key21": "26SmsgN35a3WeW1w1S4is12fQ5bSnZer74Vf7ougpgTTG8PXTXnSJm3BKtU1peG5jqJDwPwDikd7daDPQc8jbmaV",
  "key22": "36RkjoFp1MWVubmmQALXhXqceNUCviTHjeqbFuiiemMhSqWWySGHc6JgtjUQJLMf3aWBudBtZQd5WbieHjeAVPJg",
  "key23": "b9zQWbKHpoi8CY9YhRY5GhRiU6pobpDdfQ1h2uNiprrUWHraFh88QFLCdfVZGaExMrUdnqzhTDGNUDFqB6wwYNk",
  "key24": "5FRaivEc2omtfnBvxkhFxY76qfwRvkeBNuz4DfwWpSDbjdPdha4FCSsjzorK6mJ6paS34KZZTWrNqhYVFdg6uWXD",
  "key25": "5apP7zXBg7soqWvHwaKp1boEwNxNsGrudvGwwoQqsKR9tgAQVczA1DcnwsNVukab4usFLNAHCS19486TaCn7Tp2h",
  "key26": "3Jzy5p8aQcLmkGPKR6Ak32hMaHa5bJufwTtx66mtKvZ5AhbWZEe57qbVybvAmwRGREW6WPbb8VxVpPWB9TPkCDA9",
  "key27": "LAheuNvbHmkhbsP39zBrggd1Ae8iHtUHLUM4P217toFddUuvegV735dJfhujqbfC39iwN8m4L7xby2GKtnN9GYo",
  "key28": "3WNsFBzxjDTg1hZ6KsEZSah3zW3YTJyzdqH6tAcNeFcTg2GWeQomzz3Sb8LeGyEm1XTGq2PKUC6WcnAbPUCstznh",
  "key29": "Es8b7sWbfVwVvggNos1hBH4in1Q1MgWGBJ8dz6UjrbL6bNPmEHVS7NgXdrSrWGyevhks4WY9hsS1cQivHypszDT",
  "key30": "iiphQ8sAkzrqtQTSjJp5WzaUbgtKt1tEr7njAqyb45bT8bFAFfUfbJpMgEEXGkmbb1hjpSGoULV97Yv3Mf4SDyP",
  "key31": "2CmR3VQ7vcDQ6J7GwpdN1cRdSJQo2YNQBpzmAurrdKaa7LE5rCUUPDChT7GuTGwKcTzjHNesjZZgAdotp7uxSH2N",
  "key32": "2bwqqhbwaFhw5hQKSGNLhPjySiDQouqhjwe6kzUzoaBtn5eKu5VTwQfXGDZGuDMrGmiqTs4DMDpiSQNG5mBgnqr5",
  "key33": "2Cyxbjv4fcmhSWmCCa1MBLKproiE86T2xFqQM4yLmuMHH7ChQbW5DZZP9F8SRmYYY7XAaMNaSGTtYG1NUykegahj"
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
