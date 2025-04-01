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
    "wonttX4qRQ6ndxBRhYD9SxKX4xWJYdzVzJXbQ4wEkbvW4MG4y4sxFjQfcthKNJcLRZBddrB9UKZfK4DGjLDP4AS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39doRy51NhHrEXT14EhzYETTtEkjwvXPKpo1wgxrTqkSHqwDvH3RFn9mFzPzv5fA7suATa7twXmC3o5nh4waKLCj",
  "key1": "5RD5qH4vCj6sHwfX9utLafrs4981RaMRsjvCwkvafptCe24d43BTJf7YyhobGQFpazAPfwq7fMgBbRM8twzaFGeb",
  "key2": "44j9RFBCBSddQmASpbdyQa5f4xefz5J5vr6V1ttKjBr7baMFWMSJcYKp4p8yn1eEHNWoKuWmqpjXi7CZqpLu2QTK",
  "key3": "3BuBigG4x3QyUkEzkuL6CbgfcEUrY2dKWtHnNZRJzJf7kTTXXCXRmTHHQ5U2xpP2J8vh3nuTX297PS539sgaGePF",
  "key4": "7sQT5BXxnbZZYYF8QQcLMNFrd5zzoyT9RqBgTdYYuV4BTDYXg6HWyJBT71FiZ6PLN8BjYGo51ZRZyseL7QfqKAo",
  "key5": "4ZjCS9Hnt67xyjJQATbxbQcadp3dj8tyNRWYtGXKXpYVw7MC77zyhVHN7PzBusQLCjjP4Fqp2ogtH27pEwM7vwGs",
  "key6": "2LG17V4ptWKCPabykjb6Yoc8KWoGN9ArVoVHn26NMCBhu6gMbzUrN7xuRfaarWrGcUPSD6WA7LsryzkScHcLMqhm",
  "key7": "5im7wN181uWW75sSpZ4J31My65v63TVXaPhQJ3tops7a194H66bKnWtzoLfh3DCEL8bhLLSAyuMPY61dx98NQk5r",
  "key8": "35tods39qNKtrHknqtGnXR8T3xHrNjYQQuPAaHy7k4Q8oGHuWQKXicdwvwuux8X2i3m8oN5daXGnHPYtmmiEzn5s",
  "key9": "3VCotojG7rupj19TwuSZsTqSCfCw3n3gbb4JfHUdoktzVyDNr6N44RUAViCqrr7TxWHLr89ydyd52fd1rC7PMKwb",
  "key10": "VA9eKDvmVeM3ssUSzJusBVi9DqFucVD3duuPcoqquViLmVTT5BQwAcJz9bkHigjp9df8M2ZDAv8t2yuYgDNVusE",
  "key11": "61o2p4brpbR155aT1Dz16J15TffGJTkfWzhA3xn4tAF7T1hsgniKBM6wrvyMURb4E9rYTUupC6pXtX6SiR4uzLzG",
  "key12": "a4CJr4vjdCSK1Bm5oD4uQhs8dbvGPSfFvyjxzqbL2i1jBhXy6MZ6nKJr6kCDxiZ14TPDEW1UEnD3SWhrMzkU2DR",
  "key13": "3ypqre4aeVdibuA3qgUfPqcqMesSBcjBX1UGEvngUcBWtHp8VqyA9Nu3V7kE9VYvtscNLge7Mv1NdDwaPKXPXWfD",
  "key14": "54sPMYKmZXMM4666bz6F7RyiWWDEK6Z8maoo3Qrp8a6fd6evnXJt19ZR5rNYnqqaGnJ66Pt1pyY75nAjYqdKZpaM",
  "key15": "37HZywG7wJ6hAC8HUkyh9FyYHWrqXQZSWRW1qCbHEVLwYbqNGigJvwyPVYoAoGzEK7NHpMS7YdBHpRDfpmmHAUW5",
  "key16": "5Qi9GdyPENsn3pdQ79XHxTMWChJ8QMMSsSSzuWedViF53H9KbFUbu8dcWAFr81XAgShHrzB8KChcZoFsbz7RaKbE",
  "key17": "5iprcnXNc99w6RTh3Ezw5B9ihAMVGKMd99SZmAXeuP6GnXp5taJCnaAnVKMbaBufrYdWSZeNZskNxnpV8Ufys7wy",
  "key18": "5eSwi3PX52myXNrGwwzdsaMpZEFnKZZKxEvfds47jmWjgF8bAhAH3mUre5PfFk7FWfwFeggCwHQDfZj1b8T3yQJj",
  "key19": "5qXcfWTADxVVEMPZG1eGPCmBQxMGHjnKCR4RccV3bmyfGuWL2ATACjgVHYcxXn1MZTMSJBDCDxXNe5gQ6FSzV5Qi",
  "key20": "4hFgUJ2HAPqbzMGbePMpPuLsi8oXrNqVJd57MYfH3NneqNwhXThpDAKRyk6tfSMZzHncHJNxCUNZNJhcDyvF29TG",
  "key21": "3PV5oX6tNy8aXFHUo5YuHRf6GTXMHbvTwLbjU9rudJFYowTcYvzZUYSNTG4Ub1DrmSzjaCQyeZ6pmvuyoatRLbBR",
  "key22": "keC2sryh9vSUBdinRJ6WJdyoFZkcADd65h1GYLVFWLTr27HPoC5C8SPKYrg8yMiJrSsw7753fiHorVR8aioo8DQ",
  "key23": "3hhNeEaiqwxqKwY8QJw3VjMHKDFesBtw8rZJmYBj7bQMhzVeviEPpimLKCAayonRuMoukCmiBzEeKofVxxQLLjbN",
  "key24": "3VprEvaHhjAN9ZSuE1jmVBFGcyRbCM6SHaecka8fkVMFc1CD5axZiz91s7nCsBkf2a7XvtL7ZK4EahRqDG6FnBLe",
  "key25": "3HbeKKziHMGLh43csMVk99VBHP6nzBSpV9r9mjzBbZfmxvS5vqwXccuWxtShbLQH7uQ9WXDZ4qmj2SJfJdPGLizm",
  "key26": "4WN9UxmXH6HZxMLS2eMExsi9SwQamYYmngew5Ur7i6vd8Xh8ikytLEaWEtNqiGsoZFkBXYuwQtgd8yd5KAk1wJmh",
  "key27": "49yR6tsD7oPpzRqhk12mbo4kK371Lsxe4wxDazNCECVTadbpqK3tCoi8PJXZeEkQdyciVU8mkHydd8BewXa6PMn4"
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
