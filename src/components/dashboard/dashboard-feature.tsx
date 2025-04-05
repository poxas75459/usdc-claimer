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
    "2dpcwsnpackCpVY4Bzat9sh8oWHKmWTsRw8RN7MUpkKdWmNBpYS5SjXx6w2AnEZi2CqRF58jdPFtJaETqtADdCcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z2rcaNCpDg4rhLMhF9vkUoTzmNEpXorToh8sYp8gBNj2dYTmRZ3swaYeGFCGM2aRQQAqqidv2HPyjGJnahS9egg",
  "key1": "5dZ1A2Yw5SPThj2rYeRFhcxZTuDq2R2dhdHSFf821pwM2b63iKV4r7HkGQJuw7zP8zgzcvyw5cLdVYUtzMYXbEYC",
  "key2": "5a3XrPsfmgrYZEhYT1dizMfFkWGd6ZCraTTakR23oAQvnCWdw2s1737J3PVDEQ36nfXj2DAgyATCbFqyUq6Q5Weh",
  "key3": "3WkyyBJv94255HG2PgKgRMavutUAk5CMvovif2YmpeEop7eo4z8fdsgxCQZrSDEcW199FEg6ohNxnNMxgsFJNYjT",
  "key4": "2ycr94azDSEjyJHMdyqndorXWyafzJ6VELxt5tghRLZhGBa9nTyg5yxZzHzHgVU3jZbTTCp5AsmuWmTeMa4eJitQ",
  "key5": "5p8GoYUrp6vXUQLQvaPrcA192nm757ev8zRSsNsvrRiLkmQfdpioGHhzPSPnYnfQq5MRgiXvp2HagSogt9SbKKdd",
  "key6": "2B2GimH6FoHNq4Wk2y93XAgC1udySYTJ367kzCKhpSertA86UWj32mKWBH8jJKHC2qExWTmEJ13qLZhim3xpZM6g",
  "key7": "3Wou18PopA1EnFrVXJeEwNjyKmWBvpbYWNDgqcjMhjnNEvJ2B6RrQy63yoJVvM9NxfZVMzqLMeUbTXfDFFGvmU29",
  "key8": "3LeiTCL1PZr6zfo34QoqgdgsrRNs5ydSnnDVd4mdu5hshUxenvZajkp8nAe2DCMhPkjMqpqD2fo28wmuiEs7TTix",
  "key9": "4J4QXrMnhdT57TusJnTrydMfYhR2W2JHetpG3X2S923X9jJiHt3CkHbtuDZtPztjdo7GdhB8YfLCSVaVxjwE9aun",
  "key10": "3JgDubFViosu6mA8g6SKVN3pQTWppAefucd7rujkvDzu3xY6ak1rEcjGnTWL1afgnRxgxqgyD63nzsnv8LcehEnH",
  "key11": "4rc4YpdrKN69fD6MqTRjyBFHKGFfdroFN4ZRyY87FUxkKteWEygBt49EnfW2MNFFXPVCetkgEZZeinEJrqJnkMNK",
  "key12": "5UFwkNMZCfqZuBu2gsipsX1ioma8Cnc2y71MYM8KJ7KyCu2iwME5GvUNf5vsCZajRaNhDKH3UN243uLT8qBwoCWg",
  "key13": "5FQvHGMY8RKfNRqxqA6qoKWhtzZsUu39YCgx6MSZfy8KeNZ9jgscEtveG9uKKSmhfikkmUxg389KWipHmaobufVQ",
  "key14": "4KUJtiVVrTFKTBHHZsR3vVtGLa7vF7hkqSgLEWghiUKJWeZBKENU8AtZaSPmVJDJLBQ6w7GP7Z7h5eN1LEjpUx7c",
  "key15": "3nCFjYCC5h5LXuxCM18VLqvtG89nWK3Frq6wcAyzGAbdEwoRE5Kjj2Zfn5DFzjinHCSSffcmsCa3HhpSZgW7k2zs",
  "key16": "arah6Zsa6fw5gNT6x3AzsHUvUMVTwCCRJ2c4LXvEjzDCPrKca2bTxVjUP8Aev9Ab6kvmxCupC3UVC4fLWb3opuY",
  "key17": "5cDFKLdyqHzaeDffyDDExidTKeX4fQHwb9VzqzFmkPktbmwZoqQvGywaL629myLcMKkhggeQH56BB6Mvh4EBdBJt",
  "key18": "5Thj2CdfThAffpUiA3GhK5Y2QG5saRvqt7LDLSd9YnLriF8oFtCtATCFqHMXUZPYBxWcWVJubnTA4m1RvvNJEDVq",
  "key19": "3eXVCKGoJAZtPjeC46JrGZhxNS6Lyb2hxGDQSUH4MdkpBcxQ5kBLYCT15KGkrshLuVzUGZGvazXXiNCX7GuhBSaS",
  "key20": "RvyXoWNpzegPbDf6YG6GX72sPbPvD7xFXt4evEnokkxUe7bU7AAGgLzT1GZmUvJGmAZLCL8NBEUFf6wyfWyeuds",
  "key21": "5wHBkYQgMChPX4ZAhkgV34qjLL8Yr98NrukyWL1VrUfkqW5UJmZU38ydsq3DFnzKhxZQpPxLHnCTfzYnQmodJp4m",
  "key22": "FRhGP3mbqAkFcrPhxFftcbTLk97RP2WN8xw9VWzVYiJaCTqyFRFbav6KPJjkuGErJwvvQaf5ZPfQYMgAcBbhiNQ",
  "key23": "3JvrG98Qwp6dYJ6NEtK4qN1Mj37kP5yD3AT4dckiG7MbwfHhaQBvbAD45zXo6gHMsaaiHdUKKRdPR76dQU5JsL26",
  "key24": "2gxz2ZQi3xx2cxPubCjHraSEDjor1DQLnB3qV4BQHZJNFGtjRuwxQSwbP6BCw7yKtoRGujrGYFXr2YcW2N3XBaPi",
  "key25": "hUmH8bYUe1Ng3V9tDDgstF2PMWJSYK9fYNhSaoWcuSWhruTikhbHeNNFJqMyDAZx4AXvvkqkPDJMBbZebV3Rey6",
  "key26": "2Ee2u7zEVFb6HjeWvfwnYdK6E6utk7MzbbyTDoZ4XeVdq1LKc5Z1xmJG6LVcHkAZteywaxpGKjCrg8eD7PNoZ5fW",
  "key27": "kpn4TKy4i4JobJM6AHtrnmNqnmxa8c4XXR9MEVACSPaKRQZKPXMNh3vmwBpFfFk2rLHHzctX4RpB1xDAbthCMv3",
  "key28": "4N3FQA2hCJaZ9E9pvvD1vE8zL9HGcCums4BVToAEZXA3mCrDQSgCfV5zpNhvCXJBTC5jfGYUj3nnp6CuXdNUMKq3",
  "key29": "3Jj2R1aMRKtm763NNQ1kRniJFg9bQbvmHqfaNTSNYy6Uw8J6hxJ7k5M19E7WkRpQ2Mryh2f6LjoVhwUkuEvhj9dE",
  "key30": "4ePtELr9DJ8gAiUmxG9T9grpnL5UTGm7SxEk1punsktbMGSmHXrdZAayZvj5mXE8CaFXzvhtXv1ZWH5cyzP2rf34"
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
