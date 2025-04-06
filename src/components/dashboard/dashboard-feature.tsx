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
    "5cXB4Fzkb46XZvC6LBHgjbar4AjRGZXUFRVEji7NyGUuPQttoBCZrgXxwn6F97uoZ65rNDsZebmaajUMd8d5GBDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZPQfZuJa4q7gSC2L5rNgAgsgq5dJEPVgX2YNMeokRFZiUwoM9M6NPuD4znZvgWbMH8V2fbex8xNj2ANfMSPmrXS",
  "key1": "24UzmtpmV5pKNpsCFqXjygqAVaeHwkFq8bbhbvkFMchLiyCogPVwPJgNCMhizhCbTD7m3BKWJr7ESAExRpkkTQPQ",
  "key2": "3p813fWadeGrAmyPykHvoWUHNifYhb7rc5WcDLjJoHhHRfu3CFqj2wV99qEdBJavXjrbTmrqKZgwK6wWuGtxxDsK",
  "key3": "5Tt7a83r7QzNrvhNUezky8WhzbZ3LxHs5JPkqLqD3BZvL3fSCDbmAcyJQx8qrzvLqMLRmi84uSfb5sLNFBW6YxHZ",
  "key4": "61sro1m6QDUomB8c2bzvJL4gAPgt6qnRW459M1KPaBD5JAfyour8chEXHysjnjx5H84dfUdqHti1fyxcBSSFvRA8",
  "key5": "3Pqh17uHksXSDxuAY7VrfexfM31HNiPkFzZc1xacSpnQyNtvE7VWe3rTR58ocTwbD5SoHggYVK3A7YKxhZQrnSYu",
  "key6": "rJvaz9yEde3mS9zMe6fHj4cmtcaTzUWRQotQnBtCsmg5s7cFPNLpzbRwQNaBsAg9j5rH4yWY6a7C13A1RbPoW6K",
  "key7": "pP11AMi4aKhZyvNnUB6yzxKrL6QraDEsRPV3t1Hu3kD1mmyzq4xsBFUNRRnatyd2sFEXwPFbWd2MrXC6wC69bA5",
  "key8": "3q6KFTkcBrugLeX9EdV8psgMxpP8gQoP2djeTHb7eq8KjSRFmwbuo3TRjiKzc12S7q5emMH4STXfYe79fRYZsUmz",
  "key9": "kRxUjc4kdgLneRPuZuEFrK5jDMgUDnuTtFpAADp7wYAg1JH2KzGYBUbpaTgcQnXT7QZGYHnmUL2t9MnztbiPdoG",
  "key10": "5HbB6dVQGfiXdj7AxbE3Xkx8JFy1p5PvxbpvypTYNnWxaNrcR1bPBMhc6KUELwuSWnRe3JdGUrNfpzH3U5ZzwFpb",
  "key11": "4nJYoPkxpRGGaNn29UdqpKVJusAUMajWQLpZYWdnFwdxQPyn7xx4CdwnmXxPPDmaGQUXcXoifhRPNChvsLK4A6E3",
  "key12": "5yxiRdZoojLfyuYcusK4ee92HMLnJtUrYHgwqxMTQFvwZKnPiC1ggcpfZqty2H545eLbg8m6KADpYqRpjD8Z9qMK",
  "key13": "3F9bUyXmjUgafEVwAvWXDFGxyC7zbRFKHd7v8an825WhojV6Z72PaaEv2kvWhgJxRPdGCvqm15TUiuLcuw7LGBWX",
  "key14": "Yf4b3r8hMKEVisKhD144U1hfvGiehRkQJjUJg2gdGXpo6TBTQ8uCc2tZQtRXQZ3T1t9C15BAzUgRbP9FFuALeS7",
  "key15": "4JhhJjGXk1h1uNCfmWnFdu9khX8DKqX5VvXNFRY6ZmMbUnPfTpdrH1hWywHYqK766Nthi1uK2v3AwJjTMwmHm51f",
  "key16": "2xQenDcqBfp7o4zzsT2P3vKJwi3JkQihCENrGiSpk2eUxxBdsPw4RZQt1xizTG3sf9naXXWyyg5rvNhaQK9CSFCz",
  "key17": "61RYJPa8G9YgdQMLFbUCo4dcPuXyymTmQyLJV6Qs2713gXfdUz9gUwTL5rQDw8y6VhMQzCWvnkejpDNcqn5fJY8e",
  "key18": "2qabWPSzFDR1CqfB9pXruR4FNPCuq8PEvsUFcvKF87Sw1K1UNZ5WRLQALCRALiM3S23HpJnLTC2746ntTSUP2zLm",
  "key19": "3RicroqxqF1AD2j6TMxpSjmQFJY6yJyQDYSNepobfp4mEq8ZyCktfGwfYZPRmAtJzRQ2MZdWr4qCyVkvQQVorXcf",
  "key20": "2NHV6ttYVrKWfk6wF45okrAPHYfhqHVEo9SGaShJB4SCuoeKB3i4RbUd77usLpvvEBtg2qKBfUPmKQDTZq83MHve",
  "key21": "39KMtKyAARTwtogKm4rsyixr8znNPp3w6eUbsDDa4GDaCr9qnpiKj2BEeGnHefgnv8y7S66c18Pyk2Hg4ScGNixn",
  "key22": "2iEYKjzu3ZQzytZF5Q5tbtFfWrn6bghyv8QVSDegRJSSs4mpt2pqx66NGWTzgQzNK6MFmLNysfXV5FmAbrMbzZN4",
  "key23": "JYKwRTgahGf5ynZsHHgngUchETktjXpk4MbTey8uXVqoYuAbpvr4tCUgrnPmRjz6m3yT4riBmks7bpLrAcyo661",
  "key24": "2E3tJL2CWMePK8nm3rGtbvzYmeRXCazf6hAM8TVAsvjUvBKoW57q2gw1fs5StfCgTny53mzg552Cz1tQhqDZATM6",
  "key25": "3fq8EpZyq4LK8Su46R9ZpgLAuVaVG9MDk1b84H6xEZNf7vE5xKvFYiLMgXowTNXB44UZo5tYgEX7wB7RM76NKoSw",
  "key26": "UYM5tdfjoWa9sccwYjQhnKP1NjeHLbY54UbFUQJNpG6gY6vcA9J74rS6F6kAmEHW5wa6kX2GEKZzB88cBX1pFjv",
  "key27": "4cXZh8SnG9M1LcTgiPnw3UwGEmkQk6HdjhyyhnWtYbCnWwWxMajpLwrv14GeuziYX92KpxxXejAeipk5ZqgpWjoc"
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
