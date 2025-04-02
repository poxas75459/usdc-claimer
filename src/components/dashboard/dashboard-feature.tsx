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
    "5nCCJDxb5ME7RLCreueTYTqdjXZjKPLxEhsadbtqJAWJ32zABWx88X3RjcU6cXg8BKUgUWryCbZJbWpjKqU3er2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cg1V3GpUBxjicLbnevzMdTPYkhMepyVhDy9h5akseEmhgUjbwWkVu3fUWTsP61Rpir3c9gGYQ98JeEcp7jgpZDe",
  "key1": "55Noq5GpUXKMCrYgwzQPiaUDfGPupW3eQGfqbGFLGf96c53vK7U5mhxjKrd8C7GyHCA8qGseaR4AVV52aa87jX5g",
  "key2": "5W8SL9bro3hk7kWyqggFqABc3iQ1JUJGfSs2dYArMuV8WT1Ednab3XtMGowB7m5BedamBRpUnspkDSQmH8Qq3b4X",
  "key3": "4mSwcxYFh9pBiR3E1edesYFE31hfx7Yd5GAEkTQXVoSMvYr7UQDvbtaACC7nKceWJ4RSnFnUk6m4Sy7GW48fC4rd",
  "key4": "KEJoSLTcJUC33xSnJRYg43ju2BPVB4pnNENi7M4okprwXLvvZ9vsBwrtSxxyHH4y8Rve92bh5hgUPHYk3Ve6GsM",
  "key5": "2vUa2pWWXSuRc3uq6eB3S2ZnaG1AUdtxrf1fvQ9RzFuMiaBEf4w4iBJxw8DkskNUt5aYF7QweCMwN7dbrSwZuYyA",
  "key6": "41v9pbskfUjyuvyy9fEP6Ad2JEdeZapuP2uXDW24GpMge4LMgGgrjgEsGq8b3pFQ2AcY2HRE1CtAqfEuEkHnQaTs",
  "key7": "2stxxYZPpMS3Bfd7vjbXBgoJvg39jNgVRLVZHZhYcA1bAZ971BANMjvYA3riB8syhVGTVh98uWMm6MoGqmioA2oR",
  "key8": "4SEWAdA2LPGachJeg4wsrtdNEUUqqUTSXHEgfvu5ezBEDpp19dpaym6T5iXvchDPpzNizcxTR5paj3FZ3gXc8DhX",
  "key9": "5Xfbu3xRzeCJuj2ABAE5snV4MQ9ZFUpY1rbR7iV2pDRmsF1H9u4NRUfkkb1JKjrzSMVD5eDcNUeCmDv9V4JFzqZg",
  "key10": "5xHw9J8EjjRqCBUCaCHePFvSefTLSQdApyof5cPxcVknz1jeMn9Pz3DeW4VNYsBf5sxZ1YCP9foeQ59maAprFbhg",
  "key11": "2cagEMW2inin8LWSVv2X6WB3o5uHck2VsAmr6LtQyARJnrg1kcJrDpBRT1PrX1FuM18rWiB3RUFH578nKPFoxYN3",
  "key12": "3CMbgDYT4L5Y8DeC8yXCiTkPnQDHjxfjGR93ojSR3NXBa8zmvLKfexadvbZdP3KKiMBLJW5itmSe7FdZx7Kv2Vpk",
  "key13": "4b5XiX4wtV7Hqu8p65XtYEaPgRhtohokor5rfkfx9xXg3QBH7FbnbCxs8s6YpjLKsZLYQo152fu2ZnvE8a999r26",
  "key14": "5iiiMMSseRA8FrmwcD9kAJkjtvuZAW7rFosMvj6JCKgruSykde1zHCtsdxo9n9dZdHB8wRVwPH1FMGYj1fS1C46y",
  "key15": "3ybp8u5iypKyhkQekiQUGTa8Gs1MgbM3Q1hsT6ZbUzccGmTMnHMisstDgPBfZxUcvcLsTXaYXpHFHKcLPK8VVa7K",
  "key16": "45SY6L5Mo2Sh1n45AVBxEf8pn4ApQ7LcNrFHCXU9aNGL7m7RcyhJFzYtDUThHm9uRnRiQoojkyShuj5QLa2FZ24f",
  "key17": "5m8ZuFDoAouUzm9BSNhYib2DKdM9CwyDPhs98qRVfFMextDJ8HZcXDXLdNFMdQRYybLbbg4CCv1d9yqQ8N4M1mTU",
  "key18": "o6R8s2KgQhuMN8ipfdaZF3dUdFkJwaREb2fbUXVft5ukYUG8RmWbhUYqbFusdtzrNpGiGvbh3N1QpsERY4eSrFL",
  "key19": "3GMqTAKqv4zumh8ECPQ3MsgTK5c5jrChBHVMh9TvUF16LEWNRo4kNBgVT4EfHxAp3Se5rLow9te9t3PrfZGRMjBS",
  "key20": "53GFoDoEhBtettS5kmCwGHg215z99DjtLPZ6TCGLiBiaMRkpSN1Z3nVcZ4CwA6sy6KqtwPbTvw693KNfGqXg5iSD",
  "key21": "5YUY3pjz25JivkJUPpqTzWhgB6w8MBvBAo9XvLBZZc69cfPLhF4o3uPqgN6c3dNwAAX8pzn45Tc95xhpip3khZ1k",
  "key22": "28Q3XTN6LhcE8eLEY2C3BHER2Mq7aHdHhvdA1CYJjjviRRuksCNGZdtPy8M2tcihMH3QitXgj1nvVR68Y5gPxSTg",
  "key23": "4RdbAE5DBmPjGkmzEVvYrhGWUqQG6HaW123vvzYzdUwB1AyGYYdgwKUiqmRunp16D5zsoyXyZtuQiTMwEF7cTomt",
  "key24": "4D2jQ57FeCscHRHauG423VM6cAPTewMa7UU47PDxwpTLSnZvqftAiZieoFRHAtFg1GWUvH3E16ztGCMZBhRh6qkz",
  "key25": "aaiedLPLYwtDiZZQNBorSrJbKAu25xkCMSAPU1VXnfvfQYfcejGsm548MvF1hrbVqZDygg2YncShSH6oVjdFfCx",
  "key26": "4U526d1MfqAwRAhd4Xnw1wGTFQnbryExWfufyM5mg2S2C3vj1SWDSF5tMn2AL3QXcvYe2fgY9zfhddkaKpEPTWV2",
  "key27": "4tvweu9HX5NA3h3VkuHhwXKfnddGsh5R1X5jsn87teECTCQc4HRwTX7FCNVknkLtpugUnyg7RqcY4XyordjkWgLA"
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
