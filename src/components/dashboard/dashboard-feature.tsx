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
    "ZAbTyZqEnvmpsN4N8C8dJuEpSuSohbT4zdAwmY6hLY9srpHd46NY8RazbUhPoMN5HF5t7xxn9DHrN59Q3a9kc2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GEV8oNaf3x9QJc89DGVkzvCVgP4avXVYt9HgCDxg8sb4bzXQ1MtSaNdrtcVkUB3z3m6sPVnhsPq86ZqgmtT6ZJ9",
  "key1": "qFcYuJEEaHVCJ5mPzgwz9rGByMsUhrtEaafMtidSybCTv9d1pitsb4jChj7qsYSaYxtdVjQCZpzJkGikVtcvvda",
  "key2": "4xdtLoBweCvu3fAMWhRhqL6pjxwCwxpfTmDR5ntrZWr2E1fg5os44LfWhakNgKDpsSxz8jG28GkkYCP91wU66RhW",
  "key3": "2efKza5wCafGQyLJkLg96ze4G2cDc93KorDgD8mkkYy7ZXQZdT74jDV7CitnrGjf5vUh1CJpCvzuJoJKsE2Yw21c",
  "key4": "2UmjZS9hXmdcMCtcTm2rickpA3GqZQDEMPWNJs2PQspsVG4HPFcyqmrF9EXTkK9pv8achqFNzVFmabByADY5G4fn",
  "key5": "3vhFUdMpCo6Nwk46jX5pMYzPcmLPQw47H6GCnEVsu9Hbz5dygz2Wbfzqtav4vjNy9HWq74Ld8d6RrFcBwu2b8NhE",
  "key6": "oxQJD2s5pd7GekKTUwccrtAQKYghLan4PLQofYD1XQZ4cm6pVydJLpVSxp7rCuvYsDEGE5hRYa1PF5FAd7cjA4Q",
  "key7": "5ogoEcBEWjyVwStUcsMdG9GmpF6arj5PydwUwG7c4u36ySeaD7qWew8ivdu9Pjt3YEi3qh7uaMYxsto9YSHrXvav",
  "key8": "bYeP5S72EdvPixU2ayJahEckKfBSj93kuwRp8p4KjNztrJpmKwPrHTeZA6Yd7uoaNcvan7maqsACccXQdnEUDD3",
  "key9": "5GZaWsHoPdVHEaBgXHePNow4mNqjxqznfattxWmxdhk8LSk5RDGXQw8kbiyTBMJLdbmf4VNNnzae5Pv41KdYNDpN",
  "key10": "2rGfVayFDMy3bL1Pom5jR9gAnuE4eixGho3ZyANHWUfzL99ZjmLfmTqiWvCQc8EWYw3d8TZZatRH1Pp8pwhfUFt8",
  "key11": "5w6BZXaLJ62mvGayFUe467J1s7AFgcXA9mubbPCB19UapbhrL4eiPaMF67naP3hANYZJjgyrPhd9EehPFXjRFLke",
  "key12": "64VAvq3zmvsRCoevV6f75MgG3PW1CoQoYywjUh93UMSCfPUSyrQCcDZAyLGXNdQGQKrVUQ7s318pXpbqYkF7f9Jg",
  "key13": "at6LqDhU999yq8GbHVHQePu4ovo3WywPeGxqoUtkPCoa7PfSzpLEJFGh4LfAFM4zavgL7ygUnMHPEpPDijhCbfN",
  "key14": "DCy9s4TfQjxkh1KnrpQwf8yf4gzL3CZU7bTNcrZ1FDDHmxKfiymP6uLJ6kUbXtUFgdCxU5GZCKYs2Z2sKTHn4kn",
  "key15": "4H8ck2A4QCwBxaoPBBUvxoHtGfVKq7rCUAxcoUXemUG3ZaNckBaQHiN5WEpjzMZMiLnoQXVKUP9psgpiQpWjL6LQ",
  "key16": "3zwRYQ3CTKDvTEYD3bEEsdJ6rbCoyFD2fTiCdsNkvaRRhPP1dx3mdbiUfFBAkA9Dop3VwmPzgdRuWWkt387dp5jV",
  "key17": "UTuyy2AdL3kFBjaM9pvyRAZcrGbiXMnB3pWD2pnjpHV1Y3rWmGxS3ayRoNKjdduAXWyRqQth9Jx8SLiTZAFWpX2",
  "key18": "4DkpjstE7QikzdHWfMvtwNMLJ1swqxzv7cM1ASsy9PvFF9GpEMvzRN8fj5qSv4Xy85mzH6NS8RLi4RMm6Zx67gQQ",
  "key19": "2fPr2NCZHc9Com6Bc1ZzFZ9fE1UEQrEZS2KTr2K6uFGZ5d6LeHTnFfyEbV3x2dwPH2Jdwr12aWkQWfYeEsU75epW",
  "key20": "5R1knrsWsE2g212vYLSEKvPntUL2W2xjd46BmFCQtQkpqaXUTFLmijD1WAXoWPXcaKnbvMr3hqscmPqPKosb3UN7",
  "key21": "3hYKw2qmoEbWvyrvU7qoJi2WfHKnVePL4stogFk32pQFTjQNdLmJKCwbdiyktT5sfkB4yPugSgiPdpuxqsBFxb1C",
  "key22": "5MqggpbeLfffr3UWJ53pLGgvUjTsvutYaTvZaEpoRy3UJNNFbnaRFNFVY1bQHywbzyFRHFtphN3bLk8kD5ytsciW",
  "key23": "4E3pNwFhK99CVyFAUioxQgkwnQV7yJoEZh7m1xn7UrzTRKqPFhLc6hH7mbx3yN3WWQwir1Z2tjr2VDHVGTnYkJrK",
  "key24": "4freyLHSEki9MfV6pcGpMuDbGfSK2f1rXhqFvgkmeueB9EZEiFQcZxfE6AP2YpM9DhNvj3jjdSEG4y5mugjYHp4T",
  "key25": "2u2MDv2byncnYpmuR48MM7QXJtCtWkdAqUGAf9zGPCG8rQu1JLnMovfYHrf6yakvNmjV9dCyUziDaHgRd2PzPSyC",
  "key26": "2fYKarTQ89jshuQVkpU5DfwSbiNra1maRGZmoFsUjWyHcVW82N2HvtqLLRJaQ1qWU6Cvzmx4KHMzzSPXRqai5ho2",
  "key27": "2M3N2Dndae2WxzGRCKyXBfh2qZNL3prFPAyprFFhnkSphSJf7LV1FDVVkNeUUVs4DhjnEiHJZkyqqgwWAsM4xRjf",
  "key28": "WghxAyo9iLJq5KvChgubYy8Vm7y8UTZYvy6Hrq1cHxgnqH9GxF4M1xfZGbWzx6k5eQpWihsxVKeitDLY5UhFNdD",
  "key29": "31ReGjeAnoXoMFCmXzTD28xQVU1bTKoBDS9ondCE7mv1fGhC2RMbXDfWMMHLzXfwpNu7pow8qLk4nd3UzkQRSfJH",
  "key30": "3TqPnkvrg6tZDhFf3B6web2QYuPi1Ms83xXJESU8KpHHBRVw6acziMPUBQq3TQvNTee1tmsn3Hg9F88Rk5QU3KVa",
  "key31": "KPTHqX83QnzY8i7yQRBR4Eaj2q4c2R9LRWasKU5qgQdyb5E9sUNfUDL2YQFMWzMzW2KB9m8LCpUSrhgaPcqNsen",
  "key32": "33mDU3DWUC8Qkj4mFEmhoNzfPFxH1cBMj3mo1hCCsUgi8NvhHLwpmQus9K5ehVqBkDkmio6YnuRpJsoqi7Bypemt",
  "key33": "4ckNTMaMKbx33YNGyWKRYDitMNrswdKp6aCJ3QV9EMuAhgpNUNYioVDyacxudCewufw24X4NsdJHLWu4YY4pPiqL",
  "key34": "43fAFCYvJhUBgEFDR5L33FwAQUYrjWFpmgEwgXr229vnayjfkuySFEGvxVENw4BDpPe1GRYf8nExxPTgZQJrBzKi",
  "key35": "3L33biwv7X7jruU9sTyhBcf68QxbEN9VSyvRRpu7SDsJkmcK53bwFdZX1j2iwmCnRESJXWvNJvhxjpkbh2VE3FdA",
  "key36": "49H7zbkAGKereiEPVNjKBHhH3NFHXRn1Xrd4BXp8qMWVZY4nJQHTLExZQzGSbSYNAE8oRBQwdFeTdwmfLM3vmbqW"
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
