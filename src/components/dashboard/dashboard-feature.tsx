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
    "4EBZujhiSWqnWB7J7V1g8SDYq8nZeZj96g6NQraR8ipCZQWc9xKeP6XBeZdDanKLesM2xe5YLceEM3XkZtsrJvLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZybn65YW8c21gmUSKtgEsk192h5FqSzPhgmWqFSuofYEVnsXvy1TPpDdBsFJftCoNUgoF4NhoHh3nKWxjPsq6G",
  "key1": "5NGfrD8JCNbBshXS8uTa4qrbxtZrzoqe8fyptatoAtVzTeCqeByGZQmp49m4362P8bForPn4PN2aedtTEzegz2tJ",
  "key2": "rU4475z3pA8ePQD8Nty2Wo4nAgpaXtLpsbdYhLbS5pM3HpAq534JkTDghrEXRVnhB21crCHHGnzd51XpfkDN2hS",
  "key3": "2AuGoNPodtTkPQ48Nyvssd7NbQ2x23Xhb1nSYU7ve8k81KovpMd13jS2aoMp5q4Bx7UcrULUv5H78RDgGPyLoTX",
  "key4": "41nneZLMc8SUHVQUWMEqtna6vDjkNZZ81yrWFrmcd1owr8vhPUMmRTykx18KFb2zgmUAw1tPe4kFu6CyTyEmNAkB",
  "key5": "LkZNBcsW3fCAEyCDSQc5WHmPMKV8yA4w8xCPYaDMbcMZpoSdnj3CV9CdZk1MwBawJDFv5tNXPDRdVWtHVy7hfdc",
  "key6": "MLseDPc1YcZKTQzH51xPUHqVjPAcnfHWG9ZtpjUedC5T31mMhwctJAGVzA1KtmZPbNcxfern2F4Fm3KCS53RTku",
  "key7": "2XoP1X4eGVkLdhA5foB8WuAH7RqK1Fx3z2CdbdWAXRA59bkHAJgwHhcQJerBxKRgnXUB4pgqbK2BU2Adx9Znk619",
  "key8": "EXYgPRHiB718yvhoxbqC92zW9KGnV5WVqrVcT6QL7JqwW8RgyUVMWTD63M4Xf3csR6txixdWVRxaKwP2knBUe7m",
  "key9": "251272QnYKG7i21RpCmjr9uiAgUfn647v49rCkrQvor2Y3B5JihwytUcvfTfkAhNxok63fpCxLGaLbo7Nz7dryuF",
  "key10": "64opfab4JghG9L5o3WetnB3ePNy3eYLpbqwMU5Z4bNVGAA5hv9PT8GkW1abC4X3k8ECiBLJfuK8LnW2ZH5kpNX7j",
  "key11": "4MXN2tNZS7SfaoLqw86knSy3h8xdUQaobCHwcEpN3E4WeebHA1nKusg89DQqDmiVZxd6Nr9jYQiBB8fUm4pBbvg2",
  "key12": "2PNrydmYsbsNpP2hrQDu1jSXYMXo3V7syJ2Wn9DUaEQkS1UsRfDV5eWEFQap5a89ainq8bzbs8D8i44ZmA97wwx6",
  "key13": "5rSjAuxUfXbm7TrT4Vv996sjQpFKJQxT98Wkqw8KSXMuRVReLtbVj1s6J5UXwgfysFFNXZWCzC9snB8EtpnqCYJv",
  "key14": "5Yzjub7DFh4dCr6MkwManhLjPABY5qt7Hddj1EgmMdzX7Ne5bCjy7uZJodxpojvPXQJEqDWQs9YGdthmpAxKY7in",
  "key15": "5mzgCKVyj2RfKYCtdQeiTqSHtBXkbrCaaxD1GzsiXFPsELD7ApD35s2WtVmYhoB3LM5USfY2Gqph2dEWcAFJQK6y",
  "key16": "xCFFozmfYTHdQTvXbHoTU1L2tVGtP8jjGKKQdPSEoXiKtRYaZneR6pKrkvGY6ygZiYAxvVfUJc65hLps1wjiJTN",
  "key17": "5ms3aTTveoXs6pi8P4nPuHUzaKETLLcvJCPTVag248Vc9GUcJbY9jTG7Drcq6ZATVdnAdFWGx1aci78rbGmE9n9r",
  "key18": "3UmM5A9YLruKm8vw6NypJWzeEAUBBqzyofZXuhHQFka3hBQuMg2qPdFbwETa936swJxMr8txWHU3i7ai49Y6D2iE",
  "key19": "3zn6cEpYfL2wkoxhHMEuPapa5jYwbipEwZtMcNCVm1eV8Ly4nV9VLaChoJhszQvqo5ZAa8JqbYhbD2JmQR1SftHT",
  "key20": "42EXe7BqnP2TWVW6uU1PJjjp8YWaS8xYUSP3E3ysu7xY5G9C5oZq95tBJTHdQkMBHDxupQd3YfstX8tZBLS59NbL",
  "key21": "KDgfkMv7idyuHA5KX71PZdJNrriNhnwJvFFvYZujzPzZ4KrqqdeYKFP2QgqbMwqTdGNteHQrWRdaE4phrDTPvBT",
  "key22": "2ZTjdMCoxz1LVV2VQUzkaP4CNtkRV6ZjSfcLUvjW9J2AjiudVC7hGb9CFsKefZ4N7gVKYNhwZ3jfhoou37wZ61jx",
  "key23": "271fJGRXUf65B3jxxYDZR8PndTM99WeQUhbC5ftZNoVQFe5EecyLsrCpJYDktrbcP4b5K5FZ2BiccGvN6EWt1sP7",
  "key24": "65N9xi4EmheS9bLeHH9u6vAnk8BrvNLHLyJFsWFmYP5jPxtXqV5XB7GuX3YwoJhXssPi6xrtiKcZwHcKJaX48z2Q",
  "key25": "396tcgKwMXRRt5pTvEStv1nPfqZFFzth1tENd2NS3tFEULgQ5dc1CyfrwW6irMqXXT8e3USWZRMpq4h342Rr9BvJ",
  "key26": "3jeUmTikaqPv7QZ5o1qi4x2ZZhKi6qM1fmjLcQu9bRkw4eeQRK4eP5VCtvX9XFwGgtd7D115RMkgroyPfsKjpb99",
  "key27": "4UjntkaZsecNSeBkCHMaHPFCd7h3vqcL5WKXCe65NQBFTRcmWcfjS3XAo6qCGP4tMY7orFRmMWHk8thHvXuzdriN",
  "key28": "5sr4znY1o9CAue7GpDgB8NPRdVnAbRL2DE5he1ZSooto63GmxFP8iimmKMn3MUUBuhGqM3cNR9L1oSG9WmwMNsdG"
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
