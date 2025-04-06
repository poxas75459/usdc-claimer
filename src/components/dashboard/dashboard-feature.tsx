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
    "2yev1KwVpiLrPMEeamVNLWW5uCS8ZtaiJqBkMBQJzfc6cZxkedpS5tWLEB795a1DSUjbWsaSqPjNVZ5xjHLvztgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EiK9UsRjRR98MJhR39Fm3QgwoZaPRfjXLcc9c8PaZriAcREsprV7WMLmfTW755vDbHeLF1ZE7jJqjsUVBqBn3qj",
  "key1": "5nnGFoNS73ZdqUERjsggcR5C8mKFWe63tMRA3pe8VZSL7mZ36gVbg8mg8muMKhLVzP1LRcGABroR6YK3owsY8Mjx",
  "key2": "3pRyKBeAMoFvFhNHSckQydP6ErBWLyN7iPNLrmrwwtp1rtepPVajkUPofeZUU1S9SdRng6Pj1bNvQkeasKjKiusz",
  "key3": "42nE6dCkQ8GHmxYcxX5J5LWGBypoefDvXUF84djLVya1xrUaH5mkvTFHiuS1UhKL5Wx26RuuA8QWL7BbmHariBYJ",
  "key4": "4X1VrJ5BwnRPXsCBEnuNiqA7EdzJDPTm12Bebs8acmKb9eeGT5BAUcVHcan9DxNeYjECdWsgpXHmzFxLPoAGfz6R",
  "key5": "4KWZeidTuNMHch1HkmC7hKSRycTSnTQFEQj3SmH4B6ptJTXQ9nYomP7NnmMwhCfxZ1Xte3GVawt7ykGe6QGU4CtL",
  "key6": "4Y9Tr1xedAns6DDkYG9T1V3WXJ577kQZhiuUusFftmnoQMN66nVD3KFoGEzihpcopApyjmqbXP3ucfpLNuwEz9cU",
  "key7": "5TsPspTqrWaFdqRNGB1CFPb53wVtmAhxtVu9hG4CQdU92gfBs2yGPQoZxUKr7MA74AzDKCUChomTPbBK5tzseq1M",
  "key8": "3P8PWZzpbNDewtkyebj59EkLnpa77Wx8NKeCnjD3x9U7oU9W7UwEkTepBS5hyJcLt8d2MMwbfWqg8ZoVah7VMEVs",
  "key9": "xHjtZGBWvsoHsC2a9ffqxLzbwpe4DfkHMuh6duBMuK6XTjN3vnYspv32kN8uyAh3uk4zb2ehGX5JSyPatderXBC",
  "key10": "3eEgkxsU8WMztugKxRfGyCb6oGoDdTNiLZDWXZnZDHYZyasWbVito1TCwcCt6VP66AQPv862sDPNABzhxdBBvUrM",
  "key11": "3osKb27FXz8gdBUqRRnw4NpXCjmnqZayvorpiBofr9GGwUgru1hsLehBa7g3FtQ8GHqgdp4wuTQt9nXh7axVyHnB",
  "key12": "49Qd5XBbJRjMc8CbRWsMbVKWewK3CBtAcx8L7iz52Vu2xJ7exbU7kyhAyvtNeS8BxZ3ysL3Gu1qbP51cCR7zKQUS",
  "key13": "2LPK7su1h6eC67zBLSkkpTW9jBj61TmV3EinYRrFTDunG5ZdhyBiDNEMYBznT59ReJB8UPqAvTtYp9jUvzR74c74",
  "key14": "5McSi1hpTUaaB3KnjSaEqvUryuhaLCJUjsBM4SaoGBWpF3d7DXQERF8F1VUvUdwBpxy5r3KYqgGE7Xb1d8tchhjj",
  "key15": "2X3oNvFdMJqNZuUPdmcAPVzxcfUDqcFyL1W5b9ZAGvQcMCEpxvnnDPXC5UhnaNpk5VM4UBPyD5o6gjCKX9dELHDb",
  "key16": "4mygSwKipASpvkoyi5hScDkYG6kzqmFhY1zGJXxZJ5PWnKbt4AXaWMWws1fqmUpkGUo24qY7VxLiyNxZoZxdFCsS",
  "key17": "5QdyDoxe2rE95kHqrLNuf6cKSY7R79ZuNGjJFYLw3bo6jeWW75mBfKWrwtty43nQdUhi9UZJvnToLcN6RJQnS5wY",
  "key18": "2WUQLxvotfM2AAv2ApEd62DhP98QmaHidm4GDqn9fjJ7gzxEx55CvsFMpqiRFX3s1Qutgz6jSMzdcfnUU9k6aX4m",
  "key19": "ew5RBjdq4eg5UbtzzCBiHiFq4hSpua3ZmNk9cjDmFWShExb7GZnR3YseQan1NTPXS8xthtxSvh3ichf6K5yJbVo",
  "key20": "x8ch4dCC3d2fVH3ww8LWBg6X49uLcTuQdYVbUUmzJ8Qf58ABQ9ameUxm7aNWn9UmYXjubL5MzBe16eZsdojmgc5",
  "key21": "UGrU2aT4tE8qQsB512ZCpnEsPsn91pZhbWpDq8m1d1dErXCj7tc1NxSPs6TyyHHrY5dfqbfetmAwyjMJa1JU8yv",
  "key22": "tycGJnh19NYugSJcJujG69dGPNgJQybFurNDC87AjEWpsYnN9ZqmEAfWNkqj6V9xpRGRjQwAF56DBtAd1bvRseK",
  "key23": "4j3mdzHoV5jqQdgszWBn6dFgEJf5XUaJpRcyM4WJuRxStgSjtm4SZ6Vw2dSQ8RNFf2dBUviEQvgp4Cquy1nkZd1z",
  "key24": "4FJBo3QXhSzowKz3RHUzHWVjMFS6vgSyFfoM3qoaxqrvrNsNHgAVuf8tV6KYQ9PERggUZcqbVGg1G6KgMsfFWw4Z",
  "key25": "4EyweoMuhrcocEr8S3do7uXZqnfeupPy7bNFwtXX9FEmdwgRyn3T6eRQrxsRC3LfdGEiGZhRQqwpDxMqDfpDepWS",
  "key26": "5MwRuQRyNv2c5Pirww1a3wbYMoHh29c5Ma27jFyMCXzPHKDtb1wGdQ4PA7qfRn6WLkW5ZdKoDgZ4EApZqkpXx4Mu",
  "key27": "4hLDxw3gGFWm8t4gByLAscUJfxMothpxaNxpW6vaWwVebn9Th6TUVrS2wdgkd5rm85uDLLc1SxgKuTENbWYkkEHS",
  "key28": "5Jcd3KJAnSW85PkCdRuWGLBMbRu56hmjrAxFmJMzXdzQ9wVSh2ei7ZLx9Jm7JiGZQ8tJZi85VT9UfuFEsPNjU6VM",
  "key29": "3qru9UnBWbe4GehLe6bgLobwovQZWYy2Nt8zg8siUwrJ3McZScB87wmPzSHmXuvKs8fXArconCjtqi8eYAmTTWMG",
  "key30": "SXxkxU3uLmtuvYyD6r2tAKiwUvyMGrCm8B6UqEG4rx3kt1fTcKw9GEVbhsUwT3x5XZDiYgLzRgPHWScozy9myvs"
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
