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
    "fDJH3h1P4qXdyEm6dUbRHm7BiKjLAxDasVdUGREP8X7KReV5bwhS2ZwYqkUT3CZTbgBKnwgwynfoWyDV12LNRKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NBwh3V1L3qy5sD5ASNJrz9b6wUiPZ9GCQmeRA3FFtBNZdGkNoDt4G6cansbs4DmutoQjbX5BBRvEM1gY7SkQimh",
  "key1": "4UHPXEJ3Q67gvWSpVBsY9P48PKotUXFvSc2zwmTY63Y6vBsrxVzNyYkhvYSK6YNwuFjBmBmBwF71s1PQJV2cTAzp",
  "key2": "JGtCFaHGpaEShyEUFzJ7iLuxXwvFcH2A966XKgmXCELDacgrFTbVmvmsu5EDdZRfNuGZZwogntdy7AVGUTESQDz",
  "key3": "37Ut4qLA4XNgxCvAMJvSERRysGZLvUpbWWy8yboDAaG2JGD9kHRVsiTiFu4QShxahfdT7QgioD4DAb4cvDXVAvtA",
  "key4": "2wFu7cEvVF8epBdrj9efPCPC5n8YaY2fWJdNq7zbLo5SVQR7XtnaKCngFxYytfjBX9BZsB38hHGya93WDTxsRqhn",
  "key5": "4AvUmSp59QqZdJyyvr9zuzWsUaEQVjokZMhtm56aaPdDKqU4koxToXTSz3pufxkQKcxctXeNfjy4R8VhYjHZG1JH",
  "key6": "3dTJ2mrNF9NJnzhRiNRMgNKoD3uqfNox1nPugD7aNw2PBeDyiXyWbcKq9wWeK9JZJWUAifUKtMD3CpwMnBveFP6D",
  "key7": "2uribSrTxqQEsJcyHNU92wfteJuuCmTJUgUvB5SJuydfvtA5XYMFhhmWExt3vBpLvy3tKqv3zZ8YR6DfEWwqAkv3",
  "key8": "3dEzLDzZonfhYJZ7V5Q2dvFE1jB7rGU128fzcdBA2JrAqBoWBmnNAGYRkZ1gBkhLEfcnxPcZG55z88g269v5mK98",
  "key9": "4BtTZKRsk13uEKrrYPwZg8joWXHBdjmE2pWZRDLZ5LtsEBPWRWkBRADsrqdxuVD2QmpHW46tVSsuakSk43EkS2Ff",
  "key10": "2vbc8UAm9K7GMgRwsGv8F7hgGBwmR1VtS22vqLivtUt3pdnVPVxuY7WYSwgeAcsNBRHuAfEM4fLhcdAoy1PqcZxa",
  "key11": "5Z9GRPANW6VjE29i3LwiTcSqV2xZeZbRafxDB8cu2aGu134CJY9epJZZBSYL6RjiHZ1t62p6Xc4yoN4H3K2R7vwD",
  "key12": "4v1wKc3gnNG7PErJCiThnhQBnfLNdNCJNBrHdxEmyheun3A2rHv9g7LL1GdkS12gNUf56PbVuS2NKte2wUyG73aH",
  "key13": "36EYhj2PCzQjRn5gWR8ncKbvYbZNhvqnBbis4wx9GRFuBGnmp4jMkdWKvRZMXLFVvxe32WzVXyKx6WcQqgx4YDov",
  "key14": "4CBi6z82mUrBiec8tnLGtiPkckwcUQku2Xse99c4mzoYZtSMUnyZbTPoj7ygU6yrtpxUZLgdMq3qg8LiSMA1aQAj",
  "key15": "uHnWBEVDqZiBx4xhidmYpaa517TEH4c73Du4w1wRiK9cYQDiUUKmsc8XVwwkeuxWjFUpA91iXTk2he3ianGebx5",
  "key16": "67FdpyebbpJLCCSG7t39tQks44jnJBhzqjUfNRHYpj1XExMFhKs9RgDkY2XsDNiohZSJkNYFPscfcBrimbPJH95C",
  "key17": "3XZQq6pcdaSdkXdab9dFJoFw8jjE7E5zEiXFgJdkxTH26RVuUYWKGkKrct7Xmug1fu2gVu4W9mw2vrDBn5mjupp2",
  "key18": "Rmq59ScvzG63o6QtBAYXcYdLjGdxRhkprQ2yrhnPbxt48wmNNWJyVUbpXbyYQWt86kQdeK4ZosJ7eiGBieTHc5R",
  "key19": "4ZKrEvEripw8adqtTTVQkMAAJhXKLSpAmVAWDJm3tDQDZkxYxfWbX1R6uQeXN59qwN64eDsbQhXmZNAhYvkauNy",
  "key20": "34MFpUW4TdrrFfC5qgpUPjxdGyCDRAkeXhCDtAr5c7xhJTMezEbwWQGAGKo5b8CzFoTG2PiEHhap6ESzrbD6oQ4A",
  "key21": "4QZs7dVBvqmuYQxtKibeLRtFbXiaYBCGMBGFDpq3d6ua8nMukL3gZ35JVqzNugWNg66V4HUMzbhp83EeP42tGtCw",
  "key22": "2NDGjWdiJv5kr6NkdHrkjCxgn3WUFcRShpEygESKcMsV7Eu8prqnmjXh6ZbUGJeSzmrPjz3441MQa3Evj89CpHqE",
  "key23": "kaC9hwJA2TeeKGoM87z2UwiyGLPGAfaPXTcp5WoRPGKKHTUbnkQY7FHQJ5Ym2JqCbqP4YDB2vSNNLfTk3j2KXKv",
  "key24": "4Bj9Pn1jAuLpmxsRrUnQ26QsjhNYxiFgLqEPS9CR7AGcfyXjGVt85we7q2oNLcnAmDvghMC3Uj7voqoLDmZp65tp"
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
