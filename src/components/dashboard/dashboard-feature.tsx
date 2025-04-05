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
    "4YbLmBZV8qofiogYyTkCPxFAwYkgcsfmbPsZwCHefcNpckUX9WMGmfPfxXfriSU8BZnfAd2JMZ2K77DpJWnZyn94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TGUx7S1AQVgWfW8K75bap853vXkURHogWvCRrJTRc3s3B5Fw9HxpbpD9Xn5qGvATg7Z4UduGSrdf34442nocV9Z",
  "key1": "5zDDvoQmXya1wx5ZUcnvKdd6R2FQoa3VDSJtiQgxRcHYodEXB2WvRgHGZ1A6yKtwBeoVWTZGVnqut8PPncmPsr3D",
  "key2": "2SKC9fbVRzYDRdjDWbNe3JEdxmWT3cJ3oVKevPnPQXe5amgFpN7RcbuEZRyj9ubr4qgzoUyf75LsHp8RSSCPpNAe",
  "key3": "5GPuP78bDF9eQRgZ6yTCC4YAFz4Xqce6S4jSWWeLihp39cQhAvpAABct3Pbuwo4EE6657PaoAfg583z7UjuVgUy9",
  "key4": "5pZ53Gs3cwwn86FSvbHYM2p9PfvzUYF9V83cHmC7TszuZyA6tLZ1xdmTh6UXkskw99vweDm1abuqjj9qPa25qDCU",
  "key5": "yqDTeaLq8QjLgtRH8XQdh8tGhcosyeyp8k8SW6SC6HhKZZADaTp3Xn3u1wSejxx7CpMb2aXvyhMZzSSa7KhXjuf",
  "key6": "5urqt3XCgYuNs5cLAkC3SuTxK4x9J3gqaEzziYXpwyC5kdjTzodDaSHDqm45BWgETf32akxEXBfGPDF8hd4UyBFS",
  "key7": "2UrVroHbU8wSxUBUXnQdeLwzpVRAQjdMLY3zWg9uuksGThVJmEgzc4PS3buC9QnZxVYcdjNZo5YJzVW3j7Hbfufr",
  "key8": "VdSjFoBdMq1D9AAr39ch8gXk715rWHVHw2gru39yViR76efJo5huGWFaKVpNCR2kA2RbPnMjvwuxBBFqKy9LDXu",
  "key9": "XrqUUSz7Yt2sfcMAvhMkvkt92oUUrZEe3T5rUv9NrDEysJA6HLR9bzgLdVUBCEqFDNqezxZW1vbE5EDFtbW1Pg1",
  "key10": "3SZocQytefmABKskvgkijXjMH91tA1AkbLd1zsBSzKNp1DzTp1DtvfuSqDhGPQKo9a2EFNdKLKMKdM2dWefGpSPJ",
  "key11": "5mo57BknSENFrQFbpNpSqbfvVzRF8Ec8P7jhRqmzCyR5hHNrpbaGnSwV5ZvdsinoYmAd9HK8oi1gXkgi5faYQuGx",
  "key12": "29fCP2PJNH22adZRN5FdH6VDgf98Zj9FYUNRGHo3jsswm1cwL2AorLmGrdf4SqZDhRC42J9MRKXbx3xareU5e4fD",
  "key13": "2FsKASUunQn9x14xKhJmJ6QPyx4cu8uTdBV9pNtadFPCgxxB4e5STNXLrL3MbcEgbTBTveFT4GW5SXhWxKL4eZX2",
  "key14": "4DS6gBsg9oh5pXwrxsmLDiaNA1asxsGdyr4dDGxpzdTnWTyNZKtu126yLDnnaff936gpWKDMSsHQ3oDaqfGBLEWw",
  "key15": "4zv1a3SW4uvjJmd1v3FX3q6pY3yYJ3muLH78MRgNBceQNXh9nRjW4H38NYvaYRJHRUhfW4vUkd3zza4bVzp2rGoi",
  "key16": "FGeBYq76mno7D71gRG4zRKg7gNPCRe4BKdid4aFjGzHXG78oxC6gZjwfPmTbrTrq29fgvFS7rRVen1F8XvoqFfW",
  "key17": "2QPP2BVaxUZV1XxWHv1JXRxzaFRo33QyKjbzMaywo8kDLHWj74icrfhQauAim6zmVFyaKG39MZR7wTnEjHem8FAm",
  "key18": "2MDghLS7DsNwj9u9wuXniMa47QmKok2iukLRRKQdBLJjYz8VVAwEYpn7czam8oAG7wmdua9QryRJR8mdZNyV52Xz",
  "key19": "7Z2osXRws5LSAYD9s9o8CHmUtuZwZaS5wf2LEaYBj2gBwnj4jS9Pp5FuvfJ8BVrd5V3S831okHQJtL2PJ1YBAuB",
  "key20": "4FV69S83ZxSqTtekAiVQb4q88Bk9WUj5wM3Hfk3BWeQUYot9grGFp1Be945eRwisgUuRY7NmATAaG5Eq4hRUbjrj",
  "key21": "5QJg8G6vWh5PAZpaw3rkoQSpRzfeCetDnhoVycyCR21qcgxGTVnojjs7ZFn5C252rD7CDj8LTsvH4oD7zbHJYBqY",
  "key22": "5xovbqN77LFCxPvxN8YcpcEsRYsWh271iXSfRhMNVcDD2pMAj5v9aZ1rcTTGL2wqk1m2F6zBD7XoZgLFF3GsG9D9",
  "key23": "cMnukyKp8CRnoDuR5fyfgqWHb9FcR6L7XvhjBXB71FovH25QL8b2DmGXUehUbnokj2KG6aXwgvtGApJHFQydPMq",
  "key24": "1ZBNaYp5XqkAHqxNnZzAjSZBNSU5KgznbhBpedxcoNsnwqKk5UrpH79pCUPJAeo3kJicu6vzdrkNCbZUv8XuAop",
  "key25": "14s3nx3AzpXnvUXWCgMAGjEL9PiBFA7Qgv92Hr9EnW1yeVpin6Dmyc33j2dDCGfT2HAiYYj5aZhaLjegKjkHLme",
  "key26": "5HwbMrkF6F6avpWLgVieiuJScEHocyBsmVboZzA2ztJP4FJbW2RaRkkn9JQue8A4cfius56wWyspuHjpD33Dqp39",
  "key27": "pnNzvzJ5WrDNVCmvE7R2Pq4oFZFq6GTWH2ahuKP8rQw7RSwkiEYmbt1156YfyLSPs1jSnTMaoHFq9xdcxhZ3fK2"
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
