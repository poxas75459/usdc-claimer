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
    "2F8StNQR9n1wZY6gWh5SvKfTTWhmrwaEbAQnBD4DMdE4WGsgNbacACnUjyi39YaxQH5yqXZ2ubbqocdNXagvvN9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eypDp19m2Z4PaJXcshyeMN8wq28fo38uZScjMQsSAXmKPtNdihUyosExLKnJHK8oq1dpoGZaHXKAUQHbsseB46d",
  "key1": "5vMFmq2gmLwPX7ksRKFFreZmfUGtVGfmPFdVDT1gmZpRcKozXtPnKrG8ETHho5qCibUBN1MmzYw97EgeWCxwjBy9",
  "key2": "67ZrTDCmet3fbgcCSc5QdyXrsAnLw7k3kFJ4n2taypG4pKz6vjRbJw5N8dpoRaWypSi9jBVHwvus2mbTGJGrtd8u",
  "key3": "3YPAszw6QUPCts21desnpQaQaHKrpbYTZfpPuYaDVm3jXJTMWUd8LuCga5ZoRJ59CtSz8Y4aXuzrEhTMGCR2aAA6",
  "key4": "2JcpW9M2fU8rqguP5cxbw4Hboru5cWvqPD8fgbhgiHvHgBF7MK1LRk6QAhyem9wV1m9CykWSZaTfqcdnMVhRgRDG",
  "key5": "5VWUd7ZWmUmt3i2oMNm41YvuUwK8ayQFtJbTWVNjhAKyK6GfenaFUoUfjfBGYKoVvSsaYGpE1FRNxCuqwrmqFKD1",
  "key6": "5rEcqkMJBV9ET7Dm6g9M2X4oXCieMMsADJFWfuxRVSY8kvZg8GjKoi6b9nqfUEBvFMzbnK3iXGuJvyWjjaZZng9A",
  "key7": "5T1uH7XyvN37WCkW4uJ5pfSnxZ6iDz3BNsrNf9ePDNTXTNRRJoEY48DcFtEYQ393fLaYfrtiQc6tmD2hnDXm7Vu3",
  "key8": "2FoZAczc8vT7uXyuot9wDeXRgnB8GQ6CWTP3VVhkYAQcBvygpM7acMW9Yhbob3Fg1X6BsRtmDXoDcNgVz9HZvE9x",
  "key9": "3x3S8HE3orzvS9EpgezPMjPY5pGXJXBaz5iBDGmConkQQHnJtwgy1KdnkyEG71cKZWoQQgiqukJJ837kuwhV7a8e",
  "key10": "3c1XpMsaCPtFHd3akCUt4GjHuswcUM9Vyq4isL7FTNBjCDjJepqSSjVXTSbgsRoukykWUmyHQCoBHFPswPuGnvHd",
  "key11": "3J9grdMQzaHAsUDzdTFqToyU7NUAkZGk2APZTgCZfHzC4rCsPZqbkrFhUKedm9xchRgvHTUUBkiprkfLMRw4ehmC",
  "key12": "2NSU2NJesARzLjwkM6gBQpBQM4SonZqYteoYpjzRgnHaDAM3UdpM2cTKH7ojNAfkW5a69bvwH5ZaNWG7CwKotXSa",
  "key13": "2g44EQTYenRNCwRmHjfKyuEukWv42b9APg4PV4FKcnzKVD143wUK1CWFDzGr7yzovN7iPp3qFx11o4gzkhvnajuA",
  "key14": "3bH6SXC8d32oHe8ZJdUjXK6ChF5W75mmb4dgZFJ8npFr67soAtVvUe2ekyrJ5Rv7Pqo1Pr1BesXRjPQMwiq57KeH",
  "key15": "3vmEef7bSpfC42bwd4UoBwzmYutq8SYLG6jWi7ErqsgejW28U9yFh8ieERnAbrNVzh9rsUTQEvphnfSPCmPe1Mdt",
  "key16": "4eUdpr6bFAxBo3sfm9MWhkAxXBksKtLRkyLvPtj87uq3MrnC7WyMZjwNgu4QEEiJAUR6xwuguyX6tHLc4zDS7sHh",
  "key17": "5AH1a4dXnbG2o5mTM4Q1UFh87Khzkj4moPnnbRTiTBugpG1f4Y4QazG6MhWE6TyjJwXGq9DdPDqeJ5eyD42XJDon",
  "key18": "9MiBthr6pw4PjeNWq2eZFETQAFpUa78a2YGEC44ra7CzsazJpAtCCcvbhqdwUhCEU1GyQG6hpRZvuW8xJEujuhd",
  "key19": "3aCu7VchrPZtvfnyS3uKsVvt3DM4fGZTmxgno68fT4KRo3AdfmMQwfV1cuKcSKVneUTtDDiA4FTuCPrxm99ftSZ2",
  "key20": "2bscG8EXRTsJHqMzcdW6B8ew3E3s7C64uVpknhLXBhfinjVZiXr1wibg9u4z8jPzbGRN8w341WkxzxmmBQMJNwWU",
  "key21": "4r1WZcsCqTJeQSK4Pq1yTGqWCURTFgrSq6Qc9hPQDnf8b3E4HCCfWzj1Phz9N5NvEjPtz5ngtLmnNbyPwCaVmw3v",
  "key22": "2fU3kf8pYuFJXP1okRDZ5ZMaP2pUUxT3tkaxX7ogHrjc8V97gEapkLqkXFoNEF3NcduhsEjkBTYtA6iiv1VZrDgZ",
  "key23": "5YyU2nF4QWFRQvYJeaaAdnPW4HtNrwCxTDn75DNWNWUrY7NYnpMQMNQVGFH5FtwA8oPx9trCCeWBhVex7r1mMcQ9",
  "key24": "46cGxv9TxzNigyyvk1pFx6HvkauT5yqtobEEFSUtxRy3S8S1jv8t2AoFaUoNZpKkaKwwp4ArHqVKT2a8UeUHniSR",
  "key25": "5jTrLc3cximBjZE6uhM2dwMpKiS9PbHqT6TgdYaAvo8kJzCAPAHxJzE4y5GpE1cfN5qNF3fWgLLGuCkHxCwaKEy2"
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
