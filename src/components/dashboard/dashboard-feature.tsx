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
    "4jTZyKrDRDaWu7MzaQDruSGiXZhXCfJgpJY8deMwj4FoBoh9Dh3skxfa8Rno9Qn1zXLknijtL7QPgecj8WBkyi5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RxD8yFQY4tjCijhfhCRFB44PBmnEFzYmuSYsDDCCwszaL2T4ds2hVe54qxc5BY1LpgwjjxNxVL9XqzPnSinREgv",
  "key1": "4VbpVoTbH9yDn1dNrtp2FCXEy4UrMcqaAN2z9Ycq8nZEfXkR1cAB8zRGkGX6UzM2QqkhVcdSrQyqv5Bj75Kzec9u",
  "key2": "56J2M4t5Htsud3KnZxLYWC9Q5BRVupGYvvnca3X2PqgKVZYQ1CUo2e2RuArPzV3VNDZoav3gnn2UhneUVFGGcwbX",
  "key3": "4NSUrfziEKfP9to9HihsSUtFNgey8SuG44PK6UTnZcdgw8LQUdgfqepZ7XiE7oPZ1beEp6PabYe4AWtrZefS37m2",
  "key4": "ruaFSFH9dutgXbRnfvPwksgoG8pzbKtzXoTczqSXPieNudH9AJJeAUdVaEmXSa5wz45x9NZZa9QLWLSxLLfrQB8",
  "key5": "2GQuHm915vLQfXjkUMTALGL1SZo9TAoADStXgjbS9XPvMBndDm28kDXycWutCimhHtnEpX3yLkvaLD5UsFvpWf9K",
  "key6": "HUbrXAnkshfRLUGwDnK55K4gJDDx6opEhLfT8q8WY688Htc3yRFGvk4iw2s4EeYQh4vzzvqt6WvU6jaVwoFrJzs",
  "key7": "4F5fbNXquKv99W4cGSq71HWodyNzZhmts5Mr1vPurmNozRkhdyRNWYFuBotJBPgBRgwkYczsWC4WWxJ4NdtyVZVt",
  "key8": "sTyFcTkY8UndHvK3XghbUMJHjKZ6vypHkBD9ArbBuBpTzmuB4umjmvUZXQfdoybiKszX985Jff4qeZSJrmuzEP4",
  "key9": "3ExjNQb66vU1KNoBvaN4vcFB2SahrtZxRFaxrLawg1hS7sQUbyhQuFLawEHzveyayFwxWbuuWz4nJm3Vnmoe6jmk",
  "key10": "5cNFGjctFdSor3bdMW92JNYGNcjUop17GNudN8n5FfWzRXigv2VHEq4poeYhdhnHZ6xA2YakpujtGCiwFj7Lecfh",
  "key11": "peZweUtskYSytvkrwpQrs4YkG1CJCxqZ6UCrSA6dmJxXt5s6ZZA78eq9hEKfHf8KBkHxPmPGgomoL1QxHnWNRPM",
  "key12": "3z2MD1Ka84vZZovY7tHqgfrC6mFkAiBS6VzuEtKWr9yvax7jstKyaSXrcobqgNaDFS2NdCdRAaBKKCksJ7JDBGst",
  "key13": "4Mci6ArU8e9QZwUKETw6LjHhL7GMfBnAQWetzb6axgnsmEJXGEa1GCt9uS5QHN8NVM7zRf7Vj4pPsSvdPU8v8TkE",
  "key14": "5B3EfMizfiMQN3tDEeoaTEStJFQ13kx7EkZ6SEXD9H6g6pFQUZhcf3daeBxat3qgCWGCUAynY2qzTCtG1drbzuDt",
  "key15": "3hQxWecMYA94majNmFHWmaGTmhALVsqYxQtWNmBKf1hGCEPeGvKBhrT9dzcoPt8vCXYDmfmMdZSd8g26pgYKb6bN",
  "key16": "5TAFKpp69YP5oRPdRfoh6udR1GW1q9maUJ158CehjzrFqGYbZeXdvh8G7pvjfcynGqUF2rPuEAvnQ4ubjrJWwaPw",
  "key17": "3nRSVKwrfPtqDvN5e7ie3b4ELuFFmqvVpHNjt5fsRjs1jmafoYhwvsQmuwT56ZK13Pgr92WK1JNmXuxth43hAuvU",
  "key18": "437ur1FpHbz65Er5ZQHhd3pCA5e2XDVxCahQg96top8rtcLqcHMDL1MUjBq2XntSVWxnZqmt3zM5aJ6cnDB7UkJX",
  "key19": "3CH8WktcSWUDCUFq7MSh1ASLvL2YFD8V6bNDQut56bVF3V5xyG5mATx88BgwXRjEEHghRUTBP6ZpZytsxTuRn4Mh",
  "key20": "4hgQW4xbBcdp8JRotEx7qg5WNBZXxUsv85pX5uCq6xCLYZ2EN2CWp5VzrESr7pkfxxPx8wbTFnj4Fm1VqDEGaWQB",
  "key21": "493YzNa9GwPEMSvSCgT2B5izrD1Z7P1Jk2J2uHeWVuwKZBDmWYdVJer16gL9swk8V7h5pnnD2umFTGqLKdNptaGT",
  "key22": "28yuJubatM3jGsjrtR9RJvbvbvCfjNWrYxQDVU4Kj7hCr952FfT9E5SMiNK4BqvoawTTtNGLAAXCZWb3mqTu1F3r",
  "key23": "SvzAJSWmDT8ZXft8wy41jqJk5F4WNbYVtenvpFi3nyza54A7hKh5mvdswF2kKVC3A5hp9eUrxaWhJji5L9zWcJ3",
  "key24": "4yzhv1ir9uNF5pdAxxmEuYZWE8atxHZ2vtg7qFPMZcdepgoJeZuYU6muSCuu3GvYwkkNZDYHM5PS3H7Rkwp8LkdH",
  "key25": "3DLHsCv14sAwLicY2wXnityZLNWoVjkTdW5GyCPSex38dXwo5V88DsBGjgZ85nyd2yvc1p7yZbQGc6KwmJVzoQ9H",
  "key26": "3fCgzsziE2a6r5qubEN84y94NgJ4LHva8PySVnavuHiM6PGWNPrq8mEKCtkuYqaiEGqsG5oZC8DFgKqW7MJV3L6u",
  "key27": "5vgaNNZjpr7ZSHGYLwcxQxB4G9Ls7PDDGU79pfBX9gHbpMMDSuBfri1tTSv9yDzaZsFHeoeo5ay2uiPpG9W2ScV8",
  "key28": "H2hVh2ANb1SDmMimrqybhZXMqxtPJ2HXW8ZyMXRkbffUiqgeTHS6SVWd1sTYRkfoKDucqEWtNJuvgaWrJYSkhG5",
  "key29": "3W7mLHoJZ1gWwAkqNuvGFPvbN1JzPyj4W6EJpRbB8w98YYUreB6W1M6qsydYa6ApCD3b2RyypbbUL5JGbxbdB5V",
  "key30": "2r6ZG5mQbiDsZMYXppA6wogBxvASaA3mZvg5HLqs3E5yfYEtUKrotWx8dc6TJkiyiG4vaEa2PLCkkARQ5io4ijk2",
  "key31": "3f8m7cBVkMnKfyVK1Hb998ZyA1FS6HXaaSxzQkafJakocd9r3dmt8JTJ5GS9W7Q8hTohejuRgYNMxneve3yMxeoQ",
  "key32": "rZ5bEPz5qb8vGu9TmjS177i2MG5MrMpfdgdycpmSnxTrgrYLqA8PRvseKsuPigiNBYL8GPr7rA2qTjDUCFtH372"
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
