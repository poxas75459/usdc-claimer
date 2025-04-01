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
    "4oVbUA2YYSpgsca4Ydh8MUWiynSabWHo4oGjqPZuJzBT2Gjmb9Wgp6p528ab3VRnzTjoJzegsu6KjTguKifKUbcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38aHEyGc4qs8vD1aqPZetvo7ht3hwQvAD8FyTdmxVJfbUaUWEDLA8uSJ2veGKeEmzgAcynKwVJ1NN9ufjkVbHHq2",
  "key1": "3fTNLKF3rUbgcE8wW8TW2thq6XhFyasiVoHrcFZt7C1TbyVB8UNXA1XjVPfnPEXQjWnPxvxUZ6qayw8VfKLNe4XM",
  "key2": "2aMFA42uAfsJerWwQHUcJ38bKnY6t7WywX2UQmdTPBKdQ4y18AgVbby2CeUwYXqDe62LCyg9nNwmk5LpRzWUX4YG",
  "key3": "3jEriKvsBvRCPsmLkqMTdT9jbkPzGpoXdVxMR1hmKD7iAfYDANeB3sbfYoKQD5XJXvVLGCn3x3PQnWJ573bV4CSV",
  "key4": "5VAfkrAK3C59H8JYXQHrNgbL2WBg1Mpd1QDzmcG8T7qotUy1pUsiDgi7hDZrjwPpA7XogSWHv32C6AeWE2jFW7Tf",
  "key5": "58eNdEW4tcGAKTRwz68HxBPMVpz2oGJ6rDENG7moS9QKgMsvA1BHe3rCeeUsJPzVsLmoCuUL9D3cAcFXoBFxKkgQ",
  "key6": "2ej3LMFVvWLsW2dVZXz1DckeK7gCcVj7vWrKWDPbj7EUvVbHrhozYuATNf5k4DxthsJnLXMbFrmiNB6Pq7AdPxTW",
  "key7": "56nzTXzRfwNAcASobCHWQcCRKCHBuJRLoTMVs4QQPaAus7GRudADDuRDMzpG2J76kN1W64HQLTUQ53VYyymCS5SG",
  "key8": "2KQc3DtPut8XUyxF8Rsj6iJGbw1tQCjtdkyTK1kmq29EpgpjENddoM8KRKeFhM6LwV538Lmq6uCL1es9gBkfugip",
  "key9": "4dAt5sfutNnGHcreojRj35Tgx2kneqcR5AytX3MGwezbU67arm8yprqN712z9E2ze3ibiHf9e28RfhydPkfhrH2d",
  "key10": "s8X4LnXqA81WmUzF53CDSDJrSmCUzJpQVsj4PaUmx4g4Sr3QkqeNMS5Aq8XD4rt1RrK3NFdFmArQpDU5MW4nr8f",
  "key11": "551uGxm9HC4UhLnqVB8HC24jrJigU82vm6CY1ZJufUaUp1xMR6s35935AVmrHHb3RpsS58VWTX7AX1YQjactYjUT",
  "key12": "35YTbqdxW9M8PWZD9BRgXj2sJbBiHwWwfd5WysPg3jmpT4XF9feL3rfhqn1LTMWZPnP9w98gBV4igbLsL9Ezxxnj",
  "key13": "4VbSBjLE7ZNPucspN4q7okWtesVKtBKkGuCW5CgjdAR7n99XF8JTSHHimBCZeoWLDdouDMoF9cNyQqrB4MGcDZv",
  "key14": "5zW2x6yjdTubPJo1xc5GTbbGxLt7PuhkST7zX4o29nL9PUJqXFL6Z5Lgq6NrfUNSYeLBdyHKs8xBbgT7nzCTDzVY",
  "key15": "5pAXA5JtczcVKnGd9LNh3yTPZkwU3NdEGzczFbrdDUWC3fH2nk5rsCYePbzm51gKZaszM2zjwE3CdTcNnefvzAuA",
  "key16": "2RfgZSDzNfnN4DCJQMXoMqrDUVSDQ5FQhM2FFzFTYmfcAJfcBWTU63QC98V861qV9DcR2wWUzSKKsxLmiD7ivpCG",
  "key17": "Fmu2tjki7gFbCsiySzZSEaeyv5Mc3V62b9q37qzDWaCQkmcUwcCkEvBqCsypH3Fhok5AkkDf5RMJsFHQgdEnftQ",
  "key18": "5dpkcVFqecKkmtir7iMR26QprRiwwYfcDEv4whhJ1CMrPRSwxsDaR4A6u3mQcVcMnCgwWi4fXczQ12j6bi8SoYUe",
  "key19": "23cE8XATpFLvkeUUaHpfN6TCDGMEa6t6FW17PFeu1tkQDz9JarAsdWqJGSPN2XbfxL9NckrsX6g9DrcV3gCtA7yh",
  "key20": "zBW3JfxY5h9ajCKvXB1YDFu7bHFY9G4TxaRKUtEzD77MHDM2ZZ5PTbH1qVmERCGcvNZFC1HDPueoZbgNZ3wUknT",
  "key21": "2UZGfgfgeeFKnDXUX8LtLHGCm4d2rvFVUnLvGs1CBV8X9k7f54kkMiTYGLhRgRUEeC1pVJMxrM8RncrBNCQWWHZD",
  "key22": "2oDbtUhw34YwexVXViqf898wFxLePnvutVGgRwz9NpzPRD8WK9rQsNJWYc8QAwDvYyZogLftL9YDduZ9xk8yhH85",
  "key23": "4xMBU86G8bCSeZ3meZxnVZ9FHze9w8XSY4wnCmz2vtqvYWJy9RigmYC9TLvv12DpG34ooSQGCQoNvEYxGR26C2t5",
  "key24": "2mDoPP3961k8MxCQVme1w3Rju72r6f4p6YpP8orYdoDTBKj1Wn6Lfnu6YkKNXxwSGhjsGZGPLj9nk1ZJamrCuLpY",
  "key25": "4MzPUvBUGHCEHT5gg9T9LTAUwQejFh2aGMZRo9pyTP9yGJj8HXLUPMaAnX6nC5XtJSfR7LVnBZ5uGnEJaD6CF9na",
  "key26": "5BmYv3Usd5bMF9vzR6JoD2PV4XywsLcZt9AcWf6weT9gQ7NvjKhZZ1EkqBfJjkR8RbrUR7hWNE5HzK7icgXAwJ1P",
  "key27": "2i3WBKd9e7DD5c2CuGSg8bCgBLqnCUfVdsqyEHh9ayRAGyyJbTadgmvbEQKsN1ek9cRJWy5zNcftRXB2FrM9ciT1",
  "key28": "NmeqwZWvS1DGA4xdm9nxXt1LmZsHrGXVAxABesXGXPpfJstvJg1Dsg2sYxkaqQWXNLpxVhKCLVWwraTcRajdcqA",
  "key29": "1W4XYVN1oT58TsVUpo7Sa9jKXBBEZ6S2xRR4DxtodR2S2bAT94FpdSEfYyi6HWgunJArkycDRhejCdVYpmpBAPR",
  "key30": "63kj2SLowxoi9fRn4uCjQkYcmS85joAbHSkUDf1srWpiqUbp7zKM1NX3vHWTJgBY259SY1HhH9SLR8rBvpyVNyEQ",
  "key31": "KzxPPurZweVWiRwjEpGzkeNamcu9JJJ6NzhNBeQKYaRXJ5LBfC6MCfpSS3Rcapib3RwRqMx7Cepe78jFgLB2jEh",
  "key32": "2WEv8QmpVrqmGnoxdr4rT4fwBa7y2aS6UWYikfDS31ZAHPzgmirFKyDMLdyGkRG5P16pTTs8Ei13fxNg8KXRxRhK"
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
