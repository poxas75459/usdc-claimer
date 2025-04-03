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
    "5NQCyyz1tptvgPsogYmqGENVERimdhhBLaYgetqG2RYHBmLzvLtoJPc1docoHM4nasJ5tcxenY8WiS5si3haVZk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7VyKkSiFkvN3BDviQSK4eRxggCgX1JuAiagnbHhQww9qp8sp3Jiu7pfDq1xR8eYB6hcvFnxxYMcrnvSUekdwK1w",
  "key1": "4mbsNecH245db3Dj6xxTNqW4ZoFpR95quWFXZc1sLUAVrduR8SDEKAhiyqknVnXuHTRG1koE9KPHstvdQ4YMYD3u",
  "key2": "5PvTUtaZM3vDR3g5kBJUSG8qmiqXWq4HRyBEbDXH2192UbLmRSs1G3vWbHcntrTvnNm7AtAGVBs4Pi7rWtqRM13y",
  "key3": "5Aybe1TV3AFVwfrJgyhbZpnJhVJK2KaRThNRimfJ3Q2wrEv7ZmAJ3HtXzsSNV4DPryvjLq7dP8uzGvPPrgW7hEoR",
  "key4": "47nkUmsrXgMGzoWZaivg3cRQ3h6e226g6G7HopzwXDwrowjA6bnhWggEeJ4s65iBUyzjM79JDy7gbkGdU5T8qVL1",
  "key5": "5wXL2aZrh8YGR9caVnVou7V5zD7dUUijXAn5xGJ4MKxouLktgTYV7WzzB3ZtGXgTQ38k7q2BAXZALws9bFFECziX",
  "key6": "41zf4PmTzFEKRVYPcPVJNmYkcvPL7QJcDJft6g4PcPsWFsFsM1PPDvtY3HJzZrvZhf7qkwNVDwbihKf5iozwcCXB",
  "key7": "5s12MLsVFX5cRhyUMxha1Wim4ipPe3LnZxfHhf6yrXSa2PNoGmJAiNeaVNUjfstqyKutt6TDWHyfaTfSXRmKe9ob",
  "key8": "3kMrj7ZsYAcRV9eo1dY8cqfAm6QepbGYXUbrhhxccXtChcMXsje6S4SNNa5TEqu9TCy7zutmNGKgoEqPtnSYVitA",
  "key9": "3zF2CsiaPstnhGWvqkug3H3m9VhCuGxhhAZPdzk6Gwcz5x9nxA7juFVarDJP6p9JYqKfSyZCDA6C1sSUbwzqyJwN",
  "key10": "29dSM1vhxM8sLMGtG2WCSDpyqbCzA6T3jC6FgVAhKuEfcPGfqcN9PdNV6cNYBeszkp6cSeiMCuzfS1w1deGNzyJQ",
  "key11": "4dVw8YeEK5JYKQyaew9KmfQKsnrCjDASVYP5MQVAFo6bYs7gq1h6hCtuPhMcWuvFCu9dTgQUDd2tC9zWKtPKGKDF",
  "key12": "3c1WSzew2MDNFZTJgyXLrLBTccQBEaDnPXjDLD5J8YArFjFsSUTGMW9jzjrcvPpfjy43V4Qay4Vo5xGENkNSVpzt",
  "key13": "461YzT6SCS7h5MQYr9oSSDhBmMpERWYiDqWsad8zYL74PDe66WkcmTp9WjhFRorzTS2Xx97uWsZdA5G7D3Ut2VCw",
  "key14": "57ssfPKgXtXPdipn2bq5rCtKCJ6ZLbwmDdvvw5SNdfDBV9S11J8jrTs3RycV5CScS1ude3ZDAeQYCuZSefwH8wuT",
  "key15": "66MTW6H9NjzEA1BNvarMNd5gmspdLZeLszseRYDAhVQDtLhBDCAyto62nHga7n2BtScAtRLNsX19ZD9NVTVVVTy8",
  "key16": "2JHa3AWkEaTT1UKGbFumZnEyvkYPHVJ6FajYrHV1NM8UdNNVqmpTfGnhMvh1EesLotvMhpGyDeLUPpYkwRcwhi8",
  "key17": "53Wc8JUHkLWyZVC4WDaE8CpTKPLD1RgXaQdUTmzwLNBfDkenEVtzakLCbaJxQgSsL31BzQXWsCm6ZANkgg48APyM",
  "key18": "34mZuE2wXd8CjGyWK5mbLZwgPwkWznz8domNNKfgGARr4iEknMXchDxdvNeKwWYVRGaXw1g26cicYXqeTMMD1XAq",
  "key19": "4YpVxqx4JnjRLpFWdnk3nuTLHuKqGk4SdJAnnwdvgNMX669rpZuE9nvw145z6NZUzARv9Wr6tGDYsHdpoNHGciy3",
  "key20": "49rj25Tw1k7GY7EpWyFBLF8ar3BrwsSdE1hBmkYwoAe8e8MejX76vwxNVtL46ezvs9Ek6yChYMbnBMK9cLuqJ4xw",
  "key21": "4RWBVCHQW4MTuSSJESQfZ3eeUMxTRAwhKr7Kx1toySCxxf5uD4etP38EHvpeXdiK7yqKg8rTP846JD9jD8up6NZ1",
  "key22": "YnMXWdqPcXoDx8fAgtSzVbTdBXiKNh22remff81ckMCFcgbqwZuWDCwToNsZFP2cjJeP7BjkNzeaoBrpCcJpfpT",
  "key23": "Mj49F4ZTrLrZgfUCg7EEcZW6hgJscNxExEewyfpUoaNaQuxVo1JN7YQZUzDh8YC562s9sUEu9pXradAEMLsp6Vr",
  "key24": "3y16i4KevKkyku57bsqbDJKFoJzpG1tz54ybNXoAeHbtaZVcSgVDfHsMfeTHPfdEurcH5Wv6Q8JEdxK6dUJtCBMX",
  "key25": "5iMcXBv2pf315s6dSkpKFpeR1B1TUw5TXXZzUHAjUQ4iiHaJuUwFEfZJA6Bp4MU29HgmWzH99KUd2EE4e98w53Ko",
  "key26": "27ZHQNxE8HKnqhB7WnnQk4GZX9wPYVBQ229mXRKmXdufhut9C9na4DKCb5Ftd21AG1XQmvSc1tHvJN99T5QchyR4",
  "key27": "4rX2ZgMs6zJoNLMT4PsxaUk8DLeDzCsx8gu8ciR5iFft3tuygLbBtXBEZzwowtmLA8EzmSgmWZkLbYZtzXAWSUa",
  "key28": "4fw1HysvDm5Yp6BrzLTq9LJ5xrtS6GfKtH3sPG4E7pQ1chH2exCCX4VajSUgToSUKfCVy2wsXZqBNxfEajW1gEfC",
  "key29": "yr9kkJLRxUTwHUZcoMKYGqGMajeahkxG8517oXtaJipKXUTSoT9VNFWnkQoxV7qg42SusajP76AazWq1Pd4pJx4",
  "key30": "2UnkxnWqpuVjaCDQ2v7pfp8hNdLbrU6321xzj7RPViLfMFkVjXk55fxfoknhKwx8RV9AKwtmUPDBuZoCP41FecRK",
  "key31": "53Ze97rkCKygndM1LCHgCigRDEGKNrNzitcLCN9qfDfELLd4i2wiGFJSjD3erQ4NzBFXw7cAMEAhVUtb66HDU15M",
  "key32": "4qFCCEQqMdmw9kCCq84PjScJmnpeMQhGY7CbddDLurtC5Q5wo2znFN4v312cVuQUZYUaSz1tdpU4tie56cuZmPsq",
  "key33": "2vbd35HPhd3FxdZbf7V3aD4GmzqNAqbWHUByE3odL5b8wmREbRijPHcUkmiA8o9LHeYV1Zs1HSM9LQhCQpxXoLmH",
  "key34": "4i8jyqTyL5t9wEyNvyx8NnMhSEKVz2UN1eJYWxLYmN654cHLh2QevpbxzvcS8nupsVHHQXphqp91szZWe2RogRUH"
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
