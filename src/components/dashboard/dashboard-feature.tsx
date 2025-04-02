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
    "3M3jeYBS7EwPVqEjkibegp9FAtW3wa63VJVQiF3q7idEDqTYqwGVPbgyxo7LYfYXss2FKosaZE4bsx4yygYmR6y3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45MpNjEjybQUrM4QUAxswm7FrYdEi6Kupw7DLHotHbfpm7gezKLuxRM3tx64mB4rhDRqvbe48cmeceCJPcyspHRW",
  "key1": "2pHAPLiWUDVgXub8NjCP4duxgkHxRpCVinmQ8J9bCNjvfGvN93c6aoJSQGmVb66MDEZf6F44keN5rE7h2eueonPJ",
  "key2": "fHotMbYcW5k1Rskhp2kYUQw6gYfmd3nuht75aNp3cw94GPutGYGMBER1mpJTcXQtTBP6PtqmrZvPBSdM4Ni8mVo",
  "key3": "63iUSLZ7nDARkjDWKkZP4XEgxwCPPsfU9BmzjBpBK2tbP6oz29ieGJdcsFcWmrNs1HB22FvoNWtSJX1afdfvzMmi",
  "key4": "322ED7zRWZWj5vSVqcJ98viVaEnjc8C4EBzx2Xh5n8oE3xVHbmyLiMXYYskpmQ8E2jooevTsptWtxEbhaKxv6jgm",
  "key5": "3m7iDApnQoLVUM3QmaearCW8286th5k9UAgZA8saPyqyxdq25H6j4d6ufcJggbbTG7Y2LWvBacn3hAsnd115Cy99",
  "key6": "5Az48TZcoSvGvoNQnwHEQNCYbzrgngGMPtTFpYEaw7GbVZt7aSWXz3cixWjwbMoC1Ej7s9bTGfABge6MV8EyG9nZ",
  "key7": "5qDGQZFoGAohDWT9MVsUD62DZ5bQMeuqW6sVSn9QWrTGHC8UQ6RNnNKduZzy93xWYSPoa6QH3PCgeRA5aGdmwWK2",
  "key8": "3ALhXZZuCD6vxhNXJhzdwAK84HTvSeAgAsiXuLksfs5eg6redUd5EfmwGjvMNfcnHZU7raNDXiscL6jStiKMUAnN",
  "key9": "NbCq6K7jqPAbedC7AMZDZpYrSNxPQYEWMgVRwuUNyjUQpkQVEVesVkRtSzsVxz1EKrXxQyDbt3jpP7T8vn1vDd4",
  "key10": "f94Ds6vgrDVCTQZu7zPrcVoVnt7Uc9n5KLJzUmnvwTfyvfJ5wfZxWw8n1Hr4vNdWyExS9pKsgWuqZ5SCA4A9CbQ",
  "key11": "2Qd9aAzjo1F22j9bsWgZD363smR3cthVoEjfjKA3LU4UAREcVRfz5ADypPRK3VhxFiy8AczUiGQKkEzXd3CuEZkr",
  "key12": "5kTHn8w8tbawbsyTve8nfHX3ihzRSCVoFVVoZZEgb84ipcS7eR7YtJwhMsJXQx8PKuPMKnBBh7TF69nq8iM9HFFf",
  "key13": "2GAa5mAiSL5GZscanXBEhk5Ve3bZdUuMteKtTce8weVEtJVSaXUavFoGDkmqX88nCaTuqRPn7wU36jLjFWpkz64q",
  "key14": "2h2FEPjgEVGsdnJMo3a4G4Md4YoSKwAD8dLveRWCRzbAbDxDTbLmbHGSwqkmv3kHnxNYWXdSjRKMdRRGDS3MHXG7",
  "key15": "5mK9SrtvegTfM1WpFHzGNo1yS8YxpUgAjhn2eRAiDtKD96douie9ayAFm2hKBsKFrg53QHtAqz7q7qbtfHvtEyV3",
  "key16": "NiaekgVHVF6zk3FAC4KkS3bwnDoboNwGjhzn2akgH9w3qc2swjBpZGvU9kAbtd315ULw6nDHCAuCuS6CwmuMDHN",
  "key17": "4Q4xsFZw8rRvekeuoU4V2iT3kkege6Aa6sJbHMrG3gPQHwkfY9dwEB3k9pG7n2KaJL7fhU1zGumE3SbUP6bLLS4c",
  "key18": "2SyCVTtug8xApiZiwQjGiBEktF4nhm1mDVw4ZXkndxp1W2RfiCFeydros3M3xJbsvr3u3UWfLb4SEnYr8rJwxAUY",
  "key19": "XYCboGuLjSrJoUAv9vvB8v5xtB5FAbg1sGT4Lo99GaoAZobpHRbFBbd4gHjCDt4x8Fh6u4sHDCyhXgcragcZmvC",
  "key20": "2bkwHXC8kfmnDfWi1GLoKQEAB4EYvBqTqDjFPkRhHM49rYopVZBbgmtCRFNhbnmD19N1WTk34ss1cWAw3W9Hb3uy",
  "key21": "5HyXvE7s6RF5h96UMDNmVVVxTKpQBfiEF6196quu3odER629MRoQcYz76bc2J8YhookxjBod4RVGCLSqjrEHmkvZ",
  "key22": "MJhx3AwXFHUgUdBTGiCEKtwAqgui61yZLALu9X4TuUvqUt49Z8572zXYsV6mEwMmfzy1vUF7N5AZpYy2jF7u3Fg",
  "key23": "4WDRpa7oFTinTAWyX2HWNDceyVDem2xWt7T9tZMz6NF9ujqiyaN6djb1gm7vCgcHFzsi9fpF79aA8i3xfKVSknd4",
  "key24": "hvhdcv5ZVECfFT9kRNmsisaaqyVaokDvnB175wb7QW4NamSBw6kyxCjzrAuYCdGP4JsrJKx59n7eSPXk9PJHnGu",
  "key25": "7ZxvfmsB2Pz3VBYGQ2CF7SboLvGmdhf3eX1nq8xmdPopjhxHA46FF9iLD9aBtKGEweJ2oikUe5yWG8Kbnmp1aHH",
  "key26": "3J6TE1ZXoAzwCmDgkJAF3YK8kP62CuAX7LACkjEvsbmFS1MnXaoUL8udcxDmbbWJ46hJd5McS9bvqBhdm9GX5yh1",
  "key27": "WzGdJzho4NtdmUVgZNjM3W7ZrEb2btciLoVGtfp1GD3QAVEgbymMxGfFiBUZokE5tA7UcmQPYfkWBxwUfhMxmTS"
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
