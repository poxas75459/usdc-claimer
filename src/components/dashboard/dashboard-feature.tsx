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
    "2QFUwe6tQvzqnq3DFnCsNmk51gfa7RvzNZ93ai622BemmxJdh7Kbz3UCJrNwWzqe34QwQm46q6DtaJ4oW3FuiBtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oGU7ozudvnnve6B7kf3ssEuduwKS81Bkk6zgU9U2xJL8gBoCDmwzZf5p9U5Nj64YvT9RVnh21ourDGU9z2ggeFo",
  "key1": "5MNDkyhgrKYwSuPvHY5ePdsfqCtAkNNHWppwzJKTdCB1Wr4V4mY9d5rRBmLQXhCTT3KB3geFJzJhW443hvzLeDTK",
  "key2": "5Vp5N6jPjbnGJzpbAeyATxBvqJXiHJamNcTJsfSsPC1VMsjmRiD2epHVeiumPdnTAVa8xR2aCYUr3F67Vmd6fiKk",
  "key3": "65V9sas9Q6gz6MBZafWE3pvvSqRQ9KE7afpTMXAfZ6x6WFg3hcdtiDjjBhnWrgXfZPGoxFj4cSNzzCkqLDBxAzsW",
  "key4": "5TSyqEnt7fmtpyoBqX5eWrMeimLmmbtKVFC9xNWvyX1CEA2dywdCPxh9e7ibM5nHvfvRL5NxhyyAQLknberUrSTd",
  "key5": "5HNGH9oDPqsRHnXZqq4sNHbw1RYfLX8khGUX6H4ENVZU3xqHxLZT5cxccRtf1d1WdELqRsgpjXk9WJX9wAwzHPS1",
  "key6": "63jvJ5NiWazpvk5kEZX5PRZYHJADgz5wM7XGY2uLbFwbDBRi81BGgPHCUwtBA1gFw8JsdifNYxEUz5uh1UqnNg9D",
  "key7": "5MmyDiYmCWchaz8NJqj5dkHtUvxLsRYAmdqspmtKsxngTWKZE6SzKQiN4Ywu2Q9T5X2ziTEBhQxMXnGoj27eYd9M",
  "key8": "4Mku2HyJw3RpzNRZNcAUKAAk4MetA3UJacCQnxVyRwnpEY9597TaRCaNfGgjvyC5rswM3u9oDCNfS87yvTag9g61",
  "key9": "2SrPhUdwTPDvrgaJFGB8RFiB62MvM16wcb5u8n99Th46uXo4tFASuB9t7nUoEFj2mx5nKF9vUtKPu9qryWM9rYi1",
  "key10": "5XY2xVYdksbLNR1R4pTkgqcEaAThANqHRFWKVRPSuusBHWE18tLfsPn5zHXfnRexwyTKnNzwrxfLaSDhzKUHo5jq",
  "key11": "3wsMkZPnhZ6zUxsfksJ4r4L4KeToTve5QXEtJ2eR7ycZM5q1gkTSTJqFaopKCmDrrodgU42Mx2sBVikc8AWfLdn8",
  "key12": "553ZUt9GG5SDxbuVqqiyMJQswPDpt75aw16M47DgYTTTvjy3b3ZkFARCLjMdpjFmqEiPYWmwkB8B2okZ57xtPH2E",
  "key13": "32HABAXp9bQxbkh9ykRnNSiEHm7qrjo1DRfxAyRxM17yo2rBAmfheVRBYA4eLWSbfLz9wZiGQihmemsKVjPnJ7jx",
  "key14": "3qUBQDJ9TLwAwgNvU6BDNhmWNjVixyyAdQZH7bTFPwqrHZthehXMz44ttFAfcCaMVppQSonrnxWWU81TPxsWknPs",
  "key15": "4rxGP6StGj6oQZz34wVLyL6sZykTLVtuwGCXez7gpz8KtRvWxwTBAsfhcKCPgnKPja7WFBF14zT662Pop5b4AEmZ",
  "key16": "3LLVB7spDTDGz3QKUeab75EoWQ3VFYogn1b9fKmn2CmoeKe2ZhZvR4TG7PCjcqy6Zy4kfW34v5X6FCZRVhxWu3qA",
  "key17": "4ktSSxTdMRUWD94xmE4oXYKJDbaCw2UhuPaS8wtPbUmsUW8FsbEx2G3ad88F8bjhFU34crYvRowaNGq4yh75zw5V",
  "key18": "5Mj4rpkqQMZxn7yGghbR3qJhKZampNzfahopRXMh11G9mRKQceazGbxT9cZTyFTwbWqMZhVfvPkBSCkeTUA6Q1Ys",
  "key19": "3pdPMVLXMtJMCpC1DY9G3ja4JAN3EtgTP9tgDqVUhHZeY9Kz95XT7Cfb9Ka1Hg9PoW4iAvXKX5QnMegHfMx8BSRd",
  "key20": "2ZjgT3Z1C16zWfmXftXmMwRDWwEPYmJtqE3yMHujoomhYF84236k3AfQVuAGgChagUXk7dM6XxsiaPV6VCiCKEQ",
  "key21": "4MtaKxwL28zwCmNeYhqVRTKdCWPCNU3zAfAX6xiS2Qx5QM1nqo6szohHTqz7gWgGH6RWzrumkwCfrsL1uF3UdqXS",
  "key22": "4V9z5zu1owH36hzhniqNwRX4jCUaBjRK4tVTpWoNQhXs5Y8pNdaZyqxs1yycn3jF8PyjcQwuCbkpgMXs4ESzYyHC",
  "key23": "4acGiwyUFSNnVxdMZ3LhmmCRGF6nbpQfwZTWb7CZ3KkNxMAc6zZXf1YRrqYruzfKkpRM6Y6fsZzxSW4yrFH76Mny",
  "key24": "3TMNv7jaZWDLSvXVM87Fq1g6PWMkQrqqHCX2GK111Y3U8ZMtyBaVkUWR9pDYZ6NuknPPgAN7sQwBy7rj7AtKyL8s",
  "key25": "5Rw7yXtr9RzcEPetGqZv5EPX2mHpKVPU5bgb6j4iMpb7kUHU22o7TCRBmGpMVipfodnY6mv8kzhY6G4EqZTkEEoe",
  "key26": "2P3aFKEPfBQbLxeoy9h4t4CK2EvN6uAp5ooYDq6hDEEPt6Dt3xTgP1FRYJHUGs8ZXMjVQ3KgbkVnwSFEzUaN8zse",
  "key27": "4HmxujZnAUzJ91QXPRbmEWgw4CydwDYQd9nAocyABziNAqEk9SdFrhoypL3q38f8x545cBZ6irhMPfiEtF4LJdnL",
  "key28": "5MVFZPDX14FbkNxmze7wWLbXk3nJMj9oC5LEyKcYFfS78KLHspCrUJpPvN4QMHdYzzWnn2ncyY6atnwfVN46gLbi"
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
