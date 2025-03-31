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
    "21QZVTBmfBonSffbo2rAQVDJhwtLbjZsKYhXRtmxJ1rDbazhfGbcUHHGurKWMzMqi8GRZueowqcYt4SX92GsN8sZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hao81J5Qm7TpJ1hMj424UcXYXfcrFGAAiHUkQX7Nk6mmB5nyvKNeVzJk6koSFnAof4KuNQ6f4tYGx1cKG9JzR3C",
  "key1": "3qnwP6L3MRh5AoqF9yGcLXn4kjZ3wCUEwJC9tTMzSURSX1EZpB6FamKK9i5MCgFcHdE81TcBAChCDkwMwum9tn8w",
  "key2": "3F48QhHnZqTbRUDYFK5FzfukoYKAEvyH9bdD7g1SPJuUFvng1HLdxBM8FAodhYzcvKHv2AzZeLUKMwyeu2bFoBfa",
  "key3": "3WHbZwWnucUcPkbAHMKnkR6PWt1kxu8PHZG5gEFBeasDEjtPwWvGms8PuLKNH8K2EKaQ5AV3fFHxvnNzBqXNJWad",
  "key4": "RTVgGHCP7VGyAJiZNciSW8p7KyMzf8Qd9CUQci18J5ZVKNexBnFc4veiBB79Hjs8aBnwQSEvg3eKxCNKG71YGnJ",
  "key5": "5oqdYVd8UmHhevVaT63EvKApPMbyn17CVQtb3M2zxTkQZp7J7verDWCSuyRZtbZ1rREcWWvEny6y2qNU6dEWuzsP",
  "key6": "5MX5E1Cp5vj6WZKoPmoTvVUo2p3TxMrViDEDzwi9A3V3CK8TCnr6dECXcEvGqxGbzZN6Yc3UHzxqm4gvowow3KjC",
  "key7": "QfZtWyx8rR3kCH1v63zy8tzEYti3avJf5Semoj4BgELZTUoF7mWTH58zTrAk6cZtTmozs1x2EcznxfQYjg7yRrb",
  "key8": "3kzttZnqCq56tAvphQCgEU6JUVc3RkUAi1p9aNuuQWShevmj1VjNumyi1tboXWL34Lw6yWAgJaRNbd1khicxkUPn",
  "key9": "5XscmpGzZiCczRJ9E1b5KnN8rdku4QEZHL7dmDkWV3WJcuksS5oYdbFNpbZK2JXto5t1H3A1euHtJ7awh3974y2p",
  "key10": "62rUpJVJrikkpspZ7ZPcKLTnirjoXppfdoghRuhwRUnNR9aJcTLjyG3j8dZxhacNu2Lo18MhpPYdP3oitu33GvuF",
  "key11": "MCzSq42Edpy4QAT33pnq8YceGHp9ZrEcH9AApmCdDNryEfvaaCWNkwufxLFo8XrvtbYFZgQZCYEQ78fx2KfxfV2",
  "key12": "5Y8itmHq8LfjBURsga9Z6FkQct78vmmJzRw1GNh3y3MniUnSieUGigkwzjZgB3sSfrMpBFqwZo3XWqcPDTwysd2Q",
  "key13": "2sbVzgYcf8vUCjfCZKE7kvw8tN2fRHaAcWjW3R1hoWTKfWWm6DyfoZysadXA2Vbz495Dt2dRy7H8jMokQDq6ZMpi",
  "key14": "3mUz18PYzbgcXM73MFh5SdtRR2wbQr3Jp3DSddvmE8KuThhQNcvNgrC53UGTfEDku4EmHcpaFLYkTPTZiybFWEw5",
  "key15": "5SX625GELDVYrQ42YusqZxC87uY4Kos6PKvFv4tTogys5ghdXFxNSGiLP5AHVxKwCYJ23D5YiyjFUbrPJkHipTiF",
  "key16": "ygML9adbR29vNcL3axrXXvSK4MiyrjuTJ54WJC8cjeNpkprqKZJHXzWXKZK9fgRvLPt337PXNdvHwr4tWzME4uY",
  "key17": "2zHzMw7ouy4GrqjktV8ARbPB7c3QYzYnM7oBtZq1bmMGo53R4useFXsaoTcXWkPXEAWNx3ESkpLrcdDE1ACwhSUN",
  "key18": "3mpMAXUUUE9m147rumZcjUHSNJnukXPeitzGaVN15GqiChLzAGD3QYcAAKf9Es1FvocZJcBhXGeQZhfbLs4fzBaF",
  "key19": "4Kk1oD7rV4Ve2NTFWXtWn5wM4M8i8bDQLVdwspZ9mNNrzhYzY9JDj2UhKP2GAoA6xv63QSMQTpm35icgAVtQL9Ew",
  "key20": "4S6pCvkfP2KthyJJqztpgbM1sRSqcuMCcPeNzLMsa3DDgVmMP8jmXLvN56ZxFZfv4mr1CZHs49tL4VpMvDvXRV9V",
  "key21": "4CXohwvTrTcaVEbGeh39cTMtrEgDatvHQxeWsUQEG2DJknVxbiByjm186Gvf88uX8oqdNob6Wr1Wc1CTAPsZxeQU",
  "key22": "zYWJnwnq3FCMf67oAyJ9ZyBCwvn5sjNtX5oKCRmE8UcxYXCJuHMnmRyjQPT3bh8whAfdQFeeGsZn2V3PULHNwZH",
  "key23": "dLitNPpazax7gYrCjhm33vgGoRg1oJLVMXJLdTwn4ctgs75pEtK7hzHaUji8mN45Dav3YoELcrtHKuNkZkyraH5",
  "key24": "4oG4Yh1ddFhbHRqLZi9wBjPvmhGHq7nuAbJbUaxP8HYkCmCX9R74Z44euftgr8wdw94fvPrqidxWU89GjTLVo7Qg",
  "key25": "4ivTCchQquqYsm1NZ92bAYqa5Wkge45Rsdxd2Qsv8Q4tsqctAbafWJ2G1EosJAPeKVDTEYAqwyJUoosjLq76zsv7"
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
