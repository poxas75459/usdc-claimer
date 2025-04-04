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
    "3e7aJR1KtDYu5wFR8ccR8xvWstJeQVQEgcEfhokC9v1vXJzroRHGowbZGv2KjfXEcGSu3sHcioj6qRgqmKGpCS8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QrXUZwfDjkmgqG8B1W1XiPCcF6wT3mSQ8boQw9m2n52YDrLzdfZ98JwuFqYCcC7BX7qD1GhBHZnbhBWfP1UKKdt",
  "key1": "3p1Eu72GNpQVqB94njzxT6RhbiTc1pGLYTqUgzmS27TSXyxPPMU7HQf4bQyy1qND4uZbzhUacXaqweojxo1KQtqj",
  "key2": "VUsfhkxxULU57xy152qSXDem4D6MF5HWmEQvXmFxS6xGRk1j1ZtYzcea3iks5etW5af1XqoXXQrC4s27pzmZ1Ga",
  "key3": "2zXEbiekcYmKgNjqKqAifo6YN735JiyAUKJgMCnLx68bxSC5yw6ErTep3VTAgDKvrFEoMUZubAZpwH6mrtnTHD3s",
  "key4": "4Bdx93noj49aWUrUwHTaSjpMtDAquQ6ouZANj8gLyeqaTcb2PV3SKztFFiSyCGXd41zbPyFkYTHNbJG7ojxNcqgT",
  "key5": "2QvHPmbT7etyAXkKY1nThbmrmbctoGXpUfgsPhDt5VU9S62uAncdhVDSwwK9q6FmKA52suyb5S3wjMbvo7a5Q419",
  "key6": "GYKmLpaBgK96UxTksQV4GGjzkCjMtsWMaLGbxP3KrVCxmugkrzE1kSbCfPq4PcPE9Sh5AMf1PQfc2yXgNkku3Vo",
  "key7": "2mHNNxKA9AGaJsJ7zyNXrFSM3qS9FQ4AsMT8BCaho8FKjB7LU6ZSo2r8hssERaUbCGP6LLkp9AUXia9ge5XJgEQw",
  "key8": "3Syty8qgrKZyN49MbifLF2JUcsbXasLMcN5AVAYwgSqi2Hi6GSgRrJiBmNtjQGtqXfhs6RGiFvyqQcrDEDnF1rd6",
  "key9": "3Egmhfsuu5WFcwAjyTsK9pHHGEWwgGnUin6Y7vX1AwqsQvXHjsRLnWmeDsmqQ96SwM3cV8TwqWuXoCKYDm5Fn7LY",
  "key10": "4roccCoWUAqqzM7CQP72fUJSk9GbuQd1tSM2Gntr9tNPavbP2ABUQjTezd8Mfq1YpahJZi5Bhzws7ePjUxhMqeFh",
  "key11": "e3BimAAqqinU1Etsf5kQtaK5mKvHeJPFq8EfQgKReTKtULr3Y7ZojRndmW3xPiQhLqy1crYFmUWzhcyE2dj3r5n",
  "key12": "5nWYCvpr6kZvjVJAoAbibugjMdfjaXobtLXuWnVnd45GD9m3cBqC26PGPS6ZgcXSeuwXuYfB9YEcttNVY77Nk8tx",
  "key13": "5n58R7uGBUZS5ABh1CcimwwKyc7uWAbjadqvNwAkHM3desPwSoJRaWpS8y6EHVxAWksVGRBS2Hrs1d7BJuNJfFTR",
  "key14": "2jVN9PfEJ9ASX3JDnp9wg2RHafZEgJ12HZX4ApzGajGcZfETzzExc3ka1Utu4SybYSp7ShZhCGNnyLAjctBd3k21",
  "key15": "3FEPKT2LPv3o3RAyb29bYnU8zowUvd4rt1nH4xySK8VXhVYzwqi5anCfpTWMiXeawYg1skXJ2bArkUSKrtdfug3B",
  "key16": "2jQGHnbqXehxk5Z9N9rD8HwyZiid3bhtvmDehFRUyQneQEnEJC8jeXFFk9PJdtMFTjbZsBFnFNs6ErCb17t1gFEv",
  "key17": "48xx2ZMwjVi9dwMXLkE5TzzY4hLXoP6k5dRhBgGEsapNC75ATbvPWTmAB4qkzoLM1HngkTjSDapgK7VEibQemdpu",
  "key18": "2tt9rCmzvvhr9jLTpK33XWfy2UztKJhep9EAqSaXUjqCZe5L3iMxp1mxhqh5Fcbv91isyMgNjBWBJhSFH3hmqYVd",
  "key19": "4oyJoiMZin4kVaB8X9L3eqniVwgv6WwHWmbVKJKZkir1b68trq6whMkjgm3DmZKypgJhhbHnQvwphNm7nRxqVRaz",
  "key20": "5kiie1Yvs6n1EK7RsuvpN4Bjd85J1BCwMw1HnBoxTJRrupSZyuwbTQTzhVNpALSGo5yF5TFEx47eTLnN7TK4Rkar",
  "key21": "4QYcTQFY6AWq8wQB9t2PaCxbGMS1BKqXSr7nyhEzcvnGA3NC6sinFFcqSYgcwq5nM5ugG98RG3uyKSGxcuBVrh8g",
  "key22": "4m6v6fYTkPoARjxqQZufzvqG8r99Y79WprBLpmvkv9EeTcjsBDrtaS9amK5aj7JhBYMAMvV7Er9zWDpG5GZweF8Z",
  "key23": "rbvpkse5Us5krMB5z18mrFxK1ZPPcCzMAJtH7LdkYTFRakM8VtruSoCR4iLzaEip9AMbGK3jPpZfj31hRjgMAWQ",
  "key24": "2kifbCdCSejoWMG23eNTGFecrudYHkJXggxFssdyDXLMAjdg1BSvdN6yUNZCcHNKacZDVVHFWJojcqfbM8bb3zEd",
  "key25": "mnZM7sseSdpijQeqHnEboBLfb2pHTT3rKZGs4wXi5qV3Tf17dg18djVYYeafBbCwEmCRCL2oTbmMgBoJ11gtVbC",
  "key26": "486MN2kmg81D1Ls8ypY8FV8Jux3pFpFk7WX5GSYXPZ6FdZ3pUz5epUC1bD2WBLLAEttyNGknLuYpJCccvCcTnEFJ"
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
