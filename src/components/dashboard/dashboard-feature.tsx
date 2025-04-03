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
    "4jE3yAcmLpoZNoUGPZg84AtEeyfrwPi1Yy4Y3KfsF9x8s7cq2KMVT8BDJCe5zCZ8YCfNhP1YEmooVNmCRcL2wo51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CVRswVABCbpx6z5Eu3tknUqtQAcgUducGRUAFeZHeamkVd4yKeh2P5inSTV6PbeyHKCtao9KVx1D87MGDxtnYFB",
  "key1": "3M48cBvoY2P4vap3rXW6PWTWZxBZgn5FQnre4xVU2T6EM4UseRypupPJphfYW2amWvEjaqPcUnECtBs9fAdEK9iW",
  "key2": "2dHkWsfbHfmyH4Uxo7WcfmQvnfNWdF2kq9uc8yL4tktuXvPcKdgSkptj1dFNXh3Yi6Tr3wtP4zwLUqRLiyHuE7g5",
  "key3": "SxBtBsogPYu3hMLiAApkchQ6KEUSz41PsS73F1ysb77DTDKGPudVUp3hT1Grmg1vzR755YvPBiSwmnuRnR2Gdph",
  "key4": "322bnA19hMomBjJ7HzH4QK7a2H8HXL9ccRWcGwbdFE5we4jKC4YA7Sxo9pibHu9cwYVwyTn3TmTy8ytX3Ymi7Q2U",
  "key5": "3Rqi4uyS8QXSYZHG4ME51egy6TzAH1VnJHxBj3LRxaX5yoxJUWJnPRkEs5fx12jHs3ygWyeBAJzotLZdaJH9vymg",
  "key6": "4PXTFmE6qHnSEivTj4rpFwhuYk6SGedjxxwFfLbyZcShtTd2cwjJz6X3XATuZEb9mbqgaEZPHMTrAMwj6ojjrwe3",
  "key7": "43enTsYeuaB3FfP1vdZgxgvDE7usG5zo9CfbWjABa4wYkWgLfPgQeRbj9CAwMmXm9skMfjnuxgudwRAcX6gya4cR",
  "key8": "4ML43fdYKenhJ1wh9Jd61EJWDs7oLhu8J7guMcPeUK15PfRfrna8Fegf1tHGDXBmvTkDemgoS5nPdFSK9NHdQNSu",
  "key9": "5riHjvjEkpgyRxniE5T2qzGGck2F2SCBcCF5by35ZPkGhY9FbCecD3ExDe4GCxiu1jxaCRNSkuDcUGukNkeGsq9m",
  "key10": "4DDQBVspK9ztyLv23mJhLmmzMMqKzFjxQQtnD3irjvdPJAyWptbKrK7jb2vWDeBryYdSqBV39WhE12rtCVZNh9ij",
  "key11": "59Vkhe11nNxdkJmxetSzLnouTz5sMr7EJ3ZiN9PWU1DyPzVjqEsLKyDRUWpYzLtn2ni6ndKQiYqzPNzF3Mt85ANH",
  "key12": "5YTZv7E21UzLgYbJMijzEDAoxX3wvTgsFEkeYdFevMuJkUZJfr3hJaj6KyvBBs7mYV2eLeoojbFYQh4ZkhCWGQri",
  "key13": "62GthvQkRBbRqGVFW9dpsz76Tx8wDJyJPJbt6dc3a2HFnBRemC9on2qhuStdHBiB15BxkG31mrnp2TzCfUJFw288",
  "key14": "54V262o4SjCBVidNVdF1LUaDvi6CxZAJu7mbueKyPos57hM9FF6Zskvd3wmomU1k98dUbzsEa5Rr38dWZQoiF4rV",
  "key15": "4diJoXxHWGUntcXcv6ajgD2iybWnQhKpy9yLotXGRTMq2MJ4LHEZ1xNykq6BMTyr7AptEFnr1ZyizpaVAurJajjJ",
  "key16": "5fyB8Y2GprJYZ4uAxoAgi48xgbN4YiJBiKX8yV4q21Wj6Tr5tuBiRFE5Etaw9bSokzS35ixDs4cjxfDYr9GTzYM4",
  "key17": "5DP2dPCkSw25zBtCWXCucxSL6MMFgnbxjUcBUMt5RfJuKtmcXWkamSAsxrmpvtGd71foBrwJJw1NSiF6JjSPhXx4",
  "key18": "5MuA8QCrTxSR7kGUYKoduVPweL9iwNUeVwbuwggB6xQMGQ7L1ymnvDtLS3N1FZFHQimmG4A8J1Csy73SfToVPD5J",
  "key19": "4L28hSViZQNcUQzgLsvSZW976K1j8vRMoBMX5r4FhL3MtKWQQ3HD4a4W5sAT45xBqmq3vfa1JRfMmaDFvXz4r16V",
  "key20": "2saz4nGFDxvTgTPBdcDNBwTYgzFrg3H4Bz1jvg1sMGoWD5gWWMqCrmZbvkaRXV6BUdxDVgT7HSvF37DJiheuRPvJ",
  "key21": "3uwTD2GS8ue7yEy25twXYgiC9b9GbrZNf6qQmLLTsQW3Hg8pJa65ZquCtMF28hPuverZknMB4vDmjVKy5qVJW3t4",
  "key22": "3QW8jtN8A6HGWuHmrZZPcXVBqkg4KwhiF5ZxbReZv84JpvCfLtpeT2419wrMjSq6tx9h7LKgq6ZipQm2vfgCiRH3",
  "key23": "3qiHqrVfmXKch8U7R8UpqjM36oxDYiEGFjQ9KNSwREoYmUx3KPFqWKsrQN2nTqxTmpvE5VABgMingRpa8mCoE4t4",
  "key24": "FrpgpNVNKAYChF1MC3mtQFKDvvhuHTMr8Ro2URBWCwCW6PuC3yiHhb1TsdnCXrHG4oHs9Y1BbFuVgf1HhYWNYyF",
  "key25": "4u1M8Vm5W42FbBx1zK9aFjFD1C3vjEmpqXvsQg9teB8ZiWS5UV5W4nGtWphyQ6mHwqz54eiYX41Pyco9QStV5rcD",
  "key26": "3qVGV2UzgwqaHCdAFMFNNitvojqhqYH2JzCQdHfi4brbZayviswa7WmxnSCerjcRMrs2qMYrrZLXTq8yYnt35wSi",
  "key27": "2BzNfrEQdN7QgDGgEEtpfAUTYSz5Zc53UJBcdTNWuiZMKLtfnWMaktEoBwj8xEQaywbUMHDB2FU8auVi8T4Tc62v"
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
