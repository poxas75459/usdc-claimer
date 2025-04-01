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
    "2xZczSZ9asUSRXVaR8HoZMT8q93wVUKnJdfZf6HfmUzayFWVnxQgw6XsTAeikoTPfV89h7uNkcPq8cshTe38qff4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jqi88wVqbirizo4hNBKUAjxkAvrTBPcy4QP8xaWbxwae8cxMLvAPTppb1jPNU1J4g3wz8wNJV7W5aLt2v5HpMEz",
  "key1": "4K9CXH4D5mapQJBukwV7H93XoeiYkdbgFLBwZUiCmUmofvDYxbjDRV5VvdAmphBAYsyob2THHzmZtgN3MyrssRwG",
  "key2": "2yNn1rSAPbts2b2fuAzgLn7kbpJ64JYcM7Kav26G12n1nvwcCp1Y9C8WUPxDUU8CnQPboLBA81E1CJXoHZTuwzFF",
  "key3": "2wVYH7VuwLPGY3WXaPKibrL73TFd4oqf4dqBgrzxr5XLQxdMEjHuMfxdCmAw2XynKnQEYHwJmPEqkR2kHqryCtHF",
  "key4": "VJmDKYfg9c5VcvLdRBNvcht2X7Xtz5ikqT4efRDLFyZYKP3vSat6WprcaTTDVg74wUjBP1CUiWV9cp6BV5tEqJC",
  "key5": "5hNZB6pEnUezYo8tSynnL4x33KCvYui8YNEjyNV7PFLj9YNqeDpDCtmhrfAmVXGbeuFJEM6EjrzPnsC2dBnsaryu",
  "key6": "599B6WWSadvGNAiRC6sxFm2SWpLWRMowbMuN45bHvYeeXwctGfTJYxCsKdLR45Axyds8YCHYxKmhcSS5exfWwxwb",
  "key7": "3VtAFLofBZnrZJcZKeYAYUKPhWVKnbZRzstqpCux1VbnV1gpP1mKUngwBAL12cgNP3EMtboKznFgNXXhWC52JXPX",
  "key8": "5WrEDwmHX34cp6rcNVRUMvEanRW9azcuwU7AMvSjmrsX5Z128wafbiFHEcemQjhGgtG47HxSmPk9v6sHVUdZ8r5K",
  "key9": "5buLyKmX32f8FbFGHNLSpvvZb9ZMATb1rhnTFHgp3PBzNLnr9gzSQQ25XqtyjGQnM7HUk1koPXZUd57uKDvwg3X8",
  "key10": "3AJ2xKw4SN3rHojZhiVn2xHfdhgq8U76mGJyJUEHJbvgVMTVZDBXL9kT381cD1rsuo7firFNF4xmxzNYCjzRHevU",
  "key11": "65umP8H43RczBZdydAekYGLfcgJdTWjj2QE6tBPQxheYuij9co9casHkyvdto2Ujf1tdZbJp5QKJix8XN1j2UC1C",
  "key12": "3EkRkjEUhAfPeixiMff8SgEeV4oJnZ6cy6UnmeDH9cmfpsttX7UVE33zZeagjHtKbHRPfzRa8VaRS9LpZiPnvv7A",
  "key13": "438Nkdk6k3MUqZTSAeFAff6fTRBhWve1T1sszDJZg6XsJvpPWbpFB935ga8wNr3mvGfLjtZcNxTitpj1P3uNWuHM",
  "key14": "4S8tfZmP3RHYeJCem6vsXwoyVmEhtdR6C4eRXjkKGHzMZvYfvYaWCoHf4R1B1vs9xNGVti1ahX7vrvZFvskV8Yka",
  "key15": "4F3hYLP2NDrvB5p8RcGs4cK9Q6gbxTK9sNekWTZZYYV4oMskg9ZJ8ygjWmfNyWWSutaNv5EfqzrnnoeRdHXrz88G",
  "key16": "2acDC9z4KrvvbqxRpRhqF4tFRniuojCNHWYoALKMv2KJLxXQT7GzaDQDpktaFctQEC5bcGYnHy6DDWeY2SK5bJCE",
  "key17": "3SkKqSYMKmcxtYnHmP9PEs1tpNAX87YEVkRu6dLgGnKzgQ1bQtHfaPCbpVznwJeED7KYvkkKGUSZMNzMEX3LViLy",
  "key18": "3hENatzcN29ihZBTgADM7ZgpszYY84JFXgNK66SCvnfX4e2oEbsqed2jgqp4sxL74ruCRvzSYuwBHVmt3yjqcSDW",
  "key19": "b6ZP5CMngE3giGwvSyf366BZ8wdnGXXK3CyAzESco8Dvn9QgJvPKzPMi28ae5P8hhkx7FzpGZn3KwFuVDoMf5xT",
  "key20": "4iX4Ak7BipAY52jhS8uxpJK6E8fMPffAEACgj3CB4djTdcwtmxyZjZ4bqhcP9qSe9NGkHMiZyp48sNU2fuRgWtjD",
  "key21": "5V8TUUqKhFvfzmujUKq8JKZnjFcV2jHwNaZAUdvLobtqLtfAzENiLxdxNSKi4RCMTQ4MMfvkcxwy3XgewtnSF5Q7",
  "key22": "2fX14DNwZhgUSUpFp3UU4oRDd9MSsn5cDqrXua351YBJoA8LyVpaNX5cGzyeeozakvruQb3kzPaVxcngBn74yafC",
  "key23": "51haLW5yyC4kFVbZ9uSrHSwEY7oVEHBFbTEUJ5sSo8XKqhBYTgqeLr2q5DJcD4ZtSBBHT8oCT3YwxTk5EVCEKDKG",
  "key24": "pQDyasmbrMqZJME8n5Jyf2PETgeMLyNQ6kmboyzh3hi17tfwahM2GxDzCCjABF8EUfeExiRhCQoJYaBcmY9jYbR"
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
