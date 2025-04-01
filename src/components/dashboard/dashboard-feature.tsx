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
    "7x8UKH4CYEUszm8JukZJ9ACeB2ZnqTpFKKWvppTyTNANxt2dpeEpLSyfzr8WvceBcG8dNnp7DPfA9qshCaNoMnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EevorWSJAa1UGKBV6wrPJ7WPtqjkTZvS9Jpvnr5fi1Z1FRJt5rdSEdaB2aPe8QQDqX3MMQSgGwG7iNJsDWk2qiu",
  "key1": "3mWRJDtv6aM6Wv4T1qHvE3mYaGpUcGJzHTJUt6wMuNsjgmUVDzq473KyoVjTm4SpbnULJucTSjJCVqostf4cSqbb",
  "key2": "3ge9SJazLR465mp4Pf9dvp8JozbFQjvQAqYroxK5wShKo5bLvYNqX9SYwqa5d6bcs8c41Qfj1hnPrpw3XNLKFKpc",
  "key3": "2x6dJopptHbCh9A9p5noTmqNKBm1i7xxHqCMPWCNojbDiqj939eoibV2b7Tqi48VFg8MBSHACzE987qKJqc9hjse",
  "key4": "3sGtNDDy5Cu5GXoiqQ5UMepFKrXM4WaJZzpLjhqEuCkXs2JARzLDgVQJJmSKRKjVKGpXajLbCDAEfo8tgoG4WNSK",
  "key5": "3Vt3b7E6nLyKNDAw5aqpAwUDPTMv5wesDnygGLN4o6xMxvckHHJEQHArMsfxpNh2YjA6F15vYHBaQy2y7mbGoK12",
  "key6": "KEo9TVq1X7PoneaHxyqyHMWe2WpQbLfD6E4rGWNxCv4f47jnqMiBqfM12Jem4XhkzE7a9hwxLkpuDVpWcSPSZBk",
  "key7": "2sG6CGmWJsmKjBXrBkgEeRnXRNNZ9uwNTV28eeFd2fDenk5GfPB6xqMu2wTuy8CAWVhCButwrw7zPx8XBzcMAMiL",
  "key8": "3GrkEczX7zLphzLfvEA9uJWfsr25AmwhwM2q7RtgHj2wMCbeXDsW2GaaZnT8kNdBWThtWfq8K34Esux7h3LSQwBU",
  "key9": "6cx35hStDwgpz9SAN8o4vjpLBehMoSUAeHEczyE2cLmRHakZ2u2zsQvHcUgR5h1mzQDpvviRSgxAZbaXumtXwnD",
  "key10": "3T3ZR1BaWEZW23t69TmiTyFXcmd7Qaxq8YnaEx1rBY6xYWvz6sJTFEikSHsugnrrGGDCnYTe77Pp1P6UPkrMC8S3",
  "key11": "FW2z3JZStica9SHR6iCWsALHwgAsodKyjif88UMdAUdCAqS6FJK4rES4vqtwXdRN4u71wagNf6x2MW8n2aongvy",
  "key12": "qYRzqvPPHD2MQiizsvbkcJVPFtPuMjMeZFKtkaUHnoxQjKyn3KZSpen3Sgirj6oasdrXWTkFH62KMdXJwKK9t8J",
  "key13": "3VPL6UfXmdWozYpgW3eF6ooJ4XXWVQNdXcH7neCBXBcVr6R5oA7SA84NxhG6KxLWeV2jNMAj3JTZQ8f6DoRPkrYP",
  "key14": "54SeL8n5HruppHy6P9aDKuEG7kryayswTkBPZK6iGw42LxPqkqZJUDjtVWVxp9GF6pjLRrdvxX2icQxPXrbk4Nhe",
  "key15": "4R11wDgipW2tBJnjScX6e7uyj27qzoAAm3ZKoqXGabq8Q3DbrHDWkBZtirPWv7mAths6gMfAzsxogU8XdupQ1h9Z",
  "key16": "LmgXRDgmVW6x56SUZ3qmRuqmkhafUqDXqm6a2sXsudLbtfBdu9XTr6hgt4QcPisw6HmyCzb1oyB1wJQ1uzrpCg5",
  "key17": "svC37qJ4Fi6hT6VMjFvN1cSaCp9ygYMq3Z5c7bgFNvJXcUb6rRnuJVE2aMXXxoMidgkbEv5FAzq6fnC4RfFcKTr",
  "key18": "2CUEQH9u4ARmE1QswoUTg2JUysmBHLeHEGaeBcu7tMnvkxy9SrpTmp8NLPoK4cHtsqLcjkdWKPk8duo2hxwqN4Da",
  "key19": "44sU9TzWH3KuNUd7c3QsNmhtPXamruU7rAJ86Zpa4QpRpUDamyZ3XZPFtyU3oX5ZPjkjeEiRDP8yuSVHgByXdS6k",
  "key20": "63oSX3dyyG5Jqo3KsFhMuML4pz9owt5v2So76WeNd15FBc5bJdkWQnG6JSY8Q58yhM49M7mvLYCyZEQMu7t1ZcXZ",
  "key21": "41qkuN9x3hY41TY5fYxCPcdZ43dQHPnSUK7SJrYPP2wnpScsf6gNoW22aTXee39E36THPhGGbJ7uDXj5p3VhB5jZ",
  "key22": "4s4minb4eFhNUcuUkKrH3Mz6jrwsqbVMzdQQdWQcp4XJJiBMBDfzWy658P6baTsW8ywBvXjcU5GDu4k9aNgCC6J1",
  "key23": "4HvKNdx2bc4vR3Wdu1WtLwgnTGCAQVcZZF8z8NPfnqGyFtHLaZQgwpjydGHbweV8Jp9PXLMBsP2VbCfdnxPQrbbT",
  "key24": "TKCbUzF2CRtsP7vFh9aqNKmTWs7jjHmV7NqB5KpL2CXoDGDpwigz56yeJDwEuiEKF7qHbnChc1GAyaF4Fe1i8tw",
  "key25": "4eCsn92H16Gcymdq6p1LMwAEuRYRugbw1DSqJg7LkHPeLULKPvYwGmqqbed4xKKzFD6xGdK1ctd4mmoRe3b6vWXE",
  "key26": "2DBdoQJuuBq81WzcnUw9UFbPD66d1Dc1Tj62RnKZdeJWx3LwSv3DBaMm2irWZ91WEWWnpywK7RzuPJxuQUN9w13N",
  "key27": "4ojR61UyDBVq3qK9rkmD3rUyGt4tMAPeu5D8QyGpPiFcXVd9Tc44B1qLN97PqxVN4aNdXvjHD98Eps3P96BzuVEk",
  "key28": "36dWRBvL5W9H2WDcmmT6R6n577DBXvXQQHh9S2EoagKmsN1KSgmzdAKAFtcJmaAZGENFT1vttkNneXfvFZddm7e5",
  "key29": "3izTYenb8Fc5Jdd3FRpjen7Y2ATqZgQ7E1HCQcXxN6Mpi2rVEkTYAhfz3Sgv4dd8KUrgMytonBxhWxudfGMGQvhv"
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
