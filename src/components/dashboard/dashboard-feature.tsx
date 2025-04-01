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
    "4nUMJdJbX2u4BAYYuG9fLBp5VMndCELH5oWQpDo5Q5uunKiKZpNQXqn6ZtE7kzBR8hUJLHfunstJ1PH2K4H6a5Lx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAN8n2WFonX8u2u2PknNZQgPPHhUNWToibnuNtFi2GQfJUsb5XJSmx5fs9qR1nFM9URo5eVM5g11dsb9E4qxBDq",
  "key1": "2PXoWeE3YSrAppNW69aJSbGv4A4pm5aSDfDvAUWZDYmSNvYYjQcKoXZFRzJ7CiihXz4LS2kb4aw8Q3WSW6dHro4G",
  "key2": "5ifUzVGhDB2RWz53tx3vr3Ai6vSz2HtCvCR4TjEmyB7reh8SeacmyQLZhEXPEHsQUmNh6KL373BWM26Bbv6PdaRi",
  "key3": "FV6qnAgYyPbDvPbJXSP3y1c9jTz2i1ERfo73JKdgjm3btzT6CBRg7xETvx7SkAyDn8VcsQdawENWuasq7dC7cdz",
  "key4": "5qf4ER3P4EZtBmQY51UTVLNhNCXHCvXaEPp76eYQHtmUqCsMpBPrCeUNNaBzmB5H7Go8W1zcy5KMaB5uqXC4b6cn",
  "key5": "5TjRR7ymF3C2wJM8iHjUKSfrjKDhC79E9tNoHG21byWRiHyg4dvR5cnHbLMdWRKTPF8NsaWGfaF8BACNSHbdyWVa",
  "key6": "5y1p95UXt1AA5gNa3rFqrDHNJsEsE6Fk3tzcszmzJKBuqH8kvpzcvLcunWzuhR54rpBeELie9A7nyGJwAHuojYMd",
  "key7": "3TBNCdVCLAych3xGnaoYS7GBuxr1jeYZyoAgHfqkzg94Vq9oCtFWM2vDmtd5rVGKyu9Bmpx4yM3uiDdzFk8fdSCk",
  "key8": "4uu7Z7d1iEMt4dq7FmX2zrVKSwdsAiy5dwt1e8HbTZWM5RFhwgsT3MXxbMvbJhWx3mRpKrkpL6qpMUV4mGEV54p9",
  "key9": "3hKogEGy6S4XH92DKWmGmGa28wNJLxrcjPfiVHdTbh63TkGFj647Hj2K6jR6JtRBf7vhxHLstsdC7jQrXGVMJKev",
  "key10": "supb2SyxtE8TNYRuHpzPUyR8braHvYDXatyu3Yd3ByQDvk19ywFucUvifpD6XzSDbPZcUBtfLrSdVBbi5Y4E9tZ",
  "key11": "2uDjrY4Hen6SMGFfiDkLPnkqKLZRxCdgMrxFDZCAJHVKTmhhar3q2w1FafSEhV5XZBzYoGr6QJhYNwpZM8kxyZPS",
  "key12": "46MZ5igqznSTZ4CGejguuMhvpcz311aKMKRpHwXJiy7M2KT2ZfBMXGgoVJv9jdkwSBLZ88q9sK517Dt5Cejj7MZf",
  "key13": "4UrFopLhWHjp41xK3YSPPiU4UqZk3QDhuUjASaDWu5zreLbYYVVifFE3fkWGG2e2i4rKV1QUrYD2GGBdDHFgtRak",
  "key14": "TAbQJigKwpJwSkUiRcdUnhp8sVygsJhZcdTiQ3bgJKNiNdfmeGQUmSPLQein5aSztdfLkJ4mWPsBuRuxCuujwep",
  "key15": "5Wf8btFpWZ36ERGkW8DUWQ7kmVd2anpjQzihKJ2199jafc7wnRGXohi7iFyaECG7D567rHVWPG5CMdS3tkyXX9MZ",
  "key16": "32PjindeetGvJ5nhyTUF4iGXKg27T9S32ZxrDutyuQ7fiVnnPBZyfHFfcyDiSPKmAQxajKptiZQzZw6UsXfhJmgg",
  "key17": "3vTkv4NvLBX7CPu3eNZi52wUk5q3WEbbkCtw5XJqDr43AhUAY5otFzEzfKMx24msBi935ZcW1HdtWFaQ6zvtEgo4",
  "key18": "5NaD9Wab9YLERb3kinspnFwhpPoRErmpuHepwo3ch7mGmcDgSmCVAVoPtXdPxndgMMDnZ21LZ7MmthwdXvkfemNq",
  "key19": "3pQejcWAiVLPcbdT5RHFx4U4gjAdM8GwwtZEfjyaFGR1Ydz7zoiN2QWN8KfoDWLQgj9K4xU6zCqy585aSAAy8Pam",
  "key20": "5gnyiRBUk4JQrGZw2cWHCsArE3KVCMFWaHc37g3UfcH12gbAVdXTsSWjjnHdaC9LijkCN3qkJ762ZPpq8ZXvhBou",
  "key21": "65skKcGRcUcQXv1xccYRJEbVaFuwd3yTS3dFQRhn2KERSPhBRCD8ryhANxxX9C5qXn6bff6tnomwoKgqksAXPKaP",
  "key22": "x4oHi7iCdtUctpQ5EeJPhPX6qetS2b8W5UFmtpcYvcNgst5n8JsQhVUsEWemPMMeKhZbeTkqox5tu7UCmW47JbW",
  "key23": "5oz795SsB8nVLQAoum31ewKBv8zVGCVEsG8CoPYuC19L5ks3GLXoVvYBWteMxG75zPSDtTUc6e89AtmjGtkZT7SU",
  "key24": "67YT2TyVXYsYzERGbhSqcUnfqbL68r3ZVp69ESPmKEFvVBnqtKFSwHbYXQciD4PvumUYNjdSc2EjzZDX1XU9vKCm",
  "key25": "4oQyiv79qv6sw8BS5ySJ3gWhvcJ7EYwte1tpTPpkk4mTu6pYBtBmmJhFs8YxsKs989dKX4nQ8eTHFpCBtCPcECQZ",
  "key26": "saq4eRdmP6gvyAtDhdxhn1s4dgKJkraqKNWtSqUsBLFda2meA6Xjrvr2Jx9DERdS82ShYt5mkcTDcwRj3mTPHLo",
  "key27": "3G8CEcXAoXdXcZ56khNvMd83TFhcTiwuLw1UPJcT5JvN5N5URTcd3p9nk6ZdGt1yRQC9Fo5ndvSRm4g5fFaYCWCU",
  "key28": "4QY1pzHTGgzvcmTwgEY7yMTNW7pE1Mc8F19zU3ZB86N3EnAhoDo4yabUoXwEeB2q7tYQFFUSpcSnhWqywS7HSc9c",
  "key29": "qmnFhpNPvyckw5sUdHDZXcqf1EYXpafuqz4svbqLqMvhuL93kU5Ld5w6XoBpxoEy69tKSvGGYe6mL1LQrSg8BV9",
  "key30": "31SXiK3UrJ7w4hs2EKkQGJmHEVcTbDDS68nWjY4Xp1i1gdx6wMmi1A7HPCafEuibv8eSS4voycm17HEiakpxwBMK",
  "key31": "PMm4HjWy8G1vVV7oDMD6tahCgvntMXuJvtLSXz5jxkATLmvidTKbH5Uwxn2EqmGocwGBzcgx2iiLsy3Aczzc6EK",
  "key32": "2Nw1ZGVf9RxpjHuZEZ9qZMpE2uGYYek8xQQFa4nUMbeur395yussSpSEYqB32SE8yLYEUuqpcASGrqusxfFXAg3k",
  "key33": "2aJYvT4A6fRZGn1ynWGDS6p1dHr1L1U14qwuCgve1fYbJ6PZdiiwA7XZwhD6gH6hkoWqZ3sC52ifV9tKLFNjjkCp",
  "key34": "42S9h3GpvjAkdmHkEZZAiSDZC8UAWgywKiFaFKnVmTWf7uM9MpgCjzhesTCBVCLqrwA2TBdfBvDP5s5pbgPYGaMe",
  "key35": "5dbVjJtbmzZeSjnv8BDjgsvCe25nQCQe9VCxyiLpq58Qqi4UdBQji1qqxwHMtUnSgg7W4bUumkwsvUDpRWmg3Z2B",
  "key36": "4CNWZWyuP1WsWkDKBGiitPese7ngmDeBEJRwM9VwCaqYi2ipXEfqVpXS4X2F5XpdGokWEX5P8LAkaaVxkr67u61j",
  "key37": "23udWUkkLFg4NKeXXoxSRbMpVodbfyE7SSExfpqoWnvoVsjFHsFPdVhgur2oQ91oyWRMWEtSJkNnJem9L2mKRRKd",
  "key38": "51rhjuFywZYG6WYMVphjwcYazXopFS5GjptnPSjiauW9Qhhc1ACvC3f9SKncuGJscTgADYmTcBojm1nxLzGghfnf",
  "key39": "42b9kk1b54inzvqysuJQpzZKCte3AMKLrKo6vjDMf8uSjrTboNQCVuinFxhJ99VvrZeWC7Tcxufk41FDb1Jp27qz",
  "key40": "4aTc4c8vwbvb3GkVLohyaoSkSBniqmpAR3CRicUNSArTwpaqWhns6w3Y4SG8b1eUxc4zngxSmZFURCqEimcArjYh"
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
