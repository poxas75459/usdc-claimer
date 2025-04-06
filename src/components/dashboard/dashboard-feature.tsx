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
    "Thm8DFfFh1AutXtSRpNywPVQPMEBNKc4KyC8cjRVEYvBfeGn85hJcnpyJmndaeSsSGsUTWZujuPwQGzJTRyYEkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XVUcufT45aWknLNLFkbV7BjDjRmasjks9eDFvM1E6AELikb2vqfUYBNTZaecaYmihMaTSiKyQFJwv3Qp8iuPiNX",
  "key1": "7iBXhgnNMLTSNQhyy5hFz4BVuabpDvFEC17xgrCjxt9GbkpN7g1A1nCy1eC1L3tQd7jiQdrYZCFamLu5pkQYZ85",
  "key2": "ni11WdtvJNiweYpVR8hZL4Nd4mewAKivUrwcxeVqBFubcZLvLMEfGzd4PUS34yymBn1UrsCE2LVs8iPEnZxXVAg",
  "key3": "4BJ283PXVufGX5rt4b8hXpmzj6YamJg6QFNmcFNNYMCKEvrxVZzfiqjjpnm6H4os4pPSaFZZN6pC2Y7mta8VLaYo",
  "key4": "5aL5NQYf7xR2dC9SkNCDAdJMvatCbM1zGDGkwh7XacYEgbUPB9gSp4PVa8HxHk9EJ2fqG34WBhD7yLTVwDDdP6st",
  "key5": "3UhhWRFp552kFV1pQDYJpr4stkRJ8fBfqWNEcHrurdJAVBJzZ3JZHt9K2kLjGmVJJQtWaij3VDjPH5qQTcuFZY6d",
  "key6": "tmEJiGztydt33uHFQUoVDERuhquUqaXijYnniE4b3BbUZtMMKwKd1Pw7kmqXpMCAmUiT15AWfi5jfqf3c53eNcL",
  "key7": "8cuttuWb7mSMdW4EMUCzzp7iExSg4PdW6A59yc7VSz2gDUDiDMVroiy9azkp1KjM8vFD5HGFPpe9xTuU4M9AMsW",
  "key8": "2SNnC1iB7i9ZtQ4TcGxAAPANkdb2Qb2WoLRrX1yKuVYhZPA1pkewgrPLVT3E5mXidHX4Qe9hp9DhzKZRu1ZmpYFP",
  "key9": "qvRUCa37seqr65e8DeYCyqDnKBY7ij4wwduPibgQYt9hWpimEcMMzRTMstVcLCsszgjyHHrp7FK8DfjWDDteCYv",
  "key10": "dY1AUs7c7oVBivPkqRanLFGzGr6MPwFWXrGmc5yodjneoSbBzZxRL4fP7Czrenmq8g6LC74M285HctQJt47DkAp",
  "key11": "cp2cCAf7pZbbRw8BagRLbgSxEhqEmwpMaKcR2B8ym693YiZpAWW1M5xZSTm1fwc3mKjMvhq3vsyrpMYkrJkjJ7Z",
  "key12": "2MR6yikXJKNNyyJSpJ3Bb6CG8Eqj6MYjXtbnvfrLrD1yEaFjNBhdDDH3yiR35LNhfVyYdtR9MabXpSUZqnm5PHPZ",
  "key13": "4JngTCHQM5zrcGjq3bdvvfmqsGG2kdqQAjRTLW78aD7DADBVBfkP9U87T8ZGHjLJxvBmcPrkJmmGeGKHBYW8u2ei",
  "key14": "44WzThmcjBfhGEdggiM1DmQmbi2goNkNz7krcHjYxb4nirKAsiJN9a7ge9efucpRPAKknbWrLAGZtkgK78BJX3ez",
  "key15": "2mhKuSUjnAj1U2CeMHhwkX9jmssyhkJc6Uspn3wnkmShyF6Nq8xB8PMZMD4n3WWoZaWTVjjgsLGu85eZjzxMmsYd",
  "key16": "3iAPCp5HGbB2uMXu96cJU4y9aTgw6ca5FdBM9bUJ7zJfLzcniEDH1re2PFkeTADe9MnK1MXpvtk6v7FSMUJAsdJP",
  "key17": "2vTkU2KVnmnKFAS3hFCWBbPRounAmjJGEHXrLGvfhiV2qfbgv85jKNkoLf6Bm9G2nuwWZ3D8tUZ5NxWRDUCZfpFE",
  "key18": "2kCHi6KXz3QpDcaLqjzfsbTvAHwVW553UpqFMsdYRqaDiLWxTgevzPhYwf7yufoBxpR5dSbmv19Db7Ymn93cFkXE",
  "key19": "5sAyw5LQq1EgKr7WC2At5a2VnrdE14djuYHTV2B5bdhuyTvu8hTSSxJZ9fAibr73nCCaq2EnM5dVmjr5NweWsF8Q",
  "key20": "3qeNPqhZgamytwhCjzP5MvgoTW3hRFdsL6oztd57R7kN7bdyrocGiNdoN5MfiBDAEKMbnXrU48L9goW94KN3qm6y",
  "key21": "34QCMpzWSbJskHFfuhJzfP11tmTqHMqEBATtMrscqo1qccS6sbPf22Z3qKPtedxmDqqLBXhCnWg8bxjvTTSSw4Yo",
  "key22": "y5DMWFB1BumDDj1HgNkk9jw9Dz5KUC144E6jzsRuiLwCUv5wBVHDULfXXankgujxqRW5pDgvfwH49btE5fsqLz5",
  "key23": "5p988UHkeMjmSVqrtSVKQnkv1ssxYjB8U9B38riMp7WKEdZgyZMs8iynktQiN9nW3pmHcQ34nxiib4961MgGDsCG",
  "key24": "4oJETm7uAtP6E7BCKc7Q3inNL5GQC6kocnUsaoNJJbgEUVTPmE6w7UrNGkAov28FJEYnTzB1fSYzbEHa294dvNfA"
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
