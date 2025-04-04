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
    "2y2x1Z5u7x1sZDLfa5ty7RHbJX8hZi7EAAWFp2ow21RzkiMsGBgN3B7egQ1U2KjetiDkicQQHaJXbNJwho9XAsH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ydMNXJ5h8uDdSvCMWohdujxNSXtVL7B8jUeYv6tUjA5cPCTvEeRcY9h56z61JAqrGsyheBPz1i4Yv3vphMwmi5g",
  "key1": "2L855rjYYYrDFHL32QNxksyqe3j1ETNznFQKjfv9TX1Sqfr3xetTmtZovcA6nUESouNYMUT5kmTN8v3msVJARTQA",
  "key2": "4QwDR6WNjniMYCW4d37yqm3W7c3YLVFEtEBPZ9DyLvAY398Tguo1J9TxSN3qic5z8LWwityfnoemE8L5Azx7pdYg",
  "key3": "4dkMpsxH5Sf8G7Rx3xNbVZ8YroCnXJ1rc9fMMxLsTdNwcf7irvoxTew7kiM2ufG5RwigwnYZ9nu5Xneh5Kpvwj7h",
  "key4": "2XRHaGJkPwHGxomsVWGKsZZvmzL4U6ttrWqV75BVBcBzTf1aPpLrCW5Gb8xPdiQnCwxf1tVZWDvTP4WuwJofFGTK",
  "key5": "5Vp4Xez4HRGpASrUEDLEQKEDJY4jaCmHxM61FoLy5VR7nF4PR5xrNAAYcuT8KqriBRfk7xkswDTrovj83ivQLU5q",
  "key6": "66aoXUEKSH95aejwMUazmvCWrnjFZ92WJqixD58xFgQuAmJFnNETHESiALFw2TsSausjymXoX2moq3RHiiE1RtC2",
  "key7": "4LQjBenEcv7Tsgifd7TkkdFWGrgWkRrVr78j8wbatpY7cEXW9QdfZdQF9CUyLtt2k1C2eo1vjDL4F7bZ2r2GT2yJ",
  "key8": "4B3YEmG14PdUh8dfzFkcGZqbpVN6Z3Ze5ycRZzjJ4zH3LMrxmgVyDYQoAAmQWPBY5WEs2hPCnZQSeB7eUtgF9wac",
  "key9": "EN3v4fqTyGopJ7DSFAaFHrtTLEeXeMdu28Xa4dh1aAdts4qkjZrWLHghXMGZobP15s1DY4BbaW4k7QvFVmLDFva",
  "key10": "5zk3a2gRNQYxzaW6fr394bmnK8Zu4WuxLN1JkWay966vTYVNZXSoM1LNdCL262uRa2bY4AYUdnPtqJHzfnrNmVVv",
  "key11": "2yC23oAap5D6sRgDH7KDVvgD2Ar87L8yAhWrpFuxnEXcLkV8sxmSoiWFn7fWMXvURzbbgNTgdze9apfMKVCZ59tK",
  "key12": "5a1tkkcH8Hkci7n8drMKUzimUPxKFuHrLnpHG2NJq8a9x15z7t7sCNgqAyP4M8SwokKWziqX3FDVgHU8KEHdJ6bC",
  "key13": "2fKZEWKNNT2npBPUPf8ZBBmYnwvDGrkMGgtS5qoJK7qkTCxuU4vcB4aeEnyRHj7Uw57JJ8BobSdbVJis8VwcY8Ws",
  "key14": "3BpHF6BzkzZJtdsNVXd1mahRcsx5LWJ1tiWCSjKAR2yS6MfnNVR1fRa1McFuDcwfss1qGw3eo4bcjQyKJahah3wC",
  "key15": "5k46XrFx4NXBw93HWLajFiWrCirWxY5pAzzmKTKEA4UiZTKsKpS9uXGGWmTHhiwQoTTBraQjMNHknTW8UixVWdhd",
  "key16": "56RqaN4uqkbfgLceNDgS6jtfBTj8Cd88GNvr1KFAmk19za7bLUF1pUqEdZt5VJ7gF3tYAWNbX1CUGrFFEiVb4tqA",
  "key17": "4hNBReMY3THSmr9tZXSHNAUAtJ6FGTHtbgGiJz1xwGAVsvy5UdkgozzP4cjBcZbz3u4KXPCZSr6ucWZENfK7qvcj",
  "key18": "5p48RKdq9aFjhgxf6B9Vjt9uuXRJ6rYChSKDFxTA5jP4Z2y1QrY9yWTCBBYeZR7ifGKFLKCLSJAxGWBUqbh3wKqr",
  "key19": "3MUBMQcBKwZoPFmcDvaSmBSGEP1KnPZjN9hkYD7wQXbBXMVDF3zc63pCXBn6B6PjUjBGKVZwGUKfFtLTEnk7kTxG",
  "key20": "45BEDrToJbJqS3oEkJEU2Ya9iRS1QkJ6XbzdzVbLCG1mGcpsUQQWceio7EdExZ4JSvLT8D8DtXDpabjZyJZ4eK5f",
  "key21": "227txPk2h8sq4cQ9Bdw9Qc6ZHYn8adNCE3CHxf66gcukJskzcFAsiJnVqCkE7A7BizPjLxHwL3dGcNXbeBQzkEbV",
  "key22": "2ujRFF9iT2oPEpK4daEG31JWWL5YTposgwdWM5h1rpQAuoAJG4AiYfuppDdgmmH42dvWQzqQ2tzBsc7Zh27dYYmm",
  "key23": "2G2y6FSmqh3EFjGEToNFovf3F7TUaKD7EqKYwt1ADRPZePBRfR8eVysYcZYMsmcbBWF6pSPqvaoeoi7vPwgavfBE",
  "key24": "3eGekLcRJ1m79LjidWynQEwCZdpczCC9R17izKH3CmQHshURL8UGAYynpu2oZDsvYbwyZ2UoZkYqiu713owhxh39",
  "key25": "3Yjynu4hvQ4VLgwvDmXoxumGJb9LQdCvbry9o6QtDAkuXrLo2uzMb3yKtcUiyssZxbXTxR3BkdwfBvaKN1RnaQLX"
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
