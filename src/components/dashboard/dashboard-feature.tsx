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
    "5NKPQkCRbM77Qw6ubvsvmc7k8iKf598ip26kmpEnwrmKU2Nmqzrv41UhaqUP6DLqbLnpoHdMUDvv4SEzuGG9b5yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a8fEesCPEeD4uM7u2hZ3fp5QKwMX8LuE3RMWCQpvxUgJwdA9HYpGwo15DGmK7p1gJSk8hez1fTQENcEMwnJRYDX",
  "key1": "3rphtEJiJeFiFTmgvBnTZrKWhsKmEab4FYjNSA9oVhu9v4tECCWoFyxbWPkSSde1wxhTV4jZrEDA9KqXHNhhiLsL",
  "key2": "2artP5S9hKWrfsu5diZCEx2zHFaRsjk7VVo8P21ji3c69CaFqVNhm9nvidfPTUghSLtR4gmqDZZCUjuCAc3ABk32",
  "key3": "4xBTobbW1HWstgmnWwHs9hxdPV4KyzomhKeUSEc1jCbgqgXDdVi4TRLBRhKPoD2SPGMF29mhJTLWimh5kc1w96Wp",
  "key4": "rBaCpgss1Nyro2YWxUR2NrZkppS2jeBbMn4PPx74z18tuwmonDmozTkQTKeZZPujCqabeUQagQfJM5or3ZnDXXb",
  "key5": "tAZfq5RnU9PKJkKJAzCvg4rv6UcRaCCtQZSWcdYL5RERWTWE8rek5S4xTswwcEFjwEmgnzCr3pdR3FzLeu8ufpo",
  "key6": "3aTdeiTWrmSWXqqx1qpLZigKjEBusdhrYe8Dp6eWq8X7H6xLivgJKqNEQBgVyaisRnFkyi1hmnVF4CUzbawMLTWy",
  "key7": "5ejY723eytfkx2K6MkxYq853dZ8mduNWUujrdWdafog1Ub9tyJcn8Sr6maDuuFvSxEE3b86mgAPDXQaQPUW3JGu3",
  "key8": "3AwnFuvkZmr7L1uTFZbaFufBL3Ucs7EAFNqxPk4L7bWGAMiiVSoj6qgvHuxMK77CvXRbQfwE1hziXJBkqQT9xvsL",
  "key9": "5z2TmFFkY52nD5uhhsxMgQdDbWpNJnkArNySrWkYhA6qwap5UWxZaPvv2nAJi6zzypQVY7PovjBfuWyj4whRD38d",
  "key10": "GbyaQ5Wq4LXwGCB5fjeG8Xs6J5azpE9LE76AovUnZpY5GGxR9CmrUmWQV4UTqz52sHAaH4PDpRVA23J9CEp7LK6",
  "key11": "3HVVukVAiZ8tTKexoXZoFHpxazHdnTqfh8eA6MZRyeEmfpFCVnGXxT8Wy6Epezt8f1tmTTXLP5eUCBjrETSa7yik",
  "key12": "MHY3XiW8upfWk4sGewJbs3X9VnDcDJ2DMH52g92fYyv5FY3rpNeDkdEqpedicmBwjf6mcGXXvQsRcCK5xU4QF9T",
  "key13": "CL4JVuYk1WnoChnu7CKo4Ww1prPw71tCLbF6i6s6TVJadM5jPHXHis3scK5DaVEL8c8b3NXFh4kSw6HRNP7xdJw",
  "key14": "6573MozqcqmyMxevRkbWnornQfNouPevmXQ9FNWTzTSFhJmyBLuWdM5QkJuoX3U3E6cj6dweHRukmyTU8Sod9Pxq",
  "key15": "4nmccQkEtfefosysqrX4dV9NW6rP5HfingafVzzm2bzWSTtsKaswcXgdWX6eu7Qmu1E7FBBjmZhgXCEyrGyN6oFP",
  "key16": "5zeN71iK5gM9jfVirDXgDBi9qA5e7DvHZDtRAdsaajvrXzbQN79vsM66Wmp3tqt9DYmPPJemrEEBfuEhoehbKRDi",
  "key17": "4no8d7goYUw8ZoMVsdps2fzE66xQh57bCyQM1df1tbRVRRBXhveXh1L8e95uMvJwKNUprp88SysbmUayWEPePyCT",
  "key18": "4tdg6a88R8Fd9AMbGZ6yTLE2nwK5ntK8UStcQoHufDPTdyHJdYNpUjCXGjT9Caz9yZbHgJgQCBJQQquvHM4rit6W",
  "key19": "8qTKL6J12qB66GxWvftyUxiEj7eZH8MF82phyVBWpvEqjMU6FgR77jLC1y6tKp318FBb6N5gJ27i5c4onCsoX7c",
  "key20": "5TwYqjyXUtdkSvPX1Gnz6ykaVH1UTZU1y4XBhviWL661DZa256G8ScXRp2Cazt8iaWonUoMGFYbG5pYuGfXtk2PP",
  "key21": "3Gr1DGayvb72t3BwdmbzN6MKZLMj3byU1QTyXSNjMU3EFAVAWNpnUQQsBxSkoHPNXCJmqwf5FkEbAhBrNAssosaB",
  "key22": "hZmKD8aNTQARHTdKMpM7WK4NvyfDCYFfHhTVjVJCNpsk6yVdQqm7nJZxKmNxeh5Nn7eLfxfaE6TahFi6meZxXTU",
  "key23": "5MYtRj3KCQ8DyrH4Z1bK5r8FbJbj9J4WxnHs1fvoDAHw9JzQzJwzUBQt39Ne67WpvwbtKEE6hBsWqoX7km5NW4u4",
  "key24": "2Hfy1hdruvmebtLGs2f6Rsep1ZH9a3yAPngjqPr8NKCEQUm4rx1DrSLpBAdVn9bg5y2U5MGmyPhJd4D7v2CNNcN",
  "key25": "57y4Qe54XQrDhQwaLWLyVWndxqiMhwvx5eQfLxS4rngQmPexECMd6tqwSeq1FAUU2VHR42EkUUxphpahusMFbdVS"
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
