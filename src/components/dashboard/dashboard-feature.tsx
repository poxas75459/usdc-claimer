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
    "5rs5J7cLLWBxvm5rmwyD47S2AKCe9aHsofi3gEU2LvVfG7sYLhr7vvPCjhZetW7tp94jFUxZZYH2taP19v7uvQRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35C3mh7zWoQMj1UPx3RR2osXiaB3GgLSCzRjhxefM29kgotAiePBpwHg6oWtps6GHzwYDxcoc9wbxge823vBVsu7",
  "key1": "64BCHYAtC4c8PdshxtEbN181QDBFrKf5SLMP7AhGwG2weDrVtWMfhdAEePg3niJ41jum22uyXEWyFujMh7DS9kPN",
  "key2": "4wtTELYymDPaWQhzxxaJypSiD7uEWgLvxNYqmqegJ1PpGCRwiWrU42mDnuxb3rJYVymqqSEX67zHFjtstTRSMBg2",
  "key3": "5yyQqSRTPYjqH46Mw39DpRZGcNnpx8qVFDyvgNtoKv5iJ2kAs9KNihxxrDYh6CHxFyUParY6ryw4tNNftwXJY4qH",
  "key4": "4oMxX32Ro84dYEPfr3UQe7DdVTuWeoeEZGJ1cDK1KQZSm6JHY4kWy9aHBceT1Q4wZDQYtQLjUVaanvvnenh5NJJk",
  "key5": "4583Ni5qNfmbQVX8rLBLFXMVZ2iRQak8JBgF4ntMr84Fia1zeNA8yCZkkKXAJNPMFuAQwEAXcNTtRceyNkCFipYd",
  "key6": "5gQDBVufYey5FVsCQw5AMd3KL66G1sMJ6Un7asMyjLpMCoHBCswCBGAA1StZ1y1dp1tTDTn7wFAjPFdJdoUAanYA",
  "key7": "2odKdsheKQLFmzLxhZGWF9tmW79JeZLBpyptgYKxq6dLMgvToQmb9W6bTX4SkxKbWVsDKnZMDCi3tvejNc5Ntzff",
  "key8": "3XskGmTMzpt3RGRwLcb8gPJPXVaiCNpPHxL5eEh8xSAEk1ufug4tVzsWpxxqax8HBiuJkjCEoVu2NJaDcMQPrjdy",
  "key9": "3m49AJJR4bXzcwiJfHAG5EUhwVTDsQPq2peHpQnHLja4X7EFitnn7pazHL5oHBXR2hnCQFbjRZURFDJTPYFtwFtd",
  "key10": "3nsmHnWterzm5hcqeUJ9xJnTJq5G8PerF5Tom61XCr4jBDVm2AqoXLqJN7METTXXJTkmjYnMWgjzRH2Xu6kQeF1j",
  "key11": "32J5DweM236R8d1sX5hETNsXRp89tj8E7esLTmQNr2ks1UwS8QaHYP8Qa1nu7N2AWxHnoAhP6CBMVyATehqbBuZe",
  "key12": "3qnocqjbL4Z1UaK6ktk6mHnqNQ1Ji1uH9f7Z58L6MkenGmW6wmg9PeMYYsZ8Edsjzo6dhkhXJHe6Ejy1JJ1PRjQE",
  "key13": "5sEXUfrczCXKfpsKaQGzT7Dq9TFJ2SVUjhxgpv4sdQYQsTJS39arhqfuRBr46pmkaxvh4K78uCdFaYZnRrBczvzV",
  "key14": "42argECZgpiwa3Zu3Ft2L2sYucvFxdMq1W2KuKCELjMn38KUw3WrukgdNn2zEoy6zTdT8HLnE1reZpxU4syymnUg",
  "key15": "fGywKwYcdrDzwHv1d38RsUjh8C1B11dDhs28x3MjyPDy1NUiue5Uu1qpzqrJnT4iS6eUNHhJ5Z7wAeg2Q2uhkTh",
  "key16": "4i7RRBgztMUxcDJuuMKPZxd9FzRXz92hWJthQAGcuMV7ePXMntXrA21ReQ2rT68jyc3w9whFKihHp41w68vbQQ6m",
  "key17": "PDRyPi7NJHLTCpkzc42LZeM2mfH14Z3JvCEtuBmP1WPG3fS1v2NBX1AGPuxQG9HjyGtyDQkhcfDSmwhhj5k8ZpZ",
  "key18": "5eVzyF2K2NefwUp95JtCNgqHXgUMcbLsM4zXscDaWbUe6pQk1KRqzG9Puyfd5DEhPn1movMKrTXNZWd5cgP1yPCg",
  "key19": "2iLHspSR1RKjStRjPAJznDbKGaiMLW8sRY9GwvdhvXWjWBxiAkfiK44e8PdoR845xbyhH27EMVdYByeQBsxCxQ2u",
  "key20": "3eoW59pfFzqDfwHtt6nqCvNHez58V8JL3NLRtBVxYmdQRgC9DnknPL1njs88oSHVMkMxCAdWbbBNPTRLWpScc6Fu",
  "key21": "3nNuE9pPX7hvqp7Mxr8P3WTFWAxHy9ppuNhNsCKauQmKKnFjyRydaYzQS7GnV9GzqWFaLHh9avFhDNTSPMRsZE1a",
  "key22": "4uGsiGxDLxGAghYPzkXJUn7rd7yXGfF23sNNQ3Amzmm9QytsKcGfcxK7cwWT76NwGdgsDqZgLHqQTfmatoFuLvzN",
  "key23": "GVFnf2W2rGDnpTdKyLWRnoB7ya7wRJSz15aSPKQDXJ7jczXmUE6eWS4dEmNG6QHBeMjkkJnoufk65ae9yfDGytS",
  "key24": "3kUCeMfFwFaa5hum2KFT9NLK7QkK5hhhUR3pbu7qsiJjagrw1BaFrtCaq9tXgabtbcnjvPKCwWn1ycQkQzhe7R1R",
  "key25": "2QaiYnrjvg6VtZXLmQ9ovtCh7YetfPscF9D2u2HkCqBja421X9h3c2iawNk1obo2cSXycE4tVhrbBPyXSck1LyKv",
  "key26": "3F6yJbgA9Wo9DcRFctdLmsNPghMRuvSsNh11gsxMhD3LtTAQ1wzofFYfrgRAiMgdLoRmMQU4mDEczA5T7diaDJvV"
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
