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
    "4eZStw4Ssv3x1wAyCu3AEC8YXQzyxUctet9EDrY8oEd9dm3MsXScc7hJWPNDsD9qsUT3VWeEKoRWyczA8NTwteaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35scawC8MuYBqbT5XSSATT2Ky23tJ5CEYeYeMuvL4B7zZNYDLki1dicCSo4GWMGajVzegb9UaqQuia2tTAJ5HjTi",
  "key1": "559tRk6RjHcQ4ATrCwgYnea2DZ1t2CHbu1t7LrSBRDP3UepmyiT9tiH9t5ohQae1z8qyHUr8VzhdxLR9nvXG9irk",
  "key2": "4vPMQ9yZhAyZLL4J33FWUucJGCLzKQxFacaCHCPFk18RFURheATVhDfrWsDugBK7xWG239bRRHPYfoi7BBEW2qKa",
  "key3": "5EN8ezTXmhSBTTjfcKvjFPxNQyoz98obTEZRmoQHEwpGjdQDuM28tfNufZPzbawB6nxHL1ojmm86X8sv3kVKYKLm",
  "key4": "2teGfHvN36k2woqT4uoHi8h2YnBbTXeWs1K6SKkgyqxwyefmCDYyc9QZtMNf8rwqszcPKy23W5pqqd7RWasM4PMn",
  "key5": "Ptgu2yweWmHpLFG3p4XN6kVk2cs3ANasaUaTMEwHRVZGVDi3sqRSRtXLGtpiFrKuoj3RGzq1wGkn1DANTWubkTR",
  "key6": "2bnREGL6iUMeGMLWMYfJwXz2zCPayrb8xuyWqu7PH4T1kT1dGmisZ7Ff6fQkAJpRgDx8ENwStMNJm7ULoGcHYaWJ",
  "key7": "4D3N4nvi9E65tZbhQ8YF9LeutuyeZiS1dEQKJYPu3ma1t1iaNf8hHpMZWNiHHKHw2JEJKYBUhgrDqFzYL5LNLAnY",
  "key8": "GcUWGSVeuxcin14PLG2fMknzrRLKP8SZPCdGuWrgyHAADL8vFthNGrXL5rMSzBuHpaqEzXgyZw8kfrMxsxMEzZh",
  "key9": "2MGtyxpyCEs3dQ1sKKC5zoBRyNc31gdF9BXbL6b4pyppZFA2wKk6CArdK26xbWGh6QQdWr6sp6f2bkt554nsbmTF",
  "key10": "5heZNn3FUpkNMqEJsfnjY1odgcnPZWn3KaXF7sNBS2hrUiLox9NdK4quDvXWnoGHaC8pCgebo9zvSd1NEtL7QhoT",
  "key11": "41pDMr6w2zGjGMWwkKeyhTkReYJkiZo8DXVeYoPdjvRarpLUfVq85EKKWriwt6cuCrAUMhoijKGXaCbu7vQCzYAR",
  "key12": "4ggQavgdyH9xKdECHgmAmdMpVwa281CDj3KoBKN6ZcXXhFbXxK3qsWZ4aaKEbsSjBxAuWC7m3hT3x19jdKYomomy",
  "key13": "rki6dsfJGiftxC1UpNr1LAqDAHNkbR8NYoG6xmHeaFJhZ6sKS2R9gQ7jmCyNDgCuauW2wd8rG8yGKr8eTJfp5Fq",
  "key14": "2mB91Xuk9K7uSPcsnomgafGRREiTnxGDLRTsSKhe5nWnkHWA2Der9yAft77tHWCKz4VbvkkGbHHcTcuJ32AWzCpK",
  "key15": "55ezTyi2tT8ZQs8PgfonLBvFPkiHSiB5evHSuMQBrrPPRydWUqvkEmo1Loc2eAUxCqh6iqkNSnqEUVV8g2CSdNvp",
  "key16": "3paX8Z3V5TLkRczJjigM5bkkL3c4GhbLJR8G7yy3FyH25X4JtWbHLXeu18948A6TW7HQZHVfznGYjYPcNqR4oCc8",
  "key17": "2GbJgu7tLGC4MbJCo3DvRsV2T1iYcNYWvqNn98erRmXJ12pEkkXgSqd4LWYkNeSPtX1YnxvCu2qMFMqqYSVYypXF",
  "key18": "2rcQ3NywaadnrtDu1ipeE7UkJdQ4rhBLBTCzQHPjHW85YZGgcKvShgPRHCVx2sY38ho8Hjbvqv8yi5kZ6fmSMs6s",
  "key19": "5sE6EUsu5Jxu4uBRWCbMr1wAEyugDEZUzoVjTjGULkFt4XyNq7iPaL28MiTzoGBm5EmdJpMJYddViNJ86FdeDLxw",
  "key20": "3izqa6xkCcB81bkcbcxvf692zSoc5ohyXmo4C5gttjWriKidNWX8j1Do2zHL8JCqtMw7fVGDuptMKjzydMVZC2iV",
  "key21": "5LSJWokszSWNKE5savLRrFxfWhpnBWK8N3xfNFC1AWjcNpgj7t9GCNvBoMCDk6yL4kdnbXkpYJ6YiK9jP53AzyBj",
  "key22": "kHPsU4iAcRS8UVsYiKKokdgJXTQAzVqC8N2u5dz2EzJ96LGhQ2TBBBzFRFAeH5nUWN1TTTEFfsxRwpsDUtZWri4",
  "key23": "JWgckdzsoFN6WmTjjg8DnNZMrnVMcBY6XMUBZdMNtVK9kCMNvHksV4bYR9hgAeEwpbXzDDQtMKaqjzhxZnCjXTm",
  "key24": "jPJhewwCMBLY8UQUY6GyAVJvvfw8T5Q3prgJJ75QU4F8eqWeKkgxsVicNfc4K6weG3pLwsAMHUj6x4CpPRPsu33",
  "key25": "2eHKJQRHRRwKdK89fjtCV748mz18aAZP6iQx4evnVsyMnYAR4nKL938oNQzqzGL7AyPvRxg9i71C8ZTVK4GLABSy",
  "key26": "5U3pq6By4QMdvTmyEGGR4pASKVz67nE1PER6r5d9ZhS2qFSHfnuABkjk6kfc8AtFyZBSfaEmZtxfHof8cEaMQ97M",
  "key27": "37PKR3bvNhASHYrNZfnsFRpSCimwqp6gVhzuZrQr8PSqCVLsqDgGBUXYQ8VwBW4UDvFXiNmFeyDPnQYKM3TVvUC6",
  "key28": "2p513iy8DVqSVKnWySGU41UioH2yvvcSdbhknZnjnJ4UyLUeKmjS1FXH3MxycERdmDDngVGN2pHt2N3ycDgWkRy2",
  "key29": "62NuBJDZgRvQzAuB6xNf8f8gyHX4Xy9zeX79CLp5fFMEMvGtAfU1Bctgta217MAyAxZFbpfvt6Pt5VYydrNeDGNT",
  "key30": "UmyQaTYE121zJf24GQ84cafMPbLCkgTn8XrywCB9VyJMx3y3nbRTgKv2pGYxwbnudBDYdadZrkfbiXSwduyhia7",
  "key31": "LoqY9HPZaSznWHfdj6bhQH5rxep8Sy2R5WWGoAaEmZRs1f3YtiP5meuJN9WATiYuiPMqh4yKua7247DsbNbdtoc",
  "key32": "2ETN8cafeDnPjVTxivhaAkwpvFuP9agmYVmJ1n2DtZVYSb7DLPNah8GrKjNKEMn23WvTnYVtzvzj7AmkeEJe4bj1",
  "key33": "5b6crPgeK71zzjZzaMzZMZbP52E17LWBMsQ59nydjtdpntn8jfhfy2aiMTr8JUeHKY4fSYkxhJrrPxyZAaxzL2hf",
  "key34": "5qHEbwgjiS8yxeA3UcD9DbDScheYgq2WMbbdEnvpJDdBWrb7BZi1QzXf6ow2hAkA81g4aTvey44V4jwmyqeYBfQh",
  "key35": "3HVPfs7axurXR5xEpWyXo5Vp9ipPiQS6UaBJzKdGhS9x4jsRi54vEM5cgWKr28vpD2Lp1UxriyFqARTFARFPgWMn",
  "key36": "2gbqKYufffwqqzY21TzuARdNi7AQYifFgsd3Y9foDUKqbR1ksRVDofWsUsya4Zjfp9Vp3YuKn6dUU43FwgJps2Dz",
  "key37": "2AZee9F6yhkEU5gzyFLkcu7pnb7DYivS6Rc443dze4BR1FB3C5VyqQG7jaXmsaQWPggy99Qc2wdiwfwjrjvjBVd7",
  "key38": "5Ttrz8U4UkLx5NsYgTZmxRjBijEVC9FRJokEVq9tEiYfM2aEf1Gg2sMBGsVEdi7aokkreSYNyaZRErVBcVVH36Cx",
  "key39": "2KvdirQWUMDHNJCi6qMHTBUrrCgpDCnHbZN81NnPNVRCChviQqxzdbnKgBuzt2xkEQ4RwWUr2VveQL8vFJhFTSgX",
  "key40": "3TkCNayq1N6dgSSEmT9V6W5Pc49Jvz9h6iyc7cMEQTHZPNJAeB1U7MgoNsQaVBCPHuPT1EvygMFpXhaKHkVqUoyS",
  "key41": "3nFgG7ZZW791SZuXkZprmLfRskTRrA6gFPhXLEv6LQe6HHMaxT8w1aZ3M4KVg3kajKzYWcAsfnfLE5pQiTCw9vr9",
  "key42": "Qv91QkkbRa9G39CmAZHDwvirYE2L9b27y4ncVzHh19UhuVtBnBck1gz37Gk5W8uQuLgA8DSeEYATZGnxoPa4q6R"
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
