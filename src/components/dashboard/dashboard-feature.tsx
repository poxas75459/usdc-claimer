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
    "3ki66S4JVudM7E3W1ZX4n2gU4TmcUQVKNUpyGEgq4U96NBxzmbtMzPQmqHTdRUQnqdnJYZgCzdKkSivVhXvBB9am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kfoPdfhffd3pFUGd9rvoofRPPkP746Jfi3x88pdrDaw6PYyvShkg6pSeZjLjNmW4vjdop23JTZcZp4PqULyFMou",
  "key1": "ECs5h2TS8TRjnoyd2TfFWths6aVDYUCiuVLdTYwcYzzbF1bi5dPaxDydTWK28gkMuMpqbC26MFfV6UQikRbzkcr",
  "key2": "nsGJJ4y8xXU3ZoX7ex7PfhKL5Zsg6HMg86mu51LCQYTG7ixNYXgsogzskiFsvFxw9TpTLneNV67pZJjsBNEaNqd",
  "key3": "tfn1Hou7HHSLqXsDNH4eZS2hGecdwrkBZF6LhMcFau27A5hvjkWnnXsYjhzA59wk9eaDFV56rwVnEpsCjMfoQXt",
  "key4": "4hBdadJbNDeNmFrCBVH7t9VvA1oy6RdoMB33cr1UDyP2koPFDiVqqX3sHxAEsyChkMSsFB11eKQfW7uTjyXro4Me",
  "key5": "2nQfCkefKLtJYvKs9jKhUJKQG87idzXspK1omAZJmQ7Poa4cUdrd3f3Q5dnPPScVQHTuebNWnatjTrq28eUtfN7h",
  "key6": "Lw3AYBJoKXE6WvMPyJ77yqGWDmnoJhoN8J4FrxxGZRza5fjAYgCAjLP8eQUsfaib8YHjrhTdVkZsc8CUFSPoffe",
  "key7": "66iP14YMVFwNJrdsSaKL81RFeUFwMFrDUsUrMK2t2GwFDxDHLnXU32CukDx6kuvwnxAFDsHJT9qT3x1XzS5kdRW3",
  "key8": "2SYqVtyz3qSBCUMEy1dXQJu6NbxiXmLQ8ui1NeUC24noD1RmL2M4tgmcxH2dM6oPo1aJtCvZQECxoq6b8DuKUobe",
  "key9": "3G2oKUESMDjumMvCWUVwHhE6irgLdYFYbZbAZ8z4bqpJ7YrDc7NXZaYzbFAs4A5wb5FfRj2cBkxFspTp2qwJTsu8",
  "key10": "67rWMmT7DYPNeLQJ4b3khPz3QT87A7ZudTtMoDwfhTHCUG5JnD9L6NjZdGTNAZM38z4bgnrGjcvK3pSucwnd4yHg",
  "key11": "5518gYz2QbAnpvtVUCEivyR2zoj9B1VYUcPumWE6Lvkqyx2VmxSxgsA5xrXho31EWDRDzWGEKhxHsipwgBWXRnEH",
  "key12": "5qy3g5BE1jV1J2F6zvfwXutDgm7kLN6WxkwbykUwWCaPeTPqhjwef3WL7pco5SnTGon1tkvvtH1sFmAbFmJa2VBs",
  "key13": "4q27cKHMaqmo1FeSo4Tr59B9oteuKxH6SQSBABWogimKdF3KcokozXqMzVAj31Ls7gCrtvZGXaAgZRFzjREvBCsw",
  "key14": "2CYUFsY2mtMzTZrbLmjq2Bmh2XTtb5k4Nk5hDHjRPpE5js5N5wRYwrjZtTCUKwnvBUx7qr6QxG22VDe6EZnevwmQ",
  "key15": "4byHsFC24KyUFKhs17aq69BnkHvffsaczu4BGMAwQs6hWLhqaRK2J7J5xRiZdm5Cp6afPufLnhSQpbYpXtaMSFMt",
  "key16": "3rfXWJGtC9qBtA4cEMbBz3C7ASjMd9nTHd9ab9aEmdiS1AxNy26vDXuGQMc3V9PkcLYUsLBScRWrADyDG9aR5rVQ",
  "key17": "4SHwFRz7Zjr7U2GkpLPVbn66SfDjMrLkc1x4LDzmS376pXvNC1j8YVTaARo9iQ3SQoq2FCfuAea95Qc7Ycfo5pTm",
  "key18": "KxXJVEVkoc4qcS4MGryucupvYibkTYHPLL8yuPZkQ1LAJ9SqDymNA67UPdjhnhJJySRDuVH1x5U1SseSjdA83M8",
  "key19": "4DyhpsgN5qN5njXudZ9hPffNoUQhEAgcGmCcYHa7t2CUxynen7jDSx6NnB4mQFgA5pvmnza2RowVtq3kLk3MNVtL",
  "key20": "3wUsaNKDYF1QUAb8TuRsjzEskquf3i11gyhNhCN63vFjEg1a1oFXHiBzFiHVfARysorHZcbhZoqFLAeQs9ZXDfFs",
  "key21": "5w3scf31kQUz1TxXxVCaFnJYcRgTH2xg4qPvGY5ZQiM8twxD87FZFN6aDPumdi71FCoRNkXVRZep4YnUBU2puFkC",
  "key22": "QnvwGSNXAUhwBMBm9ZcUdebCajJQazrz2uwpAiDSGHQuP1o1R2Pr9KVAFgwv5rfZmDnhDxKiZiYYmAzYwKgEsqR",
  "key23": "3jiSo5XCUoM5YuLuux7sy2Fo1jNmHke6rbK11D7swfSPXx8kPp6fXdGuUpAVU8mHPJswbKVActVD716RaSJyBwrL",
  "key24": "5k1urSXdf8u4MybT63AnyneKXtvKRG9Wma7nPJ58EERLy352jpCiQAiyX4NccHT7ziZeUCSXvjego7gpyG6Aff8K",
  "key25": "2dD7tb88kKRqfSVXWSHvfAHQ96NG4dS2Bbh9CoSmmmjUzdBZ4E3fzR44RZqn9HVYYeguq8ehrmJv5vMypj8qAVF3",
  "key26": "ruf5ud6xXACWEsojAjByLxmiNPwVs9C2jbjrqg4Tn8nqxLECay7ATqkfUK3rjjTermddgEFiVRWiwGt5KSG1FRY",
  "key27": "3gPUhyJUKRKkJq4xDBkDDNwCokAsQwzMdp5Gc5oPnb8MnnLA4dRvge953DU86SZvgvz6rKTurSpJrKjSNL9Fo288",
  "key28": "5V5x3LpJxQSpdsHT46M2DsnPNzUUWGfJS5kcDJ7WLXPk61nGp6qVtnuAgXvVc6jNLrtNyxEAEQsFu4Mi5hsqkABj",
  "key29": "qb6QtHfq2tLFVzc9u2LtfpSy5aA8LqQ2qkhq154sZjcSM3ufNBPoqvVUHGC5hDWDnF6DqCjWxsWEE1SNXdQEeaA",
  "key30": "64h5FE2fGmwbGZ1LW3NEjJmLMipmN6gjipCx2RxBz4wtwxdgXnyv8jYBnBK9aUmEvmNjQ2to4zEGwgh4tRjvf3R6",
  "key31": "5ENK8dbGsmYUTL5yXwfcFo4fkqqXdAjwjQxeDWK3ushQDJN4MftRxASrLzPCACb9gaDY1XTZrgBQLX3mtHLA8qMR",
  "key32": "5odXb1z4U3PkX9otaJW5iDQm83dzZMa2DEFnGGFW3m24DSUoZd8BvfccBhnLkAPzsPa5VGkE8vkMit6wbd8BNfBq",
  "key33": "UABnBh9XzdzEQP5LrFBzxpNKArvd9Y84wzV7ZySBQBpEuH5ca5t4bm5Z3GJzkqhyXGnmYPvhXrm2o5jY5cJV2TU",
  "key34": "3hMcNiXWc4iiMZVPapoheMcj38WvmP1Xu2bWy4yCqU5qPXGxR1w5s2HRXy1F3YrEfgsq5wuHKszx6RKQ2Kp3toZc",
  "key35": "w8jaoQFpQDutuK5SoCormWU6R9A1k63LBYecFk8846ReZYQ2nCNGbNmjCW6kMVQa65v652a1yH6coQTz8TGtYRU",
  "key36": "3iaXfeHhuQ721ZJbqNMU3x6UcFbkJZGZyebNd1PRWUgjEW1YiFy2WRPGMA5q8fzzty8LXd2XmKHMsLkMiJyys7AG"
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
