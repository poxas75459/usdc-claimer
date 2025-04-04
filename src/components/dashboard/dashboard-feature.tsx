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
    "NVEdbnyQidYuuWTDYBxx27sLmwveaesg1qEyVi3ubxMyhfacxDqerBCCn14F8heqN2gp7Vzn7twXS5TRyBtBhhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tVmHaPy6tgfMtR3xne8usfEavNsuRjFjm1hXLLsPKkoeb8fWgL38KvUfbkQxNNCaN5c6bwBZNUFV87dyU6SLGh",
  "key1": "8NbYNdbs4MRknbP57AswMP3m5CGsEMK16SdfgrEgbvJ4Z92CG3rrZt7LejkBrd4VLkFsFKpkx43bid8sCYUXHLf",
  "key2": "2dJhn9wJMo7UaVznVzRsg6PNaDHGV4Rcg6pxqopUK6VhRqhEbtgB1RdvE4rmreaRMWsXPSH9Ti58nc5FK7nAUdi7",
  "key3": "29rWbno3FfqwC5RPSTrPzT5tQGGzLkVs1gM5NffdxgSzw5CQcoBdtncCUqq9AxUHHEgA5PaD84NTXRxm5hLatobB",
  "key4": "5HzjqfKVeXkKU9Yg1b9bFPwgyncLPV5LsfCzxfDXArw1KK4HXrLdQvdnLUwq2HpKAfpnTK4fTSLbJ9uHMuvjkapa",
  "key5": "3cDbQkKFYMWnQ9aLm39viU2jKA2p5HyGgTS76o1jjgDGGmttVzN4UUC4WtkiqcrduAFA9r9sYfDv8NPp3rkwVihx",
  "key6": "33usb2Y6Me5QKGitLaBSXsozcUAZd4wpJeBZNQ9aPTzmkvtTDaPGWtJbDePBoAF7hysE16WPs7XgWLVuz1xMbmC7",
  "key7": "5xsfWUKWu5rXC6YRCEPircezEMF3bK48aEGecUUG5dMeZDnc5RVHVwGaqKEvm36kh9MxHFfJVCHX7KopMkpmKdKN",
  "key8": "bLw43BSt93vofVgDZaGb9eZgzmcfrUQvAXcp6MokPMD9tXb2wsY8YRzF9jEkM7aFvNHvMjd5wqmFhZiFLFceJmB",
  "key9": "5PbLrk9H2CyNnRZRS6mdn8ywj4RcyxiJmWnvDnqUc6666a4E1yQXNuTqh3PAHsQNZS3Tjsb5DVXEkmyr67X3x58F",
  "key10": "4bWEKkVfjH9ckFj3UejqZvN8GZYENtMhxhfwG4KgfNtQpSHiFmsiv8DsbJZFHpaatym6mMDMzqezeDJG3A2pc1Fi",
  "key11": "3UR6fA2wuqYk1k8kAGruewhDMfBiC5wYob8Fyay4QEGGMLiVcNFRdTYrWde8qdjAU6W9c889z5JkDk6RuFZP7ueT",
  "key12": "2FPf8fsWNbZS6n5GbN7qY2q8b48JMqCPNsqDAUYvPvwqe1RU7fRhQBeL9D8mLFprkpe62crY5zVM1Kz2cCYXvJkv",
  "key13": "4m4HrP4GyxyCYWnvrLrT7SeXKVsV7BeSqiNtVHtDXswsHQbVwTCpQYQKpKecvhs4yqbWzyKESp13GoVkJCYJQRNx",
  "key14": "46HBSUsWTkvXoMrw4zEog5Vp5wxi5MCwUxuZX2yxy18HpmjwzWqNLx1AGXjUWci8eWd1GviwJbZzjyEQp5LEKsy4",
  "key15": "VJ1xASDnytzjoSLpDv13AdxdE6kUSaBZQtogZmb7emnSkUFCh1iMXUZZhP4GQXH7KAWbJ1D5vftPAogmNN4giXz",
  "key16": "4V5NER24en4qg5M5bQV7AfotxKjRpqKmXmqwKEwNzR7WtFseenXnZBAFSyJZBLyuzYJT9qdqsiRupa6Lcsp2fjvn",
  "key17": "56tUYVnbwVUdgwspBZY2zjHkisbH4QnXmJABMAa2X5ysGcCgc1k6aLYWYGuYhBLbrENBoYdA7oTQ2mTfd9Ghor6Q",
  "key18": "4Y8vAchsqjnCTkTkeNjeiCcssxPUmQdJHkTQjbVeJkXtNSGBJQhUYSGhVtVHBAEtqbehWtYW7mjEV8sjk1ubidH2",
  "key19": "4Ji8smVZJoximGrkc445VztUWjfSHVXk28Z1SxhpwLYdEfp9AbkVgM5NqEcbs8toz4VnquTbgh5PzZKRxgnKFBW3",
  "key20": "2J6q1CP6S35csYQEYogSEYYyvJRc8MfAYNrkfN8Ssb2c5Npr1CQAtVPHU7ESebTZBC5gCLdbv67Ba4QbtY2TxbXJ",
  "key21": "yvjg7DrP1oQamYWsejaqxH6ZRsmfHL9LfRHUVtc8iFJJMmuT8QQPtnsRmvXgJyJAJphAugSfyywTM8K85g9d5ia",
  "key22": "4Vh6UH2fzSpqU34pL1J11eVY8UzvjTY71DZH3MhLSmzEwZQSzUTJT5xNHCpAEHooCKCR3E1up22qojiStZ2HbEio",
  "key23": "3Xxhtz4dBtHGUsNWPB6qLpfdmj5bqxJ5bZPSaHmEUStae8wR7bTvmRAXFKuDyRV4e7xrHyo7j4RWto1FnLURJrpn",
  "key24": "3whYskbTCAB89Q5gNYbCmMEE9g7jpE4VE57DvQ9LreicxbVcgNWEMCuaM9L9pxRFwpNkCTqgVeqti3cC43MrkUQP",
  "key25": "5GGSDQjLCU3XW97D5yXmGFKAJCpCch9Xfszz1yBKbRkUELhfbZZJpM16SE7WYbrbNRGPtcanaYmX2Hd32kiDmpYh",
  "key26": "4EsMaZk1GbpW15rXRT9itG172RrJmsjufX5LvJsVtpwprSxsPs9RBaHuZnm6ASM3Jm6zLv56ajhT4XevuA5YkDDS",
  "key27": "5iGtHNvLhWQrkSo22DZUZa7t9kswupjf4MCmMqesEe83roLaKUzjc94KFgrvNL4rQj5YYBYCUbGas9SxCAGtLQ5W",
  "key28": "Y2eAbt95LeLwY85FT7xvNmDaNic5HArcddLNmfeFBubbJ86SJMwNBr6KqkG89MXvXsSWVxi6z7SCGuD35RTy2Ch",
  "key29": "5s5Ds1bKMcwaLDXvh9VxNGMfVziYwGANactRZvePC4Mat7yYxmpNVXcvjjBaEgfgmmoeZCFsdkzy6GfJEcAuuHtq",
  "key30": "3QhNWmLmQRpR8Ra6Y1PRteUzurtDaeeFPKecrBHS1qZgr5r9DL9RpwkTnZDTQKX2WHQ6eWyftN21aQ6M8XNgv7hL",
  "key31": "5pZTSaxRNMeDErFj4bqXj8KAZkeosRKkmEfqaSv7YtCZ7YBURivZCmuC6eQ7YKvUyvG9ySDG7fxvRMFp6XK4KcWW",
  "key32": "mUpMPpjKrwnq8pXecjKpieJpz5Dj1Xw14t1srcxKpe1bfbk3E19dfhsWRDqU6PiZJiH4ZKVptNAFFQj35gW1Vxv",
  "key33": "2TY3mvm6mbvD2HRM61zMn8NgUZg54JNsPKkue9F11JPhehMUwLciCkvditmHwLuVTpB5RYUYn8kRaaUxzXA6teJo",
  "key34": "41JL8TW4ekcPydgauotm9e9oJP3DMRds4kyt7x1PXv8mQQcsqxxA9cHbsWwwYzz8rCwTrJ6qygiZsznmpE9zbv4E",
  "key35": "44YiCMkjErdP9PUtXBqfQEUXboJxDxydYo36TS647PfxYFY2dztjaqNKgu7VrMPAkToJHGPG3Md2J4Zcawixt6J8",
  "key36": "3oLCHWKwugYBzu9RWG6RPnmxWAWBNENobgynEjURUkefJgRcmb2mX7ZnkqoRjD3F4GLTZPK9CxECq4bSo4bN5rc9",
  "key37": "4tdAzfbUN9r6bM3oDBeJwww7rCgcdDddfPeZhApYyF2Vavo7YFrLx8FTBBYR2X5zQVJMc82SdnRbF1cKjgtSgmDv",
  "key38": "3W69Gx3N6dCDZwaWDgGokDtb5CbJWzThrBgv5B394GWKGZ9PGcPrMJEfgcidiHpJecQT6sMsQLDHX39u7VeAgv2e",
  "key39": "tgXnPTri7CmhmTDE1rza4pVHdEYPQAGwR1s9U9Za6YegdcT1zomjcq1BMky8sKw1MSSWDeDEX7XvahTN8vAbdXw",
  "key40": "5k7RANg7YGMMEaAaXQYNvCKy4oEHdS1Ark75mhrGVU3eCBTc2KQCZ2KbFGXFXXbG7D7upDAacGj98rZewmjV1Zq5",
  "key41": "4o1DP9wdMCCjsQSXYHt26NJWvdUMFqF2pAUgLvvBhK4hA51fF9TTTLJWvHmU7dh3ZWGFn6KnfyebXNnBoDJoTGF4",
  "key42": "229v5VCzd4pR235EUTjFuS8vPwwpVDkZW239e6xh14EKdR6AJW5uuuUvodifF8ftcwn2c77RgHhzNfRQo3nz5sBX",
  "key43": "3UCYsRKQxZfQN1VyzHhrjDWHyfSZZRyaFF7jUjsy8HeXjyuuZ9m3PYpaqwc4gPhPUYQEwAgFRZnRqs78GVWYes3E",
  "key44": "jbNPVESeWegomJR9spDWBYhvqrhFwYz3pFVrPVT9i5aYkCa81pj1RNVXGr1VXXRuZiJ3f4DtCH3y1j4hULsykYv"
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
