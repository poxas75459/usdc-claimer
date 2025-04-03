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
    "5JGrFD9grTPbJ4McBnvRvgrpAvnnEsJNaXYfkbgbDq4e3hXpoaYtsuhFp9hbsFsYwUuMTjkH7aaYXqiXQBxiP48V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fgAX9kndXeUCjTC9sjnzXBVtnfV3Jf8wf4z2UQpzeMsFVdESCEiwSN6XTqqui2Hihm7tME1uVDpwsfa5vHv6V5m",
  "key1": "4YzWtqK9YyeSEqzYoU4eLc7jaUqyhCsqzeUCLbXerY8S9nrLdWXD2pCevKLJY85QT8TYhmEAmrCE49Bpcg2jMBHN",
  "key2": "2DDjNZ86S8yDfMt95WrcPHRGZnrvFK6tjyouSYrX3dXhyrX6utBPfe7Bp7AZLDcehoFhyh3QFuM28tZDbscWEMiy",
  "key3": "b9AJdrXArm75DJKJhZ8WXN884VkWNZCpsHUQii8bJLpWSMcZdMREaQjpuqB6GbCi7dCKMTLeKQ8ZGJXL7GKG16f",
  "key4": "3DnWUUwYbi2JcUuE7JZU89B6wYy4d1DW8m3kQRz3X758EfxmLtD3V4BGrT5zMhPUL4YyxRhhHpBpE16aoEvPgycc",
  "key5": "3QznW7LtZn7HHf92EnE3iqvfsVhCn8rhrc5QoHSPe9jKfzFNtTydJyjj38Bd3UADS7nAU8EBux5sqhfSxjtM7CXi",
  "key6": "4vrKvU2bqfE7LAdtFnZoyM3P57cWWejDgorSy5wtKs7qZBCsqps5rpdmUNeWXpU4NygJgpnCprbxoo3PkByMj2Wb",
  "key7": "2bKToZhs66fGefieV5rEnLHmhfUBasE7gTiXos2TPsh9Vz8WnMDgDCY3qatmHsqDkG1kpy4VcuCfdY46fZyYLeVj",
  "key8": "E9FuK7Logu1cfUV8qDBmhxVYUzDmieUipeuU2erjH54cErDmAsQckx2DKDta36bSjsmzrUNZ6dC52gf2RGuhjpV",
  "key9": "3A9C1zLCNuyqAqMBjZEczjoPSW98VFgfKukDEYvUBqJGdS3izYWKzkWdJ3FKreJudT43ArUecd4sEWFbB6qxBpes",
  "key10": "5KybUfBppqYrk5JYLGHnD3DvHxg3ambY5ou4jjbjAeC25obGcaFh8nrQbBN8YNkh59yQnfrtyZtgAf5WgKCaiU6r",
  "key11": "4avsiXRR9gpjaVzMswsLxh9BmU49cde5uUXevwDswXz6NLN3Tj1xKszKGtrqJf4geps5oG8SGijNeWZoaFuVwR7C",
  "key12": "29A6KhdEqGdSeFziuGyZ7M2hWqtCXvGzX5cjJdXdyAsBv37gW3jMru3zYNWWhrA29JL9Rdyy95x654y3cX4Xvtw7",
  "key13": "4VigoHzn1bYmYawJryHdifmw68yP8VbG4U3oKbZ7gvwvkwLfgMJKJPra1U74r3kzvEv9grWn6P6i44NUHpRKmsw1",
  "key14": "22WpwcFaWjeUKhC4pW4KNzs1w4UtAb82xNc42jkR2thYgW2MeHPB2mdca8HLJcURV4cL9kae8GMmkg8wmpJ6QQie",
  "key15": "49zAh8JHnkgcgqwNSZt7nJSyjyNszutzUHc7btb2mLqjxSAcgKnrGDUgB4UbcFWEZpMr21voRcDJQHq7uLLQTbDK",
  "key16": "Rox7JWFtsaeC6PR25XSP6wb6iJPG3Bs1z4ppPm5RxchtMMAPiUaabF2Sv5Raoa2JgpPVBnDSQkQuYScTRTK4cDj",
  "key17": "pNX1uj9swTimm8pouKd3PQTkZnLcxZ3dWzQup3tMDMExn5hyFLto4cy6K52V7JhGcnNBAXmZKNgMWXDQFXaH4oL",
  "key18": "ZVWr7P3cLfCw8DW7QSML9dr9kSFayQD36Uo2QHkq1DDmSBBfqGRQWTsAT6cs6cbiUqcXb74As5KxCkguByB1fFe",
  "key19": "3nw6CUfjwQ9uSHc97bnqerusZugq2z8ErVFq3ibTHmtAXCC3RUaBq9X86XfNTL7gUHBqbNL59ReVrQ1FhRqi2T6v",
  "key20": "3z53mkHHuKhdsQ3h3zxymuyt2p8HX3MykKM8rERGFv9Qg7GwkoDEEKyVYfYSyK6uWSvPp2zh3QHgtup9exDnssEv",
  "key21": "NUSK3NEfgKo4zPTt6SFE6qFZJnaN8QgHAhh2NsJCHzwpVtq6Va4qsHbjPN2iXjsiBCLZZFgkJmbxCNwPL99GSrH",
  "key22": "32kKVhbcUsQUsEME7Tz9hdWTuFytQQ48ctwsXzp8DqyCd5msPgJrUuitWm7ZUNHyR4UwKsmJdW9CS5eGrKdj5pbc",
  "key23": "5ywjUtu4Vv83YaA9iqdmRDAwLkfF5sNJAtMNADCu11C6YWTiCcRQ8DYATpPx11amYd7ykttBgiZ7D7LXxLQMmJ96",
  "key24": "UUT8VV3rZQyX9C3jSoMLmPohKC7tVpgKipt8FsP6Nqu7vkyKjXtG2uto2VnFuUTnmE8paum52w6BAGYe2hzkMQi",
  "key25": "25pe2px15j5mkBdPaPFbB41k3h1U9W9x2rUhXnsp5rKXfuieryNMcZXZKmrE3kcptN3xLicrqP6ybuToGJyFVh6u",
  "key26": "2pSd7csgGPoknuPaAtSvxDHPsrYGH6bZdLvKUPSFcsV58yAWj1cfQ1GbHKLyVAxZvTsNJZf9xv8C1PKjYKk6eoHd",
  "key27": "4GLCwLBzqwFUVdhf7d8PJcPYbUjs7AshYTa9RG3xUi1GTXVzq24ULSJWpcMyb5Grpk9Sp4qdH7FAuLmLHDHZkKbz"
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
