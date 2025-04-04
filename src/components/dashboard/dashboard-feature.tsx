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
    "3ff2ULcvEAe2zxeLZ2uqCxG2Ro1B1FjyxjVVgwdua3Ap4a3T9iLjHQSRB7AUqCzaA4ZucuKKWFMdKvZREbqB6S7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j6ZunSp35Ripp1NYDprBize1mBuxTf6khjqLWvTC5JJkZ9LS4pzWisFTpH6EzmcoFZQsP6hs5cPLDcd8dQY6Mgj",
  "key1": "2YFQzadsdR4gfg4yWrAhd8o4NmPAAHLcW1QzUZPChqwLYCqD55tJFRgAQxr5iCFWwLyHXtzw8EsHKaUH52uCLxUH",
  "key2": "MGaq3QAjTfdniCsRVett6fBJfcLi47a7fWNmNZL2mKgXgEL8Fq36fu4qyVAaDuEzTk8QoQuvW9rjUdhAvZ19m6E",
  "key3": "2tBL695N29zVHgURn6mdJyPn6P7TUbM1F7Nbk6rEZVE3REd2K8q9dRav1KfqXT9G6v9xw7ppg5ntTpWYJkKPK4PF",
  "key4": "4z9LVFuBz6wZYWdVY35aTjgDAnDzeGfTEDFHVnZgRZZxQaPRaH4MnwPDYVqwYJUgbDbdVPZacdjhgNeq32cc71yp",
  "key5": "4VcDt4DTXpSqn7d8U628Yibr2PVjEzcnyJtXCLz6ECoq7djHw1mYJqAmQ2iswxEVVgcy4pRFQRYfoAxzL1ANf422",
  "key6": "4JYirqVzNMzRaKuePjiAtBVtovRSiLRWWhA53TRUw6nrsWrZpmQxnQkMCsZMTKrDaJHaZPonvodb8XkPSQzd3bx7",
  "key7": "4jsrFAtDDeW6My7osUzQ4m4PMNNgnTRhiLkwTJTZVZF8cFFnKpt8tPXDepM9D8aHsL9BwMsE2vGbm5RDCfNqszd5",
  "key8": "5ojEP3mHzGp5CiyTxFsCbJrq21u6auzKCnAZHbmRo8CA7xKpdKuudqhRJKHCsw5W1ucmLTxn4pxCLTmC4ktUNbSF",
  "key9": "VsE6eFAEaCYmV16hL9ovkjQ6QRZMMbFiXLgZ9hoVBnmi92GgaXednwEN183UZ9YbSkXLHtTXFU33YNvkrUNxi6r",
  "key10": "2QKQtk8HHiAro48mqZe2uGtD53jQZ5V9Z9Y7M4hLS2NELdUi2gFMYisHn1KwbpexjsDxR6PzzfZfAkEBN7bDe7Ra",
  "key11": "4jQseG2oFEtn9afhJ4nXhmHYprsarDQm8niZsgqeRsPDL6zJFzwjRYkNsim9VkoYYteX9V3wG5TcPNGbSBRm5CXq",
  "key12": "QeFDALsqNA1pY4QYrwiopNJ7o1gUA9YzSkEm2mDUyLceSehhic8W9nbtyYnbFQwiKzzP1TWDPeVAGpP4bigeUMt",
  "key13": "AKW8K6qHZsP5wfoJjSwM4LUh2DVJ9rsMEzuRKjx1d4HDjMdyFQJS8va9LwiiSwm1sSdgxKcXtracwPAWpKpYG2k",
  "key14": "3jyZQndBrSxfJJm9m6BrHJoDydo4t6hbFCSzVcvxhLyWjc5BKWtybq1SUAJbxppWyWJUd8pJmSceeRyhkxCyCs9h",
  "key15": "3BxwX3SBoPyuMKTcSE1FJVpWm6ZixQgRGmHGxoUnrMe4aY8QBiGNPc7Pk5DT87CK9n8deKR4cMqMyXVuLvFeCgJB",
  "key16": "hQzHYvZj14jNDYZRuTdDF1YDQbK2gHqMFzZJGa53rHKdkkbyo1QZefVvBnz7k9uvcyNSbTa73DakAZjq4gDdte2",
  "key17": "3rxwcjxqStHRUVaUF4Y8XLyZBn47TEaZdWaRrFggCnMbHJxDdfRfAPngXam1mbFDhQ3bX6KiQkJDi2pdvpkY7diy",
  "key18": "3NVos8SbhZXRyDnrfmkzySKsbdS7XB6Z9L5ewbPbxuDxtpjPpTL2fALP7BnTuBXBnBn64ahW9cJCAQSL6GyKpSpm",
  "key19": "7jGAGAEBmNvN9qCThLpx1zC7Ar47UktZfhoB22CKAd27BG94nNNLM5iyBBJzanaJe5xyh98WkCsw8ykoCPrNYcQ",
  "key20": "24e9CYUtJU4tRNPSpW1aCZpqcwhiHY18uJbTgqa8BBUBMAkjG14UrPDQdBwo2NsoWweZNsFaeQhuwmPnwvapWDtx",
  "key21": "Kzeb6BCUTPDGSmHbb3mUGqApnLTBRuqNTw3Bw4U3Tn7FZJGtrWGJfPobH1PT3QE9cT1i1u19mNteA6fniKKayvS",
  "key22": "w9bzjDVCau7fxo4Fvs39fVkMUXhAxugy1827uAm8NUJBm8W6HKkzzRsiH9mXJ4Sa8R4Mg9PRPqhUK4jVZryzLQD",
  "key23": "5hVEPBcmmyVbFdZnK8fWYqRcaXerA3LYcyEjFKeh1B1c25AXN9xRGvS7uqC6zmBVWnwuuWRbn1mKhoYyELhwuJ1a",
  "key24": "2Z9R86QV1czZ3RYejN6U2jiUVgULpxi1TUVyu9DV4p8gZwn5hFxoZVZttZUkkRqCoH3vaZAa7w2wr4dYQjbemePi"
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
