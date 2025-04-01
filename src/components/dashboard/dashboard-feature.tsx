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
    "1YbP2RJXgJw1h61AQNbeTJG58dKsZXBzpED8Q36R6KcLtVhNvzjv4mGQv4fECgCGprWpZYwDC3FS2PPdp9hXt3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57DJC6NAcirtwX5NowdWcJWo8iLVVnmBM5mgysMUEysHNeyx2P7KWBdTjjj5CFLnpnHiiGhUu4PZuDabaEv7oT4s",
  "key1": "52qEMq8wCxytCjTPsE2WQgEfL8LbSJq6ALH8y1zEVWXWGv15CxMEZPqWzhioSaHo1GXYEgYiVWsZLnSFnjMb7e4w",
  "key2": "3PRZ66VTe9WPBQ1jWG6335EEoRKYmzCqUWK7N19A562USstoZKLUsgZ5g83FkppyPZHLF4Am9LLjNKhaDnfvzBm2",
  "key3": "5EdHRtp8V4p6fB1rg6aQNjuqfwrRLKBmAAhLMhxi6iTv8MtZAAyDfc2uGoepit8eCfLy2c6SpmJGSWmbZBPH7fpF",
  "key4": "3EHsQ7YLvHhp2MgfeVYXBwqjgVnLYzUbsiNG4Whpdx1pTFm3QKQXB3SxYW89fCgHCnJ1LrSzyAEiC7ZyBfiwoE6q",
  "key5": "4tagu3XCJzvajqYF9mLsC5W12gUZmGFtet9RrqzZe54iCcJAkYsoGZNJxMdx1YCqim4Hdd9qzwg7dGMkpMUCBH8u",
  "key6": "cSDpw7QR5GZjjMnZYEEYPKhJGBnLgeK261ELAczwcGFCFUXQd6uJvqDcXJVNSHH9Nzmm8vVmM8fNZHEUT2wC2o9",
  "key7": "63QG7x773kEQtw4h4D4NW2s3ZKYQW2j5ks1k33wNUMUvV4Ejx3Uuyeg4ypz3TPkSS3VmficgENUzcN5kinLVLCNn",
  "key8": "fuw4N9wRt4GYwihvxRmo3WmQjve8Mnbb6uXtYArdCu3jY3Aof9wmkofRncvNZLhGXd3wfWY5BZnecX1QP5L6NLh",
  "key9": "5TQmawG9vUrruo6M4TRg5fwbJsM8bNAq7N87zR22AcTmtAW2UFAkQBDAaMEqDZ6mDVr1yHFivvbvr1pgE2imjUZv",
  "key10": "2XTjhJe6MQv7np9S4h2vzY8N9jpau9nuRfLPsdWdaQ4nK4bwvxEXAeVdoNkzt1V2GgG2ZGxUKPcuRPAPRY8Y1HKQ",
  "key11": "3nEq1p9GFByg35GC7sJ7WHQpCgLUnL78DG8BWwhbuEn3eTDVH2S645fo3UxCoFod1rrcxY8Pywi8rHGh8SM9phbB",
  "key12": "QtvSSbRyryrikhTNUMcvGgtTHmck7NBGJHETAGovss3ffHLC5e8VwV1WK2RfoLBtoYS43yjDqFm6hPeWgpz1m4E",
  "key13": "5PdxsEPxW9yjhE49cdiddeCDiucvDow1YrGJZt6tjWLEBBDJZNhDdyzxa8EvqRhLGqsFj5jYTbvrL9RMjivxo9fk",
  "key14": "5wnhvxChLSAyYRVaQkVcYTge4WE9DbJSPVx4b6svRMrQQSHxDfz8sGmwLw6FW3k3JSxjxU9MrFy9yC8DZBHTnxz6",
  "key15": "2zTiouJ1TUXHK3wJyXiY6WHjob9drYFNsjKA2mbpQTGuGxc8BgTUjrcjEJKgnpCo8xkwwjCsFGNYjzPQeWeu98GS",
  "key16": "4cU7WBTYzXiF23ypAp8EFh75BxS7hy9bEqD7ykRUT61hgBxHLfgrxXGaDRguiYKaNZAAytyjoAr6SLsDNkecDXjK",
  "key17": "5Dw2uM9CdX3dYPNVCqoVJCv94nZrZHPzpHRuP5TgmdES2PFVL8cBsmroEGQzg6TGECZZKGRhsPJMy3ZvmixXgoUj",
  "key18": "5PficMMpmFECDAAW1V9JnKsuMJE8f5Kmm9s62zro24YmGyEDe4pSGjK1Jrw2HzrBRMHydxBjSGNxdCDfnq9Zohw1",
  "key19": "3X4tZewKCwpoc3ZJk7Ag5Dte5nePySptFNHKhp4JPcZqy2zRLf2evnQgisSdhWUavb4pXegWuN5UScTH7BxGtopM",
  "key20": "bHPpEiNNhfk5DGN3AbR52KrBdnP7oapAgvY6ypPDLE8x7b3BZ8EbNQK4keVc4NaFx6TfZrMzZQjfZrGZ9bhTf3M",
  "key21": "5Kzp6ZQt7BnaD5CGScDtpQmCEtoDiQL8Mb2sdNjJjUeyLhYaJgtun5yMsaHN7abC6FpTSa4ifQuPaBDgzaqp9fHZ",
  "key22": "4fuWswjF4zLgap5YPzq673VYh8eKf4n327gFe9zNq2449rQtSBuzgZGwiXd9aoxtx7XVpdkbTQBUvBJCMbrYwntJ",
  "key23": "5MmAfQEAsKEufmLcmtafDSbvQTyNGzqQA5dHBr8wNGaysrywsn2AmAcfu4GAC2YUvNEQmnxP4gv2A1QF9rZddctu",
  "key24": "4tPyVLGBBfE7zEw9pYvpoSDE3VB3Niz1494w1Fc9rJBsUxV9tdvVmynQxph958eco1WMoTD6toLQS2JERPEX8ENe",
  "key25": "2EraWFKgYb3KA6uDc6TisicbxJhRrJTAbR7UrTUeBa4uyGR6XG3JNjvw8nButQ75p91V38fJZni1TPrsWXPiHxD6",
  "key26": "3EqtLPrdEFvEdB1UPnkmc3C3qbXaSCwYRaG4HMZdGmoUe4JuHDxxTZdzk1KgFnUSgG3mBznYYzXcfv1hFmfErBX8"
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
