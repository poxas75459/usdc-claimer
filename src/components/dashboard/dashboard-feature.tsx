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
    "cKWHhF8LqSrH7K6FNtehYD9mjZom89rPWqQE2wc8JoE6Zz3KABtoxz7mh8ef3ZgdoTAJT3r7p3xN78f3Sip4nHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33RvmdbnLU5rAxpaxSsk9Ar9afG9EfFQjym6FchqsDUXHyUHv2FK9i8Vpzyf67qPrzrwm9tuHYSmwYMAzGv7eXjr",
  "key1": "vHYnxGAmfDqu3rkeLyCihnsw3L6zYMQ43cRZKuD5fUgaWTCWP2dUN2vHhskA6hbHce8LVuY9y3CJSnGJhXvpqoN",
  "key2": "3eTGhdDE9ZgYB7RFm5WgnUEWmNLuqpcED638jmR4C2d4vXD6Bns7jVyQaRRPTzivvbq1n87hTNdb4akgnp9Lg6Uj",
  "key3": "7ehrnpkZNug1vPVm6CjV2wrnHfKpdG8pgyrKvaj8M6GYFSegGK8v7qj9gVrKYVdGMnbuz48kXScG2JXNw8T3eKT",
  "key4": "66tdhmMjQWT9UDHRdjkWB5NjeCVM8Px6QDWS3QDAJcxgPSjftHPeuVwT1wxa88QGafVbPtQcorhcFhJVb14KVRGt",
  "key5": "27KiTRtEKWrkkqKLbfNKmYYzDT5nR2XfASfpYFGXU5Zz7FnCKJjUKgKWycqoVgvxJRWAGCoG3QKAeaZGgSJeQUYt",
  "key6": "5MxRmH8usy1C5YSCZBFcTjVehNUFzDNQri3C8xmvhMQXDb6BdhEfsSVqQTjGhmXRLiX56MFvxRFxxLK33bdEUVHE",
  "key7": "2Hbe2Yn7EWEUsFHEbnsgrbQtWaUmDUTXWVyMaATFyqjwYK56SLeUeaEKk6rJaeYrTvNtvg2fh7shDDc1FQTHvJpi",
  "key8": "66nPta7n7pAM59E8WrvwT5D1zyYtV4kQ7Uvv13776MXm3z3PTSYt8W6yhBJdmQs1ZZUMVLqhXfJxNZgZQ4BfNmvj",
  "key9": "mDvEe3tptQwoKWe2YAeHPwMz3YJfXsgp7FCRBYERMd2SsM13dZ4oLiJBnMa6NBPkngaBjCLCf713cdBKfX4KjvG",
  "key10": "2ieCgDBWPveQJ5XZZXQoLudDsVY4zHupnjiaLb7kHFzwd2bUXBnmorm29mqmVJGRvpknVLirAaofJREYfs8ZYmxt",
  "key11": "3WCZN79FbG5iF6tgCiFB3Jhh7APKC76YNqG7pcVza6GaG6vg5gNRAPdeXVmf3ZQHjGgkPAn6WW2tP86oMk85W8Bo",
  "key12": "64WaWw55vft6pQUq9GTqvmXDM1n35Y7xUwPGjhftNBJvLLn5k2dx6e5LPm1DwpsfUgK543ECMppc3WtC3ndtgsmM",
  "key13": "3jWa2BVqwRf6W3nCjj4YVQfVn14LnZmWNSDGkitbFpdAb4MhDhBok4hiR8fiSZ5zFaiaAkZFno8FMzFURQfaqXyi",
  "key14": "5yoQPyxEC9FCQZA1p2pe8jDfh5hCvEQccxvAPL1GbuVnvwSep5S4TGJar8AbcVKJxDSeqNCYTZ23Pnm9VFX3Mx6U",
  "key15": "48mwTbnijqH56zdWGHrcT7K536ujRez4YPAonKzbHJVSNYnMtumM43GBnKAwsrGNUdiBgpDvaiZ2WRcvHQUh2Mc9",
  "key16": "mhQKz8k4GaLwfpuhUiBEReHdLPn2ppRR5WLbTBNgQRuzA4qTn5PNTibzddaWkXiNyqDwKYoYeyd9kZg6Boz17Zb",
  "key17": "tm8eNNMRP89njCT2gJSzDTfMYAjKmvk5eGMrgZF7Xbsr7vyLtY8vKQWfyFxwaN8YLtYLw3H2FcLSFRyZSZms1YB",
  "key18": "3wb6435SPgVUwjDt4oA5razCQqNuYvPubRza2hsXMBUraPsh9sPYwNHs7xhDbSwmue4S74DoM4Hq3rncbm8B6N7S",
  "key19": "4UsAkvseD2ZfrwV3edNHqLkckinK26JjtbmyngRTPdt8yfeveLis1VkWBLFdHyGPTYT9KgC8cqEReJJvvFUKCUEr",
  "key20": "3KXqMFouQ22oWoedoVp4rEUQcKLGipTmrWgzENz8WQsGjAGUWHwHsXkFSDDcnE5MpYNdre9YfaHXVh267fgkCm68",
  "key21": "44zX6RKQh7ffyHkuhfBZwHaKKNYsc7a4xhCyqJUcDNKzSQ3Y5k4FMWcvFmcgzVezgu99o5LsE36NJEy4TBVWpMVL",
  "key22": "2haghfpt2EDfuC8G83XeDxywiQYBVTL3Kfvp8YZ9DqSHyq1bS5m39WQyDCXu3TqT7ctpdu48RHMhyebt4VTSG4vR",
  "key23": "615YX6x88v5VaeemUoSgeyFE2z6hRjVSq3YspW6XXViXguYbgoMovvbeEoF2tmTtC3G2GHhNKeu8mpMWs2QYGdH7",
  "key24": "5SAvjR3dXegxeTYrp2KsNgPthoj6izz16khHynbYL2wH8bdK95QHAA4RMrg2ASmZByCJFDkzXnd14Ep6Tmg2YWF4",
  "key25": "51ztpPnPTz2EpJibjuX7D2iix9rijUDQyFjMrTqhr14tSyVx9bjntVeUBMnfjAnSm15yDV7vRiiuY9XD6yQoad3i",
  "key26": "BUoMwBDv2uYjiE3cujQvSyQHzyhc4TrxtzFnaHx383gtGHR2h8bXmDNjAFYKA4pKVQg8uE4V2CzVDAFph7wWowf",
  "key27": "5bsp6CPn8azk9HyGzm1iKQMGF4ragnXotsLgjHVobcPpYDgCrsMqrHn8oos7j26qn3LjtbAZKaEEqi66BSMNC4Up",
  "key28": "4VgwWXtiG2bYwJLHdHbYJaAaA2QBtPxfqkpWhy1qyKnx85aUsavgo9dyid6qCHQ1k93TqnUFY3JoatgvCHJ8jeqw",
  "key29": "5HydFr5fRysw74nUMfx39VtHpaNxDsxiXVSnUJ63YvzSKAydGRNPymK9VV7Ek1BX5JojNggfzQWmpRTYdZWtcCRQ",
  "key30": "59RZkS8WekhWS6cc9hVQt6MwTJE6LbhvDvYAsJ5kKfbkzDWMAdRGvTkqZ7MWzzYZxP9j49BXWb2CBpw5mYjdBcRm",
  "key31": "3USLgwJUGLebrv6TrCzEZAghYZbtqDdcKwtMPzSTFJzhpAQfvB4SdpEFrGDuFhv4zhXeLDwpNHwhs6vaKTkasaM",
  "key32": "H7HyUNgkCmB51GDCcGszr2y6E1zJxY9zBKzPhyjQV3GbyYfFdU2q3y8d8JvKSQv8YZWJSC42F2KBMuDGY8BDSBb",
  "key33": "eE3YsfTbUzDuU9Ub2ArMYxokoziZBW9vRHxXRkdZdZshLnBAQ8nvmsK1PNLiFB3q2SKyAqDcGrvfWNg8HoWEpHJ",
  "key34": "5QiEFGtXEUSWm7fqZvNQkXkcws5np58uqqCKSqZFQC9b4qJdywHrqGcem6RAwpj8AwfCRnCv3BTBDjVRxjMoqevJ",
  "key35": "56ebEem3iSTgc5yFF4VATPSsrJibmpRKNx4AupWD7urzqLheMqyp5ca1AqLnC3Lud9apSc1HZJTD8JrgyQ3zbQR2",
  "key36": "5EX9D2Q5XSvvyMpY6ptWVTdEjGYgvh2gmgiQPfoCGiFMjhmj9929AkEi3Qxu8YS8Mi2y5JvCnTxSXmK84sVZqseq",
  "key37": "2WyMuvCtwN7cJUUGjTjoFANuKpfW97RYbNNocyy3V1kqmEMBDgwuTBCuWuvyaDi4gM2dXamoiXDGprUgdRiXbaTP",
  "key38": "4y5cLnS1TYVS7pBbNMubvc7NrxAm92K6Lce21qyfNrzfnzy9wKZsDPyfGkMzCh3L2jRt1PzVUVNdCub2s6qGx5Qc",
  "key39": "2De1JteD8tqcBM5vbLSvKmfH5PmpcrunjLgntbzLsUCcfvqBfcBFYwA3zgFtgNr2Fh4vFHYBXJdjiUroUfJKLjvq",
  "key40": "27AeHxZnEe1zPzn32vxK2nrSqachocg8FgZvpajNHWpnhaR1DpES9stPSZawdgnzyjXdbEhV8tT6KS11XXDqMbYD",
  "key41": "wVtbPrUZCzYZEHB4WLnsmnd2FYdLKZsuKK3DqPSqgEmZ1RJft8bmvDecExSigQzjzJFpL9q2ZBr17RB7T5D24Aw",
  "key42": "33U8iaU2xiMocWQ8RyxPruV1zAR9dBvt2vFo4mxtHPhLYgdbpbrkeNXQwVXMT7Z59YLhWZYMuS42m2dWsUHZwd1p",
  "key43": "63fxVNX6g69JVF1ditD7SbgNWwQwjm87igDVQqQLGTL6rsS8inDXzffUE1JYfNFYWZu1qGkKCxchqgqmdBMUGuFz"
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
