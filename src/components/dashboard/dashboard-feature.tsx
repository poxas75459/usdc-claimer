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
    "25RjR75sLGF4b5XXKykHHEYEcmmM2LEPHmk3BJ7kwRyz7ppyhRnYksof5QzogzYwtRq45d6kwC119SAN9Ge63rNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PG2nLLHXL6sXYXwGiLDohP8BhpJwpafQeNcLEYX3tx8Lsed48NodNEhPTXAXMkLEtdWmth1FrYzceXWHt8gs3vb",
  "key1": "3qsJTd5eecpDzG6LM9aoLzNuyoJ49xSC7kCXNbi1c7ZbmfMXt7ioAnPiwpCCmg4HVRGJHuACpjTtY82eZM2vNEog",
  "key2": "2FjZWUDKV3mBP7gnMEztgAkozu4nbPSiQtvNqeaz16gEF1yiCztpXYXCVZABUQSqRaP33iFdmHMQFpBbp1vHLm4M",
  "key3": "5hwAz3NVZUiciyAYaBGnnz1jUNV3gW8sNfXpwFqP4aDB7DswAaNQzo7HeABQUdXJDHEkCubGSRGxwm6oXcLSHxns",
  "key4": "4iqLxoi4GWgQ1WQ5JGjbtvTbqgPT8Zk1nTEV7LLrwwoHDxc5eqYkDP5PrB7VeJC2bAEjm5Qd1h1dUYbGjN2ShjoK",
  "key5": "5u83UrDxSqrNcEqwFMDTp3mzS7TXoF9MXTUzMEMTjvuLMjMdPhz36qmPHh6CDtyf9Xwainf8g1JuvnbGHN8LcZiW",
  "key6": "4J3KoBgPvwxgQFFaEzQEiYHFyKp1ieonSESKmCWm7KFFpLmYrzhNRRAsAt5MQSXJDhFGhucaAzVKSonna2VSS18U",
  "key7": "3f6cz9KhRWzYXYyTnd4ojyn9SXKNbM1ARRmhgdtG8Bb9SB9FKAp2NJCuS4Mi98e8wxD7s3rZFnyriCCMDWK1Bukf",
  "key8": "5sCc9Qfq78yLx519KaPsu8zKiYgnqevbKnCTZeTJ1TouvwG4Y2s7cDPC3fyiFnszJ7Dw3BWkvauJ7Grorr2ch8dE",
  "key9": "5tX7pebfHSfWtub2Fciss55YTN3KzTZuRttrwew8PEHzsz7Mug94ESVRAKcQuth4rf96iKBnbJxkuRZnjFxjR6fM",
  "key10": "EFBrBfKVZksbgapdXkiRTheoXcLC3qgLK9QkA8aVR7gKgycgnHZuGf7mpy4sf3pahTrARNMx1uSWD5H2kFH1cdx",
  "key11": "2oNBNwRQ2ozmK64LGEnoNDmD7Jd6LENtQGRjEXbFUD6XB32dpiYcVozzcyg2m6kLZ2G3BNyDhrQkunC7erfzpwTN",
  "key12": "56AwwDmsZerGxn2jpbpdcoQeVubLDbd95EZX7zRyK4iLKhA7Nv21D1PRQTKkm1szpiiG5ypbcsodLZv1RChqGiFB",
  "key13": "XBpLco9xKjEG5Pv4fmBjJGs1zBvqbNG46apYzTXouSA27DvWFrmTvZS2AXxhsLxrZDYUxjRSz8N3VqT1vmCXD5M",
  "key14": "5NoLud7jWzKDStQvnYBd4tdYKDzPYqEZecZTTuv3a5GwTGKrLCtg8PrVoAjhLBLSw8B7eacTgvZvL8X2g8xgjE3y",
  "key15": "8YJyqsYfA7CQRcK4CjTTkqGUn4xMrc2TNowBXevzgnxaeWERya6RpX1Jx9r5YPN16dR2Z6Kdukm4FRBLfqNrgMU",
  "key16": "2JgBTMPatKEF5sRK1Jksohkm5RUViVrpmjMfLKDYpCRZXvxWg6z6wnJvbkxUaaoyjNCeUf1pEXpgXo7Et1wTeCeH",
  "key17": "5URC3PXhP8ViZXiYCdJgtdJrKqvj8tqXxSbNvffzVZjt9DtAiZyJW4Jgfqugj39GiuqYWUP9LzwRLJxmG8DCGAcE",
  "key18": "39ns5xjR72wVYSVM97o8ZqTTJvmg3DNLdbLZTqxanZ6AKW6ighJeewKLHfT1M5HKidFZqbzAdt1MdGVT3sXxZ2nr",
  "key19": "s9Vig4kdG8HyZRH8f2gqSsbX2YHe9a96GLyvdvkGKByQwKgt4hpipBbhNXubiYPZXguGSFXEwXSQ7khzhN6vF27",
  "key20": "5dCnt9hDzQcgGTNsHLnXSTGusy7bKP7u8o8hcscZ8SVYMye7EDg8oerm5Pmy9Zvjys6fksG4nL3hziVfnB9tg7hR",
  "key21": "2AhpQsjZPoYZ9mcr9wLFQYAAywApNQMf3AtBi8ampBi9jiuG67SsoA92b7WEzLkGWq3NhJt2pPmacsy4h6Vqbos8",
  "key22": "5JB7gdSZAcxKu1QPh7rVPF1VzwRKJcpAS3K2rFtipndR9sZLxG1bPakRgiBfgY3N2EhcDV8fAGBth6SW42eiupsx",
  "key23": "XnL1obbTkQapyEsfNE2ErJcBEk62D4wRy6StnNNZDHAvfn2UkVtcSzzEAiZtmuD2szKoCbT2Fw2wZy63Nmgjsgu",
  "key24": "5MM84wTzB1wASv1r3QJpjQ5sCxgxUcP2deuEKFiizGEPoV5SXUFT4cX2BvSVVD1Pr9JWNRhw25zH7dcem1kQhW6h",
  "key25": "vPphhmtWxc57dwfGZHcZbPkVxBaXQVq3Mmp4fr3A1HCwoxUtKKP4RnDaqQsuMzN6bYw5jRhmnxXNDZw1aP1pDSP",
  "key26": "MLEnrUckqjgUnFYfWgnLsgYJvtnEvYEcso87owA79ZDP532wwcoStNXMZ39FQbA5t8EniQvkPebXK2T3qEakPzb"
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
