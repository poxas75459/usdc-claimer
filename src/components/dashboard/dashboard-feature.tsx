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
    "5orYHgz7565xbYxVo7tZcNFGrxm8BvKGur7L4hinbkXW9Mo3C1HHyHgPWZo2Fsi2PYBbicwt4zJxLhpkEyyaSsLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NebHWH3bdKrdeAHPihUtEghkVuwcnrF5sDkCfH7mqSZFmqovVyUYL5eqrzt9C2K2JkaHoAvgcZeSX5Bhh9tnMAV",
  "key1": "3yWa4JC6CACm2oWSWbegQLdc85WvV6s65QwVB8B47DbnJTpepejQ6WhQ7BWFz4hMRsL6pqqhNua7nW7M5EVhfkdK",
  "key2": "4Y26FyU2EpruudVUtWZJ4HDSL3vW2MA3qd6XFDxdragdNmzUe7Ccs9RoSP3A1RGpC9tJGA6sH6uuvNLf9rucykpw",
  "key3": "5ym18aqrSB2f7PbwsXVFUsoPubaKtX8ddQ6dzZHC3ExoWd8c1h1ChjnjZpYTJwXvpwnf16CBuQxsYiaeHjKQgYRx",
  "key4": "2pMprpkrtzskX1FqUFAR8r7UfDTSXHETrYr5Wv3eF77EWvrhcpBFX6esg3rTVXWTHG4wbzR75ccEV881oSvtaiZ",
  "key5": "3as9q9nBvwfmCxpxWBQKwqCkKvK2fz4jXzj8Ld4khpCGm3YVWFfbXgobMR5ijHE63s1ERpLAs9Pux89CH5sx8ZKM",
  "key6": "GSwNkxq78qinz5V8aFFXYPuDvNCgaj4faW9pfuwvbxEngMiPaBnvEUJc5JA87tsLDp58RLD4ycDX4YQcnDzvYT3",
  "key7": "3wdXx64uezA9ezQesLf59WcU4UoJzYPYarFgFEL9cqCwaxG9TNk6Lf2dznqPVPxqqmJih28m5dTeb2zXipYS91BS",
  "key8": "3DBeHEmPuh9rTre4eGQ8S6J4kBzzwjWSvmvGXLbz8Rz95Se35p6A3FrRWjMeVsbg9pEWMTUfqLFvP6BeSv8H22np",
  "key9": "5iff4Ji81Le1YEue1TE1WtWwuX6ocpzzitFp4jphNVshSd5vn6Pn8S2xGdd2L97QgSoAnjvRAG9YJ7cNnF9pEWUu",
  "key10": "3HBiRWUp3h8f1PgJxaSrMy597e32d6Jic9fYGBk5ZfBizWJ9mVNrVNxPyW8ffkgPHsXweppKz6G3LB9Lt6nEWwtF",
  "key11": "4tX9evzTtgAQgatFDacFYzrFVkaQRxAnWBvA2yPZEuMCbMAh2W1n5kMLxYVokZXraNychZBwxDz8jTmbmJZyqkt2",
  "key12": "2QQQHKiqa5H6M4LvpL4md8LoPS28a3fq6DPiM9xt1FtrALyvYecDfU5bXmppt2Rn4MqkExBajLmfkXM1h5tHeekq",
  "key13": "53RiM3GGXfpA4K8bUTbNCUSfvWMc1FkEZwJvbTMBjpawuM4gkV6f8N5aD1EoZfgp2Vcz44xzCQXgq34BzXQc4dMN",
  "key14": "pKaN2eezCGEpHARpEcYxsgT74627j661zdh6hbAB6XRg13pmdgxaee7YZ1NU1N9RP5oAvR4tXjkAnKq5SefTm9r",
  "key15": "2nd9xLhXsDGRfPobnvrwzbmpVey7MVPwJgKjhX1fwKmD6eKrnRJLFxrtwBVHwHEqoUEhGatJcjr1yBus7ZrK7vT4",
  "key16": "MGtXCUy1yXru1P7aqQyVsVvqo16FQcMtjKQai8joSLHZpuf5pwsDgYxGphoKWmPR1noeHwWW7HEZRf5pFKdCVAx",
  "key17": "4q1kQHMSWwknw4zCeUaM6EomkBqhDNwbvZByxxZ4S8gvs1xs6hdMNmuxarqk52pEPGrjXNMTnEBQGY5mnSDnYrad",
  "key18": "xdaxJWNV52UTMQwsPvuxh54FsSrJVKdduZx4vmo54PUDy3d8W7KgfrvjV2riDhan9zeih9MQkTfWJWdfuUpiTfj",
  "key19": "3a49kAt3fnjixdH5VKmmzwVizT2jr4uaWaedUjSoLjdy7YGkZuEXPNWMxZaRj711w2AWfmCoyWst8wMwRemTiHEm",
  "key20": "4jTpVnKd2LCmxvR9bT69MAbPJZKczim6tJmZXtrRcMFfhGVLtDmLc87oLB7wcdkgoT6uuWvZ53wjJLqeZWFRXFSo",
  "key21": "nrqezvb4uasxR3Qw83Zm2up1B8cXCzCf7ogYvmTcAff1ykJSPGBaLLo5kRVQpBWBXsfUbF42J49t7KNkbQRD8iH",
  "key22": "wSbUKZuFPTsKd6mU65EgKQBphU9FCPXi17nkwPp4N2jgRXf6AsHSoppaKtJmXWxNV6EDFdwRXFWTH1UKgRkzqj9",
  "key23": "4bj5spyBLWkTtwncYwBvEMzPNUjnya1qEmZat68SAWm5QVbYgATQwuhn91PZW7UB8ZuTA6cMZ3MWkMDDjh3ha6Qa",
  "key24": "jVJQTN9oo2AgUbN1hv6KuvGN1L1Cu4Qbei4EECbTpmWKKLLLs67qYW9x6YBu4PE7j9xnd7zKc12BGJ5wgy9FPsN",
  "key25": "4KX7napCoVVq1VrhiWMLxBcCmL18tquEpCJXnYf6vZyD5vhVEdyRQw15Mf4qqx9vZDv6PgAPF5pyFVfntCgJe8zB",
  "key26": "3KvHwmDtGjmYBZ3oxCtu3SmQDnAKrAW4okTeuiKhNHWcQ9Ra1ovpHdae6xGXatiLReJdSvFCfBfEut64gx24uh6h",
  "key27": "mFp8NEb7ixW7Ecv8UZZwUkgN2vsJUUXeu36NJfTgmf3c3WgygGTHegpDyY41EeiQPNokuJMHJrvMsoPbVhLJxJC",
  "key28": "2AqxYp67WudtTSisDjnXkuf57MY2DoHHsmYhjiUFwuz1FyRic6sSPQy7wtG5xg8WnTgyQL9qZQrjEhhHDM7TD83c",
  "key29": "4kZz3kPXzVsmWhFH86YQihrjAPmLK6zG6B2QFmj4yEAhct3DzpDe98Pq4Rrc4CQcQHXYw4LF8e5u6XJxwYPjCKKW",
  "key30": "5shdYkHCKYW5ZkJEdJQetfk3XBusFVuzo4cg57Pi1Ur1T1MaM1YKqkUjyAYPGEETi9DX1YkoSYPLyaECdB93ceX5",
  "key31": "2RxWhp2DickpqLNRjqvChgP5zxXCoBjoChGA8H5GpGcTsp23qbgrFRsKBDprHfQD3bGnkHQ27MhkoU7T8yes84cj",
  "key32": "31NzgNioRLwvXgYY6shPXVmRJN2dwLnoDDHNahuZQLH4uwBMqVCiaYNiftt9LC2F9iQnSHo5Piz7iDzsoWW4aYNw",
  "key33": "3ywxdbagKZaZNuiovcqKBoQGS3aPtmUX48hLBd6UTPXUH6ezzQp5XMToeCmxqKi8D5oVJ2ywoQ2nbGpufD5MhBiU",
  "key34": "3q4vFvRWexfGZsJustxR4BMSdtZoz9pY5erMHf2RrWZAkM5HY3rmqfPswX1a6Z88SFAW1F1CHczex43bwH2yG6mE",
  "key35": "3j7fULFo9m7nkjuxJkoayaTPEk2hV8HtwxLAyX4fDsoswiUxNs7KuHUqZquTkfAAH522XY6qxqnanhbvh5NAaFaR"
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
