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
    "5UzGGhqHf28kkbhSfPKbFoRNBpJHUDBUe3RbaSSjaYyACVg1vvrjR9qjGgEPKuK7S8KLxRLNs2asf8VJTnronKzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JnXywVYrWVnbaWeqEwi7ywr9TUdyGAsv7AU5PEtacedV3oiDADhQsqQzbmnLRGPJe6JpBWJaeWoHQjoArFFcRzp",
  "key1": "3cmEmaRjJN8pdh3BmNQd4y6SzNqX8CmSTaQRb6r4vmibZTGNKLqGNk6PvSJxtprVDHJE3Gz4DnKV5WXdHyACUWyE",
  "key2": "42gqHy7BYUViSRjQdfytxzpQoYFzqV89LKDvzWx49BSskAhjY26Q7HJj4fy7zsHkTp7QmjdvyZ1ajzngsi9PYGju",
  "key3": "t999wrS8W3FEYu1vf5wXiXKVqZ3f5xUUeChsE6YGxUbcSwnwtncPHExoqsVV2QE8wePDaEJhnMGc71i9ZgQy7G5",
  "key4": "5wgmaC369RZrPasQ84P8HaQ3WYHDDYNPzuUqb8JEUtPvAFkpjo1MNS9aMej7XiqVx2DBnmMZoQo8xnCdPHnAyJLQ",
  "key5": "3e3PoRePmoHFvGzVKHDcbLCGHkoatW5pT1rR58MstT198AmfPoCffaEwsprHggZLpFjbXv6ojhtZTtdmrsH73XqK",
  "key6": "grVYJhhSKywaqk1iw8WCvPpfPv9dXg6CEkchVWrDTw5EsCsmmqDhLzYoD7E13qExBFeEXjAzWk5rjhQ88gvgdaa",
  "key7": "5Xc6v41bAc6hdrVBdLgt7oHAuTKvkgd4u2xLLb5s7ucrk7uvsFDF7poLfkJmmsqEU4PGyqg84XkKrRcyHVsJvWqV",
  "key8": "337tmCNyjVhLGNQPaKKGEeV6GArHpGQacSVoK8PYFRGJ6nXswXTXNuo7WCB1U1muQrDqeuUbBGpeMThcJSv5rUKU",
  "key9": "5UsfquspW7Q5ofxAwekSt9iD7HvFAAqzjgFwnWT7fULaW84ezAegS5nJRPTTSNzKkrdhbEPqzZu7vviaV7aW7gpf",
  "key10": "2QrvDy8VhFN3Wt2dHpL2HtA3FvNyfojhYcdCe1K1UkD9BFHLpLbUbdwpwMwyduEtxMCcfNd9KSJsqJWhW3nHd4cR",
  "key11": "Pv543kXGe7y1aPrQM4CP6aSAV1MkJwkTMJmGfub5pbEr1LT8mg8XMP7sUz8d3BWehX9TGkAcvMPQ7hMC8u1Mm4z",
  "key12": "5BsDtxDbbvm3hVpu7SJbGNdmzYSagaZa2GscqnfYwq2eFoiY5Hu1aKgC4mmWqVV6fn89kqoDkwnciFyJ75k33Zm1",
  "key13": "2KtwYNqwL5R2NEziek6wPcmNK9trnjGvs3gwtTZZbV3yZNvDhSRP4axGJ4f2LWMW9gTXSZn1Xh14ZijEujnjwBZ4",
  "key14": "4fw8t1REfoEsNbzRFret9kfkHKauF19EnDsyZUpcjtGWqs69acS7zvNRDANhcfUKW86zDTjV8ZZv7n7wxMiKgZUx",
  "key15": "2MX8DR8rrg6QBYVndvqazDXoWpBWFvsrtwN95iVoBUBWsEvvjWa4xuTf3Gxei9BvVyfd5m8XByEJ8BALtHrBmZN4",
  "key16": "a2hbuzWf9hbL77okNLQhWJw92xC6cU2eDBXqDeprLchbET3GCKkNKhvghs81epJ5bdGmjgi2gv5uZ4meYFZDAcW",
  "key17": "5BeKi7W3e6ZsMQYBnXedHfMqUX5PUFPHQ4dG8xiBh2bz9x9gu6J6tEuiGq2egquGEUQnmpZSXbTZ8HtUkoeihvh4",
  "key18": "2jTUN4cXLmHGg1tCFxmjDKBHCKaZFiVTWu1oWs3UP6Mjq7HRpS31DXwaUhEbVLseHVAwp52tXz2TGqB5k8ZK4Pka",
  "key19": "2vAyWvQ4nWJ5NBC6k4UWVzGKz4rzE7T1FWjtMMAJSDvRr29mgYGm6jdBurTQ1pn9JButu7mxhr1SDmbmHyUiBkzL",
  "key20": "AtzWuMGEKxTZzuNFMCCBbRC5sAsBumtKZo3TZLHZPZELsn8ZDNTMnpKZ9ces39FWr31ZNQs4VZa4MWJmULnKfNv",
  "key21": "3FZnyiU43uFj1psd1VySWUow92TpoyTdzLruBuqGPY3ZFVMZV3x7cefvMoHuH7xjn5jPSU7h4ifNYnarmETnQM9L",
  "key22": "2HCq3zaUsjGL7kTWw15Vh7ZmRRa3ZdFTV1rTXiz3wx3DQSxSVoEk4jec1Pr4K3qcXeKfkPmpZ64ksYnmWFohcYpi",
  "key23": "67qwcrxaTrFjSk9Fro8zZRRJYKqzQ2CFpTTs4JxQfARbhQi1xoJvVV6cKrdYUipaWLZADTSbgTSMHUwohs8BTf5L",
  "key24": "5BcKA4eW3z1c6q7qeMR1B7cA4A5CNWBjLFKdsfMKPhhsQ87MhecUhQmLQjQCfatMHVBidabZKzYHkE3HKDstht6",
  "key25": "3kGkKbEcsbao2sL1YffrSeKV1nadLnUPjETJFZe7W7EFA8zu2eHj8Dciu1YxRxbd66Bf1iweSms6Ji1kTdUo1c1u",
  "key26": "3TDRwsRhaFvhjQZ1thP64DBxk2nbntS36tPxdEVVPTZj5v6K8qNeZR7hVLi3AiVdEiQuH22AREC5dz2PLuStNuXA",
  "key27": "5iCRAU3qSHnRB1drS8a2MnfbdVPXCQgVJTzMg9vSMbKAt4TEWDkfwWFrnqMMUbZckVcnGZiWg3ZDHEkeqVWBcin5",
  "key28": "37rYizKUeEiKUsic5vAfWSnRQW7YwjU8dAyPnaQUhqTxW4w1Vd5agQmtMEnfMBX6GuSUPg9Q51wUfNEnSTXjM9Ph"
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
