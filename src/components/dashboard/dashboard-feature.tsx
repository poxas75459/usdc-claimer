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
    "2ckzxqpkUUwbkuhg3WSZSDVbbH3kQK13mnewrhKMmSGFhA3UFqRfWXF94aaSfYzNddVo38Rf5Wrco8zpuPViAAC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iwnGQYM69fQP8RG7frgd72AHB9RnZYYN4zqgrk6r2sTdgKYxdTVmFtvd4ey2MP7hbt5Wv5eD8N9Gjz4Mwgt2Xpk",
  "key1": "5uMb2mCQLN3TbzK499n9FVKfzKY8R5ewJ4r8GDQjsNPbJmXUkeHwwSjhP9qWbyqxz7HReKu8hGtYfgxgYDyAKthe",
  "key2": "jztv4eUX6arhUhN7VZwo2c2AUKH4SfAM6wBN4ezrEEwXJqUAn8j5gxHYFuT4wnbdYqWTZ9oQ1EWPWRrp4sijePz",
  "key3": "cS59uDCkxdN3zGyyzR4dHWEK5ALPJEHHPa3MLYuZ3HVPjMV34uoWwHpBkxmoqWvsHvH3spyqCY79LGHFLWfaDaX",
  "key4": "4Xe5qG1djsAkq7L2MhhtkAZzeV5pgvSH2rVTU3pvvH9o4Emrr2igEdPLz65v6bZjPxx5eU8TtvFMpmAZ1vCTDLTx",
  "key5": "2J1tdwpFgUfMd9HPuZZnPrm5z4KXBWpB2zNujvKE91MWBasPXSwmAPEonrerFLoqURgAxyFUopYShKmrS7GaUDZT",
  "key6": "R3QbbmJUAGQcwjAb62C9kMb4aBoW81ZeG8AB9iXLxd2trFAyKNan6o4JjUsdXYneZkbBqqmhQ3FJQr5gPgxVGRp",
  "key7": "4epfJHEXUUWLfGz3R5QB6uCFVUAkYKpfVhuLHBXRYt73PvkBU9xAP6QMP85F84ULdW6cWfb54qJRKqFEnvBk5UCX",
  "key8": "3f79qsbpSvoSvoh4aAKRNQzTjfsadVUEuNmvqnN4SwPtvrQuvN4M3eMxD4aXNf9RBJaKXV7dqiFpTPEbGzniNYZz",
  "key9": "5Ded1LU7f6vi2idSbDWYvME8n7X6VMWKiDrgqNF7Pyj1Kx2qfmaVGUuNnZF3SpG9Rcbb6Vkx1s1N49MnLR2TBncp",
  "key10": "3M8A8GQoWFHR6odiwgNa4QKVUbVLmFuHLv4uYpXnhmLtFnXZxiNAZKNWcHSoKS77SM8XWTvnJkonLBeSTmpJmJGY",
  "key11": "4KZRijdywsQNUTVGaFPXiNuoPumoYejYB8z9V9s3bFSGQ6CgqEXCQn4EXsQKWCzf2bLT2R4xmcKvKXJR2LVu5dqU",
  "key12": "5dEVMhAkqASWV22SpaYfwxGEeHuzVjJLbyM56Svjrs73TioSzuf3dhijUHJ5HKjQQCGqZYe9pHQXUxUB8XCtbHew",
  "key13": "42T6DmK7BXARW4EtNpcDyTSFVcEYFMWyGo4W5ZGEJyt8QqQb26AX4F8tCAFWuEaXgtU4xhsRSC29s59F1XW2jNk",
  "key14": "3jag3PtrFapYMP9bKh8Sf9qi8r28QYmoWsuZnkB4sR6Axuiyq2GZCf8cdXfVRmcVwJJBJ3f4X57J2no9JXMLLy6Y",
  "key15": "3yrupWZisRJsJuTpBv98CdbZUidNEDceKA7Qv7FEKU1ZQLHb8BuKARFinnfitmznxFoss2bK9bnW54LZ3K9ZdBWA",
  "key16": "3rTt9opQWfgqs2hVU3JZ7SC6nLeEiM2eUf5fBw3zzG1ZNymSXWeCmXzfihKPg2MkTRnsM7o2Z4VUEvb98rvcPtHT",
  "key17": "2Nd7uukSER4yYnxa9BmGQPqfsSJ22xa7aeHCPDphdPDheKNyJJ5yq54FkUFUp4th9bczxGr7vo53w82TQ28zJW9N",
  "key18": "3GmmwcGofYyFyhY3QMw6aStujYrBVgzyWVjQaBQ4M3NQ33d7nNrnvLoXkdWEjAtRUk9aUG8Nr6wnU9tspVNxPon8",
  "key19": "4PqUHmY432Yv8269hDvLLEVQEPuVzyRZbrvzJHEXirCcyyeDvbLCafWGxqmdpXGh1GM2mJfsSXo23qcsjsnSzL9s",
  "key20": "XHT4W3Uxifza5hSub7AKCmJfykYZ7VzZvejHwrk4tdDp7CoFRDHEaafnyZEjRmbZvE8SgRwXWJac6dKF2ajJvV3",
  "key21": "4DwiPZLkcea9r6DcaLUbKSf94ixrQ8Cy62SzARH8Re5HqLgYbb6tQwXY9DmWR3PGzWN7BzrCcUVYp6S4NkYmnPGc",
  "key22": "wkQAQtSvziyZW8ea1nkNZ6FtMWeGPxwPzMHmNtjm5mN2R2H5qEEN8QD6a2oDVHHtcYGmSgj88efWV5tM8nxyrT2",
  "key23": "5yqZJE3XiGzDmpM1HCCxqphNpyhz8xavnCqN6vMbmKn22TDPGnGcDnzCQnsRd2ytTFsUydwUKwsSZ1PoXeoS8d3U",
  "key24": "3vhhQx8a8PEHnpZkFrRgUopkDaYhYay26MXXrnRMe4ks46GA5eNn96vo6Ffa3LYkT6kGWxxAVd49Q8ScMychQTvj",
  "key25": "3anFk5o6LkXu9jeGvaqVx5D5LMPAda3RqwuymgFuiXnMJpDkDBu9ejTfcWYfGT8dUcqCjKbMZGqAttXnMoQyownv",
  "key26": "4N52BqvukcwSezL33qHf7ukvs9ym9TUYYwMeAnTbd3SvcQCCcgoVPDadYvYScj3omdTLAgKqAtDMBmKMynnLexo5",
  "key27": "3RTqmN2KCT8f3doKuem6s8DGqFebpLquU1zqY3dTNTozvTbsPpHXemDJpn1zJRQz6oxZqDwoTRhvf7AwM75VzqXL",
  "key28": "2ReQ7n7D9dsPu2TopEzHj7nZG39N1hDxuyeKWM9aGrRAGkphKXFjQ87kewktrMtrRwhXoRoBJQ4kuXxrxJwLyn9d",
  "key29": "3AXx4F4ykDrXrsyEnQDWaqTe8uaN39vRmFwrzTDw33TD8o5iDRYzoQSqwAojt4kHNUT3iNgya4PtoEGPFwTLrx2C"
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
