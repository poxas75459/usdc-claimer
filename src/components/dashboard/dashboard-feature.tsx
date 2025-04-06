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
    "5VcP97ELpBGi5QKV8yPv1y4vEY9NNqADanRqXNRyWmuh87T38hgqYDE2K8ZybSqKFmSk8XhY1yYxre5m3qVpwVaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BMXWKjYXt74z2y6PyYtx3E28RtWtJC1HenUxXXKtZoayAYeDY1jHq5xFc42GBvUWx8tFSA5AogLjdrEBMJHY9jP",
  "key1": "2Qi9CLvFXY8ENGKD14Lg7gKeLHh5Yzoqxd4wZJSX77BJKsToizUVNu6Tuh1hz4QcJ3i9pzFen5CKWHZ9MX8Ht9PZ",
  "key2": "5tURsyLRph73WFazSNogYbWSQnW8BFwuRNaJTr82wEhX7zFokaFQX6zSitHcc72d86tsXSJjDu6RUsw6nXPufdGS",
  "key3": "47jVJM2JLLMNwMKVvbreps2oXk1j1hPa7zK9jYowtn5Hn7eQXF5sUfYeaxGn4KwrNiXcv5wdx2qYDd2BHVgCna1Y",
  "key4": "518oB2KrcXZmtJCRbvrUyBoGd1tH2Q6aaVQVAB3ToZH7DTNYu9ZXyxY88Lk8Skm6ACtsAfRReuphyJoBEm4qFPph",
  "key5": "2dRD2We4GUWaSYJRDNTqN1kzAQsgLEAEZedxKxqP47rVt2a7s9NqQZcZp4u7JhZc3BzVHj23xgt99eg6eTEpGSGT",
  "key6": "37JDRMjMedLFMSfpS9ap23YBtA9S3TqAwxcvyzJxx7aSU1AgFcnpvcdwgtiJqWZ8mfm6Wfpd6ySnuYynAZwtvg1x",
  "key7": "4shvpgYXB5667xdUxkdXioRh2y67ANBc4FE7qKP7kUnnhzhm12GFndYec5MrAdeKxE4FDBUMKqMxmvfPCivfexC5",
  "key8": "S5Au4b31Xub9iNNQ5PuEquREcFQDJEkuwQBHPAJDRmkwbXxZrCGvRS9nHHZK4XohKCK56ijrfgRkty1RbdadhFv",
  "key9": "W9yb6UBspwXJcFJCLF1neaTgs4z7ehgDN9LajakVRdxKRHeMP3LtAVFF7k43X1hezztmNSkEkTWvDJ4KgMbwXp7",
  "key10": "2gQhMVgMtNzRUMpbQ6dhKTNjJkEqUj8Dj7km29trD9Uf7imW2EtGX63XetiwqNEWmanF9Kjk1mGBKWET54YeWtaD",
  "key11": "4anrHewStSNSEDcgp1bgvPXn2hdGiGr5XTaoQqodLWpWkDYyTn9hVPYPi6q4wgUkGXe65gT2zVWeymWa5cRrAuSS",
  "key12": "14u6GVd52CP1crEFMfe4osH9o9KgkAdrhS3S8xhqos6rvC1pTH9Gv6gUoJPTYKWVdM7AX8tgG9LsHfnhx1TjVMX",
  "key13": "2KT35F6JXbuWAgLzRuh55PchCYJzKkgTh3p77pQkX9aooDqrRo7tYDtfCAM4BU7zZNsjn4yN7zTooHpgZfrP9tQD",
  "key14": "vZ2wCy9t7u9s1R5LedmDKNoohc5ffi4JHfq6YH5zGBggXyPMweyGaJjZUKijsCTnj9C83DnR1Zx9UWf8B7mwZi2",
  "key15": "4XN4vNzH5Cbbogw9H9m3YTdRsS1ifMLyXwpET3bvu7ehSR6e8SkXWhSYthgHcLkkCnXDBhwMWhT2DQM37sPg5ycw",
  "key16": "55j1nC2v8rbxryoPqE9UJ3jKV4PyGLbhJNfHJFE6WkknRYKr3kGYaXpPSubxSqUdaMoztHnQ24GfpxffQJpaJbm9",
  "key17": "4D25MA2qF241G8rYxvGHrSCezNXsEh2PNfv4AuMA4WoW8SQpgx3NY4R22i37xErjR9EnUG4w3MEmhwE9xf33fZWm",
  "key18": "38776gAfX9eqZnniw8K5Jrn5j18UUs2ayydAi44sAFHNvnhDJiPCpDQprV8F7vE9EKwzKcBahmaXJrgPNFwCwUos",
  "key19": "5ZeeDVB9NEbvn5ZxWy2mJLGw8J6f5hZTyzj2zq5U6j5y7goMV3ECgBBt3faBdzScXpPaUqC9j74KTTNuZonQopqo",
  "key20": "449S8M3fzCnpk3rpCpAqoog6vLks9SsCxh7Lq1YUb5YZSz8FUA6Yem8vU6wC9RmPrJBaunCFwESRkqxJFpCqF48k",
  "key21": "3sZ2gsuQ6DYbxM9bZo6rZKpUck7xULoCDPCKDcwBYAdYHWXcQNhXYMGpMsTWLvkVKDr6uEeMXbvfXt9mUcfRzRDL",
  "key22": "4uJfVZU2asNW3hpPw2o7bNvvyNxoa8nUxKPbKCT6brGtSyn5sthRYjP13VgcSUshAJGMd4GL2zxy1MUG9JMXnJwY",
  "key23": "WXnzo7gzAiAVT4BiqBZXPUWYdnJUhq4J6vPB2d9eBr74CVYfec75D8ucPoNvpk2HaGYiU6SnRcnMRacgnuFAg33",
  "key24": "4MuyPwVFymWdTJ8kJU16V7qyTAHEsv5m4oBDHrjD69TTVXL2EZJ1RSFVVgcUQCTzE7Fzmk92tdNrqfjABsbXCU2W",
  "key25": "3VSFLbz3K2HdcPZbxo8dyu3XrFsXXzXRorHMcq1GrWZfpj6weoWV1g6fiSVT5YBvDkdwDMjh5Uck2L8pfAtMp8kW",
  "key26": "3oGXwRv6UVGjqvGFPcsnHVzhgvZqHnYMMNSHJGGjD7gEKUGxGgfJkUPhCMQxZibwRbBh4rzDzKPvEgWUf6FxnkwU",
  "key27": "2zbhrDB558YoyDeY7D9WEcuxTZTMiNzKCjEa4YLnLfB8PzbghoTA4J1sCM4RcQCx5FGvi1WUsa1xFhcwbEw5G1Sw",
  "key28": "3vsLmoHpxLs1gytZ3iuvTR5mbKURbufVnHdnv3c9o8xbt82miuwn2vbxGx4idTq9FneNBCgSen2UrU7g74HKdvVs",
  "key29": "ELei9wX48K2PdwqGx1XgfUHDu5qaVVRmXbjkWvY7jGSwZnWT2Z6ijb5LgqBeMR6oGn9M4jNrS7rVtdrafVD5caG",
  "key30": "2oSdde4ba6MsmSaj5hMWGTXsonofyp9PAKx49VhA6rMQrUrh9P3fr5XwZDAFd9ooEhXm2jqeAtdzTtTT7rf9muhz",
  "key31": "5zWUjuLYzX4QrLbPEF1uLvp2Q3VJvCwTMhfH2WVTiM3pY7mtAECGRvf2NWNzBicnrdzH9JCbmD6z6niC85h7LfCR",
  "key32": "e7QJjKWKpirQGLbjrXPfv7M69fp47q6ESvBEvGRFrfV1gbshVRn5aodNgWeW15zHiyBPX9u8Kth6rQuVjRoqVD4",
  "key33": "5fERMgNbjFEdzhNQHGwzrhTCJNZoo1P3xBXvBRKhEPZB19kDr8cphwRDuU3tVcPDKoFBXsv9eu6ogXsnucFcn9LE",
  "key34": "5rsfbUYamnfTxVpKq6hkMXf7ZjFv9ijMXoiaJsWSZHzyV7reSgv29Eu3yp7p9oxxCNjMy5GAMhdthz2E5nyHqZFT",
  "key35": "2YQPYnuesEZBhc6ZLUcvFjZpqEgexBirMzRXS5Eouvef78tZ5t2FNcZBGQeYLgt5i7GozHuE8vPsCe1G9J1n2oMT",
  "key36": "2bZdbqtF7JwA5kgG21PVLZu8CNAodiKP7td2fZrcpCg6dp6CEPahjXofFEAGJA7rzTVmSJ4pjCB5UdiJabD5vs4f",
  "key37": "abKqFe7wzCknjGvuKQjEgXhDgANLDdgMUuB2YngDd6nR3Rbr6Dnen7gxwe2GbBuECUC87ZYfiVVtnjc1RDsmqM4",
  "key38": "4kzuCnvTyLtksQGj3TQmQsz2YdqMopKa9gc1dUxbHAVuXATVT8iSemvJ1V4t2hMYgRwZp54koTTe7KRCWAwx7BUN",
  "key39": "3o3cpZ4gDxTCmbPfgreqpEt46BDU12Dqqa8EcqoEXhLF2xvVAbg6bdai7Fis4t3GVavuDmVY8DRKAFUNLkoCbDqx",
  "key40": "2NbAyFd6BRgSTxYXrBuuQSD6hrUTHwWfmRuQofuhH4v8gEsFtG88pCe9xu3k567947T1595AFB9VjudkG4oJXWGx",
  "key41": "5yMRvjQAvq2xvaRGnEpJD8EPZfkggW5HcuaiJN96W2tXd8jMz7ZAeey8FQzoU4TNwuGtCYBpfFaegKvhAyyXoguz"
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
