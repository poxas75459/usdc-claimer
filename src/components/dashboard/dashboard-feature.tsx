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
    "5ZPyeQnYx3FZxJZo4G9wZq9o2tsUWnJFWQWHJYuMmUJXQaLr8DzMLQ3i9X9bLQuAR8QSsv7a6d9pc5twmFmYV4CX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iGwZBZasLfZL5Vgb88bSBkphmpBqbhG9UxFC2hisFRUma2K3eWkxkgR3eHY1N26jDv32b93J7K2hcgomHSpZYsj",
  "key1": "xspNZkLPqfAuHKoqGQ2zs9AcjfVw7N3Dc8gX1yrG4y3Pw5X1FTzJ9noXAsJbQR3siYDkvFtXVCQEbEASvZNKtfE",
  "key2": "EW9Bac6ytVaeJQU97F2TcrxusfjkdnNZHBmvArDH6LLyY6fBdupqCf6E2dB3ScYzyjYNCbSnTdQWYJtkeJcxDh4",
  "key3": "4baK98ao1BVNNfWBbgnxBEKWrtmhWZzbSTpkSCZrgGBJx6Fhu6rKixrQx5ZkRFcVRZiFEfU3Bzx4WrxSNnRvz8NZ",
  "key4": "r11Vc6Feh74roUXg7juoG2vr2G282UBwn73wjoLV438Btt98zii1H4EjXG6D1eCXorNJB8FRsTgqY4Uvd3RnWNM",
  "key5": "3K5FvEiM3ZUXkgrDnw9fRTygKhUmuVjDQa1xTUMK9z1CBsKmiBpxkWYYFNU4ASTCWzEiX8jiQhS1jU7tRNdJD2i5",
  "key6": "29AN2nUhatUmNyfgivgkAeDg9UgAkR2dSwTuwStLnhocLhX6GwLCGUPWFkmfwXozPYFJm7XfCzifRdQeFMUkjtFK",
  "key7": "4mbgQnsbpfTPC7ZSpnu4SjqUJXbCC3PCDXpow95Vz2To4mT6jz3aDCzBV5b233tq8jGTcXRR4ykAvvaCfAm1WMGj",
  "key8": "27XBno4uN7SbjU9X5VzzD34ioL3gf1BiiZXTEsbj4DLqbiiTMXtcpZP1PgscCwMb258R9DXbAxV4zRBaSHQzfdCm",
  "key9": "7W1iUvQF8hf6pygxYsYhTW2nEVQk3wSUWJNjFUCbaNVRodVSJtjJGFrD1S6SwEaHC3V2oRa238XbRWzSpuZmNMZ",
  "key10": "5xMX6svZ4xQGta9NoBX9a2TxGu37q3vaA99xiQZeZ72YEDG6XfBJtvifEhRZKq3VHdU7xfmUQt5ThDUcTxJZxLcL",
  "key11": "dZ59vbez7gEME7CV3dbvyiHZNjsBtuE9fD4ByVJxyiSVk1MA2qTVoBa6nfsiFUZ2b6Nz36obVSzozQx3HrwK8GP",
  "key12": "37Xt2BiuoAxVhHtLGdFdz4isRk5nJ2iTUTKMSRTfXwFnKT1LVrb6BzbQCSt4EMujtin3PU127fAWqAdFuPeX6XgK",
  "key13": "4P68ssjCyGv3vB4rzbhzZzEPtMtaxpHLHptzdWJHVU4MiCyGCJo45NJtmbKK1heP8cmdjKNMqTRXi43QAsoCeN8d",
  "key14": "5tKBYcb54hWX95rwYqJRSEKL416V19mur8DAwMNGyJFqdr9mGDJM9ta8ze6hSpe1K8QgK6oDrgpzWeNPDfNNUqva",
  "key15": "2YQfafNp7uoD82JqfxC7PoM9bcQGCAEfb67rLcCNKhnwRvJYCjVZp9AhugiwHKej6CMuU8wyp6BXyRnXifo7vDzT",
  "key16": "4jSjwFkepm7fJQfBNdtFddyEv7w1iQPugEJxwBX6HEobt3wKJt3RDR5tbtX4Ws7rRso8Bf5dfY3ZdAgA1PW4dwu3",
  "key17": "4swjSf6Kd5hQ76e1eNWXsoV1A5iGVVT47FwK87nUpLhBkR1g6fD4NFXTg3V87LjsbNj6wbMbEkEsGmiqXstNLy5C",
  "key18": "ou5uZdGaMFVk1FKpAG2fEvKPJrHx67ojr36d1izUC6dtzyJDdnGL5XekrhohozdzSLBjm8ZxevgAGAu6zaUob93",
  "key19": "2zKWsad3PQ6jwmfPmwRa1sh6sLUcBxioNmZaLZ29uyL6YQPvKaLj4M6drvpDne7Y6g4TaPRUq3My7uEFjpN3gj6G",
  "key20": "4RjiqBkrWvLnoWTViy4deHF4nQosnKxJ6u9qJyrKUgmHKvM1SYJpJ8rJm3KbW2aHys5eKmCpKxpVhziuYLskCPpB",
  "key21": "25N9HX2cG4uVPV4V8GpSdWjVZAi9fZJrXeostL9UVYr7eopfNo5DnCqQad2c9BnCy4ahNd2nxiRmCcdaz7dh4gBa",
  "key22": "3eNDHjjrR88MspRBHcqtAyEh79j3PktLkRpbTSJ2SriuWLVnUAbcysg8E3Tu6EQ6dgWTq4iVekkkjqdaL5i6Ng6E",
  "key23": "3mW7jidK1RT4DEYDEE2Fx4YCeiWJp9HqijMMv6QZDHyJ9MRK7k7A6Caqpmoro9MqVTMTG4WeVJk9EWAr6y9dRBSM",
  "key24": "sXakZq5zisH9oZoAMCiowVB25ouLMVcaY9tjDtH7Pzy1GCPXpViNqD3Tet7nugA1V2fdkyYS2bqUUmGacqavt9Y",
  "key25": "66hrwnKcHz6ngYcyMUwczM21e6p7sT75F9RPnaYRgtKvgfzJAv3CSXUf78awGN5pqCTB6CPF5Ycfj3ztygFKccXh"
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
