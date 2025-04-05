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
    "Ck55vYByEZNL7hyAtrEThktKeMYCdEBUd3Ub5Pw1R6AYtpXLRGfPbPdtddNgs3wfkVSaJUaPFbFDDZUktThQn9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KHed9zX8p8g6X9NSN5xbt9zkvFe6Wf286cJvkXcZEXihmX75ukVva7zuWYL3K131nLiBAKWoj91kqku5gYXBbmg",
  "key1": "2CWaFrnCQFRVZBtfY51v7VM3xTduwAEgMumYqhaw4jfw5conBgJMjXV3vWJdKKC5EphQAu5UpngHYzRXdtw6RYHm",
  "key2": "po3D69DA5RjF1VqUn6843uSjVp3u1UfTHm6tPk7a9zgNNhDsM3EB1hWyrpiU8c8k6mmm6xxDrdgFqnjXYvRrNv4",
  "key3": "1HXCnsDddTzD1giYB19FHXv67TXkxJCqr6sL8YRjugBhwHNrm9cJ2gaUQX1tKEp88AGHXy7y4kbLXCDrMDwBszv",
  "key4": "5vapafFm1NNqcoLVqQxxNzM3aScXveAMhZrjUj1Lwp5T3qMrULdhrYvabvgMHjbv3N6wPEFuRUrdAPekWyhcr1FF",
  "key5": "5B7tAw1xP3uxoSAiCbM98GAzfQF351d75iTgdZpzUs56t1u2xg9MoZQDrh82ePkvxbr8Kq7kusY4tor6HRBE4MQD",
  "key6": "33epwzsub7foQHKx5yga81LmWcvWHFzgyaWZPjbWGixauPgbHXb8ftTR5dKRM784KeeSZU8MhoNiXvEUfSN9E52H",
  "key7": "2Kp4Cdx8npsUsfD9DGgAiCLseWNw7AYzFAUpuqppYab6Sid1XTntG4TTruFxZCMy9skE9vvXw9BYssRrwzNM9PKq",
  "key8": "JjjMTHSvrmDnv8rmJLar2Tw4hrKBWEZ6tPVkiRYQJtjprz65JgosLERhDhjCRxpA5F8euFvxiU9wje7h4BhNLYd",
  "key9": "4WT2Mub2bMfMmCrzafQHhrEy4cMfuZPaQeyjpboyd3R5dkgsVMVciTji2v198coXKxLYTmCvgS8QbJCdHTCyc6Pi",
  "key10": "53w2tRgAxgtsaiw52xn64AWtjb7hHRpYC4sT5vLroeQKcxkhcvK4okea14b4ekGJuFaWJikAW5LXYpPQi5iDt8fG",
  "key11": "4JJ1KUUSVXuG6msAM8HGgsTxGpd1ZhGhHZ156VruVMWNd8j3scFeqnCYFXjBSe3zeeaENNuumsHgCVMEbesozyt",
  "key12": "5PjKLoFut8bTYKZ8f77PKLd8VrwF4iDrCkWVGU2asBdkVB6ZVQHpZEMWM2mbzZore9Wmv6JwVDXWRYCeQwNjCed2",
  "key13": "sBmKi1RfSHphwkEK5FCVEXnLjr3WfLvNDjhNZZxe44Qn6azUK5RZb28khoZ52Woh4PuMjAkWKwSzWLiwrPYSURP",
  "key14": "45pWyS1o8qFkrpPpctnZ1bnQhEvZhHRLyNkBAVNoJe6sfCFpuvUpBKPF1SeDgN99TmDoEU5sXRfHjdWH7ptwUsjR",
  "key15": "3hS6nX9734dajtJMyXKYUjD1S8bkQVRn13HRX27wc9oCLQ4afYCGS2MQzTG2oxNQZFnWudwjB6SinKtvqTVS3x9p",
  "key16": "3HZQ2jtQXXkhSiDVmdyojxAced5F31xLbc7ewgZgE4Uzuok16bUidcg7rSEKf8pPh8KWKBNcyA9V8gwxAdWKwMLw",
  "key17": "3EsLHjJmWb5G9hwSbU4N7Cg1qX4NbZcBhMDifQUUPnpMwGn4tb65xwaEyxWP6F2LnNUHc9cHHEScHfqJxmfj5sPo",
  "key18": "p2Qiu8mw9hZyxbxJFYGSoGyLqBsAsqGvQopC75EbPhUmzbkLWZGbxjaZhHLsgYoZDQx31k8iUKQ6Du7cm8WPT5F",
  "key19": "3NCn9JjpbnjMHrnBBWi3gbzJ8jRbySBYKB9G7RaUuYTaBAM8gzJbq4MTeHBbMTcdV8r865KpkR68La61wfvkAHkA",
  "key20": "9Pa6Aevzv55h7CKfitAdWHNis9jSSzZePSCnWaAmx4FZQBwmLaEHQY4fqR1k39nn3x3hBz5wH8wCx1qW5dtiTSj",
  "key21": "5Dk7aiNL7Eric87VE1xp3UG65vTbujurFmRREbE4se9CYkgRWDJ47PdM7KxiWTNKwAHk4EFJqeo5Uso9XKf7GHh5",
  "key22": "3nGAHU3eaRLU9NaK7eMxwX4emqeuSR8ptdHYkTqrnhjUaX59BuYZ8Ff6TLVL8Tvs6emPcJUjeeynna9WNT7n5fT2",
  "key23": "23HnSh1yYETeNy7HSJYyYaRihmPHUSWQMxGBVYnGZJ8JSrjgekZX5UjHrqYW59eFeEgFrbEKYJtDwDUsTQew4bSh",
  "key24": "3tMoVTid3wLUeZscd2EpJAhAH6P158eCPeYkUrvMmzUarQ6nsURdns6wZndR6mS7gsKzwXoURccFR34CaTR7Dzs5"
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
