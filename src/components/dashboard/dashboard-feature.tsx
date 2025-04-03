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
    "u2SQmffJMFdG27VyCcgzW3v7pXMwpVCjfDy7cJvQoFzouJysaEDZobhEKaJWGPX7bs9nJDq3rwkcFWZDi1BMw7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UttbvTS13LmcLG4WUvK5zAVxu9xXdb865R2fnf21B59gFwU8SK69zv28c71NZwWy1UW4XecrjvpSMmoNPXzFVbG",
  "key1": "3wc9byMqFqxL7s7XnGF2DYA2nf35SgGCdtZHnP139K8JEtJ5K6wKtTn8BynjmAx1h2rtxMyqVJkHRrqN7QoEwSSZ",
  "key2": "HmLd9FQ3neRhmjLCBaGGoTTHp9faGgrzsEd6LJiyWBTuXeReZQuX6LkCX8AaCfLLB3MR73eMSknwybj9U9hBTym",
  "key3": "3S8dH87r3C91DujRYRrLkXGUFDRQw41vrKgDK9PRjJon3gEc7uyccsdE8uZ3EEpB8KjZt1ZVeCBNMWmF9WxjUkm",
  "key4": "2ZNjjHLEUe82ZxwTeKWwrhz2KYWWoiwaLobjUigGbckCGKdHbukrvKRXu5yiabyEP9sPHMpqLyUdKhnEvR569Sxe",
  "key5": "2Pz2qfb3tVks6DDA9DWG3A2HYcZQA17BmuZHqxZuWRp8H6U2Sk9KCV8Q6CPN6MxmwXwkgHaFUvaSTjgyS3RQbKvj",
  "key6": "4YZs5P23URDo4fiAbJsLo5UYm6RkDWhmhAHBhcD83oMLvsvJc2TD483Q2EH7b7zVC2AwPY2uVYyT91dpeCetv4Qn",
  "key7": "UMLbnLTNemPd8puuTWYy77rfoxNToCp9WavAYhw6K6o3C2NiWnG4yQVUr9N4AL52F3hk3aZ4q5izUzH32VVMWsY",
  "key8": "2TQ21SvAiEY6TFdtsXXBhTSeazpVMfegXqWyxEPqdDZoKg64cuHszovx4ExvvHC6DdiL1ZRUE2spmaTB9PqoLFU2",
  "key9": "Ait39sEiYPV1aUbEVG9hLzoErofAZZGgyBWxaNX8zbS7Nt8WFgo5Qm5kpig9MnF3QiVYXeANRyCdKAYAEerg84d",
  "key10": "6WeTbaLSBLxAsBxNd42gUurM1WCUpVp62RaL3MHTi8JMm7PgLoZaBCno71hSgd9akVo7WYUze9eXpgeu27KK7dM",
  "key11": "rjAzwKazxqupZw1W1tXBmMWcBvrcCseDWMd7y2vkfhLg8CxsajCgJEHC93K6TCZk6uE9gSnbPz5GGxmPx6w3QdE",
  "key12": "3CoVzkiGjH8FMW1F4rBrgsxRZN9rr2h7NrQQenb5vmykVaKm8iXSqJooGQqoNpKveCvKCLQ7BKTv6BStVoAXZ8ht",
  "key13": "2Aho7yYDTSePCKQHV3p7btCXkuptR6uvSrm3LQ1Ux22z2q7i1t3BizoboAd1D1zU1tBEJmkGmwDAbaGbBUferzDX",
  "key14": "66ut9aLfVVzMWKYYLVf97AiZd5Nw8yhRUv2U25rEBYCgZf73VkhQUtj8PEyLpQjTPdn32wK4gFCD8BFFjhqnM3oy",
  "key15": "2TTaGFyQePGgQnL5w72mgGahiregQuBRRuq751Zx7pvCR2uKiy5FdFHymwzgSbkBXoQdoDPV5n2wCz1foq7tipP",
  "key16": "122QZvMZvzH5FKsLqUe6Ggh5RQFqo8CsRKWngqVtTmuXvEiMX2PCiTDAUGBH8mmnMxbTp5CTa7hoxdYLAFbbQKYo",
  "key17": "2W1RfzUK1TvLekHtd7YQwit3aCJt1kLBJV3cxjYbfru82ewb5C9EDXYn8NQVJtcyMUk7LnLiRLi5sbPYKkAemMtc",
  "key18": "5ErnkrijZ7ZPnJNkndMhVy4tg3zPH1YjGhJDR1QJ5QWcU6tVXQoGZwxmz2qsTLvDZPQos3VBJtyrF7Anruvp39fe",
  "key19": "2hvmyAD1RYELheSoHW7ub26bTsYY9WZ7hKL7CaLoUj672EnVm7thSFbZGxwbqYoGKMjLRbfpyUHbsn1txJW3V4J3",
  "key20": "2L4as7aFoRb9KyAys9ijDpjiYmbpCYenWLdRTTh8g8BYM2BopbSYx6XjRB49N1GFwXUqHGQVMGQD2szsYhnKNmFd",
  "key21": "3jjq8QT7Jc6Qxi4Z7UQdEXP5DNVxyRSMhcTiF5CCBnWEH6tKqgG5VPuPTBHDH8Yu6SH9zameESiZrJftS8u3Ktcw",
  "key22": "3FRB7XTC5YyWTubL3A4ZwkbqRKaLrJYinXWvbdyzqnMKeYYX9viKcBmnVuW3mYaBXYZaY8tjeHMaK4MQtDYN8S4K",
  "key23": "67nqotccH1HrsBvg4YNuhTqbWfDvhNRnb1x3vrCH55nUVC1wnsgCQHJSCKPDvm4Jh36BZSk6gwhKSaU51vaiejUq",
  "key24": "3tDtuvnueYnAEmAkUXdsQieHhkBC2QoVkBhfaAeMG7HLXGtF9h6axBCPdtuEHsQr8gUdCPZrKQqF7eoQF7ZNxvnc",
  "key25": "5Kxz4Z5Zdva9wnYkcB18AW5soFR7y3y25TAn6fknb813VQcSedWA7UvBWZFjTWrXXJUmB8tyGcePMJk9GnjVm1Pe",
  "key26": "3KhZMGW578p4RQtqiALJ7RvvJV7oytbPZFdCM5sRYJatBynd8VerEU8YdCT8rNPoUwEN77pXzzDDrDipTPp6vPJn",
  "key27": "LTWGkk1zo9nMzUaoGWmtRLFHeLWZb7hZhA1iwdqAHMcYguretfDsYLPhiT3x5MZvXTA2D1DnRzRdCVDVXqJxAnP",
  "key28": "5mpJUzksKvectnLYqdnx2PMhExgekQt57nfEtLjBnHM1CaYQr9c9bhPTVguNb4vLqY1SektnMWSkxoqDxTv4ZsRf",
  "key29": "5DWXmo9aSWhRsc52NhFUBHy8uTniSJvEBHuyeM4qehL8niK1ofdhTii9neHVxXUGeUMTcftUGsG8AWH6tSZBn8SS",
  "key30": "waBAPX9i94f3sKrjvmfvdvpf1DyFyLrjNwTKwDm9gs9oSXXnMCXA4WbhVMCw9z5gBa7ES9dpKz3hP34ekYR7Bo8",
  "key31": "3giWi7mafqAmD2UVkSq1kz88huYmtnbsCQmo2Cyd7aGfxZPZMaG9wCqBwgZbdvoV3HJiqLpQYvSXWzesJo6JPZnC",
  "key32": "bQipLwGbimjJFXzX45tzF5nG5SvtMty7oEgVVteaDJT8pmKKCYhstziaTCLV7LkStDbAeNWxZ3LnqVPFjNTMCeZ",
  "key33": "aZhrtApscZYN2nQYvcpJYPgZXNe6JoVoE1RYR9GR3wZvaxamDDg26PdJYVTUHu6eQtq23T73nLk4AHxQrMCe12G",
  "key34": "qfhjouAzvuYGBW3yPormrEtQVfKgo7Hd75uX3v6QbuXj35pF9Catz9zXZFKJjg8TnimAb96rwE7TFF556FkL14H",
  "key35": "4A9bbmwMi2Q8XouVuZKHHvAAcpWTZPuZvqYa2sXERRjuR8mJFUk22vAusoAy2mdwe4fMy7Rjh55depMpPSMB98co",
  "key36": "4wL3k4UQhSAaEptzT72x9nxUDQnkvsyBomKStHFzcR7GCGkiqd5wTo3GfNor8G55hzs4aEPQ98B9AhnGEoG8j84f",
  "key37": "26wMckjRLjZtAzc3MVDZYKhqvF7NuCqB5zvkYxrrJ3tzwDyoH7uxcWxuUp7GNAbbBh4jV9dnuGuAJNimQrbdxo9c",
  "key38": "5TtCyZyzPLMjNLucas2XLx8rYvNy61wkAfXABfpbHu6YHT7AiJwewDddZnoTMQzbe3ZwWqk3d7C6DiomEDFNPv2v",
  "key39": "2rUbKkkSoNa3awGwMMeXQkz9GvABoWAcT4aggnh3zWJ6hk9gDQBhRApx16NpGstqvESxDX9ozT34mwjky4EWNkhf",
  "key40": "27mCwjNvpGkTrE4c6a6AUFpzVJDkc9cpgAvZWT6G9EBuf7pZHUtTVavGdFey736uEdEATmTy2kEvK8KfVfzAuSfB",
  "key41": "2jLSGBtDRgLKSxu2cvoncXBosz5LXMNVYVYikgUtKttxXveNxsQ5trLYp95VenytcHbC3WiyJSL2WS51eqCBEhBx",
  "key42": "4F6hKeG9Dzg7QY4waEkfYfzciGJ7jo8h2zHWC8YyE1BJXb1crzPoTEBDqPWrbUFEyrLqfGHcUJ7iwuo93STHKkXj"
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
