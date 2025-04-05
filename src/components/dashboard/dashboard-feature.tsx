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
    "31nDhFbrTxTNC7dGg3AejQFYUVBzRHW68d4ZBUmSyhNPyiK7jan7tdVYCsockGsN5e5T8KxVeUbbhprY5qfj3Vec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hbwhmta2fHbTAMtULrCKgo9utDcsJCSeBzb1scFnjoXKELjnMLPRj4KFP7KEsqWNvWkvQpP1vYJP9KyApEmqUWQ",
  "key1": "3Bxdowh8z56a57h5KRFMePgh7mKHxxu1e2UmX3fK97ykrRSsBoteTHGX5fG68JEYYUEjZhooqWkSsyBsmbzkJvi5",
  "key2": "5ujtt69JoFBh6wEpJqR8eLZ44zEmX9qVTkQV1Kthcb25hGgyk3Wi7eR3jN85sfYtj2pPZo4DdKPjtTzLbPsJEig",
  "key3": "2jgiSHZ1Tjeha36vBNjgWLCxFm9swJUZCVWydmpLo1HFbS7239oekRSBZrT7TCTCzs6dLuZF3x56A8ZT1JdCbmGP",
  "key4": "4AVvTqEPfbSi4vwyXtxJShnh3KyS3uNFzAvetNvrSs9nRrWosfXN22o8VJecLuvNVAppHii77uw39MPVvhXSzQ14",
  "key5": "51DUWNakBcQuX4edbsHCbaRk8TiFjTYFGQLJr1sjQxtqZpW93qoGzBqMHw1dFe6q4ABcGjG4gTvu2BjA7ig3Dw4t",
  "key6": "4gCZCSX5hFS6GGDfHawvQxmhyuxeN3d5kK1Q3FzPofnEk3HVd3mpioQNebvPnQ2Fwm4fqDfaVYWiFh7vfHuY1mPj",
  "key7": "jmUJ1AW7HvD92NYt2sYAciuSjGBSJbN84pbKCE5etRKR3aEpPYeDe5CHt4nWThibFCbPRm5cFaefZDaUyY59Qb9",
  "key8": "NjheJTG8wauQj9DTXrueD2QjqxqvRERsLWqntj1gPk91AE4x3b4yDPKaTwtYx3rk2Ws4RsX1xRfya4KgqYYr1gs",
  "key9": "dd1CeKBM16Nwb3LC7Gdk4zrAU5SJgWWSCUT3nkcdoxrEwL1xmZUTMw6JriZAJ5bwj8z3LBcbpZr9H5AGh7V38bX",
  "key10": "2sYu6orrwgoqUbWG9jMH4WFTu4e63Lbbuf6h8A8k7gSpmdG8WqJAANDTwUrY4LhVp9Y44B5kPCipyrb7iYPsTkQH",
  "key11": "38ZKvZ1iuKne1mppz5b3g7Te13XPRzrHMRdWtRs7KVWTb8YVb3M9sCFmctaVsHRxnNTHYATRbZZE657DXgvg5Vhm",
  "key12": "452iKFiKkAQufL8sTfjPzmhEFEGewJrjmRJQLpBaHuM6i7LJBcmvmZfBSNmojoVHnQqmHSRhUZNnDrK6KknkTVtT",
  "key13": "5c44g8w2R6hHF4HYPoy3U213jissY8ELFGW5KvH13iSTQAAzwUg3WuSLLZBMJAketsuxpzgJ371qMBTZjHBd7GQA",
  "key14": "24f5oxzrTHMuLgt9RjRkVNn4R4GRQKv9uaG1AAjtYncTJkgdLyRU8jWCuNgroyMRjaGHs9q5Tyc7t1xsusbNdmNP",
  "key15": "3TcPf4LD3bMaJYGDdgd9WjGikGKtqKUJS4MPA5MwFTsnr6gDtSiiSJzNKoQFEvu2BME7DEjmsWd5xuUhM2LNkwH1",
  "key16": "3MHodrhxgWWdBgDvc9V671L8cmVxG1KBZbtPet9euzhrhHLzD6UqML1zu9HCqobWC9eVjeFhDXijjjBCx1zGbrUf",
  "key17": "41g97DExByBiDnE3x58sWboSzuwHGp6hdHW78iYkXTomCt5SLf87w1QjqLtZsdneGis5YcEptCzuxoe5bKaoZhr5",
  "key18": "2doprfxr6M8uxBf7uS7XNkcLTLVJWYu9tusSzQFjbrkf7ZANJMjainAskbuhEA2PtKD54WCvJxVTKMeZ6SNNtuTq",
  "key19": "AVY3SYwWgi4RBZqcQFTiYnZzpAFunNLnQLc6qnS7cnXWvUzkcd6GKV5dS7PeaRS1A85UEAEdCmMrtzxmYZkXpwT",
  "key20": "eZpuL4sUBiBicpGoLGpyiyqFrQLtnJwZSyMpvaz6hj7sQVbVaWoSoqMjgm1AGPLqAC4VKcmCQ7guxF3wDnfxuUq",
  "key21": "5x2iRR8izJ3P628hwDdk3JGZakxRKUnVQypD9n8J5me8Pvc4T6CmS2ZMcGu1yads8G9tapt9xaFpHmK4uSD4QD3w",
  "key22": "3ozLk5y7ppNP9F82J3NWGfGijMHeFc1poubodshL2VCzLDPvbDEEw3jBQ5yEj3DAHQ8Dg8QBfN1Sdk8FjEnFy4rU",
  "key23": "bpQr5nM6sbHkymTDNjvA7gFyRjCNFnBmn4vsVYKRVi4j7J1rLtEvDJNjsyM84zrFnyz9GwGqsD4cnEHLbhK3x9t",
  "key24": "4aYWVBKW7sQKKCZKqa2mHL7w4RkHWDuB54NGRn44LWyBwif7wSEJtA4G2ChpZJXGTW6ACmHnLemtajmA5pSnJydp",
  "key25": "8UJZAHW2Wxw83ToGak52kxggs1fSCJe9NCub4fGqEtituDQFvYaQh5BapKwBxRRVQfrkW1uHNtxvzYQksQ9JsmC",
  "key26": "41KQ9Ujzzi6hiB8kTLskeXrjxLZVs7USc9d4hBwzpCZssEd7hmS81smU2ZJSSoozh8ahYEcx6KAQ5QysF1DLCGzK",
  "key27": "2LfnvuDD5v6UeGnF4qM42bdwTaHGmk8itDRQ3svAoVCCT14G9KVzzUL3etpWgEdeVqN3j1TafoCroxPjebb4PdaF",
  "key28": "4eUk7KgvPNYxqgW5ngT6YqfmZd4gjE3idds5QNsyD4tehx8XYhVMCeo88oJTpXbwJMXj51ELC7pHE5eoccqAToye"
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
