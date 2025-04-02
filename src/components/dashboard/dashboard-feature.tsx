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
    "3tSw3njnxqjVduwbXEHMrfoh1ugeZ97Pot1NK4aG5oeWjs2wW6rprGJeN1r87ynYRzEXtaAEc4n5y4R9VHEDkUaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G5KyjS48hGuQfsnCX8ZQyvH7DoyeNFD4No4jvZr85aVD9uhQQmfVYH1JpDQrZXNGJyQVsMv5HHnSN8PjawxtZ9D",
  "key1": "3wqGTjDtyvq9wmWyH3zvQoW1Xe8tbxp9H7Yff7aZ9cZQsGqkb9rR7dU7QBPjfMPSd9g4c2nrdVDFpEFPVGYPdsYU",
  "key2": "4ujTu5j2D8S15dR9NjecW7z8QwjR8zs68t3jkZXq2KHwiYmMRTNFk9VSR7Ad8XFva1GvVmmh2QF5t8YdfkX8NVrt",
  "key3": "2teJLKYa72sCwDACW3B4GJFKh7wJD1VZQarGobY1oXJRpdXz3mYvVnwV4Uzp6A1Rjzxckc5zCEdVHD9cnZHBFbTC",
  "key4": "24TnDuvLCfbPjkwSjoHWBkxLMvjKn9eaRuVYmoc86bvk3qPBtUZqYMWiKmRtpF9nrtcdTCSQ1MqFb9aUc6sNCZBr",
  "key5": "d332tfMFms2cYqpy2J9rqGFaTTct6BoUvAudP5SFVU15ordHHyQ9JZEYDmrQxeVBoRF1kT1SZCEDDBzY3fmhh6B",
  "key6": "4C9dxMfeTrzKxHZY4bTUqxjy18WJpty4dcLXHLweR4zozxSxxMvKML1GiBLzcoEnU8F9qpTjW8Gzpu7gKPdDp9RR",
  "key7": "3934cDYiY5Bv1tvTbsKMv2GV4VvUa1qpvQ3sy1hsTuqszf89CnXRDmhjBF3x6RD7zt7Ck4wxQNCP55eVzgxv8VZv",
  "key8": "4Sn9CXg6973Ceu1NZKQWTsoPtRCuCDciWn3iPMddvdeZuLF2LWPmsKERoXH3ywpwTEGbrKRriB4DaERQ3LHtSHvs",
  "key9": "22Kz5F5YpZLXS7yhtcLCgxdBtmdy7rGxp5cpBm2ArWDPQz7etPuynUvgHUnVsgQviowwFEfNMTrAip4owJDA7wtS",
  "key10": "4MrTwxGZUtKKDBLX1LKw3b618zpur5Av87p9q1wgvqfiSwSVmRvDBmfVu6eAqiedYJeJpx42BVaxyJTgpfhBqNBs",
  "key11": "4TB6vzpPYhpDR9gByoNc7CeNu3jeciDDLi5goGxLCUqoC554NUmh1DzRDEutAPaRVUobJk4QVmmytPeHs1hUK6M5",
  "key12": "3xkFgbeZyWKCHJmmwKNBWLeHgsWZxYK3EYZb3ywPzUdVeuELK6WewvVzj9SJgpyuSFLaUGrvxbSd7UqmmTqeJUcc",
  "key13": "3hgMQN8vhM24PNNMomUbvjCUB86V8VszxyuAbLJf3zcpnWkW6Z2yPPdfnKtxnQz5FQgEcjR6AdAMo7nMjEq6rJbv",
  "key14": "5HXuSoY7ejXgSqMki8EvX1YqXdrdjkVMpmCLtHHnGSRNMaSUUPUNur8gKojnv6cJeVtNRtXBFsENGhbq6v2SycGG",
  "key15": "3Kbr27X3mFcdVbriwcTqgRd6tKbA7v3k8rppurmuqfPHbcE5z2rzgZ1zSc7vvkk9MM539hkP7jMyaA9zCbLr1Ju7",
  "key16": "3oywAEHYVgZTkHHWEYwPSMyKS6YPJwzLywWFXv5DUZxScAiUtdAvE4aQFge7gv7KkTsbWGHDnzfCtiLjzo7dr5VJ",
  "key17": "4YaxdLBy7RaVY2Zx1KHMm9UNQA4QtP8Ud6ZwuRWgefr3Z8XX6enTmRyw5xK1rm7dzJFFQStLRBreJtqLEuDJhvXA",
  "key18": "C975TP3e3oDCdseevmxbwgC3JsUT8LBLjo23meT9ZPoNxtKmPcH3VCuEvHiHSX6S4ptr3gYr3byCk5ynYDStAbK",
  "key19": "4Mn22tjDwrDWtbLaepogDDb4TQ5BmskZ7RBCBP6fAhRFPnHHNdkVMTertqRVUo6fAgSc4Nifgo1kLy6Pbp4iMHBM",
  "key20": "454qRZwVLKYpj4P8kMXD2DKh3owdE3CXSQYX4Rktdtde81rxkUuEqnFMnt2qddKffMDkmeAFMCRg6GPPuhfVKSFi",
  "key21": "5QTTnuqEwhqN3MYik7ABU6xmttj9DMur3LwDzgs2NqaPv92rnpLJkBEi6PcsXZsvutP8GU8BRPajRNJxBeHMKReX",
  "key22": "2Ysr2jznJsrQscYgJtstK57Ny8p9r6HMndvhQNSwQzTeCyGzLwkFBh715562EpaiPxjgjwQXznnUkDKByZ3jRTnS",
  "key23": "JfxTn3mYYkXPGLhm5mrR7dF6YmKHBbm7m1j3FF1R9S6d1ff9UBW2nHeCsbTGMg5yk5QBqho2rzqxQmQLHYLRBaN",
  "key24": "3xKKrS9guG7aFXcM7tvppdqJ9DkKAMP2LYmzM52JFSUnyNLXMTL6A9LZhkbQgah4qCtVzwGfd4EiV93aeqaoBRve"
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
