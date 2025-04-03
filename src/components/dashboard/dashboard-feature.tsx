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
    "2D7Fapg9uBHcXC8muEXeK31EsEEfitvrU8goDVhfnz9jW8RscarrjYuvK2GWB4ra8YBY5wWvSr6NJQ8zBDZrCGRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jcV5wbDUL2no3tqSw7WBwccj2WBKPxko5HNiRx1EndoLtzQSbnA1EUyFmqSxDWMQP7fBmU516FqHWWh1rJwF2UT",
  "key1": "28zzdfPaihhYZYjjC62wX46E2vKJMM3jAYu9BQGWxSsZtdE5KdtHbk4Dg4AoGy9RMuzH9eGmW8eZQ3x9vaT9x1j4",
  "key2": "5mK6Z3CMhLJmUwrGkPVwtNrr4BpchNkdJnVeMSL1LCjtyWrTmEkZGXGNmMd9T1Ki5RqCeYsc7xeLeMU18FMkrzny",
  "key3": "Njmf1i2YQ1oHUAzxjLsaXqg94ZFSRjFbv7TpNwENnqvwKpSRu42w7QvM4A7ugaLXWNtiszetCdCJjWchy2iBeMu",
  "key4": "3X9vvYWwp4ZWSm6af58Bu6NpdWSyoKbCi9m3VBYpK7bKeUZ3XTneeszVhKze7ZzkesNQq29u94x16z3vMSFYGrS1",
  "key5": "5uxFYeiNfB97pQP46oxokVBDB6v8M7jZr7fmginPe7wUjNc5ZzYTaWREkBY23dhcutC9TBGFhgbTkSKYijiLq1nj",
  "key6": "4cfPHUz2zQ6eZkNSr76c2rcySVV7fs3r1vuBFrikPgMhSkLn6yXejuhA2nLG9iMXTjZP7E6iYtgxoohT7HbR4AHs",
  "key7": "Sko9R6mPcsKgFcSnwhZ9KghuLPVV7Zafc3HrUVxPshGxKBRMgHHc57UP9FEofbLYLsnZxYTceHLnLWYXrTs9ts3",
  "key8": "3QAx2HXJL7NbV3eeKnqKVghNADbUo3sradSoBijbooibHNWCHksnne9NPcAEnFdUb6Jq9TrHv75xpbYu8coVfs24",
  "key9": "2o1SnKFqDq5xqVt6hW3viW39VeonxUYqzKUtLBNMQ8Qg3ehx2qzYKg1WtyQUZ5CcC58ZtuWpTMF4VwZ3CdgL34dZ",
  "key10": "5j1gSGbUVFy7XpcSfG3UTTmemKtm5zfXeTMyDixjSApq4YxaWUosyhAj1EU2E8CKVe2RtGgX9n5XS3caMhhYRAU2",
  "key11": "3YKi6NdTcseia1MVYnGTGV4oRGS9wryaYmsdychvjCk8SzJ6m5fxB1dMoHVeUwntE4FDgZZQ25zeT2pnHtNLAccU",
  "key12": "2kD31ccnEkfFNgp1fWoQF17hz9x5pFxDMC4C5A73GBvnL8NbBXYtTotMo8xpY1kx53uus8e2166WMqoPFD6o3UPo",
  "key13": "42aVazPhVUo8PZfLh4EWt8ex84guyKNXBphb9r5i82buTJUtEfqycejrAPBYDi6zHVArqdUeWhY1YWELUuL1Uqrd",
  "key14": "3vzgRUYSWWoBouuDKwmwL5f2A9Fqew9qoo5JhorpKA8C73EGiXs9u22CJ2A8HE96dzkksUwVAtSWNDELJrRmF2Jb",
  "key15": "2uN9hjNJ1QzdusDBfoQgQYSg7ALKhzWcb3jDUvqxnvyJym8812Zkc18fzpiBTars9mPqgWtbT6QCtaNhe4u2Px1X",
  "key16": "43KcssKXmPYTLSw2USvEpHfqBXtB84oT89mnMN4mB42scXdbS3aHFnMJC3FUGeTNQ1nJdqHs4wPZb5E6TcxfpohZ",
  "key17": "CQ5K8GigLeexD6Jxbh5THw1fpFaHw43QhHGpYDqmWAybYLDtWoZVBfphVcSvEUUJuKNE4hf9XX1YeY4KD1pSas3",
  "key18": "2i9KaUvKmjpoTc8gKemcdtRKTD6JnqWLFecF95FWuqv2hGGR9xJGL6Ma3S3yWFdW2Ufotxj5NFJCJekwtdajSjus",
  "key19": "2VqpcpC53RVaDhSKqdZ1euLsJbSYuep2gHou8f8DHPcPiQbPz4TFYgnQKj5ovXmujnmWa5aHAV7qxzCkXGWK9F5P",
  "key20": "2YweUcrmV9AKyo4o9EcwyF6DN1F3UeQtXGrkSed3TV9HEDmpj8aUQytXrftZgxeyiCsPb8fJE1oxDDJVrJuTb8o",
  "key21": "37qFqt5HsHZZhabtxVZxVRX8THWMx3u2LRqw4ht7s1VrjNmTMUPRrTjy7xqn62igFdaUXmF4DYGGDQR5vEqjYw9L",
  "key22": "2v5QkySPQuahoL7Cim67kqQsdjyoB5mb7z31LddiqFQnj5mTY7hxPzXMkZEGBNvpGHiCSe8yfvxqbAR689Te3V1b",
  "key23": "oBjBWPBDsEK8dph4TjE8LGQdC2YmibuYpQkv2UvwTSgoLxJnLeZSogDe8NUnAxvaK7nqw1YBc6Jpb3ZzPv9rT7o",
  "key24": "57wP3Bv8Gcv3qDVMiQnpqg1bQThsNYLiwumUMUgZCkbKm3GjMrYTrkLVsKjVncvS8zSPwbKFzsJNW611yFXDckZU",
  "key25": "5LLzpw2ZwGnJYfunBVDfY2xPN14ajEtwUyrTDyUK3T1oexXV7EZzX3WTuFEjsUEi6v6n5tRBcj55S8ACp4VesheE",
  "key26": "gkLqWEZxWt7WeLSzL6LejeMJ1pqLawg5kFEWm7E5w5peobYzuUbqJLm8XBa3ri25FWL6wTGEoozBe74QkSg2W1W",
  "key27": "5Wk1kk71LQhJUWmEddfcwwmKkCzcDH4URF2G2fb7fFUidYRp3zmJ1CZqyiRdkJ2G4dGZuaukb5VDmf4JgUPDUfn1"
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
