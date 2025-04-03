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
    "4kqJVvkRVQ6gJDL1Rb9Q7Vk9uytAF1rdgGEHxq74Ux1tKrA4eJS5863oVXyWWXzztLnasnUpJ6RAfi59at7r368q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GSdgZzbeDjU5FDUMCCQzX51HJKMzpy6WyPWEar2ctGiASZ9aSyouujevipJwAVZCJ1La7xkJ2hyZkt8MKWjUeBB",
  "key1": "4ekQi4Mft4vcZ6oeC8cLwMxbkYDeftvVzdZA5MCHGMpyk5W3kXUYhKpXTXckoY7ktFguyedW8Nu7Rf5Uxcm1A5w",
  "key2": "5ox6xcAFH1J4TaZ818J8pU2bfnKey8G931NArY988Amb3oxUjiysNShK33ugyxUJkKA8J62SSBgctcVxZf2FXJ2M",
  "key3": "5kZEkSpNQnjfiL3gNtCD3j1unc8MPg8PDPjSdhD8C1W38VD1563rfj9LCfPX98nYHT1sx3iwftdGdGg1jKT3qp1",
  "key4": "hHzgMoj5dzqrfFEm6F9Hb5KaRU8ayRNAEpmQ65E3dyjbh9wUG7NSaTv5cEB6vLqTXLwf6yaGPKq9LBQD3e3zsaY",
  "key5": "5h4bQG6wtn5XHe97Wtrse1YfjGxRRwoYVzHyNYCSo3tFaJkt7ArGvRPGYzr4ve5eph5BNsVMqbZDcAWJRG7g4hPV",
  "key6": "3toDETygTtABNFcvMQrJjGWWggUeBWDD7q77U7DjtRbVfzhPSrwWrVFG2rjKdwYQKqS5BBXEEEc4j88PH2N9TPKx",
  "key7": "KQYpH7M7BfPMUfmDngtYmTFYCUcGr2rv8HKSH95eJLGbQQuxPtiNCiS4GP39N9T2FjLW2xn8oFNjVNqmJeDSJfr",
  "key8": "XvEsz7PwX45B1iTb8GxapG7UXvQYBqq4KfLEURRMvFvXkryJcPMeaoFSB77QLhtxNejqYVFuhkVRJkmkVyZ4zHt",
  "key9": "3Ey7RoECM1Bm9DCtiYC9awjznVJpHwbQ5RnGnSLpFbpBDo4Xyv6XEC9FqcpJ2RUt1oavUkR1VNMUijbU8spRwVLB",
  "key10": "2d1yWoM5MyYX7jpaqbvoayzoLz1Rp8P7FZBm9JJwU2B6FWG5ukcpmUCmsHMQXsNRg2XeqxaB9eGCpoPymKAixzmG",
  "key11": "3EDLPytMyjoHszvtKXp5DAUjfma2qj2okuQvheYSiSgxsEgdqaCeB1vUrdbs5vDayTc641LPR1CcznsaSZpTqSUi",
  "key12": "EvMqmBitGpw7sTyjbmHVZVP2news4T6cNJH5kEhjzbbmFGgowkGVhK9fmzg1Xba1WmQ35Y2yVBMhEWZxceo7PZF",
  "key13": "2f4zY9ATfXSZoqzCB1ZgGkXGq39Kye3LwRc6wxXcNaDNVnhsq8PaPNiri1Z4Zcr9dafPdRu1huQa62HoPQ2unnaZ",
  "key14": "2UtyZjFZrRyCgf3Bgt55PC4Rcun3Ud5CNpNDDt3WYQjHF8EEgeb8qcYrCAp1va1bRSYhoxm8ZTbsDSyVK4d3QKm4",
  "key15": "32zwVTSoXLQzz96wDR41Kg2ajauKjuRXYcY84zNsT9nPaH4hfKgo8NFEV9i5TBtYEKAnMdXJk2n3wupKUYZKGmK2",
  "key16": "Z5BvGL1pzJg8qFUAAuRp6Ccmcy6FySJoW91JUGqT4kjaBNyQcgrCqsAKrboVi4R1AjBRYaw5HCkHeYEF3fzex71",
  "key17": "uo7Wid4RRFTRzey8r4PPRxWsnqH6XGU6xtuUNgJYuZxj1hT1LT9TSuJtWW5omyYT1XQYdy5QBCggcBY3UAA2t9z",
  "key18": "4ZeySeqXgmARA2txnCcCjS6BkxN1X8xmcbSwDvnDRMbobe2YbvcM2VwbRzW8Xqc6h98TFpPyQ4eiuyeZoG5wuxdb",
  "key19": "3u6x9p467PeoGC1QTtKc9KDcMeCaRHYfMu7dmS4zksfGw9V1aYTSAcgpFNCZyK6TehLLLPSXArnEUjcEzLJwwHUz",
  "key20": "3pwGqYAnRFoMSa9WJmqdMBgEwxaB8GeKy1B4RiJKGByGzUqd25wzwXMrXNcpXvv8UwRdxxhbhES9FujunEaNUtZE",
  "key21": "4NwZornzosJCMhGJPKWS7v3sRa4PrgkSrUpfmWPQYqrfa51u7WYTV9SYc2tUetyjVUbXs46FgJg3QiDsawUcQC9N",
  "key22": "3vPd9jZCNgWtVdsJLS2vT5thPojLwLMNC1XZtxYSWD9cSccf1CBs2xGPAooiSfBMWQxYgG7Na7fPmFH5UvChE4uX",
  "key23": "3iv6k7mvfTL2PHwxLBtKq6bau82A5cbSGZHCBqFRoEY5re4UPqJYv581qZu3BjefA61tJDqwFa72yF7roDsVWGb4",
  "key24": "2MdCATqauF5jgfvSbJmgDLDPUTWpNEKKJz3kXeGY7QbzeTRR8gjgJDJFUADu8yHqJjjnTi5MDjqfut9nihXbvFwy"
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
