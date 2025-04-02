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
    "63Loo43u7SWenzmRaAjQJvYTCtJSZY7xb4JtswLfm97aNZogtbaMrELoefvNUXGesKj9C7Gdsbmr8c8SX9A65KP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePWVWJgRdjvMc9CDYiQrEs3X2f2r8VvNjPyRTsssGvf8r5ZpdgMZ8BDQH13T2ZdPMdmw6roGBjWjR41BLHw5AZy",
  "key1": "3nN6zweJR4n3tCLJ56sXyNcnV8MuZe7EGZq8NooDrvLAeHUKSygYdavyXAvgpJfTkA5yxkLBbYz8M8hLs8PEshDy",
  "key2": "4pSxNwgiFBCSVD97EctWPKhDAKL8hHisBgUT4pNU3LLfVGWx944ohd9teTZdG23bn6Gg8JgizRrAG9YWCrfrMo4S",
  "key3": "3K6nTufa9fWRzeAWPcqSymxJZQCuDS7qrNVMmVQuAQv1sxreAeEcPyh5FStEAFTR1HNBi39vfw2gaT6WhmrbWZwA",
  "key4": "3K4yQMPEV4VeQNd1UqbmBHrRMDkAyytQ2zk7w6T7nmXVskpdRZA6JtHZ8jkPL43XAVJhnPud3ynCfPPv2vFEtpjN",
  "key5": "4hxRp4y1W2Bb3rXztWJh4oaigNj8nBPVibdUoYJ7uFb5BzXEaZWak6XdBvdaBB9cxMMG7FQ2PC2hVZmhPyNQEwfL",
  "key6": "4oe2Sur9VLYyFgwyMuKYozdm7q81zK9t6CrSXtE3HyQPfrrcA98ti2qta17voKNesAi3h28uptQjQNuEycqJk93F",
  "key7": "Z4AYAf3CK8XrW3ToFe54djLU58NXYSaTdZNTxiLJBRmyTHfCA9uhRZTdXNKxi7nPYATDw8XMTJpxBHyJTwnc2Kv",
  "key8": "a49AvMZiqkcPYBGMBSY1o5ryLUnkk1uPkWJy93He7eEBmxcMUasMiBAq2WYMbacoEG2uZvENa6qBHeAGJSD58TA",
  "key9": "2oYdeoT7c74BiLbxBeUyNvvLrEwxFzAYRWG6Df78SFGFfL6kL4uVFxYfHkFoLZEYF59W2Epc9yphMnw3xhcuF6w9",
  "key10": "3p1dswaS3EPjFyn2J69DpwnnBGpF3ccGjT1vrk1jr2TjpeYPJ1PWVupVq7fhPMw8mgiVKR8UWpaUGCzoorcA4eLT",
  "key11": "5ikB9v5AJgYjRUDyf5yHBsfV9ERvMmmbCZNxnJbQSW2eAZr1muXgWWMxZPERDBURKBDNZBmfbEFZvQZsp7WjNGWj",
  "key12": "2rMps4yqtWMXozkf5ggtrWR1zzt5jXBQb2uAU64TD2Cc91k2mUcrdJGVkmcmHgoMJ8r8qnwySurpzpcgrnMhJF3V",
  "key13": "4hRZCAG93NfdtzMYrLz6VYBaei49LutgS9aeCLR52gm2dQKCdhvWKyXJApsgnZty5EUUzSjFnNRZbBsN11eoCSR6",
  "key14": "4VYKyrCaZtdST7DdcE8ZiKdqgtzAPD9VuJYC8FGnVtovxmwVDTYyXDFdLzU6t35mpFBPQ2bCTWbBFbapbEKPTQBA",
  "key15": "yT8FfQPFjRAd6kbAYXmnPX5cYxwCcaoy4frC5yVZTSWV3ZRWLXKm8WFFiSHmbBNomqhDLy3BMKoRxmb85uR7a8c",
  "key16": "2htC5dpLWbtistjMa4YcDSETA5XFHE3rPgycTfZeddRJUS9s9CQujteFkZppEXyFTKweGxRqmpbzMqcuVEB819cz",
  "key17": "2KzyKahCdKtmRk6WdMuogqEg8A29DhPNnEm3HHg2qYfSSNbEFL5yVEKJ1nuC9WDifYBgnf4oQDjoZF2q8Y85T5p4",
  "key18": "5UKRneSqQczXWDpEPsQfjv39rDLQMx2KfLYmkyYSjJXG7LWEo15EhRofzDnsxCuQkfHQqiay4hbE5E2ZYAXpHQjM",
  "key19": "29zpjLVS7V366AwS43UqSnm79GUfe6A4q1bhQK8RgH9E6DNsb6j3znh11BqgjXraoEshv9iTTgARZ4KRk2YvBZiK",
  "key20": "5zJu56CgdQ7zedKaPiF1zS7efriqNAXWwyUQa1cgrrW6C3KGhy4Cx8HWpYLbtatqh3ev1T2a2sGcGR2QRWG3YoyN",
  "key21": "dQNoQNVj99jzKJP5pQi6Eyk9PSRAgDM3Z4NQWedqo4xLkJui9fPREFREjEsAxW2JkQggi6U97kGGQSnFKyLziPc",
  "key22": "3tS959j8P4EmX3rdRhnSnytU4qwCUjYZm6XQ85uLFJjyh9ayaWajMGQdmndfoR21SA7VMY2nFgJGXSyitNMKTq3h",
  "key23": "UNP85JrgsQqEDqA6AoQviqGUciG1zQZU5R4GXCZfmgjnw6yNyB4SNzep9KwNYGrZRcAGGEd56K16diFXPpdCSh7",
  "key24": "3oY19QvnGrbZdxxjCx7L1idBYRoF5DgxS1WnVMMTpqGhRRd4mK3biFtSv7feAUXuMYHc8hcAUupzNu3tHzq1aTHY",
  "key25": "2UNbP8ztZx3ScxMexcjrxcWFuHSxy6iXGcFieKq7vQLzY4H5q5cje5S7Bs9Dyc8m9WQQzmmZVvxojdmpf34ivkDQ",
  "key26": "KMG26BkfcEndQHZ5U1Fg6oJq6RUokuDWptGngyfUHaLXocd8ooAkLafezufwaENNDBmjJgcaNie1MgkYbs7kUTC",
  "key27": "5FZGkDHrgtjW8s1t8T8wNnsBofksLMni7fv5YMusYpzeWwqYJgpbyFStAu2tMdtx59r3tRRzuCvLtaSV3Tk3UPuk",
  "key28": "ACsgNqTxHQEQ6kbB8bsVA4gbAonqrMD7w22hSE5TW1KxrG2xksMzLa1aGtULpHDdYDCySryMXqsw3yBzS6Y1CYd",
  "key29": "4zxbZuQTVUxE7QKB3epud1TZXNYtAxSdvEzTmeKxeBDwmGoY9g2x67NDHePiYQRX6zYSADWp29C7He1U2kPefCPG",
  "key30": "2u9dPGsXs7iqx7NtyBAs4NBH7ujoJCcd2gxV8QkuumVAQ6BzSZVXAuMNS5pFZLUxtuB3qpWdFJRTzA9aY1eX3Us3",
  "key31": "5sjHJfAstNQ8mDDt5V4XPXWQeadKFxUcj2pJ9uAirVcH3tCYMTSQqfXgZLBcDzNyY4gpvtfnXrB52s9hgQE2f2ni",
  "key32": "wDVB8a71MyFdeJbVCuQWy7PdZR8RZGcAJm5GVgoDoeAtxtSERW5UrBVLf6yz81rh45Xt7zdnquZcEQGppb1Maho",
  "key33": "5dJYd8Ho3hVfYXZZqUXGeDsqNCcGjUJnuuKK8G3w7hDMrJW7XckrzB1KE51AfcseZaWB2VVHFWysHs6AWwNv4PKd"
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
