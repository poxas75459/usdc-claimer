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
    "6muzqWC8VA9BMGAymngquUWYwprDpiDctKvTp2ccX11o93iQExJBEWtAe9KPQLGATj5n2j6uuAW76avim5DDQo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47JFvHRGbEk7RStU3FqLzV1zxdW5pgQAKaRZoL2yiSsydoH5YqxrKFsqrkh36ps3djD4p34zS5w7rD271zqLDrXo",
  "key1": "5FYx8bMM9xvGfpTGQTVB8aj7ziW6ctrxDi9FGPVC52KmYgTBsBVB6dUJ8LEi1fFEq8RjiQu8u1S5gXnLiDaG7Zx4",
  "key2": "2BZgwK4kcitZEtPrHkxEHRZFx6VU32gzr3ZUaHJEchwriNGz1EWKuqaiBYuaCaXTNzrYVCRzp7G8Cey1w3kdN9jB",
  "key3": "5GfN4YAw5xxUHeF7D5cejXqa4Wp4852xAvcsb4GR2mgyihyPs4V5HQXCMF9MZ6yEFLrpr79iE2o4w7qrthxm6dXw",
  "key4": "4LtHV9fjo5q2x611cMxndpSAb6qWWY2jx4ECLZ59uDHuFYrd69hVmhgHSmufY8wUTuH1koyXs635AYBe66LLfEMw",
  "key5": "5LnXjoNvmhiZEL1kLa1ETRJxDW3T73RKJt9Q3i8ms6V2xGjJph5NvyR6TrdkPxxE63QdkXcjHPPMPSpNqNcWg9kr",
  "key6": "5h9nBKDdrkhyuHm7WSpB45XD86DXEwChfKcvy4oJARvDYDe15BPcTfmBrbDuVKWGs1jQTMfdG1P2LZUr2kL7yKEg",
  "key7": "pCRHkM7dfYTSnFH8mUoDdDYFZnA6menLq8vct8uzVw1ZmLe7JCiTNr44ZyZoaWGKPXTGYF3LbF22bbKkjL5q1X3",
  "key8": "4PLSUoCft9DAFbP5rkpGgWTPqgdasUw1iJbt43SyccxpbBY9n2bXSnv2wCy47Ze7GxZxn3e8GrPDHwjkUNQ1pibJ",
  "key9": "4xA24MyDck2LXf3bZrsrTParvdEytzeiGgR5JtQotEvL12wY5Xzug5nRgom9LVJ4nuFHuwB4boZLgvjS1QUc4seA",
  "key10": "3HgpFs7iGviVhMLXfzwJEGVFEfnc9gRFD1Vq4BemVeFZvkw6NXfStz1HHv7jev4D7ZNsUU1WBRkgrcuQ93VtYKTx",
  "key11": "9zbXA6m4NhJEakDxFr8q3BDALSZ4qctGqh8P9gekmJrWXAqXUacKb492pqHihqdpYCfpzgKR8JnBCNnUDBwnN14",
  "key12": "4bgUgBFJ43rftjAqQRUakQ3rHuV8k7R8KWCaqz4FgLToPCE3jaJkQ7fpRnk4g2jDxNaYSfqB7R9FXSJpVZdWAgEf",
  "key13": "3kGeWLc6yESRybeWVKXkYbegjuyzQJFCSdpMx2669q4fYjiS5S2ZWA9dY9YiSCfMJJa2fmobT9bysn1UdZZ1SRLM",
  "key14": "61e8UM8yMi313jSiCCBBmyzmCQE7KrF1TbwfgCPFTzhvpXxdhuPQKitDeUrQ6yr4yZoWK3nGmecApbPXcGnC9DHm",
  "key15": "26K6x1uc4ou1Gav9WgLRPgUQH55XWKbxyjHSz8D8f6MqSYG3zMKXfrbztLhqbktdGNAZzLaaxNPxKaftWcajqhGr",
  "key16": "ZcLqWAqjWBJ7PUxL2AnbReJyLvZ6Y5Abge2f8QigJ81qnQeaQmoGDoGUaJq3z3U7j7BzXwxvDAcW61jDhCjdDCo",
  "key17": "4EjMbCZ7ynZLJXXvATJWdabJp8MwrNMU7dbSP57fb36muRhhS62Hs4cf3XzpPnD4sYt8nGi4ZjC4WnF3L3AWt27B",
  "key18": "4crnS3r1A7G8eCuoG1afRkUQmrb6xM6heGJDWQwqBfLogqk4KqnWdsWAPs8jruCnTtwqrFoghi9BtaD4HVtWGTd6",
  "key19": "E3Ju9HUEd4x8DCnYDPpUQQKJwL1AwwSo4DeC5wRVAxf9H3b3eyvmV27qsmHpuLpcTz83tua9enxxb86aAdR7tyL",
  "key20": "5NSmJwMi989nE3SLwht4zD6WGrzh8fUY63ZqQ8vNA8KudD5yvbyR7jwNrt84P4HuCh2wVVS3NijfsQP1UYLvoUMe",
  "key21": "2Wmn7vYsVjWQE57Jdcs3PqwVaudPbxUcj6QRj5mvpzicKd6Phjx5B9M8VJQpgfPLWyvZFuaHZkDqXLGYnj9oYo8R",
  "key22": "3BfEnJpHRe9GxzbaoTDhYanSKFxdc2g5H2DzxjA9tj96DvGo5jcE1HDkxTEDZdx9LbvqRFfCnqZpV6mre5yh7hSL",
  "key23": "23a3Qi39J1bLePXaiiR8RAChCsVBWcbb9PzjFZ4roWwCHrumRYbfHmucTMEjqjjcKmJRdpHQ6dCvoHjsD5cL5KYH",
  "key24": "2zBhe9DFwbfJ4VKWgK1kj3hEag6EdXjN26fnSwu6hcUJg9r7xK9MmBSpdaTi94eAQkXc31ESBBeN43az13dfQsPU",
  "key25": "2VmXbQa4PTmRKPjcNRdtp3pZM2pJEbHBfNm3Bgnpd89wB4NncWxXnKXPXVgMMdpGrvrJ8CZFwxxUt1XHyYouhjEn",
  "key26": "5VA9Tr5sPfMHiocEWFv5hi9hhMBpxKaknAkUekwoRiui56poifVqrJeWjYCwxFRACVrQNyMsBGbu334a4VW2S6sJ",
  "key27": "UAzuiFNfnzqspvUCTtnSv1mmtycaGgXCv7YFbPuSimi3hLbTE2k2DscqEfCRLZMfFLeA949r7N4YKSMYLEcc2Wy",
  "key28": "3SueRKWyv6B8RvsM7B3zUJnYmhsJa1DEpbjyJ2cg3mReBKz87cd4x1MvENi31L3NmUd3Sa5dyyCDXZXGQhBPTCif",
  "key29": "5JrR84oVyLx8PDrfzCLZNGdadnByMSrXYdf6DwwrS4zbEhm5dP6af9gAcVr6aSr3UYrYM5rD8AtM9vBs3Gm7DrNc",
  "key30": "5M6KNC1Rjs8TvC6zgAiQPz1utm98foYDX4Mv7pLTCvY3myPuzcwLpVBB4E3BNswmbsVh5tdSBQHzNvNZt1Uu64SH",
  "key31": "5YUVbvHUtDMcq6yK1GWoDCxgC4ufUFGDgVrjAEjfNEDxt3tRohQcSfGUa1M1sh4qdLqge293h6KJJV7jE4orzUyC",
  "key32": "5uxhVfBLFjfr4p2FMberURdvpkaEN2SiGCqfXupVHo2rUEw2gmkmeitFiSYPTHGS8vjGJPcEHYpcckndssRWeDTU",
  "key33": "2Z6nSjzPFteqEqWn4eUzA3WFHeovUVKEy9JnD1Kdw7xGJfdiKSGUGvbnZnTtxpvaxKWALfyATfgoMG7XaNcju1fp",
  "key34": "pvBFiMJ8xWTjyB4DrRRMY5nNmY8QUiqTxFxDgiQWvtMBzyy2tGr55nNRd1XgvgcjNBmA1sWXZR2MoRqSxDhapV3",
  "key35": "63ti2HrCGJzVPmTH612NYLJjZheoeJ47SCaHELCN7Y5yTsFS1rbJy2vX387wd2TNnYeED5Unveowk2R4yBiA5Lxv",
  "key36": "5k3DuiXVtHuEhVM9VhN3vL3Ds5vibdmbvibJ17QaRJnUe52e8UpbmS2un1px7c6xALSJpoeEgLYkNi2p8Yfj635a",
  "key37": "48TUcLWfh9oAbK3L1T7rMmnYtEbsKS8ZrAXcuHrZUQujU57ZCMgD7gRjWj6RbN4ap7uozfZWP3AVhnDcTdWK53bo",
  "key38": "27rrAPdYbie23dXQ54xmvbr9etjWz288oo43GTFzGj7xRyaT9Ae3GLfAPU42uRE6fUcfDi8eGt4DpMDqEKquR8tD",
  "key39": "2ziLLii9VUTXigJgF7Frn3UaPAR17kKPKQEd1BrE5ezC8G7hUr6VYEdntJwXM5G4ov8ZUnKLZPhk7oyxTUhxU6KN",
  "key40": "JVoSz82gAmL66ihvstn8rd2KfND813gCTE3sStU2HaNHQEjvzWvo8Cr1mrTjnSmHVmfvKjvUij99WEVmnpvdkbe",
  "key41": "EhuwDY7BucqYrTEQJauJtUEqQaBBo3x6pauRUScfWwRAbSBZNRm9iWcbnfhTuEYxrQ1qGaqax5UAQCmSzuMHWfD",
  "key42": "5m2v7pr35XHEJdfgYihw8NAot5av91R1hRFUeK9dowUKyTwxZuz7CSnihzWiQm6hZb5qDtyfi4AcCyTpL73SYPbx"
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
