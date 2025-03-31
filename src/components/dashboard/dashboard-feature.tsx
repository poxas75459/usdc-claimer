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
    "V7NfmzXvwY4Ap6cuQCSCa4oLtEsXon7tRRBGxWjfhhswyVocL9iSeJYyCTULAK9JCuShY38qdgkRVai4re3xFd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GytNBd9w7Fvba7BfJcZoBfBwAiHJeCLv6eHZ4BvHtcJetcgVHTAjmSu2pz7uhHr2QLJ31b5taJ5UwUmf1BsyLv5",
  "key1": "2cAxDjWPX2sVKWaeSb1t5hYt6BmsiQT2gT4Wv8kzy5ayQ22xWydCtJedugmeHm88irtCUBu84R53uzVsbLXBXqmT",
  "key2": "3pyFW966C6KisWFyPEnnjqyT5eV7qyGSCcgNDBU3sjVAeHtWvHSnxgRCMPb9eWtbgmaPp87bY8AY6gAQihC4j4ip",
  "key3": "2bakH36xBpSg28WLqab3PgZ4gH3HWz327z4cF9XTQCmjnvE6EaczdLbWDmUnM2vsE9L4priCbQkEodQveZBHJPrD",
  "key4": "379gZmVjjXdBCVMc5WUz7bCn5zNmGptv8w8Q7YNp7wJWMKQc4FYcwcvsN91Rq8LgNCSqWw8XjyHmvVjD6DFZ8zSy",
  "key5": "Hkh6pHeNcpZksLW1a3EqdKd8ojXZHJDmMj5dEed9XgJgCVSxboeFPUpNckeHJuDMHexGBoCYZjn9CARKShr9TkJ",
  "key6": "3R2DZg8geM2ArKs7T9nn4K3N7fTY1KkJSKAhvBt1PUA3Q3ztzQPNNTktYQn5hedRpprFoLbQ6otnsxbq78jNPXfz",
  "key7": "2aZnhaJqC9vTptZiJGS6VcpLMcHQuagDx8jCoXvSye62easoCVvZxoP9j4jsaMukRge5u1hTwNT6oU2zJs3FhR1B",
  "key8": "4GHrA1jU8WvQ7W3vhdRaUESoxwR1Pm4YxAYqvoMqt3dupm4YV56rh5DS1qLziBMcN85Y9oEde8Eoask1ezSvT8kS",
  "key9": "2ayezCDA7VPQNmZ8fj67uC8cxepgx8zm48xFwvDruGNA7KCrsLBJnADEyua1RE2nHvm1LxWwp3k6BCr6q6oQbDW2",
  "key10": "2GUAT9XEjSnqKxNqAVDfVmTNcCNQWHGj7B3TMfhBdCH3FdnHdR8bZpJz1jFAUHt85NKhMdySiphPaYkS4ynVahQW",
  "key11": "253cFazwBjN8BkY65kujSh33zQHrKFCCMntWjMEyj1mAGsqB1rTQ5LcvmPDnfeGBk5VQizPq58jC8S2WhtrBASj1",
  "key12": "36G4a6uuqVd3YkS1MnRwr5hkadwsLjucHXeQqBbFVrpjz1uVzbm2UC1ywh7SU6gfJnKvD8uKgDvWavSBamB6iXK6",
  "key13": "2UT8nkgQWtSP99K4dhBrwhouqGbSzBLkEFkroH9zPJ8KuR8N1QdtJkXNiKUQdH5SffCjegqQ754YnJNsc1W78XSz",
  "key14": "64m3VBV5M3DBAPL1E2qGEY1sCvQAkk2YcPaP31zwRnWvQJ1U18NYEntZHVFdH5ZQKVv83jQxncWo2bhWX7WWakJr",
  "key15": "4iuYyKhUhYHHz92VUWFxPgcmz2urbEdsNJrCZkN3RFEGHMS7PU2CPVeyWpWfeLwLxvQUfWo2Uh3XhHCrvDA7QJsp",
  "key16": "3FkNMpMUKXvVA3rykLJrdfqGU7zD14NaWwCJtUYaqj14rQ9jCAsjjZxeqkdJKuhict82dm24wAqKf57Gu95vCpYK",
  "key17": "YMcgdH9YCeT9v4yVrMJ9BqhNeak4GU9VrPoqJwSeWSpY9XAaAb3wYzRGQ5ohB1Y2PAd1nQ1b2dWSbiXWwPwFDhT",
  "key18": "kNjyz4vy2xZiS8rgzBmB94RGqwZi1nJhoBEM4sdPeNkDnwtfJCbEu4mjwE5KtXaaJhFJ3z1iem3tXcTitZfdm3M",
  "key19": "2s2YJRBJaPQ4pFeryKjEtMESvhYKkRLabKa8HCC5pjDK7BZPaS4EW6TDkqes3ZqWRgpzpBB8U3dst85MxxgE4XM6",
  "key20": "4WNfRqxbrSRTKN21kG795anQm9SkR6CXFGzixseZBakfwoHmtaDAo6XRddULB5aU9qWRw6Bqf7wtyypaGSfNfCuQ",
  "key21": "2KbkH4W94YK8dwh2G9v1ivxBfE3vYA5mh6nNCFvkZw1uahJiozQ6bCQtQe5WmbBLeaVNTBtyr2WQTYMwfENMb2cp",
  "key22": "2KUhxMyJ6bxiMwWDFx3VTK195LJnn6AoaiKqE8JV8HdmFnsC8dAbPKxikxVDFiKsBnwEuJqm4bfYmdp6vQCMaLWo",
  "key23": "gAsuAee5sgqmjpuKGYFo75ctx6mmZAxMve5MowkxjJNs9Up1Qr4Cn3HjkRhEkCWyvWcN1HtjMqTEb6iZcURt3KW",
  "key24": "r8NS2438MpGuiySGKNUPWJ7WcjgCtywLauT6toa7oZBUvu5LTUuqKdof8p8m9zkudcSndDn6BazqB6a8SEK4Z5j",
  "key25": "27bhpxHbk9hoEETCcYx6X5qhYhCQcWhLeXvh9fv5eKUs85uyUVYqbUKQ8Qf2U6iBEAWyKA3A75KPHb84cAyir1DK",
  "key26": "64Livac8XYNmDuBVkv8FB5hrU7BRP59HwsizA4AxrxAPoxPAQ4Rcnwy5XDmKZSkdTrcREnRkT5RCWZdoMMxmJVj4",
  "key27": "5WWCUvf53L9nBHjhXmLnmQ4HDA146ZgNu1LyNY6V4GqTegyVu5gfSNpNGhjUkH3bnFgKFzeCvdApU5iRHUuUfU9s",
  "key28": "5YGSRQG8ZpcTXJKdho2MC8T3fg5qvAAVX9AxC6UTqVnev86QBurxymJt4bhT1Tyrk9cEae1wsgvqAZAqPwCqUDhD",
  "key29": "2riGLCdA6smgX2K3F5hn9LQaeR3UtJEWhcivoNS61GyEtaBgjk2mYfCkeffqcHv4721mGMouCQv6CogcgdcHJWZA",
  "key30": "2D72RDXaZZibMVd1Yunivk3JrDmTAwPhEzSdfgQfftwdW83cSE1JDtsC2DQrbxLGNUSsJYQB7qATUynr7eRyyYTh",
  "key31": "2xf3HR585zX6dY2gQEWEQVpk5ij8E32DgQL56qbhviRMVwgpF7mvAkd5NwugqJAhLeVA73RVDNX4meZ7PFobkkbU",
  "key32": "5YaQFGdS7XGbws9DkYWsTpZPR3GLhQVj2xZ4uZxWvTAu1SP1TcC5UDt5CwQz98R2PbpGcbwaVfvepRNz7j4Vv8zk",
  "key33": "2Y3gfVt6hQQr7qGob4m64oVLbVZmNEWGUAVAJ6zNbDwxEA2g7H8bxFusV1QENFDAieFBupHFzqe71DCojxeHadk"
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
