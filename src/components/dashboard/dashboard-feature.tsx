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
    "3e7TK3od7wR6VTvvHxdctUdFsvnMUSFAXWfAwFY2JFnDtg3dXR2CQje4yhMCLue3v2jaS1HFmwtees6crTeZxZ6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C8FnmpCWCa3bqNsUh2MEbmZ5nhTtdZNBtrC33mdxL53g9cGLqqPThLxEDxKuvPmJ7o98rkKtuVtZ8prvpaiK7WU",
  "key1": "4haWbho6KFWLmbFurbvRSyXzFuu74f1XD7VyA5dvYjMiMKMqBtBg6U1fngAzdpa19UpmyD7iQe5d5b4pYAyH8ehW",
  "key2": "5YqbefWE9MtXicn4XzG9ViwPk7bp5RaHKE8bkqp8Xyu6kf9pDzsrA7AY4Qs5EAhQkvVCFT5KDPGiUmnGydzeuuQD",
  "key3": "5fXRWxegKtJ5NHX2oFNpMms72GpUczZqnCqMQCh943puwntE3qfnS77SXbJ4Aas8jQJbu9mBb2GQKpeGbooMLa9G",
  "key4": "5LYks2YuFsCZgqHV8ZEBQripGvZ5ahucMU9pNe9ewPF9tscvRVTWrbK8s2m7ANQ7hpnnRoRbfrHPjh9a8jKmY3nr",
  "key5": "v5TUjyJXKfsYi4Z1pKnpjVsiP47ei4hH38tP6VicRUzvkQaX6Zpj8dgrtQvcgWasA829RN4aAihTxT6EYoV4Tjw",
  "key6": "38T4uS2AKRDCFrbSeRNN4NNoafMYpgWbUAhiBVx9GkCgyNJXVuPrKUJYBNrAtnWdJnMMTrTbyqW6FSbX6wpoazZn",
  "key7": "4Xd14iDFAV1kxuujyi4jdNP2Pnwom9QBY7fAdzfKvSFmCN2EkWDonMxxxxn9HDSsJeTdAyMqScD8r9vaDfNDBmLL",
  "key8": "5oJL8V6o2CChRNNakeuZiJhSHeRwBRGdnf5jfgXTvBZ1FjU52nPEHV5MvBaNpWDnoace5iW28iFfhhbGzoXDaako",
  "key9": "4zHWLcFe1M74HzBnJVoPmwLHfwcJF8ADhVni1DfmCVYc7nVkZJxkZiYkn5xPGGZHoxQH4oKU8Zq7uLoAwpqiUmzb",
  "key10": "3WFyVkASvFNgRKSV4QBtqCGgf8tpMbMi6Tu69NBTkviLq4HUjajc4e8YTwrAuC3jRiMvuYiBUAFaCfM9Ex9p7AXa",
  "key11": "2rhBm1ystkHG3AT4XY5K1ia4sK2ceSozSt41QSEcu4rMwFWNof2t4nUHtYtq1pazoAG5YU7TkAzmTqac3f4sMtyG",
  "key12": "256DAFUw9pLC9SDjB5xUqiYax4APXNwJ95y97SWUTzt71z6qwPybdEB9gLEJQshsqsSDMjfwbJTHaMQab8pqTKTG",
  "key13": "2Udpdk2T7D1gfQy9iyYdzp4KZ4242Qfg4G5V2VYLep8QyQkBTnu41r75tiqcNaNkTvBmssuuKqM5daKy8Hm8a12t",
  "key14": "2zWvdWq4tyvB2SYRkRDknhH5BoYCcBCn2zczUBgYDjQqbZhcGnx7kk183K5uq4rGwKm7MvwUFuLr1DSoak75Pk47",
  "key15": "3vwjj7R44UgeGhfKwsQ8smRxYXVeiqidLMtgRDR2RDfxNjWxDcrSvjLqZPTBU4Ytb5qqAQyCJ84aeKBH4jPmn6mi",
  "key16": "2iCVwYAiXQbgcYTk1GB49jSg4EQo5b8bYKzqsGDq6XrdDWVZEx7GiikXhgjtLWqRoDVnNDqwwF7Mq27qpeGu6iWF",
  "key17": "5hTs7V3p9ZNG2RMibw8xsEFzUq8oW4BXy44aemx6LbwqbWUWLbBhwyA9X5zWnUUSHk3W5VpyihMUWireWUGa6EoA",
  "key18": "2fc261AGWJk7ni8UBGLbckjoVCMu9wX5Broh9SFzqQLLEpzgsZ8AouS2af5AHDcbxhgkJTZYzVnyz6JA9BHGHCrd",
  "key19": "21vhXmoz6JhJTuuR4jK98rDBCd7kJpfGxeWghLbxrSyqBa24KjJuEQjLXAGgvd6zQ97wpprTT3wYrH9YXPBN2ScW",
  "key20": "8A2p2AHP7HXTiLKb8eFUAYfdcy1juBtGtmDZ7FxVnCND495VRnPDTyiHDskXuoP8fSkiMBM6nJqddomqRXZaKu3",
  "key21": "2hkydy8ZLhE8yLLF1821rmYwXafBMQaMZxoHFFYDDKTuUykKJeDcrY7aNT7uiCDi9FqdpxMK8H3otoavxX1jwaDw",
  "key22": "53kkvcftphb7rs2phh3TWoi6hJZqKBicncEmfVxATU8u168wCK2fk8UvnRJ9pswqAyiW9ANp4FyaumXfgww8kt8Y",
  "key23": "PREfUATPYoJBjgf6Qp8iknwCYzSC9egofwa71obGSfiniALya1sWoBKowY8UsLmxK3eS1JLVoVA8pjLtsqZTcP9",
  "key24": "hJoXGCtVpRayriF2ymkuAGJDVCj1ziJULc6HbTSrn8qqAkdgjSvJ8A1UJmQh9gTuSgugyCFWR4yJ1dBxbdWd3qY",
  "key25": "2MzH6dqPxnQ2TDyMZwTGEGwx1oiSkGLLZcHcdeo3EkiWrSXXPpjPW9YxDcUsLUcWjXpxbXfpH1xzP4m2kY5DLwxi",
  "key26": "4Rp43iMhMW8ygeToLNae1KwxJQpb8mzGVKerqsojFbVfuEr8xFXDHdqrokmKK3Hv1z3PgikCcWUMvTqqQPDPzk2X",
  "key27": "3SvmuPN8h1RbgVonHnaMSkDGTcLi7WnGYwgUu69eKtHzi7JrkoZK4VdUThveSyv74brg37qBAEijHjKsZzNp4zU5",
  "key28": "3QNqcPMXeNkNvksfFiwkNvTcMZ5C8zRMRvSxBufXe1VdDjbtcP6wbKnipEEhEJ9e6zd2z1z7Nc9nYCSWu6QBpRZM"
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
