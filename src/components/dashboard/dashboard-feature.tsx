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
    "3nfa89RE3SGBbwBmbcMMdaXVaAeHsBp88nhMipjVhHBXKnVjWooLGHHTCSNTwJ1dpu1bByZYaeYKhNQUKtfLj89H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eh7r7UjoLvnJrv1APZ7cyb7tz5Kz4eRicZ6fJXLwQ9QCVwk8nuj5Vx4W973DLmLfdNHLGrz2XJWwRogTp1FvN2Q",
  "key1": "3uKWBfxv9pgKKwEJxeoyh5FbH4eHj9vodEPcAagngtUFtvjmUswkgsUMYrfDRmYoUBGurtamM5WK9dimTcxu7tdV",
  "key2": "5sviT33ApgFGHtZUfp2tSvZKeAssCYNuiMQTYzJvZc7ZABDDGRo3RySLpeDRtME5sDC5a62sCRW9TxcgaWyZTHgY",
  "key3": "56963bJbZCwJ1naDneaEAvrDsaZm9iC46TsqYb7gtKNacLsDYayzPBfsvaVYixbcsuK73aCaRbRpkzRiWqhkVFHs",
  "key4": "3RrK6T5VvJmZA7hMbHRf2bAiStMpY9tBqfWVWo9gMfHUCEJne7TMLwJ9vkJoehSBk4msao2STTRo24aBLPwtkfoB",
  "key5": "24SG2AGqppEtWuHykfXyLRF6FswFD6gnXG11RPsauApkfkR4oRMBmhbjQS5futL1yAkgxdXgmNNNDgQgZTRTWMvM",
  "key6": "obCE5FiyVse5tLNDKmsKoWeVE6NWwNW1UHCKhunjxE6yXNHZ8ugK1CdB3tZzAoe6qNbzcndTCfUmqifdFcXQFbc",
  "key7": "3SRRJ21tkDgMbQJ79FWYgPT3NWZrcpWBoU7GTHV2Vvq5A8FxhvdMqYtAuvi6gK5V8Nocxws4JHoYEaqyivj99RDd",
  "key8": "3viTw9doFyZSgZrXbaXM2VxPHDTL3iAY4qa4foDyfm8tTZiJmMevSrsJBeZefuSqN6L4eSsnxoG19QfNiCqVEer",
  "key9": "3Hjm98Ti1YNjHTD5D2h6UU9Ycwtb9uVNwwNfg699V61Hnu8FoPqWvGvhTypx5CmnQvyHhG6Eu6rdd27xhXpcDeR7",
  "key10": "5gRirW9UDVeMDQ9mU9P7i4SXjHEQm1iFVQQ8WnNCcqPkVgPvTqh8groCJQ61NGew3DF5aVAnbxhwmdsnjycthe3Q",
  "key11": "3NcaWmzKRKEPSmy4LHcnjCrGbDWNCiVBqerT2v7aijDjbbGV9FQUXrhyqxGH51ZHV1xjcA6dmRZUEajvkUYBqLP8",
  "key12": "WfVDbMvYiYiQqQE8mgu4Zv8LKQcFygS4caWwfNS5yHYz8VGrG6J7kawQmiR6JYvao6TELcuCWcNiERUtJ4nc4Ss",
  "key13": "9DztDSg2uajWnsR9rA8RTGwEdRDtDygddrx4wtiNJ8cWZKsqZhdoGeUWuzaCFatCM11KWLsMDzq4zbXkeiib72r",
  "key14": "fpjm86dt8zNTuDEaEPrxfSTPL8JNAV62M9vA3BdyrjjVFbWp6tL8xDVtV8tMjfea2CBa3gExBoShcgUBD1qMrdd",
  "key15": "3Rkw4AXzUfNoeDFxd29ymj862LaJp4BmS4BJo6wbtcptqeXWTHyxKRqzfjfT5qvjjoAypRrvVRzuYpMM9UL2DX3g",
  "key16": "34C6YUiAYKikEfrh1ACxpjGf7kHbc5j5QkSnBn6khhMEwRMqJgMwz8SBFCpy5ryvfL1jJVyuPS3TdzxAD3W2jU7j",
  "key17": "FCtrsYUwxg83hj8ZDQwnKWt9dJgdJ1itkrbNtS6U7g5zvnzj39DzSXv5CARfTrHNDtXENkwHqUC8mVpeHQyY6e8",
  "key18": "3JrPFfxZeRv9GrFCkPUfkDT9943AKzVbXqhXYevZ5jYC9T9pCg5i7hLKJJsvdiazH52iyW83c1CrRAETLWkvKvud",
  "key19": "2nPWQCZ627UrSGcuAAZGAfbyM49BrkMsBMwSVaGgU2RnPtZpY9YYGpib2HfTy7b3UT7vcNsh3WeXZQAiG8YCvpZd",
  "key20": "5uyRMQapYcxLHmoVfhCbwYUfXHsqXcYA6UM9H1m1ug9UwSeEAkW6PoUtZa9vcFW1n1MYA3UwBLZcpa8kjoTndviY",
  "key21": "5E3yc7RupctBuTGjnRjzXk9H5mmDZkpqNPQBHq22KiacDDV2N7z3zojTL2Qasw8W4kfxUaYnHVJxCPzDQmDVCcff",
  "key22": "45zdvYrQfrdeqDc7hJVTU91npNtDSo8CXkegJEd6FPYcvj7uBtew9yQGep3KqUhCKepNa6RCUBK4R9fuTHBp4K1W",
  "key23": "4nAZhXqyiQHksezh919X2ZhTXhyiPnk5JJFXNiBPWNVVXJiQLQnRCnDK1RiLDsACPpMKZAYzYUVevVtG6MxxYTB5",
  "key24": "48uTcLo6jTZGMJCJpGUtFdZNko2d6WWZtrDxcCgXJgrbiJBM56vZkD2dkVmx6MCqFPzDJthWUFhPEcwPBBCbMqr4",
  "key25": "4CqsVbE4duoXuVoJAsUZndZNVYccLZHPqpjg1HgPpUhYEjHmBv3sC9AxMURuzaxFfEN42MYpy2tbPy7Ve8epMC56",
  "key26": "485Nb35pYz9a7DV1DjzmL9w8g3imPjVy2ytDfCBVpAFg7qgiqtwQXcqV2sQ8w2HLfM3i3qQ5BFhMPanUifoVmtLP",
  "key27": "52VjQaNN65P2ehbDf9Qy4GzsVs2JxZmV3rjT586zKM1E3p9UGpkaXJsXXWyfirs7SJj9FhGiFH66PcMEMM3a6cfW",
  "key28": "286kKerckchVXSz9FWx9KxrSuAntAwbmyrQK5qS7mVaxZgqFan5RTitRQzET3m1QwJ3RnffLWbabrebaHW6YE3Ce",
  "key29": "3t13KerJLEgjZ14QzkuiXa12Cd1dKvQJdH72ZfDHcJDaZrkMBBpzMcpAzHFp1Axb39CeBPKjHrnTPApCzEmNP5hc",
  "key30": "h5qPnFnmdxSbN9yH9s4gdQfabBphQqpYVrTKvCkmCG7w1yrQfGE2sUBd4A42Uj8XU2nXXsFYDKiJ7RayRZ3hn5C"
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
