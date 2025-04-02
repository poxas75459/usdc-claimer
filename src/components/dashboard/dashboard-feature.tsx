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
    "5Bzp5EtjRL3i25wShsoakyan8FEbwNFbSZiciaoZP4SSHT1zygcQLTYXtPcXE8USCSykyKiR6YQr1QTzvq2GrsJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LBy7ZcQNkTgPAHCuguiPmS5XGb5ggafRnD9qBuzMXhFe3yRbGrYEZAVFdqnXBMnRdwsu4c7LZihMtFDNhy1ZVkp",
  "key1": "4QmgN3c4GhNYN1CSoubWRwNGECuwWvG3R1WBz5G9uVKadhKRq5qJMeMBVazxibBSg9T759G7xUmTk56i5kNTvr5F",
  "key2": "5Phw5PU8FK7HeSgjuLNExvPYuHDQ95hC2ijBkkvxrHwm1YQdcaJUEvpyBjxiqoExBmuzowYtPdSyWFrovm3oSMWp",
  "key3": "3ruUZ5uzNqWhSwnbkDXZAAv3fVwGg3kdrhrqbXFHhXMZChPbPdJprFzfiGdoX5NeKwZs5ZmWEdY5VYMAvkZ2G1w6",
  "key4": "3g7sit6XZkPkv59mJuhLxfZQwQFp222PiCgUALG6NZdsNyPaBwRC3LV8sAy6TFXAvUqzPf64oxvqiPC7YdQqBQ6S",
  "key5": "bPpkn7Uot3uDyUo8xApzFE31e8RfvySiu5Z7VdDC1o4rfPXWuDCCHn22YFmP9X4z355Rzju8LzQE2saYcoFUuvk",
  "key6": "my7eihYRjgb73HFPh2zjNw62ZqfYgZ7eMmr1mjxKHkyZmG3ehpDz3ZKnCxNhYjaednb1VygDjMmYAZWFqKiZrFB",
  "key7": "n8JguMkS6svLwLd1iqaWavhEivDTM4vwoqab1yyAoXb3qGeJSgK1S9p2kJnVwG6r5R1YsPanqJss5cX9A4YAfRH",
  "key8": "WHUcjWKxn5jGUTaSGLZP5BavA7yTMJQw2PSxJ1CKn9tJmrjr1Lf4ienPoVe4RuEXWizBrWX6mSCfUfEjq76nmCa",
  "key9": "5SR15XXxbv86wSAfaRrmHodkpjBMmaQJvugCZPufqE4Dn6FpJxFQdyTMDzQVVfE7SZKdGjLawSzBgKyXGbmM5Yy3",
  "key10": "5aS3kXooGucBnkbW8hKcmBn9QJBAW1TukgPLYJfa9kN3EGVKaoRWYFFtB2oHYcnDU4UFkMYsTaTdHjMoKEks46WG",
  "key11": "5YNhRmppgfjkXNn7TS8h3J9WkkYgoDSi3a8qYhsUgsdpaZSt7NW8xPttLj4Fz8H7pbJNwrAnKJikK1itksVWKAJN",
  "key12": "2vABVUCou2569XgCxPKfLvrm1APR8fRd5GvRwJQSi1KZPJ8yjGv5oFXaM7wGLwaPD1saNDt8e7Rwexd4Y3LUeLKh",
  "key13": "2eZXdK8XMngpEbLNPb2HEdFze2kJcwSLqxhZjMPK2G8FAnBhZ23xEbggFb2VANcqHDQJfyciMhWDLfknsLtS2sMA",
  "key14": "usC9nDSF3J67vLqRDJKkZcxWVVbUy1qUjQhm9U7hp5YfQCq7oQZz56xqagEbpRtAX4JoutjXh94wV4fjoTKKMjc",
  "key15": "jZvEhdEXfzqpddaedRCFPaEaN2xt9rPbsezXyEm8nEZFi89rf2DC9D9BtivYUnZ1uVTGCJNBZXfDu5dM9KeAAnE",
  "key16": "56GirNYxP34dRcrppDB9BZdTqCLWZXLRAVZdsyRqnddXTmPSuSxtJaujsfndRoRBpasTSBbm4Td4HdXLpS4SbkV3",
  "key17": "4LB9qwzWpn47rGYNvZELLV3fpQE5KJx4v1R9scpp9mcnGcR3Bnyq53H43GvrxPNdyT53ppj6V9dAs3Bfr5W2sLmz",
  "key18": "5BFMHH2HADZyXSsVMSTvhmsr2QEzPzBb2iEdYeKGGkiF5eLEXTajebEm2n9dHbg7jtTyxJWWwiKNbZYxVcnBHCSu",
  "key19": "5M59rivGhwYtxtYDmigXat85dTF8B2EDVQtd58YruQL9QRGTbHiiPLxa6fhFHU1MtqkYXzMhf89cH14mnd4hhnnn",
  "key20": "4JVxjmfv8N7YpgiX94DpwfXef4A1iFrnn9TJd3fe9CGbSvt66JMnXmV1RYvuifnUxo7tLF8kb586bvG6XBhNawuZ",
  "key21": "5AucXeh6nppXbvyATHdfpRDsCJ4JyCn2Ako2XBtDVymuVAaiTDAsN4bsMeWJm4bTBn4m3CZjzd2txUgdB3Z4MGGK",
  "key22": "zRjqcyYQXrq3vDn2tmK9CZKcRPTEwd8CFjmzMfqHm2PbekjztDLguTENKZE76BZj4tZXnmFuCpPkLJZymxrcwJb",
  "key23": "5z1QkFNyqfP5Q2tVVDMPPdU9SqhK7fPm1hHVBQyqfgPaQT8FomoGWuaTQwYKyzHvj53XVEzjL2xPZZXbw1vcYzmM",
  "key24": "5TWi7uknU3z13pwvmW7xdW94ekaV39m6WzHhVHgRmS95DSXx1c4pDHKg4xcgUZT3hBzk4PYdmc5ftHnaYo3eSkEX",
  "key25": "5fF2evDAjrxKoHKauaMW7Kejmgnday75QMitMZKE7QJmfFM7qke9x39fLFr8bHoihULpg32qdTgBfncVi3cfsPHL",
  "key26": "2dxZXs5YtYQU6myfDw5uonGQvQ5xVZwzynd6gGjwLynTbJRc13amyytko8HXodv1cL3a5yAv4bYcNzwWBpXxyaGf",
  "key27": "3ovVMo8FeoMGVyk3Dn8tAAwv1qhKbcMk8anut9HfadY7SGoDcphtMZfyifR1xNMHJDwWpCVYFFWorAwfEwST5E7x",
  "key28": "2pZTQbCwA9usU4KbYq6i6QFfjKvpVm4tDT4F4k8u8vzvJUwR3fFkvDy2p3DPhpa1GzLJCEEjsNW7T5xNhdKx3Cnk",
  "key29": "5x2AGERZCjh11GwLgsDpzkJv3YtM45BWfqzwChGvr1UMvQQWCfP4bMPjDvdhkmFun8EtGZ9ZzMnxBwvinEAtGomp",
  "key30": "29acDEJfTjK5vcodDbrnakLjWKVHH5ETG48uvYsemV8tngXxoAgX19mk19rRifY5WhuoazMB2SAPLDwVTJBSBk7P"
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
