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
    "2diA3Si8oXF19fPiHnBzSVB1HKqeZovYuDF7f828bxAAAcYETBRAryvfJ9G4B7DG2xo4yQfQmq6Z25A2wHdo5TLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V4tvBLQxYgQWkUbXt2y9DmAz79vFxsiXf463JN2TA8Zbgp5EpYVtKaDdf1fnFviPSqTgGHQWKCFq67hBay9NuYG",
  "key1": "3qivjHVNgHCntSBEwHFo9kUi3xrQ3M2wjFhqjgtd2ZxjDnNC8mY3RLVRiU3W4w3kzMavd8ZCntgTNK78zhqzKa3E",
  "key2": "9wnAhvz3agBAMeF1JwD1CETzzg355o3TemQWzygBMmVBrZSZACdYhAqJuT8F5LCka1kjswG4M4hcc1mak7GEcnX",
  "key3": "4SqLjLXGL1P9wNZioAVQ1y5rzYQ4FZhDr9DfkwFMjuQQPH6x2WH83bRxxTx7FK67wWRz54cvJyBja13UfLjjXWjk",
  "key4": "3V5z9iGsmvwWgQHEHW8i8Z7JXkp2iWeSSZ5tFD1de4SJEGx6Rd4q9whZyqh1UMKbhLWmX2cxgoGrioFRVXKMFAKA",
  "key5": "42wmM1XcbJ5y7QLJn65VFvXT3HtjNbyYXmj4azmjH8Kp9foH9Frq8PXFZpeeTMu7eaY35RbvV8KrrvY1UQ3Y9fXs",
  "key6": "4mEtmWu8ZykRNRHsCjQ3roSAGb5XqvLYduUdhgoREsQDRWbM25XFvJrNYPdt7EVvjumvj2XHixSFMPmbsDb6xQMK",
  "key7": "41jJkYCqjCtMaxhzzGE7ZvnXXdyKmUM4ofKSu8ZZeTvB2Dag1DFAtRr5cKPLGQd35Kzr18kCtcsj9zq9RAXGSYFK",
  "key8": "4sYrxZofGcG8EEm9fcLmATLfUrRiGtoVyeRYZAma5HY5rFhNLq93zMH72SkVeVgJ8jMN7PX1cN5AM9Xwr7H6o7BM",
  "key9": "4zZp2DFrMLq9yikfL21Htkz1sGReEzLxEq2VG4V6WFsvZdV7hzemMK6Tpd5R1UnddQHLZchZqkqawZa9gcrU7nxJ",
  "key10": "qos2y6avtJwUbjjSWeDsq3BEzJmbkAqmucoQxox7nnuZoE3pwtaGfAiqAMycJRZR9s5XUX8W7uFkBZbFFPkCneB",
  "key11": "B13SbbZ8JmWPKbk1ZRnto1mszUq8mVxZom2DvACHzpFPB1fRZCt37RgG3U9J8b2FwjiAhCkKaAusVnnwjRq4xA5",
  "key12": "5HKjHQLvn4YTEnAKidrNennMYZVryEFftNJrKcUMHReBxCH9LoQPsPwEPcBopjZXVTYg47MPSYD3zq1i18dfnDKG",
  "key13": "3jf3qdjRtt412SadsfXLEze11MV2mbvgFvHwKzLjWnr9LfArBU83BpxLLZKNmwztbiQbAkED77vWqmuNCSgiMSsP",
  "key14": "5vkQQMJGFbPNKjvSCUWFhfTM2qirtMnNo17JiRVsSmk4d427QX1dsbVW6Tu258ZDuwRbezJ99SLJ4c8M5YtqFgyC",
  "key15": "4FnKQGC291vhRZCjaeBSThT7ttYmjLd9GKngMETCbEM2MToiDjH4h4tijajv24wWrcPNKy2PHky6eui5dx2DxSx6",
  "key16": "5t6aZ5DmvBwN3hha1VvJcM448hsgLEPbeHAZgFQpcKj4Z5UQBYK8w6R34F2hxQFBfrRQ8BqT6C7bidQnAEFpUZyC",
  "key17": "5mMN1YFAjEwERqRFmwnAoQmHmykLCp6MMnY8yLqp3LbRrE6VkKUFHA89JBzAnqDiC6pX5myZaAK5G5V9ug94NgxW",
  "key18": "3ooJgSJd4q9VUTJzmkvPcYqiCVARFNCSAXUhyUqyv8zPbbamRV9BiwHvn2oaaDdVLmgDAYsAvz82EJTAtUjnPCZ9",
  "key19": "63sG3AoSF1FprUVur2d8yuqf33yNydojGAj3f83uoxQPrkq2VFT9fqaMjFDnNFRxJtqY5T5pYrp5HdfVpzhCWipK",
  "key20": "2Ur6Z8YZa2QCNwsyoi9LGidQDqsbiobxt7LRjWEdx7xSS6HyUd59JhUCA3yimxuhgdvUjnJFRR3f2mLRj7idC7nx",
  "key21": "4XA5bThy55BzSkeFTYgqtxhES8ib6yEyYLbG4qnoeab5uD2et86afXAPe9iSwsf5yUCAvMRJV8C4E2T8T5LDXvHm",
  "key22": "2MPrJumb4eJjFu1LsU3KCPTtA5EXtmHY3sX9JCz32yn5p1exu1FaMVJjbcNpg8hspEHfZiAMpCRUrazASevdNcYs",
  "key23": "3c4AzQbDKCEL1tv3uL6h5vqYeVU47SgL41wBSiCCXSaw3MJkYYbc2fRPJU8hvh2jDSYxNMBDuwnrrFFVDmZniYAS",
  "key24": "4bQ3NFqhXWh8jhHAGMRaCNEvpHBssEUTZDQXPgHU3Y3YNXq4bFHqM2z6GS47zAc9Dj53kNQJS17XcxVGzSp8cMMH",
  "key25": "4UPJNTTZc1YM4m4sF4JDWLEQVHNgJ5fygpKui3Bq9xQrHGa676unDtXeoqdETcUE3wQHqKcdugRWC1URZnCxUJ9p",
  "key26": "3mWUrhvB7JMhFMCwYGaWSdi7NyjzhN35nbC8DEJcWnBJjNHcBPhgD1uushbAMTsC3TeQZQGAj1t11VpNC5iK4drs",
  "key27": "31n5bjroRUnaS5snpLGr1JRmqejB23KfpFaUZMS7t6aNz9YxVH8AJrA9FZ2pzpomy4ZykYJEjgTm7auNT2g15oag",
  "key28": "5g1myT5popjhy4XhX5ec9BQbufY3TnV3S3aFQtvd4H9VDFi7Wnmg76XFrkr9d47HGLMVzYTHkUkyFSHxRkjKaLw5",
  "key29": "ttvsm4axzHg1LYN9g8fCJ4sE1Gz7rdvctHY62UDwCbz4nCmpvE6rkHH3HRgMrHugF1jMAFeATh8mn34Pv1i7e3F",
  "key30": "5RFUqt2sHKkYS2tNdnLM1wJ8pXi865dkH9ecmjfxCYeDtVXXksvHybfQ7LbyVhjD3ZZRK7VonUq4uuY2Fm4BbbW8",
  "key31": "5m67pSkBrJcbKQMqACdmJsZdbViZazFi6DS3Dq4ThwKh1o2UZvDDDhZkcUTYALDV1MtC5h2jVmfDDQmTRiHFog5E",
  "key32": "44N4y5saypngoWrYGtMRqSsVSPhnpY1q2nfHJbvVFKtWsA68GEyw6fPcYjiGWzUkzux24Z6yESKBvB2fzhkHh17Y",
  "key33": "2Zo48qbKaDJCUZj2PYWzpH2df1x4REdJSSagVUx2exjD4scUfCYwXUHRfXejAj4ff78NhuphbS19B6qtp49g8P9Y",
  "key34": "4iMzL3wBGB82R21Mq7nD39QHDMWQmV2pJkNS5S3a8Vr4GH2vKxfvkWAovTu39ssBVhbU78dPjVZckjoY4ffXTqmy",
  "key35": "2t4HyDLiHy26b2eiaYEe7AZnE7j1ah3djpa2mGRkDMCjHSXUfWDrgFc93Gp266B2w39SxSayTMgZ5Wonb8DSd96P",
  "key36": "7eoJfMvjhpRAvwutkL7Re8Qiy3kjwgwYNbZWinY4emAFSUcUoSx96mgt9XAF73XKaP85gzirr4oB36amDd5y9Df",
  "key37": "2xK7YvgFTWP9Pkfo9uh8JoKh1urtdxyxnkdsjK8bHwuE9mYUpNuJY5DiTBfeX1ewiKh57qrhtWc2Ryi8mNbJZ4Jo"
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
