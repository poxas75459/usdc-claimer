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
    "1kwFrpwQGhuHyQ9ozZAV6ff62W9hxmqTX57L3xo5CZxhNF5tj5mGxFt3yanu7L9pdueuCzkxCfYX73hn4vJKYzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oGLwz6wcHxKxWx8nseG6rXsQ53QKxR15m4HvAvyGXgWQweDKKxVZLaphVYiQjw3S2e8ETC7UNySvUagsqXmREPX",
  "key1": "44JFw7iGnC82svhK6wHHvBtWQ4sJVCR5EzD2a6xQwArdVSiaGe12airfiQZU7VudJMyBkcDBMZqxRqxs5SX83oCU",
  "key2": "32Yqnodoaky8Akzx9TkYXRfuY4PsZDYf1rPU1rLhPraFxEZaRFiBwNeAHML5TjE77Gj7nR2QFqGk1AFjAuUmL1Ga",
  "key3": "2mzb1jxSL2xFhyWhpxMBBnbZU81yUhLQuUkHbfqPAvpPznfyS4NC9oo1mX7SZDPgYJPAhD2dBMm7HCS2He2HSfby",
  "key4": "2FaSLgBsjkEacNuSf84fnMczczwXJF5igWHmhANNEKwqDBaxiGysT2AnqJam7n62FYKLH8WWyLbVrtj7SMmrbAoZ",
  "key5": "5zWcrsQ8ze6JYg8MVbbcdvrKk39DzZkTXRxocrQWBVbwtuWUCzht4jSfM2XsDhiTW7Av6huKPRzUV3XcQy8qGkv",
  "key6": "5w6B7wbBEbYZjticWAN5eN39YvQSdpgfrssBsXv9hN8zwDvqB35Dr4b82NfmAuBCSgHCLtbpYzmPuekene2XEGCd",
  "key7": "5SeqZHdnzcZaEqQZU3eZdxyfEpDCND8hHbKPj3tTbxtkjGta1uJiXxKmwWBmU95MWe7YnXm6TR1EMKHparbW6ik4",
  "key8": "33mmygtRuVhm93y8eqvy2ssRopFZ36oPEdhVw11BzRAAHFfn1f7ko3aApRFZvXFdx5VaSXaLiyozBvaSBDDp7GRS",
  "key9": "2tDNRDkdKzLvrKBDcQ2jR8zv5hboZ2smezK2yXfAeLx2jX6XiWPXzanfq8tyzLzKN6Nnb3bkRfGQAAR5H6E9AFuL",
  "key10": "ak6kaV7JAg2vgkjwCfWKRS3ctSQJ9BVFzxhfm48TPYYjgEVsxhWVyyRWHUZK4uRaberXxBkmRv2FtKYEXsM26xq",
  "key11": "2rs3xshzrwBQ4nmSg621J2iPURtJpNJS9qVoxpzaoBxLgzZfq99HCJBWeDDk1xLaJCiFNprCVujRdefyLJi7ZGBK",
  "key12": "27z1pYS4hxSdggkifL9rNiJM5H73GuHYDunfnmN85pLs8Z4upn4qHHqpraqPy2oFD8GohyJeznixFckYwqUw4WP7",
  "key13": "3Etrgd9NtBTtYgRSJtzrV5nTGsUyEMF1QZs7juCoozsJL8ABgMeMvdoikBUrvirdEV1akYEoq4srEwLbdZTTkWZk",
  "key14": "4oggqjMZ9tyAn136oLfuHSyudSksfHZwe6hXXhs4eUHwjvbc7ocJWCXDwj4fkkynA7yNcbbtGesxZEBDs1bdD85M",
  "key15": "2eu9TRDVcprzEssebrw1AswJ82cotLndYhBKJP5hfTyCxvGLSrG1HrCGhkZG5RSUo8MF48kvPTqihVaoyKKbxXRY",
  "key16": "3kkMKubFUPocX5FutEAdWkWeJ8yMfRf3ZpZgXBzghgy3Bq1rPKFvbzqvHUYzTiqv3V5VVxJ8FZiJNiU7tYAisQz9",
  "key17": "3QugywkMUpKLVBRCTi5163wuHa1Xsqobqsra4h76KdegAZrk7Mjy3TRygLrqYRJqFNHEP7YSh5EGZ1Zy1m7P69SM",
  "key18": "3dGwme9t2Y5gs51oGUTHtAe7fVrWPb3zQjTtWQqTGrd1mm5Pd867dWMbADTepFFdfeXmDNQUPJJVBHVcx4kBTar4",
  "key19": "3kpBqbW5paaDZcKAwRobHSYwgA5jkGBBTc4esVahQR3mVRa587j7vengURsu7hpKRhB3VzSnQvmwxgSnVcuef77p",
  "key20": "3Ubwen1dfW5Ui58Wa92uctCuUmRLaZNmjvxJFBsXryAdCwyyoT2suXeWyn7tFNSkihN8Z1sB5vJ74wHZLZwaxAsd",
  "key21": "dw6fHP4MT5mvehMBACHcndVjp2QKQRdeP89NyhSDqxtq7p2QSqgEoWGxvTvaxkVQaEYAphvYadXWJb2KtbEhC4T",
  "key22": "5k3hMwcxBWnrhpb3F6ymCRP5VY1H1rgPL3JttzUFpb6VhAYq23f9yFK4U7VKGGtN7L2tQ2h48FRWMDoXQVq4VGRh",
  "key23": "2UHQxaj58gEsCvHacUXsBoE18chSqvno9eaHkpLfZFR1eCMma5HYhe3zoPnNkNmuN4XMvPMUgk2n33CoToP3ky1A",
  "key24": "5rAkCJsr8iqP6QiaBPDRUEEiL4g5zeJpng3H3UyDcFApKFqNL7H5uERMkeHd5tBeiuZNmgewmtF2NfPbyw9msuVv"
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
