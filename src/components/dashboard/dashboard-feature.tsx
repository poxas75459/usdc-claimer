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
    "5ega6LiMQhFjbAYPzvWNcSPfWGGPVKn5T2NCzStbuoiu4Y3QGvnjpKLG93UtG8sMG35pXi73SoS1J1w3CL7LEg9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qgw7WXh3HavPqeAzsq1kEk8F97euJaM3h58RkqCdSjJrCxbKZEqV2DcHcRFHdTVsxGTtcgXmZupTHcKSpdqNSRp",
  "key1": "4ygFXr8HGxZkJstSed5evpit3yt8dz8pDeD1Q8JGQhZ18czyhkFGMLgnhBQ3cExXAAKGp6NFfJcWSXV6mPFUrYE2",
  "key2": "4C5TLt1uhMQeeqqdbSbfwZMT1YqSGfgALw6JM9UxCLcMnR3R2EErYBvspcgxXdH6kEcmf544d1mnfHrKhAYKHyaa",
  "key3": "fSrZrfKR8uNkjDaJT5j9bkwSKDZUamLT1KLUjeWaGJnkvhX3RvYwe4gFckL1GYpms5dcPNbWtg3fBDe7M43HHnd",
  "key4": "m4GsBTqgDTcGeqwVawabv4U3aYQkd4fpTvwh8CVzp2wEgE9kcaWJQMyJh3hQQNwDd6DagQ2DqEAGo2KpXSJSz38",
  "key5": "487QskmEiEeM9QiamcYiEsC7Q4sWrGoTmgT5ZBRqRkdNBsppK8Xe7rBsyGHSuSrXNh1Nntc4sXAepbXoPGoWHVhV",
  "key6": "vDn5ZuxeeWWXfWx1QboSyhAv6zw8AdsojhCBQMpz48G8xQLSGrJWrvSod3tyQJEST6YF4yGhqA1vsvPDHCfKcPK",
  "key7": "xAH7goVCZ5fNnVvrNCfDDSudfzpYvKfBA6qFxPq2Dp2sxybD3oRuxEKDzDwczuo7aqWKFePpNK9NjsjHaPWxcfK",
  "key8": "42XGMhRdUh5KZhRCtQAi1T6vkketNNxZivRhEUnCpPcoBF219p9XfFmYY1obLBqLxWzthjWx7XEPKX5CeoNqdn8U",
  "key9": "zduLaPhJQmYP1HKao1GS2xUWCPuwgJDK47F1LLFhSSuVjiCp7micXU8yxC78RKEDo7bibRSD5q3dKF3GNunSkoy",
  "key10": "JKQY2LyYnRUp3Arn3ugvvUTH1Mse69bDnUxHRDvEC8SGsEGquYhfr3Xjmcg8b9LDHZfyiuWncLq4rzgj7iYczxv",
  "key11": "3kPE6NZHfwBai2upzh9EHAEtE54NGTTiXmoU9jy7mMj1ML86YXT1Kw21B6SDmtKcn74uSebnSLqAtDXBN4whHbAb",
  "key12": "3kwL7eLG4Lg8reoBaQaKKVSPGV1E24k3sY7ZMW29hj2LGK5Z8MsjsSCZuC2aL1LVdJkmXhSgSQBznDH9aZjowycH",
  "key13": "4UQjrqRAvQ62HXSFCHLNXAhKAXRMMwJfm51A6jph4PYuv94JW8wCG5DZVUq9Q2YMrCdSS3brdQVDy2aNXZCA6Jn8",
  "key14": "4uniTCMrth8m4hXVJCRFpzyu6e8hKvngiCuMRgQsYhoQzub4R6uS2yg9FZ4x9cuJBhJBamDCsTXVPCCrRz6nkBPx",
  "key15": "3PNojMRhf5J5wFa6Scsc376ToT2NG7TdtmoZU5Pkm5yy51h5qaTP8msMdsncmZxeQyUbUfm8hatjXMgjuWgd8tQi",
  "key16": "5aCLiwCosYNe7F1TzvFXHprg13EXuoeE7e96mpmD4mYejLU677rwXknVCD5rt6MWUCR6GLMtz63YZywcCd3xeHo7",
  "key17": "gZSi6XA8Sh73ckQkVcx4V8XSpDGrT95DeoudzwjqHFHE1waQXJAQYA2xs6uap8wPK4CyHKWrLrTm3uWGGYEVbKZ",
  "key18": "Se5daWS4b93hDcm4YE2NHuJTn3T4SQxj9E7sH7c49Xz7sa7PG4ybxpBbpSg7jAy3pWfaefMXabWcBjMUtEPPc3W",
  "key19": "3Lp4hzrmW46byvi11VMRFnEppB1bTssKzhRkRCw9QKKoXyv8PfPQWRoWwZZ1ZgiiapDtfTPxrtpCiv8fJ85don8E",
  "key20": "3tYGz2MSmbXhUYrzXPH2k2TPTRQUpTWSu84XgtViVTLLxzRNqBQed4L79bnNdYwUtg56Ha6qVFVkb8eKH4FaCMcc",
  "key21": "38DoLfNnpYrZYR6S5mWnX2kCQ7Mj567Fc31xfye236QWehQz9unYtzDY8tuovJkbAxwpZjPywgufXm6wFuU9zi3m",
  "key22": "KKmg4LaQMKFPXA8AKupQFWQxXywYpPsLAcG9YhVnKDXhc9n44FMwFEct9hEKeQqwGPMBHkyZRXKWTG3SNfWLyEY",
  "key23": "5FgJNATRYRTQc58kPYUui6Wz64tE68DdpdXzRSxoJeiRpS1Wmgh1oHWBEwc854pyWP8aqgXwpfwEgD4HgP17vC5U",
  "key24": "3mNTcGPb6swjci22Jyz18g6C7HKMGuXGHADSL7tCikqLtG7AJE8VpCP34b8jFTpurkE4tDACpQBfX8osTqHPGjDL",
  "key25": "Dnpq7TH7wFQABEp2CSHLARFCQa1Tw67CZALyiQrx3nzpsL99VRyyhHxrk8YE2WFX1TpXLRuZbYeaxq77ouRCFfL",
  "key26": "pQHjd8fiVetbe8H5LMKw4UVA2LLBQUADvCSP35bue4mJ83V4U7bb1yPizpnqsLEGHHM785yoWzdCeL6SfB2kAqz",
  "key27": "zYgAqSx1YzSTkQj4NSqNEp6rEMGAzFre2a2yykohxGW7KaC6mnSESafhNHU4Ubf2e3MmQJY6egWj8MB5X9hi2mm",
  "key28": "3dY5ygPjphXrGiDHgVu7uCM85GekDU729owWTGbFf8C2wnQiaC2ghFjRjimQKLUkyRFLWVQd9kcUejMPK5CzUzJT",
  "key29": "486N6YG3RgjjQEtL51MDdtztofL4fAFAo5gwsqqRvfUVZYKeK6QC6R8tVceiHsB7WJEtkzeXQifCwRTW1DaAfSYM",
  "key30": "2UtNPzKH6U8bxV7ocEuz3HdL4VsBaNfsXqM7J9vZaKERrQ1BsgqmTn4LmgzSfdvkthy1qsF3cfKrTw5uUD63mGTN",
  "key31": "ADCDTFjCwLKkRNaS9oZp6dHWsQNxFbYAdAa6U5VQ9zef9xngd6evsubaWe5coSdX1MAaPRizvYCdgrf5hSSMnfe",
  "key32": "5gBdnvAE58BLMFiw9jw2tLLGGX2id2HqTiTV5se63UvLqWsxeTD71tTymMJry8eqkh5foNB3UPyA2o4CuNY6bd6p",
  "key33": "4HvBgpjFNicVyXCjk5Z924mYtqDQhJVJSkfAwWzN72Emz8LUiAyhHhq7HNN2QefPkSG3QCtTSezvSnoi9ePdJX9D",
  "key34": "3Zray2Rvd5JS45N5Ya3wT7w3CWtnute5rNhMUrRKK2P7hKN9rVkB6sTRHmg9A44f2eSrDXZdLkkRSnz1RScAhbNT",
  "key35": "3CpEaAu2ZsyrBNVu648qowh8UmqVuNjoiA4Fqerc6EmMq5RRaz6qAkoCeYSWmmCaxqCynb7tn6PBv1wxKo8MRUPf",
  "key36": "5sMqtD54d7UcFxUi7Xu81RJf4SfiJboCc2GdCRNPnp3dvpaTd6PnW719Gsu9JMTeAxBd9nYgath5BwCDYsfGB9Dg",
  "key37": "65AeYvk42zC68eot8Wca5STNgzNsDLVhgNGwgTatBZ7xbhn1BGCr9fJLManCDNeo4N8Hyd5ZqpqySABPa5jWFFtp",
  "key38": "4XxoSc58oP4hQ7DhrwwxMDv3SYk3bFx1vyqek2wBfRYqG4PnyhSaQnMQt4gQSDWpi2Jg13DzHjaizx94VvNkUidr",
  "key39": "5Ci9Vtdepeor4rXgneHf6yUHPz7hLL2mpBEoDgy1ivsSoL5fAnr6y4j6DGb97gALeuJZh3SMpZB959ifyxsYABj9",
  "key40": "41i3LApvfzqJDCmNLpP4ECXjXStK3dpnovnjZsd8ovVpHF8ggr8Yrtqe9Y9Dk3c758nDupkifEryBB6KYXZEQmeX",
  "key41": "51Drf2k1x9SQxzdZf61dG8F7HewggK7ZhUGJJzkL5Va8TJcSjZHnre1kDFr7VVDVYDNuDzNmMEAGmg63j5WiAWJq",
  "key42": "4Usf2iYgA6CZ1RRZzwXk5MGn15JEW638tStx4CvyFfPLvhQzxLWMAyR7duXwnKzis2uAaEm3WJz2eBryUu88qWAM",
  "key43": "5mvnVEsmQA15Etqhr1K6nH6mXmEX2Wri34q2eLhwU7xf31mdQRW5viPNhpMPZKxvzxBpbvnfDdRcuwg6jDVqXSTA",
  "key44": "5Ytzh5pL2Qtj5298xCPLZ4GTMzNoaQeVymwMUtiaHAxkRXxdvPU1b7fpgZsQeVGxWXgsk8kcsLkRkesLrMqXTGGv",
  "key45": "4RtSuKc7t28WqAi51wtnBXDzr3WDL5hQDv3mcZuFGou1CzLsHmfHGfLzXiAcsSa8maQqE8b4ku5pMXRki5bAac3R",
  "key46": "42DmjF9aembNuTg4M7fZX7vvA9uDXfkuymX58Q9iztGpst6h6SHaAA7mQ2Q3v7qyEpyHcHttU9zVk2P2r82yrEMn",
  "key47": "3zH6zS2g3tPgSYoFpS5LwSEeu1LxcZBskLujT6oJZavGu64VUyc1SoCFnxjcftdh1n1QdcYerBzkMZkiveDsBneE",
  "key48": "3s626vJb3RTHCNH6UrUxiNP5fZbhMgvSELkQAVHB43g4ncMKmP93v25XEBmrgroHbzXK6pQsbBtTAhbQGrycZE3P"
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
