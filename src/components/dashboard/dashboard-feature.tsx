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
    "2Lz221EyTdJ4rPxkvZsnbYrKroVcnGRo42nwTo7T42YcnYtYDT876S3URUdJcecngPWoXiyj291w88P7HUEdz6Zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aEeWQLqH8aoMLxfRZnH9jV2ivFKeXwirfz7AXSB6Bpytgyty95gr5tRFUxosSWPPPv8bghy5kns8XoKEaBZPqB7",
  "key1": "Uh9iqFgrGq9UmFHFHbNgcRGBmXqnyybKD4KYMRU8nU4RDFyiWbd29cH5efTp494U6tKHoWZJikoR9ijDFk8TfRU",
  "key2": "esWRpRHFxdpvvDHQTfgTYkKVf1Hzjpgy2biiVGkLjLaR4qH4v1PUrdPEe37J6kRCdzXsCRbTZeZrHMANRHYmi5T",
  "key3": "Nqr5WwW53RN9rbLWpFGhweRPFvQjpzbGuNVkoMamgLakRYJnvD44j6E3neW7S2rw6eGEDpXyUk7hwrA8GWSCJTq",
  "key4": "5w4jGc9yFhn8bADJgpMd9oA2ZPvk29TK6AEyTB4SqZZd5sXee51znXWgthZqsuUaXmCJcLn6rYMSCZhFAW7Zvuth",
  "key5": "2tdGDYBDmwGcM8tuN5sh9gF2LSsNLRm8YGawdoRu3mJy6EqL1kU2qUQLxaJVjUVa3FNk6tk3DVkiQbBveoRxY8aT",
  "key6": "2ib8xUf71QnSJxTsqAjV361rEVhfcFYBMmXpDswZqtZtgPrKRuhBTq5MbXYum3uVRVVaab6xVWnjEZUdhSRSBS77",
  "key7": "5axghY2jWQGxL8acqe9RUMDUjfa6Eufs5L72oSqmwSqVGBz4EvfgwmTBf4E4RRtjQDKRcxUbKTVB88JakhSuhe2g",
  "key8": "2XkA8u7S6eCEmRXgcWobwZHdTfGYL7deq94Yf65tCHcnwyNC3gjmjJxyqBqbuqiPE32XjmRbu18pj8wxp6fFWiJR",
  "key9": "5qgxBFA7eacw3Qe8GSd5wo6wRqpn1tN1gGYFW5hJQnu22eLi3rCntuUy7tpv7kTXrqnDx9Gint7zBspWGYxzKueV",
  "key10": "3Are3dRK8H2FUxCvSvTi3YetNDGhdWUed4pKueycDaPCSxrkQjc6TZh1oYMYipMYBZT8GVVcspRzrXBKagLDsVhn",
  "key11": "4VJtS7zj9XjQoo2ZnWBMhjTVDrMUE9eSKHWzoc2gCWajwBvCv6XYFry18VsinJWj7NvN1mxL3htL8PAuBVFAJ8ru",
  "key12": "2sHVx4uUydb9MxVy3TsxVkYFhnpB5kaw4jjvVQRLC9HiuLYNiN1jeG1ZWx3Xeam8RyXcheWGUDFCPiwdSYFByXfz",
  "key13": "4qKeS7hmMkLKaQj6CSF59rUjraayed8XKM9rWMzvMpNDVhG1mhiGnjHw4Q7n3KLJjZwZFHbTgWzn164jpicYeCaq",
  "key14": "4VD44EXYAjjWLPgV9qwaGX8jsn3Q4S4vUavJwRqv3DDepg2vroPbqw2cQcByMWPVEiZhbqHfk49LcnjiJ8cdMHxs",
  "key15": "4NnEcpj9scosYEwLdWHoV3qw2TvYkdLR7SzRiRGHaVVp8mtZDaUZkx7BMNyyqFNiCRWy51XpEnFfuRWtNFPxBQH7",
  "key16": "gtE6NzbUWzDKQr9nzWStbgj4NBW1KFg7nFarVgLhR3KocXzXNU5UHovGN7fdt7VFZ3NWWjWxnCsvsgWbeZ5J1Lr",
  "key17": "13EJVzNAK5P8yHKLwePvC2dPWBvtWbJNoYnNBoxLTfKGG2rbTATgZHxJQ4vWYrWrXZZ7jxNSmvPhbvR7KWmBg5n",
  "key18": "3kqGnw3NZUd22P3YXgKqYCPBWGbteKF8eKWWUjzY1ABK4qMXzgoBLjevZ6kDP5WWVZJLYchxcPQX5ADq9zRLevwm",
  "key19": "43GvmXPoAoBYvFHoncpY8J4DbkePFPw37LY3qKAvCWXa5kdzXHSErRi7mMaD26mysnbhMzusmJBdJk3F9V1VLgio",
  "key20": "3jJz1tbVzXRP2BaKgMjSG6cBs2LKzg95fNDKq9oEEm3qSHAsrP86hXMPr4BQVFV9ZFzBKaondPWyshQ4zwaiG5Re",
  "key21": "2b1y5x6ZHPRjyqEPjPSFmKRGraDGzBt6BeDvmFeXqcrge36UUKCtXhose5zzgHpcmE8AbA8JaAf4uytsYfm17eBc",
  "key22": "5ofN975VE9E6Y1xBJBTfJrMDeuMV9zD1Eqkk9ear1QdCoRsGsvA8oE2TETUbPHr1W2UFrXngSVfZBfwtgC2pMm1e",
  "key23": "3N4AoEYwfgjrJWqDSx32iYHGARu9EKFh7L4w4zmoewdQiUQbPxS1wdwuc8z22Uhxr2fJx4YQYkMQz4Wyk7FY5JYS",
  "key24": "5Y6ikqsY7VdtjE26wgJxWG4KAcgxXBGRugJ5ZEXB1qK9QybuYkJbbf4zUQuZq4EEvdgXA7uNUmYGjhSBK6UzpJx6",
  "key25": "4QUUE1iqWZp7HrLFGKNCk6RFavGi686bNpGSbVd7VXdJ68Kk3BnrXZVBAuV4RJfQi4yWEh4HQ3EaDkK1hFUE59Y8",
  "key26": "4mdqxCrqdLAuEh8zJ3nvr31WTUhZqgyHy2pA1B3U5uUbC8wo1MFJ9dRAvxDsfr9xvpqyqdzMHcEPng4zTEpPbsxG",
  "key27": "37sSQyweWvne2aicaWJ9UsPSkaZ3NF6Z8bWzvGaagZFJPqvJR1gTbPVJ8An3iQdX6uabws29ixoKRoAtKe5Ptrtw",
  "key28": "7AQf2cZ8aT9nifSNT5SZNATZscWmcLtjhnEr6CV85zLqbTb1kGipNB2FyDAf8uYMJfqmV53SAwfdCHpuWUAzcoh",
  "key29": "3MhH858HKkBHVUTjuiAvzbspMNEX2DZ2LbNhHntEzkErJEe2dGtBAWwxqe2JrtaL1i7RkGbKKiFk2bymn54oT1if",
  "key30": "6mNaUMFiVz9r3giopK2eBnJuBzgnWDZ3hAK2PUKZwEDA9aF1qziNuHbW9fGBhTpnXFbGdQpUzgk8RXTDGzo66Bs",
  "key31": "5Dhkobh5ZFxfhZspRvm2Tb2HtuSNz188vRwZx4kcqiCooDcoYt2EgiDD3GM7pJzQqr81D1yx9n64afnJTPuL5Mkc",
  "key32": "3TB2UAUW7ToS3Eig4ApjwWwdsdXmiUk4KCj1EYWoosTp6r5gBJTU2J6zsiNYTZhAizwddYUMibFqAqdStTA4ZFo7"
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
