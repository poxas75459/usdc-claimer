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
    "2Hq7S2pGdKDSXPUiyeTrrZjkaspDN2c8UcRAtTnah7hk5WGiE8bbxyvZiet3Sys4JCnaaN8mcdU2BKgSK8uFxgGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rXadh7LU6aoQ9xmAi8xg8NDpvjp4gBqwr6ZDcQERjB1x1EZMQiviTS1Nc3PboXn6Bbz1V9rcP71QfAk8Vbo27s3",
  "key1": "2JYv3iFR9rWCYQotgvyUMRMvd8E5aXnxMAktwMbyGNLqt8kkEmwcvkrxBPbsiU8Km5fHNKxMZM536C4yDirHdMCh",
  "key2": "4Z3efnxs672AL39PXFVy88uuGwySFr6sZmVsvzKxW4qQm9e7y4hLk7T78aiptWMwvVZhn6juo1Hip8q75yk8P2oe",
  "key3": "3MBUs1U2LNxkjHxir8HQL9qtKHws9bGUoksCdRHEKAENSDgCiHakHzFD25HDbNPymUBUyk4f27pfWu6MRZqJyvPU",
  "key4": "PC8LsNcx9Qu3QbUAbgcw5rxFB3nBwa8ed4jcRcDXb3NrXQSpksxmATvCB5NinU3zsfcTt1GDmGKbSYMyDgFnarh",
  "key5": "4vpEo3ekHkbdCndEqbXkxBVxiRoLxJVQGJq2gWhWpsJz9ZS249PNBt3gFhmPkZpmv9yduH4xoRs5NcELzikMaPmx",
  "key6": "2D4afGB1ViUsw8WPX529DDD9XwFBcr6akznhgT4ZMXFEgoiyixriuJR3jcf5U1ieiT72b3VVEcZmvWFrhbCBVV6B",
  "key7": "fZNDNdWrzBWrWzDLGDWpLSXwALSL6HSp1AV5m7BGvDspkQS7JjdTaYTbJXT4krL1Mv2txvkYc6ncmXLwwvXe55V",
  "key8": "3WshuEvSGo9qCmE5Sy9cog3QaJXMWxZT2oNhs9eJgvqxs5hgfWTxiDoyKhDrb2zpcbBghYkU8KfmwS9qWHkPsEpJ",
  "key9": "5x7nd8u9JrfdGmyF2Qir53YoopuXoupY1DTVyEPh4c3KEcM7yA7QZgbsijJFdnRCgDJzTGJvQgS3aZh7qnn5CnaA",
  "key10": "3RjUN9pWUpe51BDsBZaUJsnjj74m7SWchhpKGgcheWY7Uc5JZfihQFetA8DfL1US5WNTND75yLmWgq9WMssJnBVT",
  "key11": "4Rsd1rAEGQQaWpZ8bpT837rsdEbAoXjwUwvB5h1JsoYCZWFnAbXfwHbWUpECB7zzeKwnmsth2V57afdTr77e2geh",
  "key12": "4c5XiDhwupfHjSstzbx6qRv78c4UeT1WnFkUKFK3TVYzEioNBMieNZTK43CfaQaPd5S6urzwiai1TCK4p1YkuXYa",
  "key13": "3U4hA2wf3khjt812CMiSX2z5VwrbD7CJiDToEuWQdBwcHCi59PEoNi8zGsx3tKK4BnLcDfSHpoFShRkLGfnkCeuG",
  "key14": "4cZQQqeF4pzviCdNnF2BGnZwXyYQu8e5MR4UM9C8FN8Q8EkCiicUwtAQtjMBsMGHncsPLT7hexY2BkXMpwPjeteR",
  "key15": "QhGnjFVj8GYH5x732Lx7HT65oxKsNV7UQBexDMvBjx6NQwoLtFJuXoTRTBz4eom9eh9dh91KQrvthAr9nEhNx19",
  "key16": "2q29tbe4VMSJtm59rKE4HZScvqM6Dvztv4cYNiNafxL1FHPD77jY3tVnS18sRid4muFE754vnYQze3hTR8PT42EN",
  "key17": "2DDtvpyhnwQZVtRwUJPkGNV8FAcet67FwWQJMtd2DCQvEVWGgAz8SHdykZP1EkF37vgcdZkxLHGs1B3oGwgSjd6f",
  "key18": "2BCryUL2ZqtaAdQSuaMgimVdmfKSF8vadBZVBMiedDb2LqKrWZCNNVnwuLR2PpaFRKm2vLL1DDYmCQytsa8SwahL",
  "key19": "4XiRoey95ZV9AE4FP8d6ttXTSLtzccoA9DX4SyuRSAoJdzzui2GqqrLrKvmN2G6yABeJodsFFaD8C3AFKEZRi5sP",
  "key20": "5wxYnJtPXdkF2mQDYBf8PvNYqTgoSamonDJKFpbzwD1HjZ7mQY2BU67RnmyVZ1aiNgECNcS5XSP2FnFt9tbKfiuJ",
  "key21": "vH15yUTuZm2KXMN4FMHrqrRHJciKWJciLnu3MKHKy4SwTAvCn6bL5Fm3WnoP2rBMhdsJJR3yNT1yNYuSFs9YoR3",
  "key22": "39HNWZxUjkZz1aGWFzDbbafErDPrChsE1fhDMkZLmD2iUw3TNgjkMkBRWkkwGEvHQUaqQPzqeHmiEZ3qmBwt7ctH",
  "key23": "GdE4DJXBiv3U72e5jNXyuxcTh32ta8qbBaMvBoYWNqPTS5guwMbwiP2d5pmRqJeWwCaJtXuRBB4JDPB6spMvbDp",
  "key24": "3ptnen3F3h4GuisyfW7XXZ8MYR6LbqWkEmgTkaQcr6b5w6PG6U1ycSYgKMfGidzGWrGwgLJhAtNbsW4qthUzWbEK",
  "key25": "4rUf9JdYy8VzLyTSU19L2HzMHpVNX1zoVRNxT6UV1mAxxENkWVtvboXUfEGYuSL4XcEACgtvRcLgzYJzfDMzvNtt"
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
