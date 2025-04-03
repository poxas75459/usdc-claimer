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
    "41U9hR4S3Rv5ycQ4vjPReoNjJsraV95zZmWH8zC9XHoijgpeaBLoV2bXmabo1zQ5UFovDjTtcPWmK1dBvrNf72MU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rmYxwFRG5jE2J8crvJjw2eQ695XS9Uo9rvnuut98FwShXgaynaYtFCvyjq1PuUjPNDzZ5gm5LN7Qtv5BBPgYNpU",
  "key1": "4cuZqTH1YAmrjR73WsXnWgX97J1BNUbKauYVi9To3ZHVty8aN3gnaXiLzZ9xWjRTwU8YyN6Xs9QL9BrCetgR1kDH",
  "key2": "4dZLks31E7SR2xuxsqPQAVoCMGx6evYFbHYDRW1jpyLGoqPrqhbrd6pPuwCzyw9JFxi88p6Mm6JZDoGqjktyZXLK",
  "key3": "3AoDc2baStBdPBnorarqBK6ua2pWFPa3fqz9pZyEfmTAMHU6BGJ1YxGn1YQ26zq71W3L2EJywgKSDMp9VyxNtF5d",
  "key4": "NQf8F7ac2vm4JchZwPxDGvwEnD9TzyaE6rqguKVeTwwa1ZfBQQsHB7FQdHjwzgcjdMhqcbQZu3Qf7tsPEPYC2gj",
  "key5": "RMBei22uMNdvNfjRsBXk6RntPi45X1khSs64xNGyPQdtWxVLmvcJhvHGtkD96PtepvaQVTni51RzZweATL9ekRJ",
  "key6": "Zi7Gqw3sa6tGjnjpxhj1NGsBgCHJmCZNKMY2pkWUe3LZTdb5XdxpYpA3NxGqhBjJtiUedrWUp7x8fARWy9iJGfS",
  "key7": "27ZfzVqzgvarYycPWyZujmmGZnxsHJLF6aLYoPVRv7DNHof9RSwpN4PFqvyJq4vu7DvZMVDe95cYRLCCDt4ZtVpV",
  "key8": "5fo3UAm66ZmfRqSLBN3GoD5uSJS1WpgEperAefbtXmbK1UKHA2T7hEvJJFCRa38DpWHCPoJiTRkcZ6tWaHtLUuEx",
  "key9": "ze9c5mUBepUWtswUsLcKk96tkVRw1B7c1VhPJo3Fbbh56dDpmpgmudifcyLocuA99ZowtGmJ3QtVP7oMrHjgP2Q",
  "key10": "4jEBGj6qC7dLK7Pu3pcUNGhjceFRQ5RrVUztkXXryYj8NFzjvsjp98U8Q5W9UNK85bUqb35z1XxY7DQpz91P9QEw",
  "key11": "3MdPSYAWwntsva8f9utp1zLumiJFnj7JwMQfJojZvdNrPZsjviA7pcG962ppNcFKBVEcLf2TGRXnf6nXmMJvghqR",
  "key12": "2Z5nswhaQjRBpwixAjzmVuD4ZZ2rCfp47L7m6w7RWmQzimy6fPKoieFGQfRXe38uJ6duBdNXEjr7jiudNsDJY2ia",
  "key13": "34Hq71jzJdsaATfuDdngtvfKwFqo1GT8UBnxd9VdDenFT5yMNfzmy7uHdMfr7Vb8ZKY4KwPZw8KZm6JhR5uY55TJ",
  "key14": "3LUQBbRRkqjdx9LsX8PkvbukbFWT7dzt3vzj59fZp3NinDKwphajygpptf2jRjgztdMvSmchwGgFJ1fcNNmL1Ter",
  "key15": "5e1x55ZgtMJ6tBrd7hMKHo7mz2JC4TcspSg8rPjtmFft1NUtvtWbxtmFV8e8WdJ3jjJsqcVTrypik6ixuanBUuMu",
  "key16": "5PmWzo9cRBp8E86nZyqvF66Z7cxpue5VNYoEdu4FqNFgWh34NGhJoi9nRMHiwZKTuDGTJMnydhphpKFKzSD7NYPr",
  "key17": "2imAtizJDwhgi6ijVX5RB2NnZx1wudAmmFPHGGmXhyzjg2vF5T4s6Wy3xjAv5yfkhomnbBfBHBQPpsC5zetEjE7Z",
  "key18": "3vgptAxzZR7rSisJAApoWBU7oKRfHvRWVPXqaZPBMPTQCKBxDcTkrGUVG8ye6w1j7xyc1sYE92kVraJZKTDjbEHX",
  "key19": "3zksDLjv324zjAK2HdoMc8USBb4TP43F1vYn6Vjzh5jDya1MUphN2fH8VJGRXLkcuAtFbT7KnhkvmtrniwMVyZJ3",
  "key20": "2h9CpKTfA7jiVGb7QU4qJsCdWKghDSULXR2McsVPCE3GgKgrELgWuv7Z7JVAuS7EZYJNhVEimMRhMmd7qLMTTC3K",
  "key21": "hNqcD6fsBK6LmfevHLwfCGVafzrunH13LY48pKqQTH8fS3couxLW2SoBnQBr8xtscxxcCEje8n9RnjeVGFZ8PNL",
  "key22": "2pJf8XR9PTncvfWH4M5xDWgygkogZBSyqwo7WiVbfJvH1Mmx67TX1MAyXSZadUQYRsCXjoBwMUFT1immN6n5jkPG",
  "key23": "4P8jFmCc94zsefiWmPmwwojM6eTxpNay2k3SJBjkw9jaiQwJCzqtR5hqDLbUeNSnRJvb95SK7Ka9pjeEemrA2t5v",
  "key24": "52R6NCrsuDas41BStYy5BbnpBvKTtCV9UcU4TzwoB3UdRpb5gLNysYspNZArL5a5xiSkJynFPUgLUqc7rPqMcLkw",
  "key25": "enM5W3DDd6asYmUJxfmqFML22jcqvgFBpkLLfpWdkkyEppdcZ6HLfo1ApW5JPZ3TFctSN7mNLPhrJANActePtQg",
  "key26": "rh897ZYg6QRVnRZCo7mDat8SHa9L2X37t3BjmwBgXM29D2tEkLWePz4y8nzhkwHmivNrgY6WUvg9hjtxw9b3c6b",
  "key27": "3UkXW5W4L2Pfd38z7eSvT4VCut9kQ4Yeaa9VGB3egqrpZYk32eJQTLQCrDgb6JkE3p7Z6ifLhzDeGV54nNu8ruzc"
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
