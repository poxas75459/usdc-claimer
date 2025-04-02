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
    "3dSAtmmjL2NsgKFSUV7QyuJSv11qbRrC151tgP1kZyoe49yydaeV1RYBYYag8V8bM6aKoAjQqhtt8ssteRxtPKbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T1EpWGjQ9jAGyPzQTzBsnUutU3xK9Hrd4P8zQXuUzQrcAf94zWq44DbpnUtt5mC5FXWrQboDMgT5byn6Nx3aCs4",
  "key1": "2Tsp1HaUTqwAfJ1VgfxHFEy4NS819xH8QcxUs52d4rwe182PMMN2V91vVeDLW5gPifsSxrG8DLLBe2ew2274QEdR",
  "key2": "3kLbPR27ojQKwMuCUqgzhe2HC26CbgSKgGgHxk3t43zayiEe1kunLQ7L5z4EP8LHB29RLN5hzUAJRWtUw2TjJoSE",
  "key3": "4WUiAFF7vXQKgrvpjcLkdkrBqB2qAuJJUTvL77q5vG8VVCnv8Z7ZmDcyCEtbXdWZUBiAChYKp9oJ42Lud4nXhknD",
  "key4": "3PAPYPMEat1qojUYMKLYePdL5nuTwDRFUuc2QjQZ2ZKBN2DzVnNdAFP4xexqsdP5Ps1SQjUB41HuwRNQuquYvQqf",
  "key5": "3wGQYPUXdR53LgYWUmpCTJ5sqXoQ3g5AE1xrZZ1EfRWSJZmt5VsCKrYKniNJysPeb9JHdEgeGsxwQ47DTL3FJQeE",
  "key6": "4LGBRmSU1pxgKgXUhYhKkXNmm6dHbpJantprouCtngVWCxLR1yWMUU48xcmVfvSZDbRVer366nkhppDEXGXYKZVs",
  "key7": "2jQUnotkUExXRduk9h7XzaQyW8W1RprDqvwvQrPRneFh4yB1235SBwTVMxXP1hsscZdzEsUL7CJE7ktjjYJPojRe",
  "key8": "cLTAum6rv2BZPB9BudGK24G6yCyikeqxz6drfjdoPACKz1D2wv17GmLorYrY7SnGHkscj2BVDDKn4LqYeTExB1E",
  "key9": "iT9nspWbyy6FL8DFEkKwXsY4LcdyvwHkkwzL7G6Pisoqeo7ahF5MLCt5ELYt56EEQJDvUwfmW9NTyDJxuWLhrHt",
  "key10": "2uRrnmZDAA564T4aB9TKoZ3dCRecX88HxRDynVwASdLCmFMH2wwqe7kfN5oFVNtU4zk1Qj6VYzGVC3s5tmT3KbKY",
  "key11": "ks78eZK7m5hccSmzPa49PYtQAH6Y72A7sv7oiPB9oFkvyhNr3DZ5enXHMFnwDtBExBfDzgNe5JkgKTZztWzdRdg",
  "key12": "3TXwja9XfQ3uh3PnwHHupc8EGsbAbbmRKxfr2xsvbzuHRZEXVoJWZaeu3RxszAQMdE594koj8wQUkhR3RwiVVUHx",
  "key13": "2YVWbB1QvA8ZdQF4aPdy7FR39RGA2x7jv4EzNkxdzw5thaoZ3KCYbeXmCzVRZG8Tq8rGbSy7wMZpEmc8xjh2X4TU",
  "key14": "2kTKq6X1F9FzB5MuvbA6Qg6rd89ntGiyrjTkErUGsbmhr79mwoMv6MTghdfBCvCL43wWASQn4XwX37Xa3mEVYXz2",
  "key15": "4L8TMGMrYTedGERFnGdhzEGdEvStxHcPYwJAb3oVsX6yemahzWtSq9TP7UURyH9MfeUBQXzR4hPj2aCDSkNzWGY9",
  "key16": "3quWXJYkFM37nFBCDscrR5XKgy72yDzx18tKqJoCqmNKMe7TXK4TYuUyK4X4ExgjoPRfDV8JeCBzdy9PKYamYP8S",
  "key17": "2EzH32S1UZGgYAgkwsg2TPqJn4XUr6RW7oV7eqQRKEWgUvpy6U3E47TMhcceZwbRPyDrjgLyrDR7ZPZjXAFasPsY",
  "key18": "J6k6Q7gmD7k3ii8vbca84fzLx8SdTAG2Tri95DAXG7AthTAU7Cap8Rv7DbjCEBp1WFavBWc8UdFsL3aTdBdv2WW",
  "key19": "66HAWGDdLrxYsTF9uezXX3xY8RmcJMEKZWpBat8R7ivnMZLWMFtpmz6C8HiQ4NjGk4gft3232RXHpu2kJ7no2XS9",
  "key20": "3sDPkpfA2kDTjTTkTPXh9SZem4JX9Eq2ssAPDCuxmKKAEJHAwEampuiKZEcVEaN1qZ4S1ovy9t8mgk16d8hXcWT4",
  "key21": "H8gFTfkR71GzSgW2kWJrheWJTXZSeKFsHreooQTKwrZvVHFfAqYX4hZcmwMfvWveDybzzYWY7eGHPhSWZsJNPP2",
  "key22": "5E7TVQMbtsxJDwva4oUZZP8aDdrXFnKNaEcmLujSPLmgumK4F1vbaXMoheqgFjr5BpQgp2TfDHoDFTkvVAdh1kYT",
  "key23": "5xVfEpjDK9was5NMPdYkiYySBW254noj3Vccr4SiBsDT2JA4TA9A7PPAAJvnMPnRKPy5F6H5wxMM3WDWPAJU7Lkn",
  "key24": "2ozLRYZRXRmbDxBbPEHLCD9Lfp8f4rgswuwR1narG3K8cS9fJJkmm7jjdsebx6zshE9dAPDCziHUR7MpLJtRDKg7",
  "key25": "4GRRxQuF5ZFRZxnSna8LugfD5LqWMohaPPsj3AiH3aAqUtVU2Hz1yweD4QdiGJep1VwV5wYTtD6H9mhcBT8G1KMp",
  "key26": "5bkhNyVKZUtjYLPVnRqxtZWJR7yZGwNz3vz44wHu9Qe6FXaVecRUVZfo2T3sqiMde8t8n4PDdzYMWrbJUeCBYFtY",
  "key27": "DQMZRaavzN6u4rgkqsCofr4cqJotDAWbsywKkwR2BRcghMk3WShGjiYJs4xZEYGmYK77CkL7AoxGMoQ4Qgsubom",
  "key28": "51GhrTVvChxtu2ZmPsvB6Dv5hJ41V77HXwBfcu8qyt6g1UPcAZqn34tJy3d96v7qvsAsoWr79JXycSprCM67jRcY",
  "key29": "5HDWdsQKFahnvEypHz8aZNqiSDegZB6rTSL1nD6v7tk1V4bGLUJRwjAhykU1on79u6NCCzXBnFnAXWYS3gU85mB2",
  "key30": "2doH8xfzayvXbASGdX6eCsrNPyHBDgA9hEG9gXHmEqxWzFRXQEpiDvVjuPCFR1H139W5YHphU5gCXT6Du52vmcrz"
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
