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
    "cbfYHCEKduDpCBufPa9e7dVLEqTRKnnbKFQ7nrLqCeP8mAZyNM7qRnbWjqJcmZp3SzfAvqUiMQA5BkCU23SCC9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hz8ReVdHzXpHsSAz5ZnmrBMtPxDAVs9ysJGYmP4b7Gs2JanFJk2KyoDvbYHj2pt3DzCxMtqmJSLMn9SYWRnFkU7",
  "key1": "2hvBZ3tLaNJe3Ut5EsL31JZ9KR1jMLxYwNWxQLtpzsig6aGRE7Jnyhg3yBT9iMFJ75R7MyKJckGjAkeBmWjNxRFm",
  "key2": "33HWve9vXECYmcFmuhvVsN7sdriVPuZRxys65KsNJeBKMqvmByoFMs5H47zodkxEajv4rrWZEJ7uFJ186SCGkQFA",
  "key3": "28bgraLPzk8xQw25LAZP8YRFEGJzT75eK4a9eaHC2n1ZSTjjuGjrkBoWUWMnZxeNduHejQ2eSoZbDLyDxf2dKJU9",
  "key4": "5uZ5v4BGVGrk2CaaywGGcn9HSJV42F7kpQM7HgckxMinWb5eLow2YdHDmzBtTsE6HpgRhBib69k5X1RXzyoB3nRF",
  "key5": "4KJ1LbtsZHJeMMJsrUgaqL6g96txVcBdfmeByB2rXjF6m24Mnw8Ci3X64UxvkwMWLCfSbcG1FR5Yie599tgx4Jdc",
  "key6": "2o9J5h9CPdMbDYvr4p7sPFDbbQSMwt3w78mmyxpyF2tmj8BCDzNUiUEiN8ABoXRFNPDfFJNakC3XSDpiabo4CDJG",
  "key7": "4aGBTyE7dGwc6j6K36iHfGbuvcnBVBoyx68Ys823hQRVmNus6GUTJxYrbcWKT9rgrsAZNu3xrL9ZtcewpvNgCYWn",
  "key8": "3J7L5qsCubRFXzxrY4FsZUFUm9YXHZryBPTg7Q22FfLjsNYqmgFjNQmCZx8Aa1dddKL5bM6cHXD4hD5N9u81TWT5",
  "key9": "4kfExGt7AayetZxyPLeVC7YdYBy8mXfz9uBJTX15EQDUVYH3b7AQxALjkAYkkNiVmCL1Rn3xuEZ5a7UhvE2EgTb1",
  "key10": "2p2XxcP5kXQ5Y66oLBenhs2ZyU33sBPiHMqBXUoNxUCqVHAFwbz6fPi1wZ6f5eYjCqTMSKDWAhHwiwu2mzeEJd5P",
  "key11": "5diDZgrQKEAH9h6uu6QD8bfGeAKs6HeLXMdBcRoWrzVQ2Psj37mN4mpbofPcJa1g9g7TBr6sJpABW7KkTRnn4CDY",
  "key12": "Z7f4qCi53v1wgAQpQjZJYxMSL4AwwMsJyASzPnhn1CwfDkKU5afJZA4Tme4YkzqickfJirJkUT98zmpN3AzrVau",
  "key13": "2WVqRxjBn9MCrWAD6dRQQgZ2q3pzVUgRog9oAbK9pBLFbde3hm6iXeTv8FGY3avfCinytQvG9TbtNwnP8LkJCLwW",
  "key14": "5C3oL4N4aa4i4HArVJEGJjft4K98eqnP6w9WjcKHTZNjk19c4K3ji1eLrvwNXdPsVxfhhDyhFWK4ov6gxKJVuDfU",
  "key15": "5egmdoYetiSrTsGd3XNEAgTC57YqJLizzLA75aEhiHeKgGgM632dEUfTLNJHYrukdVePfBDTEmSSZRWPVRR7VnCH",
  "key16": "3KiHo4WFtrUh8DxXRhESxRzRpNXuGBdWvuApVxkZcgM5Do6fQP8rgEUnzbJDUaQD11XhXyoh6FZKj5WRw2tbq84R",
  "key17": "3w5N137d1oL8sefbd8yNChGxweLjQ6th3j5iktvXpDfCiC5RjHrMW27MFRkiY49B7c3TSWXkZ9Yu6ifuz9EyMDVv",
  "key18": "qFJn3vRaWR2Sz4MUYrsfPtUNkERBmS8ZSXgreaWZbn7dv3Mwm5xuLYdn5XzRt9mvT3bLKt33yycjtsRv8Q68fNU",
  "key19": "4J2SESB64cEhqGeeqeCWvhDYwLrhSmQR9G6nUAbVcTE6ge2yjA7pENNo7AxW2ygQmsKz4g1mYyCkRbtFmp88TSDP",
  "key20": "29GzQT94zo1i7grxsxJPn5HKTACSUrnjR7VQ9FxoWrv22F75mdgt8sFWxBobyYVzuSLAexGfonZqYGsr4fZqxm1m",
  "key21": "dRbzdAyup28poYKiCWQw8RWk3e1yz3tbJYMPVkZw8F7gzSHpsxVZf5wnfaTwi9qaqsypL4LmdpiepPEGSMxk91L",
  "key22": "2vqcQ9otYm4Wa98Vvm9s9eCniYEoU1P9ZAQPidFXDW3kdjYrfbc4Wgh8inbdqr4UMNaFh4vRbmmcLuHZdN1RZ1dy",
  "key23": "57UFeTFn7tguimHXzEyWfVqfKFbGrDPoNdXXC4ErpRbYkVzRwJWzV3CLiRFq86Ns31aQb9y49CQp6ZSPc8knSXVV",
  "key24": "55o7tqN2bsn2UsiZQx2Xivik3HgDSjuurvtgzTJsPxjVSb4hb8zs1dH9Ria2biX7XMnA3tWoTE6g3Rh4zi82yWjC",
  "key25": "7b9TbzChSaufAAjDKwRZbSCTSgHkhnn2e4pQzQsmLBwYj2sNXtwk57httY1BzEAtHD5jPERjUwvyKGYvqiC4Tb4",
  "key26": "2dCMeYhptY7uaEi7TDsRJyoB5QEGDdAhtbtQeqxiCv3WXiZggR9H8RWURu59qEtAaWd5nFsozAqaennaqtuoagwy",
  "key27": "2qokNUj2B6E27jNRR5Mx55WvruVi3dRBN8wgHi4RVXQFgm39FKCg6cAWdX49VoFtvEkKHHRCmcz1Yz6SgUsKAi2k",
  "key28": "25MPaAjVKfy1tRobgRs1RjBefeda9n3tLx1M8oshHSa3EmEiKwbFwoDbXo2hDffS9ckXgv1vpQ7sTJfdEKB9sweT",
  "key29": "4H7YusNjBsc3fmpTyNzjASLq93FnDBaao7y8VzSPjLmL6rN4AXBiNYmekkxRGYc42q7eTH8YmLsmDGqtK7poTRAU"
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
