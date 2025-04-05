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
    "3uryj6GxtpeogvCb82ogzzarV43sK9xLMtdU1dQ4S6apovaWyBS79jzktyYMyqDgAWiVNrmdMhHQXxdcNmYFYUpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UHvXWachttd8UUHawdXQDLG1N9LrjC82XfH5CN3rAVsBfTVEr2egLa17XdScrvLvpruuTuMjX9qpBfPiMCKSj8Z",
  "key1": "5KEBWhB47vDtYAN5w7Y3m1JJJ8VpJVYtyNS1BaciyCW1ktZzP1owXYWxPYZWZxbQY8L2v6tg7eNySuXxdDD5UnAe",
  "key2": "2qiGAWR8S2cnCFmijxe2fSMdLxpjgYDwCmzmpDxuASc5JmRZgKBHK3h8fMTkcyRXbiFAYF5MUpCwVdHvgppiQSRK",
  "key3": "2qnCsovQqikBxZcqZruEqkQxTT5pzza9zng6uSA1Qi1ocQyz1udgqSy1UtD92XddjQnPGR1am4LsPekoedeo3VEa",
  "key4": "QFmbUbD8s3dn4zG4jXueLZ22Qkq5Xjoxm2z1ETvjwk6yTYEKLuLkzyavvjmWBfq6ovsmXSCtKEX1RK3E5v6Hhat",
  "key5": "5NpXsufw6HPKd8DNk9JcFa88YoDzyNbavJ8yWzvF3BeDg2U7LfZNRXZQnSZMjo867u6H2F3BC999Gz1qAFEtnvwo",
  "key6": "3K79yad1XgBpPnSnR6TUg173JVQn5gGzgTQrfTXS9UNWCWaCV3meqPJt7erMcZtXTq4DxXgvT4HwFmvJkKgeAa39",
  "key7": "qbjBJayS5dKhujJauf3pex5iGJdiwiGBvhKNGuEkUe93u5yxaZvqZg5anQM8uDUs2SoX9Dx3JGrdJyc9P7q7Ujx",
  "key8": "44DDFhzDNuLufSyAhh2z1kcBDEwcBieyf9yYg6kxEfFQYD9DFbcv5FcYTDvwp2YYUgomFgNiKyima6SjXMHh6WoR",
  "key9": "636npZaXJWWw8NgxwxyqBnkBjeviCMVvgwW4ZeKmV6VFdirn1DbHATtGgLzfAebySM7PSxoUbXZrwWimZ4Tqf2dQ",
  "key10": "SY2qbNjGGcPNBMo5rUgVymk6yhEtuUGURT8GbBqELdRDwKZNaCqDcUcYsYvFY7YscSzefsswHTU31qtX51MieHm",
  "key11": "4DYMkzsxFsWZZ3SjFEDrd2RtUxFZKkSdvWQxRjrGZ4N4y5zcLHjvyoQaSKxGgMwDNS8wpypx4JvWJb13zYuxMTzB",
  "key12": "5dpWfKCBRXpcKwgVkMEmMAYMTVLQJTbanwY6hFXXKifK2UdYrSDtAqCwTCQAXFZUFr4f7RaxevqWqwwqed1S11Aw",
  "key13": "5XLWboVTZ2yjU2WhCDhbmK3YQMHfjmCcm1o7XGf5psGnf469aCAEno2UZp9RgGB3UybCUfamfwSNTpWPmXuzhmYb",
  "key14": "5jT9CSa4WFV1WgiPqYhAMkeDwxEUExH5NpYSk8CyHtU4LxLqx8Cnk9Q5HKh6DbA2uQzoFBvVasJbfjjg2qodrWXN",
  "key15": "3QChjkFZ6a5m5eRSSzaVp1skpxGcHKCZL6xYc9Nn2VBgFWTPeeBqw1CXp1hJWsFoXE3LoV1ykKzXP32bz87YQTgV",
  "key16": "5vx33NiPvBKU4PiNXvVrSDdgUrDFUz1qPsdacM675s8tueGkSxhfRKWubJtMfht74DKT8pMf3321rSXfxncx6PA8",
  "key17": "5hpXoLrFtQ7thT7wnJL7gqcLy1fGH4xBBMVRn6xugeZFVztfvfxSMAyHHoRvJ1v9XrqLcrNEZqS4raMZPxXZnqzr",
  "key18": "31R6p39JdHia8w2sodWPavKpVSiPpEiYo6nVXacf6eYVCt22eXYZXtPAZEMLMdv2pCUC2Gnobm7qV2msUkiHTtVu",
  "key19": "5UgpC7otkE7sLQTdpT59dknFbxofLUUdt2Uw5T2Benseu7FdGqUrKqVBVYZrgWnYXMa5kPpNs5qqdAtQpuKAWPCi",
  "key20": "4mUvX8XfS1bquxYARZ97HPoJcgueorBE4gqzrJxnJJwqCQrKCnS4LsnHBiH6CrH93ZpJuCNH17HsccturCJxueFm",
  "key21": "3KZEvnMVYf4BEVJvBrAQGradGvmKVHB59yyn4vEUbX8gtL8h8DyXPU5tneytzrxcCAuMYQBAUD9G5xX3ZyqKsryz",
  "key22": "2QPYMoJNkJZMVkycgnsTaiKuBGSniqX9XzCRioj1nf4o9q8UEbvf7KbRCKG23Axqo7pYkqxL4fPsgxgExRyf6Lrm",
  "key23": "4fTDQkuQDWujrNwnj4BXkdscDZk518ZGc65rMSt8FqYZ7aia9HcUnU8R7DWrvmd6j6pzxPB1peBH9mkCs7RQVhmk",
  "key24": "4EC3cDZLt74YPDYPMKM4c1tA3G9Y3mbc9o3PkLpj4nQvxYMQNnc9UcXBkV6nNSJdDyaQeTi2zu3CofJSJY7UwiFP",
  "key25": "3CQPc9SXBvTk3KHUSbyW85qPXdAVd9NpRPvsKzcYSXTKhcTurBs6uuQvFbVkXU1LXhHHTXJJMMkFrDY4eD1MCo3B",
  "key26": "3sn1wkvHZFFij4HTK9BC8Ggy3NUrn4sKyB96czD5TzWNUZrL8UPJwDyvJbRuGtJ8GcXjMVX3pJK2GZYaeKrEJk8u",
  "key27": "4QjSk1NJf8ek3XDRH3uWNTKmVx5g5cN3voeQ1HV4TrPdYqzNNE9G5X32QDS1wKovFSooAnipyHv2MzY7N6ngvafi",
  "key28": "YTHjx3T8zDJE9EcbuJ7mp9HyxpEMEb6Q1RghRnDWPVcamNMStTK8xNQsM27RARiwBf9UawY8SBfYyZ9tHdpRnrs",
  "key29": "3vxCiWJwFSW65VaS8xa6BtnG97C8hBKyoBS4XfRUi1HGjpCxYwnJCYeZGcytct1tpsx1wCfae4GCUyR7BUY4MLPF",
  "key30": "2RMFrcnSczpELMJe5UBJYCvxhxs5TXHW1Hq65ChHcjTSfj2vh8qqiztmEAtB86VaQPSp155BXnwKkXhvqsKBM38w",
  "key31": "2iqMJdoqU6As2EpxiHHLXjbfjSeCFHnc2M9MbD8qt2SZiKF39NRksjCu9U5PKwt2ZWURdbBSS17kczMTSPpdm5vD",
  "key32": "5638xf3bsTPqNN7LDCbZgFBj87sVGpQTx5mVxayuFuL2pYhdx4kdfcGTijQMDczR9ze4w2UBAaL6hE31wN7t3E5M",
  "key33": "qCcL9VP1bHpAvDq78Y6nL8yEi7hWtm8Xii89mknfcj7DFK1iyVmPkHzXNHGz7RJA57t3ny5Y61hyayr7vekDabw",
  "key34": "36XR7Eszq9xyy9ChVqn8byQDrFYBk11G9ejMPQgtWjtqa6T64c8ZDGpzmC4St6EaPV5bu3kd9GnyEiQynbeU3um9",
  "key35": "2YZ8r6QtDmbprf8VUdSA8MSkVnyzV7R7rQZMtA91YgkxiPjHdxwuzzNfRrbGD9NqEYdeNS1QBde2Py1Fx8xxR8vW"
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
