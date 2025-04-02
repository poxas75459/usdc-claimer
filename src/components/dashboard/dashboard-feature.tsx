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
    "64ckCdUQbXHsTTDm7tVnkKtWfq5xy99iLPpUQw9DvHYzrGYCNnxLuJZexfEGZbspcUefDtsAuSQdT8KNBbM5VuTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hvSLrURKuB3GsabgR1DCEaJqeg5Kvk6GHs8xtJt9RKXLTKSRqWSz7wFgryhaBfQoQTvZmjRsd7MYv3M3YxMZ3n5",
  "key1": "33SX3RpR6pwPgQFoYqxwPFsjnzpCVeh3MUhLtkrL7DZdApka1s8tV3CcJb74B1LeqCCUeRTtburDfvP2fLUcFZ4S",
  "key2": "5HRWFgzAYLobWADsxnZDp3pJCZqb6bXCDQhPxGoc5XDR4Pkdw2N3NocR6KhHa8TTZf8CxRKDso69e161bm51uh6c",
  "key3": "4BvWDFPYCXCUqUx4be8frnDxbudakC8vAk39fFM3QqHUyyXtonbT4WW2Hp2dPVvp3kokiMq3DjLfrof9TN5v7DaW",
  "key4": "4s1HJkQgZtUefHvrAJv7brKofCeFiNi8hGBzMvoTH53jy3QxQwF3tKaAmasVhzJuRvPjuaefVa4FKFwVYDA7c1RB",
  "key5": "4aF5Hj5At8Q3QqCDeSfaHjk47iMh7adaGCTqyRGDY9Rm3367zkHG5tRNcrDkSuZ2NrEPAkxbtZobchPcVj2nmAGf",
  "key6": "4vdT6XgZw5DDAoGS15hXiBA1WmS5qZBBHuu5JEFshqvNRCASFBow1ieuWz5tKnbLMn8GmD9gkbqLFXco4qs6mXqr",
  "key7": "4RyyRvidHTXeb9bHB1uGheTRFgUBb7tjDbYFYENaFTn5tWxFfeyMyvvAbqZdCX7kJyzsoz8dhfugTKoRh9EHQCcw",
  "key8": "3MtkPKtVA3Cu37AQEf3JKEyzyjhZ4iZW2pPqrE9YxZuCux9msQMLDAEvRASdNiCRJs5XkzopRiNt2w1Ezw8Fg6PN",
  "key9": "5WbKXTTQGLbRZ4EKsAjUApW6m46Dmx9PTHfRrUus5rV5P1uAxWxyYdKRPaMJMT4nyXs54VWSvXBvBqjWm9j59NaY",
  "key10": "5g8i9rP5F35bUYNv15LGUoxEftkFFXrhvBGhnNj8TqYHzChPDqSGJEyxSUFioghbUcZGiqucqoe8KyRx66hW7mCK",
  "key11": "ASRRkHuYqovrWQVVynYV9k4vP7XTiLyo7jfbjB1i6QAo2Lg2pPGvyPvz8djotbutKjNaBgNxsAVw1XJCNiM8DLG",
  "key12": "4xaYMsF6SHYs4w2XrDUDKNwiyW6StnVv76r5BTZTDUHt6RPefcVTYTAc73Rs6nvEWYTk7rF1kzUB1WgdhN88JoFC",
  "key13": "4MmJSZmRqnapwXq1VWCPHKULNYKyxgTxNoopmbdhrfvic5aojSE7CFAbzKHAhHQq8PNdDEebHi6mNCJdG32K1Asd",
  "key14": "48aMWdZk7YKFLpg9H1n4kDZfpKyT62MkGAwavNeWFz5WGzhgQ4q3JVPakHpQzzKaXrJCSmGu1gCLxWuWrkd3ATtb",
  "key15": "4CGhYPCUkiUw6pHuPuqCpdAfJQUBJbQo3hR2F5r5FXWvJ75Ej4nYCVQhC9BPF2Yd62e7qu2XYb8W38rbnzhiefXJ",
  "key16": "3j4FB3SvzU9z41yj9mWomMVJd6fEVJQwwFS6fRS2UnTn4u2c7Ckubn3P4hB2CC5f6RfyWiujcL9284thGXNNp43v",
  "key17": "RXoAeiRzt3wFHM2wAn8uirhhnKLNtL34PjgAUcdpNGUa8ma2mBweVvRHKvYUkBB46WAZdEcgVs6gjLHyWkE6KVv",
  "key18": "4xwwr2js1tC2W2SaMSDjgdoMAfPvKPYWEj6wg6ekSgXqrQXx6pqifuHRzFXVoyyrtxypS5rbYaFE4EcJDgjuftDH",
  "key19": "3Ej696fpFZx3b5VchewaKBkTQ8GGmNozc9bS2h1ENcdoKYNqVhEAzHELUuzNQ24EzdhZ49M9ENdXA98JTQCFuUN2",
  "key20": "jnQrsT4Rvyu5qR8ZrT4sNxvhgU1YhxtQSJRsbDFrHBmdSP1FMEu9b2RekZxTYnEtt1iWPrQVHrzGVEhjQGPickR",
  "key21": "2GdLFRz7KRKi7V8qDu4xN6APmfSrS3H6hhfdPVqCLQQJtgG1hgrh14M6K4Fds9Equ3CZngJD3mRjnuAPc2UwrarA",
  "key22": "37qKUNeoaCSAVAma9ps5DnNt3UyNKaQj9EMBHFup74t6rNTnPYAbt9vv2aYianBiEDuP3Kx4XT8vJpxo2gS3jRko",
  "key23": "5LdfoWEGHq74Z1Gt62QL6icgHtPJmgD5MT5fPJg8ddZCo3xte219vhs6iwLursMei4spSJZPJDecCE1cVE9BXhqH",
  "key24": "3pMF2rr2A9KsAcVmbYiMjuPvDq95RFr5hBRTc2dxa1toQrhbPhi7s36At23pnP2nZf7tKoHZs4ZbsqtAaASXWRDH",
  "key25": "4qCnaivETtgTz21qCRWyAw8P9U7HjGHntGfQi7bPHmV1eHjWLycWzC3J9HoXwkF19qC3PGKiQLTrh9vy23HgCduE",
  "key26": "5xrisoQW7cAp2GYNuiH3JV7Ju8C2hXQ9bcZUtCZKAMuU8wzt4kyZ5XRT4S3WaAoXkLv7XfCXFUzcaQDBpG3jsaPa",
  "key27": "378qXUR6T7KA6Sr9M6n2pS693ZigjKosygkiaYEF47seu4CfUUrTanQjGF4LWAA5Mpub6EptbfmCSo6bXwu1nTCj",
  "key28": "4rtjW8xQv8Kdw2c28PLyfRsGv8t9CnKkSWHtSMfs5r6BeQiZsWJH8Um6NcWHjiFnTRDvquFJ4mBvEb4R2Qw2m3xg",
  "key29": "3LfWEN81KhBnqGVz36qthYts9KpjwLLyUrbM2dwYYKCyexgFC388aYucaA2K8G8tbxyKeDqMQ4YTDGUF3PDx1WBt",
  "key30": "3dfmxUVeJnJWCNiuKVxvUgvsr89c7rUrQUeGtbEKKk7UJET3YEJ9VD5CFBybSetfjnTjNBVYNqyVKYN4ECXSrhAq"
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
