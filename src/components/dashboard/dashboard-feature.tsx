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
    "3WNar721Myw1FxMaJr7HmZwdDes33Yyzh9u7oAE7MG6AexixPnJnyRhocNEPqu8BrDzi26N7FuednaMiZ5wwQgtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s8E2QDjBpjaQs6TdLtEiGa35E7Ue3N63bvJdqK9EicXuB1Jko8RDefqVuMQPr6zKxybHAcRhntyvFiXNgp8GbFN",
  "key1": "5ghAKm2FFu9VXJHZQma14AZ2GNZZAA88YTxZpFyRW6kVcktxj6ej3z25eUzTiSRWZuYVtwedxxoG3VrWzqMW5MDM",
  "key2": "45Ni9fa7UWfXnECKzr7jqaxp89K6p1eRimvF1DeMzVgoKgSaX1qFfXfPB9T5GUi5yQR7z5GXKTLCN4JBLqpaMWEU",
  "key3": "2obvcBNC6PWrx22ZRfoUzZ5UX9QnTFA6D2y9bt6iazJqJLZhPJbKmyEhZ6hwtnPeDdoaenhaxkJzLfFoGWWL14V1",
  "key4": "d2SKJukhdoHrrPg3ka1UmTC47re7ow4Sia1yvyXgvdo65U1pduiBoUsw7G3ez8TswhHEcy2sRvNZzebmXn3YoQa",
  "key5": "47vgSHEvZ3CVwrHyEJeP6Pftokdjh8gh1PdgDTYCBotupK3KWsLc9zWCZSswKu5xtaRptyh6Un5xsM13ZYHmWaDR",
  "key6": "52G6vYMpFZC8cS4gPSZRHfwEatpWUzhABht7qqynh9tfJLci9n9beXx9xEgsk9FZu2zrMLahbkovxwxDu7UQ56Hg",
  "key7": "99wWh2H491mpEh1gmtciMhaUg6RmiyPXa5aMnsevtNykm1WPZR5t9NN5Wz6tyHUkV9NB11rKAv3ha9c2NrTEoK7",
  "key8": "MMgHBbSAuZPoFvsqnULpJS8t9HsHDvQcnDTp3JTCysqoe7erxm8AX5nfeARkuJ6Cc7Te6SGuQyHr8Rssg6ARfJB",
  "key9": "42gfLmV8he7y3Uoe4W7nJSY6bGNgv5vMwqv4caGynygAxKQdsr8cPNZcWzPD65E7dAdoN7ErCitaq2wLkYPtqGjU",
  "key10": "esKSKbcfET4k3WBFVjM7m9SdSB6pEYaNDHSFjsDa3hdVV9pQ52XypmzMXDEVTfQTstqeNBs9ebibvdb41T7AhFh",
  "key11": "64acT2oSdWsmBfVhjnCEfsDf8dYpPkTNvvgGFxz5fXJLajnVsCaGB1rW72egXAXgQtGzReoHaUpYc7PeX93waJCJ",
  "key12": "VnNnfLWRqt9w9iVSpod8st6uN1Nu9hnznLqR8wsY1LoAbF7DBHjfikXLddsAodmMkfeJY22KXWbsa1UCDvmfsjp",
  "key13": "CtFy3E1RFJ8JDeWCpS59RWcRfKrRuVjFCDAEjWMZn7cBZSx7oCV3aZXbP5rWiWb3a358Tzzu2N2Gtb1SowBqGnT",
  "key14": "zYyBLLfGcavV6fSxcVF5zvnMH4sDTh7qL2XKkMhWsdc5uYMAZdduy3LSoBas5BN3a9dwcPmqY7RCzsLQo6TKiiG",
  "key15": "5S6kvUYxSr8o3BjEg2S4tbQRqmvKm16X76hFLQ6fzPH6qxKdxpYCRGEwnGLribajaJeirYBqLHkEUzBbgAt2jWVb",
  "key16": "67WZua82EYi5wdLX5jGak5k9LnqJavvBZHFL8tz1MbmtBY7Mp6UC1E987FSUMjKyevGhDk13b1bvi4mQGsRVsZa8",
  "key17": "2bMz5tgVWnPqe9HtUvPUCzvi63RFhDEXGfjdZB7HKEhZEMHYBZVtPvtq79tLB6V7JNwHQSTR2qPaGfqKrfc9U6Mp",
  "key18": "4ssX8GHshv4kDEr9XW1iGqjV6W7ADvqmJ53YuevZsSy9KRVN9VL73e6zAyuXi5QuMH28h4gu9Wwnq1ZxzdNannE4",
  "key19": "2c38YW1misYVugR3t9KiCKmpVDCz17eXwirt79wTXTKr6f7dCdAdBaxSttXkmtQZCgNbJ8SRRT53PHmoti7GShbW",
  "key20": "5jQFtvz9Rce379J6RRqNUFPx9agNcTM35gSQq3EM9aWDLwm2ZRjAV1AafJREV1qFj1ay5g8R3Hy9dHEgMEbVgF7f",
  "key21": "2KT99ribELe5cns2aY9xoZVb6uooRAeuDkW4Sx96FZwfVurhCpWRxZGTYh3yWNxSYJM96347SB1ryArAVraHTnNT",
  "key22": "2KJGQ7wX88JYJotS7K3hroGXtUzfYL6L1824CQCfcaUhUTUmy2w5mLtHkzbogMiTebPFGSn3C83D5qVt14apzcjr",
  "key23": "2cvZSqz9FKLFJmHNeSsF9ygBd3nWEju3LkTaAHjvMoLgcrtqMTwd3Myybfrq4n4QypaZxbwFCokMcevCsNFUxnh4",
  "key24": "2KDhy8xsnu1sU35ExToqBALCfKBA3XB2uiHsXqYC1WVbcUMeAZP6jx74LjhnCqNk66QHP6rEg1GwnwpXVak47r6g",
  "key25": "46z1JRKqUZ7aMAmbkLQ7cpimdne7dKJXxGNRpzKqNeRDmYtBYdpTUKEVFETooYZ4xmmjPRp13GFTERasQdstgG7r",
  "key26": "4wj3hHY8HbWXQpJSkyLEUYHTf2bMNH6Bnx51ra4vgGN2h8xUnQK3zEyavcTknDj8PvM6oCXGconGjrvDqhtsJ68T",
  "key27": "2aYytatZ4aU3oq2QzzNYCy791KSAeFAWVBW1aQDj9MZSxFazavm6bTVnGJFXiD1U61PTs9gGbg8kwgEPhMUFULPN",
  "key28": "aokZSYaPHCBcpRQkRhd921XgHfUZWGX3NA4qprTdcybtU8BBxghpADoYfvqzUG9K467NtYjfPE24Nt5ofgjJXmN",
  "key29": "5duxXcWUmRYJQrTYdJy8535UJSRJunexfvhoUn6v9JBBbSCfMPsEFC3zspRaNtWcp9v9H1FrWhziQw2gbnAngfv1",
  "key30": "3tqm9Lr9dAbXJ4JkiqQb4a65qUETvKhj7J796CTRScdpptSSSA5xfmwJRPENVjtHBwNqWWMLn5LNtfxiHdmjfq5x",
  "key31": "fC7Wn8Ssob79f5Ntq9zfyQhB1wefFWnoQRMDnnCKLbbju84E6566QwPcnRKaqk3qXZQKrWqAwmVkQHALbUM7H1e",
  "key32": "5p2x85aHe5eJwBxx15kFaXkZjfnVj2TRi3jnVsLadHeCtMaZrDDoPj1qCB4o6HsTRZLX1G6osM4Y21j5vaYpw9cq",
  "key33": "2VkQMgZHopFep2RJr1hBCrwsSGYVV1UcSqR7v7ou9m9eubNFy3A4EsQG4gyq37wnaiBNMetMfTpL1BXY8cizYpMU",
  "key34": "2WapHrKN9V9HSbCptftbaqgDJQkA6PZpppuYXKGbcCaQnVP7hwaSGkttRX1CJ2yHyz8NV6fXM4K16wPrQVTyaTjt",
  "key35": "3NfL9QoMWzVuPwfPHu6KmSTNY1JCShGC3rR5uhTUin6WU6LiFjrLsHsLwzkMkVUqfd8tM7LrUx8Tk3Noyt1DRNak",
  "key36": "5BPGC48gGerCHdsJGyFoU9Aqt1xDoYAHSNkoxWTiVnVDHVsQTB7SQTNsZvqw1TddWJzQmWPxr7ZrFVvDTSQsLvhN",
  "key37": "4P4jv1K4E78SLjyvQvaN1MJQNgu8CPeBuUHANDVLQhXRcem5wSpFfof6u7RiW5kyvGVA8NVh26XmE2EpMHLhR2hj",
  "key38": "4hRsntMX5fVKnwR6jfDYm2swKNf1KU4J1tdHpkEKokzAtHgnvtwHTf7YVq1rWi5H8mqt7eohReMhccPJ5b1uH4FG"
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
