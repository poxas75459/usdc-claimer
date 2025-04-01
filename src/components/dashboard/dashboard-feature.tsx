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
    "3JjUbpwPKdCE9goVHjMs6aS5NTsDNFwLUtT5VC7bYcHbVCviw5vDCve1681Zp5yMZs7TxUj8rwgmYHv3CHDuPPaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28DW6KF95BgDfQ9swWYCASBTMH26qKmsHV75xcGMcGAcHbPXTpX2K9DXVBVLxdLVcHYa1pTNfoSzf2D63PwLUwK7",
  "key1": "3DWPmorKwD2qCzvTrkvAf7Xs6vBm5ZtSNai8QDGV1yKWT5djkrRc85RKsqZbDEY18zqMafQ8n4EQhS1UHiNekVrn",
  "key2": "2wy4HU8qA1PqcTHmZYT6qtV4jEWodLjxyWCqvJe51NCYUAdp5XEZQJPpuvceQhDRhDKnz55ykTe6EJ3epU5chdY7",
  "key3": "28DPTXGXPcCTgmW7xT1zHvBR7L6wTSCjM9tbrRN826arduzdbA76U6eH3cfjY1Y64W41Mpj3MNtEhS4SaccwP4x7",
  "key4": "2rtgNSfFov8aFNzwz4wXuTbkdBiXJXNUAftLrDNv2id3iuuH83Aat1GPb9hD3freArzyLYFpPPowJm7Ge78miyi9",
  "key5": "49nb74yVYc6uCMKYpsjkPrrK5mbVE7YLk9szo8Xam5D3BBL4kdE4eT5hkoLu8L2YwQZtvNZt7guVJF8dpJPHgZ3G",
  "key6": "32bKEAzBfmQkmvFXiZ7fFsNzqePzvXT8gDga5UjKobc9ehfXcfmfCLqfdxkfhsWvNFgrqZKvudGGgFq8rtRf663U",
  "key7": "2gXpzUGoHoS5yrJBAGC7uG5FZA57aQ15mbqFWYSuoPCRYFHJP1GS9759J41gC69nm3QTXaDaxDjTgexsq51iwswy",
  "key8": "2DBZCLKb7hHCZFC1YQLY8BRTCBmwBz2xrtmdL25v6PskJ83y7GVJKNapp7JKiDvtqCeDZsSeNbQv3LaUBmcyJVNe",
  "key9": "3jjNrsqfLM9uHFhRvz6X3CNW5A8QwLQej1jKZp78Bpwiq6FDByRE2QZetg3Pv6M4zDK1hRQ89kMdtKxx6Fo3V1CV",
  "key10": "8FC9Cx1Bs75xtDgt7HUZ2Dm8JrArN7tM7SZt77TtiSLFbhRLmp3ts7265ReKuYAyAXYHYy4YyCxTKqETY4LLWPn",
  "key11": "2UKQsWCUYAj89QgYHrKR1J5F4P9HXcTwfZLaNEZDrGnhK2PKvXhc3yRfzeyoLFKdUZVRjAMZ2quue9Vs2qpb1tjq",
  "key12": "3QmZLRRNr2czvBHaR5XrSUpGeKT1EBc9TeSGhFmAmQCShdVYAHtQpg4HfPZsAQ67t2fuXqRfXcfpoYNfiGP6gFLn",
  "key13": "64HbQaJV4YzyUT3yQ194RLa5D88qyX6pfZguyrupmUMR8vhspdzrE75CmDmTufSpD6DNtEoxuBkzFzXMejncwMXZ",
  "key14": "SAMrUtJQhnU2tezj8deFzE8KPGeY8Afn7U8wUBu3FmAXjzzNE3iqpq39uoWT5Ank8MJpFeNwqC2Z7dVd9F9ea1j",
  "key15": "4fhHN5HKd666WraBkZkfeSqSY18kxCddWgnLJvwNwPqzdRaMTcXap6dJFBTZYFEpRwpSDBSEHknHZ5XCgAGWfVS8",
  "key16": "2rhudvL4D1BvgB4Ut5AQtjgcAFEa18hEoSvLK7NFiFuur76cwMAZchhHWxywV4WobMpvVgZufQBQKJg3S2RAv3xV",
  "key17": "4wNiE4frGxJPEhjBaSe9ohWzNE7e8a1pzJw8LgoTi3AjBcqynmj5v2ZKQALJZPP9PduH22nYFQi4ECAAmJQfwJtp",
  "key18": "3H7C5YP2qAGGQ593FxCFPfWBqa6sKqbhNHaiEXZqV6g5AvfpbDv6i4mdKoYHUn34p8VFjtznZ3N6QtLoJqM5J3NW",
  "key19": "286cAgYCiFAkTAa8S1Tu2rNJh8DrjN2nhwcA7JiuMJjBhUA6c27svMgphTAjnTseZtQEe4gfYLq7SXxxZwZDXTmb",
  "key20": "54AfZFCAaZdrK8pQTUYBuffVusH1JYJmyEDTzYjxF1eHcMakqGUpZBocwXef9W3hWDGLMBYNz2fpcJwnJgoXW4LT",
  "key21": "UuvuQpSJPvkB7Df8bJZBBadyPKW5b3k8cjfVv3vcfXG9P71MS67qKce9rsSuFo6BBGoNzPfQMNbPy7npAbKZqaB",
  "key22": "2Tz8xvMx6MRZ5akRugFGWDq4BhUyKTRkmcG3BBvmRHr5LtSGcgSGwsnRbRfdX4BvpZ9JWRW1SqCo4v3YdGnvvJ81",
  "key23": "3hVTiFpCGJgpJSYT8w4ZM5aHt6fHmg9t21djjxeavUvrsBQaSRMZSyu6iD3bSHBKZPFGhKUGdwKoAtZF4SWab22Y",
  "key24": "23i3mEt2AS4ybRnab6ej4Vay3A7cwQAtgi77SdMXrXShe9dqaTjbugGRjxQqtX8dQPgdqLuwoS8YHpMP2fTP763z"
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
