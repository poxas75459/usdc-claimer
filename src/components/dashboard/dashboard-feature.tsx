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
    "2mVgUStsFAM5TqZ7rAbWf8hNAXU4ALncXoBJobggTJdcXiQrWfHxDKbjbPjAuFC1y7UXJK6xoyPFx3cuTRdhAdXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47TW74kRuFQ2Ksvbjz1H8wxNn5WkmHGKRKrxSfEPSiiWiKjxQJQv9NPeysGdt95YR6VC3zwL15qcSCe5UHXo3YNs",
  "key1": "44P41X1bdh34ozRVnmuUUubogEWGQgTTXiqi5Y1cetH3CTZuLKy8SNVLcdXwprLc4McsfkhyfZJH5tD4oXfwvJwX",
  "key2": "3JJCaRQVX9LiGg7mcPVLDx6uY1v4qd93Qmuu3hUYMAbF1DWTSLttKg4jSEBXuacKUJCpSYXeozpLupmMV79PvfCL",
  "key3": "2QTnP2dtwZP4Fqqy6qHntH2f1JKHqyRhnXcTNPLo27fAuZxtXiEdbYkJvFdtAhFHnghtJibN7ewHCaat3CohVocV",
  "key4": "4ErhDK58HzDyMePMuJHeHmB2XqgxZBFdr3NRSjFtfoJeWJ1ReaarRZyGAaSj2WzXGkVfB4Y4Ku7aW8nTJpneNePw",
  "key5": "5P9KgM1SFntisfaFruC3jDtCumWGNA4DAkGosn8hBPaAKdYTXrG6xPA6TGw1RpHtwGqodRDkSsMHB8hFv17p8XVp",
  "key6": "NFqNvGNZDhPq9TX4JyzDwM5HxdK6afSyPhSfr2hkfM23nawLq1TYcHM2TggbQqFZx63mUiLdEjTf7DRWvgKzpvi",
  "key7": "3oqjW1EqSi22hJXTMSHEdcPqiPCuqSchFTiC424ht4ziUUUnFRhDEEsyavqssEes4aFpw4RLpw86sY1iNtqJg9En",
  "key8": "3i9QMUZqxyqW3Mujx7XWEGwptc6Nw3Q4RXYTzgkfn9BBVZJ6FJoqMZs7QSsmh7TjJVmoUonB4GV9ryRYYd4vE1iE",
  "key9": "rxouXiiseZ7gyVdNHBQ5fr1kpUndv3bRcU6EnYe4QPKBTQgikvpt9rYP38pN2wi7rbSCzBxKgG7T12NzzmNehNd",
  "key10": "WYcXrLSs2a98HL6fUeZeFZzaxHMMo2miTABKVmTyDStAf3VSyLAsLGbgNxbtfrzqwEjoumeFTLJACNetNpumEox",
  "key11": "46DQDsv1fyGyYwmND7g1CSscS8aatNkum2Z6pqK8eMfQbdZVbMFtWdkKRK2PrEEgLS3fohfH5tAd4cqhzrjxSATe",
  "key12": "61tuszDfit4PRtw2C723MT5qmePyHvkjVkb1iTSD6d31ziqoJT9JEefFeyKbuUvFmpvuaWe2ZBbnJAQs2pFoRAzr",
  "key13": "iNDKkXF3h2aU2fsi1x3cVuH8Xhfj5a3csAnFmiZzt8WAmWHWTwLcEQKmogfnNdgxgTLMUnvSyWi5UhXdmRHLfcp",
  "key14": "L78VjjUgHES3LZUrY6rPhSNYxmPSSU8Dnt1Ac1Zk9yBj2NcSeGTzWrUsHtUKgg7ZrWZk2oLjF6wzmdn4oKwjatF",
  "key15": "fTBZe4HhaP9qQzUvfuSpSNAYaVZWiHBjVp8ENU2ciFQ7odoCLNsQiQuc1Sap3voNusUS7CMLNSfAABS9vn9SYVM",
  "key16": "3EPiCpa4eEPq6772m54w8oawqzsXkGFE6PLWpowSThfGojvquMTcLMieCFUSyHh7PZ2cfgmskST2eWhuhmB8kTAJ",
  "key17": "oFPsyswgzQ56mMvsSqPK3AFQhczeEe62JnveUqgT4gGhcXBnSUbVK2QiELrtFn4YPwaUFHqQsKLzg8sSASmWBcu",
  "key18": "CLcczRuxCQf1tXbBvjkUurcTwfM1KPNGW9wQmsmDGaYBbq48LdPGGw3MKFtyeBawKKPYeDZ822eAmrXEEDsNcqL",
  "key19": "5R51XnebZvC9KJc2FrLdkRXLnHNnPZKMk37frgrNu1tmTj5McAVPwcjd3bmbhJJBVKfAKEMF7PxbGnmx9JaH9mtL",
  "key20": "2qc5VWjDfjs7bgyajCmQB935xoVhU1mjYfK21ZrJgkaC9bbBDBGJrVFXk5ErJXKofkKHApprdYYLrL2XDU8pCehd",
  "key21": "48tX15JDy5mvyQ85w9r3gs8i8Fojrc4ZHmHarW2VUoLwyEXu6m8vPPSjK4ydbCuTmuVhjBJZKN4TLfRpsLhsqJCj",
  "key22": "6FsYVSNgYGJ72F69KjwzTcmZERBxa4wJE6LGqLpxdrrfjeN6QiHyoRqmqtuvZd4WNchq9fTekpnTHJeuGZmcFbq",
  "key23": "3QscXqjN5gfEaEx9hRW21imhHf1SoMWgZ4SAaCrahK1dkdKe2gXbYZwQgkVphGHrA9DAQy1U98VgdKG81vH2Gjun",
  "key24": "3jbGzfYUXktPctQm9SCKgDisHxuyQgBfzADgByEFZUvHg7T9fJxvk43J6JVSfFgVLnUaSvaFvRnmagyWPb7ydmo9",
  "key25": "2gQtHgtHw2DXmS8kwaZNwmR5Nt1fWhww6q4jPV4U3STtGt4oCAs88RfSmT6mFzb3Kc8weAGDjzt5iZWx6DARoEG5",
  "key26": "4871uKYQ6TCgYQAmDyXQFdNtKLcAyC7ZpP8gLVyL4zjNECUgzdZAc95YgvgvCqo5GqrBTSHf7yBvZfqCXs94h7Xs"
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
