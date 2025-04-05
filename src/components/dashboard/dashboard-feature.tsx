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
    "3rmZsDcidxCPvDZDAnT67N4v3j37Z6AUaYaeSb5pLpQ7zRXEUwXfvxLhosUthgGb4Rxjoj4qABRZ9FrjB8z8xTcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bdkjxWfekDh6zX9pzbXFbTgjL5wCQTSs3jBvLeCHt8cXgxF8Q5h8yW8qHG8sDt7mzLeZt5zeSW5rpgqWv1kRXsQ",
  "key1": "3dCg98Q6AgnEZMTkfBqfSZMoXRuG5JZYRFvTwZtFmA1jUXCA6rJNMXoPqxGLaVzu97HxvWr8rFA8Agmu64Zi1bMJ",
  "key2": "15F5SWSp59P2yPYMkVjPReTnDPWKEd5V1sHZo1nEGjyxXFHChi67tWufuup6CBRrTrAcePJ9BgEM9PURXLkBVcJ",
  "key3": "43U64KX8VmRALC2hK5Zoi1uaVuZNR2YZK4fioCUR6u8Wmj3rCSJJENNmz52Wug6MmVkPyLdAAAhj3RHLVVBujNXt",
  "key4": "4bxuvzpoevWbbivRtX3hi8ZXpLkXm9XXA5g1rBNV6hMx2FhDJRwV3Vd1gmcrzsPTTZiAPKZqMhd6kmjQ77rmWLpd",
  "key5": "23Vjd797NP9eHAYMfDLovYsLPF3aBkiFAu3vAb9zq7pjMXk9o683Kxo7ZEut8MuoYSTizbrsNGVNMgdYB4Ci3qer",
  "key6": "4Tr5txuxSMhJtJDcfjE1B83Pewt6a68N1owktDpqabwHFQdLjxYKUMHcB8uyqcTXEVs6cS44Mx5BgQdQSjUbXAHn",
  "key7": "5Q6QgthNs6LroyevktxyFi1HaVyU2nrhWZwDNKttr2thGo1MrshQowC3vgzW8q8q89C3QndChFEtFr6yTFHoVxUB",
  "key8": "4Aay1F11Ks1Qc4V6gt3o4zHmKAqP5ERyBnheRMmPuRc4xRuf73Yf7j6UszTpbuDtoqFADZfvC4j6EqfNc3g5gyj8",
  "key9": "5BgAoNXhJZgxtj7JUhZLxZr8xdLVeqFhxKQnAqdvmsPuHGrJfvQL9hbuiu2THi3iRRHM5FmxN1oDR2wtBdSTXeec",
  "key10": "5NzuqDYJuVR66Fjg5bCRnbrGYaH8zi8kJivZ6MmDvEGjhJMBxw55BtsrpdNBQW1zGUPtj84rTb15LLh1251FhP6Y",
  "key11": "22ut6ZViYazn2W1ENawysnTUijP8CAMAmxjumX7ZBtG8GiurCXP8grtcfugfWTY2KYVkEovZA1qJxkUaQesEqwba",
  "key12": "2pqLY52WpBGmLuzccQtPtrxheGcYUePzV7PVwBccN25vRgRfb6gUeE3TseYgWANxpAFowyYn3yhJRaf6SPbyhSgU",
  "key13": "3r9EXrUL9QPHcMhEMEHXCe2whWFtWezzEiTLi3KeF5ePjype2GaFqqDRyvbbGtgmBF79ppSzmJ9UDTJ5GhMSBRws",
  "key14": "3scBXrr1BEixbNz4aKTtqt2meZAykQVYJYGmXYjrE2PT277sTxEJSPdLA5HLRfUATf4vMPZ68kr1wCMVAMQmDcYY",
  "key15": "2nTnmwZoY8KEyiK5sxntZRpUDwUmkai7m6zuDNBfw7KWjdd8dUJaZ2Zppm3jH83F5t9dpVvrGGBP3o2TasBtEsQV",
  "key16": "4xAbGr7tvxUY8kQWUZNo8SbUqv9JUwHMgpuWg9HmUpNFoZFQFmSUCh8WAaTVVsxUMxNxfEj6AqBWnkqzNcVsKsxt",
  "key17": "2yJoKondS7bYWW5KQ6qFHErdT5NPx76ZPyptH575wjBn7b9FVQLHZbVV9B6ZvHb9AvJk6uVS5fok1Jk8DCPqKDRV",
  "key18": "5iUwgBr3CTxfMnprVJ3hktAdnv9sHLwv4RPW4D3bmSzLtYnBA39W5zfY28jT7kBeMkeJyQNyHpHdaqZzcPB4Rxid",
  "key19": "az2oVcXbg1iFcvdEQuqTYucNzcPsHW5bLoArfFbo2YRa7bzDma8auGRsvtY6uFHVxaJxkHmT12XJWGuVYBV9JAv",
  "key20": "CDh76hzjrGSdH39Gg1GgyXwAdjnWvrv1QSisgEF3DkGp8q2pZ3CRPe6FpLsTcf4U1vfWzHz6GBVZxVrAz2sw7k2",
  "key21": "2i6zyAy4X57bf9GafHBH5o21N7bgLU5RRjWZwktCq9AYmiY7kgFKDAmUkUF12QdNow84HRu49uPTsXCpsiwAKqER",
  "key22": "5XFPJaysSz2DqzHqvkonVt85kNomGVFCxyUsme6bxw7R3uvzdji68JwGFJZPjR1Rr9Q2dDnV4T8bVFzs3879LL2Z",
  "key23": "3FRt3GoNEtDDWJUJjbSzo6rWritLLdFvuTwdwMRfvRcCp4sJE67iUShR17YMiGYZ5bqC5yWd7B1h8YGhyjhbArhY",
  "key24": "4ffgRgwtDcVyeTHawKdbPoFfCripa5znVFxbipDE4UXwwy8U1Td4bvpJKHcj9h4pEbmtiFG7gR2LjocAPj5Ccb6x",
  "key25": "2Vyz7k5MVPYAQ48EmuL1RvJA7bDrqJ3FhbgrH53yShhA3Du9uMwEyAk3vNXuKqHMUo8bRPQ8H4rSF2PzuTjfYknD",
  "key26": "iZmgpbdM46s4DcTnCy9AVBkGpbCj3G1U3EL8AoRyRvJKy8Tdz6JjibWqncEiNLZtuLwArwMwjmEFxXr8sgXZHyh",
  "key27": "9NqwBLyLSShbihkgWPhBVmm9Fajy52pxJ8vrJNHFKetkEUCjEg3TdoQQXjy7w5WDq1DtsbJM8XEZCjt4vq7XG5Q",
  "key28": "4moM8nBBNpjwKZCgj6PLcY1Tu6ZECYnoHXA4FMEgZy1cBVriz5iyswD5Uhc3XV3ocr9eR5k8uchJLNSzRwjLro7z",
  "key29": "3DpjF7s3pLyBwDrdqEU1PUACGqzAhHZPWxV29wD8zKvQiBZxdnzU3pjeLWMJHm3LkwBqkTJ9jA6xkZzoTjRGMbWs",
  "key30": "4TvWNdC4jzJksqrWi4EornT9rLgkS1xoPHv14JUG6vSmeXzzTGxi9GJ3te3knhDrVbEkUeRX46PZB4stwwNJEX7P",
  "key31": "MYESYE75VWvYrxakhyZwzSFwcyTZrpkAq24LeAqsYtZR7MYucUmrJDNGcskxygTQ7CbmFJmofr3RbowoPbWjt1Z",
  "key32": "4KoTMASknGorMUGw67j7vGRqyP4uewxD4h2SUGz4q4nEunxgX8CxBjywriVZBF6dAuiMxH8xTKjzLC4HSwctL5Y8",
  "key33": "zLwHsb5yfdiCPVFs2B8DmCz6ffUyaYczWx4kE2qgoVqkyTYLi6SfRN1r2FEAAuGzHByq1mWkmMQh1WUmoeM3My4",
  "key34": "3AnrXKB3ejwAu2oKYuGMxaasLQJj59vRgVFwxkcssnppHQ2QB51SExYJ1kQ6mhMrhqsscHaJhZFej2SquUF6kDN5",
  "key35": "565vZhDu4FErdUzZwpQuyKiDRTvdrbPzzwTTGqfSUPme63SNZHwJMZX1BpopAVb6kFaTSyfGTPrBkCivrjSoETJP",
  "key36": "3tSBNNycy7p5Qh6CG6McbKyp2Yq6kbkbLeZFDLXhFipZ6JNyYqwbdQDtMSxv1P6yRFbYiLcKckMGQJTY4a1bduwK"
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
