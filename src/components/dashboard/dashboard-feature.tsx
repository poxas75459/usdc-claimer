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
    "sR9g29zXvWe8nattugwpeDm76tqWFSEBRhz4ukBCk6s83Dy9K153NZ9YM2UR3tXDCGV3GQoraimLTqPovM6sqw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38sSWU6X3y1HBPUD92FGL9g6bRgEwv3JoZNbfXbKYHKcDbP1eswSYRSUMjuz7ZHTZoto4kwvQMTMuWnikATEDJ1L",
  "key1": "3QpYLaYpeNu2rQuYSen2Jz2ayt2tjBdjGEFe6VCZYb1vmqDrN63B3HtuXwhj4AqmBGynJeJG1TN1V1fVBhuo7NJ5",
  "key2": "31NxLMrGBNJ15jndhhpZXAj8jy9jGGCmdWyBK6nGxkPyKBArEoTMqiewa5Se51LE9Mt5ernm4ADnsdyG3N9LzM1L",
  "key3": "rw1VDTmjVRnCCyyZYsPYEKXjy9gZLoaMyFTTdMThk81G5D6MAot8RBTWFn8i7KcYLnuTT2bH81grprZRDiNPYwn",
  "key4": "5wnpxS1aLoqWfMfZMpanj7nYn9t8wx9KFZrzsAUfnmeNqjCVtu8gqTW9qpjX3QX9RKAYKk6jY8UFiuPVfcox2gQj",
  "key5": "4coADLZjWKHuxLGRCRGzEdERcwKekCn1zZwFqpyHJDMysdLrzFDiLB9yPPuFVK7TMgQnSZxxpMCyXP6wMAaSyLE5",
  "key6": "5xzp9je9jcEhHmmmQupinDKuzpQkwQRFZzVcftQnmKZAFnYstnL9fpAp4PB6vKLHLvVDAtAVBKXHeG6cRuNDfh9q",
  "key7": "2EczKV9QrqQ451JphUninLYgoDEHqtoEsai52MJ3fL8MBbYwoij36nzrto7mLYK6pByrH5fMdfEQQLXNHmqZVNV9",
  "key8": "4ixwUPTyHtrsFhgfQTkj857BYNsKJXTRWwCTa7LrYBf8R5XGzEwpc7LzZhWj3rXi6EHfYGoBGHVnqSJ7yv5uJfyT",
  "key9": "5XfDsKkMQZQ2Mn59pwmoS2LrmBUHG9hAHSCRbQJHXwka8YV5CoJcXSbtSH6vyFLJVRCazHjWdpumCcH2WmNbV9Mq",
  "key10": "jRM61bY27LBewnUyATKUWJqqF3ZckW5T5tsD8HQvL3yxdtWibwF6JDR5nmpwtu5qR1pqs5aDerjhqu6MxPy2q8P",
  "key11": "5HfqJC7GEmQcZWj8cbFYBoANT7adD3KMQ3obxbeRDSLSi7iTZgE9ytLE5MmPYTx4tj9AZDMbJfgXJvd8nDUwBaYu",
  "key12": "2tjBXsYRbdtp5qbNprUyP1J3pC9Ug7rTKwPkfq9Bvcoz6qcSWM8bJCUy9qx1Uqr9d64cMQRPjGZEfQsGxtKctJ7",
  "key13": "4Wsc3nrjXimmarrhzJ9BqaAyFpqxnVZpwACS8MMbSCGsfKHAAeRiZkpmidknzNGUx9nQSNY2hqt9vUF7HiThJL1i",
  "key14": "2WZvAh3zaZLtDqU3gnLNWZSUQb53Uz5bKR1zBV6v6qpNfMxQ3rhhPXxJQp42gLZzJnaiiLYQbwzcgJtmmDfjuY5F",
  "key15": "4edWKMx8F1ozwdXHKgEXE9NAdYMvVn7SLrRqBz2GjdZZeXGivSUgCVvguz62anuSFiVUGx3EitU8JJVb8LbPNmZb",
  "key16": "24Roz1RNEkKZHPPrhpbtsipVSoBnpb8jm3BrTZWAp42yUDXxTUSPAeARrSJik1f3CtnfLNRTDC7g21gcdzcdT964",
  "key17": "3LS8vDE2dEEibNPQfnp37jF4JH73UScUsczGWQouNUzvDY9mbZyZwwHFVwcJKrbZtzxUowrDbJzPqCf1DuA33uX5",
  "key18": "3VHwkniBswu2gGWSm6BxhmFN1X3MeyDVmMUzybG3BXcpdRCKpFKPvWrXHduM3UCBqs1b9YMhUtyur4paCoUsLfsD",
  "key19": "2i8YFjqiSd7k5K2kKcZDWgZZa7qWNRP6sT4yx4vZ33Gg8tBZCsq1qHQmJVcMXWom7JyhDxu28gNbcbiw34vLYpk7",
  "key20": "24fVMJ6MMTsgJj15tnCqtE9eXiNP9X8kc6LLZsjHXwGtFbR8i8qgCBYNuEXHCGc4ttDeVvVHcfs9BzEwyHhmteht",
  "key21": "2y4utUbYfkif7fwQwfysSG7ap2cvLLgPKC3ZK1R8t8WcxS7t26vdnreeGiynXVt98WN3n5KNaBEGXBATmZGg3aJr",
  "key22": "3fZhP4KqUJG3DgEU3gJJHx7X2vnaPQ1DETRA6Kq7nEcyXTwnKHjPUirFao2nQ58nJaYwKXqdT9rUDEveGiFaLQmm",
  "key23": "3EC7wiDefXLtwbTufHqdszvZFs5BiZdTCJLHK2gmuVhy1T6rnFo8BHajyZRYc4G7gdzaCmJLSeZaDwisa2McDpqa",
  "key24": "3JtWby1sELZMKhHNpwaVAcfQSt7gtaC7q4tucDCBZkrVfP8u5ahyWataZohRdBpfvyM31hYQFVvZxfBNMHetHSF6",
  "key25": "2NJ56qPvhoDjYHfhwNhRm7F9DaBfo5oTmtijZD9Vv38tMUgJ5Y4DqGqRCMrTMDZnrUNTbi29SLymCwashrWFJ7Vo",
  "key26": "4meoENsXQxyXTZx54fADrcDiVPzTeGTedzUScp945tm4h3vADAsmSjY2U11ScLxi5HmpbqLfEtvGKFgNyHrxubFN",
  "key27": "2s6t6pVvvxHtSqFfPdqZvruSbaagSLt13qkCUvRnuAiBPm1KwQVrvSjJXTdoFZMTxYKEdCEK6jFZ5u7Nu698RA3K",
  "key28": "5bV3Mz6za8sn9pPxftLi4fPuTaZURz3JVTWmvoF1fFqqEK86MyGx9T6ve6EPuUFRfybjdz9d2oECVSoHqkt7tsg2",
  "key29": "5Tt3vjtCaiUtsVrznHvLTtwUJbYDiCBYKRCiFHr65KhBPPaT7vQNwerzEHSF9z3kfb34yKusLSizQDQp4YU5QKuE",
  "key30": "217AwWPN6raefWUZYkejBMWn2VA7FqT2rDfmSG1q4XTWbFzti4sp5cXABFNhEsn8dz3dAqj8mki2aXEtXc5Ka1P3",
  "key31": "5jVtCXa4XGUxkxu2dosGSS7ZMUp2ZCoKsaaPkjSRQAAaqtPQpeMxBxEsBu4ovdeKYMJswbbAakRqr7QP176YPyaS",
  "key32": "5hmZ9D79HMXNQEfakWVWgEfcaTbXQ2oiZrU1fp3jQFYGaYGLxyBhKLJQTN4mujiTsWbEVLrEsnngCu4jHYWf63yC",
  "key33": "5Zqm8DD8mrvXNiFJRCySNab3bV9hXLo2gBZ8aczjxnALUnRt8UmNbmd4P7nMgkECcZfekX5weTLqhMizy6xBMa99",
  "key34": "3KKBYcgWo7DwZkVfUCUv2QDxNtxwxHth7TKZHmoWV2VgkrjojdVTkxMtaifvm44KAb9WsW6keKomV5vrav4zBdwh",
  "key35": "5ANox2QejxiK14L5L8mJHzdo5vtu3AhZix8bYs52oJ2q6nkBDfsWDcdxcXYkFE5yRX4XCSC5AcgVqa67xFvfrzDb",
  "key36": "4q3BdWBVYxNyGEx3MiPJBZU8nUmw1ADK6R8aqbTi1e3QbRwnwLm7hp2mu5zasW1zGnGyMFK5CeaVFNaDaw7mnAyT"
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
