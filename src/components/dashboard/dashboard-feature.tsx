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
    "WCMP6YxUKT8PCuZwy3DMcMyMNguhiL5cSNS4AbUYLi2LKJ9BGSYp9BgZi6mMjqjsgpwkjgxXcTzdt759ZQ7wrSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cPgwBFp9oPFQE7VfbyxVWLyhTJkYxTvF1bLecfQTjaBJKE1YxfVamuc8F3wFpW2nH13joiAzrvuXw95sjjKV5Ha",
  "key1": "WYGKDNPNEjKudNJxDSaSEMowezz9Bww8CbeS46zgDRNWHyzUKWkDTSgRgTEPbcRPxQkHELnYXE2KKXzMUPRs3bx",
  "key2": "4e6uW7rqBtt7G5R9LdkebcM6yHFU6Lq6G6AgWQacNykSFKFHGrz7wSEkqRaLPRuXaH6FRirgVLAjUxr5eFWfzjAK",
  "key3": "35VpuUcPDjwMoFyU8EBkXM7phTNid5aTw5rsrd5cj4kUR3fPjsZ9vvnrg9WkCXemtkxbRDEghkw7zBsJbgk8KJZQ",
  "key4": "2s9CCHfjpduiicxyYAGSgkzPk7vN44M2QR8HgnmQEtafRPDo5KG2LxN9d2YxwBwLYEdsatSPs4rmTq1sL4fXwtgG",
  "key5": "36PghVNx8mAMih51yeg5mrsRudcDVfnhCz7gw2u7soV6iWfXEJtVk72ARubDQYi3cmaemZq2b5RTSUX4kpTTnBFd",
  "key6": "3AkTzbR9EZvxUaWJV31HWPsctoFcbrvipWweM7qKCHy2WXiCjyT1L6tNF2n68yycGqQhRymrKQ18U2hr6E13S15v",
  "key7": "Q1fwCqw5gZPLrVJCb5GSwnXDWJXVy4tx4JfgqJkuRn8eJ7poay3Xkw5rqehv6hZHnVZddNRAowPG2ND3wGLUjeK",
  "key8": "pWwjf4iWAecMBvu6gU3Zwwxei1qQRcnukZk9ZC3418UuTJVNPdExXbuyrw1BLGjeTn8sMD2A6y5ousKaxNZPa5v",
  "key9": "5141UwUifQ7C2b7Xrvu1tNkGHtV73XLNUF6uLdnidCkhUsPMuMhos4tQrmBit8qSKEfQfGdruRE5LS7TF4Yj3hVj",
  "key10": "y4xNJCJTZyovDM9sjjKoizoaw1QaMAAoDDVcB5m4Jxkgr3mmSbvhwFcbm9PJNJgBLdho72sPgsw7HCUPYZGbBY9",
  "key11": "3yq8S14aCs96aW9mmCccRcCtsy3ZCkm69TSQSu5Kots4tiBhJ9C714Zq8u4FTFT49MrMXxFSYYJidWFyw3oTmuPx",
  "key12": "xzf6SbciqpYGrENh7tEQ3Wz4TnxwNUFypGmqYE4nzpCQYh6wKkd6JYPQoENvY8DGCF4XkzsMgT8jMP84uKiiTcW",
  "key13": "3r9gbRCpm15aTXphR6tUx2EdG8jrEc7X8bxA4455uHoDgEAKcDBTyNRgRhLfrkNho521KiRNQdV1kDiou11UjDDC",
  "key14": "XQ8ciVD9W1aehQtwWtWQRZ1NJuir16H4Doz3xtUZLdQofKGetoqXGpPDaqACYs33MZC5W2xLgfSSXmGf7MDchAw",
  "key15": "rL6S4HfTioMiW4qJnjYDDUzHBZNF7xF8KXZWqS5h11kusmYgqmymAfaqfES6XeVfwdJixaLB6kdj8zMAyBrmfvT",
  "key16": "5hFKpukH8xtj55H8tnWRPiZwMC2WSUmBNT5HDTnZXJ1ARtjGubBZ3Ctpa9RahAasySM7VUzwHhdmckpBwiSH55Cx",
  "key17": "5TWhe3BKBodqeCgx9GhPHTMxoGhPFgJiz6n3RguCkyMq3FHEY83VZjNkPvY6bbHnWCgeq9ipEGCU5XVuYkRCZoCS",
  "key18": "2zcvMoS3RHubncY4boYN67UZL7ur7f9e8itsDQBUPoJRmNRrxHhwf1BV1yX6kA8SBFPjoeewwB7xd4thXYEJCh4d",
  "key19": "4GQ9cepxDRU1hydvnuSWgjfd3VbLwjvE45wUGPSbxhQprDSsa9udsY6BGuucrULx7AwNMz3LNd4Bc6LdKs1SmCg7",
  "key20": "5b6SiWcdFhSrv2oGndcJt9yXWkmddPzhmt2JnNktonEpF8SyC7wMBLPJoR1cK9KU5xf3Ja1zSabqAS2aJJiZP3Aq",
  "key21": "2BJVSnaj7R66irCM5mqWVi74cpuHYqktpyWCjftTYf8kTPBahRT25Fv7SyAuLz7owkhvvjb95wyCWcstXfHBM4XK",
  "key22": "4XFsJGxBjUesLKKtBLnpQJxACdCiTfZe68HTiSGF97T41pnQCQaeCNHqz3KDT7mJuGVRUbNWsX98tzCJkpfcnvDU",
  "key23": "4uNZvyQnf18wPc1CHFh3TfeLiYfwKXJAjvQoLw1hpk2DeZWZBKCVXfgZ5JeRdpmgCkEFnuyXMyPVkmvyC7Emw15J",
  "key24": "4vR8n4sUzJxQfbVcyTnwzmH6SkBUE9RmXQKSso3CNW2LTXNa1MpE6kPbktGqkAQpgeUq7bNUVqmYt82BinaYYcK7"
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
