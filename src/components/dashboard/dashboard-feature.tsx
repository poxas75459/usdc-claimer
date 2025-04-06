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
    "5MsC1RvA5ZUQFgKBCBmy4YRLezg8PSzAV4HaXJY5LvyMNKzyQ6VYjWB5ccL2chY7rY7zDsHV8KxmHxiuhjwVg8kS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VzuSr2GbNTQeDeZNMK7dbHKVcXmiwPjDQbHDroBTmMsDHGPs4kFrF6QBd2AV7TdNRH3bMaymWV4Et5tmp9YSGfa",
  "key1": "3QcJUWn5M8uzAqaBfHvMFYG4ETJvL64qnPi9c5ozR5ixWUJAdDibWiZyz9MpopSUeKEsGaXgALzHKFY79T6v2yfb",
  "key2": "iTvT6zX1qNPpFf6zNMKaMybCHMCF3SRGKgaSBTt3sDM9tEH6B5QaWFrE22vMiQVFBJwMBCZEu5weWHPDYFwDozP",
  "key3": "39rm3kehwb9M1JzBDbbbN8DuR7qbuoauk3xpmMcQCrDjXtGZfCcGcR8u16W98SVMfsZWTTonNLLhpQuuz6jTS9R3",
  "key4": "4UpqSXg23ENHMBL38jz5dFvFhkbQNPWCc6Y7S57dgEFFbyr9JCmJ3dUjVmLZf6UQ3CyL3YDL23evPqMaqSSdyvN8",
  "key5": "EFE7VWUEMXRCi57Jv9BHFLYc5Gsuw9UTxLxkNVMXb6A2fEhae7KVuM4Cr4Xed3UWVZtVyVs5zbDbkj68VGjYMQg",
  "key6": "4vcfQ83EBRoKzvvcuhFxBM6nUHi1zq8H3adDJBXsFz9uwbYq8fQeXdQdEC7zMNzUnZ7ZG9L4MtMgkcv2kZP98e8e",
  "key7": "2jUNJDTYkegTYpSYFc7wqMxnY75aSczq7EBV14nnGnN9e2b8QTRwKvUteQCo4avY4bUYWsktt6nQCzDK47un7XJD",
  "key8": "2ixgH8PLQB9aHzJUqLNJJH9WvvSBSitkaU35mQKV1kXuGCQ4T9bsrEuFJ1KFkBjoLQzm7P7ir2E5jvWNtSnL69xi",
  "key9": "3wSZkzRAm9fAarQA7KHTMq6hfK4ktjvyQ5qXqMz2b49wssKBqGdaCsDDtv5HQ6jQ7wTJwp5xNVguH8WZWbcQ77DE",
  "key10": "5tJiCUEfWGrqUH9qf312AtpsFdKkJwqBpv2MdczB6pKZTovRhWQxkfs3aMh79EnUb5rcyVyiSafr7Ryri1CiCpzz",
  "key11": "45tJ9N199WwP6MtFLv6s1digamNup3Bs3CATwLiFEJY9ostA3b1AXxRfd1u8WboJw4wktLaKtA9wuWRX594S2H8q",
  "key12": "5tbAxLNorfvxKLMmwr36JoFya96c1F9aUeuJ3BvybpGYL1SUt26zrKPyXovArjjH45uXtL8ueZwecMGhacLDbsvC",
  "key13": "62E3nE4zuRhn5ezP3SmXyeyjeY25LeA2zoEKoQpX16YW6riCjV5PucnYvPNTagjLDmu9hafZRf9JhTZzqqmTPFqd",
  "key14": "3XnCjcm3HLBHtVUG9vkYf28W2YEnd5gaLcftFYdvMedUdoaZttE7sZ8XMv1HSZ6JkJJB9HG9eXTSieYsDRsV9TQQ",
  "key15": "5XDJguhQowtWfVEVjUTN98H7RMuyxj3yztDmtbRMhpq8BrYh3G8cD2PxSGJ9uX6qCE9dchqodeuPUVFLY9CJFJ16",
  "key16": "2ND9qLBQiCxyLSBXAwdMg9bzG18xCWtjPnUT63Wn1UWJSdBeTM6tvvejySFdp9M3CMpKXNndBzW1EZ4zByJBj5Q6",
  "key17": "3eZQg6ZPL8SgYaBjEV2pypGMTRNx7h4Vtmbf9kBV9uZjPUpxRK46oz6gvFQbiqSxEMN5We9Jokhz5d3VwXr2axYz",
  "key18": "44g25uCVf4TWB3MsH165Eux6YeiS2uM7PEoAvQWxJVKFSQ5obAaRMk1j1UnZsbMpWfT3dkhyvumyzRheUAUaAnCf",
  "key19": "UogLpQXsmYxF8tu8do8DE6BDdd5i85kYEjXDb4prtiQmzJpo7Ka1jtpvVkgfhskU38v94i7XRVJWPn9U4m9rKzK",
  "key20": "22gaAVMHCDHEzf6KTAV85Xnkcmsobdfj9PnmEA9Ta5zv8LLvGSdLjdWsbRz7sYeq8cMx1pWn6FbsgUEbGDVrbEix",
  "key21": "4NjxNu6Vk8ipYM9Ks9tNzVdCtC3zuvfX4dzGGmSE957Ukxb8CTnWk3ogPxKXF94obgWvVMfSBtAxKQn9xd8bAnzm",
  "key22": "2wPLwYdhzVeALS5tKSc8NPtQsBMx5VnrtEj5XuxZgoXcbiEqXP6CBuKwzBY6SuzsgxckcUzaSYBhkrideqmZQWmg",
  "key23": "29yyAn1hDbFtDE5LUpFsrtBFSBNgzPWYxCJd1KCin9Q5fYAR3U4c21DrtyQSsxkGpw7FKudJ4DMGUM7G9JCuBSp6",
  "key24": "5nH78gU3vFkm6GSxfW6dR5nSAFGLp3t5yf7dhEEtrd8HZee6ynPRuz6hNzGkLSKMtS56Fp553dXufSzkznTCsLM3",
  "key25": "2uniJ5Q53LKsWSj174eftEBgDEUKyf5gnuskEeXWVmr4zFqzRJaZmJ5EKq2ZWCE4YWyUMQqbsnzyMUxbFtxwoe2N",
  "key26": "3oPuCo9dhrak8LZBBkcLgfU9WsZ3qFVozQ21zwnBAdj7GhaVmPkd4N36SgvbkrZ5naLKuE8VEkbgr7LC1ec43gSW",
  "key27": "64Kr1GAGfXJaSYtn29eZgufjFpJ9asL1L2BWowt9eLuqDnBggEHJuZLGy1yr6YbmvF9YPfdoqzBJtETzqfowQcGN",
  "key28": "3vV2sReNjPYMazeD9UVJ2UJDrt56V8nYoLELGQZdSLSXbkVsMgBV2zn53sxC8Ku2fjemzAkt8RF4XwpMF4NJANP2",
  "key29": "5yEBG89FkbaxD88s1C5RDNKR1ye7ZaitkoKTNpG8NkMHZdC2zDFkjWw5wUU8UKL8rAt8sqwc6Tk3XtK8eRf8VGdt",
  "key30": "2jr9WFgvCNgCWGDTtNVwjqSWF6Mi4NfxLL4JXHyK6qSUzU1xQitbxZB3H3bvCTLSLjwsFtGXyHA7ZYuN6EwdXeLn"
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
