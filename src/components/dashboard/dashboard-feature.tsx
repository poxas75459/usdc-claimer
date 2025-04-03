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
    "Yj5qUKcE1rRm6Fu8sGWTVMURVR8wU2nbtUfY2fRTKSMKC6ZREJK4dEo9Mv6ZpAAorc86u4M32dHH3nQBg5bkxoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QCgm8SzXs8C3ZFEbPxWEuV2wSzPuM4QGtFTkjbmyPs3ddHu8khZ672aSt935GMnfB2dJsTNVWuabdzfW6dFcaTw",
  "key1": "58trPC6vgVYBL6wVZrxGMLYuFk56UpKgmCc4EYPgb5bRS51mJNAvCafnEiPPB6zN6U5S2R9G7VvtTza5jr1gJU89",
  "key2": "4cm31skqkfKsb7SdFQnACgKmXtKMKg7wuw4tAm4BuLhQ1mDVdLrmZB9fDgL6AkrbFD6KHjbH5R6DyCz6iW4FdW6W",
  "key3": "65yu6yk1D5tbxbyfiMP5R8FZxmi8rqubC8teX4z2c942z3QR5M3THxVo6fhHSjVH7YtVcGWWnJEg55xRGFJi7cT8",
  "key4": "CdFPKvzySfnVRpiudVHk2qQi77cbjDjXAwLJQYoy6orh8VPMKE2VjkzHGmu7xUzAY9PQr9PaXbT5tQjLdZQtENs",
  "key5": "Y3qRsmv8pupiFxo9on6R6didjUjzKQEanAYTwBpbRFEeaYbo4pzBSi2ZD8WQQuDPpYQybQWmgmRsefxKPY2pYS3",
  "key6": "2L23JKcQbvgrHfpzcPwNZUExpACKYzpRVScWtZq4avcg3nj1bWcyHk8bGXntLAqgaF1TGVTR4XdMEbogQr4nXNeX",
  "key7": "21L6tqqJNqEJGqtvUiP9rfy3biDJo632A8pkZYUFWiA7UoMUeaGp3rCxBWQtm1p3UEota5QHdpBT51Eg2kBY6NMU",
  "key8": "28Df5ExAS8rGc3VEkbEUX54mER4SRTiK314v8ZauQih7vGTokN2mw8F124URW5pL3GPFfSrdy5xTYWnrThiNh9Mk",
  "key9": "2o8Sq1rrUKQhocFsxipBhJqBt4a3XcuLYUQhyc3SNfmmrKa2viype9QceD7PWpQxMhDqYX9UC8AkQdXZtKnAhMfo",
  "key10": "3kEs74qgCq1DXQJvZt4W4RXZWSo4eQZszaeTQohrfrD2jfmRwpuk1Z1SHUFDbTHbwo9zqM7m6VwQqqdFKaTo5MRh",
  "key11": "q91fLy1yh3Q96qqa2dvCRTw4Hv45ZM2qdym3DR21CtHK4KjQ1eGFUxT2wAawB714bM3C4L5w5SqTjBYUHiuz6r2",
  "key12": "bEASwVEx4gqvE6RaVa76vycFHCqroUXZrJZBJNBDEWorNW7B3RvGMRt7HMY6wU8deFE5AHisQnHuHbTMbhPGuHQ",
  "key13": "3V5Ctcs56YewyctmHEUeAzeZ4HSdNaqNJiHuVykLL83GLFPxSuPMgN1p4osvb15NfSwzUTJuJMYVM3g1ASEbXaEW",
  "key14": "2jpSV6Kr7cQuoFa2VSo4YqoBPMCqfgUvXxYWWc3qa2Ko6wKdE8hdLXoFyetTeujJFZSzKQi9mRWgKVkPx3Kpdycg",
  "key15": "3jqsam9kgz35hmize7LdqeVAEY7uBGsMoZfttCB2pKoXqHVpZrjhwDkMv9AusA39QF8NNBNJASuWpLiDcHu6P4oo",
  "key16": "4C13gPyC87zH8u42KjbbWMJhJCkQGNegzkKK6wNpaT3gq16JVgxEUxuNzpbJpfbPRYJRgZs8TAF8eij1XEtKPg8c",
  "key17": "317v72Vm3MZbzntanTC4pCNssfLCLRwTriPwGavVeejUSvcsguucRGdpnK7M1WxbfkLB7zQBRTvtr5knYQm7qK6U",
  "key18": "3mqQkgCw5U2VjrP72weTYWzywVurZ996EY6cLUxKDnk4x9QBPb25dwa35mAx8dcS2QGkAZBnfqxR7En779rVoF46",
  "key19": "25PkUjjYYk2oY36LrZAcjM5zRA7JSxHfkHMjXHNNybkQqhP2sdHLeVfwzY6om9XiUHHs3HVudG3M1HJHjxygzFwi",
  "key20": "D112U9FmSrp6d6YnN86V2j3NinzpY4t4vLA3sH6YLYAGadMNKgYHXbFfMwDtaTG4xaTksRU1ZnJdagNoWUo5rcS",
  "key21": "bZmt9PQoUeZddJWiMwpDEcAmTX5fHFASBJLPsjeEU5h2feSGMfaURcQyad6NiSh41UzkfWTYubAkUGoKJWz4suc",
  "key22": "2Mpi9HbQ1rToi7woZqnUYkLd7mYzMVPaxuE1PH1KkUMVWi2WoZCRtmqWEJmt511Qj1CHNsQdPZB1zGu33UVDvqfs",
  "key23": "5CenWNcmnaaxyzR3aGvZd4b9P9zDimtkvY8WhHM4zCbCpP4LhM1kZVbUo26wz75DVmjBf3vSzYgFdGLT2S8cZ2K8",
  "key24": "2KDJi2h2zSeM165nctbTxYmehrHyaS8387kmh6w3bj8BmLYm2PUFLBfeAxQ2f9Xr684JvsPByvFMm1GgCrcBsXNY",
  "key25": "5X9TW88cMoZXHmk7epQ7H3cBEVF2hTk3VpYcJrESenszbEMYs4yafjErxLL4fxPcBbAoJkhgSAWSK5Db7YwccHSX",
  "key26": "2EetNZNEPBuijTDaAq1UqMCQ5dXJUHmK8AF4VBXdn47MFQsnZpDdVSBQPd6EsEapN4KWhzms6Gdm9Me2UGeopSYE"
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
