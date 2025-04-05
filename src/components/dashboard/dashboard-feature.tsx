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
    "WLAMJwohbZYEgBnC8A2a6ur3cBsDvFRUtDxtdFv8MeGESZSxszsrZgVvMAdF5wCxTKiTXCwkqG2dbqdTj6DHPhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fWVDgmPCCrsvNb3vDaXKvHTnjyRFVMkgv5anJ2YESRCS6fXVA4N7n9dQiPj2f1zCtEbEsuyLBeqFwTvDtUDS7eF",
  "key1": "2BtwsWZbNpwRtY5DY69nHkvovVWXPm6rMmHMPqnAqc3Y6EM5DFhUbZL7QofyqGReGxN7PBHeDvuQNLxnQyiHrRCY",
  "key2": "5HeTbKrXm3yXy814kzcW1avyub4obSGbZThKJxdZwUtwVBieGVDry3jFFqS1fzQ66jQg7AfYjdiZmM7RGPPNojQu",
  "key3": "584z6GeKcXpWtPw6DUHqA8wiG57zZp17zcLfAPLno6M2pJWRw2kY3evfFwoDeZoQ5y9RxGc6ERaXF3sm9N5rVPew",
  "key4": "4S8EN4CKiQ9qMyscuA7PX6XpkHhHMPZiSk7BqUhLZRmy7D1SqjWoYatnmVKpMtJPLP19Ry7CXpKdcLq3Qvdoth91",
  "key5": "3mxvpvzZESB3FNxeZNXdZpSGmjjnnESFXPwRgai4hxFLADoyofY3cwyE7rdfxEW2cNWE68psmGSZNFqEh7p9Bom9",
  "key6": "41dYgFhMnRCgKzny8tEWeKtsfndbkpZfgcSD3AL671hTv2iLL5yztyzcBmwsmQjGdn8HpKYGzU2f1gHkuJVNz48",
  "key7": "4JFkDNC4eB2wotkTPD7nXtEXYgEAHYUFakyYzZo2pP16DQRBNtUmDzHpwk7iSoqZj9zC7ovg2L4vGMBbYTjKjRXe",
  "key8": "2bGgkMeFqZD6AQTrVEnFd3hNJh9DaEwNjUtoKLcAxgh75L9TSnARxJbswPf3pjVDwsyFTGqr63xZDCjdxnyem17p",
  "key9": "2fyKkQXqgJP933yzzCtQJGffVWfje1BfUtm6yDvango9t13SCk9cBtFnywbMbPtuYVbntWqGgpvPaEysGTbAgDLQ",
  "key10": "4RgMmNdMgNTHPNNjNh5gtZNtxcqWGXhBKkgq3r7thpmwAP3NFrQ6SXycaqLrDPt7E5uexeC5pZdNF6Lw3fJSTAcW",
  "key11": "4j7nLTdWXFeATgQdGjZhEqKCo5UCvwUQaoke8kAJe97iYf3V35Cfkd7Vb2xjScbjWZxBFVjazFoLKZJpZQGtpGU6",
  "key12": "513Fp3qMwQ89w5F5X53ZvQNhBAsaMGoa43tXW8cJnWcDo8wJWnniUM7WozQzkS2vWv4czpZE4vmUMK1ssBwHyX5v",
  "key13": "4v74KUVvTjJPqnWC2wYKR6joxiix7LcxzfQz6Rd6F2xtEipu9ZKhes1RZpUU8APxJ681cYy93EcnGav1bTz6H2XP",
  "key14": "hytVmz1b3ZAvs2MeSzHuZnTpxAbURhBVBv8JsDkc7cXHG9tE9eoNjsJrMkHEg8m8w5cMgxVRVcqnayTELH5aZWr",
  "key15": "5vjv16wHu7JhoJPLUf4mMHqeLeeBSaT9VX5dGkWyJ8xJSKDmpfSAuW4AcoHh51nQr7SBC7HZq6r7Kzqd5Kt8hXEj",
  "key16": "3k81uGrizgEbreNmVancLBTcbdmwsazucytYKAncSRkiVQSu7LLGBRuVT1kQygRg9EYk5JiRsJ7P41GCD732szBH",
  "key17": "2ScL8CwxjGW3wFZjTuhWpi3UjNUx9HWLs434c1sLYmhCfJJZiJ5PYXpkc4Cds6Fet6kyLfwDgQCFTMpkichT2vft",
  "key18": "vAxCdact889nmGi8LhmrntFrUHKX29noWKJFi5nJ2GiFdc1Z43btxiiHr4SN5bN7waq8Fkd11N6daX5wn58B6zg",
  "key19": "txbKv9GtDJgohR6onWhcVCRY8uvyWu41cP8cBjJEFuYD9ju3csEoq1kz9txzdkuDm3xgEakXWXL8JQs5Nwr9BPn",
  "key20": "2dppJ8jrnsF8mXU6YCr7sTbErg87QidpnQnyhHe6AYTttW1uwGhQCGUL6KZYVpYaHyxo2Wb54jvLLRfRFjVZHcni",
  "key21": "3YjgBDv5f4U9XkVnWBdBbZ1ps32rdfS7rdj2xhrQsENg5UbWP8MHvUfBueL328cVJPKM13cz6Ue4Cb21n4YXspJR",
  "key22": "4H3LLP4KvoCKJabVzWUy8iK7sj7HF5fBGobScHm3nrEj7q2A94CyLfjpA4RdeRg3mhp27Rn3FGpK5GghzvBowhGn",
  "key23": "5BX3NUVX3LjBKbjibUvDeH9nEwon4MuihBgpDceq3X375EUx8UAim7sWnkg5c8mGN4e1E13vdEHTgvKBJoPVeMEf",
  "key24": "HsBgG2nEAa5S97319hRupA7iVrHVCfhVToRU1wNqKRDRi1GAShQh1JSkfAeqEYLsYNM3qsh3P8VNYXSrKQMrdKL"
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
