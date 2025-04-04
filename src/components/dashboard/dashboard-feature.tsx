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
    "fWb2PPpSx16FGZU2GLcDvqqcLZT7nGwwe7HQrqZ1XmtgnoPtjb4CcU6Y7vkiBsMyDVZ4CyrLAAz1LAcs8HYp21Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8XL3UwZTnfTbwDWiBbYvuGYs51A51FvP3ykzpsY7tSSboW7sn1iuyaTucgvdY4SqcJ7Y2zkvyG2kWEUJHtzhxP9",
  "key1": "5qBBfWR5uC7ALHCVdmsCgDPWFSheru1pRT9zBZf3UauxgsdahqXxmfKQMjQsdMYH2aEEnM3XkPjB2J8UB5Grxgfp",
  "key2": "3i3Tx4CoHGtkdNFvH828BdzKbXjGPVtkEpjcHusZTJDgNBvSXFBYruPoxqdm9p67SUUXbP49Ci11mMS9CN4Ai5na",
  "key3": "3PPBM2T9ivG1D2X8VjaHJqr6RrixDdU5jM9G4q7q7SYaSXKB1DSr1bR3HypDbhNYqcnVa16auGjQhXo6255UqV6T",
  "key4": "23qarEdbTveHBi89inUzMibBMQPvYPDpcvfqxjYpQgiE2uPhgDGRAmEB42u13Z4sjcZdN8vfA5Bw2xVUioXwBVEt",
  "key5": "3yUKnAhvc8d57fVuuxnLWhXjqkJoQpAncXwbmcPcUGPfUMtUJmLEqmHA3XeRZxzEAijxX4R5x2VrrSvohVjixTuq",
  "key6": "3LkcAyPFByP4BdGKDaeBp7fRQkVjwbMxS2XZm9TESCUK63ojPtP9R8wVYh5BpreYBAQGzELqwenhYXYBa7KgagzS",
  "key7": "4Jz5NDmo22rHWpvpzaBedHvnkohYGVfMxu3itDQ57pG5xHJqqACSRJLwRsMSShZtFAJxU9BLNaSM8zFfhYkftPWu",
  "key8": "dYxkyy2otTsU6PYUz1hU7iG5DBWsd1Gq1iNNqZfiAFaeHXuKgSofhZMhY7vC4fyDwGs7obZekuH3YtLpKetfYW1",
  "key9": "khhGoSz8yrQoLwKykaGqqWaUC98jCqtZgu8oAt467mq9KHPy49ZxMSHgnmtsjunNiaFDfJS1ZC75mxT6SvBP5Fd",
  "key10": "3xNCSYzZtf3bzbpgsEz9LnLsbQVZ9S1iunhSzdGnVP7tV5XjG7UZCLzYpY6oPjXymuMkq8SYcEigsFqE9SNLqcwv",
  "key11": "2zMLuoexcsXXCqCsqabTB3ToTAVDcxMsbRrSRrUCAWwZEoFAuXq8fzBmNT5gjHcqpSTQy1fM2firt51no5hUy33f",
  "key12": "6FkMXVwKABetWhB619trDT6spA33N3opqhSzjGnNY7EQaaZJoMxJePvqXBPfc6MMKLeCMGSAD8R6UhHmAghS684",
  "key13": "48eBrNYSscYdoniMxi9sWvsLVgbTJqHAoNaViDxmjh1pg6AsqBtfz6NDeHmwAvzdR7vk82cdX1bBNbWBFen8fu4q",
  "key14": "QPJifExFuPBd7uBgHJpSzFQozEZk1MMtHhpBYD9tAHeDNWhNK69QkkWvn91cXcSiQQkwboaepgPvLPZZfkju8hh",
  "key15": "38n24odHXvqa1tRkQW4fYfrifQ1f9SKHkS2JY3WeJgKyzAjwhrW4cxCziztupdBBaer2AV8kHKYUfj2tQyR8ca9Y",
  "key16": "zL4J3XwjjJwd9dnvp27GEaVTsouNRDAFXXFBzDYvhpkJcGQNvTgNZaow5WTNy1tzQv6jdVrRfa6v28bYbNTtbZ6",
  "key17": "51ie4NgqebX8ykDS26Use8yvpVXcHipRLu9s7SdNKcRCK2K4wW26WTTx1pArzGdbuSKDw5UFABn84nQ8RZdwyzsA",
  "key18": "5vqvhg71yw5sVMPcpozcZ5reVhzr2HHo1PdrtvrWEFGk2eA4GRaFJ8mpjrj3FhnGRqEjiK439ky1hZ4ko7iLQ5hc",
  "key19": "5NMxF44wJ5UqDSY1RmUAGrbdAmUAyVARZKkVVSZEHMGo2dXVcL12r11YWYKyFMyMnxep9DfGziWgq3YbCSCU8hGP",
  "key20": "5drDruh16YWaxbn1NciwfUg99agfPBsq9HUUCHGdNeuRH5AsMa2kgRM6XGsVeHRP1C8bmdegt2h5XYM9azt8bF5G",
  "key21": "2H6y2LeuEYAQ3VM5fnnQGLyyVNF282hRA4tDAWeQB7hc7eq79CaTHtMRYytJBXWcSSpaupnAS8fHFwVnjxvxLvqT",
  "key22": "3YbgWfcRuKyR6ThPXvUSivMPAeDv6Mff3Uv4Lw2vj5HYsSGE8tLJpHZvh46MrVxd21mA3o8RzkiFVqtcFUjnJFUG",
  "key23": "45KYMbDRrNb8qsxEaVcFsJSesycN7VPtwWX51ADXDL9h1LWN6tKuLo1Vchrj4ubbXyEU9gAM5Bf6a59p2ufG4Yj5",
  "key24": "FzRv8nW6WeWSN59Cg5NhpTTMHCjnK1XrGxLPZTCfh8dgTy2Lw4MqXmRdxySBb9EbQtctCGhbwx8EuFKLzinggMq",
  "key25": "3D3Y1pXfsnQV49GsULLKA6rpzkd1WD7tjnB8PmAQHxnWbU7jPwpPzqib5LynaZByN39FRoKemhbieKuCigKK9H9g",
  "key26": "35DkTcGPyeuatLPNdLvqqc4GdY5hMTPbhX7AK45itFyh78D1aKxbbjyU55HQ13hPUZi1vSRQvYCNAQzG4j5xCRu6",
  "key27": "2VsN4C5zTPTogoUe9AZJfdDm2Cnrey9x1wR6HDJ4km69Z6jeySuRucPECAeHEqsSY1Mun1duvQsmhwjYpvV6EzYw",
  "key28": "2D8ocZ6B6Acvinz7fYAQNQP9uUZHuT8QfZ962kZUuGqgy7FZicPrwZ8wFh2CkaiFf1YacJL7zL9URnxTBoCVukap",
  "key29": "5inMoVDFay6hbQcGPzCpiYjZugxRvEFJveVvWWVhij1HRfKoinMxeoir8RfJwYYDozm78gzcw7rMpCfyNnwwyoD1",
  "key30": "sRkftd8w7txL9p5TXCCH6LqkfUwCmWELgdw17f4SxPAN3C1HsToSwEVQ1Q88phkrt7BFhcYLSq6fLRdNMgtzDyB",
  "key31": "5E288UuaVu8WFHLWeeG99zQ9T2RBpPhP3tZEr1gcGoSD8r4LSVaTutCkiLXQs7nqPuvx86ZwHchU6u3FjRtq7xDK",
  "key32": "3Fry2ttWLQgaheXZDjUGiv1gCugh14uYwBBXYyixnCKuavbvWG8fJddrW3MqrCrc59AhRdZo3bLYvd4fbxwQcAnN"
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
