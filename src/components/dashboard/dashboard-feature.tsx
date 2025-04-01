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
    "mebxSJG98mFiw8kwhJkcmKZ6Axbfe92mLGTPMB3Gs1iJTLG2JuaSgag2coZek7rxYwwpPPCBniALrsTi3x95Aia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oyw12qcXqsFBsTpBJRufFTymrYawyMq5g6PCv28emddkPhfQSpXpGj4ppyWXtcFCdvd4wxWtYG8RdXFLtPodD4c",
  "key1": "2YMPNsULc68LVJtTjWYkiBoAptwjiTvib8xDdMJXW6AdvAUtUtBqiFLkaM9iLvyWSoQVgmnV7CDRQ7gnFcUiNTAT",
  "key2": "23StLbtmgoYgL9YidP5sf4fmctP1WYs7BRQTw1kCTh6nxVS4D3JgDEnsqK12h85zt6WuQikxcVuzJ8E6b2gdNfCY",
  "key3": "fZ6HoaeX5VtofYMpC7hWtThUeUgNR8Hv2Vvb563VrMoGJHBksm1pMfpj9Nap5izHjaKZvpRrGRnRvg3b5QoCLuc",
  "key4": "3fJnYtAVLaKoN32FrLzs9E96mdUQMtcozC3NiNMww5JLSt1JCy9FaaDWT2p5SZWWmqWdEBExWKnn3UWUCQtNorAw",
  "key5": "3dFZanfEnqRa7XZg2NnQY7dNE4AwnXmvccWPTe3JkKdDheC6kmVfUbEL4VJb2PiCnysZishNd8fqzMGJqA2GdSpp",
  "key6": "4q5NpD2G7pkDDRtHQJYd3qb3yjW1SSmAFMWnmeNmCfC1bbbBvRfoFuEeTtPA8diDy2zauqRZJLvt8QtxyuximynD",
  "key7": "45JQiBEepHd9zG61oH1Cdu4wXag7HxWPRbAS4u7WUZQEkPD6MNdfivfr46ynmPcWWG2AQTZUJ4fzdCya4bvo6gqq",
  "key8": "4Nw6rnrno4HVCZax8GeZTox4wRVQ3sDsPKPUQ9hXsGVDad4RUByKaahHrvQAQXfdHKZ1AnkSacsR6P7Kt8KKGa9K",
  "key9": "376VyHQBBT9e29pt3Jn3wLsRf3CdGtTRs4m2rVfXFeDh6cvYbPKKhtWMkzJ6LrCNnEV3zDw28E5xcmGGdTecCpKT",
  "key10": "2AzJas7kTnYmCYRMUsaBWLWHTLdWkqVQzS5PQaoizSwi8KAtYT9hRZFp7fFNYCvR1io3tDSeh8P5tCnPzzVZkfB2",
  "key11": "TqaH4zj9X3H88BsQMGFHDvR6siFECRtUeZtC7xEguUPzirA9u8XKjf4dxsg2atLtQWAg24E3DsgFMHWvFMSiWsv",
  "key12": "2QdKPvXG5rj4MAuzXV835vf6E6oxvPUihGDXvBCuS8Ku7iM1oCunkzMnaSoRRPsFdvvU7FCmxFJBi6LamChBix58",
  "key13": "2TPuwkReyxeP5Dyexk1QpWizUuRsHL4VBnd8aVxa9ZMmwg2wD2Wo9Q84ZaQGdZBUnPsWqrA3UfwMaJnu1ZcQLGJq",
  "key14": "dyaYaRdGL5rYsZAo8YL96bgZezdurGDMqwYbjKBd1Dj1tCUfkfwwXSC6izDDizKndvmPMSfyMarsmr8LrdJosHZ",
  "key15": "2x1eJqQaBzDonsmvFS44wvzoSmz2xbKLPTGjfv4WoCWuGbP67pYzbEV54qaA43ujujF4MEQ7rygR9sipCGv7wGTS",
  "key16": "4M8RAB4aK8KUJAKwLcSivbkpQ61GwJcws8GrBScaMXHWfwkaGo6sbEY3Kxeo55iPUhHya8fCP3EHgDMmpgvu8MqA",
  "key17": "THi4TpjZBVmad3MSHeMKxpwueqqMcDi2QKhLGmPTKVCZoJqdxohPQM1hz3fTP8gEeqh68Bh8VazEZqXxmwfaaYZ",
  "key18": "giyZcjWvjn6M7LRa2FjZ2nryvgKMkFgcp4RpqvDwCYuGdDK3kqM3uGjjuKPi9Us8jdBzW8Sk72Prh3Fqtt5MpHm",
  "key19": "d8gXTiquni1G3GYkj6JW8icujZBjE8qnKfriyj1gWEKWgMk2ZhYhdXZaNMEBr42manaM6yXbxXypyKBp3NPy4vT",
  "key20": "2btEbsAsgqAAcywrhzCKcVhmoajNBRKnXMGF313Ej2LmN7HhD9Fy15MfBoysQFcPuas1MkMWsiMnmMK8Zm9wQUDn",
  "key21": "btRDPT1HQieaf7XSjdKFgpWWTqfBPS3MB4draX8A8ngUE27RyB8DbsCnMMrLGCfaADHyxZr8Qo6EjikRf6yp9FM",
  "key22": "2BTeLnsgSgu9p6Jx7KdVsBTMEV5DXa9fs5YiAwGbViDoAYzyjQYVKXnZE2C1GWJr8mXGNpndiJcPi9zTjbf1T5jF",
  "key23": "5i63w5WM2vuoEp4WHGKWdNWw8pV8JbqHdpZUbduNYJw6vxw5ULFEsDV23exwq7JgH3nPHSUfPF9XV4Yhsck7EVBc",
  "key24": "wgoGow6w8Z6qMMqZW2wq5ceVZVwXhdgX3NXe5zEas949AX1i3Mrtnij3D23Xxm7CXVqgoC4DCHGFqcZLmpeBERT",
  "key25": "2muKzC55Mp7snos6gsknfA9VposVgNBrVqrztrABbkrw8J69QbFNCHdAGwwfY5v9Xa69Y9bDZCEUFj2x1Wzq5mPK",
  "key26": "3wdapAzhwj8KApTzTXW4NgYePe5HfFZfAcgzVmCtXAtj5FyW4ZJnBpAbMnAHLnMfnK7NRKVzWnLf53EEMXBg8fhE",
  "key27": "G7ukxm4a72JELqtEeeTa2sekg1A3N9myyd4tew2i2bpyjUUH2PX7FNatADhDDxQf11jMYHF8a21WjpRrt4yAkeQ",
  "key28": "3GuyUqQqqNVxDQh8kJVMnnUsj5nZsq7HY1eutS29BRdKjAH5LdGSHZsJeovNVo9XgpE5dHPUCCE163hopsLYbamw",
  "key29": "5sQmqz5sFUKAvagnRAzKLHEcrN2qjsRRSx5mRtdodwQDPJASywzQi7gSsTsSS5WV34NuKaqyxcWeotNNh2q3odGH",
  "key30": "3jnmEqhoXrxnTXxT55hy13uzWaJYV44zarpzRy2twvWAKuQQqJUuSian3g32hJ7CxUmWaGBr13ZaedcmcaJJKaEm",
  "key31": "2K8DRxaerXGhXHNBgq8CbEQzrAsHbvuFmz4afHNK8qPpcpC38bshfPEDkVV4EviGenYkZz3i8DCvCRc8YpZtYrAy",
  "key32": "2kGyWDcr3LadEt7D2NKbogmxWcWyT4gZaQfMmKEa7ghfFnPEhFMBw9Kvyk64tntEvQ2BHi3NhqxhjFkiVtcXjUta",
  "key33": "5KnKBvHzaHNYXMQG3QNkgYvLF66REstrxxoZumFGaP4bdjE2wPJMnR5URW2bEEYYMgMMxoW4F9FzLYG59qDzuUPa",
  "key34": "3GB6HMEryPwziGKRASmVQe4opw6m2sSCDPiwWdPdVGsKdXiyLRFk9FerFXWnCWzVrocvVZkxY5vxw68nSfkeWsKR",
  "key35": "4xFuB4Q3Pw3zEK5QrF6k6u33to5WdXWcPsFb64HgCkaPF5KGv4srt2b5utG8Xxs3MMY6RmwXtszNgd3eqTLNBPX3",
  "key36": "RbT8YDuUp5wjqk7Hm5wXA1idwXC3TRAuaAarRwgPHQRczmfvb58kXCL8peUH1Xcau5fY1BW5DXRrjKcKEprE1hQ",
  "key37": "53a1uQgJr9XKvVBkvVLorXJ8HTESWhjtY96xxraUMgvazca3Nu8URznmexu27p8WUq9s1koBx1VbMGnRmkS5sFf3",
  "key38": "2NeLvzZ9tqHR3UfarjLRTMnFQpkSdLyGBqdAYYr9zfRrw2YJG52u8K4GmMpFEAAmhVqMocmd7qHGnvo2drrq1MM7",
  "key39": "mnt8HQEHsbgQ6Cu7a36tbNqoV6eYbmX4tK4VnAATetL9q5DoczvCifSCSeVQGo7aijWjRrKEovE1VqrAjzTJ1aZ",
  "key40": "3PvKfvhGSFkvHXnLb8AbLxZgKvGp2x3myU6E5KEmGMRzKarMdwbm5s7HSSFCRchSaZJAF6qPVA9rq8cGHNfccQzX",
  "key41": "562f6EFXr9LB6pXxtHuGwuptWjnENXjP73tAEWDYYGrk79r1GRomxqSmNc3RnRY3QCFs4FBwmJUA75hemHrSNnyE",
  "key42": "2q7wx8JJDYjJHyc62yP1LYXkGfxCQmACPjSF9jh5u4sWc8uZraDG2q8QK8ue9XmWei62JbBn1yWQJb2gV4SzuTvg",
  "key43": "4UYqaFMzSmpo8FyTZLpqKmVethD2uH2vpXWdJhxe8dZhQQyPSYfv1M7dqGJ5L31zUsMdrdYPuD8TPAmWPk3tSMKY",
  "key44": "2xYcVLWkFzzKUV7MyasCiHzY6vE1nTdp2P17vwbdGAHi8Eq4oz4oRKipteYaSbNcPA6PMe1ssCcGnTujQzEyB1fA",
  "key45": "5EFweZQp27RRcCYqFAUECZX68uhLBVHa1SU72rT16FNYSjb1J37Yq2HhJHxuSv7Bg8GjNUXxqLn5c4Wrg75mbE2w",
  "key46": "2osN32Rep4np224qFZUjgCCrcfzn1vpar9iL4WGYKiRBKG1QC86Jp7wNWRrn6dgM9bKP2h1u3q21SZMSA8GhL3ZS",
  "key47": "3maUcbFPMmyQRkKghAe84i2SgGrppb7FSiFWqdRbJ7GzSXQ8YAvyNsvc5kcorLYrbBWsaNG6xKbrwvrAfx4xHbT5",
  "key48": "2ADs22737xBKe3weCqTrqm8QzYeV9DnTRjXDR8BJaXnXBLfnpuTkHPUBWN6T7hdyfFj5PtTXpm177ZhtACuFEA5b",
  "key49": "4uA7mudTGnDLckmgbNkn3hH83eW3ZZ9GRzdw8bzMaWwc6nipxor5Nah95DLVraeeSL3uiAn8qruWrPuD6CkByFdn"
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
