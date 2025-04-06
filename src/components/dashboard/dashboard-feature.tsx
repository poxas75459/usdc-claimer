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
    "3V28J9n2sQX7C7GLn8PL2dnfrRp8vqU1gGrRjxGfpa5maL7zSNuR18xYzKHHneu3a9smXLTCBgcvru5SezJ94QuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hqSfdejXMyC7weme4Nt3TrEBxDviJZdGykCKdhbikR4aepwrxXnUHq6f5A8CLwmAjw5m1bHBDjwWxoY62mN1fGy",
  "key1": "2UgMCVGPS7E8DjcuCUsHtAd9EXhscTUKjLwx4tT4mCDTmkRhQxvLurn8yPLVbnXwSRZUCNqpw8YfRA94KGWrGLRZ",
  "key2": "5mryWAme1iqAVqSpF5no9NKztQQFjDyEgY17RBMobaWxisbAhKsBLcneax9aQhfa1fb2vM7JyrSWL5WVUfAX3Cb9",
  "key3": "3xvHp698XRedntCgZK35g4Mtxfg3cE9HDpXPpHVKC5QYpQtfd6bL5qJPsDnP8FCbc1XT3eexnXSoedSSek54xdhg",
  "key4": "4JKZxZNJfJMqM1vYofbY2eKhmnNaa1pmLxePKGwifD3vTfTb9MDR44tmkam51gEVBiCU1GhLU5cGZPCWLwu27Yka",
  "key5": "3Tgw42SUH8BUnupNosuU2akHYJ9EWd5Jh5LBzNfm4cGeWRbFDdddHCeEM9MndeipqEcbBGoNyNuP6eP43F6MDsv4",
  "key6": "3bbcmSEMpTefz57gYBjkQY7yr7Fd8sVr6ZBsNJfnwXBnHqnJRYvrU7HFwzN7EXU4WrZqQWcK8sv4x21SY4TaBfm7",
  "key7": "2r1RXcB42WEd2fiCn3kZZW34SwrqnUehyikzonJ5CG3PGiuEZbuKhFEZJgHXEXQEWG8mZk8U2EMe9xcGdj3kSL7T",
  "key8": "4wLqijPHPKxu1CUxVgaXzdrXKCpqnqFgUmWZY93TqaHFNoYnWAdgnqjWeG1jotsLQoL6G4rEL5Z7Mc1EvbcoinUZ",
  "key9": "5wFbSRwhSFMxPmas9ZHHCZStbBAKuxBSD9w6nbNyPXXuMBNchnJPpGLTnHRPaNBYuMb5JBw4r6VpcDtNH8vpsUKG",
  "key10": "4RLUy7GMXdp586xKYbMnHRo8JN63P74S7ZkZd3b5FPcu43kKkjJ6EbeAsEwSJKGnqd1NFN9payh9uEuvqYa828ey",
  "key11": "2eRCMvJJhvHvgFx85UMtrj3JVrAYLnXtSmA1K4uSQjLKoLuuD1AqMZvQ5BqEyPF8yNBwByBT8cJeMehU53Fp2gBJ",
  "key12": "2VqtRg2VAb2S4s9XknAYFrHd3vb8jvGkpMQaGGEJHdGXvv4m69tuCcA7Lvy6bWxsak3oC9Bwgmqaxu1tQQbKRtvS",
  "key13": "53kUUSSZGXuqq7Gh3H8zZQ4EUEHW4kpxveAKXq38HSLcF9uL8ALVT6S893histPpSqVqxD89aMJvdaagjPqvFR1",
  "key14": "5tBSYGaUHw8ZiLYhmJLr9KtK3sQzWBBcBrvD29eJEorXShPfPMuuTfVYQki5BwBwajJgSkhJ7GKDMQWpd1AV8ozb",
  "key15": "cveud3i3T3fpfnVtBxnPZn3Wt5kg4NkTU3NiJCtX63v57J6R8bYwMFFMsZMkArUgS5kgMXvUkf4CRvWhcnnRRbr",
  "key16": "56w7BbrRgs4tN5dhLmTTgk9nteNsXkrRJrZ1abMihnFw65pnhm5gjRgJsXpUds9E7y7jN1ZGAP5pkzrBw2R7WmwE",
  "key17": "4BfSt3y2cK1F8aMXymDbw3BxAKAfow3X8uPsDEat3RE7n8wN4jEeTtGg5MymLRJ2ysTNYHTtmX8jtyCrjniWL5uk",
  "key18": "2GQ8hbKSzD7EkmuAUcevVTTfKjdJPNQ21BUHiKfcz9Y2XSg7VoU57ANke3ZxHQMxST9aw2M5uexiQ5968PQxXSe6",
  "key19": "fYt9Lnm6yCFr2tMhmZhYUkdNeAE7teYZR3oY2nVyX7rPu7kaV1PfhCtEwWqE6qwFNvFA6GnJghfdg847i6WHT7j",
  "key20": "4VAuG6v2rnVDtiMnxDQDxJwLx7h9HtD24bP8Ya3dK2ofcBdRgKJ2kSWDotG8dJYGeJ6sZK8nLiQhKhJuhcg73L1U",
  "key21": "3Eg1gX3zoZi2LUuREBFGNoJXmEGXt2z3wPYPA6hEmEtnTHwoeGPGnAoNPHR6AeaYPfJ7KiJvoPas4PkbyLqKNjfq",
  "key22": "3C9vG6oRL76YftyDNiWxPd2WqX9nLnUuAmpLocbqXSixTa7hnyCEsK79XtBJVBSfWmo8kxL6KhrHcubk4pisqUWV",
  "key23": "3QUUXj9rRKi4EUtKdiVC51dQXzNmXcsnAbLe39JMDxtaQnrr31gLpaWdJPCUFNRrWMCGMtw8fz46gdHS7gsujbJL",
  "key24": "5BvLvubPkyyrXK823f8XkGe4JSkqSQoiCCyvSqutmnwiWnUL5Ek6ERQAh9X6yMHKvjFNUQMHyFGMr3SJadbYR1Pu",
  "key25": "3vFgR2Ag9FN2BJKuLrEPXXZQkLveRDjvQFXE9kSTjvAHPv6MPZtHKBnbFdudL3MVhKr6zz3f7Dw6awGbnPvpy5AR",
  "key26": "44ZtpJwPzbGjLfVD8zm4dFcyx94Pi5J4poGvZCScpS5PhBg1PQipEbYH2QZGM2TuX83sHJ7sBqPp4CXUn83byJc7",
  "key27": "2eC9W7zwmWWQkpyHmWHHVm4bgNb3HLLACkkcViKs79StPchJrTyCNx7fL2SSk4fLKBx3uP7wux6yc1Awxn6uLMz3"
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
