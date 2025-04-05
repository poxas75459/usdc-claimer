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
    "25epvLouhPHP2wThRAMaKE48dDE6m7sAx1TtviyWdUAvkEkVbrNRbMYYakZdon1EwP52DcxnigPtcf8tpVXbWkgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jpSSaQj67N7qzg392AN4MUZUwMPcRJwxUpAD7NqYDjCCacQCp1jBFtiLDnRXH6ezerpDP7hrjqzScuKRxtwsDPV",
  "key1": "43b6nzvgb95Et44zZJUPbJd9zLchXMtAqt6ayYhTiJrLnWfBFHs3wLRuZFYsesrv559yhUhNKa2RPnWdiURtyjoz",
  "key2": "429QtF2asssnBGAGBDAZ13MAkQ45zgLJ91gqTSKujoEzqHZGCregZH9vZfKKAKoZDJDaXfJTeTsizAp7QWKzQd9s",
  "key3": "34DcmcwoFd1m73ukvPKAj2GP5Lkx2hc9zBDjL5R3XKneDB7bWPmw9ynpSRv5GJzyrm2RogqTa5NdyLLhq1T79c6u",
  "key4": "ezpyjZYDrEDmU6UKGAUXY3JdBwaGi8fLjvFMp5NUa6CrUfty8i1zDf563ybmwCsARYQTJ3MCm9w25NF2oxNTcZL",
  "key5": "2KvQQBpKQ6Xykjb2qGRrsgchsifEVJfjApzrFbKgpLgJVz6iTpAEcUTEv2JUJFv8oiAaVjmdYg6aenMDD3JwjRmC",
  "key6": "67ApJg4WJriEEgqN6SgqdyPpgR1GmYtxcbu2GUsJXdwYQiHTY1zV7dfavbQwS8a72CdXzWFmeBCyGM9DBDYrzGe7",
  "key7": "4GEQrp171MYgAMtUeiJfAYEgcvXUtnZymA9KiopvuWHNVhSenwCnVzMhAYsxxM9B8mRejf9qFA3GudpJXM3i2WTR",
  "key8": "2Lc1NPfBDPW4AgYgnQaTrVZrdzZ6w9k1a3HPNJKrui9g9JQNxjRWSGnVneYoZH9z2JsfETUGK9D6wnEAep6ybZ8j",
  "key9": "2ebvCARjtLdNmYMZCS3Pqk8TMiAQMk6UAjRm1bC1tWUgNRkKbWvWB5xPniivUTfFFU8vpw3szFepqq7NE8MW7BZq",
  "key10": "5sZzUx5ce84jYfhNQt5YHWMBZo7XKkTnFoP1GcVhz7fhY2TnGUkctuyuCa75XNPAw5yFt4dBNs3aBCbqS6e4aXYq",
  "key11": "3vh73K9kwffHZwEYyMAvKzTurNVAh4g33k8pXFHkUze15NLxSBVZ2Dxdm7ptsA7hyybgGE4DYsgWaK6maPstLNnG",
  "key12": "2ihoBXPbLtFM8dYCPVLTAWexQMqE4J19cEHot2TsgMAuhuQt4Kc5GdaCWBxmHLZfcWysXPE8BdPLKF8NfgMHfLdD",
  "key13": "39hhVuhYLzQodNm8nVoVaTdZn9MknyDbyBiMMdtwHusLqZgsQVS1QYE5MsghQj2K2v8joKdShwreCBXJZ2gXcKcp",
  "key14": "3SnM3YSzdqeNojzBosja5G2xUDafwdLCiFgk4w7xc9E75D8neDz4uzg3gtHu4ig5SZoXsFhvgiPzmEbimbP2q9S2",
  "key15": "62RvzdsLaYVE6B8NejUQ18esDjBSxMX3dYWXDncKBfjRcu6cAKsuqWmYHtn2RKL3Q862X43KmkDdbNMaqmHYqUsp",
  "key16": "bUdPS2S4k8BGoE5ve93g9ig1piN8LYBquBvu3y7yhsunDCzEJVY7yz5QRzxEUtqFWdhBjWu5CwUDEuvutrjjxmv",
  "key17": "3sHb3enMhzMB7U9kgMQz8RwBjqbgmPQXB4XP5oHnr6FguP23YeVLBbqE72aYKgW8RVBpoVcwTvRsa8qu5PQwsnMe",
  "key18": "YmyUdBqbqtkiWHUonZGDXQeLX8mwr3VeDCCfRULC2G5s75qmKySms42P2wJoQpyf1cBovVEYdVbRYKR23vkrqA6",
  "key19": "2okwnjCPTShWA4RzkmFjNnz9dsP99wJgrZqqthKhvBZgLT5KN4EwiDgERMNvfFQXQUzrEiuzF8gfm9xV5EgjM6Au",
  "key20": "3bTxGumV4bAVXRSyi4f5fQgEbN8U9NApZvwEJBe6s7YVTm993be9ExkKNFs7bW3yjGnmwNZntrPNaM2zDSV1TEjo",
  "key21": "5ANy4YErLKJ5xMs2Mv5tsrfeWc6kb4hrMZgbYvCKxqLcEYWqLwpfwHYFc86SCtkrdbK1vLxMcbMrC4fbRv2jnQm5",
  "key22": "46Vg82dEj9S6RfrFAZN6frkeFd9Z3w1MQCyqK3eRN77qatBToUGYPfQvQiFhotJn9y9NdZhjhV7L2a5BNdwiaXNE",
  "key23": "387arYxHo5rezPWu9yvU7QwedQnLqoxtcdA8vTF26EUb557rnadc5RFzkUqj9Yp4FqE1m4NN28UFCCeKYDDmrzEP",
  "key24": "46kJvvGmQXueWMV6ovai2ZynN6dnxsjysBq9RpqS8BxKGVdRmTTHGPt493n9KYbgjgGqTJMbQyFyTAnkTnvfStAE",
  "key25": "2ZK2cgNNe8KcBKJ3AUYyUVC9sYwPum2d7aSF59JQRZfF6CxrHdUgomgWHDGfhyFywM3rYouQ7G47Ve47u9jaHUyn",
  "key26": "5vFMVUZ72B8KeFVVQyJaAGawV5LEQKVkBr2UpSEXorMa1L75S5waJwzS3NAfR977xJ9ZTzgP9hkqq6XnYmQFsKyk",
  "key27": "4xWpUcR27eDd4hAx9TSbaSH7SfMLkRGaQ2hLoQDWmiqNLVxj88LAZeebRCq3FSsqQyforNUGjPinRx5GEzqy7xud"
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
