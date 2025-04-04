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
    "5fwgrLsadPhmiALnJtqT6tQwwyyFV6aGTnFWeXzAMmMr6bNTzsZKpQUtn1nZ9ozxkdquYhhi89nSnRGBQRkaAmuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CdAcGM2zE3XXtGj1PhuoZWfoLEcsVgXEiu1RKNt3rby9x1ZhP42x9bkjjviPTGTA3xFcLbsfvhyEffbdK6YDta9",
  "key1": "5sLCuPSqFR1qMVxD5e6pXmm7TpU7rTeeez2XeaSrzhjd5Xtrsj7KrLwraPq99b8HK8XP2916yRB9nGWssS7bkp4f",
  "key2": "2yErD4gnPMbLpyC3gAXanBDCSRLX9Z1Mqu7ugkCxRpdigSgHHjktkSmFgDMT9BiKvy7miLMdAv35AWiw3rFcNdo9",
  "key3": "33sQUcNsfTd6fd3Ets3AkxvPnLTswv5ugGfQmCeEigBKPHfG9LZX3CQ3rb1WB7hz9ABiDgR9uBMUXbggAdErgRZF",
  "key4": "2Sb1k5HMpEsWm9z7uJn1D4BHkqgGPRjjAvUaa1dmd2ANBbb1eb9UVznHkhEUJosh1VvRniMvu87HSG8FvQhdB1TU",
  "key5": "5GFUkYx4zCV5cTNNBwam1LvCoL9wpAy4w86BCc5vpo2KvHkuciwyJMU1NNDrLzzGmrZ3MjC6c99TVwW5TFTmFoeK",
  "key6": "3usYg27nBDQfyBRBekwhTDJVmnBDKo9oB1pbRP9uijAqVmtX4MLZSkFdWQhr1xPuuDrzu7PdHHJQYgtpWFEZ8Nn8",
  "key7": "5vHsmdXVPq43iTnpjtf2vFh8sfcrPzpFTPj95F9NFQbxh9PU4eb45KQeTznGAR8q875s7ZQvTW8xzZoDA6jmoRdK",
  "key8": "VPehh4PhUk4dfEHvru1K1yuQodvHs3YJpy5ktpYef8UFse9yeydKmLwXmmfodEpVbBxZ9REU2nMsisbhgFyADjZ",
  "key9": "vN1mpd27bpYLuo6crSxANVcy4aEw2bwsABDHfpGAdcbm7xhednEZmg3s4BHwrrVEqfsDBtMPSo4b7Lv67myaSDZ",
  "key10": "4vgv6mvRZMMkXD8WDbRrSaTQU37qBLvZW5qN2LffJQ92sF1KZqAjjZUrMLHMwReQfT6tjtZw3MfEM6QJtEGxXT7G",
  "key11": "5HuhaSfnpL7XnqSyp4g8xkZBJWNFcZoXLMKSKEeNYVCwguMjLz6PS5CnjC615Tfm4v5RmT1fE8ZbZnVyM2QVXamH",
  "key12": "2GvgUKCswSxVSot4TUuCtoRZjA9pViGBaC3r7Sybkthdy2FmKm2Tt19FSkNGetXAsU9Movqvg2SD5TdPsZFDVPzk",
  "key13": "4jj5RX9iTp5Q9w7tdCD16CYwcsLMJqxeNyg87QpTGp2YctsV6xAStpH8CZhtthTH61YKC4JRF4ZmqTRAe75K7vHV",
  "key14": "4TsndbVZTheEbQYnGU9Xh96gJopmQWgMX9wj9HoqYrZLnxsceh19Qj2HRu79ThzJm2bYqYQb5VvKbyzpXSFZxAEA",
  "key15": "dC5k7p91QgVzC8y9AUNQgnps6aW4MqxFHfFD3CyQMzjp92oYraoURhK2kLG5VGKdCj7gUEb1VmymYbg4jrdPraC",
  "key16": "28ZqQpnvQVs9a7BDN52yVFBaWwaAzEEfQwvns3EN6H38z86sNNwVau3RxEp2TS9dHTwaYD1u9o7RL1GxuYPoJo91",
  "key17": "w37pxqY21Pvq5C2v9HtWNHLarqe89Tzfx62L5iqbGeA2ru1NDviBWdx2A5AJeuU1bgSdDKBpoQsWNC7nvDafeEa",
  "key18": "3QqEqVtxgeVFETEC5G5Pb5m1J8fh4cc9kvJSvCeNy9x91bFoe6SX7c9hUBhZ8SuEfhfd9qdHGzoVREHsTkNHwPSK",
  "key19": "5qee3M37xiiF8nHTwzAN41GbHMVE9oogY7uPndmZXtrve2FzqCdVmrZrRBk5yDjAjV9b26ywskDxMyDFPwejww3C",
  "key20": "66P4o2vzPPicB3Y2PotJbPTKN2WiLQVuRnxjMQLkPNe6t5RyuwCULtExQ1FZRk6RjkmXHTVtg69VuMCBY16Xe6gr",
  "key21": "5XhibjmcQzDFnQ12fvirdGN87kkhT1SXBbZsdR1sHWxEdPwS4SFSjR8divX7VDq5vygE3wU8ueSUTTmnnmNdPShU",
  "key22": "59tae9DQo627SiWLK2ABrgJj3wbKNT4Df71ZjSHvAfncVheTnDFfoDJqpbD1Dar2dfFbtSVgsQat9gM9dR47YvWB",
  "key23": "44pKgTuanikmVusgrBRiPRTMXnB2f6M89kz6FkoFRUjpMuZ57LEGxb5y9YB2o1PEY7LpSAUdvpMfKKkX7Y8SoKz",
  "key24": "5Y99tGBrtWRku18sfXRrPsVPrNs8EoDQLtyt17v9G2d83y1FELtbWTQdQXo2yTksRmpEsJxoNP1RXNMNcJFkobrT",
  "key25": "4N9PAEHAzNWpQHE2bioh98hivG1ehybESNVGAqgY9pMf3yeRBiGEVMDyXKh7nTneWDcu4ENpjkByRBEKvyvyNTeb",
  "key26": "3i76tynq6svKzDNdGod2B7CdNTUZ9reYrsYQHcy26xztnkkHuSqWFZaaSQvYze4MGhuiw7q1Zv58akQPfv6W7Ce3",
  "key27": "3hYbjDAv4rgGRb1mwjqPWxSxJmMbxxqcSABmRkJHXxGKpvqdrgaDWPP3spbMk9nQ9p5ysuggYCfM9kbXLT3JYUz1",
  "key28": "4bcbsrFpXdPasKfU7Gb3xb7J4j2CBFiWAG6KUhYtfNdJ6KxwKa4EwxZC9aJwhXKmdePUUpxRBDKFUFRrnCy4kA69",
  "key29": "4zJiEjGtqEMjgjauD8qrLgzFvfpRDaWrFvF8GkooBhSzgmVbjefNnoSwWM7Kqcd3AHctVUT2TCZeDduW2dhUjwiT",
  "key30": "3dgKZcv2cwGPy7iePq9vg1uKrHDUqJQRK9d65qePq8jmGs5YrCsK8ZdVsUihTodnhUnvbUwkF7134aFwkJuSB2hr",
  "key31": "2C9DvQkznmoMVTjZ1VFXSmij94CsFrKaYTCcUpz5yniU7vb94cEYzqhxYA2zUyqdcTJvu55pC9HfLeb5ssmnJBgC",
  "key32": "5zWVzCsESfMCT1NDqJcuk5nsNxfhrWfKDuCGX2ZqtUP4epKA8Z38hxHGMH5PWVDnZgMZ2ZEWRqfHy22vQhze7K4X",
  "key33": "MUiBcWgBVSnBuwLSbfKY2M81QKUtLysffzWGGrKHA4PSNkQesXoi7yJrPMw2yoke7tFShbL9JiQzaYTrEvyM8Fp",
  "key34": "24LrMn7mjRQhrWDTnR2628ntCJx11dZuoCUbveami16TSpkyittESzb6sRATEbTP5kr71kSNJJpPB48etY4nZRkG",
  "key35": "4LnGX7BPVQdYkkcCoCwZ5c2JYLv3d9qhhsJ6WaV6wTZFUFmRVYvzeSdi11bSdiKR7jgVQkPiMC1upTbUnt1P8ma1",
  "key36": "48HgrB9CDaNGnQRhk41Lu2fLVcnTW84wgrM9tMdUCxnpnAEn8DaYyG5AK99DeQzn3zUisH8DshtuvEMDZYVmQakg",
  "key37": "3PPWDJ6oxTPtL5cTSbcSbqUbQ5cu3y8dANzLG1uuq6MUwvDe5D4N8Y5RLPJhCsLnjaDEy64dGaXNN35sF729HugZ"
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
