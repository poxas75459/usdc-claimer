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
    "3LPpP5vpUF5oxWrNw5fAbseSQdLNHEDSazrx2YV1p31bT5JsHov4gZCiwXWoqYV9VHbDURpmbrtjB3LQprLuszx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZfSECHApGkSifLwfQmk1btt5YF3NeNuiC1rr7rGXYpbaqMVWPvdGY7Usy5pfxx675VjmoMZBLWNaz68eguswKM",
  "key1": "2Lvij2vnREpYzV8zua5EY9z7UWzx8RNjuXgLqjdQhRwo5U8hWDDtj5JnfW4i2urmpfpR68DHPxmXDvxCGfsWVPjM",
  "key2": "3WTepjxXtTDh24inaCNo5PGZvRsbXHm57jhHKhur9mxvzjkqT2BHicXBXLANztShHxhs6xFSegm4Vrv6UniCc3kB",
  "key3": "2xxrpfxMVpYedqX3H3riKaGCksU5phZHkpYcu2viJxeczLkRK8YBULS8t6t3cqjuTebnNWo1aicQp8457CDQAmPs",
  "key4": "5GPnvkZ4DyKBkc5Dgk6rbUEFQXkein73YMwcQ1rRqrvLFVPLqw6BmRw4FGVrhp8dteTfNw47ijSGXbsCJECH1xy7",
  "key5": "4YdJY589A1J87XHKMbN6Ui11BGR1XZCo3C9NgphXX64KvHs7h9kQYQeyNPEmLPFzwBBH25NjFR79YeMjFUqwWbgE",
  "key6": "61RAWct4H2jXK9PQh2bLYhrzraMjfZPXtrdxmgTiCrpCRQDqqyjq9cxUkDFu9oL4HW5r6oapVTmvv1hrsH3LkrnE",
  "key7": "GkKEFwiXksDxXUc6hdSuAb7b33B5iChzQsw5GYyaNyDcnJ9s5xVbaZMHdJZR1wLaksfa9FdURShgjCmNcCgNPXJ",
  "key8": "3tTGL6m9ovmnhVEf4kWucrT2DcZ4PvstN9uSLTdeUcU6H77LjdHjkDMBNJRS6hNnFukkgzHXwMvy22G9NNzTMCvw",
  "key9": "4q3aNqL6Wdh4RHnHJDoYfZ5Zxw2NWnuPWPru8M1Uy8wQNDieMDZSJYHbCgsyNTK6iFXHkzSCtK31r7Tmt5E8gzow",
  "key10": "4icXoXCGiVr1dryrqHQvQaAQ3WZyVePDVsNFrJnuL9SesLSUXvB6SmTnBPbse2nWeAFPKSb79VgxA3UxXXXGFrnE",
  "key11": "53Pe3Yfr4ayzjnTAp5r15bfhLE1wDRtKRxKSe1BxtnTiAgNYz9sqJy7QvanJLbmMVaxWBKTcy2Va94J9mz8VGQUV",
  "key12": "3pPMVZudneTFxdihL9wjDFU9FAdsjoe7CfjonTwEanWYKtfB9v5zhJLLup8WeMvJG6Ykd25pqT26m73YtrXKGp4J",
  "key13": "8zH3aJeHpR9qEWyeCVreR5VodrFunUBFSMKXinwEvdRF3w3wZLcahh4xaKK5UagnKXr1ie2j4xe782uxwKGwDAE",
  "key14": "4je467b26sF5RKvs4FSR3g6gLrMhPeh3BcCpRuWdAJS7i6btBAY3XKf3xB2wnPWgU6hSSdi3d8aZQoWh3togbe1J",
  "key15": "2yuzPpf3k4zbMbLVwCiNRaCKwXxhPha2aS3vdTGS16VJK5rLKdh28tEbm2ffNZuqjYNdUyTukVYwpQVsWN6wSarz",
  "key16": "2Gq2YKjFdZmMGctfy8R3F9CUXb4yNPhBaxHL3dpDvfEKqpwRtMvMrz6WkMEHuJKrJShQRU6scw5ZH8YgTnpwV2Zk",
  "key17": "5DqgHFX88vMky99jusdY9SQApsoi2v8Aq7u2SVo3tAiXD3sojzK2nkyVPDwhjo6byi7LYcAyZG4wXeeJyC5ssjgo",
  "key18": "4X2wkJyHNK1E1VYfGwmXEUcXDg77hMFNxXcs5q7iLgnTEvxnH2YE4RaGda2x3m21GNqwWUnpXZBJj1cESYLhPJ1F",
  "key19": "2HdEBcJUp4wuJUA8PwLofyiZjWPK1kDtntY8kVjgi9vvgPMHNZaQycYPh6i93AkAj6xbLRfu57jDxgGuPZ5aFqSM",
  "key20": "2MQPxbN4LzrVTVGq67YXsTow4xBvfrnNYqUGZDaRF7Uk4zePnhHDXbkaEKAaqjWjz19MrEPkDvCyVebXc5sZ4YvM",
  "key21": "1QE1bozUhdrLveSktYqpRNxecq12LwVjCF1hrMvwACDfrtPX2UWtSVsHD6Y7w4UQggq4FuincuhuQsNjgss4PJJ",
  "key22": "2tgd4338u89pZZ9hUyGxf4j8UDwTurAsiPeVyzU2DN5suDoTgKznVNXJ1QqRr8wShX3UdmX1cSrYzZBkd9yVGw8C",
  "key23": "2MsYrfmSQSggdhp59mkYMWU99ZHP5hrJe1SeQE5wThZFM4Mhc9ikp3LwaZHyx8MG1RVHcU5U8pdoDHJ1m1vHSmfd",
  "key24": "L6vUjjeSHKPP6tbspAaWMPVoKBk253uqYpVXStLqxW8aAUJwsNywHx6t6uDB5jLoxfyMmDwHSmsB4ctdP7uAF3E",
  "key25": "Adt7dGbhUy922ZteRdT524FJZMGu3U9xT7nNJzVvYDsaM8sJAVkV8V3HW121e6JjpcWDf7ei98r1dAurpvaBZAT",
  "key26": "37cSr2qVnm8XxMWFcGDpimDCEYmfXVTzn93Y5BgnmtFQwb1jf7bX6vd3viE6VcmmKfygo7xN4mVr8prqezjzP6Sw",
  "key27": "36cjrgBipDWiWM8Y6j6r6bFWRhdsy3gTDPsBm3miZQpa4ccPVhVzsYpjZLGw9Na72XCxrebAUX3tyzdCiaSk5vhG",
  "key28": "4oZ3eD84MJtWVXEaJoJH7C914EwpkVN3mXbC79x3NxwWf6TAmEKRTp6GJGKifxcfuno7wJRjGAeXDZZofDWQpBj2",
  "key29": "5mtTGFpm5UBpR93vURDC1jpcw9XeKLxVQMGcYLLBoXJeFP2ubBkBXN6BoKzAjUEo3EfxFNUTdRd1LhyVUgkZcden",
  "key30": "bqcNGReLW7Yu8UrJVNQ8HBghYZNVm3Jrgv6UVJMQQXsan7TrGMCngtdR4zEeiW8mZ3R3UMAkE2tJokzSyFW3EeK",
  "key31": "3DoCv7aR67gtFQ7gFujXCdRgKFcpfGSC72PM7Jwa4n3jjRWsWk5aaXWhv9X8FTLQZmhbQfcb1PB15EpNfevEsYxN",
  "key32": "RgX8rNS3415K4H4y5qVxrH429QDM6TzvKGe7Lx5W9E84qtcKnRiEs8Mjd5xXjL2k4qZfbz2emZD63jNiPHLr9JW",
  "key33": "aRw88Skj5vq1Ns6Znq12YPQ4zsfrJ7hYoLAvcsdEsxsVXh4eidb27YPZDtPLGA4th9VExdyxrS26tMpLEcDFw63",
  "key34": "55erkdyae85XMRNwYizs8WqMYct4Kc6ABL4deBqMgtyQBnyYFB9QoGzxPKEjcUAhhNGju8xuh9Nnty3y5QrXyKJG",
  "key35": "eVPpqgYojygdWTF1CvyqXtwkM831MsgPXAngMNnA3Hg79fPjFGjTJ4et2i7WEruJKUufo6bhqMv9nivJ8iZWhYn",
  "key36": "4t52kNkYimxwQ4CoBHGtjUcasj2Nqbrx7zYfpYR3WzAEvrJ58JEMrnwJ4sdJvRAusWctdCmvrJ1kVdtH1pmvCX8P",
  "key37": "2ZA8vKsKB1hwkieQJ5YJefnUnTn2mVoVQ7YpEk93sF9YWEE5dE2E7GJgv5kfCnrLnbTHjHkDo8i5xeZpoFzCps35",
  "key38": "5CcBPnZj7XS4GKAqdoYgJLAEFTLGKAPRiDC2CACAKeD4NzL3eCJP3K6ciWgbXbKWdNCs69b5uYN1vhw7c3rE2vbp",
  "key39": "2upwNq1g3NCumF2XmmozSKHmmwsrkoUuBAyb7ve754xpdDipV4DSeBRAugXfhk4euof3WUvGQB7UDVXbSDXahtDB",
  "key40": "54962SHKGE5D4qQgh11Mv2dYoohb23GnbP1WKgduHKe468i8GjcfbmNPGPyeacVvLcBQN4r6tzKQgnpCzv2hfAdQ",
  "key41": "3nShgYUeeJx3374Nzw8uJCgxA1KXY2c9oKNZ6NFHiqR5t4R4Tkn8n452sFoLVBYf1Un9GeZhubFHoRXwT2evFSij",
  "key42": "3vjdRbCXkmEeuxhsW9mFLiycCbhdaqby5zQCy82bPExB7rXGNzJX4BVnYudnvpkmyFP2RjEPPsiPbrxeBHukTQK2",
  "key43": "27e4aVivKRNadwC3r15ZJNvsLR2rYWqu59GfCEmsDn1ZVfBKjKeJ9R3CaveBUaiAxoDhfe8nC83pSdLXUSLJfVYx",
  "key44": "2Nf9KAymdtYzZ2T3uEB9mzPdP1kSMUSvzSdocCGKis1tB228JsEhPHvdPyZWLsfEpWJWo9GQANgSNjuxKzuWkn3b",
  "key45": "WMHmE9sB9QxoZmUW5dgAkh5fNu6s7mkGTmHZiVk1R5FJ2vW4M4BxX7ySxkoSBcfLEw62PMXTi2bQsJbFHHGwU7q"
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
