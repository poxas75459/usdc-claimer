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
    "4nwv2FjVTN9TKickTUFmzTELUh6j1jwL2hDDrdZLkfzcuZWTMfA8SDiCzksFKvpw5paPVL7UGvb47CNbwQzyswB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ChJL3pYuE9Kc4nMyR6c9Ubeyqs71VnrkhBAJ9JUMRLydBNdcMRwgRKAZYDhq2thYWvFWUV54jt7ta9qQkYC9N6z",
  "key1": "2dDqhccr5xp39ku8mJLD5HYUxkV4gvRKp946eq8RzbwEYQ632z25o69pMCpdun643o6FwxaYAvqSSyVkTtw2JRWT",
  "key2": "eng6mJrqmGKjN8YMgEaE9XYsv7TuL5GbMAhzzEt2zFFvpJeSveuU2kzprhpHvpm36HUhcmtfbLdwNjoxrmpucfo",
  "key3": "RCqVmiqF6zN1GxEsxaFoSf2M57NGqeWTn4i5mBQbHs61zZZfu5hVpX2q1GHPXm8SwVKGVkjh9dt21FzygiqWGJz",
  "key4": "mdQdW4ZRv7vBDighakhu8cEobT6eoPxZkCBZAEVRnGfZA8WeZXtx4pz35UGReiW1iCuCA6tNpD6ekcD2JdDUMSh",
  "key5": "2f5zvxLX2C5FjHWXcnhHkE4XZEfwrcZ57YXn3dtJ74UobSLcL82PZm491d7nNDhQopDbLpSQSMFCaKcuVXvVyqJK",
  "key6": "3Xys3xD7hX57DbiJL2kvY6fYaeTkBRR3JQ1nekUa1QKGTkxQnixN9czmx7XDZ975bqPBAGY5q6Zm3c8kHAyayTDr",
  "key7": "5pdQ7QYHMUczpXaJbVz2BhtNmMhrFSkiNzVKP2JQQf5wkCvA1Uhy1eCGerDkwQSjdppv8qCX4dC9iU1q6V6nGorP",
  "key8": "3xcp7jthbQWQK4dWNbAYikQkrh7QLhnt7Aq5yNL4AEiGwy6ewQYz5YEiYdwKD3RYdSmwELjj1hjMLDQqMnVLWWLH",
  "key9": "3pmdvGQZH3gD51ootWPd43N5VvbN1gExuQ4uUnHGCb46vWeuuNhdejr57yVc5VngvWusD8qFJuarBPqS9b4VJHJo",
  "key10": "4rvoiGsW2AoQ7YS1fVMs1eF7k6r5XAZusxuBWXS86NcQRG76cQ7HGKExkaZWGVtueU2jyLgnUtiijVaS4m6oU7RR",
  "key11": "CAoYprFCcu7oTeQm55qsKk9HjbU6Jvr3PgTTkPUqjYNkAL77K2yiEEERdkNq41NHjmCp24kFzVj2HiKNLL2qU5u",
  "key12": "4KVF1uuLFkQGuTXXbD4oyhha4cNzSDDbfT2PkjcRmoVNAwNmWCBDWF2MWx4UFphEcY2jsk14DtarFnie8iRro2uE",
  "key13": "4SciQHcWXVwH9opW8HzgKnd2MzGm97ko9pfaRnAsFfFzZFBgZoMyk1HFt6WU6yXtxKDUQm7j5g8wCmorgWALMcYJ",
  "key14": "8Ar8Y8JgNADnofw71cq84FEssgYfqnmpUAVujGa88pnptoSJ3fipU9VeeerZK65yPG3cdfX8BJQaSLaKkvmXwff",
  "key15": "2L12Z5eneneMLqzoikQovnNvUJ11yaSVsnZQ39hnboxUbarz4sexjJzWA6UjWcTYp9cBBTKxhxv294t8mYaMWh9E",
  "key16": "4YJyySDDjb9NEQm2gMwzEYBV6VhqD6L6rnaS9rTUpvJxEJDvNMwZ3f4nVGSt5weFGw1Fgtk5epDPhddKLaw5H3Bx",
  "key17": "3p143P4Q2Y5FY7vh5wTLTDQC6zHHKtTmcn8AGdkPduD4SixCmSJRgMc3fmXGNYTpJb28Wk9eUFZFRKkPcjpGmHsg",
  "key18": "3bnMxEvwmwQAvgfXqauUTBwNx3E4aX1hvmBMmCNhvVnFEbVpfDkU3wR7pUXCtHzkffzAmRsGtLcVhNbFtKEbJMBa",
  "key19": "2wembFgQPmrJNc6UrQQRB2LuUDXLm7TjNftUmxFzx6b91pQPV1YiAThLZ18MDW7b9Gsrs4t8wk8ZLe3qrrem9vGy",
  "key20": "38kGkUeop8BAC8KrXwHpVk9UT3aHYnGxZHny5WwceREQWJzwS9YbMLJo22y2RdpTLUWhpEoEqBamSd4k6uV7TTSu",
  "key21": "4Xc4HwZkR8v4Ub8c9HZzeQeAD9JpvvY3n3aA3cKbtVVJTUA6cW3uBBW9G9pZjLYSego5yM6NNYZZQtRTAV2Din63",
  "key22": "5H6yhoMmX5zcMvhDT5RDDejDooCrp23TMB34Nxhk4LBzAiFnMzLJFaEF4W2DrxygZ4beBNHRNK7B6Y6LdoQSVuos",
  "key23": "5BhtfUYVhGGun7mcLLthmbpaef4WZgEqRTSvWsA6s1zfo9QCh9rdDhbK4kMeGnkZ6v2tJQkcyuJTnnthg9yPVA9d",
  "key24": "431AETH3b3gDJaB3U7qtwCTtiFC791Jch7h6f9tA1TWwH8ysuG7PJAVk2CBeHdBskwiYoKBSR1LEnwJRUufrbpJR",
  "key25": "EiwFRFTymF4kZ29w97YXVWx29VgpbeUDVkoxFNv9TRCF9uyBbKCFFqe4XH9Tjwh5E1XUkqxWgRa5QTcBjAYGTzN",
  "key26": "4s4ZRScUF8cvhBspjQfnkQ33DU9uVhwtRR4gAu9DwrRQKNGZpHdM6qas4CnqacPLXtmADLUnDUvAVK8W9oRaGzkH",
  "key27": "5nt7iYBvm5zQSDRMSX87tsMWTRYmRNmeR294gZF7BRUqLN99YVi7Ebigk9tYdDFCqUzMAutF2qS6k2P3Eu53mbYT"
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
