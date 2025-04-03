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
    "4ce3hXuuDnV3J17VrBYU3rrZ8HCcoy6STQjwhpEaZNcUBSKXUVwhJNCLpAqN2Ug9JUdJup9sFpyt4fkFvMpeFKP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pa6jh3Bwcv5saw2rhbY3srogRVFEDNtaRnyCqQx6wHMULQsax5jR499vhW6AxdX5TGXqYQDr3sm8QdgSkNpXSE8",
  "key1": "E3ByaF7FdY2i8w7B242V5ssYxBZeD5iT18jBtBtHZBc2mHowetPr1pLFTWmRBaEXH6TUoRPPJzwTKoepWkA895h",
  "key2": "4h7buGfiCE5vUe2ScXsRg6DWHzXMdZSzn1sMYXH4mXLa136YWj4grQEizkzmpLi4fS5MGaZinmvogoKs9XE3c6Tt",
  "key3": "2bM4yRVAGhKeBdJ4cMgoAssB1yr5Z4qEsRhMj8otmrCGRfLEZpgaAHoEWRoA8t9ZsxNC412Dw23hqazBMFZbLR8Y",
  "key4": "3LyRiQ8BQwAagnt3XZCwEmP1FN8s68awz4HR91xgEPdHzbXn1HLdhLr4DSumxEjaxAqKiXzmmpWoDfsK8vacnSod",
  "key5": "26bPNXjwB3mFhhUoUZkY1WdmUSVHt5kAe8J7Vm9CrDmwZvurkLzRdvqXsnopKCnBibErmP86XLBpMvKPMjSD9Bgi",
  "key6": "42oE6kbKQLvUtAEWKDZaFooHPvzkZJbe4GSDZ1jKxGF6WmACDp2hdQjctS82iPgVteXLERUn3j5ShfhnNgYU9SXo",
  "key7": "3LLNu1WyZ2CXhEc6EW4cUavihY7HTMzfT1tJhMBxJDCDfK16MTxe9DLet3eMrzyqLGoQuvGgGHrhZE5nKdG6trJ2",
  "key8": "x3J3p2H1VMWdY12YFtAjHoJPYdrLFkg1B2WcFsgisUGnYs6rZVqmRETMLRFsveMchRpFriLN5WVwbQmTZbReRNA",
  "key9": "3k7iAfozzRjGAAUKKg988Es46rMHd2RngzQf7AckR8bfvaaarCP6XT2cViBTj7DTLjC1PV5fAMLmfhUajftPmfrx",
  "key10": "5poa5XbeavPNwTWWTFbJ82BGcxaW1z2tzqBtL1Q62s3ZTs6kjNZ1E68hWhdTNiuY7ZpQUD6hiHLmTjbsdfp1zG5i",
  "key11": "4sPTPmz5FaCn6GDKdtCT4z1X8RXGGaGt68SYdJ6ABKCknd6ARKvXCrfTnt7K4dDT2voiGJJKag6ioz4FDG1UJ6xt",
  "key12": "63ncagrApCBb5mjVbA6wTmXrRRewi8Ki1d5A9egtMa6bJR4ARnVXLpgjw83ZVe5Wu8BkNBRyXExspRfrPzfQLoac",
  "key13": "4WHd1DQ9WiaQ1XAR3zMjdDyQbWzqr4jxFJbeAxY7u36uw1w2zoXsHeACVJtZAQ3PyKeTPR6zyF4H7LTuW2LxjXKR",
  "key14": "3Nv23WhTKPDgZnJPMXGLUfMZTjQk7Fu3zV6JvFNjQtwMcj9BY7R4jdRogQJUanokWYibqMm1dbZ4PqMftWB6pXxD",
  "key15": "4EANQxjwaVQ7HaLG2pVsJqzxmxu6frAbfZZQFKEx18DE64bzR4ZTCb7wdE9khySUmVMybUYpzD5AL4NgMXHasxte",
  "key16": "4immmPmGTwa4STjPfpkrQnRSZpsYBhygeDbDBc3qumUCidfh46homTZc1x1vStJDQmHEMJBvEZdccTUW7HNfotAf",
  "key17": "3mj2FfyrTHEsc5ub4tVxRBgSRkwVqbP9GhCSWaSeReqFjxe99dKWUoGGsXmShrnCa97HPJ8d7NrEWJbAWqQs7kn4",
  "key18": "3KGVxibARq6nmxUx3dTWRKaQAi7VEPCP7AcpkAc6yH6ct3x4HwaasEVsdNxCFjTi6pJmSp7GgG6QTAYAkYo4ArDj",
  "key19": "4yn5Ccw1cYsdtz8gTHJem4X7QjTaerxvmtBBpK3Zr2Yh9i7BCntRdVDsVcqsBY7oUpH4hCqSiZpz1qvrdgoma8Sn",
  "key20": "3NSRVquz43Z66taNjzrcR4DZb9ihgeeci6KAn7Jc97x9FgrZGXnZN7ondmWAJfAkrg3Lp9EVz81q3ELpW4jKeJZ6",
  "key21": "eVQJBGENADCrxERQbhLsDhQiez5SmqgWreni7nDJfEVN3rqZbqL2XvuPeYanubDr1Qdjr2uQ6Vr3eboTDPr8ayn",
  "key22": "GLQ78ieDaaqYcZrJ2tvDtihW7sj88LCcatcongrEeiwucDqzULrBQi7zAr7rse4gnroQRiDHR5VSFksx17vKDRz",
  "key23": "23E7KET8EQMQpbWyu92LsMiUm8QNHp1ZF3bowLn29BnJ6kK3n19hL8j9nnENXZoFDm7xLLm4xxkCLb1xcNCArJRH",
  "key24": "5vrYWPGsSPVttBAAREhFzjhNAQ35RoqV1LUrrJPAjZYMjFnJXtJXY6KytuZjQzHvcYCQSrAdY9xkBGSCetFQ1yQQ",
  "key25": "VZwPiysgjZaYdQewQdN6Bf4b4qGkLCpLcXFxCE3nyyDuPTDJu7uGPPnpuhRVJ3caAr6okd9CDkJGs86FsqZ5zfK"
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
