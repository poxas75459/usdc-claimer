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
    "2s7U6PUp6FGKC2itG5gpj1Lp2WJQmFBVSm5wVnqLBQSYxXZzDHVcxjtsnUSssGL5oAiujhAG8TBcQA9aMpZZZXfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M977EiQHmN83wiWCAsssJDnmqXSuhniP9FNuWVwCR8eXuehkzAahMgVncg9BhEvz4Z5ihhqt4skxT9dxZacbsFS",
  "key1": "G7u7ernzRTvZSDrofMmh8GXdLBWjRHXS9Mhy2RQZ6iGySFE3fygD9QdjmzzRDD9vLVY3ndzFk8YcZd2Rcm8R4eg",
  "key2": "3NPSxYTZCvWd8Yzc2BcXH5VTLmMBW7Vfve4H1oxPYnhKBqB1LJKL4vm3BXujnaLo8Q5q18EtN1gSpMoFXdXzNw37",
  "key3": "48pKEGyHwKBWRPqApw2mZbW4yX9dyCGqEdaG32LyQPYyC7paguAHGYuauvbuDdtphD3sgCs5mDDvisAfeSdHxRXs",
  "key4": "46VRzeGG4dfLv2mJ4AmJKrzRodBqYB4usDftb7iRebX9e7sxB9Ubfjj7FB6k3dLqrKGrH7TBwfAS7HNHr1EBfXBM",
  "key5": "39dTqMaWVC9exUHY71xY4GcSf6Y6fGoXLixpPizQssa5SsgbzUtyZk8LBXFstMNSRk1f2eshpi8zK9WwLu9Teaoh",
  "key6": "2KtuArwqD9ZKVLk9spsBABa5Dgx5QG4mQ2kQEcSMff4hoLk2hehx7xKRmn51aChXt6eAzbnLgTcFUANrMGcahcjx",
  "key7": "5mXWwtHkcidfioWp76A3j2fwT1jKy7vz1u7xzbmUpQKvetLLNsESe3sUDCsoCy5WqQpPcnmhmdKd599aLtMQwgsD",
  "key8": "4Nh1cYhpWoEAeqBkpdvD6F6F1EUkKJqEpiqiCiLm4SmqrK857SnKvU9K1E52kr21UfK8EbMwSPjoqQwFSvvpYvT8",
  "key9": "k3ae5UP9AQmHtUrJi9zftUD4ztXHS89RMwQ6RqwzyLMZNDnt4jhgHEFkxXxbibF4sX2di7a7QoYXpNCgMHCSAa7",
  "key10": "5jipJykdJ7QztdW42y4ucbx1dVN2tPTfcejivZVgfH66VGAb6ZPWg2pHxE81tGKzsABMiNqwbP6BWv8RHHpbDrF",
  "key11": "3VrsxvoAXQSrK1sB2d9QdGnUbmGPgResWsd2LUv6e3jpGNJGtfgAw3eGTNbMeNFFknFmF51hDPGF6eQ9d7ixnqUn",
  "key12": "3dSLqaUV3v4yrUpjQx5Hd5fxP69d3jQC9nE5PXiujXC5iT8j7h2H9tGsrMdQvzZYBiejog4EjVtkfUaQndcaQMhW",
  "key13": "4CQqZWHEmTss2R4R21CN2NKDbzCvuFKSHCQvGx7FdgCqzKHcp3zktdpbuH2wiNLJ1rVqBo2KH3MSDtzx1AE8emmo",
  "key14": "3Czh4CeJVsimL3U3SDU7P9c6J78M5tgwXSnjaqzxWbHAosT4Tj6hmHHyAcpkCWD3YV6cP5wg19FpY9G1Pk4soRfV",
  "key15": "j7BbpNDkMdv1MHq5ZXG9CZ19iDfUPxnG8UZSBi91mM2xDyNQLMZQD8ipiUu3d2cCvNCZ8y7JiSnnhmy52zjpbMB",
  "key16": "2txEdyNXAQoLV6uq32oJN7MSfTgamP44WdH3XgU8cyb6c9mTrxZ4iSvRr9zXJjbcWdtek1hE2GosbyDAqyqAsV4d",
  "key17": "5DSFXfmAPW1DM4E67K8haiC68S8VVmS4uqFU4Bu3ZR9ohbyP5wbVvejUuQij1z2quh4CpR9bJn5DcMDWfD54rqF7",
  "key18": "3Ff89KhkHTDbrTrmDvzwQmYMrSTZ5Rc6mbS46ZLQRJZA7qA44egodoKS3VxeEFieUGR64a4EwkcijCB33KpC3JCC",
  "key19": "3sUp7huXcNuAsadC8q7F8F1wTVA5MrxYubvFAysG1aEdmmovpVEPmuWBcaXxjUAdc7zJYZqeAHZ8PJNGDirHYA8S",
  "key20": "5AGuVsKk5WVVY2DrvoNEQZ8mGxicFNCcN4AjVRDEwT33g24yZ5hanxFEoN7CX3EZA2oWNHADHNbvsRAApikcbiSP",
  "key21": "pNprgVonMgrEy1w6NkgZCFzeX9a5moKgp3rQoVtteJugkdhoNU5M7i4tpGWzQmcASSoNWiR5DtHY4tipr1KdG5b",
  "key22": "5bjPx3stTpcx8scAmszi1haifaZ9zR47dcLWe9Vuh82AgPRnjgQQUsRiSztddMhYhLLji1nszbjBdFdmKMdXPnuW",
  "key23": "53Hiu1DZMkhhiNQ4jV2nwusLLG43DvhktB82MaXED5v4Hdm9chaL4kzbc4Abpry1PbrVxfdQmQ1SRVVHhuK5R6Rw",
  "key24": "4xEh6h9RwpcXCyupw1yTStCuGLsi1Njed1gTwFSmxexvaSAR3ZeSJsKEXyuj9Xt9BgmiddSZ2Eyv68S5eTeXojSV",
  "key25": "4xg77pjTvtoWzfsFiSzoZyK1pdgtD3d3s2Pnq2VohHZrggB3UCKu6bfUJFLfGPeKNLZGZNhZvyDFek4jTLJ4gdLV",
  "key26": "c2rXcjngWfHdeqWhG3dpvzSE1aCQkMs8XerGFaQ6UHRE8yGPLgPXbZpoRdJ9daFPmiVC81kpBHJhYZq9USTttUY"
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
