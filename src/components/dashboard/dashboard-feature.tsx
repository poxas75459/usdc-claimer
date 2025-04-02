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
    "2iUWnH5r52xM6XR6txLxibChdATj1Hs4HdtB3aMtN1L7mRcjSbBC33dmziqdfyxtgUqi9dgfEfGYUDMMwUZaVXQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NUEXhi5oe62Kd8qb6FX3gzJDHtqpsckwDhdWJAmn4dCY6BAzpxu8XepxpvdoTfmFFgvuB1ZjjrZVyriahAyt29J",
  "key1": "Q3vH1z9m2d6aDT53NbC3S94hyxkaVmtDDmwKPawBDX9aq1at5WWZATiaj2nBiwvWBikJ8TTYeq3h2CiQ6t5F2Qo",
  "key2": "QzNHZnec8UZx3zcufZornnZQ3M7cBeb7vXCi3rrmRqJPa5WfpRei2Dkgj31PQGcFABo4qw6NF6mAtkg677TJtJX",
  "key3": "5G1ghAqeTFCHYRSCa4ExFUUxaSZgJ5TqauiJNxsSfK9mTfmhvm9aq8hsdSxKHgtnHRhRh3xgenkXP5bqBrWngqjy",
  "key4": "JkcYkg6DWBmCbTkTgghLpo83S5mXNMi1mvtiJFU6Rv6WRmkk38wZv6LdP4HaZovzPrR93P8Sms2ze4BCzq8U4YV",
  "key5": "7k5QxzxJhQEbn5az2v5hYFty9G9HLuXsogbZnvsJMCjZUvDJ7mfVWAaYKug2qChyJdrPdVq1iuoyj1aDP3XdATL",
  "key6": "3sYfxmHL1aZ5vajdzvpBcA1VnxSSX7reU2xU2eJCzoGzgY25ZxFVjNWvc2xN2yJjQREE6cvugMqJRR78PCD3aFfD",
  "key7": "6miwPiM1q27T31XoFiQkSKZ87aA3oVWm4TzYjSA5G6DM36Q2Ae4NNWTnnTjbEr2GoK5MowLTmksoN5FjxJZ5CAo",
  "key8": "7BvqYRSzjBAz1bB3tvqPbidqBQ1vG2d4V4rTxBWHKXGHR9ZqwCYUyLincP1o9XXfRFpG94v3Z3nBj5NdzuydB6J",
  "key9": "nGwfJfxZv1AFwPKbiocb5HnZiM4Jc7Bo8Uskm4hSLNHNnruUfKZtL5y64oa58c71s6cncBAVQtKw7SDoKg7Pds2",
  "key10": "54w5KfY8Zf19bBfgV3R477cD2AL598CtyDQ9v16zUWs6UMFFnHFPetkMmbKQH7pSDb9GJsi6GPSXpoVLq3XpHKZ3",
  "key11": "5ed6W1S2UuBG5SUEU4dCBuSsBoYQr9VMcT2BeopTqmcYYthB6tbQ6u5PYPF9zXLnzwiQJ3ZimchULVQGVU9bR9bh",
  "key12": "3EUZSpZyPqmu3YvMK6i2na7mpCSqUGekFL4ShVBRa6YfZLFzXpYXMLsTyEMGecQmGTdgP65KTU4dqHR2GdNBG5FN",
  "key13": "52FqLwvSxcz8PB2N8F69dpgirdkfws4o5qvSw6nx2kHKWMRXJFEw9xpfsMK7wvo2UoS8cWADx2qi7o1j7ji7zbh4",
  "key14": "5gykaWRwessTCwrfk4syfZjFWrMHQ3buUV2GvPEozpjeBypp1EJEWx3uZVXR7vMEtdVRKmuU6PwUGempmundNzkR",
  "key15": "DE7nUTbZ3QMBsbWBszqmezZLCG9hGSrttZ7SPLRncCehXVtmzsNhXDcRNFoo4vZRhX3qh69ET3Sn192RAWo6Ubr",
  "key16": "23x7bbJGCRpqo3MQ6ACpEz7Ly7u9Uw27xoajTxHy5zQvf4Hx1fuyYWPYFs9LTvCpNfX4LsAbrk3LPWXf1om1Lv5i",
  "key17": "4vec7y7T3JhYcWeiMeh1p5RYXbDfe4YATVuhZArro2rJVdbmn4jxwoemAP4ysGKGjXeR2s4WwUdvUX9TPzH88WsU",
  "key18": "5Akwk9VJ3YafvgkQMRyXiymFW4XXCoVPy3FMH1QsBGJCxrfFY786m6NnCQvtsbrDbqAFqEtP4NKPJFiUeaYQSpKc",
  "key19": "7TAcfZjDFaWTxH4N4G1jyYx5fKZbJnKsnGRQiXMzfoWTJP4XNmk4Lf9kRAxXytqJcGoxpwL3qfb6Cpi5Tq8Lxn5",
  "key20": "5QYzFJUJt54an7HpyGr5wP3oM41GGidYcbKi46ehSdUxyMSCKxWFG7FzVhjsaEcXMYzNiV3xvB8K2xu9GK396Vxs",
  "key21": "FPBcJZNT97gmMAp9k7PpDfKE5yCVBhUobynAkpK1chW3ckKTC23ih3qHK3kzB8h6NRTV12R4AKPLGrztkM7ueZA",
  "key22": "4MEy9Rio2n4p5J7VFtbGqQjFKpPpfEKh6Yycsy31GUPRmyMYWxNRyUyUeojEsGTMm4NodaNp8x6AYcmQnjpcjJt2",
  "key23": "55HGbm8qc7rV7mowj1HffSXbcBskvnv4LLhvf19Zp9fdvgjGxbPcNSJAdF5JptcGpYq9poCuZJg4fntJyDBo3XpZ",
  "key24": "p4HyV3dUYzaua4aBwcj8w7ENkMfUWBHzq1yrPH5mPW7UVFsNZ2eij1quBrx4i6z69p1QDjo1D5cfF7YdTKtvnfh",
  "key25": "5gzbs6mUWBM9YvV7UzWWB88x3W1K1GAGLmsc6h1csDAyCTQRqx3Ej6HgiFjiHXSJAErL8maEEtpWiqiJsTyRKJ5T",
  "key26": "oYY3oXiyAWX6CspLqEWEhxdKDPLPHJzjFsLWnwegGf1VGMNKEFeRuMwLnVPJysvBP2w5f8dN7kmNbB8sLVKo3uy",
  "key27": "2xXC4mkBVvfcFuFSHijWo5aETaA79smn5BjACh2Bra4wgBHcuBZ4ZchFF2fuuRyXZxUKR9MWp5nR2bQtE3h2J5Bp",
  "key28": "5gpWvNE2RvtFcLW8EA1D8mYjaXkcEzABSnouJsXa21NW512tnne2jPFPu712t1JE8vxioZMkFxoBXzHqpMCnCPcD",
  "key29": "2KHsXTqAbsnYytW38shCEBghVeULuqj4QDn7qzzCqPF33SVoUQAJaZJ5D7Qp3WMaenJoxmpJo3KZ5QXr6kHMRtJZ",
  "key30": "37mqEgLzFHGR9GB7YqLZjhawbhYqLUsem2Qdozn4BnpmcpMNdCkgM7JUuFCgYAV1hzJLVToSgdQXbUU6i9iKf1bF",
  "key31": "3pYHcJxugZGMshuNXP3UbrJFcHpivXi8YG2crgPexdFsMxBesyNdb3w4zMG3dDnX1oh1xXYvcgWWzMiTWZScSqqf",
  "key32": "2ct8W7z1zrzVEauN9GuBqUuG3um2Bi5jvxsh55DnVjnAzZYsthvQoYuyM6PAfKb2nSWdCbhz2C43ATUoH4fkMhHX",
  "key33": "4V1QTvq9Eu7uXAeV9kFF6uCi3B3qnWn2JduagCTsKFaWbmuoyraHQKupkbkvwxNiEKCkhCx23kutvDr59bvKKLEJ",
  "key34": "4KMuDTkGBX4vxKtegXrER65zm6uWjBh5p9s6KChE7A8eaEgnoEChbitN2Z96hVXDvTRuFSQYcWqsENRuJuGbPmMA",
  "key35": "2P9APtjyNjqhKvCeimeDJgE5Uf6heVnJiM56YvVFxLb3rcN9f7gU8jbxstGTaP3H4cPWD74m4KDzpvNqFHGfGfw7",
  "key36": "7cy1aMPNFhTBacoLQNdwWaAKt9T3e6j2xKWNqgdAwpc3xhU1HRPH9JvDAt1YWvCor4tsLpkoBRdyd4XzX8S9UF8",
  "key37": "3ebwLUksv3NErH4kGuqagdhspSx7KYHaFpHotWjz81JgF6cbb8xV8C17Gb1JRVBdAscC4zubAEEmhc1X6RB94USi",
  "key38": "2Eo5wLtZrDEEuZ5MLxajxTcGV5krCtjRiAxcHxnoEz3WDPYF3YZpwDME19uNoWVbcon1BzYgMwnQ4iu9UZgENCEc",
  "key39": "615gyQuyAPSG7fQWRpg1qNc8nBYs5MxaobHrq6rbhUwPySGKkVvLLjYzDckJNk77eHukD4gyGV1y9Kjk9xgj1KiW",
  "key40": "5UaEWtKrsfRA6W3VhGqdy7rfAqoZWcki88WBAAUYFqnxXbxwSDQTNDRraFjCD1TD3dcaKrR7i4V9VXfoyK6fQy5h",
  "key41": "5Z7FkF96PfzjuWvddunmbsjqmuV2frJUWx3shjycG6kNGV4rDSYAyVsuU3Lr3icWvSL7PQEnnEHpizvS1GSMU6La",
  "key42": "4KJa8F5m7DYCA6k3FoyzXbbKCdgCT2um7Uf9EhBYYinxKanG12bLhyw1QnQsiXxhMNUfhsfVPbWpycgnqmJZ84sk"
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
