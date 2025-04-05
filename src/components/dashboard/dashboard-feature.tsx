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
    "5jkjUzVjVMs7tfBZD9grYBZdAvzZ2aimujoe496L1kdcJLsQ3mDrnkn5udderTVbMeYkG3mEzxAgFMQCue1F854B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2unt1hE5kVAMCN36yJuj5ek7FhTLjwBBdmBFCNeJZh41DuSA1jBpkbDAtME5Y3k5RPZs8zNTXFLCh9gL7JkBSY8u",
  "key1": "2pDW8XX4p6YX1LtG2begYr5un5mt7BVacMstVjoqFRsJS63wLgRztiSaZdnaBoGTs5y7QLHs74eRPcbs6yMxfAM9",
  "key2": "3KhTYQvtKfZgxkhWxQ2dSngJqH63e5vWKQboVvpfBmA4Atsz2QAVbzX2bT93xPZUnNDGjZiiT41RgtArQAvCEKJa",
  "key3": "4G9N8x5UcLgunCCbDhwTdgVWY1J63aaCiV747VH5y8FWRoXwgHx6grYQnEWWkHqr3vrJgYLFVpH778UZYS88cxP6",
  "key4": "JUEDVeenfAu2zfSCnCLVi82QeUS9DFKTtsKmzXRf9tr8fT9QLaak5Tkau7kAb4ujoPok3PeBjgUfUPzuwoedaVP",
  "key5": "4K6842wMRxbj4Daw6bUMRxkh35GJGCsDv1YJWHciNeKtR1FVMdVUZhZpD3MeqNGUCyuoHeNZRGaMTukj5MZg9N54",
  "key6": "4CWg8yyCL6neAy6Sn98fq841gPJprtQSiMqCVqNbtZDqF8ES3BZMsFyhjz5jYgAWko8JzXA3tPo1UwXfSFwqbV4W",
  "key7": "dsAzNbVreNnU43u292MTDPkED1QZRHHfja9tDCSRijNZYfoUwZfV4ShiKyM12UbMFt5TCMTyjiUySDRXtkRpLUA",
  "key8": "3W82r8tVFn3Q5VbJYaqARECYuFyvygC1gd3vBNttTBfRGSzrcTZtbADAoeAueTtsBBeJ5gEZaYdGrKMfaKi8TAXk",
  "key9": "2TA6djqAYE4xK9wXnkweh6YAxkDEvi5MXMTkgz4B4jeaCeyZxKj1NkdXtLtEDb9YdKWP4A6XEHRKNWoavnk5mHCn",
  "key10": "AAdGQ18KbrYU3bL1eNDxryy3n8JqjYk38Yn2nb37HCesaSJEtC9hBT5abA6G2mAmDSdaFa1VzDEAkWrFxBvEu85",
  "key11": "3dn2QSJr3C799djnN2YC9emyyp1w6DLizCqoJN2aYgZsP2z4jLsSzrBBJ1KwexcLcujtdWbLsYRwf9ussrA1BjVe",
  "key12": "4zD5rb17XsyKTMdaHoezpHga4huwzjSCda1kqagHd7aKZoDRnys4dKDg8PV96gmREoGbECnFMLv9khnewCJqmB4Z",
  "key13": "4E7ycBHYBR3sWQ9XZDG7vTpMmgWar5VePTVh62kjnXYvKnKikXAYXUQtr4Piv4ruWQCWcbXgBp1t3WpP13znDgoQ",
  "key14": "ghEmcqmBfnqUwrGYdqBUobN81ZuspkGrF4vxrBvncuXS6fYA8pAiSGQDsSWTC3LYEGY2RATxPBR225U7sPQTcLP",
  "key15": "4wGuQB2UKfnQdxY1w5dVciAkvNDMKf8n7NxgHS4XAAaa96iy3m1HYgt4u8kXhJCpSVsMJ8QKRf4rtYEFKHbVdKnJ",
  "key16": "4XvVn1fxdqZVWyeN1myPxCKGLaZ6qGrJRvKMva9CKxAwXeMGWrErJjr9AqFNcubyoFQpfB9nyUuF69dGXxVE2vbX",
  "key17": "3NTJgAcSNoQFCNnxiC8FBTuo47DCTVfPgg45gLyDwaKWoTBuborRSFip4kvvfKrMF3qkLxCNK2jKY8PMeCFZfo1X",
  "key18": "4XVUfbXDDd6Bg4bqB893mNxPzWjrvrGMuCenWkrn8ZoCXsLScD8t1xE3Le4P2AyFoGTecku6TAMRKzCkzjemu7ug",
  "key19": "39inJs49EscBnQxpmeqPjCJ6d14WEJSEkdVSHu26BtuNDgTa99oBNzYMtjrQr4HAF4KJNKzTpGVTzZ3V24cCMt27",
  "key20": "2VVg7g1HjgULquCzTUJMU7fubjaubyhrSdafCN2MWvCjrBeabG4xp3VCoQW2nVH18WbSrZGc9HX6XQtTNh9L9qod",
  "key21": "6K479RroBDEBZvbnTtHkojNWbA8rcTVANwCP9smJb7srfqKndsiobcgBiGbayRx4idanLFZqXdhSmdvpZ7TYLDd",
  "key22": "2bc97eyKkyqdF7HekW71AvWmgR4pHniCxioYgbMy8sUH3gqBoo6iUM3qqo1MskDXMLNLMZyofSN7vMgtdFmERgGU",
  "key23": "2ADVoLcrh8sSYJtjdYYqdjw6EH8zDwEkcfnjDGpHbUycvyjj59wyswKtTiX5vNsJdURp8DAg26KjiYoGM6gUkYbd",
  "key24": "363p9rY1cn6y1aVcXm2xGLuk2q91AXUyc7PNUTmV7X5ejPty7C9ePs5SeYXGCihNmccN2Gma6CVKgXYscEN9KmDj",
  "key25": "5zygx7j65yAwQMwC1xQPSDvWirdmT6GGJyfUhsBsymXPG3iDeeQmDhNsUtadgAHeDgwXVaCMmpPmdqQiyit7Nibv",
  "key26": "7mAWaeMpGd8mQS1o3gzpEUm35k6nVrJGJPrG71PRoYeXrNUUFpCTdW25GUyNZXJtSB1kkg2wFnyqzFAoV7bjfhv",
  "key27": "3SBH5eYEp9pE9bSrbdtub2KFM2UQs4NpjVcAjRMaPDQ8VR6MMMm9K2iJ6oDvbqwQHMnaUv91SzRoY6XeCdc9quSS",
  "key28": "5WskoqSU3m5VT4imgrw1ARAKaxQQgdViXBMzw9NAZ49poaedFRpvJhGbZWCazBzQpHtGoQUzu7hV29Tyajoz5ndm",
  "key29": "3APbX4BBX7XB15cP5HG2ZuWcGWPGgsKSK9zMU5nRukFb1BhGtWvw46D8LKqGgem3eo5wHkcc9QHE3ihUHX5vM1oy",
  "key30": "6N7S8QBrgqE7dTizuj971xDYSWrN3yZDedvdjt3nxpsLcyYYwUtorgw9zB4zu3sxPTSnxLyGgfH5CSptF8zwLpW"
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
