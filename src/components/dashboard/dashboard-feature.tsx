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
    "5veKzsK1g9mBLizhiD7yDGk7SKQeqT147NiJY26gtBD6szYuxrc4ipLsRPtqjJhDSv9P23LoRxE1LboJJ83tvbtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ERazc7XR37aCTvbdxcWXU77NtjPGhwtgn1cVi9T7oexRtatQrxc3oi544wBrzxEPB9QXMt2yy26cBCH1q4o76V1",
  "key1": "4YQvDTPyENNXjkwzTc3MGRc72QhCtot73bunBgvSxt3GYx5thvd4BxEzRfLFLpk7BcPKkeoSZSG3AwWAQv2kYhg1",
  "key2": "2VBjPZyUfCeiYfCD1sHoYLAnz2mT5H648HbmX81dfNLj67DeFM4Un5CdECxGHVypsa5sV2Zsqh4tRnpZU6s88xbQ",
  "key3": "5vwFXa4h2LKZeLH7uNj8Djt5cnTYVVL76LKo33e9muNysD6TPi4RALmM8DHDG2f1QuxwdzKpgQLSyGA82nPPgbHt",
  "key4": "3KgyTCS5LLbfUc1m5G4iX9hLnwVKoNzhNaAMWmtv64uefgrKdihvFwvNfadFzian8PxMD1Wo87HJQqXiEnJen7Ds",
  "key5": "fHvEunJJyzqjAcfvNoRKzLeDN6wHysju4tn81ky9njbQHMbWqHiM4nmxBWg3yffmuxYJjm9CHFM2wKBnWJeWwqi",
  "key6": "5FK5B9qU4vsDXsQQ4umRR3Mu1jwZ1msBuaH6mUdof7hG4oL9kBiox9vxWSPsx6k9hkkpWMCvqYc2sDnnDtC6HDtJ",
  "key7": "3tHdKF34H9gdrs72MG93ftVSWK9ZseyemVmuqFvqWpM5NXx5Y1oWzc4NgdhBDMQZMaDSrcQNjSE2JeDFvq2M5HJh",
  "key8": "5r5qvgMoWNuLy4CX7K24RBr5L98wNvK1VQwPXi5eW2vhMx9wkFL8EG6DcUauzTy1EoJLNKi1wTs4GWgg3LfSyXMG",
  "key9": "3Y394nx9NVWD9iU6heTkhNhkTfR12NpFKRda4iShqvG3rEUe1tYSniAgVZv7ziqPuAchSJLpkYLwevEHiBG1VXRX",
  "key10": "46gKKxn7WRVrSUFartpaSk8jrKpSjqTrHoVKUvdRCeEjNA5QQ1rtsZYEqHYe4CePUsP3TJHYH6FYt3ZQkpvfWtGs",
  "key11": "3XBQjodrXctX2SioK5hzjAm4Ln1c1Gb1DciBy7TuDimtN9GbkrneKgxn7P1oAd4ETusB3e1aXEe6QBYFVQ3SEuwd",
  "key12": "JYe236cTJmLm9YZCSFMBjDFyrDU3yXsLRszF6CsP1KKPSrUXojZ5ehP2HxYnFy4wKofkqHeuAJbmunNfgHsmXrh",
  "key13": "dXgMwEPGnF27E93Z7M3iUh9KqQYm3XfNYkmS9oviCe9YNw7o8zkigvxmFidQQ1NYbu7rdwKwLTcCHye3duDm9Yo",
  "key14": "35ToNsXZmaMfu4MwHDQP6P8tD1mExCNigW2jHnXhZAuRW5bCCZn3EuzHZ5RiEVeqS1EPuxthFLQmugH4YKvgvNV",
  "key15": "2jBCyUgvm7JqLa474c8CzSDVojtdeoU5KfVgMriquvqPvrCpTHGKrmiFHsGKgc3mv79eqUP7VHztQsyKFhGELp2m",
  "key16": "atBaqT4NWoG1HkSQbAcXggaeau9U2qMADy1WUESFCZ9Kpiu3tYHsXrGFPv449XJamSTVH4FiPkoo5s7fWdCn17k",
  "key17": "KRCYqBsrz7fwNLm7CWBQbUu35i9KcAqYn28Z8vc8EQ3AFrKKwAxDVB8NF1w3KWYE9gR1R2pGxxEbj88KjBDQ7VZ",
  "key18": "2WDBzSpWtCicNFsUpY7KGG7YG9pEhpYT9Gf9efXkYRMBUvkDYmYiTWXb3U1tZm4KpJVPFDNw991zSVK4CzcwuoZ5",
  "key19": "dFkLJqoghNcz8jJmuqTGXFaPuqf8CKnrNhxKMPxqmNpKJ1JxqDjHn17ES5467pfR5MvVcvkm1PnRWcz1ohJVzBC",
  "key20": "3xZo9rHjFSzmHq6dChnUQ2UTjgywSi4ioiiqYkXvpDMEkMXtWWTan3VgnbJjBRaGuKXRhs8B6TPknB2jPjruYZ7n",
  "key21": "zBqaymkyqQbYqUxy4V2Y8cutoCR1jubKxQr1eh9t4Rh9U15upqaSsQrwLwZTVF93wXFoh7i5Srb1bqFcESvVcMg",
  "key22": "3A869j8b3S63796UVP6CConFGAkraPjyq8gd6z1vfLK8U7bmVFJQe5EWcPd71bNcNS1qjRuRCjuc4SbQsCzSM8Eo",
  "key23": "5kKZmgL8m6z33DTVUxbv8KESeUXDSerLFrFWcYSphHz8wXUPd2M86p7AYg4iBH2KQjU1tegUX1ZjXzEZTp2Lu4GD",
  "key24": "3DqjmWKUY2n3Jw5PLyfr8KPnXtS24AzyScmh7ypfmGipoYX3TS4HXehMVxoNndxfZhFwKMZTqagTBDkqgU4kGyYu",
  "key25": "4tBaBsmmyqu6oEuJzWamatDhrUe33QjVKrZ3ACS3bHboYji1f4jGhsdb6xB2Fd77Sk2swGZQHuynJQoQWWgkVbVp",
  "key26": "22vNadFhDWRwnqEqXwZ45KTzKX6oGo98ZDyqNGdrw7XizuKm6YRzmKSUPVwnrhRKdQgvwv1szx3S74Zbr22ZSd3b",
  "key27": "3r3pHJXS3YscCdUpaEEYMWA15vj6ffbirx3N6uRhani7e6hcBbKhhDk5pY4ubMrEL64cgdFXom2a6G4Y5N1aGJuT",
  "key28": "3nTTytpXwN31Xb63mW3euWUDGkiweXYEWdGXfNfwLkjx6rN5aAwWWGycLVzQ1CRWE1sytQabcHMcPubivQ3DX7BW",
  "key29": "5n8o4A3jpdhz1DXcwGQ6uEgMbPWVG6TXmEzXRryCMCV79u1weBv9HPnjLY9xH1fcoT4NgmXUf9NEJR8yfq3icnPY",
  "key30": "2GPSvgzuN8fxpLoqrML9kv311C5abxWZihHa34dJwgdM7oNNco2yytNsnWuwVUeKuyXNGTq73dYq7ec83XSBo4ky",
  "key31": "4d6qDMX2zq4JLfvF9LFvNPSNzJpZoWgp4rJVy5C3RGBTb1654fAoZaaT1C3bXi5wAts2AmHcAGZdhKXzGnnraTMQ",
  "key32": "7LNLcGotAXkNRvDFKE62WonXwK8hs2sjVWzg6i7e3dKn9GNNL6QxXnCeQWWiaSrUGVfGcxmcMr27RsJNxDABZ4y",
  "key33": "Qtx1nZYbqiRZKJ3GvvpsHBJ7SSbxVXMXmSCNCJzFybpwxeqiePsEfuBD53bUHv5Jnu4iNPVApikZGVmEradbKed",
  "key34": "5kwPt6L6rZ7DRXMAZ4UKNVMC6nMwfQsb2PtNHxYbwCqDEovS7eNMKPMLNQufzpHjbVddmkH3iZfJ664gQah3i26a"
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
