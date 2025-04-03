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
    "2nsLjE1JNgUUFtermM7SnhVjTkbrcybC54NSyTsMHSWYLE6jZzb8QrYR7JCofRp3U3mAXiwq8nULYmB1kLhmF4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mgzchcfeE8DXDASv3j1DiNaU9dFpWTbRTbH3nuHawcdfXokPaVsU1RH1jsDjtFiYPkRocDV5WkZJSoqVcG3ro2R",
  "key1": "2y64bHeWgyzXPWpxzn8k1ofgbj4iCBF9YYxko2iRsciuek9q9nDPb7ejwEo6qeAKYRjxMLfAJ9ZPa1sVYPR6EZUn",
  "key2": "4kTRuNbBtC8kivBhErhTvM5i5qvECxaAnRwqB5viFsyhMFGUWV9i6QXsmfUB3YQDuuBC2zBcgseweqhFmwFQzVDu",
  "key3": "2bmNg62XMjyMBAt9xxxrU3ZE5h8wottJBWty1qv7pFAX1tBbVBnmnyBgRpQDVxRsVpQV3muVwx58oBnL2WRiPNHS",
  "key4": "2HyxSJFj9ZMqNjjeDKYgzadZ8AB2xmrnojnYYKk4bQN8pTw2fNAZAjbA2VXYAZePDz4GJphz8dNffmvfZBmmVP1s",
  "key5": "mLGgxDQQvZLL6JAqCPVXoja8V7Mm44PF9Y5syN5Erw8jeLW9ZpLJgtPgaK1Fo58pn9YwGiquvbmWXhXnJMiBeDP",
  "key6": "5n1cuJLZyN5Vx7JwwogxmMYjqdhGUuj5f2bFGxGUVx4ZCyuZk8DJhMMJaqszbs45bGAidfCQQBdMwCy6rcq1oGTi",
  "key7": "UjUS3FMSob4B6uHrbvuxPsTzxzMhXqoQArzLk3cZQDF6insYvdCqvLip3eJUk8Dtv39L1LpYmE1T5FbrFnDpV4d",
  "key8": "3SpZR4F369ArRtgzeqYY3XTp2EERhEGoW2av1NKqFXxwRwKkFawGNuK2eHVjYL5XtBLE63WwJbP3igekrC4PxpLQ",
  "key9": "vVCuBPHTbS5udSU3Vu5gCdQ7i7xfZ7X6dg35AM86jAaYqVtKPmxzZ8oYKRqwqqDahGBhoaLdMTDsw7aYZjQ3178",
  "key10": "4BsfZ6X8ttaEsAfiDPfmp8Ta4g4s32hq47gSQxwMDoJTtJXoHbFAdUzvn9tunyQv9QbXUtjwJGBeg21f8zr5MTL5",
  "key11": "5YFnqhv3hKRyTAZGxTbqxcbfKTWMTEt6Sc6K83hLk1TvCuaEbyrbpPb9WmSAC8mj5wPYNwa7e5k3huCMK2SXUqp5",
  "key12": "5LJuTAiqu3Rvcf2zsFw3JbHf5UE6yWCkgVQWVVM54nkWJ3BDbJXUKkBevQbcQN2JY2g1iKqmu3fH6R7CbBP2yFmQ",
  "key13": "5hrQj61cxxa353Aa6e4SS7m5n6fcfAjMkFXXzrCtvyPfbeQYDqLntn8ntnKGGtYCxP9sYwLiJ8vGcaacrAYTWUEd",
  "key14": "4oJXeYgLW7V6C7AhGowzUEpf6qmLdvSfdhLh1dFHxbvbKpBrn4gDD7D3HobXY1P6nQB7YQiStjcFHVQsFAYerzR3",
  "key15": "4XHRncTipa4xG79sKETDGwrBDRTWyUkX5M7kb9cvZsLe7fEkw81Za5sHJoPg9ZDiduPbgQ5iN9hhGnni49M4RESR",
  "key16": "5tgawNXXPXhTKGB92zzMBU2EZdaW8kgZwC5DDDF2d3tUMEpDMGJQtq2sefjYLaPuhZw7VwEYQgLJnvmdLDLS97yw",
  "key17": "5M57uafBPyo8dYxfUBC2jZyatfrdGpU4xqvYqDGVumyTDK4DdUPeFPLTHmkyNqVngf2nvLPKjnPwA54hbUViDqGg",
  "key18": "37x4k95sV5MmdnjqSircAJz8Z6nU8GgxeL2KrPcZUEsFiWu7DyAzr5HUU4kCnd4NJYCCGNutPLaSGoprymd5vRtN",
  "key19": "2wUAa3R6JDsZcQrVRxFqRmUmhfVC7SHLbhnGRmPbSd6ashusDF8FuwUe1uTzpEy7djQWVH4wFAEkqQPHUwdqCj7Q",
  "key20": "5MBnGY8Uw7n2VcZ34A9yKVvUxJEa2fqiaa3h7ejEVnxCpuYZDve31jxk3PvQkdH5A9r7J6bztk3UBL63KJ76oQUg",
  "key21": "2B4LyJYKWyGJxLYYtztiJJfk6qoc8fBavcocoFLr17vumceqAYUEPoGyPCyEkJSKwrSiHcQo4K7iK5Kd7Dzak2pX",
  "key22": "4Hey4jRxB22FUvzr65xdFaw1PJwKmR1qYmB7Mdv586xWgYjhSNg4DFMSUy7UXq2YaRcbVR3GUjCBJYusnrbPMyzz",
  "key23": "V9HBY7W5QjVNfKU9R6FvjCRM4p6cTLXsfbYQhPP6WKLtxjFisGmdCpmhRZHbQESfawf9jQncHcb7WMHQtjgzAm3",
  "key24": "2fERpVpbQdG68kCvhTkwZFm7P45pHdaXft2YoYme8peM3vWWJZwrogxwiXZZhSEY1WJ6dCPD2jG1jdHh4KVdWDgv",
  "key25": "3j2Uitn7hYxWF4Db2kr8kKwU8FDeDW7c4zf91Ura5CCa2E2omxxvcTpcRjrSVPLyb4xFimVPwEDk6jqHFmNhd66M",
  "key26": "2FWvs3CgueFdM2v7ZpWyo7eEgELKbUhqRzCCjHmBMHZyeGBXKWoTutZR1x21Y7DuD8FUyCj9XrMkmyM19Kv6p4wW",
  "key27": "52HBBGNUhUjv2SQSqudm8R42eyd3ukdZKiHTMsGVbEbZXzLHsSjb7kpA4c9reXeL79KHLyk8iKaFeBun4J4H7SuX",
  "key28": "r6vpf4Szx1ov2BQHmmcZgx859JGgaa1kbTb9sp7kJ852dENu8xhjKdByanjEas5UfKyDFzQyEh2R5Kh1ugQSuRK",
  "key29": "4AraAo1AH1fhkAdUUBeX5zUkRj6ndkVSmhu4JErh1VpuozNQyd5qxZwW2mgGqLjG3MPv6DjLeEhwGcBbi5UsWUxp",
  "key30": "3GiaJWFCvzHrGmzRuXHSFwoJ8GZ9Nm3fxiBvwXEXivq2K1SCoXpHB9htKT12e4k3mpyER9FS5jtKPDUjqd11F1C",
  "key31": "GzoGnc9NgXAv2tTUsLKKGpAuPGMgxhB41cFN6p1XJbU2fSLRMwcZ1t9Dg1CwAVCSYfdLt6rzx32otBgw85iEfaQ",
  "key32": "51Z3A6bVTMTjZ8FabvfCYmewNV1oNR5DZroVScQBPAfCTjBrSgjvvnb5VvsxUYs9cZa2L7oQgRnViU2nPa3bDaQZ",
  "key33": "5xNvZ2arKuYJ2rUPtfSQ9ccvZ4Vd7BxakpFMSpW55UN7hPPduJVc572PmgL1e9JYZoqJXGkYCJFCP7m5J6zfMVzU"
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
