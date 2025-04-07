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
    "2VJxqYTp6twcejWmyA3t1ZPooDEvrZPV4CArpkGFwhotwdeL1umFBzPLPCB4eWtMg6W8t2paz7YXdGyb9KxNboov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wLYNCLoUnLXV4YAviW7qmtXaw2gVx99eZtYPkDGTrW1krKE6yNz5GUXKJgJhLX7QJe1JABzc5mqjauDjRFT744j",
  "key1": "5z4zZb8YgYF1BChMXMh4s2dcXJvcV4SA5cTJUHsjVSRpXo3RhCyWf2mVZPKZctvLcmWm9os5DsoKx9QyjDoVQTtp",
  "key2": "4Ue1YHhU2hrrLbERrRjT92CFfH24uPZxp8VNL8NaovcFR1eax6pL8uVjfDG3GUzXAUD4d22eBhUMJGXUd1goq6ZX",
  "key3": "3xavQXo1exLnYY56V11CKV4Wev1ibRYZSFttmmw1wQFrfNsdMUiyS7qhFbR9pj6XoiGsynz7j8hPdTLu8zfA2GGB",
  "key4": "nhq5XdDpsWgmhVgrbQELMSP8kp7RQZfipsuCZUUv8kcCyoefz9wFA9LNfeXEYh8Ub65JgQbpwRCsvHR8YWr65zh",
  "key5": "5yWk9KNzdbGqWK81ZfrFZH6hgj4vnZ1cQq4jfjiP5sKAb2yy9Lu3Ce9SJSXWSvfRPGR1Eoai21xXMrG23XFm5TX",
  "key6": "4rAVTmSVkS1gPZCicPcg4JyPPbaDSe5fhr6o93be11d1XzQAnn1G48UGuLvobz7BekYJ3WYqcPnTDtQojEoVnqmy",
  "key7": "2SzxbsG2xgndQybL24hVPxqV7jgknAk9hZrHKAJMTJfd8Aie5ZbKx1ZCGDeuQv3DrHz5VjWQPy4hYr6CcdB2foAQ",
  "key8": "2nuTTKChCDweBTg88XtG6nXjYyciuvq6aqwbUhFsHYeem6GCZ7GYxggD7Hvf1ZTZx37ggTWZcWmXqVa7NeUAX1p4",
  "key9": "zSsy68jkLDYYWsRfzWquU89YyMF2bQkJoAF3asz6nkhp19wHyLNTwtCeYcSY6xQ9rtznzAzf4RiTH8d79K6uM8M",
  "key10": "5im1cAegs6eHWXpXBK2YMZA69oFomrJJEF7skB1ad7AeU9nSQNMfRUGx2JKVEvGSHoP7xwi1jovjMARDtSHxs396",
  "key11": "2WgMbbTkpwcBM2sqmV4TEcetrBQVurzWixWXTKGyE6Q6VyxUFHXnRn8ahs19XkVxnJsCWBpUyezLQcbxZ8ZsKstX",
  "key12": "5GvP7G74hran6xFSdkL3aSiRykMMfk8rwagNNVCXS2jn4Eu3j3URafTmbK4A1vsRmkkk3GBgVGyojun8vZp9gmDM",
  "key13": "5eeRkPV7MdAPvMt1QapQhTTctBP9jP5h614YvXhDu72FdmkT3NrvZdcZo5amPvyRhvG21xV686ySYq8doxovpYdc",
  "key14": "2mtCqPF4LBgp3bbpsrH7LViupJXmKpWhWvgXfowWB7RdhL8YVWGycXJ1vafNjGbZGguzagELpL5wmNaTq2XmwaiV",
  "key15": "BQduUfS2fG9pBKE9BsrhUBn7KtZ6xVMAkCSmwcjfSmAcm6KNG6GUWmrvc9vjTnXtLrmoV5FhQ4WTxuFwbQ9psBA",
  "key16": "5vmXbDZK99Er78Po9HkXdBUgwq1C2iCh75wmVVKeKChe5JgtVPzJoPTcC43LEv4z8nxKSMnnozMDgYHnUsYBig5E",
  "key17": "53gMdUzXUT96ctbU3MvCzzmLKuviSfUu7cQ6XNtx6QShQYxzbyVLb5NcNY2JChK3KvAwcTMrVgoc5FtNs6WCt93M",
  "key18": "37TxxFqmG1328zT8Ra6Bkjyu7iypv4P8autu1iera79LcoShic9RnB7fgDFXsh7Uad5DassffQaZyszAdvjmzLdm",
  "key19": "3YbmfQrV8qSiY7o7uWfJ5mHTUVAP3FCzDhWLVuVCKDWFP4QgyEzFQyhEZeXnM3uTCeN6VnjyJ36koJKDWUtEaEAN",
  "key20": "35X4LhmYEPxHn9XyDe6QUAitMg4EBeMHLqJnHjZNPoMzbN724mF2rQT8w7MUyJZUHSQcFDZFZ1GY9yXNtKjpyW8b",
  "key21": "3C3EUgmpRzfcvUU5SYYTVfC2BtqNZ1FCHxahf1sUQVgqQ25PBDnsppo6ntDvKBsdM7nzXvSrkPTn8ZzisHCBQvxP",
  "key22": "3VyXRVqVULtsxMtQrJYqNwAVvN4xGVzk3gqVzJ9xnX9E7xmVspWNHhaPLrkYo4EZ8sLPih1wQT22scsHkNkVmazo",
  "key23": "587LZfLgXkNbX45ro4WAsuXD1dWoznjt6abfc2pXN46uvdG4AK3qE9vNXMXbuMsbjzamANEsyL6Dvg4g9eGzxF7q",
  "key24": "39etyoYUUUBVEq39Yhc5Qre1EbpfVsm2uGGedXUKgXWjpMieU5XomxwrMdnxBdkDefbpYeozCJuJQHypqHFW3VZH",
  "key25": "2bKU5z33gvncMxwWEY8JZBRpcqC95uaXSMaXynaS3McqAxduZaTfsvvFa9zgVXnZJmK6VEEtv5NRKTp9KAgwLkuk",
  "key26": "2W7nwdMRFmQbnC1rTjWeQEpqKhdj94cHEd74dTrhGVt9pfp4TRGtUstp5vJ34vX7r13sGTuApNm87c6JbXSSuGAE",
  "key27": "36UBcx11B8ioFvj5WufajcBaHuHjqFmP3cxV7G6qwmEwHCrRmF9Vbuk21Fpr11PdeeCHfBUZ1dzQ1hgT1rs4JmKS",
  "key28": "5qvQGxyHW2jvDVgjr2DfRREDfmw4ccCGcUNmP1hoc1rxa7XkhTPUYEuFP8qLKNptSSU7WqcUsskGUmFYpUR5K45c"
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
